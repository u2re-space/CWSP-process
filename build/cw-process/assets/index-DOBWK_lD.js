const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/src2.js","../com/app.js","../chunks/rolldown-runtime.js","../shells/boot-index.js","../fest/core.js","../shells/boot-history-base.js","../com/service.js","../fest/veela.js","../chunks/sw-handling.js","../chunks/log-sanitizer.js","../chunks/sw-page-bridge.js","../chunks/sku-ingress.js","../chunks/ViewTransferRouting.js"])))=>i.map(i=>d[i]);
import "../chunks/vite-preload-BsPm7yBB.js";
const __vitePreload = (baseModule) => Promise.resolve().then(() => baseModule());
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
		const loadMain = __vitePreload(() => import("../chunks/src2.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url);
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
