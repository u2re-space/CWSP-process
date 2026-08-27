const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../com/app.js","./rolldown-runtime.js"])))=>i.map(i=>d[i]);
import { s as inferCwspSkuFromLocation } from "../shells/boot-history-base.js";
const __vitePreload = (baseModule) => Promise.resolve().then(() => baseModule());
//#region src/shared/routing/channel/sku-ingress.ts
var WALLPAPER_EXT = /* @__PURE__ */ new Set([
	"png",
	"jpg",
	"jpeg",
	"webp",
	"gif",
	"bmp",
	"avif"
]);
var MIN_WALLPAPER_BYTES = 20480;
var MAX_WALLPAPER_BYTES = 26214400;
var MIN_WALLPAPER_EDGE = 320;
var MAX_WALLPAPER_EDGE = 16384;
var MIN_WALLPAPER_ASPECT = .3;
var MAX_WALLPAPER_ASPECT = 3.5;
var fileExt = (name) => {
	const n = String(name || "").trim().toLowerCase();
	const cut = n.lastIndexOf(".");
	return cut > 0 ? n.slice(cut + 1) : "";
};
/** Directory-like path (share URL, launch path, or typed location). */
var looksLikeDirectoryPath = (raw) => {
	const t = String(raw || "").trim();
	if (!t) return false;
	if (/[/\\]$/.test(t)) return true;
	const noQuery = t.split(/[?#]/)[0] || t;
	if (/[/\\]$/.test(noQuery)) return true;
	const base = noQuery.replace(/\\/g, "/");
	const last = base.slice(base.lastIndexOf("/") + 1);
	if (!last) return true;
	if (/\.[a-z0-9]{1,8}$/i.test(last)) return false;
	return /[/\\]/.test(noQuery) || /^(file|content|saf):/i.test(t);
};
/** Sync wallpaper gate — decode still required before paint. */
var looksLikeWallpaperFile = (file) => {
	if (!file) return false;
	const mime = String(file.type || "").toLowerCase();
	const ext = fileExt(file.name);
	if (!(mime.startsWith("image/") || WALLPAPER_EXT.has(ext))) return false;
	if (mime.includes("svg") || ext === "svg") return false;
	if (file.size < MIN_WALLPAPER_BYTES || file.size > MAX_WALLPAPER_BYTES) return false;
	return true;
};
/** Decode-time checks: edge length and aspect so icons / strips do not become wallpaper. */
var isWallpaperCompatible = async (file) => {
	if (!looksLikeWallpaperFile(file)) return false;
	try {
		const bmp = await createImageBitmap(file);
		const w = bmp.width;
		const h = bmp.height;
		bmp.close?.();
		if (w < MIN_WALLPAPER_EDGE || h < MIN_WALLPAPER_EDGE) return false;
		if (w > MAX_WALLPAPER_EDGE || h > MAX_WALLPAPER_EDGE) return false;
		const aspect = w / h;
		return aspect >= MIN_WALLPAPER_ASPECT && aspect <= MAX_WALLPAPER_ASPECT;
	} catch {
		return false;
	}
};
var firstFile = (payload) => {
	return (Array.isArray(payload.files) ? payload.files : []).find((f) => f instanceof File);
};
var pathProbe = (payload) => {
	const hintPath = typeof payload.hint?.source === "string" ? payload.hint.source.trim() : "";
	if (hintPath) return hintPath;
	const url = String(payload.url || "").trim();
	if (url) return url;
	const title = String(payload.title || "").trim();
	if (title && /[/\\]/.test(title)) return title;
	const text = String(payload.text || "").trim();
	if (text && !/\s/.test(text) && /[/\\]/.test(text)) return text;
	return "";
};
/**
* Receiving SKU owns the share. Hub/CRX fall through to content-based routing.
* WHY: otherwise process hands text to document, and document hands images to process.
*/
var skuIngressHint = (payload, opts) => {
	const sku = opts?.sku || inferCwspSkuFromLocation();
	if (!sku || sku === "crx" || sku === "transfer") return void 0;
	const file = firstFile(payload);
	const path = pathProbe(payload);
	const filename = payload.hint?.filename || file?.name || "";
	const mime = String(file?.type || "").toLowerCase();
	const kind = mime.startsWith("image/") ? "image" : mime.startsWith("text/") ? "text" : file ? "file" : void 0;
	if (sku === "process") {
		const hinted = payload.hint?.action;
		return {
			destination: "workcenter",
			action: hinted === "attach" || hinted === "process" ? hinted : opts?.autoProcessShared !== false ? "process" : "attach",
			filename,
			contentType: kind
		};
	}
	if (sku === "document") return {
		destination: "viewer",
		action: "open",
		filename,
		contentType: kind
	};
	if (sku === "explorer") {
		const dir = looksLikeDirectoryPath(path) && !file;
		const hasFile = Boolean(file) || Number(payload.fileCount || 0) > 0;
		return {
			destination: "explorer",
			action: dir || path && !hasFile ? "open" : hasFile ? "ask" : "open",
			filename,
			source: path || payload.hint?.source,
			contentType: kind
		};
	}
	if (sku === "launcher") {
		const hinted = payload.hint?.action;
		const wallpaper = hinted === "wallpaper" || hinted !== "shortcut" && looksLikeWallpaperFile(file || null);
		return {
			destination: "home",
			action: wallpaper ? "wallpaper" : "shortcut",
			filename,
			contentType: wallpaper ? "image" : void 0
		};
	}
};
var dataUrlToFile = async (raw, name = "shared.bin", mime = "application/octet-stream") => {
	const src = String(raw || "").trim();
	if (!src) return null;
	try {
		const blob = src.startsWith("data:") ? await (await fetch(src)).blob() : new Blob([Uint8Array.from(atob(src.replace(/^data:[^,]*,/, "")), (c) => c.charCodeAt(0))], { type: mime });
		return new File([blob], name, { type: blob.type || mime });
	} catch {
		return null;
	}
};
/** Paint wallpaper or pin a Speed Dial tile. Used by shell share-target and launch-queue. */
var applyLauncherIngress = async (payload) => {
	const files = Array.isArray(payload.files) ? payload.files.filter((f) => f instanceof File) : [];
	const image = files.find((f) => looksLikeWallpaperFile(f));
	if ((payload.action === "wallpaper" || !payload.action) && image && await isWallpaperCompatible(image)) {
		const { setAppWallpaperFromBlob, getWallpaperStoragePointer, WALLPAPER_IDB_MARKER } = await __vitePreload(async () => {
			const { setAppWallpaperFromBlob, getWallpaperStoragePointer, WALLPAPER_IDB_MARKER } = await import("../com/app.js").then((n) => n.R);
			return {
				setAppWallpaperFromBlob,
				getWallpaperStoragePointer,
				WALLPAPER_IDB_MARKER
			};
		}, __vite__mapDeps([0,1]), import.meta.url);
		const { wallpaperState, persistWallpaper } = await __vitePreload(async () => {
			const { wallpaperState, persistWallpaper } = await import("../com/app.js").then((n) => n.C);
			return {
				wallpaperState,
				persistWallpaper
			};
		}, __vite__mapDeps([0,1]), import.meta.url);
		await setAppWallpaperFromBlob(image);
		wallpaperState.src = getWallpaperStoragePointer() || WALLPAPER_IDB_MARKER;
		persistWallpaper();
		return "wallpaper";
	}
	const { pinSpeedDialLinkFromIntent, parseSpeedDialItemFromURL, parseSpeedDialItemFromSmartText, addSpeedDialItem, persistSpeedDialItems, persistSpeedDialMeta, findNextFreeSpeedDialCell } = await __vitePreload(async () => {
		const { pinSpeedDialLinkFromIntent, parseSpeedDialItemFromURL, parseSpeedDialItemFromSmartText, addSpeedDialItem, persistSpeedDialItems, persistSpeedDialMeta, findNextFreeSpeedDialCell } = await import("../com/app.js").then((n) => n.C);
		return {
			pinSpeedDialLinkFromIntent,
			parseSpeedDialItemFromURL,
			parseSpeedDialItemFromSmartText,
			addSpeedDialItem,
			persistSpeedDialItems,
			persistSpeedDialMeta,
			findNextFreeSpeedDialCell
		};
	}, __vite__mapDeps([0,1]), import.meta.url);
	const cell = findNextFreeSpeedDialCell();
	const url = String(payload.url || "").trim();
	const text = String(payload.text || "").trim();
	const title = String(payload.title || files[0]?.name || "").trim();
	if (url) {
		if (pinSpeedDialLinkFromIntent({
			url,
			href: url,
			label: title || void 0,
			text,
			source: "share-target"
		}, cell)) {
			persistSpeedDialItems();
			persistSpeedDialMeta();
			return "shortcut";
		}
	}
	const fromUrl = url ? parseSpeedDialItemFromURL(url, cell) : null;
	const fromText = !fromUrl && text ? parseSpeedDialItemFromSmartText(text, cell) || parseSpeedDialItemFromURL(text, cell) : null;
	const item = fromUrl || fromText;
	if (item) {
		addSpeedDialItem(item);
		persistSpeedDialItems();
		persistSpeedDialMeta();
		return "shortcut";
	}
	if (files[0]) {
		if (pinSpeedDialLinkFromIntent({
			label: files[0].name,
			text: files[0].name,
			mimeType: files[0].type,
			source: "share-target",
			action: "open-view"
		}, cell)) {
			persistSpeedDialItems();
			persistSpeedDialMeta();
			return "shortcut";
		}
	}
	return "none";
};
//#endregion
export { applyLauncherIngress, dataUrlToFile, skuIngressHint };
