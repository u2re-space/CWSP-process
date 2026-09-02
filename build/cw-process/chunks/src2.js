const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./sw-page-bridge.js","./rolldown-runtime.js","../shells/boot-index.js","../com/app.js","../fest/core.js","../shells/boot-history-base.js","../com/service.js","../fest/veela.js","./BootLoader.js","../shells/preference.js","./capacitor-settings-permissions.js","./capacitor-permissions.js"])))=>i.map(i=>d[i]);
import { Or as __vitePreload, vr as loadAsAdopted } from "../com/app.js";
import { A as initializeLayers, dt as safeCachesDelete, ft as safeCachesKeys } from "../shells/boot-index.js";
import { a as applyCwspSku } from "../shells/boot-history-base.js";
import { checkPendingShareData, ensureAppCss, handleShareTarget, initReceivers, n as ensureServiceWorkerRegistered, setupLaunchQueueConsumer, t as dropStaleServiceWorkerRegistrations } from "./sw-handling.js";
//#region src/shared/routing/pwa/pwa-handling.ts
var IS_DEV = Boolean(false);
var AUTO_RELOAD_COOLDOWN_MS = 12e4;
var RELOAD_GUARD_KEY = "cw:pwa:last-auto-reload-at";
var shouldSkipAutoReloadNow = () => {
	if (IS_DEV) return true;
	try {
		const now = Date.now();
		const last = Number(globalThis?.sessionStorage?.getItem?.(RELOAD_GUARD_KEY) || "0");
		if (Number.isFinite(last) && now - last < AUTO_RELOAD_COOLDOWN_MS) return true;
		globalThis?.sessionStorage?.setItem?.(RELOAD_GUARD_KEY, String(now));
	} catch {}
	return false;
};
var isExtension = () => {
	try {
		return typeof chrome !== "undefined" && Boolean(chrome?.runtime?.id) && globalThis?.location?.protocol === "chrome-extension:";
	} catch {
		return false;
	}
};
var isCapacitorNative = () => {
	try {
		const c = globalThis.Capacitor;
		return typeof c?.isNativePlatform === "function" && Boolean(c.isNativePlatform());
	} catch {
		return false;
	}
};
var isServiceWorkerAllowedContext = () => {
	const protocol = (globalThis?.location?.protocol || "").toLowerCase();
	if (protocol === "chrome-extension:" || protocol === "file:" || protocol === "about:") return false;
	if (protocol === "capacitor:" || protocol === "ionic:") return true;
	if (isCapacitorNative() && (protocol === "https:" || protocol === "http:")) return true;
	return protocol === "https:" || protocol === "http:";
};
/**
* Asset cache versioning and update detection
*/
var AssetUpdateManager = class AssetUpdateManager {
	static instance;
	assetVersions = /* @__PURE__ */ new Map();
	updateCheckInterval = null;
	isChecking = false;
	static getInstance() {
		if (!AssetUpdateManager.instance) AssetUpdateManager.instance = new AssetUpdateManager();
		return AssetUpdateManager.instance;
	}
	/**
	* Check if an asset has been updated by comparing versions
	*/
	async checkAssetUpdate(url, currentVersion) {
		try {
			const response = await fetch(url, {
				method: "HEAD",
				cache: "no-cache",
				headers: {
					"Cache-Control": "no-cache",
					"Pragma": "no-cache"
				}
			});
			if (!response.ok) return false;
			const etag = response.headers.get("etag");
			const lastModified = response.headers.get("last-modified");
			const contentLength = response.headers.get("content-length");
			const versionKey = `${etag || ""}-${lastModified || ""}-${contentLength || ""}`;
			const storedVersion = this.assetVersions.get(url);
			if (storedVersion && storedVersion !== versionKey) {
				console.log(`[AssetUpdate] Asset updated: ${url}`);
				this.assetVersions.set(url, versionKey);
				return true;
			}
			this.assetVersions.set(url, versionKey);
			return false;
		} catch (error) {
			console.warn(`[AssetUpdate] Failed to check asset: ${url}`, error);
			return false;
		}
	}
	/**
	* Force refresh a cached asset by adding cache-busting parameter
	*/
	forceRefreshAsset(url) {
		return `${url}${url.includes("?") ? "&" : "?"}_cache=${Date.now()}`;
	}
	/**
	* Check all critical assets for updates
	*/
	async checkAllAssets() {
		if (this.isChecking) return [];
		this.isChecking = true;
		const criticalAssets = IS_DEV ? [] : ["./choice.js"];
		const updatedAssets = [];
		try {
			const checks = criticalAssets.map(async (asset) => {
				if (await this.checkAssetUpdate(asset)) updatedAssets.push(asset);
			});
			await Promise.all(checks);
		} finally {
			this.isChecking = false;
		}
		return updatedAssets;
	}
	/**
	* Start periodic asset checking
	*/
	startPeriodicChecks(intervalMs = 3e5) {
		if (this.updateCheckInterval) globalThis?.clearInterval?.(this.updateCheckInterval);
		this.updateCheckInterval = globalThis?.setInterval?.(async () => {
			const updatedAssets = await this.checkAllAssets();
			if (updatedAssets.length > 0) {
				console.log("[AssetUpdate] Updated assets detected:", updatedAssets);
				globalThis?.dispatchEvent?.(new CustomEvent("assets-updated", { detail: { updatedAssets } }));
			}
		}, intervalMs);
	}
	/**
	* Stop periodic checking
	*/
	stopPeriodicChecks() {
		if (this.updateCheckInterval) {
			clearInterval(this.updateCheckInterval);
			this.updateCheckInterval = null;
		}
	}
};
/**
* Show reload notification for critical updates
*/
function showReloadNotification() {
	const existing = document.querySelector(".app-reload-notification");
	if (existing) existing.remove();
	const notification = document.createElement("div");
	notification.className = "app-reload-notification";
	Object.assign(notification.style, {
		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		background: "rgba(0, 0, 0, 0.9)",
		color: "white",
		padding: "24px",
		borderRadius: "12px",
		zIndex: "10002",
		fontFamily: "system-ui, -apple-system, sans-serif",
		textAlign: "center",
		boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
		backdropFilter: "blur(10px)",
		border: "1px solid rgba(255,255,255,0.1)"
	});
	notification.innerHTML = `
        <div style="font-size: 1.5rem; margin-bottom: 8px;"><ui-icon icon="arrow-clockwise" icon-style="duotone"></ui-icon></div>
        <div style="font-size: 1.1rem; font-weight: 600; margin-bottom: 8px;">Update Available</div>
        <div style="opacity: 0.8; margin-bottom: 16px;">CWSP-shell has been updated and will reload shortly.</div>
        <div style="font-size: 0.9rem; opacity: 0.6;">Reloading in 3 seconds...</div>
    `;
	document.body.appendChild(notification);
	let countdown = 3;
	const countdownInterval = setInterval(() => {
		countdown--;
		const countdownEl = notification.querySelector("div:last-child");
		if (countdownEl) countdownEl.textContent = `Reloading in ${countdown} second${countdown !== 1 ? "s" : ""}...`;
		if (countdown <= 0) {
			clearInterval(countdownInterval);
			globalThis?.location?.reload?.();
		}
	}, 1e3);
	notification.addEventListener("click", () => {
		clearInterval(countdownInterval);
		globalThis?.location?.reload?.();
	});
}
/**
* Service worker update manager with enhanced features
*/
var ServiceWorkerUpdateManager = class {
	registration = null;
	updateToast = null;
	async waitForController(timeoutMs = 4e3) {
		if (navigator.serviceWorker.controller) return true;
		return await new Promise((resolve) => {
			let done = false;
			const finish = (value) => {
				if (done) return;
				done = true;
				try {
					navigator.serviceWorker.removeEventListener("controllerchange", onChange);
				} catch {}
				clearTimeout(timer);
				resolve(value);
			};
			const onChange = () => finish(Boolean(navigator.serviceWorker.controller));
			const timer = setTimeout(() => finish(Boolean(navigator.serviceWorker.controller)), timeoutMs);
			navigator.serviceWorker.addEventListener("controllerchange", onChange, { once: true });
		});
	}
	async register() {
		if (!("serviceWorker" in navigator) || isExtension() || !isServiceWorkerAllowedContext()) return null;
		try {
			this.registration = await ensureServiceWorkerRegistered();
			if (!this.registration) return null;
			this.setupUpdateListeners();
			this.startPeriodicUpdates();
			navigator.serviceWorker.ready.catch(() => void 0);
			this.waitForController(1500).catch(() => false);
			console.log("[SW] Service worker registered successfully");
			return this.registration;
		} catch (error) {
			console.error("[SW] Registration failed:", error);
			return null;
		}
	}
	setupUpdateListeners() {
		if (!this.registration) return;
		this.registration.addEventListener("updatefound", () => {
			const newWorker = this.registration?.installing;
			if (!newWorker) return;
			console.log("[SW] New service worker found, installing...");
			newWorker.addEventListener("statechange", () => {
				if (newWorker.state === "installed") {
					if (navigator.serviceWorker.controller) {
						console.log("[SW] New service worker installed, ready to activate");
						this.showUpdateNotification();
					} else console.log("[SW] Service worker installed for offline use");
				} else if (newWorker.state === "activated") {
					console.log("[SW] New service worker activated");
					globalThis?.dispatchEvent?.(new CustomEvent("sw-activated", { detail: { registration: this.registration } }));
				}
			});
		});
		navigator.serviceWorker.addEventListener("controllerchange", () => {
			console.log("[SW] Controller changed - new service worker active");
			globalThis?.dispatchEvent?.(new CustomEvent("sw-controller-changed"));
		});
		navigator.serviceWorker.addEventListener("message", (event) => {
			const { type, data } = event.data || {};
			if (type === "ai-result" || type === "process-api-result" || type === "share-target-result" || type === "share-target-input" || type === "share-received" || type === "content-cached" || type === "content-received") __vitePreload(async () => {
				const { ingestSwClientMessage } = await import("./sw-page-bridge.js").then((n) => n.a);
				return { ingestSwClientMessage };
			}, __vite__mapDeps([0,1,2,3,4,5,6,7]), import.meta.url).then(({ ingestSwClientMessage }) => {
				ingestSwClientMessage(event.data);
			}).catch(() => void 0);
			switch (type) {
				case "sw-update-ready":
					console.log("[SW] Service worker reports update ready");
					this.showUpdateNotification();
					break;
				case "asset-updated":
					console.log("[PWA] Service worker detected asset update:", data);
					if (data.url.includes("choice.js") || data.url.includes("sw.js")) showReloadNotification();
					break;
				case "sw-activated":
					console.log("[PWA] Service worker activated");
					break;
				case "cache-status":
					console.log("[PWA] Cache status:", data);
					break;
				default: console.log("[PWA] Unknown SW message:", type, data);
			}
		});
	}
	startPeriodicUpdates() {
		if (Boolean(false)) return;
		globalThis?.setInterval?.(() => {
			this.registration?.update().catch(console.warn);
		}, 18e5);
	}
	showUpdateNotification() {
		this.hideUpdateNotification();
		this.updateToast = document.createElement("div");
		Object.assign(this.updateToast.style, {
			position: "fixed",
			top: "20px",
			right: "20px",
			background: "#007acc",
			color: "white",
			padding: "16px 20px",
			borderRadius: "8px",
			boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
			zIndex: "10000",
			fontFamily: "system-ui, sans-serif",
			fontSize: "14px",
			cursor: "pointer",
			maxWidth: "300px",
			transition: "all 0.3s ease"
		});
		this.updateToast.innerHTML = `
            <div style="font-weight: 600; margin-bottom: 4px;">Update Available</div>
            <div style="opacity: 0.9; margin-bottom: 12px;">A new version of CWSP-shell is ready</div>
            <div style="display: flex; gap: 8px;">
                <button id="update-now" style="
                    background: white;
                    color: #007acc;
                    border: none;
                    padding: 6px 12px;
                    border-radius: 4px;
                    font-size: 12px;
                    font-weight: 600;
                    cursor: pointer;
                ">Update Now</button>
                <button id="update-later" style="
                    background: transparent;
                    color: white;
                    border: 1px solid rgba(255,255,255,0.3);
                    padding: 6px 12px;
                    border-radius: 4px;
                    font-size: 12px;
                    cursor: pointer;
                ">Later</button>
            </div>
        `;
		const updateNowBtn = this.updateToast.querySelector("#update-now");
		const updateLaterBtn = this.updateToast.querySelector("#update-later");
		updateNowBtn?.addEventListener("click", () => {
			this.applyUpdate();
		});
		updateLaterBtn?.addEventListener("click", () => {
			this.hideUpdateNotification();
		});
		setTimeout(() => {
			this.hideUpdateNotification();
		}, 3e4);
		document.body.appendChild(this.updateToast);
		globalThis?.dispatchEvent?.(new CustomEvent("sw-update-notification-shown"));
	}
	hideUpdateNotification() {
		if (this.updateToast) {
			this.updateToast.style.opacity = "0";
			setTimeout(() => {
				this.updateToast?.remove();
				this.updateToast = null;
			}, 300);
		}
	}
	async applyUpdate() {
		console.log("[SW] Applying service worker update...");
		this.hideUpdateNotification();
		if (this.registration?.waiting) this.registration.waiting.postMessage({ type: "SKIP_WAITING" });
		globalThis?.location?.reload?.();
	}
	/**
	* Force check for service worker updates
	*/
	async checkForUpdates() {
		await this.registration?.update();
	}
};
/**
* Initialize PWA features and asset update system
*/
var initPWA = async () => {
	console.log("[PWA] Initializing PWA features...");
	try {
		if (globalThis?.matchMedia?.("(display-mode: standalone)").matches || (globalThis?.navigator)?.standalone === true) console.log("[PWA] Running in standalone mode");
		AssetUpdateManager.getInstance().startPeriodicChecks();
		const registration = await new ServiceWorkerUpdateManager().register();
		globalThis?.addEventListener?.("assets-updated", (event) => {
			const { updatedAssets } = event.detail;
			console.log("[PWA] Assets updated:", updatedAssets);
			const criticalAssets = ["choice.js"];
			if (updatedAssets.some((asset) => criticalAssets.some((critical) => asset.includes(critical)))) {
				if (shouldSkipAutoReloadNow()) {
					console.log("[PWA] Auto reload suppressed (dev or cooldown)");
					return;
				}
				console.log("[PWA] Critical assets updated, reloading...");
				showReloadNotification();
			}
		});
		let deferredPrompt = null;
		globalThis?.addEventListener?.("beforeinstallprompt", (e) => {
			console.log("[PWA] Install prompt available");
			e.preventDefault();
			deferredPrompt = e;
			globalThis?.dispatchEvent?.(new CustomEvent("pwa-install-available", { detail: { prompt: deferredPrompt } }));
		});
		globalThis?.addEventListener?.("appinstalled", () => {
			console.log("[PWA] App installed successfully");
			deferredPrompt = null;
		});
		return registration;
	} catch (error) {
		console.warn("[PWA] PWA initialization failed:", error);
	}
	return null;
};
/**
* Manually check for updates (can be called from app UI)
*/
var checkForUpdates = async () => {
	console.log("[PWA] Manual update check requested");
	try {
		if ("serviceWorker" in navigator && navigator.serviceWorker.controller) {
			await dropStaleServiceWorkerRegistrations();
			const registration = await navigator.serviceWorker.getRegistration();
			if (registration) {
				console.log("[PWA] Checking service worker for updates...");
				await registration.update();
				if (registration.active) registration.active.postMessage({ type: "CHECK_FOR_UPDATES" });
			}
		}
		const updatedAssets = await AssetUpdateManager.getInstance().checkAllAssets();
		if (updatedAssets.length > 0) {
			console.log("[PWA] Asset updates found:", updatedAssets);
			globalThis?.dispatchEvent?.(new CustomEvent("assets-updated", { detail: { updatedAssets } }));
		} else {
			console.log("[PWA] No updates found");
			globalThis?.dispatchEvent?.(new CustomEvent("app-up-to-date"));
		}
	} catch (error) {
		console.error("[PWA] Manual update check failed:", error);
		throw error;
	}
};
/**
* Force reload all cached assets
*/
var forceRefreshAssets = async () => {
	console.log("[PWA] Force refreshing all cached assets");
	try {
		const cacheNames = await safeCachesKeys();
		await Promise.all(cacheNames.map((cacheName) => safeCachesDelete(cacheName)));
		console.log("[PWA] All caches cleared");
		globalThis?.location?.reload?.();
	} catch (error) {
		console.error("[PWA] Failed to force refresh assets:", error);
		throw error;
	}
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
var bootProcessSku = async (container, kind, view = "workcenter") => {
	const host = detectHostKind(kind);
	stampProcessSku(host);
	if (host === "capacitor") try {
		const { SystemBarType, SystemBars } = await __vitePreload(async () => {
			const { SystemBarType, SystemBars } = await import("../shells/boot-index.js").then((n) => n.mn);
			return {
				SystemBarType,
				SystemBars
			};
		}, __vite__mapDeps([2,1,3,4,5,6,7]), import.meta.url);
		await SystemBars.hide({ bar: SystemBarType.NavigationBar });
	} catch {}
	const resolved = resolveProcessBootView(view);
	const { bootMinimal } = await __vitePreload(async () => {
		const { bootMinimal } = await import("./BootLoader.js");
		return { bootMinimal };
	}, __vite__mapDeps([8,3,1,4,2,5,6,7,9,10,11]), import.meta.url);
	await bootMinimal(container, resolved, { rememberChoice: false });
};
//#endregion
//#region src/index.ts
try {
	stampProcessSku();
} catch {}
var withTimeout = async (task, label, timeoutMs, fallback) => {
	let timer = null;
	try {
		return await Promise.race([task, new Promise((resolve) => {
			timer = setTimeout(() => {
				console.info(`[Index] ${label} timed out after ${timeoutMs}ms`);
				resolve(fallback);
			}, timeoutMs);
		})]);
	} finally {
		if (timer) clearTimeout(timer);
	}
};
async function index(mountElement) {
	initializeLayers();
	try {
		const viewMod = await __vitePreload(() => import("./views.js"), [], import.meta.url);
		await loadAsAdopted(viewMod.default);
	} catch (error) {
		console.warn("[Index] view styles skipped:", error);
	}
	try {
		if (!document.documentElement.dataset.cwspNativeShell) await ensureAppCss();
		initReceivers();
		handleShareTarget();
		const PRE_SHELL_BUDGET_MS = 1200;
		const pwaPromise = initPWA();
		try {
			await Promise.race([Promise.all([withTimeout(setupLaunchQueueConsumer(), "setupLaunchQueueConsumer", PRE_SHELL_BUDGET_MS, void 0), withTimeout(checkPendingShareData(), "checkPendingShareData", PRE_SHELL_BUDGET_MS, null)]), new Promise((r) => globalThis.setTimeout(r, PRE_SHELL_BUDGET_MS))]);
		} catch (error) {
			console.warn("[Index] Pre-boot share/launch queue failed:", error);
		}
		withTimeout(pwaPromise, "initPWA", 5e3, null);
		await bootProcessSku(mountElement);
	} catch (error) {
		showProcessBootFailure(error, mountElement);
	}
}
//#endregion
export { checkForUpdates, index as default, index, forceRefreshAssets };
