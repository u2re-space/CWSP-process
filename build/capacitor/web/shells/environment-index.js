const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./environment-window-views-browser-view.js","../chunks/rolldown-runtime.js"])))=>i.map(i=>d[i]);
import { an as numberRef, in as booleanRef, rn as effect, vn as __vitePreload, y as tryLaunchSiblingView } from "../com/app.js";
import { a as SHELL_SLOT, i as isEnvironmentShellContainerHost, o as resolveOverlayMountPoint, s as resolveShellOverlaysMount, t as getOrCreateEnvironmentOverlayMount } from "./environment-environment-overlay.js";
import { a as setChromeFlyoutShellHost } from "./environment-components-calendar-CalendarFlyout.js";
import { t as restoreQuickFilters } from "./environment-components-settings-QuickSettings.js";
import { c as matchShellDisplayMode, l as mountEnvironmentStatusBar, n as attachShellDeviceStatus, o as isNativeCapacitorHost, r as attachStatusBarContrast, s as isShellStandaloneDisplay, t as installCapacitorNativeSafeAreaInsets, u as shouldShowStatusOverlay } from "./environment-components-statusbar-capacitor-native-safe-area.js";
import { i as setBookmarksMenuApi, r as createChromeBookmarksMenuApi } from "./environment-components-app-menu-AppMenu.js";
import { t as mountEnvironmentTaskBar } from "./environment-components-taskbar-element-TaskBar.js";
import "./environment-components-wallpaper.js";
Object.freeze({
	w: 360,
	h: 240
});
function createChromeModel(title, seed = {}) {
	const { x = 48, y = 48, w = 640, h = 480, z = 10, demoRole } = seed;
	const mq = matchMedia("(max-width: 640px)");
	return {
		demoRole,
		title,
		bounds: {
			x: numberRef(x),
			y: numberRef(y),
			w: numberRef(w),
			h: numberRef(h)
		},
		z: numberRef(z),
		maximizedMobile: booleanRef(mq.matches),
		minimized: booleanRef(false),
		desktopMaximized: booleanRef(false),
		nativeMode: booleanRef(false),
		visible: booleanRef(true),
		isMobileMq: mq
	};
}
//#endregion
//#region src/frontend/shells/environment/window/views/markdown-view-window.ts
/**
* Contract for opening `views/markdown-view` (CwViewViewer) inside `mountWindowFrame`.
*
* - **`viewer`** — primary id (registry, IPC, demo `readerWindow` map key).
* - **`markdown`** (and related strings) — aliases; same module, same managed window row as `viewer`.
*
* Shells MUST collapse aliases via {@link normalizeMarkdownViewWindowId} before `Map` lookups / `focusWindow`.
*/
var MARKDOWN_VIEW_MANAGED_WINDOW_KEY = "viewer";
var ALIASES = /* @__PURE__ */ new Set([
	"markdown",
	"markdown-view",
	"markdown-viewer",
	"reader",
	"env-viewer"
]);
/**
* Strip legacy desktop typos, normalize markdown family → {@link MARKDOWN_VIEW_MANAGED_WINDOW_KEY};
* leave all other ids unchanged (`explorer`, `settings`, …).
*/
function normalizeMarkdownViewWindowId(raw) {
	let id = String(raw ?? "").trim().toLowerCase();
	id = id.replace(/^#/, "");
	const todo = /^todo:\s*(.*)$/i.exec(id);
	if (todo) id = String(todo[1] ?? "").trim().toLowerCase();
	id = id.replace(/\s+/g, "");
	if (!id) return "";
	if (id === "viewer" || ALIASES.has(id)) return MARKDOWN_VIEW_MANAGED_WINDOW_KEY;
	return id;
}
function isMarkdownViewManagedWindowKey(id) {
	return String(id || "").trim().toLowerCase() === MARKDOWN_VIEW_MANAGED_WINDOW_KEY;
}
//#endregion
//#region src/frontend/shells/environment/window/views/view-mount.ts
function isViewLike(x) {
	return Boolean(x && typeof x === "object" && typeof x.render === "function");
}
function runViewLifecycle(view, phase) {
	const fn = view?.lifecycle?.[phase];
	if (typeof fn === "function") Promise.resolve(fn());
}
/** `export default` is a `CustomElementConstructor` (e.g. markdown-view) — must use `new`. */
function isHTMLElementSubclassConstructor(value) {
	if (typeof value !== "function") return false;
	try {
		const proto = value.prototype;
		return Boolean(proto != null && typeof HTMLElement !== "undefined" && HTMLElement.prototype.isPrototypeOf(proto));
	} catch {
		return false;
	}
}
/**
* Factory result plus optional {@link View} instance so callers can run {@link ViewLifecycle}
* after the root node is connected (e.g. settings-view adopted stylesheets / shadow roots).
*/
function instantiateViewForMount(mod, options) {
	const d = mod.default ?? mod.createView ?? mod.createHomeView;
	if (!d || typeof d !== "function") throw new Error("window-frame view-mount: module has no default/createView factory");
	const instance = isHTMLElementSubclassConstructor(d) ? new d(options) : d(options);
	if (isViewLike(instance)) {
		const view = instance;
		const root = view.render(options);
		if (!(root instanceof HTMLElement)) throw new Error("window-frame view-mount: view.render() must return HTMLElement");
		return {
			root,
			view
		};
	}
	if (instance instanceof HTMLElement) return { root: instance };
	throw new Error("window-frame view-mount: factory did not return View or HTMLElement");
}
function mountViewIntoHost(host, root) {
	host.replaceChildren(root);
	return () => {
		root.remove();
		host.replaceChildren();
	};
}
/** Lazy-load e.g. `import('views/home-view')`, attach into frame body. */
async function mountViewModule(importer, host, options) {
	const mod = await importer();
	if (typeof requestAnimationFrame === "function") await new Promise((resolve) => requestAnimationFrame(() => resolve()));
	const { root, view } = instantiateViewForMount(mod, options);
	root.classList.add("wf-mounted-view");
	const disposeHost = mountViewIntoHost(host, root);
	runViewLifecycle(view, "onMount");
	runViewLifecycle(view, "onShow");
	return () => {
		runViewLifecycle(view, "onHide");
		runViewLifecycle(view, "onUnmount");
		disposeHost();
	};
}
//#endregion
//#region src/frontend/shells/environment/window/window/mount-ui-window.ts
/**
* WHY: Replaces `.wf-frame` / {@link mountWindowFrame} for environment-shell floating views.
* Keeps {@link WindowChromeModel} as the reactive bounds source; chrome is `ui-window`.
*
* INVARIANT: With `managed`, Windows2 only emits intents (`window-maximize` / `minimize` /
* `restore` / `close` / `window-native` / `window-exit-native`). This module applies attrs +
* geometry and notifies the tasking layer.
*/
function isNativeCapacitorShell() {
	try {
		if (document.documentElement.dataset.cwspNativeShell === "capacitor") return true;
		const c = globalThis.Capacitor;
		return typeof c?.isNativePlatform === "function" && Boolean(c.isNativePlatform());
	} catch {
		return false;
	}
}
var zBoostCache = null;
/** When mounted under `.env-shell-root`, add this boost so windows stack above the home layer. */
function readEnvWindowZBoost(host) {
	const shell = host?.closest?.(".env-shell-root") ?? host?.closest?.("env-shell-container");
	if (!(shell instanceof HTMLElement)) return 0;
	if (zBoostCache?.shell === shell) return zBoostCache.n;
	const raw = shell.style.getPropertyValue("--env-window-z-boost").trim() || getComputedStyle(shell).getPropertyValue("--env-window-z-boost").trim();
	const n = Number.parseInt(raw, 10);
	const val = Number.isFinite(n) ? n : 0;
	zBoostCache = {
		shell,
		n: val
	};
	return val;
}
function resolveEnvShellRoot(host) {
	const shell = host.closest?.(".env-shell-root") ?? host.closest?.("env-shell-container") ?? document.querySelector?.(".env-shell-root, env-shell-container");
	return shell instanceof HTMLElement ? shell : null;
}
/** Sync host `data-env-native-task` when any managed window is in nativeMode. */
function syncEnvNativeTaskAttr(host) {
	const root = resolveEnvShellRoot(host);
	if (!root) return;
	const anyNative = Boolean(root.querySelector?.("ui-window[native-mode], ui-window[data-native-active]"));
	root.toggleAttribute("data-env-native-task", anyNative);
}
/**
* Mounts a managed `<ui-window>` around `content`, wiring model bounds + chrome events.
*/
function mountUiWindow(host, model, content, onFocus, options = {}) {
	const { bounds, z, maximizedMobile, minimized, desktopMaximized, visible, isMobileMq } = model;
	if (!model.nativeMode) model.nativeMode = booleanRef(Boolean(options.startNative));
	const nativeMode = model.nativeMode;
	if (options.startNative) nativeMode.value = true;
	const win = document.createElement("ui-window");
	win.setAttribute("managed", "");
	win.className = "env-ui-window";
	win.setAttribute("part", "window");
	{
		const pinned = document.documentElement.getAttribute("data-theme") || document.documentElement.style.colorScheme || "";
		if (pinned === "light" || pinned === "dark") {
			win.dataset.theme = pinned;
			win.style.colorScheme = pinned;
		}
	}
	const titleEl = document.createElement("span");
	titleEl.slot = "title";
	titleEl.className = "env-ui-window__title";
	titleEl.textContent = model.title;
	content.slot = "content";
	content.classList.add("env-ui-window__body");
	win.append(titleEl, content);
	host.appendChild(win);
	const managedKey = String(options?.managedViewKey ?? "").trim();
	if (managedKey) {
		win.setAttribute("data-ui-window-view", managedKey);
		win.setAttribute("data-wf-managed-view", managedKey);
	}
	let savedDesktop = null;
	const notifyChrome = () => {
		options.onChromeChange?.();
		syncEnvNativeTaskAttr(host);
	};
	const clearDeskMaxInline = () => {
		win.style.right = "";
		win.style.bottom = "";
	};
	const applyDeskMaxGeometry = () => {
		win.style.left = "0";
		win.style.top = "0";
		win.style.right = "0";
		win.style.bottom = "var(--env-shell-chrome-stack-reserve, 2.5rem)";
		win.style.width = "auto";
		win.style.height = "auto";
		win.style.removeProperty("--ui-win-width");
		win.style.removeProperty("--ui-win-height");
	};
	const applyNativeGeometry = () => {
		win.style.left = "0";
		win.style.top = "0";
		win.style.right = "0";
		win.style.bottom = "0";
		win.style.width = "100%";
		win.style.height = "100%";
		win.style.removeProperty("--ui-win-width");
		win.style.removeProperty("--ui-win-height");
	};
	const applyChrome = () => {
		const mqMobile = Boolean(isMobileMq.matches);
		const zBoost = readEnvWindowZBoost(host);
		const zNow = (z.value ?? 10) + zBoost;
		win.style.zIndex = String(zNow);
		if (mqMobile) {
			if (desktopMaximized.value) desktopMaximized.value = false;
			if (!minimized.value && !nativeMode.value && !maximizedMobile.value) maximizedMobile.value = true;
		}
		const isNative = Boolean(nativeMode.value);
		const isMin = Boolean(minimized.value);
		const isDeskMax = !mqMobile && Boolean(desktopMaximized.value) && !isNative && !isMin;
		const isMobMax = mqMobile && !isNative && !isMin;
		const shellEl = host.closest?.(".env-shell-root") ?? host.closest?.("env-shell-container") ?? document.querySelector?.(".env-shell-root, env-shell-container");
		const statusOverlay = shellEl instanceof HTMLElement && shellEl.hasAttribute("data-status-overlay") || document.documentElement.hasAttribute("data-env-status-overlay");
		const standalone = shellEl instanceof HTMLElement && shellEl.hasAttribute("data-standalone") || document.documentElement.hasAttribute("data-env-standalone");
		const statusGap = statusOverlay && !isNative && !isMin && (isMobMax || isDeskMax);
		const nativeCapacitor = isNativeCapacitorShell();
		const noTitlebar = standalone && mqMobile && !isNative && !isMin || nativeCapacitor && mqMobile && !isNative && !isMin;
		win.toggleAttribute("native-mode", isNative && !isMin);
		win.toggleAttribute("minimized", isMin);
		win.toggleAttribute("data-mobile-max", isMobMax);
		win.toggleAttribute("data-desk-max", isDeskMax);
		win.toggleAttribute("data-status-gap", statusGap);
		win.toggleAttribute("data-no-titlebar", noTitlebar);
		win.toggleAttribute("maximized", !isMin && (isDeskMax || isMobMax || isNative));
		if (isMin) {
			win.setVisible(false);
			syncEnvNativeTaskAttr(host);
			return;
		}
		win.setVisible(Boolean(visible.value));
		if (!visible.value) {
			syncEnvNativeTaskAttr(host);
			return;
		}
		if (isNative) {
			applyNativeGeometry();
			syncEnvNativeTaskAttr(host);
			return;
		}
		if (isMobMax) {
			win.style.left = "0";
			win.style.top = "0";
			win.style.right = "0";
			win.style.bottom = "0";
			win.style.width = "100%";
			win.style.height = "auto";
			syncEnvNativeTaskAttr(host);
			return;
		}
		if (isDeskMax) {
			applyDeskMaxGeometry();
			syncEnvNativeTaskAttr(host);
			return;
		}
		clearDeskMaxInline();
		win.applyBounds({
			x: bounds.x.value,
			y: bounds.y.value,
			w: bounds.w.value,
			h: bounds.h.value,
			z: zNow
		});
		syncEnvNativeTaskAttr(host);
	};
	const onMq = () => {
		if (isMobileMq.matches) {
			if (!nativeMode.value) maximizedMobile.value = true;
			if (desktopMaximized.value) {
				desktopMaximized.value = false;
				if (savedDesktop) {
					bounds.x.value = savedDesktop.x;
					bounds.y.value = savedDesktop.y;
					bounds.w.value = savedDesktop.w;
					bounds.h.value = savedDesktop.h;
					savedDesktop = null;
				}
			}
		}
		applyChrome();
		notifyChrome();
	};
	if (isMobileMq.matches && !nativeMode.value && !minimized.value) maximizedMobile.value = true;
	const stopFx = effect(() => {
		applyChrome();
	}, [
		bounds.x,
		bounds.y,
		bounds.w,
		bounds.h,
		z,
		maximizedMobile,
		minimized,
		desktopMaximized,
		nativeMode,
		visible
	], { triggerImmediately: true });
	isMobileMq.addEventListener("change", onMq);
	const onChromeSurface = () => {
		applyChrome();
		notifyChrome();
	};
	const surfaceRoot = host.closest?.(".env-shell-root") ?? host.closest?.("env-shell-container") ?? document.documentElement;
	surfaceRoot?.addEventListener?.("env-chrome-surface", onChromeSurface);
	const onWinFocus = () => {
		if (minimized.value) {
			minimized.value = false;
			visible.value = true;
		}
		onFocus();
		const zBoost = readEnvWindowZBoost(host);
		const zNow = (z.value ?? 10) + zBoost;
		if (typeof win.bringToFront === "function") win.bringToFront(zNow);
		else {
			win.style.zIndex = String(zNow);
			win.toggleAttribute("data-focused", true);
		}
		notifyChrome();
	};
	const onWinMove = (ev) => {
		const detail = ev.detail;
		if (nativeMode.value || desktopMaximized.value || maximizedMobile.value || minimized.value) return;
		if (typeof detail?.x === "number") bounds.x.value = detail.x;
		if (typeof detail?.y === "number") bounds.y.value = detail.y;
	};
	const onWinResize = (ev) => {
		const detail = ev.detail;
		if (nativeMode.value || desktopMaximized.value || maximizedMobile.value || minimized.value) return;
		if (typeof detail?.w === "number") bounds.w.value = detail.w;
		if (typeof detail?.h === "number") bounds.h.value = detail.h;
	};
	const onWinMinimize = () => {
		if (nativeMode.value) nativeMode.value = false;
		if (desktopMaximized.value) {
			desktopMaximized.value = false;
			if (savedDesktop) {
				bounds.x.value = savedDesktop.x;
				bounds.y.value = savedDesktop.y;
				bounds.w.value = savedDesktop.w;
				bounds.h.value = savedDesktop.h;
				savedDesktop = null;
			}
		}
		minimized.value = true;
		applyChrome();
		notifyChrome();
	};
	const onWinMaximize = () => {
		if (nativeMode.value) {
			onWinExitNative();
			return;
		}
		if (isMobileMq.matches) {
			minimized.value = false;
			maximizedMobile.value = true;
			applyChrome();
			notifyChrome();
			return;
		}
		if (minimized.value) minimized.value = false;
		if (desktopMaximized.value) {
			onWinRestore();
			return;
		}
		savedDesktop = {
			x: bounds.x.value,
			y: bounds.y.value,
			w: bounds.w.value,
			h: bounds.h.value
		};
		desktopMaximized.value = true;
		applyChrome();
		notifyChrome();
	};
	const onWinNative = () => {
		if (minimized.value) {
			minimized.value = false;
			visible.value = true;
		}
		if (!nativeMode.value && !desktopMaximized.value && !maximizedMobile.value) savedDesktop = {
			x: bounds.x.value,
			y: bounds.y.value,
			w: bounds.w.value,
			h: bounds.h.value
		};
		desktopMaximized.value = false;
		maximizedMobile.value = false;
		nativeMode.value = true;
		applyChrome();
		notifyChrome();
	};
	const onWinExitNative = () => {
		if (!nativeMode.value) return;
		nativeMode.value = false;
		if (savedDesktop) {
			bounds.x.value = savedDesktop.x;
			bounds.y.value = savedDesktop.y;
			bounds.w.value = savedDesktop.w;
			bounds.h.value = savedDesktop.h;
			savedDesktop = null;
		}
		if (isMobileMq.matches) maximizedMobile.value = true;
		applyChrome();
		notifyChrome();
	};
	const onWinRestore = () => {
		if (nativeMode.value) {
			onWinExitNative();
			return;
		}
		if (minimized.value) {
			minimized.value = false;
			visible.value = true;
		}
		if (isMobileMq.matches) {
			if (maximizedMobile.value) maximizedMobile.value = false;
		} else if (desktopMaximized.value) {
			desktopMaximized.value = false;
			if (savedDesktop) {
				bounds.x.value = savedDesktop.x;
				bounds.y.value = savedDesktop.y;
				bounds.w.value = savedDesktop.w;
				bounds.h.value = savedDesktop.h;
				savedDesktop = null;
			}
		}
		applyChrome();
		notifyChrome();
	};
	let closing = false;
	let disposed = false;
	const onWinClose = (ev) => {
		ev.preventDefault();
		if (closing || disposed) return;
		closing = true;
		try {
			if (nativeMode.value) nativeMode.value = false;
			visible.value = false;
			options.onClose?.();
		} catch (err) {
			console.error("[mount-ui-window] onClose failed", err);
		} finally {
			if (!disposed) {
				disposed = true;
				stopFx?.();
				isMobileMq.removeEventListener("change", onMq);
				surfaceRoot?.removeEventListener?.("env-chrome-surface", onChromeSurface);
				try {
					if (win.isConnected) win.remove();
				} catch {}
			}
			syncEnvNativeTaskAttr(host);
		}
	};
	/**
	* WHY: Dual-path chrome. Windows2 owns primary handlers; shell also stamps shadow
	* button properties and keeps a host bubble fallback so desk max/min/close cannot die
	* when lure replaces shadow nodes or click synthesis fails.
	*/
	let lastShellChromeAt = 0;
	const consumeShellChrome = () => {
		const now = typeof performance !== "undefined" ? performance.now() : Date.now();
		if (now - lastShellChromeAt < 280) return false;
		lastShellChromeAt = now;
		return true;
	};
	const runShellChrome = (which) => {
		if (closing || disposed) return;
		if (!consumeShellChrome()) return;
		if (which === "close") {
			onWinClose(new Event("window-close", { cancelable: true }));
			return;
		}
		if (which === "exit-native") {
			onWinExitNative();
			return;
		}
		if (which === "maximize") {
			if (nativeMode.value || desktopMaximized.value || maximizedMobile.value) onWinRestore();
			else onWinMaximize();
			return;
		}
		if (minimized.value) onWinRestore();
		else onWinMinimize();
	};
	const hitTitleControl = (ev) => {
		const path = typeof ev.composedPath === "function" ? ev.composedPath() : [];
		for (const n of path) {
			if (!(n instanceof Element)) continue;
			const action = n.getAttribute?.("data-ui-win-action");
			if (action === "close" || action === "exit-native" || action === "maximize" || action === "minimize") return action;
			if (n.matches?.(".title-close")) return "close";
			if (n.matches?.(".title-exit-native")) return "exit-native";
			if (n.matches?.(".title-maximize")) return "maximize";
			if (n.matches?.(".title-minimize")) return "minimize";
		}
		return null;
	};
	const onHostControlBubble = (ev) => {
		if (closing || disposed) return;
		if (ev.defaultPrevented) return;
		const which = hitTitleControl(ev);
		if (!which) return;
		ev.preventDefault();
		ev.stopPropagation();
		runShellChrome(which);
	};
	/** Nuclear path: bind live shadow buttons from the shell (open shadow). */
	let chromeMo = null;
	const stampShellButtonHandlers = () => {
		const root = win.shadowRoot;
		if (!root || closing || disposed) return;
		const nodes = root.querySelectorAll("[data-ui-win-action], .title-minimize, .title-maximize, .title-close, .title-exit-native");
		for (const btn of nodes) {
			let which = btn.getAttribute("data-ui-win-action");
			if (!which) {
				if (btn.classList.contains("title-close")) which = "close";
				else if (btn.classList.contains("title-exit-native")) which = "exit-native";
				else if (btn.classList.contains("title-maximize")) which = "maximize";
				else if (btn.classList.contains("title-minimize")) which = "minimize";
			}
			if (!which) continue;
			btn.setAttribute("data-ui-win-action", which);
			const action = which;
			const run = (ev) => {
				if (ev.defaultPrevented) return;
				ev.preventDefault();
				ev.stopPropagation();
				runShellChrome(action);
			};
			btn.onclick = run;
			btn.onpointerup = (ev) => {
				if (ev.button !== 0) return;
				run(ev);
			};
		}
	};
	stampShellButtonHandlers();
	queueMicrotask(stampShellButtonHandlers);
	requestAnimationFrame(stampShellButtonHandlers);
	if (typeof MutationObserver !== "undefined") {
		chromeMo = new MutationObserver(() => stampShellButtonHandlers());
		const observeRoot = () => {
			if (win.shadowRoot) chromeMo?.observe(win.shadowRoot, {
				childList: true,
				subtree: true
			});
			else requestAnimationFrame(observeRoot);
		};
		observeRoot();
	}
	win.addEventListener("window-focus", onWinFocus);
	win.addEventListener("window-move", onWinMove);
	win.addEventListener("window-resize", onWinResize);
	win.addEventListener("window-minimize", onWinMinimize);
	win.addEventListener("window-maximize", onWinMaximize);
	win.addEventListener("window-restore", onWinRestore);
	win.addEventListener("window-native", onWinNative);
	win.addEventListener("window-exit-native", onWinExitNative);
	win.addEventListener("window-close", onWinClose);
	win.addEventListener("click", onHostControlBubble);
	win.addEventListener("pointerup", onHostControlBubble);
	return () => {
		if (disposed) return;
		disposed = true;
		closing = true;
		stopFx?.();
		chromeMo?.disconnect();
		chromeMo = null;
		isMobileMq.removeEventListener("change", onMq);
		surfaceRoot?.removeEventListener?.("env-chrome-surface", onChromeSurface);
		win.removeEventListener("window-focus", onWinFocus);
		win.removeEventListener("window-move", onWinMove);
		win.removeEventListener("window-resize", onWinResize);
		win.removeEventListener("window-minimize", onWinMinimize);
		win.removeEventListener("window-maximize", onWinMaximize);
		win.removeEventListener("window-restore", onWinRestore);
		win.removeEventListener("window-native", onWinNative);
		win.removeEventListener("window-exit-native", onWinExitNative);
		win.removeEventListener("window-close", onWinClose);
		win.removeEventListener("click", onHostControlBubble);
		win.removeEventListener("pointerup", onHostControlBubble);
		try {
			if (nativeMode.value) nativeMode.value = false;
			if (win.isConnected) win.remove();
		} catch {}
		syncEnvNativeTaskAttr(host);
	};
}
//#endregion
//#region src/frontend/shells/environment/workspace-window-layer.ts
/** Direct-child managed window tagged via {@link mountUiWindow}'s `managedViewKey`. */
function findKeyedFrame(workspace, key) {
	const selKey = typeof CSS !== "undefined" && typeof CSS.escape === "function" ? CSS.escape(key) : key.replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
	const el = workspace.querySelector(`:scope > ui-window[data-ui-window-view="${selKey}"]`) || workspace.querySelector(`:scope > ui-window[data-wf-managed-view="${selKey}"]`) || workspace.querySelector(`:scope > section.wf-frame[data-wf-managed-view="${selKey}"]`);
	return el instanceof HTMLElement ? el : null;
}
var VIEW_ICONS = {
	home: "house",
	viewer: "article",
	markdown: "article",
	browser: "globe",
	web: "globe",
	explorer: "books",
	settings: "gear-six",
	apps: "squares-four",
	workcenter: "briefcase",
	history: "clock-counter-clockwise",
	editor: "pencil-simple-line",
	network: "wifi-high",
	task: "list-checks",
	event: "calendar",
	bonus: "gift",
	person: "address-book"
};
var VIEW_TITLES = {
	home: "Home",
	viewer: "Markdown",
	browser: "Browser",
	web: "Browser",
	explorer: "Explorer",
	settings: "Settings",
	apps: "Apps",
	workcenter: "Work Center",
	history: "History",
	editor: "Editor",
	network: "Network",
	task: "Plan",
	event: "Events",
	bonus: "Bonuses",
	person: "Contacts"
};
/** Stable managed-window key so each URL can have its own floating frame. */
function browserWindowKey(url) {
	const href = String(url || "").trim();
	if (!href) return "browser";
	let h = 2166136261;
	for (let i = 0; i < href.length; i++) {
		h ^= href.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return `browser:${(h >>> 0).toString(36)}`;
}
function browserTitleFromUrl(url) {
	try {
		return new URL(url).hostname.replace(/^www\./i, "") || "Browser";
	} catch {
		return "Browser";
	}
}
function normalizeBrowserViewId(raw) {
	const id = String(raw || "").trim().toLowerCase();
	if (id === "browser" || id === "web" || id === "iframe" || id === "web-view" || id === "webview") return "browser";
	return id;
}
function iconForManagedKey(key) {
	const id = String(key || "").trim().toLowerCase();
	if (VIEW_ICONS[id]) return VIEW_ICONS[id];
	if (id.startsWith("browser:")) return VIEW_ICONS.browser;
	return "app-window";
}
/**
* Package-local defaults intentionally empty except built-in browser iframe view.
* WHY: relative `../../../views/*-view` imports break when this file is consumed via
* CWSP-shell's symlink (`src/frontend/shells/environment` → modules). Hosts must pass
* {@link WorkspaceWindowLayerOptions.viewLoaders} (CWSP adapter / demo boot).
*/
function defaultViewLoaderForId(viewId) {
	if (normalizeBrowserViewId(viewId) === "browser") return () => __vitePreload(() => import("./environment-window-views-browser-view.js").then((n) => n.t), __vite__mapDeps([0,1]), import.meta.url);
	return null;
}
function readOpenViewExternalUrl(opts) {
	if (!opts || typeof opts !== "object") return "";
	const o = opts;
	const nested = o.params && typeof o.params === "object" && !Array.isArray(o.params) ? o.params : {};
	return String(nested.url || nested.href || nested.src || o.url || o.href || o.src || "").trim();
}
function titleForView(viewId, overrides) {
	const id = normalizeMarkdownViewWindowId(viewId) || String(viewId || "").trim().toLowerCase();
	const base = id.startsWith("browser:") ? "browser" : id;
	if (overrides?.[id]) return overrides[id];
	if (overrides?.[base]) return overrides[base];
	if (VIEW_TITLES[base]) return VIEW_TITLES[base];
	const raw = String(viewId || "").trim();
	return raw ? raw.charAt(0).toUpperCase() + raw.slice(1) : "View";
}
function placeholderBody(viewId, overrides) {
	const wrap = document.createElement("div");
	wrap.className = "wf-view-placeholder";
	wrap.setAttribute("part", "placeholder");
	wrap.innerHTML = `<p class="wf-view-placeholder__title">${titleForView(viewId, overrides)}</p>
<p class="wf-view-placeholder__hint">No window module is registered for this shortcut in environment-shell yet.</p>`;
	return wrap;
}
/**
* Shell helpers: open registered views in `ui-window` overlays, keep `home` as a workspace underlay.
*/
function createWorkspaceWindowLayer(workspace, options = {}) {
	const topZ = numberRef(120);
	const managed = /* @__PURE__ */ new Map();
	let disposed = false;
	let focusedKey = null;
	readEnvWindowZBoost(workspace);
	let taskingRaf = 0;
	const emitTasking = () => {
		if (disposed) return;
		if (taskingRaf) return;
		taskingRaf = requestAnimationFrame(() => {
			taskingRaf = 0;
			if (!disposed) options.onTaskingChange?.(listWindowTasks());
		});
	};
	const listWindowTasks = () => {
		const out = [];
		for (const m of managed.values()) {
			if (!findKeyedFrame(workspace, m.key)) continue;
			out.push({
				id: m.key,
				title: m.model.title || titleForView(m.key, options.viewTitles),
				icon: iconForManagedKey(m.key),
				focused: focusedKey === m.key,
				minimized: Boolean(m.model.minimized.value),
				visible: Boolean(m.model.visible.value)
			});
		}
		return out;
	};
	const clearFocusedAttrs = () => {
		for (const m of managed.values()) {
			const frame = findKeyedFrame(workspace, m.key);
			if (!frame) continue;
			frame.toggleAttribute("data-focused", false);
			const clear = frame.clearFocused;
			if (typeof clear === "function") clear.call(frame);
		}
	};
	const exitNativeExcept = (keepKey) => {
		for (const [k, m] of managed) {
			if (keepKey && k === keepKey) continue;
			if (m.model.nativeMode?.value) m.model.nativeMode.value = false;
		}
	};
	const elevateModel = (model, key) => {
		if (focusedKey === key && !model.minimized.value) {
			const frame = findKeyedFrame(workspace, key);
			if (frame && frame === workspace.lastElementChild) return;
		}
		topZ.value += 1;
		model.z.value = topZ.value;
		model.minimized.value = false;
		model.visible.value = true;
		focusedKey = key;
		if (model.nativeMode?.value) exitNativeExcept(key);
		const frame = findKeyedFrame(workspace, key);
		if (frame) {
			const zBoost = readEnvWindowZBoost(workspace);
			const zNow = (model.z.value ?? 10) + zBoost;
			clearFocusedAttrs();
			frame.style.zIndex = String(zNow);
			frame.toggleAttribute("data-focused", true);
			const bring = frame.bringToFront;
			if (typeof bring === "function") bring.call(frame, zNow);
			if (frame.parentElement === workspace && frame !== workspace.lastElementChild) workspace.appendChild(frame);
		}
		emitTasking();
	};
	const shellContext = {};
	const envOverlayMount = options.overlayMountHost ? getOrCreateEnvironmentOverlayMount(options.overlayMountHost) : null;
	shellContext.resolveOverlayMountPoint = (anchor) => {
		if (envOverlayMount) return envOverlayMount;
		if (options.environmentShellHost) {
			const fromShell = resolveShellOverlaysMount(options.environmentShellHost);
			if (fromShell) return fromShell;
		}
		return resolveOverlayMountPoint(anchor ?? null);
	};
	const viewLoaderForId = (viewId) => {
		const id = normalizeBrowserViewId(normalizeMarkdownViewWindowId(viewId) || String(viewId || "").trim().toLowerCase());
		const fromHost = options.viewLoaders?.[id];
		if (fromHost) return fromHost;
		return defaultViewLoaderForId(id);
	};
	const openReaderWindow = () => {
		const rw = options.readerWindow;
		if (!rw?.content) return;
		const key = MARKDOWN_VIEW_MANAGED_WINDOW_KEY;
		const ex = managed.get(key);
		if (ex && findKeyedFrame(workspace, key)) {
			elevateModel(ex.model, key);
			return;
		}
		if (ex && !findKeyedFrame(workspace, key)) {
			managed.delete(key);
			try {
				ex.disposeFrame();
			} catch {}
		}
		const seed = rw.seed || {};
		const model = createChromeModel(rw.title || titleForView(key, options.viewTitles), {
			x: seed.x ?? 96,
			y: seed.y ?? 96,
			w: seed.w ?? 420,
			h: seed.h ?? 340,
			z: seed.z ?? topZ.value + 1
		});
		topZ.value = model.z.value;
		let disposeFrame = () => {};
		disposeFrame = mountUiWindow(workspace, model, rw.content, () => elevateModel(model, key), {
			managedViewKey: key,
			onChromeChange: emitTasking,
			onClose: () => {
				const m = managed.get(key);
				if (!m) return;
				managed.delete(key);
				if (focusedKey === key) focusedKey = null;
				try {
					m.disposeFrame();
				} catch {}
				emitTasking();
			}
		});
		managed.set(key, {
			key,
			model,
			disposeFrame
		});
		elevateModel(model, key);
	};
	const openViewWindow = (viewId, opts) => {
		if (disposed) return;
		let id = normalizeMarkdownViewWindowId(String(viewId || "").trim());
		id = normalizeBrowserViewId(id);
		if (!id || id === "home") return;
		if (id === "airpad") return;
		try {
			if (document.documentElement.dataset.cwspSku === "launcher") {
				tryLaunchSiblingView(id).then((launched) => {
					if (!launched) openViewWindowContinue(id, opts);
				});
				return;
			}
		} catch {}
		openViewWindowContinue(id, opts);
	};
	const openViewWindowContinue = (id, opts) => {
		if (disposed) return;
		const params = { ...opts?.params || {} };
		const externalUrl = readOpenViewExternalUrl(opts);
		if (externalUrl) {
			params.url = externalUrl;
			params.href = externalUrl;
		}
		const managedKey = id === "browser" ? String(params.windowKey || "").trim() || browserWindowKey(externalUrl) : id;
		if (isMarkdownViewManagedWindowKey(id) && options.readerWindow?.content) {
			openReaderWindow();
			return;
		}
		const wantNative = new Set((options.startNativeViewIds || []).map((v) => normalizeMarkdownViewWindowId(String(v || "")))).has(id) || String(opts?.native || "") === "1" || String(params.native || "") === "1";
		const existing = managed.get(managedKey);
		if (existing && findKeyedFrame(workspace, managedKey)) {
			elevateModel(existing.model, managedKey);
			if (wantNative && existing.model.nativeMode) {
				existing.model.nativeMode.value = true;
				existing.model.minimized.value = false;
				existing.model.visible.value = true;
				exitNativeExcept(managedKey);
			}
			if (id === "browser" && externalUrl) try {
				const frame = findKeyedFrame(workspace, managedKey);
				const iframe = frame?.querySelector?.("iframe.wf-browser__frame");
				const input = frame?.querySelector?.("input.wf-browser__url");
				if (iframe && iframe.src !== externalUrl) iframe.src = externalUrl;
				if (input) input.value = externalUrl;
				if (externalUrl) try {
					existing.model.title = browserTitleFromUrl(externalUrl);
				} catch {}
			} catch {}
			return;
		}
		if (existing && !findKeyedFrame(workspace, managedKey)) {
			existing.disposeView?.();
			managed.delete(managedKey);
			try {
				existing.disposeFrame();
			} catch {}
		}
		const loader = viewLoaderForId(id);
		const body = document.createElement("div");
		body.className = "wf-view-host env-ui-window__view-host";
		body.setAttribute("part", "view-host");
		{
			const loading = document.createElement("p");
			loading.className = "wf-view-placeholder__hint";
			loading.style.cssText = "margin:1rem;font:400 .9rem/1.4 system-ui,sans-serif;opacity:.8";
			loading.textContent = `Loading ${titleForView(id, options.viewTitles)}…`;
			body.append(loading);
		}
		const offset = managed.size * 24;
		const model = createChromeModel(id === "browser" && externalUrl ? browserTitleFromUrl(externalUrl) : titleForView(id, options.viewTitles), {
			x: 72 + offset,
			y: 72 + offset,
			w: id === "browser" ? 720 : 640,
			h: id === "browser" ? 520 : 480,
			z: topZ.value + 1
		});
		topZ.value = model.z.value;
		let disposeFrame = () => {};
		disposeFrame = mountUiWindow(workspace, model, body, () => elevateModel(model, managedKey), {
			managedViewKey: managedKey,
			startNative: wantNative,
			onChromeChange: emitTasking,
			onClose: () => {
				const m = managed.get(managedKey);
				if (!m) return;
				managed.delete(managedKey);
				if (focusedKey === managedKey) focusedKey = null;
				try {
					m.disposeView?.();
				} catch {}
				try {
					m.disposeFrame();
				} catch {}
				emitTasking();
			}
		});
		if (wantNative) {
			model.nativeMode.value = true;
			exitNativeExcept(managedKey);
		}
		const rec = {
			key: managedKey,
			model,
			disposeFrame,
			disposeView: void 0
		};
		managed.set(managedKey, rec);
		elevateModel(model, managedKey);
		const mountOpts = {
			...opts || {},
			shellContext
		};
		if (id === "browser" && externalUrl) mountOpts.params = {
			...mountOpts.params || {},
			url: externalUrl,
			href: externalUrl
		};
		else if (externalUrl && !(mountOpts.params && (mountOpts.params.url || mountOpts.params.href))) mountOpts.params = {
			...mountOpts.params || {},
			url: externalUrl,
			href: externalUrl
		};
		if (!loader) {
			body.replaceChildren(placeholderBody(id, options.viewTitles));
			return;
		}
		mountViewModule(loader, body, mountOpts).then((unmountView) => {
			if (disposed) {
				unmountView();
				return;
			}
			const cur = managed.get(managedKey);
			if (cur) cur.disposeView = unmountView;
			if (wantNative || model.nativeMode?.value) {
				model.nativeMode.value = true;
				model.minimized.value = false;
				model.visible.value = true;
				exitNativeExcept(managedKey);
				elevateModel(model, managedKey);
			}
		}, (err) => {
			console.error(`[workspace-window-layer] mountViewModule failed for view "${id}"`, err);
			body.replaceChildren(placeholderBody(id, options.viewTitles));
		});
	};
	shellContext.navigate = (viewId, opts) => {
		openViewWindow(String(viewId), opts);
	};
	shellContext.openView = (viewId, opts) => {
		openViewWindow(String(viewId), opts);
	};
	const dispose = () => {
		if (disposed) return;
		disposed = true;
		if (taskingRaf) {
			cancelAnimationFrame(taskingRaf);
			taskingRaf = 0;
		}
		for (const m of managed.values()) {
			m.disposeView?.();
			m.disposeFrame();
		}
		managed.clear();
		focusedKey = null;
		emitTasking();
	};
	const focusWindow = (viewId) => {
		const id = normalizeMarkdownViewWindowId(String(viewId || ""));
		const m = managed.get(id);
		if (!m || !findKeyedFrame(workspace, id)) return false;
		elevateModel(m.model, id);
		return true;
	};
	const minimizeWindow = (viewId) => {
		const id = normalizeMarkdownViewWindowId(String(viewId || ""));
		const m = managed.get(id);
		if (!m || !findKeyedFrame(workspace, id)) return false;
		if (m.model.nativeMode?.value) m.model.nativeMode.value = false;
		if (m.model.desktopMaximized?.value) m.model.desktopMaximized.value = false;
		m.model.visible.value = true;
		m.model.minimized.value = true;
		if (focusedKey === id) {
			focusedKey = null;
			clearFocusedAttrs();
		}
		emitTasking();
		return true;
	};
	/** Collapse all floating views so the launcher shows — apps stay in the switcher. */
	const minimizeAllWindows = () => {
		if (disposed) return;
		exitNativeExcept(null);
		focusedKey = null;
		clearFocusedAttrs();
		for (const m of managed.values()) {
			if (!findKeyedFrame(workspace, m.key)) continue;
			if (m.model.desktopMaximized?.value) m.model.desktopMaximized.value = false;
			m.model.visible.value = true;
			m.model.minimized.value = true;
		}
		emitTasking();
	};
	const closeWindow = (viewId) => {
		const id = normalizeMarkdownViewWindowId(String(viewId || ""));
		const m = managed.get(id);
		if (!m) return false;
		managed.delete(id);
		if (focusedKey === id) focusedKey = null;
		try {
			m.disposeView?.();
		} catch {}
		try {
			m.disposeFrame();
		} catch {}
		emitTasking();
		return true;
	};
	const blurWindows = () => {
		exitNativeExcept(null);
		focusedKey = null;
		clearFocusedAttrs();
		emitTasking();
	};
	/**
	* WHY: Mobile Home replaces title Close — dispose all floating views so the
	* launcher is visible again under always-maximized windows.
	*/
	const closeAllWindows = () => {
		if (disposed) return;
		exitNativeExcept(null);
		for (const m of [...managed.values()]) {
			try {
				m.disposeView?.();
			} catch {}
			try {
				m.disposeFrame();
			} catch {}
		}
		managed.clear();
		focusedKey = null;
		emitTasking();
	};
	const enterNative = (viewId) => {
		const id = normalizeMarkdownViewWindowId(String(viewId || ""));
		const m = managed.get(id);
		if (!m || !findKeyedFrame(workspace, id)) return false;
		exitNativeExcept(id);
		m.model.nativeMode.value = true;
		m.model.minimized.value = false;
		m.model.visible.value = true;
		elevateModel(m.model, id);
		return true;
	};
	const exitNative = (viewId) => {
		if (viewId) {
			const id = normalizeMarkdownViewWindowId(String(viewId || ""));
			const m = managed.get(id);
			if (m?.model.nativeMode) m.model.nativeMode.value = false;
			emitTasking();
			return;
		}
		exitNativeExcept(null);
		emitTasking();
	};
	return {
		shellContext,
		dispose,
		focusWindow,
		minimizeWindow,
		minimizeAllWindows,
		closeWindow,
		blurWindows,
		closeAllWindows,
		enterNative,
		exitNative,
		listWindowTasks,
		getFocusedKey: () => focusedKey
	};
}
//#endregion
//#region src/frontend/shells/environment/index.ts
/**
* environment-shell — public entry for host apps: status bar, taskbar, wallpaper helpers.
*
* Import this module (or `environment-shell`) to register FL-UI `ui-statusbar` / `ui-taskbar`
* via the re-exported component modules, then call {@link mountEnvironmentChrome} or mount pieces a la carte.
*/
/** Default `localStorage` key for {@link initializeAppCanvasLayer} wallpaper URL (`fest/image` Canvas-2). */
var ENV_SHELL_WALLPAPER_STORAGE_KEY = "rs-wallpaper-image";
/**
* If no wallpaper URL is stored yet, set `defaultUrl` (idempotent, swallows storage errors).
* Call before `initializeAppCanvasLayer` when embedding the stock/demo background.
*/
function seedEnvironmentWallpaperIfUnset(defaultUrl, storageKey = ENV_SHELL_WALLPAPER_STORAGE_KEY) {
	try {
		if (!localStorage.getItem(storageKey)) localStorage.setItem(storageKey, defaultUrl);
	} catch {}
}
/**
* One-call chrome mount: shared {@link ShellDeviceStatus}, `ui-statusbar`, optional `ui-taskbar` + tasking tray.
* Appends a `.env-shell-chrome` node to `host` (import `environment-shell/scss/main.scss` or the partials you need).
*/
function mountEnvironmentChrome(host, options) {
	const device = attachShellDeviceStatus();
	const nativeCapacitor = isNativeCapacitorHost();
	if (nativeCapacitor) installCapacitorNativeSafeAreaInsets();
	let statusBar;
	let disposeStatusBar;
	if (nativeCapacitor) {
		statusBar = document.createElement("ui-statusbar");
		statusBar.className = "env-ui-statusbar";
		statusBar.hidden = true;
		disposeStatusBar = () => {
			statusBar.remove();
		};
	} else {
		const mounted = mountEnvironmentStatusBar(options.shell, options.introHtml, device);
		statusBar = mounted.element;
		disposeStatusBar = mounted.dispose;
	}
	const root = document.createElement("div");
	root.className = "env-shell-chrome wf-chrome-no-select";
	let taskbar;
	if (options.taskbar) {
		try {
			const bookmarksApi = createChromeBookmarksMenuApi();
			if (bookmarksApi) setBookmarksMenuApi(bookmarksApi);
		} catch {}
		taskbar = mountEnvironmentTaskBar({
			...options.taskbar,
			device
		});
		root.append(taskbar.element, statusBar);
	} else root.append(statusBar);
	const shellRoot = (host.classList?.contains("env-shell-root") ? host : null) || host.closest?.(".env-shell-root") || host.closest?.("env-shell-container") || host;
	setChromeFlyoutShellHost(shellRoot);
	globalThis.__ENV_OVERLAY_MOUNT__ = getOrCreateEnvironmentOverlayMount;
	getOrCreateEnvironmentOverlayMount(shellRoot);
	restoreQuickFilters();
	const desktopMq = typeof matchMedia === "function" ? matchMedia("(min-width: 641px) and (not ((pointer: coarse) or (hover: none)))") : null;
	const displayMqs = typeof matchMedia === "function" ? [
		"(display-mode: standalone)",
		"(display-mode: fullscreen)",
		"(display-mode: minimal-ui)",
		"(display-mode: browser)",
		"(display-mode: window-controls-overlay)"
	].map((q) => matchMedia(q)) : [];
	const syncChromeSurface = () => {
		const desktop = desktopMq ? desktopMq.matches : true;
		const displayMode = matchShellDisplayMode();
		const standalone = isShellStandaloneDisplay();
		const statusOverlay = shouldShowStatusOverlay({
			desktop,
			standalone,
			displayMode
		});
		root.toggleAttribute("data-desktop", desktop);
		root.toggleAttribute("data-standalone", standalone);
		root.toggleAttribute("data-status-overlay", statusOverlay);
		root.dataset.chromeLayout = desktop ? "desktop" : "mobile";
		root.dataset.displayMode = displayMode;
		shellRoot.toggleAttribute("data-standalone", standalone);
		shellRoot.toggleAttribute("data-status-overlay", statusOverlay);
		shellRoot.dataset.displayMode = displayMode;
		shellRoot.style.setProperty("--env-status-inset-top", statusOverlay ? "max(2rem, env(safe-area-inset-top, 0px))" : "0px");
		document.documentElement.toggleAttribute("data-env-status-overlay", statusOverlay);
		document.documentElement.toggleAttribute("data-env-standalone", standalone);
		try {
			shellRoot.dispatchEvent(new CustomEvent("env-chrome-surface", {
				bubbles: true,
				detail: {
					statusOverlay,
					standalone,
					displayMode,
					desktop
				}
			}));
		} catch {}
	};
	syncChromeSurface();
	desktopMq?.addEventListener?.("change", syncChromeSurface);
	for (const mq of displayMqs) mq.addEventListener?.("change", syncChromeSurface);
	document.addEventListener("fullscreenchange", syncChromeSurface);
	document.addEventListener("webkitfullscreenchange", syncChromeSurface);
	const disposeContrast = nativeCapacitor ? () => {} : attachStatusBarContrast(shellRoot);
	if (isEnvironmentShellContainerHost(host)) root.slot = SHELL_SLOT.overlay;
	host.appendChild(root);
	return {
		root,
		device,
		statusBar,
		taskbar,
		disposeDevice: () => {
			desktopMq?.removeEventListener?.("change", syncChromeSurface);
			for (const mq of displayMqs) mq.removeEventListener?.("change", syncChromeSurface);
			document.removeEventListener("fullscreenchange", syncChromeSurface);
			document.removeEventListener("webkitfullscreenchange", syncChromeSurface);
			disposeContrast();
			disposeStatusBar();
			device.dispose();
			setChromeFlyoutShellHost(null);
		}
	};
}
//#endregion
export { mountViewModule as i, seedEnvironmentWallpaperIfUnset as n, createWorkspaceWindowLayer as r, mountEnvironmentChrome as t };
