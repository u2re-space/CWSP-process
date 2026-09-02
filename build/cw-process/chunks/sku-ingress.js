const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../com/app.js","./rolldown-runtime.js","./ViewTransferRouting.js","../shells/boot-index.js","../fest/core.js","../shells/boot-history-base.js","../com/service.js","../fest/veela.js","./log-sanitizer.js"])))=>i.map(i=>d[i]);
import { r as __exportAll } from "./rolldown-runtime.js";
const __vitePreload = (baseModule) => Promise.resolve().then(() => baseModule());
import { Er as inferIngressChannels, Hr as surfaceForSku, Ir as resolveOpenPolicy, Lr as sinkToAction, Rr as sinkToDestination, Tr as classifyOpenKindFromPayload, Zn as peekProcessIngressSettings, er as resolveProcessIngressKind, jr as peekOpenPolicy } from "../shells/boot-index.js";
import { s as inferCwspSkuFromLocation } from "../shells/boot-history-base.js";
//#region src/shared/routing/channel/sku-ingress.ts
var sku_ingress_exports = /* @__PURE__ */ __exportAll({
	applyLauncherIngress: () => applyLauncherIngress,
	dataUrlToFile: () => dataUrlToFile,
	holdIngressFiles: () => holdIngressFiles,
	installShellImageOpenListener: () => installShellImageOpenListener,
	isWallpaperCompatible: () => isWallpaperCompatible,
	looksLikeDirectoryPath: () => looksLikeDirectoryPath,
	looksLikeWallpaperFile: () => looksLikeWallpaperFile,
	refineLauncherImageIngress: () => refineLauncherImageIngress,
	skuIngressHint: () => skuIngressHint,
	takeHeldIngressFiles: () => takeHeldIngressFiles
});
/**
* Same-tab File objects die when unified messaging queues through IDB/JSON.
* Hold them in memory so Work Center can still attach the real blobs.
*/
var heldIngressFiles = [];
var holdIngressFiles = (files) => {
	heldIngressFiles.length = 0;
	if (!Array.isArray(files)) return;
	for (const file of files) if (file instanceof File) heldIngressFiles.push(file);
};
var takeHeldIngressFiles = () => heldIngressFiles.splice(0, heldIngressFiles.length);
var loadLauncherState = () => __vitePreload(() => import("../com/app.js").then((n) => n.ct), __vite__mapDeps([0,1]), import.meta.url);
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
var isNativeCapacitor = () => {
	try {
		return Boolean(globalThis.Capacitor?.isNativePlatform?.());
	} catch {
		return false;
	}
};
var skuDefaultDestination = (sku) => {
	if (sku === "process") return "workcenter";
	if (sku === "document") return "viewer";
	if (sku === "explorer") return "explorer";
	if (sku === "launcher") return "home";
};
var skuIngressHint = (payload, opts) => {
	const sku = opts?.sku || inferCwspSkuFromLocation();
	const settings = opts?.settings || peekProcessIngressSettings();
	const file = firstFile(payload);
	const path = pathProbe(payload);
	const filename = payload.hint?.filename || file?.name || "";
	const kind = classifyOpenKindFromPayload(payload);
	const sourceToken = String(payload.source || payload.route || payload.hint?.source || "").toLowerCase();
	const ingressSource = sourceToken.includes("launch") ? "launch-queue" : sourceToken.includes("share") ? "share-target" : sourceToken.includes("snip") ? "snip" : sourceToken.includes("capacitor") ? "capacitor" : "";
	const surface = surfaceForSku(sku);
	const channels = inferIngressChannels(ingressSource || void 0, isNativeCapacitor());
	const sink = resolveOpenPolicy(opts?.openPolicy || peekOpenPolicy(), surface, kind, channels);
	const skuDest = skuDefaultDestination(sku);
	if (surface && sink !== "ask") {
		if (sku === "explorer" && looksLikeDirectoryPath(path) && !file) return {
			destination: "explorer",
			action: "open",
			filename,
			source: path || payload.hint?.source,
			contentType: kind
		};
		const destination = sinkToDestination(sink, skuDest || "workcenter");
		if (destination === "workcenter") {
			const row = resolveProcessIngressKind(settings, kind);
			const hinted = payload.hint?.action;
			return {
				destination,
				action: hinted === "attach" || hinted === "process" ? hinted : opts?.autoProcessShared === false ? "attach" : row.mode,
				filename,
				source: path || payload.hint?.source,
				contentType: kind,
				sink,
				instructionId: row.instructionId,
				copyToClipboard: row.copyToClipboard
			};
		}
		return {
			destination,
			action: sinkToAction(sink, sku === "process" ? "process" : "open"),
			filename,
			source: path || payload.hint?.source,
			contentType: kind,
			sink
		};
	}
	if (!sku || sku === "crx" || sku === "transfer") return void 0;
	if (sku === "process") {
		const row = resolveProcessIngressKind(settings, kind);
		const hinted = payload.hint?.action;
		return {
			destination: "workcenter",
			action: hinted === "attach" || hinted === "process" ? hinted : opts?.autoProcessShared === false ? "attach" : row.mode,
			filename,
			contentType: kind,
			instructionId: row.instructionId,
			copyToClipboard: row.copyToClipboard
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
		if ((Boolean(file) || Number(payload.fileCount || 0) > 0) && !dir) return {
			destination: "viewer",
			action: "open",
			filename,
			source: path || payload.hint?.source,
			contentType: kind,
			sink: "document"
		};
		return {
			destination: "explorer",
			action: "open",
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
/**
* Wallpaper sink: keep home only when the photo passes size/aspect.
* WHY: icons and strips must not become wallpaper — send those to the viewer.
*/
var refineLauncherImageIngress = async (hint, files) => {
	if (!hint || hint.action !== "wallpaper") return hint;
	if (!files?.length) return hint;
	const image = files.find((f) => looksLikeWallpaperFile(f));
	if (image && await isWallpaperCompatible(image)) return hint;
	return {
		...hint,
		destination: "viewer",
		action: "open",
		contentType: "image",
		sink: "viewer"
	};
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
			const { setAppWallpaperFromBlob, getWallpaperStoragePointer, WALLPAPER_IDB_MARKER } = await import("../com/app.js").then((n) => n.I);
			return {
				setAppWallpaperFromBlob,
				getWallpaperStoragePointer,
				WALLPAPER_IDB_MARKER
			};
		}, __vite__mapDeps([0,1]), import.meta.url);
		const { wallpaperState, persistWallpaper } = await loadLauncherState();
		await setAppWallpaperFromBlob(image);
		wallpaperState.src = getWallpaperStoragePointer() || WALLPAPER_IDB_MARKER;
		persistWallpaper();
		return "wallpaper";
	}
	if (payload.action === "wallpaper") return "none";
	const { pinSpeedDialLinkFromIntent, parseSpeedDialItemFromURL, parseSpeedDialItemFromSmartText, addSpeedDialItem, persistSpeedDialItems, persistSpeedDialMeta, findNextFreeSpeedDialCell } = await loadLauncherState();
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
var SHELL_IMAGE_OPEN_EVENT = "cwsp:shell-image-open";
var shellImageOpenInstalled = false;
var openShellImageInViewer = async (file) => {
	const { dispatchViewTransfer } = await __vitePreload(async () => {
		const { dispatchViewTransfer } = await import("./ViewTransferRouting.js").then((n) => n.t);
		return { dispatchViewTransfer };
	}, __vite__mapDeps([2,1,0,3,4,5,6,7,8]), import.meta.url);
	await dispatchViewTransfer({
		source: "clipboard",
		route: "clipboard",
		files: [file],
		fileCount: 1,
		hint: {
			destination: "viewer",
			action: "open",
			filename: file.name,
			contentType: "image",
			sink: "viewer"
		}
	});
};
var applyShellWallpaper = async (file) => {
	if (!await isWallpaperCompatible(file)) return false;
	const { setAppWallpaperFromBlob, getWallpaperStoragePointer, WALLPAPER_IDB_MARKER } = await __vitePreload(async () => {
		const { setAppWallpaperFromBlob, getWallpaperStoragePointer, WALLPAPER_IDB_MARKER } = await import("../com/app.js").then((n) => n.I);
		return {
			setAppWallpaperFromBlob,
			getWallpaperStoragePointer,
			WALLPAPER_IDB_MARKER
		};
	}, __vite__mapDeps([0,1]), import.meta.url);
	const { wallpaperState, persistWallpaper } = await loadLauncherState();
	await setAppWallpaperFromBlob(file);
	wallpaperState.src = getWallpaperStoragePointer() || WALLPAPER_IDB_MARKER;
	persistWallpaper();
	return true;
};
/**
* Home drop/paste: SpeedDial fires `cwsp:shell-image-open`. Policy picks wallpaper vs viewer.
*/
var installShellImageOpenListener = () => {
	if (shellImageOpenInstalled || typeof window === "undefined") return;
	shellImageOpenInstalled = true;
	window.addEventListener(SHELL_IMAGE_OPEN_EVENT, (raw) => {
		const ev = raw;
		const file = ev.detail?.file;
		if (!(file instanceof File)) return;
		ev.preventDefault();
		(async () => {
			try {
				const { loadSettings } = await __vitePreload(async () => {
					const { loadSettings } = await import("../shells/boot-index.js").then((n) => n.Dt);
					return { loadSettings };
				}, __vite__mapDeps([3,1,0,4,5,6,7]), import.meta.url);
				const { peekOpenPolicy, rememberOpenPolicyFromSettings, resolveOpenPolicy } = await __vitePreload(async () => {
					const { peekOpenPolicy, rememberOpenPolicyFromSettings, resolveOpenPolicy } = await import("../shells/boot-index.js").then((n) => n.Ar);
					return {
						peekOpenPolicy,
						rememberOpenPolicyFromSettings,
						resolveOpenPolicy
					};
				}, __vite__mapDeps([3,1,0,4,5,6,7]), import.meta.url);
				const settings = await loadSettings().catch(() => null);
				rememberOpenPolicyFromSettings(settings);
				const sink = resolveOpenPolicy(settings?.openPolicy ?? peekOpenPolicy(), "shell", "image", "open");
				if (sink === "viewer" || sink === "display") {
					await openShellImageInViewer(file);
					return;
				}
				if (sink === "document" || sink === "transfer" || sink === "system" || sink === "external") {
					const { dispatchViewTransfer } = await __vitePreload(async () => {
						const { dispatchViewTransfer } = await import("./ViewTransferRouting.js").then((n) => n.t);
						return { dispatchViewTransfer };
					}, __vite__mapDeps([2,1,0,3,4,5,6,7,8]), import.meta.url);
					await dispatchViewTransfer({
						source: "clipboard",
						route: "clipboard",
						files: [file],
						fileCount: 1,
						hint: {
							destination: sink === "transfer" ? "network" : "viewer",
							action: "open",
							filename: file.name,
							contentType: "image",
							sink
						}
					});
					return;
				}
				if (sink === "workcenter") {
					const { dispatchViewTransfer } = await __vitePreload(async () => {
						const { dispatchViewTransfer } = await import("./ViewTransferRouting.js").then((n) => n.t);
						return { dispatchViewTransfer };
					}, __vite__mapDeps([2,1,0,3,4,5,6,7,8]), import.meta.url);
					await dispatchViewTransfer({
						source: "clipboard",
						route: "clipboard",
						files: [file],
						fileCount: 1,
						hint: {
							destination: "workcenter",
							action: "attach",
							filename: file.name,
							contentType: "image"
						}
					});
					return;
				}
				if (sink === "wallpaper" || sink === "ask") {
					if (await applyShellWallpaper(file)) return;
					if (sink === "wallpaper") await openShellImageInViewer(file);
					return;
				}
				if (!await applyShellWallpaper(file)) await openShellImageInViewer(file);
			} catch (error) {
				console.warn("[sku-ingress] shell image open failed", error);
			}
		})();
	});
};
//#endregion
export { skuIngressHint as a, refineLauncherImageIngress as i, holdIngressFiles as n, sku_ingress_exports as o, installShellImageOpenListener as r, takeHeldIngressFiles as s, applyLauncherIngress as t };
