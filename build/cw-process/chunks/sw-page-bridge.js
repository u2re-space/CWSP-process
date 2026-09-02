import { r as __exportAll } from "./rolldown-runtime.js";
import { at as readProcessApiResultText, dt as safeCachePut, lt as safeCacheMatch, ot as buildShareDataFromCachedPayload, pn as unwrapSwInteropMessage, st as consumeCachedShareTargetPayload, tt as unifiedMessaging, ut as safeCacheOpen } from "../shells/boot-index.js";
import "../shells/boot-history-base.js";
import { t as postWorkCenterCommand } from "./workcenter-command-wire.js";
import { i as holdIngressFiles } from "./sku-ingress.js";
({
	process: "/workcenter?shared=1",
	document: "/viewer?shared=1",
	explorer: "/?shared=1",
	transfer: "/?shared=1",
	launcher: "/?shared=1",
	crx: "/?shared=1"
}).process;
//#endregion
//#region src/shared/routing/pwa/sw-result-wire.ts
var PENDING_CACHE = "rs-process-pending-v1";
var PENDING_CACHE_URL = "/process/pending.json";
var loadPending = async () => {
	try {
		const cache = await safeCacheOpen(PENDING_CACHE);
		const response = await safeCacheMatch(cache, PENDING_CACHE_URL);
		if (!response) return [];
		const json = await response.json();
		return Array.isArray(json?.operations) ? json.operations : [];
	} catch {
		return [];
	}
};
var savePending = async (operations) => {
	const cache = await safeCacheOpen(PENDING_CACHE);
	if (!cache) return;
	await safeCachePut(cache, PENDING_CACHE_URL, new Response(JSON.stringify({ operations: operations.slice(-10) }), { headers: {
		"Content-Type": "application/json; charset=utf-8",
		"Cache-Control": "no-store"
	} }));
};
var readPendingProcessResults = () => loadPending();
var clearPendingProcessResults = async (ids) => {
	if (!ids?.length) {
		await savePending([]);
		return;
	}
	const keep = new Set(ids);
	await savePending((await loadPending()).filter((item) => !keep.has(item.id)));
};
//#endregion
//#region src/shared/routing/pwa/sw-page-bridge.ts
var sw_page_bridge_exports = /* @__PURE__ */ __exportAll({
	bindSwPageBridge: () => bindSwPageBridge,
	deliverShareTargetInput: () => deliverShareTargetInput,
	deliverSwResultToWorkCenter: () => deliverSwResultToWorkCenter,
	ingestSwClientMessage: () => ingestSwClientMessage
});
var RESULT_TYPES = /* @__PURE__ */ new Set([
	"ai-result",
	"share-target-result",
	"share-target-input",
	"share-received",
	"process-api-result",
	"content-cached",
	"content-received",
	"pending-operations",
	"commit-to-clipboard"
]);
var bound = false;
var seenKeys = /* @__PURE__ */ new Set();
var remember = (key) => {
	if (!key || seenKeys.has(key)) return false;
	seenKeys.add(key);
	if (seenKeys.size > 48) {
		const first = seenKeys.values().next().value;
		if (first) seenKeys.delete(first);
	}
	return true;
};
var resultKey = (type, text, raw) => {
	const id = raw && typeof raw === "object" ? String(raw.id || "") : "";
	const fileSig = (raw && typeof raw === "object" && Array.isArray(raw.files) ? raw.files : []).map((file) => `${file?.name || ""}:${file?.size || 0}`).join(",");
	return id || `${type}:${text.replace(/\s+/g, " ").slice(0, 400)}:${fileSig}`;
};
var asWorkCenterPayload = (type, data, text) => {
	if (data && typeof data === "object") {
		const row = data;
		if (type === "share-target-input" || type === "share-received") return {
			...row,
			source: row.source || "share-target"
		};
		if (type === "ai-result" || type === "process-api-result") return row.success != null || row.data != null || row.fallback != null ? row : {
			success: true,
			data: text || row,
			rawData: row
		};
		if (row.content != null || row.rawData != null) return row;
	}
	return {
		content: text,
		rawData: data,
		timestamp: Date.now(),
		source: "service-worker"
	};
};
var hydrateShareInput = async (data) => {
	const base = data && typeof data === "object" ? { ...data } : {};
	const inline = Array.isArray(base.files) ? base.files.filter((file) => typeof File !== "undefined" && file instanceof File) : [];
	if (inline.length) return {
		...base,
		files: inline,
		fileCount: inline.length,
		source: base.source || "share-target"
	};
	try {
		const cached = await consumeCachedShareTargetPayload({ clear: false });
		if (!cached) return {
			...base,
			source: base.source || "share-target"
		};
		const built = buildShareDataFromCachedPayload(cached);
		const files = Array.isArray(cached.files) ? cached.files : [];
		return {
			...base,
			...built,
			files,
			fileCount: files.length || Number(base.fileCount || built.fileCount || 0),
			text: base.text || built.text,
			title: base.title || built.title,
			url: base.url || built.url || built.sharedUrl,
			source: "share-target"
		};
	} catch {
		return {
			...base,
			source: base.source || "share-target"
		};
	}
};
var deliverShareTargetInput = async (data) => {
	const payload = await hydrateShareInput(data);
	const files = Array.isArray(payload.files) ? payload.files.filter((file) => typeof File !== "undefined" && file instanceof File) : [];
	if (files.length) holdIngressFiles(files);
	return deliverSwResultToWorkCenter("share-target-input", payload, String(payload.text || payload.title || ""));
};
var deliverSwResultToWorkCenter = async (type, data, extraText = "") => {
	if (type === "share-received") return deliverShareTargetInput(data);
	const text = extraText.trim() || readProcessApiResultText(data);
	if (!remember(resultKey(type, text, data))) return false;
	const payload = asWorkCenterPayload(type, data, text);
	postWorkCenterCommand({
		type: "ingress.apply",
		payload: {
			type,
			data: payload,
			content: text
		}
	});
	try {
		await unifiedMessaging.sendMessage({
			type,
			source: "sw-page-bridge",
			destination: "workcenter",
			data: payload,
			metadata: {
				priority: "high",
				fromServiceWorker: true
			}
		});
	} catch {}
	return true;
};
var ingestSwClientMessage = (value) => {
	const unwrapped = unwrapSwInteropMessage(value);
	if (!unwrapped) return false;
	const type = unwrapped.type;
	if (!RESULT_TYPES.has(type)) return false;
	if (type === "pending-operations" && Array.isArray(unwrapped.operations)) {
		for (const operation of unwrapped.operations) {
			const row = operation;
			if (row?.type === "ai-result" || row?.data) deliverSwResultToWorkCenter("ai-result", row.data ?? row);
		}
		return true;
	}
	if (type === "commit-to-clipboard" && Array.isArray(unwrapped.results)) {
		for (const result of unwrapped.results) {
			const row = result;
			if (row?.data) deliverSwResultToWorkCenter("ai-result", row.data);
		}
		return true;
	}
	if (type === "share-received" || type === "share-target-input") {
		deliverShareTargetInput(unwrapped.data);
		return true;
	}
	deliverSwResultToWorkCenter(type, unwrapped.data);
	return true;
};
var replayProcessPending = async () => {
	try {
		const loc = globalThis.location;
		if (!loc || !/^https?:$/.test(String(loc.protocol || ""))) return;
		const href = String(loc.href || "");
		if (href.startsWith("chrome-extension://") || href.startsWith("moz-extension://")) return;
		const operations = await readPendingProcessResults();
		if (!operations.length) return;
		for (const operation of operations) {
			const opType = String(operation.type || "process-api-result");
			const payload = operation.raw ?? operation.data ?? operation;
			if (opType === "share-received" || opType === "share-target-input") {
				await deliverShareTargetInput(payload);
				continue;
			}
			await deliverSwResultToWorkCenter(opType, payload, String(operation.text || ""));
		}
		await clearPendingProcessResults();
	} catch {}
};
/** Bind SW postMessage + deferred replay. Idempotent. */
var bindSwPageBridge = () => {
	if (bound) return () => void 0;
	bound = true;
	const onSwMessage = (event) => {
		ingestSwClientMessage(event.data);
	};
	try {
		navigator.serviceWorker?.addEventListener("message", onSwMessage);
	} catch {}
	const replayShareCache = () => {
		consumeCachedShareTargetPayload({ clear: false }).then((cached) => {
			if (!cached) return;
			if (Date.now() - Number(cached.meta?.timestamp || Date.now()) > 3e5) return;
			const hasFiles = Array.isArray(cached.files) && cached.files.length > 0;
			const meta = cached.meta || {};
			if (!hasFiles && !meta.text && !meta.url && !meta.title) return;
			return deliverShareTargetInput({
				...meta,
				files: cached.files,
				source: "share-target"
			});
		}).catch(() => void 0);
	};
	const replay = () => {
		replayProcessPending();
		replayShareCache();
		unifiedMessaging.processQueuedMessages("workcenter").catch(() => void 0);
	};
	const onShow = () => replay();
	const onVisible = () => {
		if (globalThis.document?.visibilityState === "visible") replay();
	};
	globalThis.addEventListener?.("pageshow", onShow);
	globalThis.addEventListener?.("online", onShow);
	globalThis.addEventListener?.("visibilitychange", onVisible);
	try {
		navigator.serviceWorker?.addEventListener("controllerchange", onShow);
	} catch {}
	replay();
	return () => {
		bound = false;
		try {
			navigator.serviceWorker?.removeEventListener("message", onSwMessage);
			navigator.serviceWorker?.removeEventListener("controllerchange", onShow);
		} catch {}
		globalThis.removeEventListener?.("pageshow", onShow);
		globalThis.removeEventListener?.("online", onShow);
		globalThis.removeEventListener?.("visibilitychange", onVisible);
	};
};
//#endregion
export { sw_page_bridge_exports as a, ingestSwClientMessage as i, deliverShareTargetInput as n, deliverSwResultToWorkCenter as r, bindSwPageBridge as t };
