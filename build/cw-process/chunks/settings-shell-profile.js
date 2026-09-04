import { f as ENABLED_VIEW_IDS, n as ViewRegistry, p as isEnabledView } from "../fest/uniform2.js";
import { c as inferCwspSkuFromLocation, h as readCwspSku } from "./ecosystem-skus.js";
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
	const others = ENABLED_VIEW_IDS.filter((id) => id !== currentViewId);
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
	return inferCwspSkuFromLocation() || readCwspSku();
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
	if (profile === "process") return "workcenter";
	if (profile === "environment") return "appearance";
	if (profile === "explorer") return "appearance";
	return "ai";
};
var hasBuiltInSettingsPanel = (root, panelId) => Boolean(root.querySelector(`[data-tab-panel="${panelId}"]`));
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
var isCentralHubHost = () => {
	try {
		const sku = inferCwspSkuFromLocation();
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
		return canonicalHubSettingsSection(segs[1] || "");
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
var SIBLING_HUB_SETTINGS_SECTIONS = [
	"explorer",
	"document",
	"process",
	"transfer"
];
var ALL_HUB_SETTINGS_SECTIONS = ["hub", ...SIBLING_HUB_SETTINGS_SECTIONS];
/**
* Hub shows every area. Launcher Android shows Shell plus installed sibling APKs only.
* Empty → hide the area nav (no extra tabs).
*/
var visibleHubSettingsSections = (mode, installedSiblings) => {
	if (mode === "hub") return ALL_HUB_SETTINGS_SECTIONS.slice();
	if (mode === "launcher") {
		if (!installedSiblings) return [];
		const sibs = SIBLING_HUB_SETTINGS_SECTIONS.filter((s) => installedSiblings.includes(s));
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
		return raw ? canonicalHubSettingsSection(raw) : "";
	} catch {
		return "";
	}
};
//#endregion
export { hubSettingsSectionPath as a, rememberSettingsAreaSection as c, skuForHubSettingsSection as d, visibleHubSettingsSections as f, hasBuiltInSettingsPanel as i, resolveEffectiveHubSettingsSection as l, canonicalHubSettingsSection as n, pruneBuiltInSettingsTabs as o, scheduleViewModulePrefetch as p, defaultSettingsTabForProfile as r, readSettingsAreaSection as s, SIBLING_HUB_SETTINGS_SECTIONS as t, resolveSettingsShellProfile as u };
