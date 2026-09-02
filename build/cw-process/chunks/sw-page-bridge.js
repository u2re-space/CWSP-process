import { r as __exportAll } from "./rolldown-runtime.js";
import { at as readProcessApiResultText, fn as unwrapSwInteropMessage, ot as buildShareDataFromCachedPayload, st as consumeCachedShareTargetPayload, tt as unifiedMessaging } from "../shells/boot-index.js";
import "../shells/boot-history-base.js";
//#region src/shared/other/config/Names.ts
/**
* Broadcast channel names used throughout the application
*/
var BROADCAST_CHANNELS = {
	SHARE_TARGET: "rs-share-target",
	TOAST: "rs-toast",
	CLIPBOARD: "rs-clipboard",
	WORK_CENTER: "rs-workcenter",
	MARKDOWN_VIEWER: "rs-markdown-viewer",
	SETTINGS: "rs-settings",
	GENERAL: "rs-app-general",
	MINIMAL_APP: "minimal-app",
	MAIN_APP: "main-app",
	FILE_EXPLORER: "file-explorer",
	PRINT_VIEWER: "print-viewer",
	SETTINGS_VIEWER: "settings-viewer",
	HISTORY_VIEWER: "history-viewer",
	MARKDOWN_VIEWER_CHANNEL: "markdown-viewer",
	FILE_EXPLORER_CHANNEL: "file-explorer",
	SETTINGS_CHANNEL: "settings",
	HISTORY_CHANNEL: "history",
	PRINT_CHANNEL: "print",
	SERVICE_WORKCENTER: "rs-service-workcenter",
	SERVICE_SETTINGS: "rs-service-settings",
	SERVICE_VIEWER: "rs-service-viewer",
	SERVICE_EXPLORER: "rs-service-explorer",
	SERVICE_AIRPAD: "rs-service-airpad",
	SERVICE_NETWORK: "rs-service-network",
	SERVICE_PRINT: "rs-service-print",
	SERVICE_HISTORY: "rs-service-history",
	SERVICE_EDITOR: "rs-service-editor",
	SERVICE_HOME: "rs-service-home"
};
var viewBroadcastChannelName = (viewId) => {
	return `rs-view-${normalizeViewId(viewId) || "app"}`;
};
/**
* Component and module identifiers
*/
var COMPONENTS = {
	WORK_CENTER: "workcenter",
	MARKDOWN_VIEWER: "markdown-viewer",
	MARKDOWN_EDITOR: "markdown-editor",
	RICH_EDITOR: "rich-editor",
	SETTINGS: "settings",
	HISTORY: "history",
	FILE_PICKER: "file-picker",
	FILE_EXPLORER: "file-explorer",
	WORKCENTER_CORE: "workcenter-core",
	BASIC_WORKCENTER: "basic-workcenter",
	BASIC_VIEWER: "basic-viewer",
	BASIC_EXPLORER: "basic-explorer",
	BASIC_SETTINGS: "basic-settings",
	BASIC_HISTORY: "basic-history",
	BASIC_PRINT: "basic-print",
	AIRPAD: "airpad",
	NETWORK: "network",
	HOME: "home",
	EDITOR: "editor",
	VIEWER: "viewer",
	EXPLORER: "explorer",
	PRINT: "print"
};
/**
* Location hash identifiers for app navigation
*/
var ROUTE_HASHES = {
	MARKDOWN_VIEWER: "#markdown-viewer",
	MARKDOWN_EDITOR: "#markdown-editor",
	RICH_EDITOR: "#rich-editor",
	SETTINGS: "#settings",
	HISTORY: "#history",
	WORKCENTER: "#workcenter",
	FILE_PICKER: "#file-picker",
	FILE_EXPLORER: "#file-explorer",
	PRINT: "#print",
	AIRPAD: "#airpad",
	NETWORK: "#network",
	WORKCENTER_FILES: "#workcenter-files",
	WORKCENTER_TEXT: "#workcenter-text",
	WORKCENTER_IMAGES: "#workcenter-images",
	WORKCENTER_PROCESSING: "#workcenter-processing",
	SHARE_TARGET_TEXT: "#share-target-text",
	SHARE_TARGET_FILES: "#share-target-files",
	SHARE_TARGET_URL: "#share-target-url",
	SHARE_TARGET_IMAGE: "#share-target-image"
};
/**
* Destination identifiers for unified messaging
*/
var DESTINATIONS = {
	WORKCENTER: "workcenter",
	CLIPBOARD: "clipboard",
	VIEWER: "viewer",
	MARKDOWN_VIEWER: "markdown-viewer",
	SETTINGS: "settings",
	HISTORY: "history",
	EXPLORER: "explorer",
	FILE_EXPLORER: "file-explorer",
	PRINT: "print",
	PRINT_VIEWER: "print-viewer",
	EDITOR: "editor",
	AIRPAD: "airpad",
	HOME: "home",
	BASIC_APP: "basic-app",
	MAIN_APP: "main-app"
};
var CANONICAL_VIEW_IDS = [
	"viewer",
	"workcenter",
	"explorer",
	"editor",
	"settings",
	"history",
	"home",
	"airpad",
	"print"
];
/**
* COMPAT: legacy shells still emit `markdown-viewer`, `file-explorer`, and
* `basic-*` destinations. Keep alias resolution centralized here so transports,
* views, and workers can agree on one canonical target vocabulary.
*/
var DESTINATION_ALIASES = {
	viewer: [
		DESTINATIONS.VIEWER,
		DESTINATIONS.MARKDOWN_VIEWER,
		COMPONENTS.BASIC_VIEWER
	],
	workcenter: [
		DESTINATIONS.WORKCENTER,
		COMPONENTS.BASIC_WORKCENTER,
		COMPONENTS.WORKCENTER_CORE
	],
	explorer: [
		DESTINATIONS.EXPLORER,
		DESTINATIONS.FILE_EXPLORER,
		COMPONENTS.BASIC_EXPLORER
	],
	editor: [
		DESTINATIONS.EDITOR,
		COMPONENTS.MARKDOWN_EDITOR,
		COMPONENTS.RICH_EDITOR
	],
	settings: [
		DESTINATIONS.SETTINGS,
		BROADCAST_CHANNELS.SETTINGS_CHANNEL,
		COMPONENTS.BASIC_SETTINGS
	],
	history: [
		DESTINATIONS.HISTORY,
		BROADCAST_CHANNELS.HISTORY_CHANNEL,
		COMPONENTS.BASIC_HISTORY
	],
	print: [
		DESTINATIONS.PRINT,
		DESTINATIONS.PRINT_VIEWER,
		COMPONENTS.BASIC_PRINT
	],
	airpad: [DESTINATIONS.AIRPAD],
	home: [DESTINATIONS.HOME],
	clipboard: [DESTINATIONS.CLIPBOARD],
	"basic-app": [DESTINATIONS.BASIC_APP],
	"main-app": [DESTINATIONS.MAIN_APP]
};
var DESTINATION_LOOKUP = Object.entries(DESTINATION_ALIASES).reduce((out, [canonical, aliases]) => {
	out[canonical] = canonical;
	for (const alias of aliases) out[String(alias).toLowerCase()] = canonical;
	return out;
}, {});
var normalizeDestination = (value) => {
	const raw = String(value || "").trim().toLowerCase();
	if (!raw) return "";
	return DESTINATION_LOOKUP[raw] || raw;
};
var normalizeViewId = (value) => {
	const canonical = normalizeDestination(value);
	if (CANONICAL_VIEW_IDS.includes(canonical)) return canonical;
	return "viewer";
};
BROADCAST_CHANNELS.SERVICE_WORKCENTER, BROADCAST_CHANNELS.SERVICE_SETTINGS, BROADCAST_CHANNELS.SERVICE_VIEWER, BROADCAST_CHANNELS.SERVICE_EXPLORER, BROADCAST_CHANNELS.SERVICE_AIRPAD, BROADCAST_CHANNELS.SERVICE_NETWORK, BROADCAST_CHANNELS.SERVICE_PRINT, BROADCAST_CHANNELS.SERVICE_HISTORY, BROADCAST_CHANNELS.SERVICE_EDITOR, BROADCAST_CHANNELS.SERVICE_HOME;
ROUTE_HASHES.WORKCENTER, ROUTE_HASHES.SETTINGS, ROUTE_HASHES.MARKDOWN_VIEWER, ROUTE_HASHES.FILE_EXPLORER, ROUTE_HASHES.NETWORK, ROUTE_HASHES.PRINT, ROUTE_HASHES.HISTORY, ROUTE_HASHES.MARKDOWN_EDITOR;
//#endregion
//#region src/shared/routing/channel/workcenter-command-wire.ts
var WORKCENTER_COMMAND_TYPE = "workcenter-command";
var postWorkCenterCommand = (command) => {
	const envelope = {
		type: WORKCENTER_COMMAND_TYPE,
		command
	};
	const names = [BROADCAST_CHANNELS.WORK_CENTER, viewBroadcastChannelName("workcenter")];
	for (const name of names) try {
		const channel = new BroadcastChannel(name);
		channel.postMessage(envelope);
		channel.close();
	} catch {}
};
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
var PROCESS_PENDING_PATH = "/process/pending";
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
		const response = await fetch(PROCESS_PENDING_PATH, { cache: "no-store" });
		const type = String(response.headers.get("content-type") || "").toLowerCase();
		if (!response.ok || !type.includes("application/json")) return;
		const json = await response.json();
		const operations = Array.isArray(json?.operations) ? json.operations : [];
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
		await fetch(PROCESS_PENDING_PATH, {
			method: "DELETE",
			cache: "no-store"
		}).catch(() => void 0);
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
export { sw_page_bridge_exports as a, ingestSwClientMessage as i, deliverShareTargetInput as n, postWorkCenterCommand as o, deliverSwResultToWorkCenter as r, bindSwPageBridge as t };
