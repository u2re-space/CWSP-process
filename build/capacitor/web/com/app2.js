const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../fest/core4.js","../chunks/rolldown-runtime.js","../assets/index-CU5eF_0S.js","../chunks/ecosystem-skus.js","../fest/core.js","../fest/core2.js","../fest/object.js","../fest/core5.js","../fest/uniform.js"])))=>i.map(i=>d[i]);
import { r as __exportAll } from "../chunks/rolldown-runtime.js";
import { t as __vitePreload } from "../assets/index-CU5eF_0S.js";
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
	shareNativeStorageFile: () => shareNativeStorageFile,
	toNativeStorageVirtualPath: () => toNativeStorageVirtualPath,
	writeNativeClipboardImage: () => writeNativeClipboardImage
});
var api = null;
var capacitorInvoke = async (channel, payload = {}) => {
	const plugin = globalThis.Capacitor?.Plugins?.CwsBridge;
	if (typeof plugin?.invoke !== "function") return { ok: false };
	const r = await plugin.invoke({
		channel,
		payload
	});
	return r?.echo || r || {};
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
	s = s.replace(/^file:\/\/(?:localhost)?/i, "");
	if (/^\/(?:sdcard|saf)(?:\/|$)/i.test(s)) return s;
	if (/^(?:sdcard|saf)(?:\/|$)/i.test(s)) return `/${s}`;
	const mapped = s.replace(/^(?:\/storage\/emulated\/0|\/mnt\/sdcard|storage\/emulated\/0|mnt\/sdcard)(?=\/|$)/i, "/sdcard");
	return /^\/sdcard(?:\/|$)/i.test(mapped) ? mapped : "";
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
	try {
		const blob = await (await fetch(src)).blob();
		return new File([blob], name || "file", { type: blob.type || mime || "application/octet-stream" });
	} catch {
		return null;
	}
};
/** Read one `/sdcard/` or `/saf/` file through CwsBridge (`storage:read`). */
var readNativeStorageFile = async (virtualPath) => {
	const parsed = parseNativeStoragePath(virtualPath);
	if (!parsed) return null;
	const echo = await capacitorInvoke("storage:read", {
		root: parsed.root,
		path: parsed.rel
	});
	const data = String(echo.data || echo.dataUrl || "");
	if (!data) return null;
	return dataUrlToFile(data, String(echo.name || virtualPath.split("/").filter(Boolean).pop() || "file"), String(echo.mime || echo.mimeType || "application/octet-stream"));
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
export { listNativeStorage as a, readNativeStorageFile as c, resolveNativeStorageRealPath as d, resolveNativeStorageUri as f, writeNativeClipboardImage as h, isNativeStorageAvailable as i, removeNativeStorage as l, storage_bridge_exports as m, copyNativeStorageImage as n, pickBrowserDirectory as o, shareNativeStorageFile as p, getAllFilesStatus as r, pickSafTree as s, canShowDirectoryPicker as t, requestAllFilesAccess as u };
