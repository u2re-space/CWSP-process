const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/cws-bridge.js","../chunks/rolldown-runtime.js","./core3.js","./core2.js","./uniform.js","../assets/index-CU5eF_0S.js","../chunks/ecosystem-skus.js","../chunks/airpad-cwsp-client-parity.js","../chunks/multi-value-list.js","../vendor/@capacitor_core.js","../chunks/UniformInterop2.js","../chunks/names.js","../vendor/culori.js","./core.js","./object.js","./core4.js","./core5.js"])))=>i.map(i=>d[i]);
import { t as __vitePreload } from "../assets/index-CU5eF_0S.js";
import { gt as loadAsAdopted } from "./core.js";
import { ct as Q, mt as fixOrientToScreen } from "./core4.js";
import { i as initializeAppCanvasLayer } from "../vendor/culori.js";
import { a as loadSettings, s as saveSettings } from "../vendor/jsox.js";
import { n as applyGridSettings } from "../chunks/StateStorage.js";
//#region src/shared/routing/core/layer-manager.ts
/**
* Unified layer hierarchy - ORDER MATTERS!
*
* Layers are declared in this order to ensure:
* 1. Reset/normalize come first (lowest specificity wins)
* 2. Tokens (CSS custom properties) are available early
* 3. Runtime provides base component styles
* 4. Shell styles can override runtime
* 5. View styles can override shell
* 6. Overrides (theme, print, a11y) win last
*/
var LAYER_HIERARCHY = [
	{
		name: "ux-normalize",
		category: "system",
		order: 0,
		description: "Veela normalize layer"
	},
	{
		name: "layer.reset",
		category: "system",
		order: 0,
		description: "CSS reset rules"
	},
	{
		name: "layer.normalize",
		category: "system",
		order: 10,
		description: "Normalize browser defaults"
	},
	{
		name: "tokens",
		category: "system",
		order: 20,
		description: "Legacy tokens layer"
	},
	{
		name: "ux-tokens",
		category: "system",
		order: 20,
		description: "Veela token layer"
	},
	{
		name: "layer.tokens",
		category: "system",
		order: 20,
		description: "CSS custom properties (variables)"
	},
	{
		name: "base",
		category: "system",
		order: 30,
		description: "Legacy base layer"
	},
	{
		name: "ux-base",
		category: "system",
		order: 30,
		description: "Veela base layer"
	},
	{
		name: "layout",
		category: "system",
		order: 40,
		description: "Legacy layout layer"
	},
	{
		name: "ux-layout",
		category: "system",
		order: 40,
		description: "Veela layout layer"
	},
	{
		name: "components",
		category: "system",
		order: 50,
		description: "Legacy components layer"
	},
	{
		name: "ux-components",
		category: "system",
		order: 50,
		description: "Veela components layer"
	},
	{
		name: "utilities",
		category: "system",
		order: 60,
		description: "Legacy utilities layer"
	},
	{
		name: "ux-utilities",
		category: "system",
		order: 60,
		description: "Veela utilities layer"
	},
	{
		name: "ux-theme",
		category: "system",
		order: 70,
		description: "Veela theme layer"
	},
	{
		name: "ux-overrides",
		category: "system",
		order: 80,
		description: "Veela overrides layer"
	},
	{
		name: "layer.properties.shell",
		category: "system",
		order: 30,
		description: "Shell context custom properties"
	},
	{
		name: "layer.properties.views",
		category: "system",
		order: 35,
		description: "View context custom properties"
	},
	{
		name: "layer.runtime.base",
		category: "runtime",
		order: 100,
		description: "Veela runtime base styles"
	},
	{
		name: "layer.runtime.components",
		category: "runtime",
		order: 110,
		description: "Reusable component styles"
	},
	{
		name: "layer.runtime.forms",
		category: "runtime",
		order: 115,
		description: "Form element base styles"
	},
	{
		name: "layer.runtime.utilities",
		category: "runtime",
		order: 120,
		description: "Utility classes"
	},
	{
		name: "layer.runtime.animations",
		category: "runtime",
		order: 130,
		description: "Keyframes and animation definitions"
	},
	{
		name: "layer.boot",
		category: "runtime",
		order: 140,
		description: "Boot/choice screen styles"
	},
	{
		name: "boot.tokens",
		category: "runtime",
		order: 142,
		description: "Boot tokens layer"
	},
	{
		name: "boot.base",
		category: "runtime",
		order: 144,
		description: "Boot base layer"
	},
	{
		name: "boot.components",
		category: "runtime",
		order: 146,
		description: "Boot components layer"
	},
	{
		name: "boot.responsive",
		category: "runtime",
		order: 148,
		description: "Boot responsive adjustments"
	},
	{
		name: "layer.shell.common",
		category: "shell",
		order: 200,
		description: "Shared shell styles"
	},
	{
		name: "shell.tokens",
		category: "shell",
		order: 202,
		description: "Legacy shell tokens"
	},
	{
		name: "shell.base",
		category: "shell",
		order: 204,
		description: "Legacy shell base"
	},
	{
		name: "shell.components",
		category: "shell",
		order: 206,
		description: "Legacy shell components"
	},
	{
		name: "shell.utilities",
		category: "shell",
		order: 208,
		description: "Legacy shell utilities"
	},
	{
		name: "shell.overrides",
		category: "shell",
		order: 209,
		description: "Legacy shell overrides"
	},
	{
		name: "layer.shell.raw",
		category: "shell",
		order: 210,
		description: "Raw shell (minimal)"
	},
	{
		name: "layer.shell.minimal",
		category: "shell",
		order: 220,
		description: "Minimal shell (toolbar navigation)"
	},
	{
		name: "layer.shell.minimal.layout",
		category: "shell",
		order: 222,
		description: "Minimal shell layout rules"
	},
	{
		name: "layer.shell.minimal.components",
		category: "shell",
		order: 224,
		description: "Minimal shell component styles"
	},
	{
		name: "layer.shell.window",
		category: "shell",
		order: 226,
		description: "Window shell (desktop/process frames)"
	},
	{
		name: "layer.shell.faint",
		category: "shell",
		order: 230,
		description: "Faint shell (tabbed sidebar)"
	},
	{
		name: "layer.shell.faint.layout",
		category: "shell",
		order: 232,
		description: "Faint shell layout"
	},
	{
		name: "layer.shell.faint.sidebar",
		category: "shell",
		order: 234,
		description: "Faint shell sidebar"
	},
	{
		name: "layer.shell.faint.toolbar",
		category: "shell",
		order: 236,
		description: "Faint shell toolbar"
	},
	{
		name: "layer.shell.faint.forms",
		category: "shell",
		order: 238,
		description: "Faint shell form components"
	},
	{
		name: "layer.view.common",
		category: "view",
		order: 300,
		description: "Shared view styles"
	},
	{
		name: "layer.view.viewer",
		category: "view",
		order: 310,
		description: "Markdown viewer"
	},
	{
		name: "layer.view.workcenter",
		category: "view",
		order: 320,
		description: "Work center (AI prompts)"
	},
	{
		name: "layer.view.workcenter.keyframes",
		category: "view",
		order: 322,
		description: "Work center animations"
	},
	{
		name: "view.workcenter",
		category: "view",
		order: 324,
		description: "Work center styles (legacy name)"
	},
	{
		name: "view.workcenter.animations",
		category: "view",
		order: 326,
		description: "Work center animations (legacy name)"
	},
	{
		name: "layer.view.settings",
		category: "view",
		order: 330,
		description: "Settings view"
	},
	{
		name: "layer.view.explorer",
		category: "view",
		order: 340,
		description: "File explorer"
	},
	{
		name: "layer.view.history",
		category: "view",
		order: 350,
		description: "History view"
	},
	{
		name: "layer.view.editor",
		category: "view",
		order: 360,
		description: "Editor view"
	},
	{
		name: "layer.view.editor.markdown",
		category: "view",
		order: 362,
		description: "Markdown editor sublayer"
	},
	{
		name: "layer.view.editor.quill",
		category: "view",
		order: 364,
		description: "Quill editor sublayer"
	},
	{
		name: "layer.view.home",
		category: "view",
		order: 380,
		description: "Home/landing view"
	},
	{
		name: "layer.view.print",
		category: "view",
		order: 390,
		description: "Print view"
	},
	{
		name: "view-explorer",
		category: "view",
		order: 392,
		description: "Explorer legacy layered scope"
	},
	{
		name: "view-transitions",
		category: "override",
		order: 850,
		description: "View Transition API named targets and keyframes"
	},
	{
		name: "layer.override.theme",
		category: "override",
		order: 900,
		description: "Theme customizations"
	},
	{
		name: "layer.override.print",
		category: "override",
		order: 910,
		description: "Print media styles"
	},
	{
		name: "layer.override.a11y",
		category: "override",
		order: 920,
		description: "Accessibility enhancements"
	}
];
var _initialized = false;
/**
* Initialize CSS layer order
*
* MUST be called before any other styles are loaded to ensure
* the cascade layer order is established correctly.
*
* This function is idempotent - calling it multiple times is safe.
*
* @example
* ```ts
* // In application entry point
* import { initializeLayers } from './shared/layer-manager';
*
* async function main() {
*     // Initialize layers FIRST
*     initializeLayers();
*
*     // Then load styles
*     await loadStyleSystem('vl-advanced');
*     // ...
* }
* ```
*/
function initializeLayers() {
	if (_initialized) {
		console.debug("[LayerManager] Already initialized");
		return;
	}
	if (typeof document === "undefined") {
		console.warn("[LayerManager] No document available (SSR context?)");
		return;
	}
	const layerNames = [...LAYER_HIERARCHY].sort((a, b) => a.order - b.order).map((l) => l.name);
	const layerRule = `@layer ${layerNames.join(", ")};`;
	const style = document.createElement("style");
	style.id = "css-layer-init";
	style.setAttribute("data-layer-manager", "true");
	style.textContent = layerRule;
	const head = document.head;
	head.insertBefore(style, head.firstChild);
	_initialized = true;
	console.log(`[LayerManager] Initialized ${layerNames.length} layers`);
}
var COLOR_SOURCES = [
	"auto",
	"wallpaper",
	"material-you",
	"system-wallpaper",
	"speed-dial",
	"custom"
];
var HEX_RE = /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i;
var normalizeHexColor = (raw) => {
	const t = String(raw ?? "").trim();
	if (!HEX_RE.test(t)) return "";
	if (t.length === 4) return `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`.toLowerCase();
	return t.toLowerCase();
};
var isAppearanceColorSource = (raw) => COLOR_SOURCES.includes(String(raw || ""));
var isCapacitorNative = () => {
	try {
		const c = globalThis.Capacitor;
		if (typeof c?.isNativePlatform === "function" && c.isNativePlatform()) return true;
		const platform = c?.getPlatform?.();
		return platform === "android" || platform === "ios";
	} catch {
		return false;
	}
};
var isNeutralinoDesktop = () => {
	try {
		const g = globalThis;
		return Boolean(g.__CWS_NEUTRALINO_BOOT__ || g.Neutralino || typeof g.NL_OS === "string");
	} catch {
		return false;
	}
};
var isCrxSurface = () => {
	try {
		return Boolean(globalThis.chrome?.runtime?.id);
	} catch {
		return false;
	}
};
var isLauncherSku = () => {
	try {
		if (typeof document !== "undefined" && document.documentElement.dataset.cwspShellRole === "launcher") return true;
		return globalThis.__RS_SHELL_ROLE__ === "launcher";
	} catch {
		return false;
	}
};
var isCwspShellSurface = () => {
	try {
		if (typeof document === "undefined") return false;
		const role = String(document.documentElement.dataset.cwspShellRole || "").toLowerCase();
		const surface = String(document.documentElement.dataset.cwspSurface || "").toLowerCase();
		return role === "shell" || surface === "cwsp-shell" || surface === "environment" || surface === "cw-environment";
	} catch {
		return false;
	}
};
/** Platform default when `colorSource` is empty / `auto`. */
var defaultColorSource = () => {
	if (isCapacitorNative() && isLauncherSku()) return "wallpaper";
	if (isCapacitorNative()) return "material-you";
	if (isNeutralinoDesktop()) return "system-wallpaper";
	if (isCrxSurface() || isCwspShellSurface()) return "speed-dial";
	return "speed-dial";
};
var resolveColorSource = (saved) => {
	if (isAppearanceColorSource(saved) && saved !== "auto") return saved;
	return defaultColorSource();
};
var rgbToHex = (css) => {
	const m = css.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
	if (!m) return "";
	return `#${[
		m[1],
		m[2],
		m[3]
	].map((n) => Math.max(0, Math.min(255, Math.round(Number(n)))).toString(16).padStart(2, "0")).join("")}`;
};
var registerColorProperty = (name, initialValue = "#5a9ec8") => {
	try {
		CSS?.registerProperty?.({
			name,
			syntax: "<color>",
			inherits: true,
			initialValue
		});
	} catch {}
};
var seedHosts = () => {
	const nodes = /* @__PURE__ */ new Set();
	if (typeof document === "undefined") return [];
	nodes.add(document.documentElement);
	if (document.body) nodes.add(document.body);
	document.querySelectorAll(".env-shell-root, .wf-demo-root, ui-window, [data-shell], .view-settings, [data-view='settings'], .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .cw-network-view, .cw-network-view-host").forEach((el) => nodes.add(el));
	return [...nodes];
};
var SEED_PROPS = [
	"--color-primary",
	"--base-color",
	"--wf-md-primary",
	"--wf-md-seed",
	"--primary",
	"--current"
];
var isValidColor = (color) => {
	try {
		rgbToHex(color);
		return true;
	} catch {
		return false;
	}
};
var applyBaseColorSeed = (hex, source, extras) => {
	if (typeof document === "undefined") return;
	const seed = normalizeHexColor(hex) || "#5a9ec8";
	const secondary = normalizeHexColor(extras?.secondary) || `color-mix(in oklab, ${seed} 72%, gray)`;
	const tertiary = normalizeHexColor(extras?.tertiary) || `color-mix(in oklab, ${seed} 55%, gray)`;
	const concrete = source === "user" ? "custom" : source === "system" ? "material-you" : source;
	document.documentElement.dataset.baseSource = String(concrete);
	document.documentElement.dataset.colorSource = String(concrete);
	if (!isValidColor(seed)) return;
	if (!isValidColor(secondary)) return;
	if (!isValidColor(tertiary)) return;
	registerColorProperty("--color-primary", seed);
	registerColorProperty("--base-color", seed);
	registerColorProperty("--color-secondary", secondary);
	registerColorProperty("--color-tertiary", tertiary);
	registerColorProperty("--secondary", secondary);
	registerColorProperty("--tertiary", tertiary);
	for (const host of seedHosts()) {
		for (const prop of SEED_PROPS) host.style.setProperty(prop, seed);
		host.style.setProperty("--color-secondary", secondary);
		host.style.setProperty("--color-tertiary", tertiary);
		host.style.setProperty("--secondary", secondary);
		host.style.setProperty("--tertiary", tertiary);
	}
	const globalQuery = Q("body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host");
	globalQuery.style.setProperty("--color-primary", seed);
	globalQuery.style.setProperty("--base-color", seed);
	globalQuery.style.setProperty("--color-secondary", secondary);
	globalQuery.style.setProperty("--color-tertiary", tertiary);
	globalQuery.style.setProperty("--secondary", secondary);
	globalQuery.style.setProperty("--tertiary", tertiary);
};
/** CSS `AccentColor` when the engine maps it to a real system accent (not generic link blue). */
var readCssAccentColor = () => {
	if (typeof document === "undefined") return "";
	const probe = document.createElement("div");
	probe.style.cssText = "position:absolute;inset:auto;color:AccentColor;background:AccentColor";
	document.documentElement.appendChild(probe);
	const css = getComputedStyle(probe).color;
	probe.remove();
	const hex = rgbToHex(css);
	if (!hex) return "";
	if (hex === "#0000ee" || hex === "#0000ff" || hex === "#000000" || hex === "#ffffff") return "";
	return hex;
};
var readBridgeColor = async (key) => {
	try {
		const cached = normalizeHexColor(globalThis.__CWS_SHELL_INFO__?.[key]);
		if (cached) return cached;
		const { fetchCwsShellInfo } = await __vitePreload(async () => {
			const { fetchCwsShellInfo } = await import("../chunks/cws-bridge.js").then((n) => n.n);
			return { fetchCwsShellInfo };
		}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url);
		return normalizeHexColor((await fetchCwsShellInfo({ force: true }))?.[key]);
	} catch {
		return "";
	}
};
var resolveSystemAccentColor = async () => {
	const fromBridge = await readBridgeColor("accentColor");
	if (fromBridge) return fromBridge;
	return readCssAccentColor();
};
var cachedWallpaperPrimary = () => {
	try {
		const hex = normalizeHexColor(localStorage.getItem("rs-wallpaper-primary"));
		if (hex) return hex;
		const raw = localStorage.getItem("rs-wallpaper-theme");
		if (!raw) return "";
		return normalizeHexColor(JSON.parse(raw)?.primary);
	} catch {
		return "";
	}
};
var extractFromImage = async (src) => {
	try {
		const { applyThemeFromWallpaper } = await __vitePreload(async () => {
			const { applyThemeFromWallpaper } = await import("../vendor/culori.js").then((n) => n.t);
			return { applyThemeFromWallpaper };
		}, __vite__mapDeps([12,1,13,3,14,15,5,6,16,4]), import.meta.url);
		return normalizeHexColor((await applyThemeFromWallpaper(src, { force: false }))?.primary);
	} catch {
		return "";
	}
};
var colorFromLiveWallpaperCanvas = async () => {
	if (typeof document === "undefined") return "";
	const canvas = document.querySelector(".env-shell-wallpaper canvas, [data-app-layer='canvas'] canvas");
	if (!canvas || canvas.width < 2 || canvas.height < 2) return "";
	try {
		const blob = await new Promise((resolve) => {
			canvas.toBlob((b) => resolve(b), "image/jpeg", .7);
		});
		if (blob && blob.size > 0) return extractFromImage(blob);
	} catch {}
	return "";
};
var colorFromAppWallpaper = async () => {
	const cached = cachedWallpaperPrimary();
	if (cached) return cached;
	try {
		const { resolveAppWallpaperUrl } = await __vitePreload(async () => {
			const { resolveAppWallpaperUrl } = await import("../vendor/culori.js").then((n) => n.t);
			return { resolveAppWallpaperUrl };
		}, __vite__mapDeps([12,1,13,3,14,15,5,6,16,4]), import.meta.url);
		const url = await resolveAppWallpaperUrl();
		if (!url) return cached;
		if (/\/assets\/wallpaper\.jpg(?:$|[?#])/i.test(url)) return cached;
		if (url.startsWith("data:") && !/^data:image\//i.test(url)) return cached;
		return extractFromImage(url);
	} catch {}
	return "";
};
var neuReadEnv = async (key) => {
	try {
		const fn = globalThis.Neutralino?.os?.getEnv;
		if (typeof fn !== "function") return "";
		const raw = await fn({ key });
		if (typeof raw === "string") return raw.trim();
		if (raw && typeof raw === "object" && "value" in raw) return String(raw.value || "").trim();
		return "";
	} catch {
		return "";
	}
};
var neuReadBinary = async (path) => {
	try {
		const buf = await globalThis.Neutralino?.filesystem?.readBinaryFile?.(path);
		if (!buf || !(buf instanceof ArrayBuffer) || buf.byteLength < 32) return null;
		return new Blob([buf], { type: "image/jpeg" });
	} catch {
		return null;
	}
};
var colorFromSystemWallpaper = async () => {
	const fromBridge = await readBridgeColor("wallpaperColor");
	if (fromBridge) return fromBridge;
	if (isNeutralinoDesktop()) {
		const appData = await neuReadEnv("APPDATA") || await neuReadEnv("HOME");
		const candidates = [appData ? `${appData.replace(/[\\/]+$/, "")}/Microsoft/Windows/Themes/TranscodedWallpaper` : "", appData ? `${appData.replace(/[\\/]+$/, "")}/.cache/wallpaper` : ""].filter(Boolean);
		for (const path of candidates) {
			const blob = await neuReadBinary(path);
			if (blob) {
				const hex = await extractFromImage(blob);
				if (hex) return hex;
			}
		}
	}
	return cachedWallpaperPrimary();
};
var resolveAppearanceBaseColor = async (appearance) => {
	const input = typeof appearance === "string" || appearance == null ? { color: appearance } : appearance;
	const source = resolveColorSource(input.colorSource);
	const custom = normalizeHexColor(input.color);
	const pick = async (fn, tag) => {
		const hex = normalizeHexColor(await fn());
		return hex ? {
			hex,
			source: tag
		} : null;
	};
	if (source === "custom" && custom) return {
		hex: custom,
		source: "custom"
	};
	if (source === "material-you") return await pick(resolveSystemAccentColor, "material-you") ?? {
		hex: custom || "#5a9ec8",
		source: custom ? "custom" : "material-you"
	};
	if (source === "wallpaper") return await pick(colorFromLiveWallpaperCanvas, "wallpaper") ?? await pick(colorFromAppWallpaper, "wallpaper") ?? await pick(async () => readBridgeColor("wallpaperColor"), "wallpaper") ?? {
		hex: custom || "#5a9ec8",
		source: "wallpaper"
	};
	if (source === "speed-dial") return await pick(colorFromAppWallpaper, "speed-dial") ?? {
		hex: custom || "#5a9ec8",
		source: "speed-dial"
	};
	if (source === "system-wallpaper") return await pick(colorFromSystemWallpaper, "system-wallpaper") ?? {
		hex: custom || "#5a9ec8",
		source: "system-wallpaper"
	};
	return {
		hex: custom || "#5a9ec8",
		source
	};
};
//#endregion
//#region ../../modules/projects/subsystem/src/other/utils/Theme.ts
/**
* WHY: fl.ui Quick Settings cannot import this module (layer cycle). It dispatches
* `u2-theme-change` with `{ source: "quick-settings", theme }`; we persist to IDB and
* re-run {@link applyTheme} so env-shell + minimal shells share one persistence path.
*/
var quickSettingsThemeBridgeBound = false;
var quickSettingsThemeBridgeBusy = false;
var bindQuickSettingsThemePersistence = () => {
	if (quickSettingsThemeBridgeBound || typeof document === "undefined") return;
	quickSettingsThemeBridgeBound = true;
	document.documentElement.addEventListener("u2-theme-change", (ev) => {
		const detail = ev?.detail;
		if (!detail || detail.source !== "quick-settings") return;
		const theme = detail.theme;
		if (theme !== "light" && theme !== "dark") return;
		if (quickSettingsThemeBridgeBusy) return;
		quickSettingsThemeBridgeBusy = true;
		(async () => {
			try {
				const current = await loadSettings();
				if (current?.appearance?.theme === theme) {
					syncBrowserChromeTheme(theme, theme);
					return;
				}
				applyTheme(await saveSettings({
					...current,
					appearance: {
						...current.appearance || {},
						theme
					}
				}));
			} catch (e) {
				console.warn("[Theme] Quick Settings persistence failed", e);
				syncBrowserChromeTheme(theme, theme);
			} finally {
				quickSettingsThemeBridgeBusy = false;
			}
		})();
	});
};
/** Convert getComputedStyle background (rgb/rgba or hex) to #rrggbb for meta theme-color / PWA chrome. */
var cssBackgroundToOpaqueHex = (css) => {
	const t = css.trim();
	if (!t || t === "transparent") return null;
	const hexMatch = t.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
	if (hexMatch) {
		let h = hexMatch[1];
		if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
		return `#${h.toLowerCase()}`;
	}
	const m = t.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)$/i);
	if (!m) return null;
	const alpha = m[4] !== void 0 ? Number(m[4]) : 1;
	if (!Number.isFinite(alpha) || alpha < .98) return null;
	return `#${[
		Math.max(0, Math.min(255, Math.round(Number(m[1])))),
		Math.max(0, Math.min(255, Math.round(Number(m[2])))),
		Math.max(0, Math.min(255, Math.round(Number(m[3]))))
	].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
};
/**
* Sample the top shell chrome (minimal nav or faint toolbar) from mounted shell shadow roots
* so PWA Window Controls Overlay / title bar can match the real toolbar background.
*/
var samplePwaToolbarBackgroundColor = () => {
	if (typeof document === "undefined") return null;
	const hosts = document.querySelectorAll("[data-shell]");
	for (const host of hosts) {
		const sr = host.shadowRoot;
		if (!sr) continue;
		const bar = sr.querySelector(".app-shell__nav, .app-shell__toolbar");
		if (!bar) continue;
		const bg = getComputedStyle(bar).backgroundColor;
		const hex = cssBackgroundToOpaqueHex(bg);
		if (hex) return hex;
	}
	return null;
};
/** Paint `--color-surface` so Capacitor / PWA chrome follows Material You after seed apply. */
var sampleSurfaceBackgroundColor = () => {
	if (typeof document === "undefined") return null;
	const probe = document.createElement("div");
	probe.style.cssText = "position:fixed;left:-8px;top:-8px;inline-size:4px;block-size:4px;pointer-events:none;opacity:0;background:var(--color-surface)";
	try {
		document.documentElement.appendChild(probe);
		return cssBackgroundToOpaqueHex(getComputedStyle(probe).backgroundColor);
	} catch {
		return null;
	} finally {
		probe.remove();
	}
};
var resolveColorScheme = (theme) => {
	if (theme === "dark" || theme === "light") return theme;
	return globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
};
var resolveFontSize = (size) => {
	switch (size) {
		case "small": return "14px";
		case "large": return "18px";
		default: return "16px";
	}
};
/** Keep minimal / immersive shell hosts + inner `.app-shell` in sync when only `applyTheme()` runs (Settings saves / preview) — `shell.setTheme` is not always invoked. */
var syncShellHostVisualScheme = (resolved) => {
	try {
		document.querySelectorAll("[data-shell]").forEach((el) => {
			const h = el;
			h.dataset.theme = resolved;
			h.style.colorScheme = resolved;
			const inner = h.shadowRoot?.querySelector?.(".app-shell");
			if (inner) {
				inner.dataset.theme = resolved;
				inner.style.colorScheme = resolved;
			}
		});
	} catch {}
	try {
		document.querySelectorAll("ui-window, .env-shell-root").forEach((el) => {
			const h = el;
			h.dataset.theme = resolved;
			h.style.colorScheme = resolved;
		});
	} catch {}
};
/** Keep <html> + PWA chrome aligned with resolved light/dark and user preference (auto/light/dark). */
var syncBrowserChromeTheme = (resolved, preference) => {
	if (typeof document === "undefined") return;
	const root = document.documentElement;
	const scheme = preference === "dark" ? "dark" : preference === "light" ? "light" : "auto";
	root.setAttribute("data-scheme", scheme);
	root.setAttribute("data-theme", resolved);
	root.style.colorScheme = resolved;
	try {
		const body = document.body;
		if (body) body.style.colorScheme = resolved;
	} catch {}
	try {
		document.querySelectorAll("[data-shell='content']").forEach((el) => {
			el.style.colorScheme = resolved;
		});
	} catch {}
	if (globalThis?.__LURE_DYNAMIC_THEME_PRIORITY__ !== true) {
		const applyMetaThemeColor = () => {
			if (globalThis?.__LURE_DYNAMIC_THEME_PRIORITY__ === true) return;
			if (globalThis?.__CWSP_NATIVE_THEME_COLOR_OWNED__) return;
			if (document.querySelector("ui-window[native-mode]:not([minimized])")) return;
			let meta = document.querySelector("meta[name=\"theme-color\"]");
			if (!meta) {
				meta = document.createElement("meta");
				meta.setAttribute("name", "theme-color");
				document.head?.appendChild(meta);
			}
			const sampled = samplePwaToolbarBackgroundColor() ?? sampleSurfaceBackgroundColor();
			const fallback = resolved === "dark" ? "#1a2420" : "#d5e4dc";
			meta.setAttribute("content", sampled ?? fallback);
		};
		applyMetaThemeColor();
		requestAnimationFrame(applyMetaThemeColor);
	}
	syncShellHostVisualScheme(resolved);
};
var applyTheme = (settings) => {
	if (typeof document === "undefined") return;
	bindQuickSettingsThemePersistence();
	installThemeLifecycleResync();
	if (!settings) return;
	const root = document.documentElement;
	const theme = settings.appearance?.theme || "auto";
	const resolvedScheme = resolveColorScheme(theme);
	syncBrowserChromeTheme(resolvedScheme, theme);
	root.style.fontSize = resolveFontSize(settings.appearance?.fontSize);
	root.dataset.colorSource = resolveColorSource(settings.appearance?.colorSource);
	resolveAppearanceBaseColor(settings.appearance).then(({ hex, source }) => {
		applyBaseColorSeed(hex, source);
		syncBrowserChromeTheme(resolvedScheme, theme);
	});
	if (settings.grid) applyGridSettings(settings);
};
var restampExplorerShellScheme = () => {
	if (typeof document === "undefined") return;
	try {
		document.querySelectorAll(".view-explorer").forEach((el) => {
			const scheme = el.dataset.explorerColorScheme;
			if (scheme !== "light" && scheme !== "dark") return;
			if (el.getAttribute("data-theme") !== scheme) el.setAttribute("data-theme", scheme);
			el.style.setProperty("color-scheme", `${scheme} only`);
		});
	} catch {}
};
var themeResumeAt = 0;
var themeLifecycleBound = false;
var sawBackground = false;
var restampChromeScheme = () => {
	restampExplorerShellScheme();
	try {
		const root = document.documentElement;
		const pinned = root.getAttribute("data-theme");
		if (pinned === "light" || pinned === "dark") {
			root.style.colorScheme = pinned;
			if (document.body) document.body.style.colorScheme = pinned;
		}
		root.offsetHeight;
	} catch {}
};
/**
* Restore chrome after Android recents / Home.
* INVARIANT: never rewrite constructable sheets on cold start — first onResume/focus wiped UI.
*/
var resumeThemeAfterForeground = (force = false) => {
	if (typeof document === "undefined") return;
	if (!force && document.visibilityState === "hidden") return;
	const now = Date.now();
	if (now - themeResumeAt < 240) return;
	themeResumeAt = now;
	restampChromeScheme();
	if (!sawBackground) return;
	(async () => {
		try {
			const { rehydrateAdoptedStyleSheets } = await __vitePreload(async () => {
				const { rehydrateAdoptedStyleSheets } = await import("./core4.js").then((n) => n.t);
				return { rehydrateAdoptedStyleSheets };
			}, __vite__mapDeps([15,1,5,6,13,3,14,16,4]), import.meta.url);
			rehydrateAdoptedStyleSheets();
		} catch {}
		restampChromeScheme();
		try {
			document.dispatchEvent(new CustomEvent("cwsp:theme-resume"));
		} catch {}
	})();
};
/** Bind visibility / pageshow / Capacitor appState + expose `__CWSP_THEME_RESUME__` for Java onResume. */
var installThemeLifecycleResync = () => {
	if (themeLifecycleBound || typeof document === "undefined") return;
	themeLifecycleBound = true;
	globalThis.__CWSP_THEME_RESUME__ = resumeThemeAfterForeground;
	document.addEventListener("visibilitychange", () => {
		if (document.visibilityState === "hidden") {
			sawBackground = true;
			return;
		}
		resumeThemeAfterForeground();
	});
	document.addEventListener("resume", () => resumeThemeAfterForeground());
	globalThis.addEventListener?.("pageshow", () => resumeThemeAfterForeground());
	try {
		globalThis.Capacitor?.Plugins?.App?.addListener?.("appStateChange", (state) => {
			if (state?.isActive === false) {
				sawBackground = true;
				return;
			}
			if (state?.isActive) resumeThemeAfterForeground();
		});
	} catch {}
};
//#endregion
//#region ../../modules/projects/veela.css/src/scss/core/index.scss?inline
var core_default = "@function --hsv(--src-color <color>) returns <color>{result:hsl(from var(--src-color,black) h calc(calc((calc(l / 100) - calc(calc(l / 100) * (1 - calc(s / 100) / 2))) / clamp(.0001, min(calc(calc(l / 100) * (1 - calc(s / 100) / 2)), calc(1 - calc(calc(l / 100) * (1 - calc(s / 100) / 2)))), 1)) * 100) calc(calc(calc(l / 100) * (1 - calc(s / 100) / 2)) * 100)/alpha)}@property --color-primary{syntax:\"<color>\";inherits:true;initial-value:#5a9ec8}@property --base-color{syntax:\"<color>\";inherits:true;initial-value:#5a9ec8}@property --wallpaper-underlying-color{syntax:\"<color>\";inherits:true;initial-value:#16161a}@property --wallpaper-contrast-color{syntax:\"<color>\";inherits:true;initial-value:#f7f7f8}@property --color-secondary{syntax:\"<color>\";inherits:true;initial-value:#6b8cff}@property --color-tertiary{syntax:\"<color>\";inherits:true;initial-value:#8aa0ff}@property --color-error{syntax:\"<color>\";inherits:true;initial-value:#ef4444}@property --color-success{syntax:\"<color>\";inherits:true;initial-value:#4caf50}@property --color-warning{syntax:\"<color>\";inherits:true;initial-value:#ff9800}@property --color-info{syntax:\"<color>\";inherits:true;initial-value:#2196f3}@function --u2-color-mod(--base-color <color>, --index <number> : 550) returns <color>{--i:clamp(0,var(--index),1000);--pivot:550;--white-distance:clamp(0,calc((var(--pivot) - var(--i)) / var(--pivot)),1);--black-distance:clamp(0,calc((var(--i) - var(--pivot)) / (1000 - var(--pivot))),1);--to-white:pow(var(--white-distance),1.15);--to-black:pow(var(--black-distance),1.08);--center-left:clamp(0,calc(var(--i) / var(--pivot)),1);--center-right:clamp(0,calc((1000 - var(--i)) / (1000 - var(--pivot))),1);--chroma-shape:sqrt(min(var(--center-left),var(--center-right)));--chroma-scale:calc(0.08 + 0.92 * var(--chroma-shape));result:oklch(from var(--base-color) calc(l + (.985 - l) * var(--to-white) + (.16 - l) * var(--to-black)) calc(c * var(--chroma-scale)) h)}@layer tokens, base, layout, components, utilities, theme, overrides, print;@layer tokens{:host,:root,:scope{--color-primary:#5a9ec8;color-scheme:light dark;--base-color:var(--color-primary);--base-color-neutralized:color-mix(in oklab,var(--base-color) 60%,gray);--wallpaper-underlying-color:--u2-color-mod(var(--base-color-neutralized),940);--wallpaper-contrast-color:--u2-color-mod(var(--base-color-neutralized),70);--wf-md-primary:var(--color-primary);--wf-md-seed:var(--base-color);--color-on-primary:--u2-color-mod(var(--base-color),40);--color-secondary:--u2-color-mod(var(--base-color),420);--color-on-secondary:--u2-color-mod(var(--base-color),40);--color-tertiary:--u2-color-mod(var(--base-color),400);--color-on-tertiary:--u2-color-mod(var(--base-color),40);--color-error:#ef4444;--color-on-error:--u2-color-mod(var(--color-error),40);--color-success:#4caf50;--color-warning:#ff9800;--color-info:#2196f3;--color-background:--u2-color-mod(var(--base-color),60);--color-on-background:--u2-color-mod(var(--base-color),900);--color-surface:--u2-color-mod(var(--base-color),60);--color-on-surface:--u2-color-mod(var(--base-color),900);--color-surface-variant:--u2-color-mod(var(--base-color),160);--color-on-surface-variant:--u2-color-mod(var(--base-color),700);--color-outline:--u2-color-mod(var(--base-color),300);--color-outline-variant:--u2-color-mod(var(--base-color),400);--color-surface-container-lowest:--u2-color-mod(var(--base-color),40);--color-surface-container-low:--u2-color-mod(var(--base-color),30);--color-surface-container:--u2-color-mod(var(--base-color),20);--color-surface-container-high:--u2-color-mod(var(--base-color),5);--color-surface-container-highest:--u2-color-mod(var(--base-color),2);--color-primary-container:--u2-color-mod(var(--base-color),160);--color-on-primary-container:--u2-color-mod(var(--base-color),900);--color-border:color-mix(in oklab,var(--color-outline-variant) 75%,transparent);--color-bg:var(--color-background);--color-text:var(--color-on-background);--color-fg:var(--color-on-surface);--on-surface-color:var(--color-on-surface);--surface-color:var(--color-surface);--fl-surface:var(--color-surface);--fl-on-surface:var(--color-on-surface);--fl-primary:var(--color-primary);--fl-on-primary:var(--color-on-primary);--fl-secondary:var(--color-secondary);--fl-on-secondary:var(--color-on-secondary);--fl-shadow-xl:var(--shadow-xl);--on-surface-variant:var(--color-on-surface-variant);--wf-md-surface:var(--color-surface);--wf-md-on-surface:var(--color-on-surface);--wf-md-on-surface-variant:var(--color-on-surface-variant);--wf-md-surf-container:var(--color-surface-container);--wf-md-surf-container-low:var(--color-surface-container-low);--wf-md-surf-container-high:var(--color-surface-container-high);--wf-md-outline-variant:var(--color-outline-variant);--md3-primary-container:var(--color-primary-container);--md-primary-container:var(--color-primary-container);--space-2xs:0.125rem;--space-xs:0.25rem;--space-sm:0.5rem;--space-md:0.75rem;--space-lg:1rem;--space-xl:1.25rem;--space-2xl:1.5rem;--padding-xs:var(--space-xs);--padding-sm:var(--space-sm);--padding-md:var(--space-md);--padding-lg:var(--space-lg);--padding-xl:var(--space-xl);--padding-2xl:var(--space-2xl);--padding-3xl:2rem;--padding-4xl:2.5rem;--padding-5xl:3rem;--padding-6xl:4rem;--padding-7xl:5rem;--padding-8xl:6rem;--padding-9xl:8rem;--gap-xs:var(--space-xs);--gap-sm:var(--space-sm);--gap-md:var(--space-md);--gap-lg:var(--space-lg);--gap-xl:var(--space-xl);--gap-2xl:var(--space-2xl);--fl-ui-gap:var(--space-md);--radius-none:0;--radius-xs:0.25rem;--radius-sm:0.25rem;--radius-default:0.25rem;--radius-md:0.5rem;--radius-lg:0.75rem;--radius-xl:1rem;--radius-2xl:1.75rem;--radius-3xl:2rem;--radius-full:9999px;--fl-ui-radius:var(--radius-md);--border-radius:var(--radius-md);--shape-extra-small:var(--radius-xs);--shape-small:var(--radius-md);--shape-medium:var(--radius-lg);--shape-large:var(--radius-xl);--shape-extra-large:var(--radius-2xl);--shape-full:var(--radius-full);--elev-0:none;--elev-1:0 1px 1px rgba(0,0,0,0.06),0 1px 3px rgba(0,0,0,0.1);--elev-2:0 2px 6px rgba(0,0,0,0.12),0 8px 24px rgba(0,0,0,0.08);--elev-3:0 6px 16px rgba(0,0,0,0.14),0 18px 48px rgba(0,0,0,0.1);--shadow-xs:0 1px 2px rgba(0,0,0,0.05);--shadow-sm:0 1px 3px rgba(0,0,0,0.1);--shadow-md:0 4px 6px rgba(0,0,0,0.1);--shadow-lg:0 10px 15px rgba(0,0,0,0.1);--shadow-xl:0 20px 25px rgba(0,0,0,0.1);--shadow-2xl:0 25px 50px rgba(0,0,0,0.1);--shadow-inset:inset 0 2px 4px rgba(0,0,0,0.06);--shadow-inset-strong:inset 0 4px 8px rgba(0,0,0,0.12);--shadow-none:0 0 #0000;--text-xs:0.8rem;--text-sm:0.9rem;--text-base:1rem;--text-lg:1.1rem;--text-xl:1.25rem;--text-2xl:1.6rem;--text-3xl:2rem;--font-xs:var(--text-xs);--font-sm:var(--text-sm);--font-base:var(--text-base);--font-md:var(--text-base);--font-lg:var(--text-lg);--font-xl:var(--text-xl);--font-2xl:var(--text-2xl);--ui-icon-size:1.25rem;--ui-icon-padding:0px;--ui-icon-tile-padding:0.45rem;--ui-window-icon-size:0.95rem;--ui-explorer-icon-size:1.5rem;--ui-explorer-icon-track:2rem;--ui-explorer-action-icon-size:1.15rem;--ui-explorer-row-height:3.25rem;--icon-size-sm:var(--ui-icon-size);--icon-size-md:var(--ui-icon-size);--icon-size-lg:var(--ui-explorer-icon-size);--font-size-xs:0.75rem;--font-size-sm:0.875rem;--font-size-base:1rem;--font-size-lg:1.125rem;--font-size-xl:1.25rem;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--font-family:\"Roboto\",ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif;--font-family-base:var(--font-family);--font-family-mono:\"Roboto Mono\",\"SF Mono\",Monaco,Inconsolata,\"Fira Code\",monospace;--font-sans:var(--font-family);--font-mono:var(--font-family-mono);--leading-tight:1.2;--leading-normal:1.5;--leading-relaxed:1.8;--line-height:var(--leading-normal);--ease-emphasized:cubic-bezier(0.2,0,0,1);--ease-expressive:cubic-bezier(0.34,1.25,0.64,1);--duration-fast:140ms;--duration-normal:220ms;--duration-slow:360ms;--transition-fast:var(--duration-fast) var(--ease-emphasized);--transition-normal:var(--duration-normal) var(--ease-emphasized);--transition-slow:var(--duration-slow) var(--ease-emphasized);--motion-fast:var(--transition-fast);--motion-normal:var(--transition-normal);--motion-slow:var(--transition-slow);--ease-out:cubic-bezier(0,0,0.2,1);--ease-in:cubic-bezier(0.4,0,1,1);--ease-in-out:cubic-bezier(0.4,0,0.2,1);--focus-ring:0 0 0 3px color-mix(in oklab,var(--color-primary) 35%,transparent);--z-base:0;--z-dropdown:100;--z-sticky:200;--z-fixed:300;--z-modal-backdrop:400;--z-modal:500;--z-popover:600;--z-tooltip:700;--z-toast:800;--z-max:9999;--view-bg:var(--color-container);--view-fg:var(--color-on-surface);--view-border:var(--color-outline-variant);--view-input-bg:light-dark(--u2-color-mod(var(--base-color,var(--color-primary)),40),var(--color-surface-container-high));--view-files-bg:var(--color-surface-container-low);--view-file-bg:var(--color-surface-container-lowest,var(--color-surface-container-low));--view-results-bg:var(--color-surface-container-low);--view-result-bg:var(--color-surface-container-lowest,var(--color-surface-container-low));--color-surface-elevated:var(--color-surface-container);--color-surface-hover:var(--color-surface-container-low);--color-surface-active:var(--color-surface-container-high);--color-on-surface-muted:var(--color-on-surface-variant);--color-background-alt:var(--color-surface-variant);--color-primary-hover:light-dark(--u2-color-mod(var(--base-color,var(--color-primary)),620),--u2-color-mod(var(--base-color,var(--color-primary)),480));--color-primary-active:light-dark(--u2-color-mod(var(--base-color,var(--color-primary)),700),--u2-color-mod(var(--base-color,var(--color-primary)),400));--color-accent:var(--color-secondary);--color-accent-hover:light-dark(--u2-color-mod(var(--base-color,var(--color-primary)),500),--u2-color-mod(var(--base-color,var(--color-primary)),600));--color-on-accent:var(--color-on-secondary);--color-border-hover:var(--color-outline-variant);--color-border-strong:var(--color-outline);--color-border-focus:var(--color-primary);--color-text:var(--color-on-surface);--color-text-secondary:var(--color-on-surface-variant);--color-text-muted:color-mix(in oklab,var(--color-on-surface) 50%,var(--color-surface));--color-text-disabled:color-mix(in oklab,var(--color-on-surface) 38%,var(--color-surface));--color-text-inverse:var(--color-on-primary);--color-link:var(--color-primary);--color-link-hover:var(--color-primary-hover);--color-success-light:--u2-color-mod(var(--color-success),280);--color-success-dark:--u2-color-mod(var(--color-success),720);--color-warning-light:--u2-color-mod(var(--color-warning),280);--color-warning-dark:--u2-color-mod(var(--color-warning),720);--color-error-light:--u2-color-mod(var(--color-error),280);--color-error-dark:--u2-color-mod(var(--color-error),720);--color-info-light:--u2-color-mod(var(--color-info),280);--color-info-dark:--u2-color-mod(var(--color-info),720);--color-bg:var(--color-surface,var(--color-surface));--color-bg-alt:var(--color-surface-variant,var(--color-surface-variant));--color-fg:var(--color-on-surface,var(--color-on-surface));--color-fg-muted:var(--color-on-surface-variant,var(--color-on-surface-variant));--touch-min:3rem;--btn-height-sm:2rem;--btn-height-md:var(--touch-min);--btn-height-lg:3.5rem;--btn-padding-x-sm:var(--space-md);--btn-padding-x-md:var(--space-lg);--btn-padding-x-lg:1.5rem;--btn-radius:var(--radius-md);--btn-font-weight:var(--font-weight-medium);--input-height-sm:2rem;--input-height-md:var(--touch-min);--input-height-lg:3.5rem;--state-opacity-hover:0.08;--state-opacity-press:0.12;--state-opacity-focus:0.12;--state-opacity-disabled:0.38;--state-opacity-drag:0.16;--input-padding-x:var(--space-md);--input-radius:var(--radius-md);--input-border-color:var(--color-border,var(--color-border));--input-focus-ring-color:var(--color-primary);--input-focus-ring-width:2px;--card-padding:var(--space-lg);--card-radius:var(--radius-lg);--card-shadow:var(--shadow-sm);--card-border-color:var(--color-border,var(--color-border));--modal-backdrop-bg:light-dark(rgb(0 0 0/0.5),rgb(0 0 0/0.7));--modal-bg:var(--color-surface,var(--color-surface));--modal-radius:var(--radius-xl);--modal-shadow:var(--shadow-xl);--modal-padding:1.5rem;--toast-font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,sans-serif);--toast-font-size:var(--font-size-base,1rem);--toast-font-weight:var(--font-weight-medium,500);--toast-letter-spacing:0.01em;--toast-line-height:1.4;--toast-white-space:nowrap;--toast-pointer-events:auto;--toast-user-select:none;--toast-cursor:default;--toast-opacity:0;--toast-transform:translateY(100%) scale(0.9);--toast-transition:opacity 160ms ease-out,transform 160ms cubic-bezier(0.16,1,0.3,1),background-color 100ms ease;--toast-text:var(--color-on-surface,var(--color-on-surface,light-dark(#ffffff,#000000)));--toast-bg:color-mix(in oklab,var(--color-surface-elevated,var(--color-surface-container-high,var(--color-surface,light-dark(#fafbfc,#1e293b)))) 90%,var(--color-on-surface,var(--color-on-surface,light-dark(#000000,#ffffff))));--toast-radius:var(--radius-lg);--toast-shadow:var(--shadow-lg);--toast-padding:var(--space-lg);--sidebar-width:280px;--sidebar-collapsed-width:64px;--nav-height:56px;--nav-height-compact:48px;--status-height:24px;--status-bg:var(--color-surface-elevated,var(--color-surface-container-high));--status-font-size:var(--text-xs);--shell-bg:var(--sv-surface-2,var(--color-surface));--shell-fg:var(--sv-on-surface,var(--color-on-surface));--shell-nav-bg:var(--sv-surface-2,var(--color-surface-container-high));--shell-nav-fg:var(--sv-on-surface,var(--color-on-surface));--shell-nav-border:var(--sv-outline-variant,var(--color-outline-variant));--shell-btn-hover:var(--sv-surface-2,var(--color-surface-container));--shell-btn-active-bg:color-mix(in oklab,var(--color-primary) 18%,var(--sv-surface-2,var(--color-surface)));--shell-btn-active-fg:var(--sv-on-surface,var(--color-on-surface));--shell-status-bg:var(--sv-surface-1,var(--color-surface-container-low));--shell-status-fg:var(--sv-on-surface,var(--color-on-surface));--faint-nav-bg:var(--color-surface-container-high);--faint-nav-border:var(--color-outline-variant);--faint-sidebar-bg:var(--color-surface-container-high);--env-status-fg:light-dark(#1c1c1e,#f5f5f7);--env-status-fg-muted:color-mix(in oklab,var(--env-status-fg) 78%,transparent);--env-launcher-fg:var(--wallpaper-contrast-color);--env-launcher-fg-shadow:color-mix(in oklab,var(--wallpaper-underlying-color) 88%,transparent);--env-launcher-fg-glow:color-mix(in oklab,var(--wallpaper-underlying-color) 48%,transparent);--error-color:var(--color-error,#f87171);--sv-bg:var(--sv-surface-2,var(--color-surface-container-low,light-dark(#eef1f6,#0f1318)));--sv-fg:var(--sv-on-surface,var(--color-on-surface,light-dark(#12151a,#e8edf2)));--sv-muted:var(--sv-on-surface-variant,var(--color-on-surface-variant,light-dark(#5c6570,#a8b0bc)));--sv-outline:var(--sv-outline-variant,var(--color-outline-variant,light-dark(#c5cdd8,#3d4755)));--sv-surface-1:var(--color-surface-container-low,light-dark(#ffffff,#171c24));--sv-surface-2:var(--color-surface-container,light-dark(#f4f6fa,#1c232d));--sv-primary:var(--base-color,var(--color-primary,#5a9ec8));--sv-danger:var(--color-error,#d32f2f);--vh-bg:var(--color-surface,light-dark(#eef1f6,#0f1318));--vh-fg:var(--color-on-surface,light-dark(#12151a,#e8edf2));--vh-muted:var(--color-on-surface-variant,light-dark(#5c6570,#a8b0bc));--vh-primary:var(--color-primary,#007acc);--vh-danger:var(--color-error,#d32f2f);--vh-on-primary:var(--color-on-primary,#ffffff);--vh-item-bg:var(--color-surface-container-low,light-dark(#e0e5ee,#0a0d12));--view-fg-muted:color-mix(in oklab,var(--color-on-surface,#ccc) 72%,transparent);--view-hover-bg:color-mix(in oklab,var(--color-primary,#3794ff) 12%,transparent);--view-selected-bg:color-mix(in oklab,var(--color-primary,#3794ff) 18%,transparent);--view-selected-border:var(--color-primary,#3794ff)}@supports (color:color-mix(in lch,red,blue)){:host,:root,:scope{--view-border:color-mix(in oklab,var(--color-outline-variant,#888) 45%,transparent)}}@media (prefers-color-scheme:dark){:host:not([data-theme=light]):not([data-theme=dark]),:root:not([data-theme=light]):not([data-theme=dark]){color-scheme:dark;--base-color:var(--color-primary);--base-color-neutralized:color-mix(in oklab,var(--base-color) 60%,gray);--wallpaper-underlying-color:--u2-color-mod(var(--base-color-neutralized),940);--wallpaper-contrast-color:--u2-color-mod(var(--base-color-neutralized),70);--wf-md-primary:var(--color-primary);--wf-md-seed:var(--base-color);--color-on-primary:--u2-color-mod(var(--base-color),920);--color-secondary:--u2-color-mod(var(--base-color),680);--color-on-secondary:--u2-color-mod(var(--base-color),920);--color-tertiary:--u2-color-mod(var(--base-color),700);--color-on-tertiary:--u2-color-mod(var(--base-color),920);--color-error:#f87171;--color-on-error:--u2-color-mod(var(--color-error),920);--color-success:#66bb6a;--color-warning:#ffa726;--color-info:#42a5f5;--color-background:--u2-color-mod(var(--base-color),940);--color-on-background:--u2-color-mod(var(--base-color),100);--color-surface:--u2-color-mod(var(--base-color),940);--color-on-surface:--u2-color-mod(var(--base-color),100);--color-surface-variant:--u2-color-mod(var(--base-color),840);--color-on-surface-variant:--u2-color-mod(var(--base-color),280);--color-outline:--u2-color-mod(var(--base-color),720);--color-outline-variant:--u2-color-mod(var(--base-color),640);--color-surface-container-lowest:--u2-color-mod(var(--base-color),920);--color-surface-container-low:--u2-color-mod(var(--base-color),940);--color-surface-container:--u2-color-mod(var(--base-color),960);--color-surface-container-high:--u2-color-mod(var(--base-color),980);--color-surface-container-highest:--u2-color-mod(var(--base-color),1000);--color-primary-container:--u2-color-mod(var(--base-color),820);--color-on-primary-container:--u2-color-mod(var(--base-color),100);--color-border:color-mix(in oklab,var(--color-outline-variant) 70%,transparent);--color-bg:var(--color-background);--color-text:var(--color-on-background);--color-fg:var(--color-on-surface);--on-surface-color:var(--color-on-surface);--surface-color:var(--color-surface);--fl-surface:var(--color-surface);--fl-on-surface:var(--color-on-surface);--fl-primary:var(--color-primary);--fl-on-primary:var(--color-on-primary);--fl-secondary:var(--color-secondary);--fl-on-secondary:var(--color-on-secondary);--fl-shadow-xl:var(--shadow-xl);--on-surface-variant:var(--color-on-surface-variant);--wf-md-surface:var(--color-surface);--wf-md-on-surface:var(--color-on-surface);--wf-md-on-surface-variant:var(--color-on-surface-variant);--wf-md-surf-container:var(--color-surface-container);--wf-md-surf-container-low:var(--color-surface-container-low);--wf-md-surf-container-high:var(--color-surface-container-high);--wf-md-outline-variant:var(--color-outline-variant);--md3-primary-container:var(--color-primary-container);--md-primary-container:var(--color-primary-container)}}:host[data-theme=light],:root[data-theme=light],[data-theme=light]{color-scheme:light only;--base-color:var(--color-primary);--base-color-neutralized:color-mix(in oklab,var(--base-color) 60%,gray);--wallpaper-underlying-color:--u2-color-mod(var(--base-color-neutralized),940);--wallpaper-contrast-color:--u2-color-mod(var(--base-color-neutralized),70);--wf-md-primary:var(--color-primary);--wf-md-seed:var(--base-color);--color-on-primary:--u2-color-mod(var(--base-color),40);--color-secondary:--u2-color-mod(var(--base-color),420);--color-on-secondary:--u2-color-mod(var(--base-color),40);--color-tertiary:--u2-color-mod(var(--base-color),400);--color-on-tertiary:--u2-color-mod(var(--base-color),40);--color-error:#ef4444;--color-on-error:--u2-color-mod(var(--color-error),40);--color-success:#4caf50;--color-warning:#ff9800;--color-info:#2196f3;--color-background:--u2-color-mod(var(--base-color),60);--color-on-background:--u2-color-mod(var(--base-color),900);--color-surface:--u2-color-mod(var(--base-color),60);--color-on-surface:--u2-color-mod(var(--base-color),900);--color-surface-variant:--u2-color-mod(var(--base-color),160);--color-on-surface-variant:--u2-color-mod(var(--base-color),700);--color-outline:--u2-color-mod(var(--base-color),300);--color-outline-variant:--u2-color-mod(var(--base-color),400);--color-surface-container-lowest:--u2-color-mod(var(--base-color),40);--color-surface-container-low:--u2-color-mod(var(--base-color),30);--color-surface-container:--u2-color-mod(var(--base-color),20);--color-surface-container-high:--u2-color-mod(var(--base-color),5);--color-surface-container-highest:--u2-color-mod(var(--base-color),2);--color-primary-container:--u2-color-mod(var(--base-color),160);--color-on-primary-container:--u2-color-mod(var(--base-color),900);--color-border:color-mix(in oklab,var(--color-outline-variant) 75%,transparent);--color-bg:var(--color-background);--color-text:var(--color-on-background);--color-fg:var(--color-on-surface);--on-surface-color:var(--color-on-surface);--surface-color:var(--color-surface);--fl-surface:var(--color-surface);--fl-on-surface:var(--color-on-surface);--fl-primary:var(--color-primary);--fl-on-primary:var(--color-on-primary);--fl-secondary:var(--color-secondary);--fl-on-secondary:var(--color-on-secondary);--fl-shadow-xl:var(--shadow-xl);--on-surface-variant:var(--color-on-surface-variant);--wf-md-surface:var(--color-surface);--wf-md-on-surface:var(--color-on-surface);--wf-md-on-surface-variant:var(--color-on-surface-variant);--wf-md-surf-container:var(--color-surface-container);--wf-md-surf-container-low:var(--color-surface-container-low);--wf-md-surf-container-high:var(--color-surface-container-high);--wf-md-outline-variant:var(--color-outline-variant);--md3-primary-container:var(--color-primary-container);--md-primary-container:var(--color-primary-container)}:host[data-theme=dark],:root[data-theme=dark],[data-theme=dark]{color-scheme:dark only;--base-color:var(--color-primary);--base-color-neutralized:color-mix(in oklab,var(--base-color) 60%,gray);--wallpaper-underlying-color:--u2-color-mod(var(--base-color-neutralized),940);--wallpaper-contrast-color:--u2-color-mod(var(--base-color-neutralized),70);--wf-md-primary:var(--color-primary);--wf-md-seed:var(--base-color);--color-on-primary:--u2-color-mod(var(--base-color),920);--color-secondary:--u2-color-mod(var(--base-color),680);--color-on-secondary:--u2-color-mod(var(--base-color),920);--color-tertiary:--u2-color-mod(var(--base-color),700);--color-on-tertiary:--u2-color-mod(var(--base-color),920);--color-error:#f87171;--color-on-error:--u2-color-mod(var(--color-error),920);--color-success:#66bb6a;--color-warning:#ffa726;--color-info:#42a5f5;--color-background:--u2-color-mod(var(--base-color),940);--color-on-background:--u2-color-mod(var(--base-color),100);--color-surface:--u2-color-mod(var(--base-color),940);--color-on-surface:--u2-color-mod(var(--base-color),100);--color-surface-variant:--u2-color-mod(var(--base-color),840);--color-on-surface-variant:--u2-color-mod(var(--base-color),280);--color-outline:--u2-color-mod(var(--base-color),720);--color-outline-variant:--u2-color-mod(var(--base-color),640);--color-surface-container-lowest:--u2-color-mod(var(--base-color),920);--color-surface-container-low:--u2-color-mod(var(--base-color),940);--color-surface-container:--u2-color-mod(var(--base-color),960);--color-surface-container-high:--u2-color-mod(var(--base-color),980);--color-surface-container-highest:--u2-color-mod(var(--base-color),1000);--color-primary-container:--u2-color-mod(var(--base-color),820);--color-on-primary-container:--u2-color-mod(var(--base-color),100);--color-border:color-mix(in oklab,var(--color-outline-variant) 70%,transparent);--color-bg:var(--color-background);--color-text:var(--color-on-background);--color-fg:var(--color-on-surface);--on-surface-color:var(--color-on-surface);--surface-color:var(--color-surface);--fl-surface:var(--color-surface);--fl-on-surface:var(--color-on-surface);--fl-primary:var(--color-primary);--fl-on-primary:var(--color-on-primary);--fl-secondary:var(--color-secondary);--fl-on-secondary:var(--color-on-secondary);--fl-shadow-xl:var(--shadow-xl);--on-surface-variant:var(--color-on-surface-variant);--wf-md-surface:var(--color-surface);--wf-md-on-surface:var(--color-on-surface);--wf-md-on-surface-variant:var(--color-on-surface-variant);--wf-md-surf-container:var(--color-surface-container);--wf-md-surf-container-low:var(--color-surface-container-low);--wf-md-surf-container-high:var(--color-surface-container-high);--wf-md-outline-variant:var(--color-outline-variant);--md3-primary-container:var(--color-primary-container);--md-primary-container:var(--color-primary-container)}:root[data-scheme=auto]:not([data-theme=light]):not([data-theme=dark]),:root[data-scheme=system]:not([data-theme=light]):not([data-theme=dark]){color-scheme:light dark}@media (prefers-reduced-motion:reduce){:root{--transition-fast:0ms;--transition-normal:0ms;--transition-slow:0ms;--motion-fast:0ms;--motion-normal:0ms;--motion-slow:0ms;--duration-fast:0ms;--duration-normal:0ms;--duration-slow:0ms}}@media (prefers-contrast:high){:root{--color-border:var(--color-border,var(--color-outline));--color-border-hover:color-mix(in oklab,var(--color-border,var(--color-outline)) 80%,var(--color-on-surface,var(--color-on-surface)));--color-text-secondary:var(--color-on-surface,var(--color-on-surface));--color-text-muted:var(--color-on-surface-variant,var(--color-on-surface-variant))}}@media print{:root{--view-padding:0;--view-content-max-width:100%;--view-bg:white;--view-fg:black;--view-heading-color:black;--view-link-color:black}:root:has([data-view=viewer]){--view-code-bg:#f5f5f5;--view-code-fg:black;--view-blockquote-bg:#f5f5f5}}}@layer components{ui-icon{--icon-color:currentColor;--icon-size:1rem;--icon-padding:0.125rem;aspect-ratio:1;color:var(--icon-color);display:inline-grid;margin-inline-end:.125rem;place-content:center;place-items:center;vertical-align:middle}ui-icon:last-child{margin-inline-end:0}}@property --client-x{initial-value:0;syntax:\"<number>\";inherits:true}@property --client-y{initial-value:0;syntax:\"<number>\";inherits:true}@property --page-x{initial-value:0;syntax:\"<number>\";inherits:true}@property --page-y{initial-value:0;syntax:\"<number>\";inherits:true}@property --sp-x{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --sp-y{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --ds-x{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --ds-y{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --rx{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --ry{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --rs-x{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --rs-y{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --limit-shift-x{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --limit-shift-y{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --limit-drag-x{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --limit-drag-y{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --bound-inline-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --bound-block-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --inline-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --block-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --initial-inline-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --initial-block-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --scroll-coef{syntax:\"<number>\";initial-value:1;inherits:true}@property --scroll-size{syntax:\"<number>\";initial-value:0;inherits:true}@property --content-size{syntax:\"<number>\";initial-value:0;inherits:true}@property --max-size{syntax:\"<length-percentage>\";initial-value:0px;inherits:true}";
//#endregion
//#region ../../modules/projects/veela.css/src/scss/index.scss?inline
var scss_default = "@function --hsv(--src-color <color>) returns <color>{result:hsl(from var(--src-color,black) h calc(calc((calc(l / 100) - calc(calc(l / 100) * (1 - calc(s / 100) / 2))) / clamp(.0001, min(calc(calc(l / 100) * (1 - calc(s / 100) / 2)), calc(1 - calc(calc(l / 100) * (1 - calc(s / 100) / 2)))), 1)) * 100) calc(calc(calc(l / 100) * (1 - calc(s / 100) / 2)) * 100)/alpha)}@property --color-primary{syntax:\"<color>\";inherits:true;initial-value:#5a9ec8}@property --base-color{syntax:\"<color>\";inherits:true;initial-value:#5a9ec8}@property --wallpaper-underlying-color{syntax:\"<color>\";inherits:true;initial-value:#16161a}@property --wallpaper-contrast-color{syntax:\"<color>\";inherits:true;initial-value:#f7f7f8}@property --color-secondary{syntax:\"<color>\";inherits:true;initial-value:#6b8cff}@property --color-tertiary{syntax:\"<color>\";inherits:true;initial-value:#8aa0ff}@property --color-error{syntax:\"<color>\";inherits:true;initial-value:#ef4444}@property --color-success{syntax:\"<color>\";inherits:true;initial-value:#4caf50}@property --color-warning{syntax:\"<color>\";inherits:true;initial-value:#ff9800}@property --color-info{syntax:\"<color>\";inherits:true;initial-value:#2196f3}@function --u2-color-mod(--base-color <color>, --index <number> : 550) returns <color>{--i:clamp(0,var(--index),1000);--pivot:550;--white-distance:clamp(0,calc((var(--pivot) - var(--i)) / var(--pivot)),1);--black-distance:clamp(0,calc((var(--i) - var(--pivot)) / (1000 - var(--pivot))),1);--to-white:pow(var(--white-distance),1.15);--to-black:pow(var(--black-distance),1.08);--center-left:clamp(0,calc(var(--i) / var(--pivot)),1);--center-right:clamp(0,calc((1000 - var(--i)) / (1000 - var(--pivot))),1);--chroma-shape:sqrt(min(var(--center-left),var(--center-right)));--chroma-scale:calc(0.08 + 0.92 * var(--chroma-shape));result:oklch(from var(--base-color) calc(l + (.985 - l) * var(--to-white) + (.16 - l) * var(--to-black)) calc(c * var(--chroma-scale)) h)}@layer tokens, base, layout, components, utilities, theme, overrides, print;@layer tokens{:host,:root,:scope{--color-primary:#5a9ec8;color-scheme:light dark;--base-color:var(--color-primary);--base-color-neutralized:color-mix(in oklab,var(--base-color) 60%,gray);--wallpaper-underlying-color:--u2-color-mod(var(--base-color-neutralized),940);--wallpaper-contrast-color:--u2-color-mod(var(--base-color-neutralized),70);--wf-md-primary:var(--color-primary);--wf-md-seed:var(--base-color);--color-on-primary:--u2-color-mod(var(--base-color),40);--color-secondary:--u2-color-mod(var(--base-color),420);--color-on-secondary:--u2-color-mod(var(--base-color),40);--color-tertiary:--u2-color-mod(var(--base-color),400);--color-on-tertiary:--u2-color-mod(var(--base-color),40);--color-error:#ef4444;--color-on-error:--u2-color-mod(var(--color-error),40);--color-success:#4caf50;--color-warning:#ff9800;--color-info:#2196f3;--color-background:--u2-color-mod(var(--base-color),60);--color-on-background:--u2-color-mod(var(--base-color),900);--color-surface:--u2-color-mod(var(--base-color),60);--color-on-surface:--u2-color-mod(var(--base-color),900);--color-surface-variant:--u2-color-mod(var(--base-color),160);--color-on-surface-variant:--u2-color-mod(var(--base-color),700);--color-outline:--u2-color-mod(var(--base-color),300);--color-outline-variant:--u2-color-mod(var(--base-color),400);--color-surface-container-lowest:--u2-color-mod(var(--base-color),40);--color-surface-container-low:--u2-color-mod(var(--base-color),30);--color-surface-container:--u2-color-mod(var(--base-color),20);--color-surface-container-high:--u2-color-mod(var(--base-color),5);--color-surface-container-highest:--u2-color-mod(var(--base-color),2);--color-primary-container:--u2-color-mod(var(--base-color),160);--color-on-primary-container:--u2-color-mod(var(--base-color),900);--color-border:color-mix(in oklab,var(--color-outline-variant) 75%,transparent);--color-bg:var(--color-background);--color-text:var(--color-on-background);--color-fg:var(--color-on-surface);--on-surface-color:var(--color-on-surface);--surface-color:var(--color-surface);--fl-surface:var(--color-surface);--fl-on-surface:var(--color-on-surface);--fl-primary:var(--color-primary);--fl-on-primary:var(--color-on-primary);--fl-secondary:var(--color-secondary);--fl-on-secondary:var(--color-on-secondary);--fl-shadow-xl:var(--shadow-xl);--on-surface-variant:var(--color-on-surface-variant);--wf-md-surface:var(--color-surface);--wf-md-on-surface:var(--color-on-surface);--wf-md-on-surface-variant:var(--color-on-surface-variant);--wf-md-surf-container:var(--color-surface-container);--wf-md-surf-container-low:var(--color-surface-container-low);--wf-md-surf-container-high:var(--color-surface-container-high);--wf-md-outline-variant:var(--color-outline-variant);--md3-primary-container:var(--color-primary-container);--md-primary-container:var(--color-primary-container);--space-2xs:0.125rem;--space-xs:0.25rem;--space-sm:0.5rem;--space-md:0.75rem;--space-lg:1rem;--space-xl:1.25rem;--space-2xl:1.5rem;--padding-xs:var(--space-xs);--padding-sm:var(--space-sm);--padding-md:var(--space-md);--padding-lg:var(--space-lg);--padding-xl:var(--space-xl);--padding-2xl:var(--space-2xl);--padding-3xl:2rem;--padding-4xl:2.5rem;--padding-5xl:3rem;--padding-6xl:4rem;--padding-7xl:5rem;--padding-8xl:6rem;--padding-9xl:8rem;--gap-xs:var(--space-xs);--gap-sm:var(--space-sm);--gap-md:var(--space-md);--gap-lg:var(--space-lg);--gap-xl:var(--space-xl);--gap-2xl:var(--space-2xl);--fl-ui-gap:var(--space-md);--radius-none:0;--radius-xs:0.25rem;--radius-sm:0.25rem;--radius-default:0.25rem;--radius-md:0.5rem;--radius-lg:0.75rem;--radius-xl:1rem;--radius-2xl:1.75rem;--radius-3xl:2rem;--radius-full:9999px;--fl-ui-radius:var(--radius-md);--border-radius:var(--radius-md);--shape-extra-small:var(--radius-xs);--shape-small:var(--radius-md);--shape-medium:var(--radius-lg);--shape-large:var(--radius-xl);--shape-extra-large:var(--radius-2xl);--shape-full:var(--radius-full);--elev-0:none;--elev-1:0 1px 1px rgba(0,0,0,0.06),0 1px 3px rgba(0,0,0,0.1);--elev-2:0 2px 6px rgba(0,0,0,0.12),0 8px 24px rgba(0,0,0,0.08);--elev-3:0 6px 16px rgba(0,0,0,0.14),0 18px 48px rgba(0,0,0,0.1);--shadow-xs:0 1px 2px rgba(0,0,0,0.05);--shadow-sm:0 1px 3px rgba(0,0,0,0.1);--shadow-md:0 4px 6px rgba(0,0,0,0.1);--shadow-lg:0 10px 15px rgba(0,0,0,0.1);--shadow-xl:0 20px 25px rgba(0,0,0,0.1);--shadow-2xl:0 25px 50px rgba(0,0,0,0.1);--shadow-inset:inset 0 2px 4px rgba(0,0,0,0.06);--shadow-inset-strong:inset 0 4px 8px rgba(0,0,0,0.12);--shadow-none:0 0 #0000;--text-xs:0.8rem;--text-sm:0.9rem;--text-base:1rem;--text-lg:1.1rem;--text-xl:1.25rem;--text-2xl:1.6rem;--text-3xl:2rem;--font-xs:var(--text-xs);--font-sm:var(--text-sm);--font-base:var(--text-base);--font-md:var(--text-base);--font-lg:var(--text-lg);--font-xl:var(--text-xl);--font-2xl:var(--text-2xl);--ui-icon-size:1.25rem;--ui-icon-padding:0px;--ui-icon-tile-padding:0.45rem;--ui-window-icon-size:0.95rem;--ui-explorer-icon-size:1.5rem;--ui-explorer-icon-track:2rem;--ui-explorer-action-icon-size:1.15rem;--ui-explorer-row-height:3.25rem;--icon-size-sm:var(--ui-icon-size);--icon-size-md:var(--ui-icon-size);--icon-size-lg:var(--ui-explorer-icon-size);--font-size-xs:0.75rem;--font-size-sm:0.875rem;--font-size-base:1rem;--font-size-lg:1.125rem;--font-size-xl:1.25rem;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--font-family:\"Roboto\",ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif;--font-family-base:var(--font-family);--font-family-mono:\"Roboto Mono\",\"SF Mono\",Monaco,Inconsolata,\"Fira Code\",monospace;--font-sans:var(--font-family);--font-mono:var(--font-family-mono);--leading-tight:1.2;--leading-normal:1.5;--leading-relaxed:1.8;--line-height:var(--leading-normal);--ease-emphasized:cubic-bezier(0.2,0,0,1);--ease-expressive:cubic-bezier(0.34,1.25,0.64,1);--duration-fast:140ms;--duration-normal:220ms;--duration-slow:360ms;--transition-fast:var(--duration-fast) var(--ease-emphasized);--transition-normal:var(--duration-normal) var(--ease-emphasized);--transition-slow:var(--duration-slow) var(--ease-emphasized);--motion-fast:var(--transition-fast);--motion-normal:var(--transition-normal);--motion-slow:var(--transition-slow);--ease-out:cubic-bezier(0,0,0.2,1);--ease-in:cubic-bezier(0.4,0,1,1);--ease-in-out:cubic-bezier(0.4,0,0.2,1);--focus-ring:0 0 0 3px color-mix(in oklab,var(--color-primary) 35%,transparent);--z-base:0;--z-dropdown:100;--z-sticky:200;--z-fixed:300;--z-modal-backdrop:400;--z-modal:500;--z-popover:600;--z-tooltip:700;--z-toast:800;--z-max:9999;--view-bg:var(--color-container);--view-fg:var(--color-on-surface);--view-border:var(--color-outline-variant);--view-input-bg:light-dark(--u2-color-mod(var(--base-color,var(--color-primary)),40),var(--color-surface-container-high));--view-files-bg:var(--color-surface-container-low);--view-file-bg:var(--color-surface-container-lowest,var(--color-surface-container-low));--view-results-bg:var(--color-surface-container-low);--view-result-bg:var(--color-surface-container-lowest,var(--color-surface-container-low));--color-surface-elevated:var(--color-surface-container);--color-surface-hover:var(--color-surface-container-low);--color-surface-active:var(--color-surface-container-high);--color-on-surface-muted:var(--color-on-surface-variant);--color-background-alt:var(--color-surface-variant);--color-primary-hover:light-dark(--u2-color-mod(var(--base-color,var(--color-primary)),620),--u2-color-mod(var(--base-color,var(--color-primary)),480));--color-primary-active:light-dark(--u2-color-mod(var(--base-color,var(--color-primary)),700),--u2-color-mod(var(--base-color,var(--color-primary)),400));--color-accent:var(--color-secondary);--color-accent-hover:light-dark(--u2-color-mod(var(--base-color,var(--color-primary)),500),--u2-color-mod(var(--base-color,var(--color-primary)),600));--color-on-accent:var(--color-on-secondary);--color-border-hover:var(--color-outline-variant);--color-border-strong:var(--color-outline);--color-border-focus:var(--color-primary);--color-text:var(--color-on-surface);--color-text-secondary:var(--color-on-surface-variant);--color-text-muted:color-mix(in oklab,var(--color-on-surface) 50%,var(--color-surface));--color-text-disabled:color-mix(in oklab,var(--color-on-surface) 38%,var(--color-surface));--color-text-inverse:var(--color-on-primary);--color-link:var(--color-primary);--color-link-hover:var(--color-primary-hover);--color-success-light:--u2-color-mod(var(--color-success),280);--color-success-dark:--u2-color-mod(var(--color-success),720);--color-warning-light:--u2-color-mod(var(--color-warning),280);--color-warning-dark:--u2-color-mod(var(--color-warning),720);--color-error-light:--u2-color-mod(var(--color-error),280);--color-error-dark:--u2-color-mod(var(--color-error),720);--color-info-light:--u2-color-mod(var(--color-info),280);--color-info-dark:--u2-color-mod(var(--color-info),720);--color-bg:var(--color-surface,var(--color-surface));--color-bg-alt:var(--color-surface-variant,var(--color-surface-variant));--color-fg:var(--color-on-surface,var(--color-on-surface));--color-fg-muted:var(--color-on-surface-variant,var(--color-on-surface-variant));--touch-min:3rem;--btn-height-sm:2rem;--btn-height-md:var(--touch-min);--btn-height-lg:3.5rem;--btn-padding-x-sm:var(--space-md);--btn-padding-x-md:var(--space-lg);--btn-padding-x-lg:1.5rem;--btn-radius:var(--radius-md);--btn-font-weight:var(--font-weight-medium);--input-height-sm:2rem;--input-height-md:var(--touch-min);--input-height-lg:3.5rem;--state-opacity-hover:0.08;--state-opacity-press:0.12;--state-opacity-focus:0.12;--state-opacity-disabled:0.38;--state-opacity-drag:0.16;--input-padding-x:var(--space-md);--input-radius:var(--radius-md);--input-border-color:var(--color-border,var(--color-border));--input-focus-ring-color:var(--color-primary);--input-focus-ring-width:2px;--card-padding:var(--space-lg);--card-radius:var(--radius-lg);--card-shadow:var(--shadow-sm);--card-border-color:var(--color-border,var(--color-border));--modal-backdrop-bg:light-dark(rgb(0 0 0/0.5),rgb(0 0 0/0.7));--modal-bg:var(--color-surface,var(--color-surface));--modal-radius:var(--radius-xl);--modal-shadow:var(--shadow-xl);--modal-padding:1.5rem;--toast-font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,sans-serif);--toast-font-size:var(--font-size-base,1rem);--toast-font-weight:var(--font-weight-medium,500);--toast-letter-spacing:0.01em;--toast-line-height:1.4;--toast-white-space:nowrap;--toast-pointer-events:auto;--toast-user-select:none;--toast-cursor:default;--toast-opacity:0;--toast-transform:translateY(100%) scale(0.9);--toast-transition:opacity 160ms ease-out,transform 160ms cubic-bezier(0.16,1,0.3,1),background-color 100ms ease;--toast-text:var(--color-on-surface,var(--color-on-surface,light-dark(#ffffff,#000000)));--toast-bg:color-mix(in oklab,var(--color-surface-elevated,var(--color-surface-container-high,var(--color-surface,light-dark(#fafbfc,#1e293b)))) 90%,var(--color-on-surface,var(--color-on-surface,light-dark(#000000,#ffffff))));--toast-radius:var(--radius-lg);--toast-shadow:var(--shadow-lg);--toast-padding:var(--space-lg);--sidebar-width:280px;--sidebar-collapsed-width:64px;--nav-height:56px;--nav-height-compact:48px;--status-height:24px;--status-bg:var(--color-surface-elevated,var(--color-surface-container-high));--status-font-size:var(--text-xs);--shell-bg:var(--sv-surface-2,var(--color-surface));--shell-fg:var(--sv-on-surface,var(--color-on-surface));--shell-nav-bg:var(--sv-surface-2,var(--color-surface-container-high));--shell-nav-fg:var(--sv-on-surface,var(--color-on-surface));--shell-nav-border:var(--sv-outline-variant,var(--color-outline-variant));--shell-btn-hover:var(--sv-surface-2,var(--color-surface-container));--shell-btn-active-bg:color-mix(in oklab,var(--color-primary) 18%,var(--sv-surface-2,var(--color-surface)));--shell-btn-active-fg:var(--sv-on-surface,var(--color-on-surface));--shell-status-bg:var(--sv-surface-1,var(--color-surface-container-low));--shell-status-fg:var(--sv-on-surface,var(--color-on-surface));--faint-nav-bg:var(--color-surface-container-high);--faint-nav-border:var(--color-outline-variant);--faint-sidebar-bg:var(--color-surface-container-high);--env-status-fg:light-dark(#1c1c1e,#f5f5f7);--env-status-fg-muted:color-mix(in oklab,var(--env-status-fg) 78%,transparent);--env-launcher-fg:var(--wallpaper-contrast-color);--env-launcher-fg-shadow:color-mix(in oklab,var(--wallpaper-underlying-color) 88%,transparent);--env-launcher-fg-glow:color-mix(in oklab,var(--wallpaper-underlying-color) 48%,transparent);--error-color:var(--color-error,#f87171);--sv-bg:var(--sv-surface-2,var(--color-surface-container-low,light-dark(#eef1f6,#0f1318)));--sv-fg:var(--sv-on-surface,var(--color-on-surface,light-dark(#12151a,#e8edf2)));--sv-muted:var(--sv-on-surface-variant,var(--color-on-surface-variant,light-dark(#5c6570,#a8b0bc)));--sv-outline:var(--sv-outline-variant,var(--color-outline-variant,light-dark(#c5cdd8,#3d4755)));--sv-surface-1:var(--color-surface-container-low,light-dark(#ffffff,#171c24));--sv-surface-2:var(--color-surface-container,light-dark(#f4f6fa,#1c232d));--sv-primary:var(--base-color,var(--color-primary,#5a9ec8));--sv-danger:var(--color-error,#d32f2f);--vh-bg:var(--color-surface,light-dark(#eef1f6,#0f1318));--vh-fg:var(--color-on-surface,light-dark(#12151a,#e8edf2));--vh-muted:var(--color-on-surface-variant,light-dark(#5c6570,#a8b0bc));--vh-primary:var(--color-primary,#007acc);--vh-danger:var(--color-error,#d32f2f);--vh-on-primary:var(--color-on-primary,#ffffff);--vh-item-bg:var(--color-surface-container-low,light-dark(#e0e5ee,#0a0d12));--view-fg-muted:color-mix(in oklab,var(--color-on-surface,#ccc) 72%,transparent);--view-hover-bg:color-mix(in oklab,var(--color-primary,#3794ff) 12%,transparent);--view-selected-bg:color-mix(in oklab,var(--color-primary,#3794ff) 18%,transparent);--view-selected-border:var(--color-primary,#3794ff)}@supports (color:color-mix(in lch,red,blue)){:host,:root,:scope{--view-border:color-mix(in oklab,var(--color-outline-variant,#888) 45%,transparent)}}@media (prefers-color-scheme:dark){:host:not([data-theme=light]):not([data-theme=dark]),:root:not([data-theme=light]):not([data-theme=dark]){color-scheme:dark;--base-color:var(--color-primary);--base-color-neutralized:color-mix(in oklab,var(--base-color) 60%,gray);--wallpaper-underlying-color:--u2-color-mod(var(--base-color-neutralized),940);--wallpaper-contrast-color:--u2-color-mod(var(--base-color-neutralized),70);--wf-md-primary:var(--color-primary);--wf-md-seed:var(--base-color);--color-on-primary:--u2-color-mod(var(--base-color),920);--color-secondary:--u2-color-mod(var(--base-color),680);--color-on-secondary:--u2-color-mod(var(--base-color),920);--color-tertiary:--u2-color-mod(var(--base-color),700);--color-on-tertiary:--u2-color-mod(var(--base-color),920);--color-error:#f87171;--color-on-error:--u2-color-mod(var(--color-error),920);--color-success:#66bb6a;--color-warning:#ffa726;--color-info:#42a5f5;--color-background:--u2-color-mod(var(--base-color),940);--color-on-background:--u2-color-mod(var(--base-color),100);--color-surface:--u2-color-mod(var(--base-color),940);--color-on-surface:--u2-color-mod(var(--base-color),100);--color-surface-variant:--u2-color-mod(var(--base-color),840);--color-on-surface-variant:--u2-color-mod(var(--base-color),280);--color-outline:--u2-color-mod(var(--base-color),720);--color-outline-variant:--u2-color-mod(var(--base-color),640);--color-surface-container-lowest:--u2-color-mod(var(--base-color),920);--color-surface-container-low:--u2-color-mod(var(--base-color),940);--color-surface-container:--u2-color-mod(var(--base-color),960);--color-surface-container-high:--u2-color-mod(var(--base-color),980);--color-surface-container-highest:--u2-color-mod(var(--base-color),1000);--color-primary-container:--u2-color-mod(var(--base-color),820);--color-on-primary-container:--u2-color-mod(var(--base-color),100);--color-border:color-mix(in oklab,var(--color-outline-variant) 70%,transparent);--color-bg:var(--color-background);--color-text:var(--color-on-background);--color-fg:var(--color-on-surface);--on-surface-color:var(--color-on-surface);--surface-color:var(--color-surface);--fl-surface:var(--color-surface);--fl-on-surface:var(--color-on-surface);--fl-primary:var(--color-primary);--fl-on-primary:var(--color-on-primary);--fl-secondary:var(--color-secondary);--fl-on-secondary:var(--color-on-secondary);--fl-shadow-xl:var(--shadow-xl);--on-surface-variant:var(--color-on-surface-variant);--wf-md-surface:var(--color-surface);--wf-md-on-surface:var(--color-on-surface);--wf-md-on-surface-variant:var(--color-on-surface-variant);--wf-md-surf-container:var(--color-surface-container);--wf-md-surf-container-low:var(--color-surface-container-low);--wf-md-surf-container-high:var(--color-surface-container-high);--wf-md-outline-variant:var(--color-outline-variant);--md3-primary-container:var(--color-primary-container);--md-primary-container:var(--color-primary-container)}}:host[data-theme=light],:root[data-theme=light],[data-theme=light]{color-scheme:light only;--base-color:var(--color-primary);--base-color-neutralized:color-mix(in oklab,var(--base-color) 60%,gray);--wallpaper-underlying-color:--u2-color-mod(var(--base-color-neutralized),940);--wallpaper-contrast-color:--u2-color-mod(var(--base-color-neutralized),70);--wf-md-primary:var(--color-primary);--wf-md-seed:var(--base-color);--color-on-primary:--u2-color-mod(var(--base-color),40);--color-secondary:--u2-color-mod(var(--base-color),420);--color-on-secondary:--u2-color-mod(var(--base-color),40);--color-tertiary:--u2-color-mod(var(--base-color),400);--color-on-tertiary:--u2-color-mod(var(--base-color),40);--color-error:#ef4444;--color-on-error:--u2-color-mod(var(--color-error),40);--color-success:#4caf50;--color-warning:#ff9800;--color-info:#2196f3;--color-background:--u2-color-mod(var(--base-color),60);--color-on-background:--u2-color-mod(var(--base-color),900);--color-surface:--u2-color-mod(var(--base-color),60);--color-on-surface:--u2-color-mod(var(--base-color),900);--color-surface-variant:--u2-color-mod(var(--base-color),160);--color-on-surface-variant:--u2-color-mod(var(--base-color),700);--color-outline:--u2-color-mod(var(--base-color),300);--color-outline-variant:--u2-color-mod(var(--base-color),400);--color-surface-container-lowest:--u2-color-mod(var(--base-color),40);--color-surface-container-low:--u2-color-mod(var(--base-color),30);--color-surface-container:--u2-color-mod(var(--base-color),20);--color-surface-container-high:--u2-color-mod(var(--base-color),5);--color-surface-container-highest:--u2-color-mod(var(--base-color),2);--color-primary-container:--u2-color-mod(var(--base-color),160);--color-on-primary-container:--u2-color-mod(var(--base-color),900);--color-border:color-mix(in oklab,var(--color-outline-variant) 75%,transparent);--color-bg:var(--color-background);--color-text:var(--color-on-background);--color-fg:var(--color-on-surface);--on-surface-color:var(--color-on-surface);--surface-color:var(--color-surface);--fl-surface:var(--color-surface);--fl-on-surface:var(--color-on-surface);--fl-primary:var(--color-primary);--fl-on-primary:var(--color-on-primary);--fl-secondary:var(--color-secondary);--fl-on-secondary:var(--color-on-secondary);--fl-shadow-xl:var(--shadow-xl);--on-surface-variant:var(--color-on-surface-variant);--wf-md-surface:var(--color-surface);--wf-md-on-surface:var(--color-on-surface);--wf-md-on-surface-variant:var(--color-on-surface-variant);--wf-md-surf-container:var(--color-surface-container);--wf-md-surf-container-low:var(--color-surface-container-low);--wf-md-surf-container-high:var(--color-surface-container-high);--wf-md-outline-variant:var(--color-outline-variant);--md3-primary-container:var(--color-primary-container);--md-primary-container:var(--color-primary-container)}:host[data-theme=dark],:root[data-theme=dark],[data-theme=dark]{color-scheme:dark only;--base-color:var(--color-primary);--base-color-neutralized:color-mix(in oklab,var(--base-color) 60%,gray);--wallpaper-underlying-color:--u2-color-mod(var(--base-color-neutralized),940);--wallpaper-contrast-color:--u2-color-mod(var(--base-color-neutralized),70);--wf-md-primary:var(--color-primary);--wf-md-seed:var(--base-color);--color-on-primary:--u2-color-mod(var(--base-color),920);--color-secondary:--u2-color-mod(var(--base-color),680);--color-on-secondary:--u2-color-mod(var(--base-color),920);--color-tertiary:--u2-color-mod(var(--base-color),700);--color-on-tertiary:--u2-color-mod(var(--base-color),920);--color-error:#f87171;--color-on-error:--u2-color-mod(var(--color-error),920);--color-success:#66bb6a;--color-warning:#ffa726;--color-info:#42a5f5;--color-background:--u2-color-mod(var(--base-color),940);--color-on-background:--u2-color-mod(var(--base-color),100);--color-surface:--u2-color-mod(var(--base-color),940);--color-on-surface:--u2-color-mod(var(--base-color),100);--color-surface-variant:--u2-color-mod(var(--base-color),840);--color-on-surface-variant:--u2-color-mod(var(--base-color),280);--color-outline:--u2-color-mod(var(--base-color),720);--color-outline-variant:--u2-color-mod(var(--base-color),640);--color-surface-container-lowest:--u2-color-mod(var(--base-color),920);--color-surface-container-low:--u2-color-mod(var(--base-color),940);--color-surface-container:--u2-color-mod(var(--base-color),960);--color-surface-container-high:--u2-color-mod(var(--base-color),980);--color-surface-container-highest:--u2-color-mod(var(--base-color),1000);--color-primary-container:--u2-color-mod(var(--base-color),820);--color-on-primary-container:--u2-color-mod(var(--base-color),100);--color-border:color-mix(in oklab,var(--color-outline-variant) 70%,transparent);--color-bg:var(--color-background);--color-text:var(--color-on-background);--color-fg:var(--color-on-surface);--on-surface-color:var(--color-on-surface);--surface-color:var(--color-surface);--fl-surface:var(--color-surface);--fl-on-surface:var(--color-on-surface);--fl-primary:var(--color-primary);--fl-on-primary:var(--color-on-primary);--fl-secondary:var(--color-secondary);--fl-on-secondary:var(--color-on-secondary);--fl-shadow-xl:var(--shadow-xl);--on-surface-variant:var(--color-on-surface-variant);--wf-md-surface:var(--color-surface);--wf-md-on-surface:var(--color-on-surface);--wf-md-on-surface-variant:var(--color-on-surface-variant);--wf-md-surf-container:var(--color-surface-container);--wf-md-surf-container-low:var(--color-surface-container-low);--wf-md-surf-container-high:var(--color-surface-container-high);--wf-md-outline-variant:var(--color-outline-variant);--md3-primary-container:var(--color-primary-container);--md-primary-container:var(--color-primary-container)}:root[data-scheme=auto]:not([data-theme=light]):not([data-theme=dark]),:root[data-scheme=system]:not([data-theme=light]):not([data-theme=dark]){color-scheme:light dark}@media (prefers-reduced-motion:reduce){:root{--transition-fast:0ms;--transition-normal:0ms;--transition-slow:0ms;--motion-fast:0ms;--motion-normal:0ms;--motion-slow:0ms;--duration-fast:0ms;--duration-normal:0ms;--duration-slow:0ms}}@media (prefers-contrast:high){:root{--color-border:var(--color-border,var(--color-outline));--color-border-hover:color-mix(in oklab,var(--color-border,var(--color-outline)) 80%,var(--color-on-surface,var(--color-on-surface)));--color-text-secondary:var(--color-on-surface,var(--color-on-surface));--color-text-muted:var(--color-on-surface-variant,var(--color-on-surface-variant))}}@media print{:root{--view-padding:0;--view-content-max-width:100%;--view-bg:white;--view-fg:black;--view-heading-color:black;--view-link-color:black}:root:has([data-view=viewer]){--view-code-bg:#f5f5f5;--view-code-fg:black;--view-blockquote-bg:#f5f5f5}}}@layer components{ui-icon{--icon-color:currentColor;--icon-size:1rem;--icon-padding:0.125rem;aspect-ratio:1;color:var(--icon-color);display:inline-grid;margin-inline-end:.125rem;place-content:center;place-items:center;vertical-align:middle}ui-icon:last-child{margin-inline-end:0}}@property --client-x{initial-value:0;syntax:\"<number>\";inherits:true}@property --client-y{initial-value:0;syntax:\"<number>\";inherits:true}@property --page-x{initial-value:0;syntax:\"<number>\";inherits:true}@property --page-y{initial-value:0;syntax:\"<number>\";inherits:true}@property --sp-x{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --sp-y{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --ds-x{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --ds-y{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --rx{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --ry{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --rs-x{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --rs-y{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --limit-shift-x{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --limit-shift-y{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --limit-drag-x{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --limit-drag-y{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --bound-inline-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --bound-block-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --inline-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --block-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --initial-inline-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --initial-block-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --scroll-coef{syntax:\"<number>\";initial-value:1;inherits:true}@property --scroll-size{syntax:\"<number>\";initial-value:0;inherits:true}@property --content-size{syntax:\"<number>\";initial-value:0;inherits:true}@property --max-size{syntax:\"<length-percentage>\";initial-value:0px;inherits:true}@layer base{@keyframes l{0%{opacity:0;transform:translateY(10%)}to{opacity:1;transform:translateY(0)}}@media screen{*,:after,:before{box-sizing:border-box;dynamic-range-limit:no-limit}:where(html){-webkit-text-size-adjust:100%;font-optical-sizing:auto;font-size-adjust:from-font;tab-size:4;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background:none;background-color:initial;border:0 transparent;dynamic-range-limit:no-limit;font-family:var(--font-sans);font-size:16px;line-height:1.5;outline:0 none transparent;text-rendering:optimizeLegibility}:where(body){background:var(--color-bg);block-size:fit-content;color:var(--color-text);inset:0;line-height:var(--line-height);margin:0;min-block-size:min(var(--lv-height,100lvb),100cqb);padding:0;-webkit-font-smoothing:antialiased;background:none;background-color:initial;border:0 transparent;dynamic-range-limit:no-limit;outline:0 none transparent;text-rendering:optimizeLegibility}:where(ul,ol){list-style:none;margin:0;padding:0}:where(blockquote,q){quotes:none}:where(blockquote,q):after,:where(blockquote,q):before{content:\"\";content:none}:where(article,main,aside,section,header,footer,nav){border:0 transparent;box-shadow:0 none transparent;outline:0 none transparent}:where(table){border:1px solid var(--color-border);border-collapse:collapse;border-radius:var(--border-radius);border-spacing:0;display:block;inline-size:max-content;margin-block:1rem;max-inline-size:100%;overflow-x:auto}:where(table) :where(th,td){border-block-end:1px solid var(--color-border);padding:.5rem 1rem;text-align:start}:where(table) :where(th){background-color:var(--color-table);color:var(--color-text);font-weight:700}:where(table) :where(tr:last-child td){border-block-end:none}:where(table) :where(tr:nth-child(2n)){background-color:var(--color-bg-secondary)}:focus-visible{border-radius:var(--radius-sm);box-shadow:0 0 0 3px color-mix(in oklab,var(--color-primary,#5a7fff) 35%,transparent);outline:none}:focus:not(:focus-visible){outline:none}:where(button,input,optgroup,select,textarea){border:0 transparent;box-shadow:0 none transparent;color:inherit;font:inherit;letter-spacing:inherit;line-height:1.15;margin:0;outline:none;outline:0 none transparent}:where(button){appearance:none;background:transparent;border:none;cursor:pointer;gap:.25rem;min-block-size:fit-content;min-inline-size:fit-content;padding-block:.5rem;padding-inline:1rem;pointer-events:auto;text-transform:none;user-select:none}:where(button):has(>ui-icon:only-child){aspect-ratio:1/1;place-content:center;place-items:center}:where(button):disabled{cursor:not-allowed;pointer-events:none}:where(select){text-transform:none}:where(button,[type=button],[type=reset],[type=submit]){-webkit-appearance:button;cursor:pointer}:where(button,[type=button],[type=reset],[type=submit])::-moz-focus-inner{border-style:none;padding:0}:where(fieldset,dialog){border:none;margin:0;padding:0}:where(legend){padding:0}:where(progress){vertical-align:initial}:where(textarea){overflow:auto;resize:vertical}:where([type=search]){-webkit-appearance:textfield;outline-offset:-2px}:where([type=search])::-webkit-search-decoration{-webkit-appearance:none}:where([type=range]){-webkit-appearance:none}:where(details>summary),:where(summary){cursor:pointer}:where(mark){background-color:initial;color:inherit}:where(sub,sup){font-size:75%;line-height:0;position:relative;vertical-align:initial}:where(sup){top:-.5em}:where(sub){bottom:-.25em}:where(a){color:var(--color-link,inherit);cursor:pointer;pointer-events:auto;text-decoration:inherit;text-underline-offset:.2em;transition:color var(--transition-fast)}:where(a):hover{color:var(--color-primary-hover)}:where(img,canvas,svg,video,iframe,picture){block-size:auto;border:0 transparent;box-shadow:0 none transparent;dynamic-range-limit:no-limit;max-inline-size:100%;outline:0 none transparent}:where(img,video,canvas,svg,picture){block-size:auto;display:block;max-inline-size:100%}:where(img,video){object-fit:contain;object-position:center}:where(picture){display:contents}:where(iframe){block-size:auto;max-inline-size:100%}:where(em,i){font-style:normal}:where(strong,b){font-weight:400}:where(code,kbd,samp,pre){font-family:var(--font-family-mono,\"SF Mono\",\"Monaco\",\"Inconsolata\",\"Roboto Mono\",monospace);font-size:1em}:where(code,pre){font-family:var(--font-mono);font-size:.875em}:where(code,samp,kbd){background-color:var(--bgColor-muted);border-radius:.3em;font-family:var(--font-family-mono,\"SF Mono\",\"Monaco\",\"Roboto Mono\",monospace);font-size:85%;padding:.2em .4em}:where(code){background:var(--color-bg-alt);border-radius:var(--radius-sm);padding:.125em .25em}:where(pre){background:var(--color-bg-alt);border-radius:var(--radius-md);overflow-x:auto;padding:var(--space-md)}:where(pre) :where(code){background:transparent;border-radius:0;padding:0}:where(input,textarea,select,button,option){accent-color:var(--color-link,currentColor);border:0 transparent;box-shadow:0 none transparent;font-variant-emoji:text;outline:0 none transparent}:where(span){font-variant-emoji:text}:where(hr){border:none;border-block-start:1px solid var(--color-border);margin-block:var(--space-lg)}::-webkit-scrollbar{block-size:8px;inline-size:8px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:var(--color-outline-variant,#d1d5db);border-radius:4px}::-webkit-scrollbar-thumb:hover{background:var(--color-outline,#9ca3af)}*{scrollbar-color:var(--color-outline-variant,#d1d5db) transparent;scrollbar-width:thin}:where(input,textarea,select){background-color:var(--color-bg-alt);border:0 solid var(--color-border);border-radius:var(--border-radius);color:var(--color-fg);font-size:var(--font-size-base);inline-size:100%;padding:.5rem}:where(input,textarea,select):focus{border-color:var(--color-primary);outline:none}:where(input,textarea,select)::placeholder{color:var(--color-text-secondary);opacity:.7}:where(input,textarea,select):disabled{background-color:var(--color-bg-secondary);cursor:not-allowed;opacity:.5}:where(input):-webkit-autofill:first-line,:where(input):autofill:first-line{font-size:1em;text-size-adjust:100%}:where(input):-internal-autofill-previewed{letter-spacing:calc(1em / 10)!important}:where(input):is([type=radio],[type=checkbox]){accent-color:var(--color-primary);aspect-ratio:1/1;block-size:1rem;inline-size:1rem}:where(label){font-weight:600;margin-block-end:.25rem;pointer-events:none;user-select:none}:where(h1,h2,h3,h4,h5,h6){font-weight:600;line-height:1.2;margin-block:.5em;text-wrap:balance}:where(h1){font-size:2rem}:where(h2){font-size:1.5rem}:where(h3){font-size:1.25rem}:where(h4){font-size:1.125rem}:where(h5){font-size:1rem}:where(h6){font-size:.875rem}:where(p){margin-block:1em;text-wrap:pretty}:where(article,.content) :is(ol,ul){margin-block:var(--space-md);padding-inline-start:var(--space-lg)}:where(article,.content) ul{list-style:disc}:where(article,.content) ol{list-style:decimal}:where(blockquote){border-inline-start:.25rem solid var(--color-secondary);color:var(--color-text-secondary);font-style:italic;margin-inline:1rem;padding-inline:1rem}:where(body,main,aside,pre,code,textarea,[data-scrollable],.scrollable){scrollbar-color:var(--color-scrollbar,currentColor) transparent;scrollbar-width:thin}:where(body,main,aside,pre,code,textarea,[data-scrollable],.scrollable)::-webkit-scrollbar{block-size:var(--scrollbar-size,8px);inline-size:var(--scrollbar-size,8px)}:where(body,main,aside,pre,code,textarea,[data-scrollable],.scrollable)::-webkit-scrollbar-track{background:transparent}:where(body,main,aside,pre,code,textarea,[data-scrollable],.scrollable)::-webkit-scrollbar-thumb{background-color:var(--color-scrollbar,currentColor);border-radius:var(--border-radius,4px)}:where(body,main,aside,pre,code,textarea,[data-scrollable],.scrollable)::-webkit-scrollbar-thumb:hover{background:var(--color-outline,#9ca3af)}:where(link,head,script,style,meta),[hidden]{display:none!important}:where(link,head,script,style,meta){pointer-events:none!important}[aria-hidden=true]{opacity:0;pointer-events:none;visibility:collapse}[data-dragging]{cursor:grabbing;will-change:transform}:where(a,button,[role=button]){-webkit-tap-highlight-color:transparent}}@media screen and (prefers-reduced-motion:reduce){*,:after,:before{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}}@layer layout{@media screen{:where(footer,header,main){margin-inline:auto;padding:0}:where(header){text-align:center}:where(nav){align-items:center;display:flex;flex-wrap:wrap;justify-content:space-between;margin-block-end:0}:where(nav) ul{display:flex;gap:1rem;list-style:none;margin:0;padding:0}:where(nav) ul li{position:relative}:where(nav) a{color:var(--color-link);font-weight:700;text-decoration:none}:where(section){display:flex;flex-wrap:wrap;gap:1rem;justify-content:var(--justify-important,center)}:where(section) :where(aside){border:1px solid var(--color-bg-secondary);border-radius:var(--border-radius);box-shadow:var(--box-shadow);flex:1 1 var(--width-card);inline-size:var(--width-card);padding:1.25rem}}}@layer components{@media screen{:where(dialog){background:var(--color-bg);border:1px solid var(--color-border);border-radius:var(--border-radius);box-shadow:var(--box-shadow);color:var(--color-text);margin:auto;max-block-size:85vh;max-inline-size:min(90vw,600px);padding:1rem}:where(dialog)::backdrop{background-color:rgba(0,0,0,.5)}:where(dialog)[open]{animation:l .25s ease-out}:where(button,input[type=submit],input[type=button]){align-items:center;background-color:var(--color-link);border:0 solid transparent;border-radius:var(--border-radius);cursor:pointer;display:inline-flex;font-weight:600;justify-content:center;padding:.5rem 1rem;transition:filter .2s ease,transform .1s ease}:where(button,input[type=submit],input[type=button]):disabled{background-color:var(--color-secondary);cursor:not-allowed;filter:none;opacity:.6}:where(canvas):is([is=ui-canvas]){background-color:initial!important;border:0 transparent!important;box-sizing:border-box!important;inset:0;inset-block-end:auto;margin:0;max-block-size:max(100%,min(100cqb,100lvb))!important;max-inline-size:max(100%,min(100cqi,100lvi))!important;min-block-size:0;min-inline-size:0;object-fit:cover;object-position:center;outline:0 none transparent!important;padding:0;pointer-events:none;position:fixed;z-index:0}}}@layer overrides{@media screen{[data-scheme=system],[data-theme=system]{color-scheme:light dark}[data-scheme=dark],[data-theme=dark]{color-scheme:dark only}[data-scheme=dark] *,[data-theme=dark] *{color-scheme:dark}[data-scheme=light],[data-theme=light]{color-scheme:light only}[data-scheme=light] *,[data-theme=light] *{color-scheme:light}[data-scheme=auto]:not([data-theme=light]):not([data-theme=dark]),[data-scheme=system]:not([data-theme=light]):not([data-theme=dark]),[data-theme=auto],[data-theme=system]{color-scheme:light dark}}}@layer layout{@media screen{:where(body)>:where(#app,#container,#root,.root){background-color:initial;border:0 transparent;outline:0 none transparent}:host,:root,:scope,:where(body){pointer-events:auto;transition-behavior:allow-discrete;interpolate-size:allow-keywords;content-visibility:auto;--keyboard-inset-bottom:calc(max(env(keyboard-inset-bottom, 0px), 0px) / max(var(--zoom, 1), 0.125));--keyboard-inset-height:calc(max(env(keyboard-inset-height, 0px), 0px) / max(var(--zoom, 1), 0.125))}:host,:root,:scope{--scale:1;--translate-x:0px;--translate-y:0px}:host,:host :where(*),:root,:root :where(*),:scope,:scope :where(*){--scale:1;--translate-x:0px;--translate-y:0px}:root,:where(html){background-color:initial;block-size:var(--lv-height,100lvb);border:0 transparent;contain:none;container-name:html root;container-type:size;display:flex;flex-direction:column;inline-size:stretch;inset:0;inset-block-end:auto;line-height:normal;margin:0;max-block-size:min(100%,min(100cqb,var(--lv-height,100lvb)))!important;max-inline-size:min(100%,min(100cqi,100dvi))!important;min-block-size:min(100cqb,var(--lv-height,100lvb));min-inline-size:min(100cqi,100dvi);outline:0 none transparent;overflow:visible;padding:0;place-content:start;place-items:start;place-self:start;position:fixed;transform:none;translate:none}:where(body){background-color:initial;block-size:stretch;border:0 transparent;contain:strict;container-name:body;container-type:size;display:inline-flex;font-size:var(--text-base,.9rem);inline-size:stretch;inset:auto;margin:0;max-block-size:min(100%,min(100cqb,var(--lv-height,100lvb)));max-inline-size:min(100%,min(100cqi,100dvi));min-block-size:0;min-inline-size:0;outline:0 none transparent;overflow:visible;padding:0;place-content:start;place-items:start;place-self:start;pointer-events:auto;position:relative;transform:none;translate:none}:where(body)>:where(#app,#container,#root,.root){block-size:stretch;inline-size:stretch;max-block-size:min(100%,min(100cqb,var(--lv-height,100lvb)));max-inline-size:min(100%,min(100cqi,100dvi));min-block-size:0;min-inline-size:0}:where(body)>:where(*){max-block-size:min(100%,min(100cqb,var(--lv-height,100lvb)));max-inline-size:min(100%,min(100cqi,100dvi))}}}@layer base{[data-hidden]:not([data-hidden=false]):not([data-opacity-animation]),[data-hidden]:not([data-hidden=false]):not([data-opacity-animation]) *{opacity:0;visibility:collapse}:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))),:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))) *,:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))) ::slotted(*){opacity:0;visibility:collapse}:host([data-hidden]:not([data-hidden=false])),:host([data-hidden]:not([data-hidden=false])) *,:host([data-hidden]:not([data-hidden=false])) ::slotted(*){user-select:none!important}[data-hidden]:not([data-hidden=false]),[data-hidden]:not([data-hidden=false]) *{user-select:none!important}[data-hidden]:not([data-hidden=false]):not([data-opacity-animation]),[data-hidden]:not([data-hidden=false]):not([data-opacity-animation]) *{content-visibility:auto!important;display:none!important;pointer-events:none!important;touch-action:none!important}:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))),:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))) *,:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))) ::slotted(*){content-visibility:auto!important;display:none!important;pointer-events:none!important;touch-action:none!important}:host([data-hidden]:not([data-hidden=false])),:host([data-hidden]:not([data-hidden=false])) *,:host([data-hidden]:not([data-hidden=false])) ::slotted(*){pointer-events:none!important;touch-action:none!important}[data-hidden]:not([data-hidden=false]),[data-hidden]:not([data-hidden=false]) *{pointer-events:none!important;touch-action:none!important}[data-hidden]:not([data-hidden=false]):not([data-opacity-animation]),[data-hidden]:not([data-hidden=false]):not([data-opacity-animation]) *{display:none!important;opacity:0;pointer-events:none!important;touch-action:none!important;visibility:collapse}}@layer base{:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))),:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))) *,:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))) ::slotted(*){display:none!important;opacity:0;pointer-events:none!important;touch-action:none!important;visibility:collapse}:host([data-hidden]:not([data-hidden=false])),:host([data-hidden]:not([data-hidden=false])) *,:host([data-hidden]:not([data-hidden=false])) ::slotted(*){pointer-events:none!important;touch-action:none!important;user-select:none!important}[data-hidden]:not([data-hidden=false]),[data-hidden]:not([data-hidden=false]) *{pointer-events:none!important;touch-action:none!important;user-select:none!important}}@layer utilities{.m-0{margin:0}.mb-0{margin-block:0}.mi-0{margin-inline:0}.p-0{padding:0}.pb-0{padding-block:0}.pi-0{padding-inline:0}.gap-0{gap:0}.inset-0{inset:0}.m-xs{margin:.25rem}.mb-xs{margin-block:.25rem}.mi-xs{margin-inline:.25rem}.p-xs{padding:.25rem}.pb-xs{padding-block:.25rem}.pi-xs{padding-inline:.25rem}.gap-xs{gap:.25rem}.inset-xs{inset:.25rem}.m-sm{margin:.5rem}.mb-sm{margin-block:.5rem}.mi-sm{margin-inline:.5rem}.p-sm{padding:.5rem}.pb-sm{padding-block:.5rem}.pi-sm{padding-inline:.5rem}.gap-sm{gap:.5rem}.inset-sm{inset:.5rem}.m-md{margin:.75rem}.mb-md{margin-block:.75rem}.mi-md{margin-inline:.75rem}.p-md{padding:.75rem}.pb-md{padding-block:.75rem}.pi-md{padding-inline:.75rem}.gap-md{gap:.75rem}.inset-md{inset:.75rem}.m-lg{margin:1rem}.mb-lg{margin-block:1rem}.mi-lg{margin-inline:1rem}.p-lg{padding:1rem}.pb-lg{padding-block:1rem}.pi-lg{padding-inline:1rem}.gap-lg{gap:1rem}.inset-lg{inset:1rem}.m-xl{margin:1.25rem}.mb-xl{margin-block:1.25rem}.mi-xl{margin-inline:1.25rem}.p-xl{padding:1.25rem}.pb-xl{padding-block:1.25rem}.pi-xl{padding-inline:1.25rem}.gap-xl{gap:1.25rem}.inset-xl{inset:1.25rem}.m-2xl{margin:1.5rem}.mb-2xl{margin-block:1.5rem}.mi-2xl{margin-inline:1.5rem}.p-2xl{padding:1.5rem}.pb-2xl{padding-block:1.5rem}.pi-2xl{padding-inline:1.5rem}.gap-2xl{gap:1.5rem}.inset-2xl{inset:1.5rem}.m-3xl{margin:2rem}.mb-3xl{margin-block:2rem}.mi-3xl{margin-inline:2rem}.p-3xl{padding:2rem}.pb-3xl{padding-block:2rem}.pi-3xl{padding-inline:2rem}.gap-3xl{gap:2rem}.inset-3xl{inset:2rem}.text-xs{font-size:.75rem}.text-sm,.text-xs{font-weight:400;letter-spacing:0;line-height:1.5}.text-sm{font-size:.875rem}.text-base{font-size:1rem}.text-base,.text-lg{font-weight:400;letter-spacing:0;line-height:1.5}.text-lg{font-size:1.125rem}.text-xl{font-size:1.25rem}.text-2xl,.text-xl{font-weight:400;letter-spacing:0;line-height:1.5}.text-2xl{font-size:1.5rem}.font-thin{font-weight:100}.font-light{font-weight:300}.font-normal{font-weight:400}.font-medium{font-weight:500}.font-semibold{font-weight:600}.font-bold{font-weight:700}.text-start{text-align:start}.text-center{text-align:center}.text-end{text-align:end}.text-primary{color:#1e293b,#f1f5f9}.text-secondary{color:#64748b,#94a3b8}.text-muted{color:#94a3b8,#64748b}.text-disabled{color:#cbd5e1,#475569}.block,.vu-block{display:block}.inline,.vu-inline{display:inline}.inline-block{display:inline-block}.flex,.vu-flex{display:flex}.inline-flex{display:inline-flex}.grid,.vu-grid{display:grid}.hidden,.vu-hidden{display:none}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.items-start{align-items:flex-start}.items-center{align-items:center}.items-end{align-items:flex-end}.items-stretch{align-items:stretch}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.block-size-auto,.h-auto{block-size:auto}.block-size-full,.h-full{block-size:100%}.h-screen{block-size:100vh}.inline-size-auto,.w-auto{inline-size:auto}.inline-size-full,.w-full{inline-size:100%}.w-screen{inline-size:100vw}.min-block-size-0,.min-h-0{min-block-size:0}.min-inline-size-0,.min-w-0{min-inline-size:0}.max-block-size-full,.max-h-full{max-block-size:100%}.max-inline-size-full,.max-w-full{max-inline-size:100%}.static{position:static}.relative{position:relative}.absolute{position:absolute}.fixed{position:fixed}.sticky{position:sticky}.bg-surface{background-color:#fafbfc,#0f1419}.bg-surface-container{background-color:#f1f5f9,#1e293b}.bg-surface-container-high{background-color:#e2e8f0,#334155}.bg-primary{background-color:#4e8fad,#8ec4d4}.bg-secondary{background-color:#6b7280,#94a3b8}.border{border:1px solid #475569}.border-2{border:2px solid #475569}.border-primary{border:1px solid #8ec4d4}.border-secondary{border:1px solid #94a3b8}.rounded-none{border-radius:0}.rounded-sm{border-radius:.25rem}.rounded-md{border-radius:.375rem}.rounded-lg{border-radius:.5rem}.rounded-full{border-radius:9999px}.shadow-xs{box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.shadow-sm{box-shadow:0 1px 3px 0 rgba(0,0,0,.1)}.shadow-md{box-shadow:0 4px 6px -1px rgba(0,0,0,.1)}.shadow-lg{box-shadow:0 10px 15px -3px rgba(0,0,0,.1)}.shadow-xl{box-shadow:0 20px 25px -5px rgba(0,0,0,.1)}.cursor-pointer{cursor:pointer}.cursor-default{cursor:default}.cursor-not-allowed{cursor:not-allowed}.select-none{user-select:none}.select-text{user-select:text}.select-all{user-select:all}.visible{visibility:visible}.invisible{visibility:hidden}.collapse,.vs-collapsed{visibility:collapse}.opacity-0{opacity:0}.opacity-25{opacity:.25}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-100{opacity:1}@container (max-width: 320px){.hidden\\@xs{display:none}}@container (max-width: 640px){.hidden\\@sm{display:none}}@container (max-width: 768px){.hidden\\@md{display:none}}@container (max-width: 1024px){.hidden\\@lg{display:none}}@container (min-width: 320px){.block\\@xs{display:block}}@container (min-width: 640px){.block\\@sm{display:block}}@container (min-width: 768px){.block\\@md{display:block}}@container (min-width: 1024px){.block\\@lg{display:block}}@container (max-width: 320px){.text-sm\\@xs{font-size:.875rem;font-weight:400;letter-spacing:0;line-height:1.5}}@container (min-width: 640px){.text-base\\@sm{font-size:1rem;font-weight:400;letter-spacing:0;line-height:1.5}}.icon-xs{--icon-size:0.75rem}.icon-sm{--icon-size:0.875rem}.icon-md{--icon-size:1rem}.icon-lg{--icon-size:1.25rem}.icon-xl{--icon-size:1.5rem}.center-absolute{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.center-flex{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center}.interactive{cursor:pointer;touch-action:manipulation;user-select:none;-webkit-tap-highlight-color:transparent}.interactive:focus-visible{outline:2px solid #1e40af;outline-offset:2px}.interactive:disabled,.interactive[aria-disabled=true]{cursor:not-allowed;opacity:.6;pointer-events:none}.focus-ring:focus-visible{outline:2px solid #1e40af;outline-offset:2px}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.truncate-2{-webkit-line-clamp:2}.truncate-2,.truncate-3{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.truncate-3{-webkit-line-clamp:3}.aspect-square{aspect-ratio:1}.aspect-video{aspect-ratio:16/9}.margin-block-0{margin-block:0}.margin-block-sm{margin-block:var(--space-sm)}.margin-block-md{margin-block:var(--space-md)}.margin-block-lg{margin-block:var(--space-lg)}.margin-inline-0{margin-inline:0}.margin-inline-sm{margin-inline:var(--space-sm)}.margin-inline-md{margin-inline:var(--space-md)}.margin-inline-lg{margin-inline:var(--space-lg)}.margin-inline-auto{margin-inline:auto}.padding-block-0{padding-block:0}.padding-block-sm{padding-block:var(--space-sm)}.padding-block-md{padding-block:var(--space-md)}.padding-block-lg{padding-block:var(--space-lg)}.padding-inline-0{padding-inline:0}.padding-inline-sm{padding-inline:var(--space-sm)}.padding-inline-md{padding-inline:var(--space-md)}.padding-inline-lg{padding-inline:var(--space-lg)}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.line-clamp-1{-webkit-line-clamp:1}.line-clamp-1,.line-clamp-2{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-2{-webkit-line-clamp:2}.line-clamp-3{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.vs-active{--state-active:1}.vs-disabled{opacity:.5;pointer-events:none}.vs-loading{cursor:wait}.vs-error{color:var(--color-error,#dc3545)}.vs-success{color:var(--color-success,#28a745)}.vs-hidden{display:none!important}.container,.vl-container{inline-size:100%;margin-inline:auto;max-inline-size:var(--container-max,1200px)}.vl-container{padding-inline:var(--space-md)}.container{padding-inline:var(--space-lg)}.vl-grid{display:grid;gap:var(--gap-md)}.vl-stack{display:flex;flex-direction:column;gap:var(--gap-md)}.vl-cluster{flex-wrap:wrap;gap:var(--gap-sm)}.vl-center,.vl-cluster{align-items:center;display:flex}.vl-center{justify-content:center}.vu-sr-only{block-size:1px;inline-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);border:0;white-space:nowrap}.vc-surface{background-color:var(--color-surface);color:var(--color-on-surface)}.vc-surface-variant{background-color:var(--color-surface-variant);color:var(--color-on-surface-variant)}.vc-primary{background-color:var(--color-primary);color:var(--color-on-primary)}.vc-secondary{background-color:var(--color-secondary);color:var(--color-on-secondary)}.vc-elevated{box-shadow:var(--elev-1)}.vc-elevated-2{box-shadow:var(--elev-2)}.vc-elevated-3{box-shadow:var(--elev-3)}.vc-rounded{border-radius:var(--radius-md)}.vc-rounded-sm{border-radius:var(--radius-sm)}.vc-rounded-lg{border-radius:var(--radius-lg)}.vc-rounded-full{border-radius:var(--radius-full,9999px)}.card{background:var(--color-bg);border:1px solid var(--color-border);border-radius:var(--radius-lg);box-shadow:var(--shadow-sm);padding:var(--space-lg)}.stack>*+*{margin-block-start:var(--space-md)}.stack-sm>*+*{margin-block-start:var(--space-sm)}.stack-lg>*+*{margin-block-start:var(--space-lg)}@media print{.print-hidden{display:none!important}.print-visible{display:block!important}.print-break-before{page-break-before:always}.print-break-after{page-break-after:always}.print-break-inside-avoid{page-break-inside:avoid}}@media (prefers-reduced-motion:reduce){.transition-fast,.transition-normal,.transition-slow{transition:none}*{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}@media (prefers-contrast:high){.text-primary{color:var(--color-on-surface)}.text-disabled,.text-muted,.text-secondary{color:var(--color-on-surface-variant)}.border{border-width:2px}.border-top{border-top-width:2px}.border-bottom{border-bottom-width:2px}.border-left{border-left-width:2px}.border-right{border-right-width:2px}}}@property --value{syntax:\"<number>\";initial-value:0;inherits:true}@property --relate{syntax:\"<number>\";initial-value:0;inherits:true}@property --drag-x{syntax:\"<number>\";initial-value:0;inherits:false}@property --drag-y{syntax:\"<number>\";initial-value:0;inherits:false}@property --order{syntax:\"<integer>\";initial-value:1;inherits:true}@property --content-inline-size{syntax:\"<length-percentage>\";initial-value:100%;inherits:true}@property --content-block-size{syntax:\"<length-percentage>\";initial-value:100%;inherits:true}@property --icon-size{syntax:\"<length-percentage>\";initial-value:16px;inherits:true}@property --icon-color{syntax:\"<color>\";initial-value:rgba(0,0,0,0);inherits:true}@property --icon-padding{syntax:\"<length-percentage>\";initial-value:0px;inherits:true}@property --icon-image{syntax:\"<image>\";initial-value:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0));inherits:true}@layer utilities{.grid-rows>::slotted(*){display:grid;grid-auto-flow:column}.grid-rows>::slotted(*){place-content:center;place-items:center}.grid-rows>::slotted(*){--order:sibling-index();grid-column:1/-1;grid-row:var(--order,1)/calc(var(--order, 1) + 1);grid-template-columns:subgrid;grid-template-rows:minmax(0,max-content)}:host(.grid-rows) ::slotted(::slotted(*)){display:grid;grid-auto-flow:column}:host(.grid-rows) ::slotted(::slotted(*)){place-content:center;place-items:center}:host(.grid-rows) ::slotted(::slotted(*)){--order:sibling-index();grid-column:1/-1;grid-row:var(--order,1)/calc(var(--order, 1) + 1);grid-template-columns:subgrid;grid-template-rows:minmax(0,max-content)}.grid-rows>*{display:grid;grid-auto-flow:column;place-content:center;place-items:center;--order:sibling-index();grid-column:1/-1;grid-row:var(--order,1)/calc(var(--order, 1) + 1);grid-template-columns:subgrid;grid-template-rows:minmax(0,max-content)}:host(.grid-rows) ::slotted(*){display:grid;grid-auto-flow:column}:host(.grid-rows) ::slotted(*){place-content:center;place-items:center}:host(.grid-rows) ::slotted(*){--order:sibling-index();grid-column:1/-1;grid-row:var(--order,1)/calc(var(--order, 1) + 1);grid-template-columns:subgrid;grid-template-rows:minmax(0,max-content)}.grid-rows{--display:inline-grid;--flow:column;--items:center;--content:center;block-size:auto;box-sizing:border-box;display:var(--display,inline-block);flex-direction:var(--flow,row);inline-size:auto;place-content:var(--content,center);place-items:var(--items,center);--i-size:auto;--b-size:auto;aspect-ratio:var(--ar,auto);block-size:var(--b-size,100%);grid-auto-rows:minmax(0,max-content);grid-template-columns:minmax(0,max-content) minmax(0,1fr) minmax(0,max-content);inline-size:var(--i-size,100%);list-style-position:inside;list-style-type:none;margin:0;padding:0}:host(.grid-rows){--display:inline-grid;--flow:column;--items:center;--content:center;box-sizing:border-box;display:var(--display,inline-block);flex-direction:var(--flow,row);place-content:var(--content,center);place-items:var(--items,center)}:host(.grid-rows){block-size:auto;inline-size:auto;--i-size:auto;--b-size:auto;aspect-ratio:var(--ar,auto);block-size:var(--b-size,100%);inline-size:var(--i-size,100%)}:host(.grid-rows){grid-auto-rows:minmax(0,max-content);grid-template-columns:minmax(0,max-content) minmax(0,1fr) minmax(0,max-content);list-style-position:inside;list-style-type:none;margin:0;padding:0}.grid-columns>::slotted(*){display:grid;grid-auto-flow:row}.grid-columns>::slotted(*){place-content:center;place-items:center}.grid-columns>::slotted(*){--order:sibling-index();grid-column:var(--order,1)/calc(var(--order, 1) + 1);grid-row:1/-1;grid-template-columns:minmax(0,1fr);grid-template-rows:subgrid}:host(.grid-columns) ::slotted(::slotted(*)){display:grid;grid-auto-flow:row}:host(.grid-columns) ::slotted(::slotted(*)){place-content:center;place-items:center}:host(.grid-columns) ::slotted(::slotted(*)){--order:sibling-index();grid-column:var(--order,1)/calc(var(--order, 1) + 1);grid-row:1/-1;grid-template-columns:minmax(0,1fr);grid-template-rows:subgrid}.grid-columns>*{display:grid;grid-auto-flow:row;place-content:center;place-items:center;--order:sibling-index();grid-column:var(--order,1)/calc(var(--order, 1) + 1);grid-row:1/-1;grid-template-columns:minmax(0,1fr);grid-template-rows:subgrid}:host(.grid-columns) ::slotted(*){display:grid;grid-auto-flow:row}:host(.grid-columns) ::slotted(*){place-content:center;place-items:center}:host(.grid-columns) ::slotted(*){--order:sibling-index();grid-column:var(--order,1)/calc(var(--order, 1) + 1);grid-row:1/-1;grid-template-columns:minmax(0,1fr);grid-template-rows:subgrid}.grid-columns{--display:inline-grid;--flow:row;--items:center;--content:center;block-size:auto;box-sizing:border-box;display:var(--display,inline-block);flex-direction:var(--flow,row);inline-size:auto;place-content:var(--content,center);place-items:var(--items,center);--i-size:auto;--b-size:auto;aspect-ratio:var(--ar,auto);block-size:var(--b-size,100%);grid-auto-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr);inline-size:var(--i-size,100%);list-style-position:inside;list-style-type:none;margin:0;padding:0}:host(.grid-columns){--display:inline-grid;--flow:row;--items:center;--content:center;box-sizing:border-box;display:var(--display,inline-block);flex-direction:var(--flow,row);place-content:var(--content,center);place-items:var(--items,center)}:host(.grid-columns){block-size:auto;inline-size:auto;--i-size:auto;--b-size:auto;aspect-ratio:var(--ar,auto);block-size:var(--b-size,100%);inline-size:var(--i-size,100%)}:host(.grid-columns){grid-auto-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr);list-style-position:inside;list-style-type:none;margin:0;padding:0}.flex-columns>::slotted(*){--order:sibling-index();flex:1 1 max-content;order:var(--order,auto)}.flex-columns>::slotted(*){place-content:center;place-items:center}:host(.flex-columns) ::slotted(::slotted(*)){--order:sibling-index();flex:1 1 max-content;order:var(--order,auto)}:host(.flex-columns) ::slotted(::slotted(*)){place-content:center;place-items:center}.flex-columns>*{--order:sibling-index();flex:1 1 max-content;order:var(--order,auto);place-content:center;place-items:center}:host(.flex-columns) ::slotted(*){--order:sibling-index();flex:1 1 max-content;order:var(--order,auto)}:host(.flex-columns) ::slotted(*){place-content:center;place-items:center}.flex-columns{--display:inline-flex;--flow:column;--items:center;--content:center;block-size:max-content;box-sizing:border-box;display:var(--display,inline-block);flex-direction:var(--flow,row);inline-size:max-content;place-content:var(--content,center);place-items:var(--items,center);--i-size:max-content;--b-size:max-content;aspect-ratio:var(--ar,auto);block-size:var(--b-size,100%);inline-size:var(--i-size,100%)}:host(.flex-columns){--display:inline-flex;--flow:column;--items:center;--content:center;box-sizing:border-box;display:var(--display,inline-block);flex-direction:var(--flow,row);place-content:var(--content,center);place-items:var(--items,center)}:host(.flex-columns){block-size:max-content;inline-size:max-content;--i-size:max-content;--b-size:max-content;aspect-ratio:var(--ar,auto);block-size:var(--b-size,100%);inline-size:var(--i-size,100%)}.grid-layered>::slotted(*){grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr)}.grid-layered>::slotted(*)>*{grid-column:1/-1;grid-row:1/-1}:host(.grid-layered) ::slotted(::slotted(*)){grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr)}:host(.grid-layered) ::slotted(::slotted(*))>*{grid-column:1/-1;grid-row:1/-1}.grid-layered>*{grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr)}.grid-layered>*>*{grid-column:1/-1;grid-row:1/-1}:host(.grid-layered) ::slotted(*){grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr)}:host(.grid-layered) ::slotted(*)>*{grid-column:1/-1;grid-row:1/-1}.grid-layered{grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr)}.grid-layered>*{grid-column:1/-1;grid-row:1/-1}.grid-layered{--display:inline-grid;--flow:column;--items:center;--content:center;block-size:max-content;box-sizing:border-box;display:var(--display,inline-block);flex-direction:var(--flow,row);inline-size:max-content;place-content:var(--content,center);place-items:var(--items,center);--i-size:max-content;--b-size:max-content;aspect-ratio:var(--ar,auto);block-size:var(--b-size,100%);inline-size:var(--i-size,100%)}:host(.grid-layered){grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr)}:host(.grid-layered)>*{grid-column:1/-1;grid-row:1/-1}:host(.grid-layered){--display:inline-grid;--flow:column;--items:center;--content:center;box-sizing:border-box;display:var(--display,inline-block);flex-direction:var(--flow,row);place-content:var(--content,center);place-items:var(--items,center)}:host(.grid-layered){block-size:max-content;inline-size:max-content;--i-size:max-content;--b-size:max-content;aspect-ratio:var(--ar,auto);block-size:var(--b-size,100%);inline-size:var(--i-size,100%)}.grid-rows-3c>::slotted(*){grid-template-columns:minmax(0,max-content) minmax(0,1fr) minmax(0,max-content)}:host(.grid-rows-3c) ::slotted(::slotted(*)){grid-template-columns:minmax(0,max-content) minmax(0,1fr) minmax(0,max-content)}.grid-rows-3c>*{grid-template-columns:minmax(0,max-content) minmax(0,1fr) minmax(0,max-content)}:host(.grid-rows-3c) ::slotted(*){grid-template-columns:minmax(0,max-content) minmax(0,1fr) minmax(0,max-content)}.grid-rows-3c{grid-template-columns:minmax(0,max-content) minmax(0,1fr) minmax(0,max-content)}:host(.grid-rows-3c){grid-template-columns:minmax(0,max-content) minmax(0,1fr) minmax(0,max-content)}.grid-rows-3c>::slotted(:last-child){grid-column:var(--order,1)/3 span}:host(.grid-rows-3c) ::slotted(::slotted(:last-child)){grid-column:var(--order,1)/3 span}.grid-rows-3c>:last-child{grid-column:var(--order,1)/3 span}:host(.grid-rows-3c) ::slotted(:last-child){grid-column:var(--order,1)/3 span}.grid-rows-3c{--order:sibling-index();block-size:auto;grid-column:var(--order,1)/var(--order,1) span;inline-size:auto;--i-size:auto;--b-size:auto;aspect-ratio:var(--ar,auto);block-size:var(--b-size,100%);inline-size:var(--i-size,100%)}:host(.grid-rows-3c){--order:sibling-index()}:host(.grid-rows-3c){grid-column:var(--order,1)/var(--order,1) span}:host(.grid-rows-3c){block-size:auto;inline-size:auto;--i-size:auto;--b-size:auto;aspect-ratio:var(--ar,auto);block-size:var(--b-size,100%);inline-size:var(--i-size,100%)}.stretch-inline{inline-size:100%;inline-size:stretch}:host(.stretch-inline){inline-size:100%;inline-size:stretch}.stretch-block{block-size:100%;block-size:stretch}:host(.stretch-block){block-size:100%;block-size:stretch}.content-inline-size{padding-inline:max(100% - (100% - var(--content-inline-size,100%) * .5),0px)}:host(.content-inline-size){padding-inline:max(100% - (100% - var(--content-inline-size,100%) * .5),0px)}.content-block-size{padding-block:max(100% - (100% - var(--content-block-size,100%) * .5),0px)}:host(.content-block-size){padding-block:max(100% - (100% - var(--content-block-size,100%) * .5),0px)}.ux-anchor{inset-block-start:max(var(--client-y,0px),0px);inset-inline-start:max(var(--client-x,0px),0px);--translate-x:round(nearest,min(0px,calc(100cqi - (100% + var(--client-x, 0px)))),calc(1px / var(--pixel-ratio, 1)))!important;--translate-y:round(nearest,min(0px,calc(100cqb - (100% + var(--client-y, 0px)))),calc(1px / var(--pixel-ratio, 1)))!important}@supports (position-anchor:--example){.ux-anchor{inline-size:anchor-size(var(--anchor-group) self-inline);inset-block-start:anchor(var(--anchor-group) end);inset-inline-start:anchor(var(--anchor-group) start);position-anchor:var(--anchor-group)}}:host(.ux-anchor){inset-block-start:max(var(--client-y,0px),0px);inset-inline-start:max(var(--client-x,0px),0px)}:host(.ux-anchor){--translate-x:round(nearest,min(0px,calc(100cqi - (100% + var(--client-x, 0px)))),calc(1px / var(--pixel-ratio, 1)))!important;--translate-y:round(nearest,min(0px,calc(100cqb - (100% + var(--client-y, 0px)))),calc(1px / var(--pixel-ratio, 1)))!important}@supports (position-anchor:--example){:host(.ux-anchor){inline-size:anchor-size(var(--anchor-group) self-inline);inset-block-start:anchor(var(--anchor-group) end);inset-inline-start:anchor(var(--anchor-group) start);position-anchor:var(--anchor-group)}}.ux-anchor{--shift-x:var(--client-x,0px);--shift-y:var(--client-y,0px);--translate-x:round(nearest,min(0px,calc(100cqi - (100% + var(--shift-x, 0px)))),calc(1px / var(--pixel-ratio, 1)))!important;--translate-y:round(nearest,min(0px,calc(100cqb - (100% + var(--shift-y, 0px)))),calc(1px / var(--pixel-ratio, 1)))!important;direction:ltr;inset-block-end:auto;inset-block-start:max(var(--shift-y),var(--status-bar-padding,0px));inset-inline-end:auto;inset-inline-start:max(var(--shift-x),0px);transform:none;translate:0 0 0;writing-mode:horizontal-tb}:host(.ux-anchor){--shift-x:var(--client-x,0px);--shift-y:var(--client-y,0px);--translate-x:round(nearest,min(0px,calc(100cqi - (100% + var(--shift-x, 0px)))),calc(1px / var(--pixel-ratio, 1)))!important;--translate-y:round(nearest,min(0px,calc(100cqb - (100% + var(--shift-y, 0px)))),calc(1px / var(--pixel-ratio, 1)))!important;direction:ltr;inset-block-end:auto;inset-block-start:max(var(--shift-y),var(--status-bar-padding,0px));inset-inline-end:auto;inset-inline-start:max(var(--shift-x),0px);transform:none;translate:0 0 0;writing-mode:horizontal-tb}.layered-wrap{background-color:initial;block-size:max-content;display:inline-grid;grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr);inline-size:max-content;overflow:visible;z-index:calc(var(--z-index, 0) + 1)}.layered-wrap>*{grid-column:1/-1;grid-row:1/-1}:host(.layered-wrap){background-color:initial;block-size:max-content;display:inline-grid;grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr);inline-size:max-content;overflow:visible;z-index:calc(var(--z-index, 0) + 1)}:host(.layered-wrap)>*{grid-column:1/-1;grid-row:1/-1}}@layer theme{}@function --wavy-step(--step <number>){--angle:calc((var(--step, 0) * 2) * 1rad * pi);--variant:calc(cos(var(--clip-freq, 8) * var(--angle, 0deg)) * 0.5 + 0.5);--adjust:calc(var(--variant, 0) * var(--clip-amplitude, 0));--x:calc(50% + (cos(var(--angle, 0deg)) * (0.5 - var(--adjust, 0))) * var(--icon-size, 100%));--y:calc(50% + (sin(var(--angle, 0deg)) * (0.5 - var(--adjust, 0))) * var(--icon-size, 100%));result:var(--x) var(--y)}@layer components{.shaped{aspect-ratio:1/1!important;border-radius:var(--border-radius,1.5rem);contain:strict;display:flex;overflow:hidden;padding:1.25rem;place-content:center;place-items:center;pointer-events:auto;transition:--background-tone-shift .2s ease-in-out,--icon-color .2s ease-in-out;transition-behavior:allow-discrete;user-select:none;z-index:1}.shaped,.shaped :is(span,ui-icon){block-size:fit-content;inline-size:stretch}.shaped ui-icon{aspect-ratio:1/1!important}[data-dragging]{z-index:calc(100 + var(--z-index, 0))!important}:not(.shaped) .shaped[data-shape],:not(.shaped)>[data-shape],:not(:has(.shaped))[data-shape]{aspect-ratio:1/1!important;contain:strict;overflow:hidden;pointer-events:auto;touch-action:none}:not(.shaped) .shaped[data-shape=square],:not(.shaped)>[data-shape=square],:not(:has(.shaped))[data-shape=square]{--border-radius:var(--radius-md);--clip-path:none}:not(.shaped) .shaped[data-shape=squircle],:not(.shaped)>[data-shape=squircle],:not(:has(.shaped))[data-shape=squircle]{--border-radius:28%;--clip-path:none}:not(.shaped) .shaped[data-shape=circle],:not(.shaped)>[data-shape=circle],:not(:has(.shaped))[data-shape=circle]{--border-radius:50%;--clip-path:none}:not(.shaped) .shaped[data-shape=rounded],:not(.shaped)>[data-shape=rounded],:not(:has(.shaped))[data-shape=rounded]{--border-radius:var(--radius-xl);--clip-path:none}:not(.shaped) .shaped[data-shape=blob],:not(.shaped)>[data-shape=blob],:not(:has(.shaped))[data-shape=blob]{--border-radius:60% 40% 30% 70%/60% 30% 70% 40%;--clip-path:none}:not(.shaped) .shaped[data-shape=hexagon],:not(.shaped)>[data-shape=hexagon],:not(:has(.shaped))[data-shape=hexagon]{--border-radius:0;--clip-path:polygon(round 0.375rem,50% 0%,93.3% 25%,93.3% 75%,50% 100%,6.7% 75%,6.7% 25%)}:not(.shaped) .shaped[data-shape=diamond],:not(.shaped)>[data-shape=diamond],:not(:has(.shaped))[data-shape=diamond]{--border-radius:0;--clip-path:polygon(round 0.5rem,50% 0%,100% 50%,50% 100%,0% 50%)}:not(.shaped) .shaped[data-shape=star],:not(.shaped)>[data-shape=star],:not(:has(.shaped))[data-shape=star]{--border-radius:0;--clip-path:polygon(round 0.25rem,50% 0%,61% 35%,98% 38%,68% 59%,79% 95%,50% 75%,21% 95%,32% 59%,2% 38%,39% 35%)}:not(.shaped) .shaped[data-shape=badge],:not(.shaped)>[data-shape=badge],:not(:has(.shaped))[data-shape=badge]{--border-radius:0;--clip-path:polygon(round 0.375rem,0% 0%,100% 0%,100% 70%,50% 100%,0% 70%)}:not(.shaped) .shaped[data-shape=heart],:not(.shaped)>[data-shape=heart],:not(:has(.shaped))[data-shape=heart]{--border-radius:0;--clip-path:polygon(round 0.25rem,50% 100%,10% 65%,0% 45%,0% 30%,5% 15%,18% 3%,35% 0%,50% 12%,65% 0%,82% 3%,95% 15%,100% 30%,100% 45%,90% 65%)}:not(.shaped) .shaped[data-shape=clover],:not(.shaped)>[data-shape=clover],:not(:has(.shaped))[data-shape=clover]{--border-radius:0;--clip-path:polygon(round 0.375rem,50% 0%,60% 30%,70% 30%,100% 50%,70% 70%,60% 70%,50% 100%,40% 70%,30% 70%,0% 50%,30% 30%,40% 30%)}:not(.shaped) .shaped[data-shape=flower],:not(.shaped)>[data-shape=flower],:not(:has(.shaped))[data-shape=flower]{--border-radius:0;--clip-path:polygon(round 0.25rem,50% 0%,58% 25%,85% 15%,68% 40%,100% 50%,68% 60%,85% 85%,58% 75%,50% 100%,42% 75%,15% 85%,32% 60%,0% 50%,32% 40%,15% 15%,42% 25%)}:not(.shaped) .shaped[data-shape=triangle],:not(.shaped)>[data-shape=triangle],:not(:has(.shaped))[data-shape=triangle]{--border-radius:0;--clip-path:polygon(round 0.5rem,50% 0%,100% 87%,0% 87%)}:not(.shaped) .shaped[data-shape=pentagon],:not(.shaped)>[data-shape=pentagon],:not(:has(.shaped))[data-shape=pentagon]{--border-radius:0;--clip-path:polygon(round 0.375rem,50% 0%,97.5% 35%,79.5% 95%,20.5% 95%,2.5% 35%)}:not(.shaped) .shaped[data-shape=octagon],:not(.shaped)>[data-shape=octagon],:not(:has(.shaped))[data-shape=octagon]{--border-radius:0;--clip-path:polygon(round 0.25rem,30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%)}:not(.shaped) .shaped[data-shape=cross],:not(.shaped)>[data-shape=cross],:not(:has(.shaped))[data-shape=cross]{--border-radius:0;--clip-path:polygon(round 0.375rem,35% 0%,65% 0%,65% 35%,100% 35%,100% 65%,65% 65%,65% 100%,35% 100%,35% 65%,0% 65%,0% 35%,35% 35%)}:not(.shaped) .shaped[data-shape=arrow],:not(.shaped)>[data-shape=arrow],:not(:has(.shaped))[data-shape=arrow]{--border-radius:0;--clip-path:polygon(round 0.375rem,0% 20%,60% 20%,60% 0%,100% 50%,60% 100%,60% 80%,0% 80%)}:not(.shaped) .shaped[data-shape=egg],:not(.shaped)>[data-shape=egg],:not(:has(.shaped))[data-shape=egg]{--border-radius:50% 50% 50% 50%/60% 60% 40% 40%;--clip-path:none}:not(.shaped) .shaped[data-shape=tear],:not(.shaped)>[data-shape=tear],:not(:has(.shaped))[data-shape=tear]{--border-radius:50cqmin 50cqmin 5rem 50cqmin;--clip-path:none;border-end-end-radius:5rem;border-end-start-radius:50cqmin;border-start-end-radius:50cqmin;border-start-start-radius:50cqmin}:not(.shaped) .shaped[data-shape=wavy],:not(.shaped)>[data-shape=wavy],:not(:has(.shaped))[data-shape=wavy]{--border-radius:calc(var(--icon-size, 100%) * 0.5)}}";
//#endregion
//#region ../../modules/projects/subsystem/src/boot/veela-variant-runtime.ts
/**
* Veela stylesheet loader for CWSP-shell (no `fest/fl-ui` runtime SCSS dependency).
*
* Uses Veela's curated public SCSS entry-points (core + foundation).
*/
var loadedVariant = null;
/**
* Loads Veela stylesheet slices for the coarse variant presets used by BootLoader.
*/
async function loadVeelaVariant(variant) {
	if (loadedVariant === variant) return;
	console.log("[Veela] Loading variant:", variant);
	const apply = async (text) => {
		if (typeof text === "string" && text.length) await loadAsAdopted(text);
	};
	if (variant === "core") {
		await apply(core_default);
		loadedVariant = variant;
		return;
	}
	await apply(scss_default);
	loadedVariant = variant;
}
//#endregion
//#region ../../modules/projects/subsystem/src/styles.ts
/**
* CWSP-shell Styles Module
*
* Provides style system integration for the CWSP-shell application.
* Supports multiple style systems based on veela CSS variants.
*
* Style Systems:
* - veela-advanced: Full-featured CSS framework (default)
* - veela-basic: Lightweight minimal styling
* - veela-beercss: Beer CSS compatible styling
* - raw: No styling framework (browser defaults)
*/
var STYLE_CONFIGS = {
	"vl-advanced": {
		id: "vl-advanced",
		name: "Veela Advanced",
		description: "Full-featured CSS framework with design tokens and effects",
		variant: "advanced",
		initFn: async () => {
			try {
				await loadVeelaVariant("advanced");
				console.log("[Styles] Veela Advanced loaded");
			} catch (e) {}
		}
	},
	"vl-basic": {
		id: "vl-basic",
		name: "Veela Basic Styles",
		description: "Lightweight minimal styling for basic functionality",
		variant: "basic",
		initFn: async () => {
			try {
				await loadVeelaVariant("basic");
				console.log("[Styles] Veela Basic Styles loaded");
			} catch (e) {
				console.warn("[Styles] Failed to load Veela Basic Styles:", e);
			}
		}
	},
	"vl-beercss": {
		id: "vl-beercss",
		name: "Veela BeerCSS",
		description: "Beer CSS compatible styling with Material Design 3",
		variant: "beercss",
		initFn: async () => {
			try {
				await loadVeelaVariant("beercss");
				console.log("[Styles] Veela BeerCSS loaded");
			} catch (e) {
				console.warn("[Styles] Failed to load Veela BeerCSS:", e);
			}
		}
	},
	"vl-core": {
		id: "vl-core",
		name: "Veela Core",
		description: "Shared foundation styles for all veela variants",
		variant: "core",
		initFn: async () => {
			try {
				await loadVeelaVariant("core");
				console.log("[Styles] Veela Core loaded");
			} catch (e) {
				console.warn("[Styles] Failed to load Veela Core:", e);
			}
		}
	},
	"raw": {
		id: "raw",
		name: "Raw",
		description: "No styling framework, browser defaults",
		variant: "core",
		initFn: async () => {
			console.log("[Styles] Raw mode - no styles loaded");
		}
	}
};
var _currentStyle = null;
/**
* Load a style system
*
* @param styleId - Style system identifier
*/
async function loadStyleSystem(styleId) {
	const config = STYLE_CONFIGS[styleId] || STYLE_CONFIGS["vl-basic"];
	if (!config) throw new Error(`Unknown style system: ${styleId}`);
	if (_currentStyle === styleId) {
		console.log(`[Styles] Style system '${styleId}' already loaded`);
		return;
	}
	console.log(`[Styles] Loading style system: ${config.name}`);
	if (config.initFn) await config.initFn();
	_currentStyle = styleId;
	console.log(`[Styles] Style system ${config.name} loaded`);
}
//#endregion
//#region src/shared/routing/core/app-layers.ts
var ensureAppLayers = (mountElement, options = {}) => {
	const enableOrientLayer = options.enableOrientLayer !== false;
	const enableCanvasLayer = options.enableCanvasLayer !== false;
	const existingCanvas = mountElement.querySelector("[data-app-layer=\"canvas\"]");
	const existingOrient = mountElement.querySelector("[data-app-layer=\"orient\"]");
	const existingShell = mountElement.querySelector("[data-app-layer=\"shell\"]");
	const existingOverlay = mountElement.querySelector("[data-app-layer=\"overlay\"]");
	const createCanvasLayer = () => {
		const canvasLayer = document.createElement("div");
		canvasLayer.dataset.appLayer = "canvas";
		canvasLayer.className = "app-layer app-layer--canvas";
		canvasLayer.style.position = "absolute";
		canvasLayer.style.inset = "0";
		canvasLayer.style.zIndex = "0";
		canvasLayer.style.pointerEvents = "none";
		initializeAppCanvasLayer(canvasLayer);
		return canvasLayer;
	};
	if (existingShell && existingOverlay) {
		let canvasLayer = existingCanvas;
		if (enableCanvasLayer && !canvasLayer) {
			canvasLayer = createCanvasLayer();
			mountElement.insertBefore(canvasLayer, existingOrient ?? existingShell);
		}
		if (!enableCanvasLayer && canvasLayer) {
			canvasLayer.remove();
			canvasLayer = null;
		}
		if (enableOrientLayer && !existingOrient) {
			const orientLayer = document.createElement("div");
			orientLayer.dataset.appLayer = "orient";
			orientLayer.className = "app-layer app-layer--orient";
			orientLayer.style.position = "absolute";
			orientLayer.style.inset = "0";
			orientLayer.style.zIndex = "5";
			orientLayer.style.pointerEvents = "none";
			orientLayer.style.background = "transparent";
			const orientBox = document.createElement("cw-oriented-box");
			orientBox.className = "ui-orientbox app-oriented-box";
			orientBox.setAttribute("data-mixin", "ui-orientbox");
			orientBox.style.position = "absolute";
			orientBox.style.inset = "0";
			orientBox.style.pointerEvents = "auto";
			orientBox.style.background = "transparent";
			orientLayer.appendChild(orientBox);
			fixOrientToScreen(orientBox);
			mountElement.insertBefore(orientLayer, existingShell);
			return {
				canvasLayer,
				orientLayer,
				shellLayer: existingShell,
				overlayLayer: existingOverlay
			};
		}
		if (!enableOrientLayer && existingOrient) {
			existingOrient.remove();
			return {
				canvasLayer,
				orientLayer: null,
				shellLayer: existingShell,
				overlayLayer: existingOverlay
			};
		}
		return {
			canvasLayer,
			orientLayer: enableOrientLayer ? existingOrient || null : null,
			shellLayer: existingShell,
			overlayLayer: existingOverlay
		};
	}
	mountElement.replaceChildren();
	mountElement.style.position = "relative";
	mountElement.style.overflow = "hidden";
	mountElement.dataset.appLayerRoot = "true";
	try {
		const root = document.documentElement;
		if (mountElement === document.body || mountElement.id === "app") {
			if (!root.style.minBlockSize) root.style.minBlockSize = "100dvb";
			if (!root.style.blockSize && !root.style.height) root.style.blockSize = "100%";
			if (!document.body.style.margin && mountElement === document.body) document.body.style.margin = "0";
		}
		if (!mountElement.style.minBlockSize) mountElement.style.minBlockSize = "100dvb";
		if (!mountElement.style.blockSize && !mountElement.style.height) mountElement.style.blockSize = "100%";
	} catch {}
	const canvasLayer = enableCanvasLayer ? createCanvasLayer() : null;
	const orientLayer = enableOrientLayer ? document.createElement("div") : null;
	if (orientLayer) {
		orientLayer.dataset.appLayer = "orient";
		orientLayer.className = "app-layer app-layer--orient";
		orientLayer.style.position = "absolute";
		orientLayer.style.inset = "0";
		orientLayer.style.zIndex = "5";
		orientLayer.style.pointerEvents = "none";
		orientLayer.style.background = "transparent";
		const orientBox = document.createElement("cw-oriented-box");
		orientBox.className = "ui-orientbox app-oriented-box";
		orientBox.setAttribute("data-mixin", "ui-orientbox");
		orientBox.style.position = "absolute";
		orientBox.style.inset = "0";
		orientBox.style.pointerEvents = "auto";
		orientBox.style.background = "transparent";
		orientLayer.appendChild(orientBox);
		fixOrientToScreen(orientBox);
	}
	const shellLayer = document.createElement("div");
	shellLayer.dataset.appLayer = "shell";
	shellLayer.className = "app-layer app-layer--shell";
	shellLayer.style.position = "absolute";
	shellLayer.style.inset = "0";
	shellLayer.style.zIndex = "10";
	shellLayer.style.pointerEvents = "none";
	shellLayer.style.display = "grid";
	shellLayer.style.gridTemplateColumns = "[content-column] minmax(0px, 1fr)";
	shellLayer.style.gridTemplateRows = "[status-row] minmax(0px, max-content) [content-row] minmax(0px, 1fr) [dock-row] minmax(0px, max-content)";
	shellLayer.style.overflow = "hidden";
	shellLayer.style.background = "transparent";
	shellLayer.style.backgroundColor = "transparent";
	const overlayLayer = document.createElement("div");
	overlayLayer.dataset.appLayer = "overlay";
	overlayLayer.className = "app-layer app-layer--overlay";
	overlayLayer.style.position = "absolute";
	overlayLayer.style.inset = "0";
	overlayLayer.style.zIndex = "1000";
	overlayLayer.style.pointerEvents = "none";
	overlayLayer.style.background = "transparent";
	overlayLayer.style.backgroundColor = "transparent";
	if (canvasLayer) mountElement.append(canvasLayer);
	if (orientLayer) mountElement.append(orientLayer);
	mountElement.append(shellLayer, overlayLayer);
	return {
		canvasLayer,
		orientLayer,
		shellLayer,
		overlayLayer
	};
};
//#endregion
export { initializeLayers as i, loadStyleSystem as n, applyTheme as r, ensureAppLayers as t };
