import { D as hasValue, F as isVal, G as tryStringAsNumber, L as isValueUnit, U as toRef, b as camelToKebab, g as $getValue, h as $avoidTrigger, w as deref } from "./core2.js";
import { h as addToCallChain, i as affected } from "./object.js";
//#region ../../modules/projects/style.ts/src/maps.ts
var shared = (key, create) => globalThis[Symbol.for(key)] ??= create();
var blobURLMap = shared("dom.ts@blobURLMap", () => /* @__PURE__ */ new WeakMap());
var cacheMap = shared("dom.ts@cacheMap", () => /* @__PURE__ */ new Map());
var cacheContentMap = shared("dom.ts@cacheContentMap", () => /* @__PURE__ */ new Map());
var cacheBlobContentMap = shared("dom.ts@cacheBlobContentMap", () => /* @__PURE__ */ new WeakMap());
var adoptedSelectorMap = shared("dom.ts@adoptedSelectorMap", () => /* @__PURE__ */ new Map());
var adoptedShadowSelectorMap = shared("dom.ts@adoptedShadowSelectorMap", () => /* @__PURE__ */ new WeakMap());
var adoptedLayerMap = shared("dom.ts@adoptedLayerMap", () => /* @__PURE__ */ new Map());
var adoptedShadowLayerMap = shared("dom.ts@adoptedShadowLayerMap", () => /* @__PURE__ */ new WeakMap());
var adoptedMap = shared("dom.ts@adoptedMap", () => /* @__PURE__ */ new Map());
var adoptedBlobMap = shared("dom.ts@adoptedBlobMap", () => /* @__PURE__ */ new WeakMap());
var adoptedAppliedText = shared("dom.ts@adoptedAppliedText", () => /* @__PURE__ */ new WeakMap());
var adoptedFilled = shared("dom.ts@adoptedFilled", () => /* @__PURE__ */ new WeakSet());
var layerCounter = shared("dom.ts@layerCounter", () => 0);
var styleTreeHooks = shared("dom.ts@styleTreeHooks", () => /* @__PURE__ */ new Set());
var styleTreeObserved = shared("dom.ts@styleTreeObserved", () => /* @__PURE__ */ new WeakSet());
var styleTreeRoots = shared("dom.ts@styleTreeRoots", () => /* @__PURE__ */ new Set());
var bakedStyles = shared("style-lib@bakedStyle", () => /* @__PURE__ */ new WeakMap());
var bakedLive = shared("style-lib@bakedLive", () => /* @__PURE__ */ new Set());
var bakedCache = shared("style-lib@bakedCache", () => /* @__PURE__ */ new Map());
var rebakeBatch = shared("style-lib@rebakeBatch", () => /* @__PURE__ */ new Set());
/** Screen-bake extras (rows / fields) keyed by the view root. */
var bakedFollowers = shared("style-lib@bakedFollowers", () => /* @__PURE__ */ new WeakMap());
var adoptedStyleSheetsCache = shared("lur.e@adoptedStyleSheetsCache", () => /* @__PURE__ */ new WeakMap());
var styleCache = shared("lur.e@styleCache", () => /* @__PURE__ */ new Map());
var styleElementCache = shared("lur.e@styleElementCache", () => /* @__PURE__ */ new WeakMap());
var styleFlushPending = shared("style-lib@styleFlushPending", () => /* @__PURE__ */ new WeakSet());
var registeredProperties = shared("style-lib@registeredProperties", () => /* @__PURE__ */ new Set());
var animKeyframeRefs = shared("style.ts@animKeyframeRefs", () => /* @__PURE__ */ new Map());
//#endregion
//#region ../../modules/projects/style.ts/src/constants.ts
var CSS_DIMENSION_UNITS_LIST = [
	"%",
	"px",
	"cm",
	"mm",
	"q",
	"in",
	"pc",
	"pt",
	"em",
	"ex",
	"ch",
	"cap",
	"ic",
	"lh",
	"rem",
	"rex",
	"rch",
	"rcap",
	"ric",
	"rlh",
	"vw",
	"vh",
	"vi",
	"vb",
	"vmin",
	"vmax",
	"svw",
	"svh",
	"svi",
	"svb",
	"svmin",
	"svmax",
	"lvw",
	"lvh",
	"lvi",
	"lvb",
	"lvmin",
	"lvmax",
	"dvw",
	"dvh",
	"dvi",
	"dvb",
	"dvmin",
	"dvmax",
	"cqw",
	"cqh",
	"cqi",
	"cqb",
	"cqmin",
	"cqmax",
	"deg",
	"grad",
	"rad",
	"turn",
	"s",
	"ms",
	"hz",
	"khz",
	"dpi",
	"dpcm",
	"dppx",
	"x",
	"fr"
];
var CSS_DIMENSION_UNITS = new Set(CSS_DIMENSION_UNITS_LIST);
/** Typed OM `CSS.percent` / `CSS.Hz` factory names that differ from the CSS unit token. */
var CSS_UNIT_FACTORY_ALIASES = {
	"%": "percent",
	q: "Q",
	hz: "Hz",
	khz: "kHz",
	fr: "flex"
};
var CSS_UNIT_TOKEN_RE = /^(%|[a-zA-Z]+)/;
var CSS_COLOR_PROPERTIES = [
	"color",
	"background-color",
	"border-color",
	"border-top-color",
	"border-right-color",
	"border-bottom-color",
	"border-left-color",
	"outline-color",
	"accent-color",
	"caret-color",
	"text-decoration-color",
	"column-rule-color",
	"fill",
	"stroke",
	"flood-color",
	"lighting-color",
	"stop-color"
];
var CSS_TYPOGRAPHY_PROPERTIES = [
	"font-family",
	"font-size",
	"font-weight",
	"font-style",
	"font-stretch",
	"line-height",
	"letter-spacing",
	"word-spacing"
];
var CSS_MOTION_PROPERTIES = [
	"transition-duration",
	"transition-timing-function",
	"animation-duration",
	"animation-timing-function"
];
/** Theme attrs that restyle hosts (`observeStyleTree`). */
var STYLE_THEME_ATTRS = [
	"data-theme",
	"data-explorer-color-scheme",
	"data-color-scheme",
	"theme",
	"color-scheme"
];
/** Theme attrs plus `style`/`class` — baker invalidation observer. */
var STYLE_THEME_OBSERVE_ATTRS = [
	...STYLE_THEME_ATTRS,
	"style",
	"class"
];
var BAKE_CATEGORIES = [
	"tokens",
	"colors",
	"typography",
	"motion"
];
/** Veela cascade order — mirrors `veela.css/src/scss/_layers.scss`. */
var VEELA_CASCADE_LAYERS = [
	"tokens",
	"base",
	"layout",
	"components",
	"utilities",
	"theme",
	"overrides",
	"print"
];
/** Shadow-host order used by GLit before any `styleLayers()` extras. */
var UX_HOST_LAYERS = ["ux-preload", "ux-layer"];
/** Markdown viewer runtime sheets (`needs-to-API` custom CSS). */
var VIEWER_RUNTIME_LAYERS = [
	"rs-md-base",
	"rs-md-system",
	"rs-md-modules",
	"rs-md-user",
	"rs-md-print",
	"rs-md-user-print"
];
var VIEWER_CSS_LAYER_ORDER = VIEWER_RUNTIME_LAYERS;
var LAYER_NAME = /^[a-zA-Z0-9_.-]+$/;
var LAYER_OPEN = /^@layer\s+([a-zA-Z0-9_.-]+)\s*\{/;
var OWNER = "DOM";
var HOST_CSS_FALLBACK = "data-glit-host-css";
var BAKE_LAYER = "ux-baked";
/** Cook colors first; custom properties last. Same set either order. */
var DEFAULT_CATEGORIES = ["colors", "tokens"];
var DEFAULT_CACHE_MS = 3e4;
var BAKE_SCREEN_MEDIA = "screen";
/** Window / modal chrome that inherits view tokens (`explorer` `@media screen`). */
var BAKE_SCREEN_CHROME = [
	"ui-window-frame",
	"ui-modal",
	"app-box",
	".ui-modal-dialog",
	".ui-modal-panel"
];
/** Explorer file rows (FileManager shadow). One sample → class selector. */
var BAKE_SCREEN_ALSO_EXPLORER = [
	".row.c2-surface",
	".row.c2-surface[data-kind=directory]",
	".row.c2-surface[data-kind=file]",
	".row.c2-surface .c.name",
	".fm-grid-header"
];
/** Settings fields. One sample → scoped class selector. */
var BAKE_SCREEN_ALSO_SETTINGS = [
	".field",
	".form-input",
	".form-select",
	".field-control"
];
var BAKE_SCREEN_ALSO = [...BAKE_SCREEN_ALSO_EXPLORER, ...BAKE_SCREEN_ALSO_SETTINGS];
var ANIMATABLE_BRAND = Symbol.for("fest.animatable");
var ANIM_LAYER = "ux-anim";
var ANIM_TRIGGER_NAME = "--fest-t";
var hasTypedOM = typeof CSSStyleValue !== "undefined" && typeof CSSUnitValue !== "undefined";
//#endregion
//#region ../../modules/projects/style.ts/src/utils.ts
var cssUnitFactoryName = (unit) => CSS_UNIT_FACTORY_ALIASES[unit.toLowerCase()] ?? unit.toLowerCase();
var cssUnitConstructorName = (unit) => unit.toLowerCase() === "%" ? "percent" : unit.toLowerCase();
var isCssLayerName = (name) => LAYER_NAME.test(name);
var cssEmptyLayerRule = (layerName) => `@layer ${layerName} {}`;
var stripCssPreamble = (css) => {
	let out = String(css || "").trim();
	out = out.replace(/^(@charset\s+[^;]+;\s*)+/i, "");
	for (let i = 0; i < 8; i++) {
		const next = out.replace(/^\/\*[\s\S]*?\*\/\s*/, "");
		if (next === out) break;
		out = next.trim();
	}
	return out;
};
var isLayerBlockRule = (rule) => typeof CSSLayerBlockRule !== "undefined" && rule instanceof CSSLayerBlockRule;
var supportsConstructableStylesheet = () => typeof globalThis !== "undefined" && typeof globalThis.CSSStyleSheet === "function";
var cssTextRequiresInlineStyleElement = (css) => typeof css === "string" && /@import\b/i.test(css);
var promiseOrDirect = (promise, cb) => {
	if (typeof promise?.then == "function") return promise?.then?.(cb);
	return cb(promise);
};
var isShadowRoot = (value) => typeof ShadowRoot !== "undefined" && value instanceof ShadowRoot;
var isDocument = (value) => typeof Document !== "undefined" && value instanceof Document;
var isCssElement = (value) => typeof Element !== "undefined" && value instanceof Element;
/** CSS.escape() with a per-code-point fallback that is safe for IDs. */
var escapeCSSIdentifier = (value) => {
	if (typeof CSS !== "undefined" && typeof CSS.escape === "function") return CSS.escape(value);
	return Array.from(value).map((char) => `\\${char.codePointAt(0).toString(16)} `).join("");
};
var styleIdCounter = 0;
var createStyleId = () => {
	if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
	return `ux-${Date.now().toString(36)}-${(++styleIdCounter).toString(36)}`;
};
var urlCanParse = (value) => {
	try {
		return typeof URL !== "undefined" && typeof URL.canParse === "function" && URL.canParse(value);
	} catch {
		return false;
	}
};
var hash = async (string) => {
	const hashBuffer = await crypto?.subtle?.digest("SHA-256", typeof string == "string" ? new TextEncoder().encode(string) : string instanceof ArrayBuffer ? string : await string?.arrayBuffer?.());
	return "sha256-" + btoa(String.fromCharCode.apply(null, new Uint8Array(hashBuffer)));
};
var parseLength = (value, size) => {
	if (value.endsWith("%")) return parseFloat(value) / 100 * size();
	return parseFloat(value);
};
var parseOrigin = (origin, element) => {
	const values = origin.split(" ");
	return new DOMPoint(parseLength(values[0], () => element.clientWidth), parseLength(values[1], () => element.clientHeight));
};
var parseTime = (v, fallback = 0) => {
	if (typeof v === "number") return v;
	if (!v) return fallback;
	const t = String(v).trim();
	if (t.endsWith("ms")) return parseFloat(t);
	if (t.endsWith("s")) return parseFloat(t) * 1e3;
	return parseFloat(t) || fallback;
};
var normalizeIterationCount = (count) => {
	if (count === void 0) return 1;
	if (count === -1 || count === Infinity) return Infinity;
	return Math.max(1, Math.floor(count));
};
var normalizeIterations = (n) => n === -1 || n === Infinity ? Infinity : Math.max(1, n ?? 1);
var isScrollDriven = (t) => t != null && typeof t === "object" && t.kind === "scroll";
var isViewDriven = (t) => t != null && typeof t === "object" && t.kind === "view";
/** INVARIANT: hyphenated / shadowed hosts are the only nodes that own adopted CSS. */
var isStyleHost = (node) => {
	if (!node || node.nodeType !== 1) return false;
	if (String(node.localName || "").includes("-")) return true;
	if (node.shadowRoot) return true;
	if (node.styles != null) return true;
	return false;
};
var readSheetRuleCount = (sheet) => {
	try {
		return sheet.cssRules.length;
	} catch {
		return null;
	}
};
var isAdoptedSheetEmpty = (sheet) => {
	if (!sheet) return true;
	const count = readSheetRuleCount(sheet);
	if (count === null) return false;
	return count === 0;
};
var isColorToken = (name) => name === "--base-color" || name.startsWith("--color-") || name.endsWith("-color") || name.endsWith("-fg") || name.endsWith("-bg");
var isElementVisible = (el) => {
	if (!el.isConnected) return false;
	if (typeof el.getClientRects !== "function") return true;
	try {
		return el.getClientRects().length > 0;
	} catch {
		return true;
	}
};
var isStyleBinding = (styles) => {
	return Array.isArray(styles) && typeof styles[0] === "function";
};
var isEffectivelyEmptyStyleText = (cssText) => {
	const source = typeof cssText === "string" ? cssText.trim() : "";
	if (!source) return true;
	for (const chunk of source.split(";")) {
		const declaration = chunk.trim();
		if (!declaration) continue;
		const colonIndex = declaration.indexOf(":");
		if (colonIndex < 0) return false;
		if (declaration.slice(colonIndex + 1).trim().length > 0) return false;
	}
	return true;
};
var pruneEmptyStyleAttribute = (element) => {
	if (element == null) return;
	const raw = element.getAttribute("style");
	if (raw == null) return;
	if (isEffectivelyEmptyStyleText(raw)) {
		element.style.cssText = "";
		element.removeAttribute("style");
	}
};
var applyNormalizedInlineStyle = (element, cssText) => {
	if (isEffectivelyEmptyStyleText(cssText)) {
		element.style.cssText = "";
		element.removeAttribute("style");
		return;
	}
	element.style.cssText = cssText;
};
var isNativeCSSStyleValue = (value) => {
	if (value == null || typeof value !== "object") return false;
	try {
		const CSSStyleValueCtor = globalThis.CSSStyleValue;
		if (typeof CSSStyleValueCtor === "function" && value instanceof CSSStyleValueCtor) return true;
		for (let prototype = value; prototype; prototype = Object.getPrototypeOf(prototype)) if (prototype?.constructor?.name === "CSSStyleValue") return true;
	} catch {}
	return false;
};
var isReactiveStyleValue = (value) => {
	if (value == null || typeof value !== "object" || isNativeCSSStyleValue(value)) return false;
	try {
		return "value" in value;
	} catch {
		return false;
	}
};
var isStaticStyleInterpolation = (value) => {
	return value == null || typeof value !== "object" && typeof value !== "function";
};
var escapeRegExp = (value) => {
	return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
var containsMarker = (cssValue, marker) => {
	return new RegExp(`var\\(\\s*${escapeRegExp(marker)}\\s*\\)`).test(cssValue);
};
var readAttachedCSSUnit = (text) => {
	const match = CSS_UNIT_TOKEN_RE.exec(text);
	if (!match) return null;
	const authored = match[0];
	const normalized = authored.toLowerCase();
	if (!CSS_DIMENSION_UNITS.has(normalized)) return null;
	return {
		authored,
		normalized,
		length: authored.length
	};
};
var getWindowConstructor = (win, name) => {
	return win?.[name] ?? globalThis?.[name];
};
var createTypedUnitValue = (win, unit, value) => {
	const CSSNamespace = win?.CSS;
	const factoryName = cssUnitFactoryName(unit);
	const factory = CSSNamespace?.[factoryName];
	if (typeof factory === "function") return factory.call(CSSNamespace, value);
	const CSSUnitValueCtor = getWindowConstructor(win, "CSSUnitValue");
	if (typeof CSSUnitValueCtor !== "function") throw new TypeError(`Typed OM does not support CSS unit "${unit}"`);
	return new CSSUnitValueCtor(value, cssUnitConstructorName(unit));
};
var isStyleValue = (val) => hasTypedOM && val instanceof CSSStyleValue;
var isUnitValue = (val) => hasTypedOM && val instanceof CSSUnitValue;
/** First `querySelector` hit in `root`, then nested `shadowRoot`s. */
var queryFirstDeep = (root, selector) => {
	if (!root || !selector) return null;
	const tryQuery = (scope) => {
		try {
			const hit = scope.querySelector?.(selector);
			return hit instanceof HTMLElement ? hit : null;
		} catch {
			return null;
		}
	};
	const direct = tryQuery(root);
	if (direct) return direct;
	if (root instanceof Element && root.shadowRoot) {
		const inner = queryFirstDeep(root.shadowRoot, selector);
		if (inner) return inner;
	}
	if (typeof root.querySelectorAll !== "function") return null;
	for (const el of root.querySelectorAll("*")) {
		if (!el.shadowRoot) continue;
		const hit = queryFirstDeep(el.shadowRoot, selector);
		if (hit) return hit;
	}
	return null;
};
//#endregion
//#region ../../modules/projects/style.ts/src/layers.ts
/**
* `@layer a, b, c;` — first-seen order, empty groups skipped.
*/
var cssLayerOrder = (...groups) => {
	const seen = /* @__PURE__ */ new Set();
	const names = [];
	for (const group of groups) {
		if (group == null) continue;
		const list = typeof group === "string" ? [group] : group;
		for (const raw of list) {
			const name = String(raw || "").trim();
			if (!name || seen.has(name)) continue;
			seen.add(name);
			names.push(name);
		}
	}
	return names.length ? `@layer ${names.join(", ")};` : "";
};
var veelaCascadeOrder = () => cssLayerOrder(VEELA_CASCADE_LAYERS);
var makeHostLayerOrder = (extra) => cssLayerOrder(UX_HOST_LAYERS, extra);
var cssLayerBlock = (layerName, cssText) => {
	const body = (cssText || "").trim();
	if (!layerName || !body) return "";
	return `@layer ${layerName} {\n${body}\n}`;
};
/** Compact wrap for adopted-sheet cache keys (preserves empty source text). */
var wrapCssLayer = (cssText, layerName) => layerName ? `@layer ${layerName} { ${cssText} }` : cssText;
var normalizeCssForLayer = (layerName, cssText) => {
	const trimmed = (cssText || "").trim();
	if (!trimmed) return "";
	if (/^@layer\b/.test(trimmed)) return trimmed;
	return cssLayerBlock(layerName, trimmed);
};
var unwrapOuterLayerBlock = (css, expectedName) => {
	const match = css.match(LAYER_OPEN);
	if (!match) return null;
	if (expectedName && match[1] !== expectedName) return null;
	const open = match[0].lastIndexOf("{");
	let depth = 0;
	for (let i = open; i < css.length; i++) {
		const ch = css[i];
		if (ch === "{") depth++;
		else if (ch === "}") {
			depth--;
			if (depth === 0) {
				if (css.slice(i + 1).trim()) return null;
				return css.slice(open + 1, i).trim();
			}
		}
	}
	return null;
};
/**
* WHY: inlined `@layer` loses to unlayered shell CSS in Capacitor / ui-window hosts.
* Unwrap only when the whole remaining sheet is one named block.
*/
var unwrapCssLayer = (cssText, layerName) => {
	const stripped = stripCssPreamble(cssText);
	return unwrapOuterLayerBlock(stripped, layerName) ?? stripped;
};
var cssImportWithLayer = (url, layer = "") => `@import url("${url}") ${layer && typeof layer === "string" ? `layer(${layer})` : ""};`;
var UX_PRELOAD_HOST_CSS = cssLayerBlock("ux-preload", ":host { box-sizing: border-box; }");
/** CSSOM: find or `insertRule` an empty `@layer name {}`. */
var getOrCreateLayerRule = (sheet, layerName) => {
	if (!sheet || !layerName) return void 0;
	const rules = Array.from(sheet.cssRules || []);
	const existing = rules.find((rule) => isLayerBlockRule(rule) && rule.name === layerName);
	if (existing) return existing;
	try {
		const ruleIndex = sheet.insertRule(cssEmptyLayerRule(layerName), rules.length);
		const created = sheet.cssRules?.[ruleIndex];
		return isLayerBlockRule(created) ? created : void 0;
	} catch {
		return;
	}
};
//#endregion
//#region ../../modules/projects/core.ts/src/utils/Upsert.ts
/**
* Get a value from a Map, or insert a computed value if the key doesn't exist.
* @template K - The key type
* @template V - The value type
* @param map - The Map to get or insert into
* @param key - The key to look up
* @param callbackFunction - A function that computes the value to insert based on the key
* @returns The value from the map (existing or newly computed and inserted)
*/
var getOrInsertComputed = (map, key, callbackFunction = () => null) => {
	return map?.getOrInsertComputed?.(key, callbackFunction);
};
//#endregion
//#region ../../modules/projects/style.ts/src/property.ts
/**
* Токенизация CSS-выражений для парсинга calc(), min(), max(), clamp()
*/
var tokenizeNumericCSS$1 = (source) => {
	const tokens = [];
	let cursor = 0;
	while (cursor < source.length) {
		const rest = source.slice(cursor);
		const whitespace = /^\s+/.exec(rest);
		if (whitespace) {
			cursor += whitespace[0].length;
			continue;
		}
		const number = /^(?:\d*\.\d+|\d+\.?\d*)(?:[eE][+-]?\d+)?/.exec(rest);
		if (number) {
			cursor += number[0].length;
			const unitMatch = CSS_UNIT_TOKEN_RE.exec(source.slice(cursor));
			const unit = unitMatch?.[0] ?? null;
			if (unitMatch) cursor += unitMatch[0].length;
			tokens.push({
				kind: "number",
				value: Number(number[0]),
				unit: unit == null ? null : unit.toLowerCase()
			});
			continue;
		}
		const identifier = /^[a-zA-Z_][a-zA-Z0-9_-]*/.exec(rest);
		if (identifier) {
			tokens.push({
				kind: "identifier",
				value: identifier[0].toLowerCase()
			});
			cursor += identifier[0].length;
			continue;
		}
		const symbol = rest[0];
		if ([
			"+",
			"-",
			"*",
			"/",
			"(",
			")",
			","
		].includes(symbol)) {
			tokens.push({
				kind: "symbol",
				value: symbol
			});
			cursor++;
			continue;
		}
		throw new SyntaxError(`Unsupported token near "${rest}"`);
	}
	return tokens;
};
/**
* Парсер Typed OM математических выражений
*/
var NumericTypedOMParser$1 = class {
	tokens;
	win;
	index = 0;
	constructor(tokens, win) {
		this.tokens = tokens;
		this.win = win;
	}
	parse() {
		const root = this.parseSum();
		if (this.index !== this.tokens.length) throw new SyntaxError("Unexpected trailing expression");
		return root;
	}
	current() {
		return this.tokens[this.index];
	}
	consume() {
		const token = this.tokens[this.index];
		if (!token) throw new SyntaxError("Unexpected end of expression");
		this.index++;
		return token;
	}
	consumeSymbol(symbol) {
		const token = this.consume();
		if (token.kind !== "symbol" || token.value !== symbol) throw new SyntaxError(`Expected "${symbol}"`);
	}
	matchesSymbol(symbol) {
		const token = this.current();
		return token?.kind === "symbol" && token.value === symbol;
	}
	createMath(name, ...values) {
		const Constructor = getWindowConstructor(this.win, name);
		if (typeof Constructor !== "function") throw new TypeError(`${name} is not supported`);
		return new Constructor(...values);
	}
	parseSum() {
		let value = this.parseProduct();
		while (this.matchesSymbol("+") || this.matchesSymbol("-")) {
			const operator = this.consume();
			const right = this.parseProduct();
			if (operator.kind !== "symbol") throw new SyntaxError("Expected sum operator");
			if (operator.value === "+") value = this.createMath("CSSMathSum", value, right);
			else value = this.createMath("CSSMathSum", value, this.createMath("CSSMathNegate", right));
		}
		return value;
	}
	parseProduct() {
		let value = this.parseUnary();
		while (this.matchesSymbol("*") || this.matchesSymbol("/")) {
			const operator = this.consume();
			const right = this.parseUnary();
			if (operator.kind !== "symbol") throw new SyntaxError("Expected product operator");
			if (operator.value === "*") value = this.createMath("CSSMathProduct", value, right);
			else value = this.createMath("CSSMathProduct", value, this.createMath("CSSMathInvert", right));
		}
		return value;
	}
	parseUnary() {
		if (this.matchesSymbol("+")) {
			this.consume();
			return this.parseUnary();
		}
		if (this.matchesSymbol("-")) {
			this.consume();
			return this.createMath("CSSMathNegate", this.parseUnary());
		}
		return this.parsePrimary();
	}
	parsePrimary() {
		const token = this.consume();
		if (token.kind === "number") return createTypedUnitValue(this.win, token.unit ?? "number", token.value);
		if (token.kind === "symbol" && token.value === "(") {
			const value = this.parseSum();
			this.consumeSymbol(")");
			return value;
		}
		if (token.kind === "identifier") return this.parseFunction(token.value);
		throw new SyntaxError("Expected a numeric value");
	}
	parseFunction(name) {
		this.consumeSymbol("(");
		if (name === "calc") {
			const value = this.parseSum();
			this.consumeSymbol(")");
			return value;
		}
		const values = [];
		if (!this.matchesSymbol(")")) {
			values.push(this.parseSum());
			while (this.matchesSymbol(",")) {
				this.consume();
				values.push(this.parseSum());
			}
		}
		this.consumeSymbol(")");
		if (name === "min") {
			if (values.length === 0) throw new SyntaxError("min() requires a value");
			return this.createMath("CSSMathMin", ...values);
		}
		if (name === "max") {
			if (values.length === 0) throw new SyntaxError("max() requires a value");
			return this.createMath("CSSMathMax", ...values);
		}
		if (name === "clamp") {
			if (values.length !== 3) throw new SyntaxError("clamp() requires three values");
			return this.createMath("CSSMathClamp", values[0], values[1], values[2]);
		}
		throw new SyntaxError(`Unsupported function "${name}"`);
	}
};
/**
* Парсит строку CSS-выражения в Typed OM дерево
*/
var parseToTypedOM = (cssValue, win) => {
	try {
		return new NumericTypedOMParser$1(tokenizeNumericCSS$1(cssValue), win).parse();
	} catch {
		return null;
	}
};
var setPropertyIfNotEqual = (styleRef, kebab, value, importance = "") => {
	if (!styleRef || !kebab) return;
	if (value == null) {
		if (styleRef.getPropertyValue(kebab) !== "") styleRef.removeProperty(kebab);
		return;
	}
	if (styleRef.getPropertyValue(kebab) !== value) styleRef.setProperty(kebab, value, importance);
};
/**
* Улучшенная версия с парсингом Typed OM выражений
*/
var setStylePropertyTyped = (element, name, value, importance = "") => {
	if (!element || !name) return element;
	const kebab = camelToKebab(name);
	const styleRef = element.style;
	const styleMapRef = element.attributeStyleMap ?? element.styleMap;
	if (!hasTypedOM || !styleMapRef) return setStylePropertyFallback(element, name, value, importance);
	const win = element.ownerDocument?.defaultView ?? globalThis;
	let val = hasValue(value) && isReactiveStyleValue(value) ? value.value : value;
	if (val == null) {
		styleMapRef.delete?.(kebab);
		if (styleRef) setPropertyIfNotEqual(styleRef, kebab, null, importance);
		return element;
	}
	if (isNativeCSSStyleValue(val)) {
		const old = styleMapRef.get(kebab);
		if (isUnitValue(val) && isUnitValue(old)) {
			if (old.value === val.value && old.unit === val.unit) return element;
		} else if (old === val) return element;
		styleMapRef.set(kebab, val);
		return element;
	}
	if (typeof val === "number") if (CSS?.number && !kebab.startsWith("--")) {
		const newVal = CSS.number(val);
		const old = styleMapRef.get(kebab);
		if (isUnitValue(old) && old.value === newVal.value && old.unit === newVal.unit) return element;
		styleMapRef.set(kebab, newVal);
		return element;
	} else {
		setPropertyIfNotEqual(styleRef, kebab, String(val), importance);
		return element;
	}
	if (typeof val === "string") {
		if (/\b(calc|min|max|clamp)\s*\(/.test(val)) {
			const parsed = parseToTypedOM(val, win);
			if (parsed) try {
				styleMapRef.set(kebab, parsed);
				return element;
			} catch {}
		}
		const maybeNum = tryStringAsNumber(val);
		if (typeof maybeNum === "number" && CSS?.number && !kebab.startsWith("--")) {
			const newVal = CSS.number(maybeNum);
			const old = styleMapRef.get(kebab);
			if (isUnitValue(old) && old.value === newVal.value && old.unit === newVal.unit) return element;
			styleMapRef.set(kebab, newVal);
			return element;
		}
		setPropertyIfNotEqual(styleRef, kebab, val, importance);
		return element;
	}
	setPropertyIfNotEqual(styleRef, kebab, String(val), importance);
	return element;
};
var setStylePropertyFallback = (element, name, value, importance = "") => {
	if (!element || !name) return element;
	const kebab = camelToKebab(name);
	const styleRef = element.style;
	if (!styleRef) return element;
	let val = hasValue(value) && isReactiveStyleValue(value) ? value.value : value;
	if (typeof val === "string" && !isNativeCSSStyleValue(val)) val = tryStringAsNumber(val) ?? val;
	if (val == null) {
		setPropertyIfNotEqual(styleRef, kebab, null, importance);
		return element;
	}
	if (isNativeCSSStyleValue(val)) {
		setPropertyIfNotEqual(styleRef, kebab, String(val), importance);
		return element;
	}
	if (typeof val === "number") {
		setPropertyIfNotEqual(styleRef, kebab, String(val), importance);
		return element;
	}
	setPropertyIfNotEqual(styleRef, kebab, String(val), importance);
	return element;
};
var setStyleProperty = (element, name, value, importance = "") => {
	return hasTypedOM ? setStylePropertyTyped(element, name, value, importance) : setStylePropertyFallback(element, name, value, importance);
};
/** WHY: lives here so `/fest/style-lib.js` does not import Handler from `@fest-lib/dom`. */
var handleStyleChange = (el, prop, val) => {
	const styleRef = el?.style;
	if (!prop || typeof prop !== "string" || !el || !styleRef) return el;
	$avoidTrigger(val, () => {
		if (isVal(val) || hasValue(val) || isValueUnit(val)) setStyleProperty(el, prop, val);
		else if (val == null) el.style.removeProperty(camelToKebab(prop));
	});
	return el;
};
//#endregion
//#region ../../modules/projects/style.ts/src/sheets.ts
var setStyleInRule = (selector, name, value) => {
	return setStyleProperty(getStyleRule(selector), name, value);
};
var setStyleRule = (selector, sheet) => {
	const rule = getStyleRule(selector);
	Object.entries(sheet).forEach(([propName, propValue]) => setStyleProperty(rule, propName, propValue));
	return rule;
};
var loadStyleSheet = (inline, base, layer = "", integrity) => {
	const load = fetchAndCache(inline);
	const url = typeof inline == "string" ? URL.canParse(inline) ? inline : load : load;
	if (base?.[0]) base[0].fetchPriority = "high";
	if (base && url && typeof url == "string") setStyleURL(base, url, layer);
	if (base?.[0] && (!URL.canParse(inline) || integrity) && base?.[0] instanceof HTMLLinkElement) {}
	return promiseOrDirect(load, (res) => {
		if (base?.[0] && res) {
			setStyleURL(base, res, layer);
			base?.[0].setAttribute("loaded", "");
		}
	})?.catch?.((error) => {
		console.warn("Failed to load style sheet:", error);
	});
};
var loadBlobStyle = (inline) => {
	const style = typeof document != "undefined" ? document.createElement("link") : null;
	if (style) style.fetchPriority = "high";
	if (style) {
		Object.assign(style, {
			rel: "stylesheet",
			type: "text/css",
			crossOrigin: "same-origin"
		});
		style.dataset.owner = "DOM";
		loadStyleSheet(inline, [style, "href"]);
		typeof document != "undefined" && document.head.append(style);
		return style;
	}
	return null;
};
var loadInlineStyle = (inline, rootElement = typeof document != "undefined" ? document?.head : null, layer = "") => {
	const PLACE = rootElement?.querySelector?.("head") ?? rootElement;
	if (typeof HTMLHeadElement != "undefined" && PLACE instanceof HTMLHeadElement) return loadBlobStyle(inline);
	const style = typeof document != "undefined" ? document.createElement("style") : null;
	if (style) {
		style.dataset.owner = "DOM";
		loadStyleSheet(inline, [style, "innerHTML"], layer);
		PLACE?.prepend?.(style);
		return style;
	}
	return null;
};
var setProperty = (target, name, value, importance = "") => {
	return setStyleProperty(target, name, value, importance);
};
var preloadStyle = (styles) => {
	return loadAsAdopted(styles, "");
};
var rememberAdoptedText = (sheet, cssText) => {
	adoptedAppliedText.set(sheet, cssText);
	adoptedFilled.add(sheet);
};
/** INVARIANT: cache hits must refill emptied constructable sheets from the source CSS.
* FIND:adopted-sheets */
var cssTextForAdoptedSheet = (sheet) => {
	if (!sheet) return null;
	const stored = adoptedAppliedText.get(sheet);
	if (stored) return stored;
	for (const [key, mapped] of adoptedMap) if (mapped === sheet && typeof key === "string") return key;
	return null;
};
var ensureAdoptedSheetContent = (sheet, cssText) => {
	if (!sheet) return false;
	const text = cssText || cssTextForAdoptedSheet(sheet);
	const count = readSheetRuleCount(sheet);
	if (count === null) return false;
	if (count > 0) {
		adoptedFilled.add(sheet);
		if (text && !adoptedAppliedText.has(sheet)) adoptedAppliedText.set(sheet, text);
		return true;
	}
	if (!text) return false;
	if (applyAdoptedStyleText(sheet, text)) {
		rememberAdoptedText(sheet, text);
		return true;
	}
	return false;
};
var applyAdoptedStyleText = (sheet, cssText) => {
	if (!sheet || !cssText) return false;
	try {
		sheet.replaceSync(cssText);
		return true;
	} catch (error) {
		const message = String(error?.message || "").toLowerCase();
		if (!(message.includes("@import rules are not allowed") || message.includes("@import") && message.includes("not allowed"))) console.warn("[DOM] Failed to apply adopted stylesheet:", error);
		return false;
	}
};
var sheetForBlob = (blob) => {
	let sheet = adoptedBlobMap.get(blob);
	if (!sheet) {
		sheet = new CSSStyleSheet();
		adoptedBlobMap.set(blob, sheet);
	}
	return sheet;
};
var loadAsAdopted = (styles, layerName = null) => {
	try {
		return loadAsAdoptedUnsafe(styles, layerName);
	} catch (error) {
		console.warn("[DOM] loadAsAdopted failed", error);
		if (typeof styles === "string") loadInlineStyle(styles, void 0, layerName || "");
		return null;
	}
};
var loadAsAdoptedUnsafe = (styles, layerName = null) => {
	if (!supportsConstructableStylesheet()) {
		if (typeof styles === "string") loadInlineStyle(styles, void 0, layerName || "");
		return null;
	}
	if (typeof styles === "string" && cssTextRequiresInlineStyleElement(styles)) {
		loadInlineStyle(styles, void 0, layerName || "");
		return null;
	}
	if (typeof styles == "string" && adoptedMap?.has?.(styles)) {
		const cached = adoptedMap.get(styles);
		ensureAdoptedSheetContent(cached, adoptedAppliedText.get(cached) || wrapCssLayer(styles, layerName));
		if (typeof document !== "undefined" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(cached)) document.adoptedStyleSheets.push(cached);
		return cached;
	}
	if ((styles instanceof Blob || styles instanceof File) && adoptedBlobMap?.has?.(styles)) {
		const cached = adoptedBlobMap.get(styles);
		ensureAdoptedSheetContent(cached);
		if (typeof document !== "undefined" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(cached)) document.adoptedStyleSheets.push(cached);
		return cached;
	}
	if (!styles) return null;
	const sheet = typeof styles == "string" ? getOrInsertComputed(adoptedMap, styles, () => new CSSStyleSheet()) : sheetForBlob(styles);
	if (typeof document != "undefined" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(sheet)) document.adoptedStyleSheets.push(sheet);
	if (typeof styles == "string" && !urlCanParse(styles)) {
		const layerWrapped = wrapCssLayer(styles, layerName);
		adoptedMap.set(styles, sheet);
		if (!applyAdoptedStyleText(sheet, layerWrapped)) {
			removeAdopted(sheet);
			adoptedMap.delete(styles);
			loadInlineStyle(styles);
		} else rememberAdoptedText(sheet, layerWrapped);
		return sheet;
	} else promiseOrDirect(fetchAsInline(styles), (cached) => {
		adoptedMap.set(cached, sheet);
		if (cached) {
			if (cssTextRequiresInlineStyleElement(cached)) {
				removeAdopted(sheet);
				adoptedMap.delete(cached);
				adoptedBlobMap.delete(styles);
				loadInlineStyle(cached, void 0, layerName || "");
				return sheet;
			}
			const layerWrapped = wrapCssLayer(cached, layerName);
			if (!applyAdoptedStyleText(sheet, layerWrapped)) {
				removeAdopted(sheet);
				adoptedMap.delete(cached);
				adoptedBlobMap.delete(styles);
				loadInlineStyle(cached, void 0, layerName || "");
			} else rememberAdoptedText(sheet, layerWrapped);
			return sheet;
		}
	});
	return sheet;
};
var collectStyleHosts = (node, into) => {
	if (!node || node.nodeType === 3) return;
	if (node.nodeType === 11) {
		for (const child of node.childNodes || []) collectStyleHosts(child, into);
		return;
	}
	if (isStyleHost(node)) into.add(node);
	if (typeof node.querySelectorAll !== "function") return;
	try {
		for (const el of node.querySelectorAll("*")) if (isStyleHost(el)) into.add(el);
	} catch {}
};
var notifyStyleTreeHosts = (hosts, reason = "tree") => {
	for (const el of hosts) {
		if (!isStyleHost(el)) continue;
		for (const fn of styleTreeHooks) fn(el, reason);
	}
};
var registerStyleTreeHook = (fn) => {
	if (typeof fn !== "function") return;
	styleTreeHooks.add(fn);
};
/**
* WHY: hosts often enter via innerHTML / H`` / upgrade after first connectedCallback;
* childList + theme attrs must re-apply CSS without waiting for resume.
* FIND:style-tree
*/
var observeStyleTree = (root) => {
	if (!root || typeof MutationObserver === "undefined") return root;
	if (styleTreeObserved.has(root)) return root;
	styleTreeObserved.add(root);
	styleTreeRoots.add(root);
	const observer = new MutationObserver((records) => {
		const hosts = /* @__PURE__ */ new Set();
		for (const rec of records) if (rec.type === "childList") {
			for (const node of rec.addedNodes) collectStyleHosts(node, hosts);
			const scope = rec.target?.getRootNode?.();
			if (scope instanceof ShadowRoot && isStyleHost(scope.host)) {
				const sheets = scope.adoptedStyleSheets;
				if (!sheets || sheets.length === 0) hosts.add(scope.host);
			}
		} else if (rec.type === "attributes" && rec.target) {
			if (isStyleHost(rec.target)) hosts.add(rec.target);
		}
		notifyStyleTreeHosts(hosts, "mutation");
	});
	try {
		observer.observe(root, {
			childList: true,
			subtree: true,
			attributes: true,
			attributeFilter: [...STYLE_THEME_ATTRS]
		});
	} catch {
		styleTreeObserved.delete(root);
		return root;
	}
	return root;
};
/** WHY: Android WebView pause can empty constructable `cssRules`; restore the last applied text. */
var rehydrateConstructableSheets = () => {
	if (typeof document === "undefined") return;
	const canParse = typeof URL !== "undefined" && typeof URL.canParse === "function";
	for (const [key, sheet] of adoptedMap) {
		if (!sheet || typeof key !== "string") continue;
		if (canParse && URL.canParse(key)) continue;
		ensureAdoptedSheetContent(sheet, adoptedAppliedText.get(sheet) || key);
		if (document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(sheet)) document.adoptedStyleSheets.push(sheet);
	}
};
var removeAdopted = (sheet) => {
	if (!sheet) return false;
	const target = typeof sheet === "string" ? adoptedMap.get(sheet) : sheet;
	if (!target || typeof document === "undefined") return false;
	const sheets = document.adoptedStyleSheets;
	const idx = sheets.indexOf(target);
	if (idx !== -1) {
		sheets.splice(idx, 1);
		return true;
	}
	return false;
};
var getTransform = (el) => {
	if (el?.computedStyleMap) {
		const matrix = el.computedStyleMap().get("transform")?.toMatrix?.();
		if (matrix) return matrix;
	} else if (el) {
		const style = getComputedStyle(el);
		return new DOMMatrix(style?.getPropertyValue?.("transform"));
	}
	return new DOMMatrix();
};
var getTransformOrigin = (el) => {
	return parseOrigin(getComputedStyle(el)?.getPropertyValue?.("transform-origin") || `50% 50%`, el);
};
var getPropertyValue = (src, name) => {
	if ("computedStyleMap" in src) {
		const val = src?.computedStyleMap?.()?.get(name);
		return val instanceof CSSUnitValue ? val?.value || 0 : val?.toString?.();
	}
	if (src instanceof HTMLElement) {
		const cs = getComputedStyle?.(src, "");
		return parseFloat(cs?.getPropertyValue?.(name)?.replace?.("px", "")) || 0;
	}
	return parseFloat((src?.style ?? src).getPropertyValue?.(name)?.replace?.("px", "")) || 0;
};
var getElementZoom = (element) => {
	let zoom = 1, currentElement = element;
	while (currentElement) {
		if ("currentCSSZoom" in currentElement) {
			const currentCSSZoom = currentElement.currentCSSZoom;
			if (typeof currentCSSZoom === "number") return zoom *= currentCSSZoom;
		}
		const style = getComputedStyle(currentElement);
		if (style.zoom && style.zoom !== "normal") return zoom *= parseFloat(style.zoom);
		if (style.zoom && style.zoom !== "normal" || "currentCSSZoom" in currentElement) return zoom;
		currentElement = currentElement?.offsetParent ?? currentElement?.parentElement;
	}
	return zoom;
};
var getPxValue = (element, name) => {
	return getPropertyValue?.(element, name);
};
var getPadding = (src, axis) => {
	if (axis == "inline") return getPropertyValue(src, "padding-inline-start") + getPropertyValue(src, "padding-inline-end");
	return getPropertyValue(src, "padding-block-start") + getPropertyValue(src, "padding-block-end");
};
//#endregion
//#region ../../modules/projects/style.ts/src/cssom.ts
var styleElement = typeof document != "undefined" ? document.createElement("style") : null;
if (styleElement) {
	document.querySelector("head")?.appendChild?.(styleElement);
	styleElement.dataset.owner = "DOM";
}
var setStyleURL = (base, url, layer = "") => {
	base[0][base[1]] = base[1] == "innerHTML" ? cssImportWithLayer(url, layer) : url;
};
var setStyleRules = (classes) => {
	return classes?.map?.((args) => setStyleRule(...args));
};
var getStyleLayer = (layerName, sheet) => {
	sheet ||= styleElement?.sheet;
	return getOrCreateLayerRule(sheet, layerName);
};
/**
* INVARIANT: `#id` wins over `data-style-id` (same as getStyleRule / baker).
* Missing `data-style-id` is assigned once and reused.
*/
var ensureStyleScopeSelector = (element) => {
	if (element.id) return `#${escapeCSSIdentifier(element.id)}`;
	let styleId = element.getAttribute("data-style-id");
	if (!styleId) {
		styleId = createStyleId();
		element.setAttribute("data-style-id", styleId);
	}
	return `[data-style-id="${escapeCSSIdentifier(styleId)}"]`;
};
/**
* ::before должен присоединяться к basis непосредственно:
*
*   #element::before
*
* Обычный selector остаётся descendant-селектором:
*
*   #element .child
*/
var joinScopedSelector = (scope, selector) => {
	selector = selector.trim();
	if (!scope) return selector;
	if (!selector) return scope;
	if (selector.startsWith("::")) return `${scope}${selector}`;
	return `${scope} ${selector}`;
};
var findStyleRule = (sheet, fullSelector, scope, selector) => {
	const rules = Array.from(sheet?.cssRules || []);
	const expected = fullSelector.trim();
	const requested = selector.trim();
	return rules.findIndex((rule) => {
		if (!(rule instanceof CSSStyleRule)) return false;
		const actual = rule.selectorText?.trim?.() ?? "";
		if (actual === expected) return true;
		if (requested && actual.endsWith(requested)) return actual.slice(0, actual.length - requested.length).trim() === scope;
		return false;
	});
};
var getStyleRule = (selector, sheet, layerName = "ux-query", basis = null) => {
	const root = isShadowRoot(basis) || isDocument(basis) ? basis : basis?.getRootNode?.() ?? (typeof document !== "undefined" ? document : null);
	const basisElement = isCssElement(basis) ? basis : null;
	let scope = "";
	if (basisElement) scope = ensureStyleScopeSelector(basisElement);
	else if (isShadowRoot(root)) scope = ":host";
	else if (isDocument(root)) scope = ":root";
	let styleElement = null;
	if (isShadowRoot(root)) {
		styleElement = root.querySelector("style[data-ux-query]");
		if (!styleElement && typeof document !== "undefined") {
			styleElement = document.createElement("style");
			styleElement.setAttribute("data-ux-query", "");
			root.appendChild(styleElement);
		}
	} else styleElement = styleElementGlobal();
	sheet ||= styleElement?.sheet;
	if (!sheet) return;
	if (layerName) return getStyleRule(selector, getStyleLayer(layerName, sheet), null, basis);
	const fullSelector = joinScopedSelector(scope, selector);
	let ruleId = findStyleRule(sheet, fullSelector, scope, selector);
	if (ruleId === -1) ruleId = sheet.insertRule(`${fullSelector} {}`);
	return sheet.cssRules?.[ruleId];
};
/**
* Замените реализацией получения вашего глобального <style>.
* Нужна только для устранения конфликта имени локальной переменной
* с существующим styleElement.
*/
function styleElementGlobal() {
	return styleElement ?? null;
}
var fetchAndCache = (url) => {
	if (!url) return null;
	if (cacheMap.has(url)) return cacheMap.get(url);
	if (url instanceof Blob || url instanceof File) {
		if (blobURLMap.has(url)) return blobURLMap.get(url);
		const burl = URL.createObjectURL(url);
		blobURLMap.set(url, burl);
		cacheMap.set(burl, burl);
		return burl;
	}
	if (URL.canParse(url) || url?.trim?.()?.startsWith?.("./")) {
		const promised = fetch(url?.replace?.("?url", "?raw"), {
			cache: "force-cache",
			mode: "same-origin",
			priority: "high"
		})?.then?.(async (res) => {
			const blob = await res.blob();
			const burl = URL.createObjectURL(blob);
			blobURLMap.set(blob, burl);
			cacheMap.set(url, burl);
			cacheMap.set(burl, burl);
			return burl;
		});
		cacheMap.set(url, promised);
		return promised;
	}
	if (typeof url == "string") {
		const blob = new Blob([url], { type: "text/css" });
		const burl = URL.createObjectURL(blob);
		blobURLMap.set(blob, burl);
		cacheMap.set(burl, burl);
		return burl;
	}
	return url;
};
var fetchAsInline = (url) => {
	if (!url) return "";
	if (cacheContentMap.has(url)) return cacheContentMap.get(url) ?? "";
	if (url instanceof Blob || url instanceof File) {
		if (cacheBlobContentMap.has(url)) return cacheBlobContentMap.get(url) ?? "";
		const promised = url?.text?.()?.then?.((text) => {
			cacheBlobContentMap.set(url, text);
			return text;
		});
		cacheBlobContentMap.set(url, promised);
		return promised;
	}
	if (URL.canParse(url) || url?.trim?.()?.startsWith?.("./")) {
		const promised = fetch(url?.replace?.("?url", "?raw"), {
			cache: "force-cache",
			mode: "same-origin",
			priority: "high"
		})?.then?.(async (res) => {
			const text = await res.text();
			cacheContentMap.set(url, text);
			return text;
		});
		cacheContentMap.set(url, promised);
		return promised;
	}
	if (typeof url == "string") {
		cacheContentMap.set(url, url);
		return url;
	}
	return url;
};
var getAdoptedStyleRule = (selector, layerName = "ux-query", basis = null) => {
	if (!selector) return null;
	if (!supportsConstructableStylesheet()) return null;
	const root = isShadowRoot(basis) ? basis : basis?.getRootNode ? basis.getRootNode({ composed: true }) : null;
	const inShadow = isShadowRoot(root);
	const targetAdoptedSheets = inShadow ? root.adoptedStyleSheets : typeof document != "undefined" ? document.adoptedStyleSheets : null;
	if (!targetAdoptedSheets) return null;
	const selectorKey = `${layerName || ""}:${selector}`;
	let sheet;
	if (inShadow) {
		let shadowMap = adoptedShadowSelectorMap.get(root);
		if (!shadowMap) {
			shadowMap = /* @__PURE__ */ new Map();
			adoptedShadowSelectorMap.set(root, shadowMap);
		}
		sheet = shadowMap.get(selectorKey);
		if (!sheet) {
			sheet = new CSSStyleSheet();
			shadowMap.set(selectorKey, sheet);
			if (!targetAdoptedSheets.includes(sheet)) targetAdoptedSheets.push(sheet);
		}
	} else {
		sheet = adoptedSelectorMap.get(selectorKey);
		if (!sheet) {
			sheet = new CSSStyleSheet();
			adoptedSelectorMap.set(selectorKey, sheet);
			if (!targetAdoptedSheets.includes(sheet)) targetAdoptedSheets.push(sheet);
		}
	}
	if (layerName) {
		let layerRule;
		if (inShadow) {
			let shadowLayerMap = adoptedShadowLayerMap.get(root);
			if (!shadowLayerMap) {
				shadowLayerMap = /* @__PURE__ */ new Map();
				adoptedShadowLayerMap.set(root, shadowLayerMap);
			}
			layerRule = shadowLayerMap.get(layerName);
		} else layerRule = adoptedLayerMap.get(layerName);
		if (!layerRule) {
			layerRule = getOrCreateLayerRule(sheet, layerName);
			if (layerRule) if (inShadow) {
				let shadowLayerMap = adoptedShadowLayerMap.get(root);
				if (!shadowLayerMap) {
					shadowLayerMap = /* @__PURE__ */ new Map();
					adoptedShadowLayerMap.set(root, shadowLayerMap);
				}
				shadowLayerMap.set(layerName, layerRule);
			} else adoptedLayerMap.set(layerName, layerRule);
		}
		if (layerRule) {
			let layerRuleIndex = Array.from(layerRule.cssRules || []).findIndex((r) => r instanceof CSSStyleRule && r.selectorText?.trim?.() === selector?.trim?.());
			if (layerRuleIndex === -1) try {
				layerRuleIndex = layerRule.insertRule(`${selector} {}`, layerRule.cssRules.length);
			} catch (e) {
				return null;
			}
			return layerRule.cssRules[layerRuleIndex];
		}
	}
	let ruleIndex = Array.from(sheet.cssRules || []).findIndex((rule) => rule instanceof CSSStyleRule && rule.selectorText?.trim?.() === selector?.trim?.());
	if (ruleIndex === -1) try {
		ruleIndex = sheet.insertRule(`${selector} {}`, sheet.cssRules.length);
	} catch (e) {
		return null;
	}
	const rule = sheet.cssRules[ruleIndex];
	if (rule instanceof CSSStyleRule) return rule;
	return null;
};
//#endregion
//#region ../../modules/projects/style.ts/src/baker.ts
var invalidationReady = false;
var lastFingerprint = "";
var rebakeQueued = false;
var normalizeCategories = (categories) => {
	const list = [...categories?.length ? categories : DEFAULT_CATEGORIES];
	return [...new Set(list.filter(Boolean))];
};
var cacheKeyFor = (selector, categories, media = BAKE_SCREEN_MEDIA) => `${selector}\0${[...categories].sort().join(",")}\0${media === false ? "" : media}`;
var bakeThemeFingerprint = (root = typeof document !== "undefined" ? document.documentElement : null, el) => {
	if (!root || typeof getComputedStyle !== "function") return "";
	const cs = getComputedStyle(root);
	const parts = [
		root.getAttribute?.("data-theme") || root.getAttribute?.("theme") || "",
		root.getAttribute?.("data-color-scheme") || root.getAttribute?.("color-scheme") || cs.colorScheme || "",
		cs.getPropertyValue("--base-color").trim(),
		cs.getPropertyValue("--color-primary").trim()
	];
	if (el && el !== root) {
		const local = getComputedStyle(el);
		parts.push(el.getAttribute?.("data-theme") || "", local.getPropertyValue("--base-color").trim());
	}
	return parts.join("|");
};
var takeProp = (into, cs, name) => {
	const value = cs.getPropertyValue(name)?.trim();
	if (!value) return;
	into.set(name, value);
};
var COLOR_PROP_SET = new Set(CSS_COLOR_PROPERTIES);
/** 0 = color props, 1 = other longhands, 2 = custom properties. */
var bakeDeclRank = (name) => {
	if (name.startsWith("--")) return 2;
	if (COLOR_PROP_SET.has(name)) return 0;
	return 1;
};
var collectBakedDeclarations = (cs, categories) => {
	const into = /* @__PURE__ */ new Map();
	const set = new Set(categories);
	if (set.has("colors")) for (const name of CSS_COLOR_PROPERTIES) takeProp(into, cs, name);
	if (set.has("typography")) for (const name of CSS_TYPOGRAPHY_PROPERTIES) takeProp(into, cs, name);
	if (set.has("motion")) for (const name of CSS_MOTION_PROPERTIES) takeProp(into, cs, name);
	if (set.has("tokens") || set.has("colors")) for (let i = 0; i < cs.length; i++) {
		const name = cs.item(i);
		if (!name.startsWith("--")) continue;
		if (set.has("tokens") || isColorToken(name)) takeProp(into, cs, name);
	}
	return into;
};
var buildBakedCssText = (selector, declarations, layer = BAKE_LAYER, media = BAKE_SCREEN_MEDIA) => {
	const body = [];
	const rows = [...declarations].sort((a, b) => bakeDeclRank(a[0]) - bakeDeclRank(b[0]));
	for (const [name, value] of rows) {
		if (!name || !value) continue;
		const baked = value.replace(/\s*!important\s*$/i, "").trim();
		if (!baked) continue;
		body.push(`${name}: ${baked} !important;`);
	}
	if (!body.length) return "";
	const rule = `${selector} {\n${body.join("\n")}\n}`;
	const inner = media ? `@media ${media} {\n${rule}\n}` : rule;
	return [cssLayerOrder(layer), cssLayerBlock(layer, inner)].filter(Boolean).join("");
};
/** View host plus closest window / modal chrome. */
var collectBakeScreenHosts = (root) => {
	if (!root || root.nodeType !== 1) return [];
	const hosts = /* @__PURE__ */ new Set([root]);
	const chrome = root.closest?.(BAKE_SCREEN_CHROME.join(", "));
	if (chrome instanceof HTMLElement) hosts.add(chrome);
	return [...hosts];
};
var bakeAlsoQueriesFor = (root) => {
	if (!root) return [];
	if (root.classList?.contains("view-settings") || root.closest?.(".view-settings")) return BAKE_SCREEN_ALSO_SETTINGS;
	if (root.classList?.contains("view-explorer") || root.closest?.(".view-explorer") || root.querySelector?.("ui-file-manager")) return BAKE_SCREEN_ALSO_EXPLORER;
	return [];
};
/**
* One sample per query. Same tree as `root` → scope under the view selector;
* nested shadow (explorer rows) → write the query as-is into that shadow sheet.
*/
var collectBakeAlsoHosts = (root, queries = BAKE_SCREEN_ALSO, pierceShadow = true) => {
	if (!root || !queries.length) return [];
	const rootSel = ensureStyleScopeSelector(root);
	const find = pierceShadow ? queryFirstDeep : (scope, sel) => {
		try {
			const hit = scope.querySelector(sel);
			return hit instanceof HTMLElement ? hit : null;
		} catch {
			return null;
		}
	};
	const grouped = /* @__PURE__ */ new Map();
	for (const query of queries) {
		const q = String(query || "").trim();
		if (!q) continue;
		const el = find(root, q);
		if (!el || el === root) continue;
		const sel = el.getRootNode() === root.getRootNode() ? `${rootSel} ${q}` : q;
		const list = grouped.get(el);
		if (list) {
			if (!list.includes(sel)) list.push(sel);
		} else grouped.set(el, [sel]);
	}
	return [...grouped].map(([el, sels]) => ({
		el,
		selector: sels.join(", ")
	}));
};
var adoptedList = (el) => {
	const root = el.getRootNode?.();
	if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot) return root.adoptedStyleSheets ?? null;
	if (typeof document !== "undefined") return document.adoptedStyleSheets ?? null;
	return null;
};
var assignAdopted = (el, next) => {
	const root = el.getRootNode?.();
	try {
		if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot) {
			root.adoptedStyleSheets = next;
			return;
		}
		if (typeof document !== "undefined") document.adoptedStyleSheets = next;
	} catch {}
};
var adoptSheet = (el, baked) => {
	if (baked.sheet && supportsConstructableStylesheet()) {
		const list = adoptedList(el);
		if (!list) return;
		if (list.includes(baked.sheet)) {
			baked.adopted = true;
			return;
		}
		try {
			list.push(baked.sheet);
			baked.adopted = true;
			return;
		} catch {
			assignAdopted(el, [...list, baked.sheet]);
			baked.adopted = true;
			return;
		}
	}
	if (baked.styleEl && typeof document !== "undefined") {
		if (!baked.styleEl.isConnected) document.head?.append(baked.styleEl);
		baked.adopted = true;
	}
};
var unadoptSheet = (el, baked) => {
	if (baked.sheet && supportsConstructableStylesheet()) {
		const list = adoptedList(el);
		if (list) {
			const idx = list.indexOf(baked.sheet);
			if (idx !== -1) try {
				list.splice(idx, 1);
			} catch {
				assignAdopted(el, list.filter((sheet) => sheet !== baked.sheet));
			}
		}
	}
	baked.styleEl?.remove();
	baked.adopted = false;
};
var writeBakedCss = (baked, cssText) => {
	baked.cssText = cssText;
	if (!cssText) return false;
	if (baked.sheet && supportsConstructableStylesheet()) try {
		baked.sheet.replaceSync(cssText);
		return true;
	} catch (error) {
		console.warn("[style-lib] bake replaceSync failed", error);
		return false;
	}
	if (baked.styleEl) {
		baked.styleEl.textContent = cssText;
		return true;
	}
	return false;
};
var rememberCache = (baked, cacheMs) => {
	const prev = bakedCache.get(baked.cacheKey);
	if (prev?.timer) clearTimeout(prev.timer);
	const entry = {
		cssText: baked.cssText,
		fingerprint: baked.fingerprint,
		categories: baked.categories,
		selector: baked.selector,
		expires: Date.now() + cacheMs
	};
	if (cacheMs > 0 && typeof setTimeout === "function") entry.timer = setTimeout(() => {
		if (bakedCache.get(baked.cacheKey) === entry) bakedCache.delete(baked.cacheKey);
	}, cacheMs);
	bakedCache.set(baked.cacheKey, entry);
};
var dropCache = (cacheKey) => {
	const prev = bakedCache.get(cacheKey);
	if (prev?.timer) clearTimeout(prev.timer);
	bakedCache.delete(cacheKey);
};
var clearAllCache = () => {
	for (const entry of bakedCache.values()) if (entry.timer) clearTimeout(entry.timer);
	bakedCache.clear();
};
var parkBaked = (el, cacheMs = DEFAULT_CACHE_MS) => {
	const baked = bakedStyles.get(el);
	if (!baked) return;
	if (baked.adopted) unadoptSheet(el, baked);
	bakedLive.delete(el);
	if (baked.cssText) rememberCache(baked, cacheMs);
};
var resumeBaked = (el, cacheMs = DEFAULT_CACHE_MS) => {
	const baked = bakedStyles.get(el);
	if (!baked || !el.isConnected) return;
	const fingerprint = bakeThemeFingerprint(void 0, el);
	const cached = bakedCache.get(baked.cacheKey);
	if (!baked.cssText && cached && cached.fingerprint === fingerprint) {
		writeBakedCss(baked, cached.cssText);
		baked.fingerprint = cached.fingerprint;
	}
	if (!baked.cssText || baked.fingerprint !== fingerprint) {
		bakeComputedStyle(el, {
			categories: baked.categories,
			cacheMs,
			layer: BAKE_LAYER
		});
		return;
	}
	adoptSheet(el, baked);
	bakedLive.add(el);
};
var bakeIO = null;
var ensureBakeIO = () => {
	if (bakeIO || typeof IntersectionObserver === "undefined") return bakeIO;
	bakeIO = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			const el = entry.target;
			if (!bakedStyles.has(el)) continue;
			if (entry.isIntersecting && el.isConnected) resumeBaked(el);
			else parkBaked(el);
		}
	}, { threshold: 0 });
	return bakeIO;
};
var ensureBakedRecord = (el, selector, categories, media = BAKE_SCREEN_MEDIA) => {
	let baked = bakedStyles.get(el);
	if (baked) {
		baked.selector = selector;
		baked.categories = categories;
		baked.media = media;
		baked.cacheKey = cacheKeyFor(selector, categories, media);
		return baked;
	}
	const canConstruct = supportsConstructableStylesheet();
	baked = {
		sheet: canConstruct ? new CSSStyleSheet() : null,
		styleEl: canConstruct || typeof document === "undefined" ? null : document.createElement("style"),
		selector,
		categories,
		cssText: "",
		fingerprint: "",
		adopted: false,
		cacheKey: cacheKeyFor(selector, categories, media),
		media
	};
	if (baked.styleEl) {
		baked.styleEl.dataset.uxBaked = "";
		baked.styleEl.dataset.owner = "style-lib";
	}
	bakedStyles.set(el, baked);
	ensureBakeIO()?.observe(el);
	return baked;
};
var flushRebake = () => {
	rebakeQueued = false;
	const batch = [...rebakeBatch];
	rebakeBatch.clear();
	for (const el of batch) {
		if (!el.isConnected || !bakedStyles.has(el)) continue;
		const baked = bakedStyles.get(el);
		bakeComputedStyle(el, baked ? {
			categories: baked.categories,
			selector: baked.selector,
			media: baked.media
		} : {});
	}
};
var scheduleRebake = (el) => {
	rebakeBatch.add(el);
	if (rebakeQueued) return;
	rebakeQueued = true;
	queueMicrotask(flushRebake);
};
var invalidateBakedStyles = (reason = "theme") => {
	const fingerprint = bakeThemeFingerprint();
	if (reason !== "force" && fingerprint === lastFingerprint && lastFingerprint) return;
	lastFingerprint = fingerprint;
	clearAllCache();
	for (const el of [...bakedLive]) {
		const baked = bakedStyles.get(el);
		if (!baked) {
			bakedLive.delete(el);
			continue;
		}
		unadoptSheet(el, baked);
		baked.cssText = "";
		baked.fingerprint = "";
		scheduleRebake(el);
	}
};
var ensureBakeInvalidation = () => {
	if (invalidationReady || typeof document === "undefined") return;
	invalidationReady = true;
	lastFingerprint = bakeThemeFingerprint();
	registerStyleTreeHook((host) => {
		if (bakeThemeFingerprint() !== lastFingerprint) {
			invalidateBakedStyles("style-tree");
			return;
		}
		if (host instanceof HTMLElement && bakedStyles.has(host)) scheduleRebake(host);
	});
	try {
		new MutationObserver(() => invalidateBakedStyles("theme-attr")).observe(document.documentElement, {
			attributes: true,
			attributeFilter: [...STYLE_THEME_OBSERVE_ATTRS]
		});
	} catch {}
	try {
		(matchMedia?.("(prefers-color-scheme: dark)"))?.addEventListener?.("change", () => invalidateBakedStyles("color-scheme"));
	} catch {}
};
/**
* Bake computed styles for `el` into `@layer ux-baked` scoped by `#id` or `data-style-id`.
*/
var bakeComputedStyle = (el, options = {}) => {
	if (!el || el.nodeType !== 1) return null;
	if (typeof getComputedStyle !== "function") return null;
	ensureBakeInvalidation();
	const categories = normalizeCategories(options.categories);
	const layer = options.layer || "ux-baked";
	const cacheMs = options.cacheMs ?? 3e4;
	const media = options.media === void 0 ? BAKE_SCREEN_MEDIA : options.media;
	const selector = options.selector?.trim() || ensureStyleScopeSelector(el);
	const fingerprint = bakeThemeFingerprint(void 0, el);
	const baked = ensureBakedRecord(el, selector, categories, media);
	baked.fingerprint = fingerprint;
	const cached = bakedCache.get(baked.cacheKey);
	let cssText = "";
	if (cached && cached.fingerprint === fingerprint && cached.cssText) cssText = cached.cssText;
	else cssText = buildBakedCssText(selector, collectBakedDeclarations(getComputedStyle(el), categories), layer, media);
	if (!cssText) {
		unadoptSheet(el, baked);
		bakedLive.delete(el);
		return baked;
	}
	writeBakedCss(baked, cssText);
	rememberCache(baked, cacheMs);
	if (isElementVisible(el)) {
		adoptSheet(el, baked);
		bakedLive.add(el);
	} else {
		unadoptSheet(el, baked);
		bakedLive.delete(el);
	}
	return baked;
};
var unbakeComputedStyle = (el, keepCache = true) => {
	if (!el) return;
	const baked = bakedStyles.get(el);
	if (!baked) return;
	unadoptSheet(el, baked);
	bakedLive.delete(el);
	bakeIO?.unobserve(el);
	if (keepCache && baked.cssText) rememberCache(baked, DEFAULT_CACHE_MS);
	else dropCache(baked.cacheKey);
	bakedStyles.delete(el);
};
var rebakeComputedStyle = (el, options) => {
	if (!el) return null;
	const baked = bakedStyles.get(el);
	if (baked) {
		unadoptSheet(el, baked);
		baked.cssText = "";
		dropCache(baked.cacheKey);
	}
	return bakeComputedStyle(el, options ?? (baked ? {
		categories: baked.categories,
		selector: baked.selector,
		media: baked.media
	} : {}));
};
var getBakedStyle = (el) => el ? bakedStyles.get(el) : void 0;
/**
* Bake tokens + colors for a view host (and closest window / modal) under `@media screen`.
* WHY: explorer / markdown keep `color-mix` / `light-dark` for print; screen uses the snapshot.
* INVARIANT: rows / fields are one sample → class selector, not a sheet per item.
*/
var bakeScreenColors = (root, options = {}) => {
	const opts = {
		media: BAKE_SCREEN_MEDIA,
		pierceShadow: options.pierceShadow !== false,
		...options
	};
	const hosts = collectBakeScreenHosts(root);
	const extras = collectBakeAlsoHosts(root, opts.also ?? bakeAlsoQueriesFor(root), opts.pierceShadow !== false);
	const out = [];
	const followers = /* @__PURE__ */ new Set();
	for (const el of hosts) {
		const baked = bakeComputedStyle(el, opts);
		if (baked) out.push(baked);
	}
	for (const { el, selector } of extras) {
		if (hosts.includes(el)) continue;
		const baked = bakeComputedStyle(el, {
			...opts,
			selector
		});
		if (baked) out.push(baked);
		followers.add(el);
	}
	if (root) {
		const prev = bakedFollowers.get(root);
		if (prev) {
			for (const el of prev) if (!followers.has(el) && !hosts.includes(el)) unbakeComputedStyle(el, true);
		}
		if (followers.size) bakedFollowers.set(root, followers);
		else bakedFollowers.delete(root);
	}
	return out;
};
var unbakeScreenColors = (root, keepCache = true) => {
	if (!root) return;
	const followers = bakedFollowers.get(root);
	bakedFollowers.delete(root);
	for (const el of collectBakeScreenHosts(root)) unbakeComputedStyle(el, keepCache);
	if (followers) for (const el of followers) unbakeComputedStyle(el, keepCache);
};
var scheduleBakeScreenColors = (root, options) => {
	const run = (retryMiss = true) => {
		bakeScreenColors(root, options);
		if (!retryMiss || !root) return;
		const queries = options?.also ?? bakeAlsoQueriesFor(root);
		const pierce = options?.pierceShadow !== false;
		if (!queries.length) return;
		if (queries.some((sel) => !(pierce ? queryFirstDeep(root, sel) : root.querySelector(sel))) && typeof requestAnimationFrame === "function") requestAnimationFrame(() => run(false));
	};
	if (!root || typeof requestAnimationFrame !== "function") {
		run(false);
		return;
	}
	requestAnimationFrame(() => run(true));
};
//#endregion
//#region ../../modules/projects/style.ts/src/component.ts
var syncAdoptedSheetsToShadow = (bTo) => {
	const root = bTo?.shadowRoot;
	if (!root) return;
	const adoptedSheets = adoptedStyleSheetsCache.get(bTo) || [];
	for (const sheet of adoptedSheets) ensureAdoptedSheetContent(sheet);
	try {
		const live = root.adoptedStyleSheets || [];
		root.adoptedStyleSheets = [...adoptedSheets.filter((s) => !live.includes(s)), .../* @__PURE__ */ new Set([...live])];
	} catch {}
};
var addAdoptedSheetToElement = (bTo, sheet) => {
	let adoptedSheets = adoptedStyleSheetsCache.get(bTo);
	if (!adoptedSheets) adoptedStyleSheetsCache.set(bTo, adoptedSheets = []);
	if (sheet && adoptedSheets.indexOf(sheet) < 0) adoptedSheets.push(sheet);
	ensureAdoptedSheetContent(sheet);
	syncAdoptedSheetsToShadow(bTo);
};
var ensureShadowCssFallback = (bTo, cssText) => {
	const root = bTo?.shadowRoot;
	if (!root || !cssText) return null;
	let style = root.querySelector?.(`style[${HOST_CSS_FALLBACK}]`);
	if (!style) {
		style = loadInlineStyle(cssText, root, "");
		if (style) style.setAttribute(HOST_CSS_FALLBACK, "");
	} else if (style.textContent !== cssText) style.textContent = cssText;
	return style;
};
/** WHY: Capacitor WebView drops `shadowRoot.adoptedStyleSheets` or empties cssRules; cache + source text restore them. */
var rehydrateAdoptedStyleSheets = (root = typeof document !== "undefined" ? document : null) => {
	if (!root) return;
	const restore = (host) => {
		if (!host?.shadowRoot) return;
		ensureShadowCssFallback(host, hostCssText(host));
		syncAdoptedSheetsToShadow(host);
	};
	if (root.nodeType === 1) restore(root);
	const visit = (node) => {
		let children = [];
		try {
			children = node.querySelectorAll("*");
		} catch {
			return;
		}
		for (let i = 0; i < children.length; i++) {
			const host = children[i];
			if (host.shadowRoot) {
				restore(host);
				visit(host.shadowRoot);
			}
		}
	};
	visit(root);
};
var hostCssText = (bTo) => {
	const src = bTo?.styles;
	if (typeof src === "string") return src;
	if (typeof src === "function") try {
		const out = src.call(bTo);
		if (typeof out === "string") return out;
		return cssTextForAdoptedSheet(out);
	} catch {
		return null;
	}
	return cssTextForAdoptedSheet(src);
};
var ensureHostStyles = (bTo) => {
	if (!bTo) return;
	if (bTo.styles != null) loadCachedStyles(bTo, bTo.styles);
	syncAdoptedSheetsToShadow(bTo);
	ensureShadowCssFallback(bTo, hostCssText(bTo));
};
var styleFlushBatch = [];
var styleFlushScheduled = false;
/** WHY: connect / childList / theme attrs often land in the same turn — one apply before paint. */
var scheduleEnsureHostStyles = (bTo) => {
	if (!bTo || !(bTo instanceof Element) || styleFlushPending.has(bTo)) return;
	styleFlushPending.add(bTo);
	styleFlushBatch.push(bTo);
	if (styleFlushScheduled) return;
	styleFlushScheduled = true;
	queueMicrotask(() => {
		styleFlushScheduled = false;
		const batch = styleFlushBatch;
		styleFlushBatch = [];
		for (const host of batch) {
			styleFlushPending.delete(host);
			if (host.isConnected) ensureHostStyles(host);
		}
	});
};
registerStyleTreeHook((el) => scheduleEnsureHostStyles(el));
var loadCachedStyles = (bTo, src) => {
	if (!src) return null;
	let resolvedSrc = src;
	if (typeof src == "function") try {
		const weak = new WeakRef(bTo);
		resolvedSrc = src.call(bTo, weak);
	} catch (e) {
		console.warn("Error calling styles function:", e);
		return null;
	}
	if (resolvedSrc && typeof CSSStyleSheet != "undefined" && resolvedSrc instanceof CSSStyleSheet) {
		addAdoptedSheetToElement(bTo, resolvedSrc);
		return ensureShadowCssFallback(bTo, cssTextForAdoptedSheet(resolvedSrc));
	}
	if (resolvedSrc instanceof Promise) {
		resolvedSrc.then((result) => {
			if (result instanceof CSSStyleSheet) addAdoptedSheetToElement(bTo, result);
			else if (result != null) loadCachedStyles(bTo, result);
		}).catch((e) => {
			console.warn("Error loading adopted stylesheet:", e);
		});
		return null;
	}
	if (typeof resolvedSrc == "string" || resolvedSrc instanceof Blob || resolvedSrc instanceof File) {
		const adopted = loadAsAdopted(resolvedSrc, "");
		if (adopted) {
			const addAdoptedSheet = (sheet) => {
				addAdoptedSheetToElement(bTo, sheet);
			};
			if (adopted instanceof Promise) {
				adopted.then((sheet) => {
					addAdoptedSheet(sheet);
					ensureShadowCssFallback(bTo, typeof resolvedSrc == "string" ? resolvedSrc : cssTextForAdoptedSheet(sheet));
				}).catch((e) => {
					console.warn("Error loading adopted stylesheet:", e);
				});
				return null;
			} else {
				addAdoptedSheet(adopted);
				return ensureShadowCssFallback(bTo, typeof resolvedSrc == "string" ? resolvedSrc : cssTextForAdoptedSheet(adopted));
			}
		}
	}
	const source = typeof src == "function" || typeof src == "object" ? styleElementCache : styleCache;
	const cached = source.get(src);
	let styleElement = cached?.styleElement;
	let vars = cached?.vars;
	if (!cached) {
		let styles = ``;
		let props = [];
		if (typeof resolvedSrc == "string") styles = resolvedSrc || "";
		else if (typeof resolvedSrc == "object" && resolvedSrc != null) if (resolvedSrc instanceof HTMLStyleElement) styleElement = resolvedSrc;
		else {
			styles = typeof resolvedSrc.css == "string" ? resolvedSrc.css : typeof resolvedSrc == "string" ? resolvedSrc : String(resolvedSrc);
			props = resolvedSrc?.props ?? props;
			vars = resolvedSrc?.vars ?? vars;
		}
		if (!styleElement && styles) styleElement = loadInlineStyle(styles, bTo, "ux-layer");
		source.set(src, {
			css: styles,
			props,
			vars,
			styleElement
		});
	}
	return styleElement;
};
//#endregion
//#region ../../modules/projects/style.ts/src/bind.ts
var isLinkerLike = (value) => !!value && typeof value === "object" && "ref" in value && typeof value?.unbind === "function";
/** Subscribe `handler(el, prop, value)` to a ref's `.value`. Same call shape as lure `bindWith`. */
var bindWith = (el, prop, value, handler) => {
	const linker = isLinkerLike(value) ? value : null;
	if (linker) {
		linker.bind?.();
		value = linker.ref;
	}
	handler?.(el, prop, value);
	const wel = toRef(el);
	const wv = toRef(value);
	const un = affected?.([value, "value"], (curr) => {
		const elementRef = deref(wel);
		const v = $getValue(deref(wv)) ?? $getValue(curr);
		handler?.(elementRef, prop, v);
	});
	const unsub = () => {
		linker?.unbind?.();
		un?.();
	};
	addToCallChain(value, Symbol.dispose, unsub);
	return unsub;
};
//#endregion
//#region ../../modules/projects/style.ts/src/Animatable.ts
var animatableId = 0;
var onScroll = (o = {}) => ({
	kind: "scroll",
	...o
});
var onView = (o = {}) => ({
	kind: "view",
	...o
});
var AnimatableValue = class {
	[ANIMATABLE_BRAND] = true;
	id = animatableId++;
	#steps;
	#options;
	#current;
	#subscribers = /* @__PURE__ */ new Set();
	#attachments = /* @__PURE__ */ new Set();
	#resolveElementRef(v, self) {
		if (v == null || v === "self") return self;
		if (v === "root") return self.ownerDocument.scrollingElement ?? self.ownerDocument.documentElement;
		if (typeof v === "object" && "value" in v && !(v instanceof Element)) return v.value ?? self;
		return v;
	}
	#findNearestScroller(el) {
		for (let node = el.parentElement; node; node = node.parentElement) {
			const s = getComputedStyle(node);
			if (/(auto|scroll|overlay)/.test(s.overflow + s.overflowX + s.overflowY)) return node;
		}
		return el.ownerDocument.scrollingElement ?? el.ownerDocument.documentElement;
	}
	#createTimeline(element, trigger) {
		const win = element.ownerDocument.defaultView ?? globalThis;
		if (isScrollDriven(trigger)) {
			const ScrollTimelineCtor = win.ScrollTimeline;
			if (typeof ScrollTimelineCtor !== "function") return null;
			return new ScrollTimelineCtor({
				source: trigger.source === "nearest" || trigger.source == null ? this.#findNearestScroller(element) : this.#resolveElementRef(trigger.source, element),
				axis: trigger.axis ?? "block"
			});
		}
		const ViewTimelineCtor = win.ViewTimeline;
		if (typeof ViewTimelineCtor !== "function") return null;
		return new ViewTimelineCtor({
			subject: trigger.subject ? this.#resolveElementRef(trigger.subject, element) : element,
			axis: trigger.axis ?? "block",
			inset: trigger.inset
		});
	}
	#startTimelineDriven(element, attachment, plan, trigger) {
		const timeline = this.#createTimeline(element, trigger);
		if (!timeline) return this.#startTimelineFallback(element, attachment, plan, trigger);
		const timing = this.#buildTiming();
		const animation = element.animate(this.#buildKeyframes(plan), {
			...timing,
			duration: "auto",
			delay: 0,
			endDelay: 0,
			iterations: 1,
			fill: this.#options.fill ?? "both",
			timeline
		});
		if (trigger.rangeStart) animation.rangeStart = trigger.rangeStart;
		if (trigger.rangeEnd) animation.rangeEnd = trigger.rangeEnd;
		attachment.animation = animation;
		return () => animation.cancel();
	}
	constructor(steps, options = {}) {
		if (!Array.isArray(steps) || steps.length < 2) throw new TypeError("animatable() expects at least 2 steps");
		this.#steps = steps;
		this.#options = options;
		this.#current = this.#resolveStep(steps[0]);
	}
	#startTimelineFallback(element, attachment, plan, trigger) {
		const DURATION = 1e4;
		const animation = element.animate(this.#buildKeyframes(plan), {
			...this.#buildTiming(),
			duration: DURATION,
			delay: 0,
			iterations: 1,
			fill: "both"
		});
		animation.pause();
		attachment.animation = animation;
		const scroller = isScrollDriven(trigger) ? trigger.source === "nearest" || trigger.source == null ? this.#findNearestScroller(element) : this.#resolveElementRef(trigger.source, element) : this.#findNearestScroller(element);
		let rafId = 0;
		const computeProgress = () => {
			if (isViewDriven(trigger)) {
				const vp = scroller === document.scrollingElement ? {
					top: 0,
					height: innerHeight
				} : scroller.getBoundingClientRect();
				const rect = element.getBoundingClientRect();
				const total = vp.height + rect.height;
				return Math.min(1, Math.max(0, (vp.top + vp.height - rect.top) / total));
			}
			const el = scroller;
			const max = el.scrollHeight - el.clientHeight;
			return max > 0 ? el.scrollTop / max : 0;
		};
		const onScroll = () => {
			cancelAnimationFrame(rafId);
			rafId = requestAnimationFrame(() => {
				animation.currentTime = computeProgress() * DURATION;
			});
		};
		const listenTarget = scroller === document.scrollingElement ? window : scroller;
		listenTarget.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => {
			cancelAnimationFrame(rafId);
			listenTarget.removeEventListener("scroll", onScroll);
			animation.cancel();
		};
	}
	/** Последнее известное значение (первый шаг до старта). */
	get value() {
		return this.#current;
	}
	set value(next) {
		this.#current = next;
		for (const cb of this.#subscribers) cb(next);
	}
	/**
	* First/current step for style coercion (`S\`opacity: ${anim}\`` probes,
	* Number(), String()). INVARIANT: constructor seeds #current from steps[0].
	*/
	valueOf() {
		return this.#current;
	}
	toString() {
		const v = this.#current;
		return v == null ? "" : String(v);
	}
	[Symbol.toPrimitive](hint) {
		if (hint === "number") {
			const n = Number(this.#current);
			return Number.isFinite(n) ? n : 0;
		}
		return this.toString();
	}
	subscribe(cb) {
		this.#subscribers.add(cb);
		return () => this.#subscribers.delete(cb);
	}
	get options() {
		return this.#options;
	}
	get steps() {
		return this.#steps;
	}
	#resolveStep(step) {
		if (step != null && typeof step === "object" && "value" in step) return step.value;
		return step;
	}
	#buildKeyframes(plan) {
		const steps = this.#steps.map((s) => this.#resolveStep(s));
		const count = steps.length;
		const offsets = this.#options.offsets;
		const easing = this.#options.easing;
		return steps.map((raw, i) => {
			const frame = { offset: offsets?.[i] ?? (count > 1 ? i / (count - 1) : 0) };
			if (Array.isArray(easing)) {
				if (easing[i]) frame.easing = easing[i];
			}
			let value = raw;
			if (plan.mode === "property" && plan.unit != null && typeof raw === "number") value = `${raw}${plan.unit}`;
			if (plan.mode === "custom-property" && typeof raw !== "string") value = String(raw);
			frame[plan.target] = value;
			return frame;
		});
	}
	#buildTiming() {
		const o = this.#options;
		return {
			duration: parseTime(o.duration, 300),
			delay: parseTime(o.delay, 0),
			endDelay: o.endDelay ?? 0,
			iterations: normalizeIterations(o.iterations),
			direction: o.direction ?? "normal",
			fill: o.fill ?? "both",
			composite: o.composite,
			easing: Array.isArray(o.easing) ? "linear" : o.easing ?? "linear"
		};
	}
	attach(element, plan) {
		const attachment = {
			element,
			animation: null,
			cleanup: () => {}
		};
		const trigger = this.#options.trigger ?? "mount";
		let inner;
		if (isScrollDriven(trigger) || isViewDriven(trigger)) inner = this.#startTimelineDriven(element, attachment, plan, trigger);
		else {
			const start = () => {
				attachment.animation?.cancel();
				const animation = element.animate(this.#buildKeyframes(plan), this.#buildTiming());
				attachment.animation = animation;
				this.#trackProgress(animation, plan);
				return animation;
			};
			inner = this.#wireTrigger(element, attachment, start);
		}
		this.#attachments.add(attachment);
		attachment.cleanup = () => {
			inner();
			this.#attachments.delete(attachment);
		};
		return attachment.cleanup;
	}
	/**
	* Синхронизируем .value с завершением анимации,
	* чтобы реактивный контракт оставался честным
	* (подписчики вне анимации видят конечное значение).
	*/
	#trackProgress(animation, plan) {
		animation.finished.then(() => {
			const last = this.#resolveStep(this.#steps[this.#steps.length - 1]);
			this.value = last;
		}).catch(() => {});
	}
	#wireTrigger(element, attachment, start) {
		const trigger = this.#options.trigger ?? "mount";
		const reverseOnExit = this.#options.reverseOnExit ?? true;
		const playForward = () => {
			if (!attachment.animation || attachment.animation.playState === "idle") start();
			else {
				attachment.animation.playbackRate = Math.abs(attachment.animation.playbackRate || 1);
				attachment.animation.play();
			}
		};
		const playBackward = () => {
			if (!attachment.animation) return;
			attachment.animation.reverse();
		};
		if (trigger === "mount") {
			start();
			return () => {};
		}
		if (trigger === "manual") return () => {};
		if (trigger === "hover" || trigger === "focus") {
			const enter = trigger === "hover" ? "pointerenter" : "focusin";
			const leave = trigger === "hover" ? "pointerleave" : "focusout";
			const onEnter = () => playForward();
			const onLeave = () => {
				if (reverseOnExit) playBackward();
			};
			element.addEventListener(enter, onEnter);
			element.addEventListener(leave, onLeave);
			return () => {
				element.removeEventListener(enter, onEnter);
				element.removeEventListener(leave, onLeave);
			};
		}
		if (trigger === "click") {
			let forward = true;
			const onClick = () => {
				forward ? playForward() : playBackward();
				forward = !forward;
			};
			element.addEventListener("click", onClick);
			return () => element.removeEventListener("click", onClick);
		}
		if (trigger === "visible") {
			if (typeof IntersectionObserver !== "function") {
				start();
				return () => {};
			}
			const observer = new IntersectionObserver((entries) => {
				for (const entry of entries) if (entry.isIntersecting) playForward();
				else if (reverseOnExit && attachment.animation) playBackward();
			}, this.#options.intersection);
			observer.observe(element);
			return () => observer.disconnect();
		}
		if (trigger != null && typeof trigger === "object" && "value" in trigger) {
			const apply = (v) => v ? playForward() : playBackward();
			apply(trigger.value);
			const unsubscribe = typeof trigger.subscribe === "function" ? trigger.subscribe(apply) : null;
			return () => unsubscribe?.();
		}
		if (trigger === "show" || trigger === "hide" || trigger === "remove") {
			const eventName = trigger === "show" ? "u2-before-show" : trigger === "hide" ? "u2-before-hide" : "u2-before-remove";
			const attr = trigger === "remove" ? "data-removing" : "data-hidden";
			const wantPresent = trigger !== "show";
			const onEvent = (ev) => {
				if (ev.defaultPrevented) return;
				playForward();
			};
			element.addEventListener(eventName, onEvent);
			const mo = new MutationObserver(() => {
				if (element.hasAttribute(attr) === wantPresent) playForward();
				else if (reverseOnExit && attachment.animation) playBackward();
			});
			mo.observe(element, {
				attributes: true,
				attributeFilter: [attr]
			});
			return () => {
				element.removeEventListener(eventName, onEvent);
				mo.disconnect();
			};
		}
		return () => {};
	}
	#each(fn) {
		for (const at of this.#attachments) if (at.animation) fn(at.animation);
		return this;
	}
	play() {
		return this.#each((a) => a.play());
	}
	pause() {
		return this.#each((a) => a.pause());
	}
	reverse() {
		return this.#each((a) => a.reverse());
	}
	cancel() {
		return this.#each((a) => a.cancel());
	}
	finish() {
		return this.#each((a) => a.finish());
	}
	set playbackRate(rate) {
		this.#each((a) => {
			a.playbackRate = rate;
		});
	}
	/** Promise завершения всех активных анимаций. */
	get finished() {
		const list = [];
		this.#each((a) => list.push(a.finished.catch(() => {})));
		return Promise.all(list).then(() => {});
	}
};
var animatable = (steps, options) => new AnimatableValue(steps, options);
var isAnimatableValue = (value) => value != null && typeof value === "object" && value[ANIMATABLE_BRAND] === true;
//#endregion
//#region ../../modules/projects/style.ts/src/Styles.ts
var styleTemplateId = 0;
var readReactiveNumber = (slot) => {
	const current = slot.value?.value;
	const number = typeof current === "number" ? current : Number(current);
	if (!Number.isFinite(number)) throw new TypeError(`Reactive CSS value "${String(current)}" is not finite`);
	return number;
};
var getReactiveInitialNumber = (value) => {
	const number = Number(value?.value);
	return Number.isFinite(number) ? number : 0;
};
var replaceTypedMarkers = (cssValue, slots) => {
	let result = cssValue;
	for (const slot of slots) result = result.replace(new RegExp(`var\\(\\s*${escapeRegExp(slot.marker)}\\s*\\)`, "g"), String(slot.value));
	return result;
};
var isDirectSlotValue = (cssValue, marker) => {
	const escapedMarker = escapeRegExp(marker);
	return new RegExp(`^var\\(\\s*${escapedMarker}\\s*\\)$`).test(cssValue.trim());
};
/**
* Serialize animatable's first/current step for base inline style.
* WHY: triggers like click/hover/manual do not start WAAPI yet; without a
* base value, `opacity:${anim}` stays empty after we drop the var() probe.
*/
var serializeAnimatableCssValue = (raw, unit) => {
	let value = raw;
	if (value != null && typeof value === "object" && "value" in value && !(value instanceof Element)) value = value.value;
	if (value == null || value === "") return unit ? `0${unit}` : "0";
	if (unit != null && typeof value === "number") return `${value}${unit}`;
	return String(value);
};
var isDirectSlotUnitProduct = (cssValue, marker, unit) => {
	if (!unit) return false;
	const escapedMarker = escapeRegExp(marker);
	const escapedUnit = escapeRegExp(unit);
	return new RegExp(`^calc\\(\\s*var\\(\\s*${escapedMarker}\\s*\\)\\s*\\*\\s*1${escapedUnit}\\s*\\)$`, "i").test(cssValue.trim());
};
var setParsedTypedValue = (styleMap, CSSStyleValueCtor, property, cssValue) => {
	if (typeof CSSStyleValueCtor?.parseAll === "function") {
		const values = CSSStyleValueCtor.parseAll(property, cssValue);
		styleMap.set(property, ...values);
		return;
	}
	if (typeof CSSStyleValueCtor?.parse === "function") {
		styleMap.set(property, CSSStyleValueCtor.parse(property, cssValue));
		return;
	}
	styleMap.set(property, cssValue);
};
var tokenizeNumericCSS = (source) => {
	const tokens = [];
	let cursor = 0;
	while (cursor < source.length) {
		const rest = source.slice(cursor);
		const whitespace = /^\s+/.exec(rest);
		if (whitespace) {
			cursor += whitespace[0].length;
			continue;
		}
		const variable = /^var\(\s*(--[a-zA-Z0-9_-]+)\s*\)/.exec(rest);
		if (variable) {
			tokens.push({
				kind: "variable",
				marker: variable[1]
			});
			cursor += variable[0].length;
			continue;
		}
		const number = /^(?:\d*\.\d+|\d+\.?\d*)(?:[eE][+-]?\d+)?/.exec(rest);
		if (number) {
			cursor += number[0].length;
			const unitMatch = /^(%|[a-zA-Z]+)/.exec(source.slice(cursor));
			const unit = unitMatch?.[0] ?? null;
			if (unitMatch) cursor += unitMatch[0].length;
			tokens.push({
				kind: "number",
				value: Number(number[0]),
				unit: unit == null ? null : unit.toLowerCase()
			});
			continue;
		}
		const identifier = /^[a-zA-Z_][a-zA-Z0-9_-]*/.exec(rest);
		if (identifier) {
			tokens.push({
				kind: "identifier",
				value: identifier[0].toLowerCase()
			});
			cursor += identifier[0].length;
			continue;
		}
		const symbol = rest[0];
		if (symbol === "+" || symbol === "-" || symbol === "*" || symbol === "/" || symbol === "(" || symbol === ")" || symbol === ",") {
			tokens.push({
				kind: "symbol",
				value: symbol
			});
			cursor++;
			continue;
		}
		throw new SyntaxError(`Unsupported Typed OM numeric token near "${rest}"`);
	}
	return tokens;
};
var NumericTypedOMParser = class {
	tokens;
	win;
	reactiveByMarker;
	typedByMarker;
	index = 0;
	leaves = [];
	constructor(tokens, win, reactiveByMarker, typedByMarker) {
		this.tokens = tokens;
		this.win = win;
		this.reactiveByMarker = reactiveByMarker;
		this.typedByMarker = typedByMarker;
	}
	parse() {
		const root = this.parseSum();
		if (this.index !== this.tokens.length) throw new SyntaxError("Unexpected trailing Typed OM expression");
		return {
			root,
			leaves: this.leaves
		};
	}
	current() {
		return this.tokens[this.index];
	}
	consume() {
		const token = this.tokens[this.index];
		if (!token) throw new SyntaxError("Unexpected end of Typed OM expression");
		this.index++;
		return token;
	}
	consumeSymbol(symbol) {
		const token = this.consume();
		if (token.kind !== "symbol" || token.value !== symbol) throw new SyntaxError(`Expected "${symbol}"`);
	}
	matchesSymbol(symbol) {
		const token = this.current();
		return token?.kind === "symbol" && token.value === symbol;
	}
	createMath(name, ...values) {
		const Constructor = getWindowConstructor(this.win, name);
		if (typeof Constructor !== "function") throw new TypeError(`${name} is not supported`);
		return new Constructor(...values);
	}
	parseSum() {
		let value = this.parseProduct();
		while (this.matchesSymbol("+") || this.matchesSymbol("-")) {
			const operator = this.consume();
			const right = this.parseProduct();
			if (operator.kind !== "symbol") throw new SyntaxError("Expected a sum operator");
			if (operator.value === "+") value = this.createMath("CSSMathSum", value, right);
			else value = this.createMath("CSSMathSum", value, this.createMath("CSSMathNegate", right));
		}
		return value;
	}
	parseProduct() {
		let value = this.parseUnary();
		while (this.matchesSymbol("*") || this.matchesSymbol("/")) {
			const operator = this.consume();
			const right = this.parseUnary();
			if (operator.kind !== "symbol") throw new SyntaxError("Expected a product operator");
			if (operator.value === "*") value = this.createMath("CSSMathProduct", value, right);
			else value = this.createMath("CSSMathProduct", value, this.createMath("CSSMathInvert", right));
		}
		return value;
	}
	parseUnary() {
		if (this.matchesSymbol("+")) {
			this.consume();
			return this.parseUnary();
		}
		if (this.matchesSymbol("-")) {
			this.consume();
			return this.createMath("CSSMathNegate", this.parseUnary());
		}
		return this.parsePrimary();
	}
	parsePrimary() {
		const token = this.consume();
		if (token.kind === "number") return createTypedUnitValue(this.win, token.unit ?? "number", token.value);
		if (token.kind === "variable") {
			const reactive = this.reactiveByMarker.get(token.marker);
			if (reactive) {
				if (this.matchesSymbol("*")) {
					const checkpoint = this.index;
					this.consume();
					const rhs = this.current();
					if (rhs?.kind === "number" && rhs.value === 1 && typeof rhs.unit === "string" && (!reactive.multipliedByUnit || reactive.multipliedByUnit === rhs.unit.toLowerCase())) {
						this.consume();
						const leaf = createTypedUnitValue(this.win, rhs.unit.toLowerCase(), readReactiveNumber(reactive));
						this.leaves.push({
							slot: reactive,
							value: leaf
						});
						return leaf;
					}
					this.index = checkpoint;
				}
				const leaf = createTypedUnitValue(this.win, "number", readReactiveNumber(reactive));
				this.leaves.push({
					slot: reactive,
					value: leaf
				});
				return leaf;
			}
			const typed = this.typedByMarker.get(token.marker);
			if (typed) return typed.value;
			throw new SyntaxError(`Unknown style slot "${token.marker}"`);
		}
		if (token.kind === "symbol" && token.value === "(") {
			const value = this.parseSum();
			this.consumeSymbol(")");
			return value;
		}
		if (token.kind === "identifier") return this.parseFunction(token.value);
		throw new SyntaxError("Expected a Typed OM numeric value");
	}
	parseFunction(name) {
		this.consumeSymbol("(");
		if (name === "calc") {
			const value = this.parseSum();
			this.consumeSymbol(")");
			return value;
		}
		const values = [];
		if (!this.matchesSymbol(")")) {
			values.push(this.parseSum());
			while (this.matchesSymbol(",")) {
				this.consume();
				values.push(this.parseSum());
			}
		}
		this.consumeSymbol(")");
		if (name === "min") {
			if (values.length === 0) throw new SyntaxError("min() requires a value");
			return this.createMath("CSSMathMin", ...values);
		}
		if (name === "max") {
			if (values.length === 0) throw new SyntaxError("max() requires a value");
			return this.createMath("CSSMathMax", ...values);
		}
		if (name === "clamp") {
			if (values.length !== 3) throw new SyntaxError("clamp() requires three values");
			return this.createMath("CSSMathClamp", values[0], values[1], values[2]);
		}
		throw new SyntaxError(`Unsupported Typed OM function "${name}"`);
	}
};
var buildNumericTypedOMTree = (cssValue, win, reactiveSlots, typedSlots) => {
	const reactiveByMarker = /* @__PURE__ */ new Map();
	const typedByMarker = /* @__PURE__ */ new Map();
	for (const slot of reactiveSlots) reactiveByMarker.set(slot.marker, slot);
	for (const slot of typedSlots) typedByMarker.set(slot.marker, slot);
	return new NumericTypedOMParser(tokenizeNumericCSS(cssValue), win, reactiveByMarker, typedByMarker).parse();
};
var isTransformStyleProperty = (property) => {
	return property.trim().toLowerCase() === "transform";
};
/**
* Builds CSSTransformValue from a transform list such as
* `translate(calc(var(--fest-ref-0) * 1px), calc(var(--fest-ref-1) * 1px))`.
*
* INVARIANT: reactive `${ref}px` args become mutable CSS.px leaves (via the
* numeric parser collapse), not leftover --fest-ref custom properties.
*/
var buildTransformTypedOMTree = (cssValue, win, reactiveSlots, typedSlots) => {
	const tokens = tokenizeNumericCSS(cssValue);
	const leaves = [];
	const components = [];
	const reactiveByMarker = /* @__PURE__ */ new Map();
	const typedByMarker = /* @__PURE__ */ new Map();
	for (const slot of reactiveSlots) reactiveByMarker.set(slot.marker, slot);
	for (const slot of typedSlots) typedByMarker.set(slot.marker, slot);
	const zeroPx = () => createTypedUnitValue(win, "px", 0);
	const oneNumber = () => createTypedUnitValue(win, "number", 1);
	let index = 0;
	const current = () => tokens[index];
	const consume = () => {
		const token = tokens[index];
		if (!token) throw new SyntaxError("Unexpected end of transform expression");
		index++;
		return token;
	};
	const consumeSymbol = (symbol) => {
		const token = consume();
		if (token.kind !== "symbol" || token.value !== symbol) throw new SyntaxError(`Expected "${symbol}"`);
	};
	const parseArgument = () => {
		const start = index;
		let depth = 0;
		while (index < tokens.length) {
			const token = tokens[index];
			if (token.kind === "symbol" && token.value === "(") {
				depth++;
				index++;
				continue;
			}
			if (token.kind === "symbol" && token.value === ")") {
				if (depth === 0) break;
				depth--;
				index++;
				continue;
			}
			if (token.kind === "symbol" && token.value === "," && depth === 0) break;
			index++;
		}
		const slice = tokens.slice(start, index);
		if (slice.length === 0) throw new SyntaxError("Empty transform function argument");
		const tree = new NumericTypedOMParser(slice, win, reactiveByMarker, typedByMarker).parse();
		leaves.push(...tree.leaves);
		return tree.root;
	};
	const parseArgumentList = () => {
		const args = [];
		consumeSymbol("(");
		if (!(current()?.kind === "symbol" && current()?.value === ")")) {
			args.push(parseArgument());
			while (current()?.kind === "symbol" && current()?.value === ",") {
				consume();
				args.push(parseArgument());
			}
		}
		consumeSymbol(")");
		return args;
	};
	const createComponent = (name, args) => {
		const ctor = (className) => {
			const Ctor = getWindowConstructor(win, className);
			if (typeof Ctor !== "function") throw new TypeError(`${className} is not supported`);
			return Ctor;
		};
		switch (name) {
			case "translate": {
				const Translate = ctor("CSSTranslate");
				if (args.length === 1) return new Translate(args[0], zeroPx());
				if (args.length === 2) return new Translate(args[0], args[1]);
				if (args.length === 3) return new Translate(args[0], args[1], args[2]);
				throw new SyntaxError("translate() expects 1..3 args");
			}
			case "translatex": return new (ctor("CSSTranslate"))(args[0], zeroPx());
			case "translatey": return new (ctor("CSSTranslate"))(zeroPx(), args[0]);
			case "translatez": return new (ctor("CSSTranslate"))(zeroPx(), zeroPx(), args[0]);
			case "translate3d":
				if (args.length !== 3) throw new SyntaxError("translate3d() expects 3 args");
				return new (ctor("CSSTranslate"))(args[0], args[1], args[2]);
			case "scale": {
				const Scale = ctor("CSSScale");
				if (args.length === 1) return new Scale(args[0], args[0]);
				if (args.length === 2) return new Scale(args[0], args[1]);
				if (args.length === 3) return new Scale(args[0], args[1], args[2]);
				throw new SyntaxError("scale() expects 1..3 args");
			}
			case "scalex": return new (ctor("CSSScale"))(args[0], oneNumber());
			case "scaley": return new (ctor("CSSScale"))(oneNumber(), args[0]);
			case "scalez": return new (ctor("CSSScale"))(oneNumber(), oneNumber(), args[0]);
			case "scale3d":
				if (args.length !== 3) throw new SyntaxError("scale3d() expects 3 args");
				return new (ctor("CSSScale"))(args[0], args[1], args[2]);
			case "rotate": {
				const Rotate = ctor("CSSRotate");
				if (args.length === 1) return new Rotate(args[0]);
				if (args.length === 4) return new Rotate(args[0], args[1], args[2], args[3]);
				throw new SyntaxError("rotate() expects 1 or 4 args");
			}
			case "rotatex": return new (ctor("CSSRotate"))(oneNumber(), createTypedUnitValue(win, "number", 0), createTypedUnitValue(win, "number", 0), args[0]);
			case "rotatey": return new (ctor("CSSRotate"))(createTypedUnitValue(win, "number", 0), oneNumber(), createTypedUnitValue(win, "number", 0), args[0]);
			case "rotatez": return new (ctor("CSSRotate"))(createTypedUnitValue(win, "number", 0), createTypedUnitValue(win, "number", 0), oneNumber(), args[0]);
			case "rotate3d":
				if (args.length !== 4) throw new SyntaxError("rotate3d() expects 4 args");
				return new (ctor("CSSRotate"))(args[0], args[1], args[2], args[3]);
			case "skew": {
				const Skew = ctor("CSSSkew");
				if (args.length === 1) return new Skew(args[0], createTypedUnitValue(win, "deg", 0));
				if (args.length === 2) return new Skew(args[0], args[1]);
				throw new SyntaxError("skew() expects 1..2 args");
			}
			case "skewx": return new (ctor("CSSSkewX"))(args[0]);
			case "skewy": return new (ctor("CSSSkewY"))(args[0]);
			case "perspective": return new (ctor("CSSPerspective"))(args[0]);
			default: throw new SyntaxError(`Unsupported transform function "${name}"`);
		}
	};
	while (index < tokens.length) {
		const token = consume();
		if (token.kind !== "identifier") throw new SyntaxError("Expected a transform function name");
		const args = parseArgumentList();
		components.push(createComponent(token.value, args));
	}
	if (components.length === 0) throw new SyntaxError("Empty transform list");
	const CSSTransformValueCtor = getWindowConstructor(win, "CSSTransformValue");
	if (typeof CSSTransformValueCtor !== "function") throw new TypeError("CSSTransformValue is not supported");
	return {
		root: new CSSTransformValueCtor(components),
		leaves
	};
};
var buildTypedOMStyleValue = (property, cssValue, win, reactiveSlots, typedSlots) => {
	if (isTransformStyleProperty(property)) return buildTransformTypedOMTree(cssValue, win, reactiveSlots, typedSlots);
	return buildNumericTypedOMTree(cssValue, win, reactiveSlots, typedSlots);
};
var addMutableLeaves = (target, leaves) => {
	for (const leaf of leaves) {
		const current = target.get(leaf.slot.marker);
		if (current) current.push(leaf);
		else target.set(leaf.slot.marker, [leaf]);
	}
};
/**
* Attach declaration identity onto parser leaves so reactive updates can
* re-set attributeStyleMap after mutating CSSUnitValue.value.
*
* WHY: Chromium keeps the live CSSUnitValue identity, but does not refresh
* the style map / serialization until styleMap.set() is called again.
*/
var attachLeafTargets = (leaves, property, root) => {
	return leaves.map((leaf) => ({
		slot: leaf.slot,
		value: leaf.value,
		property,
		root
	}));
};
/**
* Applies a parsed S-template.
*
* Typed OM objects and their mathematical trees are created once.
* Reactive updates mutate existing CSSUnitValue leaves only.
*/
var applyStyleTemplate = (element, cssText, typedSlots, reactiveSlots, variables, animatableSlots) => {
	const probe = element.ownerDocument.createElement("span");
	probe.style.cssText = cssText;
	applyNormalizedInlineStyle(element, "");
	const target = element;
	const styleMap = target.attributeStyleMap ?? target.styleMap;
	const win = element.ownerDocument.defaultView ?? globalThis;
	const CSSStyleValueCtor = win?.CSSStyleValue ?? globalThis.CSSStyleValue;
	const mutableLeaves = /* @__PURE__ */ new Map();
	const requiredCSSVariables = /* @__PURE__ */ new Set();
	const subscriptions = [];
	/**
	* Привязка animatable-слотов.
	*
	* Выбор режима:
	* - слот занимает всю декларацию целиком (`opacity:${anim}`) ->
	*   mode:"property" — браузер анимирует само свойство. Дешевле,
	*   и работает даже без CSS.registerProperty.
	* - слот внутри выражения (`translateX(${anim}px)`, calc, clamp) ->
	*   mode:"custom-property" — анимируем зарегистрированное число,
	*   а декларация "подтягивает" его через var()/calc().
	*/
	const propertyModeOwned = /* @__PURE__ */ new Set();
	for (const slot of animatableSlots) {
		let plan = null;
		for (let i = 0; i < probe.style.length; i++) {
			const property = probe.style.item(i);
			const parsedValue = probe.style.getPropertyValue(property);
			if (isDirectSlotValue(parsedValue, slot.marker)) {
				plan = {
					mode: "property",
					target: property
				};
				element.style.setProperty(property, serializeAnimatableCssValue(slot.value.value));
				propertyModeOwned.add(property);
				break;
			}
			if (isDirectSlotUnitProduct(parsedValue, slot.marker, slot.multipliedByUnit)) {
				plan = {
					mode: "property",
					target: property,
					unit: slot.multipliedByUnit
				};
				element.style.setProperty(property, serializeAnimatableCssValue(slot.value.value, slot.multipliedByUnit));
				propertyModeOwned.add(property);
				break;
			}
		}
		if (!plan) {
			const initialNumber = Number(slot.value.value) || 0;
			ensureRegisteredNumberProperty(win, slot.marker, initialNumber);
			element.style.setProperty(slot.marker, String(initialNumber));
			plan = {
				mode: "custom-property",
				target: slot.marker
			};
		}
		subscriptions.push(slot.value.attach(element, plan));
	}
	for (let index = 0; index < probe.style.length; index++) {
		const property = probe.style.item(index);
		if (propertyModeOwned.has(property)) continue;
		const parsedValue = probe.style.getPropertyValue(property);
		const priority = probe.style.getPropertyPriority(property);
		const usedTypedSlots = typedSlots.filter((slot) => containsMarker(parsedValue, slot.marker));
		const usedReactiveSlots = reactiveSlots.filter((slot) => containsMarker(parsedValue, slot.marker));
		if (usedTypedSlots.length === 0 && usedReactiveSlots.length === 0) {
			element.style.setProperty(property, parsedValue, priority);
			continue;
		}
		const canUseTypedOM = styleMap?.set && !priority && !property.startsWith("--");
		let appliedThroughTypedOM = false;
		if (canUseTypedOM && usedReactiveSlots.length > 0) try {
			const directSlot = usedReactiveSlots.length === 1 && usedTypedSlots.length === 0 ? usedReactiveSlots[0] : null;
			if (directSlot && isDirectSlotUnitProduct(parsedValue, directSlot.marker, directSlot.multipliedByUnit)) {
				const linkedValue = createTypedUnitValue(win, directSlot.multipliedByUnit, readReactiveNumber(directSlot));
				styleMap.set(property, linkedValue);
				addMutableLeaves(mutableLeaves, attachLeafTargets([{
					slot: directSlot,
					value: linkedValue
				}], property, linkedValue));
				appliedThroughTypedOM = true;
			} else if (directSlot && isDirectSlotValue(parsedValue, directSlot.marker)) {
				const linkedValue = createTypedUnitValue(win, "number", readReactiveNumber(directSlot));
				styleMap.set(property, linkedValue);
				addMutableLeaves(mutableLeaves, attachLeafTargets([{
					slot: directSlot,
					value: linkedValue
				}], property, linkedValue));
				appliedThroughTypedOM = true;
			} else {
				const tree = buildTypedOMStyleValue(property, parsedValue, win, usedReactiveSlots, usedTypedSlots);
				styleMap.set(property, tree.root);
				addMutableLeaves(mutableLeaves, attachLeafTargets(tree.leaves, property, tree.root));
				appliedThroughTypedOM = true;
			}
		} catch {}
		if (appliedThroughTypedOM) continue;
		if (canUseTypedOM && usedReactiveSlots.length === 0 && usedTypedSlots.length > 0) try {
			const directSlot = usedTypedSlots.length === 1 ? usedTypedSlots[0] : null;
			if (directSlot && isDirectSlotValue(parsedValue, directSlot.marker)) {
				styleMap.set(property, directSlot.value);
				appliedThroughTypedOM = true;
			} else if (directSlot && isDirectSlotUnitProduct(parsedValue, directSlot.marker, directSlot.multipliedByUnit)) {
				const CSSMathProductCtor = getWindowConstructor(win, "CSSMathProduct");
				if (typeof CSSMathProductCtor !== "function") throw new TypeError("CSSMathProduct is not supported");
				const product = new CSSMathProductCtor(directSlot.value, createTypedUnitValue(win, directSlot.multipliedByUnit, 1));
				styleMap.set(property, product);
				appliedThroughTypedOM = true;
			} else {
				try {
					const tree = buildTypedOMStyleValue(property, parsedValue, win, [], usedTypedSlots);
					styleMap.set(property, tree.root);
				} catch {
					setParsedTypedValue(styleMap, CSSStyleValueCtor, property, replaceTypedMarkers(parsedValue, usedTypedSlots));
				}
				appliedThroughTypedOM = true;
			}
		} catch {}
		if (appliedThroughTypedOM) continue;
		const reconstructed = replaceTypedMarkers(parsedValue, usedTypedSlots);
		element.style.setProperty(property, reconstructed, priority);
		for (const slot of usedReactiveSlots) requiredCSSVariables.add(slot.marker);
	}
	for (const slot of reactiveSlots) {
		const leaves = mutableLeaves.get(slot.marker) ?? [];
		const needsCSSVariable = requiredCSSVariables.has(slot.marker);
		if (leaves.length === 0 && !needsCSSVariable) continue;
		const subscription = bindWith(element, slot.marker, slot.value, function(...args) {
			if (leaves.length > 0) try {
				const nextValue = readReactiveNumber(slot);
				const dirtyRoots = /* @__PURE__ */ new Map();
				for (const leaf of leaves) {
					leaf.value.value = nextValue;
					dirtyRoots.set(leaf.property, leaf.root);
				}
				if (styleMap?.set) for (const [propertyName, root] of dirtyRoots) styleMap.set(propertyName, root);
			} catch {}
			if (needsCSSVariable) handleStyleChange.apply(this, args);
		});
		subscriptions.push(subscription);
	}
	for (const name of requiredCSSVariables) {
		if (reactiveSlots.some((slot) => slot.marker === name)) continue;
		const value = variables.get(name);
		if (value == null) continue;
		subscriptions.push(bindWith(element, name, value, handleStyleChange));
	}
	pruneEmptyStyleAttribute(element);
	return () => {
		for (const subscription of subscriptions) subscription?.();
	};
};
/**
* Compiles the static CSS text from the StyleBinding.
* @param forReturn - The StyleBinding to compile.
* @returns The static CSS text.
*/
var complileStaticCSSText = (forReturn) => {
	const [apply, properties, variables] = forReturn;
	const element = document.createElement("div");
	apply(element);
	return element.style.cssText;
};
var S = (strings, ...values) => {
	const templateId = styleTemplateId++;
	const properties = [];
	const variables = /* @__PURE__ */ new Map();
	const typedSlots = [];
	const reactiveSlots = [];
	const parts = [];
	const animatableSlots = [];
	const consumed = new Array(strings.length).fill(0);
	for (let index = 0; index < strings.length; index++) {
		parts.push(strings[index].slice(consumed[index]));
		if (index >= values.length) continue;
		const value = values[index];
		const attachedUnit = readAttachedCSSUnit(strings[index + 1] ?? "");
		if (isNativeCSSStyleValue(value)) {
			const marker = `--fest-typed-${templateId}-${typedSlots.length}`;
			typedSlots.push({
				marker,
				value,
				multipliedByUnit: attachedUnit?.normalized
			});
			if (attachedUnit) {
				parts.push(`calc(var(${marker}) * 1${attachedUnit.authored})`);
				consumed[index + 1] += attachedUnit.length;
			} else parts.push(`var(${marker})`);
			continue;
		}
		if (isAnimatableValue(value)) {
			const marker = `--fest-anim-${templateId}-${animatableSlots.length}`;
			if (attachedUnit) {
				parts.push(`calc(var(${marker}) * 1${attachedUnit.authored})`);
				consumed[index + 1] += attachedUnit.length;
			} else parts.push(`var(${marker})`);
			properties.push(`@property ${marker} { syntax: "<number>"; initial-value: ${Number(value.value) || 0}; inherits: false; };`);
			animatableSlots.push({
				marker,
				value,
				multipliedByUnit: attachedUnit?.normalized
			});
			continue;
		}
		if (isReactiveStyleValue(value)) {
			const marker = `--fest-ref-${templateId}-${reactiveSlots.length}`;
			reactiveSlots.push({
				marker,
				value,
				multipliedByUnit: attachedUnit?.normalized
			});
			if (attachedUnit) {
				parts.push(`calc(var(${marker}) * 1${attachedUnit.authored})`);
				consumed[index + 1] += attachedUnit.length;
			} else parts.push(`var(${marker})`);
			const initialValue = getReactiveInitialNumber(value);
			properties.push(`@property ${marker} { syntax: "<number>"; initial-value: ${initialValue}; inherits: true; };`);
			variables.set(marker, value);
			continue;
		}
		if (typeof value !== "object" && typeof value !== "function" && value != null && String(value).trim() !== "") parts.push(String(value));
	}
	const forReturn = [
		(element) => {
			return applyStyleTemplate(element, parts.join(""), typedSlots, reactiveSlots, variables, animatableSlots);
		},
		properties,
		variables
	];
	forReturn[Symbol.toStringTag] = () => complileStaticCSSText(forReturn);
	forReturn[Symbol.toPrimitive] = (type) => {
		if (type === "string") return complileStaticCSSText(forReturn);
		return forReturn[0];
	};
	forReturn.toString = () => complileStaticCSSText(forReturn);
	forReturn.valueOf = () => complileStaticCSSText(forReturn);
	Object.defineProperty(forReturn, "cssText", {
		get: () => complileStaticCSSText(forReturn),
		set: (value) => {
			console.log("set cssText", value);
			const [apply, properties, variables] = forReturn;
			const element = document.createElement("div");
			apply(element);
			element.style.cssText = value;
		},
		configurable: true,
		enumerable: true
	});
	return forReturn;
};
var css = (strings, ...values) => {
	return S(strings, ...values);
};
var splitInlineStylePlaceholders = (source, attributes) => {
	const strings = [];
	const values = [];
	const pattern = /#\{(\d+)\}/g;
	let cursor = 0;
	let match;
	while ((match = pattern.exec(source)) != null) {
		const attributeIndex = Number.parseInt(match[1], 10);
		if (!Number.isSafeInteger(attributeIndex) || attributeIndex < 0) continue;
		strings.push(source.slice(cursor, match.index));
		values.push(attributes[attributeIndex]);
		cursor = match.index + match[0].length;
	}
	if (values.length === 0) return null;
	strings.push(source.slice(cursor));
	return {
		strings,
		values
	};
};
var joinStaticInlineStyle = (strings, values) => {
	let result = strings[0] ?? "";
	for (let index = 0; index < values.length; index++) {
		const value = values[index];
		if (value != null) result += String(value);
		result += strings[index + 1] ?? "";
	}
	return result;
};
/**
* Converts an H style attribute containing internal #{n}
* placeholders into static CSS, a direct legacy binding, or S.
*/
var compileInlineStyleAttribute = (source, attributes) => {
	const parsed = splitInlineStylePlaceholders(source, attributes);
	if (!parsed) return null;
	const { strings, values } = parsed;
	if (values.length === 1 && (strings[0] ?? "").trim() === "" && (strings[1] ?? "").trim() === "" && !isStaticStyleInterpolation(values[0]) && !isNativeCSSStyleValue(values[0])) {
		if (isStyleBinding(values[0])) return {
			kind: "template",
			binding: values[0]
		};
		return {
			kind: "direct",
			value: values[0]
		};
	}
	if (values.some((value) => isReactiveStyleValue(value) || isNativeCSSStyleValue(value))) return {
		kind: "template",
		binding: S(strings, ...values)
	};
	if (values.every(isStaticStyleInterpolation)) return {
		kind: "static",
		cssText: joinStaticInlineStyle(strings, values)
	};
	return {
		kind: "template",
		binding: S(strings, ...values)
	};
};
/**
* Applies an S tuple or a standalone S applicator.
*/
var bindStyle = (element, styled) => {
	const apply = Array.isArray(styled) ? styled[0] : styled;
	if (typeof apply !== "function") return () => {};
	const result = apply(element);
	return () => {
		if (typeof result === "function") {
			result();
			return;
		}
		result?.unbind?.();
	};
};
var ensureRegisteredNumberProperty = (win, name, initialValue) => {
	if (registeredProperties.has(name)) return;
	registeredProperties.add(name);
	try {
		(win?.CSS ?? CSS)?.registerProperty?.({
			name,
			syntax: "<number>",
			initialValue: String(initialValue),
			inherits: false
		});
	} catch {}
};
//#endregion
//#region ../../modules/projects/style.ts/src/Animate.ts
var parsePropertyList = (options, extra) => {
	if (extra instanceof Map && extra.size > 0) return Array.from(extra.values());
	const fromKeyframes = options.keyframes?.properties;
	if (fromKeyframes instanceof Map && fromKeyframes.size > 0) return Array.from(fromKeyframes.values());
	const fromString = [];
	if (typeof options.properties == "string") {
		const props = options.properties?.trim?.()?.split?.(";");
		fromString.push(...Array.from(props || [])?.map?.(($pair) => {
			if ($pair?.includes?.(":")) {
				const value = ($pair?.split?.(":") ?? [])?.slice?.(1, -1)?.join?.(":");
				return {
					property: ($pair?.[0])?.trim?.(),
					values: [value?.trim?.()]
				};
			}
			return null;
		})?.filter?.((a) => a != null) || []);
		return fromString;
	}
	if (Array.isArray(options.properties)) return options.properties.map((item, i) => {
		if (item && Array.isArray(item.values) && item.property) return item;
		const entries = Object.entries(item || {}).filter(([k]) => k !== "offset" && k !== "easing");
		const value = entries[0]?.[1];
		return {
			property: entries[0]?.[0] ?? `p${i}`,
			values: value == null ? [] : Array.isArray(value) ? value : [value]
		};
	});
	if (options.properties && typeof options.properties === "object") return Object.entries(options.properties).map(([property, values]) => ({
		property,
		values: Array.isArray(values) ? values : [values]
	}));
	return fromString;
};
/**
* Parse A template literal into animation keyframes.
* 
* Syntax examples:
* - `A`opacity:${[0, 0.5, 1]};`
* - `A`transform:${[translateX(0), translateX(100px)]};`
* - `A`background:${[CSS.rgb(255,0,0), CSS.rgb(0,0,255)]};`
*/
var parseAnimationTemplate = (strings, values) => {
	const properties = /* @__PURE__ */ new Map();
	let fullText = "";
	for (let i = 0; i < strings.length; i++) {
		fullText += strings[i];
		if (i < values.length) fullText += `__SLOT_${i}__`;
	}
	const declarations = fullText.split(";").map((s) => s.trim()).filter(Boolean);
	for (const declaration of declarations) {
		const colonIndex = declaration.indexOf(":");
		if (colonIndex === -1) continue;
		const property = declaration.slice(0, colonIndex).trim();
		const valueText = declaration.slice(colonIndex + 1).trim();
		const slotMatch = /__SLOT_(\d+)__/.exec(valueText);
		if (!slotMatch) continue;
		const slotValue = values[parseInt(slotMatch[1], 10)];
		if (!Array.isArray(slotValue)) throw new TypeError(`A\`${property}\` expects an array of values, got ${typeof slotValue}`);
		properties.set(property, {
			property,
			values: slotValue
		});
	}
	return { properties };
};
/**
* Process reactive values in animation keyframes.
* Returns both static values and reactive bindings.
*/
var processAnimationValues = (values) => {
	const resolved = [];
	const reactiveIndices = [];
	let hasReactive = false;
	for (let i = 0; i < values.length; i++) {
		const value = values[i];
		if (isReactiveStyleValue(value)) {
			hasReactive = true;
			reactiveIndices.push(i);
			resolved.push(value.value);
		} else if (isNativeCSSStyleValue(value)) resolved.push(value);
		else resolved.push(value);
	}
	return {
		resolved,
		hasReactive,
		reactiveIndices
	};
};
/**
* Build Web Animations API keyframes from parsed template.
*/
var buildWebAnimationKeyframes = (options, extra) => {
	const globalOffsets = options?.offsets;
	const propertyList = parsePropertyList(options, extra);
	if (propertyList.length === 0) throw new Error("No animatable properties found in A template");
	const maxLength = Math.max(...propertyList.map((p) => p.values.length));
	const offsets = (globalOffsets?.length > 1 ? globalOffsets : null) || Array.from({ length: maxLength }, (_, i) => i / (maxLength - 1));
	const frames = [];
	for (let i = 0; i < maxLength; i++) {
		const frame = { offset: offsets[i] ?? i / (maxLength - 1) };
		for (const prop of propertyList) {
			const { resolved } = processAnimationValues(prop.values);
			const kebabProp = camelToKebab(prop.property);
			let value = resolved[Math.min(i, resolved.length - 1)];
			if (isNativeCSSStyleValue(value)) value = String(value);
			frame[kebabProp] = value;
		}
		frames.push(frame);
	}
	return frames;
};
/**
* Build timing configuration for Web Animations API.
*/
var buildAnimationTiming = (options) => {
	const duration = parseTime(options.duration ?? 300);
	const delay = parseTime(options.delay ?? 0);
	const iterations = normalizeIterationCount(options.iterationCount);
	return {
		duration,
		delay,
		composite: options.composite || "replace",
		iterations: iterations === "Infinity" ? Infinity : iterations,
		fill: options.fillMode ?? "none",
		direction: options.direction ?? "normal",
		easing: typeof options.easing === "string" ? options.easing : "linear",
		timeline: options.timeline
	};
};
/**
* Create reactive animation that updates when source values change.
*/
var createReactiveAnimation = (element, options) => {
	const propertyList = parsePropertyList(options);
	const subscriptions = [];
	const frames = buildWebAnimationKeyframes(options);
	const timing = buildAnimationTiming(options);
	const animation = element.animate(frames, timing);
	for (const prop of propertyList) {
		const { hasReactive, reactiveIndices } = processAnimationValues(prop.values);
		if (!hasReactive) continue;
		for (const index of reactiveIndices) {
			const reactiveValue = prop.values[index];
			const subscription = bindWith(element, `--anim-${prop.property}-${index}`, reactiveValue, () => {
				const newFrames = buildWebAnimationKeyframes(options);
				const currentTime = animation.currentTime;
				animation.effect = new KeyframeEffect(element, newFrames, timing);
				if (currentTime !== null) animation.currentTime = currentTime;
			});
			subscriptions.push(subscription);
		}
	}
	const cleanup = () => {
		animation.cancel();
		subscriptions.forEach((sub) => sub());
	};
	return {
		animation,
		cleanup
	};
};
/**
* A`` template literal for defining animations.
* 
* @example
* ```ts
* const opacity = { value: 0 };
* 
* A`opacity:${[0, opacity, 1]};`
* A`transform:${[
*   CSS.translateX(CSS.px(0)),
*   CSS.translateX(CSS.px(100))
* ]};`
* ```
*/
var A = (strings, ...values) => {
	return parseAnimationTemplate(strings, values);
};
/**
* Animate an element with the provided keyframes and options.
* 
* @example
* ```ts
* const animation = doAnimation(element, {
*   keyframes: A`opacity:${[0, 0.5, 1]};`,
*   duration: 1000,
*   iterationCount: -1,
*   fillMode: "forwards"
* });
* 
* // Later: animation.pause(), animation.play(), animation.cleanup()
* ```
*/
var doAnimation = (element, config, keyframes) => {
	const canAnimate = element != null && typeof element.animate === "function";
	if (!(typeof Element !== "undefined" && element instanceof Element) && !canAnimate) throw new TypeError("doAnimation requires an Element");
	if (parsePropertyList(config, keyframes).some((prop) => {
		const { hasReactive } = processAnimationValues(prop.values);
		return hasReactive;
	})) return createReactiveAnimation(element, config);
	const frames = buildWebAnimationKeyframes(config, keyframes);
	const timing = buildAnimationTiming(config);
	const animation = element.animate(frames, timing);
	const cleanup = () => {
		animation.cancel();
	};
	return {
		animation,
		cleanup
	};
};
/**
* Simplified animation helper with inline configuration.
* 
* @example
* ```ts
* animate(element, {
*   opacity: [0, 1],
*   transform: ["translateX(0)", "translateX(100px)"]
* }, {
*   duration: 500,
*   fillMode: "forwards"
* });
* ```
*/
var animate = (element, options) => {
	const properties = /* @__PURE__ */ new Map();
	const record = options.properties;
	if (record == null || typeof record === "string" || Array.isArray(record)) return doAnimation(element, options);
	for (const [property, values] of Object.entries(record)) {
		if (!Array.isArray(values)) throw new TypeError(`animate() expects arrays of values, got ${typeof values} for ${property}`);
		properties.set(property, {
			property,
			values
		});
	}
	return doAnimation(element, { ...options }, properties);
};
/**
* Create a reusable animation definition.
* 
* @example
* ```ts
* const fadeIn = defineAnimation(
*   A`opacity:${[0, 1]};`,
*   { duration: 300, fillMode: "forwards" }
* );
* 
* fadeIn(element1);
* fadeIn(element2);
* ```
*/
var defineAnimation = (options) => {
	return (element) => {
		return doAnimation(element, options);
	};
};
/**
* Sequence multiple animations.
* 
* @example
* ```ts
* sequenceAnimations(element, [
*   { keyframes: A`opacity:${[0, 1]};`, duration: 300 },
*   { keyframes: A`transform:${[...values]};`, duration: 500 }
* ]);
* ```
*/
var sequenceAnimations = async (element, sequence) => {
	for (const config of sequence) {
		const { animation } = doAnimation(element, config);
		await animation.finished;
	}
};
/**
* Run multiple animations in parallel.
* 
* @example
* ```ts
* parallelAnimations(element, [
*   { keyframes: A`opacity:${[0, 1]};`, duration: 300 },
*   { keyframes: A`transform:${[...values]};`, duration: 300 }
* ]);
* ```
*/
var parallelAnimations = (element, animations) => {
	const results = animations.map((config) => doAnimation(element, config));
	const cleanup = () => {
		results.forEach((r) => r.cleanup());
	};
	return {
		animations: results.map((r) => r.animation),
		cleanup
	};
};
/**
* Stagger animations across multiple elements.
* 
* @example
* ```ts
* staggerAnimation(
*   elements,
*   A`opacity:${[0, 1]};`,
*   { duration: 300, fillMode: "forwards" },
*   100 // 100ms delay between each
* );
* ```
*/
var staggerAnimation = (elements, options, staggerDelay = 100) => {
	return elements.map((element, index) => {
		const delay = parseTime(options?.delay ?? 0) + index * staggerDelay;
		return doAnimation(element, {
			...options,
			delay
		});
	});
};
//#endregion
//#region ../../modules/projects/style.ts/src/css-animation.ts
var isReactiveTrigger = (t) => t != null && typeof t === "object" && !isScrollDriven(t) && !isViewDriven(t) && "value" in t;
var asPropertyList = (options) => {
	const kf = options.keyframes?.properties;
	if (kf instanceof Map) return Array.from(kf.values());
	const props = options.properties;
	if (typeof props === "string") throw new TypeError("string properties are not used on the CSS compile path");
	if (Array.isArray(props)) return props.map((item, i) => {
		if (item && Array.isArray(item.values) && item.property) return item;
		const entries = Object.entries(item || {}).filter(([k]) => k !== "offset" && k !== "easing");
		return {
			property: entries[0]?.[0] ?? `p${i}`,
			values: entries[0] ? [entries[0][1]] : []
		};
	});
	if (props && typeof props === "object") return Object.entries(props).map(([property, values]) => ({
		property,
		values: Array.isArray(values) ? values : [values]
	}));
	throw new TypeError("No animatable properties");
};
var serializeValue = (value) => {
	if (value == null) return "";
	const isElement = typeof Element !== "undefined" && value instanceof Element;
	if (typeof value === "object" && "value" in value && !isElement) return String(value.value ?? "");
	return String(value);
};
var compileKeyframesCss = (options) => {
	const list = asPropertyList(options);
	const maxLength = Math.max(2, ...list.map((p) => p.values.length));
	const offsets = options.offsets ?? Array.from({ length: maxLength }, (_, i) => i / (maxLength - 1));
	const frames = [];
	for (let i = 0; i < maxLength; i++) {
		const decls = [];
		for (const prop of list) {
			const raw = prop.values[Math.min(i, prop.values.length - 1)];
			decls.push(`${camelToKebab(prop.property)}: ${serializeValue(raw)}`);
		}
		const pct = Math.round((offsets[i] ?? i / (maxLength - 1)) * 100);
		frames.push(`${pct}% { ${decls.join("; ")}; }`);
	}
	const fingerprint = frames.join("|");
	let hash = 0;
	for (let i = 0; i < fingerprint.length; i++) hash = hash * 31 + fingerprint.charCodeAt(i) | 0;
	const name = `fest-anim-${(hash >>> 0).toString(36)}`;
	return {
		name,
		cssText: `@keyframes ${name} {\n${frames.join("\n")}\n}`,
		fingerprint
	};
};
var compileTriggerCss = (selector, options) => {
	const trigger = options.trigger ?? "mount";
	if (isReactiveTrigger(trigger)) throw new TypeError("reactive { value } trigger is not valid on the CSS path");
	const compiled = compileKeyframesCss(options);
	const duration = `${parseTime(options.duration, 300)}ms`;
	const delay = `${parseTime(options.delay, 0)}ms`;
	const iterations = normalizeIterationCount(options.iterationCount);
	const properties = {
		"animation-name": compiled.name,
		"animation-duration": duration,
		"animation-delay": delay,
		"animation-iteration-count": iterations === "Infinity" || iterations === Infinity ? "infinite" : String(iterations),
		"animation-direction": options.direction ?? "normal",
		"animation-fill-mode": options.fillMode ?? "none",
		"animation-timing-function": typeof options.easing === "string" ? options.easing : "linear"
	};
	if (trigger === "hover") {
		if (options.reverseOnExit) properties["animation-trigger"] = `${ANIM_TRIGGER_NAME} play-backwards`;
		return {
			selector: `${selector}:hover`,
			properties
		};
	}
	if (trigger === "focus") return {
		selector: `${selector}:focus`,
		properties
	};
	if (trigger === "show") return {
		selector: `${selector}:not([data-hidden])`,
		properties
	};
	if (trigger === "hide") return {
		selector: `${selector}[data-hidden]`,
		properties
	};
	if (trigger === "remove") return {
		selector: `${selector}[data-removing]`,
		properties
	};
	if (trigger === "manual") {
		properties["animation-play-state"] = "paused";
		return {
			selector,
			properties
		};
	}
	if (trigger === "click") {
		properties["event-trigger"] = `${ANIM_TRIGGER_NAME} click`;
		properties["animation-trigger"] = `${ANIM_TRIGGER_NAME} play`;
		return {
			selector,
			properties
		};
	}
	if (trigger === "visible") {
		properties["timeline-trigger"] = `${ANIM_TRIGGER_NAME} view contain`;
		properties["animation-trigger"] = `${ANIM_TRIGGER_NAME} play`;
		return {
			selector,
			properties
		};
	}
	if (isScrollDriven(trigger) || isViewDriven(trigger)) {
		properties["timeline-trigger"] = `${ANIM_TRIGGER_NAME} ${isViewDriven(trigger) ? "view" : "scroll"}`;
		if (trigger.rangeStart) properties["animation-range-start"] = trigger.rangeStart;
		if (trigger.rangeEnd) properties["animation-range-end"] = trigger.rangeEnd;
		return {
			selector,
			properties
		};
	}
	return {
		selector,
		properties
	};
};
var resolveCssAnimationTarget = (target, options) => {
	if (typeof Element !== "undefined" && target instanceof Element) throw new TypeError("bindCssAnimation does not accept Element");
	if (typeof CSSStyleDeclaration !== "undefined" && target instanceof CSSStyleDeclaration) {
		const rule = target.parentRule;
		if (!rule) throw new TypeError("CSSStyleDeclaration has no parentRule");
		return resolveCssAnimationTarget(rule, options);
	}
	if (typeof CSSStyleRule !== "undefined" && target instanceof CSSStyleRule) {
		const sheet = target.parentStyleSheet;
		if (!sheet) throw new TypeError("CSSStyleRule has no parentStyleSheet");
		return {
			sheet,
			rule: target,
			selector: target.selectorText
		};
	}
	if (typeof CSSStyleSheet !== "undefined" && target instanceof CSSStyleSheet) {
		const selector = options.selector;
		if (!selector) throw new TypeError("CSSStyleSheet bind requires options.selector");
		return {
			sheet: target,
			rule: null,
			selector
		};
	}
	throw new TypeError("bindCssAnimation target must be a CSSStyleRule, CSSStyleSheet, or CSSStyleDeclaration");
};
var declarationsToText = (properties) => Object.entries(properties).map(([k, v]) => `${k}: ${v};`).join(" ");
/**
* Write `@keyframes` + companion rule into a stylesheet. Never calls `element.animate()`.
* WHY: duck-type `insertRule`+`cssRules`+`selector` before `instanceof` so Node tests work.
*/
var bindCssAnimation = (target, options) => {
	const compiled = compileKeyframesCss(options);
	let sheet;
	let selector;
	if (target && typeof target.insertRule === "function" && target.cssRules && options.selector) {
		sheet = target;
		selector = options.selector;
	} else {
		const resolved = resolveCssAnimationTarget(target, options);
		sheet = resolved.sheet;
		selector = resolved.selector;
	}
	const trigger = compileTriggerCss(selector, options);
	const layer = getOrCreateLayerRule(sheet, "ux-anim") ?? sheet;
	const host = layer.insertRule ? layer : sheet;
	let entry = animKeyframeRefs.get(compiled.fingerprint);
	if (!entry) {
		host.insertRule(compiled.cssText, host.cssRules?.length ?? 0);
		const keyframesRule = host.cssRules?.[host.cssRules.length - 1];
		entry = {
			name: compiled.name,
			count: 0,
			keyframesRule,
			hosts: /* @__PURE__ */ new Set(),
			hostCounts: /* @__PURE__ */ new Map()
		};
		animKeyframeRefs.set(compiled.fingerprint, entry);
	} else if (!entry.hosts.has(host)) {
		host.insertRule(compiled.cssText, host.cssRules?.length ?? 0);
		if (!entry.keyframesRule) entry.keyframesRule = host.cssRules?.[host.cssRules.length - 1];
	}
	entry.hostCounts ??= /* @__PURE__ */ new Map();
	entry.count += 1;
	entry.hosts.add(host);
	entry.hostCounts.set(host, (entry.hostCounts.get(host) ?? 0) + 1);
	const companionText = `${trigger.selector} { ${declarationsToText(trigger.properties)} }`;
	const companionIndex = host.insertRule(companionText, host.cssRules?.length ?? 0);
	const companionRule = host.cssRules?.[companionIndex];
	const deleteKeyframesFrom = (sheetHost) => {
		try {
			const rules = Array.from(sheetHost.cssRules || []);
			let idx = rules.indexOf(entry.keyframesRule);
			if (idx < 0) idx = rules.findIndex((r) => String(r?.cssText || "").includes(`@keyframes ${entry.name}`));
			if (idx >= 0) sheetHost.deleteRule(idx);
		} catch {}
	};
	let dead = false;
	return () => {
		if (dead) return;
		dead = true;
		try {
			const idx = Array.from(host.cssRules || []).indexOf(companionRule);
			if (idx >= 0) host.deleteRule(idx);
		} catch {}
		entry.count -= 1;
		const nextHostCount = (entry.hostCounts?.get(host) ?? 1) - 1;
		if (nextHostCount <= 0) {
			entry.hostCounts?.delete(host);
			entry.hosts.delete(host);
			deleteKeyframesFrom(host);
		} else entry.hostCounts?.set(host, nextHostCount);
		if (entry.count <= 0) {
			for (const leftover of entry.hosts) deleteKeyframesFrom(leftover);
			animKeyframeRefs.delete(compiled.fingerprint);
		}
	};
};
//#endregion
//#region ../../modules/projects/dom.ts/src/mixin/Observer.ts
var onBorderObserveSymbol = Symbol.for("dom.ts@onBorderObserve");
globalThis[onBorderObserveSymbol] ??= /* @__PURE__ */ new WeakMap();
var onContentObserveSymbol = Symbol.for("dom.ts@onContentObserve");
var onContentObserve = globalThis[onContentObserveSymbol] ??= /* @__PURE__ */ new WeakMap();
var unwrapFromQuery = (element) => {
	if (typeof element?.current == "object") element = element?.element ?? element?.current ?? (typeof element?.self == "object" ? element?.self : null) ?? element;
	return element;
};
/** INVARIANT: `querySelectorAll` / `matches` reject "" — normalize before DOM APIs. */
var normalizeSelector = (selector, fallback = "*") => {
	if (typeof selector !== "string") return fallback;
	return selector.trim() || fallback;
};
var safeQuerySelectorAll = (el, selector) => {
	if (!el || typeof el.querySelectorAll !== "function") return [];
	const sel = normalizeSelector(selector, "");
	if (!sel) return [];
	try {
		return Array.from(el.querySelectorAll(sel) || []);
	} catch {
		return [];
	}
};
var safeMatches = (el, selector) => {
	if (!el || typeof el.matches !== "function") return false;
	const sel = normalizeSelector(selector, "");
	if (!sel) return false;
	try {
		return !!el.matches(sel);
	} catch {
		return false;
	}
};
var observeContentBox = (element, cb) => {
	if (!onContentObserve.has(element = unwrapFromQuery(element))) {
		const callbacks = [];
		const observer = new ResizeObserver((entries) => {
			for (const entry of entries) if (entry.contentBoxSize) {
				const contentBoxSize = entry.contentBoxSize[0];
				if (contentBoxSize) callbacks.forEach((cb) => cb?.(contentBoxSize, observer));
			}
		});
		cb?.({
			inlineSize: element.clientWidth,
			blockSize: element.clientHeight
		}, observer);
		onContentObserve.set(element, callbacks);
		if ((element?.element ?? element) instanceof Node) observer.observe(element?.element ?? element, { box: "content-box" });
	}
	onContentObserve.get(element)?.push?.(cb);
	return { disconnect: () => onContentObserve.get(element)?.splice?.(onContentObserve.get(element)?.indexOf(cb) || -1, 1) };
};
var observeAttribute = (element, attribute, cb) => {
	if (typeof element?.selector == "string") return observeAttributeBySelector(element, element?.selector, attribute, cb);
	const attributeList = new Set((attribute.split(",") || [attribute]).map((s) => s.trim()));
	const observer = new MutationObserver((mutationList, observer) => {
		for (const mutation of mutationList) if (mutation.attributeName && attributeList.has(mutation.attributeName)) cb(mutation, observer);
	});
	if ((element?.element ?? element) instanceof Node) observer.observe(element = unwrapFromQuery(element), {
		attributes: true,
		attributeOldValue: true,
		attributeFilter: [...attributeList]
	});
	attributeList.forEach((attribute) => cb({
		target: element,
		type: "attributes",
		attributeName: attribute,
		oldValue: element?.getAttribute?.(attribute)
	}, observer));
	return observer;
};
var observeAttributeBySelector = (element, selector, attribute, cb) => {
	const sel = normalizeSelector(selector);
	const attributeList = new Set([...attribute.split(",") || [attribute]].map((s) => s.trim()));
	const observer = new MutationObserver((mutationList, observer) => {
		for (const mutation of mutationList) if (mutation.type == "childList") {
			const addedNodes = Array.from(mutation.addedNodes) || [];
			const removedNodes = Array.from(mutation.removedNodes) || [];
			addedNodes.push(...Array.from(mutation.addedNodes || []).flatMap((el) => safeQuerySelectorAll(el, sel)));
			removedNodes.push(...Array.from(mutation.removedNodes || []).flatMap((el) => safeQuerySelectorAll(el, sel)));
			[...new Set(addedNodes)].filter((el) => safeMatches(el, sel))?.map?.((target) => {
				attributeList.forEach((attribute) => {
					cb({
						target,
						type: "attributes",
						attributeName: attribute,
						oldValue: target?.getAttribute?.(attribute)
					}, observer);
				});
			});
		} else if (safeMatches(mutation.target, sel) && mutation.attributeName && attributeList.has(mutation.attributeName)) cb(mutation, observer);
	});
	observer.observe(element = unwrapFromQuery(element), {
		attributeOldValue: true,
		attributes: true,
		attributeFilter: [...attributeList],
		childList: true,
		subtree: true,
		characterData: true
	});
	safeQuerySelectorAll(element, sel).map((target) => attributeList.forEach((attribute) => cb({
		target,
		type: "attributes",
		attributeName: attribute,
		oldValue: target?.getAttribute?.(attribute)
	}, observer)));
	return observer;
};
var observeBySelector = (element, selector = "*", cb = (mut, obs) => {}) => {
	const sel = normalizeSelector(selector);
	const unwrapNodesBySelector = (nodes) => {
		const $nodes = Array.from(nodes || []) || [];
		$nodes.push(...Array.from(nodes || []).flatMap((el) => safeQuerySelectorAll(el, sel)));
		return [...Array.from(new Set($nodes).values())].filter((el) => safeMatches(el, sel));
	};
	let obRef = null;
	const handleMutation = (mutation) => {
		const observer = obRef?.deref?.();
		const addedNodes = unwrapNodesBySelector(mutation.addedNodes);
		const removedNodes = unwrapNodesBySelector(mutation.removedNodes);
		if (addedNodes.length > 0 || removedNodes.length > 0) cb?.({
			type: mutation.type,
			target: mutation.target,
			attributeName: mutation.attributeName,
			attributeNamespace: mutation.attributeNamespace,
			nextSibling: mutation.nextSibling,
			oldValue: mutation.oldValue,
			previousSibling: mutation.previousSibling,
			addedNodes,
			removedNodes
		}, observer);
	};
	const handleCome = (ev) => {
		handleMutation({
			addedNodes: [ev?.target].filter((el) => !!el),
			removedNodes: [ev?.relatedTarget].filter((el) => !!el),
			type: "childList",
			target: ev?.currentTarget
		});
	};
	const handleOutCome = (ev) => {
		handleMutation({
			addedNodes: [ev?.relatedTarget].filter((el) => !!el),
			removedNodes: [ev?.target].filter((el) => !!el),
			type: "childList",
			target: ev?.currentTarget
		});
	};
	const handleFocusClick = (ev) => {
		handleMutation({
			addedNodes: [ev?.target].filter((el) => !!el),
			removedNodes: [ev?.relatedTarget || document?.activeElement].filter((el) => !!el),
			type: "childList",
			target: ev?.currentTarget
		});
	};
	const factors = {
		passive: true,
		capture: false
	};
	if (sel?.includes?.(":hover") && sel?.includes?.(":active")) {
		element.addEventListener("pointerover", handleCome, factors);
		element.addEventListener("pointerout", handleOutCome, factors);
		element.addEventListener("pointerdown", handleCome, factors);
		element.addEventListener("pointerup", handleOutCome, factors);
		element.addEventListener("pointercancel", handleOutCome, factors);
		return { disconnect: () => {
			element.removeEventListener("pointerover", handleCome, factors);
			element.removeEventListener("pointerout", handleOutCome, factors);
			element.removeEventListener("pointerdown", handleCome, factors);
			element.removeEventListener("pointerup", handleOutCome, factors);
			element.removeEventListener("pointercancel", handleOutCome, factors);
		} };
	}
	if (sel?.includes?.(":hover")) {
		element.addEventListener("pointerover", handleCome, factors);
		element.addEventListener("pointerout", handleOutCome, factors);
		return { disconnect: () => {
			element.removeEventListener("pointerover", handleCome, factors);
			element.removeEventListener("pointerout", handleOutCome, factors);
		} };
	}
	if (sel?.includes?.(":active")) {
		element.addEventListener("pointerdown", handleCome, factors);
		element.addEventListener("pointerup", handleOutCome, factors);
		element.addEventListener("pointercancel", handleOutCome, factors);
		return { disconnect: () => {
			element.removeEventListener("pointerdown", handleCome, factors);
			element.removeEventListener("pointerup", handleOutCome, factors);
			element.removeEventListener("pointercancel", handleOutCome, factors);
		} };
	}
	if (sel?.includes?.(":focus") && sel?.includes?.(":focus-within") && sel?.includes?.(":focus-visible")) {
		element.addEventListener("focusin", handleCome, factors);
		element.addEventListener("focusout", handleOutCome, factors);
		element.addEventListener("click", handleFocusClick, factors);
		return { disconnect: () => {
			element.removeEventListener("focusin", handleCome, factors);
			element.removeEventListener("focusout", handleOutCome, factors);
			element.removeEventListener("click", handleFocusClick, factors);
		} };
	}
	const observer = new MutationObserver((mutationList, observer) => {
		for (const mutation of mutationList) if (mutation.type == "childList") handleMutation(mutation);
	});
	obRef = new WeakRef(observer);
	if ((element?.element ?? element) instanceof Node) observer.observe(element = unwrapFromQuery(element), {
		childList: true,
		subtree: true
	});
	const selected = safeQuerySelectorAll(element, sel);
	if (selected.length > 0) cb?.({
		addedNodes: selected,
		removedNodes: []
	}, observer);
	return observer;
};
//#endregion
//#region ../../modules/projects/style.ts/src/lifecycle.ts
if (typeof globalThis.CustomEvent !== "function") {
	class PolyfillCustomEvent {
		type;
		detail;
		bubbles;
		cancelable;
		defaultPrevented = false;
		constructor(type, init) {
			this.type = type;
			this.detail = init?.detail;
			this.bubbles = !!init?.bubbles;
			this.cancelable = !!init?.cancelable;
		}
		preventDefault() {
			if (this.cancelable) this.defaultPrevented = true;
		}
	}
	globalThis.CustomEvent = PolyfillCustomEvent;
}
var hasPayload = (options) => !!options && (options.properties != null || options.keyframes != null);
var reduced = (el) => el?.hasAttribute?.("data-instant") || typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
var dispatchLifecycleEvent = (el, type) => el?.dispatchEvent?.(new CustomEvent(type, {
	detail: {},
	bubbles: true,
	cancelable: true
})) !== false;
var waitElementAnimations = async (el) => {
	if (reduced(el)) return;
	await new Promise((resolve) => {
		(globalThis.requestAnimationFrame ?? ((cb) => setTimeout(() => cb(0), 0)))(() => resolve());
	});
	const list = typeof el?.getAnimations === "function" ? el.getAnimations() : [];
	await Promise.all(list.filter((a) => a.playState === "running" || a.playState === "pending").map((a) => a.finished?.catch?.(() => {}) ?? Promise.resolve()));
};
var isRecordProperties = (properties) => !!properties && typeof properties === "object" && !Array.isArray(properties);
var flights = /* @__PURE__ */ new WeakMap();
var startPlayer = (el, options) => {
	try {
		return (isRecordProperties(options.properties) ? animate(el, options) : doAnimation(el, options))?.animation ?? null;
	} catch (err) {
		const msg = err instanceof Error ? err.message : String(err);
		if (!(err instanceof TypeError && /Element/i.test(msg)) || typeof el.animate !== "function") throw err;
		return el.animate(buildWebAnimationKeyframes(options), buildAnimationTiming(options));
	}
};
var play = async (el, options, kind, before, after) => {
	if (typeof Element !== "undefined" && !(el instanceof Element) && typeof el?.animate !== "function") throw new TypeError("appear/disappear require an Element");
	if (!dispatchLifecycleEvent(el, before)) return false;
	const prior = flights.get(el);
	if (prior && prior.kind !== kind) prior.cancel();
	let cancelled = false;
	let settle;
	const aborted = new Promise((resolve) => {
		settle = resolve;
	});
	let player = null;
	const flight = {
		kind,
		cancel() {
			if (cancelled) return;
			cancelled = true;
			try {
				player?.cancel?.();
			} catch {}
			settle();
		}
	};
	flights.set(el, flight);
	try {
		if (hasPayload(options) && !reduced(el) && typeof el.animate === "function") {
			player = startPlayer(el, options);
			if (player?.finished) await Promise.race([Promise.resolve(player.finished).catch(() => {}), aborted]);
		}
		if (cancelled) return false;
		await Promise.race([waitElementAnimations(el), aborted]);
		if (cancelled) return false;
		dispatchLifecycleEvent(el, after);
		return true;
	} finally {
		if (flights.get(el) === flight) flights.delete(el);
	}
};
var appear = (el, options) => play(el, options, "show", "u2-before-show", "u2-appear");
var disappear = (el, options) => play(el, options, "hide", "u2-before-hide", "u2-hidden");
var decorShow = {
	properties: {
		"--opacity": [
			0,
			0,
			1
		],
		"--scale": [
			.8,
			.8,
			1
		],
		display: [
			"none",
			"none",
			"revert-layer"
		],
		pointerEvents: [
			"none",
			"none",
			"revert-layer"
		]
	},
	duration: 80,
	easing: "linear"
};
var decorHide = {
	properties: {
		"--opacity": [
			1,
			0,
			0
		],
		"--scale": [
			1,
			.8,
			.8
		],
		display: [
			"revert-layer",
			"revert-layer",
			"none"
		],
		pointerEvents: [
			"none",
			"none",
			"none"
		]
	},
	duration: 120,
	easing: "linear"
};
var initVisibility = async (ROOT = typeof document !== "undefined" ? document.body : null, animations) => {
	if (!ROOT) return;
	observeAttributeBySelector(ROOT, "*", "data-hidden", (mutation) => {
		if (mutation.attributeName !== "data-hidden") return;
		const target = mutation.target;
		if (target.getAttribute("data-hidden") === mutation.oldValue) return;
		const hidden = target.getAttribute("data-hidden") != null;
		const opts = hidden ? animations?.disappear : animations?.appear;
		Promise.resolve(hidden ? disappear(target, opts) : appear(target, opts)).catch(console.warn);
	});
};
//#endregion
export { unbakeScreenColors as $, OWNER as $n, hash as $t, AnimatableValue as A, urlCanParse as An, styleFlushPending as Ar, setStylePropertyFallback as At, bakeAlsoQueriesFor as B, BAKE_SCREEN_MEDIA as Bn, veelaCascadeOrder as Bt, parallelAnimations as C, promiseOrDirect as Cn, cacheContentMap as Cr, registerStyleTreeHook as Ct, bindStyle as D, readSheetRuleCount as Dn, registeredProperties as Dr, setStyleInRule as Dt, S as E, readAttachedCSSUnit as En, rebakeBatch as Er, setProperty as Et, addAdoptedSheetToElement as F, BAKE_LAYER as Fn, cssLayerOrder as Ft, collectBakeAlsoHosts as G, CSS_TYPOGRAPHY_PROPERTIES as Gn, createTypedUnitValue as Gt, bakeScreenColors as H, CSS_DIMENSION_UNITS as Hn, applyNormalizedInlineStyle as Ht, ensureHostStyles as I, BAKE_SCREEN_ALSO as In, getOrCreateLayerRule as It, getBakedStyle as J, DEFAULT_CACHE_MS as Jn, cssUnitConstructorName as Jt, collectBakeScreenHosts as K, CSS_UNIT_FACTORY_ALIASES as Kn, cssEmptyLayerRule as Kt, loadCachedStyles as L, BAKE_SCREEN_ALSO_EXPLORER as Ln, makeHostLayerOrder as Lt, isAnimatableValue as M, ANIM_LAYER as Mn, styleTreeObserved as Mr, UX_PRELOAD_HOST_CSS as Mt, onScroll as N, ANIM_TRIGGER_NAME as Nn, styleTreeRoots as Nr, cssImportWithLayer as Nt, compileInlineStyleAttribute as O, stripCssPreamble as On, styleCache as Or, setStyleRule as Ot, onView as P, BAKE_CATEGORIES as Pn, cssLayerBlock as Pt, unbakeComputedStyle as Q, LAYER_OPEN as Qn, getWindowConstructor as Qt, rehydrateAdoptedStyleSheets as R, BAKE_SCREEN_ALSO_SETTINGS as Rn, normalizeCssForLayer as Rt, doAnimation as S, parseTime as Sn, cacheBlobContentMap as Sr, preloadStyle as St, staggerAnimation as T, queryFirstDeep as Tn, layerCounter as Tr, removeAdopted as Tt, bakeThemeFingerprint as U, CSS_DIMENSION_UNITS_LIST as Un, containsMarker as Ut, bakeComputedStyle as V, CSS_COLOR_PROPERTIES as Vn, wrapCssLayer as Vt, buildBakedCssText as W, CSS_MOTION_PROPERTIES as Wn, createStyleId as Wt, rebakeComputedStyle as X, HOST_CSS_FALLBACK as Xn, escapeCSSIdentifier as Xt, invalidateBakedStyles as Y, DEFAULT_CATEGORIES as Yn, cssUnitFactoryName as Yt, scheduleBakeScreenColors as Z, LAYER_NAME as Zn, escapeRegExp as Zt, A as _, isViewDriven as _n, bakedCache as _r, loadBlobStyle as _t, dispatchLifecycleEvent as a, isEffectivelyEmptyStyleText as an, VIEWER_RUNTIME_LAYERS as ar, getStyleRule as at, buildWebAnimationKeyframes as b, parseLength as bn, bakedStyles as br, notifyStyleTreeHosts as bt, observeAttribute as c, isNativeCSSStyleValue as cn, adoptedBlobMap as cr, cssTextForAdoptedSheet as ct, observeContentBox as d, isShadowRoot as dn, adoptedMap as dr, getPadding as dt, isAdoptedSheetEmpty as en, STYLE_THEME_ATTRS as er, ensureStyleScopeSelector as et, bindCssAnimation as f, isStaticStyleInterpolation as fn, adoptedSelectorMap as fr, getPropertyValue as ft, resolveCssAnimationTarget as g, isUnitValue as gn, animKeyframeRefs as gr, loadAsAdopted as gt, isReactiveTrigger as h, isStyleValue as hn, adoptedStyleSheetsCache as hr, getTransformOrigin as ht, disappear as i, isDocument as in, VIEWER_CSS_LAYER_ORDER as ir, getStyleLayer as it, animatable as j, ANIMATABLE_BRAND as jn, styleTreeHooks as jr, setStylePropertyTyped as jt, css as k, supportsConstructableStylesheet as kn, styleElementCache as kr, setStyleProperty as kt, observeAttributeBySelector as l, isReactiveStyleValue as ln, adoptedFilled as lr, ensureAdoptedSheetContent as lt, compileTriggerCss as m, isStyleHost as mn, adoptedShadowSelectorMap as mr, getTransform as mt, decorHide as n, isCssElement as nn, UX_HOST_LAYERS as nr, fetchAsInline as nt, initVisibility as o, isElementVisible as on, hasTypedOM as or, setStyleRules as ot, compileKeyframesCss as p, isStyleBinding as pn, adoptedShadowLayerMap as pr, getPxValue as pt, collectBakedDeclarations as q, CSS_UNIT_TOKEN_RE as qn, cssTextRequiresInlineStyleElement as qt, decorShow as r, isCssLayerName as rn, VEELA_CASCADE_LAYERS as rr, getAdoptedStyleRule as rt, waitElementAnimations as s, isLayerBlockRule as sn, adoptedAppliedText as sr, setStyleURL as st, appear as t, isColorToken as tn, STYLE_THEME_OBSERVE_ATTRS as tr, fetchAndCache as tt, observeBySelector as u, isScrollDriven as un, adoptedLayerMap as ur, getElementZoom as ut, animate as v, normalizeIterationCount as vn, bakedFollowers as vr, loadInlineStyle as vt, sequenceAnimations as w, pruneEmptyStyleAttribute as wn, cacheMap as wr, rehydrateConstructableSheets as wt, defineAnimation as x, parseOrigin as xn, blobURLMap as xr, observeStyleTree as xt, buildAnimationTiming as y, normalizeIterations as yn, bakedLive as yr, loadStyleSheet as yt, scheduleEnsureHostStyles as z, BAKE_SCREEN_CHROME as zn, unwrapCssLayer as zt };
