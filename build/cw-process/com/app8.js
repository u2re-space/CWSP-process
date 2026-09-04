const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../vendor/highlight.js.js","../chunks/rolldown-runtime.js"])))=>i.map(i=>d[i]);
import { t as __vitePreload } from "../assets/index-C9QTqpCS.js";
import { r as normalizeFenceLanguage, t as CODE_LANGUAGE_ATTR } from "../vendor/dompurify.js";
//#region ../../modules/projects/fl.ui/src/ui/markdown/code-overlay.ts
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
		return typeof CSS !== "undefined" && CSS.supports?.("anchor-name: --x") === true;
	} catch {
		return false;
	}
};
var makeAnchorName = () => `--hl${Math.random().toString(36).slice(2, 10).replace(/[0-9]/g, "x")}`;
/** Leaf overlay: CSS anchors when available, otherwise absolute fill. No lure barrel. */
var placeCodeOverlay = (host, overlay) => {
	overlay.style.pointerEvents = "none";
	overlay.style.userSelect = "none";
	overlay.style.position = "absolute";
	overlay.style.inset = "0";
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
	}
	host.after(overlay);
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
	const lineHeight = style.lineHeight;
	if (source.style.lineHeight !== lineHeight) source.style.lineHeight = lineHeight;
	target.style.setProperty("line-height", lineHeight);
	(source.parentElement ?? source).style.setProperty("--code-line-height", lineHeight);
	target.style.setProperty("font-synthesis", "none");
	target.style.setProperty("font-kerning", "none");
	target.style.setProperty("font-variant-ligatures", "none");
	target.style.setProperty("font-feature-settings", "\"liga\" 0, \"clig\" 0, \"calt\" 0, \"dlig\" 0");
	target.style.setProperty("-webkit-text-fill-color", "currentColor");
	if (box) {
		target.style.boxSizing = style.boxSizing;
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
	const updateMetrics = () => {
		copyCodeMetrics(host, overlay, true);
		if (paint !== overlay) copyCodeMetrics(host, paint, false);
	};
	updateMetrics();
	document.fonts?.ready?.then(() => {
		if (host.isConnected) updateMetrics();
	});
	const resize = typeof ResizeObserver === "function" ? new ResizeObserver(() => updateMetrics()) : null;
	resize?.observe(host);
	if (host.parentElement) resize?.observe(host.parentElement);
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
//#region ../../modules/projects/fl.ui/src/ui/markdown/highlight.ts
/**
* highlight.js paint layer for fenced code, textarea, and contenteditable hosts.
*
* FIND:code-highlight
* TAG:code-highlight,safe-markdown-render
* WHY: Source stays plain text (selectable). Overlay is highlight.js HTML + optional
* line gutter, positioned with lure anchors. Language comes from `data-language`
* (markdown fence) or `language-*`.
* AI-READ: Import overlay via `./code-overlay` (same folder). A `../../../../lur.e`
* specifier 500s under Vite `preserveSymlinks` when this file is loaded as
* `fest/fl-ui/ui/markdown/highlight.ts`.
*/
var attached = /* @__PURE__ */ new WeakMap();
var hljsPromise = null;
var loadHljs = () => {
	if (hljsPromise) return hljsPromise;
	hljsPromise = __vitePreload(() => import("../vendor/highlight.js.js").then((mod) => mod.default ?? mod), __vite__mapDeps([0,1]), import.meta.url).catch((error) => {
		console.warn("[code-highlight] highlight.js failed to load", error);
		return null;
	});
	return hljsPromise;
};
var resolveCodeLanguage = (el) => {
	const direct = el.getAttribute("data-language") || el.getAttribute("data-lang") || "";
	if (direct) return normalizeFenceLanguage(direct);
	const fromClass = String(el.className || "").match(/(?:^|\s)language-([\w.+#-]+)/);
	if (fromClass?.[1]) return fromClass[1];
	const pre = el.closest("pre");
	return normalizeFenceLanguage(pre?.getAttribute("data-language") || pre?.getAttribute("data-lang"));
};
var stampCodeLanguage = (el, language) => {
	if (!language) return;
	el.setAttribute(CODE_LANGUAGE_ATTR, language);
	el.classList.add(`language-${language}`);
	const pre = el.closest("pre");
	if (pre && !pre.getAttribute("data-language")) pre.setAttribute(CODE_LANGUAGE_ATTR, language);
};
var readHostText = (host) => {
	if (host instanceof HTMLTextAreaElement) return host.value;
	return host.textContent ?? "";
};
var countLines = (text) => {
	if (!text) return 1;
	const parts = text.split("\n");
	return parts.at(-1) === "" ? Math.max(1, parts.length - 1) : parts.length;
};
var escapeHtml = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var highlightText = async (text, language) => {
	const hljs = await loadHljs();
	if (!hljs) return {
		html: escapeHtml(text),
		language
	};
	if (language && hljs.getLanguage(language)) return {
		html: hljs.highlight(text, {
			language,
			ignoreIllegals: true
		}).value,
		language
	};
	const auto = hljs.highlightAuto(text);
	return {
		html: auto.value,
		language: auto.language || language || ""
	};
};
var buildOverlay = (lineCount, showGutter) => {
	const overlay = document.createElement("div");
	overlay.className = "code-highlight-overlay";
	let gutter = null;
	if (showGutter) {
		gutter = document.createElement("div");
		gutter.className = "code-highlight-overlay__gutter";
		gutter.textContent = Array.from({ length: lineCount }, (_, index) => String(index + 1)).join("\n");
		overlay.append(gutter);
	}
	const paint = document.createElement("div");
	paint.className = "code-highlight-overlay__paint";
	overlay.append(paint);
	return {
		overlay,
		paint,
		gutter
	};
};
/**
* Attach a highlight.js overlay to one code host.
* Works for `pre > code`, `textarea`, and `contenteditable`.
*/
var attachCodeHighlight = (host, options = {}) => {
	attached.get(host)?.disconnect();
	stampCodeLanguage(host, normalizeFenceLanguage(options.language || resolveCodeLanguage(host)));
	const lineCount = countLines(readHostText(host));
	const showGutter = options.lineNumbers !== false && lineCount > 1;
	const digits = String(lineCount).length;
	(host?.parentElement?.style ?? host.style)?.setProperty("--code-gutter", showGutter ? `calc(${digits} * 1ch + 0.75rem)` : "0px");
	host?.classList?.add("code-highlight-source");
	const { overlay, paint, gutter } = buildOverlay(lineCount, showGutter);
	const handle = attachCodeOverlay(host, overlay, {
		paint,
		scroller: host instanceof HTMLTextAreaElement ? host : host.closest("pre")
	});
	const updatePaint = async () => {
		const next = readHostText(host);
		const nextLanguage = normalizeFenceLanguage(options.language || resolveCodeLanguage(host));
		const nextLines = countLines(next);
		const nextGutter = options.lineNumbers !== false && nextLines > 1;
		(host?.parentElement?.style ?? host.style)?.setProperty("--code-gutter", nextGutter ? `calc(${String(nextLines).length} * 1ch + 0.75rem)` : "0px");
		if (gutter) {
			gutter.textContent = Array.from({ length: nextLines }, (_, index) => String(index + 1)).join("\n");
			gutter.hidden = !nextGutter;
		}
		const painted = await highlightText(next, nextLanguage);
		if (painted.language && painted.language !== nextLanguage) stampCodeLanguage(host, painted.language);
		paint.innerHTML = painted.html;
		if (next && (paint.textContent?.length ?? 0) < Math.max(1, Math.floor(next.length * .5))) paint.textContent = next;
		host.classList.toggle("code-highlight-painted", (paint.textContent?.length ?? 0) > 0);
		handle.updateMetrics();
		handle.syncScroll();
	};
	const onInput = () => {
		updatePaint();
	};
	host.addEventListener("input", onInput);
	const wrapped = {
		...handle,
		updatePaint,
		disconnect: () => {
			host.removeEventListener("input", onInput);
			host.classList.remove("code-highlight-painted");
			handle.disconnect();
			attached.delete(host);
		}
	};
	attached.set(host, wrapped);
	updatePaint();
	return wrapped;
};
/** Walk a rendered markdown/result tree and overlay every fenced `pre > code`. */
var highlightCodeTree = (root) => {
	if (!root || typeof document === "undefined") return;
	const codes = root.querySelectorAll("pre > code");
	for (const code of codes) {
		if (!(code instanceof HTMLElement)) continue;
		if (code.closest(".code-highlight-overlay")) continue;
		if (code.nextElementSibling?.classList.contains("code-highlight-overlay")) continue;
		attached.get(code)?.disconnect();
		attachCodeHighlight(code);
	}
};
//#endregion
export { highlightCodeTree as t };
