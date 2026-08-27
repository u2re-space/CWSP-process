const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../shells/boot-index.js","../chunks/rolldown-runtime.js","../shells/boot-history-base.js","../com/app.js","../fest/core.js","../com/service.js","../fest/veela.js","../chunks/BootLoader.js","../shells/preference.js","../chunks/capacitor-settings-permissions.js","../chunks/capacitor-permissions.js"])))=>i.map(i=>d[i]);
import { a as applyCwspSku, g as stashSkuHandoff } from "../shells/boot-history-base.js";
import { Hn as __vitePreload } from "../com/app.js";
//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
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
/**
* WHY: Capacitor share / PROCESS_TEXT should land in WorkCenter on this SKU,
* not only fan out to the clipboard bus.
*/
var installProcessShareIngress = () => {
	const g = globalThis;
	if (g.__CWSP_PROCESS_SHARE__) return;
	g.__CWSP_PROCESS_SHARE__ = true;
	window.addEventListener("cws:shareIntent", (ev) => {
		const detail = ev.detail;
		let text = "";
		let filename = "";
		if (typeof detail === "string") text = detail;
		else if (detail && typeof detail === "object") {
			text = String(detail.text || detail.asset?.data || "");
			filename = String(detail.asset?.name || "");
		}
		text = text.trim();
		if (!text) return;
		stashSkuHandoff({
			dest: "workcenter",
			content: text,
			filename: filename || void 0
		});
		window.dispatchEvent(new CustomEvent("cwsp:process-open", { detail: {
			content: text,
			filename
		} }));
	});
};
var bootProcessSku = async (container, kind, view = "workcenter") => {
	const host = detectHostKind(kind);
	stampProcessSku(host);
	installProcessShareIngress();
	if (host === "capacitor") try {
		const { SystemBarType, SystemBars } = await __vitePreload(async () => {
			const { SystemBarType, SystemBars } = await import("../shells/boot-index.js").then((n) => n.tn);
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
