const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../com/app14.js","../assets/index-CU5eF_0S.js","../chunks/ecosystem-skus.js","../chunks/rolldown-runtime.js","./core4.js","./core.js","./core2.js","./object.js","./core5.js","./uniform.js"])))=>i.map(i=>d[i]);
import { t as __vitePreload } from "../assets/index-CU5eF_0S.js";
import { D as bindStyle, E as S, St as preloadStyle, gt as loadAsAdopted } from "./core.js";
import { $ as H, Q as property, Z as defineElement, xt as addEvent } from "./core4.js";
import { W as registerDirectoryRoot } from "./core5.js";
import { l as numberRef } from "./object.js";
import { r as resolveFsBackend$1 } from "../com/app.js";
import "../vendor/culori.js";
import { c as __decorate, o as UIElement, s as UIElement_default } from "../com/app3.js";
import { c as captureSpeedDialSnapshot, h as persistSpeedDialIconBlob, n as SPEED_DIAL_MUTATION_EVENT, o as applySpeedDialSnapshot, u as getSpeedDialMeta, v as speedDialItems } from "../com/app5.js";
import "./icon.js";
import { t as app_menu_default } from "./veela2.js";
import "../com/app6.js";
import "../vendor/dompurify.js";
//#region ../../modules/projects/veela.css/src/scss/ui/components/statusbar.scss?inline
var statusbar_default = ":host(ui-statusbar){align-items:center;background:transparent;box-sizing:border-box;color:var(--env-status-fg,var(--wallpaper-contrast-color,CanvasText));display:flex;flex-direction:row;gap:.35rem;inline-size:100%;justify-content:space-between}:host(ui-statusbar) :is(.center,.left,.right){align-items:center;background:transparent;display:flex;min-inline-size:0;padding-block-start:.5rem}:host(ui-statusbar) .left{flex:0 1 auto;justify-content:flex-start;padding-inline-start:max(1rem,env(safe-area-inset-left,0))}:host(ui-statusbar) .center{flex:1 1 auto;justify-content:center}:host(ui-statusbar) .right{flex:0 1 auto;justify-content:flex-end;margin-inline-start:auto;padding-inline-end:max(1rem,env(safe-area-inset-right,0))}@media screen and (pointer:fine) and ((min-width:768px) or (hover:hover)){:host(ui-statusbar),ui-statusbar{display:none!important}}@layer components{.env-ui-statusbar{backdrop-filter:blur(10px);background:color-mix(in oklab,var(--color-surface-container,--u2-color-mod(var(--base-color,#5a9ec8),960)) 88%,transparent);border-block-start:1px solid var(--wf-md-outline-variant,var(--color-outline-variant));color:var(--color-on-surface,--u2-color-mod(var(--base-color,#5a9ec8),100));order:1;padding:.35rem .65rem calc(.35rem + env(safe-area-inset-bottom, 0))}.env-ui-statusbar__intro p{margin:.1rem 0;opacity:.92}.env-ui-statusbar__right{align-items:center;display:flex;justify-content:flex-end}.env-ui-statusbar__clock{border-radius:.35rem;color:inherit;cursor:pointer;font:600 .8125rem/1 ui-sans-serif,system-ui,sans-serif;font-variant-numeric:tabular-nums;letter-spacing:.01em;padding:.15rem .25rem;pointer-events:auto;user-select:none}.env-ui-statusbar__clock:focus-visible,.env-ui-statusbar__clock:hover{background:color-mix(in oklch,currentColor 12%,transparent);color:contrast-color(inherit(background-color));outline:none}.env-device-tray--footer{border-radius:.35rem;cursor:pointer;pointer-events:auto}.env-device-tray--footer:focus-visible,.env-device-tray--footer:hover{background:color-mix(in oklch,currentColor 12%,transparent);color:contrast-color(inherit(background-color));outline:none}.env-status-bar__tray{align-items:center;display:flex;flex-wrap:nowrap;gap:.35rem}.env-status-bar__chip{align-items:center;background:color-mix(in oklch,var(--env-status-fg,var(--wf-md-on-surface,white)) 10%,transparent);border:1px solid color-mix(in oklch,var(--env-status-fg,var(--wf-md-on-surface,white)) 18%,transparent);border-radius:999px;color:inherit;color:contrast-color(inherit(background-color));display:inline-flex;gap:.25rem;line-height:1;padding:.12rem .35rem}.env-status-bar__chip,.env-status-bar__chip span{font-variant-numeric:tabular-nums}.env-status-bar__chip ui-icon{--icon-size:1.15rem;--icon-padding:0;--icon-color:var(--env-status-fg,var(--wallpaper-contrast-color,currentColor));block-size:var(--icon-size);color:var(--icon-color);display:block;font-size:var(--icon-size);inline-size:var(--icon-size);min-block-size:var(--icon-size);min-inline-size:var(--icon-size)}.env-status-bar__pct{font-variant-numeric:tabular-nums;opacity:.95}.env-status-bar__meta{font-size:11px;margin:0;opacity:.88}.env-shell-chrome[data-status-overlay] .env-ui-statusbar,.env-shell-root[data-status-overlay]>.env-shell-chrome .env-ui-statusbar{align-items:center;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;background:transparent!important;block-size:var(--env-status-inset-top,max(2rem,env(safe-area-inset-top,0px)));border:0!important;box-sizing:border-box;display:flex;inset-block-end:auto;inset-block-start:0;inset-inline:0;min-block-size:var(--env-status-inset-top,max(2rem,env(safe-area-inset-top,0px)));order:unset;padding:0 .75rem;position:fixed;z-index:calc(var(--env-z-shell-chrome, 2147483000) + 2);--icon-color:var(--env-status-fg,var(--wallpaper-contrast-color));color:var(--env-status-fg,var(--wallpaper-contrast-color));pointer-events:none}.env-shell-chrome[data-status-overlay] :is(.env-status-bar__meta,.env-ui-statusbar__intro){display:none!important}.env-shell-chrome[data-status-overlay] .env-ui-statusbar__clock{color:var(--env-status-fg,var(--wallpaper-contrast-color));display:block;font-size:.875rem}.env-shell-chrome[data-status-overlay] :is(.env-device-tray--footer,.env-status-bar__chip){color:var(--env-status-fg,var(--wallpaper-contrast-color))}.env-shell-chrome[data-status-overlay] .env-status-bar__chip ui-icon{--icon-size:1.25rem;--icon-padding:0;--icon-color:var(--env-status-fg,var(--wallpaper-contrast-color));block-size:var(--icon-size);color:var(--icon-color);font-size:var(--icon-size);inline-size:var(--icon-size);min-block-size:var(--icon-size);min-inline-size:var(--icon-size)}.env-shell-chrome[data-status-overlay] .env-status-bar__pct{font-size:.8125rem}.env-shell-chrome[data-status-overlay] .env-device-tray--footer{display:flex!important}.env-shell-chrome[data-status-overlay] .env-status-bar__chip{background:transparent;border-color:transparent;padding-inline:.15rem}.env-shell-chrome[data-desktop]:not([data-status-overlay]) .env-ui-statusbar__clock,.env-shell-chrome[data-standalone] .env-ui-statusbar,.env-shell-root[data-standalone] .env-shell-chrome:not([data-desktop]) .env-ui-statusbar{display:none!important}.env-shell-root[data-env-native-task] .env-shell-chrome[data-desktop],env-shell-container[data-env-native-task] .env-shell-chrome[data-desktop]{opacity:0;pointer-events:none;visibility:hidden}}";
//#endregion
//#region ../../modules/projects/fl.ui/src/styles/font-loader.ts
/**
* Cache for Blob URLs to avoid re-creating them
*/
var blobUrlCache = /* @__PURE__ */ new Map();
/**
* Cache for FontFace instances
*/
var fontFaceCache = /* @__PURE__ */ new Map();
/**
* Decode base64 string to Uint8Array
* Uses Uint8Array.fromBase64 if available, otherwise falls back to atob
*/
function decodeBase64(base64) {
	if (typeof Uint8Array.fromBase64 === "function") return Uint8Array.fromBase64(base64);
	const binaryString = atob(base64);
	const bytes = new Uint8Array(binaryString.length);
	for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);
	return bytes;
}
/**
* Decompress data using Compression Streams API
* Only used for fonts that were compressed (e.g., gzip)
* woff2 files are already compressed and don't need decompression
*/
async function decompress(data, algorithm = "gzip") {
	if (typeof CompressionStream === "undefined") throw new Error("Compression Streams API is not supported in this browser");
	const stream = new DecompressionStream(algorithm);
	const writer = stream.writable.getWriter();
	const reader = stream.readable.getReader();
	writer.write(data);
	writer.close();
	const chunks = [];
	let done = false;
	while (!done) {
		const { value, done: readerDone } = await reader.read();
		done = readerDone;
		if (value) chunks.push(value);
	}
	const totalLength = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
	const result = new Uint8Array(totalLength);
	let offset = 0;
	for (const chunk of chunks) {
		result.set(chunk, offset);
		offset += chunk.length;
	}
	return result;
}
/**
* Get or create a Blob URL from font data
* Caches the URL to avoid re-creating Blobs
*/
async function getBlobUrl(fontData, cacheKey, mimeType = "font/woff2") {
	if (blobUrlCache.has(cacheKey)) return blobUrlCache.get(cacheKey);
	const blob = new Blob([fontData], { type: mimeType });
	const url = URL.createObjectURL(blob);
	blobUrlCache.set(cacheKey, url);
	return url;
}
/**
* Load a font from base64-encoded, compressed data
*/
async function loadFont(metadata) {
	const { base64, family, style = "normal", weight = "normal", compressed = false } = metadata;
	const cacheKey = `${family}-${style}-${weight}`;
	if (fontFaceCache.has(cacheKey)) return fontFaceCache.get(cacheKey);
	const encodedData = decodeBase64(base64);
	const blobUrl = await getBlobUrl(compressed ? await decompress(encodedData) : encodedData, cacheKey, compressed ? "application/octet-stream" : "font/woff2");
	const fontFace = new FontFace(family, `url(${blobUrl}) format('woff2')`, {
		style,
		weight: typeof weight === "string" ? weight : `${weight}`,
		display: "swap"
	});
	await fontFace.load();
	document.fonts.add(fontFace);
	fontFaceCache.set(cacheKey, fontFace);
	return fontFace;
}
/**
* Load multiple fonts
*/
async function loadFonts(metadataArray) {
	const promises = metadataArray.map((metadata) => loadFont(metadata));
	return Promise.all(promises);
}
var loadingFontRegistry = null;
async function loadFontRegistry() {
	if (loadingFontRegistry) return loadingFontRegistry;
	loadingFontRegistry = __vitePreload(() => import("../com/app14.js").then((mod) => typeof mod.loadFontRegistryShards === "function" ? mod.loadFontRegistryShards().then((fontRegistry) => ({ fontRegistry })) : { fontRegistry: mod.fontRegistry }), __vite__mapDeps([0,1,2,3]), import.meta.url).catch((error) => {
		console.error("Failed to load font registry:", error);
	});
	return loadingFontRegistry;
}
/**
* Load all fonts from the registry
*/
async function loadAllFonts() {
	const fontRegistry = await loadFontRegistry();
	return loadFonts(Object.values(fontRegistry.fontRegistry));
}
/**
* Font data registry (populated by Vite plugin)
* Import from generated font-registry module
*/
//#endregion
//#region ../../modules/projects/veela.css/src/scss/ui/index.scss?inline
var ui_default = ".c-underlying{inset:0;overflow:visible;pointer-events:none;position:absolute;z-index:calc(var(--layer-main-z, 0) - 1)}.c-underlying__shaped{block-size:100%;border-radius:var(--layer-shape-radius,inherit);inline-size:100%;mask-image:var(--layer-shape-mask,none);-webkit-mask-image:var(--layer-shape-mask,none)}@supports (border-shape:inset(0)){.c-underlying__shaped{border-shape:var(--layer-shape-clip,none)}}@supports not (border-shape:inset(0)){.c-underlying__shaped{clip-path:var(--layer-shape-clip,none)}}.c-overlaying{inset:0;pointer-events:none;position:absolute;z-index:calc(var(--layer-main-z, 0) + 1)}.c-overlaying [data-axis]{pointer-events:auto}@layer components{.btn{align-items:center;background:var(--color-bg-alt);border:1px solid var(--color-border);border-radius:var(--radius-md);color:var(--color-fg);cursor:pointer;display:inline-flex;font-size:var(--font-size-sm);font-weight:500;gap:var(--space-sm);justify-content:center;padding-block:0;padding-inline:0;transition:all var(--transition-fast)}.btn:hover:not(:disabled){background:var(--color-border)}.btn:focus-visible{outline:2px solid var(--color-primary);outline-offset:2px}.btn{--ui-bg:var(--color-surface-container-high);--ui-fg:var(--color-on-surface);--ui-bg-hover:var(--color-surface-container-highest);--ui-ring:var(--color-primary);--ui-radius:var(--radius-lg);--ui-pad-y:var(--space-sm);--ui-pad-x:var(--space-lg);--ui-font-size:var(--text-sm);--ui-font-weight:var(--font-weight-semibold);--ui-min-h:40px;--ui-opacity:1;appearance:none;background:var(--ui-bg);block-size:calc-size(fit-content,max(var(--ui-min-h),size));border:none;border-radius:var(--ui-radius);box-shadow:var(--elev-0);color:var(--ui-fg);contain:none;container-type:normal;flex-direction:row;flex-wrap:nowrap;font-size:var(--ui-font-size);font-weight:var(--ui-font-weight);gap:var(--space-xs);letter-spacing:.01em;line-height:1.2;max-block-size:stretch;max-inline-size:none;min-block-size:fit-content;min-inline-size:calc-size(fit-content,size + .5rem + var(--icon-size,1rem));opacity:var(--ui-opacity);overflow:hidden;padding:max(var(--ui-pad-y,0px),0px) max(var(--ui-pad-x,0px),0px);place-content:center;align-content:safe center;justify-content:safe center;place-items:center;align-items:safe center;justify-items:safe center;pointer-events:auto;text-align:center;text-decoration:none;text-overflow:ellipsis;text-rendering:auto;text-shadow:none;text-transform:none;text-wrap:nowrap;touch-action:manipulation;transition:background-color var(--motion-fast),box-shadow var(--motion-fast),transform var(--motion-fast);user-select:none;white-space:nowrap}.btn>ui-icon{align-self:center;color:inherit;flex-shrink:0;pointer-events:none;vertical-align:middle}@media (max-width:480px){.btn.btn-icon{aspect-ratio:1/1;block-size:fit-content;font-size:0!important;gap:0;max-block-size:stretch;max-inline-size:fit-content;min-inline-size:0}.btn.btn-icon .btn-text,.btn.btn-icon span:not(.sr-only){display:none!important}}.btn:hover{background:var(--ui-bg-hover);box-shadow:var(--elev-1);transform:translateY(-1px)}.btn:active{box-shadow:var(--elev-0);transform:translateY(0)}.btn:focus-visible{box-shadow:0 0 0 3px color-mix(in oklab,var(--ui-ring) 35%,transparent);outline:none}.btn:disabled{cursor:not-allowed;opacity:.5;transform:none!important}.btn:disabled:hover{background:var(--color-surface-container-high);box-shadow:var(--elev-0)}.btn.active,.btn.primary{--ui-bg:var(--color-primary);--ui-fg:var(--color-on-primary);--ui-ring:var(--color-primary)}.btn.primary{--ui-bg-hover:color-mix(in oklab,var(--color-primary) 90%,black)}.btn.active{box-shadow:var(--elev-1)}.btn.small{--ui-pad-y:var(--space-xs);--ui-pad-x:var(--space-md);--ui-font-size:var(--text-xs);--ui-min-h:32px;--ui-radius:var(--radius-md)}.btn.icon-btn{block-size:40px;inline-size:40px;--ui-pad-y:0px;--ui-pad-x:0px;--ui-radius:9999px;--ui-font-size:var(--text-lg)}.btn[data-action=export-docx],.btn[data-action=export-md],.btn[data-action=open-md]{--ui-font-size:12px;--ui-pad-x:8px;--ui-pad-y:0px;--ui-min-h:28px}.btn:is([data-action=view-markdown-viewer],[data-action=view-markdown-editor],[data-action=view-rich-editor],[data-action=view-settings],[data-action=view-history],[data-action=view-workcenter]){--ui-font-size:13px;--ui-font-weight:500;--ui-pad-x:12px;--ui-pad-y:0px;--ui-min-h:32px;--ui-radius:16px;text-transform:capitalize}.btn:is([data-action=view-markdown-viewer],[data-action=view-markdown-editor],[data-action=view-rich-editor],[data-action=view-settings],[data-action=view-history],[data-action=view-workcenter][data-current],[data-action=view-workcenter].active){--ui-bg:var(--color-surface-container-highest);--ui-fg:var(--color-primary);--ui-ring:var(--color-primary)}.btn:is([data-action=toggle-edit],[data-action=snip],[data-action=solve],[data-action=code],[data-action=css],[data-action=voice],[data-action=edit-templates],[data-action=recognize],[data-action=analyze],[data-action=select-files],[data-action=clear-prompt],[data-action=view-full-history]){--ui-font-size:12px;--ui-pad-x:8px;--ui-pad-y:0px;--ui-min-h:28px;--ui-radius:14px}.btn:has(>span:only-of-type:empty),.btn:has(>ui-icon):not(:has(>:not(ui-icon))){aspect-ratio:1/1;block-size:fit-content;font-size:0!important;gap:0;max-block-size:stretch;max-inline-size:fit-content;min-inline-size:0;overflow:visible}.btn:has(>span:only-of-type:empty) span:not(.sr-only),.btn:has(>ui-icon):not(:has(>:not(ui-icon))) span:not(.sr-only){display:none!important}.btn-primary{background:var(--color-primary);border-color:var(--color-primary);color:white}.btn-primary:hover:not(:disabled){background:var(--color-primary-hover);border-color:var(--color-primary-hover)}@media (max-width:768px){.btn{--ui-pad-y:var(--space-xs);--ui-pad-x:var(--space-md);--ui-font-size:var(--text-xs);--ui-min-h:36px}}@media (max-width:480px){.btn{--ui-pad-y:var(--space-xs);--ui-pad-x:var(--space-xs);--ui-font-size:var(--text-xs);--ui-min-h:32px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.btn.btn-icon{overflow:visible}}@media (prefers-reduced-motion:reduce){.btn{transition:none}.btn,.btn:active,.btn:hover{transform:none!important}}}@layer utilities{.round-decor{--background-tone-shift:0;border-radius:.25rem;overflow:hidden;padding-block:.25rem}.round-decor:empty{display:none;padding:0;pointer-events:none;visibility:collapse}.time-format{display:inline-flex;flex-direction:row;font:500 .9em InterVariable,Inter,Fira Mono,Menlo,Consolas,monospace;font-kerning:auto;font-optical-sizing:auto;font-stretch:condensed;font-variant-numeric:tabular-nums;padding:.125rem;place-content:center;place-items:center;place-self:center;font-width:condensed;letter-spacing:-.05em;text-align:center;text-overflow:ellipsis;text-wrap:nowrap;white-space:nowrap}.ui-ws-item:not([data-layer=labels]) span:not(.ui-ws-item-caption){aspect-ratio:1/1;block-size:fit-content;display:inline;inline-size:fit-content;pointer-events:none}.ui-ws-item{cursor:pointer;pointer-events:auto;user-select:none}.ui-ws-item:active,.ui-ws-item:has(:active){cursor:grabbing;will-change:inset,translate,transform,opacity,z-index}}@layer components{@media print{.component-error,.component-loading,.ctx-menu,.ux-anchor{block-size:0!important;border:none!important;display:none!important;inline-size:0!important;inset:0!important;margin:0!important;max-block-size:0!important;max-inline-size:0!important;min-block-size:0!important;min-inline-size:0!important;opacity:0!important;overflow:hidden!important;padding:0!important;pointer-events:none!important;position:absolute!important;visibility:hidden!important;z-index:-1!important}}@media screen{.ctx-menu,.ui-grid-item,ui-modal,ui-window-frame{--font-family:\"InterVariable\",\"Inter\",\"Helvetica Neue\",\"Helvetica\",\"Calibri\",\"Roboto\",ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif}.ui-grid-item,ui-modal,ui-window-frame{--opacity:1;--scale:1;--rotate:0deg;--translate-x:0%;--translate-y:0%;content-visibility:auto;isolation:isolate;opacity:var(--opacity,1);rotate:0deg;scale:1;transform-box:fill-box;transform-origin:50% 50%;transform-style:flat;translate:0 0 0}.ctx-menu{--font-family:\"InterVariable\",\"Inter\",\"Helvetica Neue\",\"Helvetica\",\"Calibri\",\"Roboto\",ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif}.ctx-menu,.ctx-menu *{content-visibility:visible;visibility:visible}.ctx-menu{align-items:stretch;background-color:var(--color-surface);block-size:fit-content;border:1px solid var(--color-outline-variant);border-radius:var(--radius-md);box-shadow:var(--elev-3);color:var(--color-on-surface);display:flex;flex-direction:column;font-family:var(--font-family,'system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif')!important;font-size:.875rem;font-weight:400;inline-size:max-content;max-inline-size:min(240px,100cqi);min-inline-size:160px;opacity:1;padding:.25rem 0;pointer-events:auto;position:fixed;text-align:start;transform:scale3d(var(--scale,1),var(--scale,1),1) translate3d(var(--translate-x,0),var(--translate-y,0),0);transition:opacity .15s ease-out,visibility .15s ease-out,transform .15s ease-out;visibility:visible;z-index:99999}.ctx-menu[data-hidden]{opacity:0;pointer-events:none;visibility:hidden}.ctx-menu>*{align-items:center;background-color:initial;border:none;border-radius:var(--radius-sm);cursor:pointer;display:flex;flex-direction:row;font-family:var(--font-family,'system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif')!important;gap:.5rem;inline-size:stretch;justify-content:flex-start;min-block-size:2rem;outline:none;overflow:hidden;padding:.375rem .75rem;pointer-events:auto;position:relative;text-align:start;text-overflow:ellipsis;text-wrap:nowrap;transition:background-color .15s ease,color .15s ease;white-space:nowrap}.ctx-menu>*,.ctx-menu>:hover{color:var(--color-on-surface)}.ctx-menu>:hover{background-color:var(--color-surface-container-high)}.ctx-menu>:active{background-color:var(--color-surface-container-highest);color:var(--color-on-surface)}.ctx-menu>:focus-visible{background-color:var(--color-surface-container-high);outline:var(--focus-ring)}.ctx-menu>:not(.ctx-menu-separator){gap:.5rem}.ctx-menu>*>*{pointer-events:none}.ctx-menu>*>span{color:inherit;flex:1 1 auto;font-size:.875rem;font-weight:400;line-height:1.25;min-inline-size:0;pointer-events:none;text-align:start!important;user-select:none}.ctx-menu>*>ui-icon{--icon-size:1rem;block-size:var(--icon-size);color:var(--color-on-surface-variant);flex-shrink:0;inline-size:var(--icon-size);pointer-events:none;user-select:none}.ctx-menu.ctx-menu-separator,.ctx-menu>.ctx-menu-separator{background-color:var(--color-outline-variant);block-size:1px;margin:.125rem .375rem;min-block-size:auto;opacity:.3;padding:0;pointer-events:none}.ctx-menu.grid-rows{align-items:stretch;display:flex!important;flex-direction:column;grid-auto-rows:unset!important;grid-template-columns:unset!important}.ctx-menu.grid-rows>:not(.ctx-menu-separator){align-items:center!important;display:flex!important;flex-flow:row nowrap!important;grid-column:unset!important;grid-row:unset!important;grid-template-columns:unset!important;grid-template-rows:unset!important;justify-content:flex-start!important;place-content:unset!important;place-items:unset!important}.ux-anchor{--shift-x:var(--client-x,0px);--shift-y:var(--client-y,0px);--translate-x:round(nearest,min(0px,calc(100cqi - (100% + var(--shift-x, 0px)))),calc(1px / var(--pixel-ratio, 1)))!important;--translate-y:round(nearest,min(0px,calc(100cqb - (100% + var(--shift-y, 0px)))),calc(1px / var(--pixel-ratio, 1)))!important;direction:ltr;inset-block-end:auto;inset-block-start:max(var(--shift-y),var(--status-bar-padding,0px));inset-inline-end:auto;inset-inline-start:max(var(--shift-x),0px);transform:none;translate:0 0 0;writing-mode:horizontal-tb}.component-error,.component-loading{align-items:center;color:var(--text-secondary,light-dark(#666,#aaa));display:flex;flex-direction:column;gap:1rem;justify-content:center;padding:2rem}.component-loading .loading-spinner{animation:spin 1s linear infinite;block-size:2rem;border:2px solid var(--border,light-dark(#ddd,#444));border-block-start:2px solid var(--primary,light-dark(#007bff,#5fa8ff));border-radius:50%;inline-size:2rem}.component-error{text-align:center}.component-error h3{color:var(--error,light-dark(#dc3545,#ff6b6b));margin:0}.component-error p{margin:0}ui-icon{align-items:center;block-size:var(--icon-size,1.25rem);color:currentColor;display:inline-flex;fill:currentColor;flex-shrink:0;font-size:1rem;inline-size:var(--icon-size,1.25rem);justify-content:center;min-block-size:var(--icon-size,1.25rem);min-inline-size:var(--icon-size,1.25rem);opacity:1;vertical-align:middle;visibility:visible}ui-icon :is(img,svg){block-size:100%;color:inherit;fill:currentColor;inline-size:100%}:is(button,.btn)>ui-icon{color:inherit}.file-picker{align-items:center;display:flex;flex-direction:column;justify-content:center;min-block-size:300px;padding:2rem;text-align:center}.file-picker .file-picker-header{margin-block-end:2rem}.file-picker .file-picker-header h2{color:var(--color-on-surface);font-size:1.5rem;font-weight:600;margin:0 0 .5rem}.file-picker .file-picker-header p{color:var(--color-on-surface-variant);font-size:.9rem;margin:0}.file-picker .file-picker-actions{display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;margin-block-end:2rem}.file-picker .file-picker-actions .btn{align-items:center;border:1px solid transparent;border-radius:var(--radius-md);display:flex;font-weight:500;gap:.5rem;padding:.75rem 1.5rem;transition:all .2s ease}.file-picker .file-picker-actions .btn:hover{box-shadow:0 4px 8px rgba(0,0,0,.1);transform:translateY(-1px)}.file-picker .file-picker-actions .btn.btn-primary{background:var(--color-primary);border-color:var(--color-primary);color:var(--color-on-primary)}.file-picker .file-picker-actions .btn:not(.btn-primary){background:var(--color-surface-container);border-color:var(--color-outline-variant);color:var(--color-on-surface)}.file-picker .file-picker-info{max-inline-size:400px}.file-picker .file-picker-info p{color:var(--color-on-surface-variant);font-size:.85rem;margin:.25rem 0}.file-picker .file-picker-info p strong{color:var(--color-on-surface)}}}@layer layout{@media screen{:where(body)>:where(#app,#container,#root,.root){background-color:initial;border:0 transparent;outline:0 none transparent}:host,:root,:scope,:where(body){pointer-events:auto;transition-behavior:allow-discrete;interpolate-size:allow-keywords;content-visibility:auto;--keyboard-inset-bottom:calc(max(env(keyboard-inset-bottom, 0px), 0px) / max(var(--zoom, 1), 0.125));--keyboard-inset-height:calc(max(env(keyboard-inset-height, 0px), 0px) / max(var(--zoom, 1), 0.125))}:host,:root,:scope{--scale:1;--translate-x:0px;--translate-y:0px}:host,:host :where(*),:root,:root :where(*),:scope,:scope :where(*){--scale:1;--translate-x:0px;--translate-y:0px}:root,:where(html){background-color:initial;block-size:var(--lv-height,100lvb);border:0 transparent;contain:none;container-name:html root;container-type:size;display:flex;flex-direction:column;inline-size:stretch;inset:0;inset-block-end:auto;line-height:normal;margin:0;max-block-size:min(100%,min(100cqb,var(--lv-height,100lvb)))!important;max-inline-size:min(100%,min(100cqi,100dvi))!important;min-block-size:min(100cqb,var(--lv-height,100lvb));min-inline-size:min(100cqi,100dvi);outline:0 none transparent;overflow:visible;padding:0;place-content:start;place-items:start;place-self:start;position:fixed;transform:none;translate:none}:where(body){background-color:initial;block-size:stretch;border:0 transparent;contain:strict;container-name:body;container-type:size;display:inline-flex;font-size:var(--text-base,.9rem);inline-size:stretch;inset:auto;margin:0;max-block-size:min(100%,min(100cqb,var(--lv-height,100lvb)));max-inline-size:min(100%,min(100cqi,100dvi));min-block-size:0;min-inline-size:0;outline:0 none transparent;overflow:visible;padding:0;place-content:start;place-items:start;place-self:start;pointer-events:auto;position:relative;transform:none;translate:none}:where(body)>:where(#app,#container,#root,.root){block-size:stretch;inline-size:stretch;max-block-size:min(100%,min(100cqb,var(--lv-height,100lvb)));max-inline-size:min(100%,min(100cqi,100dvi));min-block-size:0;min-inline-size:0}:where(body)>:where(*){max-block-size:min(100%,min(100cqb,var(--lv-height,100lvb)));max-inline-size:min(100%,min(100cqi,100dvi))}}}@function --hsv(--src-color <color>) returns <color>{result:hsl(from var(--src-color,black) h calc(calc((calc(l / 100) - calc(calc(l / 100) * (1 - calc(s / 100) / 2))) / clamp(.0001, min(calc(calc(l / 100) * (1 - calc(s / 100) / 2)), calc(1 - calc(calc(l / 100) * (1 - calc(s / 100) / 2)))), 1)) * 100) calc(calc(calc(l / 100) * (1 - calc(s / 100) / 2)) * 100)/alpha)}@function --get-oriented-size-num(--orient <number>: 0, --osx <number>: 0, --osy <number>: 0, --axis-to-return <number>: 0 ) returns <number>{--go-orient:round(nearest,var(--orient,0),1);--go-axis:clamp(0,round(nearest,var(--axis-to-return,0),1),1);--go-axis-inline:calc(1 - var(--go-axis, 0));--go-axis-block:var(--go-axis,0);--go-swap-raw:mod(var(--go-orient),2);--go-swap:clamp(0,round(nearest,var(--go-swap-raw),1),1);--go-swap-inline:calc(1 - var(--go-swap, 0));--go-primary:var(--osx,0);--go-secondary:var(--osy,0);--go-inline:calc(var(--go-primary) * var(--go-swap-inline) + var(--go-secondary) * var(--go-swap));--go-block:calc(var(--go-secondary) * var(--go-swap-inline) + var(--go-primary) * var(--go-swap));result:calc(var(--go-inline) * var(--go-axis-inline) + var(--go-block) * var(--go-axis-block))}@function --get-oriented-size(--orient <number>: 0, --osx <length-percentage>: 0px, --osy <length-percentage>: 0px, --axis-to-return <number>: 0 ) returns <length-percentage>{--go-orient:mod(round(nearest,var(--orient,0),1),4);--go-axis:clamp(0,round(nearest,var(--axis-to-return,0),1),1);--go-axis-inline:calc(1 - var(--go-axis, 0));--go-axis-block:var(--go-axis,0);--go-swap-raw:mod(var(--go-orient,0),2);--go-swap:clamp(0,round(nearest,var(--go-swap-raw,0),1),1);--go-swap-inline:calc(1 - var(--go-swap, 0));--go-primary:var(--osx,0px);--go-secondary:var(--osy,0px);--go-inline:calc(var(--go-primary) * var(--go-swap-inline) + var(--go-secondary) * var(--go-swap));--go-block:calc(var(--go-secondary) * var(--go-swap-inline) + var(--go-primary) * var(--go-swap));result:calc(var(--go-inline) * var(--go-axis-inline) + var(--go-block) * var(--go-axis-block))}@function --get-oriented-vector(--orient <number>: 0, --ocx <length-percentage>: 0px, --ocy <length-percentage>: 0px, --axis-to-return <number>: 0 ) returns <length-percentage>{--go-orient:mod(round(nearest,var(--orient,0),1),4);--go-axis:clamp(0,round(nearest,var(--axis-to-return,0),1),1);--go-axis-inline:calc(1 - var(--go-axis, 0));--go-axis-block:var(--go-axis,0);--go-swap-raw:mod(var(--go-orient,0),2);--go-swap:clamp(0,round(nearest,var(--go-swap-raw,0),1),1);--go-swap-inline:calc(1 - var(--go-swap, 0));--go-primary-direct:var(--ocx,0px);--go-secondary-direct:var(--ocy,0px);--go-inline-direct:calc(var(--go-primary-direct) * var(--go-swap-inline) + var(--go-secondary-direct) * var(--go-swap));--go-block-direct:calc(var(--go-secondary-direct) * var(--go-swap-inline) + var(--go-primary-direct) * var(--go-swap));--go-inline-inverted:calc(0px - var(--go-inline-direct));--go-block-inverted:calc(0px - var(--go-block-direct));--go-rev-inline:clamp(0,calc(var(--go-orient) - 1),1);--go-rev-block:clamp(0,calc((1 - abs(calc(var(--go-orient) - 1.5))) * 2),1);--go-inline:calc(var(--go-inline-direct) * (1 - var(--go-rev-inline)) + var(--go-inline-inverted) * var(--go-rev-inline));--go-block:calc(var(--go-block-direct) * (1 - var(--go-rev-block)) + var(--go-block-inverted) * var(--go-rev-block));result:calc(var(--go-inline) * var(--go-axis-inline) + var(--go-block) * var(--go-axis-block))}@function --get-oriented-coord-num(--orient <number>: 0, --ocx <number>: 0, --ocy <number>: 0, --osx <number>: 0, --osy <number>: 0, --axis-to-return <number>: 0 ) returns <number>{--go-orient:mod(round(nearest,var(--orient,0),1),4);--go-axis:clamp(0,round(nearest,var(--axis-to-return,0),1),1);--go-axis-inline:calc(1 - var(--go-axis, 0));--go-axis-block:var(--go-axis,0);--go-swap-raw:mod(var(--go-orient,0),2);--go-swap:clamp(0,round(nearest,var(--go-swap-raw,0),1),1);--go-swap-inline:calc(1 - var(--go-swap, 0));--go-primary-direct:var(--ocx,0);--go-secondary-direct:var(--ocy,0);--go-primary-size:var(--osx,0);--go-secondary-size:var(--osy,0);--go-inline-direct:calc(var(--go-primary-direct) * var(--go-swap-inline) + var(--go-secondary-direct) * var(--go-swap));--go-block-direct:calc(var(--go-secondary-direct) * var(--go-swap-inline) + var(--go-primary-direct) * var(--go-swap));--go-inline-size:calc(var(--go-primary-size) * var(--go-swap-inline) + var(--go-secondary-size) * var(--go-swap));--go-block-size:calc(var(--go-secondary-size) * var(--go-swap-inline) + var(--go-primary-size) * var(--go-swap));--go-inline-inverted:calc(var(--go-inline-size, calc(var(--go-inline-direct) + var(--go-inline-direct))) - var(--go-inline-direct));--go-block-inverted:calc(var(--go-block-size, calc(var(--go-block-direct) + var(--go-block-direct))) - var(--go-block-direct));--go-rev-inline:clamp(0,calc(var(--go-orient) - 1),1);--go-rev-block:clamp(0,calc((1 - abs(calc(var(--go-orient) - 1.5))) * 2),1);--go-inline:calc(var(--go-inline-direct) * (1 - var(--go-rev-inline)) + var(--go-inline-inverted) * var(--go-rev-inline));--go-block:calc(var(--go-block-direct) * (1 - var(--go-rev-block)) + var(--go-block-inverted) * var(--go-rev-block));result:calc(var(--go-inline) * var(--go-axis-inline) + var(--go-block) * var(--go-axis-block))}@function --get-oriented-coordinate(--orient <number>: 0, --ocx <length-percentage>: 0px, --ocy <length-percentage>: 0px, --osx <length-percentage>: 0px, --osy <length-percentage>: 0px, --axis-to-return <number>: 0 ) returns <length-percentage>{--go-orient:mod(round(nearest,var(--orient,0),1),4);--go-axis:clamp(0,round(nearest,var(--axis-to-return,0),1),1);--go-axis-inline:calc(1 - var(--go-axis, 0));--go-axis-block:var(--go-axis,0);--go-swap-raw:mod(var(--go-orient,0),2);--go-swap:clamp(0,round(nearest,var(--go-swap-raw,0),1),1);--go-swap-inline:calc(1 - var(--go-swap, 0));--go-primary-direct:var(--ocx,0px);--go-secondary-direct:var(--ocy,0px);--go-primary-size:var(--osx,0px);--go-secondary-size:var(--osy,0px);--go-inline-direct:calc(var(--go-primary-direct) * var(--go-swap-inline) + var(--go-secondary-direct) * var(--go-swap));--go-block-direct:calc(var(--go-secondary-direct) * var(--go-swap-inline) + var(--go-primary-direct) * var(--go-swap));--go-inline-size:calc(var(--go-primary-size) * var(--go-swap-inline) + var(--go-secondary-size) * var(--go-swap));--go-block-size:calc(var(--go-secondary-size) * var(--go-swap-inline) + var(--go-primary-size) * var(--go-swap));--go-inline-inverted:calc(var(--go-inline-size, calc(var(--go-inline-direct) + var(--go-inline-direct))) - var(--go-inline-direct));--go-block-inverted:calc(var(--go-block-size, calc(var(--go-block-direct) + var(--go-block-direct))) - var(--go-block-direct));--go-rev-inline:clamp(0,calc(var(--go-orient) - 1),1);--go-rev-block:clamp(0,calc((1 - abs(calc(var(--go-orient) - 1.5))) * 2),1);--go-inline:calc(var(--go-inline-direct) * (1 - var(--go-rev-inline)) + var(--go-inline-inverted) * var(--go-rev-inline));--go-block:calc(var(--go-block-direct) * (1 - var(--go-rev-block)) + var(--go-block-inverted) * var(--go-rev-block));result:calc(var(--go-inline) * var(--go-axis-inline) + var(--go-block) * var(--go-axis-block))}@layer layout{.ui-orientbox{--in-orient-base:round(nearest,var(--orient,0),1);--in-rev-cond-x:clamp(0,calc(var(--in-orient-base, 0) - 1),1);--in-rev-cond-y:clamp(0,calc((1 - abs(calc(var(--in-orient-base, 0) - 1.5))) * 2),1);--in-swap-cond:css-rem(var(--orient,0),2);--in-rev-vx:calc(var(--in-rev-cond-x, 1) * -2 + 1);--in-rev-vy:calc(var(--in-rev-cond-y, 1) * -2 + 1);--os-size-x:--get-oriented-size(mod(4 - var(--orient,0),4),var(--cs-size-x,100cqi),var(--cs-size-y,100cqb),0);--os-size-y:--get-oriented-size(mod(4 - var(--orient,0),4),var(--cs-size-x,100cqb),var(--cs-size-y,100cqi),1);--os-self-size-x:--get-oriented-size(mod(4 - var(--orient,0),4),var(--cs-self-size-x,100%),var(--cs-self-size-y,100%),0);--os-self-size-y:--get-oriented-size(mod(4 - var(--orient,0),4),var(--cs-self-size-x,100%),var(--cs-self-size-y,100%),1);--cs-inset-x:--get-oriented-coordinate(var(--orient,0),var(--os-inset-x,0px),var(--os-inset-y,0px),var(--os-size-x,100cqi),var(--os-size-y,100cqb),0);--cs-inset-y:--get-oriented-coordinate(var(--orient,0),var(--os-inset-x,0px),var(--os-inset-y,0px),var(--os-size-x,100cqi),var(--os-size-y,100cqb),1);--cs-drag-x:--get-oriented-vector(var(--orient,0),var(--os-drag-x,0px),var(--os-drag-y,0px),0);--cs-drag-y:--get-oriented-vector(var(--orient,0),var(--os-drag-x,0px),var(--os-drag-y,0px),1);--cs-size-x:100cqi;--cs-size-y:100cqb;background-color:initial;block-size:stretch;border-radius:var(--radius-lg);contain:strict!important;container-type:size!important;direction:ltr!important;font-size:16px;grid-column:1/-1;grid-row:1/-1;inline-size:stretch;inset:0;max-block-size:min(100%,min(100cqb,100lvb),var(--lv-height,100lvb))!important;max-inline-size:min(100%,min(100cqi,100lvi),var(--lv-width,100lvi))!important;min-block-size:0;min-inline-size:0;place-self:start;pointer-events:none;position:relative;writing-mode:horizontal-tb!important;zoom:max(var(--zoom,1),.125);--zoom:max(var(--scaling,1),0.125);--zpx:calc(1px / max(var(--zoom, 1), 0.125));--ppx:calc(1px / max(var(--pixel-ratio, 1), 0.125))}.ui-orientbox :where(ui-frame,.u2-grid-item,ui-modal,[is=ui-orientbox],[is=ui-gridbox],[is=ui-orientbox]>:where(*),[is=ui-gridbox]>:where(*),.ui-gridlayout,.ui-gridlayout>:where(*)),.ui-orientbox>:where(*){--in-orient-base:round(nearest,var(--orient,0),1);--in-rev-cond-x:clamp(0,calc(var(--in-orient-base, 0) - 1),1);--in-rev-cond-y:clamp(0,calc((1 - abs(calc(var(--in-orient-base, 0) - 1.5))) * 2),1);--in-swap-cond:css-rem(var(--orient,0),2);--in-rev-vx:calc(var(--in-rev-cond-x, 1) * -2 + 1);--in-rev-vy:calc(var(--in-rev-cond-y, 1) * -2 + 1)}.ui-orientbox :where(ui-frame,.u2-grid-item,ui-modal,[is=ui-orientbox],[is=ui-gridbox],[is=ui-orientbox]>:where(*),[is=ui-gridbox]>:where(*),.ui-gridlayout,.ui-gridlayout>:where(*)),.ui-orientbox>:where(*){--os-size-x:--get-oriented-size(mod(4 - var(--orient,0),4),var(--cs-size-x,100cqi),var(--cs-size-y,100cqb),0);--os-size-y:--get-oriented-size(mod(4 - var(--orient,0),4),var(--cs-size-x,100cqb),var(--cs-size-y,100cqi),1);--os-self-size-x:--get-oriented-size(mod(4 - var(--orient,0),4),var(--cs-self-size-x,100%),var(--cs-self-size-y,100%),0);--os-self-size-y:--get-oriented-size(mod(4 - var(--orient,0),4),var(--cs-self-size-x,100%),var(--cs-self-size-y,100%),1)}.ui-orientbox :where(ui-frame,.u2-grid-item,ui-modal,[is=ui-orientbox],[is=ui-gridbox],[is=ui-orientbox]>:where(*),[is=ui-gridbox]>:where(*),.ui-gridlayout,.ui-gridlayout>:where(*)),.ui-orientbox>:where(*){--cs-inset-x:--get-oriented-coordinate(var(--orient,0),var(--os-inset-x,0px),var(--os-inset-y,0px),var(--os-size-x,100cqi),var(--os-size-y,100cqb),0);--cs-inset-y:--get-oriented-coordinate(var(--orient,0),var(--os-inset-x,0px),var(--os-inset-y,0px),var(--os-size-x,100cqi),var(--os-size-y,100cqb),1);--cs-drag-x:--get-oriented-vector(var(--orient,0),var(--os-drag-x,0px),var(--os-drag-y,0px),0);--cs-drag-y:--get-oriented-vector(var(--orient,0),var(--os-drag-x,0px),var(--os-drag-y,0px),1)}.ui-orientbox .center-self{inset:var(--cs-inset-y,0) auto auto var(--cs-inset-x,0);place-self:center;transform:translate3d(round(nearest,var(--cs-drag-x,0),1px/var(--pixel-ratio,1)),round(nearest,var(--cs-drag-y,0),1px/var(--pixel-ratio,1)),0) scale3d(var(--scale,1),var(--scale,1),var(--scale,1)) translate3d(round(nearest,calc(var(--translate-x, 0px) - 50%),1px/var(--pixel-ratio,1)),round(nearest,calc(var(--translate-y, 0px) - 50%),1px/var(--pixel-ratio,1)),0);transform-origin:0 0}.ui-orientbox .fixed{position:fixed!important}.ui-orientbox .absolute,.ui-orientbox .fixed{inset:var(--cs-inset-y,0) auto auto var(--cs-inset-x,0)}.ui-orientbox .absolute{position:absolute!important}.native-portrait-optimized{--in-swap-cond:0}@media (orientation:portrait){.native-portrait-optimized{--in-swap-cond:0}}@media (orientation:landscape){.native-portrait-optimized{--in-swap-cond:1}}}@property --item-size{syntax:\"<length-percentage>\";inherits:true;initial-value:100%}@layer layout{.ui-gridlayout{--os-layout-c:var(--layout-c,4);--os-layout-r:var(--layout-r,8);--cs-layout-c:--get-oriented-size-num(var(--orient,0),var(--os-layout-c,4),var(--os-layout-r,8),0);--cs-layout-r:--get-oriented-size-num(var(--orient,0),var(--os-layout-c,4),var(--os-layout-r,8),1);--c-gap:clamp(min(1rem,8cqmin),min(calc(8cqmin / min(var(--layout-c, 4), var(--layout-r, 8))),calc(6cqmax / max(var(--layout-c, 4), var(--layout-r, 8)))),min(4rem,16cqmin));--r-gap:clamp(min(1rem,8cqmin),min(calc(8cqmin / min(var(--layout-c, 4), var(--layout-r, 8))),calc(6cqmax / max(var(--layout-c, 4), var(--layout-r, 8)))),min(4rem,16cqmin));--sd-inherit-layout-c:var(--layout-c,4);--sd-inherit-layout-r:var(--layout-r,8);--sd-inherit-cs-layout-c:var(--cs-layout-c,var(--layout-c,4));--sd-inherit-cs-layout-r:var(--cs-layout-r,var(--layout-r,8));background-color:initial;block-size:stretch;box-sizing:border-box!important;contain:none!important;container-name:u2-grid;container-type:normal!important;direction:ltr;display:grid!important;gap:0!important;grid-column:1/-1;grid-row:1/-1;grid-template-columns:repeat(round(nearest,var(--cs-layout-c,4),1),minmax(0,1fr))!important;grid-template-rows:repeat(round(nearest,var(--cs-layout-r,8),1),minmax(0,1fr))!important;inline-size:stretch;max-block-size:min(100%,min(100cqb,100dvb))!important;max-inline-size:min(100%,min(100cqi,100dvi))!important;overflow:visible!important;padding:0!important;place-content:center!important;place-items:center!important;pointer-events:none!important;position:relative!important;text-align:center!important;zoom:1}.ui-gridlayout .ui-ws-item:not([data-layer=labels]) span:not(.ui-ws-item-caption){aspect-ratio:1/1;block-size:fit-content;display:inline;inline-size:fit-content;pointer-events:none}.ui-gridlayout .ui-ws-item{cursor:pointer;pointer-events:auto;user-select:none}.ui-gridlayout :is(.ui-ws-item:active,.ui-ws-item:has(:active)){cursor:grabbing;will-change:inset,translate,transform,opacity,z-index}.ui-gridlayout>:where(*){--orient:inherit}.ui-gridlayout>:where(*){--cs-sw-unit-x:calc(var(--cs-size-x, 100cqi) / var(--cs-layout-c, 1));--cs-sw-unit-y:calc(var(--cs-size-y, 100cqb) / var(--cs-layout-r, 1))}.ui-gridlayout>:where(*){--cs-transition-c:0px;--cs-transition-r:0px}.ui-gridlayout>:where(*)[data-dragging]{--cs-transition-c:calc((var(--rv-grid-c, 0) - var(--cs-grid-c, 0)) * var(--cs-sw-unit-x, 1px));--cs-transition-r:calc((var(--rv-grid-r, 0) - var(--cs-grid-r, 0)) * var(--cs-sw-unit-y, 1px))}.ui-gridlayout>:where(*){--p-cell-x:var(--cell-x);--p-cell-y:var(--cell-y);--f-col:clamp(1,var(--layout-c,4),16);--f-row:clamp(1,var(--layout-r,8),16);--grid-c:clamp(0,var(--cell-x),var(--f-col) - 1);--grid-r:clamp(0,var(--cell-y),var(--f-row) - 1);--p-grid-c:clamp(0,var(--p-cell-x),var(--f-col) - 1);--p-grid-r:clamp(0,var(--p-cell-y),var(--f-row) - 1);--fc-cell-x:clamp(0,var(--cs-grid-c,0),var(--f-col) - 1);--fc-cell-y:clamp(0,var(--cs-grid-r,0),var(--f-row) - 1);--fp-cell-x:clamp(0,var(--cs-p-grid-c,0),var(--f-col) - 1);--fp-cell-y:clamp(0,var(--cs-p-grid-r,0),var(--f-row) - 1);--dir-x:calc(var(--cs-grid-c, 0) - var(--cs-p-grid-c, 0));--dir-y:calc(var(--cs-grid-r, 0) - var(--cs-p-grid-r, 0))}.ui-gridlayout>:where(*){--rv-grid-c:var(--cs-grid-c,1);--rv-grid-r:var(--cs-grid-r,1)}.ui-gridlayout>:where(*)[data-dragging]{--rv-grid-c:var(--cs-p-grid-c,1);--rv-grid-r:var(--cs-p-grid-r,1)}.ui-gridlayout>:where(*){--os-grid-c:var(--grid-c,1);--os-grid-r:var(--grid-r,1);--cs-grid-c:--get-oriented-coord-num(var(--orient,0),var(--os-grid-c,1),var(--os-grid-r,1),calc(var(--f-col, 1) - 1),calc(var(--f-row, 1) - 1),0);--cs-grid-r:--get-oriented-coord-num(var(--orient,0),var(--os-grid-c,1),var(--os-grid-r,1),calc(var(--f-col, 1) - 1),calc(var(--f-row, 1) - 1),1)}.ui-gridlayout>:where(*){--os-p-grid-c:var(--p-cell-x,0);--os-p-grid-r:var(--p-cell-y,0);--cs-p-grid-c:--get-oriented-coord-num(var(--orient,0),var(--os-p-grid-c,0),var(--os-p-grid-r,0),calc(var(--f-col, 1) - 1),calc(var(--f-row, 1) - 1),0);--cs-p-grid-r:--get-oriented-coord-num(var(--orient,0),var(--os-p-grid-c,0),var(--os-p-grid-r,0),calc(var(--f-col, 1) - 1),calc(var(--f-row, 1) - 1),1)}.ui-gridlayout>:where(*){--ox-c-unit:calc(var(--os-size-x, 100cqi) / var(--os-layout-c, 1));--ox-r-unit:calc(var(--os-size-y, 100cqb) / var(--os-layout-r, 1));--os-inset-x:calc((var(--grid-c, 1) + 0.5) * var(--ox-c-unit, 1px));--os-inset-y:calc((var(--grid-r, 1) + 0.5) * var(--ox-r-unit, 1px))}.ui-gridlayout>:where(*){--f-col:clamp(1,var(--sd-inherit-layout-c,var(--layout-c,4)),16);--f-row:clamp(1,var(--sd-inherit-layout-r,var(--layout-r,8)),16)}.ui-gridlayout>:where(*){--item-size:clamp(4rem,calc(100cqmax / min(var(--sd-inherit-cs-layout-c, var(--cs-layout-c, 4)), var(--sd-inherit-cs-layout-r, var(--cs-layout-r, 8)))),5rem)}.ui-gridlayout>:where(*) :where(*){--drag-x:0;--drag-y:0}.ui-gridlayout>:where(*){--drag-x:0;--cs-drag-x:calc(var(--drag-x, 0) * 1px);--drag-y:0;--cs-drag-y:calc(var(--drag-y, 0) * 1px)}.ui-gridlayout>:is(:where(*) :active,:where(*):active,:where(*):has(:active)){will-change:transform}.ui-gridlayout>:where(*){block-size:var(--item-size,stretch);cursor:pointer;grid-column:clamp(1,1 + round(nearest,var(--cs-grid-c,0),1),var(--sd-inherit-cs-layout-c,var(--cs-layout-c,4)))!important;grid-row:clamp(1,1 + round(nearest,var(--cs-grid-r,0),1),var(--sd-inherit-cs-layout-r,var(--cs-layout-r,8)))!important;inline-size:var(--item-size,stretch);inset:auto!important;max-block-size:var(--item-size,stretch);max-inline-size:var(--item-size,stretch);min-block-size:fit-content;min-inline-size:fit-content;place-self:center!important;pointer-events:none;position:relative!important;touch-action:none;transform:translate3d(round(nearest,var(--cs-drag-x,0) + var(--cs-transition-c,0),1px/var(--pixel-ratio,1)),round(nearest,var(--cs-drag-y,0) + var(--cs-transition-r,0),1px/var(--pixel-ratio,1)),0) scale3d(var(--scale,1),var(--scale,1),var(--scale,1)) translate3d(round(nearest,var(--translate-x,0),1px/var(--pixel-ratio,1)),round(nearest,var(--translate-y,0),1px/var(--pixel-ratio,1)),0)!important;transform-origin:50% 50%!important;translate:0 0 0!important;user-select:none;visibility:visible;z-index:1;zoom:1;-webkit-user-drag:none;-moz-user-drag:none;border:0 transparent;contain:none;isolation:isolate;outline:0 none transparent;overflow:visible}.ui-gridlayout>:where(*),.ui-gridlayout>:where(*) span,.ui-gridlayout>:where(*)>*{--drag-distance:clamp(0,hypot(var(--dir-x,0),var(--dir-y,0)),6);--drag-duration:clamp(96ms,calc(var(--drag-distance, 0) * 110ms + 70ms),360ms);background-image:none;border:0 transparent;box-shadow:none;filter:none;outline:0 none transparent;pointer-events:none;touch-action:none;transition-behavior:allow-discrete;transition-delay:0s;transition-duration:var(--drag-duration);transition-property:opacity,background-color,color;transition-timing-function:cubic-bezier(.22,.8,.3,1)}.ui-gridlayout>:where(*){pointer-events:auto}.ui-gridlayout>:where(*) label,.ui-gridlayout>:where(*) span,.ui-gridlayout>:where(*) ui-icon,.ui-gridlayout>:where(*).label,.ui-gridlayout>:where(*).span,.ui-gridlayout>:where(*).ui-icon{pointer-events:none}.ui-gridlayout>:where(*) ui-icon{pointer-events:none}@media (prefers-reduced-motion:reduce){.ui-gridlayout>:where(*){transition-duration:0s;transition-timing-function:linear}}.ui-gridlayout>:where(*)>:where(*){block-size:stretch;grid-column:1/-1;grid-row:1/-1;inline-size:stretch;max-block-size:stretch;max-inline-size:stretch;min-block-size:1px;min-inline-size:1px}.ui-gridlayout.sd-grid--labels,.ui-gridlayout[data-layer=labels]{isolation:isolate;mix-blend-mode:normal;pointer-events:none!important}:is(.ui-gridlayout.sd-grid--labels,.ui-gridlayout[data-layer=labels])>:where(*){pointer-events:none}:is(.ui-gridlayout.sd-grid--labels,.ui-gridlayout[data-layer=labels])>:where(.ui-ws-item-label){align-items:center;block-size:stretch;color:color-mix(in oklch,var(--on-surface-color) 78%,transparent 22%);display:flex;flex-direction:column;font-size:clamp(.65rem,1.35cqmin,1rem);font-weight:500;gap:clamp(.1rem,.35cqmin,.35rem);inline-size:100%;justify-content:flex-start;letter-spacing:.015em;padding-block-start:clamp(.25rem,.65cqmin,.65rem);text-align:center;text-shadow:0 1px 2px color-mix(in oklch,var(--surface-color) 35%,transparent),0 0 .35rem color-mix(in oklch,var(--surface-color) 15%,transparent);text-wrap:balance;translate:0 calc(clamp(.25rem, .65cqmin, .65rem) + var(--cs-sw-unit-y, 0px))}:is(.ui-gridlayout.sd-grid--labels,.ui-gridlayout[data-layer=labels])>:where(.ui-ws-item-label) span{background-image:none;contain:layout paint;content-visibility:auto;max-inline-size:min(8ch,100%);opacity:.9;pointer-events:none;user-select:none}.ui-gridlayout slot{contain:none!important;display:contents!important;isolation:auto!important;overflow:visible!important}.ui-gridlayout ::slotted(*){direction:inherit;writing-mode:inherit}}@layer components{.ui-launcher-grid,.ui-speed-dial-grid{--os-layout-c:var(--layout-c,4);--os-layout-r:var(--layout-r,8);--cs-layout-c:--get-oriented-size-num(var(--orient,0),var(--os-layout-c,4),var(--os-layout-r,8),0);--cs-layout-r:--get-oriented-size-num(var(--orient,0),var(--os-layout-c,4),var(--os-layout-r,8),1);block-size:stretch;box-sizing:border-box;container-type:size;display:grid;gap:0;inline-size:stretch;min-block-size:0;min-inline-size:0;place-content:center;place-items:center;pointer-events:none;position:relative;--layout-c:4;--layout-r:8;--sd-inherit-layout-c:var(--layout-c,4);--sd-inherit-layout-r:var(--layout-r,8);--sd-inherit-cs-layout-c:var(--cs-layout-c,var(--layout-c,4));--sd-inherit-cs-layout-r:var(--cs-layout-r,var(--layout-r,8));grid-template-columns:repeat(var(--cs-layout-c,4),minmax(0,1fr));grid-template-rows:repeat(var(--cs-layout-r,8),minmax(0,1fr))}:is(.ui-launcher-grid,.ui-speed-dial-grid)>:where(.ui-ws-item,[data-launcher-item]){--orient:inherit}:is(.ui-launcher-grid,.ui-speed-dial-grid)>:where(.ui-ws-item,[data-launcher-item]){--cs-sw-unit-x:calc(var(--cs-size-x, 100cqi) / var(--cs-layout-c, 1));--cs-sw-unit-y:calc(var(--cs-size-y, 100cqb) / var(--cs-layout-r, 1))}:is(.ui-launcher-grid,.ui-speed-dial-grid)>:where(.ui-ws-item,[data-launcher-item]){--cs-transition-c:0px;--cs-transition-r:0px}:is(.ui-launcher-grid,.ui-speed-dial-grid)>:where(.ui-ws-item,[data-launcher-item])[data-dragging]{--cs-transition-c:calc((var(--rv-grid-c, 0) - var(--cs-grid-c, 0)) * var(--cs-sw-unit-x, 1px));--cs-transition-r:calc((var(--rv-grid-r, 0) - var(--cs-grid-r, 0)) * var(--cs-sw-unit-y, 1px))}:is(.ui-launcher-grid,.ui-speed-dial-grid)>:where(.ui-ws-item,[data-launcher-item]){--p-cell-x:var(--cell-x);--p-cell-y:var(--cell-y);--f-col:clamp(1,var(--layout-c,4),16);--f-row:clamp(1,var(--layout-r,8),16);--grid-c:clamp(0,var(--cell-x),var(--f-col) - 1);--grid-r:clamp(0,var(--cell-y),var(--f-row) - 1);--p-grid-c:clamp(0,var(--p-cell-x),var(--f-col) - 1);--p-grid-r:clamp(0,var(--p-cell-y),var(--f-row) - 1);--fc-cell-x:clamp(0,var(--cs-grid-c,0),var(--f-col) - 1);--fc-cell-y:clamp(0,var(--cs-grid-r,0),var(--f-row) - 1);--fp-cell-x:clamp(0,var(--cs-p-grid-c,0),var(--f-col) - 1);--fp-cell-y:clamp(0,var(--cs-p-grid-r,0),var(--f-row) - 1);--dir-x:calc(var(--cs-grid-c, 0) - var(--cs-p-grid-c, 0));--dir-y:calc(var(--cs-grid-r, 0) - var(--cs-p-grid-r, 0))}:is(.ui-launcher-grid,.ui-speed-dial-grid)>:where(.ui-ws-item,[data-launcher-item]){--rv-grid-c:var(--cs-grid-c,1);--rv-grid-r:var(--cs-grid-r,1)}:is(.ui-launcher-grid,.ui-speed-dial-grid)>:where(.ui-ws-item,[data-launcher-item])[data-dragging]{--rv-grid-c:var(--cs-p-grid-c,1);--rv-grid-r:var(--cs-p-grid-r,1)}:is(.ui-launcher-grid,.ui-speed-dial-grid)>:where(.ui-ws-item,[data-launcher-item]){--os-grid-c:var(--grid-c,1);--os-grid-r:var(--grid-r,1);--cs-grid-c:--get-oriented-coord-num(var(--orient,0),var(--os-grid-c,1),var(--os-grid-r,1),calc(var(--f-col, 1) - 1),calc(var(--f-row, 1) - 1),0);--cs-grid-r:--get-oriented-coord-num(var(--orient,0),var(--os-grid-c,1),var(--os-grid-r,1),calc(var(--f-col, 1) - 1),calc(var(--f-row, 1) - 1),1)}:is(.ui-launcher-grid,.ui-speed-dial-grid)>:where(.ui-ws-item,[data-launcher-item]){--os-p-grid-c:var(--p-cell-x,0);--os-p-grid-r:var(--p-cell-y,0);--cs-p-grid-c:--get-oriented-coord-num(var(--orient,0),var(--os-p-grid-c,0),var(--os-p-grid-r,0),calc(var(--f-col, 1) - 1),calc(var(--f-row, 1) - 1),0);--cs-p-grid-r:--get-oriented-coord-num(var(--orient,0),var(--os-p-grid-c,0),var(--os-p-grid-r,0),calc(var(--f-col, 1) - 1),calc(var(--f-row, 1) - 1),1)}:is(.ui-launcher-grid,.ui-speed-dial-grid)>:where(.ui-ws-item,[data-launcher-item]){--ox-c-unit:calc(var(--os-size-x, 100cqi) / var(--os-layout-c, 1));--ox-r-unit:calc(var(--os-size-y, 100cqb) / var(--os-layout-r, 1));--os-inset-x:calc((var(--grid-c, 1) + 0.5) * var(--ox-c-unit, 1px));--os-inset-y:calc((var(--grid-r, 1) + 0.5) * var(--ox-r-unit, 1px))}:is(.ui-launcher-grid,.ui-speed-dial-grid)>:where(.ui-ws-item,[data-launcher-item]){--f-col:clamp(1,var(--sd-inherit-layout-c,var(--layout-c,4)),16);--f-row:clamp(1,var(--sd-inherit-layout-r,var(--layout-r,8)),16);pointer-events:auto}}@layer base{[data-hidden]:not([data-hidden=false]):not([data-opacity-animation]),[data-hidden]:not([data-hidden=false]):not([data-opacity-animation]) *{opacity:0;visibility:collapse}:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))),:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))) *,:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))) ::slotted(*){opacity:0;visibility:collapse}:host([data-hidden]:not([data-hidden=false])),:host([data-hidden]:not([data-hidden=false])) *,:host([data-hidden]:not([data-hidden=false])) ::slotted(*){user-select:none!important}[data-hidden]:not([data-hidden=false]),[data-hidden]:not([data-hidden=false]) *{user-select:none!important}[data-hidden]:not([data-hidden=false]):not([data-opacity-animation]),[data-hidden]:not([data-hidden=false]):not([data-opacity-animation]) *{content-visibility:auto!important;display:none!important;pointer-events:none!important;touch-action:none!important}:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))),:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))) *,:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))) ::slotted(*){content-visibility:auto!important;display:none!important;pointer-events:none!important;touch-action:none!important}:host([data-hidden]:not([data-hidden=false])),:host([data-hidden]:not([data-hidden=false])) *,:host([data-hidden]:not([data-hidden=false])) ::slotted(*){pointer-events:none!important;touch-action:none!important}[data-hidden]:not([data-hidden=false]),[data-hidden]:not([data-hidden=false]) *{pointer-events:none!important;touch-action:none!important}[data-hidden]:not([data-hidden=false]):not([data-opacity-animation]),[data-hidden]:not([data-hidden=false]):not([data-opacity-animation]) *{display:none!important;opacity:0;pointer-events:none!important;touch-action:none!important;visibility:collapse}}@layer base{:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))),:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))) *,:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))) ::slotted(*){display:none!important;opacity:0;pointer-events:none!important;touch-action:none!important;visibility:collapse}:host([data-hidden]:not([data-hidden=false])),:host([data-hidden]:not([data-hidden=false])) *,:host([data-hidden]:not([data-hidden=false])) ::slotted(*){pointer-events:none!important;touch-action:none!important;user-select:none!important}[data-hidden]:not([data-hidden=false]),[data-hidden]:not([data-hidden=false]) *{pointer-events:none!important;touch-action:none!important;user-select:none!important}}@property --color-primary{syntax:\"<color>\";inherits:true;initial-value:#5a9ec8}@property --base-color{syntax:\"<color>\";inherits:true;initial-value:#5a9ec8}@property --wallpaper-underlying-color{syntax:\"<color>\";inherits:true;initial-value:#16161a}@property --wallpaper-contrast-color{syntax:\"<color>\";inherits:true;initial-value:#f7f7f8}@property --color-secondary{syntax:\"<color>\";inherits:true;initial-value:#6b8cff}@property --color-tertiary{syntax:\"<color>\";inherits:true;initial-value:#8aa0ff}@property --color-error{syntax:\"<color>\";inherits:true;initial-value:#ef4444}@property --color-success{syntax:\"<color>\";inherits:true;initial-value:#4caf50}@property --color-warning{syntax:\"<color>\";inherits:true;initial-value:#ff9800}@property --color-info{syntax:\"<color>\";inherits:true;initial-value:#2196f3}@function --u2-color-mod(--base-color <color>, --index <number> : 550) returns <color>{--i:clamp(0,var(--index),1000);--pivot:550;--white-distance:clamp(0,calc((var(--pivot) - var(--i)) / var(--pivot)),1);--black-distance:clamp(0,calc((var(--i) - var(--pivot)) / (1000 - var(--pivot))),1);--to-white:pow(var(--white-distance),1.15);--to-black:pow(var(--black-distance),1.08);--center-left:clamp(0,calc(var(--i) / var(--pivot)),1);--center-right:clamp(0,calc((1000 - var(--i)) / (1000 - var(--pivot))),1);--chroma-shape:sqrt(min(var(--center-left),var(--center-right)));--chroma-scale:calc(0.08 + 0.92 * var(--chroma-shape));result:oklch(from var(--base-color) calc(l + (.985 - l) * var(--to-white) + (.16 - l) * var(--to-black)) calc(c * var(--chroma-scale)) h)}@layer tokens, base, layout, components, utilities, theme, overrides, print;@layer tokens{:host,:root,:scope{--color-primary:#5a9ec8;color-scheme:light dark;--base-color:var(--color-primary);--base-color-neutralized:color-mix(in oklab,var(--base-color) 60%,gray);--wallpaper-underlying-color:--u2-color-mod(var(--base-color-neutralized),940);--wallpaper-contrast-color:--u2-color-mod(var(--base-color-neutralized),70);--wf-md-primary:var(--color-primary);--wf-md-seed:var(--base-color);--color-on-primary:--u2-color-mod(var(--base-color),40);--color-secondary:--u2-color-mod(var(--base-color),420);--color-on-secondary:--u2-color-mod(var(--base-color),40);--color-tertiary:--u2-color-mod(var(--base-color),400);--color-on-tertiary:--u2-color-mod(var(--base-color),40);--color-error:#ef4444;--color-on-error:--u2-color-mod(var(--color-error),40);--color-success:#4caf50;--color-warning:#ff9800;--color-info:#2196f3;--color-background:--u2-color-mod(var(--base-color),60);--color-on-background:--u2-color-mod(var(--base-color),900);--color-surface:--u2-color-mod(var(--base-color),60);--color-on-surface:--u2-color-mod(var(--base-color),900);--color-surface-variant:--u2-color-mod(var(--base-color),160);--color-on-surface-variant:--u2-color-mod(var(--base-color),700);--color-outline:--u2-color-mod(var(--base-color),300);--color-outline-variant:--u2-color-mod(var(--base-color),400);--color-surface-container-lowest:--u2-color-mod(var(--base-color),40);--color-surface-container-low:--u2-color-mod(var(--base-color),30);--color-surface-container:--u2-color-mod(var(--base-color),20);--color-surface-container-high:--u2-color-mod(var(--base-color),5);--color-surface-container-highest:--u2-color-mod(var(--base-color),2);--color-primary-container:--u2-color-mod(var(--base-color),160);--color-on-primary-container:--u2-color-mod(var(--base-color),900);--color-border:color-mix(in oklab,var(--color-outline-variant) 75%,transparent);--color-bg:var(--color-background);--color-text:var(--color-on-background);--color-fg:var(--color-on-surface);--on-surface-color:var(--color-on-surface);--surface-color:var(--color-surface);--fl-surface:var(--color-surface);--fl-on-surface:var(--color-on-surface);--fl-primary:var(--color-primary);--fl-on-primary:var(--color-on-primary);--fl-secondary:var(--color-secondary);--fl-on-secondary:var(--color-on-secondary);--fl-shadow-xl:var(--shadow-xl);--on-surface-variant:var(--color-on-surface-variant);--wf-md-surface:var(--color-surface);--wf-md-on-surface:var(--color-on-surface);--wf-md-on-surface-variant:var(--color-on-surface-variant);--wf-md-surf-container:var(--color-surface-container);--wf-md-surf-container-low:var(--color-surface-container-low);--wf-md-surf-container-high:var(--color-surface-container-high);--wf-md-outline-variant:var(--color-outline-variant);--md3-primary-container:var(--color-primary-container);--md-primary-container:var(--color-primary-container);--space-2xs:0.125rem;--space-xs:0.25rem;--space-sm:0.5rem;--space-md:0.75rem;--space-lg:1rem;--space-xl:1.25rem;--space-2xl:1.5rem;--padding-xs:var(--space-xs);--padding-sm:var(--space-sm);--padding-md:var(--space-md);--padding-lg:var(--space-lg);--padding-xl:var(--space-xl);--padding-2xl:var(--space-2xl);--padding-3xl:2rem;--padding-4xl:2.5rem;--padding-5xl:3rem;--padding-6xl:4rem;--padding-7xl:5rem;--padding-8xl:6rem;--padding-9xl:8rem;--gap-xs:var(--space-xs);--gap-sm:var(--space-sm);--gap-md:var(--space-md);--gap-lg:var(--space-lg);--gap-xl:var(--space-xl);--gap-2xl:var(--space-2xl);--fl-ui-gap:var(--space-md);--radius-none:0;--radius-xs:0.25rem;--radius-sm:0.25rem;--radius-default:0.25rem;--radius-md:0.5rem;--radius-lg:0.75rem;--radius-xl:1rem;--radius-2xl:1.75rem;--radius-3xl:2rem;--radius-full:9999px;--fl-ui-radius:var(--radius-md);--border-radius:var(--radius-md);--shape-extra-small:var(--radius-xs);--shape-small:var(--radius-md);--shape-medium:var(--radius-lg);--shape-large:var(--radius-xl);--shape-extra-large:var(--radius-2xl);--shape-full:var(--radius-full);--elev-0:none;--elev-1:0 1px 1px rgba(0,0,0,0.06),0 1px 3px rgba(0,0,0,0.1);--elev-2:0 2px 6px rgba(0,0,0,0.12),0 8px 24px rgba(0,0,0,0.08);--elev-3:0 6px 16px rgba(0,0,0,0.14),0 18px 48px rgba(0,0,0,0.1);--shadow-xs:0 1px 2px rgba(0,0,0,0.05);--shadow-sm:0 1px 3px rgba(0,0,0,0.1);--shadow-md:0 4px 6px rgba(0,0,0,0.1);--shadow-lg:0 10px 15px rgba(0,0,0,0.1);--shadow-xl:0 20px 25px rgba(0,0,0,0.1);--shadow-2xl:0 25px 50px rgba(0,0,0,0.1);--shadow-inset:inset 0 2px 4px rgba(0,0,0,0.06);--shadow-inset-strong:inset 0 4px 8px rgba(0,0,0,0.12);--shadow-none:0 0 #0000;--text-xs:0.8rem;--text-sm:0.9rem;--text-base:1rem;--text-lg:1.1rem;--text-xl:1.25rem;--text-2xl:1.6rem;--text-3xl:2rem;--font-xs:var(--text-xs);--font-sm:var(--text-sm);--font-base:var(--text-base);--font-md:var(--text-base);--font-lg:var(--text-lg);--font-xl:var(--text-xl);--font-2xl:var(--text-2xl);--ui-icon-size:1.25rem;--ui-icon-padding:0px;--ui-icon-tile-padding:0.45rem;--ui-window-icon-size:0.95rem;--ui-explorer-icon-size:1.5rem;--ui-explorer-icon-track:2rem;--ui-explorer-action-icon-size:1.15rem;--ui-explorer-row-height:3.25rem;--icon-size-sm:var(--ui-icon-size);--icon-size-md:var(--ui-icon-size);--icon-size-lg:var(--ui-explorer-icon-size);--font-size-xs:0.75rem;--font-size-sm:0.875rem;--font-size-base:1rem;--font-size-lg:1.125rem;--font-size-xl:1.25rem;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--font-family:\"Roboto\",ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif;--font-family-base:var(--font-family);--font-family-mono:\"Roboto Mono\",\"SF Mono\",Monaco,Inconsolata,\"Fira Code\",monospace;--font-sans:var(--font-family);--font-mono:var(--font-family-mono);--leading-tight:1.2;--leading-normal:1.5;--leading-relaxed:1.8;--line-height:var(--leading-normal);--ease-emphasized:cubic-bezier(0.2,0,0,1);--ease-expressive:cubic-bezier(0.34,1.25,0.64,1);--duration-fast:140ms;--duration-normal:220ms;--duration-slow:360ms;--transition-fast:var(--duration-fast) var(--ease-emphasized);--transition-normal:var(--duration-normal) var(--ease-emphasized);--transition-slow:var(--duration-slow) var(--ease-emphasized);--motion-fast:var(--transition-fast);--motion-normal:var(--transition-normal);--motion-slow:var(--transition-slow);--ease-out:cubic-bezier(0,0,0.2,1);--ease-in:cubic-bezier(0.4,0,1,1);--ease-in-out:cubic-bezier(0.4,0,0.2,1);--focus-ring:0 0 0 3px color-mix(in oklab,var(--color-primary) 35%,transparent);--z-base:0;--z-dropdown:100;--z-sticky:200;--z-fixed:300;--z-modal-backdrop:400;--z-modal:500;--z-popover:600;--z-tooltip:700;--z-toast:800;--z-max:9999;--view-bg:var(--color-container);--view-fg:var(--color-on-surface);--view-border:var(--color-outline-variant);--view-input-bg:light-dark(--u2-color-mod(var(--base-color,var(--color-primary)),40),var(--color-surface-container-high));--view-files-bg:var(--color-surface-container-low);--view-file-bg:var(--color-surface-container-lowest,var(--color-surface-container-low));--view-results-bg:var(--color-surface-container-low);--view-result-bg:var(--color-surface-container-lowest,var(--color-surface-container-low));--color-surface-elevated:var(--color-surface-container);--color-surface-hover:var(--color-surface-container-low);--color-surface-active:var(--color-surface-container-high);--color-on-surface-muted:var(--color-on-surface-variant);--color-background-alt:var(--color-surface-variant);--color-primary-hover:light-dark(--u2-color-mod(var(--base-color,var(--color-primary)),620),--u2-color-mod(var(--base-color,var(--color-primary)),480));--color-primary-active:light-dark(--u2-color-mod(var(--base-color,var(--color-primary)),700),--u2-color-mod(var(--base-color,var(--color-primary)),400));--color-accent:var(--color-secondary);--color-accent-hover:light-dark(--u2-color-mod(var(--base-color,var(--color-primary)),500),--u2-color-mod(var(--base-color,var(--color-primary)),600));--color-on-accent:var(--color-on-secondary);--color-border-hover:var(--color-outline-variant);--color-border-strong:var(--color-outline);--color-border-focus:var(--color-primary);--color-text:var(--color-on-surface);--color-text-secondary:var(--color-on-surface-variant);--color-text-muted:color-mix(in oklab,var(--color-on-surface) 50%,var(--color-surface));--color-text-disabled:color-mix(in oklab,var(--color-on-surface) 38%,var(--color-surface));--color-text-inverse:var(--color-on-primary);--color-link:var(--color-primary);--color-link-hover:var(--color-primary-hover);--color-success-light:--u2-color-mod(var(--color-success),280);--color-success-dark:--u2-color-mod(var(--color-success),720);--color-warning-light:--u2-color-mod(var(--color-warning),280);--color-warning-dark:--u2-color-mod(var(--color-warning),720);--color-error-light:--u2-color-mod(var(--color-error),280);--color-error-dark:--u2-color-mod(var(--color-error),720);--color-info-light:--u2-color-mod(var(--color-info),280);--color-info-dark:--u2-color-mod(var(--color-info),720);--color-bg:var(--color-surface,var(--color-surface));--color-bg-alt:var(--color-surface-variant,var(--color-surface-variant));--color-fg:var(--color-on-surface,var(--color-on-surface));--color-fg-muted:var(--color-on-surface-variant,var(--color-on-surface-variant));--touch-min:3rem;--btn-height-sm:2rem;--btn-height-md:var(--touch-min);--btn-height-lg:3.5rem;--btn-padding-x-sm:var(--space-md);--btn-padding-x-md:var(--space-lg);--btn-padding-x-lg:1.5rem;--btn-radius:var(--radius-md);--btn-font-weight:var(--font-weight-medium);--input-height-sm:2rem;--input-height-md:var(--touch-min);--input-height-lg:3.5rem;--state-opacity-hover:0.08;--state-opacity-press:0.12;--state-opacity-focus:0.12;--state-opacity-disabled:0.38;--state-opacity-drag:0.16;--input-padding-x:var(--space-md);--input-radius:var(--radius-md);--input-border-color:var(--color-border,var(--color-border));--input-focus-ring-color:var(--color-primary);--input-focus-ring-width:2px;--card-padding:var(--space-lg);--card-radius:var(--radius-lg);--card-shadow:var(--shadow-sm);--card-border-color:var(--color-border,var(--color-border));--modal-backdrop-bg:light-dark(rgb(0 0 0/0.5),rgb(0 0 0/0.7));--modal-bg:var(--color-surface,var(--color-surface));--modal-radius:var(--radius-xl);--modal-shadow:var(--shadow-xl);--modal-padding:1.5rem;--toast-font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,sans-serif);--toast-font-size:var(--font-size-base,1rem);--toast-font-weight:var(--font-weight-medium,500);--toast-letter-spacing:0.01em;--toast-line-height:1.4;--toast-white-space:nowrap;--toast-pointer-events:auto;--toast-user-select:none;--toast-cursor:default;--toast-opacity:0;--toast-transform:translateY(100%) scale(0.9);--toast-transition:opacity 160ms ease-out,transform 160ms cubic-bezier(0.16,1,0.3,1),background-color 100ms ease;--toast-text:var(--color-on-surface,var(--color-on-surface,light-dark(#ffffff,#000000)));--toast-bg:color-mix(in oklab,var(--color-surface-elevated,var(--color-surface-container-high,var(--color-surface,light-dark(#fafbfc,#1e293b)))) 90%,var(--color-on-surface,var(--color-on-surface,light-dark(#000000,#ffffff))));--toast-radius:var(--radius-lg);--toast-shadow:var(--shadow-lg);--toast-padding:var(--space-lg);--sidebar-width:280px;--sidebar-collapsed-width:64px;--nav-height:56px;--nav-height-compact:48px;--status-height:24px;--status-bg:var(--color-surface-elevated,var(--color-surface-container-high));--status-font-size:var(--text-xs);--shell-bg:var(--sv-surface-2,var(--color-surface));--shell-fg:var(--sv-on-surface,var(--color-on-surface));--shell-nav-bg:var(--sv-surface-2,var(--color-surface-container-high));--shell-nav-fg:var(--sv-on-surface,var(--color-on-surface));--shell-nav-border:var(--sv-outline-variant,var(--color-outline-variant));--shell-btn-hover:var(--sv-surface-2,var(--color-surface-container));--shell-btn-active-bg:color-mix(in oklab,var(--color-primary) 18%,var(--sv-surface-2,var(--color-surface)));--shell-btn-active-fg:var(--sv-on-surface,var(--color-on-surface));--shell-status-bg:var(--sv-surface-1,var(--color-surface-container-low));--shell-status-fg:var(--sv-on-surface,var(--color-on-surface));--faint-nav-bg:var(--color-surface-container-high);--faint-nav-border:var(--color-outline-variant);--faint-sidebar-bg:var(--color-surface-container-high);--env-status-fg:light-dark(#1c1c1e,#f5f5f7);--env-status-fg-muted:color-mix(in oklab,var(--env-status-fg) 78%,transparent);--env-launcher-fg:var(--wallpaper-contrast-color);--env-launcher-fg-shadow:color-mix(in oklab,var(--wallpaper-underlying-color) 88%,transparent);--env-launcher-fg-glow:color-mix(in oklab,var(--wallpaper-underlying-color) 48%,transparent);--error-color:var(--color-error,#f87171);--sv-bg:var(--sv-surface-2,var(--color-surface-container-low,light-dark(#eef1f6,#0f1318)));--sv-fg:var(--sv-on-surface,var(--color-on-surface,light-dark(#12151a,#e8edf2)));--sv-muted:var(--sv-on-surface-variant,var(--color-on-surface-variant,light-dark(#5c6570,#a8b0bc)));--sv-outline:var(--sv-outline-variant,var(--color-outline-variant,light-dark(#c5cdd8,#3d4755)));--sv-surface-1:var(--color-surface-container-low,light-dark(#ffffff,#171c24));--sv-surface-2:var(--color-surface-container,light-dark(#f4f6fa,#1c232d));--sv-primary:var(--base-color,var(--color-primary,#5a9ec8));--sv-danger:var(--color-error,#d32f2f);--vh-bg:var(--color-surface,light-dark(#eef1f6,#0f1318));--vh-fg:var(--color-on-surface,light-dark(#12151a,#e8edf2));--vh-muted:var(--color-on-surface-variant,light-dark(#5c6570,#a8b0bc));--vh-primary:var(--color-primary,#007acc);--vh-danger:var(--color-error,#d32f2f);--vh-on-primary:var(--color-on-primary,#ffffff);--vh-item-bg:var(--color-surface-container-low,light-dark(#e0e5ee,#0a0d12));--view-fg-muted:color-mix(in oklab,var(--color-on-surface,#ccc) 72%,transparent);--view-hover-bg:color-mix(in oklab,var(--color-primary,#3794ff) 12%,transparent);--view-selected-bg:color-mix(in oklab,var(--color-primary,#3794ff) 18%,transparent);--view-selected-border:var(--color-primary,#3794ff)}@supports (color:color-mix(in lch,red,blue)){:host,:root,:scope{--view-border:color-mix(in oklab,var(--color-outline-variant,#888) 45%,transparent)}}@media (prefers-color-scheme:dark){:host:not([data-theme=light]):not([data-theme=dark]),:root:not([data-theme=light]):not([data-theme=dark]){color-scheme:dark;--base-color:var(--color-primary);--base-color-neutralized:color-mix(in oklab,var(--base-color) 60%,gray);--wallpaper-underlying-color:--u2-color-mod(var(--base-color-neutralized),940);--wallpaper-contrast-color:--u2-color-mod(var(--base-color-neutralized),70);--wf-md-primary:var(--color-primary);--wf-md-seed:var(--base-color);--color-on-primary:--u2-color-mod(var(--base-color),920);--color-secondary:--u2-color-mod(var(--base-color),680);--color-on-secondary:--u2-color-mod(var(--base-color),920);--color-tertiary:--u2-color-mod(var(--base-color),700);--color-on-tertiary:--u2-color-mod(var(--base-color),920);--color-error:#f87171;--color-on-error:--u2-color-mod(var(--color-error),920);--color-success:#66bb6a;--color-warning:#ffa726;--color-info:#42a5f5;--color-background:--u2-color-mod(var(--base-color),940);--color-on-background:--u2-color-mod(var(--base-color),100);--color-surface:--u2-color-mod(var(--base-color),940);--color-on-surface:--u2-color-mod(var(--base-color),100);--color-surface-variant:--u2-color-mod(var(--base-color),840);--color-on-surface-variant:--u2-color-mod(var(--base-color),280);--color-outline:--u2-color-mod(var(--base-color),720);--color-outline-variant:--u2-color-mod(var(--base-color),640);--color-surface-container-lowest:--u2-color-mod(var(--base-color),920);--color-surface-container-low:--u2-color-mod(var(--base-color),940);--color-surface-container:--u2-color-mod(var(--base-color),960);--color-surface-container-high:--u2-color-mod(var(--base-color),980);--color-surface-container-highest:--u2-color-mod(var(--base-color),1000);--color-primary-container:--u2-color-mod(var(--base-color),820);--color-on-primary-container:--u2-color-mod(var(--base-color),100);--color-border:color-mix(in oklab,var(--color-outline-variant) 70%,transparent);--color-bg:var(--color-background);--color-text:var(--color-on-background);--color-fg:var(--color-on-surface);--on-surface-color:var(--color-on-surface);--surface-color:var(--color-surface);--fl-surface:var(--color-surface);--fl-on-surface:var(--color-on-surface);--fl-primary:var(--color-primary);--fl-on-primary:var(--color-on-primary);--fl-secondary:var(--color-secondary);--fl-on-secondary:var(--color-on-secondary);--fl-shadow-xl:var(--shadow-xl);--on-surface-variant:var(--color-on-surface-variant);--wf-md-surface:var(--color-surface);--wf-md-on-surface:var(--color-on-surface);--wf-md-on-surface-variant:var(--color-on-surface-variant);--wf-md-surf-container:var(--color-surface-container);--wf-md-surf-container-low:var(--color-surface-container-low);--wf-md-surf-container-high:var(--color-surface-container-high);--wf-md-outline-variant:var(--color-outline-variant);--md3-primary-container:var(--color-primary-container);--md-primary-container:var(--color-primary-container)}}:host[data-theme=light],:root[data-theme=light],[data-theme=light]{color-scheme:light only;--base-color:var(--color-primary);--base-color-neutralized:color-mix(in oklab,var(--base-color) 60%,gray);--wallpaper-underlying-color:--u2-color-mod(var(--base-color-neutralized),940);--wallpaper-contrast-color:--u2-color-mod(var(--base-color-neutralized),70);--wf-md-primary:var(--color-primary);--wf-md-seed:var(--base-color);--color-on-primary:--u2-color-mod(var(--base-color),40);--color-secondary:--u2-color-mod(var(--base-color),420);--color-on-secondary:--u2-color-mod(var(--base-color),40);--color-tertiary:--u2-color-mod(var(--base-color),400);--color-on-tertiary:--u2-color-mod(var(--base-color),40);--color-error:#ef4444;--color-on-error:--u2-color-mod(var(--color-error),40);--color-success:#4caf50;--color-warning:#ff9800;--color-info:#2196f3;--color-background:--u2-color-mod(var(--base-color),60);--color-on-background:--u2-color-mod(var(--base-color),900);--color-surface:--u2-color-mod(var(--base-color),60);--color-on-surface:--u2-color-mod(var(--base-color),900);--color-surface-variant:--u2-color-mod(var(--base-color),160);--color-on-surface-variant:--u2-color-mod(var(--base-color),700);--color-outline:--u2-color-mod(var(--base-color),300);--color-outline-variant:--u2-color-mod(var(--base-color),400);--color-surface-container-lowest:--u2-color-mod(var(--base-color),40);--color-surface-container-low:--u2-color-mod(var(--base-color),30);--color-surface-container:--u2-color-mod(var(--base-color),20);--color-surface-container-high:--u2-color-mod(var(--base-color),5);--color-surface-container-highest:--u2-color-mod(var(--base-color),2);--color-primary-container:--u2-color-mod(var(--base-color),160);--color-on-primary-container:--u2-color-mod(var(--base-color),900);--color-border:color-mix(in oklab,var(--color-outline-variant) 75%,transparent);--color-bg:var(--color-background);--color-text:var(--color-on-background);--color-fg:var(--color-on-surface);--on-surface-color:var(--color-on-surface);--surface-color:var(--color-surface);--fl-surface:var(--color-surface);--fl-on-surface:var(--color-on-surface);--fl-primary:var(--color-primary);--fl-on-primary:var(--color-on-primary);--fl-secondary:var(--color-secondary);--fl-on-secondary:var(--color-on-secondary);--fl-shadow-xl:var(--shadow-xl);--on-surface-variant:var(--color-on-surface-variant);--wf-md-surface:var(--color-surface);--wf-md-on-surface:var(--color-on-surface);--wf-md-on-surface-variant:var(--color-on-surface-variant);--wf-md-surf-container:var(--color-surface-container);--wf-md-surf-container-low:var(--color-surface-container-low);--wf-md-surf-container-high:var(--color-surface-container-high);--wf-md-outline-variant:var(--color-outline-variant);--md3-primary-container:var(--color-primary-container);--md-primary-container:var(--color-primary-container)}:host[data-theme=dark],:root[data-theme=dark],[data-theme=dark]{color-scheme:dark only;--base-color:var(--color-primary);--base-color-neutralized:color-mix(in oklab,var(--base-color) 60%,gray);--wallpaper-underlying-color:--u2-color-mod(var(--base-color-neutralized),940);--wallpaper-contrast-color:--u2-color-mod(var(--base-color-neutralized),70);--wf-md-primary:var(--color-primary);--wf-md-seed:var(--base-color);--color-on-primary:--u2-color-mod(var(--base-color),920);--color-secondary:--u2-color-mod(var(--base-color),680);--color-on-secondary:--u2-color-mod(var(--base-color),920);--color-tertiary:--u2-color-mod(var(--base-color),700);--color-on-tertiary:--u2-color-mod(var(--base-color),920);--color-error:#f87171;--color-on-error:--u2-color-mod(var(--color-error),920);--color-success:#66bb6a;--color-warning:#ffa726;--color-info:#42a5f5;--color-background:--u2-color-mod(var(--base-color),940);--color-on-background:--u2-color-mod(var(--base-color),100);--color-surface:--u2-color-mod(var(--base-color),940);--color-on-surface:--u2-color-mod(var(--base-color),100);--color-surface-variant:--u2-color-mod(var(--base-color),840);--color-on-surface-variant:--u2-color-mod(var(--base-color),280);--color-outline:--u2-color-mod(var(--base-color),720);--color-outline-variant:--u2-color-mod(var(--base-color),640);--color-surface-container-lowest:--u2-color-mod(var(--base-color),920);--color-surface-container-low:--u2-color-mod(var(--base-color),940);--color-surface-container:--u2-color-mod(var(--base-color),960);--color-surface-container-high:--u2-color-mod(var(--base-color),980);--color-surface-container-highest:--u2-color-mod(var(--base-color),1000);--color-primary-container:--u2-color-mod(var(--base-color),820);--color-on-primary-container:--u2-color-mod(var(--base-color),100);--color-border:color-mix(in oklab,var(--color-outline-variant) 70%,transparent);--color-bg:var(--color-background);--color-text:var(--color-on-background);--color-fg:var(--color-on-surface);--on-surface-color:var(--color-on-surface);--surface-color:var(--color-surface);--fl-surface:var(--color-surface);--fl-on-surface:var(--color-on-surface);--fl-primary:var(--color-primary);--fl-on-primary:var(--color-on-primary);--fl-secondary:var(--color-secondary);--fl-on-secondary:var(--color-on-secondary);--fl-shadow-xl:var(--shadow-xl);--on-surface-variant:var(--color-on-surface-variant);--wf-md-surface:var(--color-surface);--wf-md-on-surface:var(--color-on-surface);--wf-md-on-surface-variant:var(--color-on-surface-variant);--wf-md-surf-container:var(--color-surface-container);--wf-md-surf-container-low:var(--color-surface-container-low);--wf-md-surf-container-high:var(--color-surface-container-high);--wf-md-outline-variant:var(--color-outline-variant);--md3-primary-container:var(--color-primary-container);--md-primary-container:var(--color-primary-container)}:root[data-scheme=auto]:not([data-theme=light]):not([data-theme=dark]),:root[data-scheme=system]:not([data-theme=light]):not([data-theme=dark]){color-scheme:light dark}@media (prefers-reduced-motion:reduce){:root{--transition-fast:0ms;--transition-normal:0ms;--transition-slow:0ms;--motion-fast:0ms;--motion-normal:0ms;--motion-slow:0ms;--duration-fast:0ms;--duration-normal:0ms;--duration-slow:0ms}}@media (prefers-contrast:high){:root{--color-border:var(--color-border,var(--color-outline));--color-border-hover:color-mix(in oklab,var(--color-border,var(--color-outline)) 80%,var(--color-on-surface,var(--color-on-surface)));--color-text-secondary:var(--color-on-surface,var(--color-on-surface));--color-text-muted:var(--color-on-surface-variant,var(--color-on-surface-variant))}}@media print{:root{--view-padding:0;--view-content-max-width:100%;--view-bg:white;--view-fg:black;--view-heading-color:black;--view-link-color:black}:root:has([data-view=viewer]){--view-code-bg:#f5f5f5;--view-code-fg:black;--view-blockquote-bg:#f5f5f5}}}@layer base{@keyframes l{0%{opacity:0;transform:translateY(10%)}to{opacity:1;transform:translateY(0)}}@media screen{*,:after,:before{box-sizing:border-box;dynamic-range-limit:no-limit}:where(html){-webkit-text-size-adjust:100%;font-optical-sizing:auto;font-size-adjust:from-font;tab-size:4;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background:none;background-color:initial;border:0 transparent;dynamic-range-limit:no-limit;font-family:var(--font-sans);font-size:16px;line-height:1.5;outline:0 none transparent;text-rendering:optimizeLegibility}:where(body){background:var(--color-bg);block-size:fit-content;color:var(--color-text);inset:0;line-height:var(--line-height);margin:0;min-block-size:min(var(--lv-height,100lvb),100cqb);padding:0;-webkit-font-smoothing:antialiased;background:none;background-color:initial;border:0 transparent;dynamic-range-limit:no-limit;outline:0 none transparent;text-rendering:optimizeLegibility}:where(ul,ol){list-style:none;margin:0;padding:0}:where(blockquote,q){quotes:none}:where(blockquote,q):after,:where(blockquote,q):before{content:\"\";content:none}:where(article,main,aside,section,header,footer,nav){border:0 transparent;box-shadow:0 none transparent;outline:0 none transparent}:where(table){border:1px solid var(--color-border);border-collapse:collapse;border-radius:var(--border-radius);border-spacing:0;display:block;inline-size:max-content;margin-block:1rem;max-inline-size:100%;overflow-x:auto}:where(table) :where(th,td){border-block-end:1px solid var(--color-border);padding:.5rem 1rem;text-align:start}:where(table) :where(th){background-color:var(--color-table);color:var(--color-text);font-weight:700}:where(table) :where(tr:last-child td){border-block-end:none}:where(table) :where(tr:nth-child(2n)){background-color:var(--color-bg-secondary)}:focus-visible{border-radius:var(--radius-sm);box-shadow:0 0 0 3px color-mix(in oklab,var(--color-primary,#5a7fff) 35%,transparent);outline:none}:focus:not(:focus-visible){outline:none}:where(button,input,optgroup,select,textarea){border:0 transparent;box-shadow:0 none transparent;color:inherit;font:inherit;letter-spacing:inherit;line-height:1.15;margin:0;outline:none;outline:0 none transparent}:where(button){appearance:none;background:transparent;border:none;cursor:pointer;gap:.25rem;min-block-size:fit-content;min-inline-size:fit-content;padding-block:.5rem;padding-inline:1rem;pointer-events:auto;text-transform:none;user-select:none}:where(button):has(>ui-icon:only-child){aspect-ratio:1/1;place-content:center;place-items:center}:where(button):disabled{cursor:not-allowed;pointer-events:none}:where(select){text-transform:none}:where(button,[type=button],[type=reset],[type=submit]){-webkit-appearance:button;cursor:pointer}:where(button,[type=button],[type=reset],[type=submit])::-moz-focus-inner{border-style:none;padding:0}:where(fieldset,dialog){border:none;margin:0;padding:0}:where(legend){padding:0}:where(progress){vertical-align:initial}:where(textarea){overflow:auto;resize:vertical}:where([type=search]){-webkit-appearance:textfield;outline-offset:-2px}:where([type=search])::-webkit-search-decoration{-webkit-appearance:none}:where([type=range]){-webkit-appearance:none}:where(details>summary),:where(summary){cursor:pointer}:where(mark){background-color:initial;color:inherit}:where(sub,sup){font-size:75%;line-height:0;position:relative;vertical-align:initial}:where(sup){top:-.5em}:where(sub){bottom:-.25em}:where(a){color:var(--color-link,inherit);cursor:pointer;pointer-events:auto;text-decoration:inherit;text-underline-offset:.2em;transition:color var(--transition-fast)}:where(a):hover{color:var(--color-primary-hover)}:where(img,canvas,svg,video,iframe,picture){block-size:auto;border:0 transparent;box-shadow:0 none transparent;dynamic-range-limit:no-limit;max-inline-size:100%;outline:0 none transparent}:where(img,video,canvas,svg,picture){block-size:auto;display:block;max-inline-size:100%}:where(img,video){object-fit:contain;object-position:center}:where(picture){display:contents}:where(iframe){block-size:auto;max-inline-size:100%}:where(em,i){font-style:normal}:where(strong,b){font-weight:400}:where(code,kbd,samp,pre){font-family:var(--font-family-mono,\"SF Mono\",\"Monaco\",\"Inconsolata\",\"Roboto Mono\",monospace);font-size:1em}:where(code,pre){font-family:var(--font-mono);font-size:.875em}:where(code,samp,kbd){background-color:var(--bgColor-muted);border-radius:.3em;font-family:var(--font-family-mono,\"SF Mono\",\"Monaco\",\"Roboto Mono\",monospace);font-size:85%;padding:.2em .4em}:where(code){background:var(--color-bg-alt);border-radius:var(--radius-sm);padding:.125em .25em}:where(pre){background:var(--color-bg-alt);border-radius:var(--radius-md);overflow-x:auto;padding:var(--space-md)}:where(pre) :where(code){background:transparent;border-radius:0;padding:0}:where(input,textarea,select,button,option){accent-color:var(--color-link,currentColor);border:0 transparent;box-shadow:0 none transparent;font-variant-emoji:text;outline:0 none transparent}:where(span){font-variant-emoji:text}:where(hr){border:none;border-block-start:1px solid var(--color-border);margin-block:var(--space-lg)}::-webkit-scrollbar{block-size:8px;inline-size:8px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:var(--color-outline-variant,#d1d5db);border-radius:4px}::-webkit-scrollbar-thumb:hover{background:var(--color-outline,#9ca3af)}*{scrollbar-color:var(--color-outline-variant,#d1d5db) transparent;scrollbar-width:thin}:where(input,textarea,select){background-color:var(--color-bg-alt);border:0 solid var(--color-border);border-radius:var(--border-radius);color:var(--color-fg);font-size:var(--font-size-base);inline-size:100%;padding:.5rem}:where(input,textarea,select):focus{border-color:var(--color-primary);outline:none}:where(input,textarea,select)::placeholder{color:var(--color-text-secondary);opacity:.7}:where(input,textarea,select):disabled{background-color:var(--color-bg-secondary);cursor:not-allowed;opacity:.5}:where(input):-webkit-autofill:first-line,:where(input):autofill:first-line{font-size:1em;text-size-adjust:100%}:where(input):-internal-autofill-previewed{letter-spacing:calc(1em / 10)!important}:where(input):is([type=radio],[type=checkbox]){accent-color:var(--color-primary);aspect-ratio:1/1;block-size:1rem;inline-size:1rem}:where(label){font-weight:600;margin-block-end:.25rem;pointer-events:none;user-select:none}:where(h1,h2,h3,h4,h5,h6){font-weight:600;line-height:1.2;margin-block:.5em;text-wrap:balance}:where(h1){font-size:2rem}:where(h2){font-size:1.5rem}:where(h3){font-size:1.25rem}:where(h4){font-size:1.125rem}:where(h5){font-size:1rem}:where(h6){font-size:.875rem}:where(p){margin-block:1em;text-wrap:pretty}:where(article,.content) :is(ol,ul){margin-block:var(--space-md);padding-inline-start:var(--space-lg)}:where(article,.content) ul{list-style:disc}:where(article,.content) ol{list-style:decimal}:where(blockquote){border-inline-start:.25rem solid var(--color-secondary);color:var(--color-text-secondary);font-style:italic;margin-inline:1rem;padding-inline:1rem}:where(body,main,aside,pre,code,textarea,[data-scrollable],.scrollable){scrollbar-color:var(--color-scrollbar,currentColor) transparent;scrollbar-width:thin}:where(body,main,aside,pre,code,textarea,[data-scrollable],.scrollable)::-webkit-scrollbar{block-size:var(--scrollbar-size,8px);inline-size:var(--scrollbar-size,8px)}:where(body,main,aside,pre,code,textarea,[data-scrollable],.scrollable)::-webkit-scrollbar-track{background:transparent}:where(body,main,aside,pre,code,textarea,[data-scrollable],.scrollable)::-webkit-scrollbar-thumb{background-color:var(--color-scrollbar,currentColor);border-radius:var(--border-radius,4px)}:where(body,main,aside,pre,code,textarea,[data-scrollable],.scrollable)::-webkit-scrollbar-thumb:hover{background:var(--color-outline,#9ca3af)}:where(link,head,script,style,meta),[hidden]{display:none!important}:where(link,head,script,style,meta){pointer-events:none!important}[aria-hidden=true]{opacity:0;pointer-events:none;visibility:collapse}[data-dragging]{cursor:grabbing;will-change:transform}:where(a,button,[role=button]){-webkit-tap-highlight-color:transparent}}@media screen and (prefers-reduced-motion:reduce){*,:after,:before{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}}@layer layout{@media screen{:where(footer,header,main){margin-inline:auto;padding:0}:where(header){text-align:center}:where(nav){align-items:center;display:flex;flex-wrap:wrap;justify-content:space-between;margin-block-end:0}:where(nav) ul{display:flex;gap:1rem;list-style:none;margin:0;padding:0}:where(nav) ul li{position:relative}:where(nav) a{color:var(--color-link);font-weight:700;text-decoration:none}:where(section){display:flex;flex-wrap:wrap;gap:1rem;justify-content:var(--justify-important,center)}:where(section) :where(aside){border:1px solid var(--color-bg-secondary);border-radius:var(--border-radius);box-shadow:var(--box-shadow);flex:1 1 var(--width-card);inline-size:var(--width-card);padding:1.25rem}}}@layer components{@media screen{:where(dialog){background:var(--color-bg);border:1px solid var(--color-border);border-radius:var(--border-radius);box-shadow:var(--box-shadow);color:var(--color-text);margin:auto;max-block-size:85vh;max-inline-size:min(90vw,600px);padding:1rem}:where(dialog)::backdrop{background-color:rgba(0,0,0,.5)}:where(dialog)[open]{animation:l .25s ease-out}:where(button,input[type=submit],input[type=button]){align-items:center;background-color:var(--color-link);border:0 solid transparent;border-radius:var(--border-radius);cursor:pointer;display:inline-flex;font-weight:600;justify-content:center;padding:.5rem 1rem;transition:filter .2s ease,transform .1s ease}:where(button,input[type=submit],input[type=button]):disabled{background-color:var(--color-secondary);cursor:not-allowed;filter:none;opacity:.6}:where(canvas):is([is=ui-canvas]){background-color:initial!important;border:0 transparent!important;box-sizing:border-box!important;inset:0;inset-block-end:auto;margin:0;max-block-size:max(100%,min(100cqb,100lvb))!important;max-inline-size:max(100%,min(100cqi,100lvi))!important;min-block-size:0;min-inline-size:0;object-fit:cover;object-position:center;outline:0 none transparent!important;padding:0;pointer-events:none;position:fixed;z-index:0}}}@layer overrides{@media screen{[data-scheme=system],[data-theme=system]{color-scheme:light dark}[data-scheme=dark],[data-theme=dark]{color-scheme:dark only}[data-scheme=dark] *,[data-theme=dark] *{color-scheme:dark}[data-scheme=light],[data-theme=light]{color-scheme:light only}[data-scheme=light] *,[data-theme=light] *{color-scheme:light}[data-scheme=auto]:not([data-theme=light]):not([data-theme=dark]),[data-scheme=system]:not([data-theme=light]):not([data-theme=dark]),[data-theme=auto],[data-theme=system]{color-scheme:light dark}}}@position-try --just-block{inset-block-end:0}@position-try --just-inline{inset-inline-end:0}dialog.ui-modal-dialog{background:var(--modal-bg,Canvas);border:1px solid color-mix(in oklab,CanvasText 18%,transparent);border-radius:var(--radius-lg,1rem);box-shadow:var(--modal-shadow,0 20px 60px rgba(0,0,0,.42));color:var(--modal-fg,CanvasText);inline-size:min(100% - 2rem,36rem);margin:auto;max-block-size:calc(100dvb - 2rem);max-inline-size:calc(100dvi - 2rem);overflow:visible;padding:0}dialog.ui-modal-dialog::backdrop{backdrop-filter:blur(4px);background:var(--modal-backdrop-bg,rgba(0,0,0,.58))}.ui-modal-backdrop{backdrop-filter:blur(4px);background:var(--modal-backdrop-bg,rgba(0,0,0,.58));display:grid;inset:0;padding:1rem;place-items:center;pointer-events:auto;position:fixed;z-index:var(--ui-modal-fallback-z,2147483646)}.ui-modal-panel{background:var(--modal-bg,Canvas);border-radius:var(--modal-radius,var(--radius-lg,1rem));box-shadow:var(--modal-shadow,0 20px 60px rgba(0,0,0,.42));box-sizing:border-box;color:var(--modal-fg,CanvasText);inline-size:min(100%,36rem);max-block-size:calc(100dvb - 2rem);overflow:auto;padding:var(--modal-padding,1.25rem);pointer-events:auto}";
//#endregion
//#region ../../modules/projects/veela.css/src/scss/ui/native-controls.scss?inline
var native_controls_default = "@layer tokens, base, layout, components, utilities, theme, overrides, print;@layer components{:where(button){align-items:center;background:var(--color-bg-alt);border:1px solid var(--color-border);border-radius:var(--radius-md);color:var(--color-fg);cursor:pointer;display:inline-flex;font-size:var(--font-size-sm);font-weight:500;gap:var(--space-sm);justify-content:center;padding-block:0;padding-inline:0;transition:all var(--transition-fast)}:where(button):hover:not(:disabled){background:var(--color-border)}:where(button):focus-visible{outline:2px solid var(--color-primary);outline-offset:2px}:where(button):disabled{cursor:not-allowed;opacity:.5}}@layer components{input,select,textarea{background-repeat:no-repeat;font-size:inherit;max-inline-size:stretch;max-inline-size:100cqi;min-block-size:2.5rem;overflow:auto;scrollbar-width:none;text-overflow:ellipsis}textarea[data-multiline=true]{min-block-size:5rem;resize:vertical}}";
//#endregion
//#region ../../modules/projects/fl.ui/src/styles/index.ts
/**
* FL.UI Style Facade
*
* Loads canonical Veela styles while retaining FL.UI's public runtime API.
*/
var loader = async (options) => {
	await loadAllFonts().catch(() => void 0);
	await loadAsAdopted(ui_default)?.catch(() => void 0);
	if (options?.includeGlobalNativeControls) await loadAsAdopted(native_controls_default)?.catch(() => void 0);
};
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/navigation/statusbar/statusbar.ts
/**
* WHY: Uses FL-UI `ui-statusbar` (left/center/right slots) — not a parallel component.
* Reactive network/battery chips are shared via {@link attachShellDeviceStatus} for the desktop taskbar.
* Overlay mode (mobile browser / fullscreen, not standalone): transparent top band, time L / icons R.
*/
var styled$4 = preloadStyle(statusbar_default);
var StatusBar = class StatusBar extends UIElement_default {
	constructor() {
		super();
	}
	styles = () => styled$4;
	render = () => {
		return H`
<div style="background-color: transparent;" part="left"   class="left"  ><slot name="left"  ></slot></div>
        <div style="background-color: transparent;" part="center" class="center"><slot name="center"></slot></div>
        <div style="background-color: transparent;" part="right"  class="right" ><slot name="right" ></slot></div>`;
	};
};
StatusBar = __decorate([defineElement("ui-statusbar")], StatusBar);
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/navigation/explorer/fs-backend.ts
function normalizeVirtualPath(path, asDirectory = true) {
	let p = String(path || "/").trim() || "/";
	if (!p.startsWith("/")) p = `/${p}`;
	p = p.replace(/\/{2,}/g, "/");
	if (p !== "/" && asDirectory && !p.endsWith("/")) p += "/";
	if (p !== "/" && !asDirectory && p.endsWith("/")) p = p.slice(0, -1);
	return p;
}
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/navigation/explorer/backends/chrome-bookmarks-backend.ts
var BOOKMARKS_ROOT = "/bookmarks/";
/**
* chrome.bookmarks is callback-first historically; modern Chromium returns a
* Promise when the callback arg is omitted. Normalize both shapes so
* `await api.getTree()` never resolves to `undefined` (empty Explorer list).
*/
function promisifyBookmarksApi(api) {
	const chromeErr = () => {
		try {
			const err = globalThis?.chrome?.runtime?.lastError;
			return err ? new Error(String(err.message || err)) : null;
		} catch {
			return null;
		}
	};
	const call = (method, ...args) => {
		const fn = api?.[method];
		if (typeof fn !== "function") return Promise.reject(/* @__PURE__ */ new Error(`chrome.bookmarks.${String(method)} missing`));
		try {
			const result = fn.apply(api, args);
			if (result != null && typeof result.then === "function") return result;
		} catch (e) {
			return Promise.reject(e);
		}
		return new Promise((resolve, reject) => {
			try {
				fn.apply(api, [...args, (res) => {
					const err = chromeErr();
					if (err) reject(err);
					else resolve(res);
				}]);
			} catch (e) {
				reject(e);
			}
		});
	};
	return {
		getTree: () => call("getTree"),
		getChildren: (id) => call("getChildren", id),
		create: (opts) => call("create", opts),
		update: (id, changes) => call("update", id, changes),
		move: (id, dest) => call("move", id, dest),
		remove: (id) => call("remove", id),
		removeTree: (id) => call("removeTree", id),
		onCreated: api.onCreated,
		onChanged: api.onChanged,
		onRemoved: api.onRemoved,
		onMoved: api.onMoved
	};
}
var toEntry = (node) => {
	if (typeof node.url === "string" && node.url.length > 0) return {
		name: node.title || node.id,
		kind: "file",
		href: node.url,
		type: "text/uri-list",
		bookmarkId: node.id,
		path: `${BOOKMARKS_ROOT}${node.id}`
	};
	return {
		name: node.title || node.id,
		kind: "directory",
		bookmarkId: node.id,
		path: `${BOOKMARKS_ROOT}${node.id}/`
	};
};
/**
* Extract the trailing path segment as a Chrome bookmark id.
* `/bookmarks/1/` → "1"; `/bookmarks/1/10` → "10"; `/bookmarks/` → "" (root).
*/
var lastId = (path) => {
	const segments = normalizeVirtualPath(path, false).split("/").filter(Boolean);
	const ids = segments[0] === "bookmarks" ? segments.slice(1) : segments;
	return ids[ids.length - 1] ?? "";
};
/**
* `true` when the path addresses a folder (ends with `/`).
*
* WHY (final review #3): the previous impl called `normalizeVirtualPath(path,
* true)` which **forces** a trailing slash onto every input, so URL bookmark
* paths like `/bookmarks/10` were rewritten to `/bookmarks/10/` and `remove`
* always picked `removeTree`. Chrome `remove` rejects folders-with-children
* and `removeTree` rejects URL nodes, so URL deletes failed. We now collapse
* duplicate slashes only and inspect the original trailing slash, which the
* backend's own `toEntry` sets deterministically (folders end with `/`, URL
* nodes do not).
*/
var isFolderPath = (path) => {
	const raw = String(path || "").replace(/\/{2,}/g, "/");
	return raw.length > 1 && raw.endsWith("/");
};
/**
* Build a FsBackend backed by `chrome.bookmarks`. Pass the real API in CRX
* boot, or a mock in tests. Returns `null` if no API is provided so callers
* can short-circuit registration outside CRX.
*/
function createChromeBookmarksBackend(api) {
	if (!api) return null;
	const bookmarks = promisifyBookmarksApi(api);
	const list = async (path) => {
		const norm = normalizeVirtualPath(path, true);
		if (norm === BOOKMARKS_ROOT) {
			const tree = await bookmarks.getTree();
			const entries = [];
			for (const root of tree || []) for (const child of root?.children ?? []) entries.push(toEntry(child));
			return entries;
		}
		const id = lastId(norm);
		if (!id) return [];
		return (await bookmarks.getChildren(id) || []).map(toEntry);
	};
	const mkdir = async (parentPath, name) => {
		const parentId = lastId(parentPath) || "0";
		await bookmarks.create({
			parentId,
			title: name
		});
	};
	const createUrl = async (parentPath, title, url) => {
		const parentId = lastId(parentPath) || "0";
		await bookmarks.create({
			parentId,
			title,
			url
		});
	};
	const rename = async (path, newName) => {
		const id = lastId(path);
		if (!id) return;
		await bookmarks.update(id, { title: newName });
	};
	const update = async (path, patch) => {
		const id = lastId(path);
		if (!id) return;
		const body = {};
		if (patch.title != null) body.title = String(patch.title || "").trim();
		if (patch.url != null && !isFolderPath(path)) body.url = String(patch.url || "").trim();
		if (!Object.keys(body).length) return;
		await bookmarks.update(id, body);
	};
	const move = async (fromPath, toDirPath) => {
		const id = lastId(fromPath);
		const parentId = lastId(toDirPath) || "0";
		if (!id) return;
		await bookmarks.move(id, { parentId });
	};
	const remove = async (path, _recursive) => {
		const id = lastId(path);
		if (!id) return;
		if (isFolderPath(path)) await bookmarks.removeTree(id);
		else await bookmarks.remove(id);
	};
	const writeFile = async (_parentPath, _file) => {
		throw new Error("bookmarks backend does not store file bytes");
	};
	const invalidationListeners = /* @__PURE__ */ new Set();
	const emitInvalidation = () => {
		for (const cb of invalidationListeners) try {
			cb();
		} catch {}
	};
	if (bookmarks.onCreated?.addListener) bookmarks.onCreated.addListener(emitInvalidation);
	if (bookmarks.onChanged?.addListener) bookmarks.onChanged.addListener(emitInvalidation);
	if (bookmarks.onRemoved?.addListener) bookmarks.onRemoved.addListener(emitInvalidation);
	if (bookmarks.onMoved?.addListener) bookmarks.onMoved.addListener(emitInvalidation);
	const subscribeBookmarksInvalidation = (cb) => {
		if (typeof cb !== "function") return () => {};
		invalidationListeners.add(cb);
		return () => {
			invalidationListeners.delete(cb);
		};
	};
	return {
		root: BOOKMARKS_ROOT,
		writable: true,
		list,
		mkdir,
		createUrl,
		rename,
		update,
		move,
		remove,
		writeFile,
		subscribeBookmarksInvalidation
	};
}
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/navigation/explorer/backends/chrome-downloads-backend.ts
var DOWNLOADS_ROOT = "/downloads/";
var fileNameOf = (item) => {
	const raw = String(item.filename || item.url || "").trim();
	if (!raw) return `download-${item.id ?? "0"}`;
	const parts = raw.split(/[/\\]/).filter(Boolean);
	return parts[parts.length - 1] || raw;
};
var createChromeDownloadsBackend = (downloads) => {
	if (typeof downloads?.search !== "function") return null;
	return {
		root: DOWNLOADS_ROOT,
		writable: false,
		async list() {
			const rows = await downloads.search({});
			return (Array.isArray(rows) ? rows : []).filter((item) => item && item.exists !== false && String(item.state || "") !== "interrupted").map((item) => {
				const id = String(item.id ?? fileNameOf(item));
				return {
					name: fileNameOf(item),
					kind: "file",
					path: `${DOWNLOADS_ROOT}${id}`
				};
			});
		}
	};
};
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/navigation/explorer/storage-bridge.ts
var api = null;
var capacitorInvoke = async (channel, payload = {}) => {
	const plugin = globalThis.Capacitor?.Plugins?.CwsBridge;
	if (typeof plugin?.invoke !== "function") return { ok: false };
	const r = await plugin.invoke({
		channel,
		payload
	});
	return r?.echo || r || {};
};
/**
* WHY: Speed Dial / shortcuts store `file:///storage/emulated/0/…`, `/mnt/sdcard/…`,
* or `sdcard/…`. CwsStorageHost only understands `/sdcard/` `/saf/`.
*/
var toNativeStorageVirtualPath = (raw) => {
	let s = String(raw || "").trim();
	if (!s) return "";
	try {
		s = decodeURIComponent(s);
	} catch {}
	s = s.replace(/^file:\/\/(?:localhost)?/i, "");
	if (/^\/(?:sdcard|saf)(?:\/|$)/i.test(s)) return s;
	if (/^(?:sdcard|saf)(?:\/|$)/i.test(s)) return `/${s}`;
	const mapped = s.replace(/^(?:\/storage\/emulated\/0|\/mnt\/sdcard|storage\/emulated\/0|mnt\/sdcard)(?=\/|$)/i, "/sdcard");
	return /^\/sdcard(?:\/|$)/i.test(mapped) ? mapped : "";
};
var parseNativeStoragePath = (virtualPath) => {
	const raw = toNativeStorageVirtualPath(virtualPath) || String(virtualPath || "").trim();
	if (!raw) return null;
	const root = raw === "/saf" || raw.startsWith("/saf/") ? "saf" : raw === "/sdcard" || raw.startsWith("/sdcard/") ? "sdcard" : "";
	if (!root) return null;
	if (raw === `/${root}`) return {
		root,
		rel: "/"
	};
	const prefix = root === "saf" ? "/saf/" : "/sdcard/";
	return {
		root,
		rel: (raw.startsWith(prefix) ? raw.slice(prefix.length - 1) : raw) || "/"
	};
};
var isNativeStorageAvailable = () => {
	if (api?.list) return true;
	try {
		const c = globalThis.Capacitor;
		return typeof c?.isNativePlatform === "function" && c.isNativePlatform();
	} catch {
		return false;
	}
};
var listNativeStorage = async (root, path = "/") => {
	if (api?.list) return api.list(root, path);
	const echo = await capacitorInvoke("storage:list", {
		root,
		path
	});
	const rows = echo.entries || echo.files;
	return Array.isArray(rows) ? rows : [];
};
var dataUrlToFile = async (dataUrl, name, mime) => {
	const src = String(dataUrl || "").trim();
	if (!src) return null;
	try {
		const blob = await (await fetch(src)).blob();
		return new File([blob], name || "file", { type: blob.type || mime || "application/octet-stream" });
	} catch {
		return null;
	}
};
/** Read one `/sdcard/` or `/saf/` file through CwsBridge (`storage:read`). */
var readNativeStorageFile = async (virtualPath) => {
	const parsed = parseNativeStoragePath(virtualPath);
	if (!parsed) return null;
	const echo = await capacitorInvoke("storage:read", {
		root: parsed.root,
		path: parsed.rel
	});
	const data = String(echo.data || echo.dataUrl || "");
	if (!data) return null;
	return dataUrlToFile(data, String(echo.name || virtualPath.split("/").filter(Boolean).pop() || "file"), String(echo.mime || echo.mimeType || "application/octet-stream"));
};
/** Delete a `/sdcard/` or `/saf/` file or folder through CwsBridge (`storage:delete`). */
var removeNativeStorage = async (virtualPath) => {
	const parsed = parseNativeStoragePath(virtualPath);
	if (!parsed) throw new Error("not native storage");
	const plugin = globalThis.Capacitor?.Plugins?.CwsBridge;
	if (typeof plugin?.invoke !== "function") throw new Error("no native storage");
	const r = await plugin.invoke({
		channel: "storage:delete",
		payload: {
			root: parsed.root,
			path: parsed.rel
		}
	});
	const echo = r?.echo || {};
	if (r?.ok === false || echo.deleted !== true) throw new Error(String(echo.error || "delete failed"));
};
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/navigation/explorer/backends/native-fs-backend.ts
var toEntries = (path, rows) => {
	const base = normalizeVirtualPath(path, true);
	return rows.filter((row) => row?.name).map((row) => {
		const kind = row.kind === "directory" ? "directory" : "file";
		return {
			name: String(row.name),
			kind,
			path: row.path || `${base}${row.name}${kind === "directory" ? "/" : ""}`,
			type: kind === "file" ? void 0 : void 0
		};
	});
};
var createNativeFsBackend = (root) => ({
	root,
	writable: true,
	async list(path) {
		const rel = normalizeVirtualPath(path, true).slice(root.length - 1) || "/";
		return toEntries(path, await listNativeStorage(root === "/saf/" ? "saf" : "sdcard", rel));
	},
	async readFile(path) {
		return readNativeStorageFile(path);
	},
	async remove(path, _recursive) {
		await removeNativeStorage(path);
	}
});
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/navigation/explorer/backends/neutralino-fs-backend.ts
var DESKTOP_ROOT = "/desktop/";
var neu = () => {
	try {
		return globalThis.Neutralino ?? null;
	} catch {
		return null;
	}
};
var isNeutralinoFilesystemAvailable = () => typeof neu()?.filesystem?.readDirectory === "function";
var resolveNeutralinoHome = async () => {
	const os = neu()?.os;
	if (typeof os?.getPath === "function") for (const name of ["home", "documents"]) try {
		const path = String(await os.getPath(name) || "").trim();
		if (path) return path;
	} catch {}
	return "";
};
var joinNative = (home, rel) => {
	const base = home.replace(/[/\\]+$/, "");
	const tail = rel.replace(/^[/\\]+/, "").replace(/[/\\]+$/, "");
	if (!tail) return base || home;
	const sep = base.includes("\\") ? "\\" : "/";
	return `${base}${sep}${tail.replace(/[/\\]+/g, sep)}`;
};
var virtualToNative = (home, virtualPath, asDirectory) => {
	const v = normalizeVirtualPath(virtualPath, asDirectory);
	return joinNative(home, v.startsWith("/desktop/") ? v.slice(9) : v.replace(/^\/+/, ""));
};
var createNeutralinoFsBackend = (homePath) => {
	const fs = neu()?.filesystem;
	const home = String(homePath || "").trim();
	if (!home || typeof fs?.readDirectory !== "function") return null;
	return {
		root: DESKTOP_ROOT,
		writable: true,
		async list(path) {
			const native = virtualToNative(home, path, true);
			const rows = await fs.readDirectory(native);
			const base = normalizeVirtualPath(path, true);
			return (Array.isArray(rows) ? rows : []).map((row) => {
				const name = String(row?.entry || "").trim();
				if (!name || name === "." || name === "..") return null;
				const kind = String(row?.type || "").toUpperCase() === "DIRECTORY" ? "directory" : "file";
				return {
					name,
					kind,
					path: `${base}${name}${kind === "directory" ? "/" : ""}`
				};
			}).filter((row) => Boolean(row));
		},
		async mkdir(path, name) {
			if (typeof fs.createDirectory !== "function") throw new Error("Neutralino filesystem.createDirectory unavailable");
			const parent = virtualToNative(home, path, true);
			const sep = parent.includes("\\") ? "\\" : "/";
			await fs.createDirectory(`${parent}${sep}${name}`);
		},
		async remove(path) {
			if (typeof fs.remove !== "function") throw new Error("Neutralino filesystem.remove unavailable");
			await fs.remove(virtualToNative(home, path, false));
		},
		async rename(path, newName) {
			if (typeof fs.move !== "function") throw new Error("Neutralino filesystem.move unavailable");
			const from = virtualToNative(home, path, false);
			const parentVirt = normalizeVirtualPath(path, false).replace(/[^/]+$/, "");
			const dest = virtualToNative(home, `${parentVirt}${newName}`, false);
			await fs.move(from, dest);
		},
		async move(fromPath, toDirPath) {
			if (typeof fs.move !== "function") throw new Error("Neutralino filesystem.move unavailable");
			const from = virtualToNative(home, fromPath, false);
			const name = normalizeVirtualPath(fromPath, false).split("/").filter(Boolean).pop() || "";
			const dest = virtualToNative(home, `${normalizeVirtualPath(toDirPath, true)}${name}`, false);
			await fs.move(from, dest);
		},
		async writeFile(parentPath, file) {
			const dest = virtualToNative(home, `${normalizeVirtualPath(parentPath, true)}${file.name}`, false);
			const bytes = await file.arrayBuffer();
			if (typeof fs.writeBinaryFile === "function") {
				await fs.writeBinaryFile(dest, bytes);
				return;
			}
			if (typeof fs.writeFile === "function") {
				await fs.writeFile(dest, await file.text());
				return;
			}
			throw new Error("Neutralino filesystem write unavailable");
		}
	};
};
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/navigation/explorer/mounts.ts
var MOUNTS_ROOT = "/mounts/";
var CATALOG_KEY$1 = "cw::explorer::mounts";
var handles = /* @__PURE__ */ new Map();
var observer = null;
var readCatalog$1 = () => {
	try {
		const raw = localStorage.getItem(CATALOG_KEY$1);
		const parsed = raw ? JSON.parse(raw) : null;
		if (parsed && Array.isArray(parsed.mounts)) return parsed;
	} catch {}
	return { mounts: [] };
};
var walkHandle = async (dir, virtualDir) => {
	const entries = [];
	const base = normalizeVirtualPath(virtualDir, true);
	try {
		for await (const [name, handle] of dir.entries()) {
			const kind = handle.kind === "directory" ? "directory" : "file";
			entries.push({
				name,
				kind,
				path: `${base}${name}${kind === "directory" ? "/" : ""}`
			});
		}
	} catch {
		return [];
	}
	return entries;
};
var resolveNestedHandle = async (root, rel) => {
	let dir = root;
	for (const seg of rel.split("/").filter(Boolean)) try {
		dir = await dir.getDirectoryHandle(seg, { create: false });
	} catch {
		return null;
	}
	return dir;
};
var createMountBackend = (mount) => ({
	root: mount.path,
	writable: true,
	async list(path) {
		const handle = handles.get(mount.id);
		if (!handle) return [];
		const rel = normalizeVirtualPath(path, true).slice(mount.path.length);
		const dir = rel ? await resolveNestedHandle(handle, rel) : handle;
		if (!dir) return [];
		return walkHandle(dir, path);
	}
});
var observeHandle = (handle) => {
	const Ctor = globalThis.FileSystemObserver;
	if (typeof Ctor !== "function") return;
	try {
		observer?.disconnect?.();
		const next = new Ctor(() => {
			window.dispatchEvent(new CustomEvent("cwsp:explorer-mount-change"));
		});
		next.observe(handle);
		observer = next;
	} catch {}
};
var listExplorerMounts = () => readCatalog$1().mounts;
var restoreDirectoryMounts = () => {
	restorePersistedHandles().then(() => {
		for (const mount of readCatalog$1().mounts) {
			const handle = handles.get(mount.id);
			if (!handle) continue;
			registerFsBackend(createMountBackend(mount));
			registerDirectoryRoot(mount.path, handle);
			observeHandle(handle);
		}
	});
};
var HANDLE_DB = "cw-explorer-fs";
var HANDLE_STORE = "handles";
var openHandleDb = () => new Promise((resolve, reject) => {
	const req = indexedDB.open(HANDLE_DB, 1);
	req.onupgradeneeded = () => req.result.createObjectStore(HANDLE_STORE);
	req.onsuccess = () => resolve(req.result);
	req.onerror = () => reject(req.error);
});
var restorePersistedHandles = async () => {
	if (typeof indexedDB === "undefined") return;
	try {
		const db = await openHandleDb();
		const stored = await new Promise((resolve, reject) => {
			const req = db.transaction(HANDLE_STORE, "readonly").objectStore(HANDLE_STORE).openCursor();
			const rows = [];
			req.onsuccess = () => {
				const cursor = req.result;
				if (!cursor) {
					resolve(rows);
					return;
				}
				rows.push([String(cursor.key), cursor.value]);
				cursor.continue();
			};
			req.onerror = () => reject(req.error);
		});
		for (const [id, handle] of stored) {
			if (!handle || handles.has(id)) continue;
			try {
				const perm = await handle.queryPermission?.({ mode: "read" });
				if (perm && perm !== "granted") continue;
				handles.set(id, handle);
			} catch {}
		}
	} catch {}
};
/** Placeholder so /mounts/ appears at virtual root even before a pick. */
var ensureMountsRootBackend = () => {
	registerFsBackend({
		root: MOUNTS_ROOT,
		writable: false,
		async list() {
			return listExplorerMounts().map((m) => ({
				name: m.label,
				kind: "directory",
				path: m.path
			}));
		}
	});
	restoreDirectoryMounts();
};
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/navigation/explorer/path-router.ts
/**
* INVARIANT: registry keys are normalized directory roots (trailing slash,
* except `/` itself). Longest-prefix match wins so nested backends (e.g.
* `/bookmarks/` under a future `/`-rooted fallback) resolve deterministically.
*/
var registry = /* @__PURE__ */ new Map();
var normalizeRoot = (root) => normalizeVirtualPath(root, true);
var backendListeners = /* @__PURE__ */ new Set();
var notifyBackendRegistered = (root) => {
	for (const listener of backendListeners) try {
		listener(root);
	} catch {}
};
function registerFsBackend(backend) {
	if (!backend?.root) return;
	const key = normalizeRoot(backend.root);
	registry.set(key, backend);
	notifyBackendRegistered(key);
	bindFsBackendToProvide(backend);
}
function unregisterFsBackend(root) {
	registry.delete(normalizeRoot(root));
}
/**
* Longest-prefix match. A backend rooted at `/user/` matches `/user/links/`
* but not `/user-other/`. The root `/` matches anything when registered.
*/
function resolveFsBackend(path) {
	const target = normalizeVirtualPath(path, true);
	let best = null;
	let bestLen = -1;
	for (const [root, backend] of registry) {
		if (root === "/") {
			if (bestLen < 1) {
				best = backend;
				bestLen = 1;
			}
			continue;
		}
		if (target === root || target.startsWith(root)) {
			if (root.length > bestLen) {
				best = backend;
				bestLen = root.length;
			}
		}
	}
	return best;
}
var OPFS_SUPPORT_KEY = "cwsp.opfs.enabled";
var isOpfsSupportEnabledSync = () => {
	try {
		if (typeof localStorage === "undefined") return true;
		const value = localStorage.getItem(OPFS_SUPPORT_KEY);
		return value !== "0" && value !== "false";
	} catch {
		return true;
	}
};
var isOpfsCapabilityAvailableSync = () => typeof navigator !== "undefined" && typeof navigator.storage?.getDirectory === "function";
var isOpfsBackendActiveSync = () => isOpfsCapabilityAvailableSync() && isOpfsSupportEnabledSync();
var stripStoragePrefix = (path, scope) => {
	const vpath = String(path || "").replace(/^\/+/, "");
	const prefix = `${scope}/`;
	if (vpath.startsWith(prefix)) return `/${vpath.slice(prefix.length)}`;
	if (vpath === scope) return "/";
	return `/${vpath}`;
};
var listHandleDirectory = async (root, path) => {
	if (!root) return [];
	const segments = stripStoragePrefix(path, normalizeVirtualPath(path, true).startsWith("/idb/") ? "idb" : "user").split("/").filter(Boolean);
	let dir = root;
	for (const seg of segments) try {
		dir = await dir.getDirectoryHandle(seg, { create: false });
	} catch {
		return [];
	}
	const entries = [];
	try {
		for await (const [name, handle] of dir.entries()) {
			const kind = handle?.kind === "directory" ? "directory" : "file";
			const childPath = `${normalizeVirtualPath(path, true)}${name}${kind === "directory" ? "/" : ""}`;
			entries.push({
				name,
				kind,
				path: childPath
			});
		}
	} catch {
		return [];
	}
	return entries;
};
var readHandleFile = async (root, path, scope) => {
	if (!root) return null;
	const segments = stripStoragePrefix(path, scope).split("/").filter(Boolean);
	if (!segments.length) return null;
	let dir = root;
	for (const seg of segments.slice(0, -1)) try {
		dir = await dir.getDirectoryHandle(seg, { create: false });
	} catch {
		return null;
	}
	try {
		return await (await dir.getFileHandle(segments[segments.length - 1], { create: false })).getFile();
	} catch {
		return null;
	}
};
var bindFsBackendToProvide = (backend) => {
	if (backend.root === "/bookmarks/" || backend.root === "/downloads/") return;
	__vitePreload(async () => {
		const { registerProvideBackend } = await import("./core4.js").then((n) => n.t);
		return { registerProvideBackend };
	}, __vite__mapDeps([4,3,1,2,5,6,7,8,9]), import.meta.url).then(({ registerProvideBackend }) => {
		registerProvideBackend({
			root: backend.root,
			list: async (path) => {
				const rows = await backend.list(path);
				const base = normalizeVirtualPath(path, true);
				return rows.map((row) => ({
					name: row.name,
					kind: row.kind,
					path: row.path || `${base}${row.name}${row.kind === "directory" ? "/" : ""}`
				}));
			},
			readFile: backend.readFile,
			writeFile: backend.writeFile ? async (path, file) => {
				const slash = String(path || "").lastIndexOf("/");
				const parent = slash >= 0 ? path.slice(0, slash + 1) : backend.root;
				await backend.writeFile?.(parent, file);
				return true;
			} : void 0
		});
	}).catch(() => {});
};
var loadIdbRoot = async () => {
	if (typeof indexedDB === "undefined") return null;
	try {
		const { getIdbRoot } = await __vitePreload(async () => {
			const { getIdbRoot } = await import("./core4.js").then((n) => n.t);
			return { getIdbRoot };
		}, __vite__mapDeps([4,3,1,2,5,6,7,8,9]), import.meta.url);
		return await getIdbRoot();
	} catch {
		return null;
	}
};
var resolveUserHandleRoot = async () => {
	if (isOpfsBackendActiveSync()) try {
		return await navigator.storage.getDirectory();
	} catch {
		return null;
	}
	return loadIdbRoot();
};
var createStorageFsBackend = (root, getRoot) => {
	const scope = root === "/idb/" ? "idb" : "user";
	return {
		root,
		writable: true,
		async list(path) {
			return listHandleDirectory(await getRoot().catch(() => null), path);
		},
		async readFile(path) {
			return readHandleFile(await getRoot().catch(() => null), path, scope);
		},
		async mkdir(parentPath, name) {
			const handleRoot = await getRoot();
			if (!handleRoot) return;
			const segments = [...stripStoragePrefix(parentPath, scope).split("/").filter(Boolean), String(name || "").trim()].filter(Boolean);
			let dir = handleRoot;
			for (const seg of segments) dir = await dir.getDirectoryHandle(seg, { create: true });
		},
		async writeFile(parentPath, file) {
			const handleRoot = await getRoot();
			if (!handleRoot || !file) return;
			const segments = stripStoragePrefix(parentPath, scope).split("/").filter(Boolean);
			let dir = handleRoot;
			for (const seg of segments) dir = await dir.getDirectoryHandle(seg, { create: true });
			const writable = await (await dir.getFileHandle(file.name || `file-${Date.now()}`, { create: true })).createWritable();
			await writable.write(file);
			await writable.close();
		},
		async remove(path, recursive = true) {
			const handleRoot = await getRoot();
			if (!handleRoot) return;
			const segments = stripStoragePrefix(path, scope).replace(/\/+$/g, "").split("/").filter(Boolean);
			if (!segments.length) return;
			const name = segments.pop();
			let dir = handleRoot;
			for (const seg of segments) dir = await dir.getDirectoryHandle(seg, { create: false });
			await dir.removeEntry(name, { recursive });
		}
	};
};
function ensureDefaultFsBackends() {
	if (!resolveFsBackend("/user/")) registerFsBackend(createStorageFsBackend("/user/", resolveUserHandleRoot));
	if (isOpfsBackendActiveSync() && typeof indexedDB !== "undefined") {
		if (!resolveFsBackend("/idb/")) registerFsBackend(createStorageFsBackend("/idb/", loadIdbRoot));
	} else {
		unregisterFsBackend("/idb/");
		__vitePreload(async () => {
			const { unregisterProvideBackend } = await import("./core4.js").then((n) => n.t);
			return { unregisterProvideBackend };
		}, __vite__mapDeps([4,3,1,2,5,6,7,8,9]), import.meta.url).then(({ unregisterProvideBackend }) => {
			unregisterProvideBackend("/idb/");
		}).catch(() => {});
	}
	if (!resolveFsBackend("/assets/")) registerFsBackend({
		root: "/assets/",
		writable: false,
		async list(path) {
			try {
				const { tryRemoteMountedList } = await __vitePreload(async () => {
					const { tryRemoteMountedList } = await import("./core4.js").then((n) => n.t);
					return { tryRemoteMountedList };
				}, __vite__mapDeps([4,3,1,2,5,6,7,8,9]), import.meta.url);
				return await tryRemoteMountedList(path) ?? [];
			} catch {
				return [];
			}
		},
		async readFile(path) {
			const p = String(path || "").trim();
			if (!p || p.endsWith("/")) return null;
			try {
				const { tryRemoteMountedRead } = await __vitePreload(async () => {
					const { tryRemoteMountedRead } = await import("./core4.js").then((n) => n.t);
					return { tryRemoteMountedRead };
				}, __vite__mapDeps([4,3,1,2,5,6,7,8,9]), import.meta.url);
				const remote = await tryRemoteMountedRead(p);
				if (remote) return remote;
			} catch {}
			try {
				const r = await fetch(p);
				if (!r?.ok) return null;
				const blob = await r.blob();
				const name = p.slice(p.lastIndexOf("/") + 1) || "asset";
				return new File([blob], name, { type: blob.type || "" });
			} catch {
				return null;
			}
		}
	});
	__vitePreload(async () => {
		const { ensureRemoteMountedFs } = await import("./core4.js").then((n) => n.t);
		return { ensureRemoteMountedFs };
	}, __vite__mapDeps([4,3,1,2,5,6,7,8,9]), import.meta.url).then(({ ensureRemoteMountedFs }) => {
		ensureRemoteMountedFs();
	}).catch(() => {});
	if (!resolveFsBackend("/bookmarks/")) {
		const chromeAny = globalThis?.chrome;
		if (chromeAny?.bookmarks) {
			const backend = createChromeBookmarksBackend(chromeAny.bookmarks);
			if (backend) registerFsBackend(backend);
		}
	}
	if (!resolveFsBackend("/downloads/")) {
		const chromeAny = globalThis?.chrome;
		if (chromeAny?.downloads) {
			const backend = createChromeDownloadsBackend(chromeAny.downloads);
			if (backend) registerFsBackend(backend);
		}
	}
	if (isNativeStorageAvailable()) {
		if (!resolveFsBackend("/sdcard/")) registerFsBackend(createNativeFsBackend("/sdcard/"));
		if (!resolveFsBackend("/saf/")) registerFsBackend(createNativeFsBackend("/saf/"));
	}
	if (isNeutralinoFilesystemAvailable() && !resolveFsBackend("/desktop/")) resolveNeutralinoHome().then((home) => {
		if (!home || resolveFsBackend("/desktop/")) return;
		const backend = createNeutralinoFsBackend(home);
		if (backend) registerFsBackend(backend);
	});
	if (!resolveFsBackend("/mounts/")) ensureMountsRootBackend();
	observeUserFileSystem();
}
/**
* WHY: FileSystemObserver is Chromium-experimental. When present, OPFS
* mutations refresh Explorer without polling. Cap / SAF fall back to the
* toolbar refresh and `cwsp:explorer-mount-change`.
*/
var observeUserFileSystem = () => {
	if (typeof window === "undefined") return;
	const g = globalThis;
	const Ctor = g.FileSystemObserver;
	const getDir = g.navigator?.storage?.getDirectory;
	if (typeof Ctor !== "function" || typeof getDir !== "function") return;
	if (globalThis.__CWSP_USER_FS_OBS__) return;
	globalThis.__CWSP_USER_FS_OBS__ = true;
	getDir.call(g.navigator?.storage).then((root) => {
		return new Ctor(() => {
			window.dispatchEvent(new CustomEvent("cwsp:explorer-mount-change"));
		}).observe(root);
	}).catch(() => {
		globalThis.__CWSP_USER_FS_OBS__ = false;
	});
};
ensureDefaultFsBackends();
preloadStyle(app_menu_default);
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/speed-dial/widgets.ts
var androidBridge = null;
var getAndroidWidgetId = (item) => {
	const meta = getSpeedDialMeta(item.id);
	return Math.max(0, Number(meta?.androidWidgetId) || 0);
};
var boxFromElement = (widgetId, el) => {
	const rect = el.getBoundingClientRect();
	return {
		widgetId,
		x: rect.left,
		y: rect.top,
		w: Math.max(8, rect.width),
		h: Math.max(8, rect.height),
		dpr: Number(window.devicePixelRatio) || 1
	};
};
var syncAndroidWidgetHosts = (root) => {
	if (!androidBridge) return;
	const host = root || document.getElementById("home");
	if (!host) return;
	host.querySelectorAll("[data-speed-dial-item][data-widget=\"android\"][data-layer=\"icons\"]").forEach((node) => {
		const item = (speedDialItems || []).find((it) => it?.id === node.dataset.id);
		if (!item) return;
		const widgetId = getAndroidWidgetId(item);
		if (!widgetId) return;
		const box = boxFromElement(widgetId, node);
		androidBridge.widgetAttach(box);
	});
};
var hideAndroidWidgetHosts = () => {
	androidBridge?.widgetHideAll?.();
};
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/speed-dial/workspace-pages.ts
var WORKSPACES_ROOT = "/user/workspaces/";
var WORKSPACE_PAGE_EVENT = "cwsp:workspace-page";
var CATALOG_KEY = "cw::workspace::pages";
var slugPath = (id) => `${WORKSPACES_ROOT}${id}/`;
var defaultPages = () => [
	"side-a",
	"side-b",
	"side-c"
].map((id) => ({
	id,
	label: `Side ${id.slice(-1).toUpperCase()}`,
	path: slugPath(id)
}));
var emptyCatalog = () => ({
	activeId: "side-a",
	pages: defaultPages(),
	snapshots: {}
});
var readCatalog = () => {
	try {
		const raw = localStorage.getItem(CATALOG_KEY);
		if (!raw) return emptyCatalog();
		const parsed = JSON.parse(raw);
		if (!parsed || !Array.isArray(parsed.pages) || !parsed.pages.length) return emptyCatalog();
		return {
			activeId: String(parsed.activeId || parsed.pages[0].id),
			pages: parsed.pages.map((p) => ({
				id: String(p.id || "").trim(),
				label: String(p.label || p.id),
				path: String(p.path || slugPath(p.id))
			})).filter((p) => p.id),
			snapshots: parsed.snapshots && typeof parsed.snapshots === "object" ? parsed.snapshots : {}
		};
	} catch {
		return emptyCatalog();
	}
};
var slimSnapshot = (snap) => ({ items: (snap?.items || []).map((row) => {
	const iconUrl = String(row.meta?.iconUrl || "");
	if (!/^(data:|blob:)/i.test(iconUrl)) return row;
	const meta = { ...row.meta || {} };
	if (/^data:/i.test(iconUrl) && row.id) meta.iconUrl = persistSpeedDialIconBlob(String(row.id), iconUrl);
	else delete meta.iconUrl;
	return {
		...row,
		meta
	};
}) });
var writeCatalog = (catalog) => {
	try {
		localStorage.setItem(CATALOG_KEY, JSON.stringify(catalog));
	} catch (e) {
		console.warn("[workspace-pages] catalog persist failed", e);
	}
};
var emitPageChange = (id) => {
	try {
		window.dispatchEvent(new CustomEvent(WORKSPACE_PAGE_EVENT, { detail: {
			id,
			pages: listWorkspacePages()
		} }));
	} catch {}
};
var listWorkspacePages = () => readCatalog().pages;
var getActiveWorkspaceId = () => readCatalog().activeId || "side-a";
/** Keep the active page snapshot in sync with add/edit/remove grid mutations. */
var syncActiveWorkspaceSnapshot = () => {
	const cat = readCatalog();
	if (!cat.pages.some((page) => page.id === cat.activeId)) return;
	cat.snapshots[cat.activeId] = slimSnapshot(captureSpeedDialSnapshot());
	writeCatalog(cat);
};
try {
	const g = globalThis;
	if (!g.__CWSP_WORKSPACE_SNAPSHOT_SYNC_BOUND__) {
		g.__CWSP_WORKSPACE_SNAPSHOT_SYNC_BOUND__ = true;
		window.addEventListener(SPEED_DIAL_MUTATION_EVENT, syncActiveWorkspaceSnapshot);
	}
} catch {}
/** Best-effort Explorer tree: /user/workspaces/<id>/workspace.json */
var ensureWorkspaceExplorerDir = async (page) => {
	try {
		const backend = resolveFsBackend$1("/user/");
		if (!backend?.mkdir || !backend.writable) return;
		await backend.mkdir("/user/", "workspaces").catch(() => void 0);
		await backend.mkdir(WORKSPACES_ROOT, page.id).catch(() => void 0);
		if (backend.writeFile) {
			const blob = new File([JSON.stringify({
				id: page.id,
				label: page.label,
				path: page.path
			}, null, 2)], "workspace.json", { type: "application/json" });
			await backend.writeFile(page.path, blob).catch(() => void 0);
		}
	} catch (e) {
		console.warn("[workspace-pages] explorer dir failed", page.id, e);
	}
};
var prefersReducedMotion = () => {
	try {
		return matchMedia("(prefers-reduced-motion: reduce)").matches;
	} catch {
		return false;
	}
};
var workspaceTurnTargets = () => {
	const root = document.querySelector(".speed-dial-root") || document.getElementById("home");
	if (!root) return [];
	const grids = [...root.querySelectorAll(".speed-dial-grid")];
	return grids.length ? grids : [root];
};
var clearWorkspaceTurnGhosts = (root) => {
	const scope = root || (typeof document !== "undefined" ? document : null);
	if (!scope?.querySelectorAll) return;
	scope.querySelectorAll(".speed-dial-grid--turn-ghost").forEach((node) => node.remove());
	scope.querySelectorAll("[data-ws-turning]").forEach((el) => {
		delete el.dataset.wsTurning;
		el.querySelectorAll(".speed-dial-grid").forEach((grid) => {
			grid.style.opacity = "";
		});
	});
};
/**
* Clone outgoing tiles, then return a closer that turns the new page in.
* WHY: snapshot apply stays synchronous so rapid A→C clicks never persist the wrong page.
*/
var beginWorkspacePageTurn = (direction) => {
	const targets = workspaceTurnTargets();
	const root = targets[0]?.closest(".speed-dial-root") || targets[0] || null;
	clearWorkspaceTurnGhosts(root);
	if (!targets.length || prefersReducedMotion() || typeof targets[0].animate !== "function") return () => void 0;
	const dir = direction < 0 ? -1 : 1;
	const outDeg = `${-88 * dir}deg`;
	const inDeg = `${88 * dir}deg`;
	const outX = `${-18 * dir}%`;
	const inX = `${18 * dir}%`;
	const turnRoot = root || targets[0];
	turnRoot.dataset.wsTurning = dir > 0 ? "next" : "prev";
	const ghosts = [];
	for (const el of targets) {
		const ghost = el.cloneNode(true);
		ghost.classList.add("speed-dial-grid--turn-ghost");
		ghost.dataset.wsGhost = "1";
		ghost.setAttribute("aria-hidden", "true");
		el.parentElement?.insertBefore(ghost, el.nextSibling);
		el.style.opacity = "0";
		ghosts.push(ghost);
		ghost.animate([{
			transform: "translateX(0) rotateY(0deg)",
			opacity: 1
		}, {
			transform: `translateX(${outX}) rotateY(${outDeg})`,
			opacity: 0
		}], {
			duration: 180,
			easing: "cubic-bezier(.4, 0, .2, 1)",
			fill: "forwards"
		});
	}
	const finishCleanup = () => {
		for (const el of targets) el.style.opacity = "";
		for (const ghost of ghosts) ghost.remove();
		delete turnRoot.dataset.wsTurning;
	};
	return () => {
		const incoming = targets.map((el) => el.animate([{
			transform: `translateX(${inX}) rotateY(${inDeg})`,
			opacity: .2
		}, {
			transform: "translateX(0) rotateY(0deg)",
			opacity: 1
		}], {
			duration: 220,
			easing: "cubic-bezier(.22, 1, .36, 1)",
			fill: "none"
		}));
		const done = Promise.all(incoming.map((anim) => anim.finished.catch(() => void 0)));
		const watchdog = new Promise((resolve) => {
			setTimeout(resolve, 500);
		});
		Promise.race([done, watchdog]).then(finishCleanup);
	};
};
/**
* Persist the live Speed Dial into the active page, then load another page.
* INVARIANT: the in-memory `speedDialItems` array is always the active workspace.
*/
var switchWorkspacePage = (id) => {
	const cat = readCatalog();
	const next = cat.pages.find((p) => p.id === id);
	if (!next) return false;
	const currentId = cat.activeId || cat.pages[0].id;
	if (currentId === next.id) return true;
	const fromIdx = Math.max(0, cat.pages.findIndex((p) => p.id === currentId));
	let turnDir = Math.max(0, cat.pages.findIndex((p) => p.id === next.id)) - fromIdx;
	if (Math.abs(turnDir) > cat.pages.length / 2) turnDir += turnDir > 0 ? -cat.pages.length : cat.pages.length;
	cat.snapshots[currentId] = slimSnapshot(captureSpeedDialSnapshot());
	cat.activeId = next.id;
	writeCatalog(cat);
	hideAndroidWidgetHosts();
	const finishTurn = beginWorkspacePageTurn(turnDir);
	applySpeedDialSnapshot(cat.snapshots[next.id] || { items: [] });
	requestAnimationFrame(() => {
		finishTurn();
		requestAnimationFrame(() => syncAndroidWidgetHosts());
	});
	ensureWorkspaceExplorerDir(next);
	emitPageChange(next.id);
	return true;
};
//#endregion
//#region ../../modules/projects/veela.css/src/scss/ui/components/taskbar.scss?inline
var taskbar_default = "@layer components{ui-taskbar{gap:0 0!important;padding:0!important}ui-taskbar::part(taskbar){display:grid!important;gap:0 0!important;grid-template-columns:minmax(0,max-content) minmax(0,1fr) minmax(0,max-content);padding:0!important}ui-taskbar ui-task{margin:0!important}.env-shell-chrome{color:var(--color-on-surface,var(--wf-md-on-surface-variant,#1c1c1e));display:flex;flex-direction:column;font:12px ui-sans-serif,system-ui,sans-serif;gap:0!important;inset-block-end:0;inset-inline:0;isolation:isolate;padding:0!important;pointer-events:none;position:fixed;z-index:var(--env-z-shell-chrome,2147483000)}.env-shell-chrome[data-desktop]{box-shadow:0 -8px 28px rgba(0,0,0,.28)}.env-shell-chrome>*{pointer-events:auto}.env-shell-taskbar{--env-taskbar-surface:color-mix(in oklab,var(--color-surface-container-high,--u2-color-mod(var(--base-color,#5a9ec8),980)) 88%,transparent);--env-taskbar-ink:var(\n        --color-on-surface,light-dark(--u2-color-mod(var(--base-color,#5a9ec8),900),--u2-color-mod(var(--base-color,#5a9ec8),100))\n    );--env-taskbar-accent:var(--wf-md-primary,var(--color-primary,#5a9ec8));align-items:stretch;backdrop-filter:blur(22px) saturate(1.35);-webkit-backdrop-filter:blur(22px) saturate(1.35);background:var(--env-taskbar-surface);block-size:2.5rem;border-block-start:1px solid light-dark(color-mix(in oklab,#000 10%,transparent),color-mix(in oklab,#fff 14%,transparent));box-shadow:none;color-scheme:inherit;display:flex;flex-direction:row;flex-wrap:nowrap;gap:.15rem;min-block-size:2.5rem;order:0;padding:0 .25rem;padding-block-end:env(safe-area-inset-bottom,0);position:relative}.env-shell-taskbar,.env-shell-taskbar ui-icon{--icon-color:var(--env-taskbar-ink);color:var(--env-taskbar-ink)}.env-shell-taskbar::part(taskbar){align-items:stretch;display:flex;flex:1;flex-direction:row;flex-wrap:nowrap;gap:.15rem;inline-size:100%;min-inline-size:0}.env-shell-taskbar__pins,.env-shell-taskbar__windows{align-items:stretch;display:flex;flex-direction:row;flex-wrap:nowrap;gap:0 0;margin:0;min-inline-size:0}.env-shell-taskbar__workspaces{align-items:center;display:none;flex-direction:row;gap:.25rem;margin-inline-start:.35rem}.env-shell-taskbar__workspace{background:color-mix(in oklab,CanvasText 10%,transparent);border:none;border-radius:.35rem;color:inherit;cursor:pointer;font:inherit;font-size:.7rem;min-block-size:1.35rem;min-inline-size:1.35rem;padding:0 .35rem}.env-shell-taskbar__workspace[data-active]{background:color-mix(in oklab,CanvasText 22%,transparent);font-weight:650}.env-shell-chrome[data-desktop] .env-shell-taskbar__workspaces{display:flex}.env-shell-taskbar__pins{content-visibility:visible;flex:0 0 auto;gap:0 0;inline-size:stretch;margin:0}.env-shell-taskbar__pins [data-env-home]{color:inherit;content-visibility:visible;--icon-color:currentColor;background:color-mix(in oklab,var(--env-taskbar-surface) 60%,transparent)!important;background-color:color-mix(in oklab,var(--env-taskbar-surface) 60%,transparent)!important}.env-shell-taskbar__pins ui-task{backdrop-filter:blur(22px) saturate(1.35);-webkit-backdrop-filter:blur(22px) saturate(1.35);box-shadow:inset 0 -2px 0 var(--env-taskbar-accent)}.env-shell-taskbar__pins ui-task::part(glyph),.env-shell-taskbar__pins ui-task::part(icon){color:var(--env-taskbar-ink);--icon-color:var(--env-taskbar-ink)}.env-shell-taskbar__windows{flex:1 1 auto;inline-size:stretch;justify-content:flex-start;overflow-x:auto;scrollbar-width:thin}.env-shell-taskbar ui-task{align-self:stretch;background:transparent;border:0;border-radius:0;box-shadow:inset 0 -2px 0 transparent;color:inherit;cursor:pointer;inline-size:fit-content;min-block-size:100%;min-inline-size:2.75rem;opacity:1;outline:none;padding-inline:.55rem}.env-shell-taskbar ui-task:hover{background:color-mix(in oklab,var(--env-taskbar-ink) 10%,transparent);color:var(--env-taskbar-ink);opacity:1}.env-shell-taskbar :is(ui-task[data-active],ui-task[data-env-active=true],ui-task[data-focus]){background:color-mix(in oklab,var(--env-taskbar-surface) 12%,transparent);box-shadow:inset 0 -2px 0 var(--env-taskbar-accent);color:var(--env-taskbar-ink);opacity:1;outline:none}.env-shell-taskbar ui-task[data-minimized]{opacity:.65}.env-shell-taskbar__tray-host{align-items:center;border-inline-start:1px solid light-dark(color-mix(in oklab,#000 10%,transparent),color-mix(in oklab,#fff 12%,transparent));display:flex;flex:0 0 auto;gap:.35rem;margin-inline-start:auto;padding-inline:.35rem}.env-shell-taskbar__clock{align-items:flex-end;border-radius:.35rem;cursor:pointer;display:flex;flex-direction:column;gap:.05rem;inline-size:fit-content;justify-content:center;line-height:1.05;min-inline-size:4rem;padding-inline:.35rem .15rem;pointer-events:auto;user-select:none}.env-shell-taskbar__clock,.env-shell-taskbar__clock .env-shell-taskbar__clock-date,.env-shell-taskbar__clock .env-shell-taskbar__clock-time{font-variant-numeric:tabular-nums}.env-shell-taskbar__clock:focus-visible,.env-shell-taskbar__clock:hover{background:color-mix(in oklab,var(--env-taskbar-ink) 10%,transparent);color:var(--env-taskbar-ink);outline:none}.env-device-tray--taskbar{border-radius:.35rem;cursor:pointer;pointer-events:auto}.env-device-tray--taskbar:focus-visible,.env-device-tray--taskbar:hover{background:color-mix(in oklab,var(--env-taskbar-ink) 10%,transparent);color:var(--env-taskbar-ink);outline:none}.env-shell-taskbar__clock-time{color:inherit;font-size:.78rem;font-variant-numeric:tabular-nums;font-weight:600}.env-shell-taskbar__clock-date{color:color-mix(in oklab,currentColor 72%,transparent);font-size:.62rem;font-variant-numeric:tabular-nums;font-weight:500;white-space:nowrap}.env-shell-chrome[data-desktop] .env-shell-taskbar ui-task::part(title){display:none!important}.env-shell-chrome[data-desktop] .env-shell-taskbar ui-task{min-inline-size:2.5rem;padding-inline:.45rem}.env-shell-chrome[data-desktop] .env-shell-taskbar ui-task::part(icon){block-size:1.35rem;inline-size:1.35rem}.env-shell-chrome[data-desktop] .env-shell-taskbar ui-task::part(glyph){block-size:1.35rem;inline-size:1.35rem}.env-shell-chrome[data-desktop] .env-shell-taskbar ui-task[data-env-home]::part(icon){block-size:1.75rem;inline-size:1.75rem;min-block-size:1.75rem;min-inline-size:1.75rem}.env-shell-chrome[data-desktop] .env-shell-taskbar ui-task[data-env-home]::part(glyph){block-size:100%;inline-size:100%;--icon-size:100%;--icon-padding:0.05rem}.env-shell-chrome[data-desktop] .env-shell-taskbar ui-task::part(letter){font-size:.8rem}.env-shell-chrome[data-desktop] .env-shell-taskbar__pins{background:transparent;background-color:initial;border:0 transparent;margin:0;outline:0 none transparent;padding:0}.env-shell-chrome[data-desktop] .env-shell-taskbar ui-task[data-env-home],.env-shell-chrome[data-desktop] .env-shell-taskbar__pins{backdrop-filter:none;-webkit-backdrop-filter:none;border-radius:0;box-shadow:0 0 0 none transparent;margin-inline-end:.2rem;min-inline-size:2.75rem}.env-shell-chrome[data-desktop] .env-shell-taskbar ui-task[data-env-home]{border:0 transparent;display:inline-flex!important;outline:none;outline:0 none transparent;transform:none}.env-shell-chrome[data-desktop] .env-shell-taskbar :is(ui-task[data-env-home]:focus-visible,ui-task[data-env-home]:hover){background:color-mix(in oklab,var(--env-taskbar-accent) 32%,transparent)}.env-shell-chrome[data-desktop] .env-shell-taskbar :is(ui-task[data-env-home][data-active],ui-task[data-env-home][data-env-active=true],ui-task[data-env-home][data-focus]){background:color-mix(in oklab,var(--env-taskbar-accent) 28%,transparent)}.env-shell-chrome:not([data-desktop]) .env-shell-taskbar{backdrop-filter:none;-webkit-backdrop-filter:none;background:transparent;block-size:3rem;border-block-start:none;box-shadow:none;color:var(--env-status-fg,var(--env-taskbar-ink));display:block;gap:0;inline-size:100%;min-block-size:3rem;padding:.15rem .75rem;padding-block-end:.15rem;place-self:stretch;position:relative;--icon-color:currentColor;pointer-events:none}.env-shell-chrome:not([data-desktop]) .env-shell-taskbar::part(taskbar){block-size:100%;display:block!important;grid-template-columns:none!important;inline-size:100%;position:relative}.env-shell-chrome:not([data-desktop]) .env-shell-taskbar__pins{display:contents}.env-shell-chrome:not([data-desktop]) .env-shell-taskbar__pins ui-task:not([data-env-home]),.env-shell-chrome:not([data-desktop]) .env-shell-taskbar__tray-host,.env-shell-chrome:not([data-desktop]) .env-shell-taskbar__windows{display:none!important}.env-shell-chrome:not([data-desktop]) .env-shell-taskbar ui-task[data-env-home]{background:color-mix(in oklab,var(--color-surface-container-high,--u2-color-mod(var(--base-color,#5a9ec8),980)) 88%,transparent);border-radius:999px;bottom:.22rem;box-shadow:0 6px 20px -8px color-mix(in oklab,#000 45%,transparent);left:auto;margin:0;min-block-size:2.5rem;min-inline-size:2.5rem;padding:0;pointer-events:auto;position:absolute;right:calc(.7rem + env(safe-area-inset-right, 0px));top:auto;touch-action:manipulation;user-select:none;z-index:1}.env-shell-chrome:not([data-desktop]) .env-shell-taskbar ui-task[data-env-home]::part(title){display:none!important}.env-shell-chrome:not([data-desktop]) .env-shell-taskbar ui-task[data-env-home]::part(icon){block-size:1.7rem;inline-size:1.7rem;min-block-size:1.7rem;min-inline-size:1.7rem}.env-shell-chrome:not([data-desktop]) .env-shell-taskbar ui-task[data-env-home]::part(glyph){block-size:100%;inline-size:100%;--icon-padding:0.1rem;--icon-size:100%;opacity:1}.env-shell-chrome:not([data-desktop]) .env-shell-taskbar ui-task[data-env-home]::part(letter){opacity:0}.env-shell-chrome:not([data-desktop]) .env-shell-taskbar :is(ui-task[data-env-home]:active,ui-task[data-env-home]:hover){background:color-mix(in oklch,#fff 10%,transparent);color:contrast-color(inherit(background-color))}.env-shell-chrome:not([data-desktop]) .env-shell-taskbar :is(ui-task[data-env-home][data-active],ui-task[data-env-home][data-env-active=true],ui-task[data-env-home][data-focus]){background:color-mix(in oklch,#fff 8%,transparent);color:contrast-color(inherit(background-color))}.env-shell-chrome:not([data-desktop]):not([data-status-overlay]) .env-ui-statusbar{display:none!important}}";
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/navigation/taskbar/element/TaskBar.ts
var styled$2 = preloadStyle(taskbar_default);
var UITaskBar = class UITaskBar extends UIElement_default {
	constructor() {
		super();
	}
	styles = () => styled$2;
	render = () => H`<div part="taskbar" class="taskbar"><slot></slot></div>`;
};
UITaskBar = __decorate([defineElement("ui-taskbar")], UITaskBar);
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/navigation/taskbar/element/Task.ts
var styled$1 = preloadStyle(":host(ui-task),:host(ui-task) *{box-sizing:border-box;touch-action:manipulation;user-select:none;-webkit-user-drag:none;-webkit-tap-highlight-color:transparent;border:0 transparent;gap:0;margin:0;padding:0}:host(ui-task){align-items:center;border-radius:.5rem;box-shadow:none;cursor:pointer;display:inline-flex;filter:none;flex-direction:row;gap:.35rem;justify-content:center;min-block-size:2.25rem;min-inline-size:2.25rem;padding-block:.25rem;padding-inline:.45rem;pointer-events:auto;user-select:none}:host(ui-task)>*{pointer-events:none}:host(ui-task) .task-icon{block-size:1.25rem;display:inline-flex;inline-size:1.25rem;line-height:0;min-block-size:1.25rem;min-inline-size:1.25rem;place-content:center;place-items:center;position:relative}:host(ui-task) .task-letter{color:currentColor;display:grid;font-size:.72rem;font-weight:700;inset:0;letter-spacing:0;line-height:1;opacity:.92;place-content:center;place-items:center;pointer-events:none;position:absolute;user-select:none;z-index:0}:host(ui-task) .task-icon-glyph{block-size:100%;color:currentColor;inline-size:100%;min-block-size:1rem;min-inline-size:1rem;position:relative;z-index:1}:host(ui-task) .task-icon:has(ui-icon[icon]:not([icon=\"\"])) .task-letter{opacity:.35}:host(ui-task) .task-icon:has(ui-icon[icon]:not([icon=\"\"]):not([icon=app-window])) .task-letter{opacity:0}:host(ui-task) .task-title{font-size:.75rem;font-weight:500;line-height:1.2;max-inline-size:8rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(ui-task:hover){--background-tone-shift:0.1;background-color:--c2-surface(var(--background-tone-shift,0),var(--current));color:contrast-color(var(--background-tone-shift,0),var(--current))}:host(ui-task[data-focus]){border-block-end-color:--c2-on-surface(0,var(--current))!important}:host(ui-task:not([data-active])){opacity:.6}");
/** First letter for blank-glyph fallback — never String(undefined)→"U". */
var titleLetter = (title) => {
	let s = "";
	if (typeof title === "string") s = title;
	else if (title != null && typeof title === "object" && "value" in title) {
		const v = title.value;
		s = v == null ? "" : String(v);
	} else if (title != null && typeof title !== "object") s = String(title);
	if (!s || s === "undefined" || s === "null" || s === "[object Object]") s = "";
	const ch = s.trim().charAt(0);
	return ch ? ch.toUpperCase() : "?";
};
var attrString = (el, name, fallback) => {
	const raw = el.getAttribute(name);
	if (raw != null && String(raw).trim()) return String(raw).trim();
	return fallback;
};
var UITask = class UITask extends UIElement_default {
	title;
	icon;
	constructor() {
		super();
	}
	styles = () => styled$1;
	render = function() {
		const titleText = attrString(this, "title", "Task");
		const iconName = attrString(this, "icon", "app-window");
		const letter = titleLetter(titleText);
		return H`
            <div part="icon" class="task-icon c2-contrast c2-transparent" data-letter=${letter}>
                <span class="task-letter" part="letter" aria-hidden="true">${letter}</span>
                <ui-icon class="c2-contrast c2-transparent task-icon-glyph" part="glyph" icon=${iconName} icon-style="duotone"></ui-icon>
            </div>
            <div part="title" class="task-title c2-contrast c2-transparent">${titleText}</div>
        `;
	};
};
__decorate([property({ source: "attr" })], UITask.prototype, "title", void 0);
__decorate([property({ source: "attr" })], UITask.prototype, "icon", void 0);
UITask = __decorate([defineElement("ui-task")], UITask);
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/navigation/appearance/Desktop.ts
preloadStyle("ui-taskbar[data-type=desktop]>ui-task[data-focus]{background:--c2-surface(0,var(--current));color:--c2-on-surface(0,var(--current))}@supports (color:contrast-color(red)){ui-taskbar[data-type=desktop]>ui-task[data-focus]{color:contrast-color(var(--c2-surface(0,var(--current))))}}:host(ui-taskbar[data-type=desktop]) ::slotted(ui-task[data-focus]){background:--c2-surface(0,var(--current));color:--c2-on-surface(0,var(--current))}@supports (color:contrast-color(red)){:host(ui-taskbar[data-type=desktop]) ::slotted(ui-task[data-focus]){color:contrast-color(var(--c2-surface(0,var(--current))))}}");
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/navigation/appearance/Mobile.ts
preloadStyle("ui-taskbar[data-type=mobile]>ui-task[data-focus]{background:--c2-surface(0,var(--current));color:--c2-on-surface(0,var(--current))}@supports (color:contrast-color(red)){ui-taskbar[data-type=mobile]>ui-task[data-focus]{color:contrast-color(var(--c2-surface(0,var(--current))))}}:host(ui-taskbar[data-type=mobile]) ::slotted(ui-task[data-focus]){background:--c2-surface(0,var(--current));color:--c2-on-surface(0,var(--current))}@supports (color:contrast-color(red)){:host(ui-taskbar[data-type=mobile]) ::slotted(ui-task[data-focus]){color:contrast-color(var(--c2-surface(0,var(--current))))}}");
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/containers/window/native-window-chrome.ts
function readWco() {
	try {
		return globalThis.navigator?.windowControlsOverlay ?? null;
	} catch {
		return null;
	}
}
var cachedDisplayMode = null;
function matchDisplayMode() {
	if (cachedDisplayMode) return cachedDisplayMode;
	if (typeof globalThis.matchMedia !== "function") return "unknown";
	try {
		if (globalThis.matchMedia("(display-mode: window-controls-overlay)").matches) return cachedDisplayMode = "window-controls-overlay";
		if (globalThis.matchMedia("(display-mode: fullscreen)").matches) return cachedDisplayMode = "fullscreen";
		if (globalThis.matchMedia("(display-mode: standalone)").matches) return cachedDisplayMode = "standalone";
		if (globalThis.matchMedia("(display-mode: minimal-ui)").matches) return cachedDisplayMode = "minimal-ui";
		if (globalThis.matchMedia("(display-mode: browser)").matches) return cachedDisplayMode = "browser";
	} catch {}
	return cachedDisplayMode = "unknown";
}
function readTitlebarRect(wco) {
	if (!wco?.visible || typeof wco.getTitlebarAreaRect !== "function") return null;
	try {
		const r = wco.getTitlebarAreaRect();
		if (!r) return null;
		return {
			x: r.x,
			y: r.y,
			width: r.width,
			height: r.height
		};
	} catch {
		return null;
	}
}
/**
* Snapshot of native chrome capability for a host that requested `native-mode`.
*/
function probeNativeWindowChrome(requested) {
	const wco = readWco();
	const wcoVisible = Boolean(wco?.visible);
	const displayMode = matchDisplayMode();
	const isStandaloneLike = wcoVisible || displayMode === "standalone" || displayMode === "fullscreen" || displayMode === "window-controls-overlay" || displayMode === "minimal-ui";
	let surface = "off";
	if (requested) if (wcoVisible) surface = "wco";
	else if (isStandaloneLike) surface = "standalone";
	else surface = "fallback";
	return {
		requested,
		wcoVisible,
		displayMode,
		titlebarRect: readTitlebarRect(wco),
		isStandaloneLike,
		surface
	};
}
/**
* Subscribe to WCO + display-mode changes. Returns dispose.
*/
function subscribeNativeWindowChrome(options) {
	const emit = () => {
		cachedDisplayMode = null;
		options.onChange(probeNativeWindowChrome(options.getRequested()));
	};
	const mqs = [];
	if (typeof globalThis.matchMedia === "function") for (const q of [
		"(display-mode: window-controls-overlay)",
		"(display-mode: standalone)",
		"(display-mode: fullscreen)",
		"(display-mode: minimal-ui)",
		"(display-mode: browser)"
	]) try {
		mqs.push(globalThis.matchMedia(q));
	} catch {}
	const onMq = () => emit();
	for (const mq of mqs) try {
		mq.addEventListener?.("change", onMq);
	} catch {
		try {
			mq.addListener?.(onMq);
		} catch {}
	}
	const wco = readWco();
	const onGeo = () => emit();
	try {
		wco?.addEventListener?.("geometrychange", onGeo);
	} catch {}
	queueMicrotask(emit);
	return () => {
		for (const mq of mqs) try {
			mq.removeEventListener?.("change", onMq);
		} catch {
			try {
				mq.removeListener?.(onMq);
			} catch {}
		}
		try {
			wco?.removeEventListener?.("geometrychange", onGeo);
		} catch {}
	};
}
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/containers/window/native-theme-color.ts
/**
* WHY: Installed PWA / Window Controls Overlay paints the OS title strip from
* `<meta name="theme-color">`. While a managed `ui-window` is in native-mode
* (or fills the viewport), that meta must match **this window's** `.title-handler`.
*
* INVARIANT: while owned, this module owns `meta[name=theme-color]`
* (see `isNativeThemeColorOwned`). DynamicEngine must not overwrite with
* wallpaper / ambient `elementsFromPoint` samples.
*
* AI-READ: Never sample via `elementsFromPoint` — when the titlebar is thin or
* WCO-padded, hits fall through to the env wallpaper canvas.
*/
var themeColorBeforeNative = null;
var themeAttrWatch = null;
var metaContentWatch = null;
var paintProbe = null;
var ownedNativeHost = null;
/** Last hex we intentionally wrote — used to fight ambient overwrites. */
var lastAppliedHex = null;
/** PERF: one token resolve per theme; paintVarOnHost + getComputedStyle froze opens. */
var cachedSurfaceHex = null;
var themeSampleHandle = 0;
var themeSampleHost = null;
/** Warm light surface — matches `index.html` default (not VS Code blue). */
var FALLBACK_WARM = "#cbb8a4";
var OWNER_KEY = "__CWSP_NATIVE_THEME_COLOR_OWNED__";
/** VS Code / Chromium-default blues that must never stick under WCO. */
var isForbiddenThemeColor = (raw) => {
	const t = String(raw || "").trim().toLowerCase();
	if (!t) return false;
	if (t === "#007acc" || t === "#007accff") return true;
	if (t === "#36c" || t === "#3366cc") return true;
	const m = t.match(/^rgba?\(\s*([\d.]+)\s*[, ]\s*([\d.]+)\s*[, ]\s*([\d.]+)/i);
	if (m && (t?.startsWith?.("#") || t?.startsWith?.("rgb"))) {
		const r = Math.round(Number(m[1]));
		const g = Math.round(Number(m[2]));
		const b = Math.round(Number(m[3]));
		if (r <= 20 && g >= 100 && g <= 140 && b >= 180 && b <= 220) return true;
	}
	return false;
};
/** True while a native immersive window drives theme-color. */
var isNativeThemeColorOwned = () => {
	try {
		return Boolean(globalThis?.[OWNER_KEY]);
	} catch {
		return false;
	}
};
var setOwned = (host) => {
	ownedNativeHost = host;
	try {
		globalThis[OWNER_KEY] = Boolean(host);
	} catch {}
};
/** True when a window chrome fills the viewport top (native or maximized). */
var isViewportCoveringWindow = (host) => {
	if (!host || !host.isConnected || host.hasAttribute("minimized")) return false;
	if (host.hasAttribute("native-mode")) return true;
	return host.hasAttribute("maximized") || host.hasAttribute("data-desk-max") || host.hasAttribute("data-mobile-max") || host.hasAttribute("data-native-active");
};
/** Prefer focused/native covering window for theme-color ownership. */
var findThemeColorOwnerWindow = () => {
	if (typeof document === "undefined") return null;
	if (ownedNativeHost?.isConnected && isViewportCoveringWindow(ownedNativeHost)) return ownedNativeHost;
	const natives = Array.from(document.querySelectorAll("ui-window[native-mode]:not([minimized])"));
	if (natives.length) return natives[natives.length - 1];
	const candidates = Array.from(document.querySelectorAll("ui-window[data-desk-max]:not([minimized]), ui-window[maximized]:not([minimized]), ui-window[data-mobile-max]:not([minimized])"));
	for (let i = candidates.length - 1; i >= 0; i--) {
		const el = candidates[i];
		if (isViewportCoveringWindow(el)) return el;
	}
	return null;
};
var ensureThemeAttrWatch = () => {
	if (themeAttrWatch || typeof MutationObserver === "undefined" || typeof document === "undefined") return;
	themeAttrWatch = new MutationObserver(() => {
		cachedSurfaceHex = null;
		const host = findThemeColorOwnerWindow();
		if (host?.isConnected) syncThemeColorFromNativeWindow(host);
		else syncAmbientThemeColor();
	});
	themeAttrWatch.observe(document.documentElement, {
		attributes: true,
		attributeFilter: [
			"data-theme",
			"class",
			"style",
			"color-scheme"
		]
	});
};
/** Fight DynamicEngine / wallpaper ambient writers while we own the meta. */
var ensureMetaContentWatch = (meta) => {
	if (metaContentWatch || typeof MutationObserver === "undefined") return;
	metaContentWatch = new MutationObserver(() => {
		if (!isNativeThemeColorOwned()) return;
		const cur = (meta.getAttribute("content") || "").toLowerCase();
		const expected = (lastAppliedHex || "").toLowerCase();
		if (expected && cur === expected && !isForbiddenThemeColor(cur)) return;
		const host = findThemeColorOwnerWindow();
		if (host) syncThemeColorFromNativeWindow(host);
		else if (isForbiddenThemeColor(cur)) applyMetaHex(FALLBACK_WARM, true);
	});
	metaContentWatch.observe(meta, {
		attributes: true,
		attributeFilter: ["content"]
	});
};
/** Resolve any CSS color (oklch / color-mix / var-resolved) to opaque #rrggbb via canvas. */
var resolveCssColorToHex = (css) => {
	const t = String(css || "").trim();
	if (!t || t === "transparent" || t === "rgba(0, 0, 0, 0)") return null;
	const hexMatch = t.match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i);
	if (hexMatch) {
		let h = hexMatch[1];
		if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
		else if (h.length === 8) h = h.slice(0, 6);
		const hex = `#${h.toLowerCase()}`;
		return isForbiddenThemeColor(hex) ? null : hex;
	}
	const m = t.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)$/i);
	if (m) {
		const alpha = m[4] !== void 0 ? Number(m[4]) : 1;
		if (!Number.isFinite(alpha) || alpha < .5) return null;
		const hex = `#${[
			Math.max(0, Math.min(255, Math.round(Number(m[1])))),
			Math.max(0, Math.min(255, Math.round(Number(m[2])))),
			Math.max(0, Math.min(255, Math.round(Number(m[3]))))
		].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
		return isForbiddenThemeColor(hex) ? null : hex;
	}
	const m2 = t.match(/^rgba?\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+%?))?\s*\)$/i);
	if (m2) {
		let alpha = 1;
		if (m2[4] !== void 0) alpha = String(m2[4]).endsWith("%") ? Number(m2[4]) / 100 : Number(m2[4]);
		if (!Number.isFinite(alpha) || alpha < .5) return null;
		const hex = `#${[
			Math.max(0, Math.min(255, Math.round(Number(m2[1])))),
			Math.max(0, Math.min(255, Math.round(Number(m2[2])))),
			Math.max(0, Math.min(255, Math.round(Number(m2[3]))))
		].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
		return isForbiddenThemeColor(hex) ? null : hex;
	}
	try {
		if (typeof document === "undefined") return null;
		if (!paintProbe) {
			paintProbe = document.createElement("canvas");
			paintProbe.width = 1;
			paintProbe.height = 1;
		}
		const ctx = paintProbe.getContext("2d", { willReadFrequently: true });
		if (!ctx) return null;
		ctx.fillStyle = "#000000";
		ctx.fillStyle = t;
		const resolved = String(ctx.fillStyle || "");
		if (resolved.startsWith("#") && resolved.length >= 7) {
			const hex = resolved.slice(0, 7).toLowerCase();
			return isForbiddenThemeColor(hex) ? null : hex;
		}
		return resolveCssColorToHex(resolved);
	} catch {
		return null;
	}
};
var ensureThemeColorMeta = () => {
	if (typeof document === "undefined") return null;
	let meta = document.querySelector("meta[data-theme-color]") || document.querySelector("meta[name=\"theme-color\"]");
	if (!meta) {
		meta = document.createElement("meta");
		meta.setAttribute("name", "theme-color");
		meta.setAttribute("data-theme-color", "");
		document.head?.appendChild(meta);
	}
	try {
		const all = Array.from(document.querySelectorAll("meta[name=\"theme-color\"]"));
		for (const extra of all) {
			if (extra === meta) continue;
			extra.remove();
		}
	} catch {}
	ensureMetaContentWatch(meta);
	return meta;
};
var paintVarOnHost = (host, cssBackground) => {
	try {
		const probe = document.createElement("div");
		probe.setAttribute("data-theme-color-probe", "true");
		probe.style.cssText = `position:fixed;left:-8px;top:-8px;inline-size:4px;block-size:4px;pointer-events:none;opacity:0;background:${cssBackground}`;
		host.appendChild(probe);
		const hex = resolveCssColorToHex(getComputedStyle(probe).backgroundColor);
		probe.remove();
		return hex;
	} catch {
		return null;
	}
};
/** Resolve `--color-surface-container` once — later opens reuse the hex. */
var surfaceTokenHex = () => {
	if (cachedSurfaceHex) return cachedSurfaceHex;
	try {
		cachedSurfaceHex = resolveCssColorToHex(getComputedStyle(document.documentElement).getPropertyValue("--color-surface-container").trim()) || paintVarOnHost(document.documentElement, "var(--color-surface-container, Canvas)") || FALLBACK_WARM;
	} catch {
		cachedSurfaceHex = FALLBACK_WARM;
	}
	return cachedSurfaceHex;
};
/**
* Sample the window titlebar — CSS only.
* WHY: never `elementsFromPoint` — hits fall through to wallpaper under WCO / thin bars.
*/
var sampleTitlebarHex = (host) => {
	const body = host.querySelector(".env-ui-window__body");
	const chrome = body?.querySelector(".settings-screen__top, .view-settings, .view-explorer, .cw-view-viewer-shell") || body;
	if (chrome) {
		const fromChrome = resolveCssColorToHex(getComputedStyle(chrome).backgroundColor);
		if (fromChrome) return fromChrome;
	}
	return surfaceTokenHex();
};
var applyMetaHex = (hex, forceReinsert = false) => {
	const meta = ensureThemeColorMeta();
	if (!meta || !hex) return;
	let next = hex.toLowerCase();
	if (isForbiddenThemeColor(next)) next = FALLBACK_WARM;
	const prev = (meta.getAttribute("content") || "").toLowerCase();
	if (prev === next && !forceReinsert && !isForbiddenThemeColor(prev)) return;
	meta.setAttribute("content", next);
	meta.setAttribute("data-theme-color", "");
	meta.removeAttribute("media");
	lastAppliedHex = next;
	if (forceReinsert || prev !== next || isForbiddenThemeColor(prev)) try {
		const parent = meta.parentNode || document.head;
		parent?.removeChild(meta);
		parent?.appendChild(meta);
	} catch {}
};
/** Sample page surface for ambient WCO (desktop with no covering window). */
var syncAmbientThemeColor = () => {
	if (typeof document === "undefined") return;
	if (findThemeColorOwnerWindow()) return;
	setOwned(null);
	lastAppliedHex = null;
	const meta = ensureThemeColorMeta();
	if (!meta) return;
	const root = document.documentElement;
	const cs = getComputedStyle(root);
	const bodyCs = document.body ? getComputedStyle(document.body) : null;
	const hex = resolveCssColorToHex(cs.getPropertyValue("--color-surface-container").trim()) || resolveCssColorToHex(cs.getPropertyValue("--color-surface").trim()) || resolveCssColorToHex(cs.getPropertyValue("--ui-win-titlebar-bg").trim()) || (bodyCs ? resolveCssColorToHex(bodyCs.backgroundColor) : null) || resolveCssColorToHex(cs.backgroundColor);
	if (hex) applyMetaHex(hex);
	else if (isForbiddenThemeColor(String(meta.getAttribute("content") || ""))) applyMetaHex(FALLBACK_WARM, true);
	ensureThemeAttrWatch();
};
var isMaxChrome = (host) => host.hasAttribute("maximized") || host.hasAttribute("data-desk-max") || host.hasAttribute("data-mobile-max") || host.hasAttribute("data-native-active");
var cancelThemeSample = () => {
	if (!themeSampleHandle) return;
	if (typeof cancelIdleCallback === "function") try {
		cancelIdleCallback(themeSampleHandle);
	} catch {
		clearTimeout(themeSampleHandle);
	}
	else clearTimeout(themeSampleHandle);
	themeSampleHandle = 0;
	themeSampleHost = null;
};
var scheduleThemeSample = (host) => {
	themeSampleHost = host;
	if (themeSampleHandle) return;
	const run = () => {
		themeSampleHandle = 0;
		const h = themeSampleHost;
		themeSampleHost = null;
		if (!h?.isConnected) return;
		if (h.hasAttribute("minimized")) return;
		if (!h.hasAttribute("native-mode") && !isMaxChrome(h)) return;
		applyMetaHex(sampleTitlebarHex(h) || FALLBACK_WARM, false);
		ensureThemeAttrWatch();
	};
	if (typeof requestIdleCallback === "function") themeSampleHandle = requestIdleCallback(run, { timeout: 120 });
	else themeSampleHandle = setTimeout(run, 0);
};
/** Push **this** window's titlebar fill into meta theme-color (native or viewport-covering). */
var syncThemeColorFromNativeWindow = (host) => {
	if (!host || typeof document === "undefined") return;
	if (host.hasAttribute("minimized")) return;
	if (!host.hasAttribute("native-mode") && !isMaxChrome(host) && !isViewportCoveringWindow(host)) return;
	const meta = ensureThemeColorMeta();
	if (!meta) return;
	if (themeColorBeforeNative == null) {
		const prev = meta.getAttribute("content") || "";
		themeColorBeforeNative = isForbiddenThemeColor(prev) ? "" : prev;
	}
	setOwned(host);
	if (isForbiddenThemeColor(String(meta.getAttribute("content") || ""))) applyMetaHex(FALLBACK_WARM, false);
	if (lastAppliedHex && !isForbiddenThemeColor(lastAppliedHex)) {
		applyMetaHex(lastAppliedHex, false);
		ensureThemeAttrWatch();
		return;
	}
	scheduleThemeSample(host);
};
/**
* Restore ambient theme-color when no covering/native windows remain.
* If another owner window is still up, re-sample from that host.
*/
var restoreThemeColorAfterNativeWindow = (exitingHost) => {
	if (typeof document === "undefined") return;
	if (!document.querySelector("meta[name=\"theme-color\"]")) return;
	const other = findThemeColorOwnerWindow();
	if (other && other !== exitingHost) {
		syncThemeColorFromNativeWindow(other);
		return;
	}
	const peers = Array.from(document.querySelectorAll("ui-window[native-mode]:not([minimized]), ui-window[data-desk-max]:not([minimized]), ui-window[maximized]:not([minimized]), ui-window[data-mobile-max]:not([minimized])")).filter((el) => el !== exitingHost && isViewportCoveringWindow(el));
	if (peers.length) {
		syncThemeColorFromNativeWindow(peers[peers.length - 1]);
		return;
	}
	setOwned(null);
	lastAppliedHex = null;
	cancelThemeSample();
	if (themeColorBeforeNative != null && themeColorBeforeNative && !isForbiddenThemeColor(themeColorBeforeNative)) {
		applyMetaHex(themeColorBeforeNative, true);
		themeColorBeforeNative = null;
	} else {
		themeColorBeforeNative = null;
		syncAmbientThemeColor();
	}
};
if (typeof document !== "undefined") queueMicrotask(() => {
	try {
		syncAmbientThemeColor();
	} catch {}
});
//#endregion
//#region ../../modules/projects/fl.ui/src/ui/containers/window/Windows2.ts
var styled = preloadStyle("@function --u2-color-mod(--base-color <color>, --index <number> : 550) returns <color>{--i:clamp(0,var(--index),1000);--pivot:550;--white-distance:clamp(0,calc((var(--pivot) - var(--i)) / var(--pivot)),1);--black-distance:clamp(0,calc((var(--i) - var(--pivot)) / (1000 - var(--pivot))),1);--to-white:pow(var(--white-distance),1.15);--to-black:pow(var(--black-distance),1.08);--center-left:clamp(0,calc(var(--i) / var(--pivot)),1);--center-right:clamp(0,calc((1000 - var(--i)) / (1000 - var(--pivot))),1);--chroma-shape:sqrt(min(var(--center-left),var(--center-right)));--chroma-scale:calc(0.08 + 0.92 * var(--chroma-shape));result:oklch(from var(--base-color) calc(l + (.985 - l) * var(--to-white) + (.16 - l) * var(--to-black)) calc(c * var(--chroma-scale)) h)}@layer components{:host(ui-window){--ui-win-radius:var(--radius-lg,0.75rem);--ui-win-titlebar-height:2.5rem;--ui-win-footer-min:2.25rem;--ui-win-control-size:1.75rem;--ui-win-icon-size:var(--ui-window-icon-size,0.95rem);--ui-win-gap:0.5rem;--ui-win-pad-inline:0.75rem;--ui-win-pad-block:0.65rem;--ui-win-seed:var(--base-color,var(--color-primary,#5a9ec8));--ui-win-bg:var(--color-surface,light-dark(--u2-color-mod(var(--ui-win-seed),70),--u2-color-mod(var(--ui-win-seed),930)));--ui-win-fg:var(--color-on-surface,light-dark(--u2-color-mod(var(--ui-win-seed),900),--u2-color-mod(var(--ui-win-seed),100)));--ui-win-muted:var(--color-on-surface-variant,light-dark(--u2-color-mod(var(--ui-win-seed),700),--u2-color-mod(var(--ui-win-seed),280)));--ui-win-border:color-mix(in oklab,var(--ui-win-fg) 12%,transparent);--ui-win-titlebar-bg:var(--color-surface-container,light-dark(--u2-color-mod(var(--ui-win-seed),40),--u2-color-mod(var(--ui-win-seed),960)));--ui-win-content-bg:var(--color-surface-container-lowest,light-dark(--u2-color-mod(var(--ui-win-seed),40),--u2-color-mod(var(--ui-win-seed),950)));--ui-win-footer-bg:var(--color-surface-container-low,light-dark(--u2-color-mod(var(--ui-win-seed),120),--u2-color-mod(var(--ui-win-seed),900)));--ui-win-shadow:light-dark(0 18px 40px -18px rgb(15 23 42/0.28),0 22px 48px -16px rgb(0 0 0/0.55));--ui-win-control-bg:transparent;--ui-win-control-bg-hover:color-mix(in oklab,var(--ui-win-fg) 14%,transparent);--ui-win-control-fg:var(--ui-win-fg);--ui-win-close-bg:transparent;--ui-win-close-bg-hover:light-dark(--u2-color-mod(#ef4444,550),--u2-color-mod(#ef4444,480));--ui-win-close-fg:var(--ui-win-fg);--ui-win-close-fg-hover:--u2-color-mod(var(--ui-win-seed),40);--icon-color:var(--ui-win-fg);block-size:var(--ui-win-height,min(22rem,70vh));border-radius:var(--ui-win-radius);box-shadow:var(--ui-win-shadow);box-sizing:border-box;color:var(--ui-win-fg);color-scheme:inherit;contain:layout paint style;container-name:ui-window;container-type:inline-size;display:block;font-family:InterVariable,Inter,Segoe UI,ui-sans-serif,system-ui,sans-serif;font-size:.875rem;inline-size:var(--ui-win-width,min(32rem,92vw));isolation:isolate;line-height:1.35;min-block-size:10rem;min-inline-size:16rem;overflow:hidden;position:relative}:host(ui-window),:host(ui-window) *,:host(ui-window) :after,:host(ui-window) :before{box-sizing:border-box}:host(ui-window) :is(.footer-handler[data-empty],.footer-handler[hidden]){display:none!important}:host(ui-window.theme-light),:host(ui-window[data-theme=light]){color-scheme:light}:host(ui-window.theme-dark),:host(ui-window[data-theme=dark]){color-scheme:dark}:host(ui-window[managed]){position:absolute;transform:none!important}:host(ui-window[managed][data-focused]){box-shadow:var(--ui-win-shadow),0 0 0 1px color-mix(in oklab,var(--ui-win-fg) 22%,transparent)}:host(ui-window[data-native-active]) .content-handler,:host(ui-window[managed]) .content-handler,:host(ui-window[native-mode]) .content-handler{display:flex;flex-direction:column;overflow:hidden;padding:0}:host(ui-window[data-native-active]) .content-handler ::slotted(*),:host(ui-window[managed]) .content-handler ::slotted(*),:host(ui-window[native-mode]) .content-handler ::slotted(*){block-size:100%;flex:1 1 auto;inline-size:100%;max-inline-size:none;min-block-size:0;min-inline-size:0}:host(ui-window[maximized]){--ui-win-radius:0;block-size:100%!important;border-radius:0;inline-size:100%!important;inset:0!important;transform:none!important}:host(ui-window[data-mobile-max]){--ui-win-radius:0;--ui-win-titlebar-height:var(--env-status-inset-top,max(2rem,env(safe-area-inset-top,0px)));block-size:100%!important;border-radius:0;inline-size:100%!important;inset:0!important;transform:none!important}@media screen and (pointer:coarse) and (hover:none){:host(ui-window[data-mobile-max]){block-size:stretch!important}}:host(ui-window[data-mobile-max]) :is(.title-close,.title-exit-native,.title-maximize,.title-minimize){display:none!important}:host(ui-window[data-mobile-max]) .title-handler{background:var(--ui-win-titlebar-bg,var(--color-surface,--u2-color-mod(var(--ui-win-seed),940)));border-block-end:0;cursor:default;min-block-size:var(--ui-win-titlebar-height);padding-block:0;pointer-events:none}:host(ui-window[data-mobile-max]) :is(.title-handler-actions,.title-handler-buttons,.title-handler-main){display:none!important}:host(ui-window[data-no-titlebar]){--ui-win-titlebar-height:0px}:host(ui-window[data-no-titlebar]) .title-handler{display:none!important}:host(ui-window[data-status-gap]:not([data-no-titlebar])){--ui-win-titlebar-height:var(--env-status-inset-top,max(2rem,env(safe-area-inset-top,0px)))}:host(ui-window[data-status-gap]:not([data-no-titlebar])) .title-handler{background:var(--ui-win-titlebar-bg,var(--color-surface,--u2-color-mod(var(--ui-win-seed),940)));border-block-end:0;cursor:default;min-block-size:var(--ui-win-titlebar-height);padding-block:0;pointer-events:none}:host(ui-window[data-status-gap]:not([data-no-titlebar])) :is(.title-handler-actions,.title-handler-buttons,.title-handler-main){display:none!important}:host(ui-window[data-desk-max]){--ui-win-radius:0;block-size:auto!important;border-radius:0;box-shadow:none!important;inline-size:auto!important;inset:0 0 var(--env-shell-chrome-stack-reserve,2.5rem) 0!important;transform:none!important}@media screen and (pointer:coarse) and (hover:none){:host(ui-window[data-desk-max]){block-size:stretch!important}}:host(ui-window[managed][data-focused][data-desk-max]){box-shadow:none!important}:host(ui-window[minimized]){block-size:var(--ui-win-titlebar-height)!important;min-block-size:var(--ui-win-titlebar-height)}:host(ui-window[minimized]) :is(.content-handler,.footer-handler,.window-resizer){display:none}:host(ui-window[hidden-window]){pointer-events:none!important;visibility:hidden!important}:host(ui-window[data-desk-max]) .window-resizer,:host(ui-window[data-mobile-max]) .window-resizer,:host(ui-window[data-native-active]) .window-resizer,:host(ui-window[maximized]) .window-resizer{display:none}:host(ui-window[data-native-active]),:host(ui-window[native-mode]){--ui-win-radius:0;block-size:100%!important;border-radius:0;box-shadow:none;inline-size:100%!important;inset:0!important;max-block-size:none;max-inline-size:none;position:fixed!important;transform:none!important;z-index:4}:host(ui-window[data-native-standalone]) .title-handler,:host(ui-window[data-native-wco]) .title-handler{window-drag:move;app-region:drag;-webkit-app-region:drag;cursor:default;min-block-size:max(var(--ui-win-titlebar-height),env(titlebar-area-height,var(--ui-win-titlebar-area-height,0px)),env(safe-area-inset-top,0px) + 1.75rem);padding-block-start:max(env(safe-area-inset-top,0px),env(titlebar-area-y,0px));padding-inline-end:max(env(safe-area-inset-right,0px),max(0px,100vi - env(titlebar-area-x,0px) - env(titlebar-area-width,100vi)),var(--ui-win-pad-inline));padding-inline-start:max(env(safe-area-inset-left,0px),env(titlebar-area-x,var(--ui-win-titlebar-area-x,0px)),var(--ui-win-pad-inline))}:host(ui-window[data-native-standalone]) .title-handler-actions,:host(ui-window[data-native-standalone]) .title-handler-buttons,:host(ui-window[data-native-standalone]) .title-handler-buttons button,:host(ui-window[data-native-wco]) .title-handler-actions,:host(ui-window[data-native-wco]) .title-handler-buttons,:host(ui-window[data-native-wco]) .title-handler-buttons button{window-drag:none;app-region:no-drag;-webkit-app-region:no-drag}:host(ui-window[data-native-wco]) :is(.title-close,.title-exit-native,.title-maximize,.title-minimize){display:none!important}:host(ui-window[data-native-standalone]) :is(.title-close,.title-maximize,.title-minimize){display:none!important}:host(ui-window[data-mobile-max]) .footer-handler,:host(ui-window[data-native-active]) .footer-handler[data-empty],:host(ui-window[data-native-active]) .footer-handler[hidden]{display:none!important}.title-exit-native,.title-exit-native[hidden]{display:none!important}:host(ui-window[data-native-standalone]) .title-exit-native:not([hidden]){display:inline-flex!important}.window-container{background:var(--ui-win-bg);block-size:100%;border:1px solid var(--ui-win-border);border-radius:inherit;color:var(--ui-win-fg);display:grid;grid-template-areas:\"title\" \"content\" \"footer\";grid-template-rows:minmax(0,max-content) minmax(0,1fr) minmax(0,max-content);inline-size:100%;isolation:isolate;overflow:hidden}.title-handler{align-items:center;background:var(--ui-win-titlebar-bg);border:0 transparent;border-block-end:0 none transparent;cursor:grab;display:grid;gap:var(--ui-win-gap);grid-area:title;grid-template-columns:minmax(0,1fr) auto auto;min-block-size:var(--ui-win-titlebar-height);padding-block:.35rem;padding-inline:var(--ui-win-pad-inline);pointer-events:auto;position:relative;touch-action:none;user-select:none;z-index:2}.title-handler:active{cursor:grabbing}.title-handler-main{align-items:center;display:flex;gap:.5rem;min-inline-size:0;overflow:hidden;pointer-events:none}.title-handler-main .title-text,.title-handler-main ::slotted(*){font-weight:600;letter-spacing:-.01em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.title-handler-actions{align-items:center;display:flex;gap:.25rem;min-inline-size:0}.title-handler-buttons{align-items:center;background:transparent;display:flex;flex-shrink:0;gap:.25rem;pointer-events:auto;position:relative;touch-action:manipulation;z-index:3}:is(.title-handler-actions,.title-handler-buttons) button{align-items:center;appearance:none;background:var(--ui-win-control-bg);block-size:var(--ui-win-control-size);border:0;border-radius:999px;color:var(--ui-win-control-fg);display:inline-flex;inline-size:var(--ui-win-control-size);justify-content:center;margin:0;padding:0;--icon-color:currentColor;cursor:pointer;pointer-events:auto;transition:background-color .15s ease,color .15s ease,transform .12s ease}:is(.title-handler-actions,.title-handler-buttons) button:hover{background:var(--ui-win-control-bg-hover)}:is(.title-handler-actions,.title-handler-buttons) button:active{transform:scale(.94)}:is(.title-handler-actions,.title-handler-buttons) button:focus-visible{outline:2px solid color-mix(in oklab,var(--color-primary,#5a7fff) 70%,transparent);outline-offset:2px}:is(.title-handler-actions,.title-handler-buttons) button ui-icon{block-size:var(--ui-win-icon-size);flex-shrink:0;inline-size:var(--ui-win-icon-size);min-block-size:var(--ui-win-icon-size);min-inline-size:var(--ui-win-icon-size);--ui-icon-size:var(--ui-win-icon-size);--ui-icon-padding:0;pointer-events:none}.title-handler-buttons .title-close{background:var(--ui-win-close-bg);color:var(--ui-win-close-fg);--icon-color:currentColor}.title-handler-buttons .title-close:hover{background:var(--ui-win-close-bg-hover);color:var(--ui-win-close-fg-hover)}.content-handler{background:var(--ui-win-content-bg);color:var(--ui-win-fg);contain:paint;grid-area:content;isolation:isolate;min-block-size:0;min-inline-size:0;overflow:auto;padding:0;pointer-events:auto;position:relative;transform:translateZ(0);z-index:0}.content-handler ::slotted(*){max-block-size:100%;max-inline-size:100%;min-block-size:0;pointer-events:auto}.footer-handler{align-items:center;background:var(--ui-win-footer-bg);border-block-start:1px solid var(--ui-win-border);color:var(--ui-win-muted);display:flex;gap:.5rem;grid-area:footer;justify-content:flex-end;min-block-size:var(--ui-win-footer-min);padding:.45rem var(--ui-win-pad-inline)}.footer-handler[data-empty],.footer-handler[hidden]{display:none}.window-resizer{background:linear-gradient(135deg,transparent 48%,color-mix(in oklab,var(--ui-win-muted) 55%,transparent) 50%);block-size:12px;border-radius:2px;cursor:nwse-resize;inline-size:12px;inset-block-end:4px;inset-inline-end:4px;opacity:.55;pointer-events:auto;position:absolute;z-index:1}.window-resizer:hover{opacity:.9}}");
/** Phosphor names (duotone registry): minimize / maximize / restore / close. */
var ICON_MINIMIZE = "minus";
var ICON_MAXIMIZE = "corners-out";
var ICON_RESTORE = "corners-in";
var ICON_CLOSE = "x";
var DRAG_MIN = Object.freeze({
	w: 240,
	h: 160
});
var Windows2 = class Windows2 extends UIElement {
	titleHandler;
	contentHandler;
	footerHandler;
	resizer;
	/** Cumulative drag offset in CSS pixels (unmanaged / standalone mode). */
	#ox = numberRef(0);
	#oy = numberRef(0);
	#dragUnbind = null;
	#resizeUnbind = null;
	#focusUnbind = null;
	#controlsUnbind = null;
	#controlsMo = null;
	#nativeUnbind = null;
	#attrObserver = null;
	#controlsReady = false;
	#wireAttempts = 0;
	#lastChromeActionAt = 0;
	#lastNativeProbe = null;
	#footerSlotUnbind = null;
	#lastThemeCover = null;
	styles = function() {
		return styled;
	};
	render = function() {
		return H`<div class="window-container" part="window-container">
            <header class="title-handler" part="title-handler">
                <div class="title-handler-main" part="title">
                    <slot name="title"></slot>
                </div>
                <div class="title-handler-actions" part="actions">
                    <slot name="actions"></slot>
                </div>
                <div class="title-handler-buttons" part="controls" data-no-drag>
                    <button class="title-minimize" type="button" aria-label="Minimize" title="Minimize" data-no-drag data-ui-win-action="minimize">
                        <ui-icon icon=${ICON_MINIMIZE}></ui-icon>
                    </button>
                    <button class="title-maximize" type="button" aria-label="Maximize" title="Maximize" data-no-drag data-ui-win-action="maximize">
                        <ui-icon icon=${ICON_MAXIMIZE}></ui-icon>
                    </button>
                    <button
                        class="title-exit-native"
                        type="button"
                        aria-label="Exit native"
                        title="Exit native"
                        data-no-drag
                        data-ui-win-action="exit-native"
                        hidden
                    >
                        <ui-icon icon=${ICON_RESTORE}></ui-icon>
                    </button>
                    <button class="title-close" type="button" aria-label="Close" title="Close" data-no-drag data-ui-win-action="close">
                        <ui-icon icon=${ICON_CLOSE}></ui-icon>
                    </button>
                </div>
            </header>
            <div class="content-handler" part="content-handler" style="container-type: size;">
                <slot name="content"></slot>
                <slot></slot>
            </div>
            <footer class="footer-handler" part="footer-handler">
                <slot name="footer"></slot>
            </footer>
            <div class="window-resizer" part="resizer" aria-hidden="true" data-no-drag></div>
        </div>`;
	};
	constructor() {
		super();
	}
	/** Shell-driven chrome: position/size come from host CSS, not transform. */
	get managed() {
		return this.hasAttribute("managed");
	}
	/** Host requested mono/task native chrome (WCO / standalone / fallback full-bleed). */
	get nativeMode() {
		return this.hasAttribute("native-mode");
	}
	set nativeMode(value) {
		this.toggleAttribute("native-mode", Boolean(value));
		this.#syncNativeChrome();
	}
	get nativeSurface() {
		return this.#lastNativeProbe?.surface ?? (this.nativeMode ? "fallback" : "off");
	}
	onInitialize() {
		super.onInitialize();
	}
	onRender() {
		super.onRender();
		this.#scheduleChromeWire();
	}
	connectedCallback() {
		super.connectedCallback?.();
		this.#scheduleChromeWire();
		this.#bindNativeChrome();
	}
	disconnectedCallback() {
		queueMicrotask(() => {
			if (this.isConnected) return;
			this.#nativeUnbind?.();
			this.#nativeUnbind = null;
			this.#attrObserver?.disconnect();
			this.#attrObserver = null;
			this.#controlsMo?.disconnect();
			this.#controlsMo = null;
			this.#controlsUnbind?.();
			this.#controlsUnbind = null;
			this.#controlsReady = false;
			this.#wireAttempts = 0;
			this.#focusUnbind?.();
			this.#focusUnbind = null;
			this.#dragUnbind?.();
			this.#dragUnbind = null;
			this.#resizeUnbind?.();
			this.#resizeUnbind = null;
			this.#footerSlotUnbind?.();
			this.#footerSlotUnbind = null;
			this.#lastThemeCover = null;
			super.disconnectedCallback?.();
		});
	}
	#scheduleChromeWire() {
		const run = () => {
			this.#wireControls();
			this.#wireFocus();
			if (!this.#dragUnbind) this.#wireDrag();
			if (!this.#resizeUnbind) this.#wireResize();
			this.#bindEmptyFooter();
			if (this.#controlsReady) return;
			if (this.#wireAttempts++ < 12) requestAnimationFrame(run);
		};
		queueMicrotask(run);
	}
	/**
	* WHY: `<footer><slot name="footer"></slot></footer>` is never `:empty`, so unused
	* chrome painted a 2.25rem slab under Settings / Explorer.
	*/
	#bindEmptyFooter() {
		if (this.#footerSlotUnbind) {
			this.#syncEmptyFooter();
			return;
		}
		const slot = this.shadowRoot?.querySelector?.("slot[name=\"footer\"]");
		if (!(slot instanceof HTMLSlotElement)) return;
		const onChange = () => this.#syncEmptyFooter();
		slot.addEventListener("slotchange", onChange);
		this.#footerSlotUnbind = () => slot.removeEventListener("slotchange", onChange);
		this.#syncEmptyFooter();
	}
	#syncEmptyFooter() {
		const slot = this.shadowRoot?.querySelector?.("slot[name=\"footer\"]");
		const footer = this.shadowRoot?.querySelector?.(".footer-handler");
		if (!(slot instanceof HTMLSlotElement) || !(footer instanceof HTMLElement)) return;
		const empty = !slot.assignedNodes({ flatten: true }).some((node) => {
			if (node.nodeType === Node.ELEMENT_NODE) return true;
			return node.nodeType === Node.TEXT_NODE && Boolean(node.textContent?.trim());
		});
		footer.toggleAttribute("data-empty", empty);
		footer.hidden = empty;
	}
	#bindNativeChrome() {
		if (this.#nativeUnbind) return;
		this.#nativeUnbind = subscribeNativeWindowChrome({
			getRequested: () => this.nativeMode,
			onChange: (probe) => this.#applyNativeProbe(probe)
		});
		if (typeof MutationObserver !== "undefined" && !this.#attrObserver) {
			this.#attrObserver = new MutationObserver((records) => {
				let native = false;
				let maxIcon = false;
				for (const r of records) {
					if (r.attributeName === "native-mode") native = true;
					if (r.attributeName === "maximized" || r.attributeName === "data-desk-max" || r.attributeName === "data-mobile-max") maxIcon = true;
				}
				if (native || maxIcon) this.#syncNativeChrome();
				if (maxIcon) this.#syncMaximizeIcon();
			});
			this.#attrObserver.observe(this, {
				attributes: true,
				attributeFilter: [
					"native-mode",
					"maximized",
					"data-desk-max",
					"data-mobile-max"
				]
			});
		}
	}
	#syncNativeChrome() {
		this.#applyNativeProbe(probeNativeWindowChrome(this.nativeMode));
	}
	#applyNativeProbe(probe) {
		const covers = this.nativeMode || this.hasAttribute("data-desk-max") || this.hasAttribute("maximized") || this.hasAttribute("data-mobile-max");
		if (this.#lastNativeProbe?.surface === probe.surface && this.#lastThemeCover === covers && this.#dragUnbind) {
			this.#lastNativeProbe = probe;
			return;
		}
		this.#lastNativeProbe = probe;
		const host = this;
		host.toggleAttribute("data-native-wco", probe.surface === "wco");
		host.toggleAttribute("data-native-standalone", probe.surface === "standalone");
		host.toggleAttribute("data-native-fallback", probe.surface === "fallback");
		host.toggleAttribute("data-native-active", probe.surface !== "off");
		this.#syncExitNativeButton(probe.surface);
		if (probe.titlebarRect) {
			host.style.setProperty("--ui-win-titlebar-area-x", `${probe.titlebarRect.x}px`);
			host.style.setProperty("--ui-win-titlebar-area-y", `${probe.titlebarRect.y}px`);
			host.style.setProperty("--ui-win-titlebar-area-width", `${probe.titlebarRect.width}px`);
			host.style.setProperty("--ui-win-titlebar-area-height", `${probe.titlebarRect.height}px`);
		} else {
			host.style.removeProperty("--ui-win-titlebar-area-x");
			host.style.removeProperty("--ui-win-titlebar-area-y");
			host.style.removeProperty("--ui-win-titlebar-area-width");
			host.style.removeProperty("--ui-win-titlebar-area-height");
		}
		this.#dragUnbind?.();
		this.#dragUnbind = null;
		this.#resizeUnbind?.();
		this.#resizeUnbind = null;
		this.#wireDrag();
		this.#wireResize();
		this.#syncMaximizeIcon();
		if (covers !== this.#lastThemeCover) {
			this.#lastThemeCover = covers;
			if (covers) syncThemeColorFromNativeWindow(this);
			else {
				restoreThemeColorAfterNativeWindow(this);
				syncAmbientThemeColor();
			}
		}
		this.dispatchEvent(new CustomEvent("window-native-change", {
			bubbles: true,
			composed: true,
			detail: probe
		}));
	}
	/** Standalone-only control; `hidden` must win over button `display: inline-flex`. */
	#syncExitNativeButton(surface = this.nativeSurface) {
		const exitBtn = this.shadowRoot?.querySelector(".title-exit-native");
		if (exitBtn) exitBtn.hidden = surface !== "standalone";
	}
	/**
	* INVARIANT: one glyph on maximize — corners-out (max) or corners-in (restore).
	* NOTE: native fallback stays corners-out (maximize = exit native, not restore-down).
	*/
	#syncMaximizeIcon() {
		const btn = this.shadowRoot?.querySelector(".title-maximize");
		const icon = btn?.querySelector("ui-icon");
		if (!btn || !icon) return;
		const restoredLook = !(this.nativeMode && this.nativeSurface === "fallback") && (this.hasAttribute("maximized") || this.hasAttribute("data-desk-max") || this.hasAttribute("data-mobile-max"));
		const name = restoredLook ? ICON_RESTORE : ICON_MAXIMIZE;
		const label = restoredLook ? "Restore" : "Maximize";
		if (icon.getAttribute("icon") !== name) icon.setAttribute("icon", name);
		btn.setAttribute("aria-label", label);
		btn.setAttribute("title", label);
	}
	/** Apply absolute bounds (managed shells / workspace layer). */
	applyBounds(bounds) {
		const el = this;
		el.style.position = "absolute";
		if (typeof bounds.x === "number") el.style.left = `${bounds.x}px`;
		if (typeof bounds.y === "number") el.style.top = `${bounds.y}px`;
		if (typeof bounds.w === "number") {
			el.style.width = `${bounds.w}px`;
			el.style.setProperty("--ui-win-width", `${bounds.w}px`);
		}
		if (typeof bounds.h === "number") {
			el.style.height = `${bounds.h}px`;
			el.style.setProperty("--ui-win-height", `${bounds.h}px`);
		}
		if (typeof bounds.z === "number") el.style.zIndex = String(bounds.z);
		el.style.right = "";
		el.style.bottom = "";
		if (this.managed) {
			this.#ox.value = 0;
			this.#oy.value = 0;
			el.style.transform = "";
		}
	}
	setVisible(visible) {
		this.toggleAttribute("hidden-window", !visible);
		this.style.visibility = visible ? "" : "hidden";
		this.style.pointerEvents = visible ? "" : "none";
	}
	get isMaximized() {
		return this.hasAttribute("maximized") || this.hasAttribute("data-desk-max") || this.hasAttribute("data-mobile-max");
	}
	get isMinimized() {
		return this.hasAttribute("minimized");
	}
	/** True when CSS window-drag owns titlebar (WCO / installed standalone). */
	get usesNativeWindowDrag() {
		const s = this.nativeSurface;
		return s === "wco" || s === "standalone";
	}
	/**
	* Enter/exit native-mode. Managed hosts should listen for `window-native` /
	* `window-exit-native` instead of mutating attrs directly when preferred.
	*/
	enterNativeMode() {
		if (this.managed) {
			this.#emitChrome("window-native");
			return;
		}
		this.nativeMode = true;
		this.#emitChrome("window-native");
	}
	exitNativeMode() {
		if (this.managed) {
			this.#emitChrome("window-exit-native");
			return;
		}
		this.nativeMode = false;
		this.#emitChrome("window-exit-native");
	}
	#emitChrome(name, cancelable = false) {
		return this.dispatchEvent(new CustomEvent(name, {
			bubbles: true,
			composed: true,
			cancelable
		}));
	}
	/**
	* WHY (managed): only emit intent — environment-shell owns attrs via applyChrome.
	*/
	toggleMaximize() {
		const restoring = this.isMaximized;
		if (this.managed) {
			this.#emitChrome(restoring ? "window-restore" : "window-maximize");
			return;
		}
		const next = !restoring;
		this.toggleAttribute("maximized", next);
		if (next) this.removeAttribute("minimized");
		this.#syncMaximizeIcon();
		this.#emitChrome(next ? "window-maximize" : "window-restore");
	}
	toggleMinimize() {
		if (this.managed) {
			this.#emitChrome(this.isMinimized ? "window-restore" : "window-minimize");
			return;
		}
		const next = !this.isMinimized;
		this.toggleAttribute("minimized", next);
		if (next) this.removeAttribute("maximized");
		this.#emitChrome(next ? "window-minimize" : "window-restore");
	}
	restoreWindow() {
		if (this.managed) {
			this.#emitChrome("window-restore");
			return;
		}
		const wasMin = this.isMinimized;
		const wasMax = this.isMaximized;
		this.removeAttribute("minimized");
		this.removeAttribute("maximized");
		if (wasMin || wasMax) this.#emitChrome("window-restore");
	}
	closeWindow() {
		this.#emitChrome("window-close", true);
		if (this.isConnected) this.remove();
	}
	#wireFocus() {
		if (this.#focusUnbind) return;
		this.#focusUnbind = addEvent(this, "pointerdown", () => {
			this.requestFocus();
		}, {
			capture: true,
			passive: true
		});
	}
	requestFocus() {
		this.dispatchEvent(new CustomEvent("window-focus", {
			bubbles: true,
			composed: true
		}));
	}
	bringToFront(z) {
		const el = this;
		if (Number.isFinite(z)) el.style.zIndex = String(z);
		el.toggleAttribute("data-focused", true);
	}
	clearFocused() {
		this.toggleAttribute("data-focused", false);
	}
	/** Resolve control hit from composedPath / data-ui-win-action (ui-icon retargeting). */
	#hitControl(ev) {
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
		const t = ev.target;
		if (t instanceof Element) {
			const el = t.closest?.("[data-ui-win-action], .title-close, .title-exit-native, .title-maximize, .title-minimize") ?? null;
			if (!el) return null;
			const action = el.getAttribute("data-ui-win-action");
			if (action === "close" || action === "exit-native" || action === "maximize" || action === "minimize") return action;
			if (el.classList.contains("title-close")) return "close";
			if (el.classList.contains("title-exit-native")) return "exit-native";
			if (el.classList.contains("title-maximize")) return "maximize";
			if (el.classList.contains("title-minimize")) return "minimize";
		}
		return null;
	}
	/** Debounce pointerup+click (and dual host/button listeners) within one gesture. */
	#consumeChromeAction() {
		const now = typeof performance !== "undefined" ? performance.now() : Date.now();
		if (now - this.#lastChromeActionAt < 280) return false;
		this.#lastChromeActionAt = now;
		return true;
	}
	#runChromeAction(which) {
		if (which === "close") this.closeWindow();
		else if (which === "exit-native") this.exitNativeMode();
		else if (which === "maximize") if (this.nativeMode && this.nativeSurface === "fallback") this.exitNativeMode();
		else this.toggleMaximize();
		else this.toggleMinimize();
	}
	#handleControlEvent(ev) {
		const which = this.#hitControl(ev);
		if (!which) return false;
		ev.preventDefault();
		ev.stopPropagation();
		ev.stopImmediatePropagation?.();
		if (!this.#consumeChromeAction()) return true;
		this.#runChromeAction(which);
		return true;
	}
	/**
	* WHY (radical): H/lure can replace shadow buttons and kill addEventListener bindings.
	* Assign `onclick` / `onpointerup` properties on the live nodes and re-stamp after every
	* shadow mutation. Delegation on shadowRoot + host remains as a safety net.
	*/
	#bindControlButtonProps() {
		const root = this.shadowRoot;
		if (!root) return;
		for (const [which, sel] of [
			["minimize", ".title-minimize"],
			["maximize", ".title-maximize"],
			["close", ".title-close"],
			["exit-native", ".title-exit-native"]
		]) {
			const btn = root.querySelector(sel);
			if (!btn) continue;
			btn.setAttribute("data-ui-win-action", which);
			const run = (ev) => {
				ev.preventDefault();
				ev.stopPropagation();
				ev.stopImmediatePropagation?.();
				if (!this.#consumeChromeAction()) return;
				this.#runChromeAction(which);
			};
			btn.onclick = run;
			btn.onpointerup = (ev) => {
				if (ev.button !== 0) return;
				run(ev);
			};
		}
	}
	#wireControls() {
		const root = this.shadowRoot;
		if (!root) return;
		const fromTitle = this.titleHandler;
		const titleBar = fromTitle instanceof HTMLElement ? fromTitle : root.querySelector(".title-handler");
		const buttons = root.querySelector(".title-handler-buttons");
		if (!titleBar || !buttons) return;
		this.#bindControlButtonProps();
		if (this.#controlsReady) {
			this.#syncExitNativeButton();
			this.#syncMaximizeIcon();
			return;
		}
		const onDelegated = (ev) => {
			this.#handleControlEvent(ev);
		};
		const onDbl = (ev) => {
			if (this.#hitControl(ev)) return;
			if (!(typeof ev.composedPath === "function" ? ev.composedPath() : []).some((n) => n instanceof Element && n.classList?.contains("title-handler"))) return;
			if (ev.target?.closest?.("button, a, input, textarea, select, [data-no-drag]")) return;
			ev.preventDefault();
			if (!this.#consumeChromeAction()) return;
			this.toggleMaximize();
		};
		const offShadowClick = addEvent(root, "click", onDelegated, { capture: true });
		const offShadowPtr = addEvent(root, "pointerup", onDelegated, { capture: true });
		const offHostClick = addEvent(this, "click", onDelegated, { capture: true });
		const offHostPtr = addEvent(this, "pointerup", onDelegated, { capture: true });
		const offHostDbl = addEvent(this, "dblclick", onDbl, { capture: true });
		if (typeof MutationObserver !== "undefined" && !this.#controlsMo) {
			this.#controlsMo = new MutationObserver(() => {
				this.#bindControlButtonProps();
				this.#syncExitNativeButton();
				this.#syncMaximizeIcon();
			});
			this.#controlsMo.observe(buttons, {
				childList: true,
				subtree: true
			});
		}
		this.#controlsUnbind = () => {
			offShadowClick?.();
			offShadowPtr?.();
			offHostClick?.();
			offHostPtr?.();
			offHostDbl?.();
			this.#controlsMo?.disconnect();
			this.#controlsMo = null;
			this.#controlsUnbind = null;
			this.#controlsReady = false;
		};
		this.#controlsReady = true;
		this.#syncExitNativeButton();
		this.#syncMaximizeIcon();
	}
	#wireDrag() {
		const root = this.shadowRoot ?? this;
		const fromProp = this.titleHandler;
		const bar = fromProp instanceof HTMLElement ? fromProp : root.querySelector?.(".title-handler");
		if (!bar || this.#dragUnbind) return;
		if (this.usesNativeWindowDrag) {
			this.#dragUnbind = () => {
				this.#dragUnbind = null;
			};
			return;
		}
		if (!this.managed) bindStyle(this, S`transform: translate(${this.#ox}px, ${this.#oy}px)`);
		const DRAG_THRESHOLD_PX = 4;
		const pointerMap = /* @__PURE__ */ new Map();
		const offDown = addEvent(bar, "pointerdown", (ev) => {
			if (ev.button !== 0) return;
			if (this.#hitControl(ev)) return;
			if (ev.target?.closest("button, a, input, textarea, select, [data-no-drag]")) return;
			if (this.isMaximized || this.isMinimized || this.nativeMode) return;
			this.requestFocus();
			const host = this;
			pointerMap.set(ev.pointerId, {
				sx: ev.clientX,
				sy: ev.clientY,
				ox: this.#ox.value,
				oy: this.#oy.value,
				bx: Number.parseFloat(host.style.left || "0") || 0,
				by: Number.parseFloat(host.style.top || "0") || 0,
				dragging: false
			});
			const offMove = addEvent(document.body, "pointermove", (ev) => {
				const p = pointerMap.get(ev.pointerId);
				if (!p) return;
				const dx = ev.clientX - p.sx;
				const dy = ev.clientY - p.sy;
				if (!p.dragging) {
					if (Math.hypot(dx, dy) < DRAG_THRESHOLD_PX) return;
					p.dragging = true;
					try {
						ev.preventDefault();
					} catch {}
					this.setPointerCapture?.(ev.pointerId);
				}
				if (this.managed) {
					this.dispatchEvent(new CustomEvent("window-move", {
						bubbles: true,
						composed: true,
						detail: {
							x: p.bx + dx,
							y: p.by + dy,
							dx,
							dy
						}
					}));
					return;
				}
				this.#ox.value = p.ox + dx;
				this.#oy.value = p.oy + dy;
			});
			const end = (ev) => {
				if (!pointerMap.has(ev.pointerId)) return;
				const p = pointerMap.get(ev.pointerId);
				pointerMap.delete(ev.pointerId);
				if (p?.dragging) try {
					this.releasePointerCapture?.(ev.pointerId);
				} catch {}
				offMove?.();
				offUp?.();
				offCancel?.();
			};
			const offUp = addEvent(document.body, "pointerup", end);
			const offCancel = addEvent(document.body, "pointercancel", end);
		});
		this.#dragUnbind = () => {
			offDown?.();
		};
	}
	#wireResize() {
		const root = this.shadowRoot ?? this;
		const fromProp = this.resizer;
		const grip = fromProp instanceof HTMLElement ? fromProp : root.querySelector?.(".window-resizer");
		if (!grip || this.#resizeUnbind) return;
		const pointerMap = /* @__PURE__ */ new Map();
		const offDown = addEvent(grip, "pointerdown", (ev) => {
			if (ev.button !== 0) return;
			if (this.isMaximized || this.isMinimized || this.nativeMode) return;
			ev.preventDefault();
			ev.stopPropagation();
			this.requestFocus();
			this.setPointerCapture?.(ev.pointerId);
			const rect = this.getBoundingClientRect();
			pointerMap.set(ev.pointerId, {
				sx: ev.clientX,
				sy: ev.clientY,
				w: rect.width,
				h: rect.height
			});
			const offMove = addEvent(document.body, "pointermove", (ev) => {
				const p = pointerMap.get(ev.pointerId);
				if (!p) return;
				const w = Math.max(DRAG_MIN.w, p.w + (ev.clientX - p.sx));
				const h = Math.max(DRAG_MIN.h, p.h + (ev.clientY - p.sy));
				if (this.managed) {
					this.dispatchEvent(new CustomEvent("window-resize", {
						bubbles: true,
						composed: true,
						detail: {
							w,
							h
						}
					}));
					return;
				}
				this.style.width = `${w}px`;
				this.style.height = `${h}px`;
				this.style.setProperty("--ui-win-width", `${w}px`);
				this.style.setProperty("--ui-win-height", `${h}px`);
			});
			const end = (ev) => {
				if (!pointerMap.has(ev.pointerId)) return;
				pointerMap.delete(ev.pointerId);
				try {
					this.releasePointerCapture?.(ev.pointerId);
				} catch {}
				offMove?.();
				offUp?.();
				offCancel?.();
			};
			const offUp = addEvent(document.body, "pointerup", end);
			const offCancel = addEvent(document.body, "pointercancel", end);
		});
		this.#resizeUnbind = () => {
			offDown?.();
		};
	}
};
__decorate([property({
	source: "query-shadow",
	name: ".title-handler"
})], Windows2.prototype, "titleHandler", void 0);
__decorate([property({
	source: "query-shadow",
	name: ".content-handler"
})], Windows2.prototype, "contentHandler", void 0);
__decorate([property({
	source: "query-shadow",
	name: ".footer-handler"
})], Windows2.prototype, "footerHandler", void 0);
__decorate([property({
	source: "query-shadow",
	name: ".window-resizer"
})], Windows2.prototype, "resizer", void 0);
Windows2 = __decorate([defineElement("ui-window")], Windows2);
[
	"button:not([disabled])",
	"[href]",
	"input:not([disabled])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"[tabindex]:not([tabindex='-1'])"
].join(",");
//#endregion
//#region ../../modules/projects/fl.ui/src/index.ts
var _config = {
	loadStyles: true,
	includeGlobalNativeControlStyles: false,
	styleVariant: "veela-basic"
};
/**
* Get current fl.ui configuration
*/
function getFlUIConfig() {
	return { ..._config };
}
(async () => {
	const cfg = getFlUIConfig();
	if (cfg.loadStyles === false) return;
	await loader({ includeGlobalNativeControls: cfg.includeGlobalNativeControlStyles === true });
})()?.catch?.(() => void 0);
//#endregion
export { switchWorkspacePage as a, listWorkspacePages as i, WORKSPACE_PAGE_EVENT as n, statusbar_default as o, getActiveWorkspaceId as r, taskbar_default as t };
