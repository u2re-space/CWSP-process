const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/capacitor-share-intent.js","../com/app.js","../chunks/rolldown-runtime.js","../shells/boot-index.js","../shells/boot-history-base.js","../fest/core.js","../com/service.js","../fest/veela.js","../chunks/capacitor-permissions.js","../chunks/BootLoader.js","../shells/preference.js","../chunks/capacitor-settings-permissions.js"])))=>i.map(i=>d[i]);
import "../chunks/vite-preload-BsPm7yBB.js";
import { a as applyCwspSku } from "../shells/boot-history-base.js";
const __vitePreload = (baseModule) => Promise.resolve().then(() => baseModule());
//#region src/frontend/web/sku-boot.ts
/** INVARIANT: process chrome is workcenter + settings + history. `minimal` is the shell, not a view. */
var ENABLED_VIEWS = "workcenter,settings,history";
var PROCESS_VIEW_ALIASES = {
	workcenter: "workcenter",
	process: "workcenter",
	settings: "settings",
	history: "history"
};
var detectHostKind = (explicit) => {
	if (explicit) return explicit;
	try {
		const proto = String(globalThis.location?.protocol || "").toLowerCase();
		if (proto === "chrome-extension:" || proto === "moz-extension:") return "crx";
		const g = globalThis;
		if (typeof g.Capacitor?.isNativePlatform === "function" && g.Capacitor.isNativePlatform()) return "capacitor";
	} catch {}
	return "web";
};
var readProcessViewAlias = (raw) => {
	return PROCESS_VIEW_ALIASES[String(raw || "").trim().toLowerCase()] || null;
};
/** Query `?view=`, then path segment, then explicit/default `workcenter`. */
var resolveProcessBootView = (explicit) => {
	try {
		const fromQuery = readProcessViewAlias(new URLSearchParams(String(globalThis.location?.search || "")).get("view") || "");
		if (fromQuery) return fromQuery;
	} catch {}
	try {
		const fromPath = readProcessViewAlias(String(globalThis.location?.pathname || "/").split("/").filter(Boolean)[0] || "");
		if (fromPath) return fromPath;
	} catch {}
	return readProcessViewAlias(explicit || "") || "workcenter";
};
var stampProcessSku = (kind) => {
	const host = detectHostKind(kind);
	applyCwspSku("process");
	const root = document.documentElement;
	root.dataset.cwspSku = "process";
	root.dataset.cwspApp = "process";
	root.dataset.cwspSurface = host === "crx" ? "cw-process-crx" : host === "capacitor" ? "cw-process" : "cw-workcenter";
	root.dataset.cwspEnabledViews = ENABLED_VIEWS;
	root.dataset.cwspDefaultView = "workcenter";
	root.dataset.cwspDefaultShell = "minimal";
	if (host === "capacitor") root.dataset.cwspNativeShell = "capacitor";
	else if (host === "crx") root.dataset.cwspNativeShell = "crx";
	try {
		const hostname = String(location.hostname || "").toLowerCase();
		if (!(hostname === "process.u2re.space" || hostname === "workcenter.u2re.space" || hostname === "ai.u2re.space")) {
			const m = String(location.pathname || "").match(/^(\/(?:process|workcenter|ai))(?:\/|$)/i);
			if (m) root.dataset.cwspRouterBase = m[1].toLowerCase();
		}
	} catch {}
};
var showProcessBootFailure = (error, mount = document.body) => {
	const message = error instanceof Error ? error.stack || error.message : String(error);
	console.error("[CWSP-process] boot failed", error);
	mount.replaceChildren();
	mount.style.cssText = "margin:0;padding:16px;font:14px/1.4 ui-monospace,monospace;background:#111;color:#f66;white-space:pre-wrap;";
	mount.textContent = `[CWSP-process] boot failed\n\n${message}`;
};
/**
* WHY: install the share bridge before `bootMinimal` so cold-start SEND/VIEW
* is not dropped while BootLoader is still loading settings/styles.
*/
var installProcessShareIngress = () => {
	try {
		const g = globalThis;
		if (typeof g.Capacitor?.isNativePlatform !== "function" || !g.Capacitor.isNativePlatform()) return;
		__vitePreload(() => import("../chunks/capacitor-share-intent.js").then((mod) => mod.installCapacitorShareIntentBridge()), __vite__mapDeps([0,1,2,3,4,5,6,7,8]), import.meta.url).catch(() => void 0);
	} catch {}
};
var bootProcessSku = async (container, kind, view = "workcenter") => {
	const host = detectHostKind(kind);
	stampProcessSku(host);
	installProcessShareIngress();
	if (host === "capacitor") try {
		const { SystemBarType, SystemBars } = await __vitePreload(async () => {
			const { SystemBarType, SystemBars } = await import("../shells/boot-index.js").then((n) => n.mn);
			return {
				SystemBarType,
				SystemBars
			};
		}, __vite__mapDeps([3,2,4,1,5,6,7]), import.meta.url);
		await SystemBars.hide({ bar: SystemBarType.NavigationBar });
	} catch {}
	const resolved = resolveProcessBootView(view);
	const { bootMinimal } = await __vitePreload(async () => {
		const { bootMinimal } = await import("../chunks/BootLoader.js");
		return { bootMinimal };
	}, __vite__mapDeps([9,1,2,5,3,4,6,7,10,11,8]), import.meta.url);
	await bootMinimal(container, resolved, { rememberChoice: false });
};
//#endregion
//#region src/frontend/web/capacitor/entry.ts
bootProcessSku(document.body, "capacitor", "workcenter").catch((error) => {
	showProcessBootFailure(error, document.body);
});
//#endregion
