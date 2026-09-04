const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/capacitor-share-intent.js","../chunks/multi-value-list.js","../chunks/capacitor-permissions.js","../chunks/rolldown-runtime.js","../vendor/@capacitor_core.js","../chunks/BootLoader.js","../fest/core.js","../fest/core2.js","../fest/object.js","../fest/core3.js","../fest/uniform2.js","../chunks/ecosystem-skus.js","../fest/uniform.js","../chunks/names.js","../chunks/UnifiedMessaging.js","../chunks/UniformInterop.js","../chunks/UniformInterop2.js","../views/inbound-timing.js","../views/ingress-validation.js","../chunks/ShareTargetGateway.js","../chunks/UnifiedMessaging2.js","../chunks/airpad-cwsp-client-parity.js","../chunks/cws-bridge.js","../chunks/remote-connection-runtime.js","../chunks/packet-wire-hash.js","../fest/core4.js","../fest/core5.js","../chunks/ecosystem-skus2.js","../chunks/cws-bridge2.js","../vendor/@capacitor_core2.js","../shells/preference.js","../fest/veela4.js","../vendor/culori.js","../vendor/jsox.js","../chunks/open-policy.js","../chunks/SettingsTypes.js","../chunks/process-ingress.js","../chunks/StateStorage.js","../fest/object2.js","../chunks/Clipboard.js","../chunks/Runtime.js","../chunks/clipboard-device.js","../chunks/capacitor-settings-permissions.js"])))=>i.map(i=>d[i]);
import { a as applyCwspSku } from "../chunks/ecosystem-skus.js";
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
//#region \0vite/preload-helper.js
var scriptRel = "modulepreload";
var assetsURL = function(dep, importerUrl) {
	return new URL(dep, importerUrl).href;
};
var seen = {};
var __vitePreload = function preload(baseModule, deps, importerUrl) {
	let promise = Promise.resolve();
	if (deps && deps.length > 0) {
		const links = document.getElementsByTagName("link");
		const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
		const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
		function allSettled(promises) {
			return Promise.all(promises.map((p) => Promise.resolve(p).then((value) => ({
				status: "fulfilled",
				value
			}), (reason) => ({
				status: "rejected",
				reason
			}))));
		}
		function importMetaResolve(specifier) {
			if (import.meta.resolve) return import.meta.resolve(specifier);
			return new URL(
				specifier,
				/** #__KEEP__ */
				import.meta.url
			).href;
		}
		promise = allSettled(deps.map((dep) => {
			dep = assetsURL(dep, importerUrl);
			dep = importMetaResolve(dep);
			if (dep in seen) return;
			seen[dep] = true;
			const isCss = dep.endsWith(".css");
			for (let i = links.length - 1; i >= 0; i--) {
				const link = links[i];
				if (link.href === dep && (!isCss || link.rel === "stylesheet")) return;
			}
			const link = document.createElement("link");
			link.rel = isCss ? "stylesheet" : scriptRel;
			if (!isCss) link.as = "script";
			link.crossOrigin = "";
			link.href = dep;
			if (cspNonce) link.setAttribute("nonce", cspNonce);
			document.head.appendChild(link);
			if (isCss) return new Promise((res, rej) => {
				link.addEventListener("load", res);
				link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
			});
		}));
	}
	function handlePreloadError(err) {
		const e = new Event("vite:preloadError", { cancelable: true });
		e.payload = err;
		window.dispatchEvent(e);
		if (!e.defaultPrevented) throw err;
	}
	return promise.then((res) => {
		for (const item of res || []) {
			if (item.status !== "rejected") continue;
			handlePreloadError(item.reason);
		}
		return baseModule().catch(handlePreloadError);
	});
};
//#endregion
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
		__vitePreload(() => import("../chunks/capacitor-share-intent.js").then((mod) => mod.installCapacitorShareIntentBridge()), __vite__mapDeps([0,1,2,3]), import.meta.url).catch(() => void 0);
	} catch {}
};
var bootProcessSku = async (container, kind, view = "workcenter") => {
	const host = detectHostKind(kind);
	stampProcessSku(host);
	installProcessShareIngress();
	if (host === "capacitor") try {
		const { SystemBarType, SystemBars } = await __vitePreload(async () => {
			const { SystemBarType, SystemBars } = await import("../vendor/@capacitor_core.js").then((n) => n.r);
			return {
				SystemBarType,
				SystemBars
			};
		}, __vite__mapDeps([4,3]), import.meta.url);
		await SystemBars.hide({ bar: SystemBarType.NavigationBar });
	} catch {}
	const resolved = resolveProcessBootView(view);
	const { bootMinimal } = await __vitePreload(async () => {
		const { bootMinimal } = await import("../chunks/BootLoader.js");
		return { bootMinimal };
	}, __vite__mapDeps([5,6,7,8,9,10,11,3,12,13,14,15,16,17,18,19,20,21,1,22,4,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,2]), import.meta.url);
	await bootMinimal(container, resolved, { rememberChoice: false });
};
//#endregion
//#region src/frontend/web/capacitor/entry.ts
bootProcessSku(document.body, "capacitor", "workcenter").catch((error) => {
	showProcessBootFailure(error, document.body);
});
//#endregion
export { __vitePreload as t };
