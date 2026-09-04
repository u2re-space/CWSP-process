const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../fest/core4.js","../chunks/rolldown-runtime.js","../assets/index-C9QTqpCS.js","../fest/core.js","../fest/core2.js","../fest/object.js","../fest/core5.js","../fest/uniform.js"])))=>i.map(i=>d[i]);
import { t as __vitePreload } from "../assets/index-C9QTqpCS.js";
import "../fest/core4.js";
import { W as registerDirectoryRoot, Z as unregisterDirectoryRoot } from "../fest/core5.js";
import { a as listNativeStorage, c as readNativeStorageFile, i as isNativeStorageAvailable, l as removeNativeStorage, v as normalizeVirtualPath } from "./app.js";
//#region ../../modules/projects/fl.ui/src/ui/explorer/backends/chrome-bookmarks-backend.ts
var BOOKMARKS_ROOT = "/bookmarks/";
/**
* chrome.bookmarks is callback-first historically; modern Chromium returns a
* Promise when the callback arg is omitted. Normalize both shapes so
* `await api.getTree()` never resolves to `undefined` (empty Explorer list).
*/
function promisifyBookmarksApi(api) {
	const chromeErr = () => {
		try {
			const err = globalThis?.chrome?.runtime?.lastError;
			return err ? new Error(String(err.message || err)) : null;
		} catch {
			return null;
		}
	};
	const call = (method, ...args) => {
		const fn = api?.[method];
		if (typeof fn !== "function") return Promise.reject(/* @__PURE__ */ new Error(`chrome.bookmarks.${String(method)} missing`));
		try {
			const result = fn.apply(api, args);
			if (result != null && typeof result.then === "function") return result;
		} catch (e) {
			return Promise.reject(e);
		}
		return new Promise((resolve, reject) => {
			try {
				fn.apply(api, [...args, (res) => {
					const err = chromeErr();
					if (err) reject(err);
					else resolve(res);
				}]);
			} catch (e) {
				reject(e);
			}
		});
	};
	return {
		getTree: () => call("getTree"),
		getChildren: (id) => call("getChildren", id),
		create: (opts) => call("create", opts),
		update: (id, changes) => call("update", id, changes),
		move: (id, dest) => call("move", id, dest),
		remove: (id) => call("remove", id),
		removeTree: (id) => call("removeTree", id),
		onCreated: api.onCreated,
		onChanged: api.onChanged,
		onRemoved: api.onRemoved,
		onMoved: api.onMoved
	};
}
var toEntry = (node) => {
	if (typeof node.url === "string" && node.url.length > 0) return {
		name: node.title || node.id,
		kind: "file",
		href: node.url,
		type: "text/uri-list",
		bookmarkId: node.id,
		path: `${BOOKMARKS_ROOT}${node.id}`
	};
	return {
		name: node.title || node.id,
		kind: "directory",
		bookmarkId: node.id,
		path: `${BOOKMARKS_ROOT}${node.id}/`
	};
};
/**
* Extract the trailing path segment as a Chrome bookmark id.
* `/bookmarks/1/` → "1"; `/bookmarks/1/10` → "10"; `/bookmarks/` → "" (root).
*/
var lastId = (path) => {
	const segments = normalizeVirtualPath(path, false).split("/").filter(Boolean);
	const ids = segments[0] === "bookmarks" ? segments.slice(1) : segments;
	return ids[ids.length - 1] ?? "";
};
/**
* `true` when the path addresses a folder (ends with `/`).
*
* WHY (final review #3): the previous impl called `normalizeVirtualPath(path,
* true)` which **forces** a trailing slash onto every input, so URL bookmark
* paths like `/bookmarks/10` were rewritten to `/bookmarks/10/` and `remove`
* always picked `removeTree`. Chrome `remove` rejects folders-with-children
* and `removeTree` rejects URL nodes, so URL deletes failed. We now collapse
* duplicate slashes only and inspect the original trailing slash, which the
* backend's own `toEntry` sets deterministically (folders end with `/`, URL
* nodes do not).
*/
var isFolderPath = (path) => {
	const raw = String(path || "").replace(/\/{2,}/g, "/");
	return raw.length > 1 && raw.endsWith("/");
};
/**
* Build a FsBackend backed by `chrome.bookmarks`. Pass the real API in CRX
* boot, or a mock in tests. Returns `null` if no API is provided so callers
* can short-circuit registration outside CRX.
*/
function createChromeBookmarksBackend(api) {
	if (!api) return null;
	const bookmarks = promisifyBookmarksApi(api);
	const list = async (path) => {
		const norm = normalizeVirtualPath(path, true);
		if (norm === BOOKMARKS_ROOT) {
			const tree = await bookmarks.getTree();
			const entries = [];
			for (const root of tree || []) for (const child of root?.children ?? []) entries.push(toEntry(child));
			return entries;
		}
		const id = lastId(norm);
		if (!id) return [];
		return (await bookmarks.getChildren(id) || []).map(toEntry);
	};
	const mkdir = async (parentPath, name) => {
		const parentId = lastId(parentPath) || "0";
		await bookmarks.create({
			parentId,
			title: name
		});
	};
	const createUrl = async (parentPath, title, url) => {
		const parentId = lastId(parentPath) || "0";
		await bookmarks.create({
			parentId,
			title,
			url
		});
	};
	const rename = async (path, newName) => {
		const id = lastId(path);
		if (!id) return;
		await bookmarks.update(id, { title: newName });
	};
	const update = async (path, patch) => {
		const id = lastId(path);
		if (!id) return;
		const body = {};
		if (patch.title != null) body.title = String(patch.title || "").trim();
		if (patch.url != null && !isFolderPath(path)) body.url = String(patch.url || "").trim();
		if (!Object.keys(body).length) return;
		await bookmarks.update(id, body);
	};
	const move = async (fromPath, toDirPath) => {
		const id = lastId(fromPath);
		const parentId = lastId(toDirPath) || "0";
		if (!id) return;
		await bookmarks.move(id, { parentId });
	};
	const remove = async (path, _recursive) => {
		const id = lastId(path);
		if (!id) return;
		if (isFolderPath(path)) await bookmarks.removeTree(id);
		else await bookmarks.remove(id);
	};
	const writeFile = async (_parentPath, _file) => {
		throw new Error("bookmarks backend does not store file bytes");
	};
	const invalidationListeners = /* @__PURE__ */ new Set();
	const emitInvalidation = () => {
		for (const cb of invalidationListeners) try {
			cb();
		} catch {}
	};
	if (bookmarks.onCreated?.addListener) bookmarks.onCreated.addListener(emitInvalidation);
	if (bookmarks.onChanged?.addListener) bookmarks.onChanged.addListener(emitInvalidation);
	if (bookmarks.onRemoved?.addListener) bookmarks.onRemoved.addListener(emitInvalidation);
	if (bookmarks.onMoved?.addListener) bookmarks.onMoved.addListener(emitInvalidation);
	const subscribeBookmarksInvalidation = (cb) => {
		if (typeof cb !== "function") return () => {};
		invalidationListeners.add(cb);
		return () => {
			invalidationListeners.delete(cb);
		};
	};
	return {
		root: BOOKMARKS_ROOT,
		writable: true,
		list,
		mkdir,
		createUrl,
		rename,
		update,
		move,
		remove,
		writeFile,
		subscribeBookmarksInvalidation
	};
}
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/explorer/backends/chrome-downloads-backend.ts
var DOWNLOADS_ROOT = "/downloads/";
var fileNameOf = (item) => {
	const raw = String(item.filename || item.url || "").trim();
	if (!raw) return `download-${item.id ?? "0"}`;
	const parts = raw.split(/[/\\]/).filter(Boolean);
	return parts[parts.length - 1] || raw;
};
var createChromeDownloadsBackend = (downloads) => {
	if (typeof downloads?.search !== "function") return null;
	return {
		root: DOWNLOADS_ROOT,
		writable: false,
		async list() {
			const rows = await downloads.search({});
			return (Array.isArray(rows) ? rows : []).filter((item) => item && item.exists !== false && String(item.state || "") !== "interrupted").map((item) => {
				const id = String(item.id ?? fileNameOf(item));
				return {
					name: fileNameOf(item),
					kind: "file",
					path: `${DOWNLOADS_ROOT}${id}`
				};
			});
		}
	};
};
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/explorer/backends/native-fs-backend.ts
var toEntries = (path, rows) => {
	const base = normalizeVirtualPath(path, true);
	return rows.filter((row) => row?.name).map((row) => {
		const kind = row.kind === "directory" ? "directory" : "file";
		return {
			name: String(row.name),
			kind,
			path: row.path || `${base}${row.name}${kind === "directory" ? "/" : ""}`,
			type: kind === "file" ? void 0 : void 0
		};
	});
};
var createNativeFsBackend = (root) => ({
	root,
	writable: true,
	async list(path) {
		const rel = normalizeVirtualPath(path, true).slice(root.length - 1) || "/";
		return toEntries(path, await listNativeStorage(root === "/saf/" ? "saf" : "sdcard", rel));
	},
	async readFile(path) {
		return readNativeStorageFile(path);
	},
	async remove(path, _recursive) {
		await removeNativeStorage(path);
	}
});
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/explorer/backends/neutralino-fs-backend.ts
var DESKTOP_ROOT = "/desktop/";
var neu = () => {
	try {
		return globalThis.Neutralino ?? null;
	} catch {
		return null;
	}
};
var isNeutralinoFilesystemAvailable = () => typeof neu()?.filesystem?.readDirectory === "function";
var resolveNeutralinoHome = async () => {
	const os = neu()?.os;
	if (typeof os?.getPath === "function") for (const name of ["home", "documents"]) try {
		const path = String(await os.getPath(name) || "").trim();
		if (path) return path;
	} catch {}
	return "";
};
var joinNative = (home, rel) => {
	const base = home.replace(/[/\\]+$/, "");
	const tail = rel.replace(/^[/\\]+/, "").replace(/[/\\]+$/, "");
	if (!tail) return base || home;
	const sep = base.includes("\\") ? "\\" : "/";
	return `${base}${sep}${tail.replace(/[/\\]+/g, sep)}`;
};
var virtualToNative = (home, virtualPath, asDirectory) => {
	const v = normalizeVirtualPath(virtualPath, asDirectory);
	return joinNative(home, v.startsWith("/desktop/") ? v.slice(9) : v.replace(/^\/+/, ""));
};
var createNeutralinoFsBackend = (homePath) => {
	const fs = neu()?.filesystem;
	const home = String(homePath || "").trim();
	if (!home || typeof fs?.readDirectory !== "function") return null;
	return {
		root: DESKTOP_ROOT,
		writable: true,
		async list(path) {
			const native = virtualToNative(home, path, true);
			const rows = await fs.readDirectory(native);
			const base = normalizeVirtualPath(path, true);
			return (Array.isArray(rows) ? rows : []).map((row) => {
				const name = String(row?.entry || "").trim();
				if (!name || name === "." || name === "..") return null;
				const kind = String(row?.type || "").toUpperCase() === "DIRECTORY" ? "directory" : "file";
				return {
					name,
					kind,
					path: `${base}${name}${kind === "directory" ? "/" : ""}`
				};
			}).filter((row) => Boolean(row));
		},
		async mkdir(path, name) {
			if (typeof fs.createDirectory !== "function") throw new Error("Neutralino filesystem.createDirectory unavailable");
			const parent = virtualToNative(home, path, true);
			const sep = parent.includes("\\") ? "\\" : "/";
			await fs.createDirectory(`${parent}${sep}${name}`);
		},
		async remove(path) {
			if (typeof fs.remove !== "function") throw new Error("Neutralino filesystem.remove unavailable");
			await fs.remove(virtualToNative(home, path, false));
		},
		async rename(path, newName) {
			if (typeof fs.move !== "function") throw new Error("Neutralino filesystem.move unavailable");
			const from = virtualToNative(home, path, false);
			const parentVirt = normalizeVirtualPath(path, false).replace(/[^/]+$/, "");
			const dest = virtualToNative(home, `${parentVirt}${newName}`, false);
			await fs.move(from, dest);
		},
		async move(fromPath, toDirPath) {
			if (typeof fs.move !== "function") throw new Error("Neutralino filesystem.move unavailable");
			const from = virtualToNative(home, fromPath, false);
			const name = normalizeVirtualPath(fromPath, false).split("/").filter(Boolean).pop() || "";
			const dest = virtualToNative(home, `${normalizeVirtualPath(toDirPath, true)}${name}`, false);
			await fs.move(from, dest);
		},
		async writeFile(parentPath, file) {
			const dest = virtualToNative(home, `${normalizeVirtualPath(parentPath, true)}${file.name}`, false);
			const bytes = await file.arrayBuffer();
			if (typeof fs.writeBinaryFile === "function") {
				await fs.writeBinaryFile(dest, bytes);
				return;
			}
			if (typeof fs.writeFile === "function") {
				await fs.writeFile(dest, await file.text());
				return;
			}
			throw new Error("Neutralino filesystem write unavailable");
		}
	};
};
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/explorer/mounts.ts
var MOUNTS_ROOT = "/mounts/";
var CATALOG_KEY = "cw::explorer::mounts";
var handles = /* @__PURE__ */ new Map();
var observer = null;
var readCatalog = () => {
	try {
		const raw = localStorage.getItem(CATALOG_KEY);
		const parsed = raw ? JSON.parse(raw) : null;
		if (parsed && Array.isArray(parsed.mounts)) return parsed;
	} catch {}
	return { mounts: [] };
};
var writeCatalog = (catalog) => {
	try {
		localStorage.setItem(CATALOG_KEY, JSON.stringify(catalog));
	} catch {}
};
var walkHandle = async (dir, virtualDir) => {
	const entries = [];
	const base = normalizeVirtualPath(virtualDir, true);
	try {
		for await (const [name, handle] of dir.entries()) {
			const kind = handle.kind === "directory" ? "directory" : "file";
			entries.push({
				name,
				kind,
				path: `${base}${name}${kind === "directory" ? "/" : ""}`
			});
		}
	} catch {
		return [];
	}
	return entries;
};
var resolveNestedHandle = async (root, rel) => {
	let dir = root;
	for (const seg of rel.split("/").filter(Boolean)) try {
		dir = await dir.getDirectoryHandle(seg, { create: false });
	} catch {
		return null;
	}
	return dir;
};
var createMountBackend = (mount) => ({
	root: mount.path,
	writable: true,
	async list(path) {
		const handle = handles.get(mount.id);
		if (!handle) return [];
		const rel = normalizeVirtualPath(path, true).slice(mount.path.length);
		const dir = rel ? await resolveNestedHandle(handle, rel) : handle;
		if (!dir) return [];
		return walkHandle(dir, path);
	}
});
var observeHandle = (handle) => {
	const Ctor = globalThis.FileSystemObserver;
	if (typeof Ctor !== "function") return;
	try {
		observer?.disconnect?.();
		const next = new Ctor(() => {
			window.dispatchEvent(new CustomEvent("cwsp:explorer-mount-change"));
		});
		next.observe(handle);
		observer = next;
	} catch {}
};
var listExplorerMounts = () => readCatalog().mounts;
var addDirectoryMount = (handle, label) => {
	const catalog = readCatalog();
	const id = `mnt-${Date.now().toString(36)}`;
	const mount = {
		id,
		label: String(label || handle.name || id),
		path: `${MOUNTS_ROOT}${id}/`
	};
	handles.set(id, handle);
	catalog.mounts.push(mount);
	writeCatalog(catalog);
	registerFsBackend(createMountBackend(mount));
	registerDirectoryRoot(mount.path, handle);
	persistMountHandle(id, handle);
	observeHandle(handle);
	return mount;
};
var removeDirectoryMount = (id) => {
	const catalog = readCatalog();
	const mount = catalog.mounts.find((m) => m.id === id);
	catalog.mounts = catalog.mounts.filter((m) => m.id !== id);
	writeCatalog(catalog);
	handles.delete(id);
	if (mount) {
		unregisterFsBackend(mount.path);
		unregisterDirectoryRoot(mount.path);
	}
	forgetMountHandle(id);
};
var restoreDirectoryMounts = () => {
	restorePersistedHandles().then(() => {
		for (const mount of readCatalog().mounts) {
			const handle = handles.get(mount.id);
			if (!handle) continue;
			registerFsBackend(createMountBackend(mount));
			registerDirectoryRoot(mount.path, handle);
			observeHandle(handle);
		}
	});
};
var HANDLE_DB = "cw-explorer-fs";
var HANDLE_STORE = "handles";
var openHandleDb = () => new Promise((resolve, reject) => {
	const req = indexedDB.open(HANDLE_DB, 1);
	req.onupgradeneeded = () => req.result.createObjectStore(HANDLE_STORE);
	req.onsuccess = () => resolve(req.result);
	req.onerror = () => reject(req.error);
});
var persistMountHandle = async (id, handle) => {
	try {
		(await openHandleDb()).transaction(HANDLE_STORE, "readwrite").objectStore(HANDLE_STORE).put(handle, id);
	} catch {}
};
var forgetMountHandle = async (id) => {
	try {
		(await openHandleDb()).transaction(HANDLE_STORE, "readwrite").objectStore(HANDLE_STORE).delete(id);
	} catch {}
};
var restorePersistedHandles = async () => {
	if (typeof indexedDB === "undefined") return;
	try {
		const db = await openHandleDb();
		const stored = await new Promise((resolve, reject) => {
			const req = db.transaction(HANDLE_STORE, "readonly").objectStore(HANDLE_STORE).openCursor();
			const rows = [];
			req.onsuccess = () => {
				const cursor = req.result;
				if (!cursor) {
					resolve(rows);
					return;
				}
				rows.push([String(cursor.key), cursor.value]);
				cursor.continue();
			};
			req.onerror = () => reject(req.error);
		});
		for (const [id, handle] of stored) {
			if (!handle || handles.has(id)) continue;
			try {
				const perm = await handle.queryPermission?.({ mode: "read" });
				if (perm && perm !== "granted") continue;
				handles.set(id, handle);
			} catch {}
		}
	} catch {}
};
/** Placeholder so /mounts/ appears at virtual root even before a pick. */
var ensureMountsRootBackend = () => {
	registerFsBackend({
		root: MOUNTS_ROOT,
		writable: false,
		async list() {
			return listExplorerMounts().map((m) => ({
				name: m.label,
				kind: "directory",
				path: m.path
			}));
		}
	});
	restoreDirectoryMounts();
};
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/explorer/path-router.ts
/**
* INVARIANT: registry keys are normalized directory roots (trailing slash,
* except `/` itself). Longest-prefix match wins so nested backends (e.g.
* `/bookmarks/` under a future `/`-rooted fallback) resolve deterministically.
*/
var registry = /* @__PURE__ */ new Map();
var normalizeRoot = (root) => normalizeVirtualPath(root, true);
var backendListeners = /* @__PURE__ */ new Set();
function subscribeFsBackendRegister(listener) {
	if (typeof listener !== "function") return () => {};
	backendListeners.add(listener);
	return () => {
		backendListeners.delete(listener);
	};
}
var notifyBackendRegistered = (root) => {
	for (const listener of backendListeners) try {
		listener(root);
	} catch {}
};
function registerFsBackend(backend) {
	if (!backend?.root) return;
	const key = normalizeRoot(backend.root);
	registry.set(key, backend);
	notifyBackendRegistered(key);
	bindFsBackendToProvide(backend);
}
function unregisterFsBackend(root) {
	registry.delete(normalizeRoot(root));
}
/**
* Longest-prefix match. A backend rooted at `/user/` matches `/user/links/`
* but not `/user-other/`. The root `/` matches anything when registered.
*/
function resolveFsBackend(path) {
	const target = normalizeVirtualPath(path, true);
	let best = null;
	let bestLen = -1;
	for (const [root, backend] of registry) {
		if (root === "/") {
			if (bestLen < 1) {
				best = backend;
				bestLen = 1;
			}
			continue;
		}
		if (target === root || target.startsWith(root)) {
			if (root.length > bestLen) {
				best = backend;
				bestLen = root.length;
			}
		}
	}
	return best;
}
/**
* Returns one directory entry per registered root (skip the bare `/` root
* since the Explorer renders it as the virtual root frame, not as a row).
* Names are the leading path segment of each root, sorted for stable output.
*/
function listVirtualRootEntriesFromRouter() {
	const entries = [];
	for (const root of registry.keys()) {
		if (root === "/") continue;
		const name = root.split("/").filter(Boolean)[0];
		if (!name) continue;
		entries.push({
			name,
			kind: "directory",
			path: root
		});
	}
	entries.sort((a, b) => a.name.localeCompare(b.name));
	return entries;
}
var OPFS_SUPPORT_KEY = "cwsp.opfs.enabled";
var isOpfsSupportEnabledSync = () => {
	try {
		if (typeof localStorage === "undefined") return true;
		const value = localStorage.getItem(OPFS_SUPPORT_KEY);
		return value !== "0" && value !== "false";
	} catch {
		return true;
	}
};
var isOpfsCapabilityAvailableSync = () => typeof navigator !== "undefined" && typeof navigator.storage?.getDirectory === "function";
var isOpfsBackendActiveSync = () => isOpfsCapabilityAvailableSync() && isOpfsSupportEnabledSync();
var stripStoragePrefix = (path, scope) => {
	const vpath = String(path || "").replace(/^\/+/, "");
	const prefix = `${scope}/`;
	if (vpath.startsWith(prefix)) return `/${vpath.slice(prefix.length)}`;
	if (vpath === scope) return "/";
	return `/${vpath}`;
};
var listHandleDirectory = async (root, path) => {
	if (!root) return [];
	const segments = stripStoragePrefix(path, normalizeVirtualPath(path, true).startsWith("/idb/") ? "idb" : "user").split("/").filter(Boolean);
	let dir = root;
	for (const seg of segments) try {
		dir = await dir.getDirectoryHandle(seg, { create: false });
	} catch {
		return [];
	}
	const entries = [];
	try {
		for await (const [name, handle] of dir.entries()) {
			const kind = handle?.kind === "directory" ? "directory" : "file";
			const childPath = `${normalizeVirtualPath(path, true)}${name}${kind === "directory" ? "/" : ""}`;
			entries.push({
				name,
				kind,
				path: childPath
			});
		}
	} catch {
		return [];
	}
	return entries;
};
var readHandleFile = async (root, path, scope) => {
	if (!root) return null;
	const segments = stripStoragePrefix(path, scope).split("/").filter(Boolean);
	if (!segments.length) return null;
	let dir = root;
	for (const seg of segments.slice(0, -1)) try {
		dir = await dir.getDirectoryHandle(seg, { create: false });
	} catch {
		return null;
	}
	try {
		return await (await dir.getFileHandle(segments[segments.length - 1], { create: false })).getFile();
	} catch {
		return null;
	}
};
var bindFsBackendToProvide = (backend) => {
	if (backend.root === "/bookmarks/" || backend.root === "/downloads/") return;
	__vitePreload(async () => {
		const { registerProvideBackend } = await import("../fest/core4.js").then((n) => n.t);
		return { registerProvideBackend };
	}, __vite__mapDeps([0,1,2,3,4,5,6,7]), import.meta.url).then(({ registerProvideBackend }) => {
		registerProvideBackend({
			root: backend.root,
			list: async (path) => {
				const rows = await backend.list(path);
				const base = normalizeVirtualPath(path, true);
				return rows.map((row) => ({
					name: row.name,
					kind: row.kind,
					path: row.path || `${base}${row.name}${row.kind === "directory" ? "/" : ""}`
				}));
			},
			readFile: backend.readFile,
			writeFile: backend.writeFile ? async (path, file) => {
				const slash = String(path || "").lastIndexOf("/");
				const parent = slash >= 0 ? path.slice(0, slash + 1) : backend.root;
				await backend.writeFile?.(parent, file);
				return true;
			} : void 0
		});
	}).catch(() => {});
};
var loadIdbRoot = async () => {
	if (typeof indexedDB === "undefined") return null;
	try {
		const { getIdbRoot } = await __vitePreload(async () => {
			const { getIdbRoot } = await import("../fest/core4.js").then((n) => n.t);
			return { getIdbRoot };
		}, __vite__mapDeps([0,1,2,3,4,5,6,7]), import.meta.url);
		return await getIdbRoot();
	} catch {
		return null;
	}
};
var resolveUserHandleRoot = async () => {
	if (isOpfsBackendActiveSync()) try {
		return await navigator.storage.getDirectory();
	} catch {
		return null;
	}
	return loadIdbRoot();
};
var createStorageFsBackend = (root, getRoot) => {
	const scope = root === "/idb/" ? "idb" : "user";
	return {
		root,
		writable: true,
		async list(path) {
			return listHandleDirectory(await getRoot().catch(() => null), path);
		},
		async readFile(path) {
			return readHandleFile(await getRoot().catch(() => null), path, scope);
		},
		async mkdir(parentPath, name) {
			const handleRoot = await getRoot();
			if (!handleRoot) return;
			const segments = [...stripStoragePrefix(parentPath, scope).split("/").filter(Boolean), String(name || "").trim()].filter(Boolean);
			let dir = handleRoot;
			for (const seg of segments) dir = await dir.getDirectoryHandle(seg, { create: true });
		},
		async writeFile(parentPath, file) {
			const handleRoot = await getRoot();
			if (!handleRoot || !file) return;
			const segments = stripStoragePrefix(parentPath, scope).split("/").filter(Boolean);
			let dir = handleRoot;
			for (const seg of segments) dir = await dir.getDirectoryHandle(seg, { create: true });
			const writable = await (await dir.getFileHandle(file.name || `file-${Date.now()}`, { create: true })).createWritable();
			await writable.write(file);
			await writable.close();
		},
		async remove(path, recursive = true) {
			const handleRoot = await getRoot();
			if (!handleRoot) return;
			const segments = stripStoragePrefix(path, scope).replace(/\/+$/g, "").split("/").filter(Boolean);
			if (!segments.length) return;
			const name = segments.pop();
			let dir = handleRoot;
			for (const seg of segments) dir = await dir.getDirectoryHandle(seg, { create: false });
			await dir.removeEntry(name, { recursive });
		}
	};
};
function ensureDefaultFsBackends() {
	if (!resolveFsBackend("/user/")) registerFsBackend(createStorageFsBackend("/user/", resolveUserHandleRoot));
	if (isOpfsBackendActiveSync() && typeof indexedDB !== "undefined") {
		if (!resolveFsBackend("/idb/")) registerFsBackend(createStorageFsBackend("/idb/", loadIdbRoot));
	} else {
		unregisterFsBackend("/idb/");
		__vitePreload(async () => {
			const { unregisterProvideBackend } = await import("../fest/core4.js").then((n) => n.t);
			return { unregisterProvideBackend };
		}, __vite__mapDeps([0,1,2,3,4,5,6,7]), import.meta.url).then(({ unregisterProvideBackend }) => {
			unregisterProvideBackend("/idb/");
		}).catch(() => {});
	}
	if (!resolveFsBackend("/assets/")) registerFsBackend({
		root: "/assets/",
		writable: false,
		async list(path) {
			try {
				const { tryRemoteMountedList } = await __vitePreload(async () => {
					const { tryRemoteMountedList } = await import("../fest/core4.js").then((n) => n.t);
					return { tryRemoteMountedList };
				}, __vite__mapDeps([0,1,2,3,4,5,6,7]), import.meta.url);
				return await tryRemoteMountedList(path) ?? [];
			} catch {
				return [];
			}
		},
		async readFile(path) {
			const p = String(path || "").trim();
			if (!p || p.endsWith("/")) return null;
			try {
				const { tryRemoteMountedRead } = await __vitePreload(async () => {
					const { tryRemoteMountedRead } = await import("../fest/core4.js").then((n) => n.t);
					return { tryRemoteMountedRead };
				}, __vite__mapDeps([0,1,2,3,4,5,6,7]), import.meta.url);
				const remote = await tryRemoteMountedRead(p);
				if (remote) return remote;
			} catch {}
			try {
				const r = await fetch(p);
				if (!r?.ok) return null;
				const blob = await r.blob();
				const name = p.slice(p.lastIndexOf("/") + 1) || "asset";
				return new File([blob], name, { type: blob.type || "" });
			} catch {
				return null;
			}
		}
	});
	__vitePreload(async () => {
		const { ensureRemoteMountedFs } = await import("../fest/core4.js").then((n) => n.t);
		return { ensureRemoteMountedFs };
	}, __vite__mapDeps([0,1,2,3,4,5,6,7]), import.meta.url).then(({ ensureRemoteMountedFs }) => {
		ensureRemoteMountedFs();
	}).catch(() => {});
	if (!resolveFsBackend("/bookmarks/")) {
		const chromeAny = globalThis?.chrome;
		if (chromeAny?.bookmarks) {
			const backend = createChromeBookmarksBackend(chromeAny.bookmarks);
			if (backend) registerFsBackend(backend);
		}
	}
	if (!resolveFsBackend("/downloads/")) {
		const chromeAny = globalThis?.chrome;
		if (chromeAny?.downloads) {
			const backend = createChromeDownloadsBackend(chromeAny.downloads);
			if (backend) registerFsBackend(backend);
		}
	}
	if (isNativeStorageAvailable()) {
		if (!resolveFsBackend("/sdcard/")) registerFsBackend(createNativeFsBackend("/sdcard/"));
		if (!resolveFsBackend("/saf/")) registerFsBackend(createNativeFsBackend("/saf/"));
	}
	if (isNeutralinoFilesystemAvailable() && !resolveFsBackend("/desktop/")) resolveNeutralinoHome().then((home) => {
		if (!home || resolveFsBackend("/desktop/")) return;
		const backend = createNeutralinoFsBackend(home);
		if (backend) registerFsBackend(backend);
	});
	if (!resolveFsBackend("/mounts/")) ensureMountsRootBackend();
	observeUserFileSystem();
}
/**
* WHY: FileSystemObserver is Chromium-experimental. When present, OPFS
* mutations refresh Explorer without polling. Cap / SAF fall back to the
* toolbar refresh and `cwsp:explorer-mount-change`.
*/
var observeUserFileSystem = () => {
	if (typeof window === "undefined") return;
	const g = globalThis;
	const Ctor = g.FileSystemObserver;
	const getDir = g.navigator?.storage?.getDirectory;
	if (typeof Ctor !== "function" || typeof getDir !== "function") return;
	if (globalThis.__CWSP_USER_FS_OBS__) return;
	globalThis.__CWSP_USER_FS_OBS__ = true;
	getDir.call(g.navigator?.storage).then((root) => {
		return new Ctor(() => {
			window.dispatchEvent(new CustomEvent("cwsp:explorer-mount-change"));
		}).observe(root);
	}).catch(() => {
		globalThis.__CWSP_USER_FS_OBS__ = false;
	});
};
ensureDefaultFsBackends();
//#endregion
export { unregisterFsBackend as a, removeDirectoryMount as c, subscribeFsBackendRegister as i, listVirtualRootEntriesFromRouter as n, addDirectoryMount as o, resolveFsBackend as r, listExplorerMounts as s, ensureDefaultFsBackends as t };
