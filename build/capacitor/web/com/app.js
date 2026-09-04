const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../fest/core4.js","../chunks/rolldown-runtime.js","../assets/index-CU5eF_0S.js","../chunks/ecosystem-skus.js","../fest/core.js","../fest/core2.js","../fest/object.js","../fest/core5.js","../fest/uniform.js"])))=>i.map(i=>d[i]);
import { r as __exportAll } from "../chunks/rolldown-runtime.js";
import { t as __vitePreload } from "../assets/index-CU5eF_0S.js";
//#region ../../modules/projects/fl.ui/src/ui/explorer/fs-backend.ts
function normalizeVirtualPath(path, asDirectory = true) {
	let p = String(path || "/").trim() || "/";
	if (!p.startsWith("/")) p = `/${p}`;
	p = p.replace(/\/{2,}/g, "/");
	if (p !== "/" && asDirectory && !p.endsWith("/")) p += "/";
	if (p !== "/" && !asDirectory && p.endsWith("/")) p = p.slice(0, -1);
	return p;
}
/**
* WHY: Transfer / Android send `/storage/emulated/0/…`, `file://`, or
* `content://…/primary:Download/…`. Explorer lists that as `/sdcard/…`.
* Do not map `/saf/` — that is Explorer's own tree, not Transfer landing.
*/
function toExplorerStoragePath(path, asDirectory = true) {
	let p = String(path || "").trim();
	if (!p) return "";
	try {
		if (/^file:/i.test(p)) {
			const u = new URL(p);
			p = decodeURIComponent(u.pathname || p);
		}
	} catch {}
	if (/^content:/i.test(p)) {
		let decoded = p;
		try {
			decoded = decodeURIComponent(p);
		} catch {
			decoded = p;
		}
		const id = decoded.match(/(?:primary|home):([^?#]*)/i);
		if (!id) return "";
		const rel = String(id[1] || "").replace(/^\/+/, "");
		p = rel ? `/sdcard/${rel}` : "/sdcard/";
	}
	p = p.replace(/\\/g, "/");
	p = p.replace(/^(?:\/storage\/emulated\/0|\/mnt\/sdcard|storage\/emulated\/0|mnt\/sdcard)(?=\/|$)/i, "/sdcard");
	p = p.replace(/^\/sdcard\/sdcard(?=\/|$)/i, "/sdcard");
	if (!p.startsWith("/")) p = `/${p}`;
	return normalizeVirtualPath(p, asDirectory);
}
function faviconForHref(href) {
	const raw = String(href || "").trim();
	if (!raw) return "";
	if (!/^https?:\/\//i.test(raw)) return "";
	try {
		const host = new URL(raw).hostname;
		if (!host) return "";
		return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=64`;
	} catch {
		return "";
	}
}
/**
* Drag payload for Explorer → Speed Dial / browser drops.
*
* WHY: rows used to set `text/plain` to a virtual path (`/bookmarks/10`). Speed
* Dial's last-resort parser `JSON.parse`s that string and throws. URL bookmarks
* must travel as http(s) `text/uri-list`; folders travel as a JSON shortcut
* envelope (`open-path` + `path` + label) so the dial keeps the bookmark title.
*/
function buildExplorerDragPayload(item, currentPath) {
	const href = String(item?.href || "").trim();
	const itemPath = String(item?.path || "").trim();
	const base = String(currentPath || "/");
	const name = String(item?.name || "").trim();
	const abs = itemPath || `${base.endsWith("/") ? base : `${base}/`}${name}`;
	const isUrl = /^https?:\/\//i.test(href);
	const action = isUrl ? "open-link" : "open-path";
	const label = name || href || abs;
	const envelope = {
		state: {
			icon: isUrl ? "link" : item?.kind === "directory" ? "folder" : "file",
			label,
			action
		},
		desc: {
			action,
			href: isUrl ? href : "",
			path: abs,
			kind: item?.kind || (isUrl ? "file" : "directory")
		}
	};
	const json = JSON.stringify(envelope);
	return {
		href,
		path: abs,
		json,
		uriList: isUrl ? href : abs,
		plain: isUrl ? href : json
	};
}
function resolveEntryIcon(entry) {
	if (!entry) return "";
	const href = entry.href ? String(entry.href) : "";
	if (!href) return "";
	return faviconForHref(href);
}
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/explorer/storage-bridge.ts
var storage_bridge_exports = /* @__PURE__ */ __exportAll({
	canShowDirectoryPicker: () => canShowDirectoryPicker,
	copyNativeStorageImage: () => copyNativeStorageImage,
	ensureNativeStorageProvide: () => ensureNativeStorageProvide,
	getAllFilesStatus: () => getAllFilesStatus,
	isNativeStorageAvailable: () => isNativeStorageAvailable,
	listNativeStorage: () => listNativeStorage,
	openNativeStorageFile: () => openNativeStorageFile,
	pickBrowserDirectory: () => pickBrowserDirectory,
	pickSafTree: () => pickSafTree,
	readNativeStorageFile: () => readNativeStorageFile,
	removeNativeStorage: () => removeNativeStorage,
	requestAllFilesAccess: () => requestAllFilesAccess,
	resolveNativeStorageRealPath: () => resolveNativeStorageRealPath,
	resolveNativeStorageUri: () => resolveNativeStorageUri,
	setExplorerStorageApi: () => setExplorerStorageApi,
	shareNativeStorageFile: () => shareNativeStorageFile,
	toNativeStorageVirtualPath: () => toNativeStorageVirtualPath,
	writeNativeClipboardImage: () => writeNativeClipboardImage
});
var api = null;
var setExplorerStorageApi = (next) => {
	api = next;
};
var INVOKE_MS = 12e3;
var withTimeout = async (task, ms, fallback) => {
	let timer;
	try {
		return await Promise.race([task, new Promise((resolve) => {
			timer = setTimeout(() => resolve(fallback), ms);
		})]);
	} finally {
		if (timer) clearTimeout(timer);
	}
};
var capacitorInvoke = async (channel, payload = {}) => {
	const g = globalThis;
	const plugin = g.__CWS_BRIDGE_PLUGIN__ || g.Capacitor?.Plugins?.CwsBridge;
	if (typeof plugin?.invoke !== "function") return {
		ok: false,
		error: "no-bridge"
	};
	const r = await withTimeout(Promise.resolve(plugin.invoke({
		channel,
		payload
	})), INVOKE_MS, {
		ok: false,
		error: "timeout"
	});
	const echo = r?.echo && typeof r.echo === "object" ? r.echo : {};
	return {
		...r || {},
		...echo
	};
};
/**
* WHY: Speed Dial / shortcuts store `file:///storage/emulated/0/…`, `/mnt/sdcard/…`,
* or `sdcard/…`. CwsStorageHost only understands `/sdcard/` `/saf/`.
*/
var toNativeStorageVirtualPath = (raw) => {
	let s = String(raw || "").trim();
	if (!s) return "";
	try {
		s = decodeURIComponent(s);
	} catch {}
	const mapped = toExplorerStoragePath(s, false);
	return /^\/(?:sdcard|saf)(?:\/|$)/i.test(mapped) ? mapped : "";
};
var parseNativeStoragePath = (virtualPath) => {
	const raw = toNativeStorageVirtualPath(virtualPath) || String(virtualPath || "").trim();
	if (!raw) return null;
	const root = raw === "/saf" || raw.startsWith("/saf/") ? "saf" : raw === "/sdcard" || raw.startsWith("/sdcard/") ? "sdcard" : "";
	if (!root) return null;
	if (raw === `/${root}`) return {
		root,
		rel: "/"
	};
	const prefix = root === "saf" ? "/saf/" : "/sdcard/";
	return {
		root,
		rel: (raw.startsWith(prefix) ? raw.slice(prefix.length - 1) : raw) || "/"
	};
};
var isNativeStorageAvailable = () => {
	if (api?.list) return true;
	try {
		const c = globalThis.Capacitor;
		return typeof c?.isNativePlatform === "function" && c.isNativePlatform();
	} catch {
		return false;
	}
};
var listNativeStorage = async (root, path = "/") => {
	if (api?.list) return api.list(root, path);
	const echo = await capacitorInvoke("storage:list", {
		root,
		path
	});
	const rows = echo.entries || echo.files;
	return Array.isArray(rows) ? rows : [];
};
var dataUrlToFile = async (dataUrl, name, mime) => {
	const src = String(dataUrl || "").trim();
	if (!src) return null;
	const fileName = name || "file";
	const fallbackType = mime || "application/octet-stream";
	if (src.startsWith("data:")) {
		const comma = src.indexOf(",");
		if (comma < 0) return null;
		const meta = src.slice(5, comma);
		const payload = src.slice(comma + 1);
		const type = meta.split(";")[0] || fallbackType;
		try {
			if (/;base64/i.test(meta)) {
				const bin = atob(payload);
				const bytes = new Uint8Array(bin.length);
				for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
				return new File([bytes], fileName, { type });
			}
			return new File([decodeURIComponent(payload)], fileName, { type });
		} catch {
			return null;
		}
	}
	if (/^[A-Za-z0-9+/=\s]+$/.test(src) && src.length > 16) try {
		const bin = atob(src.replace(/\s/g, ""));
		const bytes = new Uint8Array(bin.length);
		for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
		return new File([bytes], fileName, { type: fallbackType });
	} catch {}
	try {
		const blob = await (await fetch(src)).blob();
		return new File([blob], fileName, { type: blob.type || fallbackType });
	} catch {
		return null;
	}
};
/** Read one `/sdcard/` or `/saf/` file through CwsBridge (`storage:read`). */
var readNativeStorageFile = async (virtualPath, opts) => {
	const parsed = parseNativeStoragePath(virtualPath);
	if (!parsed) return null;
	const readOnce = async () => {
		const echo = await capacitorInvoke("storage:read", {
			root: parsed.root,
			path: parsed.rel
		});
		const name = String(echo.name || virtualPath.split("/").filter(Boolean).pop() || "file");
		const mime = String(echo.mime || echo.mimeType || "application/octet-stream");
		const error = String(echo.error || "");
		const text = String(echo.text || echo.content || "");
		if (text) return {
			file: new File([text], name, { type: mime || "text/markdown" }),
			error
		};
		const data = String(echo.data || echo.dataUrl || "");
		if (data) return {
			file: await dataUrlToFile(data, name, mime),
			error
		};
		return {
			file: null,
			error
		};
	};
	let got = await readOnce();
	if (got.file) return got.file;
	if (opts?.requestAccess === false) return null;
	if (parsed.root === "sdcard") {
		const denied = /all-files-required|permission|EACCES|denied|timeout/i.test(got.error);
		const status = await getAllFilesStatus();
		if (denied || !status.allFilesAccess) {
			await requestAllFilesAccess();
			got = await readOnce();
		}
	}
	return got.file;
};
/** content:// or file:// for Document ACTION_VIEW — do not read bytes. */
var resolveNativeStorageUri = async (virtualPath) => {
	const parsed = parseNativeStoragePath(virtualPath);
	if (!parsed) return "";
	const echo = await capacitorInvoke("storage:uri", {
		root: parsed.root,
		path: parsed.rel
	});
	return String(echo.uri || echo.url || "").trim();
};
/** Put `/sdcard/` `/saf/` image on the Android clipboard (ClipData URI). */
var copyNativeStorageImage = async (virtualPath) => {
	const parsed = parseNativeStoragePath(virtualPath);
	if (!parsed) return false;
	const echo = await capacitorInvoke("storage:copy-image", {
		root: parsed.root,
		path: parsed.rel
	});
	return echo.copied === true || echo.ok === true;
};
/** Bytes (data URL) → cache FileProvider URI → system clipboard. */
var writeNativeClipboardImage = async (dataUrl, mimeType = "image/png", name = "image.png") => {
	const data = String(dataUrl || "").trim();
	if (!data) return false;
	const echo = await capacitorInvoke("clipboard:write-local-image", {
		data,
		mimeType: String(mimeType || "image/png"),
		name: String(name || "image.png")
	});
	return echo.copied === true || echo.ok === true;
};
/** Delete a `/sdcard/` or `/saf/` file or folder through CwsBridge (`storage:delete`). */
var removeNativeStorage = async (virtualPath) => {
	const parsed = parseNativeStoragePath(virtualPath);
	if (!parsed) throw new Error("not native storage");
	const plugin = globalThis.Capacitor?.Plugins?.CwsBridge;
	if (typeof plugin?.invoke !== "function") throw new Error("no native storage");
	const r = await plugin.invoke({
		channel: "storage:delete",
		payload: {
			root: parsed.root,
			path: parsed.rel
		}
	});
	const echo = r?.echo || {};
	if (r?.ok === false || echo.deleted !== true) throw new Error(String(echo.error || "delete failed"));
};
/** ACTION_SEND chooser — Android share sheet, no JS byte hop. */
var shareNativeStorageFile = async (virtualPath, opts = {}) => {
	const parsed = parseNativeStoragePath(virtualPath);
	if (!parsed) return false;
	const mimeType = String(opts.mimeType || "").trim();
	const title = String(opts.title || "Share").trim();
	const echo = await capacitorInvoke("storage:share", {
		root: parsed.root,
		path: parsed.rel,
		...mimeType ? { mimeType } : {},
		...title ? { title } : {}
	});
	return echo.opened === true || echo.sent === true || echo.ok === true;
};
/** Absolute `/storage/emulated/0/…` or SAF `content://` URI. */
var resolveNativeStorageRealPath = async (virtualPath) => {
	const parsed = parseNativeStoragePath(virtualPath);
	if (!parsed) return "";
	const echo = await capacitorInvoke("storage:realpath", {
		root: parsed.root,
		path: parsed.rel
	});
	return String(echo.path || echo.uri || echo.url || "").trim();
};
/**
* WHY: Capacitor Explorer must open `/sdcard/` / `/saf/` in one native hop
* (FileProvider + SEND/VIEW). Reading bytes in JS then hopping URI often never launches.
*/
var openNativeStorageFile = async (virtualPath, opts = {}) => {
	const parsed = parseNativeStoragePath(virtualPath);
	if (!parsed) return false;
	const packageName = String(opts.packageName || "").trim();
	const mimeType = String(opts.mimeType || "").trim();
	const title = String(opts.title || (packageName ? "Open" : "Open with")).trim();
	const echo = await capacitorInvoke("storage:open", {
		root: parsed.root,
		path: parsed.rel,
		chooser: packageName ? opts.chooser === true : opts.chooser !== false,
		...packageName ? { packageName } : {},
		...mimeType ? { mimeType } : {},
		...title ? { title } : {}
	});
	if (echo.opened === true || echo.sent === true || echo.ok === true) return true;
	const err = String(echo.error || "");
	if (err === "all-files-required" || parsed.root === "sdcard" && err === "not a file") {
		if (!(await getAllFilesStatus()).allFilesAccess) await requestAllFilesAccess();
	}
	return false;
};
/**
* WHY: Document / Process do not import Explorer path-router, so `provide("/sdcard/…")`
* had no backend and the viewer stayed empty.
*/
var ensureNativeStorageProvide = async () => {
	if (!isNativeStorageAvailable()) return;
	try {
		const { registerProvideBackend } = await __vitePreload(async () => {
			const { registerProvideBackend } = await import("../fest/core4.js").then((n) => n.t);
			return { registerProvideBackend };
		}, __vite__mapDeps([0,1,2,3,4,5,6,7,8]), import.meta.url);
		const bind = (root) => {
			registerProvideBackend({
				root,
				list: async (path) => {
					const parsed = parseNativeStoragePath(String(path || root));
					const rows = await listNativeStorage(parsed?.root || (root === "/saf/" ? "saf" : "sdcard"), parsed?.rel || "/");
					const base = String(path || root).endsWith("/") ? String(path || root) : `${path || root}/`;
					return rows.filter((row) => row?.name).map((row) => ({
						name: String(row.name),
						kind: row.kind === "directory" ? "directory" : "file",
						path: row.path || `${base}${row.name}${row.kind === "directory" ? "/" : ""}`
					}));
				},
				readFile: (path) => readNativeStorageFile(path)
			});
		};
		bind("/sdcard/");
		bind("/saf/");
	} catch {}
};
var pickSafTree = async () => {
	if (api?.pickSaf) return api.pickSaf();
	const echo = await capacitorInvoke("storage:pick-saf", {});
	return String(echo.uri || echo.treeUri || "");
};
var getAllFilesStatus = async () => {
	if (api?.allFilesStatus) return api.allFilesStatus();
	const echo = await capacitorInvoke("storage:all-files-status", {});
	return {
		allFilesAccess: echo.allFilesAccess === true,
		runtimeGranted: echo.runtimeGranted === true,
		note: echo.note ? String(echo.note) : void 0
	};
};
var requestAllFilesAccess = async () => {
	if (api?.requestAllFiles) return api.requestAllFiles();
	const echo = await capacitorInvoke("storage:all-files-request", {});
	return echo.ok === true || echo.opened === true;
};
var canShowDirectoryPicker = () => typeof globalThis.showDirectoryPicker === "function";
var pickBrowserDirectory = async () => {
	const pick = globalThis.showDirectoryPicker;
	if (typeof pick !== "function") return null;
	try {
		return await pick({ mode: "readwrite" });
	} catch {
		return null;
	}
};
//#endregion
export { buildExplorerDragPayload as _, listNativeStorage as a, toExplorerStoragePath as b, readNativeStorageFile as c, resolveNativeStorageRealPath as d, resolveNativeStorageUri as f, writeNativeClipboardImage as g, toNativeStorageVirtualPath as h, isNativeStorageAvailable as i, removeNativeStorage as l, storage_bridge_exports as m, copyNativeStorageImage as n, pickBrowserDirectory as o, shareNativeStorageFile as p, getAllFilesStatus as r, pickSafTree as s, canShowDirectoryPicker as t, requestAllFilesAccess as u, normalizeVirtualPath as v, resolveEntryIcon as y };
