const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../shells/boot-index.js","./rolldown-runtime.js","../com/app.js","../fest/core.js","../shells/boot-history-base.js","../com/service.js","../fest/veela.js","./sku-ingress.js","./sw-handling.js","./log-sanitizer.js","./sw-page-bridge.js","./ViewTransferRouting.js","./capacitor-settings-permissions.js","./capacitor-permissions.js"])))=>i.map(i=>d[i]);
const __vitePreload = (baseModule) => Promise.resolve().then(() => baseModule());
import { Un as splitMultiValueList } from "../shells/boot-index.js";
import { n as isCapacitorNative } from "./capacitor-permissions.js";
//#region src/frontend/boot/capacitor-share-intent.ts
/**
* Capacitor share / process-text bridge (Android → WebView).
* FIND:open-policy
*
* Fans out to the clipboard bus and runs the SKU share pipeline
* (process → AI/attach, document → viewer, explorer → path/ask, shell → pin/wallpaper).
* Document SKU does not ack pending-share — the viewer pull paints then acks.
*/
var parseSharePayload = (detail) => {
	if (detail == null) return {
		text: "",
		title: "",
		asset: null,
		pending: false
	};
	if (typeof detail === "string") {
		const trimmed = detail.trim();
		if (!trimmed) return {
			text: "",
			title: "",
			asset: null,
			pending: false
		};
		try {
			const parsed = JSON.parse(trimmed);
			return {
				text: String(parsed?.text || "").trim() || (parsed?.asset ? "" : trimmed),
				title: String(parsed?.title || "").trim(),
				asset: parsed?.asset && typeof parsed.asset === "object" ? parsed.asset : parsed?.name ? {
					name: parsed.name,
					mimeType: parsed.mime
				} : null,
				pending: parsed?.pending === true
			};
		} catch {
			return {
				text: trimmed,
				title: "",
				asset: null,
				pending: false
			};
		}
	}
	return {
		text: String(detail.text || "").trim(),
		title: String(detail.title || "").trim(),
		asset: detail.asset && typeof detail.asset === "object" ? detail.asset : detail.name ? {
			name: detail.name,
			mimeType: detail.mime
		} : null,
		pending: detail.pending === true
	};
};
var readDestinationNodes = (settings) => {
	const cwsp = settings.cwsp && typeof settings.cwsp === "object" ? settings.cwsp : {};
	const raw = String(cwsp.shareIntentDestinationIds || cwsp.destinationNodeIds || "*").trim() || "*";
	if (raw === "*" || raw.toLowerCase() === "any") return ["*"];
	return splitMultiValueList(raw);
};
var isDocumentSku = () => {
	try {
		return String(document.documentElement?.dataset?.cwspSku || "").trim() === "document";
	} catch {
		return false;
	}
};
var consumeNativePendingShare = async () => {
	try {
		const { invokeCwsPlatformIPC } = await __vitePreload(async () => {
			const { invokeCwsPlatformIPC } = await import("../shells/boot-index.js").then((n) => n.sn);
			return { invokeCwsPlatformIPC };
		}, __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url);
		const peek = await invokeCwsPlatformIPC({ channel: "launcher:pending-share" });
		if (!peek?.ok) return null;
		const echo = peek.echo || peek;
		const text = String(echo.text || "").trim();
		const title = String(echo.title || echo.name || "").trim();
		const url = String(echo.url || "").trim();
		const files = [];
		if (echo.hasFile) {
			const read = await invokeCwsPlatformIPC({ channel: "launcher:read-share-file" });
			const blob = read.echo || read;
			if (blob?.data) {
				const { dataUrlToFile } = await __vitePreload(async () => {
					const { dataUrlToFile } = await import("./sku-ingress.js").then((n) => n.o);
					return { dataUrlToFile };
				}, __vite__mapDeps([7,1,2,0,3,4,5,6]), import.meta.url);
				const file = await dataUrlToFile(blob.data, String(blob.name || echo.name || "shared.bin"), String(blob.mime || echo.mime || "application/octet-stream"));
				if (file) files.push(file);
			}
		}
		await invokeCwsPlatformIPC({ channel: "launcher:ack-share" }).catch(() => null);
		if (!text && !url && !files.length) return null;
		return {
			text,
			title,
			url,
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
	}, __vite__mapDeps([8,2,1,0,3,4,5,6,9,10,7,11]), import.meta.url);
	await ingestSharePayload({
		title: input.title || void 0,
		text: input.text || void 0,
		url: input.url || void 0,
		files: input.files?.length ? input.files : void 0,
		fileCount: input.files?.length || 0,
		source: "share-target"
	});
};
var installed = false;
var ingestChain = Promise.resolve();
var enqueueShareIngest = (job) => {
	ingestChain = ingestChain.then(job, job);
};
var installCapacitorShareIntentBridge = () => {
	if (!isCapacitorNative() || installed) return;
	installed = true;
	const handler = (ev) => {
		(async () => {
			const { text, title, asset, pending } = parseSharePayload(ev.detail);
			try {
				const [{ loadSettings }, ws, { classifyOpenKindFromPayload }, ingress] = await Promise.all([
					__vitePreload(() => import("../shells/boot-index.js").then((n) => n.Dt), __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url),
					__vitePreload(() => import("../shells/boot-index.js").then((n) => n.c), __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url),
					__vitePreload(() => import("../shells/boot-index.js").then((n) => n.Ar), __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url),
					__vitePreload(() => import("../shells/boot-index.js").then((n) => n.Qn), __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url)
				]);
				const settings = await loadSettings();
				ingress.rememberProcessIngressSettings(settings);
				const files = [];
				if (asset?.data) {
					const { dataUrlToFile } = await __vitePreload(async () => {
						const { dataUrlToFile } = await import("./sku-ingress.js").then((n) => n.o);
						return { dataUrlToFile };
					}, __vite__mapDeps([7,1,2,0,3,4,5,6]), import.meta.url);
					const file = await dataUrlToFile(asset.data, String(asset.name || "shared.bin"), String(asset.mimeType || asset.type || "application/octet-stream"));
					if (file) files.push(file);
				}
				const kind = classifyOpenKindFromPayload({
					text,
					title,
					files,
					source: "share-target"
				});
				const row = ingress.resolveProcessIngressKind(settings, kind);
				if (row.backgroundClipboard) {
					const { ensureCapacitorBridgeDaemonStarted } = await __vitePreload(async () => {
						const { ensureCapacitorBridgeDaemonStarted } = await import("./capacitor-settings-permissions.js").then((n) => n.t);
						return { ensureCapacitorBridgeDaemonStarted };
					}, __vite__mapDeps([12,1,13]), import.meta.url);
					await ensureCapacitorBridgeDaemonStarted(settings);
				}
				if (!(row.mode === "process" && row.copyToClipboard !== false)) {
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
					if (pending && isDocumentSku()) return;
					if (pending) {
						const native = await consumeNativePendingShare();
						if (native) {
							await ingestParsedShare(native);
							return;
						}
					}
					const { dataUrlToFile } = await __vitePreload(async () => {
						const { dataUrlToFile } = await import("./sku-ingress.js").then((n) => n.o);
						return { dataUrlToFile };
					}, __vite__mapDeps([7,1,2,0,3,4,5,6]), import.meta.url);
					const files = [];
					if (asset?.data) {
						const file = await dataUrlToFile(asset.data, String(asset.name || "shared.bin"), String(asset.mimeType || asset.type || "application/octet-stream"));
						if (file) files.push(file);
					}
					if (!text && !files.length && !asset) return;
					await ingestParsedShare({
						text,
						title: title || asset?.name,
						files
					});
				} catch {}
			});
		})().catch(() => {});
	};
	window.addEventListener("cws:shareIntent", handler);
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
		if (isDocumentSku()) return;
		const native = await consumeNativePendingShare().catch(() => null);
		if (native) await ingestParsedShare(native);
	});
};
//#endregion
export { installCapacitorShareIntentBridge };
