const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./core5.js","../chunks/rolldown-runtime.js","../assets/index-C9QTqpCS.js","./core2.js","./object.js","./uniform.js"])))=>i.map(i=>d[i]);
import { r as __exportAll } from "../chunks/rolldown-runtime.js";
import { t as __vitePreload } from "../assets/index-C9QTqpCS.js";
import { $ as unbakeScreenColors, $t as hash, A as AnimatableValue, An as urlCanParse, Ar as styleFlushPending, At as setStylePropertyFallback, B as bakeAlsoQueriesFor, Bn as BAKE_SCREEN_MEDIA, Bt as veelaCascadeOrder, C as parallelAnimations, Cn as promiseOrDirect, Cr as cacheContentMap, Ct as registerStyleTreeHook, D as bindStyle, Dn as readSheetRuleCount, Dr as registeredProperties, Dt as setStyleInRule, E as S, En as readAttachedCSSUnit, Er as rebakeBatch, Et as setProperty, F as addAdoptedSheetToElement, Fn as BAKE_LAYER, Ft as cssLayerOrder, G as collectBakeAlsoHosts, Gn as CSS_TYPOGRAPHY_PROPERTIES, Gt as createTypedUnitValue, H as bakeScreenColors, Hn as CSS_DIMENSION_UNITS, Ht as applyNormalizedInlineStyle, I as ensureHostStyles, In as BAKE_SCREEN_ALSO, It as getOrCreateLayerRule, J as getBakedStyle, Jn as DEFAULT_CACHE_MS, Jt as cssUnitConstructorName, K as collectBakeScreenHosts, Kn as CSS_UNIT_FACTORY_ALIASES, Kt as cssEmptyLayerRule, L as loadCachedStyles, Ln as BAKE_SCREEN_ALSO_EXPLORER, Lt as makeHostLayerOrder, M as isAnimatableValue, Mn as ANIM_LAYER, Mr as styleTreeObserved, Mt as UX_PRELOAD_HOST_CSS, N as onScroll, Nn as ANIM_TRIGGER_NAME, Nr as styleTreeRoots, Nt as cssImportWithLayer, O as compileInlineStyleAttribute, On as stripCssPreamble, Or as styleCache, Ot as setStyleRule, P as onView, Pn as BAKE_CATEGORIES, Pt as cssLayerBlock, Q as unbakeComputedStyle, Qn as LAYER_OPEN, Qt as getWindowConstructor, R as rehydrateAdoptedStyleSheets, Rn as BAKE_SCREEN_ALSO_SETTINGS, Rt as normalizeCssForLayer, S as doAnimation, Sn as parseTime, Sr as cacheBlobContentMap, St as preloadStyle, T as staggerAnimation, Tn as queryFirstDeep, Tr as layerCounter, Tt as removeAdopted, U as bakeThemeFingerprint, Un as CSS_DIMENSION_UNITS_LIST, Ut as containsMarker, V as bakeComputedStyle, Vn as CSS_COLOR_PROPERTIES, Vt as wrapCssLayer, W as buildBakedCssText, Wn as CSS_MOTION_PROPERTIES, Wt as createStyleId, X as rebakeComputedStyle, Xn as HOST_CSS_FALLBACK, Xt as escapeCSSIdentifier, Y as invalidateBakedStyles, Yn as DEFAULT_CATEGORIES, Yt as cssUnitFactoryName, Z as scheduleBakeScreenColors, Zn as LAYER_NAME, Zt as escapeRegExp, _ as A, _n as isViewDriven, _r as bakedCache, _t as loadBlobStyle, a as dispatchLifecycleEvent, an as isEffectivelyEmptyStyleText, ar as VIEWER_RUNTIME_LAYERS, at as getStyleRule, b as buildWebAnimationKeyframes, bn as parseLength, br as bakedStyles, bt as notifyStyleTreeHosts, c as observeAttribute, cn as isNativeCSSStyleValue, cr as adoptedBlobMap, ct as cssTextForAdoptedSheet, d as observeContentBox, dn as isShadowRoot, dr as adoptedMap, dt as getPadding, en as isAdoptedSheetEmpty, er as STYLE_THEME_ATTRS, et as ensureStyleScopeSelector, f as bindCssAnimation, fn as isStaticStyleInterpolation, fr as adoptedSelectorMap, ft as getPropertyValue, g as resolveCssAnimationTarget, gn as isUnitValue, gr as animKeyframeRefs, gt as loadAsAdopted, h as isReactiveTrigger, hn as isStyleValue, hr as adoptedStyleSheetsCache, ht as getTransformOrigin, i as disappear, in as isDocument, ir as VIEWER_CSS_LAYER_ORDER, it as getStyleLayer, j as animatable, jn as ANIMATABLE_BRAND, jr as styleTreeHooks, jt as setStylePropertyTyped, k as css, kn as supportsConstructableStylesheet, kr as styleElementCache, kt as setStyleProperty, l as observeAttributeBySelector, ln as isReactiveStyleValue, lr as adoptedFilled, lt as ensureAdoptedSheetContent, m as compileTriggerCss, mn as isStyleHost, mr as adoptedShadowSelectorMap, mt as getTransform, n as decorHide, nn as isCssElement, nr as UX_HOST_LAYERS, nt as fetchAsInline, o as initVisibility, on as isElementVisible, or as hasTypedOM, ot as setStyleRules, p as compileKeyframesCss, pn as isStyleBinding, pr as adoptedShadowLayerMap, pt as getPxValue, q as collectBakedDeclarations, qn as CSS_UNIT_TOKEN_RE, qt as cssTextRequiresInlineStyleElement, r as decorShow, rn as isCssLayerName, rr as VEELA_CASCADE_LAYERS, rt as getAdoptedStyleRule, s as waitElementAnimations, sn as isLayerBlockRule, sr as adoptedAppliedText, st as setStyleURL, t as appear, tn as isColorToken, tr as STYLE_THEME_OBSERVE_ATTRS, tt as fetchAndCache, u as observeBySelector, un as isScrollDriven, ur as adoptedLayerMap, ut as getElementZoom, v as animate, vn as normalizeIterationCount, vr as bakedFollowers, vt as loadInlineStyle, w as sequenceAnimations, wn as pruneEmptyStyleAttribute, wr as cacheMap, wt as rehydrateConstructableSheets, x as defineAnimation, xn as parseOrigin, xr as blobURLMap, xt as observeStyleTree, y as buildAnimationTiming, yn as normalizeIterations, yr as bakedLive, yt as loadStyleSheet, z as scheduleEnsureHostStyles, zn as BAKE_SCREEN_CHROME, zt as unwrapCssLayer } from "./core.js";
import { B as normalizePrimitive, D as hasValue, E as handleListeners, F as isVal, I as isValueRef, K as unref, L as isValueUnit, M as isObservable, N as isPrimitive, R as kebabToCamel, S as clamp$1, T as getValue, U as toRef$1, _ as $set$1, b as camelToKebab$1, c as inProxy, d as isNotEqual, f as isValidObj, g as $getValue, h as $avoidTrigger, j as isObject, o as contextify, q as withCtx, r as bindEvent, w as deref, x as canBeInteger } from "./core2.js";
import { $ as uploadFile, A as isVirtualFsPath, B as readAsObjectURL, C as getMimeTypeByFilename, Ct as setOpfsSupportEnabled, D as hasFileExtension, E as handleIncomingEntries, F as normalizePath$1, G as remove, H as readFileUTF8, I as openDirectory, J as resolvePath, K as removeDirectory, L as openImageFilePicker, M as matchMappedRoot, N as mayNotPromise, O as imageImportDesc, P as mountAsRoot, Q as uploadDirectory, R as post, S as getLeast, St as normalizeIdbNodePath, T as handleError, U as refreshMappedStorageRoots, V as readFile, W as registerDirectoryRoot, X as unmountAsRoot, Y as resolveRootHandle, Z as unregisterDirectoryRoot, _ as getDirectoryHandle, _t as isIdbAvailable, a as createHandler, at as registerProvideBackend, b as getFileWriter, bt as isOpfsCapabilityAvailable, c as detectTypeByRelPath, ct as IDB_FS_ROOT, d as downloadFile, dt as OPFS_SUPPORT_KEY, et as walkExactFile, f as dropAsTempFile, ft as bindStorageRootsRefresher, g as getDir, gt as getIdbRoot, h as generalFileImportDesc, ht as createMemoryIdbFsStore, i as copyFromOneHandlerToAnother, it as matchProvideBackend, j as mappedRoots, k as isFsDirectoryHandle, l as directHandlers, lt as IdbDirectoryHandle, m as ensureWorker, mt as createIndexedDbFsStore, n as attachFile, nt as asProvidedFile, o as currentHandleMap, ot as unregisterProvideBackend, p as dropFile, pt as copyHandleTree, q as removeFile, r as clearAllInDirectory, rt as isProvidedDirectory, s as defaultLogger, st as wantsDirectoryProvide, tt as writeFile, u as directoryCacheMap, ut as IdbFileHandle, v as getFileExtension, vt as isIdbFsHandle, w as ghostImage, x as getHandler, xt as isOpfsSupportEnabled, y as getFileHandle, yt as isOpfsBackendActive, z as provide } from "./core5.js";
import { C as $triggerLess, S as $triggerControl, _ as safe, c as booleanRef, f as ref, g as deref$1, h as addToCallChain, i as affected, l as numberRef, n as conditional, o as iterated, p as stringRef, r as DoubleWeakMap, s as unaffected, t as computed, u as observe, v as unwrap, x as $trigger, y as $affected } from "./object.js";
//#region ../../modules/projects/core.ts/src/utils/WRef.ts
var existsMap = /* @__PURE__ */ new WeakMap();
var WeakRefProxyHandler = class {
	_deref(target) {
		return target instanceof WeakRef || typeof target?.deref == "function" ? target?.deref?.() : target;
	}
	get(tg, prop, _receiver) {
		const obj = this._deref(tg), value = obj?.[prop];
		if ((prop == "element" || prop == "value") && obj && (value == null || !(prop in obj))) return obj;
		if (prop == "deref") return () => this._deref(tg);
		if (typeof value == "function") return (...args) => {
			return this._deref(tg)?.[prop]?.(...args);
		};
		return value;
	}
	set(tg, prop, value, _receiver) {
		const obj = this._deref(tg);
		if (obj) return Reflect.set(obj, prop, value);
		return true;
	}
	has(tg, prop) {
		const obj = this._deref(tg);
		if (!obj) return false;
		return prop in obj;
	}
	ownKeys(tg) {
		const obj = this._deref(tg);
		if (!obj) return [];
		return Reflect.ownKeys(obj);
	}
	getOwnPropertyDescriptor(tg, prop) {
		const obj = this._deref(tg);
		if (!obj) return void 0;
		return Object.getOwnPropertyDescriptor(obj, prop);
	}
	deleteProperty(tg, prop) {
		const obj = this._deref(tg);
		if (!obj) return true;
		return Reflect.deleteProperty(obj, prop);
	}
	defineProperty(tg, prop, descriptor) {
		const obj = this._deref(tg);
		if (!obj) return true;
		return Reflect.defineProperty(obj, prop, descriptor);
	}
	getPrototypeOf(tg) {
		const obj = this._deref(tg);
		if (!obj) return null;
		return Object.getPrototypeOf(obj);
	}
	setPrototypeOf(tg, proto) {
		const obj = this._deref(tg);
		if (!obj) return true;
		return Reflect.setPrototypeOf(obj, proto);
	}
	isExtensible(tg) {
		const obj = this._deref(tg);
		if (!obj) return false;
		return Reflect.isExtensible(obj);
	}
	preventExtensions(tg) {
		const obj = this._deref(tg);
		if (!obj) return true;
		return Reflect.preventExtensions(obj);
	}
};
/**
* Create a WeakRef wrapper proxy that allows safe access to weakly referenced objects.
* The proxy automatically dereferences WeakRefs when accessing properties and handles
* function calls on weakly referenced objects.
* @template T - The type of the target object (must be object or Function)
* @param target - The target object or WeakRef to wrap
* @returns A proxy that safely accesses the weakly referenced object
*/
function WRef(target) {
	if (!(typeof target == "object" || typeof target == "function") || typeof target == "symbol") return target;
	const isWeakRef = target instanceof WeakRef || typeof target?.deref == "function";
	target = isWeakRef ? target?.deref?.() : target;
	if (target != null && existsMap.has(target)) return existsMap.get(target);
	const handler = new WeakRefProxyHandler();
	const pm = new Proxy(isWeakRef ? target : new WeakRef(target), handler);
	existsMap.set(target, pm);
	return pm;
}
//#endregion
//#region ../../modules/projects/core.ts/src/utils/Convert.ts
/**
* Orientation-space transforms for grids and drag vectors.
* Used by `GridItemUtils` / `resolveLocalPointToGridCell` and `fest/dom` launcher hit-testing.
*
* Convert position from client space to orientation space.
* @param pos_in_cs - Position in client space [x, y]
* @param size_in_cs - Size in client space [width, height]
* @param or_i - Orientation index (0=normal, 1=90° swapped, 2=180°, 3=270° swapped)
* @returns Position in orientation space [x, y]
*/
var cvt_cs_to_os = (pos_in_cs, size_in_cs, or_i = 0) => {
	const size_in_os = [...size_in_cs];
	const pos_in_swap = [...pos_in_cs];
	if (or_i % 2) {
		pos_in_swap.reverse();
		size_in_os.reverse();
	}
	return [(or_i == 0 || or_i == 3 ? pos_in_swap[0] : size_in_os[0] - pos_in_swap[0]) || 0, (or_i == 0 || or_i == 1 ? pos_in_swap[1] : size_in_os[1] - pos_in_swap[1]) || 0];
};
//#endregion
//#region ../../modules/projects/core.ts/src/utils/MountedFs.ts
var MOUNTED_FS_EVENT = "ssre:fs";
var MOUNTED_FS_HTTP_PATH = "/ssre/fs";
var MOUNTED_FS_WS_PATH = "/ssre/fs/ws";
var createMountedFsId = () => {
	try {
		if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
	} catch {}
	return `fs_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
};
var isMountedFsResponse = (value) => !!value && typeof value === "object" && value.t === "fs-result" && typeof value.id === "string";
//#endregion
//#region ../../modules/projects/dom.ts/src/agate/Properties.ts
var __registeredCssPropertiesSymbol = Symbol.for("dom.ts@__registeredCssProperties");
var __registeredCssProperties = globalThis[__registeredCssPropertiesSymbol] ??= /* @__PURE__ */ new Set();
[
	{
		name: "--screen-width",
		syntax: "<length-percentage>",
		inherits: true,
		initialValue: "0px"
	},
	{
		name: "--screen-height",
		syntax: "<length-percentage>",
		inherits: true,
		initialValue: "0px"
	},
	{
		name: "--visual-width",
		syntax: "<length-percentage>",
		inherits: true,
		initialValue: "0px"
	},
	{
		name: "--visual-height",
		syntax: "<length-percentage>",
		inherits: true,
		initialValue: "0px"
	},
	{
		name: "--clip-ampl",
		syntax: "<number>",
		inherits: true,
		initialValue: "0"
	},
	{
		name: "--clip-freq",
		syntax: "<number>",
		inherits: true,
		initialValue: "0"
	},
	{
		name: "--avail-width",
		syntax: "<length-percentage>",
		inherits: true,
		initialValue: "0px"
	},
	{
		name: "--avail-height",
		syntax: "<length-percentage>",
		inherits: true,
		initialValue: "0px"
	},
	{
		name: "--pixel-ratio",
		syntax: "<number>",
		inherits: true,
		initialValue: "1"
	},
	{
		name: "--percent",
		syntax: "<number>",
		inherits: true,
		initialValue: "0"
	},
	{
		name: "--percent-x",
		syntax: "<number>",
		inherits: true,
		initialValue: "0"
	},
	{
		name: "--percent-y",
		syntax: "<number>",
		inherits: true,
		initialValue: "0"
	},
	{
		name: "--scroll-left",
		syntax: "<number>",
		inherits: true,
		initialValue: "0"
	},
	{
		name: "--scroll-top",
		syntax: "<number>",
		inherits: true,
		initialValue: "0"
	},
	{
		name: "--drag-x",
		syntax: "<length>",
		inherits: false,
		initialValue: "0px"
	},
	{
		name: "--drag-y",
		syntax: "<length>",
		inherits: false,
		initialValue: "0px"
	},
	{
		name: "--grid-r",
		syntax: "<number>",
		inherits: false,
		initialValue: "0"
	},
	{
		name: "--grid-c",
		syntax: "<number>",
		inherits: false,
		initialValue: "0"
	},
	{
		name: "--resize-x",
		syntax: "<length>",
		inherits: false,
		initialValue: "0px"
	},
	{
		name: "--resize-y",
		syntax: "<length>",
		inherits: false,
		initialValue: "0px"
	},
	{
		name: "--shift-x",
		syntax: "<length>",
		inherits: false,
		initialValue: "0px"
	},
	{
		name: "--shift-y",
		syntax: "<length>",
		inherits: false,
		initialValue: "0px"
	},
	{
		name: "--cs-grid-r",
		syntax: "<number>",
		inherits: false,
		initialValue: "0"
	},
	{
		name: "--cs-grid-c",
		syntax: "<number>",
		inherits: false,
		initialValue: "0"
	},
	{
		name: "--cs-p-grid-r",
		syntax: "<number>",
		inherits: false,
		initialValue: "0"
	},
	{
		name: "--cs-p-grid-c",
		syntax: "<number>",
		inherits: false,
		initialValue: "0"
	},
	{
		name: "--os-grid-r",
		syntax: "<number>",
		inherits: false,
		initialValue: "0"
	},
	{
		name: "--os-grid-c",
		syntax: "<number>",
		inherits: false,
		initialValue: "0"
	},
	{
		name: "--rv-grid-r",
		syntax: "<number>",
		inherits: false,
		initialValue: "0"
	},
	{
		name: "--rv-grid-c",
		syntax: "<number>",
		inherits: false,
		initialValue: "0"
	},
	{
		name: "--cell-x",
		syntax: "<integer>",
		inherits: false,
		initialValue: "0"
	},
	{
		name: "--cell-y",
		syntax: "<integer>",
		inherits: false,
		initialValue: "0"
	}
].forEach((options) => {
	if (typeof CSS == "undefined" || typeof CSS?.registerProperty != "function") return;
	const name = String(options?.name || "").trim();
	if (!name || __registeredCssProperties.has(name)) return;
	try {
		CSS.registerProperty(options);
	} catch (e) {
		if (!(String(e?.name || "").toLowerCase() === "invalidmodificationerror")) console.warn(e);
	} finally {
		__registeredCssProperties.add(name);
	}
});
//#endregion
//#region ../../modules/projects/dom.ts/src/agate/Utils.ts
var createIdleDeadlineFallback = () => ({
	didTimeout: false,
	timeRemaining: () => 0
});
var runWhenIdle$3 = (cb, timeout = 1e3) => {
	if (typeof globalThis.requestIdleCallback === "function") return globalThis.requestIdleCallback(cb, { timeout });
	return setTimeout(() => cb(createIdleDeadlineFallback()), 0);
};
var makeRAFCycle = () => {
	const control = {
		canceled: false,
		rAFs: /* @__PURE__ */ new Set(),
		last: null,
		cancel() {
			this.canceled = true;
			cancelAnimationFrame(this.last);
			return this;
		},
		shedule(cb) {
			this.rAFs.add(cb);
			return this;
		}
	};
	(async () => {
		while (!control?.canceled) {
			await Promise.all((control?.rAFs?.values?.() ?? [])?.map?.((rAF) => Promise.try(rAF)?.catch?.(console.warn.bind(console))));
			control.rAFs?.clear?.();
			if (typeof requestAnimationFrame != "undefined") await new Promise((res) => {
				control.last = requestAnimationFrame(res);
			});
			else await new Promise((res) => {
				setTimeout(res, 16);
			});
		}
	})();
	return control;
};
var RAFBehavior = (shed = makeRAFCycle()) => {
	return (cb) => shed.shedule(cb);
};
var ROOT$1 = typeof document != "undefined" ? document?.documentElement : null;
var setAttributesIfNull = (element, attrs = {}) => {
	if (!attrs || typeof attrs != "object" || !element) return;
	return Array.from(Object.entries(attrs)).map(([name, value]) => {
		const old = element.getAttribute(name);
		if (value == null) element.removeAttribute(name);
		else if (value != old) element.setAttribute(name, old == "" ? value ?? old : old ?? value);
	});
};
var throttleMap = /* @__PURE__ */ new Map();
var setIdleInterval$1 = (cb, timeout = 1e3, ...args) => {
	const status = {
		running: true,
		cancel: () => {
			status.running = false;
		}
	};
	runWhenIdle$3(async () => {
		if (!cb || typeof cb != "function") return;
		while (status.running) {
			await Promise.all([Promise.try(cb, ...args), new Promise((r) => setTimeout(r, timeout))]).catch?.(console.warn.bind(console));
			await Promise.any([new Promise((r) => runWhenIdle$3(r, timeout)), new Promise((r) => setTimeout(r, timeout))]);
		}
		status.cancel = () => {};
	}, timeout);
	return status?.cancel;
};
if (typeof requestAnimationFrame != "undefined") requestAnimationFrame(async () => {
	while (true) {
		throttleMap.forEach((cb) => cb?.());
		await new Promise((r) => requestAnimationFrame(r));
	}
});
var borderBoxWidth = Symbol("@border-box-width");
var borderBoxHeight = Symbol("@border-box-height");
var contentBoxWidth = Symbol("@content-box-width");
var contentBoxHeight = Symbol("@content-box-height");
var onBorderObserve = /* @__PURE__ */ new WeakMap();
var onContentObserve = /* @__PURE__ */ new WeakMap();
var doContentObserve = (element, cb = () => {}) => {
	if (!(element instanceof HTMLElement)) return;
	if (!onContentObserve.has(element)) {
		element[contentBoxWidth] = element.clientWidth;
		element[contentBoxHeight] = element.clientHeight;
		const observer = new ResizeObserver((entries) => {
			for (const entry of entries) if (entry.contentBoxSize) {
				const contentBoxSize = entry.contentBoxSize[0];
				if (contentBoxSize) {
					element[contentBoxWidth] = Math.min(contentBoxSize.inlineSize, element.clientWidth);
					element[contentBoxHeight] = Math.min(contentBoxSize.blockSize, element.clientHeight);
					cb?.(element);
				}
			}
		});
		onContentObserve.set(element, observer);
		observer.observe(element?.element ?? element, { box: "content-box" });
	}
};
var doBorderObserve = (element, cb = () => {}) => {
	if (!(element instanceof HTMLElement)) return;
	if (!onBorderObserve.has(element)) {
		element[borderBoxWidth] = element.offsetWidth;
		element[borderBoxHeight] = element.offsetHeight;
		const observer = new ResizeObserver((entries) => {
			for (const entry of entries) if (entry.borderBoxSize) {
				const borderBoxSize = entry.borderBoxSize[0];
				if (borderBoxSize) {
					element[borderBoxWidth] = Math.min(borderBoxSize.inlineSize, element.offsetWidth);
					element[borderBoxHeight] = Math.min(borderBoxSize.blockSize, element.offsetHeight);
					cb?.(element);
				}
			}
		});
		onBorderObserve.set(element, observer);
		observer.observe(element?.element ?? element, { box: "border-box" });
	}
};
var setChecked = (input, value, ev) => {
	if (value != null && input.checked != value) if (input?.["type"] == "checkbox" || input?.["type"] == "radio" && !input?.checked) {
		input?.click?.();
		ev?.preventDefault?.();
	} else {
		input.checked = !!value;
		input?.dispatchEvent?.(new Event("change", {
			bubbles: true,
			cancelable: true
		}));
	}
};
var isValidParent$1 = (parent) => {
	return parent != null && parent instanceof HTMLElement && !(parent instanceof DocumentFragment || parent instanceof HTMLBodyElement) ? parent : null;
};
var indexOf = (element, node) => {
	if (element == null || node == null) return -1;
	return Array.from(element?.childNodes ?? [])?.indexOf?.(node) ?? -1;
};
var createElementVanilla = (selector) => {
	if (selector == ":fragment:") return document.createDocumentFragment();
	const create = document.createElement.bind(document);
	for (var node = create("div"), match, className = ""; selector && (match = selector.match("^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)([\"'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]"));) {
		if (match[1]) node = create(match[1]);
		if (match[2]) node.id = match[2];
		if (match[3]) className += " " + match[3];
		if (match[4]) node.setAttribute(match[4], match[7] || "");
		selector = selector.slice(match[0].length);
	}
	if (className) node.className = className.slice(1);
	return node;
};
var isElement = (el) => {
	return el != null && (el instanceof Node || el instanceof Text || el instanceof Element || el instanceof Comment || el instanceof HTMLElement || el instanceof DocumentFragment) ? el : null;
};
var includeSelf = (target, selector) => {
	const sel = typeof selector === "string" ? selector.trim() : "";
	if (!sel || !target) return target ?? null;
	try {
		return target.querySelector(sel) ?? (target.matches(sel) ? target : null);
	} catch {
		return null;
	}
};
var hasParent = (current, parent) => {
	while (current) {
		if (!(current?.element ?? current)) return false;
		if ((current?.element ?? current) === (parent?.element ?? parent)) return true;
		current = current.parentElement ?? (current.parentNode == current?.getRootNode?.({ composed: true }) ? current?.getRootNode?.({ composed: true })?.host : current?.parentNode);
	}
};
var passiveOpts$1 = {};
function addEvent(target, type, cb, opts = passiveOpts$1) {
	target?.addEventListener?.(type, cb, opts);
	const wr = typeof target == "object" || typeof target == "function" && !target?.deref ? new WeakRef(target) : target;
	return () => wr?.deref?.()?.removeEventListener?.(type, cb, opts);
}
function removeEvent(target, type, cb, opts = passiveOpts$1) {
	target?.removeEventListener?.(type, cb, opts);
}
var addEvents = (root, handlers) => {
	root = root instanceof WeakRef ? root.deref() : root;
	return [...Object.entries(handlers)].map?.(([name, cb]) => Array.isArray(cb) ? addEvent(root, name, ...cb) : addEvent(root, name, cb));
};
var removeEvents = (root, handlers) => {
	root = root instanceof WeakRef ? root.deref() : root;
	return [...Object.entries(handlers)].map?.(([name, cb]) => Array.isArray(cb) ? removeEvent(root, name, ...cb) : removeEvent(root, name, cb));
};
var getEventTarget = (ev) => {
	if (!ev) return null;
	if (ev?.composedPath && typeof ev.composedPath === "function") {
		const path = ev.composedPath();
		for (const node of path) if (node instanceof HTMLElement || node instanceof Element) return node;
	}
	const target = ev?.target;
	if (target instanceof HTMLElement || target instanceof Element) return target;
	return null;
};
var containsOrSelf = (a, b, ev) => {
	if (b == null || !(b instanceof Node) && b?.element == null) return false;
	if (a == b || (a?.element ?? a) == (b?.element ?? b)) return true;
	if (ev?.composedPath && typeof ev.composedPath === "function") {
		const path = ev.composedPath();
		const aEl = a?.element ?? a;
		const bEl = b?.element ?? b;
		if (path.includes(aEl) && path.includes(bEl)) {
			const aIndex = path.indexOf(aEl);
			const bIndex = path.indexOf(bEl);
			if (bIndex >= 0 && aIndex >= 0 && bIndex < aIndex) return true;
		}
	}
	if (a?.contains?.(b?.element ?? b) || a?.getRootNode({ composed: true })?.host == (b?.element ?? b)) return true;
	return false;
};
var MOCElement = (element, selector, ev) => {
	const sel = typeof selector === "string" ? selector.trim() : "";
	if (!sel) return element ?? null;
	if (ev?.composedPath && typeof ev.composedPath === "function") {
		const path = ev.composedPath();
		for (const node of path) if (node instanceof HTMLElement || node instanceof Element) try {
			if (node.matches?.(sel)) return node;
		} catch {}
	}
	let self = null;
	let hostMatched = null;
	let closest = null;
	try {
		self = element?.matches?.(sel) ? element : null;
		const host = (element?.getRootNode({ composed: true }) ?? element?.parentElement?.getRootNode({ composed: true }))?.host;
		hostMatched = host?.matches?.(sel) ? host : null;
		closest = element?.closest?.(sel) ?? self?.closest?.(sel) ?? hostMatched?.closest?.(sel) ?? null;
	} catch {}
	return self ?? closest ?? hostMatched;
};
var isInFocus = (element, selectorOrElement, dir = "parent") => {
	if (!element) return false;
	if (element.checkVisibility && !element.checkVisibility({
		checkOpacity: true,
		checkVisibilityCSS: true
	})) return false;
	if (!element.checkVisibility && element.offsetParent === null && element.style.position !== "fixed") return false;
	let active = document.activeElement;
	while (active && active.shadowRoot && active.shadowRoot.activeElement) active = active.shadowRoot.activeElement;
	const isFocused = active === element || hasParent(active, element);
	const isHovered = element.matches(":hover");
	if (!isFocused && !isHovered && !selectorOrElement) return false;
	if (selectorOrElement) {
		if (typeof selectorOrElement === "string") if (dir === "parent") return !!MOCElement(element, selectorOrElement);
		else {
			const altCnd = !!MOCElement(isFocused ? active : element.querySelector(":hover") || element, selectorOrElement);
			return element?.querySelector?.(selectorOrElement) != null || element?.matches?.(selectorOrElement) || altCnd;
		}
		else if (selectorOrElement instanceof HTMLElement) if (dir === "parent") return hasParent(element, selectorOrElement) || false;
		else return hasParent(selectorOrElement, element) || false;
	}
	return true;
};
//#endregion
//#region ../../modules/projects/dom.ts/src/agate/Zoom.ts
var zoomValuesSymbol = Symbol.for("dom.ts@zoomValues");
var zoomValues = globalThis[zoomValuesSymbol] ??= /* @__PURE__ */ new WeakMap();
var zoomOf = (element = document.documentElement) => {
	return zoomValues.getOrInsertComputed(element, () => {
		const container = (element?.matches?.(".ui-orientbox") ? element : null) || element?.closest?.(".ui-orientbox") || document.body;
		if (container?.zoom) return container?.zoom || 1;
		if (element?.currentCSSZoom) return element?.currentCSSZoom || 1;
	});
};
var fixedClientZoom = (element = document.documentElement) => {
	return (element?.currentCSSZoom != null ? 1 : zoomOf(element)) || 1;
};
var unfixedClientZoom = (element = document.documentElement) => {
	return (element?.currentCSSZoom == null ? 1 : element?.currentCSSZoom) || 1;
};
var orientOf = (element = document.documentElement) => {
	const container = (element?.matches?.("[orient], [data-mixin=\"ui-orientbox\"]") ? element : null) || element?.closest?.("[orient], [data-mixin=\"ui-orientbox\"]") || element;
	if (container?.hasAttribute?.("orient")) return parseInt(container?.getAttribute?.("orient") || "0") || 0;
	if (container?.orient != null && Number.isFinite(Number(container.orient))) return Number(container.orient) || 0;
	try {
		const raw = container?.style?.getPropertyValue?.("--orient") || (typeof getComputedStyle === "function" && container ? getComputedStyle(container).getPropertyValue("--orient") : "") || "";
		const n = parseInt(String(raw).trim(), 10);
		if (Number.isFinite(n)) return n;
	} catch {}
	return 0;
};
var getBoundingOrientRect = (element, orient = null) => {
	const zoom = unfixedClientZoom(element) || 1;
	const box = element?.getBoundingClientRect?.();
	const nbx = {
		left: box?.left / zoom,
		right: box?.right / zoom,
		top: box?.top / zoom,
		bottom: box?.bottom / zoom,
		width: box?.width / zoom,
		height: box?.height / zoom
	};
	const or_i = orient ?? (orientOf(element) || 0);
	const vv = typeof window !== "undefined" ? window.visualViewport : null;
	const size = [((vv?.width ?? document.documentElement?.clientWidth ?? window.innerWidth) || 1) / zoom, ((vv?.height ?? document.documentElement?.clientHeight ?? window.innerHeight) || 1) / zoom];
	const [left_, top_] = cvt_cs_to_os([nbx.left, nbx.top], size, or_i);
	const [right_, bottom_] = cvt_cs_to_os([nbx.right, nbx.bottom], size, or_i);
	const [left, right] = or_i == 0 || or_i == 3 ? [left_, right_] : [right_, left_];
	const [top, bottom] = or_i == 0 || or_i == 1 ? [top_, bottom_] : [bottom_, top_];
	const [width, height] = or_i % 2 ? [nbx.height, nbx.width] : [nbx.width, nbx.height];
	return {
		left,
		top,
		right,
		bottom,
		width,
		height
	};
};
var bbw = (el, orient = null) => (orient ?? orientOf(el)) % 2 ? el[borderBoxHeight] ?? el?.clientHeight : el[borderBoxWidth] ?? el?.clientWidth;
var bbh = (el, orient = null) => (orient ?? orientOf(el)) % 2 ? el[borderBoxWidth] ?? el?.clientWidth : el[borderBoxHeight] ?? el?.clientHeight;
var cbw = (el, orient = null) => (orient ?? orientOf(el)) % 2 ? el[contentBoxHeight] ?? el?.clientHeight : el[contentBoxWidth] ?? el?.clientWidth;
var cbh = (el, orient = null) => (orient ?? orientOf(el)) % 2 ? el[contentBoxWidth] ?? el?.clientWidth : el[contentBoxHeight] ?? el?.clientHeight;
//#endregion
//#region ../../modules/projects/dom.ts/src/agate/Viewport.ts
var runWhenIdle$2 = (cb, timeout = 100) => {
	if (typeof globalThis.requestIdleCallback === "function") return globalThis.requestIdleCallback(cb, { timeout });
	return setTimeout(() => cb({
		didTimeout: false,
		timeRemaining: () => 0
	}), 0);
};
var KEYBOARD_OVERLAY_PX = 80;
var virtualKeyboard = () => {
	try {
		return globalThis.navigator?.virtualKeyboard ?? null;
	} catch {
		return null;
	}
};
var ensureVirtualKeyboardOverlay = () => {
	const vk = virtualKeyboard();
	if (!vk) return;
	try {
		if (vk.overlaysContent !== true) vk.overlaysContent = true;
	} catch {}
};
var isImeTarget = (el) => {
	if (!el || !(el instanceof HTMLElement)) return false;
	if (el.isContentEditable) return true;
	const tag = el.tagName;
	if (tag === "TEXTAREA" || tag === "SELECT") return true;
	if (tag !== "INPUT") return false;
	const type = String(el.type || "text").toLowerCase();
	return ![
		"button",
		"checkbox",
		"radio",
		"file",
		"submit",
		"reset",
		"image",
		"range",
		"color",
		"hidden"
	].includes(type);
};
var layoutLockOrient = "";
var layoutLockW = 0;
var layoutLockH = 0;
/** Build client-coordinate bounds for a fixed overlay root. */
var createFixedOverlayViewport = (width, height, left = 0, top = 0) => {
	const safeWidth = Math.max(0, Number(width) || 0);
	const safeHeight = Math.max(0, Number(height) || 0);
	const safeLeft = Number(left) || 0;
	const safeTop = Number(top) || 0;
	return {
		left: safeLeft,
		top: safeTop,
		right: safeLeft + safeWidth,
		bottom: safeTop + safeHeight,
		width: safeWidth,
		height: safeHeight
	};
};
/**
* Read bounds for `position: fixed` overlays.
* INVARIANT: use the same client-coordinate origin as PointerEvent and DOMRect;
* layout-lock variables remain reserved for desktop/workspace sizing.
*/
var readFixedOverlayViewport = () => {
	if (typeof window === "undefined") return createFixedOverlayViewport(0, 0);
	const root = typeof document !== "undefined" ? document.documentElement : null;
	return createFixedOverlayViewport(Number(root?.clientWidth) || Number(window.innerWidth) || 0, Number(root?.clientHeight) || Number(window.innerHeight) || 0);
};
var readLayoutViewport = () => {
	if (typeof window === "undefined") return {
		width: 0,
		height: 0,
		keyboard: 0
	};
	const vv = window.visualViewport;
	const innerW = Number(window.innerWidth) || 0;
	const innerH = Number(window.innerHeight) || 0;
	const vvW = Number(vv?.width) || 0;
	const vvH = Number(vv?.height) || 0;
	const vvTop = Number(vv?.offsetTop) || 0;
	const vkH = Number(virtualKeyboard()?.boundingBox?.height) || 0;
	const vvOverlap = innerH > 0 && vvH > 0 ? innerH - vvH - vvTop : 0;
	const keyboard = vkH >= KEYBOARD_OVERLAY_PX ? vkH : vvOverlap >= KEYBOARD_OVERLAY_PX ? vvOverlap : 0;
	const candidateW = Math.max(innerW, vvW);
	const candidateH = Math.max(innerH, vvH + vvTop, keyboard > 0 ? vvH + keyboard : 0);
	const orient = typeof matchMedia !== "undefined" && matchMedia("(orientation: landscape)")?.matches ? "l" : "p";
	if (orient !== layoutLockOrient) {
		layoutLockOrient = orient;
		layoutLockW = 0;
		layoutLockH = 0;
	}
	const suddenShrink = layoutLockH > 0 && layoutLockH - candidateH >= KEYBOARD_OVERLAY_PX;
	if (!(keyboard > 0 || isImeTarget(document.activeElement) || suddenShrink)) {
		layoutLockW = candidateW;
		layoutLockH = candidateH;
	} else {
		layoutLockW = Math.max(candidateW, layoutLockW);
		layoutLockH = Math.max(candidateH, layoutLockH);
	}
	return {
		width: layoutLockW || candidateW,
		height: layoutLockH || candidateH,
		keyboard
	};
};
var pinOverlayScroll = () => {
	if (typeof window === "undefined") return;
	if (readLayoutViewport().keyboard <= 0 && !isImeTarget(document.activeElement)) return;
	if (window.scrollY || document.documentElement.scrollTop || document.body?.scrollTop) window.scrollTo(0, 0);
};
var getAvailSize = () => {
	ensureVirtualKeyboardOverlay();
	const l = typeof matchMedia != "undefined" ? matchMedia("(orientation: landscape)")?.matches : false;
	const vv = typeof window !== "undefined" ? window.visualViewport : null;
	const layout = readLayoutViewport();
	const vvBlock = {
		"--vv-width": `${vv?.width ?? (typeof window !== "undefined" ? window.innerWidth : 0)}px`,
		"--vv-height": `${vv?.height ?? (typeof window !== "undefined" ? window.innerHeight : 0)}px`,
		"--vv-offset-left": `${vv?.offsetLeft ?? 0}px`,
		"--vv-offset-top": `${vv?.offsetTop ?? 0}px`,
		"--vv-scale": String(vv?.scale ?? 1),
		"--lv-width": `${layout.width}px`,
		"--lv-height": `${layout.height}px`,
		"--keyboard-overlay-height": `${layout.keyboard}px`
	};
	if (typeof document !== "undefined") document.documentElement.toggleAttribute("data-vk-open", layout.keyboard > 0);
	if (typeof screen != "undefined") {
		const aw = screen?.availWidth + "px";
		const ah = screen?.availHeight + "px";
		return {
			"--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
			"--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
			"--avail-width": l ? ah : aw,
			"--avail-height": l ? aw : ah,
			"--view-height": `${layout.height || Math.min(screen?.availHeight, window?.innerHeight) || 0}px`,
			"--pixel-ratio": String(devicePixelRatio || 1),
			...vvBlock
		};
	}
	return {
		"--screen-width": "0px",
		"--screen-height": "0px",
		"--avail-width": "0px",
		"--avail-height": "0px",
		"--view-height": `${layout.height}px`,
		"--pixel-ratio": "1",
		...vvBlock
	};
};
var availSize = getAvailSize();
var orientationNumberMap = {
	"portrait-primary": 0,
	"landscape-primary": 1,
	"portrait-secondary": 2,
	"landscape-secondary": 3
};
var updateVP = (ev) => {
	const rule = document.documentElement;
	Object.assign(availSize, getAvailSize());
	Object.entries(availSize).forEach(([propName, propValue]) => {
		const exists = rule?.style?.getPropertyValue(propName);
		if (!exists || exists != propValue) rule?.style?.setProperty?.(propName, propValue || "", "");
	});
	document.documentElement.style.setProperty("--orientation-secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
};
var getCorrectOrientation = () => {
	let orientationType = screen?.orientation?.type || "portrait-primary";
	if (!globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches) {
		if (matchMedia("(orientation: portrait)").matches) orientationType = orientationType.replace("landscape", "portrait");
		else if (matchMedia("(orientation: landscape)").matches) orientationType = orientationType.replace("portrait", "landscape");
	}
	return orientationType;
};
var passiveOpts = { passive: true };
var whenAnyScreenChanges = (cb) => {
	let ticking = false;
	const update = () => {
		if (!ticking) {
			requestAnimationFrame(() => {
				updateVP();
				cb();
				ticking = false;
			});
			ticking = true;
		}
	};
	const unsubscribers = [];
	unsubscribers.push(addEvent(navigator?.virtualKeyboard, "geometrychange", update, passiveOpts));
	unsubscribers.push(addEvent(window?.visualViewport, "scroll", () => {
		pinOverlayScroll();
		update();
	}, passiveOpts));
	unsubscribers.push(addEvent(window?.visualViewport, "resize", update, passiveOpts));
	unsubscribers.push(addEvent(screen?.orientation, "change", update));
	unsubscribers.push(addEvent(window, "resize", update));
	unsubscribers.push(addEvent(document?.documentElement, "fullscreenchange", update));
	unsubscribers.push(addEvent(document, "DOMContentLoaded", update));
	unsubscribers.push(addEvent(matchMedia("(orientation: portrait)"), "change", update));
	unsubscribers.push(addEvent(matchMedia("(orientation: landscape)"), "change", update));
	unsubscribers.push(addEvent(document, "focusin", () => {
		ensureVirtualKeyboardOverlay();
		if (isImeTarget(document.activeElement)) {
			layoutLockW = Math.max(layoutLockW, Number(window.innerWidth) || 0, Number(window.visualViewport?.width) || 0);
			layoutLockH = Math.max(layoutLockH, Number(window.innerHeight) || 0, Number(window.visualViewport?.height) || 0);
		}
		pinOverlayScroll();
		update();
	}, {
		capture: true,
		passive: true
	}));
	unsubscribers.push(addEvent(document, "focusout", update, passiveOpts));
	ensureVirtualKeyboardOverlay();
	update();
	runWhenIdle$2(() => update(), 100);
	return () => unsubscribers.forEach((unsub) => unsub());
};
var fixOrientToScreen = (element) => {
	if (!element?.classList?.contains?.("native-portrait-optimized")) {
		element?.classList?.add?.("native-portrait-optimized");
		return whenAnyScreenChanges(() => {
			const next = orientationNumberMap?.[getCorrectOrientation()] ?? 0;
			element.orient = next;
			element.setAttribute?.("orient", String(next));
			element.style?.setProperty?.("--orient", String(next));
		});
	}
};
new OffscreenCanvas(1, 1).getContext("2d");
//#endregion
//#region ../../modules/projects/dom.ts/src/mixin/Behavior.ts
var boundBehaviors = /* @__PURE__ */ new WeakMap();
var bindBehavior = (element, behSet, behavior) => {
	new WeakRef(element);
	if (!behSet.has(behavior)) behSet.add(behavior);
	return element;
};
var reflectBehaviors = (element, behaviors) => {
	if (!element) return;
	if (behaviors) {
		const behSet = boundBehaviors.getOrInsert(element, /* @__PURE__ */ new Set());
		[...behaviors?.values?.() || []].map((e) => bindBehavior(element, behSet, e));
	}
	return element;
};
//#endregion
//#region ../../modules/projects/dom.ts/src/mixin/Store.ts
var namedStoreMapsSymbol = Symbol.for("dom.ts@namedStoreMaps");
var namedStoreMaps = globalThis[namedStoreMapsSymbol] ??= /* @__PURE__ */ new Map();
var getStoresOfElement = (map, element) => {
	const E = [...map.entries() || []];
	return new Map(E?.map?.(([n, m]) => [n, m?.get?.(element)])?.filter?.(([n, e]) => !!e) || []);
};
var isWeakCompatible$3 = (element) => {
	return (typeof element == "object" || typeof element == "function") && element != null;
};
var bindStore = (element, name, obj) => {
	if (!isWeakCompatible$3(element) && element != null) return element;
	let weakMap = namedStoreMaps.get(name);
	if (!weakMap) {
		weakMap = /* @__PURE__ */ new WeakMap();
		namedStoreMaps.set(name, weakMap);
	}
	if (!weakMap.has(element) && element != null) weakMap.set(element, obj);
	return element;
};
var reflectStores = (element, stores) => {
	if (!element || !stores) return;
	for (const [name, obj] of stores.entries()) bindStore(element, name, obj);
	return element;
};
//#endregion
//#region ../../modules/projects/dom.ts/src/mixin/Mixins.ts
var reflectMixins = (element, mixins) => {
	if (!element) return;
	if (mixins) {
		const mixinSet = boundMixinSet?.get?.(element) ?? /* @__PURE__ */ new WeakSet();
		if (!boundMixinSet?.has?.(element)) boundMixinSet?.set?.(element, mixinSet);
		[...mixins?.values?.() || []].map((e) => bindMixins(element, e, mixinSet));
	}
	return element;
};
var getElementRelated = (element) => {
	return {
		storeSet: getStoresOfElement(namedStoreMaps, element),
		mixinSet: boundMixinSet?.get?.(element),
		behaviorSet: boundBehaviors?.get?.(element)
	};
};
var bindMixins = (element, mixin, mixSet) => {
	const wel = new WeakRef(element);
	mixSet ||= boundMixinSet?.get?.(element);
	if (!mixSet?.has?.(mixin)) {
		mixSet?.add?.(mixin);
		mixinElements?.get?.(mixin)?.add?.(element);
		if (mixin.name) element?.setAttribute?.("data-mixin", [...element?.getAttribute?.("data-mixin")?.split?.(" ") || [], mixin.name].filter((n) => !!n).join(" "));
		mixin?.connect?.(wel, mixin, getElementRelated(element));
	}
	return element;
};
var boundMixinSetSymbol = Symbol.for("dom.ts@boundMixinSet");
var boundMixinSet = globalThis[boundMixinSetSymbol] ??= /* @__PURE__ */ new WeakMap();
var mixinElementsSymbol = Symbol.for("dom.ts@mixinElements");
var mixinElements = globalThis[mixinElementsSymbol] ??= /* @__PURE__ */ new WeakMap();
var mixinRegistrySymbol = Symbol.for("dom.ts@mixinRegistry");
var mixinRegistry = globalThis[mixinRegistrySymbol] ??= /* @__PURE__ */ new Map();
var mixinNamespaceSymbol = Symbol.for("dom.ts@mixinNamespace");
var mixinNamespace = globalThis[mixinNamespaceSymbol] ??= /* @__PURE__ */ new WeakMap();
var updateMixinAttributes = (element, mixin) => {
	if (typeof mixin == "string") mixin = mixinRegistry?.get?.(mixin);
	const names = /* @__PURE__ */ new Set([...element?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
	const mixins = new Set([...names].map((n) => mixinRegistry?.get?.(n)).filter((m) => !!m));
	const mixinSet = boundMixinSet?.get?.(element) ?? /* @__PURE__ */ new WeakSet();
	if (!mixinElements?.has?.(mixin)) mixinElements?.set?.(mixin, /* @__PURE__ */ new WeakSet());
	if (!boundMixinSet?.has?.(element)) boundMixinSet?.set?.(element, mixinSet);
	const wel = new WeakRef(element);
	if (!mixinSet?.has?.(mixin)) {
		if (!mixins.has(mixin)) mixin?.disconnect?.(wel, mixin, getElementRelated(element));
		if (mixins.has(mixin) || !mixinElements?.get?.(mixin)?.has?.(element)) {
			mixin?.connect?.(wel, mixin, getElementRelated(element));
			names.add(mixinNamespace?.get?.(mixin));
			mixinSet?.add?.(mixin);
			element?.setAttribute?.("data-mixin", [...names].filter((n) => !!n).join(" "));
		}
		mixinElements?.get?.(mixin)?.add?.(element);
	}
	if (mixinSet?.has?.(mixin)) {
		if (!mixins.has(mixin)) {
			mixinSet?.delete?.(mixin);
			mixin?.disconnect?.(wel, mixin, getElementRelated(element));
		}
	}
};
var roots = /* @__PURE__ */ new Set();
var addRoot = (root = typeof document != "undefined" ? document : null) => {
	if (!root) return;
	if (!roots?.has?.(root)) {
		roots?.add?.(root);
		observeAttributeBySelector(root, "*", "data-mixin", (mutation) => updateAllMixins(mutation.target));
		observeBySelector(root, "[data-mixin]", (mutation) => {
			for (const element of mutation.addedNodes) if (element instanceof HTMLElement) updateAllMixins(element);
		});
		observeStyleTree(root);
	}
	return root;
};
var updateAllMixins = (element) => {
	const names = /* @__PURE__ */ new Set([...element?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
	[...new Set([...names].map((n) => mixinRegistry?.get?.(n)).filter((m) => !!m))].map?.((m) => updateMixinAttributes(element, m));
};
var updateMixinAttributesAll = (elements, mixin) => {
	elements.forEach((e) => mixin ? updateMixinAttributes(e, mixin) : updateAllMixins(e));
};
var updateMixinAttributesAllInRoots = (mixin) => {
	for (const root of roots) updateMixinAttributesAll(root?.querySelectorAll?.("[data-mixin]"), mixin);
};
var nameRegistryF = new FinalizationRegistry((key) => {
	mixinRegistry?.delete?.(key);
});
var registerMixin = (name, mixin) => {
	if (!mixinNamespace?.has?.(mixin)) {
		const key = name?.trim?.();
		if (key) {
			mixinNamespace?.set?.(mixin, key);
			mixinRegistry?.set?.(key, mixin);
			nameRegistryF?.register?.(mixin, key);
			updateMixinAttributesAllInRoots(mixin);
		}
	}
};
addRoot(typeof document != "undefined" ? document : null);
var DOMMixin = class {
	constructor(name = null) {
		if (name) registerMixin(name, this);
	}
	connect(wElement, wSelf, related) {
		return this;
	}
	disconnect(wElement, wSelf, related) {
		return this;
	}
	storeForElement(element) {
		return namedStoreMaps.get(this.name || "")?.get?.(element);
	}
	relatedForElement(element) {
		return getElementRelated(element);
	}
	get elements() {
		return mixinElements?.get?.(this);
	}
	get storage() {
		return namedStoreMaps?.get?.(this.name || "");
	}
	get name() {
		return mixinNamespace?.get?.(this);
	}
};
//#endregion
//#region ../../modules/projects/dom.ts/src/mixin/Handler.ts
var handleHidden = (element, _, visible) => {
	const $ref = visible;
	if (hasValue(visible)) visible = visible.value;
	const isVisible = (visible = normalizePrimitive(visible)) != null && visible !== false;
	$avoidTrigger($ref, () => {
		if (element instanceof HTMLInputElement) element.hidden = !isVisible;
		else if (isVisible) element?.removeAttribute?.("data-hidden");
		else element?.setAttribute?.("data-hidden", "");
	});
	return element;
};
var handleProperty = (el, prop, val) => {
	if (!(prop = typeof prop == "string" ? kebabToCamel(prop) : prop) || !el || [
		"style",
		"dataset",
		"attributeStyleMap",
		"styleMap",
		"computedStyleMap"
	].indexOf(prop || "") != -1) return el;
	const $ref = val;
	if (hasValue(val)) val = val.value;
	if (el?.[prop] === val) return el;
	if (el?.[prop] !== val) $avoidTrigger($ref, () => {
		if (val != null) el[prop] = val;
		else delete el[prop];
	});
	return el;
};
var handleDataset = (el, prop, val) => {
	const datasetRef = el?.dataset;
	if (!prop || !el || !datasetRef) return el;
	const $ref = val;
	if (hasValue(val)) val = val?.value;
	prop = kebabToCamel(prop);
	if (datasetRef?.[prop] === (val = normalizePrimitive(val))) return el;
	if (val == null || val === false) delete datasetRef[prop];
	else $avoidTrigger($ref, () => {
		if (typeof val != "object" && typeof val != "function") datasetRef[prop] = String(val);
		else delete datasetRef[prop];
	});
	return el;
};
var deleteStyleProperty = (el, name) => el.style.removeProperty(camelToKebab$1(name));
var handleStyleChange = (el, prop, val) => {
	const styleRef = el?.style;
	if (!prop || typeof prop != "string" || !el || !styleRef) return el;
	$avoidTrigger(val, () => {
		if (isVal(val) || hasValue(val) || isValueUnit(val)) setStyleProperty(el, prop, val);
		else if (val == null) deleteStyleProperty(el, prop);
	});
	return el;
};
var handleAttribute = (el, prop, val) => {
	if (!prop || !el) return el;
	const $ref = val;
	if (hasValue(val)) val = val.value;
	prop = camelToKebab$1(prop);
	if (el?.getAttribute?.(prop) === (val = normalizePrimitive(val))) return el;
	$avoidTrigger($ref, () => {
		if (typeof val != "object" && typeof val != "function" && val != null && (typeof val == "boolean" ? val == true : true)) el?.setAttribute?.(prop, String(val));
		else el?.removeAttribute?.(prop);
	});
	return el;
};
//#endregion
//#region ../../modules/projects/dom.ts/src/mixin/junction/types.ts
function junctionToBox$1(a, b) {
	const left = Math.min(a.x, b.x);
	const top = Math.min(a.y, b.y);
	const right = Math.max(a.x, b.x);
	const bottom = Math.max(a.y, b.y);
	return {
		left,
		top,
		right,
		bottom,
		width: right - left,
		height: bottom - top
	};
}
var JUNCTION_SELECT_EVENTS$1 = {
	start: "junction-select:start",
	move: "junction-select:move",
	end: "junction-select:end",
	cancel: "junction-select:cancel"
};
var JUNCTION_DRAG_EVENTS$1 = {
	start: "junction-drag:start",
	move: "junction-drag:move",
	end: "junction-drag:end"
};
var JUNCTION_RESIZE_EVENTS$1 = {
	start: "junction-resize:start",
	move: "junction-resize:move",
	end: "junction-resize:end"
};
//#endregion
//#region ../../modules/projects/dom.ts/src/mixin/junction/JunctionMixins.ts
/**
* Junction-based DOM mixins: selection (A/B), drag, resize.
*/
var mixinDisposersSymbol$1 = Symbol.for("dom.ts@mixinDisposers");
var mixinDisposers$1 = globalThis[mixinDisposersSymbol$1] ??= /* @__PURE__ */ new WeakMap();
var pushDisposable$1 = (host, mixinName, fn) => {
	const map = mixinDisposers$1.get(host) ?? /* @__PURE__ */ new Map();
	const list = map.get(mixinName) ?? [];
	list.push(fn);
	map.set(mixinName, list);
	mixinDisposers$1.set(host, map);
};
var runDisposers$1 = (host, mixinName) => {
	const map = mixinDisposers$1.get(host);
	const list = map?.get(mixinName);
	if (!list) return;
	for (const fn of list) try {
		fn();
	} catch {}
	map.delete(mixinName);
	if (map.size === 0) mixinDisposers$1.delete(host);
};
var parsePxVar$1 = (host, name) => {
	const raw = globalThis.getComputedStyle?.(host)?.getPropertyValue?.(name)?.trim?.() ?? "";
	const n = parseFloat(raw);
	return Number.isFinite(n) ? n : 0;
};
var queryHandle$1 = (host, attr, fallback) => {
	const sel = host.getAttribute(attr)?.trim();
	if (!sel) return fallback;
	const found = host.querySelector(sel);
	return found instanceof HTMLElement ? found : fallback;
};
var JunctionSelectMixin$1 = class extends DOMMixin {
	constructor() {
		super("ui-junction-select");
	}
	connect(wEl) {
		const host = wEl?.deref?.();
		if (!host) return this;
		const overlay = document.createElement("div");
		overlay.className = "ui-junction-select-overlay";
		overlay.setAttribute("data-junction-overlay", "");
		overlay.style.cssText = "position:absolute;pointer-events:none;z-index:var(--z-max, 9999);box-sizing:border-box;border:1px dashed color-mix(in oklab, var(--color-primary, #5a7fff) 70%, transparent);background:color-mix(in oklab, var(--color-primary, #5a7fff) 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;";
		const ensurePositioned = () => {
			if ((globalThis.getComputedStyle?.(host))?.position === "static") host.style.position = "relative";
		};
		ensurePositioned();
		host.appendChild(overlay);
		let active = false;
		let a = {
			x: 0,
			y: 0
		};
		let b = {
			x: 0,
			y: 0
		};
		const localPoint = (ev) => {
			const r = host.getBoundingClientRect();
			return {
				x: ev.clientX - r.left,
				y: ev.clientY - r.top
			};
		};
		const applyOverlay = () => {
			const box = junctionToBox$1(a, b);
			if (box.width < 1 && box.height < 1) {
				overlay.style.display = "none";
				return;
			}
			overlay.style.display = "block";
			overlay.style.left = `${box.left}px`;
			overlay.style.top = `${box.top}px`;
			overlay.style.width = `${box.width}px`;
			overlay.style.height = `${box.height}px`;
		};
		const onDown = (ev) => {
			if (ev.button !== 0) return;
			if (ev.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select")) return;
			if (!(ev.target === host || host.contains(ev.target))) return;
			active = true;
			a = localPoint(ev);
			b = { ...a };
			host.setPointerCapture(ev.pointerId);
			host.dispatchEvent(new CustomEvent(JUNCTION_SELECT_EVENTS$1.start, {
				bubbles: true,
				detail: {
					a: { ...a },
					b: { ...b },
					host
				}
			}));
			applyOverlay();
		};
		const onMove = (ev) => {
			if (!active) return;
			b = localPoint(ev);
			applyOverlay();
			const box = junctionToBox$1(a, b);
			host.dispatchEvent(new CustomEvent(JUNCTION_SELECT_EVENTS$1.move, {
				bubbles: true,
				detail: {
					a: { ...a },
					b: { ...b },
					box,
					host
				}
			}));
		};
		const end = (ev) => {
			if (!active) return;
			active = false;
			try {
				host.releasePointerCapture(ev.pointerId);
			} catch {}
			const box = junctionToBox$1(a, b);
			host.dispatchEvent(new CustomEvent(JUNCTION_SELECT_EVENTS$1.end, {
				bubbles: true,
				detail: {
					a: { ...a },
					b: { ...b },
					box,
					host
				}
			}));
		};
		const onUp = (ev) => {
			if (!active) return;
			end(ev);
		};
		const onCancel = (ev) => {
			if (!active) return;
			active = false;
			overlay.style.display = "none";
			try {
				host.releasePointerCapture(ev.pointerId);
			} catch {}
			host.dispatchEvent(new CustomEvent(JUNCTION_SELECT_EVENTS$1.cancel, {
				bubbles: true,
				detail: { host }
			}));
		};
		pushDisposable$1(host, "ui-junction-select", () => {
			overlay.remove();
		});
		pushDisposable$1(host, "ui-junction-select", addEvent(host, "pointerdown", onDown));
		pushDisposable$1(host, "ui-junction-select", addEvent(host, "pointermove", onMove));
		pushDisposable$1(host, "ui-junction-select", addEvent(host, "pointerup", onUp));
		pushDisposable$1(host, "ui-junction-select", addEvent(host, "pointercancel", onCancel));
		return this;
	}
	disconnect(wEl) {
		const host = wEl?.deref?.();
		if (host) runDisposers$1(host, "ui-junction-select");
		return this;
	}
};
var JunctionDragMixin$1 = class extends DOMMixin {
	constructor() {
		super("ui-junction-drag");
	}
	connect(wEl) {
		const host = wEl?.deref?.();
		if (!host) return this;
		setStyleProperty(host, "--jx-drag-x", parsePxVar$1(host, "--jx-drag-x"));
		setStyleProperty(host, "--jx-drag-y", parsePxVar$1(host, "--jx-drag-y"));
		const previousTransform = host.style.transform;
		if (!host.style.transform || host.style.transform === "none") host.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)";
		const handle = queryHandle$1(host, "data-junction-drag-handle", host);
		let dragging = false;
		let startX = 0;
		let startY = 0;
		let baseX = 0;
		let baseY = 0;
		const onDown = (ev) => {
			if (ev.button !== 0) return;
			if (ev.target !== handle && !handle.contains(ev.target)) return;
			dragging = true;
			startX = ev.clientX;
			startY = ev.clientY;
			baseX = parsePxVar$1(host, "--jx-drag-x");
			baseY = parsePxVar$1(host, "--jx-drag-y");
			handle.setPointerCapture(ev.pointerId);
			host.dispatchEvent(new CustomEvent(JUNCTION_DRAG_EVENTS$1.start, {
				bubbles: true,
				detail: {
					host,
					clientX: ev.clientX,
					clientY: ev.clientY,
					baseX,
					baseY
				}
			}));
		};
		const onMove = (ev) => {
			if (!dragging) return;
			const dx = ev.clientX - startX;
			const dy = ev.clientY - startY;
			const nx = baseX + dx;
			const ny = baseY + dy;
			setStyleProperty(host, "--jx-drag-x", nx);
			setStyleProperty(host, "--jx-drag-y", ny);
			host.dispatchEvent(new CustomEvent(JUNCTION_DRAG_EVENTS$1.move, {
				bubbles: true,
				detail: {
					host,
					dx,
					dy,
					x: nx,
					y: ny
				}
			}));
		};
		const onUp = (ev) => {
			if (!dragging) return;
			dragging = false;
			try {
				handle.releasePointerCapture(ev.pointerId);
			} catch {}
			host.dispatchEvent(new CustomEvent(JUNCTION_DRAG_EVENTS$1.end, {
				bubbles: true,
				detail: {
					host,
					x: parsePxVar$1(host, "--jx-drag-x"),
					y: parsePxVar$1(host, "--jx-drag-y")
				}
			}));
		};
		pushDisposable$1(host, "ui-junction-drag", () => {
			host.style.transform = previousTransform;
		});
		pushDisposable$1(host, "ui-junction-drag", addEvent(handle, "pointerdown", onDown));
		pushDisposable$1(host, "ui-junction-drag", addEvent(handle, "pointermove", onMove));
		pushDisposable$1(host, "ui-junction-drag", addEvent(handle, "pointerup", onUp));
		pushDisposable$1(host, "ui-junction-drag", addEvent(handle, "pointercancel", onUp));
		return this;
	}
	disconnect(wEl) {
		const host = wEl?.deref?.();
		if (host) runDisposers$1(host, "ui-junction-drag");
		return this;
	}
};
var JunctionResizeMixin$1 = class extends DOMMixin {
	constructor() {
		super("ui-junction-resize");
	}
	connect(wEl) {
		const host = wEl?.deref?.();
		if (!host) return this;
		const handle = queryHandle$1(host, "data-junction-resize-handle", host);
		let resizing = false;
		let sx = 0;
		let sy = 0;
		let sw = 0;
		let sh = 0;
		const minW = Math.max(120, parseFloat(host.getAttribute("data-junction-resize-min-w") || "") || 120);
		const minH = Math.max(80, parseFloat(host.getAttribute("data-junction-resize-min-h") || "") || 80);
		const onDown = (ev) => {
			if (ev.button !== 0) return;
			if (ev.target !== handle && !handle.contains(ev.target)) return;
			resizing = true;
			sx = ev.clientX;
			sy = ev.clientY;
			sw = host.offsetWidth;
			sh = host.offsetHeight;
			handle.setPointerCapture(ev.pointerId);
			host.dispatchEvent(new CustomEvent(JUNCTION_RESIZE_EVENTS$1.start, {
				bubbles: true,
				detail: {
					host,
					width: sw,
					height: sh
				}
			}));
		};
		const onMove = (ev) => {
			if (!resizing) return;
			const nw = Math.max(minW, sw + (ev.clientX - sx));
			const nh = Math.max(minH, sh + (ev.clientY - sy));
			host.style.width = `${nw}px`;
			host.style.height = `${nh}px`;
			host.dispatchEvent(new CustomEvent(JUNCTION_RESIZE_EVENTS$1.move, {
				bubbles: true,
				detail: {
					host,
					width: nw,
					height: nh
				}
			}));
		};
		const onUp = (ev) => {
			if (!resizing) return;
			resizing = false;
			try {
				handle.releasePointerCapture(ev.pointerId);
			} catch {}
			host.dispatchEvent(new CustomEvent(JUNCTION_RESIZE_EVENTS$1.end, {
				bubbles: true,
				detail: {
					host,
					width: host.offsetWidth,
					height: host.offsetHeight
				}
			}));
		};
		pushDisposable$1(host, "ui-junction-resize", addEvent(handle, "pointerdown", onDown));
		pushDisposable$1(host, "ui-junction-resize", addEvent(handle, "pointermove", onMove));
		pushDisposable$1(host, "ui-junction-resize", addEvent(handle, "pointerup", onUp));
		pushDisposable$1(host, "ui-junction-resize", addEvent(handle, "pointercancel", onUp));
		return this;
	}
	disconnect(wEl) {
		const host = wEl?.deref?.();
		if (host) runDisposers$1(host, "ui-junction-resize");
		return this;
	}
};
new JunctionSelectMixin$1();
new JunctionDragMixin$1();
new JunctionResizeMixin$1();
//#endregion
//#region ../../modules/projects/lur.e/src/design/anchor/CSSAnimated.ts
/**
* Animation binding state for tracking active animations
*/
var AnimationState = class {
	animations = /* @__PURE__ */ new Map();
	transitions = /* @__PURE__ */ new Map();
	setAnimation(property, animation) {
		this.animations.set(property, animation);
	}
	getAnimation(property) {
		return this.animations.get(property);
	}
	cancelAnimation(property) {
		const animation = this.animations.get(property);
		if (animation) {
			animation.cancel();
			this.animations.delete(property);
		}
	}
	setTransition(element, property, options) {
		const transitionValue = `${property} ${options.duration || 200}ms ${options.easing || "ease"} ${options.delay || 0}ms`;
		if (this.transitions.get(property) !== transitionValue) {
			this.transitions.set(property, transitionValue);
			this.updateElementTransitions(element);
		}
	}
	updateElementTransitions(element) {
		const transitions = Array.from(this.transitions.values()).join(", ");
		element.style.transition = transitions;
	}
	clearTransitions(element) {
		this.transitions.clear();
		element.style.transition = "";
	}
	cancelAll(element) {
		const animationValues = Array.from(this.animations.values());
		for (const animation of animationValues) animation.cancel();
		this.animations.clear();
		this.clearTransitions(element);
	}
	getAnimations() {
		return this.animations;
	}
};
var animationStates = /* @__PURE__ */ new WeakMap();
/**
* Get or create animation state for an element
*/
function getAnimationState(element) {
	let state = animationStates.get(element);
	if (!state) {
		state = new AnimationState();
		animationStates.set(element, state);
	}
	return state;
}
/**
* Animated style change handler using Web Animations API
* Creates smooth transitions between values
*/
function handleAnimatedStyleChange(element, property, value, options = {}) {
	if (!element || !property) return;
	const state = getAnimationState(element);
	const currentValue = element.style.getPropertyValue(property) || getComputedStyle(element)[property];
	const targetValue = $getValue(value);
	if (currentValue === targetValue) return;
	state.cancelAnimation(property);
	const keyframes = [{ [property]: currentValue }, { [property]: targetValue }];
	const animationOptions = {
		duration: options.duration || 200,
		easing: options.easing || "ease",
		delay: options.delay || 0,
		direction: options.direction || "normal",
		iterations: options.iterations || 1,
		fill: options.fill || "forwards"
	};
	const animation = element.animate(keyframes, animationOptions);
	state.setAnimation(property, animation);
	animation.addEventListener("finish", () => {
		state.cancelAnimation(property);
		element.style.setProperty(property, targetValue);
	});
}
/**
* Transition-based style change handler using CSS transitions
* More efficient for simple transitions, uses browser's native transition system
*/
function handleTransitionStyleChange(element, property, value, options = {}) {
	if (!element || !property) return;
	const state = getAnimationState(element);
	const targetValue = $getValue(value);
	state.setTransition(element, property, options);
	element.style.setProperty(property, targetValue);
}
/**
* Spring-based animation handler for natural-feeling animations
* Uses spring physics for more organic motion
*/
function handleSpringStyleChange(element, property, value, options = {}) {
	if (!element || !property) return;
	const state = getAnimationState(element);
	const targetValue = $getValue(value);
	const currentValue = parseFloat(element.style.getPropertyValue(property)) || parseFloat(getComputedStyle(element)[property]) || 0;
	if (Math.abs(currentValue - targetValue) < .01) return;
	state.cancelAnimation(property);
	const stiffness = options.stiffness || 100;
	const damping = options.damping || 10;
	const mass = options.mass || 1;
	const initialVelocity = options.velocity || 0;
	let currentPosition = currentValue;
	let currentVelocity = initialVelocity;
	let animationId;
	const animate = () => {
		const acceleration = (-stiffness * (currentPosition - targetValue) + -damping * currentVelocity) / mass;
		currentVelocity += acceleration * .016;
		currentPosition += currentVelocity * .016;
		const cssValue = property.includes("scale") || property.includes("opacity") ? currentPosition.toString() : `${currentPosition}px`;
		element.style.setProperty(property, cssValue);
		if (Math.abs(currentPosition - targetValue) > .01 || Math.abs(currentVelocity) > .01) animationId = requestAnimationFrame(animate);
		else {
			element.style.setProperty(property, property.includes("scale") || property.includes("opacity") ? targetValue.toString() : `${targetValue}px`);
			state.cancelAnimation(property);
		}
	};
	state.setAnimation(property, { cancel: () => cancelAnimationFrame(animationId) });
	animationId = requestAnimationFrame(animate);
}
/**
* Morphing animation handler for complex style changes
* Can animate multiple properties simultaneously with coordinated timing
*/
function handleMorphStyleChange(element, properties, options = {}) {
	if (!element || !properties) return;
	const state = getAnimationState(element);
	const keyframes = [{}, {}];
	for (const [property, value] of Object.entries(properties)) {
		const currentValue = element.style.getPropertyValue(property) || getComputedStyle(element)[property];
		const targetValue = $getValue(value);
		keyframes[0][property] = currentValue;
		keyframes[1][property] = targetValue;
	}
	for (const property of Object.keys(properties)) state.cancelAnimation(property);
	const animationOptions = {
		duration: options.duration || 300,
		easing: options.easing || "ease-out",
		delay: options.delay || 0,
		direction: options.direction || "normal",
		iterations: options.iterations || 1,
		fill: options.fill || "forwards"
	};
	const animation = element.animate(keyframes, animationOptions);
	for (const property of Object.keys(properties)) state.setAnimation(property, animation);
	animation.addEventListener("finish", () => {
		for (const property of Object.keys(properties)) {
			state.cancelAnimation(property);
			const targetValue = $getValue(properties[property]);
			element.style.setProperty(property, targetValue);
		}
	});
}
/**
* Reactive animation binding that automatically animates when values change
*/
function bindAnimatedStyle(element, propertyOrProperties, reactiveValue, animationType = "animate", options = {}) {
	const wel = toRef$1(element);
	const wv = toRef$1(reactiveValue);
	if (animationType === "morph") {
		const properties = propertyOrProperties;
		handleMorphStyleChange(deref(wel), properties, options);
		return affected(reactiveValue, (newValue) => {
			handleMorphStyleChange(deref(wel), properties, options);
		});
	} else {
		const property = propertyOrProperties;
		const handler = animationType === "animate" ? handleAnimatedStyleChange : animationType === "transition" ? handleTransitionStyleChange : handleSpringStyleChange;
		handler(deref(wel), property, $getValue(deref(wv)), options);
		return affected(reactiveValue, (newValue) => {
			handler(deref(wel), property, newValue, options);
		});
	}
}
/**
* Animation sequence builder for complex multi-stage animations
*/
var AnimationSequence = class AnimationSequence {
	steps = [];
	addStep(properties, options = {}, delay = 0) {
		this.steps.push({
			properties,
			options,
			delay
		});
		return this;
	}
	async play(element) {
		for (const step of this.steps) {
			if (step.delay) await new Promise((resolve) => setTimeout(resolve, step.delay));
			await new Promise((resolve) => {
				handleMorphStyleChange(element, step.properties, {
					...step.options,
					fill: "forwards"
				});
				setTimeout(resolve, step.options.duration || 200);
			});
		}
	}
	static create() {
		return new AnimationSequence();
	}
};
/**
* Animation presets for common use cases
*/
var AnimationPresets = {
	fade: {
		duration: 200,
		easing: "ease-in-out"
	},
	bounce: {
		duration: 400,
		easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
	},
	elastic: {
		duration: 600,
		easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
	},
	slideIn: (direction) => ({
		duration: 300,
		easing: "ease-out",
		transform: `translate${direction === "left" || direction === "right" ? "X" : "Y"}(${direction === "left" || direction === "up" ? "-" : ""}100%)`
	}),
	scale: {
		duration: 200,
		easing: "ease-in-out"
	}
};
/**
* Cleanup function to cancel all animations for an element
*/
function cancelElementAnimations(element) {
	const state = animationStates.get(element);
	if (state) {
		state.cancelAll(element);
		animationStates.delete(element);
	}
}
/**
* Utility to create animated reactive references
*/
function animatedRef(initialValue, animationType = "animate", options = {}) {
	const ref = typeof initialValue === "number" ? numberRef(initialValue) : stringRef(initialValue);
	ref.$animationType = animationType;
	ref.$animationOptions = options;
	return ref;
}
var effectProperty$1 = {
	fill: "both",
	delay: 0,
	easing: "linear",
	rangeStart: "cover 0%",
	rangeEnd: "cover 100%",
	duration: 1
};
var animateByTimeline = async (source, properties = {}, timeline) => {
	if (!source || !timeline) return;
	const nativeTimeline = timeline instanceof ScrollTimeline || timeline instanceof ViewTimeline ? timeline : timeline?.timeline;
	if (nativeTimeline instanceof ScrollTimeline || nativeTimeline instanceof ViewTimeline) return source?.animate?.(properties, {
		...effectProperty$1,
		timeline: nativeTimeline
	});
	const target = toRef$1(source), wk = toRef$1(timeline);
	const renderCb = ([name, $v]) => {
		const tg = deref(target);
		if (tg) {
			const val = deref(wk)?.value || 0, values = $v;
			setProperty(tg, name, values[0] * (1 - val) + values[1] * val);
		}
	};
	const scheduler = makeRAFCycle();
	const everyCb = () => Object.entries(properties)?.forEach?.(renderCb);
	return affected(timeline, (val) => scheduler?.schedule?.(everyCb));
};
//#endregion
//#region ../../modules/projects/lur.e/src/lure/core/Binding.ts
var runWhenIdle$1 = (cb, timeout = 100) => {
	if (typeof globalThis.requestIdleCallback === "function") return globalThis.requestIdleCallback(cb, { timeout });
	return setTimeout(() => cb({
		didTimeout: false,
		timeRemaining: () => 0
	}), 0);
};
var bankSymbol = Symbol.for("lur.e@bank");
var bank = globalThis[bankSymbol] ??= new DoubleWeakMap();
var elMapSymbol = Symbol.for("lur.e@elMap");
var elMap$1 = globalThis[elMapSymbol] ??= new DoubleWeakMap();
var alivesSymbol = Symbol.for("lur.e@alives");
var alives = globalThis[alivesSymbol] ??= new FinalizationRegistry((unsub) => unsub?.());
var $mapped = Symbol.for("@mapped");
var $virtual = Symbol.for("@virtual");
var $behavior = Symbol.for("@behavior");
var isLinkerLike = (value) => {
	return !!value && typeof value == "object" && "ref" in value && typeof value?.unbind == "function";
};
var bindBeh = (element, store, behavior) => {
	const weak = toRef$1(element);
	const name = store?.[0] ?? store?.name;
	store?.[1] ?? store?.value;
	if (behavior) {
		const usub = affected?.(store, (value, prop, old) => {
			const valMap = namedStoreMaps?.get?.(name);
			behavior?.([
				value,
				prop,
				old
			], [
				weak,
				store,
				valMap?.get(deref(weak))
			]);
		});
		addToCallChain(store, Symbol.dispose, usub);
	}
	return element;
};
var bindCtrl = (element, ctrlCb) => {
	if (isLinkerLike(ctrlCb)) {
		ctrlCb.bind?.();
		const unsub = () => ctrlCb.unbind?.();
		addToCallChain(element, Symbol.dispose, unsub);
		return unsub;
	}
	const hdl = {
		click: ctrlCb,
		input: ctrlCb,
		change: ctrlCb
	};
	ctrlCb?.({ target: element });
	const unsub = handleListeners?.(element, "addEventListener", hdl);
	addToCallChain(element, Symbol.dispose, unsub);
	return unsub;
};
var reflectControllers = (element, ctrls) => {
	if (ctrls) for (let ctrl of ctrls) bindCtrl(element, ctrl);
	return element;
};
var $observeInput = (element, ref, prop = "value") => {
	const wel = toRef$1(element);
	const rf = toRef$1(ref);
	const ctrlCb = (_ev) => {
		$set$1(rf, "value", deref(wel)?.[prop ?? "value"] ?? $getValue(deref(rf)));
	};
	const hdl = {
		click: ctrlCb,
		input: ctrlCb,
		change: ctrlCb
	};
	ctrlCb?.({ target: element });
	handleListeners?.(element, "addEventListener", hdl);
	$set$1(rf, "value", element?.[prop ?? "value"] ?? $getValue(deref(ref)));
	return () => handleListeners?.(element, "removeEventListener", hdl);
};
var $observeAttribute = (el, ref, prop = "") => {
	toRef$1(el);
	const wv = toRef$1(ref);
	const attrName = camelToKebab$1(prop);
	const cb = (mutation) => {
		if (mutation.type == "attributes" && mutation.attributeName == attrName) {
			const value = mutation?.target?.getAttribute?.(mutation.attributeName);
			const valRef = deref(wv), reVal = $getValue(valRef);
			if (isNotEqual(mutation.oldValue, value) && valRef != null && (typeof valRef == "object" || typeof valRef == "function")) {
				if (isNotEqual(reVal, value) || reVal == null) $set$1(valRef, "value", value);
			}
		}
	};
	return observeAttribute(el, attrName, cb);
};
var removeFromBank = (el, handler, prop) => {
	const bank = elMap$1.get([el, handler]);
	if (bank) {
		const old = bank[prop]?.[1];
		delete bank[prop];
		old?.();
	}
};
var addToBank = (el, handler, prop, forLink) => {
	const bank = elMap$1.getOrInsertComputed([el, handler], () => ({}));
	bank?.[prop]?.[1]?.();
	bank[prop] = forLink;
	return true;
};
var hasInBank = (el, handler) => {
	return elMap$1.has([el, handler]);
};
var bindHandler = (element, value, prop, handler, set, withObserver) => {
	const linker = isLinkerLike(value) ? value : null;
	if (linker) {
		linker.bind?.();
		value = linker.ref;
	}
	const wel = toRef$1(element);
	element = deref(wel);
	if (!element || !(element instanceof Node || element?.element instanceof Node)) return;
	let controller = void 0;
	if (controller) controller?.abort?.();
	controller = new AbortController();
	const wv = toRef$1(value);
	handler?.(element, prop, value);
	const un = affected?.([value, "value"], (curr, _p, old) => {
		const valueRef = deref(wv);
		const setRef = deref(set);
		const elementRef = deref(wel);
		const v = $getValue(valueRef) ?? $getValue(curr);
		if (!setRef || setRef?.[prop] == valueRef) if (typeof valueRef?.[$behavior] == "function") valueRef?.[$behavior]?.((_val = curr) => handler(elementRef, prop, v), [
			curr,
			prop,
			old
		], [
			controller?.signal,
			prop,
			wel
		]);
		else handler(elementRef, prop, v);
	});
	let obs = null;
	if (typeof withObserver == "boolean" && withObserver) {
		if (handler == handleAttribute) obs = $observeAttribute(element, value, prop);
		if (handler == handleProperty) obs = $observeInput(element, value, prop);
	}
	if (typeof withObserver == "function") obs = withObserver(element, prop, value);
	const unsub = () => {
		obs?.disconnect?.();
		obs != null && typeof obs == "function" && obs?.();
		linker?.unbind?.();
		un?.();
		controller?.abort?.();
		removeFromBank?.(element, handler, prop);
	};
	addToCallChain(value, Symbol.dispose, unsub);
	alives.register(element, unsub);
	if (!addToBank(element, handler, prop, [value, unsub])) return unsub;
};
var updateInput = (target, state) => {
	const selector = "input:where([type=\"text\"], [type=\"number\"], [type=\"range\"])";
	const input = includeSelf(target, "input");
	const name = input?.name || target?.dataset?.name || "";
	if (state?.[name] != null || name in state) {
		if (state && input?.matches?.(selector)) {
			if (input.value != state[name]) $avoidTrigger(state, () => {
				input.value = state[name];
				input.dispatchEvent(new Event("change", {
					bubbles: true,
					cancelable: true
				}));
			}, name);
		}
		if (state) {
			const radio = includeSelf(target, `input:where([type="radio"][name="${name}"][value="${state?.[name]}"])`);
			if (state && radio && state[name] == radio.value && !radio.checked) $avoidTrigger(state, () => {
				setChecked(radio, state[name]);
			}, name);
		}
		const checkbox = includeSelf(target, "input:where([type=\"checkbox\"])");
		if (state && checkbox) {
			if (state[name] != checkbox.checked) $avoidTrigger(state, () => {
				setChecked(checkbox, state[name]);
			}, name);
		}
	}
};
var bindWith = (el, prop, value, handler, set, withObserver) => {
	handler(el, prop, isLinkerLike(value) ? value.ref : value);
	return bindHandler(el, value, prop, handler, set, withObserver);
};
var bindForms = (fields = document.documentElement, wrapper = ".u2-input", state = {}) => {
	state ??= observe({});
	const wst = new WeakRef(state);
	const onChange = (ev) => {
		const state = deref(wst);
		if (!state) return;
		const eventTarget = getEventTarget(ev) ?? ev?.target;
		const input = eventTarget?.matches?.("input") ? eventTarget : eventTarget?.querySelector?.("input");
		const target = (eventTarget?.matches?.(wrapper) ? eventTarget : input?.closest?.(wrapper)) ?? input;
		const name = input?.name || target?.name || target?.dataset?.name;
		if (state?.[name] != null || name in state) {
			if (input?.matches?.("input:where([type=\"text\"], [type=\"number\"], [type=\"range\"])")) {
				const value = input.valueAsNumber != null && !isNaN(input.valueAsNumber) ? input.valueAsNumber : input.value;
				if (state[name] != value) state[name] = value;
			}
			if (input?.matches?.("input[type=\"radio\"]") && state[name] != input?.value && input?.checked) state[name] = input.value;
			if (input?.matches?.("input[type=\"checkbox\"]") && state[name] != input?.checked) state[name] = input.checked;
		}
	};
	const appearHandler = () => runWhenIdle$1(() => fields.querySelectorAll(wrapper).forEach((target) => updateInput(target, state)), 100);
	const observer = observeBySelector(fields, wrapper, (mutations) => mutations.addedNodes.forEach((target) => runWhenIdle$1(() => updateInput(state, target), 100)));
	const unsubscribe = affected?.(state, (_value, _property) => fields.querySelectorAll(wrapper).forEach((target) => updateInput(target, state)));
	runWhenIdle$1(() => fields.querySelectorAll(wrapper).forEach((target) => updateInput(target, state)), 100);
	fields.addEventListener("input", onChange);
	fields.addEventListener("change", onChange);
	fields.addEventListener("u2-appear", appearHandler);
	const wf = new WeakRef(fields);
	addToCallChain(state, Symbol.dispose, () => {
		const fields = deref(wf);
		fields?.removeEventListener?.("input", onChange);
		fields?.removeEventListener?.("change", onChange);
		fields?.removeEventListener?.("u2-appear", appearHandler);
		observer?.disconnect?.();
		unsubscribe?.();
		unaffected(state);
	});
	return state;
};
var bindAnimated = (element, property, value, options = {}) => {
	return bindAnimatedStyle(element, property, value, "animate", options);
};
var bindTransition = (element, property, value, options = {}) => {
	return bindAnimatedStyle(element, property, value, "transition", options);
};
var bindSpring = (element, property, value, options = {}) => {
	return bindAnimatedStyle(element, property, value, "spring", options);
};
var bindMorph = (element, properties, options = {}) => {
	return bindAnimatedStyle(element, "", properties, "morph", options);
};
var createAnimatedRef = animatedRef;
var createAnimationSequence = () => AnimationSequence.create();
var cancelAnimations = cancelElementAnimations;
var bindWithAnimation = (el, prop, value, animationType = "instant", animationOptions = {}) => {
	if (animationType === "instant") return bindWith(el, prop, value, handleStyleChange);
	return (animationType === "animate" ? bindAnimated : animationType === "transition" ? bindTransition : bindSpring)(el, prop, value, animationOptions);
};
var bindAnimatedBatch = (element, bindings) => {
	const unbinders = [];
	bindings.forEach((binding, index) => {
		const delay = binding.delay || index * 50;
		const options = {
			...binding.options,
			delay: (binding.options?.delay || 0) + delay
		};
		const unbinder = bindAnimatedStyle(element, binding.property, binding.value, binding.animationType || "animate", options);
		unbinders.push(unbinder);
	});
	return () => unbinders.forEach((unbind) => unbind?.());
};
var bindPreset = {
	fade: (element, value, duration = 200) => bindAnimated(element, "opacity", value, {
		duration,
		easing: "ease-in-out"
	}),
	slideX: (element, value, duration = 300) => bindAnimated(element, "transform", value, {
		duration,
		easing: "ease-out"
	}),
	slideY: (element, value, duration = 300) => bindAnimated(element, "transform", value, {
		duration,
		easing: "ease-out"
	}),
	scale: (element, value, duration = 200) => bindAnimated(element, "transform", value, {
		duration,
		easing: "ease-in-out"
	}),
	color: (element, value, duration = 300) => bindTransition(element, "color", value, {
		duration,
		easing: "ease-in-out"
	}),
	backgroundColor: (element, value, duration = 300) => bindTransition(element, "background-color", value, {
		duration,
		easing: "ease-in-out"
	}),
	bounce: (element, property, value) => bindSpring(element, property, value, {
		stiffness: 200,
		damping: 15
	}),
	elastic: (element, property, value) => bindAnimated(element, property, value, AnimationPresets.elastic)
};
var bindConditionalAnimation = (element, condition, animations) => {
	const wel = toRef$1(element);
	const wcond = toRef$1(condition);
	let currentUnbinders = [];
	const applyAnimations = (isTrue) => {
		currentUnbinders.forEach((un) => un?.());
		currentUnbinders = [];
		const animationSet = isTrue ? animations.true : animations.false;
		if (animationSet) animationSet.forEach((anim) => {
			const unbinder = bindAnimated(deref(wel), anim.property, anim.value, anim.options);
			currentUnbinders.push(unbinder);
		});
	};
	applyAnimations($getValue(deref(wcond)));
	const unSub = affected(condition, (newValue) => {
		applyAnimations(!!newValue);
	});
	return () => {
		currentUnbinders.forEach((un) => un?.());
		unSub?.();
	};
};
/** WHY: DOM stores `--client-*` via stringification; bare numbers become `"450"` (invalid `<length>`), so `.ux-anchor` inset resolves to (0,0). */
var asPointerInsetLength = (v) => {
	if (typeof v === "number" && Number.isFinite(v)) return `${v}px`;
	return v;
};
var withInsetWithPointer = (exists, pRef) => {
	if (!exists) return () => {};
	const ubs = [bindWith(exists, "--client-x", asPointerInsetLength(pRef?.[0]), handleStyleChange), bindWith(exists, "--client-y", asPointerInsetLength(pRef?.[1]), handleStyleChange)];
	if (pRef?.[2] != null) ubs.push(bindWith(exists, "--anchor-width", asPointerInsetLength(pRef?.[2]), handleStyleChange));
	if (pRef?.[3] != null) ubs.push(bindWith(exists, "--anchor-height", asPointerInsetLength(pRef?.[3]), handleStyleChange));
	return () => ubs?.forEach?.((ub) => ub?.());
};
var bindWhileConnected = (element, bind) => {
	if (!element) return () => {};
	let cleanup = null;
	let disposed = false;
	const ensureBound = () => {
		if (disposed) return;
		if (!element.isConnected) {
			if (cleanup) {
				cleanup();
				cleanup = null;
			}
			return;
		}
		if (!cleanup) {
			const c = bind();
			cleanup = typeof c === "function" ? c : null;
		}
	};
	const root = typeof document !== "undefined" ? document.documentElement : null;
	const elAny = element?.element ?? element;
	const el = elAny instanceof Node ? elAny : null;
	if (!el) return () => {};
	const mo = typeof MutationObserver !== "undefined" && root ? new MutationObserver((records) => {
		for (const r of records) {
			const target = r.target;
			if (target === el || target instanceof Node && target.contains(el)) {
				ensureBound();
				return;
			}
			const nodes = [...Array.from(r?.addedNodes || []), ...Array.from(r?.removedNodes || [])];
			for (const n of nodes) if (n === el || n instanceof Node && n.contains(el)) {
				ensureBound();
				return;
			}
		}
	}) : null;
	if (mo && root) mo.observe(root, {
		childList: true,
		subtree: true
	});
	queueMicrotask(() => ensureBound());
	return () => {
		disposed = true;
		mo?.disconnect?.();
		cleanup?.();
		cleanup = null;
	};
};
//#endregion
//#region ../../modules/projects/lur.e/src/lure/context/ReflectChildren.ts
var makeUpdater = (defaultParent = null, mapper, isArray = true, lifecycle) => {
	const commandBuffer = [];
	const merge = async () => {
		const batch = commandBuffer.splice(0, commandBuffer.length);
		for (const [fn, args] of batch) await fn?.(...args, lifecycle);
	};
	const updateChildList = (newEl, idx, oldEl, op, boundParent = null) => {
		const $requestor = isValidParent$1(boundParent) ?? isValidParent$1(defaultParent);
		const newNode = getNode(newEl, mapper, idx, $requestor);
		const oldNode = getNode(oldEl, mapper, idx, $requestor);
		let element = isValidParent$1(newNode?.parentElement ?? oldNode?.parentElement) ?? $requestor;
		if (!element) return;
		if (defaultParent != element) defaultParent = element;
		const oldIdx = indexOf(element, oldNode);
		if ([
			"add",
			"set",
			"delete"
		].indexOf(op || "") >= 0 || !op) {
			if (newNode == null && oldNode != null || op == "delete") commandBuffer?.push?.([removeChild, [
				element,
				oldNode,
				null,
				oldIdx >= 0 ? oldIdx : idx
			]]);
			else if (newNode != null && oldNode == null || op == "add") commandBuffer?.push?.([appendChild, [
				element,
				newNode,
				null,
				idx
			]]);
			else if (newNode != null && oldNode != null || op == "set") commandBuffer?.push?.([replaceChildren, [
				element,
				newNode,
				null,
				oldIdx >= 0 ? oldIdx : idx,
				oldNode
			]]);
		}
		if (op && op != "get" && [
			"add",
			"set",
			"delete"
		].indexOf(op) >= 0 || !op && !isArray) return merge?.();
	};
	return updateChildList;
};
var asArray$2 = (children) => {
	if (children instanceof Map || children instanceof Set) children = Array.from(children?.values?.());
	return children;
};
var reformChildren = async (element, children = [], mapper) => {
	if (!children || !element) return element;
	mapper = (children?.[$mapped] ? children?.mapper : mapper) ?? mapper;
	children = (children?.[$mapped] ? children?.children : children) ?? children;
	const keys = Array.from(children?.keys?.() || []);
	const cvt = asArray$2(children)?.map?.((nd, index) => getNode(nd, mapper, keys?.[index] ?? index, element));
	await removeNotExists(element, cvt);
	await Promise.all((cvt ?? []).map((nd) => appendChild(element, nd)));
	return element;
};
//#endregion
//#region ../../modules/projects/lur.e/src/lure/node/Changeable.ts
var Ch = class {
	#stub = document.createComment("");
	#valueRef;
	#fragments;
	#updater = null;
	#internal = null;
	#updating = false;
	#options = {};
	#oldNode;
	#mapCb = null;
	#T = null;
	#boundParent = null;
	makeUpdater(basisParent = null) {
		if (basisParent) {
			this.#internal?.();
			this.#internal = null;
			this.#updater = null;
			this.#updater ??= makeUpdater(basisParent, null, false, {
				appear: this.#options.appear,
				disappear: this.#options.disappear
			});
			this.#internal ??= affected?.([this.#valueRef, "value"], this._onUpdate.bind(this));
		}
	}
	get boundParent() {
		return this.#boundParent;
	}
	set boundParent(value) {
		if (value instanceof HTMLElement && isValidParent$1(value) && value != this.#boundParent) {
			this.#boundParent = value;
			this.makeUpdater(value);
			if (this.#oldNode?.parentNode) {
				removeChild(this.#oldNode.parentNode, this.#oldNode, null, -1, {
					appear: this.#options.appear,
					disappear: this.#options.disappear
				});
				if (!this.#options.disappear && this.#oldNode.parentNode) this.#oldNode.remove?.();
				this.#oldNode = null;
			}
			this.element;
		}
	}
	constructor(valueRef, mapCb = (el) => el, options = null) {
		this.#stub = document.createComment("");
		if (hasValue(mapCb) && (typeof valueRef == "function" || typeof valueRef == "object") && !hasValue(valueRef)) [valueRef, mapCb] = [mapCb, valueRef];
		if (!options && mapCb != null && typeof mapCb == "object" && !hasValue(mapCb)) options = mapCb;
		this.#mapCb = (mapCb != null ? typeof mapCb == "function" ? mapCb : typeof mapCb == "object" ? mapCb?.mapper : null : null) ?? ((el) => el);
		this.#oldNode = null;
		this.#valueRef = (!hasValue(valueRef) ? mapCb?.(valueRef, -1) : valueRef) ?? valueRef;
		this.#fragments = document.createDocumentFragment();
		const $baseOptions = {
			removeNotExistsWhenHasPrimitives: true,
			uniquePrimitives: true,
			preMap: true
		};
		const $newOptions = (isValidParent$1(options) ? null : options) || {};
		this.#options = Object.assign($baseOptions, $newOptions);
		this.boundParent = isValidParent$1(this.#options?.boundParent) ?? isValidParent$1(options) ?? null;
	}
	$getNodeBy(requestor, value) {
		const node = isPrimitive(hasValue(value) ? value?.value : value) ? this.#T ??= T(value) : getNode(value, value == requestor ? null : this.#mapCb, -1, requestor);
		if (this.#T != null && (isPrimitive(value) || hasValue(value))) this.#T.textContent = "" + (value?.value ?? (isPrimitive(value) ? value : ""));
		return node;
	}
	$getNode(requestor, reassignOldNode = true) {
		const node = isPrimitive(this.#valueRef?.value) ? this.#T ??= T(this.#valueRef) : getNode(this.#valueRef?.value, requestor == this.#valueRef?.value ? null : this.#mapCb, -1, requestor);
		if (this.#T != null && (isPrimitive(this.#valueRef) || hasValue(this.#valueRef))) this.#T.textContent = "" + (isPrimitive(this.#valueRef) ? this.#valueRef : this.#valueRef?.value ?? "");
		if (node != null && reassignOldNode) this.#oldNode = node;
		return node;
	}
	get [$mapped]() {
		return true;
	}
	elementForPotentialParent(requestor) {
		Promise.try(() => {
			const element = this.$getNode(requestor);
			if (!element || !requestor || element?.contains?.(requestor) || requestor == element) return;
			if (requestor instanceof HTMLElement && isValidParent$1(requestor)) if (Array.from(requestor?.children).find((node) => node === element)) this.boundParent = requestor;
			else {
				const observer = new MutationObserver((records) => {
					for (const record of records) if (record.type === "childList") {
						if (record.addedNodes.length > 0) {
							if (Array.from(record.addedNodes || []).find((node) => node === element)) {
								this.boundParent = requestor;
								observer.disconnect();
							}
						}
					}
				});
				observer.observe(requestor, { childList: true });
			}
		})?.catch?.(console.warn.bind(console));
		return this.element;
	}
	get self() {
		const existsNode = this.$getNode(this.boundParent) ?? this.#stub;
		const theirParent = isValidParent$1(existsNode?.parentElement) ? existsNode?.parentElement : this.boundParent;
		this.boundParent ??= isValidParent$1(theirParent) ?? this.boundParent;
		queueMicrotask(() => {
			const theirParent = isValidParent$1(existsNode?.parentElement) ? existsNode?.parentElement : this.boundParent;
			this.boundParent ??= isValidParent$1(theirParent) ?? this.boundParent;
		});
		return theirParent ?? this.boundParent ?? existsNode;
	}
	get element() {
		const children = this.$getNode(this.boundParent) ?? this.#stub;
		const theirParent = isValidParent$1(children?.parentElement) ? children?.parentElement : this.boundParent;
		this.boundParent ??= isValidParent$1(theirParent) ?? this.boundParent;
		queueMicrotask(() => {
			const theirParent = isValidParent$1(children?.parentElement) ? children?.parentElement : this.boundParent;
			this.boundParent ??= isValidParent$1(theirParent) ?? this.boundParent;
		});
		return children;
	}
	_onUpdate(newVal, idx, oldVal, op) {
		if (isPrimitive(oldVal) && isPrimitive(newVal)) return;
		let oldEl = isPrimitive(oldVal) ? this.#oldNode : this.$getNodeBy(this.boundParent, oldVal);
		let newEl = this.$getNode(this.boundParent, false) ?? this.#stub;
		if (oldEl && !oldEl?.parentNode || this.#oldNode?.parentNode) oldEl = this.#oldNode ?? oldEl;
		let updated = this.#updater?.(newEl, indexOf(this.boundParent, oldEl), oldEl, op, this.boundParent);
		if (newEl != null && newEl != this.#oldNode) this.#oldNode = newEl;
		else if (newEl == null && oldEl != this.#oldNode) this.#oldNode = oldEl;
		return updated;
	}
};
var isWeakCompatible$2 = (key) => {
	return (typeof key == "object" || typeof key == "function" || typeof key == "symbol") && key != null;
};
var C = (observable, mapCb, boundParent = null) => {
	let Te = null;
	if (observable instanceof HTMLElement) return Q(observable);
	if (observable == null) return document.createComment(":NULL:");
	const checkable = (typeof mapCb == "function" ? mapCb(observable, -1) : observable) ?? observable;
	if (isPrimitive(checkable)) return Te ??= T(hasValue(observable) ? observable : checkable);
	if (Te != null && isPrimitive(checkable)) Te.textContent = "" + checkable;
	if (checkable != null && hasValue(checkable) && !mapCb) {
		if (isPrimitive(checkable?.value)) return checkable?.value != null ? Te ??= T(checkable) : document.createComment(":NULL:");
		else if (typeof checkable == "object" || typeof checkable == "function") return elMap.getOrInsertComputed(isWeakCompatible$2(observable) ? observable : checkable, () => {
			return new Ch(observable, mapCb, boundParent);
		});
	}
	return getNode(checkable, null, -1, boundParent);
};
//#endregion
//#region ../../modules/projects/lur.e/src/lure/context/Utils.ts
var KIDNAP_WITHOUT_HANG = (el, requestor) => {
	return (requestor && requestor != el && !el?.contains?.(requestor) && isValidParent$1(requestor) ? el?.elementForPotentialParent?.(requestor) : null) ?? el?.element;
};
var isElementValue = (el, requestor) => {
	return KIDNAP_WITHOUT_HANG(el, requestor) ?? (hasValue(el) && isElement(el?.value) ? el?.value : el);
};
var __nodeGuardSymbol = Symbol.for("lur.e@__nodeGuard");
var __nodeGuard = globalThis[__nodeGuardSymbol] ??= /* @__PURE__ */ new WeakSet();
var nodeElMapSymbol = Symbol.for("lur.e@nodeElMap");
/** Observable / object → cached lure node (Changeable, Text, …). Single-key WeakMap. */
var elMap = globalThis[nodeElMapSymbol] ??= /* @__PURE__ */ new WeakMap();
var tmMapSymbol = Symbol.for("lur.e@tmMap");
var tmMap = globalThis[tmMapSymbol] ??= /* @__PURE__ */ new WeakMap();
var getMapped = (obj) => {
	if (isPrimitive(obj)) return obj;
	if (hasValue(obj) && isPrimitive(obj?.value) && obj != null) return tmMap?.get(obj);
	return (typeof obj == "object" || typeof obj == "function") && obj != null ? elMap?.get?.(obj) : obj;
};
var $promiseResolvedMapSymbol = Symbol.for("lur.e@$promiseResolvedMap");
globalThis[$promiseResolvedMapSymbol] ??= /* @__PURE__ */ new WeakMap();
var $promiseResolvedMap = globalThis[$promiseResolvedMapSymbol];
var $makePromisePlaceholder = (promised, getNodeCb) => {
	if ($promiseResolvedMap?.has?.(promised)) return $promiseResolvedMap?.get?.(promised);
	const comment = document.createComment(":PROMISE:");
	promised?.then?.((elem) => {
		const element = typeof getNodeCb == "function" ? getNodeCb(elem) : elem;
		$promiseResolvedMap?.set?.(promised, element);
		queueMicrotask(() => {
			try {
				if (typeof comment?.replaceWith == "function") {
					if (!comment?.isConnected) return;
					if (isElement(element)) comment?.replaceWith?.(element);
				} else if (comment?.isConnected && isElement(element)) comment?.parentNode?.replaceChild?.(comment, element);
			} catch (error) {
				if (!comment?.isConnected) return;
				comment?.remove?.();
			}
		});
	});
	return comment;
};
var $getBase = (el, mapper, index = -1, requestor) => {
	if (mapper != null) return el = $getBase(mapper?.(el, index), null, -1, requestor);
	if (el instanceof WeakRef || typeof el?.deref == "function") el = el.deref();
	if (el instanceof Promise || typeof el?.then == "function") return $makePromisePlaceholder(el, (nd) => $getBase(nd, mapper, index, requestor));
	if (isElement(el) && !el?.element) return el;
	else if (isElement(el?.element)) return el;
	else if (hasValue(el)) return (el instanceof HTMLElement ? Q : C)(el);
	else if (typeof el == "object" && el != null) return getMapped(el);
	else if (typeof el == "function") return $getBase(el?.(), mapper, index, requestor);
	if (isPrimitive(el) && el != null) return T(el);
	return document.createComment(":NULL:");
};
var $getLeaf = (el, requestor) => {
	return isElementValue(el, requestor) ?? isElement(el);
};
var $getNode = (el, mapper, index = -1, requestor) => {
	if (mapper != null) return el = getNode(mapper?.(el, index), null, -1, requestor);
	if (el instanceof WeakRef || typeof el?.deref == "function") el = el.deref();
	if (el instanceof Promise || typeof el?.then == "function") return $makePromisePlaceholder(el, (nd) => getNode(nd, mapper, index, requestor));
	if (isElement(el) && !el?.element) return el;
	else if (isElement(el?.element)) return isElementValue(el, requestor);
	else if (hasValue(el)) return (el instanceof HTMLElement ? Q : C)(el)?.element;
	else if (typeof el == "object" && el != null) return getMapped(el);
	else if (typeof el == "function") return getNode(el?.(), mapper, index, requestor);
	else if (isPrimitive(el) && el != null) return T(el);
	return document.createComment(":NULL:");
};
var isWeakCompatible$1 = (el) => {
	return (typeof el == "object" || typeof el == "function" || typeof el == "symbol") && el != null;
};
var __getNode = (el, mapper, index = -1, requestor) => {
	if (el instanceof WeakRef || typeof el?.deref == "function") el = el.deref();
	if (el instanceof Promise || typeof el?.then == "function") return $makePromisePlaceholder(el, (nd) => __getNode(nd, mapper, index, requestor));
	if (isWeakCompatible$1(el) && !isElement(el)) {
		if (elMap.has(el)) {
			const obj = getMapped(el) ?? $getBase(el, mapper, index, requestor);
			return $getLeaf(obj instanceof WeakRef ? obj?.deref?.() : obj, requestor);
		}
		const $node = $getBase(el, mapper, index, requestor);
		if (!mapper && $node != null && $node != el && isWeakCompatible$1(el) && !isElement(el) && el != null) elMap.set(el, $node);
		return $getLeaf($node, requestor);
	}
	return $getNode(el, mapper, index, requestor);
};
var getNode = (el, mapper, index = -1, requestor) => {
	if (isWeakCompatible$1(el) && __nodeGuard.has(el)) return getMapped(el) ?? isElement(el);
	if (isWeakCompatible$1(el)) __nodeGuard.add(el);
	const result = __getNode(el, mapper, index, requestor);
	if (isWeakCompatible$1(el)) __nodeGuard.delete(el);
	return result;
};
var appendOrEmplaceByIndex = (parent, child, index = -1) => {
	if (isElement(child) && child != null && child?.parentNode != parent) if (Number.isInteger(index) && index >= 0 && index < parent?.childNodes?.length) parent?.insertBefore?.(child, parent?.childNodes?.[index]);
	else parent?.append?.(child);
};
var appendFix = (parent, child, index = -1) => {
	if (!isElement(child) || parent == child || child?.parentNode == parent) return;
	child = child?._onUpdate ? KIDNAP_WITHOUT_HANG(child, parent) : child;
	if (!child?.parentNode && isElement(child)) {
		appendOrEmplaceByIndex(parent, child, index);
		return;
	}
	if (parent?.parentNode == child?.parentNode) return;
	if (isElement(child)) appendOrEmplaceByIndex(parent, child, index);
};
var asArray$1 = (children) => {
	if (children instanceof Map || children instanceof Set) children = Array.from(children?.values?.());
	return children;
};
var appendArray = (parent, children, mapper, index = -1) => {
	const len = children?.length ?? 0;
	if (Array.isArray(unwrap(children)) || children instanceof Map || children instanceof Set) {
		const list = asArray$1(children)?.map?.((cl, I) => getNode(cl, mapper, I, parent))?.filter?.((el) => el != null);
		const frag = document.createDocumentFragment();
		list?.forEach?.((cl) => appendFix(frag, cl));
		appendFix(parent, frag, index);
	} else {
		const node = getNode(children, mapper, len, parent);
		if (node != null) appendFix(parent, node, index);
	}
};
var appendChild = async (element, cp, mapper, index = -1, lifecycle) => {
	if (mapper != null) cp = mapper?.(cp, index);
	if (cp?.children && Array.isArray(unwrap(cp?.children)) && (cp?.[$virtual] || cp?.[$mapped])) appendArray(element, cp?.children, null, index);
	else appendArray(element, cp, null, index);
	const node = getNode(cp, null, index, element);
	if (node instanceof Element) await appear(node, lifecycle?.appear ?? null);
	return element;
};
var dePhantomNode = (parent, node, index = -1) => {
	if (!parent) return node;
	if (node?.parentNode == parent && node?.parentNode != null) return node;
	else if (node?.parentNode != parent && !isValidParent$1(node?.parentNode)) {
		if (Number.isInteger(index) && index >= 0 && Array.from(parent?.childNodes || [])?.length > index) return parent.childNodes?.[index];
	}
	return node;
};
var replaceOrSwap = (parent, oldEl, newEl) => {
	if (oldEl?.parentNode) if (oldEl?.parentNode == newEl?.parentNode) {
		parent = oldEl?.parentNode ?? parent;
		if (oldEl.nextSibling === newEl) parent.insertBefore(newEl, oldEl);
		else if (newEl.nextSibling === oldEl) parent.insertBefore(oldEl, newEl);
		else {
			const nextSiblingOfElement1 = oldEl.nextSibling;
			parent.replaceChild(newEl, oldEl);
			parent.insertBefore(oldEl, nextSiblingOfElement1);
		}
	} else oldEl?.replaceWith?.(newEl);
};
var replaceChildren = async (element, cp, mapper, index = -1, old, lifecycle) => {
	if (mapper != null) cp = mapper?.(cp, index);
	if (!element) element = old?.parentNode;
	const cn = dePhantomNode(element, getNode(old, mapper, index), index);
	if (cn instanceof Text && typeof cp == "string") cn.textContent = cp;
	else if (cp != null) {
		const node = getNode(cp);
		if (cn?.parentNode == element && cn != node && cn instanceof Text && node instanceof Text) {
			if (cn?.textContent != node?.textContent) cn.textContent = node?.textContent?.trim?.() ?? "";
		} else if (cn?.parentNode == element && cn != node && cn != null && cn?.parentNode != null) {
			replaceOrSwap(element, cn, node);
			if (node instanceof Element) await appear(node, lifecycle?.appear ?? null);
		} else if (cn?.parentNode != element || cn?.parentNode == null) await appendChild(element, node, null, index, lifecycle);
	}
};
var removeChild = async (element, cp, mapper, index = -1, lifecycle) => {
	const $node = getNode(cp, mapper);
	if (!element) element = $node?.parentNode;
	if (Array.from(element?.childNodes ?? []).length < 1) return element;
	const whatToRemove = dePhantomNode(element, $node, index);
	if (whatToRemove?.parentNode != element) return element;
	if (whatToRemove instanceof Element) {
		if (!dispatchLifecycleEvent(whatToRemove, "u2-before-remove")) return element;
		whatToRemove.setAttribute("data-removing", "");
		await disappear(whatToRemove, lifecycle?.disappear ?? null);
		await waitElementAnimations(whatToRemove);
		whatToRemove.remove();
		whatToRemove.removeAttribute("data-removing");
		dispatchLifecycleEvent(whatToRemove, "u2-removed");
		return element;
	}
	whatToRemove?.remove?.();
	return element;
};
var removeNotExists = async (element, children, mapper, lifecycle) => {
	const list = Array.from(unwrap(children) || [])?.map?.((cp, index) => getNode(cp, mapper, index));
	const missing = Array.from(element.childNodes).filter((nd) => !list?.find?.((cp) => !isNotEqual?.(cp, nd)));
	await Promise.all(missing.map((nd) => removeChild(element, nd, null, -1, lifecycle)));
	return element;
};
var T = (ref) => {
	if (isPrimitive(ref) && ref != null) return document.createTextNode(ref);
	if (ref == null) return document.createComment(":NULL:");
	if (isWeakCompatible$1(ref)) return tmMap.getOrInsertComputed(ref, () => {
		const element = document.createTextNode(((hasValue(ref) ? ref?.value : ref) ?? "")?.trim?.() ?? "");
		affected([ref, "value"], (val) => {
			const untrimmed = "" + (val?.innerText ?? val?.textContent ?? val?.value ?? val ?? "");
			element.textContent = untrimmed?.trim?.() ?? "";
		});
		return element;
	});
};
//#endregion
//#region ../../modules/projects/lur.e/src/lure/node/Queried.ts
var existsQueriesSymbol = Symbol.for("lure.existsQueries");
var existsQueries = globalThis[existsQueriesSymbol] = /* @__PURE__ */ new WeakMap();
var alreadyUsedSymbol = Symbol.for("lure.alreadyUsed");
var alreadyUsed = globalThis[alreadyUsedSymbol] = /* @__PURE__ */ new WeakMap();
/** INVARIANT: never call matches/querySelectorAll with "". */
var usableSelector = (sel) => typeof sel === "string" && sel.trim().length > 0;
var safeMatches = (el, sel) => {
	if (!usableSelector(sel) || typeof el?.matches !== "function") return !usableSelector(sel) && !!el;
	try {
		return !!el?.matches?.(sel.trim());
	} catch {
		return false;
	}
};
var queryExtensions = {
	logAll(ctx) {
		return () => console.log("attributes:", [...ctx?.attributes].map((x) => ({
			name: x.name,
			value: x.value
		})));
	},
	append(ctx) {
		return (...args) => args?.forEach?.((e) => appendChild(ctx, e, null, -1));
	},
	appendChildren(ctx) {
		return (...args) => args?.forEach?.((e) => appendChild(ctx, e, null, -1));
	},
	removeChildren(ctx) {
		return (...args) => args?.forEach?.((e) => removeChild(ctx, e, null, -1));
	},
	removeChild(ctx) {
		return (e) => removeChild(ctx, e, null, -1);
	},
	replaceChild(ctx) {
		return (e, n) => replaceOrSwap(ctx, e, n);
	},
	remove(ctx) {
		return () => removeChild(ctx?.parentNode, ctx, null, -1);
	},
	replace(ctx) {
		return (newEl) => replaceOrSwap(ctx?.parentNode, ctx, newEl);
	},
	current(ctx) {
		return ctx;
	}
};
var pseudoUID = 0;
/**
* Нам нельзя разрешать произвольную строку, потому что она позже
* добавляется в CSS selector.
*
* Поддерживаются:
*   ::before
*   ::after
*   ::marker
*   ::highlight(name)
*   ::view-transition-group(root)
*
* Вложенные скобки намеренно не поддерживаются.
*/
function normalizePseudoType(value) {
	if (typeof value !== "string") throw new TypeError("Pseudo-element type must be a string");
	let type = value.trim();
	if (type === ":before" || type === ":after") type = `:${type}`;
	if (!/^::[-_a-zA-Z][-\w]*(?:\((?:[^()"']|"(?:\\.|[^"])*"|'(?:\\.|[^'])*')*\))?$/u.test(type)) throw new TypeError(`Invalid pseudo-element selector: ${type}`);
	return type;
}
function pseudoStyleRoot(element) {
	const root = element.getRootNode?.();
	if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot) return root;
	return element.ownerDocument?.documentElement ?? document.documentElement;
}
function createPseudoElementProxy(resolveElement, types, parent = null) {
	const handler = new UniversalPseudoElementHandler(resolveElement, types, parent);
	const proxy = new Proxy(Object.create(null), handler);
	handler.self = proxy;
	return proxy;
}
var isWeakCompatible = (element) => {
	return (typeof element == "object" || typeof element == "function") && element != null;
};
var UniversalPseudoElementHandler = class {
	resolveOrigin;
	types;
	pseudoParent;
	self;
	token = `ux-pseudo-${(++pseudoUID).toString(36)}`;
	children = /* @__PURE__ */ new Map();
	attachedElement = null;
	styleActivated = false;
	constructor(resolveOrigin, types, pseudoParent) {
		this.resolveOrigin = resolveOrigin;
		this.types = types;
		this.pseudoParent = pseudoParent;
	}
	get suffix() {
		return this.types.join("");
	}
	get localType() {
		return this.types[this.types.length - 1];
	}
	/**
	* Переносит служебный класс на актуальный selected element.
	*
	* Это важно, если элемент, подходящий под Q(selector),
	* был удалён и заменён другим.
	*/
	resolveElement() {
		const element = this.resolveOrigin();
		if (this.styleActivated && element !== this.attachedElement) {
			this.attachedElement?.classList?.remove?.(this.token);
			element?.classList?.add?.(this.token);
			this.attachedElement = element;
		} else if (this.styleActivated && element && !element.classList.contains(this.token)) element.classList.add(this.token);
		return element;
	}
	activateStyleTarget() {
		this.styleActivated = true;
		return this.resolveElement();
	}
	getSelector() {
		if (!this.activateStyleTarget()) return null;
		return `.${this.token}${this.suffix}`;
	}
	getRule() {
		const element = this.activateStyleTarget();
		if (!element) return void 0;
		return getAdoptedStyleRule(`.${this.token}${this.suffix}`, "ux-query-pseudo", pseudoStyleRoot(element));
	}
	getStyle() {
		return this.getRule()?.style;
	}
	getComputedStyle() {
		const element = this.resolveElement();
		if (!element) return void 0;
		return (element.ownerDocument?.defaultView ?? window).getComputedStyle(element, this.suffix);
	}
	getNativePseudo() {
		let current = this.resolveElement();
		if (!current) return null;
		for (const type of this.types) {
			if (typeof current?.pseudo !== "function") return null;
			current = current.pseudo(type);
			if (!current) return null;
		}
		return current;
	}
	getChild(type) {
		const normalized = normalizePseudoType(type);
		const cached = this.children.get(normalized);
		if (cached) return cached;
		const child = createPseudoElementProxy(this.resolveOrigin, [...this.types, normalized], this.self);
		if (isWeakCompatible(normalized)) this.children.set(normalized, child);
		return child;
	}
	get(_target, name) {
		switch (name) {
			case "type": return this.localType;
			/**
			* Ultimate originating element.
			*/
			case "element": return this.resolveElement();
			/**
			* Для первого pseudo это Element,
			* для вложенного — предыдущий pseudo proxy.
			*/
			case "parent": return this.pseudoParent ?? this.resolveElement();
			case "native": return this.getNativePseudo();
			case "selector": return this.getSelector();
			/**
			* Это CSSStyleDeclaration созданного CSSStyleRule,
			* а не inline style — у pseudo-elements его быть не может.
			*/
			case "style": return this.getStyle();
			case "attributeStyleMap": {
				const rule = this.getRule();
				return rule?.styleMap ?? rule?.attributeStyleMap;
			}
			case "computedStyle": return this.getComputedStyle();
			case "getComputedStyle": return () => this.getComputedStyle();
			case "pseudo": return (type) => this.getChild(type);
			case "addEventListener": return (...args) => {
				const native = this.getNativePseudo();
				if (typeof native?.addEventListener !== "function") throw new DOMException("CSSPseudoElement events are not supported by this browser", "NotSupportedError");
				return native.addEventListener(...args);
			};
			case "removeEventListener": return (...args) => {
				const native = this.getNativePseudo();
				if (typeof native?.removeEventListener !== "function") return;
				return native.removeEventListener(...args);
			};
			case "dispose": return () => {
				this.attachedElement?.classList?.remove?.(this.token);
				this.attachedElement = null;
				this.styleActivated = false;
			};
			case Symbol.toStringTag: return "CSSPseudoElement";
			case Symbol.toPrimitive: return () => this.getSelector() ?? this.suffix;
		}
		const native = this.getNativePseudo();
		if (native && name in native) {
			const value = native[name];
			return typeof value === "function" ? value.bind(native) : value;
		}
		if (typeof name === "string") {
			const style = this.getStyle();
			if (style && (name.startsWith("--") || name in style)) return style[name];
		}
	}
	set(_target, name, value) {
		if (typeof name !== "string") return false;
		const style = this.getStyle();
		if (!style) return false;
		if (name === "cssText") {
			style.cssText = String(value ?? "");
			return true;
		}
		if (name.startsWith("--")) {
			style.setProperty(name, String(value ?? ""));
			return true;
		}
		if (name in style) {
			style[name] = value == null ? "" : String(value);
			return true;
		}
		return false;
	}
	has(_target, name) {
		if (name === "type" || name === "element" || name === "parent" || name === "native" || name === "selector" || name === "style" || name === "computedStyle" || name === "attributeStyleMap" || name === "getComputedStyle" || name === "pseudo") return true;
		const native = this.getNativePseudo();
		if (native && name in native) return true;
		if (typeof name === "string") {
			const style = this.getStyle();
			return !!style && (name.startsWith("--") || name in style);
		}
		return false;
	}
	deleteProperty(_target, name) {
		if (typeof name !== "string") return false;
		const style = this.getStyle();
		if (!style) return false;
		if (name.startsWith("--")) {
			style.removeProperty(name);
			return true;
		}
		if (name in style) {
			style[name] = "";
			return true;
		}
		return false;
	}
};
var EventHandler = class {
	target;
	currentTarget;
	selector;
	eventName;
	callback;
	constructor(target, currentTarget, selector, eventName, callback) {
		this.target = target;
		this.currentTarget = currentTarget;
		this.selector = selector;
		this.eventName = eventName;
		this.callback = callback;
	}
	get(_target, name, ctx) {
		if (name === "currentTarget") {
			if (usableSelector(this.selector)) return MOCElement(this.target, this.selector.trim()) ?? this.currentTarget ?? this.target;
			if (this.selector != null && typeof this.selector !== "string") return this.currentTarget ?? this.selector;
			return this.currentTarget ?? this.target;
		}
		if (typeof _target?.[name] == "function") return _target?.[name]?.bind?.(_target);
		return Reflect.get(_target, name, ctx);
	}
	set(_target, name, value) {
		return Reflect.set(_target, name, value);
	}
	has(_target, name) {
		return Reflect.has(_target, name);
	}
	deleteProperty(_target, name) {
		return Reflect.deleteProperty(_target, name);
	}
	ownKeys(_target) {
		return Reflect.ownKeys(_target);
	}
	defineProperty(_target, name, desc) {
		return Reflect.defineProperty(_target, name, desc);
	}
	apply(_target, thisArg, args) {
		return Reflect.apply(_target, thisArg, args);
	}
	construct(_target, args) {
		return Reflect.construct(_target, args);
	}
	getPrototypeOf(_target) {
		return Reflect.getPrototypeOf(_target);
	}
	setPrototypeOf(_target, proto) {
		return Reflect.setPrototypeOf(_target, proto);
	}
	isExtensible(_target) {
		return Reflect.isExtensible(_target);
	}
	preventExtensions(_target) {
		return Reflect.preventExtensions(_target);
	}
	getOwnPropertyDescriptor(_target, name) {
		return Reflect.getOwnPropertyDescriptor(_target, name);
	}
};
var isInputLike = (sel) => typeof sel == "string" ? /(^|[\s>+~(,])(input|select|textarea)\b|:checked|\[type=/.test(sel) : !!sel?.matches?.("input, select, textarea");
var UniversalElementHandler = class {
	direction = "children";
	selector;
	index = 0;
	_pseudoMap = /* @__PURE__ */ new Map();
	_observeMap = /* @__PURE__ */ new WeakMap();
	_callbackMap = /* @__PURE__ */ new WeakMap();
	_eventMap = /* @__PURE__ */ new WeakMap();
	_freshSelected(target) {
		const live = this._getSelected(target);
		if (live) return live?.element ?? live;
		const sel = this._getArray(target)[this.index];
		return sel?.element ?? sel;
	}
	_readInputState(target) {
		const node = this._freshSelected(target);
		return {
			node,
			value: node?.value,
			checked: node?.checked,
			valueAsNumber: node?.valueAsNumber
		};
	}
	_subscribeInput(target, cb) {
		const host = target?.self ?? target;
		let prev = this._readInputState(target);
		const handler = () => {
			const cur = this._readInputState(target);
			if (!Object.is(cur.value, prev.value)) cb?.(cur.value, "value", prev.value);
			if (!Object.is(cur.checked, prev.checked)) cb?.(cur.checked, "checked", prev.checked);
			if (!Object.is(cur.valueAsNumber, prev.valueAsNumber)) cb?.(cur.valueAsNumber, "valueAsNumber", prev.valueAsNumber);
			prev = cur;
		};
		const opt = {
			passive: true,
			capture: true
		};
		host?.addEventListener?.("input", handler, opt);
		host?.addEventListener?.("change", handler, opt);
		return () => {
			host?.removeEventListener?.("input", handler, opt);
			host?.removeEventListener?.("change", handler, opt);
		};
	}
	constructor(selector = null, index = 0, direction = "children") {
		this.index = index;
		if (typeof selector === "string") {
			const trimmed = selector.trim();
			this.selector = trimmed.length > 0 ? trimmed : null;
		} else this.selector = selector ?? null;
		this.direction = direction;
	}
	get selectorElement() {
		return typeof this.selector == "string" ? null : this.selector;
	}
	_resolveSelectedElement(target) {
		const array = this._getArray(target);
		const selected = array.length > 0 ? array[this.index] : this._getSelected(target);
		const element = selected?.element ?? selected;
		return element instanceof Element ? element : null;
	}
	_getPseudo(target, type) {
		const normalized = normalizePseudoType(type);
		const cached = this._pseudoMap.get(normalized);
		if (cached) return cached;
		const pseudo = createPseudoElementProxy(() => this._resolveSelectedElement(target), [normalized], null);
		this._pseudoMap.set(normalized, pseudo);
		return pseudo;
	}
	_observeDOMChange(target, selector, cb) {
		return typeof selector == "string" ? observeBySelector(target, selector, cb) : null;
	}
	_observeAttributes(target, attribute, cb) {
		return typeof this.selector == "string" ? observeAttributeBySelector(target, this.selector, attribute, cb) : observeAttribute(target ?? this.selector, attribute, cb);
	}
	_getArrayPrimary(target) {
		if (typeof target == "function") target = this.selector || target?.(this.selector);
		if (!this.selector) return [target];
		if (typeof this.selector == "string") {
			const inclusion = typeof target?.matches == "function" && target?.element != null && safeMatches(target, this.selector) ? [target] : [];
			if (this.direction == "children") {
				const list = typeof target?.querySelectorAll == "function" && target?.element != null && usableSelector(this.selector) ? [...target?.querySelectorAll?.(this.selector.trim())] : [];
				return list?.length >= 1 ? [...list] : inclusion;
			} else if (this.direction == "parent") {
				const closest = usableSelector(this.selector) ? target?.closest?.(this.selector.trim()) : null;
				return closest ? [closest] : inclusion;
			}
			return inclusion;
		}
		return Array.isArray(this.selector) ? this.selector : [this.selector];
	}
	_getArray(target) {
		const tg = target?.self ?? target;
		return this._observeMap.getOrInsertComputed(tg, () => {
			const array = this._getArrayPrimary(tg);
			let forReactive = observe(Array.isArray(array) ? array : [this._getSelected(tg)]);
			if (this.direction == "children") observeBySelector(tg, typeof this.selector == "string" ? this.selector : void 0, (mut, obs) => {
				if (mut?.addedNodes?.length > 0 || mut?.removedNodes?.length > 0) {
					mut?.addedNodes?.forEach((node) => {
						if ((node?.element ?? node) && !forReactive?.includes?.(node?.element ?? node)) forReactive?.push?.(node?.element ?? node);
					});
					mut?.removedNodes?.forEach((node) => {
						const index = forReactive.indexOf(node?.element ?? node);
						if (index > -1) forReactive.splice(index, 1);
					});
				}
			});
			return forReactive;
		});
	}
	_getSelected(target) {
		const tg = target?.self ?? target;
		const sel = this._selector(target);
		if (usableSelector(sel)) {
			if (this.direction == "children") return safeMatches(tg, sel) ? tg : tg?.querySelector?.(sel.trim());
			if (this.direction == "parent") return safeMatches(tg, sel) ? tg : tg?.closest?.(sel.trim());
		}
		return tg == (sel?.element ?? sel) ? sel?.element ?? sel : null;
	}
	_redirectToBubble(eventName) {
		if (typeof this._selector() == "string") return {
			["pointerenter"]: "pointerover",
			["pointerleave"]: "pointerout",
			["mouseenter"]: "mouseover",
			["mouseleave"]: "mouseout",
			["focus"]: "focusin",
			["blur"]: "focusout"
		}[eventName] || eventName;
		return eventName;
	}
	_addEventListener(target, name, $cb, option) {
		const selector = this._selector(target);
		if (selector == null || typeof selector != "string") {
			(target?.self ?? target)?.addEventListener?.(name, $cb, option);
			this._callbackMap.set($cb, {
				wrap: $cb,
				option
			});
			return $cb;
		}
		const handlerSelector = usableSelector(selector) ? selector.trim() : null;
		const cb = (ev) => {
			const evp = new Proxy(ev, new EventHandler(ev?.target ?? target, ev?.currentTarget ?? target, handlerSelector, name, $cb));
			$cb?.call?.(ev?.target ?? target, evp);
			return evp;
		};
		this._callbackMap.set($cb, {
			wrap: cb,
			option
		});
		const eventName = this._redirectToBubble(name);
		const parent = target?.self ?? target;
		const wrap = (ev) => {
			const rawSel = this._selector(target);
			const sel = usableSelector(rawSel) ? rawSel.trim() : typeof rawSel === "string" ? null : rawSel;
			const rot = ev?.currentTarget ?? parent;
			let tg = null;
			if (ev?.composedPath && typeof ev.composedPath === "function") {
				let path = ev.composedPath() ?? [ev?.target ?? ev?.currentTarget];
				if (path?.length < 1) path = [ev?.target ?? ev?.currentTarget];
				for (const node of path) if (node instanceof HTMLElement || node instanceof Element) {
					const nodeEl = node?.element ?? node;
					const evName = name || ev?.type;
					if (evName == "pointerenter" || evName == "pointerleave" || evName == "mouseenter" || evName == "mouseleave" || evName == "focus" || evName == "blur") {
						if (usableSelector(sel) && safeMatches(nodeEl, sel)) {
							tg = nodeEl;
							break;
						} else if (sel != null && typeof sel != "string" && containsOrSelf(sel, nodeEl, ev)) {
							tg = nodeEl;
							break;
						} else if (sel == null || typeof sel == "string" && !usableSelector(sel)) {
							tg = nodeEl;
							break;
						}
					} else if (usableSelector(sel)) {
						if (MOCElement(nodeEl, sel, ev)) {
							tg = nodeEl;
							break;
						}
					} else if (sel != null && typeof sel != "string") {
						if (containsOrSelf(sel, nodeEl, ev)) {
							tg = nodeEl;
							break;
						}
					} else {
						tg = nodeEl;
						break;
					}
				}
			}
			if (!tg) {
				tg = ev?.target ?? this._getSelected(target) ?? rot;
				tg = tg?.element ?? tg;
			}
			if (usableSelector(sel)) {
				if (containsOrSelf(rot, MOCElement(tg, sel, ev), ev)) this._callbackMap.get($cb)?.wrap?.call?.(tg, ev);
			} else if (sel == null || typeof sel == "string") this._callbackMap.get($cb)?.wrap?.call?.(tg, ev);
			else if (containsOrSelf(rot, sel, ev) && containsOrSelf(sel, tg, ev)) this._callbackMap.get($cb)?.wrap?.call?.(tg, ev);
		};
		parent?.addEventListener?.(eventName, wrap, option);
		const cbMap = this._eventMap.getOrInsert(parent, /* @__PURE__ */ new Map()).getOrInsert(eventName, /* @__PURE__ */ new WeakMap());
		cbMap.set($cb, {
			wrap,
			option
		});
		cbMap.set(cb, {
			wrap,
			option
		});
		return wrap;
	}
	_removeEventListener(target, name, cb, option) {
		cb = this._callbackMap.get(cb)?.wrap ?? cb;
		option = this._callbackMap.get(cb)?.option ?? option;
		const selector = this._selector(target);
		if (typeof selector != "string") {
			selector?.removeEventListener?.(name, cb, option);
			return cb;
		}
		const parent = target?.self ?? target;
		const eventName = this._redirectToBubble(name), eventMap = this._eventMap.get(parent);
		if (!eventMap) return;
		const entry = eventMap.get(eventName)?.get?.(cb);
		parent?.removeEventListener?.(eventName, entry?.wrap ?? cb, option ?? entry?.option ?? {});
		if (entry?.size != null && entry?.size == 0) eventMap?.delete?.(eventName);
		if (eventMap?.size == 0) this._eventMap.delete(parent);
	}
	_selector(tg) {
		if (typeof this.selector == "string" && typeof tg?.selector == "string") return ((tg?.selector || "") + " " + this.selector).trim?.();
		return this.selector;
	}
	get(target, name, ctx) {
		const array = this._getArray(target);
		const selected = array.length > 0 ? array[this.index] : this._getSelected(target);
		if (name === "pseudo") return (type) => this._getPseudo(target, type);
		if (name in queryExtensions) return queryExtensions?.[name]?.(selected);
		if (name == "length" && array?.length != null) return array?.length;
		if (name == "_updateSelector") return (sel) => this.selector = sel || this.selector;
		if (["style", "attributeStyleMap"].indexOf(name) >= 0) {
			const tg = target?.self ?? target;
			const selector = this._selector(target);
			const basis = typeof selector == "string" ? getAdoptedStyleRule(selector, "ux-query", tg) : selected;
			if (name == "attributeStyleMap") return basis?.styleMap ?? basis?.attributeStyleMap;
			return basis?.[name];
		}
		if (name == "querySelectorAll") return (selector) => {
			const prefix = this._selector(target);
			const combined = [typeof prefix == "string" ? prefix : "", typeof selector == "string" ? selector : ""].map((s) => s.trim()).filter(Boolean).join(" ").trim();
			let list = observe([]);
			if (typeof prefix == "string") list = observe([...target?.querySelectorAll?.(combined) ?? []].map((node) => node?.element ?? node));
			else {
				const sel = (typeof selector == "string" ? selector : "").trim();
				list = observe([...(prefix ?? target)?.querySelectorAll?.(sel) ?? []].map((node) => node?.element ?? node));
			}
			if (combined) observeBySelector(target, combined, (mut, obs) => {
				if (mut?.addedNodes?.length > 0 || mut?.removedNodes?.length > 0) {
					mut?.addedNodes?.forEach((node) => {
						if ((node?.element ?? node) && !list?.includes?.(node?.element ?? node)) list?.push?.(node?.element ?? node);
					});
					mut?.removedNodes?.forEach((node) => {
						const index = list?.findIndex?.((x) => (x?.element ?? x) == (node?.element ?? node));
						if (index > -1) list?.splice?.(index, 1);
					});
				}
			});
			return list;
		};
		if (name == "querySelector") return (selector) => {
			const prefix = this._selector(target);
			if (typeof prefix == "string") return Q(((prefix ?? "") + " " + (selector ?? "")).trim?.(), target, 0, this.direction == "children" ? "children" : "parent");
			else return Q((selector ?? "")?.trim?.(), target, 0, this.direction == "children" ? "children" : "parent");
		};
		if (name == "self") return target?.self ?? target;
		if (name == "selector") return this._selector(target);
		if (name == "observeAttr") return (name, cb) => this._observeAttributes(target, name, cb);
		if (name == "DOMChange") return (cb) => this._observeDOMChange(target, this.selector, cb);
		if (name == "addEventListener") return (name, cb, opt) => this._addEventListener(target, name, cb, opt);
		if (name == "removeEventListener") return (name, cb, opt) => this._removeEventListener(target, name, cb, opt);
		if (name == "getAttribute") return (key) => {
			const array = this._getArray(target);
			const selected = array.length > 0 ? array[this.index] : this._getSelected(target);
			const query = existsQueries?.get?.(target)?.get?.(this.selector) ?? selected;
			const bank = elMap$1?.get?.([query, handleAttribute]);
			if (bank?.[key]) return bank[key]?.[0];
			return selected?.getAttribute?.(key);
		};
		if (name == "setAttribute") return (key, value) => {
			const array = this._getArray(target);
			const selected = array.length > 0 ? array[this.index] : this._getSelected(target);
			if (typeof value == "object" && (value?.value != null || "value" in value)) return bindWith(selected, key, value, handleAttribute, null, true);
			return selected?.setAttribute?.(key, value);
		};
		if (name == "removeAttribute") return (key) => {
			const array = this._getArray(target);
			const selected = array.length > 0 ? array[this.index] : this._getSelected(target);
			const query = existsQueries?.get?.(target)?.get?.(this.selector) ?? selected;
			const bank = elMap$1?.get?.([query, handleAttribute]);
			if (bank?.[key]) return bank[key]?.[1]?.();
			return selected?.removeAttribute?.(key);
		};
		if (name == "hasAttribute") return (key) => {
			const array = this._getArray(target);
			const selected = array.length > 0 ? array[this.index] : this._getSelected(target);
			const query = existsQueries?.get?.(target)?.get?.(this.selector) ?? selected;
			if ((elMap$1?.get?.([query, handleAttribute]))?.[key]) return true;
			return selected?.hasAttribute?.(key);
		};
		if (name == "element") {
			if (array?.length <= 1) return selected?.element ?? selected;
			const fragment = document.createDocumentFragment();
			fragment.append(...array);
			return fragment;
		}
		if (name == Symbol.toPrimitive) {
			if (this.selector?.includes?.("input") || this.selector?.matches?.("input")) return (hint) => {
				if (hint == "number") return (selected?.element ?? selected)?.valueAsNumber ?? parseFloat((selected?.element ?? selected)?.value);
				if (hint == "string") return String((selected?.element ?? selected)?.value ?? selected?.element ?? selected);
				if (hint == "boolean") return (selected?.element ?? selected)?.checked;
				return (selected?.element ?? selected)?.checked ?? (selected?.element ?? selected)?.value ?? selected?.element ?? selected;
			};
		}
		if (name == "value" && isInputLike(this.selector)) {
			const node = this._freshSelected(target);
			const vn = node?.valueAsNumber;
			return vn != null && !Number.isNaN(vn) ? vn : node?.value ?? node?.checked;
		}
		if (name == "checked" && isInputLike(this.selector)) return this._freshSelected(target)?.checked;
		if (name == "valueAsNumber" && isInputLike(this.selector)) return this._freshSelected(target)?.valueAsNumber;
		if (name == $affected && isInputLike(this.selector)) return (cb) => this._subscribeInput(target, cb);
		if ((name == "valueRef" || name == "checkedRef") && isInputLike(this.selector)) return () => {
			const prop = name == "checkedRef" ? "checked" : "value";
			const ref = observe({ value: this._readInputState(target)[prop] });
			ref[Symbol.dispose] = this._subscribeInput(target, (v, p) => {
				if (p == prop) ref.value = v;
			});
			return ref;
		};
		if (name == "deref" && (typeof selected == "object" || typeof selected == "function") && selected != null) {
			const wk = new WeakRef(selected);
			return () => wk?.deref?.()?.element ?? wk?.deref?.();
		}
		if (typeof name == "string" && /^\d+$/.test(name)) return array[parseInt(name)];
		const origin = selected;
		if (origin?.[name] != null) return typeof origin[name] == "function" ? origin[name].bind(origin) : origin[name];
		if (array?.[name] != null) return typeof array[name] == "function" ? array[name].bind(array) : array[name];
		return typeof target?.[name] == "function" ? target?.[name].bind(origin) : target?.[name];
	}
	set(target, name, value) {
		const array = this._getArray(target);
		const selected = array.length > 0 ? array[this.index] : this._getSelected(target);
		if (typeof name == "string" && /^\d+$/.test(name)) return false;
		if (array[name] != null) return false;
		if (selected) {
			selected[name] = value;
			return true;
		}
		return true;
	}
	has(target, name) {
		const array = this._getArray(target);
		const selected = array.length > 0 ? array[this.index] : this._getSelected(target);
		return typeof name == "string" && /^\d+$/.test(name) && array[parseInt(name)] != null || array[name] != null || selected && name in selected;
	}
	deleteProperty(target, name) {
		const array = this._getArray(target);
		const selected = array.length > 0 ? array[this.index] : this._getSelected(target);
		if (selected && name in selected) {
			delete selected[name];
			return true;
		}
		return false;
	}
	ownKeys(_target) {
		const array = this._getArray(_target);
		const selected = array.length > 0 ? array[this.index] : this._getSelected(_target);
		const keys = /* @__PURE__ */ new Set();
		array.forEach((el, i) => keys.add(i.toString()));
		Object.getOwnPropertyNames(array).forEach((k) => keys.add(k));
		if (selected) Object.getOwnPropertyNames(selected).forEach((k) => keys.add(k));
		return Array.from(keys);
	}
	defineProperty(_target, name, desc) {
		return Reflect.defineProperty(_target, name, desc);
	}
};
var Q = (selector, host = document.documentElement, index = 0, direction = "children") => {
	if ((selector?.element ?? selector) instanceof HTMLElement) {
		const el = selector?.element ?? selector;
		return alreadyUsed.getOrInsert(el, new Proxy(el, new UniversalElementHandler(null, index, direction)));
	}
	if (typeof selector == "function") {
		const el = selector;
		return alreadyUsed.getOrInsert(el, new Proxy(el, new UniversalElementHandler(null, index, direction)));
	}
	if (host == null || typeof host == "string" || typeof host == "number" || typeof host == "boolean" || typeof host == "symbol" || typeof host == "undefined") return null;
	if (existsQueries?.get?.(host)?.has?.(selector)) return existsQueries?.get?.(host)?.get?.(selector);
	return existsQueries?.getOrInsert?.(host, /* @__PURE__ */ new Map())?.getOrInsertComputed?.(selector, () => {
		return new Proxy(host, new UniversalElementHandler(selector, index, direction));
	});
};
var extendQueryPrototype = (extended = {}) => {
	return Object.assign(queryExtensions, extended);
};
//#endregion
//#region ../../modules/projects/lur.e/src/lure/context/Reflect.ts
var makeDisposable = (anchors, usub) => {
	if (usub == null) return () => {};
	const disposables = anchors.flatMap((anchor) => {
		if (Array.isArray(usub)) return usub?.map?.((u) => {
			if (u != null) {
				addToCallChain(anchor, Symbol.dispose, u);
				return u;
			}
		});
		else if (usub != null) {
			addToCallChain(anchor, Symbol.dispose, usub);
			return [usub];
		} else return [];
	})?.filter?.((disposable) => disposable != null);
	return () => disposables?.map?.((disposable) => disposable?.())?.filter?.((d) => d != null && typeof d == "function")?.forEach?.((d) => d?.());
};
var $entries = (obj) => {
	if (isPrimitive(obj)) return [];
	if (Array.isArray(obj)) return obj.map((item, idx) => [idx, item]);
	if (obj instanceof Map) return Array.from(obj.entries());
	if (obj instanceof Set) return Array.from(obj.values());
	return Array.from(Object.entries(obj));
};
/** Apply one attribute; style StyleBinding uses reflectStyles, not setAttribute. */
var reflectOneAttribute = (element, prop, value) => {
	if (!element || prop == null) return element;
	const name = prop?.toString?.() || prop;
	if ((name === "style" || name === "cssText") && (isStyleBinding(value) || typeof value === "function")) {
		reflectStyles(element, value);
		return element;
	}
	handleAttribute(element, prop, value);
	return element;
};
var reflectAttributes = (element, attributes) => {
	if (!attributes) return element;
	const weak = new WeakRef(attributes), wel = new WeakRef(element);
	if (typeof attributes == "object" || typeof attributes == "function") {
		$entries(attributes).forEach(([prop, value]) => {
			reflectOneAttribute(wel?.deref?.(), prop, value);
		});
		makeDisposable([attributes, element], affected(attributes, (value, prop) => {
			reflectOneAttribute(wel?.deref?.(), prop, value);
			if ((prop === "style" || prop === "cssText") && (isStyleBinding(value) || typeof value === "function")) return;
			return bindHandler(wel?.deref?.(), value, prop, handleAttribute, weak, true);
		}));
	} else console.warn("Invalid attributes object:", attributes);
	return element;
};
var reflectARIA = (element, aria) => {
	if (!aria) return element;
	const weak = new WeakRef(aria), wel = new WeakRef(element);
	if (typeof aria == "object" || typeof aria == "function") {
		$entries(aria).forEach(([prop, value]) => {
			handleAttribute(wel?.deref?.(), "aria-" + (prop?.toString?.() || prop || ""), value);
		});
		makeDisposable([aria, element], affected(aria, (value, prop) => {
			handleAttribute(wel?.deref?.(), "aria-" + (prop?.toString?.() || prop || ""), value, true);
			return bindHandler(wel, value, prop, handleAttribute, weak, true);
		}));
	} else console.warn("Invalid ARIA object:", aria);
	return element;
};
var reflectDataset = (element, dataset) => {
	if (!dataset) return element;
	const weak = new WeakRef(dataset), wel = new WeakRef(element);
	if (typeof dataset == "object" || typeof dataset == "function") {
		$entries(dataset).forEach(([prop, value]) => {
			handleDataset(wel?.deref?.(), prop, value);
		});
		makeDisposable([dataset, element], affected(dataset, (value, prop) => {
			handleDataset(wel?.deref?.(), prop, value);
			return bindHandler(wel?.deref?.(), value, prop, handleDataset, weak);
		}));
	} else console.warn("Invalid dataset object:", dataset);
	return element;
};
var reflectStyles = (element, styles) => {
	if (!styles) return element;
	if (styles?.style != null && !isStyleBinding(styles) && (isStyleBinding(styles.style) || typeof styles.style === "function")) return reflectStyles(element, styles.style);
	const apply = Array.isArray(styles?.style) ? styles?.style?.[0] : styles?.style;
	if (typeof styles == "string") {
		makeDisposable([styles, element], applyNormalizedInlineStyle(element, styles));
		return element;
	} else if (isStyleBinding(styles) || typeof styles == "function") {
		makeDisposable([styles, element], bindStyle(element, styles));
		return element;
	} else if (typeof styles?.value == "string") {
		makeDisposable([styles, element], affected([styles, "value"], (val) => {
			return makeDisposable([styles, element], applyNormalizedInlineStyle(element, val ?? ""));
		}));
		return element;
	} else if (styles != null && typeof styles == "object" && "value" in styles && (isStyleBinding(styles.value) || typeof styles.value === "function")) {
		const dispose = bindStyle(element, styles.value);
		const usub = affected([styles, "value"], (val) => {
			if (isStyleBinding(val) || typeof val === "function") makeDisposable([styles, element], bindStyle(element, val));
		});
		makeDisposable([styles, element], [usub, dispose]);
		return element;
	} else if (apply != null && typeof apply == "function") {
		makeDisposable([styles, element], bindStyle(element, styles.style));
		return element;
	} else if (typeof styles == "object") {
		const weak = new WeakRef(styles), wel = new WeakRef(element);
		$entries(styles).forEach(([prop, value]) => {
			handleStyleChange(wel?.deref?.(), prop, value);
		});
		makeDisposable([styles, element], affected(styles, (value, prop) => {
			handleStyleChange(wel?.deref?.(), prop, value);
			return bindHandler(wel?.deref?.(), value, prop, handleStyleChange, weak?.deref?.());
		}));
		return element;
	} else console.warn("Invalid styles object:", styles);
	return element;
};
var reflectWithStyleRules = async (element, rule) => {
	return reflectStyles(element, await rule?.(element));
};
var reflectProperties = (element, properties) => {
	if (!properties) return element;
	const weak = new WeakRef(properties), wel = new WeakRef(element);
	const onChange = (ev) => {
		const input = Q("input", ev?.target);
		if (input?.value != null && isNotEqual(input?.value, properties?.value)) properties.value = input?.value;
		if (input?.valueAsNumber != null && isNotEqual(input?.valueAsNumber, properties?.valueAsNumber)) properties.valueAsNumber = input?.valueAsNumber;
		if (input?.checked != null && isNotEqual(input?.checked, properties?.checked)) properties.checked = input?.checked;
	};
	$entries(properties).forEach(([prop, value]) => {
		handleProperty(wel?.deref?.(), prop, value);
	});
	makeDisposable([properties, element], affected(properties, (value, prop) => {
		const el = wel.deref();
		if (el) if (prop == "checked") setChecked(el, value);
		else return bindWith(el, prop, value, handleProperty, weak?.deref?.(), true);
		return null;
	}));
	element.addEventListener("change", onChange);
	return element;
};
var reflectClassList = (element, classList) => {
	if (!classList) return element;
	const wel = new WeakRef(element);
	$entries(classList).forEach(([prop, value]) => {
		const el = element;
		if (typeof value == "undefined" || value == null) {
			if (el.classList.contains(value)) el.classList.remove(value);
		} else if (!el.classList.contains(value)) el.classList.add(value);
	});
	makeDisposable([classList, element], iterated(classList, (value) => {
		const el = wel?.deref?.();
		if (el) {
			if (typeof value == "undefined" || value == null) {
				if (el.classList.contains(value)) el.classList.remove(value);
			} else if (!el.classList.contains(value)) el.classList.add(value);
		}
	}));
	return element;
};
//#endregion
//#region ../../modules/projects/lur.e/src/lure/node/Mapped.ts
var asArray = (children) => {
	if (children instanceof Map || children instanceof Set) children = Array.from(children?.values?.());
	return children;
};
var isElementParent = (value) => value != null && value.nodeType === 1 && value.nodeName !== "BODY" && typeof value.insertBefore === "function";
var $fragKids = Symbol("mapped.fragKids");
var rememberFragmentKids = (node) => {
	if (node instanceof DocumentFragment) {
		const stored = node[$fragKids];
		if (!Array.isArray(stored) || stored.length === 0) {
			const kids = Array.from(node.childNodes);
			if (kids.length) node[$fragKids] = kids;
		}
	}
	return node;
};
var flattenMappedNode = (node) => {
	if (node instanceof DocumentFragment) {
		rememberFragmentKids(node);
		const stored = node[$fragKids];
		if (Array.isArray(stored) && stored.length) return stored;
		return Array.from(node.childNodes);
	}
	if (node instanceof Node) return [node];
	return [];
};
var Mp = class {
	#observable;
	#fragments;
	#mapCb;
	#reMap;
	#pmMap;
	#mapEntries;
	#updater = null;
	#internal = null;
	#options = {};
	#stub = document.createComment("");
	#renderedNodes = /* @__PURE__ */ new Set();
	#syncQueued = false;
	#syncInFlight = null;
	#disposed = false;
	#parentObserver = null;
	#boundParent = null;
	#collection() {
		const source = this.#observable;
		const value = source?.value ?? source;
		if (value instanceof Map || value instanceof Set) return Array.from(value.values());
		return Array.isArray(value) ? value : [];
	}
	#mapKeyAt(index) {
		const source = this.#observable?.value ?? this.#observable;
		if (!(source instanceof Map) || typeof index !== "number") return index;
		return Array.from(source.keys())[index];
	}
	#pruneMapEntries() {
		const source = this.#observable?.value ?? this.#observable;
		if (!(source instanceof Map)) {
			this.#mapEntries.clear();
			return;
		}
		const activeKeys = new Set(source.keys());
		for (const key of this.#mapEntries.keys()) if (!activeKeys.has(key)) this.#mapEntries.delete(key);
	}
	#disconnectParentObserver() {
		this.#parentObserver?.disconnect();
		this.#parentObserver = null;
	}
	async #syncBoundParent() {
		const parent = this.#boundParent;
		if (!parent || this.#disposed) return;
		this.#pruneMapEntries();
		const desiredNodes = [];
		this.#collection().forEach((value, index) => {
			const node = getNode(value, this.mapper.bind(this), index, parent);
			desiredNodes.push(...flattenMappedNode(node));
		});
		const desired = new Set(desiredNodes);
		const lifecycle = {
			appear: this.#options.appear,
			disappear: this.#options.disappear
		};
		if (this.#stub.parentNode !== parent) {
			const firstExisting = desiredNodes.find((node) => node.parentNode === parent);
			if (firstExisting) parent.insertBefore(this.#stub, firstExisting);
			else parent.appendChild(this.#stub);
		}
		for (const oldNode of this.#renderedNodes) if (!desired.has(oldNode) && oldNode.parentNode === parent) if (lifecycle.disappear) {
			await removeChild(parent, oldNode, null, -1, lifecycle);
			if (this.#disposed || this.#boundParent !== parent) return;
		} else oldNode.parentNode.removeChild(oldNode);
		let anchor = this.#stub.nextSibling;
		for (const node of desiredNodes) {
			const wasInParent = node.parentNode === parent;
			if (node.parentNode !== parent || node !== anchor) parent.insertBefore(node, anchor);
			if (!wasInParent && node instanceof Element && lifecycle.appear) {
				await appear(node, lifecycle.appear);
				if (this.#disposed || this.#boundParent !== parent) return;
			}
			anchor = node.nextSibling;
		}
		this.#renderedNodes = desired;
	}
	#queueBoundParentSync() {
		this.#syncQueued = true;
		if (this.#syncInFlight) return;
		this.#syncInFlight = this.#drainBoundParentSync();
	}
	async #drainBoundParentSync() {
		try {
			while (this.#syncQueued && !this.#disposed) {
				this.#syncQueued = false;
				await this.#syncBoundParent();
			}
		} finally {
			this.#syncInFlight = null;
			if (this.#syncQueued && !this.#disposed) this.#queueBoundParentSync();
		}
	}
	makeUpdater(basisParent = null) {
		if (basisParent) {
			this.#internal?.();
			this.#internal = null;
			this.#updater = null;
			this.#updater ??= makeUpdater(basisParent, this.mapper.bind(this), true, {
				appear: this.#options.appear,
				disappear: this.#options.disappear
			});
			this.#internal ??= iterated?.(this.#observable, this._onUpdate.bind(this));
		}
	}
	get boundParent() {
		return this.#boundParent;
	}
	set boundParent(value) {
		if (this.#disposed) return;
		if (isElementParent(value) && value != this.#boundParent) {
			this.#disconnectParentObserver();
			const oldParent = this.#boundParent;
			const lifecycle = { disappear: this.#options.disappear };
			const outgoing = [...this.#renderedNodes].filter((node) => node.parentNode === oldParent && oldParent !== value);
			const apply = () => {
				if (this.#disposed) return;
				this.#boundParent = value;
				this.makeUpdater(value);
				this.#queueBoundParentSync();
			};
			if (lifecycle.disappear && outgoing.length) Promise.all(outgoing.map((node) => removeChild(oldParent, node, null, -1, lifecycle))).then(apply);
			else {
				for (const node of outgoing) oldParent?.removeChild(node);
				apply();
			}
		}
	}
	constructor(observable, mapCb = (el) => el, options = null) {
		if (isObservable(mapCb) && (typeof observable == "function" || typeof observable == "object") && !isObservable(observable)) [observable, mapCb] = [mapCb, observable];
		if (!options && mapCb != null && typeof mapCb == "object" && !isObservable(mapCb)) options = mapCb;
		this.#stub = document.createComment("");
		this.#reMap = /* @__PURE__ */ new WeakMap();
		this.#pmMap = /* @__PURE__ */ new Map();
		this.#mapEntries = /* @__PURE__ */ new Map();
		this.#mapCb = (mapCb != null ? typeof mapCb == "function" ? mapCb : typeof mapCb == "object" ? mapCb?.mapper : null : null) ?? ((el) => el);
		let source = (isObservable(observable) ? observable : observable?.iterator ?? mapCb?.iterator ?? observable) ?? [];
		if (isPrimitive(source) || typeof source === "string") source = [source];
		this.#observable = source;
		this.#fragments = document.createDocumentFragment();
		const $baseOptions = {
			removeNotExistsWhenHasPrimitives: true,
			uniquePrimitives: true,
			preMap: true
		};
		const $newOptions = (isValidParent$1(options) ? null : options) || {};
		this.#options = Object.assign($baseOptions, $newOptions);
		this.boundParent = isValidParent$1(this.#options?.boundParent) ?? isValidParent$1(options) ?? null;
		if (!this.boundParent) {
			if (this.#options.preMap) {
				appendArray(this.#fragments, this.#collection(), this.mapper.bind(this));
				if (this.#fragments.childNodes.length === 0) this.#fragments.appendChild(this.#stub);
			}
		}
	}
	get [$mapped]() {
		return true;
	}
	elementForPotentialParent(requestor) {
		try {
			if (this.#collection().length === 0 && isElementParent(requestor)) {
				this.#disconnectParentObserver();
				this.#boundParent = requestor;
				this.makeUpdater(requestor);
				this.#queueBoundParentSync();
				return this.element;
			}
			const element = getNode(this.#collection()?.[0], this.mapper.bind(this), 0);
			if (!requestor || element?.contains?.(requestor) || requestor == element) return;
			if (isElementParent(requestor)) if (!element) this.boundParent = requestor;
			else if (Array.from(requestor?.children).find((node) => node === element)) this.boundParent = requestor;
			else {
				this.#disconnectParentObserver();
				const observer = new MutationObserver((records) => {
					for (const record of records) if (record.type === "childList") {
						if (record.addedNodes.length > 0) {
							if (Array.from(record.addedNodes || []).find((node) => node === element)) {
								this.boundParent = requestor;
								observer.disconnect();
							}
						}
					}
				});
				this.#parentObserver = observer;
				observer.observe(requestor, { childList: true });
			}
		} catch (error) {
			console.warn(error);
		}
		return this.element;
	}
	get children() {
		return asArray(this.#collection());
	}
	get self() {
		const existsNode = getNode(this.#collection()?.[0], this.mapper.bind(this), 0);
		const theirParent = isValidParent$1(existsNode?.parentElement) ? existsNode?.parentElement : this.boundParent;
		this.boundParent ??= isValidParent$1(theirParent) ?? this.boundParent;
		queueMicrotask(() => {
			const theirParent = isValidParent$1(existsNode?.parentElement) ? existsNode?.parentElement : this.boundParent;
			this.boundParent ??= isValidParent$1(theirParent) ?? this.boundParent;
		});
		return theirParent ?? this.boundParent ?? reformChildren(this.#fragments, this.#collection(), this.mapper.bind(this));
	}
	get element() {
		const children = this.#fragments?.childNodes?.length > 0 ? this.#fragments : getNode(this.#collection()?.[0], this.mapper.bind(this), 0);
		const theirParent = isValidParent$1(children?.parentElement) ? children?.parentElement : this.boundParent;
		this.boundParent ??= isValidParent$1(theirParent) ?? this.boundParent;
		queueMicrotask(() => {
			const theirParent = isValidParent$1(children?.parentElement) ? children?.parentElement : this.boundParent;
			this.boundParent ??= isValidParent$1(theirParent) ?? this.boundParent;
		});
		return children;
	}
	get mapper() {
		return (...args) => {
			const source = this.#observable?.value ?? this.#observable;
			if (args?.[0] == null) return null;
			if (args?.[0] instanceof Node) return args?.[0];
			if (args?.[0] instanceof Promise || typeof (args?.[0])?.then == "function") return null;
			if (source instanceof Map) {
				const mapKey = this.#mapKeyAt(args?.[1]);
				const mapArgs = [
					args?.[0],
					mapKey,
					...args.slice(2)
				];
				const cached = this.#mapEntries.get(mapKey);
				if (cached && Object.is(cached.value, args?.[0])) return cached.node;
				const node = rememberFragmentKids(this.#mapCb(...mapArgs));
				this.#mapEntries.set(mapKey, {
					value: args?.[0],
					node
				});
				return node;
			}
			if ((args?.[1] == null || args?.[1] < 0 || typeof args?.[1] != "number" || !canBeInteger(args?.[1])) && (Array.isArray(source) || source instanceof Set)) return;
			if (args?.[0] != null && (typeof args?.[0] == "object" || typeof args?.[0] == "function" || typeof args?.[0] == "symbol")) return this.#reMap.getOrInsertComputed(args?.[0], () => rememberFragmentKids(this.#mapCb(...args)));
			if (args?.[0] != null && source instanceof Set) return this.#pmMap.getOrInsertComputed(args?.[0], () => rememberFragmentKids(this.#mapCb(...args)));
			if (args?.[0] != null) if (this.#options?.uniquePrimitives && isPrimitive(args?.[0])) return this.#pmMap.getOrInsertComputed(args?.[0], () => rememberFragmentKids(this.#mapCb(...args)));
			else return rememberFragmentKids(this.#mapCb(...args));
		};
	}
	_onUpdate(newEl, idx, oldEl, op = "") {
		if (this.#disposed) return;
		this.#queueBoundParentSync();
	}
	[Symbol.dispose]() {
		this.#disposed = true;
		this.#internal?.();
		this.#internal = null;
		this.#disconnectParentObserver();
		this.#syncQueued = false;
		const lifecycle = { disappear: this.#options.disappear };
		for (const node of this.#renderedNodes) {
			if (!node.parentNode) continue;
			if (lifecycle.disappear) removeChild(node.parentNode, node, null, -1, lifecycle);
			else node.parentNode.removeChild(node);
		}
		this.#renderedNodes.clear();
		this.#stub.parentNode?.removeChild(this.#stub);
		this.#mapEntries.clear();
		this.#pmMap.clear();
		this.#reMap = /* @__PURE__ */ new WeakMap();
		this.#boundParent = null;
	}
	*[Symbol.iterator]() {
		let i = 0;
		if (this.#collection()) for (let el of this.#collection()) yield this.mapper(el, i++);
	}
};
var M$1 = (observable, mapCb, boundParent = null) => {
	return new Mp(observable, mapCb, boundParent);
};
//#endregion
//#region ../../modules/projects/lur.e/src/lure/core/TriggerCore.ts
/**
* Composable modifier and reactive-source adapters for LinkTrigger.
* DOM listener mechanics remain in fest/dom; object.ts remains the owner of
* reactive subscription semantics.
*/
var disposeOf = (cleanup) => {
	if (typeof cleanup === "function") return cleanup;
	if (typeof cleanup?.disconnect === "function") return () => cleanup.disconnect?.();
	if (typeof cleanup?.unsubscribe === "function") return () => cleanup.unsubscribe?.();
};
/** Normalize modifier listener options without allowing passive preventDefault. */
var listenerOptionsFor = (modifiers = {}) => ({
	capture: Boolean(modifiers.capture),
	passive: modifiers.prevent ? false : Boolean(modifiers.passive)
});
var applyEventModifiers = (event, modifiers) => {
	if (!event) return;
	if (modifiers.prevent) event.preventDefault?.();
	if (modifiers.stop) event.stopPropagation?.();
};
var isTriggerHandler = (value) => typeof value === "function" || typeof value?.handleEvent === "function";
var invokeHandler = (handler, event) => typeof handler === "function" ? handler(event) : handler.handleEvent(event);
var isModifierTuple = (entry) => Array.isArray(entry) && entry.length === 2 && isTriggerHandler(entry[0]) && !!entry[1] && typeof entry[1] === "object" && !Array.isArray(entry[1]);
/**
* Decorate any LinkTrigger with lifecycle-safe DOM modifiers.
* INVARIANT: `once` disposes the wrapped trigger after the committed callback,
* including a delayed debounce commit.
*/
var withTriggerModifiers = (trigger, modifiers = {}) => (ctx) => {
	let disposed = false;
	let timeout = null;
	let cleanup;
	const dispose = () => {
		if (disposed) return;
		disposed = true;
		if (timeout) clearTimeout(timeout);
		timeout = null;
		cleanup?.();
		cleanup = void 0;
	};
	const commit = (event, forProp) => {
		if (disposed) return;
		applyEventModifiers(event, modifiers);
		const run = () => {
			if (disposed) return;
			ctx.commit(event, forProp);
			if (modifiers.once) dispose();
		};
		const delay = Math.max(0, Number(modifiers.debounce) || 0);
		if (delay > 0) {
			if (timeout) clearTimeout(timeout);
			timeout = setTimeout(run, delay);
		} else run();
	};
	cleanup = disposeOf(trigger({
		...ctx,
		commit
	}));
	return dispose;
};
/**
* Adapt an object.ts observable ref/property into the LinkTrigger lifecycle.
* Reactive filtering remains delegated to object.ts `affected()`.
*/
var refTrigger = (target, prop = "value", { affectTypes = ["setter", "manual"], triggerImmediately = false } = {}) => ({ commit }) => affected([target, prop], (value, key, oldValue, trigger) => {
	commit({
		type: "ref",
		target,
		prop: key ?? prop,
		value,
		oldValue,
		trigger
	}, prop);
}, {
	affectTypes,
	triggerImmediately
});
/**
* Bind `E({ on })` style handlers with the same modifier semantics as Linker.
* Existing bare handlers remain valid; modifier tuples are additive.
*/
var bindTriggerHandlers = (target, handlers) => {
	if (!target || !handlers) return () => {};
	const disposers = [];
	for (const [type, entry] of Object.entries(handlers)) {
		const entries = isModifierTuple(entry) ? [entry] : Array.isArray(entry) ? entry : [entry];
		for (const current of entries) {
			const [handler, modifiers] = isModifierTuple(current) ? current : [current, {}];
			if (!isTriggerHandler(handler)) continue;
			let disposed = false;
			let timeout = null;
			let remove = null;
			const dispose = () => {
				if (disposed) return;
				disposed = true;
				if (timeout) clearTimeout(timeout);
				timeout = null;
				remove?.();
				remove = null;
			};
			const listener = (event) => {
				if (disposed) return;
				applyEventModifiers(event, modifiers);
				const run = () => {
					if (disposed) return;
					invokeHandler(handler, event);
					if (modifiers.once) dispose();
				};
				const delay = Math.max(0, Number(modifiers.debounce) || 0);
				if (delay > 0) {
					if (timeout) clearTimeout(timeout);
					timeout = setTimeout(run, delay);
				} else run();
			};
			const options = listenerOptionsFor(modifiers);
			target.addEventListener(type, listener, options);
			remove = () => target.removeEventListener(type, listener, options);
			disposers.push(dispose);
		}
	}
	return () => disposers.forEach((dispose) => dispose());
};
//#endregion
//#region ../../modules/projects/lur.e/src/lure/node/Bindings.ts
var Qp = (ref, host = document.documentElement) => {
	if (ref?.value == null) return Q(ref, host);
	const actual = Q(ref?.value, host);
	affected(ref, (value, prop) => actual?._updateSelector(value));
	return actual;
};
var $createElement = (selector) => {
	if (typeof selector == "string") {
		const nl = Qp(createElementVanilla(selector));
		return nl?.element ?? nl;
	} else if (selector instanceof HTMLElement || selector instanceof Element || selector instanceof DocumentFragment || selector instanceof Document || selector instanceof Node) return selector;
	else return null;
};
/** Normalize E() children into a Mapped source (array / collection / observable). */
var childrenAsMappedSource = (children) => {
	if (children == null || children === false) return null;
	if (isObservable(children)) return children;
	if (children instanceof Node) return [children];
	if (typeof children === "object" || typeof children === "function") return children;
	return [children];
};
var E = (selector, params = {}, children) => {
	const element = getNode(typeof selector == "string" ? $createElement(selector) : selector, null, -1);
	const mappedSource = childrenAsMappedSource(children);
	if (element && mappedSource != null) M$1(mappedSource, (el) => el, element);
	if (element && params) {
		if (params.ctrls != null) reflectControllers(element, params.ctrls);
		if (params.attributes != null) reflectAttributes(element, params.attributes);
		if (params.properties != null) reflectProperties(element, params.properties);
		if (params.classList != null) reflectClassList(element, params.classList);
		if (params.behaviors != null) reflectBehaviors(element, params.behaviors);
		if (params.dataset != null) reflectDataset(element, params.dataset);
		if (params.stores != null) reflectStores(element, params.stores);
		if (params.mixins != null) reflectMixins(element, params.mixins);
		if (params.style != null) reflectStyles(element, params.style);
		if (params.aria != null) reflectARIA(element, params.aria);
		if ("checked" in params) bindWith(element, "checked", params.checked, handleProperty, params, true);
		if ("value" in params) bindWith(element, "value", params.value, handleProperty, params, true);
		if ("valueAsNumber" in params) bindWith(element, "valueAsNumber", params.valueAsNumber, handleProperty, params, true);
		if ("placeholder" in params) bindWith(element, "placeholder", params.placeholder, handleProperty, params, true);
		if (params.is != null) bindWith(element, "is", params.is, handleAttribute, params, true);
		if (params.role != null) bindWith(element, "role", params.role, handleProperty, params);
		if (params.slot != null) bindWith(element, "slot", params.slot, handleProperty, params);
		if (params.part != null) bindWith(element, "part", params.part, handleAttribute, params, true);
		if (params.name != null) bindWith(element, "name", params.name, handleAttribute, params, true);
		if (params.type != null) bindWith(element, "type", params.type, handleAttribute, params, true);
		if (params.icon != null) bindWith(element, "icon", params.icon, handleAttribute, params, true);
		if (params.inert != null) bindWith(element, "inert", params.inert, handleAttribute, params, true);
		if (params.hidden != null) bindWith(element, "hidden", params.visible ?? params.hidden, handleHidden, params);
		if (params.on != null) addToCallChain(element, Symbol.dispose, bindTriggerHandlers(element, params.on));
		if (params.rules != null) params.rules.forEach?.((rule) => reflectWithStyleRules(element, rule));
	}
	return Q(element);
};
//#endregion
//#region ../../modules/projects/lur.e/src/lure/node/Switched.ts
var $getFromMapped = (mapped, value) => {
	if (typeof value == "number" && value < 0 || typeof value == "string" && !value || value == null) return { element: "" };
	if (mapped instanceof Map || typeof mapped?.get == "function") return mapped.get(value);
	if (mapped instanceof Set || typeof mapped?.has == "function") return mapped.has(value) ? value : null;
	return mapped?.[value] ?? { element: "" };
};
var getFromMapped = (mapped, value, requestor = null) => {
	return getNode($getFromMapped(mapped, value), null, -1, requestor);
};
var SwM = class {
	#stub = document.createComment("");
	current;
	mapped;
	boundParent = null;
	constructor(params, mapped) {
		this.#stub = document.createComment("");
		this.current = params?.current ?? { value: -1 };
		this.mapped = params?.mapped ?? mapped ?? [];
		const us = affected([params?.current, "value"], (newVal, prop, oldVal) => this._onUpdate(newVal, prop, oldVal));
		if (us) addToCallChain(this, Symbol.dispose, us);
	}
	get element() {
		const element = getFromMapped(this.mapped, this.current?.value ?? -1, this.boundParent) ?? this.#stub;
		const theirParent = isValidParent$1(element?.parentElement) ? element?.parentElement : this.boundParent;
		this.boundParent ??= isValidParent$1(theirParent) ?? this.boundParent;
		if (element != null && (element?.parentNode != this.boundParent || !element?.parentNode)) {
			if (this.boundParent) appendFix(this.boundParent, element);
		}
		queueMicrotask(() => {
			const theirParent = isValidParent$1(element?.parentElement) ? element?.parentElement : this.boundParent;
			this.boundParent ??= isValidParent$1(theirParent) ?? this.boundParent;
		});
		return element;
	}
	elementForPotentialParent(requestor) {
		if (isValidParent$1(requestor)) this.boundParent = requestor;
		this.current?.[$trigger]?.();
		return this.element;
	}
	_onUpdate(newVal, prop, oldVal) {
		const idx = newVal ?? this.current?.value;
		if (oldVal ? isNotEqual(idx, oldVal) : true) {
			const old = oldVal ?? this.current?.value;
			if (this.current) this.current.value = idx ?? -1;
			const parent = getFromMapped(this.mapped, old ?? idx ?? -1)?.parentNode ?? this.boundParent;
			this.boundParent = parent ?? this.boundParent;
			const newNode = getFromMapped(this.mapped, idx ?? -1, parent) ?? this.#stub;
			const oldNode = getFromMapped(this.mapped, old ?? -1, parent);
			if (isElement(parent)) {
				if (isElement(newNode)) if (isElement(oldNode)) try {
					replaceOrSwap(parent, oldNode, newNode);
				} catch (e) {
					console.warn(e);
				}
				else appendFix(parent, newNode);
				else if (oldNode && !newNode) removeChild(parent, oldNode);
			}
		}
	}
};
var SwHandler = class {
	constructor() {}
	set(params, name, val) {
		return Reflect.set(getFromMapped(params?.mapped, params?.current?.value ?? -1) ?? params, name, val);
	}
	has(params, name) {
		return Reflect.has(getFromMapped(params?.mapped, params?.current?.value ?? -1) ?? params, name);
	}
	get(params, name, ctx) {
		if (name == "elementForPotentialParent" && (name in params || params?.[name] != null)) return params?.elementForPotentialParent?.bind(params);
		if (name == "element" && (name in params || params?.[name] != null)) return params?.element;
		if (name == "_onUpdate" && (name in params || params?.[name] != null)) return params?._onUpdate?.bind(params);
		return contextify(getFromMapped(params?.mapped, params?.current?.value ?? -1) ?? params, name);
	}
	ownKeys(params) {
		return Reflect.ownKeys(getFromMapped(params?.mapped, params?.current?.value ?? -1) ?? params);
	}
	apply(params, thisArg, args) {
		return Reflect.apply(getFromMapped(params?.mapped, params?.current?.value ?? -1) ?? params, thisArg, args);
	}
	deleteProperty(params, name) {
		return Reflect.deleteProperty(getFromMapped(params?.mapped, params?.current?.value ?? -1) ?? params, name);
	}
	setPrototypeOf(params, proto) {
		return Reflect.setPrototypeOf(getFromMapped(params?.mapped, params?.current?.value ?? -1) ?? params, proto);
	}
	getPrototypeOf(params) {
		return Reflect.getPrototypeOf(getFromMapped(params?.mapped, params?.current?.value ?? -1) ?? params);
	}
	defineProperty(params, name, desc) {
		return Reflect.defineProperty(getFromMapped(params?.mapped, params?.current?.value ?? -1) ?? params, name, desc);
	}
	getOwnPropertyDescriptor(params, name) {
		return Reflect.getOwnPropertyDescriptor(getFromMapped(params?.mapped, params?.current?.value ?? -1) ?? params, name);
	}
	preventExtensions(params) {
		return Reflect.preventExtensions(getFromMapped(params?.mapped, params?.current?.value ?? -1) ?? params);
	}
	isExtensible(params) {
		return Reflect.isExtensible(getFromMapped(params?.mapped, params?.current?.value ?? -1) ?? params);
	}
};
var I = (params, mapped) => {
	return inProxy?.getOrInsertComputed?.(params, () => {
		return new Proxy(params instanceof SwM ? params : new SwM(params, mapped), new SwHandler());
	});
};
//#endregion
//#region ../../modules/projects/lur.e/src/lure/node/jsx-runtime/index.ts
/** INVARIANT: Symbol identity is shared via jsx-dev-runtime → jsx-runtime symlink. */
var Fragment = Symbol.for("fest.jsx.Fragment");
var createElement = (type, props = {}, children, ...others) => {
	let normalized = {}, ref;
	let attributes = {}, properties = {}, classList = {}, style = {}, ctrls = {}, on = {};
	for (const i in props) if (i == "ref") {
		if (typeof type != "function") ref = typeof props[i] != "function" ? props[i] : Q(props[i]);
	} else if (i == "classList") classList = props[i];
	else if (i == "style") style = props[i];
	else if (i?.startsWith?.("@")) {
		const name = i.replace("@", "").trim();
		if (name) bindEvent(on, name, props[i]);
		else on = props[i];
	} else if (i?.startsWith?.("on:")) {
		const name = i.replace("on:", "").trim();
		if (name) bindEvent(on, name, props[i]);
		else on = props[i];
	} else if (i?.startsWith?.("prop:")) {
		const name = i.replace("prop:", "").trim();
		if (name) properties[name] = props[i];
		else properties = props[i];
	} else if (i?.startsWith?.("attr:")) {
		const name = i.replace("attr:", "").trim();
		if (name) attributes[name] = props[i];
		else attributes = props[i];
	} else if (i?.startsWith?.("ctrl:")) {
		const name = i.replace("ctrl:", "").trim();
		if (name) ctrls.set(name, props[i]);
		else ctrls = props[i];
	} else if (i !== "children" && i !== "key") attributes[i.trim()] = props[i];
	Object.assign(normalized, {
		attributes,
		properties,
		classList,
		style,
		on
	});
	const fromProps = props?.children;
	const $children = Array.isArray(children) ? children : others?.length > 0 ? [children, ...others] : children != null ? (typeof children == "object" || typeof children == "function") && !(children instanceof Node) || children instanceof DocumentFragment ? children : [children] : fromProps != null ? fromProps : null;
	if (type == Fragment) return E(document.createDocumentFragment(), normalized, $children);
	if (typeof type == "function") return type(props, $children);
	if (type == "For") return M$1(props, $children);
	if (type == "Switch") return I(props, $children);
	const element = E(type, normalized, $children);
	if (!element) return element;
	Promise.try(() => {
		if (ref) if (typeof ref == "function") ref?.(element);
		else ref.value = element;
	})?.catch?.(console.warn.bind(console));
	return element;
};
/** Automatic runtime entry used by TS `jsxImportSource` + Vite plugin-react. */
var jsx = (type, props, _key) => createElement(type, props ?? {});
var jsxs = jsx;
var jsxDEV = (type, props, _key, _isStatic, _source, _self) => createElement(type, props ?? {});
globalThis["createElement"] = createElement;
globalThis["Fragment"] = Fragment;
globalThis["render"] = createElement;
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/tasking/History.ts
var STATE_KEY = "rs-nav-ctx";
var STACK_KEY = "rs-nav-stack";
var historyState = observe({
	index: 0,
	length: 0,
	action: "MANUAL",
	view: "",
	canBack: false,
	canForward: false,
	entries: []
});
var getCurrentState = () => {
	try {
		return history.state?.[STATE_KEY] || historyState?.entries?.[historyState?.index] || {};
	} catch (e) {
		return {};
	}
};
var saveStack = () => {
	try {
		sessionStorage.setItem(STACK_KEY, JSON.stringify(historyState?.entries));
	} catch (e) {}
};
var loadStack = () => {
	try {
		const stored = sessionStorage.getItem(STACK_KEY);
		return stored ? JSON.parse(stored) : [];
	} catch (e) {
		return [];
	}
};
var mergeState = (newState, existingData) => {
	try {
		const current = existingData !== void 0 ? existingData : history?.state || {};
		if (isPrimitive(current) && current !== null) return {
			value: current,
			[STATE_KEY]: newState
		};
		if (current === null) return { [STATE_KEY]: newState };
		return {
			...current,
			[STATE_KEY]: newState
		};
	} catch (e) {
		return { [STATE_KEY]: newState };
	}
};
var initialized$1 = false;
var originalPush = typeof history != "undefined" ? history.pushState.bind(history) : void 0;
var originalReplace = typeof history != "undefined" ? history.replaceState.bind(history) : void 0;
var originalGo = typeof history != "undefined" ? history.go.bind(history) : void 0;
var originalForward = typeof history != "undefined" ? history.forward.bind(history) : void 0;
var originalBack = typeof history != "undefined" ? history.back.bind(history) : void 0;
var initHistory = (initialView = "") => {
	if (initialized$1) return;
	initialized$1 = true;
	const current = getCurrentState();
	const view = initialView || location.hash || "#";
	let stack = loadStack();
	const idx = current.index || 0;
	if (stack && (stack?.length === 0 || idx >= stack?.length)) {
		if (stack.length <= idx) stack[idx] = {
			index: idx,
			depth: history.length,
			action: current?.action || "REPLACE",
			view,
			timestamp: Date.now()
		};
	}
	historyState.entries = stack;
	if (!current.timestamp) {
		const state = {
			index: idx,
			depth: history.length,
			action: "REPLACE",
			view,
			timestamp: Date.now()
		};
		history?.replaceState?.(mergeState(state), "", location.hash);
		if (historyState?.entries) historyState.entries[idx] = state;
		saveStack();
	} else {
		historyState.index = current.index || 0;
		historyState.view = current.view || view;
		if (!historyState?.entries?.[historyState?.index]) {
			historyState.entries[historyState.index] = current;
			saveStack();
		}
	}
	updateReactiveState(getCurrentState()?.action || "REPLACE", view);
	history.go = (delta = 0) => {
		const currentState = getCurrentState();
		currentState.index = Math.max(0, Math.min(historyState.length, (currentState.index || 0) + delta));
		const existsState = historyState.entries[currentState.index];
		Object.assign(currentState, existsState || {});
		setIgnoreNextPopState(true);
		const result = originalGo?.(delta);
		setTimeout(() => {
			setIgnoreNextPopState(false);
		}, 0);
		updateReactiveState(currentState?.action || "POP", currentState?.view);
		return result;
	};
	history.back = () => {
		return history.go(-1);
	};
	history.forward = () => {
		return history.go(1);
	};
	history.pushState = (data, unused, url) => {
		const currentState = getCurrentState();
		const nextIndex = (currentState.index || 0) + 1;
		const newState = {
			index: nextIndex,
			depth: history.length + 1,
			action: "PUSH",
			view: url ? String(url) : currentState.view || "",
			timestamp: Date.now()
		};
		const result = originalPush?.(mergeState(newState, data), unused, url);
		historyState.entries = historyState?.entries?.slice?.(0, nextIndex);
		historyState.entries?.push?.(newState);
		saveStack();
		updateReactiveState("PUSH", newState.view);
		return result;
	};
	history.replaceState = (data, unused, url) => {
		const currentState = getCurrentState();
		const index = currentState?.index || 0;
		const newState = {
			...currentState,
			index,
			depth: history.length,
			action: "REPLACE",
			view: url ? String(url) : currentState?.view || "",
			timestamp: Date.now()
		};
		const result = originalReplace?.(mergeState(newState, data), unused, url);
		if (historyState?.entries) {
			historyState.entries[index] = newState;
			historyState.entries[historyState.index].view = url ? String(url) : currentState?.view || "";
		}
		saveStack();
		updateReactiveState("REPLACE", newState.view);
		return result;
	};
	addEvent(window, "popstate", (ev) => {
		const state = ev.state?.[STATE_KEY];
		const currentIndex = historyState.index ?? 0;
		if (!state) {
			const newState = {
				index: currentIndex + 1,
				depth: history.length,
				action: "PUSH",
				view: location.hash || "#",
				timestamp: Date.now()
			};
			history.replaceState(mergeState(newState, ev.state), "", location.hash);
			historyState.entries = historyState?.entries?.slice?.(0, newState.index);
			historyState?.entries?.push?.(newState);
			saveStack();
			updateReactiveState("PUSH", newState.view);
			return;
		} else {
			const newIndex = state?.index ?? 0;
			let action = "POP";
			if (newIndex < currentIndex) action = "BACK";
			else if (newIndex > currentIndex) action = "FORWARD";
			updateReactiveState(action, state?.view || location.hash);
		}
	});
	addEvent(window, "hashchange", (ev) => {
		if (getIgnoreNextPopState()) return;
		const currentHash = location.hash || "#";
		if (historyState.view !== currentHash) updateReactiveState("PUSH", currentHash);
	});
};
var updateReactiveState = (action, view) => {
	const current = getCurrentState();
	historyState.index = current.index || 0;
	historyState.length = history.length;
	historyState.action = action || "POP";
	historyState.view = view || current.view || location.hash;
	historyState.canBack = historyState.index > 0;
};
var navigate = (view, replace = false) => {
	const hash = view.startsWith("#") ? view : `#${view}`;
	if (replace && historyState?.index > 0) {
		const prev = historyState?.entries?.[historyState?.index - 1];
		if (prev && prev.view === hash) {
			history.back();
			return;
		}
	}
	if (replace) {
		if (historyState?.entries?.[historyState.index]?.view !== hash || historyState?.entries?.[historyState.index]?.view) history?.replaceState?.(null, "", hash);
	} else history?.pushState?.(null, "", hash);
};
var historyViewRef = (initialValue = `#${location.hash?.replace?.(/^#/, "") || "home"}`, options = {}) => {
	const internal = observe({ value: initialValue });
	let isUpdatingFromHistory = false;
	let isUpdatingFromInternal = false;
	affected([historyState, "view"], (view) => {
		if (isUpdatingFromInternal) return;
		if (options.ignoreBack && historyState.action === "BACK") return;
		let nextValue = view;
		if (options.withoutHashPrefix) nextValue = view.replace(/^#/, "");
		if (internal.value !== nextValue) {
			isUpdatingFromHistory = true;
			internal.value = nextValue;
			isUpdatingFromHistory = false;
		}
	});
	affected([internal, "value"], (val) => {
		if (isUpdatingFromHistory) return;
		let viewToNavigate = val;
		if (options.withoutHashPrefix && !val.startsWith("#")) viewToNavigate = `#${val}`;
		if (historyState.view !== viewToNavigate) {
			isUpdatingFromInternal = true;
			navigate(viewToNavigate);
			isUpdatingFromInternal = false;
		}
	});
	return internal;
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/tasking/BackNavigation.ts
/**
* BackNavigation - Priority-based back gesture/button navigation manager
*
* Handles mobile/browser back gestures/buttons for closing:
* - Context menus (highest priority)
* - Modal dialogs
* - Sidebars/overlays
* - Tasks/views (lowest priority)
*
* Usage:
* 1. Register closable elements/callbacks with priority
* 2. On back navigation, closes the highest priority active element first
* 3. Supports custom close handlers and visibility checks
*/
var ClosePriority = /* @__PURE__ */ function(ClosePriority) {
	ClosePriority[ClosePriority["CONTEXT_MENU"] = 100] = "CONTEXT_MENU";
	ClosePriority[ClosePriority["DROPDOWN"] = 90] = "DROPDOWN";
	ClosePriority[ClosePriority["MODAL"] = 80] = "MODAL";
	ClosePriority[ClosePriority["DIALOG"] = 70] = "DIALOG";
	ClosePriority[ClosePriority["SIDEBAR"] = 60] = "SIDEBAR";
	ClosePriority[ClosePriority["OVERLAY"] = 50] = "OVERLAY";
	ClosePriority[ClosePriority["PANEL"] = 40] = "PANEL";
	ClosePriority[ClosePriority["TOAST"] = 30] = "TOAST";
	ClosePriority[ClosePriority["TASK"] = 20] = "TASK";
	ClosePriority[ClosePriority["VIEW"] = 10] = "VIEW";
	ClosePriority[ClosePriority["DEFAULT"] = 0] = "DEFAULT";
	return ClosePriority;
}({});
var registry = /* @__PURE__ */ new Map();
var navigationInitialized = false;
var processingBack = false;
var historyDepth = 0;
var options = {};
var ignoreNextPopState = false;
var setIgnoreNextPopState = (value) => {
	ignoreNextPopState = value;
};
var getIgnoreNextPopState = () => ignoreNextPopState;
var generateId = () => `closeable-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
/**
* Register a closeable element/callback with the back navigation system
*/
var registerCloseable = (entry) => {
	const id = entry.id || generateId();
	const fullEntry = Object.assign(entry, { id });
	if (fullEntry?.hashId == null) fullEntry.hashId = id;
	registry.set(id, fullEntry);
	if (options.debug) console.log("[BackNav] Registered:", id, "priority:", entry.priority);
	return () => unregisterCloseable(id);
};
/**
* Unregister a closeable by ID
*/
var unregisterCloseable = (id) => {
	const removed = registry.delete(id);
	if (options.debug && removed) console.log("[BackNav] Unregistered:", id);
	return removed;
};
/**
* Get all active closeables sorted by priority (highest first)
*/
var getActiveCloseables = (view) => {
	return Array.from(registry.values()).filter((entry) => {
		if (entry.element) {
			if (!entry.element.deref()) {
				registry.delete(entry.id);
				return false;
			}
		}
		return entry.isActive(view);
	}).sort((a, b) => b.priority - a.priority);
};
/**
* Get the highest priority active closeable
*/
var getActiveCloseable = (view) => {
	return getActiveCloseables(view)[0] || null;
};
/**
* Attempt to close the highest priority active closeable
* @returns true if something was closed, false otherwise
*/
var closeHighestPriority = (view) => {
	const entry = getActiveCloseable(view);
	if (!entry) return null;
	if (options.debug) console.log("[BackNav] Closing:", entry.id, "priority:", entry.priority);
	return entry?.close?.(view) != false ? entry : null;
};
/**
* Close all active closeables in a specific group
*/
var closeByGroup = (group) => {
	let closedCount = 0;
	for (const entry of registry.values()) if (entry.group === group && entry.isActive()) {
		registry?.delete?.(entry.id);
		if (entry.close() !== false) closedCount++;
	}
	return closedCount;
};
/**
* Check if any closeable is currently active
*/
var hasActiveCloseable = (view) => {
	return getActiveCloseable(view) != null;
};
/**
* Handle back navigation (popstate event)
*/
var handleBackNavigation = (ev) => {
	if (processingBack) return false;
	if (ignoreNextPopState) {
		ignoreNextPopState = false;
		return false;
	}
	if (ev?.state?.action) return false;
	processingBack = true;
	try {
		ignoreNextPopState = true;
		let closingView;
		if (historyState.entries && (historyState.action === "BACK" || historyState.action === "POP")) {
			const prevEntry = historyState.entries[historyState.index + 1];
			if (prevEntry) closingView = prevEntry.view;
		}
		if (closeHighestPriority(closingView)) {
			ev.preventDefault?.();
			ignoreNextPopState = true;
			originalForward?.();
			setTimeout(() => {
				ignoreNextPopState = false;
			}, 0);
			return true;
		}
		ignoreNextPopState = false;
		return false;
	} finally {
		processingBack = false;
	}
};
/**
* Initialize back navigation handling
*/
var initBackNavigation = (opts = {}) => {
	if (navigationInitialized) {
		console.warn("[BackNav] Already initialized");
		return () => {};
	}
	options = { ...opts };
	navigationInitialized = true;
	initHistory(location.hash);
	if (opts.pushInitialState !== false && !opts.skipPopstateHandler) {
		historyDepth = 0;
		setIgnoreNextPopState(true);
		const newState = {
			...history.state || {},
			backNav: true,
			depth: historyDepth
		};
		history.pushState(newState, "", location.hash || "#");
		setIgnoreNextPopState(false);
	}
	let unbind;
	if (!opts.skipPopstateHandler) {
		const popstateHandler = (ev) => {
			if (!ev?.state?.action) {
				if (!handleBackNavigation(ev) && !opts.preventDefaultNavigation) {}
			}
		};
		unbind = addEvent(window, "popstate", popstateHandler);
	}
	if (options.debug) console.log("[BackNav] Initialized", opts.skipPopstateHandler ? "(external handler)" : "");
	return () => {
		unbind?.();
		navigationInitialized = false;
		registry.clear();
		if (options.debug) console.log("[BackNav] Destroyed");
	};
};
/**
* Register a context menu as closeable
*/
var registerContextMenu = (element, visibleRef, onClose) => {
	return registerCloseable({
		id: `ctx-menu-${element.id || generateId()}`,
		priority: 100,
		element: new WeakRef(element),
		group: "context-menu",
		isActive: () => visibleRef.value === true,
		close: () => {
			visibleRef.value = false;
			onClose?.();
			return true;
		}
	});
};
/**
* Register a modal dialog as closeable
*/
var registerModal = (element, isActiveCheck, onClose) => {
	return registerCloseable({
		id: `modal-${element.id || generateId()}`,
		priority: 80,
		element: new WeakRef(element),
		group: "modal",
		isActive: isActiveCheck ?? (() => {
			const el = element;
			return el?.isConnected && !el?.hasAttribute?.("data-hidden") && el?.checkVisibility?.({
				opacityProperty: true,
				visibilityProperty: true
			}) !== false;
		}),
		close: () => {
			onClose?.();
			element?.remove?.();
			return true;
		}
	});
};
/**
* Register a sidebar as closeable
*/
var registerSidebar = (element, openedRef, onClose) => {
	return registerCloseable({
		id: `sidebar-${element.id || generateId()}`,
		priority: 60,
		element: new WeakRef(element),
		group: "sidebar",
		isActive: () => {
			const val = openedRef.value;
			return !!val && String(val) !== "false";
		},
		close: () => {
			openedRef.value = false;
			onClose?.();
			return false;
		}
	});
};
/**
* Register an overlay/panel as closeable
*/
var registerOverlay = (element, isActiveCheck, onClose, priority = 50) => {
	return registerCloseable({
		id: `overlay-${element.id || generateId()}`,
		priority,
		element: new WeakRef(element),
		group: "overlay",
		isActive: isActiveCheck,
		close: () => {
			onClose();
			return false;
		}
	});
};
/**
* Create a modal backdrop with back navigation support
* Wraps an existing modal creation pattern
*/
var createBackNavigableModal = (content, options = {}) => {
	const { backdropClass = "rs-modal-backdrop", closeOnBackdropClick = true, closeOnEscape = true, onClose } = options;
	const backdrop = document.createElement("div");
	backdrop.className = backdropClass;
	backdrop.appendChild(content);
	const close = () => {
		onClose?.();
		backdrop.remove();
		document.removeEventListener("keydown", escHandler);
	};
	const escHandler = (ev) => {
		if (ev.key === "Escape" && closeOnEscape) close();
	};
	if (closeOnEscape) document.addEventListener("keydown", escHandler);
	if (closeOnBackdropClick) backdrop.addEventListener("click", (ev) => {
		if (ev.target === backdrop) close();
	});
	return {
		element: backdrop,
		close,
		unregister: registerModal(backdrop, void 0, close)
	};
};
//#endregion
//#region ../../modules/projects/lur.e/src/lure/core/Links.ts
var localStorageLinkMapSymbol = Symbol.for("lure@localStorageLinkMap");
globalThis[localStorageLinkMapSymbol] ??= /* @__PURE__ */ new Map();
var localStorageLinkMap = globalThis[localStorageLinkMapSymbol];
var cleanupOf = (cleanup) => {
	if (!cleanup) return;
	if (typeof cleanup == "function") return cleanup;
	const target = cleanup;
	if (typeof target?.disconnect == "function") return () => target.disconnect?.();
	if (typeof target?.unsubscribe == "function") return () => target.unsubscribe?.();
};
var runWithoutSetterTrigger = (target, cb) => {
	const control = target?.[$triggerControl];
	if (typeof control?.without == "function") return control.without(["setter", "set"], cb);
	return $avoidTrigger(target, cb);
};
var setRefValue = (target, value, forProp = "value") => {
	if (!target || !(typeof target == "object" || typeof target == "function")) return value;
	if (isNotEqual(target[forProp], value)) return runWithoutSetterTrigger(target, () => {
		target[forProp] = value;
	});
	return value;
};
var selectSourceInput = (source, event, selector = "input") => {
	const target = event?.target ?? source;
	if (target?.matches?.(selector)) return target;
	return target?.querySelector?.(selector) ?? source;
};
var radioScopeOf = (source) => {
	return source?.matches?.("input[type=\"radio\"]") ? source?.form ?? source?.parentNode ?? source : source;
};
var radioNameOf = (source, name) => {
	if (name) return name;
	if (source?.type == "radio" && source?.name) return source.name;
	return source?.querySelector?.("input[type=\"radio\"]:checked")?.name ?? source?.querySelector?.("input[type=\"radio\"]")?.name ?? "";
};
var radioSelectorOf = (name) => `input[type="radio"]${name ? `[name="${globalThis.CSS?.escape?.(name) ?? name}"]` : ""}`;
var radioCheckedIn = (source, name) => {
	const scope = radioScopeOf(source);
	if (source?.type == "radio" && (!name || source.name == name) && source.checked) return source;
	return scope?.querySelector?.(`${radioSelectorOf(name)}:checked`) ?? null;
};
var radioByValueIn = (source, value, name) => {
	return [...radioScopeOf(source)?.querySelectorAll?.(radioSelectorOf(name)) ?? (source?.type == "radio" ? [source] : [])].find((radio) => radio?.value == value) ?? null;
};
var eventTrigger = (events, options = {}) => {
	const eventList = Array.isArray(events) ? events : [events];
	const listenerOptions = listenerOptionsFor(options);
	const base = ({ source, commit }) => {
		const target = source?.element ?? source?.self ?? source;
		if (!target?.addEventListener) return;
		const listener = (event) => commit(event);
		eventList.forEach((name) => target.addEventListener(name, listener, listenerOptions));
		return () => eventList.forEach((name) => target.removeEventListener?.(name, listener, listenerOptions));
	};
	return withTriggerModifiers(base, options);
};
var mutationTrigger = (attribute) => {
	return ({ source, commit }) => {
		const target = source?.element ?? source?.self ?? source;
		if (!target || typeof MutationObserver == "undefined") return;
		const observer = new MutationObserver((records) => {
			if (!attribute || records.some((record) => record.type == "attributes" && record.attributeName == attribute)) commit(records);
		});
		observer.observe(target, {
			attributes: true,
			attributeFilter: attribute ? [attribute] : void 0
		});
		return () => observer.disconnect();
	};
};
var resizeTrigger = (box) => {
	return ({ source, commit }) => {
		const target = source?.element ?? source?.self ?? source;
		if (!target || typeof ResizeObserver == "undefined") return;
		const observer = new ResizeObserver((entries) => commit(entries));
		observer.observe(target, { box });
		return () => observer.disconnect();
	};
};
var makeLinker = (options) => {
	const source = typeof options.source == "function" ? options.source() : options.source;
	const defaultForProp = options.forProp ?? "value";
	const linker = {
		source,
		ref: options.ref,
		forProp: defaultForProp,
		get(event, forProp = defaultForProp) {
			return options.getter?.({
				source,
				ref: linker.ref,
				linker,
				forProp,
				event,
				reason: event ? "source" : "manual"
			});
		},
		set(value, event, forProp = defaultForProp) {
			return options.setter?.(value, {
				source,
				ref: linker.ref,
				linker,
				forProp,
				event,
				reason: "ref"
			});
		},
		store(value, event, forProp = defaultForProp) {
			const ctx = {
				source,
				ref: linker.ref,
				linker,
				forProp,
				event,
				reason: "source"
			};
			return options.store ? options.store(value, ctx) : setRefValue(linker.ref, value, forProp);
		},
		trigger(event, forProp = defaultForProp) {
			const value = linker.get(event, forProp);
			return linker.store(value, event, forProp);
		},
		bind() {
			linker.unbind();
			if (options.bindImmediately) linker.trigger();
			const triggerCleanup = cleanupOf(options.trigger?.({
				source,
				ref: linker.ref,
				linker,
				forProp: defaultForProp,
				reason: "initial",
				commit: (event, forProp = defaultForProp) => linker.trigger(event, forProp)
			}));
			const setterCleanup = linker.ref && options.setter ? affected([linker.ref, defaultForProp], (value) => {
				linker.set(value, void 0, defaultForProp);
			}, {
				affectTypes: options.affectTypes ?? ["setter", "manual"],
				triggerImmediately: options.triggerImmediately ?? true
			}) : null;
			linker.__cleanup = () => {
				triggerCleanup?.();
				setterCleanup?.();
			};
			return linker;
		},
		unbind() {
			linker.__cleanup?.();
			linker.__cleanup = null;
		},
		[Symbol.dispose]() {
			linker.unbind();
		},
		__cleanup: null
	};
	return linker;
};
var localStorageLink = (existsStorage, exists, key, initial) => {
	if (key == null) return;
	if (localStorageLinkMap.has(key)) {
		localStorageLinkMap.get(key)?.[0]?.();
		localStorageLinkMap.delete(key);
	}
	return localStorageLinkMap.getOrInsertComputed?.(key, () => {
		const def = (existsStorage ?? localStorage).getItem(key) ?? initial?.value ?? initial;
		const ref = isValueRef(exists) ? exists : stringRef(def);
		ref.value ??= def;
		const $val = new WeakRef(ref);
		const unsb = affected([ref, "value"], (val) => {
			$avoidTrigger($val?.deref?.(), () => {
				(existsStorage ?? localStorage).setItem(key, val);
			});
		});
		const list = (ev) => {
			if (ev.storageArea == (existsStorage ?? localStorage) && ev.key == key) {
				if (isNotEqual(ref.value, ev.newValue)) ref.value = ev.newValue;
			}
		};
		addEventListener("storage", list);
		return [() => {
			unsb?.();
			removeEventListener("storage", list);
		}, ref];
	});
};
var normalizeHash = (hash, withHashCharacter = true) => {
	if (hash == null) return withHashCharacter ? "#" : "";
	if (!withHashCharacter && hash?.startsWith?.("#")) return hash?.replace?.("#", "") || "";
	if (withHashCharacter && !hash?.startsWith?.("#")) return `#${hash || ""}`;
	return (withHashCharacter ? hash?.startsWith?.("#") ? hash : `#${hash || ""}` : hash?.replace?.("#", "")) || "";
};
var hashTargetLink = (_, exists, initial, withHashCharacter = false) => {
	const locationHash = normalizeHash(normalizeHash(location?.hash || "", false) || normalizeHash(initial || "", false) || "", withHashCharacter) || "";
	const ref = isValueRef(exists) ? exists : stringRef(locationHash);
	if (isObject(ref)) ref.value ||= locationHash;
	let processingStateChange = false;
	let nanoThrottle = 0;
	const evf = (ev) => {
		if (getIgnoreNextPopState()) return;
		if (nanoThrottle <= 0) {
			nanoThrottle = 1;
			setTimeout(() => {
				const newValue = normalizeHash(normalizeHash(location?.hash, false) || normalizeHash(ref.value || "", false), withHashCharacter) || "";
				if (normalizeHash(ref.value, false) !== normalizeHash(newValue, false)) {
					if (!processingStateChange) {
						processingStateChange = true;
						ref.value = newValue;
						setTimeout(() => processingStateChange = false, 0);
					}
				}
				nanoThrottle = 0;
			}, 0);
		}
	};
	const $val = new WeakRef(ref);
	const usb = affected([ref, "value"], (val) => {
		const newHash = normalizeHash(normalizeHash($getValue($val?.deref?.()) || val, false) || normalizeHash(location?.hash, false), true);
		if (newHash != location.hash) $avoidTrigger($val?.deref?.(), () => {
			if (!processingStateChange) {
				setIgnoreNextPopState(true);
				history.pushState("", "", newHash || location.hash);
				setTimeout(() => setIgnoreNextPopState(false), 0);
			}
		});
	});
	addEventListener("popstate", evf);
	addEventListener("hashchange", evf);
	return () => {
		usb?.();
		removeEventListener("popstate", evf);
		removeEventListener("hashchange", evf);
	};
};
var matchMediaLink = (existsMedia, exists, condition) => {
	if (condition == null) return;
	const med = existsMedia ?? matchMedia(condition), def = med?.matches || false;
	const ref = isValueRef(exists) ? exists : booleanRef(def);
	ref.value ??= def;
	const evf = (ev) => ref.value = ev.matches;
	med?.addEventListener?.("change", evf);
	return () => {
		med?.removeEventListener?.("change", evf);
	};
};
var visibleLink = (element, exists, initial) => {
	if (element == null) return;
	const def = initial?.value ?? (typeof initial != "object" ? initial : null) ?? element?.getAttribute?.("data-hidden") == null;
	const linker = makeLinker({
		source: element,
		ref: isValueRef(exists) ? exists : booleanRef(!!def),
		getter: ({ event }) => event?.type == "u2-hidden" ? false : true,
		setter: (value, { source }) => handleHidden(source, "data-hidden", value),
		trigger: eventTrigger(["u2-hidden", "u2-appear"], { passive: true })
	}).bind();
	return () => linker.unbind();
};
var attrLink = (element, exists, attribute, initial) => {
	const def = element?.getAttribute?.(attribute) ?? (typeof initial == "boolean" ? initial ? "" : null : getValue(initial));
	if (!element) return;
	const val = isValueRef(exists) ? exists : stringRef(def);
	if (isObject(val) && !normalizePrimitive(val.value)) val.value = normalizePrimitive(def) ?? val.value ?? "";
	const linker = makeLinker({
		source: element,
		ref: val,
		getter: ({ source }) => source?.getAttribute?.(attribute),
		setter: (value, { source }) => handleAttribute(source, attribute, normalizePrimitive(value)),
		trigger: mutationTrigger(attribute)
	}).bind();
	return () => linker.unbind();
};
var datasetKeyOf = (key = "") => key.replace(/^data-/, "").replace(/-([a-z])/g, (_, char) => char.toUpperCase());
var datasetAttributeOf = (key) => `data-${datasetKeyOf(key).replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`)}`;
/**
* Bidirectionally link a reactive ref to one `data-*` entry.
* Dataset writes flow through `handleDataset`; external attribute mutations
* commit back through the normal Linker lifecycle.
*/
var datasetLink = (element, exists, key = "", initial) => {
	if (!element || !key) return;
	const datasetKey = datasetKeyOf(key);
	const attribute = datasetAttributeOf(datasetKey);
	const def = element?.dataset?.[datasetKey] ?? getValue(initial) ?? "";
	const val = isValueRef(exists) ? exists : stringRef(def);
	if (isObject(val) && val.value == null) val.value = def;
	const linker = makeLinker({
		source: element,
		ref: val,
		getter: ({ source }) => source?.dataset?.[datasetKey] ?? "",
		setter: (value, { source }) => handleDataset(source, datasetKey, normalizePrimitive(value)),
		trigger: mutationTrigger(attribute)
	}).bind();
	return () => linker.unbind();
};
/**
* One-way explicit binding for an inline CSS property or custom property.
* Reverse style-attribute observation is intentionally deferred: style is a
* shared write surface where one mutation can contain unrelated properties.
*/
var stylePropLink = (element, exists, property = "", initial) => {
	if (!element || !property) return;
	const def = element?.style?.getPropertyValue?.(property) ?? getValue(initial) ?? "";
	const val = isValueRef(exists) ? exists : stringRef(def);
	if (isObject(val) && val.value == null) val.value = def;
	const linker = makeLinker({
		source: element,
		ref: val,
		setter: (value, { source }) => handleStyleChange(source, property, value)
	}).bind();
	return () => linker.unbind();
};
/** Alias for `stylePropLink` that documents a `--custom-property` binding. */
var cssVarLink = stylePropLink;
var sizeLink = (element, exists, axis, box) => {
	const def = box == "border-box" ? element?.[axis == "inline" ? "offsetWidth" : "offsetHeight"] : element?.[axis == "inline" ? "clientWidth" : "clientHeight"] - getPadding(element, axis);
	const val = isValueRef(exists) ? exists : numberRef(def);
	if (isObject(val)) val.value ||= (def ?? val.value) || 1;
	const obs = new ResizeObserver((entries) => {
		if (isObject(val)) {
			if (box == "border-box") val.value = axis == "inline" ? entries[0].borderBoxSize[0].inlineSize : entries[0].borderBoxSize[0].blockSize;
			if (box == "content-box") val.value = axis == "inline" ? entries[0].contentBoxSize[0].inlineSize : entries[0].contentBoxSize[0].blockSize;
			if (box == "device-pixel-content-box") val.value = axis == "inline" ? entries[0].devicePixelContentBoxSize[0].inlineSize : entries[0].devicePixelContentBoxSize[0].blockSize;
		}
	});
	if ((element?.element ?? element?.self ?? element) instanceof HTMLElement) obs?.observe?.(element?.element ?? element?.self ?? element, { box });
	return () => obs?.disconnect?.();
};
var scrollLink = (element, exists, axis, initial) => {
	if (initial != null && typeof (initial?.value ?? initial) == "number") element?.scrollTo?.({ [axis == "block" ? "top" : "left"]: initial?.value ?? initial });
	const def = element?.[axis == "block" ? "scrollTop" : "scrollLeft"];
	const val = isValueRef(exists) ? exists : numberRef(def || 0);
	if (isObject(val)) val.value ||= (def ?? val.value) || 1;
	val.value ||= (def ?? val.value) || 0;
	const prop = axis == "block" ? "scrollTop" : "scrollLeft";
	const scrollProp = axis == "block" ? "top" : "left";
	const linker = makeLinker({
		source: element,
		ref: val,
		getter: ({ source }) => source?.[prop] || 0,
		setter: (value, { source }) => {
			if (Math.abs((source?.[prop] || 0) - Number(value || 0)) > .001) source?.scrollTo?.({ [scrollProp]: Number(value || 0) });
		},
		trigger: eventTrigger("scroll", { passive: true })
	}).bind();
	return () => linker.unbind();
};
var checkedLink = (element, exists) => {
	const def = !!element?.checked || false;
	const val = isValueRef(exists) ? exists : booleanRef(def);
	if (isObject(val) && val.value !== def) val.value = def;
	const linker = makeLinker({
		source: (element?.type == "radio" ? element?.closest?.("input[type='radio']") : element) ?? element,
		ref: val,
		getter: ({ source, event }) => selectSourceInput(source, event, `input[type="checkbox"], input:checked`)?.checked ?? element?.checked ?? val?.value,
		setter: (value) => {
			if (element && element?.checked != value) setChecked(element, value);
		},
		trigger: eventTrigger([
			"click",
			"input",
			"change"
		])
	}).bind();
	return () => linker.unbind();
};
var radioValueLink = (element, exists, name, initial) => {
	if (isPrimitive(element)) return;
	if (!element || !(element instanceof Node || element?.element instanceof Node)) return;
	const radioName = radioNameOf(element, name);
	const def = radioCheckedIn(element, radioName)?.value ?? getValue(initial) ?? "";
	const val = isValueRef(exists) ? exists : stringRef(def);
	if (isObject(val) && !normalizePrimitive(val.value)) val.value = normalizePrimitive(def) ?? val.value ?? "";
	if (isObject(val) && isNotEqual(val.value, def)) val.value = def;
	const linker = makeLinker({
		source: element,
		ref: val,
		getter: ({ source, event }) => {
			const target = event?.target;
			if (target?.matches?.(radioSelectorOf(radioName)) && target?.checked) return target.value;
			return radioCheckedIn(source, radioName)?.value ?? val?.value ?? "";
		},
		setter: (value, { source }) => {
			const radio = radioByValueIn(source, $getValue(value), radioName);
			if (radio && !radio.checked) {
				setChecked(radio, true);
				radio.dispatchEvent?.(new Event("change", { bubbles: true }));
			}
		},
		trigger: eventTrigger([
			"click",
			"input",
			"change"
		])
	}).bind();
	return () => linker.unbind();
};
var valueLink = (element, exists) => {
	if (isPrimitive(element)) return;
	if (!element || !(element instanceof Node || element?.element instanceof Node)) return;
	const def = element?.value ?? "";
	const val = isValueRef(exists) ? exists : stringRef(def);
	if (isObject(val) && !normalizePrimitive(val.value)) val.value = normalizePrimitive(def) ?? val.value ?? "";
	const linker = makeLinker({
		source: element,
		ref: val,
		getter: ({ source, event }) => selectSourceInput(source, event)?.value ?? source?.value ?? val?.value ?? "",
		setter: (value, { source }) => {
			const next = $getValue(value);
			if (source && isNotEqual(source?.value, next)) {
				source.value = next ?? "";
				source?.dispatchEvent?.(new Event("change", { bubbles: true }));
			}
		},
		trigger: eventTrigger([
			"click",
			"input",
			"change"
		])
	}).bind();
	return () => linker.unbind();
};
/**
* Two-way value binding specialized for `<select>` controls.
* Unlike `valueLink`, source updates are driven only by `change`.
*/
var selectLink = (element, exists, initial) => {
	if (isPrimitive(element)) return;
	if (!element || !(element instanceof Node || element?.element instanceof Node)) return;
	const def = element?.value ?? getValue(initial) ?? "";
	const val = isValueRef(exists) ? exists : stringRef(def);
	if (isObject(val) && val.value == null) val.value = def;
	const linker = makeLinker({
		source: element,
		ref: val,
		getter: ({ source }) => source?.value ?? "",
		setter: (value, { source }) => {
			const next = $getValue(value) ?? "";
			if (source && isNotEqual(source.value, next)) source.value = next;
		},
		trigger: eventTrigger("change")
	}).bind();
	return () => linker.unbind();
};
/**
* Select a canonical Linker preset for common form control families.
* This is additive: the existing specialized links remain public APIs.
*/
var formLink = (element, exists, kind = "text", options = {}) => {
	switch (kind) {
		case "number": return valueAsNumberLink(element, exists);
		case "checked": return checkedLink(element, exists);
		case "radio": return radioValueLink(element, exists, options.name, options.initial);
		case "select": return selectLink(element, exists, options.initial);
		default: return valueLink(element, exists);
	}
};
var valueAsNumberLink = (element, exists) => {
	if (isPrimitive(element)) return;
	if (!element || !(element instanceof Node || element?.element instanceof Node)) return;
	const def = Number(element?.valueAsNumber) || 0;
	const val = isValueRef(exists) ? exists : numberRef(def);
	if (isObject(val) && !val.value && def) val.value = def;
	const linker = makeLinker({
		source: element,
		ref: val,
		getter: ({ source, event }) => Number(selectSourceInput(source, event)?.valueAsNumber || source?.valueAsNumber || 0) || 0,
		setter: (value, { source }) => {
			if (source && (source.type == "range" || source.type == "number") && typeof source?.valueAsNumber == "number" && isNotEqual(source?.valueAsNumber, value)) {
				source.valueAsNumber = Number(value);
				source?.dispatchEvent?.(new Event("change", { bubbles: true }));
			}
		},
		trigger: eventTrigger([
			"click",
			"input",
			"change"
		])
	}).bind();
	return () => linker.unbind();
};
var observeSizeLink = (element, exists, box, styles) => {
	if (isPrimitive(element)) return;
	if (!element || !(element instanceof Node || element?.element instanceof Node)) return;
	if (!styles) styles = isValueRef(exists) ? exists : observe({});
	let obs = null;
	(obs = new ResizeObserver((mut) => {
		if (box == "border-box") {
			styles.inlineSize = `${mut[0].borderBoxSize[0].inlineSize}px`;
			styles.blockSize = `${mut[0].borderBoxSize[0].blockSize}px`;
		}
		if (box == "content-box") {
			styles.inlineSize = `${mut[0].contentBoxSize[0].inlineSize}px`;
			styles.blockSize = `${mut[0].contentBoxSize[0].blockSize}px`;
		}
		if (box == "device-pixel-content-box") {
			styles.inlineSize = `${mut[0].devicePixelContentBoxSize[0].inlineSize}px`;
			styles.blockSize = `${mut[0].devicePixelContentBoxSize[0].blockSize}px`;
		}
	})).observe(element?.element ?? element?.self ?? element, { box });
	return () => {
		obs?.disconnect?.();
	};
};
var refCtl = (value) => {
	if (isPrimitive(value)) return value;
	return ref(value);
};
var orientLink = (host, exists) => {
	const orient = orientationNumberMap?.[getCorrectOrientation()] || 0;
	const def = Number(orient) || 0;
	const val = isValueRef(exists) ? exists : numberRef(def);
	if (hasValue(val)) val.value = def;
	return whenAnyScreenChanges(() => {
		val.value = orientationNumberMap?.[getCorrectOrientation()] || 0;
	});
};
var pointerEventLink = (element, event = "click", pointerId = 0, coordType = "client", exists) => {
	if (isPrimitive(element)) return;
	if (!element || !(element instanceof Node || element?.element instanceof Node)) return;
	const x = numberRef(0);
	const y = numberRef(0);
	const p = numberRef(pointerId || 0);
	if (exists) {
		Object.defineProperty(exists, "x", {
			get: () => x.value,
			set: (value) => x.value = value,
			enumerable: true
		});
		Object.defineProperty(exists, "y", {
			get: () => y.value,
			set: (value) => y.value = value,
			enumerable: true
		});
		Object.defineProperty(exists, "pointerId", {
			get: () => p.value,
			set: (value) => p.value = value,
			enumerable: true
		});
	} else exists ??= observe({
		get x() {
			return x.value;
		},
		get y() {
			return y.value;
		},
		set x(value) {
			x.value = value;
		},
		set y(value) {
			y.value = value;
		},
		set pointerId(value) {
			p.value = value;
		},
		get pointerId() {
			return p.value;
		}
	});
	const unb = addEvent(element, event || "click", (ev) => {
		if (ev?.pointerId == (pointerId || 0)) {
			x.value = ev[(coordType || "client") + "X"];
			y.value = ev[(coordType || "client") + "Y"];
			p.value = ev.pointerId;
		}
		return true;
	});
	return () => {
		unb?.();
		x?.();
		y?.();
		p?.();
	};
};
//#endregion
//#region ../../modules/projects/lur.e/src/utils/math/Point2D.ts
var Vector2D = class Vector2D {
	_x;
	_y;
	constructor(x = 0, y = 0) {
		this._x = typeof x === "number" ? numberRef(x) : x;
		this._y = typeof y === "number" ? numberRef(y) : y;
	}
	get x() {
		return this._x;
	}
	set x(value) {
		if (typeof value === "number") this._x.value = value;
		else this._x = value;
	}
	get y() {
		return this._y;
	}
	set y(value) {
		if (typeof value === "number") this._y.value = value;
		else this._y = value;
	}
	get 0() {
		return this._x;
	}
	get 1() {
		return this._y;
	}
	toArray() {
		return [this._x, this._y];
	}
	clone() {
		return new Vector2D(this._x.value, this._y.value);
	}
	set(x, y) {
		this._x.value = x;
		this._y.value = y;
		return this;
	}
	copy(v) {
		this._x.value = v.x.value;
		this._y.value = v.y.value;
		return this;
	}
	add(v) {
		return new Vector2D(this._x.value + v.x.value, this._y.value + v.y.value);
	}
	subtract(v) {
		return new Vector2D(this._x.value - v.x.value, this._y.value - v.y.value);
	}
	multiply(scalar) {
		return new Vector2D(this._x.value * scalar, this._y.value * scalar);
	}
	divide(scalar) {
		if (scalar === 0) throw new Error("Division by zero");
		return new Vector2D(this._x.value / scalar, this._y.value / scalar);
	}
	dot(v) {
		return this._x.value * v.x.value + this._y.value * v.y.value;
	}
	cross(v) {
		return this._x.value * v.y.value - this._y.value * v.x.value;
	}
	magnitude() {
		return Math.sqrt(this._x.value * this._x.value + this._y.value * this._y.value);
	}
	magnitudeSquared() {
		return this._x.value * this._x.value + this._y.value * this._y.value;
	}
	distanceTo(v) {
		const dx = this._x.value - v.x.value;
		const dy = this._y.value - v.y.value;
		return Math.sqrt(dx * dx + dy * dy);
	}
	distanceToSquared(v) {
		const dx = this._x.value - v.x.value;
		const dy = this._y.value - v.y.value;
		return dx * dx + dy * dy;
	}
	normalize() {
		const mag = this.magnitude();
		if (mag === 0) return new Vector2D(0, 0);
		return new Vector2D(this._x.value / mag, this._y.value / mag);
	}
	equals(v, tolerance = 1e-6) {
		return Math.abs(this._x.value - v.x.value) < tolerance && Math.abs(this._y.value - v.y.value) < tolerance;
	}
	lerp(v, t) {
		const clampedT = Math.max(0, Math.min(1, t));
		return new Vector2D(this._x.value + (v.x.value - this._x.value) * clampedT, this._y.value + (v.y.value - this._y.value) * clampedT);
	}
	angleTo(v) {
		const dot = this.dot(v);
		const det = this.cross(v);
		return Math.atan2(det, dot);
	}
	rotate(angle) {
		const cos = Math.cos(angle);
		const sin = Math.sin(angle);
		return new Vector2D(this._x.value * cos - this._y.value * sin, this._x.value * sin + this._y.value * cos);
	}
	projectOnto(v) {
		const scalar = this.dot(v) / v.magnitudeSquared();
		return v.multiply(scalar);
	}
	reflect(normal) {
		const normalizedNormal = normal.normalize();
		const dotProduct = this.dot(normalizedNormal);
		return this.subtract(normalizedNormal.multiply(2 * dotProduct));
	}
	clamp(min, max) {
		return new Vector2D(Math.max(min.x.value, Math.min(max.x.value, this._x.value)), Math.max(min.y.value, Math.min(max.y.value, this._y.value)));
	}
	min() {
		return Math.min(this._x.value, this._y.value);
	}
	max() {
		return Math.max(this._x.value, this._y.value);
	}
	static zero() {
		return new Vector2D(0, 0);
	}
	static one() {
		return new Vector2D(1, 1);
	}
	static unitX() {
		return new Vector2D(1, 0);
	}
	static unitY() {
		return new Vector2D(0, 1);
	}
	static fromAngle(angle, length = 1) {
		return new Vector2D(Math.cos(angle) * length, Math.sin(angle) * length);
	}
	static fromPolar(angle, radius) {
		return Vector2D.fromAngle(angle, radius);
	}
};
var vector2Ref = (x = 0, y = 0) => {
	return new Vector2D(x, y);
};
var Matrix2D = class Matrix2D {
	_elements;
	constructor(a = 1, b = 0, c = 0, d = 1) {
		this._elements = [
			typeof a === "number" ? numberRef(a) : a,
			typeof b === "number" ? numberRef(b) : b,
			typeof c === "number" ? numberRef(c) : c,
			typeof d === "number" ? numberRef(d) : d
		];
	}
	get elements() {
		return this._elements;
	}
	get m00() {
		return this._elements[0];
	}
	get m01() {
		return this._elements[1];
	}
	get m10() {
		return this._elements[2];
	}
	get m11() {
		return this._elements[3];
	}
	set m00(value) {
		if (typeof value === "number") this._elements[0].value = value;
		else this._elements[0] = value;
	}
	set m01(value) {
		if (typeof value === "number") this._elements[1].value = value;
		else this._elements[1] = value;
	}
	set m10(value) {
		if (typeof value === "number") this._elements[2].value = value;
		else this._elements[2] = value;
	}
	set m11(value) {
		if (typeof value === "number") this._elements[3].value = value;
		else this._elements[3] = value;
	}
	get 0() {
		return this._elements[0];
	}
	get 1() {
		return this._elements[1];
	}
	get 2() {
		return this._elements[2];
	}
	get 3() {
		return this._elements[3];
	}
	toArray() {
		return [...this._elements];
	}
	clone() {
		return new Matrix2D(this._elements[0].value, this._elements[1].value, this._elements[2].value, this._elements[3].value);
	}
	set(a, b, c, d) {
		this._elements[0].value = a;
		this._elements[1].value = b;
		this._elements[2].value = c;
		this._elements[3].value = d;
		return this;
	}
	identity() {
		return this.set(1, 0, 0, 1);
	}
	copy(m) {
		this._elements[0].value = m.elements[0].value;
		this._elements[1].value = m.elements[1].value;
		this._elements[2].value = m.elements[2].value;
		this._elements[3].value = m.elements[3].value;
		return this;
	}
	multiply(m) {
		const a = this._elements[0].value, b = this._elements[1].value;
		const c = this._elements[2].value, d = this._elements[3].value;
		const e = m.elements[0].value, f = m.elements[1].value;
		const g = m.elements[2].value, h = m.elements[3].value;
		return new Matrix2D(a * e + b * g, a * f + b * h, c * e + d * g, c * f + d * h);
	}
	multiplyScalar(s) {
		return new Matrix2D(this._elements[0].value * s, this._elements[1].value * s, this._elements[2].value * s, this._elements[3].value * s);
	}
	transformVector(v) {
		return new Vector2D(this._elements[0].value * v.x.value + this._elements[1].value * v.y.value, this._elements[2].value * v.x.value + this._elements[3].value * v.y.value);
	}
	determinant() {
		return this._elements[0].value * this._elements[3].value - this._elements[1].value * this._elements[2].value;
	}
	inverse() {
		const det = this.determinant();
		if (det === 0) return null;
		const invDet = 1 / det;
		return new Matrix2D(this._elements[3].value * invDet, -this._elements[1].value * invDet, -this._elements[2].value * invDet, this._elements[0].value * invDet);
	}
	transpose() {
		return new Matrix2D(this._elements[0].value, this._elements[2].value, this._elements[1].value, this._elements[3].value);
	}
	equals(m, tolerance = 1e-6) {
		for (let i = 0; i < 4; i++) if (Math.abs(this._elements[i].value - m.elements[i].value) > tolerance) return false;
		return true;
	}
	static rotation(angle) {
		const cos = Math.cos(angle);
		const sin = Math.sin(angle);
		return new Matrix2D(cos, -sin, sin, cos);
	}
	static scale(sx, sy = sx) {
		return new Matrix2D(sx, 0, 0, sy);
	}
	static shear(sx, sy) {
		return new Matrix2D(1, sx, sy, 1);
	}
};
var matrix2x2Ref = (a = 1, b = 0, c = 0, d = 1) => {
	return new Matrix2D(a, b, c, d);
};
//#endregion
//#region ../../modules/projects/lur.e/src/utils/math/Point3D.ts
var Vector3D = class Vector3D {
	_x;
	_y;
	_z;
	constructor(x = 0, y = 0, z = 0) {
		this._x = typeof x === "number" ? numberRef(x) : x;
		this._y = typeof y === "number" ? numberRef(y) : y;
		this._z = typeof z === "number" ? numberRef(z) : z;
	}
	get x() {
		return this._x;
	}
	set x(value) {
		if (typeof value === "number") this._x.value = value;
		else this._x = value;
	}
	get y() {
		return this._y;
	}
	set y(value) {
		if (typeof value === "number") this._y.value = value;
		else this._y = value;
	}
	get z() {
		return this._z;
	}
	set z(value) {
		if (typeof value === "number") this._z.value = value;
		else this._z = value;
	}
	get 0() {
		return this._x;
	}
	get 1() {
		return this._y;
	}
	get 2() {
		return this._z;
	}
	toArray() {
		return [
			this._x,
			this._y,
			this._z
		];
	}
	clone() {
		return new Vector3D(this._x.value, this._y.value, this._z.value);
	}
	set(x, y, z) {
		this._x.value = x;
		this._y.value = y;
		this._z.value = z;
		return this;
	}
	copy(v) {
		this._x.value = v.x.value;
		this._y.value = v.y.value;
		this._z.value = v.z.value;
		return this;
	}
};
var vector3Ref = (x = 0, y = 0, z = 0) => {
	return new Vector3D(x, y, z);
};
var Matrix3D = class Matrix3D {
	_elements;
	constructor(a = 1, b = 0, c = 0, d = 0, e = 1, f = 0, g = 0, h = 0, i = 1) {
		this._elements = [
			typeof a === "number" ? numberRef(a) : a,
			typeof b === "number" ? numberRef(b) : b,
			typeof c === "number" ? numberRef(c) : c,
			typeof d === "number" ? numberRef(d) : d,
			typeof e === "number" ? numberRef(e) : e,
			typeof f === "number" ? numberRef(f) : f,
			typeof g === "number" ? numberRef(g) : g,
			typeof h === "number" ? numberRef(h) : h,
			typeof i === "number" ? numberRef(i) : i
		];
	}
	get elements() {
		return this._elements;
	}
	get m00() {
		return this._elements[0];
	}
	get m01() {
		return this._elements[1];
	}
	get m02() {
		return this._elements[2];
	}
	get m10() {
		return this._elements[3];
	}
	get m11() {
		return this._elements[4];
	}
	get m12() {
		return this._elements[5];
	}
	get m20() {
		return this._elements[6];
	}
	get m21() {
		return this._elements[7];
	}
	get m22() {
		return this._elements[8];
	}
	set m00(value) {
		if (typeof value === "number") this._elements[0].value = value;
		else this._elements[0] = value;
	}
	set m01(value) {
		if (typeof value === "number") this._elements[1].value = value;
		else this._elements[1] = value;
	}
	set m02(value) {
		if (typeof value === "number") this._elements[2].value = value;
		else this._elements[2] = value;
	}
	set m10(value) {
		if (typeof value === "number") this._elements[3].value = value;
		else this._elements[3] = value;
	}
	set m11(value) {
		if (typeof value === "number") this._elements[4].value = value;
		else this._elements[4] = value;
	}
	set m12(value) {
		if (typeof value === "number") this._elements[5].value = value;
		else this._elements[5] = value;
	}
	set m20(value) {
		if (typeof value === "number") this._elements[6].value = value;
		else this._elements[6] = value;
	}
	set m21(value) {
		if (typeof value === "number") this._elements[7].value = value;
		else this._elements[7] = value;
	}
	set m22(value) {
		if (typeof value === "number") this._elements[8].value = value;
		else this._elements[8] = value;
	}
	get 0() {
		return this._elements[0];
	}
	get 1() {
		return this._elements[1];
	}
	get 2() {
		return this._elements[2];
	}
	get 3() {
		return this._elements[3];
	}
	get 4() {
		return this._elements[4];
	}
	get 5() {
		return this._elements[5];
	}
	get 6() {
		return this._elements[6];
	}
	get 7() {
		return this._elements[7];
	}
	get 8() {
		return this._elements[8];
	}
	toArray() {
		return [...this._elements];
	}
	clone() {
		return new Matrix3D(this._elements[0].value, this._elements[1].value, this._elements[2].value, this._elements[3].value, this._elements[4].value, this._elements[5].value, this._elements[6].value, this._elements[7].value, this._elements[8].value);
	}
	set(a, b, c, d, e, f, g, h, i) {
		this._elements[0].value = a;
		this._elements[1].value = b;
		this._elements[2].value = c;
		this._elements[3].value = d;
		this._elements[4].value = e;
		this._elements[5].value = f;
		this._elements[6].value = g;
		this._elements[7].value = h;
		this._elements[8].value = i;
		return this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
	}
	copy(m) {
		for (let i = 0; i < 9; i++) this._elements[i].value = m.elements[i].value;
		return this;
	}
};
var matrix3x3Ref = (a = 1, b = 0, c = 0, d = 0, e = 1, f = 0, g = 0, h = 0, i = 1) => {
	return new Matrix3D(a, b, c, d, e, f, g, h, i);
};
//#endregion
//#region ../../modules/projects/lur.e/src/utils/math/Point4D.ts
var Vector4D = class Vector4D {
	_x;
	_y;
	_z;
	_w;
	constructor(x = 0, y = 0, z = 0, w = 1) {
		this._x = typeof x === "number" ? numberRef(x) : x;
		this._y = typeof y === "number" ? numberRef(y) : y;
		this._z = typeof z === "number" ? numberRef(z) : z;
		this._w = typeof w === "number" ? numberRef(w) : w;
	}
	get x() {
		return this._x;
	}
	set x(value) {
		if (typeof value === "number") this._x.value = value;
		else this._x = value;
	}
	get y() {
		return this._y;
	}
	set y(value) {
		if (typeof value === "number") this._y.value = value;
		else this._y = value;
	}
	get z() {
		return this._z;
	}
	set z(value) {
		if (typeof value === "number") this._z.value = value;
		else this._z = value;
	}
	get w() {
		return this._w;
	}
	set w(value) {
		if (typeof value === "number") this._w.value = value;
		else this._w = value;
	}
	get 0() {
		return this._x;
	}
	get 1() {
		return this._y;
	}
	get 2() {
		return this._z;
	}
	get 3() {
		return this._w;
	}
	toArray() {
		return [
			this._x,
			this._y,
			this._z,
			this._w
		];
	}
	clone() {
		return new Vector4D(this._x.value, this._y.value, this._z.value, this._w.value);
	}
	set(x, y, z, w = 1) {
		this._x.value = x;
		this._y.value = y;
		this._z.value = z;
		this._w.value = w;
		return this;
	}
	copy(v) {
		this._x.value = v.x.value;
		this._y.value = v.y.value;
		this._z.value = v.z.value;
		this._w.value = v.w.value;
		return this;
	}
};
var vector4Ref = (x = 0, y = 0, z = 0, w = 1) => {
	return new Vector4D(x, y, z, w);
};
var Matrix4D = class Matrix4D {
	_elements;
	constructor(a = 1, b = 0, c = 0, d = 0, e = 0, f = 1, g = 0, h = 0, i = 0, j = 0, k = 1, l = 0, m = 0, n = 0, o = 0, p = 1) {
		this._elements = [
			typeof a === "number" ? numberRef(a) : a,
			typeof b === "number" ? numberRef(b) : b,
			typeof c === "number" ? numberRef(c) : c,
			typeof d === "number" ? numberRef(d) : d,
			typeof e === "number" ? numberRef(e) : e,
			typeof f === "number" ? numberRef(f) : f,
			typeof g === "number" ? numberRef(g) : g,
			typeof h === "number" ? numberRef(h) : h,
			typeof i === "number" ? numberRef(i) : i,
			typeof j === "number" ? numberRef(j) : j,
			typeof k === "number" ? numberRef(k) : k,
			typeof l === "number" ? numberRef(l) : l,
			typeof m === "number" ? numberRef(m) : m,
			typeof n === "number" ? numberRef(n) : n,
			typeof o === "number" ? numberRef(o) : o,
			typeof p === "number" ? numberRef(p) : p
		];
	}
	get elements() {
		return this._elements;
	}
	get m00() {
		return this._elements[0];
	}
	get m01() {
		return this._elements[1];
	}
	get m02() {
		return this._elements[2];
	}
	get m03() {
		return this._elements[3];
	}
	get m10() {
		return this._elements[4];
	}
	get m11() {
		return this._elements[5];
	}
	get m12() {
		return this._elements[6];
	}
	get m13() {
		return this._elements[7];
	}
	get m20() {
		return this._elements[8];
	}
	get m21() {
		return this._elements[9];
	}
	get m22() {
		return this._elements[10];
	}
	get m23() {
		return this._elements[11];
	}
	get m30() {
		return this._elements[12];
	}
	get m31() {
		return this._elements[13];
	}
	get m32() {
		return this._elements[14];
	}
	get m33() {
		return this._elements[15];
	}
	set m00(value) {
		if (typeof value === "number") this._elements[0].value = value;
		else this._elements[0] = value;
	}
	set m01(value) {
		if (typeof value === "number") this._elements[1].value = value;
		else this._elements[1] = value;
	}
	set m02(value) {
		if (typeof value === "number") this._elements[2].value = value;
		else this._elements[2] = value;
	}
	set m03(value) {
		if (typeof value === "number") this._elements[3].value = value;
		else this._elements[3] = value;
	}
	set m10(value) {
		if (typeof value === "number") this._elements[4].value = value;
		else this._elements[4] = value;
	}
	set m11(value) {
		if (typeof value === "number") this._elements[5].value = value;
		else this._elements[5] = value;
	}
	set m12(value) {
		if (typeof value === "number") this._elements[6].value = value;
		else this._elements[6] = value;
	}
	set m13(value) {
		if (typeof value === "number") this._elements[7].value = value;
		else this._elements[7] = value;
	}
	set m20(value) {
		if (typeof value === "number") this._elements[8].value = value;
		else this._elements[8] = value;
	}
	set m21(value) {
		if (typeof value === "number") this._elements[9].value = value;
		else this._elements[9] = value;
	}
	set m22(value) {
		if (typeof value === "number") this._elements[10].value = value;
		else this._elements[10] = value;
	}
	set m23(value) {
		if (typeof value === "number") this._elements[11].value = value;
		else this._elements[11] = value;
	}
	set m30(value) {
		if (typeof value === "number") this._elements[12].value = value;
		else this._elements[12] = value;
	}
	set m31(value) {
		if (typeof value === "number") this._elements[13].value = value;
		else this._elements[13] = value;
	}
	set m32(value) {
		if (typeof value === "number") this._elements[14].value = value;
		else this._elements[14] = value;
	}
	set m33(value) {
		if (typeof value === "number") this._elements[15].value = value;
		else this._elements[15] = value;
	}
	get 0() {
		return this._elements[0];
	}
	get 1() {
		return this._elements[1];
	}
	get 2() {
		return this._elements[2];
	}
	get 3() {
		return this._elements[3];
	}
	get 4() {
		return this._elements[4];
	}
	get 5() {
		return this._elements[5];
	}
	get 6() {
		return this._elements[6];
	}
	get 7() {
		return this._elements[7];
	}
	get 8() {
		return this._elements[8];
	}
	get 9() {
		return this._elements[9];
	}
	get 10() {
		return this._elements[10];
	}
	get 11() {
		return this._elements[11];
	}
	get 12() {
		return this._elements[12];
	}
	get 13() {
		return this._elements[13];
	}
	get 14() {
		return this._elements[14];
	}
	get 15() {
		return this._elements[15];
	}
	toArray() {
		return [...this._elements];
	}
	clone() {
		return new Matrix4D(this._elements[0].value, this._elements[1].value, this._elements[2].value, this._elements[3].value, this._elements[4].value, this._elements[5].value, this._elements[6].value, this._elements[7].value, this._elements[8].value, this._elements[9].value, this._elements[10].value, this._elements[11].value, this._elements[12].value, this._elements[13].value, this._elements[14].value, this._elements[15].value);
	}
	set(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
		this._elements[0].value = a;
		this._elements[1].value = b;
		this._elements[2].value = c;
		this._elements[3].value = d;
		this._elements[4].value = e;
		this._elements[5].value = f;
		this._elements[6].value = g;
		this._elements[7].value = h;
		this._elements[8].value = i;
		this._elements[9].value = j;
		this._elements[10].value = k;
		this._elements[11].value = l;
		this._elements[12].value = m;
		this._elements[13].value = n;
		this._elements[14].value = o;
		this._elements[15].value = p;
		return this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	copy(m) {
		for (let i = 0; i < 16; i++) this._elements[i].value = m.elements[i].value;
		return this;
	}
};
var matrix4x4Ref = (a = 1, b = 0, c = 0, d = 0, e = 0, f = 1, g = 0, h = 0, i = 0, j = 0, k = 1, l = 0, m = 0, n = 0, o = 0, p = 1) => {
	return new Matrix4D(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p);
};
//#endregion
//#region ../../modules/projects/lur.e/src/utils/math/Operations.ts
var vectorFromArray = (arr) => {
	switch (arr.length) {
		case 2: return new Vector2D(arr[0], arr[1]);
		case 3: return new Vector3D(arr[0], arr[1], arr[2]);
		case 4: return new Vector4D(arr[0], arr[1], arr[2], arr[3]);
		default: throw new Error(`Unsupported vector dimension: ${arr.length}`);
	}
};
var vectorToArray = (vec) => {
	if (vec instanceof Vector2D) return [vec.x, vec.y];
	if (vec instanceof Vector3D) return [
		vec.x,
		vec.y,
		vec.z
	];
	if (vec instanceof Vector4D) return [
		vec.x,
		vec.y,
		vec.z,
		vec.w
	];
	throw new Error("Unsupported vector type");
};
var translate2D = (vec, tx, ty) => {
	return addVector2D(vec, new Vector2D(tx, ty));
};
var scale2D = (vec, sx, sy = sx) => {
	return new Vector2D(operated([vec.x, sx], () => vec.x.value * sx.value), operated([vec.y, sy], () => vec.y.value * sy.value));
};
var rotate2D = (vec, angle) => {
	const cos = operated([angle], () => Math.cos(angle.value));
	const sin = operated([angle], () => Math.sin(angle.value));
	return new Vector2D(operated([
		vec.x,
		vec.y,
		cos,
		sin
	], () => vec.x.value * cos.value - vec.y.value * sin.value), operated([
		vec.x,
		vec.y,
		cos,
		sin
	], () => vec.x.value * sin.value + vec.y.value * cos.value));
};
var createRect2D = (x = 0, y = 0, width = 0, height = 0) => ({
	position: vector2Ref(x, y),
	size: vector2Ref(width, height)
});
var rectCenter = (rect) => {
	return addVector2D(rect.position, multiplyVector2D(rect.size, numberRef(.5)));
};
var rectContainsPoint = (rect, point) => {
	return operated([
		rect.position.x,
		rect.position.y,
		rect.size.x,
		rect.size.y,
		point.x,
		point.y
	], () => {
		const inX = point.x.value >= rect.position.x.value && point.x.value <= rect.position.x.value + rect.size.x.value;
		const inY = point.y.value >= rect.position.y.value && point.y.value <= rect.position.y.value + rect.size.y.value;
		return inX && inY;
	});
};
var rectIntersects = (rectA, rectB) => {
	return operated([
		rectA.position.x,
		rectA.position.y,
		rectA.size.x,
		rectA.size.y,
		rectB.position.x,
		rectB.position.y,
		rectB.size.x,
		rectB.size.y
	], () => {
		const aRight = rectA.position.x.value + rectA.size.x.value;
		const aBottom = rectA.position.y.value + rectA.size.y.value;
		const bRight = rectB.position.x.value + rectB.size.x.value;
		const bBottom = rectB.position.y.value + rectB.size.y.value;
		return !(rectA.position.x.value > bRight || aRight < rectB.position.x.value || rectA.position.y.value > bBottom || aBottom < rectB.position.y.value);
	});
};
var rectUnion = (rectA, rectB) => {
	const minX = operated([rectA.position.x, rectB.position.x], () => Math.min(rectA.position.x.value, rectB.position.x.value));
	const minY = operated([rectA.position.y, rectB.position.y], () => Math.min(rectA.position.y.value, rectB.position.y.value));
	const maxX = operated([
		rectA.position.x,
		rectA.size.x,
		rectB.position.x,
		rectB.size.x
	], () => Math.max(rectA.position.x.value + rectA.size.x.value, rectB.position.x.value + rectB.size.x.value));
	const maxY = operated([
		rectA.position.y,
		rectA.size.y,
		rectB.position.y,
		rectB.size.y
	], () => Math.max(rectA.position.y.value + rectA.size.y.value, rectB.position.y.value + rectB.size.y.value));
	return {
		position: new Vector2D(minX, minY),
		size: new Vector2D(operated([maxX, minX], () => maxX.value - minX.value), operated([maxY, minY], () => maxY.value - minY.value))
	};
};
var clampPointToRect = (point, rect) => {
	return new Vector2D(operated([
		point.x,
		rect.position.x,
		rect.size.x
	], () => Math.max(rect.position.x.value, Math.min(point.x.value, rect.position.x.value + rect.size.x.value))), operated([
		point.y,
		rect.position.y,
		rect.size.y
	], () => Math.max(rect.position.y.value, Math.min(point.y.value, rect.position.y.value + rect.size.y.value))));
};
var pointToRectDistance = (point, rect) => {
	return magnitude2D(subtractVector2D(point, clampPointToRect(point, rect)));
};
var rectArea = (rect) => {
	return operated([rect.size.x, rect.size.y], () => rect.size.x.value * rect.size.y.value);
};
var scaleRectAroundCenter = (rect, scale) => {
	const center = rectCenter(rect);
	const newSize = multiplyVector2D(rect.size, scale);
	return {
		position: subtractVector2D(center, multiplyVector2D(newSize, numberRef(.5))),
		size: newSize
	};
};
var transformRect2D = (rect, transform) => {
	const transformedCorners = [
		rect.position,
		addVector2D(rect.position, new Vector2D(rect.size.x, numberRef(0))),
		addVector2D(rect.position, rect.size),
		addVector2D(rect.position, new Vector2D(numberRef(0), rect.size.y))
	].map(transform);
	return rectUnion({
		position: transformedCorners[0],
		size: vector2Ref(0, 0)
	}, {
		position: transformedCorners[1],
		size: vector2Ref(0, 0)
	});
};
var relativePosition = (child, parent) => {
	return new Vector2D(operated([child.x, parent.position.x], () => child.x.value - parent.position.x.value), operated([child.y, parent.position.y], () => child.y.value - parent.position.y.value));
};
var absolutePosition = (relative, parent) => {
	return addVector2D(relative, parent.position);
};
var constrainRectAspectRatio = (rect, aspectRatio, mode = "fit") => {
	return operated([
		rect.size.x,
		rect.size.y,
		aspectRatio
	], () => {
		const currentRatio = rect.size.x.value / rect.size.y.value;
		const targetRatio = aspectRatio.value;
		let newWidth = rect.size.x.value;
		let newHeight = rect.size.y.value;
		if (mode === "fit") if (currentRatio > targetRatio) newHeight = newWidth / targetRatio;
		else newWidth = newHeight * targetRatio;
		else if (currentRatio > targetRatio) newWidth = newHeight * targetRatio;
		else newHeight = newWidth / targetRatio;
		return {
			position: rect.position,
			size: vector2Ref(newWidth, newHeight)
		};
	});
};
var smoothValueTransition = (current, target, smoothing = numberRef(.1)) => {
	return operated([
		current,
		target,
		smoothing
	], () => {
		const diff = target.value - current.value;
		return current.value + diff * smoothing.value;
	});
};
var sliderThumbPosition = (value, min, max, trackSize) => {
	return operated([
		value,
		min,
		max,
		trackSize
	], () => {
		return (value.value - min.value) / (max.value - min.value) * trackSize.value;
	});
};
var scrollbarMetrics = (contentSize, containerSize, scrollPosition) => {
	const thumbSize = operated([contentSize, containerSize], () => {
		const ratio = containerSize.value / contentSize.value;
		return Math.max(20, ratio * containerSize.value);
	});
	return {
		thumbSize,
		thumbPosition: operated([
			scrollPosition,
			contentSize,
			containerSize,
			thumbSize
		], () => {
			const maxScroll = contentSize.value - containerSize.value;
			return (maxScroll > 0 ? scrollPosition.value / maxScroll : 0) * (containerSize.value - thumbSize.value);
		})
	};
};
var screenToControlValue = (screenPos, controlRect, axis = "x") => {
	const controlStart = axis === "x" ? controlRect.position.x : controlRect.position.y;
	const controlSize = axis === "x" ? controlRect.size.x : controlRect.size.y;
	return operated([
		screenPos,
		controlStart,
		controlSize
	], () => {
		const relativePos = screenPos.value - controlStart.value;
		return Math.max(0, Math.min(1, relativePos / controlSize.value));
	});
};
var easeInOutCubic = (t) => {
	return operated([t], () => {
		const x = t.value;
		return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
	});
};
var easeOutBounce = (t) => {
	return operated([t], () => {
		let x = t.value;
		const n1 = 7.5625;
		const d1 = 2.75;
		if (x < 1 / d1) return n1 * x * x;
		else if (x < 2 / d1) {
			x -= 1.5 / d1;
			return n1 * x * x + .75;
		} else if (x < 2.5 / d1) {
			x -= 2.25 / d1;
			return n1 * x * x + .9375;
		} else {
			x -= 2.625 / d1;
			return n1 * x * x + .984375;
		}
	});
};
var momentumScroll = (velocity, deceleration = numberRef(.95), minVelocity = numberRef(.01)) => {
	return operated([
		velocity,
		deceleration,
		minVelocity
	], () => {
		const newVelocity = velocity.value * deceleration.value;
		return Math.abs(newVelocity) < minVelocity.value ? 0 : newVelocity;
	});
};
var scrollBoundsWithBounce = (scrollPosition, contentSize, containerSize, bounceDistance = numberRef(50)) => {
	return operated([
		scrollPosition,
		contentSize,
		containerSize,
		bounceDistance
	], () => {
		const maxScroll = contentSize.value - containerSize.value;
		if (scrollPosition.value < 0) return -Math.min(bounceDistance.value, Math.abs(scrollPosition.value)) * .3;
		else if (scrollPosition.value > maxScroll) {
			const overScroll = scrollPosition.value - maxScroll;
			return maxScroll + Math.min(bounceDistance.value, overScroll) * .3;
		}
		return scrollPosition.value;
	});
};
var flattenRefs = (input) => {
	const refs = [];
	const traverse = (item) => {
		if (item && typeof item === "object" && "value" in item) refs.push(item);
		else if (Array.isArray(item)) item.forEach(traverse);
		else if (item && typeof item === "object") Object.values(item).forEach(traverse);
	};
	traverse(input);
	return refs;
};
var operated = (args, fn) => {
	const getCurrentValues = () => args.map((arg) => {
		if (arg && typeof arg === "object" && "value" in arg) return arg.value;
		return arg;
	});
	const initialResult = fn(...getCurrentValues());
	if (typeof initialResult === "number") {
		const result = numberRef(initialResult);
		const updateResult = () => {
			result.value = fn(...getCurrentValues());
		};
		flattenRefs(args).forEach((ref) => affected(ref, updateResult));
		return result;
	}
	let currentResult = initialResult;
	const updateResult = () => {
		currentResult = fn(...getCurrentValues());
	};
	flattenRefs(args).forEach((ref) => affected(ref, updateResult));
	return currentResult;
};
var addRef = (a, b) => {
	return operated([a, b], () => a.value + b.value);
};
var subtractRef = (a, b) => {
	return operated([a, b], () => a.value - b.value);
};
var multiplyRef = (a, b) => {
	return operated([a, b], () => a.value * b.value);
};
var divideRef = (a, b) => {
	return operated([a, b], () => a.value / b.value);
};
var modulusRef = (a, b) => {
	return operated([a, b], () => a.value % b.value);
};
var powerRef = (a, b) => {
	return operated([a, b], () => Math.pow(a.value, b.value));
};
var sinRef = (a) => {
	return operated(a, () => Math.sin(a.value));
};
var cosRef = (a) => {
	return operated(a, () => Math.cos(a.value));
};
var tanRef = (a) => {
	return operated(a, () => Math.tan(a.value));
};
var asinRef = (a) => {
	return operated(a, () => Math.asin(a.value));
};
var acosRef = (a) => {
	return operated(a, () => Math.acos(a.value));
};
var atanRef = (a) => {
	return operated(a, () => Math.atan(a.value));
};
var atan2Ref = (a, b) => {
	return operated([a, b], () => Math.atan2(a.value, b.value));
};
var hypotRef = (a, b) => {
	return operated([a, b], () => Math.hypot(a.value, b.value));
};
var squareRootRef = (a) => {
	return operated(a, () => Math.sqrt(a.value));
};
var cubeRootRef = (a) => {
	return operated(a, () => Math.cbrt(a.value));
};
var absoluteRef = (a) => {
	return operated(a, () => Math.abs(a.value));
};
var signRef = (a) => {
	return operated(a, () => Math.sign(a.value));
};
var clampRef = (a, min, max) => {
	return operated([
		a,
		min,
		max
	], () => Math.min(Math.max(a.value, min.value), max.value));
};
var addVector2D = (a, b) => {
	return new Vector2D(operated([a.x, b.x], () => a.x.value + b.x.value), operated([a.y, b.y], () => a.y.value + b.y.value));
};
var subtractVector2D = (a, b) => {
	return new Vector2D(operated([a.x, b.x], () => a.x.value - b.x.value), operated([a.y, b.y], () => a.y.value - b.y.value));
};
var multiplyVector2D = (a, scalar) => {
	return new Vector2D(operated([a.x, scalar], () => a.x.value * scalar.value), operated([a.y, scalar], () => a.y.value * scalar.value));
};
var divideVector2D = (a, scalar) => {
	return new Vector2D(operated([a.x, scalar], () => a.x.value / scalar.value), operated([a.y, scalar], () => a.y.value / scalar.value));
};
var dotProduct2D = (a, b) => {
	return operated([
		a.x,
		a.y,
		b.x,
		b.y
	], () => a.x.value * b.x.value + a.y.value * b.y.value);
};
var magnitude2D = (a) => {
	return operated([a.x, a.y], () => Math.sqrt(a.x.value * a.x.value + a.y.value * a.y.value));
};
var normalize2D = (a) => {
	const mag = magnitude2D(a);
	return new Vector2D(operated([a.x, mag], () => a.x.value / mag.value), operated([a.y, mag], () => a.y.value / mag.value));
};
var addVector3D = (a, b) => {
	return new Vector3D(operated([a.x, b.x], () => a.x.value + b.x.value), operated([a.y, b.y], () => a.y.value + b.y.value), operated([a.z, b.z], () => a.z.value + b.z.value));
};
var subtractVector3D = (a, b) => {
	return new Vector3D(operated([a.x, b.x], () => a.x.value - b.x.value), operated([a.y, b.y], () => a.y.value - b.y.value), operated([a.z, b.z], () => a.z.value - b.z.value));
};
var multiplyVector3D = (a, scalar) => {
	return new Vector3D(operated([a.x, scalar], () => a.x.value * scalar.value), operated([a.y, scalar], () => a.y.value * scalar.value), operated([a.z, scalar], () => a.z.value * scalar.value));
};
var divideVector3D = (a, scalar) => {
	return new Vector3D(operated([a.x, scalar], () => a.x.value / scalar.value), operated([a.y, scalar], () => a.y.value / scalar.value), operated([a.z, scalar], () => a.z.value / scalar.value));
};
var dotProduct3D = (a, b) => {
	return operated([
		a.x,
		a.y,
		a.z,
		b.x,
		b.y,
		b.z
	], () => a.x.value * b.x.value + a.y.value * b.y.value + a.z.value * b.z.value);
};
var crossProduct3D = (a, b) => {
	return new Vector3D(operated([
		a.y,
		a.z,
		b.y,
		b.z
	], () => a.y.value * b.z.value - a.z.value * b.y.value), operated([
		a.z,
		a.x,
		b.z,
		b.x
	], () => a.z.value * b.x.value - a.x.value * b.z.value), operated([
		a.x,
		a.y,
		b.x,
		b.y
	], () => a.x.value * b.y.value - a.y.value * b.x.value));
};
var magnitude3D = (a) => {
	return operated([
		a.x,
		a.y,
		a.z
	], () => Math.sqrt(a.x.value * a.x.value + a.y.value * a.y.value + a.z.value * a.z.value));
};
var normalize3D = (a) => {
	const mag = magnitude3D(a);
	return new Vector3D(operated([a.x, mag], () => a.x.value / mag.value), operated([a.y, mag], () => a.y.value / mag.value), operated([a.z, mag], () => a.z.value / mag.value));
};
var addVector4D = (a, b) => {
	return new Vector4D(operated([a.x, b.x], () => a.x.value + b.x.value), operated([a.y, b.y], () => a.y.value + b.y.value), operated([a.z, b.z], () => a.z.value + b.z.value), operated([a.w, b.w], () => a.w.value + b.w.value));
};
var subtractVector4D = (a, b) => {
	return new Vector4D(operated([a.x, b.x], () => a.x.value - b.x.value), operated([a.y, b.y], () => a.y.value - b.y.value), operated([a.z, b.z], () => a.z.value - b.z.value), operated([a.w, b.w], () => a.w.value - b.w.value));
};
var multiplyVector4D = (a, scalar) => {
	return new Vector4D(operated([a.x, scalar], () => a.x.value * scalar.value), operated([a.y, scalar], () => a.y.value * scalar.value), operated([a.z, scalar], () => a.z.value * scalar.value), operated([a.w, scalar], () => a.w.value * scalar.value));
};
var divideVector4D = (a, scalar) => {
	return new Vector4D(operated([a.x, scalar], () => a.x.value / scalar.value), operated([a.y, scalar], () => a.y.value / scalar.value), operated([a.z, scalar], () => a.z.value / scalar.value), operated([a.w, scalar], () => a.w.value / scalar.value));
};
var dotProduct4D = (a, b) => {
	return operated([
		a.x,
		a.y,
		a.z,
		a.w,
		b.x,
		b.y,
		b.z,
		b.w
	], () => a.x.value * b.x.value + a.y.value * b.y.value + a.z.value * b.z.value + a.w.value * b.w.value);
};
var magnitude4D = (a) => {
	return operated([
		a.x,
		a.y,
		a.z,
		a.w
	], () => Math.sqrt(a.x.value * a.x.value + a.y.value * a.y.value + a.z.value * a.z.value + a.w.value * a.w.value));
};
var normalize4D = (a) => {
	const mag = magnitude4D(a);
	return new Vector4D(operated([a.x, mag], () => a.x.value / mag.value), operated([a.y, mag], () => a.y.value / mag.value), operated([a.z, mag], () => a.z.value / mag.value), operated([a.w, mag], () => a.w.value / mag.value));
};
//#endregion
//#region ../../modules/projects/lur.e/src/lure/core/Refs.ts
var makeRef = (host, type, link, ...args) => {
	if (link == attrLink || link == handleAttribute) {
		const exists = elMap$1?.get?.(host)?.get?.(handleAttribute)?.get?.(args[0])?.[0];
		if (exists) return exists;
	}
	const rf = (type ?? ref)?.(null), result = link?.(host, rf, ...args);
	const linker = result && typeof result == "object" && typeof result?.unbind == "function" ? result : null;
	const targetRef = linker?.ref ?? rf;
	const usub = linker ? () => linker.unbind() : result;
	if (usub && targetRef) addToCallChain(targetRef, Symbol.dispose, usub);
	return targetRef;
};
var orientRef = (host, ...args) => makeRef(host, numberRef, orientLink, ...args);
var attrRef = (host, ...args) => makeRef(host, stringRef, attrLink, ...args);
var datasetRef = (host, ...args) => makeRef(host, stringRef, datasetLink, ...args);
var stylePropRef = (host, ...args) => makeRef(host, stringRef, stylePropLink, ...args);
var cssVarRef = (host, ...args) => makeRef(host, stringRef, cssVarLink, ...args);
var valueRef = (host, ...args) => makeRef(host, stringRef, valueLink, ...args);
var radioValueRef = (host, ...args) => makeRef(host, stringRef, radioValueLink, ...args);
var valueAsNumberRef = (host, ...args) => makeRef(host, numberRef, valueAsNumberLink, ...args);
var localStorageRef = (...args) => {
	if (localStorageLinkMap.has(args[0])) return localStorageLinkMap.get(args[0])?.[1];
	const link = localStorageLink;
	const rf = (stringRef ?? ref)?.(null);
	const [usub, _] = link?.(null, rf, ...args);
	if (usub && rf) addToCallChain(rf, Symbol.dispose, usub);
	return rf;
};
var sizeRef = (host, ...args) => makeRef(host, numberRef, sizeLink, ...args);
var checkedRef = (host, ...args) => makeRef(host, booleanRef, checkedLink, ...args);
var scrollRef = (host, ...args) => makeRef(host, numberRef, scrollLink, ...args);
var visibleRef = (host, ...args) => makeRef(host, booleanRef, visibleLink, ...args);
var matchMediaRef = (...args) => makeRef(null, booleanRef, matchMediaLink, ...args);
var hashTargetRef = (...args) => makeRef(null, stringRef, hashTargetLink, ...args);
var makeWeakRef = (initial, behavior) => {
	const obj = deref$1(initial);
	return isValidObj(obj) ? observe(WRef(obj)) : ref(obj, behavior);
};
var scrollSize = (source, axis = 0, inputChange) => {
	const target = toRef(source);
	const compute = (vl) => deref$1(target)?.[["scrollWidth", "scrollHeight"][axis] || "scrollWidth"] - 1 || 1;
	const scroll = scrollRef(source, ["inline", "block"][axis]);
	const conRef = sizeRef(source, ["inline", "block"][axis], "content-box");
	const percent = computed(scroll, compute);
	const recompute = () => {
		scroll?.[$trigger]?.();
		percent?.[$trigger]?.();
	};
	affected(conRef, (vl) => {
		recompute?.();
	});
	addEvent(inputChange || source, "input", () => {
		recompute?.();
	});
	addEvent(inputChange || source, "change", () => {
		recompute?.();
	});
	queueMicrotask(() => {
		recompute?.();
	});
	return percent;
};
var reactiveScrollbarSize = (source, axis, contentSize) => {
	const containerSize = axis === 0 ? operated([], () => source.clientWidth) : operated([], () => source.clientHeight);
	return operated([containerSize, contentSize], () => {
		const ratio = containerSize.value / contentSize.value;
		return Math.max(20, ratio * containerSize.value);
	});
};
var paddingBoxSize = (source, axis, inputChange) => {
	asWeak(source);
	const scroll = scrollRef(source, ["inline", "block"][axis]);
	const conRef = sizeRef(source, ["inline", "block"][axis], "content-box");
	const content = computed(conRef, (v) => v + (getPadding(source, ["inline", "block"][axis]) || 0));
	const recompute = () => {
		conRef?.[$trigger]?.();
		content?.[$trigger]?.();
	};
	affected(scroll, (vl) => {
		recompute?.();
	});
	addEvent(inputChange || source, "input", () => {
		recompute?.();
	});
	addEvent(inputChange || source, "change", () => {
		recompute?.();
	});
	queueMicrotask(() => {
		recompute?.();
	});
	return content;
};
var pointerEventRef = (host, ...args) => makeRef(host, observe({
	x: 0,
	y: 0,
	pointerId: 0
}), pointerEventLink, ...args);
//#endregion
//#region ../../modules/projects/lur.e/src/lure/misc/Normalizer.ts
function getIndentColumns(line, tabWidth = 4) {
	let col = 0;
	for (let i = 0; i < line.length; i++) {
		const ch = line[i];
		if (ch === " ") col += 1;
		else if (ch === "	") col += tabWidth - col % tabWidth;
		else break;
	}
	return col;
}
function stripIndentColumns(line, columns, tabWidth = 4) {
	let col = 0, i = 0;
	while (i < line.length && col < columns) {
		const ch = line[i];
		if (ch === " ") {
			col += 1;
			i++;
		} else if (ch === "	") {
			col += tabWidth - col % tabWidth;
			i++;
		} else break;
	}
	return line.slice(i);
}
function pickEOL(s) {
	if (s.includes("\r\n")) return "\r\n";
	if (s.includes("\r")) return "\r";
	return "\n";
}
function gcd(a, b) {
	a = Math.abs(a);
	b = Math.abs(b);
	while (b) [a, b] = [b, a % b];
	return a;
}
function detectIndentStep(text, { ignoreFirstLine = true, tabWidth = 4 } = {}) {
	const lines = text.split(/\r\n|\n|\r/);
	const start = ignoreFirstLine ? 1 : 0;
	const indents = [];
	for (let i = start; i < lines.length; i++) {
		const ln = lines[i];
		if (ln.trim() === "") continue;
		indents.push(getIndentColumns(ln, tabWidth));
	}
	if (indents.length === 0) return {
		min: 0,
		step: 0,
		allEven: true,
		allDiv4: true
	};
	const min = Math.min(...indents);
	const shifted = indents.map((v) => v - min).filter((v) => v > 0);
	let step = 0;
	for (const v of shifted) step = step ? gcd(step, v) : v;
	const allEven = indents.every((v) => v % 2 === 0);
	const allDiv4 = indents.every((v) => v % 4 === 0);
	if (step === 0) step = allDiv4 ? 4 : allEven ? 2 : 1;
	else if (step % 4 === 0) step = 4;
	else if (step % 2 === 0) step = 2;
	else step = 1;
	return {
		min,
		step,
		allEven,
		allDiv4
	};
}
function adjustIndentToGrid(line, step, mode = "floor", tabWidth = 4) {
	if (!step || step <= 1) return line;
	const cur = getIndentColumns(line, tabWidth);
	if (cur === 0) return line;
	let target;
	if (mode === "nearest") target = Math.round(cur / step) * step;
	else if (mode === "ceil") target = Math.ceil(cur / step) * step;
	else target = Math.floor(cur / step) * step;
	const delta = cur - target;
	if (delta > 0) return stripIndentColumns(line, delta, tabWidth);
	else if (delta < 0) return " ".repeat(-delta) + line;
	return line;
}
function normalizeStartTagWhitespace(html, { scope = "void-only" } = {}) {
	if (!html || typeof html !== "string") return html;
	const VOID = /* @__PURE__ */ new Set([
		"area",
		"base",
		"br",
		"col",
		"embed",
		"hr",
		"img",
		"input",
		"link",
		"meta",
		"param",
		"source",
		"track",
		"wbr"
	]);
	let out = "";
	let i = 0;
	const n = html.length;
	while (i < n) {
		const ch = html[i];
		if (ch !== "<") {
			out += ch;
			i++;
			continue;
		}
		if (html.startsWith("<!--", i)) {
			const end = html.indexOf("-->", i + 4);
			if (end === -1) {
				out += html.slice(i);
				break;
			}
			out += html.slice(i, end + 3);
			i = end + 3;
			continue;
		}
		if (html[i + 1] === "!" || html[i + 1] === "?") {
			const end = html.indexOf(">", i + 2);
			if (end === -1) {
				out += html.slice(i);
				break;
			}
			out += html.slice(i, end + 1);
			i = end + 1;
			continue;
		}
		if (html[i + 1] === "/") {
			const end = html.indexOf(">", i + 2);
			if (end === -1) {
				out += html.slice(i);
				break;
			}
			out += html.slice(i, end + 1);
			i = end + 1;
			continue;
		}
		let j = i + 1;
		while (j < n && /\s/.test(html[j])) j++;
		const nameStart = j;
		while (j < n && /[A-Za-z0-9:-]/.test(html[j])) j++;
		const tagName = html.slice(nameStart, j).toLowerCase();
		let k = j;
		let quote = null;
		while (k < n) {
			const c = html[k];
			if (quote) {
				if (c === quote) quote = null;
				k++;
			} else if (c === "\"" || c === "'") {
				quote = c;
				k++;
			} else if (c === ">") break;
			else k++;
		}
		if (k >= n) {
			out += html.slice(i);
			break;
		}
		const rawTag = html.slice(i, k + 1);
		if (!(scope === "all" || scope === "input-only" && tagName === "input" || scope === "void-only" && VOID.has(tagName))) {
			out += rawTag;
			i = k + 1;
			continue;
		}
		let res = "";
		let q = null;
		let ws = false;
		for (let p = 0; p < rawTag.length; p++) {
			const c = rawTag[p];
			if (q) {
				res += c;
				if (c === q) q = null;
				continue;
			}
			if (c === "\"" || c === "'") {
				q = c;
				res += c;
				ws = false;
				continue;
			}
			if (c === "\n" || c === "\r" || c === "	" || c === " ") {
				if (!ws) {
					res += " ";
					ws = true;
				}
				continue;
			}
			res += c;
			ws = false;
		}
		res = res.replace(/\s*(\/?)\s*>$/, "$1>");
		out += res;
		i = k + 1;
	}
	return out;
}
function collapseInterTagWhitespaceSmart(html, { preserveCommentGaps = true } = {}) {
	if (!html || typeof html !== "string") return html;
	if (!preserveCommentGaps) return html.replace(/>\s+</g, "><");
	const SENT = "";
	let s = html;
	s = s.replace(/-->([^\S\r\n]+)<!--/g, `-->${SENT}<!--`).replace(/-->([^\S\r\n]+)</g, `-->${SENT}<`).replace(/>([^\S\r\n]+)<!--/g, `>${SENT}<!--`);
	s = s.replace(/>\s+</g, "><");
	s = s.replace(new RegExp(SENT, "g"), " ");
	return s;
}
function cleanupInterTagWhitespaceAndIndent(html, { normalizeIndent = true, ignoreFirstLine = true, tabWidth = 4, alignStep = "auto", quantize = "none" } = {}) {
	if (!html || typeof html !== "string" || html.indexOf("<") === -1) return html;
	html = html?.trim?.();
	const placeholders = [];
	const protectedHtml = html.replace(/<(pre|textarea|script|style)\b[\s\S]*?<\/\1>/gi, (m) => {
		return `\u0000${placeholders.push(m) - 1}\u0000`;
	});
	const eol = pickEOL(protectedHtml);
	const lines = protectedHtml.split(/\r\n|\n|\r/);
	const start = ignoreFirstLine ? 1 : 0;
	const { min, step: autoStep } = detectIndentStep(protectedHtml, {
		ignoreFirstLine,
		tabWidth
	});
	if (normalizeIndent && min > 0) for (let i = start; i < lines.length; i++) {
		const ln = lines[i];
		if (ln.trim() === "") continue;
		lines[i] = stripIndentColumns(ln, min, tabWidth);
	}
	let step = alignStep === "auto" ? autoStep : alignStep;
	if (quantize !== "none" && step > 1) for (let i = start; i < lines.length; i++) {
		const ln = lines[i];
		if (ln.trim() === "") continue;
		lines[i] = adjustIndentToGrid(ln, step, quantize, tabWidth);
	}
	let working = lines.join(eol);
	working = normalizeStartTagWhitespace(working, { scope: "void-only" });
	working = collapseInterTagWhitespaceSmart(working);
	return working.replace(/\u0000(\d+)\u0000/g, (_, i) => placeholders[+i])?.trim?.();
}
function checkInsideTagBlock(contextParts, ...str) {
	const current = str?.[0] ?? "";
	const idx = contextParts.indexOf(current);
	if (idx < 0) {
		const tail = str?.join?.("") ?? "";
		return /<([A-Za-z\/!?])[\w\W]*$/.test(tail) && !/>[\w\W]*$/.test(tail);
	}
	const prefix = contextParts.slice(0, idx + 1).join("");
	let inTag = false, inSingle = false, inDouble = false;
	for (let i = 0; i < prefix.length; i++) {
		const ch = prefix[i];
		const next = prefix[i + 1] ?? "";
		if (!inTag) {
			if (ch === "<") {
				if (/[A-Za-z\/!?]/.test(next)) {
					inTag = true;
					inSingle = false;
					inDouble = false;
				}
			}
			continue;
		}
		if (!inSingle && !inDouble) {
			if (ch === "\"") {
				inDouble = true;
				continue;
			}
			if (ch === "'") {
				inSingle = true;
				continue;
			}
			if (ch === ">") {
				inTag = false;
				continue;
			}
		} else if (inDouble) {
			if (ch === "\"") {
				inDouble = false;
				continue;
			}
		} else if (inSingle) {
			if (ch === "'") {
				inSingle = false;
				continue;
			}
		}
	}
	return inTag;
}
//#endregion
//#region ../../modules/projects/lur.e/src/lure/misc/Syntax.ts
var EMapSymbol = Symbol.for("lure@EMap");
globalThis[EMapSymbol] ??= /* @__PURE__ */ new WeakMap();
var EMap = globalThis[EMapSymbol];
var parseTag = (str) => {
	const match = str.match(/^([a-zA-Z0-9\-]+)?(?:#([a-zA-Z0-9\-_]+))?((?:\.[a-zA-Z0-9\-_]+)*)$/);
	if (!match) return {
		tag: str,
		id: null,
		className: null
	};
	const [, tag = "div", id, classStr] = match;
	return {
		tag,
		id,
		className: classStr ? classStr.replace(/\./g, " ").trim() : null
	};
};
var parseIndex = (value) => {
	if (typeof value != "string" || !value?.trim?.()) return -1;
	const exact = value.match(/^#\{(\d+)\}$/);
	if (exact) return parseInt(exact[1] ?? "-1", 10);
	const embedded = value.match(/#\{(\d+)\}/);
	return embedded ? parseInt(embedded[1] ?? "-1", 10) : -1;
};
var connectElement = (el, atb, psh, mapped) => {
	if (!el) return el;
	const rawStyleAttribute = el.getAttribute("style");
	const inlineStylePlan = rawStyleAttribute != null ? compileInlineStyleAttribute(rawStyleAttribute, atb) : null;
	if (el != null) {
		const entriesIdc = [];
		const addEntryIfExists = (name) => {
			const attr = Array.from(el?.attributes || []).find((attr) => attr.name == name && attr.value?.includes?.("#{"));
			if (attr) {
				const pair = [name, parseIndex(attr?.value) ?? -1];
				entriesIdc.push(pair);
				return pair;
			}
			return [name, -1];
		};
		[
			"dataset",
			"style",
			"classList",
			"visible",
			"aria",
			"value",
			"checked",
			"valueAsNumber",
			"placeholder",
			"ref"
		].forEach((name) => {
			if (name === "style" && inlineStylePlan != null) return;
			addEntryIfExists(name);
		});
		const makeEntries = (startsWith, except) => {
			const entries = [];
			for (const attr of Array.from(el?.attributes || [])) {
				const allowedNoPrefix = Array.isArray(startsWith) ? startsWith?.some?.((str) => str == "") : startsWith == "";
				const prefix = (Array.isArray(startsWith) ? startsWith.find((start) => attr.name?.startsWith?.(start)) : startsWith = attr.name?.startsWith?.(startsWith) ? startsWith : "") ?? "";
				const trueAttributeName = attr.name.trim()?.replace?.(prefix, "");
				const isPlaceholder = attr.value?.includes?.("#{") && attr.value?.includes?.("}");
				const atbIndex = parseIndex(attr?.value);
				const excepted = Array.isArray(except) ? except?.some?.((str) => trueAttributeName?.startsWith?.(str)) : except == trueAttributeName;
				if (isPlaceholder && (prefix == "" && allowedNoPrefix || prefix != "") && atbIndex >= 0 && !excepted) entries.push([trueAttributeName, atbIndex]);
			}
			return entries;
		};
		const makeCumulativeEntries = (startsWith, except, specific = "") => {
			const entriesMap = /* @__PURE__ */ new Map();
			for (const attr of Array.from(el?.attributes || [])) {
				const allowedNoPrefix = Array.isArray(startsWith) ? startsWith?.some?.((str) => str == "") : startsWith == "";
				const prefix = (Array.isArray(startsWith) ? startsWith.find((start) => attr.name?.startsWith?.(start)) : startsWith = attr.name?.startsWith?.(startsWith) ? startsWith : "") ?? "";
				const trueAttributeName = attr.name.trim()?.replace?.(prefix, "");
				const isPlaceholder = attr.value?.includes?.("#{") && attr.value?.includes?.("}");
				const atbIndex = parseIndex(attr?.value) ?? -1;
				const excepted = Array.isArray(except) ? except?.some?.((str) => trueAttributeName?.startsWith?.(str)) : except == trueAttributeName;
				const isSpecific = (Array.isArray(specific) ? specific?.some?.((str) => attr.name === str) : attr.name === specific) && specific !== "";
				if (isPlaceholder && (prefix == "" && allowedNoPrefix || prefix != "" || isSpecific) && atbIndex >= 0 && !excepted) {
					const key = isSpecific ? attr.name : trueAttributeName;
					if (!entriesMap.has(key)) entriesMap.set(key, []);
					entriesMap.get(key)?.push(atbIndex);
				}
			}
			return Array.from(entriesMap.entries());
		};
		let propertiesEntries = makeEntries(["prop:"], []);
		let onEntries = makeCumulativeEntries(["on:", "@"], [], "");
		let refEntries = makeCumulativeEntries(["ref:"], [], ["ref"]);
		let attributesEntries = makeEntries(["attr:", ""], [
			"ref",
			"value",
			"placeholder",
			"checked",
			"valueAsNumber"
		]);
		if (inlineStylePlan != null) attributesEntries = attributesEntries.filter(([name]) => name !== "style");
		const bindings = Object.fromEntries(entriesIdc?.filter?.((pair) => pair[1] >= 0)?.map?.((pair) => [pair[0], atb?.[pair[1]] ?? null]) ?? []);
		bindings.attributes = Object.fromEntries(attributesEntries?.filter?.((pair) => pair[1] >= 0)?.map?.((pair) => [pair[0], atb?.[pair[1]] ?? null]) ?? []);
		bindings.properties = Object.fromEntries(propertiesEntries?.filter?.((pair) => pair[1] >= 0)?.map?.((pair) => [pair[0], atb?.[pair[1]] ?? null]) ?? []);
		bindings.on = Object.fromEntries(onEntries?.filter?.((pair) => pair[1]?.some?.((idx) => idx >= 0))?.map?.((pair) => [pair[0], pair[1]?.map?.((idx) => atb?.[idx]).filter((value) => value != null)]) ?? []);
		if (inlineStylePlan?.kind === "direct") bindings.style = inlineStylePlan.value;
		else if (inlineStylePlan?.kind === "template") bindings.style = inlineStylePlan.binding;
		if (bindings.style == null && isStyleBinding(bindings.attributes?.style)) {
			bindings.style = bindings.attributes.style;
			delete bindings.attributes.style;
		}
		const isRef = (v) => v != null && typeof v == "object" && "value" in v;
		if (el?.matches?.("input, select, textarea")) {
			const writeBack = () => {
				const input = el;
				if (isRef(bindings.value)) {
					if (input.type !== "radio" || input.checked) {
						const vn = input.valueAsNumber;
						const v = vn != null && !Number.isNaN(vn) ? vn : input.value;
						if (!Object.is(bindings.value.value, v)) bindings.value.value = v;
					}
				}
				if (isRef(bindings.checked) && !Object.is(bindings.checked.value, input.checked)) bindings.checked.value = input.checked;
				if (isRef(bindings.valueAsNumber) && !Object.is(bindings.valueAsNumber.value, input.valueAsNumber)) bindings.valueAsNumber.value = input.valueAsNumber;
			};
			el.addEventListener("input", writeBack, { passive: true });
			el.addEventListener("change", writeBack, { passive: true });
		}
		const refIndex = entriesIdc?.find?.((pair) => pair[0] == "ref" && pair[1] >= 0)?.[1];
		if (refIndex != null && refIndex >= 0) {
			const ref = atb?.[refIndex];
			if (typeof ref == "function") ref?.(el);
			else if (ref != null && typeof ref == "object") ref.value = el;
		}
		refEntries?.forEach?.((pair) => {
			(pair?.[1]?.filter?.((idx) => idx != null && idx >= 0)?.map?.((idx) => atb?.[idx])?.filter?.((v) => v != null))?.forEach?.((ref) => {
				if (typeof ref == "function") ref?.(el);
				else if (ref != null && typeof ref == "object") ref.value = el;
			});
		});
		const clearPlaceholdersFromAttributesOfElement = (el) => {
			if (el == null) return;
			const attributeIsInRegistry = (name) => {
				return attributesEntries?.some?.((pair) => pair[0] == name) || entriesIdc?.some?.((pair) => pair[0] == name) || name?.startsWith?.("ref:") || name == "ref";
			};
			for (const attr of Array.from(el?.attributes || [])) if (attr.value?.includes?.("#{") && attr.value?.includes?.("}") && attributeIsInRegistry(attr.name) || attr.value?.startsWith?.("#{") && attr.value?.endsWith?.("}") || attr.name?.includes?.(":") || attr.name?.includes?.("ref:") || attr.name == "ref") el?.removeAttribute?.(attr.name);
			for (const attr of Array.from(el?.attributes || [])) if (typeof attr.value == "string" && /#\{\d+\}/.test(attr.value)) el?.removeAttribute?.(attr.name);
		};
		if (inlineStylePlan?.kind === "static") applyNormalizedInlineStyle(el, inlineStylePlan.cssText);
		clearPlaceholdersFromAttributesOfElement(el);
		pruneEmptyStyleAttribute(el);
		if (!EMap?.has?.(el)) EMap?.set?.(el, E(el, bindings));
	}
	return EMap?.get?.(el) ?? el;
};
var linearBuilder = (strings, ...values) => {
	const nodes = [];
	for (let i = 0; i < strings?.length; i++) {
		const str = strings?.[i];
		const val = values?.[i];
		nodes.push(H(str));
		nodes.push(val);
	}
	if (nodes?.length <= 1) return getNode(nodes?.[0], null, 0);
	const fragment = document.createDocumentFragment();
	fragment.append(...nodes?.filter?.((nd) => nd != null)?.map?.((en, i) => getNode(en, null, i))?.filter?.((nd) => nd != null));
	return fragment;
};
function html(strings, ...values) {
	if (strings?.at?.(0)?.trim?.()?.startsWith?.("<") && strings?.at?.(-1)?.trim?.()?.endsWith?.(">")) return htmlBuilder({ createElement: null })(strings, ...values);
	return linearBuilder(strings, ...values);
}
var isValidParent = (parent) => {
	return parent != null && parent instanceof HTMLElement && !(parent instanceof DocumentFragment || parent instanceof HTMLBodyElement && parent != document.body);
};
var replaceNode = (parent, node, el) => {
	if (el != null) el.boundParent = parent;
	let newNode = getNode(el, null, -1, parent);
	if (isElement(newNode)) {
		if (newNode?.parentNode != parent && !newNode?.contains?.(parent) && newNode != null) node?.replaceWith?.(hasValue(newNode) && (typeof newNode?.value == "object" || typeof newNode?.value == "function") && isElement(newNode?.value) ? newNode?.value : newNode);
	} else node?.remove?.();
};
function htmlBuilder({ createElement = null } = {}) {
	return function(strings, ...values) {
		let parts = [];
		const psh = [], atb = [];
		for (let i = 0; i < strings.length; i++) {
			parts.push(strings?.[i] || "");
			if (i < values.length) if (strings[i]?.trim()?.endsWith?.("<")) {
				const dat = parseTag(values?.[i]);
				parts.push(dat.tag || "div");
				if (dat.id) parts.push(` id="${dat.id}"`);
				if (dat.className) parts.push(` class="${dat.className}"`);
			} else {
				const $inTagOpen = checkInsideTagBlock(strings, strings?.[i] || "", strings?.[i + 1] || "");
				const $afterEquals = /[\w:\-\.\]]\s*=\s*$/.test(strings[i]?.trim?.() ?? "") || strings[i]?.trim?.()?.endsWith?.("=");
				const $isQuoteBegin = strings[i]?.trim?.()?.match?.(/['"]$/);
				const $isQuoteEnd = strings[i + 1]?.trim?.()?.match?.(/^['"]/) ?? $isQuoteBegin;
				const $betweenQuotes = $isQuoteBegin && $isQuoteEnd;
				const $attributePattern = $afterEquals;
				if (($attributePattern || $betweenQuotes) && $inTagOpen) {
					const $needsToQuoteWrap = $attributePattern && !$betweenQuotes;
					const ati = atb.length;
					parts.push((typeof values?.[i] == "string" ? values?.[i]?.trim?.() != "" : values?.[i] != null) ? $needsToQuoteWrap ? `"#{${ati}}"` : `#{${ati}}` : "");
					atb.push(values?.[i]);
				} else if (!$inTagOpen) {
					const psi = psh.length;
					parts.push((typeof values?.[i] == "string" ? values?.[i]?.trim?.() != "" : values?.[i] != null) ? isPrimitive(values?.[i]) ? String(values?.[i])?.trim?.() : `<!--o:${psi}-->` : "");
					psh.push(values?.[i]);
				}
			}
		}
		const sourceCode = cleanupInterTagWhitespaceAndIndent(parts.join("").trim());
		const mapped = /* @__PURE__ */ new WeakMap(), doc = new DOMParser().parseFromString(sourceCode, "text/html");
		const sources = (doc instanceof HTMLTemplateElement || doc?.matches?.("template") ? doc : doc.querySelector("template"))?.content ?? doc.body ?? doc;
		const frag = document.createDocumentFragment();
		const bucket = Array.from(sources.childNodes)?.filter((e) => {
			return e instanceof Node;
		}).map((node) => {
			if (!isValidParent(node?.parentNode) && node?.parentNode != frag) {
				node?.remove?.();
				if (node != null) frag?.append?.(node);
			}
			return node;
		});
		let walkedNodes = [];
		bucket.forEach((nodeSet) => {
			const walker = nodeSet ? document.createTreeWalker(nodeSet, NodeFilter.SHOW_ALL, null) : null;
			do {
				const node = walker?.currentNode;
				walkedNodes.push(node);
			} while (walker?.nextNode?.());
		});
		walkedNodes?.filter?.((node) => node?.nodeType == Node.COMMENT_NODE)?.forEach?.((node) => {
			if (node?.nodeValue?.trim?.()?.includes?.("o:") && Number.isInteger(parseInt(node?.nodeValue?.trim?.()?.slice?.(2) ?? "-1"))) {
				let el = psh?.[parseInt(node?.nodeValue?.trim?.()?.slice?.(2) ?? "-1") ?? -1];
				if (el == null || el === void 0 || (typeof el == "string" ? el : null)?.trim?.() == "") node?.remove?.();
				else {
					const $parent = node?.parentNode;
					if (Array.isArray(el) || el instanceof Map || el instanceof Set) replaceNode?.($parent, node, el = M$1(el, null, $parent));
					else if (el != null) replaceNode?.($parent, node, el);
				}
			}
			if (node?.isConnected) node?.remove?.();
		});
		walkedNodes?.filter((node) => node.nodeType == Node.ELEMENT_NODE)?.map?.((node) => {
			connectElement(node, atb, psh, mapped);
		});
		return Array.from(frag?.childNodes)?.length > 1 ? frag : frag?.childNodes?.[0];
	};
}
var H = (str, ...values) => {
	if (typeof str == "string") {
		if (str?.trim?.()?.startsWith?.("<") && str?.trim?.()?.endsWith?.(">")) {
			const doc = new DOMParser().parseFromString(cleanupInterTagWhitespaceAndIndent(str?.trim?.()), "text/html");
			const basis = doc.querySelector("template")?.content ?? doc.body;
			if (basis instanceof HTMLBodyElement) {
				const frag = document.createDocumentFragment();
				frag.append(...Array.from(basis.childNodes ?? []));
				return Array.from(frag.childNodes)?.length > 1 ? frag : frag?.childNodes?.[0];
			}
			if (basis instanceof DocumentFragment) return basis;
			if (basis?.childNodes?.length > 1) {
				const frag = document.createDocumentFragment();
				frag.append(...Array.from(basis?.childNodes ?? []));
				return frag;
			}
			return basis?.childNodes?.[0] ?? new Text(str);
		}
		return new Text(str);
	} else if (typeof str == "function") return H(str?.());
	else if (Array.isArray(str) && values) return html(str, ...values);
	else if (str instanceof Node) return str;
	return getNode(str);
};
//#endregion
//#region ../../modules/projects/lur.e/src/lure/misc/Glit.ts
var propStoreSymbol = Symbol.for("lur.e@propStore");
globalThis[propStoreSymbol] ??= /* @__PURE__ */ new WeakMap();
var propStore = globalThis[propStoreSymbol];
var CSM_symbol = Symbol.for("lur.e@CSM");
globalThis[CSM_symbol] ??= /* @__PURE__ */ new WeakMap();
var CSM = globalThis[CSM_symbol];
var camelToKebab = (str) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
var whenBoxValid = (name) => {
	const cb = camelToKebab(name);
	if ([
		"border-box",
		"content-box",
		"device-pixel-content-box"
	].indexOf(cb) >= 0) return cb;
	return null;
};
var whenAxisValid = (name) => {
	const cb = camelToKebab(name);
	if (cb?.startsWith?.("inline")) return "inline";
	if (cb?.startsWith?.("block")) return "block";
	return null;
};
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var inRenderKey = Symbol.for("@render@");
var defKeys = Symbol.for("@defKeys@");
var defaultStyle = typeof document != "undefined" ? document?.createElement?.("style") : null;
var defineSource = (source, holder, name) => {
	if (source == "attr") return attrRef.bind(null, holder, name || "");
	if (source == "media") return matchMediaRef;
	if (source == "query") return (val) => Q?.(name || val || "", holder);
	if (source == "query-shadow") return (val) => Q?.(name || val || "", holder?.shadowRoot ?? holder);
	if (source == "localStorage") return localStorageRef;
	if (source == "inline-size") return sizeRef.bind(null, holder, "inline", whenBoxValid(name) || "border-box");
	if (source == "content-box") return sizeRef.bind(null, holder, whenAxisValid(name) || "inline", "content-box");
	if (source == "block-size") return sizeRef.bind(null, holder, "block", whenBoxValid(name) || "border-box");
	if (source == "border-box") return sizeRef.bind(null, holder, whenAxisValid(name) || "inline", "border-box");
	if (source == "scroll") return scrollRef.bind(null, holder, whenAxisValid(name) || "inline");
	if (source == "device-pixel-content-box") return sizeRef.bind(null, holder, whenAxisValid(name) || "inline", "device-pixel-content-box");
	if (source == "checked") return checkedRef.bind(null, holder);
	if (source == "value") return valueRef.bind(null, holder);
	if (source == "value-as-number") return valueAsNumberRef.bind(null, holder);
	return ref;
};
if (defaultStyle) typeof document != "undefined" && document.querySelector?.("head")?.appendChild?.(defaultStyle);
var getDef = (source) => {
	if (source == "query") return "input";
	if (source == "query-shadow") return "input";
	if (source == "media") return false;
	if (source == "localStorage") return null;
	if (source == "attr") return null;
	if (source == "inline-size") return 0;
	if (source == "block-size") return 0;
	if (source == "border-box") return 0;
	if (source == "content-box") return 0;
	if (source == "scroll") return 0;
	if (source == "device-pixel-content-box") return 0;
	if (source == "checked") return false;
	if (source == "value") return "";
	if (source == "value-as-number") return 0;
	return null;
};
if (defaultStyle) defaultStyle.innerHTML = UX_PRELOAD_HOST_CSS;
function withProperties(ctr) {
	const proto = ctr.prototype ?? Object.getPrototypeOf(ctr) ?? ctr;
	const $prev = proto?.$init ?? ctr?.$init;
	proto.$init = function(...args) {
		$prev?.call?.(this, ...args);
		const allDefs = {};
		let p = Object.getPrototypeOf(this) ?? this;
		while (p) {
			if (Object.hasOwn(p, defKeys)) {
				const defs = Object.assign({}, Object.getOwnPropertyDescriptors(p), p[defKeys] ?? {});
				for (const k of Object.keys(defs)) if (!(k in allDefs)) allDefs[k] = defs[k];
			}
			p = Object.getPrototypeOf(p);
		}
		for (const [key, def] of Object.entries(allDefs)) {
			const attrLive = typeof key === "string" && typeof this.getAttribute === "function" ? this.getAttribute(key) : null;
			const exists = this[key];
			if (def != null) Object.defineProperty(this, key, def);
			try {
				const preferred = attrLive != null && String(attrLive).length > 0 ? attrLive : exists;
				if (preferred != null && preferred !== "") this[key] = preferred;
			} catch (e) {}
		}
		return this;
	};
	return ctr;
}
function generateName(length = 8) {
	let r = "";
	const l = 52;
	for (let i = 0; i < length; i++) r += characters.charAt(Math.floor(Math.random() * l));
	return r;
}
function defineElement(name, options) {
	return function(target, _key) {
		const registry = globalThis?.customElements;
		try {
			if (!registry || !name) return target;
			if (typeof registry.get !== "function" || typeof registry.define !== "function") return target;
			const existing = registry.get(name);
			if (existing) return existing;
			registry?.define?.(name, target, options);
		} catch (e) {
			if (e?.name === "NotSupportedError" || /has already been used|already been defined/i.test(e?.message || "")) return registry?.get?.(name) ?? target;
			throw e;
		}
		return target;
	};
}
function property(options = {}) {
	const { attribute, source, name, from } = options;
	return function(target, key) {
		const attrName = typeof attribute == "string" ? attribute : name ?? key;
		if (attribute !== false && attrName != null) {
			const ctor = target.constructor;
			if (!ctor.observedAttributes) ctor.observedAttributes = [];
			if (ctor.observedAttributes.indexOf(attrName) < 0) ctor.observedAttributes.push(attrName);
		}
		if (!Object.hasOwn(target, defKeys)) target[defKeys] = {};
		target[defKeys][key] = {
			get() {
				const ROOT = this;
				const inRender = ROOT[inRenderKey];
				const sourceTarget = !from ? ROOT : from instanceof HTMLElement ? from : typeof from == "string" ? Q?.(from, ROOT) : ROOT;
				let store = propStore.get(ROOT);
				let stored = store?.get?.(key);
				if (stored == null && source != null) {
					if (!store) propStore.set(ROOT, store = /* @__PURE__ */ new Map());
					if (!store?.has?.(key)) store?.set?.(key, stored = defineSource(source, sourceTarget, name || key)?.(getDef(source)));
				}
				if (inRender) return stored;
				if (stored?.element instanceof HTMLElement) return stored?.element;
				if (source == "query" || source == "query-shadow") return null;
				return (typeof stored == "object" || typeof stored == "function") && (stored?.value != null || "value" in stored) ? stored?.value : stored;
			},
			set(newValue) {
				const ROOT = this;
				const sourceTarget = !from ? ROOT : from instanceof HTMLElement ? from : typeof from == "string" ? Q?.(from, ROOT) : ROOT;
				let store = propStore.get(ROOT);
				let stored = store?.get?.(key);
				if (stored == null && source != null) {
					if (!store) propStore.set(ROOT, store = /* @__PURE__ */ new Map());
					if (!store?.has?.(key)) {
						const initialValue = (typeof newValue == "object" || typeof newValue == "function" ? newValue?.value : null) ?? newValue ?? getDef(source);
						store?.set?.(key, stored = defineSource(source, sourceTarget, name || key)?.(initialValue));
					}
				} else if (typeof stored == "object" || typeof stored == "function") try {
					if (typeof newValue == "object" && newValue != null && (newValue?.value == null && !("value" in newValue) || typeof newValue?.value == "object" || typeof newValue?.value == "function")) Object.assign(stored, newValue?.value ?? newValue);
					else stored.value = (typeof newValue == "object" || typeof newValue == "function" ? newValue?.value : null) ?? newValue;
				} catch (e) {
					console.warn("Error setting property value:", e);
				}
			},
			enumerable: true,
			configurable: true
		};
	};
}
var isNotExtended = (el) => {
	return !(el instanceof HTMLDivElement || el instanceof HTMLImageElement || el instanceof HTMLVideoElement || el instanceof HTMLCanvasElement) && !(el?.hasAttribute?.("is") || el?.getAttribute?.("is") != null);
};
var customElement = defineElement;
/**
* GLitElement: Создаёт базовый класс для кастомных элементов с расширенными возможностями.
* Поддерживает все lifecycle callbacks Web Components.
* 
* @param derivate - Базовый класс для расширения (по умолчанию HTMLElement).
* @returns Конструктор расширенного класса с полной поддержкой lifecycle.
* 
* @example
* ```typescript
* // Базовое использование
* class MyElement extends GLitElement() {
*     connectedCallback() {
*         super.connectedCallback();
*         console.log('Connected!');
*     }
*     
*     render() {
*         return H`<div>Hello</div>`;
*     }
* }
* 
* // С наследованием от другого элемента
* class MyButton extends GLitElement(HTMLButtonElement) {
*     static observedAttributes = ['disabled'];
*     
*     attributeChangedCallback(name, oldVal, newVal) {
*         console.log(`${name} changed from ${oldVal} to ${newVal}`);
*     }
* }
* 
* // С декоратором
* @defineElement('my-element')
* class MyElement extends GLitElement() {
*     @property({ source: 'attr', name: 'value' })
*     value: string = '';
*     
*     disconnectedCallback() {
*         console.log('Disconnected!');
*     }
* }
* ```
*/
function GLitElement(derivate) {
	const fallbackBase = globalThis.HTMLElement ?? class {};
	const Base = derivate ?? fallbackBase;
	const cached = CSM.get(Base);
	if (cached) return cached;
	/**
	* Внутренний класс с полной реализацией lifecycle
	*/
	class GLitElementImpl extends Base {
		#shadowDOM;
		#styleElement;
		#defaultStyle;
		#initialized = false;
		styleLibs = [];
		adoptedStyleSheets = [];
		get styles() {}
		get initialAttributes() {}
		styleLayers() {
			return [];
		}
		render(_weak) {
			return document.createElement("slot");
		}
		constructor(...args) {
			super(...args);
			if (isNotExtended(this)) {
				const shadowRoot = addRoot(this.shadowRoot ?? this.createShadowRoot?.() ?? this.attachShadow({ mode: "open" }));
				const defStyle = this.#defaultStyle ??= defaultStyle?.cloneNode?.(true);
				const layersStyle = shadowRoot.querySelector(`style[data-type="ux-layer"]`);
				if (layersStyle) layersStyle.after(defStyle);
				else shadowRoot.prepend(defStyle);
			}
			this.styleLibs ??= [];
		}
		$makeLayers() {
			return makeHostLayerOrder(this.styleLayers?.() ?? []);
		}
		onInitialize(_weak) {
			return this;
		}
		onRender(_weak) {
			return this;
		}
		getProperty(key) {
			const current = this[inRenderKey];
			this[inRenderKey] = true;
			const cp = this[key];
			this[inRenderKey] = current;
			if (!current) delete this[inRenderKey];
			return cp;
		}
		loadStyleLibrary($module) {
			const root = this.shadowRoot;
			const module = typeof $module == "function" ? $module?.(root) : $module;
			if (module instanceof HTMLStyleElement) {
				this.styleLibs?.push?.(module);
				if (this.#styleElement?.isConnected) this.#styleElement?.before?.(module);
				else this.shadowRoot?.prepend?.(module);
			} else if (module instanceof CSSStyleSheet) addAdoptedSheetToElement(this, module);
			else {
				const adopted = loadAsAdopted(module, "ux-layer");
				if (adopted instanceof Promise) adopted.then((sheet) => addAdoptedSheetToElement(this, sheet)).catch(() => {});
				else if (adopted) addAdoptedSheetToElement(this, adopted);
			}
			return this;
		}
		createShadowRoot() {
			return this.shadowRoot ?? this.attachShadow({ mode: "open" });
		}
		/**
		* Вызывается когда элемент добавлен в DOM
		*/
		connectedCallback() {
			if (super.connectedCallback) super.connectedCallback();
			const weak = new WeakRef(this);
			if (!this.#initialized) {
				this.#initialized = true;
				const shadowRoot = isNotExtended(this) ? this.createShadowRoot?.() ?? this.shadowRoot ?? this.attachShadow({ mode: "open" }) : this.shadowRoot;
				const ctor = this.constructor;
				const init = this.$init ?? ctor.prototype?.$init;
				if (typeof init === "function") init.call(this);
				const attrs = typeof this.initialAttributes == "function" ? this.initialAttributes() : this.initialAttributes;
				setAttributesIfNull(this, attrs);
				this.onInitialize?.call(this, weak);
				this[inRenderKey] = true;
				if (isNotExtended(this) && shadowRoot) {
					const rendered = this.render?.call?.(this, weak) ?? document.createElement("slot");
					let styleElement = null;
					try {
						styleElement = loadCachedStyles(this, this.styles);
					} catch (error) {
						console.warn("Error applying host styles:", error);
					}
					if (styleElement instanceof HTMLStyleElement) this.#styleElement = styleElement;
					const elements = [
						H`<style data-type="ux-layer" prop:innerHTML=${this.$makeLayers()}></style>`,
						this.#defaultStyle,
						...this.styleLibs.map((x) => x.cloneNode?.(true)) || [],
						styleElement,
						rendered
					].filter((x) => x != null && isElement(x));
					shadowRoot.append(...elements);
					const adoptedSheets = adoptedStyleSheetsCache.get(this) || [];
					if (adoptedSheets.length > 0) shadowRoot.adoptedStyleSheets = [...adoptedSheets.filter((s) => !shadowRoot.adoptedStyleSheets?.includes(s)), .../* @__PURE__ */ new Set([...shadowRoot.adoptedStyleSheets || []])];
				}
				this.onRender?.call?.(this, weak);
				delete this[inRenderKey];
				if (shadowRoot) addRoot(shadowRoot);
			}
			scheduleEnsureHostStyles(this);
		}
		/**
		* Вызывается когда элемент удалён из DOM
		*/
		disconnectedCallback() {
			if (super.disconnectedCallback) super.disconnectedCallback();
		}
		/**
		* Вызывается когда элемент перемещён в новый документ
		*/
		adoptedCallback() {
			if (super.adoptedCallback) super.adoptedCallback();
			scheduleEnsureHostStyles(this);
		}
		/**
		* Вызывается когда наблюдаемый атрибут изменился
		*/
		attributeChangedCallback(name, oldValue, newValue) {
			if (super.attributeChangedCallback) super.attributeChangedCallback(name, oldValue, newValue);
			if (name === "theme" || name === "data-theme" || name === "color-scheme" || name.endsWith("color-scheme")) scheduleEnsureHostStyles(this);
		}
	}
	const result = withProperties(GLitElementImpl);
	CSM.set(Base, result);
	return result;
}
//#endregion
//#region ../../modules/projects/lur.e/src/lure/misc/CodeOverlay.ts
/**
* Visual code overlay locked to a text host (code / textarea / contenteditable).
*
* FIND:code-overlay
* TAG:code-highlight
* WHY: highlight.js must not wrap the selectable source; the overlay is paint-only
* (`pointer-events: none`). Selection stays on the host; CSS Custom Highlight
* mirrors it onto the overlay when `CSS.highlights` exists.
*/
var CODE_SELECTION_HIGHLIGHT = "code-selection";
var METRIC_PROPS = [
	"font-family",
	"font-size",
	"font-weight",
	"font-style",
	"font-stretch",
	"font-variant",
	"font-variant-ligatures",
	"font-variant-numeric",
	"font-variant-caps",
	"font-variant-east-asian",
	"font-feature-settings",
	"font-kerning",
	"font-optical-sizing",
	"font-variation-settings",
	"font-size-adjust",
	"font-language-override",
	"line-height",
	"letter-spacing",
	"word-spacing",
	"tab-size",
	"white-space",
	"white-space-collapse",
	"word-break",
	"overflow-wrap",
	"line-break",
	"hyphens",
	"text-align",
	"text-indent",
	"text-transform",
	"text-rendering",
	"text-wrap",
	"text-wrap-mode",
	"direction",
	"unicode-bidi",
	"-webkit-font-smoothing",
	"-moz-osx-font-smoothing"
];
var hostPaint = /* @__PURE__ */ new Map();
var selectionBound = false;
var supportsAnchorPositioning = () => {
	try {
		const cap = globalThis.Capacitor;
		if (typeof cap?.isNativePlatform === "function" && cap.isNativePlatform()) return false;
		return typeof CSS !== "undefined" && CSS.supports?.("anchor-name: --x") === true && CSS.supports?.("block-size: anchor-size(block)") === true;
	} catch {
		return false;
	}
};
/** Used line-height, never 0px (Capacitor getComputedStyle before layout). */
var usedLineHeight = (style, frozen = "") => {
	const fontSize = parseFloat(style.fontSize);
	const floor = (Number.isFinite(fontSize) && fontSize > 0 ? fontSize : 16) * 1.35;
	const frozenPx = parseFloat(frozen);
	if (Number.isFinite(frozenPx) && frozenPx >= floor * .85) return frozen;
	const px = parseFloat(style.lineHeight);
	const used = Number.isFinite(px) && px >= floor * .85 ? px : floor;
	return `${Math.round(used)}px`;
};
var makeAnchorName = () => `--hl${Math.random().toString(36).slice(2, 10).replace(/[0-9]/g, "x")}`;
/** Pin overlay to the host border box. `inset:0` on `pre` misses `pre` padding — selection drifts. */
var pinOverlayToHost = (host, overlay) => {
	overlay.style.position = "absolute";
	overlay.style.boxSizing = "border-box";
	overlay.style.inset = "auto";
	overlay.style.right = "auto";
	overlay.style.bottom = "auto";
	overlay.style.margin = "0";
	if (host.offsetParent && host.offsetParent === overlay.offsetParent) {
		const top = `${host.offsetTop}px`;
		const left = `${host.offsetLeft}px`;
		const width = `${host.offsetWidth}px`;
		const height = `${host.offsetHeight}px`;
		if (overlay.style.top === top && overlay.style.left === left && overlay.style.width === width && overlay.style.height === height) return;
		overlay.style.top = top;
		overlay.style.left = left;
		overlay.style.width = width;
		overlay.style.height = height;
		return;
	}
	const parent = overlay.parentElement;
	if (!parent) return;
	const parentRect = parent.getBoundingClientRect();
	const hostRect = host.getBoundingClientRect();
	overlay.style.top = `${hostRect.top - parentRect.top + parent.scrollTop}px`;
	overlay.style.left = `${hostRect.left - parentRect.left + parent.scrollLeft}px`;
	overlay.style.width = `${hostRect.width}px`;
	overlay.style.height = `${hostRect.height}px`;
};
/** Leaf overlay: CSS anchors when available, otherwise pin to the host box. */
var placeCodeOverlay = (host, overlay) => {
	overlay.style.pointerEvents = "none";
	overlay.style.userSelect = "none";
	overlay.style.position = "absolute";
	overlay.style.zIndex = "1";
	overlay.style.margin = "0";
	const parent = host.parentElement;
	if (parent && getComputedStyle(parent).position === "static") parent.style.position = "relative";
	if (supportsAnchorPositioning()) {
		const name = makeAnchorName();
		host.style.setProperty("anchor-name", name);
		overlay.style.setProperty("position-anchor", name);
		overlay.style.setProperty("position-area", "span-all");
		overlay.style.setProperty("inset-block-start", "anchor(start)");
		overlay.style.setProperty("inset-inline-start", "anchor(start)");
		overlay.style.setProperty("inset-block-end", "anchor(end)");
		overlay.style.setProperty("inset-inline-end", "anchor(end)");
		overlay.style.setProperty("inline-size", "anchor-size(inline)");
		overlay.style.setProperty("block-size", "anchor-size(block)");
		host.after(overlay);
		return;
	}
	host.after(overlay);
	pinOverlayToHost(host, overlay);
};
var watchHostRemoval = (host, onGone) => {
	let observer = null;
	const bind = () => {
		if (observer || !host.isConnected) return;
		observer = new MutationObserver(() => {
			if (host.isConnected) return;
			observer?.disconnect();
			observer = null;
			onGone();
		});
		observer.observe(host.parentElement ?? document.documentElement, {
			childList: true,
			subtree: true
		});
	};
	if (host.isConnected) bind();
	else {
		queueMicrotask(bind);
		requestAnimationFrame(bind);
	}
	return () => observer?.disconnect();
};
var highlightsRegistry = () => {
	const cap = globalThis.Capacitor;
	if (typeof cap?.isNativePlatform === "function" && cap.isNativePlatform()) return null;
	return globalThis.CSS?.highlights ?? null;
};
var collectTextNodes = (root) => {
	const nodes = [];
	const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
	let current = walker.nextNode();
	while (current) {
		nodes.push(current);
		current = walker.nextNode();
	}
	return nodes;
};
var rangeOffsetsIn = (root, range) => {
	if (!root.contains(range.commonAncestorContainer) && range.commonAncestorContainer !== root) return null;
	const prefix = document.createRange();
	prefix.selectNodeContents(root);
	prefix.setEnd(range.startContainer, range.startOffset);
	const start = prefix.toString().length;
	return {
		start,
		end: start + range.toString().length
	};
};
var pointAtOffset = (nodes, offset) => {
	let remaining = Math.max(0, offset);
	for (const node of nodes) {
		const length = node.data.length;
		if (remaining <= length) return {
			node,
			offset: remaining
		};
		remaining -= length;
	}
	const last = nodes.at(-1);
	return last ? {
		node: last,
		offset: last.data.length
	} : null;
};
var hostSelectionOffsets = (host) => {
	if (host instanceof HTMLTextAreaElement) {
		if (document.activeElement !== host) return null;
		const start = host.selectionStart ?? 0;
		const end = host.selectionEnd ?? start;
		return start === end ? null : {
			start,
			end
		};
	}
	const selection = document.getSelection();
	if (!selection || selection.rangeCount === 0 || selection.isCollapsed) return null;
	return rangeOffsetsIn(host, selection.getRangeAt(0));
};
var syncCodeSelectionHighlight = () => {
	const registry = highlightsRegistry();
	const HighlightCtor = globalThis.Highlight;
	if (!registry || typeof HighlightCtor !== "function") return;
	const ranges = [];
	for (const [host, paint] of hostPaint) {
		if (!host.isConnected || !paint.isConnected) continue;
		const offsets = hostSelectionOffsets(host);
		if (!offsets) continue;
		if ((host.textContent?.length ?? 0) !== (paint.textContent?.length ?? 0)) continue;
		const nodes = collectTextNodes(paint);
		const start = pointAtOffset(nodes, offsets.start);
		const end = pointAtOffset(nodes, offsets.end);
		if (!start || !end) continue;
		const range = document.createRange();
		range.setStart(start.node, start.offset);
		range.setEnd(end.node, end.offset);
		ranges.push(range);
	}
	if (!ranges.length) {
		registry.delete(CODE_SELECTION_HIGHLIGHT);
		return;
	}
	registry.set(CODE_SELECTION_HIGHLIGHT, new HighlightCtor(...ranges));
};
var ensureSelectionMirror = () => {
	if (selectionBound || typeof document === "undefined" || !highlightsRegistry()) return;
	selectionBound = true;
	document.addEventListener("selectionchange", syncCodeSelectionHighlight, { passive: true });
};
/** Copy used glyph metrics from `pre > code` (or the text host) onto the overlay. */
var copyCodeMetrics = (source, target, box = false) => {
	const style = getComputedStyle(source);
	const font = style.font;
	if (font) target.style.font = font;
	for (const property of METRIC_PROPS) {
		const value = style.getPropertyValue(property);
		if (value) target.style.setProperty(property, value);
	}
	const lineHeight = usedLineHeight(style, source.style.lineHeight);
	if (source.offsetHeight > 0 && source.style.lineHeight !== lineHeight) source.style.lineHeight = lineHeight;
	target.style.setProperty("line-height", lineHeight);
	(source.parentElement ?? source).style.setProperty("--code-line-height", lineHeight);
	target.style.setProperty("font-synthesis", "none");
	target.style.setProperty("font-kerning", "none");
	target.style.setProperty("font-variant-ligatures", "none");
	target.style.setProperty("font-feature-settings", "\"liga\" 0, \"clig\" 0, \"calt\" 0, \"dlig\" 0");
	target.style.setProperty("-webkit-text-fill-color", "currentColor");
	if (box) {
		target.style.boxSizing = "border-box";
		target.style.paddingTop = style.paddingTop;
		target.style.paddingRight = style.paddingRight;
		target.style.paddingBottom = style.paddingBottom;
		target.style.paddingLeft = style.paddingLeft;
	}
};
/**
* Place `overlay` over `host` with matching box + font metrics.
* INVARIANT: overlay never captures pointer or selection.
*/
var attachCodeOverlay = (host, overlay, options = {}) => {
	const paint = options.paint ?? overlay;
	const scroller = options.scroller ?? host.closest("pre") ?? host;
	overlay.classList.add("code-highlight-overlay");
	overlay.setAttribute("aria-hidden", "true");
	overlay.style.pointerEvents = "none";
	overlay.style.userSelect = "none";
	let metricsLocked = false;
	let metricsBusy = false;
	const updateMetrics = (force = false) => {
		if (metricsBusy) return;
		metricsBusy = true;
		try {
			if (!(host.offsetHeight > 0 || host.offsetWidth > 0)) {
				metricsLocked = false;
				return;
			}
			if (force || !metricsLocked) {
				copyCodeMetrics(host, overlay, true);
				if (paint !== overlay) copyCodeMetrics(host, paint, false);
				metricsLocked = parseFloat(host.style.lineHeight) > 0;
			}
			if (!supportsAnchorPositioning()) pinOverlayToHost(host, overlay);
		} finally {
			queueMicrotask(() => {
				metricsBusy = false;
			});
		}
	};
	updateMetrics(true);
	document.fonts?.ready?.then(() => {
		if (host.isConnected) updateMetrics(true);
	});
	const resize = typeof ResizeObserver === "function" ? new ResizeObserver(() => updateMetrics()) : null;
	resize?.observe(host);
	placeCodeOverlay(host, overlay);
	const syncScroll = () => {
		if (scroller === host && host instanceof HTMLTextAreaElement) {
			paint.style.transform = `translate(${-host.scrollLeft}px, ${-host.scrollTop}px)`;
			return;
		}
		if (paint instanceof HTMLElement && "scrollTop" in scroller) {
			paint.scrollTop = scroller.scrollTop;
			paint.scrollLeft = scroller.scrollLeft;
		}
	};
	scroller.addEventListener("scroll", syncScroll, { passive: true });
	host.addEventListener("scroll", syncScroll, { passive: true });
	host.addEventListener("select", syncCodeSelectionHighlight, { passive: true });
	host.addEventListener("keyup", syncCodeSelectionHighlight, { passive: true });
	hostPaint.set(host, paint);
	ensureSelectionMirror();
	let stopWatch = () => void 0;
	const disconnect = () => {
		stopWatch();
		resize?.disconnect();
		hostPaint.delete(host);
		scroller.removeEventListener("scroll", syncScroll);
		host.removeEventListener("scroll", syncScroll);
		host.removeEventListener("select", syncCodeSelectionHighlight);
		host.removeEventListener("keyup", syncCodeSelectionHighlight);
		overlay.remove();
		syncCodeSelectionHighlight();
	};
	stopWatch = watchHostRemoval(host, disconnect);
	return {
		overlay,
		paint,
		updateMetrics,
		syncScroll,
		disconnect
	};
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/tasking/Manager.ts
var getBy = (tasks = [], taskId) => {
	return tasks.find((t) => taskId == t || typeof t.taskId == "string" && t.taskId?.replace?.(/^#/, "") == (typeof taskId == "string" ? taskId?.replace?.(/^#/, "") : null));
};
var taskHashUrl$1 = (taskIdOrHash) => {
	const raw = String(taskIdOrHash || "").trim();
	const hash = !raw ? "" : raw.startsWith("#") ? raw : `#${raw.replace(/^#/, "")}`;
	try {
		return `${location.pathname}${location.search}${hash}`;
	} catch {
		return hash || "#";
	}
};
var historyBack = (tasks = []) => {
	setIgnoreNextPopState(true);
	history?.back?.();
	const lastFocus = getFocused(tasks, false)?.taskId || "";
	if (location?.hash?.trim?.()?.replace?.(/^#/, "")?.trim?.() != lastFocus?.trim?.()?.replace?.(/^#/, "")?.trim?.()) {
		setIgnoreNextPopState(true);
		history?.replaceState?.("", "", taskHashUrl$1(lastFocus));
	}
	return tasks;
};
var getFocused = (tasks = [], includeHash = true) => {
	return tasks.findLast((t) => t.active) ?? (includeHash ? tasks?.find?.((t) => t.taskId?.replace?.(/^#/, "") == location.hash?.replace?.(/^#/, "")) : null);
};
/**
* Register a task with the back navigation system
* Tasks have lower priority than modals/menus and can be closed via back gesture
*/
var registerTask = (task, onClose) => {
	return registerCloseable({
		id: `task-${task.taskId?.replace?.(/^#/, "") ?? task.taskId}`,
		priority: ClosePriority.TASK,
		group: "task",
		isActive: () => task.active === true,
		close: (view) => {
			task.active = false;
			return onClose?.() ?? false;
		}
	});
};
var navigationEnable = (tasks, taskEnvAction) => {
	let processingHashChange = false;
	initBackNavigation({
		preventDefaultNavigation: false,
		pushInitialState: false
	});
	if (taskEnvAction) registerCloseable({
		id: "task-env-manager",
		priority: ClosePriority.VIEW,
		isActive: () => !!getFocused(tasks, true),
		close: () => {
			const focused = getFocused(tasks, true);
			if (focused && taskEnvAction(focused)) return true;
			return false;
		}
	});
	addEvent(window, "hashchange", (ev) => {
		if (processingHashChange || getIgnoreNextPopState()) return;
		processingHashChange = true;
		try {
			const fc = getBy(tasks, location.hash);
			if (fc) fc.focus = true;
			else {
				const hash = getFocused(tasks, false)?.taskId || location.hash || "";
				if (location.hash?.trim?.()?.replace?.(/^#/, "")?.trim?.() != hash?.trim?.()?.replace?.(/^#/, "")?.trim?.()) {
					setIgnoreNextPopState(true);
					const state = history.state || {};
					history?.replaceState?.(state, "", taskHashUrl$1(hash));
				}
			}
		} finally {
			processingHashChange = false;
		}
	});
	if (!history.state?.backNav) {
		setIgnoreNextPopState(true);
		const state = history.state || {};
		history?.replaceState?.({
			...state,
			backNav: true,
			depth: history.length
		}, "", taskHashUrl$1(location.hash || ""));
		setIgnoreNextPopState(false);
	}
	return tasks;
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/tasking/Tasks.ts
/**
* Apply a task hash without dropping pathname/search.
* WHY: `history.replaceState("", "", "#env-viewer")` is fine, but bare `#…` after a
* prior root rewrite made mono Settings look like `/?view=…#env-viewer`.
*/
var taskHashUrl = (taskIdOrHash) => {
	const raw = String(taskIdOrHash || "").trim();
	const hash = !raw ? "" : raw.startsWith("#") ? raw : `#${raw.replace(/^#/, "")}`;
	try {
		return `${location.pathname}${location.search}${hash}`;
	} catch {
		return hash || "#";
	}
};
var Task = class {
	$active = false;
	$action;
	payload;
	taskId;
	list;
	_unregisterBack;
	constructor(taskId, list, state = null, payload = {}, action) {
		this.taskId = taskId;
		this.list = list;
		this.payload = payload;
		Object.assign(this, state);
		this.$action = action ?? (() => {
			if (location.hash != this.taskId && this.taskId) {
				setIgnoreNextPopState(true);
				history.replaceState("", "", taskHashUrl(this.taskId || location.hash));
				setIgnoreNextPopState(false);
				return;
			}
		});
		this.addSelfToList(list, false);
	}
	addSelfToList(list, doFocus = false) {
		if (list == null) return this;
		const has = getBy(list, this);
		if (has != this) if (!has) list?.push(makeTask(this));
		else Object.assign(has, this);
		this.list = list;
		if (doFocus) {
			this.focus = true;
			setIgnoreNextPopState(true);
			const focusHash = getFocused(list, false)?.taskId || this.taskId || location.hash || "";
			history.pushState({ backNav: true }, "", taskHashUrl(focusHash));
			setIgnoreNextPopState(false);
			document.dispatchEvent(new CustomEvent("task-focus", {
				detail: this,
				bubbles: true,
				composed: true,
				cancelable: true
			}));
		}
		return this;
	}
	get active() {
		return !!this.$active;
	}
	get order() {
		return this.list?.findIndex?.((t) => t == this || typeof t.taskId == "string" && t.taskId == this.taskId) ?? -1;
	}
	get focus() {
		if (!this.taskId) return false;
		const task = this.list?.findLast?.((t) => t.active) ?? null;
		if (!task) return false;
		if (task?.taskId && task?.taskId == this.taskId) return true;
		return false;
	}
	set active(activeStatus) {
		if (this != null && this?.$active != activeStatus) {
			this.$active = activeStatus;
			if (activeStatus) this._unregisterBack = registerTask(this);
			else {
				this._unregisterBack?.();
				this._unregisterBack = void 0;
			}
			document.dispatchEvent(new CustomEvent("task-focus", {
				detail: getFocused(this.list ?? [], false),
				bubbles: true,
				composed: true,
				cancelable: true
			}));
		}
	}
	set focus(activeStatus) {
		if (activeStatus && activeStatus != this.focus) {
			const index = this.order;
			if (!this.focus && index >= 0) {
				const last = this.list?.findLastIndex?.((t) => t.focus) ?? -1;
				if (index < last || last < 0) {
					if (this.list) {
						for (const task of this.list) if (task != this && task?.taskId != this.taskId) task.focus = false;
					}
					this.list?.[$triggerLess]?.(() => {
						this.list?.splice?.(index, 1);
						this.list?.push?.(makeTask(this));
					});
					document.dispatchEvent(new CustomEvent("task-focus", {
						detail: getFocused(this.list ?? [], false),
						bubbles: true,
						composed: true,
						cancelable: true
					}));
				}
				this.takeAction();
			}
		}
	}
	takeAction() {
		return this.$action?.call?.(this);
	}
	removeFromList() {
		if (!this.list) return this;
		const index = this.list.indexOf(getBy(this.list, this) ?? makeTask(this)) ?? -1;
		if (index >= 0) this.list.splice(index, 1);
		const list = this.list;
		this.list = null;
		document.dispatchEvent(new CustomEvent("task-focus", {
			detail: getFocused(list ?? [], false),
			bubbles: true,
			composed: true,
			cancelable: true
		}));
		return this;
	}
};
var makeTask = (taskId, list, state = null, payload = {}, action) => {
	if (taskId instanceof Task) return observe(taskId);
	return observe(new Task(taskId, list, state, payload, action));
};
var makeTasks = (createCb) => {
	const tasks = observe([]);
	createCb(tasks);
	return tasks;
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/controllers/LazyEvents.ts
var hubsByTarget = /* @__PURE__ */ new WeakMap();
var keyOf = (type, options) => {
	return `${type}|c:${options?.capture ? "1" : "0"}|p:${options?.passive ? "1" : "0"}`;
};
var lazyAddEventListener = (target, type, handler, options = {}) => {
	if (!target || typeof target.addEventListener !== "function") return () => {};
	const normalized = {
		capture: Boolean(options.capture),
		passive: Boolean(options.passive)
	};
	const key = keyOf(type, normalized);
	let hubs = hubsByTarget.get(target);
	if (!hubs) {
		hubs = /* @__PURE__ */ new Map();
		hubsByTarget.set(target, hubs);
	}
	let hub = hubs.get(key);
	if (!hub) {
		const handlers = /* @__PURE__ */ new Map();
		const listener = (ev) => {
			for (const cb of Array.from(handlers.keys())) try {
				cb(ev);
			} catch (e) {
				console.warn(e);
			}
		};
		hubs.set(key, hub = {
			handlers,
			listener,
			options: normalized
		});
		target.addEventListener(type, listener, normalized);
	}
	const subscribed = handler;
	hub.handlers.set(subscribed, (hub.handlers.get(subscribed) ?? 0) + 1);
	let disposed = false;
	return () => {
		if (disposed) return;
		disposed = true;
		const hubsNow = hubsByTarget.get(target);
		const hubNow = hubsNow?.get(key);
		if (!hubNow) return;
		const subscribers = hubNow.handlers.get(subscribed) ?? 0;
		if (subscribers > 1) {
			hubNow.handlers.set(subscribed, subscribers - 1);
			return;
		}
		hubNow.handlers.delete(subscribed);
		if (hubNow.handlers.size > 0) return;
		target.removeEventListener(type, hubNow.listener, hubNow.options);
		hubsNow?.delete(key);
		if (hubsNow && hubsNow.size === 0) hubsByTarget.delete(target);
	};
};
var proxiedByRoot = /* @__PURE__ */ new WeakMap();
var resolveHTMLElement = (el) => {
	const resolved = el?.element ?? el;
	return resolved instanceof HTMLElement ? resolved : null;
};
var shouldApply = (when, hadMatch, hadHandled) => {
	if (!when) return false;
	if (when === "handled") return hadHandled;
	return hadMatch;
};
/**
* Proxied events:
* - Installs **one** real DOM listener on `root` (per event/options/config), but only after the first element handler registers.
* - Routes events to registered element handlers based on the composed path.
* - Can conditionally call preventDefault/stop* only when a trigger matches (or when handled).
*/
var addProxiedEvent = (root, type, options = {
	capture: true,
	passive: false
}, config = {}) => {
	const target = root;
	if (!target || typeof target.addEventListener !== "function") return (_element, _handler) => () => {};
	const normalized = {
		capture: Boolean(options.capture),
		passive: Boolean(options.passive)
	};
	const strategy = config.strategy ?? "closest";
	const key = `${type}|c:${normalized.capture ? "1" : "0"}|p:${normalized.passive ? "1" : "0"}|s:${strategy}|pd:${String(config.preventDefault ?? "")}|sp:${String(config.stopPropagation ?? "")}|sip:${String(config.stopImmediatePropagation ?? "")}`;
	let hubs = proxiedByRoot.get(target);
	if (!hubs) {
		hubs = /* @__PURE__ */ new Map();
		proxiedByRoot.set(target, hubs);
	}
	let hub = hubs.get(key);
	if (!hub) {
		const targets = /* @__PURE__ */ new Map();
		const dispatch = (ev) => {
			let hadMatch = false;
			let hadHandled = false;
			const callSet = (set) => {
				if (!set || set.size === 0) return;
				hadMatch = true;
				for (const cb of Array.from(set)) if (cb(ev)) hadHandled = true;
			};
			const path = ev?.composedPath?.();
			if (Array.isArray(path)) if (strategy === "closest") for (const n of path) {
				const el = resolveHTMLElement(n);
				if (!el) continue;
				const set = targets.get(el);
				if (!set) continue;
				callSet(set);
				break;
			}
			else for (const n of path) {
				const el = resolveHTMLElement(n);
				if (!el) continue;
				callSet(targets.get(el));
			}
			else {
				let cur = resolveHTMLElement(ev?.target);
				while (cur) {
					const set = targets.get(cur);
					if (set) {
						callSet(set);
						if (strategy === "closest") break;
					}
					const r = cur.getRootNode?.();
					cur = cur.parentElement || (r instanceof ShadowRoot ? r.host : null);
				}
			}
			if (shouldApply(config.preventDefault, hadMatch, hadHandled)) ev?.preventDefault?.();
			if (shouldApply(config.stopImmediatePropagation, hadMatch, hadHandled)) ev?.stopImmediatePropagation?.();
			if (shouldApply(config.stopPropagation, hadMatch, hadHandled)) ev?.stopPropagation?.();
		};
		hub = {
			targets,
			unbindGlobal: null,
			options: normalized,
			strategy,
			config,
			dispatch
		};
		hubs.set(key, hub);
	}
	return (element, handler) => {
		const el = resolveHTMLElement(element);
		if (!el) return () => {};
		if (hub.targets.size === 0 && !hub.unbindGlobal) hub.unbindGlobal = lazyAddEventListener(target, type, hub.dispatch, hub.options);
		let set = hub.targets.get(el);
		if (!set) {
			set = /* @__PURE__ */ new Set();
			hub.targets.set(el, set);
		}
		set.add(handler);
		return () => {
			const hubsNow = proxiedByRoot.get(target);
			const h = hubsNow?.get(key);
			if (!h) return;
			const resolved = resolveHTMLElement(element);
			if (!resolved) return;
			const s = h.targets.get(resolved);
			if (!s) return;
			s.delete(handler);
			if (s.size === 0) h.targets.delete(resolved);
			if (h.targets.size === 0) {
				h.unbindGlobal?.();
				h.unbindGlobal = null;
				hubsNow?.delete(key);
				if (hubsNow && hubsNow.size === 0) proxiedByRoot.delete(target);
			}
		};
	};
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/controllers/Trigger.ts
var ROOT = typeof document != "undefined" ? document?.documentElement : null;
var $set = (rv, key, val) => {
	if (rv?.deref?.() != null) return rv.deref()[key] = val;
};
function makeInterruptTrigger(except = null, ref = booleanRef(false), closeEvents = [
	"pointerdown",
	"click",
	"contextmenu",
	"scroll"
], element = document?.documentElement) {
	if (!element) return () => {};
	const wr = new WeakRef(ref);
	const close = typeof ref === "function" ? ref : (ev) => {
		(!(except?.contains?.(ev?.target) || ev?.target == (except?.element ?? except)) || !except) && $set(wr, "value", false);
	};
	const listening = closeEvents.map((event) => lazyAddEventListener(element, event, close, {
		capture: false,
		passive: false
	}));
	const dispose = () => listening.forEach((ub) => ub?.());
	addToCallChain(ref, Symbol.dispose, dispose);
	return dispose;
}
var doObserve = (holder, parent) => {
	if (!holder) throw Error("Element is null...");
	if (parent) doContentObserve(parent);
	doBorderObserve(holder);
};
var makeShiftTrigger = (callable, newItem) => ((evc) => {
	const ev = evc;
	newItem ??= ev?.target ?? newItem;
	if (!newItem.dataset.dragging) {
		const n_coord = [ev.clientX, ev.clientY];
		if (ev?.pointerId >= 0) newItem?.setPointerCapture?.(ev?.pointerId);
		const shifting = ((evc_l) => {
			const ev_l = evc_l;
			ev_l?.preventDefault?.();
			if (ev_l?.pointerId == ev?.pointerId) {
				const coord = [evc_l.clientX, evc_l.clientY];
				const shift = [coord[0] - n_coord[0], coord[1] - n_coord[1]];
				if (Math.hypot(...shift) > 2) {
					newItem?.style?.setProperty?.("will-change", "inset, transform, translate, z-index");
					unbind?.(ev_l);
					callable?.(ev);
				}
			}
		});
		const releasePointer = ((evc_l) => {
			const ev_l = evc_l;
			if (ev_l?.pointerId == ev?.pointerId) {
				newItem?.releasePointerCapture?.(ev?.pointerId);
				unbind?.(ev_l);
			}
		});
		const handler = {
			"pointermove": shifting,
			"pointercancel": releasePointer,
			"pointerup": releasePointer
		};
		const unbind = ((evc_l) => {
			if (evc_l?.pointerId == ev?.pointerId) bindings?.forEach((binding) => binding?.());
		});
		const bindings = addEvents(ROOT, handler);
	}
});
function deepContains(container, target) {
	let node = target;
	while (node) {
		if (node === container) return true;
		const anyNode = node;
		if (anyNode.assignedSlot) {
			node = anyNode.assignedSlot;
			continue;
		}
		if (node.parentNode) {
			node = node.parentNode;
			continue;
		}
		const root = node.getRootNode?.();
		if (root && root.host) node = root.host;
		else node = null;
	}
	return false;
}
function isInside(target, container) {
	if ("composedPath" in target && typeof target.composedPath === "function") return target.composedPath().includes(container);
	const node = target.target ? target.target : target;
	return node ? deepContains(container, node) : false;
}
var asElements = (value) => (Array.isArray(value) ? value : value ? [value] : []).map((element) => element?.element ?? element).filter(Boolean);
var matchesExceptionSelector = (event, selectors) => {
	if (!selectors.length) return false;
	return (typeof event.composedPath === "function" ? event.composedPath() : [event.target]).some((node) => selectors.some((selector) => node?.matches?.(selector) || node?.closest?.(selector)));
};
/**
* Bind composed-path-aware outside/Escape dismissal for transient UI surfaces.
* INVARIANT: all root listeners are released by the returned idempotent disposer.
*/
var bindOutsideDismiss = ({ root = typeof document !== "undefined" ? document.documentElement : null, inside, except, exceptSelectors = [], isInside: isCustomInside, closeEvents = ["pointerdown"], closeOnEscape = true, capture = true, onDismiss }) => {
	if (!root || !onDismiss) return () => {};
	const insideElements = asElements(inside);
	const exceptElements = asElements(except);
	let disposed = false;
	const dismissOutside = (event) => {
		if (disposed) return;
		if (isCustomInside?.(event)) return;
		if (insideElements.some((element) => isInside(event, element))) return;
		if (exceptElements.some((element) => isInside(event, element))) return;
		if (matchesExceptionSelector(event, exceptSelectors)) return;
		onDismiss("outside", event);
	};
	const dismissEscape = (event) => {
		if (disposed || !closeOnEscape || event.key !== "Escape") return;
		onDismiss("escape", event);
	};
	const options = {
		capture,
		passive: false
	};
	const unbinders = [...closeEvents.map((type) => lazyAddEventListener(root, type, dismissOutside, options)), ...closeOnEscape ? [lazyAddEventListener(root, "keydown", dismissEscape, options)] : []];
	return () => {
		if (disposed) return;
		disposed = true;
		unbinders.forEach((unbind) => unbind());
	};
};
function makeClickOutsideTrigger(ref, except = null, element, options = {}) {
	const { root = typeof document != "undefined" ? document?.documentElement : null, closeEvents = [
		"scroll",
		"click",
		"pointerdown"
	], mouseLeaveDelay = 100 } = options;
	const wr = new WeakRef(ref);
	function onDisposeEvent(ev) {
		if (!isInside(ev, element?.element ?? element) && !isInside(ev, except?.element ?? except)) $set(wr, "value", false);
	}
	function onPointerDown(ev) {
		const t = ev;
		if (!isInside(t, element?.element ?? element) && !isInside(t, except?.element ?? except)) $set(wr, "value", false);
	}
	const listening = [...addEvents(root, Object.fromEntries(closeEvents.map((event) => [event, onDisposeEvent]))), addEvent(root, "pointerdown", onPointerDown)];
	if (element) {}
	function destroy() {
		listening.forEach((ub) => ub?.());
	}
	addToCallChain(ref, Symbol.dispose, destroy);
	return ref;
}
var OOBTrigger = (element, ref, selector, root = typeof document != "undefined" ? document?.documentElement : null) => {
	ref = toRef$1(ref);
	const checker = (ev) => {
		let $ref = unref(ref);
		const target = selector ? ev?.target?.matches?.(selector) ? ev?.target : (ev?.target ?? root)?.querySelector?.(selector) : ev?.target;
		if (!target || element != target) $ref.value = false;
	};
	const cancel = () => {
		root?.removeEventListener?.("click", checker);
	};
	if (root) root.addEventListener?.("click", checker);
	return cancel;
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/controllers/PointerAPI.ts
/**
* Pointer helpers for orient-aware UIs. For launcher / speed-dial grids (cell hit-test, placement),
* use `fest/dom` `resolveGridCellFromClientPoint` + Veela `compute_grid_item_cell` / `.ui-launcher-grid`.
*/
var DecorWith = class {
	#addition;
	constructor(addition) {
		this.#addition = addition;
	}
	get(target, name) {
		return withCtx(this.#addition, this.#addition?.[name]) ?? withCtx(target, target?.[name]);
	}
	set(target, name, val) {
		if (!Reflect.set(target, name, val)) this.#addition[name] = val;
		return true;
	}
	ownKeys(target) {
		return [...Reflect.ownKeys(target) ?? [], ...Reflect.ownKeys(this.#addition) ?? []];
	}
	getOwnPropertyDescriptor(target, name) {
		return Reflect.getOwnPropertyDescriptor(target, name) ?? Reflect.getOwnPropertyDescriptor(this.#addition, name);
	}
	getPrototypeOf(target) {
		return Reflect.getPrototypeOf(target) ?? Reflect.getPrototypeOf(this.#addition);
	}
	setPrototypeOf(target, proto) {
		return Reflect.setPrototypeOf(target, proto) ?? Reflect.setPrototypeOf(this.#addition, proto);
	}
	isExtensible(target) {
		return Reflect.isExtensible(target) ?? Reflect.isExtensible(this.#addition);
	}
	preventExtensions(target) {
		return Reflect.preventExtensions(target) ?? Reflect.preventExtensions(this.#addition);
	}
	defineProperty(target, name, desc) {
		return Reflect.defineProperty(this.#addition, name, desc) ?? Reflect.defineProperty(target, name, desc);
	}
	deleteProperty(target, name) {
		return Reflect.deleteProperty(this.#addition, name) ?? Reflect.deleteProperty(target, name);
	}
};
var elementPointerMap = /* @__PURE__ */ new WeakMap();
var agWrapEvent = (cb) => {
	const wpb = (ev) => {
		const el = (ev?.target?.matches?.(".ui-orientbox") ? ev?.target : null) || ev?.target?.closest?.(".ui-orientbox");
		if (!el) return cb(ev);
		let { pointerCache, pointerMap } = elementPointerMap?.getOrInsert?.(el, {
			pointerCache: /* @__PURE__ */ new Map(),
			pointerMap: /* @__PURE__ */ new Map()
		});
		const coord = [ev?.clientX || 0, ev?.clientY || 0];
		const cache = pointerCache?.getOrInsert?.(ev?.pointerId || 0, {
			client: coord,
			orient: null,
			boundingBox: null,
			movement: vector2Ref(0, 0)
		});
		cache.delta = [coord[0] - cache.client[0], coord[1] - cache.client[1]];
		cache.movement.x.value = cache.delta[0];
		cache.movement.y.value = cache.delta[1];
		cache.orient = null, cache.client = coord;
		const pointer = pointerMap?.getOrInsert?.(ev?.pointerId || 0, {
			type: ev?.type || "pointer",
			event: ev,
			target: ev?.target || el,
			cs_box: [el?.offsetWidth || 1, el?.offsetHeight || 1],
			cap_element: null,
			get client() {
				return cache.client;
			},
			get orient() {
				return cache.orient ??= cvt_cs_to_os([...pointer.client || cache.client], [el?.offsetWidth || 1, el?.offsetHeight || 1], orientOf(ev.target || el) || 0);
			},
			get movement() {
				return [cache.movement.x.value, cache.movement.y.value];
			},
			get boundingBox() {
				return cache.boundingBox ??= getBoundingOrientRect(ev?.target || el, orientOf(ev.target || el) || 0);
			},
			capture(element = ev?.target || el) {
				return pointer.cap_element = element?.setPointerCapture?.(ev?.pointerId || 0);
			},
			release(element = null) {
				(element || pointer.cap_element || ev?.target || el)?.releasePointerCapture?.(ev?.pointerId || 0);
				pointer.cap_element = null;
			}
		});
		Object.assign(pointer, {
			type: ev?.type || "pointer",
			event: ev,
			target: ev?.target || el,
			cs_box: [el?.offsetWidth || 1, el?.offsetHeight || 1],
			pointerId: ev?.pointerId || 0
		});
		if (ev?.type == "contextmenu" || ev?.type == "click" || ev?.type == "pointerup" || ev?.type == "pointercancel") {
			pointerMap?.delete?.(ev?.pointerId || 0);
			pointerCache?.delete?.(ev?.pointerId || 0);
			if (ev?.type == "pointercancel") pointer?.release?.();
		}
		if (pointer && ev) return cb(new Proxy(ev, new DecorWith(pointer)));
	};
	return wpb;
};
var preventedPointers = /* @__PURE__ */ new Map();
var clickPrevention = (element, pointerId = 0) => {
	if (preventedPointers.has(pointerId)) return;
	const rmev = () => {
		preventedPointers.delete(pointerId);
		dce?.forEach?.((unbind) => unbind?.());
		ece?.forEach?.((unbind) => unbind?.());
	};
	const preventClick = (e) => {
		if (e?.pointerId == pointerId || e?.pointerId == null || pointerId == null || pointerId < 0) {
			e.preventDefault();
			preventedPointers.set(pointerId, true);
			rmev();
		} else preventedPointers.delete(pointerId);
	};
	const emt = [preventClick, { once: true }];
	const doc = [preventClick, {
		once: true,
		capture: true
	}];
	const dce = addEvents(document.documentElement, {
		"click": doc,
		"pointerdown": doc,
		"contextmenu": doc
	});
	const ece = addEvents(element, {
		"click": emt,
		"pointerdown": emt,
		"contextmenu": emt
	});
	setTimeout(rmev, 10);
};
var PointerEventDrag = null;
if (typeof PointerEvent != "undefined") PointerEventDrag = class PointerEventDrag extends PointerEvent {
	#holding;
	constructor(type, eventInitDict) {
		super(type, eventInitDict);
		this.#holding = eventInitDict?.holding;
	}
	get holding() {
		return this.#holding;
	}
	get event() {
		return this.#holding?.event;
	}
	get result() {
		return this.#holding?.result;
	}
	get shifting() {
		return this.#holding?.shifting;
	}
	get modified() {
		return this.#holding?.modified;
	}
	get canceled() {
		return this.#holding?.canceled;
	}
	get duration() {
		return this.#holding?.duration;
	}
	get element() {
		return this.#holding?.element?.deref?.() ?? null;
	}
	get propertyName() {
		return this.#holding?.propertyName ?? "drag";
	}
};
else PointerEventDrag = class PointerEventDrag {
	#holding;
	constructor(type, eventInitDict) {
		this.#holding = eventInitDict?.holding;
	}
	get holding() {
		return this.#holding;
	}
};
var draggingPointerMap = /* @__PURE__ */ new WeakMap();
var grabForDrag = (em, ex = {
	pointerId: 0,
	pointerType: "mouse"
}, { shifting = [0, 0], result = [{ value: 0 }, { value: 0 }] } = {}) => {
	let frameTime = .01, lastLoop = performance.now(), thisLoop;
	const filterStrength = 100;
	const computeDuration = () => {
		var thisFrameTime = (thisLoop = performance.now()) - lastLoop;
		frameTime += (thisFrameTime - frameTime) / filterStrength;
		lastLoop = thisLoop;
		return frameTime;
	};
	const hm = {
		result,
		movement: [...ex?.movement || [0, 0]],
		shifting: [...shifting],
		modified: [...shifting],
		canceled: false,
		duration: frameTime,
		element: new WeakRef(em),
		client: null
	};
	const moveEvent = [((evc) => {
		if (ex?.pointerId == evc?.pointerId) {
			evc?.preventDefault?.();
			const client = [...evc?.client || [evc?.clientX || 0, evc?.clientY || 0]];
			hm.duration = computeDuration();
			hm.movement = [...hm.client ? [client?.[0] - (hm.client?.[0] || 0), client?.[1] - (hm.client?.[1] || 0)] : [0, 0]];
			hm.client = client;
			hm.shifting[0] += hm.movement[0] || 0, hm.shifting[1] += hm.movement[1] || 0;
			hm.modified[0] = (hm.shifting[0] ?? hm.modified[0]) || 0, hm.modified[1] = (hm.shifting[1] ?? hm.modified[1]) || 0;
			em?.dispatchEvent?.(new PointerEventDrag("m-dragging", {
				...evc,
				bubbles: true,
				holding: hm,
				event: evc
			}));
			if (hm?.result?.[0] != null) hm.result[0].value = hm.modified[0] || 0;
			if (hm?.result?.[1] != null) hm.result[1].value = hm.modified[1] || 0;
			if (hm?.result?.[2] != null) hm.result[2].value = 0;
		}
	}), { capture: true }];
	const promised = Promise.withResolvers();
	const releaseEvent = [((evc) => {
		if (ex?.pointerId == evc?.pointerId) {
			const elm = em?.element || em;
			if (evc?.type == "pointerup") clickPrevention(elm, evc?.pointerId);
			queueMicrotask(() => promised?.resolve?.(result));
			bindings?.forEach?.((binding) => binding?.());
			try {
				elm?.releasePointerCapture?.(evc?.pointerId);
			} catch {}
			try {
				elm?.releaseCapturePointer?.(evc?.pointerId);
			} catch {}
			hm.canceled = evc?.type == "pointercancel";
			elm?.dispatchEvent?.(new PointerEventDrag("m-dragend", {
				...evc,
				bubbles: true,
				holding: hm,
				event: evc
			}));
			try {
				ex.pointerId = -1;
			} catch (_) {}
		}
	}), { capture: true }];
	let bindings = null;
	clickPrevention(em, ex?.pointerId);
	queueMicrotask(() => {
		if (em?.dispatchEvent?.(new PointerEventDrag("m-dragstart", {
			...ex,
			bubbles: true,
			holding: hm,
			event: ex
		}))) {
			em?.setPointerCapture?.(ex?.pointerId);
			bindings = addEvents(em, {
				"pointermove": moveEvent,
				"pointercancel": releaseEvent,
				"pointerup": releaseEvent
			});
			bindings?.push?.(...addEvents(document.documentElement, {
				"pointercancel": releaseEvent,
				"pointerup": releaseEvent
			}));
		} else hm.canceled = true;
	});
	return promised?.promise ?? result;
};
var bindDraggable = (elementOrEventListener, onEnd = () => {}, draggable = [{ value: 0 }, { value: 0 }], shifting = [0, 0]) => {
	if (!draggable) return;
	const process = (ev, el) => grabForDrag(el ?? elementOrEventListener, ev, {
		result: draggable,
		shifting: typeof shifting == "function" ? shifting?.(draggable) : shifting
	})?.then?.(onEnd);
	if (typeof elementOrEventListener?.addEventListener == "function") addEvent(elementOrEventListener, "pointerdown", process);
	else if (typeof elementOrEventListener == "function") elementOrEventListener(process);
	else throw new Error("bindDraggable: elementOrEventListener is not a function or an object with addEventListener");
	const dispose = () => {
		if (typeof elementOrEventListener?.removeEventListener == "function") removeEvent(elementOrEventListener, "pointerdown", process);
	};
	return {
		draggable,
		dispose,
		process
	};
};
//#endregion
//#region ../../modules/projects/lur.e/src/utils/math/GridMath.ts
/**
* Grid coordinate utilities
*/
var GridCoordUtils = class GridCoordUtils {
	static create(row = 0, col = 0) {
		return {
			row: numberRef(row),
			col: numberRef(col)
		};
	}
	static toPixel(coord, config) {
		return operated([
			coord.row,
			coord.col,
			config.cellWidth,
			config.cellHeight,
			config.gap,
			config.padding.x,
			config.padding.y
		], () => {
			return vector2Ref(config.padding.x.value + coord.col.value * (config.cellWidth.value + config.gap.value), config.padding.y.value + coord.row.value * (config.cellHeight.value + config.gap.value));
		});
	}
	static fromPixel(pixel, config) {
		const coord = operated([
			pixel.x,
			pixel.y,
			config.cellWidth,
			config.cellHeight,
			config.gap,
			config.padding.x,
			config.padding.y
		], () => {
			const col = Math.floor((pixel.x.value - config.padding.x.value) / (config.cellWidth.value + config.gap.value));
			const row = Math.floor((pixel.y.value - config.padding.y.value) / (config.cellHeight.value + config.gap.value));
			return GridCoordUtils.create(row, col);
		});
		return {
			row: operated([coord], () => coord.value.row.value),
			col: operated([coord], () => coord.value.col.value)
		};
	}
	static snapToGrid(pixel, config) {
		const gridCoord = this.fromPixel(pixel, config);
		return this.toPixel(gridCoord, config);
	}
	static snapToCellCenter(pixel, config) {
		const gridCoord = this.fromPixel(pixel, config);
		const cellTopLeft = this.toPixel(gridCoord, config);
		return operated([
			cellTopLeft.x,
			cellTopLeft.y,
			config.cellWidth,
			config.cellHeight
		], () => {
			return vector2Ref(cellTopLeft.x.value + config.cellWidth.value / 2, cellTopLeft.y.value + config.cellHeight.value / 2);
		});
	}
	static adjacent(coord, direction) {
		const delta = {
			up: {
				row: -1,
				col: 0
			},
			down: {
				row: 1,
				col: 0
			},
			left: {
				row: 0,
				col: -1
			},
			right: {
				row: 0,
				col: 1
			}
		}[direction];
		return {
			row: operated([coord.row], () => coord.row.value + delta.row),
			col: operated([coord.col], () => coord.col.value + delta.col)
		};
	}
	static isValid(coord, config) {
		return operated([
			coord.row,
			coord.col,
			config.rows,
			config.cols
		], () => coord.row.value >= 0 && coord.row.value < config.rows.value && coord.col.value >= 0 && coord.col.value < config.cols.value);
	}
	static manhattanDistance(a, b) {
		return operated([
			a.row,
			a.col,
			b.row,
			b.col
		], () => Math.abs(a.row.value - b.row.value) + Math.abs(a.col.value - b.col.value));
	}
	static euclideanDistance(a, b) {
		return operated([
			a.row,
			a.col,
			b.row,
			b.col
		], () => Math.sqrt(Math.pow(a.row.value - b.row.value, 2) + Math.pow(a.col.value - b.col.value, 2)));
	}
};
/**
* Grid cell utilities with span support
*/
var GridCellUtils = class {
	static create(row = 0, col = 0, rowSpan = 1, colSpan = 1) {
		return {
			row: numberRef(row),
			col: numberRef(col),
			rowSpan: numberRef(rowSpan),
			colSpan: numberRef(colSpan)
		};
	}
	static toRect(cell, config) {
		const topLeft = GridCoordUtils.toPixel(cell, config);
		const width = operated([
			cell.colSpan,
			config.cellWidth,
			config.gap
		], () => cell.colSpan.value * config.cellWidth.value + (cell.colSpan.value - 1) * config.gap.value);
		const height = operated([
			cell.rowSpan,
			config.cellHeight,
			config.gap
		], () => cell.rowSpan.value * config.cellHeight.value + (cell.rowSpan.value - 1) * config.gap.value);
		return createRect2D(topLeft.x, topLeft.y, width, height);
	}
	static getCenter(cell, config) {
		const rect = this.toRect(cell, config);
		return operated([
			rect.position.x,
			rect.position.y,
			rect.size.x,
			rect.size.y
		], () => vector2Ref(rect.position.x.value + rect.size.x.value / 2, rect.position.y.value + rect.size.y.value / 2));
	}
	static overlaps(a, b) {
		return operated([
			a.row,
			a.col,
			a.rowSpan,
			a.colSpan,
			b.row,
			b.col,
			b.rowSpan,
			b.colSpan
		], () => {
			const aRight = a.col.value + a.colSpan.value;
			const aBottom = a.row.value + a.rowSpan.value;
			const bRight = b.col.value + b.colSpan.value;
			const bBottom = b.row.value + b.rowSpan.value;
			return !(a.col.value >= bRight || aRight <= b.col.value || a.row.value >= bBottom || aBottom <= b.row.value);
		});
	}
	static getOccupiedCells(cell) {
		const cells = [];
		for (let r = 0; r < cell.rowSpan.value; r++) for (let c = 0; c < cell.colSpan.value; c++) cells.push(GridCoordUtils.create(cell.row.value + r, cell.col.value + c));
		return cells;
	}
};
/**
* Grid layout algorithms
*/
var GridLayoutUtils = class {
	static fitCells(cells, config) {
		const placed = [];
		const occupied = /* @__PURE__ */ new Set();
		cells.forEach((cell) => {
			let placedCell = { ...cell };
			for (let row = 0; row < config.rows.value; row++) for (let col = 0; col < config.cols.value; col++) {
				placedCell.row = numberRef(row);
				placedCell.col = numberRef(col);
				if (this.canPlaceCell(placedCell, occupied, config)) {
					this.markOccupied(placedCell, occupied);
					placed.push(placedCell);
					return;
				}
			}
			placed.push(placedCell);
		});
		return placed;
	}
	static canPlaceCell(cell, occupied, config) {
		if (!GridCoordUtils.isValid(cell, config).value) return false;
		return !GridCellUtils.getOccupiedCells(cell).some((coord) => occupied.has(`${coord.row.value},${coord.col.value}`));
	}
	static markOccupied(cell, occupied) {
		GridCellUtils.getOccupiedCells(cell).forEach((coord) => {
			occupied.add(`${coord.row.value},${coord.col.value}`);
		});
	}
	static calculateOptimalSize(cells) {
		let maxRow = 0, maxCol = 0;
		cells.forEach((cell) => {
			maxRow = Math.max(maxRow, cell.row.value + cell.rowSpan.value);
			maxCol = Math.max(maxCol, cell.col.value + cell.colSpan.value);
		});
		return {
			rows: maxRow,
			cols: maxCol
		};
	}
	static redistributeCells(cells, config, algorithm = "row-major") {
		const redistributed = [];
		let currentRow = 0, currentCol = 0;
		cells.forEach((cell, index) => {
			switch (algorithm) {
				case "row-major":
					if (currentCol + cell.colSpan.value > config.cols.value) {
						currentRow++;
						currentCol = 0;
					}
					cell.row = numberRef(currentRow);
					cell.col = numberRef(currentCol);
					currentCol += cell.colSpan.value;
					break;
				case "column-major":
					if (currentRow + cell.rowSpan.value > config.rows.value) {
						currentCol++;
						currentRow = 0;
					}
					cell.row = numberRef(currentRow);
					cell.col = numberRef(currentCol);
					currentRow += cell.rowSpan.value;
					break;
				case "diagonal":
					cell.row = numberRef(Math.floor(index / Math.sqrt(cells.length)));
					cell.col = numberRef(index % Math.ceil(Math.sqrt(cells.length)));
					break;
			}
			redistributed.push(cell);
		});
		return redistributed;
	}
};
/**
* Grid animation and transition utilities
*/
var GridAnimationUtils = class GridAnimationUtils {
	static animateCellMovement(cell, targetCoord, config, duration = 300) {
		return new Promise((resolve) => {
			const startRow = cell.row.value;
			const startCol = cell.col.value;
			const endRow = targetCoord.row.value;
			const endCol = targetCoord.col.value;
			const startTime = performance.now();
			const animate = (currentTime) => {
				const elapsed = currentTime - startTime;
				const progress = Math.min(elapsed / duration, 1);
				const eased = 1 - Math.pow(1 - progress, 3);
				cell.row.value = startRow + (endRow - startRow) * eased;
				cell.col.value = startCol + (endCol - startCol) * eased;
				if (progress < 1) requestAnimationFrame(animate);
				else resolve();
			};
			requestAnimationFrame(animate);
		});
	}
	static animateCellResize(cell, targetRowSpan, targetColSpan, duration = 300) {
		return new Promise((resolve) => {
			const startRowSpan = cell.rowSpan.value;
			const startColSpan = cell.colSpan.value;
			const startTime = performance.now();
			const animate = (currentTime) => {
				const elapsed = currentTime - startTime;
				const progress = Math.min(elapsed / duration, 1);
				const eased = 1 - Math.pow(1 - progress, 3);
				cell.rowSpan.value = startRowSpan + (targetRowSpan - startRowSpan) * eased;
				cell.colSpan.value = startColSpan + (targetColSpan - startColSpan) * eased;
				if (progress < 1) requestAnimationFrame(animate);
				else resolve();
			};
			requestAnimationFrame(animate);
		});
	}
	static createAnimationChain(cell, config) {
		return {
			moveTo: (targetCoord, duration) => GridAnimationUtils.animateCellMovement(cell, targetCoord, config, duration),
			resizeTo: (rowSpan, colSpan, duration) => GridAnimationUtils.animateCellResize(cell, rowSpan, colSpan, duration),
			then: function(callback) {
				return this;
			}
		};
	}
};
/**
* Grid collision and interaction utilities
*/
var GridInteractionUtils = class {
	static getCellAtPixel(pixel, config) {
		return GridCoordUtils.fromPixel(pixel, config);
	}
	static getCellsInRect(rect, config) {
		const cells = [];
		const topLeft = GridCoordUtils.fromPixel(rect.position, config);
		const bottomRight = GridCoordUtils.fromPixel(addVector2D(rect.position, rect.size), config);
		for (let row = topLeft.row.value; row <= bottomRight.row.value; row++) for (let col = topLeft.col.value; col <= bottomRight.col.value; col++) if (row >= 0 && row < config.rows.value && col >= 0 && col < config.cols.value) cells.push(GridCoordUtils.create(row, col));
		return cells;
	}
	static wouldOverlap(cell, newCoord, existingCells) {
		const testCell = GridCellUtils.create(newCoord.row.value, newCoord.col.value, cell.rowSpan.value, cell.colSpan.value);
		return existingCells.some((otherCell) => otherCell !== cell && GridCellUtils.overlaps(testCell, otherCell).value);
	}
	static findValidPositions(cell, config, existingCells) {
		const validPositions = [];
		for (let row = 0; row < config.rows.value - cell.rowSpan.value + 1; row++) for (let col = 0; col < config.cols.value - cell.colSpan.value + 1; col++) {
			const testCoord = GridCoordUtils.create(row, col);
			if (!this.wouldOverlap(cell, testCoord, existingCells)) validPositions.push(testCoord);
		}
		return validPositions;
	}
	static calculateDragPreview(cell, dragPosition, config, existingCells) {
		const snappedCoord = GridCoordUtils.fromPixel(dragPosition, config);
		const clampedRow = Math.max(0, Math.min(snappedCoord.row.value, config.rows.value - cell.rowSpan.value));
		const clampedCol = Math.max(0, Math.min(snappedCoord.col.value, config.cols.value - cell.colSpan.value));
		const clampedCoord = GridCoordUtils.create(clampedRow, clampedCol);
		if (this.wouldOverlap(cell, clampedCoord, existingCells)) {
			const validPositions = this.findValidPositions(cell, config, existingCells);
			if (validPositions.length > 0) {
				let closest = validPositions[0];
				let minDistance = GridCoordUtils.euclideanDistance(clampedCoord, closest).value;
				validPositions.forEach((pos) => {
					const distance = GridCoordUtils.euclideanDistance(clampedCoord, pos).value;
					if (distance < minDistance) {
						minDistance = distance;
						closest = pos;
					}
				});
				return closest;
			}
		}
		return clampedCoord;
	}
};
var clampCell = (cellPos, layout) => {
	let x, y;
	if (cellPos instanceof Vector2D) {
		x = cellPos.x?.value ?? 0;
		y = cellPos.y?.value ?? 0;
	} else if (Array.isArray(cellPos) && cellPos.length >= 2) {
		x = cellPos[0] ?? 0;
		y = cellPos[1] ?? 0;
	} else return vector2Ref(0, 0);
	if (!isFinite(x) || !isFinite(y)) return vector2Ref(0, 0);
	const cols = Math.max(1, layout[0] || 1);
	const rows = Math.max(1, layout[1] || 1);
	return vector2Ref(Math.max(0, Math.min(Math.floor(x), cols - 1)), Math.max(0, Math.min(Math.floor(y), rows - 1)));
};
var floorCell = (cellPos, N = 1) => {
	const x = cellPos instanceof Vector2D ? cellPos.x.value : cellPos[0];
	const y = cellPos instanceof Vector2D ? cellPos.y.value : cellPos[1];
	return vector2Ref(Math.floor(x / N) * N, Math.floor(y / N) * N);
};
var ceilCell = (cellPos, N = 1) => {
	const x = cellPos instanceof Vector2D ? cellPos.x.value : cellPos[0];
	const y = cellPos instanceof Vector2D ? cellPos.y.value : cellPos[1];
	return vector2Ref(Math.ceil(x / N) * N, Math.ceil(y / N) * N);
};
var roundCell = (cellPos, N = 1) => {
	const x = cellPos instanceof Vector2D ? cellPos.x.value : cellPos[0];
	const y = cellPos instanceof Vector2D ? cellPos.y.value : cellPos[1];
	return vector2Ref(Math.round(x / N) * N, Math.round(y / N) * N);
};
var snapToGridCell = (cellPos, layout) => {
	const coord = cellPos instanceof Vector2D ? GridCoordUtils.create(cellPos.y.value, cellPos.x.value) : GridCoordUtils.create(cellPos[1], cellPos[0]);
	const config = {
		rows: numberRef(layout[1]),
		cols: numberRef(layout[0]),
		cellWidth: numberRef(1),
		cellHeight: numberRef(1),
		gap: numberRef(0),
		padding: vector2Ref(0, 0)
	};
	const validCoord = GridCoordUtils.create(Math.max(0, Math.min(coord.row.value, config.rows.value - 1)), Math.max(0, Math.min(coord.col.value, config.cols.value - 1)));
	return vector2Ref(validCoord.col.value, validCoord.row.value);
};
var getCellDistance = (cellA, cellB) => {
	const coordA = cellA instanceof Vector2D ? GridCoordUtils.create(cellA.y.value, cellA.x.value) : GridCoordUtils.create(cellA[1], cellA[0]);
	const coordB = cellB instanceof Vector2D ? GridCoordUtils.create(cellB.y.value, cellB.x.value) : GridCoordUtils.create(cellB[1], cellB[0]);
	return GridCoordUtils.manhattanDistance(coordA, coordB).value;
};
var getAdjacentCells = (cellPos, layout) => {
	const centerCoord = cellPos instanceof Vector2D ? GridCoordUtils.create(cellPos.y.value, cellPos.x.value) : GridCoordUtils.create(cellPos[1], cellPos[0]);
	const config = {
		rows: numberRef(layout[1]),
		cols: numberRef(layout[0]),
		cellWidth: numberRef(1),
		cellHeight: numberRef(1),
		gap: numberRef(0),
		padding: vector2Ref(0, 0)
	};
	const adjacent = [];
	for (const direction of [
		"up",
		"down",
		"left",
		"right"
	]) {
		const adjacentCoord = GridCoordUtils.adjacent(centerCoord, direction);
		if (GridCoordUtils.isValid(adjacentCoord, config).value) adjacent.push(vector2Ref(adjacentCoord.col.value, adjacentCoord.row.value));
	}
	return adjacent;
};
var getCellsInRange = (centerCell, radius, layout) => {
	const centerCoord = centerCell instanceof Vector2D ? GridCoordUtils.create(centerCell.y.value, centerCell.x.value) : GridCoordUtils.create(centerCell[1], centerCell[0]);
	numberRef(layout[1]), numberRef(layout[0]), numberRef(1), numberRef(1), numberRef(0), vector2Ref(0, 0);
	const cellsInRange = [];
	for (let row = Math.max(0, centerCoord.row.value - radius); row <= Math.min(layout[1] - 1, centerCoord.row.value + radius); row++) for (let col = Math.max(0, centerCoord.col.value - radius); col <= Math.min(layout[0] - 1, centerCoord.col.value + radius); col++) {
		const testCoord = GridCoordUtils.create(row, col);
		if (GridCoordUtils.manhattanDistance(centerCoord, testCoord).value <= radius) cellsInRange.push(vector2Ref(col, row));
	}
	return cellsInRange;
};
var findPathBetweenCells = (startCell, endCell, layout, obstacles = []) => {
	const startCoord = startCell instanceof Vector2D ? GridCoordUtils.create(startCell.y.value, startCell.x.value) : GridCoordUtils.create(startCell[1], startCell[0]);
	const endCoord = endCell instanceof Vector2D ? GridCoordUtils.create(endCell.y.value, endCell.x.value) : GridCoordUtils.create(endCell[1], endCell[0]);
	const obstacleSet = new Set(obstacles.map((obs) => {
		const coord = obs instanceof Vector2D ? GridCoordUtils.create(obs.y.value, obs.x.value) : GridCoordUtils.create(obs[1], obs[0]);
		return `${coord.row.value},${coord.col.value}`;
	}));
	const config = {
		rows: numberRef(layout[1]),
		cols: numberRef(layout[0]),
		cellWidth: numberRef(1),
		cellHeight: numberRef(1),
		gap: numberRef(0),
		padding: vector2Ref(0, 0)
	};
	const openSet = /* @__PURE__ */ new Map();
	const closedSet = /* @__PURE__ */ new Set();
	const startKey = `${startCoord.row.value},${startCoord.col.value}`;
	openSet.set(startKey, {
		coord: startCoord,
		f: GridCoordUtils.manhattanDistance(startCoord, endCoord).value,
		g: 0,
		parent: null
	});
	while (openSet.size > 0) {
		let currentKey = "";
		let lowestF = Infinity;
		for (const [key, node] of openSet) if (node.f < lowestF) {
			lowestF = node.f;
			currentKey = key;
		}
		const current = openSet.get(currentKey);
		openSet.delete(currentKey);
		closedSet.add(currentKey);
		if (current.coord.row.value === endCoord.row.value && current.coord.col.value === endCoord.col.value) {
			const path = [];
			let node = current;
			while (node) {
				path.unshift(vector2Ref(node.coord.col.value, node.coord.row.value));
				if (!node.parent) break;
				const parentKey = `${node.parent.row.value},${node.parent.col.value}`;
				node = openSet.get(parentKey) || null;
			}
			return path;
		}
		for (const direction of [
			"up",
			"down",
			"left",
			"right"
		]) {
			const neighborCoord = GridCoordUtils.adjacent(current.coord, direction);
			const neighborKey = `${neighborCoord.row.value},${neighborCoord.col.value}`;
			if (!GridCoordUtils.isValid(neighborCoord, config).value || closedSet.has(neighborKey) || obstacleSet.has(neighborKey)) continue;
			const gScore = current.g + 1;
			const fScore = gScore + GridCoordUtils.manhattanDistance(neighborCoord, endCoord).value;
			const existing = openSet.get(neighborKey);
			if (!existing || gScore < existing.g) openSet.set(neighborKey, {
				coord: neighborCoord,
				f: fScore,
				g: gScore,
				parent: current.coord
			});
		}
	}
	return [];
};
var checkCellCollision = (cellA, cellB, cellSizeA = [1, 1], cellSizeB = [1, 1]) => {
	const coordA = cellA instanceof Vector2D ? GridCoordUtils.create(cellA.y.value, cellA.x.value) : GridCoordUtils.create(cellA[1], cellA[0]);
	const coordB = cellB instanceof Vector2D ? GridCoordUtils.create(cellB.y.value, cellB.x.value) : GridCoordUtils.create(cellB[1], cellB[0]);
	const gridCellA = GridCellUtils.create(coordA.row.value, coordA.col.value, cellSizeA[1], cellSizeA[0]);
	const gridCellB = GridCellUtils.create(coordB.row.value, coordB.col.value, cellSizeB[1], cellSizeB[0]);
	return GridCellUtils.overlaps(gridCellA, gridCellB).value;
};
var optimizeCellLayout = (cells, layout) => {
	const config = {
		rows: numberRef(layout[1]),
		cols: numberRef(layout[0]),
		cellWidth: numberRef(1),
		cellHeight: numberRef(1),
		gap: numberRef(0),
		padding: vector2Ref(0, 0)
	};
	const gridCells = cells.map((cell, index) => {
		const coord = cell.pos instanceof Vector2D ? GridCoordUtils.create(cell.pos.y.value, cell.pos.x.value) : GridCoordUtils.create(cell.pos[1], cell.pos[0]);
		return GridCellUtils.create(coord.row.value, coord.col.value, cell.size[1], cell.size[0]);
	});
	return GridLayoutUtils.fitCells(gridCells, config).map((fittedCell, index) => ({
		pos: vector2Ref(fittedCell.col.value, fittedCell.row.value),
		size: [fittedCell.colSpan.value, fittedCell.rowSpan.value]
	}));
};
//#endregion
//#region ../../modules/projects/lur.e/src/design/anchor/CSSAdapter.ts
var CSSUnitConverter = class {
	static unitPatterns = {
		px: /(-?\d*\.?\d+)px/g,
		em: /(-?\d*\.?\d+)em/g,
		rem: /(-?\d*\.?\d+)rem/g,
		vh: /(-?\d*\.?\d+)vh/g,
		vw: /(-?\d*\.?\d+)vw/g,
		vmin: /(-?\d*\.?\d+)vmin/g,
		vmax: /(-?\d*\.?\d+)vmax/g,
		percent: /(-?\d*\.?\d+)%/g
	};
	static toPixels(value, element) {
		if (!value) return 0;
		const testElement = element || document.body;
		const testDiv = document.createElement("div");
		testDiv.style.position = "absolute";
		testDiv.style.visibility = "hidden";
		testDiv.style.width = value;
		testElement.appendChild(testDiv);
		const pixels = testDiv.offsetWidth;
		testElement.removeChild(testDiv);
		return pixels;
	}
	static fromPixels(pixels, unit = "px") {
		switch (unit) {
			case "em": return `${pixels / parseFloat(getComputedStyle(document.body).fontSize)}em`;
			case "rem": return `${pixels / parseFloat(getComputedStyle(document.documentElement).fontSize)}rem`;
			case "%": return `${pixels / globalThis.innerWidth * 100}%`;
			default: return `${pixels}px`;
		}
	}
	static parseValue(cssValue) {
		const match = cssValue.match(/^(-?\d*\.?\d+)([a-z%]+)?$/);
		if (!match) return {
			value: 0,
			unit: "px"
		};
		return {
			value: parseFloat(match[1]),
			unit: match[2] || "px"
		};
	}
	static convertUnits(value, fromUnit, toUnit, element) {
		if (fromUnit === toUnit) return value;
		let pixels;
		switch (fromUnit) {
			case "px":
				pixels = value;
				break;
			case "em":
				pixels = value * parseFloat(getComputedStyle(element || document.body).fontSize);
				break;
			case "rem":
				pixels = value * parseFloat(getComputedStyle(document.documentElement).fontSize);
				break;
			case "%":
				pixels = value / 100 * globalThis.innerWidth;
				break;
			case "vw":
				pixels = value / 100 * globalThis.innerWidth;
				break;
			case "vh":
				pixels = value / 100 * globalThis.innerHeight;
				break;
			default: pixels = value;
		}
		switch (toUnit) {
			case "px": return pixels;
			case "em":
				const fontSize = parseFloat(getComputedStyle(element || document.body).fontSize);
				return pixels / fontSize;
			case "rem":
				const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
				return pixels / rootFontSize;
			case "%": return pixels / globalThis.innerWidth * 100;
			case "vw": return pixels / globalThis.innerWidth * 100;
			case "vh": return pixels / globalThis.innerHeight * 100;
			default: return pixels;
		}
	}
};
var CSSTransform = class {
	static translate2D(vector) {
		return operated([vector.x, vector.y], () => `translate(${vector.x.value}px, ${vector.y.value}px)`);
	}
	static translate3D(vector, z = numberRef(0)) {
		return operated([
			vector.x,
			vector.y,
			z
		], () => `translate3d(${vector.x.value}px, ${vector.y.value}px, ${z.value}px)`);
	}
	static scale2D(vector) {
		return operated([vector.x, vector.y], () => `scale(${vector.x.value}, ${vector.y.value})`);
	}
	static rotate(angle) {
		return operated([angle], () => `rotate(${angle.value}deg)`);
	}
	static combine(transforms) {
		return operated(transforms, () => transforms.map((t) => t.value).join(" "));
	}
	static matrix2D(matrix) {
		return operated(matrix.elements, () => `matrix(${matrix.elements.map((e) => e.value).join(", ")})`);
	}
	static matrix3D(matrix) {
		return operated(matrix.elements, () => `matrix3d(${matrix.elements.map((e) => e.value).join(", ")})`);
	}
};
var CSSPosition = class {
	static leftTop(vector) {
		return {
			left: operated([vector.x], () => `${vector.x.value}px`),
			top: operated([vector.y], () => `${vector.y.value}px`)
		};
	}
	static inset(vector) {
		return { inset: operated([vector.x, vector.y], () => `${vector.y.value}px ${vector.x.value}px`) };
	}
	static size(vector) {
		return {
			width: operated([vector.x], () => `${vector.x.value}px`),
			height: operated([vector.y], () => `${vector.y.value}px`)
		};
	}
};
var CSSBinder = class {
	static bindTransform(element, vector, animationType = "instant", options) {
		const transformValue = CSSTransform.translate2D(vector);
		return (animationType === "instant" ? bindWith : animationType === "animate" ? bindAnimated : animationType === "transition" ? bindTransition : bindSpring)(element, "transform", transformValue, options) ?? (() => {});
	}
	static bindPosition(element, vector, animationType = "instant", options) {
		const position = CSSPosition.leftTop(vector);
		const binder = animationType === "instant" ? bindWith : animationType === "animate" ? bindAnimated : animationType === "transition" ? bindTransition : bindSpring;
		const unsubLeft = binder(element, "left", position.left, options) ?? (() => {});
		const unsubTop = binder(element, "top", position.top, options) ?? (() => {});
		return () => {
			unsubLeft?.();
			unsubTop?.();
		};
	}
	static bindSize(element, vector, animationType = "instant", options) {
		const size = CSSPosition.size(vector);
		const binder = animationType === "instant" ? bindWith : animationType === "animate" ? bindAnimated : animationType === "transition" ? bindTransition : bindSpring;
		const unsubWidth = binder(element, "width", size.width, options) ?? (() => {});
		const unsubHeight = binder(element, "height", size.height, options) ?? (() => {});
		return () => {
			unsubWidth?.();
			unsubHeight?.();
		};
	}
	static bindWithUnit(element, property, value, unit = "px", animationType = "instant", options) {
		const cssValue = operated([value], () => `${value.value}${unit}`);
		return (animationType === "instant" ? bindWith : animationType === "animate" ? bindAnimated : animationType === "transition" ? bindTransition : bindSpring)(element, property, cssValue, options) ?? (() => {});
	}
	static bindVectorWithUnit(element, vector, unit = "px", animationType = "instant", options) {
		const cssValue = operated([vector.x, vector.y], () => `${vector.x.value}${unit} ${vector.y.value}${unit}`);
		return (animationType === "instant" ? bindWith : animationType === "animate" ? bindAnimated : animationType === "transition" ? bindTransition : bindSpring)(element, "transform", cssValue, {
			...options,
			handler: animationType === "instant" ? void 0 : (el, val) => {
				el.style.setProperty("transform", `translate(${val})`);
			}
		}) ?? (() => {});
	}
	static bindTransformMorph(element, transformProps, options = {}) {
		const transforms = {};
		if (transformProps.translate) transforms.transform = operated([transformProps.translate.x, transformProps.translate.y], () => `translate(${transformProps.translate.x.value}px, ${transformProps.translate.y.value}px)`);
		if (transformProps.scale) {
			const scaleStr = transformProps.scale instanceof Vector2D ? operated([transformProps.scale.x, transformProps.scale.y], () => `scale(${transformProps.scale.x.value}, ${transformProps.scale.y.value})`) : operated([transformProps.scale], () => `scale(${transformProps.scale.value})`);
			transforms.transform = transforms.transform ? operated([transforms.transform, scaleStr], (t, s) => `${t} ${s}`) : scaleStr;
		}
		if (transformProps.rotate) {
			const rotateStr = operated([transformProps.rotate], () => `rotate(${transformProps.rotate.value}deg)`);
			transforms.transform = transforms.transform ? operated([transforms.transform, rotateStr], (t, r) => `${t} ${r}`) : rotateStr;
		}
		if (transformProps.skew) {
			const skewStr = operated([transformProps.skew.x, transformProps.skew.y], () => `skew(${transformProps.skew.x.value}deg, ${transformProps.skew.y.value}deg)`);
			transforms.transform = transforms.transform ? operated([transforms.transform, skewStr], (t, s) => `${t} ${s}`) : skewStr;
		}
		return bindMorph(element, transforms, options);
	}
	static bindColor(element, property, color, animationType = "transition", options = {
		duration: 300,
		easing: "ease-in-out"
	}) {
		return (animationType === "instant" ? bindWith : animationType === "animate" ? bindAnimated : bindTransition)(element, property, typeof color === "string" ? color : operated([color], () => `hsl(${color.value}, 70%, 50%)`), options) ?? (() => {});
	}
	static bindOpacity(element, opacity, animationType = "transition", options = {
		duration: 200,
		easing: "ease-in-out"
	}) {
		return (animationType === "instant" ? bindWith : animationType === "animate" ? bindAnimated : animationType === "transition" ? bindTransition : bindSpring)(element, "opacity", opacity, options) ?? (() => {});
	}
	static bindBorderRadius(element, radius, animationType = "animate", options = {
		duration: 300,
		easing: "ease-out"
	}) {
		return (animationType === "instant" ? bindWith : animationType === "animate" ? bindAnimated : animationType === "transition" ? bindTransition : bindSpring)(element, "border-radius", radius instanceof Vector2D ? operated([radius.x, radius.y], () => `${radius.x.value}px ${radius.y.value}px`) : operated([radius], () => `${radius.value}px`), options) ?? (() => {});
	}
};
var CSSCalc = class {
	static add(a, b, unit = "px") {
		return operated([a, b], () => `calc(${a.value}${unit} + ${b.value}${unit})`);
	}
	static subtract(a, b, unit = "px") {
		return operated([a, b], () => `calc(${a.value}${unit} - ${b.value}${unit})`);
	}
	static multiply(a, b) {
		return operated([a, b], () => `calc(${a.value} * ${b.value})`);
	}
	static divide(a, b) {
		return operated([a, b], () => `calc(${a.value} / ${b.value})`);
	}
	static clamp(value, min, max, unit = "px") {
		return operated([
			value,
			min,
			max
		], () => `clamp(${min.value}${unit}, ${value.value}${unit}, ${max.value}${unit})`);
	}
	static min(a, b, unit = "px") {
		return operated([a, b], () => `min(${a.value}${unit}, ${b.value}${unit})`);
	}
	static max(a, b, unit = "px") {
		return operated([a, b], () => `max(${a.value}${unit}, ${b.value}${unit})`);
	}
};
var DOMMatrixAdapter = class {
	static toDOMMatrix(matrix) {
		return new DOMMatrix(matrix.elements.map((e) => e.value));
	}
	static fromDOMMatrix(domMatrix) {
		const elements = Array.from(domMatrix.toFloat32Array()).map((v) => numberRef(v));
		return new Matrix4D(elements[0], elements[1], elements[2], elements[3], elements[4], elements[5], elements[6], elements[7], elements[8], elements[9], elements[10], elements[11], elements[12], elements[13], elements[14], elements[15]);
	}
	static applyTransform(domMatrix, transform) {
		this.fromDOMMatrix(domMatrix);
		return domMatrix.multiplySelf(this.toDOMMatrix(transform));
	}
};
var CSSCustomProps = class {
	static bindProperty(element, propName, value, unit = "") {
		return operated([value], () => {
			element.style.setProperty(propName, `${value.value}${unit}`);
			return () => {};
		});
	}
	static bindVectorProperties(element, baseName, vector, unit = "px") {
		const unsubX = this.bindProperty(element, `${baseName}-x`, vector.x, unit);
		const unsubY = this.bindProperty(element, `${baseName}-y`, vector.y, unit);
		return () => {
			unsubX();
			unsubY();
		};
	}
	static getReactiveProperty(element, propName) {
		const reactiveValue = numberRef(parseFloat(getComputedStyle(element).getPropertyValue(propName)) || 0);
		new MutationObserver(() => {
			const newValue = parseFloat(getComputedStyle(element).getPropertyValue(propName)) || 0;
			reactiveValue.value = newValue;
		}).observe(element, {
			attributes: true,
			attributeFilter: ["style"]
		});
		return reactiveValue;
	}
};
var CSSUnitUtils = class {
	static asPx(value) {
		if (typeof value === "number") return `${value || 0}px`;
		if (typeof value === "string") return value || "0px";
		return operated([value], (v) => `${v || 0}px`);
	}
	static asPercent(value) {
		if (typeof value === "number") return `${value || 0}%`;
		if (typeof value === "string") return value || "0%";
		return operated([value], (v) => `${v || 0}%`);
	}
	static asEm(value) {
		if (typeof value === "number") return `${value || 0}em`;
		if (typeof value === "string") return value || "0em";
		return operated([value], (v) => `${v || 0}em`);
	}
	static asRem(value) {
		if (typeof value === "number") return `${value || 0}rem`;
		if (typeof value === "string") return value || "0rem";
		return operated([value], (v) => `${v || 0}rem`);
	}
	static asVw(value) {
		if (typeof value === "number") return `${value || 0}vw`;
		if (typeof value === "string") return value || "0vw";
		return operated([value], (v) => `${v || 0}vw`);
	}
	static asVh(value) {
		if (typeof value === "number") return `${value || 0}vh`;
		if (typeof value === "string") return value || "0vh";
		return operated([value], (v) => `${v || 0}vh`);
	}
	static asUnit(value, unit, fallbackValue = 0) {
		if (typeof value === "number") return `${value || fallbackValue}${unit}`;
		if (typeof value === "string") return value || `${fallbackValue}${unit}`;
		return operated([value], (v) => `${v || fallbackValue}${unit}`);
	}
	static calc(expression) {
		return `calc(${expression})`;
	}
	static reactiveCalc(operands, operator) {
		return operated(operands, (...values) => {
			return `calc(${values.join(` ${operator} `)})`;
		});
	}
	static clamp(min, value, max) {
		return operated([
			typeof min === "number" || typeof min === "string" ? min : operated([min], (v) => v),
			typeof value === "number" || typeof value === "string" ? value : operated([value], (v) => v),
			typeof max === "number" || typeof max === "string" ? max : operated([max], (v) => v)
		].filter((v) => typeof v !== "string"), () => {
			return `clamp(${typeof min === "number" ? min : typeof min === "string" ? min : min.value}, ${typeof value === "number" ? value : typeof value === "string" ? value : value.value}, ${typeof max === "number" ? max : typeof max === "string" ? max : max.value})`;
		});
	}
	static max(values) {
		return operated(values.filter((v) => typeof v !== "string"), (...nums) => {
			return `max(${values.map((v) => typeof v === "number" ? v : typeof v === "string" ? v : v.value).join(", ")})`;
		});
	}
	static min(values) {
		return operated(values.filter((v) => typeof v !== "string"), (...nums) => {
			return `min(${values.map((v) => typeof v === "number" ? v : typeof v === "string" ? v : v.value).join(", ")})`;
		});
	}
};
var CSSInputControls = class {
	static bindSliderThumb(thumbElement, value, min, max, trackWidth) {
		const position = operated([
			value,
			min,
			max,
			trackWidth
		], () => {
			return `translateX(${(value.value - min.value) / (max.value - min.value) * 100}%)`;
		});
		return CSSBinder.bindTransform(thumbElement, position);
	}
	static bindProgressFill(fillElement, progress) {
		return bindWith(fillElement, "width", operated([progress], () => `${progress.value * 100}%`), handleStyleChange) ?? (() => {});
	}
	static bindToggleState(element, checked) {
		const scale = operated([checked], () => checked.value ? "scale(1)" : "scale(0)");
		const opacity = operated([checked], () => checked.value ? "1" : "0");
		const unsubScale = CSSBinder.bindTransform(element, scale);
		const unsubOpacity = bindWith(element, "opacity", opacity, handleStyleChange) ?? (() => {});
		return () => {
			unsubScale?.();
			unsubOpacity?.();
		};
	}
};
var CSSScrollbarControls = class {
	static bindScrollbarThumb(thumbElement, scrollPosition, contentSize, containerSize, axis = "vertical") {
		const thumbSize = operated([contentSize, containerSize], () => {
			const ratio = containerSize.value / contentSize.value;
			return Math.max(20, ratio * containerSize.value);
		});
		const thumbPosition = operated([
			scrollPosition,
			contentSize,
			containerSize,
			thumbSize
		], () => {
			const maxScroll = Math.max(0, contentSize.value - containerSize.value);
			return (maxScroll > 0 ? scrollPosition.value / maxScroll : 0) * (containerSize.value - thumbSize.value);
		});
		const transform = axis === "vertical" ? operated([thumbPosition], () => `translateY(${thumbPosition.value}px)`) : operated([thumbPosition], () => `translateX(${thumbPosition.value}px)`);
		const unsubSize = axis === "vertical" ? bindWith(thumbElement, "height", operated([thumbSize], (s) => `${s}px`), handleStyleChange) : bindWith(thumbElement, "width", operated([thumbSize], (s) => `${s}px`), handleStyleChange);
		const unsubTransform = CSSBinder.bindTransform(thumbElement, transform);
		return () => {
			unsubSize?.();
			unsubTransform?.();
		};
	}
	static bindScrollbarVisibility(scrollbarElement, isVisible, transitionDuration = 300) {
		const opacity = operated([isVisible], () => isVisible.value);
		const visibility = operated([isVisible], () => isVisible.value > 0 ? "visible" : "hidden");
		const pointerEvents = operated([isVisible], () => isVisible.value > 0 ? "auto" : "none");
		const unsubOpacity = bindWith(scrollbarElement, "opacity", opacity, handleStyleChange);
		const unsubVisibility = bindWith(scrollbarElement, "visibility", visibility, handleStyleChange);
		const unsubPointerEvents = bindWith(scrollbarElement, "pointer-events", pointerEvents, handleStyleChange);
		scrollbarElement.style.transition = `opacity ${transitionDuration}ms ease-in-out`;
		return () => {
			unsubOpacity?.();
			unsubVisibility?.();
			unsubPointerEvents?.();
		};
	}
	static bindScrollbarTheme(scrollbarElement, theme) {
		const unbinders = [];
		if (theme.trackColor) unbinders.push(bindWith(scrollbarElement, "--scrollbar-track-color", operated([theme.trackColor], (c) => `rgba(${c.value}, ${c.value}, ${c.value}, 0.1)`), handleStyleChange) ?? (() => {}));
		if (theme.thumbColor) unbinders.push(bindWith(scrollbarElement, "--scrollbar-thumb-color", operated([theme.thumbColor], (c) => `rgba(${c.value}, ${c.value}, ${c.value}, 0.5)`), handleStyleChange) ?? (() => {}));
		if (theme.borderRadius) unbinders.push(bindWith(scrollbarElement, "--scrollbar-border-radius", operated([theme.borderRadius], (r) => `${r.value}px`), handleStyleChange) ?? (() => {}));
		if (theme.thickness) unbinders.push(bindWith(scrollbarElement, "--scrollbar-thickness", operated([theme.thickness], (t) => `${t.value}px`), handleStyleChange) ?? (() => {}));
		return () => unbinders.forEach((unbind) => unbind?.());
	}
};
var CSSMomentumScrolling = class {
	static createMomentumScroll(element, velocity, deceleration = .92) {
		return new Promise((resolve) => {
			let animationId;
			const animate = () => {
				velocity.value *= deceleration;
				if (Math.abs(velocity.value) < .1) {
					velocity.value = 0;
					cancelAnimationFrame(animationId);
					resolve();
					return;
				}
				element.scrollBy({
					top: velocity.value,
					behavior: "instant"
				});
				animationId = requestAnimationFrame(animate);
			};
			animate();
		});
	}
	static createBounceBack(element, overScroll, duration = 300) {
		return new Promise((resolve) => {
			const startTime = performance.now();
			const startValue = overScroll.value;
			const animate = (currentTime) => {
				const elapsed = currentTime - startTime;
				const progress = Math.min(elapsed / duration, 1);
				const eased = 1 - Math.pow(1 - progress, 3);
				overScroll.value = startValue * (1 - eased);
				if (progress < 1) requestAnimationFrame(animate);
				else {
					overScroll.value = 0;
					resolve();
				}
			};
			requestAnimationFrame(animate);
		});
	}
};
var CSSInteractionStates = class {
	static bindFocusRing(element, isFocused, ringColor = "rgba(59, 130, 246, 0.5)") {
		return bindWith(element, "box-shadow", operated([isFocused], () => isFocused.value ? `0 0 0 2px ${ringColor}` : "none"), handleStyleChange) ?? (() => {});
	}
	static bindHoverState(element, isHovered, hoverTransform = "scale(1.05)") {
		const transform = operated([isHovered], () => isHovered.value ? hoverTransform : "none");
		return CSSBinder.bindTransform(element, transform) ?? (() => {});
	}
	static bindActiveState(element, isActive, activeTransform = "scale(0.95)") {
		const transform = operated([isActive], () => isActive.value ? activeTransform : "none");
		return CSSBinder.bindTransform(element, transform) ?? (() => {});
	}
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/controllers/Draggable.ts
var DragHandler = class {
	#holder;
	#dragging;
	#raf = 0;
	#pending;
	#options;
	#subscriptions;
	get #parent() {
		return this.#holder.offsetParent ?? this.#holder?.host ?? ROOT$1;
	}
	constructor(holder, options) {
		if (!holder) throw Error("Element is null...");
		doObserve(this.#holder = holder, this.#parent);
		this.#dragging = vector2Ref(0, 0);
		this.#pending = vector2Ref(0, 0);
		this.#options = options;
		setStyleProperty(this.#holder, "--drag-x", 0);
		setStyleProperty(this.#holder, "--drag-y", 0);
		this.#attachObservers();
		if (options) this.draggable(options);
	}
	#queueFrame(x = 0, y = 0) {
		let constrainedX = x || 0;
		let constrainedY = y || 0;
		if (this.#options?.constraints?.bounds) {
			const bounds = this.#options.constraints.bounds;
			const centerOffset = this.#options.constraints.centerOffset || vector2Ref(0, 0);
			const elementSize = vector2Ref(this.#holder.offsetWidth, this.#holder.offsetHeight);
			createRect2D(constrainedX, constrainedY, elementSize.x, elementSize.y);
			const constrainedPos = clampPointToRect(new Vector2D(constrainedX + centerOffset.x.value, constrainedY + centerOffset.y.value), bounds);
			constrainedX = constrainedPos.x.value - centerOffset.x.value;
			constrainedY = constrainedPos.y.value - centerOffset.y.value;
		}
		if (this.#options?.constraints?.snapToGrid) {
			const { size: gridSize, offset: gridOffset } = this.#options.constraints.snapToGrid;
			constrainedX = Math.round((constrainedX - gridOffset.x.value) / gridSize.x.value) * gridSize.x.value + gridOffset.x.value;
			constrainedY = Math.round((constrainedY - gridOffset.y.value) / gridSize.y.value) * gridSize.y.value + gridOffset.y.value;
		}
		this.#pending.x.value = constrainedX;
		this.#pending.y.value = constrainedY;
		if (this.#raf) return;
		this.#raf = requestAnimationFrame(() => {
			this.#raf = 0;
			const dx = this.#pending.x.value;
			const dy = this.#pending.y.value;
			setStyleProperty(this.#holder, "transform", `translate3d(
                clamp(calc(-1px * var(--shift-x, 0)), ${dx || 0}px, calc(100cqi - 100% - var(--shift-x, 0) * 1px)),
                clamp(calc(-1px * var(--shift-y, 0)), ${dy || 0}px, calc(100cqb - 100% - var(--shift-y, 0) * 1px)),
                0px)`.trim?.()?.replaceAll?.(/\s+/g, " ")?.replaceAll?.(/\n+/g, " ")?.trim?.() ?? "");
		});
	}
	#attachObservers() {
		if (this.#subscriptions) return;
		const emit = () => {
			this.#queueFrame(this.#dragging.x.value, this.#dragging.y.value);
		};
		this.#subscriptions = [affected(this.#dragging.x, emit), affected(this.#dragging.y, emit)];
		emit();
	}
	draggable(options) {
		const handler = options.handler ?? this.#holder;
		this.#dragging;
		this.#attachObservers();
		const weak = new WeakRef(this.#holder);
		const binding = (grabAction) => handler.addEventListener("pointerdown", makeShiftTrigger((ev) => grabAction(ev, this.#holder), this.#holder));
		const dragResolve = (dragging) => {
			const holder = weak?.deref?.();
			holder?.style?.removeProperty?.("will-change");
			queueMicrotask(() => {
				holder?.removeAttribute?.("data-dragging");
				holder?.style?.removeProperty?.("transform");
			});
			const box = holder?.getBoundingClientRect?.();
			this.#dragging.x.value = 0;
			this.#dragging.y.value = 0;
			this.#queueFrame(0, 0);
			setStyleProperty(holder, "--shift-x", `${box?.left || 0}px`);
			setStyleProperty(holder, "--shift-y", `${box?.top || 0}px`);
		};
		return bindDraggable(binding, dragResolve, [this.#dragging.x, this.#dragging.y], () => {
			const holder = weak?.deref?.();
			holder?.setAttribute?.("data-dragging", "");
			holder?.style?.setProperty("will-change", "inset, translate, transform, opacity, z-index");
			this.#queueFrame(this.#dragging.x.value, this.#dragging.y.value);
			return [0, 0];
		});
	}
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/controllers/Resizable.ts
var ResizeHandler = class {
	#holder;
	#resizing;
	get #parent() {
		return this.#holder.offsetParent ?? this.#holder?.host ?? ROOT$1;
	}
	constructor(holder, options) {
		if (!holder) throw Error("Element is null...");
		doObserve(this.#holder = holder, this.#parent);
		this.#resizing = vector2Ref(0, 0);
		if (options) this.resizable(options);
	}
	limitResize(real, virtual, holder, container) {
		const widthDiff = cbw(holder) - (bbw(holder) - (this.#resizing.x.value || 0));
		const heightDiff = cbh(holder) - (bbh(holder) - (this.#resizing.y.value || 0));
		real[0] = clamp$1(0, virtual?.[0] || 0, widthDiff) || 0;
		real[1] = clamp$1(0, virtual?.[1] || 0, heightDiff) || 0;
		return real;
	}
	resizable(options) {
		const handler = options.handler ?? this.#holder;
		this.#resizing;
		const weak = new WeakRef(this.#holder), self_w = new WeakRef(this);
		const dragResolve = (dragging) => {
			const holder = weak?.deref?.();
			holder?.style?.removeProperty?.("will-change");
			queueMicrotask(() => {
				holder?.removeAttribute?.("data-resizing");
			});
		};
		const binding = (grabAction) => handler.addEventListener("pointerdown", makeShiftTrigger((ev) => grabAction(ev, this.#holder), this.#holder));
		const initDrag = () => {
			const starting = [this.#resizing.x.value || 0, this.#resizing.y.value || 0];
			const holder = weak?.deref?.();
			const parent = this.#parent;
			self_w?.deref?.()?.limitResize?.(starting, starting, holder, parent);
			holder?.setAttribute?.("data-resizing", "");
			return starting;
		};
		const resizingArray = [this.#resizing.x, this.#resizing.y];
		E(this.#holder, { style: {
			"--resize-x": this.#resizing.x,
			"--resize-y": this.#resizing.y
		} });
		return bindDraggable(binding, dragResolve, resizingArray, initDrag);
	}
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/controllers/Selection.ts
/**
* Selection controller for creating snipping rectangles on screen/canvas
* Supports drag-to-create, resize, constraints, and grid snapping
*/
var SelectionController = class {
	target;
	options;
	selectionRect;
	overlayElement;
	isActive = false;
	startPoint;
	currentPoint;
	dragStart;
	resizeHandle;
	constructor(options = {}) {
		this.options = {
			target: document.body,
			minSize: vector2Ref(10, 10),
			maxSize: vector2Ref(globalThis.innerWidth, globalThis.innerHeight),
			showHandles: true,
			style: {
				border: "2px solid #007acc",
				background: "rgba(0, 122, 204, 0.1)",
				borderRadius: "0",
				zIndex: 9999
			},
			...options
		};
		this.target = this.options.target;
	}
	/**
	* Start selection mode - attaches event listeners
	*/
	start() {
		if (this.isActive) return;
		this.isActive = true;
		this.createOverlay();
		this.attachEvents();
	}
	/**
	* Stop selection mode - removes event listeners and overlay
	*/
	stop() {
		if (!this.isActive) return;
		this.isActive = false;
		this.removeOverlay();
		this.detachEvents();
		this.options.onCancel?.();
	}
	/**
	* Get current selection rectangle
	*/
	getSelection() {
		return this.selectionRect || null;
	}
	/**
	* Set selection programmatically
	*/
	setSelection(rect) {
		this.selectionRect = rect;
		this.updateOverlay();
		this.options.onChange?.(rect);
	}
	/**
	* Clear current selection
	*/
	clearSelection() {
		this.selectionRect = void 0;
		this.updateOverlay();
		this.options.onCancel?.();
	}
	createOverlay() {
		if (this.overlayElement) return;
		this.overlayElement = document.createElement("div");
		Object.assign(this.overlayElement.style, {
			position: "fixed",
			pointerEvents: "none",
			boxSizing: "border-box",
			...this.options.style
		});
		if (this.options.showHandles) this.createResizeHandles();
		this.target.appendChild(this.overlayElement);
	}
	createResizeHandles() {
		if (!this.overlayElement) return;
		const handles = [
			"nw",
			"ne",
			"sw",
			"se",
			"n",
			"s",
			"e",
			"w"
		];
		const handleElements = [];
		handles.forEach((handle) => {
			const handleEl = document.createElement("div");
			handleEl.setAttribute("data-handle", handle);
			Object.assign(handleEl.style, {
				position: "absolute",
				width: handle.length === 1 ? "100%" : "8px",
				height: handle.length === 1 ? "8px" : "100%",
				background: this.options.style?.border || "#007acc",
				cursor: this.getCursorForHandle(handle),
				pointerEvents: "auto"
			});
			this.positionHandle(handleEl, handle);
			handleEl.addEventListener("pointerdown", (e) => {
				e.stopPropagation();
				this.startResize(handle, vector2Ref(e.clientX, e.clientY));
			});
			this.overlayElement.appendChild(handleEl);
			handleElements.push(handleEl);
		});
	}
	positionHandle(handleEl, handle) {
		const style = handleEl.style;
		switch (handle) {
			case "nw":
				style.top = style.left = "0";
				break;
			case "ne":
				style.top = "0";
				style.right = "0";
				break;
			case "sw":
				style.bottom = style.left = "0";
				break;
			case "se":
				style.bottom = style.right = "0";
				break;
			case "n":
				style.top = "0";
				style.left = "50%";
				style.transform = "translateX(-50%)";
				break;
			case "s":
				style.bottom = "0";
				style.left = "50%";
				style.transform = "translateX(-50%)";
				break;
			case "e":
				style.top = "50%";
				style.right = "0";
				style.transform = "translateY(-50%)";
				break;
			case "w":
				style.top = "50%";
				style.left = "0";
				style.transform = "translateY(-50%)";
				break;
		}
	}
	getCursorForHandle(handle) {
		return {
			"nw": "nw-resize",
			"ne": "ne-resize",
			"sw": "sw-resize",
			"se": "se-resize",
			"n": "n-resize",
			"s": "s-resize",
			"e": "e-resize",
			"w": "w-resize"
		}[handle] || "pointer";
	}
	attachEvents() {
		this.target.addEventListener("pointerdown", this.handlePointerDown);
		this.target.addEventListener("pointermove", this.handlePointerMove);
		this.target.addEventListener("pointerup", this.handlePointerUp);
		document.addEventListener("keydown", this.handleKeyDown);
	}
	detachEvents() {
		this.target.removeEventListener("pointerdown", this.handlePointerDown);
		this.target.removeEventListener("pointermove", this.handlePointerMove);
		this.target.removeEventListener("pointerup", this.handlePointerUp);
		document.removeEventListener("keydown", this.handleKeyDown);
	}
	handlePointerDown = (e) => {
		if (e.button !== 0) return;
		const point = vector2Ref(e.clientX, e.clientY);
		const handle = this.getHandleAtPoint(point);
		if (handle) {
			this.startResize(handle, point);
			return;
		}
		if (this.selectionRect && rectContainsPoint(this.selectionRect, point).value) {
			this.startDrag(point);
			return;
		}
		this.startSelection(point);
	};
	handlePointerMove = (e) => {
		const point = vector2Ref(e.clientX, e.clientY);
		if (this.resizeHandle) this.updateResize(point);
		else if (this.dragStart) this.updateDrag(point);
		else if (this.startPoint) this.updateSelection(point);
	};
	handlePointerUp = (e) => {
		if (this.resizeHandle) this.endResize();
		else if (this.dragStart) this.endDrag();
		else if (this.startPoint) this.endSelection();
	};
	handleKeyDown = (e) => {
		if (e.key === "Escape") this.clearSelection();
		else if (e.key === "Enter" && this.selectionRect) this.options.onSelect?.(this.selectionRect);
	};
	startSelection(point) {
		this.startPoint = point;
		this.currentPoint = point;
		this.selectionRect = createRect2D(point.x, point.y, 0, 0);
		this.updateOverlay();
	}
	updateSelection(point) {
		if (!this.startPoint || !this.selectionRect) return;
		this.currentPoint = point;
		const minX = Math.min(this.startPoint.x.value, point.x.value);
		const minY = Math.min(this.startPoint.y.value, point.y.value);
		const maxX = Math.max(this.startPoint.x.value, point.x.value);
		const maxY = Math.max(this.startPoint.y.value, point.y.value);
		this.selectionRect.position.x.value = minX;
		this.selectionRect.position.y.value = minY;
		this.selectionRect.size.x.value = maxX - minX;
		this.selectionRect.size.y.value = maxY - minY;
		this.applyConstraints();
		this.updateOverlay();
		this.options.onChange?.(this.selectionRect);
	}
	endSelection() {
		if (!this.selectionRect) return;
		if (this.selectionRect.size.x.value < this.options.minSize.x.value || this.selectionRect.size.y.value < this.options.minSize.y.value) {
			this.clearSelection();
			return;
		}
		this.options.onSelect?.(this.selectionRect);
		this.startPoint = void 0;
		this.currentPoint = void 0;
	}
	startDrag(point) {
		if (!this.selectionRect) return;
		this.dragStart = point;
	}
	updateDrag(point) {
		if (!this.dragStart || !this.selectionRect) return;
		const delta = subtractVector2D(point, this.dragStart);
		this.selectionRect.position = addVector2D(this.selectionRect.position, delta);
		this.dragStart = point;
		if (this.options.bounds) this.selectionRect.position = clampPointToRect(this.selectionRect.position, this.options.bounds);
		this.updateOverlay();
		this.options.onChange?.(this.selectionRect);
	}
	endDrag() {
		this.dragStart = void 0;
	}
	startResize(handle, point) {
		this.resizeHandle = handle;
		this.dragStart = point;
	}
	updateResize(point) {
		if (!this.resizeHandle || !this.dragStart || !this.selectionRect) return;
		const delta = subtractVector2D(point, this.dragStart);
		this.resizeFromHandle(this.resizeHandle, delta);
		this.dragStart = point;
		this.applyConstraints();
		this.updateOverlay();
		this.options.onChange?.(this.selectionRect);
	}
	resizeFromHandle(handle, delta) {
		if (!this.selectionRect) return;
		const rect = this.selectionRect;
		let newX = rect.position.x.value;
		let newY = rect.position.y.value;
		let newWidth = rect.size.x.value;
		let newHeight = rect.size.y.value;
		switch (handle) {
			case "nw":
				newX += delta.x.value;
				newY += delta.y.value;
				newWidth -= delta.x.value;
				newHeight -= delta.y.value;
				break;
			case "ne":
				newY += delta.y.value;
				newWidth += delta.x.value;
				newHeight -= delta.y.value;
				break;
			case "sw":
				newX += delta.x.value;
				newWidth -= delta.x.value;
				newHeight += delta.y.value;
				break;
			case "se":
				newWidth += delta.x.value;
				newHeight += delta.y.value;
				break;
			case "n":
				newY += delta.y.value;
				newHeight -= delta.y.value;
				break;
			case "s":
				newHeight += delta.y.value;
				break;
			case "e":
				newWidth += delta.x.value;
				break;
			case "w":
				newX += delta.x.value;
				newWidth -= delta.x.value;
				break;
		}
		if (newWidth < 0) {
			newX += newWidth;
			newWidth = -newWidth;
		}
		if (newHeight < 0) {
			newY += newHeight;
			newHeight = -newHeight;
		}
		rect.position.x.value = newX;
		rect.position.y.value = newY;
		rect.size.x.value = newWidth;
		rect.size.y.value = newY;
	}
	endResize() {
		this.resizeHandle = void 0;
		this.dragStart = void 0;
	}
	applyConstraints() {
		if (!this.selectionRect) return;
		const rect = this.selectionRect;
		if (this.options.aspectRatio) {
			const currentRatio = rect.size.x.value / rect.size.y.value;
			const targetRatio = this.options.aspectRatio;
			if (Math.abs(currentRatio - targetRatio) > .01) if (currentRatio > targetRatio) rect.size.y.value = rect.size.x.value / targetRatio;
			else rect.size.x.value = rect.size.y.value * targetRatio;
		}
		rect.size.x.value = Math.max(this.options.minSize.x.value, Math.min(this.options.maxSize.x.value, rect.size.x.value));
		rect.size.y.value = Math.max(this.options.minSize.y.value, Math.min(this.options.maxSize.y.value, rect.size.y.value));
		if (this.options.bounds) {
			rect.position.x.value = Math.max(this.options.bounds.position.x.value, Math.min(rect.position.x.value, this.options.bounds.position.x.value + this.options.bounds.size.x.value - rect.size.x.value));
			rect.position.y.value = Math.max(this.options.bounds.position.y.value, Math.min(rect.position.y.value, this.options.bounds.position.y.value + this.options.bounds.size.y.value - rect.size.y.value));
		}
		if (this.options.snapToGrid) {
			const { size: gridSize, offset: gridOffset } = this.options.snapToGrid;
			rect.position.x.value = Math.round((rect.position.x.value - gridOffset.x.value) / gridSize.x.value) * gridSize.x.value + gridOffset.x.value;
			rect.position.y.value = Math.round((rect.position.y.value - gridOffset.y.value) / gridSize.y.value) * gridSize.y.value + gridOffset.y.value;
		}
	}
	updateOverlay() {
		if (!this.overlayElement) return;
		if (!this.selectionRect) {
			this.overlayElement.style.display = "none";
			return;
		}
		const rect = this.selectionRect;
		Object.assign(this.overlayElement.style, {
			display: "block",
			left: `${rect.position.x.value}px`,
			top: `${rect.position.y.value}px`,
			width: `${rect.size.x.value}px`,
			height: `${rect.size.y.value}px`
		});
	}
	removeOverlay() {
		if (this.overlayElement) {
			this.overlayElement.remove();
			this.overlayElement = void 0;
		}
	}
	getHandleAtPoint(point) {
		if (!this.overlayElement || !this.selectionRect) return null;
		this.selectionRect;
		const handles = this.overlayElement.querySelectorAll("[data-handle]");
		for (let i = 0; i < handles.length; i++) {
			const handle = handles[i];
			const handleRect = handle.getBoundingClientRect();
			if (point.x.value >= handleRect.left && point.x.value <= handleRect.right && point.y.value >= handleRect.top && point.y.value <= handleRect.bottom) return handle.getAttribute("data-handle");
		}
		return null;
	}
	/**
	* Get selection as image data (for canvas/screen capture)
	*/
	async getSelectionImage() {
		if (!this.selectionRect) return null;
		return null;
	}
	/**
	* Destroy the selection controller
	*/
	destroy() {
		this.stop();
		this.clearSelection();
	}
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/controllers/LongHover.ts
var LongHoverHandler = class {
	#holder;
	#dispose = null;
	constructor(holder, options, fx = (ev) => {
		ev.target.dispatchEvent(new PointerEvent("long-hover", {
			...ev,
			bubbles: true
		}));
	}) {
		this.#holder = holder;
		holder["@control"] = this;
		if (!holder) throw Error("Element is null...");
		if (options) this.longHover(options, fx);
	}
	defaultHandler(ev, weakRef) {
		return weakRef?.deref()?.dispatchEvent?.(new PointerEvent("long-hover", {
			...ev,
			bubbles: true
		}));
	}
	longHover(options, fx = (ev) => {
		ev.target.dispatchEvent(new PointerEvent("long-hover", {
			...ev,
			bubbles: true
		}));
	}) {
		this.dispose();
		const action = {
			pointerId: -1,
			timer: null
		};
		const initiate = ((evc) => {
			const ev = evc;
			if ((ev.target.matches(options.selector) || ev.target.closest(options.selector)) && action.pointerId < 0) {
				action.pointerId = ev.pointerId;
				action.timer = setTimeout(() => {
					fx?.(ev);
				}, options.holdTime ?? 300);
			}
		});
		const cancelEv = ((evc) => {
			const ev = evc;
			if ((ev.target.matches(options.selector) || ev.target.closest(options.selector)) && action.pointerId == ev.pointerId) {
				if (action.timer) clearTimeout(action.timer);
				action.timer = null;
				action.pointerId = -1;
			}
		});
		const bindings = addEvents(ROOT$1, {
			"pointerover": initiate,
			"pointerdown": initiate,
			"pointerout": cancelEv,
			"pointerup": cancelEv,
			"pointercancel": cancelEv
		});
		this.#dispose = () => {
			bindings?.forEach?.((unbind) => unbind?.());
			clearTimeout(action.timer);
			action.timer = null;
			action.pointerId = -1;
		};
		return this.#dispose;
	}
	/** Release root listeners and cancel a pending hover timer. */
	dispose() {
		const dispose = this.#dispose;
		this.#dispose = null;
		dispose?.();
	}
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/controllers/LongPress.ts
var defaultOptions = {
	anyPointer: true,
	mouseImmediate: true,
	minHoldTime: 100,
	maxHoldTime: 2e3,
	maxOffsetRadius: 10
};
/** Suppress the synthetic click after long-press without blocking other listeners on the same target. */
var preventor = [(ev) => {
	ev.preventDefault();
	ev.stopPropagation();
}, { once: true }];
var LongPressHandler = class {
	#holder;
	#preventedPointers;
	#dispose = null;
	constructor(holder, options = { ...defaultOptions }, fx) {
		(this.#holder = holder)["@control"] = this;
		this.#preventedPointers = /* @__PURE__ */ new Set();
		if (!holder) throw Error("Element is null...");
		if (!options) options = { ...defaultOptions };
		const currentClone = { ...options };
		Object.assign(options, defaultOptions, currentClone);
		if (options) this.longPress(options, fx);
	}
	defaultHandler(ev, weakRef) {
		return weakRef?.deref()?.dispatchEvent?.(new PointerEvent("long-press", {
			...ev,
			bubbles: true
		}));
	}
	longPress(options = { ...defaultOptions }, fx) {
		this.dispose();
		const ROOT = document.documentElement;
		const weakRef = new WeakRef(this.#holder);
		const actionState = this.initializeActionState();
		this.holding = {
			actionState,
			options,
			fx: fx || ((ev) => this.defaultHandler(ev, weakRef))
		};
		const pointerDownListener = (ev) => this.onPointerDown(this.holding, ev, weakRef);
		const pointerMoveListener = (ev) => this.onPointerMove(this.holding, ev);
		const pointerUpListener = (ev) => this.onPointerUp(this.holding, ev);
		const bindings = addEvents(ROOT, {
			"pointerdown": pointerDownListener,
			"pointermove": pointerMoveListener,
			"pointerup": pointerUpListener,
			"pointercancel": pointerUpListener
		});
		this.#dispose = () => {
			bindings?.forEach?.((unbind) => unbind?.());
			clearTimeout(actionState.timerId);
			clearTimeout(actionState.immediateTimerId);
			this.releasePreventing(this.#holder, actionState.pointerId);
			actionState.pointerId = -1;
		};
		return this.#dispose;
	}
	/** Release root listeners and any pending long-press state. */
	dispose() {
		const dispose = this.#dispose;
		this.#dispose = null;
		dispose?.();
	}
	initializeActionState() {
		return {
			timerId: null,
			immediateTimerId: null,
			pointerId: -1,
			startCoord: [0, 0],
			lastCoord: [0, 0],
			isReadyForLongPress: false,
			cancelCallback: () => {},
			cancelPromiseResolver: null,
			cancelPromiseRejector: null
		};
	}
	preventFromClicking(self, ev) {
		if (!this.#preventedPointers.has(ev.pointerId)) {
			this.#preventedPointers.add(ev.pointerId);
			self?.addEventListener?.("click", ...preventor);
			self?.addEventListener?.("contextmenu", ...preventor);
		}
	}
	releasePreventing(self, pointerId) {
		if (this.#preventedPointers.has(pointerId)) {
			this.#preventedPointers.delete(pointerId);
			self?.removeEventListener?.("click", ...preventor);
			self?.removeEventListener?.("contextmenu", ...preventor);
		}
	}
	onPointerDown(self, ev, weakRef) {
		if (!this.isValidTarget(self, ev.target, weakRef) || !(self.options?.anyPointer || ev?.pointerType == "touch")) return;
		ev.preventDefault();
		this.resetAction(self, self.actionState);
		const { actionState } = self;
		actionState.pointerId = ev.pointerId;
		actionState.startCoord = [ev.clientX, ev.clientY];
		actionState.lastCoord = [...actionState.startCoord];
		const $withResolver = Promise.withResolvers();
		actionState.cancelPromiseResolver = $withResolver.resolve;
		actionState.cancelPromiseRejector = $withResolver.reject;
		actionState.cancelCallback = () => {
			clearTimeout(actionState.timerId);
			clearTimeout(actionState.immediateTimerId);
			actionState.isReadyForLongPress = false;
			$withResolver.resolve();
			this.resetAction(self, actionState);
		};
		if (self.options?.mouseImmediate && ev.pointerType === "mouse") {
			self.fx?.(ev);
			return actionState.cancelCallback();
		}
		actionState.timerId = setTimeout(() => {
			actionState.isReadyForLongPress = true;
		}, self.options?.minHoldTime);
		actionState.immediateTimerId = setTimeout(() => {
			if (this.isInPlace(self)) {
				this.preventFromClicking(self, ev);
				self.fx?.(ev);
				actionState.cancelCallback();
			}
		}, self.options?.maxHoldTime);
		Promise.race([$withResolver.promise, new Promise((_, reject) => setTimeout(() => reject(/* @__PURE__ */ new Error("Timeout")), 3e3))]).catch(console.warn);
	}
	onPointerMove(self, ev) {
		const { actionState } = self;
		if (ev.pointerId !== actionState.pointerId) return;
		actionState.lastCoord = [ev.clientX, ev.clientY];
		if (!this.isInPlace(self)) return actionState.cancelCallback();
		this.preventFromClicking(self, ev);
		actionState.startCoord = [ev.clientX, ev.clientY];
	}
	resetAction(self, actionState) {
		this.releasePreventing(self, actionState.pointerId);
		actionState.pointerId = -1;
		actionState.cancelPromiseResolver = null;
		actionState.cancelPromiseRejector = null;
		actionState.isReadyForLongPress = false;
		actionState.cancelCallback = null;
	}
	onPointerUp(self, ev) {
		const { actionState } = self;
		if (ev.pointerId !== actionState.pointerId) return;
		actionState.lastCoord = [ev.clientX, ev.clientY];
		if (actionState.isReadyForLongPress && this.isInPlace(self)) {
			self.fx?.(ev);
			this.preventFromClicking(self, ev);
		}
		actionState.cancelCallback();
		this.resetAction(self, actionState);
	}
	holding = {
		fx: null,
		options: {},
		actionState: {}
	};
	hasParent(current, parent) {
		while (current) {
			if (current === parent) return true;
			current = current.parentElement;
		}
	}
	isInPlace(self) {
		const { actionState } = self;
		const [startX, startY] = actionState.startCoord;
		const [lastX, lastY] = actionState.lastCoord;
		return Math.hypot(lastX - startX, lastY - startY) <= self.options?.maxOffsetRadius;
	}
	isValidTarget(self, target, weakRef) {
		const weakElement = weakRef?.deref?.();
		return weakElement && (this.hasParent(target, weakElement) || target === weakElement) && (!self.options?.handler || target.matches(self.options?.handler));
	}
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/controllers/Swipe.ts
var SwipeHandler = class {
	#holder;
	#dispose = null;
	constructor(holder, options) {
		(this.#holder = holder)["@control"] = this;
		if (!holder) throw Error("Element is null...");
		if (options) this.swipe(options);
	}
	swipe(options) {
		this.dispose();
		if (options?.handler) {
			const swipes = /* @__PURE__ */ new Map([]);
			const swipes_w = new WeakRef(swipes);
			const registerMove = (evc) => {
				const ev = evc;
				if (swipes?.has?.(ev.pointerId)) {
					const swipe = swipes?.get?.(ev.pointerId);
					Object.assign(swipe || {}, {
						current: [...ev.client || [ev?.clientX, ev?.clientY]],
						pointerId: ev.pointerId,
						time: performance.now()
					});
				}
			};
			const compAngle = (a, c) => {
				return (a - c + 540) % 360 - 180;
			};
			const completeSwipe = (ev) => {
				const pointerId = ev.pointerId;
				if (swipes?.has?.(pointerId)) {
					const swipe = swipes_w?.deref()?.get?.(pointerId);
					const diffP = [swipe.start[0] - swipe.current[0], swipe.start[1] - swipe.current[1]];
					const diffT = performance.now() - swipe.startTime;
					if ((swipe.speed = Math.hypot(...diffP) / diffT) > (options.threshold || .5)) {
						swipe.direction = "name";
						swipe.swipeAngle = Math.atan2(swipe.current[1] - swipe.start[1], swipe.current[0] - swipe.start[0]);
						if (Math.abs(compAngle(swipe.swipeAngle * (180 / Math.PI), 0)) <= 20) swipe.direction = "left";
						if (Math.abs(compAngle(swipe.swipeAngle * (180 / Math.PI), 180)) <= 20) swipe.direction = "right";
						if (Math.abs(compAngle(swipe.swipeAngle * (180 / Math.PI), 270)) <= 20) swipe.direction = "up";
						if (Math.abs(compAngle(swipe.swipeAngle * (180 / Math.PI), 90)) <= 20) swipe.direction = "down";
						options?.trigger?.(swipe);
					}
					swipes_w?.deref()?.delete?.(pointerId);
				}
			};
			const takeAction = ((evc) => {
				const ev = evc;
				if (ev.target == options?.handler) {
					swipes?.set(ev.pointerId, {
						target: ev.target,
						start: [...ev.client || [ev?.clientX, ev?.clientY]],
						current: [...ev.client || [ev?.clientX, ev?.clientY]],
						pointerId: ev.pointerId,
						startTime: performance.now(),
						time: performance.now(),
						speed: 0
					});
					ev?.capture?.();
				}
			});
			const bindings = addEvents(ROOT$1, {
				"pointerdown": takeAction,
				"pointermove": registerMove,
				"pointerup": completeSwipe,
				"pointercancel": completeSwipe
			});
			this.#dispose = () => {
				bindings?.forEach?.((unbind) => unbind?.());
				swipes.clear();
			};
			return this.#dispose;
		}
	}
	/** Release root listeners and discard in-progress swipe state. */
	dispose() {
		const dispose = this.#dispose;
		this.#dispose = null;
		dispose?.();
	}
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/controllers/Handler.ts
var handleByPointer = (cb, root = typeof document != "undefined" ? document?.documentElement : null) => {
	if (!root) return () => {};
	let pointerId = -1;
	const rst = (ev) => {
		pointerId = -1;
	};
	const tgi = (ev) => {
		if (pointerId < 0) pointerId = ev.pointerId;
		if (pointerId == ev.pointerId) cb?.(ev);
	};
	const listening = [
		addEvent(root, "pointerup", rst),
		addEvent(root, "pointercancel", rst),
		addEvent(root, "pointermove", tgi)
	];
	return () => {
		listening.forEach((ub) => ub?.());
	};
};
var handleForFixPosition = (container, cb, root = typeof document != "undefined" ? document?.documentElement : null) => {
	if (!root) return () => {};
	const ptu = (ev) => cb?.(ev);
	const listening = [addEvent(container, "scroll", ptu), addEvent(root, "resize", ptu)];
	const obs = observeContentBox(container, ptu);
	return () => {
		listening.forEach((ub) => ub?.());
		obs?.disconnect?.();
	};
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/mixins/types.ts
function junctionToBox(a, b) {
	const left = Math.min(a.x, b.x);
	const top = Math.min(a.y, b.y);
	const right = Math.max(a.x, b.x);
	const bottom = Math.max(a.y, b.y);
	return {
		left,
		top,
		right,
		bottom,
		width: right - left,
		height: bottom - top
	};
}
var JUNCTION_SELECT_EVENTS = {
	start: "junction-select:start",
	move: "junction-select:move",
	end: "junction-select:end",
	cancel: "junction-select:cancel"
};
var JUNCTION_DRAG_EVENTS = {
	start: "junction-drag:start",
	move: "junction-drag:move",
	end: "junction-drag:end"
};
var JUNCTION_RESIZE_EVENTS = {
	start: "junction-resize:start",
	move: "junction-resize:move",
	end: "junction-resize:end"
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/mixins/Junction.ts
/**
* Junction-based DOM mixins: selection (A/B), drag, resize.
*/
var mixinDisposersSymbol = Symbol.for("dom.ts@mixinDisposers");
var mixinDisposers = globalThis[mixinDisposersSymbol] ??= /* @__PURE__ */ new WeakMap();
var pushDisposable = (host, mixinName, fn) => {
	const map = mixinDisposers.get(host) ?? /* @__PURE__ */ new Map();
	const list = map.get(mixinName) ?? [];
	list.push(fn);
	map.set(mixinName, list);
	mixinDisposers.set(host, map);
};
var runDisposers = (host, mixinName) => {
	const map = mixinDisposers.get(host);
	const list = map?.get(mixinName);
	if (!list) return;
	for (const fn of list) try {
		fn();
	} catch {}
	map.delete(mixinName);
	if (map.size === 0) mixinDisposers.delete(host);
};
var parsePxVar = (host, name) => {
	const raw = globalThis.getComputedStyle?.(host)?.getPropertyValue?.(name)?.trim?.() ?? "";
	const n = parseFloat(raw);
	return Number.isFinite(n) ? n : 0;
};
var queryHandle = (host, attr, fallback) => {
	const sel = host.getAttribute(attr)?.trim();
	if (!sel) return fallback;
	const found = host.querySelector(sel);
	return found instanceof HTMLElement ? found : fallback;
};
var JunctionSelectMixin = class extends DOMMixin {
	constructor() {
		super("ui-junction-select");
	}
	connect(wEl) {
		const host = wEl?.deref?.();
		if (!host) return this;
		const overlay = document.createElement("div");
		overlay.className = "ui-junction-select-overlay";
		overlay.setAttribute("data-junction-overlay", "");
		overlay.style.cssText = "position:absolute;pointer-events:none;z-index:var(--z-max, 9999);box-sizing:border-box;border:1px dashed color-mix(in oklab, var(--color-primary, #5a7fff) 70%, transparent);background:color-mix(in oklab, var(--color-primary, #5a7fff) 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;";
		const ensurePositioned = () => {
			if ((globalThis.getComputedStyle?.(host))?.position === "static") host.style.position = "relative";
		};
		ensurePositioned();
		host.appendChild(overlay);
		let active = false;
		let a = {
			x: 0,
			y: 0
		};
		let b = {
			x: 0,
			y: 0
		};
		const localPoint = (ev) => {
			const r = host.getBoundingClientRect();
			return {
				x: ev.clientX - r.left,
				y: ev.clientY - r.top
			};
		};
		const applyOverlay = () => {
			const box = junctionToBox(a, b);
			if (box.width < 1 && box.height < 1) {
				overlay.style.display = "none";
				return;
			}
			overlay.style.display = "block";
			overlay.style.left = `${box.left}px`;
			overlay.style.top = `${box.top}px`;
			overlay.style.width = `${box.width}px`;
			overlay.style.height = `${box.height}px`;
		};
		const onDown = (ev) => {
			if (ev.button !== 0) return;
			if (ev.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select")) return;
			if (!(ev.target === host || host.contains(ev.target))) return;
			active = true;
			a = localPoint(ev);
			b = { ...a };
			host.setPointerCapture(ev.pointerId);
			host.dispatchEvent(new CustomEvent(JUNCTION_SELECT_EVENTS.start, {
				bubbles: true,
				detail: {
					a: { ...a },
					b: { ...b },
					host
				}
			}));
			applyOverlay();
		};
		const onMove = (ev) => {
			if (!active) return;
			b = localPoint(ev);
			applyOverlay();
			const box = junctionToBox(a, b);
			host.dispatchEvent(new CustomEvent(JUNCTION_SELECT_EVENTS.move, {
				bubbles: true,
				detail: {
					a: { ...a },
					b: { ...b },
					box,
					host
				}
			}));
		};
		const end = (ev) => {
			if (!active) return;
			active = false;
			try {
				host.releasePointerCapture(ev.pointerId);
			} catch {}
			const box = junctionToBox(a, b);
			host.dispatchEvent(new CustomEvent(JUNCTION_SELECT_EVENTS.end, {
				bubbles: true,
				detail: {
					a: { ...a },
					b: { ...b },
					box,
					host
				}
			}));
		};
		const onUp = (ev) => {
			if (!active) return;
			end(ev);
		};
		const onCancel = (ev) => {
			if (!active) return;
			active = false;
			overlay.style.display = "none";
			try {
				host.releasePointerCapture(ev.pointerId);
			} catch {}
			host.dispatchEvent(new CustomEvent(JUNCTION_SELECT_EVENTS.cancel, {
				bubbles: true,
				detail: { host }
			}));
		};
		pushDisposable(host, "ui-junction-select", () => {
			overlay.remove();
		});
		pushDisposable(host, "ui-junction-select", addEvent(host, "pointerdown", onDown));
		pushDisposable(host, "ui-junction-select", addEvent(host, "pointermove", onMove));
		pushDisposable(host, "ui-junction-select", addEvent(host, "pointerup", onUp));
		pushDisposable(host, "ui-junction-select", addEvent(host, "pointercancel", onCancel));
		return this;
	}
	disconnect(wEl) {
		const host = wEl?.deref?.();
		if (host) runDisposers(host, "ui-junction-select");
		return this;
	}
};
var JunctionDragMixin = class extends DOMMixin {
	constructor() {
		super("ui-junction-drag");
	}
	connect(wEl) {
		const host = wEl?.deref?.();
		if (!host) return this;
		setStyleProperty(host, "--jx-drag-x", parsePxVar(host, "--jx-drag-x"));
		setStyleProperty(host, "--jx-drag-y", parsePxVar(host, "--jx-drag-y"));
		const previousTransform = host.style.transform;
		if (!host.style.transform || host.style.transform === "none") host.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)";
		const handle = queryHandle(host, "data-junction-drag-handle", host);
		let dragging = false;
		let startX = 0;
		let startY = 0;
		let baseX = 0;
		let baseY = 0;
		const onDown = (ev) => {
			if (ev.button !== 0) return;
			if (ev.target !== handle && !handle.contains(ev.target)) return;
			dragging = true;
			startX = ev.clientX;
			startY = ev.clientY;
			baseX = parsePxVar(host, "--jx-drag-x");
			baseY = parsePxVar(host, "--jx-drag-y");
			handle.setPointerCapture(ev.pointerId);
			host.dispatchEvent(new CustomEvent(JUNCTION_DRAG_EVENTS.start, {
				bubbles: true,
				detail: {
					host,
					clientX: ev.clientX,
					clientY: ev.clientY,
					baseX,
					baseY
				}
			}));
		};
		const onMove = (ev) => {
			if (!dragging) return;
			const dx = ev.clientX - startX;
			const dy = ev.clientY - startY;
			const nx = baseX + dx;
			const ny = baseY + dy;
			setStyleProperty(host, "--jx-drag-x", nx);
			setStyleProperty(host, "--jx-drag-y", ny);
			host.dispatchEvent(new CustomEvent(JUNCTION_DRAG_EVENTS.move, {
				bubbles: true,
				detail: {
					host,
					dx,
					dy,
					x: nx,
					y: ny
				}
			}));
		};
		const onUp = (ev) => {
			if (!dragging) return;
			dragging = false;
			try {
				handle.releasePointerCapture(ev.pointerId);
			} catch {}
			host.dispatchEvent(new CustomEvent(JUNCTION_DRAG_EVENTS.end, {
				bubbles: true,
				detail: {
					host,
					x: parsePxVar(host, "--jx-drag-x"),
					y: parsePxVar(host, "--jx-drag-y")
				}
			}));
		};
		pushDisposable(host, "ui-junction-drag", () => {
			host.style.transform = previousTransform;
		});
		pushDisposable(host, "ui-junction-drag", addEvent(handle, "pointerdown", onDown));
		pushDisposable(host, "ui-junction-drag", addEvent(handle, "pointermove", onMove));
		pushDisposable(host, "ui-junction-drag", addEvent(handle, "pointerup", onUp));
		pushDisposable(host, "ui-junction-drag", addEvent(handle, "pointercancel", onUp));
		return this;
	}
	disconnect(wEl) {
		const host = wEl?.deref?.();
		if (host) runDisposers(host, "ui-junction-drag");
		return this;
	}
};
var JunctionResizeMixin = class extends DOMMixin {
	constructor() {
		super("ui-junction-resize");
	}
	connect(wEl) {
		const host = wEl?.deref?.();
		if (!host) return this;
		const handle = queryHandle(host, "data-junction-resize-handle", host);
		let resizing = false;
		let sx = 0;
		let sy = 0;
		let sw = 0;
		let sh = 0;
		const minW = Math.max(120, parseFloat(host.getAttribute("data-junction-resize-min-w") || "") || 120);
		const minH = Math.max(80, parseFloat(host.getAttribute("data-junction-resize-min-h") || "") || 80);
		const onDown = (ev) => {
			if (ev.button !== 0) return;
			if (ev.target !== handle && !handle.contains(ev.target)) return;
			resizing = true;
			sx = ev.clientX;
			sy = ev.clientY;
			sw = host.offsetWidth;
			sh = host.offsetHeight;
			handle.setPointerCapture(ev.pointerId);
			host.dispatchEvent(new CustomEvent(JUNCTION_RESIZE_EVENTS.start, {
				bubbles: true,
				detail: {
					host,
					width: sw,
					height: sh
				}
			}));
		};
		const onMove = (ev) => {
			if (!resizing) return;
			const nw = Math.max(minW, sw + (ev.clientX - sx));
			const nh = Math.max(minH, sh + (ev.clientY - sy));
			host.style.width = `${nw}px`;
			host.style.height = `${nh}px`;
			host.dispatchEvent(new CustomEvent(JUNCTION_RESIZE_EVENTS.move, {
				bubbles: true,
				detail: {
					host,
					width: nw,
					height: nh
				}
			}));
		};
		const onUp = (ev) => {
			if (!resizing) return;
			resizing = false;
			try {
				handle.releasePointerCapture(ev.pointerId);
			} catch {}
			host.dispatchEvent(new CustomEvent(JUNCTION_RESIZE_EVENTS.end, {
				bubbles: true,
				detail: {
					host,
					width: host.offsetWidth,
					height: host.offsetHeight
				}
			}));
		};
		pushDisposable(host, "ui-junction-resize", addEvent(handle, "pointerdown", onDown));
		pushDisposable(host, "ui-junction-resize", addEvent(handle, "pointermove", onMove));
		pushDisposable(host, "ui-junction-resize", addEvent(handle, "pointerup", onUp));
		pushDisposable(host, "ui-junction-resize", addEvent(handle, "pointercancel", onUp));
		return this;
	}
	disconnect(wEl) {
		const host = wEl?.deref?.();
		if (host) runDisposers(host, "ui-junction-resize");
		return this;
	}
};
new JunctionSelectMixin();
new JunctionDragMixin();
new JunctionResizeMixin();
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/mixins/Draggable.ts
/**
* Anchorable drag / resize: wires `data-mixin` junction controllers + optional CSS Anchor Positioning names.
*
* WHY: `--jx-frame` / `--jx-drag-handle` / `--jx-resize-handle` pair with `position-anchor` / `anchor()`
* in author styles without imperative `DragHandler` setup.
*/
var ANCHOR_IDENT = /^--[-\w]+$/;
function tokenSelector(el, attr, value) {
	el.setAttribute(attr, value);
	return `[${attr}="${value}"]`;
}
function resolveHandleSelector(frame, handle, attrPrefix) {
	if (!handle || handle === frame) return void 0;
	return tokenSelector(handle, "data-jx-anchor-ctl", `${attrPrefix}-${Math.random().toString(36).slice(2, 10)}`);
}
/** Apply `anchor-name` when valid dashed ident. */
function applyAnchorName(el, name) {
	if (!el || !name) return;
	if (!ANCHOR_IDENT.test(name)) return;
	el.style.setProperty("anchor-name", name);
}
/**
* Declaratively enable junction drag (+ optional resize) and publish CSS anchor names.
* Returns teardown (restores previous `data-mixin` text only; anchor-name cleanup is best-effort).
*/
function bindAnchorableDragResize(opts) {
	const { frame } = opts;
	const prevMixinAttr = frame.getAttribute("data-mixin") ?? "";
	const prevDragSel = frame.getAttribute("data-junction-drag-handle");
	const prevResizeSel = frame.getAttribute("data-junction-resize-handle");
	const prevMinW = frame.getAttribute("data-junction-resize-min-w");
	const prevMinH = frame.getAttribute("data-junction-resize-min-h");
	const wantResize = opts.resizeHandle !== null;
	const mixins = new Set(prevMixinAttr.split(/\s+/).filter(Boolean));
	mixins.add("ui-junction-drag");
	if (wantResize) mixins.add("ui-junction-resize");
	else mixins.delete("ui-junction-resize");
	frame.setAttribute("data-mixin", [...mixins].join(" "));
	if (typeof opts.dragHandle === "string") frame.setAttribute("data-junction-drag-handle", opts.dragHandle);
	else if (opts.dragHandle instanceof HTMLElement) {
		const sel = resolveHandleSelector(frame, opts.dragHandle, "drag");
		if (sel) frame.setAttribute("data-junction-drag-handle", sel);
	}
	if (wantResize) {
		if (typeof opts.resizeHandle === "string") frame.setAttribute("data-junction-resize-handle", opts.resizeHandle);
		else if (opts.resizeHandle instanceof HTMLElement) {
			const sel = resolveHandleSelector(frame, opts.resizeHandle, "rz");
			if (sel) frame.setAttribute("data-junction-resize-handle", sel);
		}
	} else frame.removeAttribute("data-junction-resize-handle");
	if (opts.minWidth != null) frame.setAttribute("data-junction-resize-min-w", String(opts.minWidth));
	if (opts.minHeight != null) frame.setAttribute("data-junction-resize-min-h", String(opts.minHeight));
	const a = opts.anchors ?? {};
	const frameAnchor = a.frame ?? "--jx-frame";
	const dragA = a.dragHandle ?? "--jx-drag-handle";
	const rzA = a.resizeHandle ?? "--jx-resize-handle";
	applyAnchorName(frame, frameAnchor);
	let dragEl;
	if (typeof opts.dragHandle === "string") dragEl = frame.querySelector(opts.dragHandle);
	else dragEl = opts.dragHandle;
	applyAnchorName(dragEl, dragEl && dragEl !== frame ? dragA : void 0);
	let rzEl;
	if (wantResize) {
		if (typeof opts.resizeHandle === "string") rzEl = frame.querySelector(opts.resizeHandle);
		else rzEl = opts.resizeHandle ?? void 0;
		applyAnchorName(rzEl, rzA);
	}
	updateAllMixins(frame);
	return () => {
		if (prevMixinAttr) frame.setAttribute("data-mixin", prevMixinAttr);
		else frame.removeAttribute("data-mixin");
		if (prevDragSel != null) frame.setAttribute("data-junction-drag-handle", prevDragSel);
		else frame.removeAttribute("data-junction-drag-handle");
		if (prevResizeSel != null) frame.setAttribute("data-junction-resize-handle", prevResizeSel);
		else frame.removeAttribute("data-junction-resize-handle");
		if (prevMinW != null) frame.setAttribute("data-junction-resize-min-w", prevMinW);
		else frame.removeAttribute("data-junction-resize-min-w");
		if (prevMinH != null) frame.setAttribute("data-junction-resize-min-h", prevMinH);
		else frame.removeAttribute("data-junction-resize-min-h");
		frame.style.removeProperty("anchor-name");
		dragEl?.style?.removeProperty("anchor-name");
		rzEl?.removeAttribute("data-jx-anchor-ctl");
		dragEl?.removeAttribute("data-jx-anchor-ctl");
		rzEl?.style?.removeProperty("anchor-name");
		updateAllMixins(frame);
	};
}
//#endregion
//#region ../../modules/projects/lur.e/src/design/anchor/Utils.ts
var generateAnchorId = () => {
	return "--" + Math.random().toString(36).substring(2, 15).replace(/[0-9]/g, "");
};
var getComputedZIndex = (element) => {
	if (element?.computedStyleMap) return Number(element.computedStyleMap().get("z-index")?.toString() || 0) || 0;
	else return Number(getComputedStyle(element?.element ?? element).getPropertyValue("z-index") || 0) || 0;
};
var getExistsZIndex = (element) => {
	if (!element) return 0;
	if (element?.attributeStyleMap && element.attributeStyleMap.get("z-index") != null) return Number(element.attributeStyleMap.get("z-index")?.value ?? 0) || 0;
	if (element?.style && "zIndex" in element.style && element.style.zIndex != null) return Number(element.style.zIndex || 0) || 0;
	return getComputedZIndex(element);
};
var ReactiveCSSValue = class {
	value;
	unit;
	constructor(initialValue, unit = "px") {
		const parsed = typeof initialValue === "string" ? CSSUnitConverter.parseValue(initialValue) : {
			value: initialValue,
			unit
		};
		this.value = numberRef(parsed.value);
		this.unit = parsed.unit;
	}
	get cssValue() {
		return CSSBinder.bindWithUnit({}, "", this.value, this.unit);
	}
	toUnit(targetUnit) {
		return CSSCalc.multiply(this.value, numberRef(1));
	}
	bindTo(element, property) {
		return CSSBinder.bindWithUnit(element, property, this.value, this.unit);
	}
};
var ReactiveTransform = class {
	transforms = [];
	translate(x, y) {
		const vector = typeof x === "number" && typeof y === "number" ? {
			x: numberRef(x),
			y: numberRef(y)
		} : {
			x: typeof x === "number" ? numberRef(x) : x,
			y: typeof y === "number" ? numberRef(y) : y
		};
		this.transforms.push(CSSTransform.translate2D(vector));
		return this;
	}
	scale(x, y) {
		const scaleX = typeof x === "number" ? numberRef(x) : x;
		const scaleY = y !== void 0 ? typeof y === "number" ? numberRef(y) : y : scaleX;
		this.transforms.push(CSSTransform.scale2D({
			x: scaleX,
			y: scaleY
		}));
		return this;
	}
	rotate(angle) {
		const angleRef = typeof angle === "number" ? numberRef(angle) : angle;
		this.transforms.push(CSSTransform.rotate(angleRef));
		return this;
	}
	get value() {
		return CSSTransform.combine(this.transforms);
	}
	bindTo(element) {
		return CSSBinder.bindTransform(element, {
			x: numberRef(0),
			y: numberRef(0)
		});
	}
};
var ReactiveAnimation = class {
	element;
	properties;
	duration;
	easing;
	constructor(element, duration = 1e3, easing = "ease-out") {
		this.element = element;
		this.properties = /* @__PURE__ */ new Map();
		this.duration = duration;
		this.easing = easing;
	}
	animateProperty(property, from, to) {
		const value = numberRef(from);
		this.properties.set(property, value);
		CSSBinder.bindWithUnit(this.element, property, value);
		this.animateValue(value, from, to);
		return this;
	}
	animateValue(ref, from, to) {
		const startTime = performance.now();
		const animate = (currentTime) => {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / this.duration, 1);
			const easedProgress = this.applyEasing(progress);
			ref.value = from + (to - from) * easedProgress;
			if (progress < 1) requestAnimationFrame(animate);
		};
		requestAnimationFrame(animate);
	}
	applyEasing(t) {
		switch (this.easing) {
			case "ease-out": return 1 - Math.pow(1 - t, 3);
			case "ease-in": return t * t * t;
			case "ease-in-out": return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
			default: return t;
		}
	}
};
var ReactiveMediaQuery = class {
	query;
	matches;
	constructor(query) {
		this.query = query;
		this.matches = numberRef(0);
		const mediaQuery = window?.matchMedia(query);
		this.matches.value = mediaQuery.matches ? 1 : 0;
		mediaQuery?.addEventListener("change", (e) => {
			this.matches.value = e.matches ? 1 : 0;
		});
	}
	get reactiveMatches() {
		return this.matches;
	}
	valueIfMatches(ifTrue, ifFalse) {
		return this.matches.value ? ifTrue : ifFalse;
	}
};
var ReactiveViewport = class {
	static width = numberRef(typeof window != "undefined" ? window?.innerWidth : 0);
	static height = numberRef(typeof window != "undefined" ? window?.innerHeight : 0);
	static init() {
		const updateSize = () => {
			this.width.value = window?.innerWidth;
			this.height.value = window?.innerHeight;
		};
		if (typeof window != "undefined") window?.addEventListener?.("resize", updateSize);
	}
	static center() {
		return {
			x: CSSCalc.divide(this.width, numberRef(2)),
			y: CSSCalc.divide(this.height, numberRef(2))
		};
	}
};
ReactiveViewport.init();
var ReactiveElementSize = class {
	element;
	size;
	observer;
	constructor(element) {
		this.element = element;
		this.size = {
			width: numberRef(element.offsetWidth),
			height: numberRef(element.offsetHeight)
		};
		this.observer = new ResizeObserver((entries) => {
			for (const entry of entries) if (entry.target === element) {
				this.size.width.value = entry.contentRect.width;
				this.size.height.value = entry.contentRect.height;
			}
		});
		this.observer.observe(element);
	}
	get width() {
		return this.size.width;
	}
	get height() {
		return this.size.height;
	}
	center() {
		return {
			x: CSSCalc.divide(this.size.width, numberRef(2)),
			y: CSSCalc.divide(this.size.height, numberRef(2))
		};
	}
	destroy() {
		this.observer.disconnect();
	}
};
var ReactiveScroll = class {
	element;
	scrollLeft;
	scrollTop;
	constructor(element = document.documentElement) {
		this.element = element;
		this.scrollLeft = numberRef(element.scrollLeft);
		this.scrollTop = numberRef(element.scrollTop);
		element.addEventListener("scroll", () => {
			this.scrollLeft.value = element.scrollLeft;
			this.scrollTop.value = element.scrollTop;
		});
	}
	get left() {
		return this.scrollLeft;
	}
	get top() {
		return this.scrollTop;
	}
	progress(axis = "y") {
		const scrollSize = axis === "x" ? this.element.scrollWidth - this.element.clientWidth : this.element.scrollHeight - this.element.clientHeight;
		const scrollPos = axis === "x" ? this.scrollLeft : this.scrollTop;
		return CSSCalc.divide(scrollPos, numberRef(Math.max(scrollSize, 1)));
	}
};
//#endregion
//#region ../../modules/projects/lur.e/src/design/layers/stacking.ts
var defaultZIndexShift = (role) => role === "underlying" ? -1 : 1;
/**
* Returns numeric z-index to apply, or null to leave unset
* (order-equal when main has no explicit z-index — DOM paint order wins).
*/
function resolveLayerZIndex(main, options) {
	const role = options.role;
	const stackMode = options.stackMode ?? "shift";
	const mainZ = getExistsZIndex(main);
	const mainStyleZ = (main.style?.zIndex ?? "").trim();
	const mainIsAuto = !mainStyleZ || mainStyleZ === "auto";
	if (stackMode === "order-equal") {
		if (mainIsAuto) return null;
		return mainZ;
	}
	const shift = options.zIndexShift ?? defaultZIndexShift(role);
	return Math.max(mainIsAuto ? 0 : mainZ + shift, 0);
}
//#endregion
//#region ../../modules/projects/lur.e/src/design/anchor/CSSAnchor.ts
var registeredAnchorIds = /* @__PURE__ */ new WeakMap();
var registeredAnchors = /* @__PURE__ */ new WeakMap();
var CSSAnchor = class {
	source;
	anchorId;
	constructor(source) {
		this.source = source;
		registeredAnchors.set(source, this);
		this.anchorId = registeredAnchorIds.getOrInsert(source, generateAnchorId());
		this.source.style.setProperty("anchor-name", this.anchorId);
		this.source.style.setProperty("position-visibility", `always`);
	}
	connectElement(connect, { placement = "fill", zIndexShift = 1, inset = 0, size = "100%", transformOrigin = "50% 50%" }) {
		if (placement == "fill") {
			connect.style.setProperty("inset-block-start", `anchor(start, ${inset}px)`);
			connect.style.setProperty("inset-inline-start", `anchor(start, ${inset}px)`);
			connect.style.setProperty("inset-block-end", `anchor(end, ${inset}px)`);
			connect.style.setProperty("inset-inline-end", `anchor(end, ${inset}px)`);
			connect.style.setProperty("inline-size", `anchor-size(inline, ${size})`);
			connect.style.setProperty("block-size", `anchor-size(block, ${size})`);
			connect.style.setProperty("transform-origin", transformOrigin);
		} else if (placement == "bottom") {
			connect.style.setProperty("inset-block-start", `anchor(end, ${inset}px)`);
			connect.style.setProperty("inset-inline-start", `anchor(start, ${inset}px)`);
			connect.style.setProperty("inline-size", `anchor-size(self-inline, ${size})`);
			connect.style.setProperty("transform-origin", transformOrigin);
		} else if (placement == "top") {
			connect.style.setProperty("inset-block-end", `anchor(start, ${inset}px)`);
			connect.style.setProperty("inset-inline-start", `anchor(start, ${inset}px)`);
			connect.style.setProperty("inline-size", `anchor-size(self-inline, ${size})`);
			connect.style.setProperty("transform-origin", transformOrigin);
		} else if (placement == "left") {
			connect.style.setProperty("inset-inline-start", `anchor(end, ${inset}px)`);
			connect.style.setProperty("inset-block-start", `anchor(start, ${inset}px)`);
			connect.style.setProperty("block-size", `anchor-size(self-block, ${size})`);
			connect.style.setProperty("transform-origin", transformOrigin);
		} else if (placement == "right") {
			connect.style.setProperty("inset-inline-end", `anchor(start, ${inset}px)`);
			connect.style.setProperty("inset-block-start", `anchor(start, ${inset}px)`);
			connect.style.setProperty("block-size", `anchor-size(self-block, ${size})`);
			connect.style.setProperty("transform-origin", transformOrigin);
		} else if (placement == "center") {
			connect.style.setProperty("inset-inline-start", `anchor(center, ${inset}px)`);
			connect.style.setProperty("inset-block-start", `anchor(center, ${inset}px)`);
			connect.style.setProperty("inline-size", `anchor-size(self-inline, ${size})`);
			connect.style.setProperty("block-size", `anchor-size(self-block, ${size})`);
			connect.style.setProperty("transform-origin", transformOrigin);
		}
		connect.style.setProperty("position-visibility", `always`);
		connect.style.setProperty("position-anchor", this.anchorId);
		connect.style.setProperty("position", `absolute`);
		connect.style.setProperty("position-area", `span-all`);
		connect.style.setProperty("z-index", String(getExistsZIndex(this.source ?? connect) + zIndexShift));
		return this;
	}
	connectWithContainerQuery(connect, { placement = "fill", containerQuery = "(min-width: 768px)", fallbackPlacement = "bottom", zIndexShift = 1, inset = 0, size = "100%" }) {
		const mediaQuery = globalThis.matchMedia ? globalThis.matchMedia(containerQuery) : null;
		const updatePosition = () => {
			if (CSS.supports && CSS.supports("anchor-name", this.anchorId) && mediaQuery?.matches) this.connectElement(connect, {
				placement,
				zIndexShift,
				inset,
				size
			});
			else {
				connect.style.removeProperty("position-anchor");
				connect.style.removeProperty("anchor-name");
				connect.style.setProperty("position", "absolute");
				connect.style.setProperty("z-index", String(getExistsZIndex(this.source ?? connect) + zIndexShift));
				const sourceRect = this.source.getBoundingClientRect();
				if (fallbackPlacement === "bottom") {
					connect.style.setProperty("top", `${sourceRect.bottom + inset}px`);
					connect.style.setProperty("left", `${sourceRect.left + inset}px`);
					connect.style.setProperty("width", size);
				} else if (fallbackPlacement === "top") {
					connect.style.setProperty("bottom", `${globalThis.innerHeight - sourceRect.top + inset}px`);
					connect.style.setProperty("left", `${sourceRect.left + inset}px`);
					connect.style.setProperty("width", size);
				} else if (fallbackPlacement === "right") {
					connect.style.setProperty("top", `${sourceRect.top + inset}px`);
					connect.style.setProperty("left", `${sourceRect.right + inset}px`);
					connect.style.setProperty("height", size);
				} else if (fallbackPlacement === "left") {
					connect.style.setProperty("top", `${sourceRect.top + inset}px`);
					connect.style.setProperty("right", `${globalThis.innerWidth - sourceRect.left + inset}px`);
					connect.style.setProperty("height", size);
				}
			}
		};
		if (mediaQuery) {
			mediaQuery.addEventListener("change", updatePosition);
			updatePosition();
		}
		return () => mediaQuery?.removeEventListener("change", updatePosition);
	}
};
var makeAnchorElement = (anchorElement) => {
	return registeredAnchors.getOrInsert(anchorElement, new CSSAnchor(anchorElement));
};
//#endregion
//#region ../../modules/projects/lur.e/src/design/anchor/BBoxAnchor.ts
function boundingBoxAnchorRef(anchor, options) {
	if (!anchor) return () => {};
	const position = vector2Ref(0, 0);
	const size = vector2Ref(0, 0);
	const area = [
		position.x,
		position.y,
		size.x,
		size.y,
		numberRef(0),
		numberRef(0)
	];
	const rect = {
		position,
		size
	};
	const center = rectCenter(rect);
	const reactiveArea = rectArea(rect);
	const { root = anchor?.offsetParent ?? document.documentElement, observeResize = true, observeMutations = false } = options || {};
	const elementSize = new ReactiveElementSize(anchor);
	function updateArea() {
		const rect = anchor?.getBoundingClientRect?.() ?? {};
		position.x.value = rect?.left;
		position.y.value = rect?.top;
		size.x.value = rect?.right - rect?.left;
		size.y.value = rect?.bottom - rect?.top;
		area[4].value = rect?.right;
		area[5].value = rect?.bottom;
	}
	const listening = [
		addEvent(root, "scroll", updateArea, { capture: true }),
		addEvent(window, "resize", updateArea),
		addEvent(window, "scroll", updateArea, { capture: true })
	];
	let resizeObs;
	if (observeResize && "ResizeObserver" in window && typeof ResizeObserver != "undefined") {
		resizeObs = typeof ResizeObserver != "undefined" ? new ResizeObserver(updateArea) : void 0;
		resizeObs?.observe(anchor);
	}
	let mutationObs;
	if (observeMutations) {
		mutationObs = typeof MutationObserver != "undefined" ? new MutationObserver(updateArea) : void 0;
		mutationObs?.observe(anchor, {
			attributes: true,
			childList: true,
			subtree: true
		});
	}
	updateArea();
	function destroy() {
		listening.forEach((ub) => ub?.());
		resizeObs?.disconnect?.();
		mutationObs?.disconnect?.();
	}
	if (destroy) area.forEach((ub) => addToCallChain(ub, Symbol.dispose, destroy));
	return Object.assign(area, {
		position,
		size,
		rect,
		center,
		area: reactiveArea,
		elementSize,
		containsPoint: (point) => rectContainsPoint(rect, point),
		intersects: (otherRect) => rectIntersects(rect, otherRect),
		clampPoint: (point) => clampPointToRect(point, rect),
		distanceToPoint: (point) => pointToRectDistance(point, rect),
		bindPosition: (element) => CSSBinder.bindPosition(element, position),
		bindSize: (element) => CSSBinder.bindSize(element, size),
		bindCenter: (element) => CSSBinder.bindPosition(element, center),
		destroy: () => {
			elementSize.destroy();
			destroy();
		}
	});
}
var bindWithRect = (anchor, area, options) => {
	if (!anchor) return () => {};
	if (area?.connectElement) return area?.connectElement?.(anchor, options || {});
	const [left, top, width, height, right, bottom] = area;
	const usb = [];
	if (options?.placement == "fill") {
		usb.push(bindWith(anchor, "inset-block-start", CSSUnitUtils.asPx(left), handleStyleChange));
		usb.push(bindWith(anchor, "inset-inline-start", CSSUnitUtils.asPx(top), handleStyleChange));
		usb.push(bindWith(anchor, "inset-block-end", CSSUnitUtils.asPx(right), handleStyleChange));
		usb.push(bindWith(anchor, "inset-inline-end", CSSUnitUtils.asPx(bottom), handleStyleChange));
		usb.push(bindWith(anchor, "inline-size", CSSUnitUtils.asPx(width), handleStyleChange));
		usb.push(bindWith(anchor, "block-size", CSSUnitUtils.asPx(height), handleStyleChange));
	} else if (options?.placement == "bottom") {
		usb.push(bindWith(anchor, "inset-block-start", CSSUnitUtils.asPx(bottom), handleStyleChange));
		usb.push(bindWith(anchor, "inset-inline-start", CSSUnitUtils.asPx(left), handleStyleChange));
		usb.push(bindWith(anchor, "inline-size", CSSUnitUtils.asPx(width), handleStyleChange));
	} else if (options?.placement == "top") {
		usb.push(bindWith(anchor, "inset-block-end", CSSUnitUtils.asPx(top), handleStyleChange));
		usb.push(bindWith(anchor, "inset-inline-start", CSSUnitUtils.asPx(left), handleStyleChange));
		usb.push(bindWith(anchor, "inline-size", CSSUnitUtils.asPx(width), handleStyleChange));
	} else if (options?.placement == "left") {
		usb.push(bindWith(anchor, "inset-inline-end", CSSUnitUtils.asPx(right), handleStyleChange));
		usb.push(bindWith(anchor, "inset-block-start", CSSUnitUtils.asPx(top), handleStyleChange));
		usb.push(bindWith(anchor, "block-size", CSSUnitUtils.asPx(height), handleStyleChange));
	} else if (options?.placement == "right") {
		usb.push(bindWith(anchor, "inset-inline-start", CSSUnitUtils.asPx(left), handleStyleChange));
		usb.push(bindWith(anchor, "inset-block-start", CSSUnitUtils.asPx(top), handleStyleChange));
		usb.push(bindWith(anchor, "block-size", CSSUnitUtils.asPx(height), handleStyleChange));
	} else if (options?.placement == "center") {
		usb.push(bindWith(anchor, "inset-inline-start", CSSUnitUtils.asPx(left), handleStyleChange));
		usb.push(bindWith(anchor, "inset-block-start", CSSUnitUtils.asPx(top), handleStyleChange));
		usb.push(bindWith(anchor, "inline-size", CSSUnitUtils.asPx(width), handleStyleChange));
		usb.push(bindWith(anchor, "block-size", CSSUnitUtils.asPx(height), handleStyleChange));
	}
	return () => {
		usb?.forEach?.((ub) => ub?.());
	};
};
var bindScrollbarPosition = (scrollbar, anchorBox, axis, options) => {
	const { useIntersection = false, zIndexShift = 1 } = options || {};
	const usb = [];
	if (anchorBox?.connectElement) return anchorBox?.connectElement?.(scrollbar, Object.assign(options || {}, { placement: axis == "horizontal" ? "bottom" : "right" }));
	scrollbar.style.position = useIntersection ? "fixed" : "absolute";
	scrollbar.style.zIndex = `${zIndexShift}`;
	if (useIntersection) if (axis === "horizontal") {
		usb.push(bindWith(scrollbar, "left", CSSUnitUtils.asPx(anchorBox[0]), handleStyleChange));
		usb.push(bindWith(scrollbar, "top", CSSUnitUtils.asPx(anchorBox[5]), handleStyleChange));
		usb.push(bindWith(scrollbar, "width", CSSUnitUtils.asPx(anchorBox[2]), handleStyleChange));
	} else {
		usb.push(bindWith(scrollbar, "left", CSSUnitUtils.asPx(anchorBox[4]), handleStyleChange));
		usb.push(bindWith(scrollbar, "top", CSSUnitUtils.asPx(anchorBox[1]), handleStyleChange));
		usb.push(bindWith(scrollbar, "height", CSSUnitUtils.asPx(anchorBox[3]), handleStyleChange));
	}
	else if (axis === "horizontal") {
		usb.push(bindWith(scrollbar, "left", CSSUnitUtils.asPx(anchorBox[0]), handleStyleChange));
		usb.push(bindWith(scrollbar, "top", CSSUnitUtils.asPx(anchorBox[5]), handleStyleChange));
		usb.push(bindWith(scrollbar, "width", CSSUnitUtils.asPx(anchorBox[2]), handleStyleChange));
	} else {
		usb.push(bindWith(scrollbar, "left", CSSUnitUtils.asPx(anchorBox[4]), handleStyleChange));
		usb.push(bindWith(scrollbar, "top", CSSUnitUtils.asPx(anchorBox[1]), handleStyleChange));
		usb.push(bindWith(scrollbar, "height", CSSUnitUtils.asPx(anchorBox[3]), handleStyleChange));
	}
	return () => {
		usb?.forEach?.((ub) => ub?.());
	};
};
//#endregion
//#region ../../modules/projects/lur.e/src/design/anchor/IntersectionAnchor.ts
var computeIntersectionRect = (anchor, root = document.documentElement, includeExtendedInfo = false) => {
	const rootRect = getBoundingOrientRect(root) ?? root?.getBoundingClientRect?.();
	const anchorRect = getBoundingOrientRect(anchor) ?? anchor?.getBoundingClientRect?.();
	if (!anchorRect) return includeExtendedInfo ? {
		intersection: {
			left: 0,
			top: 0,
			right: 0,
			bottom: 0,
			width: 0,
			height: 0
		},
		anchor: {
			left: 0,
			top: 0,
			width: 0,
			height: 0
		},
		root: rootRect
	} : {
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		width: 0,
		height: 0
	};
	const intersectionLeft = Math.max(rootRect.left, anchorRect.left);
	const intersectionTop = Math.max(rootRect.top, anchorRect.top);
	const intersectionRight = Math.min(rootRect.right, anchorRect.right);
	const intersectionBottom = Math.min(rootRect.bottom, anchorRect.bottom);
	const intersection = intersectionRight > intersectionLeft && intersectionBottom > intersectionTop ? {
		left: intersectionLeft,
		top: intersectionTop,
		right: intersectionRight,
		bottom: intersectionBottom,
		width: intersectionRight - intersectionLeft,
		height: intersectionBottom - intersectionTop
	} : {
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		width: 0,
		height: 0
	};
	if (includeExtendedInfo) return {
		intersection,
		anchor: anchorRect,
		root: rootRect,
		anchorLeft: anchorRect.left,
		anchorTop: anchorRect.top,
		anchorRight: anchorRect.right,
		anchorBottom: anchorRect.bottom,
		anchorWidth: anchorRect.width,
		anchorHeight: anchorRect.height,
		rootLeft: rootRect.left,
		rootTop: rootRect.top,
		rootWidth: rootRect.width,
		rootHeight: rootRect.height
	};
	return intersection;
};
function intersectionBoxAnchorRef(anchor, options) {
	if (!anchor) return () => {};
	const area = [
		numberRef(0),
		numberRef(0),
		numberRef(0),
		numberRef(0),
		numberRef(0),
		numberRef(0)
	];
	const { root = anchor?.offsetParent ?? document.documentElement, iterateResize = true, iterateMutations = true, iterateIntersection = true } = options || {};
	function updateArea(intersectionRect) {
		const rect = intersectionRect ? {
			left: intersectionRect.left,
			top: intersectionRect.top,
			width: intersectionRect.width,
			height: intersectionRect.height,
			right: intersectionRect.right,
			bottom: intersectionRect.bottom
		} : computeIntersectionRect(anchor, root, false);
		area[0].value = rect?.left ?? 0;
		area[1].value = rect?.top ?? 0;
		area[2].value = rect?.width ?? 0;
		area[3].value = rect?.height ?? 0;
		area[4].value = rect?.right ?? 0;
		area[5].value = rect?.bottom ?? 0;
	}
	let resizeObs;
	if (observeResize && "ResizeObserver" in window && typeof ResizeObserver != "undefined") {
		resizeObs = typeof ResizeObserver != "undefined" ? new ResizeObserver((entries) => {
			for (const entry of entries) updateArea(entry.contentRect);
		}) : void 0;
		resizeObs?.observe(anchor);
	}
	let mutationObs;
	if (observeMutations) {
		mutationObs = typeof MutationObserver != "undefined" ? new MutationObserver((mutations) => {
			for (const mutation of mutations) updateArea(computeIntersectionRect(anchor, root, false));
		}) : void 0;
		mutationObs?.observe(anchor, {
			attributes: true,
			childList: true,
			subtree: true
		});
	}
	let intersectionObs;
	if (observeIntersection) {
		intersectionObs = typeof IntersectionObserver != "undefined" ? new IntersectionObserver((entries) => {
			for (const entry of entries) updateArea(entry.intersectionRect);
		}, {
			root: root instanceof HTMLElement ? root : null,
			threshold: [0],
			rootMargin: "0px"
		}) : void 0;
		intersectionObs?.observe(anchor);
	}
	const listening = [
		addEvent(root, "scroll", () => updateArea(computeIntersectionRect(anchor, root, false)), { capture: true }),
		addEvent(window, "resize", () => updateArea(computeIntersectionRect(anchor, root, false))),
		addEvent(window, "scroll", () => updateArea(computeIntersectionRect(anchor, root, false)), { capture: true })
	];
	updateArea(computeIntersectionRect(anchor, root, false));
	function destroy() {
		listening.forEach((ub) => ub?.());
		resizeObs?.disconnect?.();
		mutationObs?.disconnect?.();
		intersectionObs?.disconnect?.();
	}
	if (destroy) area.forEach((ub) => addToCallChain(ub, Symbol.dispose, destroy));
	return area;
}
function enhancedIntersectionBoxAnchorRef(anchor, options) {
	if (!anchor) return () => {};
	const area = [
		numberRef(0),
		numberRef(0),
		numberRef(0),
		numberRef(0),
		numberRef(0),
		numberRef(0),
		numberRef(0),
		numberRef(0),
		numberRef(0),
		numberRef(0),
		numberRef(0),
		numberRef(0),
		numberRef(0),
		numberRef(0)
	];
	const { root = anchor?.offsetParent ?? document.documentElement, iterateResize = true, iterateMutations = true, iterateIntersection = true } = options || {};
	function updateArea(intersectionRect) {
		const data = intersectionRect ? {
			intersection: {
				left: intersectionRect.left,
				top: intersectionRect.top,
				right: intersectionRect.right,
				bottom: intersectionRect.bottom,
				width: intersectionRect.width,
				height: intersectionRect.height
			},
			anchor: getBoundingOrientRect(anchor) ?? anchor?.getBoundingClientRect?.(),
			root: (root instanceof HTMLElement ? getBoundingOrientRect(root) ?? root?.getBoundingClientRect?.() : null) ?? {
				left: 0,
				top: 0,
				right: globalThis.innerWidth,
				bottom: globalThis.innerHeight,
				width: globalThis.innerWidth,
				height: globalThis.innerHeight
			}
		} : computeIntersectionRect(anchor, root, true);
		if (!data.anchor) return;
		area[0].value = data.intersection.left ?? 0;
		area[1].value = data.intersection.top ?? 0;
		area[2].value = data.intersection.width ?? 0;
		area[3].value = data.intersection.height ?? 0;
		area[4].value = data.intersection.right ?? 0;
		area[5].value = data.intersection.bottom ?? 0;
		area[6].value = data.anchor.left ?? 0;
		area[7].value = data.anchor.top ?? 0;
		area[8].value = data.anchor.width ?? 0;
		area[9].value = data.anchor.height ?? 0;
		area[10].value = data.root.left ?? 0;
		area[11].value = data.root.top ?? 0;
		area[12].value = data.root.width ?? 0;
		area[13].value = data.root.height ?? 0;
	}
	let resizeObs;
	if (observeResize && "ResizeObserver" in window && typeof ResizeObserver != "undefined") {
		resizeObs = typeof ResizeObserver != "undefined" ? new ResizeObserver((entries) => {
			for (const entry of entries) updateArea(entry.contentRect);
		}) : void 0;
		resizeObs?.observe(anchor);
	}
	let mutationObs;
	if (observeMutations) {
		mutationObs = typeof MutationObserver != "undefined" ? new MutationObserver((mutations) => {
			for (const mutation of mutations) updateArea(computeIntersectionRect(anchor, root, true).intersection);
		}) : void 0;
		mutationObs?.observe(anchor, {
			attributes: true,
			childList: true,
			subtree: true
		});
	}
	let intersectionObs;
	if (observeIntersection) {
		intersectionObs = typeof IntersectionObserver != "undefined" ? new IntersectionObserver((entries) => {
			for (const entry of entries) updateArea(entry.intersectionRect);
		}, {
			root: root instanceof HTMLElement ? root : null,
			threshold: [
				0,
				.1,
				.2,
				.3,
				.4,
				.5,
				.6,
				.7,
				.8,
				.9,
				1
			],
			rootMargin: "0px"
		}) : void 0;
		intersectionObs?.observe(anchor);
	}
	const listening = [
		addEvent(root, "scroll", () => updateArea(computeIntersectionRect(anchor, root, true).intersection), { capture: true }),
		addEvent(window, "resize", () => updateArea(computeIntersectionRect(anchor, root, true).intersection)),
		addEvent(window, "scroll", () => updateArea(computeIntersectionRect(anchor, root, true).intersection), { capture: true })
	];
	updateArea(computeIntersectionRect(anchor, root, true).intersection);
	function destroy() {
		listening.forEach((ub) => ub?.());
		resizeObs?.disconnect?.();
		mutationObs?.disconnect?.();
		intersectionObs?.disconnect?.();
	}
	if (destroy) area.forEach((ub) => addToCallChain(ub, Symbol.dispose, destroy));
	return area;
}
//#endregion
//#region ../../modules/projects/lur.e/src/design/layers/AnchorOverlay.ts
var getParentOrShadowRoot = (element) => {
	if (element?.parentElement) return !(element?.parentElement instanceof DocumentFragment) ? element?.parentElement : void 0;
	return element?.host?.shadowRoot;
};
var observeDisconnect = (element, handleMutation) => {
	if (!element?.isConnected) return handleMutation();
	const observer = new MutationObserver((mutationList, observer) => {
		for (const mutation of mutationList) if (mutation.type == "childList") {
			if (Array.from(mutation?.removedNodes || []).some((node) => node === element || node?.contains?.(element))) {
				queueMicrotask(() => handleMutation(mutation));
				observer?.disconnect?.();
			}
		}
	});
	const parent = getParentOrShadowRoot(element) ?? document.documentElement;
	const observed = (parent instanceof HTMLElement ? parent : parent?.host) ?? parent;
	queueMicrotask(() => observer.observe(observed, {
		subtree: true,
		childList: true
	}));
};
var observeConnect = (element, handleMutation) => {
	if (element?.isConnected) return handleMutation();
	const observer = new MutationObserver((_mutationList, obs) => {
		if (!element?.isConnected) return;
		queueMicrotask(() => handleMutation());
		obs?.disconnect?.();
	});
	const parent = getParentOrShadowRoot(element);
	const observed = (parent instanceof HTMLElement && parent.isConnected ? parent : null) ?? document.documentElement;
	queueMicrotask(() => {
		if (element?.isConnected) {
			handleMutation();
			observer.disconnect();
			return;
		}
		observer.observe(observed, {
			subtree: true,
			childList: true
		});
	});
};
var connectWithPlacement = (anchorBinder, layer, placement, zIndexShift, inset, size, transformOrigin) => {
	if (placement === "scrollbar-x") anchorBinder.connectElement(layer, {
		placement: "bottom",
		zIndexShift,
		inset,
		size,
		transformOrigin
	});
	else if (placement === "scrollbar-y") anchorBinder.connectElement(layer, {
		placement: "right",
		zIndexShift,
		inset,
		size,
		transformOrigin
	});
	else anchorBinder.connectElement(layer, {
		placement,
		zIndexShift,
		inset,
		size,
		transformOrigin
	});
};
/**
* Insert `layer` as a sibling of `anchor` (before = underlying, after = overlaying),
* bind CSS anchor placement, and apply hybrid stacking.
*/
var appendAsLayer = (anchor, layer, self, options) => {
	const role = options?.role ?? "overlaying";
	const stackMode = options?.stackMode ?? "shift";
	const zIndexShift = options?.zIndexShift ?? defaultZIndexShift(role);
	const placement = options?.placement ?? "fill";
	const positioning = options?.positioning ?? "anchor";
	const inset = options?.inset ?? 0;
	const size = options?.size ?? "100%";
	const transformOrigin = options?.transformOrigin ?? "50% 50%";
	anchor ??= self?.children?.[0] ?? anchor;
	if (!anchor && (self?.children?.length ?? 0) < 1) {
		const fillAnchorBox = document.createElement("div");
		fillAnchorBox.classList.add("ui-window-frame-anchor-box");
		fillAnchorBox.style.position = "relative";
		fillAnchorBox.style.inlineSize = "stretch";
		fillAnchorBox.style.blockSize = "stretch";
		fillAnchorBox.style.zIndex = String(Math.max(zIndexShift - 0, 0));
		fillAnchorBox.style.pointerEvents = "none";
		fillAnchorBox.style.opacity = "1";
		fillAnchorBox.style.visibility = "visible";
		fillAnchorBox.style.backgroundColor = "transparent";
		self?.append?.(anchor = fillAnchorBox);
	}
	if (anchor == null || layer == null) return;
	const resolvedZ = resolveLayerZIndex(anchor, {
		role,
		stackMode,
		zIndexShift
	});
	if (resolvedZ == null) layer.style.removeProperty("z-index");
	else layer.style.setProperty("z-index", String(resolvedZ));
	if (role === "underlying") {
		if (!layer.style.pointerEvents) layer.style.pointerEvents = "none";
	}
	if (positioning === "contain") {
		const host = (self instanceof HTMLElement ? self : null) ?? getParentOrShadowRoot(anchor) ?? anchor.parentElement;
		if (host instanceof HTMLElement) {
			if (getComputedStyle(host).position === "static") host.style.position = "relative";
		}
		layer.style.position = "absolute";
		layer.style.inset = inset ? `${inset}px` : "0";
		layer.style.inlineSize = "auto";
		layer.style.blockSize = "auto";
		layer.style.removeProperty("position-anchor");
		layer.style.removeProperty("position-area");
		layer.style.removeProperty("anchor-name");
		observeConnect(anchor, () => {
			const parent = (self instanceof HTMLElement ? self : null) ?? getParentOrShadowRoot(anchor) ?? anchor.parentElement;
			if (role === "underlying") anchor?.before?.(layer);
			else anchor?.after?.(layer);
			observeDisconnect(parent ?? anchor, () => layer?.remove?.());
		});
		return anchor;
	}
	const anchorBinder = makeAnchorElement(anchor);
	connectWithPlacement(anchorBinder, layer, placement, zIndexShift, inset, size, transformOrigin);
	if (resolvedZ == null) layer.style.removeProperty("z-index");
	else layer.style.setProperty("z-index", String(resolvedZ));
	observeConnect(anchor, () => {
		const parent = getParentOrShadowRoot(anchor) ?? self;
		(parent instanceof HTMLElement ? parent : parent?.host)?.style?.setProperty?.("anchor-scope", anchorBinder.anchorId);
		if (role === "underlying") anchor?.before?.(layer);
		else anchor?.after?.(layer);
		observeDisconnect(parent, () => layer?.remove?.());
	});
	return anchor;
};
var appendAsUnderlying = (main, layer, options, maybeOptions) => {
	let self = null;
	let opts;
	if (options && typeof options.nodeType === "number") {
		self = options;
		opts = maybeOptions;
	} else opts = options;
	return appendAsLayer(main, layer, self, {
		placement: "fill",
		...opts,
		role: "underlying"
	});
};
/** COMPAT: existing callers pass (anchor, overlay?, self?, options?). */
var appendAsOverlay = (anchor, overlay, self, options) => {
	return appendAsLayer(anchor, overlay, self, {
		...options,
		placement: options?.placement ?? "fill",
		zIndexShift: options?.zIndexShift ?? 1,
		stackMode: options?.stackMode ?? "shift",
		role: "overlaying"
	});
};
var appendScrollbarOverlay = (content, scrollbar, axis, options) => {
	const { zIndexShift = 1, autoPosition = true, useIntersection = false, theme = "default" } = options || {};
	scrollbar.classList.add(`scrollbar-theme-${theme}`);
	scrollbar.setAttribute("data-axis", axis);
	const cleanupFunctions = [];
	if (autoPosition) if (useIntersection) {
		const intersectionBox = enhancedIntersectionBoxAnchorRef(content, {
			root: window,
			observeResize: true,
			observeMutations: true,
			observeIntersection: true
		});
		cleanupFunctions.push(bindScrollbarPosition(scrollbar, intersectionBox, axis, {
			useIntersection: true,
			zIndexShift
		}));
	} else {
		const box = boundingBoxAnchorRef(content, {
			observeResize: true,
			observeMutations: true
		});
		cleanupFunctions.push(bindScrollbarPosition(scrollbar, box, axis, {
			useIntersection: false,
			zIndexShift
		}));
	}
	if (!scrollbar.parentNode) document.body.appendChild(scrollbar);
	observeDisconnect(content, () => {
		cleanupFunctions.forEach((cleanup) => cleanup());
		scrollbar.remove();
	});
	return scrollbar;
};
var createReactiveScrollbarOverlay = (content, axis = "vertical") => {
	const scrollbar = document.createElement("div");
	scrollbar.className = `reactive-scrollbar reactive-scrollbar-${axis}`;
	scrollbar.style.background = "rgba(0,0,0,0.3)";
	scrollbar.style.borderRadius = "4px";
	scrollbar.style.position = "absolute";
	scrollbar.style.zIndex = "1000";
	if (axis === "horizontal") {
		scrollbar.style.height = "8px";
		scrollbar.style.width = "100px";
	} else {
		scrollbar.style.width = "8px";
		scrollbar.style.height = "100px";
	}
	return appendScrollbarOverlay(content, scrollbar, axis, {
		autoPosition: true,
		useIntersection: true,
		theme: "default"
	});
};
//#endregion
//#region ../../modules/projects/lur.e/src/design/layers/Register.ts
var registered = /* @__PURE__ */ new Map();
var registerLayerElement = (name, construct, opts = { role: "overlaying" }) => {
	const withIt = /* @__PURE__ */ new WeakMap();
	const bindWith = (content, holder, inputChange) => {
		if (content?.style?.anchorName || withIt?.has?.(content)) return false;
		if (content) {
			const self = construct?.(content, holder, inputChange);
			withIt?.set?.(content, self);
			if (opts.role === "underlying") appendAsUnderlying(content, self, holder);
			else appendAsOverlay(content, self, holder);
		}
		return true;
	};
	class LayerModifier extends DOMMixin {
		constructor(n) {
			super(n);
		}
		connect(ws) {
			const self = ws?.deref?.() ?? ws;
			if (withIt?.has?.(self)) return;
			bindWith(self);
		}
	}
	const pack = [
		withIt,
		bindWith,
		LayerModifier
	];
	registered.set(name, pack);
	new LayerModifier(name);
	return pack;
};
/** COMPAT: previous overlay-only registrar. */
var registerOverlayElement = (name, construct) => registerLayerElement(name, construct, { role: "overlaying" });
var registerUnderlyingElement = (name, construct) => registerLayerElement(name, construct, { role: "underlying" });
//#endregion
//#region ../../modules/projects/lur.e/src/design/layers/UnderlyingShadow.ts
var UnderlyingShadow = class {
	shadowContainer;
	shadowElement;
	geometryClone;
	target;
	options;
	anchorBox;
	cleanupFunctions = [];
	constructor(options) {
		this.target = options.target;
		this.options = {
			shadowType: "drop-shadow",
			shadowColor: "rgba(0, 0, 0, 0.25)",
			shadowBlur: 8,
			shadowOffsetX: 0,
			shadowOffsetY: 4,
			spreadRadius: 0,
			opacity: 1,
			inset: 0,
			zIndexShift: -1,
			useIntersection: false,
			cloneGeometry: true,
			updateOnScroll: true,
			updateOnResize: true,
			positioning: "contain",
			...options
		};
		this.createShadowElements();
		this.setupPositioning();
		this.setupGeometryCloning();
		this.applyShadowStyle();
		this.attachToDOM();
	}
	get positioningMode() {
		return this.options.positioning ?? "contain";
	}
	get geometryHost() {
		return this.options.geometrySource ?? this.target;
	}
	createShadowElements() {
		this.shadowContainer = document.createElement("div");
		this.shadowContainer.className = ["underlying-shadow-container", this.options.className || ""].filter(Boolean).join(" ");
		this.shadowContainer.setAttribute("aria-hidden", "true");
		this.shadowContainer.style.pointerEvents = "none";
		this.shadowContainer.style.overflow = "visible";
		this.shadowContainer.style.isolation = "isolate";
		this.shadowContainer.style.contentVisibility = "visible";
		if (this.options.cloneGeometry) {
			this.geometryClone = document.createElement("div");
			this.geometryClone.className = "underlying-shadow-geometry underlying-shadow-element";
			this.geometryClone.style.width = "100%";
			this.geometryClone.style.height = "100%";
			this.geometryClone.style.position = "relative";
			this.geometryClone.style.overflow = "hidden";
			this.geometryClone.style.contentVisibility = "visible";
			this.geometryClone.style.visibility = "visible";
			this.shadowContainer.appendChild(this.geometryClone);
			this.shadowElement = this.geometryClone;
		} else {
			this.shadowElement = document.createElement("div");
			this.shadowElement.className = "underlying-shadow-element";
			this.shadowElement.style.width = "100%";
			this.shadowElement.style.height = "100%";
			this.shadowElement.style.position = "relative";
			this.shadowElement.style.overflow = "hidden";
			this.shadowElement.style.contentVisibility = "visible";
			this.shadowElement.style.visibility = "visible";
			this.shadowContainer.appendChild(this.shadowElement);
		}
	}
	setupPositioning() {
		const mode = this.positioningMode;
		if (mode === "contain") {
			this.shadowContainer.style.position = "absolute";
			return;
		}
		if (mode === "anchor") return;
		if (mode === "fixed") this.shadowContainer.style.position = "fixed";
		else this.shadowContainer.style.position = "absolute";
		if (this.options.useIntersection) {
			this.anchorBox = enhancedIntersectionBoxAnchorRef(this.target, {
				root: window,
				observeResize: this.options.updateOnResize,
				observeMutations: true,
				observeIntersection: true
			});
			bindWith(this.shadowContainer, "left", CSSUnitUtils.asPx(this.anchorBox?.[6]), handleStyleChange);
			bindWith(this.shadowContainer, "top", CSSUnitUtils.asPx(this.anchorBox?.[7]), handleStyleChange);
			bindWith(this.shadowContainer, "width", CSSUnitUtils.asPx(this.anchorBox?.[8]), handleStyleChange);
			bindWith(this.shadowContainer, "height", CSSUnitUtils.asPx(this.anchorBox?.[9]), handleStyleChange);
		} else {
			this.anchorBox = boundingBoxAnchorRef(this.target, {
				observeResize: this.options.updateOnResize,
				observeMutations: true
			});
			bindWith(this.shadowContainer, "left", CSSUnitUtils.asPx(this.anchorBox?.[0]), handleStyleChange);
			bindWith(this.shadowContainer, "top", CSSUnitUtils.asPx(this.anchorBox?.[1]), handleStyleChange);
			bindWith(this.shadowContainer, "width", CSSUnitUtils.asPx(this.anchorBox?.[2]), handleStyleChange);
			bindWith(this.shadowContainer, "height", CSSUnitUtils.asPx(this.anchorBox?.[3]), handleStyleChange);
		}
		if (this.options.inset !== 0) {
			const insetPx = CSSUnitUtils.asPx(this.options.inset);
			setProperty(this.shadowContainer, "left", `calc(var(--left) + ${insetPx})`);
			setProperty(this.shadowContainer, "top", `calc(var(--top) + ${insetPx})`);
			setProperty(this.shadowContainer, "width", `calc(var(--width) - ${2 * insetPx})`);
			setProperty(this.shadowContainer, "height", `calc(var(--height) - ${2 * insetPx})`);
		}
	}
	setupGeometryCloning() {
		if (!this.geometryClone) return;
		const cloneGeometry = () => {
			const host = this.geometryHost;
			const computedStyle = getComputedStyle(host);
			const borderRadius = computedStyle.borderRadius;
			if (borderRadius && borderRadius !== "0px") this.geometryClone.style.borderRadius = borderRadius;
			const clipPath = computedStyle.clipPath;
			if (clipPath && clipPath !== "none") this.geometryClone.style.clipPath = clipPath;
			if (computedStyle.borderShape && computedStyle.borderShape !== "none") this.geometryClone.style.borderShape = computedStyle.borderShape;
			if (computedStyle.cornerShape && computedStyle.cornerShape !== "none") this.geometryClone.style.cornerShape = computedStyle.cornerShape;
			const maskImage = computedStyle.maskImage || computedStyle.webkitMaskImage;
			if (maskImage && maskImage !== "none") {
				this.geometryClone.style.maskImage = maskImage;
				this.geometryClone.style.webkitMaskImage = maskImage;
			}
			const shape = host.getAttribute("data-shape");
			if (shape) this.geometryClone.setAttribute("data-shape", shape);
			const borderWidth = computedStyle.borderWidth;
			const borderStyle = computedStyle.borderStyle;
			if (borderWidth && borderWidth !== "0px" && borderStyle !== "none") this.geometryClone.style.border = `${borderWidth} ${borderStyle} transparent`;
			if (this.options.shadowType !== "box-shadow") this.geometryClone.style.background = "#000000";
			this.geometryClone.style.opacity = "1";
		};
		cloneGeometry();
		const observer = new MutationObserver(cloneGeometry);
		observer.observe(this.geometryHost, {
			attributes: true,
			attributeFilter: [
				"style",
				"class",
				"data-shape"
			]
		});
		this.cleanupFunctions.push(() => observer.disconnect());
	}
	applyShadowStyle() {
		const { shadowType, shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY, spreadRadius, opacity } = this.options;
		if (shadowType === "drop-shadow") {
			const filterValue = `drop-shadow(${CSSUnitUtils.asPx(shadowOffsetX || 0)} ${CSSUnitUtils.asPx(shadowOffsetY || 0)} ${CSSUnitUtils.asPx(shadowBlur || 0)} ${shadowColor})`;
			this.shadowContainer.style.filter = filterValue;
			this.shadowContainer.style.opacity = opacity.toString() || "1";
			this.shadowContainer.style.boxShadow = "none";
		} else if (shadowType === "blur") {
			const filterValue = `blur(${CSSUnitUtils.asPx(shadowBlur || 0)})`;
			this.shadowContainer.style.filter = filterValue;
			this.shadowContainer.style.opacity = opacity.toString() || "1";
			if (this.geometryClone) this.geometryClone.style.backgroundColor = shadowColor;
		} else if (shadowType === "box-shadow") {
			const boxShadowValue = `${CSSUnitUtils.asPx(shadowOffsetX || 0)} ${CSSUnitUtils.asPx(shadowOffsetY || 0)} ${CSSUnitUtils.asPx(shadowBlur || 0)} ${CSSUnitUtils.asPx(spreadRadius || 0)} ${shadowColor}`;
			this.shadowContainer.style.background = "transparent";
			this.shadowContainer.style.boxShadow = "none";
			if (this.geometryClone) this.geometryClone.style.boxShadow = boxShadowValue;
			else if (this.shadowElement) this.shadowElement.style.boxShadow = boxShadowValue;
			this.shadowContainer.style.filter = "none";
			this.shadowContainer.style.opacity = opacity.toString() || "1";
		}
	}
	attachToDOM() {
		if (!this.shadowContainer) return;
		const mode = this.positioningMode;
		if (mode === "fixed") {
			const layer = this.shadowContainer;
			layer.style.position = "fixed";
			layer.style.pointerEvents = "none";
			const shift = this.options.zIndexShift ?? -1;
			const mainZ = Number.parseInt(getComputedStyle(this.target).zIndex || "0", 10);
			layer.style.zIndex = String(Number.isFinite(mainZ) ? mainZ + shift : shift);
			const insert = () => {
				if (!this.target.isConnected) return;
				this.target.before(layer);
			};
			observeConnect(this.target, insert);
			if (this.target.isConnected) insert();
		} else appendAsUnderlying(this.target, this.shadowContainer, {
			stackMode: "shift",
			zIndexShift: this.options.zIndexShift ?? -1,
			placement: "fill",
			positioning: mode === "contain" ? "contain" : "anchor",
			useIntersection: this.options.useIntersection
		});
		const parent = this.target.parentElement ?? document.body;
		const disconnectObserver = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				mutation.removedNodes.forEach((node) => {
					if (node === this.target || node.contains?.(this.target)) this.destroy();
				});
			});
		});
		if (parent) {
			disconnectObserver.observe(parent, {
				childList: true,
				subtree: true
			});
			this.cleanupFunctions.push(() => disconnectObserver.disconnect());
		}
	}
	updateOptions(newOptions) {
		Object.assign(this.options, newOptions);
		this.applyShadowStyle();
		if (newOptions.cloneGeometry !== void 0) this.setupGeometryCloning();
	}
	setVisible(visible) {
		this.shadowContainer.style.display = visible ? "block" : "none";
	}
	getShadowElement() {
		return this.shadowContainer;
	}
	destroy() {
		this.cleanupFunctions.forEach((cleanup) => cleanup());
		if (this.shadowContainer?.parentNode) this.shadowContainer.parentNode.removeChild(this.shadowContainer);
		if (this.anchorBox) this.anchorBox.forEach((anchor) => {
			if (anchor && typeof anchor[Symbol.dispose] === "function") anchor[Symbol.dispose]();
		});
	}
};
function createUnderlyingShadow(options) {
	return new UnderlyingShadow(options);
}
function createDropShadow(target, options) {
	return createUnderlyingShadow({
		target,
		shadowType: "drop-shadow",
		shadowColor: "rgba(0, 0, 0, 0.6)",
		shadowBlur: 6,
		shadowOffsetX: 0,
		shadowOffsetY: 3,
		positioning: "contain",
		...options
	});
}
function createBlurShadow(target, options) {
	return createUnderlyingShadow({
		target,
		shadowType: "blur",
		shadowColor: "rgba(0, 0, 0, 0.2)",
		shadowBlur: 4,
		shadowOffsetX: 0,
		shadowOffsetY: 2,
		positioning: "contain",
		...options
	});
}
function createBoxShadow(target, options) {
	return createUnderlyingShadow({
		target,
		shadowType: "box-shadow",
		shadowColor: "rgba(0, 0, 0, 0.2)",
		shadowBlur: 8,
		shadowOffsetX: 0,
		shadowOffsetY: 4,
		spreadRadius: 0,
		positioning: "contain",
		...options
	});
}
/**
* Shaped under-glow for glass tiles (`backdrop-filter` on main).
* INVARIANT: `target` is the grid `.ui-ws-item` (under is a preceding sibling in the grid);
* shape/radius clones from `geometrySource` (usually `.ui-ws-item-icon`).
*/
function createShapedTileShadow(target, options) {
	return createBoxShadow(target, {
		shadowType: "blur",
		className: "ui-ws-item-icon-under",
		shadowColor: "rgba(0, 0, 0, 0.6)",
		shadowBlur: 24,
		shadowOffsetY: 6,
		shadowOffsetX: 0,
		spreadRadius: -8,
		opacity: 1,
		cloneGeometry: true,
		positioning: "anchor",
		geometrySource: options?.geometrySource ?? target.querySelector(".ui-ws-item-icon") ?? target,
		...options
	});
}
/**
* Under-shadow for fixed chrome panels (context menus) that may use backdrop-filter.
*/
function createPanelUnderShadow(target, options) {
	return createBoxShadow(target, {
		className: "cw-context-menu-under",
		shadowColor: "rgba(0, 0, 0, 0.45)",
		shadowBlur: 36,
		shadowOffsetY: 14,
		shadowOffsetX: 0,
		spreadRadius: 0,
		cloneGeometry: true,
		positioning: "fixed",
		updateOnScroll: true,
		updateOnResize: true,
		...options
	});
}
//#endregion
//#region ../../modules/projects/lur.e/src/design/overlays/OverlayHost.ts
/**
* Shared mount and back-navigation contract for transient UI overlays.
* This module deliberately discovers shell hosts by data attribute so LUR.E
* stays below fl.ui and subsystem in the import hierarchy.
*/
/**
* Resolve the most specific host available to the current document.
* INVARIANT: callers may always override discovery with an explicit host.
*/
var resolveOverlayHost = ({ host = null, document: documentLike = typeof document !== "undefined" ? document : null } = {}) => {
	if (host) return host;
	if (!documentLike) return null;
	return documentLike.querySelector("[data-env-shell-overlays]") ?? documentLike.querySelector("[data-app-layer=\"overlay\"]") ?? documentLike.body ?? null;
};
var priorityForKind = {
	"context-menu": ClosePriority.CONTEXT_MENU,
	dropdown: ClosePriority.DROPDOWN,
	modal: ClosePriority.MODAL,
	dialog: ClosePriority.DIALOG,
	sidebar: ClosePriority.SIDEBAR,
	overlay: ClosePriority.OVERLAY,
	panel: ClosePriority.PANEL,
	toast: ClosePriority.TOAST
};
var registrationSequence = 0;
/**
* Register a closeable overlay without initializing or otherwise changing the
* application's global back-navigation policy. Returns an idempotent disposer.
*/
var registerTransientOverlay = ({ id, kind, element = null, isActive, close, priority = priorityForKind[kind], group = `overlay:${kind}` }) => {
	const orderedPriority = Number(priority) + ++registrationSequence / 1e6;
	let disposed = false;
	let unregister = null;
	const dispose = () => {
		if (disposed) return;
		disposed = true;
		unregister?.();
		unregister = null;
	};
	unregister = registerCloseable({
		id,
		priority: orderedPriority,
		element: element ? new WeakRef(element) : null,
		group,
		isActive: () => !disposed && (isActive?.() ?? Boolean(element?.isConnected)),
		close: () => {
			if (disposed) return false;
			const result = close();
			if (result !== false) dispose();
			return result;
		}
	});
	return dispose;
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/modules/CtxMenu.ts
var itemClickHandle = (ev, ctxMenuDesc) => {
	const id = Q(`[data-id]`, ev?.target, 0, "parent")?.getAttribute?.("data-id");
	const item = ctxMenuDesc?.items?.find?.((I) => I?.some?.((I) => I?.id == id))?.find?.((I) => I?.id == id);
	(item?.action ?? ctxMenuDesc?.defaultAction)?.(ctxMenuDesc?.openedWith?.initiator, item, ctxMenuDesc?.openedWith?.event ?? ev);
	ctxMenuDesc?.openedWith?.close?.();
	const vr = getBoundVisibleRef(ctxMenuDesc?.openedWith?.element);
	if (vr != null) vr.value = false;
};
var visibleMap = /* @__PURE__ */ new WeakMap();
var registerCtxMenu = typeof document !== "undefined" && document?.documentElement ? addProxiedEvent(document.documentElement, "contextmenu", {
	capture: true,
	passive: false
}, {
	strategy: "closest",
	preventDefault: "handled",
	stopImmediatePropagation: "handled"
}) : (_el, _handler) => () => {};
var getBoundVisibleRef = (menuElement) => {
	if (menuElement == null) return null;
	return visibleMap?.getOrInsertComputed?.(menuElement, () => visibleRef(menuElement, false));
};
var bindMenuItemClickHandler = (menuElement, menuDesc) => {
	const handler = (ev) => {
		itemClickHandle(ev, menuDesc);
	};
	const listening = addEvent(menuElement, "click", handler, { composed: true });
	return () => listening?.();
};
var getGlobalContextMenu = (parent = document) => {
	let menu = Q("ui-modal[type=\"contextmenu\"]", parent);
	if (!menu) {
		menu = H`<ui-modal type="contextmenu"></ui-modal>`;
		(parent instanceof Document ? parent.body : parent).append(menu);
	}
	return menu;
};
var makeMenuHandler = (triggerElement, placement, ctxMenuDesc, menuElement) => {
	return (ev) => {
		let handled = false;
		const menu = menuElement || getGlobalContextMenu();
		const visibleRef = getBoundVisibleRef(menu);
		const initiator = ev?.target ?? triggerElement ?? document.elementFromPoint(ev?.clientX || 0, ev?.clientY || 0);
		const details = {
			event: ev,
			initiator,
			trigger: triggerElement,
			menu,
			ctxMenuDesc
		};
		ctxMenuDesc.context = details;
		if (ctxMenuDesc?.onBeforeOpen?.(details) === false) return handled;
		const builtItems = ctxMenuDesc?.buildItems?.(details);
		if (Array.isArray(builtItems) && builtItems.length) ctxMenuDesc.items = builtItems;
		if (visibleRef?.value && ev?.type !== "contextmenu") {
			visibleRef.value = false;
			ctxMenuDesc?.openedWith?.close?.();
			return handled;
		}
		if (initiator && visibleRef) {
			handled = true;
			menu.innerHTML = "";
			visibleRef.value = true;
			menu?.append?.(...ctxMenuDesc?.items?.map?.((section, sIdx) => {
				const items = section?.map?.((item) => H`<li data-id=${item?.id || ""}><ui-icon icon=${item?.icon || ""} icon-style="duotone"></ui-icon><span>${item?.label || ""}</span></li>`);
				const separator = section?.length > 1 && sIdx !== (ctxMenuDesc?.items?.length || 0) - 1 ? H`<li class="ctx-menu-separator"></li>` : null;
				return [...items, separator];
			})?.flat?.()?.filter?.((E) => !!E) || []);
			const where = withInsetWithPointer?.(menu, placement?.(ev, initiator));
			const unbindClick = bindMenuItemClickHandler(menu, ctxMenuDesc);
			const untrigger = makeInterruptTrigger?.(menu, (e) => {
				const menuAny = menu;
				if (!(menu?.contains?.(e?.target ?? null) || e?.target == (menuAny?.element ?? menuAny)) || !e?.target) {
					ctxMenuDesc?.openedWith?.close?.();
					const vr = getBoundVisibleRef(menu);
					if (vr != null) vr.value = false;
				}
			}, [
				"click",
				"pointerdown",
				"scroll"
			]);
			const unmenuCtx = registerCtxMenu(menu, () => true);
			ctxMenuDesc.openedWith = {
				initiator,
				element: menu,
				event: ev,
				context: ctxMenuDesc?.context,
				close() {
					visibleRef.value = false;
					ctxMenuDesc.openedWith = null;
					unbindClick?.();
					where?.();
					untrigger?.();
					unmenuCtx?.();
					if (ctxMenuDesc._backUnreg) {
						ctxMenuDesc._backUnreg();
						ctxMenuDesc._backUnreg = null;
					}
				}
			};
			if (!ctxMenuDesc._backUnreg && visibleRef) ctxMenuDesc._backUnreg = registerContextMenu(menu, visibleRef, () => {
				ctxMenuDesc?.openedWith?.close?.();
			});
		}
		return handled;
	};
};
var ctxMenuTrigger = (triggerElement, ctxMenuDesc, menuElement) => {
	const evHandler = makeMenuHandler(triggerElement, (ev) => [
		ev?.clientX,
		ev?.clientY,
		200
	], ctxMenuDesc, menuElement);
	const unbindConnected = bindWhileConnected(triggerElement, () => {
		return registerCtxMenu(triggerElement, evHandler);
	});
	return () => {
		unbindConnected?.();
	};
};
var dropMenuTrigger = (triggerElement, ctxMenuDesc, menuElement) => {
	const menu = menuElement || Q("ui-modal[type=\"menulist\"]", document.body) || getGlobalContextMenu();
	const anchorElement = triggerElement;
	const evHandler = makeMenuHandler(triggerElement, (ev) => boundingBoxAnchorRef(anchorElement)?.slice?.(0, 3), ctxMenuDesc, menu);
	const untrigger = makeInterruptTrigger?.(menu, (ev) => {
		if (!(menu?.contains?.(ev?.target) || ev?.target == (triggerElement?.element ?? triggerElement)) || !ev?.target) {
			ctxMenuDesc?.openedWith?.close?.();
			const vr = getBoundVisibleRef(menu);
			if (vr != null) vr.value = false;
		}
	}, [
		"click",
		"pointerdown",
		"scroll"
	]);
	const listening = addEvent(triggerElement, "click", evHandler, { composed: true });
	return () => {
		untrigger?.();
		listening?.();
	};
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/modules/Clipboard.ts
var CLIPBOARD_CHANNEL = "rs-clipboard";
/** Beyond this, legacy execCommand + textarea.select() can freeze the tab for seconds. */
var CLIPBOARD_LEGACY_MAX_CHARS = 256e3;
/** Hard cap — clipboard APIs and string work degrade badly above this. */
var CLIPBOARD_TEXT_MAX_CHARS = 2e6;
/** Failsafe if the browser never settles clipboard read/write. */
var CLIPBOARD_OPERATION_TIMEOUT_MS = 12e3;
var scheduleClipboardFrame = (cb) => {
	if (typeof globalThis.requestAnimationFrame === "function") {
		globalThis.requestAnimationFrame(cb);
		return;
	}
	if (typeof MessageChannel !== "undefined") {
		const channel = new MessageChannel();
		channel.port1.onmessage = () => cb();
		channel.port2.postMessage(void 0);
		return;
	}
	if (typeof setTimeout === "function") {
		setTimeout(() => cb(), 16);
		return;
	}
	if (typeof queueMicrotask === "function") {
		queueMicrotask(() => cb());
		return;
	}
	cb();
};
/**
* Convert data to string safely
*/
var toText = (data) => {
	if (data == null) return "";
	if (typeof data === "string") return data;
	try {
		return JSON.stringify(data, null, 2);
	} catch {
		return String(data);
	}
};
var raceClipboardWrite = (write, ms) => Promise.race([write.then(() => "ok").catch(() => "error"), new Promise((res) => {
	globalThis.setTimeout(() => res("timeout"), ms);
})]);
/**
* Write text to clipboard using modern API
*/
var writeText = async (text) => {
	const raw = toText(text);
	if (!raw.trim()) return {
		ok: false,
		error: "Empty content"
	};
	if (raw.length > CLIPBOARD_TEXT_MAX_CHARS) return {
		ok: false,
		error: "Content too large to copy safely"
	};
	const trimmed = raw.trim();
	return new Promise((resolve) => {
		scheduleClipboardFrame(() => {
			if (typeof document !== "undefined" && document.hasFocus && !document.hasFocus()) globalThis?.focus?.();
			const tryClipboardAPI = async () => {
				const tryWriteText = async () => {
					if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) return false;
					const outcome = await raceClipboardWrite(navigator.clipboard.writeText(trimmed), CLIPBOARD_OPERATION_TIMEOUT_MS);
					if (outcome === "ok") return true;
					if (outcome === "timeout") console.warn("[Clipboard] writeText timed out");
					return false;
				};
				try {
					if (await tryWriteText()) {
						resolve({
							ok: true,
							data: trimmed,
							method: "clipboard-api"
						});
						return;
					}
				} catch (err) {
					console.warn("[Clipboard] Direct write failed:", err);
				}
				if (trimmed.length > CLIPBOARD_LEGACY_MAX_CHARS) {
					resolve({
						ok: false,
						error: "Content too large for fallback copy"
					});
					return;
				}
				try {
					if (typeof document !== "undefined") {
						const textarea = document.createElement("textarea");
						textarea.value = trimmed;
						textarea.style.cssText = "position:fixed;left:-9999px;top:-9999px;opacity:0;pointer-events:none;";
						document.body.appendChild(textarea);
						textarea.select();
						textarea.remove();
					}
				} catch (err) {
					console.warn("[Clipboard] Legacy execCommand failed:", err);
				}
				resolve({
					ok: false,
					error: "All clipboard methods failed"
				});
			};
			tryClipboardAPI();
		});
	});
};
/**
* Write HTML content to clipboard (with text fallback)
*/
var writeHTML = async (html, plainText) => {
	const htmlContent = html.trim();
	const textContent = (plainText ?? htmlContent).trim();
	if (!htmlContent) return {
		ok: false,
		error: "Empty content"
	};
	return new Promise((resolve) => {
		scheduleClipboardFrame(() => {
			if (typeof document !== "undefined" && document.hasFocus && !document.hasFocus()) globalThis?.focus?.();
			const tryHTMLClipboard = async () => {
				try {
					if (typeof navigator !== "undefined" && navigator.clipboard?.write) {
						const htmlBlob = new Blob([htmlContent], { type: "text/html" });
						const textBlob = new Blob([textContent], { type: "text/plain" });
						await navigator.clipboard.write([new ClipboardItem({
							"text/html": htmlBlob,
							"text/plain": textBlob
						})]);
						return resolve({
							ok: true,
							data: htmlContent,
							method: "clipboard-api"
						});
					}
				} catch (err) {
					console.warn("[Clipboard] HTML write failed:", err);
				}
				resolve(await writeText(textContent));
			};
			tryHTMLClipboard();
		});
	});
};
/**
* Write image to clipboard
*/
var writeImage = async (blob) => {
	return new Promise((resolve) => {
		scheduleClipboardFrame(async () => {
			if (typeof document !== "undefined" && document.hasFocus && !document.hasFocus()) globalThis?.focus?.();
			try {
				let imageBlob;
				if (typeof blob === "string") if (blob.startsWith("data:")) imageBlob = await (await fetch(blob)).blob();
				else imageBlob = await (await fetch(blob)).blob();
				else imageBlob = blob;
				if (typeof navigator !== "undefined" && navigator.clipboard?.write) {
					const pngBlob = imageBlob.type === "image/png" ? imageBlob : await convertToPng(imageBlob);
					await navigator.clipboard.write([new ClipboardItem({ [pngBlob.type]: pngBlob })]);
					resolve({
						ok: true,
						method: "clipboard-api"
					});
					return;
				}
			} catch (err) {
				console.warn("[Clipboard] Image write failed:", err);
			}
			resolve({
				ok: false,
				error: "Image clipboard not supported"
			});
		});
	});
};
/**
* Convert image blob to PNG
*/
var convertToPng = async (blob) => {
	return new Promise((resolve, reject) => {
		if (typeof document === "undefined") {
			reject(/* @__PURE__ */ new Error("No document context"));
			return;
		}
		const img = new Image();
		const url = URL.createObjectURL(blob);
		img.onload = () => {
			const canvas = document.createElement("canvas");
			canvas.width = img.naturalWidth;
			canvas.height = img.naturalHeight;
			const ctx = canvas.getContext("2d");
			if (!ctx) {
				URL.revokeObjectURL(url);
				reject(/* @__PURE__ */ new Error("Canvas context failed"));
				return;
			}
			ctx.drawImage(img, 0, 0);
			canvas.toBlob((pngBlob) => {
				URL.revokeObjectURL(url);
				if (pngBlob) resolve(pngBlob);
				else reject(/* @__PURE__ */ new Error("PNG conversion failed"));
			}, "image/png");
		};
		img.onerror = () => {
			URL.revokeObjectURL(url);
			reject(/* @__PURE__ */ new Error("Image load failed"));
		};
		img.src = url;
	});
};
/**
* Read text from clipboard
*/
var readText = async () => {
	return new Promise((resolve) => {
		scheduleClipboardFrame(() => {
			const tryReadClipboard = async () => {
				try {
					if (typeof navigator !== "undefined" && navigator.clipboard?.readText) {
						resolve({
							ok: true,
							data: await navigator.clipboard.readText(),
							method: "clipboard-api"
						});
						return;
					}
				} catch (err) {
					console.warn("[Clipboard] Read failed:", err);
				}
				resolve({
					ok: false,
					error: "Clipboard read not available"
				});
			};
			tryReadClipboard();
		});
	});
};
/**
* Unified copy function with automatic type detection
*/
var copy = async (data, options = {}) => {
	const { type, showFeedback = false, silentOnError = false } = options;
	return new Promise((resolve) => {
		scheduleClipboardFrame(async () => {
			let result;
			if (data instanceof Blob) if (data.type.startsWith("image/")) result = await writeImage(data);
			else result = await writeText(await data.text());
			else if (type === "html" || typeof data === "string" && data.trim().startsWith("<")) result = await writeHTML(String(data));
			else if (type === "image") result = await writeImage(data);
			else result = await writeText(toText(data));
			if (showFeedback && (result.ok || !silentOnError)) broadcastClipboardFeedback(result);
			resolve(result);
		});
	});
};
/**
* Broadcast clipboard feedback for toast display
*/
var broadcastClipboardFeedback = (result) => {
	try {
		const channel = new BroadcastChannel("rs-toast");
		channel.postMessage({
			type: "show-toast",
			options: {
				message: result.ok ? "Copied to clipboard" : result.error || "Copy failed",
				kind: result.ok ? "success" : "error",
				duration: 2e3
			}
		});
		channel.close();
	} catch (e) {
		console.warn("[Clipboard] Feedback broadcast failed:", e);
	}
};
/**
* Request clipboard operation via broadcast (for service worker → client)
*/
var requestCopy = (data, options) => {
	try {
		const channel = new BroadcastChannel(CLIPBOARD_CHANNEL);
		channel.postMessage({
			type: "copy",
			data,
			options
		});
		channel.close();
	} catch (e) {
		console.warn("[Clipboard] Request broadcast failed:", e);
	}
};
/** One logical listener for rs-clipboard — multiple initClipboardReceiver calls must not stack handlers (duplicate copy() freezes UI). */
var _clipboardBroadcastChannel = null;
var _clipboardBroadcastRefCount = 0;
var _clipboardBroadcastHandler = null;
/** Serialize SW/client broadcast copies so overlapping clipboard API work does not wedge the main thread. */
var _clipboardBroadcastQueue = Promise.resolve();
/**
* Listen for clipboard operation requests
*/
var listenForClipboardRequests = () => {
	if (typeof BroadcastChannel === "undefined") return () => {};
	if (_clipboardBroadcastRefCount === 0) {
		const channel = new BroadcastChannel(CLIPBOARD_CHANNEL);
		const handler = (event) => {
			if (event.data?.type !== "copy") return;
			const opts = event.data.options || {};
			const data = event.data.data;
			_clipboardBroadcastQueue = _clipboardBroadcastQueue.then(async () => {
				try {
					await copy(data, {
						...opts,
						showFeedback: opts.showFeedback !== false,
						silentOnError: opts.silentOnError === true
					});
				} catch (err) {
					console.warn("[Clipboard] Broadcast copy failed:", err);
				}
			});
		};
		channel.addEventListener("message", handler);
		_clipboardBroadcastChannel = channel;
		_clipboardBroadcastHandler = handler;
	}
	_clipboardBroadcastRefCount++;
	return () => {
		_clipboardBroadcastRefCount--;
		if (_clipboardBroadcastRefCount <= 0) {
			const ch = _clipboardBroadcastChannel;
			const h = _clipboardBroadcastHandler;
			if (ch && h) {
				ch.removeEventListener("message", h);
				ch.close();
			}
			_clipboardBroadcastChannel = null;
			_clipboardBroadcastHandler = null;
			_clipboardBroadcastRefCount = 0;
		}
	};
};
/**
* Initialize clipboard listener for receiving copy requests
*/
var initClipboardReceiver = () => {
	return listenForClipboardRequests();
};
/**
* Check if clipboard API is available
*/
var isClipboardAvailable = () => {
	return typeof navigator !== "undefined" && !!navigator.clipboard;
};
/**
* Check if clipboard write is available
*/
var isClipboardWriteAvailable = () => {
	return typeof navigator !== "undefined" && typeof navigator.clipboard?.writeText === "function";
};
/**
* Check if running in Chrome extension context
*/
var isChromeExtension = () => {
	try {
		return typeof chrome !== "undefined" && !!chrome?.runtime?.id;
	} catch {
		return false;
	}
};
/**
* Request copy via Chrome extension message (for CRX service worker → content script)
* Falls back to offscreen document or BroadcastChannel if content script fails
*/
var requestCopyViaCRX = async (data, tabIdOrOptions) => {
	const { tabId, offscreenFallback } = typeof tabIdOrOptions === "number" ? { tabId: tabIdOrOptions } : tabIdOrOptions || {};
	const text = toText(data).trim();
	if (!text) return {
		ok: false,
		error: "Empty content"
	};
	if (isChromeExtension() && typeof chrome?.tabs?.sendMessage === "function") {
		try {
			if (typeof tabId === "number" && tabId >= 0) {
				const response = await chrome.tabs.sendMessage(tabId, {
					type: "COPY_HACK",
					data: text
				});
				if (response?.ok) return {
					ok: true,
					data: response?.data,
					method: response?.method ?? "broadcast"
				};
			} else {
				const tabs = await chrome.tabs.query({
					currentWindow: true,
					active: true
				});
				for (const tab of tabs || []) if (tab?.id != null && tab.id >= 0) try {
					const response = await chrome.tabs.sendMessage(tab.id, {
						type: "COPY_HACK",
						data: text
					});
					if (response?.ok) return {
						ok: true,
						data: response?.data,
						method: response?.method ?? "broadcast"
					};
				} catch {}
			}
		} catch (err) {
			console.warn("[Clipboard] CRX content script message failed:", err);
		}
		if (offscreenFallback) try {
			if (await offscreenFallback(text)) return {
				ok: true,
				data: text,
				method: "offscreen"
			};
		} catch (err) {
			console.warn("[Clipboard] Offscreen fallback failed:", err);
		}
	}
	requestCopy(data, { showFeedback: true });
	return {
		ok: false,
		error: "Broadcast sent, result pending",
		method: "broadcast"
	};
};
/**
* COPY_HACK - Legacy API for Chrome extension clipboard operations
* Now delegates to unified Clipboard module
*/
var COPY_HACK = async (data) => {
	return (await writeText(toText(data))).ok;
};
/**
* Copy with result - returns full ClipboardResult for more control
*/
var copyWithResult = async (data) => {
	return writeText(toText(data));
};
var collectProviders = (ev, action) => {
	const providers = /* @__PURE__ */ new Set();
	let el = ev?.target || document.activeElement || document.body;
	if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el.isContentEditable) return [];
	let current = el;
	const visited = /* @__PURE__ */ new Set();
	while (current && !visited.has(current)) {
		visited.add(current);
		if (typeof current[action] === "function") providers.add(current);
		if (current.operativeInstance && typeof current.operativeInstance[action] === "function") providers.add(current.operativeInstance);
		const shadowHost = current.shadowRoot?.host;
		if (shadowHost && shadowHost !== current) current = shadowHost;
		else {
			const rootHost = (current.getRootNode?.())?.host;
			const next = current.parentElement || rootHost;
			current = next && next !== current ? next : null;
		}
	}
	if (ev.currentTarget instanceof Node || typeof document !== "undefined") {
		const root = ev.currentTarget instanceof Node ? ev.currentTarget instanceof Document ? ev.currentTarget.body : ev.currentTarget : document.body;
		if (root) {
			const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, { acceptNode(node) {
				if (typeof node[action] === "function" || node.operativeInstance && typeof node.operativeInstance[action] === "function") return NodeFilter.FILTER_ACCEPT;
				return NodeFilter.FILTER_SKIP;
			} });
			while (walker.nextNode()) {
				const node = walker.currentNode;
				if (typeof node[action] === "function") providers.add(node);
				if (node.operativeInstance && typeof node.operativeInstance[action] === "function") providers.add(node.operativeInstance);
			}
		}
	}
	return Array.from(providers);
};
var handleClipboardEvent = (ev, type) => {
	const providers = collectProviders(ev, type);
	const handled = /* @__PURE__ */ new Set();
	for (const provider of providers) {
		if (handled.has(provider)) continue;
		const operative = provider?.operativeInstance;
		if (operative && handled.has(operative)) continue;
		handled.add(provider);
		if (operative) handled.add(operative);
		provider[type]?.(ev);
	}
};
var initialized = false;
var initGlobalClipboard = () => {
	if (typeof window === "undefined" || initialized) return;
	initialized = true;
	lazyAddEventListener(window, "copy", (ev) => handleClipboardEvent(ev, "onCopy"), {
		capture: false,
		passive: true
	});
	lazyAddEventListener(window, "cut", (ev) => handleClipboardEvent(ev, "onCut"), {
		capture: false,
		passive: true
	});
	lazyAddEventListener(window, "paste", (ev) => handleClipboardEvent(ev, "onPaste"), {
		capture: false,
		passive: false
	});
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/modules/DesktopStateStorage.ts
/**
* Versioned JSON persistence for the orient-layer speed dial / desktop grid.
* - Main key: canonical layout + items
* - Draft key: debounced snapshot while dragging (crash recovery if main never flushed)
*/
var DESKTOP_MAIN_KEY = "cw-oriented-desktop-layout-v1";
var DESKTOP_DRAFT_KEY = `${DESKTOP_MAIN_KEY}.draft`;
var safeGet = (key) => {
	try {
		return localStorage.getItem(key);
	} catch {
		return null;
	}
};
var safeSet = (key, value) => {
	try {
		localStorage.setItem(key, value);
	} catch {}
};
var safeRemove = (key) => {
	try {
		localStorage.removeItem(key);
	} catch {}
};
/** Encode grid state as compact JSON (ISO timestamp for debugging / sync). */
function encodeDesktopState(columns, rows, items) {
	const payload = {
		v: 2,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		columns,
		rows,
		items
	};
	return JSON.stringify(payload);
}
/**
* Decode persisted JSON. Accepts v2 envelope or legacy flat `{ columns, rows, items }`.
*/
function decodeDesktopState(raw) {
	try {
		const p = JSON.parse(raw);
		if (!p || typeof p !== "object") return null;
		const items = p.items;
		if (!Array.isArray(items)) return null;
		const columns = Math.max(0, Number(p.columns));
		const rows = Math.max(0, Number(p.rows));
		if (p.v === 2 && Number.isFinite(columns) && Number.isFinite(rows)) return {
			v: 2,
			updatedAt: String(p.updatedAt || (/* @__PURE__ */ new Date()).toISOString()),
			columns: columns || 6,
			rows: rows || 8,
			items
		};
		return {
			v: 2,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
			columns: Number.isFinite(columns) && columns > 0 ? columns : 6,
			rows: Number.isFinite(rows) && rows > 0 ? rows : 8,
			items
		};
	} catch {
		return null;
	}
}
function loadDesktopRaw() {
	const main = safeGet(DESKTOP_MAIN_KEY);
	const draft = safeGet(DESKTOP_DRAFT_KEY);
	if (!main) return draft;
	if (!draft) return main;
	const mainDec = decodeDesktopState(main);
	const draftDec = decodeDesktopState(draft);
	if (!mainDec) return draft;
	if (!draftDec) return main;
	const mainT = Date.parse(mainDec.updatedAt || "");
	const draftT = Date.parse(draftDec.updatedAt || "");
	if (Number.isFinite(draftT) && Number.isFinite(mainT) && draftT > mainT) return draft;
	return main;
}
/** Write main snapshot and drop draft (commit). */
function persistDesktopMain(columns, rows, items) {
	safeSet(DESKTOP_MAIN_KEY, encodeDesktopState(columns, rows, items));
	safeRemove(DESKTOP_DRAFT_KEY);
}
/** Intermediate snapshot only (e.g. while dragging). */
function persistDesktopDraft(columns, rows, items) {
	safeSet(DESKTOP_DRAFT_KEY, encodeDesktopState(columns, rows, items));
}
function clearDesktopDraft() {
	safeRemove(DESKTOP_DRAFT_KEY);
}
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/modules/DesktopItemIconCodec.ts
/**
* Desktop / launcher tiles: avoid persisting or hydrating `data:` / `blob:` icon URLs
* (DevTools, clipboard, localStorage stay small). Favicons use a short `g:hostname` ref.
*
* INVARIANT: Auto-favicon only for *external* http(s) hosts. Bare view tokens
* (`settings`, `/workcenter`) resolve to the local origin — those must keep the
* Phosphor glyph, not a Google s2 fetch for the LAN IP (often blank / 404).
*/
var GOOGLE_FAVICON_RE = /^https:\/\/www\.google\.com\/s2\/favicons\?[^#]*domain=([^&]+)/i;
var isLoopbackOrPrivateHost = (hostname) => {
	const h = String(hostname || "").trim().toLowerCase().replace(/\.$/, "");
	if (!h) return true;
	if (h === "localhost" || h.endsWith(".local") || h === "::1") return true;
	if (/^127\.\d+\.\d+\.\d+$/.test(h)) return true;
	if (/^10\.\d+\.\d+\.\d+$/.test(h)) return true;
	if (/^192\.168\.\d+\.\d+$/.test(h)) return true;
	if (/^172\.(1[6-9]|2\d|3[01])\.\d+\.\d+$/.test(h)) return true;
	if (/^0\.0\.0\.0$/.test(h)) return true;
	return false;
};
/** Only external public http(s) hosts get an auto favicon ref. */
var isExternalHttpHrefForFavicon = (href, baseHref) => {
	const raw = String(href || "").trim();
	if (!raw) return false;
	try {
		const base = baseHref || (typeof location !== "undefined" ? location.href : "https://local.invalid/");
		const u = new URL(raw, base);
		if (!/^https?:$/i.test(u.protocol)) return false;
		const host = String(u.hostname || "").toLowerCase();
		if (!host || isLoopbackOrPrivateHost(host)) return false;
		if (typeof location !== "undefined" && location.hostname && host === location.hostname.toLowerCase()) return false;
		if (typeof location !== "undefined" && u.origin === location.origin) return false;
		return true;
	} catch {
		return false;
	}
};
/** Strip scheme prefix for JSON (`S` = https, `H` = http, `R` = other e.g. mailto). */
var packHrefInline = (href) => {
	const h = String(href || "").trim();
	if (!h) return "";
	if (h.startsWith("https://")) return `S${h.slice(8)}`;
	if (h.startsWith("http://")) return `H${h.slice(7)}`;
	return `R${h}`;
};
var unpackHrefInline = (packed) => {
	const p = String(packed || "").trim();
	if (!p) return "";
	if (p.startsWith("S")) return `https://${p.slice(1)}`;
	if (p.startsWith("H")) return `http://${p.slice(1)}`;
	if (p.startsWith("R")) return p.slice(1);
	return p;
};
var hostnameToFaviconRef = (hostname) => {
	const h = String(hostname || "").trim().toLowerCase().replace(/\.$/, "");
	if (!h || isLoopbackOrPrivateHost(h)) return "";
	if (typeof location !== "undefined" && location.hostname && h === location.hostname.toLowerCase()) return "";
	return `g:${h}`;
};
var faviconUrlForHostname = (hostname) => {
	const h = String(hostname || "").trim();
	if (!h || isLoopbackOrPrivateHost(h)) return "";
	try {
		return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(h.replace(/^\./, ""))}&sz=128`;
	} catch {
		return "";
	}
};
/** Favicon ref for an href, or "" when the link is local / view-path / non-http. */
var faviconRefForHref = (href, baseHref) => {
	if (!isExternalHttpHrefForFavicon(href, baseHref)) return "";
	try {
		const base = baseHref || (typeof location !== "undefined" ? location.href : "https://local.invalid/");
		return hostnameToFaviconRef(new URL(String(href || "").trim(), base).hostname);
	} catch {
		return "";
	}
};
/**
* Normalize payload from JSON/import: never keep base64/blob; collapse Google favicon URLs to `g:`.
* WHY: drop persisted `g:192.168.x.x` / same-host refs that blanked tiles after Open-link edits.
*/
var normalizeIconSrcFromPayload = (iconSrcRaw, hrefRaw, action) => {
	const raw = String(iconSrcRaw || "").trim();
	if (/^(data:|blob:)/i.test(raw)) return "";
	if (raw.startsWith("g:")) return hostnameToFaviconRef(raw.slice(2).trim().toLowerCase());
	const m = raw.match(GOOGLE_FAVICON_RE);
	if (m) try {
		return hostnameToFaviconRef(decodeURIComponent(m[1]).toLowerCase());
	} catch {
		return "";
	}
	if (/^https?:\/\//i.test(raw) && raw.length < 2048) try {
		const u = new URL(raw);
		if (isLoopbackOrPrivateHost(u.hostname)) return "";
		if (typeof location !== "undefined" && u.origin === location.origin) return "";
		return raw;
	} catch {
		return raw;
	}
	if (!raw && String(action || "") === "open-link" && hrefRaw) return faviconRefForHref(String(hrefRaw));
	return "";
};
/** Value safe to assign to `<img src>` (never data:/blob:). */
var expandIconSrcForDom = (stored) => {
	const s = String(stored || "").trim();
	if (!s) return "";
	if (/^(data:|blob:)/i.test(s)) return "";
	if (s.startsWith("g:")) {
		const host = s.slice(2);
		if (!hostnameToFaviconRef(host)) return "";
		return faviconUrlForHostname(host);
	}
	return s;
};
/** Shrink icon field before JSON.stringify / localStorage. */
var compactIconSrcForStorage = (iconSrc, action, href) => {
	const raw = String(iconSrc || "").trim();
	if (/^(data:|blob:)/i.test(raw)) return "";
	if (raw.startsWith("g:")) return hostnameToFaviconRef(raw.slice(2));
	const m = raw.match(GOOGLE_FAVICON_RE);
	if (m) try {
		return hostnameToFaviconRef(decodeURIComponent(m[1]).toLowerCase());
	} catch {
		return "";
	}
	if (String(action || "") === "open-link" && href) {
		const fromHref = faviconRefForHref(String(href));
		if (fromHref) return fromHref;
	}
	if (/^https?:\/\//i.test(raw) && raw.length < 2048) try {
		const u = new URL(raw);
		if (isLoopbackOrPrivateHost(u.hostname)) return "";
		if (typeof location !== "undefined" && u.origin === location.origin) return "";
		return raw;
	} catch {
		return raw;
	}
	return "";
};
/** Compact single-item clipboard / debug (no pretty-print, short keys, packed href). */
var ITEM_COMPACT_KIND = "cw-sdi";
var serializeDesktopItemCompact = (item) => {
	const u = item.href ? packHrefInline(item.href) : "";
	const g = compactIconSrcForStorage(String(item.iconSrc || ""), item.action, item.href);
	return JSON.stringify({
		k: ITEM_COMPACT_KIND,
		v: 1,
		i: {
			id: item.id,
			l: item.label,
			n: item.icon,
			c: item.cell,
			a: item.action || "open-view",
			w: item.viewId,
			...u ? { u } : {},
			...g ? { g } : {},
			...item.shape ? { s: item.shape } : {}
		}
	});
};
var parseDesktopItemCompact = (raw) => {
	if (!raw || typeof raw !== "object") return null;
	const o = raw;
	if (o.k !== "cw-sdi" || !o.i || typeof o.i !== "object") return null;
	const i = o.i;
	const cell = i.c;
	const cx = Array.isArray(cell) ? Number(cell[0]) : NaN;
	const cy = Array.isArray(cell) ? Number(cell[1]) : NaN;
	const hrefPacked = typeof i.u === "string" ? i.u : "";
	const href = hrefPacked ? unpackHrefInline(hrefPacked) : "";
	const action = String(i.a || (href ? "open-link" : "open-view"));
	return {
		id: String(i.id || ""),
		label: String(i.l ?? "Item"),
		icon: String(i.n ?? "sparkle"),
		iconSrc: typeof i.g === "string" ? String(i.g) : "",
		viewId: String(i.w ?? (action === "open-link" ? "home" : "viewer")),
		cell: [Number.isFinite(cx) ? cx : 0, Number.isFinite(cy) ? cy : 0],
		action,
		href,
		shape: i.s
	};
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/modules/HistoryManager.ts
var HistoryManager = class {
	storageKey;
	maxEntries;
	autoSave;
	entries = [];
	constructor(options = {}) {
		this.storageKey = options.storageKey || "rs-basic-history";
		this.maxEntries = options.maxEntries || 100;
		this.autoSave = options.autoSave !== false;
		this.loadHistory();
	}
	/**
	* Add a new history entry
	*/
	addEntry(entry) {
		const fullEntry = {
			...entry,
			id: this.generateId(),
			ts: Date.now()
		};
		this.entries.unshift(fullEntry);
		if (this.entries.length > this.maxEntries) this.entries = this.entries.slice(0, this.maxEntries);
		if (this.autoSave) this.saveHistory();
		return fullEntry;
	}
	/**
	* Get all history entries
	*/
	getAllEntries() {
		return [...this.entries];
	}
	/**
	* Get recent entries (last N)
	*/
	getRecentEntries(limit = 10) {
		return this.entries.slice(0, limit);
	}
	/**
	* Get entry by ID
	*/
	getEntryById(id) {
		return this.entries.find((entry) => entry.id === id);
	}
	/**
	* Remove entry by ID
	*/
	removeEntry(id) {
		const index = this.entries.findIndex((entry) => entry.id === id);
		if (index === -1) return false;
		this.entries.splice(index, 1);
		if (this.autoSave) this.saveHistory();
		return true;
	}
	/**
	* Clear all history
	*/
	clearHistory() {
		this.entries = [];
		if (this.autoSave) this.saveHistory();
	}
	/**
	* Search history entries
	*/
	searchEntries(query) {
		const lowercaseQuery = query.toLowerCase();
		return this.entries.filter((entry) => entry.prompt.toLowerCase().includes(lowercaseQuery) || entry.before.toLowerCase().includes(lowercaseQuery) || entry.after.toLowerCase().includes(lowercaseQuery));
	}
	/**
	* Get successful entries only
	*/
	getSuccessfulEntries() {
		return this.entries.filter((entry) => entry.ok);
	}
	/**
	* Get failed entries only
	*/
	getFailedEntries() {
		return this.entries.filter((entry) => !entry.ok);
	}
	/**
	* Get statistics
	*/
	getStatistics() {
		const total = this.entries.length;
		const successful = this.entries.filter((e) => e.ok).length;
		const failed = total - successful;
		const avgDuration = this.entries.filter((e) => e.duration).reduce((sum, e) => sum + (e.duration || 0), 0) / Math.max(1, this.entries.filter((e) => e.duration).length);
		return {
			total,
			successful,
			failed,
			successRate: total > 0 ? successful / total * 100 : 0,
			averageDuration: avgDuration || 0
		};
	}
	/**
	* Export history as JSON
	*/
	exportHistory() {
		return JSON.stringify(this.entries, null, 2);
	}
	/**
	* Import history from JSON
	*/
	importHistory(jsonData) {
		try {
			const importedEntries = JSON.parse(jsonData);
			if (!Array.isArray(importedEntries)) throw new Error("Invalid history data: not an array");
			for (const entry of importedEntries) if (typeof entry.ts !== "number" || typeof entry.prompt !== "string") throw new Error("Invalid history entry: missing required fields");
			const entriesWithIds = importedEntries.map((entry) => ({
				...entry,
				id: entry.id || this.generateId()
			}));
			const existingIds = new Set(this.entries.map((e) => e.id));
			const newEntries = entriesWithIds.filter((e) => !existingIds.has(e.id));
			this.entries.unshift(...newEntries);
			if (this.entries.length > this.maxEntries) this.entries = this.entries.slice(0, this.maxEntries);
			if (this.autoSave) this.saveHistory();
			return true;
		} catch (error) {
			console.error("Failed to import history:", error);
			return false;
		}
	}
	/**
	* Create history view component
	*/
	createHistoryView(onEntrySelect) {
		const container = H`<div class="history-view">
      <div class="history-header">
        <h3>Processing History</h3>
        <div class="history-actions">
          <button class="btn small" data-action="clear-history">Clear All</button>
          <button class="btn small" data-action="export-history">Export</button>
        </div>
      </div>

      <div class="history-stats">
        ${this.createStatsDisplay()}
      </div>

      <div class="history-list">
        ${this.entries.length === 0 ? H`<div class="empty-history">No history yet. Start processing some content!</div>` : this.entries.map((entry) => this.createHistoryItem(entry, onEntrySelect))}
      </div>
    </div>`;
		container.addEventListener("click", (e) => {
			const target = e.target;
			const action = target.getAttribute("data-action");
			const entryId = target.getAttribute("data-entry-id");
			if (action === "clear-history") {
				if (confirm("Are you sure you want to clear all history?")) {
					this.clearHistory();
					const newContainer = this.createHistoryView(onEntrySelect);
					container.replaceWith(newContainer);
				}
			} else if (action === "export-history") this.exportHistoryToFile();
			else if (action === "use-entry" && entryId) {
				const entry = this.getEntryById(entryId);
				if (entry) onEntrySelect?.(entry);
			}
		});
		return container;
	}
	/**
	* Create compact history display (for recent activity)
	*/
	createRecentHistoryView(limit = 3, onEntrySelect) {
		const recentEntries = this.getRecentEntries(limit);
		const container = H`<div class="recent-history">
      <div class="recent-header">
        <h4>Recent Activity</h4>
        <button class="btn small" data-action="view-full-history">View All</button>
      </div>

      ${recentEntries.length === 0 ? H`<div class="no-recent">No recent activity</div>` : recentEntries.map((entry) => this.createCompactHistoryItem(entry, onEntrySelect))}
    </div>`;
		container.addEventListener("click", (e) => {
			const target = e.target;
			const action = target.getAttribute("data-action");
			const entryId = target.getAttribute("data-entry-id");
			if (action === "view-full-history") console.log("View full history requested");
			else if (action === "use-entry" && entryId) {
				const entry = this.getEntryById(entryId);
				if (entry) onEntrySelect?.(entry);
			}
		});
		return container;
	}
	createStatsDisplay() {
		const stats = this.getStatistics();
		return H`<div class="stats-grid">
      <div class="stat-item">
        <span class="stat-value">${stats.total}</span>
        <span class="stat-label">Total</span>
      </div>
      <div class="stat-item">
        <span class="stat-value success">${stats.successful}</span>
        <span class="stat-label">Success</span>
      </div>
      <div class="stat-item">
        <span class="stat-value error">${stats.failed}</span>
        <span class="stat-label">Failed</span>
      </div>
      <div class="stat-item">
        <span class="stat-value">${stats.successRate.toFixed(1)}%</span>
        <span class="stat-label">Success Rate</span>
      </div>
    </div>`;
	}
	createHistoryItem(entry, onEntrySelect) {
		const time = new Date(entry.ts).toLocaleString();
		const duration = entry.duration ? ` (${(entry.duration / 1e3).toFixed(1)}s)` : "";
		return H`<div class="history-item ${entry.ok ? "success" : "error"}">
      <div class="history-meta">
        <span class="history-status ${entry.ok ? "success" : "error"}">
          ${entry.ok ? "✓" : "✗"}
        </span>
        <span class="history-time">${time}${duration}</span>
        ${entry.model ? H`<span class="history-model">${entry.model}</span>` : ""}
      </div>

      <div class="history-content">
        <div class="history-prompt">${entry.prompt}</div>
        <div class="history-input">Input: ${entry.before}</div>
        ${entry.error ? H`<div class="history-error">Error: ${entry.error}</div>` : ""}
      </div>

      <div class="history-actions">
        <button class="btn small" data-action="use-entry" data-entry-id="${entry.id}">Use Prompt</button>
        ${entry.ok ? H`<button class="btn small" data-action="view-result" data-entry-id="${entry.id}">View Result</button>` : ""}
      </div>
    </div>`;
	}
	createCompactHistoryItem(entry, onEntrySelect) {
		const time = new Date(entry.ts).toLocaleString();
		const shortPrompt = entry.prompt.length > 40 ? entry.prompt.substring(0, 40) + "..." : entry.prompt;
		return H`<div class="history-item-compact ${entry.ok ? "success" : "error"}">
      <div class="history-meta">
        <span class="history-status ${entry.ok ? "success" : "error"}">${entry.ok ? "✓" : "✗"}</span>
        <span class="history-prompt">${shortPrompt}</span>
      </div>
      <div class="history-time">${time}</div>
      <button class="btn small" data-action="use-entry" data-entry-id="${entry.id}">Use</button>
    </div>`;
	}
	exportHistoryToFile() {
		const data = this.exportHistory();
		const blob = new Blob([data], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `ai-history-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`;
		document.body.append(link);
		link.click();
		link.remove();
		URL.revokeObjectURL(url);
	}
	generateId() {
		return `history_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
	}
	loadHistory() {
		try {
			if (typeof localStorage === "undefined") return;
			const stored = localStorage.getItem(this.storageKey);
			if (stored) {
				const parsedEntries = JSON.parse(stored);
				this.entries = parsedEntries.map((entry) => ({
					...entry,
					id: entry.id || this.generateId()
				}));
			}
		} catch (error) {
			console.warn("Failed to load history from storage:", error);
			this.entries = [];
		}
	}
	saveHistory() {
		try {
			if (typeof localStorage === "undefined") return;
			localStorage.setItem(this.storageKey, JSON.stringify(this.entries));
		} catch (error) {
			console.warn("Failed to save history to storage:", error);
		}
	}
};
/**
* Utility function to create a history manager
*/
function createHistoryManager(options) {
	return new HistoryManager(options);
}
//#endregion
//#region ../../node_modules/jsox/lib/jsox.mjs
var _JSON = JSON;
/**
* JSOX container for all JSOX methods.
* @namespace
*/
var JSOX = {};
JSOX.JSOX = JSOX;
JSOX.version = "1.2.125";
var hasBigInt = typeof BigInt === "function";
var VALUE_UNDEFINED = -1;
var VALUE_UNSET = 0;
var VALUE_NULL = 1;
var VALUE_TRUE = 2;
var VALUE_FALSE = 3;
var VALUE_STRING = 4;
var VALUE_NUMBER = 5;
var VALUE_OBJECT = 6;
var VALUE_NEG_NAN = 7;
var VALUE_NAN = 8;
var VALUE_NEG_INFINITY = 9;
var VALUE_INFINITY = 10;
var VALUE_EMPTY = 12;
var VALUE_ARRAY = 13;
var knownArrayTypeNames = [
	"ab",
	"u8",
	"cu8",
	"s8",
	"u16",
	"s16",
	"u32",
	"s32",
	"u64",
	"s64",
	"f32",
	"f64"
];
var arrayToJSOX = null;
var mapToJSOX = null;
var knownArrayTypes = [
	ArrayBuffer,
	Uint8Array,
	Uint8ClampedArray,
	Int8Array,
	Uint16Array,
	Int16Array,
	Uint32Array,
	Int32Array,
	null,
	null,
	Float32Array,
	Float64Array
];
var WORD_POS_RESET = 0;
var WORD_POS_TRUE_1 = 1;
var WORD_POS_TRUE_2 = 2;
var WORD_POS_TRUE_3 = 3;
var WORD_POS_FALSE_1 = 5;
var WORD_POS_FALSE_2 = 6;
var WORD_POS_FALSE_3 = 7;
var WORD_POS_FALSE_4 = 8;
var WORD_POS_NULL_1 = 9;
var WORD_POS_NULL_2 = 10;
var WORD_POS_NULL_3 = 11;
var WORD_POS_UNDEFINED_1 = 12;
var WORD_POS_UNDEFINED_2 = 13;
var WORD_POS_UNDEFINED_3 = 14;
var WORD_POS_UNDEFINED_4 = 15;
var WORD_POS_UNDEFINED_5 = 16;
var WORD_POS_UNDEFINED_6 = 17;
var WORD_POS_UNDEFINED_7 = 18;
var WORD_POS_UNDEFINED_8 = 19;
var WORD_POS_NAN_1 = 20;
var WORD_POS_NAN_2 = 21;
var WORD_POS_INFINITY_1 = 22;
var WORD_POS_INFINITY_2 = 23;
var WORD_POS_INFINITY_3 = 24;
var WORD_POS_INFINITY_4 = 25;
var WORD_POS_INFINITY_5 = 26;
var WORD_POS_INFINITY_6 = 27;
var WORD_POS_INFINITY_7 = 28;
var WORD_POS_FIELD = 29;
var WORD_POS_AFTER_FIELD = 30;
var WORD_POS_END = 31;
var WORD_POS_AFTER_FIELD_VALUE = 32;
var CONTEXT_UNKNOWN = 0;
var CONTEXT_IN_ARRAY = 1;
var CONTEXT_OBJECT_FIELD = 2;
var CONTEXT_OBJECT_FIELD_VALUE = 3;
var CONTEXT_CLASS_FIELD = 4;
var CONTEXT_CLASS_VALUE = 5;
var CONTEXT_CLASS_FIELD_VALUE = 6;
var keywords = {
	["true"]: true,
	["false"]: false,
	["null"]: null,
	["NaN"]: NaN,
	["Infinity"]: Infinity,
	["undefined"]: void 0
};
/**
* Extend Date type with a nanosecond field.
* @constructor
* @param {Date} original_date
* @param {Number} nanoseconds in milli-seconds of Date ( 0 to 1_000_000 )
*/
var DateNS = class extends Date {
	constructor(a, b) {
		super(a);
		this.ns = b || 0;
	}
};
JSOX.DateNS = DateNS;
var contexts = [];
/**
* get a context from stack (reuse contexts)
* @internal
*/
function getContext() {
	let ctx = contexts.pop();
	if (!ctx) ctx = {
		context: CONTEXT_UNKNOWN,
		current_proto: null,
		current_class: null,
		current_class_field: 0,
		arrayType: -1,
		valueType: VALUE_UNSET,
		elements: null
	};
	return ctx;
}
/**
* return a context to the stack (reuse contexts)
* @internal
*/
function dropContext(ctx) {
	contexts.push(ctx);
}
/**
* SACK jsox compatibility; hands maps to internal C++ code in other case.
* @internal
*/
JSOX.updateContext = function() {};
var buffers = [];
function getBuffer() {
	let buf = buffers.pop();
	if (!buf) buf = {
		buf: null,
		n: 0
	};
	else buf.n = 0;
	return buf;
}
function dropBuffer(buf) {
	buffers.push(buf);
}
/**
* Provide minimal escapes for a string to be encapsulated as a JSOX string in quotes.
*
* @param {string} string 
* @returns {string}
*/
JSOX.escape = function(string) {
	let n;
	let output = "";
	if (!string) return string;
	for (n = 0; n < string.length; n++) {
		if (string[n] == "\"" || string[n] == "\\" || string[n] == "`" || string[n] == "'") output += "\\";
		output += string[n];
	}
	return output;
};
var toProtoTypes = /* @__PURE__ */ new WeakMap();
var toObjectTypes = /* @__PURE__ */ new Map();
var fromProtoTypes = /* @__PURE__ */ new Map();
var commonClasses = [];
/**
* reset JSOX parser entirely; clears all type mappings
*
* @returns {void}
*/
JSOX.reset = function() {
	toProtoTypes = /* @__PURE__ */ new WeakMap();
	toObjectTypes = /* @__PURE__ */ new Map();
	fromProtoTypes = /* @__PURE__ */ new Map();
	commonClasses = [];
};
/**
* Create a streaming parser.  Add data with parser.write(data); values that
* are found are dispatched to the callback.
*
* @param {(value:any) => void} [cb]
* @param {(this: any, key: string, value: any) => any} [reviver] 
* @returns {JSOXParser}
*/
JSOX.begin = function(cb, reviver) {
	const val = {
		name: null,
		value_type: VALUE_UNSET,
		string: "",
		contains: null,
		className: null
	};
	const pos = {
		line: 1,
		col: 1
	};
	let n = 0;
	let str;
	let localFromProtoTypes = /* @__PURE__ */ new Map();
	let word = WORD_POS_RESET, status = true, redefineClass = false, negative = false, result = null, rootObject = null, elements = void 0, context_stack = {
		first: null,
		last: null,
		saved: null,
		push(node) {
			let recover = this.saved;
			if (recover) {
				this.saved = recover.next;
				recover.node = node;
				recover.next = null;
				recover.prior = this.last;
			} else recover = {
				node,
				next: null,
				prior: this.last
			};
			if (!this.last) this.first = recover;
			else this.last.next = recover;
			this.last = recover;
			this.length++;
		},
		pop() {
			let result = this.last;
			if (!(this.last = result.prior)) this.first = null;
			result.next = this.saved;
			if (this.last) this.last.next = null;
			if (!result.next) result.first = null;
			this.saved = result;
			this.length--;
			return result.node;
		},
		length: 0
	}, classes = [], protoTypes = {}, current_proto = null, current_class = null, current_class_field = 0, arrayType = -1, parse_context = CONTEXT_UNKNOWN, comment = 0, fromHex = false, decimal = false, exponent = false, exponent_sign = false, exponent_digit = false, inQueue = {
		first: null,
		last: null,
		saved: null,
		push(node) {
			let recover = this.saved;
			if (recover) {
				this.saved = recover.next;
				recover.node = node;
				recover.next = null;
				recover.prior = this.last;
			} else recover = {
				node,
				next: null,
				prior: this.last
			};
			if (!this.last) this.first = recover;
			else this.last.next = recover;
			this.last = recover;
		},
		shift() {
			let result = this.first;
			if (!result) return null;
			if (!(this.first = result.next)) this.last = null;
			result.next = this.saved;
			this.saved = result;
			return result.node;
		},
		unshift(node) {
			let recover = this.saved;
			this.saved = recover.next;
			recover.node = node;
			recover.next = this.first;
			recover.prior = null;
			if (!this.first) this.last = recover;
			this.first = recover;
		}
	}, gatheringStringFirstChar = null, gatheringString = false, gatheringNumber = false, stringEscape = false, cr_escaped = false, unicodeWide = false, stringUnicode = false, stringHex = false, hex_char = 0, hex_char_len = 0, completed = false, date_format = false, isBigInt = false;
	function throwEndError(leader) {
		throw new Error(`${leader} at ${n} [${pos.line}:${pos.col}]`);
	}
	return {
		/**
		* Define a class that can be used to deserialize objects of this type.
		* @param {string} prototypeName 
		* @param {new ():any} o 
		* @param {(any)=>any} f 
		*/
		fromJSOX(prototypeName, o, f) {
			if (localFromProtoTypes.get(prototypeName)) throw new Error("Existing fromJSOX has been registered for prototype");
			function privateProto() {}
			if (!o) o = privateProto;
			if (o && !("constructor" in o)) throw new Error("Please pass a prototype like thing...");
			localFromProtoTypes.set(prototypeName, {
				protoCon: o.prototype.constructor,
				cb: f
			});
		},
		registerFromJSOX(prototypeName, o) {
			throw new Error("registerFromJSOX is deprecated, please update to use fromJSOX instead:" + prototypeName + o.toString());
		},
		finalError() {
			if (comment !== 0) {
				if (comment === 1) throwEndError("Comment began at end of document");
				if (comment === 2);
				if (comment === 3) throwEndError("Open comment '/*' is missing close at end of document");
				if (comment === 4) throwEndError("Incomplete '/* *' close at end of document");
			}
			if (gatheringString) throwEndError("Incomplete string");
		},
		value() {
			this.finalError();
			let r = result;
			result = void 0;
			return r;
		},
		/**
		* Reset the parser to a blank state.
		*/
		reset() {
			word = WORD_POS_RESET;
			status = true;
			if (inQueue.last) inQueue.last.next = inQueue.save;
			inQueue.save = inQueue.first;
			inQueue.first = inQueue.last = null;
			if (context_stack.last) context_stack.last.next = context_stack.save;
			context_stack.length = 0;
			context_stack.save = inQueue.first;
			context_stack.first = context_stack.last = null;
			elements = void 0;
			parse_context = CONTEXT_UNKNOWN;
			classes = [];
			protoTypes = {};
			current_proto = null;
			current_class = null;
			current_class_field = 0;
			val.value_type = VALUE_UNSET;
			val.name = null;
			val.string = "";
			val.className = null;
			pos.line = 1;
			pos.col = 1;
			negative = false;
			comment = 0;
			completed = false;
			gatheringString = false;
			stringEscape = false;
			cr_escaped = false;
			date_format = false;
		},
		usePrototype(className, protoType) {
			protoTypes[className] = protoType;
		},
		/**
		* Add input to the parser to get parsed.
		* @param {string} msg 
		*/
		write(msg) {
			let retcode;
			if (typeof msg !== "string" && typeof msg !== "undefined") msg = String(msg);
			if (!status) throw new Error("Parser is still in an error state, please reset before resuming");
			for (retcode = this._write(msg, false); retcode > 0; retcode = this._write()) {
				if (typeof reviver === "function") (function walk(holder, key) {
					let k, v, value = holder[key];
					if (value && typeof value === "object") {
						for (k in value) if (Object.prototype.hasOwnProperty.call(value, k)) {
							v = walk(value, k);
							if (v !== void 0) value[k] = v;
							else delete value[k];
						}
					}
					return reviver.call(holder, key, value);
				})({ "": result }, "");
				result = cb(result);
				if (retcode < 2) break;
			}
		},
		/**
		* Parse a string and return the result.
		* @template T
		* @param {string} msg
		* @param {(key:string,value:any)=>any} [reviver]
		* @returns {T}
		*/
		parse(msg, reviver) {
			if (typeof msg !== "string") msg = String(msg);
			this.reset();
			const writeResult = this._write(msg, true);
			if (writeResult > 0) {
				if (writeResult > 1) {}
				let result = this.value();
				if ("undefined" === typeof result && writeResult > 1) throw new Error("Pending value could not complete");
				result = typeof reviver === "function" ? function walk(holder, key) {
					let k, v, value = holder[key];
					if (value && typeof value === "object") {
						for (k in value) if (Object.prototype.hasOwnProperty.call(value, k)) {
							v = walk(value, k);
							if (v !== void 0) value[k] = v;
							else delete value[k];
						}
					}
					return reviver.call(holder, key, value);
				}({ "": result }, "") : result;
				return result;
			}
			this.finalError();
		},
		_write(msg, complete_at_end) {
			let cInt;
			let input;
			let buf;
			let retval = 0;
			function throwError(leader, c) {
				throw new Error(`${leader} '${String.fromCodePoint(c)}' unexpected at ${n} (near '${buf.substr(n > 4 ? n - 4 : 0, n > 4 ? 3 : n - 1)}[${String.fromCodePoint(c)}]${buf.substr(n, 10)}') [${pos.line}:${pos.col}]`);
			}
			function RESET_VAL() {
				val.value_type = VALUE_UNSET;
				val.string = "";
				val.contains = null;
			}
			function convertValue() {
				let fp = null;
				switch (val.value_type) {
					case VALUE_NUMBER:
						if ((val.string.length > 13 || val.string.length == 13 && val[0] > "2") && !date_format && !exponent_digit && !exponent_sign && !decimal) isBigInt = true;
						if (isBigInt) if (hasBigInt) return BigInt(val.string);
						else throw new Error("no builtin BigInt()", 0);
						if (date_format) {
							const r = val.string.match(/\.(\d\d\d\d*)/);
							const frac = r ? r[1] : null;
							if (!frac || frac.length < 4) {
								const r = new Date(val.string);
								if (isNaN(r.getTime())) throwError("Bad Date format", cInt);
								return r;
							} else {
								let ns = frac.substr(3);
								while (ns.length < 6) ns = ns + "0";
								const r = new DateNS(val.string, Number(ns));
								if (isNaN(r.getTime())) throwError("Bad DateNS format" + r + r.getTime(), cInt);
								return r;
							}
						}
						return (negative ? -1 : 1) * Number(val.string);
					case VALUE_STRING:
						if (val.className) {
							fp = localFromProtoTypes.get(val.className);
							if (!fp) fp = fromProtoTypes.get(val.className);
							if (fp && fp.cb) {
								val.className = null;
								return fp.cb.call(val.string);
							} else throw new Error("Double string error, no constructor for: new " + val.className + "(" + val.string + ")");
						}
						return val.string;
					case VALUE_TRUE: return true;
					case VALUE_FALSE: return false;
					case VALUE_NEG_NAN: return NaN;
					case VALUE_NAN: return NaN;
					case VALUE_NEG_INFINITY: return -Infinity;
					case VALUE_INFINITY: return Infinity;
					case VALUE_NULL: return null;
					case VALUE_UNDEFINED: return;
					case VALUE_EMPTY: return;
					case VALUE_OBJECT:
						if (val.className) {
							fp = localFromProtoTypes.get(val.className);
							if (!fp) fp = fromProtoTypes.get(val.className);
							val.className = null;
							if (fp && fp.cb) return val.contains = fp.cb.call(val.contains);
						}
						return val.contains;
					case VALUE_ARRAY:
						if (arrayType >= 0) {
							let ab;
							if (val.contains.length) ab = DecodeBase64(val.contains[0]);
							else ab = DecodeBase64(val.string);
							if (arrayType === 0) {
								arrayType = -1;
								return ab;
							} else {
								const newab = new knownArrayTypes[arrayType](ab);
								arrayType = -1;
								return newab;
							}
						} else if (arrayType === -2) {
							let obj = rootObject;
							let lvl;
							const pathlen = val.contains.length;
							for (lvl = 0; lvl < pathlen; lvl++) {
								const idx = val.contains[lvl];
								let nextObj = obj[idx];
								if (!nextObj) {
									let ctx = context_stack.first;
									let p = 0;
									while (ctx && p < pathlen && p < context_stack.length) {
										const thisKey = val.contains[p];
										if (!ctx.next || thisKey !== ctx.next.node.name) break;
										if (ctx.next) if ("number" === typeof thisKey) {
											const actualObject = ctx.next.node.elements;
											if (actualObject && thisKey >= actualObject.length) if (p === context_stack.length - 1) {
												console.log("This is actually at the current object so use that", p, val.contains, elements);
												nextObj = elements;
												p++;
												ctx = ctx.next;
												break;
											} else {
												if (ctx.next.next && thisKey === actualObject.length) {
													nextObj = ctx.next.next.node.elements;
													ctx = ctx.next;
													p++;
													obj = nextObj;
													continue;
												}
												nextObj = elements;
												p++;
												break;
											}
										} else if (thisKey !== ctx.next.node.name) {
											nextObj = ctx.next.node.elements[thisKey];
											lvl = p;
											break;
										} else if (ctx.next.next) nextObj = ctx.next.next.node.elements;
										else nextObj = elements;
										else nextObj = nextObj[thisKey];
										ctx = ctx.next;
										p++;
									}
									if (p < pathlen) lvl = p - 1;
									else lvl = p;
								}
								if ("object" === typeof nextObj && !nextObj) throw new Error("Path did not resolve properly:" + val.contains + " at " + idx + "(" + lvl + ")");
								obj = nextObj;
							}
							arrayType = -3;
							return obj;
						}
						if (val.className) {
							fp = localFromProtoTypes.get(val.className);
							if (!fp) fp = fromProtoTypes.get(val.className);
							val.className = null;
							if (fp && fp.cb) return fp.cb.call(val.contains);
						}
						return val.contains;
					default:
						console.log("Unhandled value conversion.", val);
						break;
				}
			}
			function arrayPush() {
				if (arrayType == -3) {
					if (val.value_type === VALUE_OBJECT) elements.push(val.contains);
					arrayType = -1;
					return;
				}
				switch (val.value_type) {
					case VALUE_EMPTY:
						elements.push(void 0);
						delete elements[elements.length - 1];
						break;
					default:
						elements.push(convertValue());
						break;
				}
				RESET_VAL();
			}
			function objectPush() {
				if (arrayType === -3 && val.value_type === VALUE_ARRAY) {
					RESET_VAL();
					arrayType = -1;
					return;
				}
				if (val.value_type === VALUE_EMPTY) return;
				if (!val.name && current_class) val.name = current_class.fields[current_class_field++];
				let value = convertValue();
				if (current_proto && current_proto.protoDef && current_proto.protoDef.cb) {
					value = current_proto.protoDef.cb.call(elements, val.name, value);
					if (value) elements[val.name] = value;
				} else elements[val.name] = value;
				RESET_VAL();
			}
			function recoverIdent(cInt) {
				if (word !== WORD_POS_RESET) {
					if (negative) throwError("Negative outside of quotes, being converted to a string (would lose count of leading '-' characters)", cInt);
					switch (word) {
						case WORD_POS_END:
							switch (val.value_type) {
								case VALUE_TRUE:
									val.string += "true";
									break;
								case VALUE_FALSE:
									val.string += "false";
									break;
								case VALUE_NULL:
									val.string += "null";
									break;
								case VALUE_INFINITY:
									val.string += "Infinity";
									break;
								case VALUE_NEG_INFINITY:
									val.string += "-Infinity";
									throwError("Negative outside of quotes, being converted to a string", cInt);
									break;
								case VALUE_NAN:
									val.string += "NaN";
									break;
								case VALUE_NEG_NAN:
									val.string += "-NaN";
									throwError("Negative outside of quotes, being converted to a string", cInt);
									break;
								case VALUE_UNDEFINED:
									val.string += "undefined";
									break;
								case VALUE_STRING: break;
								case VALUE_UNSET: break;
								default: console.log("Value of type " + val.value_type + " is not restored...");
							}
							break;
						case WORD_POS_TRUE_1:
							val.string += "t";
							break;
						case WORD_POS_TRUE_2:
							val.string += "tr";
							break;
						case WORD_POS_TRUE_3:
							val.string += "tru";
							break;
						case WORD_POS_FALSE_1:
							val.string += "f";
							break;
						case WORD_POS_FALSE_2:
							val.string += "fa";
							break;
						case WORD_POS_FALSE_3:
							val.string += "fal";
							break;
						case WORD_POS_FALSE_4:
							val.string += "fals";
							break;
						case WORD_POS_NULL_1:
							val.string += "n";
							break;
						case WORD_POS_NULL_2:
							val.string += "nu";
							break;
						case WORD_POS_NULL_3:
							val.string += "nul";
							break;
						case WORD_POS_UNDEFINED_1:
							val.string += "u";
							break;
						case WORD_POS_UNDEFINED_2:
							val.string += "un";
							break;
						case WORD_POS_UNDEFINED_3:
							val.string += "und";
							break;
						case WORD_POS_UNDEFINED_4:
							val.string += "unde";
							break;
						case WORD_POS_UNDEFINED_5:
							val.string += "undef";
							break;
						case WORD_POS_UNDEFINED_6:
							val.string += "undefi";
							break;
						case WORD_POS_UNDEFINED_7:
							val.string += "undefin";
							break;
						case WORD_POS_UNDEFINED_8:
							val.string += "undefine";
							break;
						case WORD_POS_NAN_1:
							val.string += "N";
							break;
						case WORD_POS_NAN_2:
							val.string += "Na";
							break;
						case WORD_POS_INFINITY_1:
							val.string += "I";
							break;
						case WORD_POS_INFINITY_2:
							val.string += "In";
							break;
						case WORD_POS_INFINITY_3:
							val.string += "Inf";
							break;
						case WORD_POS_INFINITY_4:
							val.string += "Infi";
							break;
						case WORD_POS_INFINITY_5:
							val.string += "Infin";
							break;
						case WORD_POS_INFINITY_6:
							val.string += "Infini";
							break;
						case WORD_POS_INFINITY_7:
							val.string += "Infinit";
							break;
						case WORD_POS_RESET: break;
						case WORD_POS_FIELD: break;
						case WORD_POS_AFTER_FIELD: break;
						case WORD_POS_AFTER_FIELD_VALUE:
							throwError("String-keyword recovery fail (after whitespace)", cInt);
							break;
						default:
					}
					val.value_type = VALUE_STRING;
					if (word < WORD_POS_FIELD) word = WORD_POS_END;
				} else {
					word = WORD_POS_END;
					val.value_type = VALUE_STRING;
				}
				if (cInt == 123) openObject();
				else if (cInt == 91) openArray();
				else if (cInt == 44) {} else {
					if (cInt == 32 || cInt == 13 || cInt == 10 || cInt == 9 || cInt == 65279 || cInt == 8232 || cInt == 8233) return;
					if (cInt == 44 || cInt == 125 || cInt == 93 || cInt == 58);
					else val.string += str;
				}
			}
			function gatherString(start_c) {
				let retval = 0;
				while (retval == 0 && n < buf.length) {
					str = buf.charAt(n);
					let cInt = buf.codePointAt(n++);
					if (cInt >= 65536) {
						str += buf.charAt(n);
						n++;
					}
					pos.col++;
					if (cInt == start_c) if (stringEscape) {
						if (stringHex) throwError("Incomplete hexidecimal sequence", cInt);
						else if (stringUnicode) throwError("Incomplete long unicode sequence", cInt);
						else if (unicodeWide) throwError("Incomplete unicode sequence", cInt);
						if (cr_escaped) {
							cr_escaped = false;
							retval = 1;
						} else val.string += str;
						stringEscape = false;
					} else retval = 1;
					else if (stringEscape) {
						if (unicodeWide) {
							if (cInt == 125) {
								val.string += String.fromCodePoint(hex_char);
								unicodeWide = false;
								stringUnicode = false;
								stringEscape = false;
								continue;
							}
							hex_char *= 16;
							if (cInt >= 48 && cInt <= 57) hex_char += cInt - 48;
							else if (cInt >= 65 && cInt <= 70) hex_char += cInt - 65 + 10;
							else if (cInt >= 97 && cInt <= 102) hex_char += cInt - 97 + 10;
							else {
								throwError("(escaped character, parsing hex of \\u)", cInt);
								retval = -1;
								unicodeWide = false;
								stringEscape = false;
								continue;
							}
							continue;
						} else if (stringHex || stringUnicode) {
							if (hex_char_len === 0 && cInt === 123) {
								unicodeWide = true;
								continue;
							}
							if (hex_char_len < 2 || stringUnicode && hex_char_len < 4) {
								hex_char *= 16;
								if (cInt >= 48 && cInt <= 57) hex_char += cInt - 48;
								else if (cInt >= 65 && cInt <= 70) hex_char += cInt - 65 + 10;
								else if (cInt >= 97 && cInt <= 102) hex_char += cInt - 97 + 10;
								else {
									throwError(stringUnicode ? "(escaped character, parsing hex of \\u)" : "(escaped character, parsing hex of \\x)", cInt);
									retval = -1;
									stringHex = false;
									stringEscape = false;
									continue;
								}
								hex_char_len++;
								if (stringUnicode) {
									if (hex_char_len == 4) {
										val.string += String.fromCodePoint(hex_char);
										stringUnicode = false;
										stringEscape = false;
									}
								} else if (hex_char_len == 2) {
									val.string += String.fromCodePoint(hex_char);
									stringHex = false;
									stringEscape = false;
								}
								continue;
							}
						}
						switch (cInt) {
							case 13:
								cr_escaped = true;
								pos.col = 1;
								continue;
							case 8232:
							case 8233: pos.col = 1;
							case 10:
								if (!cr_escaped) pos.col = 1;
								else cr_escaped = false;
								pos.line++;
								break;
							case 116:
								val.string += "	";
								break;
							case 98:
								val.string += "\b";
								break;
							case 110:
								val.string += "\n";
								break;
							case 114:
								val.string += "\r";
								break;
							case 102:
								val.string += "\f";
								break;
							case 118:
								val.string += "\v";
								break;
							case 48:
								val.string += "\0";
								break;
							case 120:
								stringHex = true;
								hex_char_len = 0;
								hex_char = 0;
								continue;
							case 117:
								stringUnicode = true;
								hex_char_len = 0;
								hex_char = 0;
								continue;
							default:
								val.string += str;
								break;
						}
						stringEscape = false;
					} else if (cInt === 92) if (stringEscape) {
						val.string += "\\";
						stringEscape = false;
					} else {
						stringEscape = true;
						hex_char = 0;
						hex_char_len = 0;
					}
					else {
						if (cr_escaped) {
							cr_escaped = false;
							pos.line++;
							pos.col = 2;
						}
						val.string += str;
					}
				}
				return retval;
			}
			function collectNumber() {
				let _n;
				while ((_n = n) < buf.length) {
					str = buf.charAt(_n);
					let cInt = buf.codePointAt(n++);
					if (cInt >= 256) {
						pos.col -= n - _n;
						n = _n;
						break;
					} else {
						if (cInt == 95) continue;
						pos.col++;
						if (cInt >= 48 && cInt <= 57) {
							if (exponent) exponent_digit = true;
							val.string += str;
						} else if (cInt == 45 || cInt == 43) if (val.string.length == 0 || exponent && !exponent_sign && !exponent_digit) {
							if (cInt == 45 && !exponent) negative = !negative;
							val.string += str;
							exponent_sign = true;
						} else {
							if (negative) {
								val.string = "-" + val.string;
								negative = false;
							}
							val.string += str;
							date_format = true;
						}
						else if (cInt == 78) {
							if (word == WORD_POS_RESET) {
								gatheringNumber = false;
								word = WORD_POS_NAN_1;
								return;
							}
							throwError("fault while parsing number;", cInt);
							break;
						} else if (cInt == 73) {
							if (word == WORD_POS_RESET) {
								gatheringNumber = false;
								word = WORD_POS_INFINITY_1;
								return;
							}
							throwError("fault while parsing number;", cInt);
							break;
						} else if (cInt == 58 && date_format) {
							if (negative) {
								val.string = "-" + val.string;
								negative = false;
							}
							val.string += str;
							date_format = true;
						} else if (cInt == 84 && date_format) {
							if (negative) {
								val.string = "-" + val.string;
								negative = false;
							}
							val.string += str;
							date_format = true;
						} else if (cInt == 90 && date_format) {
							if (negative) {
								val.string = "-" + val.string;
								negative = false;
							}
							val.string += str;
							date_format = true;
						} else if (cInt == 46) if (!decimal && !fromHex && !exponent) {
							val.string += str;
							decimal = true;
						} else {
							status = false;
							throwError("fault while parsing number;", cInt);
							break;
						}
						else if (cInt == 110) {
							isBigInt = true;
							break;
						} else if (fromHex && (cInt >= 95 && cInt <= 102 || cInt >= 65 && cInt <= 70)) val.string += str;
						else if (cInt == 120 || cInt == 98 || cInt == 111 || cInt == 88 || cInt == 66 || cInt == 79) if (!fromHex && val.string == "0") {
							fromHex = true;
							val.string += str;
						} else {
							status = false;
							throwError("fault while parsing number;", cInt);
							break;
						}
						else if (cInt == 101 || cInt == 69) if (!exponent) {
							val.string += str;
							exponent = true;
						} else {
							status = false;
							throwError("fault while parsing number;", cInt);
							break;
						}
						else if (cInt == 32 || cInt == 13 || cInt == 10 || cInt == 9 || cInt == 47 || cInt == 35 || cInt == 44 || cInt == 125 || cInt == 93 || cInt == 123 || cInt == 91 || cInt == 34 || cInt == 39 || cInt == 96 || cInt == 58) {
							pos.col -= n - _n;
							n = _n;
							break;
						} else {
							if (complete_at_end) {
								status = false;
								throwError("fault while parsing number;", cInt);
							}
							break;
						}
					}
				}
				if (!complete_at_end && n == buf.length) gatheringNumber = true;
				else {
					gatheringNumber = false;
					val.value_type = VALUE_NUMBER;
					if (parse_context == CONTEXT_UNKNOWN) completed = true;
				}
			}
			function openObject() {
				let nextMode = CONTEXT_OBJECT_FIELD;
				let cls = null;
				let tmpobj = {};
				if (word > WORD_POS_RESET && word < WORD_POS_FIELD) recoverIdent(123);
				let protoDef;
				protoDef = getProto();
				if (parse_context == CONTEXT_UNKNOWN) if (word == WORD_POS_FIELD || word == WORD_POS_END && (protoDef || val.string.length)) {
					if (protoDef && protoDef.protoDef && protoDef.protoDef.protoCon) tmpobj = new protoDef.protoDef.protoCon();
					if (!protoDef || !protoDef.protoDef && val.string) {
						cls = classes.find((cls) => cls.name === val.string);
						if (!cls) {
							function privateProto() {}
							classes.push(cls = {
								name: val.string,
								protoCon: protoDef && protoDef.protoDef && protoDef.protoDef.protoCon || privateProto.constructor,
								fields: []
							});
							nextMode = CONTEXT_CLASS_FIELD;
						} else if (redefineClass) {
							cls.fields.length = 0;
							nextMode = CONTEXT_CLASS_FIELD;
						} else {
							tmpobj = new cls.protoCon();
							nextMode = CONTEXT_CLASS_VALUE;
						}
						redefineClass = false;
					}
					current_class = cls;
					word = WORD_POS_RESET;
				} else word = WORD_POS_FIELD;
				else if (word == WORD_POS_FIELD || parse_context === CONTEXT_IN_ARRAY || parse_context === CONTEXT_OBJECT_FIELD_VALUE || parse_context == CONTEXT_CLASS_VALUE) if (word != WORD_POS_RESET || val.value_type == VALUE_STRING) {
					if (protoDef && protoDef.protoDef) tmpobj = new protoDef.protoDef.protoCon();
					else {
						cls = classes.find((cls) => cls.name === val.string);
						if (!cls) {
							function privateProto() {}
							localFromProtoTypes.set(val.string, {
								protoCon: privateProto.prototype.constructor,
								cb: null
							});
							tmpobj = new privateProto();
						} else {
							nextMode = CONTEXT_CLASS_VALUE;
							tmpobj = {};
						}
					}
					word = WORD_POS_RESET;
				} else word = WORD_POS_RESET;
				else if (parse_context == CONTEXT_OBJECT_FIELD && word == WORD_POS_RESET) {
					throwError("fault while parsing; getting field name unexpected ", cInt);
					status = false;
					return false;
				}
				let old_context = getContext();
				val.value_type = VALUE_OBJECT;
				if (parse_context === CONTEXT_UNKNOWN) elements = tmpobj;
				else if (parse_context == CONTEXT_IN_ARRAY) {
					if (arrayType == -1) {}
					val.name = elements.length;
				} else if (parse_context == CONTEXT_OBJECT_FIELD_VALUE || parse_context == CONTEXT_CLASS_VALUE) {
					if (!val.name && current_class) val.name = current_class.fields[current_class_field++];
					elements[val.name] = tmpobj;
				}
				old_context.context = parse_context;
				old_context.elements = elements;
				old_context.name = val.name;
				old_context.current_proto = current_proto;
				old_context.current_class = current_class;
				old_context.current_class_field = current_class_field;
				old_context.valueType = val.value_type;
				old_context.arrayType = arrayType;
				old_context.className = val.className;
				val.className = null;
				val.name = null;
				current_proto = protoDef;
				current_class = cls;
				current_class_field = 0;
				elements = tmpobj;
				if (!rootObject) rootObject = elements;
				context_stack.push(old_context);
				RESET_VAL();
				parse_context = nextMode;
				return true;
			}
			function openArray() {
				if (word > WORD_POS_RESET && word < WORD_POS_FIELD) recoverIdent(91);
				if (word == WORD_POS_END && val.string.length) {
					let typeIndex = knownArrayTypeNames.findIndex((type) => type === val.string);
					word = WORD_POS_RESET;
					if (typeIndex >= 0) {
						arrayType = typeIndex;
						val.className = val.string;
						val.string = null;
					} else if (val.string === "ref") {
						val.className = null;
						arrayType = -2;
					} else if (localFromProtoTypes.get(val.string)) val.className = val.string;
					else if (fromProtoTypes.get(val.string)) val.className = val.string;
					else throwError(`Unknown type '${val.string}' specified for array`, cInt);
				} else if (parse_context == CONTEXT_OBJECT_FIELD || word == WORD_POS_FIELD || word == WORD_POS_AFTER_FIELD) {
					throwError("Fault while parsing; while getting field name unexpected", cInt);
					status = false;
					return false;
				}
				{
					let old_context = getContext();
					val.value_type = VALUE_ARRAY;
					let tmparr = [];
					if (parse_context == CONTEXT_UNKNOWN) elements = tmparr;
					else if (parse_context == CONTEXT_IN_ARRAY) {
						if (arrayType == -1) elements.push(tmparr);
						val.name = elements.length;
					} else if (parse_context == CONTEXT_OBJECT_FIELD_VALUE) {
						if (!val.name) {
							console.log("This says it's resolved.......");
							arrayType = -3;
						}
						if (current_proto && current_proto.protoDef) if (current_proto.protoDef.cb) {
							const newarr = current_proto.protoDef.cb.call(elements, val.name, tmparr);
							if (newarr !== void 0) tmparr = elements[val.name] = newarr;
						} else elements[val.name] = tmparr;
						else elements[val.name] = tmparr;
					}
					old_context.context = parse_context;
					old_context.elements = elements;
					old_context.name = val.name;
					old_context.current_proto = current_proto;
					old_context.current_class = current_class;
					old_context.current_class_field = current_class_field;
					old_context.valueType = val.value_type;
					old_context.arrayType = arrayType == -1 ? -3 : arrayType;
					old_context.className = val.className;
					arrayType = -1;
					val.className = null;
					val.name = null;
					current_proto = null;
					current_class = null;
					current_class_field = 0;
					elements = tmparr;
					if (!rootObject) rootObject = tmparr;
					context_stack.push(old_context);
					RESET_VAL();
					parse_context = CONTEXT_IN_ARRAY;
				}
				return true;
			}
			function getProto() {
				const result = {
					protoDef: null,
					cls: null
				};
				if (result.protoDef = localFromProtoTypes.get(val.string)) {
					if (!val.className) {
						val.className = val.string;
						val.string = null;
					}
				} else if (result.protoDef = fromProtoTypes.get(val.string)) {
					if (!val.className) {
						val.className = val.string;
						val.string = null;
					}
				}
				if (val.string) {
					result.cls = classes.find((cls) => cls.name === val.string);
					if (!result.protoDef && !result.cls) {}
				}
				return result.protoDef || result.cls ? result : null;
			}
			if (!status) return -1;
			if (msg && msg.length) {
				input = getBuffer();
				input.buf = msg;
				inQueue.push(input);
			} else {
				if (gatheringNumber) {
					gatheringNumber = false;
					val.value_type = VALUE_NUMBER;
					if (parse_context == CONTEXT_UNKNOWN) completed = true;
					retval = 1;
				}
				if (parse_context !== CONTEXT_UNKNOWN) throwError("Unclosed object at end of stream.", cInt);
			}
			while (status && (input = inQueue.shift())) {
				n = input.n;
				buf = input.buf;
				if (gatheringString) {
					let string_status = gatherString(gatheringStringFirstChar);
					if (string_status < 0) status = false;
					else if (string_status > 0) {
						gatheringString = false;
						if (status) val.value_type = VALUE_STRING;
					}
				}
				if (gatheringNumber) collectNumber();
				while (!completed && status && n < buf.length) {
					str = buf.charAt(n);
					cInt = buf.codePointAt(n++);
					if (cInt >= 65536) {
						str += buf.charAt(n);
						n++;
					}
					pos.col++;
					if (comment) {
						if (comment == 1) if (cInt == 42) comment = 3;
						else if (cInt != 47) return throwError("fault while parsing;", cInt);
						else comment = 2;
						else if (comment == 2) {
							if (cInt == 10 || cInt == 13) comment = 0;
						} else if (comment == 3) {
							if (cInt == 42) comment = 4;
						} else if (cInt == 47) comment = 0;
						else comment = 3;
						continue;
					}
					switch (cInt) {
						case 35:
							comment = 2;
							break;
						case 47:
							comment = 1;
							break;
						case 123:
							openObject();
							break;
						case 91:
							openArray();
							break;
						case 58:
							if (parse_context == CONTEXT_CLASS_VALUE) {
								word = WORD_POS_RESET;
								val.name = val.string;
								val.string = "";
								val.value_type = VALUE_UNSET;
							} else if (parse_context == CONTEXT_OBJECT_FIELD || parse_context == CONTEXT_CLASS_FIELD) if (parse_context == CONTEXT_CLASS_FIELD) {
								if (!Object.keys(elements).length) {
									console.log("This is a full object, not a class def...", val.className);
									const privateProto = () => {};
									localFromProtoTypes.set(context_stack.last.node.current_class.name, {
										protoCon: privateProto.prototype.constructor,
										cb: null
									});
									elements = new privateProto();
									parse_context = CONTEXT_OBJECT_FIELD_VALUE;
									val.name = val.string;
									word = WORD_POS_RESET;
									val.string = "";
									val.value_type = VALUE_UNSET;
									console.log("don't do default;s do a revive...");
								}
							} else {
								if (word != WORD_POS_RESET && word != WORD_POS_END && word != WORD_POS_FIELD && word != WORD_POS_AFTER_FIELD) recoverIdent(32);
								word = WORD_POS_RESET;
								val.name = val.string;
								val.string = "";
								parse_context = parse_context === CONTEXT_OBJECT_FIELD ? CONTEXT_OBJECT_FIELD_VALUE : CONTEXT_CLASS_FIELD_VALUE;
								val.value_type = VALUE_UNSET;
							}
							else if (parse_context == CONTEXT_UNKNOWN) {
								console.log("Override colon found, allow class redefinition", parse_context);
								redefineClass = true;
								break;
							} else {
								if (parse_context == CONTEXT_IN_ARRAY) throwError("(in array, got colon out of string):parsing fault;", cInt);
								else if (parse_context == CONTEXT_OBJECT_FIELD_VALUE) throwError("String unexpected", cInt);
								else throwError("(outside any object, got colon out of string):parsing fault;", cInt);
								status = false;
							}
							break;
						case 125:
							if (word == WORD_POS_END) word = WORD_POS_RESET;
							if (parse_context == CONTEXT_CLASS_FIELD) if (current_class) {
								if (val.string) current_class.fields.push(val.string);
								RESET_VAL();
								let old_context = context_stack.pop();
								parse_context = CONTEXT_UNKNOWN;
								word = WORD_POS_RESET;
								val.name = old_context.name;
								elements = old_context.elements;
								current_class = old_context.current_class;
								current_class_field = old_context.current_class_field;
								arrayType = old_context.arrayType;
								val.value_type = old_context.valueType;
								val.className = old_context.className;
								rootObject = null;
								dropContext(old_context);
							} else throwError("State error; gathering class fields, and lost the class", cInt);
							else if (parse_context == CONTEXT_OBJECT_FIELD || parse_context == CONTEXT_CLASS_VALUE) {
								if (val.value_type != VALUE_UNSET) {
									if (current_class) val.name = current_class.fields[current_class_field++];
									objectPush();
								}
								val.value_type = VALUE_OBJECT;
								if (current_proto && current_proto.protoDef) {
									console.log("SOMETHING SHOULD AHVE BEEN REPLACED HERE??", current_proto);
									console.log("The other version only revives on init");
									elements = new current_proto.protoDef.cb(elements, void 0, void 0);
								}
								val.contains = elements;
								val.string = "";
								let old_context = context_stack.pop();
								parse_context = old_context.context;
								val.name = old_context.name;
								elements = old_context.elements;
								current_class = old_context.current_class;
								current_proto = old_context.current_proto;
								current_class_field = old_context.current_class_field;
								arrayType = old_context.arrayType;
								val.value_type = old_context.valueType;
								val.className = old_context.className;
								dropContext(old_context);
								if (parse_context == CONTEXT_UNKNOWN) completed = true;
							} else if (parse_context == CONTEXT_OBJECT_FIELD_VALUE) {
								if (val.value_type === VALUE_UNSET) if (word == WORD_POS_RESET) throwError("Fault while parsing; unexpected", cInt);
								else recoverIdent(cInt);
								objectPush();
								val.value_type = VALUE_OBJECT;
								val.contains = elements;
								word = WORD_POS_RESET;
								let old_context = context_stack.pop();
								parse_context = old_context.context;
								val.name = old_context.name;
								elements = old_context.elements;
								current_proto = old_context.current_proto;
								current_class = old_context.current_class;
								current_class_field = old_context.current_class_field;
								arrayType = old_context.arrayType;
								val.value_type = old_context.valueType;
								val.className = old_context.className;
								dropContext(old_context);
								if (parse_context == CONTEXT_UNKNOWN) completed = true;
							} else {
								throwError("Fault while parsing; unexpected", cInt);
								status = false;
							}
							negative = false;
							break;
						case 93:
							if (word >= WORD_POS_AFTER_FIELD) word = WORD_POS_RESET;
							if (parse_context == CONTEXT_IN_ARRAY) {
								if (val.value_type != VALUE_UNSET) arrayPush();
								else if (word !== WORD_POS_RESET) {
									recoverIdent(cInt);
									arrayPush();
								}
								val.contains = elements;
								{
									let old_context = context_stack.pop();
									val.name = old_context.name;
									val.className = old_context.className;
									parse_context = old_context.context;
									elements = old_context.elements;
									current_proto = old_context.current_proto;
									current_class = old_context.current_class;
									current_class_field = old_context.current_class_field;
									arrayType = old_context.arrayType;
									val.value_type = old_context.valueType;
									dropContext(old_context);
								}
								val.value_type = VALUE_ARRAY;
								if (parse_context == CONTEXT_UNKNOWN) completed = true;
							} else {
								throwError(`bad context ${parse_context}; fault while parsing`, cInt);
								status = false;
							}
							negative = false;
							break;
						case 44:
							if (word < WORD_POS_AFTER_FIELD && word != WORD_POS_RESET) recoverIdent(cInt);
							if (word == WORD_POS_END || word == WORD_POS_FIELD) word = WORD_POS_RESET;
							if (parse_context == CONTEXT_CLASS_FIELD) if (current_class) {
								current_class.fields.push(val.string);
								val.string = "";
								word = WORD_POS_FIELD;
							} else throwError("State error; gathering class fields, and lost the class", cInt);
							else if (parse_context == CONTEXT_OBJECT_FIELD) {
								if (current_class) {
									val.name = current_class.fields[current_class_field++];
									if (val.value_type != VALUE_UNSET) {
										objectPush();
										RESET_VAL();
									}
								} else if (val.string || val.value_type) throwError("State error; comma in field name and/or lost the class", cInt);
							} else if (parse_context == CONTEXT_CLASS_VALUE) {
								if (current_class) {
									if (arrayType != -3 && !val.name) val.name = current_class.fields[current_class_field++];
									if (val.value_type != VALUE_UNSET) {
										if (arrayType != -3) objectPush();
										RESET_VAL();
									}
								} else if (val.value_type != VALUE_UNSET) {
									objectPush();
									RESET_VAL();
								}
								val.name = null;
							} else if (parse_context == CONTEXT_IN_ARRAY) {
								if (val.value_type == VALUE_UNSET) val.value_type = VALUE_EMPTY;
								arrayPush();
								RESET_VAL();
								word = WORD_POS_RESET;
							} else if (parse_context == CONTEXT_OBJECT_FIELD_VALUE && val.value_type != VALUE_UNSET) {
								parse_context = CONTEXT_OBJECT_FIELD;
								if (val.value_type != VALUE_UNSET) {
									objectPush();
									RESET_VAL();
								}
								word = WORD_POS_RESET;
							} else {
								status = false;
								throwError("bad context; excessive commas while parsing;", cInt);
							}
							negative = false;
							break;
						default:
							switch (cInt) {
								default:
									if (parse_context == CONTEXT_UNKNOWN || parse_context == CONTEXT_OBJECT_FIELD_VALUE && word == WORD_POS_FIELD || parse_context == CONTEXT_OBJECT_FIELD || word == WORD_POS_FIELD || parse_context == CONTEXT_CLASS_FIELD) switch (cInt) {
										case 96:
										case 34:
										case 39:
											if (word == WORD_POS_RESET || word == WORD_POS_FIELD) {
												if (val.string.length) {
													console.log("IN ARRAY AND FIXING?");
													val.className = val.string;
													val.string = "";
												}
												if (gatherString(cInt)) val.value_type = VALUE_STRING;
												else {
													gatheringStringFirstChar = cInt;
													gatheringString = true;
												}
											} else throwError("fault while parsing; quote not at start of field name", cInt);
											break;
										case 10:
											pos.line++;
											pos.col = 1;
										case 13:
										case 32:
										case 8232:
										case 8233:
										case 9:
										case 65279:
											if (parse_context === CONTEXT_UNKNOWN && word === WORD_POS_END) {
												word = WORD_POS_RESET;
												if (parse_context === CONTEXT_UNKNOWN) completed = true;
												break;
											}
											if (word === WORD_POS_RESET || word === WORD_POS_AFTER_FIELD) {
												if (parse_context == CONTEXT_UNKNOWN && val.value_type) completed = true;
												break;
											} else if (word === WORD_POS_FIELD) {
												if (parse_context === CONTEXT_UNKNOWN) {
													word = WORD_POS_RESET;
													completed = true;
													break;
												}
												if (val.string.length) console.log("STEP TO NEXT TOKEN.");
												word = WORD_POS_AFTER_FIELD;
											} else {
												status = false;
												throwError("fault while parsing; whitepsace unexpected", cInt);
											}
											break;
										default:
											if (word == WORD_POS_RESET && (cInt >= 48 && cInt <= 57 || cInt == 43 || cInt == 46 || cInt == 45)) {
												fromHex = false;
												exponent = false;
												date_format = false;
												isBigInt = false;
												exponent_sign = false;
												exponent_digit = false;
												decimal = false;
												val.string = str;
												input.n = n;
												collectNumber();
												break;
											}
											if (word === WORD_POS_AFTER_FIELD) {
												status = false;
												throwError("fault while parsing; character unexpected", cInt);
											}
											if (word === WORD_POS_RESET) {
												word = WORD_POS_FIELD;
												val.value_type = VALUE_STRING;
												val.string += str;
												break;
											}
											if (val.value_type == VALUE_UNSET) {
												if (word !== WORD_POS_RESET && word !== WORD_POS_END) recoverIdent(cInt);
											} else {
												if (word === WORD_POS_END || word === WORD_POS_FIELD) {
													val.string += str;
													break;
												}
												if (parse_context == CONTEXT_OBJECT_FIELD) {
													if (word == WORD_POS_FIELD) {
														val.string += str;
														break;
													}
													throwError("Multiple values found in field name", cInt);
												}
												if (parse_context == CONTEXT_OBJECT_FIELD_VALUE) throwError("String unexpected", cInt);
											}
											break;
									}
									else {
										if (word == WORD_POS_RESET && (cInt >= 48 && cInt <= 57 || cInt == 43 || cInt == 46 || cInt == 45)) {
											fromHex = false;
											exponent = false;
											date_format = false;
											isBigInt = false;
											exponent_sign = false;
											exponent_digit = false;
											decimal = false;
											val.string = str;
											input.n = n;
											collectNumber();
										} else if (val.value_type == VALUE_UNSET) if (word != WORD_POS_RESET) recoverIdent(cInt);
										else {
											word = WORD_POS_END;
											val.string += str;
											val.value_type = VALUE_STRING;
										}
										else if (parse_context == CONTEXT_OBJECT_FIELD) throwError("Multiple values found in field name", cInt);
										else if (parse_context == CONTEXT_OBJECT_FIELD_VALUE) {
											if (val.value_type != VALUE_STRING) {
												if (val.value_type == VALUE_OBJECT || val.value_type == VALUE_ARRAY) throwError("String unexpected", cInt);
												recoverIdent(cInt);
											}
											if (word == WORD_POS_AFTER_FIELD) if (getProto()) val.string = str;
											else throwError("String unexpected", cInt);
											else if (word == WORD_POS_END) val.string += str;
											else throwError("String unexpected", cInt);
										} else if (parse_context == CONTEXT_IN_ARRAY) {
											if (word == WORD_POS_AFTER_FIELD) {
												if (!val.className) {
													val.className = val.string;
													val.string = "";
												}
												val.string += str;
												break;
											} else if (word == WORD_POS_END) val.string += str;
										}
										break;
									}
									break;
								case 96:
								case 34:
								case 39:
									if (val.string) val.className = val.string;
									val.string = "";
									if (gatherString(cInt)) {
										val.value_type = VALUE_STRING;
										word = WORD_POS_END;
									} else {
										gatheringStringFirstChar = cInt;
										gatheringString = true;
									}
									break;
								case 10:
									pos.line++;
									pos.col = 1;
								case 32:
								case 9:
								case 13:
								case 8232:
								case 8233:
								case 65279:
									if (word == WORD_POS_END) {
										if (parse_context == CONTEXT_UNKNOWN) {
											word = WORD_POS_RESET;
											completed = true;
											break;
										} else if (parse_context == CONTEXT_OBJECT_FIELD_VALUE) {
											word = WORD_POS_AFTER_FIELD_VALUE;
											break;
										} else if (parse_context == CONTEXT_OBJECT_FIELD) {
											word = WORD_POS_AFTER_FIELD;
											break;
										} else if (parse_context == CONTEXT_IN_ARRAY) {
											word = WORD_POS_AFTER_FIELD;
											break;
										}
									}
									if (word == WORD_POS_RESET || word == WORD_POS_AFTER_FIELD) break;
									else if (word == WORD_POS_FIELD) {
										if (val.string.length) word = WORD_POS_AFTER_FIELD;
									} else if (word < WORD_POS_END) recoverIdent(cInt);
									break;
								case 116:
									if (word == WORD_POS_RESET) word = WORD_POS_TRUE_1;
									else if (word == WORD_POS_INFINITY_6) word = WORD_POS_INFINITY_7;
									else recoverIdent(cInt);
									break;
								case 114:
									if (word == WORD_POS_TRUE_1) word = WORD_POS_TRUE_2;
									else recoverIdent(cInt);
									break;
								case 117:
									if (word == WORD_POS_TRUE_2) word = WORD_POS_TRUE_3;
									else if (word == WORD_POS_NULL_1) word = WORD_POS_NULL_2;
									else if (word == WORD_POS_RESET) word = WORD_POS_UNDEFINED_1;
									else recoverIdent(cInt);
									break;
								case 101:
									if (word == WORD_POS_TRUE_3) {
										val.value_type = VALUE_TRUE;
										word = WORD_POS_END;
									} else if (word == WORD_POS_FALSE_4) {
										val.value_type = VALUE_FALSE;
										word = WORD_POS_END;
									} else if (word == WORD_POS_UNDEFINED_3) word = WORD_POS_UNDEFINED_4;
									else if (word == WORD_POS_UNDEFINED_7) word = WORD_POS_UNDEFINED_8;
									else recoverIdent(cInt);
									break;
								case 110:
									if (word == WORD_POS_RESET) word = WORD_POS_NULL_1;
									else if (word == WORD_POS_UNDEFINED_1) word = WORD_POS_UNDEFINED_2;
									else if (word == WORD_POS_UNDEFINED_6) word = WORD_POS_UNDEFINED_7;
									else if (word == WORD_POS_INFINITY_1) word = WORD_POS_INFINITY_2;
									else if (word == WORD_POS_INFINITY_4) word = WORD_POS_INFINITY_5;
									else recoverIdent(cInt);
									break;
								case 100:
									if (word == WORD_POS_UNDEFINED_2) word = WORD_POS_UNDEFINED_3;
									else if (word == WORD_POS_UNDEFINED_8) {
										val.value_type = VALUE_UNDEFINED;
										word = WORD_POS_END;
									} else recoverIdent(cInt);
									break;
								case 105:
									if (word == WORD_POS_UNDEFINED_5) word = WORD_POS_UNDEFINED_6;
									else if (word == WORD_POS_INFINITY_3) word = WORD_POS_INFINITY_4;
									else if (word == WORD_POS_INFINITY_5) word = WORD_POS_INFINITY_6;
									else recoverIdent(cInt);
									break;
								case 108:
									if (word == WORD_POS_NULL_2) word = WORD_POS_NULL_3;
									else if (word == WORD_POS_NULL_3) {
										val.value_type = VALUE_NULL;
										word = WORD_POS_END;
									} else if (word == WORD_POS_FALSE_2) word = WORD_POS_FALSE_3;
									else recoverIdent(cInt);
									break;
								case 102:
									if (word == WORD_POS_RESET) word = WORD_POS_FALSE_1;
									else if (word == WORD_POS_UNDEFINED_4) word = WORD_POS_UNDEFINED_5;
									else if (word == WORD_POS_INFINITY_2) word = WORD_POS_INFINITY_3;
									else recoverIdent(cInt);
									break;
								case 97:
									if (word == WORD_POS_FALSE_1) word = WORD_POS_FALSE_2;
									else if (word == WORD_POS_NAN_1) word = WORD_POS_NAN_2;
									else recoverIdent(cInt);
									break;
								case 115:
									if (word == WORD_POS_FALSE_3) word = WORD_POS_FALSE_4;
									else recoverIdent(cInt);
									break;
								case 73:
									if (word == WORD_POS_RESET) word = WORD_POS_INFINITY_1;
									else recoverIdent(cInt);
									break;
								case 78:
									if (word == WORD_POS_RESET) word = WORD_POS_NAN_1;
									else if (word == WORD_POS_NAN_2) {
										val.value_type = negative ? VALUE_NEG_NAN : VALUE_NAN;
										negative = false;
										word = WORD_POS_END;
									} else recoverIdent(cInt);
									break;
								case 121:
									if (word == WORD_POS_INFINITY_7) {
										val.value_type = negative ? VALUE_NEG_INFINITY : VALUE_INFINITY;
										negative = false;
										word = WORD_POS_END;
									} else recoverIdent(cInt);
									break;
								case 45:
									if (word == WORD_POS_RESET) negative = !negative;
									else recoverIdent(cInt);
									break;
								case 43:
									if (word !== WORD_POS_RESET) recoverIdent(cInt);
									break;
							}
							break;
					}
					if (completed) {
						if (word == WORD_POS_END) word = WORD_POS_RESET;
						break;
					}
				}
				if (n == buf.length) {
					dropBuffer(input);
					if (val.value_type == VALUE_UNSET && complete_at_end && word != WORD_POS_RESET) recoverIdent(32);
					if (gatheringString || gatheringNumber || parse_context == CONTEXT_OBJECT_FIELD) retval = 0;
					else if (parse_context == CONTEXT_UNKNOWN && (val.value_type != VALUE_UNSET || result)) {
						completed = true;
						retval = 1;
					}
				} else {
					input.n = n;
					inQueue.unshift(input);
					retval = 2;
				}
				if (completed) {
					rootObject = null;
					break;
				}
			}
			if (!status) return -1;
			if (completed && val.value_type != VALUE_UNSET) {
				word = WORD_POS_RESET;
				result = convertValue();
				negative = false;
				val.string = "";
				val.value_type = VALUE_UNSET;
			}
			completed = false;
			return retval;
		}
	};
};
var _parser = [Object.freeze(JSOX.begin())];
var _parse_level = 0;
/**
* parse a string resulting with one value from it.
*
* @template T
* @param {string} msg 
* @param {(this: any, key: string, value: any) => any} [reviver] 
* @returns {T}
*/
JSOX.parse = function(msg, reviver) {
	let parse_level = _parse_level++;
	let parser;
	if (_parser.length <= parse_level) _parser.push(Object.freeze(JSOX.begin()));
	parser = _parser[parse_level];
	if (typeof msg !== "string") msg = String(msg);
	parser.reset();
	const writeResult = parser._write(msg, true);
	if (writeResult > 0) {
		if (writeResult > 1) {}
		let result = parser.value();
		if ("undefined" === typeof result && writeResult > 1) throw new Error("Pending value could not complete");
		result = typeof reviver === "function" ? function walk(holder, key) {
			let k, v, value = holder[key];
			if (value && typeof value === "object") {
				for (k in value) if (Object.prototype.hasOwnProperty.call(value, k)) {
					v = walk(value, k);
					if (v !== void 0) value[k] = v;
					else delete value[k];
				}
			}
			return reviver.call(holder, key, value);
		}({ "": result }, "") : result;
		_parse_level--;
		return result;
	}
	parser.finalError();
};
function this_value() {
	return this && this.valueOf();
}
/**
* Define a class to be used for serialization; the class allows emitting the class fields ahead of time, and just provide values later.
* @param {string} name 
* @param {object} obj 
*/
JSOX.defineClass = function(name, obj) {
	let cls;
	let denormKeys = Object.keys(obj);
	for (let i = 1; i < denormKeys.length; i++) {
		let a, b;
		if ((a = denormKeys[i - 1]) > (b = denormKeys[i])) {
			denormKeys[i - 1] = b;
			denormKeys[i] = a;
			if (i) i -= 2;
			else i--;
		}
	}
	commonClasses.push(cls = {
		name,
		tag: denormKeys.toString(),
		proto: Object.getPrototypeOf(obj),
		fields: Object.keys(obj)
	});
	for (let n = 1; n < cls.fields.length; n++) if (cls.fields[n] < cls.fields[n - 1]) {
		let tmp = cls.fields[n - 1];
		cls.fields[n - 1] = cls.fields[n];
		cls.fields[n] = tmp;
		if (n > 1) n -= 2;
	}
	if (cls.proto === Object.getPrototypeOf({})) cls.proto = null;
};
/**
* deprecated; define a class to be used for serialization
*
* @param {string} named
* @param {class} ptype
* @param {(any)=>any} f
*/
JSOX.registerToJSOX = function(name, ptype, f) {
	throw new Error("registerToJSOX deprecated; please use toJSOX:" + prototypeName + prototype.toString());
};
/**
* define a class with special serialization rules.
*
* @param {string} named
* @param {class} ptype
* @param {(any)=>any} f
*/
JSOX.toJSOX = function(name, ptype, f) {
	if (!ptype.prototype || ptype.prototype !== Object.prototype) {
		if (toProtoTypes.get(ptype.prototype)) throw new Error("Existing toJSOX has been registered for prototype");
		toProtoTypes.set(ptype.prototype, {
			external: true,
			name: name || f.constructor.name,
			cb: f
		});
	} else {
		let key = Object.keys(ptype).toString();
		if (toObjectTypes.get(key)) throw new Error("Existing toJSOX has been registered for object type");
		toObjectTypes.set(key, {
			external: true,
			name,
			cb: f
		});
	}
};
/**
* define a class to be used for deserialization
* @param {string} prototypeName 
* @param {class} o 
* @param {(any)=>any} f 
*/
JSOX.fromJSOX = function(prototypeName, o, f) {
	function privateProto() {}
	if (!o) o = privateProto.prototype;
	if (fromProtoTypes.get(prototypeName)) throw new Error("Existing fromJSOX has been registered for prototype");
	if (o && !("constructor" in o)) throw new Error("Please pass a prototype like thing...");
	fromProtoTypes.set(prototypeName, {
		protoCon: o.prototype.constructor,
		cb: f
	});
};
/**
* deprecated; use fromJSOX instead
*/
JSOX.registerFromJSOX = function(prototypeName, o) {
	throw new Error("deprecated; please adjust code to use fromJSOX:" + prototypeName + o.toString());
};
/**
* Define serialization and deserialization methods for a class.
* This is the same as registering separately with toJSOX and fromJSOX methods.
* 
* @param {string} name - Name used to prefix objects of this type encoded in JSOX
* @param {class} prototype - prototype to match when serializing, and to create instaces of when deserializing.
* @param {(stringifier:JSOXStringifier)=>{string}} to - `this` is the value to convert; function to call to encode JSOX from an object
* @param {(field:string,val:any)=>{any}} from - handle storing revived value in class
*/
JSOX.addType = function(prototypeName, prototype, to, from) {
	JSOX.toJSOX(prototypeName, prototype, to);
	JSOX.fromJSOX(prototypeName, prototype, from);
};
JSOX.registerToFrom = function(prototypeName, prototype) {
	throw new Error("registerToFrom deprecated; please use addType:" + prototypeName + prototype.toString());
};
/**
* Create a stringifier to convert objects to JSOX text.  Allows defining custom serialization for objects.
* @returns {JSOXStringifier}
*/
JSOX.stringifier = function() {
	let classes = [];
	let useQuote = "\"";
	let fieldMap = /* @__PURE__ */ new WeakMap();
	const path = [];
	let encoding = [];
	const localToProtoTypes = /* @__PURE__ */ new WeakMap();
	const localToObjectTypes = /* @__PURE__ */ new Map();
	let objectToJSOX = null;
	const stringifying = [];
	let ignoreNonEnumerable = false;
	function getIdentifier(s) {
		if ("string" === typeof s && s === "") return "\"\"";
		if ("number" === typeof s && !isNaN(s)) return [
			"'",
			s.toString(),
			"'"
		].join("");
		if (s.includes("﻿")) return useQuote + JSOX.escape(s) + useQuote;
		return s in keywords || /[0-9\-]/.test(s[0]) || /[\n\r\t #\[\]{}()<>\~!+*/.:,\-"'`]/.test(s) ? useQuote + JSOX.escape(s) + useQuote : s;
	}
	if (!toProtoTypes.get(Object.prototype)) {
		toProtoTypes.set(Object.prototype, {
			external: false,
			name: Object.prototype.constructor.name,
			cb: null
		});
		toProtoTypes.set(Date.prototype, {
			external: false,
			name: "Date",
			cb: function() {
				if (this.getTime() === -621672192e5) return "0000-01-01T00:00:00.000Z";
				let tzo = -this.getTimezoneOffset(), dif = tzo >= 0 ? "+" : "-", pad = function(num) {
					let norm = Math.floor(Math.abs(num));
					return (norm < 10 ? "0" : "") + norm;
				}, pad3 = function(num) {
					let norm = Math.floor(Math.abs(num));
					return (norm < 100 ? "0" : "") + (norm < 10 ? "0" : "") + norm;
				};
				return [
					this.getFullYear(),
					"-",
					pad(this.getMonth() + 1),
					"-",
					pad(this.getDate()),
					"T",
					pad(this.getHours()),
					":",
					pad(this.getMinutes()),
					":",
					pad(this.getSeconds()),
					"." + pad3(this.getMilliseconds()) + dif,
					pad(tzo / 60),
					":",
					pad(tzo % 60)
				].join("");
			}
		});
		toProtoTypes.set(DateNS.prototype, {
			external: false,
			name: "DateNS",
			cb: function() {
				let tzo = -this.getTimezoneOffset(), dif = tzo >= 0 ? "+" : "-", pad = function(num) {
					let norm = Math.floor(Math.abs(num));
					return (norm < 10 ? "0" : "") + norm;
				}, pad3 = function(num) {
					let norm = Math.floor(Math.abs(num));
					return (norm < 100 ? "0" : "") + (norm < 10 ? "0" : "") + norm;
				}, pad6 = function(num) {
					let norm = Math.floor(Math.abs(num));
					return (norm < 1e5 ? "0" : "") + (norm < 1e4 ? "0" : "") + (norm < 1e3 ? "0" : "") + (norm < 100 ? "0" : "") + (norm < 10 ? "0" : "") + norm;
				};
				return [
					this.getFullYear(),
					"-",
					pad(this.getMonth() + 1),
					"-",
					pad(this.getDate()),
					"T",
					pad(this.getHours()),
					":",
					pad(this.getMinutes()),
					":",
					pad(this.getSeconds()),
					"." + pad3(this.getMilliseconds()) + pad6(this.ns) + dif,
					pad(tzo / 60),
					":",
					pad(tzo % 60)
				].join("");
			}
		});
		toProtoTypes.set(Boolean.prototype, {
			external: false,
			name: "Boolean",
			cb: this_value
		});
		toProtoTypes.set(Number.prototype, {
			external: false,
			name: "Number",
			cb: function() {
				if (isNaN(this)) return "NaN";
				return isFinite(this) ? String(this) : this < 0 ? "-Infinity" : "Infinity";
			}
		});
		toProtoTypes.set(String.prototype, {
			external: false,
			name: "String",
			cb: function() {
				return "\"" + JSOX.escape(this_value.apply(this)) + "\"";
			}
		});
		if (typeof BigInt === "function") toProtoTypes.set(BigInt.prototype, {
			external: false,
			name: "BigInt",
			cb: function() {
				return this + "n";
			}
		});
		toProtoTypes.set(ArrayBuffer.prototype, {
			external: true,
			name: "ab",
			cb: function() {
				return "[" + getIdentifier(base64ArrayBuffer(this)) + "]";
			}
		});
		toProtoTypes.set(Uint8Array.prototype, {
			external: true,
			name: "u8",
			cb: function() {
				return "[" + getIdentifier(base64ArrayBuffer(this.buffer)) + "]";
			}
		});
		toProtoTypes.set(Uint8ClampedArray.prototype, {
			external: true,
			name: "uc8",
			cb: function() {
				return "[" + getIdentifier(base64ArrayBuffer(this.buffer)) + "]";
			}
		});
		toProtoTypes.set(Int8Array.prototype, {
			external: true,
			name: "s8",
			cb: function() {
				return "[" + getIdentifier(base64ArrayBuffer(this.buffer)) + "]";
			}
		});
		toProtoTypes.set(Uint16Array.prototype, {
			external: true,
			name: "u16",
			cb: function() {
				return "[" + getIdentifier(base64ArrayBuffer(this.buffer)) + "]";
			}
		});
		toProtoTypes.set(Int16Array.prototype, {
			external: true,
			name: "s16",
			cb: function() {
				return "[" + getIdentifier(base64ArrayBuffer(this.buffer)) + "]";
			}
		});
		toProtoTypes.set(Uint32Array.prototype, {
			external: true,
			name: "u32",
			cb: function() {
				return "[" + getIdentifier(base64ArrayBuffer(this.buffer)) + "]";
			}
		});
		toProtoTypes.set(Int32Array.prototype, {
			external: true,
			name: "s32",
			cb: function() {
				return "[" + getIdentifier(base64ArrayBuffer(this.buffer)) + "]";
			}
		});
		toProtoTypes.set(Float32Array.prototype, {
			external: true,
			name: "f32",
			cb: function() {
				return "[" + getIdentifier(base64ArrayBuffer(this.buffer)) + "]";
			}
		});
		toProtoTypes.set(Float64Array.prototype, {
			external: true,
			name: "f64",
			cb: function() {
				return "[" + getIdentifier(base64ArrayBuffer(this.buffer)) + "]";
			}
		});
		toProtoTypes.set(Float64Array.prototype, {
			external: true,
			name: "f64",
			cb: function() {
				return "[" + getIdentifier(base64ArrayBuffer(this.buffer)) + "]";
			}
		});
		toProtoTypes.set(RegExp.prototype, mapToJSOX = {
			external: true,
			name: "regex",
			cb: function(o, stringifier) {
				return "'" + escape(this.source) + "'";
			}
		});
		fromProtoTypes.set("regex", {
			protoCon: RegExp,
			cb: function(field, val) {
				return new RegExp(this);
			}
		});
		toProtoTypes.set(Map.prototype, mapToJSOX = {
			external: true,
			name: "map",
			cb: null
		});
		fromProtoTypes.set("map", {
			protoCon: Map,
			cb: function(field, val) {
				if (field) {
					this.set(field, val);
					return;
				}
				return this;
			}
		});
		toProtoTypes.set(Array.prototype, arrayToJSOX = {
			external: false,
			name: Array.prototype.constructor.name,
			cb: null
		});
	}
	const stringifier = {
		defineClass(name, obj) {
			let cls;
			let denormKeys = Object.keys(obj);
			for (let i = 1; i < denormKeys.length; i++) {
				let a, b;
				if ((a = denormKeys[i - 1]) > (b = denormKeys[i])) {
					denormKeys[i - 1] = b;
					denormKeys[i] = a;
					if (i) i -= 2;
					else i--;
				}
			}
			classes.push(cls = {
				name,
				tag: denormKeys.toString(),
				proto: Object.getPrototypeOf(obj),
				fields: Object.keys(obj)
			});
			for (let n = 1; n < cls.fields.length; n++) if (cls.fields[n] < cls.fields[n - 1]) {
				let tmp = cls.fields[n - 1];
				cls.fields[n - 1] = cls.fields[n];
				cls.fields[n] = tmp;
				if (n > 1) n -= 2;
			}
			if (cls.proto === Object.getPrototypeOf({})) cls.proto = null;
		},
		setDefaultObjectToJSOX(cb) {
			objectToJSOX = cb;
		},
		isEncoding(o) {
			return !!encoding.find((eo, i) => eo === o && i < encoding.length - 1);
		},
		encodeObject(o) {
			if (objectToJSOX) return objectToJSOX.apply(o, [this]);
			return o;
		},
		stringify(o, r, s) {
			return stringify(o, r, s);
		},
		setQuote(q) {
			useQuote = q;
		},
		registerToJSOX(n, p, f) {
			return this.toJSOX(n, p, f);
		},
		toJSOX(name, ptype, f) {
			if (ptype.prototype && ptype.prototype !== Object.prototype) {
				if (localToProtoTypes.get(ptype.prototype)) throw new Error("Existing toJSOX has been registered for prototype");
				localToProtoTypes.set(ptype.prototype, {
					external: true,
					name: name || f.constructor.name,
					cb: f
				});
			} else {
				let key = Object.keys(ptype).toString();
				if (localToObjectTypes.get(key)) throw new Error("Existing toJSOX has been registered for object type");
				localToObjectTypes.set(key, {
					external: true,
					name,
					cb: f
				});
			}
		},
		get ignoreNonEnumerable() {
			return ignoreNonEnumerable;
		},
		set ignoreNonEnumerable(val) {
			ignoreNonEnumerable = val;
		}
	};
	return stringifier;
	/**
	* get a reference to a previously seen object
	* @param {any} here 
	* @returns reference to existing object, or undefined if not found.
	*/
	function getReference(here) {
		if (here === null) return void 0;
		let field = fieldMap.get(here);
		if (!field) {
			fieldMap.set(here, _JSON.stringify(path));
			return;
		}
		return "ref" + field;
	}
	/**
	* find the prototype definition for a class
	* @param {object} o 
	* @param {map} useK 
	* @returns object
	*/
	function matchObject(o, useK) {
		let k;
		let cls;
		let prt = Object.getPrototypeOf(o);
		cls = classes.find((cls) => {
			if (cls.proto && cls.proto === prt) return true;
		});
		if (cls) return cls;
		if (classes.length || commonClasses.length) {
			if (useK) {
				useK = useK.map((v) => {
					if (typeof v === "string") return v;
					else return void 0;
				});
				k = useK.toString();
			} else {
				let denormKeys = Object.keys(o);
				for (let i = 1; i < denormKeys.length; i++) {
					let a, b;
					if ((a = denormKeys[i - 1]) > (b = denormKeys[i])) {
						denormKeys[i - 1] = b;
						denormKeys[i] = a;
						if (i) i -= 2;
						else i--;
					}
				}
				k = denormKeys.toString();
			}
			cls = classes.find((cls) => {
				if (cls.tag === k) return true;
			});
			if (!cls) cls = commonClasses.find((cls) => {
				if (cls.tag === k) return true;
			});
		}
		return cls;
	}
	/**
	* Serialize an object to JSOX text.
	* @param {any} object 
	* @param {(key:string,value:any)=>string} replacer 
	* @param {string|number} space 
	* @returns 
	*/
	function stringify(object, replacer, space) {
		if (object === void 0) return "undefined";
		if (object === null) return;
		let gap;
		let indent;
		let rep;
		let i;
		const spaceType = typeof space;
		const repType = typeof replacer;
		gap = "";
		indent = "";
		if (spaceType === "number") for (i = 0; i < space; i += 1) indent += " ";
		else if (spaceType === "string") indent = space;
		rep = replacer;
		if (replacer && repType !== "function" && (repType !== "object" || typeof replacer.length !== "number")) throw new Error("JSOX.stringify");
		path.length = 0;
		fieldMap = /* @__PURE__ */ new WeakMap();
		const finalResult = str("", { "": object });
		commonClasses.length = 0;
		return finalResult;
		function str(key, holder) {
			var mind = gap;
			const doArrayToJSOX_ = arrayToJSOX.cb;
			const mapToObject_ = mapToJSOX.cb;
			arrayToJSOX.cb = doArrayToJSOX;
			mapToJSOX.cb = mapToObject;
			const v = str_(key, holder);
			arrayToJSOX.cb = doArrayToJSOX_;
			mapToJSOX.cb = mapToObject_;
			return v;
			function doArrayToJSOX() {
				let v;
				let partial = [];
				let thisNodeNameIndex = path.length;
				for (let i = 0; i < this.length; i += 1) {
					path[thisNodeNameIndex] = i;
					partial[i] = str(i, this) || "null";
				}
				path.length = thisNodeNameIndex;
				encoding.length = thisNodeNameIndex;
				v = partial.length === 0 ? "[]" : gap ? [
					"[\n",
					gap,
					partial.join(",\n" + gap),
					"\n",
					mind,
					"]"
				].join("") : "[" + partial.join(",") + "]";
				return v;
			}
			function mapToObject() {
				let tmp = { tmp: null };
				let out = "{";
				let first = true;
				for (let [key, value] of this) {
					tmp.tmp = value;
					let thisNodeNameIndex = path.length;
					path[thisNodeNameIndex] = key;
					out += (first ? "" : ",") + getIdentifier(key) + ":" + str("tmp", tmp);
					path.length = thisNodeNameIndex;
					first = false;
				}
				out += "}";
				return out;
			}
			function str_(key, holder) {
				let i;
				let k;
				let v;
				let length;
				let partialClass;
				let partial;
				let thisNodeNameIndex = path.length;
				let isValue = true;
				let value = holder[key];
				let isObject = typeof value === "object";
				let c;
				if (isObject && value !== null) {
					if (objectToJSOX) {
						if (!stringifying.find((val) => val === value)) {
							stringifying.push(value);
							encoding[thisNodeNameIndex] = value;
							isValue = false;
							value = objectToJSOX.apply(value, [stringifier]);
							isObject = typeof value === "object";
							stringifying.pop();
							encoding.length = thisNodeNameIndex;
							isObject = typeof value === "object";
						}
					}
				}
				const objType = value !== void 0 && value !== null && Object.getPrototypeOf(value);
				let protoConverter = objType && (localToProtoTypes.get(objType) || toProtoTypes.get(objType) || null);
				let objectConverter = !protoConverter && value !== void 0 && value !== null && (localToObjectTypes.get(Object.keys(value).toString()) || toObjectTypes.get(Object.keys(value).toString()) || null);
				if (typeof rep === "function") {
					isValue = false;
					value = rep.call(holder, key, value);
				}
				let toJSOX = protoConverter && protoConverter.cb || objectConverter && objectConverter.cb;
				if (value !== void 0 && value !== null && typeof value === "object" && typeof toJSOX === "function") if (!stringifying.find((val) => val === value)) {
					if (typeof value === "object") {
						v = getReference(value);
						if (v) return v;
					}
					stringifying.push(value);
					encoding[thisNodeNameIndex] = value;
					value = toJSOX.call(value, stringifier);
					isValue = false;
					stringifying.pop();
					if (protoConverter && protoConverter.name) {
						if ("string" === typeof value && value[0] !== "-" && (value[0] < "0" || value[0] > "9") && value[0] !== "\"" && value[0] !== "'" && value[0] !== "`" && value[0] !== "[" && value[0] !== "{") value = " " + value;
					}
					encoding.length = thisNodeNameIndex;
				} else v = getReference(value);
				else if (typeof value === "object") {
					v = getReference(value);
					if (v) return v;
				}
				switch (typeof value) {
					case "bigint": return value + "n";
					case "string": {
						value = isValue ? getIdentifier(value) : value;
						let c = "";
						if (key === "") c = classes.map((cls) => cls.name + "{" + cls.fields.join(",") + "}").join(gap ? "\n" : "") + commonClasses.map((cls) => cls.name + "{" + cls.fields.join(",") + "}").join(gap ? "\n" : "") + (gap ? "\n" : "");
						if (protoConverter && protoConverter.external) return c + protoConverter.name + value;
						if (objectConverter && objectConverter.external) return c + objectConverter.name + value;
						return c + value;
					}
					case "number":
					case "boolean":
					case "null": return String(value);
					case "object":
						if (v) return v;
						if (!value) return "null";
						gap += indent;
						partialClass = null;
						partial = [];
						if (rep && typeof rep === "object") {
							length = rep.length;
							partialClass = matchObject(value, rep);
							for (i = 0; i < length; i += 1) if (typeof rep[i] === "string") {
								k = rep[i];
								path[thisNodeNameIndex] = k;
								v = str(k, value);
								if (v !== void 0) if (partialClass) partial.push(v);
								else partial.push(getIdentifier(k) + (gap ? ": " : ":") + v);
							}
							path.splice(thisNodeNameIndex, 1);
						} else {
							partialClass = matchObject(value);
							let keys = [];
							for (k in value) {
								if (ignoreNonEnumerable) {
									if (!Object.prototype.propertyIsEnumerable.call(value, k)) continue;
								}
								if (Object.prototype.hasOwnProperty.call(value, k)) {
									let n;
									for (n = 0; n < keys.length; n++) if (keys[n] > k) {
										keys.splice(n, 0, k);
										break;
									}
									if (n == keys.length) keys.push(k);
								}
							}
							for (let n = 0; n < keys.length; n++) {
								k = keys[n];
								if (Object.prototype.hasOwnProperty.call(value, k)) {
									path[thisNodeNameIndex] = k;
									v = str(k, value);
									if (v !== void 0) if (partialClass) partial.push(v);
									else partial.push(getIdentifier(k) + (gap ? ": " : ":") + v);
								}
							}
							path.splice(thisNodeNameIndex, 1);
						}
						if (key === "") c = (classes.map((cls) => cls.name + "{" + cls.fields.join(",") + "}").join(gap ? "\n" : "") || commonClasses.map((cls) => cls.name + "{" + cls.fields.join(",") + "}").join(gap ? "\n" : "")) + (gap ? "\n" : "");
						else c = "";
						if (protoConverter && protoConverter.external) c = c + getIdentifier(protoConverter.name);
						let ident = null;
						if (partialClass) ident = getIdentifier(partialClass.name);
						v = c + (partial.length === 0 ? "{}" : gap ? (partialClass ? ident : "") + "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : (partialClass ? ident : "") + "{" + partial.join(",") + "}");
						gap = mind;
						return v;
				}
			}
		}
	}
};
var encodings = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_";
var decodings = {
	"~": -1,
	"=": -1,
	"$": 62,
	"_": 63,
	"+": 62,
	"-": 62,
	".": 62,
	"/": 63,
	",": 63
};
for (let x = 0; x < 64; x++) decodings[encodings[x]] = x;
Object.freeze(decodings);
function base64ArrayBuffer(arrayBuffer) {
	let base64 = "";
	let bytes = new Uint8Array(arrayBuffer);
	let byteLength = bytes.byteLength;
	let byteRemainder = byteLength % 3;
	let mainLength = byteLength - byteRemainder;
	let a, b, c, d;
	let chunk;
	for (let i = 0; i < mainLength; i = i + 3) {
		chunk = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
		a = (chunk & 16515072) >> 18;
		b = (chunk & 258048) >> 12;
		c = (chunk & 4032) >> 6;
		d = chunk & 63;
		base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
	}
	if (byteRemainder == 1) {
		chunk = bytes[mainLength];
		a = (chunk & 252) >> 2;
		b = (chunk & 3) << 4;
		base64 += encodings[a] + encodings[b] + "==";
	} else if (byteRemainder == 2) {
		chunk = bytes[mainLength] << 8 | bytes[mainLength + 1];
		a = (chunk & 64512) >> 10;
		b = (chunk & 1008) >> 4;
		c = (chunk & 15) << 2;
		base64 += encodings[a] + encodings[b] + encodings[c] + "=";
	}
	return base64;
}
function DecodeBase64(buf) {
	let outsize;
	if (buf.length % 4 == 1) outsize = ((buf.length + 3) / 4 | 0) * 3 - 3;
	else if (buf.length % 4 == 2) outsize = ((buf.length + 3) / 4 | 0) * 3 - 2;
	else if (buf.length % 4 == 3) outsize = ((buf.length + 3) / 4 | 0) * 3 - 1;
	else if (decodings[buf[buf.length - 3]] == -1) outsize = ((buf.length + 3) / 4 | 0) * 3 - 3;
	else if (decodings[buf[buf.length - 2]] == -1) outsize = ((buf.length + 3) / 4 | 0) * 3 - 2;
	else if (decodings[buf[buf.length - 1]] == -1) outsize = ((buf.length + 3) / 4 | 0) * 3 - 1;
	else outsize = ((buf.length + 3) / 4 | 0) * 3;
	let ab = new ArrayBuffer(outsize);
	let out = new Uint8Array(ab);
	let n;
	let l = buf.length + 3 >> 2;
	for (n = 0; n < l; n++) {
		let index0 = decodings[buf[n * 4]];
		let index1 = n * 4 + 1 < buf.length ? decodings[buf[n * 4 + 1]] : -1;
		let index2 = index1 >= 0 && n * 4 + 2 < buf.length ? decodings[buf[n * 4 + 2]] : -1;
		let index3 = index2 >= 0 && n * 4 + 3 < buf.length ? decodings[buf[n * 4 + 3]] : -1;
		if (index1 >= 0) out[n * 3 + 0] = index0 << 2 | index1 >> 4;
		if (index2 >= 0) out[n * 3 + 1] = index1 << 4 | index2 >> 2 & 15;
		if (index3 >= 0) out[n * 3 + 2] = index2 << 6 | index3 & 63;
	}
	return ab;
}
/**
* @param {unknown} object 
* @param {(this: unknown, key: string, value: unknown)} [replacer] 
* @param {string | number} [space] 
* @returns {string}
*/
JSOX.stringify = function(object, replacer, space) {
	return JSOX.stringifier().stringify(object, replacer, space);
};
[[
	0,
	256,
	[
		16767487,
		16739071,
		130048,
		3670016,
		0,
		16777208,
		16777215,
		8388607
	]
]].map((row) => {
	return {
		firstChar: row[0],
		lastChar: row[1],
		bits: row[2]
	};
});
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/modules/UIState.ts
var mapEntriesFrom = (source) => {
	if (!source) return [];
	if (source instanceof Map) return Array.from(source.entries());
	if (Array.isArray(source)) return source.map((value, index) => {
		if (Array.isArray(value) && value.length === 2) return value;
		return [index, value];
	});
	if (source instanceof Set) return Array.from(source.values()).map((value, index) => [index, value]);
	if (typeof source === "object") return Object.entries(source);
	return [];
};
var ownProp = Object.prototype.hasOwnProperty;
var isPlainObject$1 = (value) => {
	if (!value || typeof value !== "object") return false;
	if (Array.isArray(value)) return false;
	return !(value instanceof Map) && !(value instanceof Set);
};
var identityOf = (value, fallback) => {
	if (value && typeof value === "object") {
		if ("id" in value && value.id != null) return value.id;
		if ("key" in value && value.key != null) return value.key;
	}
	return fallback;
};
var resolveEntryKey = (entryKey, value, fallback) => {
	if (entryKey != null) return entryKey;
	const identity = identityOf(value);
	if (identity != null) return identity;
	return fallback;
};
var mergePlainObject = (target, source) => {
	for (const key of Object.keys(source)) {
		const nextValue = source[key];
		const currentValue = target[key];
		if (isPlainObject$1(currentValue) && isPlainObject$1(nextValue)) {
			mergePlainObject(currentValue, nextValue);
			continue;
		}
		const merged = mergeValue(currentValue, nextValue);
		if (target[key] !== merged) target[key] = merged;
	}
	return target;
};
var mergeValue = (target, source) => {
	if (target === source) return target;
	const sourceIsObject = source && typeof source === "object";
	if (target instanceof Map && sourceIsObject) {
		reloadInto(target, source);
		return target;
	}
	if (target instanceof Set && sourceIsObject) {
		reloadInto(target, source);
		return target;
	}
	if (Array.isArray(target) && sourceIsObject) {
		reloadInto(target, source);
		return target;
	}
	if (isPlainObject$1(target) && isPlainObject$1(source)) {
		mergePlainObject(target, source);
		return target;
	}
	return source;
};
var reloadInto = (items, map) => {
	if (!items || !map) return items;
	const entries = mapEntriesFrom(map);
	if (!entries.length) return items;
	if (items instanceof Set) {
		const existingByKey = /* @__PURE__ */ new Map();
		for (const value of items.values()) {
			const key = identityOf(value);
			if (key != null) existingByKey.set(key, value);
		}
		const usedKeys = /* @__PURE__ */ new Set();
		for (const [entryKey, incoming] of entries) {
			const key = resolveEntryKey(entryKey, incoming);
			if (key == null) {
				if (!items.has(incoming)) items.add(incoming);
				continue;
			}
			const hasCurrent = existingByKey.has(key);
			const current = hasCurrent ? existingByKey.get(key) : void 0;
			if (hasCurrent) {
				const merged = mergeValue(current, incoming);
				if (merged !== current) {
					items.delete(current);
					items.add(merged);
					existingByKey.set(key, merged);
				}
			} else {
				items.add(incoming);
				existingByKey.set(key, incoming);
			}
			usedKeys.add(key);
		}
		if (usedKeys.size) for (const value of Array.from(items.values())) {
			const key = identityOf(value);
			if (key != null && !usedKeys.has(key)) items.delete(value);
		}
		return items;
	}
	if (items instanceof Map) {
		const nextMap = new Map(entries);
		for (const key of Array.from(items.keys())) if (!nextMap.has(key)) items.delete(key);
		for (const [key, incoming] of nextMap.entries()) if (items.has(key)) {
			const current = items.get(key);
			const merged = mergeValue(current, incoming);
			if (merged !== current) items.set(key, merged);
		} else items.set(key, incoming);
		return items;
	}
	if (Array.isArray(items)) {
		const availableIndexes = /* @__PURE__ */ new Set();
		const existingByKey = /* @__PURE__ */ new Map();
		const existingByObject = /* @__PURE__ */ new WeakMap();
		items.forEach((value, index) => {
			availableIndexes.add(index);
			const key = identityOf(value, index);
			if (key != null && !existingByKey.has(key)) existingByKey.set(key, index);
			if (value && typeof value === "object") existingByObject.set(value, index);
		});
		const takeIndex = (index) => {
			if (index == null) return void 0;
			if (!availableIndexes.has(index)) return void 0;
			availableIndexes.delete(index);
			return index;
		};
		const takeNextAvailable = () => {
			const iterator = availableIndexes.values().next();
			if (iterator.done) return void 0;
			const index = iterator.value;
			availableIndexes.delete(index);
			return index;
		};
		let writeIndex = 0;
		let fallbackIndex = 0;
		for (const [entryKey, incoming] of entries) {
			const key = resolveEntryKey(entryKey, incoming, fallbackIndex++);
			let claimedIndex = takeIndex(key != null ? existingByKey.get(key) : void 0);
			if (claimedIndex == null && incoming && typeof incoming === "object") claimedIndex = takeIndex(existingByObject.get(incoming));
			if (claimedIndex == null) claimedIndex = takeNextAvailable();
			const current = claimedIndex != null ? items[claimedIndex] : void 0;
			const merged = current !== void 0 ? mergeValue(current, incoming) : incoming;
			if (writeIndex < items.length) {
				if (items[writeIndex] !== merged) items[writeIndex] = merged;
			} else items.push(merged);
			writeIndex++;
		}
		while (items.length > writeIndex) items.pop();
		return items;
	}
	if (typeof items === "object") {
		const nextKeys = new Set(entries.map(([key]) => String(key)));
		for (const prop of Object.keys(items)) if (!nextKeys.has(prop)) delete items[prop];
		for (const [entryKey, incoming] of entries) {
			const prop = String(entryKey);
			if (ownProp.call(items, prop)) {
				const current = items[prop];
				const merged = mergeValue(current, incoming);
				if (merged !== current) items[prop] = merged;
			} else items[prop] = incoming;
		}
		return items;
	}
	return items;
};
var mergeByKey = (items, key = "id") => {
	if (items && (items instanceof Set || Array.isArray(items))) {
		const entries = Array.from(items?.values?.() || []).map((I) => [I?.[key], I]).filter((I) => I?.[0] != null);
		return reloadInto(items, new Map(entries));
	}
	return items;
};
var hasChromeStorage = () => typeof chrome !== "undefined" && chrome?.storage?.local;
/**
* WHY: Vite symlink graphs can load lur.e twice. A module-local Map would leave
* the second copy's saveUIState() looking at an empty registry while the live
* state (and real saver) live in the first copy — silent no-op persists.
*/
var UI_STATE_SAVE_BOOT = "__CWSP_UI_STATE_SAVE_BY_KEY_V1__";
var uiStateSaveByKey = () => {
	const g = globalThis;
	if (!(g[UI_STATE_SAVE_BOOT] instanceof Map)) g[UI_STATE_SAVE_BOOT] = /* @__PURE__ */ new Map();
	return g[UI_STATE_SAVE_BOOT];
};
/** Call the registered saver for a makeUIState storage key (preferred over `(state).$save`). */
var saveUIState = (storageKey, ev) => {
	const save = uiStateSaveByKey().get(storageKey);
	if (typeof save === "function") save(ev);
};
var makeUIState = (storageKey, initialCb, unpackCb, packCb = (items) => safe(items), key = "id", saveInterval = 6e3) => {
	let state = null;
	state = mergeByKey(initialCb?.() || {}, key);
	let hydrated = !hasChromeStorage();
	if (hasChromeStorage()) chrome.storage.local.get([storageKey], (result) => {
		try {
			if (result[storageKey]) {
				const unpacked = unpackCb(JSOX.parse(result?.[storageKey] || "{}"));
				reloadInto(state, unpacked);
				mergeByKey(state, key);
			}
		} finally {
			hydrated = true;
		}
	});
	else if (typeof localStorage !== "undefined") {
		if (localStorage.getItem(storageKey)) {
			const unpacked = unpackCb(JSOX.parse(localStorage.getItem(storageKey) || "{}"));
			reloadInto(state, unpacked);
			mergeByKey(state, key);
		} else localStorage.setItem(storageKey, JSOX.stringify(packCb(state)));
		hydrated = true;
	}
	let lastPackedEcho = "";
	const saveInStorage = (ev) => {
		if (!hydrated) return;
		const packed = JSOX.stringify(packCb(mergeByKey(state, key)));
		lastPackedEcho = packed;
		if (hasChromeStorage()) chrome.storage.local.set({ [storageKey]: packed });
		else if (typeof localStorage !== "undefined") localStorage.setItem(storageKey, packed);
	};
	uiStateSaveByKey().set(storageKey, saveInStorage);
	setIdleInterval$1(saveInStorage, saveInterval);
	if (typeof window !== "undefined" && typeof document !== "undefined") {
		const listening = [
			addEvent(document, "visibilitychange", (ev) => {
				if (document.visibilityState === "hidden") saveInStorage(ev);
			}),
			addEvent(window, "beforeunload", (ev) => saveInStorage(ev)),
			addEvent(window, "pagehide", (ev) => saveInStorage(ev)),
			addEvent(window, "storage", (ev) => {
				if (ev.storageArea == localStorage && ev.key == storageKey) reloadInto(state, unpackCb(JSOX.parse(ev?.newValue || JSOX.stringify(packCb(mergeByKey(state, key))))));
			})
		];
		addToCallChain(state, Symbol.dispose, () => listening.forEach((ub) => ub?.()));
	}
	if (hasChromeStorage()) {
		const listener = (changes, area) => {
			if (area === "local" && changes[storageKey]) {
				const newValue = changes[storageKey].newValue;
				if (!newValue || newValue === lastPackedEcho) return;
				lastPackedEcho = typeof newValue === "string" ? newValue : JSOX.stringify(newValue);
				reloadInto(state, unpackCb(typeof newValue === "string" ? JSOX.parse(newValue) : newValue));
			}
		};
		chrome.storage.onChanged.addListener(listener);
	}
	if (state && typeof state === "object") try {
		Object.defineProperty(state, "$save", {
			value: saveInStorage,
			configurable: true,
			enumerable: false,
			writable: true
		});
	} catch (e) {
		state.$save = saveInStorage;
	}
	return state;
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/modules/VoiceInput.ts
var VoiceInputManager = class {
	recognition = null;
	isListening = false;
	options;
	constructor(options = {}) {
		this.options = {
			language: "en-US",
			continuous: false,
			interimResults: false,
			maxAlternatives: 1,
			...options
		};
		this.initializeRecognition();
	}
	/**
	* Initialize speech recognition if supported
	*/
	initializeRecognition() {
		const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
		if (!SpeechRecognition) {
			console.warn("Speech recognition not supported in this browser");
			return;
		}
		this.recognition = new SpeechRecognition();
		this.recognition.lang = this.options.language;
		this.recognition.continuous = this.options.continuous;
		this.recognition.interimResults = this.options.interimResults;
		this.recognition.maxAlternatives = this.options.maxAlternatives;
	}
	/**
	* Check if speech recognition is supported
	*/
	isSupported() {
		return this.recognition !== null;
	}
	/**
	* Start listening for speech input
	*/
	startListening() {
		return new Promise((resolve, reject) => {
			if (!this.recognition) {
				reject(/* @__PURE__ */ new Error("Speech recognition not supported"));
				return;
			}
			if (this.isListening) {
				reject(/* @__PURE__ */ new Error("Already listening"));
				return;
			}
			let done = false;
			const finish = (value) => {
				if (done) return;
				done = true;
				this.isListening = false;
				try {
					this.recognition.stop();
				} catch {}
				if (value) resolve(value);
				else reject(/* @__PURE__ */ new Error("No speech detected"));
			};
			this.recognition.onresult = (e) => {
				const text = String(e?.results?.[0]?.[0]?.transcript || "").trim();
				finish(text || null);
			};
			this.recognition.onerror = () => finish(null);
			this.recognition.onend = () => finish(null);
			try {
				this.isListening = true;
				this.recognition.start();
			} catch (error) {
				this.isListening = false;
				reject(error);
			}
		});
	}
	/**
	* Stop listening
	*/
	stopListening() {
		if (this.recognition && this.isListening) {
			try {
				this.recognition.stop();
			} catch {}
			this.isListening = false;
		}
	}
	/**
	* Check if currently listening
	*/
	getIsListening() {
		return this.isListening;
	}
	/**
	* Set recognition language
	*/
	setLanguage(language) {
		this.options.language = language;
		if (this.recognition) this.recognition.lang = language;
	}
	/**
	* Get available languages (limited support in browsers)
	*/
	getAvailableLanguages() {
		return [
			"en-US",
			"en-GB",
			"en-AU",
			"en-CA",
			"en-IN",
			"en-IE",
			"es-ES",
			"es-US",
			"es-MX",
			"es-AR",
			"es-CO",
			"es-CL",
			"fr-FR",
			"fr-CA",
			"de-DE",
			"it-IT",
			"pt-BR",
			"pt-PT",
			"ru-RU",
			"ja-JP",
			"ko-KR",
			"zh-CN",
			"zh-TW",
			"ar-SA",
			"hi-IN",
			"nl-NL",
			"sv-SE",
			"no-NO",
			"da-DK",
			"fi-FI"
		];
	}
	/**
	* Clean up resources
	*/
	destroy() {
		this.stopListening();
		this.recognition = null;
	}
};
/**
* Get speech prompt with timeout
*/
async function getSpeechPrompt(options = {}) {
	const { timeout = 1e4, ...voiceOptions } = options;
	const voiceManager = new VoiceInputManager(voiceOptions);
	if (!voiceManager.isSupported()) {
		console.warn("Speech recognition not supported");
		return null;
	}
	try {
		const speechPromise = voiceManager.startListening();
		const timeoutPromise = new Promise((_, reject) => {
			setTimeout(() => {
				voiceManager.stopListening();
				reject(/* @__PURE__ */ new Error("Speech recognition timeout"));
			}, timeout);
		});
		return await Promise.race([speechPromise, timeoutPromise]);
	} catch (error) {
		console.warn("Speech recognition failed:", error);
		return null;
	} finally {
		voiceManager.destroy();
	}
}
/**
* Check if speech recognition is available
*/
function isSpeechRecognitionAvailable() {
	return !!window.SpeechRecognition || !!window.webkitSpeechRecognition;
}
/**
* Get user media permission for microphone (if needed)
*/
async function requestMicrophonePermission() {
	try {
		(await navigator.mediaDevices.getUserMedia({ audio: true })).getTracks().forEach((track) => track.stop());
		return true;
	} catch {
		return false;
	}
}
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/modules/HookEvent.ts
var allowedElements = "ui-tabbed-box";
var implementPasteEvent = (container, handler) => {
	(container || globalThis)?.addEventListener("paste", (event) => {
		if (isInFocus(event?.target, allowedElements)) {
			const dataTransfer = event.clipboardData;
			const items = dataTransfer?.items;
			const files = dataTransfer?.files ?? [];
			if (items || files && files?.length > 0) {
				event.preventDefault();
				event.stopPropagation();
			}
			if (dataTransfer) handler(dataTransfer);
			else navigator.clipboard?.read()?.then?.((items) => {
				if (items && items.length > 0) handler({
					items,
					files
				});
			}).catch((error) => {
				console.error("Failed to read clipboard:", error);
				return null;
			});
		}
	});
};
var implementDropEvent = (container, handler) => {
	container.addEventListener("dragover", (event) => {
		if (isInFocus(event?.target, allowedElements)) {
			event.preventDefault();
			event.stopPropagation();
		}
	});
	container.addEventListener("drop", (event) => {
		if (isInFocus(event?.target, allowedElements)) {
			const dataTransfer = event.dataTransfer;
			const files = dataTransfer?.files ?? [];
			if (dataTransfer?.items || files && files?.length > 0) {
				event.preventDefault();
				event.stopPropagation();
			}
			handler(dataTransfer);
		}
	});
};
//#endregion
//#region ../../modules/projects/lur.e/src/design/anchor/PointerAnchor.ts
/** INVARIANT: use interactive/controllers (not legacy md-2025 path). */
var pointerAnchorRef = (root = typeof document != "undefined" ? document?.documentElement : null) => {
	if (!root) return () => {};
	const coordinate = [numberRef(0), numberRef(0)];
	coordinate.push(WRef(handleByPointer((ev) => {
		coordinate[0].value = ev.clientX;
		coordinate[1].value = ev.clientY;
	}, root)));
	if (coordinate[2]?.deref?.() ?? coordinate[2]) addToCallChain(coordinate, Symbol.dispose, coordinate[2]?.deref?.() ?? coordinate[2]);
	return coordinate;
};
var visibleBySelectorRef = (selector) => {
	const visRef = booleanRef(false), usub = handleByPointer((ev) => {
		const target = typeof document != "undefined" ? document.elementFromPoint(ev.clientX, ev.clientY) : null;
		visRef.value = target?.matches?.(selector) ?? false;
	});
	if (usub) addToCallChain(visRef, Symbol.dispose, usub);
	return visRef;
};
var showAttributeRef = (attribute = "data-tooltip") => {
	const valRef = stringRef(""), usub = handleByPointer((ev) => {
		const target = typeof document != "undefined" ? document.elementFromPoint(ev.clientX, ev.clientY) : null;
		valRef.value = target?.getAttribute?.(attribute)?.(`[${attribute}]`) ?? "";
	});
	if (usub) addToCallChain(valRef, Symbol.dispose, usub);
	return valRef;
};
//#endregion
//#region ../../modules/projects/lur.e/src/design/anchor/CSSTimeline.ts
var $extract = Symbol.for("__extract");
var $element = Symbol.for("__element");
var timelineHandler = {
	[Symbol.for("__extract")](target) {
		return target.source;
	},
	get(target, prop, receiver) {
		if (prop in target) return Reflect.get(target, prop, receiver ?? target);
		if (prop == "value") return (target?.currentTime ?? 0) / (target?.duration ?? 1);
		if (prop == $affected && (target instanceof ScrollTimeline || target instanceof ViewTimeline)) return (cb, prop) => {
			const $cb = () => {
				queueMicrotask(() => cb((target?.currentTime ?? 0) / (target?.duration ?? 1), "value"));
			};
			if (target instanceof ScrollTimeline) {
				target?.source?.addEventListener?.("scroll", $cb);
				const $observer = new ResizeObserver((entries) => entries.forEach((entry) => $cb?.()));
				$observer.observe(target?.source, { box: "content-box" });
				target?.source?.addEventListener?.("scroll", $cb);
				return () => {
					$observer.disconnect();
					target?.source?.removeEventListener?.("scroll", $cb);
				};
			} else if (target instanceof ViewTimeline) {
				const $observer = new IntersectionObserver((entries) => entries.forEach((entry) => $cb?.()), target?.observerOptions ?? {
					root: target?.source?.offsetParent ?? document.documentElement,
					rootMargin: "0px",
					threshold: [
						0,
						.1,
						.2,
						.3,
						.4,
						.5,
						.6,
						.7,
						.8,
						.9,
						1
					]
				});
				$observer.observe(target?.source);
				target?.source?.addEventListener?.("scroll", $cb);
				return () => {
					$observer.disconnect();
					target?.source?.removeEventListener?.("scroll", $cb);
				};
			}
		};
		if (prop == $extract) return target;
		if (prop == $element || prop == "element") return target.source?.element ?? target.source;
		return Reflect.get(target.source, prop, receiver ?? target.source);
	},
	set(target, prop, value, receiver) {
		if (prop in target) Reflect.set(target, prop, value, receiver ?? target);
		else if (target.source) Reflect.set(target.source, prop, value, receiver ?? target.source);
		return true;
	},
	has(target, prop) {
		return Reflect.has(target, prop) || Reflect.has(target.source, prop);
	},
	deleteProperty(target, prop) {
		if (prop in target) return Reflect.deleteProperty(target, prop);
		else if (target.source) return Reflect.deleteProperty(target.source, prop);
		return true;
	},
	ownKeys(target) {
		return [...Reflect.ownKeys(target), ...Reflect.ownKeys(target.source)];
	},
	getOwnPropertyDescriptor(target, prop) {
		return {
			...Reflect.getOwnPropertyDescriptor(target, prop),
			...Reflect.getOwnPropertyDescriptor(target.source, prop)
		};
	},
	getPrototypeOf(target) {
		return Reflect.getPrototypeOf(target);
	},
	setPrototypeOf(target, proto) {
		return Reflect.setPrototypeOf(target, proto);
	},
	isExtensible(target) {
		return Reflect.isExtensible(target);
	},
	preventExtensions(target) {
		return Reflect.preventExtensions(target);
	}
};
var $makeScrollTimeline = (source, axis) => {
	return new Proxy(new ScrollTimeline({
		source: source?.element ?? source,
		axis
	}), timelineHandler);
};
var EnhancedScrollTimeline = class {
	source;
	axis;
	timeline;
	anchor;
	constructor(sourceOrOptions, $options) {
		let options = !(sourceOrOptions instanceof HTMLElement) ? sourceOrOptions : {};
		if (sourceOrOptions instanceof HTMLElement) {
			this.source = sourceOrOptions;
			this.axis = typeof $options == "string" ? $options : "inline";
		} else {
			this.source = options?.source;
			this.axis = options?.axis ?? "inline";
			this.anchor = options?.anchorElement;
		}
		this.timeline = $makeScrollTimeline(this.source, this.axis);
		if (!(typeof $options == "string") && $options?.useAnchor && !this.anchor) this.anchor = makeAnchorElement(this.source);
	}
	get [$extract]() {
		return this.timeline?.source ?? this.source;
	}
	get [$affected]() {
		return (cb, prop) => {
			const $cb = () => {
				queueMicrotask(() => cb((this.timeline?.currentTime ?? 0) / (this.timeline?.duration ?? 1), "value"));
			};
			this.timeline?.addEventListener?.("scroll", $cb);
			return () => this.timeline?.removeEventListener?.("scroll", $cb);
		};
	}
	get element() {
		const $src = this.timeline?.source ?? this.source;
		return $src?.element ?? $src;
	}
	get value() {
		return this.progress;
	}
	get currentTime() {
		return this.timeline?.currentTime ?? 0;
	}
	get duration() {
		return this.timeline?.duration ?? 1;
	}
	get progress() {
		try {
			const maxScroll = this.source[["scrollWidth", "scrollHeight"][this.axis === "inline" ? 0 : 1]] - this.source[["clientWidth", "clientHeight"][this.axis === "inline" ? 0 : 1]];
			const currentScroll = this.source[["scrollLeft", "scrollTop"][this.axis === "inline" ? 0 : 1]];
			return maxScroll > 0 ? currentScroll / maxScroll : 0;
		} catch {
			return 0;
		}
	}
	scrollTo(progress, smooth = true) {
		const maxScroll = this.source[["scrollWidth", "scrollHeight"][this.axis === "inline" ? 0 : 1]] - this.source[["clientWidth", "clientHeight"][this.axis === "inline" ? 0 : 1]];
		const scrollPos = Math.max(0, Math.min(1, progress)) * maxScroll;
		this.source.scrollTo({
			[["left", "top"][this.axis === "inline" ? 0 : 1]]: scrollPos,
			behavior: smooth ? "smooth" : "instant"
		});
	}
	scrollBy(delta, smooth = true) {
		this.source.scrollBy({
			[["left", "top"][this.axis === "inline" ? 0 : 1]]: delta,
			behavior: smooth ? "smooth" : "instant"
		});
	}
	getScrollInfo() {
		const axisIdx = this.axis === "inline" ? 0 : 1;
		return {
			scrollSize: this.source[["scrollWidth", "scrollHeight"][axisIdx]],
			clientSize: this.source[["clientWidth", "clientHeight"][axisIdx]],
			scrollPos: this.source[["scrollLeft", "scrollTop"][axisIdx]],
			maxScroll: this.source[["scrollWidth", "scrollHeight"][axisIdx]] - this.source[["clientWidth", "clientHeight"][axisIdx]],
			progress: this.progress
		};
	}
};
var makeScrollTimeline = (source, axis) => {
	if (typeof ScrollTimeline != "undefined") return new EnhancedScrollTimeline({
		source: source?.element ?? source,
		axis
	});
	const target = toRef$1(source);
	const scroll = scrollRef(source, ["inline", "block"][axis]);
	const content = computed(sizeRef(source, ["inline", "block"][axis], "content-box"), (v) => v + getPadding(source, ["inline", "block"][axis]));
	const percent = computed(scroll, (vl) => (vl || 0) / (deref$1(target)?.[["scrollWidth", "scrollHeight"][axis]] - content?.value || 1));
	affected(content, (vl) => (scroll?.value || 0) / (deref$1(target)?.[["scrollWidth", "scrollHeight"][axis]] - vl || 1));
	return percent;
};
//#endregion
//#region ../../modules/projects/lur.e/src/design/anchor/ContainerQuery.ts
var ContainerQueryManager = class {
	container;
	queries;
	activeQueries = /* @__PURE__ */ new Set();
	queryStates = /* @__PURE__ */ new Map();
	constructor(options = {}) {
		this.container = options.container || document.documentElement;
		this.queries = /* @__PURE__ */ new Map();
		const defaultQueries = {
			"mobile": "(max-width: 767px)",
			"tablet": "(min-width: 768px) and (max-width: 1023px)",
			"desktop": "(min-width: 1024px)",
			"touch": "(hover: none) and (pointer: coarse)",
			"hover": "(hover: hover) and (pointer: fine)",
			"dark": "(prefers-color-scheme: dark)",
			"light": "(prefers-color-scheme: light)",
			"reduced-motion": "(prefers-reduced-motion: reduce)",
			...options.queries || {}
		};
		for (const [name, query] of Object.entries(defaultQueries)) this.addQuery(name, query);
		if (options.defaultQuery && this.queries.has(options.defaultQuery)) this.activeQueries.add(options.defaultQuery);
	}
	addQuery(name, query) {
		const mediaQuery = globalThis.matchMedia(query);
		this.queries.set(name, mediaQuery);
		this.queryStates.set(name, numberRef(mediaQuery.matches ? 1 : 0));
		mediaQuery.addEventListener("change", (e) => {
			const stateRef = this.queryStates.get(name);
			if (stateRef) stateRef.value = e.matches ? 1 : 0;
			if (e.matches) this.activeQueries.add(name);
			else this.activeQueries.delete(name);
		});
		if (mediaQuery.matches) this.activeQueries.add(name);
	}
	removeQuery(name) {
		if (this.queries.get(name)) {
			this.queries.delete(name);
			this.queryStates.delete(name);
			this.activeQueries.delete(name);
		}
	}
	matches(name) {
		return this.activeQueries.has(name);
	}
	getState(name) {
		return this.queryStates.get(name);
	}
	getActiveQueries() {
		return Array.from(this.activeQueries);
	}
	onQueryChange(name, callback) {
		const stateRef = this.queryStates.get(name);
		if (stateRef) return affected(stateRef, (value) => callback(value === 1));
		return () => {};
	}
	destroy() {
		this.queries.clear();
		this.queryStates.clear();
		this.activeQueries.clear();
	}
};
var ContainerSizeTracker = class {
	container;
	sizeRef = numberRef(0);
	widthRef = numberRef(0);
	heightRef = numberRef(0);
	aspectRatioRef = numberRef(0);
	resizeObserver;
	constructor(container) {
		this.container = container;
		this.updateSize();
		if (typeof ResizeObserver !== "undefined") {
			this.resizeObserver = new ResizeObserver(() => {
				this.updateSize();
			});
			this.resizeObserver.observe(container);
		} else addEvent(window, "resize", () => this.updateSize());
	}
	updateSize() {
		const rect = this.container.getBoundingClientRect();
		this.widthRef.value = rect.width;
		this.heightRef.value = rect.height;
		this.sizeRef.value = Math.sqrt(rect.width * rect.height);
		this.aspectRatioRef.value = rect.width / rect.height;
	}
	get width() {
		return this.widthRef;
	}
	get height() {
		return this.heightRef;
	}
	get size() {
		return this.sizeRef;
	}
	get aspectRatio() {
		return this.aspectRatioRef;
	}
	destroy() {
		this.resizeObserver?.disconnect();
	}
};
function createResponsiveScrollbarConfig(container) {
	const sizeTracker = new ContainerSizeTracker(container);
	const queryManager = new ContainerQueryManager({ container });
	const configs = {
		mobile: {
			thickness: 12,
			showOnHover: false,
			autoHide: false,
			fadeDelay: 0
		},
		tablet: {
			thickness: 10,
			showOnHover: true,
			autoHide: true,
			fadeDelay: 1e3
		},
		desktop: {
			thickness: 8,
			showOnHover: true,
			autoHide: true,
			fadeDelay: 1500
		}
	};
	const currentConfig = numberRef(0);
	const updateConfig = () => {
		if (queryManager.matches("desktop")) currentConfig.value = 2;
		else if (queryManager.matches("tablet")) currentConfig.value = 1;
		else currentConfig.value = 0;
	};
	queryManager.onQueryChange("desktop", updateConfig);
	queryManager.onQueryChange("tablet", updateConfig);
	queryManager.onQueryChange("mobile", updateConfig);
	updateConfig();
	return {
		sizeTracker,
		queryManager,
		configs,
		currentConfig,
		getCurrentConfig: () => {
			const index = currentConfig.value;
			return configs[Object.keys(configs)[index]];
		},
		destroy: () => {
			sizeTracker.destroy();
			queryManager.destroy();
		}
	};
}
//#endregion
//#region ../../modules/projects/lur.e/src/design/color/ScrollbarTheme.ts
var scrollbarThemes = {
	light: {
		trackColor: "rgba(0, 0, 0, 0.1)",
		thumbColor: "rgba(0, 0, 0, 0.3)",
		thumbHoverColor: "rgba(0, 0, 0, 0.5)",
		thumbActiveColor: "rgba(0, 0, 0, 0.7)",
		thickness: 8,
		borderRadius: 4,
		minThumbSize: 30,
		showOnHover: true,
		autoHide: true,
		fadeDelay: 1500,
		smoothScroll: true,
		transitionDuration: .2,
		transitionEasing: "ease-out",
		focusOutlineColor: "#007acc",
		focusOutlineWidth: 2
	},
	dark: {
		trackColor: "rgba(255, 255, 255, 0.1)",
		thumbColor: "rgba(255, 255, 255, 0.3)",
		thumbHoverColor: "rgba(255, 255, 255, 0.5)",
		thumbActiveColor: "rgba(255, 255, 255, 0.7)",
		thickness: 8,
		borderRadius: 4,
		minThumbSize: 30,
		showOnHover: true,
		autoHide: true,
		fadeDelay: 1500,
		smoothScroll: true,
		transitionDuration: .2,
		transitionEasing: "ease-out",
		focusOutlineColor: "#00aacc",
		focusOutlineWidth: 2
	},
	minimal: {
		trackColor: "transparent",
		thumbColor: "rgba(0, 0, 0, 0.2)",
		thumbHoverColor: "rgba(0, 0, 0, 0.4)",
		thumbActiveColor: "rgba(0, 0, 0, 0.6)",
		thickness: 6,
		borderRadius: 3,
		minThumbSize: 20,
		showOnHover: true,
		autoHide: true,
		fadeDelay: 1e3,
		smoothScroll: true,
		transitionDuration: .15,
		transitionEasing: "ease-out",
		focusOutlineColor: "#666",
		focusOutlineWidth: 1
	},
	rounded: {
		trackColor: "rgba(0, 0, 0, 0.05)",
		thumbColor: "rgba(0, 0, 0, 0.3)",
		thumbHoverColor: "rgba(0, 0, 0, 0.5)",
		thumbActiveColor: "rgba(0, 0, 0, 0.7)",
		thickness: 10,
		borderRadius: 5,
		minThumbSize: 40,
		showOnHover: true,
		autoHide: true,
		fadeDelay: 2e3,
		smoothScroll: true,
		transitionDuration: .3,
		transitionEasing: "ease-in-out",
		focusOutlineColor: "#007acc",
		focusOutlineWidth: 2
	},
	colorful: {
		trackColor: "rgba(255, 255, 255, 0.1)",
		thumbColor: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
		thumbHoverColor: "linear-gradient(45deg, #ff5252, #26d0ce)",
		thumbActiveColor: "linear-gradient(45deg, #ff3838, #00b8d4)",
		thickness: 12,
		borderRadius: 6,
		minThumbSize: 50,
		showOnHover: true,
		autoHide: false,
		fadeDelay: 0,
		smoothScroll: true,
		transitionDuration: .4,
		transitionEasing: "cubic-bezier(0.4, 0, 0.2, 1)",
		focusOutlineColor: "#ff6b6b",
		focusOutlineWidth: 3
	}
};
var ScrollbarThemeManager = class {
	currentTheme;
	scrollbarElement;
	styleElement;
	constructor(scrollbarElement, initialTheme = scrollbarThemes.light) {
		this.scrollbarElement = scrollbarElement;
		this.currentTheme = { ...initialTheme };
		this.applyTheme();
	}
	setTheme(theme) {
		if (typeof theme === "string") {
			const presetTheme = scrollbarThemes[theme];
			if (presetTheme) this.currentTheme = { ...presetTheme };
			else {
				console.warn(`Scrollbar theme "${theme}" not found. Using light theme as fallback.`);
				this.currentTheme = { ...scrollbarThemes.light };
			}
		} else this.currentTheme = { ...theme };
		this.applyTheme();
	}
	updateTheme(updates) {
		this.currentTheme = {
			...this.currentTheme,
			...updates
		};
		this.applyTheme();
	}
	getCurrentTheme() {
		return { ...this.currentTheme };
	}
	applyTheme() {
		const theme = this.currentTheme;
		const cssVars = {
			"--scrollbar-thickness": `${theme.thickness}px`,
			"--scrollbar-border-radius": `${theme.borderRadius}px`,
			"--scrollbar-min-thumb-size": `${theme.minThumbSize}px`,
			"--scrollbar-track-color": theme.trackColor,
			"--scrollbar-thumb-color": theme.thumbColor,
			"--scrollbar-thumb-hover-color": theme.thumbHoverColor,
			"--scrollbar-thumb-active-color": theme.thumbActiveColor,
			"--scrollbar-transition-duration": `${theme.transitionDuration}s`,
			"--scrollbar-transition-easing": theme.transitionEasing,
			"--scrollbar-focus-outline-color": theme.focusOutlineColor,
			"--scrollbar-focus-outline-width": `${theme.focusOutlineWidth}px`
		};
		Object.entries(cssVars).forEach(([prop, value]) => {
			this.scrollbarElement.style.setProperty(prop, value || "");
		});
		this.scrollbarElement.setAttribute("data-scrollbar-autohide", theme.autoHide ? "true" : "false");
		this.scrollbarElement.setAttribute("data-scrollbar-hover", theme.showOnHover ? "true" : "false");
		this.scrollbarElement.setAttribute("data-scrollbar-smooth", theme.smoothScroll ? "true" : "false");
		if (theme.customCSS) {
			this.ensureStyleElement();
			if (this.styleElement) this.styleElement.textContent = theme.customCSS;
		} else if (this.styleElement) this.styleElement.textContent = "";
	}
	ensureStyleElement() {
		if (!this.styleElement) {
			this.styleElement = document.createElement("style");
			this.styleElement.setAttribute("data-scrollbar-theme", "custom");
			document.head.appendChild(this.styleElement);
		}
	}
	static light() {
		return scrollbarThemes.light;
	}
	static dark() {
		return scrollbarThemes.dark;
	}
	static minimal() {
		return scrollbarThemes.minimal;
	}
	static rounded() {
		return scrollbarThemes.rounded;
	}
	static colorful() {
		return scrollbarThemes.colorful;
	}
	destroy() {
		if (this.styleElement && this.styleElement.parentNode) this.styleElement.parentNode.removeChild(this.styleElement);
	}
};
function generateScrollbarCSS(selector, theme) {
	return `
        ${selector} {
            --scrollbar-thickness: ${theme.thickness}px;
            --scrollbar-border-radius: ${theme.borderRadius}px;
            --scrollbar-min-thumb-size: ${theme.minThumbSize}px;
            --scrollbar-track-color: ${theme.trackColor};
            --scrollbar-thumb-color: ${theme.thumbColor};
            --scrollbar-thumb-hover-color: ${theme.thumbHoverColor};
            --scrollbar-thumb-active-color: ${theme.thumbActiveColor};
            --scrollbar-transition-duration: ${theme.transitionDuration}s;
            --scrollbar-transition-easing: ${theme.transitionEasing};
            --scrollbar-focus-outline-color: ${theme.focusOutlineColor};
            --scrollbar-focus-outline-width: ${theme.focusOutlineWidth}px;
        }

        ${selector}::-webkit-scrollbar {
            width: var(--scrollbar-thickness);
            height: var(--scrollbar-thickness);
        }

        ${selector}::-webkit-scrollbar-track {
            background: var(--scrollbar-track-color);
            border-radius: var(--scrollbar-border-radius);
        }

        ${selector}::-webkit-scrollbar-thumb {
            background: var(--scrollbar-thumb-color);
            border-radius: var(--scrollbar-border-radius);
            transition: background-color var(--scrollbar-transition-duration) var(--scrollbar-transition-easing);
        }

        ${selector}::-webkit-scrollbar-thumb:hover {
            background: var(--scrollbar-thumb-hover-color);
        }

        ${selector}::-webkit-scrollbar-thumb:active {
            background: var(--scrollbar-thumb-active-color);
        }

        ${selector}[data-scrollbar-autohide="true"] {
            scrollbar-width: thin;
        }

        ${selector}[data-scrollbar-autohide="true"]:not(:hover)::-webkit-scrollbar {
            width: 0;
            height: 0;
        }

        ${selector}:focus {
            outline: var(--scrollbar-focus-outline-width) solid var(--scrollbar-focus-outline-color);
            outline-offset: 2px;
        }
    `;
}
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/controllers/EnhancedGestures.ts
var EnhancedGestureHandler = class {
	element;
	options;
	isActive = false;
	startTime = 0;
	startPosition = {
		x: 0,
		y: 0
	};
	currentPosition = {
		x: 0,
		y: 0
	};
	velocity = {
		x: 0,
		y: 0
	};
	lastPosition = {
		x: 0,
		y: 0
	};
	lastTime = 0;
	pointers = /* @__PURE__ */ new Map();
	initialDistance = 0;
	currentDistance = 0;
	onStart;
	onMove;
	onEnd;
	onMomentum;
	onSwipe;
	onPinch;
	momentumFrame;
	constructor(element, options = {}) {
		this.element = element;
		this.options = {
			enableMomentum: true,
			momentumDecay: .95,
			minVelocity: .01,
			maxVelocity: 4,
			enablePinch: false,
			pinchThreshold: 10,
			enableSwipe: true,
			swipeThreshold: 50,
			touchAction: "none",
			...options
		};
		this.setupEventListeners();
		this.element.style.touchAction = this.options.touchAction;
	}
	setupEventListeners() {
		const events = {
			"pointerdown": this.handlePointerDown.bind(this),
			"pointermove": this.handlePointerMove.bind(this),
			"pointerup": this.handlePointerUp.bind(this),
			"pointercancel": this.handlePointerCancel.bind(this),
			"pointerleave": this.handlePointerCancel.bind(this)
		};
		addEvents(this.element, events);
	}
	handlePointerDown(event) {
		event.preventDefault();
		this.pointers.set(event.pointerId, event);
		this.element.setPointerCapture(event.pointerId);
		if (this.pointers.size === 1) this.startGesture(event);
		else if (this.pointers.size === 2 && this.options.enablePinch) this.startPinch();
	}
	handlePointerMove(event) {
		event.preventDefault();
		this.pointers.set(event.pointerId, event);
		if (this.pointers.size === 1 && this.isActive) this.updateGesture(event);
		else if (this.pointers.size === 2 && this.options.enablePinch) this.updatePinch();
	}
	handlePointerUp(event) {
		event.preventDefault();
		this.pointers.delete(event.pointerId);
		this.element.releasePointerCapture(event.pointerId);
		if (this.pointers.size === 0 && this.isActive) this.endGesture();
	}
	handlePointerCancel(event) {
		this.pointers.delete(event.pointerId);
		this.element.releasePointerCapture(event.pointerId);
		if (this.pointers.size === 0 && this.isActive) this.cancelGesture();
	}
	startGesture(event) {
		this.isActive = true;
		this.startTime = performance.now();
		this.lastTime = this.startTime;
		this.startPosition = {
			x: event.clientX,
			y: event.clientY
		};
		this.currentPosition = { ...this.startPosition };
		this.lastPosition = { ...this.startPosition };
		this.velocity = {
			x: 0,
			y: 0
		};
		this.onStart?.({
			startPosition: this.startPosition,
			timestamp: this.startTime
		});
	}
	updateGesture(event) {
		const currentTime = performance.now();
		const deltaTime = currentTime - this.lastTime;
		this.lastPosition = { ...this.currentPosition };
		this.currentPosition = {
			x: event.clientX,
			y: event.clientY
		};
		if (deltaTime > 0) {
			this.velocity.x = (this.currentPosition.x - this.lastPosition.x) / deltaTime;
			this.velocity.y = (this.currentPosition.y - this.lastPosition.y) / deltaTime;
			this.velocity.x = Math.max(-this.options.maxVelocity, Math.min(this.options.maxVelocity, this.velocity.x));
			this.velocity.y = Math.max(-this.options.maxVelocity, Math.min(this.options.maxVelocity, this.velocity.y));
		}
		this.lastTime = currentTime;
		this.onMove?.({
			currentPosition: this.currentPosition,
			delta: {
				x: this.currentPosition.x - this.lastPosition.x,
				y: this.currentPosition.y - this.lastPosition.y
			},
			velocity: this.velocity,
			timestamp: currentTime
		});
	}
	endGesture() {
		this.isActive = false;
		const gestureDuration = performance.now() - this.startTime;
		const totalDelta = {
			x: this.currentPosition.x - this.startPosition.x,
			y: this.currentPosition.y - this.startPosition.y
		};
		if (this.options.enableSwipe && gestureDuration < 500) {
			if (Math.hypot(totalDelta.x, totalDelta.y) > this.options.swipeThreshold) {
				const angle = Math.atan2(totalDelta.y, totalDelta.x) * 180 / Math.PI;
				let direction = "";
				if (angle >= -45 && angle < 45) direction = "right";
				else if (angle >= 45 && angle < 135) direction = "down";
				else if (angle >= -135 && angle < -45) direction = "up";
				else direction = "left";
				const speed = Math.hypot(this.velocity.x, this.velocity.y);
				this.onSwipe?.(direction, speed);
			}
		}
		if (this.options.enableMomentum && Math.hypot(this.velocity.x, this.velocity.y) > this.options.minVelocity) this.startMomentum();
		this.onEnd?.({
			startPosition: this.startPosition,
			endPosition: this.currentPosition,
			totalDelta,
			velocity: this.velocity,
			duration: gestureDuration
		});
	}
	cancelGesture() {
		this.isActive = false;
		if (this.momentumFrame) {
			cancelAnimationFrame(this.momentumFrame);
			this.momentumFrame = void 0;
		}
	}
	startPinch() {
		const pointers = Array.from(this.pointers.values());
		const p1 = pointers[0];
		const p2 = pointers[1];
		this.initialDistance = Math.hypot(p2.clientX - p1.clientX, p2.clientY - p1.clientY);
	}
	updatePinch() {
		if (!this.options.enablePinch) return;
		const pointers = Array.from(this.pointers.values());
		const p1 = pointers[0];
		const p2 = pointers[1];
		this.currentDistance = Math.hypot(p2.clientX - p1.clientX, p2.clientY - p1.clientY);
		if (Math.abs(this.currentDistance - this.initialDistance) > this.options.pinchThreshold) {
			const scale = this.currentDistance / this.initialDistance;
			const center = {
				x: (p1.clientX + p2.clientX) / 2,
				y: (p1.clientY + p2.clientY) / 2
			};
			this.onPinch?.(scale, center);
		}
	}
	startMomentum() {
		let currentVelocity = { ...this.velocity };
		const animate = () => {
			currentVelocity.x *= this.options.momentumDecay;
			currentVelocity.y *= this.options.momentumDecay;
			if (Math.hypot(currentVelocity.x, currentVelocity.y) > this.options.minVelocity) {
				this.onMomentum?.(currentVelocity);
				this.momentumFrame = requestAnimationFrame(animate);
			} else this.momentumFrame = void 0;
		};
		this.momentumFrame = requestAnimationFrame(animate);
	}
	setCallbacks(callbacks) {
		Object.assign(this, callbacks);
	}
	destroy() {
		if (this.momentumFrame) cancelAnimationFrame(this.momentumFrame);
		removeEvents(this.element, [
			"pointerdown",
			"pointermove",
			"pointerup",
			"pointercancel",
			"pointerleave"
		]);
		this.pointers.clear();
	}
};
var ScrollbarGestureHandler = class extends EnhancedGestureHandler {
	scrollbar;
	content;
	axis;
	scrollPosition = 0;
	constructor(scrollbar, content, axis, options) {
		super(scrollbar, {
			enableMomentum: true,
			enableSwipe: false,
			enablePinch: false,
			...options
		});
		this.scrollbar = scrollbar;
		this.content = content;
		this.axis = axis;
		this.setCallbacks({
			onStart: this.handleGestureStart.bind(this),
			onMove: this.handleGestureMove.bind(this),
			onEnd: this.handleGestureEnd.bind(this),
			onMomentum: this.handleMomentum.bind(this)
		});
	}
	handleGestureStart(gesture) {
		this.scrollPosition = this.axis === "horizontal" ? this.content.scrollLeft : this.content.scrollTop;
	}
	handleGestureMove(gesture) {
		const scrollbarSize = this.axis === "horizontal" ? this.scrollbar.offsetWidth : this.scrollbar.offsetHeight;
		const contentSize = this.axis === "horizontal" ? this.content.scrollWidth : this.content.scrollHeight;
		const containerSize = this.axis === "horizontal" ? this.content.clientWidth : this.content.clientHeight;
		if (containerSize >= contentSize) return;
		const effectiveScrollbarSize = scrollbarSize * (containerSize / contentSize);
		const scrollDelta = (this.axis === "horizontal" ? gesture.delta.x : gesture.delta.y) / (scrollbarSize - effectiveScrollbarSize) * (contentSize - containerSize);
		const newScrollPosition = Math.max(0, Math.min(contentSize - containerSize, this.scrollPosition + scrollDelta));
		if (this.axis === "horizontal") this.content.scrollLeft = newScrollPosition;
		else this.content.scrollTop = newScrollPosition;
	}
	handleGestureEnd(gesture) {}
	handleMomentum(velocity) {
		const momentumVelocity = this.axis === "horizontal" ? velocity.x : velocity.y;
		const scrollbarSize = this.axis === "horizontal" ? this.scrollbar.offsetWidth : this.scrollbar.offsetHeight;
		const contentSize = this.axis === "horizontal" ? this.content.scrollWidth : this.content.scrollHeight;
		const containerSize = this.axis === "horizontal" ? this.content.clientWidth : this.content.clientHeight;
		if (containerSize >= contentSize) return;
		const scrollDelta = momentumVelocity / (scrollbarSize - scrollbarSize * (containerSize / contentSize)) * (contentSize - containerSize);
		if (this.axis === "horizontal") this.content.scrollBy({
			left: scrollDelta,
			behavior: "auto"
		});
		else this.content.scrollBy({
			top: scrollDelta,
			behavior: "auto"
		});
	}
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/modules/ScrollBar.ts
var axisConfig = [{
	name: "x",
	tName: "inline",
	cssScrollProperty: ["--scroll-left", "calc(var(--percent-x, 0) * max(calc(var(--scroll-size, 1) - var(--content-size, 1)), 0))"],
	cssPercentProperty: "--percent-x"
}, {
	name: "y",
	tName: "block",
	cssScrollProperty: ["--scroll-top", "calc(var(--percent-y, 0) * max(calc(var(--scroll-size, 1) - var(--content-size, 1)), 0))"],
	cssPercentProperty: "--percent-y"
}];
var CAXIS = ["clientX", "clientY"];
var asWeak$1 = (source) => {
	return source instanceof WeakRef || typeof source?.deref == "function" ? source : new WeakRef(source);
};
makeRAFCycle();
var effectProperty = {
	fill: "both",
	delay: 0,
	easing: "linear",
	rangeStart: "cover 0%",
	rangeEnd: "cover 100%",
	duration: 1
};
try {
	CSS.registerProperty({
		name: "--percent-x",
		syntax: "<number>",
		inherits: true,
		initialValue: "0"
	});
} catch (e) {}
try {
	CSS.registerProperty({
		name: "--percent-y",
		syntax: "<number>",
		inherits: true,
		initialValue: "0"
	});
} catch (e) {}
try {
	CSS.registerProperty({
		name: "--scroll-coef",
		syntax: "<number>",
		inherits: true,
		initialValue: "1"
	});
} catch (e) {}
try {
	CSS.registerProperty({
		name: "--determinant",
		syntax: "<number>",
		inherits: true,
		initialValue: "0"
	});
} catch (e) {}
try {
	CSS.registerProperty({
		name: "--scroll-size",
		syntax: "<length-percentage>",
		inherits: true,
		initialValue: "0px"
	});
} catch (e) {}
try {
	CSS.registerProperty({
		name: "--content-size",
		syntax: "<length-percentage>",
		inherits: true,
		initialValue: "0px"
	});
} catch (e) {}
try {
	CSS.registerProperty({
		name: "--clamped-size",
		syntax: "<length-percentage>",
		inherits: true,
		initialValue: "0px"
	});
} catch (e) {}
try {
	CSS.registerProperty({
		name: "--thumb-size",
		syntax: "<length-percentage>",
		inherits: true,
		initialValue: "0px"
	});
} catch (e) {}
try {
	CSS.registerProperty({
		name: "--max-offset",
		syntax: "<length-percentage>",
		inherits: true,
		initialValue: "0px"
	});
} catch (e) {}
try {
	CSS.registerProperty({
		name: "--max-size",
		syntax: "<length-percentage>",
		inherits: true,
		initialValue: "0px"
	});
} catch (e) {}
var makeInteractive = (holder, content, scrollbar, axis = 0, status = {}, inputChange, draggingState) => {
	const status_w = asWeak$1(status);
	const content_w = asWeak$1(content);
	const dragging_w = asWeak$1(draggingState);
	const moveScroll = (evc) => {
		const ev = evc;
		const status = status_w?.deref?.();
		if (self && status?.pointerId == ev.pointerId) {
			evc?.preventDefault?.();
			const cm = ev[CAXIS[axis]] || 0;
			const dm = cm - status.point || 0;
			const contentScrollSize = content?.[["scrollWidth", "scrollHeight"][axis]] - content?.[["clientWidth", "clientHeight"][axis]];
			const trackSize = scrollbar?.[["clientWidth", "clientHeight"][axis]] - handler?.[["offsetWidth", "offsetHeight"][axis] || 0];
			const DT = dm * contentScrollSize / trackSize;
			status.point = cm;
			content_w?.deref?.()?.scrollBy?.({
				[["left", "top"][axis]]: DT,
				behavior: "instant"
			});
		}
	};
	const handler = scrollbar?.querySelector?.("*") ?? scrollbar;
	const stopScroll = (evc) => {
		const ev = evc;
		const status = status_w?.deref?.();
		if (status && status?.pointerId == ev.pointerId) {
			evc?.preventDefault?.();
			status.point = ev[CAXIS[axis]] || 0;
			if (dragging_w?.deref?.()) dragging_w.deref().value = 0;
			(handler?.element ?? ev.target)?.releasePointerCapture?.(status.pointerId);
			status.pointerId = -1;
			removeEvents(handler, {
				"pointerup": stopScroll,
				"pointermove": moveScroll,
				"pointercancel": stopScroll
			});
		}
	};
	if (handler) addEvent(handler, "pointerdown", (evc) => {
		const ev = evc;
		const status = status_w?.deref?.();
		if (self && status?.pointerId < 0) {
			evc?.preventDefault?.();
			(handler?.element ?? ev.target)?.setPointerCapture?.(status.pointerId = ev.pointerId || 0);
			if (dragging_w?.deref?.()) dragging_w.deref().value = 1;
			status.point = ev[CAXIS[axis]] || 0;
			status.scroll = content_w?.deref?.()?.[["scrollLeft", "scrollTop"][axis]] || 0;
			addEvents(handler, {
				"pointerup": stopScroll,
				"pointermove": moveScroll,
				"pointercancel": stopScroll
			});
		}
	});
};
var ScrollBar = class {
	scrollbar;
	content;
	status;
	holder;
	inputChange;
	layout;
	preferAutoHide;
	axis = 0;
	_thumbSyncCleanup;
	spatialAnchor;
	pointerAnchor;
	_spatialAnchorCleanup;
	_pointerAnchorCleanup;
	enhancedTimeline;
	isVisible = numberRef(1);
	isDragging = numberRef(0);
	thumbPosition = vector2Ref(0, 0);
	thumbSize = vector2Ref(20, 20);
	containerSize = vector2Ref(0, 0);
	thumbTransform = new ReactiveTransform();
	scrollbarOpacity = numberRef(1);
	responsiveConfig;
	_unsubscribeAutoHide;
	_unsubscribeAccessibility;
	gestureHandler;
	themeManager;
	constructor({ holder, scrollbar, content, inputChange, layout = "anchored", autoHide = true }, axis = 0) {
		this.scrollbar = scrollbar;
		this.holder = holder;
		this.content = content;
		this.status = {
			delta: 0,
			scroll: 0,
			point: 0,
			pointerId: -1
		};
		this.inputChange = inputChange;
		this.layout = layout;
		this.preferAutoHide = autoHide;
		this.axis = axis;
		if (this.layout === "anchored") {
			this.scrollbarOpacity.value = 1;
			makeInteractive(this.holder, this.content, this.scrollbar, axis, this.status, this.inputChange, this.isDragging);
			this.bindThumbMetrics(axis);
			this.setupAccessibility();
			return;
		}
		this.initializeResponsiveBehavior();
		this.initializeGestureHandling(axis);
		this.initializeTheming();
		if (this.preferAutoHide) this.setupAutoHideBehavior();
		else this.scrollbarOpacity.value = 1;
		this.setupAccessibility();
		const currAxis = axisConfig[axis];
		const bar = this.scrollbar;
		const source = this.content ?? this.holder;
		bar?.style?.setProperty(...currAxis.cssScrollProperty, "");
		const properties = { [currAxis.cssPercentProperty]: [0, 1] };
		if (this.enhancedTimeline = makeScrollTimeline(source, axis === 0 ? "inline" : "block")) animateByTimeline(bar, properties, this.enhancedTimeline);
		makeInteractive(this.holder, this.content, this.scrollbar, axis, this.status, this.inputChange, this.isDragging);
		bindWith(this.scrollbar, "--content-size", CSSUnitUtils.asPx(paddingBoxSize(this.content, axis, this.inputChange)), handleStyleChange);
		bindWith(this.scrollbar, "--scroll-size", CSSUnitUtils.asPx(scrollSize(this.content, axis, this.inputChange)), handleStyleChange);
		bindWith(this.scrollbar, "opacity", this.scrollbarOpacity, handleStyleChange);
		bindWith(this.scrollbar, "--is-dragging", this.isDragging, handleStyleChange);
		this.bindThumbMetrics(axis);
		if (this.layout === "spatial") this.initializeSpatialAwareness(axis);
	}
	/**
	* Size + offset the thumb from real scrollWidth/clientWidth (or height).
	* Also writes --percent-* so CSS consumers stay in sync.
	*/
	bindThumbMetrics(axis) {
		const thumb = this.scrollbar.querySelector(".ui-thumb, .thumb, *") ?? null;
		if (!thumb) return;
		const percentProp = axisConfig[axis].cssPercentProperty;
		let tries = 0;
		const trackSizeOf = () => {
			const rect = this.scrollbar.getBoundingClientRect();
			const viaRect = axis === 0 ? rect.width : rect.height;
			if (viaRect > 0) return viaRect;
			return axis === 0 ? this.scrollbar.clientWidth : this.scrollbar.clientHeight;
		};
		const update = () => {
			const scrollSizePx = this.content[["scrollWidth", "scrollHeight"][axis]] || 1;
			const clientSizePx = this.content[["clientWidth", "clientHeight"][axis]] || 1;
			const scrollPos = this.content[["scrollLeft", "scrollTop"][axis]] || 0;
			const maxScroll = Math.max(0, scrollSizePx - clientSizePx);
			const trackSize = trackSizeOf();
			if (trackSize <= 0) {
				if (tries++ < 120) requestAnimationFrame(update);
				return;
			}
			tries = 0;
			const thumbLen = maxScroll <= 0 ? trackSize : Math.max(20, clientSizePx / scrollSizePx * trackSize);
			const maxOffset = Math.max(0, trackSize - thumbLen);
			const progress = maxScroll <= 0 ? 0 : Math.min(1, Math.max(0, scrollPos / maxScroll));
			if (axis === 0) {
				thumb.style.boxSizing = "border-box";
				thumb.style.width = `${thumbLen}px`;
				thumb.style.height = "100%";
				thumb.style.transform = `translate3d(${maxOffset * progress}px, 0, 0)`;
				this.thumbSize.x.value = thumbLen;
			} else {
				thumb.style.boxSizing = "border-box";
				thumb.style.height = `${thumbLen}px`;
				thumb.style.width = "100%";
				thumb.style.transform = `translate3d(0, ${maxOffset * progress}px, 0)`;
				this.thumbSize.y.value = thumbLen;
			}
			this.scrollbar.style.setProperty(percentProp, String(progress));
			this.scrollbar.style.setProperty("--scroll-coef", String(maxScroll <= 0 ? 1 : clientSizePx / scrollSizePx));
			this.scrollbar.setAttribute("aria-valuenow", String(Math.round(progress * 100)));
		};
		const onScroll = () => update();
		this.content.addEventListener("scroll", onScroll, { passive: true });
		const ro = new ResizeObserver(() => update());
		ro.observe(this.content);
		ro.observe(this.scrollbar);
		const mo = new MutationObserver(() => queueMicrotask(update));
		mo.observe(this.content, {
			childList: true,
			subtree: true,
			characterData: true
		});
		queueMicrotask(update);
		requestAnimationFrame(update);
		this._thumbSyncCleanup = () => {
			this.content.removeEventListener("scroll", onScroll);
			ro.disconnect();
			mo.disconnect();
		};
	}
	initializeSpatialAwareness(axis) {
		const spatialResult = boundingBoxAnchorRef(this.content, {
			observeResize: true,
			observeMutations: true
		});
		if (Array.isArray(spatialResult)) this.spatialAnchor = spatialResult;
		const pointerResult = pointerAnchorRef(this.holder);
		if (Array.isArray(pointerResult)) {
			this.pointerAnchor = pointerResult.slice(0, 2);
			this._pointerAnchorCleanup = pointerResult[2];
		}
		if (this.spatialAnchor) affected(this.spatialAnchor[axis === 0 ? 2 : 3], () => {
			this.updateSpatialPosition(axis);
		});
	}
	initializeResponsiveBehavior() {
		this.responsiveConfig = createResponsiveScrollbarConfig(this.holder);
		affected(this.responsiveConfig.currentConfig, () => {
			const config = this.responsiveConfig.getCurrentConfig();
			this.updateScrollbarThickness(config.thickness);
		});
		const initialConfig = this.responsiveConfig.getCurrentConfig();
		this.updateScrollbarThickness(initialConfig.thickness);
	}
	updateScrollbarThickness(thickness) {
		this.scrollbar.style.setProperty("--scrollbar-thickness", `${thickness}px`);
		if (this.axis === 0) {
			if (!this.scrollbar.style.height || !this.scrollbar.style.height.includes("var(--scrollbar-thickness)")) this.scrollbar.style.height = `${thickness}px`;
		} else if (!this.scrollbar.style.width || !this.scrollbar.style.width.includes("var(--scrollbar-thickness)")) this.scrollbar.style.width = `${thickness}px`;
	}
	initializeGestureHandling(axis) {
		this.gestureHandler = new ScrollbarGestureHandler(this.scrollbar, this.content, axis === 0 ? "horizontal" : "vertical", {
			enableMomentum: true,
			momentumDecay: .92,
			minVelocity: .1,
			maxVelocity: 3,
			touchAction: "none"
		});
		this.gestureHandler.setCallbacks({
			onStart: (gesture) => {
				this.isDragging.value = 1;
			},
			onEnd: (gesture) => {
				this.isDragging.value = 0;
			}
		});
	}
	updateSpatialPosition(axis) {
		if (!this.spatialAnchor || !this.scrollbar) return;
		const [x, y, width, height] = this.spatialAnchor;
		axis === 0 ? this.scrollbar.offsetWidth : this.scrollbar.offsetHeight;
		axis === 0 ? width.value : height.value;
		if (axis === 0) {
			this.scrollbar.style.left = `${x.value}px`;
			this.scrollbar.style.top = `${y.value + height.value}px`;
			this.scrollbar.style.width = `${width.value}px`;
		} else {
			this.scrollbar.style.left = `${x.value + width.value}px`;
			this.scrollbar.style.top = `${y.value}px`;
			this.scrollbar.style.height = `${height.value}px`;
		}
	}
	setupAutoHideBehavior() {
		let hideTimeout;
		let unsubscribeConfig;
		const getConfig = () => this.responsiveConfig?.getCurrentConfig() || {
			showOnHover: true,
			autoHide: true,
			fadeDelay: 1500
		};
		const showScrollbar = () => {
			const config = getConfig();
			if (!config.autoHide) return;
			this.scrollbarOpacity.value = 1;
			clearTimeout(hideTimeout);
			hideTimeout = globalThis.setTimeout(() => {
				if (this.isDragging.value === 0) this.scrollbarOpacity.value = 0;
			}, config.fadeDelay);
		};
		const hideScrollbar = () => {
			const config = getConfig();
			if (!config.autoHide) return;
			if (this.isDragging.value === 0) hideTimeout = globalThis.setTimeout(() => {
				this.scrollbarOpacity.value = 0;
			}, config.fadeDelay);
		};
		const setupEvents = () => {
			const config = getConfig();
			addEvent(this.content, "scroll", showScrollbar, { passive: true });
			if (config.showOnHover) {
				addEvent(this.scrollbar, "mouseenter", showScrollbar);
				addEvent(this.scrollbar, "mouseleave", hideScrollbar);
			}
			addEvent(this.scrollbar, "focus", showScrollbar);
			this.scrollbarOpacity.value = config.autoHide ? 0 : 1;
		};
		unsubscribeConfig = affected(this.responsiveConfig.currentConfig, () => {
			setupEvents();
		});
		setupEvents();
		this._unsubscribeAutoHide = () => {
			unsubscribeConfig?.();
			clearTimeout(hideTimeout);
			removeEvents(this.content, ["scroll"]);
			removeEvents(this.scrollbar, [
				"mouseenter",
				"mouseleave",
				"focus"
			]);
		};
	}
	setupAccessibility() {
		const orientation = (this.content.scrollWidth > this.content.clientWidth ? 0 : 1) === 0 ? "horizontal" : "vertical";
		if (!this.content.id) this.content.id = `scrollable-content-${Math.random().toString(36).substr(2, 9)}`;
		this.scrollbar.setAttribute("role", "scrollbar");
		this.scrollbar.setAttribute("aria-controls", this.content.id);
		this.scrollbar.setAttribute("aria-orientation", orientation);
		this.scrollbar.setAttribute("tabindex", "0");
		this.scrollbar.setAttribute("aria-label", `Scroll ${orientation}`);
		const liveRegion = document.createElement("div");
		liveRegion.setAttribute("aria-live", "polite");
		liveRegion.setAttribute("aria-atomic", "true");
		liveRegion.style.position = "absolute";
		liveRegion.style.left = "-10000px";
		liveRegion.style.width = "1px";
		liveRegion.style.height = "1px";
		liveRegion.style.overflow = "hidden";
		this.scrollbar.appendChild(liveRegion);
		const updateAriaValues = () => {
			const scrollInfo = this.getScrollInfo();
			if (!scrollInfo) return;
			const percentage = Math.round(scrollInfo.progress * 100);
			const maxValue = 100;
			const currentValue = percentage;
			this.scrollbar.setAttribute("aria-valuenow", currentValue.toString());
			this.scrollbar.setAttribute("aria-valuemin", "0");
			this.scrollbar.setAttribute("aria-valuemax", maxValue.toString());
			liveRegion.textContent = `Scrolled ${percentage}% ${orientation}`;
			this.scrollbar.setAttribute("aria-valuetext", `${percentage}% scrolled`);
		};
		updateAriaValues();
		const unaffected = affected(this.enhancedTimeline?.["progress"] || numberRef(0), updateAriaValues);
		addEvent(this.content, "scroll", updateAriaValues, { passive: true });
		addEvent(this.scrollbar, "focus", () => {
			this.scrollbar.setAttribute("aria-expanded", "true");
			this.scrollbarOpacity.value = 1;
		});
		addEvent(this.scrollbar, "blur", () => {
			this.scrollbar.setAttribute("aria-expanded", "false");
		});
		this._unsubscribeAccessibility = () => {
			unaffected?.();
			removeEvent(this.content, "scroll", updateAriaValues);
			removeEvent(this.scrollbar, "keydown", () => {});
			removeEvent(this.scrollbar, "focus", () => {});
			removeEvent(this.scrollbar, "blur", () => {});
		};
	}
	initializeTheming() {
		this.themeManager = new ScrollbarThemeManager(this.scrollbar);
	}
	setTheme(theme) {
		this.themeManager?.setTheme(theme);
		return this;
	}
	updateTheme(updates) {
		this.themeManager?.updateTheme(updates);
		return this;
	}
	getTheme() {
		return this.themeManager?.getCurrentTheme();
	}
	scrollTo(progress, smooth = true) {
		this.enhancedTimeline?.scrollTo(progress, smooth);
	}
	scrollBy(delta, smooth = true) {
		this.enhancedTimeline?.scrollBy(delta, smooth);
	}
	getScrollInfo() {
		return this.enhancedTimeline?.getScrollInfo();
	}
	destroy() {
		this._thumbSyncCleanup?.();
		this._thumbSyncCleanup = void 0;
		this.spatialAnchor?.forEach((anchor) => {
			if (anchor && typeof anchor[Symbol.dispose] === "function") anchor[Symbol.dispose]();
		});
		this._pointerAnchorCleanup?.();
		this.responsiveConfig?.destroy();
		this._unsubscribeAutoHide?.();
		this.gestureHandler?.destroy();
		this._unsubscribeAccessibility?.();
		this.themeManager?.destroy();
		removeEvents(this.content, ["scroll"]);
		removeEvents(this.scrollbar, [
			"mouseenter",
			"mouseleave",
			"focus",
			"keydown"
		]);
	}
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/modules/InputExt.ts
var boolDepIconRef = (cnd) => conditional(cnd, "badge-check", "badge");
var indicationRef = (ref) => computed(ref, (v) => (parseFloat(v) || 0)?.toLocaleString?.("en-US", {
	minimumFractionDigits: 0,
	maximumFractionDigits: 1
}));
var reactiveInputPosition = (input, container) => {
	const elementSize = container ? new ReactiveElementSize(container) : null;
	const value = clampedValueRef(input);
	return operated([value, elementSize?.width || numberRef(100)], () => {
		const containerWidth = elementSize?.width.value || 100;
		return value.value * containerWidth;
	});
};
var reactiveInputHandleTransform = (input, container) => {
	const position = reactiveInputPosition(input, container);
	new ReactiveTransform();
	return operated([position], () => `translateX(${position.value}px)`);
};
var convertValueToPointer = (input) => {
	const [value, min, max] = getInputValues(input);
	if (input?.type == "number" || input?.type == "range") return (value - min) / (max - min);
	else if (input?.type == "checkbox") return value ? 1 : 0;
	else if (input?.type == "radio") {
		const all = [...input?.parentNode?.querySelectorAll?.("input[type=\"radio\"]")], len = all?.length;
		return all.indexOf(input) / (len - 1);
	}
	return value;
};
var convertPointerToValueShift = (input, shift, container) => {
	const dec = (shift?.[0]?.value || 0) / (container?.offsetWidth || 1);
	const [_, min, max] = getInputValues(input);
	if (input?.type == "checkbox") return Math.sign(shift?.[0]?.value);
	else if (input?.type == "range" || input?.type == "number") return dec * (max - min);
	else if (input?.type == "radio") return Math.round(dec * max);
	return dec;
};
var correctValue = (input, val) => {
	if (input?.type == "number" || input?.type == "range") return val;
	else if (input?.type == "checkbox") return val > .5 ? true : false;
	else if (input?.type == "radio") {
		const len = [...input?.parentNode?.querySelectorAll?.("input[type=\"radio\"]")].length;
		return Math.max(Math.min(Math.round(val), len), 0);
	}
};
var convertPointerToValue = (input, relateFromCorner, container) => {
	const clamped = relateFromCorner / (container?.offsetWidth || 1);
	const [_, min, max] = getInputValues(input);
	return correctValue(input, clamped * (max - min) + min);
};
var getValueWithShift = (input, valueShift) => {
	return correctValue(input, getInputValues(input)?.[0] + valueShift);
};
var setInputValue = (input, value) => {
	const [_, min, max] = getInputValues(input);
	if (input?.type == "number" || input?.type == "range") {
		if (value != input.valueAsNumber) {
			input.valueAsNumber = value;
			input?.dispatchEvent?.(new Event("change", { bubbles: true }));
		}
	} else if (input?.type == "checkbox") setChecked(input, value > .5 ? true : false);
	else if (input?.type == "radio") {
		const all = [...input?.parentNode?.querySelectorAll?.("input[type=\"radio\"]")];
		if (value != 0) setChecked(all[Math.max(Math.min(Math.round(value), max), min)], value);
	}
};
var setValueByShift = (input, valueShift) => {
	return setInputValue(input, getValueWithShift(input, valueShift));
};
var setValueByPointer = (input, pointer, container) => {
	return setInputValue(input, convertPointerToValue(input, pointer, container));
};
var resolveDragging = (input, dragging, container) => {
	setValueByShift(input, convertPointerToValueShift(input, dragging, container));
	try {
		dragging[0].value = 0, dragging[1].value = 0;
	} catch (e) {}
	return [0, 0];
};
var getInputValues = (inp) => {
	if ((inp?.type == "number" || inp?.type == "range") && inp?.valueAsNumber != null) return [
		inp?.valueAsNumber || 0,
		parseFloat(inp?.min || 0),
		parseFloat(inp?.max || 0)
	];
	else if (inp?.type == "checkbox") return [
		inp?.checked ? 1 : 0,
		0,
		1
	];
	else if (inp?.type == "radio") {
		const all = [...inp?.parentNode?.querySelectorAll?.("input[type=\"radio\"]")];
		const len = all?.length;
		return [
			all?.indexOf?.(inp) ?? -1,
			0,
			len - 1
		];
	}
	return [
		0,
		0,
		0
	];
};
var progress = (value, min, max) => {
	return (value - min) / (max - min);
};
var getClampedValue = (inp) => {
	return progress(...getInputValues(inp));
};
var clampedValueRef = (inp) => {
	const rf = numberRef(getClampedValue(inp));
	const ctr = (ev) => {
		rf.value = getClampedValue(ev?.target ?? inp);
	};
	bindCtrl?.(inp, ctr);
	return rf;
};
var dragSlider = (thumb, handler, input) => {
	const usedPointer = { id: -1 };
	const correctOffset = () => {
		try {
			dragging[0].value = 0, dragging[1].value = 0;
		} catch (e) {}
		return [0, 0];
	};
	const customTrigger = (doGrab) => {
		const $handler = makeShiftTrigger((ev) => {
			thumb?.setPointerCapture?.(usedPointer.id = ev?.pointerId);
			thumb?.setAttribute?.("data-dragging", "true");
			correctOffset();
			doGrab?.(ev, thumb);
		}, thumb);
		const ub = addEvent(handler, "pointerdown", $handler);
		const ubt = addEvent(thumb, "pointerdown", $handler);
		listening.push(ub, ubt);
		return ub;
	};
	const listening = [addEvent(handler, "click", (ev) => {
		if (input?.type == "checkbox" || input?.type == "radio") setChecked(input, input?.checked, ev);
	}), addEvent(handler, "pointerdown", (ev) => {
		if (!(ev?.target?.matches?.(".ui-thumb") || ev?.target?.closest?.(".ui-thumb"))) {
			if (ev?.target == (handler?.element ?? handler) || handler.contains(ev?.target)) setValueByPointer(input, ev?.layerX || 0, handler);
		}
	})];
	const dragging = [numberRef(0), numberRef(0)];
	const dragTransform = operated([dragging[0]], () => `translateX(${dragging[0].value}px)`);
	reactiveInputPosition(input, handler);
	CSSBinder.bindTransform(thumb, dragTransform);
	CSSBinder.bindTransform(handler, dragTransform);
	const relativeValue = operated([dragging[0]], (dx) => convertPointerToValueShift(input, dragging, handler));
	const clampedValue = clampedValueRef(input);
	bindWith?.(handler, "--relate", relativeValue, handleStyleChange);
	bindWith?.(handler, "--value", clampedValue, handleStyleChange);
	const obj = bindDraggable(customTrigger, (dragging) => {
		thumb?.removeAttribute?.("data-dragging");
		if (usedPointer.id >= 0) {
			thumb?.releasePointerCapture?.(usedPointer.id);
			usedPointer.id = -1;
		}
		resolveDragging(input, dragging, handler);
	}, dragging, correctOffset);
	return () => {
		listening.forEach((ub) => ub?.());
		obj?.dispose?.();
	};
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/modules/TemplateManager.ts
var TemplateManager = class {
	storageKey;
	templates = [];
	defaultTemplates;
	constructor(options = {}) {
		this.storageKey = options.storageKey || "rs-prompt-templates";
		this.defaultTemplates = options.defaultTemplates || this.getDefaultTemplates();
		this.loadTemplates();
	}
	/**
	* Get all templates
	*/
	getAllTemplates() {
		return [...this.templates];
	}
	/**
	* Get template by ID
	*/
	getTemplateById(id) {
		return this.templates.find((t) => t.id === id);
	}
	/**
	* Add a new template
	*/
	addTemplate(template) {
		const newTemplate = {
			...template,
			id: this.generateId(),
			createdAt: Date.now(),
			updatedAt: Date.now(),
			usageCount: 0
		};
		this.templates.push(newTemplate);
		this.saveTemplates();
		return newTemplate;
	}
	/**
	* Update an existing template
	*/
	updateTemplate(id, updates) {
		const index = this.templates.findIndex((t) => t.id === id);
		if (index === -1) return false;
		this.templates[index] = {
			...this.templates[index],
			...updates,
			updatedAt: Date.now()
		};
		this.saveTemplates();
		return true;
	}
	/**
	* Remove a template
	*/
	removeTemplate(id) {
		const index = this.templates.findIndex((t) => t.id === id);
		if (index === -1) return false;
		this.templates.splice(index, 1);
		this.saveTemplates();
		return true;
	}
	/**
	* Increment usage count for a template
	*/
	incrementUsageCount(id) {
		const template = this.templates.find((t) => t.id === id);
		if (template) {
			template.usageCount = (template.usageCount || 0) + 1;
			this.saveTemplates();
		}
	}
	/**
	* Search templates by name or content
	*/
	searchTemplates(query) {
		const lowercaseQuery = query.toLowerCase();
		return this.templates.filter((template) => template.name.toLowerCase().includes(lowercaseQuery) || template.prompt.toLowerCase().includes(lowercaseQuery) || template.tags?.some((tag) => tag.toLowerCase().includes(lowercaseQuery)));
	}
	/**
	* Get templates by category
	*/
	getTemplatesByCategory(category) {
		return this.templates.filter((template) => template.category === category);
	}
	/**
	* Get most used templates
	*/
	getMostUsedTemplates(limit = 5) {
		return this.templates.sort((a, b) => (b.usageCount || 0) - (a.usageCount || 0)).slice(0, limit);
	}
	/**
	* Export templates as JSON
	*/
	exportTemplates() {
		return JSON.stringify(this.templates, null, 2);
	}
	/**
	* Import templates from JSON
	*/
	importTemplates(jsonData) {
		try {
			const importedTemplates = JSON.parse(jsonData);
			if (!Array.isArray(importedTemplates)) throw new Error("Invalid template data: not an array");
			for (const template of importedTemplates) if (!template.name || !template.prompt) throw new Error("Invalid template: missing name or prompt");
			const templatesWithIds = importedTemplates.map((template) => ({
				...template,
				id: this.generateId(),
				createdAt: template.createdAt || Date.now(),
				updatedAt: Date.now()
			}));
			this.templates.push(...templatesWithIds);
			this.saveTemplates();
			return true;
		} catch (error) {
			console.error("Failed to import templates:", error);
			return false;
		}
	}
	/**
	* Reset to default templates
	*/
	resetToDefaults() {
		this.templates = this.defaultTemplates.map((template) => ({
			...template,
			id: this.generateId(),
			createdAt: Date.now(),
			updatedAt: Date.now(),
			usageCount: 0
		}));
		this.saveTemplates();
	}
	/**
	* Create template editor modal
	*/
	createTemplateEditor(container, onSave) {
		const modal = H`<div class="template-editor-modal">
      <div class="modal-overlay">
        <div class="modal-content">
          <div class="modal-header">
            <h3>Prompt Templates</h3>
          </div>

          <div class="template-list">
            ${this.templates.map((template, index) => H`<div class="template-item">
                <div class="template-header">
                  <input type="text" class="template-name" value="${template.name}" data-index="${index}" placeholder="Template name">
                  <button class="btn small remove-template" data-index="${index}" title="Remove template">✕</button>
                </div>
                <textarea class="template-prompt" data-index="${index}" placeholder="Enter your prompt template...">${template.prompt}</textarea>
                <div class="template-meta">
                  ${template.usageCount ? H`<span class="usage-count">Used ${template.usageCount} times</span>` : ""}
                  ${template.category ? H`<span class="category">${template.category}</span>` : ""}
                </div>
              </div>`)}
          </div>

          <div class="modal-actions">
            <button class="btn" data-action="add-template">Add Template</button>
            <button class="btn" data-action="reset-defaults">Reset to Defaults</button>
            <button class="btn primary" data-action="save-templates">Save Changes</button>
            <button class="btn" data-action="close-editor">Close</button>
          </div>
        </div>
      </div>
    </div>`;
		modal.addEventListener("click", (e) => {
			const target = e.target;
			const action = target.getAttribute("data-action");
			const index = target.getAttribute("data-index");
			if (action === "add-template") {
				this.addTemplate({
					name: "New Template",
					prompt: "Enter your prompt template here...",
					category: "Custom"
				});
				modal.remove();
				this.createTemplateEditor(container, onSave);
			} else if (action === "reset-defaults") {
				if (confirm("Are you sure you want to reset all templates to defaults? This will remove all custom templates.")) {
					this.resetToDefaults();
					modal.remove();
					this.createTemplateEditor(container, onSave);
				}
			} else if (action === "save-templates") {
				const nameInputs = modal.querySelectorAll(".template-name");
				const promptInputs = modal.querySelectorAll(".template-prompt");
				this.templates = Array.from(nameInputs).map((input, i) => {
					const index = parseInt(input.getAttribute("data-index") || "0");
					return {
						...this.templates[index],
						name: input.value.trim() || "Untitled Template",
						prompt: promptInputs[i].value.trim() || "Enter your prompt...",
						updatedAt: Date.now()
					};
				});
				this.saveTemplates();
				modal.remove();
				onSave?.();
			} else if (action === "close-editor") modal.remove();
			else if (target.classList.contains("remove-template") && index !== null) {
				const templateIndex = parseInt(index);
				const template = this.templates[templateIndex];
				if (confirm(`Remove template "${template.name}"?`)) {
					this.removeTemplate(template.id);
					modal.remove();
					this.createTemplateEditor(container, onSave);
				}
			}
		});
		container.append(modal);
	}
	/**
	* Create template selector dropdown
	*/
	createTemplateSelect(selectedPrompt) {
		const select = document.createElement("select");
		select.className = "template-select";
		const defaultOption = document.createElement("option");
		defaultOption.value = "";
		defaultOption.textContent = "Select Template...";
		select.append(defaultOption);
		this.templates.forEach((template) => {
			const option = document.createElement("option");
			option.value = template.prompt;
			option.textContent = template.name;
			if (template.category) option.textContent += ` (${template.category})`;
			select.append(option);
		});
		if (selectedPrompt) select.value = selectedPrompt;
		return select;
	}
	getDefaultTemplates() {
		return [].map((template) => ({
			...template,
			id: this.generateId(),
			createdAt: Date.now(),
			updatedAt: Date.now(),
			usageCount: 0
		}));
	}
	generateId() {
		return `template_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
	}
	loadTemplates() {
		try {
			const stored = localStorage.getItem(this.storageKey);
			if (stored) {
				const parsedTemplates = JSON.parse(stored);
				this.templates = parsedTemplates.map((template) => ({
					...template,
					id: template.id || this.generateId(),
					createdAt: template.createdAt || Date.now(),
					updatedAt: template.updatedAt || Date.now(),
					usageCount: template.usageCount || 0
				}));
			} else this.resetToDefaults();
		} catch (error) {
			console.warn("Failed to load templates from storage:", error);
			this.resetToDefaults();
		}
	}
	saveTemplates() {
		try {
			localStorage.setItem(this.storageKey, JSON.stringify(this.templates));
		} catch (error) {
			console.warn("Failed to save templates to storage:", error);
		}
	}
};
/**
* Utility function to create a template manager
*/
function createTemplateManager(options) {
	return new TemplateManager(options);
}
//#endregion
//#region ../../modules/projects/lur.e/src/design/anchor/Status.ts
var batteryStatusRef = () => {
	const rv = ref("battery-charging");
	const batteryStatus = navigator.getBattery?.();
	const batteryIcons = /* @__PURE__ */ new Map([
		[0, "battery-warning"],
		[25, "battery"],
		[50, "battery-low"],
		[75, "battery-medium"],
		[100, "battery-full"]
	]);
	const byLevel = (lv = 1) => batteryIcons.get(Math.max(Math.min(Math.round(lv * 4) * 25, 100), 0)) || "battery";
	const changeBatteryStatus = () => {
		let battery = "battery-charging";
		if (!batteryStatus) rv.value = battery;
		else batteryStatus?.then?.((btr) => {
			if (btr.charging) battery = "battery-charging";
			else battery = byLevel(btr.level) || "battery";
			rv.value = battery;
		})?.catch?.(console.warn.bind(console));
	};
	changeBatteryStatus();
	setIdleInterval$1(changeBatteryStatus, 1e3);
	batteryStatus?.then?.((btr) => {
		addEvent(btr, "chargingchange", changeBatteryStatus);
		addEvent(btr, "levelchange", changeBatteryStatus);
		changeBatteryStatus();
	});
	return rv;
};
var timeStatusRef = () => {
	const rv = ref("00:00:00");
	const updateTime = () => rv.value = (/* @__PURE__ */ new Date()).toLocaleTimeString(navigator.language, {
		hour12: false,
		timeStyle: "short"
	});
	setIdleInterval$1(updateTime, 15e3);
	document.addEventListener("DOMContentLoaded", updateTime, { once: true });
	return rv;
};
var signalStatusRef = () => {
	const rv = ref("wifi-off");
	const changeSignal = () => rv.value = signalIcons[navigator.onLine ? navigator?.connection?.effectiveType || "4g" : "offline"];
	const signalIcons = {
		"offline": "wifi-off",
		"4g": "wifi",
		"3g": "wifi-high",
		"2g": "wifi-low",
		"slow-2g": "wifi-zero"
	};
	addEvent(navigator.connection, "change", changeSignal);
	setIdleInterval$1(changeSignal, 1e3);
	changeSignal?.();
	return rv;
};
//#endregion
//#region ../../modules/projects/lur.e/src/design/anchor/Placement.ts
/**
* Shared overlay placement in the same client-coordinate space as DOM rects.
* DOM application and CSS Anchor lifecycle intentionally live separately so
* the candidate math is testable without a browser.
*/
var defaultFallbacks = {
	"bottom-start": [
		"top-start",
		"bottom-end",
		"top-end"
	],
	"bottom-end": [
		"top-end",
		"bottom-start",
		"top-start"
	],
	"top-start": [
		"bottom-start",
		"top-end",
		"bottom-end"
	],
	"top-end": [
		"bottom-end",
		"top-start",
		"bottom-start"
	],
	"right-start": [
		"left-start",
		"right-end",
		"left-end"
	],
	"right-end": [
		"left-end",
		"right-start",
		"left-start"
	],
	"left-start": [
		"right-start",
		"left-end",
		"right-end"
	],
	"left-end": [
		"right-end",
		"left-start",
		"right-start"
	]
};
var originRect = (origin) => {
	if (origin.type === "element") return origin.rect;
	return {
		left: origin.x,
		top: origin.y,
		right: origin.x,
		bottom: origin.y,
		width: 0,
		height: 0
	};
};
var candidatePosition = (origin, overlay, placement, gap) => {
	switch (placement) {
		case "bottom-start": return {
			left: origin.left,
			top: origin.bottom + gap
		};
		case "bottom-end": return {
			left: origin.right - overlay.width,
			top: origin.bottom + gap
		};
		case "top-start": return {
			left: origin.left,
			top: origin.top - overlay.height - gap
		};
		case "top-end": return {
			left: origin.right - overlay.width,
			top: origin.top - overlay.height - gap
		};
		case "right-start": return {
			left: origin.right + gap,
			top: origin.top
		};
		case "right-end": return {
			left: origin.right + gap,
			top: origin.bottom - overlay.height
		};
		case "left-start": return {
			left: origin.left - overlay.width - gap,
			top: origin.top
		};
		case "left-end": return {
			left: origin.left - overlay.width - gap,
			top: origin.bottom - overlay.height
		};
	}
};
var overflowOf = (position, overlay, viewport, margin) => {
	const minLeft = viewport.left + margin;
	const minTop = viewport.top + margin;
	const maxRight = viewport.right - margin;
	const maxBottom = viewport.bottom - margin;
	return Math.max(0, minLeft - position.left) + Math.max(0, minTop - position.top) + Math.max(0, position.left + overlay.width - maxRight) + Math.max(0, position.top + overlay.height - maxBottom);
};
var clampPosition = (position, overlay, viewport, margin) => {
	const minLeft = viewport.left + margin;
	const minTop = viewport.top + margin;
	const maxLeft = Math.max(minLeft, viewport.right - margin - overlay.width);
	const maxTop = Math.max(minTop, viewport.bottom - margin - overlay.height);
	return {
		left: Math.min(Math.max(position.left, minLeft), maxLeft),
		top: Math.min(Math.max(position.top, minTop), maxTop)
	};
};
/**
* Choose the first candidate that fits, otherwise clamp the least-overflowing
* candidate. The result is stable for both CSS Anchor fallbacks and JS layout.
*/
var resolvePlacement = ({ origin, overlay, viewport, placement = "bottom-start", fallbacks = defaultFallbacks[placement], gap = 4, margin = 8 }) => {
	const rect = originRect(origin);
	const candidates = Array.from(/* @__PURE__ */ new Set([placement, ...fallbacks]));
	let best = null;
	for (const candidate of candidates) {
		const position = candidatePosition(rect, overlay, candidate, gap);
		const overflow = overflowOf(position, overlay, viewport, margin);
		if (overflow === 0) return {
			...position,
			placement: candidate,
			clamped: false
		};
		if (!best || overflow < best.overflow) best = {
			placement: candidate,
			position,
			overflow
		};
	}
	const fallback = best ?? {
		placement,
		position: candidatePosition(rect, overlay, placement, gap),
		overflow: 0
	};
	return {
		...clampPosition(fallback.position, overlay, viewport, margin),
		placement: fallback.placement,
		clamped: fallback.overflow > 0
	};
};
var anchorSeed = 0;
var toPlacementRect = (rect) => ({
	left: rect.left,
	top: rect.top,
	right: rect.right,
	bottom: rect.bottom,
	width: rect.width,
	height: rect.height
});
var toResolvedOrigin = (origin) => origin.type === "point" ? origin : {
	type: "element",
	rect: toPlacementRect(origin.element.getBoundingClientRect())
};
var supportsCssAnchorPositioning = () => {
	try {
		return typeof CSS !== "undefined" && (CSS.supports("position-anchor: --fest-placement") || CSS.supports("anchor-name: --fest-placement")) && CSS.supports("position-try-fallbacks: flip-inline");
	} catch {
		return false;
	}
};
var cssAreaFor = (placement) => {
	switch (placement) {
		case "bottom-start": return "bottom span-right";
		case "bottom-end": return "bottom span-left";
		case "top-start": return "top span-right";
		case "top-end": return "top span-left";
		case "right-start": return "right span-bottom";
		case "right-end": return "right span-top";
		case "left-start": return "left span-bottom";
		case "left-end": return "left span-top";
	}
};
var saveStyles = (element, names) => new Map(names.map((name) => [name, element.style.getPropertyValue(name)]));
var restoreStyles = (element, saved) => {
	for (const [name, value] of saved) if (value) element.style.setProperty(name, value);
	else element.style.removeProperty(name);
};
/**
* Position an overlay at a point or element. Element origins use native CSS
* Anchor Positioning when available; all other cases share the pure JS solver.
*/
var placeOverlay = (overlay, { origin, placement = "bottom-start", fallbacks, gap, margin, viewport, strategy = "auto" }) => {
	const useCssAnchor = origin.type === "element" && strategy !== "js" && supportsCssAnchorPositioning();
	let disposed = false;
	if (useCssAnchor) {
		const anchor = origin.element;
		const anchorName = `--fest-placement-${++anchorSeed}`;
		const savedAnchor = saveStyles(anchor, ["anchor-name"]);
		const savedOverlay = saveStyles(overlay, [
			"left",
			"top",
			"position-anchor",
			"position-area",
			"position-try-fallbacks"
		]);
		const currentNames = anchor.style.getPropertyValue("anchor-name").trim();
		anchor.style.setProperty("anchor-name", [currentNames, anchorName].filter(Boolean).join(" "));
		overlay.style.removeProperty("left");
		overlay.style.removeProperty("top");
		overlay.style.setProperty("position-anchor", anchorName);
		overlay.style.setProperty("position-area", cssAreaFor(placement));
		overlay.style.setProperty("position-try-fallbacks", "flip-inline, flip-block");
		return {
			strategy: "css-anchor",
			update: () => null,
			dispose: () => {
				if (disposed) return;
				disposed = true;
				restoreStyles(anchor, savedAnchor);
				restoreStyles(overlay, savedOverlay);
			}
		};
	}
	const savedOverlay = saveStyles(overlay, ["left", "top"]);
	const update = () => {
		const rect = overlay.getBoundingClientRect();
		const result = resolvePlacement({
			origin: toResolvedOrigin(origin),
			overlay: {
				width: rect.width,
				height: rect.height
			},
			viewport: viewport ?? readFixedOverlayViewport(),
			placement,
			fallbacks,
			gap,
			margin
		});
		overlay.style.setProperty("left", `${result.left}px`);
		overlay.style.setProperty("top", `${result.top}px`);
		return result;
	};
	update();
	return {
		strategy: "js",
		update,
		dispose: () => {
			if (disposed) return;
			disposed = true;
			restoreStyles(overlay, savedOverlay);
		}
	};
};
//#endregion
//#region ../../modules/projects/lur.e/src/design/color/Renderer.ts
var makeRenderer = () => {
	const canvas = document.createElement("canvas");
	const fallback = document.createElement("div");
	canvas.width = 1;
	canvas.height = 1;
	canvas.classList.add("u2-renderer");
	canvas.classList.add("u2-implement");
	fallback.classList.add("u2-fallback");
	fallback.classList.add("u2-renderer");
	fallback.style.inlineSize = "stretch";
	fallback.style.blockSize = "stretch";
	fallback.style.contain = "layout paint";
	fallback.style.containIntrinsicInlineSize = "1px";
	fallback.style.containIntrinsicBlockSize = "1px";
	fallback.style.maxInlineSize = "min(100cqi, 100dvi)";
	fallback.style.maxBlockSize = "min(100cqb, 100dvb)";
	fallback.style.pointerEvents = "auto";
	canvas.style.inlineSize = "stretch";
	canvas.style.blockSize = "stretch";
	canvas.style.objectFit = "contain";
	canvas.style.objectPosition = "center";
	canvas.style.imageRendering = "auto";
	canvas.style.imageRendering = "optimizeQuality";
	canvas.style.imageRendering = "smooth";
	canvas.style.imageRendering = "high-quality";
	canvas.style.contain = "layout paint";
	canvas.style.containIntrinsicInlineSize = "1px";
	canvas.style.containIntrinsicBlockSize = "1px";
	canvas.style.maxInlineSize = "min(100cqi, 100dvi)";
	canvas.style.maxBlockSize = "min(100cqb, 100dvb)";
	canvas.style.pointerEvents = "auto";
	canvas.layoutsubtree = true;
	canvas.setAttribute("layoutsubtree", "true");
	const ctx = canvas?.getContext?.("2d");
	if (!ctx) return fallback;
	if (ctx?.drawElement == null && ctx?.drawElementImage == null) return fallback;
	const drawElementAct = ctx?.drawElementImage != null ? ctx?.drawElementImage?.bind?.(ctx) : ctx?.drawElement?.bind?.(ctx);
	if (drawElementAct == null) return fallback;
	const makeInteractive = (element) => {
		const drawElement = element ?? canvas.children?.[0];
		if (drawElement == null) return;
		try {
			ctx.setHitTestRegions([{
				element: drawElement,
				rect: {
					x: 0,
					y: 0,
					width: drawElement?.offsetWidth * devicePixelRatio,
					height: drawElement?.offsetHeight * devicePixelRatio
				}
			}]);
		} catch (e) {
			console.warn(e);
		}
	};
	const rafDebounce = RAFBehavior();
	const doRender = () => {
		const drawElement = canvas.children?.[0];
		if (drawElementAct == null || drawElement == null || !canvas.checkVisibility() || canvas.dataset.dragging != null || canvas.closest?.("[data-dragging]") != null) return;
		ctx.reset();
		ctx.save();
		ctx.scale(devicePixelRatio || 1, devicePixelRatio || 1);
		try {
			drawElementAct(drawElement, 0, 0, canvas.width / devicePixelRatio, canvas.height / devicePixelRatio);
		} catch (e) {
			console.warn(e);
		}
		makeInteractive();
		ctx.restore();
	};
	const resizeObserver = new ResizeObserver((entries) => {
		const entry = entries.find((entry) => entry.target === canvas);
		const newWidth = Math.min(entry?.devicePixelContentBoxSize?.[0]?.inlineSize || canvas.width, (canvas?.offsetParent || document.documentElement)?.clientWidth * devicePixelRatio);
		const newHeight = Math.min(entry?.devicePixelContentBoxSize?.[0]?.blockSize || canvas.height, (canvas?.offsetParent || document.documentElement)?.clientHeight * devicePixelRatio);
		if (newWidth != canvas.width) canvas.width = newWidth;
		if (newHeight != canvas.height) canvas.height = newHeight;
		if (newWidth != canvas.width || newHeight != canvas.height) rafDebounce(doRender);
	});
	queueMicrotask(() => {
		resizeObserver.observe(canvas, {
			box: ["device-pixel-content-box"],
			fireOnEveryPaint: true
		});
	});
	(async () => {
		while (true) {
			await new Promise((resolve) => requestAnimationFrame(resolve));
			if (canvas.checkVisibility() && canvas.dataset.dragging == null && canvas.closest?.("[data-dragging]") == null) doRender();
		}
	})();
	return canvas;
};
//#endregion
//#region ../../modules/projects/lur.e/src/design/color/DynamicEngine.ts
var runWhenIdle = (cb, timeout = 100) => {
	if (typeof globalThis.requestIdleCallback === "function") return globalThis.requestIdleCallback(cb, { timeout });
	return setTimeout(() => cb({
		didTimeout: false,
		timeRemaining: () => 0
	}), 0);
};
var electronAPI = "electronBridge";
function extractAlpha(input) {
	if (typeof input !== "string") return null;
	let color = input.trim().toLowerCase();
	if (color === "transparent") return 0;
	if (color.startsWith("#")) {
		const hex = color;
		if (hex.length === 4) return 1;
		if (hex.length === 7) return 1;
		if (hex.length === 5) {
			const a = hex[4];
			const aa = a + a;
			return clamp(parseInt(aa, 16) / 255, 0, 1);
		}
		if (hex.length === 9) {
			const aa = hex.slice(7, 9);
			return clamp(parseInt(aa, 16) / 255, 0, 1);
		}
		return null;
	}
	const fnMatch = color.match(/^([a-z-]+)\((.*)\)$/i);
	if (!fnMatch) return null;
	fnMatch[1];
	const body = fnMatch[2].trim();
	{
		const slashIdx = body.lastIndexOf("/");
		if (slashIdx !== -1) {
			const a = parseAlphaComponent(body.slice(slashIdx + 1).trim());
			if (a != null) return clamp(a, 0, 1);
			return null;
		}
	}
	if (body.includes(",")) {
		const parts = body.split(",").map((s) => s.trim());
		if (parts.length >= 4) {
			const a = parseAlphaComponent(parts[3]);
			if (a != null) return clamp(a, 0, 1);
			return null;
		}
		return 1;
	}
	return 1;
}
function parseAlphaComponent(str) {
	if (!str) return null;
	if (str.endsWith("%")) {
		const n = parseFloat(str);
		if (Number.isNaN(n)) return null;
		return n / 100;
	}
	const n = parseFloat(str);
	if (Number.isNaN(n)) return null;
	return n;
}
function clamp(v, min, max) {
	return Math.min(max, Math.max(min, v));
}
var tacp = (color) => {
	if (!color || color == null) return 0;
	return (extractAlpha?.(color) || 0) > .1;
};
var setIdleInterval = (cb, timeout = 1e3, ...args) => {
	runWhenIdle(async () => {
		if (!cb || typeof cb != "function") return;
		while (true) {
			await Promise.try(cb, ...args);
			await new Promise((r) => setTimeout(r, timeout));
			await new Promise((r) => runWhenIdle(r, 100));
			await new Promise((r) => requestAnimationFrame(r));
		}
	}, 1e3);
};
/** Prefer real shell chrome (minimal nav / faint toolbar) for PWA title bar / WCO tint. */
var sampleShellToolbarBackgroundColor = () => {
	if (typeof document === "undefined") return null;
	try {
		const hosts = document.querySelectorAll("[data-shell]");
		for (const host of hosts) {
			const sr = host.shadowRoot;
			if (!sr) continue;
			const bar = sr.querySelector(".app-shell__nav, .app-shell__toolbar");
			if (!bar) continue;
			const bg = getComputedStyle(bar).backgroundColor;
			if (tacp(bg)) return bg;
		}
	} catch {}
	return null;
};
/** Under window-controls-overlay, sample inside env(titlebar-area-*) — not under OS control buttons. */
var sampleWcoTitlebarStripColor = () => {
	if (typeof document === "undefined") return null;
	if (!globalThis.matchMedia?.("(display-mode: window-controls-overlay)")?.matches) return null;
	const probe = document.createElement("div");
	probe.setAttribute("data-wco-theme-probe", "true");
	probe.style.cssText = [
		"position:fixed",
		"visibility:hidden",
		"pointer-events:none",
		"z-index:-2147483648",
		"left:env(titlebar-area-x,0px)",
		"top:env(titlebar-area-y,0px)",
		"width:env(titlebar-area-width,0px)",
		"height:env(titlebar-area-height,0px)"
	].join(";");
	document.documentElement.appendChild(probe);
	try {
		const r = probe.getBoundingClientRect();
		if (r.width < 1 || r.height < 1) return null;
		const c = pickBgColor(Math.floor(r.left + Math.min(40, r.width * .2)), Math.floor(r.top + r.height * .5));
		return tacp(c) ? c : null;
	} finally {
		probe.remove();
	}
};
var pickBgColor = (x, y, holder = null) => {
	const opaque = Array.from(document.elementsFromPoint(x, y))?.filter?.((el) => el instanceof HTMLElement && el != holder && (el?.dataset?.alpha != null ? parseFloat(el?.dataset?.alpha) > .01 : true) && el?.checkVisibility?.({
		contentVisibilityAuto: true,
		opacityProperty: true,
		visibilityProperty: true
	}) && el?.matches?.(":not([data-hidden])") && el?.style?.getPropertyValue("display") != "none").map((element) => {
		const computed = getComputedStyle?.(element);
		return {
			element,
			zIndex: parseInt(computed?.zIndex || "0", 10) || 0,
			color: computed?.backgroundColor || "transparent"
		};
	}).sort((a, b) => Math.sign(b.zIndex - a.zIndex)).filter(({ color }) => tacp(color));
	if (opaque?.[0]?.element instanceof HTMLElement) return opaque?.[0]?.color || "transparent";
	return "transparent";
};
var pickFromCenter = (holder) => {
	const box = holder?.getBoundingClientRect();
	if (box) {
		const Z = .5 * (fixedClientZoom?.() || 1);
		return pickBgColor(...[(box.left + box.right) * Z, (box.top + box.bottom) * Z], holder);
	}
};
var dynamicNativeFrame = (root = document.documentElement) => {
	let media = root?.querySelector?.("meta[data-theme-color]") ?? root?.querySelector?.("meta[name=\"theme-color\"]");
	if (!media && root == document.documentElement) {
		media = document.createElement("meta");
		media.setAttribute("name", "theme-color");
		media.setAttribute("data-theme-color", "");
		media.setAttribute("content", "transparent");
		document.head.appendChild(media);
	}
	try {
		const nativeOwned = Boolean(globalThis?.__CWSP_NATIVE_THEME_COLOR_OWNED__);
		const coveringWin = document.querySelector("ui-window[native-mode]:not([minimized])") || document.querySelector("ui-window[data-desk-max]:not([minimized]), ui-window[maximized]:not([minimized]), ui-window[data-mobile-max]:not([minimized])");
		if (nativeOwned || coveringWin) {
			if (nativeOwned) return;
			if (coveringWin?.shadowRoot && root == document.documentElement) {
				const title = coveringWin.shadowRoot.querySelector(".title-handler");
				const token = title && getComputedStyle(title).getPropertyValue("--ui-win-titlebar-bg").trim() || getComputedStyle(coveringWin).getPropertyValue("--ui-win-titlebar-bg").trim() || getComputedStyle(document.documentElement).getPropertyValue("--color-surface-container").trim();
				const bg = title ? getComputedStyle(title).backgroundColor : "";
				const candidate = (bg && tacp(bg) ? bg : null) || (token && tacp(token) ? token : null);
				if (candidate) {
					const low = String(candidate).toLowerCase();
					if (!/#007acc\b/.test(low) && !/rgba?\(\s*0\s*,\s*122\s*,\s*204/.test(low)) media?.setAttribute?.("content", candidate);
					return;
				}
			}
			return;
		}
	} catch {}
	const fromShell = sampleShellToolbarBackgroundColor();
	const fromWco = !fromShell ? sampleWcoTitlebarStripColor() : null;
	const fromSurface = !fromShell && !fromWco ? (() => {
		try {
			const raw = getComputedStyle(document.documentElement).getPropertyValue("--color-surface-container").trim();
			return raw && tacp(raw) ? raw : null;
		} catch {
			return null;
		}
	})() : null;
	const color = fromShell || fromWco || fromSurface;
	if (color && color !== "transparent" && (media || window?.["electronBridge"]) && root == document.documentElement) media?.setAttribute?.("content", color);
};
var dynamicBgColors = (root = document.documentElement) => {
	root.querySelectorAll("body, body > *, body > * > *").forEach((target) => {
		if (target) pickFromCenter(target);
	});
};
var dynamicTheme = (ROOT = document.documentElement) => {
	const startedKey = "__LURE_DYNAMIC_THEME_STARTED__";
	if (globalThis?.[startedKey]) return;
	globalThis[startedKey] = true;
	matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({}) => dynamicBgColors(ROOT));
	const updater = () => {
		dynamicNativeFrame(ROOT);
		dynamicBgColors(ROOT);
	};
	addEvent(ROOT, "u2-appear", () => runWhenIdle(updater, 100));
	addEvent(ROOT, "u2-hidden", () => runWhenIdle(updater, 100));
	addEvent(ROOT, "u2-theme-change", () => runWhenIdle(updater, 100));
	addEvent(window, "load", () => runWhenIdle(updater, 100));
	addEvent(document, "visibilitychange", () => runWhenIdle(updater, 100));
	setIdleInterval(updater, 500);
};
var currentColorFromPointRef = (x, y, ROOT = document.documentElement, timeout = 500) => {
	const rfc = stringRef(pickBgColor(x, y, ROOT));
	const updater = () => {
		const color = pickBgColor(x, y, ROOT);
		rfc.value = color;
	};
	addEvent(ROOT, "u2-appear", () => runWhenIdle(updater, 100));
	addEvent(ROOT, "u2-hidden", () => runWhenIdle(updater, 100));
	addEvent(ROOT, "u2-theme-change", () => runWhenIdle(updater, 100));
	addEvent(window, "load", () => runWhenIdle(updater, 100));
	addEvent(document, "visibilitychange", () => runWhenIdle(updater, 100));
	setIdleInterval(updater, timeout);
	return rfc;
};
var currentColorFromCenterRef = (element, ROOT = document.documentElement, timeout = 500) => {
	const rfc = stringRef(pickFromCenter(element));
	const updater = () => {
		const color = pickFromCenter(element);
		rfc.value = color;
	};
	addEvent(ROOT, "u2-appear", () => runWhenIdle(updater, 100));
	addEvent(ROOT, "u2-hidden", () => runWhenIdle(updater, 100));
	addEvent(ROOT, "u2-theme-change", () => runWhenIdle(updater, 100));
	addEvent(window, "load", () => runWhenIdle(updater, 100));
	addEvent(document, "visibilitychange", () => runWhenIdle(updater, 100));
	setIdleInterval(updater, timeout);
	return rfc;
};
//#endregion
//#region ../../modules/projects/lur.e/src/design/color/ThemeEngine.ts
var colorScheme = async () => {
	dynamicNativeFrame();
	dynamicBgColors();
};
/**
* Opt-in autostart only.
* This module is re-exported from `fest/lure` root, so unconditional side effects
* here can start a competing theme-color loop in host apps.
*/
var maybeStartThemeEngine = () => {
	if (typeof document === "undefined") return;
	if (globalThis?.__LURE_AUTO_THEME_ENGINE__ !== true) return;
	requestAnimationFrame(() => colorScheme?.());
	dynamicTheme?.();
};
maybeStartThemeEngine();
//#endregion
//#region ../../node_modules/culori/src/rgb/parseNumber.js
var parseNumber = (color, len) => {
	if (typeof color !== "number") return;
	if (len === 3) return {
		mode: "rgb",
		r: (color >> 8 & 15 | color >> 4 & 240) / 255,
		g: (color >> 4 & 15 | color & 240) / 255,
		b: (color & 15 | color << 4 & 240) / 255
	};
	if (len === 4) return {
		mode: "rgb",
		r: (color >> 12 & 15 | color >> 8 & 240) / 255,
		g: (color >> 8 & 15 | color >> 4 & 240) / 255,
		b: (color >> 4 & 15 | color & 240) / 255,
		alpha: (color & 15 | color << 4 & 240) / 255
	};
	if (len === 6) return {
		mode: "rgb",
		r: (color >> 16 & 255) / 255,
		g: (color >> 8 & 255) / 255,
		b: (color & 255) / 255
	};
	if (len === 8) return {
		mode: "rgb",
		r: (color >> 24 & 255) / 255,
		g: (color >> 16 & 255) / 255,
		b: (color >> 8 & 255) / 255,
		alpha: (color & 255) / 255
	};
};
//#endregion
//#region ../../node_modules/culori/src/colors/named.js
var named = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
};
//#endregion
//#region ../../node_modules/culori/src/rgb/parseNamed.js
var parseNamed = (color) => {
	return parseNumber(named[color.toLowerCase()], 6);
};
//#endregion
//#region ../../node_modules/culori/src/rgb/parseHex.js
var hex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i;
var parseHex = (color) => {
	let match;
	return (match = color.match(hex)) ? parseNumber(parseInt(match[1], 16), match[1].length) : void 0;
};
//#endregion
//#region ../../node_modules/culori/src/util/regex.js
var num$1 = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)";
`${num$1}`;
var per = `${num$1}%`;
`${num$1}`;
var num_per = `(?:${num$1}%|${num$1})`;
var num_per_none = `(?:${num$1}%|${num$1}|none)`;
var hue$1 = `(?:${num$1}(deg|grad|rad|turn)|${num$1})`;
`${num$1}${num$1}`;
var c = `\\s*,\\s*`;
new RegExp("^" + num_per_none + "$");
//#endregion
//#region ../../node_modules/culori/src/rgb/parseRgbLegacy.js
var rgb_num_old = new RegExp(`^rgba?\\(\\s*${num$1}${c}${num$1}${c}${num$1}\\s*(?:,\\s*${num_per}\\s*)?\\)$`);
var rgb_per_old = new RegExp(`^rgba?\\(\\s*${per}${c}${per}${c}${per}\\s*(?:,\\s*${num_per}\\s*)?\\)$`);
var parseRgbLegacy = (color) => {
	let res = { mode: "rgb" };
	let match;
	if (match = color.match(rgb_num_old)) {
		if (match[1] !== void 0) res.r = match[1] / 255;
		if (match[2] !== void 0) res.g = match[2] / 255;
		if (match[3] !== void 0) res.b = match[3] / 255;
	} else if (match = color.match(rgb_per_old)) {
		if (match[1] !== void 0) res.r = match[1] / 100;
		if (match[2] !== void 0) res.g = match[2] / 100;
		if (match[3] !== void 0) res.b = match[3] / 100;
	} else return;
	if (match[4] !== void 0) res.alpha = Math.max(0, Math.min(1, match[4] / 100));
	else if (match[5] !== void 0) res.alpha = Math.max(0, Math.min(1, +match[5]));
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/_prepare.js
var prepare = (color, mode) => color === void 0 ? void 0 : typeof color !== "object" ? parse(color) : color.mode !== void 0 ? color : mode ? {
	...color,
	mode
} : void 0;
//#endregion
//#region ../../node_modules/culori/src/converter.js
var converter = (target_mode = "rgb") => (color) => (color = prepare(color, target_mode)) !== void 0 ? color.mode === target_mode ? color : converters[color.mode][target_mode] ? converters[color.mode][target_mode](color) : target_mode === "rgb" ? converters[color.mode].rgb(color) : converters.rgb[target_mode](converters[color.mode].rgb(color)) : void 0;
//#endregion
//#region ../../node_modules/culori/src/modes.js
var converters = {};
var modes = {};
var parsers = [];
var colorProfiles = {};
var identity = (v) => v;
var useMode = (definition) => {
	converters[definition.mode] = {
		...converters[definition.mode],
		...definition.toMode
	};
	Object.keys(definition.fromMode || {}).forEach((k) => {
		if (!converters[k]) converters[k] = {};
		converters[k][definition.mode] = definition.fromMode[k];
	});
	if (!definition.ranges) definition.ranges = {};
	if (!definition.difference) definition.difference = {};
	definition.channels.forEach((channel) => {
		if (definition.ranges[channel] === void 0) definition.ranges[channel] = [0, 1];
		if (!definition.interpolate[channel]) throw new Error(`Missing interpolator for: ${channel}`);
		if (typeof definition.interpolate[channel] === "function") definition.interpolate[channel] = { use: definition.interpolate[channel] };
		if (!definition.interpolate[channel].fixup) definition.interpolate[channel].fixup = identity;
	});
	modes[definition.mode] = definition;
	(definition.parse || []).forEach((parser) => {
		useParser(parser, definition.mode);
	});
	return converter(definition.mode);
};
var getMode = (mode) => modes[mode];
var useParser = (parser, mode) => {
	if (typeof parser === "string") {
		if (!mode) throw new Error(`'mode' required when 'parser' is a string`);
		colorProfiles[parser] = mode;
	} else if (typeof parser === "function") {
		if (parsers.indexOf(parser) < 0) parsers.push(parser);
	}
};
//#endregion
//#region ../../node_modules/culori/src/parse.js
var IdentStartCodePoint = /[^\x00-\x7F]|[a-zA-Z_]/;
var IdentCodePoint = /[^\x00-\x7F]|[-\w]/;
var Tok = {
	Function: "function",
	Ident: "ident",
	Number: "number",
	Percentage: "percentage",
	ParenClose: ")",
	None: "none",
	Hue: "hue",
	Alpha: "alpha"
};
var _i = 0;
function is_num(chars) {
	let ch = chars[_i];
	let ch1 = chars[_i + 1];
	if (ch === "-" || ch === "+") return /\d/.test(ch1) || ch1 === "." && /\d/.test(chars[_i + 2]);
	if (ch === ".") return /\d/.test(ch1);
	return /\d/.test(ch);
}
function is_ident(chars) {
	if (_i >= chars.length) return false;
	let ch = chars[_i];
	if (IdentStartCodePoint.test(ch)) return true;
	if (ch === "-") {
		if (chars.length - _i < 2) return false;
		let ch1 = chars[_i + 1];
		if (ch1 === "-" || IdentStartCodePoint.test(ch1)) return true;
		return false;
	}
	return false;
}
var huenits = {
	deg: 1,
	rad: 180 / Math.PI,
	grad: 9 / 10,
	turn: 360
};
function num(chars) {
	let value = "";
	if (chars[_i] === "-" || chars[_i] === "+") value += chars[_i++];
	value += digits(chars);
	if (chars[_i] === "." && /\d/.test(chars[_i + 1])) value += chars[_i++] + digits(chars);
	if (chars[_i] === "e" || chars[_i] === "E") {
		if ((chars[_i + 1] === "-" || chars[_i + 1] === "+") && /\d/.test(chars[_i + 2])) value += chars[_i++] + chars[_i++] + digits(chars);
		else if (/\d/.test(chars[_i + 1])) value += chars[_i++] + digits(chars);
	}
	if (is_ident(chars)) {
		let id = ident(chars);
		if (id === "deg" || id === "rad" || id === "turn" || id === "grad") return {
			type: Tok.Hue,
			value: value * huenits[id]
		};
		return;
	}
	if (chars[_i] === "%") {
		_i++;
		return {
			type: Tok.Percentage,
			value: +value
		};
	}
	return {
		type: Tok.Number,
		value: +value
	};
}
function digits(chars) {
	let v = "";
	while (/\d/.test(chars[_i])) v += chars[_i++];
	return v;
}
function ident(chars) {
	let v = "";
	while (_i < chars.length && IdentCodePoint.test(chars[_i])) v += chars[_i++];
	return v;
}
function identlike(chars) {
	let v = ident(chars);
	if (chars[_i] === "(") {
		_i++;
		return {
			type: Tok.Function,
			value: v
		};
	}
	if (v === "none") return {
		type: Tok.None,
		value: void 0
	};
	return {
		type: Tok.Ident,
		value: v
	};
}
function tokenize(str = "") {
	let chars = str.trim();
	let tokens = [];
	let ch;
	_i = 0;
	while (_i < chars.length) {
		ch = chars[_i++];
		if (ch === "\n" || ch === "	" || ch === " ") {
			while (_i < chars.length && (chars[_i] === "\n" || chars[_i] === "	" || chars[_i] === " ")) _i++;
			continue;
		}
		if (ch === ",") return;
		if (ch === ")") {
			tokens.push({ type: Tok.ParenClose });
			continue;
		}
		if (ch === "+") {
			_i--;
			if (is_num(chars)) {
				tokens.push(num(chars));
				continue;
			}
			return;
		}
		if (ch === "-") {
			_i--;
			if (is_num(chars)) {
				tokens.push(num(chars));
				continue;
			}
			if (is_ident(chars)) {
				tokens.push({
					type: Tok.Ident,
					value: ident(chars)
				});
				continue;
			}
			return;
		}
		if (ch === ".") {
			_i--;
			if (is_num(chars)) {
				tokens.push(num(chars));
				continue;
			}
			return;
		}
		if (ch === "/") {
			while (_i < chars.length && (chars[_i] === "\n" || chars[_i] === "	" || chars[_i] === " ")) _i++;
			let alpha;
			if (is_num(chars)) {
				alpha = num(chars);
				if (alpha.type !== Tok.Hue) {
					tokens.push({
						type: Tok.Alpha,
						value: alpha
					});
					continue;
				}
			}
			if (is_ident(chars)) {
				if (ident(chars) === "none") {
					tokens.push({
						type: Tok.Alpha,
						value: {
							type: Tok.None,
							value: void 0
						}
					});
					continue;
				}
			}
			return;
		}
		if (/\d/.test(ch)) {
			_i--;
			tokens.push(num(chars));
			continue;
		}
		if (IdentStartCodePoint.test(ch)) {
			_i--;
			tokens.push(identlike(chars));
			continue;
		}
		return;
	}
	return tokens;
}
function parseColorSyntax(tokens) {
	tokens._i = 0;
	let token = tokens[tokens._i++];
	if (!token || token.type !== Tok.Function || token.value !== "color") return;
	token = tokens[tokens._i++];
	if (token.type !== Tok.Ident) return;
	const mode = colorProfiles[token.value];
	if (!mode) return;
	const res = { mode };
	const coords = consumeCoords(tokens, false);
	if (!coords) return;
	const channels = getMode(mode).channels;
	for (let ii = 0, c, ch; ii < channels.length; ii++) {
		c = coords[ii];
		ch = channels[ii];
		if (c.type !== Tok.None) {
			res[ch] = c.type === Tok.Number ? c.value : c.value / 100;
			if (ch === "alpha") res[ch] = Math.max(0, Math.min(1, res[ch]));
		}
	}
	return res;
}
function consumeCoords(tokens, includeHue) {
	const coords = [];
	let token;
	while (tokens._i < tokens.length) {
		token = tokens[tokens._i++];
		if (token.type === Tok.None || token.type === Tok.Number || token.type === Tok.Alpha || token.type === Tok.Percentage || includeHue && token.type === Tok.Hue) {
			coords.push(token);
			continue;
		}
		if (token.type === Tok.ParenClose) {
			if (tokens._i < tokens.length) return;
			continue;
		}
		return;
	}
	if (coords.length < 3 || coords.length > 4) return;
	if (coords.length === 4) {
		if (coords[3].type !== Tok.Alpha) return;
		coords[3] = coords[3].value;
	}
	if (coords.length === 3) coords.push({
		type: Tok.None,
		value: void 0
	});
	return coords.every((c) => c.type !== Tok.Alpha) ? coords : void 0;
}
function parseModernSyntax(tokens, includeHue) {
	tokens._i = 0;
	let token = tokens[tokens._i++];
	if (!token || token.type !== Tok.Function) return;
	let coords = consumeCoords(tokens, includeHue);
	if (!coords) return;
	coords.unshift(token.value);
	return coords;
}
var parse = (color) => {
	if (typeof color !== "string") return;
	const tokens = tokenize(color);
	const parsed = tokens ? parseModernSyntax(tokens, true) : void 0;
	let result = void 0;
	let i = 0;
	let len = parsers.length;
	while (i < len) if ((result = parsers[i++](color, parsed)) !== void 0) return result;
	return tokens ? parseColorSyntax(tokens) : void 0;
};
//#endregion
//#region ../../node_modules/culori/src/rgb/parseRgb.js
function parseRgb(color, parsed) {
	if (!parsed || parsed[0] !== "rgb" && parsed[0] !== "rgba") return;
	const res = { mode: "rgb" };
	const [, r, g, b, alpha] = parsed;
	if (r.type === Tok.Hue || g.type === Tok.Hue || b.type === Tok.Hue) return;
	if (r.type !== Tok.None) res.r = r.type === Tok.Number ? r.value / 255 : r.value / 100;
	if (g.type !== Tok.None) res.g = g.type === Tok.Number ? g.value / 255 : g.value / 100;
	if (b.type !== Tok.None) res.b = b.type === Tok.Number ? b.value / 255 : b.value / 100;
	if (alpha.type !== Tok.None) res.alpha = Math.min(1, Math.max(0, alpha.type === Tok.Number ? alpha.value : alpha.value / 100));
	return res;
}
//#endregion
//#region ../../node_modules/culori/src/rgb/parseTransparent.js
var parseTransparent = (c) => c === "transparent" ? {
	mode: "rgb",
	r: 0,
	g: 0,
	b: 0,
	alpha: 0
} : void 0;
//#endregion
//#region ../../node_modules/culori/src/interpolate/lerp.js
var lerp = (a, b, t) => a + t * (b - a);
//#endregion
//#region ../../node_modules/culori/src/interpolate/piecewise.js
var get_classes = (arr) => {
	let classes = [];
	for (let i = 0; i < arr.length - 1; i++) {
		let a = arr[i];
		let b = arr[i + 1];
		if (a === void 0 && b === void 0) classes.push(void 0);
		else if (a !== void 0 && b !== void 0) classes.push([a, b]);
		else classes.push(a !== void 0 ? [a, a] : [b, b]);
	}
	return classes;
};
var interpolatorPiecewise = (interpolator) => (arr) => {
	let classes = get_classes(arr);
	return (t) => {
		let cls = t * classes.length;
		let idx = t >= 1 ? classes.length - 1 : Math.max(Math.floor(cls), 0);
		let pair = classes[idx];
		return pair === void 0 ? void 0 : interpolator(pair[0], pair[1], cls - idx);
	};
};
//#endregion
//#region ../../node_modules/culori/src/interpolate/linear.js
var interpolatorLinear = interpolatorPiecewise(lerp);
//#endregion
//#region ../../node_modules/culori/src/fixup/alpha.js
var fixupAlpha = (arr) => {
	let some_defined = false;
	let res = arr.map((v) => {
		if (v !== void 0) {
			some_defined = true;
			return v;
		}
		return 1;
	});
	return some_defined ? res : arr;
};
//#endregion
//#region ../../node_modules/culori/src/rgb/definition.js
var definition$27 = {
	mode: "rgb",
	channels: [
		"r",
		"g",
		"b",
		"alpha"
	],
	parse: [
		parseRgb,
		parseHex,
		parseRgbLegacy,
		parseNamed,
		parseTransparent,
		"srgb"
	],
	serialize: "srgb",
	interpolate: {
		r: interpolatorLinear,
		g: interpolatorLinear,
		b: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	},
	gamut: true,
	white: {
		r: 1,
		g: 1,
		b: 1
	},
	black: {
		r: 0,
		g: 0,
		b: 0
	}
};
//#endregion
//#region ../../node_modules/culori/src/a98/convertA98ToXyz65.js
var linearize$2 = (v = 0) => Math.pow(Math.abs(v), 563 / 256) * Math.sign(v);
var convertA98ToXyz65 = (a98) => {
	let r = linearize$2(a98.r);
	let g = linearize$2(a98.g);
	let b = linearize$2(a98.b);
	let res = {
		mode: "xyz65",
		x: .5766690429101305 * r + .1855582379065463 * g + .1882286462349947 * b,
		y: .297344975250536 * r + .6273635662554661 * g + .0752914584939979 * b,
		z: .0270313613864123 * r + .0706888525358272 * g + .9913375368376386 * b
	};
	if (a98.alpha !== void 0) res.alpha = a98.alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/a98/convertXyz65ToA98.js
var gamma$2 = (v) => Math.pow(Math.abs(v), 256 / 563) * Math.sign(v);
var convertXyz65ToA98 = ({ x, y, z, alpha }) => {
	if (x === void 0) x = 0;
	if (y === void 0) y = 0;
	if (z === void 0) z = 0;
	let res = {
		mode: "a98",
		r: gamma$2(x * 2.0415879038107465 - y * .5650069742788597 - .3447313507783297 * z),
		g: gamma$2(x * -.9692436362808798 + y * 1.8759675015077206 + .0415550574071756 * z),
		b: gamma$2(x * .0134442806320312 - y * .1183623922310184 + 1.0151749943912058 * z)
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/lrgb/convertRgbToLrgb.js
var fn$3 = (c = 0) => {
	const abs = Math.abs(c);
	if (abs <= .04045) return c / 12.92;
	return (Math.sign(c) || 1) * Math.pow((abs + .055) / 1.055, 2.4);
};
var convertRgbToLrgb = ({ r, g, b, alpha }) => {
	let res = {
		mode: "lrgb",
		r: fn$3(r),
		g: fn$3(g),
		b: fn$3(b)
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/xyz65/convertRgbToXyz65.js
var convertRgbToXyz65 = (rgb) => {
	let { r, g, b, alpha } = convertRgbToLrgb(rgb);
	let res = {
		mode: "xyz65",
		x: .4123907992659593 * r + .357584339383878 * g + .1804807884018343 * b,
		y: .2126390058715102 * r + .715168678767756 * g + .0721923153607337 * b,
		z: .0193308187155918 * r + .119194779794626 * g + .9505321522496607 * b
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/lrgb/convertLrgbToRgb.js
var fn$2 = (c = 0) => {
	const abs = Math.abs(c);
	if (abs > .0031308) return (Math.sign(c) || 1) * (1.055 * Math.pow(abs, 1 / 2.4) - .055);
	return c * 12.92;
};
var convertLrgbToRgb = ({ r, g, b, alpha }, mode = "rgb") => {
	let res = {
		mode,
		r: fn$2(r),
		g: fn$2(g),
		b: fn$2(b)
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/xyz65/convertXyz65ToRgb.js
var convertXyz65ToRgb = ({ x, y, z, alpha }) => {
	if (x === void 0) x = 0;
	if (y === void 0) y = 0;
	if (z === void 0) z = 0;
	let res = convertLrgbToRgb({
		r: x * 3.2409699419045226 - y * 1.537383177570094 - .4986107602930034 * z,
		g: x * -.9692436362808796 + y * 1.8759675015077204 + .0415550574071756 * z,
		b: x * .0556300796969936 - y * .2039769588889765 + 1.0569715142428784 * z
	});
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/a98/definition.js
var definition$26 = {
	...definition$27,
	mode: "a98",
	parse: ["a98-rgb"],
	serialize: "a98-rgb",
	fromMode: {
		rgb: (color) => convertXyz65ToA98(convertRgbToXyz65(color)),
		xyz65: convertXyz65ToA98
	},
	toMode: {
		rgb: (color) => convertXyz65ToRgb(convertA98ToXyz65(color)),
		xyz65: convertA98ToXyz65
	}
};
//#endregion
//#region ../../node_modules/culori/src/util/normalizeHue.js
var normalizeHue = (hue) => (hue = hue % 360) < 0 ? hue + 360 : hue;
//#endregion
//#region ../../node_modules/culori/src/fixup/hue.js
var hue = (hues, fn) => {
	return hues.map((hue, idx, arr) => {
		if (hue === void 0) return hue;
		let normalized = normalizeHue(hue);
		if (idx === 0 || hues[idx - 1] === void 0) return normalized;
		return fn(normalized - normalizeHue(arr[idx - 1]));
	}).reduce((acc, curr) => {
		if (!acc.length || curr === void 0 || acc[acc.length - 1] === void 0) {
			acc.push(curr);
			return acc;
		}
		acc.push(curr + acc[acc.length - 1]);
		return acc;
	}, []);
};
var fixupHueShorter = (arr) => hue(arr, (d) => Math.abs(d) <= 180 ? d : d - 360 * Math.sign(d));
//#endregion
//#region ../../node_modules/culori/src/cubehelix/constants.js
var M = [
	-.14861,
	1.78277,
	-.29227,
	-.90649,
	1.97294,
	0
];
var degToRad = Math.PI / 180;
var radToDeg = 180 / Math.PI;
//#endregion
//#region ../../node_modules/culori/src/cubehelix/convertRgbToCubehelix.js
var DE = M[3] * M[4];
var BE = M[1] * M[4];
var BCAD = M[1] * M[2] - M[0] * M[3];
var convertRgbToCubehelix = ({ r, g, b, alpha }) => {
	if (r === void 0) r = 0;
	if (g === void 0) g = 0;
	if (b === void 0) b = 0;
	let l = (BCAD * b + r * DE - g * BE) / (BCAD + DE - BE);
	let x = b - l;
	let y = (M[4] * (g - l) - M[2] * x) / M[3];
	let res = {
		mode: "cubehelix",
		l,
		s: l === 0 || l === 1 ? void 0 : Math.sqrt(x * x + y * y) / (M[4] * l * (1 - l))
	};
	if (res.s) res.h = Math.atan2(y, x) * radToDeg - 120;
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/cubehelix/convertCubehelixToRgb.js
var convertCubehelixToRgb = ({ h, s, l, alpha }) => {
	let res = { mode: "rgb" };
	h = (h === void 0 ? 0 : h + 120) * degToRad;
	if (l === void 0) l = 0;
	let amp = s === void 0 ? 0 : s * l * (1 - l);
	let cosh = Math.cos(h);
	let sinh = Math.sin(h);
	res.r = l + amp * (M[0] * cosh + M[1] * sinh);
	res.g = l + amp * (M[2] * cosh + M[3] * sinh);
	res.b = l + amp * (M[4] * cosh + M[5] * sinh);
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/difference.js
var differenceHueSaturation = (std, smp) => {
	if (std.h === void 0 || smp.h === void 0 || !std.s || !smp.s) return 0;
	let std_h = normalizeHue(std.h);
	let smp_h = normalizeHue(smp.h);
	let dH = Math.sin((smp_h - std_h + 360) / 2 * Math.PI / 180);
	return 2 * Math.sqrt(std.s * smp.s) * dH;
};
var differenceHueNaive = (std, smp) => {
	if (std.h === void 0 || smp.h === void 0) return 0;
	let std_h = normalizeHue(std.h);
	let smp_h = normalizeHue(smp.h);
	if (Math.abs(smp_h - std_h) > 180) return std_h - (smp_h - 360 * Math.sign(smp_h - std_h));
	return smp_h - std_h;
};
var differenceHueChroma = (std, smp) => {
	if (std.h === void 0 || smp.h === void 0 || !std.c || !smp.c) return 0;
	let std_h = normalizeHue(std.h);
	let smp_h = normalizeHue(smp.h);
	let dH = Math.sin((smp_h - std_h + 360) / 2 * Math.PI / 180);
	return 2 * Math.sqrt(std.c * smp.c) * dH;
};
//#endregion
//#region ../../node_modules/culori/src/average.js
var averageAngle = (val) => {
	let sum = val.reduce((sum, val) => {
		if (val !== void 0) {
			let rad = val * Math.PI / 180;
			sum.sin += Math.sin(rad);
			sum.cos += Math.cos(rad);
		}
		return sum;
	}, {
		sin: 0,
		cos: 0
	});
	let angle = Math.atan2(sum.sin, sum.cos) * 180 / Math.PI;
	return angle < 0 ? 360 + angle : angle;
};
//#endregion
//#region ../../node_modules/culori/src/cubehelix/definition.js
var definition$25 = {
	mode: "cubehelix",
	channels: [
		"h",
		"s",
		"l",
		"alpha"
	],
	parse: ["--cubehelix"],
	serialize: "--cubehelix",
	ranges: {
		h: [0, 360],
		s: [0, 4.614],
		l: [0, 1]
	},
	fromMode: { rgb: convertRgbToCubehelix },
	toMode: { rgb: convertCubehelixToRgb },
	interpolate: {
		h: {
			use: interpolatorLinear,
			fixup: fixupHueShorter
		},
		s: interpolatorLinear,
		l: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	},
	difference: { h: differenceHueSaturation },
	average: { h: averageAngle }
};
//#endregion
//#region ../../node_modules/culori/src/lch/convertLabToLch.js
var convertLabToLch = ({ l, a, b, alpha }, mode = "lch") => {
	if (a === void 0) a = 0;
	if (b === void 0) b = 0;
	let c = Math.sqrt(a * a + b * b);
	let res = {
		mode,
		l,
		c
	};
	if (c) res.h = normalizeHue(Math.atan2(b, a) * 180 / Math.PI);
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/lch/convertLchToLab.js
var convertLchToLab = ({ l, c, h, alpha }, mode = "lab") => {
	if (h === void 0) h = 0;
	let res = {
		mode,
		l,
		a: c ? c * Math.cos(h / 180 * Math.PI) : 0,
		b: c ? c * Math.sin(h / 180 * Math.PI) : 0
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/xyz65/constants.js
var k$2 = Math.pow(29, 3) / Math.pow(3, 3);
var e$2 = Math.pow(6, 3) / Math.pow(29, 3);
//#endregion
//#region ../../node_modules/culori/src/constants.js
var D50 = {
	X: .3457 / .3585,
	Y: 1,
	Z: .2958 / .3585
};
var D65 = {
	X: .3127 / .329,
	Y: 1,
	Z: .3583 / .329
};
Math.pow(29, 3) / Math.pow(3, 3);
Math.pow(6, 3) / Math.pow(29, 3);
//#endregion
//#region ../../node_modules/culori/src/lab65/convertLab65ToXyz65.js
var fn$1 = (v) => Math.pow(v, 3) > e$2 ? Math.pow(v, 3) : (116 * v - 16) / k$2;
var convertLab65ToXyz65 = ({ l, a, b, alpha }) => {
	if (l === void 0) l = 0;
	if (a === void 0) a = 0;
	if (b === void 0) b = 0;
	let fy = (l + 16) / 116;
	let fx = a / 500 + fy;
	let fz = fy - b / 200;
	let res = {
		mode: "xyz65",
		x: fn$1(fx) * D65.X,
		y: fn$1(fy) * D65.Y,
		z: fn$1(fz) * D65.Z
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/lab65/convertLab65ToRgb.js
var convertLab65ToRgb = (lab) => convertXyz65ToRgb(convertLab65ToXyz65(lab));
//#endregion
//#region ../../node_modules/culori/src/lab65/convertXyz65ToLab65.js
var f$1 = (value) => value > e$2 ? Math.cbrt(value) : (k$2 * value + 16) / 116;
var convertXyz65ToLab65 = ({ x, y, z, alpha }) => {
	if (x === void 0) x = 0;
	if (y === void 0) y = 0;
	if (z === void 0) z = 0;
	let f0 = f$1(x / D65.X);
	let f1 = f$1(y / D65.Y);
	let f2 = f$1(z / D65.Z);
	let res = {
		mode: "lab65",
		l: 116 * f1 - 16,
		a: 500 * (f0 - f1),
		b: 200 * (f1 - f2)
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/lab65/convertRgbToLab65.js
var convertRgbToLab65 = (rgb) => {
	let res = convertXyz65ToLab65(convertRgbToXyz65(rgb));
	if (rgb.r === rgb.b && rgb.b === rgb.g) res.a = res.b = 0;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/dlch/constants.js
var θ = 26 / 180 * Math.PI;
var cosθ = Math.cos(θ);
var sinθ = Math.sin(θ);
var factor = 100 / Math.log(139 / 100);
//#endregion
//#region ../../node_modules/culori/src/dlch/convertDlchToLab65.js
var convertDlchToLab65 = ({ l, c, h, alpha }) => {
	if (l === void 0) l = 0;
	if (c === void 0) c = 0;
	if (h === void 0) h = 0;
	let res = {
		mode: "lab65",
		l: (Math.exp(l * 1 / factor) - 1) / .0039
	};
	let G = (Math.exp(.0435 * c * 1 * 1) - 1) / .075;
	let e = G * Math.cos(h / 180 * Math.PI - θ);
	let f = G * Math.sin(h / 180 * Math.PI - θ);
	res.a = e * cosθ - f / .83 * sinθ;
	res.b = e * sinθ + f / .83 * cosθ;
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/dlch/convertLab65ToDlch.js
var convertLab65ToDlch = ({ l, a, b, alpha }) => {
	if (l === void 0) l = 0;
	if (a === void 0) a = 0;
	if (b === void 0) b = 0;
	let e = a * cosθ + b * sinθ;
	let f = .83 * (b * cosθ - a * sinθ);
	let G = Math.sqrt(e * e + f * f);
	let res = {
		mode: "dlch",
		l: factor / 1 * Math.log(1 + .0039 * l),
		c: Math.log(1 + .075 * G) / (.0435 * 1 * 1)
	};
	if (res.c) res.h = normalizeHue((Math.atan2(f, e) + θ) / Math.PI * 180);
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/dlab/definition.js
var convertDlabToLab65 = (c) => convertDlchToLab65(convertLabToLch(c, "dlch"));
var convertLab65ToDlab = (c) => convertLchToLab(convertLab65ToDlch(c), "dlab");
var definition$24 = {
	mode: "dlab",
	parse: ["--din99o-lab"],
	serialize: "--din99o-lab",
	toMode: {
		lab65: convertDlabToLab65,
		rgb: (c) => convertLab65ToRgb(convertDlabToLab65(c))
	},
	fromMode: {
		lab65: convertLab65ToDlab,
		rgb: (c) => convertLab65ToDlab(convertRgbToLab65(c))
	},
	channels: [
		"l",
		"a",
		"b",
		"alpha"
	],
	ranges: {
		l: [0, 100],
		a: [-40.09, 45.501],
		b: [-40.469, 44.344]
	},
	interpolate: {
		l: interpolatorLinear,
		a: interpolatorLinear,
		b: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	}
};
//#endregion
//#region ../../node_modules/culori/src/dlch/definition.js
var definition$23 = {
	mode: "dlch",
	parse: ["--din99o-lch"],
	serialize: "--din99o-lch",
	toMode: {
		lab65: convertDlchToLab65,
		dlab: (c) => convertLchToLab(c, "dlab"),
		rgb: (c) => convertLab65ToRgb(convertDlchToLab65(c))
	},
	fromMode: {
		lab65: convertLab65ToDlch,
		dlab: (c) => convertLabToLch(c, "dlch"),
		rgb: (c) => convertLab65ToDlch(convertRgbToLab65(c))
	},
	channels: [
		"l",
		"c",
		"h",
		"alpha"
	],
	ranges: {
		l: [0, 100],
		c: [0, 51.484],
		h: [0, 360]
	},
	interpolate: {
		l: interpolatorLinear,
		c: interpolatorLinear,
		h: {
			use: interpolatorLinear,
			fixup: fixupHueShorter
		},
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	},
	difference: { h: differenceHueChroma },
	average: { h: averageAngle }
};
//#endregion
//#region ../../node_modules/culori/src/hsi/convertHsiToRgb.js
function convertHsiToRgb({ h, s, i, alpha }) {
	h = normalizeHue(h !== void 0 ? h : 0);
	if (s === void 0) s = 0;
	if (i === void 0) i = 0;
	let f = Math.abs(h / 60 % 2 - 1);
	let res;
	switch (Math.floor(h / 60)) {
		case 0:
			res = {
				r: i * (1 + s * (3 / (2 - f) - 1)),
				g: i * (1 + s * (3 * (1 - f) / (2 - f) - 1)),
				b: i * (1 - s)
			};
			break;
		case 1:
			res = {
				r: i * (1 + s * (3 * (1 - f) / (2 - f) - 1)),
				g: i * (1 + s * (3 / (2 - f) - 1)),
				b: i * (1 - s)
			};
			break;
		case 2:
			res = {
				r: i * (1 - s),
				g: i * (1 + s * (3 / (2 - f) - 1)),
				b: i * (1 + s * (3 * (1 - f) / (2 - f) - 1))
			};
			break;
		case 3:
			res = {
				r: i * (1 - s),
				g: i * (1 + s * (3 * (1 - f) / (2 - f) - 1)),
				b: i * (1 + s * (3 / (2 - f) - 1))
			};
			break;
		case 4:
			res = {
				r: i * (1 + s * (3 * (1 - f) / (2 - f) - 1)),
				g: i * (1 - s),
				b: i * (1 + s * (3 / (2 - f) - 1))
			};
			break;
		case 5:
			res = {
				r: i * (1 + s * (3 / (2 - f) - 1)),
				g: i * (1 - s),
				b: i * (1 + s * (3 * (1 - f) / (2 - f) - 1))
			};
			break;
		default: res = {
			r: i * (1 - s),
			g: i * (1 - s),
			b: i * (1 - s)
		};
	}
	res.mode = "rgb";
	if (alpha !== void 0) res.alpha = alpha;
	return res;
}
//#endregion
//#region ../../node_modules/culori/src/hsi/convertRgbToHsi.js
function convertRgbToHsi({ r, g, b, alpha }) {
	if (r === void 0) r = 0;
	if (g === void 0) g = 0;
	if (b === void 0) b = 0;
	let M = Math.max(r, g, b), m = Math.min(r, g, b);
	let res = {
		mode: "hsi",
		s: r + g + b === 0 ? 0 : 1 - 3 * m / (r + g + b),
		i: (r + g + b) / 3
	};
	if (M - m !== 0) res.h = (M === r ? (g - b) / (M - m) + (g < b) * 6 : M === g ? (b - r) / (M - m) + 2 : (r - g) / (M - m) + 4) * 60;
	if (alpha !== void 0) res.alpha = alpha;
	return res;
}
//#endregion
//#region ../../node_modules/culori/src/hsi/definition.js
var definition$22 = {
	mode: "hsi",
	toMode: { rgb: convertHsiToRgb },
	parse: ["--hsi"],
	serialize: "--hsi",
	fromMode: { rgb: convertRgbToHsi },
	channels: [
		"h",
		"s",
		"i",
		"alpha"
	],
	ranges: { h: [0, 360] },
	gamut: "rgb",
	interpolate: {
		h: {
			use: interpolatorLinear,
			fixup: fixupHueShorter
		},
		s: interpolatorLinear,
		i: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	},
	difference: { h: differenceHueSaturation },
	average: { h: averageAngle }
};
//#endregion
//#region ../../node_modules/culori/src/hsl/convertHslToRgb.js
function convertHslToRgb({ h, s, l, alpha }) {
	h = normalizeHue(h !== void 0 ? h : 0);
	if (s === void 0) s = 0;
	if (l === void 0) l = 0;
	let m1 = l + s * (l < .5 ? l : 1 - l);
	let m2 = m1 - (m1 - l) * 2 * Math.abs(h / 60 % 2 - 1);
	let res;
	switch (Math.floor(h / 60)) {
		case 0:
			res = {
				r: m1,
				g: m2,
				b: 2 * l - m1
			};
			break;
		case 1:
			res = {
				r: m2,
				g: m1,
				b: 2 * l - m1
			};
			break;
		case 2:
			res = {
				r: 2 * l - m1,
				g: m1,
				b: m2
			};
			break;
		case 3:
			res = {
				r: 2 * l - m1,
				g: m2,
				b: m1
			};
			break;
		case 4:
			res = {
				r: m2,
				g: 2 * l - m1,
				b: m1
			};
			break;
		case 5:
			res = {
				r: m1,
				g: 2 * l - m1,
				b: m2
			};
			break;
		default: res = {
			r: 2 * l - m1,
			g: 2 * l - m1,
			b: 2 * l - m1
		};
	}
	res.mode = "rgb";
	if (alpha !== void 0) res.alpha = alpha;
	return res;
}
//#endregion
//#region ../../node_modules/culori/src/hsl/convertRgbToHsl.js
function convertRgbToHsl({ r, g, b, alpha }) {
	if (r === void 0) r = 0;
	if (g === void 0) g = 0;
	if (b === void 0) b = 0;
	let M = Math.max(r, g, b), m = Math.min(r, g, b);
	let res = {
		mode: "hsl",
		s: M === m ? 0 : (M - m) / (1 - Math.abs(M + m - 1)),
		l: .5 * (M + m)
	};
	if (M - m !== 0) res.h = (M === r ? (g - b) / (M - m) + (g < b) * 6 : M === g ? (b - r) / (M - m) + 2 : (r - g) / (M - m) + 4) * 60;
	if (alpha !== void 0) res.alpha = alpha;
	return res;
}
//#endregion
//#region ../../node_modules/culori/src/util/hue.js
var hueToDeg = (val, unit) => {
	switch (unit) {
		case "deg": return +val;
		case "rad": return val / Math.PI * 180;
		case "grad": return val / 10 * 9;
		case "turn": return val * 360;
	}
};
//#endregion
//#region ../../node_modules/culori/src/hsl/parseHslLegacy.js
var hsl_old = new RegExp(`^hsla?\\(\\s*${hue$1}${c}${per}${c}${per}\\s*(?:,\\s*${num_per}\\s*)?\\)$`);
var parseHslLegacy = (color) => {
	let match = color.match(hsl_old);
	if (!match) return;
	let res = { mode: "hsl" };
	if (match[3] !== void 0) res.h = +match[3];
	else if (match[1] !== void 0 && match[2] !== void 0) res.h = hueToDeg(match[1], match[2]);
	if (match[4] !== void 0) res.s = Math.min(Math.max(0, match[4] / 100), 1);
	if (match[5] !== void 0) res.l = Math.min(Math.max(0, match[5] / 100), 1);
	if (match[6] !== void 0) res.alpha = Math.max(0, Math.min(1, match[6] / 100));
	else if (match[7] !== void 0) res.alpha = Math.max(0, Math.min(1, +match[7]));
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/hsl/parseHsl.js
function parseHsl(color, parsed) {
	if (!parsed || parsed[0] !== "hsl" && parsed[0] !== "hsla") return;
	const res = { mode: "hsl" };
	const [, h, s, l, alpha] = parsed;
	if (h.type !== Tok.None) {
		if (h.type === Tok.Percentage) return;
		res.h = h.value;
	}
	if (s.type !== Tok.None) {
		if (s.type === Tok.Hue) return;
		res.s = s.value / 100;
	}
	if (l.type !== Tok.None) {
		if (l.type === Tok.Hue) return;
		res.l = l.value / 100;
	}
	if (alpha.type !== Tok.None) res.alpha = Math.min(1, Math.max(0, alpha.type === Tok.Number ? alpha.value : alpha.value / 100));
	return res;
}
//#endregion
//#region ../../node_modules/culori/src/hsl/definition.js
var definition$21 = {
	mode: "hsl",
	toMode: { rgb: convertHslToRgb },
	fromMode: { rgb: convertRgbToHsl },
	channels: [
		"h",
		"s",
		"l",
		"alpha"
	],
	ranges: { h: [0, 360] },
	gamut: "rgb",
	parse: [parseHsl, parseHslLegacy],
	serialize: (c) => `hsl(${c.h !== void 0 ? c.h : "none"} ${c.s !== void 0 ? c.s * 100 + "%" : "none"} ${c.l !== void 0 ? c.l * 100 + "%" : "none"}${c.alpha < 1 ? ` / ${c.alpha}` : ""})`,
	interpolate: {
		h: {
			use: interpolatorLinear,
			fixup: fixupHueShorter
		},
		s: interpolatorLinear,
		l: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	},
	difference: { h: differenceHueSaturation },
	average: { h: averageAngle }
};
//#endregion
//#region ../../node_modules/culori/src/hsv/convertHsvToRgb.js
function convertHsvToRgb({ h, s, v, alpha }) {
	h = normalizeHue(h !== void 0 ? h : 0);
	if (s === void 0) s = 0;
	if (v === void 0) v = 0;
	let f = Math.abs(h / 60 % 2 - 1);
	let res;
	switch (Math.floor(h / 60)) {
		case 0:
			res = {
				r: v,
				g: v * (1 - s * f),
				b: v * (1 - s)
			};
			break;
		case 1:
			res = {
				r: v * (1 - s * f),
				g: v,
				b: v * (1 - s)
			};
			break;
		case 2:
			res = {
				r: v * (1 - s),
				g: v,
				b: v * (1 - s * f)
			};
			break;
		case 3:
			res = {
				r: v * (1 - s),
				g: v * (1 - s * f),
				b: v
			};
			break;
		case 4:
			res = {
				r: v * (1 - s * f),
				g: v * (1 - s),
				b: v
			};
			break;
		case 5:
			res = {
				r: v,
				g: v * (1 - s),
				b: v * (1 - s * f)
			};
			break;
		default: res = {
			r: v * (1 - s),
			g: v * (1 - s),
			b: v * (1 - s)
		};
	}
	res.mode = "rgb";
	if (alpha !== void 0) res.alpha = alpha;
	return res;
}
//#endregion
//#region ../../node_modules/culori/src/hsv/convertRgbToHsv.js
function convertRgbToHsv({ r, g, b, alpha }) {
	if (r === void 0) r = 0;
	if (g === void 0) g = 0;
	if (b === void 0) b = 0;
	let M = Math.max(r, g, b), m = Math.min(r, g, b);
	let res = {
		mode: "hsv",
		s: M === 0 ? 0 : 1 - m / M,
		v: M
	};
	if (M - m !== 0) res.h = (M === r ? (g - b) / (M - m) + (g < b) * 6 : M === g ? (b - r) / (M - m) + 2 : (r - g) / (M - m) + 4) * 60;
	if (alpha !== void 0) res.alpha = alpha;
	return res;
}
//#endregion
//#region ../../node_modules/culori/src/hsv/definition.js
var definition$20 = {
	mode: "hsv",
	toMode: { rgb: convertHsvToRgb },
	parse: ["--hsv"],
	serialize: "--hsv",
	fromMode: { rgb: convertRgbToHsv },
	channels: [
		"h",
		"s",
		"v",
		"alpha"
	],
	ranges: { h: [0, 360] },
	gamut: "rgb",
	interpolate: {
		h: {
			use: interpolatorLinear,
			fixup: fixupHueShorter
		},
		s: interpolatorLinear,
		v: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	},
	difference: { h: differenceHueSaturation },
	average: { h: averageAngle }
};
//#endregion
//#region ../../node_modules/culori/src/hwb/convertHwbToRgb.js
function convertHwbToRgb({ h, w, b, alpha }) {
	if (w === void 0) w = 0;
	if (b === void 0) b = 0;
	if (w + b > 1) {
		let s = w + b;
		w /= s;
		b /= s;
	}
	return convertHsvToRgb({
		h,
		s: b === 1 ? 1 : 1 - w / (1 - b),
		v: 1 - b,
		alpha
	});
}
//#endregion
//#region ../../node_modules/culori/src/hwb/convertRgbToHwb.js
function convertRgbToHwb(rgba) {
	let hsv = convertRgbToHsv(rgba);
	if (hsv === void 0) return void 0;
	let s = hsv.s !== void 0 ? hsv.s : 0;
	let v = hsv.v !== void 0 ? hsv.v : 0;
	let res = {
		mode: "hwb",
		w: (1 - s) * v,
		b: 1 - v
	};
	if (hsv.h !== void 0) res.h = hsv.h;
	if (hsv.alpha !== void 0) res.alpha = hsv.alpha;
	return res;
}
//#endregion
//#region ../../node_modules/culori/src/hwb/parseHwb.js
function ParseHwb(color, parsed) {
	if (!parsed || parsed[0] !== "hwb") return;
	const res = { mode: "hwb" };
	const [, h, w, b, alpha] = parsed;
	if (h.type !== Tok.None) {
		if (h.type === Tok.Percentage) return;
		res.h = h.value;
	}
	if (w.type !== Tok.None) {
		if (w.type === Tok.Hue) return;
		res.w = w.value / 100;
	}
	if (b.type !== Tok.None) {
		if (b.type === Tok.Hue) return;
		res.b = b.value / 100;
	}
	if (alpha.type !== Tok.None) res.alpha = Math.min(1, Math.max(0, alpha.type === Tok.Number ? alpha.value : alpha.value / 100));
	return res;
}
//#endregion
//#region ../../node_modules/culori/src/hwb/definition.js
var definition$19 = {
	mode: "hwb",
	toMode: { rgb: convertHwbToRgb },
	fromMode: { rgb: convertRgbToHwb },
	channels: [
		"h",
		"w",
		"b",
		"alpha"
	],
	ranges: { h: [0, 360] },
	gamut: "rgb",
	parse: [ParseHwb],
	serialize: (c) => `hwb(${c.h !== void 0 ? c.h : "none"} ${c.w !== void 0 ? c.w * 100 + "%" : "none"} ${c.b !== void 0 ? c.b * 100 + "%" : "none"}${c.alpha < 1 ? ` / ${c.alpha}` : ""})`,
	interpolate: {
		h: {
			use: interpolatorLinear,
			fixup: fixupHueShorter
		},
		w: interpolatorLinear,
		b: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	},
	difference: { h: differenceHueNaive },
	average: { h: averageAngle }
};
//#endregion
//#region ../../node_modules/culori/src/hdr/transfer.js
var M1 = .1593017578125;
var M2 = 78.84375;
var C1 = .8359375;
var C2 = 18.8515625;
var C3 = 18.6875;
function transferPqDecode(v) {
	if (v < 0) return 0;
	const c = Math.pow(v, 1 / M2);
	return 1e4 * Math.pow(Math.max(0, c - C1) / (C2 - C3 * c), 1 / M1);
}
function transferPqEncode(v) {
	if (v < 0) return 0;
	const c = Math.pow(v / 1e4, M1);
	return Math.pow((C1 + C2 * c) / (1 + C3 * c), M2);
}
//#endregion
//#region ../../node_modules/culori/src/itp/convertItpToXyz65.js
var toRel = (c) => Math.max(c / 203, 0);
var convertItpToXyz65 = ({ i, t, p, alpha }) => {
	if (i === void 0) i = 0;
	if (t === void 0) t = 0;
	if (p === void 0) p = 0;
	const l = transferPqDecode(i + .008609037037932761 * t + .11102962500302593 * p);
	const m = transferPqDecode(i - .00860903703793275 * t - .11102962500302599 * p);
	const s = transferPqDecode(i + .5600313357106791 * t - .32062717498731885 * p);
	const res = {
		mode: "xyz65",
		x: toRel(2.070152218389422 * l - 1.3263473389671556 * m + .2066510476294051 * s),
		y: toRel(.3647385209748074 * l + .680566024947227 * m - .0453045459220346 * s),
		z: toRel(-.049747207535812 * l - .0492609666966138 * m + 1.1880659249923042 * s)
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/itp/convertXyz65ToItp.js
var toAbs = (c = 0) => Math.max(c * 203, 0);
var convertXyz65ToItp = ({ x, y, z, alpha }) => {
	const absX = toAbs(x);
	const absY = toAbs(y);
	const absZ = toAbs(z);
	const l = transferPqEncode(.3592832590121217 * absX + .6976051147779502 * absY - .0358915932320289 * absZ);
	const m = transferPqEncode(-.1920808463704995 * absX + 1.1004767970374323 * absY + .0753748658519118 * absZ);
	const s = transferPqEncode(.0070797844607477 * absX + .0748396662186366 * absY + .8433265453898765 * absZ);
	const res = {
		mode: "itp",
		i: .5 * l + .5 * m,
		t: 1.61376953125 * l - 3.323486328125 * m + 1.709716796875 * s,
		p: 4.378173828125 * l - 4.24560546875 * m - .132568359375 * s
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/itp/definition.js
var definition$18 = {
	mode: "itp",
	channels: [
		"i",
		"t",
		"p",
		"alpha"
	],
	parse: ["--ictcp"],
	serialize: "--ictcp",
	toMode: {
		xyz65: convertItpToXyz65,
		rgb: (color) => convertXyz65ToRgb(convertItpToXyz65(color))
	},
	fromMode: {
		xyz65: convertXyz65ToItp,
		rgb: (color) => convertXyz65ToItp(convertRgbToXyz65(color))
	},
	ranges: {
		i: [0, .581],
		t: [-.369, .272],
		p: [-.164, .331]
	},
	interpolate: {
		i: interpolatorLinear,
		t: interpolatorLinear,
		p: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	}
};
//#endregion
//#region ../../node_modules/culori/src/jab/convertXyz65ToJab.js
var p$1 = 134.03437499999998;
var d0$1 = 16295499532821565e-27;
var jabPqEncode = (v) => {
	if (v < 0) return 0;
	let vn = Math.pow(v / 1e4, M1);
	return Math.pow((C1 + C2 * vn) / (1 + C3 * vn), p$1);
};
var abs = (v = 0) => Math.max(v * 203, 0);
var convertXyz65ToJab = ({ x, y, z, alpha }) => {
	x = abs(x);
	y = abs(y);
	z = abs(z);
	let xp = 1.15 * x - .15 * z;
	let yp = .66 * y + .34 * x;
	let l = jabPqEncode(.41478972 * xp + .579999 * yp + .014648 * z);
	let m = jabPqEncode(-.20151 * xp + 1.120649 * yp + .0531008 * z);
	let s = jabPqEncode(-.0166008 * xp + .2648 * yp + .6684799 * z);
	let i = (l + m) / 2;
	let res = {
		mode: "jab",
		j: .44 * i / (1 - .56 * i) - d0$1,
		a: 3.524 * l - 4.066708 * m + .542708 * s,
		b: .199076 * l + 1.096799 * m - 1.295875 * s
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/jab/convertJabToXyz65.js
var p = 134.03437499999998;
var d0 = 16295499532821565e-27;
var jabPqDecode = (v) => {
	if (v < 0) return 0;
	let vp = Math.pow(v, 1 / p);
	return 1e4 * Math.pow((C1 - vp) / (C3 * vp - C2), 1 / M1);
};
var rel = (v) => v / 203;
var convertJabToXyz65 = ({ j, a, b, alpha }) => {
	if (j === void 0) j = 0;
	if (a === void 0) a = 0;
	if (b === void 0) b = 0;
	let i = (j + d0) / (.44 + .56 * (j + d0));
	let l = jabPqDecode(i + .13860504 * a + .058047316 * b);
	let m = jabPqDecode(i - .13860504 * a - .058047316 * b);
	let s = jabPqDecode(i - .096019242 * a - .8118919 * b);
	let res = {
		mode: "xyz65",
		x: rel(1.661373024652174 * l - .914523081304348 * m + .23136208173913045 * s),
		y: rel(-.3250758611844533 * l + 1.571847026732543 * m - .21825383453227928 * s),
		z: rel(-.090982811 * l - .31272829 * m + 1.5227666 * s)
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/jab/convertRgbToJab.js
var convertRgbToJab = (rgb) => {
	let res = convertXyz65ToJab(convertRgbToXyz65(rgb));
	if (rgb.r === rgb.b && rgb.b === rgb.g) res.a = res.b = 0;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/jab/convertJabToRgb.js
var convertJabToRgb = (color) => convertXyz65ToRgb(convertJabToXyz65(color));
//#endregion
//#region ../../node_modules/culori/src/jab/definition.js
var definition$17 = {
	mode: "jab",
	channels: [
		"j",
		"a",
		"b",
		"alpha"
	],
	parse: ["--jzazbz"],
	serialize: "--jzazbz",
	fromMode: {
		rgb: convertRgbToJab,
		xyz65: convertXyz65ToJab
	},
	toMode: {
		rgb: convertJabToRgb,
		xyz65: convertJabToXyz65
	},
	ranges: {
		j: [0, .222],
		a: [-.109, .129],
		b: [-.185, .134]
	},
	interpolate: {
		j: interpolatorLinear,
		a: interpolatorLinear,
		b: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	}
};
//#endregion
//#region ../../node_modules/culori/src/jch/convertJabToJch.js
var convertJabToJch = ({ j, a, b, alpha }) => {
	if (a === void 0) a = 0;
	if (b === void 0) b = 0;
	let c = Math.sqrt(a * a + b * b);
	let res = {
		mode: "jch",
		j,
		c
	};
	if (c) res.h = normalizeHue(Math.atan2(b, a) * 180 / Math.PI);
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/jch/convertJchToJab.js
var convertJchToJab = ({ j, c, h, alpha }) => {
	if (h === void 0) h = 0;
	let res = {
		mode: "jab",
		j,
		a: c ? c * Math.cos(h / 180 * Math.PI) : 0,
		b: c ? c * Math.sin(h / 180 * Math.PI) : 0
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/jch/definition.js
var definition$16 = {
	mode: "jch",
	parse: ["--jzczhz"],
	serialize: "--jzczhz",
	toMode: {
		jab: convertJchToJab,
		rgb: (c) => convertJabToRgb(convertJchToJab(c))
	},
	fromMode: {
		rgb: (c) => convertJabToJch(convertRgbToJab(c)),
		jab: convertJabToJch
	},
	channels: [
		"j",
		"c",
		"h",
		"alpha"
	],
	ranges: {
		j: [0, .221],
		c: [0, .19],
		h: [0, 360]
	},
	interpolate: {
		h: {
			use: interpolatorLinear,
			fixup: fixupHueShorter
		},
		c: interpolatorLinear,
		j: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	},
	difference: { h: differenceHueChroma },
	average: { h: averageAngle }
};
//#endregion
//#region ../../node_modules/culori/src/xyz50/constants.js
var k = Math.pow(29, 3) / Math.pow(3, 3);
var e = Math.pow(6, 3) / Math.pow(29, 3);
//#endregion
//#region ../../node_modules/culori/src/lab/convertLabToXyz50.js
var fn = (v) => Math.pow(v, 3) > e ? Math.pow(v, 3) : (116 * v - 16) / k;
var convertLabToXyz50 = ({ l, a, b, alpha }) => {
	if (l === void 0) l = 0;
	if (a === void 0) a = 0;
	if (b === void 0) b = 0;
	let fy = (l + 16) / 116;
	let fx = a / 500 + fy;
	let fz = fy - b / 200;
	let res = {
		mode: "xyz50",
		x: fn(fx) * D50.X,
		y: fn(fy) * D50.Y,
		z: fn(fz) * D50.Z
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/xyz50/convertXyz50ToRgb.js
var convertXyz50ToRgb = ({ x, y, z, alpha }) => {
	if (x === void 0) x = 0;
	if (y === void 0) y = 0;
	if (z === void 0) z = 0;
	let res = convertLrgbToRgb({
		r: x * 3.1341359569958707 - y * 1.6173863321612538 - .4906619460083532 * z,
		g: x * -.978795502912089 + y * 1.916254567259524 + .03344273116131949 * z,
		b: x * .07195537988411677 - y * .2289768264158322 + 1.405386058324125 * z
	});
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/lab/convertLabToRgb.js
var convertLabToRgb = (lab) => convertXyz50ToRgb(convertLabToXyz50(lab));
//#endregion
//#region ../../node_modules/culori/src/xyz50/convertRgbToXyz50.js
var convertRgbToXyz50 = (rgb) => {
	let { r, g, b, alpha } = convertRgbToLrgb(rgb);
	let res = {
		mode: "xyz50",
		x: .436065742824811 * r + .3851514688337912 * g + .14307845442264197 * b,
		y: .22249319175623702 * r + .7168870538238823 * g + .06061979053616537 * b,
		z: .013923904500943465 * r + .09708128566574634 * g + .7140993584005155 * b
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/lab/convertXyz50ToLab.js
var f = (value) => value > e ? Math.cbrt(value) : (k * value + 16) / 116;
var convertXyz50ToLab = ({ x, y, z, alpha }) => {
	if (x === void 0) x = 0;
	if (y === void 0) y = 0;
	if (z === void 0) z = 0;
	let f0 = f(x / D50.X);
	let f1 = f(y / D50.Y);
	let f2 = f(z / D50.Z);
	let res = {
		mode: "lab",
		l: 116 * f1 - 16,
		a: 500 * (f0 - f1),
		b: 200 * (f1 - f2)
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/lab/convertRgbToLab.js
var convertRgbToLab = (rgb) => {
	let res = convertXyz50ToLab(convertRgbToXyz50(rgb));
	if (rgb.r === rgb.b && rgb.b === rgb.g) res.a = res.b = 0;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/lab/parseLab.js
function parseLab(color, parsed) {
	if (!parsed || parsed[0] !== "lab") return;
	const res = { mode: "lab" };
	const [, l, a, b, alpha] = parsed;
	if (l.type === Tok.Hue || a.type === Tok.Hue || b.type === Tok.Hue) return;
	if (l.type !== Tok.None) res.l = Math.min(Math.max(0, l.value), 100);
	if (a.type !== Tok.None) res.a = a.type === Tok.Number ? a.value : a.value * 125 / 100;
	if (b.type !== Tok.None) res.b = b.type === Tok.Number ? b.value : b.value * 125 / 100;
	if (alpha.type !== Tok.None) res.alpha = Math.min(1, Math.max(0, alpha.type === Tok.Number ? alpha.value : alpha.value / 100));
	return res;
}
//#endregion
//#region ../../node_modules/culori/src/lab/definition.js
var definition$15 = {
	mode: "lab",
	toMode: {
		xyz50: convertLabToXyz50,
		rgb: convertLabToRgb
	},
	fromMode: {
		xyz50: convertXyz50ToLab,
		rgb: convertRgbToLab
	},
	channels: [
		"l",
		"a",
		"b",
		"alpha"
	],
	ranges: {
		l: [0, 100],
		a: [-125, 125],
		b: [-125, 125]
	},
	parse: [parseLab],
	serialize: (c) => `lab(${c.l !== void 0 ? c.l : "none"} ${c.a !== void 0 ? c.a : "none"} ${c.b !== void 0 ? c.b : "none"}${c.alpha < 1 ? ` / ${c.alpha}` : ""})`,
	interpolate: {
		l: interpolatorLinear,
		a: interpolatorLinear,
		b: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	}
};
//#endregion
//#region ../../node_modules/culori/src/lab65/definition.js
var definition$14 = {
	...definition$15,
	mode: "lab65",
	parse: ["--lab-d65"],
	serialize: "--lab-d65",
	toMode: {
		xyz65: convertLab65ToXyz65,
		rgb: convertLab65ToRgb
	},
	fromMode: {
		xyz65: convertXyz65ToLab65,
		rgb: convertRgbToLab65
	},
	ranges: {
		l: [0, 100],
		a: [-125, 125],
		b: [-125, 125]
	}
};
//#endregion
//#region ../../node_modules/culori/src/lch/parseLch.js
function parseLch(color, parsed) {
	if (!parsed || parsed[0] !== "lch") return;
	const res = { mode: "lch" };
	const [, l, c, h, alpha] = parsed;
	if (l.type !== Tok.None) {
		if (l.type === Tok.Hue) return;
		res.l = Math.min(Math.max(0, l.value), 100);
	}
	if (c.type !== Tok.None) res.c = Math.max(0, c.type === Tok.Number ? c.value : c.value * 150 / 100);
	if (h.type !== Tok.None) {
		if (h.type === Tok.Percentage) return;
		res.h = h.value;
	}
	if (alpha.type !== Tok.None) res.alpha = Math.min(1, Math.max(0, alpha.type === Tok.Number ? alpha.value : alpha.value / 100));
	return res;
}
//#endregion
//#region ../../node_modules/culori/src/lch/definition.js
var definition$13 = {
	mode: "lch",
	toMode: {
		lab: convertLchToLab,
		rgb: (c) => convertLabToRgb(convertLchToLab(c))
	},
	fromMode: {
		rgb: (c) => convertLabToLch(convertRgbToLab(c)),
		lab: convertLabToLch
	},
	channels: [
		"l",
		"c",
		"h",
		"alpha"
	],
	ranges: {
		l: [0, 100],
		c: [0, 150],
		h: [0, 360]
	},
	parse: [parseLch],
	serialize: (c) => `lch(${c.l !== void 0 ? c.l : "none"} ${c.c !== void 0 ? c.c : "none"} ${c.h !== void 0 ? c.h : "none"}${c.alpha < 1 ? ` / ${c.alpha}` : ""})`,
	interpolate: {
		h: {
			use: interpolatorLinear,
			fixup: fixupHueShorter
		},
		c: interpolatorLinear,
		l: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	},
	difference: { h: differenceHueChroma },
	average: { h: averageAngle }
};
//#endregion
//#region ../../node_modules/culori/src/lch65/definition.js
var definition$12 = {
	...definition$13,
	mode: "lch65",
	parse: ["--lch-d65"],
	serialize: "--lch-d65",
	toMode: {
		lab65: (c) => convertLchToLab(c, "lab65"),
		rgb: (c) => convertLab65ToRgb(convertLchToLab(c, "lab65"))
	},
	fromMode: {
		rgb: (c) => convertLabToLch(convertRgbToLab65(c), "lch65"),
		lab65: (c) => convertLabToLch(c, "lch65")
	},
	ranges: {
		l: [0, 100],
		c: [0, 150],
		h: [0, 360]
	}
};
//#endregion
//#region ../../node_modules/culori/src/lchuv/convertLuvToLchuv.js
var convertLuvToLchuv = ({ l, u, v, alpha }) => {
	if (u === void 0) u = 0;
	if (v === void 0) v = 0;
	let c = Math.sqrt(u * u + v * v);
	let res = {
		mode: "lchuv",
		l,
		c
	};
	if (c) res.h = normalizeHue(Math.atan2(v, u) * 180 / Math.PI);
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/lchuv/convertLchuvToLuv.js
var convertLchuvToLuv = ({ l, c, h, alpha }) => {
	if (h === void 0) h = 0;
	let res = {
		mode: "luv",
		l,
		u: c ? c * Math.cos(h / 180 * Math.PI) : 0,
		v: c ? c * Math.sin(h / 180 * Math.PI) : 0
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/luv/convertXyz50ToLuv.js
var u_fn$1 = (x, y, z) => 4 * x / (x + 15 * y + 3 * z);
var v_fn$1 = (x, y, z) => 9 * y / (x + 15 * y + 3 * z);
var un$1 = u_fn$1(D50.X, D50.Y, D50.Z);
var vn$1 = v_fn$1(D50.X, D50.Y, D50.Z);
var l_fn = (value) => value <= e ? k * value : 116 * Math.cbrt(value) - 16;
var convertXyz50ToLuv = ({ x, y, z, alpha }) => {
	if (x === void 0) x = 0;
	if (y === void 0) y = 0;
	if (z === void 0) z = 0;
	let l = l_fn(y / D50.Y);
	let u = u_fn$1(x, y, z);
	let v = v_fn$1(x, y, z);
	if (!isFinite(u) || !isFinite(v)) l = u = v = 0;
	else {
		u = 13 * l * (u - un$1);
		v = 13 * l * (v - vn$1);
	}
	let res = {
		mode: "luv",
		l,
		u,
		v
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/luv/convertLuvToXyz50.js
var u_fn = (x, y, z) => 4 * x / (x + 15 * y + 3 * z);
var v_fn = (x, y, z) => 9 * y / (x + 15 * y + 3 * z);
var un = u_fn(D50.X, D50.Y, D50.Z);
var vn = v_fn(D50.X, D50.Y, D50.Z);
var convertLuvToXyz50 = ({ l, u, v, alpha }) => {
	if (l === void 0) l = 0;
	if (l === 0) return {
		mode: "xyz50",
		x: 0,
		y: 0,
		z: 0
	};
	if (u === void 0) u = 0;
	if (v === void 0) v = 0;
	let up = u / (13 * l) + un;
	let vp = v / (13 * l) + vn;
	let y = D50.Y * (l <= 8 ? l / k : Math.pow((l + 16) / 116, 3));
	let res = {
		mode: "xyz50",
		x: y * (9 * up) / (4 * vp),
		y,
		z: y * (12 - 3 * up - 20 * vp) / (4 * vp)
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/lchuv/definition.js
var convertRgbToLchuv = (rgb) => convertLuvToLchuv(convertXyz50ToLuv(convertRgbToXyz50(rgb)));
var convertLchuvToRgb = (lchuv) => convertXyz50ToRgb(convertLuvToXyz50(convertLchuvToLuv(lchuv)));
var definition$11 = {
	mode: "lchuv",
	toMode: {
		luv: convertLchuvToLuv,
		rgb: convertLchuvToRgb
	},
	fromMode: {
		rgb: convertRgbToLchuv,
		luv: convertLuvToLchuv
	},
	channels: [
		"l",
		"c",
		"h",
		"alpha"
	],
	parse: ["--lchuv"],
	serialize: "--lchuv",
	ranges: {
		l: [0, 100],
		c: [0, 176.956],
		h: [0, 360]
	},
	interpolate: {
		h: {
			use: interpolatorLinear,
			fixup: fixupHueShorter
		},
		c: interpolatorLinear,
		l: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	},
	difference: { h: differenceHueChroma },
	average: { h: averageAngle }
};
//#endregion
//#region ../../node_modules/culori/src/lrgb/definition.js
var definition$10 = {
	...definition$27,
	mode: "lrgb",
	toMode: { rgb: convertLrgbToRgb },
	fromMode: { rgb: convertRgbToLrgb },
	parse: ["srgb-linear"],
	serialize: "srgb-linear"
};
//#endregion
//#region ../../node_modules/culori/src/luv/definition.js
var definition$9 = {
	mode: "luv",
	toMode: {
		xyz50: convertLuvToXyz50,
		rgb: (luv) => convertXyz50ToRgb(convertLuvToXyz50(luv))
	},
	fromMode: {
		xyz50: convertXyz50ToLuv,
		rgb: (rgb) => convertXyz50ToLuv(convertRgbToXyz50(rgb))
	},
	channels: [
		"l",
		"u",
		"v",
		"alpha"
	],
	parse: ["--luv"],
	serialize: "--luv",
	ranges: {
		l: [0, 100],
		u: [-84.936, 175.042],
		v: [-125.882, 87.243]
	},
	interpolate: {
		l: interpolatorLinear,
		u: interpolatorLinear,
		v: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	}
};
//#endregion
//#region ../../node_modules/culori/src/oklab/convertLrgbToOklab.js
var convertLrgbToOklab = ({ r, g, b, alpha }) => {
	if (r === void 0) r = 0;
	if (g === void 0) g = 0;
	if (b === void 0) b = 0;
	let L = Math.cbrt(.412221469470763 * r + .5363325372617348 * g + .0514459932675022 * b);
	let M = Math.cbrt(.2119034958178252 * r + .6806995506452344 * g + .1073969535369406 * b);
	let S = Math.cbrt(.0883024591900564 * r + .2817188391361215 * g + .6299787016738222 * b);
	let res = {
		mode: "oklab",
		l: .210454268309314 * L + .7936177747023054 * M - .0040720430116193 * S,
		a: 1.9779985324311684 * L - 2.42859224204858 * M + .450593709617411 * S,
		b: .0259040424655478 * L + .7827717124575296 * M - .8086757549230774 * S
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/oklab/convertRgbToOklab.js
var convertRgbToOklab = (rgb) => {
	let res = convertLrgbToOklab(convertRgbToLrgb(rgb));
	if (rgb.r === rgb.b && rgb.b === rgb.g) res.a = res.b = 0;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/oklab/convertOklabToLrgb.js
var convertOklabToLrgb = ({ l, a, b, alpha }) => {
	if (l === void 0) l = 0;
	if (a === void 0) a = 0;
	if (b === void 0) b = 0;
	let L = Math.pow(l + .3963377773761749 * a + .2158037573099136 * b, 3);
	let M = Math.pow(l - .1055613458156586 * a - .0638541728258133 * b, 3);
	let S = Math.pow(l - .0894841775298119 * a - 1.2914855480194092 * b, 3);
	let res = {
		mode: "lrgb",
		r: 4.076741636075957 * L - 3.3077115392580616 * M + .2309699031821044 * S,
		g: -1.2684379732850317 * L + 2.6097573492876887 * M - .3413193760026573 * S,
		b: -.0041960761386756 * L - .7034186179359362 * M + 1.7076146940746117 * S
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/oklab/convertOklabToRgb.js
var convertOklabToRgb = (c) => convertLrgbToRgb(convertOklabToLrgb(c));
//#endregion
//#region ../../node_modules/culori/src/okhsl/helpers.js
function toe(x) {
	const k_1 = .206;
	const k_2 = .03;
	const k_3 = 1.206 / 1.03;
	return .5 * (k_3 * x - k_1 + Math.sqrt((k_3 * x - k_1) * (k_3 * x - k_1) + 4 * k_2 * k_3 * x));
}
function toe_inv(x) {
	return (x * x + .206 * x) / (1.206 / 1.03 * (x + .03));
}
function compute_max_saturation(a, b) {
	let k0, k1, k2, k3, k4, wl, wm, ws;
	if (-1.88170328 * a - .80936493 * b > 1) {
		k0 = 1.19086277;
		k1 = 1.76576728;
		k2 = .59662641;
		k3 = .75515197;
		k4 = .56771245;
		wl = 4.0767416621;
		wm = -3.3077115913;
		ws = .2309699292;
	} else if (1.81444104 * a - 1.19445276 * b > 1) {
		k0 = .73956515;
		k1 = -.45954404;
		k2 = .08285427;
		k3 = .1254107;
		k4 = .14503204;
		wl = -1.2684380046;
		wm = 2.6097574011;
		ws = -.3413193965;
	} else {
		k0 = 1.35733652;
		k1 = -.00915799;
		k2 = -1.1513021;
		k3 = -.50559606;
		k4 = .00692167;
		wl = -.0041960863;
		wm = -.7034186147;
		ws = 1.707614701;
	}
	let S = k0 + k1 * a + k2 * b + k3 * a * a + k4 * a * b;
	let k_l = .3963377774 * a + .2158037573 * b;
	let k_m = -.1055613458 * a - .0638541728 * b;
	let k_s = -.0894841775 * a - 1.291485548 * b;
	{
		let l_ = 1 + S * k_l;
		let m_ = 1 + S * k_m;
		let s_ = 1 + S * k_s;
		let l = l_ * l_ * l_;
		let m = m_ * m_ * m_;
		let s = s_ * s_ * s_;
		let l_dS = 3 * k_l * l_ * l_;
		let m_dS = 3 * k_m * m_ * m_;
		let s_dS = 3 * k_s * s_ * s_;
		let l_dS2 = 6 * k_l * k_l * l_;
		let m_dS2 = 6 * k_m * k_m * m_;
		let s_dS2 = 6 * k_s * k_s * s_;
		let f = wl * l + wm * m + ws * s;
		let f1 = wl * l_dS + wm * m_dS + ws * s_dS;
		let f2 = wl * l_dS2 + wm * m_dS2 + ws * s_dS2;
		S = S - f * f1 / (f1 * f1 - .5 * f * f2);
	}
	return S;
}
function find_cusp(a, b) {
	let S_cusp = compute_max_saturation(a, b);
	let rgb = convertOklabToLrgb({
		l: 1,
		a: S_cusp * a,
		b: S_cusp * b
	});
	let L_cusp = Math.cbrt(1 / Math.max(rgb.r, rgb.g, rgb.b));
	return [L_cusp, L_cusp * S_cusp];
}
function find_gamut_intersection(a, b, L1, C1, L0, cusp = null) {
	if (!cusp) cusp = find_cusp(a, b);
	let t;
	if ((L1 - L0) * cusp[1] - (cusp[0] - L0) * C1 <= 0) t = cusp[1] * L0 / (C1 * cusp[0] + cusp[1] * (L0 - L1));
	else {
		t = cusp[1] * (L0 - 1) / (C1 * (cusp[0] - 1) + cusp[1] * (L0 - L1));
		{
			let dL = L1 - L0;
			let dC = C1;
			let k_l = .3963377774 * a + .2158037573 * b;
			let k_m = -.1055613458 * a - .0638541728 * b;
			let k_s = -.0894841775 * a - 1.291485548 * b;
			let l_dt = dL + dC * k_l;
			let m_dt = dL + dC * k_m;
			let s_dt = dL + dC * k_s;
			{
				let L = L0 * (1 - t) + t * L1;
				let C = t * C1;
				let l_ = L + C * k_l;
				let m_ = L + C * k_m;
				let s_ = L + C * k_s;
				let l = l_ * l_ * l_;
				let m = m_ * m_ * m_;
				let s = s_ * s_ * s_;
				let ldt = 3 * l_dt * l_ * l_;
				let mdt = 3 * m_dt * m_ * m_;
				let sdt = 3 * s_dt * s_ * s_;
				let ldt2 = 6 * l_dt * l_dt * l_;
				let mdt2 = 6 * m_dt * m_dt * m_;
				let sdt2 = 6 * s_dt * s_dt * s_;
				let r = 4.0767416621 * l - 3.3077115913 * m + .2309699292 * s - 1;
				let r1 = 4.0767416621 * ldt - 3.3077115913 * mdt + .2309699292 * sdt;
				let r2 = 4.0767416621 * ldt2 - 3.3077115913 * mdt2 + .2309699292 * sdt2;
				let u_r = r1 / (r1 * r1 - .5 * r * r2);
				let t_r = -r * u_r;
				let g = -1.2684380046 * l + 2.6097574011 * m - .3413193965 * s - 1;
				let g1 = -1.2684380046 * ldt + 2.6097574011 * mdt - .3413193965 * sdt;
				let g2 = -1.2684380046 * ldt2 + 2.6097574011 * mdt2 - .3413193965 * sdt2;
				let u_g = g1 / (g1 * g1 - .5 * g * g2);
				let t_g = -g * u_g;
				let b = -.0041960863 * l - .7034186147 * m + 1.707614701 * s - 1;
				let b1 = -.0041960863 * ldt - .7034186147 * mdt + 1.707614701 * sdt;
				let b2 = -.0041960863 * ldt2 - .7034186147 * mdt2 + 1.707614701 * sdt2;
				let u_b = b1 / (b1 * b1 - .5 * b * b2);
				let t_b = -b * u_b;
				t_r = u_r >= 0 ? t_r : 1e6;
				t_g = u_g >= 0 ? t_g : 1e6;
				t_b = u_b >= 0 ? t_b : 1e6;
				t += Math.min(t_r, Math.min(t_g, t_b));
			}
		}
	}
	return t;
}
function get_ST_max(a_, b_, cusp = null) {
	if (!cusp) cusp = find_cusp(a_, b_);
	let L = cusp[0];
	let C = cusp[1];
	return [C / L, C / (1 - L)];
}
function get_Cs(L, a_, b_) {
	let cusp = find_cusp(a_, b_);
	let C_max = find_gamut_intersection(a_, b_, L, 1, L, cusp);
	let ST_max = get_ST_max(a_, b_, cusp);
	let S_mid = .11516993 + 1 / (7.4477897 + 4.1590124 * b_ + a_ * (-2.19557347 + 1.75198401 * b_ + a_ * (-2.13704948 - 10.02301043 * b_ + a_ * (-4.24894561 + 5.38770819 * b_ + 4.69891013 * a_))));
	let T_mid = .11239642 + 1 / (1.6132032 - .68124379 * b_ + a_ * (.40370612 + .90148123 * b_ + a_ * (-.27087943 + .6122399 * b_ + a_ * (.00299215 - .45399568 * b_ - .14661872 * a_))));
	let k = C_max / Math.min(L * ST_max[0], (1 - L) * ST_max[1]);
	let C_a = L * S_mid;
	let C_b = (1 - L) * T_mid;
	let C_mid = .9 * k * Math.sqrt(Math.sqrt(1 / (1 / (C_a * C_a * C_a * C_a) + 1 / (C_b * C_b * C_b * C_b))));
	C_a = L * .4;
	C_b = (1 - L) * .8;
	return [
		Math.sqrt(1 / (1 / (C_a * C_a) + 1 / (C_b * C_b))),
		C_mid,
		C_max
	];
}
//#endregion
//#region ../../node_modules/culori/src/okhsl/convertOklabToOkhsl.js
function convertOklabToOkhsl(lab) {
	const l = lab.l !== void 0 ? lab.l : 0;
	const a = lab.a !== void 0 ? lab.a : 0;
	const b = lab.b !== void 0 ? lab.b : 0;
	const ret = {
		mode: "okhsl",
		l: toe(l)
	};
	if (lab.alpha !== void 0) ret.alpha = lab.alpha;
	let c = Math.sqrt(a * a + b * b);
	if (!c) {
		ret.s = 0;
		return ret;
	}
	let [C_0, C_mid, C_max] = get_Cs(l, a / c, b / c);
	let s;
	if (c < C_mid) {
		let k_0 = 0;
		let k_1 = .8 * C_0;
		let k_2 = 1 - k_1 / C_mid;
		s = (c - k_0) / (k_1 + k_2 * (c - k_0)) * .8;
	} else {
		let k_0 = C_mid;
		let k_1 = .2 * C_mid * C_mid * 1.25 * 1.25 / C_0;
		let k_2 = 1 - k_1 / (C_max - C_mid);
		s = .8 + .2 * ((c - k_0) / (k_1 + k_2 * (c - k_0)));
	}
	if (s) {
		ret.s = s;
		ret.h = normalizeHue(Math.atan2(b, a) * 180 / Math.PI);
	}
	return ret;
}
//#endregion
//#region ../../node_modules/culori/src/okhsl/convertOkhslToOklab.js
function convertOkhslToOklab(hsl) {
	let h = hsl.h !== void 0 ? hsl.h : 0;
	let s = hsl.s !== void 0 ? hsl.s : 0;
	let l = hsl.l !== void 0 ? hsl.l : 0;
	const ret = {
		mode: "oklab",
		l: toe_inv(l)
	};
	if (hsl.alpha !== void 0) ret.alpha = hsl.alpha;
	if (!s || l === 1) {
		ret.a = ret.b = 0;
		return ret;
	}
	let a_ = Math.cos(h / 180 * Math.PI);
	let b_ = Math.sin(h / 180 * Math.PI);
	let [C_0, C_mid, C_max] = get_Cs(ret.l, a_, b_);
	let t, k_0, k_1, k_2;
	if (s < .8) {
		t = 1.25 * s;
		k_0 = 0;
		k_1 = .8 * C_0;
		k_2 = 1 - k_1 / C_mid;
	} else {
		t = 5 * (s - .8);
		k_0 = C_mid;
		k_1 = .2 * C_mid * C_mid * 1.25 * 1.25 / C_0;
		k_2 = 1 - k_1 / (C_max - C_mid);
	}
	let C = k_0 + t * k_1 / (1 - k_2 * t);
	ret.a = C * a_;
	ret.b = C * b_;
	return ret;
}
//#endregion
//#region ../../node_modules/culori/src/okhsl/modeOkhsl.js
var modeOkhsl = {
	...definition$21,
	mode: "okhsl",
	channels: [
		"h",
		"s",
		"l",
		"alpha"
	],
	parse: ["--okhsl"],
	serialize: "--okhsl",
	fromMode: {
		oklab: convertOklabToOkhsl,
		rgb: (c) => convertOklabToOkhsl(convertRgbToOklab(c))
	},
	toMode: {
		oklab: convertOkhslToOklab,
		rgb: (c) => convertOklabToRgb(convertOkhslToOklab(c))
	}
};
//#endregion
//#region ../../node_modules/culori/src/okhsv/convertOklabToOkhsv.js
function convertOklabToOkhsv(lab) {
	let l = lab.l !== void 0 ? lab.l : 0;
	let a = lab.a !== void 0 ? lab.a : 0;
	let b = lab.b !== void 0 ? lab.b : 0;
	let c = Math.sqrt(a * a + b * b);
	let a_ = c ? a / c : 1;
	let b_ = c ? b / c : 1;
	let [S_max, T] = get_ST_max(a_, b_);
	let S_0 = .5;
	let k = 1 - S_0 / S_max;
	let t = T / (c + l * T);
	let L_v = t * l;
	let C_v = t * c;
	let L_vt = toe_inv(L_v);
	let C_vt = C_v * L_vt / L_v;
	let rgb_scale = convertOklabToLrgb({
		l: L_vt,
		a: a_ * C_vt,
		b: b_ * C_vt
	});
	let scale_L = Math.cbrt(1 / Math.max(rgb_scale.r, rgb_scale.g, rgb_scale.b, 0));
	l = l / scale_L;
	c = c / scale_L * toe(l) / l;
	l = toe(l);
	const ret = {
		mode: "okhsv",
		s: c ? (S_0 + T) * C_v / (T * S_0 + T * k * C_v) : 0,
		v: l ? l / L_v : 0
	};
	if (ret.s) ret.h = normalizeHue(Math.atan2(b, a) * 180 / Math.PI);
	if (lab.alpha !== void 0) ret.alpha = lab.alpha;
	return ret;
}
//#endregion
//#region ../../node_modules/culori/src/okhsv/convertOkhsvToOklab.js
function convertOkhsvToOklab(hsv) {
	const ret = { mode: "oklab" };
	if (hsv.alpha !== void 0) ret.alpha = hsv.alpha;
	const h = hsv.h !== void 0 ? hsv.h : 0;
	const s = hsv.s !== void 0 ? hsv.s : 0;
	const v = hsv.v !== void 0 ? hsv.v : 0;
	const a_ = Math.cos(h / 180 * Math.PI);
	const b_ = Math.sin(h / 180 * Math.PI);
	const [S_max, T] = get_ST_max(a_, b_);
	const S_0 = .5;
	const k = 1 - S_0 / S_max;
	const L_v = 1 - s * S_0 / (S_0 + T - T * k * s);
	const C_v = s * T * S_0 / (S_0 + T - T * k * s);
	const L_vt = toe_inv(L_v);
	const C_vt = C_v * L_vt / L_v;
	const rgb_scale = convertOklabToLrgb({
		l: L_vt,
		a: a_ * C_vt,
		b: b_ * C_vt
	});
	const scale_L = Math.cbrt(1 / Math.max(rgb_scale.r, rgb_scale.g, rgb_scale.b, 0));
	const L_new = toe_inv(v * L_v);
	const C = C_v * L_new / L_v;
	ret.l = L_new * scale_L;
	ret.a = C * a_ * scale_L;
	ret.b = C * b_ * scale_L;
	return ret;
}
//#endregion
//#region ../../node_modules/culori/src/okhsv/modeOkhsv.js
var modeOkhsv = {
	...definition$20,
	mode: "okhsv",
	channels: [
		"h",
		"s",
		"v",
		"alpha"
	],
	parse: ["--okhsv"],
	serialize: "--okhsv",
	fromMode: {
		oklab: convertOklabToOkhsv,
		rgb: (c) => convertOklabToOkhsv(convertRgbToOklab(c))
	},
	toMode: {
		oklab: convertOkhsvToOklab,
		rgb: (c) => convertOklabToRgb(convertOkhsvToOklab(c))
	}
};
//#endregion
//#region ../../node_modules/culori/src/oklab/parseOklab.js
function parseOklab(color, parsed) {
	if (!parsed || parsed[0] !== "oklab") return;
	const res = { mode: "oklab" };
	const [, l, a, b, alpha] = parsed;
	if (l.type === Tok.Hue || a.type === Tok.Hue || b.type === Tok.Hue) return;
	if (l.type !== Tok.None) res.l = Math.min(Math.max(0, l.type === Tok.Number ? l.value : l.value / 100), 1);
	if (a.type !== Tok.None) res.a = a.type === Tok.Number ? a.value : a.value * .4 / 100;
	if (b.type !== Tok.None) res.b = b.type === Tok.Number ? b.value : b.value * .4 / 100;
	if (alpha.type !== Tok.None) res.alpha = Math.min(1, Math.max(0, alpha.type === Tok.Number ? alpha.value : alpha.value / 100));
	return res;
}
//#endregion
//#region ../../node_modules/culori/src/oklab/definition.js
var definition$8 = {
	...definition$15,
	mode: "oklab",
	toMode: {
		lrgb: convertOklabToLrgb,
		rgb: convertOklabToRgb
	},
	fromMode: {
		lrgb: convertLrgbToOklab,
		rgb: convertRgbToOklab
	},
	ranges: {
		l: [0, 1],
		a: [-.4, .4],
		b: [-.4, .4]
	},
	parse: [parseOklab],
	serialize: (c) => `oklab(${c.l !== void 0 ? c.l : "none"} ${c.a !== void 0 ? c.a : "none"} ${c.b !== void 0 ? c.b : "none"}${c.alpha < 1 ? ` / ${c.alpha}` : ""})`
};
//#endregion
//#region ../../node_modules/culori/src/oklch/parseOklch.js
function parseOklch(color, parsed) {
	if (!parsed || parsed[0] !== "oklch") return;
	const res = { mode: "oklch" };
	const [, l, c, h, alpha] = parsed;
	if (l.type !== Tok.None) {
		if (l.type === Tok.Hue) return;
		res.l = Math.min(Math.max(0, l.type === Tok.Number ? l.value : l.value / 100), 1);
	}
	if (c.type !== Tok.None) res.c = Math.max(0, c.type === Tok.Number ? c.value : c.value * .4 / 100);
	if (h.type !== Tok.None) {
		if (h.type === Tok.Percentage) return;
		res.h = h.value;
	}
	if (alpha.type !== Tok.None) res.alpha = Math.min(1, Math.max(0, alpha.type === Tok.Number ? alpha.value : alpha.value / 100));
	return res;
}
//#endregion
//#region ../../node_modules/culori/src/oklch/definition.js
var definition$7 = {
	...definition$13,
	mode: "oklch",
	toMode: {
		oklab: (c) => convertLchToLab(c, "oklab"),
		rgb: (c) => convertOklabToRgb(convertLchToLab(c, "oklab"))
	},
	fromMode: {
		rgb: (c) => convertLabToLch(convertRgbToOklab(c), "oklch"),
		oklab: (c) => convertLabToLch(c, "oklch")
	},
	parse: [parseOklch],
	serialize: (c) => `oklch(${c.l !== void 0 ? c.l : "none"} ${c.c !== void 0 ? c.c : "none"} ${c.h !== void 0 ? c.h : "none"}${c.alpha < 1 ? ` / ${c.alpha}` : ""})`,
	ranges: {
		l: [0, 1],
		c: [0, .4],
		h: [0, 360]
	}
};
//#endregion
//#region ../../node_modules/culori/src/p3/convertP3ToXyz65.js
var convertP3ToXyz65 = (rgb) => {
	let { r, g, b, alpha } = convertRgbToLrgb(rgb);
	let res = {
		mode: "xyz65",
		x: .486570948648216 * r + .265667693169093 * g + .1982172852343625 * b,
		y: .2289745640697487 * r + .6917385218365062 * g + .079286914093745 * b,
		z: 0 * r + .0451133818589026 * g + 1.043944368900976 * b
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/p3/convertXyz65ToP3.js
var convertXyz65ToP3 = ({ x, y, z, alpha }) => {
	if (x === void 0) x = 0;
	if (y === void 0) y = 0;
	if (z === void 0) z = 0;
	let res = convertLrgbToRgb({
		r: x * 2.4934969119414263 - y * .9313836179191242 - .402710784450717 * z,
		g: x * -.8294889695615749 + y * 1.7626640603183465 + .0236246858419436 * z,
		b: x * .0358458302437845 - y * .0761723892680418 + .9568845240076871 * z
	}, "p3");
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/p3/definition.js
var definition$6 = {
	...definition$27,
	mode: "p3",
	parse: ["display-p3"],
	serialize: "display-p3",
	fromMode: {
		rgb: (color) => convertXyz65ToP3(convertRgbToXyz65(color)),
		xyz65: convertXyz65ToP3
	},
	toMode: {
		rgb: (color) => convertXyz65ToRgb(convertP3ToXyz65(color)),
		xyz65: convertP3ToXyz65
	}
};
//#endregion
//#region ../../node_modules/culori/src/prophoto/convertXyz50ToProphoto.js
var gamma$1 = (v) => {
	let abs = Math.abs(v);
	if (abs >= 1 / 512) return Math.sign(v) * Math.pow(abs, 1 / 1.8);
	return 16 * v;
};
var convertXyz50ToProphoto = ({ x, y, z, alpha }) => {
	if (x === void 0) x = 0;
	if (y === void 0) y = 0;
	if (z === void 0) z = 0;
	let res = {
		mode: "prophoto",
		r: gamma$1(x * 1.3457868816471585 - y * .2555720873797946 - .0511018649755453 * z),
		g: gamma$1(x * -.5446307051249019 + y * 1.5082477428451466 + .0205274474364214 * z),
		b: gamma$1(x * 0 + y * 0 + 1.2119675456389452 * z)
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/prophoto/convertProphotoToXyz50.js
var linearize$1 = (v = 0) => {
	let abs = Math.abs(v);
	if (abs >= 16 / 512) return Math.sign(v) * Math.pow(abs, 1.8);
	return v / 16;
};
var convertProphotoToXyz50 = (prophoto) => {
	let r = linearize$1(prophoto.r);
	let g = linearize$1(prophoto.g);
	let b = linearize$1(prophoto.b);
	let res = {
		mode: "xyz50",
		x: .7977666449006423 * r + .1351812974005331 * g + .0313477341283922 * b,
		y: .2880748288194013 * r + .7118352342418731 * g + 899369387256e-16 * b,
		z: 0 * r + 0 * g + .8251046025104602 * b
	};
	if (prophoto.alpha !== void 0) res.alpha = prophoto.alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/prophoto/definition.js
var definition$5 = {
	...definition$27,
	mode: "prophoto",
	parse: ["prophoto-rgb"],
	serialize: "prophoto-rgb",
	fromMode: {
		xyz50: convertXyz50ToProphoto,
		rgb: (color) => convertXyz50ToProphoto(convertRgbToXyz50(color))
	},
	toMode: {
		xyz50: convertProphotoToXyz50,
		rgb: (color) => convertXyz50ToRgb(convertProphotoToXyz50(color))
	}
};
//#endregion
//#region ../../node_modules/culori/src/rec2020/convertXyz65ToRec2020.js
var α$1 = 1.09929682680944;
var β$1 = .018053968510807;
var gamma = (v) => {
	const abs = Math.abs(v);
	if (abs > β$1) return (Math.sign(v) || 1) * (α$1 * Math.pow(abs, .45) - (α$1 - 1));
	return 4.5 * v;
};
var convertXyz65ToRec2020 = ({ x, y, z, alpha }) => {
	if (x === void 0) x = 0;
	if (y === void 0) y = 0;
	if (z === void 0) z = 0;
	let res = {
		mode: "rec2020",
		r: gamma(x * 1.7166511879712683 - y * .3556707837763925 - .2533662813736599 * z),
		g: gamma(x * -.6666843518324893 + y * 1.6164812366349395 + .0157685458139111 * z),
		b: gamma(x * .0176398574453108 - y * .0427706132578085 + .9421031212354739 * z)
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/rec2020/convertRec2020ToXyz65.js
var α = 1.09929682680944;
var β = .018053968510807;
var linearize = (v = 0) => {
	let abs = Math.abs(v);
	if (abs < β * 4.5) return v / 4.5;
	return (Math.sign(v) || 1) * Math.pow((abs + α - 1) / α, 1 / .45);
};
var convertRec2020ToXyz65 = (rec2020) => {
	let r = linearize(rec2020.r);
	let g = linearize(rec2020.g);
	let b = linearize(rec2020.b);
	let res = {
		mode: "xyz65",
		x: .6369580483012911 * r + .1446169035862083 * g + .1688809751641721 * b,
		y: .262700212011267 * r + .6779980715188708 * g + .059301716469862 * b,
		z: 0 * r + .0280726930490874 * g + 1.0609850577107909 * b
	};
	if (rec2020.alpha !== void 0) res.alpha = rec2020.alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/rec2020/definition.js
var definition$4 = {
	...definition$27,
	mode: "rec2020",
	fromMode: {
		xyz65: convertXyz65ToRec2020,
		rgb: (color) => convertXyz65ToRec2020(convertRgbToXyz65(color))
	},
	toMode: {
		xyz65: convertRec2020ToXyz65,
		rgb: (color) => convertXyz65ToRgb(convertRec2020ToXyz65(color))
	},
	parse: ["rec2020"],
	serialize: "rec2020"
};
//#endregion
//#region ../../node_modules/culori/src/xyb/constants.js
var bias = .0037930732552754493;
var bias_cbrt = Math.cbrt(bias);
//#endregion
//#region ../../node_modules/culori/src/xyb/convertRgbToXyb.js
var transfer$1 = (v) => Math.cbrt(v) - bias_cbrt;
var convertRgbToXyb = (color) => {
	const { r, g, b, alpha } = convertRgbToLrgb(color);
	const l = transfer$1(.3 * r + .622 * g + .078 * b + bias);
	const m = transfer$1(.23 * r + .692 * g + .078 * b + bias);
	const s = transfer$1(.2434226892454782 * r + .2047674442449682 * g + .5518098665095535 * b + bias);
	const res = {
		mode: "xyb",
		x: (l - m) / 2,
		y: (l + m) / 2,
		b: s - (l + m) / 2
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/xyb/convertXybToRgb.js
var transfer = (v) => Math.pow(v + bias_cbrt, 3);
var convertXybToRgb = ({ x, y, b, alpha }) => {
	if (x === void 0) x = 0;
	if (y === void 0) y = 0;
	if (b === void 0) b = 0;
	const l = transfer(x + y) - bias;
	const m = transfer(y - x) - bias;
	const s = transfer(b + y) - bias;
	const res = convertLrgbToRgb({
		r: 11.031566904639861 * l - 9.866943908131562 * m - .16462299650829934 * s,
		g: -3.2541473810744237 * l + 4.418770377582723 * m - .16462299650829934 * s,
		b: -3.6588512867136815 * l + 2.7129230459360922 * m + 1.9459282407775895 * s
	});
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/xyb/definition.js
var definition$3 = {
	mode: "xyb",
	channels: [
		"x",
		"y",
		"b",
		"alpha"
	],
	parse: ["--xyb"],
	serialize: "--xyb",
	toMode: { rgb: convertXybToRgb },
	fromMode: { rgb: convertRgbToXyb },
	ranges: {
		x: [-.0154, .0281],
		y: [0, .8453],
		b: [-.2778, .388]
	},
	interpolate: {
		x: interpolatorLinear,
		y: interpolatorLinear,
		b: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	}
};
//#endregion
//#region ../../node_modules/culori/src/xyz50/definition.js
var definition$2 = {
	mode: "xyz50",
	parse: ["xyz-d50"],
	serialize: "xyz-d50",
	toMode: {
		rgb: convertXyz50ToRgb,
		lab: convertXyz50ToLab
	},
	fromMode: {
		rgb: convertRgbToXyz50,
		lab: convertLabToXyz50
	},
	channels: [
		"x",
		"y",
		"z",
		"alpha"
	],
	ranges: {
		x: [0, .964],
		y: [0, .999],
		z: [0, .825]
	},
	interpolate: {
		x: interpolatorLinear,
		y: interpolatorLinear,
		z: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	}
};
//#endregion
//#region ../../node_modules/culori/src/xyz65/convertXyz65ToXyz50.js
var convertXyz65ToXyz50 = (xyz65) => {
	let { x, y, z, alpha } = xyz65;
	if (x === void 0) x = 0;
	if (y === void 0) y = 0;
	if (z === void 0) z = 0;
	let res = {
		mode: "xyz50",
		x: 1.0479298208405488 * x + .0229467933410191 * y - .0501922295431356 * z,
		y: .0296278156881593 * x + .990434484573249 * y - .0170738250293851 * z,
		z: -.0092430581525912 * x + .0150551448965779 * y + .7518742899580008 * z
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/xyz65/convertXyz50ToXyz65.js
var convertXyz50ToXyz65 = (xyz50) => {
	let { x, y, z, alpha } = xyz50;
	if (x === void 0) x = 0;
	if (y === void 0) y = 0;
	if (z === void 0) z = 0;
	let res = {
		mode: "xyz65",
		x: .9554734527042182 * x - .0230985368742614 * y + .0632593086610217 * z,
		y: -.0283697069632081 * x + 1.0099954580058226 * y + .021041398966943 * z,
		z: .0123140016883199 * x - .0205076964334779 * y + 1.3303659366080753 * z
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/xyz65/definition.js
var definition$1 = {
	mode: "xyz65",
	toMode: {
		rgb: convertXyz65ToRgb,
		xyz50: convertXyz65ToXyz50
	},
	fromMode: {
		rgb: convertRgbToXyz65,
		xyz50: convertXyz50ToXyz65
	},
	ranges: {
		x: [0, .95],
		y: [0, 1],
		z: [0, 1.088]
	},
	channels: [
		"x",
		"y",
		"z",
		"alpha"
	],
	parse: ["xyz", "xyz-d65"],
	serialize: "xyz-d65",
	interpolate: {
		x: interpolatorLinear,
		y: interpolatorLinear,
		z: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	}
};
//#endregion
//#region ../../node_modules/culori/src/yiq/convertRgbToYiq.js
var convertRgbToYiq = ({ r, g, b, alpha }) => {
	if (r === void 0) r = 0;
	if (g === void 0) g = 0;
	if (b === void 0) b = 0;
	const res = {
		mode: "yiq",
		y: .29889531 * r + .58662247 * g + .11448223 * b,
		i: .59597799 * r - .2741761 * g - .32180189 * b,
		q: .21147017 * r - .52261711 * g + .31114694 * b
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/yiq/convertYiqToRgb.js
var convertYiqToRgb = ({ y, i, q, alpha }) => {
	if (y === void 0) y = 0;
	if (i === void 0) i = 0;
	if (q === void 0) q = 0;
	const res = {
		mode: "rgb",
		r: y + .95608445 * i + .6208885 * q,
		g: y - .27137664 * i - .6486059 * q,
		b: y - 1.10561724 * i + 1.70250126 * q
	};
	if (alpha !== void 0) res.alpha = alpha;
	return res;
};
//#endregion
//#region ../../node_modules/culori/src/yiq/definition.js
var definition = {
	mode: "yiq",
	toMode: { rgb: convertYiqToRgb },
	fromMode: { rgb: convertRgbToYiq },
	channels: [
		"y",
		"i",
		"q",
		"alpha"
	],
	parse: ["--yiq"],
	serialize: "--yiq",
	ranges: {
		i: [-.595, .595],
		q: [-.522, .522]
	},
	interpolate: {
		y: interpolatorLinear,
		i: interpolatorLinear,
		q: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	}
};
useMode(definition$26);
useMode(definition$25);
useMode(definition$24);
useMode(definition$23);
useMode(definition$22);
useMode(definition$21);
useMode(definition$20);
useMode(definition$19);
useMode(definition$18);
useMode(definition$17);
useMode(definition$16);
useMode(definition$15);
useMode(definition$14);
useMode(definition$13);
useMode(definition$12);
useMode(definition$11);
useMode(definition$10);
useMode(definition$9);
useMode(modeOkhsl);
useMode(modeOkhsv);
useMode(definition$8);
var oklch = useMode(definition$7);
useMode(definition$6);
useMode(definition$5);
useMode(definition$4);
useMode(definition$27);
useMode(definition$3);
useMode(definition$2);
useMode(definition$1);
useMode(definition);
//#endregion
//#region ../../modules/projects/lur.e/src/design/color/StyleRules.ts
var isValidColor = (color) => Boolean(parse(color));
var registerColorProperty = (name, initialValue = "#5a9ec8") => {
	try {
		CSS?.registerProperty?.({
			name,
			syntax: "<color>",
			inherits: true,
			initialValue
		});
	} catch (error) {
		console.debug(error);
	}
};
/**
* Set brand seed on `:root`. Prefer {@link applyThemeFromWallpaper} from `fest/image`
* when the source is a wallpaper; this helper remains for manual / persisted overrides.
*/
var updateThemeBase = async (originColor = null) => {
	const primaryRef = localStorageRef("--primary", originColor);
	if (originColor != null && primaryRef.value != originColor) primaryRef.value = originColor;
	const seed = String(primaryRef.value || originColor || "").trim();
	if (!isValidColor(seed)) return;
	registerColorProperty("--color-primary", seed);
	registerColorProperty("--base-color", seed);
	registerColorProperty("--wf-md-primary", seed);
	registerColorProperty("--wf-md-seed", seed);
	E(document.documentElement, { style: {
		"--primary": primaryRef,
		...seed ? {
			"--color-primary": seed,
			"--base-color": seed,
			"--wf-md-primary": seed,
			"--wf-md-seed": seed
		} : {}
	} });
	const globalQuery = Q("body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host");
	globalQuery.style.setProperty("--color-primary", seed);
	globalQuery.style.setProperty("--base-color", seed);
	globalQuery.style.setProperty("--wf-md-primary", seed);
	globalQuery.style.setProperty("--wf-md-seed", seed);
	if (seed) document.dispatchEvent(new CustomEvent("u2-theme-change", { detail: {
		source: "style-rules",
		primary: seed
	} }));
	return [primaryRef];
};
//#endregion
//#region ../../modules/projects/lur.e/src/lure/core/FormBinding.ts
/**
* Lifecycle-aware form control bindings built on existing Linker presets.
* Keeps form semantics in Links/object while Binding owns connection tracking.
*/
/**
* Bind a control through the Linker presets, optionally tracking mount/unmount.
* The returned disposer is also attached to a reactive ref's Symbol.dispose.
*/
var bindFormControl = (element, value, kind = "text", options = {}) => {
	if (!element) return () => {};
	const bind = () => formLink(element, value, kind, options) ?? (() => {});
	const dispose = options.connect === false ? bind() : bindWhileConnected(element, bind);
	if (value && (typeof value === "object" || typeof value === "function")) addToCallChain(value, Symbol.dispose, dispose);
	return dispose;
};
/** Create a type-appropriate ref and bind it to a common form control family. */
var formRef = (element, kind = "text", options = {}) => {
	const initial = options.initial;
	const value = kind === "number" ? numberRef(Number(initial) || 0) : kind === "checked" ? booleanRef(Boolean(initial)) : stringRef(initial == null ? "" : String(initial));
	bindFormControl(element, value, kind, options);
	return value;
};
//#endregion
//#region ../../modules/projects/lur.e/src/utils/opfs/file-utils.ts
/**
* File Utilities
*
* Common file handling utilities used across views.
*/
/**
* Check if a file is a markdown file
*/
function isMarkdownFile(file) {
	const name = typeof file === "string" ? file : file.name;
	const type = typeof file === "string" ? "" : file.type;
	return /\.(md|markdown|mdown|mkd|mkdn|mdtxt|mdtext)$/i.test(name) || type === "text/markdown";
}
/**
* Check if a file is a text file
*/
function isTextFile(file) {
	const name = typeof file === "string" ? file : file.name;
	if ((typeof file === "string" ? "" : file.type).startsWith("text/")) return true;
	return /\.(txt|text|log|json|xml|yaml|yml|toml|ini|cfg|conf)$/i.test(name);
}
/**
* Check if a file is an image
*/
function isImageFile(file) {
	const name = typeof file === "string" ? file : file.name;
	if ((typeof file === "string" ? "" : file.type).startsWith("image/")) return true;
	return /\.(jpg|jpeg|png|gif|webp|svg|bmp|ico|avif)$/i.test(name);
}
/**
* Check if a file is a code file
*/
function isCodeFile(file) {
	const name = typeof file === "string" ? file : file.name;
	return /\.(js|ts|jsx|tsx|py|rb|go|rs|c|cpp|h|hpp|java|kt|swift|php|cs|css|scss|sass|less|html|vue|svelte)$/i.test(name);
}
/**
* Read a file as text
*/
async function readFileAsText(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result);
		reader.onerror = () => reject(/* @__PURE__ */ new Error("Failed to read file"));
		reader.readAsText(file);
	});
}
/**
* Read a file as data URL
*/
async function readFileAsDataURL(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result);
		reader.onerror = () => reject(/* @__PURE__ */ new Error("Failed to read file"));
		reader.readAsDataURL(file);
	});
}
/**
* Read a file as array buffer
*/
async function readFileAsArrayBuffer(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result);
		reader.onerror = () => reject(/* @__PURE__ */ new Error("Failed to read file"));
		reader.readAsArrayBuffer(file);
	});
}
/**
* Create a text file
*/
function createTextFile(content, filename, mimeType = "text/plain") {
	return new File([content], filename, { type: mimeType });
}
/**
* Create a markdown file
*/
function createMarkdownFile(content, filename = "document.md") {
	return new File([content], filename, { type: "text/markdown" });
}
/**
* Create a JSON file
*/
function createJsonFile(data, filename = "data.json") {
	const content = JSON.stringify(data, null, 2);
	return new File([content], filename, { type: "application/json" });
}
/**
* Trigger a file download
*/
/**
* Download text content as a file
*/
function downloadTextFile(content, filename, mimeType = "text/plain") {
	downloadFile(new Blob([content], { type: mimeType }), filename);
}
/**
* Download markdown content
*/
function downloadMarkdown(content, filename = "document.md") {
	downloadTextFile(content, filename, "text/markdown");
}
/**
* Open a file picker dialog
*/
async function pickFile(accept = "*") {
	return new Promise((resolve) => {
		const input = document.createElement("input");
		input.type = "file";
		input.accept = accept;
		input.onchange = () => {
			resolve(input.files?.[0] || null);
		};
		input.oncancel = () => resolve(null);
		input.click();
	});
}
/**
* Open a file picker for multiple files
*/
async function pickFiles(accept = "*") {
	return new Promise((resolve) => {
		const input = document.createElement("input");
		input.type = "file";
		input.accept = accept;
		input.multiple = true;
		input.onchange = () => {
			resolve(Array.from(input.files || []));
		};
		input.oncancel = () => resolve([]);
		input.click();
	});
}
/**
* Save file using File System Access API (with fallback)
*/
async function saveFile(content, suggestedName = "document.md", types = [{
	description: "Markdown",
	accept: { "text/markdown": [".md"] }
}]) {
	try {
		if ("showSaveFilePicker" in window) {
			const writable = await (await window.showSaveFilePicker({
				suggestedName,
				types
			})).createWritable();
			await writable.write(content);
			await writable.close();
			return true;
		}
	} catch (error) {
		if (error.name === "AbortError") return false;
	}
	downloadTextFile(content, suggestedName);
	return true;
}
/**
* Open file using File System Access API (with fallback)
*/
async function openFile(types = [{
	description: "Markdown",
	accept: { "text/markdown": [".md", ".markdown"] }
}]) {
	try {
		if ("showOpenFilePicker" in window) {
			const [handle] = await window.showOpenFilePicker({ types });
			const file = await handle.getFile();
			return {
				content: await file.text(),
				filename: file.name
			};
		}
	} catch (error) {
		if (error.name === "AbortError") return null;
	}
	const file = await pickFile();
	if (!file) return null;
	return {
		content: await readFileAsText(file),
		filename: file.name
	};
}
//#endregion
//#region ../../modules/projects/lur.e/src/utils/opfs/content-addressed-store.ts
var normalizeNamespace = (namespace) => {
	const segments = String(namespace || "").split("/").filter(Boolean);
	if (!segments.length || segments.some((segment) => segment === "." || segment === "..")) throw new Error("A non-empty safe storage namespace is required");
	return `/${segments.join("/")}`;
};
var toSafePath = (namespace, candidate = "") => {
	const raw = String(candidate || "").trim();
	const segments = (raw.startsWith("/") ? raw : `${namespace}/${raw}`).split("/").filter(Boolean);
	if (!segments.length || segments.some((segment) => segment === "." || segment === "..")) throw new Error("Unsafe OPFS storage path");
	const normalized = `/${segments.join("/")}`;
	if (normalized !== namespace && !normalized.startsWith(`${namespace}/`)) throw new Error("Storage path escapes its namespace");
	return normalized;
};
var toHex = (bytes) => [...new Uint8Array(bytes)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
/** SHA-256 file identity, stable across filename and MIME changes. */
var hashBlob = async (blob) => {
	if (!globalThis.crypto?.subtle) throw new Error("Web Crypto is required for content-addressed storage");
	return toHex(await globalThis.crypto.subtle.digest("SHA-256", await blob.arrayBuffer()));
};
var nativeBackendPromise = null;
var getNativeBackend = () => {
	nativeBackendPromise ??= __vitePreload(async () => {
		const { readFile, removeFile, writeFile } = await import("./core5.js").then((n) => n.t);
		return {
			readFile,
			removeFile,
			writeFile
		};
	}, __vite__mapDeps([0,1,2,3,4,5]), import.meta.url).then(({ readFile, removeFile, writeFile }) => ({
		async read(path) {
			return await readFile(null, path).catch(() => null);
		},
		async write(path, data) {
			if (!await writeFile(null, path, typeof data === "string" ? new Blob([data], { type: "application/json" }) : data).catch(() => false)) throw new Error(`Could not write ${path}`);
		},
		async removeTree(prefix) {
			if (!await removeFile(null, prefix, { recursive: true }).catch(() => false)) throw new Error(`Could not clear ${prefix}`);
		}
	}));
	return nativeBackendPromise;
};
/**
* Creates an isolated blob/manifest store under an OPFS namespace.
*
* `backend` exists for deterministic tests and must implement the same
* namespace behavior as the native OPFS bridge.
*/
var createContentAddressedStore = (namespace, backend) => {
	const root = normalizeNamespace(namespace);
	const resolveBackend = () => backend ? Promise.resolve(backend) : getNativeBackend();
	return {
		async put(file) {
			if (!(file instanceof File)) throw new TypeError("Content store accepts File instances only");
			const hash = await hashBlob(file);
			const path = toSafePath(root, `blobs/${hash}`);
			const storage = await resolveBackend();
			if (!await storage.read(path)) await storage.write(path, file);
			return {
				hash,
				path,
				name: file.name || "attachment",
				type: file.type || "application/octet-stream",
				size: file.size,
				lastModified: file.lastModified || Date.now()
			};
		},
		async get(ref) {
			try {
				if (!ref?.path || !ref?.hash) return null;
				const path = toSafePath(root, ref.path);
				const blob = await (await resolveBackend()).read(path);
				if (!blob) return null;
				return new File([blob], ref.name || "attachment", {
					type: ref.type || blob.type || "application/octet-stream",
					lastModified: ref.lastModified || Date.now()
				});
			} catch {
				return null;
			}
		},
		async readJson(path) {
			try {
				const blob = await (await resolveBackend()).read(toSafePath(root, path));
				if (!blob) return null;
				return JSON.parse(await blob.text());
			} catch {
				return null;
			}
		},
		async writeJson(path, value) {
			await (await resolveBackend()).write(toSafePath(root, path), new Blob([JSON.stringify(value)], { type: "application/json" }));
		},
		async clear(prefix = "") {
			await (await resolveBackend()).removeTree(toSafePath(root, prefix));
		}
	};
};
//#endregion
//#region ../../modules/projects/lur.e/src/utils/opfs/index.ts
/**
* Storage Module
*
* Unified storage utilities for persistent state.
* Provides wrappers for localStorage, sessionStorage, and IndexedDB.
*/
/**
* Common storage keys used across the app
*/
var StorageKeys = {
	FRONTEND_CHOICE: "rs-frontend-choice",
	FRONTEND_REMEMBER: "rs-frontend-choice-remember",
	THEME: "rs-theme",
	SETTINGS: "rs-settings",
	BOOT_STYLE: "rs-boot-style",
	BOOT_SHELL: "rs-boot-shell",
	/** Last-focused app window shell (JSON `{ shell, t }`); see shell-preference.ts */
	BOOT_SHELL_LAST_ACTIVE: "rs-boot-shell-last-active",
	BOOT_VIEW: "rs-boot-view",
	BOOT_REMEMBER: "rs-boot-remember",
	SHELL_CHOICE: "rs-shell-choice",
	SHELL_REMEMBER: "rs-shell-remember",
	WORKCENTER_STATE: "rs-workcenter-state",
	VIEWER_STATE: "rs-viewer-state",
	EDITOR_STATE: "rs-editor-state",
	EXPLORER_STATE: "view-explorer-state",
	EXPLORER_PATH: "view-explorer-path",
	LAST_MARKDOWN: "rs-last-markdown",
	HISTORY: "rs-history",
	RECENT_FILES: "rs-recent-files",
	AI_CONFIG: "rs-ai-config"
};
/**
* Get item from localStorage with type safety
*/
function getItem(key, defaultValue) {
	try {
		const stored = localStorage.getItem(key);
		if (stored === null) return defaultValue;
		return JSON.parse(stored);
	} catch {
		return defaultValue;
	}
}
/**
* Set item in localStorage
*/
function setItem(key, value) {
	try {
		localStorage.setItem(key, JSON.stringify(value));
		return true;
	} catch {
		return false;
	}
}
/**
* Remove item from localStorage
*/
function removeItem(key) {
	try {
		localStorage.removeItem(key);
		return true;
	} catch {
		return false;
	}
}
/**
* Get raw string from localStorage
*/
function getString(key, defaultValue = "") {
	try {
		return localStorage.getItem(key) || defaultValue;
	} catch {
		return defaultValue;
	}
}
/**
* Set raw string to localStorage
*/
function setString(key, value) {
	try {
		localStorage.setItem(key, value);
		return true;
	} catch {
		return false;
	}
}
/**
* Check if localStorage is available
*/
function isLocalStorageAvailable() {
	try {
		const test = "__storage_test__";
		localStorage.setItem(test, test);
		localStorage.removeItem(test);
		return true;
	} catch {
		return false;
	}
}
/**
* Get item from sessionStorage
*/
function getSessionItem(key, defaultValue) {
	try {
		const stored = sessionStorage.getItem(key);
		if (stored === null) return defaultValue;
		return JSON.parse(stored);
	} catch {
		return defaultValue;
	}
}
/**
* Set item in sessionStorage
*/
function setSessionItem(key, value) {
	try {
		sessionStorage.setItem(key, JSON.stringify(value));
		return true;
	} catch {
		return false;
	}
}
/**
* Remove item from sessionStorage
*/
function removeSessionItem(key) {
	try {
		sessionStorage.removeItem(key);
		return true;
	} catch {
		return false;
	}
}
var DEFAULT_DB_NAME = "crossword-storage";
var DEFAULT_STORE_NAME = "keyvalue";
var DB_VERSION = 1;
var dbPromise = null;
/**
* Get IndexedDB database instance
*/
function getDB(dbName = DEFAULT_DB_NAME, storeName = DEFAULT_STORE_NAME) {
	if (dbPromise) return dbPromise;
	dbPromise = new Promise((resolve, reject) => {
		const request = indexedDB.open(dbName, DB_VERSION);
		request.onerror = () => reject(request.error);
		request.onsuccess = () => resolve(request.result);
		request.onupgradeneeded = () => {
			const db = request.result;
			if (!db.objectStoreNames.contains(storeName)) db.createObjectStore(storeName);
		};
	});
	return dbPromise;
}
/**
* Get value from IndexedDB
*/
async function getIDBItem(key) {
	try {
		const db = await getDB();
		return new Promise((resolve, reject) => {
			const request = db.transaction(DEFAULT_STORE_NAME, "readonly").objectStore(DEFAULT_STORE_NAME).get(key);
			request.onerror = () => reject(request.error);
			request.onsuccess = () => resolve(request.result ?? null);
		});
	} catch {
		return null;
	}
}
/**
* Set value in IndexedDB
*/
async function setIDBItem(key, value) {
	try {
		const db = await getDB();
		return new Promise((resolve, reject) => {
			const request = db.transaction(DEFAULT_STORE_NAME, "readwrite").objectStore(DEFAULT_STORE_NAME).put(value, key);
			request.onerror = () => reject(request.error);
			request.onsuccess = () => resolve(true);
		});
	} catch {
		return false;
	}
}
/**
* Remove value from IndexedDB
*/
async function removeIDBItem(key) {
	try {
		const db = await getDB();
		return new Promise((resolve, reject) => {
			const request = db.transaction(DEFAULT_STORE_NAME, "readwrite").objectStore(DEFAULT_STORE_NAME).delete(key);
			request.onerror = () => reject(request.error);
			request.onsuccess = () => resolve(true);
		});
	} catch {
		return false;
	}
}
/**
* IndexedDB wrapper for structured object storage
*/
var IDBStorage = class {
	dbName;
	storeName;
	db = null;
	constructor(dbName, storeName) {
		this.dbName = dbName;
		this.storeName = storeName;
	}
	async open() {
		if (this.db) return this.db;
		return new Promise((resolve, reject) => {
			const request = indexedDB.open(this.dbName, 1);
			request.onerror = () => reject(request.error);
			request.onsuccess = () => {
				this.db = request.result;
				resolve(this.db);
			};
			request.onupgradeneeded = (event) => {
				const db = event.target.result;
				if (!db.objectStoreNames.contains(this.storeName)) db.createObjectStore(this.storeName, { keyPath: "id" });
			};
		});
	}
	async get(id) {
		const db = await this.open();
		return new Promise((resolve, reject) => {
			const request = db.transaction([this.storeName], "readonly").objectStore(this.storeName).get(id);
			request.onerror = () => reject(request.error);
			request.onsuccess = () => resolve(request.result || null);
		});
	}
	async set(id, value) {
		const db = await this.open();
		return new Promise((resolve, reject) => {
			const request = db.transaction([this.storeName], "readwrite").objectStore(this.storeName).put({
				id,
				...value
			});
			request.onerror = () => reject(request.error);
			request.onsuccess = () => resolve();
		});
	}
	async delete(id) {
		const db = await this.open();
		return new Promise((resolve, reject) => {
			const request = db.transaction([this.storeName], "readwrite").objectStore(this.storeName).delete(id);
			request.onerror = () => reject(request.error);
			request.onsuccess = () => resolve();
		});
	}
	async getAll() {
		const db = await this.open();
		return new Promise((resolve, reject) => {
			const request = db.transaction([this.storeName], "readonly").objectStore(this.storeName).getAll();
			request.onerror = () => reject(request.error);
			request.onsuccess = () => resolve(request.result || []);
		});
	}
	async clear() {
		const db = await this.open();
		return new Promise((resolve, reject) => {
			const request = db.transaction([this.storeName], "readwrite").objectStore(this.storeName).clear();
			request.onerror = () => reject(request.error);
			request.onsuccess = () => resolve();
		});
	}
	close() {
		this.db?.close();
		this.db = null;
	}
};
/** WorkCenter data storage */
var workCenterStorage = new IDBStorage("rs-workcenter", "data");
/** History entries storage */
var historyStorage = new IDBStorage("rs-history", "entries");
/** Settings/config storage */
var settingsStorage = new IDBStorage("rs-settings", "config");
//#endregion
//#region ../../modules/projects/lur.e/src/utils/opfs/Base64Data.ts
var DEFAULT_MIME = "application/octet-stream";
var DATA_URL_RE = /^data:(?<mime>[^;,]+)?(?<params>(?:;[^,]*)*?),(?<data>[\s\S]*)$/i;
function canUseFromBase64() {
	return typeof Uint8Array.fromBase64 === "function";
}
function canUseToBase64(u8) {
	return typeof u8.toBase64 === "function";
}
function tryDecodeURIComponent(s) {
	try {
		return decodeURIComponent(s);
	} catch {
		return s;
	}
}
function likelyUriComponent(s) {
	return /%[0-9A-Fa-f]{2}/.test(s) || s.includes("+");
}
function isTextMime(mimeType) {
	const t = (mimeType || "").toLowerCase();
	return t.startsWith("text/") || t.includes("json") || t.includes("xml") || t.includes("svg") || t.includes("javascript") || t.includes("ecmascript");
}
function bytesToArrayBuffer(bytes) {
	const buf = bytes.buffer;
	if (buf instanceof ArrayBuffer) return buf.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
	const ab = new ArrayBuffer(bytes.byteLength);
	new Uint8Array(ab).set(bytes);
	return ab;
}
function parseDataUrl(input) {
	const s = (input || "").trim();
	if (!s.toLowerCase().startsWith("data:")) return null;
	const m = s.match(DATA_URL_RE);
	if (!m?.groups) return null;
	return {
		mimeType: (m.groups.mime || DEFAULT_MIME).trim() || DEFAULT_MIME,
		isBase64: (m.groups.params || "").toLowerCase().includes(";base64"),
		data: m.groups.data ?? ""
	};
}
function decodeBase64ToBytes(base64, options = {}) {
	const alphabet = options.alphabet || "base64";
	const lastChunkHandling = options.lastChunkHandling || "loose";
	const s = (base64 || "").trim();
	if (canUseFromBase64()) return Uint8Array.fromBase64(s, {
		alphabet,
		lastChunkHandling
	});
	const normalized = alphabet === "base64url" ? s.replace(/-/g, "+").replace(/_/g, "/") : s;
	const padLen = (4 - normalized.length % 4) % 4;
	const padded = normalized + "=".repeat(padLen);
	const binary = typeof atob === "function" ? atob(padded) : "";
	const out = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) out[i] = binary.charCodeAt(i);
	return out;
}
function encodeBytesToBase64(bytes, options = {}) {
	const alphabet = options.alphabet || "base64";
	if (canUseToBase64(bytes)) return bytes.toBase64({ alphabet });
	const chunkSize = 32768;
	let binary = "";
	for (let i = 0; i < bytes.length; i += chunkSize) binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
	const b64 = typeof btoa === "function" ? btoa(binary) : "";
	if (alphabet !== "base64url") return b64;
	return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
async function blobToBytes(blob) {
	const ab = await blob.arrayBuffer();
	return new Uint8Array(ab);
}
async function blobToText$1(blob, encoding = "utf-8") {
	if (typeof blob.text === "function") return await blob.text();
	const bytes = await blobToBytes(blob);
	return new TextDecoder(encoding).decode(bytes);
}
async function blobToBase64(blob, options = {}) {
	return encodeBytesToBase64(await blobToBytes(blob), options);
}
async function blobToDataUrl(blob, options = {}) {
	const mimeType = (options.mimeType || blob.type || DEFAULT_MIME).trim() || DEFAULT_MIME;
	if (options.base64 ?? !isTextMime(mimeType)) return `data:${mimeType};base64,${await blobToBase64(blob, options.base64Options || {})}`;
	const text = await blobToText$1(blob, options.textEncoding || "utf-8");
	return `data:${mimeType},${options.uriComponent ? encodeURIComponent(text) : text}`;
}
async function fileToDataUrl(file, options = {}) {
	return await blobToDataUrl(file, options);
}
function looksLikeBase64(s) {
	const t = (s || "").trim();
	if (!t) return {
		isBase64: false,
		alphabet: "base64"
	};
	const alphabet = /[-_]/.test(t) && !/[+/]/.test(t) ? "base64url" : "base64";
	const cleaned = (alphabet === "base64url" ? t.replace(/-/g, "+").replace(/_/g, "/") : t).replace(/[\r\n\s]/g, "");
	if (!/^[A-Za-z0-9+/]*={0,2}$/.test(cleaned)) return {
		isBase64: false,
		alphabet
	};
	if (cleaned.length < 8) return {
		isBase64: false,
		alphabet
	};
	return {
		isBase64: true,
		alphabet
	};
}
function canParseUrl(value) {
	try {
		if (typeof URL === "undefined") return false;
		if (typeof URL.canParse === "function") return URL.canParse(value);
		new URL(value);
		return true;
	} catch {
		return false;
	}
}
function extensionByMimeType(mimeType) {
	const t = (mimeType || "").toLowerCase().split(";")[0].trim();
	if (!t) return "bin";
	const mapped = {
		"text/plain": "txt",
		"text/markdown": "md",
		"text/html": "html",
		"application/json": "json",
		"application/xml": "xml",
		"image/jpeg": "jpg",
		"image/png": "png",
		"image/webp": "webp",
		"image/gif": "gif",
		"image/svg+xml": "svg",
		"application/pdf": "pdf"
	};
	if (mapped[t]) return mapped[t];
	const slashIdx = t.indexOf("/");
	if (slashIdx <= 0 || slashIdx >= t.length - 1) return "bin";
	let subtype = t.slice(slashIdx + 1);
	if (subtype.includes("+")) subtype = subtype.split("+")[0];
	if (subtype.includes(".")) subtype = subtype.split(".").pop() || subtype;
	return subtype || "bin";
}
function fallbackHashHex(bytes) {
	let h = 2166136261;
	for (let i = 0; i < bytes.length; i++) {
		h ^= bytes[i];
		h = Math.imul(h, 16777619);
	}
	return (h >>> 0).toString(16).padStart(8, "0").repeat(8);
}
async function sha256Hex(bytes) {
	try {
		const subtle = globalThis.crypto?.subtle;
		if (!subtle) return fallbackHashHex(bytes);
		const digest = await subtle.digest("SHA-256", bytes);
		const out = new Uint8Array(digest);
		return Array.from(out, (b) => b.toString(16).padStart(2, "0")).join("");
	} catch {
		return fallbackHashHex(bytes);
	}
}
function isBase64Like(input) {
	return looksLikeBase64(input).isBase64;
}
async function normalizeDataAsset(input, options = {}) {
	const maxBytes = options.maxBytes ?? 50 * 1024 * 1024;
	const namePrefix = (options.namePrefix || "asset").trim() || "asset";
	const preserveFileName = options.preserveFileName ?? false;
	let source = "text";
	let blob;
	let incomingFile = null;
	if (input instanceof File) {
		source = "file";
		incomingFile = input;
		blob = options.mimeType && options.mimeType !== input.type ? new Blob([await input.arrayBuffer()], { type: options.mimeType }) : input;
	} else if (input instanceof Blob) {
		source = "blob";
		blob = options.mimeType && options.mimeType !== input.type ? new Blob([await input.arrayBuffer()], { type: options.mimeType }) : input;
	} else {
		const raw = (input instanceof URL ? input.toString() : String(input ?? "")).trim();
		const parsed = parseDataUrl(raw);
		const decodedUri = options.uriComponent ? tryDecodeURIComponent(raw) : likelyUriComponent(raw) ? tryDecodeURIComponent(raw) : raw;
		if (parsed) source = "data-url";
		else if (canParseUrl(raw)) source = "url";
		else if (isBase64Like(raw)) source = "base64";
		else if (decodedUri !== raw && (parseDataUrl(decodedUri) || isBase64Like(decodedUri) || canParseUrl(decodedUri))) source = "uri";
		else source = "text";
		blob = await stringToBlob(source === "uri" ? decodedUri : raw, {
			mimeType: options.mimeType,
			uriComponent: options.uriComponent,
			isBase64: source === "base64" ? true : void 0,
			maxBytes
		});
	}
	const bytes = await blobToBytes(blob);
	if (bytes.byteLength > maxBytes) throw new Error(`Data too large: ${bytes.byteLength} bytes`);
	const hash = await sha256Hex(bytes);
	const mimeType = (options.mimeType || blob.type || DEFAULT_MIME).trim() || DEFAULT_MIME;
	const extension = extensionByMimeType(mimeType);
	const hashedName = options.filename || `${namePrefix}-${hash.slice(0, 16)}.${extension}`;
	const finalName = preserveFileName && incomingFile?.name ? incomingFile.name : hashedName;
	const file = incomingFile && preserveFileName && !options.mimeType ? incomingFile : new File([blob], finalName, { type: mimeType });
	return {
		hash,
		name: file.name,
		type: file.type || mimeType,
		size: file.size,
		source,
		file
	};
}
async function stringToBlobOrFile(input, options = {}) {
	const maxBytes = options.maxBytes ?? 50 * 1024 * 1024;
	const raw = (input ?? "").trim();
	const parsedDataUrl = parseDataUrl(raw);
	if (parsedDataUrl) {
		const mimeType = options.mimeType || parsedDataUrl.mimeType || DEFAULT_MIME;
		const payload = options.uriComponent ? tryDecodeURIComponent(parsedDataUrl.data) : likelyUriComponent(parsedDataUrl.data) ? tryDecodeURIComponent(parsedDataUrl.data) : parsedDataUrl.data;
		if (options.isBase64 ?? parsedDataUrl.isBase64) {
			const bytes = decodeBase64ToBytes(payload, {
				alphabet: options.base64?.alphabet || "base64",
				lastChunkHandling: options.base64?.lastChunkHandling || "loose"
			});
			if (bytes.byteLength > maxBytes) throw new Error(`Decoded data too large: ${bytes.byteLength} bytes`);
			const blob = new Blob([bytesToArrayBuffer(bytes)], { type: mimeType });
			if (!options.asFile) return blob;
			return new File([blob], options.filename || "file", { type: mimeType });
		}
		const blob = new Blob([payload], { type: mimeType });
		if (!options.asFile) return blob;
		return new File([blob], options.filename || "file", { type: mimeType });
	}
	try {
		if (typeof URL !== "undefined" && URL.canParse?.(raw)) {
			const blob = await (await fetch(raw)).blob();
			const mimeType = options.mimeType || blob.type || DEFAULT_MIME;
			const typed = blob.type === mimeType ? blob : new Blob([await blob.arrayBuffer()], { type: mimeType });
			if (!options.asFile) return typed;
			return new File([typed], options.filename || "file", { type: mimeType });
		}
	} catch {}
	const maybeDecoded = options.uriComponent ? tryDecodeURIComponent(raw) : likelyUriComponent(raw) ? tryDecodeURIComponent(raw) : raw;
	const base64Hint = looksLikeBase64(maybeDecoded);
	const isBase64 = options.isBase64 ?? base64Hint.isBase64;
	const mimeType = options.mimeType || (isBase64 ? DEFAULT_MIME : "text/plain;charset=utf-8");
	if (isBase64) {
		const bytes = decodeBase64ToBytes(maybeDecoded, {
			alphabet: options.base64?.alphabet || base64Hint.alphabet,
			lastChunkHandling: options.base64?.lastChunkHandling || "loose"
		});
		if (bytes.byteLength > maxBytes) throw new Error(`Decoded data too large: ${bytes.byteLength} bytes`);
		const blob = new Blob([bytesToArrayBuffer(bytes)], { type: mimeType });
		if (!options.asFile) return blob;
		return new File([blob], options.filename || "file", { type: mimeType });
	}
	const blob = new Blob([maybeDecoded], { type: mimeType });
	if (!options.asFile) return blob;
	return new File([blob], options.filename || "file", { type: mimeType });
}
async function stringToBlob(input, options = {}) {
	return await stringToBlobOrFile(input, {
		...options,
		asFile: false
	});
}
async function stringToFile(input, filename, options = {}) {
	return await stringToBlobOrFile(input, {
		...options,
		asFile: true,
		filename
	});
}
//#endregion
//#region ../../modules/projects/lur.e/src/utils/opfs/remote-fs.ts
var decodeBase64 = (body) => {
	if (typeof Buffer !== "undefined") return new Uint8Array(Buffer.from(body, "base64"));
	const bin = atob(body);
	const out = new Uint8Array(bin.length);
	for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
	return out;
};
var fileFromResponse = (resp) => {
	if (!resp.ok || !resp.file?.body) return null;
	const bytes = resp.file.encoding === "utf8" ? new TextEncoder().encode(resp.file.body) : decodeBase64(resp.file.body);
	return new File([bytes], resp.file.name || "file", { type: resp.file.type || "" });
};
var createHttpsFsTransport = (httpPath = MOUNTED_FS_HTTP_PATH) => ({ async request(req) {
	const id = req.id || createMountedFsId();
	const r = await fetch(httpPath, {
		method: "POST",
		headers: { "content-type": "application/json" },
		body: JSON.stringify({
			t: "fs",
			id,
			...req
		})
	});
	const json = await r.json().catch(() => null);
	if (!isMountedFsResponse(json)) return {
		t: "fs-result",
		id,
		ok: false,
		error: `https ${r.status}`
	};
	return json;
} });
var createWebSocketFsTransport = (socket) => {
	const pending = /* @__PURE__ */ new Map();
	socket.addEventListener("message", (ev) => {
		const raw = typeof ev.data === "string" ? ev.data : "";
		let parsed = null;
		try {
			parsed = JSON.parse(raw);
		} catch {
			return;
		}
		if (!isMountedFsResponse(parsed)) return;
		pending.get(parsed.id)?.(parsed);
		pending.delete(parsed.id);
	});
	return { request(req) {
		const id = req.id || createMountedFsId();
		return new Promise((resolve, reject) => {
			if (socket.readyState !== 1) {
				reject(/* @__PURE__ */ new Error("ws closed"));
				return;
			}
			pending.set(id, resolve);
			socket.send(JSON.stringify({
				t: "fs",
				id,
				...req
			}));
			setTimeout(() => {
				if (pending.delete(id)) reject(/* @__PURE__ */ new Error("ws timeout"));
			}, 8e3);
		});
	} };
};
var createSocketIoFsTransport = (socket, event = MOUNTED_FS_EVENT) => ({ request(req) {
	const id = req.id || createMountedFsId();
	const payload = {
		t: "fs",
		id,
		...req
	};
	return new Promise((resolve, reject) => {
		const timer = setTimeout(() => reject(/* @__PURE__ */ new Error("sio timeout")), 8e3);
		const finish = (resp) => {
			clearTimeout(timer);
			if (isMountedFsResponse(resp)) resolve(resp);
			else reject(/* @__PURE__ */ new Error("sio bad reply"));
		};
		try {
			socket.emit(event, payload, finish);
		} catch {
			socket.emit(event, payload);
			const onMsg = (data) => {
				if (isMountedFsResponse(data) && data.id === id) {
					socket.on;
					finish(data);
				}
			};
			socket.on(event, onMsg);
		}
	});
} });
var wsUrlFromHttp = (httpPath) => {
	const origin = typeof location !== "undefined" ? location.origin : "http://localhost";
	const url = new URL(httpPath.replace(/\/+$/, "") + "/ws", origin);
	url.pathname = MOUNTED_FS_WS_PATH;
	url.protocol = url.protocol === "https:" ? "wss:" : "ws:";
	return url.toString();
};
var tryOpenWebSocket = (url, timeoutMs = 1500) => new Promise((resolve) => {
	if (typeof WebSocket === "undefined") {
		resolve(null);
		return;
	}
	let settled = false;
	const done = (socket) => {
		if (settled) return;
		settled = true;
		resolve(socket);
	};
	try {
		const socket = new WebSocket(url);
		const timer = setTimeout(() => {
			try {
				socket.close();
			} catch {}
			done(null);
		}, timeoutMs);
		socket.addEventListener("open", () => {
			clearTimeout(timer);
			done(socket);
		});
		socket.addEventListener("error", () => {
			clearTimeout(timer);
			done(null);
		});
	} catch {
		done(null);
	}
});
var tryOpenSocketIo = async () => {
	const io = globalThis.io;
	if (typeof io !== "function") return null;
	try {
		const socket = io({
			path: "/socket.io",
			transports: ["websocket", "polling"]
		});
		if (!socket) return null;
		await new Promise((resolve, reject) => {
			const timer = setTimeout(() => reject(/* @__PURE__ */ new Error("sio connect")), 1500);
			socket.on?.("connect", () => {
				clearTimeout(timer);
				resolve();
			});
			socket.on?.("connect_error", () => {
				clearTimeout(timer);
				reject(/* @__PURE__ */ new Error("sio connect"));
			});
		}).catch(() => {
			socket.close?.();
			throw new Error("sio connect");
		});
		return createSocketIoFsTransport(socket);
	} catch {
		return null;
	}
};
var connectRemoteMountedFs = async (options) => {
	const httpPath = options?.httpPath || "/ssre/fs";
	const https = createHttpsFsTransport(httpPath);
	const probe = await https.request({ op: "mounts" }).catch(() => null);
	if (!probe?.ok) return null;
	if (options?.wsUrl || probe.ws === true) {
		const ws = await tryOpenWebSocket(options?.wsUrl || wsUrlFromHttp(httpPath));
		if (ws) {
			const transport = createWebSocketFsTransport(ws);
			if ((await transport.request({ op: "mounts" }).catch(() => null))?.ok) return transport;
			try {
				ws.close();
			} catch {}
		}
	}
	if (probe.socketio === true) {
		const sio = await tryOpenSocketIo();
		if (sio) {
			if ((await sio.request({ op: "mounts" }).catch(() => null))?.ok) return sio;
		}
	}
	return https;
};
var createRemoteProvideBackend = (root, transport) => ({
	root,
	async list(path) {
		const resp = await transport.request({
			op: "list",
			path
		});
		if (!resp.ok) return [];
		return resp.entries ?? [];
	},
	async readFile(path) {
		return fileFromResponse(await transport.request({
			op: "read",
			path
		}));
	},
	async writeFile(path, file) {
		const buf = new Uint8Array(await file.arrayBuffer());
		const body = typeof Buffer !== "undefined" ? Buffer.from(buf).toString("base64") : btoa(String.fromCharCode(...buf));
		const resp = await transport.request({
			op: "write",
			path,
			file: {
				name: file.name,
				type: file.type || "",
				encoding: "base64",
				body
			}
		});
		if (!resp.ok) throw new Error(resp.error || "remote write failed");
		return true;
	}
});
var remoteTransport = null;
var ensureRemoteMountedFs = () => {
	remoteTransport ??= connectRemoteMountedFs().then((transport) => {
		if (!transport) return null;
		return transport.request({ op: "mounts" }).then((resp) => {
			if (!resp.ok) return transport;
			for (const mount of resp.mounts ?? []) registerProvideBackend(createRemoteProvideBackend(mount.virtual, transport));
			return transport;
		}).catch(() => transport);
	}).catch(() => null);
	return remoteTransport;
};
var tryRemoteMountedList = async (path) => {
	const transport = await ensureRemoteMountedFs();
	if (!transport) return null;
	const resp = await transport.request({
		op: "list",
		path
	}).catch(() => null);
	if (!resp?.ok) return null;
	return resp.entries ?? [];
};
var tryRemoteMountedRead = async (path) => {
	const transport = await ensureRemoteMountedFs();
	if (!transport) return null;
	const resp = await transport.request({
		op: "read",
		path
	}).catch(() => null);
	if (!resp) return null;
	return fileFromResponse(resp);
};
//#endregion
//#region ../../modules/projects/lur.e/src/utils/opfs/OPFSMod.ts
/**
* Recursive JSON transformation helper for OPFS directories.
*
* WHY: bulk migrations and cleanup tasks often need to walk an existing OPFS
* subtree, parse each JSON/JSOX file, transform the data, and write back only
* when the normalized output actually changed.
*/
/**
* @typedef {Object} OpfsModifyOptions
* @property {string} dirPath Относительный путь от корня OPFS (например, "data/configs")
* @property {(data:any, ctx:{path:string,name:string,fullPath:string}) => any|Promise<any>} transform
*           Функция-трансформация. Должна вернуть новый объект (или исходный, если без изменений).
*           Можно вернуть undefined, чтобы пропустить запись.
* @property {(name:string, fullPath:string) => boolean} [filter]
*           Доп. фильтр по имени/пути (true — обрабатывать).
* @property {number} [indent=2] Кол-во пробелов для JSOX.stringify
* @property {boolean} [dryRun=false] Если true — только показывает, что было бы изменено, без записи.
* @property {boolean} [prettyStable=true] Если true — сортирует ключи (стабильный вывод).
*/
/**
* Walk a directory tree inside OPFS, apply a transform to every JSON-like file,
* and optionally perform a dry run without writing changes.
*/
async function opfsModifyJson(options) {
	const { dirPath, transform, filter, indent = 2, dryRun = false, prettyStable = true } = options;
	assertOpfs();
	const root = await navigator.storage.getDirectory()?.catch?.(() => null);
	if (!root) return {
		processed: 0,
		changed: 0,
		errors: 0
	};
	const normDirPath = normalizePath(dirPath);
	const dir = await getDirByPath(root, normDirPath);
	if (!dir) return {
		processed: 0,
		changed: 0,
		errors: 0
	};
	let processed = 0;
	let changed = 0;
	let errors = 0;
	for await (const { handle, name, fullPath } of walk(dir, normDirPath)) {
		if (handle.kind !== "file" || !name.toLowerCase().endsWith(".json")) continue;
		if (filter && !filter(name, fullPath)) continue;
		try {
			const originalText = await (await handle.getFile()).text();
			let data;
			try {
				data = originalText.trim() === "" ? null : JSOX.parse(originalText);
			} catch (_) {
				try {
					data = originalText.trim() === "" ? null : JSON.parse(originalText);
				} catch (e) {
					console.warn(`JSON parse error: ${fullPath}`, e);
					errors++;
					continue;
				}
			}
			const result = await transform(data, {
				path: normDirPath,
				name,
				fullPath
			});
			if (typeof result === "undefined") {
				processed++;
				continue;
			}
			const newText = serializeJSON(result, {
				indent,
				prettyStable
			});
			if (normalizeEol(newText) === normalizeEol(originalText)) {
				processed++;
				continue;
			}
			if (dryRun) console.log(`[dry-run] Would update: ${fullPath}`);
			else {
				const writable = await handle.createWritable();
				await writable.truncate(0);
				await writable.write(newText);
				await writable.close();
				console.log(`Updated: ${fullPath}`);
			}
			processed++;
			changed++;
		} catch (e) {
			console.error(`Failed on ${fullPath}:`, e);
			errors++;
		}
	}
	return {
		processed,
		changed,
		errors
	};
}
function normalizePath(p) {
	if (!p || p === "/" || p === ".") return "";
	return p.split("/").filter(Boolean).join("/");
}
function assertOpfs() {
	if (!("storage" in navigator) || typeof navigator.storage.getDirectory !== "function") throw new Error("OPFS is not available in this browser/context. Need navigator.storage.getDirectory().");
}
async function getDirByPath(rootDirHandle, path) {
	if (!path || path === "/" || path === ".") return rootDirHandle;
	const parts = path.split("/").map((s) => s.trim()).filter(Boolean);
	let dir = rootDirHandle;
	for (const part of parts) {
		try {
			dir = await dir?.getDirectoryHandle?.(part, { create: false });
		} catch (e) {
			if (e?.name === "NotFoundError") return null;
			if (e?.name === "AbortError") return null;
			throw e;
		}
		if (!dir) return null;
	}
	return dir;
}
/** Async generator for recursively walking an OPFS directory tree. */
async function* walk(dirHandle, basePath = "") {
	for await (const [name, handle] of dirHandle.entries()) {
		const fullPath = basePath ? `${basePath}/${name}` : name;
		if (handle.kind === "directory") yield* walk(handle, fullPath);
		else yield {
			handle,
			name,
			fullPath
		};
	}
}
function serializeJSON(obj, { indent = 2, prettyStable = true } = {}) {
	return JSON.stringify(obj, prettyStable ? stableReplacer : void 0, indent) + "\n";
}
/** Stable key ordering for deterministic JSON output and smaller diffs. */
function stableReplacer(key, value) {
	if (value && typeof value === "object" && !Array.isArray(value)) {
		const out = {};
		for (const k of Object.keys(value).sort()) out[k] = value[k];
		return out;
	}
	return value;
}
function normalizeEol(s) {
	return s.replace(/\r\n/g, "\n");
}
//#endregion
//#region ../../modules/projects/lur.e/src/utils/opfs/FileOps.ts
/**
* UI-facing filesystem operations.
*
* These helpers connect browser picker/clipboard/drop interactions with the
* higher-level storage and recognition pipelines so views do not have to know
* about OPFS handles or import-heavy recognition modules directly.
*/
/** Bind drag-and-drop ingestion for a directory target and emit a local `dir-dropped` event on success. */
var bindDropToDir = (host, dir) => {
	const onDragOver = (ev) => {
		ev.preventDefault();
		host.dataset.dragover = "true";
	};
	const onDragLeave = () => {
		delete host.dataset.dragover;
	};
	const onDrop = async (ev) => {
		ev.preventDefault();
		delete host.dataset.dragover;
		try {
			await handleIncomingEntries(ev.dataTransfer, dir);
			const count = ev.dataTransfer?.items?.length || ev.dataTransfer?.files?.length || 0;
			host.dispatchEvent(new CustomEvent("dir-dropped", {
				detail: { count },
				bubbles: true
			}));
		} catch (e) {
			console.warn(e);
		}
	};
	host.addEventListener("dragover", onDragOver);
	host.addEventListener("dragleave", onDragLeave);
	host.addEventListener("drop", onDrop);
	return () => {
		host.removeEventListener("dragover", onDragOver);
		host.removeEventListener("dragleave", onDragLeave);
		host.removeEventListener("drop", onDrop);
	};
};
/** Write every provided file into the target directory using the canonical smart-write helper. */
var writeFilesToDir = async (dir, files) => {
	const items = Array.from(files);
	for (const file of items) {
		dir = dir?.trim?.();
		dir = dir?.endsWith?.("/") ? dir : dir + "/";
		await writeFileSmart(null, dir, file);
	}
	return items.length;
};
/** Open a native file picker and write the selected files into the target directory. */
var openPickerAndWrite = async (dir, accept = "*/*", multiple = true) => {
	const input = document.createElement("input");
	input.type = "file";
	input.accept = accept;
	input.multiple = multiple;
	return await new Promise((resolve) => {
		input.onchange = async () => {
			dir = dir?.trim?.();
			dir = dir?.endsWith?.("/") ? dir : dir + "/";
			try {
				resolve(await writeFilesToDir(dir, input.files || []));
			} catch {
				resolve(0);
			}
		};
		input.click();
	});
};
/** Download a file that already exists in OPFS by path. */
var downloadByPath = async (path, suggestedName) => {
	const lastSlash = path.lastIndexOf("/");
	const dir = path.slice(0, Math.max(0, lastSlash + 1));
	const name = suggestedName || path.slice(lastSlash + 1);
	const file = await (await (await getDirectoryHandle(null, dir)).getFileHandle(name, { create: false })).getFile();
	const url = URL.createObjectURL(file);
	const a = document.createElement("a");
	a.href = url;
	a.download = name;
	a.click();
	setTimeout(() => URL.revokeObjectURL(url), 1e3);
};
//#endregion
//#region ../../modules/projects/lur.e/src/utils/opfs/WriteFileSmart-v2.ts
var lureFsPromise = null;
var getLureFs = () => {
	if (!lureFsPromise) lureFsPromise = __vitePreload(() => Promise.resolve().then(() => src_exports).then((m) => ({
		readFile: m.readFile,
		writeFile: m.writeFile
	})), void 0, import.meta.url);
	return lureFsPromise;
};
var sanitizeFileName = (name, fallbackExt = "") => {
	const base = (String(name || "").split("/").pop() || "").replace(/\s+/g, "-").replace(/[^a-zA-Z0-9_.\-+#&]/g, "-");
	if (fallbackExt && !base.includes(".")) return `${base || Date.now()}${fallbackExt.startsWith(".") ? "" : "."}${fallbackExt}`;
	return base || `${Date.now()}`;
};
var toSlug = (input, toLower = true) => {
	let s = String(input || "").trim();
	if (toLower) s = s.toLowerCase();
	s = s.replace(/\s+/g, "-");
	s = s.replace(/[^a-z0-9_.\-+#&]/g, "-");
	s = s.replace(/-+/g, "-");
	return s;
};
var inferExtFromMime = (mime = "") => {
	if (!mime) return "";
	if (mime.includes("json")) return "json";
	if (mime.includes("markdown")) return "md";
	if (mime.includes("plain")) return "txt";
	if (mime === "image/jpeg" || mime === "image/jpg") return "jpg";
	if (mime === "image/png") return "png";
	if (mime.startsWith("image/")) return mime.split("/").pop() || "";
	if (mime.includes("html")) return "html";
	return "";
};
var splitPath = (path) => String(path || "").split("/").filter(Boolean);
var ensureDir = (p) => p.endsWith("/") ? p : p + "/";
var joinPath = (parts, absolute = true) => (absolute ? "/" : "") + parts.filter(Boolean).join("/");
var sanitizePathSegments = (path) => {
	return joinPath(splitPath(path).map((p) => toSlug(p)));
};
var DEFAULT_ARRAY_KEYS = [
	"id",
	"_id",
	"key",
	"slug",
	"name"
];
var isPlainObject = (v) => Object.prototype.toString.call(v) === "[object Object]";
function dedupeArray(items, opts) {
	const keys = Array.isArray(opts.arrayKey) ? opts.arrayKey : opts.arrayKey ? [opts.arrayKey] : DEFAULT_ARRAY_KEYS;
	const result = [];
	const primitiveSet = /* @__PURE__ */ new Set();
	const objMap = /* @__PURE__ */ new Map();
	const stringifiedSet = /* @__PURE__ */ new Set();
	for (const it of items) {
		if (it == null) continue;
		if (isPlainObject(it)) {
			let dedupeKey;
			for (const k of keys) if (k in it && it[k] != null) {
				dedupeKey = String(it[k]);
				break;
			}
			if (dedupeKey != null) {
				if (!objMap.has(dedupeKey)) {
					objMap.set(dedupeKey, it);
					result.push(it);
				}
			} else {
				const sig = safeStableStringify(it);
				if (!stringifiedSet.has(sig)) {
					stringifiedSet.add(sig);
					result.push(it);
				}
			}
		} else if (Array.isArray(it)) {
			const sig = safeStableStringify(it);
			if (!stringifiedSet.has(sig)) {
				stringifiedSet.add(sig);
				result.push(it);
			}
		} else if (!primitiveSet.has(it)) {
			primitiveSet.add(it);
			result.push(it);
		}
	}
	return result;
}
function mergeDeepUnique(a, b, opts) {
	if (Array.isArray(a) && Array.isArray(b)) switch (opts.arrayStrategy) {
		case "replace": return b.slice();
		case "concat": return a.concat(b);
		default: return dedupeArray(a.concat(b), { arrayKey: opts.arrayKey });
	}
	if (isPlainObject(a) && isPlainObject(b)) {
		const out = { ...a };
		for (const k of Object.keys(b)) if (k in a) out[k] = mergeDeepUnique(a[k], b[k], opts);
		else out[k] = b[k];
		return out;
	}
	return b;
}
function safeStableStringify(obj) {
	if (!isPlainObject(obj)) return JSON.stringify(obj);
	const keys = Object.keys(obj).sort();
	const o = {};
	for (const k of keys) o[k] = obj[k];
	return JSON.stringify(o);
}
async function blobToText(blob) {
	return await blob.text();
}
async function readFileAsJson(root, fullPath) {
	try {
		const { readFile } = await getLureFs();
		const existing = await readFile(root, fullPath)?.catch?.(console.warn.bind(console));
		if (!existing) return null;
		const text = await blobToText(existing);
		if (!text?.trim()) return null;
		return JSOX.parse(text);
	} catch {
		return null;
	}
}
var writeFileSmart = async (root, dirOrPath, file, options = {}) => {
	const { writeFile } = await getLureFs();
	const { forceExt, ensureJson, toLower = true, sanitize = true, mergeJson, arrayStrategy = "union", arrayKey, jsonSpace = 2 } = options;
	let raw = String(dirOrPath || "").trim();
	const isDirHint = raw.endsWith("/");
	const hasFileToken = !isDirHint && splitPath(raw).length > 0 && raw.includes(".");
	let dirPath = isDirHint ? raw : hasFileToken ? raw.split("/").slice(0, -1).join("/") : raw;
	let desiredName = hasFileToken ? raw.split("/").pop() || "" : file?.name || "";
	dirPath = dirPath || "/";
	desiredName = desiredName || Date.now() + "";
	const lastDot = desiredName.lastIndexOf(".");
	let base = lastDot > 0 ? desiredName.slice(0, lastDot) : desiredName;
	let ext = forceExt || (ensureJson ? "json" : lastDot > 0 ? desiredName.slice(lastDot + 1) : inferExtFromMime(file?.type || "")) || "";
	if (sanitize) {
		dirPath = sanitizePathSegments(dirPath);
		base = toSlug(base, toLower);
	}
	const finalName = ext ? `${base}.${ext}` : base;
	const fullPath = ensureDir(dirPath) + finalName;
	if (mergeJson !== false && (ensureJson || ext.toLowerCase() === "json" || file?.type === "application/json")) try {
		let incomingJson;
		if (file instanceof File || file instanceof Blob) {
			const txt = await blobToText(file);
			incomingJson = txt?.trim() ? JSOX.parse(txt) : {};
		} else incomingJson = file;
		const existingJson = await readFileAsJson(root, fullPath)?.catch?.(console.warn.bind(console));
		let merged = existingJson != null ? mergeDeepUnique(existingJson, incomingJson, {
			arrayStrategy,
			arrayKey
		}) : incomingJson;
		const jsonString = JSON.stringify(merged, void 0, jsonSpace);
		const rs = await writeFile(root, fullPath, new File([jsonString], finalName, { type: "application/json" }))?.catch?.(console.warn.bind(console));
		if (typeof document !== "undefined") document?.dispatchEvent?.(new CustomEvent("rs-fs-changed", {
			detail: rs,
			bubbles: true,
			composed: true,
			cancelable: true
		}));
		return rs;
	} catch (err) {
		console.warn("writeFileSmart JSON merge failed, falling back to raw write:", err);
	}
	let toWrite;
	if (file instanceof File) if (file.name === finalName) toWrite = file;
	else {
		const type = file.type || (ext ? `application/${ext}` : "application/octet-stream");
		const buf = await file.arrayBuffer();
		toWrite = new File([buf], finalName, { type });
	}
	else {
		const type = file.type || (ext ? `application/${ext}` : "application/octet-stream");
		toWrite = new File([await file.arrayBuffer()], finalName, { type });
	}
	const rs = await writeFile(root, fullPath, toWrite)?.catch?.(console.warn.bind(console));
	if (typeof document !== "undefined") document?.dispatchEvent?.(new CustomEvent("rs-fs-changed", {
		detail: rs,
		bubbles: true,
		composed: true,
		cancelable: true
	}));
	return rs;
};
//#endregion
//#region ../../modules/projects/lur.e/src/utils/opfs/FsWatch.ts
var matchPath = (path = "", dir = "") => {
	const normalizedDir = dir.endsWith("/") ? dir : `${dir}/`;
	return path.startsWith(normalizedDir);
};
var channel = new BroadcastChannel("rs-fs");
var watchers = /* @__PURE__ */ new Map();
channel.addEventListener("close", () => watchers.clear());
channel.addEventListener("message", (event) => {
	const payload = event?.data;
	if (!payload || payload.type !== "commit-result" && payload.type !== "commit-to-clipboard") return;
	const results = payload?.results ?? [];
	if (!Array.isArray(results) || !results.length) return;
	for (const [dir, listeners] of watchers.entries()) {
		if (!listeners.size) continue;
		if (!results.some((item) => matchPath(item?.path, dir))) continue;
		for (const listener of listeners) try {
			listener();
		} catch (e) {
			console.warn(e);
		}
	}
});
var stopAllWatchers = () => watchers.clear();
var watchFsDirectory = (dir, listener) => {
	if (!dir || typeof listener !== "function") return () => void 0;
	const normalized = dir.endsWith("/") ? dir : `${dir}/`;
	let listeners = watchers.get(normalized);
	if (!listeners) {
		listeners = /* @__PURE__ */ new Set();
		watchers.set(normalized, listeners);
	}
	listeners.add(listener);
	return () => {
		const current = watchers.get(normalized);
		if (!current) return;
		current.delete(listener);
		if (!current.size) watchers.delete(normalized);
	};
};
/** Read a markdown-capable file handle into text, returning an empty string for missing content. */
var getMarkDownFromFile = async (handle) => {
	return await (await handle?.getFile?.())?.text?.() || "";
};
/** Parse the first file handle as JSON/JSOX and return `null` when the handle is missing. */
var getJSONFromFile = async (handle) => {
	if (Array.isArray(handle)) handle = handle?.[0];
	if (!handle) return null;
	return parseJsonSafely(await (await handle?.getFile?.())?.text?.() || "{}");
};
var parseJsonSafely = (text) => {
	if (!text) return null;
	if (typeof text != "string") return text;
	try {
		return JSON.parse(text);
	} catch (_) {
		console.warn("Failed to parse JSON", text);
		return text;
	}
};
//#endregion
//#region ../../modules/projects/lur.e/src/utils/opfs/FileHandling.ts
var FileHandler = class {
	options;
	dragOverElements = /* @__PURE__ */ new Set();
	constructor(options) {
		this.options = { ...options };
	}
	/**
	* Programmatically add files into the same pipeline as UI selection / DnD / paste.
	* Used by PWA share-target and launchQueue ingestion.
	*/
	addFiles(files) {
		if (!Array.isArray(files) || files.length === 0) return;
		return this.options.onFilesAdded(files);
	}
	/**
	* Set up file input element with file selection
	*/
	setupFileInput(container, accept = "*") {
		const fileInput = document.createElement("input");
		fileInput.type = "file";
		fileInput.multiple = true;
		fileInput.accept = accept;
		fileInput.style.display = "none";
		fileInput.addEventListener("change", (e) => {
			const files = Array.from(e.target.files || []);
			if (files.length > 0) this.options.onFilesAdded(files);
			fileInput.value = "";
		});
		container.append(fileInput);
		return fileInput;
	}
	/**
	* Set up drag and drop handling for an element
	*/
	setupDragAndDrop(element) {
		element.addEventListener("dragover", (e) => {
			e.preventDefault();
			e.stopPropagation();
			this.addDragOver(element);
		});
		element.addEventListener("dragleave", (e) => {
			e.preventDefault();
			e.stopPropagation();
			this.removeDragOver(element);
		});
		element.addEventListener("drop", (e) => {
			e.preventDefault();
			e.stopPropagation();
			this.removeDragOver(element);
			const files = Array.from(e.dataTransfer?.files || []);
			if (files.length > 0) this.options.onFilesAdded(files);
		});
	}
	/**
	* Set up paste handling for an element
	*/
	setupPasteHandling(element) {
		element.addEventListener("paste", (e) => {
			const files = Array.from(e.clipboardData?.files || []);
			if (files.length > 0) {
				e.preventDefault();
				this.options.onFilesAdded(files);
			}
		});
	}
	/**
	* Set up all file handling for a container (file input button, drag & drop, paste)
	*/
	setupCompleteFileHandling(container, fileSelectButton, dropZone, accept = "*") {
		const fileInput = this.setupFileInput(container, accept);
		fileSelectButton.addEventListener("click", () => {
			fileInput.click();
		});
		if (dropZone) this.setupDragAndDrop(dropZone);
		this.setupPasteHandling(container);
	}
	/**
	* Validate file types and sizes
	*/
	validateFiles(files, options = {}) {
		const { maxSize, allowedTypes, maxFiles } = options;
		const valid = [];
		const invalid = [];
		if (maxFiles && files.length > maxFiles) {
			invalid.push(...files.slice(maxFiles).map((file) => ({
				file,
				reason: `Too many files. Maximum ${maxFiles} files allowed.`
			})));
			files = files.slice(0, maxFiles);
		}
		for (const file of files) {
			let isValid = true;
			let reason = "";
			if (maxSize && file.size > maxSize) {
				isValid = false;
				reason = `File too large. Maximum size is ${this.formatFileSize(maxSize)}.`;
			}
			if (allowedTypes && allowedTypes.length > 0) {
				if (!allowedTypes.some((type) => {
					if (type.includes("*")) return file.type.startsWith(type.replace("/*", "/"));
					return file.type === type;
				})) {
					isValid = false;
					reason = reason || `File type not allowed. Allowed types: ${allowedTypes.join(", ")}.`;
				}
			}
			if (isValid) valid.push(file);
			else invalid.push({
				file,
				reason
			});
		}
		return {
			valid,
			invalid
		};
	}
	/**
	* Read file content as text
	*/
	async readFileAsText(file, onProgress) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result);
			reader.onerror = () => reject(/* @__PURE__ */ new Error(`Failed to read file: ${file.name}`));
			if (onProgress) reader.onprogress = (e) => {
				if (e.lengthComputable) onProgress(e.loaded, e.total);
			};
			reader.readAsText(file);
		});
	}
	/**
	* Read file content as ArrayBuffer
	*/
	async readFileAsArrayBuffer(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result);
			reader.onerror = () => reject(/* @__PURE__ */ new Error(`Failed to read file: ${file.name}`));
			reader.readAsArrayBuffer(file);
		});
	}
	/**
	* Read file content as Data URL
	*/
	async readFileAsDataURL(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result);
			reader.onerror = () => reject(/* @__PURE__ */ new Error(`Failed to read file: ${file.name}`));
			reader.readAsDataURL(file);
		});
	}
	/**
	* Read multiple files as text
	*/
	async readFilesAsText(files, onProgress) {
		const results = [];
		for (const file of files) try {
			const content = await this.readFileAsText(file, (loaded, total) => {
				onProgress?.(file, loaded, total);
			});
			results.push({
				file,
				content
			});
		} catch (error) {
			console.warn(`Failed to read file ${file.name}:`, error);
		}
		return results;
	}
	/**
	* Get file icon based on MIME type
	*/
	getFileIcon(mimeType) {
		if (mimeType.startsWith("image/")) return "🖼️";
		if (mimeType === "application/pdf") return "📄";
		if (mimeType.includes("json")) return "📋";
		if (mimeType.includes("text") || mimeType.includes("markdown")) return "📝";
		if (mimeType.includes("javascript") || mimeType.includes("typescript")) return "📜";
		if (mimeType.includes("css")) return "🎨";
		if (mimeType.includes("html")) return "🌐";
		if (mimeType.startsWith("video/")) return "🎥";
		if (mimeType.startsWith("audio/")) return "🎵";
		if (mimeType.includes("zip") || mimeType.includes("rar")) return "📦";
		return "📄";
	}
	/**
	* Format file size for display
	*/
	formatFileSize(bytes) {
		if (bytes < 1024) return `${bytes} B`;
		if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
		if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
		return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
	}
	/**
	* Check if a file is likely a markdown file
	*/
	isMarkdownFile(file) {
		const name = file.name.toLowerCase();
		const type = file.type.toLowerCase();
		return name.endsWith(".md") || name.endsWith(".markdown") || name.endsWith(".mdown") || name.endsWith(".mkd") || name.endsWith(".mkdn") || name.endsWith(".mdtxt") || name.endsWith(".mdtext") || type.includes("markdown") || type.includes("text");
	}
	/**
	* Check if a file is an image
	*/
	isImageFile(file) {
		return file.type.startsWith("image/");
	}
	/**
	* Check if a file is a text file
	*/
	isTextFile(file) {
		return file.type.startsWith("text/") || this.isMarkdownFile(file) || file.type.includes("javascript") || file.type.includes("typescript") || file.type.includes("css") || file.type.includes("html") || file.type.includes("json") || file.type.includes("xml");
	}
	/**
	* Check if a file is a binary file
	*/
	isBinaryFile(file) {
		return !this.isTextFile(file) && !this.isImageFile(file);
	}
	/**
	* Get file metadata
	*/
	getFileMetadata(file) {
		const extension = file.name.split(".").pop()?.toLowerCase() || "";
		const isText = this.isTextFile(file);
		const isImage = this.isImageFile(file);
		const isBinary = this.isBinaryFile(file);
		return {
			name: file.name,
			extension,
			size: file.size,
			type: file.type,
			lastModified: file.lastModified,
			isText,
			isImage,
			isBinary,
			formattedSize: this.formatFileSize(file.size),
			icon: this.getFileIcon(file.type)
		};
	}
	/**
	* Get files metadata for multiple files
	*/
	getFilesMetadata(files) {
		return files.map((file) => this.getFileMetadata(file));
	}
	addDragOver(element) {
		if (!this.dragOverElements.has(element)) {
			this.dragOverElements.add(element);
			element.classList.add("drag-over");
		}
	}
	removeDragOver(element) {
		if (this.dragOverElements.has(element)) {
			this.dragOverElements.delete(element);
			element.classList.remove("drag-over");
		}
	}
	/**
	* Manually trigger file processing with the provided files
	*/
	processFiles(files) {
		this.options.onFilesAdded(files);
	}
	/**
	* Create a downloadable file from content
	*/
	createDownloadableFile(content, filename, mimeType) {
		let blob;
		if (content instanceof Blob) blob = content;
		else if (content instanceof ArrayBuffer) blob = new Blob([content], { type: mimeType || "application/octet-stream" });
		else blob = new Blob([content], { type: mimeType || "text/plain;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = filename;
		a.style.display = "none";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		setTimeout(() => URL.revokeObjectURL(url), 100);
	}
	/**
	* Create a shareable file URL
	*/
	createFileURL(file) {
		return URL.createObjectURL(file);
	}
	/**
	* Revoke a file URL to free memory
	*/
	revokeFileURL(url) {
		URL.revokeObjectURL(url);
	}
	/**
	* Clean up event listeners and references
	*/
	destroy() {
		this.dragOverElements.clear();
	}
};
/**
* Utility function to create a file handler with default options
*/
function createFileHandler(options) {
	return new FileHandler(options);
}
/**
* Utility function to read markdown file from URL
*/
async function readMarkdownFromUrl(url) {
	try {
		const response = await fetch(url, {
			credentials: "include",
			cache: "no-store"
		});
		if (!response.ok) return null;
		const contentType = response.headers.get("content-type") || "";
		if (!contentType.includes("text") && !contentType.includes("markdown")) return null;
		return await response.text();
	} catch {
		return null;
	}
}
/**
* Extract text from DataTransfer (for paste/drop operations)
*/
async function extractTextFromDataTransfer(dt) {
	try {
		const uriList = dt.getData("text/uri-list");
		if (uriList?.trim()) return uriList.trim();
	} catch {}
	try {
		const text = dt.getData("text/plain");
		if (text?.trim()) return text;
	} catch {}
	return null;
}
//#endregion
//#region ../../modules/projects/lur.e/src/utils/opfs/markdown-assets.ts
/** True for `./assets/x`, `docs/a.md` — not http(s)/blob/data/#. */
var isMarkdownRelativeRef = (value) => {
	const raw = String(value || "").trim();
	return Boolean(raw) && !/^(?:[a-zA-Z][a-zA-Z\d+\-.]*:|\/\/|#|data:|blob:)/.test(raw);
};
/** Keep the markdown-relative token (`./assets/x.png`) even after the browser resolved it to the PWA origin. */
var originalRelFromRef = (value) => {
	const raw = String(value || "").trim();
	if (!raw || raw.startsWith("#") || raw.startsWith("blob:") || raw.startsWith("data:")) return "";
	if (isMarkdownRelativeRef(raw)) return raw;
	try {
		const url = new URL(raw, globalThis.location?.href || "http://localhost/");
		if (globalThis.location?.origin && url.origin === globalThis.location.origin) return url.pathname.replace(/^\/+/, "");
	} catch {}
	return "";
};
/**
* Main-thread `provide()` of a bound relative path (`/mounts/md-xxx/` + `./assets/logo.png`).
* WHY: skips OPFS worker + HTTP fetch (JXL hooks those). Mapped `/mounts/` uses `walkExactFile`.
*/
var provideBoundRelative = async (mountRoot, originalRel, sourceUrl) => {
	const rel = originalRelFromRef(originalRel) || String(originalRel || "").trim();
	if (!rel) return null;
	const bases = [];
	if (sourceUrl && isVirtualFsPath(sourceUrl)) bases.push(getDir(sourceUrl));
	if (mountRoot) bases.push(mountRoot);
	const seen = /* @__PURE__ */ new Set();
	for (const base of bases) for (const candidate of relPathCandidates(rel)) {
		const path = normalizePath$1(base, candidate);
		if (!path || seen.has(path)) continue;
		seen.add(path);
		const file = asProvidedFile(await provide(path).catch(() => null));
		if (file) return file;
	}
	return null;
};
/** `assets/logo/x.png` → also `logo/x.png`, `x.png` (picker was `assets/` or `logo/`). */
var relPathCandidates = (rel) => {
	const clean = String(rel || "").trim().replace(/^\.\//, "").replace(/^\/+/, "");
	if (!clean || /^(?:[a-zA-Z][a-zA-Z\d+\-.]*:|\/\/)/.test(clean)) return [];
	const parts = clean.split(/[\\/]/).filter(Boolean);
	return parts.map((_, i) => parts.slice(i).join("/"));
};
var findFileByBasename = async (dir, basename, depth = 5) => {
	try {
		return await (await dir.getFileHandle(basename, { create: false })).getFile();
	} catch {}
	if (depth <= 0) return null;
	for await (const [, handle] of dir.entries()) {
		if (handle.kind !== "directory") continue;
		const found = await findFileByBasename(handle, basename, depth - 1);
		if (found) return found;
	}
	return null;
};
/** Walk a picked folder so the viewer can resolve `./assets/…` by relative path or basename. */
var indexDirectoryFiles = async (dir, prefix = "", depth = 8, acc = []) => {
	if (depth < 0) return acc;
	for await (const [name, handle] of dir.entries()) {
		const rel = prefix ? `${prefix}/${name}` : name;
		if (handle.kind === "file") try {
			acc.push({
				rel,
				file: await handle.getFile()
			});
		} catch {}
		else if (handle.kind === "directory") await indexDirectoryFiles(handle, rel, depth - 1, acc);
	}
	return acc;
};
/** Read a markdown-relative file from a picked directory (any ancestor of the file). */
var resolveFileUnderDirectory = async (dir, rel) => {
	if (!dir) return null;
	const candidates = relPathCandidates(rel);
	for (const candidate of candidates) {
		const handle = await walkExactFile(dir, candidate);
		if (!handle) continue;
		try {
			return await handle.getFile();
		} catch {}
	}
	const base = candidates.at(-1);
	if (!base || base.includes("/")) return null;
	return findFileByBasename(dir, base);
};
/** Chromium File System Access — pick the folder that holds images / includes. */
var pickAssetDirectory = async (options = {}) => {
	const pick = globalThis.showDirectoryPicker;
	if (typeof pick !== "function") return null;
	try {
		return await pick({
			mode: options.mode || "read",
			id: options.id || "markdown-assets",
			startIn: options.startIn
		});
	} catch (error) {
		if (error?.name === "AbortError") return null;
		console.warn("[markdown-assets] showDirectoryPicker failed", error);
		return null;
	}
};
/** Watch a handle with experimental FileSystemObserver. */
var observeFileSystemHandle = (handle, onRecords) => {
	const Ctor = globalThis.FileSystemObserver;
	if (typeof Ctor !== "function" || !handle) return null;
	try {
		const observer = new Ctor((records) => onRecords(records));
		const obs = observer;
		Promise.resolve(obs.observe(handle, { recursive: true })).catch(() => Promise.resolve(obs.observe(handle))).catch(() => {});
		return { disconnect: () => observer.disconnect?.() };
	} catch {
		return null;
	}
};
/** Map a picked directory to `/mounts/<id>/` for `provide()` + relative markdown URLs. */
var mountPickedDirectory = (dir, prefix = "md") => {
	const root = `/mounts/${prefix}-${Date.now().toString(36)}/`;
	registerDirectoryRoot(root, dir);
	return root;
};
/** Walk a directory tree for the relative path of a file handle. */
var findEntryRelPath = async (dir, target) => {
	for await (const [name, handle] of dir.entries()) if (handle.kind === "file") try {
		if (await handle.isSameEntry(target)) return name;
	} catch {}
	else if (handle.kind === "directory") {
		const inner = await findEntryRelPath(handle, target);
		if (inner) return `${name}/${inner}`;
	}
	return null;
};
var ABSOLUTE_OR_EMBEDDED = /^(?:[a-zA-Z][a-zA-Z\d+\-.]*:|\/\/|#|data:|blob:)/;
/** Relative `![](…)` / `src` / `href` refs that need a sibling folder or sidecar files. */
var collectRelativeMarkdownAssetRefs = (markdown) => {
	const refs = /* @__PURE__ */ new Set();
	const md = String(markdown || "");
	for (const re of [/!\[[^\]]*\]\(\s*<?([^)\s>]+)>?/g, /\b(?:src|href)=["']([^"']+)["']/gi]) {
		re.lastIndex = 0;
		let match = re.exec(md);
		while (match) {
			const raw = String(match[1] || "").trim();
			if (raw && !ABSOLUTE_OR_EMBEDDED.test(raw)) refs.add(raw.replace(/^\.\//, ""));
			match = re.exec(md);
		}
	}
	return [...refs];
};
var basenameOf = (value) => String(value || "").split(/[\\/]/).pop() || String(value || "");
/** True when the markdown points at local assets that are not already in the transfer. */
var markdownNeedsBoundDirectory = (markdown, sidecarNames = []) => {
	const refs = collectRelativeMarkdownAssetRefs(markdown);
	if (!refs.length) return false;
	const names = new Set(sidecarNames.map((name) => basenameOf(name).toLowerCase()).filter(Boolean));
	return refs.some((ref) => !names.has(basenameOf(ref).toLowerCase()));
};
/**
* Offer `showDirectoryPicker` (same user-activation as Launch Queue when possible).
* Cancel / missing API → null; caller continues with the File body alone.
*/
var bindDirectoryForLaunchedFiles = async (options) => {
	const files = Array.isArray(options.files) ? options.files : [];
	const mdName = String(options.filename || "").trim();
	const mdFile = mdName && files.find((file) => file.name === mdName) || files.find((file) => /\.(?:md|markdown|mdown|mkd|mkdn|mdtxt|mdtext)$/i.test(file.name)) || files[0];
	let text = String(options.markdownText || "");
	if (!text && mdFile) try {
		text = await mdFile.text();
	} catch {
		text = "";
	}
	const sidecars = files.filter((file) => file !== mdFile).map((file) => file.name);
	if (!markdownNeedsBoundDirectory(text, sidecars)) return null;
	const dir = await pickAssetDirectory({
		startIn: options.startIn,
		id: "markdown-assets",
		mode: "read"
	});
	if (!dir) return null;
	const root = mountPickedDirectory(dir, "md");
	let rel = mdFile?.name || mdName || "document.md";
	const start = options.startIn;
	if (start && start.kind === "file") {
		const found = await findEntryRelPath(dir, start);
		if (found) rel = found;
	}
	return {
		root,
		virtualPath: `${root}${rel}`
	};
};
var MARKDOWN_INPUT_ACCEPT = ".md,.markdown,.mdown,.mkd,.mkdn,.mdtxt,.mdtext,.txt,text/markdown,text/plain";
var pickFilesViaInput = (options) => new Promise((resolve) => {
	const input = document.createElement("input");
	input.type = "file";
	if (options.accept) input.accept = options.accept;
	if (options.multiple) input.multiple = true;
	if (options.directory) {
		input.setAttribute("webkitdirectory", "");
		input.setAttribute("directory", "");
		input.multiple = true;
	}
	const finish = (files) => resolve(files);
	input.addEventListener("change", () => finish(Array.from(input.files || [])), { once: true });
	input.addEventListener("cancel", () => finish([]), { once: true });
	input.click();
});
var isExtensionPage = () => {
	try {
		return globalThis.location?.protocol === "chrome-extension:";
	} catch {
		return false;
	}
};
/** FSA when present; Capacitor / CRX / Firefox fall back to `<input type=file>`. */
var pickMarkdownFile = async () => {
	const pickFile = globalThis.showOpenFilePicker;
	if (!isExtensionPage() && typeof pickFile === "function") try {
		const [handle] = await pickFile({
			multiple: false,
			types: [{
				description: "Markdown",
				accept: {
					"text/markdown": [
						".md",
						".markdown",
						".mdown",
						".mkd"
					],
					"text/plain": [".txt"]
				}
			}]
		});
		if (!handle) return null;
		return {
			file: await handle.getFile(),
			sidecars: []
		};
	} catch (error) {
		if (error?.name === "AbortError") return null;
	}
	const files = await pickFilesViaInput({ accept: MARKDOWN_INPUT_ACCEPT });
	return files[0] ? {
		file: files[0],
		sidecars: []
	} : null;
};
/**
* Folder of images / includes. Chromium FSA first; otherwise `webkitdirectory`
* (Capacitor WebView + CRX) so relative `![](./assets/…)` can resolve from sidecars.
*/
var pickSidecarDirectoryFiles = async () => {
	const dir = await pickAssetDirectory({
		id: "markdown-assets",
		mode: "read"
	});
	if (dir) return {
		files: (await indexDirectoryFiles(dir)).map((row) => {
			try {
				Object.defineProperty(row.file, "webkitRelativePath", { value: row.rel });
			} catch {}
			return row.file;
		}),
		directory: dir,
		root: mountPickedDirectory(dir, "md")
	};
	return {
		files: await pickFilesViaInput({ directory: true }),
		directory: null,
		root: null
	};
};
/** PWA FSA → CRX `chrome.downloads` → Web Share (Capacitor) → `<a download>`. */
var saveMarkdownBlob = async (content, filename) => {
	const name = String(filename || "document.md").trim() || "document.md";
	const savePicker = globalThis.showSaveFilePicker;
	if (typeof savePicker === "function") try {
		const writable = await (await savePicker({
			suggestedName: name,
			types: [{
				description: "Markdown files",
				accept: { "text/markdown": [".md", ".markdown"] }
			}]
		})).createWritable();
		await writable.write(content);
		await writable.close();
		return "saved";
	} catch (error) {
		if (error?.name === "AbortError") return "cancelled";
	}
	const chromeDl = globalThis.chrome?.downloads?.download;
	const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
	if (typeof chromeDl === "function") {
		const url = URL.createObjectURL(blob);
		try {
			await chromeDl({
				url,
				filename: name,
				saveAs: true
			});
			return "downloaded";
		} catch {
			URL.revokeObjectURL(url);
		}
	}
	const file = new File([blob], name, { type: "text/markdown" });
	const nav = navigator;
	if (typeof nav.share === "function" && (!nav.canShare || nav.canShare({ files: [file] }))) try {
		await nav.share({
			files: [file],
			title: name
		});
		return "shared";
	} catch (error) {
		if (error?.name === "AbortError") return "cancelled";
	}
	try {
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = name;
		a.click();
		setTimeout(() => URL.revokeObjectURL(url), 250);
		return "downloaded";
	} catch {
		return "failed";
	}
};
//#endregion
//#region ../../modules/projects/lur.e/src/interactive/modules/LazyLoader.ts
/**
* Lazy load a component and its CSS
*/
async function lazyLoadComponent(importFn, options) {
	const { cssPath, componentName } = options;
	console.log(`[LazyLoader] Loading component: ${componentName}`);
	if (cssPath) try {
		await loadCSS(cssPath);
	} catch (error) {
		console.warn(`[LazyLoader] Failed to load CSS for ${componentName}:`, error);
	}
	try {
		const component = await importFn();
		console.log(`[LazyLoader] Successfully loaded component: ${componentName}`);
		return { component };
	} catch (error) {
		console.error(`[LazyLoader] Failed to load component ${componentName}:`, error);
		throw error;
	}
}
/**
* Load CSS dynamically
*/
async function loadCSS(href) {
	return new Promise((resolve, reject) => {
		if (document.querySelectorAll(`link[href="${href}"]`).length > 0) {
			resolve();
			return;
		}
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = href;
		link.onload = () => resolve();
		link.onerror = () => reject(/* @__PURE__ */ new Error(`Failed to load CSS: ${href}`));
		document.head.appendChild(link);
	});
}
/**
* Cache for loaded components to avoid re-loading
*/
var componentCache = /* @__PURE__ */ new Map();
/**
* Get or load a cached component
*/
async function getCachedComponent(cacheKey, importFn, options) {
	if (componentCache.has(cacheKey)) return componentCache.get(cacheKey);
	const lazyComponent = await lazyLoadComponent(importFn, options);
	componentCache.set(cacheKey, lazyComponent);
	return lazyComponent;
}
/**
* Clear component cache (useful for development/testing)
*/
function clearComponentCache() {
	componentCache.clear();
}
/**
* Dispose of cached components
*/
function disposeCachedComponents() {
	for (const [, lazyComponent] of componentCache) if (lazyComponent.dispose) lazyComponent.dispose();
	componentCache.clear();
}
//#endregion
//#region ../../modules/projects/lur.e/src/index.ts
var src_exports = /* @__PURE__ */ __exportAll({
	$behavior: () => $behavior,
	$createElement: () => $createElement,
	$mapped: () => $mapped,
	$observeAttribute: () => $observeAttribute,
	$observeInput: () => $observeInput,
	$virtual: () => $virtual,
	A: () => A,
	ANIMATABLE_BRAND: () => ANIMATABLE_BRAND,
	ANIM_LAYER: () => ANIM_LAYER,
	ANIM_TRIGGER_NAME: () => ANIM_TRIGGER_NAME,
	AnimatableValue: () => AnimatableValue,
	BAKE_CATEGORIES: () => BAKE_CATEGORIES,
	BAKE_LAYER: () => BAKE_LAYER,
	BAKE_SCREEN_ALSO: () => BAKE_SCREEN_ALSO,
	BAKE_SCREEN_ALSO_EXPLORER: () => BAKE_SCREEN_ALSO_EXPLORER,
	BAKE_SCREEN_ALSO_SETTINGS: () => BAKE_SCREEN_ALSO_SETTINGS,
	BAKE_SCREEN_CHROME: () => BAKE_SCREEN_CHROME,
	BAKE_SCREEN_MEDIA: () => BAKE_SCREEN_MEDIA,
	C: () => C,
	CODE_SELECTION_HIGHLIGHT: () => CODE_SELECTION_HIGHLIGHT,
	COPY_HACK: () => COPY_HACK,
	CSM: () => CSM,
	CSSAnchor: () => CSSAnchor,
	CSSBinder: () => CSSBinder,
	CSSCalc: () => CSSCalc,
	CSSCustomProps: () => CSSCustomProps,
	CSSInputControls: () => CSSInputControls,
	CSSInteractionStates: () => CSSInteractionStates,
	CSSMomentumScrolling: () => CSSMomentumScrolling,
	CSSPosition: () => CSSPosition,
	CSSScrollbarControls: () => CSSScrollbarControls,
	CSSTransform: () => CSSTransform,
	CSSUnitConverter: () => CSSUnitConverter,
	CSSUnitUtils: () => CSSUnitUtils,
	CSS_COLOR_PROPERTIES: () => CSS_COLOR_PROPERTIES,
	CSS_DIMENSION_UNITS: () => CSS_DIMENSION_UNITS,
	CSS_DIMENSION_UNITS_LIST: () => CSS_DIMENSION_UNITS_LIST,
	CSS_MOTION_PROPERTIES: () => CSS_MOTION_PROPERTIES,
	CSS_TYPOGRAPHY_PROPERTIES: () => CSS_TYPOGRAPHY_PROPERTIES,
	CSS_UNIT_FACTORY_ALIASES: () => CSS_UNIT_FACTORY_ALIASES,
	CSS_UNIT_TOKEN_RE: () => CSS_UNIT_TOKEN_RE,
	ClosePriority: () => ClosePriority,
	DEFAULT_CACHE_MS: () => DEFAULT_CACHE_MS,
	DEFAULT_CATEGORIES: () => DEFAULT_CATEGORIES,
	DESKTOP_DRAFT_KEY: () => DESKTOP_DRAFT_KEY,
	DESKTOP_MAIN_KEY: () => DESKTOP_MAIN_KEY,
	DOMMatrixAdapter: () => DOMMatrixAdapter,
	DecorWith: () => DecorWith,
	DragHandler: () => DragHandler,
	E: () => E,
	EventHandler: () => EventHandler,
	FileHandler: () => FileHandler,
	Fragment: () => Fragment,
	GLitElement: () => GLitElement,
	GridAnimationUtils: () => GridAnimationUtils,
	GridCellUtils: () => GridCellUtils,
	GridCoordUtils: () => GridCoordUtils,
	GridInteractionUtils: () => GridInteractionUtils,
	GridLayoutUtils: () => GridLayoutUtils,
	H: () => H,
	HOST_CSS_FALLBACK: () => HOST_CSS_FALLBACK,
	HistoryManager: () => HistoryManager,
	I: () => I,
	IDBStorage: () => IDBStorage,
	IDB_FS_ROOT: () => IDB_FS_ROOT,
	ITEM_COMPACT_KIND: () => ITEM_COMPACT_KIND,
	IdbDirectoryHandle: () => IdbDirectoryHandle,
	IdbFileHandle: () => IdbFileHandle,
	JUNCTION_DRAG_EVENTS: () => JUNCTION_DRAG_EVENTS,
	JUNCTION_RESIZE_EVENTS: () => JUNCTION_RESIZE_EVENTS,
	JUNCTION_SELECT_EVENTS: () => JUNCTION_SELECT_EVENTS,
	JunctionDragMixin: () => JunctionDragMixin,
	JunctionResizeMixin: () => JunctionResizeMixin,
	JunctionSelectMixin: () => JunctionSelectMixin,
	LAYER_NAME: () => LAYER_NAME,
	LAYER_OPEN: () => LAYER_OPEN,
	LongHoverHandler: () => LongHoverHandler,
	LongPressHandler: () => LongPressHandler,
	M: () => M$1,
	Matrix2D: () => Matrix2D,
	Matrix3D: () => Matrix3D,
	Matrix4D: () => Matrix4D,
	OOBTrigger: () => OOBTrigger,
	OPFS_SUPPORT_KEY: () => OPFS_SUPPORT_KEY,
	OWNER: () => "DOM",
	Q: () => Q,
	Qp: () => Qp,
	ReactiveAnimation: () => ReactiveAnimation,
	ReactiveCSSValue: () => ReactiveCSSValue,
	ReactiveElementSize: () => ReactiveElementSize,
	ReactiveMediaQuery: () => ReactiveMediaQuery,
	ReactiveScroll: () => ReactiveScroll,
	ReactiveTransform: () => ReactiveTransform,
	ReactiveViewport: () => ReactiveViewport,
	ResizeHandler: () => ResizeHandler,
	S: () => S,
	STYLE_THEME_ATTRS: () => STYLE_THEME_ATTRS,
	STYLE_THEME_OBSERVE_ATTRS: () => STYLE_THEME_OBSERVE_ATTRS,
	ScrollBar: () => ScrollBar,
	ScrollbarThemeManager: () => ScrollbarThemeManager,
	SelectionController: () => SelectionController,
	StorageKeys: () => StorageKeys,
	SwM: () => SwM,
	SwipeHandler: () => SwipeHandler,
	T: () => T,
	Task: () => Task,
	TemplateManager: () => TemplateManager,
	UX_HOST_LAYERS: () => UX_HOST_LAYERS,
	UX_PRELOAD_HOST_CSS: () => UX_PRELOAD_HOST_CSS,
	UnderlyingShadow: () => UnderlyingShadow,
	VEELA_CASCADE_LAYERS: () => VEELA_CASCADE_LAYERS,
	VIEWER_CSS_LAYER_ORDER: () => VIEWER_CSS_LAYER_ORDER,
	VIEWER_RUNTIME_LAYERS: () => VIEWER_RUNTIME_LAYERS,
	Vector2D: () => Vector2D,
	Vector3D: () => Vector3D,
	Vector4D: () => Vector4D,
	VoiceInputManager: () => VoiceInputManager,
	absolutePosition: () => absolutePosition,
	absoluteRef: () => absoluteRef,
	acosRef: () => acosRef,
	addAdoptedSheetToElement: () => addAdoptedSheetToElement,
	addProxiedEvent: () => addProxiedEvent,
	addRef: () => addRef,
	addToBank: () => addToBank,
	addVector2D: () => addVector2D,
	addVector3D: () => addVector3D,
	addVector4D: () => addVector4D,
	adoptedAppliedText: () => adoptedAppliedText,
	adoptedBlobMap: () => adoptedBlobMap,
	adoptedFilled: () => adoptedFilled,
	adoptedLayerMap: () => adoptedLayerMap,
	adoptedMap: () => adoptedMap,
	adoptedSelectorMap: () => adoptedSelectorMap,
	adoptedShadowLayerMap: () => adoptedShadowLayerMap,
	adoptedShadowSelectorMap: () => adoptedShadowSelectorMap,
	adoptedStyleSheetsCache: () => adoptedStyleSheetsCache,
	agWrapEvent: () => agWrapEvent,
	alives: () => alives,
	animKeyframeRefs: () => animKeyframeRefs,
	animatable: () => animatable,
	animate: () => animate,
	appear: () => appear,
	appendAsLayer: () => appendAsLayer,
	appendAsOverlay: () => appendAsOverlay,
	appendAsUnderlying: () => appendAsUnderlying,
	appendChild: () => appendChild,
	appendScrollbarOverlay: () => appendScrollbarOverlay,
	applyAnchorName: () => applyAnchorName,
	applyNormalizedInlineStyle: () => applyNormalizedInlineStyle,
	asProvidedFile: () => asProvidedFile,
	asinRef: () => asinRef,
	atan2Ref: () => atan2Ref,
	atanRef: () => atanRef,
	attachCodeOverlay: () => attachCodeOverlay,
	attachFile: () => attachFile,
	attrLink: () => attrLink,
	attrRef: () => attrRef,
	bakeAlsoQueriesFor: () => bakeAlsoQueriesFor,
	bakeComputedStyle: () => bakeComputedStyle,
	bakeScreenColors: () => bakeScreenColors,
	bakeThemeFingerprint: () => bakeThemeFingerprint,
	bakedCache: () => bakedCache,
	bakedFollowers: () => bakedFollowers,
	bakedLive: () => bakedLive,
	bakedStyles: () => bakedStyles,
	bank: () => bank,
	batteryStatusRef: () => batteryStatusRef,
	bindAnchorableDragResize: () => bindAnchorableDragResize,
	bindAnimated: () => bindAnimated,
	bindAnimatedBatch: () => bindAnimatedBatch,
	bindBeh: () => bindBeh,
	bindConditionalAnimation: () => bindConditionalAnimation,
	bindCssAnimation: () => bindCssAnimation,
	bindCtrl: () => bindCtrl,
	bindDirectoryForLaunchedFiles: () => bindDirectoryForLaunchedFiles,
	bindDraggable: () => bindDraggable,
	bindDropToDir: () => bindDropToDir,
	bindFormControl: () => bindFormControl,
	bindForms: () => bindForms,
	bindHandler: () => bindHandler,
	bindMenuItemClickHandler: () => bindMenuItemClickHandler,
	bindMorph: () => bindMorph,
	bindOutsideDismiss: () => bindOutsideDismiss,
	bindPreset: () => bindPreset,
	bindScrollbarPosition: () => bindScrollbarPosition,
	bindSpring: () => bindSpring,
	bindStorageRootsRefresher: () => bindStorageRootsRefresher,
	bindStyle: () => bindStyle,
	bindTransition: () => bindTransition,
	bindTriggerHandlers: () => bindTriggerHandlers,
	bindWhileConnected: () => bindWhileConnected,
	bindWith: () => bindWith,
	bindWithAnimation: () => bindWithAnimation,
	bindWithRect: () => bindWithRect,
	blobToBase64: () => blobToBase64,
	blobToBytes: () => blobToBytes,
	blobToDataUrl: () => blobToDataUrl,
	blobToText: () => blobToText$1,
	blobURLMap: () => blobURLMap,
	boolDepIconRef: () => boolDepIconRef,
	booleanRef: () => booleanRef,
	boundingBoxAnchorRef: () => boundingBoxAnchorRef,
	buildAnimationTiming: () => buildAnimationTiming,
	buildBakedCssText: () => buildBakedCssText,
	buildWebAnimationKeyframes: () => buildWebAnimationKeyframes,
	cacheBlobContentMap: () => cacheBlobContentMap,
	cacheContentMap: () => cacheContentMap,
	cacheMap: () => cacheMap,
	cancelAnimations: () => cancelAnimations,
	ceilCell: () => ceilCell,
	checkCellCollision: () => checkCellCollision,
	checkedLink: () => checkedLink,
	checkedRef: () => checkedRef,
	clampCell: () => clampCell,
	clampPointToRect: () => clampPointToRect,
	clampRef: () => clampRef,
	clampedValueRef: () => clampedValueRef,
	clearAllInDirectory: () => clearAllInDirectory,
	clearComponentCache: () => clearComponentCache,
	clearDesktopDraft: () => clearDesktopDraft,
	clickPrevention: () => clickPrevention,
	closeByGroup: () => closeByGroup,
	closeHighestPriority: () => closeHighestPriority,
	collectBakeAlsoHosts: () => collectBakeAlsoHosts,
	collectBakeScreenHosts: () => collectBakeScreenHosts,
	collectBakedDeclarations: () => collectBakedDeclarations,
	collectRelativeMarkdownAssetRefs: () => collectRelativeMarkdownAssetRefs,
	colorScheme: () => colorScheme,
	compactIconSrcForStorage: () => compactIconSrcForStorage,
	compileInlineStyleAttribute: () => compileInlineStyleAttribute,
	compileKeyframesCss: () => compileKeyframesCss,
	compileTriggerCss: () => compileTriggerCss,
	connectRemoteMountedFs: () => connectRemoteMountedFs,
	constrainRectAspectRatio: () => constrainRectAspectRatio,
	containsMarker: () => containsMarker,
	convertPointerToValue: () => convertPointerToValue,
	convertPointerToValueShift: () => convertPointerToValueShift,
	convertValueToPointer: () => convertValueToPointer,
	copy: () => copy,
	copyCodeMetrics: () => copyCodeMetrics,
	copyFromOneHandlerToAnother: () => copyFromOneHandlerToAnother,
	copyHandleTree: () => copyHandleTree,
	copyWithResult: () => copyWithResult,
	correctValue: () => correctValue,
	cosRef: () => cosRef,
	createAnimatedRef: () => createAnimatedRef,
	createAnimationSequence: () => createAnimationSequence,
	createBackNavigableModal: () => createBackNavigableModal,
	createBlurShadow: () => createBlurShadow,
	createBoxShadow: () => createBoxShadow,
	createContentAddressedStore: () => createContentAddressedStore,
	createDropShadow: () => createDropShadow,
	createElement: () => createElement,
	createFileHandler: () => createFileHandler,
	createHandler: () => createHandler,
	createHistoryManager: () => createHistoryManager,
	createHttpsFsTransport: () => createHttpsFsTransport,
	createIndexedDbFsStore: () => createIndexedDbFsStore,
	createJsonFile: () => createJsonFile,
	createMarkdownFile: () => createMarkdownFile,
	createMemoryIdbFsStore: () => createMemoryIdbFsStore,
	createPanelUnderShadow: () => createPanelUnderShadow,
	createReactiveScrollbarOverlay: () => createReactiveScrollbarOverlay,
	createRect2D: () => createRect2D,
	createRemoteProvideBackend: () => createRemoteProvideBackend,
	createShapedTileShadow: () => createShapedTileShadow,
	createSocketIoFsTransport: () => createSocketIoFsTransport,
	createStyleId: () => createStyleId,
	createTemplateManager: () => createTemplateManager,
	createTextFile: () => createTextFile,
	createTypedUnitValue: () => createTypedUnitValue,
	createUnderlyingShadow: () => createUnderlyingShadow,
	createWebSocketFsTransport: () => createWebSocketFsTransport,
	crossProduct3D: () => crossProduct3D,
	css: () => css,
	cssEmptyLayerRule: () => cssEmptyLayerRule,
	cssImportWithLayer: () => cssImportWithLayer,
	cssLayerBlock: () => cssLayerBlock,
	cssLayerOrder: () => cssLayerOrder,
	cssTextForAdoptedSheet: () => cssTextForAdoptedSheet,
	cssTextRequiresInlineStyleElement: () => cssTextRequiresInlineStyleElement,
	cssUnitConstructorName: () => cssUnitConstructorName,
	cssUnitFactoryName: () => cssUnitFactoryName,
	cssVarLink: () => cssVarLink,
	cssVarRef: () => cssVarRef,
	ctxMenuTrigger: () => ctxMenuTrigger,
	cubeRootRef: () => cubeRootRef,
	currentColorFromCenterRef: () => currentColorFromCenterRef,
	currentColorFromPointRef: () => currentColorFromPointRef,
	currentHandleMap: () => currentHandleMap,
	customElement: () => customElement,
	datasetLink: () => datasetLink,
	datasetRef: () => datasetRef,
	decodeBase64ToBytes: () => decodeBase64ToBytes,
	decodeDesktopState: () => decodeDesktopState,
	decorHide: () => decorHide,
	decorShow: () => decorShow,
	defaultLogger: () => defaultLogger,
	defaultZIndexShift: () => defaultZIndexShift,
	defineAnimation: () => defineAnimation,
	defineElement: () => defineElement,
	detectTypeByRelPath: () => detectTypeByRelPath,
	directHandlers: () => directHandlers,
	directoryCacheMap: () => directoryCacheMap,
	disappear: () => disappear,
	dispatchLifecycleEvent: () => dispatchLifecycleEvent,
	disposeCachedComponents: () => disposeCachedComponents,
	divideRef: () => divideRef,
	divideVector2D: () => divideVector2D,
	divideVector3D: () => divideVector3D,
	divideVector4D: () => divideVector4D,
	doAnimation: () => doAnimation,
	doObserve: () => doObserve,
	dotProduct2D: () => dotProduct2D,
	dotProduct3D: () => dotProduct3D,
	dotProduct4D: () => dotProduct4D,
	downloadByPath: () => downloadByPath,
	downloadFile: () => downloadFile,
	downloadMarkdown: () => downloadMarkdown,
	downloadTextFile: () => downloadTextFile,
	dragSlider: () => dragSlider,
	draggingPointerMap: () => draggingPointerMap,
	dropAsTempFile: () => dropAsTempFile,
	dropFile: () => dropFile,
	dropMenuTrigger: () => dropMenuTrigger,
	dynamicBgColors: () => dynamicBgColors,
	dynamicNativeFrame: () => dynamicNativeFrame,
	dynamicTheme: () => dynamicTheme,
	easeInOutCubic: () => easeInOutCubic,
	easeOutBounce: () => easeOutBounce,
	effectProperty: () => effectProperty,
	elMap: () => elMap$1,
	electronAPI: () => electronAPI,
	elementPointerMap: () => elementPointerMap,
	encodeBytesToBase64: () => encodeBytesToBase64,
	encodeDesktopState: () => encodeDesktopState,
	enhancedIntersectionBoxAnchorRef: () => enhancedIntersectionBoxAnchorRef,
	ensureAdoptedSheetContent: () => ensureAdoptedSheetContent,
	ensureHostStyles: () => ensureHostStyles,
	ensureRemoteMountedFs: () => ensureRemoteMountedFs,
	ensureStyleScopeSelector: () => ensureStyleScopeSelector,
	ensureWorker: () => ensureWorker,
	escapeCSSIdentifier: () => escapeCSSIdentifier,
	escapeRegExp: () => escapeRegExp,
	eventTrigger: () => eventTrigger,
	expandIconSrcForDom: () => expandIconSrcForDom,
	extendQueryPrototype: () => extendQueryPrototype,
	extractTextFromDataTransfer: () => extractTextFromDataTransfer,
	faviconRefForHref: () => faviconRefForHref,
	faviconUrlForHostname: () => faviconUrlForHostname,
	fetchAndCache: () => fetchAndCache,
	fetchAsInline: () => fetchAsInline,
	fileToDataUrl: () => fileToDataUrl,
	findEntryRelPath: () => findEntryRelPath,
	findPathBetweenCells: () => findPathBetweenCells,
	floorCell: () => floorCell,
	formLink: () => formLink,
	formRef: () => formRef,
	generalFileImportDesc: () => generalFileImportDesc,
	generateAnchorId: () => generateAnchorId,
	generateName: () => generateName,
	generateScrollbarCSS: () => generateScrollbarCSS,
	getActiveCloseable: () => getActiveCloseable,
	getActiveCloseables: () => getActiveCloseables,
	getAdjacentCells: () => getAdjacentCells,
	getAdoptedStyleRule: () => getAdoptedStyleRule,
	getBakedStyle: () => getBakedStyle,
	getBy: () => getBy,
	getCachedComponent: () => getCachedComponent,
	getCellDistance: () => getCellDistance,
	getCellsInRange: () => getCellsInRange,
	getClampedValue: () => getClampedValue,
	getComputedZIndex: () => getComputedZIndex,
	getDir: () => getDir,
	getDirectoryHandle: () => getDirectoryHandle,
	getElementZoom: () => getElementZoom,
	getExistsZIndex: () => getExistsZIndex,
	getFileExtension: () => getFileExtension,
	getFileHandle: () => getFileHandle,
	getFileWriter: () => getFileWriter,
	getFocused: () => getFocused,
	getGlobalContextMenu: () => getGlobalContextMenu,
	getHandler: () => getHandler,
	getIDBItem: () => getIDBItem,
	getIdbRoot: () => getIdbRoot,
	getIgnoreNextPopState: () => getIgnoreNextPopState,
	getInputValues: () => getInputValues,
	getItem: () => getItem,
	getJSONFromFile: () => getJSONFromFile,
	getLeast: () => getLeast,
	getMarkDownFromFile: () => getMarkDownFromFile,
	getMimeTypeByFilename: () => getMimeTypeByFilename,
	getOrCreateLayerRule: () => getOrCreateLayerRule,
	getPadding: () => getPadding,
	getParentOrShadowRoot: () => getParentOrShadowRoot,
	getPropertyValue: () => getPropertyValue,
	getPxValue: () => getPxValue,
	getSessionItem: () => getSessionItem,
	getSpeechPrompt: () => getSpeechPrompt,
	getString: () => getString,
	getStyleLayer: () => getStyleLayer,
	getStyleRule: () => getStyleRule,
	getTransform: () => getTransform,
	getTransformOrigin: () => getTransformOrigin,
	getValueWithShift: () => getValueWithShift,
	getWindowConstructor: () => getWindowConstructor,
	ghostImage: () => ghostImage,
	grabForDrag: () => grabForDrag,
	handleByPointer: () => handleByPointer,
	handleError: () => handleError,
	handleForFixPosition: () => handleForFixPosition,
	handleIncomingEntries: () => handleIncomingEntries,
	hasActiveCloseable: () => hasActiveCloseable,
	hasFileExtension: () => hasFileExtension,
	hasInBank: () => hasInBank,
	hasTypedOM: () => hasTypedOM,
	hash: () => hash,
	hashBlob: () => hashBlob,
	hashTargetLink: () => hashTargetLink,
	hashTargetRef: () => hashTargetRef,
	historyBack: () => historyBack,
	historyState: () => historyState,
	historyStorage: () => historyStorage,
	historyViewRef: () => historyViewRef,
	hostnameToFaviconRef: () => hostnameToFaviconRef,
	html: () => html,
	htmlBuilder: () => htmlBuilder,
	hypotRef: () => hypotRef,
	ignoreNextPopState: () => ignoreNextPopState,
	imageImportDesc: () => imageImportDesc,
	implementDropEvent: () => implementDropEvent,
	implementPasteEvent: () => implementPasteEvent,
	indexDirectoryFiles: () => indexDirectoryFiles,
	indicationRef: () => indicationRef,
	initBackNavigation: () => initBackNavigation,
	initClipboardReceiver: () => initClipboardReceiver,
	initGlobalClipboard: () => initGlobalClipboard,
	initHistory: () => initHistory,
	initVisibility: () => initVisibility,
	intersectionBoxAnchorRef: () => intersectionBoxAnchorRef,
	invalidateBakedStyles: () => invalidateBakedStyles,
	isAdoptedSheetEmpty: () => isAdoptedSheetEmpty,
	isAnimatableValue: () => isAnimatableValue,
	isBase64Like: () => isBase64Like,
	isChromeExtension: () => isChromeExtension,
	isClipboardAvailable: () => isClipboardAvailable,
	isClipboardWriteAvailable: () => isClipboardWriteAvailable,
	isCodeFile: () => isCodeFile,
	isColorToken: () => isColorToken,
	isCssElement: () => isCssElement,
	isCssLayerName: () => isCssLayerName,
	isDocument: () => isDocument,
	isEffectivelyEmptyStyleText: () => isEffectivelyEmptyStyleText,
	isElementVisible: () => isElementVisible,
	isExternalHttpHrefForFavicon: () => isExternalHttpHrefForFavicon,
	isFsDirectoryHandle: () => isFsDirectoryHandle,
	isIdbAvailable: () => isIdbAvailable,
	isIdbFsHandle: () => isIdbFsHandle,
	isImageFile: () => isImageFile,
	isLayerBlockRule: () => isLayerBlockRule,
	isLocalStorageAvailable: () => isLocalStorageAvailable,
	isMarkdownFile: () => isMarkdownFile,
	isMarkdownRelativeRef: () => isMarkdownRelativeRef,
	isNativeCSSStyleValue: () => isNativeCSSStyleValue,
	isNotExtended: () => isNotExtended,
	isOpfsBackendActive: () => isOpfsBackendActive,
	isOpfsCapabilityAvailable: () => isOpfsCapabilityAvailable,
	isOpfsSupportEnabled: () => isOpfsSupportEnabled,
	isProvidedDirectory: () => isProvidedDirectory,
	isReactiveStyleValue: () => isReactiveStyleValue,
	isReactiveTrigger: () => isReactiveTrigger,
	isScrollDriven: () => isScrollDriven,
	isShadowRoot: () => isShadowRoot,
	isSpeechRecognitionAvailable: () => isSpeechRecognitionAvailable,
	isStaticStyleInterpolation: () => isStaticStyleInterpolation,
	isStyleBinding: () => isStyleBinding,
	isStyleHost: () => isStyleHost,
	isStyleValue: () => isStyleValue,
	isTextFile: () => isTextFile,
	isUnitValue: () => isUnitValue,
	isValidColor: () => isValidColor,
	isViewDriven: () => isViewDriven,
	isVirtualFsPath: () => isVirtualFsPath,
	itemClickHandle: () => itemClickHandle,
	jsx: () => jsx,
	jsxDEV: () => jsxDEV,
	jsxs: () => jsxs,
	junctionToBox: () => junctionToBox,
	layerCounter: () => layerCounter,
	lazyAddEventListener: () => lazyAddEventListener,
	lazyLoadComponent: () => lazyLoadComponent,
	listenForClipboardRequests: () => listenForClipboardRequests,
	listenerOptionsFor: () => listenerOptionsFor,
	loadAsAdopted: () => loadAsAdopted,
	loadBlobStyle: () => loadBlobStyle,
	loadCachedStyles: () => loadCachedStyles,
	loadDesktopRaw: () => loadDesktopRaw,
	loadInlineStyle: () => loadInlineStyle,
	loadStyleSheet: () => loadStyleSheet,
	localStorageLink: () => localStorageLink,
	localStorageLinkMap: () => localStorageLinkMap,
	localStorageRef: () => localStorageRef,
	magnitude2D: () => magnitude2D,
	magnitude3D: () => magnitude3D,
	magnitude4D: () => magnitude4D,
	makeAnchorElement: () => makeAnchorElement,
	makeClickOutsideTrigger: () => makeClickOutsideTrigger,
	makeHostLayerOrder: () => makeHostLayerOrder,
	makeInteractive: () => makeInteractive,
	makeInterruptTrigger: () => makeInterruptTrigger,
	makeLinker: () => makeLinker,
	makeMenuHandler: () => makeMenuHandler,
	makeRef: () => makeRef,
	makeRenderer: () => makeRenderer,
	makeShiftTrigger: () => makeShiftTrigger,
	makeTask: () => makeTask,
	makeTasks: () => makeTasks,
	makeUIState: () => makeUIState,
	makeWeakRef: () => makeWeakRef,
	mappedRoots: () => mappedRoots,
	markdownNeedsBoundDirectory: () => markdownNeedsBoundDirectory,
	matchMappedRoot: () => matchMappedRoot,
	matchMediaLink: () => matchMediaLink,
	matchMediaRef: () => matchMediaRef,
	matchProvideBackend: () => matchProvideBackend,
	matrix2x2Ref: () => matrix2x2Ref,
	matrix3x3Ref: () => matrix3x3Ref,
	matrix4x4Ref: () => matrix4x4Ref,
	mayNotPromise: () => mayNotPromise,
	maybeStartThemeEngine: () => maybeStartThemeEngine,
	mergeByKey: () => mergeByKey,
	mixinDisposers: () => mixinDisposers,
	modulusRef: () => modulusRef,
	momentumScroll: () => momentumScroll,
	mountAsRoot: () => mountAsRoot,
	mountPickedDirectory: () => mountPickedDirectory,
	multiplyRef: () => multiplyRef,
	multiplyVector2D: () => multiplyVector2D,
	multiplyVector3D: () => multiplyVector3D,
	multiplyVector4D: () => multiplyVector4D,
	mutationTrigger: () => mutationTrigger,
	navigate: () => navigate,
	navigationEnable: () => navigationEnable,
	normalize2D: () => normalize2D,
	normalize3D: () => normalize3D,
	normalize4D: () => normalize4D,
	normalizeCssForLayer: () => normalizeCssForLayer,
	normalizeDataAsset: () => normalizeDataAsset,
	normalizeIconSrcFromPayload: () => normalizeIconSrcFromPayload,
	normalizeIdbNodePath: () => normalizeIdbNodePath,
	normalizeIterationCount: () => normalizeIterationCount,
	normalizeIterations: () => normalizeIterations,
	normalizePath: () => normalizePath$1,
	notifyStyleTreeHosts: () => notifyStyleTreeHosts,
	numberRef: () => numberRef,
	observeConnect: () => observeConnect,
	observeDisconnect: () => observeDisconnect,
	observeFileSystemHandle: () => observeFileSystemHandle,
	observeSizeLink: () => observeSizeLink,
	observeStyleTree: () => observeStyleTree,
	onScroll: () => onScroll,
	onView: () => onView,
	openDirectory: () => openDirectory,
	openFile: () => openFile,
	openImageFilePicker: () => openImageFilePicker,
	openPickerAndWrite: () => openPickerAndWrite,
	operated: () => operated,
	opfsModifyJson: () => opfsModifyJson,
	optimizeCellLayout: () => optimizeCellLayout,
	orientLink: () => orientLink,
	orientRef: () => orientRef,
	originalBack: () => originalBack,
	originalForward: () => originalForward,
	originalGo: () => originalGo,
	originalPush: () => originalPush,
	originalRelFromRef: () => originalRelFromRef,
	originalReplace: () => originalReplace,
	packHrefInline: () => packHrefInline,
	paddingBoxSize: () => paddingBoxSize,
	parallelAnimations: () => parallelAnimations,
	parseDataUrl: () => parseDataUrl,
	parseDesktopItemCompact: () => parseDesktopItemCompact,
	parseJsonSafely: () => parseJsonSafely,
	parseLength: () => parseLength,
	parseOrigin: () => parseOrigin,
	parseTime: () => parseTime,
	persistDesktopDraft: () => persistDesktopDraft,
	persistDesktopMain: () => persistDesktopMain,
	pickAssetDirectory: () => pickAssetDirectory,
	pickBgColor: () => pickBgColor,
	pickFile: () => pickFile,
	pickFiles: () => pickFiles,
	pickFromCenter: () => pickFromCenter,
	pickMarkdownFile: () => pickMarkdownFile,
	pickSidecarDirectoryFiles: () => pickSidecarDirectoryFiles,
	placeOverlay: () => placeOverlay,
	pointToRectDistance: () => pointToRectDistance,
	pointerAnchorRef: () => pointerAnchorRef,
	pointerEventLink: () => pointerEventLink,
	pointerEventRef: () => pointerEventRef,
	post: () => post,
	powerRef: () => powerRef,
	preloadStyle: () => preloadStyle,
	progress: () => progress,
	promiseOrDirect: () => promiseOrDirect,
	propStore: () => propStore,
	property: () => property,
	provide: () => provide,
	provideBoundRelative: () => provideBoundRelative,
	pruneEmptyStyleAttribute: () => pruneEmptyStyleAttribute,
	queryFirstDeep: () => queryFirstDeep,
	radioValueLink: () => radioValueLink,
	radioValueRef: () => radioValueRef,
	reactiveInputHandleTransform: () => reactiveInputHandleTransform,
	reactiveInputPosition: () => reactiveInputPosition,
	reactiveScrollbarSize: () => reactiveScrollbarSize,
	readAsObjectURL: () => readAsObjectURL,
	readAttachedCSSUnit: () => readAttachedCSSUnit,
	readFile: () => readFile,
	readFileAsArrayBuffer: () => readFileAsArrayBuffer,
	readFileAsDataURL: () => readFileAsDataURL,
	readFileAsText: () => readFileAsText,
	readFileUTF8: () => readFileUTF8,
	readMarkdownFromUrl: () => readMarkdownFromUrl,
	readSheetRuleCount: () => readSheetRuleCount,
	readText: () => readText,
	rebakeBatch: () => rebakeBatch,
	rebakeComputedStyle: () => rebakeComputedStyle,
	rectArea: () => rectArea,
	rectCenter: () => rectCenter,
	rectContainsPoint: () => rectContainsPoint,
	rectIntersects: () => rectIntersects,
	rectUnion: () => rectUnion,
	refCtl: () => refCtl,
	refTrigger: () => refTrigger,
	reflectControllers: () => reflectControllers,
	refreshMappedStorageRoots: () => refreshMappedStorageRoots,
	registerCloseable: () => registerCloseable,
	registerColorProperty: () => registerColorProperty,
	registerContextMenu: () => registerContextMenu,
	registerDirectoryRoot: () => registerDirectoryRoot,
	registerLayerElement: () => registerLayerElement,
	registerModal: () => registerModal,
	registerOverlay: () => registerOverlay,
	registerOverlayElement: () => registerOverlayElement,
	registerProvideBackend: () => registerProvideBackend,
	registerSidebar: () => registerSidebar,
	registerStyleTreeHook: () => registerStyleTreeHook,
	registerTask: () => registerTask,
	registerTransientOverlay: () => registerTransientOverlay,
	registerUnderlyingElement: () => registerUnderlyingElement,
	registeredProperties: () => registeredProperties,
	rehydrateAdoptedStyleSheets: () => rehydrateAdoptedStyleSheets,
	rehydrateConstructableSheets: () => rehydrateConstructableSheets,
	relPathCandidates: () => relPathCandidates,
	relativePosition: () => relativePosition,
	reloadInto: () => reloadInto,
	remove: () => remove,
	removeAdopted: () => removeAdopted,
	removeChild: () => removeChild,
	removeDirectory: () => removeDirectory,
	removeFile: () => removeFile,
	removeFromBank: () => removeFromBank,
	removeIDBItem: () => removeIDBItem,
	removeItem: () => removeItem,
	removeSessionItem: () => removeSessionItem,
	replaceChildren: () => replaceChildren,
	requestCopy: () => requestCopy,
	requestCopyViaCRX: () => requestCopyViaCRX,
	requestMicrophonePermission: () => requestMicrophonePermission,
	resizeTrigger: () => resizeTrigger,
	resolveCssAnimationTarget: () => resolveCssAnimationTarget,
	resolveDragging: () => resolveDragging,
	resolveFileUnderDirectory: () => resolveFileUnderDirectory,
	resolveLayerZIndex: () => resolveLayerZIndex,
	resolveOverlayHost: () => resolveOverlayHost,
	resolvePath: () => resolvePath,
	resolvePlacement: () => resolvePlacement,
	resolveRootHandle: () => resolveRootHandle,
	rotate2D: () => rotate2D,
	roundCell: () => roundCell,
	sanitizeFileName: () => sanitizeFileName,
	saveFile: () => saveFile,
	saveMarkdownBlob: () => saveMarkdownBlob,
	saveUIState: () => saveUIState,
	scale2D: () => scale2D,
	scaleRectAroundCenter: () => scaleRectAroundCenter,
	scheduleBakeScreenColors: () => scheduleBakeScreenColors,
	scheduleEnsureHostStyles: () => scheduleEnsureHostStyles,
	screenToControlValue: () => screenToControlValue,
	scrollBoundsWithBounce: () => scrollBoundsWithBounce,
	scrollLink: () => scrollLink,
	scrollRef: () => scrollRef,
	scrollSize: () => scrollSize,
	scrollbarMetrics: () => scrollbarMetrics,
	scrollbarThemes: () => scrollbarThemes,
	selectLink: () => selectLink,
	sequenceAnimations: () => sequenceAnimations,
	serializeDesktopItemCompact: () => serializeDesktopItemCompact,
	setIDBItem: () => setIDBItem,
	setIgnoreNextPopState: () => setIgnoreNextPopState,
	setInputValue: () => setInputValue,
	setItem: () => setItem,
	setOpfsSupportEnabled: () => setOpfsSupportEnabled,
	setProperty: () => setProperty,
	setSessionItem: () => setSessionItem,
	setString: () => setString,
	setStyleInRule: () => setStyleInRule,
	setStyleProperty: () => setStyleProperty,
	setStylePropertyFallback: () => setStylePropertyFallback,
	setStylePropertyTyped: () => setStylePropertyTyped,
	setStyleRule: () => setStyleRule,
	setStyleRules: () => setStyleRules,
	setStyleURL: () => setStyleURL,
	setValueByPointer: () => setValueByPointer,
	setValueByShift: () => setValueByShift,
	settingsStorage: () => settingsStorage,
	showAttributeRef: () => showAttributeRef,
	signRef: () => signRef,
	signalStatusRef: () => signalStatusRef,
	sinRef: () => sinRef,
	sizeLink: () => sizeLink,
	sizeRef: () => sizeRef,
	sliderThumbPosition: () => sliderThumbPosition,
	smoothValueTransition: () => smoothValueTransition,
	snapToGridCell: () => snapToGridCell,
	squareRootRef: () => squareRootRef,
	staggerAnimation: () => staggerAnimation,
	stopAllWatchers: () => stopAllWatchers,
	stringToBlob: () => stringToBlob,
	stringToBlobOrFile: () => stringToBlobOrFile,
	stringToFile: () => stringToFile,
	stripCssPreamble: () => stripCssPreamble,
	styleCache: () => styleCache,
	styleElementCache: () => styleElementCache,
	styleFlushPending: () => styleFlushPending,
	stylePropLink: () => stylePropLink,
	stylePropRef: () => stylePropRef,
	styleTreeHooks: () => styleTreeHooks,
	styleTreeObserved: () => styleTreeObserved,
	styleTreeRoots: () => styleTreeRoots,
	subtractRef: () => subtractRef,
	subtractVector2D: () => subtractVector2D,
	subtractVector3D: () => subtractVector3D,
	subtractVector4D: () => subtractVector4D,
	supportsConstructableStylesheet: () => supportsConstructableStylesheet,
	tanRef: () => tanRef,
	timeStatusRef: () => timeStatusRef,
	toText: () => toText,
	transformRect2D: () => transformRect2D,
	translate2D: () => translate2D,
	tryRemoteMountedList: () => tryRemoteMountedList,
	tryRemoteMountedRead: () => tryRemoteMountedRead,
	unbakeComputedStyle: () => unbakeComputedStyle,
	unbakeScreenColors: () => unbakeScreenColors,
	unmountAsRoot: () => unmountAsRoot,
	unpackHrefInline: () => unpackHrefInline,
	unregisterCloseable: () => unregisterCloseable,
	unregisterDirectoryRoot: () => unregisterDirectoryRoot,
	unregisterProvideBackend: () => unregisterProvideBackend,
	unwrapCssLayer: () => unwrapCssLayer,
	updateInput: () => updateInput,
	updateThemeBase: () => updateThemeBase,
	uploadDirectory: () => uploadDirectory,
	uploadFile: () => uploadFile,
	urlCanParse: () => urlCanParse,
	valueAsNumberLink: () => valueAsNumberLink,
	valueAsNumberRef: () => valueAsNumberRef,
	valueLink: () => valueLink,
	valueRef: () => valueRef,
	vector2Ref: () => vector2Ref,
	vector3Ref: () => vector3Ref,
	vector4Ref: () => vector4Ref,
	vectorFromArray: () => vectorFromArray,
	vectorToArray: () => vectorToArray,
	veelaCascadeOrder: () => veelaCascadeOrder,
	visibleBySelectorRef: () => visibleBySelectorRef,
	visibleLink: () => visibleLink,
	visibleRef: () => visibleRef,
	waitElementAnimations: () => waitElementAnimations,
	walkExactFile: () => walkExactFile,
	wantsDirectoryProvide: () => wantsDirectoryProvide,
	watchFsDirectory: () => watchFsDirectory,
	withInsetWithPointer: () => withInsetWithPointer,
	withProperties: () => withProperties,
	withTriggerModifiers: () => withTriggerModifiers,
	workCenterStorage: () => workCenterStorage,
	wrapCssLayer: () => wrapCssLayer,
	writeFile: () => writeFile,
	writeFileSmart: () => writeFileSmart,
	writeFilesToDir: () => writeFilesToDir,
	writeHTML: () => writeHTML,
	writeImage: () => writeImage,
	writeText: () => writeText
});
//#endregion
export { ClosePriority as $, pointerAnchorRef as A, writeText as B, createContentAddressedStore as C, dynamicTheme as D, converter as E, decodeDesktopState as F, makeTask as G, resolveOverlayHost as H, loadDesktopRaw as I, GLitElement as J, getBy as K, copy as L, makeUIState as M, saveUIState as N, placeOverlay as O, JSOX as P, vector2Ref as Q, initClipboardReceiver as R, setString as S, parse as T, elementPointerMap as U, registerTransientOverlay as V, bindOutsideDismiss as W, property as X, defineElement as Y, H as Z, decodeBase64ToBytes as _, whenAnyScreenChanges as _t, isMarkdownRelativeRef as a, navigate as at, parseDataUrl as b, isInFocus as bt, originalRelFromRef as c, Q as ct, provideBoundRelative as d, DOMMixin as dt, closeHighestPriority as et, relPathCandidates as f, ensureVirtualKeyboardOverlay as ft, writeFileSmart as g, updateVP as gt, createFileHandler as h, orientationNumberMap as ht, indexDirectoryFiles as i, registerModal as it, getSpeechPrompt as j, createTemplateManager as k, pickMarkdownFile as l, bindWith as lt, saveMarkdownBlob as m, getCorrectOrientation as mt, getCachedComponent as n, initBackNavigation as nt, mountPickedDirectory as o, E as ot, resolveFileUnderDirectory as p, fixOrientToScreen as pt, navigationEnable as q, bindDirectoryForLaunchedFiles as r, registerCloseable as rt, observeFileSystemHandle as s, M$1 as st, src_exports as t, hasActiveCloseable as tt, pickSidecarDirectoryFiles as u, handleStyleChange as ut, isBase64Like as v, MOCElement as vt, oklch as w, StorageKeys as x, makeRAFCycle as xt, normalizeDataAsset as y, addEvent as yt, initGlobalClipboard as z };
