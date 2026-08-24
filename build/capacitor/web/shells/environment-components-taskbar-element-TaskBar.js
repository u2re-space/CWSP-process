import { Gt as getBy, J as UIElement_default, Jt as H, Kt as navigationEnable, Sn as preloadStyle, Wt as makeTask, Y as __decorate, c as WORKSPACE_PAGE_EVENT, d as switchWorkspacePage, l as getActiveWorkspaceId, on as observe, qt as defineElement, rn as effect, s as installLauncherBackStack, u as listWorkspacePages } from "../com/app.js";
import { t as toggleCalendarFlyout } from "./environment-components-calendar-CalendarFlyout.js";
import { n as toggleQuickSettingsFlyout } from "./environment-components-settings-QuickSettings.js";
import { a as formatChromeClock, i as buildShellDeviceTray } from "./environment-components-statusbar-capacitor-native-safe-area.js";
import { t as openUnifiedContextMenu } from "./environment-components-explorer-ContextMenu.js";
import { n as mountEnvironmentAppMenu, t as isAppMenuEnabled } from "./environment-components-app-menu-AppMenu.js";
//#endregion
//#region src/frontend/shells/environment/components/taskbar/element/TaskBar.ts
var styled = preloadStyle("@layer ui-taskbar{ui-taskbar{gap:0 0!important;padding:0!important}ui-taskbar::part(taskbar){display:grid!important;gap:0 0!important;grid-template-columns:minmax(0,max-content) minmax(0,1fr) minmax(0,max-content);padding:0!important}ui-taskbar ui-task{margin:0!important}.env-shell-chrome{color:var(--color-on-surface,var(--wf-md-on-surface-variant,#1c1c1e));display:flex;flex-direction:column;font:12px ui-sans-serif,system-ui,sans-serif;gap:0!important;inset-block-end:0;inset-inline:0;isolation:isolate;padding:0!important;pointer-events:none;position:fixed;z-index:var(--env-z-shell-chrome,2147483000)}.env-shell-chrome[data-desktop]{box-shadow:0 -8px 28px rgba(0,0,0,.28)}.env-shell-chrome>*{pointer-events:auto}.env-shell-taskbar{--env-taskbar-surface:color-mix(in oklab,var(--color-surface-container-high,--u2-color-mod(var(--base-color,#5a9ec8),980)) 88%,transparent);--env-taskbar-ink:var(\n        --color-on-surface,light-dark(--u2-color-mod(var(--base-color,#5a9ec8),900),--u2-color-mod(var(--base-color,#5a9ec8),100))\n    );--env-taskbar-accent:var(--wf-md-primary,var(--color-primary,#5a9ec8));align-items:stretch;backdrop-filter:blur(22px) saturate(1.35);-webkit-backdrop-filter:blur(22px) saturate(1.35);background:var(--env-taskbar-surface);block-size:2.5rem;border-block-start:1px solid light-dark(color-mix(in oklab,#000 10%,transparent),color-mix(in oklab,#fff 14%,transparent));box-shadow:none;color-scheme:inherit;display:flex;flex-direction:row;flex-wrap:nowrap;gap:.15rem;min-block-size:2.5rem;order:0;padding:0 .25rem;padding-block-end:env(safe-area-inset-bottom,0);position:relative}.env-shell-taskbar,.env-shell-taskbar ui-icon{--icon-color:var(--env-taskbar-ink);color:var(--env-taskbar-ink)}.env-shell-taskbar::part(taskbar){align-items:stretch;display:flex;flex:1;flex-direction:row;flex-wrap:nowrap;gap:.15rem;inline-size:100%;min-inline-size:0}.env-shell-taskbar__pins,.env-shell-taskbar__windows{align-items:stretch;display:flex;flex-direction:row;flex-wrap:nowrap;gap:0 0;margin:0;min-inline-size:0}.env-shell-taskbar__workspaces{align-items:center;display:none;flex-direction:row;gap:.25rem;margin-inline-start:.35rem}.env-shell-taskbar__workspace{background:color-mix(in oklab,CanvasText 10%,transparent);border:none;border-radius:.35rem;color:inherit;cursor:pointer;font:inherit;font-size:.7rem;min-block-size:1.35rem;min-inline-size:1.35rem;padding:0 .35rem}.env-shell-taskbar__workspace[data-active]{background:color-mix(in oklab,CanvasText 22%,transparent);font-weight:650}.env-shell-chrome[data-desktop] .env-shell-taskbar__workspaces{display:flex}.env-shell-taskbar__pins{content-visibility:visible;flex:0 0 auto;gap:0 0;inline-size:stretch;margin:0}.env-shell-taskbar__pins [data-env-home]{color:inherit;content-visibility:visible;--icon-color:currentColor;background:color-mix(in oklab,var(--env-taskbar-surface) 60%,transparent)!important;background-color:color-mix(in oklab,var(--env-taskbar-surface) 60%,transparent)!important}.env-shell-taskbar__pins ui-task{backdrop-filter:blur(22px) saturate(1.35);-webkit-backdrop-filter:blur(22px) saturate(1.35);box-shadow:inset 0 -2px 0 var(--env-taskbar-accent)}.env-shell-taskbar__pins ui-task::part(glyph),.env-shell-taskbar__pins ui-task::part(icon){color:var(--env-taskbar-ink);--icon-color:var(--env-taskbar-ink)}.env-shell-taskbar__windows{flex:1 1 auto;inline-size:stretch;justify-content:flex-start;overflow-x:auto;scrollbar-width:thin}.env-shell-taskbar ui-task{align-self:stretch;background:transparent;border:0;border-radius:0;box-shadow:inset 0 -2px 0 transparent;color:inherit;cursor:pointer;inline-size:fit-content;min-block-size:100%;min-inline-size:2.75rem;opacity:1;outline:none;padding-inline:.55rem}.env-shell-taskbar ui-task:hover{background:color-mix(in oklab,var(--env-taskbar-ink) 10%,transparent);color:var(--env-taskbar-ink);opacity:1}.env-shell-taskbar :is(ui-task[data-active],ui-task[data-env-active=true],ui-task[data-focus]){background:color-mix(in oklab,var(--env-taskbar-surface) 12%,transparent);box-shadow:inset 0 -2px 0 var(--env-taskbar-accent);color:var(--env-taskbar-ink);opacity:1;outline:none}.env-shell-taskbar ui-task[data-minimized]{opacity:.65}.env-shell-taskbar__tray-host{align-items:center;border-inline-start:1px solid light-dark(color-mix(in oklab,#000 10%,transparent),color-mix(in oklab,#fff 12%,transparent));display:flex;flex:0 0 auto;gap:.35rem;margin-inline-start:auto;padding-inline:.35rem}.env-shell-taskbar__clock{align-items:flex-end;border-radius:.35rem;cursor:pointer;display:flex;flex-direction:column;gap:.05rem;inline-size:fit-content;justify-content:center;line-height:1.05;min-inline-size:4rem;padding-inline:.35rem .15rem;pointer-events:auto;user-select:none}.env-shell-taskbar__clock,.env-shell-taskbar__clock .env-shell-taskbar__clock-date,.env-shell-taskbar__clock .env-shell-taskbar__clock-time{font-variant-numeric:tabular-nums}.env-shell-taskbar__clock:focus-visible,.env-shell-taskbar__clock:hover{background:color-mix(in oklab,var(--env-taskbar-ink) 10%,transparent);color:var(--env-taskbar-ink);outline:none}.env-device-tray--taskbar{border-radius:.35rem;cursor:pointer;pointer-events:auto}.env-device-tray--taskbar:focus-visible,.env-device-tray--taskbar:hover{background:color-mix(in oklab,var(--env-taskbar-ink) 10%,transparent);color:var(--env-taskbar-ink);outline:none}.env-shell-taskbar__clock-time{color:inherit;font-size:.78rem;font-variant-numeric:tabular-nums;font-weight:600}.env-shell-taskbar__clock-date{color:color-mix(in oklab,currentColor 72%,transparent);font-size:.62rem;font-variant-numeric:tabular-nums;font-weight:500;white-space:nowrap}.env-shell-chrome[data-desktop] .env-shell-taskbar ui-task::part(title){display:none!important}.env-shell-chrome[data-desktop] .env-shell-taskbar ui-task{min-inline-size:2.5rem;padding-inline:.45rem}.env-shell-chrome[data-desktop] .env-shell-taskbar ui-task::part(icon){block-size:1.35rem;inline-size:1.35rem}.env-shell-chrome[data-desktop] .env-shell-taskbar ui-task::part(glyph){block-size:1.35rem;inline-size:1.35rem}.env-shell-chrome[data-desktop] .env-shell-taskbar ui-task[data-env-home]::part(icon){block-size:1.75rem;inline-size:1.75rem;min-block-size:1.75rem;min-inline-size:1.75rem}.env-shell-chrome[data-desktop] .env-shell-taskbar ui-task[data-env-home]::part(glyph){block-size:100%;inline-size:100%;--icon-size:100%;--icon-padding:0.05rem}.env-shell-chrome[data-desktop] .env-shell-taskbar ui-task::part(letter){font-size:.8rem}.env-shell-chrome[data-desktop] .env-shell-taskbar__pins{background:transparent;background-color:initial;border:0 transparent;margin:0;outline:0 none transparent;padding:0}.env-shell-chrome[data-desktop] .env-shell-taskbar ui-task[data-env-home],.env-shell-chrome[data-desktop] .env-shell-taskbar__pins{backdrop-filter:none;-webkit-backdrop-filter:none;border-radius:0;box-shadow:0 0 0 none transparent;margin-inline-end:.2rem;min-inline-size:2.75rem}.env-shell-chrome[data-desktop] .env-shell-taskbar ui-task[data-env-home]{border:0 transparent;display:inline-flex!important;outline:none;outline:0 none transparent;transform:none}.env-shell-chrome[data-desktop] .env-shell-taskbar :is(ui-task[data-env-home]:focus-visible,ui-task[data-env-home]:hover){background:color-mix(in oklab,var(--env-taskbar-accent) 32%,transparent)}.env-shell-chrome[data-desktop] .env-shell-taskbar :is(ui-task[data-env-home][data-active],ui-task[data-env-home][data-env-active=true],ui-task[data-env-home][data-focus]){background:color-mix(in oklab,var(--env-taskbar-accent) 28%,transparent)}.env-shell-chrome:not([data-desktop]) .env-shell-taskbar{backdrop-filter:none;-webkit-backdrop-filter:none;background:transparent;block-size:3rem;border-block-start:none;box-shadow:none;color:var(--env-status-fg,var(--env-taskbar-ink));display:block;gap:0;inline-size:100%;min-block-size:3rem;padding:.15rem .75rem;padding-block-end:.15rem;place-self:stretch;position:relative;--icon-color:currentColor;pointer-events:none}.env-shell-chrome:not([data-desktop]) .env-shell-taskbar::part(taskbar){block-size:100%;display:block!important;grid-template-columns:none!important;inline-size:100%;position:relative}.env-shell-chrome:not([data-desktop]) .env-shell-taskbar__pins{display:contents}.env-shell-chrome:not([data-desktop]) .env-shell-taskbar__pins ui-task:not([data-env-home]),.env-shell-chrome:not([data-desktop]) .env-shell-taskbar__tray-host,.env-shell-chrome:not([data-desktop]) .env-shell-taskbar__windows{display:none!important}.env-shell-chrome:not([data-desktop]) .env-shell-taskbar ui-task[data-env-home]{background:color-mix(in oklab,var(--color-surface-container-high,--u2-color-mod(var(--base-color,#5a9ec8),980)) 88%,transparent);border-radius:999px;bottom:.22rem;box-shadow:0 6px 20px -8px color-mix(in oklab,#000 45%,transparent);left:auto;margin:0;min-block-size:2.5rem;min-inline-size:2.5rem;padding:0;pointer-events:auto;position:absolute;right:calc(.7rem + env(safe-area-inset-right, 0px));top:auto;touch-action:manipulation;user-select:none;z-index:1}.env-shell-chrome:not([data-desktop]) .env-shell-taskbar ui-task[data-env-home]::part(title){display:none!important}.env-shell-chrome:not([data-desktop]) .env-shell-taskbar ui-task[data-env-home]::part(icon){block-size:1.7rem;inline-size:1.7rem;min-block-size:1.7rem;min-inline-size:1.7rem}.env-shell-chrome:not([data-desktop]) .env-shell-taskbar ui-task[data-env-home]::part(glyph){block-size:100%;inline-size:100%;--icon-padding:0.1rem;--icon-size:100%;opacity:1}.env-shell-chrome:not([data-desktop]) .env-shell-taskbar ui-task[data-env-home]::part(letter){opacity:0}.env-shell-chrome:not([data-desktop]) .env-shell-taskbar :is(ui-task[data-env-home]:active,ui-task[data-env-home]:hover){background:color-mix(in oklch,#fff 10%,transparent);color:contrast-color(inherit(background-color))}.env-shell-chrome:not([data-desktop]) .env-shell-taskbar :is(ui-task[data-env-home][data-active],ui-task[data-env-home][data-env-active=true],ui-task[data-env-home][data-focus]){background:color-mix(in oklch,#fff 8%,transparent);color:contrast-color(inherit(background-color))}.env-shell-chrome:not([data-desktop]):not([data-status-overlay]) .env-ui-statusbar{display:none!important}}");
var UITaskBar = class UITaskBar extends UIElement_default {
	constructor() {
		super();
	}
	styles = () => styled;
	render = () => H`<div part="taskbar" class="taskbar"><slot></slot></div>`;
};
UITaskBar = __decorate([defineElement("ui-taskbar")], UITaskBar);
var HOME_TASK = "#env-home";
var VIEWER_TASK = "#env-viewer";
var WIN_TASK_PREFIX = "#env-win-";
/** Long-press threshold for mobile Home → process switcher (ms). */
var HOME_LONG_PRESS_MS = 420;
var CLOCK_TICK_MS = 3e4;
function winTaskId(viewId) {
	return `${WIN_TASK_PREFIX}${String(viewId || "").trim().toLowerCase()}`;
}
function isMobileChrome() {
	const chrome = document.querySelector(".env-shell-chrome");
	if (chrome instanceof HTMLElement && chrome.hasAttribute("data-desktop")) return false;
	if (chrome instanceof HTMLElement && chrome.dataset.chromeLayout === "mobile") return true;
	return typeof matchMedia === "function" && matchMedia("(max-width: 640px)").matches;
}
/** True when a managed sub-app window (explorer, settings, …) is visible on the desktop. */
function hasVisibleManagedWindows(windows, focusedTaskId) {
	if (windows.some((w) => {
		const id = String(w.id || "").trim().toLowerCase();
		if (!id || id === "home") return false;
		return w.visible !== false && !w.minimized;
	})) return true;
	const focused = String(focusedTaskId.value || "home").trim().toLowerCase();
	if (focused && focused !== "home" && focused !== "viewer") return true;
	const workspace = document.querySelector(".env-shell-workspace");
	if (!workspace) return false;
	for (const node of workspace.querySelectorAll("ui-window")) {
		if (!(node instanceof HTMLElement)) continue;
		if (node.hidden || node.hasAttribute("data-minimized")) continue;
		const style = getComputedStyle(node);
		if (style.display === "none" || style.visibility === "hidden") continue;
		if (Number.parseFloat(style.opacity || "1") <= 0) continue;
		return true;
	}
	return false;
}
function formatTrayClock(now = /* @__PURE__ */ new Date()) {
	return formatChromeClock(now);
}
/**
* Task bar with Home / Markdown pins + dynamic open-window tasks and reactive system tray.
*/
function mountEnvironmentTaskBar(opts) {
	const taskList = observe([]);
	navigationEnable(taskList);
	makeTask(HOME_TASK, taskList, {
		title: "Home",
		icon: "house-line"
	}, {}, function() {
		for (const t of taskList) if (t !== this) t.active = false;
		this.active = true;
		opts.focusedTaskId.value = "home";
		opts.onHome();
	});
	makeTask(VIEWER_TASK, taskList, {
		title: "Markdown",
		icon: "article"
	}, {}, function() {
		for (const t of taskList) if (t !== this) t.active = false;
		this.active = true;
		opts.focusedTaskId.value = "viewer";
		opts.onViewer();
	});
	const bar = document.createElement("ui-taskbar");
	bar.className = "env-shell-taskbar wf-chrome-no-select";
	bar.setAttribute("part", "taskbar");
	bar.setAttribute("data-type", "desktop");
	const pinsHost = document.createElement("div");
	pinsHost.className = "env-shell-taskbar__pins";
	const windowsHost = document.createElement("div");
	windowsHost.className = "env-shell-taskbar__windows";
	const tHome = document.createElement("ui-task");
	tHome.setAttribute("title", "Home");
	tHome.setAttribute("icon", "house-line");
	tHome.setAttribute("data-id", HOME_TASK);
	tHome.setAttribute("data-env-home", "");
	tHome.setAttribute("aria-label", "Home");
	tHome.setAttribute("aria-haspopup", "menu");
	pinsHost.append(tHome);
	const workspacePager = document.createElement("div");
	workspacePager.className = "env-shell-taskbar__workspaces";
	workspacePager.setAttribute("aria-label", "Workspaces");
	const paintWorkspacePager = () => {
		const pages = listWorkspacePages();
		const active = getActiveWorkspaceId();
		workspacePager.replaceChildren();
		for (const page of pages) {
			const btn = document.createElement("button");
			btn.type = "button";
			btn.className = "env-shell-taskbar__workspace";
			btn.title = page.label;
			btn.textContent = page.label.replace(/^Side\s+/i, "") || page.id.slice(-1).toUpperCase();
			btn.toggleAttribute("data-active", page.id === active);
			btn.addEventListener("click", (ev) => {
				ev.preventDefault();
				ev.stopPropagation();
				switchWorkspacePage(page.id);
			});
			workspacePager.append(btn);
		}
	};
	paintWorkspacePager();
	window.addEventListener(WORKSPACE_PAGE_EVENT, paintWorkspacePager);
	pinsHost.append(workspacePager);
	installLauncherBackStack();
	const syncStartChrome = () => {
		const mobile = isMobileChrome();
		tHome.setAttribute("title", mobile ? "Home" : "Start");
		tHome.setAttribute("aria-label", mobile ? "Home" : "Start");
		tHome.setAttribute("icon", mobile ? "house-line" : "windows-logo");
		tHome.toggleAttribute("data-env-start", !mobile);
		if (mobile) tHome.setAttribute("aria-keyshortcuts", "LongPress");
		else tHome.removeAttribute("aria-keyshortcuts");
	};
	syncStartChrome();
	const trayHost = document.createElement("div");
	trayHost.className = "env-shell-taskbar__tray-host";
	const clockHost = document.createElement("div");
	clockHost.className = "env-shell-taskbar__clock";
	clockHost.setAttribute("role", "button");
	clockHost.setAttribute("tabindex", "0");
	clockHost.setAttribute("aria-label", "Calendar");
	clockHost.setAttribute("aria-haspopup", "dialog");
	clockHost.setAttribute("data-chrome-flyout-anchor", "calendar");
	const clockTime = document.createElement("span");
	clockTime.className = "env-shell-taskbar__clock-time";
	const clockDate = document.createElement("span");
	clockDate.className = "env-shell-taskbar__clock-date";
	clockHost.append(clockTime, clockDate);
	const paintClock = () => {
		const { time, date } = formatTrayClock();
		clockTime.textContent = time;
		clockDate.textContent = date;
		clockHost.title = `${time} · ${date}`;
	};
	paintClock();
	const clockTimer = setInterval(paintClock, CLOCK_TICK_MS);
	const deviceTray = buildShellDeviceTray(opts.device, "env-device-tray env-device-tray--taskbar");
	deviceTray.setAttribute("role", "button");
	deviceTray.setAttribute("tabindex", "0");
	deviceTray.setAttribute("aria-label", "Quick settings");
	deviceTray.setAttribute("aria-haspopup", "dialog");
	deviceTray.setAttribute("data-chrome-flyout-anchor", "quick-settings");
	const onClockActivate = (ev) => {
		ev.preventDefault();
		ev.stopPropagation();
		toggleCalendarFlyout(clockHost);
	};
	const onTrayActivate = (ev) => {
		ev.preventDefault();
		ev.stopPropagation();
		toggleQuickSettingsFlyout(deviceTray);
	};
	clockHost.addEventListener("click", onClockActivate);
	clockHost.addEventListener("keydown", (ev) => {
		if (ev.key === "Enter" || ev.key === " ") onClockActivate(ev);
	});
	deviceTray.addEventListener("click", onTrayActivate);
	deviceTray.addEventListener("keydown", (ev) => {
		if (ev.key === "Enter" || ev.key === " ") onTrayActivate(ev);
	});
	trayHost.append(deviceTray, clockHost);
	const switcher = document.createElement("div");
	switcher.className = "env-shell-navbar__switcher";
	switcher.setAttribute("role", "menu");
	switcher.setAttribute("aria-label", "Open apps");
	switcher.hidden = true;
	const switcherList = document.createElement("ul");
	switcherList.className = "env-shell-navbar__switcher-list";
	switcher.appendChild(switcherList);
	bar.append(pinsHost, windowsHost, trayHost, switcher);
	const appMenuEnabled = isAppMenuEnabled();
	const appMenu = appMenuEnabled ? mountEnvironmentAppMenu() : void 0;
	const windowTaskEls = /* @__PURE__ */ new Map();
	let lastWindows = [];
	let longPressTimer = null;
	let longPressFired = false;
	let switcherOpen = false;
	const cleanupFns = [];
	cleanupFns.push(() => clearInterval(clockTimer));
	const findWindowDesc = (viewId) => lastWindows.find((w) => String(w.id || "").trim().toLowerCase() === viewId);
	/**
	* Win-style task click: minimized → restore+focus; focused+visible → minimize; else → focus.
	* WHY: do NOT route through `task.focus = true` — ITask focus setter only runs takeAction when
	* focus *changes*, so a second click on an already-focused task never minimized.
	*/
	const activateWindowTask = (viewId) => {
		const id = String(viewId || "").trim().toLowerCase();
		if (!id) return;
		const desc = findWindowDesc(id);
		const focusedId = String(opts.focusedTaskId.value || "").trim().toLowerCase();
		const isFocused = Boolean(desc?.focused) || focusedId === id || focusedId === "markdown" && id === "viewer" || focusedId === "viewer" && (id === "viewer" || id === "markdown");
		if (desc?.minimized) {
			desc.minimized = false;
			desc.focused = true;
			windowTaskEls.get(id)?.toggleAttribute("data-minimized", false);
			opts.focusedTaskId.value = id === "markdown" ? "viewer" : id;
			opts.onWindowTask?.(id);
			return;
		}
		if (isFocused && desc && desc.visible !== false) {
			desc.minimized = true;
			desc.focused = false;
			windowTaskEls.get(id)?.toggleAttribute("data-minimized", true);
			opts.onMinimizeWindow?.(id);
			return;
		}
		opts.focusedTaskId.value = id === "markdown" ? "viewer" : id;
		opts.onWindowTask?.(id);
	};
	const openTaskContextMenu = (ev, viewId, title) => {
		if (isMobileChrome()) return;
		ev.preventDefault();
		ev.stopPropagation();
		const id = String(viewId || "").trim().toLowerCase();
		const desc = findWindowDesc(id);
		const minimized = Boolean(desc?.minimized);
		const items = [{
			id: minimized ? "restore" : "minimize",
			label: minimized ? "Restore" : "Minimize",
			icon: minimized ? "arrow-square-out" : "minus",
			action: () => {
				if (minimized) {
					opts.focusedTaskId.value = id;
					opts.onWindowTask?.(id);
				} else opts.onMinimizeWindow?.(id);
			}
		}, {
			id: "close",
			label: "Close",
			icon: "x",
			danger: true,
			action: () => opts.onCloseWindow?.(id)
		}];
		openUnifiedContextMenu({
			x: ev.clientX,
			y: ev.clientY,
			compact: true,
			anchor: ev.target instanceof Element ? ev.target : bar,
			items
		});
	};
	const openBarContextMenu = (ev) => {
		if (isMobileChrome()) return;
		const path = typeof ev.composedPath === "function" ? ev.composedPath() : [];
		for (const n of path) if (n instanceof Element && n.closest?.("ui-task")) return;
		ev.preventDefault();
		ev.stopPropagation();
		openUnifiedContextMenu({
			x: ev.clientX,
			y: ev.clientY,
			compact: true,
			anchor: bar,
			items: [{
				id: "show-desktop",
				label: "Show desktop",
				icon: "desktop",
				action: () => opts.onHome()
			}, {
				id: "home",
				label: "Home",
				icon: "house-line",
				action: () => opts.onHome()
			}]
		});
	};
	bar.addEventListener("contextmenu", openBarContextMenu);
	const closeSwitcher = () => {
		switcherOpen = false;
		switcher.hidden = true;
		switcherList.replaceChildren();
		bar.removeAttribute("data-switcher-open");
	};
	const openSwitcher = () => {
		const open = lastWindows.filter((w) => String(w.id || "").trim());
		switcherList.replaceChildren();
		if (!open.length) {
			const empty = document.createElement("li");
			empty.className = "env-shell-navbar__switcher-empty";
			empty.textContent = "No open apps";
			switcherList.appendChild(empty);
		} else for (const w of open) {
			const id = String(w.id || "").trim().toLowerCase();
			const li = document.createElement("li");
			li.className = "env-shell-navbar__switcher-row";
			li.setAttribute("role", "none");
			const btn = document.createElement("button");
			btn.type = "button";
			btn.className = "env-shell-navbar__switcher-item";
			btn.setAttribute("role", "menuitem");
			btn.toggleAttribute("data-active", Boolean(w.focused) && !w.minimized);
			btn.toggleAttribute("data-minimized", Boolean(w.minimized));
			const icon = document.createElement("ui-icon");
			icon.setAttribute("icon", w.icon || "app-window");
			icon.setAttribute("icon-style", "duotone");
			icon.setAttribute("aria-hidden", "true");
			const label = document.createElement("span");
			label.className = "env-shell-navbar__switcher-label";
			label.textContent = w.title || id;
			btn.append(icon, label);
			btn.addEventListener("click", (ev) => {
				ev.preventDefault();
				ev.stopPropagation();
				closeSwitcher();
				opts.focusedTaskId.value = id;
				const taskId = winTaskId(id);
				const t = getBy(taskList, taskId);
				if (t) t.focus = true;
				else opts.onWindowTask?.(id);
			});
			const closeBtn = document.createElement("button");
			closeBtn.type = "button";
			closeBtn.className = "env-shell-navbar__switcher-close";
			closeBtn.setAttribute("aria-label", `Close ${w.title || id}`);
			closeBtn.title = "Close";
			const closeIcon = document.createElement("ui-icon");
			closeIcon.setAttribute("icon", "x");
			closeIcon.setAttribute("icon-style", "bold");
			closeIcon.setAttribute("aria-hidden", "true");
			closeBtn.appendChild(closeIcon);
			closeBtn.addEventListener("click", (ev) => {
				ev.preventDefault();
				ev.stopPropagation();
				opts.onCloseWindow?.(id);
				lastWindows = lastWindows.filter((row) => String(row.id || "").trim().toLowerCase() !== id);
				windowTaskEls.get(id)?.remove();
				windowTaskEls.delete(id);
				if (!lastWindows.length) closeSwitcher();
				else openSwitcher();
			});
			li.append(btn, closeBtn);
			switcherList.appendChild(li);
		}
		switcherOpen = true;
		switcher.hidden = false;
		bar.setAttribute("data-switcher-open", "");
	};
	const clearLongPress = () => {
		if (longPressTimer != null) {
			clearTimeout(longPressTimer);
			longPressTimer = null;
		}
	};
	const syncAppMenuChrome = () => {
		bar.toggleAttribute("data-app-menu-open", Boolean(appMenu?.isOpen()));
	};
	const goHome = () => {
		closeSwitcher();
		appMenu?.close();
		syncAppMenuChrome();
		getBy(taskList, HOME_TASK).focus = true;
		opts.onHome();
	};
	const toggleAppMenuFromStart = () => {
		closeSwitcher();
		appMenu?.toggle();
		syncAppMenuChrome();
		getBy(taskList, HOME_TASK).focus = true;
		opts.focusedTaskId.value = "home";
		paintActive();
	};
	/** Open only — used by empty-desktop swipe-up on Capacitor. */
	const openAppMenuFromDesktop = () => {
		if (!appMenu || appMenu.isOpen()) return;
		closeSwitcher();
		appMenu.open();
		syncAppMenuChrome();
		getBy(taskList, HOME_TASK).focus = true;
		opts.focusedTaskId.value = "home";
		paintActive();
	};
	const openAppMenuPage = () => {
		if (!appMenu) return;
		closeSwitcher();
		appMenu.openPage();
		syncAppMenuChrome();
		getBy(taskList, HOME_TASK).focus = true;
		opts.focusedTaskId.value = "home";
		paintActive();
	};
	try {
		const g = globalThis;
		g.__CWSP_LAUNCHER_HOME__ = {
			...g.__CWSP_LAUNCHER_HOME__ || {},
			openAppMenu: openAppMenuFromDesktop,
			openAppMenuPage
		};
	} catch {}
	const handleLauncherHomeTap = () => {
		if (hasVisibleManagedWindows(lastWindows, opts.focusedTaskId)) {
			goHome();
			return;
		}
		if (appMenu?.isOpen()) {
			appMenu.close();
			syncAppMenuChrome();
			return;
		}
		toggleAppMenuFromStart();
	};
	tHome.addEventListener("click", (ev) => {
		if (longPressFired) {
			ev.preventDefault();
			ev.stopPropagation();
			longPressFired = false;
			return;
		}
		if (appMenuEnabled && appMenu) {
			ev.preventDefault();
			ev.stopPropagation();
			handleLauncherHomeTap();
			return;
		}
		goHome();
	});
	tHome.addEventListener("pointerdown", (ev) => {
		if (!isMobileChrome()) return;
		if (ev.button != null && ev.button !== 0) return;
		longPressFired = false;
		clearLongPress();
		longPressTimer = setTimeout(() => {
			longPressTimer = null;
			longPressFired = true;
			try {
				tHome.releasePointerCapture?.(ev.pointerId);
			} catch {}
			openSwitcher();
		}, HOME_LONG_PRESS_MS);
		try {
			tHome.setPointerCapture?.(ev.pointerId);
		} catch {}
	}, { capture: true });
	const endHomePress = () => {
		clearLongPress();
	};
	tHome.addEventListener("pointerup", endHomePress, { capture: true });
	tHome.addEventListener("pointercancel", endHomePress, { capture: true });
	tHome.addEventListener("contextmenu", (ev) => {
		if (!isMobileChrome()) return;
		ev.preventDefault();
		longPressFired = true;
		clearLongPress();
		openSwitcher();
	});
	const onDocPointer = (ev) => {
		if (!switcherOpen) return;
		const path = typeof ev.composedPath === "function" ? ev.composedPath() : [];
		for (const n of path) {
			if (n === switcher || n === tHome) return;
			if (n instanceof Element && (n === switcher || switcher.contains(n) || n === tHome)) return;
		}
		closeSwitcher();
	};
	document.addEventListener("pointerdown", onDocPointer, { capture: true });
	cleanupFns.push(() => document.removeEventListener("pointerdown", onDocPointer, { capture: true }));
	const paintActive = () => {
		const id = String(opts.focusedTaskId.value || "home");
		const mark = (el, active) => {
			el.toggleAttribute("data-env-active", active);
			el.toggleAttribute("data-active", active);
			el.toggleAttribute("data-focus", active);
		};
		mark(tHome, id === "home");
		for (const [viewId, el] of windowTaskEls) mark(el, id === viewId);
	};
	effect(() => {
		paintActive();
	}, [opts.focusedTaskId], { triggerImmediately: true });
	const ensureWindowTask = (desc) => {
		const viewId = String(desc.id || "").trim().toLowerCase();
		if (!viewId || viewId === "home") return;
		const taskId = winTaskId(viewId);
		const title = desc.title || viewId;
		const iconName = String(desc.icon || "").trim() || "app-window";
		let el = windowTaskEls.get(viewId);
		if (!el) {
			const task = makeTask(taskId, null, {
				title,
				icon: iconName
			}, { viewId }, function() {
				for (const t of taskList) if (t !== this) t.active = false;
				this.active = true;
				activateWindowTask(viewId);
			});
			task.list = taskList;
			taskList.push(task);
			el = document.createElement("ui-task");
			el.setAttribute("data-id", taskId);
			el.setAttribute("data-view", viewId);
			el.setAttribute("title", title);
			el.setAttribute("aria-label", title);
			el.setAttribute("icon", iconName);
			el.addEventListener("click", (ev) => {
				ev.preventDefault();
				ev.stopPropagation();
				activateWindowTask(viewId);
			});
			el.addEventListener("contextmenu", (ev) => {
				openTaskContextMenu(ev, viewId, title);
			});
			windowTaskEls.set(viewId, el);
			windowsHost.appendChild(el);
		}
		el.setAttribute("title", title);
		el.setAttribute("aria-label", title);
		el.setAttribute("icon", iconName);
		el.toggleAttribute("data-minimized", Boolean(desc.minimized));
		el.hidden = desc.visible === false;
	};
	const syncWindowTasks = (windows) => {
		lastWindows = Array.isArray(windows) ? windows.slice() : [];
		const seen = /* @__PURE__ */ new Set();
		for (const w of windows) {
			const id = String(w.id || "").trim().toLowerCase();
			if (!id || id === "home") continue;
			seen.add(id);
			ensureWindowTask(w);
			if (w.focused) opts.focusedTaskId.value = id;
		}
		for (const [viewId, el] of [...windowTaskEls.entries()]) {
			if (seen.has(viewId)) continue;
			const taskId = winTaskId(viewId);
			const t = getBy(taskList, taskId);
			if (t) {
				const idx = taskList.indexOf(t);
				if (idx >= 0) taskList.splice(idx, 1);
			}
			el.remove();
			windowTaskEls.delete(viewId);
		}
		paintActive();
		if (switcherOpen) openSwitcher();
	};
	const setFocusedTaskId = (id) => {
		const raw = String(id || "home").toLowerCase();
		let taskId = HOME_TASK;
		if (raw === "viewer" || raw === "markdown") taskId = VIEWER_TASK;
		else if (raw !== "home") taskId = winTaskId(raw);
		const t = getBy(taskList, taskId);
		if (t) {
			for (const x of taskList) if (x !== t) x.active = false;
			t.active = true;
		}
		opts.focusedTaskId.value = raw === "markdown" ? "viewer" : raw;
		paintActive();
	};
	queueMicrotask(syncStartChrome);
	if (appMenu) {
		const onAppMenuSurface = () => syncAppMenuChrome();
		bar.addEventListener("env-app-menu-open", onAppMenuSurface);
		bar.addEventListener("env-app-menu-close", onAppMenuSurface);
		cleanupFns.push(() => {
			bar.removeEventListener("env-app-menu-open", onAppMenuSurface);
			bar.removeEventListener("env-app-menu-close", onAppMenuSurface);
		});
	}
	const dispose = () => {
		clearLongPress();
		closeSwitcher();
		appMenu?.dispose();
		for (const fn of cleanupFns) try {
			fn();
		} catch {}
		cleanupFns.length = 0;
		windowTaskEls.clear();
		windowsHost.replaceChildren();
	};
	return {
		element: bar,
		taskList,
		setFocusedTaskId,
		syncWindowTasks,
		appMenu,
		openAppMenu: appMenu ? openAppMenuFromDesktop : void 0,
		openAppMenuPage: appMenu ? openAppMenuPage : void 0,
		isSwitcherOpen: () => switcherOpen,
		closeSwitcher,
		dispose
	};
}
//#endregion
export { mountEnvironmentTaskBar as t };
