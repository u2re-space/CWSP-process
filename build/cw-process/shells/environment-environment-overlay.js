//#region src/frontend/boot/shell-slots.ts
/**
* Light-DOM `slot` assignments for `cw-shell-*` hosts. Layouts project these into shadow `<slot>` nodes.
*
* - `content`: default (unnamed) slot — routed views and most UI.
* - `underlying`: behind content (wallpaper, canvas, speed dial / home when shell hosts them).
* - `overlay`: above content (toasts, dialogs, menus, tooltips — assign in consuming code).
*
* NOTE: Content script shell omits the underlying layer. **Window frames** (`wf-frame`) are not shells:
* imperative or slotted overlay UI must mount under the parent `cw-shell-*` `[data-shell-overlays]` layer
* (use {@link resolveOverlayMountPoint} / {@link resolveShellOverlaysMount}).
*/
var SHELL_SLOT = {
	underlying: "underlying",
	overlay: "overlay",
	/** Default slot: use empty string / omit `slot` on the element. */
	content: ""
};
/**
* Comma-separated selector for {@link Element.closest} — matches `cw-shell-*` tags from shell registration.
* Keep aligned with `ShellId` values registered via {@link ensureShellElementDefined}.
*/
var SHELL_HOST_SELECTOR = [
	"cw-shell-base",
	"cw-shell-window",
	"cw-shell-tabbed",
	"cw-shell-minimal",
	"cw-shell-environment",
	"env-shell-container",
	"cw-shell-content",
	"cw-shell-immersive",
	"cw-shell-faint"
].join(",");
/**
* Nearest shell's shadow `[data-shell-overlays]` for stacking UI above routed views.
* Walks past `.wf-frame` and other non-shell ancestors to the enclosing shell host (`cw-shell-*` or `env-shell-container`).
*/
function resolveShellOverlaysMount(from) {
	if (!(from instanceof Element) || typeof from.closest !== "function") return null;
	const host = from.closest(SHELL_HOST_SELECTOR);
	if (!host) return null;
	const fromApi = host.overlayMount;
	if (fromApi instanceof HTMLElement) return fromApi;
	const fromShadow = host.shadowRoot?.querySelector?.("[data-shell-overlays]") ?? null;
	if (fromShadow instanceof HTMLElement) return fromShadow;
	const fromLight = host.querySelector?.("[data-shell-overlays]") ?? null;
	return fromLight instanceof HTMLElement ? fromLight : null;
}
/**
* Prefer shell overlay layer (from `anchor`'s enclosing shell), then `[data-app-layer="overlay"]`,
* then `.basic-app`, then `document.body`.
*/
function resolveOverlayMountPoint(anchor) {
	if (typeof document === "undefined") return;
	const shellOverlays = anchor ? resolveShellOverlaysMount(anchor) : null;
	if (shellOverlays) return shellOverlays;
	const appLayer = document.querySelector("[data-app-layer=\"overlay\"]");
	if (appLayer) return appLayer;
	const basicApp = document.querySelector(".basic-app");
	if (basicApp) return basicApp;
	return document.body;
}
//#endregion
//#region src/frontend/shells/environment/scss/container.scss?inline
var container_default = ":host{block-size:var(--lv-height,100lvb);box-sizing:border-box;color-scheme:light dark;display:block;isolation:isolate;min-block-size:var(--lv-height,100lvb);overflow:visible;position:relative}.esc-stack{display:grid;grid-template:1fr/1fr}.esc-layer,.esc-stack{box-sizing:border-box;min-block-size:inherit}.esc-layer{grid-area:1/1}.esc-underlying{overflow:visible;pointer-events:none;z-index:0}.esc-main{align-items:stretch;display:flex;flex-direction:column;min-block-size:inherit;pointer-events:auto;z-index:1}.esc-main,.esc-overlays{overflow:visible;position:relative}.esc-overlays{pointer-events:none;z-index:2}";
//#endregion
//#region src/frontend/shells/environment/environment-shell-container.ts
/**
* Multi-layer environment host: `underlying` (back), default `main` content, `overlay` (front).
* Aligns with {@link SHELL_SLOT} from `boot/shell-slots` for cross-shell consistency.
*
* INVARIANT: Custom element constructor must NOT set attributes (incl. via `element.style`).
* Chromium throws `NotSupportedError: The result must not have attributes` on
* `document.createElement("env-shell-container")` if the constructor writes attrs.
* Host display/box-sizing live in `:host` SCSS instead.
*/
var ENV_SHELL_CONTAINER_TAG = "env-shell-container";
var template = document.createElement("template");
template.innerHTML = `
<div class="esc-stack" part="stack">
  <div class="esc-layer esc-underlying" part="underlying">
    <slot name="${SHELL_SLOT.underlying}"></slot>
  </div>
  <div class="esc-layer esc-main" part="main" data-shell-content role="main">
    <slot></slot>
  </div>
  <div
    class="esc-layer esc-overlays"
    part="overlays"
    data-shell-overlays
    data-env-shell-overlays
  >
    <slot name="${SHELL_SLOT.overlay}"></slot>
  </div>
</div>`;
var EnvironmentShellContainer = class extends HTMLElement {
	#ready = false;
	get overlayMount() {
		this.#ensureShadow();
		return this.shadowRoot?.querySelector("[data-shell-overlays]") ?? null;
	}
	constructor() {
		super();
		this.#ensureShadow();
	}
	connectedCallback() {
		this.#ensureShadow();
	}
	#ensureShadow() {
		if (this.#ready && this.shadowRoot) return;
		const root = this.shadowRoot ?? this.attachShadow({ mode: "open" });
		if (!root.querySelector(".esc-stack")) root.appendChild(template.content.cloneNode(true));
		if (root.adoptedStyleSheets.length === 0) {
			const sheet = new CSSStyleSheet();
			sheet.replaceSync(container_default);
			root.adoptedStyleSheets = [sheet];
		}
		this.#ready = true;
	}
};
var defined = false;
/** Registers `<env-shell-container>` once (open shadow, three named layers). */
function defineEnvironmentShellContainer() {
	if (!defined && !customElements.get("env-shell-container")) {
		customElements.define(ENV_SHELL_CONTAINER_TAG, EnvironmentShellContainer);
		defined = true;
	}
	return EnvironmentShellContainer;
}
/**
* Safe factory — prefers `new` after define so constructor attribute rules are explicit.
* Falls back to `createElement` once the CE is upgraded.
*/
function createEnvironmentShellContainer() {
	defineEnvironmentShellContainer();
	const Ctor = customElements.get(ENV_SHELL_CONTAINER_TAG);
	if (Ctor) try {
		return new Ctor();
	} catch (err) {
		console.warn("[env-shell-container] `new` failed, falling back to createElement", err);
	}
	return document.createElement(ENV_SHELL_CONTAINER_TAG);
}
function isEnvironmentShellContainerHost(el) {
	return el instanceof HTMLElement && el.localName === "env-shell-container";
}
//#endregion
//#region src/frontend/shells/environment/environment-overlay.ts
/**
* Stacking root for transient UI when the app has no `cw-shell-*` element (typical environment demo).
* Create once under e.g. `#app` / `.env-shell-root`; mount menus/modals as children (use pointer-events on children).
*/
var ENV_SHELL_OVERLAYS_ATTR = "data-env-shell-overlays";
/**
* WHY: Must beat `.env-shell-chrome` (`$z-shell-chrome` = 2147483000) so speed-dial /
* explorer context menus paint above the taskbar / mobile nav.
*/
var ENV_OVERLAY_Z = "2147483600";
function getOrCreateEnvironmentOverlayMount(host) {
	const sel = `[${ENV_SHELL_OVERLAYS_ATTR}]`;
	const existing = host.querySelector(sel);
	if (existing) {
		if (!existing.style.zIndex) existing.style.zIndex = ENV_OVERLAY_Z;
		if (!existing.style.position) existing.style.position = isEnvironmentShellContainerHost(host) ? "absolute" : "fixed";
		return existing;
	}
	const el = document.createElement("div");
	el.setAttribute(ENV_SHELL_OVERLAYS_ATTR, "");
	el.className = "env-shell-overlays";
	el.setAttribute("data-part", "env-overlays");
	if (isEnvironmentShellContainerHost(host)) {
		el.slot = SHELL_SLOT.overlay;
		el.style.cssText = `position:absolute;inset:0;pointer-events:none;z-index:${ENV_OVERLAY_Z};box-sizing:border-box;`;
		host.appendChild(el);
		return el;
	}
	el.style.cssText = `position:fixed;inset:0;pointer-events:none;z-index:${ENV_OVERLAY_Z};box-sizing:border-box;`;
	host.appendChild(el);
	return el;
}
//#endregion
export { SHELL_SLOT as a, isEnvironmentShellContainerHost as i, createEnvironmentShellContainer as n, resolveOverlayMountPoint as o, defineEnvironmentShellContainer as r, resolveShellOverlaysMount as s, getOrCreateEnvironmentOverlayMount as t };
