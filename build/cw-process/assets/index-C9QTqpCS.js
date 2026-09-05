const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/src.js","../fest/core.js","../fest/core2.js","../fest/object.js","../fest/core4.js","../chunks/rolldown-runtime.js","../fest/core5.js","../fest/uniform.js","../vendor/jsox.js","../chunks/ecosystem-skus.js","../chunks/ShareTargetGateway.js","../chunks/names.js","../chunks/layer-manager.js","../vendor/@fest-lib_lure.js","../vendor/jsox2.js","../chunks/open-policy.js","../chunks/SettingsTypes.js","../chunks/process-ingress.js","../chunks/airpad-cwsp-client-parity.js","../chunks/multi-value-list.js","../chunks/cws-bridge.js","../fest/core3.js","../vendor/@capacitor_core.js","../chunks/UniformInterop2.js","../chunks/remote-connection-runtime.js","../chunks/UnifiedMessaging.js","../chunks/UniformInterop.js","../chunks/process-api-result.js","../chunks/UnifiedMessaging2.js","../chunks/sku-ingress.js","../chunks/log-sanitizer.js","../chunks/sw-page-bridge.js","../chunks/workcenter-command-wire.js","../chunks/ViewTransferRouting.js"])))=>i.map(i=>d[i]);
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
//#region src/frontend/boot/html-boot.ts
/**
* Bootstraps the app from index.html. Kept as a separate module so Vite does not
* use addInlineModule() on a large inline script (avoids MagicString
* "Cannot overwrite a zero-length range" with PWA / other index transforms).
*
* WHY: On slow LAN / HTTPS reverse-proxy dev, the static `index.html` splash can appear to
* "hang" forever if `import(index.ts)` is blocked or if users expect faster feedback. We replace
* that placeholder immediately and time out with an actionable error instead of spinning silently.
*/
var MODULE_LOAD_TIMEOUT_MS = 12e4;
var showBootSplash = (mount, message) => {
	mount.replaceChildren();
	const wrap = document.createElement("div");
	wrap.className = "html-boot-splash";
	wrap.style.cssText = "display:flex;flex-direction:column;align-items:center;justify-content:center;min-block-size:40vh;padding:2rem;font-family:system-ui,sans-serif;text-align:center;color:light-dark(#333,#ddd);";
	const spin = document.createElement("div");
	spin.style.cssText = "inline-size:28px;block-size:28px;border:3px solid light-dark(#e8e8e8,#444);border-block-start-color:#007acc;border-radius:50%;animation:html-boot-spin 0.9s linear infinite;margin-block-end:0.75rem;";
	const style = document.createElement("style");
	style.textContent = "@keyframes html-boot-spin{to{transform:rotate(360deg)}}";
	const msg = document.createElement("p");
	msg.style.margin = "0";
	msg.style.maxInlineSize = "42rem";
	msg.textContent = message;
	wrap.append(style, spin, msg);
	mount.append(wrap);
};
(async () => {
	const mount = document.getElementById("app");
	if (!mount) {
		console.error("[Boot] #app missing");
		return;
	}
	try {
		showBootSplash(mount, "Loading application modules…");
		const loadMain = __vitePreload(() => import("../chunks/src.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]), import.meta.url);
		const timeout = new Promise((_, reject) => {
			globalThis.setTimeout(() => {
				reject(/* @__PURE__ */ new Error("Timed out loading app modules. Try: hard refresh (Ctrl+Shift+R), confirm Vite is running, check DevTools Network for failed /src/ requests. If you use HTTPS on a LAN IP behind a proxy, set VITE_DEV_SERVER_ORIGIN to the public origin (see shared/vite.config.js)."));
			}, MODULE_LOAD_TIMEOUT_MS);
		});
		const run = (await Promise.race([loadMain, timeout]))?.default;
		if (typeof run !== "function") {
			console.error("[Boot] default export is not a function:", run);
			return;
		}
		await run(mount);
	} catch (error) {
		console.error("[Boot] Failed:", error);
		mount.replaceChildren();
		const wrap = document.createElement("div");
		wrap.style.cssText = "display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:50vh;padding:2rem;font-family:system-ui,sans-serif;text-align:center;";
		const title = document.createElement("h2");
		title.style.color = "#d32f2f";
		title.textContent = "Failed to start";
		const msg = document.createElement("p");
		msg.style.color = "#666";
		msg.textContent = error instanceof Error ? error.message : String(error);
		const btn = document.createElement("button");
		btn.type = "button";
		btn.textContent = "Reload";
		btn.style.cssText = "margin-top:1rem;padding:0.5rem 1rem;cursor:pointer;border-radius:6px;border:1px solid #ccc;background:#f5f5f5;";
		btn.addEventListener("click", () => location.reload());
		wrap.append(title, msg, btn);
		mount.append(wrap);
	}
})();
//#endregion
export { __vitePreload as t };
