const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./src8.js","../com/app.js","./rolldown-runtime.js","../shells/boot-index.js","../fest/core.js","../shells/boot-history-base.js","../com/service.js","../fest/veela.js","./frontend-debug-capture.js","./src9.js","../views/viewer.js","./capacitor-permissions.js","./capacitor-settings-permissions.js","./CustomInstructions.js","./utils.js","./templates.js","./core.js","./admin-doors.js","./src.js","./src10.js","./src6.js","./transfer-history-runtime.js","./src11.js","./WorkCenter.js","./log-sanitizer.js","./sku-ingress.js","./entities.js","../vendor/@toon-format_toon.js","./unified.js","./RuntimeSettings.js","./ShareTargetGateway.js","./WorkCenterState.js","./src5.js","./src7.js","./launcher-state.js"])))=>i.map(i=>d[i]);
import { B as refreshAppWallpaperPaint, Hn as hasActiveCloseable, Or as __vitePreload, U as restoreWallpaperThemeCache, Vn as closeHighestPriority, X as ensureStyleSheet, br as preloadStyle, fr as ref, yr as loadInlineStyle, z as initializeAppCanvasLayer } from "../com/app.js";
import { ht as isEnabledView } from "../shells/boot-index.js";
import { n as initBootShellWindowActivity } from "../shells/preference.js";
import { t as ShellBase } from "./shells.js";
import { a as SHELL_SLOT, n as createEnvironmentShellContainer, r as defineEnvironmentShellContainer } from "../shells/environment-environment-overlay.js";
import { i as mountViewModule, n as seedEnvironmentWallpaperIfUnset, r as createWorkspaceWindowLayer, t as mountEnvironmentChrome } from "../shells/environment-index.js";
import { t as main_default } from "../shells/environment-scss-main.scss_inline.js";
//#region src/shared/routing/native/launcher-home-lifecycle.ts
var HOOKS_BOOT = "__CWSP_LAUNCHER_HOME_HOOKS_V1__";
var hookSlot = () => {
	const g = globalThis;
	return {
		get: () => HOOKS_BOOT in g ? g[HOOKS_BOOT] : null,
		set: (v) => {
			g[HOOKS_BOOT] = v;
		}
	};
};
function registerLauncherHomeLifecycleHooks(hooks) {
	hookSlot().set(hooks);
}
//#endregion
//#region ../../modules/shells/window-frame/public/demo/wf-demo.css?inline
var wf_demo_default = "*,:after,:before{box-sizing:border-box}@function --u2-color-mod(--base-color <color>, --index <number> : 550) returns <color>{--i:clamp(0,var(--index),1000);--pivot:550;--white-distance:clamp(0,calc((var(--pivot) - var(--i)) / var(--pivot)),1);--black-distance:clamp(0,calc((var(--i) - var(--pivot)) / (1000 - var(--pivot))),1);--to-white:pow(var(--white-distance),1.15);--to-black:pow(var(--black-distance),1.08);--center-left:clamp(0,calc(var(--i) / var(--pivot)),1);--center-right:clamp(0,calc((1000 - var(--i)) / (1000 - var(--pivot))),1);--chroma-shape:sqrt(min(var(--center-left),var(--center-right)));--chroma-scale:calc(0.08 + 0.92 * var(--chroma-shape));result:oklch(from var(--base-color) calc(l + (.985 - l) * var(--to-white) + (.16 - l) * var(--to-black)) calc(c * var(--chroma-scale)) h)}.wf-demo-root{isolation:isolate;min-block-size:100dvb;--wf-md-primary:var(--color-primary,#5a7fff);--base-color:var(--color-primary,var(--wf-md-primary));--wf-md-on-primary:--u2-color-mod(var(--wf-md-primary),920);--wf-md-surface:--u2-color-mod(var(--wf-md-primary),940);--wf-md-surf-container-low:--u2-color-mod(var(--wf-md-primary),900);--wf-md-surf-container:--u2-color-mod(var(--wf-md-primary),860);--wf-md-surf-container-high:--u2-color-mod(var(--wf-md-primary),820);--wf-md-outline-variant:color-mix(in oklab,--u2-color-mod(var(--wf-md-primary),100) 12%,transparent);--wf-md-on-surface:--u2-color-mod(var(--wf-md-primary),100);--wf-md-on-surface-variant:--u2-color-mod(var(--wf-md-primary),280);--wf-md-error:#ef4444}.wf-demo-root:not(.env-shell-root){background:radial-gradient(1200px 700px at 12% -8%,color-mix(in oklch,var(--wf-md-primary) 18%,--u2-color-mod(var(--wf-md-primary),940)),--u2-color-mod(var(--wf-md-primary),960));overflow:clip}.env-shell-root.wf-demo-root{background:transparent;overflow:visible}.wf-chrome-no-select{user-select:none;-webkit-user-select:none}.wf-content-select{user-select:text;-webkit-user-select:text}.wf-frame{--wf-shape-xl:0.375rem;background:var(--wf-md-surf-container-low);border:1px solid var(--wf-md-outline-variant);border-radius:var(--wf-shape-xl);box-shadow:0 2px 1px rgb(0 0 0/22%),0 4px 3px rgb(0 0 0/16%),0 8px 10px rgb(0 0 0/12%),0 24px 32px rgb(0 0 0/32%);color:var(--wf-md-on-surface);display:flex;flex-direction:column;overflow:clip;position:fixed}.wf-frame.wf-hidden,.wf-frame.wf-minimized .wf-frame-body{display:none!important}.wf-frame.wf-minimized{block-size:auto!important;box-shadow:0 1px 2px rgb(0 0 0/22%),0 2px 4px rgb(0 0 0/14%)}.wf-titlebar{align-items:stretch;background:linear-gradient(165deg,color-mix(in oklch,var(--wf-md-surf-container-high) 88%,transparent),var(--wf-md-surf-container));border-block-end:1px solid var(--wf-md-outline-variant);display:flex;flex:none;flex-direction:row;gap:.25rem;padding-block:.125rem;padding-inline:.5rem .25rem;pointer-events:auto;position:relative;z-index:1}.wf-titlebar-drag{align-items:center;cursor:grab;display:flex;flex:1;min-block-size:2.5rem;min-inline-size:0;padding-inline-start:.35rem;touch-action:none}.wf-titlebar-drag:active{cursor:grabbing}.wf-titlebar-actions{align-items:center;display:flex;flex:none;flex-direction:row;gap:.125rem}.wf-title{color:var(--wf-md-on-surface);font:550 .875rem/1.2 Google Sans Flex,ui-sans-serif,system-ui,sans-serif;letter-spacing:.015em;opacity:.96;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wf-chrome-btn{background:transparent;block-size:2.25rem;border:none;border-radius:.5rem;color:var(--wf-md-on-surface-variant);cursor:pointer;display:grid;flex:none;inline-size:2.25rem;margin:0;outline:none;padding:0;place-items:center;transition:background .14s ease,color .14s ease}.wf-chrome-btn:hover{background:color-mix(in oklch,var(--wf-md-on-surface) 10%,transparent);color:var(--wf-md-on-surface)}.wf-chrome-btn:focus-visible{box-shadow:0 0 0 2px color-mix(in oklch,var(--wf-md-primary) 56%,transparent)}.wf-chrome-btn_close:hover{background:color-mix(in oklch,var(--wf-md-error) 22%,transparent);color:var(--wf-md-on-surface)}.wf-frame-body{background:var(--wf-md-surface);border-end-end-radius:max(0px,calc(var(--wf-shape-xl) - 1px));border-end-start-radius:max(0px,calc(var(--wf-shape-xl) - 1px));display:flex;flex:1;flex-direction:column;margin:0;min-block-size:0;min-inline-size:0;overflow:hidden;padding:0;position:relative;transform:translateZ(0);z-index:0}.wf-frame-slot.wf-mounted-view,.wf-frame-slot>.wf-mounted-view{flex:1;min-block-size:0;overflow:auto}.wf-mobile-max.wf-mobile,.wf-mobile-max.wf-mobile .wf-frame-body{border-radius:0}.wf-resize{background:linear-gradient(135deg,transparent 53%,color-mix(in oklch,var(--wf-md-on-surface) 52%,transparent) 53%) 100% 100% /11px 11px no-repeat;block-size:22px;cursor:se-resize;inline-size:22px;inset-block-end:4px;inset-inline-end:4px;pointer-events:auto;position:absolute;touch-action:none;z-index:2}.wf-explorer{display:flex;flex:1;flex-direction:column;gap:6px;overflow:auto;padding-inline:2px}.wf-exp-row{appearance:none;background:color-mix(in oklch,var(--wf-md-on-surface) 8%,transparent);border:1px solid transparent;border-radius:.75rem;color:inherit;cursor:pointer;font:inherit;padding:8px;text-align:start}.wf-exp-row:hover{border-color:var(--wf-md-outline-variant)}.wf-exp-row_sel{outline:1px solid color-mix(in oklch,var(--wf-md-primary) 55%,transparent)}.wf-viewer{flex:1;min-block-size:0}.wf-md-body{block-size:100%;font-family:Google Sans Flex,ui-sans-serif,system-ui,sans-serif;font-size:13px;line-height:1.52;margin:0;overflow:auto;padding:12px}.wf-md :is(h1,h2,h3){margin:0 0 .5rem}.wf-md h1{font-size:1.25rem}.wf-md p{margin:.35rem 0}.wf-md pre{background:color-mix(in oklch,var(--wf-md-on-surface) 8%,transparent);border-radius:.75rem;overflow:auto;padding:.75rem}.wf-md code{font-family:ui-monospace,Google Sans Mono,monospace}.wf-md ul{margin:.25rem;padding-inline-start:1.35rem}.wf-md-err{color:color-mix(in oklch,var(--wf-md-error) 85%,transparent)}.wf-hud{color:var(--wf-md-on-surface-variant);font:12px ui-sans-serif,system-ui,sans-serif;inset-block-end:4px;inset-inline-start:4px;margin:0;max-inline-size:min(920px,96vw);opacity:.88;padding:6px 10px;position:fixed}.wf-hud p{margin:.15rem}@media print{.wf-demo-root{background:#fff!important}.wf-demo-root,.wf-frame{min-block-size:0!important;overflow:visible!important}.wf-frame{background:transparent!important;block-size:auto!important;border:none!important;border-radius:0!important;inset:auto!important;bottom:auto!important;box-shadow:none!important;break-inside:avoid;color:#000!important;inline-size:100%!important;left:auto!important;max-block-size:none!important;max-inline-size:100%!important;position:static!important;right:auto!important;top:auto!important;z-index:auto!important}.wf-resize,.wf-titlebar{display:none!important}.wf-frame-body{background:transparent!important;block-size:auto!important;border-radius:0!important;flex:none!important;flex-basis:auto!important;max-block-size:none!important;min-block-size:0!important;overflow:visible!important;transform:none!important}.wf-hud{display:none!important}}";
//#endregion
//#region src/frontend/ai-slop/window/environment-shell.ts
/**
* WHY: Hybrid SoT (plan 1C): wallpaper / SpeedDial / OrientDesktop / taskbar / statusbar /
* `ui-window` layer come from `environment-shell` modules; CWSP views load from app `views/*`.
*
* INVARIANT: Do **not** mount workspace under `cw-shell-*` closed/open shadow. Document-adopted
* SpeedDial + viewer SCSS cannot pierce that shadow — labels/toolbars look “unstyled”.
* Match `environment-shell/demo/boot.ts`: `<env-shell-container>` + light-DOM slotted layers.
*/
defineEnvironmentShellContainer();
function isNativeCapacitorShell() {
	try {
		if (document.documentElement.dataset.cwspNativeShell === "capacitor") return true;
		const c = globalThis.Capacitor;
		return typeof c?.isNativePlatform === "function" && Boolean(c.isNativePlatform());
	} catch {
		return false;
	}
}
/** `?native=1` or path `/explorer` with native query → mono native start set. */
function readStartNativeViewIds() {
	try {
		const sp = new URLSearchParams(globalThis.location?.search || "");
		if (sp.get("native") !== "1" && sp.get("native") !== "true") return [];
		const view = (sp.get("view") || "").trim().toLowerCase();
		let path = String(globalThis.location?.pathname || "").replace(/^\/+|\/+$/g, "").toLowerCase();
		const mount = path.match(/^(cwsp|markdown|kvm)\/(.+)$/);
		if (mount?.[2]) path = mount[2];
		const fromPath = path.split("/")[0] || "";
		const id = ((fromPath && fromPath !== "home" ? fromPath : view) || "explorer").split("/")[0] || "explorer";
		if (!id || id === "home") return ["explorer"];
		return [id === "markdown" ? "viewer" : id];
	} catch {
		return [];
	}
}
function wantsNative(opts) {
	const p = opts || {};
	return p.native === 1 || p.native === "1" || p.native === true || p.params?.native === "1" || p.params?.native === "true";
}
function mergeNativeOpt(viewId, opts) {
	if (!readStartNativeViewIds().includes(viewId) && !wantsNative(opts)) return opts || {};
	const base = { ...opts || {} };
	base.native = "1";
	base.params = {
		...base.params || {},
		native: "1"
	};
	return base;
}
var CWSP_VIEW_LOADERS = {
	network: () => __vitePreload(() => import("./src8.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8]), import.meta.url),
	settings: () => __vitePreload(() => import("./src9.js"), __vite__mapDeps([9,1,2,10,3,4,5,6,7,11,12,13,14,15,16,17]), import.meta.url),
	explorer: () => __vitePreload(() => import("./src.js"), __vite__mapDeps([18,1,2,10,3,4,5,6,7]), import.meta.url),
	viewer: () => __vitePreload(() => import("./src10.js"), __vite__mapDeps([19,1,2,10,3,4,5,6,7]), import.meta.url),
	markdown: () => __vitePreload(() => import("./src10.js"), __vite__mapDeps([19,1,2,10,3,4,5,6,7]), import.meta.url),
	history: () => __vitePreload(() => import("./src6.js"), __vite__mapDeps([20,1,2,10,3,4,5,6,7,21]), import.meta.url),
	workcenter: () => __vitePreload(() => import("./src11.js"), __vite__mapDeps([22,1,2,5,23,3,4,6,7,24,25,14,13,26,16,27,28,29,30,31]), import.meta.url),
	editor: () => __vitePreload(() => import("./src5.js"), __vite__mapDeps([32,1,2,10,3,4,5,6,7]), import.meta.url),
	home: () => __vitePreload(() => import("./src7.js"), __vite__mapDeps([33,1,2,10,3,4,5,6,7,34]), import.meta.url)
};
/** Views allowed as Speed Dial / floating windows (no airpad). */
var CWSP_LAUNCHER_VIEWS = [
	"home",
	"network",
	"settings",
	"explorer",
	"viewer",
	"history",
	"workcenter",
	"editor"
];
async function seedCwspLauncherTiles() {
	try {
		const mod = await __vitePreload(() => import("./launcher-state.js").then((n) => n.A), __vite__mapDeps([34,2,1]), import.meta.url);
		const items = mod.speedDialItems;
		if (!items || typeof items.findIndex !== "function") return;
		let removedAirpad = false;
		for (let i = items.length - 1; i >= 0; i--) {
			const it = items[i];
			const view = String(it?.meta?.view || "").toLowerCase();
			const id = String(it?.id || "").toLowerCase();
			if (view === "airpad" || id.includes("airpad")) {
				items.splice(i, 1);
				removedAirpad = true;
			}
		}
		if (removedAirpad) mod.persistSpeedDialItems?.();
	} catch (err) {
		console.warn("[EnvironmentShell] speed-dial seed skipped", err);
	}
}
var EnvironmentShell = class extends ShellBase {
	id = "environment";
	name = "Environment";
	layout = {
		hasSidebar: false,
		hasToolbar: false,
		hasTabs: false,
		supportsMultiView: true,
		supportsWindowing: true
	};
	workspaceEl = null;
	homeMountEl = null;
	windowLayer = null;
	chromeDispose = null;
	wallpaperLifecycleDispose = null;
	homeUnmount = null;
	shellActivityDispose = null;
	focusedTaskId = ref("home");
	setFocusedTaskId = null;
	syncWindowTasks = null;
	navEcho = ref("");
	mqLabel = ref("desktop");
	/** Mono `?native=1` boot — Home desktop deferred until exit-native / explicit Home. */
	_monoNativeBoot = false;
	_pendingHomeMount = null;
	/** Unused — light-DOM mount builds nodes imperatively (see {@link mount}). */
	createLayout() {
		return document.createElement("div");
	}
	getStylesheet() {
		return main_default;
	}
	/**
	* Light-DOM environment host (demo parity). Avoids `cw-shell-environment` shadow so
	* document-adopted SpeedDial / viewer / veela styles reach launcher + window bodies.
	*/
	async mount(container) {
		if (this.mounted) {
			console.warn(`[${this.id}] Shell already mounted`);
			return;
		}
		this.container = container;
		seedEnvironmentWallpaperIfUnset("/assets/wallpaper.jpg");
		defineEnvironmentShellContainer();
		try {
			await preloadStyle(wf_demo_default);
			loadInlineStyle(wf_demo_default);
		} catch (err) {
			console.warn("[EnvironmentShell] wf-demo tokens failed", err);
		}
		const envCss = this.getStylesheet();
		if (envCss) try {
			await preloadStyle(envCss);
			loadInlineStyle(envCss);
		} catch (err) {
			console.warn("[EnvironmentShell] env shell styles failed", err);
		}
		try {
			ensureStyleSheet();
		} catch {}
		try {
			document.documentElement.dataset.cwspSurface = "environment";
		} catch {}
		const host = createEnvironmentShellContainer();
		host.className = "env-shell-root wf-demo-root";
		host.setAttribute("data-shell", "environment");
		host.setAttribute("data-shell-system", "task-tab");
		host.style.gridColumn = "content-column";
		host.style.gridRow = "content-row";
		host.style.alignSelf = "stretch";
		host.style.justifySelf = "stretch";
		host.style.minInlineSize = "0";
		host.style.minBlockSize = "0";
		host.style.inlineSize = "100%";
		host.style.blockSize = "100%";
		host.style.pointerEvents = "auto";
		const wallpaper = document.createElement("div");
		wallpaper.slot = SHELL_SLOT.underlying;
		wallpaper.className = "env-shell-wallpaper";
		wallpaper.setAttribute("data-env-wallpaper", "");
		const workspace = document.createElement("div");
		workspace.className = "env-shell-workspace";
		workspace.setAttribute("data-shell-content", "");
		const homeMount = document.createElement("div");
		homeMount.className = "env-shell-home-mount";
		homeMount.style.display = "flex";
		homeMount.style.flex = "1 1 auto";
		homeMount.style.flexDirection = "column";
		homeMount.style.alignSelf = "stretch";
		homeMount.style.minHeight = "0";
		homeMount.style.minWidth = "0";
		workspace.appendChild(homeMount);
		host.append(wallpaper, workspace);
		container.replaceChildren(host);
		this.rootElement = host;
		this.workspaceEl = workspace;
		this.homeMountEl = homeMount;
		this.contentContainer = workspace;
		this.overlayContainer = host.overlayMount ?? host.shadowRoot?.querySelector?.("[data-shell-overlays]") ?? null;
		this.mounted = true;
		this.shellActivityDispose = initBootShellWindowActivity(this.id);
		const nativeCapacitor = isNativeCapacitorShell();
		if (nativeCapacitor) {
			host.dataset.capacitorNative = "";
			document.documentElement.dataset.cwspNativeShell = document.documentElement.dataset.cwspNativeShell || "capacitor";
		}
		try {
			restoreWallpaperThemeCache();
			if (nativeCapacitor) seedEnvironmentWallpaperIfUnset("/assets/wallpaper.jpg");
			initializeAppCanvasLayer(wallpaper);
			const repaintWallpaperIfVisible = () => {
				if (document.visibilityState !== "visible") return;
				try {
					refreshAppWallpaperPaint();
				} catch {}
			};
			window.addEventListener("pageshow", repaintWallpaperIfVisible);
			document.addEventListener("visibilitychange", repaintWallpaperIfVisible);
			this.wallpaperLifecycleDispose = () => {
				window.removeEventListener("pageshow", repaintWallpaperIfVisible);
				document.removeEventListener("visibilitychange", repaintWallpaperIfVisible);
			};
		} catch (err) {
			console.warn("[EnvironmentShell] wallpaper init failed", err);
		}
		const loaders = {};
		for (const id of CWSP_LAUNCHER_VIEWS) {
			if (id === "home") continue;
			if (!isEnabledView(id) && id !== "viewer") continue;
			const loader = CWSP_VIEW_LOADERS[id];
			if (loader) loaders[id] = loader;
		}
		if (loaders.viewer) loaders.markdown = loaders.viewer;
		const mobileMq = matchMedia("(max-width: 640px)");
		this.mqLabel.value = mobileMq.matches ? "mobile" : "desktop";
		mobileMq.addEventListener("change", () => {
			this.mqLabel.value = mobileMq.matches ? "mobile" : "desktop";
		});
		const chrome = mountEnvironmentChrome(host, {
			shell: {
				selectedPath: ref(""),
				viewerStatus: ref(""),
				navEcho: this.navEcho,
				mqLabel: this.mqLabel
			},
			introHtml: `<p><strong>CWSP environment</strong> — Speed Dial / desktop launcher. Views open in <code>ui-window</code>.</p>`,
			taskbar: {
				focusedTaskId: this.focusedTaskId,
				onHome: () => this.focusHome(),
				onViewer: () => {
					this.openInWindow("viewer");
				},
				onWindowTask: (viewId) => {
					this.openInWindow(viewId);
				},
				onMinimizeWindow: (viewId) => {
					const id = String(viewId || "").trim().toLowerCase();
					if (!id) return;
					if (this.windowLayer?.minimizeWindow?.(id)) {
						this.setFocusedTaskId?.("home");
						this.focusedTaskId.value = "home";
					}
				},
				onCloseWindow: (viewId) => {
					const id = String(viewId || "").trim().toLowerCase();
					if (!id) return;
					this.windowLayer?.closeWindow?.(id);
					if (String(this.focusedTaskId.value || "") === id) {
						this.setFocusedTaskId?.("home");
						this.focusedTaskId.value = "home";
					}
				}
			}
		});
		this.setFocusedTaskId = chrome.taskbar?.setFocusedTaskId ?? null;
		this.syncWindowTasks = chrome.taskbar?.syncWindowTasks ?? null;
		if (document.documentElement.dataset.cwspShellRole === "launcher" || globalThis.__RS_SHELL_ROLE__ === "launcher") registerLauncherHomeLifecycleHooks({
			navigateHome: () => this.focusHome(),
			openAppMenu: () => chrome.taskbar?.openAppMenu?.(),
			openAppMenuPage: () => chrome.taskbar?.openAppMenuPage?.() ?? chrome.taskbar?.appMenu?.openPage?.(),
			closeAppMenu: () => chrome.taskbar?.appMenu?.close(),
			isAppMenuOpen: () => Boolean(chrome.taskbar?.appMenu?.isOpen()),
			tryConsumeBack: () => {
				if (hasActiveCloseable()) return closeHighestPriority() != null;
				if (chrome.taskbar?.isSwitcherOpen?.()) {
					chrome.taskbar.closeSwitcher?.();
					return true;
				}
				return false;
			}
		});
		this.chromeDispose = () => {
			chrome.disposeDevice();
			chrome.taskbar?.dispose?.();
			chrome.root.remove();
		};
		const startNativeViewIds = readStartNativeViewIds();
		this.windowLayer = createWorkspaceWindowLayer(workspace, {
			overlayMountHost: host,
			environmentShellHost: host,
			viewLoaders: loaders,
			startNativeViewIds,
			viewTitles: {
				network: "Network",
				settings: "Settings",
				explorer: "Explorer",
				viewer: "Markdown",
				browser: "Browser",
				history: "History",
				workcenter: "Work Center",
				editor: "Editor"
			},
			onTaskingChange: (windows) => {
				this.syncWindowTasks?.(windows);
				const focused = windows.find((w) => w.focused);
				if (focused) this.setFocusedTaskId?.(focused.id);
			}
		});
		const shellContext = {
			...this.windowLayer.shellContext,
			navigate: (viewId, opts) => {
				this.navEcho.value = `shell.navigate("${viewId}")`;
				this.routeView(String(viewId), opts);
			},
			openView: (viewId, opts) => {
				this.navEcho.value = `shell.openView("${viewId}")`;
				this.routeView(String(viewId), opts);
			},
			showMessage: (msg) => {
				this.showMessage(typeof msg === "string" ? msg : String(msg ?? ""));
			}
		};
		seedCwspLauncherTiles();
		if (startNativeViewIds.length > 0) {
			for (const vid of startNativeViewIds) this.openInWindow(vid, {
				native: "1",
				params: { native: "1" }
			});
			this._monoNativeBoot = true;
			this._pendingHomeMount = {
				homeMount,
				shellContext: { shellContext }
			};
		} else this.mountHomeDesktop(homeMount, shellContext);
	}
	mountHomeDesktop(homeMount, shellContext) {
		mountViewModule(() => __vitePreload(() => import("./src7.js"), __vite__mapDeps([33,1,2,10,3,4,5,6,7,34]), import.meta.url), homeMount, { shellContext }).then((unmount) => {
			this.homeUnmount = unmount;
		}).catch((err) => {
			console.warn("[EnvironmentShell] home-view failed", err);
			homeMount.innerHTML = `<p style="color:#eee;padding:1rem;font-family:system-ui">Home view failed to load.</p>`;
		});
	}
	/** Lazily mount Home when leaving mono native (or user presses Home). */
	ensureHomeMounted() {
		const pending = this._pendingHomeMount;
		if (!pending || this.homeUnmount) return;
		this._pendingHomeMount = null;
		this._monoNativeBoot = false;
		this.mountHomeDesktop(pending.homeMount, pending.shellContext.shellContext);
	}
	syncLauncherHomeAddressBar() {
		if (typeof location === "undefined" || typeof history === "undefined") return;
		try {
			const sp = new URLSearchParams(location.search || "");
			sp.set("shell", this.id);
			sp.delete("native");
			sp.delete("view");
			const search = sp.toString() ? `?${sp.toString()}` : "";
			let pathname = location.pathname || "/";
			const seg = pathname.replace(/^\/+|\/+$/g, "").split("/")[0]?.toLowerCase() || "";
			if ((/* @__PURE__ */ new Set([
				"settings",
				"explorer",
				"viewer",
				"markdown",
				"network",
				"history",
				"workcenter",
				"editor"
			])).has(seg)) pathname = "/";
			const next = `${pathname}${search}`;
			if (`${location.pathname}${location.search}` !== next) history.replaceState({
				viewId: "home",
				params: Object.fromEntries(sp)
			}, "", next);
		} catch {}
	}
	focusHome() {
		this.ensureHomeMounted();
		if (typeof this.windowLayer?.minimizeAllWindows === "function") this.windowLayer.minimizeAllWindows();
		else {
			for (const t of this.windowLayer?.listWindowTasks?.() ?? []) this.windowLayer?.minimizeWindow?.(t.id);
			this.windowLayer?.blurWindows?.();
		}
		this.setFocusedTaskId?.("home");
		this.focusedTaskId.value = "home";
		this.currentView.value = "home";
		this.syncLauncherHomeAddressBar();
		try {
			refreshAppWallpaperPaint();
		} catch {}
	}
	openInWindow(viewId, opts) {
		const id = String(viewId || "").trim().toLowerCase();
		if (!id || id === "airpad") return;
		const withNative = mergeNativeOpt(id, opts);
		this.windowLayer?.shellContext.openView?.(id, withNative);
		if (wantsNative(withNative)) {
			const promote = () => {
				this.windowLayer?.enterNative?.(id);
				this.preserveNativeDeepLink(id);
			};
			promote();
			requestAnimationFrame(promote);
			setTimeout(promote, 0);
		}
		this.setFocusedTaskId?.(id === "markdown" ? "viewer" : id);
		this.currentView.value = id;
	}
	/**
	* Keep mono-native deep link as a readable path: `/settings?shell=…&native=1&view=settings`.
	* WHY: root `/?view=` looked “wrong” in the address bar; path + view= stay in sync so
	* BootLoader / readStartNativeViewIds still resolve after reloads.
	* INVARIANT: do not leave a stale `#env-viewer` (tasking) on a Settings mono window.
	*/
	preserveNativeDeepLink(viewId) {
		if (typeof location === "undefined" || typeof history === "undefined") return;
		try {
			const id = String(viewId || "").trim().toLowerCase();
			if (!id || id === "home") return;
			const sp = new URLSearchParams(location.search || "");
			sp.set("shell", this.id);
			sp.set("native", "1");
			sp.set("view", id);
			const next = `${`/${id}`}?${sp.toString()}`;
			if (`${location.pathname}${location.search}${location.hash || ""}` !== next) history.replaceState({
				viewId: id,
				params: Object.fromEntries(sp)
			}, "", next);
		} catch {}
	}
	async routeView(viewId, opts) {
		const id = String(viewId || "").trim().toLowerCase();
		if (!id || id === "airpad") return;
		if (id === "home") {
			this.focusHome();
			return;
		}
		this.openInWindow(id, opts);
	}
	async navigate(viewId, params, _navOptions) {
		const id = String(viewId || "home").toLowerCase();
		if (id === "airpad") {
			this.showMessage("AirPad view is disabled in environment shell");
			return;
		}
		if (id === "home") {
			const startNative = readStartNativeViewIds();
			if (startNative.length) {
				for (const vid of startNative) this.openInWindow(vid, {
					native: "1",
					params: {
						native: "1",
						...params || {}
					}
				});
				return;
			}
			this.focusHome();
			return;
		}
		let urlParams = {};
		try {
			urlParams = Object.fromEntries(new URLSearchParams(location.search || ""));
		} catch {
			urlParams = {};
		}
		const merged = {
			...urlParams,
			...params || {}
		};
		const opts = { params: merged };
		if (merged.native === "1" || merged.native === "true" || readStartNativeViewIds().includes(id)) {
			opts.native = "1";
			opts.params = {
				...merged,
				native: "1"
			};
		}
		this.openInWindow(id, opts);
	}
	unmount() {
		try {
			this.homeUnmount?.();
		} catch {}
		this.homeUnmount = null;
		try {
			this.windowLayer?.dispose();
		} catch {}
		this.windowLayer = null;
		try {
			this.chromeDispose?.();
		} catch {}
		this.chromeDispose = null;
		try {
			this.shellActivityDispose?.();
		} catch {}
		this.shellActivityDispose = null;
		try {
			this.wallpaperLifecycleDispose?.();
		} catch {}
		this.wallpaperLifecycleDispose = null;
		if (document.documentElement.dataset.cwspShellRole === "launcher" || globalThis.__RS_SHELL_ROLE__ === "launcher") registerLauncherHomeLifecycleHooks(null);
		if (this.mounted && this.container && this.rootElement) try {
			if (this.container.contains(this.rootElement)) this.rootElement.remove();
		} catch {}
		this.rootElement = null;
		this.contentContainer = null;
		this.overlayContainer = null;
		this.workspaceEl = null;
		this.homeMountEl = null;
		this.container = null;
		this.mounted = false;
	}
};
function createEnvironmentShell(_container) {
	return new EnvironmentShell();
}
//#endregion
export { createEnvironmentShell as n, EnvironmentShell as t };
