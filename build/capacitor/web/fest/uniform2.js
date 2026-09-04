const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/src.js","./core4.js","../chunks/rolldown-runtime.js","../assets/index-CU5eF_0S.js","../chunks/ecosystem-skus.js","./core.js","./core2.js","./object.js","./core5.js","./uniform.js","../chunks/shells.js","../vendor/jsox.js","../chunks/open-policy.js","../chunks/SettingsTypes.js","../chunks/process-ingress.js","../chunks/airpad-cwsp-client-parity.js","../chunks/multi-value-list.js","../chunks/cws-bridge.js","./core3.js","../vendor/@capacitor_core.js","../chunks/UniformInterop2.js","../chunks/names.js","../chunks/remote-connection-runtime.js","./icon.js","./icon2.js","./icon3.js","../chunks/Theme.js","../chunks/StateStorage.js","./object2.js","../chunks/Clipboard.js","../chunks/Runtime.js","../chunks/settings-shell-profile.js","../shells/preference.js","../chunks/toast.js","../chunks/preview.js","../chunks/src2.js","../chunks/window.js","../com/app4.js","../vendor/culori.js","../com/app3.js","../com/app.js","../com/app2.js","../com/app5.js","./veela2.js","./veela3.js","../com/app6.js","../vendor/dompurify.js","../vendor/marked2.js","../vendor/katex.js","../chunks/tabbed.js","../chunks/environment.js","../chunks/src6.js","../chunks/UniformViewTransport.js","../chunks/UnifiedMessaging.js","../chunks/UniformInterop.js","../chunks/channel-actions.js","../views/ingress-validation.js","../chunks/types.js","../chunks/sku-ingress.js","../com/app8.js","../chunks/src7.js","../com/app7.js","../chunks/process-api-result.js","../chunks/UnifiedMessaging2.js","../chunks/utils.js","../chunks/CustomInstructions.js","../vendor/@toon-format_toon.js","../chunks/core.js","../chunks/unified.js","../chunks/RuntimeSettings.js","../chunks/log-sanitizer.js","../chunks/ShareTargetGateway2.js","../chunks/WorkCenterState.js","../shells/boot-history-base.js","../chunks/packet-wire-hash.js","../chunks/ecosystem-skus2.js","../chunks/cws-bridge2.js","../vendor/@capacitor_core2.js","./veela4.js","../chunks/capacitor-permissions.js","../chunks/capacitor-settings-permissions.js","../chunks/templates.js","../chunks/admin-doors.js","../chunks/capacitor-settings-permissions3.js","../chunks/capacitor-permissions3.js","../chunks/hub-socket-boot.js","../chunks/clipboard-device.js","../chunks/src5.js","../chunks/frontend-debug-capture.js","../chunks/src4.js","../chunks/transfer-history-runtime.js","./veela.js","../chunks/src3.js","./veela5.js","../chunks/launcher-state.js"])))=>i.map(i=>d[i]);
import { d as isViewLocalToSurface } from "../chunks/ecosystem-skus.js";
import { t as __vitePreload } from "../assets/index-CU5eF_0S.js";
import { s as detectExecutionContext } from "./uniform.js";
import { d as normalizeDestination, f as normalizeViewId, l as getDestinationAliases, n as BROADCAST_CHANNELS, o as ROUTE_HASHES, p as viewBroadcastChannelName, r as COMPONENTS, u as matchesDestination } from "../chunks/names.js";
import { c as replayQueuedMessagesForDestination, r as enqueuePendingMessage, u as sendProtocolMessage } from "../chunks/UnifiedMessaging.js";
import { n as toUnifiedInteropMessage } from "../chunks/UniformInterop2.js";
import { i as shouldDeferUnifiedIngressUntilStable, r as settleIngressTargetBeforeDelivery, t as scheduleSerialViewIngressDelivery } from "../views/inbound-timing.js";
import { r as validateIngressBeforeViewHandle } from "../views/ingress-validation.js";
import "../chunks/ShareTargetGateway.js";
import { i as registerHandler, n as initializeComponent, r as registerComponent, s as unregisterHandler } from "../chunks/UnifiedMessaging2.js";
//#region ../../modules/projects/uniform.ts/src/newer/messaging/ServiceChannelManager.ts
/**
* Service Channel Manager
* Manages BroadcastChannel-based service channels for views and components
* Part of fest/uniform - configurable without app-specific dependencies
*/
var ServiceChannelManager = class {
	channels = /* @__PURE__ */ new Map();
	readyPromises = /* @__PURE__ */ new Map();
	messageHandlers = /* @__PURE__ */ new Map();
	channelConfigs;
	executionContext;
	logPrefix;
	constructor(config = {}) {
		this.channelConfigs = config.channels ?? {};
		this.logPrefix = config.logPrefix ?? "[ServiceChannels]";
		this.executionContext = detectExecutionContext();
		console.log(`${this.logPrefix} Initialized in ${this.executionContext} context`);
	}
	/**
	* Register channel configurations
	*/
	registerConfigs(configs) {
		this.channelConfigs = {
			...this.channelConfigs,
			...configs
		};
	}
	/**
	* Get channel configuration
	*/
	getConfig(channelId) {
		return this.channelConfigs[channelId];
	}
	/**
	* Get all channel configurations
	*/
	getAllConfigs() {
		return { ...this.channelConfigs };
	}
	/**
	* Initialize a service channel
	*/
	async initChannel(channelId) {
		if (this.channels.has(channelId)) return this.channels.get(channelId);
		const config = this.channelConfigs[channelId];
		if (!config) throw new Error(`Unknown channel: ${channelId}. Register configuration first.`);
		let resolveReady;
		const readyPromise = new Promise((resolve) => {
			resolveReady = resolve;
		});
		this.readyPromises.set(channelId, {
			promise: readyPromise,
			resolve: resolveReady
		});
		console.log(`${this.logPrefix} Initializing channel: ${channelId} -> ${config.broadcastName}`);
		const channel = new BroadcastChannel(config.broadcastName);
		channel.onmessage = (event) => {
			this.handleIncomingMessage(channelId, event.data);
		};
		channel.onmessageerror = (event) => {
			console.error(`${this.logPrefix} Message error on ${channelId}:`, event);
		};
		this.channels.set(channelId, channel);
		resolveReady();
		console.log(`${this.logPrefix} Channel ready: ${channelId}`);
		return channel;
	}
	/**
	* Close a service channel
	*/
	closeChannel(channelId) {
		const channel = this.channels.get(channelId);
		if (channel) {
			channel.close();
			this.channels.delete(channelId);
			this.readyPromises.delete(channelId);
			this.messageHandlers.delete(channelId);
			console.log(`${this.logPrefix} Channel closed: ${channelId}`);
		}
	}
	/**
	* Close all channels
	*/
	closeAll() {
		for (const channelId of this.channels.keys()) this.closeChannel(channelId);
	}
	/**
	* Wait for a channel to be ready
	*/
	async waitForChannel(channelId) {
		const deferred = this.readyPromises.get(channelId);
		if (deferred) await deferred.promise;
		else await this.initChannel(channelId);
	}
	/**
	* Send a message to a channel
	*/
	async send(target, type, data, options = {}) {
		await this.waitForChannel(target);
		const channel = this.channels.get(target);
		if (!channel) throw new Error(`Channel not ready: ${target}`);
		const message = {
			type,
			source: options.source ?? this.executionContext,
			target,
			data,
			timestamp: Date.now(),
			correlationId: options.correlationId
		};
		channel.postMessage(message);
		console.log(`${this.logPrefix} Sent message to ${target}:`, type);
	}
	/**
	* Broadcast a message to all initialized channels
	*/
	broadcast(type, data, source) {
		for (const [channelId, channel] of this.channels) {
			const message = {
				type,
				source: source ?? this.executionContext,
				target: channelId,
				data,
				timestamp: Date.now()
			};
			channel.postMessage(message);
		}
		console.log(`${this.logPrefix} Broadcast message:`, type);
	}
	/**
	* Subscribe to messages on a channel
	*/
	subscribe(channelId, handler) {
		if (!this.messageHandlers.has(channelId)) this.messageHandlers.set(channelId, /* @__PURE__ */ new Set());
		this.messageHandlers.get(channelId).add(handler);
		this.initChannel(channelId).catch(console.error);
		return () => {
			this.messageHandlers.get(channelId)?.delete(handler);
		};
	}
	/**
	* Handle incoming message
	*/
	handleIncomingMessage(channelId, data) {
		const handlers = this.messageHandlers.get(channelId);
		if (!handlers || handlers.size === 0) {
			console.log(`${this.logPrefix} No handlers for ${channelId}, message queued`);
			return;
		}
		const message = data;
		for (const handler of handlers) try {
			handler(message);
		} catch (error) {
			console.error(`${this.logPrefix} Handler error on ${channelId}:`, error);
		}
	}
	/**
	* Check if channel is initialized
	*/
	isInitialized(channelId) {
		return this.channels.has(channelId);
	}
	/**
	* Get all initialized channel IDs
	*/
	getInitializedChannels() {
		return Array.from(this.channels.keys());
	}
	/**
	* Get channel status
	*/
	getStatus() {
		const status = {};
		for (const channelId of Object.keys(this.channelConfigs)) status[channelId] = {
			connected: this.channels.has(channelId),
			lastActivity: Date.now(),
			pendingMessages: 0
		};
		return status;
	}
	/**
	* Get execution context
	*/
	getExecutionContext() {
		return this.executionContext;
	}
};
/**
* Create a new ServiceChannelManager instance
*/
function createServiceChannelManager(config) {
	return new ServiceChannelManager(config);
}
//#endregion
//#region src/shared/routing/core/views.ts
var VIEW_ENABLED_VIEWER = "viewer";
var VIEW_ENABLED_EDITOR = "editor";
var VIEW_ENABLED_WORKCENTER = "workcenter";
var VIEW_ENABLED_EXPLORER = "explorer";
var VIEW_ENABLED_SETTINGS = "settings";
var VIEW_ENABLED_HISTORY = "history";
var VIEW_ENABLED_HOME = "home";
var VIEW_ENABLED_PRINT = "print";
/** CWSP connection / probe diagnostics — primary Capacitor (CWSAndroid) home view. */
var VIEW_ENABLED_NETWORK = "network";
var DEFAULT_VIEW_ID = "viewer";
var VIEW_FLAGS = {
	network: VIEW_ENABLED_NETWORK,
	settings: VIEW_ENABLED_SETTINGS,
	viewer: VIEW_ENABLED_VIEWER,
	editor: VIEW_ENABLED_EDITOR,
	workcenter: VIEW_ENABLED_WORKCENTER,
	explorer: VIEW_ENABLED_EXPLORER,
	history: VIEW_ENABLED_HISTORY,
	home: VIEW_ENABLED_HOME,
	print: VIEW_ENABLED_PRINT
};
/**
* Optional per-build allowlist: `VITE_ENABLED_VIEWS="network,settings"` restricts
* which views are enabled (e.g. the Capacitor CWSAndroid shell: Network + Settings
* only). When unset, all flagged views are enabled. Read from Vite env first,
* then Node env, guarded for non-bundled (tsx) contexts.
*/
var readEnabledViewsAllowlist = () => {
	let raw = "";
	try {
		const search = globalThis?.location?.search;
		if (search) {
			const params = new URLSearchParams(search);
			raw = String(params.get("views") || params.get("enabledViews") || "");
		}
	} catch {}
	if (!raw) try {
		raw = String(globalThis?.localStorage?.getItem?.("rs-enabled-views") ?? "");
	} catch {}
	if (!raw) try {
		raw = String("workcenter,settings,history");
	} catch {}
	if (!raw) try {
		raw = String({}.VITE_ENABLED_VIEWS ?? "");
	} catch {}
	const list = raw.split(/[\s,;]+/).map((entry) => entry.trim().toLowerCase()).filter(Boolean);
	if (!list.length) return null;
	list.push("settings");
	try {
		const search = globalThis?.location?.search;
		if (search && new URLSearchParams(search).get("views")) globalThis?.localStorage?.setItem?.("rs-enabled-views", Array.from(new Set(list)).join(","));
	} catch {}
	return new Set(list);
};
var ENABLED_VIEWS_ALLOWLIST = readEnabledViewsAllowlist();
/**
* Build-time gate: the host bundler (CWSP-shell Vite) replaces `__RS_VIEW_<ID>__`
* with a boolean from `VITE_ENABLED_VIEWS`. `typeof` is safe for undeclared
* globals (returns "undefined") so non-bundled/tsx contexts fall back to enabled.
*/
var BUILD_VIEW_FLAGS = {
	viewer: false,
	editor: false,
	workcenter: true,
	explorer: false,
	settings: true,
	history: true,
	home: false,
	print: false,
	network: false
};
var buildAllows = (viewId) => BUILD_VIEW_FLAGS[String(viewId).toLowerCase()] !== false;
var runtimeAllows = (viewId) => !ENABLED_VIEWS_ALLOWLIST || ENABLED_VIEWS_ALLOWLIST.has(String(viewId).toLowerCase());
var isViewAllowed = (viewId) => buildAllows(viewId) && runtimeAllows(viewId);
var ENABLED_VIEW_IDS = Object.entries(VIEW_FLAGS).filter(([viewId, enabled]) => Boolean(enabled) && isViewAllowed(viewId) && isViewLocalToSurface(viewId)).map(([viewId]) => viewId);
var isEnabledView = (viewId) => {
	return Boolean(VIEW_FLAGS[viewId]) && isViewAllowed(viewId) && isViewLocalToSurface(viewId);
};
var pickEnabledView = (preferred = DEFAULT_VIEW_ID, fallback = DEFAULT_VIEW_ID) => {
	if (isEnabledView(preferred)) return preferred;
	if (isEnabledView(fallback)) return fallback;
	if (ENABLED_VIEW_IDS.length > 0) return ENABLED_VIEW_IDS[0];
	return "viewer";
};
//#endregion
//#region src/shared/routing/core/view-message-routing.ts
var VIEW_MESSAGE_FALLBACKS = {
	viewer: [
		"content-view",
		"content-load",
		"markdown-content"
	],
	workcenter: [
		"content-attach",
		"file-attach",
		"share-target-input",
		"content-share"
	],
	explorer: [
		"file-ask",
		"file-save",
		"navigate-path",
		"content-explorer"
	],
	home: ["home-update", "content-share"],
	editor: ["content-load", "content-edit"],
	settings: ["settings-update"],
	history: ["history-update"],
	print: ["content-view"]
};
var inferViewDestination = (viewId) => {
	return normalizeViewId(viewId);
};
var selectMessageTypeForView = (view, incomingType) => {
	const checks = [incomingType, ...VIEW_MESSAGE_FALLBACKS[view.id] || []];
	for (const type of checks) {
		if (!type) continue;
		if (!view.canHandleMessage || view.canHandleMessage(type)) return type;
	}
	return null;
};
var mapUnifiedMessageToView = (view, message) => {
	const selectedType = selectMessageTypeForView(view, message.type);
	if (!selectedType) return null;
	const id = typeof message.id === "string" && message.id.trim() ? message.id : void 0;
	return {
		...id ? { id } : {},
		type: selectedType,
		data: message.data,
		metadata: message.metadata
	};
};
//#endregion
//#region src/shared/routing/core/view-api.ts
/**
* View-scoped POST API + BroadcastChannel bridge.
* - Production: service worker intercepts POST /{view} and fans out to clients.
* - Dev (no SW): Vite middleware returns devRelay JSON; this module posts to rs-view-* locally.
*/
function subscribeViewChannel(viewId, handler) {
	if (typeof BroadcastChannel === "undefined") return () => {};
	const bc = new BroadcastChannel(viewBroadcastChannelName(normalizeViewId(viewId)));
	bc.addEventListener("message", handler);
	return () => {
		bc.removeEventListener("message", handler);
		bc.close();
	};
}
/**
* Ask active shell/router to open a view using query-like envelope semantics.
* Window shell listens to this event and can map request to a process frame.
*/
function requestOpenView(request) {
	const viewId = String(request?.viewId || "").trim().toLowerCase();
	if (!viewId) return;
	const rawTarget = request?.target || "window";
	const target = rawTarget === "base" ? "immersive" : rawTarget;
	globalThis?.dispatchEvent?.(new CustomEvent("cw:view-open-request", { detail: {
		viewId,
		target,
		params: request?.params || {},
		pid: request?.pid || null,
		body: request?.body,
		contentType: request?.contentType,
		channel: request?.channel,
		attachments: request?.attachments,
		windowType: request?.windowType,
		newTask: request?.newTask
	} }));
}
//#endregion
//#region src/shared/routing/channel/ServiceChannels.ts
/**
* Service Channels for CWSP-shell
* Extends fest/uniform ServiceChannelManager with app-specific configuration
*/
var SERVICE_CHANNEL_CONFIG = {
	workcenter: {
		broadcastName: BROADCAST_CHANNELS.WORK_CENTER,
		routeHash: ROUTE_HASHES.WORKCENTER,
		component: COMPONENTS.WORK_CENTER,
		description: "AI work center for processing files and content"
	},
	settings: {
		broadcastName: BROADCAST_CHANNELS.SETTINGS,
		routeHash: ROUTE_HASHES.SETTINGS,
		component: COMPONENTS.SETTINGS,
		description: "Application settings and configuration"
	},
	airpad: {
		broadcastName: BROADCAST_CHANNELS.SERVICE_AIRPAD,
		routeHash: ROUTE_HASHES.AIRPAD,
		component: COMPONENTS.AIRPAD,
		description: "AirPad remote trackpad/keyboard + clipboard"
	},
	network: {
		broadcastName: BROADCAST_CHANNELS.SERVICE_NETWORK,
		routeHash: ROUTE_HASHES.NETWORK,
		component: COMPONENTS.NETWORK,
		description: "CWSP network status, probes, and endpoint routing"
	},
	viewer: {
		broadcastName: BROADCAST_CHANNELS.MARKDOWN_VIEWER,
		routeHash: ROUTE_HASHES.MARKDOWN_VIEWER,
		component: COMPONENTS.MARKDOWN_VIEWER,
		description: "Content viewer for markdown and files"
	},
	explorer: {
		broadcastName: BROADCAST_CHANNELS.FILE_EXPLORER,
		routeHash: ROUTE_HASHES.FILE_EXPLORER,
		component: COMPONENTS.FILE_EXPLORER,
		description: "File explorer and browser"
	},
	print: {
		broadcastName: BROADCAST_CHANNELS.PRINT_CHANNEL,
		routeHash: ROUTE_HASHES.PRINT,
		component: COMPONENTS.BASIC_PRINT,
		description: "Print preview and export"
	},
	history: {
		broadcastName: BROADCAST_CHANNELS.HISTORY_CHANNEL,
		routeHash: ROUTE_HASHES.HISTORY,
		component: COMPONENTS.HISTORY,
		description: "Action history and undo/redo"
	},
	editor: {
		broadcastName: "rs-editor",
		routeHash: ROUTE_HASHES.MARKDOWN_EDITOR,
		component: COMPONENTS.MARKDOWN_EDITOR,
		description: "Content editor"
	},
	home: {
		broadcastName: "rs-home",
		routeHash: "#home",
		component: "home",
		description: "Home/landing view"
	}
};
var appServiceChannelManager = null;
/**
* Get the app-configured ServiceChannelManager
*/
function getServiceChannels() {
	if (!appServiceChannelManager) appServiceChannelManager = createServiceChannelManager({
		channels: SERVICE_CHANNEL_CONFIG,
		logPrefix: "[ServiceChannels]"
	});
	return appServiceChannelManager;
}
var serviceChannels = getServiceChannels();
//#endregion
//#region src/shared/routing/core/channel-mixin.ts
/**
* Burst opens (recent list, launch queue replay): supersede older queued work so only the latest
* payload pays settle + paint (serial queue still orders; skipped tasks exit cheaply).
*/
var ingressSupersedeGeneration = /* @__PURE__ */ new WeakMap();
var bumpIngressGeneration = (view) => {
	const next = (ingressSupersedeGeneration.get(view) ?? 0) + 1;
	ingressSupersedeGeneration.set(view, next);
	return next;
};
/** Mirrors {@link dispatchViewTransfer} + BroadcastChannel can deliver the same ingress twice; ReplayGuard only covers the manager path. */
var recentViewIngressByMessageId = /* @__PURE__ */ new Map();
var INGRESS_DEDUP_MS = 600;
/** Attached to routed view messages so views can discard stale async work after `await` (file read, fetch). */
var UNIFIED_INGRESS_STAMP_META = "__ingressStamp";
/** True when newer ingress has bumped the counter vs this delivery's stamp (`handleMessage` should no-op). */
function ingressStampWasSuperseded(view, stamp) {
	if (typeof stamp !== "number" || !Number.isFinite(stamp)) return false;
	return (ingressSupersedeGeneration.get(view) ?? 0) !== stamp;
}
function stampMappedMessageForIngressDelivery(mapped, generation) {
	const prevMeta = mapped.metadata && typeof mapped.metadata === "object" && !Array.isArray(mapped.metadata) ? mapped.metadata : {};
	return {
		...mapped,
		metadata: {
			...prevMeta,
			[UNIFIED_INGRESS_STAMP_META]: generation
		}
	};
}
var pruneViewIngressDedup = (now) => {
	for (const [k, t] of recentViewIngressByMessageId) if (now - t > INGRESS_DEDUP_MS) recentViewIngressByMessageId.delete(k);
};
var deliverUnifiedMessageToView = async (view, message) => {
	const mid = typeof message.id === "string" ? message.id.trim() : "";
	if (mid) {
		const dest = normalizeViewId(inferViewDestination(String(view.id || "")));
		const now = Date.now();
		pruneViewIngressDedup(now);
		const dedupKey = `${dest}::${mid}`;
		const prev = recentViewIngressByMessageId.get(dedupKey);
		if (prev !== void 0 && now - prev < INGRESS_DEDUP_MS) return;
		recentViewIngressByMessageId.set(dedupKey, now);
	}
	const mapped = mapUnifiedMessageToView(view, message);
	if (!mapped) return;
	const ingressCheck = validateIngressBeforeViewHandle(message, mapped.type);
	if (!ingressCheck.ok) {
		console.warn("[ViewIngress] Skipped malformed envelope:", ingressCheck.reason, mapped.type);
		return;
	}
	const generation = bumpIngressGeneration(view);
	await scheduleSerialViewIngressDelivery(view, async () => {
		if (ingressSupersedeGeneration.get(view) !== generation) return;
		if (shouldDeferUnifiedIngressUntilStable(message, mapped.type)) await settleIngressTargetBeforeDelivery(view, message, mapped.type);
		if (ingressSupersedeGeneration.get(view) !== generation) return;
		await view.handleMessage?.(stampMappedMessageForIngressDelivery(mapped, generation));
	});
};
function bindViewReceiveChannel(view, options = {}) {
	if (!view.handleMessage) return () => {};
	const destination = options.destination || inferViewDestination(String(view.id || ""));
	const componentId = options.componentId || `view:${view.id}`;
	const receiveDestinations = getDestinationAliases(destination);
	const handler = {
		canHandle: (message) => matchesDestination(message.destination, destination),
		handle: async (message) => {
			await deliverUnifiedMessageToView(view, message);
		}
	};
	const pendingSeen = /* @__PURE__ */ new Set();
	for (const alias of receiveDestinations) {
		const aliasComponentId = `${componentId}:${alias}`;
		registerComponent(aliasComponentId, alias);
		registerHandler(alias, handler);
		const pending = initializeComponent(aliasComponentId);
		if (pending.length > 0) for (const message of pending) {
			if (pendingSeen.has(message.id)) continue;
			pendingSeen.add(message.id);
			handler.handle(message);
		}
	}
	const viewChannelCleanup = subscribeViewChannel(normalizeViewId(destination), (event) => {
		const payload = event.data;
		if (!payload || typeof payload !== "object") return;
		if (payload.type === "view-transfer" && payload.message && typeof payload.message === "object") {
			deliverUnifiedMessageToView(view, toUnifiedInteropMessage(payload.message));
			return;
		}
		if (payload.type === "view-post") {
			const viewId = normalizeViewId(payload.viewId);
			if (viewId !== normalizeViewId(String(view.id || destination))) return;
			const vm = {
				id: typeof payload.id === "string" ? String(payload.id) : crypto.randomUUID(),
				type: "view-post",
				destination: viewId,
				source: "view-channel",
				data: {
					bodyText: String(payload.bodyText || ""),
					contentType: String(payload.contentType || ""),
					viewId
				},
				metadata: {
					source: "view-channel",
					destination: viewId
				}
			};
			const generation = bumpIngressGeneration(view);
			scheduleSerialViewIngressDelivery(view, async () => {
				if (ingressSupersedeGeneration.get(view) !== generation) return;
				if (shouldDeferUnifiedIngressUntilStable(vm, "view-post")) await settleIngressTargetBeforeDelivery(view, vm, "view-post");
				if (ingressSupersedeGeneration.get(view) !== generation) return;
				await view.handleMessage?.(stampMappedMessageForIngressDelivery({
					type: "view-post",
					data: {
						bodyText: String(payload.bodyText || ""),
						contentType: String(payload.contentType || ""),
						viewId
					},
					metadata: vm.metadata
				}, generation));
			});
		}
	});
	return () => {
		for (const alias of receiveDestinations) unregisterHandler(alias, handler);
		viewChannelCleanup();
	};
}
//#endregion
//#region src/shared/routing/core/implicit-view-bridge.ts
/** Narrow structural check — imperative APIs (`handleMessage`, `addFiles`, …) stay on the element. */
function isImplicitViewMessagingHost(node) {
	if (!node || typeof node !== "object") return false;
	const el = node;
	return typeof el.handleMessage === "function" && typeof el.id === "string" && el.id.trim().length > 0;
}
var STAGED_UNIFIED_SELECTOR = "[data-cw-unified-pending], [data-cw-unified-mail], [data-cw-unified-defer-flush]";
function parseJsonObject(raw) {
	if (!raw?.trim()) return null;
	try {
		const v = JSON.parse(raw);
		return v && typeof v === "object" ? v : null;
	} catch {
		return null;
	}
}
function buildUnifiedMessageFromStaging(rec) {
	const destination = normalizeDestination(String(rec.destination ?? "")) || String(rec.destination ?? "").trim();
	if (!destination) return null;
	return {
		id: typeof rec.id === "string" ? rec.id : crypto.randomUUID(),
		type: String(rec.type || "content-share"),
		source: typeof rec.source === "string" ? rec.source : "dom-staged-unified",
		destination,
		contentType: typeof rec.contentType === "string" ? rec.contentType : void 0,
		data: rec.data ?? rec.payload ?? {},
		metadata: {
			timestamp: Date.now(),
			...typeof rec.metadata === "object" && rec.metadata ? rec.metadata : {}
		}
	};
}
function readDeferFlushDestination(el) {
	const raw = el.getAttribute("data-cw-unified-defer-flush");
	if (!raw?.trim()) return null;
	const trimmed = raw.trim();
	if (trimmed.startsWith("{")) {
		const d = parseJsonObject(trimmed)?.destination;
		return typeof d === "string" ? d : null;
	}
	return trimmed;
}
function consumeDeferFlush(el) {
	const destRaw = readDeferFlushDestination(el);
	if (!destRaw) return;
	replayQueuedMessagesForDestination(normalizeDestination(destRaw) || normalizeViewId(destRaw)).catch(() => void 0);
	el.removeAttribute("data-cw-unified-defer-flush");
}
function consumePending(el) {
	const rec = parseJsonObject(el.getAttribute("data-cw-unified-pending"));
	if (!rec) return;
	const msg = buildUnifiedMessageFromStaging(rec);
	if (!msg?.destination) return;
	enqueuePendingMessage(msg.destination, msg);
	el.removeAttribute("data-cw-unified-pending");
}
function consumeMail(el) {
	const rec = parseJsonObject(el.getAttribute("data-cw-unified-mail"));
	if (!rec) return;
	const destination = normalizeDestination(String(rec.destination || "")) || String(rec.destination || "").trim();
	if (!destination) return;
	sendProtocolMessage({
		type: String(rec.type || "dispatch"),
		destination,
		source: typeof rec.source === "string" ? rec.source : "dom-staged-mail",
		data: rec.data ?? rec.payload ?? {},
		contentType: typeof rec.contentType === "string" ? rec.contentType : void 0,
		metadata: typeof rec.metadata === "object" && rec.metadata ? rec.metadata : {},
		purpose: Array.isArray(rec.purpose) ? rec.purpose : typeof rec.purpose === "string" ? [rec.purpose] : ["mail", "deliver"],
		op: typeof rec.op === "string" ? rec.op : "deliver",
		protocol: typeof rec.protocol === "string" ? rec.protocol : void 0
	}).catch(() => void 0);
	el.removeAttribute("data-cw-unified-mail");
}
/**
* Applies staged envelope markers inside `scope` (scope element + subtree via querySelectorAll).
* Intended for MutationObserver added subtrees and shell-injected payloads.
*/
function processStagedUnifiedMarkers(scope) {
	const matched = /* @__PURE__ */ new Set();
	if (scope.matches("[data-cw-unified-pending], [data-cw-unified-mail], [data-cw-unified-defer-flush]")) matched.add(scope);
	for (const n of scope.querySelectorAll(STAGED_UNIFIED_SELECTOR)) matched.add(n);
	for (const el of matched) {
		if (!el.isConnected) continue;
		consumeDeferFlush(el);
		consumePending(el);
		consumeMail(el);
	}
}
function flushDeferredTransportForView(view, explicitDestination) {
	const dest = explicitDestination || inferViewDestination(String(view.id || ""));
	const aliases = getDestinationAliases(dest);
	const targets = /* @__PURE__ */ new Set();
	for (const x of [dest, ...aliases]) {
		const n = normalizeDestination(x) || String(x || "").trim();
		if (n) targets.add(normalizeViewId(n));
	}
	(async () => {
		for (const t of targets) try {
			await replayQueuedMessagesForDestination(t);
		} catch {}
	})();
}
var cleanupByView = /* @__PURE__ */ new WeakMap();
/** Last bound element per canonical destination — avoids duplicate UnifiedMessaging handlers. */
var activeHostByDestination = /* @__PURE__ */ new Map();
function sealCleanup(view, destinationKey, inner) {
	let disposed = false;
	return () => {
		if (disposed) return;
		disposed = true;
		inner();
		cleanupByView.delete(view);
		if (activeHostByDestination.get(destinationKey) === view) activeHostByDestination.delete(destinationKey);
	};
}
/**
* Single receive-channel binding per live view instance; replaces any prior binding for the same destination id.
* Safe to call from {@link ViewRegistry.load} and from DOM discovery.
*/
function attachImplicitViewMessaging(view, options = {}) {
	if (!view.handleMessage) return () => {};
	const existing = cleanupByView.get(view);
	if (existing) return existing;
	const destination = options.destination || inferViewDestination(String(view.id || ""));
	const destinationKey = normalizeViewId(destination);
	const displaced = activeHostByDestination.get(destinationKey);
	if (displaced && displaced !== view) cleanupByView.get(displaced)?.();
	const inner = bindViewReceiveChannel(view, {
		...options,
		destination
	});
	flushDeferredTransportForView(view, destination);
	const cleanup = sealCleanup(view, destinationKey, inner);
	cleanupByView.set(view, cleanup);
	activeHostByDestination.set(destinationKey, view);
	return cleanup;
}
function detachImplicitViewMessaging(view) {
	cleanupByView.get(view)?.();
}
function walkSubtreeNodes(entry, visit) {
	const stack = [entry];
	while (stack.length) {
		const cur = stack.pop();
		if (cur.nodeType === Node.ELEMENT_NODE) {
			const el = cur;
			visit(el);
			const sr = el.shadowRoot;
			if (sr) for (let i = sr.childNodes.length - 1; i >= 0; i--) stack.push(sr.childNodes[i]);
			for (let i = el.childNodes.length - 1; i >= 0; i--) stack.push(el.childNodes[i]);
		}
	}
}
function observeMutationRoot(observer, observed, node) {
	if (observed.has(node)) return;
	observed.add(node);
	observer.observe(node, {
		childList: true,
		subtree: true
	});
}
/**
* Starts observing DOM mutations; binds messaging hosts when connected and tears down when disconnected.
*/
function startImplicitViewMessagingBridge(options = {}) {
	const root = options.root instanceof Document ? options.root.documentElement : options.root ?? document.documentElement;
	if (!root || typeof MutationObserver === "undefined") return () => {};
	const observedRoots = /* @__PURE__ */ new WeakSet();
	let scanConnect = () => {};
	const scanDisconnect = (node) => {
		walkSubtreeNodes(node, (el) => {
			if (!isImplicitViewMessagingHost(el)) return;
			if (!el.isConnected) detachImplicitViewMessaging(el);
		});
	};
	const observer = new MutationObserver((records) => {
		for (const rec of records) {
			rec.addedNodes.forEach(scanConnect);
			rec.removedNodes.forEach(scanDisconnect);
		}
	});
	scanConnect = (node) => {
		if (node.nodeType === Node.ELEMENT_NODE) {
			const host = node;
			if (host.isConnected) processStagedUnifiedMarkers(host);
		}
		walkSubtreeNodes(node, (el) => {
			if (el.shadowRoot) observeMutationRoot(observer, observedRoots, el.shadowRoot);
			if (!el.isConnected || !isImplicitViewMessagingHost(el)) return;
			attachImplicitViewMessaging(el);
		});
	};
	observeMutationRoot(observer, observedRoots, root);
	scanConnect(root);
	return () => {
		observer.disconnect();
		walkSubtreeNodes(root, (el) => {
			if (isImplicitViewMessagingHost(el)) detachImplicitViewMessaging(el);
		});
	};
}
//#endregion
//#region src/shared/routing/core/registry.ts
/**
* View factories usually return custom elements; some legacy modules return a plain
* object implementing `View` (render/lifecycle/id). Accept both for shell compatibility.
*/
function createWebComponentViewAdapter(viewInstance) {
	if (viewInstance instanceof HTMLElement) return viewInstance;
	const legacy = viewInstance;
	if (legacy && typeof legacy.render === "function" && typeof legacy.id === "string") return legacy;
	throw new Error("View factory must return an HTMLElement or a legacy view with render() and id");
}
/** Registry for shell modules plus the single live shell instances cached at runtime. */
var ShellRegistryClass = class {
	shells = /* @__PURE__ */ new Map();
	loadedShells = /* @__PURE__ */ new Map();
	/** COMPAT: `base` resolves to immersive chromeless module (`cw-shell-immersive`). */
	resolveShellRegistrationKey(id) {
		return id === "base" ? "immersive" : id;
	}
	/**
	* Register a shell
	*/
	register(registration) {
		this.shells.set(registration.id, registration);
	}
	/**
	* Get a shell registration
	*/
	get(id) {
		return this.shells.get(this.resolveShellRegistrationKey(id));
	}
	/**
	* Get all registered shells
	*/
	getAll() {
		return Array.from(this.shells.values());
	}
	/**
	* Load and instantiate a shell
	*/
	async load(id, container) {
		const resolved = this.resolveShellRegistrationKey(id);
		const cached = this.loadedShells.get(resolved);
		if (cached) return cached;
		const registration = this.shells.get(resolved);
		if (!registration) throw new Error(`Shell not found: ${resolved}`);
		const module = await registration.loader();
		const factory = module.default || module.createShell;
		if (typeof factory !== "function") throw new Error(`Invalid shell module: ${resolved}`);
		const shell = factory(container);
		this.loadedShells.set(resolved, shell);
		return shell;
	}
	/**
	* Unload a shell
	*/
	unload(id) {
		const resolved = this.resolveShellRegistrationKey(id);
		const shell = this.loadedShells.get(resolved);
		if (shell) {
			shell.unmount();
			this.loadedShells.delete(resolved);
		}
	}
	/**
	* Check if a shell is loaded
	*/
	isLoaded(id) {
		return this.loadedShells.has(this.resolveShellRegistrationKey(id));
	}
	/**
	* Get a loaded shell instance
	*/
	getLoaded(id) {
		return this.loadedShells.get(this.resolveShellRegistrationKey(id));
	}
};
var ShellRegistry = new ShellRegistryClass();
var ViewRegistry = new class ViewRegistryClass {
	/** COMPAT: Modules often default-export a CE class (`CwViewExplorer`) — must be invoked with `new`. */
	static isCustomElementClassCtor(fn) {
		if (typeof fn !== "function") return false;
		try {
			const proto = fn.prototype;
			return proto != null && typeof HTMLElement !== "undefined" && HTMLElement.prototype.isPrototypeOf(proto);
		} catch {
			return false;
		}
	}
	resolveViewFactory(module) {
		const candidates = [
			module?.default,
			module?.createView,
			module?.createAirpadView,
			module?.createWorkCenterView,
			module?.createViewerView,
			module?.createExplorerView,
			module?.createSettingsView,
			module?.createNetworkView,
			module?.createHistoryView,
			module?.createHomeView
		];
		for (const candidate of candidates) {
			if (typeof candidate !== "function") continue;
			if (ViewRegistryClass.isCustomElementClassCtor(candidate)) {
				const Ctor = candidate;
				return ((options) => new Ctor(options));
			}
			return candidate;
		}
		const values = Object.values(module || {});
		for (const value of values) if (typeof value === "function" && value.prototype && typeof value.prototype.render === "function") {
			const ViewClass = value;
			return (options) => new ViewClass(options);
		}
		return null;
	}
	views = /* @__PURE__ */ new Map();
	loadedViews = /* @__PURE__ */ new Map();
	viewReceiveCleanup = /* @__PURE__ */ new Map();
	/**
	* Register a view
	*/
	register(registration) {
		this.views.set(registration.id, registration);
	}
	/**
	* Get a view registration
	*/
	get(id) {
		return this.views.get(id);
	}
	/**
	* Get all registered views
	*/
	getAll() {
		return Array.from(this.views.values());
	}
	/**
	* Load and instantiate a view
	*/
	async load(id, options) {
		const cached = this.loadedViews.get(id);
		if (cached) return cached;
		const registration = this.views.get(id);
		if (!registration) throw new Error(`View not found: ${id}`);
		const module = await registration.loader();
		const factory = this.resolveViewFactory(module);
		if (!factory) throw new Error(`Invalid view module: ${id}`);
		const view = createWebComponentViewAdapter(await factory(options));
		const previousCleanup = this.viewReceiveCleanup.get(id);
		if (previousCleanup) {
			previousCleanup();
			this.viewReceiveCleanup.delete(id);
		}
		this.loadedViews.set(id, view);
		this.viewReceiveCleanup.set(id, attachImplicitViewMessaging(view, {
			destination: String(id),
			componentId: `view:${id}`
		}));
		return view;
	}
	/**
	* Unload a view (clear cache)
	*/
	unload(id) {
		const view = this.loadedViews.get(id);
		if (view?.lifecycle?.onUnmount) view.lifecycle.onUnmount();
		const receiveCleanup = this.viewReceiveCleanup.get(id);
		if (receiveCleanup) {
			receiveCleanup();
			this.viewReceiveCleanup.delete(id);
		}
		this.loadedViews.delete(id);
	}
	/**
	* Check if a view is loaded
	*/
	isLoaded(id) {
		return this.loadedViews.has(id);
	}
	/**
	* Get a loaded view instance
	*/
	getLoaded(id) {
		return this.loadedViews.get(id);
	}
	/**
	* Warm the dynamic import for a view module (no instance, no receive-channel bind).
	* Safe to call from idle prefetch; failures are ignored.
	*/
	prefetchModule(id) {
		const registration = this.views.get(id);
		if (!registration) return;
		registration.loader().catch(() => {});
	}
}();
/** Register the built-in shell modules that the boot/routing layer can request. */
function registerDefaultShells() {
	ShellRegistry.register({
		id: "immersive",
		name: "Immersive",
		description: "Chromeless immersive shell (standalone pages, extensions, embedded); legacy boot id `base` aliases here.",
		loader: () => __vitePreload(() => import("../chunks/src.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]), import.meta.url)
	});
	ShellRegistry.register({
		id: "minimal",
		name: "Minimal",
		description: "Minimal toolbar-based navigation",
		loader: () => __vitePreload(() => import("../chunks/preview.js").then((n) => n.t), __vite__mapDeps([34,2,3,4,1,5,6,7,8,9,23,24,25,10,11,12,13,14,15,16,17,18,19,20,21,22,26,27,28,29,30,31,32,33]), import.meta.url)
	});
	ShellRegistry.register({
		id: "content",
		name: "Content",
		description: "CRX content shell with overlay-focused layering",
		loader: () => __vitePreload(() => import("../chunks/src2.js"), __vite__mapDeps([35,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]), import.meta.url)
	});
	ShellRegistry.register({
		id: "immersive",
		name: "Immersive",
		description: "Chromeless immersive host (extensions / embedded)",
		loader: () => __vitePreload(() => import("../chunks/src.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]), import.meta.url)
	});
	ShellRegistry.register({
		id: "window",
		name: "Window",
		description: "Window-capable shell (multi-view)",
		loader: () => __vitePreload(() => import("../chunks/window.js"), __vite__mapDeps([36,37,3,4,2,5,6,7,1,8,9,38,39,40,41,42,28,23,24,25,17,18,15,16,19,20,21,10,11,12,13,14,22,26,27,29,30,31,32,33,43,44,45,46,47,48,34]), import.meta.url)
	});
	ShellRegistry.register({
		id: "tabbed",
		name: "Tabbed",
		description: "Tabbed window shell",
		loader: () => __vitePreload(() => import("../chunks/tabbed.js"), __vite__mapDeps([49,36,37,3,4,2,5,6,7,1,8,9,38,39,40,41,42,28,23,24,25,17,18,15,16,19,20,21,10,11,12,13,14,22,26,27,29,30,31,32,33,43,44,45,46,47,48,34]), import.meta.url)
	});
	ShellRegistry.register({
		id: "environment",
		name: "Environment",
		description: "Desktop/launcher shell: wallpaper, Speed Dial, taskbar, ui-window",
		loader: () => __vitePreload(() => import("../chunks/environment.js"), __vite__mapDeps([50,37,3,4,2,5,6,7,1,8,9,38,39,40,41,42,28,23,24,25,17,18,15,16,19,20,21,10,11,12,13,14,22,26,27,29,30,31,32,33,43,44,45,46,47,48]), import.meta.url)
	});
}
/** Register the built-in views that are enabled by current feature flags. */
function registerDefaultViews() {
	ViewRegistry.register({
		id: "viewer",
		name: "Viewer",
		icon: "eye",
		loader: () => __vitePreload(() => import("../chunks/src6.js"), __vite__mapDeps([51,4,2,3,52,1,5,6,7,8,9,53,21,54,40,11,12,13,14,15,16,17,18,19,20,22,55,23,24,25,56,46,47,48,57,58,59]), import.meta.url)
	});
	ViewRegistry.register({
		id: "workcenter",
		name: "Work Center",
		icon: "lightning",
		loader: () => __vitePreload(() => import("../chunks/src7.js"), __vite__mapDeps([60,4,2,5,6,7,1,3,8,9,39,40,41,42,28,23,24,25,44,38,43,45,46,47,48,61,11,12,13,14,15,16,17,18,19,20,21,22,29,53,54,62,56,63,58,59,64,65,66,30,67,68,69,70,71,72]), import.meta.url)
	});
	ViewRegistry.register({
		id: "settings",
		name: "Settings",
		icon: "gear",
		loader: () => __vitePreload(() => import("../shells/boot-history-base.js"), __vite__mapDeps([73,4,2,3,5,6,7,1,8,9,11,12,13,14,15,16,17,18,19,20,21,22,39,40,41,42,28,23,24,25,53,54,74,75,76,77,55,26,27,29,30,31,44,38,43,45,46,47,48,78,79,80,65,64,81,67,82,83,84,85,86]), import.meta.url)
	});
	ViewRegistry.register({
		id: "network",
		name: "Network",
		icon: "wifi-high",
		loader: () => __vitePreload(() => import("../chunks/src5.js"), __vite__mapDeps([87,5,6,7,1,2,3,4,8,9,11,12,13,14,15,16,17,18,19,20,21,22,86,88,85,74,75,76,54,77]), import.meta.url)
	});
	ViewRegistry.register({
		id: "history",
		name: "History",
		icon: "clock-counter-clockwise",
		loader: () => __vitePreload(() => import("../chunks/src4.js"), __vite__mapDeps([89,5,6,7,1,2,3,4,8,9,55,90]), import.meta.url)
	});
	ViewRegistry.register({
		id: "explorer",
		name: "Explorer",
		icon: "folder",
		loader: () => __vitePreload(() => import("./veela.js"), __vite__mapDeps([91,4,2,3,52,1,5,6,7,8,9,53,21,54,40,41,11,12,13,14,15,16,17,18,19,20,22,27,28,29,30,39,42,23,24,25,55]), import.meta.url)
	});
	ViewRegistry.register({
		id: "editor",
		name: "Editor",
		icon: "pencil",
		loader: () => __vitePreload(() => import("../chunks/src3.js"), __vite__mapDeps([92,4,2,5,6,7,1,3,8,9,57]), import.meta.url)
	});
	ViewRegistry.register({
		id: "home",
		name: "Home",
		icon: "house",
		loader: () => __vitePreload(() => import("./veela5.js"), __vite__mapDeps([93,3,4,2,5,6,7,1,8,9,41,40,38,39,42,28,23,24,25,55,43,45,94]), import.meta.url)
	});
	ViewRegistry.register({
		id: "print",
		name: "Print",
		icon: "printer",
		loader: () => __vitePreload(() => import("../chunks/src6.js"), __vite__mapDeps([51,4,2,3,52,1,5,6,7,8,9,53,21,54,40,11,12,13,14,15,16,17,18,19,20,22,55,23,24,25,56,46,47,48,57,58,59]), import.meta.url)
	});
}
var defaultTheme = {
	id: "auto",
	name: "Auto",
	colorScheme: "auto"
};
var lightTheme = {
	id: "light",
	name: "Light",
	colorScheme: "light"
};
var darkTheme = {
	id: "dark",
	name: "Dark",
	colorScheme: "dark"
};
/**
* Populate both registries during boot before any shell or view is resolved.
*/
function initializeRegistries() {
	registerDefaultShells();
	registerDefaultViews();
}
//#endregion
export { initializeRegistries as a, ingressStampWasSuperseded as c, DEFAULT_VIEW_ID as d, ENABLED_VIEW_IDS as f, defaultTheme as i, serviceChannels as l, pickEnabledView as m, ViewRegistry as n, lightTheme as o, isEnabledView as p, darkTheme as r, startImplicitViewMessagingBridge as s, ShellRegistry as t, requestOpenView as u };
