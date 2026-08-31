import { Fn as makeTask, G as UIElement_default, In as getBy, K as __decorate, Ln as navigationEnable, Rn as defineElement, br as preloadStyle, f as WORKSPACE_PAGE_EVENT, h as switchWorkspacePage, l as taskbar_default, m as listWorkspacePages, p as getActiveWorkspaceId, sr as effect, u as installLauncherBackStack, ur as observe, zn as H } from "../com/app.js";
import { t as toggleCalendarFlyout } from "./environment-components-calendar-CalendarFlyout.js";
import { n as toggleQuickSettingsFlyout } from "./environment-components-settings-QuickSettings.js";
import { a as formatChromeClock, i as buildShellDeviceTray } from "./environment-components-statusbar-capacitor-native-safe-area.js";
import { t as openUnifiedContextMenu } from "./environment-components-explorer-ContextMenu.js";
import { n as mountEnvironmentAppMenu, t as isAppMenuEnabled } from "./environment-components-app-menu-AppMenu.js";
//#region src/frontend/shells/environment/components/taskbar/element/TaskBar.ts
var styled = preloadStyle(taskbar_default);
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
