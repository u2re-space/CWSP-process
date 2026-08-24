import { $t as navigate, Jt as H, K as getSpeedDialViewOpener, Sn as preloadStyle, Y as __decorate, kn as MOCElement, q as UIElement, qt as defineElement } from "../com/app.js";
import { i as positionFlyout, n as closeChromeFlyout, o as toggleChromeFlyout, r as ensureOverlayRoot } from "./environment-components-calendar-CalendarFlyout.js";
//#endregion
//#region src/frontend/shells/environment/components/settings/QuickSettings.ts
/**
* WHY: Singleton `ui-quick-settings` custom element mounted into the shared ChromeFlyout
* overlay root (see `../flyout/ChromeFlyout`), exclusive with the calendar flyout via the
* shared registry. Theme toggling and the night-light/brightness overlay filters are local,
* dependency-free helpers — no hard import of the app-level Theme/Settings subsystem — so
* this component stays usable standalone inside `fl.ui`. Apps that ship a real Theme
* subsystem can still react via the `u2-theme-change` event this module dispatches.
*/
var styled = preloadStyle(":host{box-sizing:border-box;color-scheme:inherit;contain:layout style;display:block;pointer-events:auto}:host([data-theme=light]),:host-context(html[data-theme=light]){color-scheme:light only}:host([data-theme=dark]),:host-context(html[data-theme=dark]){color-scheme:dark only}:host([open]){animation:a .14s cubic-bezier(.22,.8,.3,1)}:host([hidden]){display:none!important}@keyframes a{0%{opacity:0;transform:translateY(6px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}@layer ui-quick-settings{.qs-panel{--qs-primary:var(--color-primary);--qs-surface:var(--color-surface);--qs-on-surface:var(--color-on-surface);--qs-outline:color-mix(in oklab,var(--color-outline-variant) 80%,transparent);background:var(--qs-surface);border:1px solid var(--qs-outline);border-radius:14px;box-shadow:0 20px 48px -20px rgba(0,0,0,.4),0 2px 8px -2px rgba(0,0,0,.25);box-sizing:border-box;color:var(--qs-on-surface);display:grid;font:500 .85rem/1.3 ui-sans-serif,system-ui,sans-serif;gap:.85rem;inline-size:min(360px,100vw - 1.5rem);max-inline-size:360px;min-inline-size:320px;padding:.9rem;pointer-events:auto}@supports (color:contrast-color(red)){.qs-panel{color:contrast-color(var(--qs-surface))}}.qs-tiles{display:grid;gap:.5rem;grid-template-columns:repeat(2,minmax(0,1fr))}.qs-tile-icon{--icon-size:1.5rem;--icon-padding:0;--icon-color:currentColor;block-size:var(--icon-size);color:contrast-color(var(--qs-surface));flex:0 0 auto;inline-size:var(--icon-size);line-height:0;min-block-size:var(--icon-size);min-inline-size:var(--icon-size)}@supports (color:color-mix(in lch,red,blue)) and (color:contrast-color(red)){.qs-tile-icon{color:color-mix(in oklch,contrast-color(var(--qs-surface)) 40%,var(--color-primary,var(--qs-primary)))}}.qs-tile{align-items:center;background:color-mix(in oklab,var(--qs-on-surface) 8%,transparent);border:none;border-radius:10px;color:inherit;cursor:pointer;display:flex;gap:.6rem;min-inline-size:0;padding:.55rem .65rem;text-align:start;transition:background-color .14s ease,color .14s ease}.qs-tile,.qs-tile:hover{color:contrast-color(inherit(background-color))}.qs-tile:hover{background:color-mix(in oklab,var(--qs-on-surface) 14%,transparent)}.qs-tile:active{background:color-mix(in oklab,var(--qs-on-surface) 18%,transparent);color:contrast-color(inherit(background-color))}.qs-tile:focus-visible{outline:2px solid var(--color-primary,var(--qs-primary));outline-offset:2px}.qs-tile[aria-pressed=true]{background:color-mix(in oklab,var(--color-primary,var(--qs-primary)) 26%,transparent);color:var(--color-primary,var(--qs-primary))}@supports (color:color-mix(in lch,red,blue)) and (color:contrast-color(red)){.qs-tile[aria-pressed=true]{color:color-mix(in oklch,contrast-color(var(--qs-surface,var(--color-surface))) 60%,var(--color-primary,var(--qs-primary)))}}.qs-tile[aria-pressed=true] .qs-tile-icon{--icon-color:var(--color-primary,var(--qs-primary));--icon-color:currentColor}@supports (color:color-mix(in lch,red,blue)) and (color:contrast-color(red)){.qs-tile[aria-pressed=true] .qs-tile-icon{--icon-color:color-mix(in oklch,contrast-color(var(--qs-surface,var(--color-surface))) 60%,var(--color-primary,var(--qs-primary)))}}.qs-tile-text{color:color-mix(in oklch,contrast-color(var(--qs-surface)) 40%,var(--color-primary,var(--qs-primary)));display:flex;flex-direction:column;gap:.05rem;min-inline-size:0;overflow:hidden}.qs-tile-label{font-size:.78rem;font-weight:600}.qs-tile-label,.qs-tile-sub{color:contrast-color(var(--qs-surface));overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.qs-tile-sub{font-size:.68rem;font-weight:500;opacity:.7}.qs-sliders{border-block-start:1px solid var(--qs-outline);color:contrast-color(var(--qs-surface));display:grid;gap:.6rem;padding-block-start:.7rem}.qs-slider-row{align-items:center;cursor:default;display:flex;gap:.65rem}.qs-slider-icon{--icon-size:1.35rem;--icon-padding:0;--icon-color:currentColor;block-size:var(--icon-size);color:contrast-color(var(--qs-surface));flex:0 0 auto;inline-size:var(--icon-size);line-height:0;min-block-size:var(--icon-size);min-inline-size:var(--icon-size)}.qs-slider-col{display:flex;flex:1 1 auto;flex-direction:column;gap:.25rem;min-inline-size:0}.qs-slider-label{font-size:.68rem;font-weight:500;opacity:.75}.qs-slider{appearance:none;-webkit-appearance:none;background:transparent;block-size:1.1rem;color:contrast-color(inherit(background-color));cursor:pointer;inline-size:100%;margin:0}.qs-slider::-webkit-slider-runnable-track{background:color-mix(in oklab,var(--qs-on-surface) 18%,transparent);block-size:4px;border-radius:999px;color:contrast-color(inherit(background-color))}.qs-slider::-moz-range-track{background:color-mix(in oklab,var(--qs-on-surface) 18%,transparent);block-size:4px;border-radius:999px;color:contrast-color(inherit(background-color))}.qs-slider::-webkit-slider-thumb{appearance:none;-webkit-appearance:none;background:color-mix(in oklch,contrast-color(var(--qs-surface,var(--color-surface))) 40%,var(--color-primary,var(--qs-primary)));block-size:1rem;border:none;border-radius:50%;box-shadow:0 1px 4px rgba(0,0,0,.35);color:color-mix(in oklch,contrast-color(var(--qs-surface,var(--color-surface))) 40%,var(--color-primary,var(--qs-primary)));inline-size:1rem;margin-block-start:-6px}.qs-slider::-moz-range-thumb{background:color-mix(in oklch,contrast-color(var(--qs-surface,var(--color-surface))) 40%,var(--color-primary,var(--qs-primary)));block-size:1rem;border:none;border-radius:50%;box-shadow:0 1px 4px rgba(0,0,0,.35);color:color-mix(in oklch,contrast-color(var(--qs-surface,var(--color-surface))) 40%,var(--color-primary,var(--qs-primary)));inline-size:1rem}.qs-slider:focus-visible::-webkit-slider-thumb{background:color-mix(in oklch,contrast-color(var(--qs-surface,var(--color-surface))) 40%,var(--color-primary,var(--qs-primary)));color:color-mix(in oklch,contrast-color(var(--qs-surface,var(--color-surface))) 40%,var(--color-primary,var(--qs-primary)));outline:2px solid var(--color-primary,var(--qs-primary));outline-offset:2px}.qs-footer{align-items:center;border-block-start:1px solid var(--qs-outline);display:flex;flex-direction:row;flex-wrap:nowrap;gap:.4rem;justify-content:flex-end;padding-block-start:.65rem}.qs-footer-btn{align-items:center;background:color-mix(in oklab,var(--qs-on-surface) 8%,transparent);border:none;border-radius:8px;color:contrast-color(var(--qs-surface));cursor:pointer;display:inline-flex;font:600 .72rem/1.2 ui-sans-serif,system-ui,sans-serif;gap:.35rem;min-inline-size:0;padding:.28rem .55rem;transition:background-color .14s ease}.qs-footer-btn:hover{background:color-mix(in oklab,var(--qs-on-surface) 14%,transparent)}.qs-footer-btn:active{background:color-mix(in oklab,var(--qs-on-surface) 18%,transparent)}.qs-footer-btn:focus-visible{outline:2px solid var(--color-primary,var(--qs-primary));outline-offset:2px}.qs-footer-icon{--icon-size:1.15rem;--icon-padding:0;--icon-color:currentColor;block-size:var(--icon-size);flex:0 0 auto;inline-size:var(--icon-size);line-height:0;min-block-size:var(--icon-size);min-inline-size:var(--icon-size)}}");
/** Shared exclusivity/positioning kind — see `ChromeFlyout.ts`. Mirrors `CalendarFlyout.ts`. */
var FLYOUT_KIND = "quick-settings";
var THEME_ATTR = "data-theme";
/** Minimum required key per spec; `THEME_STORAGE_KEY_DOTTED` mirrors readers that expect a dotted name. */
var THEME_STORAGE_KEY = "rs-appearance-theme";
var THEME_STORAGE_KEY_DOTTED = "appearance.theme";
/** Best-effort merge targets: patch `appearance.theme` inside any settings blob found under these keys. */
var SETTINGS_BLOB_KEYS = [
	"rs-settings",
	"cwsp-settings",
	"u2-settings"
];
var prefersDarkScheme = () => {
	try {
		return matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? true;
	} catch {
		return true;
	}
};
/** Patch `.appearance.theme` into any parseable JSON settings blob under known keys (best-effort). */
var mergeThemeIntoSettingsBlobs = (mode) => {
	for (const key of SETTINGS_BLOB_KEYS) try {
		const raw = localStorage.getItem(key);
		if (!raw) continue;
		const blob = JSON.parse(raw);
		if (!blob || typeof blob !== "object") continue;
		blob.appearance = {
			...blob.appearance ?? {},
			theme: mode
		};
		localStorage.setItem(key, JSON.stringify(blob));
	} catch {}
};
/** Current theme: `data-theme` attr > stored pref > OS `prefers-color-scheme`. */
var getCurrentQuickTheme = () => {
	try {
		const attr = document.documentElement.getAttribute(THEME_ATTR);
		if (attr === "light" || attr === "dark") return attr;
		const stored = localStorage.getItem(THEME_STORAGE_KEY);
		if (stored === "light" || stored === "dark") return stored;
	} catch {}
	return prefersDarkScheme() ? "dark" : "light";
};
/**
* Apply light/dark from Quick Settings without importing app Theme.ts (fl.ui ↔ subsystem cycle).
* WHY: Must mirror `syncBrowserChromeTheme` — `data-scheme` + hosts + body — or env-shell /
* veela keep OS `prefers-color-scheme` / stale `data-scheme="auto"` and light never sticks.
*
* When preference is `auto`, keep `data-scheme="auto"` and pin `data-theme` to the resolved
* OS mode so light-dark()/components refresh while still tracking system changes.
*/
var applyQuickTheme = (mode) => {
	const root = document.documentElement;
	const resolved = mode === "auto" ? prefersDarkScheme() ? "dark" : "light" : mode;
	const schemeAttr = mode === "auto" ? "auto" : mode;
	root.setAttribute("data-scheme", schemeAttr);
	root.setAttribute(THEME_ATTR, resolved);
	root.style.colorScheme = resolved;
	try {
		if (document.body) document.body.style.colorScheme = resolved;
	} catch {}
	try {
		document.querySelectorAll(".env-shell-root, [data-shell], ui-window").forEach((node) => {
			const el = node;
			el.dataset.theme = resolved;
			el.style.colorScheme = resolved;
			const inner = el.shadowRoot?.querySelector?.(".app-shell");
			if (inner) {
				inner.dataset.theme = resolved;
				inner.style.colorScheme = resolved;
			}
		});
	} catch {}
	try {
		localStorage.setItem(THEME_STORAGE_KEY, mode === "auto" ? "auto" : mode);
		localStorage.setItem(THEME_STORAGE_KEY_DOTTED, mode === "auto" ? "auto" : mode);
	} catch {}
	if (mode !== "auto") mergeThemeIntoSettingsBlobs(mode);
	root.dispatchEvent(new CustomEvent("u2-theme-change", {
		bubbles: true,
		detail: {
			source: "quick-settings",
			theme: resolved,
			preference: mode
		}
	}));
};
/** Stored preference: light | dark | auto (missing → auto on Cap / OS-follow). */
var getStoredThemePreference = () => {
	try {
		const stored = String(localStorage.getItem(THEME_STORAGE_KEY) || "").trim().toLowerCase();
		if (stored === "light" || stored === "dark" || stored === "auto") return stored;
		const dotted = String(localStorage.getItem(THEME_STORAGE_KEY_DOTTED) || "").trim().toLowerCase();
		if (dotted === "light" || dotted === "dark" || dotted === "auto") return dotted;
	} catch {}
	return "auto";
};
/** Follow OS light/dark when preference is `auto`. Idempotent. */
var installAutoThemeFollow = () => {
	const g = globalThis;
	if (g.__CWSP_AUTO_THEME_FOLLOW__) return;
	g.__CWSP_AUTO_THEME_FOLLOW__ = true;
	const mq = typeof matchMedia === "function" ? matchMedia("(prefers-color-scheme: dark)") : null;
	if (!mq) return;
	const sync = () => {
		if (getStoredThemePreference() !== "auto") return;
		applyQuickTheme("auto");
	};
	try {
		mq.addEventListener("change", sync);
	} catch {
		try {
			mq.addListener(sync);
		} catch {}
	}
	try {
		sync();
	} catch {}
};
var unlockOrientationLock = (unlocked) => {
	document.documentElement.style.setProperty("--orientation-lock", unlocked ? "unlocked" : "locked");
	document.documentElement.style.setProperty("--orientation-lock-angle", unlocked ? "0deg" : "90deg");
	Promise.try(async () => {
		try {
			const orientation = screen.orientation;
			if (unlocked) {
				orientation.unlock?.();
				return;
			}
			if (typeof orientation.lock !== "function") return;
			const locked = orientation.lock(orientation.type || "natural");
			if (locked && typeof locked.catch === "function") await locked.catch(() => {});
		} catch (error) {
			console.warn(error);
		}
	})?.catch?.(console.warn.bind(console));
};
var NIGHT_FILTER_ID = "env-night-filter";
/** Below `CHROME_FLYOUT_Z` (2147483600, ChromeFlyout.ts); above env-shell wallpaper/chrome. */
var NIGHT_FILTER_Z = "2147483001";
var NIGHT_STORAGE_KEY = "rs-night-filter";
var BRIGHTNESS_STORAGE_KEY = "rs-brightness-filter";
var clampPct = (n) => Math.max(0, Math.min(100, Number.isFinite(n) ? n : 0));
/** Ensure the single fixed overlay div used for both the night-light tint and the brightness stub filter. */
var ensureNightFilterEl = () => {
	const existing = document.getElementById(NIGHT_FILTER_ID);
	if (existing instanceof HTMLElement) return existing;
	const el = document.createElement("div");
	el.id = NIGHT_FILTER_ID;
	el.setAttribute("aria-hidden", "true");
	el.style.cssText = [
		"dynamic-range-limit:no-limit",
		"color-space:display-p3",
		"position:fixed",
		"inset:0",
		"pointer-events:none",
		`z-index:${NIGHT_FILTER_Z}`,
		"background-color:color(display-p3 1 0.55 0.24)",
		"mix-blend-mode:multiply",
		"opacity:0",
		"visibility:hidden",
		"transition:opacity 160ms ease"
	].join(";");
	(document.body ?? document.documentElement).appendChild(el);
	return el;
};
/** value: 0-100 night-light intensity mapped to overlay opacity 0-1. */
var applyNightFilter = (value) => {
	const v = clampPct(value);
	const el = ensureNightFilterEl();
	const opacity = v / 100;
	el.style.opacity = String(opacity);
	el.style.visibility = opacity >= .01 ? "visible" : "hidden";
	try {
		localStorage.setItem(NIGHT_STORAGE_KEY, String(v));
	} catch {}
};
/** value: 0-100 brightness stub; 50 == neutral (`brightness(1)`), mapped to ~0.4-1.2. */
var applyBrightnessFilter = (value) => {
	const v = clampPct(value);
	ensureNightFilterEl();
	v <= 50 ? .4 + v / 50 * .6 : 1 + (v - 50) / 50 * .2;
	try {
		localStorage.setItem(BRIGHTNESS_STORAGE_KEY, String(v));
	} catch {}
};
var readStoredFilterValue = (key, fallback) => {
	try {
		const raw = localStorage.getItem(key);
		if (raw == null) return fallback;
		const n = Number(raw);
		return Number.isFinite(n) ? clampPct(n) : fallback;
	} catch {
		return fallback;
	}
};
/** Restore persisted night/brightness filters; idempotent — safe to call on every panel open. */
var restoreQuickFilters = () => {
	const night = readStoredFilterValue(NIGHT_STORAGE_KEY, 0);
	const brightness = readStoredFilterValue(BRIGHTNESS_STORAGE_KEY, 50);
	applyNightFilter(night);
	applyBrightnessFilter(brightness);
	return {
		night,
		brightness
	};
};
if (typeof document !== "undefined") {
	if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => restoreQuickFilters(), { once: true });
	else restoreQuickFilters();
}
var PLACEHOLDER_TILE_IDS = [
	"wifi",
	"bluetooth",
	"focus",
	"airplane",
	"orientation"
];
var THEME_TILE_ICON = {
	light: "sun",
	dark: "moon"
};
var THEME_TILE_SUB = {
	light: "Light",
	dark: "Dark"
};
var syncThemeTile = (root) => {
	const tile = root.querySelector("[data-qs-tile=\"theme\"]");
	if (!tile) return;
	const mode = getCurrentQuickTheme();
	tile.querySelector("ui-icon")?.setAttribute("icon", THEME_TILE_ICON[mode]);
	const sub = tile.querySelector("[data-qs-tile-sub]");
	if (sub) sub.textContent = THEME_TILE_SUB[mode];
	tile.setAttribute("aria-pressed", mode === "dark" ? "true" : "false");
};
/** One-time wiring for a freshly-rendered panel shadow root (guarded by `data-qs-wired`). */
var wireQuickSettingsPanel = (host) => {
	const root = host.shadowRoot;
	const panel = root?.querySelector(".qs-panel");
	if (!root || !panel || panel.hasAttribute("data-qs-wired")) return;
	panel.setAttribute("data-qs-wired", "");
	syncThemeTile(root);
	root.querySelector("[data-qs-tile=\"theme\"]")?.addEventListener("click", () => {
		applyQuickTheme(getCurrentQuickTheme() === "dark" ? "light" : "dark");
		syncThemeTile(root);
	});
	const isPressed = (target) => Boolean(target?.getAttribute?.("aria-pressed")) && target?.getAttribute?.("aria-pressed") === "true";
	root.querySelector?.("[data-qs-tile=\"orientation\"]")?.addEventListener?.("click", (ev) => {
		const realTarget = MOCElement((ev?.target?.matches?.("[data-qs-tile=\"orientation\"]") ? ev?.target : ev?.target?.querySelector?.("[data-qs-tile=\"orientation\"]")) || ev?.target, "[data-qs-tile=\"orientation\"]");
		const isUnlocking = isPressed(realTarget);
		unlockOrientationLock(isUnlocking);
		const icon = realTarget?.matches?.("ui-icon") ? realTarget : realTarget?.querySelector?.("ui-icon");
		if (icon) icon.setAttribute?.("icon", !isUnlocking ? "lock" : "device-rotate");
		if (icon) icon.setAttribute?.("icon-style", "duotone");
	});
	for (const id of PLACEHOLDER_TILE_IDS) {
		const tile = root.querySelector(`[data-qs-tile="${id}"]`);
		if (!tile) continue;
		tile.addEventListener("click", () => {
			const next = tile.getAttribute("aria-pressed") !== "true";
			tile.setAttribute("aria-pressed", String(next));
			const sub = tile.querySelector("[data-qs-tile-sub]");
			if (sub) sub.textContent = next ? "On" : "Off";
		});
	}
	const { night, brightness } = restoreQuickFilters();
	const nightSlider = root.querySelector("[data-qs-slider=\"night\"]");
	const brightnessSlider = root.querySelector("[data-qs-slider=\"brightness\"]");
	if (nightSlider) {
		nightSlider.value = String(night);
		nightSlider.addEventListener("input", () => applyNightFilter(nightSlider.valueAsNumber));
	}
	if (brightnessSlider) {
		brightnessSlider.value = String(brightness);
		brightnessSlider.addEventListener("input", () => applyBrightnessFilter(brightnessSlider.valueAsNumber));
	}
	const openShellView = (view) => {
		closeQuickSettingsFlyout();
		const run = () => {
			const opener = getSpeedDialViewOpener();
			if (typeof opener === "function") {
				opener(view, {});
				return;
			}
			const hash = `#${view}`;
			if (typeof location !== "undefined" && location.hash !== hash) navigate(hash);
		};
		if (typeof requestAnimationFrame === "function") requestAnimationFrame(run);
		else queueMicrotask(run);
	};
	root.querySelectorAll("[data-qs-open]").forEach((btn) => {
		btn.addEventListener("click", () => {
			const view = String(btn.getAttribute("data-qs-open") || "").trim();
			if (view === "settings" || view === "explorer") openShellView(view);
		});
	});
};
var QuickSettings = class QuickSettings extends UIElement {
	constructor() {
		super();
	}
	styles = () => styled;
	render = () => H`
<div class="qs-panel" part="panel" role="menu" aria-label="Quick settings">
    <div class="qs-tiles" part="tiles" role="group" aria-label="Quick toggles">
        <button type="button" class="qs-tile qs-tile--theme" part="tile" data-qs-tile="theme" role="menuitemcheckbox" aria-pressed="false" title="Theme">
            <ui-icon class="qs-tile-icon" part="tile-icon" icon="moon" icon-style="duotone" aria-hidden="true"></ui-icon>
            <span class="qs-tile-text">
                <span class="qs-tile-label">Theme</span>
                <span class="qs-tile-sub" data-qs-tile-sub>Dark</span>
            </span>
        </button>
        <button type="button" class="qs-tile" part="tile" data-qs-tile="wifi" role="menuitemcheckbox" aria-pressed="true" title="Wi-Fi">
            <ui-icon class="qs-tile-icon" part="tile-icon" icon="wifi-high" icon-style="duotone" aria-hidden="true"></ui-icon>
            <span class="qs-tile-text">
                <span class="qs-tile-label">Wi-Fi</span>
                <span class="qs-tile-sub" data-qs-tile-sub>On</span>
            </span>
        </button>
        <button type="button" class="qs-tile" part="tile" data-qs-tile="bluetooth" role="menuitemcheckbox" aria-pressed="true" title="Bluetooth">
            <ui-icon class="qs-tile-icon" part="tile-icon" icon="bluetooth" icon-style="duotone" aria-hidden="true"></ui-icon>
            <span class="qs-tile-text">
                <span class="qs-tile-label">Bluetooth</span>
                <span class="qs-tile-sub" data-qs-tile-sub>On</span>
            </span>
        </button>
        <button type="button" class="qs-tile" part="tile" data-qs-tile="focus" role="menuitemcheckbox" aria-pressed="false" title="Focus assist">
            <ui-icon class="qs-tile-icon" part="tile-icon" icon="bell-slash" icon-style="duotone" aria-hidden="true"></ui-icon>
            <span class="qs-tile-text">
                <span class="qs-tile-label">Focus assist</span>
                <span class="qs-tile-sub" data-qs-tile-sub>Off</span>
            </span>
        </button>
        <button type="button" class="qs-tile" part="tile" data-qs-tile="airplane" role="menuitemcheckbox" aria-pressed="false" title="Airplane mode">
            <ui-icon class="qs-tile-icon" part="tile-icon" icon="airplane" icon-style="duotone" aria-hidden="true"></ui-icon>
            <span class="qs-tile-text">
                <span class="qs-tile-label">Airplane mode</span>
                <span class="qs-tile-sub" data-qs-tile-sub>Off</span>
            </span>
        </button>
        <button type="button" class="qs-tile qs-tile--orientation" part="tile" data-qs-tile="orientation" role="menuitemcheckbox" aria-pressed="true" title="Orientation lock">
            <ui-icon class="qs-tile-icon" part="tile-icon" icon="lock" icon-style="duotone" aria-hidden="true"></ui-icon>
            <span class="qs-tile-text">
                <span class="qs-tile-label">Orientation lock</span>
                <span class="qs-tile-sub" data-qs-tile-sub>On</span>
            </span>
        </button>
    </div>
    <div class="qs-sliders" part="sliders">
        <label class="qs-slider-row" part="slider-row">
            <ui-icon class="qs-slider-icon" part="slider-icon" icon="moon-stars" icon-style="duotone" aria-hidden="true"></ui-icon>
            <span class="qs-slider-col">
                <span class="qs-slider-label">Night light</span>
                <input class="qs-slider" part="slider" type="range" min="0" max="100" step="1" value="0" data-qs-slider="night" aria-label="Night light" />
            </span>
        </label>
        <label class="qs-slider-row" part="slider-row">
            <ui-icon class="qs-slider-icon" part="slider-icon" icon="sun-dim" icon-style="duotone" aria-hidden="true"></ui-icon>
            <span class="qs-slider-col">
                <span class="qs-slider-label">Brightness</span>
                <input class="qs-slider" part="slider" type="range" min="0" max="100" step="1" value="50" data-qs-slider="brightness" aria-label="Brightness" />
            </span>
        </label>
    </div>
    <div class="qs-footer" part="footer" role="group" aria-label="Open apps">
        <button type="button" class="qs-footer-btn" part="footer-btn" data-qs-open="explorer" role="menuitem" title="Explorer">
            <ui-icon class="qs-footer-icon" icon="books" icon-style="duotone" aria-hidden="true"></ui-icon>
            <span>Explorer</span>
        </button>
        <button type="button" class="qs-footer-btn" part="footer-btn" data-qs-open="settings" role="menuitem" title="Settings">
            <ui-icon class="qs-footer-icon" icon="gear-six" icon-style="duotone" aria-hidden="true"></ui-icon>
            <span>Settings</span>
        </button>
    </div>
</div>`;
	onRender() {
		super.onRender();
		wireQuickSettingsPanel(this);
		return this;
	}
	open() {
		syncThemeTile(this.shadowRoot);
		this.removeAttribute("hidden");
		this.hidden = false;
		this.setAttribute("open", "");
	}
	close() {
		this.hidden = true;
		this.setAttribute("hidden", "");
		this.removeAttribute("open");
	}
	toggle(anchor) {
		if (this.hasAttribute("open")) this.close();
		else this.open();
	}
};
QuickSettings = __decorate([defineElement("ui-quick-settings")], QuickSettings);
var singleton = null;
/** Mount (once) the singleton `<ui-quick-settings>` into the shared overlay root. */
function ensureQuickSettingsElement() {
	if (singleton?.isConnected) return singleton;
	const overlayRoot = ensureOverlayRoot();
	let el = overlayRoot.querySelector("ui-quick-settings");
	if (!el) {
		el = document.createElement("ui-quick-settings");
		el.hidden = true;
		overlayRoot.appendChild(el);
	}
	singleton = el;
	return el;
}
/** Toggle the shared Quick Settings flyout, wired through `ChromeFlyout`'s exclusive-open contract. */
function toggleQuickSettingsFlyout(anchor) {
	toggleChromeFlyout(FLYOUT_KIND, () => {
		const el = ensureQuickSettingsElement();
		const pinned = document.documentElement.getAttribute("data-theme");
		if (pinned === "light" || pinned === "dark") {
			el.dataset.theme = pinned;
			el.style.colorScheme = pinned;
		}
		positionFlyout(el, FLYOUT_KIND);
		el.open();
		return {
			kind: FLYOUT_KIND,
			el,
			close: () => {
				el.close();
				closeChromeFlyout(FLYOUT_KIND);
			},
			contains: (node) => node instanceof Node && el.contains(node)
		};
	});
}
/** Close the Quick Settings flyout if open (no-op otherwise). */
function closeQuickSettingsFlyout() {
	closeChromeFlyout(FLYOUT_KIND);
}
Promise.try(() => {
	if (typeof requestAnimationFrame === "function") requestAnimationFrame(() => {
		Promise.try(() => {
			screen?.orientation?.lock?.("natural");
		}).catch(console.warn.bind(console));
	});
}).catch(console.warn.bind(console));
try {
	installAutoThemeFollow();
} catch {}
//#endregion
export { toggleQuickSettingsFlyout as n, restoreQuickFilters as t };
