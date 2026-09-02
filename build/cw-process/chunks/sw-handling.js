const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../shells/boot-index.js","./rolldown-runtime.js","../com/app.js","../fest/core.js","../shells/boot-history-base.js","../com/service.js","../fest/veela.js","./BootLoader.js","../shells/preference.js","./capacitor-settings-permissions.js","./capacitor-permissions.js","./RuntimeSettings.js","./sku-ingress.js"])))=>i.map(i=>d[i]);
import { $t as isBase64Like, It as bindDirectoryForLaunchedFiles, On as copy, Or as __vitePreload, kn as initClipboardReceiver, tn as parseDataUrl } from "../com/app.js";
import { Er as classifyOpenKindFromPayload, Jn as formatProcessIngressResult, Kn as allowProcessWebLaunchQueue, Mt as loadSettings, Xn as instructionTextForIngress, Yn as holdCapacitorIngressJob, at as readProcessApiResultText, ct as storeShareTargetPayloadToCache$1, er as rememberProcessIngressSettings, gr as unifiedMessaging, it as processApiAuthFromSettings, lt as safeCacheMatch, nr as writeProcessIngressClipboard, ot as buildShareDataFromCachedPayload, pn as unwrapSwInteropMessage, qn as allowProcessWebShareLaunch, rt as postProcessApi, st as consumeCachedShareTargetPayload$1, tr as resolveProcessIngressKind, tt as unifiedMessaging$1, ut as safeCacheOpen, vr as BROADCAST_CHANNELS } from "../shells/boot-index.js";
import { _ as stashSkuHandoff, c as isCwspNativeHost, n as SKU_HUB_PATHS, s as inferCwspSkuFromLocation } from "../shells/boot-history-base.js";
import { t as summarizeForLog$1 } from "./log-sanitizer.js";
import { t as postWorkCenterCommand } from "./workcenter-command-wire.js";
import { i as ingestSwClientMessage, n as deliverShareTargetInput, r as deliverSwResultToWorkCenter, t as bindSwPageBridge } from "./sw-page-bridge.js";
import { a as installShellImageOpenListener, c as refineLauncherImageIngress, i as holdIngressFiles, l as skuIngressHint, r as flushHeldIngressToWorkCenter, s as peekHeldIngressFiles, t as applyLauncherIngress } from "./sku-ingress.js";
import { i as dispatchViewTransfer, n as classifyIngressFile, r as classifyIngressFromBasename } from "./ViewTransferRouting.js";
//#region src/shared/routing/pwa/sw-url.ts
var isLikelyJavaScriptContentType = (contentType) => {
	const ct = (contentType || "").toLowerCase();
	return ct.includes("javascript") || ct.includes("ecmascript") || ct.includes("module") || ct.includes("text/javascript");
};
var isLikelyHtmlContentType = (contentType) => {
	const ct = (contentType || "").toLowerCase();
	return ct.includes("text/html") || ct.includes("application/xhtml");
};
/** SPA / proxy fallbacks often return 200 + HTML for unknown paths — never call `register()` in that case (MIME SecurityError spam). */
var bodyLooksLikeHtmlDocument = (snippet) => {
	const head = snippet.trimStart().slice(0, 400);
	if (!head) return false;
	return head.startsWith("<!") || /^<\s*html[\s>]/i.test(head) || head.startsWith("<!--");
};
var PROBE_TIMEOUT_MS = 8e3;
/** WHY: Vite 8 only inlines `import.meta.env.DEV` / `BASE_URL` on the exact member access — `(import.meta as any).env.DEV` stays undefined and we only probe `/sw.js` (SPA HTML). */
var isViteDev = () => Boolean(void 0);
var viteBaseUrl = () => String("./");
var probeScriptUrl = async (url) => {
	const ac = new AbortController();
	const timer = setTimeout(() => ac.abort(), PROBE_TIMEOUT_MS);
	try {
		const res = await fetch(url, {
			method: "GET",
			cache: "no-store",
			credentials: "same-origin",
			signal: ac.signal
		});
		const contentType = res.headers.get("content-type");
		const status = res.status;
		if (!res.ok) return {
			ok: false,
			url,
			contentType,
			status
		};
		if (isLikelyHtmlContentType(contentType)) return {
			ok: false,
			url,
			contentType,
			status
		};
		if (isLikelyJavaScriptContentType(contentType)) return {
			ok: true,
			url,
			contentType,
			status
		};
		try {
			const sample = (await res.clone().text()).trimStart().slice(0, 2048);
			if (bodyLooksLikeHtmlDocument(sample)) return {
				ok: false,
				url,
				contentType,
				status
			};
			if (/^\s*(?:\/\/|\/\*|import\s|export\s|self\.|'use strict'|"use strict")/m.test(sample) || /\b(?:addEventListener|serviceWorker|workbox|skipWaiting|caches\.|navigator\.serviceWorker)\b/.test(sample)) return {
				ok: true,
				url,
				contentType,
				status
			};
		} catch {}
		return {
			ok: false,
			url,
			contentType,
			status
		};
	} catch {
		return {
			ok: false,
			url
		};
	} finally {
		clearTimeout(timer);
	}
};
/** Legacy markdown path-mount (not `md.u2re.space`). */
var isCwMarkdownMount = () => {
	try {
		const p = String(globalThis?.location?.pathname || "");
		return p === "/apps/cw" || p.startsWith("/apps/cw/");
	} catch {
		return false;
	}
};
var scriptPathname = (scriptURL) => {
	try {
		const origin = typeof globalThis !== "undefined" && globalThis.location?.origin ? String(globalThis.location.origin) : "https://invalid.invalid";
		return new URL(scriptURL, `${origin}/`).pathname;
	} catch {
		return "";
	}
};
/** `/apps/cw/sw.js` on `u2re.space/` is a leftover from the old path SKU. */
var isForeignSkuWorkerScript = (scriptURL) => {
	const path = scriptPathname(scriptURL);
	return (path === "/apps/cw/sw.js" || path.startsWith("/apps/cw/")) && !isCwMarkdownMount();
};
/**
* Drop workers whose script 404s or belongs to another SKU.
* WHY: `getRegistration()` returns a zombie `/apps/cw/sw.js` after markdown moved hosts.
*/
var dropStaleServiceWorkerRegistrations = async () => {
	if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;
	let regs = [];
	try {
		regs = await navigator.serviceWorker.getRegistrations();
	} catch {
		return;
	}
	for (const reg of regs) {
		const src = reg.active?.scriptURL || reg.waiting?.scriptURL || reg.installing?.scriptURL || "";
		if (!src || isForeignSkuWorkerScript(src)) {
			if (src) console.warn("[SW] Unregistering foreign SKU worker:", src);
			await reg.unregister().catch(() => {});
			continue;
		}
		const probe = await probeScriptUrl(src);
		if (probe.ok) continue;
		console.warn("[SW] Unregistering worker with dead script:", src, probe.status);
		await reg.unregister().catch(() => {});
	}
};
/** Vite base (e.g. `/` or `/apps/cw/`) — normalized with trailing slash. */
var viteBasePrefix = () => {
	const raw = viteBaseUrl();
	if (raw === "/" || raw === "") return "/";
	return raw.endsWith("/") ? raw : `${raw}/`;
};
/**
* When the dev build used `base: "/"` but the app is opened under a subpath (reverse proxy or
* `/apps/cw/`), `import.meta.env.BASE_URL` is wrong and SW probes miss the real `…/dev-sw.js?dev-sw`.
*/
var inferMountBaseFromPathname = () => {
	try {
		const m = String(globalThis?.location?.pathname || "").match(/^(\/apps\/cw)(?:\/|$)/);
		if (m?.[1]) {
			const p = m[1];
			return p.endsWith("/") ? p : `${p}/`;
		}
	} catch {}
	return null;
};
/** Collect distinct URL prefixes (vite BASE_URL + path inference) for SW script candidates. */
var serviceWorkerPathBases = () => {
	const primary = viteBasePrefix();
	const inferred = inferMountBaseFromPathname();
	const out = [];
	const push = (b) => {
		const n = b === "" ? "/" : b.endsWith("/") ? b : `${b}/`;
		if (!out.includes(n)) out.push(n);
	};
	push(primary);
	if (inferred && inferred !== primary) push(inferred);
	return out;
};
/**
* Default SW scope for a script URL (browser allows at most the script’s directory).
* `/sw.js` → `/` ; `/apps/cw/sw.js` → `/apps/cw/`
*/
var scopeForServiceWorkerScript = (swUrl) => {
	try {
		const origin = typeof globalThis !== "undefined" && globalThis.location?.origin ? String(globalThis.location.origin) : "https://invalid.invalid";
		const path = new URL(swUrl, `${origin}/`).pathname;
		const slash = path.lastIndexOf("/");
		return slash <= 0 ? "/" : path.slice(0, slash + 1);
	} catch {
		return "/";
	}
};
var getServiceWorkerCandidates = () => {
	const isDev = isViteDev();
	const bases = serviceWorkerPathBases();
	const perBaseDev = [];
	const perBaseProd = [];
	for (const b of bases) {
		perBaseDev.push(`${b}dev-sw.js?dev-sw`);
		if (b !== "/") {
			perBaseDev.push(`${b}sw.js`);
			perBaseProd.push(`${b}sw.js`);
		}
	}
	const devFallbacks = ["/dev-sw.js?dev-sw", "/sw.js"];
	let prod = ["/sw.js"];
	if (isCwMarkdownMount()) prod = ["/apps/cw/sw.js", "/sw.js"];
	const merged = isDev ? [
		...perBaseDev,
		...devFallbacks,
		...perBaseProd
	] : [.../* @__PURE__ */ new Set([
		...perBaseProd,
		...prod,
		"/dev-sw.js?dev-sw"
	])];
	return [...new Set(merged)];
};
var ensureServiceWorkerRegistered = async () => {
	if (typeof window === "undefined") return null;
	if (!("serviceWorker" in navigator)) return null;
	const protocol = (globalThis?.location?.protocol || "").toLowerCase();
	if (protocol === "chrome-extension:" || protocol === "file:" || protocol === "about:") return null;
	if (protocol !== "https:" && protocol !== "http:") return null;
	await dropStaleServiceWorkerRegistrations();
	const tryGet = async (clientUrl) => {
		if (!clientUrl) return void 0;
		try {
			return await navigator.serviceWorker.getRegistration(clientUrl) ?? void 0;
		} catch {
			return;
		}
	};
	try {
		let existing = await tryGet(typeof globalThis !== "undefined" ? globalThis.location?.href : "");
		if (!existing?.active && !existing?.waiting && !existing?.installing) {
			const origin = typeof globalThis !== "undefined" && globalThis.location?.origin ? String(globalThis.location.origin) : "";
			const base = viteBasePrefix();
			if (origin && base !== "/") existing = await tryGet(new URL(base, origin).href);
		}
		if (!existing?.active && !existing?.waiting && !existing?.installing) {
			const origin = typeof globalThis !== "undefined" && globalThis.location?.origin ? String(globalThis.location.origin) : "";
			if (origin) existing = await tryGet(new URL("/", origin).href);
		}
		if (existing?.active || existing?.waiting || existing?.installing) return existing;
	} catch {}
	const candidates = getServiceWorkerCandidates();
	const tryRegister = async (url) => {
		const scope = scopeForServiceWorkerScript(url);
		if (url.includes("/dev-sw.js?dev-sw")) try {
			return await navigator.serviceWorker.register(url, {
				scope,
				type: "module",
				updateViaCache: "none"
			});
		} catch (eModule) {
			if (isViteDev()) console.warn("[SW] Dev worker registration failed (module)", url, eModule);
			return null;
		}
		try {
			return await navigator.serviceWorker.register(url, {
				scope,
				updateViaCache: "none"
			});
		} catch (eClassic) {
			if (isViteDev()) console.warn("[SW] Registration failed for", url, eClassic);
			return null;
		}
	};
	for (const url of candidates) {
		if (!(await probeScriptUrl(url)).ok) continue;
		const reg = await tryRegister(url);
		if (reg) return reg;
	}
	if (isViteDev()) try {
		const probes = await Promise.all(candidates.map(probeScriptUrl));
		console.warn("[SW] No service worker registered; candidates exhausted. Dev probes:", probes);
	} catch {}
	return null;
};
//#endregion
//#region src/shared/boot/toast.ts
var DEFAULT_CONFIG = {
	containerId: "rs-toast-layer",
	position: "bottom",
	maxToasts: 5,
	zIndex: 2147483647
};
var DEFAULT_DURATION = 3e3;
var TRANSITION_DURATION = 200;
/** Suppress the same toast repeating within this window (main thread + broadcast). */
var DEDUPE_WINDOW_MS = 400;
var lastToastFingerprint = "";
var lastToastFingerprintAt = 0;
var toastFingerprint = (opts) => `${opts.kind || "info"}\0${opts.position || DEFAULT_CONFIG.position}\0${opts.message}`;
var hasVisibleDuplicate = (layer, message, kind) => {
	for (const el of Array.from(layer?.children ?? [])) if (el instanceof HTMLElement && el.classList.contains("rs-toast") && el.getAttribute("data-kind") === kind && el.textContent === message) return true;
	return false;
};
/**
* Self-contained toast CSS (Shadow DOM).
* INVARIANT: no `light-dark()`, no `@layer`, no host CSS variables for color —
* content scripts must look identical on every page.
*/
var TOAST_STYLES = `
:host {
    all: initial !important;
    position: fixed !important;
    inset: 0 !important;
    display: block !important;
    pointer-events: none !important;
    z-index: var(--shell-toast-z, 2147483647) !important;
    overflow: visible !important;
}

.rs-toast-layer {
    position: fixed;
    z-index: 1;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 20px;
    gap: 8px;
    max-block-size: 80dvh;
    max-block-size: 80dvb;
    overflow: hidden;
    box-sizing: border-box;
    margin: 0;
    border: none;
    background: transparent;
}

.rs-toast-layer[data-position="bottom"],
.rs-toast-layer:not([data-position]) {
    inset-block-end: 24px;
    inset-block-start: auto;
    inset-inline: 0;
    justify-content: flex-end;
}

.rs-toast-layer[data-position="top"] {
    inset-block-start: 24px;
    inset-block-end: auto;
    inset-inline: 0;
    justify-content: flex-start;
}

.rs-toast-layer[data-position="top-left"] {
    inset-block-start: 24px;
    inset-inline-start: 16px;
    inset-inline-end: auto;
    align-items: flex-start;
}

.rs-toast-layer[data-position="top-right"] {
    inset-block-start: 24px;
    inset-inline-end: 16px;
    inset-inline-start: auto;
    align-items: flex-end;
}

.rs-toast-layer[data-position="bottom-left"] {
    inset-block-end: 24px;
    inset-inline-start: 16px;
    inset-inline-end: auto;
    align-items: flex-start;
}

.rs-toast-layer[data-position="bottom-right"] {
    inset-block-end: 24px;
    inset-inline-end: 16px;
    inset-inline-start: auto;
    align-items: flex-end;
}

.rs-toast {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 14px;
    max-inline-size: min(90vw, 28rem);
    inline-size: fit-content;
    min-block-size: 2.25rem;
    box-sizing: border-box;

    border-radius: 10px;
    border: 1px solid rgba(248, 250, 252, 0.14);
    background-color: #0f172a;
    color: #f8fafc;
    box-shadow: 0 10px 28px rgba(2, 6, 23, 0.45);

    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.01em;
    line-height: 1.4;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    word-break: break-word;
    text-align: center;

    pointer-events: auto;
    user-select: none;
    -webkit-user-select: none;
    cursor: default;

    opacity: 0;
    transform: translateY(12px) scale(0.96);
    transition:
        opacity 180ms ease-out,
        transform 180ms cubic-bezier(0.16, 1, 0.3, 1);
}

.rs-toast[data-visible] {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.rs-toast:active {
    transform: scale(0.98);
}

.rs-toast[data-kind="info"] {
    background-color: #0f172a;
    color: #f8fafc;
    border-color: rgba(148, 163, 184, 0.35);
}

.rs-toast[data-kind="success"] {
    background-color: #166534;
    color: #f0fdf4;
    border-color: rgba(187, 247, 208, 0.35);
}

.rs-toast[data-kind="warning"] {
    background-color: #b45309;
    color: #fffbeb;
    border-color: rgba(253, 230, 138, 0.4);
}

.rs-toast[data-kind="error"] {
    background-color: #b91c1c;
    color: #fef2f2;
    border-color: rgba(254, 202, 202, 0.4);
}

@media (prefers-reduced-motion: reduce) {
    .rs-toast,
    .rs-toast[data-visible] {
        transition-duration: 0ms;
        transform: none;
    }
}

@media print {
    :host,
    .rs-toast-layer,
    .rs-toast {
        display: none !important;
    }
}
`;
var toastLayers = /* @__PURE__ */ new Map();
var toastHosts = /* @__PURE__ */ new Map();
/**
* Get or create an isolated toast mount (host + Shadow DOM layer).
*/
var getToastMount = (config, doc = document) => {
	const key = `${config.containerId}-${config.position}`;
	const cachedLayer = toastLayers.get(key);
	const cachedHost = toastHosts.get(key);
	if (cachedLayer?.isConnected && cachedHost?.isConnected) {
		cachedLayer.setAttribute("data-position", config.position);
		cachedHost.style.setProperty("--shell-toast-z", String(config.zIndex));
		return {
			host: cachedHost,
			layer: cachedLayer
		};
	}
	toastLayers.delete(key);
	toastHosts.delete(key);
	let host = doc.getElementById(config.containerId);
	if (!host) {
		host = doc.createElement("div");
		host.id = config.containerId;
		host.setAttribute("data-cwsp-toast-host", "");
		host.style.cssText = [
			"all: initial",
			"position: fixed",
			"inset: 0",
			"display: block",
			"pointer-events: none",
			`z-index: ${config.zIndex}`,
			"overflow: visible",
			"margin: 0",
			"padding: 0",
			"border: none",
			"background: transparent"
		].join(";");
		(doc.body || doc.documentElement).appendChild(host);
	}
	host.style.setProperty("--shell-toast-z", String(config.zIndex));
	let shadow = host.shadowRoot;
	if (!shadow) shadow = host.attachShadow({ mode: "open" });
	let styleEl = shadow.querySelector("style[data-rs-toast]");
	if (!styleEl) {
		styleEl = doc.createElement("style");
		styleEl.setAttribute("data-rs-toast", "");
		styleEl.textContent = TOAST_STYLES;
		shadow.insertBefore(styleEl, shadow.firstChild);
	} else styleEl.textContent = TOAST_STYLES;
	let layer = shadow.querySelector(".rs-toast-layer");
	if (!layer) {
		layer = doc.createElement("div");
		layer.className = "rs-toast-layer";
		layer.setAttribute("aria-live", "polite");
		layer.setAttribute("aria-atomic", "true");
		shadow.appendChild(layer);
	}
	layer.setAttribute("data-position", config.position);
	toastLayers.set(key, layer);
	toastHosts.set(key, host);
	return {
		host,
		layer
	};
};
/**
* Broadcast toast to all clients (for service worker context)
*/
var broadcastToast = (options) => {
	try {
		const channel = new BroadcastChannel("rs-toast");
		channel.postMessage({
			type: "show-toast",
			options
		});
		channel.close();
	} catch (e) {
		console.warn("[Toast] Broadcast failed:", e);
	}
};
/**
* Create and show a toast notification
*
* @param options - Toast options object or message string
* @returns The created toast element, or null if in service worker context
*/
var showToast = (options) => {
	const opts = typeof options === "string" ? { message: options } : options;
	const { message, kind = "info", duration = DEFAULT_DURATION, persistent = false, position = DEFAULT_CONFIG.position, onClick } = opts;
	if (!message) return null;
	const fp = toastFingerprint(opts);
	const now = Date.now();
	if (fp === lastToastFingerprint && now - lastToastFingerprintAt < DEDUPE_WINDOW_MS) return null;
	if (typeof document === "undefined") {
		lastToastFingerprint = fp;
		lastToastFingerprintAt = now;
		broadcastToast(opts);
		return null;
	}
	const config = {
		...DEFAULT_CONFIG,
		position
	};
	const { layer } = getToastMount(config);
	if (hasVisibleDuplicate(layer, message, kind)) {
		lastToastFingerprint = fp;
		lastToastFingerprintAt = now;
		return null;
	}
	lastToastFingerprint = fp;
	lastToastFingerprintAt = now;
	while (layer.children.length >= config.maxToasts) layer.firstChild?.remove();
	const toast = document.createElement("div");
	toast.className = "rs-toast";
	toast.setAttribute("data-kind", kind);
	toast.setAttribute("role", kind === "error" || kind === "warning" ? "alert" : "status");
	toast.setAttribute("aria-live", kind === "error" ? "assertive" : "polite");
	toast.textContent = message;
	layer.appendChild(toast);
	globalThis?.requestAnimationFrame?.(() => {
		toast.setAttribute("data-visible", "");
	});
	let hideTimer = null;
	const removeToast = () => {
		if (hideTimer !== null) {
			globalThis.clearTimeout(hideTimer);
			hideTimer = null;
		}
		toast.removeAttribute("data-visible");
		globalThis?.setTimeout?.(() => {
			toast.remove();
			if (!layer.childElementCount) {
				const key = `${config.containerId}-${config.position}`;
				toastLayers.delete(key);
			}
		}, TRANSITION_DURATION);
	};
	if (!persistent) hideTimer = globalThis?.setTimeout?.(removeToast, duration);
	toast.addEventListener("click", () => {
		onClick?.();
		removeToast();
	});
	toast.addEventListener("pointerdown", () => {
		if (hideTimer !== null) {
			globalThis.clearTimeout(hideTimer);
			hideTimer = null;
		}
		removeToast();
	}, { once: true });
	return toast;
};
/**
* Listen for toast broadcasts (call in main thread contexts)
*
* @returns Cleanup function to stop listening
*/
var listenForToasts = () => {
	if (typeof BroadcastChannel === "undefined") return () => {};
	const channel = new BroadcastChannel("rs-toast");
	const handler = (event) => {
		if (event.data?.type === "show-toast" && event.data?.options) showToast(event.data.options);
	};
	channel.addEventListener("message", handler);
	return () => {
		channel.removeEventListener("message", handler);
		channel.close();
	};
};
/**
* Initialize toast listener for receiving broadcasts
* Call this in main thread contexts (content scripts, popup, etc.)
*
* @returns Cleanup function to stop listening
*/
var initToastReceiver = () => {
	return listenForToasts();
};
//#endregion
//#region src/shared/routing/pwa/pwa-copy.ts
/**
* PWA Clipboard Handler
* Connects PWA frontend with service worker clipboard operations
* Listens for clipboard requests from service worker via BroadcastChannel
*/
var _pwaClipboardInitialized = false;
var _cleanupFns = [];
var sendShareTargetResultToWorkcenter = async (data, _priority = "high") => {
	await deliverSwResultToWorkCenter("share-target-result", data, String(data.content || ""));
};
var tryParseJSON = (data) => {
	if (typeof data !== "string") return null;
	try {
		return JSON.parse(data);
	} catch {
		return null;
	}
};
var extractRecognizedContent = (data) => {
	if (typeof data === "string") {
		const parsed = tryParseJSON(data);
		if (parsed && typeof parsed === "object") {
			const obj = parsed;
			if (obj.recognized_data != null) {
				const rd = obj.recognized_data;
				if (Array.isArray(rd)) return rd.map((item) => typeof item === "string" ? item : JSON.stringify(item)).join("\n");
				return typeof rd === "string" ? rd : JSON.stringify(rd);
			}
			if (typeof obj.verbose_data === "string" && obj.verbose_data.trim()) return obj.verbose_data;
			if (typeof obj.content === "string" && obj.content.trim()) return obj.content;
			const choices = obj.choices;
			if (Array.isArray(choices) && choices.length > 0) {
				const first = choices[0];
				const msgContent = first?.message?.content;
				if (typeof msgContent === "string" && msgContent.trim()) return msgContent;
				const txt = first?.text;
				if (typeof txt === "string" && txt.trim()) return txt;
			}
			const outText = obj.output_text;
			if (typeof outText === "string" && outText.trim()) return outText;
			const output = obj.output;
			if (Array.isArray(output) && output.length > 0) {
				const text0 = output[0]?.content?.[0]?.text;
				if (typeof text0 === "string" && text0.trim()) return text0;
			}
			return data;
		}
		return data;
	}
	if (data && typeof data === "object") {
		const obj = data;
		if (obj.recognized_data != null) {
			const rd = obj.recognized_data;
			if (Array.isArray(rd)) return rd.map((item) => typeof item === "string" ? item : JSON.stringify(item)).join("\n");
			return typeof rd === "string" ? rd : JSON.stringify(rd);
		}
		if (typeof obj.verbose_data === "string" && obj.verbose_data.trim()) return obj.verbose_data;
		if (typeof obj.content === "string" && obj.content.trim()) return obj.content;
		const choices = obj.choices;
		if (Array.isArray(choices) && choices.length > 0) {
			const first = choices[0];
			const msgContent = first?.message?.content;
			if (typeof msgContent === "string" && msgContent.trim()) return msgContent;
			const txt = first?.text;
			if (typeof txt === "string" && txt.trim()) return txt;
		}
		const outText = obj.output_text;
		if (typeof outText === "string" && outText.trim()) return outText;
		const output = obj.output;
		if (Array.isArray(output) && output.length > 0) {
			const text0 = output[0]?.content?.[0]?.text;
			if (typeof text0 === "string" && text0.trim()) return text0;
		}
	}
	return data;
};
/** Only browsers with a fetchable `/clipboard/pending` (PWA/site SW) — never extension or opaque origins */
var clipboardPendingSupported = () => {
	try {
		const loc = globalThis.location;
		if (!loc) return false;
		const href = String(loc.href ?? "");
		if (href.startsWith("chrome-extension://") || href.startsWith("moz-extension://") || href.startsWith("edge-extension://")) return false;
		const p = String(loc.protocol ?? "");
		return p === "http:" || p === "https:";
	} catch {
		return false;
	}
};
/**
* Check for pending clipboard operations from service worker
*/
var checkPendingClipboardOperations = async () => {
	try {
		if (!clipboardPendingSupported()) return;
		if (!navigator.serviceWorker) {
			console.log("[PWA-Copy] Service workers not supported");
			return;
		}
		if (!navigator.serviceWorker.controller) {
			console.log("[PWA-Copy] Waiting for service worker to control page...");
			if (!(await navigator.serviceWorker.ready).active) {
				console.log("[PWA-Copy] Service worker not active yet");
				return;
			}
			await new Promise((resolve) => setTimeout(resolve, 100));
		}
		console.log("[PWA-Copy] Checking for pending clipboard operations...");
		const response = await fetch("/clipboard/pending");
		const responseType = String(response.headers.get("content-type") || "").toLowerCase();
		if (!response.ok || !responseType.includes("application/json")) {
			console.log("[PWA-Copy] Pending clipboard endpoint is unavailable in this context, skipping");
			return;
		}
		const data = await response.json();
		if (data.operations && Array.isArray(data.operations) && data.operations.length > 0) {
			console.log("[PWA-Copy] Found", data.operations.length, "pending clipboard operations");
			for (const operation of data.operations) if (operation.type === "ai-result" && operation.data) {
				console.log("[PWA-Copy] Processing pending AI result:", operation.id);
				const text = extractRecognizedContent(operation.data);
				await copy(text, { showFeedback: true });
				await sendShareTargetResultToWorkcenter({
					content: typeof text === "string" ? text : JSON.stringify(text),
					rawData: operation.data,
					timestamp: Date.now(),
					source: "share-target",
					action: "AI Processing (Pending)",
					metadata: {
						operationId: operation.id,
						fromPendingQueue: true
					}
				});
				console.log("[PWA-Copy] Delivered pending share target result to work center");
				try {
					await fetch(`/clipboard/remove/${operation.id}`, { method: "DELETE" });
				} catch (error) {
					console.warn("[PWA-Copy] Failed to remove processed operation:", error);
				}
			}
		}
	} catch (error) {
		console.warn("[PWA-Copy] Failed to check pending operations:", error);
	}
};
/**
* Initialize PWA clipboard listeners
* Call this early in the PWA lifecycle to receive clipboard requests from service worker
*/
var initPWAClipboard = () => {
	if (!clipboardPendingSupported()) return () => void 0;
	if (_pwaClipboardInitialized) return () => cleanupPWAClipboard();
	_pwaClipboardInitialized = true;
	console.log("[PWA-Copy] Initializing clipboard and toast receivers...");
	checkPendingClipboardOperations().catch(console.warn);
	_cleanupFns.push(initClipboardReceiver());
	_cleanupFns.push(initToastReceiver());
	if (typeof BroadcastChannel !== "undefined") {
		const clipboardChannel = new BroadcastChannel("rs-clipboard");
		const clipboardHandler = async (event) => {
			const unwrapped = unwrapSwInteropMessage(event.data) || {
				type: "",
				data: void 0,
				operations: void 0,
				raw: {}
			};
			const { type, data, operations } = {
				type: unwrapped.type,
				data: unwrapped.data,
				operations: unwrapped.operations ?? event.data?.operations
			};
			console.log("[PWA-Copy] Clipboard channel message:", type, summarizeForLog$1(data));
			if (type === "pending-operations" && operations && Array.isArray(operations)) {
				console.log("[PWA-Copy] Received", operations.length, "pending operations via broadcast");
				for (const operation of operations) if (operation.type === "ai-result" && operation.data) {
					console.log("[PWA-Copy] Processing broadcasted AI result:", operation.id);
					const text = typeof operation.data === "string" ? operation.data : JSON.stringify(operation.data);
					await copy(text, { showFeedback: true });
					await sendShareTargetResultToWorkcenter({
						content: text,
						rawData: operation.data,
						timestamp: Date.now(),
						source: "share-target",
						action: "AI Processing (Broadcasted)",
						metadata: {
							operationId: operation.id,
							fromBroadcast: true
						}
					});
					console.log("[PWA-Copy] Delivered broadcasted share target result to work center");
					try {
						await fetch(`/clipboard/remove/${operation.id}`, { method: "DELETE" });
					} catch (error) {
						console.warn("[PWA-Copy] Failed to remove processed operation:", error);
					}
				}
			}
		};
		clipboardChannel.addEventListener("message", clipboardHandler);
		_cleanupFns.push(() => {
			clipboardChannel.removeEventListener("message", clipboardHandler);
			clipboardChannel.close();
		});
		const shareChannel = new BroadcastChannel("rs-share-target");
		const shareHandler = async (event) => {
			const unwrapped = unwrapSwInteropMessage(event.data);
			const type = unwrapped?.type || event.data?.type;
			const data = unwrapped?.data ?? event.data?.data;
			console.log("[PWA-Copy] Share channel message:", type, summarizeForLog$1(data));
			if (type === "copy-shared" && data) await copy(data, { showFeedback: true });
			if (type === "share-received" && data) console.log("[PWA-Copy] Share received from SW:", summarizeForLog$1(data));
			if ((type === "ai-result" || type === "process-api-result") && data) {
				console.log("[PWA-Copy] AI result from SW:", summarizeForLog$1(data));
				const row = data;
				if (row.success !== false) {
					const text = extractRecognizedContent(row.data ?? data);
					await copy(text, { showFeedback: true });
					await deliverSwResultToWorkCenter(type, {
						success: true,
						data: row.data ?? data,
						content: typeof text === "string" ? text : JSON.stringify(text),
						rawData: row.data ?? data,
						timestamp: Date.now(),
						source: "share-target",
						action: "AI Processing"
					}, typeof text === "string" ? text : "");
				} else showToast({
					message: row.error || "Processing failed",
					kind: "error"
				});
			}
			if ((type === "share-received" || type === "share-target-input") && data) {
				console.log("[PWA-Copy] Share received, delivering input to work center:", summarizeForLog$1(data));
				await deliverShareTargetInput({
					...typeof data === "object" && data ? data : { text: data },
					timestamp: Date.now()
				});
			}
		};
		shareChannel.addEventListener("message", shareHandler);
		_cleanupFns.push(() => {
			shareChannel.removeEventListener("message", shareHandler);
			shareChannel.close();
		});
		const swChannel = new BroadcastChannel("rs-sw");
		const swHandler = async (event) => {
			const unwrapped = unwrapSwInteropMessage(event.data);
			const type = unwrapped?.type || event.data?.type;
			const results = unwrapped?.results ?? event.data?.results;
			console.log("[PWA-Copy] SW channel message:", type, summarizeForLog$1(results));
			if (type === "commit-to-clipboard" && results && Array.isArray(results)) {
				for (const result of results) if (result?.status === "queued" && result?.data) {
					console.log("[PWA-Copy] Copying result data:", summarizeForLog$1(result.data));
					const extractedContent = extractRecognizedContent(result.data);
					await copy(extractedContent, { showFeedback: true });
					await unifiedMessaging.sendMessage({
						type: "share-target-result",
						destination: "workcenter",
						data: {
							content: typeof extractedContent === "string" ? extractedContent : JSON.stringify(extractedContent),
							rawData: result.data,
							timestamp: Date.now(),
							source: "share-target",
							action: "Legacy AI Processing",
							metadata: {
								legacyCommit: true,
								resultStatus: result.status
							}
						},
						metadata: { priority: "normal" }
					});
					break;
				}
			}
		};
		swChannel.addEventListener("message", swHandler);
		_cleanupFns.push(() => {
			swChannel.removeEventListener("message", swHandler);
			swChannel.close();
		});
	}
	console.log("[PWA-Copy] Receivers initialized");
	return () => cleanupPWAClipboard();
};
/**
* Cleanup all PWA clipboard listeners
*/
var cleanupPWAClipboard = () => {
	_cleanupFns.forEach((fn) => fn?.());
	_cleanupFns = [];
	_pwaClipboardInitialized = false;
};
//#endregion
//#region src/shared/routing/pwa/ingress-host.ts
var bound = false;
var applyChromeRuntimeMail = (value) => ingestSwClientMessage(value);
var applyNativeEvent = (value) => {
	if (value == null) return false;
	if (typeof value === "string") try {
		return applyNativeEvent(JSON.parse(value));
	} catch {
		return ingestSwClientMessage({
			type: "share-received",
			data: {
				text: value,
				source: "share-target"
			}
		});
	}
	if (typeof value !== "object") return ingestSwClientMessage(value);
	const row = value;
	const inner = row.payload ?? row.data ?? row.envelope ?? row;
	return ingestSwClientMessage(inner);
};
/** Bind SW + CRX + native inboxes. Idempotent. */
var bindIngressHosts = () => {
	if (bound) return () => void 0;
	bound = true;
	const unbindSw = bindSwPageBridge();
	const onNative = (event) => {
		applyNativeEvent(event.detail);
	};
	globalThis.addEventListener?.("cws-native-message", onNative);
	let chromeListener = null;
	try {
		const runtime = globalThis.chrome?.runtime;
		if (runtime?.id && runtime.onMessage?.addListener) {
			chromeListener = (msg, _sender, sendResponse) => {
				applyChromeRuntimeMail(msg);
				try {
					sendResponse?.({ ok: true });
				} catch {}
				return false;
			};
			runtime.onMessage.addListener(chromeListener);
		}
	} catch {}
	return () => {
		bound = false;
		unbindSw();
		globalThis.removeEventListener?.("cws-native-message", onNative);
		try {
			const runtime = globalThis.chrome?.runtime;
			if (chromeListener && runtime?.onMessage?.removeListener) runtime.onMessage.removeListener(chromeListener);
		} catch {}
	};
};
//#endregion
//#region src/shared/boot/history-base.ts
var KNOWN_PATH_MOUNTS = [
	"cwsp",
	"transfer",
	"markdown",
	"document",
	"viewer",
	"explorer",
	"workcenter",
	"process",
	"ai",
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
	"ai.u2re.space",
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
	const sku = inferCwspSkuFromLocation();
	const nativeSku = isCwspNativeHost() && !!sku && sku !== "launcher" && sku !== "crx";
	if (!isDedicatedSkuHost() && !nativeSku) return path;
	const seg = path.replace(/^\/+/, "").split("/")[0]?.toLowerCase() || "";
	if (!seg || !isKnownPathMountSegment(seg)) return path;
	if (sku && sku !== "launcher" && sku !== "crx") return SKU_HUB_PATHS[sku]?.includes(seg) ? "/" : path;
	return "/";
}
var normalizeAppPath = (path) => String(path || "/").replace(/\/+$/, "") || "/";
/**
* WHY: process.u2re.space `/workcenter` and `/` are the same app. Hard-nav between them
* remounts the SPA and drops in-memory share files (`holdIngressFiles`).
*/
function sameSkuHostViewPath(currentPath, destPath) {
	return normalizeAppPath(pathForSkuHostView(currentPath)) === normalizeAppPath(pathForSkuHostView(destPath));
}
//#endregion
//#region src/shared/routing/policies/ingress-pipeline-guard.ts
/**
* Throttles share-target / launch-queue style ingress so bursts cannot
* run more than twice within any 100ms sliding window (additional calls wait).
*/
var WINDOW_MS = 100;
var MAX_IN_WINDOW = 2;
var recentStarts = [];
var prune = (now) => {
	while (recentStarts.length && now - recentStarts[0] > WINDOW_MS) recentStarts.shift();
};
/**
* Wait until a pipeline run is allowed, then record this run.
* Call once at the start of a share / launch-queue transfer pipeline.
*/
var waitForIngressPipelineSlot = async () => {
	const spin = () => new Promise((r) => {
		globalThis.queueMicrotask(r);
	});
	for (;;) {
		const now = Date.now();
		prune(now);
		if (recentStarts.length < MAX_IN_WINDOW) {
			recentStarts.push(Date.now());
			return;
		}
		const wait = WINDOW_MS - (now - recentStarts[0]) + 1;
		await new Promise((resolve) => {
			globalThis.setTimeout(resolve, Math.max(0, wait));
		});
		await spin();
	}
};
//#endregion
//#region src/shared/routing/channel/LogSanitizer.ts
var DEFAULT_OPTIONS = {
	maxStringLength: 180,
	maxArrayLength: 8,
	maxObjectKeys: 20,
	maxDepth: 3
};
var isFileLike = (value) => typeof File !== "undefined" && value instanceof File;
var isBlobLike = (value) => typeof Blob !== "undefined" && value instanceof Blob;
var summarizeString = (value, maxStringLength) => {
	if (!value) return value;
	const parsedDataUrl = parseDataUrl(value);
	if (parsedDataUrl) return `[data-url ${parsedDataUrl.mimeType || "application/octet-stream"}, length=${value.length}]`;
	if (value.length > maxStringLength && isBase64Like(value)) return `[base64-like string, length=${value.length}]`;
	if (value.length > maxStringLength) return `${value.slice(0, maxStringLength)}... [truncated ${value.length - maxStringLength} chars]`;
	return value;
};
var summarizeFormData = (formData, options) => {
	const entries = Array.from(formData.entries());
	const keys = [...new Set(entries.map(([key]) => key))];
	const preview = {};
	for (const key of keys.slice(0, options.maxObjectKeys)) preview[key] = formData.getAll(key).slice(0, options.maxArrayLength).map((entry) => {
		if (typeof entry === "string") return summarizeString(entry, options.maxStringLength);
		if (isFileLike(entry)) return {
			file: entry.name,
			type: entry.type,
			size: entry.size
		};
		return summarizeForLog(entry, options);
	});
	return {
		kind: "FormData",
		keyCount: keys.length,
		keys,
		preview
	};
};
var summarizeRecord = (value, options, depth, seen) => {
	if (depth >= options.maxDepth) return `[object depth>${options.maxDepth}]`;
	if (seen.has(value)) return "[circular]";
	seen.add(value);
	const entries = Object.entries(value);
	const sliced = entries.slice(0, options.maxObjectKeys);
	const summary = {};
	for (const [key, entryValue] of sliced) summary[key] = summarizeUnknown(entryValue, options, depth + 1, seen);
	if (entries.length > options.maxObjectKeys) summary.__truncatedKeys = entries.length - options.maxObjectKeys;
	return summary;
};
var summarizeUnknown = (value, options, depth, seen) => {
	if (value == null) return value;
	if (typeof value === "string") return summarizeString(value, options.maxStringLength);
	if (typeof value === "number" || typeof value === "boolean" || typeof value === "bigint") return value;
	if (typeof value === "symbol") return value.toString();
	if (typeof value === "function") return `[function ${value.name || "anonymous"}]`;
	if (typeof FormData !== "undefined" && value instanceof FormData) return summarizeFormData(value, options);
	if (isFileLike(value)) return {
		file: value.name,
		type: value.type,
		size: value.size
	};
	if (isBlobLike(value)) return {
		blob: true,
		type: value.type,
		size: value.size
	};
	if (Array.isArray(value)) {
		if (depth >= options.maxDepth) return `[array(${value.length}) depth>${options.maxDepth}]`;
		const summary = value.slice(0, options.maxArrayLength).map((item) => summarizeUnknown(item, options, depth + 1, seen));
		if (value.length > options.maxArrayLength) summary.push(`[${value.length - options.maxArrayLength} more items]`);
		return summary;
	}
	if (typeof value === "object") return summarizeRecord(value, options, depth, seen);
	return String(value);
};
var summarizeForLog = (value, partialOptions = {}) => {
	return summarizeUnknown(value, {
		...DEFAULT_OPTIONS,
		...partialOptions
	}, 0, /* @__PURE__ */ new WeakSet());
};
//#endregion
//#region src/shared/routing/pwa/sw-handling.ts
/**
* Window-side PWA integration helpers.
*
* This module bridges the main app with the service worker, share-target cache,
* launch-queue API, and broadcast-based clipboard/share flows. It exists on the
* page side, while `src/pwa/sw.ts` owns the worker-side behavior.
*/
/**
* WHY: page `sw-handling.js` imports these from unhashed `boot-index.js` (`dt`/`ft`).
* Stale SW `assets-cache` + a new barrel → `X is not a function` on share-target.
*/
var consumeCachedShareTargetPayload = (opts) => {
	if (typeof consumeCachedShareTargetPayload$1 !== "function") return Promise.resolve(null);
	return consumeCachedShareTargetPayload$1(opts);
};
var storeShareTargetPayloadToCache = (payload) => {
	if (typeof storeShareTargetPayloadToCache$1 !== "function") return Promise.resolve(false);
	return storeShareTargetPayloadToCache$1(payload);
};
/**
* WHY: MV3 extension pages (`chrome-extension:`) do not expose PWA-relative routes (`/clipboard/pending`)
* or the site service worker bundle. Running ingress here caused `fetch('/clipboard/pending')` →
* `chrome-extension://…/clipboard/pending` (404) and needless SW / launch-queue churn during boot.
*
* IMPORTANT: Compare `href`/protocol explicitly — if `location.protocol` were ever missing briefly,
* `undefined !== "chrome-extension:"` was true and the full PWA clipboard stack still ran.
*/
var shouldRunPwaIngress = () => {
	try {
		const g = globalThis;
		if (g.__CWS_SKIP_PWA__) return false;
		const surface = String(g.document?.documentElement?.dataset?.cwspSurface || "");
		if (surface === "cwsp-control" || surface === "gateway") return false;
		const loc = g.location;
		if (!loc) return false;
		const href = String(loc.href ?? "");
		if (href.startsWith("chrome-extension://") || href.startsWith("moz-extension://") || href.startsWith("edge-extension://")) return false;
		const p = String(loc.protocol ?? "");
		if (p === "chrome-extension:" || p === "moz-extension:" || p === "edge-extension:") return false;
		return p === "http:" || p === "https:";
	} catch {
		return false;
	}
};
/**
* WHY: BootLoader runs `initIngressPWA` before shell.navigate. Share / launch-queue
* must wait until Work Center (or settings) is mounted, otherwise `content-attach`
* and `ingress.apply` fire into an unbound bus and binary payloads are dropped.
*/
var waitForBootReady = (timeoutMs = 8e3) => {
	try {
		if (typeof document !== "undefined" && document.documentElement?.dataset?.cwspBoot === "ready") return Promise.resolve();
	} catch {}
	return new Promise((resolve) => {
		let done = false;
		const finish = () => {
			if (done) return;
			done = true;
			try {
				globalThis.removeEventListener?.("cwsp:boot-ready", onReady);
			} catch {}
			resolve();
		};
		const onReady = () => finish();
		try {
			globalThis.addEventListener?.("cwsp:boot-ready", onReady, { once: true });
		} catch {
			finish();
			return;
		}
		globalThis.setTimeout(finish, timeoutMs);
	});
};
var recentShareRoute = /* @__PURE__ */ new Map();
var ingressRouteFingerprint = (shareData) => [
	shareData.title || "",
	(shareData.text || "").slice(0, 64),
	shareData.url || shareData.sharedUrl || "",
	(Array.isArray(shareData.files) ? shareData.files : []).filter((file) => file instanceof File).map((file) => `${file.name}:${file.size}`).join(","),
	shareData.fileCount || 0
].join("|");
/** Ensure the production app CSS bundle is present when the app boots outside extension pages. */
var ensureAppCss = () => {
	if (!globalThis.window) return;
	if (globalThis?.location?.protocol === "chrome-extension:") return;
	if (document.getElementById("rs-crossword-css")) return;
};
var _swInitPromise = null;
var _swControllerReloadBound = false;
var _swReloadPending = false;
var _swUpdateInterval = null;
var _swVisibilityUpdateBound = false;
var _swOptions = {
	immediate: false,
	onRegistered: () => {
		console.log("[PWA] Service worker registered successfully");
	},
	onRegisterError: (error) => {
		console.error("[PWA] Service worker registration failed:", error);
	}
};
var bindControllerChangeReload = () => {
	if (_swControllerReloadBound || typeof navigator === "undefined" || !navigator.serviceWorker) return;
	_swControllerReloadBound = true;
	navigator.serviceWorker.addEventListener("controllerchange", () => {
		if (_swReloadPending) return;
		_swReloadPending = true;
		console.log("[PWA] Service worker controller changed");
		globalThis?.dispatchEvent?.(new CustomEvent("sw-controller-changed"));
		if (_swOptions?.immediate === true) globalThis.location.reload();
	});
};
var activateWaitingWorker = (registration, reason) => {
	const waiting = registration?.waiting;
	if (!waiting) return false;
	console.log(`[PWA] Activating waiting service worker (${reason})`);
	waiting.postMessage({ type: "SKIP_WAITING" });
	return true;
};
/** WHY: a new worker often reaches `waiting` after boot — DEV-only nudge left #434 stuck. */
var bindWaitingActivation = (registration) => {
	const nudge = (reason) => activateWaitingWorker(registration, reason);
	nudge("initial");
	try {
		registration.addEventListener("updatefound", () => {
			const worker = registration.installing;
			worker?.addEventListener("statechange", () => {
				if (worker.state === "installed") nudge("updatefound");
			});
		});
	} catch {}
};
/** Re-fetch `sw.js` from network; helps when CDN/proxy cache or long-lived tabs hide updates. */
var probeServiceWorkerUpdate = async (registration) => {
	await dropStaleServiceWorkerRegistrations();
	let live = registration;
	try {
		live = await navigator.serviceWorker.getRegistration() ?? registration;
	} catch {}
	if (!live?.update) return;
	if (!(live.active?.scriptURL || live.waiting?.scriptURL || live.installing?.scriptURL || "")) return;
	await live.update().catch((e) => console.warn("[PWA] registration.update failed:", e));
};
var bindServiceWorkerLifecycleUpdateChecks = (registration) => {
	if (_swVisibilityUpdateBound || typeof document === "undefined") return;
	_swVisibilityUpdateBound = true;
	document.addEventListener("visibilitychange", () => {
		if (document.visibilityState !== "visible") return;
		probeServiceWorkerUpdate(registration);
	});
};
/**
* Initialize PWA service worker early in the page lifecycle
* This ensures share target and other PWA features work correctly
*/
var initServiceWorker = async (_options = _swOptions) => {
	_swOptions = {
		..._swOptions,
		..._options || {}
	};
	if (_swInitPromise) return _swInitPromise;
	_swInitPromise = (async () => {
		if (typeof globalThis === "undefined") return null;
		const protocol = (globalThis?.location?.protocol || "").toLowerCase();
		if (protocol === "chrome-extension:" || protocol === "file:" || protocol === "about:") return null;
		if (protocol !== "https:" && protocol !== "http:") return null;
		if (!("serviceWorker" in navigator)) {
			console.warn("[PWA] Service workers not supported");
			return null;
		}
		try {
			const registration = await ensureServiceWorkerRegistered();
			if (!registration) {
				console.error("[PWA] Service worker registration failed: no valid sw.js found");
				return null;
			}
			bindControllerChangeReload();
			await probeServiceWorkerUpdate(registration);
			bindServiceWorkerLifecycleUpdateChecks(registration);
			bindWaitingActivation(registration);
			registration?.addEventListener?.("updatefound", () => {
				const newWorker = registration?.installing;
				if (newWorker) newWorker?.addEventListener?.("statechange", () => {
					if (newWorker?.state === "installed" && navigator.serviceWorker.controller) {
						console.log("[PWA] New service worker available");
						showToast({
							message: "App update available",
							kind: "info"
						});
						activateWaitingWorker(registration, "updatefound");
					}
				});
			});
			if (_swUpdateInterval) {
				globalThis?.clearInterval?.(_swUpdateInterval);
				_swUpdateInterval = null;
			}
			_swUpdateInterval = globalThis?.setInterval?.(() => {
				registration?.update?.().catch?.(console.warn);
			}, 3e5);
			console.log("[PWA] Service worker registered successfully");
			return registration;
		} catch (error) {
			console.error("[PWA] Service worker registration failed:", error);
			return null;
		}
	})();
	return _swInitPromise;
};
var _receiversCleanup = null;
/** Initialize one-time clipboard/share receivers used by the window-side PWA bridge. */
var initReceivers = () => {
	if (_receiversCleanup) return;
	const clipboard = initPWAClipboard();
	const hosts = bindIngressHosts();
	_receiversCleanup = () => {
		clipboard();
		hosts();
	};
};
var inferShareContentType = (shareData) => {
	const files = Array.isArray(shareData.files) ? shareData.files.filter((f) => f instanceof File) : [];
	const text = String(shareData.text || "").trim();
	const url = String(shareData.url || shareData.sharedUrl || "").trim();
	if (files.length > 0) {
		const kind = classifyIngressFile(files[0]);
		if (kind === "image") return "image";
		if (kind === "markdown") return "markdown";
		if (kind === "text") return "text";
		return "file";
	}
	const fcEarly = Number(shareData.fileCount ?? 0);
	/**
	* Match {@link getContentType}: sidecar `url` must not block basename classification while blobs hydrate.
	* WHY: empty `probe` must fall through — previously we returned `"file"` and never reached `url` / `text`.
	*/
	if (fcEarly > 0) {
		const probe = typeof shareData.hint?.filename === "string" && shareData.hint.filename.trim() || typeof shareData.title === "string" && shareData.title.trim() || "";
		if (probe) {
			const bk = classifyIngressFromBasename(probe);
			if (bk === "markdown") return "markdown";
			if (bk === "text") return "text";
			if (bk === "image") return "image";
			return "file";
		}
	}
	if (text) return "text";
	if (url) return "url";
	if (fcEarly > 0) return "file";
	return "other";
};
/** Read textual file body for hydrate + launch-queue staging ({@link classifyIngressFile}). */
var isTextLikeFile = (file) => {
	const k = classifyIngressFile(file);
	return k === "markdown" || k === "text";
};
var hydrateTextPayloadFromFiles = async (shareData) => {
	const files = Array.isArray(shareData.files) ? shareData.files.filter((f) => f instanceof File) : [];
	if (!files.length) return shareData;
	const existingInline = String(shareData.text || "").trim();
	/** OS launch-queue merges / pending payloads can retain old `text` while `files[]` is the real doc. */
	const sourceKey = String(shareData.source || "");
	if (!(sourceKey === "launch-queue" || sourceKey === "cached-bootstrap" || sourceKey === "share-target" || !existingInline)) return shareData;
	const firstTextFile = files.find(isTextLikeFile);
	if (!firstTextFile) return shareData;
	try {
		const trimmed = (await firstTextFile.text())?.trim?.();
		if (!trimmed) return shareData;
		return {
			...shareData,
			title: shareData.title || firstTextFile.name,
			text: trimmed
		};
	} catch {
		return shareData;
	}
};
var shouldForceWorkCenterAttachment = async (shareData) => {
	const contentType = inferShareContentType(shareData);
	if (typeof shareData.aiEnabled === "boolean") return shareData.aiEnabled === false && !(contentType === "text" || contentType === "markdown");
	try {
		return ((await loadSettings().catch(() => null))?.ai?.autoProcessShared ?? true) === false && !(contentType === "text" || contentType === "markdown");
	} catch {
		return false;
	}
};
var extractTransferHint = (shareData) => {
	const hint = shareData?.hint;
	if (!hint || typeof hint !== "object") return void 0;
	return hint;
};
var hydrateTransferPayloadFromCache = async (opts = {}) => {
	const cachedPayload = await consumeCachedShareTargetPayload(opts);
	if (!cachedPayload) return null;
	return buildShareDataFromCachedPayload(cachedPayload);
};
/**
* WHY: `/share-target?shared=1` can run before SW finishes persisting blobs; routing on metadata alone
* sent markdown/text shares to Work Center on mobile (`files=[]`, inferred type=`other`/`file`).
*/
var awaitHydratedSharePayloadWithRetries = async (base, maxAttempts = 12) => {
	let merged = { ...base };
	if (Number(merged.fileCount ?? 0) > 0 && !merged.files?.length) for (let attempt = 1; attempt <= maxAttempts; attempt++) {
		try {
			const hydrated = await hydrateTransferPayloadFromCache({ clear: false });
			if (hydrated?.files?.length) {
				merged = {
					...merged,
					...hydrated,
					files: hydrated.files
				};
				break;
			}
		} catch {}
		await new Promise((resolve) => globalThis.setTimeout(resolve, 80 * attempt));
	}
	return merged;
};
/**
* Merge lightweight URL entry (`/share-target?shared=1&title=…`) with Cache Storage payload.
* WHY: `extractShareContent` can see a title "handle" and skip the cache branch while `File[]` only lives in the cache.
*/
var mergeUrlParamsShareWithCache = async (fromUrl) => {
	try {
		const cache = await safeCacheOpen("share-target-data");
		if (!cache) return {
			...fromUrl,
			source: "share-target"
		};
		const origin = globalThis.location?.origin || "https://localhost";
		const shareKey = new URL("/share-target-data", origin).href;
		const response = await safeCacheMatch(cache, shareKey) || await safeCacheMatch(cache, "/share-target-data");
		if (!response) return {
			...fromUrl,
			source: "share-target"
		};
		const row = await response.json().catch(() => null);
		if (!row) return {
			...fromUrl,
			source: "share-target"
		};
		const hydrated = await awaitHydratedSharePayloadWithRetries(row);
		const hFiles = Array.isArray(hydrated.files) ? hydrated.files.filter((f) => f instanceof File) : [];
		const uFiles = Array.isArray(fromUrl.files) ? fromUrl.files.filter((f) => f instanceof File) : [];
		const files = hFiles.length > 0 ? hFiles : uFiles;
		const fc = Math.max(Number(hydrated.fileCount ?? 0), Number(fromUrl.fileCount ?? 0), files.length);
		const hintA = typeof fromUrl.hint === "object" && fromUrl.hint !== null ? { ...fromUrl.hint } : {};
		const hintB = typeof hydrated.hint === "object" && hydrated.hint !== null ? { ...hydrated.hint } : {};
		const hint = Object.keys({
			...hintB,
			...hintA
		}).length > 0 ? {
			...hintB,
			...hintA,
			filename: hintA.filename || hintB.filename || files[0]?.name
		} : files[0]?.name ? { filename: files[0].name } : void 0;
		return {
			...fromUrl,
			...hydrated,
			title: hydrated.title || fromUrl.title,
			text: hydrated.text ?? fromUrl.text,
			url: hydrated.url || fromUrl.url,
			sharedUrl: hydrated.sharedUrl || fromUrl.sharedUrl,
			files: files.length ? files : void 0,
			fileCount: fc > 0 ? fc : hydrated.fileCount ?? fromUrl.fileCount,
			imageCount: hydrated.imageCount ?? fromUrl.imageCount,
			...hint ? { hint } : {},
			source: "share-target"
		};
	} catch (error) {
		console.warn("[ShareTarget] mergeUrlParamsShareWithCache failed:", error);
		return {
			...fromUrl,
			source: "share-target"
		};
	}
};
var routeToTransferView = async (shareData, source, hint, pending = false) => {
	const routeKey = ingressRouteFingerprint(shareData);
	const prevRoute = recentShareRoute.get(routeKey);
	if (routeKey !== "||||0" && prevRoute && Date.now() - prevRoute < 5e3) {
		console.log("[ViewTransfer] Skipping duplicate ingress route");
		return true;
	}
	if (routeKey !== "||||0") recentShareRoute.set(routeKey, Date.now());
	await waitForBootReady();
	await waitForIngressPipelineSlot();
	const preparedData = await hydrateTextPayloadFromFiles(shareData);
	const files = Array.isArray(preparedData.files) ? preparedData.files.filter((file) => file instanceof File) : [];
	holdIngressFiles(files);
	console.log("[ViewTransfer] Pipeline input:", summarizeForLog({
		source,
		pending,
		hint,
		title: preparedData.title,
		text: preparedData.text,
		url: preparedData.url || preparedData.sharedUrl,
		fileCount: files.length,
		fileCountReported: preparedData.fileCount,
		imageCountReported: preparedData.imageCount,
		timestamp: preparedData.timestamp
	}));
	let autoProcessShared = true;
	let loadedSettings = null;
	try {
		loadedSettings = await loadSettings().catch(() => null);
		rememberProcessIngressSettings(loadedSettings);
		autoProcessShared = (loadedSettings?.ai?.autoProcessShared ?? true) !== false;
		const { rememberOpenPolicyFromSettings } = await __vitePreload(async () => {
			const { rememberOpenPolicyFromSettings } = await import("../shells/boot-index.js").then((n) => n.jr);
			return { rememberOpenPolicyFromSettings };
		}, __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url);
		rememberOpenPolicyFromSettings(loadedSettings);
	} catch {
		autoProcessShared = true;
	}
	const sku = inferCwspSkuFromLocation();
	const skuHint = await refineLauncherImageIngress(skuIngressHint(preparedData, {
		sku,
		autoProcessShared,
		settings: loadedSettings
	}), files);
	const forceAttachToWorkCenter = !skuHint && await shouldForceWorkCenterAttachment(preparedData);
	const textLike = inferShareContentType(preparedData) === "markdown" || inferShareContentType(preparedData) === "text";
	const mergedViewerHint = !skuHint && textLike && !forceAttachToWorkCenter ? {
		...hint,
		destination: "viewer",
		action: "open",
		filename: hint?.filename || files[0]?.name
	} : void 0;
	const resolvedHint = skuHint ? {
		...hint,
		...skuHint
	} : forceAttachToWorkCenter ? {
		destination: "workcenter",
		action: "attach",
		...hint || {}
	} : mergedViewerHint ?? hint;
	console.log("[ViewTransfer] Hint resolution:", {
		forceAttachToWorkCenter,
		inputHint: summarizeForLog(hint),
		resolvedHint: summarizeForLog(resolvedHint)
	});
	const { delivered, resolved } = await dispatchViewTransfer({
		source,
		route: source === "launch-queue" ? "launch-queue" : "share-target",
		title: preparedData.title,
		text: preparedData.text,
		url: preparedData.url || preparedData.sharedUrl,
		files,
		fileCount: preparedData.fileCount ?? files.length,
		hint: resolvedHint,
		pending,
		metadata: {
			timestamp: preparedData.timestamp || Date.now(),
			fileCount: preparedData.fileCount ?? files.length,
			imageCount: preparedData.imageCount ?? files.filter((f) => f.type.startsWith("image/")).length
		}
	});
	console.log("[ViewTransfer] Dispatch result:", {
		delivered,
		destination: resolved.destination,
		routePath: resolved.routePath,
		messageType: resolved.messageType,
		contentType: resolved.contentType
	});
	if (resolved.destination === "home") {
		const capacitorNative = (() => {
			try {
				const c = globalThis.Capacitor;
				return typeof c?.isNativePlatform === "function" && Boolean(c.isNativePlatform());
			} catch {
				return false;
			}
		})();
		const urlish = String(preparedData.url || preparedData.sharedUrl || "").trim() || /^(https?:\/\/|www\.)/i.test(String(preparedData.text || "").trim());
		if (capacitorNative && files.length === 0 && urlish) {} else try {
			const kind = await applyLauncherIngress({
				files,
				title: preparedData.title,
				text: preparedData.text,
				url: preparedData.url || preparedData.sharedUrl,
				action: resolvedHint?.action
			});
			if (kind === "wallpaper") showToast({
				message: "Wallpaper updated",
				kind: "success"
			});
			else if (kind === "shortcut") showToast({
				message: "Shortcut added",
				kind: "success"
			});
		} catch (error) {
			console.warn("[ViewTransfer] Launcher share apply failed:", error);
		}
	}
	const currentPath = (globalThis?.location?.pathname || "").replace(/\/+$/, "") || "/";
	const destPath = pathForSkuHostView(resolved.routePath);
	const destNorm = destPath.replace(/\/+$/, "") || "/";
	const alreadyOnDest = sameSkuHostViewPath(currentPath, destPath);
	let silentRoute = false;
	try {
		const sp = new URLSearchParams(globalThis?.location?.search || "");
		silentRoute = sp.get("silent") === "1" || sp.get("silent") === "true";
	} catch {
		silentRoute = false;
	}
	const tryNavigateLiveShell = async () => {
		if (!delivered && peekHeldIngressFiles().length === 0) return false;
		try {
			const { bootLoader } = await __vitePreload(async () => {
				const { bootLoader } = await import("./BootLoader.js");
				return { bootLoader };
			}, __vite__mapDeps([7,2,1,3,0,4,5,6,8,9,10]), import.meta.url);
			const shell = bootLoader.getShell();
			if (!(shell && ![
				"window",
				"tabbed",
				"environment"
			].includes(shell.id)) || !shell.getElement?.()?.isConnected) return false;
			const activeView = shell.getContext?.().navigationState?.currentView;
			/**
			* WHY: Ingress replay (launch-queue / pending) defaults markdown/text to destination
			* `viewer`. After the user opens Work Center, routing here would call `navigate('viewer')`
			* and hide Work Center even though payloads were already delivered via unified messaging.
			* Share Target flows keep `source === "share-target"` and still bump to the viewer when appropriate.
			*/
			if (resolved.destination === "viewer" && activeView === "workcenter" && source !== "share-target") {
				console.log("[ViewTransfer] Skipping steal to viewer — staying on Work Center", {
					source,
					pending,
					delivered
				});
				await flushHeldIngressToWorkCenter();
				return true;
			}
			if (activeView === resolved.destination) {
				console.log("[ViewTransfer] Already on destination view — skip remount", {
					activeView,
					source
				});
				await flushHeldIngressToWorkCenter();
				return true;
			}
			await shell.navigate(resolved.destination, void 0, { force: true });
			console.log("[ViewTransfer] Routed through live shell:", resolved.routePath);
			await flushHeldIngressToWorkCenter();
			return true;
		} catch (error) {
			console.warn("[ViewTransfer] Live shell routing failed, falling back to hard navigation:", error);
			return false;
		}
	};
	let leftTheDocument = false;
	if (silentRoute) {
		if (!alreadyOnDest) console.log("[ViewTransfer] Silent mode: skipping navigation; delivery via channels only:", destNorm);
		else await tryNavigateLiveShell();
	} else if (resolved.destination === "home" || sku === "launcher") await tryNavigateLiveShell();
	else if (!alreadyOnDest) {
		if (!await tryNavigateLiveShell()) {
			if ((() => {
				try {
					const c = globalThis.Capacitor;
					return typeof c?.isNativePlatform === "function" && Boolean(c.isNativePlatform());
				} catch {
					return false;
				}
			})()) console.warn("[ViewTransfer] Skipping hard navigation on Capacitor:", destNorm);
			else {
				const nextUrl = new URL(globalThis?.location?.href);
				nextUrl.pathname = destPath;
				nextUrl.search = "";
				nextUrl.hash = "";
				if (pending) nextUrl.searchParams.set("shared", "1");
				console.log("[ViewTransfer] Navigating to resolved route:", nextUrl.toString());
				leftTheDocument = true;
				globalThis.location.href = nextUrl.toString();
			}
		}
	} else {
		await tryNavigateLiveShell();
		console.log("[ViewTransfer] Already on resolved route:", destNorm);
	}
	if (!leftTheDocument && resolved.destination === "workcenter") await flushHeldIngressToWorkCenter();
	/**
	* WHY: auto-process after Work Center is mounted. Running AI before navigate
	* posted `share-target-result` onto an unbound command bus (settings / cold boot).
	* Hard-nav leaves processing to the next document (`?shared=1` + cache).
	*/
	if (!leftTheDocument && sku === "process" && resolvedHint?.action === "process") try {
		await processShareTargetData(preparedData, true);
	} catch (error) {
		console.warn("[ViewTransfer] Process SKU auto-AI failed:", error);
	}
	return delivered;
};
/** Capacitor / sku-boot entry: stage files then run the same share pipeline as PWA. */
var ingestSharePayload = async (shareData, source = "share-target") => {
	const capacitorNative = (() => {
		try {
			const c = globalThis.Capacitor;
			return typeof c?.isNativePlatform === "function" && Boolean(c.isNativePlatform());
		} catch {
			return false;
		}
	})();
	if (capacitorNative && inferCwspSkuFromLocation() === "transfer") return true;
	const files = Array.isArray(shareData.files) ? shareData.files.filter((f) => f instanceof File) : [];
	try {
		await storeShareTargetPayloadToCache({
			files,
			meta: {
				title: shareData.title,
				text: shareData.text,
				url: shareData.url || shareData.sharedUrl,
				source,
				route: source,
				timestamp: shareData.timestamp || Date.now(),
				fileCount: files.length || shareData.fileCount,
				imageCount: shareData.imageCount,
				hint: shareData.hint
			}
		});
	} catch {}
	try {
		await deliverShareTargetInput({
			...shareData,
			files,
			source: shareData.source || source,
			fileCount: files.length || shareData.fileCount
		});
	} catch {}
	const file = files[0];
	try {
		const content = !!file && (/^text\/|json|markdown|xml|javascript|typescript/i.test(String(file.type || "")) || /\.(?:md|markdown|txt|json|html?|css|js|ts|tsx|yml|yaml|csv|log|xml)$/i.test(file.name)) && file ? await file.text() : String(shareData.text || "");
		if (content.trim() || file?.name) stashSkuHandoff({
			dest: inferCwspSkuFromLocation() === "process" ? "workcenter" : "viewer",
			content,
			filename: String(file?.name || shareData.title || ""),
			src: String(shareData.url || shareData.sharedUrl || "")
		});
	} catch {}
	return routeToTransferView(shareData, source, extractTransferHint(shareData), capacitorNative);
};
/**
* Extract processable content from share data
* Handles various formats from SW, server, or direct input
*/
var extractShareContent = (shareData) => {
	const text = shareData.text?.trim();
	if (text) return {
		content: text,
		type: "text"
	};
	const url = (shareData.url || shareData.sharedUrl)?.trim();
	if (url) return {
		content: url,
		type: "url"
	};
	const title = shareData.title?.trim();
	if (title) return {
		content: title,
		type: "text"
	};
	if (Array.isArray(shareData.files) && shareData.files.length > 0) {
		const firstFile = shareData.files[0];
		if (firstFile instanceof File || firstFile instanceof Blob) return {
			content: null,
			type: "file"
		};
	}
	return {
		content: null,
		type: null
	};
};
var shareProcessKey = (shareData) => [
	shareData.timestamp || 0,
	shareData.title || "",
	(shareData.text || "").slice(0, 64),
	shareData.url || shareData.sharedUrl || "",
	shareData.fileCount || shareData.files?.length || 0
].join("|");
var recentShareProcess = /* @__PURE__ */ new Map();
var extractProcessApiText = (result) => {
	if (!result || typeof result !== "object") return "";
	const row = result;
	if (row.success === false || row.ok === false) return "";
	const inner = row.result && typeof row.result === "object" ? row.result : null;
	const candidates = [
		row.data,
		inner?.data,
		inner?.text,
		inner?.content,
		row.result,
		row.text
	];
	for (const item of candidates) {
		const text = formatProcessIngressResult(item);
		if (text.trim()) return text;
	}
	return "";
};
var deliverProcessIngressResult = async (text, raw, copyToClipboard) => {
	if (copyToClipboard && text.trim()) {
		const wrote = await writeProcessIngressClipboard(text);
		try {
			const clipboardChannel = new BroadcastChannel(CHANNELS.CLIPBOARD);
			clipboardChannel.postMessage({
				type: "copy",
				data: text
			});
			clipboardChannel.close();
		} catch {}
		if (wrote) showToast({
			message: "Processed and copied",
			kind: "success"
		});
	}
	try {
		postWorkCenterCommand({
			type: "ingress.apply",
			payload: {
				type: "share-target-result",
				data: {
					content: text,
					rawData: raw,
					timestamp: Date.now(),
					source: "share-target"
				}
			}
		});
		await unifiedMessaging$1.sendMessage({
			type: "share-target-result",
			source: "share-target",
			destination: "workcenter",
			data: {
				content: text,
				rawData: raw,
				timestamp: Date.now(),
				source: "share-target",
				action: "Processing (/api/process/processing)"
			},
			metadata: { priority: "high" }
		});
	} catch {
		postWorkCenterCommand({
			type: "ingress.apply",
			payload: {
				type: "share-target-result",
				data: {
					content: text,
					rawData: raw,
					timestamp: Date.now(),
					source: "share-target"
				}
			}
		});
	}
};
/**
* Process share payloads on the page side when the service worker either did
* not process them or only delivered metadata.
* INVARIANT: one AI pass per payload. Attach-mode kinds return false here.
*/
var processShareTargetData = async (shareData, skipIfEmpty = false) => {
	const key = shareProcessKey(shareData);
	const pending = recentShareProcess.get(key);
	if (pending) return pending;
	const job = runProcessShareTargetData(shareData, skipIfEmpty);
	recentShareProcess.set(key, job);
	try {
		return await job;
	} finally {
		globalThis.setTimeout(() => {
			if (recentShareProcess.get(key) === job) recentShareProcess.delete(key);
		}, 8e3);
	}
};
var runProcessShareTargetData = async (shareData, skipIfEmpty = false) => {
	console.log("[ShareTarget] Processing shared data:", {
		hasText: !!shareData.text,
		hasUrl: !!shareData.url,
		fileCount: shareData.files?.length || shareData.fileCount || 0,
		imageCount: shareData.imageCount || 0,
		source: shareData.source || "unknown",
		aiProcessed: shareData.aiProcessed
	});
	if (shareData.aiProcessed && shareData.results?.length) {
		console.log("[ShareTarget] AI already processed in SW, showing result");
		showToast({
			message: "Content processed by service worker",
			kind: "success"
		});
		return true;
	}
	const settings = await loadSettings().catch(() => null);
	rememberProcessIngressSettings(settings);
	const kind = classifyOpenKindFromPayload({
		files: Array.isArray(shareData.files) ? shareData.files.filter((f) => f instanceof File) : [],
		text: shareData.text,
		url: shareData.url || shareData.sharedUrl,
		title: shareData.title,
		hint: shareData.hint
	});
	const ingress = resolveProcessIngressKind(settings, kind);
	if (ingress.mode !== "process") {
		console.log("[ShareTarget] Kind policy is attach — skip AI");
		return false;
	}
	await holdCapacitorIngressJob(settings);
	const customInstruction = instructionTextForIngress(settings, shareData.hint?.instructionId || ingress.instructionId);
	const { content, type } = extractShareContent(shareData);
	console.log("[ShareTarget] Extracted content:", {
		content: content?.substring(0, 50),
		type,
		kind: ingress.kind
	});
	if (!content && type !== "file") {
		if (skipIfEmpty) {
			console.log("[ShareTarget] No content to process (skipping)");
			return false;
		}
		if (shareData.fileCount && shareData.fileCount > 0) {
			console.log("[ShareTarget] Files processed in service worker");
			showToast({
				message: "Files received and being processed",
				kind: "info"
			});
			return true;
		}
		console.warn("[ShareTarget] No content to process");
		showToast({
			message: "No content received to process",
			kind: "warning"
		});
		return false;
	}
	try {
		console.log("[ShareTarget] Starting AI processing for type:", type);
		showToast({
			message: "Processing shared content...",
			kind: "info"
		});
		const fileToBase64 = (file) => {
			return new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.onload = () => resolve(reader.result);
				reader.onerror = reject;
				reader.readAsDataURL(file);
			});
		};
		let processingContent;
		let contentType;
		if (type === "file" && shareData.files?.[0]) {
			const file = shareData.files[0];
			console.log("[ShareTarget] Processing file:", {
				name: file.name,
				type: file.type,
				size: file.size
			});
			processingContent = await fileToBase64(file);
			contentType = "base64";
		} else if (content) {
			processingContent = content;
			contentType = "text";
			console.log("[ShareTarget] Processing text content, length:", content.length);
		} else throw new Error("No processable content found");
		const analyze = settings?.ai?.shareTargetMode === "analyze";
		console.log("[ShareTarget] Calling unified processing API");
		const posted = await postProcessApi("processing", {
			content: processingContent,
			text: contentType === "text" ? processingContent : void 0,
			input: processingContent,
			url: type === "url" ? content : void 0,
			contentType,
			processingType: analyze ? "general-processing" : "recognize-content",
			mode: analyze ? "analyze" : "smartRecognize",
			customInstruction: customInstruction || void 0,
			metadata: {
				source: "share-target",
				title: shareData.title || "Shared Content",
				timestamp: Date.now(),
				kind: ingress.kind,
				instructionId: ingress.instructionId || ""
			}
		}, processApiAuthFromSettings(settings));
		if (!posted.ok) throw new Error(`Processing API failed: ${posted.status || posted.error || "network"}`);
		const result = posted.json;
		const text = readProcessApiResultText(result) || extractProcessApiText(result);
		console.log("[ShareTarget] Unified processing completed:", {
			ok: result?.ok,
			success: result?.success
		});
		if (text) {
			shareData.aiProcessed = true;
			await deliverProcessIngressResult(text, result.data ?? result.result ?? result, ingress.copyToClipboard === true);
			return true;
		}
		const errorMsg = result?.error || "AI processing returned no data";
		console.warn("[ShareTarget] AI processing failed:", errorMsg);
		const shareChannel = new BroadcastChannel(CHANNELS.SHARE_TARGET);
		shareChannel.postMessage({
			type: "ai-result",
			data: {
				success: false,
				error: errorMsg
			}
		});
		shareChannel.close();
		showToast({
			message: `Processing failed: ${errorMsg}`,
			kind: "warning"
		});
		return false;
	} catch (error) {
		console.error("[ShareTarget] Processing error:", error);
		console.log("[ShareTarget] Attempting server-side fallback");
		if (await tryServerSideProcessing(shareData, ingress.copyToClipboard === true)) {
			console.log("[ShareTarget] Server-side fallback succeeded");
			shareData.aiProcessed = true;
			return true;
		}
		console.warn("[ShareTarget] All processing methods failed");
		const shareChannel = new BroadcastChannel(CHANNELS.SHARE_TARGET);
		shareChannel.postMessage({
			type: "ai-result",
			data: {
				success: false,
				error: error?.message || String(error)
			}
		});
		shareChannel.close();
		showToast({
			message: `Processing failed: ${error?.message || "Unknown error"}`,
			kind: "error"
		});
		return false;
	}
};
var CHANNELS = {
	SHARE_TARGET: BROADCAST_CHANNELS.SHARE_TARGET,
	TOAST: BROADCAST_CHANNELS.TOAST,
	CLIPBOARD: BROADCAST_CHANNELS.CLIPBOARD,
	MINIMAL_APP: BROADCAST_CHANNELS.MINIMAL_APP,
	MAIN_APP: BROADCAST_CHANNELS.MAIN_APP,
	FILE_EXPLORER: BROADCAST_CHANNELS.FILE_EXPLORER,
	PRINT_VIEWER: BROADCAST_CHANNELS.PRINT_VIEWER
};
/**
* Fallback to server-side AI processing when client-side fails
* Broadcasts results to PWA clipboard handlers instead of copying directly
*/
var tryServerSideProcessing = async (shareData, copyToClipboard = true) => {
	try {
		const { content, type } = extractShareContent(shareData);
		if (!content) return false;
		console.log("[ShareTarget] Attempting server-side AI fallback");
		const { getRuntimeSettings } = await __vitePreload(async () => {
			const { getRuntimeSettings } = await import("./RuntimeSettings.js").then((n) => n.t);
			return { getRuntimeSettings };
		}, __vite__mapDeps([11,1,2,0,3,4,5,6]), import.meta.url);
		const settings = await getRuntimeSettings().catch(() => null);
		const apiKey = settings?.ai?.apiKey;
		if (!apiKey) {
			console.log("[ShareTarget] No API key for server fallback");
			return false;
		}
		const response = await fetch("/api/share/process", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				text: type === "text" ? content : void 0,
				url: type === "url" ? content : void 0,
				title: shareData.title,
				apiKey,
				baseUrl: settings?.ai?.baseUrl,
				model: settings?.ai?.customModel || settings?.ai?.model
			})
		});
		if (!response.ok) {
			console.warn("[ShareTarget] Server fallback failed:", response.status);
			return false;
		}
		const result = await response.json();
		if (result?.ok && result?.data) {
			const text = String(result.data);
			console.log("[ShareTarget] Broadcasting server-side result to clipboard handlers");
			await deliverProcessIngressResult(text, result.data, copyToClipboard);
			const shareChannel = new BroadcastChannel(CHANNELS.SHARE_TARGET);
			shareChannel.postMessage({
				type: "ai-result",
				data: {
					success: true,
					data: text
				}
			});
			shareChannel.close();
			return true;
		}
		return false;
	} catch (error) {
		console.warn("[ShareTarget] Server fallback error:", error);
		return false;
	}
};
/**
* Consume share-target payloads from URL params, cache recovery, session
* storage, launch flows, and BroadcastChannel notifications.
*
* INVARIANT: this function favors routing content into the normal transfer/view
* pipeline first, and only falls back to local processing when delivery cannot
* be staged or routed.
*/
var handleShareTarget = () => {
	if (!allowProcessWebShareLaunch()) console.log("[ShareTarget] Process PWA/Web OS share-target is off; launch-queue replay stays on");
	const params = new URLSearchParams(globalThis?.location?.search);
	const shared = params.get("shared");
	const hasExplicitSharedFlow = shared === "1" || shared === "true" || shared === "test";
	let routedFromSessionPending = false;
	if (shared === "1" || shared === "true") {
		console.log("[ShareTarget] Detected shared=1 URL param, processing server-side share");
		const shareFromParams = {
			title: params.get("title") || void 0,
			text: params.get("text") || void 0,
			url: params.get("url") || void 0,
			sharedUrl: params.get("sharedUrl") || void 0,
			timestamp: Date.now(),
			source: "url-params",
			hint: params.get("filename") ? { filename: params.get("filename") || void 0 } : void 0
		};
		const shareId = String(params.get("shareId") || "").trim();
		console.log("[ShareTarget] Share data from URL params:", summarizeForLog({
			title: shareFromParams.title,
			text: shareFromParams.text,
			url: shareFromParams.url,
			sharedUrl: shareFromParams.sharedUrl
		}));
		const cleanUrl = new URL(globalThis?.location?.href);
		[
			"shared",
			"action",
			"title",
			"text",
			"url",
			"sharedUrl",
			"shareId",
			"filename",
			"sku"
		].forEach((p) => cleanUrl.searchParams.delete(p));
		globalThis?.history?.replaceState?.({}, "", cleanUrl.pathname + cleanUrl.hash);
		(async () => {
			if (shareId) try {
				const res = await fetch(`/api/vds/share/${encodeURIComponent(shareId)}`);
				if (res.ok) {
					const row = await res.json();
					const { dataUrlToFile } = await __vitePreload(async () => {
						const { dataUrlToFile } = await import("./sku-ingress.js").then((n) => n.u);
						return { dataUrlToFile };
					}, __vite__mapDeps([12,1,2,0,3,4,5,6]), import.meta.url);
					const files = [];
					for (const item of row.files || []) {
						if (!item?.data) continue;
						const file = await dataUrlToFile(item.data, String(item.name || "shared.bin"), String(item.type || "application/octet-stream"));
						if (file) files.push(file);
					}
					if (row.title && !shareFromParams.title) shareFromParams.title = row.title;
					if (row.text && !shareFromParams.text) shareFromParams.text = row.text;
					if (row.url && !shareFromParams.sharedUrl) shareFromParams.sharedUrl = row.url;
					if (files.length) {
						shareFromParams.files = files;
						shareFromParams.fileCount = files.length;
					}
				}
			} catch (error) {
				console.warn("[ShareTarget] VDS share stash missed:", error);
			}
			const transferPayload = await mergeUrlParamsShareWithCache(shareFromParams);
			const { content, type } = extractShareContent(transferPayload);
			const pendingFiles = Number(transferPayload.fileCount ?? 0) > 0;
			console.log("[ShareTarget] After cache merge:", summarizeForLog({
				title: transferPayload.title,
				text: transferPayload.text,
				url: transferPayload.url,
				fileCount: transferPayload.fileCount,
				filesLen: transferPayload.files?.length
			}));
			console.log("[ShareTarget] Extracted (merged):", {
				content: content?.substring(0, 50),
				type
			});
			if (content || type === "file" || pendingFiles) {
				console.log("[ShareTarget] Routing merged share payload");
				holdIngressFiles(Array.isArray(transferPayload.files) ? transferPayload.files.filter((file) => file instanceof File) : []);
				try {
					if (!await routeToTransferView(transferPayload, "share-target", extractTransferHint(transferPayload), true)) await processShareTargetData(transferPayload, true);
				} catch (error) {
					console.warn("[ShareTarget] Route transfer failed, falling back to processing:", error);
					await processShareTargetData(transferPayload, true);
				}
			} else console.log("[ShareTarget] Nothing to route after merge");
		})().catch((e) => console.warn("[ShareTarget] shared=1 async flow failed:", e));
		return;
	} else if (shared === "test") {
		showToast({
			message: "Share target route working",
			kind: "info"
		});
		const cleanUrl = new URL(globalThis?.location?.href);
		cleanUrl.searchParams.delete("shared");
		globalThis?.history?.replaceState?.({}, "", cleanUrl.pathname + cleanUrl.hash);
	}
	try {
		const pendingData = sessionStorage.getItem("rs-pending-share");
		if (pendingData) {
			sessionStorage.removeItem("rs-pending-share");
			const shareData = JSON.parse(pendingData);
			console.log("[ShareTarget] Found pending share in sessionStorage:", summarizeForLog(shareData));
			routedFromSessionPending = true;
			routeToTransferView(shareData, "pending", extractTransferHint(shareData), true).catch((error) => {
				console.warn("[ShareTarget] Pending transfer routing failed:", error);
			});
		}
	} catch (e) {}
	if (!hasExplicitSharedFlow && !routedFromSessionPending) (async () => {
		try {
			let cachedPayload = null;
			let meta = {};
			let files = [];
			let expectedFileCount = 0;
			for (let attempt = 1; attempt <= 4; attempt++) {
				cachedPayload = await consumeCachedShareTargetPayload({ clear: false });
				meta = cachedPayload?.meta && typeof cachedPayload.meta === "object" ? cachedPayload.meta : {};
				files = Array.isArray(cachedPayload?.files) ? cachedPayload.files : [];
				expectedFileCount = Number(meta?.fileCount || 0);
				if (expectedFileCount <= 0 || files.length > 0) break;
				await new Promise((resolve) => globalThis.setTimeout(resolve, 200 * attempt));
			}
			const timestamp = Number(meta?.timestamp || Date.now());
			const ageMs = Date.now() - timestamp;
			if (!Number.isFinite(ageMs) || ageMs < 0 || ageMs > 3e5) return;
			const transferPayload = {
				...buildShareDataFromCachedPayload({
					meta,
					files,
					fileMeta: cachedPayload?.fileMeta || []
				}),
				fileCount: files.length || expectedFileCount,
				timestamp,
				source: "cached-bootstrap"
			};
			if (!transferPayload.text && !transferPayload.url && !transferPayload.title && (transferPayload.fileCount ?? 0) <= 0) return;
			console.log("[ShareTarget] Bootstrap recovery from cached payload:", summarizeForLog({
				source: transferPayload.source,
				fileCount: transferPayload.fileCount,
				imageCount: transferPayload.imageCount,
				hasText: !!transferPayload.text,
				hasUrl: !!transferPayload.url,
				ageMs
			}));
			const delivered = await routeToTransferView(transferPayload, "pending", extractTransferHint(transferPayload), true);
			const hasBinaryPayload = Array.isArray(transferPayload.files) && transferPayload.files.length > 0;
			if (delivered && !hasBinaryPayload) await consumeCachedShareTargetPayload({ clear: true }).catch(() => null);
		} catch (error) {
			console.warn("[ShareTarget] Cached bootstrap recovery failed:", error);
		}
	})();
	if (typeof BroadcastChannel !== "undefined") {
		new BroadcastChannel(CHANNELS.SHARE_TARGET).addEventListener("message", async (event) => {
			const unwrapped = unwrapSwInteropMessage(event.data);
			const msgType = unwrapped?.type || event.data?.type;
			const msgData = unwrapped?.data ?? event.data?.data;
			console.log("[ShareTarget] Broadcast received:", {
				type: msgType,
				hasData: !!msgData
			});
			if ((msgType === "share-received" || msgType === "share-target-input") && msgData) {
				console.log("[ShareTarget] Share notification received:", {
					hasText: !!msgData.text,
					hasUrl: !!msgData.url,
					fileCount: msgData.fileCount || 0,
					aiEnabled: msgData.aiEnabled,
					source: msgData.source
				});
				let transferPayload = await awaitHydratedSharePayloadWithRetries(msgData);
				if (!(Array.isArray(msgData.files) && msgData.files.some((f) => f instanceof File)) && Array.isArray(transferPayload.files) && transferPayload.files.some((f) => f instanceof File)) showToast({
					message: `Received ${transferPayload.files.filter((f) => f instanceof File).length || msgData.fileCount || 0} shared file(s)`,
					kind: "info"
				});
				if (transferPayload.files?.length || transferPayload.text || transferPayload.url || transferPayload.title || (transferPayload.fileCount ?? 0) > 0) {
					console.log("[ShareTarget] Processing broadcasted share data");
					if (!await routeToTransferView(transferPayload, "share-target", extractTransferHint(transferPayload), true)) await processShareTargetData(transferPayload, true);
				} else if ((msgData.fileCount ?? 0) > 0) showToast({
					message: `Processing ${msgData.fileCount} file(s)...`,
					kind: "info"
				});
			} else if (msgType === "ai-result") console.log("[ShareTarget] AI result broadcast received (handled by PWA clipboard)");
		});
		console.log("[ShareTarget] Broadcast channel listener set up");
	} else console.warn("[ShareTarget] BroadcastChannel not available");
};
/**
* Register the browser Launch Queue consumer used for direct file-open flows.
*
* WHY: launched files can arrive before the destination view is mounted, so the
* handler stages them in cache first and then routes them into the normal
* transfer pipeline.
*/
var setupLaunchQueueConsumer = async () => {
	if (!allowProcessWebLaunchQueue()) {
		console.log("[LaunchQueue] Process PWA/Web launch-queue is off");
		return;
	}
	if (!("launchQueue" in globalThis)) {
		console.log("[LaunchQueue] launchQueue API not available");
		return;
	}
	try {
		globalThis?.launchQueue?.setConsumer?.((launchParams) => {
			console.log("[LaunchQueue] Launch params received:", summarizeForLog({
				fileHandleCount: launchParams?.files?.length || 0,
				hasTargetUrl: !!launchParams?.targetURL,
				targetURL: launchParams?.targetURL
			}));
			const $files = [...launchParams.files];
			if (!$files || $files.length === 0) {
				console.log("[LaunchQueue] No files in launch params - this may indicate:");
				console.log("  - File opener was used but no files were selected");
				console.log("  - Launch queue consumer called with empty payload");
				console.log("  - Permission issues preventing file access");
				console.log("  - Browser compatibility issues");
				return;
			}
			console.log(`[LaunchQueue] Processing ${$files.length} file handle(s)`);
			const files = [];
			const failedHandles = [];
			(async () => {
				for (const fileHandle of $files) try {
					console.log("[LaunchQueue] Processing file handle:", {
						name: fileHandle.name || "unknown",
						type: fileHandle.constructor.name,
						hasGetFile: typeof fileHandle.getFile === "function",
						isFile: fileHandle instanceof File
					});
					if (fileHandle.getFile) try {
						if ("queryPermission" in fileHandle) {
							let permission = await fileHandle.queryPermission({ mode: "read" });
							console.log("[LaunchQueue] File handle permission:", permission);
							if (permission === "prompt" && "requestPermission" in fileHandle) try {
								permission = await fileHandle.requestPermission({ mode: "read" });
								console.log("[LaunchQueue] File handle permission requested:", permission);
							} catch (permissionError) {
								console.warn("[LaunchQueue] requestPermission failed:", permissionError);
							}
							if (permission !== "granted") {
								console.warn("[LaunchQueue] No permission to access file:", fileHandle.name, permission);
								failedHandles.push(fileHandle);
								continue;
							}
						}
						const file = await fileHandle.getFile();
						console.log("[LaunchQueue] Got file from handle:", file.name, file.type, file.size);
						files.push(file);
					} catch (permError) {
						console.warn("[LaunchQueue] Permission or access error for file handle:", permError, fileHandle);
						failedHandles.push(fileHandle);
					}
					else if (fileHandle instanceof File) {
						console.log("[LaunchQueue] File handle is already a File object:", fileHandle.name, fileHandle.type);
						files.push(fileHandle);
					} else {
						console.warn("[LaunchQueue] Unknown file handle type:", fileHandle.constructor.name);
						failedHandles.push(fileHandle);
					}
				} catch (error) {
					console.warn("[LaunchQueue] Failed to get file from handle:", error, fileHandle);
					failedHandles.push(fileHandle);
				}
				console.log(`[LaunchQueue] Successfully processed ${files.length} files, ${failedHandles.length} failed`);
				if (files.length === 0) {
					if (failedHandles.length > 0) {
						console.error("[LaunchQueue] All file handles failed to process");
						showToast({
							message: `Failed to process ${failedHandles.length} launched file(s)`,
							kind: "error"
						});
					} else console.log("[LaunchQueue] No files to process after filtering");
					return;
				}
				if (files.length > 0) {
					const mdForBind = files.find((file) => isTextLikeFile(file)) || files[0];
					const launchSku = inferCwspSkuFromLocation();
					let hint = files.length === 1 && isTextLikeFile(files[0]) && (!launchSku || launchSku === "crx") ? {
						destination: "viewer",
						action: "open",
						filename: files[0]?.name
					} : { filename: files[0]?.name };
					/**
					* WHY: Launch Queue drops the parent folder. Same user-activation can still
					* open showDirectoryPicker({ startIn: fileHandle }) so relative images resolve.
					* Abort / missing API is fine — sidecar files + viewer Assets button remain.
					*/
					const startHandle = $files.find((handle) => handle && typeof handle.getFile === "function");
					try {
						const bound = await bindDirectoryForLaunchedFiles({
							startIn: startHandle,
							files,
							filename: hint?.filename || mdForBind?.name
						});
						if (bound) hint = {
							...hint || {
								destination: "viewer",
								action: "open",
								filename: mdForBind?.name
							},
							source: bound.virtualPath
						};
					} catch (error) {
						console.warn("[LaunchQueue] Asset directory bind skipped:", error);
					}
					const timestamp = Date.now();
					const imageCount = files?.filter?.((f) => f.type.startsWith("image/")).length;
					const staged = await storeShareTargetPayloadToCache({
						files,
						meta: {
							timestamp,
							source: "launch-queue",
							route: "launch-queue",
							hint,
							fileCount: files.length,
							imageCount
						}
					});
					if (!staged) console.warn("[LaunchQueue] Failed to pre-stage files to cache");
					console.log("[LaunchQueue] Staged launch queue payload:", {
						fileCount: files.length,
						imageCount,
						fileTypes: files?.map?.((f) => ({
							name: f.name,
							type: f.type,
							size: f.size
						})),
						source: "launch-queue",
						staged
					});
					holdIngressFiles(files);
					showToast({
						message: `Received ${files.length} file(s)`,
						kind: "info"
					});
					if (staged) {
						if (!await routeToTransferView({
							title: files[0]?.name,
							files,
							fileCount: files.length,
							imageCount,
							timestamp,
							source: "launch-queue",
							hint
						}, "launch-queue", hint, true)) {
							const url = new URL(globalThis?.location?.href);
							url.pathname = pathForSkuHostView("/workcenter");
							url.search = "";
							url.searchParams.set("shared", "1");
							url.hash = "";
							if (sameSkuHostViewPath(globalThis.location.pathname, url.pathname)) console.warn("[LaunchQueue] Already on process landing — skip /share-target hard-nav");
							else globalThis.location.href = url.toString();
						}
					} else showToast({
						message: `Failed to stage ${files.length} launched file(s)`,
						kind: "error"
					});
				}
				if (launchParams.targetURL) console.log("[LaunchQueue] Target URL:", launchParams.targetURL);
			})();
		});
		console.log("[LaunchQueue] Consumer set up successfully");
	} catch (error) {
		console.error("[LaunchQueue] Failed to set up consumer:", error);
	}
};
/**
* Recover pending share payloads staged by server-side handlers when no worker
* was active to own the original share request.
*/
var checkPendingShareData = async () => {
	try {
		const pendingData = globalThis?.sessionStorage?.getItem?.("rs-pending-share");
		if (!pendingData) return null;
		globalThis?.sessionStorage?.removeItem?.("rs-pending-share");
		const shareData = JSON.parse(pendingData);
		console.log("[ShareTarget] Found pending share data:", summarizeForLog(shareData));
		if ("caches" in window) {
			const cache = await globalThis?.caches?.open?.("share-target-data");
			const shareKey = new URL("/share-target-data", globalThis.location.origin).href;
			await cache?.put?.(shareKey, new Response(JSON.stringify({
				...shareData,
				files: [],
				timestamp: shareData.timestamp || Date.now()
			}), { headers: { "Content-Type": "application/json" } }));
		}
		return shareData;
	} catch (error) {
		console.warn("[ShareTarget] Failed to process pending share data:", error);
		return null;
	}
};
var _ingressPwaPromise = null;
/**
* Single entry for page boot: SW registration, share-target URL/cache pipeline, clipboard receivers, launch queue.
* Called from {@link BootLoader} after settings. Route/process waits for `cwsp:boot-ready`
* so Work Center can attach files (and auto-process) instead of dropping the payload.
*/
var initIngressPWA = async () => {
	if (_ingressPwaPromise) return _ingressPwaPromise;
	_ingressPwaPromise = (async () => {
		if (typeof globalThis === "undefined" || !globalThis.window) return;
		try {
			installShellImageOpenListener();
		} catch {}
		if (!shouldRunPwaIngress()) return;
		try {
			/**
			* Always `immediate: false` here — dev + `immediate: true` caused `controllerchange` → `location.reload()`
			* mid-boot before shell/styles mounted (blank white screen).
			*
			* Dev still calls `activateWaitingWorker` inside `initServiceWorker` when a `waiting` worker exists so
			* Vite/asset routes update without forcing an early hard reload on every visitor.
			*/
			await initServiceWorker({ immediate: false });
		} catch (error) {
			console.warn("[PWA] Service worker registration failed:", error);
		}
		try {
			initReceivers();
		} catch (error) {
			console.warn("[PWA] initReceivers failed:", error);
		}
		try {
			handleShareTarget();
		} catch (error) {
			console.warn("[PWA] handleShareTarget failed:", error);
		}
		setupLaunchQueueConsumer().catch((error) => console.warn("[PWA] setupLaunchQueueConsumer failed:", error));
	})();
	return _ingressPwaPromise;
};
//#endregion
export { checkPendingShareData, ensureAppCss, handleShareTarget, ingestSharePayload, initIngressPWA, initReceivers, ensureServiceWorkerRegistered as n, setupLaunchQueueConsumer, dropStaleServiceWorkerRegistrations as t };
