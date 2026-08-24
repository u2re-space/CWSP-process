import { Ot as CwsBridge } from "./boot-index.js";
import { J as UIElement_default, Jt as H, Sn as preloadStyle, Y as __decorate, cn as ref, ct as applyWallpaperPaperFromLuma, en as E, qt as defineElement, rn as effect } from "../com/app.js";
import { t as toggleCalendarFlyout } from "./environment-components-calendar-CalendarFlyout.js";
import { n as toggleQuickSettingsFlyout } from "./environment-components-settings-QuickSettings.js";
//#endregion
//#region src/frontend/shells/environment/components/statusbar/statusbar.ts
/**
* WHY: Uses FL-UI `ui-statusbar` (left/center/right slots) — not a parallel component.
* Reactive network/battery chips are shared via {@link attachShellDeviceStatus} for the desktop taskbar.
* Overlay mode (mobile browser / fullscreen, not standalone): transparent top band, time L / icons R.
*/
var styled = preloadStyle(":host(ui-statusbar){align-items:center;background:transparent;box-sizing:border-box;color:var(--env-status-fg,var(--wallpaper-contrast-color,CanvasText));display:flex;flex-direction:row;gap:.35rem;inline-size:100%;justify-content:space-between}:host(ui-statusbar) :is(.center,.left,.right){align-items:center;background:transparent;display:flex;min-inline-size:0;padding-block-start:.5rem}:host(ui-statusbar) .left{flex:0 1 auto;justify-content:flex-start;padding-inline-start:max(1rem,env(safe-area-inset-left,0))}:host(ui-statusbar) .center{flex:1 1 auto;justify-content:center}:host(ui-statusbar) .right{flex:0 1 auto;justify-content:flex-end;margin-inline-start:auto;padding-inline-end:max(1rem,env(safe-area-inset-right,0))}@media screen and (pointer:fine) and ((min-width:768px) or (hover:hover)){:host(ui-statusbar),ui-statusbar{display:none!important}}@layer ui-statusbar{.env-ui-statusbar{backdrop-filter:blur(10px);background:color-mix(in oklab,var(--color-surface-container,--u2-color-mod(var(--base-color,#5a9ec8),960)) 88%,transparent);border-block-start:1px solid var(--wf-md-outline-variant,var(--color-outline-variant));color:var(--color-on-surface,--u2-color-mod(var(--base-color,#5a9ec8),100));order:1;padding:.35rem .65rem calc(.35rem + env(safe-area-inset-bottom, 0))}.env-ui-statusbar__intro p{margin:.1rem 0;opacity:.92}.env-ui-statusbar__right{align-items:center;display:flex;justify-content:flex-end}.env-ui-statusbar__clock{border-radius:.35rem;color:inherit;cursor:pointer;font:600 .8125rem/1 ui-sans-serif,system-ui,sans-serif;font-variant-numeric:tabular-nums;letter-spacing:.01em;padding:.15rem .25rem;pointer-events:auto;user-select:none}.env-ui-statusbar__clock:focus-visible,.env-ui-statusbar__clock:hover{background:color-mix(in oklch,currentColor 12%,transparent);color:contrast-color(inherit(background-color));outline:none}.env-device-tray--footer{border-radius:.35rem;cursor:pointer;pointer-events:auto}.env-device-tray--footer:focus-visible,.env-device-tray--footer:hover{background:color-mix(in oklch,currentColor 12%,transparent);color:contrast-color(inherit(background-color));outline:none}.env-status-bar__tray{align-items:center;display:flex;flex-wrap:nowrap;gap:.35rem}.env-status-bar__chip{align-items:center;background:color-mix(in oklch,var(--env-status-fg,var(--wf-md-on-surface,white)) 10%,transparent);border:1px solid color-mix(in oklch,var(--env-status-fg,var(--wf-md-on-surface,white)) 18%,transparent);border-radius:999px;color:inherit;color:contrast-color(inherit(background-color));display:inline-flex;gap:.25rem;line-height:1;padding:.12rem .35rem}.env-status-bar__chip,.env-status-bar__chip span{font-variant-numeric:tabular-nums}.env-status-bar__chip ui-icon{--icon-size:1.15rem;--icon-padding:0;--icon-color:var(--env-status-fg,var(--wallpaper-contrast-color,currentColor));block-size:var(--icon-size);color:var(--icon-color);display:block;font-size:var(--icon-size);inline-size:var(--icon-size);min-block-size:var(--icon-size);min-inline-size:var(--icon-size)}.env-status-bar__pct{font-variant-numeric:tabular-nums;opacity:.95}.env-status-bar__meta{font-size:11px;margin:0;opacity:.88}.env-shell-chrome[data-status-overlay] .env-ui-statusbar,.env-shell-root[data-status-overlay]>.env-shell-chrome .env-ui-statusbar{align-items:center;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;background:transparent!important;block-size:var(--env-status-inset-top,max(2rem,env(safe-area-inset-top,0px)));border:0!important;box-sizing:border-box;display:flex;inset-block-end:auto;inset-block-start:0;inset-inline:0;min-block-size:var(--env-status-inset-top,max(2rem,env(safe-area-inset-top,0px)));order:unset;padding:0 .75rem;position:fixed;z-index:calc(var(--env-z-shell-chrome, 2147483000) + 2);--icon-color:var(--env-status-fg,var(--wallpaper-contrast-color));color:var(--env-status-fg,var(--wallpaper-contrast-color));pointer-events:none}.env-shell-chrome[data-status-overlay] :is(.env-status-bar__meta,.env-ui-statusbar__intro){display:none!important}.env-shell-chrome[data-status-overlay] .env-ui-statusbar__clock{color:var(--env-status-fg,var(--wallpaper-contrast-color));display:block;font-size:.875rem}.env-shell-chrome[data-status-overlay] :is(.env-device-tray--footer,.env-status-bar__chip){color:var(--env-status-fg,var(--wallpaper-contrast-color))}.env-shell-chrome[data-status-overlay] .env-status-bar__chip ui-icon{--icon-size:1.25rem;--icon-padding:0;--icon-color:var(--env-status-fg,var(--wallpaper-contrast-color));block-size:var(--icon-size);color:var(--icon-color);font-size:var(--icon-size);inline-size:var(--icon-size);min-block-size:var(--icon-size);min-inline-size:var(--icon-size)}.env-shell-chrome[data-status-overlay] .env-status-bar__pct{font-size:.8125rem}.env-shell-chrome[data-status-overlay] .env-device-tray--footer{display:flex!important}.env-shell-chrome[data-status-overlay] .env-status-bar__chip{background:transparent;border-color:transparent;padding-inline:.15rem}.env-shell-chrome[data-desktop]:not([data-status-overlay]) .env-ui-statusbar__clock,.env-shell-chrome[data-standalone] .env-ui-statusbar,.env-shell-root[data-standalone] .env-shell-chrome:not([data-desktop]) .env-ui-statusbar{display:none!important}.env-shell-root[data-env-native-task] .env-shell-chrome[data-desktop],env-shell-container[data-env-native-task] .env-shell-chrome[data-desktop]{opacity:0;pointer-events:none;visibility:hidden}}");
function matchShellDisplayMode() {
	if (typeof matchMedia !== "function") return "unknown";
	try {
		if (matchMedia("(display-mode: window-controls-overlay)").matches) return "window-controls-overlay";
		if (matchMedia("(display-mode: fullscreen)").matches) return "fullscreen";
		if (matchMedia("(display-mode: standalone)").matches) return "standalone";
		if (matchMedia("(display-mode: minimal-ui)").matches) return "minimal-ui";
		if (matchMedia("(display-mode: browser)").matches) return "browser";
	} catch {}
	return "unknown";
}
function isShellStandaloneDisplay() {
	const mode = matchShellDisplayMode();
	if (mode === "standalone" || mode === "minimal-ui") return true;
	try {
		if (navigator.standalone === true) return true;
	} catch {}
	return false;
}
/** Capacitor Android/iOS shell — OS owns the status bar; suppress in-app overlay chrome. */
function isNativeCapacitorHost() {
	if (typeof document !== "undefined" && document.documentElement.dataset.cwspNativeShell === "capacitor") return true;
	try {
		const c = globalThis.Capacitor;
		return typeof c?.isNativePlatform === "function" && Boolean(c.isNativePlatform());
	} catch {
		return false;
	}
}
/**
* Transparent top status overlay when:
* - mobile browser (not standalone), or
* - PWA / CSS fullscreen, or
* - document fullscreen API on a mobile-sized viewport.
* Standalone installed PWA: no overlay (OS chrome / edge-to-edge windows).
*/
function shouldShowStatusOverlay(opts) {
	if (isNativeCapacitorHost()) return false;
	if (opts.standalone ?? isShellStandaloneDisplay()) return false;
	const mode = opts.displayMode ?? matchShellDisplayMode();
	const docFs = typeof document !== "undefined" && Boolean(document.fullscreenElement || document.webkitFullscreenElement);
	if (mode === "fullscreen" || docFs) return true;
	return !opts.desktop;
}
/** European 24h clock + DD.MM.YYYY for taskbar / status overlay. */
function formatChromeClock(now = /* @__PURE__ */ new Date()) {
	const pad = (n) => String(n).padStart(2, "0");
	return {
		time: `${pad(now.getHours())}:${pad(now.getMinutes())}`,
		date: `${pad(now.getDate())}.${pad(now.getMonth() + 1)}.${now.getFullYear()}`
	};
}
function formatStatusClock(d = /* @__PURE__ */ new Date()) {
	return formatChromeClock(d).time;
}
/**
* Sample wallpaper + open-window chrome → status/launcher fg.
* WHY: Overlay status sits on wallpaper OR on light window title spacers (`data-status-gap`);
* wallpaper-only probe kept white icons over light titlebars in app light theme.
*/
function attachStatusBarContrast(target) {
	let disposed = false;
	let timer = null;
	const lumaOf = (data, step = 48) => {
		let sum = 0;
		let n = 0;
		let maxChan = 0;
		for (let i = 0; i < data.length; i += 4 * step) {
			if ((data[i + 3] ?? 255) < 16) continue;
			const r = data[i] / 255;
			const g = data[i + 1] / 255;
			const b = data[i + 2] / 255;
			maxChan = Math.max(maxChan, r, g, b);
			sum += .2126 * r + .7152 * g + .0722 * b;
			n++;
		}
		if (n < 8) return null;
		if (maxChan < .02) return null;
		return sum / n;
	};
	const applyStatusFg = (luma) => {
		const darkFg = luma > .55;
		target.style.setProperty("--env-status-fg", darkFg ? "#1c1c1e" : "#f5f5f7");
		target.style.setProperty("--env-status-fg-muted", darkFg ? "rgba(28,28,30,0.72)" : "rgba(245,245,247,0.78)");
		target.dataset.statusContrast = darkFg ? "dark" : "light";
	};
	const applyStatusFgFromWallpaper = () => {
		target.style.setProperty("--env-status-fg", "var(--wallpaper-contrast-color)");
		target.style.setProperty("--env-status-fg-muted", "color-mix(in oklab, var(--wallpaper-contrast-color) 78%, transparent)");
		target.dataset.statusContrast = "wallpaper";
	};
	const applyLauncherFg = (luma) => {
		applyWallpaperPaperFromLuma(luma, [target]);
		target.dataset.launcherContrast = luma > .52 ? "dark" : "light";
	};
	/** Open managed windows that reserve the top status inset (title under overlay). */
	const statusGapWindowsOpen = () => {
		try {
			for (const win of document.querySelectorAll("ui-window[managed]")) {
				if (win.hidden || win.hasAttribute("hidden")) continue;
				if (win.getAttribute("aria-hidden") === "true") continue;
				const st = getComputedStyle(win);
				if (st.display === "none" || st.visibility === "hidden" || Number(st.opacity) === 0) continue;
				if (win.hasAttribute("data-status-gap") || win.hasAttribute("data-status-overlay-gap")) return true;
				if (win.getBoundingClientRect().top < Math.max(8, parseFloat(getComputedStyle(target).getPropertyValue("--env-status-inset-top")) || 32) + 8) return true;
			}
		} catch {}
		return false;
	};
	const sample = () => {
		if (disposed) return;
		const appTheme = (document.documentElement.getAttribute("data-theme") || "").toLowerCase();
		const windowsUnderStatus = statusGapWindowsOpen();
		if (windowsUnderStatus && appTheme === "light") applyStatusFg(.9);
		else if (windowsUnderStatus && appTheme === "dark") applyStatusFg(.15);
		else applyStatusFgFromWallpaper();
		try {
			const canvas = target.querySelector(".env-shell-wallpaper canvas") || document.querySelector(".env-shell-wallpaper canvas");
			if (canvas instanceof HTMLCanvasElement && canvas.width > 0 && canvas.height > 0) {
				const ctx = canvas.getContext("2d", { willReadFrequently: true });
				if (ctx) {
					const sw = canvas.width;
					const midY = Math.max(0, Math.round(canvas.height * .28));
					const midH = Math.max(1, Math.round(canvas.height * .36));
					const midLuma = lumaOf(ctx.getImageData(0, midY, sw, Math.min(midH, canvas.height - midY)).data);
					if (midLuma != null) {
						applyLauncherFg(midLuma);
						if (!windowsUnderStatus) applyStatusFgFromWallpaper();
						return;
					}
				}
			}
		} catch {}
	};
	const schedule = () => {
		if (timer != null) clearTimeout(timer);
		timer = setTimeout(sample, 120);
	};
	sample();
	const mo = typeof MutationObserver === "function" ? new MutationObserver(schedule) : null;
	const wallpaper = target.querySelector(".env-shell-wallpaper") || document.querySelector(".env-shell-wallpaper");
	if (wallpaper && mo) mo.observe(wallpaper, {
		childList: true,
		subtree: true,
		attributes: true
	});
	const winMo = typeof MutationObserver === "function" ? new MutationObserver(schedule) : null;
	winMo?.observe(document.documentElement, {
		childList: true,
		subtree: true,
		attributes: true,
		attributeFilter: [
			"hidden",
			"data-status-gap",
			"data-theme",
			"aria-hidden",
			"style",
			"class"
		]
	});
	window.addEventListener("resize", schedule);
	document.addEventListener("visibilitychange", schedule);
	document.addEventListener("env-chrome-surface", schedule);
	document.addEventListener("u2-theme-change", schedule);
	const mq = typeof matchMedia === "function" ? matchMedia("(prefers-color-scheme: dark)") : null;
	mq?.addEventListener?.("change", schedule);
	const interval = setInterval(sample, 8e3);
	return () => {
		disposed = true;
		if (timer != null) clearTimeout(timer);
		clearInterval(interval);
		mo?.disconnect();
		winMo?.disconnect();
		window.removeEventListener("resize", schedule);
		document.removeEventListener("visibilitychange", schedule);
		document.removeEventListener("env-chrome-surface", schedule);
		document.removeEventListener("u2-theme-change", schedule);
		mq?.removeEventListener?.("change", schedule);
	};
}
var StatusBar = class StatusBar extends UIElement_default {
	constructor() {
		super();
	}
	styles = () => styled;
	render = () => {
		return H`
<div style="background-color: transparent;" part="left"   class="left"  ><slot name="left"  ></slot></div>
        <div style="background-color: transparent;" part="center" class="center"><slot name="center"></slot></div>
        <div style="background-color: transparent;" part="right"  class="right" ><slot name="right" ></slot></div>`;
	};
};
StatusBar = __decorate([defineElement("ui-statusbar")], StatusBar);
function connectionOf(nav) {
	return nav.connection;
}
function networkIconForEffectiveType(etRaw) {
	const et = etRaw.toLowerCase();
	if (et === "slow-2g") return "wifi-low";
	if (et === "2g") return "wifi-medium";
	return "wifi-high";
}
function attachShellDeviceStatus() {
	const networkIcon = ref("wifi-high");
	const networkTitle = ref("");
	const batteryIcon = ref("battery-full");
	const batteryTitle = ref("");
	const batteryPct = ref("");
	const syncNetwork = () => {
		if (!navigator.onLine) {
			networkIcon.value = "wifi-slash";
			networkTitle.value = "Offline";
			return;
		}
		const c = connectionOf(navigator);
		if (!c || typeof c.effectiveType !== "string") {
			networkIcon.value = "globe";
			networkTitle.value = "Online (connection details unavailable)";
			return;
		}
		const et = String(c.effectiveType || "").toLowerCase();
		const down = typeof c.downlink === "number" ? `${c.downlink} Mb/s` : "";
		const save = c.saveData ? " · Data saver" : "";
		networkTitle.value = [et.toUpperCase(), down].filter(Boolean).join(" · ") + save;
		networkIcon.value = networkIconForEffectiveType(et);
	};
	let batteryLevelHandler = null;
	let batteryChargingHandler = null;
	let batteryManager = null;
	const applyBattery = (level, charging) => {
		const pct = Math.max(0, Math.min(100, Math.round(level * 100)));
		batteryPct.value = `${pct}%`;
		if (charging) {
			batteryIcon.value = "battery-charging-vertical";
			batteryTitle.value = `Charging · ${batteryPct.value}`;
			return;
		}
		batteryTitle.value = `Battery · ${batteryPct.value}`;
		if (level <= .08) batteryIcon.value = "battery-warning";
		else if (level <= .22) batteryIcon.value = "battery-low";
		else if (level <= .5) batteryIcon.value = "battery-medium";
		else if (level <= .8) batteryIcon.value = "battery-high";
		else batteryIcon.value = "battery-full";
	};
	syncNetwork();
	window.addEventListener("online", syncNetwork);
	window.addEventListener("offline", syncNetwork);
	const conn = connectionOf(navigator);
	conn?.addEventListener?.("change", syncNetwork);
	if (typeof navigator.getBattery === "function") navigator.getBattery().then((b) => {
		batteryManager = b;
		batteryLevelHandler = () => applyBattery(b.level, b.charging);
		batteryChargingHandler = batteryLevelHandler;
		b.addEventListener("levelchange", batteryLevelHandler);
		b.addEventListener("chargingchange", batteryChargingHandler);
		applyBattery(b.level, b.charging);
	});
	else {
		batteryIcon.value = "question";
		batteryTitle.value = "Battery status not supported in this browser";
		batteryPct.value = "—";
	}
	const dispose = () => {
		window.removeEventListener("online", syncNetwork);
		window.removeEventListener("offline", syncNetwork);
		conn?.removeEventListener?.("change", syncNetwork);
		if (batteryManager && batteryLevelHandler && batteryChargingHandler) {
			batteryManager.removeEventListener("levelchange", batteryLevelHandler);
			batteryManager.removeEventListener("chargingchange", batteryChargingHandler);
		}
	};
	return {
		networkIcon,
		networkTitle,
		batteryIcon,
		batteryTitle,
		batteryPct,
		dispose
	};
}
/** Reactive tray; use two instances (taskbar + footer) with visibility toggled by CSS — same refs update both. */
function buildShellDeviceTray(device, trayClass) {
	const row = H`<div class="env-status-bar__tray ${trayClass}">
        <span class="env-status-bar__chip" title=${device.networkTitle} aria-label=${device.networkTitle}>
            <ui-icon icon=${device.networkIcon} aria-hidden="true"></ui-icon>
        </span>
        <span class="env-status-bar__chip" title=${device.batteryTitle} aria-label=${device.batteryTitle}>
            <ui-icon icon=${device.batteryIcon} aria-hidden="true"></ui-icon>
            <span class="env-status-bar__pct"></span>
        </span>
    </div>`;
	const pctSpan = row.querySelector(".env-status-bar__pct");
	if (pctSpan instanceof HTMLElement) E(pctSpan, { properties: { textContent: device.batteryPct } });
	return row;
}
/**
* `ui-statusbar`:
* - Desktop footer: intro (left), shell meta (center), device tray (right; often CSS-hidden).
* - Overlay (mobile/fullscreen): clock (left), device tray (right); intro/meta hidden.
*/
function mountEnvironmentStatusBar(shell, introInnerHtml, device) {
	const bar = document.createElement("ui-statusbar");
	bar.className = "env-ui-statusbar wf-chrome-no-select";
	bar.setAttribute("part", "status-bar");
	const left = document.createElement("div");
	left.slot = "left";
	left.className = "env-ui-statusbar__left";
	const clock = document.createElement("time");
	clock.className = "env-ui-statusbar__clock";
	clock.dateTime = "";
	clock.textContent = formatStatusClock();
	clock.setAttribute("role", "button");
	clock.setAttribute("tabindex", "0");
	clock.setAttribute("aria-label", "Calendar");
	clock.setAttribute("aria-haspopup", "dialog");
	clock.setAttribute("data-chrome-flyout-anchor", "calendar");
	const intro = document.createElement("div");
	intro.className = "env-ui-statusbar__intro";
	if (introInnerHtml) intro.innerHTML = introInnerHtml;
	left.append(clock, intro);
	const center = document.createElement("div");
	center.slot = "center";
	const meta = document.createElement("p");
	meta.className = "env-status-bar__meta";
	center.appendChild(meta);
	const right = document.createElement("div");
	right.slot = "right";
	right.className = "env-ui-statusbar__right";
	const deviceTray = buildShellDeviceTray(device, "env-device-tray env-device-tray--footer");
	deviceTray.setAttribute("role", "button");
	deviceTray.setAttribute("tabindex", "0");
	deviceTray.setAttribute("aria-label", "Quick settings");
	deviceTray.setAttribute("aria-haspopup", "dialog");
	deviceTray.setAttribute("data-chrome-flyout-anchor", "quick-settings");
	right.appendChild(deviceTray);
	const onClockActivate = (ev) => {
		ev.preventDefault();
		ev.stopPropagation();
		toggleCalendarFlyout(clock);
	};
	const onTrayActivate = (ev) => {
		ev.preventDefault();
		ev.stopPropagation();
		toggleQuickSettingsFlyout(deviceTray);
	};
	clock.addEventListener("click", onClockActivate);
	clock.addEventListener("keydown", (ev) => {
		if (ev.key === "Enter" || ev.key === " ") onClockActivate(ev);
	});
	deviceTray.addEventListener("click", onTrayActivate);
	deviceTray.addEventListener("keydown", (ev) => {
		if (ev.key === "Enter" || ev.key === " ") onTrayActivate(ev);
	});
	bar.append(left, center, right);
	effect(() => {
		const nav = shell.navEcho.value ? ` │ ${shell.navEcho.value}` : "";
		meta.textContent = `doc=${shell.selectedPath.value} │ viewer=${shell.viewerStatus.value} │ layout=${shell.mqLabel.value}${nav}`;
	}, [
		shell.selectedPath,
		shell.viewerStatus,
		shell.mqLabel,
		shell.navEcho
	], { triggerImmediately: true });
	const tickClock = () => {
		const now = /* @__PURE__ */ new Date();
		clock.textContent = formatStatusClock(now);
		clock.dateTime = now.toISOString();
	};
	tickClock();
	const clockTimer = setInterval(tickClock, 15e3);
	const dispose = () => {
		clearInterval(clockTimer);
	};
	return {
		element: bar,
		dispose
	};
}
//#endregion
//#region src/frontend/shells/environment/components/statusbar/capacitor-native-safe-area.ts
var CSS_TOP = "--env-native-safe-top";
var CSS_BOTTOM = "--env-native-safe-bottom";
var lastTopPx = 0;
var lastBottomPx = 0;
var installed = false;
function readEnvSafeAreaProbe() {
	if (typeof document === "undefined" || !document.body) return {
		top: 0,
		bottom: 0
	};
	const probe = document.createElement("div");
	probe.style.cssText = "position:fixed;top:0;left:0;padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom);visibility:hidden;pointer-events:none;";
	document.body.appendChild(probe);
	const cs = getComputedStyle(probe);
	const top = Number.parseFloat(cs.paddingTop) || 0;
	const bottom = Number.parseFloat(cs.paddingBottom) || 0;
	probe.remove();
	return {
		top,
		bottom
	};
}
function androidFallbackTopPx() {
	try {
		if (!/android/i.test(navigator.userAgent)) return 0;
	} catch {
		return 0;
	}
	return 28;
}
function applyInsets(topPx, bottomPx) {
	lastTopPx = Math.max(0, Math.round(topPx));
	lastBottomPx = Math.max(0, Math.round(bottomPx));
	const top = `${lastTopPx}px`;
	const bottom = `${lastBottomPx}px`;
	document.documentElement.style.setProperty(CSS_TOP, top);
	document.documentElement.style.setProperty(CSS_BOTTOM, bottom);
	document.documentElement.toggleAttribute("data-capacitor-native", true);
	for (const node of document.querySelectorAll(".env-shell-root, env-shell-container")) {
		if (!(node instanceof HTMLElement)) continue;
		node.style.setProperty(CSS_TOP, top);
		node.style.setProperty(CSS_BOTTOM, bottom);
		node.toggleAttribute("data-capacitor-native", true);
	}
}
function stampLateShellRoots() {
	if (lastTopPx <= 0 && lastBottomPx <= 0) return;
	const top = `${lastTopPx}px`;
	const bottom = `${lastBottomPx}px`;
	for (const node of document.querySelectorAll(".env-shell-root, env-shell-container")) {
		if (!(node instanceof HTMLElement)) continue;
		if (node.style.getPropertyValue(CSS_TOP) === top) continue;
		node.style.setProperty(CSS_TOP, top);
		node.style.setProperty(CSS_BOTTOM, bottom);
		node.toggleAttribute("data-capacitor-native", true);
	}
}
async function resolveNativeInsets() {
	let top = 0;
	try {
		const info = await CwsBridge.getShellInfo();
		top = Number(info.statusBarHeightCss) || 0;
	} catch {}
	const env = readEnvSafeAreaProbe();
	top = Math.max(top, env.top);
	const bottom = 0;
	if (top <= 0) top = androidFallbackTopPx();
	return {
		top,
		bottom
	};
}
/** Idempotent — sets `--env-native-safe-*` used by `capacitor-native.scss`. */
async function installCapacitorNativeSafeAreaInsets() {
	if (!isNativeCapacitorHost()) return;
	if (installed) {
		stampLateShellRoots();
		return;
	}
	installed = true;
	const sync = async () => {
		const { top, bottom } = await resolveNativeInsets();
		applyInsets(top, bottom);
	};
	await sync();
	window.addEventListener("resize", () => void sync());
	window.visualViewport?.addEventListener("resize", () => void sync());
	document.addEventListener("orientationchange", () => void sync());
	stampLateShellRoots();
	globalThis.setTimeout?.(stampLateShellRoots, 400);
}
//#endregion
export { formatChromeClock as a, matchShellDisplayMode as c, buildShellDeviceTray as i, mountEnvironmentStatusBar as l, attachShellDeviceStatus as n, isNativeCapacitorHost as o, attachStatusBarContrast as r, isShellStandaloneDisplay as s, installCapacitorNativeSafeAreaInsets as t, shouldShowStatusOverlay as u };
