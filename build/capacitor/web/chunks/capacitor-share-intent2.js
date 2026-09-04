const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cws-bridge.js","./rolldown-runtime.js","../fest/core3.js","../fest/core2.js","../fest/uniform.js","../assets/index-CU5eF_0S.js","./ecosystem-skus.js","./airpad-cwsp-client-parity.js","./multi-value-list.js","../vendor/@capacitor_core.js","./UniformInterop2.js","./names.js","./sku-ingress.js","./open-policy.js","./process-ingress.js","../com/app.js","./sw-handling.js","../fest/core4.js","../fest/core.js","../fest/object.js","../fest/core5.js","../vendor/jsox.js","./SettingsTypes.js","./remote-connection-runtime.js","./UnifiedMessaging.js","./UniformInterop.js","./process-api-result.js","./ShareTargetGateway.js","./UnifiedMessaging2.js","./log-sanitizer.js","./ViewTransferRouting.js","./workcenter-command-wire.js","./hub-socket-boot.js","./packet-wire-hash.js","./ecosystem-skus2.js","./cws-bridge2.js","../vendor/@capacitor_core2.js","./clipboard-device.js","./capacitor-settings-permissions3.js","./capacitor-permissions3.js"])))=>i.map(i=>d[i]);
import { t as __vitePreload } from "../assets/index-CU5eF_0S.js";
import { t as splitMultiValueList } from "./multi-value-list.js";
import { t as isCapacitorNative } from "./capacitor-permissions3.js";
//#region ../../modules/projects/subsystem/src/boot/capacitor-share-intent.ts
/**
* Capacitor share / process-text bridge (Android → WebView).
* FIND:open-policy
*
* Fans out to the clipboard bus and runs the SKU share pipeline
* (process → AI/attach, document → viewer, explorer → path/ask, shell → pin/wallpaper).
* Document SKU does not ack pending-share — the viewer pull paints then acks.
*/
var emptyParsedShare = () => ({
	text: "",
	title: "",
	name: "",
	mime: "",
	asset: null,
	pending: false
});
var parseSharePayload = (detail) => {
	if (detail == null) return emptyParsedShare();
	if (typeof detail === "string") {
		const trimmed = detail.trim();
		if (!trimmed) return emptyParsedShare();
		try {
			const parsed = JSON.parse(trimmed);
			return {
				text: String(parsed?.text || "").trim() || (parsed?.asset ? "" : trimmed),
				title: String(parsed?.title || "").trim(),
				name: String(parsed?.name || "").trim(),
				mime: String(parsed?.mime || "").trim(),
				asset: parsed?.asset && typeof parsed.asset === "object" ? parsed.asset : parsed?.name ? {
					name: parsed.name,
					mimeType: parsed.mime
				} : null,
				pending: parsed?.pending === true
			};
		} catch {
			return {
				...emptyParsedShare(),
				text: trimmed
			};
		}
	}
	return {
		text: String(detail.text || "").trim(),
		title: String(detail.title || "").trim(),
		name: String(detail.name || "").trim(),
		mime: String(detail.mime || "").trim(),
		asset: detail.asset && typeof detail.asset === "object" ? detail.asset : detail.name ? {
			name: detail.name,
			mimeType: detail.mime
		} : null,
		pending: detail.pending === true
	};
};
var looksLikeFileShare = (echo) => {
	if (echo.hasFile) return true;
	const mime = String(echo.mime || "").toLowerCase();
	const name = String(echo.name || echo.title || "").toLowerCase();
	if (mime.startsWith("image/") || mime.startsWith("application/") || mime.startsWith("audio/") || mime.startsWith("video/")) return true;
	if (/\.(pdf|docx?|odt|rtf|pptx?|xlsx?|md|markdown|txt|png|jpe?g|gif|webp|html?|csv|json)$/i.test(name)) return true;
	return false;
};
var readDestinationNodes = (settings) => {
	const cwsp = settings.cwsp && typeof settings.cwsp === "object" ? settings.cwsp : {};
	const raw = String(cwsp.shareIntentDestinationIds || cwsp.destinationNodeIds || "*").trim() || "*";
	if (raw === "*" || raw.toLowerCase() === "any") return ["*"];
	return splitMultiValueList(raw);
};
var isDocumentSku = () => {
	try {
		const root = document.documentElement;
		if (String(root?.dataset?.cwspSku || "").trim() === "document") return true;
		const surface = String(root?.dataset?.cwspSurface || "");
		if (surface === "cw-document" || surface === "cw-markdown" || surface === "cw-document-crx") return true;
	} catch {}
	return false;
};
var isTransferSku = () => {
	try {
		return String(document.documentElement?.dataset?.cwspSku || "").trim() === "transfer";
	} catch {
		return false;
	}
};
var consumeNativePendingShare = async () => {
	try {
		const { invokeCwsPlatformIPC } = await __vitePreload(async () => {
			const { invokeCwsPlatformIPC } = await import("./cws-bridge.js").then((n) => n.n);
			return { invokeCwsPlatformIPC };
		}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url);
		const peek = await invokeCwsPlatformIPC({ channel: "launcher:pending-share" });
		if (!peek?.ok) return null;
		if (isDocumentSku()) return null;
		const echo = peek.echo || peek;
		const stashedAt = Number(echo.stashedAt || 0) || void 0;
		const flagged = echo.hasFile === true || echo.hasFile === "true" || echo.hasFile === 1 || echo.hasFile === "1";
		if (!echo.text && !echo.title && !echo.name && !echo.url && !flagged) return null;
		const { dataUrlToFile, filenameFromLocalShareUri, isAndroidLocalShareUri } = await __vitePreload(async () => {
			const { dataUrlToFile, filenameFromLocalShareUri, isAndroidLocalShareUri } = await import("./sku-ingress.js").then((n) => n.m);
			return {
				dataUrlToFile,
				filenameFromLocalShareUri,
				isAndroidLocalShareUri
			};
		}, __vite__mapDeps([12,1,6,5,13,14]), import.meta.url);
		let text = String(echo.text || "").trim();
		const title = String(echo.title || echo.name || "").trim();
		const name = String(echo.name || "").trim();
		const mime = String(echo.mime || "").trim();
		let url = String(echo.url || "").trim();
		const files = [];
		const local = isAndroidLocalShareUri(url) || isAndroidLocalShareUri(text);
		const wantFile = flagged || local || looksLikeFileShare({
			...echo,
			hasFile: flagged
		});
		const pullFile = async () => {
			const read = await invokeCwsPlatformIPC({ channel: "launcher:read-share-file" });
			const blob = read.echo || read;
			if (!blob?.data) return;
			const file = await dataUrlToFile(blob.data, String(echo.name || blob.name || filenameFromLocalShareUri(url || text) || "shared.bin").replace(/^open-\d+-/i, ""), String(blob.mime || echo.mime || "application/octet-stream"));
			if (file) files.push(file);
		};
		if (wantFile) await pullFile();
		if (!files.length) {
			const virtual = String(url || text || "").trim().replace(/^file:\/\/(?:localhost)?/i, "").replace(/^(?:\/storage\/emulated\/0|\/mnt\/sdcard)(?=\/|$)/i, "/sdcard");
			if (/^\/(?:sdcard|saf)(?:\/|$)/i.test(virtual)) try {
				const { readNativeStorageFile } = await __vitePreload(async () => {
					const { readNativeStorageFile } = await import("../com/app.js").then((n) => n.m);
					return { readNativeStorageFile };
				}, __vite__mapDeps([15,1,5,6]), import.meta.url);
				const file = await readNativeStorageFile(virtual);
				if (file) files.push(file);
			} catch {}
		}
		if (wantFile && !files.length) {
			const status = await invokeCwsPlatformIPC({ channel: "storage:all-files-status" }).catch(() => null);
			if (!Boolean((status?.echo)?.allFilesAccess)) {
				await invokeCwsPlatformIPC({ channel: "storage:all-files-request" }).catch(() => null);
				const { showToast } = await __vitePreload(async () => {
					const { showToast } = await import("./toast2.js");
					return { showToast };
				}, [], import.meta.url);
				showToast({
					message: "Allow all-files access, then share the file again",
					kind: "warning"
				});
				return null;
			}
			await invokeCwsPlatformIPC({ channel: "launcher:restash-share-file" }).catch(() => null);
			await pullFile();
		}
		if (wantFile && !files.length) return null;
		if (files.length || !local && (text || url)) await invokeCwsPlatformIPC({
			channel: "launcher:ack-share",
			payload: stashedAt ? { stashedAt } : {}
		}).catch(() => null);
		if (isAndroidLocalShareUri(url)) url = "";
		if (isAndroidLocalShareUri(text)) text = "";
		if (!text && !url && !files.length) return null;
		return {
			text,
			title,
			url,
			name,
			mime,
			files
		};
	} catch {
		return null;
	}
};
var ingestParsedShare = async (input) => {
	const { ingestSharePayload } = await __vitePreload(async () => {
		const { ingestSharePayload } = await import("./sw-handling.js");
		return { ingestSharePayload };
	}, __vite__mapDeps([16,6,1,5,17,18,3,19,20,4,21,13,22,14,7,8,0,2,9,10,11,23,24,25,26,27,28,12,29,30,31]), import.meta.url);
	const filename = String(input.files?.[0]?.name || input.name || input.title || "").trim();
	await ingestSharePayload({
		title: input.title || input.name || void 0,
		text: input.text || void 0,
		url: input.url || void 0,
		files: input.files?.length ? input.files : void 0,
		fileCount: input.files?.length || 0,
		timestamp: Date.now(),
		source: "share-target",
		hint: filename ? { filename } : void 0
	});
	try {
		const { flushHeldIngressToWorkCenter } = await __vitePreload(async () => {
			const { flushHeldIngressToWorkCenter } = await import("./sku-ingress.js").then((n) => n.m);
			return { flushHeldIngressToWorkCenter };
		}, __vite__mapDeps([12,1,6,5,13,14]), import.meta.url);
		await flushHeldIngressToWorkCenter();
	} catch {}
};
var installed = false;
var ingestChain = Promise.resolve();
var enqueueShareIngest = (job) => {
	ingestChain = ingestChain.then(job, job);
};
var installCapacitorShareIntentBridge = () => {
	if (!isCapacitorNative() || installed) return;
	installed = true;
	if (isTransferSku()) return;
	const handler = (ev) => {
		(async () => {
			const { text, title, name, mime, asset, pending } = parseSharePayload(ev.detail);
			try {
				const [{ loadSettings }, ws, { classifyOpenKindFromPayload }, ingress] = await Promise.all([
					__vitePreload(() => import("../vendor/jsox.js").then((n) => n.t), __vite__mapDeps([21,1,5,6,17,18,3,19,20,4,13,22,14,7,8,0,2,9,10,11,23]), import.meta.url),
					__vitePreload(() => import("./hub-socket-boot.js").then((n) => n.c), __vite__mapDeps([32,1,2,3,7,8,0,4,5,6,9,10,11,23,33,17,18,19,20,34,35,25,36,37]), import.meta.url),
					__vitePreload(() => import("./open-policy.js").then((n) => n.d), __vite__mapDeps([13,1,6]), import.meta.url),
					__vitePreload(() => import("./process-ingress.js").then((n) => n.l), __vite__mapDeps([14,1,5,6,13]), import.meta.url)
				]);
				const settings = await loadSettings();
				ingress.rememberProcessIngressSettings(settings);
				const files = [];
				if (asset?.data) {
					const { dataUrlToFile } = await __vitePreload(async () => {
						const { dataUrlToFile } = await import("./sku-ingress.js").then((n) => n.m);
						return { dataUrlToFile };
					}, __vite__mapDeps([12,1,6,5,13,14]), import.meta.url);
					const file = await dataUrlToFile(asset.data, String(asset.name || "shared.bin"), String(asset.mimeType || asset.type || "application/octet-stream"));
					if (file) files.push(file);
				}
				const kind = classifyOpenKindFromPayload({
					text,
					title,
					files,
					hint: { filename: name || title || files[0]?.name }
				});
				const row = ingress.resolveProcessIngressKind(settings, kind);
				if (row.mode === "process") {
					const { ensureCapacitorBridgeDaemonStarted } = await __vitePreload(async () => {
						const { ensureCapacitorBridgeDaemonStarted } = await import("./capacitor-settings-permissions3.js").then((n) => n.t);
						return { ensureCapacitorBridgeDaemonStarted };
					}, __vite__mapDeps([38,1,39]), import.meta.url);
					await ensureCapacitorBridgeDaemonStarted({
						...settings || {},
						shell: {
							...settings?.shell || {},
							bridgeDaemonEnabled: true
						}
					});
				}
				if (!(row.mode === "process" || String(document.documentElement?.dataset?.cwspSku || "").trim() === "process")) {
					const nodes = readDestinationNodes(settings);
					ws.connectWS();
					if (asset) ws.sendCoordinatorAct("clipboard:update", {
						asset,
						source: "android-share"
					}, nodes);
					if (text) ws.sendCoordinatorAct("clipboard:update", {
						text,
						source: "android-share"
					}, nodes);
				}
			} catch {}
			enqueueShareIngest(async () => {
				try {
					if (pending && isDocumentSku()) {
						try {
							window.dispatchEvent(new CustomEvent("cwsp:document-open", { detail: { source: "share-intent" } }));
						} catch {}
						return;
					}
					if (pending) {
						const native = await consumeNativePendingShare();
						if (native) {
							await ingestParsedShare(native);
							return;
						}
						return;
					}
					const { dataUrlToFile } = await __vitePreload(async () => {
						const { dataUrlToFile } = await import("./sku-ingress.js").then((n) => n.m);
						return { dataUrlToFile };
					}, __vite__mapDeps([12,1,6,5,13,14]), import.meta.url);
					const files = [];
					if (asset?.data) {
						const file = await dataUrlToFile(asset.data, String(asset.name || name || "shared.bin"), String(asset.mimeType || asset.type || mime || "application/octet-stream"));
						if (file) files.push(file);
					}
					if (!text && !files.length && !asset) return;
					await ingestParsedShare({
						text,
						title: title || name || asset?.name,
						name,
						mime,
						files
					});
				} catch {}
			});
		})().catch(() => {});
	};
	window.addEventListener("cws:shareIntent", handler);
	const pullPending = () => {
		if (isDocumentSku() || isTransferSku()) return;
		try {
			if (document.visibilityState && document.visibilityState !== "visible") return;
		} catch {}
		enqueueShareIngest(async () => {
			const native = await consumeNativePendingShare().catch(() => null);
			if (native) await ingestParsedShare(native);
		});
	};
	document.addEventListener("visibilitychange", pullPending);
	window.addEventListener("pageshow", pullPending);
	enqueueShareIngest(async () => {
		await new Promise((resolve) => {
			const done = () => resolve();
			try {
				if (document.documentElement?.dataset?.cwspBoot === "ready") {
					done();
					return;
				}
			} catch {}
			const onReady = () => {
				window.removeEventListener("cwsp:boot-ready", onReady);
				done();
			};
			window.addEventListener("cwsp:boot-ready", onReady);
			window.setTimeout(done, 4e3);
		});
		if (isDocumentSku() || isTransferSku()) return;
		const native = await consumeNativePendingShare().catch(() => null);
		if (native) await ingestParsedShare(native);
	});
};
//#endregion
export { installCapacitorShareIntentBridge };
