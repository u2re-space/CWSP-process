const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../shells/boot-index.js","../chunks/rolldown-runtime.js","../shells/boot-history-base.js","../com/app.js","../fest/core.js","../com/service.js","../fest/veela.js","../chunks/BootLoader.js","../shells/preference.js","../chunks/capacitor-settings-permissions.js","../chunks/capacitor-permissions.js"])))=>i.map(i=>d[i]);
import "../chunks/vite-preload-BsPm7yBB.js";
import { a as applyCwspSku } from "../shells/boot-history-base.js";
const __vitePreload = (baseModule) => Promise.resolve().then(() => baseModule());
//#region src/frontend/web/sku-boot.ts
var ENABLED_VIEWS = "minimal,workcenter,settings,history";
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
var stampProcessSku = (kind) => {
	applyCwspSku("process");
	const root = document.documentElement;
	root.dataset.cwspSku = "process";
	root.dataset.cwspApp = "process";
	root.dataset.cwspSurface = kind === "crx" ? "cw-process-crx" : kind === "capacitor" ? "cw-process" : "cw-workcenter";
	root.dataset.cwspEnabledViews = ENABLED_VIEWS;
	root.dataset.cwspDefaultView = "workcenter";
	if (kind === "capacitor") root.dataset.cwspNativeShell = "capacitor";
	else if (kind === "crx") root.dataset.cwspNativeShell = "crx";
	try {
		const host = String(location.hostname || "").toLowerCase();
		if (!(host === "process.u2re.space" || host === "workcenter.u2re.space")) {
			const m = String(location.pathname || "").match(/^(\/(?:process|workcenter))(?:\/|$)/i);
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
var bootProcessSku = async (container, kind, view = "workcenter") => {
	const host = detectHostKind(kind);
	stampProcessSku(host);
	if (host === "capacitor") try {
		const { SystemBarType, SystemBars } = await __vitePreload(async () => {
			const { SystemBarType, SystemBars } = await import("../shells/boot-index.js").then((n) => n.rn);
			return {
				SystemBarType,
				SystemBars
			};
		}, __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url);
		await SystemBars.hide({ bar: SystemBarType.NavigationBar });
	} catch {}
	const { bootMinimal } = await __vitePreload(async () => {
		const { bootMinimal } = await import("../chunks/BootLoader.js");
		return { bootMinimal };
	}, __vite__mapDeps([7,3,1,4,0,2,5,6,8,9,10]), import.meta.url);
	await bootMinimal(container, view);
};
//#endregion
//#region src/frontend/web/capacitor/entry.ts
bootProcessSku(document.body, "capacitor", "workcenter").catch((error) => {
	showProcessBootFailure(error, document.body);
});
//#endregion
