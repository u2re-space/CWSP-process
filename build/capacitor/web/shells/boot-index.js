const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/crx-control-session.js","../com/app.js","../chunks/rolldown-runtime.js","../chunks/src2.js","../chunks/shells.js","./boot-history-base.js","./preference.js","./environment-environment-overlay.js","../chunks/preview.js","../chunks/src3.js","../chunks/window.js","../chunks/environment-shell.js","./environment-index.js","./environment-components-calendar-CalendarFlyout.js","./environment-components-settings-QuickSettings.js","./environment-components-statusbar-capacitor-native-safe-area.js","./environment-components-app-menu-AppMenu.js","./environment-components-taskbar-element-TaskBar.js","./environment-components-explorer-ContextMenu.js","./environment-components-wallpaper.js","./environment-scss-main.scss_inline.js","../chunks/tabbed.js","../chunks/environment.js","../chunks/src9.js","../views/viewer.js","../com/service.js","../vendor/dompurify.js","../chunks/src10.js","../chunks/WorkCenter.js","../vendor/marked.js","../vendor/katex.js","../vendor/marked-katex-extension.js","../chunks/LogSanitizer.js","../chunks/ShareTargetGateway.js","../chunks/utils.js","../chunks/CustomInstructions.js","../chunks/entities.js","../chunks/AIResponseParser.js","../vendor/@toon-format_toon.js","../chunks/unified.js","../chunks/RuntimeSettings.js","../chunks/WorkCenterState.js","../chunks/WorkCenterDataProcessing.js","../chunks/src8.js","../chunks/storage.js","../chunks/capacitor-permissions.js","../chunks/capacitor-settings-permissions.js","../chunks/admin-doors.js","../chunks/src7.js","../chunks/frontend-debug-capture.js","../chunks/src5.js","../chunks/transfer-history-runtime.js","../chunks/src.js","../chunks/src4.js","../chunks/src6.js","../chunks/launcher-state.js","../chunks/crx-control-session2.js","../chunks/sw-handling.js","../chunks/sku-ingress.js","../chunks/ViewTransferRouting.js"])))=>i.map(i=>d[i]);
import { n as __exportAll } from "../chunks/rolldown-runtime.js";
import { c as isCwspNativeHost$1, h as shouldHandoffViewToSibling, m as readCwspSku$1, n as SKU_HUB_PATHS$1, p as publicHrefForView, s as inferCwspSkuFromLocation$1, u as isViewLocalToSurface$1 } from "./boot-history-base.js";
import { Bn as Q, D as initializeAppCanvasLayer, I as __decorate, P as UIElement, Un as fixOrientToScreen, Wt as writeFileSmart, _n as saveUIState, ar as safe, cn as createProtocolEnvelope, er as observe, gn as makeUIState, ir as makeObjectAssignable, jn as defineElement, ln as isProtocolEnvelope, on as createServiceChannelManager, or as loadAsAdopted, rr as stringRef, sn as getUnifiedMessaging$2, un as normalizeProtocolEnvelope, ur as __vitePreload, vn as JSOX } from "../com/app.js";
import { t as withTimeout } from "../fest/core.js";
import { r as validateIngressBeforeViewHandle } from "../com/service.js";
import { n as core_default, t as scss_default } from "../fest/veela.js";
//#region src/shared/other/utils/Runtime.ts
/**
* Runtime-safe helpers for mixed environments
* (window, service worker, worker, extension contexts).
*/
var getRuntimeLocation = () => globalThis?.location;
var getRuntimeLocationOrigin = () => getRuntimeLocation()?.origin;
var canParseURL = (value, base) => {
	const source = value?.trim?.() || "";
	if (!source) return false;
	const fallbackBase = base ?? getRuntimeLocationOrigin();
	if (typeof URL?.canParse === "function") return URL.canParse(source, fallbackBase);
	try {
		new URL(source, fallbackBase);
		return true;
	} catch {
		return false;
	}
};
var scheduleFrame = (cb) => {
	if (typeof globalThis?.requestAnimationFrame === "function") {
		globalThis.requestAnimationFrame(cb);
		return;
	}
	globalThis.setTimeout(cb, 0);
};
//#endregion
//#region src/shared/store/StateStorage.ts
/**
* Persistent UI/workspace state for the home speed-dial surface.
*
* This module owns the default shortcut catalog, conversion between persisted
* storage records and reactive UI state, and the metadata registry that keeps
* richer shortcut configuration separate from the compact visible item list.
*/
var STORAGE_KEY = "cw::workspace::speed-dial";
var META_STORAGE_KEY = `${STORAGE_KEY}::meta`;
var fallbackClone = (value) => {
	if (typeof structuredClone === "function") return structuredClone(safe(value));
	return JSOX.parse(JSOX.stringify(value));
};
var generateItemId = () => {
	if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
	return `sd-${Date.now().toString(36)}-${Math.floor(Math.random() * 1e3)}`;
};
var EXTERNAL_SHORTCUTS = [];
var DEFAULT_SPEED_DIAL_DATA = [...EXTERNAL_SHORTCUTS];
var splitDefaultEntries = (entries) => {
	const records = [];
	const metaEntries = [];
	entries.forEach((entry) => {
		const { meta, ...record } = entry;
		records.push(record);
		const normalizedMeta = {
			action: entry.action,
			...meta || {}
		};
		metaEntries.push([entry.id, normalizedMeta]);
	});
	return {
		records,
		metaEntries
	};
};
var { records: DEFAULT_SPEED_DIAL_RECORDS, metaEntries: DEFAULT_META_ENTRIES } = splitDefaultEntries(DEFAULT_SPEED_DIAL_DATA);
var legacyMetaBuffer = [];
/** Same Core Rail filter as fl.ui launcher-state — CRX chrome.storage must never rehydrate these. */
var CORE_RAIL_GRID_IDS = /* @__PURE__ */ new Set([
	"shortcut-explorer",
	"shortcut-settings",
	"shortcut-viewer",
	"shortcut-markdown",
	"explorer",
	"settings",
	"viewer",
	"markdown"
]);
var CORE_RAIL_GRID_VIEWS = /* @__PURE__ */ new Set([
	"explorer",
	"settings",
	"viewer",
	"markdown",
	"reader"
]);
var CORE_RAIL_GRID_LABELS = /* @__PURE__ */ new Set([
	"explorer",
	"settings",
	"markdown",
	"viewer"
]);
var isCoreRailPersistedEntry = (entry) => {
	const id = String(entry?.id || "").trim().toLowerCase();
	if (CORE_RAIL_GRID_IDS.has(id)) return true;
	const action = String(entry?.action || entry?.meta?.action || "open-view").trim().toLowerCase();
	if (action && action !== "open-view") return false;
	const view = String(entry?.meta?.view || "").trim().toLowerCase();
	if (view && CORE_RAIL_GRID_VIEWS.has(view)) return true;
	const label = String(entry?.label || "").trim().toLowerCase();
	return Boolean(label) && CORE_RAIL_GRID_LABELS.has(label);
};
var ensureCell = (cell) => {
	if (cell && Array.isArray(cell) && cell.length >= 2) return observe([Number(cell[0]) || 0, Number(cell[1]) || 0]);
	return observe([0, 0]);
};
var createMetaState = (meta = {}) => {
	return makeObjectAssignable(observe({
		action: meta.action || "open-view",
		view: meta.view || "",
		href: meta.href || "",
		description: meta.description || "",
		entityType: meta.entityType || "",
		tags: Array.isArray(meta.tags) ? [...meta.tags] : [],
		...meta
	}));
};
var registryFromEntries = (entries) => {
	const registry = /* @__PURE__ */ new Map();
	for (const [id, meta] of entries) registry.set(id, createMetaState(meta));
	return registry;
};
var normalizeMetaEntries = (raw) => {
	if (!raw) return [];
	if (raw instanceof Map) return Array.from(raw.entries());
	if (Array.isArray(raw)) return raw.map((entry) => {
		if (entry && typeof entry === "object" && "id" in entry) return [entry.id, entry.meta || entry];
		return null;
	}).filter(Boolean);
	if (typeof raw === "object") return Object.entries(raw);
	return [];
};
var packMetaRegistry = (registry) => {
	const payload = {};
	registry?.forEach((meta, id) => {
		payload[id] = fallbackClone(meta ?? {});
	});
	return payload;
};
var createInitialMetaRegistry = () => registryFromEntries(DEFAULT_META_ENTRIES);
var unpackMetaRegistry = (raw) => {
	const entries = normalizeMetaEntries(raw);
	return registryFromEntries(entries.length ? entries : DEFAULT_META_ENTRIES);
};
var unwrapRef = (value, fallback) => {
	if (value && typeof value === "object" && "value" in value) return value.value ?? fallback;
	return value ?? fallback;
};
var serializeItemState = (item) => {
	return {
		id: item.id,
		cell: observe([item.cell?.[0] ?? 0, item.cell?.[1] ?? 0]),
		icon: unwrapRef(item.icon, "sparkle"),
		label: unwrapRef(item.label, "Shortcut"),
		action: item.action
	};
};
var createStatefulItem = (config) => {
	return observe({
		id: config.id || generateItemId(),
		cell: observe(ensureCell(config.cell)),
		icon: stringRef(config.icon || "sparkle"),
		label: stringRef(config.label || "Shortcut"),
		action: config.action || "open-view"
	});
};
var createInitialState = () => observe(DEFAULT_SPEED_DIAL_RECORDS.map(createStatefulItem));
var unpackState = (raw) => {
	const records = (Array.isArray(raw) && raw.length ? raw : DEFAULT_SPEED_DIAL_DATA).filter((entry) => !isCoreRailPersistedEntry(entry)).map((entry) => {
		const { meta, ...record } = entry;
		if (meta) legacyMetaBuffer.push([entry.id, {
			action: entry.action,
			...meta
		}]);
		else legacyMetaBuffer.push([entry.id, { action: entry.action }]);
		return record;
	});
	return observe(records.map(createStatefulItem));
};
var packState = (collection) => collection.filter((item) => {
	const id = String(item?.id || "").trim().toLowerCase();
	if (CORE_RAIL_GRID_IDS.has(id)) return false;
	const label = item?.label && typeof item.label === "object" && "value" in item.label ? String(item.label.value || "").trim().toLowerCase() : String(item?.label || "").trim().toLowerCase();
	if (label && CORE_RAIL_GRID_LABELS.has(label)) {
		const action = String(item?.action || "open-view").trim().toLowerCase();
		if (!action || action === "open-view") return false;
	}
	return true;
}).map(serializeItemState);
var SPEED_DIAL_ITEMS_BOOT = "__CWSP_SPEED_DIAL_ITEMS_V1__";
var SPEED_DIAL_META_BOOT = "__CWSP_SPEED_DIAL_META_V1__";
var bootSpeedDialMeta = () => {
	const g = globalThis;
	if (g[SPEED_DIAL_META_BOOT]) return g[SPEED_DIAL_META_BOOT];
	const state = makeUIState(META_STORAGE_KEY, createInitialMetaRegistry, unpackMetaRegistry, packMetaRegistry);
	g[SPEED_DIAL_META_BOOT] = state;
	return state;
};
var bootSpeedDialItems = () => {
	const g = globalThis;
	if (g[SPEED_DIAL_ITEMS_BOOT]) return g[SPEED_DIAL_ITEMS_BOOT];
	const state = makeUIState(STORAGE_KEY, createInitialState, unpackState, packState);
	g[SPEED_DIAL_ITEMS_BOOT] = state;
	return state;
};
var speedDialMeta = bootSpeedDialMeta();
var speedDialItems = bootSpeedDialItems();
var persistSpeedDialItems = () => {
	try {
		saveUIState(STORAGE_KEY);
		return;
	} catch {}
	speedDialItems?.$save?.();
};
var persistSpeedDialMeta = () => {
	try {
		saveUIState(META_STORAGE_KEY);
		return;
	} catch {}
	speedDialMeta?.$save?.();
};
var getSpeedDialMeta = (id) => {
	if (!id) return null;
	return speedDialMeta?.get?.(id) ?? null;
};
var ensureSpeedDialMeta = (id, defaults = {}) => {
	let meta = speedDialMeta?.get?.(id);
	if (!meta) {
		meta = createMetaState(defaults);
		speedDialMeta?.set?.(id, meta);
		persistSpeedDialMeta();
	}
	if (defaults?.action && meta.action !== defaults.action) meta.action = defaults.action;
	return meta;
};
var syncMetaActionFromItem = (item) => {
	if (!item) return false;
	const desiredAction = item.action || "open-view";
	const meta = ensureSpeedDialMeta(item.id, { action: desiredAction });
	if (meta.action !== desiredAction) {
		meta.action = desiredAction;
		return true;
	}
	return false;
};
var syncMetaActionsForAllItems = () => {
	let changed = false;
	speedDialItems?.forEach?.((item) => {
		if (syncMetaActionFromItem(item)) changed = true;
	});
	if (changed) persistSpeedDialMeta();
};
var flushLegacyMetaBuffer = () => {
	if (!legacyMetaBuffer.length) return;
	legacyMetaBuffer.forEach(([id, meta]) => {
		const target = ensureSpeedDialMeta(id, meta);
		Object.assign(target, meta);
	});
	legacyMetaBuffer.length = 0;
	persistSpeedDialMeta();
};
flushLegacyMetaBuffer();
syncMetaActionsForAllItems();
var ensureExternalShortcuts = () => {
	let changed = false;
	EXTERNAL_SHORTCUTS.forEach((shortcut) => {
		if (!speedDialItems?.find?.((item) => item?.id === shortcut.id)) {
			const item = createStatefulItem(shortcut);
			if (shortcut.label && item.label && typeof item.label === "object" && "value" in item.label) item.label.value = shortcut.label;
			if (shortcut.icon && item.icon && typeof item.icon === "object" && "value" in item.icon) item.icon.value = shortcut.icon;
			speedDialItems.push(observe(item));
			ensureSpeedDialMeta(item.id, shortcut.meta);
			changed = true;
		} else {
			const currentMeta = getSpeedDialMeta(shortcut.id);
			if (shortcut.meta && currentMeta) {
				if (shortcut.meta.href !== currentMeta.href) {
					currentMeta.href = shortcut.meta.href;
					changed = true;
				}
				if (shortcut.meta.description !== currentMeta.description) {
					currentMeta.description = shortcut.meta.description;
					changed = true;
				}
			} else if (shortcut.meta && !currentMeta) {
				ensureSpeedDialMeta(shortcut.id, shortcut.meta);
				changed = true;
			}
		}
	});
	if (changed) {
		persistSpeedDialItems();
		persistSpeedDialMeta();
	}
};
ensureExternalShortcuts();
var createEmptySpeedDialItem = (cell = observe([0, 0])) => {
	const item = createStatefulItem({
		id: generateItemId(),
		cell,
		icon: "sparkle",
		label: "New shortcut",
		action: "open-link"
	});
	ensureSpeedDialMeta(item.id, {
		action: item.action,
		href: "",
		description: ""
	});
	return item;
};
var addSpeedDialItem = (item) => {
	speedDialItems?.push?.(observe(item));
	const metaChanged = syncMetaActionFromItem(item);
	persistSpeedDialItems();
	if (metaChanged) persistSpeedDialMeta();
	return item;
};
makeUIState("cw::workspace::wallpaper", () => observe({
	src: "/assets/wallpaper.jpg",
	opacity: 1,
	blur: 0
}), (raw) => observe(raw || {
	src: "/assets/wallpaper.jpg",
	opacity: 1,
	blur: 0
}), (state) => ({ ...state }));
var gridLayoutState = makeUIState("cw::workspace::grid-layout", () => observe({
	columns: 4,
	rows: 8,
	shape: "square"
}), (raw) => observe(raw || {
	columns: 4,
	rows: 8,
	shape: "square"
}), (state) => ({ ...state }));
var persistGridLayout = () => gridLayoutState?.$save?.();
var applyGridSettings = (settings) => {
	const gridConfig = settings?.grid || gridLayoutState;
	const columns = gridConfig?.columns ?? 4;
	const rows = gridConfig?.rows ?? 8;
	const shape = gridConfig?.shape ?? "square";
	if (gridLayoutState) {
		gridLayoutState.columns = columns;
		gridLayoutState.rows = rows;
		gridLayoutState.shape = shape;
		persistGridLayout();
	}
	if (typeof document === "undefined") return;
	document.querySelectorAll(".speed-dial-grid").forEach((grid) => {
		const el = grid;
		el.dataset.gridColumns = String(columns);
		el.dataset.gridRows = String(rows);
		el.dataset.gridShape = shape;
	});
	document.documentElement.dataset.gridColumns = String(columns);
	document.documentElement.dataset.gridRows = String(rows);
	document.documentElement.dataset.gridShape = shape;
};
if (typeof globalThis !== "undefined" && typeof document !== "undefined") scheduleFrame(() => applyGridSettings());
//#endregion
//#region src/shared/other/config/settings-host.ts
var SETTINGS_HOSTS$1 = [
	"capacitor",
	"crx",
	"pwa",
	"web"
];
var isCrxHost$1 = () => {
	try {
		const proto = String(globalThis.location?.protocol || "").toLowerCase();
		if (proto === "chrome-extension:" || proto === "moz-extension:") return true;
		return Boolean(globalThis.chrome?.runtime?.id);
	} catch {
		return false;
	}
};
var isPwaStandalone$1 = () => {
	try {
		if (String(document.documentElement?.dataset?.cwspSurface || "").toLowerCase().includes("pwa")) return true;
		const standalone = globalThis.matchMedia?.("(display-mode: standalone)").matches || globalThis.navigator.standalone === true;
		return Boolean(standalone);
	} catch {
		return false;
	}
};
/**
* INVARIANT: Capacitor wins over standalone (WebView is also standalone).
* CRX wins over PWA. Web and PWA on the same origin keep different slices.
*/
var detectSettingsHost$1 = () => {
	if (isCwspNativeHost$1()) return "capacitor";
	if (isCrxHost$1()) return "crx";
	if (isPwaStandalone$1()) return "pwa";
	return "web";
};
//#endregion
//#region src/shared/other/config/open-policy.ts
/**
* What to do with a file or payload, per surface / channel / kind.
* INVARIANT: `ask` keeps the current SKU / content-type router.
* Explorer: Web uses `channels`/`kinds`/`placement`. Capacitor uses `nativeOpen`/`nativeKinds` only.
* Host slices live in `openPolicyByHost` (`settings-host.ts`).
*/
var open_policy_exports = /* @__PURE__ */ __exportAll({
	DEFAULT_OPEN_POLICY: () => DEFAULT_OPEN_POLICY$1,
	OPEN_CHANNELS: () => OPEN_CHANNELS$1,
	OPEN_KINDS: () => OPEN_KINDS$1,
	OPEN_PLACEMENTS: () => OPEN_PLACEMENTS$1,
	OPEN_SINKS: () => OPEN_SINKS$1,
	OPEN_SURFACES: () => OPEN_SURFACES$1,
	adaptExplorerSinkForNative: () => adaptExplorerSinkForNative,
	classifyOpenKind: () => classifyOpenKind,
	classifyOpenKindFromName: () => classifyOpenKindFromName,
	classifyOpenKindFromPayload: () => classifyOpenKindFromPayload,
	inferIngressChannels: () => inferIngressChannels,
	looksLikePreviewableBinary: () => looksLikePreviewableBinary,
	mergeOpenPolicy: () => mergeOpenPolicy$1,
	mergeOpenPolicyByHost: () => mergeOpenPolicyByHost$1,
	normalizeOpenChannel: () => normalizeOpenChannel,
	normalizeOpenPlacement: () => normalizeOpenPlacement$1,
	normalizeOpenSink: () => normalizeOpenSink$1,
	normalizeOpenSurface: () => normalizeOpenSurface,
	peekOpenPolicy: () => peekOpenPolicy,
	rememberOpenPolicyFromSettings: () => rememberOpenPolicyFromSettings$1,
	resolveExplorerOpenSink: () => resolveExplorerOpenSink,
	resolveHostOpenPolicy: () => resolveHostOpenPolicy$1,
	resolveOpenPlacement: () => resolveOpenPlacement,
	resolveOpenPolicy: () => resolveOpenPolicy,
	sinkToAction: () => sinkToAction,
	sinkToDestination: () => sinkToDestination,
	sinkToOpenLinkTarget: () => sinkToOpenLinkTarget,
	skuForOpenSink: () => skuForOpenSink,
	stampHostOpenPolicy: () => stampHostOpenPolicy,
	surfaceForSku: () => surfaceForSku,
	viewIdForOpenSink: () => viewIdForOpenSink
});
var OPEN_KINDS$1 = [
	"markdown",
	"text",
	"document",
	"image",
	"url",
	"other"
];
var OPEN_SINKS$1 = [
	"ask",
	"display",
	"viewer",
	"document",
	"explorer",
	"workcenter",
	"transfer",
	"wallpaper",
	"external",
	"system"
];
var OPEN_CHANNELS$1 = [
	"open",
	"dblclick",
	"share-target",
	"launch-queue",
	"snip",
	"capacitor"
];
var OPEN_SURFACES$1 = [
	"viewer",
	"explorer",
	"shell",
	"crx",
	"process",
	"transfer"
];
/** How Explorer presents markdown/images in the browser (not Capacitor). */
var OPEN_PLACEMENTS$1 = [
	"inline",
	"native-window",
	"new-tab"
];
new Set(OPEN_KINDS$1);
var SINK_SET$1 = new Set(OPEN_SINKS$1);
var CHANNEL_SET$1 = new Set(OPEN_CHANNELS$1);
var SURFACE_SET$1 = new Set(OPEN_SURFACES$1);
var IMAGE_EXT = /\.(?:png|jpe?g|gif|webp|bmp|svg|avif|ico|jxl|tiff?|heic|heif)(?:$|[?#])/i;
var MARKDOWN_EXT = /\.(?:md|markdown|mdown|mkd|mkdn|mdtxt|mdtext)(?:$|[?#])/i;
var TEXT_EXT = /\.(?:txt|text|html|htm|css|scss|sass|less|json|csv|xml|yaml|yml|log|ini|env|toml|graphql|tsx?|jsx?|mts|cts|cjs|mjs|vue|svelte|rst)(?:$|[?#])/i;
var DOCUMENT_EXT = /\.(?:pdf|docx?|odt|rtf|pages|epub|pptx?|xlsx?|ods|odp)(?:$|[?#])/i;
var DEFAULT_OPEN_POLICY$1 = {
	viewer: {
		channels: {
			open: "display",
			"share-target": "display",
			"launch-queue": "display",
			capacitor: "display"
		},
		kinds: {
			markdown: "display",
			text: "display",
			document: "display",
			image: "display",
			url: "display",
			other: "display"
		}
	},
	explorer: {
		channels: {
			open: "viewer",
			dblclick: "viewer",
			"share-target": "viewer",
			"launch-queue": "viewer",
			capacitor: "document"
		},
		placement: "inline",
		kinds: {
			markdown: "ask",
			text: "ask",
			document: "ask",
			image: "ask",
			url: "ask",
			other: "ask"
		},
		nativeOpen: "document",
		nativeKinds: {
			markdown: "ask",
			text: "ask",
			document: "ask",
			image: "ask",
			url: "ask",
			other: "ask"
		}
	},
	shell: {
		channels: {
			open: "ask",
			"share-target": "ask",
			"launch-queue": "ask",
			capacitor: "ask"
		},
		kinds: {
			markdown: "ask",
			text: "ask",
			document: "ask",
			image: "wallpaper",
			url: "ask",
			other: "ask"
		}
	},
	crx: {
		channels: {
			open: "ask",
			snip: "workcenter",
			"share-target": "ask"
		},
		kinds: {
			markdown: "viewer",
			text: "viewer",
			document: "viewer",
			image: "workcenter",
			url: "workcenter",
			other: "workcenter"
		}
	},
	process: {
		channels: {
			open: "workcenter",
			"share-target": "workcenter",
			"launch-queue": "workcenter",
			capacitor: "workcenter"
		},
		kinds: {
			markdown: "workcenter",
			text: "workcenter",
			document: "workcenter",
			image: "workcenter",
			url: "workcenter",
			other: "workcenter"
		}
	},
	transfer: {
		channels: {
			open: "ask",
			"share-target": "ask",
			"launch-queue": "ask",
			capacitor: "ask"
		},
		kinds: {
			markdown: "ask",
			text: "ask",
			document: "ask",
			image: "ask",
			url: "ask",
			other: "ask"
		}
	}
};
var cachedPolicy$1 = DEFAULT_OPEN_POLICY$1;
var normalizeOpenSink$1 = (raw, fallback = "ask") => {
	const v = String(raw || "").trim().toLowerCase();
	if (!v) return fallback;
	if (v === "markdown" || v === "in-shell" || v === "in-app") return "viewer";
	if (v === "document" || v === "cwsp-document" || v === "md") return "document";
	if (v === "process" || v === "cwsp-process") return "workcenter";
	if (v === "transfer" || v === "cwsp" || v === "cwsp-transfer" || v === "network") return "transfer";
	if (v === "wallpaper" || v === "обои" || v === "backdrop" || v === "desktop") return "wallpaper";
	if (v === "android" || v === "chooser" || v === "open-with") return "system";
	if (v === "browser" || v === "new-tab" || v === "tab") return "external";
	return SINK_SET$1.has(v) ? v : fallback;
};
var normalizeOpenPlacement$1 = (raw, fallback = "inline") => {
	const v = String(raw || "").trim().toLowerCase();
	if (!v) return fallback;
	if (v === "in-shell" || v === "env" || v === "shell" || v === "iframe") return "inline";
	if (v === "native" || v === "popup" || v === "app-window" || v === "detached" || v === "separate") return "native-window";
	if (v === "tab" || v === "browser" || v === "as-is" || v === "browser-tab") return "new-tab";
	return OPEN_PLACEMENTS$1.includes(v) ? v : fallback;
};
var normalizeOpenChannel = (raw) => {
	const v = String(raw || "").trim().toLowerCase();
	if (v === "dbl-click" || v === "double-click") return "dblclick";
	if (v === "share" || v === "sharetarget") return "share-target";
	if (v === "launch" || v === "launchqueue") return "launch-queue";
	return CHANNEL_SET$1.has(v) ? v : "";
};
var normalizeOpenSurface = (raw) => {
	const v = String(raw || "").trim().toLowerCase();
	if (v === "document" || v === "markdown") return "viewer";
	if (v === "launcher" || v === "environment" || v === "home") return "shell";
	return SURFACE_SET$1.has(v) ? v : "";
};
var normalizeKinds$1 = (raw) => {
	const out = {};
	if (!raw || typeof raw !== "object") return out;
	for (const key of OPEN_KINDS$1) {
		const sink = raw[key];
		if (sink == null || sink === "") continue;
		out[key] = normalizeOpenSink$1(sink);
	}
	return out;
};
var normalizeChannels$1 = (raw) => {
	const out = {};
	if (!raw || typeof raw !== "object") return out;
	for (const key of OPEN_CHANNELS$1) {
		const sink = raw[key];
		if (sink == null || sink === "") continue;
		out[key] = normalizeOpenSink$1(sink);
	}
	return out;
};
var mergeOpenPolicy$1 = (...parts) => {
	const out = {};
	for (const surface of OPEN_SURFACES$1) {
		const base = DEFAULT_OPEN_POLICY$1[surface] || {};
		let channels = { ...base.channels || {} };
		let kinds = { ...base.kinds || {} };
		let placement = normalizeOpenPlacement$1(base.placement, "inline");
		let nativeOpen = normalizeOpenSink$1(base.nativeOpen, surface === "explorer" ? "document" : "ask");
		let nativeKinds = { ...base.nativeKinds || {} };
		let nativeOpenSaved = false;
		for (const part of parts) {
			const src = part?.[surface];
			if (!src) continue;
			channels = {
				...channels,
				...normalizeChannels$1(src.channels)
			};
			kinds = {
				...kinds,
				...normalizeKinds$1(src.kinds)
			};
			if (src.placement != null && src.placement !== "") placement = normalizeOpenPlacement$1(src.placement, placement);
			if (src.nativeOpen != null && src.nativeOpen !== "") {
				nativeOpenSaved = true;
				nativeOpen = normalizeOpenSink$1(src.nativeOpen, nativeOpen);
			}
			if (src.nativeKinds) nativeKinds = {
				...nativeKinds,
				...normalizeKinds$1(src.nativeKinds)
			};
		}
		if (!nativeOpenSaved && surface === "explorer") {
			const legacy = channels.open;
			if (legacy === "system" || legacy === "transfer" || legacy === "workcenter") nativeOpen = legacy;
		}
		out[surface] = surface === "explorer" ? {
			channels,
			kinds,
			placement,
			nativeOpen,
			nativeKinds
		} : {
			channels,
			kinds,
			placement
		};
	}
	return out;
};
var mergeOpenPolicyByHost$1 = (...parts) => {
	const out = {};
	for (const host of SETTINGS_HOSTS$1) {
		const slices = parts.map((part) => part?.[host]).filter((p) => Boolean(p));
		if (slices.length) out[host] = mergeOpenPolicy$1(...slices);
	}
	return out;
};
/** Host slice wins over a leftover flat `openPolicy` so Capacitor cannot clobber Web. */
var resolveHostOpenPolicy$1 = (settings) => {
	const host = detectSettingsHost$1();
	return mergeOpenPolicy$1(settings?.openPolicy, settings?.openPolicyByHost?.[host]);
};
var stampHostOpenPolicy = (settings) => {
	const host = detectSettingsHost$1();
	const next = mergeOpenPolicy$1(settings.openPolicy);
	settings.openPolicy = next;
	settings.openPolicyByHost = {
		...settings.openPolicyByHost || {},
		[host]: next
	};
	return next;
};
var rememberOpenPolicyFromSettings$1 = (settings) => {
	cachedPolicy$1 = resolveHostOpenPolicy$1(settings);
	return cachedPolicy$1;
};
var peekOpenPolicy = () => cachedPolicy$1;
var surfaceForSku = (sku) => {
	const v = String(sku || "").trim().toLowerCase();
	if (v === "document") return "viewer";
	if (v === "explorer") return "explorer";
	if (v === "launcher") return "shell";
	if (v === "process") return "process";
	if (v === "transfer") return "transfer";
	if (v === "crx") return "crx";
	return "";
};
var basenameOf = (raw) => {
	const t = String(raw || "").trim().replace(/\\/g, "/");
	const noQuery = t.split(/[?#]/)[0] || t;
	const cut = noQuery.lastIndexOf("/");
	return (cut >= 0 ? noQuery.slice(cut + 1) : noQuery).trim();
};
var classifyOpenKindFromName = (raw, mime = "") => {
	const name = basenameOf(raw);
	const type = String(mime || "").toLowerCase();
	if (type.startsWith("image/") || IMAGE_EXT.test(name)) return "image";
	if (type === "text/markdown" || type.includes("markdown") || MARKDOWN_EXT.test(name)) return "markdown";
	if (type === "application/pdf" || type.includes("officedocument") || type.includes("msword") || type.includes("opendocument") || DOCUMENT_EXT.test(name)) return "document";
	if (type.startsWith("text/") || type === "application/json" || type === "application/xml" || type === "application/javascript" || type === "application/typescript" || TEXT_EXT.test(name)) return "text";
	return "other";
};
var classifyOpenKind = (file) => {
	if (!file) return "other";
	if (typeof file === "string") return classifyOpenKindFromName(file);
	return classifyOpenKindFromName(String(file.name || ""), String(file.type || ""));
};
/** Image or PDF — viewer can paint these without treating bytes as markdown. */
var looksLikePreviewableBinary = (file) => {
	if (!file) return false;
	if (classifyOpenKind(file) === "image") return true;
	const name = String(file.name || "");
	return String(file.type || "").toLowerCase() === "application/pdf" || /\.pdf(?:$|[?#])/i.test(name);
};
var classifyOpenKindFromPayload = (payload) => {
	const files = Array.isArray(payload.files) ? payload.files : [];
	if (files[0]) return classifyOpenKind(files[0]);
	const hinted = String(payload.hint?.contentType || "").toLowerCase();
	if (hinted === "markdown" || hinted === "text" || hinted === "image" || hinted === "url") return hinted;
	const name = String(payload.hint?.filename || payload.title || "").trim();
	if (name && (!payload.url || Number(payload.fileCount || 0) > 0)) {
		const fromName = classifyOpenKindFromName(name);
		if (fromName !== "other") return fromName;
	}
	const url = String(payload.url || "").trim();
	if (url) {
		const fromUrl = classifyOpenKindFromName(url);
		return fromUrl === "other" ? "url" : fromUrl;
	}
	if (String(payload.text || "").trim()) return "text";
	return "other";
};
var firstNonAsk = (...sinks) => {
	for (const sink of sinks) if (sink && sink !== "ask") return sink;
	return "";
};
/**
* Explorer: channel (Open / click) wins, kind is an override only when channel is `ask`.
* Other surfaces: kind override → first non-`ask` channel.
*/
var resolveOpenPolicy = (policy, surface, kind, channels = "open") => {
	const surf = normalizeOpenSurface(surface);
	if (!surf) return "ask";
	const block = mergeOpenPolicy$1(policy)[surf] || {};
	const kinds = block.kinds || {};
	const chans = block.channels || {};
	const kindSink = kind && kinds[kind] ? kinds[kind] : void 0;
	const channelSinks = (Array.isArray(channels) ? channels : [channels]).map((ch) => normalizeOpenChannel(ch)).filter((ch) => Boolean(ch)).map((ch) => chans[ch]);
	if (surf === "explorer") return firstNonAsk(...channelSinks, kindSink) || kindSink || channelSinks[0] || "ask";
	return firstNonAsk(kindSink, ...channelSinks) || kindSink || channelSinks[0] || "ask";
};
/**
* Capacitor Explorer has no inline viewer.
* `document` → CWSP-document. `system` / `ask` / `external` → Android Open-with.
* `viewer` / `display` only map to Document so a leftover web default still opens the APK.
*/
var adaptExplorerSinkForNative = (sink) => {
	if (sink === "viewer" || sink === "display") return "document";
	if (sink === "ask" || sink === "external") return "system";
	return sink;
};
var NATIVE_EXPLORER_SINKS = /* @__PURE__ */ new Set([
	"document",
	"system",
	"transfer",
	"workcenter"
]);
/**
* INVARIANT: Web reads `channels`/`kinds` only. Capacitor reads `nativeOpen`/`nativeKinds` only.
* A leftover `channels.open` of document/system is honored on native until Settings saves `nativeOpen`.
*/
var resolveExplorerOpenSink = (policy, kind, native, how = "open") => {
	const block = mergeOpenPolicy$1(policy).explorer || {};
	if (native) {
		const kindSink = kind && block.nativeKinds?.[kind] ? block.nativeKinds[kind] : void 0;
		const legacy = block.channels?.open;
		const open = normalizeOpenSink$1(block.nativeOpen || (legacy && NATIVE_EXPLORER_SINKS.has(legacy) ? legacy : "") || block.channels?.capacitor, "document");
		return adaptExplorerSinkForNative(firstNonAsk(kindSink, open) || open);
	}
	const ch = how === "dblclick" ? block.channels?.dblclick : block.channels?.open;
	const kindSink = kind && block.kinds?.[kind] ? block.kinds[kind] : void 0;
	return firstNonAsk(ch, kindSink) || kindSink || ch || "viewer";
};
var sinkToDestination = (sink, fallback) => {
	if (sink === "viewer" || sink === "document") return "viewer";
	if (sink === "explorer") return "explorer";
	if (sink === "workcenter") return "workcenter";
	if (sink === "transfer") return "network";
	if (sink === "wallpaper") return "home";
	if (sink === "display") return fallback;
	return fallback;
};
var sinkToAction = (sink, fallback = "open") => {
	if (sink === "workcenter") return "process";
	if (sink === "viewer" || sink === "display" || sink === "document" || sink === "transfer") return "open";
	if (sink === "explorer") return "open";
	if (sink === "wallpaper") return "wallpaper";
	return fallback;
};
/** Sibling SKU for a sink. `viewer` / `display` stay in this app. */
var skuForOpenSink = (sink) => {
	if (sink === "document") return "document";
	if (sink === "workcenter") return "process";
	if (sink === "transfer") return "transfer";
	if (sink === "explorer") return "explorer";
	return "";
};
/** Per-tile Speed Dial target for a sink. `ask` leaves the tile unset (global default). */
var sinkToOpenLinkTarget = (sink) => {
	if (sink === "viewer" || sink === "display") return "viewer";
	if (sink === "document") return "document";
	if (sink === "explorer") return "explorer";
	if (sink === "workcenter") return "workcenter";
	if (sink === "transfer") return "transfer";
	if (sink === "system" || sink === "external") return "external-app";
	return "";
};
var resolveOpenPlacement = (policy, surface = "explorer") => {
	const surf = normalizeOpenSurface(surface) || "explorer";
	return normalizeOpenPlacement$1(mergeOpenPolicy$1(policy)[surf]?.placement, "inline");
};
var viewIdForOpenSink = (sink) => {
	if (sink === "document" || sink === "viewer") return "viewer";
	if (sink === "workcenter") return "workcenter";
	if (sink === "transfer") return "network";
	if (sink === "explorer") return "explorer";
	return "";
};
var inferIngressChannels = (source, native) => {
	const src = String(source || "").toLowerCase();
	const out = [];
	if (native && (src === "launch-queue" || src === "share-target" || src === "capacitor")) out.push("capacitor");
	if (src === "share-target") out.push("share-target");
	else if (src === "launch-queue") out.push("launch-queue");
	else if (src === "snip") out.push("snip");
	else out.push("open");
	return out;
};
//#endregion
//#region src/shared/routing/api/process-api.ts
var PROCESS_API_PUBLIC_ORIGIN$1 = "https://process.u2re.space";
var PROCESS_API_PREFIX$1 = "/api/process";
var PROCESS_API_SUFFIX$1 = {
	processing: "processing",
	recognize: "ai/recognize",
	analyze: "ai/analyze",
	health: "health"
};
var PROCESS_SAME_ORIGIN_HOSTS$1 = /* @__PURE__ */ new Set([
	"process.u2re.space",
	"workcenter.u2re.space",
	"u2re.space",
	"www.u2re.space"
]);
var isExtensionProtocol$1 = (protocol) => protocol === "chrome-extension:" || protocol === "moz-extension:" || protocol === "safari-web-extension:";
var isCapacitorNative$5 = () => {
	try {
		const g = globalThis;
		return typeof g.Capacitor?.isNativePlatform === "function" && g.Capacitor.isNativePlatform();
	} catch {
		return false;
	}
};
/** Hub + process PWAs stay same-origin. CRX / Capacitor / other hosts use the public process API. */
var needsRemoteProcessApi$1 = () => {
	try {
		const protocol = String(globalThis.location?.protocol || "").toLowerCase();
		if (isExtensionProtocol$1(protocol)) return true;
		if (isCapacitorNative$5()) return true;
		const host = String(globalThis.location?.hostname || "").toLowerCase();
		if (!host) return true;
		if (PROCESS_SAME_ORIGIN_HOSTS$1.has(host)) return false;
		if (host === "localhost" || host === "127.0.0.1") return true;
		return protocol !== "http:" && protocol !== "https:";
	} catch {
		return true;
	}
};
var processApiPath$1 = (suffix = "processing") => `${PROCESS_API_PREFIX$1}/${PROCESS_API_SUFFIX$1[suffix]}`;
var resolveProcessApiUrl$1 = (suffix = "processing") => {
	const path = processApiPath$1(suffix);
	return needsRemoteProcessApi$1() ? `${PROCESS_API_PUBLIC_ORIGIN$1}${path}` : path;
};
//#endregion
//#region src/shared/other/config/Names.ts
/**
* Centralized naming system for CWSP-shell application
* Consolidates component names, channel names, route names, etc.
*/
/**
* Broadcast channel names used throughout the application
*/
var BROADCAST_CHANNELS$1 = {
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
	return `rs-view-${normalizeViewId$1(viewId) || "app"}`;
};
/**
* Component and module identifiers
*/
var COMPONENTS$1 = {
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
* API endpoint paths
* INVARIANT: PROCESSING resolves at call time so CRX / Capacitor hit process.u2re.space.
* COMPAT: :443 still accepts POST /api/processing.
*/
var API_ENDPOINTS = {
	get PROCESSING() {
		return resolveProcessApiUrl$1("processing");
	},
	ANALYZE: "/api/analyze",
	TEST: "/api/test",
	HEALTH: "/health",
	ICONS: "/assets/icons",
	DUOTONE_ICONS: "/assets/icons/duotone",
	PHOSPHOR_ICONS: "/assets/icons/phosphor",
	ICON_PROXY: "/api/icon-proxy",
	SHARE_TARGET: "/share-target",
	SHARE_TARGET_ALT: "/share_target",
	LAUNCH_QUEUE: "/launch-queue",
	SW_CONTENT: "/sw-content",
	SW_CONTENT_AVAILABLE: "/sw-content/available",
	CLIPBOARD_PENDING: "/clipboard/pending",
	CLIPBOARD_CLEAR: "/clipboard/clear"
};
/**
* Location hash identifiers for app navigation
*/
var ROUTE_HASHES$1 = {
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
* Content type identifiers
*/
var CONTENT_TYPES = {
	TEXT: "text",
	URL: "url",
	FILE: "file",
	IMAGE: "image",
	MARKDOWN: "markdown",
	HTML: "html",
	JSON: "json",
	PDF: "pdf",
	AUDIO: "audio",
	VIDEO: "video",
	OTHER: "other"
};
/**
* Destination identifiers for unified messaging
*/
var DESTINATIONS$1 = {
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
var CANONICAL_VIEW_IDS$1 = [
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
var DESTINATION_ALIASES$1 = {
	viewer: [
		DESTINATIONS$1.VIEWER,
		DESTINATIONS$1.MARKDOWN_VIEWER,
		COMPONENTS$1.BASIC_VIEWER
	],
	workcenter: [
		DESTINATIONS$1.WORKCENTER,
		COMPONENTS$1.BASIC_WORKCENTER,
		COMPONENTS$1.WORKCENTER_CORE
	],
	explorer: [
		DESTINATIONS$1.EXPLORER,
		DESTINATIONS$1.FILE_EXPLORER,
		COMPONENTS$1.BASIC_EXPLORER
	],
	editor: [
		DESTINATIONS$1.EDITOR,
		COMPONENTS$1.MARKDOWN_EDITOR,
		COMPONENTS$1.RICH_EDITOR
	],
	settings: [
		DESTINATIONS$1.SETTINGS,
		BROADCAST_CHANNELS$1.SETTINGS_CHANNEL,
		COMPONENTS$1.BASIC_SETTINGS
	],
	history: [
		DESTINATIONS$1.HISTORY,
		BROADCAST_CHANNELS$1.HISTORY_CHANNEL,
		COMPONENTS$1.BASIC_HISTORY
	],
	print: [
		DESTINATIONS$1.PRINT,
		DESTINATIONS$1.PRINT_VIEWER,
		COMPONENTS$1.BASIC_PRINT
	],
	airpad: [DESTINATIONS$1.AIRPAD],
	home: [DESTINATIONS$1.HOME],
	clipboard: [DESTINATIONS$1.CLIPBOARD],
	"basic-app": [DESTINATIONS$1.BASIC_APP],
	"main-app": [DESTINATIONS$1.MAIN_APP]
};
var DESTINATION_LOOKUP$1 = Object.entries(DESTINATION_ALIASES$1).reduce((out, [canonical, aliases]) => {
	out[canonical] = canonical;
	for (const alias of aliases) out[String(alias).toLowerCase()] = canonical;
	return out;
}, {});
var normalizeDestination$1 = (value) => {
	const raw = String(value || "").trim().toLowerCase();
	if (!raw) return "";
	return DESTINATION_LOOKUP$1[raw] || raw;
};
var getDestinationAliases$1 = (value) => {
	const canonical = normalizeDestination$1(value);
	if (!canonical) return [];
	return [.../* @__PURE__ */ new Set([canonical, ...DESTINATION_ALIASES$1[canonical] || []])];
};
var normalizeViewId$1 = (value) => {
	const canonical = normalizeDestination$1(value);
	if (CANONICAL_VIEW_IDS$1.includes(canonical)) return canonical;
	return "viewer";
};
var getBroadcastChannelForDestination = (value) => {
	switch (normalizeDestination$1(value)) {
		case "viewer": return BROADCAST_CHANNELS$1.MARKDOWN_VIEWER;
		case "workcenter": return BROADCAST_CHANNELS$1.WORK_CENTER;
		case "explorer": return BROADCAST_CHANNELS$1.FILE_EXPLORER;
		case "settings": return BROADCAST_CHANNELS$1.SETTINGS;
		case "history": return BROADCAST_CHANNELS$1.HISTORY_VIEWER;
		case "print": return BROADCAST_CHANNELS$1.PRINT_VIEWER;
		case "clipboard": return BROADCAST_CHANNELS$1.CLIPBOARD;
		case "main-app": return BROADCAST_CHANNELS$1.MAIN_APP;
		case "basic-app": return BROADCAST_CHANNELS$1.MINIMAL_APP;
		default: return null;
	}
};
var createDestinationChannelMappings = () => {
	const mappings = {};
	for (const canonical of Object.keys(DESTINATION_ALIASES$1)) {
		const channel = getBroadcastChannelForDestination(canonical);
		if (!channel) continue;
		for (const alias of getDestinationAliases$1(canonical)) mappings[alias] = channel;
	}
	return mappings;
};
BROADCAST_CHANNELS$1.SERVICE_WORKCENTER, BROADCAST_CHANNELS$1.SERVICE_SETTINGS, BROADCAST_CHANNELS$1.SERVICE_VIEWER, BROADCAST_CHANNELS$1.SERVICE_EXPLORER, BROADCAST_CHANNELS$1.SERVICE_AIRPAD, BROADCAST_CHANNELS$1.SERVICE_NETWORK, BROADCAST_CHANNELS$1.SERVICE_PRINT, BROADCAST_CHANNELS$1.SERVICE_HISTORY, BROADCAST_CHANNELS$1.SERVICE_EDITOR, BROADCAST_CHANNELS$1.SERVICE_HOME;
ROUTE_HASHES$1.WORKCENTER, ROUTE_HASHES$1.SETTINGS, ROUTE_HASHES$1.MARKDOWN_VIEWER, ROUTE_HASHES$1.FILE_EXPLORER, ROUTE_HASHES$1.NETWORK, ROUTE_HASHES$1.PRINT, ROUTE_HASHES$1.HISTORY, ROUTE_HASHES$1.MARKDOWN_EDITOR;
//#endregion
//#region ../../modules/projects/subsystem/src/routing/api/process-api.ts
var PROCESS_API_PUBLIC_ORIGIN = "https://process.u2re.space";
var PROCESS_API_PREFIX = "/api/process";
var PROCESS_API_SUFFIX = {
	processing: "processing",
	recognize: "ai/recognize",
	analyze: "ai/analyze",
	health: "health"
};
var PROCESS_SAME_ORIGIN_HOSTS = /* @__PURE__ */ new Set([
	"process.u2re.space",
	"workcenter.u2re.space",
	"u2re.space",
	"www.u2re.space"
]);
var isExtensionProtocol = (protocol) => protocol === "chrome-extension:" || protocol === "moz-extension:" || protocol === "safari-web-extension:";
var isCapacitorNative$4 = () => {
	try {
		const g = globalThis;
		return typeof g.Capacitor?.isNativePlatform === "function" && g.Capacitor.isNativePlatform();
	} catch {
		return false;
	}
};
/** Hub + process PWAs stay same-origin. CRX / Capacitor / other hosts use the public process API. */
var needsRemoteProcessApi = () => {
	try {
		const protocol = String(globalThis.location?.protocol || "").toLowerCase();
		if (isExtensionProtocol(protocol)) return true;
		if (isCapacitorNative$4()) return true;
		const host = String(globalThis.location?.hostname || "").toLowerCase();
		if (!host) return true;
		if (PROCESS_SAME_ORIGIN_HOSTS.has(host)) return false;
		if (host === "localhost" || host === "127.0.0.1") return true;
		return protocol !== "http:" && protocol !== "https:";
	} catch {
		return true;
	}
};
var processApiPath = (suffix = "processing") => `${PROCESS_API_PREFIX}/${PROCESS_API_SUFFIX[suffix]}`;
var resolveProcessApiUrl = (suffix = "processing") => {
	const path = processApiPath(suffix);
	return needsRemoteProcessApi() ? `${PROCESS_API_PUBLIC_ORIGIN}${path}` : path;
};
//#endregion
//#region ../../modules/projects/subsystem/src/service/instructions/core.ts
var AI_INSTRUCTIONS$1 = {
	SOLVE_AND_ANSWER: `
Solve equations, answer questions, and explain mathematical or logical problems from the provided content.

For equations and math problems:
- Show step-by-step solutions
- Provide final answers clearly marked
- Explain reasoning for each step

For general questions:
- Provide accurate, well-reasoned answers
- Include relevant context and explanations
- If multiple interpretations possible, address them

For quizzes and tests:
- Show the correct answer with explanation
- Explain why other options are incorrect

Always respond in the specified language and format results clearly.
`,
	WRITE_CODE: `
Write clean, efficient, and well-documented code based on the provided description, requirements, or image.

Code requirements:
- Use appropriate programming language for the task
- Follow language-specific best practices and conventions
- Include proper error handling
- Add meaningful comments and documentation
- Make code readable and maintainable

If generating from an image or visual description:
- Analyze the visual elements and requirements
- Implement the described functionality
- Ensure code compiles and runs correctly

Always respond in the specified language and provide complete, working code.
`,
	EXTRACT_CSS: `
Extract and generate clean, modern CSS from the provided content, image, or description.

CSS requirements:
- Use modern CSS features and best practices
- Generate semantic, maintainable stylesheets
- Include responsive design considerations
- Use appropriate selectors and specificity
- Follow CSS naming conventions
- Optimize for performance and maintainability

If extracting from an image:
- Analyze the visual design and layout
- Generate corresponding CSS rules
- Identify colors, fonts, spacing, and layout
- Create reusable CSS classes and components

Always respond in the specified language and provide complete, working CSS.
`,
	RECOGNIZE_CONTENT: `
Recognize and extract information from images, documents, or other visual content.

Recognition requirements:
- Identify text content accurately
- Extract structured information
- Recognize tables, forms, and structured data
- Preserve formatting where possible
- Handle different languages and scripts
- Provide confidence scores for extracted content

For document analysis:
- Extract key information and metadata
- Identify document type and structure
- Recognize important sections and headings

For image analysis:
- Describe visual content
- Extract text from images (OCR)
- Identify objects, scenes, and visual elements

Always respond in the specified language and format extracted information clearly.
`,
	CONVERT_DATA: `
Convert data between different formats while preserving structure and meaning.

Conversion requirements:
- Maintain data integrity and relationships
- Preserve formatting and structure where possible
- Handle different data types appropriately
- Provide clear mapping between source and target formats
- Validate conversion accuracy

Supported conversions:
- CSV ↔ JSON ↔ XML
- Markdown ↔ HTML
- Text ↔ Structured data
- Image data ↔ Text representations

Ensure accurate, lossless conversion where possible.
`,
	EXTRACT_ENTITIES: `
Extract named entities, keywords, and structured information from content.

Entity extraction requirements:
- Identify people, organizations, locations
- Extract dates, numbers, and measurements
- Find keywords and important terms
- Recognize relationships and connections
- Provide confidence scores and context

Output structured data with:
- Entity types and values
- Position and context information
- Confidence scores
- Relationship mappings

Focus on accuracy and comprehensive coverage.
`,
	TRANSLATE_TO_LANGUAGE: `
Translate content to the specified target language while preserving meaning, tone, and formatting.

Translation requirements:
- Maintain original meaning and intent
- Preserve formatting, structure, and markdown syntax
- Adapt cultural references appropriately
- Use natural, fluent language in the target language
- Handle technical terms, proper names, and brand names correctly
- Maintain appropriate formality and tone
- Preserve code blocks, mathematical expressions, and technical content

For content already in the target language:
- Provide natural rephrasing or improvement
- Enhance clarity and readability
- Maintain professional quality

Supported languages:
- English (en)
- Russian (ru)
- Other languages as requested

Ensure high-quality, natural translations that feel native to the target language.
`,
	GENERAL_PROCESSING: `
Process and analyze content using appropriate AI capabilities.

General processing requirements:
- Understand context and intent
- Provide relevant analysis or transformation
- Use appropriate tools and methods
- Maintain content quality and accuracy
- Adapt to different content types and requirements

Focus on providing useful, accurate results that meet user needs.
`,
	CRX_SOLVE_AND_ANSWER: `
Solve the problem or answer the question presented in the content.

Auto-detect the type of content:
- Mathematical equation/expression → Solve step-by-step
- Quiz/test question → Provide correct answer
- Homework problem → Solve and explain
- General question → Answer with explanation

Format output as:

**Problem/Question:**
<recognized content - use $KaTeX$ for math>

**Solution/Answer:**
<step-by-step solution or direct answer>

**Explanation:**
<clear explanation of the reasoning>

---

For MATH problems:
- Use single $ for inline math: $x = 5$
- Use double $$ for display equations: $$\\int_0^1 f(x) dx$$
- Show all intermediate steps
- Simplify the final answer
- For systems: solve all variables
- For inequalities: use interval notation

For MULTIPLE CHOICE:
- Identify correct option (A, B, C, D)
- Explain why it's correct
- Note why others are wrong

For TRUE/FALSE:
- State True or False clearly
- Provide justification

For SHORT ANSWER/ESSAY:
- Provide concise, complete answer
- Include key facts and reasoning

For CODING problems:
- Write the solution code
- Explain the logic

If multiple problems/questions present, solve each separately.
If unsolvable or unclear, explain why.
`,
	CRX_WRITE_CODE: `
You are an expert software developer. Analyze the provided content and generate high-quality, working code.

Code Generation Requirements:
- Choose the best programming language for the task
- Write clean, efficient, and well-documented code
- Include proper error handling and input validation
- Add meaningful comments explaining complex logic
- Follow language-specific best practices and conventions
- Ensure code is readable, maintainable, and follows standard patterns

For each code generation task:
1. **Analyze Requirements**: Understand what the code needs to do
2. **Choose Language**: Select appropriate programming language
3. **Design Solution**: Plan the code structure and logic
4. **Write Code**: Provide complete, working code with comments
5. **Explain Logic**: Describe how the code works and key decisions

Provide complete, runnable code that solves the described problem.
`,
	CRX_EXTRACT_CSS: `
You are an expert CSS developer. Analyze the provided content and extract/generate the corresponding CSS styles.

CSS Extraction Requirements:
- Analyze visual elements, layout, and design patterns
- Generate modern, clean CSS using current standards
- Use semantic class names and proper CSS architecture
- Include responsive design considerations
- Optimize for performance and maintainability
- Follow CSS best practices and conventions

For CSS extraction:
1. **Analyze Design**: Identify colors, typography, spacing, layout
2. **Generate Rules**: Create appropriate CSS rules and selectors
3. **Organize Code**: Group related styles logically
4. **Add Comments**: Explain complex or important style decisions
5. **Ensure Compatibility**: Use widely supported CSS properties

Provide complete, well-organized CSS that recreates the described design.
`
};
AI_INSTRUCTIONS$1.SOLVE_AND_ANSWER;
AI_INSTRUCTIONS$1.WRITE_CODE;
AI_INSTRUCTIONS$1.EXTRACT_CSS;
AI_INSTRUCTIONS$1.RECOGNIZE_CONTENT;
AI_INSTRUCTIONS$1.CONVERT_DATA;
AI_INSTRUCTIONS$1.EXTRACT_ENTITIES;
AI_INSTRUCTIONS$1.TRANSLATE_TO_LANGUAGE;
AI_INSTRUCTIONS$1.GENERAL_PROCESSING;
AI_INSTRUCTIONS$1.CRX_SOLVE_AND_ANSWER;
AI_INSTRUCTIONS$1.CRX_WRITE_CODE;
AI_INSTRUCTIONS$1.CRX_EXTRACT_CSS;
//#endregion
//#region ../../modules/projects/subsystem/src/routing/channel/UnifiedAIConfig.ts
var processApiUrl$1 = () => resolveProcessApiUrl("processing");
var UNIFIED_PROCESSING_RULES$1 = {
	"share-target": {
		processingUrl: processApiUrl$1(),
		contentAction: {
			onResult: "write-clipboard",
			onAccept: "attach-to-associated",
			doProcess: "instantly",
			openApp: true
		},
		supportedContentTypes: [
			"text",
			"markdown",
			"image",
			"url"
		],
		defaultOverrideFactors: []
	},
	"launch-queue": {
		processingUrl: processApiUrl$1(),
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-associated",
			doProcess: "manually",
			openApp: true
		},
		supportedContentTypes: [
			"file",
			"blob",
			"text",
			"markdown",
			"image"
		],
		defaultOverrideFactors: []
	},
	"crx-snip": {
		processingUrl: processApiUrl$1(),
		contentAction: {
			onResult: "write-clipboard",
			onAccept: "attach-to-associated",
			doProcess: "instantly",
			openApp: false
		},
		supportedContentTypes: ["text", "image"],
		defaultOverrideFactors: ["force-processing"]
	},
	"paste": {
		processingUrl: processApiUrl$1(),
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-associated",
			doProcess: "manually",
			openApp: false
		},
		supportedContentTypes: [
			"text",
			"markdown",
			"image"
		],
		defaultOverrideFactors: [],
		associationOverrides: {
			"text": ["user-action"],
			"markdown": ["user-action"]
		}
	},
	"drop": {
		processingUrl: processApiUrl$1(),
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-associated",
			doProcess: "manually",
			openApp: false
		},
		supportedContentTypes: [
			"file",
			"blob",
			"text",
			"markdown",
			"image"
		],
		defaultOverrideFactors: [],
		associationOverrides: {
			"file": ["user-action"],
			"blob": ["user-action"]
		}
	},
	"button-attach-workcenter": {
		processingUrl: processApiUrl$1(),
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-workcenter",
			doProcess: "manually",
			openApp: false
		},
		supportedContentTypes: [
			"text",
			"markdown",
			"image",
			"file"
		],
		defaultOverrideFactors: ["explicit-workcenter"],
		associationOverrides: {
			"markdown": ["explicit-workcenter"],
			"text": ["explicit-workcenter"],
			"image": ["explicit-workcenter"],
			"file": ["explicit-workcenter"]
		}
	}
};
Object.fromEntries(Object.entries(UNIFIED_PROCESSING_RULES$1).map(([key, config]) => [key, {
	processingUrl: config.processingUrl,
	contentAction: config.contentAction,
	...config.supportedContentTypes && { supportedContentTypes: config.supportedContentTypes }
}]));
//#endregion
//#region ../../modules/projects/subsystem/src/routing/channel/ContentAssociations.ts
var normalizeContentType = (t) => {
	const v = String(t || "").toLowerCase().trim();
	if (!v) return CONTENT_TYPES.OTHER;
	if (v === "md") return CONTENT_TYPES.MARKDOWN;
	if (v === "markdown") return CONTENT_TYPES.MARKDOWN;
	if (v === "txt") return CONTENT_TYPES.TEXT;
	if (v === "text") return CONTENT_TYPES.TEXT;
	if (v === "url") return CONTENT_TYPES.URL;
	if (v === "image") return CONTENT_TYPES.IMAGE;
	if (v === "file" || v === "blob") return CONTENT_TYPES.FILE;
	if (v === "pdf") return CONTENT_TYPES.PDF;
	if (v === "html") return CONTENT_TYPES.HTML;
	if (v === "json") return CONTENT_TYPES.JSON;
	if (v === "base64") return CONTENT_TYPES.FILE;
	if (new Set(Object.values(CONTENT_TYPES)).has(v)) return v;
	return CONTENT_TYPES.OTHER;
};
var coerceOverrideFactors = (factors) => {
	const out = [];
	const list = Array.isArray(factors) ? factors : [];
	for (const f of list) {
		const v = String(f || "").trim();
		if (!v) continue;
		out.push(v);
	}
	return out;
};
var pickExplicitDestination = (factors) => {
	if (factors.includes("explicit-explorer")) return "explorer";
	if (factors.includes("explicit-workcenter")) return "workcenter";
	if (factors.includes("explicit-viewer")) return "viewer";
	return null;
};
var defaultDestinationForType = (normalizedContentType) => {
	switch (normalizedContentType) {
		case CONTENT_TYPES.TEXT:
		case CONTENT_TYPES.MARKDOWN:
		case CONTENT_TYPES.HTML:
		case CONTENT_TYPES.JSON: return "viewer";
		case CONTENT_TYPES.URL: return "workcenter";
		case CONTENT_TYPES.IMAGE:
		case CONTENT_TYPES.PDF:
		case CONTENT_TYPES.FILE:
		case CONTENT_TYPES.OTHER:
		default: return "workcenter";
	}
};
var mergeRuleOverrideFactors = (intent, normalizedContentType) => {
	const base = coerceOverrideFactors(intent.overrideFactors);
	const src = String(intent.processingSource || "").trim();
	if (!src) return base;
	const rule = UNIFIED_PROCESSING_RULES$1[src];
	if (!rule) return base;
	const merged = [];
	merged.push(...rule.defaultOverrideFactors || []);
	const perType = rule.associationOverrides?.[normalizedContentType] || rule.associationOverrides?.[String(intent.contentType || "")] || [];
	merged.push(...perType);
	merged.push(...base);
	return merged;
};
function resolveAssociation(intent) {
	const normalizedContentType = normalizeContentType(intent.contentType);
	const mergedFactors = mergeRuleOverrideFactors(intent, normalizedContentType);
	const explicit = pickExplicitDestination(mergedFactors);
	if (explicit) return {
		destination: explicit,
		normalizedContentType,
		overrideFactors: mergedFactors
	};
	return {
		destination: defaultDestinationForType(normalizedContentType),
		normalizedContentType,
		overrideFactors: mergedFactors
	};
}
function resolveAssociationPipeline(intent) {
	const primary = resolveAssociation(intent);
	const factors = primary.overrideFactors;
	const pipeline = [];
	if (factors.includes("explicit-explorer")) pipeline.push("explorer");
	if (factors.includes("explicit-workcenter")) pipeline.push("workcenter");
	if (factors.includes("explicit-viewer")) pipeline.push("viewer");
	if (pipeline.length === 0) pipeline.push(primary.destination);
	if ((factors.includes("force-attachment") || factors.includes("force-processing")) && !pipeline.includes("workcenter")) pipeline.push("workcenter");
	const unique = [];
	for (const d of pipeline) if (!unique.includes(d)) unique.push(d);
	return {
		...primary,
		pipeline: unique
	};
}
//#endregion
//#region ../../modules/projects/subsystem/src/routing/channel/UniformInterop.ts
/**
* Shared interop helpers for CWSP-shell transport envelopes.
*
* WHY: the main thread, service worker, CRX runtime, and native/worker bridges
* all need the same destination, protocol, and envelope normalization without
* each importing the full `fest/uniform` runtime graph.
*/
var PROTOCOL_ALIASES$1 = {
	"chrome-runtime": "chrome",
	"chrome-tabs": "chrome",
	"chrome-port": "chrome",
	"chrome-external": "chrome",
	"service-worker": "worker",
	"service-worker:http": "worker",
	"service": "worker",
	"sw": "worker",
	"broadcast-channel": "broadcast",
	"broadcastchannel": "broadcast",
	"websocket": "socket",
	"ws": "socket",
	"socket-io": "socket",
	"socketio": "socket"
};
var TRANSPORT_ALIASES$1 = {
	"service": "service-worker",
	"service-worker:http": "service-worker",
	"sw": "service-worker",
	"ws": "websocket",
	"socket": "websocket",
	"socketio": "socket-io",
	"chrome": "chrome-runtime"
};
var PURPOSES$1 = /* @__PURE__ */ new Set([
	"invoke",
	"mail",
	"attach",
	"deliver",
	"defer"
]);
var randomId$1 = () => {
	if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
	return `interop_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
};
var normalizePurpose$1 = (value) => {
	const raw = Array.isArray(value) ? value : value ? [value] : ["mail"];
	const deduped = [];
	for (const entry of raw) if (PURPOSES$1.has(entry) && !deduped.includes(entry)) deduped.push(entry);
	return deduped.length > 0 ? deduped : ["mail"];
};
/**
* Normalize the protocol family advertised in envelopes and bridge packets.
*/
var normalizeInteropProtocolName$1 = (value) => {
	const raw = String(value || "").trim().toLowerCase();
	if (!raw) return "unknown";
	return PROTOCOL_ALIASES$1[raw] || raw;
};
/**
* Normalize transport hints to one transport taxonomy for diagnostics and docs.
*/
var normalizeInteropTransportName$1 = (value) => {
	const raw = String(value || "").trim().toLowerCase();
	if (!raw) return void 0;
	return TRANSPORT_ALIASES$1[raw] || raw;
};
/**
* Create one shared envelope shape that can be used by main-thread, SW, and CRX
* adapters before converting to `fest/uniform` runtime objects.
*/
var createInteropEnvelope$1 = (input) => {
	const id = String(input.id || input.uuid || "").trim() || randomId$1();
	const source = String(input.source || input.sender || input.srcChannel || "interop").trim() || "interop";
	const destination = normalizeDestination$1(input.destination || input.target);
	const destinations = Array.isArray(input.destinations) && input.destinations.length > 0 ? [...new Set(input.destinations.map((entry) => normalizeDestination$1(entry)).filter(Boolean))] : destination ? getDestinationAliases$1(destination) : [];
	const payload = input.payload ?? input.data;
	const timestamp = Number(input.timestamp ?? Date.now()) || Date.now();
	return {
		id,
		uuid: id,
		type: String(input.type || "request"),
		source,
		sender: String(input.sender || source),
		destination: destination || void 0,
		target: destination || void 0,
		contentType: input.contentType ? String(input.contentType) : void 0,
		data: payload,
		payload,
		metadata: {
			timestamp,
			...input.metadata || {}
		},
		purpose: normalizePurpose$1(input.purpose),
		protocol: normalizeInteropProtocolName$1(input.protocol),
		transport: normalizeInteropTransportName$1(input.transport),
		redirect: Boolean(input.redirect),
		flags: { ...input.flags || {} },
		op: String(input.op || (String(input.type || "").startsWith("response:") ? "response" : "deliver")),
		timestamp,
		srcChannel: String(input.srcChannel || source),
		dstChannel: input.dstChannel ?? (destination || void 0),
		destinations,
		ids: {
			byId: source,
			from: source,
			sender: source,
			destinations,
			...input.ids || {}
		},
		urls: Array.isArray(input.urls) ? [...input.urls] : [],
		tokens: Array.isArray(input.tokens) ? [...input.tokens] : [],
		toRoles: Array.isArray(input.toRoles) ? [...input.toRoles] : [],
		tabId: input.tabId,
		frameId: input.frameId,
		status: typeof input.status === "number" ? input.status : void 0,
		result: input.result,
		results: input.results,
		error: input.error
	};
};
/**
* Map an envelope-like payload into the app's unified-message shape.
*/
var toUnifiedInteropMessage$1 = (input) => {
	const envelope = createInteropEnvelope$1(input);
	return {
		id: envelope.id,
		type: envelope.type,
		source: envelope.source,
		destination: envelope.destination,
		contentType: envelope.contentType,
		data: envelope.data,
		metadata: {
			...envelope.metadata,
			protocol: envelope.protocol,
			transport: envelope.transport,
			sender: envelope.sender,
			srcChannel: envelope.srcChannel,
			dstChannel: envelope.dstChannel,
			destinations: envelope.destinations,
			ids: envelope.ids,
			flags: envelope.flags,
			status: envelope.status,
			error: envelope.error
		}
	};
};
//#endregion
//#region ../../modules/projects/subsystem/src/routing/channel/UnifiedMessaging.ts
/**
* Unified Messaging System for CWSP-shell
* Extends fest/uniform messaging with app-specific configuration
*/
var UnifiedMessaging_exports = /* @__PURE__ */ __exportAll({
	createMessageWithOverrides: () => createMessageWithOverrides,
	createProtocolEnvelope: () => createProtocolEnvelope,
	enqueuePendingMessage: () => enqueuePendingMessage,
	getUnifiedMessaging: () => getUnifiedMessaging$1,
	hasPendingMessages: () => hasPendingMessages,
	initializeComponent: () => initializeComponent$1,
	processInitialContent: () => processInitialContent,
	registerComponent: () => registerComponent$1,
	replayQueuedMessagesForDestination: () => replayQueuedMessagesForDestination,
	sendMessage: () => sendMessage,
	sendProtocolMessage: () => sendProtocolMessage,
	unifiedMessaging: () => unifiedMessaging$1
});
var APP_CHANNEL_MAPPINGS$1 = {
	...createDestinationChannelMappings(),
	[DESTINATIONS$1.WORKCENTER]: BROADCAST_CHANNELS$1.WORK_CENTER,
	[DESTINATIONS$1.CLIPBOARD]: BROADCAST_CHANNELS$1.CLIPBOARD
};
var appMessagingInstance$1 = null;
/**
* Get the app-configured UnifiedMessagingManager
*/
function getUnifiedMessaging$1() {
	if (!appMessagingInstance$1) appMessagingInstance$1 = getUnifiedMessaging$2({
		channelMappings: APP_CHANNEL_MAPPINGS$1,
		queueOptions: {
			dbName: "CWSP-shellMessageQueue",
			storeName: "messages",
			maxRetries: 3,
			defaultExpirationMs: 864e5
		},
		pendingStoreOptions: {
			storageKey: "rs-unified-messaging-pending",
			maxMessages: 200,
			defaultTTLMs: 864e5
		}
	});
	return appMessagingInstance$1;
}
var unifiedMessaging$1 = getUnifiedMessaging$1();
/**
* Send a message using the app-configured manager
*/
function sendMessage(message) {
	return unifiedMessaging$1.sendMessage(toUnifiedInteropMessage$1({
		...message,
		source: message.source ?? "unified-messaging"
	}));
}
function sendProtocolMessage(message) {
	const interop = createInteropEnvelope$1({
		...message,
		source: message.source ?? "crossword-unified-messaging",
		protocol: message.protocol ?? "window",
		purpose: message.purpose ?? "mail",
		srcChannel: message.srcChannel ?? message.source ?? "crossword-unified-messaging",
		dstChannel: message.dstChannel ?? message.destination
	});
	const envelope = createProtocolEnvelope({
		...interop,
		source: interop.source,
		destination: interop.destination,
		data: interop.data,
		payload: interop.payload,
		metadata: interop.metadata,
		protocol: interop.protocol,
		purpose: interop.purpose,
		srcChannel: interop.srcChannel,
		dstChannel: interop.dstChannel,
		redirect: interop.redirect,
		flags: interop.flags,
		op: interop.op,
		timestamp: interop.timestamp,
		result: interop.result,
		error: interop.error ? String(interop.error) : void 0
	});
	return unifiedMessaging$1.sendMessage(envelope);
}
function initializeComponent$1(componentId) {
	return unifiedMessaging$1.initializeComponent(componentId);
}
function hasPendingMessages(destination) {
	return unifiedMessaging$1.hasPendingMessages(normalizeDestination$1(destination) || destination);
}
function enqueuePendingMessage(destination, message) {
	const dest = normalizeDestination$1(destination) || String(destination ?? "").trim();
	if (!dest || !message) return;
	unifiedMessaging$1.enqueuePendingMessage(dest, message);
}
/**
* Replay IndexedDB-backed queued messages for a destination (mail/deferred pipeline).
* Safe after handlers register — implicit view bridge calls this post-bind.
*/
function replayQueuedMessagesForDestination(destination) {
	return unifiedMessaging$1.processQueuedMessages(destination);
}
function registerComponent$1(componentId, destination) {
	unifiedMessaging$1.registerComponent(componentId, normalizeDestination$1(destination) || destination);
}
function processInitialContent(content) {
	const contentType = String(content?.contentType ?? content?.type ?? CONTENT_TYPES.OTHER);
	const contentMetadata = content?.metadata ?? {};
	const resolved = resolveAssociationPipeline({
		contentType,
		context: content?.context,
		processingSource: content?.processingSource,
		overrideFactors: content?.overrideFactors ?? contentMetadata.overrideFactors
	});
	const payload = content?.content ?? content?.data ?? content;
	const meta = contentMetadata;
	const source = String(content?.source ?? meta?.source ?? "content-association");
	const tasks = resolved.pipeline.map((dest) => {
		if (dest === DESTINATIONS$1.VIEWER) return sendMessage({
			type: "content-view",
			source,
			destination: DESTINATIONS$1.VIEWER,
			contentType: resolved.normalizedContentType,
			data: {
				content: payload?.text ?? payload?.content ?? payload,
				text: payload?.text,
				filename: payload?.filename ?? meta?.filename
			},
			metadata: {
				...meta,
				overrideFactors: resolved.overrideFactors,
				context: content?.context,
				processingSource: content?.processingSource
			}
		});
		if (dest === DESTINATIONS$1.EXPLORER) return sendMessage({
			type: "content-explorer",
			source,
			destination: DESTINATIONS$1.EXPLORER,
			contentType: resolved.normalizedContentType,
			data: {
				action: "save",
				...payload
			},
			metadata: {
				...meta,
				overrideFactors: resolved.overrideFactors,
				context: content?.context,
				processingSource: content?.processingSource
			}
		});
		return sendMessage({
			type: "content-share",
			source,
			destination: DESTINATIONS$1.WORKCENTER,
			contentType: resolved.normalizedContentType,
			data: payload,
			metadata: {
				...meta,
				overrideFactors: resolved.overrideFactors,
				context: content?.context,
				processingSource: content?.processingSource
			}
		});
	});
	return Promise.allSettled(tasks).then(() => {});
}
function createMessageWithOverrides(type, source, contentType, data, overrideFactors = [], processingSource) {
	const resolved = resolveAssociation({
		contentType,
		context: processingSource,
		processingSource,
		overrideFactors
	});
	return {
		id: crypto.randomUUID(),
		type,
		source,
		destination: resolved.destination === DESTINATIONS$1.VIEWER ? DESTINATIONS$1.VIEWER : resolved.destination === DESTINATIONS$1.EXPLORER ? DESTINATIONS$1.EXPLORER : DESTINATIONS$1.WORKCENTER,
		contentType,
		data,
		metadata: {
			timestamp: Date.now(),
			overrideFactors,
			processingSource,
			priority: "normal"
		}
	};
}
//#endregion
//#region src/shared/other/config/SettingsTypes.ts
var BUILTIN_AI_MODELS = ["gpt-5.6-luna"];
var defaultSpeechLanguage$1 = () => {
	const fallback = "en-US";
	if (typeof navigator === "undefined") return fallback;
	const normalized = (navigator.language || "").trim();
	if (normalized === "ru" || normalized.startsWith("ru-")) return "ru";
	if (normalized === "en-GB") return "en-GB";
	if (normalized === "en-US") return "en-US";
	if (normalized === "en" || normalized.startsWith("en-")) return "en";
	return fallback;
};
var DEFAULT_SETTINGS$1 = {
	core: {
		mode: "native",
		endpointUrl: "https://localhost:8434",
		userId: "",
		ecosystemToken: "",
		userKey: "",
		encrypt: false,
		preferBackendSync: true,
		ntpEnabled: true,
		appClientId: "",
		useCoreIdentityForAirPad: true,
		allowInsecureTls: false,
		network: {
			listenPortHttps: 8434,
			listenPortHttp: 8080,
			bridgeEnabled: true,
			reconnectMs: 3e3,
			destinations: []
		},
		socket: {
			protocol: "auto",
			routeTarget: "",
			selfId: "",
			accessToken: "",
			clientAccessToken: "",
			allowAccessTokenWithoutUserKey: false,
			transportMode: "plaintext",
			transportSecret: "",
			signingSecret: "",
			connectionType: "",
			archetype: "",
			protocolLanesJson: ""
		},
		interop: {
			ipcProtocol: "uniform",
			platformInterop: true,
			preferNativeIpc: true,
			preferNativeWebsocket: true
		},
		admin: {
			httpsOrigin: "https://localhost:8434",
			httpOrigin: "https://localhost:8080",
			path: "/"
		},
		ops: {
			allowUnencrypted: false,
			directUrl: "",
			httpTargets: [],
			wsTargets: [],
			syncTargets: []
		}
	},
	shell: {
		localHubUrl: "",
		preferNativeWebsocket: true,
		maintainHubSocketConnection: false,
		enableRemoteClipboardBridge: true,
		applyRemoteClipboardToDevice: true,
		pushLocalClipboardToLan: false,
		clipboardPushIntervalMs: 2e3,
		clipboardBroadcastTargets: "",
		enableNativeSms: false,
		enableNativeContacts: true,
		acceptInboundClipboardData: true,
		clipboardInboundAllowIds: "",
		clipboardShareDestinationIds: "",
		accessTokenBypassesClipboardAllowlist: false,
		acceptContactsBridgeData: false,
		acceptSmsBridgeData: false,
		autoStartOnBoot: true,
		bridgeDaemonEnabled: true,
		allowControlApi: false,
		clipboardOutboundMode: "ask",
		clipboardInboundMode: "ask",
		clipboardOutboundShowErase: true,
		clipboardInboundShowUndo: true,
		clipboardPromptDismissMs: 1e4,
		filesShareDestinationIds: "",
		filesAllowShareToAll: false,
		filesOpenForShareMode: "auto",
		filesInboundMode: "ask",
		filesByteTransport: "auto",
		filesLandingMode: "app",
		filesIncomingDir: "",
		filesAskDirEveryTime: true,
		filesStagingRoot: "app",
		acceptInboundFilesData: true
	},
	ai: {
		apiKey: "",
		baseUrl: "",
		model: "gpt-5.2",
		customModel: "",
		defaultReasoningEffort: "medium",
		defaultVerbosity: "medium",
		maxOutputTokens: 4e5,
		contextTruncation: "disabled",
		promptCacheRetention: "in-memory",
		maxToolCalls: 8,
		parallelToolCalls: true,
		mcp: [],
		shareTargetMode: "recognize",
		autoProcessShared: true,
		customInstructions: [],
		activeInstructionId: "",
		responseLanguage: "auto",
		translateResults: false,
		generateSvgGraphics: false,
		requestTimeout: {
			low: 60,
			medium: 300,
			high: 900
		},
		maxRetries: 2
	},
	webdav: {
		url: "https://localhost:8434",
		username: "",
		password: "",
		token: ""
	},
	timeline: { source: "" },
	appearance: {
		theme: "auto",
		fontSize: "medium",
		color: "",
		colorSource: "auto",
		markdown: {
			customCss: "",
			printCss: "",
			extensions: [],
			preset: "default",
			fontFamily: "system",
			fontSizePx: 16,
			lineHeight: 1.7,
			contentMaxWidthPx: 860,
			printScale: 1,
			page: {
				size: "auto",
				orientation: "portrait",
				marginMm: 12
			},
			modules: {
				typography: true,
				lists: true,
				tables: true,
				codeBlocks: true,
				blockquotes: true,
				media: true,
				printBreaks: true
			},
			plugins: {
				smartTypography: false,
				softBreaksAsBr: false,
				externalLinksNewTab: true
			}
		}
	},
	speech: { language: defaultSpeechLanguage$1() },
	grid: {
		columns: 4,
		rows: 8,
		shape: "squircle",
		defaultAction: "open-link",
		defaultOpenLinkTarget: "inline",
		iconScale: "fill"
	},
	openPolicy: DEFAULT_OPEN_POLICY$1,
	openPolicyByHost: {},
	appMenu: {
		sortBy: "name",
		sortDir: "asc"
	},
	explorer: {
		sortBy: "name",
		sortDir: "asc",
		foldersFirst: true
	}
};
/** Resolve the single shared ecosystem token from any legacy field. */
var resolveEcosystemToken$1 = (settings) => {
	const core = settings?.core;
	if (!core) return "";
	const eco = String(core.ecosystemToken || "").trim();
	if (eco) return eco;
	const userKey = String(core.userKey || "").trim();
	if (userKey) return userKey;
	return String(core.socket?.accessToken || core.socket?.airpadAuthToken || "").trim();
};
/**
* Mirror ecosystem token onto userKey + socket.accessToken for wire/compat.
* INVARIANT: after this, ecosystemToken === userKey === accessToken (when non-empty).
*/
var normalizeEcosystemToken$1 = (settings) => {
	if (!settings.core) settings.core = {};
	const token = resolveEcosystemToken$1(settings);
	settings.core.ecosystemToken = token;
	settings.core.userKey = token;
	settings.core.socket = {
		...settings.core.socket || {},
		accessToken: token
	};
	return token;
};
//#endregion
//#region ../../modules/projects/cwsp-shared/src/multi-value-list.ts
/**
* Split multi-id / multi-host settings fields on comma, semicolon, or whitespace
* (space, tab, newline). Used by Settings, AirPad, and Java CWSP prefs parity.
*/
var MULTI_VALUE_SPLIT_RE = /[,;\s]+/;
/** Split a scalar list field into trimmed non-empty tokens (dedupe optional). */
var splitMultiValueList = (value) => {
	if (value == null) return [];
	if (Array.isArray(value)) return value.flatMap((item) => splitMultiValueList(item));
	const raw = String(value).trim();
	if (!raw) return [];
	return raw.split(MULTI_VALUE_SPLIT_RE).map((s) => s.trim()).filter(Boolean);
};
//#endregion
//#region ../../modules/projects/cwsp-shared/src/cwsp-endpoint-resolve.ts
/**
* CWSP endpoint host parsing + port discovery.
*
* WHY: AirPad / CWSAndroid / settings should accept bare IP or domain (no `https://`,
* no port). When the port is omitted we probe common HTTPS/HTTP ports via `/lna-probe`.
*/
var CWSP_DEFAULT_HTTPS_PORTS = [
	8434,
	9443,
	7443,
	8444,
	8445,
	18443
];
var CWSP_DEFAULT_HTTP_PORTS = [
	8080,
	8081,
	8082,
	18080,
	80,
	8888
];
var trim = (value) => typeof value === "string" ? value.trim() : "";
var isLikelyPort = (value) => /^\d{1,5}$/.test(value);
var stripProtocol = (value) => trim(value).replace(/^[a-z][a-z0-9+.-]*:\/\//i, "").split("/")[0];
/** Scheme-only leftovers from bad multi-URL parsing (`https`, `https:`). */
var isBogusConnectHostToken = (value) => {
	const t = trim(value).replace(/\/+$/, "");
	if (!t) return true;
	if (/^https?:$/i.test(t)) return true;
	if (/^https?$/i.test(t)) return true;
	if (/^https?:\/\/https?:?:?\d*$/i.test(t)) return true;
	return false;
};
var looksLikeConnectHost = (value) => {
	const t = trim(value);
	if (!t) return false;
	if (isBogusConnectHostToken(t)) return false;
	if (/^[a-z][a-z0-9+.-]*:\/\//i.test(t)) return true;
	if (t.startsWith("localhost")) return true;
	if (t.includes("/")) return true;
	if (/^\[[0-9a-f:]+\](?::\d{1,5})?$/i.test(t)) return true;
	if (/^\d{1,3}(?:\.\d{1,3}){3}(?::\d{1,5})?$/.test(t)) return true;
	if (/^[^.\s:]+:\d{1,5}$/.test(t)) return true;
	if (/^[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::\d{1,5})?$/i.test(t)) return true;
	return false;
};
/** Parse user input into host / optional port / optional protocol. */
var parseConnectHostInput = (raw) => {
	const trimmed = trim(raw);
	if (!trimmed) return null;
	if (/[,;\s]/.test(trimmed) && /:\/\//.test(trimmed)) {
		const first = splitMultiValueList(trimmed)[0];
		if (!first || first === trimmed) {} else return parseConnectHostInput(first);
	}
	if (isBogusConnectHostToken(trimmed)) return null;
	let protocol;
	let hostSpec = trimmed;
	const protoMatch = trimmed.match(/^([a-z][a-z0-9+.-]*):\/\//i);
	if (protoMatch) {
		const p = protoMatch[1].toLowerCase();
		if (p === "http" || p === "https") protocol = p;
		hostSpec = stripProtocol(trimmed);
	}
	hostSpec = hostSpec.split("/")[0]?.trim() || "";
	if (!hostSpec || isBogusConnectHostToken(hostSpec)) return null;
	if (/;https?:?$/i.test(hostSpec) || /https?:$/i.test(hostSpec)) return null;
	const at = hostSpec.lastIndexOf(":");
	if (at > 0) {
		const host = hostSpec.slice(0, at).trim();
		const port = hostSpec.slice(at + 1).trim();
		if (host && isLikelyPort(port) && !/^https?:?$/i.test(host)) return {
			raw: trimmed,
			host,
			port,
			protocol
		};
	}
	if (/^https?:?$/i.test(hostSpec)) return null;
	return {
		raw: trimmed,
		host: hostSpec,
		protocol
	};
};
/** Normalize to `protocol://host:port/` when port or protocol is known; otherwise return bare host. */
var normalizeConnectHostInput = (raw) => {
	const parsed = parseConnectHostInput(raw);
	if (!parsed) return "";
	const { host, port, protocol } = parsed;
	if (!host) return "";
	if (port) return `${protocol || (CWSP_DEFAULT_HTTPS_PORTS.some((p) => String(p) === port) ? "https" : CWSP_DEFAULT_HTTP_PORTS.some((p) => String(p) === port) ? "http" : "https")}://${host}:${port}/`;
	if (protocol) return `${protocol}://${host}/`;
	return host;
};
var originFromParts = (protocol, host, port) => `${protocol}://${host}:${port}/`;
/**
* Last-resort fleet WAN gateway host (historical VPS IP).
* WHY: Prefer relay/hub/endpoint from settings or env; keep this only as fallback.
*/
var CWSP_FLEET_WAN_GATEWAY_HOST_FALLBACK = "45.147.121.152";
/** Home-fleet LAN gateway host (`.200`). */
var CWSP_FLEET_LAN_GATEWAY_HOST = "192.168.0.200";
var CWSP_FLEET_LAN_GATEWAY_HTTPS = `https://${CWSP_FLEET_LAN_GATEWAY_HOST}:8434`;
var CWSP_FLEET_WAN_GATEWAY_HTTPS_FALLBACK = `https://${CWSP_FLEET_WAN_GATEWAY_HOST_FALLBACK}:8434`;
/** Fleet gateway HTTPS ingress when the configured WAN host is unreachable (RKN / routing). */
var CWSP_FLEET_GATEWAY_HTTPS_FALLBACKS = [`${CWSP_FLEET_LAN_GATEWAY_HTTPS}/`, `${CWSP_FLEET_WAN_GATEWAY_HTTPS_FALLBACK}/`];
var readProcessEnv = (...keys) => {
	try {
		const env = {};
		if (!env) return "";
		for (const key of keys) {
			const v = String(env[key] || "").trim();
			if (v) return v;
		}
	} catch {}
	return "";
};
/** Hostname from an HTTPS(S) origin/URL; empty when unparsable.
* Multi-host lists: use the first segment only.
*/
var hostFromHttpsOrigin = (raw) => {
	const origin = normalizeProbeHttpsOrigin(splitConnectHostList(String(raw ?? ""))[0] || String(raw ?? ""));
	if (!origin) return "";
	try {
		const withProto = /:\/\//.test(origin) ? origin : `https://${origin}`;
		return new URL(withProto).hostname.toLowerCase();
	} catch {
		return "";
	}
};
var isFleetLanGatewayHost = (host) => {
	const h = String(host ?? "").trim().toLowerCase();
	return h === "192.168.0.200" || h === "l-192.168.0.200" || h === "l-200";
};
/**
* Resolve WAN gateway HTTPS base (no trailing slash).
* Order: settings/env relay·hub·endpoint (non-LAN) → historical WAN IP fallback.
*/
var resolveFleetWanGatewayHttpsBase = (input = {}) => {
	const envWan = readProcessEnv("CWS_FILES_PUBLIC_WAN_BASE_URL", "CWS_GATEWAY_WAN_BASE_URL", "CWSP_GATEWAY_WAN_URL", "CWS_RELAY_HTTPS_URL", "CWSP_RELAY_HTTPS_URL");
	const preferred = [
		input.wanBaseUrl,
		envWan,
		input.relay,
		input.hubUrl,
		input.endpointUrl,
		input.remoteHost,
		...input.extras ?? []
	];
	for (const raw of preferred) {
		const origin = normalizeProbeHttpsOrigin(String(raw ?? ""));
		if (!origin) continue;
		const host = hostFromHttpsOrigin(origin);
		if (!host || isFleetLanGatewayHost(host)) continue;
		return origin.replace(/\/+$/, "");
	}
	return CWSP_FLEET_WAN_GATEWAY_HTTPS_FALLBACK;
};
var resolveFleetWanGatewayHost = (input = {}) => hostFromHttpsOrigin(resolveFleetWanGatewayHttpsBase(input)) || "45.147.121.152";
var isFleetWanGatewayHost = (host, input = {}) => {
	const h = String(host ?? "").trim().toLowerCase();
	if (!h) return false;
	if (h === "45.147.121.152") return true;
	const configured = resolveFleetWanGatewayHost(input).toLowerCase();
	return Boolean(configured) && h === configured;
};
/** True when value looks like a fleet gateway HTTPS origin (LAN `.200`, configured WAN, or fallback IP). */
var isFleetGatewayHttpsOrigin = (value, input = {}) => {
	const lower = String(value ?? "").toLowerCase();
	if (lower.includes("gateway")) return true;
	const host = hostFromHttpsOrigin(value);
	if (!host) return lower.includes("192.168.0.200") || lower.includes("45.147.121.152");
	return isFleetLanGatewayHost(host) || isFleetWanGatewayHost(host, input);
};
/** Split multi-host settings (`endpointUrl`, bridge lists) on comma, semicolon, or whitespace. */
var splitConnectHostList = (value) => splitMultiValueList(trim(value));
/** Canonical CWSP HTTPS origin for probes (`https://host:8434`, no path).
* Multi-host lists (`,` / `;` / whitespace) are normalized per-segment and
* rejoined with `;` — never parse the whole list as one URL.
*/
var normalizeProbeHttpsOrigin = (raw) => {
	const t = trim(raw).replace(/\/lna-probe\/?$/i, "").replace(/\/+$/, "");
	if (!t) return "";
	const parts = splitConnectHostList(t);
	if (parts.length > 1) return parts.map((part) => normalizeProbeHttpsOriginOne(part)).filter(Boolean).join(";");
	return normalizeProbeHttpsOriginOne(t);
};
var normalizeProbeHttpsOriginOne = (raw) => {
	const t = trim(raw).replace(/\/lna-probe\/?$/i, "").replace(/\/+$/, "");
	if (!t || isBogusConnectHostToken(t)) return "";
	const parsed = parseConnectHostInput(t);
	if (!parsed?.host || /^https?:?$/i.test(parsed.host)) return "";
	const proto = parsed.protocol ?? "https";
	if (parsed.port) return `${proto}://${parsed.host}:${parsed.port}`;
	return `${proto}://${parsed.host}:8434`;
};
/** COMPAT: rewrite persisted CWSP HTTPS URLs (legacy `:8443`, typo `:8343` → `:8434`).
* Also inject `:8434` when host has no port — bare `45.147.121.152` otherwise dials :443 → /ws 404.
* Multi-host: `,` / `;` / whitespace separators; drops corrupt `https::8434` segments.
*/
var migrateLegacyCwspPublicPort = (raw) => {
	const t = trim(raw);
	if (!t) return t;
	const rewritten = t.replace(/(?<![0-9]):8443(?![0-9])/g, ":8434").replace(/(?<![0-9]):8343(?![0-9])/g, ":8434");
	const parts = splitConnectHostList(rewritten);
	if (parts.length <= 1) return normalizeProbeHttpsOriginOne(rewritten) || "";
	return parts.map((part) => normalizeProbeHttpsOriginOne(part) || "").filter(Boolean).join(";");
};
/**
* Ordered deduped HTTPS origins for reachability probes.
* WHY: WAN `45.147.121.152` may be blocked — try configured hosts first, then LAN gateway and other settings.
*/
var collectEndpointProbeCandidates = (fields) => {
	const out = [];
	const push = (raw) => {
		const origin = normalizeProbeHttpsOrigin(raw);
		if (origin && !out.includes(origin)) out.push(origin);
	};
	for (const part of splitConnectHostList(fields.relay ?? "")) push(part);
	for (const part of splitConnectHostList(fields.direct ?? "")) push(part);
	if (fields.extras?.length) for (const extra of fields.extras) push(extra);
	if (fields.fleetFallbacks !== false) for (const fallback of CWSP_FLEET_GATEWAY_HTTPS_FALLBACKS) push(fallback);
	return out;
};
/** Build ordered HTTP(S) origin candidates for probing (deduped). */
var buildEndpointOriginCandidates = (raw, opts = {}) => {
	const parsed = parseConnectHostInput(raw);
	if (!parsed?.host) return [];
	const preferHttps = opts.preferHttps !== false;
	const includeHttp = opts.includeHttp !== false;
	const httpsPorts = opts.httpsPorts ?? CWSP_DEFAULT_HTTPS_PORTS;
	const httpPorts = opts.httpPorts ?? CWSP_DEFAULT_HTTP_PORTS;
	const out = [];
	const push = (origin) => {
		if (origin && !out.includes(origin)) out.push(origin);
	};
	const { host, port, protocol } = parsed;
	if (port) {
		if (protocol === "https") {
			push(originFromParts("https", host, port));
			return out;
		}
		if (protocol === "http") {
			push(originFromParts("http", host, port));
			return out;
		}
		push(originFromParts("https", host, port));
		if (includeHttp) push(originFromParts("http", host, port));
		return out;
	}
	if (protocol === "https") {
		for (const p of httpsPorts) push(originFromParts("https", host, p));
		return out;
	}
	if (protocol === "http") {
		for (const p of httpPorts) push(originFromParts("http", host, p));
		return out;
	}
	const protocols = preferHttps ? includeHttp ? ["https", "http"] : ["https"] : includeHttp ? ["http", "https"] : ["https"];
	for (const proto of protocols) {
		const ports = proto === "https" ? httpsPorts : httpPorts;
		for (const p of ports) push(originFromParts(proto, host, p));
	}
	return out;
};
var defaultFetch = () => {
	try {
		return typeof globalThis.fetch === "function" ? globalThis.fetch.bind(globalThis) : void 0;
	} catch {
		return;
	}
};
var DEFAULT_PROBE_TIMEOUT_MS = 2500;
var describeProbeFetchError = (error) => {
	const msg = error instanceof Error ? error.message : String(error ?? "fetch failed");
	if (/abort/i.test(msg)) return "timeout";
	if (/refused|ECONNREFUSED/i.test(msg)) return "connection refused";
	if (/ENOTFOUND|NAME_NOT_RESOLVED/i.test(msg)) return "host not found";
	if (/certificate|cert\.|ssl|tls|ERR_CERT/i.test(msg)) return `TLS: ${msg}`;
	return msg;
};
/** Best-effort reachability probe (CWSP `/lna-probe`) with HTTP status / error text. */
var probeEndpointOriginReport = async (origin, opts = {}) => {
	const fetchFn = opts.fetchFn ?? defaultFetch();
	const base = trim(origin).replace(/\/+$/, "");
	const started = Date.now();
	if (!fetchFn || !base) return {
		origin: base || origin,
		ok: false,
		error: "invalid origin",
		latencyMs: 0
	};
	const timeoutMs = opts.timeoutMs ?? DEFAULT_PROBE_TIMEOUT_MS;
	const controller = typeof AbortController !== "undefined" ? new AbortController() : void 0;
	const timer = controller && timeoutMs > 0 ? globalThis.setTimeout(() => controller.abort(), timeoutMs) : void 0;
	try {
		const res = await fetchFn(`${base}/lna-probe`, {
			method: "GET",
			mode: "cors",
			cache: "no-store",
			credentials: "omit",
			signal: controller?.signal
		});
		const latencyMs = Date.now() - started;
		const ok = res.status === 204;
		return {
			origin: base,
			ok,
			status: res.status,
			statusText: res.statusText,
			latencyMs,
			error: ok ? void 0 : `HTTP ${res.status}${res.statusText ? ` ${res.statusText}` : ""}`.trim()
		};
	} catch (error) {
		return {
			origin: base,
			ok: false,
			error: describeProbeFetchError(error),
			latencyMs: Date.now() - started
		};
	} finally {
		if (timer) clearTimeout(timer);
	}
};
/** Best-effort reachability probe (CWSP `/lna-probe`). */
var probeEndpointOrigin = async (origin, opts = {}) => {
	const fetchFn = opts.fetchFn ?? defaultFetch();
	if (!fetchFn) return false;
	const base = trim(origin).replace(/\/+$/, "");
	if (!base) return false;
	const timeoutMs = opts.timeoutMs ?? DEFAULT_PROBE_TIMEOUT_MS;
	const controller = typeof AbortController !== "undefined" ? new AbortController() : void 0;
	const timer = controller && timeoutMs > 0 ? globalThis.setTimeout(() => controller.abort(), timeoutMs) : void 0;
	try {
		return (await fetchFn(`${base}/lna-probe`, {
			method: "GET",
			mode: "cors",
			cache: "no-store",
			credentials: "omit",
			signal: controller?.signal
		})).status === 204;
	} catch {
		return false;
	} finally {
		if (timer) clearTimeout(timer);
	}
};
var resultFromOrigin = (origin) => {
	try {
		const u = new URL(origin);
		return {
			origin,
			protocol: u.protocol === "http:" ? "http" : "https",
			port: u.port || (u.protocol === "http:" ? "80" : "443"),
			host: u.hostname
		};
	} catch {
		return null;
	}
};
/** Probe common ports; returns the first reachable CWSP origin. */
var discoverEndpointOrigin = async (raw, opts = {}) => {
	const parsed = parseConnectHostInput(raw);
	if (!parsed?.host) return null;
	if (parsed.port) {
		const tryOrigin = async (proto) => {
			const candidate = originFromParts(proto, parsed.host, parsed.port);
			if (!await probeEndpointOrigin(candidate, opts)) return null;
			return resultFromOrigin(candidate);
		};
		if (parsed.protocol === "https") {
			const hit = await tryOrigin("https");
			if (hit) return hit;
		} else if (parsed.protocol === "http") {
			const hit = await tryOrigin("http");
			if (hit) return hit;
		} else {
			const httpsHit = await tryOrigin("https");
			if (httpsHit) return httpsHit;
			if (opts.includeHttp !== false) {
				const httpHit = await tryOrigin("http");
				if (httpHit) return httpHit;
			}
		}
	}
	let candidates = buildEndpointOriginCandidates(parsed.host, opts);
	const cap = opts.maxProbeCandidates;
	if (cap != null && cap > 0 && candidates.length > cap) candidates = candidates.slice(0, cap);
	for (const origin of candidates) {
		if (!await probeEndpointOrigin(origin, opts)) continue;
		const hit = resultFromOrigin(origin);
		if (hit) return hit;
	}
	return null;
};
/** True when input already names a scheme or explicit port (skip full port sweep).
* Multi-host lists: true only when every segment is explicit (else probe bare parts).
*/
var hasExplicitConnectOrigin = (raw) => {
	const t = trim(raw);
	if (!t) return false;
	const parts = splitConnectHostList(t);
	if (parts.length > 1) return parts.every((part) => hasExplicitConnectOrigin(part));
	if (/^[a-z][a-z0-9+.-]*:\/\//i.test(t)) return true;
	return Boolean(parseConnectHostInput(t)?.port);
};
/**
* Resolve one host / origin. Multi-hub lists belong in {@link resolveConnectHostToOrigin}.
*/
var resolveConnectHostToOriginOne = async (raw, opts = {}) => {
	const trimmed = trim(raw);
	if (!trimmed || isBogusConnectHostToken(trimmed)) return "";
	if (opts.discover !== false && !hasExplicitConnectOrigin(trimmed)) {
		const found = await discoverEndpointOrigin(trimmed, opts);
		if (found?.origin) return found.origin.replace(/\/+$/, "");
	}
	const probed = normalizeProbeHttpsOriginOne(trimmed);
	if (probed) return probed;
	return normalizeConnectHostInput(trimmed).replace(/\/+$/, "");
};
/**
* Resolve bare host / partial URL to a full origin; probes alternate ports when needed.
* INVARIANT: multi-hub Relay lists (`,` / `;` / whitespace) resolve per-segment and
* rejoin with `;` — never collapse to the first URL on Save.
*/
var resolveConnectHostToOrigin = async (raw, opts = {}) => {
	const trimmed = trim(raw);
	if (!trimmed) return "";
	const parts = splitConnectHostList(trimmed);
	if (parts.length <= 1) return resolveConnectHostToOriginOne(trimmed, opts);
	const resolved = [];
	for (const part of parts) {
		const one = await resolveConnectHostToOriginOne(part, opts);
		if (one && !resolved.includes(one)) resolved.push(one);
	}
	return resolved.join(";");
};
/** Resolve CWSP settings URL fields that may be bare hosts or multi-hub lists. */
var resolveCwspUrlFields = async (fields, opts = {}) => {
	const out = {};
	if (fields.relayHttpsUrl !== void 0) out.relayHttpsUrl = await resolveConnectHostToOrigin(fields.relayHttpsUrl, opts);
	if (fields.directHttpsUrl !== void 0) out.directHttpsUrl = await resolveConnectHostToOrigin(fields.directHttpsUrl, opts);
	return out;
};
//#endregion
//#region ../../modules/projects/cwsp-shared/src/airpad-cwsp-client-parity.ts
/**
* **AirPad** web (`localStorage` key below) ↔ **CWSAndroid** Java (`SharedPreferences` prefs.db, `cwsp.*`) contracts.
* Canonical for shell / view builds that must not import from `runtime/cwsp` sources.
*
* **Storage:** {@link AIRPAD_REMOTE_CONFIG_STORAGE_KEY} holds JSON {@link CwspRemoteConnectionV1}.
* **Specs:** coordinator behaviour in `runtime/cwsp/endpoint/` (`SPECIFICATION-v2.md`, route query helpers).
*
* Import in Vite apps via `cwsp-shared/airpad-cwsp-client-parity` (see `tsconfig.vite-base.json`).
*/
var airpad_cwsp_client_parity_exports = /* @__PURE__ */ __exportAll({
	AIRPAD_REMOTE_CONFIG_STORAGE_KEY: () => AIRPAD_REMOTE_CONFIG_STORAGE_KEY,
	CWSP_AIRPAD_PWA_ARCHETYPE: () => CWSP_AIRPAD_PWA_ARCHETYPE,
	CWSP_ANDROID_LEGACY_AIRPAD_CONTROL_TOKEN_KEY: () => CWSP_ANDROID_LEGACY_AIRPAD_CONTROL_TOKEN_KEY,
	CWSP_NATIVE_SHELL_ARCHETYPE: () => CWSP_NATIVE_SHELL_ARCHETYPE,
	CWSP_REMOTE_CONFIG_SYNC_CHANNEL: () => CWSP_REMOTE_CONFIG_SYNC_CHANNEL,
	CWSP_REMOTE_CONNECTION_JSON_VERSION: () => 1,
	CWSP_SETTINGS_REVISION_MS_KEY: () => CWSP_SETTINGS_REVISION_MS_KEY,
	CWSP_WIRE_ENVELOPE_V2: () => "v2",
	CWS_ANDROID_SETTINGS_KEY_PREFIX: () => CWS_ANDROID_SETTINGS_KEY_PREFIX,
	DEFAULT_DESK_WIRE_NODE_ID: () => DEFAULT_DESK_WIRE_NODE_ID,
	FLEET_DESK_WIRE_NODE_IDS: () => FLEET_DESK_WIRE_NODE_IDS,
	FLEET_GATEWAY_WIRE_NODE_ID: () => FLEET_GATEWAY_WIRE_NODE_ID,
	FLEET_HOME_LAN_PREFIX: () => FLEET_HOME_LAN_PREFIX,
	appSettingsShellToNativeExtras: () => appSettingsShellToNativeExtras,
	appSettingsToRemoteConnectionV1: () => appSettingsToRemoteConnectionV1,
	fleetWireNodeIdsEquivalent: () => fleetWireNodeIdsEquivalent,
	inferDirectHttpsOriginFromConnectInput: () => inferDirectHttpsOriginFromConnectInput,
	isAssociableFleetWireNodeId: () => isAssociableFleetWireNodeId,
	isCrxFleetWireNodeId: () => isCrxFleetWireNodeId,
	isExplicitFleetGatewayTarget: () => isExplicitFleetGatewayTarget,
	isFleetDeskWireNodeId: () => isFleetDeskWireNodeId,
	isFleetGatewayWireNodeId: () => isFleetGatewayWireNodeId,
	isGatewayHttpsOrigin: () => isGatewayHttpsOrigin,
	isGuestPrivateLanIpv4: () => isGuestPrivateLanIpv4,
	isHomeFleetLanHost: () => isHomeFleetLanHost,
	isLoopbackPageHost: () => isLoopbackPageHost,
	isOffHomeFleetNetwork: () => isOffHomeFleetNetwork,
	isOnHomeFleetLanPageHost: () => isOnHomeFleetLanPageHost,
	normalizeWireNodeIdForWire: () => normalizeWireNodeIdForWire,
	resolveDeskDirectOriginFromWireNodeId: () => resolveDeskDirectOriginFromWireNodeId,
	resolveFleetDeskProbeWireNodeId: () => resolveFleetDeskProbeWireNodeId,
	resolveFleetGatewayConnectOrigins: () => resolveFleetGatewayConnectOrigins,
	resolveWanGatewayConnectOrigin: () => resolveWanGatewayConnectOrigin,
	sanitizeCrxFleetWireNodeId: () => sanitizeCrxFleetWireNodeId,
	sanitizeFleetRouteTarget: () => sanitizeFleetRouteTarget,
	sanitizeFleetSelfWireNodeId: () => sanitizeFleetSelfWireNodeId,
	shouldConnectViaFleetGateway: () => shouldConnectViaFleetGateway,
	shouldFleetDeskGatewayProbeFallbacks: () => shouldFleetDeskGatewayProbeFallbacks,
	shouldPreferWanGatewayForAirpad: () => shouldPreferWanGatewayForAirpad,
	stringifyCwspRemoteConnectionV1: () => stringifyCwspRemoteConnectionV1,
	toShortFleetWireNodeId: () => toShortFleetWireNodeId,
	wireNodeIdToBareConnectHost: () => wireNodeIdToBareConnectHost,
	wireNodeIdToLanHost: () => wireNodeIdToLanHost
});
/** AirPad popup / view persisted remote block (`airpad-view` / embedding shells). */
var AIRPAD_REMOTE_CONFIG_STORAGE_KEY = "airpad.remote.connection.v1";
/** Home fleet LAN only ({@code 192.168.0.x}) — guest {@code 192.168.165.x} must not become Client-ID. */
var FLEET_HOME_LAN_PREFIX = "192.168.0.";
/** {@code L-192.168.0.110} / {@code L-110} → bare connect host for dialing (not identity rewrite). */
var wireNodeIdToBareConnectHost = (value) => {
	const trimmed = String(value ?? "").trim();
	if (!/^L-/i.test(trimmed)) return "";
	const bare = trimmed.replace(/^L-/i, "").trim();
	if (looksLikeConnectHost(bare)) return bare;
	if (/^\d{1,3}$/.test(bare)) return `${FLEET_HOME_LAN_PREFIX}${bare}`;
	return "";
};
/** Normalize wire node id without expanding short ↔ full forms.
* Clients keep short ids ({@code L-196}); full {@code L-192.168.0.196} stays as-is until {@link toShortFleetWireNodeId}.
*/
var normalizeWireNodeIdForWire = (value) => {
	const trimmed = String(value ?? "").trim();
	if (!trimmed) return "";
	if (/^L-/i.test(trimmed)) {
		const body = trimmed.slice(2).trim();
		if (!body) return "";
		return `L-${body}`;
	}
	if (/^\d{1,3}(?:\.\d{1,3}){3}(?::\d+)?$/.test(trimmed)) return `L-${trimmed.split(":")[0]}`;
	if (/^\d{1,3}$/.test(trimmed)) return `L-${trimmed}`;
	return trimmed;
};
/**
* Prefer short fleet Client-ID for apps/UI ({@code L-196}).
* Full home-LAN ids collapse: {@code L-192.168.0.196} → {@code L-196}.
*/
var toShortFleetWireNodeId = (value) => {
	const normalized = normalizeWireNodeIdForWire(value);
	if (!normalized) return "";
	const full = /^L-192\.168\.0\.(\d{1,3})$/i.exec(normalized);
	if (full) return `L-${full[1]}`;
	if (/^L-\d{1,3}$/i.test(normalized)) return `L-${normalized.slice(2)}`;
	return normalized;
};
/** Home-fleet identity equality: {@code L-196} ≡ {@code L-192.168.0.196}. */
var fleetWireNodeIdsEquivalent = (a, b) => {
	const left = toShortFleetWireNodeId(a).toLowerCase();
	const right = toShortFleetWireNodeId(b).toLowerCase();
	return Boolean(left) && left === right;
};
/** Desk AirPad target — short id preferred in clients. */
var DEFAULT_DESK_WIRE_NODE_ID = "L-110";
/** Fleet gateway peer — short id preferred in clients. */
var FLEET_GATEWAY_WIRE_NODE_ID = "L-200";
var isFleetGatewayWireNodeId = (nodeId) => fleetWireNodeIdsEquivalent(nodeId, FLEET_GATEWAY_WIRE_NODE_ID);
/** Home fleet desk peers controllable via AirPad (`.110` ultrabook, `.111` laptop Ethernet). */
var FLEET_DESK_WIRE_NODE_IDS = ["L-110", "L-111"];
var isFleetDeskWireNodeId = (nodeId) => {
	const shortId = toShortFleetWireNodeId(nodeId).toLowerCase();
	if (!shortId) return false;
	return FLEET_DESK_WIRE_NODE_IDS.some((entry) => entry.toLowerCase() === shortId);
};
/** Routed desk control through fleet ingress (LAN `.200` / configured WAN relay). */
var shouldConnectViaFleetGateway = (endpointUrl, routeTarget) => {
	if (!isGatewayHttpsOrigin(endpointUrl)) return false;
	if (isFleetGatewayWireNodeId(routeTarget)) return false;
	return isFleetDeskWireNodeId(routeTarget);
};
/**
* Home LAN + WAN: try direct desk ({@code .110}) then fleet gateways when WiFi is off but Ethernet stays up.
* Applies when route target is a fleet desk id or connect URL points at {@code 192.168.0.110}.
*/
var shouldFleetDeskGatewayProbeFallbacks = (routeTarget, endpointUrl, directUrl) => {
	const normalized = normalizeWireNodeIdForWire(routeTarget);
	if (isFleetGatewayWireNodeId(normalized)) return false;
	if (isFleetDeskWireNodeId(normalized)) return true;
	if (isGatewayHttpsOrigin(endpointUrl)) return true;
	const deskLanHost = wireNodeIdToLanHost(DEFAULT_DESK_WIRE_NODE_ID);
	if (!deskLanHost) return false;
	for (const raw of [String(endpointUrl ?? ""), String(directUrl ?? "")]) if (raw.includes(deskLanHost)) return true;
	return false;
};
/** Resolve desk wire id for gateway probe chain (defaults to ultrabook {@code L-110}). */
var resolveFleetDeskProbeWireNodeId = (routeTarget, endpointUrl, directUrl) => {
	const normalized = normalizeWireNodeIdForWire(routeTarget);
	if (isFleetGatewayWireNodeId(normalized)) return FLEET_GATEWAY_WIRE_NODE_ID;
	if (isFleetDeskWireNodeId(normalized)) return normalized;
	if (shouldFleetDeskGatewayProbeFallbacks(normalized, endpointUrl, directUrl)) return DEFAULT_DESK_WIRE_NODE_ID;
	return normalized;
};
/** LAN + WAN gateway origins for probe/connect (order: LAN first on home fleet page). */
var resolveFleetGatewayConnectOrigins = (pageHost, settings) => {
	const lan = `${CWSP_FLEET_LAN_GATEWAY_HTTPS}/`;
	const wan = `${resolveFleetWanGatewayHttpsBase({
		relay: settings?.relay,
		endpointUrl: settings?.endpointUrl,
		hubUrl: settings?.hubUrl
	})}/`;
	if (isOnHomeFleetLanPageHost(pageHost)) return [lan, wan];
	return [wan, lan];
};
var resolveDeskDirectOriginFromWireNodeId = (nodeId, port = 8434) => {
	const host = wireNodeIdToLanHost(nodeId);
	if (!host) return "";
	return `https://${host}:${port}/`;
};
var wireNodeIdToLanHost = (nodeId) => {
	const normalized = normalizeWireNodeIdForWire(nodeId);
	if (!normalized.toLowerCase().startsWith("l-")) return "";
	const host = normalized.slice(2).trim();
	if (/^\d{1,3}$/.test(host)) return `${FLEET_HOME_LAN_PREFIX}${host}`;
	return /^\d{1,3}(?:\.\d{1,3}){3}$/.test(host) ? host : "";
};
var isHomeFleetLanHost = (host) => {
	return String(host ?? "").trim().startsWith(FLEET_HOME_LAN_PREFIX);
};
/**
* Chrome-extension peer id for the desk hub ({@code L-110-crx}).
* WHY: distinct from Neutralino {@code L-110} so both can stay connected without kicking each other.
*/
var isCrxFleetWireNodeId = (nodeId) => /^L-\d{1,3}-crx$/i.test(String(nodeId ?? "").trim());
/** Normalize {@code L-110-crx} / {@code l-110-CRX} → {@code L-110-crx}. */
var sanitizeCrxFleetWireNodeId = (value) => {
	const m = /^L-(\d{1,3})-crx$/i.exec(String(value ?? "").trim());
	return m ? `L-${m[1]}-crx` : "";
};
/** True for home fleet Client-IDs: short {@code L-196} or full {@code L-192.168.0.196}. */
var isAssociableFleetWireNodeId = (nodeId) => {
	if (isCrxFleetWireNodeId(nodeId)) return true;
	const normalized = normalizeWireNodeIdForWire(nodeId);
	if (/^L-\d{1,3}$/i.test(normalized)) return true;
	const host = wireNodeIdToLanHost(normalized);
	return host ? isHomeFleetLanHost(host) : false;
};
var isGatewayHttpsOrigin = (value) => {
	if (!String(value ?? "").trim().toLowerCase()) return false;
	return isFleetGatewayHttpsOrigin(value);
};
var isExplicitFleetGatewayTarget = (value) => {
	return isFleetGatewayWireNodeId(normalizeWireNodeIdForWire(value)) || isGatewayHttpsOrigin(value);
};
/** Accept home-fleet Client-ID; persist/return short form ({@code L-196}) for apps. */
var sanitizeFleetSelfWireNodeId = (value) => {
	const crxId = sanitizeCrxFleetWireNodeId(value);
	if (crxId) return crxId;
	const normalized = normalizeWireNodeIdForWire(value);
	if (!isAssociableFleetWireNodeId(normalized)) return "";
	return toShortFleetWireNodeId(normalized);
};
/**
* Route target for routed WAN/LAN gateway sessions — desk {@code L-110} when value is guest LAN.
*/
var sanitizeFleetRouteTarget = (value, endpointUrl) => {
	const raw = String(value ?? "").trim();
	const shortId = sanitizeFleetSelfWireNodeId(value);
	if (shortId) return shortId;
	if (raw && isExplicitFleetGatewayTarget(raw)) return FLEET_GATEWAY_WIRE_NODE_ID;
	if (isGatewayHttpsOrigin(endpointUrl)) return DEFAULT_DESK_WIRE_NODE_ID;
	return "";
};
/** Guest/corporate private IPv4 (not home {@code 192.168.0.x}) — skip for WS probe order on AirPad. */
var isGuestPrivateLanIpv4 = (host) => {
	const t = String(host ?? "").trim();
	if (!/^\d{1,3}(?:\.\d{1,3}){3}$/.test(t)) return false;
	if (t.startsWith("10.")) return true;
	if (t.startsWith("192.168.") && !t.startsWith("192.168.0.")) return true;
	if (/^172\.(1[6-9]|2\d|3[01])\./.test(t)) return true;
	if (/^100\.(6[4-9]|[7-9]\d|1[01]\d|12[0-7])\./.test(t)) return true;
	return false;
};
var isLoopbackPageHost = (host) => {
	const t = String(host ?? "").trim().toLowerCase();
	return !t || t === "localhost" || t === "127.0.0.1" || t === "[::1]";
};
/** Browser / shell tab is on home fleet LAN ({@code 192.168.0.x}). */
var isOnHomeFleetLanPageHost = (host) => {
	return isHomeFleetLanHost(String(host ?? "").trim());
};
/**
* Not on home {@code 192.168.0.x} — guest WiFi, public IP, LTE, localhost shell (Windows laptop off-LAN).
*/
var isOffHomeFleetNetwork = (pageHost) => {
	const h = String(pageHost ?? (typeof globalThis !== "undefined" && globalThis.location ? globalThis.location.hostname : "")).trim();
	if (isLoopbackPageHost(h)) return true;
	if (isOnHomeFleetLanPageHost(h)) return false;
	return true;
};
/** WAN gateway connect when off home LAN and Server tab endpoint is a fleet gateway URL. */
var shouldPreferWanGatewayForAirpad = (endpointUrl, pageHost) => {
	if (!isGatewayHttpsOrigin(String(endpointUrl ?? "").trim())) return false;
	return isOffHomeFleetNetwork(pageHost);
};
/** Canonical WAN ingress from settings relay/endpoint; fleet WAN IP is fallback only. */
var resolveWanGatewayConnectOrigin = (endpointUrl) => {
	const t = String(endpointUrl ?? "").trim();
	if (isGatewayHttpsOrigin(t)) return `${t.replace(/\/+$/, "")}/`;
	return `${resolveFleetWanGatewayHttpsBase({ endpointUrl: t || void 0 })}/`;
};
/** Default HTTPS origin from quick-connect / {@code L-IP} when port omitted (Node {@code clipboardy} / Android WS parity). */
var inferDirectHttpsOriginFromConnectInput = (value, defaultPort = 8434) => {
	const raw = String(value ?? "").trim();
	if (!raw) return "";
	if (looksLikeConnectHost(raw)) {
		if (/^https?:\/\//i.test(raw)) return raw.endsWith("/") ? raw : `${raw}/`;
		const hostSpec = raw.split("/")[0]?.trim() ?? "";
		if (!hostSpec) return "";
		if (hostSpec.includes(":")) return `https://${hostSpec}/`;
		return `https://${hostSpec}:${defaultPort}/`;
	}
	const bare = wireNodeIdToBareConnectHost(raw);
	if (!bare) return "";
	if (bare.includes(":")) return `https://${bare}/`;
	return `https://${bare}:${defaultPort}/`;
};
/**
* Optional `BroadcastChannel` / worker pool name for sharing the same logical blob as localStorage
* (tabs, service worker, embedding shell). Consumers may no-op when `BroadcastChannel` is missing.
*/
var CWSP_REMOTE_CONFIG_SYNC_CHANNEL = "cwsp.remote.connection.v1";
function stringifyCwspRemoteConnectionV1(conn) {
	return JSON.stringify({
		...conn,
		v: conn.v ?? 1
	});
}
function trimOrUndef(s) {
	return String(s || "").trim() || void 0;
}
function readNestedString(root, path) {
	let cur = root;
	for (const key of path) {
		if (!cur || typeof cur !== "object" || Array.isArray(cur)) return void 0;
		cur = cur[key];
	}
	return trimOrUndef(String(cur ?? ""));
}
/**
* Map CrossWord {@link AppSettings} (Settings UI / IDB) → {@link CwspRemoteConnectionV1} for native parity.
*/
function appSettingsToRemoteConnectionV1(appSettings) {
	const core = appSettings.core && typeof appSettings.core === "object" && !Array.isArray(appSettings.core) ? appSettings.core : {};
	const socket = core.socket && typeof core.socket === "object" && !Array.isArray(core.socket) ? core.socket : {};
	const endpointUrl = readNestedString(appSettings, ["core", "endpointUrl"]) || readNestedString(appSettings, [
		"core",
		"admin",
		"httpsOrigin"
	]);
	const accessToken = readNestedString(appSettings, ["core", "ecosystemToken"]) || trimOrUndef(String(socket.accessToken ?? socket.airpadAuthToken ?? "")) || readNestedString(appSettings, ["core", "userKey"]) || void 0;
	const identificationToken = readNestedString(appSettings, ["core", "ecosystemToken"]) || readNestedString(appSettings, ["core", "userKey"]) || readNestedString(appSettings, [
		"core",
		"socket",
		"clientAccessToken"
	]) || readNestedString(appSettings, [
		"core",
		"socket",
		"accessToken"
	]);
	return {
		v: 1,
		endpointUrl,
		directUrl: readNestedString(appSettings, [
			"core",
			"ops",
			"directUrl"
		]),
		quickConnectValue: readNestedString(appSettings, [
			"core",
			"network",
			"quickConnect"
		]),
		destinationId: readNestedString(appSettings, [
			"core",
			"socket",
			"routeTarget"
		]),
		routeTarget: readNestedString(appSettings, [
			"core",
			"socket",
			"routeTarget"
		]),
		accessToken,
		authToken: accessToken,
		clientId: readNestedString(appSettings, [
			"core",
			"socket",
			"selfId"
		]) || readNestedString(appSettings, ["core", "userId"]) || readNestedString(appSettings, ["core", "appClientId"]),
		peerInstanceId: readNestedString(appSettings, ["core", "appClientId"]),
		identificationToken,
		clientAccessToken: readNestedString(appSettings, [
			"core",
			"socket",
			"clientAccessToken"
		]),
		wireTransport: "ws"
	};
}
/** Shell toggles that have no field on {@link CwspRemoteConnectionV1} but map to native `CwspClientSettings`. */
function appSettingsShellToNativeExtras(appSettings) {
	const shell = appSettings.shell && typeof appSettings.shell === "object" && !Array.isArray(appSettings.shell) ? appSettings.shell : {};
	const out = {};
	const shareDest = trimOrUndef(String(shell.clipboardShareDestinationIds ?? ""));
	if (shareDest !== void 0) out.shareIntentDestinationIds = shareDest;
	const inboundAllow = trimOrUndef(String(shell.clipboardInboundAllowIds ?? ""));
	if (inboundAllow !== void 0) out.allowClipboardReadFromIds = inboundAllow;
	if (shell.acceptInboundClipboardData !== void 0) out.acceptInboundClipboard = (shell.acceptInboundClipboardData ?? true) !== false;
	if (shell.applyRemoteClipboardToDevice !== void 0) out.applyRemoteClipboardToDevice = (shell.applyRemoteClipboardToDevice ?? true) !== false;
	if (shell.accessTokenBypassesClipboardAllowlist !== void 0) out.accessTokenBypassesIdPolicy = shell.accessTokenBypassesClipboardAllowlist === true;
	if (shell.acceptContactsBridgeData !== void 0) out.acceptContactsData = shell.acceptContactsBridgeData === true;
	if (shell.acceptSmsBridgeData !== void 0) out.acceptSmsData = shell.acceptSmsBridgeData === true;
	if (shell.autoStartOnBoot !== void 0) out.autoStartOnBoot = shell.autoStartOnBoot !== false;
	if (shell.bridgeDaemonEnabled !== void 0) out.bridgeDaemonEnabled = shell.bridgeDaemonEnabled !== false;
	return out;
}
//#endregion
//#region ../../node_modules/@capacitor/core/dist/index.js
var dist_exports = /* @__PURE__ */ __exportAll({
	Capacitor: () => Capacitor,
	CapacitorException: () => CapacitorException,
	ExceptionCode: () => ExceptionCode,
	SystemBarType: () => SystemBarType,
	SystemBars: () => SystemBars,
	SystemBarsStyle: () => SystemBarsStyle,
	WebPlugin: () => WebPlugin,
	buildRequestInit: () => buildRequestInit,
	registerPlugin: () => registerPlugin
});
/*! Capacitor: https://capacitorjs.com/ - MIT License */
var ExceptionCode;
(function(ExceptionCode) {
	/**
	* API is not implemented.
	*
	* This usually means the API can't be used because it is not implemented for
	* the current platform.
	*/
	ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
	/**
	* API is not available.
	*
	* This means the API can't be used right now because:
	*   - it is currently missing a prerequisite, such as network connectivity
	*   - it requires a particular platform or browser version
	*/
	ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));
var CapacitorException = class extends Error {
	constructor(message, code, data) {
		super(message);
		this.message = message;
		this.code = code;
		this.data = data;
	}
};
var getPlatformId = (win) => {
	var _a, _b;
	if (win === null || win === void 0 ? void 0 : win.androidBridge) return "android";
	else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) return "ios";
	else return "web";
};
var createCapacitor = (win) => {
	const capCustomPlatform = win.CapacitorCustomPlatform || null;
	const cap = win.Capacitor || {};
	const Plugins = cap.Plugins = cap.Plugins || {};
	const getPlatform = () => {
		return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
	};
	const isNativePlatform = () => getPlatform() !== "web";
	const isPluginAvailable = (pluginName) => {
		const plugin = registeredPlugins.get(pluginName);
		if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) return true;
		if (getPluginHeader(pluginName)) return true;
		return false;
	};
	const getPluginHeader = (pluginName) => {
		var _a;
		return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find((h) => h.name === pluginName);
	};
	const handleError = (err) => win.console.error(err);
	const registeredPlugins = /* @__PURE__ */ new Map();
	const registerPlugin = (pluginName, jsImplementations = {}) => {
		const registeredPlugin = registeredPlugins.get(pluginName);
		if (registeredPlugin) {
			console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
			return registeredPlugin.proxy;
		}
		const platform = getPlatform();
		const pluginHeader = getPluginHeader(pluginName);
		let jsImplementation;
		const loadPluginImplementation = async () => {
			if (!jsImplementation && platform in jsImplementations) jsImplementation = typeof jsImplementations[platform] === "function" ? jsImplementation = await jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
			else if (capCustomPlatform !== null && !jsImplementation && "web" in jsImplementations) jsImplementation = typeof jsImplementations["web"] === "function" ? jsImplementation = await jsImplementations["web"]() : jsImplementation = jsImplementations["web"];
			return jsImplementation;
		};
		const createPluginMethod = (impl, prop) => {
			var _a, _b;
			if (pluginHeader) {
				const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find((m) => prop === m.name);
				if (methodHeader) {
					if (methodHeader.rtype === "promise") return (options) => cap.nativePromise(pluginName, prop.toString(), options);
					else return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
				} else if (impl) return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
			} else if (impl) return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
			else throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
		};
		const createPluginMethodWrapper = (prop) => {
			let remove;
			const wrapper = (...args) => {
				const p = loadPluginImplementation().then((impl) => {
					const fn = createPluginMethod(impl, prop);
					if (fn) {
						const p = fn(...args);
						remove = p === null || p === void 0 ? void 0 : p.remove;
						return p;
					} else throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
				});
				if (prop === "addListener") p.remove = async () => remove();
				return p;
			};
			wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
			Object.defineProperty(wrapper, "name", {
				value: prop,
				writable: false,
				configurable: false
			});
			return wrapper;
		};
		const addListener = createPluginMethodWrapper("addListener");
		const removeListener = createPluginMethodWrapper("removeListener");
		const addListenerNative = (eventName, callback) => {
			const call = addListener({ eventName }, callback);
			const remove = async () => {
				const callbackId = await call;
				removeListener({
					eventName,
					callbackId
				}, callback);
			};
			const p = new Promise((resolve) => call.then(() => resolve({ remove })));
			p.remove = async () => {
				console.warn(`Using addListener() without 'await' is deprecated.`);
				await remove();
			};
			return p;
		};
		const proxy = new Proxy({}, { get(_, prop) {
			switch (prop) {
				case "$$typeof": return;
				case "toJSON": return () => ({});
				case "addListener": return pluginHeader ? addListenerNative : addListener;
				case "removeListener": return removeListener;
				default: return createPluginMethodWrapper(prop);
			}
		} });
		Plugins[pluginName] = proxy;
		registeredPlugins.set(pluginName, {
			name: pluginName,
			proxy,
			platforms: /* @__PURE__ */ new Set([...Object.keys(jsImplementations), ...pluginHeader ? [platform] : []])
		});
		return proxy;
	};
	if (!cap.convertFileSrc) cap.convertFileSrc = (filePath) => filePath;
	cap.getPlatform = getPlatform;
	cap.handleError = handleError;
	cap.isNativePlatform = isNativePlatform;
	cap.isPluginAvailable = isPluginAvailable;
	cap.registerPlugin = registerPlugin;
	cap.Exception = CapacitorException;
	cap.DEBUG = !!cap.DEBUG;
	cap.isLoggingEnabled = !!cap.isLoggingEnabled;
	return cap;
};
var initCapacitorGlobal = (win) => win.Capacitor = createCapacitor(win);
var Capacitor = /*#__PURE__*/ initCapacitorGlobal(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
var registerPlugin = Capacitor.registerPlugin;
/**
* Base class web plugins should extend.
*/
var WebPlugin = class {
	constructor() {
		this.listeners = {};
		this.retainedEventArguments = {};
		this.windowListeners = {};
	}
	addListener(eventName, listenerFunc) {
		let firstListener = false;
		if (!this.listeners[eventName]) {
			this.listeners[eventName] = [];
			firstListener = true;
		}
		this.listeners[eventName].push(listenerFunc);
		const windowListener = this.windowListeners[eventName];
		if (windowListener && !windowListener.registered) this.addWindowListener(windowListener);
		if (firstListener) this.sendRetainedArgumentsForEvent(eventName);
		const remove = async () => this.removeListener(eventName, listenerFunc);
		return Promise.resolve({ remove });
	}
	async removeAllListeners() {
		this.listeners = {};
		for (const listener in this.windowListeners) this.removeWindowListener(this.windowListeners[listener]);
		this.windowListeners = {};
	}
	notifyListeners(eventName, data, retainUntilConsumed) {
		const listeners = this.listeners[eventName];
		if (!listeners) {
			if (retainUntilConsumed) {
				let args = this.retainedEventArguments[eventName];
				if (!args) args = [];
				args.push(data);
				this.retainedEventArguments[eventName] = args;
			}
			return;
		}
		listeners.forEach((listener) => listener(data));
	}
	hasListeners(eventName) {
		var _a;
		return !!((_a = this.listeners[eventName]) === null || _a === void 0 ? void 0 : _a.length);
	}
	registerWindowListener(windowEventName, pluginEventName) {
		this.windowListeners[pluginEventName] = {
			registered: false,
			windowEventName,
			pluginEventName,
			handler: (event) => {
				this.notifyListeners(pluginEventName, event);
			}
		};
	}
	unimplemented(msg = "not implemented") {
		return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
	}
	unavailable(msg = "not available") {
		return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
	}
	async removeListener(eventName, listenerFunc) {
		const listeners = this.listeners[eventName];
		if (!listeners) return;
		const index = listeners.indexOf(listenerFunc);
		this.listeners[eventName].splice(index, 1);
		if (!this.listeners[eventName].length) this.removeWindowListener(this.windowListeners[eventName]);
	}
	addWindowListener(handle) {
		window.addEventListener(handle.windowEventName, handle.handler);
		handle.registered = true;
	}
	removeWindowListener(handle) {
		if (!handle) return;
		window.removeEventListener(handle.windowEventName, handle.handler);
		handle.registered = false;
	}
	sendRetainedArgumentsForEvent(eventName) {
		const args = this.retainedEventArguments[eventName];
		if (!args) return;
		delete this.retainedEventArguments[eventName];
		args.forEach((arg) => {
			this.notifyListeners(eventName, arg);
		});
	}
};
/******** END WEB VIEW PLUGIN ********/
/******** COOKIES PLUGIN ********/
/**
* Safely web encode a string value (inspired by js-cookie)
* @param str The string value to encode
*/
var encode = (str) => encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
/**
* Safely web decode a string value (inspired by js-cookie)
* @param str The string value to decode
*/
var decode = (str) => str.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
var CapacitorCookiesPluginWeb = class extends WebPlugin {
	async getCookies() {
		const cookies = document.cookie;
		const cookieMap = {};
		cookies.split(";").forEach((cookie) => {
			if (cookie.length <= 0) return;
			let [key, value] = cookie.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
			key = decode(key).trim();
			value = decode(value).trim();
			cookieMap[key] = value;
		});
		return cookieMap;
	}
	async setCookie(options) {
		try {
			const encodedKey = encode(options.key);
			const encodedValue = encode(options.value);
			const expires = options.expires ? `; expires=${options.expires.replace("expires=", "")}` : "";
			const path = (options.path || "/").replace("path=", "");
			const domain = options.url != null && options.url.length > 0 ? `domain=${options.url}` : "";
			document.cookie = `${encodedKey}=${encodedValue || ""}${expires}; path=${path}; ${domain};`;
		} catch (error) {
			return Promise.reject(error);
		}
	}
	async deleteCookie(options) {
		try {
			document.cookie = `${options.key}=; Max-Age=0`;
		} catch (error) {
			return Promise.reject(error);
		}
	}
	async clearCookies() {
		try {
			const cookies = document.cookie.split(";") || [];
			for (const cookie of cookies) document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, `=;expires=${(/* @__PURE__ */ new Date()).toUTCString()};path=/`);
		} catch (error) {
			return Promise.reject(error);
		}
	}
	async clearAllCookies() {
		try {
			await this.clearCookies();
		} catch (error) {
			return Promise.reject(error);
		}
	}
};
registerPlugin("CapacitorCookies", { web: () => new CapacitorCookiesPluginWeb() });
/**
* Read in a Blob value and return it as a base64 string
* @param blob The blob value to convert to a base64 string
*/
var readBlobAsBase64 = async (blob) => new Promise((resolve, reject) => {
	const reader = new FileReader();
	reader.onload = () => {
		const base64String = reader.result;
		resolve(base64String.indexOf(",") >= 0 ? base64String.split(",")[1] : base64String);
	};
	reader.onerror = (error) => reject(error);
	reader.readAsDataURL(blob);
});
/**
* Normalize an HttpHeaders map by lowercasing all of the values
* @param headers The HttpHeaders object to normalize
*/
var normalizeHttpHeaders = (headers = {}) => {
	const originalKeys = Object.keys(headers);
	return Object.keys(headers).map((k) => k.toLocaleLowerCase()).reduce((acc, key, index) => {
		acc[key] = headers[originalKeys[index]];
		return acc;
	}, {});
};
/**
* Builds a string of url parameters that
* @param params A map of url parameters
* @param shouldEncode true if you should encodeURIComponent() the values (true by default)
*/
var buildUrlParams = (params, shouldEncode = true) => {
	if (!params) return null;
	return Object.entries(params).reduce((accumulator, entry) => {
		const [key, value] = entry;
		let encodedValue;
		let item;
		if (Array.isArray(value)) {
			item = "";
			value.forEach((str) => {
				encodedValue = shouldEncode ? encodeURIComponent(str) : str;
				item += `${key}=${encodedValue}&`;
			});
			item.slice(0, -1);
		} else {
			encodedValue = shouldEncode ? encodeURIComponent(value) : value;
			item = `${key}=${encodedValue}`;
		}
		return `${accumulator}&${item}`;
	}, "").substr(1);
};
/**
* Build the RequestInit object based on the options passed into the initial request
* @param options The Http plugin options
* @param extra Any extra RequestInit values
*/
var buildRequestInit = (options, extra = {}) => {
	const output = Object.assign({
		method: options.method || "GET",
		headers: options.headers
	}, extra);
	const type = normalizeHttpHeaders(options.headers)["content-type"] || "";
	if (typeof options.data === "string") output.body = options.data;
	else if (type.includes("application/x-www-form-urlencoded")) {
		const params = new URLSearchParams();
		for (const [key, value] of Object.entries(options.data || {})) params.set(key, value);
		output.body = params.toString();
	} else if (type.includes("multipart/form-data") || options.data instanceof FormData) {
		const form = new FormData();
		if (options.data instanceof FormData) options.data.forEach((value, key) => {
			form.append(key, value);
		});
		else for (const key of Object.keys(options.data)) form.append(key, options.data[key]);
		output.body = form;
		const headers = new Headers(output.headers);
		headers.delete("content-type");
		output.headers = headers;
	} else if (type.includes("application/json") || typeof options.data === "object") output.body = JSON.stringify(options.data);
	return output;
};
var CapacitorHttpPluginWeb = class extends WebPlugin {
	/**
	* Perform an Http request given a set of options
	* @param options Options to build the HTTP request
	*/
	async request(options) {
		const requestInit = buildRequestInit(options, options.webFetchExtra);
		const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
		const url = urlParams ? `${options.url}?${urlParams}` : options.url;
		const response = await fetch(url, requestInit);
		const contentType = response.headers.get("content-type") || "";
		let { responseType = "text" } = response.ok ? options : {};
		if (contentType.includes("application/json")) responseType = "json";
		let data;
		let blob;
		switch (responseType) {
			case "arraybuffer":
			case "blob":
				blob = await response.blob();
				data = await readBlobAsBase64(blob);
				break;
			case "json":
				data = await response.json();
				break;
			default: data = await response.text();
		}
		const headers = {};
		response.headers.forEach((value, key) => {
			headers[key] = value;
		});
		return {
			data,
			headers,
			status: response.status,
			url: response.url
		};
	}
	/**
	* Perform an Http GET request given a set of options
	* @param options Options to build the HTTP request
	*/
	async get(options) {
		return this.request(Object.assign(Object.assign({}, options), { method: "GET" }));
	}
	/**
	* Perform an Http POST request given a set of options
	* @param options Options to build the HTTP request
	*/
	async post(options) {
		return this.request(Object.assign(Object.assign({}, options), { method: "POST" }));
	}
	/**
	* Perform an Http PUT request given a set of options
	* @param options Options to build the HTTP request
	*/
	async put(options) {
		return this.request(Object.assign(Object.assign({}, options), { method: "PUT" }));
	}
	/**
	* Perform an Http PATCH request given a set of options
	* @param options Options to build the HTTP request
	*/
	async patch(options) {
		return this.request(Object.assign(Object.assign({}, options), { method: "PATCH" }));
	}
	/**
	* Perform an Http DELETE request given a set of options
	* @param options Options to build the HTTP request
	*/
	async delete(options) {
		return this.request(Object.assign(Object.assign({}, options), { method: "DELETE" }));
	}
};
registerPlugin("CapacitorHttp", { web: () => new CapacitorHttpPluginWeb() });
/******** END HTTP PLUGIN ********/
/******** SYSTEM BARS PLUGIN ********/
/**
* Available status bar styles.
*/
var SystemBarsStyle;
(function(SystemBarsStyle) {
	/**
	* Light system bar content on a dark background.
	*
	* @since 8.0.0
	*/
	SystemBarsStyle["Dark"] = "DARK";
	/**
	* For dark system bar content on a light background.
	*
	* @since 8.0.0
	*/
	SystemBarsStyle["Light"] = "LIGHT";
	/**
	* The style is based on the device appearance or the underlying content.
	* If the device is using Dark mode, the system bars content will be light.
	* If the device is using Light mode, the system bars content will be dark.
	*
	* @since 8.0.0
	*/
	SystemBarsStyle["Default"] = "DEFAULT";
})(SystemBarsStyle || (SystemBarsStyle = {}));
/**
* Available system bar types.
*/
var SystemBarType;
(function(SystemBarType) {
	/**
	* The top status bar on both Android and iOS.
	*
	* @since 8.0.0
	*/
	SystemBarType["StatusBar"] = "StatusBar";
	/**
	* The navigation bar (or gesture bar on iOS) on both Android and iOS.
	*
	* @since 8.0.0
	*/
	SystemBarType["NavigationBar"] = "NavigationBar";
})(SystemBarType || (SystemBarType = {}));
var SystemBarsPluginWeb = class extends WebPlugin {
	async setStyle() {
		this.unavailable("not available for web");
	}
	async setAnimation() {
		this.unavailable("not available for web");
	}
	async show() {
		this.unavailable("not available for web");
	}
	async hide() {
		this.unavailable("not available for web");
	}
};
var SystemBars = registerPlugin("SystemBars", { web: () => new SystemBarsPluginWeb() });
//#endregion
//#region src/shared/routing/channel/UniformInterop.ts
/**
* Shared interop helpers for CWSP-shell transport envelopes.
*
* WHY: the main thread, service worker, CRX runtime, and native/worker bridges
* all need the same destination, protocol, and envelope normalization without
* each importing the full `fest/uniform` runtime graph.
*/
var PROTOCOL_ALIASES = {
	"chrome-runtime": "chrome",
	"chrome-tabs": "chrome",
	"chrome-port": "chrome",
	"chrome-external": "chrome",
	"service-worker": "worker",
	"service-worker:http": "worker",
	"service": "worker",
	"sw": "worker",
	"broadcast-channel": "broadcast",
	"broadcastchannel": "broadcast",
	"websocket": "socket",
	"ws": "socket",
	"socket-io": "socket",
	"socketio": "socket"
};
var TRANSPORT_ALIASES = {
	"service": "service-worker",
	"service-worker:http": "service-worker",
	"sw": "service-worker",
	"ws": "websocket",
	"socket": "websocket",
	"socketio": "socket-io",
	"chrome": "chrome-runtime"
};
var PURPOSES = /* @__PURE__ */ new Set([
	"invoke",
	"mail",
	"attach",
	"deliver",
	"defer"
]);
var randomId = () => {
	if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
	return `interop_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
};
var normalizePurpose = (value) => {
	const raw = Array.isArray(value) ? value : value ? [value] : ["mail"];
	const deduped = [];
	for (const entry of raw) if (PURPOSES.has(entry) && !deduped.includes(entry)) deduped.push(entry);
	return deduped.length > 0 ? deduped : ["mail"];
};
/**
* Normalize the protocol family advertised in envelopes and bridge packets.
*/
var normalizeInteropProtocolName = (value) => {
	const raw = String(value || "").trim().toLowerCase();
	if (!raw) return "unknown";
	return PROTOCOL_ALIASES[raw] || raw;
};
/**
* Normalize transport hints to one transport taxonomy for diagnostics and docs.
*/
var normalizeInteropTransportName = (value) => {
	const raw = String(value || "").trim().toLowerCase();
	if (!raw) return void 0;
	return TRANSPORT_ALIASES[raw] || raw;
};
/**
* Create one shared envelope shape that can be used by main-thread, SW, and CRX
* adapters before converting to `fest/uniform` runtime objects.
*/
var createInteropEnvelope = (input) => {
	const id = String(input.id || input.uuid || "").trim() || randomId();
	const source = String(input.source || input.sender || input.srcChannel || "interop").trim() || "interop";
	const destination = normalizeDestination$1(input.destination || input.target);
	const destinations = Array.isArray(input.destinations) && input.destinations.length > 0 ? [...new Set(input.destinations.map((entry) => normalizeDestination$1(entry)).filter(Boolean))] : destination ? getDestinationAliases$1(destination) : [];
	const payload = input.payload ?? input.data;
	const timestamp = Number(input.timestamp ?? Date.now()) || Date.now();
	return {
		id,
		uuid: id,
		type: String(input.type || "request"),
		source,
		sender: String(input.sender || source),
		destination: destination || void 0,
		target: destination || void 0,
		contentType: input.contentType ? String(input.contentType) : void 0,
		data: payload,
		payload,
		metadata: {
			timestamp,
			...input.metadata || {}
		},
		purpose: normalizePurpose(input.purpose),
		protocol: normalizeInteropProtocolName(input.protocol),
		transport: normalizeInteropTransportName(input.transport),
		redirect: Boolean(input.redirect),
		flags: { ...input.flags || {} },
		op: String(input.op || (String(input.type || "").startsWith("response:") ? "response" : "deliver")),
		timestamp,
		srcChannel: String(input.srcChannel || source),
		dstChannel: input.dstChannel ?? (destination || void 0),
		destinations,
		ids: {
			byId: source,
			from: source,
			sender: source,
			destinations,
			...input.ids || {}
		},
		urls: Array.isArray(input.urls) ? [...input.urls] : [],
		tokens: Array.isArray(input.tokens) ? [...input.tokens] : [],
		toRoles: Array.isArray(input.toRoles) ? [...input.toRoles] : [],
		tabId: input.tabId,
		frameId: input.frameId,
		status: typeof input.status === "number" ? input.status : void 0,
		result: input.result,
		results: input.results,
		error: input.error
	};
};
/**
* Map an envelope-like payload into the app's unified-message shape.
*/
var toUnifiedInteropMessage = (input) => {
	const envelope = createInteropEnvelope(input);
	return {
		id: envelope.id,
		type: envelope.type,
		source: envelope.source,
		destination: envelope.destination,
		contentType: envelope.contentType,
		data: envelope.data,
		metadata: {
			...envelope.metadata,
			protocol: envelope.protocol,
			transport: envelope.transport,
			sender: envelope.sender,
			srcChannel: envelope.srcChannel,
			dstChannel: envelope.dstChannel,
			destinations: envelope.destinations,
			ids: envelope.ids,
			flags: envelope.flags,
			status: envelope.status,
			error: envelope.error
		}
	};
};
//#endregion
//#region src/shared/routing/native/cws-bridge.ts
var cws_bridge_exports = /* @__PURE__ */ __exportAll({
	CwsBridge: () => CwsBridge$1,
	fetchCwsShellInfo: () => fetchCwsShellInfo$1,
	getNativeUnifiedSettings: () => getNativeUnifiedSettings$1,
	initCwsNativeBridge: () => initCwsNativeBridge$1,
	invokeCwsNative: () => invokeCwsNative,
	invokeCwsPlatformIPC: () => invokeCwsPlatformIPC$1,
	isCapacitorCwsNativeShell: () => isCapacitorCwsNativeShell$1,
	isCwsNativeIpcAvailable: () => isCwsNativeIpcAvailable$1,
	isElectronCwsNativeShell: () => isElectronCwsNativeShell$1,
	patchNativeUnifiedSettingsDetailed: () => patchNativeUnifiedSettingsDetailed$1
});
var CwsBridgeWeb$1 = class extends WebPlugin {
	async getShellInfo() {
		return {
			shell: "browser",
			bridge: "cws-bridge",
			native: false,
			platform: typeof globalThis.navigator !== "undefined" ? "web" : "unknown"
		};
	}
	async invoke(options) {
		const envelope = normalizeBridgeEnvelope$1(options.channel, options.payload, options.envelope);
		return {
			ok: true,
			channel: options.channel,
			echo: { ...options.payload ?? {} },
			envelope
		};
	}
};
/**
* WHY: CRX bundles `@capacitor/core` with a first `registerPlugin("CwsBridge")`, then
* Settings dynamic-imports this module and would register again → console warn.
* INVARIANT: one Capacitor plugin proxy per JS realm.
*/
var registerCwsBridgeOnce$1 = () => {
	const g = globalThis;
	if (g.__CWS_BRIDGE_PLUGIN__) return g.__CWS_BRIDGE_PLUGIN__;
	const existing = g.Capacitor?.Plugins?.CwsBridge;
	if (existing) {
		g.__CWS_BRIDGE_PLUGIN__ = existing;
		return existing;
	}
	const plugin = registerPlugin("CwsBridge", { web: () => new CwsBridgeWeb$1() });
	g.__CWS_BRIDGE_PLUGIN__ = plugin;
	return plugin;
};
var CwsBridge$1 = registerCwsBridgeOnce$1();
var bridgeInitDone$1 = false;
var normalizeBridgeEnvelope$1 = (channel, payload, envelope) => {
	if (envelope && isProtocolEnvelope(envelope)) return normalizeProtocolEnvelope(envelope);
	const interop = createInteropEnvelope({
		purpose: "invoke",
		protocol: "service",
		transport: "service-worker",
		type: "invoke",
		op: "invoke",
		source: "webview",
		destination: "native",
		srcChannel: "webview",
		dstChannel: "native",
		payload: payload ?? {},
		data: payload ?? {}
	});
	return createProtocolEnvelope({
		...interop,
		path: ["cws-bridge", channel]
	});
};
var normalizeInvokeResultEnvelope$1 = (channel, payload, result) => {
	if (result?.envelope && isProtocolEnvelope(result.envelope)) return normalizeProtocolEnvelope(result.envelope);
	const interop = createInteropEnvelope({
		purpose: "invoke",
		protocol: "service",
		transport: "service-worker",
		type: result.ok ? "response" : "ack",
		op: "invoke",
		source: "native",
		destination: "webview",
		srcChannel: "native",
		dstChannel: "webview",
		payload,
		data: payload
	});
	return createProtocolEnvelope({
		...interop,
		path: ["cws-bridge", channel]
	});
};
/**
* Initialize the native bridge surface and normalize inbound native messages.
*
* AI-READ: this is the TypeScript side of the WebView/native boundary, so it
* is one of the first places to inspect when networking works natively but not
* through the web shell or vice versa.
*/
/** Live `getShellInfo` — first init can cache the web stub before the Capacitor plugin is ready. */
async function fetchCwsShellInfo$1(options) {
	const existing = typeof globalThis.window !== "undefined" ? globalThis.window.__CWS_SHELL_INFO__ ?? null : null;
	if (!options?.force && existing?.accentColor) return existing;
	try {
		const info = await CwsBridge$1.getShellInfo();
		if (info && typeof globalThis.window !== "undefined") globalThis.window.__CWS_SHELL_INFO__ = {
			...existing || {},
			...info
		};
		return info ?? existing;
	} catch {
		return existing;
	}
}
async function initCwsNativeBridge$1() {
	if (bridgeInitDone$1) {
		const cached = typeof globalThis.window !== "undefined" ? globalThis.window.__CWS_SHELL_INFO__ ?? null : null;
		if (cached?.accentColor || cached?.native) return cached;
		return fetchCwsShellInfo$1({ force: true });
	}
	bridgeInitDone$1 = true;
	const electronInfoFn = globalThis.window?.electronBridge?.getShellInfo;
	if (typeof electronInfoFn === "function") try {
		const info = await electronInfoFn();
		if (typeof globalThis.window !== "undefined") globalThis.window.__CWS_SHELL_INFO__ = info;
		return info;
	} catch {}
	try {
		const info = await CwsBridge$1.getShellInfo();
		if (typeof globalThis.window !== "undefined") globalThis.window.__CWS_SHELL_INFO__ = info;
		try {
			await CwsBridge$1.addListener("nativeMessage", (event) => {
				const payload = event && typeof event.payload === "object" && event.payload != null ? event.payload : {};
				const envelopeRaw = payload?.envelope;
				const envelope = envelopeRaw && typeof envelopeRaw === "object" && isProtocolEnvelope(envelopeRaw) ? normalizeProtocolEnvelope(envelopeRaw) : createProtocolEnvelope(createInteropEnvelope({
					purpose: "mail",
					protocol: "service",
					transport: "service-worker",
					type: "act",
					op: "deliver",
					source: "native",
					destination: "webview",
					srcChannel: "native",
					dstChannel: "webview",
					payload,
					data: payload
				}));
				globalThis.dispatchEvent(new CustomEvent("cws-native-message", { detail: {
					event,
					envelope,
					payload
				} }));
			});
		} catch {}
		return info;
	} catch {
		return null;
	}
}
/** Detect the Capacitor/CWSAndroid shell where native networking may replace browser transport rules. */
var isCapacitorCwsNativeShell$1 = () => {
	try {
		const c = globalThis.Capacitor;
		return typeof c?.isNativePlatform === "function" && Boolean(c.isNativePlatform());
	} catch {
		return false;
	}
};
/** Detect the Electron shell, which uses its own invoke bridge instead of Capacitor plugins. */
var isElectronCwsNativeShell$1 = () => {
	try {
		return Boolean(globalThis.window?.electronBridge?.invoke);
	} catch {
		return false;
	}
};
/** Report whether frontend code can rely on native IPC instead of web-only fallbacks. */
var isCwsNativeIpcAvailable$1 = () => {
	if (isElectronCwsNativeShell$1()) return true;
	if (isCapacitorCwsNativeShell$1()) return true;
	try {
		const shell = globalThis.window?.__CWS_SHELL_INFO__;
		return Boolean(shell?.native);
	} catch {
		return false;
	}
};
/** Opaque channel → Kotlin/Compose (override {@code CwsBridgePlugin.invoke} in CWSAndroid for real routing). */
async function invokeCwsNative(channel, payload) {
	const envelope = normalizeBridgeEnvelope$1(channel, payload);
	const result = await CwsBridge$1.invoke({
		channel,
		payload,
		envelope
	});
	return {
		...result,
		envelope: normalizeInvokeResultEnvelope$1(channel, payload ?? {}, result)
	};
}
/**
* Canonical IPC invoker for frontend modules:
* - Uses CWSAndroid native bridge envelope transport when available
* - Falls back to web plugin-compatible invoke otherwise
*/
async function invokeCwsPlatformIPC$1(input) {
	const channel = (input.channel || "").trim() || (Array.isArray(input.envelope?.path) && input.envelope?.path.length ? String(input.envelope.path[input.envelope.path.length - 1] || "").trim() : "") || "default";
	const payload = input.payload && typeof input.payload === "object" ? input.payload : {};
	const envelope = normalizeBridgeEnvelope$1(channel, payload, input.envelope);
	const electronInvoke = globalThis.window?.electronBridge?.invoke;
	if (typeof electronInvoke === "function") {
		const result = await electronInvoke({
			channel,
			payload,
			envelope
		});
		return {
			...result,
			envelope: normalizeInvokeResultEnvelope$1(channel, payload, result)
		};
	}
	if (!isCwsNativeIpcAvailable$1()) {
		const result = await CwsBridge$1.invoke({
			channel,
			payload,
			envelope
		});
		return {
			...result,
			envelope: normalizeInvokeResultEnvelope$1(channel, payload, result)
		};
	}
	try {
		const result = await CwsBridge$1.invoke({
			channel,
			payload,
			envelope
		});
		return {
			...result,
			envelope: normalizeInvokeResultEnvelope$1(channel, payload, result)
		};
	} catch (error) {
		console.warn("[cws-bridge] native invoke failed:", error);
		if (isCapacitorCwsNativeShell$1()) return {
			ok: false,
			channel,
			echo: {
				...payload ?? {},
				error: String(error instanceof Error ? error.message : error)
			},
			envelope: normalizeInvokeResultEnvelope$1(channel, payload, {
				ok: false,
				channel,
				echo: payload ?? {}
			})
		};
		const result = await new CwsBridgeWeb$1().invoke({
			channel,
			payload,
			envelope
		});
		return {
			...result,
			envelope: normalizeInvokeResultEnvelope$1(channel, payload, result)
		};
	}
}
async function getNativeUnifiedSettings$1() {
	try {
		const result = await invokeCwsPlatformIPC$1({ channel: "settings:get" });
		if (!result?.ok) return null;
		return result.appSettings && typeof result.appSettings === "object" ? result.appSettings : null;
	} catch {
		return null;
	}
}
async function patchNativeUnifiedSettingsDetailed$1(appSettings) {
	try {
		const airpadJson = stringifyCwspRemoteConnectionV1(appSettingsToRemoteConnectionV1(appSettings));
		const shellPatch = appSettingsShellToNativeExtras(appSettings);
		try {
			globalThis.localStorage?.setItem?.(AIRPAD_REMOTE_CONFIG_STORAGE_KEY, airpadJson);
		} catch {}
		try {
			const ch = new BroadcastChannel(CWSP_REMOTE_CONFIG_SYNC_CHANNEL);
			ch.postMessage({
				airpadJson,
				shellPatch
			});
			ch.close();
		} catch {}
		const result = await withTimeout(invokeCwsPlatformIPC$1({
			channel: "settings:patch",
			payload: {
				appSettings,
				airpadJson,
				shellPatch
			}
		}), 6e3, "settings:patch timed out").catch((error) => ({
			ok: false,
			channel: "settings:patch",
			echo: { error: String(error instanceof Error ? error.message : error) }
		}));
		const echo = result?.echo;
		if (!(result?.ok === true || result?.ok !== false && !echo?.error && result?.channel === "settings:patch")) return {
			ok: false,
			error: String(echo?.error ?? "settings:patch rejected")
		};
		return { ok: true };
	} catch (e) {
		return {
			ok: false,
			error: String(e instanceof Error ? e.message : e)
		};
	}
}
//#endregion
//#region ../../modules/projects/cwsp-shared/src/wire-target-id.ts
function parseWireTargetEntry(raw) {
	const t = String(raw ?? "").trim();
	if (!t) return { nodeId: "" };
	const idx = t.lastIndexOf("::");
	if (idx <= 0) return { nodeId: t };
	const nodeId = t.slice(0, idx).trim();
	const accessToken = t.slice(idx + 2).trim();
	if (!nodeId) return { nodeId: t };
	return {
		nodeId,
		accessToken: accessToken || void 0
	};
}
/** Split comma / semicolon / whitespace list or legacy array into parsed entries (dedupe by nodeId + token). */
function parseWireTargetList$1(value) {
	if (Array.isArray(value)) {
		const out = [];
		const seen = /* @__PURE__ */ new Set();
		for (const entry of value) {
			if (typeof entry === "string") {
				for (const parsed of parseWireTargetList$1(entry)) pushUnique(out, seen, parsed);
				continue;
			}
			if (!entry || typeof entry !== "object") continue;
			const record = entry;
			const nodeId = String(record.nodeId ?? record.id ?? "").trim();
			if (!nodeId) continue;
			pushUnique(out, seen, {
				nodeId,
				accessToken: (record.accessToken != null ? String(record.accessToken).trim() : void 0) || void 0
			});
		}
		return out;
	}
	if (typeof value !== "string") return [];
	const parts = splitMultiValueList(value);
	const out = [];
	const seen = /* @__PURE__ */ new Set();
	for (const p of parts) {
		const e = parseWireTargetEntry(p);
		if (!e.nodeId) continue;
		pushUnique(out, seen, e);
	}
	return out;
}
var pushUnique = (out, seen, e) => {
	const key = `${e.nodeId.toLowerCase()}::${e.accessToken ?? ""}`;
	if (seen.has(key)) return;
	seen.add(key);
	out.push(e);
};
//#endregion
//#region ../../modules/projects/cwsp-shared/src/cws-client-wire-defaults.ts
var CWSP_WIRE_ARCHETYPE_AIRPAD = "airpad";
/** Wire query value when logical type is exchanger-* (gateway compatibility). */
var CWSP_WIRE_CONNECTION_GATEWAY = "first-order";
function resolveWireArchetype(value) {
	const raw = typeof value === "string" ? value.trim() : "";
	if (raw) return raw;
	return CWSP_WIRE_ARCHETYPE_AIRPAD;
}
function resolveWireConnectionType(value) {
	const raw = typeof value === "string" ? value.trim().toLowerCase() : "";
	if (!raw || raw === "auto") return CWSP_WIRE_CONNECTION_GATEWAY;
	if (raw.includes("exchanger")) return CWSP_WIRE_CONNECTION_GATEWAY;
	return typeof value === "string" ? value.trim() : CWSP_WIRE_CONNECTION_GATEWAY;
}
//#endregion
//#region ../../modules/projects/cwsp-shared/src/airpad-motion-adaptive.ts
/**
* Adaptive AirPad motion rate (IPS / Hz) — client send cadence + desk apply governor.
* Tiers: 60 → 30 when the channel cannot keep pace.
*/
var AIRPAD_MOTION_IPS_TIERS = [60, 30];
var motionIntervalMsForHz = (hz) => Math.max(1, Math.round(1e3 / Math.max(1, hz)));
var motionIntervalMsForIps = motionIntervalMsForHz;
var inferAirpadMotionPathClass = (hint) => {
	const offHome = isOffHomeFleetNetwork(hint.pageHost);
	const gatewayEndpoint = isGatewayHttpsOrigin(hint.endpointUrl) || isGatewayHttpsOrigin(hint.directUrl);
	const routedViaGateway = Boolean(hint.routedDesk) && gatewayEndpoint;
	if (offHome && routedViaGateway) return "wan-wan";
	if (offHome) return "wan";
	return "lan";
};
var initialMotionIpsForPath = (path) => {
	if (path === "lan") return 60;
	return 30;
};
var readPerfNow$1 = () => {
	try {
		const perf = globalThis.performance;
		if (typeof perf?.now === "function") return perf.now();
	} catch {}
	return Date.now();
};
var LAG_SAMPLE_CAP = 10;
var LAG_DOWNGRADE_RATIO = 1.45;
var STABLE_UPGRADE_SAMPLES = 48;
var tierIndexForIps = (ips) => {
	const idx = AIRPAD_MOTION_IPS_TIERS.indexOf(ips);
	return idx >= 0 ? idx : AIRPAD_MOTION_IPS_TIERS.length - 1;
};
var AdaptiveMotionRateController = class {
	pathHint;
	tierIndex = 0;
	lastSendAt = 0;
	lagSamples = [];
	stableSamples = 0;
	constructor(pathHint, initialIps) {
		this.pathHint = pathHint;
		if (initialIps !== void 0) this.tierIndex = tierIndexForIps(initialIps);
		else this.resetTier();
	}
	resetTier() {
		const path = inferAirpadMotionPathClass(this.pathHint());
		this.tierIndex = tierIndexForIps(initialMotionIpsForPath(path));
		this.lastSendAt = 0;
		this.lagSamples = [];
		this.stableSamples = 0;
	}
	setTierByIps(ips) {
		this.tierIndex = tierIndexForIps(ips);
		this.lagSamples = [];
		this.stableSamples = 0;
	}
	getIps() {
		return AIRPAD_MOTION_IPS_TIERS[this.tierIndex];
	}
	/** @deprecated use {@link getIps} */
	getHz() {
		return this.getIps();
	}
	getIntervalMs() {
		return motionIntervalMsForIps(this.getIps());
	}
	isWanMotionPath() {
		return inferAirpadMotionPathClass(this.pathHint()) !== "lan";
	}
	/** Step down when overload is detected (queue depth, arrival flood). */
	forceDowngrade(steps = 1) {
		const next = Math.min(AIRPAD_MOTION_IPS_TIERS.length - 1, this.tierIndex + Math.max(1, steps));
		if (next !== this.tierIndex) {
			this.tierIndex = next;
			this.lagSamples = [];
			this.stableSamples = 0;
		}
	}
	/** Record a completed motion flush — adapt when cadence lags behind target IPS. */
	onMotionSent() {
		const now = readPerfNow$1();
		const expected = this.getIntervalMs();
		if (this.lastSendAt > 0) {
			const gap = now - this.lastSendAt;
			if (gap > expected * LAG_DOWNGRADE_RATIO) {
				this.lagSamples.push(gap);
				this.stableSamples = 0;
				if (this.lagSamples.length >= LAG_SAMPLE_CAP) {
					if (this.lagSamples.reduce((sum, entry) => sum + entry, 0) / this.lagSamples.length > expected * LAG_DOWNGRADE_RATIO && this.tierIndex < AIRPAD_MOTION_IPS_TIERS.length - 1) this.tierIndex += 1;
					this.lagSamples = [];
				}
			} else if (gap <= expected * 1.15) {
				this.lagSamples = [];
				this.stableSamples += 1;
				if (this.stableSamples >= STABLE_UPGRADE_SAMPLES && this.tierIndex > 0) {
					this.tierIndex -= 1;
					this.stableSamples = 0;
				}
			}
		}
		this.lastSendAt = now;
	}
};
var sharedController = null;
var getAirpadMotionRateController = (pathHint) => {
	if (!sharedController) sharedController = new AdaptiveMotionRateController(pathHint ?? (() => ({})));
	return sharedController;
};
/** Called from websocket.ts at module load. */
function setAirpadCredentialInvalidator(fn) {}
//#endregion
//#region ../../modules/projects/cwsp-shared/src/remote-connection-runtime.ts
var toTrimmedString = (value) => {
	if (typeof value === "number") return Number.isFinite(value) ? String(value) : "";
	return typeof value === "string" ? value.trim() : "";
};
var hasExplicitPort = (value) => {
	const valueTrimmed = value.trim();
	if (!valueTrimmed) return false;
	const hostSpec = valueTrimmed.replace(/^[a-z][a-z0-9+.-]*:\/\//i, "").split("/")[0];
	const at = hostSpec.lastIndexOf(":");
	if (at <= 0) return false;
	const port = hostSpec.slice(at + 1);
	return /^\d{1,5}$/.test(port);
};
var appendPort = (value, port) => {
	const valueTrimmed = value.trim();
	if (!valueTrimmed) return "";
	const portTrimmed = port.trim();
	if (!portTrimmed) return valueTrimmed;
	if (hasExplicitPort(valueTrimmed)) return valueTrimmed;
	return `${valueTrimmed}:${portTrimmed}`;
};
var normalizeOriginUrl = (value) => normalizeConnectHostInput(toTrimmedString(value));
var normalizeWireTransport = (value) => {
	const raw = toTrimmedString(value).toLowerCase();
	if (!raw) return void 0;
	if (raw === "ws" || raw === "wss" || raw === "socket" || raw === "socket.io" || raw === "socketio") return "ws";
};
var normalizeWireNodeId = normalizeWireNodeIdForWire;
var joinUniqueUrls = (...values) => {
	return Array.from(new Set(values.map((entry) => normalizeOriginUrl(entry)).filter(Boolean))).join(", ");
};
/** If AirPad storage says `https://<this-host>:8434` but the app tab is `https://<this-host>/` (443), use tab origin. */
/** Control SPA / markdown hosts — never a CWSP hub `/ws` target. */
var CONTROL_SPA_PAGE_HOSTS = /* @__PURE__ */ new Set([
	"cwsp.u2re.space",
	"www.cwsp.u2re.space",
	"md.u2re.space",
	"www.md.u2re.space"
]);
var isControlSpaHostName = (host) => CONTROL_SPA_PAGE_HOSTS.has(String(host || "").trim().toLowerCase());
var isControlSpaPage = () => {
	try {
		if (String(document.documentElement?.dataset?.cwspSurface || "").toLowerCase().trim() === "cwsp-control") return true;
	} catch {}
	try {
		return isControlSpaHostName(String(globalThis.location?.hostname || ""));
	} catch {
		return false;
	}
};
var urlIsControlSpaOrigin = (urlStr) => {
	const trimmed = toTrimmedString(urlStr);
	if (!trimmed) return false;
	try {
		const raw = /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
		return isControlSpaHostName(new URL(raw).hostname);
	} catch {
		return /cwsp\.u2re\.space|md\.u2re\.space/i.test(trimmed);
	}
};
/**
* Detect public (non-loopback) tab origins so we can ignore dev-only loopback remote URLs in stored settings.
*/
var isBrowserPublicOrigin = () => {
	if (typeof globalThis.location === "undefined") return false;
	const proto = String(globalThis.location.protocol || "").toLowerCase();
	if (proto === "chrome-extension:" || proto === "moz-extension:" || proto === "safari-web-extension:") return false;
	const h = String(globalThis.location.hostname || "").toLowerCase();
	if (!h || h === "localhost" || h === "127.0.0.1" || h === "[::1]") return false;
	if (/^[a-p]{32}$/.test(h)) return false;
	return true;
};
var urlHostIsLoopback = (urlStr) => {
	const trimmed = toTrimmedString(urlStr);
	if (!trimmed) return false;
	try {
		const raw = /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
		const h = new URL(raw.endsWith("/") ? raw : `${raw.replace(/\/+$/, "")}/`).hostname.toLowerCase();
		return h === "localhost" || h === "127.0.0.1" || h === "[::1]";
	} catch {
		return false;
	}
};
/**
* When the tab is on a real deployed host but every configured remote URL is loopback-only,
* use {@link globalThis.location.origin} at read-time instead so websocket probes reach this deployment.
* Does not rewrite IndexedDB / AirPad localStorage.
*
* INVARIANT: Control SPA (`cwsp.u2re.space`) is not a hub — never rewrite to page origin
* (that produced `wss://cwsp.u2re.space/ws`). Prefer real URLs or WAN gateway fallback.
*/
var sanitizeLoopbackRemoteOnPublicOrigin = (value) => {
	const trimmed = value.trim();
	if (!trimmed || !isBrowserPublicOrigin()) return trimmed;
	const parts = splitConnectHostList(trimmed);
	if (!parts.length) return trimmed;
	const usable = parts.filter((p) => !urlIsControlSpaOrigin(p) && !urlHostIsLoopback(p));
	if (usable.length) return usable.join(", ");
	if (!parts.every((p) => urlHostIsLoopback(p) || urlIsControlSpaOrigin(p))) return trimmed;
	if (isControlSpaPage()) return resolveWanGatewayConnectOrigin("");
	try {
		const origin = normalizeOriginUrl(globalThis.location.origin);
		if (urlIsControlSpaOrigin(origin)) return resolveWanGatewayConnectOrigin("");
		return origin;
	} catch {
		return trimmed;
	}
};
var rewriteEndpointToMatchHttpsTab = (originLike) => {
	const trimmed = toTrimmedString(originLike);
	if (!trimmed || typeof globalThis.location === "undefined" || !globalThis.location.hostname) return trimmed;
	if (urlIsControlSpaOrigin(trimmed) || isControlSpaPage()) return trimmed;
	try {
		const raw = /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
		const u = new URL(raw.endsWith("/") ? raw : `${raw.replace(/\/+$/, "")}/`);
		const tab = globalThis.location;
		if (isControlSpaHostName(u.hostname) || isControlSpaHostName(tab.hostname)) return trimmed;
		if (u.hostname === tab.hostname && u.protocol === "https:" && u.port === "8434" && tab.protocol === "https:" && (tab.port === "" || tab.port === "443")) return normalizeOriginUrl(tab.origin);
	} catch {}
	return trimmed;
};
function loadStoredRemoteConfig() {
	try {
		const raw = globalThis?.localStorage?.getItem?.(AIRPAD_REMOTE_CONFIG_STORAGE_KEY);
		if (!raw) return {};
		const parsed = JSON.parse(raw);
		if (!parsed || typeof parsed !== "object") return {};
		const source = parsed;
		const sourceHost = migrateLegacyCwspPublicPort(toTrimmedString(source.host));
		const sourceTunnelHost = migrateLegacyCwspPublicPort(toTrimmedString(source.tunnelHost));
		const sourcePort = toTrimmedString(source.port);
		if (sourcePort === "8443" || sourcePort === "8343") source.port = "8434";
		parsed.host = sourceHost;
		if (parsed.tunnelHost) parsed.tunnelHost = sourceTunnelHost;
		parsed.endpointUrl = migrateLegacyCwspPublicPort(toTrimmedString(parsed.endpointUrl));
		parsed.directUrl = migrateLegacyCwspPublicPort(toTrimmedString(parsed.directUrl));
		parsed.quickConnectValue = migrateLegacyCwspPublicPort(toTrimmedString(parsed.quickConnectValue));
		if (!(sourcePort !== "" || sourceTunnelHost !== "")) return parsed;
		const hostParts = [];
		const seen = /* @__PURE__ */ new Set();
		const addHostPart = (hostValue) => {
			const normalized = (sourcePort ? appendPort(hostValue, sourcePort) : hostValue).trim();
			if (!normalized || seen.has(normalized)) return;
			seen.add(normalized);
			hostParts.push(normalized);
		};
		if (sourceHost) addHostPart(sourceHost);
		if (sourceTunnelHost) addHostPart(sourceTunnelHost);
		if (!sourceHost && !sourceTunnelHost && sourcePort && location?.hostname) addHostPart(`${location.hostname}:${sourcePort}`);
		return {
			...parsed,
			host: hostParts.join(", "),
			_legacyMigrated: true
		};
	} catch {
		return {};
	}
}
var readGlobalAirpadValue = (keys) => {
	const globalValue = globalThis.AIRPAD_CONFIG;
	for (const key of keys) {
		const direct = globalThis[key];
		if (typeof direct === "string" && direct.trim()) return direct.trim();
		const fromConfig = globalValue && typeof globalValue === "object" && typeof globalValue[key] === "string" ? globalValue[key] : "";
		if (fromConfig.trim()) return String(fromConfig).trim();
	}
	return "";
};
var scrubStaleGuestAirpadIdentity = () => {
	remoteConfig.clientId = sanitizeFleetSelfWireNodeId(remoteConfig.clientId);
	const sanitizedDest = sanitizeFleetRouteTarget(remoteConfig.destinationId, remoteConfig.endpointUrl);
	if (sanitizedDest) remoteConfig.destinationId = sanitizedDest;
	else if (remoteConfig.destinationId && !isAssociableFleetWireNodeId(remoteConfig.destinationId)) remoteConfig.destinationId = "";
};
function persistRemoteConfig() {
	scrubStaleGuestAirpadIdentity();
	try {
		const payload = {
			v: 1,
			quickConnectValue: remoteConfig.quickConnectValue,
			endpointUrl: remoteConfig.endpointUrl,
			directUrl: remoteConfig.directUrl,
			destinationId: remoteConfig.destinationId,
			accessToken: remoteConfig.accessToken,
			clientId: remoteConfig.clientId,
			peerInstanceId: remoteConfig.peerInstanceId,
			identificationToken: remoteConfig.identificationToken.trim() || void 0,
			clientAccessToken: remoteConfig.clientAccessToken.trim() || void 0
		};
		const wireTransport = normalizeWireTransport(remoteConfig.wireTransport);
		if (wireTransport) payload.wireTransport = wireTransport;
		globalThis?.localStorage?.setItem?.(AIRPAD_REMOTE_CONFIG_STORAGE_KEY, JSON.stringify(payload));
	} catch {}
}
var createPeerInstanceId = () => {
	if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
	return `ap-${Date.now().toString(16)}-${Math.random().toString(16).slice(2)}`;
};
var remoteConfig = {
	quickConnectValue: "",
	endpointUrl: "",
	directUrl: "",
	accessToken: "",
	destinationId: "",
	clientId: "",
	peerInstanceId: "",
	identificationToken: "",
	clientAccessToken: ""
};
/** IndexedDB “Server” tab: userId fallback for AirPad client identity (CWS_ASSOCIATED_*). */
var coreIdentityBridgeUserId = "";
var coreIdentityBridgeUserKey = "";
var coreIdentityUseForAirpad = true;
/** Shell / Capacitor toggles (coordinator + future native bridges). */
var shellRemoteClipboardEnabled = true;
var shellApplyRemoteToDevice = true;
var shellPushLocalClipboard = false;
var shellClipboardPushIntervalMs = 2e3;
var shellClipboardBroadcastTargets = "";
var shellMaintainHubSocket = false;
var shellPreferNativeWebsocket = true;
var shellNativeSmsEnabled = false;
var shellNativeContactsEnabled = true;
var shellAcceptInboundClipboardData = true;
var shellClipboardInboundAllowIds = "";
var shellAccessTokenBypassesClipboardAllowlist = false;
var coreSocketProtocol = "auto";
var coreSocketRouteTarget = "";
var coreSocketSelfId = "";
var coreSocketAccessToken = "";
var coreSocketClientAccessToken = "";
var coreSocketTransportMode = "plaintext";
var coreSocketTransportSecret = "";
var coreSocketConnectionType = "";
var coreSocketArchetype = "";
var remoteHost = "";
var refreshRemoteHost = () => {
	const endpoint = remoteConfig.endpointUrl.trim();
	const direct = remoteConfig.directUrl.trim();
	const rawDest = remoteConfig.destinationId.trim();
	const routeTarget = sanitizeFleetRouteTarget(rawDest, endpoint) || (isAssociableFleetWireNodeId(rawDest) ? normalizeWireNodeId(rawDest) : "");
	const routeTargetIsGateway = isFleetGatewayWireNodeId(routeTarget);
	const routeTargetHost = wireNodeIdToLanHost(routeTarget);
	const directMatchesGatewayTarget = routeTargetIsGateway && (isGatewayHttpsOrigin(direct) || Boolean(routeTargetHost && direct.includes(routeTargetHost)));
	const parts = [];
	if (direct && (!routeTargetIsGateway || directMatchesGatewayTarget)) parts.push(direct);
	const fleetDeskProbe = !routeTargetIsGateway && (shouldFleetDeskGatewayProbeFallbacks(routeTarget, endpoint, direct) || shouldConnectViaFleetGateway(endpoint, routeTarget));
	if (routeTargetIsGateway) {
		for (const gw of resolveFleetGatewayConnectOrigins(globalThis.location?.hostname)) if (!parts.some((entry) => entry.includes(new URL(gw).hostname))) parts.push(gw);
		if (endpoint && !parts.includes(endpoint)) parts.push(endpoint);
	} else if (fleetDeskProbe) {
		const deskWireId = resolveFleetDeskProbeWireNodeId(routeTarget, endpoint, direct);
		const deskOrigin = resolveDeskDirectOriginFromWireNodeId(deskWireId);
		if (deskOrigin && !parts.some((entry) => entry.includes(wireNodeIdToLanHost(deskWireId)))) parts.push(deskOrigin);
		for (const gw of resolveFleetGatewayConnectOrigins(globalThis.location?.hostname)) if (!parts.some((entry) => entry.includes(new URL(gw).hostname))) parts.push(gw);
		if (endpoint && !parts.includes(endpoint)) parts.push(endpoint);
	} else if (endpoint) parts.push(endpoint);
	remoteHost = joinUniqueUrls(...parts);
};
/**
* Apply settings from a stored blob (localStorage shape). Safe to call on tab focus / storage events.
*/
function hydrateFromStored(stored) {
	const legacyHost = toTrimmedString(stored.host);
	const legacyRouteTarget = toTrimmedString(stored.routeTarget);
	const endpointUrl = normalizeOriginUrl(stored.endpointUrl) || (legacyRouteTarget ? normalizeOriginUrl(legacyHost) : "");
	const directUrl = normalizeOriginUrl(stored.directUrl) || (!legacyRouteTarget ? normalizeOriginUrl(legacyHost) : "");
	const quickConnectValue = toTrimmedString(stored.quickConnectValue);
	remoteConfig.endpointUrl = rewriteEndpointToMatchHttpsTab(endpointUrl);
	remoteConfig.directUrl = rewriteEndpointToMatchHttpsTab(directUrl);
	remoteConfig.accessToken = toTrimmedString(stored.accessToken) || toTrimmedString(stored.authToken) || "";
	remoteConfig.quickConnectValue = quickConnectValue || toTrimmedString(stored.destinationId) || legacyRouteTarget || remoteConfig.directUrl;
	remoteConfig.clientId = sanitizeFleetSelfWireNodeId(stored.clientId);
	const rawDestination = toTrimmedString(stored.destinationId) || legacyRouteTarget;
	remoteConfig.destinationId = sanitizeFleetRouteTarget(rawDestination, remoteConfig.endpointUrl) || (isAssociableFleetWireNodeId(rawDestination) ? normalizeWireNodeId(rawDestination) : "");
	const storedPeer = toTrimmedString(stored.peerInstanceId);
	if (storedPeer) remoteConfig.peerInstanceId = storedPeer;
	else if (!remoteConfig.peerInstanceId) remoteConfig.peerInstanceId = createPeerInstanceId();
	remoteConfig.identificationToken = toTrimmedString(stored.identificationToken);
	remoteConfig.clientAccessToken = toTrimmedString(stored.clientAccessToken);
	remoteConfig.wireTransport = normalizeWireTransport(stored.wireTransport);
	refreshRemoteHost();
}
var stored = loadStoredRemoteConfig();
hydrateFromStored(stored);
scrubStaleGuestAirpadIdentity();
if (remoteConfig.clientId || remoteConfig.destinationId) persistRemoteConfig();
/** Re-probe stored origins with explicit ports only (boot must not block on a full port sweep). */
var rediscoverStoredRemoteUrls = async () => {
	if (shouldPreferWanGatewayForAirpad(remoteConfig.endpointUrl)) return;
	const input = {};
	const probeOpts = {
		timeoutMs: 1500,
		maxProbeCandidates: 2
	};
	if (remoteConfig.directUrl.trim() && hasExplicitConnectOrigin(remoteConfig.directUrl.trim())) {
		const next = await resolveConnectHostToOrigin(remoteConfig.directUrl.trim(), probeOpts);
		if (next && next !== remoteConfig.directUrl.trim()) input.directUrl = next;
	}
	if (remoteConfig.endpointUrl.trim() && hasExplicitConnectOrigin(remoteConfig.endpointUrl.trim())) {
		const next = await resolveConnectHostToOrigin(remoteConfig.endpointUrl.trim(), probeOpts);
		if (next && next !== remoteConfig.endpointUrl.trim()) input.endpointUrl = next;
	}
	if (Object.keys(input).length) applyAirpadRemoteConfig(input, { persist: true });
};
rediscoverStoredRemoteUrls();
/** WHY: legacy quick-connect stored `L-192.168.0.110` as destination only — WS had no probe host. */
var repairWireDestinationDirectUrl = async () => {
	if (remoteConfig.directUrl.trim()) return;
	if (shouldPreferWanGatewayForAirpad(remoteConfig.endpointUrl)) return;
	const fromDest = wireNodeIdToBareConnectHost(remoteConfig.destinationId);
	const fromQuick = wireNodeIdToBareConnectHost(remoteConfig.quickConnectValue);
	const bare = fromDest || fromQuick;
	if (!bare) return;
	const origin = inferDirectHttpsOriginFromConnectInput(bare) || await resolveConnectHostToOrigin(bare, {
		timeoutMs: 1500,
		maxProbeCandidates: 2
	});
	if (!origin || origin === remoteConfig.directUrl) return;
	remoteConfig.directUrl = origin;
	if (fromDest) remoteConfig.destinationId = normalizeWireNodeId(remoteConfig.destinationId);
	else if (fromQuick) remoteConfig.destinationId = normalizeWireNodeId(remoteConfig.quickConnectValue);
	refreshRemoteHost();
	persistRemoteConfig();
};
repairWireDestinationDirectUrl();
if (!toTrimmedString(stored.peerInstanceId)) remoteConfig.peerInstanceId = remoteConfig.peerInstanceId || createPeerInstanceId();
var storedAccessToken = toTrimmedString(stored.accessToken);
var storedLegacyAuthToken = toTrimmedString(stored.authToken);
var storedRaw = globalThis?.localStorage?.getItem?.("airpad.remote.connection.v1") ?? "";
if (/(?<![0-9]):8443(?![0-9])|:8343(?![0-9])/.test(storedRaw) || stored._legacyMigrated === true || !stored.peerInstanceId || storedLegacyAuthToken && !storedAccessToken || stored.v !== 1) persistRemoteConfig();
function applyAirpadRemoteConfig(input, options) {
	if (input.endpointUrl !== void 0) {
		const next = normalizeOriginUrl(input.endpointUrl);
		remoteConfig.endpointUrl = urlIsControlSpaOrigin(next) ? "" : next;
	} else if (input.host !== void 0) {
		const next = normalizeOriginUrl(input.host);
		remoteConfig.endpointUrl = urlIsControlSpaOrigin(next) ? "" : next;
	}
	if (input.directUrl !== void 0) remoteConfig.directUrl = normalizeOriginUrl(input.directUrl);
	if (input.accessToken !== void 0) remoteConfig.accessToken = input.accessToken || "";
	else if (input.authToken !== void 0) remoteConfig.accessToken = input.authToken || "";
	if (input.destinationId !== void 0) remoteConfig.destinationId = sanitizeFleetRouteTarget(input.destinationId, remoteConfig.endpointUrl) || (isAssociableFleetWireNodeId(input.destinationId) ? normalizeWireNodeId(input.destinationId) : "");
	else if (input.routeTarget !== void 0) remoteConfig.destinationId = sanitizeFleetRouteTarget(input.routeTarget, remoteConfig.endpointUrl) || (isAssociableFleetWireNodeId(input.routeTarget) ? normalizeWireNodeId(input.routeTarget) : "");
	if (input.clientId !== void 0) remoteConfig.clientId = sanitizeFleetSelfWireNodeId(input.clientId);
	if (input.identificationToken !== void 0) remoteConfig.identificationToken = (input.identificationToken || "").trim();
	if (input.clientAccessToken !== void 0) remoteConfig.clientAccessToken = (input.clientAccessToken || "").trim();
	const wireTransport = normalizeWireTransport(input.wireTransport);
	if (wireTransport) remoteConfig.wireTransport = wireTransport;
	refreshRemoteHost();
	if (options?.persist !== false) persistRemoteConfig();
}
/**
* Project Settings → AirPad `localStorage` ({@link AIRPAD_REMOTE_CONFIG_STORAGE_KEY}) + in-memory remoteConfig.
* Call after Save on Capacitor/native so NS `/ws` can read the same blob.
*/
function syncAirpadRemoteConfigFromAppSettings(settings, options) {
	const blob = appSettingsToRemoteConnectionV1(settings);
	const input = {};
	if ((() => {
		try {
			const id = globalThis.chrome?.runtime?.id;
			return typeof id === "string" && id.length > 0;
		} catch {
			return false;
		}
	})()) input.endpointUrl = String(settings.shell?.localHubUrl || "").trim() || "https://127.0.0.1:8434/";
	else if (blob.endpointUrl && !urlIsControlSpaOrigin(blob.endpointUrl)) input.endpointUrl = blob.endpointUrl;
	if (blob.directUrl) input.directUrl = blob.directUrl;
	if (blob.quickConnectValue) input.quickConnectValue = blob.quickConnectValue;
	if (blob.destinationId || blob.routeTarget) {
		const dest = blob.destinationId || blob.routeTarget;
		const sanitized = sanitizeFleetRouteTarget(dest, blob.endpointUrl);
		if (sanitized) input.destinationId = sanitized;
		else if (isAssociableFleetWireNodeId(dest)) input.destinationId = normalizeWireNodeId(dest);
	}
	if (blob.accessToken || blob.authToken) input.accessToken = blob.accessToken || blob.authToken;
	if (blob.clientId) input.clientId = sanitizeFleetSelfWireNodeId(blob.clientId) || void 0;
	if (blob.peerInstanceId) input.peerInstanceId = blob.peerInstanceId;
	if (blob.identificationToken) input.identificationToken = blob.identificationToken;
	if (blob.clientAccessToken) input.clientAccessToken = blob.clientAccessToken;
	if (blob.wireTransport) input.wireTransport = blob.wireTransport;
	if (Boolean(input.endpointUrl || input.directUrl || input.quickConnectValue || input.destinationId || input.accessToken || input.clientId || input.peerInstanceId || input.identificationToken || input.clientAccessToken)) applyAirpadRemoteConfig(input, { persist: options?.persist ?? true });
}
var endpointUrlToAirpadConnectHost = (endpointUrl) => {
	try {
		const u = new URL(endpointUrl);
		return `${u.protocol}//${u.host}`;
	} catch {
		return "";
	}
};
/**
* Apply CrossWord AppSettings shell + identity overlay (call after load/save settings and on boot).
* Does not clear AirPad localStorage fields; only updates in-memory host/route when shell requests it.
*/
function applyAirpadRuntimeFromAppSettings(settings) {
	const core = settings.core;
	const shell = settings.shell;
	const socket = core?.socket;
	const interop = core?.interop;
	coreIdentityBridgeUserId = sanitizeFleetSelfWireNodeId(core?.userId) || "";
	coreIdentityBridgeUserKey = String(core?.ecosystemToken || core?.userKey || core?.socket?.accessToken || "").trim();
	coreIdentityUseForAirpad = (core?.useCoreIdentityForAirPad ?? true) !== false;
	shellRemoteClipboardEnabled = (shell?.enableRemoteClipboardBridge ?? true) !== false;
	shellApplyRemoteToDevice = (shell?.applyRemoteClipboardToDevice ?? true) !== false;
	shellPushLocalClipboard = Boolean(shell?.pushLocalClipboardToLan);
	const intervalRaw = Number(shell?.clipboardPushIntervalMs);
	shellClipboardPushIntervalMs = Number.isFinite(intervalRaw) && intervalRaw >= 800 ? Math.min(Math.round(intervalRaw), 6e4) : 2e3;
	shellClipboardBroadcastTargets = (shell?.clipboardBroadcastTargets || "").trim();
	/** Default off; enable in Settings when background clipboard/hub sync is needed. */
	shellMaintainHubSocket = shell?.maintainHubSocketConnection === true;
	shellPreferNativeWebsocket = (shell?.preferNativeWebsocket ?? interop?.preferNativeWebsocket ?? true) !== false;
	shellNativeSmsEnabled = (shell?.enableNativeSms ?? false) === true;
	shellNativeContactsEnabled = (shell?.enableNativeContacts ?? true) !== false;
	shellAcceptInboundClipboardData = (shell?.acceptInboundClipboardData ?? true) !== false;
	shellClipboardInboundAllowIds = (shell?.clipboardInboundAllowIds || "").trim();
	(shell?.clipboardShareDestinationIds || "").trim();
	shellAccessTokenBypassesClipboardAllowlist = (shell?.accessTokenBypassesClipboardAllowlist ?? false) === true;
	shell?.acceptContactsBridgeData;
	shell?.acceptSmsBridgeData;
	coreSocketProtocol = socket?.protocol === "http" || socket?.protocol === "https" ? socket.protocol : "auto";
	const routeRaw = (socket?.routeTarget || "").trim();
	coreSocketRouteTarget = sanitizeFleetRouteTarget(routeRaw, core?.endpointUrl) || (isAssociableFleetWireNodeId(routeRaw) ? normalizeWireNodeId(routeRaw) : "");
	coreSocketSelfId = sanitizeFleetSelfWireNodeId(socket?.selfId) || "";
	if (coreIdentityBridgeUserId && coreSocketSelfId && coreSocketSelfId !== coreIdentityBridgeUserId) coreSocketSelfId = "";
	coreSocketAccessToken = (socket?.accessToken || socket?.airpadAuthToken || "").trim();
	coreSocketClientAccessToken = (socket?.clientAccessToken || "").trim();
	coreSocketTransportMode = socket?.transportMode === "secure" ? "secure" : "plaintext";
	coreSocketTransportSecret = (socket?.transportSecret || "").trim();
	(socket?.signingSecret || "").trim();
	coreSocketConnectionType = (socket?.connectionType || "").trim();
	coreSocketArchetype = (socket?.archetype || "").trim();
	(socket?.protocolLanesJson || "").trim();
	const input = {};
	const wireUrl = (() => {
		try {
			const id = globalThis.chrome?.runtime?.id;
			return typeof id === "string" && id.length > 0;
		} catch {
			return false;
		}
	})() ? String(shell?.localHubUrl || "").trim() || "https://127.0.0.1:8434/" : String(core?.endpointUrl || "").trim();
	if (wireUrl) {
		const origin = endpointUrlToAirpadConnectHost(rewriteEndpointToMatchHttpsTab(wireUrl));
		if (origin) input.endpointUrl = origin;
	}
	if (Object.keys(input).length) applyAirpadRemoteConfig(input, { persist: false });
	syncAirpadRemoteConfigFromAppSettings(settings, { persist: false });
	try {
		globalThis.__CWS_SHELL_FEATURES__ = {
			clipboardBridge: shellRemoteClipboardEnabled,
			applyRemoteClipboard: shellApplyRemoteToDevice,
			pushLocalClipboard: shellPushLocalClipboard,
			maintainHubSocket: shellMaintainHubSocket,
			preferNativeWebsocket: shellPreferNativeWebsocket,
			sms: shellNativeSmsEnabled,
			contacts: shellNativeContactsEnabled
		};
	} catch {}
}
function getClipboardBroadcastTargetEntries() {
	const fromExplicit = parseWireTargetList$1(shellClipboardBroadcastTargets);
	if (fromExplicit.length) return fromExplicit;
	const route = getRemoteRouteTarget().trim();
	if (route) return parseWireTargetList$1(route);
	if (isDesktopCwspShell()) return parseWireTargetList$1("*");
	return [];
}
/** True for Neutralino / WebNative desktop shells (not Capacitor/PWA-only). */
function isDesktopCwspShell() {
	try {
		const g = globalThis;
		if (g.__CWS_NEUTRALINO_BOOT__ || g.__CWS_WEBNATIVE_BOOT__) return true;
		if (g.__NEUTRALINO_AUTH__ || g.Neutralino || typeof g.NL_OS === "string") return true;
	} catch {}
	return false;
}
/**
* Neutralino / WebNative Win/Linux: Node clipboard-hub owns LAN sync.
* INVARIANT: WebView must not push/apply remote clipboard when this is true.
*/
function isNeutralinoNodeClipboardHubOwned() {
	try {
		const g = globalThis;
		try {
			const host = String(location.hostname || "");
			if (location.protocol === "https:" && host !== "localhost" && host !== "127.0.0.1" && !g.Neutralino && typeof g.NL_OS !== "string") return false;
		} catch {}
		if (g.__CWS_NODE_CLIPBOARD_HUB__ === false) return false;
		if (g.__CWS_NODE_CLIPBOARD_HUB__ === true) return true;
		if (g.__CWS_NEUTRALINO_BOOT__ || g.__CWS_WEBNATIVE_BOOT__ || g.Neutralino || typeof g.NL_OS === "string") return true;
	} catch {}
	return false;
}
function isShellRemoteClipboardBridgeEnabled() {
	return shellRemoteClipboardEnabled !== false;
}
function isApplyRemoteClipboardToDeviceEnabled() {
	if (isNeutralinoNodeClipboardHubOwned()) return false;
	return shellApplyRemoteToDevice !== false;
}
function isPushLocalClipboardToLanEnabled() {
	if (isNeutralinoNodeClipboardHubOwned()) return false;
	if (shellPushLocalClipboard === true) return true;
	return false;
}
function getClipboardPushIntervalMs() {
	return shellClipboardPushIntervalMs;
}
/** Parsed outbound clipboard entries including optional per-id access tokens. */
function getClipboardBroadcastWireTargets() {
	return getClipboardBroadcastTargetEntries();
}
/** When false, ignore inbound clipboard payloads (coordinator still may run for other ops). */
function isShellClipboardInboundEnabled() {
	return shellAcceptInboundClipboardData !== false;
}
/** True when access token bypass of inbound allow list is enabled and a token is configured. */
function shouldBypassClipboardInboundAllowlistWithAccessToken() {
	return shellAccessTokenBypassesClipboardAllowlist && Boolean(getAccessToken().trim());
}
/** COMPAT: `L-110` ≡ `L-192.168.0.110` (prefer short fleet form for allowlist compare). */
function normalizeClipboardPeerId(value) {
	const raw = value.trim();
	if (!raw) return "";
	const short = toShortFleetWireNodeId(raw);
	if (short) return short.toLowerCase();
	const normalized = normalizeWireNodeIdForWire(raw);
	if (normalized) return normalized.toLowerCase();
	if (/^\d{1,3}(?:\.\d{1,3}){3}(?::\d+)?$/.test(raw)) return `l-${raw}`.toLowerCase();
	return raw.toLowerCase();
}
/**
* Keep `/ws` up for inbound/outbound clipboard outside the AirPad/Network view.
* Capacitor Android only — Neutralino clipboard hub lives in Node.
*/
function isClipboardHubBootstrapEnabled() {
	if (isNeutralinoNodeClipboardHubOwned()) return false;
	try {
		if (isDesktopCwspShell()) return isShellRemoteClipboardBridgeEnabled() && isApplyRemoteClipboardToDeviceEnabled();
		const c = globalThis.Capacitor;
		if (!(typeof c?.isNativePlatform === "function" && Boolean(c.isNativePlatform()))) return false;
	} catch {
		return false;
	}
	return isShellRemoteClipboardBridgeEnabled() && isApplyRemoteClipboardToDeviceEnabled();
}
/**
* Inbound clipboard from `senderId` (peer / device id on the wire). Respects allow list unless bypassed by access token.
*/
function isClipboardSenderAllowedForInbound(senderId) {
	if (!isShellClipboardInboundEnabled()) return false;
	if (!isShellRemoteClipboardBridgeEnabled()) return false;
	if (shouldBypassClipboardInboundAllowlistWithAccessToken()) return true;
	const allow = parseWireTargetList$1(shellClipboardInboundAllowIds);
	if (!allow.length) return true;
	const s = String(senderId || "").trim();
	if (!s) return false;
	return allow.some((e) => fleetWireNodeIdsEquivalent(e.nodeId, s) || normalizeClipboardPeerId(e.nodeId) === normalizeClipboardPeerId(s));
}
/** Background WebSocket to cwsp / endpoint hub (any shell, not only AirPad view). */
function isMaintainHubSocketConnectionEnabled() {
	return shellMaintainHubSocket === true;
}
function isPreferNativeWebsocketEnabled() {
	return shellPreferNativeWebsocket !== false;
}
function getRemoteHost() {
	const sanitized = sanitizeLoopbackRemoteOnPublicOrigin(remoteHost);
	const endpoint = remoteConfig.endpointUrl.trim() || normalizeOriginUrl(readGlobalAirpadValue(["AIRPAD_ENDPOINT_URL"]));
	getRemoteRouteTarget().trim();
	if (shouldPreferWanGatewayForAirpad(endpoint)) return resolveWanGatewayConnectOrigin(endpoint);
	if (!sanitized || urlIsControlSpaOrigin(sanitized)) {
		if (endpoint && !urlIsControlSpaOrigin(endpoint) && !urlHostIsLoopback(endpoint)) return endpoint;
		if (isControlSpaPage() || isBrowserPublicOrigin()) return resolveWanGatewayConnectOrigin(endpoint);
		return "";
	}
	return sanitized;
}
function getAirPadEndpointUrl() {
	if (remoteConfig.endpointUrl.trim()) return remoteConfig.endpointUrl.trim();
	const fromGlobal = normalizeOriginUrl(readGlobalAirpadValue(["AIRPAD_ENDPOINT_URL"]));
	if (fromGlobal) return fromGlobal;
	if (isOffHomeFleetNetwork()) return resolveWanGatewayConnectOrigin("");
	return "";
}
function getAirPadDirectTargetUrl() {
	return remoteConfig.directUrl.trim();
}
function getRemoteProtocol() {
	return coreSocketProtocol;
}
/** Infer canonical peer id (e.g. `L-192.168.0.110`) from a direct connect URL/host. */
var inferControlNodeIdFromUrl = (value) => {
	const normalized = normalizeOriginUrl(value);
	if (!normalized) return "";
	let nodeId = "";
	try {
		const withScheme = /^[a-z][a-z0-9+.-]*:\/\//i.test(normalized) ? normalized : `https://${normalized}`;
		const host = new URL(withScheme).hostname.trim();
		if (host) nodeId = /^L-/i.test(host) ? host : `L-${host}`;
	} catch {
		const bare = normalized.replace(/^[a-z][a-z0-9+.-]*:\/\//i, "").split("/")[0]?.split(":")[0]?.trim() || "";
		if (bare) nodeId = /^L-/i.test(bare) ? bare : `L-${bare}`;
	}
	if (isFleetGatewayWireNodeId(nodeId)) return FLEET_GATEWAY_WIRE_NODE_ID;
	if (isAssociableFleetWireNodeId(nodeId)) return normalizeWireNodeId(nodeId);
	if (isGatewayHttpsOrigin(value)) return FLEET_GATEWAY_WIRE_NODE_ID;
	return "";
};
var isGatewayWireNode = (value) => {
	const normalized = normalizeWireNodeId(value).toLowerCase();
	return normalized === "l-192.168.0.200" || normalized === "l-45.147.121.152" || normalized.includes("gateway");
};
/**
* Coordinator routing target for mouse/keyboard/clipboard acts and handshake hints.
* Empty string means "execute on the peer we are socket-connected to" (direct mode).
*/
function getRemoteRouteTarget() {
	if (remoteConfig.destinationId.trim()) {
		const sanitized = sanitizeFleetRouteTarget(remoteConfig.destinationId, remoteConfig.endpointUrl);
		if (sanitized) return sanitized;
		if (isAssociableFleetWireNodeId(remoteConfig.destinationId)) return remoteConfig.destinationId.trim();
	}
	const endpoint = remoteConfig.endpointUrl.trim();
	const quick = remoteConfig.quickConnectValue.trim();
	if (quick) {
		const sanitized = sanitizeFleetRouteTarget(quick, endpoint);
		if (sanitized) return sanitized;
		if (isGatewayHttpsOrigin(quick)) return FLEET_GATEWAY_WIRE_NODE_ID;
		if (isAssociableFleetWireNodeId(quick)) return normalizeWireNodeId(quick);
	}
	const direct = remoteConfig.directUrl.trim();
	if (direct) {
		if (isGatewayHttpsOrigin(direct)) return FLEET_GATEWAY_WIRE_NODE_ID;
		const inferred = inferControlNodeIdFromUrl(direct);
		if (inferred) return inferred;
		if (endpoint && isGatewayHttpsOrigin(endpoint)) return DEFAULT_DESK_WIRE_NODE_ID;
		return "";
	}
	const fromCore = coreSocketRouteTarget.trim();
	if (fromCore) {
		if (isFleetGatewayWireNodeId(fromCore)) return normalizeWireNodeId(fromCore);
		if (!isGatewayWireNode(fromCore)) return fromCore;
	}
	if (endpoint && isGatewayHttpsOrigin(endpoint)) {
		if (isFleetDeskWireNodeId(fromCore)) return normalizeWireNodeId(fromCore);
		if (isFleetGatewayWireNodeId(fromCore)) return FLEET_GATEWAY_WIRE_NODE_ID;
		return DEFAULT_DESK_WIRE_NODE_ID;
	}
	return fromCore || "";
}
function getAirPadTransportMode() {
	return coreSocketTransportMode;
}
/** Resolved access / control token (local overlay, settings, then env globals). */
function getAccessToken() {
	const local = (remoteConfig.accessToken || "").trim();
	if (local) return local;
	if (coreSocketAccessToken.trim()) return coreSocketAccessToken.trim();
	if (coreIdentityBridgeUserKey.trim()) return coreIdentityBridgeUserKey.trim();
	return readGlobalAirpadValue([
		"CWS_ACCESS_TOKEN",
		"CWS_ASSOCIATED_TOKEN",
		"ACCESS_TOKEN",
		"AIRPAD_AUTH_TOKEN",
		"AIRPAD_TOKEN",
		"CWS_AUTH_TOKEN",
		"HUB_AUTH_TOKEN",
		"MASTER_AUTH_TOKEN",
		"CONTROL_TOKEN",
		"ADMIN_TOKEN"
	]);
}
function getAirPadClientId() {
	const candidates = [
		coreIdentityUseForAirpad ? coreIdentityBridgeUserId.trim() : "",
		coreSocketSelfId.trim(),
		remoteConfig.clientId.trim(),
		readGlobalAirpadValue(["AIRPAD_CLIENT_ID", "AIRPAD_CLIENT"])
	];
	for (const entry of candidates) {
		const sanitized = sanitizeFleetSelfWireNodeId(entry);
		if (sanitized) return sanitized;
	}
	return "";
}
function getAssociatedClientToken() {
	return coreIdentityBridgeUserKey.trim();
}
/** Optional future-facing access token when this client acts as an inbound WS / reverse-server peer. */
function getClientAccessToken() {
	const local = coreSocketClientAccessToken.trim();
	if (local) return local;
	const fromRemote = remoteConfig.clientAccessToken.trim();
	if (fromRemote) return fromRemote;
	return readGlobalAirpadValue(["CWS_CLIENT_ACCESS_TOKEN", "CLIENT_ACCESS_TOKEN"]);
}
function getAirPadPeerInstanceId() {
	const env = readGlobalAirpadValue(["AIRPAD_PEER_INSTANCE_ID", "AIRPAD_DEVICE_ID"]);
	if (env.trim()) return env.trim();
	return remoteConfig.peerInstanceId || "";
}
function getAirPadTransportSecret() {
	return coreSocketTransportSecret;
}
/** Handshake `connectionType` before gateway `first-order` normalization (Settings → env → default). */
function getAirPadHandshakeConnectionType() {
	const fromSettings = coreSocketConnectionType.trim();
	if (fromSettings) return resolveWireConnectionType(fromSettings);
	return resolveWireConnectionType(readGlobalAirpadValue(["CWS_CONNECTION_TYPE", "AIRPAD_CONNECTION_TYPE"]));
}
/** Handshake `archetype` (Settings → env → default). */
function getAirPadHandshakeArchetype() {
	const fromSettings = coreSocketArchetype.trim();
	if (fromSettings) return resolveWireArchetype(fromSettings);
	return resolveWireArchetype(readGlobalAirpadValue(["CWS_ARCHETYPE", "AIRPAD_ARCHETYPE"]));
}
motionIntervalMsForHz(30);
var airpadMotionPathHint = () => ({
	endpointUrl: remoteConfig.endpointUrl,
	directUrl: remoteConfig.directUrl,
	pageHost: typeof globalThis !== "undefined" && globalThis.location ? globalThis.location.hostname : "",
	routedDesk: Boolean(getRemoteRouteTarget().trim())
});
getAirpadMotionRateController(airpadMotionPathHint);
//#endregion
//#region src/shared/other/config/Settings.ts
var Settings_exports = /* @__PURE__ */ __exportAll({
	DB_NAME: () => DB_NAME$1,
	SETTINGS_KEY: () => SETTINGS_KEY$1,
	SETTINGS_LS_MIRROR_KEY: () => SETTINGS_LS_MIRROR_KEY$1,
	STORE: () => STORE$1,
	WebDavSync: () => WebDavSync$1,
	currentWebDav: () => currentWebDav$1,
	default: () => WebDavSync$1,
	didPersistShellMaintainHubSocket: () => didPersistShellMaintainHubSocket$1,
	ensureCapacitorCwspSettingsSeeded: () => ensureCapacitorCwspSettingsSeeded$1,
	ensureCrxCwspSettingsSeeded: () => ensureCrxCwspSettingsSeeded,
	getByPath: () => getByPath,
	getLastSettingsSaveReport: () => getLastSettingsSaveReport,
	idbGetSettings: () => idbGetSettings$1,
	idbPutSettings: () => idbPutSettings$1,
	loadSettings: () => loadSettings$1,
	normalizeCoreEndpointOrigin: () => normalizeCoreEndpointOrigin$1,
	noteSettingsControlSync: () => noteSettingsControlSync,
	saveSettings: () => saveSettings$1,
	shouldDeferCrxHubSocketBootstrap: () => shouldDeferCrxHubSocketBootstrap$1,
	slugify: () => slugify,
	splitPath: () => splitPath,
	updateWebDavSettings: () => updateWebDavSettings$1
});
var SETTINGS_KEY$1 = "rs-settings";
/** localStorage mirror for Capacitor WebView when IndexedDB is flaky or empty. */
var SETTINGS_LS_MIRROR_KEY$1 = "rs-settings.v1";
var lastSettingsSaveReport$1 = { nativeSynced: null };
var getLastSettingsSaveReport = () => ({ ...lastSettingsSaveReport$1 });
/** Public /cwsp Settings arm reports Control POST outcome (Capacitor Java or Neutralino). */
var noteSettingsControlSync = (ok, error) => {
	lastSettingsSaveReport$1 = {
		...lastSettingsSaveReport$1,
		webnativeSynced: ok,
		webnativeError: ok ? void 0 : error
	};
};
var trimSetting$1 = (v) => typeof v === "string" ? v.trim() : "";
/** Factory defaults — not treated as user-configured Client-ID on Capacitor. */
var CAPACITOR_FACTORY_SELF_IDS$1 = /* @__PURE__ */ new Set([
	"L-196",
	"L-208",
	"L-210"
]);
var isCapacitorFactorySelfId$1 = (id) => {
	if (!id) return true;
	const shortId = sanitizeFleetSelfWireNodeId(id) || id;
	return CAPACITOR_FACTORY_SELF_IDS$1.has(shortId);
};
/** Home fleet Client-ID — accepts short {@code L-196} via normalize → {@code L-192.168.0.196}. */
var isHomeFleetClientId$1 = (id) => Boolean(id) && isAssociableFleetWireNodeId(normalizeWireNodeIdForWire(id));
/** Persist short home-fleet Client-ID ({@code L-196}); never expand to full LAN form. */
var normalizePersistedClientId$1 = (raw) => sanitizeFleetSelfWireNodeId(raw) || String(raw ?? "").trim();
var isCapacitorNativeShell$2 = () => {
	try {
		const c = globalThis.Capacitor;
		return typeof c?.isNativePlatform === "function" && Boolean(c.isNativePlatform());
	} catch {
		return false;
	}
};
/** Desk Neutralino / endpoint peer — must be in Android clipboard destinations for Win images. */
var CAPACITOR_DESK_PEER_ID$1 = "L-110";
var isDeskPeerId$1 = (id) => {
	return (sanitizeFleetSelfWireNodeId(id) || id.trim()) === CAPACITOR_DESK_PEER_ID$1;
};
var splitClipboardDestIds$1 = (raw) => {
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const part of raw.split(/[,;\s\n\r]+/)) {
		const id = part.trim();
		if (!id || seen.has(id)) continue;
		seen.add(id);
		out.push(id);
	}
	return out;
};
var joinClipboardDestIds$1 = (ids) => ids.filter(Boolean).join(";");
/**
* Prepend L-110 when missing. Leaves `*` alone (wildcard already covers desk).
* WHY: legacy Capacitor prefs were phone-only (L-196;L-210;L-208) → Android↔Android only.
*/
var ensureDeskPeerInDestCsv$1 = (raw) => {
	const t = String(raw || "").trim();
	if (!t || t === "*") return {
		value: t || "*",
		changed: false
	};
	const ids = splitClipboardDestIds$1(t);
	if (ids.some(isDeskPeerId$1)) return {
		value: joinClipboardDestIds$1(ids),
		changed: false
	};
	return {
		value: joinClipboardDestIds$1([CAPACITOR_DESK_PEER_ID$1, ...ids]),
		changed: true
	};
};
/** Patch Capacitor settings so routeTarget + share destinations include desk L-110. */
var ensureCapacitorDeskClipboardTargets$1 = (settings) => {
	if (!isCapacitorNativeShell$2()) return null;
	const route = trimSetting$1(settings.core?.socket?.routeTarget);
	const share = trimSetting$1(settings.shell?.clipboardShareDestinationIds);
	const fallback = "L-196;L-210";
	const r = ensureDeskPeerInDestCsv$1(route || fallback);
	const s = ensureDeskPeerInDestCsv$1(share || route || fallback);
	if (!r.changed && !s.changed) return null;
	return {
		...settings,
		core: {
			...settings.core,
			socket: {
				...settings.core?.socket || {},
				routeTarget: r.value
			}
		},
		shell: {
			...settings.shell,
			clipboardShareDestinationIds: s.value
		}
	};
};
var CAPACITOR_CLIPBOARD_ASK_MIGRATED_KEY$1 = "cwsp.clipboardAskHeadsMigratedV1";
/**
* WHY: older Capacitor IDB defaults used shell.clipboard*Mode=auto — Accept never posts.
* One-shot upgrade to ask (user can switch back in Settings).
*/
var ensureCapacitorClipboardAskModes$1 = (settings) => {
	if (!isCapacitorNativeShell$2()) return null;
	try {
		if (globalThis.localStorage?.getItem?.(CAPACITOR_CLIPBOARD_ASK_MIGRATED_KEY$1) === "1") return null;
	} catch {}
	const inbound = String(settings.shell?.clipboardInboundMode || "auto").trim().toLowerCase();
	const outbound = String(settings.shell?.clipboardOutboundMode || "auto").trim().toLowerCase();
	const needIn = inbound !== "ask";
	const needOut = outbound !== "ask";
	try {
		globalThis.localStorage?.setItem?.(CAPACITOR_CLIPBOARD_ASK_MIGRATED_KEY$1, "1");
	} catch {}
	if (!needIn && !needOut) return null;
	return {
		...settings,
		shell: {
			...settings.shell,
			...needIn ? { clipboardInboundMode: "ask" } : null,
			...needOut ? { clipboardOutboundMode: "ask" } : null
		}
	};
};
/** Compose Capacitor shell migrations (desk peers + ask modes). */
var applyCapacitorShellMigrations$1 = (settings) => {
	let next = null;
	const desk = ensureCapacitorDeskClipboardTargets$1(settings);
	if (desk) next = desk;
	const ask = ensureCapacitorClipboardAskModes$1(next || settings);
	if (ask) next = ask;
	return next;
};
/** Neutralino / WebNative / /cwsp Control bridge shares `/service/config`. */
var isWebnativeSurface$1 = () => {
	try {
		const g = globalThis;
		const auth = g.__WEBNATIVE_AUTH__ || g.__NEUTRALINO_AUTH__;
		return Boolean(g.__CWS_WEBNATIVE_BOOT__ || g.__CWS_NEUTRALINO_BOOT__ || g.__CWSP_CONTROL_BRIDGE_LIVE__ || auth && typeof auth.port === "number");
	} catch {
		return false;
	}
};
var readDesktopControlAuth$2 = () => {
	try {
		const g = globalThis;
		const src = g.__CWSP_CONTROL_SOURCE__;
		const via = String(g.__CWSP_CONTROL_VIA__ || "");
		if (via === "android" && src && typeof src.port === "number" && src.host) return {
			port: src.port,
			key: String(src.apiKey || src.userKey || ""),
			host: String(src.host).trim(),
			scheme: src.scheme === "https" ? "https" : "http"
		};
		if (via === "neutralino" || g.__NEUTRALINO_AUTH__) {
			const n = g.__NEUTRALINO_AUTH__ || g.__WEBNATIVE_AUTH__;
			if (n && typeof n.port === "number") return {
				port: n.port || 29110,
				key: String(n.key || "cwsp-neutralino-local"),
				host: String(n.host || "127.0.0.1"),
				scheme: n.scheme === "https" ? "https" : "http"
			};
		}
		const auth = g.__WEBNATIVE_AUTH__ || g.__NEUTRALINO_AUTH__;
		if (auth && typeof auth.port === "number") return {
			port: auth.port,
			key: String(auth.key || src?.apiKey || src?.userKey || ""),
			host: String(auth.host || src?.host || "127.0.0.1").trim() || "127.0.0.1",
			scheme: auth.scheme === "https" || src?.scheme === "https" ? "https" : "http"
		};
		if (src && typeof src.port === "number" && src.host) return {
			port: src.port,
			key: String(src.apiKey || src.userKey || ""),
			host: String(src.host).trim() || "127.0.0.1",
			scheme: src.scheme === "https" ? "https" : "http"
		};
		return null;
	} catch {
		return null;
	}
};
var readControlBridgeVia$1 = () => {
	try {
		return String(globalThis.__CWSP_CONTROL_VIA__ || "");
	} catch {
		return "";
	}
};
/** https://cwsp.u2re.space Control SPA — settings:patch arm owns device SoT (not saveSettings Node push). */
var isPublicCwspControlSpa$1 = () => {
	try {
		if (String(globalThis.document?.documentElement?.dataset?.cwspSurface || "").toLowerCase() === "cwsp-control") return true;
		return /^(www\.)?cwsp\.u2re\.space$/i.test(String(location?.hostname || ""));
	} catch {
		return false;
	}
};
var isChromeExtensionPage$1 = () => {
	try {
		return String(location?.protocol || "").toLowerCase() === "chrome-extension:";
	} catch {
		return false;
	}
};
var readControlSessionToken$1 = () => {
	try {
		const fromGlobal = String(globalThis.__CWSP_CONTROL_SESSION__ || "").trim();
		if (fromGlobal) return fromGlobal;
	} catch {}
	try {
		const raw = sessionStorage.getItem("cwsp-control-session-v1");
		if (!raw) return "";
		const parsed = JSON.parse(raw);
		if (!parsed?.token) return "";
		if (Number(parsed.expiresAt) && Date.now() >= Number(parsed.expiresAt)) return "";
		try {
			if (parsed.origin && parsed.origin !== String(location.origin || "")) return "";
		} catch {}
		return String(parsed.token).trim();
	} catch {
		return "";
	}
};
/** CRX persistent session lives in chrome.storage.local (not sessionStorage). */
var readCrxControlSessionTokenAsync$1 = async () => {
	if (!isChromeExtensionPage$1()) return "";
	try {
		return await (await __vitePreload(() => import("../chunks/crx-control-session.js"), __vite__mapDeps([0,1,2]), import.meta.url)).getCrxControlSessionToken() || "";
	} catch {
		return "";
	}
};
var webnativeControl$1 = async (path, init) => {
	try {
		const auth = readDesktopControlAuth$2();
		if (!auth || typeof auth.port !== "number") return null;
		const host = String(auth.host || "127.0.0.1").trim() || "127.0.0.1";
		const scheme = auth.scheme === "https" ? "https" : "http";
		const pageHost = String(location.hostname || "").toLowerCase();
		const pageIsPublicHttps = location.protocol === "https:" && pageHost !== "127.0.0.1" && pageHost !== "localhost" && pageHost !== "::1";
		const viaAndroid = readControlBridgeVia$1() === "android";
		if (pageIsPublicHttps && !viaAndroid && (host === "127.0.0.1" || host === "localhost" || host === "::1") && auth.port === 8434) return null;
		const headers = new Headers(init?.headers);
		headers.set("Content-Type", "application/json");
		const pageIsChromeExtension = isChromeExtensionPage$1();
		let session = readControlSessionToken$1();
		if (!session && pageIsChromeExtension) {
			session = await readCrxControlSessionTokenAsync$1();
			if (session) try {
				globalThis.__CWSP_CONTROL_SESSION__ = session;
			} catch {}
		}
		if (pageIsPublicHttps || pageIsChromeExtension) {
			if (!session) {
				const method = String(init?.method || "GET").toUpperCase();
				if (pageIsChromeExtension && method !== "GET" && method !== "HEAD") try {
					globalThis.dispatchEvent(new CustomEvent("cwsp-control-unauthorized", { detail: {
						status: 401,
						path,
						reason: "missing-session"
					} }));
				} catch {}
				return null;
			}
			headers.set("X-Control-Session", session);
			headers.delete("X-API-Key");
			headers.delete("X-Skip-Legacy-Key");
			if (pageIsChromeExtension) try {
				const id = String(globalThis.chrome?.runtime?.id || "").trim();
				if (id) headers.set("X-Control-Origin", `chrome-extension://${id}`);
			} catch {}
		} else {
			if (session) headers.set("X-Control-Session", session);
			if (auth.key) headers.set("X-API-Key", auth.key);
		}
		const signal = init?.signal ?? (typeof AbortSignal !== "undefined" && typeof AbortSignal.timeout === "function" ? AbortSignal.timeout(2500) : void 0);
		const url = `${scheme}://${host.includes(":") && !host.startsWith("[") ? `[${host}]` : host}:${auth.port}${path.startsWith("/") ? path : `/${path}`}`;
		const isLoopback = host === "127.0.0.1" || host === "localhost" || host === "::1";
		const isPrivate = /^10\./.test(host) || /^192\.168\./.test(host) || /^172\.(1[6-9]|2\d|3[0-1])\./.test(host);
		const fetchInit = {
			...init,
			headers,
			cache: "no-store",
			signal,
			mode: "cors",
			credentials: "omit"
		};
		if (isLoopback) fetchInit.targetAddressSpace = "loopback";
		else if (isPrivate) fetchInit.targetAddressSpace = "local";
		const res = await fetch(url, fetchInit);
		if ((res.status === 401 || res.status === 403) && (pageIsPublicHttps || pageIsChromeExtension)) try {
			sessionStorage.removeItem("cwsp-control-session-v1");
			delete globalThis.__CWSP_CONTROL_SESSION__;
			const g = globalThis;
			g.__CWSP_CONTROL_BRIDGE_LIVE__ = false;
			g.__CWS_NODE_CLIPBOARD_HUB__ = false;
			if (pageIsChromeExtension) __vitePreload(() => import("../chunks/crx-control-session.js").then((m) => m.clearCrxControlSession()), __vite__mapDeps([0,1,2]), import.meta.url).catch(() => void 0);
			globalThis.dispatchEvent(new CustomEvent("cwsp-control-unauthorized", { detail: {
				status: res.status,
				path
			} }));
		} catch {}
		if (!res.ok) return null;
		return await res.json();
	} catch {
		return null;
	}
};
/**
* Map a resolved CWSP config snapshot (`readServerV2ConfigSnapshot` shape from the backend's
* GET /service/config) onto the AppSettings.core fields the Settings/Network views render. The
* snapshot's `bridge` section carries the canonical endpoint URL + identity + TLS decision.
*/
var mapWebnativeSnapshotToCore$1 = (snap) => {
	if (!snap || typeof snap !== "object") return null;
	const bridge = snap.bridge || {};
	const shell = snap.shell || {};
	const coreIn = snap.core && typeof snap.core === "object" ? snap.core : {};
	const listenPort = Number(snap.listenPort) || Number(snap.publicHttpPort) || 8434;
	const endpointUrlRaw = String(coreIn.endpointUrl || bridge.endpointUrl || shell.remoteHost || "").trim();
	const endpointsList = Array.isArray(bridge.endpoints) ? bridge.endpoints.map((e) => String(e || "").trim()).filter(Boolean) : [];
	const endpointUrl = endpointUrlRaw || endpointsList[0] || "";
	const userId = String(coreIn.userId || bridge.userId || bridge.deviceId || "").trim();
	const userKey = String(coreIn.ecosystemToken || coreIn.userKey || bridge.userKey || shell.accessToken || shell.clientToken || "").trim();
	const allowInsecureTls = bridge.allowInsecureTls !== void 0 ? Boolean(bridge.allowInsecureTls) : coreIn.allowInsecureTls !== void 0 ? Boolean(coreIn.allowInsecureTls) : void 0;
	if (!endpointUrl && !userId && !userKey) return null;
	const overlay = {};
	if (endpointUrl) overlay.endpointUrl = endpointUrl;
	else if (!endpointUrl && !userId) overlay.endpointUrl = `https://127.0.0.1:${listenPort}`;
	if (userId) overlay.userId = userId;
	if (userKey) {
		overlay.userKey = userKey;
		overlay.ecosystemToken = userKey;
		overlay.socket = { accessToken: userKey };
	}
	if (allowInsecureTls !== void 0) overlay.allowInsecureTls = allowInsecureTls;
	overlay.preferBackendSync = (coreIn.preferBackendSync ?? true) !== false;
	return overlay;
};
/** Shell keys owned by Node portable.config — backend wins when present. */
var mapWebnativeBundleToShell$1 = (bundle) => {
	const shell = bundle?.settings?.shell || bundle?.portable?.shell || bundle?.snapshot?.shell;
	if (!shell || typeof shell !== "object") return null;
	return { ...shell };
};
var webnativeBundleCache$1 = null;
var webnativeSnapshotFetchedAt$1 = 0;
var loadWebnativeControlBundle$1 = async () => {
	if (Date.now() - webnativeSnapshotFetchedAt$1 < 2e3 && webnativeBundleCache$1) return webnativeBundleCache$1;
	const bundle = await webnativeControl$1("/service/config");
	webnativeBundleCache$1 = bundle || null;
	bundle?.snapshot || bundle?.settings || bundle?.portable;
	webnativeSnapshotFetchedAt$1 = Date.now();
	return webnativeBundleCache$1;
};
/** Best-effort push of a settings save into `portable.config.json` via the backend control RPC. */
var pushWebnativeSettingsPatch$1 = async (settings) => {
	if (!isWebnativeSurface$1()) return false;
	try {
		const pageHost = String(location.hostname || "").toLowerCase();
		if (location.protocol === "https:" && pageHost !== "127.0.0.1" && pageHost !== "localhost" && pageHost !== "::1" && !readControlSessionToken$1()) {
			console.warn("[Settings] Control session missing — pair before saving to device");
			return false;
		}
	} catch {}
	const core = settings.core;
	if (!core) return false;
	const token = String(core.ecosystemToken || core.userKey || core.socket?.accessToken || "").trim();
	const remoteHost = String(core.endpointUrl || "").trim();
	const clientId = String(core.userId || "").trim();
	const shell = settings.shell || {};
	const patch = {
		bridge: {
			endpointUrl: remoteHost,
			userId: clientId,
			userKey: token,
			allowInsecureTls: Boolean(core.allowInsecureTls)
		},
		shell: {
			remoteHost,
			accessToken: token,
			clientToken: token,
			clipboardBroadcastTargets: String(shell.clipboardBroadcastTargets || core.socket?.routeTarget || "L-196;L-210").trim(),
			clipboardOutboundMode: String(shell.clipboardOutboundMode || "ask").trim().toLowerCase() === "ask" ? "ask" : "auto",
			clipboardInboundMode: String(shell.clipboardInboundMode || "ask").trim().toLowerCase() === "ask" ? "ask" : "auto",
			clipboardOutboundShowErase: shell.clipboardOutboundShowErase !== false,
			clipboardInboundShowUndo: shell.clipboardInboundShowUndo !== false,
			clipboardPromptDismissMs: (() => {
				const n = Number(shell.clipboardPromptDismissMs);
				return Number.isFinite(n) && n >= 1e3 ? Math.floor(n) : 1e4;
			})(),
			filesShareDestinationIds: String(shell.filesShareDestinationIds || "").trim(),
			filesAllowShareToAll: Boolean(shell.filesAllowShareToAll),
			filesOpenForShareMode: String(shell.filesOpenForShareMode || "auto").trim().toLowerCase() === "manual" ? "manual" : "auto",
			filesInboundMode: String(shell.filesInboundMode || "ask").trim().toLowerCase() === "auto" ? "auto" : "ask",
			filesCopyOnReceive: shell.filesCopyOnReceive !== false,
			filesByteTransport: (() => {
				const v = String(shell.filesByteTransport || "auto").trim().toLowerCase();
				return v === "http" || v === "ws" ? v : "auto";
			})(),
			filesLandingMode: (() => {
				const v = String(shell.filesLandingMode || "app").trim().toLowerCase();
				return v === "downloads" || v === "saf" ? v : "app";
			})(),
			filesIncomingDir: String(shell.filesIncomingDir || "").trim(),
			filesAskDirEveryTime: shell.filesAskDirEveryTime !== false,
			filesStagingRoot: (() => {
				const v = String(shell.filesStagingRoot || "app").trim().toLowerCase();
				return v === "cache" || v === "external" ? v : "app";
			})(),
			acceptInboundFilesData: shell.acceptInboundFilesData !== false
		},
		launcherEnv: {
			CWS_ASSOCIATED_ID: clientId,
			CWS_ASSOCIATED_TOKEN: token
		}
	};
	if (core.ops?.directUrl) patch.bridge.endpoints = [String(core.ops.directUrl).trim()];
	const authForPatch = readDesktopControlAuth$2();
	const isCapacitorControl = readControlBridgeVia$1() === "android" || Number(authForPatch?.port) === 8434;
	let body = patch;
	if (isCapacitorControl) {
		const coreIn = { ...settings.core || {} };
		delete coreIn.userKey;
		delete coreIn.ecosystemToken;
		if (coreIn.socket && typeof coreIn.socket === "object") {
			const sock = { ...coreIn.socket };
			delete sock.accessToken;
			delete sock.airpadAuthToken;
			delete sock.clientAccessToken;
			coreIn.socket = sock;
		}
		const shellIn = {
			...patch.shell,
			...settings.shell || {}
		};
		delete shellIn.accessToken;
		delete shellIn.clientToken;
		const bridgeIn = { ...patch.bridge };
		delete bridgeIn.userKey;
		body = {
			...patch,
			bridge: bridgeIn,
			core: coreIn,
			shell: shellIn,
			cwsp: settings.cwsp
		};
	}
	const r = await webnativeControl$1("/service/config", {
		method: "POST",
		body: JSON.stringify(body)
	});
	try {
		const auth = readDesktopControlAuth$2();
		const hubPort = Number(auth?.port) || 0;
		const hubHost = String(auth?.host || "127.0.0.1");
		if (hubPort === 29110 && (hubHost === "127.0.0.1" || hubHost === "localhost" || hubHost === "::1")) {
			const hubBody = {};
			if (remoteHost) hubBody.remoteHost = remoteHost;
			if (token) {
				hubBody.accessToken = token;
				hubBody.clientToken = token;
			}
			if (clientId) hubBody.clientId = clientId;
			if (Object.keys(hubBody).length) await webnativeControl$1("/service/clipboard-hub", {
				method: "POST",
				body: JSON.stringify(hubBody)
			});
		}
	} catch {}
	webnativeSnapshotFetchedAt$1 = 0;
	webnativeBundleCache$1 = null;
	return Boolean(r?.ok === true || isCapacitorControl && r && (r.settings || r.portable));
};
/** First-boot CWSP defaults for CWSAndroid when IDB still has dev/empty endpoint fields. */
var CAPACITOR_CWSP_BOOTSTRAP$1 = {
	core: {
		endpointUrl: "https://192.168.0.200:8434",
		ecosystemToken: "n3v3rm1nd",
		userKey: "n3v3rm1nd",
		allowInsecureTls: true,
		useCoreIdentityForAirPad: true,
		ops: { directUrl: "https://192.168.0.110:8434" },
		socket: {
			routeTarget: "L-110;L-196;L-210",
			accessToken: "n3v3rm1nd",
			allowAccessTokenWithoutUserKey: true,
			protocol: "auto"
		},
		interop: { preferNativeWebsocket: true }
	},
	shell: {
		bridgeDaemonEnabled: true,
		allowControlApi: false,
		autoStartOnBoot: true,
		enableRemoteClipboardBridge: true,
		acceptInboundClipboardData: true,
		applyRemoteClipboardToDevice: true,
		maintainHubSocketConnection: false,
		clipboardShareDestinationIds: "L-110;L-196;L-210",
		clipboardInboundMode: "ask",
		clipboardOutboundMode: "ask"
	}
};
var needsCapacitorCwspBootstrap$1 = (settings) => {
	if (!isCapacitorNativeShell$2()) return false;
	const ep = trimSetting$1(settings.core?.endpointUrl);
	const uid = trimSetting$1(settings.core?.userId);
	const access = trimSetting$1(settings.core?.ecosystemToken) || trimSetting$1(settings.core?.socket?.accessToken) || trimSetting$1(settings.core?.userKey);
	const defaultEp = trimSetting$1(DEFAULT_SETTINGS$1.core?.endpointUrl);
	if (!uid || !access) return true;
	if (!ep || ep === defaultEp || /localhost|127\.0\.0\.1|:8434/i.test(ep)) return true;
	return false;
};
/** Seed mobile CWSP settings + sync to Java prefs on first Capacitor boot. */
var capacitorCwspSeedDone$1 = false;
var ensureCapacitorCwspSettingsSeeded$1 = async () => {
	if (!isCapacitorNativeShell$2()) return null;
	if (capacitorCwspSeedDone$1) return null;
	let nativeUserId = "";
	try {
		if (isCwsNativeIpcAvailable$1()) {
			const core = (await getNativeUnifiedSettings$1())?.core;
			nativeUserId = trimSetting$1(core && typeof core === "object" && core !== null && "userId" in core ? core.userId : "");
		}
	} catch {}
	const current = await loadSettings$1({ nativeOverlay: false });
	const currentUserId = trimSetting$1(current.core?.userId);
	const needsBootstrap = needsCapacitorCwspBootstrap$1(current);
	const identityDrift = Boolean(nativeUserId) && Boolean(currentUserId) && nativeUserId !== currentUserId && isCapacitorFactorySelfId$1(currentUserId) && isHomeFleetClientId$1(nativeUserId);
	const idbUserConfigured = Boolean(currentUserId) && isHomeFleetClientId$1(currentUserId);
	const nativeDriftsFromIdb = Boolean(nativeUserId) && Boolean(currentUserId) && nativeUserId !== currentUserId;
	const nativeIsGuestLanId = Boolean(nativeUserId) && !isHomeFleetClientId$1(nativeUserId);
	if (!needsBootstrap && nativeDriftsFromIdb && (idbUserConfigured || nativeIsGuestLanId)) {
		capacitorCwspSeedDone$1 = true;
		console.log("[Settings] pushing WebView client id to native prefs");
		return saveSettings$1(applyCapacitorShellMigrations$1(current) || current);
	}
	if (!needsBootstrap && !identityDrift) {
		capacitorCwspSeedDone$1 = true;
		const migrated = applyCapacitorShellMigrations$1(current);
		if (migrated) {
			console.log("[Settings] Capacitor shell migrations (desk peers / ask modes)");
			return saveSettings$1(migrated);
		}
		return null;
	}
	if (identityDrift && !needsBootstrap) {
		capacitorCwspSeedDone$1 = true;
		const aligned = {
			...current,
			core: {
				...current.core,
				userId: nativeUserId,
				socket: {
					...current.core?.socket || {},
					selfId: nativeUserId
				}
			}
		};
		console.log("[Settings] aligning Capacitor client id with native prefs");
		return saveSettings$1(applyCapacitorShellMigrations$1(aligned) || aligned);
	}
	const merged = {
		...current,
		core: {
			...CAPACITOR_CWSP_BOOTSTRAP$1.core,
			...current.core,
			userId: (isHomeFleetClientId$1(nativeUserId) ? nativeUserId : "") || (isHomeFleetClientId$1(currentUserId) ? currentUserId : "") || trimSetting$1(CAPACITOR_CWSP_BOOTSTRAP$1.core?.userId) || "",
			ops: {
				...CAPACITOR_CWSP_BOOTSTRAP$1.core?.ops || {},
				...current.core?.ops || {}
			},
			socket: {
				...CAPACITOR_CWSP_BOOTSTRAP$1.core?.socket || {},
				...current.core?.socket || {},
				selfId: (isHomeFleetClientId$1(nativeUserId) ? nativeUserId : "") || (isHomeFleetClientId$1(trimSetting$1(current.core?.socket?.selfId)) ? trimSetting$1(current.core?.socket?.selfId) : "") || ""
			},
			interop: {
				...CAPACITOR_CWSP_BOOTSTRAP$1.core?.interop || {},
				...current.core?.interop || {}
			}
		},
		shell: {
			...CAPACITOR_CWSP_BOOTSTRAP$1.shell || {},
			...current.shell || {}
		}
	};
	console.log("[Settings] seeding Capacitor CWSP defaults");
	capacitorCwspSeedDone$1 = true;
	return saveSettings$1(applyCapacitorShellMigrations$1(merged) || merged);
};
/**
* Chrome extension CWSP defaults: same local hub as Neutralino (`127.0.0.1:8434`),
* wire identity {@code L-110-crx} (distinct from desk Neutralino {@code L-110}).
*
* WHY: sharing L-110 with Neutralino steals the desk socket — inbound ask-holds
* never reach the extension. Neutralino mirrors paste-hold → L-110-crx; CRX
* holds for "Paste by CWSP" and control-take dismisses Accept.
*/
var CRX_CWSP_CLIENT_ID = "L-110-crx";
/** WHY: hub `verify()` requires a non-empty userKey; L-110-crx policy accepts associated tokens. */
var CRX_CWSP_BOOTSTRAP_TOKEN = "n3v3rm1nd";
/** Extension wire hub (chrome.storage) — not CWSP Relay / Neutralino portable. */
var CRX_LOCAL_HUB_URL = "https://127.0.0.1:8434/";
var isCrxExtensionRuntime$1 = () => {
	try {
		const id = globalThis.chrome?.runtime?.id;
		return typeof id === "string" && id.length > 0;
	} catch {
		return false;
	}
};
var readLocalStorageSettingsMirror$1 = () => {
	try {
		const raw = globalThis.localStorage?.getItem?.(SETTINGS_LS_MIRROR_KEY$1);
		if (!raw) return null;
		return JSON.parse(raw);
	} catch {
		return null;
	}
};
var writeLocalStorageSettingsMirror$1 = (value) => {
	try {
		globalThis.localStorage?.setItem?.(SETTINGS_LS_MIRROR_KEY$1, JSON.stringify(value));
		return true;
	} catch {
		return false;
	}
};
/** Control SPA hosts that must never win as Relay / gateway in Capacitor Settings. */
var isControlSpaRelayUrl$1 = (url) => {
	const raw = String(url || "").trim().toLowerCase();
	if (!raw) return false;
	try {
		const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
		const host = new URL(withScheme).hostname.toLowerCase();
		return host === "cwsp.u2re.space" || host === "www.cwsp.u2re.space" || host === "transfer.u2re.space" || host === "www.transfer.u2re.space" || host === "md.u2re.space" || host === "www.md.u2re.space";
	} catch {
		return /cwsp\.u2re\.space|transfer\.u2re\.space|md\.u2re\.space/i.test(raw);
	}
};
/**
* Capacitor-only: overlay native Relay when IDB is empty/loopback/Control-SPA-poisoned.
* WHY: full native overlay was disabled so IDB stays SoT — but Relay must track Java Configure.
*/
var mergeCapacitorNativeRelayOverlay$1 = (base, native) => {
	if (!native || typeof native !== "object") return base;
	const nativeEp = trimSetting$1(native.core?.endpointUrl);
	if (!nativeEp || isControlSpaRelayUrl$1(nativeEp)) return base;
	const localEp = trimSetting$1(base.core?.endpointUrl);
	const localBad = !localEp || isControlSpaRelayUrl$1(localEp) || /^(https?:\/\/)?(127\.0\.0\.1|localhost)(:\d+)?\/?$/i.test(localEp);
	if (!localBad && localEp === nativeEp) return base;
	if (!localBad) return base;
	return {
		...base,
		core: {
			...base.core,
			endpointUrl: nativeEp
		}
	};
};
/** Only apply native fields that carry a non-empty value — empty bridge rows must not wipe IDB. */
var mergeNativeSettingsOverlay$1 = (base, native) => {
	if (!native || typeof native !== "object") return base;
	const patch = {};
	const corePatch = {};
	let touched = false;
	const ep = trimSetting$1(native.core?.endpointUrl);
	if (ep) {
		corePatch.endpointUrl = ep;
		touched = true;
	}
	const userId = trimSetting$1(native.core?.userId);
	if (userId && isHomeFleetClientId$1(userId)) {
		const baseUserId = trimSetting$1(base.core?.userId);
		if (isCapacitorFactorySelfId$1(baseUserId) || !isHomeFleetClientId$1(baseUserId)) {
			corePatch.userId = userId;
			touched = true;
		}
	}
	const userKey = trimSetting$1(native.core?.userKey);
	if (userKey) {
		corePatch.userKey = userKey;
		touched = true;
	}
	const appClientId = trimSetting$1(native.core?.appClientId);
	if (appClientId) {
		corePatch.appClientId = appClientId;
		touched = true;
	}
	const socketPatch = {};
	let socketTouched = false;
	const routeTarget = trimSetting$1(native.core?.socket?.routeTarget);
	if (routeTarget) {
		socketPatch.routeTarget = routeTarget;
		socketTouched = true;
	}
	const accessToken = trimSetting$1(native.core?.socket?.accessToken);
	if (accessToken) {
		socketPatch.accessToken = accessToken;
		socketTouched = true;
	}
	const clientAccessToken = trimSetting$1(native.core?.socket?.clientAccessToken);
	if (clientAccessToken) {
		socketPatch.clientAccessToken = clientAccessToken;
		socketTouched = true;
	}
	const nativeSelfId = trimSetting$1(native.core?.socket?.selfId);
	if (nativeSelfId && isHomeFleetClientId$1(nativeSelfId)) {
		const baseSelfId = trimSetting$1(base.core?.socket?.selfId) || trimSetting$1(base.core?.userId);
		if (isCapacitorFactorySelfId$1(baseSelfId) || !isHomeFleetClientId$1(baseSelfId)) {
			socketPatch.selfId = nativeSelfId;
			socketTouched = true;
		}
	}
	if (socketTouched) {
		corePatch.socket = socketPatch;
		touched = true;
	}
	const shellPatch = {};
	let shellTouched = false;
	const shareDest = trimSetting$1(native.shell?.clipboardShareDestinationIds);
	if (shareDest) {
		shellPatch.clipboardShareDestinationIds = shareDest;
		shellTouched = true;
	}
	const inboundAllow = trimSetting$1(native.shell?.clipboardInboundAllowIds);
	if (inboundAllow) {
		shellPatch.clipboardInboundAllowIds = inboundAllow;
		shellTouched = true;
	}
	if (shellTouched) {
		patch.shell = shellPatch;
		touched = true;
	}
	if (!touched) return base;
	patch.core = corePatch;
	return mergeAppSettingsShape$1(base, patch);
};
var splitPath = (path) => path.split(".");
var getByPath = (source, path) => splitPath(path).reduce((acc, key) => acc == null ? acc : acc[key], source);
var slugify = (value) => value.replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase();
var DB_NAME$1 = "req-store";
var STORE$1 = "settings";
var mergeAppSettingsShape$1 = (base, patch) => {
	if (!patch || typeof patch !== "object") return base;
	return {
		...base,
		...patch,
		core: {
			...base.core || {},
			...patch.core || {},
			network: {
				...base.core?.network || {},
				...patch.core?.network || {}
			},
			socket: {
				...base.core?.socket || {},
				...patch.core?.socket || {}
			},
			interop: {
				...base.core?.interop || {},
				...patch.core?.interop || {}
			},
			ops: {
				...base.core?.ops || {},
				...patch.core?.ops || {}
			},
			admin: {
				...base.core?.admin || {},
				...patch.core?.admin || {}
			}
		},
		ai: {
			...base.ai || {},
			...patch.ai || {},
			mcp: patch.ai?.mcp ?? base.ai?.mcp ?? [],
			customInstructions: patch.ai?.customInstructions ?? base.ai?.customInstructions ?? [],
			activeInstructionId: patch.ai?.activeInstructionId ?? base.ai?.activeInstructionId ?? ""
		},
		webdav: {
			...base.webdav || {},
			...patch.webdav || {}
		},
		timeline: {
			...base.timeline || {},
			...patch.timeline || {}
		},
		appearance: {
			...base.appearance || {},
			...patch.appearance || {},
			markdown: {
				...base.appearance?.markdown || {},
				...patch.appearance?.markdown || {},
				page: {
					...base.appearance?.markdown?.page || {},
					...patch.appearance?.markdown?.page || {}
				},
				modules: {
					...base.appearance?.markdown?.modules || {},
					...patch.appearance?.markdown?.modules || {}
				},
				plugins: {
					...base.appearance?.markdown?.plugins || {},
					...patch.appearance?.markdown?.plugins || {}
				}
			}
		},
		speech: {
			...base.speech || {},
			...patch.speech || {}
		},
		grid: {
			...base.grid || {},
			...patch.grid || {}
		},
		shell: {
			...base.shell || {},
			...patch.shell || {}
		},
		openPolicyByHost: mergeOpenPolicyByHost$1(base.openPolicyByHost, patch.openPolicyByHost),
		openPolicy: resolveHostOpenPolicy$1({
			openPolicy: mergeOpenPolicy$1(base.openPolicy, patch.openPolicy),
			openPolicyByHost: mergeOpenPolicyByHost$1(base.openPolicyByHost, patch.openPolicyByHost)
		})
	};
};
var getWebDavCreateClient$1 = async () => {
	return null;
};
var isContentScriptContext$1 = () => {
	try {
		if (typeof chrome === "undefined" || !chrome?.runtime) return false;
		if (typeof window !== "undefined" && globalThis?.location?.protocol?.startsWith("http")) return true;
		return false;
	} catch {
		return false;
	}
};
var hasChromeStorage$1 = () => typeof chrome !== "undefined" && chrome?.storage?.local;
async function idbOpen$1() {
	if (typeof indexedDB === "undefined") throw new Error("IndexedDB not available");
	if (isContentScriptContext$1()) throw new Error("IndexedDB not accessible in content script context");
	return new Promise((res, rej) => {
		try {
			const req = indexedDB.open(DB_NAME$1, 1);
			req.onupgradeneeded = () => req.result.createObjectStore(STORE$1, { keyPath: "key" });
			req.onsuccess = () => res(req.result);
			req.onerror = () => rej(req.error);
		} catch (e) {
			rej(e);
		}
	});
}
var idbGetSettings$1 = async (key = SETTINGS_KEY$1) => {
	try {
		if (isCapacitorNativeShell$2() && typeof indexedDB !== "undefined") {
			try {
				const db = await idbOpen$1();
				const idbValue = await new Promise((res, rej) => {
					const req = db.transaction(STORE$1, "readonly").objectStore(STORE$1).get(key);
					req.onsuccess = () => {
						res(req.result?.value);
						db.close();
					};
					req.onerror = () => {
						rej(req.error);
						db.close();
					};
				});
				if (idbValue != null) return idbValue;
			} catch (e) {
				console.warn("[Settings] Capacitor IndexedDB read failed, trying mirror:", e);
			}
			const mirror = readLocalStorageSettingsMirror$1();
			if (mirror != null) return mirror;
		}
		if (hasChromeStorage$1()) {
			console.log("[Settings] Using chrome.storage.local for get");
			const chromeValue = await new Promise((res) => {
				try {
					chrome.storage.local.get([key], (result) => {
						if (chrome.runtime.lastError) {
							console.warn("[Settings] chrome.storage.local.get error:", chrome.runtime.lastError);
							res(null);
						} else {
							console.log("[Settings] chrome.storage.local.get success, has data:", !!result[key]);
							res(result[key]);
						}
					});
				} catch (e) {
					console.warn("[Settings] chrome.storage access failed:", e);
					res(null);
				}
			});
			if (chromeValue != null) return chromeValue;
		}
		if (typeof indexedDB !== "undefined") {
			console.log("[Settings] Using IndexedDB for get");
			const db = await idbOpen$1();
			const idbValue = await new Promise((res, rej) => {
				const req = db.transaction(STORE$1, "readonly").objectStore(STORE$1).get(key);
				req.onsuccess = () => {
					console.log("[Settings] IndexedDB get success, has data:", !!req.result?.value);
					res(req.result?.value);
					db.close();
				};
				req.onerror = () => {
					console.warn("[Settings] IndexedDB get error:", req.error);
					rej(req.error);
					db.close();
				};
			});
			if (idbValue != null) return idbValue;
		} else console.warn("[Settings] IndexedDB not available");
	} catch (e) {
		console.warn("[Settings] Settings storage access failed:", e);
	}
	const mirror = readLocalStorageSettingsMirror$1();
	if (mirror != null) {
		console.log("[Settings] Using localStorage mirror fallback for get");
		return mirror;
	}
	return null;
};
var idbPutSettings$1 = async (value, key = SETTINGS_KEY$1) => {
	let idbOk = false;
	let lsOk = false;
	if (hasChromeStorage$1()) {
		await new Promise((res, rej) => {
			try {
				chrome.storage.local.set({ [key]: value }, () => {
					if (chrome.runtime.lastError) rej(chrome.runtime.lastError);
					else res();
				});
			} catch (e) {
				rej(e);
			}
		});
		return;
	}
	lsOk = writeLocalStorageSettingsMirror$1(value);
	try {
		if (typeof indexedDB === "undefined") {
			if (!lsOk && isCapacitorNativeShell$2()) throw new Error("Settings storage unavailable (no IndexedDB or localStorage)");
			return;
		}
		const db = await idbOpen$1();
		await new Promise((res, rej) => {
			const tx = db.transaction(STORE$1, "readwrite");
			tx.objectStore(STORE$1).put({
				key,
				value
			});
			tx.oncomplete = () => {
				idbOk = true;
				res();
				db.close();
			};
			tx.onerror = () => {
				rej(tx.error);
				db.close();
			};
		});
	} catch (e) {
		console.warn("[Settings] IndexedDB write failed:", e);
		if (!lsOk && isCapacitorNativeShell$2()) throw new Error("Settings could not be saved (IndexedDB and localStorage failed)");
	}
	if (!idbOk && lsOk) console.log("[Settings] persisted to localStorage mirror (IndexedDB skipped or failed)");
};
/** Normalize `core.endpointUrl` for equality checks (scheme + host + port, lowercase).
* Multi-hub lists stay multi-hub (`;`-joined); never parse the whole list as one URL.
*/
var normalizeCoreEndpointOrigin$1 = (raw) => {
	const t = (raw || "").trim();
	if (!t) return "";
	return (migrateLegacyCwspPublicPort(t) || t).toLowerCase();
};
/** Rewrite legacy `:8443` URLs and listenPort in persisted settings after fleet port migration. */
var applyLegacyCwspPortMigration$1 = (settings) => {
	const core = settings.core;
	if (!core) return settings;
	const migrateList = (items) => items?.map((entry) => migrateLegacyCwspPublicPort(entry));
	const migrateTargets = (items) => items?.map((entry) => ({
		...entry,
		url: migrateLegacyCwspPublicPort(entry.url ?? "")
	}));
	const listenPortHttps = core.network?.listenPortHttps === 8443 || core.network?.listenPortHttps === 8343 ? 8434 : core.network?.listenPortHttps;
	return {
		...settings,
		core: {
			...core,
			endpointUrl: migrateLegacyCwspPublicPort(core.endpointUrl ?? ""),
			ops: core.ops ? {
				...core.ops,
				directUrl: migrateLegacyCwspPublicPort(core.ops.directUrl ?? ""),
				httpTargets: migrateTargets(core.ops.httpTargets),
				wsTargets: migrateTargets(core.ops.wsTargets),
				syncTargets: migrateTargets(core.ops.syncTargets)
			} : core.ops,
			admin: core.admin ? {
				...core.admin,
				httpsOrigin: migrateLegacyCwspPublicPort(core.admin.httpsOrigin ?? "")
			} : core.admin,
			network: core.network ? {
				...core.network,
				listenPortHttps,
				destinations: migrateList(core.network.destinations)
			} : core.network
		}
	};
};
/**
* True when persisted settings explicitly contain `shell.maintainHubSocketConnection`
* (Shell section was saved with that field — distinct from merge-time defaults).
*/
var didPersistShellMaintainHubSocket$1 = async () => {
	try {
		const raw = await idbGetSettings$1();
		const stored = typeof raw === "string" ? JSOX.parse(raw) : raw;
		if (!stored || typeof stored !== "object") return false;
		const shell = stored.shell;
		return typeof shell === "object" && shell !== null && Object.prototype.hasOwnProperty.call(shell, "maintainHubSocketConnection");
	} catch {
		return false;
	}
};
/**
* Seed CRX wire identity + Local hub only.
*
* INVARIANT: do not write CWSP Relay (`core.endpointUrl`), clipboard modes, or
* gateway bootstrap into chrome.storage — those load from Neutralino Control at
* Extension Local hub URL (`shell.localHubUrl`, default https://127.0.0.1:8434)
* via settings:get /service/config.
*/
var crxCwspSeedDone = false;
var ensureCrxCwspSettingsSeeded = async () => {
	if (!isCrxExtensionRuntime$1()) return null;
	if (crxCwspSeedDone) return null;
	const current = await loadSettings$1({ nativeOverlay: false });
	const currentUserId = trimSetting$1(current.core?.userId);
	const hubPersisted = await didPersistShellMaintainHubSocket$1();
	const existingToken = trimSetting$1(current.core?.ecosystemToken) || trimSetting$1(current.core?.userKey) || trimSetting$1(current.core?.socket?.accessToken);
	const needsHttpsProtocol = current.core?.socket?.protocol !== "https";
	const needsCrxIdNormalize = /^L-110$/i.test(currentUserId);
	const savedLocalHub = trimSetting$1(current.shell?.localHubUrl);
	const needsLocalHub = !savedLocalHub;
	if (!(!currentUserId || needsCrxIdNormalize || !/^L-110-crx$/i.test(currentUserId) || !hubPersisted || !existingToken || needsHttpsProtocol || needsLocalHub)) {
		crxCwspSeedDone = true;
		return null;
	}
	const keepUserId = CRX_CWSP_CLIENT_ID;
	const savedEp = trimSetting$1(current.core?.endpointUrl);
	const savedEpIsLoopback = (() => {
		try {
			const h = new URL(/^https?:\/\//i.test(savedEp) ? savedEp : `https://${savedEp}`).hostname.toLowerCase();
			return h === "127.0.0.1" || h === "localhost" || h === "::1";
		} catch {
			return /^(https?:\/\/)?(127\.0\.0\.1|localhost)(:|\/|$)/i.test(savedEp);
		}
	})();
	const localHubUrl = savedLocalHub || (savedEpIsLoopback && savedEp ? savedEp : "") || CRX_LOCAL_HUB_URL;
	const relayUrl = savedEpIsLoopback ? "" : savedEp;
	const seedToken = existingToken || CRX_CWSP_BOOTSTRAP_TOKEN;
	const merged = {
		...current,
		core: {
			...current.core,
			allowInsecureTls: current.core?.allowInsecureTls ?? true,
			useCoreIdentityForAirPad: current.core?.useCoreIdentityForAirPad ?? true,
			userId: keepUserId,
			...existingToken ? {} : {
				ecosystemToken: seedToken,
				userKey: seedToken
			},
			endpointUrl: relayUrl,
			ops: { ...current.core?.ops || {} },
			socket: {
				...current.core?.socket || {},
				selfId: keepUserId,
				protocol: "https",
				...existingToken ? {} : {
					accessToken: seedToken,
					allowAccessTokenWithoutUserKey: true
				},
				allowAccessTokenWithoutUserKey: current.core?.socket?.allowAccessTokenWithoutUserKey ?? true
			}
		},
		shell: {
			...current.shell,
			localHubUrl,
			maintainHubSocketConnection: hubPersisted ? Boolean(current.shell?.maintainHubSocketConnection) : true,
			clientId: (() => {
				const cid = trimSetting$1(current.shell?.clientId);
				if (!cid || /^L-\d{1,3}-crx$/i.test(cid)) return "L-110";
				return cid;
			})()
		}
	};
	console.log("[Settings] seeding CRX wire defaults (Relay left for Control hydrate)", {
		clientId: keepUserId,
		relay: merged.core?.endpointUrl || "(empty → Neutralino)",
		localHub: merged.shell?.localHubUrl
	});
	crxCwspSeedDone = true;
	return saveSettings$1(merged);
};
/**
* MV3 Chrome extension: skip hub WebSocket bootstrap only when hub-maintain is off and
* the endpoint is still the unused bundled default. When CRX seeds {@code maintainHubSocketConnection}
* (localhost Neutralino hub or WAN), connect immediately.
*/
var shouldDeferCrxHubSocketBootstrap$1 = async (settings) => {
	if (!isCrxExtensionRuntime$1()) return false;
	if (settings.shell?.maintainHubSocketConnection === true) return false;
	if (await didPersistShellMaintainHubSocket$1()) return false;
	const defaultEp = normalizeCoreEndpointOrigin$1(DEFAULT_SETTINGS$1.core?.endpointUrl || "");
	const currentEp = normalizeCoreEndpointOrigin$1(settings.core?.endpointUrl || "");
	return Boolean(defaultEp) && currentEp === defaultEp;
};
var loadSettings$1 = async (opts) => {
	try {
		let raw = await idbGetSettings$1();
		if (raw == null) raw = readLocalStorageSettingsMirror$1();
		const stored = typeof raw === "string" ? JSOX.parse(raw) : raw;
		console.log("[Settings] loadSettings - raw type:", typeof raw, "stored type:", typeof stored);
		if (stored && typeof stored === "object") {
			let result = {
				core: {
					...DEFAULT_SETTINGS$1.core,
					...stored?.core,
					network: {
						...DEFAULT_SETTINGS$1.core?.network || {},
						...stored?.core?.network || {}
					},
					socket: {
						...DEFAULT_SETTINGS$1.core?.socket || {},
						...stored?.core?.socket || {}
					},
					interop: {
						...DEFAULT_SETTINGS$1.core?.interop || {},
						...stored?.core?.interop || {}
					},
					ops: {
						...DEFAULT_SETTINGS$1.core?.ops || {},
						...stored?.core?.ops || {}
					},
					admin: {
						...DEFAULT_SETTINGS$1.core?.admin || {},
						...stored?.core?.admin || {}
					}
				},
				ai: {
					...DEFAULT_SETTINGS$1.ai,
					...stored?.ai,
					mcp: stored?.ai?.mcp || [],
					customInstructions: stored?.ai?.customInstructions || [],
					activeInstructionId: stored?.ai?.activeInstructionId || ""
				},
				webdav: {
					...DEFAULT_SETTINGS$1.webdav,
					...stored?.webdav
				},
				timeline: {
					...DEFAULT_SETTINGS$1.timeline,
					...stored?.timeline
				},
				appearance: {
					...DEFAULT_SETTINGS$1.appearance,
					...stored?.appearance,
					markdown: {
						...DEFAULT_SETTINGS$1.appearance?.markdown || {},
						...stored?.appearance?.markdown || {},
						page: {
							...DEFAULT_SETTINGS$1.appearance?.markdown?.page || {},
							...stored?.appearance?.markdown?.page || {}
						},
						modules: {
							...DEFAULT_SETTINGS$1.appearance?.markdown?.modules || {},
							...stored?.appearance?.markdown?.modules || {}
						},
						plugins: {
							...DEFAULT_SETTINGS$1.appearance?.markdown?.plugins || {},
							...stored?.appearance?.markdown?.plugins || {}
						}
					}
				},
				speech: {
					...DEFAULT_SETTINGS$1.speech,
					...stored?.speech
				},
				grid: {
					...DEFAULT_SETTINGS$1.grid,
					...stored?.grid
				},
				shell: {
					...DEFAULT_SETTINGS$1.shell || {},
					...stored?.shell || {}
				},
				appMenu: {
					...DEFAULT_SETTINGS$1.appMenu,
					...stored?.appMenu
				},
				explorer: {
					...DEFAULT_SETTINGS$1.explorer,
					...stored?.explorer
				},
				openPolicyByHost: mergeOpenPolicyByHost$1(stored?.openPolicyByHost),
				openPolicy: resolveHostOpenPolicy$1({
					openPolicy: stored?.openPolicy,
					openPolicyByHost: stored?.openPolicyByHost
				})
			};
			try {
				if (opts?.nativeOverlay !== false && isCwsNativeIpcAvailable$1()) {
					const nativeSettings = await getNativeUnifiedSettings$1();
					if (nativeSettings && typeof nativeSettings === "object") {
						if (isCapacitorNativeShell$2()) result = mergeCapacitorNativeRelayOverlay$1(result, nativeSettings);
						else result = mergeNativeSettingsOverlay$1(result, nativeSettings);
					}
				}
			} catch {}
			try {
				if (isWebnativeSurface$1()) {
					if ((result.core?.preferBackendSync ?? true) !== false) {
						const bundle = await loadWebnativeControlBundle$1();
						const coreOverlay = mapWebnativeSnapshotToCore$1({
							...bundle?.snapshot || bundle?.settings || bundle?.portable || {},
							...bundle?.settings || {},
							...bundle?.portable || {}
						});
						const shellOverlay = mapWebnativeBundleToShell$1(bundle);
						if (coreOverlay || shellOverlay) result = {
							...result || { core: {} },
							core: coreOverlay ? {
								...result.core || {},
								...coreOverlay,
								socket: {
									...result.core?.socket || {},
									...coreOverlay.socket || {}
								},
								ops: { ...result.core?.ops || {} },
								admin: { ...result.core?.admin || {} },
								network: { ...result.core?.network || {} },
								interop: { ...result.core?.interop || {} }
							} : result.core,
							shell: shellOverlay ? {
								...result.shell || {},
								...shellOverlay
							} : result.shell
						};
					}
				}
			} catch {}
			console.log("[Settings] loadSettings result:", {
				hasApiKey: !!result.ai?.apiKey,
				instructionCount: result.ai?.customInstructions?.length || 0,
				activeInstructionId: result.ai?.activeInstructionId || "(none)"
			});
			const migrated = applyLegacyCwspPortMigration$1(result);
			rememberOpenPolicyFromSettings$1(migrated);
			return migrated;
		}
		console.log("[Settings] loadSettings - no stored data, returning defaults");
	} catch (e) {
		console.warn("[Settings] loadSettings error:", e);
	}
	const fallback = JSOX.parse(JSOX.stringify(DEFAULT_SETTINGS$1));
	rememberOpenPolicyFromSettings$1(fallback);
	return fallback;
};
var saveSettings$1 = async (settings) => {
	const current = await loadSettings$1({ nativeOverlay: false });
	const getMcp = () => {
		if (settings.ai?.mcp !== void 0) return settings.ai.mcp;
		if (current.ai?.mcp !== void 0) return current.ai.mcp;
		return [];
	};
	const getCustomInstructions = () => {
		if (settings.ai?.customInstructions !== void 0) return settings.ai.customInstructions;
		if (current.ai?.customInstructions !== void 0) return current.ai.customInstructions;
		return [];
	};
	const getActiveInstructionId = () => {
		if (Object.prototype.hasOwnProperty.call(settings.ai || {}, "activeInstructionId")) return settings.ai?.activeInstructionId ?? "";
		if (current.ai?.activeInstructionId !== void 0) return current.ai.activeInstructionId;
		return "";
	};
	const merged = {
		core: {
			...DEFAULT_SETTINGS$1.core || {},
			...current.core || {},
			...settings.core || {},
			network: {
				...DEFAULT_SETTINGS$1.core?.network || {},
				...current.core?.network || {},
				...settings.core?.network || {}
			},
			socket: {
				...DEFAULT_SETTINGS$1.core?.socket || {},
				...current.core?.socket || {},
				...settings.core?.socket || {}
			},
			interop: {
				...DEFAULT_SETTINGS$1.core?.interop || {},
				...current.core?.interop || {},
				...settings.core?.interop || {}
			},
			ops: {
				...DEFAULT_SETTINGS$1.core?.ops || {},
				...current.core?.ops || {},
				...settings.core?.ops || {}
			},
			admin: {
				...DEFAULT_SETTINGS$1.core?.admin || {},
				...current.core?.admin || {},
				...settings.core?.admin || {}
			}
		},
		ai: {
			...DEFAULT_SETTINGS$1.ai || {},
			...current.ai || {},
			...settings.ai || {},
			mcp: getMcp(),
			customInstructions: getCustomInstructions(),
			activeInstructionId: getActiveInstructionId()
		},
		webdav: {
			...DEFAULT_SETTINGS$1.webdav || {},
			...current.webdav || {},
			...settings.webdav || {}
		},
		timeline: {
			...DEFAULT_SETTINGS$1.timeline || {},
			...current.timeline || {},
			...settings.timeline || {}
		},
		appearance: {
			...DEFAULT_SETTINGS$1.appearance || {},
			...current.appearance || {},
			...settings.appearance || {},
			markdown: {
				...DEFAULT_SETTINGS$1.appearance?.markdown || {},
				...current.appearance?.markdown || {},
				...settings.appearance?.markdown || {},
				page: {
					...DEFAULT_SETTINGS$1.appearance?.markdown?.page || {},
					...current.appearance?.markdown?.page || {},
					...settings.appearance?.markdown?.page || {}
				},
				modules: {
					...DEFAULT_SETTINGS$1.appearance?.markdown?.modules || {},
					...current.appearance?.markdown?.modules || {},
					...settings.appearance?.markdown?.modules || {}
				},
				plugins: {
					...DEFAULT_SETTINGS$1.appearance?.markdown?.plugins || {},
					...current.appearance?.markdown?.plugins || {},
					...settings.appearance?.markdown?.plugins || {}
				}
			}
		},
		speech: {
			...DEFAULT_SETTINGS$1.speech || {},
			...current.speech || {},
			...settings.speech || {}
		},
		grid: {
			...DEFAULT_SETTINGS$1.grid || {},
			...current.grid || {},
			...settings.grid || {}
		},
		shell: {
			...DEFAULT_SETTINGS$1.shell || {},
			...current.shell || {},
			...settings.shell || {}
		},
		appMenu: {
			...DEFAULT_SETTINGS$1.appMenu || {},
			...current.appMenu || {},
			...settings.appMenu || {}
		},
		explorer: {
			...DEFAULT_SETTINGS$1.explorer || {},
			...current.explorer || {},
			...settings.explorer || {}
		},
		openPolicyByHost: (() => {
			const host = detectSettingsHost$1();
			const next = mergeOpenPolicy$1(DEFAULT_SETTINGS$1.openPolicy, current.openPolicy, settings.openPolicy);
			return mergeOpenPolicyByHost$1(current.openPolicyByHost, settings.openPolicyByHost, { [host]: next });
		})(),
		openPolicy: resolveHostOpenPolicy$1({
			openPolicy: mergeOpenPolicy$1(DEFAULT_SETTINGS$1.openPolicy, current.openPolicy, settings.openPolicy),
			openPolicyByHost: mergeOpenPolicyByHost$1(current.openPolicyByHost, settings.openPolicyByHost, { [detectSettingsHost$1()]: mergeOpenPolicy$1(DEFAULT_SETTINGS$1.openPolicy, current.openPolicy, settings.openPolicy) })
		})
	};
	if (merged.core) {
		const canonicalUserId = normalizePersistedClientId$1(merged.core.userId);
		if (canonicalUserId) merged.core.userId = canonicalUserId;
		normalizeEcosystemToken$1(merged);
		if (merged.core.socket) {
			const selfRaw = String(merged.core.socket.selfId || "").trim();
			if (selfRaw) {
				const canonicalSelf = normalizePersistedClientId$1(selfRaw);
				merged.core.socket.selfId = canonicalSelf && canonicalSelf === (merged.core.userId || "") ? canonicalSelf : "";
			} else merged.core.socket.selfId = "";
		}
	}
	rememberOpenPolicyFromSettings$1(merged);
	await idbPutSettings$1(merged);
	lastSettingsSaveReport$1 = { nativeSynced: null };
	try {
		if (isCwsNativeIpcAvailable$1()) {
			await initCwsNativeBridge$1().catch(() => null);
			const patch = await patchNativeUnifiedSettingsDetailed$1(merged);
			lastSettingsSaveReport$1 = {
				nativeSynced: patch.ok,
				nativeError: patch.error
			};
			if (!patch.ok) console.warn("[Settings] native settings patch did not confirm ok:", patch.error);
		}
	} catch (e) {
		lastSettingsSaveReport$1 = {
			nativeSynced: false,
			nativeError: String(e instanceof Error ? e.message : e)
		};
		console.warn("[Settings] native settings patch failed:", e);
	}
	if (isWebnativeSurface$1() && !isCapacitorNativeShell$2() && !isPublicCwspControlSpa$1()) try {
		const ok = await pushWebnativeSettingsPatch$1(merged);
		const via = readControlBridgeVia$1();
		lastSettingsSaveReport$1 = {
			...lastSettingsSaveReport$1,
			webnativeSynced: ok,
			webnativeError: ok ? void 0 : via === "android" ? "phone Control unreachable (Allow Control API + Pair + Accept)" : "desk Control RPC unavailable"
		};
		if (!ok) console.warn("[Settings] Control config patch not confirmed");
	} catch (e) {
		lastSettingsSaveReport$1 = {
			...lastSettingsSaveReport$1,
			webnativeSynced: false,
			webnativeError: String(e instanceof Error ? e.message : e)
		};
		console.warn("[Settings] Control config patch failed:", e);
	}
	try {
		applyAirpadRuntimeFromAppSettings(merged);
		syncAirpadRemoteConfigFromAppSettings(merged, { persist: true });
	} catch (e) {
		console.warn("[Settings] AirPad runtime sync failed:", e);
	}
	updateWebDavSettings$1(merged)?.catch?.(console.warn.bind(console));
	return merged;
};
var joinPath$1 = (base, name, addTrailingSlash = false) => {
	const b = (base || "/").replace(/\/+$/g, "") || "/";
	const n = (name || "").replace(/^\/+/g, "");
	let out = b === "/" ? `/${n}` : `${b}/${n}`;
	if (addTrailingSlash) out = out.replace(/\/?$/g, "/");
	return out.replace(/\/{2,}/g, "/");
};
var isDirHandle$1 = (h) => h?.kind === "directory";
var safeTime$1 = (v) => {
	const t = new Date(v).getTime();
	return Number.isFinite(t) ? t : 0;
};
/** Lazy `fest/lure` — keeps content scripts / lightweight callers from pulling lure + UI CSS. */
var lureFsPromise$1 = null;
var isServiceWorkerScope$1 = () => {
	try {
		return typeof globalThis.ServiceWorkerGlobalScope !== "undefined" && typeof globalThis.clients !== "undefined" && typeof globalThis.document === "undefined";
	} catch {
		return false;
	}
};
var loadLureFs$1 = () => {
	if (isServiceWorkerScope$1()) return Promise.reject(/* @__PURE__ */ new Error("@fest-lib/lure FS unavailable in ServiceWorkerGlobalScope"));
	if (!lureFsPromise$1) lureFsPromise$1 = __vitePreload(() => import("../com/app.js").then((n) => n.Dt).then((m) => ({
		getDirectoryHandle: m.getDirectoryHandle,
		readFile: m.readFile
	})), __vite__mapDeps([1,2]), import.meta.url);
	return lureFsPromise$1;
};
var downloadContentsToOPFS$1 = async (webDavClient, path = "/", opts = {}, rootHandle = null) => {
	const { getDirectoryHandle, readFile } = await loadLureFs$1();
	const files = await webDavClient?.getDirectoryContents?.(path || "/")?.catch?.((e) => {
		console.warn(e);
		return [];
	});
	if (opts.pruneLocal && files?.length > 0) try {
		const dirHandle = await getDirectoryHandle(rootHandle, path)?.catch?.(() => null);
		if (dirHandle?.entries) {
			const localEntries = await Array.fromAsync(dirHandle.entries());
			const remoteNames = new Set(files?.map?.((f) => f?.basename).filter(Boolean));
			await Promise.all(localEntries.filter(([name]) => !remoteNames.has(name)).map(([name]) => dirHandle.removeEntry(name, { recursive: true })?.catch?.(console.warn.bind(console))));
		}
	} catch (e) {
		console.warn(e);
	}
	return Promise.all(files.map(async (file) => {
		const isDir = file?.type === "directory";
		const fullPath = isDir ? joinPath$1(file.filename, "", true) : file.filename;
		if (isDir) return downloadContentsToOPFS$1(webDavClient, fullPath, opts, rootHandle);
		if (file?.type === "file") {
			const localMtime = safeTime$1((await readFile(rootHandle, fullPath).catch(() => null))?.lastModified);
			if (safeTime$1(file?.lastmod) > localMtime) {
				const contents = await webDavClient.getFileContents(fullPath).catch((e) => {
					console.warn(e);
					return null;
				});
				if (!contents || contents.byteLength === 0) return;
				const mime = file?.mime || "application/octet-stream";
				return writeFileSmart(rootHandle, fullPath, new File([contents], file.basename, { type: mime }));
			}
		}
	}));
};
var uploadOPFSToWebDav$1 = async (webDavClient, dirHandle = null, path = "/", opts = {}) => {
	const { getDirectoryHandle } = await loadLureFs$1();
	const effectiveDirHandle = dirHandle ?? await getDirectoryHandle(null, path, { create: true })?.catch?.(console.warn.bind(console));
	const entries = await Array.fromAsync(effectiveDirHandle?.entries?.() ?? []);
	if (path != "/") {
		if (opts.pruneRemote && entries?.length >= 0) {
			const remoteItems = await webDavClient.getDirectoryContents(path || "/").catch((e) => {
				console.warn(e);
				return [];
			});
			const localSet = new Set(entries.map(([name]) => name.toLowerCase()));
			const filesFirst = [...remoteItems.filter((r) => {
				const base = (r?.basename || "").toLowerCase();
				return base && !localSet.has(base);
			}).filter((x) => x.type !== "directory")];
			for (const r of filesFirst) {
				const remotePath = r.filename || joinPath$1(path, r.basename, r.type === "directory");
				try {
					await webDavClient.deleteFile(remotePath);
				} catch (e) {
					console.warn("delete failed:", remotePath, e);
				}
			}
		}
	}
	await Promise.all(entries.map(async ([name, fileOrDir]) => {
		const isDir = isDirHandle$1(fileOrDir);
		const remotePath = joinPath$1(path, name, isDir);
		if (isDir) {
			const dirPathNoSlash = joinPath$1(path, name, false);
			if (!await webDavClient.exists(dirPathNoSlash).catch((_e) => {
				return false;
			})) await webDavClient.createDirectory(dirPathNoSlash, { recursive: true }).catch(console.warn);
			return uploadOPFSToWebDav$1(webDavClient, fileOrDir, remotePath, opts);
		}
		const fileContent = await fileOrDir.getFile();
		if (!fileContent || fileContent.size === 0) return;
		const fullFilePath = joinPath$1(path, name, false);
		const remoteStat = await webDavClient.stat(fullFilePath).catch(() => null);
		const remoteMtime = safeTime$1(remoteStat?.lastmod);
		const localMtime = safeTime$1(fileContent.lastModified);
		if (!remoteStat || localMtime > remoteMtime) await webDavClient.putFileContents(fullFilePath, await fileContent.arrayBuffer(), { overwrite: true }).catch((_e) => {
			return null;
		});
	}));
};
var getHostOnly$1 = (address) => {
	const url = new URL(address);
	return url.protocol + url.hostname + ":" + url.port;
};
var WebDavSync$1 = async (address, options = {}) => {
	console.log("[Settings] WebDavSync", address, options);
	if (!address) return null;
	const createClient = await getWebDavCreateClient$1();
	if (!createClient) return null;
	const client = createClient(getHostOnly$1(address), options);
	return {
		status: currentWebDav$1?.sync?.getDAVCompliance?.()?.catch?.(console.warn.bind(console)) ?? null,
		client,
		upload(withPrune = false) {
			if (this.status != null) return uploadOPFSToWebDav$1(client, null, "/", { pruneRemote: withPrune })?.catch?.((e) => {
				console.warn(e);
				return [];
			});
		},
		download(withPrune = false) {
			if (this.status != null) return downloadContentsToOPFS$1(client, "/", { pruneLocal: withPrune })?.catch?.((e) => {
				console.warn(e);
				return [];
			});
		}
	};
};
var currentWebDav$1 = { sync: null };
if (!isContentScriptContext$1()) (async () => {
	try {
		const settings = await loadSettings$1();
		if (settings?.core?.mode === "endpoint" && settings?.core?.preferBackendSync) return;
		if (!settings?.webdav?.url) return;
		currentWebDav$1.sync = await WebDavSync$1(settings.webdav.url, {
			withCredentials: true,
			username: settings.webdav.username,
			password: settings.webdav.password,
			token: settings.webdav.token
		}) ?? currentWebDav$1.sync;
		await currentWebDav$1?.sync?.upload?.(true);
		await currentWebDav$1?.sync?.download?.(true);
	} catch (e) {}
})();
var updateWebDavSettings$1 = async (settings) => {
	settings ||= await loadSettings$1();
	if (settings?.core?.mode === "endpoint" && settings?.core?.preferBackendSync) {
		currentWebDav$1.sync = null;
		return;
	}
	if (!settings?.webdav?.url) return;
	currentWebDav$1.sync = await WebDavSync$1(settings.webdav.url, {
		withCredentials: true,
		username: settings.webdav.username,
		password: settings.webdav.password,
		token: settings.webdav.token
	}) ?? currentWebDav$1.sync;
	await currentWebDav$1?.sync?.upload?.();
	await currentWebDav$1?.sync?.download?.(true);
};
if (!isContentScriptContext$1()) {
	try {
		if (typeof window !== "undefined" && typeof addEventListener === "function") {
			addEventListener("pagehide", () => {
				currentWebDav$1?.sync?.upload?.()?.catch?.(() => {});
			});
			addEventListener("beforeunload", () => {
				currentWebDav$1?.sync?.upload?.()?.catch?.(() => {});
			});
		}
	} catch {}
	(async () => {
		try {
			while (true) {
				await currentWebDav$1?.sync?.upload?.()?.catch?.(() => {});
				await new Promise((resolve) => setTimeout(resolve, 3e3));
			}
		} catch {}
	})();
}
//#endregion
//#region src/shared/routing/core/view-transitions.ts
/**
* Canonical view order used to determine navigation direction.
* Earlier index = "back", later index = "forward".
*/
var VIEW_ORDER = [
	"home",
	"viewer",
	"editor",
	"explorer",
	"workcenter",
	"history",
	"settings",
	"print"
];
/** `true` when `document.startViewTransition` is available (Chrome 111+). */
var supportsViewTransitions = () => typeof document !== "undefined" && "startViewTransition" in document;
/**
* WHY: Neutralino / WebNative WebViews have flaky View Transition teardown —
* a stuck `::view-transition` layer makes the whole shell unclickable.
* Prefer an instant DOM swap there.
*/
function shouldSkipViewTransitions() {
	try {
		const g = globalThis;
		if (g.__CWS_NEUTRALINO_BOOT__ || g.__CWS_WEBNATIVE_BOOT__) return true;
		if (g.NL_OS || g.Neutralino) return true;
		if (typeof document !== "undefined" && document.documentElement?.dataset?.cwspDisableVt === "1") return true;
	} catch {}
	return false;
}
/**
* Compute navigation direction based on the ordered view list.
*
* Unknown view IDs fall back to `"fade"` (no slide animation).
*/
function getTransitionDirection(from, to) {
	const fi = VIEW_ORDER.indexOf(from);
	const ti = VIEW_ORDER.indexOf(to);
	if (fi === -1 || ti === -1 || fi === ti) return "fade";
	return fi < ti ? "forward" : "backward";
}
/**
* Wrap a DOM mutation in a View Transition, with a transparent fallback.
*
* Before starting the transition, `data-vt-direction` is set on `:root` so
* CSS `::view-transition-old/new(active-view)` can select the right keyframe
* animation via inherited CSS custom properties.
*
* If a transition is already running, the browser will abort the previous one
* and start the new one — this is intentional and handled gracefully.
*/
async function withViewTransition(update, options = {}) {
	const finishOnce = () => {
		try {
			options.onTransitionFinished?.();
		} catch (error) {
			console.warn("[view-transition] onTransitionFinished error:", error);
		}
	};
	let finishedCalled = false;
	const guardedFinish = () => {
		if (finishedCalled) return;
		finishedCalled = true;
		finishOnce();
	};
	if (!supportsViewTransitions() || shouldSkipViewTransitions()) {
		await update();
		requestAnimationFrame(() => requestAnimationFrame(guardedFinish));
		return;
	}
	const { direction = "fade", types } = options;
	document.documentElement.dataset.vtDirection = direction;
	const doc = document;
	const transition = types?.length ? doc.startViewTransition({
		update,
		types
	}) : doc.startViewTransition(update);
	transition.finished.then(guardedFinish).catch(guardedFinish);
	globalThis.setTimeout?.(() => {
		try {
			transition.skipTransition();
		} catch {}
		guardedFinish();
	}, 900);
	try {
		await (transition.updateCallbackDone ?? transition.finished);
	} catch {} finally {
		delete document.documentElement.dataset.vtDirection;
	}
	transition.finished.catch(() => {});
}
//#endregion
//#region src/shared/other/utils/appearance-base-color.ts
/**
* Resolve `--color-primary` / `--base-color` for veela.
* INVARIANT: one seed writer. WallpaperTheme may cache extracts but must not
* overwrite CSS when Appearance `colorSource` is Material You or custom.
*/
var FALLBACK_BASE_COLOR$1 = "#5a9ec8";
var COLOR_SOURCES$1 = [
	"auto",
	"wallpaper",
	"material-you",
	"system-wallpaper",
	"speed-dial",
	"custom"
];
var HEX_RE$1 = /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i;
var normalizeHexColor$1 = (raw) => {
	const t = String(raw ?? "").trim();
	if (!HEX_RE$1.test(t)) return "";
	if (t.length === 4) return `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`.toLowerCase();
	return t.toLowerCase();
};
var isAppearanceColorSource$1 = (raw) => COLOR_SOURCES$1.includes(String(raw || ""));
var isCapacitorNative$3 = () => {
	try {
		const c = globalThis.Capacitor;
		if (typeof c?.isNativePlatform === "function" && c.isNativePlatform()) return true;
		const platform = c?.getPlatform?.();
		return platform === "android" || platform === "ios";
	} catch {
		return false;
	}
};
var isNeutralinoDesktop$1 = () => {
	try {
		const g = globalThis;
		return Boolean(g.__CWS_NEUTRALINO_BOOT__ || g.Neutralino || typeof g.NL_OS === "string");
	} catch {
		return false;
	}
};
var isCrxSurface$1 = () => {
	try {
		return Boolean(globalThis.chrome?.runtime?.id);
	} catch {
		return false;
	}
};
var isLauncherSku$1 = () => {
	try {
		if (typeof document !== "undefined" && document.documentElement.dataset.cwspShellRole === "launcher") return true;
		return globalThis.__RS_SHELL_ROLE__ === "launcher";
	} catch {
		return false;
	}
};
var isCwspShellSurface$1 = () => {
	try {
		if (typeof document === "undefined") return false;
		const role = String(document.documentElement.dataset.cwspShellRole || "").toLowerCase();
		const surface = String(document.documentElement.dataset.cwspSurface || "").toLowerCase();
		return role === "shell" || surface === "cwsp-shell" || surface === "environment" || surface === "cw-environment";
	} catch {
		return false;
	}
};
/** Platform default when `colorSource` is empty / `auto`. */
var defaultColorSource$1 = () => {
	if (isCapacitorNative$3() && isLauncherSku$1()) return "wallpaper";
	if (isCapacitorNative$3()) return "material-you";
	if (isNeutralinoDesktop$1()) return "system-wallpaper";
	if (isCrxSurface$1() || isCwspShellSurface$1()) return "speed-dial";
	return "speed-dial";
};
var resolveColorSource$1 = (saved) => {
	if (isAppearanceColorSource$1(saved) && saved !== "auto") return saved;
	return defaultColorSource$1();
};
var rgbToHex$1 = (css) => {
	const m = css.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
	if (!m) return "";
	return `#${[
		m[1],
		m[2],
		m[3]
	].map((n) => Math.max(0, Math.min(255, Math.round(Number(n)))).toString(16).padStart(2, "0")).join("")}`;
};
var registerColorProperty$1 = (name, initialValue = "#5a9ec8") => {
	try {
		CSS?.registerProperty?.({
			name,
			syntax: "<color>",
			inherits: true,
			initialValue
		});
	} catch (error) {
		console.debug(error);
	}
};
var seedHosts$1 = () => {
	const nodes = /* @__PURE__ */ new Set();
	if (typeof document === "undefined") return [];
	nodes.add(document.documentElement);
	if (document.body) nodes.add(document.body);
	document.querySelectorAll(".env-shell-root, .wf-demo-root, ui-window, [data-shell], .view-settings, [data-view='settings'], .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .cw-network-view, .cw-network-view-host").forEach((el) => nodes.add(el));
	return [...nodes];
};
var SEED_PROPS$1 = [
	"--color-primary",
	"--base-color",
	"--wf-md-primary",
	"--wf-md-seed",
	"--primary",
	"--current"
];
var isValidColor$1 = (color) => {
	try {
		rgbToHex$1(color);
		return true;
	} catch {
		return false;
	}
};
var applyBaseColorSeed$1 = (hex, source, extras) => {
	if (typeof document === "undefined") return;
	const seed = normalizeHexColor$1(hex) || "#5a9ec8";
	const secondary = normalizeHexColor$1(extras?.secondary) || `color-mix(in oklab, ${seed} 72%, gray)`;
	const tertiary = normalizeHexColor$1(extras?.tertiary) || `color-mix(in oklab, ${seed} 55%, gray)`;
	const concrete = source === "user" ? "custom" : source === "system" ? "material-you" : source;
	document.documentElement.dataset.baseSource = String(concrete);
	document.documentElement.dataset.colorSource = String(concrete);
	if (!isValidColor$1(seed)) return;
	if (!isValidColor$1(secondary)) return;
	if (!isValidColor$1(tertiary)) return;
	registerColorProperty$1("--color-primary", seed);
	registerColorProperty$1("--base-color", seed);
	registerColorProperty$1("--color-secondary", secondary);
	registerColorProperty$1("--color-tertiary", tertiary);
	registerColorProperty$1("--secondary", secondary);
	registerColorProperty$1("--tertiary", tertiary);
	for (const host of seedHosts$1()) {
		for (const prop of SEED_PROPS$1) host.style.setProperty(prop, seed);
		host.style.setProperty("--color-secondary", secondary);
		host.style.setProperty("--color-tertiary", tertiary);
		host.style.setProperty("--secondary", secondary);
		host.style.setProperty("--tertiary", tertiary);
	}
	const globalQuery = Q("body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host");
	globalQuery.style.setProperty("--color-primary", seed);
	globalQuery.style.setProperty("--base-color", seed);
	globalQuery.style.setProperty("--color-secondary", secondary);
	globalQuery.style.setProperty("--color-tertiary", tertiary);
	globalQuery.style.setProperty("--secondary", secondary);
	globalQuery.style.setProperty("--tertiary", tertiary);
};
/** CSS `AccentColor` when the engine maps it to a real system accent (not generic link blue). */
var readCssAccentColor$1 = () => {
	if (typeof document === "undefined") return "";
	const probe = document.createElement("div");
	probe.style.cssText = "position:absolute;inset:auto;color:AccentColor;background:AccentColor";
	document.documentElement.appendChild(probe);
	const css = getComputedStyle(probe).color;
	probe.remove();
	const hex = rgbToHex$1(css);
	if (!hex) return "";
	if (hex === "#0000ee" || hex === "#0000ff" || hex === "#000000" || hex === "#ffffff") return "";
	return hex;
};
var readBridgeColor$1 = async (key) => {
	try {
		const cached = normalizeHexColor$1(globalThis.__CWS_SHELL_INFO__?.[key]);
		if (cached) return cached;
		const { fetchCwsShellInfo } = await __vitePreload(async () => {
			const { fetchCwsShellInfo } = await Promise.resolve().then(() => cws_bridge_exports);
			return { fetchCwsShellInfo };
		}, void 0, import.meta.url);
		return normalizeHexColor$1((await fetchCwsShellInfo({ force: true }))?.[key]);
	} catch {
		return "";
	}
};
var resolveSystemAccentColor$1 = async () => {
	const fromBridge = await readBridgeColor$1("accentColor");
	if (fromBridge) return fromBridge;
	return readCssAccentColor$1();
};
var cachedWallpaperPrimary$1 = () => {
	try {
		const hex = normalizeHexColor$1(localStorage.getItem("rs-wallpaper-primary"));
		if (hex) return hex;
		const raw = localStorage.getItem("rs-wallpaper-theme");
		if (!raw) return "";
		return normalizeHexColor$1(JSON.parse(raw)?.primary);
	} catch {
		return "";
	}
};
var extractFromImage$1 = async (src) => {
	try {
		const { applyThemeFromWallpaper } = await __vitePreload(async () => {
			const { applyThemeFromWallpaper } = await import("../com/app.js").then((n) => n.w);
			return { applyThemeFromWallpaper };
		}, __vite__mapDeps([1,2]), import.meta.url);
		return normalizeHexColor$1((await applyThemeFromWallpaper(src, { force: false }))?.primary);
	} catch {
		return "";
	}
};
var colorFromLiveWallpaperCanvas$1 = async () => {
	if (typeof document === "undefined") return "";
	const canvas = document.querySelector(".env-shell-wallpaper canvas, [data-app-layer='canvas'] canvas");
	if (!canvas || canvas.width < 2 || canvas.height < 2) return "";
	try {
		const blob = await new Promise((resolve) => {
			canvas.toBlob((b) => resolve(b), "image/jpeg", .7);
		});
		if (blob && blob.size > 0) return extractFromImage$1(blob);
	} catch {}
	return "";
};
var colorFromAppWallpaper$1 = async () => {
	const cached = cachedWallpaperPrimary$1();
	if (cached) return cached;
	try {
		const { resolveAppWallpaperUrl } = await __vitePreload(async () => {
			const { resolveAppWallpaperUrl } = await import("../com/app.js").then((n) => n.w);
			return { resolveAppWallpaperUrl };
		}, __vite__mapDeps([1,2]), import.meta.url);
		const url = await resolveAppWallpaperUrl();
		if (url) return extractFromImage$1(url);
	} catch {}
	return "";
};
var neuReadEnv$1 = async (key) => {
	try {
		const fn = globalThis.Neutralino?.os?.getEnv;
		if (typeof fn !== "function") return "";
		const raw = await fn({ key });
		if (typeof raw === "string") return raw.trim();
		if (raw && typeof raw === "object" && "value" in raw) return String(raw.value || "").trim();
		return "";
	} catch {
		return "";
	}
};
var neuReadBinary$1 = async (path) => {
	try {
		const buf = await globalThis.Neutralino?.filesystem?.readBinaryFile?.(path);
		if (!buf || !(buf instanceof ArrayBuffer) || buf.byteLength < 32) return null;
		return new Blob([buf], { type: "image/jpeg" });
	} catch {
		return null;
	}
};
var colorFromSystemWallpaper$1 = async () => {
	const fromBridge = await readBridgeColor$1("wallpaperColor");
	if (fromBridge) return fromBridge;
	if (isNeutralinoDesktop$1()) {
		const appData = await neuReadEnv$1("APPDATA") || await neuReadEnv$1("HOME");
		const candidates = [appData ? `${appData.replace(/[\\/]+$/, "")}/Microsoft/Windows/Themes/TranscodedWallpaper` : "", appData ? `${appData.replace(/[\\/]+$/, "")}/.cache/wallpaper` : ""].filter(Boolean);
		for (const path of candidates) {
			const blob = await neuReadBinary$1(path);
			if (blob) {
				const hex = await extractFromImage$1(blob);
				if (hex) return hex;
			}
		}
	}
	return cachedWallpaperPrimary$1();
};
var resolveAppearanceBaseColor$1 = async (appearance) => {
	const input = typeof appearance === "string" || appearance == null ? { color: appearance } : appearance;
	const source = resolveColorSource$1(input.colorSource);
	const custom = normalizeHexColor$1(input.color);
	const pick = async (fn, tag) => {
		const hex = normalizeHexColor$1(await fn());
		return hex ? {
			hex,
			source: tag
		} : null;
	};
	if (source === "custom" && custom) return {
		hex: custom,
		source: "custom"
	};
	if (source === "material-you") return await pick(resolveSystemAccentColor$1, "material-you") ?? {
		hex: custom || "#5a9ec8",
		source: custom ? "custom" : "material-you"
	};
	if (source === "wallpaper") return await pick(colorFromLiveWallpaperCanvas$1, "wallpaper") ?? await pick(colorFromAppWallpaper$1, "wallpaper") ?? await pick(async () => readBridgeColor$1("wallpaperColor"), "wallpaper") ?? {
		hex: custom || "#5a9ec8",
		source: "wallpaper"
	};
	if (source === "speed-dial") return await pick(colorFromAppWallpaper$1, "speed-dial") ?? {
		hex: custom || "#5a9ec8",
		source: "speed-dial"
	};
	if (source === "system-wallpaper") return await pick(colorFromSystemWallpaper$1, "system-wallpaper") ?? {
		hex: custom || "#5a9ec8",
		source: "system-wallpaper"
	};
	return {
		hex: custom || "#5a9ec8",
		source
	};
};
//#endregion
//#region src/shared/other/utils/Theme.ts
var Theme_exports = /* @__PURE__ */ __exportAll({
	applyTheme: () => applyTheme$1,
	bindQuickSettingsThemePersistence: () => bindQuickSettingsThemePersistence$1,
	cssBackgroundToOpaqueHex: () => cssBackgroundToOpaqueHex$1,
	initTheme: () => initTheme,
	installThemeLifecycleResync: () => installThemeLifecycleResync$1,
	resumeThemeAfterForeground: () => resumeThemeAfterForeground$1,
	resyncThemeAfterAdoptedViewSheet: () => resyncThemeAfterAdoptedViewSheet,
	samplePwaToolbarBackgroundColor: () => samplePwaToolbarBackgroundColor$1,
	sampleSurfaceBackgroundColor: () => sampleSurfaceBackgroundColor$1,
	syncBrowserChromeTheme: () => syncBrowserChromeTheme$1
});
/**
* WHY: fl.ui Quick Settings cannot import this module (layer cycle). It dispatches
* `u2-theme-change` with `{ source: "quick-settings", theme }`; we persist to IDB and
* re-run {@link applyTheme} so env-shell + minimal shells share one persistence path.
*/
var quickSettingsThemeBridgeBound$1 = false;
var quickSettingsThemeBridgeBusy$1 = false;
var bindQuickSettingsThemePersistence$1 = () => {
	if (quickSettingsThemeBridgeBound$1 || typeof document === "undefined") return;
	quickSettingsThemeBridgeBound$1 = true;
	document.documentElement.addEventListener("u2-theme-change", (ev) => {
		const detail = ev?.detail;
		if (!detail || detail.source !== "quick-settings") return;
		const theme = detail.theme;
		if (theme !== "light" && theme !== "dark") return;
		if (quickSettingsThemeBridgeBusy$1) return;
		quickSettingsThemeBridgeBusy$1 = true;
		(async () => {
			try {
				const current = await loadSettings$1();
				if (current?.appearance?.theme === theme) {
					syncBrowserChromeTheme$1(theme, theme);
					return;
				}
				applyTheme$1(await saveSettings$1({
					...current,
					appearance: {
						...current.appearance || {},
						theme
					}
				}));
			} catch (e) {
				console.warn("[Theme] Quick Settings persistence failed", e);
				syncBrowserChromeTheme$1(theme, theme);
			} finally {
				quickSettingsThemeBridgeBusy$1 = false;
			}
		})();
	});
};
/** Convert getComputedStyle background (rgb/rgba or hex) to #rrggbb for meta theme-color / PWA chrome. */
var cssBackgroundToOpaqueHex$1 = (css) => {
	const t = css.trim();
	if (!t || t === "transparent") return null;
	const hexMatch = t.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
	if (hexMatch) {
		let h = hexMatch[1];
		if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
		return `#${h.toLowerCase()}`;
	}
	const m = t.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)$/i);
	if (!m) return null;
	const alpha = m[4] !== void 0 ? Number(m[4]) : 1;
	if (!Number.isFinite(alpha) || alpha < .98) return null;
	return `#${[
		Math.max(0, Math.min(255, Math.round(Number(m[1])))),
		Math.max(0, Math.min(255, Math.round(Number(m[2])))),
		Math.max(0, Math.min(255, Math.round(Number(m[3]))))
	].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
};
/**
* Sample the top shell chrome (minimal nav or faint toolbar) from mounted shell shadow roots
* so PWA Window Controls Overlay / title bar can match the real toolbar background.
*/
var samplePwaToolbarBackgroundColor$1 = () => {
	if (typeof document === "undefined") return null;
	const hosts = document.querySelectorAll("[data-shell]");
	for (const host of hosts) {
		const sr = host.shadowRoot;
		if (!sr) continue;
		const bar = sr.querySelector(".app-shell__nav, .app-shell__toolbar");
		if (!bar) continue;
		const bg = getComputedStyle(bar).backgroundColor;
		const hex = cssBackgroundToOpaqueHex$1(bg);
		if (hex) return hex;
	}
	return null;
};
/** Paint `--color-surface` so Capacitor / PWA chrome follows Material You after seed apply. */
var sampleSurfaceBackgroundColor$1 = () => {
	if (typeof document === "undefined") return null;
	const probe = document.createElement("div");
	probe.style.cssText = "position:fixed;left:-8px;top:-8px;inline-size:4px;block-size:4px;pointer-events:none;opacity:0;background:var(--color-surface)";
	try {
		document.documentElement.appendChild(probe);
		return cssBackgroundToOpaqueHex$1(getComputedStyle(probe).backgroundColor);
	} catch {
		return null;
	} finally {
		probe.remove();
	}
};
var resolveColorScheme$1 = (theme) => {
	if (theme === "dark" || theme === "light") return theme;
	return globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
};
var resolveFontSize$1 = (size) => {
	switch (size) {
		case "small": return "14px";
		case "large": return "18px";
		default: return "16px";
	}
};
/** Keep minimal / immersive shell hosts + inner `.app-shell` in sync when only `applyTheme()` runs (Settings saves / preview) — `shell.setTheme` is not always invoked. */
var syncShellHostVisualScheme$1 = (resolved) => {
	try {
		document.querySelectorAll("[data-shell]").forEach((el) => {
			const h = el;
			h.dataset.theme = resolved;
			h.style.colorScheme = resolved;
			const inner = h.shadowRoot?.querySelector?.(".app-shell");
			if (inner) {
				inner.dataset.theme = resolved;
				inner.style.colorScheme = resolved;
			}
		});
	} catch {}
	try {
		document.querySelectorAll("ui-window, .env-shell-root").forEach((el) => {
			const h = el;
			h.dataset.theme = resolved;
			h.style.colorScheme = resolved;
		});
	} catch {}
};
/** Keep <html> + PWA chrome aligned with resolved light/dark and user preference (auto/light/dark). */
var syncBrowserChromeTheme$1 = (resolved, preference) => {
	if (typeof document === "undefined") return;
	const root = document.documentElement;
	const scheme = preference === "dark" ? "dark" : preference === "light" ? "light" : "auto";
	root.setAttribute("data-scheme", scheme);
	root.setAttribute("data-theme", resolved);
	root.style.colorScheme = resolved;
	try {
		const body = document.body;
		if (body) body.style.colorScheme = resolved;
	} catch {}
	try {
		document.querySelectorAll("[data-shell='content']").forEach((el) => {
			el.style.colorScheme = resolved;
		});
	} catch {}
	if (globalThis?.__LURE_DYNAMIC_THEME_PRIORITY__ !== true) {
		const applyMetaThemeColor = () => {
			if (globalThis?.__LURE_DYNAMIC_THEME_PRIORITY__ === true) return;
			if (globalThis?.__CWSP_NATIVE_THEME_COLOR_OWNED__) return;
			if (document.querySelector("ui-window[native-mode]:not([minimized])")) return;
			let meta = document.querySelector("meta[name=\"theme-color\"]");
			if (!meta) {
				meta = document.createElement("meta");
				meta.setAttribute("name", "theme-color");
				document.head?.appendChild(meta);
			}
			const sampled = samplePwaToolbarBackgroundColor$1() ?? sampleSurfaceBackgroundColor$1();
			const fallback = resolved === "dark" ? "#1a2420" : "#d5e4dc";
			meta.setAttribute("content", sampled ?? fallback);
		};
		applyMetaThemeColor();
		requestAnimationFrame(applyMetaThemeColor);
	}
	syncShellHostVisualScheme$1(resolved);
};
var applyTheme$1 = (settings) => {
	if (typeof document === "undefined") return;
	bindQuickSettingsThemePersistence$1();
	installThemeLifecycleResync$1();
	if (!settings) return;
	const root = document.documentElement;
	const theme = settings.appearance?.theme || "auto";
	const resolvedScheme = resolveColorScheme$1(theme);
	syncBrowserChromeTheme$1(resolvedScheme, theme);
	root.style.fontSize = resolveFontSize$1(settings.appearance?.fontSize);
	root.dataset.colorSource = resolveColorSource$1(settings.appearance?.colorSource);
	resolveAppearanceBaseColor$1(settings.appearance).then(({ hex, source }) => {
		applyBaseColorSeed$1(hex, source);
		syncBrowserChromeTheme$1(resolvedScheme, theme);
	});
	if (settings.grid) applyGridSettings(settings);
};
/**
* Re-apply persisted appearance after a view adopts a document-level constructed stylesheet (Settings, Work Center, …).
* WHY: First paint after cold boot can leave mixed shell chrome vs Veela `light-dark()` token resolution until
* something triggers a full style pass; microtask + rAF + idle re-run matches navigating away/back.
* INVARIANT: Safe to call multiple times; each pass is idempotent `applyTheme(loadSettings())`.
*/
var resyncThemeAfterAdoptedViewSheet = () => {
	if (typeof document === "undefined") return;
	const run = async () => {
		try {
			applyTheme$1(await loadSettings$1());
		} catch {}
		try {
			document.documentElement.offsetHeight;
		} catch {}
	};
	(async () => {
		await run();
		queueMicrotask(() => {
			run();
		});
		requestAnimationFrame(() => {
			run();
			try {
				document.documentElement.dispatchEvent(new CustomEvent("u2-theme-change", { bubbles: true }));
			} catch {}
			requestAnimationFrame(() => {
				run();
				const ric = globalThis.requestIdleCallback;
				if (typeof ric === "function") ric(() => {
					run();
				}, { timeout: 200 });
				else globalThis.setTimeout(() => {
					run();
				}, 50);
			});
		});
	})();
};
var restampExplorerShellScheme$1 = () => {
	if (typeof document === "undefined") return;
	try {
		document.querySelectorAll(".view-explorer").forEach((el) => {
			const scheme = el.dataset.explorerColorScheme;
			if (scheme !== "light" && scheme !== "dark") return;
			if (el.getAttribute("data-theme") !== scheme) el.setAttribute("data-theme", scheme);
			el.style.setProperty("color-scheme", `${scheme} only`);
		});
	} catch {}
};
var themeResumeAt$1 = 0;
var themeLifecycleBound$1 = false;
var sawBackground$1 = false;
var restampChromeScheme$1 = () => {
	restampExplorerShellScheme$1();
	try {
		const root = document.documentElement;
		const pinned = root.getAttribute("data-theme");
		if (pinned === "light" || pinned === "dark") {
			root.style.colorScheme = pinned;
			if (document.body) document.body.style.colorScheme = pinned;
		}
		root.offsetHeight;
	} catch {}
};
/**
* Restore chrome after Android recents / Home.
* INVARIANT: never rewrite constructable sheets on cold start — first onResume/focus wiped UI.
*/
var resumeThemeAfterForeground$1 = (force = false) => {
	if (typeof document === "undefined") return;
	if (!force && document.visibilityState === "hidden") return;
	const now = Date.now();
	if (now - themeResumeAt$1 < 240) return;
	themeResumeAt$1 = now;
	restampChromeScheme$1();
	if (!sawBackground$1) return;
	(async () => {
		try {
			const { rehydrateAdoptedStyleSheets } = await __vitePreload(async () => {
				const { rehydrateAdoptedStyleSheets } = await import("../com/app.js").then((n) => n.Dt);
				return { rehydrateAdoptedStyleSheets };
			}, __vite__mapDeps([1,2]), import.meta.url);
			rehydrateAdoptedStyleSheets();
		} catch {}
		restampChromeScheme$1();
		try {
			document.dispatchEvent(new CustomEvent("cwsp:theme-resume"));
		} catch {}
	})();
};
/** Bind visibility / pageshow / Capacitor appState + expose `__CWSP_THEME_RESUME__` for Java onResume. */
var installThemeLifecycleResync$1 = () => {
	if (themeLifecycleBound$1 || typeof document === "undefined") return;
	themeLifecycleBound$1 = true;
	globalThis.__CWSP_THEME_RESUME__ = resumeThemeAfterForeground$1;
	document.addEventListener("visibilitychange", () => {
		if (document.visibilityState === "hidden") {
			sawBackground$1 = true;
			return;
		}
		resumeThemeAfterForeground$1();
	});
	document.addEventListener("resume", () => resumeThemeAfterForeground$1());
	globalThis.addEventListener?.("pageshow", () => resumeThemeAfterForeground$1());
	try {
		globalThis.Capacitor?.Plugins?.App?.addListener?.("appStateChange", (state) => {
			if (state?.isActive === false) {
				sawBackground$1 = true;
				return;
			}
			if (state?.isActive) resumeThemeAfterForeground$1();
		});
	} catch {}
};
var initTheme = async () => {
	try {
		if (typeof document === "undefined") return;
		bindQuickSettingsThemePersistence$1();
		applyTheme$1(await loadSettings$1());
		globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.addEventListener?.("change", async () => {
			const next = await loadSettings$1();
			applyTheme$1(next);
			try {
				document.documentElement.dispatchEvent(new CustomEvent("u2-theme-change", {
					bubbles: true,
					detail: {
						source: "system-prefers-color-scheme",
						theme: resolveColorScheme$1(next?.appearance?.theme || "auto")
					}
				}));
			} catch {}
		});
	} catch (e) {
		console.warn("Failed to init theme", e);
	}
};
//#endregion
//#region src/shared/routing/core/views.ts
var VIEW_ENABLED_VIEWER$1 = "viewer";
var VIEW_ENABLED_EDITOR$1 = "editor";
var VIEW_ENABLED_WORKCENTER$1 = "workcenter";
var VIEW_ENABLED_EXPLORER$1 = "explorer";
var VIEW_ENABLED_SETTINGS$1 = "settings";
var VIEW_ENABLED_HISTORY$1 = "history";
var VIEW_ENABLED_HOME$1 = "home";
var VIEW_ENABLED_PRINT$1 = "print";
/** CWSP connection / probe diagnostics — primary Capacitor (CWSAndroid) home view. */
var VIEW_ENABLED_NETWORK$1 = "network";
var DEFAULT_VIEW_ID = "viewer";
var VIEW_FLAGS$1 = {
	network: VIEW_ENABLED_NETWORK$1,
	settings: VIEW_ENABLED_SETTINGS$1,
	viewer: VIEW_ENABLED_VIEWER$1,
	editor: VIEW_ENABLED_EDITOR$1,
	workcenter: VIEW_ENABLED_WORKCENTER$1,
	explorer: VIEW_ENABLED_EXPLORER$1,
	history: VIEW_ENABLED_HISTORY$1,
	home: VIEW_ENABLED_HOME$1,
	print: VIEW_ENABLED_PRINT$1
};
/**
* Optional per-build allowlist: `VITE_ENABLED_VIEWS="network,settings"` restricts
* which views are enabled (e.g. the Capacitor CWSAndroid shell: Network + Settings
* only). When unset, all flagged views are enabled. Read from Vite env first,
* then Node env, guarded for non-bundled (tsx) contexts.
*/
var readEnabledViewsAllowlist$1 = () => {
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
		raw = String("minimal,workcenter,settings,history");
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
var ENABLED_VIEWS_ALLOWLIST$1 = readEnabledViewsAllowlist$1();
/**
* Build-time gate: the host bundler (CWSP-shell Vite) replaces `__RS_VIEW_<ID>__`
* with a boolean from `VITE_ENABLED_VIEWS`. `typeof` is safe for undeclared
* globals (returns "undefined") so non-bundled/tsx contexts fall back to enabled.
*/
var BUILD_VIEW_FLAGS$1 = {
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
var buildAllows$1 = (viewId) => BUILD_VIEW_FLAGS$1[String(viewId).toLowerCase()] !== false;
var runtimeAllows$1 = (viewId) => !ENABLED_VIEWS_ALLOWLIST$1 || ENABLED_VIEWS_ALLOWLIST$1.has(String(viewId).toLowerCase());
var isViewAllowed$1 = (viewId) => buildAllows$1(viewId) && runtimeAllows$1(viewId);
var ENABLED_VIEW_IDS$1 = Object.entries(VIEW_FLAGS$1).filter(([viewId, enabled]) => Boolean(enabled) && isViewAllowed$1(viewId) && isViewLocalToSurface$1(viewId)).map(([viewId]) => viewId);
var isEnabledView = (viewId) => {
	return Boolean(VIEW_FLAGS$1[viewId]) && isViewAllowed$1(viewId) && isViewLocalToSurface$1(viewId);
};
var pickEnabledView = (preferred = DEFAULT_VIEW_ID, fallback = DEFAULT_VIEW_ID) => {
	if (isEnabledView(preferred)) return preferred;
	if (isEnabledView(fallback)) return fallback;
	if (ENABLED_VIEW_IDS$1.length > 0) return ENABLED_VIEW_IDS$1[0];
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
	return normalizeViewId$1(viewId);
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
	const bc = new BroadcastChannel(viewBroadcastChannelName(normalizeViewId$1(viewId)));
	bc.addEventListener("message", handler);
	return () => {
		bc.removeEventListener("message", handler);
		bc.close();
	};
}
//#endregion
//#region src/shared/routing/core/view-inbound-timing.ts
function getViewHTMLElement(view) {
	try {
		if (typeof HTMLElement !== "undefined" && view instanceof HTMLElement) return view;
	} catch {}
	return null;
}
function payloadRecordContainsRenderableFiles(payload) {
	if (!payload || typeof payload !== "object") return false;
	const rec = payload;
	const hasFileLike = (v) => typeof File !== "undefined" && v instanceof File || typeof Blob !== "undefined" && v instanceof Blob;
	if (hasFileLike(rec.file) || hasFileLike(rec.blob)) return true;
	const files = rec.files;
	if (Array.isArray(files) && files.some((x) => hasFileLike(x))) return true;
	const attachments = rec.attachments;
	if (Array.isArray(attachments)) for (const a of attachments) {
		if (!a || typeof a !== "object") continue;
		const data = a.data;
		if (hasFileLike(data)) return true;
	}
	return false;
}
function payloadContainsRenderableFilesDeep(payload) {
	if (!payload || typeof payload !== "object") return false;
	const rec = payload;
	if (payloadRecordContainsRenderableFiles(rec)) return true;
	const nested = rec.data;
	if (nested && typeof nested === "object" && payloadRecordContainsRenderableFiles(nested)) return true;
	const topAtt = rec.attachments;
	if (Array.isArray(topAtt)) for (const a of topAtt) {
		if (!a || typeof a !== "object") continue;
		const data = a.data;
		if (typeof File !== "undefined" && data instanceof File || typeof Blob !== "undefined" && data instanceof Blob) return true;
	}
	return false;
}
var FILE_INGRESS_TYPES = /* @__PURE__ */ new Set([
	"content-share",
	"share-target-input",
	"share-target-result",
	"content-attach",
	"file-attach"
]);
/** Narrow heuristic: ingress that carries blobs/files benefits from delayed delivery. */
function shouldDeferIngressForRenderableFiles(message, mappedType) {
	if (!FILE_INGRESS_TYPES.has(String(mappedType || "").toLowerCase())) return false;
	return payloadContainsRenderableFilesDeep(message);
}
/** Lightweight control handlers — skipping timing fences keeps sliders/toggles responsive. */
var SKIP_UNIFIED_INGRESS_TIMING = /* @__PURE__ */ new Set([
	"settings-update",
	"history-update",
	"home-update"
]);
/**
* Most unified ingress paths should settle the host before calling `handleMessage`.
* WHY: Applies to viewer, Work Center attachments, explorer saves, staged mail, … not launch-queue-only.
*/
function shouldDeferUnifiedIngressUntilStable(_message, mappedType) {
	return !SKIP_UNIFIED_INGRESS_TIMING.has(String(mappedType || "").toLowerCase());
}
/** One frame + microtask — enough when the viewer host and sinks already exist (common for launch-queue bursts). */
async function quickPaintFence() {
	await new Promise((resolve) => requestAnimationFrame(() => resolve()));
	await new Promise((resolve) => queueMicrotask(resolve));
}
/**
* Softer barrier when the DOM still needs layout (first paint / route change): double RAF without an extra idle delay.
*/
async function stepPaintFenceModerate() {
	await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
	await new Promise((resolve) => queueMicrotask(resolve));
}
var MO_CONNECTED_MS = 220;
var MO_SINK_MS = 280;
/** Cap how long we wait on enter transitions so a burst of opens still reaches the latest file quickly. */
var ANIM_CAP_DEFAULT_MS = 160;
var ANIM_CAP_HOT_PATH_MS = 90;
/** Minimal shell (no HTMLElement view host): one frame before mutating viewer state — was too slow with full fence. */
async function settleIngressPaintForMinimalShell() {
	await quickPaintFence();
}
async function waitUntilViewConnectedToDocument(view, timeoutMs = MO_CONNECTED_MS) {
	const el = getViewHTMLElement(view);
	if (!el) return;
	if (el.isConnected) return;
	const rootEl = typeof document !== "undefined" && document.documentElement instanceof HTMLElement ? document.documentElement : null;
	if (!rootEl) return;
	await new Promise((resolve) => {
		let done = false;
		const finish = () => {
			if (done) return;
			done = true;
			try {
				mo.disconnect();
			} catch {}
			clearTimeout(tid);
			resolve();
		};
		const mo = new MutationObserver(() => {
			if (el.isConnected) finish();
		});
		mo.observe(rootEl, {
			childList: true,
			subtree: true
		});
		const tid = setTimeout(finish, timeoutMs);
	});
}
var RENDER_SINK_SELECTORS = ["[data-render-target]", "[data-raw-target]"];
function shallowSinkPresent(host) {
	for (const sel of RENDER_SINK_SELECTORS) try {
		if (host.querySelector(sel)) return true;
		if (host.shadowRoot?.querySelector(sel)) return true;
	} catch {}
	return false;
}
function needsRenderableSinkWait(mappedType, message) {
	const mt = String(mappedType || "").toLowerCase();
	if (mt === "content-load" || mt === "markdown-content" || mt === "content-view") return true;
	return shouldDeferIngressForRenderableFiles(message, mappedType);
}
async function waitForRenderableSinkMounted(view, timeoutMs = MO_SINK_MS) {
	const el = getViewHTMLElement(view);
	if (!el) return;
	if (shallowSinkPresent(el)) return;
	await new Promise((resolve) => {
		let done = false;
		const observers = [];
		const finish = () => {
			if (done) return;
			done = true;
			for (const ob of observers) try {
				ob.disconnect();
			} catch {}
			clearTimeout(tid);
			resolve();
		};
		const onMut = () => {
			if (shallowSinkPresent(el)) finish();
		};
		const watch = (root) => {
			const mo = new MutationObserver(onMut);
			mo.observe(root, {
				childList: true,
				subtree: true
			});
			observers.push(mo);
		};
		watch(el);
		if (el.shadowRoot) watch(el.shadowRoot);
		const tid = setTimeout(finish, timeoutMs);
		onMut();
	});
}
async function waitRunningSubtreeAnimations(view, hangMs = ANIM_CAP_DEFAULT_MS) {
	const el = getViewHTMLElement(view);
	if (!el?.isConnected) return;
	try {
		const getAnims = typeof el.getAnimations === "function" ? el.getAnimations.bind(el) : null;
		const anims = getAnims ? getAnims({ subtree: true }).filter((a) => a.playState === "running") : [];
		if (anims.length === 0) return;
		await Promise.race([Promise.all(anims.map((a) => typeof a?.finished?.then === "function" ? a.finished.catch(() => void 0) : Promise.resolve())), new Promise((resolve) => setTimeout(resolve, hangMs))]);
	} catch {}
}
/** Full settle pipeline before `handleMessage` on HTMLElement-backed hosts. */
async function settleIngressTargetBeforeDelivery(view, message, mappedType) {
	const el = getViewHTMLElement(view);
	const needSink = needsRenderableSinkWait(mappedType, message);
	if (Boolean(el?.isConnected && (!needSink || shallowSinkPresent(el)))) {
		await quickPaintFence();
		await waitRunningSubtreeAnimations(view, ANIM_CAP_HOT_PATH_MS);
		return;
	}
	await stepPaintFenceModerate();
	await waitUntilViewConnectedToDocument(view, MO_CONNECTED_MS);
	if (needSink) await waitForRenderableSinkMounted(view, MO_SINK_MS);
	await waitRunningSubtreeAnimations(view, ANIM_CAP_DEFAULT_MS);
	await quickPaintFence();
}
var ingressDeliveryChains = /* @__PURE__ */ new WeakMap();
/** Serialize ingress bursts per concrete View identity (HTMLElement instance). */
function scheduleSerialViewIngressDelivery(view, task) {
	const next = (ingressDeliveryChains.get(view) ?? Promise.resolve()).then(() => task()).catch((err) => {
		console.warn("[ViewIngress] delivery failed:", view?.id, err);
	});
	ingressDeliveryChains.set(view, next);
	return next;
}
//#endregion
//#region src/shared/routing/channel/ServiceChannels.ts
/**
* Service Channels for CWSP-shell
* Extends fest/uniform ServiceChannelManager with app-specific configuration
*/
var SERVICE_CHANNEL_CONFIG = {
	workcenter: {
		broadcastName: BROADCAST_CHANNELS$1.WORK_CENTER,
		routeHash: ROUTE_HASHES$1.WORKCENTER,
		component: COMPONENTS$1.WORK_CENTER,
		description: "AI work center for processing files and content"
	},
	settings: {
		broadcastName: BROADCAST_CHANNELS$1.SETTINGS,
		routeHash: ROUTE_HASHES$1.SETTINGS,
		component: COMPONENTS$1.SETTINGS,
		description: "Application settings and configuration"
	},
	airpad: {
		broadcastName: BROADCAST_CHANNELS$1.SERVICE_AIRPAD,
		routeHash: ROUTE_HASHES$1.AIRPAD,
		component: COMPONENTS$1.AIRPAD,
		description: "AirPad remote trackpad/keyboard + clipboard"
	},
	network: {
		broadcastName: BROADCAST_CHANNELS$1.SERVICE_NETWORK,
		routeHash: ROUTE_HASHES$1.NETWORK,
		component: COMPONENTS$1.NETWORK,
		description: "CWSP network status, probes, and endpoint routing"
	},
	viewer: {
		broadcastName: BROADCAST_CHANNELS$1.MARKDOWN_VIEWER,
		routeHash: ROUTE_HASHES$1.MARKDOWN_VIEWER,
		component: COMPONENTS$1.MARKDOWN_VIEWER,
		description: "Content viewer for markdown and files"
	},
	explorer: {
		broadcastName: BROADCAST_CHANNELS$1.FILE_EXPLORER,
		routeHash: ROUTE_HASHES$1.FILE_EXPLORER,
		component: COMPONENTS$1.FILE_EXPLORER,
		description: "File explorer and browser"
	},
	print: {
		broadcastName: BROADCAST_CHANNELS$1.PRINT_CHANNEL,
		routeHash: ROUTE_HASHES$1.PRINT,
		component: COMPONENTS$1.BASIC_PRINT,
		description: "Print preview and export"
	},
	history: {
		broadcastName: BROADCAST_CHANNELS$1.HISTORY_CHANNEL,
		routeHash: ROUTE_HASHES$1.HISTORY,
		component: COMPONENTS$1.HISTORY,
		description: "Action history and undo/redo"
	},
	editor: {
		broadcastName: "rs-editor",
		routeHash: ROUTE_HASHES$1.MARKDOWN_EDITOR,
		component: COMPONENTS$1.MARKDOWN_EDITOR,
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
//#region ../../modules/projects/subsystem/src/other/config/Names.ts
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
var getDestinationAliases = (value) => {
	const canonical = normalizeDestination(value);
	if (!canonical) return [];
	return [.../* @__PURE__ */ new Set([canonical, ...DESTINATION_ALIASES[canonical] || []])];
};
var matchesDestination = (candidate, expected) => Boolean(normalizeDestination(candidate) && normalizeDestination(candidate) === normalizeDestination(expected));
var normalizeViewId = (value) => {
	const canonical = normalizeDestination(value);
	if (CANONICAL_VIEW_IDS.includes(canonical)) return canonical;
	return "viewer";
};
BROADCAST_CHANNELS.SERVICE_WORKCENTER, BROADCAST_CHANNELS.SERVICE_SETTINGS, BROADCAST_CHANNELS.SERVICE_VIEWER, BROADCAST_CHANNELS.SERVICE_EXPLORER, BROADCAST_CHANNELS.SERVICE_AIRPAD, BROADCAST_CHANNELS.SERVICE_NETWORK, BROADCAST_CHANNELS.SERVICE_PRINT, BROADCAST_CHANNELS.SERVICE_HISTORY, BROADCAST_CHANNELS.SERVICE_EDITOR, BROADCAST_CHANNELS.SERVICE_HOME;
ROUTE_HASHES.WORKCENTER, ROUTE_HASHES.SETTINGS, ROUTE_HASHES.MARKDOWN_VIEWER, ROUTE_HASHES.FILE_EXPLORER, ROUTE_HASHES.NETWORK, ROUTE_HASHES.PRINT, ROUTE_HASHES.HISTORY, ROUTE_HASHES.MARKDOWN_EDITOR;
//#endregion
//#region src/shared/routing/channel/ShareTargetGateway.ts
var SHARE_CACHE_NAME = "share-target-data";
var SHARE_CACHE_KEY = "/share-target-data";
var SHARE_FILES_MANIFEST_KEY = "/share-target-files";
var SHARE_FILE_PREFIX = "/share-target-file/";
var hasCaches = () => typeof globalThis !== "undefined" && "caches" in globalThis;
/** Persist the last share-target payload so the app can recover it after navigation or cold start. */
var storeShareTargetPayloadToCache = async (payload) => {
	if (!hasCaches()) return false;
	const files = Array.isArray(payload.files) ? payload.files : [];
	const meta = payload.meta ?? {};
	try {
		const cache = await caches.open(SHARE_CACHE_NAME);
		const timestamp = Number(meta?.timestamp) || Date.now();
		await cache.put(SHARE_CACHE_KEY, new Response(JSON.stringify({
			...meta,
			title: meta?.title,
			text: meta?.text,
			url: meta?.url,
			sharedUrl: meta?.sharedUrl,
			source: meta?.source || "share-target",
			route: meta?.route || meta?.source || "share-target",
			timestamp,
			fileCount: files.length,
			imageCount: files.filter((f) => (f?.type || "").toLowerCase().startsWith("image/")).length
		}), { headers: { "Content-Type": "application/json" } }));
		const fileManifest = [];
		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			const key = `${SHARE_FILE_PREFIX}${timestamp}-${i}`;
			const headers = new Headers();
			headers.set("Content-Type", file.type || "application/octet-stream");
			headers.set("X-File-Name", encodeURIComponent(file.name || `file-${i}`));
			headers.set("X-File-Size", String(file.size || 0));
			headers.set("X-File-LastModified", String(file.lastModified ?? 0));
			await cache.put(key, new Response(file, { headers }));
			fileManifest.push({
				key,
				name: file.name || `file-${i}`,
				type: file.type || "application/octet-stream",
				size: file.size || 0,
				lastModified: file.lastModified ?? void 0
			});
		}
		await cache.put(SHARE_FILES_MANIFEST_KEY, new Response(JSON.stringify({
			files: fileManifest,
			timestamp
		}), { headers: { "Content-Type": "application/json" } }));
		return true;
	} catch (error) {
		console.warn("[ShareTargetGateway] Failed to store payload to cache:", error);
		return false;
	}
};
/**
* Rehydrate the cached share-target payload and optionally clear the consumed
* cache entries so they are not replayed on the next app load.
*/
var consumeCachedShareTargetPayload = async (opts = {}) => {
	const clear = opts.clear !== false;
	if (!hasCaches()) return null;
	try {
		const cache = await caches.open(SHARE_CACHE_NAME);
		const metaResp = await cache.match(SHARE_CACHE_KEY);
		const manifestResp = await cache.match(SHARE_FILES_MANIFEST_KEY);
		if (!metaResp && !manifestResp) return null;
		const meta = metaResp ? await metaResp.json().catch(() => null) : null;
		const manifest = manifestResp ? await manifestResp.json().catch(() => null) : null;
		const fileMeta = Array.isArray(manifest?.files) ? manifest.files : [];
		const files = [];
		for (const fm of fileMeta) {
			const fileKey = typeof fm?.key === "string" ? fm.key.trim() : String(fm?.key ?? "").trim();
			if (!fileKey) continue;
			const response = await cache.match(fileKey);
			if (!response) continue;
			const blob = await response.blob();
			files.push(new File([blob], fm.name || "shared-file", {
				type: fm.type || blob.type || "application/octet-stream",
				lastModified: Number(fm.lastModified) || Date.now()
			}));
		}
		if (clear) {
			await cache.delete(SHARE_CACHE_KEY).catch(() => {});
			await cache.delete(SHARE_FILES_MANIFEST_KEY).catch(() => {});
			for (const fm of fileMeta) if (fm?.key) await cache.delete(fm.key).catch(() => {});
		}
		return {
			meta: meta || {},
			files,
			fileMeta
		};
	} catch (error) {
		console.warn("[ShareTargetGateway] Failed to consume cached payload:", error);
		return null;
	}
};
/**
* Convert the staged cache payload back into a share/launch transfer object that
* the foreground pipeline can route without caring whether the ingress was
* share-target, launch-queue, or another staged producer.
*/
var buildShareDataFromCachedPayload = (payload) => {
	const meta = payload?.meta || {};
	const files = Array.isArray(payload?.files) ? payload.files : [];
	const fileMeta = Array.isArray(payload?.fileMeta) ? payload.fileMeta : [];
	const manifestName = typeof fileMeta[0]?.name === "string" && fileMeta[0].name.trim().length > 0 ? fileMeta[0].name.trim() : void 0;
	const rawHint = meta.hint;
	const baseHint = rawHint && typeof rawHint === "object" && !Array.isArray(rawHint) ? { ...rawHint } : {};
	let hintOut = Object.keys(baseHint).length > 0 ? { ...baseHint } : void 0;
	if (manifestName && !files.length) {
		if (!(typeof baseHint.filename === "string" ? String(baseHint.filename).trim() : "")) hintOut = {
			...hintOut || baseHint,
			filename: manifestName
		};
	}
	const out = {
		...meta,
		title: typeof meta.title === "string" ? meta.title : void 0,
		text: typeof meta.text === "string" ? meta.text : void 0,
		url: typeof meta.url === "string" ? meta.url : void 0,
		sharedUrl: typeof meta.sharedUrl === "string" ? meta.sharedUrl : void 0,
		source: typeof meta.source === "string" ? meta.source : "share-target",
		route: typeof meta.route === "string" ? meta.route : typeof meta.source === "string" ? meta.source : "share-target",
		timestamp: Number(meta.timestamp || Date.now()),
		files,
		fileCount: files.length || Number(meta.fileCount || 0),
		imageCount: Number(meta.imageCount || files.filter((file) => (file?.type || "").toLowerCase().startsWith("image/")).length)
	};
	if (hintOut !== void 0) out.hint = hintOut;
	return out;
};
var CORE_ENTITY_EXTRACTION_INSTRUCTION = `
Extract structured entity data from the provided content.

Entity types to detect:
- task: jobs, actions, to-do items
- event: meetings, appointments, occurrences
- person: contacts, people mentions
- place: locations, addresses, venues
- service: products, offerings
- item: goods, objects, inventory
- factor: conditions, circumstances
- bonus: promotions, discounts, codes

For each entity found, extract:
- type: entity type from list above
- id: suggested unique identifier
- name: machine-readable name
- title: human-readable title
- kind: specific subtype
- properties: relevant attributes
- description: markdown description

CRITICAL OUTPUT FORMAT: Return ONLY valid JSON. No markdown code blocks, no explanations, no prose.
Your response must start with { and end with }.

Expected output structure:
{
    "entities": [...],
    "keywords": [...],
    "short_description": "markdown summary",
    "extraction_confidence": 0.0-1.0
}
`;
var AI_INSTRUCTIONS = {
	SOLVE_AND_ANSWER: `
Solve equations, answer questions, and explain mathematical or logical problems from the provided content.

For equations and math problems:
- Show step-by-step solutions
- Provide final answers clearly marked
- Explain reasoning for each step

For general questions:
- Provide accurate, well-reasoned answers
- Include relevant context and explanations
- If multiple interpretations possible, address them

For quizzes and tests:
- Show the correct answer with explanation
- Explain why other options are incorrect

Always respond in the specified language and format results clearly.
`,
	WRITE_CODE: `
Write clean, efficient, and well-documented code based on the provided description, requirements, or image.

Code requirements:
- Use appropriate programming language for the task
- Follow language-specific best practices and conventions
- Include proper error handling
- Add meaningful comments and documentation
- Make code readable and maintainable

If generating from an image or visual description:
- Analyze the visual elements and requirements
- Implement the described functionality
- Ensure code compiles and runs correctly

Always respond in the specified language and provide complete, working code.
`,
	EXTRACT_CSS: `
Extract and generate clean, modern CSS from the provided content, image, or description.

CSS requirements:
- Use modern CSS features and best practices
- Generate semantic, maintainable stylesheets
- Include responsive design considerations
- Use appropriate selectors and specificity
- Follow CSS naming conventions
- Optimize for performance and maintainability

If extracting from an image:
- Analyze the visual design and layout
- Generate corresponding CSS rules
- Identify colors, fonts, spacing, and layout
- Create reusable CSS classes and components

Always respond in the specified language and provide complete, working CSS.
`,
	RECOGNIZE_CONTENT: `
Recognize and extract information from images, documents, or other visual content.

Recognition requirements:
- Identify text content accurately
- Extract structured information
- Recognize tables, forms, and structured data
- Preserve formatting where possible
- Handle different languages and scripts
- Provide confidence scores for extracted content

For document analysis:
- Extract key information and metadata
- Identify document type and structure
- Recognize important sections and headings

For image analysis:
- Describe visual content
- Extract text from images (OCR)
- Identify objects, scenes, and visual elements

Always respond in the specified language and format extracted information clearly.
`,
	CONVERT_DATA: `
Convert data between different formats while preserving structure and meaning.

Conversion requirements:
- Maintain data integrity and relationships
- Preserve formatting and structure where possible
- Handle different data types appropriately
- Provide clear mapping between source and target formats
- Validate conversion accuracy

Supported conversions:
- CSV ↔ JSON ↔ XML
- Markdown ↔ HTML
- Text ↔ Structured data
- Image data ↔ Text representations

Ensure accurate, lossless conversion where possible.
`,
	EXTRACT_ENTITIES: `
Extract named entities, keywords, and structured information from content.

Entity extraction requirements:
- Identify people, organizations, locations
- Extract dates, numbers, and measurements
- Find keywords and important terms
- Recognize relationships and connections
- Provide confidence scores and context

Output structured data with:
- Entity types and values
- Position and context information
- Confidence scores
- Relationship mappings

Focus on accuracy and comprehensive coverage.
`,
	TRANSLATE_TO_LANGUAGE: `
Translate content to the specified target language while preserving meaning, tone, and formatting.

Translation requirements:
- Maintain original meaning and intent
- Preserve formatting, structure, and markdown syntax
- Adapt cultural references appropriately
- Use natural, fluent language in the target language
- Handle technical terms, proper names, and brand names correctly
- Maintain appropriate formality and tone
- Preserve code blocks, mathematical expressions, and technical content

For content already in the target language:
- Provide natural rephrasing or improvement
- Enhance clarity and readability
- Maintain professional quality

Supported languages:
- English (en)
- Russian (ru)
- Other languages as requested

Ensure high-quality, natural translations that feel native to the target language.
`,
	GENERAL_PROCESSING: `
Process and analyze content using appropriate AI capabilities.

General processing requirements:
- Understand context and intent
- Provide relevant analysis or transformation
- Use appropriate tools and methods
- Maintain content quality and accuracy
- Adapt to different content types and requirements

Focus on providing useful, accurate results that meet user needs.
`,
	CRX_SOLVE_AND_ANSWER: `
Solve the problem or answer the question presented in the content.

Auto-detect the type of content:
- Mathematical equation/expression → Solve step-by-step
- Quiz/test question → Provide correct answer
- Homework problem → Solve and explain
- General question → Answer with explanation

Format output as:

**Problem/Question:**
<recognized content - use $KaTeX$ for math>

**Solution/Answer:**
<step-by-step solution or direct answer>

**Explanation:**
<clear explanation of the reasoning>

---

For MATH problems:
- Use single $ for inline math: $x = 5$
- Use double $$ for display equations: $$\\int_0^1 f(x) dx$$
- Show all intermediate steps
- Simplify the final answer
- For systems: solve all variables
- For inequalities: use interval notation

For MULTIPLE CHOICE:
- Identify correct option (A, B, C, D)
- Explain why it's correct
- Note why others are wrong

For TRUE/FALSE:
- State True or False clearly
- Provide justification

For SHORT ANSWER/ESSAY:
- Provide concise, complete answer
- Include key facts and reasoning

For CODING problems:
- Write the solution code
- Explain the logic

If multiple problems/questions present, solve each separately.
If unsolvable or unclear, explain why.
`,
	CRX_WRITE_CODE: `
You are an expert software developer. Analyze the provided content and generate high-quality, working code.

Code Generation Requirements:
- Choose the best programming language for the task
- Write clean, efficient, and well-documented code
- Include proper error handling and input validation
- Add meaningful comments explaining complex logic
- Follow language-specific best practices and conventions
- Ensure code is readable, maintainable, and follows standard patterns

For each code generation task:
1. **Analyze Requirements**: Understand what the code needs to do
2. **Choose Language**: Select appropriate programming language
3. **Design Solution**: Plan the code structure and logic
4. **Write Code**: Provide complete, working code with comments
5. **Explain Logic**: Describe how the code works and key decisions

Provide complete, runnable code that solves the described problem.
`,
	CRX_EXTRACT_CSS: `
You are an expert CSS developer. Analyze the provided content and extract/generate the corresponding CSS styles.

CSS Extraction Requirements:
- Analyze visual elements, layout, and design patterns
- Generate modern, clean CSS using current standards
- Use semantic class names and proper CSS architecture
- Include responsive design considerations
- Optimize for performance and maintainability
- Follow CSS best practices and conventions

For CSS extraction:
1. **Analyze Design**: Identify colors, typography, spacing, layout
2. **Generate Rules**: Create appropriate CSS rules and selectors
3. **Organize Code**: Group related styles logically
4. **Add Comments**: Explain complex or important style decisions
5. **Ensure Compatibility**: Use widely supported CSS properties

Provide complete, well-organized CSS that recreates the described design.
`
};
AI_INSTRUCTIONS.SOLVE_AND_ANSWER;
AI_INSTRUCTIONS.WRITE_CODE;
AI_INSTRUCTIONS.EXTRACT_CSS;
AI_INSTRUCTIONS.RECOGNIZE_CONTENT;
AI_INSTRUCTIONS.CONVERT_DATA;
AI_INSTRUCTIONS.EXTRACT_ENTITIES;
AI_INSTRUCTIONS.TRANSLATE_TO_LANGUAGE;
AI_INSTRUCTIONS.GENERAL_PROCESSING;
AI_INSTRUCTIONS.CRX_SOLVE_AND_ANSWER;
AI_INSTRUCTIONS.CRX_WRITE_CODE;
AI_INSTRUCTIONS.CRX_EXTRACT_CSS;
//#endregion
//#region src/shared/service/instructions/templates.ts
var templates_exports = /* @__PURE__ */ __exportAll({ DEFAULT_INSTRUCTION_TEMPLATES: () => DEFAULT_INSTRUCTION_TEMPLATES });
var DEFAULT_INSTRUCTION_TEMPLATES = [
	{
		label: "Markdown & KaTeX",
		instruction: `Format the output as GitHub-compatible Markdown with KaTeX.

Structure rules:
- Use headings for structure:
  - Main sections: start from ### (H3) minimum
  - Subsections: #### / ##### when needed
- Avoid long paragraphs: prefer lists and sub-lists.

KaTeX / math rules:
- Prefer inline formulas: $...$ (use this most of the time).
- Avoid $$...$$ blocks; only use block math if strictly necessary.
  - Prefer block math as \\[ ... \\] instead of $$...$$.
- Inside KaTeX, write a vertical bar as \\| (example: $A \\| B$).

Tables:
- Use strict GitHub Markdown table syntax.
- Inside table cells:
  - Use <br> for line breaks (no real newlines inside cells).
  - If source data uses ';' as a separator, replace ';' with <br>.

Colon / key-value formatting:
- For "key: value" style lines, make the part before ':' bold:
  - **Key**: value

General:
- Use bullet lists (-) or numbered steps (1., 2., 3.) where appropriate.
- Keep formatting consistent and readable in dark themes.
- Preserve meaning and math accuracy.`,
		enabled: true,
		order: 0
	},
	{
		label: "Solve & Answer",
		instruction: `Solve problems or answer questions. Auto-detect the type:
• Math equations → Solve step-by-step with KaTeX
• Quiz/test questions → Provide correct answer with explanation
• Homework problems → Solve and explain reasoning

Format:
**Problem/Question:** <content, use $KaTeX$ for math>
**Solution/Answer:** <step-by-step or direct answer>
**Explanation:** <clear reasoning>

For multiple choice: identify correct option + explain why.
For math: prefer $inline$; avoid $$block$$ and prefer \\[block\\] only if strictly necessary.
Show all work and simplify the final answer.`,
		enabled: true,
		order: 1
	},
	{
		label: "Solve with Graphics",
		instruction: `Solve problems and generate visual representations when applicable.

For functions, graphs, diagrams, geometric shapes, or data visualizations:
Generate inline SVG code as a data URI: \`![Graph](data:image/svg+xml,<encoded_svg>)\`

SVG Generation Rules:
1. Use encodeURIComponent() encoding for the SVG content
2. Keep SVG minimal but accurate (viewBox, paths, text labels)
3. Use appropriate colors: #2563eb (blue) for main, #dc2626 (red) for secondary
4. Include axis labels, grid lines, and legends where helpful
5. Size: viewBox="0 0 400 300" for standard graphs

When to generate SVG:
• Function plots: y = f(x), parametric curves, polar plots
• Geometric diagrams: triangles, circles, angles, constructions
• Data charts: bar, line, pie charts
• Flowcharts and simple diagrams
• Number lines and coordinate systems

Format:
**Problem:** <description>
**Solution:** <step-by-step with $KaTeX$>
**Visualization:**
![<title>](data:image/svg+xml,<encodeURIComponent_svg>)

Always provide both the mathematical solution AND the visual when graphics are suitable.`,
		enabled: true,
		order: 2
	},
	{
		label: "Write code",
		instruction: `Generate code based on the recognized request/description.

Format:
**Request:** <what the code should do>
**Language:** <programming language>
**Code:**
\`\`\`<lang>
<code>
\`\`\`

Write clean, functional code with meaningful names and brief comments.`,
		enabled: true,
		order: 3
	},
	{
		label: "Extract CSS",
		instruction: `Generate CSS that matches the visual appearance of the content.

Extract:
- Colors (oklch, hex, rgb)
- Typography (font, size, weight)
- Spacing (padding, margin, gap)
- Layout (flex, grid)
- Effects (shadow, radius, gradients)

Use CSS custom properties and modern syntax.
Include responsive considerations.`,
		enabled: true,
		order: 4
	},
	{
		label: "Generate Diagram",
		instruction: `Generate SVG diagrams, charts, or visual representations from descriptions.

Output as inline data URI: ![<title>](data:image/svg+xml,<encoded_svg>)

Diagram Types:
• Flowcharts: processes, algorithms, decision trees
• Charts: bar, line, pie, scatter plots
• Diagrams: UML, ER, network, architecture
• Graphs: mathematical functions, data visualization
• Geometric: shapes, constructions, proofs

SVG Requirements:
1. Use encodeURIComponent() for the SVG string
2. viewBox="0 0 600 400" (adjust as needed)
3. Clean, minimal SVG with proper structure
4. Colors: #3b82f6 primary, #10b981 secondary, #f59e0b accent
5. Include labels, arrows, and legends
6. Use <text> for readable annotations

Example output format:
**Diagram:** <description>
![<title>](data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20300%22%3E...%3C%2Fsvg%3E)`,
		enabled: true,
		order: 5
	},
	{
		label: "Extract contacts",
		instruction: "Focus on extracting contact information: phone numbers, emails, addresses, and names. Format phone numbers in E.164 format.",
		enabled: true,
		order: 6
	},
	{
		label: "Summarize content",
		instruction: "Provide a brief summary of the recognized content. Include key points and main takeaways.",
		enabled: true,
		order: 7
	},
	{
		label: "Extract URLs and links",
		instruction: "Focus on extracting all URLs, links, and web addresses. Validate and normalize them.",
		enabled: true,
		order: 8
	},
	{
		label: "Code extraction",
		instruction: "Focus on extracting code snippets. Detect the programming language and format appropriately with syntax highlighting markers.",
		enabled: true,
		order: 9
	},
	{
		label: "Table extraction",
		instruction: "Focus on extracting tabular data. Format as proper Markdown tables with headers.",
		enabled: true,
		order: 10
	}
];
//#endregion
//#region src/shared/routing/channel/UnifiedAIConfig.ts
var processApiUrl = () => resolveProcessApiUrl$1("processing");
var UNIFIED_PROCESSING_RULES = {
	"share-target": {
		processingUrl: processApiUrl(),
		contentAction: {
			onResult: "write-clipboard",
			onAccept: "attach-to-associated",
			doProcess: "instantly",
			openApp: true
		},
		supportedContentTypes: [
			"text",
			"markdown",
			"image",
			"url"
		],
		defaultOverrideFactors: []
	},
	"launch-queue": {
		processingUrl: processApiUrl(),
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-associated",
			doProcess: "manually",
			openApp: true
		},
		supportedContentTypes: [
			"file",
			"blob",
			"text",
			"markdown",
			"image"
		],
		defaultOverrideFactors: []
	},
	"crx-snip": {
		processingUrl: processApiUrl(),
		contentAction: {
			onResult: "write-clipboard",
			onAccept: "attach-to-associated",
			doProcess: "instantly",
			openApp: false
		},
		supportedContentTypes: ["text", "image"],
		defaultOverrideFactors: ["force-processing"]
	},
	"paste": {
		processingUrl: processApiUrl(),
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-associated",
			doProcess: "manually",
			openApp: false
		},
		supportedContentTypes: [
			"text",
			"markdown",
			"image"
		],
		defaultOverrideFactors: [],
		associationOverrides: {
			"text": ["user-action"],
			"markdown": ["user-action"]
		}
	},
	"drop": {
		processingUrl: processApiUrl(),
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-associated",
			doProcess: "manually",
			openApp: false
		},
		supportedContentTypes: [
			"file",
			"blob",
			"text",
			"markdown",
			"image"
		],
		defaultOverrideFactors: [],
		associationOverrides: {
			"file": ["user-action"],
			"blob": ["user-action"]
		}
	},
	"button-attach-workcenter": {
		processingUrl: processApiUrl(),
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-workcenter",
			doProcess: "manually",
			openApp: false
		},
		supportedContentTypes: [
			"text",
			"markdown",
			"image",
			"file"
		],
		defaultOverrideFactors: ["explicit-workcenter"],
		associationOverrides: {
			"markdown": ["explicit-workcenter"],
			"text": ["explicit-workcenter"],
			"image": ["explicit-workcenter"],
			"file": ["explicit-workcenter"]
		}
	}
};
Object.fromEntries(Object.entries(UNIFIED_PROCESSING_RULES).map(([key, config]) => [key, {
	processingUrl: config.processingUrl,
	contentAction: config.contentAction,
	...config.supportedContentTypes && { supportedContentTypes: config.supportedContentTypes }
}]));
//#endregion
//#region src/shared/routing/channel/UnifiedMessaging.ts
/**
* Unified Messaging System for CWSP-shell
* Extends fest/uniform messaging with app-specific configuration
*/
var APP_CHANNEL_MAPPINGS = {
	...createDestinationChannelMappings(),
	[DESTINATIONS$1.WORKCENTER]: BROADCAST_CHANNELS$1.WORK_CENTER,
	[DESTINATIONS$1.CLIPBOARD]: BROADCAST_CHANNELS$1.CLIPBOARD
};
var appMessagingInstance = null;
/**
* Get the app-configured UnifiedMessagingManager
*/
function getUnifiedMessaging() {
	if (!appMessagingInstance) appMessagingInstance = getUnifiedMessaging$2({
		channelMappings: APP_CHANNEL_MAPPINGS,
		queueOptions: {
			dbName: "CWSP-shellMessageQueue",
			storeName: "messages",
			maxRetries: 3,
			defaultExpirationMs: 864e5
		},
		pendingStoreOptions: {
			storageKey: "rs-unified-messaging-pending",
			maxMessages: 200,
			defaultTTLMs: 864e5
		}
	});
	return appMessagingInstance;
}
var unifiedMessaging = getUnifiedMessaging();
/**
* Register a handler using the app-configured manager
*/
function registerHandler(destination, handler) {
	const aliases = getDestinationAliases$1(destination);
	const names = aliases.length > 0 ? aliases : [normalizeDestination$1(destination) || destination];
	for (const name of names) unifiedMessaging.registerHandler(name, handler);
}
function unregisterHandler(destination, handler) {
	const aliases = getDestinationAliases$1(destination);
	const names = aliases.length > 0 ? aliases : [normalizeDestination$1(destination) || destination];
	for (const name of names) unifiedMessaging.unregisterHandler(name, handler);
}
function initializeComponent(componentId) {
	return unifiedMessaging.initializeComponent(componentId);
}
function registerComponent(componentId, destination) {
	unifiedMessaging.registerComponent(componentId, normalizeDestination$1(destination) || destination);
}
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
	const destination = normalizeDestination$1(String(rec.destination ?? "")) || String(rec.destination ?? "").trim();
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
	replayQueuedMessagesForDestination(normalizeDestination$1(destRaw) || normalizeViewId$1(destRaw)).catch(() => void 0);
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
	const destination = normalizeDestination$1(String(rec.destination || "")) || String(rec.destination || "").trim();
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
	const aliases = getDestinationAliases$1(dest);
	const targets = /* @__PURE__ */ new Set();
	for (const x of [dest, ...aliases]) {
		const n = normalizeDestination$1(x) || String(x || "").trim();
		if (n) targets.add(normalizeViewId$1(n));
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
	const destinationKey = normalizeViewId$1(destination);
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
		loader: () => __vitePreload(() => import("../chunks/src2.js"), __vite__mapDeps([3,1,2,4,5,6,7]), import.meta.url)
	});
	ShellRegistry.register({
		id: "minimal",
		name: "Minimal",
		description: "Minimal toolbar-based navigation",
		loader: () => __vitePreload(() => import("../chunks/preview.js").then((n) => n.t), __vite__mapDeps([8,2,1,4,5,6,7]), import.meta.url)
	});
	ShellRegistry.register({
		id: "content",
		name: "Content",
		description: "CRX content shell with overlay-focused layering",
		loader: () => __vitePreload(() => import("../chunks/src3.js"), __vite__mapDeps([9,3,1,2,4,5,6,7]), import.meta.url)
	});
	ShellRegistry.register({
		id: "immersive",
		name: "Immersive",
		description: "Chromeless immersive host (extensions / embedded)",
		loader: () => __vitePreload(() => import("../chunks/src2.js"), __vite__mapDeps([3,1,2,4,5,6,7]), import.meta.url)
	});
	ShellRegistry.register({
		id: "window",
		name: "Window",
		description: "Window-capable shell (multi-view)",
		loader: () => __vitePreload(() => import("../chunks/window.js"), __vite__mapDeps([10,11,1,2,6,5,4,7,12,13,14,15,16,17,18,19,20,8]), import.meta.url)
	});
	ShellRegistry.register({
		id: "tabbed",
		name: "Tabbed",
		description: "Tabbed window shell",
		loader: () => __vitePreload(() => import("../chunks/tabbed.js"), __vite__mapDeps([21,10,11,1,2,6,5,4,7,12,13,14,15,16,17,18,19,20,8]), import.meta.url)
	});
	ShellRegistry.register({
		id: "environment",
		name: "Environment",
		description: "Desktop/launcher shell: wallpaper, Speed Dial, taskbar, ui-window",
		loader: () => __vitePreload(() => import("../chunks/environment.js"), __vite__mapDeps([22,11,1,2,6,5,4,7,12,13,14,15,16,17,18,19,20]), import.meta.url)
	});
}
/** Register the built-in views that are enabled by current feature flags. */
function registerDefaultViews() {
	ViewRegistry.register({
		id: "viewer",
		name: "Viewer",
		icon: "eye",
		loader: () => __vitePreload(() => import("../chunks/src9.js"), __vite__mapDeps([23,5,1,2,24,25,26]), import.meta.url)
	});
	ViewRegistry.register({
		id: "workcenter",
		name: "Work Center",
		icon: "lightning",
		loader: () => __vitePreload(() => import("../chunks/src10.js"), __vite__mapDeps([27,5,1,2,28,25,29,30,31,32,33,34,35,36,37,38,39,40,41,42,26]), import.meta.url)
	});
	ViewRegistry.register({
		id: "settings",
		name: "Settings",
		icon: "gear",
		loader: () => __vitePreload(() => import("../chunks/src8.js"), __vite__mapDeps([43,5,1,2,24,25,26,44,45,46,47,35,34]), import.meta.url)
	});
	ViewRegistry.register({
		id: "network",
		name: "Network",
		icon: "wifi-high",
		loader: () => __vitePreload(() => import("../chunks/src7.js"), __vite__mapDeps([48,1,2,49]), import.meta.url)
	});
	ViewRegistry.register({
		id: "history",
		name: "History",
		icon: "clock-counter-clockwise",
		loader: () => __vitePreload(() => import("../chunks/src5.js"), __vite__mapDeps([50,1,2,24,5,25,26,51]), import.meta.url)
	});
	ViewRegistry.register({
		id: "explorer",
		name: "Explorer",
		icon: "folder",
		loader: () => __vitePreload(() => import("../chunks/src.js"), __vite__mapDeps([52,5,1,2,24,25,26,44]), import.meta.url)
	});
	ViewRegistry.register({
		id: "editor",
		name: "Editor",
		icon: "pencil",
		loader: () => __vitePreload(() => import("../chunks/src4.js"), __vite__mapDeps([53,5,1,2,24,25,26]), import.meta.url)
	});
	ViewRegistry.register({
		id: "home",
		name: "Home",
		icon: "house",
		loader: () => __vitePreload(() => import("../chunks/src6.js"), __vite__mapDeps([54,1,2,24,5,25,26,55]), import.meta.url)
	});
	ViewRegistry.register({
		id: "print",
		name: "Print",
		icon: "printer",
		loader: () => __vitePreload(() => import("../chunks/src9.js"), __vite__mapDeps([23,5,1,2,24,25,26]), import.meta.url)
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
//#region src/shared/routing/core/view-prefetch.ts
/**
* Low-priority prefetch of view chunks after the focused view is interactive.
*/
function scheduleIdle(fn, timeoutMs) {
	if (typeof globalThis.requestIdleCallback === "function") globalThis.requestIdleCallback(fn, { timeout: timeoutMs });
	else globalThis.setTimeout?.(fn, 32);
}
/**
* Stagger dynamic imports for non-current views so the next navigation is faster
* without competing with the active view's work.
*/
function scheduleViewModulePrefetch(currentViewId) {
	const others = ENABLED_VIEW_IDS$1.filter((id) => id !== currentViewId);
	if (others.length === 0) return;
	let index = 0;
	const step = () => {
		const id = others[index++];
		if (!id) return;
		ViewRegistry.prefetchModule(id);
		scheduleIdle(step, 6e3);
	};
	scheduleIdle(step, 2500);
}
//#endregion
//#region src/shared/other/config/settings/settings-shell-profile.ts
var skuFromCtx = (ctx) => {
	if (ctx.sku) return ctx.sku;
	return inferCwspSkuFromLocation$1() || readCwspSku$1();
};
/**
* Resolve tabs from `data-cwsp-sku` first.
* WHY: Capacitor without desktop views used to mean transfer (cwsp-mobile). After the
* launcher drops explorer/viewer it would incorrectly inherit the CWSP tab.
*/
var resolveSettingsShellProfile = (ctx) => {
	if (ctx.isExtension || ctx.surface === "crx") return "extension";
	const sku = skuFromCtx(ctx);
	if (sku === "launcher") return "environment";
	if (sku === "transfer") return "cwsp-mobile";
	if (sku === "explorer") return "explorer";
	if (sku === "document") return "document";
	if (sku === "process") return "process";
	if (sku === "crx") return "extension";
	if (ctx.surface === "markdown") return "markdown";
	if (ctx.surface === "environment") return "environment";
	if (ctx.surface === "capacitor" || ctx.surface === "native") {
		if (!(isEnabledView("workcenter") || isEnabledView("viewer") || isEnabledView("explorer"))) return "cwsp-mobile";
	}
	return "full";
};
var CWSP_MOBILE_HIDDEN_BUILTIN_TABS = [
	"appearance",
	"markdown",
	"ai",
	"mcp",
	"server",
	"instructions",
	"extension"
];
/**
* CRX options page: drop built-in Extension (NTP) — folded into contributed `crx`
* tab — and Server (CWSP tab owns hub/endpoint).
*/
var EXTENSION_HIDDEN_BUILTIN_TABS = ["extension", "server"];
/** VDS md.u2re.space PWA: no Server / Extension (Control/CRX own those). */
var MARKDOWN_HIDDEN_BUILTIN_TABS = ["server", "extension"];
/** Capacitor document: print / read / edit only — AI lives on process. */
var DOCUMENT_HIDDEN_BUILTIN_TABS = [
	"server",
	"extension",
	"cwsp",
	"ai",
	"mcp",
	"instructions"
];
/** Process APK / WorkCenter: AI + MCP + instructions; no print Markdown / Control. */
var PROCESS_HIDDEN_BUILTIN_TABS = [
	"server",
	"extension",
	"cwsp",
	"markdown"
];
/**
* Launcher / environment desktop: Appearance + Workspace + self-APK Updates.
* INVARIANT: print/read/edit live on document; AI/WorkCenter on process; Control on transfer.
* NOTE: `cwsp` is contributed (not built-in); same DOM selectors still remove the tab/panel.
*/
var ENVIRONMENT_HIDDEN_BUILTIN_TABS = [
	"server",
	"extension",
	"cwsp",
	"markdown",
	"ai",
	"mcp",
	"instructions"
];
/** Explorer APK: no document/control tabs. Storage UI stays in the explorer view. */
var EXPLORER_HIDDEN_BUILTIN_TABS = [
	"markdown",
	"ai",
	"mcp",
	"server",
	"instructions",
	"extension",
	"cwsp"
];
/** Remove host-variant built-in tabs that the profile replaces or folds elsewhere. */
var pruneBuiltInSettingsTabs = (root, profile) => {
	const hidden = profile === "cwsp-mobile" ? CWSP_MOBILE_HIDDEN_BUILTIN_TABS : profile === "extension" ? EXTENSION_HIDDEN_BUILTIN_TABS : profile === "markdown" ? MARKDOWN_HIDDEN_BUILTIN_TABS : profile === "document" ? DOCUMENT_HIDDEN_BUILTIN_TABS : profile === "process" ? PROCESS_HIDDEN_BUILTIN_TABS : profile === "environment" ? ENVIRONMENT_HIDDEN_BUILTIN_TABS : profile === "explorer" ? EXPLORER_HIDDEN_BUILTIN_TABS : null;
	if (!hidden) return;
	for (const tab of hidden) {
		root.querySelector(`[data-tab-panel="${tab}"]`)?.remove();
		root.querySelector(`[data-action="switch-settings-tab"][data-tab="${tab}"]`)?.remove();
	}
};
var defaultSettingsTabForProfile = (profile) => {
	if (profile === "cwsp-mobile") return "cwsp";
	if (profile === "extension") return "crx";
	if (profile === "markdown" || profile === "document") return "markdown";
	if (profile === "process") return "ai";
	if (profile === "environment") return "appearance";
	if (profile === "explorer") return "appearance";
	return "ai";
};
var hasBuiltInSettingsPanel = (root, panelId) => Boolean(root.querySelector(`[data-tab-panel="${panelId}"]`));
var HUB_SETTINGS_ALIASES$1 = {
	"": "hub",
	hub: "hub",
	shell: "hub",
	explorer: "explorer",
	cwsp: "transfer",
	transfer: "transfer",
	viewer: "document",
	markdown: "document",
	document: "document",
	md: "document",
	process: "process",
	workcenter: "process"
};
/** Canonical path segment for a hub settings section (`hub` → no extra segment). */
var hubSettingsSectionPath$1 = (section) => {
	if (section === "hub") return "";
	if (section === "document") return "markdown";
	return section;
};
var canonicalHubSettingsSection$1 = (raw) => {
	return HUB_SETTINGS_ALIASES$1[String(raw || "").trim().toLowerCase()] || "hub";
};
var isCentralHubHost = () => {
	try {
		const sku = inferCwspSkuFromLocation$1();
		if (sku && sku !== "launcher" && sku !== "crx") return false;
		const host = String(globalThis.location?.hostname || "").toLowerCase();
		if (host === "u2re.space" || host === "www.u2re.space") return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "::1") return true;
		if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) return true;
		return String(document.documentElement?.dataset?.cwspSurface || "").toLowerCase() === "vds-main";
	} catch {
		return false;
	}
};
/**
* Hub `/settings` and `/settings/{area}` only. `/explorer/settings` stays the explorer module.
* WHY: sibling path mounts set a history base; those are not the central settings tree.
*/
var resolveEffectiveHubSettingsSection = () => {
	if (!isCentralHubHost()) return null;
	try {
		const base = String(document.documentElement?.dataset?.cwspRouterBase || "").replace(/\/+$/, "");
		if (base && base !== "/") return null;
		const segs = (String(globalThis.location?.pathname || "/").split("?")[0] || "/").split("/").filter(Boolean);
		if (segs[0]?.toLowerCase() !== "settings") return null;
		return canonicalHubSettingsSection$1(segs[1] || "");
	} catch {
		return null;
	}
};
var skuForHubSettingsSection = (section) => {
	if (section === "explorer") return "explorer";
	if (section === "transfer") return "transfer";
	if (section === "document") return "document";
	if (section === "process") return "process";
	return "launcher";
};
var SIBLING_HUB_SETTINGS_SECTIONS$1 = [
	"explorer",
	"document",
	"process",
	"transfer"
];
var ALL_HUB_SETTINGS_SECTIONS$1 = ["hub", ...SIBLING_HUB_SETTINGS_SECTIONS$1];
/**
* Hub shows every area. Launcher Android shows Shell plus installed sibling APKs only.
* Empty → hide the area nav (no extra tabs).
*/
var visibleHubSettingsSections = (mode, installedSiblings) => {
	if (mode === "hub") return ALL_HUB_SETTINGS_SECTIONS$1.slice();
	if (mode === "launcher") {
		if (!installedSiblings) return [];
		const sibs = SIBLING_HUB_SETTINGS_SECTIONS$1.filter((s) => installedSiblings.includes(s));
		return sibs.length ? ["hub", ...sibs] : [];
	}
	return [];
};
var rememberSettingsAreaSection = (section) => {
	try {
		document.documentElement.dataset.cwspSettingsSection = section;
	} catch {}
};
var readSettingsAreaSection = () => {
	try {
		const raw = String(document.documentElement?.dataset?.cwspSettingsSection || "").trim();
		return raw ? canonicalHubSettingsSection$1(raw) : "";
	} catch {
		return "";
	}
};
//#endregion
//#region src/shared/routing/core/layer-manager.ts
/**
* Unified layer hierarchy - ORDER MATTERS!
*
* Layers are declared in this order to ensure:
* 1. Reset/normalize come first (lowest specificity wins)
* 2. Tokens (CSS custom properties) are available early
* 3. Runtime provides base component styles
* 4. Shell styles can override runtime
* 5. View styles can override shell
* 6. Overrides (theme, print, a11y) win last
*/
var LAYER_HIERARCHY = [
	{
		name: "ux-normalize",
		category: "system",
		order: 0,
		description: "Veela normalize layer"
	},
	{
		name: "layer.reset",
		category: "system",
		order: 0,
		description: "CSS reset rules"
	},
	{
		name: "layer.normalize",
		category: "system",
		order: 10,
		description: "Normalize browser defaults"
	},
	{
		name: "tokens",
		category: "system",
		order: 20,
		description: "Legacy tokens layer"
	},
	{
		name: "ux-tokens",
		category: "system",
		order: 20,
		description: "Veela token layer"
	},
	{
		name: "layer.tokens",
		category: "system",
		order: 20,
		description: "CSS custom properties (variables)"
	},
	{
		name: "base",
		category: "system",
		order: 30,
		description: "Legacy base layer"
	},
	{
		name: "ux-base",
		category: "system",
		order: 30,
		description: "Veela base layer"
	},
	{
		name: "layout",
		category: "system",
		order: 40,
		description: "Legacy layout layer"
	},
	{
		name: "ux-layout",
		category: "system",
		order: 40,
		description: "Veela layout layer"
	},
	{
		name: "components",
		category: "system",
		order: 50,
		description: "Legacy components layer"
	},
	{
		name: "ux-components",
		category: "system",
		order: 50,
		description: "Veela components layer"
	},
	{
		name: "utilities",
		category: "system",
		order: 60,
		description: "Legacy utilities layer"
	},
	{
		name: "ux-utilities",
		category: "system",
		order: 60,
		description: "Veela utilities layer"
	},
	{
		name: "ux-theme",
		category: "system",
		order: 70,
		description: "Veela theme layer"
	},
	{
		name: "ux-overrides",
		category: "system",
		order: 80,
		description: "Veela overrides layer"
	},
	{
		name: "layer.properties.shell",
		category: "system",
		order: 30,
		description: "Shell context custom properties"
	},
	{
		name: "layer.properties.views",
		category: "system",
		order: 35,
		description: "View context custom properties"
	},
	{
		name: "layer.runtime.base",
		category: "runtime",
		order: 100,
		description: "Veela runtime base styles"
	},
	{
		name: "layer.runtime.components",
		category: "runtime",
		order: 110,
		description: "Reusable component styles"
	},
	{
		name: "layer.runtime.forms",
		category: "runtime",
		order: 115,
		description: "Form element base styles"
	},
	{
		name: "layer.runtime.utilities",
		category: "runtime",
		order: 120,
		description: "Utility classes"
	},
	{
		name: "layer.runtime.animations",
		category: "runtime",
		order: 130,
		description: "Keyframes and animation definitions"
	},
	{
		name: "layer.boot",
		category: "runtime",
		order: 140,
		description: "Boot/choice screen styles"
	},
	{
		name: "boot.tokens",
		category: "runtime",
		order: 142,
		description: "Boot tokens layer"
	},
	{
		name: "boot.base",
		category: "runtime",
		order: 144,
		description: "Boot base layer"
	},
	{
		name: "boot.components",
		category: "runtime",
		order: 146,
		description: "Boot components layer"
	},
	{
		name: "boot.responsive",
		category: "runtime",
		order: 148,
		description: "Boot responsive adjustments"
	},
	{
		name: "layer.shell.common",
		category: "shell",
		order: 200,
		description: "Shared shell styles"
	},
	{
		name: "shell.tokens",
		category: "shell",
		order: 202,
		description: "Legacy shell tokens"
	},
	{
		name: "shell.base",
		category: "shell",
		order: 204,
		description: "Legacy shell base"
	},
	{
		name: "shell.components",
		category: "shell",
		order: 206,
		description: "Legacy shell components"
	},
	{
		name: "shell.utilities",
		category: "shell",
		order: 208,
		description: "Legacy shell utilities"
	},
	{
		name: "shell.overrides",
		category: "shell",
		order: 209,
		description: "Legacy shell overrides"
	},
	{
		name: "layer.shell.raw",
		category: "shell",
		order: 210,
		description: "Raw shell (minimal)"
	},
	{
		name: "layer.shell.minimal",
		category: "shell",
		order: 220,
		description: "Minimal shell (toolbar navigation)"
	},
	{
		name: "layer.shell.minimal.layout",
		category: "shell",
		order: 222,
		description: "Minimal shell layout rules"
	},
	{
		name: "layer.shell.minimal.components",
		category: "shell",
		order: 224,
		description: "Minimal shell component styles"
	},
	{
		name: "layer.shell.window",
		category: "shell",
		order: 226,
		description: "Window shell (desktop/process frames)"
	},
	{
		name: "layer.shell.faint",
		category: "shell",
		order: 230,
		description: "Faint shell (tabbed sidebar)"
	},
	{
		name: "layer.shell.faint.layout",
		category: "shell",
		order: 232,
		description: "Faint shell layout"
	},
	{
		name: "layer.shell.faint.sidebar",
		category: "shell",
		order: 234,
		description: "Faint shell sidebar"
	},
	{
		name: "layer.shell.faint.toolbar",
		category: "shell",
		order: 236,
		description: "Faint shell toolbar"
	},
	{
		name: "layer.shell.faint.forms",
		category: "shell",
		order: 238,
		description: "Faint shell form components"
	},
	{
		name: "layer.view.common",
		category: "view",
		order: 300,
		description: "Shared view styles"
	},
	{
		name: "layer.view.viewer",
		category: "view",
		order: 310,
		description: "Markdown viewer"
	},
	{
		name: "layer.view.workcenter",
		category: "view",
		order: 320,
		description: "Work center (AI prompts)"
	},
	{
		name: "layer.view.workcenter.keyframes",
		category: "view",
		order: 322,
		description: "Work center animations"
	},
	{
		name: "view.workcenter",
		category: "view",
		order: 324,
		description: "Work center styles (legacy name)"
	},
	{
		name: "view.workcenter.animations",
		category: "view",
		order: 326,
		description: "Work center animations (legacy name)"
	},
	{
		name: "layer.view.settings",
		category: "view",
		order: 330,
		description: "Settings view"
	},
	{
		name: "layer.view.explorer",
		category: "view",
		order: 340,
		description: "File explorer"
	},
	{
		name: "layer.view.history",
		category: "view",
		order: 350,
		description: "History view"
	},
	{
		name: "layer.view.editor",
		category: "view",
		order: 360,
		description: "Editor view"
	},
	{
		name: "layer.view.editor.markdown",
		category: "view",
		order: 362,
		description: "Markdown editor sublayer"
	},
	{
		name: "layer.view.editor.quill",
		category: "view",
		order: 364,
		description: "Quill editor sublayer"
	},
	{
		name: "layer.view.home",
		category: "view",
		order: 380,
		description: "Home/landing view"
	},
	{
		name: "layer.view.print",
		category: "view",
		order: 390,
		description: "Print view"
	},
	{
		name: "view-explorer",
		category: "view",
		order: 392,
		description: "Explorer legacy layered scope"
	},
	{
		name: "view-transitions",
		category: "override",
		order: 850,
		description: "View Transition API named targets and keyframes"
	},
	{
		name: "layer.override.theme",
		category: "override",
		order: 900,
		description: "Theme customizations"
	},
	{
		name: "layer.override.print",
		category: "override",
		order: 910,
		description: "Print media styles"
	},
	{
		name: "layer.override.a11y",
		category: "override",
		order: 920,
		description: "Accessibility enhancements"
	}
];
var _initialized = false;
/**
* Initialize CSS layer order
*
* MUST be called before any other styles are loaded to ensure
* the cascade layer order is established correctly.
*
* This function is idempotent - calling it multiple times is safe.
*
* @example
* ```ts
* // In application entry point
* import { initializeLayers } from './shared/layer-manager';
*
* async function main() {
*     // Initialize layers FIRST
*     initializeLayers();
*
*     // Then load styles
*     await loadStyleSystem('vl-advanced');
*     // ...
* }
* ```
*/
function initializeLayers() {
	if (_initialized) {
		console.debug("[LayerManager] Already initialized");
		return;
	}
	if (typeof document === "undefined") {
		console.warn("[LayerManager] No document available (SSR context?)");
		return;
	}
	const layerNames = [...LAYER_HIERARCHY].sort((a, b) => a.order - b.order).map((l) => l.name);
	const layerRule = `@layer ${layerNames.join(", ")};`;
	const style = document.createElement("style");
	style.id = "css-layer-init";
	style.setAttribute("data-layer-manager", "true");
	style.textContent = layerRule;
	const head = document.head;
	head.insertBefore(style, head.firstChild);
	_initialized = true;
	console.log(`[LayerManager] Initialized ${layerNames.length} layers`);
}
//#endregion
//#region ../../modules/projects/subsystem/src/other/config/ecosystem-skus.ts
var ecosystem_skus_exports = /* @__PURE__ */ __exportAll({
	CWSP_SKU_HANDOFF_KEY: () => CWSP_SKU_HANDOFF_KEY,
	ECOSYSTEM_SKUS: () => ECOSYSTEM_SKUS,
	HUB_PUBLIC_HOSTS: () => HUB_PUBLIC_HOSTS,
	SKU_HUB_PATHS: () => SKU_HUB_PATHS,
	SKU_LOCAL_NAV_VIEWS: () => SKU_LOCAL_NAV_VIEWS,
	SKU_PUBLIC_HOSTS: () => SKU_PUBLIC_HOSTS,
	VIEW_TO_SIBLING_SKU: () => VIEW_TO_SIBLING_SKU,
	androidPackageForSku: () => androidPackageForSku,
	applyCwspSku: () => applyCwspSku,
	ensureCwspSkuFromLocation: () => ensureCwspSkuFromLocation,
	inferCwspSkuFromLocation: () => inferCwspSkuFromLocation,
	isCwspNativeHost: () => isCwspNativeHost,
	isCwspSku: () => isCwspSku,
	isHubPublicHost: () => isHubPublicHost,
	isViewLocalToSurface: () => isViewLocalToSurface,
	readCwspSku: () => readCwspSku,
	siblingSkuForView: () => siblingSkuForView,
	skuForHubPathSegment: () => skuForHubPathSegment,
	stashSkuHandoff: () => stashSkuHandoff
});
var ECOSYSTEM_SKUS = {
	launcher: {
		sku: "launcher",
		androidPackage: "space.u2re.cw",
		scheme: "space.u2re.cw",
		phosphorIcon: "cross",
		defaultView: "home",
		shell: "environment",
		apkManifest: "latest-launcher.json",
		apkName: "cwsp-launcher.apk"
	},
	transfer: {
		sku: "transfer",
		androidPackage: "space.u2re.cwsp",
		scheme: "space.u2re.cwsp",
		phosphorIcon: "drone",
		defaultView: "network",
		shell: "minimal",
		apkManifest: "latest.json",
		apkName: "cwsp.apk"
	},
	explorer: {
		sku: "explorer",
		androidPackage: "space.u2re.explorer",
		scheme: "space.u2re.explorer",
		phosphorIcon: "folder",
		defaultView: "explorer",
		shell: "minimal",
		apkManifest: "latest-explorer.json",
		apkName: "cwsp-explorer.apk"
	},
	document: {
		sku: "document",
		androidPackage: "space.u2re.document",
		scheme: "space.u2re.document",
		phosphorIcon: "books",
		defaultView: "viewer",
		shell: "minimal",
		apkManifest: "latest-document.json",
		apkName: "cwsp-document.apk"
	},
	process: {
		sku: "process",
		androidPackage: "space.u2re.process",
		scheme: "space.u2re.process",
		phosphorIcon: "magic-wand",
		defaultView: "workcenter",
		shell: "minimal",
		apkManifest: "latest-process.json",
		apkName: "cwsp-process.apk"
	},
	crx: {
		sku: "crx",
		androidPackage: null,
		scheme: "chrome-extension",
		phosphorIcon: "cross",
		defaultView: "home",
		shell: "environment",
		apkManifest: "",
		apkName: ""
	}
};
var SKU_SET = new Set(Object.keys(ECOSYSTEM_SKUS));
/** Views that leave the launcher APK and open a sibling SKU. */
var VIEW_TO_SIBLING_SKU = {
	explorer: "explorer",
	viewer: "document",
	editor: "document",
	markdown: "document",
	print: "document",
	workcenter: "process",
	network: "transfer"
};
var isCwspSku = (value) => typeof value === "string" && SKU_SET.has(value);
var readCwspSku = () => {
	try {
		const raw = String(document.documentElement?.dataset?.cwspSku || "").trim().toLowerCase();
		return isCwspSku(raw) ? raw : "";
	} catch {
		return "";
	}
};
/** Stamp `data-cwsp-sku` so Settings / openView / APK update resolve the same host. */
var applyCwspSku = (sku) => {
	try {
		document.documentElement.dataset.cwspSku = sku;
		const rec = ECOSYSTEM_SKUS[sku];
		if (rec.defaultView && !document.documentElement.dataset.cwspDefaultView) document.documentElement.dataset.cwspDefaultView = rec.defaultView;
	} catch {}
};
var siblingSkuForView = (view) => {
	return VIEW_TO_SIBLING_SKU[String(view || "").trim().toLowerCase()] || null;
};
var HUB_PUBLIC_HOSTS = ["u2re.space", "www.u2re.space"];
var SKU_PUBLIC_HOSTS = {
	document: ["md.u2re.space", "www.md.u2re.space"],
	explorer: ["explorer.u2re.space", "www.explorer.u2re.space"],
	process: ["process.u2re.space", "workcenter.u2re.space"],
	transfer: [
		"cwsp.u2re.space",
		"www.cwsp.u2re.space",
		"transfer.u2re.space"
	]
};
/** Hub/LAN Fastify prefixes — never nest (`/viewer/explorer`). */
var SKU_HUB_PATHS = {
	document: [
		"markdown",
		"document",
		"viewer"
	],
	explorer: [
		"explorer",
		"files",
		"fm"
	],
	process: ["workcenter", "process"],
	transfer: ["cwsp", "transfer"]
};
/** Specialized chrome. Empty list = hub/CRX keeps every view. */
var SKU_LOCAL_NAV_VIEWS = {
	launcher: [],
	crx: [],
	document: [
		"viewer",
		"editor",
		"print",
		"settings",
		"history"
	],
	explorer: [
		"explorer",
		"settings",
		"history"
	],
	process: [
		"workcenter",
		"settings",
		"history"
	],
	transfer: [
		"network",
		"settings",
		"history"
	]
};
var currentHostname = () => {
	try {
		return String(globalThis.location?.hostname || "").toLowerCase();
	} catch {
		return "";
	}
};
var firstPathSegment = () => {
	try {
		return (String(globalThis.location?.pathname || "/").split("?")[0] || "/").split("/").filter(Boolean)[0]?.toLowerCase() || "";
	} catch {
		return "";
	}
};
var isLanOrLoopbackHost = (host) => host === "localhost" || host === "127.0.0.1" || host === "::1" || /^\d{1,3}(\.\d{1,3}){3}$/.test(host);
var isHubPublicHost = (hostname) => {
	const host = String(hostname || currentHostname()).toLowerCase();
	return HUB_PUBLIC_HOSTS.includes(host);
};
var skuForHubPathSegment = (segment) => {
	const seg = String(segment || "").trim().toLowerCase();
	if (!seg) return "";
	for (const sku of Object.keys(SKU_HUB_PATHS)) if (SKU_HUB_PATHS[sku].includes(seg)) return sku;
	return "";
};
/** Host + hub/LAN path mount → SKU. `u2re.space/` stays launcher (full chrome). */
var inferCwspSkuFromLocation = () => {
	const stamped = readCwspSku();
	if (stamped) return stamped;
	const host = currentHostname();
	for (const sku of Object.keys(SKU_PUBLIC_HOSTS)) if (SKU_PUBLIC_HOSTS[sku].includes(host)) return sku;
	const fromPath = skuForHubPathSegment(firstPathSegment());
	if (fromPath) return fromPath;
	if (isHubPublicHost(host) || isLanOrLoopbackHost(host)) return "launcher";
	return "";
};
var ensureCwspSkuFromLocation = () => {
	const sku = inferCwspSkuFromLocation();
	if (sku) applyCwspSku(sku);
	return sku;
};
var normalizeNavViewId = (view) => {
	const key = String(view || "").trim().toLowerCase();
	if (key === "markdown" || key === "document" || key === "md") return "viewer";
	if (key === "process") return "workcenter";
	if (key === "files" || key === "fm") return "explorer";
	if (key === "transfer") return "network";
	return key;
};
/** False on a specialized host/mount for views that belong to another SKU. */
var isViewLocalToSurface = (view, sku = inferCwspSkuFromLocation()) => {
	const id = normalizeNavViewId(view);
	if (!id) return false;
	if (!sku || sku === "launcher" || sku === "crx") return true;
	const local = SKU_LOCAL_NAV_VIEWS[sku];
	if (!local.length) return true;
	return local.includes(id);
};
var isCwspNativeHost = () => {
	try {
		const g = globalThis;
		const platform = g.Capacitor?.getPlatform?.();
		return Boolean(g.Capacitor?.isNativePlatform?.() || platform === "android" || platform === "ios" || g.__CWS_NATIVE__ === true);
	} catch {
		return false;
	}
};
var CWSP_SKU_HANDOFF_KEY = "cwsp-sku-handoff";
var stashSkuHandoff = (payload) => {
	const json = JSON.stringify({
		...payload,
		ts: Date.now()
	});
	try {
		globalThis.sessionStorage?.setItem?.(CWSP_SKU_HANDOFF_KEY, json);
	} catch {}
	try {
		globalThis.localStorage?.setItem?.(CWSP_SKU_HANDOFF_KEY, json);
	} catch {}
};
try {
	ensureCwspSkuFromLocation();
} catch {}
var androidPackageForSku = (sku) => ECOSYSTEM_SKUS[sku]?.androidPackage ?? null;
//#endregion
//#region ../../modules/projects/subsystem/src/other/config/settings-host.ts
var SETTINGS_HOSTS = [
	"capacitor",
	"crx",
	"pwa",
	"web"
];
var isCrxHost = () => {
	try {
		const proto = String(globalThis.location?.protocol || "").toLowerCase();
		if (proto === "chrome-extension:" || proto === "moz-extension:") return true;
		return Boolean(globalThis.chrome?.runtime?.id);
	} catch {
		return false;
	}
};
var isPwaStandalone = () => {
	try {
		if (String(document.documentElement?.dataset?.cwspSurface || "").toLowerCase().includes("pwa")) return true;
		const standalone = globalThis.matchMedia?.("(display-mode: standalone)").matches || globalThis.navigator.standalone === true;
		return Boolean(standalone);
	} catch {
		return false;
	}
};
/**
* INVARIANT: Capacitor wins over standalone (WebView is also standalone).
* CRX wins over PWA. Web and PWA on the same origin keep different slices.
*/
var detectSettingsHost = () => {
	if (isCwspNativeHost()) return "capacitor";
	if (isCrxHost()) return "crx";
	if (isPwaStandalone()) return "pwa";
	return "web";
};
//#endregion
//#region ../../modules/projects/subsystem/src/other/config/open-policy.ts
/**
* What to do with a file or payload, per surface / channel / kind.
* INVARIANT: `ask` keeps the current SKU / content-type router.
* Explorer: Web uses `channels`/`kinds`/`placement`. Capacitor uses `nativeOpen`/`nativeKinds` only.
* Host slices live in `openPolicyByHost` (`settings-host.ts`).
*/
var OPEN_KINDS = [
	"markdown",
	"text",
	"document",
	"image",
	"url",
	"other"
];
var OPEN_SINKS = [
	"ask",
	"display",
	"viewer",
	"document",
	"explorer",
	"workcenter",
	"transfer",
	"wallpaper",
	"external",
	"system"
];
var OPEN_CHANNELS = [
	"open",
	"dblclick",
	"share-target",
	"launch-queue",
	"snip",
	"capacitor"
];
var OPEN_SURFACES = [
	"viewer",
	"explorer",
	"shell",
	"crx",
	"process",
	"transfer"
];
/** How Explorer presents markdown/images in the browser (not Capacitor). */
var OPEN_PLACEMENTS = [
	"inline",
	"native-window",
	"new-tab"
];
new Set(OPEN_KINDS);
var SINK_SET = new Set(OPEN_SINKS);
new Set(OPEN_CHANNELS);
new Set(OPEN_SURFACES);
var DEFAULT_OPEN_POLICY = {
	viewer: {
		channels: {
			open: "display",
			"share-target": "display",
			"launch-queue": "display",
			capacitor: "display"
		},
		kinds: {
			markdown: "display",
			text: "display",
			document: "display",
			image: "display",
			url: "display",
			other: "display"
		}
	},
	explorer: {
		channels: {
			open: "viewer",
			dblclick: "viewer",
			"share-target": "viewer",
			"launch-queue": "viewer",
			capacitor: "document"
		},
		placement: "inline",
		kinds: {
			markdown: "ask",
			text: "ask",
			document: "ask",
			image: "ask",
			url: "ask",
			other: "ask"
		},
		nativeOpen: "document",
		nativeKinds: {
			markdown: "ask",
			text: "ask",
			document: "ask",
			image: "ask",
			url: "ask",
			other: "ask"
		}
	},
	shell: {
		channels: {
			open: "ask",
			"share-target": "ask",
			"launch-queue": "ask",
			capacitor: "ask"
		},
		kinds: {
			markdown: "ask",
			text: "ask",
			document: "ask",
			image: "wallpaper",
			url: "ask",
			other: "ask"
		}
	},
	crx: {
		channels: {
			open: "ask",
			snip: "workcenter",
			"share-target": "ask"
		},
		kinds: {
			markdown: "viewer",
			text: "viewer",
			document: "viewer",
			image: "workcenter",
			url: "workcenter",
			other: "workcenter"
		}
	},
	process: {
		channels: {
			open: "workcenter",
			"share-target": "workcenter",
			"launch-queue": "workcenter",
			capacitor: "workcenter"
		},
		kinds: {
			markdown: "workcenter",
			text: "workcenter",
			document: "workcenter",
			image: "workcenter",
			url: "workcenter",
			other: "workcenter"
		}
	},
	transfer: {
		channels: {
			open: "ask",
			"share-target": "ask",
			"launch-queue": "ask",
			capacitor: "ask"
		},
		kinds: {
			markdown: "ask",
			text: "ask",
			document: "ask",
			image: "ask",
			url: "ask",
			other: "ask"
		}
	}
};
var cachedPolicy = DEFAULT_OPEN_POLICY;
var normalizeOpenSink = (raw, fallback = "ask") => {
	const v = String(raw || "").trim().toLowerCase();
	if (!v) return fallback;
	if (v === "markdown" || v === "in-shell" || v === "in-app") return "viewer";
	if (v === "document" || v === "cwsp-document" || v === "md") return "document";
	if (v === "process" || v === "cwsp-process") return "workcenter";
	if (v === "transfer" || v === "cwsp" || v === "cwsp-transfer" || v === "network") return "transfer";
	if (v === "wallpaper" || v === "обои" || v === "backdrop" || v === "desktop") return "wallpaper";
	if (v === "android" || v === "chooser" || v === "open-with") return "system";
	if (v === "browser" || v === "new-tab" || v === "tab") return "external";
	return SINK_SET.has(v) ? v : fallback;
};
var normalizeOpenPlacement = (raw, fallback = "inline") => {
	const v = String(raw || "").trim().toLowerCase();
	if (!v) return fallback;
	if (v === "in-shell" || v === "env" || v === "shell" || v === "iframe") return "inline";
	if (v === "native" || v === "popup" || v === "app-window" || v === "detached" || v === "separate") return "native-window";
	if (v === "tab" || v === "browser" || v === "as-is" || v === "browser-tab") return "new-tab";
	return OPEN_PLACEMENTS.includes(v) ? v : fallback;
};
var normalizeKinds = (raw) => {
	const out = {};
	if (!raw || typeof raw !== "object") return out;
	for (const key of OPEN_KINDS) {
		const sink = raw[key];
		if (sink == null || sink === "") continue;
		out[key] = normalizeOpenSink(sink);
	}
	return out;
};
var normalizeChannels = (raw) => {
	const out = {};
	if (!raw || typeof raw !== "object") return out;
	for (const key of OPEN_CHANNELS) {
		const sink = raw[key];
		if (sink == null || sink === "") continue;
		out[key] = normalizeOpenSink(sink);
	}
	return out;
};
var mergeOpenPolicy = (...parts) => {
	const out = {};
	for (const surface of OPEN_SURFACES) {
		const base = DEFAULT_OPEN_POLICY[surface] || {};
		let channels = { ...base.channels || {} };
		let kinds = { ...base.kinds || {} };
		let placement = normalizeOpenPlacement(base.placement, "inline");
		let nativeOpen = normalizeOpenSink(base.nativeOpen, surface === "explorer" ? "document" : "ask");
		let nativeKinds = { ...base.nativeKinds || {} };
		let nativeOpenSaved = false;
		for (const part of parts) {
			const src = part?.[surface];
			if (!src) continue;
			channels = {
				...channels,
				...normalizeChannels(src.channels)
			};
			kinds = {
				...kinds,
				...normalizeKinds(src.kinds)
			};
			if (src.placement != null && src.placement !== "") placement = normalizeOpenPlacement(src.placement, placement);
			if (src.nativeOpen != null && src.nativeOpen !== "") {
				nativeOpenSaved = true;
				nativeOpen = normalizeOpenSink(src.nativeOpen, nativeOpen);
			}
			if (src.nativeKinds) nativeKinds = {
				...nativeKinds,
				...normalizeKinds(src.nativeKinds)
			};
		}
		if (!nativeOpenSaved && surface === "explorer") {
			const legacy = channels.open;
			if (legacy === "system" || legacy === "transfer" || legacy === "workcenter") nativeOpen = legacy;
		}
		out[surface] = surface === "explorer" ? {
			channels,
			kinds,
			placement,
			nativeOpen,
			nativeKinds
		} : {
			channels,
			kinds,
			placement
		};
	}
	return out;
};
var mergeOpenPolicyByHost = (...parts) => {
	const out = {};
	for (const host of SETTINGS_HOSTS) {
		const slices = parts.map((part) => part?.[host]).filter((p) => Boolean(p));
		if (slices.length) out[host] = mergeOpenPolicy(...slices);
	}
	return out;
};
/** Host slice wins over a leftover flat `openPolicy` so Capacitor cannot clobber Web. */
var resolveHostOpenPolicy = (settings) => {
	const host = detectSettingsHost();
	return mergeOpenPolicy(settings?.openPolicy, settings?.openPolicyByHost?.[host]);
};
var rememberOpenPolicyFromSettings = (settings) => {
	cachedPolicy = resolveHostOpenPolicy(settings);
	return cachedPolicy;
};
//#endregion
//#region ../../modules/projects/subsystem/src/other/config/SettingsTypes.ts
var defaultSpeechLanguage = () => {
	const fallback = "en-US";
	if (typeof navigator === "undefined") return fallback;
	const normalized = (navigator.language || "").trim();
	if (normalized === "ru" || normalized.startsWith("ru-")) return "ru";
	if (normalized === "en-GB") return "en-GB";
	if (normalized === "en-US") return "en-US";
	if (normalized === "en" || normalized.startsWith("en-")) return "en";
	return fallback;
};
var DEFAULT_SETTINGS = {
	core: {
		mode: "native",
		endpointUrl: "https://localhost:8434",
		userId: "",
		ecosystemToken: "",
		userKey: "",
		encrypt: false,
		preferBackendSync: true,
		ntpEnabled: true,
		appClientId: "",
		useCoreIdentityForAirPad: true,
		allowInsecureTls: false,
		network: {
			listenPortHttps: 8434,
			listenPortHttp: 8080,
			bridgeEnabled: true,
			reconnectMs: 3e3,
			destinations: []
		},
		socket: {
			protocol: "auto",
			routeTarget: "",
			selfId: "",
			accessToken: "",
			clientAccessToken: "",
			allowAccessTokenWithoutUserKey: false,
			transportMode: "plaintext",
			transportSecret: "",
			signingSecret: "",
			connectionType: "",
			archetype: "",
			protocolLanesJson: ""
		},
		interop: {
			ipcProtocol: "uniform",
			platformInterop: true,
			preferNativeIpc: true,
			preferNativeWebsocket: true
		},
		admin: {
			httpsOrigin: "https://localhost:8434",
			httpOrigin: "https://localhost:8080",
			path: "/"
		},
		ops: {
			allowUnencrypted: false,
			directUrl: "",
			httpTargets: [],
			wsTargets: [],
			syncTargets: []
		}
	},
	shell: {
		localHubUrl: "",
		preferNativeWebsocket: true,
		maintainHubSocketConnection: false,
		enableRemoteClipboardBridge: true,
		applyRemoteClipboardToDevice: true,
		pushLocalClipboardToLan: false,
		clipboardPushIntervalMs: 2e3,
		clipboardBroadcastTargets: "",
		enableNativeSms: false,
		enableNativeContacts: true,
		acceptInboundClipboardData: true,
		clipboardInboundAllowIds: "",
		clipboardShareDestinationIds: "",
		accessTokenBypassesClipboardAllowlist: false,
		acceptContactsBridgeData: false,
		acceptSmsBridgeData: false,
		autoStartOnBoot: true,
		bridgeDaemonEnabled: true,
		allowControlApi: false,
		clipboardOutboundMode: "ask",
		clipboardInboundMode: "ask",
		clipboardOutboundShowErase: true,
		clipboardInboundShowUndo: true,
		clipboardPromptDismissMs: 1e4,
		filesShareDestinationIds: "",
		filesAllowShareToAll: false,
		filesOpenForShareMode: "auto",
		filesInboundMode: "ask",
		filesByteTransport: "auto",
		filesLandingMode: "app",
		filesIncomingDir: "",
		filesAskDirEveryTime: true,
		filesStagingRoot: "app",
		acceptInboundFilesData: true
	},
	ai: {
		apiKey: "",
		baseUrl: "",
		model: "gpt-5.2",
		customModel: "",
		defaultReasoningEffort: "medium",
		defaultVerbosity: "medium",
		maxOutputTokens: 4e5,
		contextTruncation: "disabled",
		promptCacheRetention: "in-memory",
		maxToolCalls: 8,
		parallelToolCalls: true,
		mcp: [],
		shareTargetMode: "recognize",
		autoProcessShared: true,
		customInstructions: [],
		activeInstructionId: "",
		responseLanguage: "auto",
		translateResults: false,
		generateSvgGraphics: false,
		requestTimeout: {
			low: 60,
			medium: 300,
			high: 900
		},
		maxRetries: 2
	},
	webdav: {
		url: "https://localhost:8434",
		username: "",
		password: "",
		token: ""
	},
	timeline: { source: "" },
	appearance: {
		theme: "auto",
		fontSize: "medium",
		color: "",
		colorSource: "auto",
		markdown: {
			customCss: "",
			printCss: "",
			extensions: [],
			preset: "default",
			fontFamily: "system",
			fontSizePx: 16,
			lineHeight: 1.7,
			contentMaxWidthPx: 860,
			printScale: 1,
			page: {
				size: "auto",
				orientation: "portrait",
				marginMm: 12
			},
			modules: {
				typography: true,
				lists: true,
				tables: true,
				codeBlocks: true,
				blockquotes: true,
				media: true,
				printBreaks: true
			},
			plugins: {
				smartTypography: false,
				softBreaksAsBr: false,
				externalLinksNewTab: true
			}
		}
	},
	speech: { language: defaultSpeechLanguage() },
	grid: {
		columns: 4,
		rows: 8,
		shape: "squircle",
		defaultAction: "open-link",
		defaultOpenLinkTarget: "inline",
		iconScale: "fill"
	},
	openPolicy: DEFAULT_OPEN_POLICY,
	openPolicyByHost: {},
	appMenu: {
		sortBy: "name",
		sortDir: "asc"
	},
	explorer: {
		sortBy: "name",
		sortDir: "asc",
		foldersFirst: true
	}
};
/** Resolve the single shared ecosystem token from any legacy field. */
var resolveEcosystemToken = (settings) => {
	const core = settings?.core;
	if (!core) return "";
	const eco = String(core.ecosystemToken || "").trim();
	if (eco) return eco;
	const userKey = String(core.userKey || "").trim();
	if (userKey) return userKey;
	return String(core.socket?.accessToken || core.socket?.airpadAuthToken || "").trim();
};
/**
* Mirror ecosystem token onto userKey + socket.accessToken for wire/compat.
* INVARIANT: after this, ecosystemToken === userKey === accessToken (when non-empty).
*/
var normalizeEcosystemToken = (settings) => {
	if (!settings.core) settings.core = {};
	const token = resolveEcosystemToken(settings);
	settings.core.ecosystemToken = token;
	settings.core.userKey = token;
	settings.core.socket = {
		...settings.core.socket || {},
		accessToken: token
	};
	return token;
};
//#endregion
//#region ../../modules/projects/subsystem/src/routing/native/cws-bridge.ts
var CwsBridgeWeb = class extends WebPlugin {
	async getShellInfo() {
		return {
			shell: "browser",
			bridge: "cws-bridge",
			native: false,
			platform: typeof globalThis.navigator !== "undefined" ? "web" : "unknown"
		};
	}
	async invoke(options) {
		const envelope = normalizeBridgeEnvelope(options.channel, options.payload, options.envelope);
		return {
			ok: true,
			channel: options.channel,
			echo: { ...options.payload ?? {} },
			envelope
		};
	}
};
/**
* WHY: CRX bundles `@capacitor/core` with a first `registerPlugin("CwsBridge")`, then
* Settings dynamic-imports this module and would register again → console warn.
* INVARIANT: one Capacitor plugin proxy per JS realm.
*/
var registerCwsBridgeOnce = () => {
	const g = globalThis;
	if (g.__CWS_BRIDGE_PLUGIN__) return g.__CWS_BRIDGE_PLUGIN__;
	const existing = g.Capacitor?.Plugins?.CwsBridge;
	if (existing) {
		g.__CWS_BRIDGE_PLUGIN__ = existing;
		return existing;
	}
	const plugin = registerPlugin("CwsBridge", { web: () => new CwsBridgeWeb() });
	g.__CWS_BRIDGE_PLUGIN__ = plugin;
	return plugin;
};
var CwsBridge = registerCwsBridgeOnce();
var bridgeInitDone = false;
var normalizeBridgeEnvelope = (channel, payload, envelope) => {
	if (envelope && isProtocolEnvelope(envelope)) return normalizeProtocolEnvelope(envelope);
	const interop = createInteropEnvelope$1({
		purpose: "invoke",
		protocol: "service",
		transport: "service-worker",
		type: "invoke",
		op: "invoke",
		source: "webview",
		destination: "native",
		srcChannel: "webview",
		dstChannel: "native",
		payload: payload ?? {},
		data: payload ?? {}
	});
	return createProtocolEnvelope({
		...interop,
		path: ["cws-bridge", channel]
	});
};
var normalizeInvokeResultEnvelope = (channel, payload, result) => {
	if (result?.envelope && isProtocolEnvelope(result.envelope)) return normalizeProtocolEnvelope(result.envelope);
	const interop = createInteropEnvelope$1({
		purpose: "invoke",
		protocol: "service",
		transport: "service-worker",
		type: result.ok ? "response" : "ack",
		op: "invoke",
		source: "native",
		destination: "webview",
		srcChannel: "native",
		dstChannel: "webview",
		payload,
		data: payload
	});
	return createProtocolEnvelope({
		...interop,
		path: ["cws-bridge", channel]
	});
};
/**
* Initialize the native bridge surface and normalize inbound native messages.
*
* AI-READ: this is the TypeScript side of the WebView/native boundary, so it
* is one of the first places to inspect when networking works natively but not
* through the web shell or vice versa.
*/
/** Live `getShellInfo` — first init can cache the web stub before the Capacitor plugin is ready. */
async function fetchCwsShellInfo(options) {
	const existing = typeof globalThis.window !== "undefined" ? globalThis.window.__CWS_SHELL_INFO__ ?? null : null;
	if (!options?.force && existing?.accentColor) return existing;
	try {
		const info = await CwsBridge.getShellInfo();
		if (info && typeof globalThis.window !== "undefined") globalThis.window.__CWS_SHELL_INFO__ = {
			...existing || {},
			...info
		};
		return info ?? existing;
	} catch {
		return existing;
	}
}
async function initCwsNativeBridge() {
	if (bridgeInitDone) {
		const cached = typeof globalThis.window !== "undefined" ? globalThis.window.__CWS_SHELL_INFO__ ?? null : null;
		if (cached?.accentColor || cached?.native) return cached;
		return fetchCwsShellInfo({ force: true });
	}
	bridgeInitDone = true;
	const electronInfoFn = globalThis.window?.electronBridge?.getShellInfo;
	if (typeof electronInfoFn === "function") try {
		const info = await electronInfoFn();
		if (typeof globalThis.window !== "undefined") globalThis.window.__CWS_SHELL_INFO__ = info;
		return info;
	} catch {}
	try {
		const info = await CwsBridge.getShellInfo();
		if (typeof globalThis.window !== "undefined") globalThis.window.__CWS_SHELL_INFO__ = info;
		try {
			await CwsBridge.addListener("nativeMessage", (event) => {
				const payload = event && typeof event.payload === "object" && event.payload != null ? event.payload : {};
				const envelopeRaw = payload?.envelope;
				const envelope = envelopeRaw && typeof envelopeRaw === "object" && isProtocolEnvelope(envelopeRaw) ? normalizeProtocolEnvelope(envelopeRaw) : createProtocolEnvelope(createInteropEnvelope$1({
					purpose: "mail",
					protocol: "service",
					transport: "service-worker",
					type: "act",
					op: "deliver",
					source: "native",
					destination: "webview",
					srcChannel: "native",
					dstChannel: "webview",
					payload,
					data: payload
				}));
				globalThis.dispatchEvent(new CustomEvent("cws-native-message", { detail: {
					event,
					envelope,
					payload
				} }));
			});
		} catch {}
		return info;
	} catch {
		return null;
	}
}
/** Detect the Capacitor/CWSAndroid shell where native networking may replace browser transport rules. */
var isCapacitorCwsNativeShell = () => {
	try {
		const c = globalThis.Capacitor;
		return typeof c?.isNativePlatform === "function" && Boolean(c.isNativePlatform());
	} catch {
		return false;
	}
};
/** Detect the Electron shell, which uses its own invoke bridge instead of Capacitor plugins. */
var isElectronCwsNativeShell = () => {
	try {
		return Boolean(globalThis.window?.electronBridge?.invoke);
	} catch {
		return false;
	}
};
/** Report whether frontend code can rely on native IPC instead of web-only fallbacks. */
var isCwsNativeIpcAvailable = () => {
	if (isElectronCwsNativeShell()) return true;
	if (isCapacitorCwsNativeShell()) return true;
	try {
		const shell = globalThis.window?.__CWS_SHELL_INFO__;
		return Boolean(shell?.native);
	} catch {
		return false;
	}
};
/**
* Canonical IPC invoker for frontend modules:
* - Uses CWSAndroid native bridge envelope transport when available
* - Falls back to web plugin-compatible invoke otherwise
*/
async function invokeCwsPlatformIPC(input) {
	const channel = (input.channel || "").trim() || (Array.isArray(input.envelope?.path) && input.envelope?.path.length ? String(input.envelope.path[input.envelope.path.length - 1] || "").trim() : "") || "default";
	const payload = input.payload && typeof input.payload === "object" ? input.payload : {};
	const envelope = normalizeBridgeEnvelope(channel, payload, input.envelope);
	const electronInvoke = globalThis.window?.electronBridge?.invoke;
	if (typeof electronInvoke === "function") {
		const result = await electronInvoke({
			channel,
			payload,
			envelope
		});
		return {
			...result,
			envelope: normalizeInvokeResultEnvelope(channel, payload, result)
		};
	}
	if (!isCwsNativeIpcAvailable()) {
		const result = await CwsBridge.invoke({
			channel,
			payload,
			envelope
		});
		return {
			...result,
			envelope: normalizeInvokeResultEnvelope(channel, payload, result)
		};
	}
	try {
		const result = await CwsBridge.invoke({
			channel,
			payload,
			envelope
		});
		return {
			...result,
			envelope: normalizeInvokeResultEnvelope(channel, payload, result)
		};
	} catch (error) {
		console.warn("[cws-bridge] native invoke failed:", error);
		if (isCapacitorCwsNativeShell()) return {
			ok: false,
			channel,
			echo: {
				...payload ?? {},
				error: String(error instanceof Error ? error.message : error)
			},
			envelope: normalizeInvokeResultEnvelope(channel, payload, {
				ok: false,
				channel,
				echo: payload ?? {}
			})
		};
		const result = await new CwsBridgeWeb().invoke({
			channel,
			payload,
			envelope
		});
		return {
			...result,
			envelope: normalizeInvokeResultEnvelope(channel, payload, result)
		};
	}
}
async function getNativeUnifiedSettings() {
	try {
		const result = await invokeCwsPlatformIPC({ channel: "settings:get" });
		if (!result?.ok) return null;
		return result.appSettings && typeof result.appSettings === "object" ? result.appSettings : null;
	} catch {
		return null;
	}
}
async function patchNativeUnifiedSettingsDetailed(appSettings) {
	try {
		const airpadJson = stringifyCwspRemoteConnectionV1(appSettingsToRemoteConnectionV1(appSettings));
		const shellPatch = appSettingsShellToNativeExtras(appSettings);
		try {
			globalThis.localStorage?.setItem?.(AIRPAD_REMOTE_CONFIG_STORAGE_KEY, airpadJson);
		} catch {}
		try {
			const ch = new BroadcastChannel(CWSP_REMOTE_CONFIG_SYNC_CHANNEL);
			ch.postMessage({
				airpadJson,
				shellPatch
			});
			ch.close();
		} catch {}
		const result = await withTimeout(invokeCwsPlatformIPC({
			channel: "settings:patch",
			payload: {
				appSettings,
				airpadJson,
				shellPatch
			}
		}), 6e3, "settings:patch timed out").catch((error) => ({
			ok: false,
			channel: "settings:patch",
			echo: { error: String(error instanceof Error ? error.message : error) }
		}));
		const echo = result?.echo;
		if (!(result?.ok === true || result?.ok !== false && !echo?.error && result?.channel === "settings:patch")) return {
			ok: false,
			error: String(echo?.error ?? "settings:patch rejected")
		};
		return { ok: true };
	} catch (e) {
		return {
			ok: false,
			error: String(e instanceof Error ? e.message : e)
		};
	}
}
//#endregion
//#region ../../modules/projects/subsystem/src/other/config/Settings.ts
var SETTINGS_KEY = "rs-settings";
/** localStorage mirror for Capacitor WebView when IndexedDB is flaky or empty. */
var SETTINGS_LS_MIRROR_KEY = "rs-settings.v1";
var lastSettingsSaveReport = { nativeSynced: null };
var trimSetting = (v) => typeof v === "string" ? v.trim() : "";
/** Factory defaults — not treated as user-configured Client-ID on Capacitor. */
var CAPACITOR_FACTORY_SELF_IDS = /* @__PURE__ */ new Set([
	"L-196",
	"L-208",
	"L-210"
]);
var isCapacitorFactorySelfId = (id) => {
	if (!id) return true;
	const shortId = sanitizeFleetSelfWireNodeId(id) || id;
	return CAPACITOR_FACTORY_SELF_IDS.has(shortId);
};
/** Home fleet Client-ID — accepts short {@code L-196} via normalize → {@code L-192.168.0.196}. */
var isHomeFleetClientId = (id) => Boolean(id) && isAssociableFleetWireNodeId(normalizeWireNodeIdForWire(id));
/** Persist short home-fleet Client-ID ({@code L-196}); never expand to full LAN form. */
var normalizePersistedClientId = (raw) => sanitizeFleetSelfWireNodeId(raw) || String(raw ?? "").trim();
var isCapacitorNativeShell$1 = () => {
	try {
		const c = globalThis.Capacitor;
		return typeof c?.isNativePlatform === "function" && Boolean(c.isNativePlatform());
	} catch {
		return false;
	}
};
/** Desk Neutralino / endpoint peer — must be in Android clipboard destinations for Win images. */
var CAPACITOR_DESK_PEER_ID = "L-110";
var isDeskPeerId = (id) => {
	return (sanitizeFleetSelfWireNodeId(id) || id.trim()) === CAPACITOR_DESK_PEER_ID;
};
var splitClipboardDestIds = (raw) => {
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const part of raw.split(/[,;\s\n\r]+/)) {
		const id = part.trim();
		if (!id || seen.has(id)) continue;
		seen.add(id);
		out.push(id);
	}
	return out;
};
var joinClipboardDestIds = (ids) => ids.filter(Boolean).join(";");
/**
* Prepend L-110 when missing. Leaves `*` alone (wildcard already covers desk).
* WHY: legacy Capacitor prefs were phone-only (L-196;L-210;L-208) → Android↔Android only.
*/
var ensureDeskPeerInDestCsv = (raw) => {
	const t = String(raw || "").trim();
	if (!t || t === "*") return {
		value: t || "*",
		changed: false
	};
	const ids = splitClipboardDestIds(t);
	if (ids.some(isDeskPeerId)) return {
		value: joinClipboardDestIds(ids),
		changed: false
	};
	return {
		value: joinClipboardDestIds([CAPACITOR_DESK_PEER_ID, ...ids]),
		changed: true
	};
};
/** Patch Capacitor settings so routeTarget + share destinations include desk L-110. */
var ensureCapacitorDeskClipboardTargets = (settings) => {
	if (!isCapacitorNativeShell$1()) return null;
	const route = trimSetting(settings.core?.socket?.routeTarget);
	const share = trimSetting(settings.shell?.clipboardShareDestinationIds);
	const fallback = "L-196;L-210";
	const r = ensureDeskPeerInDestCsv(route || fallback);
	const s = ensureDeskPeerInDestCsv(share || route || fallback);
	if (!r.changed && !s.changed) return null;
	return {
		...settings,
		core: {
			...settings.core,
			socket: {
				...settings.core?.socket || {},
				routeTarget: r.value
			}
		},
		shell: {
			...settings.shell,
			clipboardShareDestinationIds: s.value
		}
	};
};
var CAPACITOR_CLIPBOARD_ASK_MIGRATED_KEY = "cwsp.clipboardAskHeadsMigratedV1";
/**
* WHY: older Capacitor IDB defaults used shell.clipboard*Mode=auto — Accept never posts.
* One-shot upgrade to ask (user can switch back in Settings).
*/
var ensureCapacitorClipboardAskModes = (settings) => {
	if (!isCapacitorNativeShell$1()) return null;
	try {
		if (globalThis.localStorage?.getItem?.(CAPACITOR_CLIPBOARD_ASK_MIGRATED_KEY) === "1") return null;
	} catch {}
	const inbound = String(settings.shell?.clipboardInboundMode || "auto").trim().toLowerCase();
	const outbound = String(settings.shell?.clipboardOutboundMode || "auto").trim().toLowerCase();
	const needIn = inbound !== "ask";
	const needOut = outbound !== "ask";
	try {
		globalThis.localStorage?.setItem?.(CAPACITOR_CLIPBOARD_ASK_MIGRATED_KEY, "1");
	} catch {}
	if (!needIn && !needOut) return null;
	return {
		...settings,
		shell: {
			...settings.shell,
			...needIn ? { clipboardInboundMode: "ask" } : null,
			...needOut ? { clipboardOutboundMode: "ask" } : null
		}
	};
};
/** Compose Capacitor shell migrations (desk peers + ask modes). */
var applyCapacitorShellMigrations = (settings) => {
	let next = null;
	const desk = ensureCapacitorDeskClipboardTargets(settings);
	if (desk) next = desk;
	const ask = ensureCapacitorClipboardAskModes(next || settings);
	if (ask) next = ask;
	return next;
};
/** Neutralino / WebNative / /cwsp Control bridge shares `/service/config`. */
var isWebnativeSurface = () => {
	try {
		const g = globalThis;
		const auth = g.__WEBNATIVE_AUTH__ || g.__NEUTRALINO_AUTH__;
		return Boolean(g.__CWS_WEBNATIVE_BOOT__ || g.__CWS_NEUTRALINO_BOOT__ || g.__CWSP_CONTROL_BRIDGE_LIVE__ || auth && typeof auth.port === "number");
	} catch {
		return false;
	}
};
var readDesktopControlAuth$1 = () => {
	try {
		const g = globalThis;
		const src = g.__CWSP_CONTROL_SOURCE__;
		const via = String(g.__CWSP_CONTROL_VIA__ || "");
		if (via === "android" && src && typeof src.port === "number" && src.host) return {
			port: src.port,
			key: String(src.apiKey || src.userKey || ""),
			host: String(src.host).trim(),
			scheme: src.scheme === "https" ? "https" : "http"
		};
		if (via === "neutralino" || g.__NEUTRALINO_AUTH__) {
			const n = g.__NEUTRALINO_AUTH__ || g.__WEBNATIVE_AUTH__;
			if (n && typeof n.port === "number") return {
				port: n.port || 29110,
				key: String(n.key || "cwsp-neutralino-local"),
				host: String(n.host || "127.0.0.1"),
				scheme: n.scheme === "https" ? "https" : "http"
			};
		}
		const auth = g.__WEBNATIVE_AUTH__ || g.__NEUTRALINO_AUTH__;
		if (auth && typeof auth.port === "number") return {
			port: auth.port,
			key: String(auth.key || src?.apiKey || src?.userKey || ""),
			host: String(auth.host || src?.host || "127.0.0.1").trim() || "127.0.0.1",
			scheme: auth.scheme === "https" || src?.scheme === "https" ? "https" : "http"
		};
		if (src && typeof src.port === "number" && src.host) return {
			port: src.port,
			key: String(src.apiKey || src.userKey || ""),
			host: String(src.host).trim() || "127.0.0.1",
			scheme: src.scheme === "https" ? "https" : "http"
		};
		return null;
	} catch {
		return null;
	}
};
var readControlBridgeVia = () => {
	try {
		return String(globalThis.__CWSP_CONTROL_VIA__ || "");
	} catch {
		return "";
	}
};
/** https://cwsp.u2re.space Control SPA — settings:patch arm owns device SoT (not saveSettings Node push). */
var isPublicCwspControlSpa = () => {
	try {
		if (String(globalThis.document?.documentElement?.dataset?.cwspSurface || "").toLowerCase() === "cwsp-control") return true;
		return /^(www\.)?cwsp\.u2re\.space$/i.test(String(location?.hostname || ""));
	} catch {
		return false;
	}
};
var isChromeExtensionPage = () => {
	try {
		return String(location?.protocol || "").toLowerCase() === "chrome-extension:";
	} catch {
		return false;
	}
};
var readControlSessionToken = () => {
	try {
		const fromGlobal = String(globalThis.__CWSP_CONTROL_SESSION__ || "").trim();
		if (fromGlobal) return fromGlobal;
	} catch {}
	try {
		const raw = sessionStorage.getItem("cwsp-control-session-v1");
		if (!raw) return "";
		const parsed = JSON.parse(raw);
		if (!parsed?.token) return "";
		if (Number(parsed.expiresAt) && Date.now() >= Number(parsed.expiresAt)) return "";
		try {
			if (parsed.origin && parsed.origin !== String(location.origin || "")) return "";
		} catch {}
		return String(parsed.token).trim();
	} catch {
		return "";
	}
};
/** CRX persistent session lives in chrome.storage.local (not sessionStorage). */
var readCrxControlSessionTokenAsync = async () => {
	if (!isChromeExtensionPage()) return "";
	try {
		return await (await __vitePreload(() => import("../chunks/crx-control-session2.js"), __vite__mapDeps([56,1,2]), import.meta.url)).getCrxControlSessionToken() || "";
	} catch {
		return "";
	}
};
var webnativeControl = async (path, init) => {
	try {
		const auth = readDesktopControlAuth$1();
		if (!auth || typeof auth.port !== "number") return null;
		const host = String(auth.host || "127.0.0.1").trim() || "127.0.0.1";
		const scheme = auth.scheme === "https" ? "https" : "http";
		const pageHost = String(location.hostname || "").toLowerCase();
		const pageIsPublicHttps = location.protocol === "https:" && pageHost !== "127.0.0.1" && pageHost !== "localhost" && pageHost !== "::1";
		const viaAndroid = readControlBridgeVia() === "android";
		if (pageIsPublicHttps && !viaAndroid && (host === "127.0.0.1" || host === "localhost" || host === "::1") && auth.port === 8434) return null;
		const headers = new Headers(init?.headers);
		headers.set("Content-Type", "application/json");
		const pageIsChromeExtension = isChromeExtensionPage();
		let session = readControlSessionToken();
		if (!session && pageIsChromeExtension) {
			session = await readCrxControlSessionTokenAsync();
			if (session) try {
				globalThis.__CWSP_CONTROL_SESSION__ = session;
			} catch {}
		}
		if (pageIsPublicHttps || pageIsChromeExtension) {
			if (!session) {
				const method = String(init?.method || "GET").toUpperCase();
				if (pageIsChromeExtension && method !== "GET" && method !== "HEAD") try {
					globalThis.dispatchEvent(new CustomEvent("cwsp-control-unauthorized", { detail: {
						status: 401,
						path,
						reason: "missing-session"
					} }));
				} catch {}
				return null;
			}
			headers.set("X-Control-Session", session);
			headers.delete("X-API-Key");
			headers.delete("X-Skip-Legacy-Key");
			if (pageIsChromeExtension) try {
				const id = String(globalThis.chrome?.runtime?.id || "").trim();
				if (id) headers.set("X-Control-Origin", `chrome-extension://${id}`);
			} catch {}
		} else {
			if (session) headers.set("X-Control-Session", session);
			if (auth.key) headers.set("X-API-Key", auth.key);
		}
		const signal = init?.signal ?? (typeof AbortSignal !== "undefined" && typeof AbortSignal.timeout === "function" ? AbortSignal.timeout(2500) : void 0);
		const url = `${scheme}://${host.includes(":") && !host.startsWith("[") ? `[${host}]` : host}:${auth.port}${path.startsWith("/") ? path : `/${path}`}`;
		const isLoopback = host === "127.0.0.1" || host === "localhost" || host === "::1";
		const isPrivate = /^10\./.test(host) || /^192\.168\./.test(host) || /^172\.(1[6-9]|2\d|3[0-1])\./.test(host);
		const fetchInit = {
			...init,
			headers,
			cache: "no-store",
			signal,
			mode: "cors",
			credentials: "omit"
		};
		if (isLoopback) fetchInit.targetAddressSpace = "loopback";
		else if (isPrivate) fetchInit.targetAddressSpace = "local";
		const res = await fetch(url, fetchInit);
		if ((res.status === 401 || res.status === 403) && (pageIsPublicHttps || pageIsChromeExtension)) try {
			sessionStorage.removeItem("cwsp-control-session-v1");
			delete globalThis.__CWSP_CONTROL_SESSION__;
			const g = globalThis;
			g.__CWSP_CONTROL_BRIDGE_LIVE__ = false;
			g.__CWS_NODE_CLIPBOARD_HUB__ = false;
			if (pageIsChromeExtension) __vitePreload(() => import("../chunks/crx-control-session2.js").then((m) => m.clearCrxControlSession()), __vite__mapDeps([56,1,2]), import.meta.url).catch(() => void 0);
			globalThis.dispatchEvent(new CustomEvent("cwsp-control-unauthorized", { detail: {
				status: res.status,
				path
			} }));
		} catch {}
		if (!res.ok) return null;
		return await res.json();
	} catch {
		return null;
	}
};
/**
* Map a resolved CWSP config snapshot (`readServerV2ConfigSnapshot` shape from the backend's
* GET /service/config) onto the AppSettings.core fields the Settings/Network views render. The
* snapshot's `bridge` section carries the canonical endpoint URL + identity + TLS decision.
*/
var mapWebnativeSnapshotToCore = (snap) => {
	if (!snap || typeof snap !== "object") return null;
	const bridge = snap.bridge || {};
	const shell = snap.shell || {};
	const coreIn = snap.core && typeof snap.core === "object" ? snap.core : {};
	const listenPort = Number(snap.listenPort) || Number(snap.publicHttpPort) || 8434;
	const endpointUrlRaw = String(coreIn.endpointUrl || bridge.endpointUrl || shell.remoteHost || "").trim();
	const endpointsList = Array.isArray(bridge.endpoints) ? bridge.endpoints.map((e) => String(e || "").trim()).filter(Boolean) : [];
	const endpointUrl = endpointUrlRaw || endpointsList[0] || "";
	const userId = String(coreIn.userId || bridge.userId || bridge.deviceId || "").trim();
	const userKey = String(coreIn.ecosystemToken || coreIn.userKey || bridge.userKey || shell.accessToken || shell.clientToken || "").trim();
	const allowInsecureTls = bridge.allowInsecureTls !== void 0 ? Boolean(bridge.allowInsecureTls) : coreIn.allowInsecureTls !== void 0 ? Boolean(coreIn.allowInsecureTls) : void 0;
	if (!endpointUrl && !userId && !userKey) return null;
	const overlay = {};
	if (endpointUrl) overlay.endpointUrl = endpointUrl;
	else if (!endpointUrl && !userId) overlay.endpointUrl = `https://127.0.0.1:${listenPort}`;
	if (userId) overlay.userId = userId;
	if (userKey) {
		overlay.userKey = userKey;
		overlay.ecosystemToken = userKey;
		overlay.socket = { accessToken: userKey };
	}
	if (allowInsecureTls !== void 0) overlay.allowInsecureTls = allowInsecureTls;
	overlay.preferBackendSync = (coreIn.preferBackendSync ?? true) !== false;
	return overlay;
};
/** Shell keys owned by Node portable.config — backend wins when present. */
var mapWebnativeBundleToShell = (bundle) => {
	const shell = bundle?.settings?.shell || bundle?.portable?.shell || bundle?.snapshot?.shell;
	if (!shell || typeof shell !== "object") return null;
	return { ...shell };
};
var webnativeBundleCache = null;
var webnativeSnapshotFetchedAt = 0;
var loadWebnativeControlBundle = async () => {
	if (Date.now() - webnativeSnapshotFetchedAt < 2e3 && webnativeBundleCache) return webnativeBundleCache;
	const bundle = await webnativeControl("/service/config");
	webnativeBundleCache = bundle || null;
	bundle?.snapshot || bundle?.settings || bundle?.portable;
	webnativeSnapshotFetchedAt = Date.now();
	return webnativeBundleCache;
};
/** Best-effort push of a settings save into `portable.config.json` via the backend control RPC. */
var pushWebnativeSettingsPatch = async (settings) => {
	if (!isWebnativeSurface()) return false;
	try {
		const pageHost = String(location.hostname || "").toLowerCase();
		if (location.protocol === "https:" && pageHost !== "127.0.0.1" && pageHost !== "localhost" && pageHost !== "::1" && !readControlSessionToken()) {
			console.warn("[Settings] Control session missing — pair before saving to device");
			return false;
		}
	} catch {}
	const core = settings.core;
	if (!core) return false;
	const token = String(core.ecosystemToken || core.userKey || core.socket?.accessToken || "").trim();
	const remoteHost = String(core.endpointUrl || "").trim();
	const clientId = String(core.userId || "").trim();
	const shell = settings.shell || {};
	const patch = {
		bridge: {
			endpointUrl: remoteHost,
			userId: clientId,
			userKey: token,
			allowInsecureTls: Boolean(core.allowInsecureTls)
		},
		shell: {
			remoteHost,
			accessToken: token,
			clientToken: token,
			clipboardBroadcastTargets: String(shell.clipboardBroadcastTargets || core.socket?.routeTarget || "L-196;L-210").trim(),
			clipboardOutboundMode: String(shell.clipboardOutboundMode || "ask").trim().toLowerCase() === "ask" ? "ask" : "auto",
			clipboardInboundMode: String(shell.clipboardInboundMode || "ask").trim().toLowerCase() === "ask" ? "ask" : "auto",
			clipboardOutboundShowErase: shell.clipboardOutboundShowErase !== false,
			clipboardInboundShowUndo: shell.clipboardInboundShowUndo !== false,
			clipboardPromptDismissMs: (() => {
				const n = Number(shell.clipboardPromptDismissMs);
				return Number.isFinite(n) && n >= 1e3 ? Math.floor(n) : 1e4;
			})(),
			filesShareDestinationIds: String(shell.filesShareDestinationIds || "").trim(),
			filesAllowShareToAll: Boolean(shell.filesAllowShareToAll),
			filesOpenForShareMode: String(shell.filesOpenForShareMode || "auto").trim().toLowerCase() === "manual" ? "manual" : "auto",
			filesInboundMode: String(shell.filesInboundMode || "ask").trim().toLowerCase() === "auto" ? "auto" : "ask",
			filesCopyOnReceive: shell.filesCopyOnReceive !== false,
			filesByteTransport: (() => {
				const v = String(shell.filesByteTransport || "auto").trim().toLowerCase();
				return v === "http" || v === "ws" ? v : "auto";
			})(),
			filesLandingMode: (() => {
				const v = String(shell.filesLandingMode || "app").trim().toLowerCase();
				return v === "downloads" || v === "saf" ? v : "app";
			})(),
			filesIncomingDir: String(shell.filesIncomingDir || "").trim(),
			filesAskDirEveryTime: shell.filesAskDirEveryTime !== false,
			filesStagingRoot: (() => {
				const v = String(shell.filesStagingRoot || "app").trim().toLowerCase();
				return v === "cache" || v === "external" ? v : "app";
			})(),
			acceptInboundFilesData: shell.acceptInboundFilesData !== false
		},
		launcherEnv: {
			CWS_ASSOCIATED_ID: clientId,
			CWS_ASSOCIATED_TOKEN: token
		}
	};
	if (core.ops?.directUrl) patch.bridge.endpoints = [String(core.ops.directUrl).trim()];
	const authForPatch = readDesktopControlAuth$1();
	const isCapacitorControl = readControlBridgeVia() === "android" || Number(authForPatch?.port) === 8434;
	let body = patch;
	if (isCapacitorControl) {
		const coreIn = { ...settings.core || {} };
		delete coreIn.userKey;
		delete coreIn.ecosystemToken;
		if (coreIn.socket && typeof coreIn.socket === "object") {
			const sock = { ...coreIn.socket };
			delete sock.accessToken;
			delete sock.airpadAuthToken;
			delete sock.clientAccessToken;
			coreIn.socket = sock;
		}
		const shellIn = {
			...patch.shell,
			...settings.shell || {}
		};
		delete shellIn.accessToken;
		delete shellIn.clientToken;
		const bridgeIn = { ...patch.bridge };
		delete bridgeIn.userKey;
		body = {
			...patch,
			bridge: bridgeIn,
			core: coreIn,
			shell: shellIn,
			cwsp: settings.cwsp
		};
	}
	const r = await webnativeControl("/service/config", {
		method: "POST",
		body: JSON.stringify(body)
	});
	try {
		const auth = readDesktopControlAuth$1();
		const hubPort = Number(auth?.port) || 0;
		const hubHost = String(auth?.host || "127.0.0.1");
		if (hubPort === 29110 && (hubHost === "127.0.0.1" || hubHost === "localhost" || hubHost === "::1")) {
			const hubBody = {};
			if (remoteHost) hubBody.remoteHost = remoteHost;
			if (token) {
				hubBody.accessToken = token;
				hubBody.clientToken = token;
			}
			if (clientId) hubBody.clientId = clientId;
			if (Object.keys(hubBody).length) await webnativeControl("/service/clipboard-hub", {
				method: "POST",
				body: JSON.stringify(hubBody)
			});
		}
	} catch {}
	webnativeSnapshotFetchedAt = 0;
	webnativeBundleCache = null;
	return Boolean(r?.ok === true || isCapacitorControl && r && (r.settings || r.portable));
};
/** First-boot CWSP defaults for CWSAndroid when IDB still has dev/empty endpoint fields. */
var CAPACITOR_CWSP_BOOTSTRAP = {
	core: {
		endpointUrl: "https://192.168.0.200:8434",
		ecosystemToken: "n3v3rm1nd",
		userKey: "n3v3rm1nd",
		allowInsecureTls: true,
		useCoreIdentityForAirPad: true,
		ops: { directUrl: "https://192.168.0.110:8434" },
		socket: {
			routeTarget: "L-110;L-196;L-210",
			accessToken: "n3v3rm1nd",
			allowAccessTokenWithoutUserKey: true,
			protocol: "auto"
		},
		interop: { preferNativeWebsocket: true }
	},
	shell: {
		bridgeDaemonEnabled: true,
		allowControlApi: false,
		autoStartOnBoot: true,
		enableRemoteClipboardBridge: true,
		acceptInboundClipboardData: true,
		applyRemoteClipboardToDevice: true,
		maintainHubSocketConnection: false,
		clipboardShareDestinationIds: "L-110;L-196;L-210",
		clipboardInboundMode: "ask",
		clipboardOutboundMode: "ask"
	}
};
var needsCapacitorCwspBootstrap = (settings) => {
	if (!isCapacitorNativeShell$1()) return false;
	const ep = trimSetting(settings.core?.endpointUrl);
	const uid = trimSetting(settings.core?.userId);
	const access = trimSetting(settings.core?.ecosystemToken) || trimSetting(settings.core?.socket?.accessToken) || trimSetting(settings.core?.userKey);
	const defaultEp = trimSetting(DEFAULT_SETTINGS.core?.endpointUrl);
	if (!uid || !access) return true;
	if (!ep || ep === defaultEp || /localhost|127\.0\.0\.1|:8434/i.test(ep)) return true;
	return false;
};
/** Seed mobile CWSP settings + sync to Java prefs on first Capacitor boot. */
var capacitorCwspSeedDone = false;
var ensureCapacitorCwspSettingsSeeded = async () => {
	if (!isCapacitorNativeShell$1()) return null;
	if (capacitorCwspSeedDone) return null;
	let nativeUserId = "";
	try {
		if (isCwsNativeIpcAvailable()) {
			const core = (await getNativeUnifiedSettings())?.core;
			nativeUserId = trimSetting(core && typeof core === "object" && core !== null && "userId" in core ? core.userId : "");
		}
	} catch {}
	const current = await loadSettings({ nativeOverlay: false });
	const currentUserId = trimSetting(current.core?.userId);
	const needsBootstrap = needsCapacitorCwspBootstrap(current);
	const identityDrift = Boolean(nativeUserId) && Boolean(currentUserId) && nativeUserId !== currentUserId && isCapacitorFactorySelfId(currentUserId) && isHomeFleetClientId(nativeUserId);
	const idbUserConfigured = Boolean(currentUserId) && isHomeFleetClientId(currentUserId);
	const nativeDriftsFromIdb = Boolean(nativeUserId) && Boolean(currentUserId) && nativeUserId !== currentUserId;
	const nativeIsGuestLanId = Boolean(nativeUserId) && !isHomeFleetClientId(nativeUserId);
	if (!needsBootstrap && nativeDriftsFromIdb && (idbUserConfigured || nativeIsGuestLanId)) {
		capacitorCwspSeedDone = true;
		console.log("[Settings] pushing WebView client id to native prefs");
		return saveSettings(applyCapacitorShellMigrations(current) || current);
	}
	if (!needsBootstrap && !identityDrift) {
		capacitorCwspSeedDone = true;
		const migrated = applyCapacitorShellMigrations(current);
		if (migrated) {
			console.log("[Settings] Capacitor shell migrations (desk peers / ask modes)");
			return saveSettings(migrated);
		}
		return null;
	}
	if (identityDrift && !needsBootstrap) {
		capacitorCwspSeedDone = true;
		const aligned = {
			...current,
			core: {
				...current.core,
				userId: nativeUserId,
				socket: {
					...current.core?.socket || {},
					selfId: nativeUserId
				}
			}
		};
		console.log("[Settings] aligning Capacitor client id with native prefs");
		return saveSettings(applyCapacitorShellMigrations(aligned) || aligned);
	}
	const merged = {
		...current,
		core: {
			...CAPACITOR_CWSP_BOOTSTRAP.core,
			...current.core,
			userId: (isHomeFleetClientId(nativeUserId) ? nativeUserId : "") || (isHomeFleetClientId(currentUserId) ? currentUserId : "") || trimSetting(CAPACITOR_CWSP_BOOTSTRAP.core?.userId) || "",
			ops: {
				...CAPACITOR_CWSP_BOOTSTRAP.core?.ops || {},
				...current.core?.ops || {}
			},
			socket: {
				...CAPACITOR_CWSP_BOOTSTRAP.core?.socket || {},
				...current.core?.socket || {},
				selfId: (isHomeFleetClientId(nativeUserId) ? nativeUserId : "") || (isHomeFleetClientId(trimSetting(current.core?.socket?.selfId)) ? trimSetting(current.core?.socket?.selfId) : "") || ""
			},
			interop: {
				...CAPACITOR_CWSP_BOOTSTRAP.core?.interop || {},
				...current.core?.interop || {}
			}
		},
		shell: {
			...CAPACITOR_CWSP_BOOTSTRAP.shell || {},
			...current.shell || {}
		}
	};
	console.log("[Settings] seeding Capacitor CWSP defaults");
	capacitorCwspSeedDone = true;
	return saveSettings(applyCapacitorShellMigrations(merged) || merged);
};
var isCrxExtensionRuntime = () => {
	try {
		const id = globalThis.chrome?.runtime?.id;
		return typeof id === "string" && id.length > 0;
	} catch {
		return false;
	}
};
var readLocalStorageSettingsMirror = () => {
	try {
		const raw = globalThis.localStorage?.getItem?.(SETTINGS_LS_MIRROR_KEY);
		if (!raw) return null;
		return JSON.parse(raw);
	} catch {
		return null;
	}
};
var writeLocalStorageSettingsMirror = (value) => {
	try {
		globalThis.localStorage?.setItem?.(SETTINGS_LS_MIRROR_KEY, JSON.stringify(value));
		return true;
	} catch {
		return false;
	}
};
/** Control SPA hosts that must never win as Relay / gateway in Capacitor Settings. */
var isControlSpaRelayUrl = (url) => {
	const raw = String(url || "").trim().toLowerCase();
	if (!raw) return false;
	try {
		const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
		const host = new URL(withScheme).hostname.toLowerCase();
		return host === "cwsp.u2re.space" || host === "www.cwsp.u2re.space" || host === "transfer.u2re.space" || host === "www.transfer.u2re.space" || host === "md.u2re.space" || host === "www.md.u2re.space";
	} catch {
		return /cwsp\.u2re\.space|transfer\.u2re\.space|md\.u2re\.space/i.test(raw);
	}
};
/**
* Capacitor-only: overlay native Relay when IDB is empty/loopback/Control-SPA-poisoned.
* WHY: full native overlay was disabled so IDB stays SoT — but Relay must track Java Configure.
*/
var mergeCapacitorNativeRelayOverlay = (base, native) => {
	if (!native || typeof native !== "object") return base;
	const nativeEp = trimSetting(native.core?.endpointUrl);
	if (!nativeEp || isControlSpaRelayUrl(nativeEp)) return base;
	const localEp = trimSetting(base.core?.endpointUrl);
	const localBad = !localEp || isControlSpaRelayUrl(localEp) || /^(https?:\/\/)?(127\.0\.0\.1|localhost)(:\d+)?\/?$/i.test(localEp);
	if (!localBad && localEp === nativeEp) return base;
	if (!localBad) return base;
	return {
		...base,
		core: {
			...base.core,
			endpointUrl: nativeEp
		}
	};
};
/** Only apply native fields that carry a non-empty value — empty bridge rows must not wipe IDB. */
var mergeNativeSettingsOverlay = (base, native) => {
	if (!native || typeof native !== "object") return base;
	const patch = {};
	const corePatch = {};
	let touched = false;
	const ep = trimSetting(native.core?.endpointUrl);
	if (ep) {
		corePatch.endpointUrl = ep;
		touched = true;
	}
	const userId = trimSetting(native.core?.userId);
	if (userId && isHomeFleetClientId(userId)) {
		const baseUserId = trimSetting(base.core?.userId);
		if (isCapacitorFactorySelfId(baseUserId) || !isHomeFleetClientId(baseUserId)) {
			corePatch.userId = userId;
			touched = true;
		}
	}
	const userKey = trimSetting(native.core?.userKey);
	if (userKey) {
		corePatch.userKey = userKey;
		touched = true;
	}
	const appClientId = trimSetting(native.core?.appClientId);
	if (appClientId) {
		corePatch.appClientId = appClientId;
		touched = true;
	}
	const socketPatch = {};
	let socketTouched = false;
	const routeTarget = trimSetting(native.core?.socket?.routeTarget);
	if (routeTarget) {
		socketPatch.routeTarget = routeTarget;
		socketTouched = true;
	}
	const accessToken = trimSetting(native.core?.socket?.accessToken);
	if (accessToken) {
		socketPatch.accessToken = accessToken;
		socketTouched = true;
	}
	const clientAccessToken = trimSetting(native.core?.socket?.clientAccessToken);
	if (clientAccessToken) {
		socketPatch.clientAccessToken = clientAccessToken;
		socketTouched = true;
	}
	const nativeSelfId = trimSetting(native.core?.socket?.selfId);
	if (nativeSelfId && isHomeFleetClientId(nativeSelfId)) {
		const baseSelfId = trimSetting(base.core?.socket?.selfId) || trimSetting(base.core?.userId);
		if (isCapacitorFactorySelfId(baseSelfId) || !isHomeFleetClientId(baseSelfId)) {
			socketPatch.selfId = nativeSelfId;
			socketTouched = true;
		}
	}
	if (socketTouched) {
		corePatch.socket = socketPatch;
		touched = true;
	}
	const shellPatch = {};
	let shellTouched = false;
	const shareDest = trimSetting(native.shell?.clipboardShareDestinationIds);
	if (shareDest) {
		shellPatch.clipboardShareDestinationIds = shareDest;
		shellTouched = true;
	}
	const inboundAllow = trimSetting(native.shell?.clipboardInboundAllowIds);
	if (inboundAllow) {
		shellPatch.clipboardInboundAllowIds = inboundAllow;
		shellTouched = true;
	}
	if (shellTouched) {
		patch.shell = shellPatch;
		touched = true;
	}
	if (!touched) return base;
	patch.core = corePatch;
	return mergeAppSettingsShape(base, patch);
};
var DB_NAME = "req-store";
var STORE = "settings";
var mergeAppSettingsShape = (base, patch) => {
	if (!patch || typeof patch !== "object") return base;
	return {
		...base,
		...patch,
		core: {
			...base.core || {},
			...patch.core || {},
			network: {
				...base.core?.network || {},
				...patch.core?.network || {}
			},
			socket: {
				...base.core?.socket || {},
				...patch.core?.socket || {}
			},
			interop: {
				...base.core?.interop || {},
				...patch.core?.interop || {}
			},
			ops: {
				...base.core?.ops || {},
				...patch.core?.ops || {}
			},
			admin: {
				...base.core?.admin || {},
				...patch.core?.admin || {}
			}
		},
		ai: {
			...base.ai || {},
			...patch.ai || {},
			mcp: patch.ai?.mcp ?? base.ai?.mcp ?? [],
			customInstructions: patch.ai?.customInstructions ?? base.ai?.customInstructions ?? [],
			activeInstructionId: patch.ai?.activeInstructionId ?? base.ai?.activeInstructionId ?? ""
		},
		webdav: {
			...base.webdav || {},
			...patch.webdav || {}
		},
		timeline: {
			...base.timeline || {},
			...patch.timeline || {}
		},
		appearance: {
			...base.appearance || {},
			...patch.appearance || {},
			markdown: {
				...base.appearance?.markdown || {},
				...patch.appearance?.markdown || {},
				page: {
					...base.appearance?.markdown?.page || {},
					...patch.appearance?.markdown?.page || {}
				},
				modules: {
					...base.appearance?.markdown?.modules || {},
					...patch.appearance?.markdown?.modules || {}
				},
				plugins: {
					...base.appearance?.markdown?.plugins || {},
					...patch.appearance?.markdown?.plugins || {}
				}
			}
		},
		speech: {
			...base.speech || {},
			...patch.speech || {}
		},
		grid: {
			...base.grid || {},
			...patch.grid || {}
		},
		shell: {
			...base.shell || {},
			...patch.shell || {}
		},
		openPolicyByHost: mergeOpenPolicyByHost(base.openPolicyByHost, patch.openPolicyByHost),
		openPolicy: resolveHostOpenPolicy({
			openPolicy: mergeOpenPolicy(base.openPolicy, patch.openPolicy),
			openPolicyByHost: mergeOpenPolicyByHost(base.openPolicyByHost, patch.openPolicyByHost)
		})
	};
};
var getWebDavCreateClient = async () => {
	return null;
};
var isContentScriptContext = () => {
	try {
		if (typeof chrome === "undefined" || !chrome?.runtime) return false;
		if (typeof window !== "undefined" && globalThis?.location?.protocol?.startsWith("http")) return true;
		return false;
	} catch {
		return false;
	}
};
var hasChromeStorage = () => typeof chrome !== "undefined" && chrome?.storage?.local;
async function idbOpen() {
	if (typeof indexedDB === "undefined") throw new Error("IndexedDB not available");
	if (isContentScriptContext()) throw new Error("IndexedDB not accessible in content script context");
	return new Promise((res, rej) => {
		try {
			const req = indexedDB.open(DB_NAME, 1);
			req.onupgradeneeded = () => req.result.createObjectStore(STORE, { keyPath: "key" });
			req.onsuccess = () => res(req.result);
			req.onerror = () => rej(req.error);
		} catch (e) {
			rej(e);
		}
	});
}
var idbGetSettings = async (key = SETTINGS_KEY) => {
	try {
		if (isCapacitorNativeShell$1() && typeof indexedDB !== "undefined") {
			try {
				const db = await idbOpen();
				const idbValue = await new Promise((res, rej) => {
					const req = db.transaction(STORE, "readonly").objectStore(STORE).get(key);
					req.onsuccess = () => {
						res(req.result?.value);
						db.close();
					};
					req.onerror = () => {
						rej(req.error);
						db.close();
					};
				});
				if (idbValue != null) return idbValue;
			} catch (e) {
				console.warn("[Settings] Capacitor IndexedDB read failed, trying mirror:", e);
			}
			const mirror = readLocalStorageSettingsMirror();
			if (mirror != null) return mirror;
		}
		if (hasChromeStorage()) {
			console.log("[Settings] Using chrome.storage.local for get");
			const chromeValue = await new Promise((res) => {
				try {
					chrome.storage.local.get([key], (result) => {
						if (chrome.runtime.lastError) {
							console.warn("[Settings] chrome.storage.local.get error:", chrome.runtime.lastError);
							res(null);
						} else {
							console.log("[Settings] chrome.storage.local.get success, has data:", !!result[key]);
							res(result[key]);
						}
					});
				} catch (e) {
					console.warn("[Settings] chrome.storage access failed:", e);
					res(null);
				}
			});
			if (chromeValue != null) return chromeValue;
		}
		if (typeof indexedDB !== "undefined") {
			console.log("[Settings] Using IndexedDB for get");
			const db = await idbOpen();
			const idbValue = await new Promise((res, rej) => {
				const req = db.transaction(STORE, "readonly").objectStore(STORE).get(key);
				req.onsuccess = () => {
					console.log("[Settings] IndexedDB get success, has data:", !!req.result?.value);
					res(req.result?.value);
					db.close();
				};
				req.onerror = () => {
					console.warn("[Settings] IndexedDB get error:", req.error);
					rej(req.error);
					db.close();
				};
			});
			if (idbValue != null) return idbValue;
		} else console.warn("[Settings] IndexedDB not available");
	} catch (e) {
		console.warn("[Settings] Settings storage access failed:", e);
	}
	const mirror = readLocalStorageSettingsMirror();
	if (mirror != null) {
		console.log("[Settings] Using localStorage mirror fallback for get");
		return mirror;
	}
	return null;
};
var idbPutSettings = async (value, key = SETTINGS_KEY) => {
	let idbOk = false;
	let lsOk = false;
	if (hasChromeStorage()) {
		await new Promise((res, rej) => {
			try {
				chrome.storage.local.set({ [key]: value }, () => {
					if (chrome.runtime.lastError) rej(chrome.runtime.lastError);
					else res();
				});
			} catch (e) {
				rej(e);
			}
		});
		return;
	}
	lsOk = writeLocalStorageSettingsMirror(value);
	try {
		if (typeof indexedDB === "undefined") {
			if (!lsOk && isCapacitorNativeShell$1()) throw new Error("Settings storage unavailable (no IndexedDB or localStorage)");
			return;
		}
		const db = await idbOpen();
		await new Promise((res, rej) => {
			const tx = db.transaction(STORE, "readwrite");
			tx.objectStore(STORE).put({
				key,
				value
			});
			tx.oncomplete = () => {
				idbOk = true;
				res();
				db.close();
			};
			tx.onerror = () => {
				rej(tx.error);
				db.close();
			};
		});
	} catch (e) {
		console.warn("[Settings] IndexedDB write failed:", e);
		if (!lsOk && isCapacitorNativeShell$1()) throw new Error("Settings could not be saved (IndexedDB and localStorage failed)");
	}
	if (!idbOk && lsOk) console.log("[Settings] persisted to localStorage mirror (IndexedDB skipped or failed)");
};
/** Normalize `core.endpointUrl` for equality checks (scheme + host + port, lowercase).
* Multi-hub lists stay multi-hub (`;`-joined); never parse the whole list as one URL.
*/
var normalizeCoreEndpointOrigin = (raw) => {
	const t = (raw || "").trim();
	if (!t) return "";
	return (migrateLegacyCwspPublicPort(t) || t).toLowerCase();
};
/** Rewrite legacy `:8443` URLs and listenPort in persisted settings after fleet port migration. */
var applyLegacyCwspPortMigration = (settings) => {
	const core = settings.core;
	if (!core) return settings;
	const migrateList = (items) => items?.map((entry) => migrateLegacyCwspPublicPort(entry));
	const migrateTargets = (items) => items?.map((entry) => ({
		...entry,
		url: migrateLegacyCwspPublicPort(entry.url ?? "")
	}));
	const listenPortHttps = core.network?.listenPortHttps === 8443 || core.network?.listenPortHttps === 8343 ? 8434 : core.network?.listenPortHttps;
	return {
		...settings,
		core: {
			...core,
			endpointUrl: migrateLegacyCwspPublicPort(core.endpointUrl ?? ""),
			ops: core.ops ? {
				...core.ops,
				directUrl: migrateLegacyCwspPublicPort(core.ops.directUrl ?? ""),
				httpTargets: migrateTargets(core.ops.httpTargets),
				wsTargets: migrateTargets(core.ops.wsTargets),
				syncTargets: migrateTargets(core.ops.syncTargets)
			} : core.ops,
			admin: core.admin ? {
				...core.admin,
				httpsOrigin: migrateLegacyCwspPublicPort(core.admin.httpsOrigin ?? "")
			} : core.admin,
			network: core.network ? {
				...core.network,
				listenPortHttps,
				destinations: migrateList(core.network.destinations)
			} : core.network
		}
	};
};
/**
* True when persisted settings explicitly contain `shell.maintainHubSocketConnection`
* (Shell section was saved with that field — distinct from merge-time defaults).
*/
var didPersistShellMaintainHubSocket = async () => {
	try {
		const raw = await idbGetSettings();
		const stored = typeof raw === "string" ? JSOX.parse(raw) : raw;
		if (!stored || typeof stored !== "object") return false;
		const shell = stored.shell;
		return typeof shell === "object" && shell !== null && Object.prototype.hasOwnProperty.call(shell, "maintainHubSocketConnection");
	} catch {
		return false;
	}
};
/**
* MV3 Chrome extension: skip hub WebSocket bootstrap only when hub-maintain is off and
* the endpoint is still the unused bundled default. When CRX seeds {@code maintainHubSocketConnection}
* (localhost Neutralino hub or WAN), connect immediately.
*/
var shouldDeferCrxHubSocketBootstrap = async (settings) => {
	if (!isCrxExtensionRuntime()) return false;
	if (settings.shell?.maintainHubSocketConnection === true) return false;
	if (await didPersistShellMaintainHubSocket()) return false;
	const defaultEp = normalizeCoreEndpointOrigin(DEFAULT_SETTINGS.core?.endpointUrl || "");
	const currentEp = normalizeCoreEndpointOrigin(settings.core?.endpointUrl || "");
	return Boolean(defaultEp) && currentEp === defaultEp;
};
var loadSettings = async (opts) => {
	try {
		let raw = await idbGetSettings();
		if (raw == null) raw = readLocalStorageSettingsMirror();
		const stored = typeof raw === "string" ? JSOX.parse(raw) : raw;
		console.log("[Settings] loadSettings - raw type:", typeof raw, "stored type:", typeof stored);
		if (stored && typeof stored === "object") {
			let result = {
				core: {
					...DEFAULT_SETTINGS.core,
					...stored?.core,
					network: {
						...DEFAULT_SETTINGS.core?.network || {},
						...stored?.core?.network || {}
					},
					socket: {
						...DEFAULT_SETTINGS.core?.socket || {},
						...stored?.core?.socket || {}
					},
					interop: {
						...DEFAULT_SETTINGS.core?.interop || {},
						...stored?.core?.interop || {}
					},
					ops: {
						...DEFAULT_SETTINGS.core?.ops || {},
						...stored?.core?.ops || {}
					},
					admin: {
						...DEFAULT_SETTINGS.core?.admin || {},
						...stored?.core?.admin || {}
					}
				},
				ai: {
					...DEFAULT_SETTINGS.ai,
					...stored?.ai,
					mcp: stored?.ai?.mcp || [],
					customInstructions: stored?.ai?.customInstructions || [],
					activeInstructionId: stored?.ai?.activeInstructionId || ""
				},
				webdav: {
					...DEFAULT_SETTINGS.webdav,
					...stored?.webdav
				},
				timeline: {
					...DEFAULT_SETTINGS.timeline,
					...stored?.timeline
				},
				appearance: {
					...DEFAULT_SETTINGS.appearance,
					...stored?.appearance,
					markdown: {
						...DEFAULT_SETTINGS.appearance?.markdown || {},
						...stored?.appearance?.markdown || {},
						page: {
							...DEFAULT_SETTINGS.appearance?.markdown?.page || {},
							...stored?.appearance?.markdown?.page || {}
						},
						modules: {
							...DEFAULT_SETTINGS.appearance?.markdown?.modules || {},
							...stored?.appearance?.markdown?.modules || {}
						},
						plugins: {
							...DEFAULT_SETTINGS.appearance?.markdown?.plugins || {},
							...stored?.appearance?.markdown?.plugins || {}
						}
					}
				},
				speech: {
					...DEFAULT_SETTINGS.speech,
					...stored?.speech
				},
				grid: {
					...DEFAULT_SETTINGS.grid,
					...stored?.grid
				},
				shell: {
					...DEFAULT_SETTINGS.shell || {},
					...stored?.shell || {}
				},
				appMenu: {
					...DEFAULT_SETTINGS.appMenu,
					...stored?.appMenu
				},
				explorer: {
					...DEFAULT_SETTINGS.explorer,
					...stored?.explorer
				},
				openPolicyByHost: mergeOpenPolicyByHost(stored?.openPolicyByHost),
				openPolicy: resolveHostOpenPolicy({
					openPolicy: stored?.openPolicy,
					openPolicyByHost: stored?.openPolicyByHost
				})
			};
			try {
				if (opts?.nativeOverlay !== false && isCwsNativeIpcAvailable()) {
					const nativeSettings = await getNativeUnifiedSettings();
					if (nativeSettings && typeof nativeSettings === "object") {
						if (isCapacitorNativeShell$1()) result = mergeCapacitorNativeRelayOverlay(result, nativeSettings);
						else result = mergeNativeSettingsOverlay(result, nativeSettings);
					}
				}
			} catch {}
			try {
				if (isWebnativeSurface()) {
					if ((result.core?.preferBackendSync ?? true) !== false) {
						const bundle = await loadWebnativeControlBundle();
						const coreOverlay = mapWebnativeSnapshotToCore({
							...bundle?.snapshot || bundle?.settings || bundle?.portable || {},
							...bundle?.settings || {},
							...bundle?.portable || {}
						});
						const shellOverlay = mapWebnativeBundleToShell(bundle);
						if (coreOverlay || shellOverlay) result = {
							...result || { core: {} },
							core: coreOverlay ? {
								...result.core || {},
								...coreOverlay,
								socket: {
									...result.core?.socket || {},
									...coreOverlay.socket || {}
								},
								ops: { ...result.core?.ops || {} },
								admin: { ...result.core?.admin || {} },
								network: { ...result.core?.network || {} },
								interop: { ...result.core?.interop || {} }
							} : result.core,
							shell: shellOverlay ? {
								...result.shell || {},
								...shellOverlay
							} : result.shell
						};
					}
				}
			} catch {}
			console.log("[Settings] loadSettings result:", {
				hasApiKey: !!result.ai?.apiKey,
				instructionCount: result.ai?.customInstructions?.length || 0,
				activeInstructionId: result.ai?.activeInstructionId || "(none)"
			});
			const migrated = applyLegacyCwspPortMigration(result);
			rememberOpenPolicyFromSettings(migrated);
			return migrated;
		}
		console.log("[Settings] loadSettings - no stored data, returning defaults");
	} catch (e) {
		console.warn("[Settings] loadSettings error:", e);
	}
	const fallback = JSOX.parse(JSOX.stringify(DEFAULT_SETTINGS));
	rememberOpenPolicyFromSettings(fallback);
	return fallback;
};
var saveSettings = async (settings) => {
	const current = await loadSettings({ nativeOverlay: false });
	const getMcp = () => {
		if (settings.ai?.mcp !== void 0) return settings.ai.mcp;
		if (current.ai?.mcp !== void 0) return current.ai.mcp;
		return [];
	};
	const getCustomInstructions = () => {
		if (settings.ai?.customInstructions !== void 0) return settings.ai.customInstructions;
		if (current.ai?.customInstructions !== void 0) return current.ai.customInstructions;
		return [];
	};
	const getActiveInstructionId = () => {
		if (Object.prototype.hasOwnProperty.call(settings.ai || {}, "activeInstructionId")) return settings.ai?.activeInstructionId ?? "";
		if (current.ai?.activeInstructionId !== void 0) return current.ai.activeInstructionId;
		return "";
	};
	const merged = {
		core: {
			...DEFAULT_SETTINGS.core || {},
			...current.core || {},
			...settings.core || {},
			network: {
				...DEFAULT_SETTINGS.core?.network || {},
				...current.core?.network || {},
				...settings.core?.network || {}
			},
			socket: {
				...DEFAULT_SETTINGS.core?.socket || {},
				...current.core?.socket || {},
				...settings.core?.socket || {}
			},
			interop: {
				...DEFAULT_SETTINGS.core?.interop || {},
				...current.core?.interop || {},
				...settings.core?.interop || {}
			},
			ops: {
				...DEFAULT_SETTINGS.core?.ops || {},
				...current.core?.ops || {},
				...settings.core?.ops || {}
			},
			admin: {
				...DEFAULT_SETTINGS.core?.admin || {},
				...current.core?.admin || {},
				...settings.core?.admin || {}
			}
		},
		ai: {
			...DEFAULT_SETTINGS.ai || {},
			...current.ai || {},
			...settings.ai || {},
			mcp: getMcp(),
			customInstructions: getCustomInstructions(),
			activeInstructionId: getActiveInstructionId()
		},
		webdav: {
			...DEFAULT_SETTINGS.webdav || {},
			...current.webdav || {},
			...settings.webdav || {}
		},
		timeline: {
			...DEFAULT_SETTINGS.timeline || {},
			...current.timeline || {},
			...settings.timeline || {}
		},
		appearance: {
			...DEFAULT_SETTINGS.appearance || {},
			...current.appearance || {},
			...settings.appearance || {},
			markdown: {
				...DEFAULT_SETTINGS.appearance?.markdown || {},
				...current.appearance?.markdown || {},
				...settings.appearance?.markdown || {},
				page: {
					...DEFAULT_SETTINGS.appearance?.markdown?.page || {},
					...current.appearance?.markdown?.page || {},
					...settings.appearance?.markdown?.page || {}
				},
				modules: {
					...DEFAULT_SETTINGS.appearance?.markdown?.modules || {},
					...current.appearance?.markdown?.modules || {},
					...settings.appearance?.markdown?.modules || {}
				},
				plugins: {
					...DEFAULT_SETTINGS.appearance?.markdown?.plugins || {},
					...current.appearance?.markdown?.plugins || {},
					...settings.appearance?.markdown?.plugins || {}
				}
			}
		},
		speech: {
			...DEFAULT_SETTINGS.speech || {},
			...current.speech || {},
			...settings.speech || {}
		},
		grid: {
			...DEFAULT_SETTINGS.grid || {},
			...current.grid || {},
			...settings.grid || {}
		},
		shell: {
			...DEFAULT_SETTINGS.shell || {},
			...current.shell || {},
			...settings.shell || {}
		},
		appMenu: {
			...DEFAULT_SETTINGS.appMenu || {},
			...current.appMenu || {},
			...settings.appMenu || {}
		},
		explorer: {
			...DEFAULT_SETTINGS.explorer || {},
			...current.explorer || {},
			...settings.explorer || {}
		},
		openPolicyByHost: (() => {
			const host = detectSettingsHost();
			const next = mergeOpenPolicy(DEFAULT_SETTINGS.openPolicy, current.openPolicy, settings.openPolicy);
			return mergeOpenPolicyByHost(current.openPolicyByHost, settings.openPolicyByHost, { [host]: next });
		})(),
		openPolicy: resolveHostOpenPolicy({
			openPolicy: mergeOpenPolicy(DEFAULT_SETTINGS.openPolicy, current.openPolicy, settings.openPolicy),
			openPolicyByHost: mergeOpenPolicyByHost(current.openPolicyByHost, settings.openPolicyByHost, { [detectSettingsHost()]: mergeOpenPolicy(DEFAULT_SETTINGS.openPolicy, current.openPolicy, settings.openPolicy) })
		})
	};
	if (merged.core) {
		const canonicalUserId = normalizePersistedClientId(merged.core.userId);
		if (canonicalUserId) merged.core.userId = canonicalUserId;
		normalizeEcosystemToken(merged);
		if (merged.core.socket) {
			const selfRaw = String(merged.core.socket.selfId || "").trim();
			if (selfRaw) {
				const canonicalSelf = normalizePersistedClientId(selfRaw);
				merged.core.socket.selfId = canonicalSelf && canonicalSelf === (merged.core.userId || "") ? canonicalSelf : "";
			} else merged.core.socket.selfId = "";
		}
	}
	rememberOpenPolicyFromSettings(merged);
	await idbPutSettings(merged);
	lastSettingsSaveReport = { nativeSynced: null };
	try {
		if (isCwsNativeIpcAvailable()) {
			await initCwsNativeBridge().catch(() => null);
			const patch = await patchNativeUnifiedSettingsDetailed(merged);
			lastSettingsSaveReport = {
				nativeSynced: patch.ok,
				nativeError: patch.error
			};
			if (!patch.ok) console.warn("[Settings] native settings patch did not confirm ok:", patch.error);
		}
	} catch (e) {
		lastSettingsSaveReport = {
			nativeSynced: false,
			nativeError: String(e instanceof Error ? e.message : e)
		};
		console.warn("[Settings] native settings patch failed:", e);
	}
	if (isWebnativeSurface() && !isCapacitorNativeShell$1() && !isPublicCwspControlSpa()) try {
		const ok = await pushWebnativeSettingsPatch(merged);
		const via = readControlBridgeVia();
		lastSettingsSaveReport = {
			...lastSettingsSaveReport,
			webnativeSynced: ok,
			webnativeError: ok ? void 0 : via === "android" ? "phone Control unreachable (Allow Control API + Pair + Accept)" : "desk Control RPC unavailable"
		};
		if (!ok) console.warn("[Settings] Control config patch not confirmed");
	} catch (e) {
		lastSettingsSaveReport = {
			...lastSettingsSaveReport,
			webnativeSynced: false,
			webnativeError: String(e instanceof Error ? e.message : e)
		};
		console.warn("[Settings] Control config patch failed:", e);
	}
	try {
		applyAirpadRuntimeFromAppSettings(merged);
		syncAirpadRemoteConfigFromAppSettings(merged, { persist: true });
	} catch (e) {
		console.warn("[Settings] AirPad runtime sync failed:", e);
	}
	updateWebDavSettings(merged)?.catch?.(console.warn.bind(console));
	return merged;
};
var joinPath = (base, name, addTrailingSlash = false) => {
	const b = (base || "/").replace(/\/+$/g, "") || "/";
	const n = (name || "").replace(/^\/+/g, "");
	let out = b === "/" ? `/${n}` : `${b}/${n}`;
	if (addTrailingSlash) out = out.replace(/\/?$/g, "/");
	return out.replace(/\/{2,}/g, "/");
};
var isDirHandle = (h) => h?.kind === "directory";
var safeTime = (v) => {
	const t = new Date(v).getTime();
	return Number.isFinite(t) ? t : 0;
};
/** Lazy `fest/lure` — keeps content scripts / lightweight callers from pulling lure + UI CSS. */
var lureFsPromise = null;
var isServiceWorkerScope = () => {
	try {
		return typeof globalThis.ServiceWorkerGlobalScope !== "undefined" && typeof globalThis.clients !== "undefined" && typeof globalThis.document === "undefined";
	} catch {
		return false;
	}
};
var loadLureFs = () => {
	if (isServiceWorkerScope()) return Promise.reject(/* @__PURE__ */ new Error("@fest-lib/lure FS unavailable in ServiceWorkerGlobalScope"));
	if (!lureFsPromise) lureFsPromise = __vitePreload(() => import("../com/app.js").then((n) => n.Dt).then((m) => ({
		getDirectoryHandle: m.getDirectoryHandle,
		readFile: m.readFile
	})), __vite__mapDeps([1,2]), import.meta.url);
	return lureFsPromise;
};
var downloadContentsToOPFS = async (webDavClient, path = "/", opts = {}, rootHandle = null) => {
	const { getDirectoryHandle, readFile } = await loadLureFs();
	const files = await webDavClient?.getDirectoryContents?.(path || "/")?.catch?.((e) => {
		console.warn(e);
		return [];
	});
	if (opts.pruneLocal && files?.length > 0) try {
		const dirHandle = await getDirectoryHandle(rootHandle, path)?.catch?.(() => null);
		if (dirHandle?.entries) {
			const localEntries = await Array.fromAsync(dirHandle.entries());
			const remoteNames = new Set(files?.map?.((f) => f?.basename).filter(Boolean));
			await Promise.all(localEntries.filter(([name]) => !remoteNames.has(name)).map(([name]) => dirHandle.removeEntry(name, { recursive: true })?.catch?.(console.warn.bind(console))));
		}
	} catch (e) {
		console.warn(e);
	}
	return Promise.all(files.map(async (file) => {
		const isDir = file?.type === "directory";
		const fullPath = isDir ? joinPath(file.filename, "", true) : file.filename;
		if (isDir) return downloadContentsToOPFS(webDavClient, fullPath, opts, rootHandle);
		if (file?.type === "file") {
			const localMtime = safeTime((await readFile(rootHandle, fullPath).catch(() => null))?.lastModified);
			if (safeTime(file?.lastmod) > localMtime) {
				const contents = await webDavClient.getFileContents(fullPath).catch((e) => {
					console.warn(e);
					return null;
				});
				if (!contents || contents.byteLength === 0) return;
				const mime = file?.mime || "application/octet-stream";
				return writeFileSmart(rootHandle, fullPath, new File([contents], file.basename, { type: mime }));
			}
		}
	}));
};
var uploadOPFSToWebDav = async (webDavClient, dirHandle = null, path = "/", opts = {}) => {
	const { getDirectoryHandle } = await loadLureFs();
	const effectiveDirHandle = dirHandle ?? await getDirectoryHandle(null, path, { create: true })?.catch?.(console.warn.bind(console));
	const entries = await Array.fromAsync(effectiveDirHandle?.entries?.() ?? []);
	if (path != "/") {
		if (opts.pruneRemote && entries?.length >= 0) {
			const remoteItems = await webDavClient.getDirectoryContents(path || "/").catch((e) => {
				console.warn(e);
				return [];
			});
			const localSet = new Set(entries.map(([name]) => name.toLowerCase()));
			const filesFirst = [...remoteItems.filter((r) => {
				const base = (r?.basename || "").toLowerCase();
				return base && !localSet.has(base);
			}).filter((x) => x.type !== "directory")];
			for (const r of filesFirst) {
				const remotePath = r.filename || joinPath(path, r.basename, r.type === "directory");
				try {
					await webDavClient.deleteFile(remotePath);
				} catch (e) {
					console.warn("delete failed:", remotePath, e);
				}
			}
		}
	}
	await Promise.all(entries.map(async ([name, fileOrDir]) => {
		const isDir = isDirHandle(fileOrDir);
		const remotePath = joinPath(path, name, isDir);
		if (isDir) {
			const dirPathNoSlash = joinPath(path, name, false);
			if (!await webDavClient.exists(dirPathNoSlash).catch((_e) => {
				return false;
			})) await webDavClient.createDirectory(dirPathNoSlash, { recursive: true }).catch(console.warn);
			return uploadOPFSToWebDav(webDavClient, fileOrDir, remotePath, opts);
		}
		const fileContent = await fileOrDir.getFile();
		if (!fileContent || fileContent.size === 0) return;
		const fullFilePath = joinPath(path, name, false);
		const remoteStat = await webDavClient.stat(fullFilePath).catch(() => null);
		const remoteMtime = safeTime(remoteStat?.lastmod);
		const localMtime = safeTime(fileContent.lastModified);
		if (!remoteStat || localMtime > remoteMtime) await webDavClient.putFileContents(fullFilePath, await fileContent.arrayBuffer(), { overwrite: true }).catch((_e) => {
			return null;
		});
	}));
};
var getHostOnly = (address) => {
	const url = new URL(address);
	return url.protocol + url.hostname + ":" + url.port;
};
var WebDavSync = async (address, options = {}) => {
	console.log("[Settings] WebDavSync", address, options);
	if (!address) return null;
	const createClient = await getWebDavCreateClient();
	if (!createClient) return null;
	const client = createClient(getHostOnly(address), options);
	return {
		status: currentWebDav?.sync?.getDAVCompliance?.()?.catch?.(console.warn.bind(console)) ?? null,
		client,
		upload(withPrune = false) {
			if (this.status != null) return uploadOPFSToWebDav(client, null, "/", { pruneRemote: withPrune })?.catch?.((e) => {
				console.warn(e);
				return [];
			});
		},
		download(withPrune = false) {
			if (this.status != null) return downloadContentsToOPFS(client, "/", { pruneLocal: withPrune })?.catch?.((e) => {
				console.warn(e);
				return [];
			});
		}
	};
};
var currentWebDav = { sync: null };
if (!isContentScriptContext()) (async () => {
	try {
		const settings = await loadSettings();
		if (settings?.core?.mode === "endpoint" && settings?.core?.preferBackendSync) return;
		if (!settings?.webdav?.url) return;
		currentWebDav.sync = await WebDavSync(settings.webdav.url, {
			withCredentials: true,
			username: settings.webdav.username,
			password: settings.webdav.password,
			token: settings.webdav.token
		}) ?? currentWebDav.sync;
		await currentWebDav?.sync?.upload?.(true);
		await currentWebDav?.sync?.download?.(true);
	} catch (e) {}
})();
var updateWebDavSettings = async (settings) => {
	settings ||= await loadSettings();
	if (settings?.core?.mode === "endpoint" && settings?.core?.preferBackendSync) {
		currentWebDav.sync = null;
		return;
	}
	if (!settings?.webdav?.url) return;
	currentWebDav.sync = await WebDavSync(settings.webdav.url, {
		withCredentials: true,
		username: settings.webdav.username,
		password: settings.webdav.password,
		token: settings.webdav.token
	}) ?? currentWebDav.sync;
	await currentWebDav?.sync?.upload?.();
	await currentWebDav?.sync?.download?.(true);
};
if (!isContentScriptContext()) {
	try {
		if (typeof window !== "undefined" && typeof addEventListener === "function") {
			addEventListener("pagehide", () => {
				currentWebDav?.sync?.upload?.()?.catch?.(() => {});
			});
			addEventListener("beforeunload", () => {
				currentWebDav?.sync?.upload?.()?.catch?.(() => {});
			});
		}
	} catch {}
	(async () => {
		try {
			while (true) {
				await currentWebDav?.sync?.upload?.()?.catch?.(() => {});
				await new Promise((resolve) => setTimeout(resolve, 3e3));
			}
		} catch {}
	})();
}
var COLOR_SOURCES = [
	"auto",
	"wallpaper",
	"material-you",
	"system-wallpaper",
	"speed-dial",
	"custom"
];
var HEX_RE = /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i;
var normalizeHexColor = (raw) => {
	const t = String(raw ?? "").trim();
	if (!HEX_RE.test(t)) return "";
	if (t.length === 4) return `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`.toLowerCase();
	return t.toLowerCase();
};
var isAppearanceColorSource = (raw) => COLOR_SOURCES.includes(String(raw || ""));
var isCapacitorNative$2 = () => {
	try {
		const c = globalThis.Capacitor;
		if (typeof c?.isNativePlatform === "function" && c.isNativePlatform()) return true;
		const platform = c?.getPlatform?.();
		return platform === "android" || platform === "ios";
	} catch {
		return false;
	}
};
var isNeutralinoDesktop = () => {
	try {
		const g = globalThis;
		return Boolean(g.__CWS_NEUTRALINO_BOOT__ || g.Neutralino || typeof g.NL_OS === "string");
	} catch {
		return false;
	}
};
var isCrxSurface = () => {
	try {
		return Boolean(globalThis.chrome?.runtime?.id);
	} catch {
		return false;
	}
};
var isLauncherSku = () => {
	try {
		if (typeof document !== "undefined" && document.documentElement.dataset.cwspShellRole === "launcher") return true;
		return globalThis.__RS_SHELL_ROLE__ === "launcher";
	} catch {
		return false;
	}
};
var isCwspShellSurface = () => {
	try {
		if (typeof document === "undefined") return false;
		const role = String(document.documentElement.dataset.cwspShellRole || "").toLowerCase();
		const surface = String(document.documentElement.dataset.cwspSurface || "").toLowerCase();
		return role === "shell" || surface === "cwsp-shell" || surface === "environment" || surface === "cw-environment";
	} catch {
		return false;
	}
};
/** Platform default when `colorSource` is empty / `auto`. */
var defaultColorSource = () => {
	if (isCapacitorNative$2() && isLauncherSku()) return "wallpaper";
	if (isCapacitorNative$2()) return "material-you";
	if (isNeutralinoDesktop()) return "system-wallpaper";
	if (isCrxSurface() || isCwspShellSurface()) return "speed-dial";
	return "speed-dial";
};
var resolveColorSource = (saved) => {
	if (isAppearanceColorSource(saved) && saved !== "auto") return saved;
	return defaultColorSource();
};
var rgbToHex = (css) => {
	const m = css.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
	if (!m) return "";
	return `#${[
		m[1],
		m[2],
		m[3]
	].map((n) => Math.max(0, Math.min(255, Math.round(Number(n)))).toString(16).padStart(2, "0")).join("")}`;
};
var registerColorProperty = (name, initialValue = "#5a9ec8") => {
	try {
		CSS?.registerProperty?.({
			name,
			syntax: "<color>",
			inherits: true,
			initialValue
		});
	} catch (error) {
		console.debug(error);
	}
};
var seedHosts = () => {
	const nodes = /* @__PURE__ */ new Set();
	if (typeof document === "undefined") return [];
	nodes.add(document.documentElement);
	if (document.body) nodes.add(document.body);
	document.querySelectorAll(".env-shell-root, .wf-demo-root, ui-window, [data-shell], .view-settings, [data-view='settings'], .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .cw-network-view, .cw-network-view-host").forEach((el) => nodes.add(el));
	return [...nodes];
};
var SEED_PROPS = [
	"--color-primary",
	"--base-color",
	"--wf-md-primary",
	"--wf-md-seed",
	"--primary",
	"--current"
];
var isValidColor = (color) => {
	try {
		rgbToHex(color);
		return true;
	} catch {
		return false;
	}
};
var applyBaseColorSeed = (hex, source, extras) => {
	if (typeof document === "undefined") return;
	const seed = normalizeHexColor(hex) || "#5a9ec8";
	const secondary = normalizeHexColor(extras?.secondary) || `color-mix(in oklab, ${seed} 72%, gray)`;
	const tertiary = normalizeHexColor(extras?.tertiary) || `color-mix(in oklab, ${seed} 55%, gray)`;
	const concrete = source === "user" ? "custom" : source === "system" ? "material-you" : source;
	document.documentElement.dataset.baseSource = String(concrete);
	document.documentElement.dataset.colorSource = String(concrete);
	if (!isValidColor(seed)) return;
	if (!isValidColor(secondary)) return;
	if (!isValidColor(tertiary)) return;
	registerColorProperty("--color-primary", seed);
	registerColorProperty("--base-color", seed);
	registerColorProperty("--color-secondary", secondary);
	registerColorProperty("--color-tertiary", tertiary);
	registerColorProperty("--secondary", secondary);
	registerColorProperty("--tertiary", tertiary);
	for (const host of seedHosts()) {
		for (const prop of SEED_PROPS) host.style.setProperty(prop, seed);
		host.style.setProperty("--color-secondary", secondary);
		host.style.setProperty("--color-tertiary", tertiary);
		host.style.setProperty("--secondary", secondary);
		host.style.setProperty("--tertiary", tertiary);
	}
	const globalQuery = Q("body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host");
	globalQuery.style.setProperty("--color-primary", seed);
	globalQuery.style.setProperty("--base-color", seed);
	globalQuery.style.setProperty("--color-secondary", secondary);
	globalQuery.style.setProperty("--color-tertiary", tertiary);
	globalQuery.style.setProperty("--secondary", secondary);
	globalQuery.style.setProperty("--tertiary", tertiary);
};
/** CSS `AccentColor` when the engine maps it to a real system accent (not generic link blue). */
var readCssAccentColor = () => {
	if (typeof document === "undefined") return "";
	const probe = document.createElement("div");
	probe.style.cssText = "position:absolute;inset:auto;color:AccentColor;background:AccentColor";
	document.documentElement.appendChild(probe);
	const css = getComputedStyle(probe).color;
	probe.remove();
	const hex = rgbToHex(css);
	if (!hex) return "";
	if (hex === "#0000ee" || hex === "#0000ff" || hex === "#000000" || hex === "#ffffff") return "";
	return hex;
};
var readBridgeColor = async (key) => {
	try {
		const cached = normalizeHexColor(globalThis.__CWS_SHELL_INFO__?.[key]);
		if (cached) return cached;
		const { fetchCwsShellInfo } = await __vitePreload(async () => {
			const { fetchCwsShellInfo } = await Promise.resolve().then(() => cws_bridge_exports);
			return { fetchCwsShellInfo };
		}, void 0, import.meta.url);
		return normalizeHexColor((await fetchCwsShellInfo({ force: true }))?.[key]);
	} catch {
		return "";
	}
};
var resolveSystemAccentColor = async () => {
	const fromBridge = await readBridgeColor("accentColor");
	if (fromBridge) return fromBridge;
	return readCssAccentColor();
};
var cachedWallpaperPrimary = () => {
	try {
		const hex = normalizeHexColor(localStorage.getItem("rs-wallpaper-primary"));
		if (hex) return hex;
		const raw = localStorage.getItem("rs-wallpaper-theme");
		if (!raw) return "";
		return normalizeHexColor(JSON.parse(raw)?.primary);
	} catch {
		return "";
	}
};
var extractFromImage = async (src) => {
	try {
		const { applyThemeFromWallpaper } = await __vitePreload(async () => {
			const { applyThemeFromWallpaper } = await import("../com/app.js").then((n) => n.w);
			return { applyThemeFromWallpaper };
		}, __vite__mapDeps([1,2]), import.meta.url);
		return normalizeHexColor((await applyThemeFromWallpaper(src, { force: false }))?.primary);
	} catch {
		return "";
	}
};
var colorFromLiveWallpaperCanvas = async () => {
	if (typeof document === "undefined") return "";
	const canvas = document.querySelector(".env-shell-wallpaper canvas, [data-app-layer='canvas'] canvas");
	if (!canvas || canvas.width < 2 || canvas.height < 2) return "";
	try {
		const blob = await new Promise((resolve) => {
			canvas.toBlob((b) => resolve(b), "image/jpeg", .7);
		});
		if (blob && blob.size > 0) return extractFromImage(blob);
	} catch {}
	return "";
};
var colorFromAppWallpaper = async () => {
	const cached = cachedWallpaperPrimary();
	if (cached) return cached;
	try {
		const { resolveAppWallpaperUrl } = await __vitePreload(async () => {
			const { resolveAppWallpaperUrl } = await import("../com/app.js").then((n) => n.w);
			return { resolveAppWallpaperUrl };
		}, __vite__mapDeps([1,2]), import.meta.url);
		const url = await resolveAppWallpaperUrl();
		if (url) return extractFromImage(url);
	} catch {}
	return "";
};
var neuReadEnv = async (key) => {
	try {
		const fn = globalThis.Neutralino?.os?.getEnv;
		if (typeof fn !== "function") return "";
		const raw = await fn({ key });
		if (typeof raw === "string") return raw.trim();
		if (raw && typeof raw === "object" && "value" in raw) return String(raw.value || "").trim();
		return "";
	} catch {
		return "";
	}
};
var neuReadBinary = async (path) => {
	try {
		const buf = await globalThis.Neutralino?.filesystem?.readBinaryFile?.(path);
		if (!buf || !(buf instanceof ArrayBuffer) || buf.byteLength < 32) return null;
		return new Blob([buf], { type: "image/jpeg" });
	} catch {
		return null;
	}
};
var colorFromSystemWallpaper = async () => {
	const fromBridge = await readBridgeColor("wallpaperColor");
	if (fromBridge) return fromBridge;
	if (isNeutralinoDesktop()) {
		const appData = await neuReadEnv("APPDATA") || await neuReadEnv("HOME");
		const candidates = [appData ? `${appData.replace(/[\\/]+$/, "")}/Microsoft/Windows/Themes/TranscodedWallpaper` : "", appData ? `${appData.replace(/[\\/]+$/, "")}/.cache/wallpaper` : ""].filter(Boolean);
		for (const path of candidates) {
			const blob = await neuReadBinary(path);
			if (blob) {
				const hex = await extractFromImage(blob);
				if (hex) return hex;
			}
		}
	}
	return cachedWallpaperPrimary();
};
var resolveAppearanceBaseColor = async (appearance) => {
	const input = typeof appearance === "string" || appearance == null ? { color: appearance } : appearance;
	const source = resolveColorSource(input.colorSource);
	const custom = normalizeHexColor(input.color);
	const pick = async (fn, tag) => {
		const hex = normalizeHexColor(await fn());
		return hex ? {
			hex,
			source: tag
		} : null;
	};
	if (source === "custom" && custom) return {
		hex: custom,
		source: "custom"
	};
	if (source === "material-you") return await pick(resolveSystemAccentColor, "material-you") ?? {
		hex: custom || "#5a9ec8",
		source: custom ? "custom" : "material-you"
	};
	if (source === "wallpaper") return await pick(colorFromLiveWallpaperCanvas, "wallpaper") ?? await pick(colorFromAppWallpaper, "wallpaper") ?? await pick(async () => readBridgeColor("wallpaperColor"), "wallpaper") ?? {
		hex: custom || "#5a9ec8",
		source: "wallpaper"
	};
	if (source === "speed-dial") return await pick(colorFromAppWallpaper, "speed-dial") ?? {
		hex: custom || "#5a9ec8",
		source: "speed-dial"
	};
	if (source === "system-wallpaper") return await pick(colorFromSystemWallpaper, "system-wallpaper") ?? {
		hex: custom || "#5a9ec8",
		source: "system-wallpaper"
	};
	return {
		hex: custom || "#5a9ec8",
		source
	};
};
//#endregion
//#region ../../modules/projects/subsystem/src/other/utils/Theme.ts
/**
* WHY: fl.ui Quick Settings cannot import this module (layer cycle). It dispatches
* `u2-theme-change` with `{ source: "quick-settings", theme }`; we persist to IDB and
* re-run {@link applyTheme} so env-shell + minimal shells share one persistence path.
*/
var quickSettingsThemeBridgeBound = false;
var quickSettingsThemeBridgeBusy = false;
var bindQuickSettingsThemePersistence = () => {
	if (quickSettingsThemeBridgeBound || typeof document === "undefined") return;
	quickSettingsThemeBridgeBound = true;
	document.documentElement.addEventListener("u2-theme-change", (ev) => {
		const detail = ev?.detail;
		if (!detail || detail.source !== "quick-settings") return;
		const theme = detail.theme;
		if (theme !== "light" && theme !== "dark") return;
		if (quickSettingsThemeBridgeBusy) return;
		quickSettingsThemeBridgeBusy = true;
		(async () => {
			try {
				const current = await loadSettings$1();
				if (current?.appearance?.theme === theme) {
					syncBrowserChromeTheme(theme, theme);
					return;
				}
				applyTheme(await saveSettings$1({
					...current,
					appearance: {
						...current.appearance || {},
						theme
					}
				}));
			} catch (e) {
				console.warn("[Theme] Quick Settings persistence failed", e);
				syncBrowserChromeTheme(theme, theme);
			} finally {
				quickSettingsThemeBridgeBusy = false;
			}
		})();
	});
};
/** Convert getComputedStyle background (rgb/rgba or hex) to #rrggbb for meta theme-color / PWA chrome. */
var cssBackgroundToOpaqueHex = (css) => {
	const t = css.trim();
	if (!t || t === "transparent") return null;
	const hexMatch = t.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
	if (hexMatch) {
		let h = hexMatch[1];
		if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
		return `#${h.toLowerCase()}`;
	}
	const m = t.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)$/i);
	if (!m) return null;
	const alpha = m[4] !== void 0 ? Number(m[4]) : 1;
	if (!Number.isFinite(alpha) || alpha < .98) return null;
	return `#${[
		Math.max(0, Math.min(255, Math.round(Number(m[1])))),
		Math.max(0, Math.min(255, Math.round(Number(m[2])))),
		Math.max(0, Math.min(255, Math.round(Number(m[3]))))
	].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
};
/**
* Sample the top shell chrome (minimal nav or faint toolbar) from mounted shell shadow roots
* so PWA Window Controls Overlay / title bar can match the real toolbar background.
*/
var samplePwaToolbarBackgroundColor = () => {
	if (typeof document === "undefined") return null;
	const hosts = document.querySelectorAll("[data-shell]");
	for (const host of hosts) {
		const sr = host.shadowRoot;
		if (!sr) continue;
		const bar = sr.querySelector(".app-shell__nav, .app-shell__toolbar");
		if (!bar) continue;
		const bg = getComputedStyle(bar).backgroundColor;
		const hex = cssBackgroundToOpaqueHex(bg);
		if (hex) return hex;
	}
	return null;
};
/** Paint `--color-surface` so Capacitor / PWA chrome follows Material You after seed apply. */
var sampleSurfaceBackgroundColor = () => {
	if (typeof document === "undefined") return null;
	const probe = document.createElement("div");
	probe.style.cssText = "position:fixed;left:-8px;top:-8px;inline-size:4px;block-size:4px;pointer-events:none;opacity:0;background:var(--color-surface)";
	try {
		document.documentElement.appendChild(probe);
		return cssBackgroundToOpaqueHex(getComputedStyle(probe).backgroundColor);
	} catch {
		return null;
	} finally {
		probe.remove();
	}
};
var resolveColorScheme = (theme) => {
	if (theme === "dark" || theme === "light") return theme;
	return globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
};
var resolveFontSize = (size) => {
	switch (size) {
		case "small": return "14px";
		case "large": return "18px";
		default: return "16px";
	}
};
/** Keep minimal / immersive shell hosts + inner `.app-shell` in sync when only `applyTheme()` runs (Settings saves / preview) — `shell.setTheme` is not always invoked. */
var syncShellHostVisualScheme = (resolved) => {
	try {
		document.querySelectorAll("[data-shell]").forEach((el) => {
			const h = el;
			h.dataset.theme = resolved;
			h.style.colorScheme = resolved;
			const inner = h.shadowRoot?.querySelector?.(".app-shell");
			if (inner) {
				inner.dataset.theme = resolved;
				inner.style.colorScheme = resolved;
			}
		});
	} catch {}
	try {
		document.querySelectorAll("ui-window, .env-shell-root").forEach((el) => {
			const h = el;
			h.dataset.theme = resolved;
			h.style.colorScheme = resolved;
		});
	} catch {}
};
/** Keep <html> + PWA chrome aligned with resolved light/dark and user preference (auto/light/dark). */
var syncBrowserChromeTheme = (resolved, preference) => {
	if (typeof document === "undefined") return;
	const root = document.documentElement;
	const scheme = preference === "dark" ? "dark" : preference === "light" ? "light" : "auto";
	root.setAttribute("data-scheme", scheme);
	root.setAttribute("data-theme", resolved);
	root.style.colorScheme = resolved;
	try {
		const body = document.body;
		if (body) body.style.colorScheme = resolved;
	} catch {}
	try {
		document.querySelectorAll("[data-shell='content']").forEach((el) => {
			el.style.colorScheme = resolved;
		});
	} catch {}
	if (globalThis?.__LURE_DYNAMIC_THEME_PRIORITY__ !== true) {
		const applyMetaThemeColor = () => {
			if (globalThis?.__LURE_DYNAMIC_THEME_PRIORITY__ === true) return;
			if (globalThis?.__CWSP_NATIVE_THEME_COLOR_OWNED__) return;
			if (document.querySelector("ui-window[native-mode]:not([minimized])")) return;
			let meta = document.querySelector("meta[name=\"theme-color\"]");
			if (!meta) {
				meta = document.createElement("meta");
				meta.setAttribute("name", "theme-color");
				document.head?.appendChild(meta);
			}
			const sampled = samplePwaToolbarBackgroundColor() ?? sampleSurfaceBackgroundColor();
			const fallback = resolved === "dark" ? "#1a2420" : "#d5e4dc";
			meta.setAttribute("content", sampled ?? fallback);
		};
		applyMetaThemeColor();
		requestAnimationFrame(applyMetaThemeColor);
	}
	syncShellHostVisualScheme(resolved);
};
var applyTheme = (settings) => {
	if (typeof document === "undefined") return;
	bindQuickSettingsThemePersistence();
	installThemeLifecycleResync();
	if (!settings) return;
	const root = document.documentElement;
	const theme = settings.appearance?.theme || "auto";
	const resolvedScheme = resolveColorScheme(theme);
	syncBrowserChromeTheme(resolvedScheme, theme);
	root.style.fontSize = resolveFontSize(settings.appearance?.fontSize);
	root.dataset.colorSource = resolveColorSource(settings.appearance?.colorSource);
	resolveAppearanceBaseColor(settings.appearance).then(({ hex, source }) => {
		applyBaseColorSeed(hex, source);
		syncBrowserChromeTheme(resolvedScheme, theme);
	});
	if (settings.grid) applyGridSettings(settings);
};
var restampExplorerShellScheme = () => {
	if (typeof document === "undefined") return;
	try {
		document.querySelectorAll(".view-explorer").forEach((el) => {
			const scheme = el.dataset.explorerColorScheme;
			if (scheme !== "light" && scheme !== "dark") return;
			if (el.getAttribute("data-theme") !== scheme) el.setAttribute("data-theme", scheme);
			el.style.setProperty("color-scheme", `${scheme} only`);
		});
	} catch {}
};
var themeResumeAt = 0;
var themeLifecycleBound = false;
var sawBackground = false;
var restampChromeScheme = () => {
	restampExplorerShellScheme();
	try {
		const root = document.documentElement;
		const pinned = root.getAttribute("data-theme");
		if (pinned === "light" || pinned === "dark") {
			root.style.colorScheme = pinned;
			if (document.body) document.body.style.colorScheme = pinned;
		}
		root.offsetHeight;
	} catch {}
};
/**
* Restore chrome after Android recents / Home.
* INVARIANT: never rewrite constructable sheets on cold start — first onResume/focus wiped UI.
*/
var resumeThemeAfterForeground = (force = false) => {
	if (typeof document === "undefined") return;
	if (!force && document.visibilityState === "hidden") return;
	const now = Date.now();
	if (now - themeResumeAt < 240) return;
	themeResumeAt = now;
	restampChromeScheme();
	if (!sawBackground) return;
	(async () => {
		try {
			const { rehydrateAdoptedStyleSheets } = await __vitePreload(async () => {
				const { rehydrateAdoptedStyleSheets } = await import("../com/app.js").then((n) => n.Dt);
				return { rehydrateAdoptedStyleSheets };
			}, __vite__mapDeps([1,2]), import.meta.url);
			rehydrateAdoptedStyleSheets();
		} catch {}
		restampChromeScheme();
		try {
			document.dispatchEvent(new CustomEvent("cwsp:theme-resume"));
		} catch {}
	})();
};
/** Bind visibility / pageshow / Capacitor appState + expose `__CWSP_THEME_RESUME__` for Java onResume. */
var installThemeLifecycleResync = () => {
	if (themeLifecycleBound || typeof document === "undefined") return;
	themeLifecycleBound = true;
	globalThis.__CWSP_THEME_RESUME__ = resumeThemeAfterForeground;
	document.addEventListener("visibilitychange", () => {
		if (document.visibilityState === "hidden") {
			sawBackground = true;
			return;
		}
		resumeThemeAfterForeground();
	});
	document.addEventListener("resume", () => resumeThemeAfterForeground());
	globalThis.addEventListener?.("pageshow", () => resumeThemeAfterForeground());
	try {
		globalThis.Capacitor?.Plugins?.App?.addListener?.("appStateChange", (state) => {
			if (state?.isActive === false) {
				sawBackground = true;
				return;
			}
			if (state?.isActive) resumeThemeAfterForeground();
		});
	} catch {}
};
//#endregion
//#region ../../modules/projects/subsystem/src/boot/veela-variant-runtime.ts
/**
* Veela stylesheet loader for CWSP-shell (no `fest/fl-ui` runtime SCSS dependency).
*
* Uses the canonical forwarded stack in `veela.css/src/scss/index.scss` (core + curated basic surface).
* `advanced` / `beercss` currently share that stack until a standalone advanced bundle exists with stable `@use` paths.
*/
var loadedVariant = null;
/**
* Loads Veela stylesheet slices for the coarse variant presets used by BootLoader.
*/
async function loadVeelaVariant(variant) {
	if (loadedVariant === variant) return;
	console.log("[Veela] Loading variant:", variant);
	const apply = async (text) => {
		if (typeof text === "string" && text.length) await loadAsAdopted(text);
	};
	if (variant === "core") {
		await apply(core_default);
		loadedVariant = variant;
		return;
	}
	await apply(scss_default);
	loadedVariant = variant;
}
//#endregion
//#region ../../modules/projects/subsystem/src/styles.ts
/**
* CWSP-shell Styles Module
*
* Provides style system integration for the CWSP-shell application.
* Supports multiple style systems based on veela CSS variants.
*
* Style Systems:
* - veela-advanced: Full-featured CSS framework (default)
* - veela-basic: Lightweight minimal styling
* - veela-beercss: Beer CSS compatible styling
* - raw: No styling framework (browser defaults)
*/
var STYLE_CONFIGS$1 = {
	"vl-advanced": {
		id: "vl-advanced",
		name: "Veela Advanced",
		description: "Full-featured CSS framework with design tokens and effects",
		variant: "advanced",
		initFn: async () => {
			try {
				await loadVeelaVariant("advanced");
				console.log("[Styles] Veela Advanced loaded");
			} catch (e) {}
		}
	},
	"vl-basic": {
		id: "vl-basic",
		name: "Veela Basic Styles",
		description: "Lightweight minimal styling for basic functionality",
		variant: "basic",
		initFn: async () => {
			try {
				await loadVeelaVariant("basic");
				console.log("[Styles] Veela Basic Styles loaded");
			} catch (e) {
				console.warn("[Styles] Failed to load Veela Basic Styles:", e);
			}
		}
	},
	"vl-beercss": {
		id: "vl-beercss",
		name: "Veela BeerCSS",
		description: "Beer CSS compatible styling with Material Design 3",
		variant: "beercss",
		initFn: async () => {
			try {
				await loadVeelaVariant("beercss");
				console.log("[Styles] Veela BeerCSS loaded");
			} catch (e) {
				console.warn("[Styles] Failed to load Veela BeerCSS:", e);
			}
		}
	},
	"vl-core": {
		id: "vl-core",
		name: "Veela Core",
		description: "Shared foundation styles for all veela variants",
		variant: "core",
		initFn: async () => {
			try {
				await loadVeelaVariant("core");
				console.log("[Styles] Veela Core loaded");
			} catch (e) {
				console.warn("[Styles] Failed to load Veela Core:", e);
			}
		}
	},
	"raw": {
		id: "raw",
		name: "Raw",
		description: "No styling framework, browser defaults",
		variant: "core",
		initFn: async () => {
			console.log("[Styles] Raw mode - no styles loaded");
		}
	}
};
var _currentStyle = null;
/**
* Load a style system
*
* @param styleId - Style system identifier
*/
async function loadStyleSystem(styleId) {
	const config = STYLE_CONFIGS$1[styleId] || STYLE_CONFIGS$1["vl-basic"];
	if (!config) throw new Error(`Unknown style system: ${styleId}`);
	if (_currentStyle === styleId) {
		console.log(`[Styles] Style system '${styleId}' already loaded`);
		return;
	}
	console.log(`[Styles] Loading style system: ${config.name}`);
	if (config.initFn) await config.initFn();
	_currentStyle = styleId;
	console.log(`[Styles] Style system ${config.name} loaded`);
}
//#endregion
//#region src/shared/routing/native/capacitor-clipboard.ts
/**
* Capacitor clipboard read/write with supernotes fork first, then official plugin.
* @see https://capacitorjs.com/docs/apis/clipboard
* @see https://www.npmjs.com/package/@supernotes/capacitor-clipboard
*/
var CLIPBOARD_PKGS = ["@supernotes/capacitor-clipboard", "@capacitor/clipboard"];
var loadClipboardModule = async () => {
	try {
		if (typeof globalThis.document === "undefined") return null;
	} catch {
		return null;
	}
	for (const pkg of CLIPBOARD_PKGS) try {
		return await __vitePreload(() => import(
			/* @vite-ignore */
			pkg
), [], import.meta.url);
	} catch {}
	return null;
};
async function readCapacitorClipboardText() {
	const mod = await loadClipboardModule();
	if (!mod?.Clipboard?.read) return "";
	try {
		const value = (await mod.Clipboard.read())?.value;
		if (typeof value === "string" && value.trim()) return value;
	} catch {}
	return "";
}
async function writeCapacitorClipboardText(text) {
	const mod = await loadClipboardModule();
	if (!mod?.Clipboard?.write) return false;
	try {
		await mod.Clipboard.write({
			string: String(text ?? ""),
			label: "cwsp"
		});
		return true;
	} catch {
		return false;
	}
}
//#endregion
//#region src/shared/routing/native/clipboard-device.ts
/**
* Device clipboard I/O: desktop control host → CwsBridge Java → Capacitor → Web API.
*
* WHY desktop-first: Neutralino/WebNative WebView `navigator.clipboard` is unreliable
* for system clipboard (esp. images / background). The Node control host exposes
* ClipboardService at `/service/clipboard` with the same `__WEBNATIVE_AUTH__` as settings.
*/
var clipboard_device_exports = /* @__PURE__ */ __exportAll({
	isCapacitorNativeShell: () => isCapacitorNativeShell,
	openAppClipboardRelatedSettings: () => openAppClipboardRelatedSettings,
	openNativeNotificationSettings: () => openNativeNotificationSettings,
	readClipboardTextFromDevice: () => readClipboardTextFromDevice,
	writeClipboardImageToDevice: () => writeClipboardImageToDevice,
	writeClipboardTextToDevice: () => writeClipboardTextToDevice
});
var isCapacitorNative$1 = () => {
	try {
		const c = globalThis.Capacitor;
		return typeof c?.isNativePlatform === "function" && Boolean(c.isNativePlatform());
	} catch {
		return false;
	}
};
/** Same check — use when "clipboard" naming is misleading (e.g. AirPad WebSocket transport). */
var isCapacitorNativeShell = () => isCapacitorNative$1();
/** Loopback Neutralino/WebNative control auth (settings + clipboard share this). */
var readDesktopControlAuth = () => {
	try {
		const g = globalThis;
		const auth = g.__WEBNATIVE_AUTH__ || g.__NEUTRALINO_AUTH__;
		if (!auth || typeof auth.port !== "number") return null;
		if (!(g.__CWS_WEBNATIVE_BOOT__ || g.__CWS_NEUTRALINO_BOOT__ || auth.key)) {}
		if (!auth.key) return null;
		return {
			port: auth.port,
			key: String(auth.key)
		};
	} catch {
		return null;
	}
};
var desktopControlFetch = async (path, init) => {
	const auth = readDesktopControlAuth();
	if (!auth) return null;
	try {
		const headers = new Headers(init?.headers);
		headers.set("Content-Type", "application/json");
		headers.set("X-API-Key", auth.key);
		const res = await fetch(`http://127.0.0.1:${auth.port}${path}`, {
			...init,
			headers,
			cache: "no-store"
		});
		if (!res.ok) return null;
		return await res.json();
	} catch {
		return null;
	}
};
var extractBridgeClipboardText = (result) => {
	if (!result || typeof result !== "object") return "";
	const record = result;
	const echo = record.echo;
	if (echo && typeof echo === "object") {
		const echoRec = echo;
		if (typeof echoRec.text === "string") return echoRec.text;
		if (typeof echoRec.value === "string") return echoRec.value;
	}
	if (typeof record.text === "string") return record.text;
	if (typeof record.value === "string") return record.value;
	if (typeof record.data === "string") return record.data;
	return "";
};
async function readViaDesktopControl() {
	const result = await desktopControlFetch("/service/clipboard?kind=text");
	if (!result || result.ok === false) return null;
	const text = typeof result.text === "string" && result.text || typeof result.content === "string" && result.content || typeof result.data === "string" && result.data || "";
	if (result.ok === true || "text" in result || "data" in result) return text;
	return null;
}
async function writeViaDesktopControl(text) {
	const result = await desktopControlFetch("/service/clipboard", {
		method: "POST",
		body: JSON.stringify({
			kind: "text",
			text,
			content: text,
			data: text
		})
	});
	return Boolean(result && result.ok !== false);
}
async function writeImageViaDesktopControl(data, mimeType, hash) {
	const result = await desktopControlFetch("/service/clipboard", {
		method: "POST",
		body: JSON.stringify({
			kind: "image",
			mimeType,
			hash: hash || void 0,
			imageBase64: data,
			asset: {
				mimeType,
				hash: hash || void 0,
				data,
				source: "base64"
			}
		})
	});
	return Boolean(result && result.ok !== false);
}
async function readViaCwsBridge() {
	if (!isCapacitorCwsNativeShell$1()) return "";
	try {
		return extractBridgeClipboardText(await invokeCwsNative("clipboard:read-local", {}));
	} catch {
		return "";
	}
}
async function writeViaCwsBridgeImage(data, mimeType, hash) {
	if (!isCapacitorCwsNativeShell$1()) return false;
	try {
		const result = await invokeCwsNative("clipboard:write-local-image", {
			mimeType,
			hash: hash || "",
			data
		});
		return Boolean(result?.ok);
	} catch {
		return false;
	}
}
async function writeViaCwsBridge(text) {
	if (!isCapacitorCwsNativeShell$1()) return false;
	try {
		const result = await invokeCwsNative("clipboard:write-local", { text });
		return Boolean(result?.ok);
	} catch {
		return false;
	}
}
async function writeClipboardImageToDevice(data, mimeType = "image/png", hash) {
	const payload = String(data ?? "").trim();
	if (!payload) throw new Error("Clipboard image payload empty");
	const mime = String(mimeType || "image/png").trim() || "image/png";
	if (isDesktopControlClipboardShell()) {
		for (let i = 0; i < 4; i++) {
			if (await writeImageViaDesktopControl(payload, mime, hash)) return;
			if (i + 1 < 4) await new Promise((r) => globalThis.setTimeout(r, 120 * (i + 1)));
		}
		throw new Error("Desktop control clipboard image write failed");
	}
	if (await writeImageViaDesktopControl(payload, mime, hash)) return;
	if (await writeViaCwsBridgeImage(payload, mime, hash)) return;
	if (isCapacitorNative$1() && globalThis.navigator?.clipboard?.write) try {
		const bytes = decodeClipboardImageBase64(payload);
		if (bytes?.length) {
			const blob = new Blob([bytes], { type: mime });
			const pngBlob = mime === "image/png" ? blob : await blobToPng(blob);
			await globalThis.navigator.clipboard.write([new ClipboardItem({ [pngBlob.type]: pngBlob })]);
			return;
		}
	} catch {}
	throw new Error("Clipboard image write unavailable");
}
var decodeClipboardImageBase64 = (raw) => {
	let data = raw.trim();
	if (!data) return null;
	if (data.startsWith("data:")) {
		const comma = data.indexOf(",");
		if (comma < 0) return null;
		data = data.slice(comma + 1);
	}
	try {
		const bin = globalThis.atob(data.replace(/\s+/g, ""));
		const out = new Uint8Array(bin.length);
		for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
		return out;
	} catch {
		return null;
	}
};
var blobToPng = async (blob) => {
	if (blob.type === "image/png") return blob;
	if (typeof createImageBitmap === "function" && typeof OffscreenCanvas !== "undefined") {
		const bitmap = await createImageBitmap(blob);
		const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
		const ctx = canvas.getContext("2d");
		if (!ctx) return blob;
		ctx.drawImage(bitmap, 0, 0);
		bitmap.close();
		return await canvas.convertToBlob({ type: "image/png" });
	}
	return blob;
};
/** True when WebView must use Node control host for real OS clipboard (not navigator). */
var isDesktopControlClipboardShell = () => {
	try {
		const g = globalThis;
		if (g.__CWS_NEUTRALINO_BOOT__ || g.__CWS_WEBNATIVE_BOOT__) return true;
		if (typeof g.NL_OS === "string") return true;
		const auth = g.__WEBNATIVE_AUTH__ || g.__NEUTRALINO_AUTH__;
		return Boolean(auth && typeof auth.port === "number" && auth.key);
	} catch {
		return false;
	}
};
/**
* WHY: Neutralino WebView `navigator.clipboard` often reports success without
* touching the Windows OS clipboard — never treat it as the desktop path.
*/
async function writeViaDesktopControlWithRetry(text, attempts = 4) {
	for (let i = 0; i < attempts; i++) {
		if (await writeViaDesktopControl(text)) return true;
		if (i + 1 < attempts) await new Promise((r) => globalThis.setTimeout(r, 120 * (i + 1)));
	}
	return false;
}
async function writeClipboardTextToDevice(text) {
	const value = String(text ?? "");
	if (isDesktopControlClipboardShell()) {
		if (await writeViaDesktopControlWithRetry(value)) return;
		throw new Error("Desktop control clipboard write failed");
	}
	if (await writeViaDesktopControl(value)) return;
	if (await writeViaCwsBridge(value)) return;
	if (isCapacitorNative$1() && await writeCapacitorClipboardText(value)) return;
	if (globalThis.navigator?.clipboard?.writeText) {
		await globalThis.navigator.clipboard.writeText(value);
		return;
	}
	throw new Error("Clipboard write unavailable");
}
async function readClipboardTextFromDevice() {
	if (isDesktopControlClipboardShell()) {
		for (let i = 0; i < 4; i++) {
			const fromDesktop = await readViaDesktopControl();
			if (fromDesktop !== null) return fromDesktop;
			if (i + 1 < 4) await new Promise((r) => globalThis.setTimeout(r, 120 * (i + 1)));
		}
		throw new Error("Desktop control clipboard read failed");
	}
	const fromDesktop = await readViaDesktopControl();
	if (fromDesktop !== null) return fromDesktop;
	const fromBridge = await readViaCwsBridge();
	if (fromBridge) return fromBridge;
	if (isCapacitorNative$1()) {
		const fromCapacitor = await readCapacitorClipboardText();
		if (fromCapacitor) return fromCapacitor;
	}
	if (globalThis.navigator?.clipboard?.readText) return String(await globalThis.navigator.clipboard.readText());
	throw new Error("Clipboard read unavailable");
}
/** Opens notification settings for this app (Android / iOS). Best-effort. */
async function openNativeNotificationSettings() {
	if (!isCapacitorNative$1()) return;
	try {
		const { NativeSettings, AndroidSettings, IOSSettings } = await __vitePreload(async () => {
			const { NativeSettings, AndroidSettings, IOSSettings } = await import(
				/* @vite-ignore */
				"capacitor-native-settings"
);
			return {
				NativeSettings,
				AndroidSettings,
				IOSSettings
			};
		}, [], import.meta.url);
		await NativeSettings.open({
			optionAndroid: AndroidSettings.AppNotification,
			optionIOS: IOSSettings.AppNotification
		});
	} catch {}
}
/** Opens system UI where the user can adjust app permissions (Android / iOS). Best-effort. */
async function openAppClipboardRelatedSettings() {
	if (!isCapacitorNative$1()) return;
	try {
		const { NativeSettings, AndroidSettings, IOSSettings } = await __vitePreload(async () => {
			const { NativeSettings, AndroidSettings, IOSSettings } = await import(
				/* @vite-ignore */
				"capacitor-native-settings"
);
			return {
				NativeSettings,
				AndroidSettings,
				IOSSettings
			};
		}, [], import.meta.url);
		await NativeSettings.open({
			optionAndroid: AndroidSettings.ApplicationDetails,
			optionIOS: IOSSettings.App
		});
	} catch {}
}
//#endregion
//#region ../../modules/projects/cwsp-shared/src/clipboard-wire-constants.ts
/** Max age from first origin stamp before a non-input act is dropped (apply + relay). */
var PACKET_ORIGIN_TTL_MS = 4e3;
//#endregion
//#region ../../modules/projects/cwsp-shared/src/wire-time64.ts
var SUB_US_SCALE = 1e6;
var hrtimeOffsetUs = 0;
var hrtimeAnchorMs = 0;
var refreshHrtimeAnchor = () => {
	hrtimeAnchorMs = Date.now();
	if (typeof process !== "undefined" && typeof process.hrtime?.bigint === "function") {
		hrtimeOffsetUs = Number(process.hrtime.bigint() / 1000n) % SUB_US_SCALE;
		return;
	}
	try {
		const perf = globalThis.performance;
		if (typeof perf?.now === "function") {
			hrtimeOffsetUs = Math.floor(perf.now() % 1 * SUB_US_SCALE) % SUB_US_SCALE;
			return;
		}
	} catch {}
	hrtimeOffsetUs = 0;
};
refreshHrtimeAnchor();
/** Capture monotonic-aligned 64-bit wire time. */
var captureWireTime64 = () => {
	const ts = Date.now();
	let subUs = 0;
	if (typeof process !== "undefined" && typeof process.hrtime?.bigint === "function") {
		const deltaMs = ts - hrtimeAnchorMs;
		if (deltaMs < 0 || deltaMs > 6e4) refreshHrtimeAnchor();
		subUs = (hrtimeOffsetUs + Number(process.hrtime.bigint() / 1000n)) % SUB_US_SCALE;
	} else try {
		const perf = globalThis.performance;
		if (typeof perf?.now === "function") subUs = Math.floor(perf.now() % 1 * SUB_US_SCALE) % SUB_US_SCALE;
	} catch {
		subUs = 0;
	}
	const wireTime64 = String(BigInt(ts) * BigInt(SUB_US_SCALE) + BigInt(subUs));
	return {
		ts,
		subUs,
		wireTime64,
		ts64: wireTime64,
		wireTs: wireTime64
	};
};
/** Merge {@code ts}, {@code subUs}, {@code wireTime64} onto payload without overwriting explicit values. */
var annotateWireTime64 = (payload) => {
	const timing = captureWireTime64();
	const wireTime64 = String(payload.wireTime64 ?? payload.ts64 ?? payload.wireTs ?? timing.wireTime64);
	return {
		...payload,
		ts: Number(payload.ts ?? timing.ts),
		subUs: Number(payload.subUs ?? timing.subUs),
		wireTime64,
		ts64: wireTime64,
		wireTs: wireTime64
	};
};
var asRecord$2 = (value) => value && typeof value === "object" && !Array.isArray(value) ? value : {};
var readPositiveMs = (value) => {
	const n = Number(value);
	return Number.isFinite(n) && n > 0 ? n : 0;
};
/** Immutable first-send wall clock — survives gateway relay without resetting age. */
var packetOriginTimestampMs = (packet) => {
	const flags = asRecord$2(packet.flags);
	const payload = asRecord$2(packet.payload ?? packet.data);
	const wireParsed = parseWireTime64(packet.originTs ?? flags.originTs ?? payload.originTs);
	if (wireParsed?.ts) return wireParsed.ts;
	return readPositiveMs(packet.originTs) || readPositiveMs(flags.originTs) || readPositiveMs(payload.originTs) || readPositiveMs(packet.timestamp) || readPositiveMs(packet.ts) || readPositiveMs(flags.timestamp) || readPositiveMs(flags.ts) || readPositiveMs(payload.timestamp) || readPositiveMs(payload.ts) || 0;
};
/** Packet-level timestamp fields (root {@code timestamp} mirrors {@code ts}). */
var annotatePacketWireTime64 = (packet) => {
	const timing = captureWireTime64();
	const existingOrigin = packetOriginTimestampMs(packet) || readPositiveMs(packet.timestamp) || readPositiveMs(packet.ts) || timing.ts;
	const ts = readPositiveMs(packet.timestamp) || readPositiveMs(packet.ts) || existingOrigin;
	const subUs = Number(packet.subUs ?? timing.subUs);
	const wireTime64 = String(packet.wireTime64 ?? packet.ts64 ?? packet.wireTs ?? timing.wireTime64);
	const priorFlags = asRecord$2(packet.flags);
	const flags = {
		...priorFlags,
		originTs: priorFlags.originTs ?? packet.originTs ?? existingOrigin,
		wireTime64: priorFlags.wireTime64 ?? wireTime64,
		ts64: priorFlags.ts64 ?? priorFlags.wireTime64 ?? wireTime64,
		wireTs: priorFlags.wireTs ?? priorFlags.wireTime64 ?? wireTime64
	};
	return {
		...packet,
		originTs: packet.originTs ?? existingOrigin,
		ts,
		subUs,
		wireTime64,
		ts64: wireTime64,
		wireTs: wireTime64,
		timestamp: ts,
		flags
	};
};
var parseWireTime64 = (value) => {
	const raw = String(value ?? "").trim();
	if (!/^\d+$/.test(raw)) return null;
	try {
		const composite = BigInt(raw);
		const ts = Number(composite / BigInt(SUB_US_SCALE));
		const subUs = Number(composite % BigInt(SUB_US_SCALE));
		if (!Number.isFinite(ts)) return null;
		return {
			ts,
			subUs,
			wireTime64: raw,
			ts64: raw,
			wireTs: raw
		};
	} catch {
		return null;
	}
};
//#endregion
//#region ../../modules/projects/cwsp-shared/src/input-command-timing.ts
/**
* Send-time markers for coordinator input + clipboard acts.
*
* INVARIANT: canonical copy lives in `fest/cwsp-shared`; portable deploy bundles via esbuild.
*/
var asRecord$1 = (value) => value && typeof value === "object" && !Array.isArray(value) ? value : {};
var readPerfNow = () => {
	try {
		const perf = globalThis.performance;
		if (typeof perf?.now === "function") return perf.now();
	} catch {}
	return Date.now();
};
/** Low 16 bits of deci-ms perf clock — packed into legacy 8-byte AirPad frames (bytes 6–7). */
var encodeInputPerfTsLo = (perfTs = readPerfNow()) => Math.round(perfTs * 10) & 65535;
var isInputCoordinatorWhat = (what) => {
	const normalized = String(what || "").trim().toLowerCase();
	return normalized.startsWith("mouse:") || normalized.startsWith("keyboard:") || normalized.startsWith("airpad:mouse") || normalized.startsWith("airpad:keyboard");
};
/** Discrete pointer/keyboard acts — must not be stale-dropped or wire-replay suppressed like move bursts. */
var isDiscreteInputWhat = (what) => {
	const normalized = String(what || "").trim().toLowerCase();
	return normalized === "mouse:click" || normalized === "mouse:down" || normalized === "mouse:up" || normalized === "keyboard:tap" || normalized === "keyboard:type" || normalized === "keyboard:toggle";
};
var readAirpadWrapperOp$1 = (packet) => {
	const payload = asRecord$1(packet.payload ?? packet.data ?? packet.body);
	const direct = String(payload.op ?? payload.action ?? payload.type ?? "").trim().toLowerCase();
	if (direct) return direct;
	const params = payload.params;
	if (Array.isArray(params) && params.length > 0) return String(params[0] ?? "").trim().toLowerCase();
	return "";
};
/** Packet-aware discrete input (incl. `airpad:mouse` click/down/up wrappers). */
var isDiscreteInputPacket = (packet) => {
	if (typeof packet === "string") return isDiscreteInputWhat(packet);
	const what = String(packet.what || packet.type || "").trim().toLowerCase();
	if (isDiscreteInputWhat(what)) return true;
	if (what === "airpad:mouse" || what.startsWith("airpad:mouse")) {
		const op = readAirpadWrapperOp$1(packet) || "move";
		return op === "click" || op === "mouse:click" || op === "down" || op === "mouse:down" || op === "up" || op === "mouse:up";
	}
	if (what === "airpad:keyboard" || what.startsWith("airpad:keyboard")) return true;
	return false;
};
var isClipboardCoordinatorWhat = (what) => {
	const normalized = String(what || "").trim().toLowerCase();
	return normalized.startsWith("clipboard:") || normalized.startsWith("airpad:clipboard:");
};
/** Input + clipboard coordinator acts carry send-time markers for ordering/dedupe. */
var shouldAnnotateCoordinatorPayload = (what) => isInputCoordinatorWhat(what) || isClipboardCoordinatorWhat(what);
/** Merge timing into payload without overwriting explicit values. */
var annotateCoordinatorPayload = (payload) => {
	const base = asRecord$1(payload);
	const perfTs = Number(base.perfTs ?? readPerfNow());
	return {
		...annotateWireTime64(base),
		perfTs,
		perfTsLo: Number(base.perfTsLo ?? encodeInputPerfTsLo(perfTs))
	};
};
//#endregion
//#region ../../modules/projects/cwsp-shared/src/packet-wire-hash.ts
/**
* CWSP wire replay markers — stable {@code wireHash} on acts to stop duplicate apply + ping-pong.
* Parity: Java {@code CwspWireHash}, Node {@code local-dispatch.ts}, browser {@code websocket.ts}.
*/
var WIRE_HASH_FIELD = "wireHash";
var VOLATILE_PAYLOAD_KEYS = /* @__PURE__ */ new Set([
	"ts",
	"subUs",
	"wireTime64",
	"ts64",
	"wireTs",
	"perfTs",
	"perfTsLo",
	WIRE_HASH_FIELD,
	"source",
	"from",
	"clientId",
	"userId",
	"sender"
]);
var asRecord = (value) => value && typeof value === "object" && !Array.isArray(value) ? value : {};
/** djb2 → base36 (matches Node {@code local-dispatch} + Java {@code CwspWireHash}). */
var cheapWireHash = (value) => {
	if (!value) return "";
	let h = 5381;
	for (let i = 0; i < value.length; i += 1) h = (h << 5) + h + value.charCodeAt(i) | 0;
	return (h >>> 0).toString(36);
};
var normalizeClipboardWireText = (text) => String(text ?? "").replace(/\r\n/g, "\n").trim();
var stableStringify = (value) => {
	if (value === null || value === void 0) return "";
	if (typeof value !== "object") return JSON.stringify(value);
	if (Array.isArray(value)) return `[${value.map(stableStringify).join(",")}]`;
	const record = value;
	return `{${Object.keys(record).filter((key) => !VOLATILE_PAYLOAD_KEYS.has(key)).sort().map((key) => `${JSON.stringify(key)}:${stableStringify(record[key])}`).join(",")}}`;
};
var readAssetHash = (payload) => {
	for (const key of [
		"asset",
		"dataAsset",
		"file",
		"image"
	]) {
		const asset = asRecord(payload[key]);
		const hash = String(asset.hash ?? "").trim();
		if (hash) return hash;
	}
	return "";
};
var readClipboardText = (payload, packet) => {
	for (const key of [
		"text",
		"content",
		"body"
	]) {
		const direct = payload[key];
		if (typeof direct === "string" && direct.trim()) return direct;
	}
	for (const root of [
		"payload",
		"data",
		"result"
	]) {
		const carrier = packet[root];
		if (typeof carrier === "string" && carrier.trim()) return carrier;
	}
	return "";
};
var inferWireDedupeCategory = (what) => {
	const normalized = String(what || "").trim().toLowerCase();
	if (!normalized) return "general";
	if (normalized.startsWith("clipboard:") || normalized.startsWith("airpad:clipboard:")) return "clipboard";
	if (normalized.startsWith("mouse:") || normalized.startsWith("keyboard:") || normalized.startsWith("airpad:mouse") || normalized.startsWith("airpad:keyboard")) return "input";
	return "general";
};
var dedupeWindowForCategory = (category) => {
	if (category === "clipboard") return 250;
	if (category === "input") return 180;
	return 400;
};
var isDedupeExemptWhat = (what, op) => {
	if (op === "ask" || op === "request") return true;
	if (!what) return true;
	if (what.endsWith(":read") || what.endsWith(":get") || what.endsWith(":isready")) return true;
	return false;
};
/** Read explicit marker from flags / payload / root. */
var extractPacketWireHash = (packet) => {
	const flags = asRecord(packet.flags);
	const payload = asRecord(packet.payload ?? packet.data);
	return String(flags["wireHash"] ?? packet["wireHash"] ?? payload["wireHash"] ?? "").trim();
};
/** Stable content hash for one coordinator act (excludes uuid/timing noise). */
var computePacketWireHash = (packet) => {
	const op = String(packet.op || "act").trim().toLowerCase();
	const what = String(packet.what || packet.type || "").trim().toLowerCase();
	if (isDedupeExemptWhat(what, op)) return "";
	const sender = String(packet.byId || packet.from || packet.sender || "").trim().toLowerCase();
	const payload = asRecord(packet.payload ?? packet.data ?? packet.body ?? {});
	if (what.includes("clipboard")) {
		const text = readClipboardText(payload, packet);
		const assetHash = text ? "" : readAssetHash(payload);
		const content = text ? cheapWireHash(normalizeClipboardWireText(text)) : assetHash ? `asset:${assetHash}` : cheapWireHash(stableStringify(payload));
		if (!content) return "";
		const uuid = String(packet.uuid ?? "").trim();
		return cheapWireHash(`${op}|${what}|${sender}|${content}${uuid ? `|u:${uuid}` : ""}`);
	}
	if (inferWireDedupeCategory(what) === "input") {
		const perfMarker = payload.perfTs ?? payload.perfTsLo ?? "";
		return cheapWireHash(`${op}|${what}|${sender}|${stableStringify(payload)}|p:${perfMarker}`);
	}
	return cheapWireHash(`${op}|${what}|${sender}|${stableStringify(payload)}`);
};
/** Attach {@code flags.wireHash} + payload mirror; refresh when payload content changes. */
var annotatePacketWireHash = (packet) => {
	const timed = annotatePacketWireTime64(packet);
	const hash = computePacketWireHash(timed);
	if (!hash) return timed;
	if (extractPacketWireHash(timed) === hash) return timed;
	const flags = {
		...asRecord(timed.flags),
		[WIRE_HASH_FIELD]: hash
	};
	const payloadRaw = timed.payload ?? timed.data;
	let nextPayload = payloadRaw;
	if (payloadRaw && typeof payloadRaw === "object" && !Array.isArray(payloadRaw)) nextPayload = {
		...payloadRaw,
		[WIRE_HASH_FIELD]: hash
	};
	if (timed.payload !== void 0) return {
		...timed,
		flags,
		payload: nextPayload
	};
	if (timed.data !== void 0) return {
		...timed,
		flags,
		data: nextPayload
	};
	return {
		...timed,
		flags,
		payload: nextPayload
	};
};
var PacketWireDedupeGuard = class {
	maxEntries;
	seen = /* @__PURE__ */ new Map();
	constructor(maxEntries = 512) {
		this.maxEntries = maxEntries;
	}
	/** Returns true when the same wireHash was seen inside the category window. */
	shouldSuppress(packet, category) {
		const what = String(packet.what || packet.type || "").trim().toLowerCase();
		if (isDedupeExemptWhat(what, String(packet.op || "act").trim().toLowerCase())) return false;
		const hash = extractPacketWireHash(packet) || computePacketWireHash(packet);
		if (!hash) return false;
		const cat = category ?? inferWireDedupeCategory(what);
		const windowMs = dedupeWindowForCategory(cat);
		const now = Date.now();
		const key = `${cat}|${hash}`;
		const prev = this.seen.get(key);
		this.seen.set(key, now);
		this.prune(now, windowMs);
		return prev !== void 0 && now - prev < windowMs;
	}
	clear() {
		this.seen.clear();
	}
	prune(now, windowMs) {
		const ttl = Math.max(windowMs * 4, 4e3);
		for (const [key, ts] of this.seen.entries()) if (now - ts > ttl) this.seen.delete(key);
		if (this.seen.size <= this.maxEntries) return;
		const sorted = [...this.seen.entries()].sort((a, b) => a[1] - b[1]);
		for (let i = 0; i < sorted.length - this.maxEntries; i += 1) this.seen.delete(sorted[i][0]);
	}
};
var packetWireDedupeGuard = new PacketWireDedupeGuard();
/**
* Per-hop mesh relay dedupe — stops already-seen wireHash from floating between peers
* within {@link PACKET_ORIGIN_TTL_MS} without blocking first forward.
*/
var PacketWireRelayDedupeGuard = class {
	maxEntries;
	seen = /* @__PURE__ */ new Map();
	constructor(maxEntries = 512) {
		this.maxEntries = maxEntries;
	}
	shouldSuppress(packet) {
		if (isHighFrequencyInputPacket(packet)) return false;
		if (isDiscreteInputPacket(packet)) return false;
		if (isDedupeExemptWhat(String(packet.what || packet.type || "").trim().toLowerCase(), String(packet.op || "act").trim().toLowerCase())) return false;
		const hash = extractPacketWireHash(packet) || computePacketWireHash(packet);
		if (!hash) return false;
		const now = Date.now();
		const key = `relay|${hash}`;
		const prev = this.seen.get(key);
		this.seen.set(key, now);
		this.prune(now);
		return prev !== void 0 && now - prev < 4e3;
	}
	clear() {
		this.seen.clear();
	}
	prune(now) {
		const ttl = Math.max(PACKET_ORIGIN_TTL_MS * 4, 4e3);
		for (const [key, ts] of this.seen.entries()) if (now - ts > ttl) this.seen.delete(key);
		if (this.seen.size <= this.maxEntries) return;
		const sorted = [...this.seen.entries()].sort((a, b) => a[1] - b[1]);
		for (let i = 0; i < sorted.length - this.maxEntries; i += 1) this.seen.delete(sorted[i][0]);
	}
};
new PacketWireRelayDedupeGuard();
/** High-frequency relative deltas must never be replay-suppressed (drops smooth cursor). */
var isHighFrequencyInputWhat = (what) => {
	const normalized = String(what || "").trim().toLowerCase();
	return normalized === "mouse:move" || normalized === "mouse:scroll";
};
var readAirpadWrapperOp = (packet) => {
	const payload = asRecord(packet.payload ?? packet.data ?? packet.body);
	const direct = String(payload.op ?? payload.action ?? payload.type ?? "").trim().toLowerCase();
	if (direct) return direct;
	const params = payload.params;
	if (Array.isArray(params) && params.length > 0) return String(params[0] ?? "").trim().toLowerCase();
	return "";
};
/** Packet-aware high-frequency check, including `airpad:mouse` wrappers from Java/Android clients. */
var isHighFrequencyInputPacket = (packet) => {
	if (typeof packet === "string") return isHighFrequencyInputWhat(packet);
	const what = String(packet.what || packet.type || "").trim().toLowerCase();
	if (isHighFrequencyInputWhat(what)) return true;
	if (what !== "airpad:mouse" && !what.startsWith("airpad:mouse")) return false;
	const op = readAirpadWrapperOp(packet) || "move";
	return op === "move" || op === "mouse:move" || op === "scroll" || op === "mouse:scroll";
};
//#endregion
//#region src/shared/routing/core/app-layers.ts
var ensureAppLayers = (mountElement, options = {}) => {
	const enableOrientLayer = options.enableOrientLayer !== false;
	const enableCanvasLayer = options.enableCanvasLayer !== false;
	const existingCanvas = mountElement.querySelector("[data-app-layer=\"canvas\"]");
	const existingOrient = mountElement.querySelector("[data-app-layer=\"orient\"]");
	const existingShell = mountElement.querySelector("[data-app-layer=\"shell\"]");
	const existingOverlay = mountElement.querySelector("[data-app-layer=\"overlay\"]");
	const createCanvasLayer = () => {
		const canvasLayer = document.createElement("div");
		canvasLayer.dataset.appLayer = "canvas";
		canvasLayer.className = "app-layer app-layer--canvas";
		canvasLayer.style.position = "absolute";
		canvasLayer.style.inset = "0";
		canvasLayer.style.zIndex = "0";
		canvasLayer.style.pointerEvents = "none";
		initializeAppCanvasLayer(canvasLayer);
		return canvasLayer;
	};
	if (existingShell && existingOverlay) {
		let canvasLayer = existingCanvas;
		if (enableCanvasLayer && !canvasLayer) {
			canvasLayer = createCanvasLayer();
			mountElement.insertBefore(canvasLayer, existingOrient ?? existingShell);
		}
		if (!enableCanvasLayer && canvasLayer) {
			canvasLayer.remove();
			canvasLayer = null;
		}
		if (enableOrientLayer && !existingOrient) {
			const orientLayer = document.createElement("div");
			orientLayer.dataset.appLayer = "orient";
			orientLayer.className = "app-layer app-layer--orient";
			orientLayer.style.position = "absolute";
			orientLayer.style.inset = "0";
			orientLayer.style.zIndex = "5";
			orientLayer.style.pointerEvents = "none";
			orientLayer.style.background = "transparent";
			const orientBox = document.createElement("cw-oriented-box");
			orientBox.className = "ui-orientbox app-oriented-box";
			orientBox.setAttribute("data-mixin", "ui-orientbox");
			orientBox.style.position = "absolute";
			orientBox.style.inset = "0";
			orientBox.style.pointerEvents = "auto";
			orientBox.style.background = "transparent";
			orientLayer.appendChild(orientBox);
			fixOrientToScreen(orientBox);
			mountElement.insertBefore(orientLayer, existingShell);
			return {
				canvasLayer,
				orientLayer,
				shellLayer: existingShell,
				overlayLayer: existingOverlay
			};
		}
		if (!enableOrientLayer && existingOrient) {
			existingOrient.remove();
			return {
				canvasLayer,
				orientLayer: null,
				shellLayer: existingShell,
				overlayLayer: existingOverlay
			};
		}
		return {
			canvasLayer,
			orientLayer: enableOrientLayer ? existingOrient || null : null,
			shellLayer: existingShell,
			overlayLayer: existingOverlay
		};
	}
	mountElement.replaceChildren();
	mountElement.style.position = "relative";
	mountElement.style.overflow = "hidden";
	mountElement.dataset.appLayerRoot = "true";
	try {
		const root = document.documentElement;
		if (mountElement === document.body || mountElement.id === "app") {
			if (!root.style.minBlockSize) root.style.minBlockSize = "100dvb";
			if (!root.style.blockSize && !root.style.height) root.style.blockSize = "100%";
			if (!document.body.style.margin && mountElement === document.body) document.body.style.margin = "0";
		}
		if (!mountElement.style.minBlockSize) mountElement.style.minBlockSize = "100dvb";
		if (!mountElement.style.blockSize && !mountElement.style.height) mountElement.style.blockSize = "100%";
	} catch {}
	const canvasLayer = enableCanvasLayer ? createCanvasLayer() : null;
	const orientLayer = enableOrientLayer ? document.createElement("div") : null;
	if (orientLayer) {
		orientLayer.dataset.appLayer = "orient";
		orientLayer.className = "app-layer app-layer--orient";
		orientLayer.style.position = "absolute";
		orientLayer.style.inset = "0";
		orientLayer.style.zIndex = "5";
		orientLayer.style.pointerEvents = "none";
		orientLayer.style.background = "transparent";
		const orientBox = document.createElement("cw-oriented-box");
		orientBox.className = "ui-orientbox app-oriented-box";
		orientBox.setAttribute("data-mixin", "ui-orientbox");
		orientBox.style.position = "absolute";
		orientBox.style.inset = "0";
		orientBox.style.pointerEvents = "auto";
		orientBox.style.background = "transparent";
		orientLayer.appendChild(orientBox);
		fixOrientToScreen(orientBox);
	}
	const shellLayer = document.createElement("div");
	shellLayer.dataset.appLayer = "shell";
	shellLayer.className = "app-layer app-layer--shell";
	shellLayer.style.position = "absolute";
	shellLayer.style.inset = "0";
	shellLayer.style.zIndex = "10";
	shellLayer.style.pointerEvents = "none";
	shellLayer.style.display = "grid";
	shellLayer.style.gridTemplateColumns = "[content-column] minmax(0px, 1fr)";
	shellLayer.style.gridTemplateRows = "[status-row] minmax(0px, max-content) [content-row] minmax(0px, 1fr) [dock-row] minmax(0px, max-content)";
	shellLayer.style.overflow = "hidden";
	shellLayer.style.background = "transparent";
	shellLayer.style.backgroundColor = "transparent";
	const overlayLayer = document.createElement("div");
	overlayLayer.dataset.appLayer = "overlay";
	overlayLayer.className = "app-layer app-layer--overlay";
	overlayLayer.style.position = "absolute";
	overlayLayer.style.inset = "0";
	overlayLayer.style.zIndex = "1000";
	overlayLayer.style.pointerEvents = "none";
	overlayLayer.style.background = "transparent";
	overlayLayer.style.backgroundColor = "transparent";
	if (canvasLayer) mountElement.append(canvasLayer);
	if (orientLayer) mountElement.append(orientLayer);
	mountElement.append(shellLayer, overlayLayer);
	return {
		canvasLayer,
		orientLayer,
		shellLayer,
		overlayLayer
	};
};
//#endregion
//#region ../../modules/projects/subsystem/src/boot/history-base.ts
var KNOWN_PATH_MOUNTS = [
	"cwsp",
	"transfer",
	"markdown",
	"document",
	"viewer",
	"explorer",
	"workcenter",
	"process",
	"kvm"
];
/** Dedicated PWA hosts — app lives at `/`. Hub/LAN keep `/markdown` `/viewer` path mounts. */
var DEDICATED_SKU_HOSTS = [
	"md.u2re.space",
	"www.md.u2re.space",
	"explorer.u2re.space",
	"www.explorer.u2re.space",
	"process.u2re.space",
	"workcenter.u2re.space",
	"cwsp.u2re.space",
	"www.cwsp.u2re.space",
	"transfer.u2re.space"
];
function isDedicatedSkuHost(hostname) {
	try {
		const host = String(hostname ?? globalThis.location?.hostname ?? "").toLowerCase();
		return DEDICATED_SKU_HOSTS.includes(host);
	} catch {
		return false;
	}
}
function isKnownPathMountSegment(segment) {
	return KNOWN_PATH_MOUNTS.includes(String(segment || "").toLowerCase());
}
/**
* On a named SKU host, `/viewer` `/markdown` `/explorer` … are Fastify aliases of `/`, not view routes.
* WHY: minimal path-routing wrote `/viewer?shell=minimal` → 302 `/viewer/` → 302 `/` → bootloop.
*/
function pathForSkuHostView(viewPath) {
	let path = String(viewPath || "/").trim() || "/";
	if (!path.startsWith("/")) path = `/${path}`;
	const sku = inferCwspSkuFromLocation$1();
	const nativeSku = isCwspNativeHost$1() && !!sku && sku !== "launcher" && sku !== "crx";
	if (!isDedicatedSkuHost() && !nativeSku) return path;
	const seg = path.replace(/^\/+/, "").split("/")[0]?.toLowerCase() || "";
	if (!seg || !isKnownPathMountSegment(seg)) return path;
	if (sku && sku !== "launcher" && sku !== "crx") return SKU_HUB_PATHS$1[sku]?.includes(seg) ? "/" : path;
	return "/";
}
/**
* Router base path without trailing slash ("" at domain root, "/cwsp" on IP path mount).
* WHY: absolute `/network` history entries drop the Fastify debugPath prefix and 404 on reload.
*/
function getHistoryBasePath() {
	try {
		const fromData = String(globalThis.document?.documentElement?.dataset?.cwspRouterBase || "").trim();
		if (fromData) return (fromData.startsWith("/") ? fromData : `/${fromData}`).replace(/\/+$/, "") || "";
		const baseHref = globalThis.document?.querySelector?.("base")?.getAttribute("href");
		if (baseHref && baseHref !== "/" && !baseHref.startsWith(".")) {
			const origin = globalThis.location?.origin || "http://localhost";
			return new URL(baseHref, origin).pathname.replace(/\/+$/, "") || "";
		}
		if (isDedicatedSkuHost()) return "";
		const pathname = String(globalThis.location?.pathname || "/");
		const re = new RegExp(`^/(${KNOWN_PATH_MOUNTS.join("|")})(?:/|$)`, "i");
		const m = pathname.match(re);
		if (m?.[1]) return `/${m[1].toLowerCase()}`;
	} catch {}
	return "";
}
/** Prefix an absolute app path with the history base (`/network` → `/cwsp/network`). */
function withHistoryBase(pathname) {
	const base = getHistoryBasePath();
	let path = String(pathname || "/").trim() || "/";
	if (!path.startsWith("/")) path = `/${path}`;
	if (!base) return path;
	if (path === base || path.startsWith(`${base}/`)) return path;
	const pathSeg = path.replace(/^\/+/, "").split("/")[0]?.toLowerCase() || "";
	const baseSeg = base.replace(/^\/+/, "").split("/")[0]?.toLowerCase() || "";
	if (baseSeg && pathSeg && isKnownPathMountSegment(baseSeg) && isKnownPathMountSegment(pathSeg) && pathSeg !== baseSeg) return path;
	if (path === "/") return `${base}/`;
	return `${base}${path}`;
}
/** Persist detected mount on `<html>` so later navigations stay scoped. */
function ensureHistoryBaseDataset() {
	const base = getHistoryBasePath();
	try {
		const el = globalThis.document?.documentElement;
		if (el && base) el.dataset.cwspRouterBase = base;
	} catch {}
	return base;
}
//#endregion
//#region ../../modules/projects/subsystem/src/boot/shell-preference.ts
var LS_BOOT_SHELL_LAST_ACTIVE = "rs-boot-shell-last-active";
//#endregion
//#region ../../modules/projects/subsystem/src/boot/native-socket.ts
var appendParams = (target, params) => {
	if (!params || typeof params !== "object") return;
	for (const [key, value] of Object.entries(params)) {
		if (!key || value === void 0 || value === null || value === "") continue;
		target.searchParams.set(key, String(value));
	}
};
/**
* Normalize user-entered endpoint origins and old `/socket.io` URLs to the native
* CWSP websocket endpoint while preserving route/auth query metadata.
*/
function normalizeWsEndpointUrl(rawUrl, query, auth) {
	const urlObj = new URL(rawUrl.includes("://") ? rawUrl : `https://${rawUrl}`);
	if (urlObj.protocol === "http:") urlObj.protocol = "ws:";
	else if (urlObj.protocol === "https:") urlObj.protocol = "wss:";
	else if (urlObj.protocol !== "ws:" && urlObj.protocol !== "wss:") urlObj.protocol = "wss:";
	if (!urlObj.pathname || urlObj.pathname === "/" || /^\/socket\.io\/?$/i.test(urlObj.pathname)) urlObj.pathname = "/ws";
	for (const staleKey of [
		"EIO",
		"transport",
		"sid"
	]) urlObj.searchParams.delete(staleKey);
	appendParams(urlObj, query);
	appendParams(urlObj, auth);
	return urlObj.toString();
}
var NativeSocket = class {
	url;
	options;
	connected = false;
	connecting = false;
	id = "";
	ws = null;
	listeners = /* @__PURE__ */ new Map();
	connectTimeout;
	constructor(url, options = {}) {
		this.url = url;
		this.options = options;
		this.connect();
	}
	connect() {
		try {
			const endpointUrl = normalizeWsEndpointUrl(this.url, this.options.query, this.options.auth);
			this.connecting = true;
			this.ws = new WebSocket(endpointUrl);
			this.ws.onopen = () => {
				this.connected = true;
				this.connecting = false;
				if (this.connectTimeout) clearTimeout(this.connectTimeout);
				this.emitLocal("connect");
			};
			this.ws.onclose = (event) => {
				this.connected = false;
				this.connecting = false;
				if (this.connectTimeout) clearTimeout(this.connectTimeout);
				this.emitLocal("disconnect", event.reason || "closed");
				this.emitLocal("close", event.code, event.reason);
			};
			this.ws.onerror = (error) => {
				this.connecting = false;
				this.emitLocal("connect_error", /* @__PURE__ */ new Error("WebSocket error"));
				this.emitLocal("error", error);
			};
			this.ws.onmessage = (event) => {
				if (event.data instanceof ArrayBuffer) {
					this.emitLocal("binary", event.data);
					return;
				}
				if (typeof Blob !== "undefined" && event.data instanceof Blob) {
					event.data.arrayBuffer().then((buf) => this.emitLocal("binary", buf));
					return;
				}
				try {
					const data = JSON.parse(String(event.data));
					if (data.event && data.payload) this.emitLocal(data.event, data.payload);
					else this.emitLocal("data", data);
				} catch {
					this.emitLocal("data", event.data);
				}
			};
			if (this.options.timeout) this.connectTimeout = setTimeout(() => {
				if (!this.connected) {
					this.connecting = false;
					this.ws?.close();
					this.emitLocal("connect_error", /* @__PURE__ */ new Error("timeout"));
				}
			}, this.options.timeout);
		} catch (err) {
			this.connecting = false;
			setTimeout(() => this.emitLocal("connect_error", err), 0);
		}
	}
	on(event, listener) {
		if (!this.listeners.has(event)) this.listeners.set(event, /* @__PURE__ */ new Set());
		this.listeners.get(event).add(listener);
	}
	off(event, listener) {
		this.listeners.get(event)?.delete(listener);
	}
	send(packet) {
		if (this.connected && this.ws) this.ws.send(typeof packet === "string" ? packet : JSON.stringify(packet));
	}
	/** Send legacy 8-byte AirPad binary frame (endpoint + Java {@code CwspBinaryAirpad} parity). */
	sendBinary(data) {
		if (!this.connected || !this.ws) return;
		this.ws.send(data);
	}
	/** @deprecated Prefer send(packet); kept so old callers still compile. */
	emit(_event, ...args) {
		this.send(args[0]);
	}
	emitLocal(event, ...args) {
		const handlers = this.listeners.get(event);
		if (handlers) for (const handler of handlers) handler(...args);
	}
	removeAllListeners() {
		this.listeners.clear();
	}
	close() {
		if (this.connectTimeout) clearTimeout(this.connectTimeout);
		if (this.ws) {
			this.ws.close();
			this.ws = null;
		}
		this.connected = false;
		this.connecting = false;
	}
	disconnect() {
		this.close();
	}
};
function createWsSocket(url, options) {
	return new NativeSocket(url, options);
}
//#endregion
//#region ../../modules/projects/subsystem/src/boot/native-coordinator-bridge.ts
/**
* Capacitor/CWSAndroid: route coordinator acts through Java {@code CwspWsClient} when it owns `/ws`.
* WHY: WebView hub connect is skipped to avoid duplicate clientId sessions; AirPad must use CwsBridge.
*
* CWSAndroid {@code CwsBridgePlugin} channels:
* - coordinator:act / coordinator:ask — JSON envelope → Java /ws fan-out
* - coordinator:binary — base64 legacy 8-byte frame (bytes 6–7 = perfTsLo)
* - coordinator:status — { connected, wsOpen, daemon }
* - runtime:reload-settings — soft-reconnect Java /ws
*/
var nativeConnectedCache = false;
var nativeStatusCheckedAt = 0;
var NATIVE_STATUS_TTL_MS = 1200;
var shouldUseNativeCoordinatorTransport = () => nativeShellOwnsExclusiveHubWebsocket() && isCapacitorCwsNativeShell$1() && isPreferNativeWebsocketEnabled();
var NATIVE_BRIDGE_TIMEOUT_MS = 6e3;
var refreshNativeCoordinatorStatus = async () => {
	if (!shouldUseNativeCoordinatorTransport()) {
		nativeConnectedCache = false;
		return false;
	}
	try {
		const result = await withTimeout(invokeCwsNative("coordinator:status", {}), NATIVE_BRIDGE_TIMEOUT_MS, "coordinator:status timed out");
		const connected = Boolean(result.echo?.connected ?? result.ok);
		nativeConnectedCache = connected;
		nativeStatusCheckedAt = Date.now();
		return connected;
	} catch {
		nativeConnectedCache = false;
		nativeStatusCheckedAt = Date.now();
		return false;
	}
};
/** After AirPad Save & Reconnect: nudge native {@code CwspRuntime.reloadSettings} when bridge supports it. */
var reconnectNativeCoordinatorTransport = async () => {
	if (!shouldUseNativeCoordinatorTransport()) return false;
	try {
		if (!(await withTimeout(invokeCwsNative("runtime:reload-settings", {}), NATIVE_BRIDGE_TIMEOUT_MS, "runtime:reload-settings timed out"))?.ok) {
			nativeConnectedCache = false;
			nativeStatusCheckedAt = Date.now();
			return false;
		}
		nativeConnectedCache = false;
		nativeStatusCheckedAt = 0;
		return refreshNativeCoordinatorStatus();
	} catch {
		nativeConnectedCache = false;
		nativeStatusCheckedAt = Date.now();
		return false;
	}
};
var isNativeCoordinatorConnected = () => {
	if (!shouldUseNativeCoordinatorTransport()) return false;
	if (Date.now() - nativeStatusCheckedAt > NATIVE_STATUS_TTL_MS) refreshNativeCoordinatorStatus();
	return nativeConnectedCache;
};
var nativeWirePayload = (what, payload) => {
	if (!shouldAnnotateCoordinatorPayload(what)) return payload ?? {};
	if (!payload || typeof payload !== "object" || Array.isArray(payload)) return payload ?? {};
	return annotateCoordinatorPayload(payload);
};
var sendNativeCoordinatorBinary = async (data) => {
	if (!shouldUseNativeCoordinatorTransport()) return false;
	const bytes = data instanceof Uint8Array ? data : new Uint8Array(data);
	let binary = "";
	for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i] ?? 0);
	const b64 = btoa(binary);
	try {
		const result = await invokeCwsNative("coordinator:binary", {
			data: b64,
			encoding: "base64"
		});
		const sent = Boolean(result?.sent ?? result.echo?.sent ?? result.ok);
		if (sent) {
			nativeConnectedCache = true;
			nativeStatusCheckedAt = Date.now();
		}
		return sent;
	} catch {
		nativeConnectedCache = false;
		nativeStatusCheckedAt = Date.now();
		return false;
	}
};
var setNativeAirMouse = async (active) => {
	if (!shouldUseNativeCoordinatorTransport()) return false;
	try {
		const result = await invokeCwsNative(active ? "airmouse:start" : "airmouse:stop", {});
		const echo = result.echo ?? {};
		const ok = Boolean(result.ok);
		if (ok) {
			nativeConnectedCache = true;
			nativeStatusCheckedAt = Date.now();
		}
		return active ? ok && echo.active !== false : ok;
	} catch {
		return false;
	}
};
var startNativeAirMouse = () => setNativeAirMouse(true);
var stopNativeAirMouse = () => setNativeAirMouse(false);
var sendNativeCoordinatorDispatch = async (input) => {
	const echo = (await invokeCwsNative("coordinator:dispatch", {
		what: input.what,
		payload: nativeWirePayload(input.what, input.payload),
		nodes: input.nodes ?? [],
		uuid: input.uuid ?? "",
		op: input.op
	})).echo ?? {};
	if (echo.result !== void 0) return echo.result;
	if (typeof echo.body === "string" && echo.body.trim()) try {
		const parsed = JSON.parse(echo.body);
		return parsed.result ?? parsed.payload ?? parsed.data ?? echo.body;
	} catch {
		return echo.body;
	}
	return echo.result ?? null;
};
var sendNativeCoordinatorEnvelope = async (input) => {
	if (!shouldUseNativeCoordinatorTransport()) return false;
	const channel = input.op === "ask" ? "coordinator:ask" : "coordinator:act";
	try {
		const result = await invokeCwsNative(channel, {
			what: input.what,
			payload: nativeWirePayload(input.what, input.payload),
			nodes: input.nodes ?? [],
			uuid: input.uuid ?? "",
			op: input.op
		});
		const sent = Boolean(result.echo?.sent ?? result.ok);
		if (sent) {
			nativeConnectedCache = true;
			nativeStatusCheckedAt = Date.now();
		}
		return sent;
	} catch {
		nativeConnectedCache = false;
		nativeStatusCheckedAt = Date.now();
		return false;
	}
};
//#endregion
//#region ../../modules/projects/subsystem/src/boot/websocket.ts
/**
* AirPad/remote transport hub for the frontend.
*
* This module owns the client-side WebSocket connection, secure-envelope
* wrapping, coordinator ask/act flows, clipboard bridging, and the candidate
* probing logic used to discover a reachable CWSP endpoint from web, PWA, or
* extension contexts.
*
* AI-READ: this file is a compatibility layer, not only a raw websocket
* wrapper. It preserves behavior for several runtimes whose network
* restrictions differ, especially Chromium extension pages versus normal tabs.
*/
var websocket_exports = /* @__PURE__ */ __exportAll({
	connectWS: () => connectWS,
	disconnectWS: () => disconnectWS,
	getLastServerClipboard: () => getLastServerClipboard,
	getWS: () => getWS,
	initWebSocket: () => initWebSocket,
	isWSConnected: () => isWSConnected,
	markTransportDisconnected: () => markTransportDisconnected,
	onServerClipboardUpdate: () => onServerClipboardUpdate,
	onVoiceResult: () => onVoiceResult,
	onWSConnectionChange: () => onWSConnectionChange,
	reconnectNativeCoordinatorTransport: () => reconnectNativeCoordinatorTransport,
	reconnectTransportAfterLifecycleResume: () => reconnectTransportAfterLifecycleResume,
	refreshNativeCoordinatorStatus: () => refreshNativeCoordinatorStatus,
	refreshTransportConnectionStatus: () => refreshTransportConnectionStatus,
	sendCoordinatorAct: () => sendCoordinatorAct,
	sendCoordinatorAsk: () => sendCoordinatorAsk,
	sendCoordinatorRequest: () => sendCoordinatorRequest,
	sendWsBinary: () => sendWsBinary,
	shouldUseNativeCoordinatorTransport: () => shouldUseNativeCoordinatorTransport,
	startNativeAirMouse: () => startNativeAirMouse,
	stopNativeAirMouse: () => stopNativeAirMouse
});
/** AirPad view removed — status DOM no longer exists; keep console breadcrumbs. */
var log = (msg) => {
	console.log("[ws]", msg);
};
var getWsStatusEl = () => null;
var socket = null;
var wsConnected = false;
var isConnecting = false;
/**
* Mirror live socket for page debuggers.
* WHY: never touch bare `window` — in MV3 service workers that identifier throws
* `ReferenceError: window is not defined` (even inside `typeof` guards after some bundlers).
*/
var mirrorSocketOnGlobal = (value) => {
	try {
		const g = globalThis;
		g.__socket = value;
		const w = g.window;
		if (w) w.__socket = value;
	} catch {}
};
var btnEl = null;
var wsConnectButton = null;
var connectAttemptId = 0;
/** Parallel candidate probes — close all on success or disconnect. */
var activeProbeSockets = /* @__PURE__ */ new Set();
var manualDisconnectRequested = false;
var autoReconnectAttempts = 0;
var autoReconnectTimer = null;
var lastWsCandidates = [];
var nextWsCandidateOffset = 0;
var localNetworkPermissionProbeDone = /* @__PURE__ */ new Set();
var AUTO_RECONNECT_BASE_DELAY_MS = 800;
/** WebSocket handshake timeout per candidate (dead hosts fail faster). */
var AIRPAD_PROBE_IO_TIMEOUT_MS = 4800;
/** Wall-clock cap per probe if connect_error is slow to fire. */
var AIRPAD_PROBE_HARD_CAP_MS = 5600;
/** Try this many candidates in parallel; first success wins. */
var AIRPAD_CANDIDATE_PARALLEL = 3;
var AIRPAD_VERBOSE_QUERY_KEY = "CWS_AIRPAD_VERBOSE_QUERY";
/** Coordinator ask/act wait — was 12s, tighter for snappier UI. */
var AIRPAD_COORDINATOR_TIMEOUT_MS = 8e3;
var clearAutoReconnectTimer = () => {
	if (!autoReconnectTimer) return;
	globalThis.clearTimeout(autoReconnectTimer);
	autoReconnectTimer = null;
};
var clearProbeTimer = (socketWithTimer) => {
	const probe = socketWithTimer;
	if (probe.__cwspProbeTimer) {
		globalThis.clearTimeout(probe.__cwspProbeTimer);
		delete probe.__cwspProbeTimer;
	}
};
/** CWSP v2 transport / route hint query keys (canonical `cwsp_*`; see network stack spec). */
var CWSP_ROUTE_QUERY = {
	via: "cwsp_via",
	localEndpoint: "cwsp_local_endpoint",
	route: "cwsp_route",
	routeTarget: "cwsp_route_target",
	hop: "cwsp_hop",
	host: "cwsp_host",
	target: "cwsp_target",
	targetPort: "cwsp_target_port",
	viaPort: "cwsp_via_port",
	protocol: "cwsp_protocol"
};
var shouldUseVerboseAirpadQuery = () => {
	try {
		const local = String(globalThis?.localStorage?.getItem?.(AIRPAD_VERBOSE_QUERY_KEY) || "").trim().toLowerCase();
		if ([
			"1",
			"true",
			"yes",
			"on"
		].includes(local)) return true;
	} catch {}
	const runtimeFlag = String(globalThis?.[AIRPAD_VERBOSE_QUERY_KEY] || "").trim().toLowerCase();
	return [
		"1",
		"true",
		"yes",
		"on"
	].includes(runtimeFlag);
};
var wsConnectionHandlers = /* @__PURE__ */ new Set();
var lastServerClipboardText = "";
var clipboardHandlers = /* @__PURE__ */ new Set();
var voiceResultHandlers = /* @__PURE__ */ new Set();
var FRAME_PROTOCOL_WS = "ws";
var WS_TRANSPORT = "ws";
var normalizeCoordinatorProtocol = (value) => {
	const raw = String(value || "").trim().toLowerCase();
	if (!raw) return FRAME_PROTOCOL_WS;
	if (raw === "ws" || raw === "wss" || raw === "socket" || raw === "socket.io" || raw === "socketio") return FRAME_PROTOCOL_WS;
	return raw;
};
var textEncoder = new TextEncoder();
var textDecoder = new TextDecoder();
var aesKeyCache = /* @__PURE__ */ new Map();
var coordinatorPending = /* @__PURE__ */ new Map();
var queuedCoordinatorActs = [];
var MAX_QUEUED_COORDINATOR_ACTS = 128;
var flushQueuedCoordinatorActs = () => {
	if (!socket?.connected) return;
	while (queuedCoordinatorActs.length > 0) {
		const packet = queuedCoordinatorActs.shift();
		if (!packet) continue;
		emitCoordinatorPacket(packet);
	}
};
var isRealtimeInputAct = (what) => {
	const normalized = String(what || "").trim().toLowerCase();
	return normalized === "mouse:move" || normalized === "mouse:scroll";
};
var ensureCoordinatorSocketConnected = async (timeoutMs = 7e3) => {
	if (shouldUseNativeCoordinatorTransport()) return isNativeCoordinatorConnected() || await refreshNativeCoordinatorStatus();
	if (socket?.connected) return true;
	connectWS();
	return await new Promise((resolve) => {
		let done = false;
		const finish = (value) => {
			if (done) return;
			done = true;
			try {
				off?.();
			} catch {}
			globalThis.clearTimeout(timeoutId);
			resolve(value);
		};
		const off = onWSConnectionChange((connected) => {
			if (connected) finish(true);
		});
		const timeoutId = globalThis.setTimeout(() => finish(Boolean(socket?.connected)), timeoutMs);
	});
};
/** Return the current live WebSocket instance, if any. */
function getWS() {
	return socket;
}
/** Report whether the primary transport socket is currently connected. */
function isWSConnected() {
	if (shouldUseNativeCoordinatorTransport()) return isNativeCoordinatorConnected();
	return wsConnected;
}
/**
* Subscribe to transport connectivity updates.
*
* WHY: several AirPad UI widgets and retry flows need a shared source of truth
* without directly depending on the socket object.
*/
function onWSConnectionChange(handler) {
	wsConnectionHandlers.add(handler);
	try {
		handler(isWSConnected());
	} catch {}
	return () => wsConnectionHandlers.delete(handler);
}
/** Refresh UI + subscribers from live WebView socket or native {@code CwspRuntime} status. */
async function refreshTransportConnectionStatus() {
	if (shouldUseNativeCoordinatorTransport()) {
		const connected = await refreshNativeCoordinatorStatus();
		setWsStatus(connected);
		return connected;
	}
	const connected = Boolean(wsConnected || socket?.connected);
	setWsStatus(connected);
	return connected;
}
/** Force UI/subscribers to disconnected when native bridge reload failed before a status refresh is trustworthy. */
function markTransportDisconnected() {
	setWsStatus(false);
}
function getLastServerClipboard() {
	return lastServerClipboardText;
}
function onServerClipboardUpdate(handler) {
	clipboardHandlers.add(handler);
	return () => clipboardHandlers.delete(handler);
}
function onVoiceResult(handler) {
	voiceResultHandlers.add(handler);
	return () => voiceResultHandlers.delete(handler);
}
function notifyClipboardHandlers(text, meta) {
	for (const h of clipboardHandlers) try {
		h(text, meta);
	} catch {}
}
/** Suppress echo when applying remote text to the device clipboard vs. push polling. */
var CLIPBOARD_ECHO_SUPPRESS_MS = 3500;
var lastClipboardPushSent = "";
var lastClipboardPushSentAt = 0;
var lastClipboardWrittenFromRemote = "";
var clipboardEchoSuppressUntil = 0;
var lastInboundClipboardNormalized = "";
var lastInboundClipboardAt = 0;
var clipboardPushIntervalId = null;
var stopClipboardPushLoop = () => {
	if (clipboardPushIntervalId) {
		globalThis.clearInterval(clipboardPushIntervalId);
		clipboardPushIntervalId = null;
	}
};
var startClipboardPushLoop = () => {
	stopClipboardPushLoop();
	if (!isPushLocalClipboardToLanEnabled() || !isShellRemoteClipboardBridgeEnabled()) return;
	const ms = getClipboardPushIntervalMs();
	clipboardPushIntervalId = globalThis.setInterval(() => {
		tickLocalClipboardPush();
	}, ms);
};
async function tickLocalClipboardPush() {
	if (!socket?.connected) return;
	if (!isShellRemoteClipboardBridgeEnabled() || !isPushLocalClipboardToLanEnabled()) return;
	const entries = getClipboardBroadcastWireTargets();
	if (!entries.length) return;
	try {
		const text = await readClipboardTextFromDevice();
		const t = String(text ?? "").trim();
		if (!t) return;
		const now = Date.now();
		if (now < clipboardEchoSuppressUntil && t === lastClipboardWrittenFromRemote) return;
		if (t === lastClipboardPushSent && now - lastClipboardPushSentAt < CLIPBOARD_ECHO_SUPPRESS_MS) return;
		lastClipboardPushSent = t;
		lastClipboardPushSentAt = now;
		const groups = groupWireTargetsByAccessToken(entries, getWireAccessToken());
		for (const g of groups) sendCoordinatorAct("clipboard:update", { text: t }, g.nodeIds, { accessToken: g.accessToken });
	} catch {}
}
async function applyIncomingClipboardText(text, meta) {
	if (!isShellRemoteClipboardBridgeEnabled()) return;
	const t = typeof text === "string" ? text : "";
	const normalized = t.trim();
	if (normalized.toLowerCase().startsWith("data:image/")) {
		await applyIncomingClipboardImage({
			mimeType: "image/png",
			data: normalized
		}, meta);
		return;
	}
	const now = Date.now();
	if (normalized && normalized === lastInboundClipboardNormalized && now - lastInboundClipboardAt < CLIPBOARD_ECHO_SUPPRESS_MS) return;
	lastInboundClipboardNormalized = normalized;
	lastInboundClipboardAt = now;
	lastServerClipboardText = t;
	notifyClipboardHandlers(t, meta);
	if (!isApplyRemoteClipboardToDeviceEnabled() || !normalized) return;
	if (normalized === lastClipboardWrittenFromRemote && now < clipboardEchoSuppressUntil) return;
	try {
		await writeClipboardTextToDevice(normalized);
		lastClipboardWrittenFromRemote = normalized;
		lastClipboardPushSent = normalized;
		lastClipboardPushSentAt = now;
		clipboardEchoSuppressUntil = now + CLIPBOARD_ECHO_SUPPRESS_MS;
	} catch (error) {
		console.warn("[cwsp:clipboard] device write failed", {
			length: t.length,
			source: meta?.source,
			error: describeError(error)
		});
	}
}
async function applyIncomingClipboardImage(asset, meta) {
	if (!isShellRemoteClipboardBridgeEnabled()) return;
	const data = String(asset.data ?? "").trim();
	if (!data) return;
	const mimeType = String(asset.mimeType || "image/png").trim() || "image/png";
	const dedupeKey = asset.hash?.trim() || data.slice(0, 96);
	const now = Date.now();
	if (dedupeKey && dedupeKey === lastInboundClipboardNormalized && now - lastInboundClipboardAt < CLIPBOARD_ECHO_SUPPRESS_MS) return;
	lastInboundClipboardNormalized = dedupeKey;
	lastInboundClipboardAt = now;
	notifyClipboardHandlers("", meta);
	if (!isApplyRemoteClipboardToDeviceEnabled()) return;
	if (dedupeKey === lastClipboardWrittenFromRemote && now < clipboardEchoSuppressUntil) return;
	try {
		await writeClipboardImageToDevice(data, mimeType, asset.hash);
		lastClipboardWrittenFromRemote = dedupeKey;
		lastClipboardPushSent = dedupeKey;
		lastClipboardPushSentAt = now;
		clipboardEchoSuppressUntil = now + CLIPBOARD_ECHO_SUPPRESS_MS;
	} catch (error) {
		console.warn("[cwsp:clipboard] device image write failed", {
			mimeType,
			hash: asset.hash,
			source: meta?.source,
			error: describeError(error)
		});
	}
}
function safeJson(value) {
	try {
		return JSON.stringify(value);
	} catch {
		return String(value);
	}
}
var extractClipboardText = (value) => {
	if (typeof value === "string") return value;
	if (!value || typeof value !== "object") return "";
	const record = value;
	for (const key of [
		"text",
		"content",
		"body"
	]) {
		const direct = record[key];
		if (typeof direct === "string") return direct;
	}
	if (typeof record.result === "string") return record.result;
	const nested = record.payload ?? record.data;
	if (nested && nested !== value) {
		const inner = extractClipboardText(nested);
		if (inner) return inner;
	}
	return "";
};
var isInboundClipboardWhat = (what) => {
	const normalized = String(what || "").trim().toLowerCase();
	return normalized === "clipboard:update" || normalized === "clipboard:write" || normalized.startsWith("airpad:clipboard:");
};
var extractClipboardTextFromPacket = (packet) => {
	const fromPayload = extractClipboardText(packet.payload ?? packet.data ?? packet.result ?? packet.results);
	if (fromPayload) return fromPayload;
	return extractClipboardText(packet);
};
var extractClipboardAssetFromPacket = (packet) => {
	const carriers = [
		packet.payload,
		packet.data,
		packet.result,
		packet.results,
		packet
	];
	for (const carrier of carriers) {
		if (!carrier || typeof carrier !== "object") continue;
		const rec = carrier;
		const asset = rec.asset ?? rec.dataAsset ?? rec.file ?? rec.image;
		if (!asset || typeof asset !== "object") continue;
		const row = asset;
		const data = typeof row.data === "string" ? row.data.trim() : "";
		if (!data) continue;
		const mimeType = typeof row.mimeType === "string" && row.mimeType.trim() || typeof row.type === "string" && row.type.trim() || "image/png";
		if (!mimeType.toLowerCase().startsWith("image/")) continue;
		return {
			hash: typeof row.hash === "string" ? row.hash.trim() : "",
			mimeType,
			data
		};
	}
	return null;
};
var getCoordinatorPacketSenderId = (packet) => {
	const p = packet;
	if (!p || typeof p !== "object") return "";
	return String(p.from || p.byId || p.sender || "").trim();
};
var inferPacketPurpose = (what) => {
	const normalized = String(what || "").trim().toLowerCase();
	if (normalized.startsWith("clipboard:")) return "clipboard";
	if (normalized.startsWith("files:")) return "storage";
	if (normalized.startsWith("mouse:")) return "mouse";
	if (normalized.startsWith("keyboard:")) return "input";
	if (normalized.startsWith("airpad:")) return "airpad";
	if (normalized.startsWith("sms:")) return "sms";
	if (normalized.startsWith("contacts:")) return "contact";
	if (normalized.startsWith("notification:") || normalized.startsWith("notifications:")) return "general";
	return "general";
};
var describeError = (error) => {
	if (!error) return String(error);
	if (typeof error === "string") return error;
	if (error instanceof Error) return `${error.name}: ${error.message}`;
	return safeJson(error);
};
function getTransportMode() {
	return getAirPadTransportMode() === "secure" ? "secure" : "plaintext";
}
var fromBase64 = (value) => {
	try {
		const binary = atob(value);
		const bytes = new Uint8Array(binary.length);
		for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
		return bytes;
	} catch {
		return null;
	}
};
var isSignedEnvelope = (value) => typeof value === "object" && value !== null && typeof value.cipher === "string" && typeof value.sig === "string";
var toSafeObject = (value) => {
	if (!value || typeof value !== "string") return null;
	try {
		return JSON.parse(value);
	} catch {
		return null;
	}
};
var shouldAutoReconnectAfterDisconnect = (reason) => {
	if (!reason) return true;
	if (reason === "io client disconnect" || reason === "forced close") return false;
	return true;
};
var shouldRotateCandidateOnDisconnect = (reason) => {
	if (!reason) return true;
	if (reason === "io server disconnect" || reason === "io client disconnect") return false;
	return true;
};
var getSecret = () => (getAirPadTransportSecret() || "").trim();
var getClientId = () => {
	return sanitizeFleetSelfWireNodeId((getAirPadClientId() || "").trim()) || "airpad-client";
};
var getClientToken = () => (getAssociatedClientToken() || "").trim();
var getWireAccessToken = () => (getAccessToken() || "").trim();
var getCoordinatorNodes = () => {
	return wireTargetNodeIds(parseWireTargetList(getRemoteRouteTarget().trim()));
};
var nextPacketId = () => {
	if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
	return `airpad-${Date.now()}-${Math.random().toString(16).slice(2)}`;
};
var isCoordinatorPacket = (value) => {
	return !!value && typeof value === "object" && ("op" in value || "what" in value || "uuid" in value || "result" in value || "error" in value);
};
var mapFrameOpToRuntimeOp = (value) => {
	if (value === "request") return "ask";
	if (value === "response") return "result";
	if (value === "signal" || value === "notify" || value === "redirect") return "act";
	return value;
};
var mapRuntimeOpToFrameOp = (value) => {
	return value;
};
var toCanonicalCoordinatorPacket = (packet) => {
	const clientId = getClientId();
	const clientToken = getClientToken();
	const wireAccessToken = (typeof packet.accessToken === "string" && packet.accessToken.trim() ? packet.accessToken.trim() : typeof packet.airpadToken === "string" && packet.airpadToken.trim() ? packet.airpadToken.trim() : "") || getWireAccessToken();
	const sender = String(packet.sender || packet.byId || packet.from || clientId || "").trim() || void 0;
	const from = String(packet.from || sender || "").trim() || void 0;
	const byId = String(packet.byId || sender || "").trim() || void 0;
	const destinations = Array.isArray(packet.destinations) && packet.destinations.length ? packet.destinations : Array.isArray(packet.nodes) ? packet.nodes : getCoordinatorNodes();
	const uuid = typeof packet.uuid === "string" && packet.uuid.trim() ? packet.uuid.trim() : nextPacketId();
	const now = Date.now();
	return {
		...packet,
		op: mapRuntimeOpToFrameOp(packet.op),
		type: String(packet.type || packet.what || "").trim() || packet.what,
		protocol: normalizeCoordinatorProtocol(packet.protocol),
		transport: String(packet.transport || WS_TRANSPORT).trim() || WS_TRANSPORT,
		purpose: String(packet.purpose || inferPacketPurpose(String(packet.what || packet.type || ""))).trim() || "general",
		sender,
		byId,
		from,
		nodes: destinations,
		destinations,
		ids: typeof packet.ids === "object" && packet.ids != null ? packet.ids : {
			byId,
			from,
			sender,
			destinations
		},
		urls: Array.isArray(packet.urls) && packet.urls.length ? packet.urls : [getRemoteHost()],
		tokens: Array.isArray(packet.tokens) && packet.tokens.length ? packet.tokens : clientToken ? [clientToken] : [],
		token: packet.token || clientToken || void 0,
		userKey: typeof packet.userKey === "string" && packet.userKey.trim() ? packet.userKey : clientToken || void 0,
		accessToken: wireAccessToken || void 0,
		flags: {
			...packet.flags,
			canonicalV2: true
		},
		uuid,
		timestamp: Number(packet.timestamp || 0) > 0 ? Number(packet.timestamp) : now
	};
};
var handleCoordinatorPacket = async (packet) => {
	const op = mapFrameOpToRuntimeOp(packet.op);
	const what = (packet.what || packet.type || "").trim();
	const uuid = typeof packet.uuid === "string" ? packet.uuid : "";
	if (uuid && coordinatorPending.has(uuid)) {
		const pending = coordinatorPending.get(uuid);
		if (pending) {
			clearTimeout(pending.timeoutId);
			coordinatorPending.delete(uuid);
			if (op === "error" || packet.error !== void 0) pending.reject(packet.error ?? {
				ok: false,
				error: "Unknown coordinator error"
			});
			else pending.resolve(packet.result ?? packet.results);
		}
		return;
	}
	if (op === "ask" && what === "clipboard:get") {
		try {
			const text = await readClipboardTextFromDevice();
			emitCoordinatorPacket({
				...buildCoordinatorPacket("result", what, null, {
					uuid,
					nodes: packet.from ? [packet.from] : void 0
				}),
				result: typeof text === "string" ? text : String(text || "")
			});
		} catch (error) {
			emitCoordinatorPacket({
				...buildCoordinatorPacket("error", what, null, {
					uuid,
					nodes: packet.from ? [packet.from] : void 0
				}),
				error: error?.message || String(error)
			});
		}
		return;
	}
	if (op === "act" && what) {
		const category = isInboundClipboardWhat(what) ? "clipboard" : inferWireDedupeCategory(what);
		if (packetWireDedupeGuard.shouldSuppress(packet, category)) return;
	}
	if (isInboundClipboardWhat(what)) {
		if (!isClipboardSenderAllowedForInbound(getCoordinatorPacketSenderId(packet))) return;
		const clipboardPayload = packet.payload ?? packet.data ?? packet.result ?? packet.results;
		const asset = extractClipboardAssetFromPacket(packet);
		if (asset) {
			applyIncomingClipboardImage(asset, { source: typeof clipboardPayload === "object" && clipboardPayload ? String(clipboardPayload.source || "") : void 0 });
			return;
		}
		applyIncomingClipboardText(extractClipboardTextFromPacket(packet), { source: typeof clipboardPayload === "object" && clipboardPayload ? String(clipboardPayload.source || "") : void 0 });
		return;
	}
	if (what === "files:offer" || what === "files:error") {
		const filesPayload = packet.payload ?? packet.data ?? packet.result ?? packet.results;
		try {
			globalThis.dispatchEvent(new CustomEvent("cws:filesIncomingOffer", { detail: {
				what,
				payload: filesPayload,
				sender: getCoordinatorPacketSenderId(packet),
				uuid,
				from: packet.from
			} }));
		} catch {}
		return;
	}
};
/** Emit one already-built coordinator packet if the live socket is ready. */
var emitCoordinatorPacket = (packet) => {
	if (shouldUseNativeCoordinatorTransport()) {
		const what = String(packet.what || packet.type || "");
		const payload = packet.payload ?? packet.data ?? {};
		const nodes = Array.isArray(packet.nodes) ? packet.nodes.map(String) : void 0;
		sendNativeCoordinatorEnvelope({
			op: packet.op === "ask" || packet.op === "request" ? "ask" : "act",
			what,
			payload,
			nodes,
			uuid: typeof packet.uuid === "string" ? packet.uuid : void 0
		});
		return isNativeCoordinatorConnected();
	}
	if (!socket || !socket.connected) return false;
	socket.send(toCanonicalCoordinatorPacket(packet));
	return true;
};
/** Normalize the frontend's higher-level action/request inputs into the shared coordinator packet shape. */
var buildCoordinatorPacket = (op, what, payload, options = {}) => {
	const clientId = getClientId();
	const clientToken = getClientToken();
	const accessTok = options.accessToken !== void 0 ? String(options.accessToken).trim() || getWireAccessToken() : getWireAccessToken();
	return annotatePacketWireHash(annotatePacketWireTime64({
		op: mapRuntimeOpToFrameOp(op),
		what,
		type: what,
		purpose: inferPacketPurpose(what),
		protocol: FRAME_PROTOCOL_WS,
		transport: WS_TRANSPORT,
		payload,
		nodes: options.nodes ?? getCoordinatorNodes(),
		destinations: options.nodes ?? getCoordinatorNodes(),
		uuid: options.uuid,
		sender: clientId,
		byId: clientId,
		from: clientId,
		ids: {
			byId: clientId,
			from: clientId,
			sender: clientId,
			destinations: options.nodes ?? getCoordinatorNodes()
		},
		urls: [getRemoteHost()],
		tokens: clientToken ? [clientToken] : [],
		flags: { canonicalV2: true },
		token: clientToken || void 0,
		userKey: clientToken || void 0,
		accessToken: accessTok || void 0,
		timestamp: Date.now()
	}));
};
var getAesKey = async (secret) => {
	if (!secret || !globalThis.crypto?.subtle) return null;
	if (aesKeyCache.has(secret)) return aesKeyCache.get(secret) || null;
	const material = textEncoder.encode(secret);
	const digest = await globalThis.crypto.subtle.digest("SHA-256", material);
	const key = await globalThis.crypto.subtle.importKey("raw", digest, "AES-GCM", false, ["encrypt", "decrypt"]);
	aesKeyCache.set(secret, key);
	return key;
};
var unwrapSignedPayload = async (envelope) => {
	if (!isSignedEnvelope(envelope)) return envelope;
	const secret = getSecret();
	const cipherBytes = fromBase64(envelope.cipher);
	if (!cipherBytes) return envelope;
	if (!secret || !globalThis.crypto?.subtle) return toSafeObject(textDecoder.decode(cipherBytes)) ?? envelope;
	const key = await getAesKey(secret);
	if (!key) return envelope;
	if (cipherBytes.length < 28) return toSafeObject(textDecoder.decode(cipherBytes)) ?? envelope;
	const iv = cipherBytes.slice(0, 12);
	const encrypted = cipherBytes.slice(12);
	try {
		const decrypted = new Uint8Array(await globalThis.crypto.subtle.decrypt({
			name: "AES-GCM",
			iv
		}, key, encrypted));
		return toSafeObject(textDecoder.decode(decrypted)) ?? envelope;
	} catch {
		return envelope;
	}
};
var unwrapIncomingPayload = async (payload) => {
	if (!isSignedEnvelope(payload)) return payload;
	if (getTransportMode() !== "secure") return payload;
	return unwrapSignedPayload(payload);
};
/** Strip `L-` node id prefix (e.g. `L-192.168.0.110` → `192.168.0.110`) for IP / LNA checks. */
function stripWireEndpointIdPrefix(host) {
	const t = host.trim();
	return /^l-/i.test(t) ? t.slice(2).trim() : t;
}
/** Loopback labels that are invalid as CWSP route hints when dialing a LAN page origin. */
function isLoopbackHost(host) {
	const b = stripWireEndpointIdPrefix(host.trim()).toLowerCase();
	return b === "localhost" || b === "127.0.0.1" || b === "::1";
}
function isPrivateOrLocalTarget(host) {
	if (!host) return false;
	const bare = stripWireEndpointIdPrefix(host);
	if (bare === "localhost" || host === "localhost") return true;
	if (host.endsWith(".local")) return true;
	if (!/^\d{1,3}(?:\.\d{1,3}){3}$/.test(bare)) return false;
	return bare.startsWith("10.") || bare.startsWith("192.168.") || /^172\.(1[6-9]|2\d|3[01])\./.test(bare) || bare.startsWith("127.") || /^100\.(6[4-9]|[7-9]\d|1[01]\d|12[0-7])\./.test(bare);
}
var getCurrentOriginHostname = () => {
	try {
		return String(new URL(location.href).hostname).toLowerCase();
	} catch {
		return "";
	}
};
var isNetworkFetchAllowed = (rawUrl) => {
	if (!rawUrl || typeof rawUrl !== "string") return false;
	let parsed;
	try {
		parsed = new URL(rawUrl, location.href);
	} catch {
		return false;
	}
	const host = parsed.hostname.toLowerCase();
	const protocol = parsed.protocol.toLowerCase();
	if (protocol !== "http:" && protocol !== "https:") return false;
	const localPageHost = getCurrentOriginHostname();
	return isPrivateOrLocalTarget(host) || host === "localhost" || host === localPageHost;
};
var normalizeNetworkFetchHeaders = (headers) => {
	const next = {};
	if (!headers) return next;
	for (const [key, value] of Object.entries(headers)) {
		if (typeof key !== "string" || !key.trim()) continue;
		if (typeof value !== "string") continue;
		next[key] = value;
	}
	return next;
};
var responseHeadersToObject = (value) => {
	const result = {};
	value.forEach((headerValue, headerName) => {
		result[headerName] = headerValue;
	});
	return result;
};
var handleServerNetworkFetchRequest = async (request) => {
	const requestId = typeof request?.requestId === "string" ? request.requestId.trim() : "";
	const method = typeof request?.method === "string" ? request.method.toUpperCase() : "GET";
	const url = typeof request?.url === "string" ? request.url : "";
	const timeoutMsRaw = request && typeof request.timeoutMs === "number" ? request.timeoutMs : 12e3;
	const timeoutMs = Number.isFinite(timeoutMsRaw) && timeoutMsRaw > 0 ? Math.min(Math.max(Math.round(timeoutMsRaw), 1e3), 6e4) : 12e3;
	if (!requestId) return {
		ok: false,
		status: 400,
		statusText: "Bad Request",
		error: "Missing requestId"
	};
	if (!isNetworkFetchAllowed(url)) return {
		requestId,
		ok: false,
		status: 400,
		statusText: "Bad Request",
		error: "URL not allowed"
	};
	const controller = new AbortController();
	const timer = globalThis.setTimeout(() => controller.abort(), timeoutMs);
	try {
		const headers = normalizeNetworkFetchHeaders(request?.headers);
		const hasBody = !["GET", "HEAD"].includes(method);
		const payload = request?.body;
		const body = hasBody ? typeof payload === "string" ? payload : safeJson(payload) : void 0;
		const response = await fetch(url, {
			method,
			headers,
			body,
			signal: controller.signal
		});
		const responseBody = await response.text();
		return {
			requestId,
			ok: response.ok,
			status: response.status,
			statusText: response.statusText,
			headers: responseHeadersToObject(response.headers),
			body: responseBody
		};
	} catch (error) {
		return {
			requestId,
			ok: false,
			status: 0,
			statusText: "Network Error",
			error: describeError(error)
		};
	} finally {
		clearTimeout(timer);
	}
};
/**
* Best-effort Chrome Local Network Access warm-up for private-IP targets.
*
* WHY: probing `/lna-probe` early makes permission/PNA failures visible before
* the heavier WebSocket candidate rotation starts reporting generic timeouts.
*/
async function tryRequestLocalNetworkPermission(origin, host) {
	if (!origin || !host) return;
	if (!isPrivateOrLocalTarget(host)) return;
	if (location.protocol !== "https:") return;
	if (localNetworkPermissionProbeDone.has(origin)) return;
	localNetworkPermissionProbeDone.add(origin);
	try {
		await fetch(`${origin}/lna-probe`, {
			method: "GET",
			mode: "cors",
			cache: "no-store",
			credentials: "omit",
			targetAddressSpace: "local"
		});
	} catch (error) {
		log(`LNA probe: ${String(error?.message || error || "") || "request failed"}`);
	}
}
var coordinatorWirePayload = (what, payload) => {
	if (!shouldAnnotateCoordinatorPayload(what)) return payload;
	if (!payload || typeof payload !== "object" || Array.isArray(payload)) return payload;
	return annotateCoordinatorPayload(payload);
};
/** Fire-and-forget coordinator action. */
function sendCoordinatorAct(what, payload, nodes, opts) {
	const packet = buildCoordinatorPacket("act", what, coordinatorWirePayload(what, payload), {
		nodes,
		accessToken: opts?.accessToken
	});
	if (emitCoordinatorPacket(packet)) return true;
	if (isRealtimeInputAct(what)) {
		connectWS();
		return false;
	}
	if (queuedCoordinatorActs.length >= MAX_QUEUED_COORDINATOR_ACTS) queuedCoordinatorActs.shift();
	queuedCoordinatorActs.push(packet);
	connectWS();
	return true;
}
/** Send compact binary AirPad frame when JSON act would be heavier (Java/CWSP legacy path). */
function sendWsBinary(data) {
	if (shouldUseNativeCoordinatorTransport()) {
		sendNativeCoordinatorBinary(data);
		return isNativeCoordinatorConnected();
	}
	if (!socket?.connected) return false;
	const sock = socket;
	if (typeof sock.sendBinary === "function") {
		sock.sendBinary(data);
		return true;
	}
	return false;
}
/** Send a request/response-style coordinator ask and wait for one correlated reply. */
function sendCoordinatorAsk(what, payload, nodes) {
	return new Promise((resolve, reject) => {
		(async () => {
			if (shouldUseNativeCoordinatorTransport()) {
				try {
					if (!await ensureCoordinatorSocketConnected()) {
						reject({
							ok: false,
							error: "Native WS not connected"
						});
						return;
					}
					resolve(await sendNativeCoordinatorDispatch({
						op: "ask",
						what,
						payload: coordinatorWirePayload(what, payload),
						nodes
					}));
				} catch (error) {
					reject({
						ok: false,
						error: String(error?.message || error)
					});
				}
				return;
			}
			if (!await ensureCoordinatorSocketConnected() || !socket?.connected) {
				reject({
					ok: false,
					error: "WS not connected"
				});
				return;
			}
			const uuid = nextPacketId();
			const timeoutId = globalThis.setTimeout(() => {
				coordinatorPending.delete(uuid);
				reject({
					ok: false,
					error: `Timeout waiting for ${what}`
				});
			}, AIRPAD_COORDINATOR_TIMEOUT_MS);
			coordinatorPending.set(uuid, {
				resolve,
				reject,
				timeoutId
			});
			emitCoordinatorPacket(buildCoordinatorPacket("ask", what, coordinatorWirePayload(what, payload), {
				nodes,
				uuid
			}));
		})();
	});
}
/** Legacy request helper that currently routes through the same transport path as `act`. */
function sendCoordinatorRequest(what, payload, nodes) {
	return new Promise((resolve, reject) => {
		(async () => {
			if (shouldUseNativeCoordinatorTransport()) {
				try {
					if (!await ensureCoordinatorSocketConnected()) {
						reject({
							ok: false,
							error: "Native WS not connected"
						});
						return;
					}
					resolve(await sendNativeCoordinatorDispatch({
						op: "act",
						what,
						payload: coordinatorWirePayload(what, payload),
						nodes
					}));
				} catch (error) {
					reject({
						ok: false,
						error: String(error?.message || error)
					});
				}
				return;
			}
			if (!await ensureCoordinatorSocketConnected() || !socket?.connected) {
				reject({
					ok: false,
					error: "WS not connected"
				});
				return;
			}
			const uuid = nextPacketId();
			const timeoutId = globalThis.setTimeout(() => {
				coordinatorPending.delete(uuid);
				reject({
					ok: false,
					error: `Timeout waiting for ${what}`
				});
			}, AIRPAD_COORDINATOR_TIMEOUT_MS);
			coordinatorPending.set(uuid, {
				resolve,
				reject,
				timeoutId
			});
			emitCoordinatorPacket(buildCoordinatorPacket("act", what, coordinatorWirePayload(what, payload), {
				nodes,
				uuid
			}));
		})();
	});
}
function updateButtonLabel() {
	if (!btnEl) return;
	if (isConnecting || socket && socket.connected === false) {
		btnEl.textContent = "WS…";
		return;
	}
	if (wsConnected || socket && socket.connected) btnEl.textContent = "WS ✓";
	else btnEl.textContent = "WS ↔";
}
function logWsState(event, payload) {
	const trimmedPayload = payload.trim();
	log(`[ws-state] event=${event}${trimmedPayload ? ` ${trimmedPayload}` : ""}`);
}
var WS_STATUS_TLS_HINT_CLASS = "ws-status-tls-hint";
function setWsStatusTlsHint(originUrl) {
	const wsStatusEl = getWsStatusEl();
	if (!wsStatusEl) return;
	wsStatusEl.textContent = isCapacitorNativeShell() ? `TLS failed — install your CA in Android Settings → Security → Encryption & credentials (or use Remote host = name on the cert). Try HTTP :8080 if the server allows. ${originUrl}` : `Untrusted cert — open ${originUrl} in this browser, accept, then retry`;
	wsStatusEl.classList.add(WS_STATUS_TLS_HINT_CLASS);
	wsStatusEl.classList.remove("ws-status-ok");
	wsStatusEl.classList.add("ws-status-bad");
}
/** When the server cert is issued for a hostname, https://&lt;public-ip&gt; fails before the user can "trust" it. */
function setWsStatusTlsHostnameHint(hostname) {
	const wsStatusEl = getWsStatusEl();
	if (wsStatusEl) {
		wsStatusEl.textContent = `TLS name mismatch for raw IP — set Remote host to ${hostname} (name on certificate), keep ports as needed`;
		wsStatusEl.classList.add(WS_STATUS_TLS_HINT_CLASS);
		wsStatusEl.classList.remove("ws-status-ok");
		wsStatusEl.classList.add("ws-status-bad");
	}
}
function setWsStatus(connected) {
	wsConnected = connected;
	if (connected) flushQueuedCoordinatorActs();
	const wsStatusEl = getWsStatusEl();
	if (wsStatusEl) {
		wsStatusEl.classList.remove(WS_STATUS_TLS_HINT_CLASS);
		if (connected) {
			wsStatusEl.textContent = "connected";
			wsStatusEl.classList.remove("ws-status-bad");
			wsStatusEl.classList.add("ws-status-ok");
		} else {
			wsStatusEl.textContent = "disconnected";
			wsStatusEl.classList.remove("ws-status-ok");
			wsStatusEl.classList.add("ws-status-bad");
		}
	}
	updateButtonLabel();
	for (const handler of wsConnectionHandlers) try {
		handler(connected);
	} catch {}
}
function handleServerMessage(msg) {
	if (msg.type === "voice_result" || msg.type === "voice_error") {
		const text = msg.error || msg.message || "Actions: " + JSON.stringify(msg.actions || []);
		for (const handler of voiceResultHandlers) try {
			handler({
				text,
				type: msg.type === "voice_error" ? "voice_error" : "voice_result",
				actions: msg.actions,
				error: msg.error
			});
		} catch {}
		log("Voice result: " + text);
	}
}
/**
* Tear down the hub transport and immediately run a fresh {@link connectWS} probe.
* Used when the PWA returns from background / bfcache: OS often kills WebSockets while
* a soft resume reconnect restores endpoint clipboard/coordinator without requiring a manual WS tap.
*/
function reconnectTransportAfterLifecycleResume(reason) {
	if (!globalThis.window) return;
	try {
		const surface = String(document.documentElement?.dataset?.cwspSurface || "").toLowerCase();
		const host = String(location.hostname || "").toLowerCase();
		if (surface === "cwsp-control" || host === "cwsp.u2re.space" || host === "www.cwsp.u2re.space") {
			logWsState("lifecycle-reconnect-skip-control-spa", reason);
			return;
		}
	} catch {}
	logWsState("lifecycle-reconnect", reason);
	stopClipboardPushLoop();
	clearAutoReconnectTimer();
	connectAttemptId += 1;
	manualDisconnectRequested = false;
	for (const [uuid, pending] of coordinatorPending.entries()) {
		clearTimeout(pending.timeoutId);
		pending.reject({
			ok: false,
			error: `Disconnected before response for ${uuid}`
		});
		coordinatorPending.delete(uuid);
	}
	for (const probe of [...activeProbeSockets]) {
		clearProbeTimer(probe);
		probe.removeAllListeners();
		probe.close();
		activeProbeSockets.delete(probe);
	}
	isConnecting = false;
	if (socket) try {
		socket.removeAllListeners();
		socket.disconnect();
	} catch {}
	socket = null;
	mirrorSocketOnGlobal(null);
	setWsStatus(false);
	autoReconnectAttempts = 0;
	packetWireDedupeGuard.clear();
	connectWS();
}
/**
* Probe candidate origins and establish the primary WebSocket transport.
*
* AI-READ: this function is intentionally large because it combines UI-state
* updates, candidate generation, PNA/LNA warm-up, TLS hints, and reconnect
* behavior for browser tabs, extensions, and native shells.
*/
function connectWS() {
	try {
		const surface = String(document.documentElement?.dataset?.cwspSurface || "").toLowerCase();
		const host = String(location.hostname || "").toLowerCase();
		if (surface === "cwsp-control" || host === "cwsp.u2re.space" || host === "www.cwsp.u2re.space") {
			log("WS skip: Control SPA — use paired Control RPC, not browser hub /ws");
			return;
		}
	} catch {}
	if (isNeutralinoNodeClipboardHubOwned()) {
		log("WS skip: Node clipboard-hub owns fleet /ws (WebView must not connect)");
		return;
	}
	if (nativeShellOwnsExclusiveHubWebsocket()) {
		log("WS skip: Java CwspBridgeService owns fleet /ws (WebView must not connect)");
		return;
	}
	if (isConnecting) return;
	if (socket && (socket.connected || socket.connecting)) return;
	if (activeProbeSockets.size > 0) return;
	clearAutoReconnectTimer();
	connectAttemptId += 1;
	const attemptId = connectAttemptId;
	manualDisconnectRequested = false;
	const remoteHost = getRemoteHost().trim();
	const endpointUrlForConnect = getAirPadEndpointUrl().trim();
	const resolvedRemoteHost = remoteHost || endpointUrlForConnect || "";
	const remoteProtocol = getRemoteProtocol();
	const isIpv4Literal = (host) => !!host && /^\d{1,3}(?:\.\d{1,3}){3}$/.test(host);
	const isPrivateIp = (host) => {
		if (!host) return false;
		if (!isIpv4Literal(host)) return false;
		return host.startsWith("10.") || host.startsWith("192.168.") || /^172\.(1[6-9]|2\d|3[01])\./.test(host) || /^100\.(6[4-9]|[7-9]\d|1[01]\d|12[0-7])\./.test(host);
	};
	/**
	* HTTPS probe order: LAN / private IPs first (where CWSP admin usually listens), then DNS names
	* from **remote** settings, then **page** origin (PWA shell). Putting `u2re.space` last avoids
	* timeouts and PNA noise when the real gateway is 192.168.x.x only.
	*/
	const isHomeFleetPrivateIpv4 = (host) => isIpv4Literal(host) && host.startsWith("192.168.0.");
	const isFleetLanGatewayHost = (host) => {
		return stripWireEndpointIdPrefix(host).trim().toLowerCase() === "192.168.0.200";
	};
	const isFleetWanGatewayHost = (host) => {
		return stripWireEndpointIdPrefix(host).trim().toLowerCase().includes("45.147.");
	};
	const isFleetIngressGatewayHost = (host) => isFleetLanGatewayHost(host) || isFleetWanGatewayHost(host);
	const pageHostEarly = location.hostname || "";
	const pageBareEarly = stripWireEndpointIdPrefix(pageHostEarly) || pageHostEarly;
	const offHomeFleet = isOffHomeFleetNetwork(pageBareEarly);
	const configuredRouteTargetRaw = getRemoteRouteTarget().trim();
	const configuredRouteTarget = sanitizeFleetRouteTarget(configuredRouteTargetRaw, endpointUrlForConnect || remoteHost) || configuredRouteTargetRaw;
	const routedViaFleetGateway = shouldConnectViaFleetGateway(endpointUrlForConnect || remoteHost, configuredRouteTarget);
	const fleetDeskGatewayProbe = shouldFleetDeskGatewayProbeFallbacks(configuredRouteTarget, endpointUrlForConnect || remoteHost, getAirPadDirectTargetUrl());
	const onHomeFleetPage = isOnHomeFleetLanPageHost(pageBareEarly);
	const preferWanGatewayProbeFirst = offHomeFleet || isGuestPrivateLanIpv4(pageBareEarly) || shouldPreferWanGatewayForAirpad(endpointUrlForConnect, pageBareEarly) || routedViaFleetGateway && !onHomeFleetPage || isGatewayHttpsOrigin(endpointUrlForConnect) && offHomeFleet;
	const reorderHostEntriesForHttps = (entries) => {
		const dnsRemote = [];
		const dnsPage = [];
		const homeFleetIpv4 = [];
		const lanGatewayIpv4 = [];
		const wanGatewayIpv4 = [];
		const publicIpv4 = [];
		const guestPrivateIpv4 = [];
		for (const e of entries) if (!isIpv4Literal(e.host)) {
			if (e.source === "page") dnsPage.push(e);
			else dnsRemote.push(e);
		} else if (isFleetLanGatewayHost(e.host)) lanGatewayIpv4.push(e);
		else if (isFleetWanGatewayHost(e.host)) wanGatewayIpv4.push(e);
		else if (isHomeFleetPrivateIpv4(e.host) || e.host === "127.0.0.1") homeFleetIpv4.push(e);
		else if (isPrivateIp(e.host)) guestPrivateIpv4.push(e);
		else publicIpv4.push(e);
		if (preferWanGatewayProbeFirst) return [
			...wanGatewayIpv4,
			...lanGatewayIpv4,
			...dnsRemote,
			...publicIpv4,
			...homeFleetIpv4,
			...dnsPage,
			...guestPrivateIpv4
		];
		if (onHomeFleetPage) return [
			...homeFleetIpv4,
			...lanGatewayIpv4,
			...wanGatewayIpv4,
			...dnsRemote,
			...dnsPage,
			...publicIpv4,
			...guestPrivateIpv4
		];
		return [
			...wanGatewayIpv4,
			...lanGatewayIpv4,
			...homeFleetIpv4,
			...dnsRemote,
			...dnsPage,
			...publicIpv4,
			...guestPrivateIpv4
		];
	};
	const isLikelyPort = (value) => /^\d{1,5}$/.test(value);
	const stripProtocol = (value) => {
		return value.trim().replace(/^[a-z][a-z0-9+.-]*:\/\//i, "").split("/")[0];
	};
	const parseHostAndPort = (value) => {
		const hostSpec = stripProtocol(value).trim();
		if (!hostSpec) return null;
		const at = hostSpec.lastIndexOf(":");
		if (at <= 0) return { host: hostSpec };
		const host = hostSpec.slice(0, at);
		const port = hostSpec.slice(at + 1);
		if (!host || !isLikelyPort(port)) return { host: hostSpec };
		return {
			host,
			port
		};
	};
	let remoteHostSpecs = splitConnectHostList(remoteHost).map((entry) => parseHostAndPort(entry)).filter((entry) => !!entry && !!entry.host);
	if (offHomeFleet && isGatewayHttpsOrigin(endpointUrlForConnect) && !routedViaFleetGateway) {
		const filtered = remoteHostSpecs.filter((spec) => {
			const bare = stripWireEndpointIdPrefix(spec.host).trim();
			if (!bare) return false;
			if (isFleetIngressGatewayHost(bare)) return true;
			if (isIpv4Literal(bare) && isHomeFleetPrivateIpv4(bare)) return false;
			return true;
		});
		if (filtered.length) remoteHostSpecs = filtered;
	}
	if (!remoteHostSpecs.length && endpointUrlForConnect) {
		const endpointSpec = parseHostAndPort(endpointUrlForConnect);
		if (endpointSpec?.host) remoteHostSpecs = [endpointSpec];
	}
	const remotePort = (remoteHostSpecs[0]?.port || "").trim();
	const parsedConfiguredRouteTarget = configuredRouteTarget ? parseHostAndPort(configuredRouteTarget) : void 0;
	const pageHost = pageHostEarly;
	const isLocalPageHost = /^(localhost|127\.0\.0\.1)$/.test(pageHost) || /^\d{1,3}(?:\.\d{1,3}){3}$/.test(pageHost) && (pageHost.startsWith("10.") || pageHost.startsWith("192.168.") || /^172\.(1[6-9]|2\d|3[01])\./.test(pageHost));
	if (location.protocol === "https:" && remoteProtocol === "http" && !isCapacitorNativeShell()) {
		log("WebSocket error: browser blocks ws/http from https page (mixed content). Open Airpad via http:// or use valid HTTPS cert on endpoint.");
		isConnecting = false;
		setWsStatus(false);
		updateButtonLabel();
		return;
	}
	const remoteHostSpec = remoteHostSpecs[0];
	const parsedRemoteHost = remoteHostSpec?.host || resolvedRemoteHost;
	const parsedRemotePort = remoteHostSpec?.port;
	const routeTargetForQuery = (() => {
		if (isFleetGatewayWireNodeId(configuredRouteTarget)) return normalizeWireNodeIdForWire(configuredRouteTarget);
		if (isFleetGatewayWireNodeId(configuredRouteTargetRaw)) return normalizeWireNodeIdForWire(configuredRouteTargetRaw);
		if (isFleetDeskWireNodeId(configuredRouteTarget)) return normalizeWireNodeIdForWire(configuredRouteTarget);
		if (isAssociableFleetWireNodeId(configuredRouteTarget)) return normalizeWireNodeIdForWire(configuredRouteTarget);
		if (routedViaFleetGateway && isFleetDeskWireNodeId(configuredRouteTargetRaw)) return normalizeWireNodeIdForWire(configuredRouteTargetRaw);
		if (fleetDeskGatewayProbe || isGatewayHttpsOrigin(endpointUrlForConnect) || isGatewayHttpsOrigin(remoteHost)) return DEFAULT_DESK_WIRE_NODE_ID;
		const parsedHost = parsedConfiguredRouteTarget?.host || "";
		if (parsedHost && isHomeFleetLanHost(parsedHost)) return normalizeWireNodeIdForWire(parsedHost);
		if (parsedHost) return parsedHost;
		if (configuredRouteTarget) return configuredRouteTarget;
		return "";
	})();
	const routeTargetPortForQuery = (parsedConfiguredRouteTarget?.port || "").trim();
	const rawProbeHostEarly = (parsedRemoteHost || resolvedRemoteHost || "").trim();
	const firstHostBare = rawProbeHostEarly.length > 0 ? stripWireEndpointIdPrefix(rawProbeHostEarly) || rawProbeHostEarly : "";
	const firstHostIpv4 = (() => {
		const b = firstHostBare.trim();
		if (!b) return "";
		const at = b.lastIndexOf(":");
		if (at > 0 && isLikelyPort(b.slice(at + 1))) return b.slice(0, at);
		return b;
	})();
	const inferProtocol = () => {
		if (remoteProtocol === "http" || remoteProtocol === "https") return remoteProtocol;
		if (remotePort === "443" || remotePort === "8434" || remotePort === "8444") return "https";
		if (remotePort === "80" || remotePort === "8080" || remotePort === "8081") return "http";
		if (isCapacitorNativeShell() && location.protocol === "https:" && firstHostIpv4 && isIpv4Literal(firstHostIpv4) && isPrivateIp(firstHostIpv4)) return "https";
		if (isCapacitorNativeShell() && location.protocol !== "https:" && firstHostIpv4 && isIpv4Literal(firstHostIpv4) && isPrivateIp(firstHostIpv4)) return "http";
		return location.protocol === "https:" ? "https" : "http";
	};
	const primaryProtocol = inferProtocol();
	const rawProbeHost = rawProbeHostEarly;
	const probeHost = stripWireEndpointIdPrefix(rawProbeHost) || rawProbeHost;
	const probePort = remotePort || (primaryProtocol === "https" ? "8434" : "8080");
	tryRequestLocalNetworkPermission(`${primaryProtocol}://${probeHost}:${probePort}`, probeHost);
	if (pageHost && isLoopbackHost(probeHost) && !isLoopbackHost(pageHost) && isPrivateOrLocalTarget(pageHost)) {
		const pageProbeHost = stripWireEndpointIdPrefix(pageHost) || pageHost;
		tryRequestLocalNetworkPermission(`${primaryProtocol}://${pageProbeHost}:${probePort}`, pageProbeHost);
	}
	const fallbackProtocol = primaryProtocol === "https" ? "http" : "https";
	const defaultPortsByProtocol = {
		http: [...CWSP_DEFAULT_HTTP_PORTS],
		https: [...CWSP_DEFAULT_HTTPS_PORTS]
	};
	const locationPort = location.port?.trim?.() || "";
	/** Default 443/80 when `location.port` is empty — used to prefer same-origin WS on unified HTTPS entrypoints. */
	const pageEffectivePort = locationPort || (location.protocol === "https:" ? "443" : location.protocol === "http:" ? "80" : "");
	const protocolOrder = remoteProtocol === "http" ? ["http"] : remoteProtocol === "https" ? ["https"] : [primaryProtocol, fallbackProtocol];
	const isLikelyHttpsPort = (port) => CWSP_DEFAULT_HTTPS_PORTS.includes(port);
	const isLikelyHttpPort = (port) => CWSP_DEFAULT_HTTP_PORTS.includes(port);
	const getPortsForProtocol = (protocol, preferredPort) => {
		const ports = [];
		const explicitPort = (preferredPort && isLikelyPort(preferredPort) ? preferredPort : "") || (remotePort && isLikelyPort(remotePort) ? remotePort : "");
		if (explicitPort) {
			if (protocol === "https") {
				if (isLikelyHttpsPort(explicitPort) || remoteProtocol === "https" || remoteProtocol === "auto") ports.push(explicitPort);
			} else if (isLikelyHttpPort(explicitPort) || remoteProtocol === "http" || remoteProtocol === "auto") ports.push(explicitPort);
			if (!ports.length && remoteProtocol === protocol) ports.push(explicitPort);
			if (ports.length) return ports.filter((port, idx) => ports.indexOf(port) === idx);
		}
		for (const defaultPort of defaultPortsByProtocol[protocol]) ports.push(defaultPort);
		if (locationPort) ports.push(locationPort);
		return ports.filter((port, idx) => ports.indexOf(port) === idx);
	};
	const connectHostFromRemote = (h) => {
		return stripWireEndpointIdPrefix(h.trim()) || h.trim();
	};
	const hostEntries = [];
	for (const remoteHostSpecEntry of remoteHostSpecs) {
		const ch = connectHostFromRemote(remoteHostSpecEntry.host);
		if (!ch) continue;
		hostEntries.push({
			host: ch,
			source: "remote",
			preferPort: remoteHostSpecEntry.port
		});
	}
	if (remoteHostSpecs.length === 0 && remoteHost) {
		const ch = connectHostFromRemote(remoteHost);
		if (ch) hostEntries.push({
			host: ch,
			source: "remote"
		});
	}
	/** Hostnames the user configured for the transport (Connect URL), lowercased. */
	const normalizedRemoteHosts = /* @__PURE__ */ new Set();
	for (const spec of remoteHostSpecs) if (spec.host) normalizedRemoteHosts.add(spec.host.toLowerCase());
	if (remoteHostSpecs.length === 0 && remoteHost.trim()) for (const part of splitConnectHostList(remoteHost.trim())) {
		const parsed = parseHostAndPort(part);
		if (parsed?.host) normalizedRemoteHosts.add(parsed.host.toLowerCase());
	}
	/**
	* If the user configured **any** LAN / local transport host, skip adding `location.hostname`
	* unless it is already listed as a remote host. (Connect URL may list both 192.168.x.x and a
	* public name — we still drop the redundant **page** copy of u2re.space when remotes already
	* include a private gateway.)
	*/
	const hasPrivateOrLocalTransportHost = () => {
		for (const h of normalizedRemoteHosts) {
			const bare = stripWireEndpointIdPrefix(h).toLowerCase();
			if (bare === "localhost" || bare === "127.0.0.1") return true;
			if (isIpv4Literal(bare) && isPrivateIp(bare)) return true;
		}
		return false;
	};
	const pageHostnameLower = pageHost.toLowerCase();
	const pageBareForGuest = stripWireEndpointIdPrefix(pageHost) || pageHost;
	const pageProtocol = String(location.protocol || "").toLowerCase();
	const skipExtensionPageOrigin = pageProtocol === "chrome-extension:" || pageProtocol === "moz-extension:" || pageProtocol === "safari-web-extension:" || /^[a-p]{32}$/.test(pageHostnameLower);
	const skipGuestPageOrigin = Boolean(pageHostnameLower) && isGuestPrivateLanIpv4(pageBareForGuest) && !normalizedRemoteHosts.has(pageHostnameLower);
	const skipPageOriginForDirectLan = Boolean(pageHost) && normalizedRemoteHosts.size > 0 && hasPrivateOrLocalTransportHost() && !isLocalPageHost && !normalizedRemoteHosts.has(pageHostnameLower);
	const skipOffFleetLoopbackPage = offHomeFleet && Boolean(pageHost) && isLoopbackHost(pageHost);
	if (location.hostname && !skipExtensionPageOrigin && !skipPageOriginForDirectLan && !skipGuestPageOrigin && !skipOffFleetLoopbackPage) hostEntries.push({
		host: location.hostname,
		source: "page",
		...pageEffectivePort ? { preferPort: pageEffectivePort } : {}
	});
	const uniqueHostEntries = /* @__PURE__ */ new Map();
	for (const entry of hostEntries) if (entry.host && !uniqueHostEntries.has(entry.host)) uniqueHostEntries.set(entry.host, entry);
	const candidateHostEntries = Array.from(uniqueHostEntries.values());
	const httpsOrderedHostEntries = reorderHostEntriesForHttps(candidateHostEntries);
	const candidates = [];
	for (const protocol of protocolOrder) {
		if (location.protocol === "https:" && protocol === "http" && true) continue;
		const hostList = protocol === "https" ? httpsOrderedHostEntries : candidateHostEntries;
		for (const hostEntry of hostList) {
			const { host, source, preferPort } = hostEntry;
			const hostPortOverride = pageHost && host === pageHost && pageEffectivePort && (!preferPort || preferPort === pageEffectivePort) ? pageEffectivePort : preferPort;
			for (const port of getPortsForProtocol(protocol, hostPortOverride)) {
				const hostBare = stripWireEndpointIdPrefix(host).trim() || host.trim();
				const hostLooksPrivate = isIpv4Literal(hostBare) && isPrivateIp(hostBare);
				const crossOriginHttpsToPrivateLan = location.protocol === "https:" && !isLocalPageHost && hostLooksPrivate;
				const privateLanHint = isCapacitorNativeShell() && hostLooksPrivate || location.protocol === "https:" && isLocalPageHost && hostLooksPrivate || crossOriginHttpsToPrivateLan && hostLooksPrivate;
				candidates.push({
					url: `${protocol}://${host}:${port}`,
					protocol,
					host,
					source,
					port,
					privateLanHint
				});
			}
		}
	}
	const deduplicatedCandidates = candidates.filter((item, idx) => candidates.findIndex((x) => x.url === item.url) === idx);
	if (deduplicatedCandidates.length === 0) {
		isConnecting = false;
		setWsStatus(false);
		updateButtonLabel();
		return;
	}
	const normalizedOffset = deduplicatedCandidates.length > 0 ? nextWsCandidateOffset % deduplicatedCandidates.length : 0;
	const uniqueCandidates = deduplicatedCandidates.slice(normalizedOffset).concat(deduplicatedCandidates.slice(0, normalizedOffset));
	nextWsCandidateOffset = normalizedOffset;
	lastWsCandidates = uniqueCandidates;
	if (lastWsCandidates.length <= 1) nextWsCandidateOffset = 0;
	const rotateCandidate = () => {
		if (lastWsCandidates.length > 1) nextWsCandidateOffset = (nextWsCandidateOffset + 1) % lastWsCandidates.length;
	};
	isConnecting = true;
	updateButtonLabel();
	const maxRounds = 3;
	const retryDelayMs = 450;
	const targetHost = connectHostFromRemote(parsedRemoteHost || remoteHost || "");
	const targetPort = routeTargetPortForQuery || parsedRemotePort || remotePort || (primaryProtocol === "https" ? "8434" : "8080");
	const routeTarget = routeTargetForQuery;
	const resolvedRouteTarget = routeTarget || targetHost || "";
	const isSameAsTargetHost = () => {
		if (!targetHost) return true;
		const normalizedRoute = normalizeWireNodeIdForWire(routeTarget);
		if (!normalizedRoute) return !isFleetIngressGatewayHost(targetHost);
		const normalizedTargetHost = targetHost.trim().toLowerCase();
		const routeBare = stripWireEndpointIdPrefix(normalizedRoute).toLowerCase();
		if (!routeBare || !normalizedTargetHost) return true;
		if (routeBare === normalizedTargetHost) return true;
		if (normalizedRoute.toLowerCase() === `l-${normalizedTargetHost}`) return true;
		if (isAssociableFleetWireNodeId(normalizedRoute) && routeBare !== normalizedTargetHost) return false;
		return false;
	};
	const buildHandshakeForCandidate = (candidate) => {
		const url = candidate.url;
		const clientToken = getClientToken();
		const accessToken = getWireAccessToken();
		const clientAccessToken = getClientAccessToken();
		const clientId = getClientId();
		const peerInstanceId = getAirPadPeerInstanceId().trim();
		const handshakeAuth = {};
		if (clientToken) {
			handshakeAuth.token = clientToken;
			handshakeAuth.userKey = clientToken;
		}
		if (accessToken) handshakeAuth.accessToken = accessToken;
		if (clientAccessToken) handshakeAuth.clientAccessToken = clientAccessToken;
		if (clientId) handshakeAuth.clientId = clientId;
		if (peerInstanceId) {
			handshakeAuth.peerInstanceId = peerInstanceId;
			handshakeAuth.deviceInstanceId = peerInstanceId;
		}
		const queryParams = {};
		if (peerInstanceId) {
			queryParams.peerInstanceId = peerInstanceId;
			queryParams.deviceInstanceId = peerInstanceId;
		}
		queryParams.connectionType = getAirPadHandshakeConnectionType();
		queryParams.archetype = getAirPadHandshakeArchetype();
		queryParams.cwspEnvelope = "v2";
		if (clientId) {
			queryParams.clientId = clientId;
			queryParams.userId = clientId;
		}
		if (clientToken) {
			queryParams.token = clientToken;
			queryParams.userKey = clientToken;
		}
		queryParams[CWSP_ROUTE_QUERY.via] = !isSameAsTargetHost() ? "tunnel" : candidate.source || "unknown";
		queryParams[CWSP_ROUTE_QUERY.localEndpoint] = isSameAsTargetHost() ? "1" : "0";
		const inferredDeskRoute = routeTarget || (isFleetGatewayWireNodeId(configuredRouteTargetRaw) ? "L-200" : "") || "";
		let effectiveRoute = inferredDeskRoute || resolvedRouteTarget;
		let effectiveRouteTarget = inferredDeskRoute || routeTarget || targetHost || resolvedRouteTarget;
		const candBare = stripWireEndpointIdPrefix(candidate.host || "").trim();
		const pageBare = stripWireEndpointIdPrefix(pageHost || "").trim();
		if (candidate.source === "page" && candBare && pageBare && candBare.toLowerCase() === pageBare.toLowerCase() && isLoopbackHost(effectiveRoute)) {
			effectiveRoute = candBare;
			effectiveRouteTarget = candBare;
		}
		if (effectiveRoute) {
			queryParams[CWSP_ROUTE_QUERY.route] = effectiveRoute;
			queryParams[CWSP_ROUTE_QUERY.routeTarget] = effectiveRouteTarget;
		}
		if (shouldUseVerboseAirpadQuery()) {
			queryParams[CWSP_ROUTE_QUERY.hop] = candidate.host || remoteHost || "unknown";
			queryParams[CWSP_ROUTE_QUERY.host] = candidate.host || remoteHost || "";
			queryParams[CWSP_ROUTE_QUERY.target] = targetHost || "";
			queryParams[CWSP_ROUTE_QUERY.targetPort] = targetPort;
			queryParams[CWSP_ROUTE_QUERY.viaPort] = candidate.port || "";
			queryParams[CWSP_ROUTE_QUERY.protocol] = candidate.protocol || "https";
		}
		if (clientAccessToken) queryParams.clientAccessToken = clientAccessToken;
		if (accessToken) queryParams.accessToken = accessToken;
		return {
			url,
			clientToken,
			accessToken,
			clientId,
			peerInstanceId,
			handshakeAuth,
			queryParams
		};
	};
	const finalizeConnectedSocket = (probeSocket, candidate, index, url) => {
		socket = probeSocket;
		logWsState("connected", `candidate=${index + 1}/${uniqueCandidates.length} candidate_url=${url} transport=${candidate.protocol} parallel=${AIRPAD_CANDIDATE_PARALLEL}`);
		isConnecting = false;
		autoReconnectAttempts = 0;
		clearAutoReconnectTimer();
		setWsStatus(true);
		startClipboardPushLoop();
		socket.on("disconnect", (reason) => {
			stopClipboardPushLoop();
			logWsState("disconnected", `candidate=${index + 1}/${uniqueCandidates.length} candidate_url=${url} reason=${reason || "unknown"}`);
			isConnecting = false;
			setWsStatus(false);
			updateButtonLabel();
			const manual = manualDisconnectRequested;
			manualDisconnectRequested = false;
			for (const [uuid, pending] of coordinatorPending.entries()) {
				clearTimeout(pending.timeoutId);
				pending.reject({
					ok: false,
					error: `Disconnected before response for ${uuid}`
				});
				coordinatorPending.delete(uuid);
			}
			socket = null;
			if (manual) {
				autoReconnectAttempts = 0;
				return;
			}
			if (shouldRotateCandidateOnDisconnect(reason)) {
				rotateCandidate();
				if (lastWsCandidates.length > 1) log(`WebSocket disconnect reason "${reason || "unknown"}", trying next candidate on reconnect`);
			}
			const attempt = autoReconnectAttempts + 1;
			if (!shouldAutoReconnectAfterDisconnect(reason) || false) return;
			autoReconnectAttempts = attempt;
			const delay = Math.min(AUTO_RECONNECT_BASE_DELAY_MS * attempt, 5e3);
			clearAutoReconnectTimer();
			autoReconnectTimer = globalThis.setTimeout(() => {
				autoReconnectTimer = null;
				if (isConnecting || wsConnected || socket && socket.connected || socket?.connecting) return;
				logWsState("auto-reconnect", `attempt=${`${attempt}/unlimited`} reason=${reason || "unknown reason"}`);
				connectWS();
			}, delay);
		});
		socket.on("connect_error", (error) => {
			logWsState("socket-connect-error", `candidate=${index + 1}/${uniqueCandidates.length} candidate_url=${url} reason=${error?.message || "unknown"}`);
			isConnecting = false;
			updateButtonLabel();
		});
		socket.on("voice_result", async (msg) => {
			handleServerMessage(await unwrapIncomingPayload(msg));
		});
		socket.on("voice_error", async (msg) => {
			handleServerMessage(await unwrapIncomingPayload(msg));
		});
		socket.on("clipboard:update", async (msg) => {
			const decoded = await unwrapIncomingPayload(msg);
			if (!isClipboardSenderAllowedForInbound(getCoordinatorPacketSenderId(decoded))) return;
			const asset = extractClipboardAssetFromPacket(decoded);
			if (asset) {
				applyIncomingClipboardImage(asset, { source: decoded?.source });
				return;
			}
			applyIncomingClipboardText(extractClipboardTextFromPacket(decoded), { source: decoded?.source });
		});
		socket.on("data", async (packet) => {
			const decoded = await unwrapIncomingPayload(packet);
			if (!isCoordinatorPacket(decoded)) return;
			handleCoordinatorPacket(decoded);
		});
		socket.on("message", async (packet) => {
			const decoded = await unwrapIncomingPayload(packet);
			if (!isCoordinatorPacket(decoded)) return;
			handleCoordinatorPacket(decoded);
		});
		socket.on("network.fetch", async (request, ack) => {
			const response = await handleServerNetworkFetchRequest(request);
			if (typeof ack === "function") ack(response);
		});
		mirrorSocketOnGlobal(socket);
	};
	const probeBatch = (startIndex, round) => new Promise((resolve) => {
		if (attemptId !== connectAttemptId) {
			resolve(false);
			return;
		}
		const batch = uniqueCandidates.slice(startIndex, startIndex + AIRPAD_CANDIDATE_PARALLEL);
		if (!batch.length) {
			resolve(false);
			return;
		}
		if (startIndex === 0 && round === 0) {
			const el = getWsStatusEl();
			if (el) {
				el.classList.remove(WS_STATUS_TLS_HINT_CLASS);
				el.textContent = "connecting…";
			}
		}
		let won = false;
		let settled = false;
		let deadCount = 0;
		const batchSize = batch.length;
		let batchTlsCertUrl = null;
		let batchTlsHostname = null;
		const finishWin = (winner, candidate, index, url, hs) => {
			if (settled) return;
			settled = true;
			won = true;
			for (const s of [...activeProbeSockets]) if (s !== winner) {
				clearProbeTimer(s);
				s.removeAllListeners();
				s.close();
				activeProbeSockets.delete(s);
			}
			clearProbeTimer(winner);
			activeProbeSockets.delete(winner);
			finalizeConnectedSocket(winner, candidate, index, url);
			resolve(true);
		};
		const finishAllDead = () => {
			if (settled || won) return;
			deadCount++;
			if (deadCount < batchSize) return;
			settled = true;
			if (batchTlsCertUrl) setWsStatusTlsHint(batchTlsCertUrl);
			else if (batchTlsHostname) setWsStatusTlsHostnameHint(batchTlsHostname);
			resolve(false);
		};
		for (let localIdx = 0; localIdx < batch.length; localIdx++) {
			const candidate = batch[localIdx];
			const index = startIndex + localIdx;
			const hs = buildHandshakeForCandidate(candidate);
			const { url, handshakeAuth, queryParams } = hs;
			logWsState("connecting", `batch=${startIndex}-${startIndex + batchSize - 1} candidate=${index + 1}/${uniqueCandidates.length} candidate_url=${url} transport=${candidate.protocol} source=${candidate.source} host=${candidate.host}:${candidate.port} target=${targetHost}:${targetPort}`);
			const probeSocket = createWsSocket(url, {
				auth: handshakeAuth,
				query: queryParams,
				timeout: AIRPAD_PROBE_IO_TIMEOUT_MS
			});
			activeProbeSockets.add(probeSocket);
			probeSocket.__cwspProbeTimer = globalThis.setTimeout(() => {
				if (attemptId !== connectAttemptId) {
					clearProbeTimer(probeSocket);
					probeSocket.removeAllListeners();
					probeSocket.close();
					activeProbeSockets.delete(probeSocket);
					return;
				}
				if (won || settled || probeSocket.connected) return;
				clearProbeTimer(probeSocket);
				probeSocket.removeAllListeners();
				probeSocket.close();
				activeProbeSockets.delete(probeSocket);
				logWsState("connect-failed", `candidate=${index + 1}/${uniqueCandidates.length} candidate_url=${url} reason=probe-hard-timeout`);
				finishAllDead();
			}, AIRPAD_PROBE_HARD_CAP_MS);
			probeSocket.on("connect", () => {
				clearProbeTimer(probeSocket);
				if (attemptId !== connectAttemptId) {
					probeSocket.removeAllListeners();
					probeSocket.close();
					activeProbeSockets.delete(probeSocket);
					return;
				}
				if (won || settled) {
					probeSocket.removeAllListeners();
					probeSocket.close();
					activeProbeSockets.delete(probeSocket);
					return;
				}
				finishWin(probeSocket, candidate, index, url, hs);
			});
			probeSocket.on("connect_error", (error) => {
				clearProbeTimer(probeSocket);
				activeProbeSockets.delete(probeSocket);
				if (won || settled) {
					probeSocket.removeAllListeners();
					probeSocket.close();
					return;
				}
				probeSocket.removeAllListeners();
				probeSocket.close();
				const details = error?.description || error?.context || "";
				const errorMessage = String(error?.message || error || "");
				const combinedProbeErr = `${errorMessage} ${String(details)}`;
				const weakWsTlsSuspect = candidate.protocol === "https" && isPrivateIp(candidate.host) && /xhr poll error|websocket error/i.test(errorMessage);
				/** Capacitor/WebView often reports generic xhr/WS errors; do not label "Untrusted cert" without TLS signals. */
				const tlsKeywordsInErr = /certificate|cert\.|ssl|tls|trust|ERR_CERT|ERR_SSL|handshake|authority|SELF_SIGNED|unknown.*cert|invalid.*cert|unable to verify|pkix|hostname|name mismatch/i.test(combinedProbeErr);
				const plainTransportFailure = /refused|ECONNREFUSED|ENOTFOUND|timed out|timeout|unreachable|ERR_CONNECTION|ADDRESS_UNREACHABLE|NAME_NOT_RESOLVED|INTERNET_DISCONNECTED|network.*lost/i.test(combinedProbeErr);
				const nativeAir = isCapacitorNativeShell();
				if (weakWsTlsSuspect && !batchTlsCertUrl && (tlsKeywordsInErr || !nativeAir && !plainTransportFailure)) batchTlsCertUrl = url;
				const publicIpv4Https = candidate.protocol === "https" && isIpv4Literal(candidate.host) && !isPrivateIp(candidate.host) && candidate.host !== "127.0.0.1";
				const combinedErr = `${errorMessage} ${String(details)}`;
				if (publicIpv4Https && /xhr poll error|websocket error|certificate|CERT|common name|ssl|tls|failed to fetch|name invalid/i.test(combinedErr) && !batchTlsHostname) {
					const suggested = pageHost && !isIpv4Literal(pageHost) && pageHost !== "localhost" ? pageHost : "";
					if (suggested) batchTlsHostname = suggested;
				}
				if (candidate.privateLanHint && /cors|private network|address space|failed fetch/i.test(errorMessage)) logWsState("connect-failed", `candidate=${index + 1}/${uniqueCandidates.length} candidate_url=${url} reason=${errorMessage} hint=private-network-cors`);
				logWsState("connect-failed", `candidate=${index + 1}/${uniqueCandidates.length} candidate_url=${url} reason=${errorMessage} details=${details ? safeJson(details) : "none"}`);
				finishAllDead();
			});
		}
	});
	(async () => {
		for (let round = 0; round < maxRounds; round++) {
			for (let start = 0; start < uniqueCandidates.length; start += AIRPAD_CANDIDATE_PARALLEL) {
				if (attemptId !== connectAttemptId) return;
				if (await probeBatch(start, round)) return;
			}
			if (round + 1 < maxRounds) {
				logWsState("retry", `round=${round + 2}/${maxRounds} next=0`);
				await new Promise((r) => globalThis.setTimeout(r, retryDelayMs));
			}
		}
		if (attemptId !== connectAttemptId) return;
		logWsState("failed", `round=${maxRounds}/${maxRounds} all-candidates`);
		isConnecting = false;
		setWsStatus(false);
		updateButtonLabel();
	})();
}
/** Stop probe sockets, tear down the primary transport, and mark the disconnect as user-requested. */
function disconnectWS() {
	stopClipboardPushLoop();
	clearAutoReconnectTimer();
	connectAttemptId += 1;
	manualDisconnectRequested = true;
	for (const probe of [...activeProbeSockets]) {
		clearProbeTimer(probe);
		probe.removeAllListeners();
		probe.close();
		activeProbeSockets.delete(probe);
	}
	isConnecting = false;
	if (!socket) {
		setWsStatus(false);
		updateButtonLabel();
		return;
	}
	log("Disconnecting WebSocket...");
	socket.disconnect();
	socket = null;
	mirrorSocketOnGlobal(null);
	setWsStatus(false);
}
/** Bind the optional connect button UI to the shared transport lifecycle. */
function initWebSocket(btnConnect) {
	btnEl = btnConnect;
	updateButtonLabel();
	if (!btnConnect) return;
	if (wsConnectButton === btnConnect) return;
	if (wsConnectButton) wsConnectButton.removeEventListener("click", handleWsConnectButtonClick);
	wsConnectButton = btnConnect;
	wsConnectButton.addEventListener("click", handleWsConnectButtonClick);
}
function handleWsConnectButtonClick() {
	if (isConnecting || wsConnected || socket && socket.connected || socket?.connecting) disconnectWS();
	else connectWS();
}
//#endregion
//#region ../../modules/projects/subsystem/src/boot/hub-socket-boot.ts
/**
* Unified hub transport: WebSocket to cwsp / endpoint (same stack as AirPad), optional background connection.
* Used from main PWA boot, Settings save, and CRX shells so clipboard coordinator works outside the AirPad view.
*
* Filename: hub-socket-boot.ts
* FullPath: modules/projects/subsystem/src/boot/hub-socket-boot.ts
* Change date and time: 14.05.00_19.07.2026
* Reason for changes: SW-safe DOM checks (no bare `window`) for CRX service worker.
*/
var hub_socket_boot_exports = /* @__PURE__ */ __exportAll({
	applyHubSocketFromSettings: () => applyHubSocketFromSettings,
	backendOwnsExclusiveHubWebsocket: () => backendOwnsExclusiveHubWebsocket,
	installAirpadHubLifecycleRecovery: () => installAirpadHubLifecycleRecovery,
	nativeShellOwnsExclusiveHubWebsocket: () => nativeShellOwnsExclusiveHubWebsocket,
	nodeClipboardHubOwnsExclusiveWebsocket: () => nodeClipboardHubOwnsExclusiveWebsocket
});
/** After this long in the background, force a full reconnect (zombie TCP / suspended workers). */
var PWA_STALE_BACKGROUND_MS = 12e3;
var hubLifecycleRecoveryInstalled = false;
var lastDocumentHiddenAt = 0;
/** True only in real DOM pages — never use bare `window` (throws in MV3 SW). */
var canUseDomWindow = () => {
	try {
		const g = globalThis;
		return Boolean(g.window && g.document);
	} catch {
		return false;
	}
};
var isCapacitorNativePlatform = () => {
	try {
		const c = globalThis.Capacitor;
		return typeof c?.isNativePlatform === "function" && Boolean(c.isNativePlatform());
	} catch {
		return false;
	}
};
/**
* True when native Android (Capacitor/NativeScript) owns fleet `/ws`.
* INVARIANT: WebView must not open a second `/ws` with the same clientId.
* AirPad input goes through CwsBridge → CwspWsClient instead.
*/
function nativeShellOwnsExclusiveHubWebsocket() {
	if (!isPreferNativeWebsocketEnabled()) return false;
	try {
		if (globalThis.__CWS_NATIVE__ === true) return true;
	} catch {}
	return isCapacitorNativePlatform();
}
/**
* Neutralino/WebNative: Node clipboard-hub owns the fleet `/ws` clipboard session.
* INVARIANT: WebView must not open a second `/ws` with the same clientId (kicks the hub).
*/
function nodeClipboardHubOwnsExclusiveWebsocket() {
	return isNeutralinoNodeClipboardHubOwned();
}
/** Any shell where WebView browser WebSocket must stay dark for fleet hub. */
function backendOwnsExclusiveHubWebsocket() {
	return nativeShellOwnsExclusiveHubWebsocket() || nodeClipboardHubOwnsExclusiveWebsocket();
}
function shouldRunHubRecovery() {
	if (backendOwnsExclusiveHubWebsocket()) return false;
	if (!isMaintainHubSocketConnectionEnabled() && !isClipboardHubBootstrapEnabled()) return false;
	if (!getRemoteHost().trim()) return false;
	return true;
}
/**
* PWA / mobile: restore hub ↔ endpoint after suspend, offline, or bfcache restore.
* Requires Settings → maintain hub socket + a remote host (same rules as {@link applyHubSocketFromSettings}).
*/
function installAirpadHubLifecycleRecovery() {
	if (hubLifecycleRecoveryInstalled || !canUseDomWindow()) return;
	hubLifecycleRecoveryInstalled = true;
	const doc = globalThis.document;
	const win = globalThis.window;
	doc.addEventListener("visibilitychange", () => {
		if (doc.visibilityState !== "hidden") return;
		lastDocumentHiddenAt = Date.now();
	});
	const schedule = (fn) => {
		globalThis.setTimeout(fn, 280);
	};
	const recoverAfterVisibility = () => {
		if (!shouldRunHubRecovery()) return;
		(async () => {
			initWebSocket(null);
			const live = Boolean(getWS()?.connected);
			if (lastDocumentHiddenAt > 0 && Date.now() - lastDocumentHiddenAt >= PWA_STALE_BACKGROUND_MS && (live || isWSConnected())) {
				reconnectTransportAfterLifecycleResume("visibility");
				return;
			}
			if (!live && !isWSConnected()) connectWS();
		})();
	};
	const recoverAfterNetworkOrRestore = (reason) => {
		if (!shouldRunHubRecovery()) return;
		(() => {
			initWebSocket(null);
			reconnectTransportAfterLifecycleResume(reason);
		})();
	};
	doc.addEventListener("visibilitychange", () => {
		if (doc.visibilityState !== "visible") return;
		schedule(recoverAfterVisibility);
	});
	win.addEventListener("online", () => schedule(() => recoverAfterNetworkOrRestore("online")));
	win.addEventListener("pageshow", (ev) => {
		if (!ev.persisted) return;
		schedule(() => recoverAfterNetworkOrRestore("bfcache"));
	});
}
/**
* Apply after boot or any settings mutation (Save, storage sync). Idempotent with {@link applyAirpadRuntimeFromAppSettings}.
*/
async function applyHubSocketFromSettings(settings) {
	installAirpadHubLifecycleRecovery();
	if (await shouldDeferCrxHubSocketBootstrap(settings)) return;
	applyAirpadRuntimeFromAppSettings(settings);
	try {
		const surface = String(document.documentElement?.dataset?.cwspSurface || "").toLowerCase();
		const host = String(location.hostname || "").toLowerCase();
		if (surface === "cwsp-control" || host === "cwsp.u2re.space" || host === "www.cwsp.u2re.space") return;
	} catch {}
	if (nativeShellOwnsExclusiveHubWebsocket()) return;
	if (nodeClipboardHubOwnsExclusiveWebsocket()) return;
	if (!isMaintainHubSocketConnectionEnabled() && !isClipboardHubBootstrapEnabled()) return;
	const host = getRemoteHost().trim();
	if (!host) return;
	try {
		const raw = /^https?:\/\//i.test(host) ? host.split(",")[0].trim() : `https://${host}`;
		const h = new URL(raw).hostname.toLowerCase();
		if (h === "cwsp.u2re.space" || h === "www.cwsp.u2re.space" || h === "md.u2re.space" || h === "www.md.u2re.space") {
			console.warn("[hub-socket-boot] refusing Control SPA host as /ws target", host);
			return;
		}
	} catch {}
	initWebSocket(null);
	connectWS();
}
[
	"cw-shell-base",
	"cw-shell-window",
	"cw-shell-tabbed",
	"cw-shell-minimal",
	"cw-shell-environment",
	"env-shell-container",
	"cw-shell-content",
	"cw-shell-immersive",
	"cw-shell-faint"
].join(",");
//#endregion
//#region src/frontend/shells/boot/registry.ts
var ViewBase = class ViewBase extends UIElement {
	__options;
	__initialized = false;
	/** Per-element broadcast surface for intra-view messaging (slots, decorators, tooling). Separate from CWSP routing. */
	__viewChannel = null;
	set options(value) {
		this.__options = value;
	}
	get options() {
		return this.__options;
	}
	get viewChannel() {
		if (!this.__viewChannel) this.__viewChannel = new EventTarget();
		return this.__viewChannel;
	}
	dispatchViewChannel(type, detail, init) {
		return this.viewChannel.dispatchEvent(new CustomEvent(type, {
			...init,
			detail
		}));
	}
	subscribeViewChannel(type, listener) {
		const bus = this.viewChannel;
		bus.addEventListener(type, listener);
		return () => bus.removeEventListener(type, listener);
	}
	viewInitialize() {
		const opts = this.options;
		opts?.initializator?.call?.(this, this, opts);
		return this;
	}
	constructor() {
		super();
	}
	onInitialize() {
		super.onInitialize?.call?.(this);
		this?.viewInitialize?.call?.(this);
		return this;
	}
};
ViewBase = __decorate([defineElement("cw-view-base")], ViewBase);
//#endregion
//#region ../../modules/projects/subsystem/src/boot/capacitor-permissions.ts
var cap$1 = () => {
	try {
		const c = globalThis?.Capacitor;
		return c && typeof c === "object" ? c : null;
	} catch {
		return null;
	}
};
var isCapacitorNative = () => {
	const c = cap$1();
	try {
		return Boolean(c?.isNativePlatform?.() ?? (c?.platform && c.platform !== "web"));
	} catch {
		return false;
	}
};
//#endregion
//#region ../../modules/projects/subsystem/src/boot/capacitor-settings-permissions.ts
var cap = () => {
	try {
		const c = globalThis?.Capacitor;
		return c && typeof c === "object" ? c : null;
	} catch {
		return null;
	}
};
var plugin = (name) => {
	const p = cap()?.Plugins?.[name];
	return p && typeof p === "object" ? p : null;
};
var callSafe = async (fn, ...args) => {
	try {
		return typeof fn === "function" ? await fn(...args) : void 0;
	} catch (e) {
		console.warn("[capacitor-settings-permissions]", e);
		return;
	}
};
/**
* Cold-start (or keep) the Android foreground bridge on app boot.
* WHY: previously only Settings Save / Share / CONFIGURE started CwspBridgeService.
*/
var ensureCapacitorBridgeDaemonStarted = async (settings) => {
	if (!isCapacitorNative()) return false;
	if (!(((settings?.shell || {}).bridgeDaemonEnabled ?? true) !== false)) return false;
	if (settings?.shell) {
		settings.shell.acceptSmsBridgeData = false;
		settings.shell.enableNativeSms = false;
	}
	const platform = plugin("CwsPlatform");
	if (!platform?.startCwspBridge) return false;
	await callSafe(platform.startCwspBridge);
	return true;
};
//#endregion
//#region ../../modules/projects/subsystem/src/boot/BootLoader.ts
var normalizeShellId = (shell) => {
	if (shell === "faint") return "tabbed";
	if (shell === "base") return "immersive";
	return shell;
};
/**
* Style system configurations
*/
var STYLE_CONFIGS = {
	"raw": {
		name: "Raw (No Framework)",
		stylesheets: [],
		description: "No CSS framework, raw browser defaults",
		recommendedShells: ["immersive"]
	},
	"vl-core": {
		name: "Core (Shared Foundation)",
		stylesheets: [],
		description: "Shared foundation styles for all veela variants",
		recommendedShells: ["immersive", "minimal"]
	},
	"vl-basic": {
		name: "Basic Veela Styles",
		stylesheets: [],
		description: "Minimal styling for basic functionality",
		recommendedShells: [
			"window",
			"tabbed",
			"minimal",
			"environment",
			"immersive",
			"content"
		]
	},
	"vl-advanced": {
		name: "Advanced (Full-Featured Styling)",
		stylesheets: [],
		description: "Full-featured styling with design tokens and effects",
		recommendedShells: [
			"tabbed",
			"minimal",
			"environment"
		]
	},
	"vl-beercss": {
		name: "BeerCSS (Beer CSS Compatible)",
		stylesheets: [],
		description: "Beer CSS compatible styling with Material Design 3",
		recommendedShells: ["tabbed"]
	}
};
(class BootLoader {
	static instance;
	state = {
		phase: "idle",
		styleSystem: null,
		shell: null,
		view: null,
		error: null
	};
	stateChangeHandlers = /* @__PURE__ */ new Set();
	shellInstance = null;
	/** MutationObserver-driven view host bindings (shared routing); disconnected between boots. */
	implicitBridgeCleanup = null;
	phaseHandlers = /* @__PURE__ */ new Map();
	constructor() {
		initializeRegistries();
	}
	static getInstance() {
		if (!BootLoader.instance) BootLoader.instance = new BootLoader();
		return BootLoader.instance;
	}
	/**
	* Execute the boot sequence
	*/
	async boot(container, config) {
		console.log("[BootLoader] Starting boot sequence:", config);
		try {
			if (this.shellInstance) try {
				this.implicitBridgeCleanup?.();
				this.implicitBridgeCleanup = null;
				ShellRegistry.unload(this.shellInstance.id);
			} catch (error) {
				console.warn("[BootLoader] Failed to unload previous shell:", error);
			} finally {
				this.shellInstance = null;
			}
			initializeLayers();
			initCwsNativeBridge$1().catch(() => {});
			try {
				const { initFrontendDebugCapture } = await __vitePreload(async () => {
					const { initFrontendDebugCapture } = await import("../chunks/frontend-debug-capture2.js");
					return { initFrontendDebugCapture };
				}, [], import.meta.url);
				initFrontendDebugCapture();
			} catch {}
			const persistedSettings = await loadSettings().catch((error) => {
				console.warn("[BootLoader] Failed to load settings:", error);
				return null;
			});
			let effectiveSettings = persistedSettings;
			if (isCapacitorCwsNativeShell$1()) {
				const seeded = await ensureCapacitorCwspSettingsSeeded().catch(() => null);
				if (seeded) effectiveSettings = seeded;
			}
			if (effectiveSettings) applyHubSocketFromSettings(effectiveSettings).catch(() => void 0);
			if (isCapacitorCwsNativeShell$1()) ensureCapacitorBridgeDaemonStarted(effectiveSettings).catch((error) => {
				console.warn("[BootLoader] CWSP bridge daemon auto-start skipped:", error);
			});
			applyTheme(effectiveSettings ?? DEFAULT_SETTINGS);
			if (!(() => {
				try {
					const g = globalThis;
					const surface = typeof document !== "undefined" ? String(document.documentElement?.dataset?.cwspSurface || "") : "";
					return Boolean(g.__CWS_SKIP_PWA__ || g.__CWS_NEUTRALINO_BOOT__ || g.__CWS_WEBNATIVE_BOOT__ || g.Neutralino || typeof g.NL_OS === "string" || surface === "cwsp-control" || surface === "gateway");
				} catch {
					return false;
				}
			})()) try {
				const { initIngressPWA } = await __vitePreload(async () => {
					const { initIngressPWA } = await import("../chunks/sw-handling.js");
					return { initIngressPWA };
				}, __vite__mapDeps([57,5,1,2,32,58,59]), import.meta.url);
				await initIngressPWA();
			} catch (e) {
				console.warn("[BootLoader] Share-target / service worker ingress failed (non-fatal):", e);
			}
			await this.loadStyles(config.styleSystem);
			const persistedTheme = this.resolveThemeFromSettings(persistedSettings);
			const shell = await this.loadShell(config.shell, container);
			shell.setTheme(config.theme || persistedTheme);
			await shell.mount(container);
			this.implicitBridgeCleanup?.();
			this.implicitBridgeCleanup = startImplicitViewMessagingBridge();
			if (config.channels && config.channels.length > 0) await this.initChannels(config.channels, config.channelPriorityId);
			if (config.skipInitialNavigate) this.dismissShellLoadingSpinner(shell);
			else {
				let bootParams;
				try {
					bootParams = Object.fromEntries(new URLSearchParams(globalThis.location?.search || ""));
				} catch {
					bootParams = void 0;
				}
				await shell.navigate(config.defaultView, bootParams);
			}
			this.setPhase("ready");
			try {
				if (typeof document !== "undefined") document.documentElement.dataset.cwspBoot = "ready";
				globalThis.dispatchEvent?.(new CustomEvent("cwsp:boot-ready"));
			} catch {}
			if (config.rememberChoice) this.savePreferences(config);
			console.log("[BootLoader] Boot complete");
			return shell;
		} catch (error) {
			console.error("[BootLoader] Boot failed:", error);
			this.updateState({
				phase: "error",
				error
			});
			throw error;
		}
	}
	resolveThemeFromSettings(settings) {
		const theme = settings?.appearance?.theme || "auto";
		if (theme === "dark") return darkTheme;
		if (theme === "light") return lightTheme;
		return defaultTheme;
	}
	/** Hide immersive/minimal shell loading row when skipping {@link Shell.navigate}. */
	dismissShellLoadingSpinner(shell) {
		try {
			const loading = shell.getElement().shadowRoot?.querySelector(".app-shell__loading");
			if (loading) loading.hidden = true;
		} catch {}
	}
	/**
	* Load style system
	*/
	async loadStyles(styleSystem) {
		this.setPhase("styles");
		console.log(`[BootLoader] Loading style system: ${styleSystem}`);
		const config = STYLE_CONFIGS[styleSystem] || STYLE_CONFIGS["vl-basic"];
		try {
			await loadStyleSystem(styleSystem);
		} catch (error) {
			console.error(`[BootLoader] Failed to load style system: ${styleSystem}`, error);
			throw error;
		}
		for (const sheet of config.stylesheets) try {
			await loadAsAdopted(sheet);
		} catch (error) {
			console.warn(`[BootLoader] Failed to load stylesheet: ${sheet}`, error);
		}
		this.updateState({ styleSystem });
		console.log(`[BootLoader] Style system ${styleSystem} loaded`);
	}
	/**
	* Load and initialize shell
	*/
	async loadShell(shellId, container) {
		this.setPhase("shell");
		const normalizedShell = normalizeShellId(shellId);
		if (normalizedShell !== shellId) console.warn(`[BootLoader] Shell "${shellId}" is temporarily disabled, redirecting to "${normalizedShell}"`);
		console.log(`[BootLoader] Loading shell: ${normalizedShell}`);
		const shell = await ShellRegistry.load(normalizedShell, container);
		this.shellInstance = shell;
		this.updateState({ shell: normalizedShell });
		console.log(`[BootLoader] Shell ${normalizedShell} loaded`);
		return shell;
	}
	/**
	* Initialize service channels: one high-priority channel blocks boot, the rest
	* run when the browser is idle so startup stays within interactive budgets.
	*/
	async initChannels(channelIds, priorityId) {
		this.setPhase("channels");
		const unique = [...new Set(channelIds)];
		if (unique.length === 0) return;
		const primary = (priorityId && unique.includes(priorityId) ? priorityId : null) ?? unique[0];
		const rest = unique.filter((id) => id !== primary);
		console.log(`[BootLoader] Initializing primary channel:`, primary, rest.length ? `(+${rest.length} deferred)` : "");
		try {
			await serviceChannels.initChannel(primary);
		} catch (error) {
			console.warn(`[BootLoader] Failed to init primary channel ${primary}:`, error);
		}
		if (rest.length === 0) {
			console.log("[BootLoader] Channels initialized");
			return;
		}
		const runDeferred = () => {
			(async () => {
				for (const channelId of rest) try {
					await serviceChannels.initChannel(channelId);
				} catch (error) {
					console.warn(`[BootLoader] Failed to init channel ${channelId}:`, error);
				}
				console.log("[BootLoader] Deferred channels initialized:", rest);
			})();
		};
		if (typeof globalThis.requestIdleCallback === "function") globalThis.requestIdleCallback(runDeferred, { timeout: 5e3 });
		else globalThis.setTimeout?.(runDeferred, 0);
	}
	/**
	* Update state and notify handlers
	*/
	updateState(partial) {
		Object.assign(this.state, partial);
		this.notifyStateChange();
	}
	/**
	* Set current phase and notify handlers
	*/
	setPhase(phase) {
		this.updateState({ phase });
		const handlers = this.phaseHandlers.get(phase);
		if (handlers) for (const handler of handlers) try {
			handler(this.state);
		} catch (error) {
			console.error(`[BootLoader] Phase handler error:`, error);
		}
	}
	/**
	* Notify all state change handlers
	*/
	notifyStateChange() {
		for (const handler of this.stateChangeHandlers) try {
			handler(this.state);
		} catch (error) {
			console.error(`[BootLoader] State handler error:`, error);
		}
	}
	/**
	* Subscribe to state changes
	*/
	onStateChange(handler) {
		this.stateChangeHandlers.add(handler);
		return () => {
			this.stateChangeHandlers.delete(handler);
		};
	}
	/**
	* Register a phase handler
	*/
	onPhase(phase, handler) {
		if (!this.phaseHandlers.has(phase)) this.phaseHandlers.set(phase, /* @__PURE__ */ new Set());
		this.phaseHandlers.get(phase).add(handler);
		return () => {
			this.phaseHandlers.get(phase)?.delete(handler);
		};
	}
	/**
	* Get current state
	*/
	getState() {
		return { ...this.state };
	}
	/**
	* Get current shell instance
	*/
	getShell() {
		return this.shellInstance;
	}
	/**
	* Save boot preferences
	*/
	savePreferences(config) {
		try {
			const normalizedShell = normalizeShellId(config.shell);
			localStorage.setItem("rs-boot-style", config.styleSystem);
			localStorage.setItem("rs-boot-shell", normalizedShell);
			localStorage.setItem("rs-boot-view", config.defaultView);
			localStorage.setItem("rs-boot-remember", "1");
		} catch (error) {
			console.warn("[BootLoader] Failed to save preferences:", error);
		}
	}
	/**
	* Load boot preferences
	*/
	loadPreferences() {
		try {
			if (localStorage.getItem("rs-boot-remember") !== "1") return null;
			const shell = normalizeShellId(localStorage.getItem("rs-boot-shell") || "environment");
			return {
				styleSystem: localStorage.getItem("rs-boot-style") || void 0,
				shell,
				defaultView: localStorage.getItem("rs-boot-view") || void 0
			};
		} catch {
			return null;
		}
	}
	/**
	* Clear preferences
	*/
	clearPreferences() {
		try {
			localStorage.removeItem("rs-boot-style");
			localStorage.removeItem("rs-boot-shell");
			localStorage.removeItem("rs-boot-view");
			localStorage.removeItem("rs-boot-remember");
			localStorage.removeItem(LS_BOOT_SHELL_LAST_ACTIVE);
		} catch {}
	}
}).getInstance();
var VIEW_FLAGS = {
	network: "network",
	settings: "settings",
	viewer: "viewer",
	editor: "editor",
	workcenter: "workcenter",
	explorer: "explorer",
	history: "history",
	home: "home",
	print: "print"
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
		raw = String("minimal,workcenter,settings,history");
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
Object.entries(VIEW_FLAGS).filter(([viewId, enabled]) => Boolean(enabled) && isViewAllowed(viewId) && isViewLocalToSurface(viewId)).map(([viewId]) => viewId);
//#endregion
//#region ../../modules/projects/subsystem/src/other/config/settings/settings-shell-profile.ts
var HUB_SETTINGS_ALIASES = {
	"": "hub",
	hub: "hub",
	shell: "hub",
	explorer: "explorer",
	cwsp: "transfer",
	transfer: "transfer",
	viewer: "document",
	markdown: "document",
	document: "document",
	md: "document",
	process: "process",
	workcenter: "process"
};
/** Canonical path segment for a hub settings section (`hub` → no extra segment). */
var hubSettingsSectionPath = (section) => {
	if (section === "hub") return "";
	if (section === "document") return "markdown";
	return section;
};
var canonicalHubSettingsSection = (raw) => {
	return HUB_SETTINGS_ALIASES[String(raw || "").trim().toLowerCase()] || "hub";
};
[...ENABLED_VIEW_IDS$1], pickEnabledView("home", DEFAULT_VIEW_ID);
/**
* Build URL from route.
* WHY: prefer `/${view}?…` so environment/native deep links stay readable
* (`/settings?shell=environment&native=1`), not root `/?view=settings`.
*/
function buildUrl(route) {
	ensureHistoryBaseDataset();
	const view = String(route.view || "").trim().replace(/^\/+/, "").toLowerCase();
	if (shouldHandoffViewToSibling(view)) return publicHrefForView(view) || `/${view}`;
	const params = { ...route.params || {} };
	let path;
	if (view === "settings") {
		const section = hubSettingsSectionPath(canonicalHubSettingsSection(String(params.section || "").trim()));
		delete params.section;
		path = section ? withHistoryBase(`/settings/${section}`) : withHistoryBase("/settings");
	} else path = view && view !== "home" ? withHistoryBase(pathForSkuHostView(`/${view}`)) : withHistoryBase("/");
	let url = path;
	if (Object.keys(params).length > 0) {
		const search = new URLSearchParams(params).toString();
		url += (url.includes("?") ? "&" : "?") + search;
	}
	return url;
}
/**
* Navigate to a route (view)
*/
function navigate(route, options = {}) {
	const url = buildUrl(route);
	if (shouldHandoffViewToSibling(route.view) || /^https?:\/\//i.test(url)) {
		globalThis.location.assign(url);
		return;
	}
	if (options.replace) history.replaceState(options.state ?? route, "", url);
	else history.pushState(options.state ?? route, "", url);
	globalThis?.dispatchEvent?.(new CustomEvent("route-change", { detail: route }));
}
/**
* Navigate to a view
*/
function navigateToView(view, params) {
	navigate({
		view,
		params
	});
}
//#endregion
export { CORE_ENTITY_EXTRACTION_INSTRUCTION as $, resolveProcessApiUrl$1 as $n, invokeCwsNative as $t, canonicalHubSettingsSection$1 as A, resolveFleetWanGatewayHost as An, getAirPadHandshakeConnectionType as At, visibleHubSettingsSections as B, hasPendingMessages as Bn, getRemoteRouteTarget as Bt, ensureCapacitorCwspSettingsSeeded as C, CWSP_FLEET_LAN_GATEWAY_HOST as Cn, ensureSpeedDialMeta as Cr, saveSettings$1 as Ct, ecosystem_skus_exports as D, parseConnectHostInput as Dn, canParseURL as Dr, getAirPadDirectTargetUrl as Dt, DEFAULT_SETTINGS as E, collectEndpointProbeCandidates as En, speedDialItems as Er, getAirPadClientId as Et, readSettingsAreaSection as F, normalizeEcosystemToken$1 as Fn, getClientAccessToken as Ft, defaultTheme as G, sendProtocolMessage as Gn, isNeutralinoNodeClipboardHubOwned as Gt, ShellRegistry as H, processInitialContent as Hn, isClipboardHubBootstrapEnabled as Ht, rememberSettingsAreaSection as I, resolveEcosystemToken$1 as In, getClipboardBroadcastWireTargets as It, startImplicitViewMessagingBridge as J, BROADCAST_CHANNELS$1 as Jn, isShellRemoteClipboardBridgeEnabled as Jt, initializeRegistries as K, unifiedMessaging$1 as Kn, isPreferNativeWebsocketEnabled as Kt, resolveEffectiveHubSettingsSection as L, UnifiedMessaging_exports as Ln, getClipboardPushIntervalMs as Lt, hasBuiltInSettingsPanel as M, splitMultiValueList as Mn, getAirPadTransportMode as Mt, hubSettingsSectionPath$1 as N, BUILTIN_AI_MODELS as Nn, getAirPadTransportSecret as Nt, initializeLayers as O, probeEndpointOriginReport as On, getAirPadEndpointUrl as Ot, pruneBuiltInSettingsTabs as P, DEFAULT_SETTINGS$1 as Pn, getAssociatedClientToken as Pt, templates_exports as Q, viewBroadcastChannelName as Qn, initCwsNativeBridge$1 as Qt, resolveSettingsShellProfile as R, createMessageWithOverrides as Rn, getRemoteHost as Rt, applyTheme as S, CWSP_DEFAULT_HTTP_PORTS as Sn, createEmptySpeedDialItem as Sr, noteSettingsControlSync as St, shouldDeferCrxHubSocketBootstrap as T, buildEndpointOriginCandidates as Tn, persistSpeedDialMeta as Tr, getAccessToken as Tt, ViewRegistry as U, registerComponent$1 as Un, isClipboardSenderAllowedForInbound as Ut, scheduleViewModulePrefetch as V, initializeComponent$1 as Vn, isApplyRemoteClipboardToDeviceEnabled as Vt, darkTheme as W, sendMessage as Wn, isMaintainHubSocketConnectionEnabled as Wt, unifiedMessaging as X, getBroadcastChannelForDestination as Xn, CwsBridge$1 as Xt, ingressStampWasSuperseded as Y, ROUTE_HASHES$1 as Yn, setAirpadCredentialInvalidator as Yt, DEFAULT_INSTRUCTION_TEMPLATES as Z, normalizeDestination$1 as Zn, cws_bridge_exports as Zt, isCapacitorNativeShell as _, sanitizeFleetSelfWireNodeId as _n, skuForOpenSink as _r, Settings_exports as _t, initWebSocket as a, FLEET_GATEWAY_WIRE_NODE_ID as an, mergeOpenPolicy$1 as ar, isEnabledView as at, writeClipboardTextToDevice as b, shouldPreferWanGatewayForAirpad as bn, viewIdForOpenSink as br, getLastSettingsSaveReport as bt, websocket_exports as c, isFleetDeskWireNodeId as cn, peekOpenPolicy as cr, applyTheme$1 as ct, inferWireDedupeCategory as d, isGuestPrivateLanIpv4 as dn, resolveHostOpenPolicy$1 as dr, FALLBACK_BASE_COLOR$1 as dt, invokeCwsPlatformIPC$1 as en, classifyOpenKind as er, buildShareDataFromCachedPayload as et, packetWireDedupeGuard as f, isHomeFleetLanHost as fn, resolveOpenPlacement as fr, defaultColorSource$1 as ft, clipboard_device_exports as g, sanitizeFleetRouteTarget as gn, sinkToOpenLinkTarget as gr, withViewTransition as gt, annotatePacketWireTime64 as h, normalizeWireNodeIdForWire as hn, sinkToDestination as hr, getTransitionDirection as ht, disconnectWS as i, DEFAULT_DESK_WIRE_NODE_ID as in, looksLikePreviewableBinary as ir, settleIngressPaintForMinimalShell as it, defaultSettingsTabForProfile as j, splitConnectHostList as jn, getAirPadPeerInstanceId as jt, SIBLING_HUB_SETTINGS_SECTIONS$1 as k, resolveCwspUrlFields as kn, getAirPadHandshakeArchetype as kt, ensureAppLayers as l, isFleetGatewayWireNodeId as ln, rememberOpenPolicyFromSettings$1 as lr, resyncThemeAfterAdoptedViewSheet as lt, shouldAnnotateCoordinatorPayload as m, isOnHomeFleetLanPageHost as mn, sinkToAction as mr, normalizeHexColor$1 as mt, hub_socket_boot_exports as n, Capacitor as nn, classifyOpenKindFromPayload as nr, storeShareTargetPayloadToCache as nt, isWSConnected as o, airpad_cwsp_client_parity_exports as on, normalizeOpenSink$1 as or, pickEnabledView as ot, annotateCoordinatorPayload as p, isOffHomeFleetNetwork as pn, resolveOpenPolicy as pr, isAppearanceColorSource$1 as pt, lightTheme as q, API_ENDPOINTS as qn, isPushLocalClipboardToLanEnabled as qt, connectWS as r, dist_exports as rn, inferIngressChannels as rr, serviceChannels as rt, onWSConnectionChange as s, isAssociableFleetWireNodeId as sn, open_policy_exports as sr, Theme_exports as st, navigateToView as t, isCapacitorCwsNativeShell$1 as tn, classifyOpenKindFromName as tr, consumeCachedShareTargetPayload as tt, annotatePacketWireHash as u, isGatewayHttpsOrigin as un, resolveExplorerOpenSink as ur, syncBrowserChromeTheme$1 as ut, readClipboardTextFromDevice as v, shouldConnectViaFleetGateway as vn, stampHostOpenPolicy as vr, ensureCapacitorCwspSettingsSeeded$1 as vt, loadSettings as w, CWSP_FLEET_WAN_GATEWAY_HOST_FALLBACK as wn, persistSpeedDialItems as wr, applyAirpadRuntimeFromAppSettings as wt, loadStyleSystem as x, CWSP_DEFAULT_HTTPS_PORTS as xn, addSpeedDialItem as xr, loadSettings$1 as xt, writeClipboardImageToDevice as y, shouldFleetDeskGatewayProbeFallbacks as yn, surfaceForSku as yr, ensureCrxCwspSettingsSeeded as yt, skuForHubSettingsSection as z, enqueuePendingMessage as zn, getRemoteProtocol as zt };
