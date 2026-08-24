import { An as addEvent, Jt as H, Sn as preloadStyle, Ut as bindOutsideDismiss, Y as __decorate, q as UIElement, qt as defineElement, zt as registerTransientOverlay } from "../com/app.js";
/** Same as environment-overlay ENV_OVERLAY_Z — above `$z-shell-chrome`. */
var CHROME_FLYOUT_Z = "2147483600";
var openControllers = /* @__PURE__ */ new Map();
var sessions = /* @__PURE__ */ new Map();
var overlayShellHost = null;
var flyoutAnchorSelectors = [
	"[data-chrome-flyout-anchor]",
	".env-shell-taskbar__clock",
	".env-ui-statusbar__clock",
	".env-device-tray"
];
var isDesktopChrome = () => {
	if (typeof document !== "undefined") {
		if (document.querySelector(".env-shell-chrome[data-desktop]")) return true;
		const layout = document.querySelector("[data-chrome-layout]");
		if (layout?.dataset.chromeLayout === "desktop") return true;
		if (layout?.dataset.chromeLayout === "mobile") return false;
	}
	return typeof matchMedia !== "undefined" && matchMedia("(min-width: 641px)").matches;
};
/** Optional: shell can register the env-shell host used for overlay mounting. */
var setChromeFlyoutShellHost = (host) => {
	overlayShellHost = host;
};
var ensureOverlayRoot = (host) => {
	const ATTR = "data-env-shell-overlays";
	const tryHost = host || overlayShellHost || document.querySelector(".env-shell-root") || document.querySelector("#app") || document.body;
	const existing = tryHost.querySelector(`[${ATTR}]`);
	if (existing) {
		if (!existing.style.zIndex) existing.style.zIndex = CHROME_FLYOUT_Z;
		return existing;
	}
	try {
		const mod = globalThis.__ENV_OVERLAY_MOUNT__;
		if (typeof mod === "function") return mod(tryHost);
	} catch {}
	const el = document.createElement("div");
	el.setAttribute(ATTR, "");
	el.className = "env-shell-overlays";
	el.setAttribute("data-part", "env-overlays");
	el.style.cssText = `position:fixed;inset:0;pointer-events:none;z-index:${CHROME_FLYOUT_Z};box-sizing:border-box;`;
	tryHost.appendChild(el);
	return el;
};
/**
* Place flyout for desktop (bottom-right) or mobile (calendar center / QS top-center).
* INVARIANT: panel itself must set `pointer-events: auto`.
*/
var positionFlyout = (el, mode) => {
	const desktop = isDesktopChrome();
	el.style.position = "fixed";
	el.style.zIndex = String(Number(CHROME_FLYOUT_Z) + 1);
	el.style.pointerEvents = "auto";
	el.style.margin = "0";
	if (desktop) {
		el.style.top = "auto";
		el.style.left = "auto";
		el.style.right = "0.75rem";
		el.style.bottom = "4.5rem";
		el.style.transform = "none";
		return;
	}
	if (mode === "calendar") {
		el.style.top = "50%";
		el.style.left = "50%";
		el.style.right = "auto";
		el.style.bottom = "auto";
		el.style.transform = "translate(-50%, -50%)";
		return;
	}
	el.style.top = "calc(env(safe-area-inset-top, 0px) + 0.75rem)";
	el.style.left = "50%";
	el.style.right = "auto";
	el.style.bottom = "auto";
	el.style.transform = "translateX(-50%)";
};
var closeChromeFlyout = (kind) => {
	const ctrl = openControllers.get(kind);
	if (!ctrl) return;
	openControllers.delete(kind);
	const session = sessions.get(kind);
	sessions.delete(kind);
	session?.disposeDismiss();
	session?.unregisterBack();
	try {
		const el = ctrl.el;
		if (typeof el.close === "function") el.close();
		else {
			el.removeAttribute("open");
			el.hidden = true;
		}
		el.dispatchEvent(new CustomEvent("chrome-flyout-close", { bubbles: true }));
	} catch {}
};
/**
* Register an open flyout; closes the other kind (exclusive).
* Caller must already append `el` into the overlay root and call `positionFlyout`.
*/
var registerOpenFlyout = (ctrl) => {
	if (openControllers.has(ctrl.kind)) closeChromeFlyout(ctrl.kind);
	for (const kind of [...openControllers.keys()]) {
		if (kind === ctrl.kind) continue;
		closeChromeFlyout(kind);
	}
	openControllers.set(ctrl.kind, {
		...ctrl,
		close: () => closeChromeFlyout(ctrl.kind)
	});
	ctrl.el.hidden = false;
	ctrl.el.removeAttribute("hidden");
	ctrl.el.setAttribute("open", "");
	sessions.set(ctrl.kind, {
		disposeDismiss: bindOutsideDismiss({
			root: document,
			inside: ctrl.el,
			isInside: (event) => ctrl.contains(event.target),
			exceptSelectors: flyoutAnchorSelectors,
			onDismiss: () => closeChromeFlyout(ctrl.kind)
		}),
		unregisterBack: registerTransientOverlay({
			id: `chrome-flyout-${ctrl.kind}`,
			kind: "overlay",
			element: ctrl.el,
			isActive: () => openControllers.get(ctrl.kind)?.el === ctrl.el && ctrl.el.isConnected && !ctrl.el.hidden && ctrl.el.hasAttribute("open"),
			close: () => {
				closeChromeFlyout(ctrl.kind);
				return true;
			}
		})
	});
};
var isChromeFlyoutOpen = (kind) => openControllers.has(kind);
/**
* Toggle helper: if open → close; else open via `mountAndOpen`.
*/
var toggleChromeFlyout = (kind, mountAndOpen) => {
	if (isChromeFlyoutOpen(kind)) {
		closeChromeFlyout(kind);
		return;
	}
	registerOpenFlyout(mountAndOpen());
};
//#endregion
//#region src/frontend/shells/environment/components/calendar/CalendarFlyout.ts
var styled = preloadStyle("@layer calendar{:host{--cal-base-color:var(--color-primary);--cal-surface:var(--color-surface);--cal-on-surface:var(--color-on-surface);--cal-outline:color-mix(in oklab,var(--color-outline-variant) 80%,transparent);--cal-hover:color-mix(in oklab,var(--color-on-surface) 8%,transparent);box-sizing:border-box;color:var(--cal-on-surface);color-scheme:inherit;display:block;max-inline-size:min(360px,96vw);min-inline-size:280px;pointer-events:auto}:host([hidden]){display:none!important}.ui-cal-flyout__panel{background:var(--cal-surface);border:1px solid var(--cal-outline);border-radius:14px;box-shadow:0 18px 44px -18px color-mix(in oklab,#000 55%,transparent),0 2px 6px -2px color-mix(in oklab,#000 35%,transparent);box-sizing:border-box;color:contrast-color(var(--cal-surface));display:flex;flex-direction:column;gap:.6rem;inline-size:100%;padding:.9rem .9rem .75rem}.ui-cal-flyout__header{align-items:baseline;display:flex;justify-content:space-between;padding-inline:.15rem}.ui-cal-flyout__today{color:var(--cal-on-surface);font-size:.95rem;font-weight:650;line-height:1.25;margin:0}.ui-cal-flyout__nav{align-items:center;display:grid;gap:.35rem;grid-template-columns:auto 1fr auto}.ui-cal-flyout__nav-btn{align-items:center;appearance:none;background:transparent;block-size:2rem;border:none;border-radius:8px;color:var(--cal-on-surface);cursor:pointer;display:inline-flex;inline-size:2rem;justify-content:center;padding:0;-webkit-tap-highlight-color:transparent}.ui-cal-flyout__nav-btn ui-icon{--icon-size:1.25rem;--icon-padding:0;--icon-color:currentColor;block-size:var(--icon-size);color:currentColor;inline-size:var(--icon-size);min-block-size:var(--icon-size);min-inline-size:var(--icon-size);pointer-events:none}.ui-cal-flyout__nav-btn:hover{background:var(--cal-hover);color:contrast-color(var(--cal-hover))}.ui-cal-flyout__nav-btn:active{background:color-mix(in oklab,var(--cal-hover) 160%,transparent);color:contrast-color(color-mix(in oklab,var(--cal-hover) 160%,transparent))}.ui-cal-flyout__nav-btn:focus-visible{outline:2px solid var(--cal-base-color);outline-offset:1px}.ui-cal-flyout__month-label{color:var(--cal-on-surface);font-size:.86rem;font-weight:600;letter-spacing:.01em;text-align:center;user-select:none}.ui-cal-flyout__weekdays{display:grid;gap:2px;grid-template-columns:repeat(7,minmax(0,1fr));padding-inline:.1rem}.ui-cal-flyout__weekday{align-items:center;color:color-mix(in oklab,var(--cal-on-surface) 62%,transparent);display:flex;font-size:.7rem;font-weight:600;justify-content:center;letter-spacing:.02em;padding-block:.2rem;text-transform:uppercase;user-select:none}.ui-cal-flyout__grid{display:grid;gap:2px;grid-template-columns:repeat(7,minmax(0,1fr));padding-inline:.1rem}.ui-cal-flyout__day{align-items:center;appearance:none;aspect-ratio:1/1;background:transparent;border:none;border-radius:999px;color:var(--cal-on-surface);cursor:pointer;display:inline-flex;font-size:.82rem;font-variant-numeric:tabular-nums;inline-size:100%;justify-content:center;position:relative;-webkit-tap-highlight-color:transparent;transition:background-color .12s ease,color .12s ease}.ui-cal-flyout__day[data-other-month]{color:color-mix(in oklab,var(--cal-on-surface) 42%,transparent)}.ui-cal-flyout__day:hover{background:var(--cal-hover);color:contrast-color(var(--cal-hover))}.ui-cal-flyout__day:focus-visible{outline:2px solid var(--cal-base-color);outline-offset:1px}.ui-cal-flyout__day[data-today]{background:color-mix(in oklab,var(--cal-base-color) 88%,transparent);color:light-dark(#ffffff,#ffffff);font-weight:700}.ui-cal-flyout__day[data-selected]{box-shadow:0 0 0 2px var(--cal-base-color) inset}.ui-cal-flyout__day[data-today][data-selected]{box-shadow:0 0 0 2px color-mix(in oklab,var(--cal-base-color) 70%,#fff 20%) inset}}");
/** Shared exclusivity/positioning kind — see `ChromeFlyout.ts`. */
var FLYOUT_KIND = "calendar";
/** 1 Jan 2023 (UTC) is a Sunday — stable anchor for deriving weekday short-labels per locale. */
var REFERENCE_SUNDAY_UTC = Date.UTC(2023, 0, 1);
var DAY_MS = 864e5;
/**
* Locale week start, 0 (Sunday) .. 6 (Saturday) — matches `Date#getDay()`.
* `Intl.Locale` week info is still a staged API; both accessor shapes are probed,
* with a Sunday-start fallback when unsupported.
*/
function resolveFirstDayOfWeek(locale) {
	try {
		const loc = new Intl.Locale(locale);
		const first = (loc.weekInfo ?? loc.getWeekInfo?.())?.firstDay;
		if (typeof first === "number" && first >= 1 && first <= 7) return first % 7;
	} catch {}
	return 0;
}
function weekdayShortLabels(locale, startDay) {
	const fmt = new Intl.DateTimeFormat(locale, {
		weekday: "short",
		timeZone: "UTC"
	});
	const labels = [];
	for (let i = 0; i < 7; i++) {
		const dow = (startDay + i) % 7;
		labels.push(fmt.format(new Date(REFERENCE_SUNDAY_UTC + dow * DAY_MS)));
	}
	return labels;
}
function isSameDate(a, b) {
	return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
/** Full 6×7 (or shorter, week-complete) grid for `year`/`month`, leading/trailing days included. */
function buildMonthCells(year, month, startDay) {
	const today = /* @__PURE__ */ new Date();
	const firstOfMonth = new Date(year, month, 1);
	const daysInMonth = new Date(year, month + 1, 0).getDate();
	const leading = (firstOfMonth.getDay() - startDay + 7) % 7;
	const totalCells = Math.ceil((leading + daysInMonth) / 7) * 7;
	const cells = [];
	for (let i = 0; i < totalCells; i++) {
		const dayNum = i - leading + 1;
		const date = new Date(year, month, dayNum);
		cells.push({
			date,
			day: date.getDate(),
			otherMonth: date.getMonth() !== month,
			isToday: isSameDate(date, today)
		});
	}
	return cells;
}
var CalendarFlyout = class CalendarFlyout extends UIElement {
	#year;
	#month;
	#selected = null;
	#unbind = null;
	styles = function() {
		return styled;
	};
	render = function() {
		return H`<div class="ui-cal-flyout__panel" part="panel">
            <header class="ui-cal-flyout__header" part="header">
                <p class="ui-cal-flyout__today" part="today"></p>
            </header>
            <div class="ui-cal-flyout__nav" part="nav">
                <button type="button" class="ui-cal-flyout__nav-btn" data-nav="prev" aria-label="Previous month" title="Previous month">
                    <ui-icon icon="caret-left"></ui-icon>
                </button>
                <div class="ui-cal-flyout__month-label" part="month-label" aria-live="polite"></div>
                <button type="button" class="ui-cal-flyout__nav-btn" data-nav="next" aria-label="Next month" title="Next month">
                    <ui-icon icon="caret-right"></ui-icon>
                </button>
            </div>
            <div class="ui-cal-flyout__weekdays" part="weekdays" role="row"></div>
            <div class="ui-cal-flyout__grid" part="grid" role="grid"></div>
        </div>`;
	};
	constructor() {
		super();
		const now = /* @__PURE__ */ new Date();
		this.#year = now.getFullYear();
		this.#month = now.getMonth();
	}
	onRender() {
		super.onRender();
		this.#wire();
		this.#renderFrame();
	}
	disconnectedCallback() {
		this.#unbind?.();
		this.#unbind = null;
		super.disconnectedCallback?.();
	}
	/** Bind nav / day-cell clicks once (element persists as a hidden singleton — see module helpers below). */
	#wire() {
		const root = this.shadowRoot;
		if (!root || this.#unbind) return;
		const onClick = (ev) => {
			const t = ev.target;
			const nav = t?.closest?.("[data-nav]");
			if (nav) {
				if (nav.dataset.nav === "prev") this.#shiftMonth(-1);
				else if (nav.dataset.nav === "next") this.#shiftMonth(1);
				return;
			}
			const day = t?.closest?.(".ui-cal-flyout__day");
			if (day) this.#selectDay(day);
		};
		const off = addEvent(root, "click", onClick);
		this.#unbind = () => off?.();
	}
	#shiftMonth(delta) {
		this.#month += delta;
		if (this.#month < 0) {
			this.#month = 11;
			this.#year -= 1;
		} else if (this.#month > 11) {
			this.#month = 0;
			this.#year += 1;
		}
		this.#renderFrame();
	}
	/** Jump the visible grid back to the month containing today (does not touch selection). */
	#goToday() {
		const now = /* @__PURE__ */ new Date();
		this.#year = now.getFullYear();
		this.#month = now.getMonth();
		this.#renderFrame();
	}
	#selectDay(el) {
		const iso = el.dataset.date;
		if (!iso) return;
		this.#selected = new Date(iso);
		this.shadowRoot?.querySelectorAll(".ui-cal-flyout__day[data-selected]")?.forEach((n) => n.removeAttribute("data-selected"));
		el.setAttribute("data-selected", "");
		this.dispatchEvent(new CustomEvent("calendar-select", {
			bubbles: true,
			composed: true,
			detail: { date: this.#selected }
		}));
	}
	/** Re-paint today-header / month-label / weekday-row / day-grid from `#year`/`#month`/`#selected`. */
	#renderFrame() {
		const root = this.shadowRoot;
		if (!root) return;
		const locale = typeof navigator !== "undefined" ? navigator.language : void 0;
		const startDay = resolveFirstDayOfWeek(locale ?? "en-US");
		const today = /* @__PURE__ */ new Date();
		const todayEl = root.querySelector(".ui-cal-flyout__today");
		if (todayEl) todayEl.textContent = today.toLocaleDateString(locale, {
			weekday: "long",
			month: "long",
			day: "numeric",
			year: "numeric"
		});
		const monthLabelEl = root.querySelector(".ui-cal-flyout__month-label");
		if (monthLabelEl) monthLabelEl.textContent = new Date(this.#year, this.#month, 1).toLocaleDateString(locale, {
			month: "long",
			year: "numeric"
		});
		const weekdaysEl = root.querySelector(".ui-cal-flyout__weekdays");
		if (weekdaysEl) weekdaysEl.replaceChildren(...weekdayShortLabels(locale ?? "en-US", startDay).map((label) => {
			const span = document.createElement("span");
			span.className = "ui-cal-flyout__weekday";
			span.setAttribute("role", "columnheader");
			span.textContent = label;
			return span;
		}));
		const gridEl = root.querySelector(".ui-cal-flyout__grid");
		if (gridEl) {
			const cells = buildMonthCells(this.#year, this.#month, startDay);
			gridEl.replaceChildren(...cells.map((cell) => {
				const btn = document.createElement("button");
				btn.type = "button";
				btn.className = "ui-cal-flyout__day";
				btn.textContent = String(cell.day);
				btn.dataset.date = cell.date.toISOString();
				btn.setAttribute("role", "gridcell");
				if (cell.otherMonth) btn.setAttribute("data-other-month", "");
				if (cell.isToday) btn.setAttribute("data-today", "");
				if (this.#selected && isSameDate(cell.date, this.#selected)) btn.setAttribute("data-selected", "");
				btn.setAttribute("aria-label", cell.date.toLocaleDateString(locale, {
					weekday: "long",
					month: "long",
					day: "numeric",
					year: "numeric"
				}));
				return btn;
			}));
		}
	}
	open() {
		this.#goToday();
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
CalendarFlyout = __decorate([defineElement("ui-calendar-flyout")], CalendarFlyout);
var singleton = null;
/** Mount (once) the singleton `<ui-calendar-flyout>` into the shared overlay root. */
function ensureCalendarFlyout() {
	if (singleton?.isConnected) return singleton;
	const overlayRoot = ensureOverlayRoot();
	let el = overlayRoot.querySelector("ui-calendar-flyout");
	if (!el) {
		el = document.createElement("ui-calendar-flyout");
		el.hidden = true;
		overlayRoot.appendChild(el);
	}
	singleton = el;
	return el;
}
/** Toggle the shared calendar flyout, wired through `ChromeFlyout`'s exclusive-open contract. */
function toggleCalendarFlyout(anchor) {
	toggleChromeFlyout(FLYOUT_KIND, () => {
		const el = ensureCalendarFlyout();
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
//#endregion
export { setChromeFlyoutShellHost as a, positionFlyout as i, closeChromeFlyout as n, toggleChromeFlyout as o, ensureOverlayRoot as r, toggleCalendarFlyout as t };
