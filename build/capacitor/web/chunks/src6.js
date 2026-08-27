import { An as loadAsAdopted, Cn as observe, H as setAppWallpaperFromBlob, Hn as __vitePreload, In as getCorrectOrientation, Ln as orientationNumberMap, Mn as preloadStyle, Ot as handleIncomingEntries, Pn as ensureVirtualKeyboardOverlay, Rn as updateVP, Sn as numberRef, Ut as pointerAnchorRef, Vn as isInFocus, cn as H, fn as registerModal, hn as M, it as resolveFsBackend, kn as DOMMixin, ln as vector2Ref, n as installLauncherBackStack, nn as elementPointerMap, nt as openUnifiedContextMenu, pn as navigate, rt as listVirtualRootEntriesFromRouter, t as home_host_apply_default, wn as propRef, yn as affected, z as getWallpaperStoragePointer, zn as MOCElement } from "../com/app.js";
import { a as HomeChannelAction } from "../views/viewer.js";
import { $ as setItemSpan, B as parseSpeedDialItemFromSmartText, C as getItemSpan, Ct as normalizeSpan, D as isExternalWebHref, E as gridLayoutState, F as normalizeItemIconBitmapScale, G as persistSpeedDialItems, H as parseSpeedDialItemFromVirtualPath, I as normalizeOpenLinkTarget, J as refreshSpeedDialMirror, K as persistSpeedDialMeta, L as openInDetachedBrowserWindow, M as markSpeedDialUserEditBeforeHydrate, N as mirrorSpeedDialItems, O as isMirrorMode, P as normalizeExternalWebHref, Q as resolveSpeedDialItemHref, R as openInNewBrowserTab, S as getDefaultTileShape, St as normalizeOrient, T as getSpeedDialMirrorPath, Tt as visualLayout, U as parseSpeedDialViewFromHref, V as parseSpeedDialItemFromURL, W as persistSpeedDialIconBlob, X as resolveItemOpenLinkTarget, Y as removeSpeedDialItem, Z as resolveSpeedDialIconUrl, _ as defaultOpenLinkTargetForHref, _t as syncShapelessIconShadow, a as addSpeedDialItem, at as upsertSpeedDialItem, b as findNextFreeCellInSnapshot, bt as logicalToVisualSpan, c as applySpeedDialSnapshot, ct as ICON_DISPLAY_OPTIONS, d as captureSpeedDialSnapshot, dt as defaultIconScaleForDisplay, et as setSpeedDialMirrorPath, f as cloneSpeedDialItemPacked, ft as inferIconDisplay, g as createWidgetSpeedDialItem, gt as syncPlateGlyphInk, h as createSpeedDialItemFromClipboard, ht as normalizeTileShape, i as addClonedSpeedDialItem, it as tileIconFetchSize, j as looksLikeSpeedDialShortcutJson, k as isSpeedDialVirtualPath, l as buildSpeedDialViewPathHref, lt as TILE_SHAPE_OPTIONS, m as createEmptySpeedDialItem, mt as normalizeIconDisplay, n as NAVIGATION_SHORTCUTS, nt as speedDialMeta, o as applyIconScaleToPaintedNodes, ot as wallpaperState, p as copySpeedDialItemToClipboard, pt as isTileShapeValue, q as persistWallpaper, r as SPEED_DIAL_MUTATION_EVENT, rt as stripCoreRailTilesFromGrid, s as applyItemIconScaleToElement, st as wasSpeedDialUserEdited, t as ICON_BITMAP_SCALE_OPTIONS, tt as speedDialItems, u as canUseNativeOpenUri, ut as createTileUiIconElement, v as emitSpeedDialMutation, vt as findNearestFreeRect, w as getSpeedDialMeta, wt as pointToLogicalCell, x as findSpeedDialItem, xt as markOccupiedSpan, y as ensureSpeedDialMeta, yt as logicalToVisualCell, z as parseSpeedDialItemFromJSON } from "./launcher-state.js";
//#region ../../modules/views/home-view/src/ts/pointer-interaction.ts
var DRAG_THRESHOLD_PX = 6;
var SETTLE_DURATION_MS = 240;
var SETTLE_EASING = "cubic-bezier(0.22, 0.8, 0.3, 1)";
var DROP_GHOST_CLASS = "sd-drop-ghost";
var centerOf = (rect) => [(rect.left + rect.right) / 2, (rect.top + rect.bottom) / 2];
var translate = (x, y) => `translate3d(${x}px, ${y}px, 0)`;
var getGridContentPoint = (grid, clientPoint) => {
	const rect = grid.getBoundingClientRect();
	const styles = getComputedStyle(grid);
	const paddingLeft = parseFloat(styles.paddingLeft) || 0;
	const paddingRight = parseFloat(styles.paddingRight) || 0;
	const paddingTop = parseFloat(styles.paddingTop) || 0;
	const paddingBottom = parseFloat(styles.paddingBottom) || 0;
	const width = Math.max(1, rect.width - paddingLeft - paddingRight);
	const height = Math.max(1, rect.height - paddingTop - paddingBottom);
	return {
		point: [clientPoint[0] - rect.left - paddingLeft, clientPoint[1] - rect.top - paddingTop],
		size: [width, height]
	};
};
var setInteractionState = (nodes, state, coordinate) => {
	for (const node of nodes) {
		node.dataset.interactionState = state;
		node.dataset.gridCoordinateState = coordinate;
	}
};
var resetTransforms = (nodes) => {
	for (const node of nodes) {
		node.style.removeProperty("transform");
		node.style.setProperty("--drag-x", "0px");
		node.style.setProperty("--drag-y", "0px");
		node.removeAttribute("data-dragging");
	}
};
var clearDragOffsets = (nodes) => {
	for (const node of nodes) {
		node.style.setProperty("--drag-x", "0px");
		node.style.setProperty("--drag-y", "0px");
	}
};
var animateNodeToCell = async (node, fromRect, toRect) => {
	const [fromX, fromY] = centerOf(fromRect);
	const [toX, toY] = centerOf(toRect);
	const offsetX = fromX - toX;
	const offsetY = fromY - toY;
	const reducedMotion = globalThis.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
	node.style.transition = "none";
	node.style.transform = translate(offsetX, offsetY);
	if (reducedMotion || typeof node.animate !== "function" || Math.abs(offsetX) < .5 && Math.abs(offsetY) < .5) {
		node.style.removeProperty("transform");
		node.style.removeProperty("transition");
		return;
	}
	const animation = node.animate([{ transform: translate(offsetX, offsetY) }, { transform: translate(0, 0) }], {
		duration: SETTLE_DURATION_MS,
		easing: SETTLE_EASING,
		fill: "forwards"
	});
	try {
		await animation.finished;
	} catch {} finally {
		animation.cancel();
		node.style.removeProperty("transform");
		node.style.removeProperty("transition");
	}
};
var readCell = (cell) => [Math.floor(Number(cell?.[0]) || 0), Math.floor(Number(cell?.[1]) || 0)];
var occupiedCells = (items, exceptId, getSpan) => {
	const occupied = /* @__PURE__ */ new Set();
	for (const entry of items) {
		if (entry.id === exceptId) continue;
		markOccupiedSpan(occupied, readCell(entry.cell), normalizeSpan(getSpan?.(entry.id)));
	}
	return occupied;
};
/**
* Bind one launcher tile to a pointer-driven drag lifecycle.
* The caller owns persistence and cell rendering; this controller only owns
* pointer capture, target selection, animation, and interaction state.
*/
var bindPointerInteraction = (node, options) => {
	let pointerId = null;
	let pointerDownAt = null;
	let grabOffset = [0, 0];
	let lastPointerClient = null;
	let dragging = false;
	let suppressClickUntil = 0;
	let animationRun = 0;
	const relatedNodes = () => {
		const id = node.dataset.id;
		const extra = [];
		if (id) {
			options.root.querySelectorAll("[data-speed-dial-item][data-layer=\"labels\"]").forEach((el) => {
				if (el.dataset.id === id && !el.closest(".speed-dial-grid--turn-ghost")) extra.push(el);
			});
			options.root.querySelectorAll(".ui-ws-item-icon-under").forEach((el) => {
				if (el.dataset.id === id && !el.closest(".speed-dial-grid--turn-ghost")) extra.push(el);
			});
		}
		return [node, ...extra];
	};
	const liveCell = () => {
		return readCell(options.items.find((entry) => entry.id === options.item.id)?.cell ?? options.item.cell);
	};
	const itemSpan = () => normalizeSpan(options.getSpan?.(options.item.id) || [1, 1]);
	const nodes = () => relatedNodes();
	const iconGrid = () => {
		const live = options.root.querySelector(".speed-dial-grid[data-grid-layer='icons']:not(.speed-dial-grid--turn-ghost)");
		const closest = node.closest(".speed-dial-grid");
		if (closest && !closest.classList.contains("speed-dial-grid--turn-ghost")) return closest;
		return live;
	};
	const getDropCell = (clientPoint) => {
		const grid = iconGrid();
		if (!grid) return liveCell();
		const { point, size } = getGridContentPoint(grid, clientPoint);
		const layout = options.getLayout();
		const orient = options.getOrient();
		const span = itemSpan();
		const tracked = [point[0] - grabOffset[0], point[1] - grabOffset[1]];
		const [spanX, spanY] = logicalToVisualSpan(span, orient);
		const [cols, rows] = visualLayout(layout, orient);
		const cellW = size[0] / Math.max(1, cols);
		const cellH = size[1] / Math.max(1, rows);
		const originPoint = spanX > 1 || spanY > 1 ? [tracked[0] - spanX * cellW / 2, tracked[1] - spanY * cellH / 2] : tracked;
		const searchRadius = spanX > 1 || spanY > 1 ? 2 : void 0;
		return findNearestFreeRect(pointToLogicalCell(originPoint, size, layout, orient, "round"), span, occupiedCells(options.items, options.item.id, options.getSpan), layout, searchRadius);
	};
	const paintDropGhost = (cell) => {
		const grid = iconGrid();
		if (!grid) return;
		let ghost = grid.querySelector(`:scope > .${DROP_GHOST_CLASS}`);
		if (!ghost) {
			ghost = document.createElement("div");
			ghost.className = DROP_GHOST_CLASS;
			ghost.setAttribute("aria-hidden", "true");
			grid.append(ghost);
		}
		const layout = options.getLayout();
		const orient = options.getOrient();
		const [vx, vy] = logicalToVisualCell(cell, layout, orient);
		const [sx, sy] = logicalToVisualSpan(itemSpan(), orient);
		ghost.style.gridColumn = `${vx + 1} / span ${sx}`;
		ghost.style.gridRow = `${vy + 1} / span ${sy}`;
		ghost.hidden = false;
	};
	const clearDropGhost = () => {
		iconGrid()?.querySelector(`:scope > .${DROP_GHOST_CLASS}`)?.remove();
	};
	const clearPointer = () => {
		pointerId = null;
		pointerDownAt = null;
		grabOffset = [0, 0];
		lastPointerClient = null;
	};
	const onPointerDown = (event) => {
		if (pointerId !== null || event.button !== 0) return;
		pointerId = event.pointerId;
		lastPointerClient = null;
		pointerDownAt = [event.clientX, event.clientY];
		options.item.cell = liveCell();
		const center = centerOf(node.getBoundingClientRect());
		grabOffset = [event.clientX - center[0], event.clientY - center[1]];
		node.setPointerCapture?.(event.pointerId);
	};
	const onPointerMove = (event) => {
		if (pointerId !== event.pointerId || !pointerDownAt) return;
		const dx = event.clientX - pointerDownAt[0];
		const dy = event.clientY - pointerDownAt[1];
		if (!dragging && Math.hypot(dx, dy) < DRAG_THRESHOLD_PX) return;
		if (!dragging) {
			dragging = true;
			suppressClickUntil = performance.now() + SETTLE_DURATION_MS + 80;
			for (const entry of nodes()) entry.dataset.dragging = "";
			setInteractionState(nodes(), "onGrab", "source");
			node.dispatchEvent(new CustomEvent("m-dragstart", { bubbles: true }));
		}
		event.preventDefault();
		lastPointerClient = [event.clientX, event.clientY];
		const activeNodes = nodes();
		for (const entry of activeNodes) {
			entry.style.setProperty("--drag-x", `${dx}px`);
			entry.style.setProperty("--drag-y", `${dy}px`);
		}
		setInteractionState(activeNodes, "onMoving", "intermediate");
		const hoverCell = getDropCell(lastPointerClient);
		paintDropGhost(hoverCell);
		node.dispatchEvent(new CustomEvent("m-dragging", {
			bubbles: true,
			detail: {
				dx,
				dy,
				cell: [...hoverCell]
			}
		}));
	};
	const finishDrag = async (event) => {
		if (pointerId !== event.pointerId || !pointerDownAt) return;
		const wasDragging = dragging;
		dragging = false;
		node.releasePointerCapture?.(event.pointerId);
		const dropPoint = lastPointerClient ?? [event.clientX, event.clientY];
		clearPointer();
		if (!wasDragging) return;
		event.preventDefault();
		const currentNodes = nodes();
		const fromRects = new Map(currentNodes.map((entry) => [entry, entry.getBoundingClientRect()]));
		const targetCell = getDropCell(dropPoint);
		clearDropGhost();
		const run = ++animationRun;
		setInteractionState(currentNodes, "onRelax", "destination");
		options.onCommitCell(targetCell);
		clearDragOffsets(currentNodes);
		node.offsetWidth;
		const animations = currentNodes.map((entry) => animateNodeToCell(entry, fromRects.get(entry) || entry.getBoundingClientRect(), entry.getBoundingClientRect()));
		await Promise.all(animations);
		if (run !== animationRun) return;
		resetTransforms(currentNodes);
		setInteractionState(currentNodes, "onPlace", "destination");
		options.onSettled?.(targetCell);
		node.dispatchEvent(new CustomEvent("m-dragsettled", {
			bubbles: true,
			detail: {
				cell: [...targetCell],
				interactionState: "onPlace",
				coordinateState: "destination"
			}
		}));
		window.setTimeout(() => {
			if (run !== animationRun) return;
			setInteractionState(nodes(), "onHover", "source");
		}, SETTLE_DURATION_MS);
	};
	const onPointerUp = (event) => {
		finishDrag(event);
	};
	const onPointerCancel = (event) => {
		if (pointerId !== event.pointerId) return;
		animationRun += 1;
		dragging = false;
		node.releasePointerCapture?.(event.pointerId);
		resetTransforms(nodes());
		setInteractionState(nodes(), "onHover", "source");
		clearDropGhost();
		clearPointer();
	};
	const onClick = (event) => {
		if (performance.now() < suppressClickUntil) {
			event.preventDefault();
			event.stopPropagation();
		}
	};
	node.addEventListener("pointerdown", onPointerDown);
	node.addEventListener("pointermove", onPointerMove);
	node.addEventListener("pointerup", onPointerUp);
	node.addEventListener("pointercancel", onPointerCancel);
	node.addEventListener("click", onClick, true);
	return () => {
		animationRun += 1;
		node.removeEventListener("pointerdown", onPointerDown);
		node.removeEventListener("pointermove", onPointerMove);
		node.removeEventListener("pointerup", onPointerUp);
		node.removeEventListener("pointercancel", onPointerCancel);
		node.removeEventListener("click", onClick, true);
		resetTransforms(nodes());
		clearPointer();
	};
};
//#endregion
//#region ../../modules/views/home-view/src/ts/toast.ts
/**
* Lightweight toasts for home-view / SpeedDial (no CWSP-shell core).
* Shells may listen for `view:toast` on `window` and render FL-UI / status UI.
*/
function showSuccess(message) {
	globalThis.dispatchEvent?.(new CustomEvent("view:toast", { detail: {
		type: "success",
		message: String(message || "")
	} }));
}
function showError(message) {
	globalThis.dispatchEvent?.(new CustomEvent("view:toast", { detail: {
		type: "error",
		message: String(message || "")
	} }));
}
//#endregion
//#region ../../modules/views/home-view/src/navigation/app-menu/bookmarks-menu.ts
/** Local copy — avoid relative `../../explorer/fs-backend` (breaks when this file is hardlinked under home-view). */
function faviconForHref(href, size = 64) {
	const raw = String(href || "").trim();
	if (!raw || !/^https?:\/\//i.test(raw)) return "";
	try {
		const host = new URL(raw).hostname;
		if (!host) return "";
		return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=${size}`;
	} catch {
		return "";
	}
}
var registeredBookmarksApi = null;
var chromeErr = () => {
	try {
		const err = globalThis.chrome?.runtime?.lastError;
		return err ? new Error(String(err.message || err)) : null;
	} catch {
		return null;
	}
};
var callChrome = (api, method, ...args) => {
	const fn = api[method];
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
var nodeToEntry = (node) => {
	const url = typeof node.url === "string" && node.url ? node.url : void 0;
	return {
		id: String(node.id),
		title: String(node.title || node.url || node.id || "Bookmark"),
		url,
		folder: !url,
		parentId: node.parentId
	};
};
/** Build BookmarksMenuApi from `chrome.bookmarks` (CRX extension pages). */
function createChromeBookmarksMenuApi(raw) {
	const api = raw || (globalThis.chrome?.bookmarks ?? null);
	if (!api?.getTree || !api?.getChildren) return null;
	const resolveIconUrl = (href, size = 128) => {
		const page = String(href || "").trim();
		if (!/^https?:\/\//i.test(page)) return "";
		const s2 = faviconForHref(page, size);
		if (s2) return s2;
		try {
			const chromeRt = globalThis.chrome?.runtime;
			if (typeof chromeRt?.getURL === "function") {
				const u = new URL(chromeRt.getURL("/_favicon/"));
				u.searchParams.set("pageUrl", page);
				u.searchParams.set("size", String(size));
				return u.toString();
			}
		} catch {}
		return "";
	};
	return {
		resolveIconUrl,
		async listChildren(folderId) {
			if (folderId) return (await callChrome(api, "getChildren", folderId) || []).map(nodeToEntry);
			const roots = await callChrome(api, "getTree") || [];
			const out = [];
			for (const root of roots) for (const child of root.children || []) out.push(nodeToEntry(child));
			return out;
		},
		async search(query) {
			const q = String(query || "").trim();
			if (!q) return this.listChildren();
			if (typeof api.search !== "function") {
				const all = await this.listChildren();
				const lower = q.toLowerCase();
				return all.filter((e) => e.title.toLowerCase().includes(lower) || String(e.url || "").toLowerCase().includes(lower));
			}
			return (await callChrome(api, "search", q) || []).map(nodeToEntry);
		},
		async open(entry) {
			if (entry.folder) return;
			const href = String(entry.url || "").trim();
			if (!href) return;
			try {
				const tabs = globalThis.chrome?.tabs;
				if (typeof tabs?.create === "function") {
					await Promise.resolve(tabs.create({ url: href }));
					return;
				}
			} catch {}
			globalThis.open?.(href, "_blank", "noopener,noreferrer");
		}
	};
}
function resolveBookmarksMenuApi() {
	if (registeredBookmarksApi) return registeredBookmarksApi;
	return createChromeBookmarksMenuApi();
}
var DESKTOP_FAVICON_SIZE = 256;
/** Bump `_favicon` / S2 query size so desktop tiles are not upscaled from 16–32px assets. */
function bumpBookmarkIconUrlSize(raw, size = DESKTOP_FAVICON_SIZE) {
	const url = String(raw || "").trim();
	if (!url) return "";
	try {
		const parsed = new URL(url, globalThis.location?.href);
		if (parsed.searchParams.has("pageUrl")) {
			parsed.searchParams.set("size", String(size));
			return parsed.toString();
		}
		if (parsed.hostname.endsWith("google.com") && parsed.pathname.includes("favicon")) {
			parsed.searchParams.set("sz", String(size));
			return parsed.toString();
		}
	} catch {}
	return url;
}
var unwrapMetaField = (raw) => {
	if (raw && typeof raw === "object" && "value" in raw) return String(raw.value ?? "").trim();
	return String(raw ?? "").trim();
};
function isSpeedDialBookmarkItem(input) {
	const entityType = unwrapMetaField(input.entityType).toLowerCase();
	const bookmarkId = unwrapMetaField(input.bookmarkId);
	return entityType === "bookmark" || Boolean(bookmarkId);
}
/** Resolve bookmark bitmap URL for Speed Dial tiles (always prefer largest available). */
function resolveSpeedDialBookmarkIconUrl(input) {
	if (!isSpeedDialBookmarkItem(input)) return "";
	const stored = unwrapMetaField(input.iconUrl);
	const href = unwrapMetaField(input.href);
	if (href && /^https?:\/\//i.test(href)) {
		const fresh = resolveBookmarkDesktopIconUrl({
			id: "",
			title: "",
			url: href
		}, resolveBookmarksMenuApi());
		if (fresh) return fresh;
	}
	if (stored) return bumpBookmarkIconUrlSize(stored, DESKTOP_FAVICON_SIZE);
	if (href && /^https?:\/\//i.test(href)) return faviconForHref(href, DESKTOP_FAVICON_SIZE);
	return "";
}
/** Best favicon URL for Start / desktop — Google S2 first, then Chrome `_favicon`. */
function resolveBookmarkDesktopIconUrl(entry, api) {
	const href = String(entry.url || "").trim();
	if (!href) return "";
	return faviconForHref(href, DESKTOP_FAVICON_SIZE) || faviconForHref(href, 128) || faviconForHref(href, 64) || api?.resolveIconUrl?.(href, DESKTOP_FAVICON_SIZE) || api?.resolveIconUrl?.(href, 128) || "";
}
//#endregion
//#region ../../modules/views/home-view/src/ts/view-opener.ts
var VIEW_OPENER_BOOT = "__CWSP_SPEED_DIAL_VIEW_OPENER_V1__";
var OVERLAY_MOUNT_BOOT = "__CWSP_HOME_OVERLAY_MOUNT_V1__";
var bootSlot = (key) => {
	const g = globalThis;
	return {
		get: () => key in g ? g[key] : null,
		set: (v) => {
			g[key] = v;
		}
	};
};
var openerSlot = bootSlot(VIEW_OPENER_BOOT);
var overlaySlot = bootSlot(OVERLAY_MOUNT_BOOT);
/** Register how "open-view" shortcuts reach your shell (tabs, router, etc.). */
function setSpeedDialViewOpener(opener) {
	openerSlot.set(typeof opener === "function" ? opener : null);
}
function getSpeedDialViewOpener() {
	const fn = openerSlot.get();
	return typeof fn === "function" ? fn : null;
}
function setHomeOverlayMountResolver(fn) {
	overlaySlot.set(typeof fn === "function" ? fn : null);
}
//#endregion
//#region ../../modules/views/home-view/src/ts/android-icon-ref.ts
var VARIANT_ALIASES = {
	default: "default",
	full: "default",
	colored: "default",
	monochrome: "monochrome",
	mono: "monochrome",
	material: "monochrome",
	"material-you": "monochrome",
	themed: "monochrome",
	foreground: "foreground",
	fg: "foreground",
	"adaptive-fg": "foreground"
};
function normalizeAndroidIconVariant(raw) {
	return VARIANT_ALIASES[String(raw || "default").trim().toLowerCase()] || "default";
}
/** Durable resource: `android-icon:com.pkg`, `?v=`, `?pack=`, `?drawable=`. */
function isAndroidIconRef(raw) {
	return String(raw || "").trim().toLowerCase().startsWith("android-icon:");
}
function formatAndroidIconRef(packageName, variant = "default", pack = "", drawable = "") {
	const pkg = String(packageName || "").trim();
	if (!pkg) return "";
	const v = normalizeAndroidIconVariant(variant);
	const packPkg = String(pack || "").trim();
	const draw = String(drawable || "").trim();
	const params = new URLSearchParams();
	if (v !== "default") params.set("v", v);
	if (packPkg) params.set("pack", packPkg);
	if (draw) params.set("drawable", draw);
	const q = params.toString();
	return q ? `android-icon:${pkg}?${q}` : `android-icon:${pkg}`;
}
function parseAndroidIconRef(raw) {
	const input = String(raw || "").trim();
	if (!isAndroidIconRef(input)) return null;
	const body = input.slice(13).replace(/^\/\//, "");
	if (!body) return null;
	const finish = (pkg, params) => {
		if (!pkg) return null;
		const parsed = {
			packageName: pkg,
			variant: normalizeAndroidIconVariant(params.get("v") || "default")
		};
		const pack = String(params.get("pack") || "").trim();
		const drawable = String(params.get("drawable") || "").trim();
		if (pack) parsed.pack = pack;
		if (drawable) parsed.drawable = drawable;
		return parsed;
	};
	try {
		const url = new URL(body.includes("://") ? body : `android-icon://${body}`);
		return finish(String(url.hostname || url.pathname.replace(/^\//, "") || "").trim(), url.searchParams);
	} catch {
		const [pkgPart, query = ""] = body.split("?");
		return finish(String(pkgPart || "").trim(), new URLSearchParams(query));
	}
}
/** Cache key so default / mono / fg / pack / drawable / pixel size don't collide. */
function androidIconCacheKey(packageName, variant = "default", pack = "", drawable = "", sizePx = 0) {
	const pkg = String(packageName || "").trim();
	if (!pkg) return "";
	const v = normalizeAndroidIconVariant(variant);
	const packPkg = String(pack || "").trim();
	const draw = String(drawable || "").trim();
	let key = v === "default" ? pkg : `${pkg}#${v}`;
	if (packPkg) key = `${key}#pack:${packPkg}`;
	if (draw) key = `${key}#d:${draw}`;
	const sz = Math.round(Number(sizePx) || 0);
	if (sz > 0) key = `${key}#s${sz}`;
	return key;
}
//#endregion
//#region ../../modules/views/home-view/src/ts/action-registry.ts
var registeredLauncherBridge = null;
/** In-memory cache: Android package → blob: object URL (web-native image). */
var launcherIconObjectUrlCache = /* @__PURE__ */ new Map();
var launcherIconInflight = /* @__PURE__ */ new Map();
async function dataUrlToObjectUrl(dataUrl) {
	const blob = await (await fetch(dataUrl)).blob();
	const type = blob.type && blob.type.startsWith("image/") ? blob.type : "image/png";
	const normalized = blob.type === type ? blob : new Blob([await blob.arrayBuffer()], { type });
	return URL.createObjectURL(normalized);
}
/** Cached blob URL for an Android launcher icon, if already fetched this session. */
/**
* Parse `shortcut:pkg::id` (current) or `shortcut:pkg/id` (COMPAT).
* WHY: Material Files ids are file paths (`/storage/...`); first-slash split is fragile.
*/
function parseShortcutCacheKey(cacheKey) {
	const raw = String(cacheKey || "").trim();
	if (!raw.startsWith("shortcut:")) return null;
	const rest = raw.slice(9);
	const sep = rest.indexOf("::");
	if (sep > 0) {
		const packageName = rest.slice(0, sep).trim();
		const shortcutId = rest.slice(sep + 2).trim();
		return packageName && shortcutId ? {
			packageName,
			shortcutId
		} : null;
	}
	const slash = rest.indexOf("/");
	if (slash > 0) {
		const packageName = rest.slice(0, slash).trim();
		const shortcutId = rest.slice(slash + 1).trim();
		return packageName && shortcutId ? {
			packageName,
			shortcutId
		} : null;
	}
	return null;
}
function getCachedLauncherIconObjectUrl(cacheKey, size = 96, variant = "default", pack = "", drawable = "") {
	const pkg = String(cacheKey || "").trim();
	if (!pkg) return "";
	const shortcut = parseShortcutCacheKey(pkg);
	if (shortcut) return getCachedShortcutIconObjectUrl(shortcut.packageName, shortcut.shortcutId, size);
	return launcherIconObjectUrlCache.get(androidIconCacheKey(pkg, variant, pack, drawable, size)) || "";
}
/** Publisher package + pinned ShortcutInfo id for file / app shortcuts. */
function getLauncherShortcutRef(item) {
	const meta = getSpeedDialMeta(item.id);
	const shortcutId = String(meta?.shortcutId || "").trim();
	const packageName = String(meta?.packageName || meta?.publisherPackage || "").trim();
	if (!packageName || !shortcutId) return null;
	return {
		packageName,
		shortcutId
	};
}
function getLauncherAppTileCacheKey(item) {
	const shortcut = getLauncherShortcutRef(item);
	if (shortcut) return `shortcut:${shortcut.packageName}::${shortcut.shortcutId}`;
	const meta = getSpeedDialMeta(item.id);
	const action = String(meta?.action || item.action || "").trim();
	if (action === "launch-shortcut" || meta?.entityType === "android-shortcut") return "";
	if (action !== "launch-app" && meta?.entityType !== "android-app") return "";
	return String(meta?.iconCacheKey || meta?.packageName || "").trim();
}
function isLauncherAppSpeedDialItem(item) {
	const meta = getSpeedDialMeta(item.id);
	if (String(meta?.action || item.action || "").trim() === "launch-shortcut" || meta?.entityType === "android-shortcut") return true;
	return getLauncherAppTileCacheKey(item).length > 0;
}
var shortcutIconObjectUrlCache = /* @__PURE__ */ new Map();
var shortcutIconInflight = /* @__PURE__ */ new Map();
/** Fetch pinned-shortcut icon (document thumbnail / type icon), not the app icon. */
async function ensureShortcutIconObjectUrl(pkg, shortcutId, size = 96) {
	const packageName = String(pkg || "").trim();
	const id = String(shortcutId || "").trim();
	if (!packageName || !id) return "";
	const sz = Math.max(16, Math.min(512, Math.round(Number(size) || 96)));
	const key = `shortcut:${packageName}/${id}@${sz}`;
	const cached = shortcutIconObjectUrlCache.get(key);
	if (cached) return cached;
	let inflight = shortcutIconInflight.get(key);
	if (!inflight) {
		inflight = (async () => {
			const bridge = await resolveLauncherBridgeForSpeedDial();
			if (!bridge?.launcherShortcutIcon) return "";
			let dataUrl = "";
			try {
				dataUrl = String(await bridge.launcherShortcutIcon(packageName, id, sz) || "").trim();
			} catch {
				return "";
			}
			if (!dataUrl) return "";
			try {
				const objectUrl = await dataUrlToObjectUrl(dataUrl);
				shortcutIconObjectUrlCache.set(key, objectUrl);
				return objectUrl;
			} catch {
				return dataUrl;
			}
		})().finally(() => {
			shortcutIconInflight.delete(key);
		});
		shortcutIconInflight.set(key, inflight);
	}
	return inflight;
}
function getCachedShortcutIconObjectUrl(pkg, shortcutId, size = 96) {
	const packageName = String(pkg || "").trim();
	const id = String(shortcutId || "").trim();
	if (!packageName || !id) return "";
	const sz = Math.max(16, Math.min(512, Math.round(Number(size) || 96)));
	return shortcutIconObjectUrlCache.get(`shortcut:${packageName}/${id}@${sz}`) || "";
}
/** Fetch native icon once, convert data: URL → blob: object URL for WebView. */
async function ensureLauncherIconObjectUrl(cacheKey, size = 96, variant = "default", pack = "", drawable = "") {
	const pkg = String(cacheKey || "").trim();
	if (!pkg) return "";
	const shortcut = parseShortcutCacheKey(pkg);
	if (shortcut) return ensureShortcutIconObjectUrl(shortcut.packageName, shortcut.shortcutId, size);
	const v = normalizeAndroidIconVariant(variant);
	const packPkg = String(pack || "").trim();
	const draw = String(drawable || "").trim();
	const sz = Math.max(16, Math.min(512, Math.round(Number(size) || 96)));
	const key = androidIconCacheKey(pkg, v, packPkg, draw, sz);
	const cached = launcherIconObjectUrlCache.get(key);
	if (cached) return cached;
	let inflight = launcherIconInflight.get(key);
	if (!inflight) {
		inflight = (async () => {
			const bridge = await resolveLauncherBridgeForSpeedDial();
			if (!bridge?.launcherIcon) return "";
			let dataUrl = "";
			try {
				dataUrl = await bridge.launcherIcon(pkg, sz, v, packPkg || void 0, draw || void 0);
			} catch {
				return "";
			}
			if (!dataUrl) return "";
			try {
				const objectUrl = await dataUrlToObjectUrl(dataUrl);
				launcherIconObjectUrlCache.set(key, objectUrl);
				return objectUrl;
			} catch {
				return "";
			}
		})();
		launcherIconInflight.set(key, inflight);
	}
	try {
		return await inflight;
	} finally {
		launcherIconInflight.delete(key);
	}
}
/** Resolve durable `android-icon:` ref (or return plain URL as-is). */
async function resolveIconResourceUrl(raw, size = 96) {
	const u = String(raw || "").trim();
	if (!u || u.startsWith("blob:")) return "";
	const parsed = parseAndroidIconRef(u);
	if (parsed) return ensureLauncherIconObjectUrl(parsed.packageName, size, parsed.variant, parsed.pack || "", parsed.drawable || "");
	return u;
}
function getCachedIconResourceObjectUrl(raw, size = 96) {
	const parsed = parseAndroidIconRef(raw);
	if (!parsed) return "";
	return getCachedLauncherIconObjectUrl(parsed.packageName, size, parsed.variant, parsed.pack || "", parsed.drawable || "");
}
async function resolveLauncherBridgeForSpeedDial() {
	if (registeredLauncherBridge) return registeredLauncherBridge;
	try {
		return await __vitePreload(() => import("./launcher-bridge.js"), [], import.meta.url);
	} catch {
		return null;
	}
}
async function getLauncherBridgeForSpeedDial() {
	return resolveLauncherBridgeForSpeedDial();
}
/** Launch a sibling ecosystem APK by SKU (launcher HOME only). */
async function launchEcosystemSku(sku) {
	const { androidPackageForSku, isCwspSku } = await __vitePreload(async () => {
		const { androidPackageForSku, isCwspSku } = await import("./ecosystem-skus.js");
		return {
			androidPackageForSku,
			isCwspSku
		};
	}, [], import.meta.url);
	if (!isCwspSku(sku)) return false;
	const pkg = androidPackageForSku(sku);
	if (!pkg) return false;
	const bridge = await resolveLauncherBridgeForSpeedDial();
	if (!bridge?.launcherLaunch) return false;
	return bridge.launcherLaunch(pkg);
}
/** Native launcher APK only — web `u2re.space` opens explorer/document/process in-process. */
async function tryLaunchSiblingView(view) {
	try {
		const { isCwspNativeHost, readCwspSku, siblingSkuForView } = await __vitePreload(async () => {
			const { isCwspNativeHost, readCwspSku, siblingSkuForView } = await import("./ecosystem-skus.js");
			return {
				isCwspNativeHost,
				readCwspSku,
				siblingSkuForView
			};
		}, [], import.meta.url);
		if (!isCwspNativeHost()) return false;
		if (readCwspSku() !== "launcher") return false;
		const sibling = siblingSkuForView(view);
		if (!sibling) return false;
		return launchEcosystemSku(sibling);
	} catch {
		return false;
	}
}
/** Apply fetched Android icon to a launcher `ui-icon` via resource + presentation mode. */
function applyLauncherIconToUiIcon(host, objectUrl, mode = "colored") {
	const url = String(objectUrl || "").trim();
	if (!url) return;
	host.setAttribute("icon-padding", "0");
	host.style.setProperty("--icon-padding", "0px");
	host.style.setProperty("--icon-size", "100%");
	host.toggleAttribute("data-launcher-icon", true);
	const apply = () => {
		const icon = host;
		if (typeof icon.setResourceIcon !== "function") return false;
		icon.setResourceIcon(url, mode === "auto" ? "auto" : mode);
		if (mode !== "auto" && typeof icon.setBitmapPresentationMode === "function") icon.setBitmapPresentationMode(mode, true);
		host.removeAttribute("data-icon-pending");
		host.toggleAttribute("data-launcher-icon-ready", true);
		return true;
	};
	if (apply()) return;
	customElements.whenDefined("ui-icon").then(() => {
		if (!host.isConnected) return;
		apply();
	});
}
/** Create a launcher `ui-icon` host (`data-launcher-icon`). */
function createLauncherUiIconElement() {
	const host = document.createElement("ui-icon");
	host.className = "ui-ws-item-icon-native";
	host.dataset.launcherIcon = "1";
	host.setAttribute("icon-source", "resource");
	host.setAttribute("icon-padding", "0");
	host.style.setProperty("--icon-padding", "0px");
	host.style.setProperty("--icon-size", "100%");
	host.setAttribute("aria-hidden", "true");
	host.toggleAttribute("data-icon-pending", true);
	return host;
}
/** Load Android app / pinned-shortcut icon into a SpeedDial tile. */
async function hydrateLauncherAppTileIcon(el, item) {
	const shortcut = getLauncherShortcutRef(item);
	const cacheKey = getLauncherAppTileCacheKey(item);
	if (!cacheKey) return;
	const readDisplay = () => String(item.iconDisplay || el.getAttribute("data-icon-display") || "").trim().toLowerCase();
	const isGlyph = (d) => d === "glyph" || d === "phosphor" || d === "name";
	if (!shortcut && isGlyph(readDisplay())) return;
	const meta = getSpeedDialMeta(item.id);
	const fetchSize = tileIconFetchSize(meta?.iconScale);
	const explicitUrl = (() => {
		const u = String(item.iconUrl || "").trim();
		if (!u || u.startsWith("blob:")) return "";
		return u;
	})();
	const paintOnUiIcon = (url, mode) => {
		el.querySelectorAll("img.ui-ws-item-icon-img, img[data-launcher-icon], .ui-ws-item-icon-mask").forEach((n) => n.remove());
		let icon = el.querySelector("ui-icon");
		if (!icon) {
			icon = createLauncherUiIconElement();
			el.prepend(icon);
		}
		icon.setAttribute("resource", url);
		applyLauncherIconToUiIcon(icon, url, mode);
		if (!isGlyph(readDisplay())) el.setAttribute("data-icon-display", mode);
	};
	if (explicitUrl) {
		const display = readDisplay();
		const applyResolved = (url) => {
			if (!url || !shortcut && isGlyph(readDisplay())) return;
			if (display === "masked" || display === "masked-inverse") {
				paintOnUiIcon(url, display);
				return;
			}
			paintOnUiIcon(url, "colored");
		};
		if (isAndroidIconRef(explicitUrl)) {
			const cached = getCachedIconResourceObjectUrl(explicitUrl, fetchSize);
			if (cached) applyResolved(cached);
			resolveIconResourceUrl(explicitUrl, fetchSize).then(applyResolved);
			return;
		}
		applyResolved(explicitUrl);
		return;
	}
	const objectUrl = shortcut ? await ensureShortcutIconObjectUrl(shortcut.packageName, shortcut.shortcutId, fetchSize) : await ensureLauncherIconObjectUrl(cacheKey, fetchSize);
	if (!objectUrl || !el.isConnected) {
		if (shortcut) el.querySelectorAll("ui-icon[data-icon-pending]").forEach((n) => n.removeAttribute("data-icon-pending"));
		return;
	}
	const display = readDisplay();
	if (!shortcut && isGlyph(display)) return;
	if (String(item.iconUrl || "").trim() && !String(item.iconUrl).startsWith("blob:")) return;
	if (display === "masked" || display === "masked-inverse") {
		paintOnUiIcon(objectUrl, display);
		return;
	}
	paintOnUiIcon(objectUrl, "colored");
}
var MARKDOWN_VIEW_MANAGED_WINDOW_KEY = "viewer";
var MARKDOWN_VIEW_ALIASES = /* @__PURE__ */ new Set([
	"markdown",
	"markdown-view",
	"markdown-viewer",
	"reader",
	"env-viewer"
]);
/**
* Strip legacy desktop typos, normalize markdown family → {@link MARKDOWN_VIEW_MANAGED_WINDOW_KEY};
* leave all other ids unchanged (`explorer`, `settings`, …).
*/
var normalizeMarkdownViewWindowId = (raw) => {
	let id = String(raw ?? "").trim().toLowerCase();
	id = id.replace(/^#/, "");
	const todo = /^todo:\s*(.*)$/i.exec(id);
	if (todo) id = String(todo[1] ?? "").trim().toLowerCase();
	id = id.replace(/\s+/g, "");
	if (!id) return "";
	if (id === MARKDOWN_VIEW_MANAGED_WINDOW_KEY || MARKDOWN_VIEW_ALIASES.has(id)) return MARKDOWN_VIEW_MANAGED_WINDOW_KEY;
	return id;
};
/**
* Resolve speed-dial / shortcut `meta.view` and desktop `viewId` strings to a canonical `ViewId`.
* WHY: Persisted rows may store the human label ("Markdown", "Plan") or legacy ids; {@link normalizeMarkdownViewWindowId}
* only covers the markdown family.
*/
function resolveOpenViewTarget(raw) {
	const t = String(raw ?? "").trim();
	if (!t) return "";
	const tLower = t.toLowerCase().replace(/^#/, "");
	const byShortcut = NAVIGATION_SHORTCUTS.find((s) => String(s.view).toLowerCase() === tLower || String(s.label).trim().toLowerCase() === tLower);
	if (byShortcut) return String(byShortcut.view);
	return normalizeMarkdownViewWindowId(t) || t.replace(/^#/, "").trim();
}
var actionRegistry = /* @__PURE__ */ new Map();
var labelsPerAction = /* @__PURE__ */ new Map();
var iconsPerAction = /* @__PURE__ */ new Map();
var builtinsInstalled = false;
/**
* Prefer content/file/http data over `intent:` that embeds the publisher package.
* Also unwrap `intent:content://…#Intent;…` / `intent://…#Intent;scheme=https;…`.
*/
var preferDataUriOverIntent = (href, meta) => {
	const candidates = [
		String(href || "").trim(),
		String(meta?.href || "").trim(),
		String(meta?.intentUri || "").trim()
	].filter(Boolean);
	for (const c of candidates) if (/^(content:|file:|https?:)/i.test(c)) return c;
	const intentish = candidates.find((c) => /^intent:/i.test(c)) || "";
	if (!intentish) return String(href || "").trim();
	const direct = intentish.match(/^intent:(content:[^#]+)/i) || intentish.match(/^intent:(file:[^#]+)/i) || intentish.match(/^intent:(https?:[^#]+)/i);
	if (direct?.[1]) return direct[1];
	const dataParam = intentish.match(/;data=((?:content|file|https?):[^;]+)/i);
	if (dataParam?.[1]) try {
		return decodeURIComponent(dataParam[1]);
	} catch {
		return dataParam[1];
	}
	const schemeMatch = intentish.match(/;scheme=([a-zA-Z][a-zA-Z0-9+.-]*)/i);
	const pathMatch = intentish.match(/^intent:([^#]*)#/i);
	if (schemeMatch?.[1] && pathMatch) {
		const sch = schemeMatch[1].toLowerCase();
		if (sch === "http" || sch === "https" || sch === "content" || sch === "file") {
			let rest = String(pathMatch[1] || "");
			if (rest.startsWith("//")) return `${sch}:${rest}`;
			if (rest.startsWith("/")) return `${sch}:/${rest}`;
			if (rest) return `${sch}://${rest}`;
		}
	}
	return String(href || "").trim();
};
var guessMimeFromHrefOrLabel = (href, label) => {
	const name = `${label} ${href}`.toLowerCase();
	if (/\.txt(\b|$|[?#])/i.test(name) || /\.log(\b|$|[?#])/i.test(name) || /\.csv(\b|$|[?#])/i.test(name)) return "text/plain";
	if (/\.md(\b|$|[?#])/i.test(name) || /\.markdown(\b|$|[?#])/i.test(name)) return "text/markdown";
	if (/\.pdf(\b|$|[?#])/i.test(name)) return "application/pdf";
	if (/\.png(\b|$|[?#])/i.test(name)) return "image/png";
	if (/\.jpe?g(\b|$|[?#])/i.test(name)) return "image/jpeg";
	if (/\.gif(\b|$|[?#])/i.test(name)) return "image/gif";
	if (/\.webp(\b|$|[?#])/i.test(name)) return "image/webp";
	if (/\.mp4(\b|$|[?#])/i.test(name)) return "video/mp4";
	if (/\.mp3(\b|$|[?#])/i.test(name)) return "audio/mpeg";
	if (/\.html?(\b|$|[?#])/i.test(name)) return "text/html";
	if (/\.json(\b|$|[?#])/i.test(name)) return "application/json";
	if (/\.zip(\b|$|[?#])/i.test(name)) return "application/zip";
	return "";
};
/**
* Turn bare view tokens (`settings`, `#workcenter`, `/viewer`) into absolute
* mono-app URLs (`https://host/settings?shell=environment&native=1&view=settings`).
* External http(s)/mailto links pass through unchanged.
*/
var normalizeSpeedDialOpenHref = (raw) => {
	const input = String(raw || "").trim();
	if (!input) return "";
	if (/^(mailto:|blob:|data:|content:|file:|intent:|package:|android-app:)/i.test(input)) return input;
	if (/^[a-z][a-z0-9+.-]*:/i.test(input) && !/^https?:/i.test(input)) return input;
	const asView = (candidate) => {
		const view = resolveOpenViewTarget(candidate);
		return view ? buildSpeedDialViewPathHref(view, true, { native: true }) : "";
	};
	if (/^https?:\/\//i.test(input)) try {
		const u = new URL(input);
		if (typeof location !== "undefined" && u.origin === location.origin) {
			const mono = asView(u.pathname.replace(/\/+$/, "").split("/").filter(Boolean).pop() || "");
			if (mono) return mono;
		}
		return u.href;
	} catch {
		return input;
	}
	if (input.startsWith("/")) {
		const seg = input.replace(/^\//, "").split(/[/?#]/)[0];
		const mono = asView(seg);
		if (mono) return mono;
		try {
			return new URL(input, location.href).href;
		} catch {
			return input;
		}
	}
	const token = input.replace(/^#/, "").split(/[/?#]/)[0].trim();
	const mono = asView(token);
	if (mono && !/[.:]/.test(token)) return mono;
	try {
		return new URL(input, location.href).href;
	} catch {
		return input;
	}
};
var copyTextToClipboard = async (text) => {
	const t = String(text || "").trim();
	if (!t.length) throw new Error("empty");
	if (navigator.clipboard?.writeText) {
		await navigator.clipboard.writeText(t);
		return;
	}
	const ta = document.createElement("textarea");
	ta.value = t;
	ta.style.position = "fixed";
	ta.style.left = "-9999px";
	document.body.appendChild(ta);
	ta.select();
	document.execCommand("copy");
	ta.remove();
};
var ensureHashNavigation = (view, viewMaker, props) => {
	if (!view || typeof window === "undefined") return;
	if (typeof viewMaker === "function") {
		viewMaker(view, props);
		return;
	}
	const opener = getSpeedDialViewOpener();
	if (opener) {
		opener(view, props);
		return;
	}
	const hash = `#${String(view).replace(/^#/, "")}`;
	if (location.hash !== hash) navigate(hash);
};
var installBuiltins = () => {
	if (builtinsInstalled) return;
	builtinsInstalled = true;
	iconsPerAction.set("open-view", "compass");
	iconsPerAction.set("open-link", "arrow-square-out");
	iconsPerAction.set("copy-link", "copy");
	iconsPerAction.set("copy-state-desc", "brackets-curly");
	labelsPerAction.set("open-view", (d) => `Open ${d?.label || "view"}`);
	labelsPerAction.set("open-link", (d) => d?.label ? `Open ${d.label}` : "Open link");
	labelsPerAction.set("copy-link", () => "Copy link");
	labelsPerAction.set("copy-state-desc", () => "Copy shortcut");
	actionRegistry.set("open-view", async (context, entityDesc) => {
		const item = context?.items?.find?.((i) => i?.id === context?.id) || null;
		const metaMap = context?.meta;
		const meta = item && metaMap?.get ? metaMap.get(item.id) : null;
		const rawTarget = meta?.view || entityDesc?.view || entityDesc?.type || "";
		const targetView = resolveOpenViewTarget(String(rawTarget || ""));
		if (!targetView) {
			showError("No view target");
			return;
		}
		if (await tryLaunchSiblingView(targetView)) return;
		const viewMaker = context?.viewMaker ?? getSpeedDialViewOpener();
		const linkTarget = context?.openLinkTarget != null ? normalizeOpenLinkTarget(context.openLinkTarget) : meta?.openLinkTarget != null && String(meta.openLinkTarget).trim() ? normalizeOpenLinkTarget(meta.openLinkTarget) : "inline";
		if (linkTarget === "native-window") {
			const href = buildSpeedDialViewPathHref(targetView, true, { native: true });
			if (!href) {
				showError("Link is missing");
				return;
			}
			if (!openInDetachedBrowserWindow(href)) showError("Unable to open native window");
			return;
		}
		if (linkTarget === "new-tab") {
			const href = buildSpeedDialViewPathHref(targetView, true, { native: false });
			if (!href) {
				showError("Link is missing");
				return;
			}
			if (!openInNewBrowserTab(href)) showError("Unable to open new tab");
			return;
		}
		ensureHashNavigation(targetView, viewMaker, {});
	});
	actionRegistry.set("open-link", async (context) => {
		const item = context?.items?.find?.((i) => i?.id === context?.id) || null;
		const metaMap = context?.meta;
		const meta = item && metaMap?.get ? metaMap.get(item.id) : null;
		const raw = meta?.href || item?.href || context?.href || resolveSpeedDialItemHref(item);
		const viewFromMeta = resolveOpenViewTarget(String(meta?.view || ""));
		const externalHref = isExternalWebHref(raw) ? normalizeExternalWebHref(raw) || normalizeSpeedDialOpenHref(String(raw || "")) : "";
		const view = externalHref ? "" : resolveOpenViewTarget(parseSpeedDialViewFromHref(String(raw || ""))) || viewFromMeta;
		const linkTarget = context?.openLinkTarget != null ? normalizeOpenLinkTarget(context.openLinkTarget) : resolveItemOpenLinkTarget(meta);
		const opener = context?.viewMaker ?? getSpeedDialViewOpener();
		if (linkTarget === "inline") {
			if (externalHref && typeof opener === "function") try {
				opener("browser", {
					url: externalHref,
					href: externalHref
				});
				return;
			} catch (e) {
				console.warn("[speed-dial] inline browser open failed", e);
			}
			if (view && typeof opener === "function") try {
				opener(view, {});
				return;
			} catch (e) {
				console.warn("[speed-dial] inline openView failed; falling back to URL", e);
			}
			if (externalHref && openInNewBrowserTab(externalHref)) {
				showError("Inline embed unavailable — opened in a new tab");
				return;
			}
			showError(externalHref ? "Unable to open link inline" : "Link is missing");
			return;
		}
		const openViaNativeUri = async (href, opts) => {
			const bridge = await resolveLauncherBridgeForSpeedDial();
			if (!bridge?.launcherOpenUri) return false;
			const mimeType = String(meta?.mimeType || guessMimeFromHrefOrLabel(href, String(meta?.description || item?.label || ""))).trim();
			try {
				return await bridge.launcherOpenUri(href, {
					chooser: opts.chooser,
					title: opts.chooser ? "Open with" : void 0,
					...mimeType ? { mimeType } : {}
				});
			} catch {
				return false;
			}
		};
		if (linkTarget === "external-app") {
			const href = externalHref ? externalHref : view ? buildSpeedDialViewPathHref(view, true, { native: false }) : normalizeSpeedDialOpenHref(String(raw || ""));
			if (!href) {
				showError("Link is missing");
				return;
			}
			const openHref = preferDataUriOverIntent(href, meta);
			if (canUseNativeOpenUri() && await openViaNativeUri(openHref, { chooser: true })) return;
			if (!openInNewBrowserTab(href)) showError("Unable to open in app");
			return;
		}
		if (linkTarget === "new-tab") {
			const href = externalHref ? externalHref : view ? buildSpeedDialViewPathHref(view, true, { native: false }) : normalizeSpeedDialOpenHref(String(raw || ""));
			if (!href) {
				showError("Link is missing");
				return;
			}
			if (canUseNativeOpenUri() && externalHref && await openViaNativeUri(href, { chooser: false })) return;
			if (!openInNewBrowserTab(href)) showError("Unable to open new tab");
			return;
		}
		const href = externalHref ? externalHref : view ? buildSpeedDialViewPathHref(view, true, { native: true }) : normalizeSpeedDialOpenHref(String(raw || ""));
		if (!href) {
			showError("Link is missing");
			return;
		}
		if (externalHref && await openViaNativeUri(href, { chooser: true })) return;
		if (!openInDetachedBrowserWindow(href)) showError("Unable to open native window (popup blocked?)");
	});
	actionRegistry.set("copy-link", async (context) => {
		const item = context?.items?.find?.((i) => i?.id === context?.id) || null;
		const metaMap = context?.meta;
		const raw = (item && metaMap?.get ? metaMap.get(item.id) : null)?.href || item?.href || context?.href || resolveSpeedDialItemHref(item);
		const href = normalizeSpeedDialOpenHref(String(raw || ""));
		if (!href) {
			showError("Nothing to copy");
			return;
		}
		try {
			await copyTextToClipboard(String(href));
			showSuccess("Link copied");
		} catch (e) {
			console.warn(e);
			showError("Failed to copy link");
		}
	});
	actionRegistry.set("copy-state-desc", async (context) => {
		const item = context?.items?.find?.((i) => i?.id === context?.id) || null;
		if (!item) {
			showError("Nothing to copy");
			return;
		}
		try {
			await copySpeedDialItemToClipboard(item);
			showSuccess("Shortcut copied");
		} catch (e) {
			console.warn(e);
			showError("Failed to copy shortcut");
		}
	});
	iconsPerAction.set("launch-app", "device-mobile");
	labelsPerAction.set("launch-app", (d) => `Launch ${d?.label || d?.packageName || "app"}`);
	actionRegistry.set("launch-app", async (context, entityDesc) => {
		const item = context?.items?.find?.((i) => i?.id === context?.id) || (entityDesc?.id ? entityDesc : null);
		const metaMap = context?.meta;
		const itemId = String(entityDesc?.id || context?.id || item?.id || "").trim();
		const meta = (itemId && metaMap?.get ? metaMap.get(itemId) : null) || entityDesc?.meta || null;
		const shortcutId = String(meta?.shortcutId || entityDesc?.shortcutId || "").trim();
		const pkg = String(meta?.packageName || entityDesc?.packageName || "").trim();
		if (shortcutId && pkg) {
			const bridge = await resolveLauncherBridgeForSpeedDial();
			if (bridge?.launcherStartShortcut) {
				if (await bridge.launcherStartShortcut(pkg, shortcutId)) return;
			}
		}
		if (!pkg) {
			showError("App missing");
			return;
		}
		const bridge = await resolveLauncherBridgeForSpeedDial();
		if (!bridge?.launcherLaunch) {
			showError("Unable to launch app");
			return;
		}
		const component = String(meta?.componentName || entityDesc?.componentName || "").trim() || void 0;
		if (!await bridge.launcherLaunch(pkg, component)) showError("Unable to launch app");
	});
	iconsPerAction.set("launch-shortcut", "folder");
	labelsPerAction.set("launch-shortcut", (d) => `Open ${d?.label || d?.shortcutId || "shortcut"}`);
	actionRegistry.set("launch-shortcut", async (context, entityDesc) => {
		const item = context?.items?.find?.((i) => i?.id === context?.id) || (entityDesc?.id ? entityDesc : null);
		const metaMap = context?.meta;
		const itemId = String(entityDesc?.id || context?.id || item?.id || "").trim();
		const meta = (itemId && metaMap?.get ? metaMap.get(itemId) : null) || entityDesc?.meta || null;
		const pkg = String(meta?.packageName || entityDesc?.packageName || "").trim();
		const shortcutId = String(meta?.shortcutId || entityDesc?.shortcutId || "").trim();
		if (!pkg || !shortcutId) {
			showError("Shortcut missing");
			return;
		}
		const bridge = await resolveLauncherBridgeForSpeedDial();
		if (!bridge?.launcherStartShortcut) {
			showError("Unable to open shortcut");
			return;
		}
		if (!await bridge.launcherStartShortcut(pkg, shortcutId)) showError("Unable to open shortcut");
	});
	iconsPerAction.set("open-path", "folder");
	labelsPerAction.set("open-path", (d) => `Open ${d?.label || d?.path || "path"}`);
	actionRegistry.set("open-path", async (context, entityDesc) => {
		const metaMap = context?.meta;
		const itemId = String(entityDesc?.id || context?.id || "").trim();
		const meta = (itemId && metaMap?.get ? metaMap.get(itemId) : null) || entityDesc?.meta || null;
		const path = String(entityDesc?.path || meta?.path || context?.path || "").trim();
		if (!path) {
			showError("Path is missing");
			return;
		}
		const opener = context?.viewMaker || getSpeedDialViewOpener();
		if (path.endsWith("/") || entityDesc?.kind === "directory" || meta?.kind === "directory") {
			await opener?.("explorer", {
				path,
				initialPath: path
			});
			return;
		}
		if (/\.(md|markdown|txt)$/i.test(path) || entityDesc?.type && String(entityDesc.type).startsWith("text/")) {
			await opener?.("viewer", {
				src: path,
				path
			});
			return;
		}
		if (/\.(png|jpe?g|gif|webp|svg|avif|bmp)$/i.test(path)) {
			await opener?.("viewer", {
				src: path,
				path
			});
			return;
		}
		await opener?.("explorer", {
			path,
			initialPath: path
		});
	});
	for (const shortcut of NAVIGATION_SHORTCUTS) {
		const actionId = `open-view-${shortcut.view}`;
		if (!iconsPerAction.has(actionId)) iconsPerAction.set(actionId, shortcut.icon);
		if (!labelsPerAction.has(actionId)) labelsPerAction.set(actionId, () => `Open ${shortcut.label}`);
		if (!actionRegistry.has(actionId)) actionRegistry.set(actionId, async (context) => {
			return actionRegistry.get("open-view")?.(context, {
				label: shortcut.label,
				type: shortcut.view,
				view: shortcut.view,
				DIR: "/"
			});
		});
	}
	for (const { alias, label } of [{
		alias: "markdown",
		label: "Markdown"
	}, {
		alias: "reader",
		label: "Markdown"
	}]) {
		const actionId = `open-view-${alias}`;
		if (actionRegistry.has(actionId)) continue;
		iconsPerAction.set(actionId, "article");
		labelsPerAction.set(actionId, () => `Open ${label}`);
		actionRegistry.set(actionId, async (context) => {
			return actionRegistry.get("open-view")?.(context, {
				label,
				type: MARKDOWN_VIEW_MANAGED_WINDOW_KEY,
				view: MARKDOWN_VIEW_MANAGED_WINDOW_KEY,
				DIR: "/"
			});
		});
	}
};
function getSpeedDialActionRegistry() {
	installBuiltins();
	return actionRegistry;
}
function getSpeedDialActionLabels() {
	installBuiltins();
	return labelsPerAction;
}
function getSpeedDialActionIcons() {
	installBuiltins();
	return iconsPerAction;
}
//#endregion
//#region ../../modules/views/home-view/src/ts/icon-resource-picker.ts
var VARIANT_FALLBACK = [
	{
		id: "default",
		label: "Default"
	},
	{
		id: "monochrome",
		label: "Material You"
	},
	{
		id: "foreground",
		label: "Adaptive FG"
	}
];
function resolveTheme(theme) {
	if (theme === "light" || theme === "dark") return theme;
	return String(document.documentElement.getAttribute("data-theme") || "").toLowerCase() === "light" ? "light" : "dark";
}
function httpPageUrl(raw) {
	const u = String(raw || "").trim();
	return /^https?:\/\//i.test(u) ? u : "";
}
function googleS2Favicon(pageUrl, size = 128) {
	try {
		const host = new URL(pageUrl).hostname;
		if (!host) return "";
		return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=${size}`;
	} catch {
		return "";
	}
}
function chromeExtensionFavicon(pageUrl, size = 128) {
	try {
		const chromeRt = globalThis.chrome?.runtime;
		if (typeof chromeRt?.getURL !== "function") return "";
		const u = new URL(chromeRt.getURL("/_favicon/"));
		u.searchParams.set("pageUrl", pageUrl);
		u.searchParams.set("size", String(size));
		return u.toString();
	} catch {
		return "";
	}
}
function resolveFaviconCandidates(pageUrl, api) {
	const page = httpPageUrl(pageUrl);
	if (!page) return [];
	const out = [];
	const seen = /* @__PURE__ */ new Set();
	const push = (label, url) => {
		const u = String(url || "").trim();
		if (!u || seen.has(u)) return;
		seen.add(u);
		out.push({
			label,
			url: u
		});
	};
	const fromApi = api?.resolveIconUrl?.(page, 128) || api?.resolveIconUrl?.(page, 64) || "";
	const s2 = googleS2Favicon(page, 128);
	if (s2) push("Google S2", s2);
	const s2sm = googleS2Favicon(page, 64);
	if (s2sm) push("Google S2 (64)", s2sm);
	const chromeFav = chromeExtensionFavicon(page, 128);
	if (chromeFav) push("Chrome favicon", chromeFav);
	if (fromApi) push("Bookmark favicon", fromApi);
	return out;
}
var PICKER_GRID_COLS = "repeat(auto-fill, minmax(4.75rem, 1fr))";
var pin = (el, props) => {
	for (const [name, value] of Object.entries(props)) el.style.setProperty(name, value, "important");
};
function pinPickerGrid(grid) {
	pin(grid, {
		display: "grid",
		"grid-template-columns": PICKER_GRID_COLS,
		gap: "0.5rem 0.4rem",
		"align-content": "start",
		"justify-content": "stretch",
		"min-inline-size": "0",
		"min-block-size": "0",
		"inline-size": "100%"
	});
}
function pinPickerCard(btn, img, caption) {
	pin(btn, {
		display: "grid",
		"grid-template-columns": "minmax(0, 1fr)",
		"grid-template-rows": "auto max-content",
		"justify-items": "center",
		"align-content": "start",
		"align-items": "start",
		"flex-direction": "column",
		gap: "0.3rem",
		margin: "0",
		padding: "0.2rem 0.08rem 0.15rem",
		"min-inline-size": "0",
		"inline-size": "100%",
		"max-inline-size": "100%",
		"block-size": "auto",
		"min-block-size": "0",
		background: "transparent",
		border: "0",
		"border-radius": "0.7rem",
		"box-shadow": "none",
		appearance: "none",
		"-webkit-appearance": "none",
		position: "static",
		"z-index": "auto",
		overflow: "hidden"
	});
	pin(img, {
		display: "block",
		"grid-row": "1",
		"inline-size": "3rem",
		"block-size": "3rem",
		"max-inline-size": "3rem",
		"max-block-size": "3rem",
		"object-fit": "cover",
		"border-radius": "50%",
		"flex-shrink": "0"
	});
	pin(caption, {
		display: "block",
		"grid-row": "2",
		"inline-size": "100%",
		"max-inline-size": "100%",
		overflow: "hidden",
		"text-overflow": "ellipsis",
		"white-space": "nowrap",
		"font-size": "0.62rem",
		"line-height": "1.2",
		"text-align": "center",
		opacity: "0.88"
	});
}
function makeCard(label, title) {
	const btn = document.createElement("button");
	btn.type = "button";
	btn.className = "sd-icon-picker__card";
	btn.title = title || label;
	const img = document.createElement("img");
	img.alt = "";
	img.decoding = "async";
	img.draggable = false;
	img.referrerPolicy = "no-referrer";
	const caption = document.createElement("span");
	caption.className = "sd-icon-picker__card-label";
	caption.textContent = label;
	btn.append(img, caption);
	pinPickerCard(btn, img, caption);
	return {
		btn,
		img
	};
}
async function loadVariantCards(bridge, pkg, host, onPick, close) {
	host.replaceChildren();
	let variants = VARIANT_FALLBACK.map((v) => ({
		...v,
		available: true
	}));
	try {
		const listed = await bridge.launcherIconVariants?.(pkg);
		if (Array.isArray(listed) && listed.length) variants = listed.map((v) => ({
			id: normalizeAndroidIconVariant(v.id),
			label: String(v.label || v.id),
			available: v.available !== false
		}));
	} catch {}
	for (const v of variants) {
		if (!v.available && v.id !== "default") continue;
		const { btn, img } = makeCard(v.label);
		host.append(btn);
		ensureLauncherIconObjectUrl(pkg, 96, v.id).then((url) => {
			if (!url) {
				btn.disabled = true;
				btn.title = `${v.label} (unavailable)`;
				return;
			}
			img.src = url;
		});
		btn.addEventListener("click", () => {
			onPick({
				iconUrl: formatAndroidIconRef(pkg, v.id),
				packageName: pkg,
				variant: v.id,
				label: v.label,
				source: "android"
			});
			close();
		});
	}
}
async function loadIconPackCards(bridge, targetPkg, host, onPick, close) {
	host.replaceChildren();
	host.classList.remove("sd-icon-picker__grid--browse");
	pinPickerGrid(host);
	if (!bridge.launcherIconPacks) {
		host.textContent = "Icon packs unavailable.";
		return;
	}
	let packs = [];
	try {
		packs = await bridge.launcherIconPacks();
	} catch {
		host.textContent = "Failed to list icon packs.";
		return;
	}
	if (!packs.length) {
		host.textContent = "No icon packs installed.";
		return;
	}
	const frag = document.createDocumentFragment();
	for (const pack of packs.slice(0, 64)) {
		const packPkg = String(pack.packageName || "").trim();
		if (!packPkg) continue;
		const label = String(pack.label || packPkg);
		const wrap = document.createElement("div");
		wrap.className = "sd-icon-picker__pack-wrap";
		pin(wrap, {
			position: "relative",
			"min-inline-size": "0",
			"inline-size": "100%"
		});
		const { btn, img } = makeCard(label, `${label} — tap to apply, grid to browse`);
		ensureLauncherIconObjectUrl(targetPkg, 96, "default", packPkg).then((url) => {
			if (url) {
				img.src = url;
				return;
			}
			btn.disabled = true;
			btn.title = `${label} (no cover for this app)`;
			ensureLauncherIconObjectUrl(packPkg, 72, "default").then((packIcon) => {
				if (packIcon) img.src = packIcon;
			});
		});
		btn.addEventListener("click", () => {
			if (btn.disabled) return;
			onPick({
				iconUrl: formatAndroidIconRef(targetPkg, "default", packPkg),
				packageName: targetPkg,
				variant: "default",
				pack: packPkg,
				label,
				source: "icon-pack"
			});
			close();
		});
		const browse = document.createElement("button");
		browse.type = "button";
		browse.className = "sd-icon-picker__pack-browse";
		pin(browse, {
			position: "absolute",
			"inset-block-start": "0",
			"inset-inline-end": "0",
			display: "grid",
			"place-items": "center",
			margin: "0",
			padding: "0",
			"inline-size": "1.2rem",
			"block-size": "1.2rem",
			"min-inline-size": "1.2rem",
			"min-block-size": "1.2rem",
			border: "0",
			"border-radius": "999px"
		});
		browse.title = `Browse icons in ${label}`;
		browse.setAttribute("aria-label", `Browse icons in ${label}`);
		browse.innerHTML = "<ui-icon icon=\"squares-four\" aria-hidden=\"true\"></ui-icon>";
		browse.addEventListener("click", (ev) => {
			ev.preventDefault();
			ev.stopPropagation();
			host.dataset.packBrowse = "1";
			loadPackDrawableBrowse(bridge, targetPkg, packPkg, label, host, onPick, close, () => {
				delete host.dataset.packBrowse;
				loadIconPackCards(bridge, targetPkg, host, onPick, close);
			});
		});
		wrap.append(btn, browse);
		frag.append(wrap);
	}
	host.append(frag);
}
async function loadPackDrawableBrowse(bridge, targetPkg, packPkg, packLabel, host, onPick, close, onBack) {
	host.replaceChildren();
	host.classList.add("sd-icon-picker__grid--browse");
	host.style.setProperty("display", "grid", "important");
	host.style.setProperty("grid-template-columns", "minmax(0, 1fr)", "important");
	host.style.setProperty("grid-template-rows", "auto minmax(0, 1fr)", "important");
	host.style.setProperty("gap", "0.35rem", "important");
	const toolbar = document.createElement("div");
	toolbar.className = "sd-icon-picker__pack-toolbar";
	const back = document.createElement("button");
	back.type = "button";
	back.className = "sd-icon-picker__pack-back";
	back.textContent = "Packs";
	back.addEventListener("click", () => onBack());
	const title = document.createElement("span");
	title.className = "sd-icon-picker__pack-title";
	title.textContent = packLabel;
	const search = document.createElement("input");
	search.type = "search";
	search.placeholder = "Filter…";
	search.autocomplete = "off";
	search.className = "sd-icon-picker__search";
	toolbar.append(back, title, search);
	const grid = document.createElement("div");
	grid.className = "sd-icon-picker__grid";
	pinPickerGrid(grid);
	host.append(toolbar, grid);
	let timer = 0;
	const refresh = () => {
		(async () => {
			grid.replaceChildren();
			if (!bridge.launcherIconPackIcons) {
				grid.textContent = "Pack browse unavailable.";
				return;
			}
			let icons = [];
			try {
				icons = await bridge.launcherIconPackIcons(packPkg, String(search.value || ""), 96);
			} catch {
				grid.textContent = "Failed to list pack icons.";
				return;
			}
			if (!icons.length) {
				grid.textContent = "No matching icons.";
				return;
			}
			const frag = document.createDocumentFragment();
			const resolvePkg = targetPkg || packPkg;
			for (const icon of icons) {
				const drawable = String(icon.drawable || "").trim();
				if (!drawable) continue;
				const { btn, img } = makeCard(String(icon.label || drawable), `${packLabel}: ${drawable}`);
				frag.append(btn);
				ensureLauncherIconObjectUrl(resolvePkg, 72, "default", packPkg, drawable).then((url) => {
					if (url) img.src = url;
					else btn.disabled = true;
				});
				btn.addEventListener("click", () => {
					if (btn.disabled) return;
					onPick({
						iconUrl: formatAndroidIconRef(resolvePkg, "default", packPkg, drawable),
						packageName: resolvePkg,
						variant: "default",
						pack: packPkg,
						drawable,
						label: String(icon.label || drawable),
						source: "icon-pack"
					});
					close();
				});
			}
			grid.append(frag);
		})();
	};
	search.addEventListener("input", () => {
		window.clearTimeout(timer);
		timer = window.setTimeout(refresh, 160);
	});
	refresh();
}
async function loadAppBrowse(bridge, query, host, onPick, close) {
	host.replaceChildren();
	if (!bridge.launcherList) {
		host.textContent = "App list unavailable.";
		return;
	}
	let apps = [];
	try {
		apps = await bridge.launcherList(query);
	} catch {
		host.textContent = "Failed to list apps.";
		return;
	}
	if (!apps.length) {
		host.textContent = query.trim() ? "No matches." : "No apps.";
		return;
	}
	const frag = document.createDocumentFragment();
	for (const app of apps.slice(0, 96)) {
		const pkg = String(app.packageName || "").trim();
		if (!pkg) continue;
		const { btn, img } = makeCard(String(app.label || pkg), `${app.label} (${pkg})`);
		frag.append(btn);
		ensureLauncherIconObjectUrl(String(app.iconCacheKey || pkg).trim() || pkg, 72, "default").then((url) => {
			if (url) img.src = url;
		});
		btn.addEventListener("click", () => {
			onPick({
				iconUrl: formatAndroidIconRef(pkg, "default"),
				packageName: pkg,
				variant: "default",
				label: String(app.label || pkg),
				source: "android"
			});
			close();
		});
	}
	host.append(frag);
}
function loadFaviconVariantCards(pageUrl, api, host, onPick, close) {
	host.replaceChildren();
	const candidates = resolveFaviconCandidates(pageUrl, api);
	if (!candidates.length) {
		host.textContent = "No favicon sources for this URL.";
		return;
	}
	for (const c of candidates) {
		const { btn, img } = makeCard(c.label, c.url);
		img.src = c.url;
		img.addEventListener("error", () => {
			btn.disabled = true;
			btn.title = `${c.label} (failed to load)`;
		});
		btn.addEventListener("click", () => {
			onPick({
				iconUrl: c.url,
				label: c.label,
				source: "favicon"
			});
			close();
		});
		host.append(btn);
	}
}
async function loadBookmarkBrowse(api, query, host, onPick, close) {
	host.replaceChildren();
	let entries = [];
	try {
		const q = String(query || "").trim();
		entries = q ? await api.search(q) : await api.listChildren();
	} catch {
		host.textContent = "Failed to list bookmarks.";
		return;
	}
	const links = entries.filter((e) => !e.folder && httpPageUrl(e.url));
	if (!links.length) {
		host.textContent = query.trim() ? "No matching bookmarks." : "No bookmarks.";
		return;
	}
	const frag = document.createDocumentFragment();
	for (const entry of links.slice(0, 80)) {
		const page = httpPageUrl(entry.url);
		if (!page) continue;
		const icon = api.resolveIconUrl?.(page, 64) || chromeExtensionFavicon(page, 64) || googleS2Favicon(page, 64);
		const { btn, img } = makeCard(String(entry.title || page), page);
		if (icon) img.src = icon;
		frag.append(btn);
		btn.addEventListener("click", () => {
			const preferred = api.resolveIconUrl?.(page, 128) || chromeExtensionFavicon(page, 128) || googleS2Favicon(page, 128) || icon;
			if (!preferred) return;
			onPick({
				iconUrl: preferred,
				label: String(entry.title || page),
				source: "bookmark"
			});
			close();
		});
	}
	host.append(frag);
}
/**
* Modal picker:
* - Capacitor: Material You / adaptive + icon packs + installed apps (`android-icon:`)
* - CRX: favicon variants for a page URL + browse Chrome bookmarks
*/
async function openIconResourcePicker(opts) {
	const bridge = await getLauncherBridgeForSpeedDial();
	const bookmarksApi = resolveBookmarksMenuApi();
	const hasAndroid = Boolean(bridge?.launcherIcon);
	const pageSeed = httpPageUrl(opts.pageUrl) || httpPageUrl(opts.currentUrl) || "";
	if (!hasAndroid && !(Boolean(bookmarksApi) || Boolean(pageSeed))) {
		console.warn("[icon-resource-picker] no launcher bridge or bookmarks/favicon source");
		return;
	}
	const theme = resolveTheme(opts.theme);
	const pkgSeed = String(opts.packageName || "").trim();
	const showAndroidVariants = hasAndroid && Boolean(pkgSeed);
	const showIconPacks = hasAndroid && Boolean(pkgSeed) && Boolean(bridge?.launcherIconPacks);
	const showAndroidBrowse = hasAndroid && Boolean(bridge?.launcherList);
	const showFaviconVariants = Boolean(pageSeed);
	const showBookmarkBrowse = Boolean(bookmarksApi);
	const tabs = [];
	if (showAndroidVariants) tabs.push({
		id: "variants",
		label: "This app"
	});
	if (showIconPacks) tabs.push({
		id: "packs",
		label: "Packs"
	});
	if (showFaviconVariants) tabs.push({
		id: "favicon",
		label: "Link"
	});
	if (showAndroidBrowse) tabs.push({
		id: "browse",
		label: "Apps"
	});
	if (showBookmarkBrowse) tabs.push({
		id: "bookmarks",
		label: "Bookmarks"
	});
	const initialTab = tabs[0]?.id || "browse";
	const dialog = document.createElement("dialog");
	dialog.className = "sd-icon-picker";
	dialog.dataset.theme = theme;
	dialog.dataset.tab = initialTab;
	dialog.innerHTML = `
        <form class="sd-icon-picker__form" data-theme="${theme}" method="dialog">
            <header class="sd-icon-picker__header">
                <h2 class="sd-icon-picker__title">Icon</h2>
                <nav class="sd-icon-picker__tabs" role="tablist" aria-label="Icon source"></nav>
                <input class="sd-icon-picker__search" data-search type="search" placeholder="Search…" autocomplete="off" hidden />
            </header>
            <div class="sd-icon-picker__body">
                <section class="sd-icon-picker__section" data-section="variants" hidden>
                    <div class="sd-icon-picker__grid" data-variants></div>
                </section>
                <section class="sd-icon-picker__section" data-section="packs" hidden>
                    <div class="sd-icon-picker__grid" data-packs></div>
                </section>
                <section class="sd-icon-picker__section" data-section="favicon" hidden>
                    <div class="sd-icon-picker__grid" data-favicon></div>
                </section>
                <section class="sd-icon-picker__section" data-section="browse" hidden>
                    <div class="sd-icon-picker__grid" data-browse></div>
                </section>
                <section class="sd-icon-picker__section" data-section="bookmarks" hidden>
                    <div class="sd-icon-picker__grid" data-bookmarks></div>
                </section>
            </div>
            <footer class="sd-icon-picker__footer">
                <button type="button" data-action="cancel" class="sd-icon-picker__cancel">Cancel</button>
            </footer>
        </form>
    `;
	pin(dialog, {
		position: "fixed",
		inset: "0",
		top: "0",
		right: "0",
		bottom: "0",
		left: "0",
		width: "100%",
		height: "100%",
		"inline-size": "100%",
		"block-size": "100%",
		"max-inline-size": "100%",
		"max-block-size": "100%",
		"max-width": "100%",
		"max-height": "100%",
		margin: "0",
		padding: "1rem",
		display: "grid",
		"place-items": "center",
		"place-content": "center",
		background: "transparent",
		border: "none",
		"border-radius": "0",
		"box-shadow": "none",
		overflow: "auto"
	});
	const formEl = dialog.querySelector(".sd-icon-picker__form");
	if (formEl) pin(formEl, {
		display: "flex",
		"flex-direction": "column",
		"inline-size": "min(90cqi, 100dvi)",
		width: "min(90cqi, 100dvi)",
		"max-inline-size": "100%",
		"max-block-size": "min(86dvh, 36rem)",
		margin: "0",
		padding: "0",
		"border-radius": "18px",
		overflow: "hidden",
		"justify-self": "center",
		"align-self": "center",
		background: "color-mix(in oklab, var(--color-surface-container, Canvas) 92%, transparent)"
	});
	const tabsEl = dialog.querySelector(".sd-icon-picker__tabs");
	if (tabsEl) pin(tabsEl, {
		display: "grid",
		"grid-auto-flow": "column",
		"grid-auto-columns": "1fr",
		gap: "0.28rem",
		"inline-size": "100%"
	});
	const bodyEl = dialog.querySelector(".sd-icon-picker__body");
	if (bodyEl) pin(bodyEl, {
		display: "block",
		padding: "0.65rem 0.85rem 0.45rem",
		"min-block-size": "0",
		"max-block-size": "min(26rem, 52dvh)",
		overflow: "auto",
		background: "transparent"
	});
	const footerEl = dialog.querySelector(".sd-icon-picker__footer");
	if (footerEl) pin(footerEl, {
		display: "flex",
		"justify-content": "flex-end",
		"align-items": "center",
		gap: "0.45rem",
		padding: "0.55rem 0.85rem 0.7rem"
	});
	const cancelEl = dialog.querySelector(".sd-icon-picker__cancel");
	if (cancelEl) pin(cancelEl, {
		display: "inline-flex",
		"align-items": "center",
		"justify-content": "center",
		flex: "0 0 auto",
		margin: "0",
		padding: "0.42rem 0.86rem",
		"inline-size": "auto",
		width: "auto",
		"min-inline-size": "0",
		"max-inline-size": "none",
		"border-radius": "0.65rem"
	});
	const form = dialog.querySelector("form");
	const tablist = dialog.querySelector(".sd-icon-picker__tabs");
	const search = dialog.querySelector("[data-search]");
	const variantsHost = dialog.querySelector("[data-variants]");
	const packsHost = dialog.querySelector("[data-packs]");
	const faviconHost = dialog.querySelector("[data-favicon]");
	const browseHost = dialog.querySelector("[data-browse]");
	const bookmarksHost = dialog.querySelector("[data-bookmarks]");
	let closed = false;
	const close = () => {
		if (closed) return;
		closed = true;
		try {
			if (dialog.open) dialog.close();
		} catch {}
		dialog.remove();
	};
	const onPick = (pick) => {
		opts.onPick(pick);
	};
	form.addEventListener("click", (ev) => {
		if (ev.target?.closest?.("[data-action]")?.getAttribute("data-action") === "cancel") {
			ev.preventDefault();
			close();
		}
	});
	dialog.addEventListener("cancel", (ev) => {
		ev.preventDefault();
		close();
	});
	dialog.addEventListener("click", (ev) => {
		if (ev.target === dialog) close();
	});
	const setTab = (id) => {
		dialog.dataset.tab = id;
		dialog.querySelectorAll("[data-section]").forEach((section) => {
			section.hidden = section.dataset.section !== id;
		});
		tablist?.querySelectorAll("[data-tab]").forEach((btn) => {
			const on = btn.dataset.tab === id;
			btn.toggleAttribute("data-active", on);
			btn.setAttribute("aria-selected", on ? "true" : "false");
			btn.tabIndex = on ? 0 : -1;
		});
		const wantsSearch = id === "browse" || id === "bookmarks";
		if (search) {
			search.hidden = !wantsSearch;
			search.placeholder = id === "bookmarks" ? "Search bookmarks…" : "Search apps…";
			if (wantsSearch) search.value = "";
		}
		if (id === "packs" && packsHost?.dataset.packBrowse === "1" && bridge && pkgSeed) {
			delete packsHost.dataset.packBrowse;
			loadIconPackCards(bridge, pkgSeed, packsHost, onPick, close);
		}
	};
	if (tablist) {
		const frag = document.createDocumentFragment();
		for (const tab of tabs) {
			const btn = document.createElement("button");
			btn.type = "button";
			btn.className = "sd-icon-picker__tab";
			btn.dataset.tab = tab.id;
			btn.setAttribute("role", "tab");
			btn.textContent = tab.label;
			pin(btn, {
				display: "inline-flex",
				flex: "1 1 0",
				"align-items": "center",
				"justify-content": "center",
				margin: "0",
				padding: "0.38rem 0.4rem",
				border: "0",
				"border-radius": "999px",
				"inline-size": "100%",
				"min-inline-size": "0",
				"block-size": "auto"
			});
			btn.addEventListener("click", (ev) => {
				ev.preventDefault();
				setTab(tab.id);
			});
			frag.append(btn);
		}
		tablist.append(frag);
		tablist.hidden = tabs.length <= 1;
	}
	if (showAndroidVariants && bridge && variantsHost) loadVariantCards(bridge, pkgSeed, variantsHost, onPick, close);
	if (showIconPacks && bridge && packsHost && pkgSeed) loadIconPackCards(bridge, pkgSeed, packsHost, onPick, close);
	if (showFaviconVariants && faviconHost) loadFaviconVariantCards(pageSeed, bookmarksApi, faviconHost, onPick, close);
	let appTimer = 0;
	const refreshApps = () => {
		if (!browseHost || !bridge) return;
		loadAppBrowse(bridge, String(search?.value || ""), browseHost, onPick, close);
	};
	let bmTimer = 0;
	const refreshBookmarks = () => {
		if (!bookmarksHost || !bookmarksApi) return;
		loadBookmarkBrowse(bookmarksApi, String(search?.value || ""), bookmarksHost, onPick, close);
	};
	search?.addEventListener("input", () => {
		const tab = dialog.dataset.tab;
		if (tab === "browse") {
			window.clearTimeout(appTimer);
			appTimer = window.setTimeout(refreshApps, 180);
			return;
		}
		if (tab === "bookmarks") {
			window.clearTimeout(bmTimer);
			bmTimer = window.setTimeout(refreshBookmarks, 180);
		}
	});
	if (showAndroidBrowse) refreshApps();
	if (showBookmarkBrowse && bookmarksApi) refreshBookmarks();
	tablist?.addEventListener("click", (ev) => {
		const id = ev.target?.closest?.("[data-tab]")?.getAttribute("data-tab");
		if (id === "browse") refreshApps();
		if (id === "bookmarks") refreshBookmarks();
	});
	setTab(initialTab);
	document.body.append(dialog);
	dialog.querySelectorAll(".sd-icon-picker__grid").forEach(pinPickerGrid);
	try {
		dialog.showModal();
	} catch {
		dialog.setAttribute("open", "");
	}
}
/** Icon-only button that opens {@link openIconResourcePicker} and fills an input. */
function attachIconResourcePickButton(field, input, opts) {
	let row = field.querySelector(".sd-icon-resource-row");
	if (!row) {
		row = document.createElement("div");
		row.className = "sd-icon-resource-row";
		input.replaceWith(row);
		row.append(input);
	}
	row.style.setProperty("display", "grid", "important");
	row.style.setProperty("grid-template-columns", "minmax(0,1fr) 2.5rem 2.5rem", "important");
	row.style.setProperty("align-items", "stretch", "important");
	row.style.setProperty("gap", "0.45rem", "important");
	row.style.setProperty("min-inline-size", "0", "important");
	row.style.setProperty("inline-size", "100%", "important");
	let btn = row.querySelector("[data-action='pick-icon']");
	if (!btn) {
		btn = document.createElement("button");
		btn.type = "button";
		btn.className = "btn secondary sd-icon-resource-pick";
		btn.setAttribute("data-action", "pick-icon");
		btn.title = "Pick alternative icon";
		btn.setAttribute("aria-label", "Pick alternative icon");
		btn.innerHTML = "<ui-icon icon=\"squares-four\" icon-style=\"duotone\" aria-hidden=\"true\"></ui-icon>";
		row.append(btn);
	}
	let photoBtn = row.querySelector("[data-action='pick-photo']");
	if (!photoBtn) {
		photoBtn = document.createElement("button");
		photoBtn.type = "button";
		photoBtn.className = "btn secondary sd-icon-resource-pick";
		photoBtn.setAttribute("data-action", "pick-photo");
		photoBtn.title = "Use photo / avatar";
		photoBtn.setAttribute("aria-label", "Use photo or avatar");
		photoBtn.innerHTML = "<ui-icon icon=\"user-circle\" icon-style=\"duotone\" aria-hidden=\"true\"></ui-icon>";
		row.append(photoBtn);
	}
	if (input.parentElement !== row) row.insertBefore(input, btn);
	if (btn.parentElement === row && photoBtn.parentElement === row) {
		row.append(btn, photoBtn);
		row.insertBefore(input, btn);
	}
	const stylePickBtn = (el) => {
		el.style.setProperty("display", "inline-flex", "important");
		el.style.setProperty("align-items", "center", "important");
		el.style.setProperty("justify-content", "center", "important");
		el.style.setProperty("inline-size", "2.5rem", "important");
		el.style.setProperty("min-inline-size", "2.5rem", "important");
		el.style.setProperty("max-inline-size", "2.5rem", "important");
		el.style.setProperty("min-block-size", "2.5rem", "important");
		el.style.setProperty("padding", "0", "important");
		el.style.setProperty("margin", "0", "important");
	};
	stylePickBtn(btn);
	stylePickBtn(photoBtn);
	btn.addEventListener("click", (ev) => {
		ev.preventDefault();
		ev.stopPropagation();
		openIconResourcePicker({
			packageName: typeof opts.packageName === "function" ? opts.packageName() : String(opts.packageName || "").trim(),
			pageUrl: typeof opts.pageUrl === "function" ? opts.pageUrl() : String(opts.pageUrl || "").trim(),
			currentUrl: input.value,
			theme: opts.theme,
			onPick: (pick) => {
				input.value = pick.iconUrl;
				input.setAttribute("value", pick.iconUrl);
				input.dispatchEvent(new Event("input", { bubbles: true }));
				input.dispatchEvent(new Event("change", { bubbles: true }));
			}
		});
	});
	photoBtn.addEventListener("click", (ev) => {
		ev.preventDefault();
		ev.stopPropagation();
		const fileInput = document.createElement("input");
		fileInput.type = "file";
		fileInput.accept = "image/*";
		fileInput.style.display = "none";
		document.body.append(fileInput);
		fileInput.addEventListener("change", () => {
			const file = fileInput.files?.[0];
			fileInput.remove();
			if (!file) return;
			const reader = new FileReader();
			reader.onload = () => {
				const dataUrl = String(reader.result || "").trim();
				if (!dataUrl.startsWith("data:image/")) return;
				input.value = dataUrl;
				input.setAttribute("value", dataUrl);
				input.dispatchEvent(new Event("input", { bubbles: true }));
				input.dispatchEvent(new Event("change", { bubbles: true }));
				const display = field.closest("form")?.querySelector("select[name=\"iconDisplay\"]");
				if (display) {
					display.value = "colored";
					display.dispatchEvent(new Event("change", { bubbles: true }));
				}
			};
			reader.readAsDataURL(file);
		}, { once: true });
		fileInput.click();
	});
	return btn;
}
//#endregion
//#region ../../modules/views/home-view/src/ts/ShortcutEditor.ts
/** WHY: Match context-menu pin — Settings may not have applied data-theme yet. */
function resolveEditorTheme() {
	const root = document.documentElement;
	const pinned = String(root.getAttribute("data-theme") || "").trim().toLowerCase();
	if (pinned === "light" || pinned === "dark") return pinned;
	const scheme = String(root.getAttribute("data-scheme") || "").trim().toLowerCase();
	if (scheme === "light" || scheme === "dark") return scheme;
	try {
		const stored = String(localStorage.getItem("rs-appearance-theme") || "").trim().toLowerCase();
		if (stored === "light" || stored === "dark") return stored;
	} catch {}
	return typeof matchMedia === "function" && matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}
function synthesizeViewHref(view, openLinkTarget = "inline") {
	const id = String(view || "").trim().replace(/^#/, "").replace(/^\/+/, "");
	if (!id) return "";
	const target = String(openLinkTarget || "inline").trim().toLowerCase();
	return `/${id}?shell=environment${target === "native-window" || target === "native" || target === "window" ? "&native=1" : ""}&view=${encodeURIComponent(id)}`;
}
/** WHY: Coerce fest refs / odd wrappers into a plain string for form controls. */
function asDraftText(value, fallback = "") {
	if (value == null) return fallback;
	if (typeof value === "object" && value !== null && "value" in value) {
		const inner = value.value;
		if (inner == null) return fallback;
		return String(inner);
	}
	return String(value) || fallback;
}
function fillTextControl(el, value) {
	if (!el) return;
	el.value = value;
	if (el instanceof HTMLInputElement) el.setAttribute("value", value);
}
var isDefaultViewAction = (action) => action === "open-view";
var isDefaultHrefAction = (action) => action === "open-link";
var setSelectOptions = (select, options, selectedValue, placeholder) => {
	if (!select) return;
	select.innerHTML = "";
	if (placeholder) {
		const placeholderOption = document.createElement("option");
		placeholderOption.value = placeholder.value;
		placeholderOption.textContent = placeholder.label;
		placeholderOption.selected = selectedValue === placeholder.value;
		select.append(placeholderOption);
	}
	for (const option of options) {
		const node = document.createElement("option");
		node.value = option.value;
		node.textContent = option.label;
		node.selected = option.value === selectedValue;
		select.append(node);
	}
	if (selectedValue && !options.some((option) => option.value === selectedValue)) {
		const fallbackOption = document.createElement("option");
		fallbackOption.value = selectedValue;
		fallbackOption.textContent = selectedValue;
		fallbackOption.selected = true;
		select.append(fallbackOption);
	}
	if (selectedValue) select.value = selectedValue;
};
var openShortcutEditor = (options) => {
	const { mode, initial, actionOptions, viewOptions, onSave, onDelete, isViewAction = isDefaultViewAction, isHrefAction = isDefaultHrefAction, isWidgetAction = (action) => action === "widget", registerForBackNavigation = false } = options;
	const modal = document.createElement("dialog");
	modal.className = "speed-dial-editor";
	const theme = resolveEditorTheme();
	modal.dataset.theme = theme;
	modal.innerHTML = `
        <form class="speed-dial-editor__form" data-theme="${theme}" autocomplete="off">
            <header class="modal-header">
                <h2 class="modal-title">${mode === "create" ? "Create shortcut" : "Edit shortcut"}</h2>
                <p class="modal-description">Configure quick access tiles for frequently used views or links.</p>
            </header>
            <div class="modal-fields">
                <div class="modal-field">
                    <label for="sd-edit-label">Label</label>
                    <input id="sd-edit-label" name="label" type="text" minlength="1" required />
                </div>
                <div class="modal-field">
                    <label for="sd-edit-icon-display">Icon display</label>
                    <select id="sd-edit-icon-display" name="iconDisplay">
                        ${ICON_DISPLAY_OPTIONS.map((o) => `<option value="${o.value}">${o.label}</option>`).join("")}
                    </select>
                </div>
                <div class="modal-field" data-field="icon-glyph">
                    <label for="sd-edit-icon">Icon (Phosphor name)</label>
                    <input id="sd-edit-icon" name="icon" type="text" placeholder="phosphor icon name" />
                </div>
                <div class="modal-field" data-field="icon-url">
                    <label for="sd-edit-icon-url">Icon resource</label>
                    <div class="sd-icon-resource-row">
                        <input id="sd-edit-icon-url" name="iconUrl" type="text" inputmode="url" autocomplete="off" placeholder="URL, data:, or android-icon:…" />
                        <button type="button" class="btn secondary sd-icon-resource-pick" data-action="pick-icon" title="Pick alternative icon" aria-label="Pick alternative icon">
                            <ui-icon icon="squares-four" icon-style="duotone" aria-hidden="true"></ui-icon>
                        </button>
                        <button type="button" class="btn secondary sd-icon-resource-pick" data-action="pick-photo" title="Use photo / avatar" aria-label="Use photo or avatar">
                            <ui-icon icon="user-circle" icon-style="duotone" aria-hidden="true"></ui-icon>
                        </button>
                    </div>
                </div>
                <div class="modal-field">
                    <label for="sd-edit-shape">Shape</label>
                    <select id="sd-edit-shape" name="shape">
                        ${TILE_SHAPE_OPTIONS.map((o) => `<option value="${o.value}">${o.label}</option>`).join("")}
                    </select>
                </div>
                <div class="modal-field">
                    <label for="sd-edit-icon-scale">Icon scale (inside plate)</label>
                    <select id="sd-edit-icon-scale" name="iconScale">
                        ${ICON_BITMAP_SCALE_OPTIONS.map((o) => `<option value="${o.value}">${o.label}</option>`).join("")}
                    </select>
                </div>
                <div class="modal-field">
                    <label for="sd-edit-action">Action</label>
                    <select id="sd-edit-action" name="action"></select>
                </div>
                <div class="modal-field" data-field="view">
                    <label for="sd-edit-view">View</label>
                    <select id="sd-edit-view" name="view"></select>
                </div>
                <div class="modal-field" data-field="href">
                    <label for="sd-edit-href">Link</label>
                    <input id="sd-edit-href" name="href" type="text" inputmode="url" autocomplete="off" placeholder="/settings?native=1, /workcenter, or https://…" />
                </div>
                <div class="modal-field" data-field="open-link-target">
                    <label for="sd-edit-open-target">Open link in</label>
                    <select id="sd-edit-open-target" name="openLinkTarget">
                        <option value="inline">Open Inline (iframe window, same tab)</option>
                        <option value="external-app">Open in app (Android chooser)</option>
                        <option value="native-window">Native window (new browser window)</option>
                        <option value="new-tab">Open in new tab</option>
                    </select>
                </div>
                <div class="modal-field" data-field="widget-kind">
                    <label for="sd-edit-widget-kind">Widget</label>
                    <select id="sd-edit-widget-kind" name="widgetKind">
                        <option value="clock">Clock</option>
                        <option value="search">Search</option>
                        <option value="android">Android</option>
                    </select>
                </div>
                <div class="modal-field" data-field="span">
                    <label for="sd-edit-span-cols">Size (columns × rows)</label>
                    <div class="sd-icon-resource-row">
                        <input id="sd-edit-span-cols" name="spanCols" type="number" min="1" max="8" step="1" />
                        <input id="sd-edit-span-rows" name="spanRows" type="number" min="1" max="8" step="1" />
                    </div>
                </div>
                <div class="modal-field" data-field="clock-format">
                    <label for="sd-edit-clock-format">Clock format</label>
                    <select id="sd-edit-clock-format" name="clockFormat">
                        <option value="24h">24-hour</option>
                        <option value="12h">12-hour</option>
                    </select>
                </div>
                <div class="modal-field" data-field="search-url">
                    <label for="sd-edit-search-url">Search URL (%s = query)</label>
                    <input id="sd-edit-search-url" name="searchUrl" type="url" placeholder="https://www.google.com/search?q=%s" />
                </div>
                <div class="modal-field">
                    <label for="sd-edit-description">Description</label>
                    <textarea id="sd-edit-description" name="description" rows="2" placeholder="Optional description"></textarea>
                </div>
            </div>
            <div class="modal-actions" role="group" aria-label="Shortcut actions">
                ${mode === "edit" ? "<button type=\"button\" data-action=\"delete\" class=\"btn danger\">Delete</button>" : "<span class=\"modal-actions-spacer\" aria-hidden=\"true\"></span>"}
                <button type="button" data-action="cancel" class="btn secondary">Cancel</button>
                <button type="submit" class="btn save">Save</button>
            </div>
        </form>
    `;
	const form = modal.querySelector("form");
	const actions = form?.querySelector(".modal-actions");
	if (actions) {
		actions.style.setProperty("display", "grid", "important");
		actions.style.setProperty("grid-template-columns", "1fr auto auto", "important");
		actions.style.setProperty("align-items", "center", "important");
		actions.style.setProperty("gap", "0.45rem", "important");
		actions.style.setProperty("flex-wrap", "nowrap", "important");
	}
	const fields = form?.querySelector(".modal-fields");
	const labelInput = form?.querySelector("input[name=\"label\"]");
	const iconInput = form?.querySelector("input[name=\"icon\"]");
	const iconDisplaySelect = form?.querySelector("select[name=\"iconDisplay\"]");
	const iconUrlInput = form?.querySelector("input[name=\"iconUrl\"]");
	const shapeSelect = form?.querySelector("select[name=\"shape\"]");
	const iconScaleSelect = form?.querySelector("select[name=\"iconScale\"]");
	const actionSelect = form?.querySelector("select[name=\"action\"]");
	const viewSelect = form?.querySelector("select[name=\"view\"]");
	const hrefInput = form?.querySelector("input[name=\"href\"]");
	const openLinkTargetSelect = form?.querySelector("select[name=\"openLinkTarget\"]");
	const descriptionInput = form?.querySelector("textarea[name=\"description\"]");
	const viewField = form?.querySelector("[data-field=\"view\"]");
	const hrefField = form?.querySelector("[data-field=\"href\"]");
	const openLinkTargetField = form?.querySelector("[data-field=\"open-link-target\"]");
	const iconGlyphField = form?.querySelector("[data-field=\"icon-glyph\"]");
	const iconUrlField = form?.querySelector("[data-field=\"icon-url\"]");
	const widgetKindField = form?.querySelector("[data-field=\"widget-kind\"]");
	const spanField = form?.querySelector("[data-field=\"span\"]");
	const clockFormatField = form?.querySelector("[data-field=\"clock-format\"]");
	const searchUrlField = form?.querySelector("[data-field=\"search-url\"]");
	const widgetKindSelect = form?.querySelector("select[name=\"widgetKind\"]");
	const spanColsInput = form?.querySelector("input[name=\"spanCols\"]");
	const spanRowsInput = form?.querySelector("input[name=\"spanRows\"]");
	const clockFormatSelect = form?.querySelector("select[name=\"clockFormat\"]");
	const searchUrlInput = form?.querySelector("input[name=\"searchUrl\"]");
	const packageNameOf = () => String(initial.packageName || "").trim();
	const pageUrlOf = () => {
		const fromHref = String(hrefInput?.value || "").trim();
		if (/^https?:\/\//i.test(fromHref)) return fromHref;
		const fromInitial = String(initial.href || "").trim();
		return /^https?:\/\//i.test(fromInitial) ? fromInitial : "";
	};
	if (iconUrlField && iconUrlInput) attachIconResourcePickButton(iconUrlField, iconUrlInput, {
		packageName: packageNameOf,
		pageUrl: pageUrlOf,
		theme
	});
	const labelValue = asDraftText(initial.label, "New shortcut");
	const iconValue = asDraftText(initial.icon, "sparkle");
	const iconUrlValue = asDraftText(initial.iconUrl, "");
	const hrefValue = asDraftText(initial.href, "");
	const descriptionValue = asDraftText(initial.description, "");
	const actionValue = asDraftText(initial.action, "open-view");
	const viewValue = asDraftText(initial.view, "");
	const shapeVal = asDraftText(initial.shape, "squircle").toLowerCase();
	const iconDisplayVal = normalizeIconDisplay(initial.iconDisplay) || "glyph";
	const iconScaleVal = normalizeItemIconBitmapScale(initial.iconScale);
	const olt = asDraftText(initial.openLinkTarget, defaultOpenLinkTargetForHref(initial.href)).toLowerCase();
	const widgetKindVal = asDraftText(initial.widgetKind, "clock").toLowerCase();
	if (widgetKindSelect) {
		if (widgetKindVal !== "android") widgetKindSelect.querySelector("option[value=\"android\"]")?.remove();
		widgetKindSelect.value = widgetKindVal === "search" || widgetKindVal === "android" ? widgetKindVal : "clock";
	}
	if (spanColsInput) spanColsInput.value = String(Math.max(1, Math.min(8, Number(initial.spanCols) || 1)));
	if (spanRowsInput) spanRowsInput.value = String(Math.max(1, Math.min(8, Number(initial.spanRows) || 1)));
	if (clockFormatSelect) clockFormatSelect.value = String(initial.clockFormat || "24h").toLowerCase() === "12h" ? "12h" : "24h";
	fillTextControl(searchUrlInput, asDraftText(initial.searchUrl, ""));
	fillTextControl(labelInput, labelValue);
	fillTextControl(iconInput, iconValue);
	fillTextControl(iconUrlInput, iconUrlValue);
	if (iconDisplaySelect) iconDisplaySelect.value = iconDisplayVal;
	if (shapeSelect) shapeSelect.value = isTileShapeValue(shapeVal) ? shapeVal : "squircle";
	if (iconScaleSelect) iconScaleSelect.value = iconScaleVal;
	if (openLinkTargetSelect) openLinkTargetSelect.value = olt === "native-window" || olt === "native" || olt === "window" ? "native-window" : olt === "new-tab" || olt === "tab" || olt === "browser" || olt === "browser-tab" ? "new-tab" : olt === "external-app" || olt === "app" || olt === "chooser" || olt === "open-with" || olt === "open-in-app" ? "external-app" : "inline";
	if (hrefInput) {
		fillTextControl(hrefInput, hrefValue);
		const autoHref = synthesizeViewHref(viewValue, openLinkTargetSelect?.value || olt);
		if (autoHref) hrefInput.placeholder = `Auto: ${autoHref}`;
	}
	fillTextControl(descriptionInput, descriptionValue);
	setSelectOptions(actionSelect, actionOptions, actionValue);
	setSelectOptions(viewSelect, viewOptions, viewValue, {
		value: "",
		label: "Choose view"
	});
	const currentOpenTarget = () => String(openLinkTargetSelect?.value || olt || "inline");
	const syncFieldVisibility = () => {
		const action = String(actionSelect?.value || "");
		const widgetOn = isWidgetAction(action);
		const kind = String(widgetKindSelect?.value || widgetKindVal || "clock");
		if (viewField) viewField.hidden = !isViewAction(action) || widgetOn;
		if (hrefField) hrefField.hidden = !isHrefAction(action) || widgetOn;
		if (openLinkTargetField) openLinkTargetField.hidden = widgetOn || !(action === "open-link" || isHrefAction(action));
		const toggleField = (node, show) => {
			if (!node) return;
			if (show) node.removeAttribute("hidden");
			else node.setAttribute("hidden", "");
		};
		toggleField(widgetKindField, widgetOn);
		toggleField(spanField, widgetOn);
		toggleField(clockFormatField, widgetOn && kind === "clock");
		toggleField(searchUrlField, widgetOn && kind === "search");
		const display = normalizeIconDisplay(iconDisplaySelect?.value) || "glyph";
		if (iconGlyphField) {
			if (display === "glyph") iconGlyphField.removeAttribute("hidden");
			else iconGlyphField.setAttribute("hidden", "");
		}
		if (iconUrlField) {
			if (display === "glyph") iconUrlField.setAttribute("hidden", "");
			else iconUrlField.removeAttribute("hidden");
		}
		if (action === "open-link" && hrefInput && !String(hrefInput.value || "").trim()) {
			const fromView = synthesizeViewHref(String(viewSelect?.value || viewValue || ""), currentOpenTarget());
			if (fromView) hrefInput.value = fromView;
		}
		const autoHref = synthesizeViewHref(String(viewSelect?.value || viewValue || ""), currentOpenTarget());
		if (hrefInput && autoHref) hrefInput.placeholder = `Auto: ${autoHref}`;
	};
	viewSelect?.addEventListener("change", () => {
		const autoHref = synthesizeViewHref(String(viewSelect?.value || ""), currentOpenTarget());
		if (hrefInput && autoHref) hrefInput.placeholder = `Auto: ${autoHref}`;
	});
	openLinkTargetSelect?.addEventListener("change", syncFieldVisibility);
	let closed = false;
	let unregisterBackNav = null;
	const closeModal = () => {
		if (closed) return;
		closed = true;
		unregisterBackNav?.();
		unregisterBackNav = null;
		try {
			if (modal.open) modal.close();
		} catch {}
		modal.remove();
	};
	actionSelect?.addEventListener("change", syncFieldVisibility);
	widgetKindSelect?.addEventListener("change", syncFieldVisibility);
	iconDisplaySelect?.addEventListener("change", () => {
		if (normalizeIconDisplay(iconDisplaySelect.value) === "glyph") {
			if (normalizeItemIconBitmapScale(iconScaleSelect?.value) === "auto" && iconScaleSelect) iconScaleSelect.value = "compact";
		}
		syncFieldVisibility();
	});
	syncFieldVisibility();
	modal.addEventListener("cancel", (event) => {
		event.preventDefault();
		closeModal();
	});
	modal.addEventListener("click", (event) => {
		if (event.target === modal) closeModal();
	});
	form?.addEventListener("pointerdown", (event) => {
		event.stopPropagation();
	}, true);
	form?.addEventListener("click", (event) => {
		const target = event.target;
		const action = target?.closest?.("[data-action]")?.getAttribute?.("data-action") || target?.dataset?.action || "";
		if (action === "cancel") {
			event.preventDefault();
			closeModal();
			return;
		}
		if (action === "delete" && mode === "edit") {
			event.preventDefault();
			onDelete?.();
			closeModal();
		}
	});
	form?.addEventListener("submit", (event) => {
		event.preventDefault();
		onSave({
			label: String(labelInput?.value || "").trim() || "Item",
			icon: String(iconInput?.value || "").trim() || "sparkle",
			action: String(actionSelect?.value || "open-view"),
			view: String(viewSelect?.value || "").trim(),
			href: String(hrefInput?.value || "").trim(),
			description: String(descriptionInput?.value || "").trim(),
			shape: String(shapeSelect?.value || "squircle").toLowerCase(),
			iconDisplay: normalizeIconDisplay(iconDisplaySelect?.value) || "glyph",
			iconUrl: String(iconUrlInput?.value || "").trim(),
			iconScale: normalizeItemIconBitmapScale(iconScaleSelect?.value),
			widgetKind: String(widgetKindSelect?.value || "clock"),
			spanCols: Math.max(1, Math.min(8, Number(spanColsInput?.value) || 1)),
			spanRows: Math.max(1, Math.min(8, Number(spanRowsInput?.value) || 1)),
			clockFormat: String(clockFormatSelect?.value || "24h"),
			searchUrl: String(searchUrlInput?.value || "").trim(),
			openLinkTarget: (() => {
				const v = String(openLinkTargetSelect?.value || defaultOpenLinkTargetForHref(hrefInput?.value)).toLowerCase();
				if (v === "native-window" || v === "native" || v === "window") return "native-window";
				if (v === "new-tab" || v === "tab" || v === "browser") return "new-tab";
				if (v === "external-app" || v === "app" || v === "chooser" || v === "open-with" || v === "open-in-app") return "external-app";
				return "inline";
			})()
		});
		closeModal();
	});
	if (registerForBackNavigation) unregisterBackNav = registerModal(modal, void 0, closeModal);
	modal.style.setProperty("color-scheme", theme === "light" ? "light only" : "dark only", "important");
	form?.style.setProperty("color-scheme", theme === "light" ? "light only" : "dark only", "important");
	form?.style.setProperty("pointer-events", "auto", "important");
	form?.style.setProperty("contain", "none", "important");
	form?.style.setProperty("content-visibility", "visible", "important");
	form?.querySelectorAll("input, select, textarea, button").forEach((node) => {
		const el = node;
		el.style.setProperty("pointer-events", "auto", "important");
		el.style.setProperty("position", "relative", "important");
		el.style.setProperty("z-index", "1", "important");
	});
	document.body.append(modal);
	try {
		modal.showModal();
	} catch {
		modal.setAttribute("open", "");
		modal.style.setProperty("position", "fixed", "important");
		modal.style.setProperty("inset", "0", "important");
		modal.style.setProperty("z-index", "2147483646", "important");
	}
	requestAnimationFrame(() => {
		if (fields) fields.scrollTop = 0;
		fillTextControl(labelInput, labelValue);
		fillTextControl(iconInput, iconValue);
		fillTextControl(descriptionInput, descriptionValue);
		if (actionSelect && actionValue) actionSelect.value = actionValue;
		if (viewSelect && viewValue) viewSelect.value = viewValue;
		labelInput?.focus({ preventScroll: true });
	});
};
//#endregion
//#region ../../modules/views/home-view/src/ts/core-rail.ts
var RAIL_OPEN_KEY = "cw::workspace::speed-dial::core-rail-open";
/** Views that belong on the rail — not the freeform Speed Dial grid. */
var CORE_RAIL_VIEWS = [
	"apps",
	"explorer",
	"settings",
	"viewer"
];
var isCoreRailView = (view) => CORE_RAIL_VIEWS.includes(view);
var getCoreRailEntries = () => {
	try {
		if (String(document.documentElement?.dataset?.cwspSku || "") === "launcher") return [
			{
				view: "apps",
				label: "Apps",
				icon: "squares-four"
			},
			{
				view: "explorer",
				label: "Explorer",
				icon: "folder"
			},
			{
				view: "viewer",
				label: "Documents",
				icon: "books"
			},
			{
				view: "workcenter",
				label: "Process",
				icon: "magic-wand"
			},
			{
				view: "network",
				label: "Transfer",
				icon: "drone"
			},
			{
				view: "settings",
				label: "Settings",
				icon: "gear-six"
			}
		];
	} catch {}
	return NAVIGATION_SHORTCUTS.filter((s) => isCoreRailView(String(s.view || ""))).map((s) => ({
		view: String(s.view),
		label: String(s.label || s.view),
		icon: String(s.icon || "sparkle")
	}));
};
var isCoreRailOpen = () => {
	try {
		const v = localStorage.getItem(RAIL_OPEN_KEY);
		if (v == null || !String(v).trim()) return false;
		return v === "1" || v === "true" || v === "open";
	} catch {
		return false;
	}
};
var setCoreRailOpen = (open) => {
	try {
		localStorage.setItem(RAIL_OPEN_KEY, open ? "1" : "0");
	} catch {}
};
/**
* WHY: Legacy boot used to inject Explorer/Settings/Markdown onto the grid.
* Move those tiles off the desktop into the rail so the grid stays user shortcuts.
*/
var migrateCoreViewShortcutsOffGrid = () => {
	stripCoreRailTilesFromGrid({ markDirty: true });
};
var runCoreView = (view) => {
	if (view === "apps") {
		const home = globalThis.__CWSP_LAUNCHER_HOME__;
		if (typeof home?.openAppMenuPage === "function") {
			home.openAppMenuPage();
			return;
		}
		if (typeof home?.openAppMenu === "function") {
			home.openAppMenu();
			return;
		}
	}
	tryLaunchSiblingView(view).then((launched) => {
		if (launched) return;
		runCoreViewInProcess(view);
	});
};
var runCoreViewInProcess = (view) => {
	const opener = getSpeedDialViewOpener();
	const registry = getSpeedDialActionRegistry();
	const action = registry.get(`open-view-${view}`) || registry.get("open-view");
	try {
		action?.({
			id: `rail-${view}`,
			items: speedDialItems,
			meta: speedDialMeta,
			viewMaker: opener
		}, {
			view,
			type: view,
			label: view
		});
	} catch (e) {
		console.warn("[core-rail] open failed", view, e);
	}
};
/** Mount collapsible right rail into the Speed Dial root. */
function mountCoreRail(host) {
	if (!host || host.querySelector(".speed-dial-core-rail")) return () => void 0;
	migrateCoreViewShortcutsOffGrid();
	let open = isCoreRailOpen();
	const rail = document.createElement("aside");
	rail.className = "speed-dial-core-rail";
	rail.setAttribute("aria-label", "Native apps");
	rail.toggleAttribute("data-open", open);
	const toggle = document.createElement("button");
	toggle.type = "button";
	toggle.className = "speed-dial-core-rail__toggle";
	toggle.title = open ? "Hide apps" : "Show apps";
	toggle.setAttribute("aria-expanded", open ? "true" : "false");
	toggle.setAttribute("aria-controls", "speed-dial-core-rail-panel");
	toggle.innerHTML = "<ui-icon icon=\"caret-left\" icon-style=\"duotone\" aria-hidden=\"true\"></ui-icon>";
	const panel = document.createElement("div");
	panel.id = "speed-dial-core-rail-panel";
	panel.className = "speed-dial-core-rail__panel";
	panel.setAttribute("role", "toolbar");
	const paintEntries = () => {
		panel.replaceChildren();
		for (const entry of getCoreRailEntries()) {
			const btn = document.createElement("button");
			btn.type = "button";
			btn.className = "speed-dial-core-rail__item";
			btn.title = entry.label;
			btn.setAttribute("aria-label", entry.label);
			btn.dataset.view = entry.view;
			btn.innerHTML = `<ui-icon icon="${entry.icon}" icon-style="duotone" aria-hidden="true"></ui-icon><span class="speed-dial-core-rail__label">${entry.label}</span>`;
			btn.addEventListener("click", (ev) => {
				ev.preventDefault();
				ev.stopPropagation();
				runCoreView(entry.view);
			});
			panel.append(btn);
		}
	};
	paintEntries();
	const syncOpen = () => {
		rail.toggleAttribute("data-open", open);
		toggle.setAttribute("aria-expanded", open ? "true" : "false");
		toggle.title = open ? "Hide apps" : "Show apps";
		const icon = toggle.querySelector("ui-icon");
		if (icon) icon.setAttribute("icon", open ? "caret-right" : "caret-left");
		setCoreRailOpen(open);
	};
	toggle.addEventListener("click", (ev) => {
		ev.preventDefault();
		ev.stopPropagation();
		open = !open;
		syncOpen();
	});
	syncOpen();
	rail.append(toggle, panel);
	host.append(rail);
	const isRailKeepOpenTarget = (ev) => {
		const path = typeof ev.composedPath === "function" ? ev.composedPath() : [];
		for (const n of path) {
			if (n === rail || n instanceof Node && rail.contains(n)) return true;
			if (n instanceof Element && n.closest?.("dialog, .cw-context-menu-layer, .env-shell-app-menu, .speed-dial-editor, .sd-icon-picker")) return true;
		}
		return false;
	};
	const onDocPointer = (ev) => {
		if (!open) return;
		if (ev.button != null && ev.button !== 0) return;
		if (isRailKeepOpenTarget(ev)) return;
		open = false;
		syncOpen();
	};
	document.addEventListener("pointerdown", onDocPointer, { capture: true });
	return () => {
		document.removeEventListener("pointerdown", onDocPointer, { capture: true });
		rail.remove();
	};
}
//#endregion
//#region ../../modules/views/home-view/src/ts/widgets.ts
var androidBridge = null;
var hasAndroidWidgetBridge = () => {
	if (androidBridge) return true;
	try {
		const c = globalThis.Capacitor;
		return typeof c?.isNativePlatform === "function" && c.isNativePlatform();
	} catch {
		return false;
	}
};
var getSpeedDialWidgetKind = (item) => {
	const meta = getSpeedDialMeta(item.id);
	if (String(meta?.action || item.action || "").toLowerCase() !== "widget") return "";
	const kind = String(meta?.widgetKind || "").toLowerCase();
	if (kind === "clock" || kind === "search" || kind === "android") return kind;
	return "clock";
};
/** Properties used to stamp `widgetKind: clock` on every save — drop that on shortcuts. */
var stripStaleWidgetMetaFromShortcuts = () => {
	let changed = false;
	for (const item of speedDialItems || []) {
		const meta = getSpeedDialMeta(item?.id);
		if (!meta) continue;
		if (String(meta.action || item.action || "").toLowerCase() === "widget") continue;
		if (meta.widgetKind) {
			delete meta.widgetKind;
			changed = true;
		}
		const cols = Number(meta.spanCols);
		const rows = Number(meta.spanRows);
		if (Number.isFinite(cols) && cols > 1 || Number.isFinite(rows) && rows > 1) {
			meta.spanCols = 1;
			meta.spanRows = 1;
			changed = true;
		}
	}
	if (changed) persistSpeedDialMeta();
	return changed;
};
var getAndroidWidgetId = (item) => {
	const meta = getSpeedDialMeta(item.id);
	return Math.max(0, Number(meta?.androidWidgetId) || 0);
};
var pad = (n) => String(n).padStart(2, "0");
var formatWidgetClock = (now = /* @__PURE__ */ new Date(), format = "24h") => {
	const use12 = String(format || "").toLowerCase() === "12h";
	let hours = now.getHours();
	const minutes = pad(now.getMinutes());
	let suffix = "";
	if (use12) {
		suffix = hours >= 12 ? " PM" : " AM";
		hours = hours % 12 || 12;
	}
	return {
		time: `${use12 ? String(hours) : pad(hours)}:${minutes}${suffix}`,
		date: now.toLocaleDateString(void 0, {
			weekday: "short",
			month: "short",
			day: "numeric"
		})
	};
};
var runWidgetSearch = (query, template) => {
	const q = String(query || "").trim();
	if (!q) return;
	const raw = String(template || "").trim();
	const href = raw ? raw.includes("%s") ? raw.replace("%s", encodeURIComponent(q)) : `${raw}${raw.includes("?") ? "&" : "?"}q=${encodeURIComponent(q)}` : `https://www.google.com/search?q=${encodeURIComponent(q)}`;
	try {
		const cap = globalThis.Capacitor;
		if (typeof cap?.isNativePlatform === "function" && cap.isNativePlatform()) {
			window.open(href, "_blank");
			return;
		}
	} catch {}
	window.open(href, "_blank", "noopener,noreferrer");
};
var ensureWidgetChrome = (el) => {
	if (!el.querySelector(".sd-widget-chrome")) {
		const chrome = document.createElement("div");
		chrome.className = "sd-widget-chrome";
		chrome.title = "Move widget";
		el.append(chrome);
	}
	if (!el.querySelector(".sd-widget-resize")) {
		const handle = document.createElement("button");
		handle.type = "button";
		handle.className = "sd-widget-resize";
		handle.title = "Resize widget";
		handle.setAttribute("aria-label", "Resize widget");
		handle.addEventListener("pointerdown", (ev) => ev.stopPropagation());
		el.append(handle);
	}
};
var createClockWidgetNode = (item) => {
	const el = document.createElement("div");
	el.className = "sd-widget sd-widget--clock";
	el.setAttribute("data-widget", "clock");
	const time = document.createElement("div");
	time.className = "sd-widget__time";
	const date = document.createElement("div");
	date.className = "sd-widget__date";
	const paint = () => {
		const format = String(getSpeedDialMeta(item?.id)?.clockFormat || "24h");
		const now = formatWidgetClock(/* @__PURE__ */ new Date(), format);
		time.textContent = now.time;
		date.textContent = now.date;
	};
	paint();
	const timer = window.setInterval(paint, 1e3);
	el.append(time, date);
	const stop = () => clearInterval(timer);
	el.addEventListener("remove", stop);
	return el;
};
var createSearchWidgetNode = (item) => {
	const el = document.createElement("form");
	el.className = "sd-widget sd-widget--search";
	el.setAttribute("data-widget", "search");
	const input = document.createElement("input");
	input.type = "search";
	input.className = "sd-widget__search";
	input.placeholder = "Search";
	input.autocomplete = "off";
	input.setAttribute("aria-label", "Search");
	el.addEventListener("submit", (ev) => {
		ev.preventDefault();
		ev.stopPropagation();
		runWidgetSearch(input.value, String(getSpeedDialMeta(item?.id)?.searchUrl || ""));
	});
	input.addEventListener("pointerdown", (ev) => ev.stopPropagation());
	el.append(input);
	return el;
};
var createAndroidWidgetNode = (item) => {
	const meta = getSpeedDialMeta(item.id);
	const el = document.createElement("div");
	el.className = "sd-widget sd-widget--android";
	el.setAttribute("data-widget", "android");
	el.setAttribute("data-android-widget", String(getAndroidWidgetId(item) || ""));
	const preview = String(meta?.iconUrl || meta?.preview || "").trim();
	if (preview) {
		const img = document.createElement("img");
		img.className = "sd-widget__preview";
		img.alt = "";
		img.src = preview;
		el.append(img);
	}
	return el;
};
var createWidgetNode = (kind, item) => {
	if (kind === "search") return createSearchWidgetNode(item);
	if (kind === "android" && item) return createAndroidWidgetNode(item);
	return createClockWidgetNode(item);
};
var decorateWidgetHost = (host, _kind) => {
	ensureWidgetChrome(host);
	host.dataset.widgetChromeBound = "1";
};
var bindWidgetResize = (host, item, hooks) => {
	if (host.dataset.widgetResizeBound === "1") return;
	const handle = host.querySelector(".sd-widget-resize");
	if (!handle) return;
	host.dataset.widgetResizeBound = "1";
	let pointerId = null;
	let start = null;
	const readVisualCellSize = () => {
		const rect = host.getBoundingClientRect();
		const cs = getComputedStyle(host);
		const [sx, sy] = normalizeSpan([Number(host.style.getPropertyValue("--cell-span-x") || cs.getPropertyValue("--cell-span-x")) || 1, Number(host.style.getPropertyValue("--cell-span-y") || cs.getPropertyValue("--cell-span-y")) || 1]);
		return {
			cellW: Math.max(16, rect.width / sx),
			cellH: Math.max(16, rect.height / sy)
		};
	};
	handle.addEventListener("pointerdown", (ev) => {
		if (ev.button !== 0) return;
		ev.preventDefault();
		ev.stopPropagation();
		pointerId = ev.pointerId;
		handle.setPointerCapture?.(ev.pointerId);
		const meta = getSpeedDialMeta(item.id);
		const size = readVisualCellSize();
		start = {
			x: ev.clientX,
			y: ev.clientY,
			span: getItemSpan(item.id),
			cellW: size.cellW,
			cellH: size.cellH
		};
		host.dataset.resizing = "1";
		if (meta) {
			meta.spanCols = start.span[0];
			meta.spanRows = start.span[1];
		}
	});
	handle.addEventListener("pointermove", (ev) => {
		if (pointerId !== ev.pointerId || !start) return;
		ev.preventDefault();
		ev.stopPropagation();
		const root = host.closest(".speed-dial-root");
		const orient = normalizeOrient(root?.dataset.orient || root?.style.getPropertyValue("--orient"));
		const [visX0, visY0] = logicalToVisualSpan(start.span, orient);
		const nextVisX = Math.max(1, Math.min(8, visX0 + Math.round((ev.clientX - start.x) / start.cellW)));
		const nextVisY = Math.max(1, Math.min(8, visY0 + Math.round((ev.clientY - start.y) / start.cellH)));
		const [cols, rows] = logicalToVisualSpan([nextVisX, nextVisY], orient);
		const current = getItemSpan(item.id);
		if (current[0] === cols && current[1] === rows) return;
		setItemSpan(item.id, [cols, rows]);
		hooks.refresh();
	});
	const endResize = (ev) => {
		if (pointerId !== ev.pointerId) return;
		pointerId = null;
		start = null;
		delete host.dataset.resizing;
		handle.releasePointerCapture?.(ev.pointerId);
		persistSpeedDialMeta();
		hooks.refresh();
	};
	handle.addEventListener("pointerup", endResize);
	handle.addEventListener("pointercancel", endResize);
};
var releaseAndroidWidget = (item) => {
	const id = getAndroidWidgetId(item);
	if (!id || !androidBridge?.widgetDelete) return;
	androidBridge.widgetDelete(id);
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
var closeDialog = (dialog) => {
	try {
		dialog.close();
	} catch {}
	dialog.remove();
};
var showProviderPicker = async () => {
	if (!androidBridge?.widgetList || !androidBridge.widgetBind) return null;
	let providers = [];
	try {
		providers = await androidBridge.widgetList();
	} catch (e) {
		console.warn("[widgets] list failed", e);
		return null;
	}
	if (!providers.length) return null;
	return new Promise((resolve) => {
		const dialog = document.createElement("dialog");
		dialog.className = "sd-widget-picker";
		const title = document.createElement("h3");
		title.textContent = "Android widgets";
		const list = document.createElement("div");
		list.className = "sd-widget-picker__list";
		const cancel = document.createElement("button");
		cancel.type = "button";
		cancel.className = "btn";
		cancel.textContent = "Cancel";
		const finish = (value) => {
			closeDialog(dialog);
			resolve(value);
		};
		cancel.addEventListener("click", () => finish(null));
		for (const provider of providers) {
			const btn = document.createElement("button");
			btn.type = "button";
			btn.className = "sd-widget-picker__item";
			const size = `${provider.spanCols}×${provider.spanRows}`;
			btn.innerHTML = provider.preview ? `<img alt="" src="${provider.preview}" /><span>${provider.label} · ${size}</span>` : `<span>${provider.label} · ${size}</span>`;
			btn.addEventListener("click", async () => {
				btn.disabled = true;
				try {
					const bound = await androidBridge.widgetBind(provider.provider);
					finish(bound);
				} catch (e) {
					console.warn("[widgets] bind failed", e);
					finish(null);
				}
			});
			list.append(btn);
		}
		dialog.append(title, list, cancel);
		document.body.append(dialog);
		try {
			dialog.showModal();
		} catch {
			finish(null);
		}
	});
};
/** Clock / Search on CRX + web; Android list on Capacitor. */
var openWidgetPicker = async () => new Promise((resolve) => {
	const dialog = document.createElement("dialog");
	dialog.className = "sd-widget-picker";
	const title = document.createElement("h3");
	title.textContent = "Add widget";
	const list = document.createElement("div");
	list.className = "sd-widget-picker__list";
	const cancel = document.createElement("button");
	cancel.type = "button";
	cancel.className = "btn";
	cancel.textContent = "Cancel";
	const finish = (value) => {
		closeDialog(dialog);
		resolve(value);
	};
	cancel.addEventListener("click", () => finish(null));
	for (const entry of [{
		kind: "clock",
		label: "Clock · 2×1"
	}, {
		kind: "search",
		label: "Search · 2×1"
	}]) {
		const btn = document.createElement("button");
		btn.type = "button";
		btn.className = "sd-widget-picker__item";
		btn.textContent = entry.label;
		btn.addEventListener("click", () => finish({ kind: entry.kind }));
		list.append(btn);
	}
	if (hasAndroidWidgetBridge() && androidBridge?.widgetList) {
		const btn = document.createElement("button");
		btn.type = "button";
		btn.className = "sd-widget-picker__item";
		btn.textContent = "Android widgets…";
		btn.addEventListener("click", async () => {
			closeDialog(dialog);
			const bound = await showProviderPicker();
			resolve(bound ? {
				kind: "android",
				bound
			} : null);
		});
		list.append(btn);
	}
	dialog.append(title, list, cancel);
	document.body.append(dialog);
	try {
		dialog.showModal();
	} catch {
		finish(null);
	}
});
//#endregion
//#region ../../modules/views/home-view/src/ts/workspace-pages.ts
var WORKSPACES_ROOT = "/user/workspaces/";
var WORKSPACE_PAGE_EVENT = "cwsp:workspace-page";
var CATALOG_KEY = "cw::workspace::pages";
var SIDE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
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
var snapshotIds = (snap) => new Set((snap?.items || []).map((row) => String(row?.id || "")).filter(Boolean));
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
var nextSideId = (pages) => {
	const used = new Set(pages.map((p) => p.id));
	for (const ch of SIDE_LETTERS) {
		const id = `side-${ch}`;
		if (!used.has(id)) return id;
	}
	return `side-${Date.now().toString(36)}`;
};
/** Best-effort Explorer tree: /user/workspaces/<id>/workspace.json */
var ensureWorkspaceExplorerDir = async (page) => {
	try {
		const backend = resolveFsBackend("/user/");
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
var addWorkspacePage = (label) => {
	const cat = readCatalog();
	const id = nextSideId(cat.pages);
	const page = {
		id,
		label: String(label || `Side ${id.slice(-1).toUpperCase()}`).trim() || id,
		path: slugPath(id)
	};
	cat.pages.push(page);
	writeCatalog(cat);
	ensureWorkspaceExplorerDir(page);
	emitPageChange(cat.activeId);
	return page;
};
var renameWorkspacePage = (id, label) => {
	const cat = readCatalog();
	const page = cat.pages.find((p) => p.id === id);
	if (!page) return;
	page.label = String(label || page.label).trim() || page.label;
	writeCatalog(cat);
	ensureWorkspaceExplorerDir(page);
	emitPageChange(cat.activeId);
};
var removeWorkspacePage = (id) => {
	const cat = readCatalog();
	if (cat.pages.length <= 1) return false;
	const idx = cat.pages.findIndex((p) => p.id === id);
	if (idx < 0) return false;
	cat.pages.splice(idx, 1);
	delete cat.snapshots[id];
	if (cat.activeId === id) cat.activeId = cat.pages[Math.max(0, idx - 1)].id;
	writeCatalog(cat);
	emitPageChange(cat.activeId);
	return true;
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
* Clone a shortcut onto another Side without sharing the live id.
* INVARIANT: inactive pages only receive a packed snapshot row — live meta stays on the active grid.
*/
var cloneSpeedDialItemToWorkspace = (item, targetId) => {
	const cat = readCatalog();
	if (!item || !cat.pages.some((page) => page.id === targetId)) return false;
	if (targetId === (cat.activeId || "side-a")) return Boolean(addClonedSpeedDialItem(item));
	const snap = cat.snapshots[targetId] || { items: [] };
	const packed = cloneSpeedDialItemPacked(item);
	packed.cell = findNextFreeCellInSnapshot(snap, packed.cell, [Number(packed.meta?.spanCols) || 1, Number(packed.meta?.spanRows) || 1]);
	snap.items = [...snap.items || [], packed];
	cat.snapshots[targetId] = snap;
	writeCatalog(cat);
	return true;
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
var switchWorkspaceByDelta = (delta) => {
	const cat = readCatalog();
	if (cat.pages.length < 2) return false;
	const idx = Math.max(0, cat.pages.findIndex((p) => p.id === cat.activeId));
	const next = cat.pages[(idx + delta + cat.pages.length) % cat.pages.length];
	return switchWorkspacePage(next.id);
};
/** First boot: treat the current grid as side-a; ensure Explorer folders. */
var bootWorkspacePages = () => {
	const cat = readCatalog();
	const g = globalThis;
	const live = slimSnapshot(captureSpeedDialSnapshot());
	const stored = cat.snapshots[cat.activeId];
	if (!stored) {
		cat.snapshots[cat.activeId] = live;
		writeCatalog(cat);
	} else if (!g.__CWSP_WS_BOOT_APPLIED__) {
		g.__CWSP_WS_BOOT_APPLIED__ = true;
		const storedIds = snapshotIds(stored);
		const liveHasExtra = [...snapshotIds(live)].some((id) => !storedIds.has(id));
		const liveHasItems = (live.items || []).length > 0;
		if (wasSpeedDialUserEdited() || liveHasExtra || liveHasItems) {
			cat.snapshots[cat.activeId] = live;
			writeCatalog(cat);
		} else applySpeedDialSnapshot(stored);
	}
	for (const page of cat.pages) ensureWorkspaceExplorerDir(page);
};
var WORKSPACE_CMD_EVENT = "cwsp:workspace-cmd";
var handleWorkspaceCommand = (cmd, id, label) => {
	if (cmd === "add") addWorkspacePage(label);
	else if (cmd === "prev") switchWorkspaceByDelta(-1);
	else if (cmd === "next") switchWorkspaceByDelta(1);
	else if (cmd === "switch" && id) switchWorkspacePage(id);
	else if (cmd === "rename" && id) renameWorkspacePage(id, String(label || ""));
	else if (cmd === "remove" && id) removeWorkspacePage(id);
};
var bindWorkspacePageHotkeys = () => {
	const g = globalThis;
	if (g.__CWSP_WS_HOTKEYS__) return () => void 0;
	g.__CWSP_WS_HOTKEYS__ = true;
	const onKey = (ev) => {
		if (!(ev.ctrlKey || ev.metaKey) || !ev.altKey) return;
		if (ev.key === "ArrowLeft") {
			ev.preventDefault();
			switchWorkspaceByDelta(-1);
		} else if (ev.key === "ArrowRight") {
			ev.preventDefault();
			switchWorkspaceByDelta(1);
		}
	};
	window.addEventListener("keydown", onKey);
	const onCmd = (ev) => {
		const detail = ev.detail || {};
		handleWorkspaceCommand(String(detail.cmd || ""), detail.id, detail.label);
	};
	window.addEventListener(WORKSPACE_CMD_EVENT, onCmd);
	return () => {
		window.removeEventListener("keydown", onKey);
		window.removeEventListener(WORKSPACE_CMD_EVENT, onCmd);
	};
};
preloadStyle("@layer ui-app-menu{.env-shell-app-menu[data-page]{align-items:stretch;inset:0;justify-items:stretch;padding:0;z-index:calc(var(--env-z-shell-chrome, 2147483000) + 4)}.env-shell-app-menu[data-page] .env-shell-app-menu__panel{block-size:100%;border-radius:0;inline-size:100%;max-block-size:stretch;max-inline-size:stretch;overflow:hidden;overflow-y:auto!important;overscroll-behavior:contain;touch-action:pan-y;-webkit-overflow-scrolling:touch}.env-shell-app-menu__panel>.env-shell-app-menu__grid{align-content:start;align-self:stretch;block-size:max-content;grid-auto-rows:max-content;justify-content:start;max-block-size:max-content;min-block-size:fit-content;overflow:visible;overscroll-behavior:contain;touch-action:pan-y;-webkit-overflow-scrolling:touch}.env-shell-app-menu[data-page] .env-shell-app-menu__grid{column-gap:.45rem;padding-block-end:calc(var(--env-shell-chrome-stack-reserve, 3rem) + env(safe-area-inset-bottom, 0px));row-gap:.85rem}.env-shell-app-menu{align-items:end;box-sizing:border-box;color-scheme:inherit;display:grid;inset-block-end:var(--env-shell-chrome-stack-reserve,3rem);inset-inline:0;justify-items:start;padding:.5rem;padding-inline-start:max(.5rem,env(safe-area-inset-left,0px));pointer-events:none;position:fixed;z-index:calc(var(--env-z-shell-chrome, 2147483000) + 2);--env-app-menu-accent:var(--wf-md-primary,var(--color-primary,#5a9ec8));--env-app-menu-surface:color-mix(in oklab,var(--color-surface-container,--u2-color-mod(var(--base-color,#5a9ec8),960)) 88%,transparent);--env-app-menu-surface-raised:var(\n        --color-surface-container-high,--u2-color-mod(var(--base-color,#5a9ec8),980)\n    );--env-app-menu-ink:var(\n        --color-on-surface,light-dark(--u2-color-mod(var(--base-color,#5a9ec8),900),--u2-color-mod(var(--base-color,#5a9ec8),100))\n    );--env-app-menu-plate:var(\n        --color-primary-container,light-dark(--u2-color-mod(var(--base-color,#5a9ec8),160),--u2-color-mod(var(--base-color,#5a9ec8),820))\n    )}.env-shell-app-menu[hidden]{display:none!important}.env-shell-app-menu__panel{background:var(--env-app-menu-surface);border:1px solid light-dark(color-mix(in oklab,#000 12%,transparent),color-mix(in oklab,#fff 14%,transparent));border-radius:14px;box-shadow:0 20px 48px -20px light-dark(rgba(0,0,0,.22),rgba(0,0,0,.45)),0 2px 8px -2px light-dark(rgba(0,0,0,.12),rgba(0,0,0,.25));color:var(--env-app-menu-ink);display:grid;gap:.75rem;inline-size:min(420px,100vw - 1rem);max-block-size:min(520px,100dvb - var(--env-shell-chrome-stack-reserve,3rem) - 1rem);overflow:hidden;overflow-y:auto!important;overscroll-behavior:contain;padding:.85rem;pointer-events:auto;touch-action:pan-y;-webkit-overflow-scrolling:touch;animation:b .14s cubic-bezier(.22,.8,.3,1);backdrop-filter:blur(22px) saturate(1.35);-webkit-backdrop-filter:blur(22px) saturate(1.35);block-size:fit-content;color-scheme:inherit;grid-template-rows:auto auto minmax(0,1fr);min-block-size:max(60dvb,60cqb)}.env-shell-app-menu__panel[data-layout=start-split]{grid-template-rows:auto auto minmax(0,1fr);inline-size:min(560px,100vw - 1rem);max-block-size:min(580px,100dvb - var(--env-shell-chrome-stack-reserve,3rem) - 1rem)}.env-shell-app-menu__start-body{display:grid;gap:.65rem;grid-template-columns:minmax(9.5rem,.42fr) minmax(0,1fr);max-block-size:100%;min-block-size:12rem;overflow:hidden}.env-shell-app-menu__start-left{background:light-dark(color-mix(in oklab,var(--env-app-menu-accent) 8%,transparent),color-mix(in oklab,var(--env-app-menu-accent) 12%,transparent));border:1px solid light-dark(color-mix(in oklab,var(--env-app-menu-accent) 22%,transparent),color-mix(in oklab,#fff 14%,transparent));border-radius:12px;display:flex;flex-direction:column;gap:.4rem;min-block-size:fit-content;min-inline-size:0;overflow:auto;padding:.45rem}.env-shell-app-menu__start-right{display:grid;gap:.4rem;grid-template-rows:auto minmax(0,1fr);min-block-size:fit-content;min-inline-size:0;overflow:hidden}.env-shell-app-menu__start-heading{flex:0 0 auto;font:600 .72rem/1.2 ui-sans-serif,system-ui,sans-serif;letter-spacing:.04em;opacity:.72;padding-inline:.25rem;text-transform:uppercase}.env-shell-app-menu__start-recent{align-content:start;display:grid;flex:0 0 auto;gap:.2rem;grid-template-columns:1fr}.env-shell-app-menu__start-recent .env-shell-app-menu__tile{align-items:center;gap:.45rem;grid-template-columns:auto minmax(0,1fr);justify-items:start;padding:.35rem .4rem;text-align:start}.env-shell-app-menu__start-recent .env-shell-app-menu__tile-icon{block-size:2.25rem;inline-size:2.25rem;min-block-size:2.25rem;min-inline-size:2.25rem}.env-shell-app-menu__start-recent .env-shell-app-menu__tile-icon ui-icon:not([data-launcher-icon]){block-size:1.5rem!important;inline-size:1.5rem!important;--icon-size:1.5rem;--icon-padding:0px}.env-shell-app-menu__start-recent .env-shell-app-menu__tile-label{font-size:.78rem;-webkit-line-clamp:1;text-align:start}.env-shell-app-menu__start-right .env-shell-app-menu__grid{align-content:start;display:flex;flex-direction:column;flex-wrap:nowrap;gap:.2rem;grid-template-columns:none;min-block-size:fit-content;overflow:auto}.env-shell-app-menu__start-right .env-shell-app-menu__tile{align-items:center;border-radius:10px;box-sizing:border-box;display:grid;gap:.65rem;grid-template-columns:auto minmax(0,1fr);inline-size:100%;justify-items:start;padding:.4rem .55rem;text-align:start}.env-shell-app-menu__start-right .env-shell-app-menu__tile-icon{block-size:2.5rem;inline-size:2.5rem;min-block-size:2.5rem;min-inline-size:2.5rem}.env-shell-app-menu__start-right .env-shell-app-menu__tile-icon ui-icon:not([data-launcher-icon]){block-size:1.75rem!important;inline-size:1.75rem!important;--icon-size:1.75rem;--icon-padding:0px}.env-shell-app-menu__start-right .env-shell-app-menu__tile-label{font:500 .9rem/1.25 ui-sans-serif,system-ui,sans-serif;justify-self:stretch;-webkit-line-clamp:1;text-align:start}.env-shell-app-menu__crumb{align-items:center;display:flex;flex-wrap:wrap;gap:.2rem;min-block-size:1.4rem}.env-shell-app-menu__crumb-item{appearance:none;background:transparent;border:0;border-radius:6px;color:inherit;cursor:pointer;font:600 .78rem/1.2 ui-sans-serif,system-ui,sans-serif;padding:.15rem .35rem}.env-shell-app-menu__crumb-item:hover{background:light-dark(color-mix(in oklab,#000 8%,transparent),color-mix(in oklab,#fff 10%,transparent))}.env-shell-app-menu__crumb-sep{font-size:.85rem;opacity:.45}.env-shell-app-menu__empty--compact{font-size:.75rem;margin:.35rem 0;padding-inline:.25rem;text-align:start}@media (max-width:520px){.env-shell-app-menu__start-body{grid-template-columns:1fr;grid-template-rows:minmax(0,8rem) minmax(0,1fr)}.env-shell-app-menu__start-recent{display:flex;flex-direction:column;overflow:auto}}.env-shell-app-menu__banner{background:color-mix(in oklab,var(--env-app-menu-accent,var(--color-primary,#60cdff)) 14%,transparent);border:1px solid color-mix(in oklab,var(--env-app-menu-accent,var(--color-primary,#60cdff)) 35%,transparent);border-radius:10px;display:grid;gap:.65rem;padding:.65rem .75rem}.env-shell-app-menu__banner[hidden]{display:none!important}.env-shell-app-menu__banner-text{font:500 .9rem/1.35 ui-sans-serif,system-ui,sans-serif;margin:0}.env-shell-app-menu__banner-action{justify-self:start}.env-shell-app-menu__search{background:var(--env-app-menu-surface-raised);border:1px solid light-dark(color-mix(in oklab,#000 12%,transparent),color-mix(in oklab,#fff 14%,transparent));border-radius:10px;box-sizing:border-box;color:inherit;font:400 .9rem/1.2 ui-sans-serif,system-ui,sans-serif;inline-size:100%;inset-block-start:0;padding:.55rem .65rem;position:sticky;z-index:3}.env-shell-app-menu__search[hidden]{display:none!important}.env-shell-app-menu__grid{align-content:start;block-size:max-content;display:grid;gap:.5rem;grid-auto-rows:max-content;grid-template-columns:repeat(auto-fill,minmax(4.5rem,1fr));min-block-size:fit-content;touch-action:pan-y;-webkit-overflow-scrolling:touch;overflow:visible}.env-shell-app-menu__grid[hidden]{display:none!important}.env-shell-app-menu__tile{align-content:start;background:transparent;border:0;border-radius:12px;color:inherit;cursor:pointer;display:grid;flex-shrink:0;gap:.35rem;justify-items:center;min-block-size:fit-content;padding:.45rem .25rem;text-align:center;touch-action:pan-y;user-select:none}.env-shell-app-menu__tile:focus-visible,.env-shell-app-menu__tile:hover{background:color-mix(in oklab,var(--env-app-menu-accent,var(--color-primary,#60cdff)) 12%,transparent);outline:none}.env-shell-app-menu__tile--dragging{opacity:.45}html[data-app-menu-dragging] .env-shell-app-menu{pointer-events:none}html[data-app-menu-dragging] .env-shell-app-menu__panel{opacity:0;visibility:hidden}.env-shell-app-menu__drag-ghost{display:grid;gap:.35rem;inline-size:4.5rem;inset:0 auto auto 0;justify-items:center;pointer-events:none;position:fixed;will-change:transform;z-index:calc(var(--env-z-shell-chrome, 2147483000) + 8)}.env-shell-app-menu__drag-ghost-icon{aspect-ratio:1/1;backdrop-filter:blur(16px) saturate(1.35);-webkit-backdrop-filter:blur(16px) saturate(1.35);background:light-dark(color-mix(in oklab,#e8eaed 72%,var(--wf-md-primary,var(--color-primary,#60cdff)) 28%),color-mix(in oklab,#111827 72%,var(--wf-md-primary,var(--color-primary,#60cdff)) 28%));block-size:3rem;border:none;border-radius:50%;box-shadow:0 8px 24px -8px rgba(0,0,0,.55);box-sizing:border-box;contain:layout style;display:grid;inline-size:3rem;overflow:hidden;padding:0;place-content:center;place-items:center;position:relative}@supports (corner-shape:round){.env-shell-app-menu__drag-ghost-icon{corner-shape:round}}.env-shell-app-menu__drag-ghost-icon img[data-icon-pending],.env-shell-app-menu__drag-ghost-icon img[data-launcher-icon]:not([src]),.env-shell-app-menu__drag-ghost-icon ui-icon[data-icon-pending]{opacity:0;visibility:hidden}.env-shell-app-menu__drag-ghost-icon .ui-ws-item-icon-img,.env-shell-app-menu__drag-ghost-icon img[data-launcher-icon]{block-size:100%;border-radius:0;inline-size:100%;inset:0;object-fit:cover;object-position:center;pointer-events:none;position:absolute;transform:scale(1.28);transform-origin:center}.env-shell-app-menu__drag-ghost-icon ui-icon[data-launcher-icon]{block-size:100%;inline-size:100%;inset:0;max-block-size:none;max-inline-size:none;min-block-size:0;min-inline-size:0;position:absolute;--icon-size:100%;--icon-padding:0px;pointer-events:none;transform:scale(1.28);transform-origin:center}.env-shell-app-menu__drag-ghost-label{display:-webkit-box;-webkit-box-orient:vertical;font:600 .68rem/1.15 ui-sans-serif,system-ui,sans-serif;-webkit-line-clamp:2;overflow:hidden;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.35)}.env-shell-app-menu__tile-icon{aspect-ratio:1/1!important;backdrop-filter:blur(16px) saturate(1.35);-webkit-backdrop-filter:blur(16px) saturate(1.35);background:var(--env-app-menu-plate);block-size:2.5rem!important;border:none;border-radius:50%!important;box-shadow:0 6px 24px -8px color-mix(in oklab,#000 38%,transparent);box-sizing:border-box;color:var(--color-on-primary-container,var(--env-app-menu-ink));display:grid;inline-size:2.5rem!important;min-block-size:2.5rem!important;min-inline-size:2.5rem!important;overflow:hidden;padding:0!important;place-content:center;place-items:center;position:relative;--icon-color:var(--color-on-primary-container,var(--env-app-menu-ink))}.env-shell-app-menu__tile-icon:not([data-shape]),.env-shell-app-menu__tile-icon[data-shape=circle]{aspect-ratio:1/1!important;border-radius:50%!important}@supports (corner-shape:round){.env-shell-app-menu__tile-icon:not([data-shape]),.env-shell-app-menu__tile-icon[data-shape=circle]{corner-shape:round}}.env-shell-app-menu__tile-icon[data-shape=squircle]{border-radius:1.5rem!important}@supports (corner-shape:squircle){.env-shell-app-menu__tile-icon[data-shape=squircle]{corner-shape:unset}}@supports (corner-shape:round){.env-shell-app-menu__tile-icon[data-shape=squircle]{corner-shape:round}}.env-shell-app-menu__tile-icon[data-shape=square]{border-radius:12%!important}@supports (corner-shape:square){.env-shell-app-menu__tile-icon[data-shape=square]{corner-shape:square}}.env-shell-app-menu__tile-icon[data-shape=shapeless]{backdrop-filter:none!important;-webkit-backdrop-filter:none!important;background:transparent!important;border-radius:0!important;box-shadow:none!important;contain:none;overflow:visible!important}@supports (corner-shape:squircle){.env-shell-app-menu__tile-icon[data-shape=shapeless]{corner-shape:unset}}.env-shell-app-menu__tile-icon[data-shape=shapeless] .env-shell-app-menu__tile-favicon,.env-shell-app-menu__tile-icon[data-shape=shapeless] .ui-ws-item-icon-img,.env-shell-app-menu__tile-icon[data-shape=shapeless] img[data-launcher-icon],.env-shell-app-menu__tile-icon[data-shape=shapeless] ui-icon{object-fit:contain}.env-shell-app-menu__tile-icon[data-shape=shapeless] :is(img.sd-icon-silhouette,ui-icon.sd-icon-silhouette){filter:brightness(0) blur(6px);inset:0;object-fit:contain;opacity:.4;pointer-events:none;position:absolute;transform:translateY(10%);z-index:0}.env-shell-app-menu__tile-icon[data-shape=shapeless] .ui-ws-item-icon-img:not(.sd-icon-silhouette),.env-shell-app-menu__tile-icon[data-shape=shapeless] img[data-launcher-icon]:not(.sd-icon-silhouette){filter:none;object-fit:contain;z-index:2}.env-shell-app-menu__tile-icon[data-shape=shapeless][data-icon-display=glyph] ui-icon:not(.sd-icon-silhouette){filter:drop-shadow(0 2px 5px rgba(0,0,0,.4))}.env-shell-app-menu__tile-icon[data-shape=shapeless][data-icon-display=glyph] .sd-icon-silhouette{display:none}.env-shell-app-menu__tile-icon img[data-icon-pending],.env-shell-app-menu__tile-icon img[data-launcher-icon]:not([src]),.env-shell-app-menu__tile-icon ui-icon[data-icon-pending]{opacity:0;visibility:hidden}.env-shell-app-menu__tile-icon .ui-ws-item-icon-img[data-launcher-icon],.env-shell-app-menu__tile-icon img[data-launcher-icon]{block-size:100%;border-radius:0;display:block;inline-size:100%;inset:0;max-block-size:none;max-inline-size:none;object-fit:cover;object-position:center;pointer-events:none;position:absolute;transform:scale(var(--sd-item-icon-scale,var(--sd-launcher-icon-scale,1.28)));transform-origin:center;z-index:1}.env-shell-app-menu__tile-icon .ui-ws-item-icon-img[data-launcher-icon][data-icon-pack],.env-shell-app-menu__tile-icon img[data-launcher-icon][data-icon-pack]{transform:scale(var(--sd-item-icon-scale,var(--sd-launcher-icon-scale,1.28)))}.env-shell-app-menu__tile-icon :is(.env-shell-app-menu__tile-favicon:not([data-launcher-icon]),.ui-ws-item-icon-img:not([data-launcher-icon])){block-size:1.75rem;border-radius:4px;display:block;inline-size:1.75rem;max-block-size:90%;max-inline-size:90%;object-fit:contain;object-position:center;pointer-events:none;position:relative;z-index:1}.env-shell-app-menu__tile-icon ui-icon{block-size:1.75rem!important;display:inline-grid!important;inline-size:1.75rem!important;max-block-size:1.75rem!important;max-inline-size:1.75rem!important;min-block-size:1.75rem!important;min-inline-size:1.75rem!important;position:relative;z-index:1;--icon-size:1.75rem;--icon-padding:0px;--icon-color:currentColor;color:inherit;pointer-events:none}.env-shell-app-menu__tile-icon ui-icon[data-launcher-icon]{block-size:100%!important;inline-size:100%!important;inset:0;max-block-size:none!important;max-inline-size:none!important;min-block-size:0!important;min-inline-size:0!important;position:absolute;--icon-size:100%;--icon-padding:0px;pointer-events:none;transform:scale(1.28);transform-origin:center;z-index:1}.env-shell-app-menu__tile-label{display:-webkit-box;-webkit-box-orient:vertical;font:500 .68rem/1.15 ui-sans-serif,system-ui,sans-serif;-webkit-line-clamp:2;overflow:hidden;word-break:break-word}.env-shell-app-menu__empty{font:400 .85rem/1.3 ui-sans-serif,system-ui,sans-serif;grid-column:1/-1;margin:.5rem 0;opacity:.75;text-align:center}@keyframes b{0%{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}.env-shell-app-menu__pin-menu{background:var(--env-app-menu-surface);border:1px solid light-dark(color-mix(in oklab,#000 12%,transparent),color-mix(in oklab,#fff 14%,transparent));border-radius:10px;box-shadow:0 12px 32px -12px light-dark(rgba(0,0,0,.22),rgba(0,0,0,.45)),0 2px 8px -2px light-dark(rgba(0,0,0,.12),rgba(0,0,0,.25));color:var(--env-app-menu-ink);color-scheme:inherit;display:grid;gap:.25rem;min-inline-size:10rem;padding:.35rem;position:fixed;z-index:calc(var(--env-z-shell-chrome, 2147483000) + 4)}.env-shell-app-menu__pin-action{inline-size:100%;justify-content:start;text-align:start}}");
/** Matches {@code BootLoader} + launcher design spec. */
function isLauncherSku() {
	return document.documentElement.dataset.cwspShellRole === "launcher" || globalThis.__RS_SHELL_ROLE__ === "launcher";
}
//#endregion
//#region ../../modules/views/home-view/src/ts/SpeedDial.ts
var ctxMenuBound = false;
/** Document-level paste/drop once — SpeedDial mount (not only createCtxMenu). */
var homeTransferListenersBound = false;
var persistItemsTimer = null;
/** Lazy-init: top-level `observe` + `pointerAnchorRef` ran during chunk eval and hit TDZ vs `com-app` (see vite-chunk-placement). */
var layoutSingleton = null;
function getLayout() {
	if (!layoutSingleton) {
		layoutSingleton = observe([gridLayoutState.columns ?? 4, gridLayoutState.rows ?? 8]);
		affected(gridLayoutState, () => {
			layoutSingleton[0] = gridLayoutState.columns ?? 4;
			layoutSingleton[1] = gridLayoutState.rows ?? 8;
		});
	}
	return layoutSingleton;
}
var getScreenOrient = () => {
	const type = String(globalThis.screen?.orientation?.type || "");
	if (type.includes("landscape")) return type.endsWith("secondary") ? 3 : 1;
	return type.endsWith("secondary") ? 2 : 0;
};
var getRootOrient = (root) => {
	return normalizeOrient(root?.getAttribute("orient") ?? getScreenOrient());
};
var getGridLayout = () => [Number(gridLayoutState.columns) || 4, Number(gridLayoutState.rows) || 8];
var readCellAxis = (value) => {
	let cur = value;
	if (cur && typeof cur === "object" && "value" in cur) cur = cur.value;
	const n = Number(cur);
	return Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0;
};
var getItemCell = (item) => [readCellAxis(item.cell?.[0]), readCellAxis(item.cell?.[1])];
var currentHomeRoot = () => {
	if (typeof document === "undefined") return null;
	return document.getElementById("home") || document.querySelector(".speed-dial-root");
};
var labelLayerStyle = (item) => {
	const logical = [readCellAxis(item?.cell?.[0]), readCellAxis(item?.cell?.[1])];
	const visual = logicalToVisualCell(logical, getGridLayout(), getRootOrient(currentHomeRoot()));
	const col = visual[0] + 1;
	const row = visual[1] + 1;
	return [
		`--cell-x:${logical[0]}`,
		`--cell-y:${logical[1]}`,
		`--p-cell-x:${logical[0]}`,
		`--p-cell-y:${logical[1]}`,
		`--cell-column:${col}`,
		`--cell-row:${row}`,
		`grid-column:${col} / span 1`,
		`grid-row:${row} / span 1`
	].join(";");
};
/**
* WHY: `createShapedTileShadow` + `observeDisconnect` removes the under when M()
* reparents the tile. Local sibling — no lure attach/destroy.
* INVARIANT: M() maps 1 item → 1 node. Do not return under+icon as a fragment.
*/
var createShapedUnder = (item, host) => {
	const under = document.createElement("div");
	under.className = "ui-ws-item-icon-under underlying-shadow-container";
	under.setAttribute("aria-hidden", "true");
	under.dataset.id = String(item.id || "");
	under.dataset.layer = "shadows";
	const geo = document.createElement("div");
	geo.className = "underlying-shadow-geometry shaped";
	under.append(geo);
	const shape = host.getAttribute("data-shape") || "";
	under.setAttribute("data-shape", shape);
	geo.setAttribute("data-shape", shape);
	return under;
};
var shouldHideShapedUnder = (icon) => {
	const shape = icon.getAttribute("data-shape") || "";
	return shape === "shapeless" || shape === "none" || icon.classList.contains("sd-widget-host") || Boolean(icon.dataset.widget);
};
var findShapedUnder = (icon) => {
	const id = icon.dataset.id;
	const parent = icon.parentElement;
	if (!id || !parent) return null;
	for (const child of parent.children) if (child instanceof HTMLElement && child.classList.contains("ui-ws-item-icon-under") && child.dataset.id === id) return child;
	return null;
};
/** WHY: attach after the icon is in the grid — H`${under}${icon}` crashed Capacitor on pin/add. */
var ensureShapedUnderSibling = (icon, item) => {
	try {
		if (icon.dataset.layer !== "icons") return;
		if (shouldHideShapedUnder(icon)) {
			findShapedUnder(icon)?.remove();
			return;
		}
		if (!icon.parentElement) return;
		let under = findShapedUnder(icon);
		if (!under) {
			under = createShapedUnder(item, icon);
			icon.before(under);
		} else if (under.nextElementSibling !== icon) icon.before(under);
		bindUnderDisconnect(icon, under);
		stampShapedUnderCell(icon);
	} catch {}
};
var bindUnderDisconnect = (icon, under) => {
	if (under.dataset.disconnectBound === "1") return;
	const parent = icon.parentElement;
	if (!parent) return;
	under.dataset.disconnectBound = "1";
	const observer = new MutationObserver((mutations) => {
		for (const mutation of mutations) for (const node of mutation.removedNodes) if (node === icon || node instanceof Node && node.contains?.(icon)) {
			under.remove();
			observer.disconnect();
			return;
		}
	});
	observer.observe(parent, {
		childList: true,
		subtree: true
	});
};
var pruneOrphanUnders = (scope) => {
	if (!scope?.querySelectorAll) return;
	const grids = scope.querySelectorAll(".speed-dial-grid[data-grid-layer='icons']");
	const roots = grids.length ? [...grids] : [scope];
	for (const grid of roots) {
		const live = /* @__PURE__ */ new Map();
		grid.querySelectorAll(":scope > [data-speed-dial-item][data-layer=\"icons\"]").forEach((el) => {
			if (el.dataset.id && isLiveSpeedDialNode(el)) live.set(el.dataset.id, el);
		});
		grid.querySelectorAll(":scope > .ui-ws-item-icon-under").forEach((under) => {
			const icon = live.get(under.dataset.id || "");
			if (!icon || shouldHideShapedUnder(icon)) under.remove();
		});
	}
};
var bindIconGridShadowJanitor = (root) => {
	root.querySelectorAll(".speed-dial-grid[data-grid-layer='icons']").forEach((grid) => {
		if (grid.dataset.shadowMo === "1") return;
		grid.dataset.shadowMo = "1";
		const sweep = () => pruneOrphanUnders(grid);
		new MutationObserver(sweep).observe(grid, {
			childList: true,
			subtree: true
		});
		sweep();
	});
};
var syncWidgetsAfterGridChange = (root) => {
	const host = root || currentHomeRoot();
	if (!host) return;
	pruneOrphanUnders(host);
	if (!host.querySelector("[data-speed-dial-item][data-widget=\"android\"][data-layer=\"icons\"]")) hideAndroidWidgetHosts();
	else syncAndroidWidgetHosts(host);
};
var isLiveSpeedDialNode = (node) => !node.closest(".speed-dial-grid--turn-ghost");
var usedGridLine = (el, axis) => {
	const varName = axis === "column" ? "--cell-column" : "--cell-row";
	const fromVar = el.style.getPropertyValue(varName).trim();
	if (fromVar && fromVar !== "auto") return fromVar;
	const fromData = (axis === "column" ? el.dataset.cellColumn : el.dataset.cellRow) || "";
	return fromData && fromData !== "auto" ? fromData : "";
};
var stampItemGridLine = (el, visualCell) => {
	const col = visualCell[0] + 1;
	const row = visualCell[1] + 1;
	el.dataset.cellColumn = String(col);
	el.dataset.cellRow = String(row);
	el.style.setProperty("--cell-column", String(col));
	el.style.setProperty("--cell-row", String(row));
	if (el.dataset.layer !== "labels") return;
	el.style.setProperty("grid-column", `${col} / span 1`, "important");
	el.style.setProperty("grid-row", `${row} / span 1`, "important");
};
/** WHY: under-glow is a grid sibling — CSS-anchor + `grid-column:unset` left it 0×0 on WebView. */
var stampShapedUnderCell = (icon) => {
	if (icon.dataset.layer !== "icons") return;
	const id = icon.dataset.id;
	const parent = icon.parentElement;
	if (!id || !parent) return;
	const col = usedGridLine(icon, "column");
	const row = usedGridLine(icon, "row");
	if (!col && !row) return;
	const tile = icon.style.getPropertyValue("--tile-size").trim();
	const shape = icon.getAttribute("data-shape") || "";
	parent.querySelectorAll(":scope > .ui-ws-item-icon-under").forEach((under) => {
		if (under.dataset.id !== id) return;
		under.setAttribute("data-shape", shape);
		const geo = under.querySelector(".underlying-shadow-geometry");
		if (geo) geo.setAttribute("data-shape", shape);
		if (col) {
			under.style.setProperty("--cell-column", col);
			under.style.setProperty("grid-column", `${col} / span 1`, "important");
			under.dataset.cellColumn = col;
		}
		if (row) {
			under.style.setProperty("--cell-row", row);
			under.style.setProperty("grid-row", `${row} / span 1`, "important");
			under.dataset.cellRow = row;
		}
		const x = icon.style.getPropertyValue("--cell-x");
		const y = icon.style.getPropertyValue("--cell-y");
		if (x) under.style.setProperty("--cell-x", x);
		if (y) under.style.setProperty("--cell-y", y);
		if (tile) under.style.setProperty("--tile-size", tile);
	});
};
var applyVisualCell = (el, item, root) => {
	const orient = getRootOrient(root);
	const layout = getGridLayout();
	const logicalCell = getItemCell(item);
	const visualCell = logicalToVisualCell(logicalCell, layout, orient);
	el.dataset.cellX = String(logicalCell[0]);
	el.dataset.cellY = String(logicalCell[1]);
	el.style.setProperty("--cell-x", String(logicalCell[0]));
	el.style.setProperty("--cell-y", String(logicalCell[1]));
	el.style.setProperty("--p-cell-x", String(logicalCell[0]));
	el.style.setProperty("--p-cell-y", String(logicalCell[1]));
	stampItemGridLine(el, visualCell);
	const [spanCols, spanRows] = getItemSpan(item.id);
	const [spanX, spanY] = logicalToVisualSpan([spanCols, spanRows], orient);
	const [visCols, visRows] = visualLayout(layout, orient);
	const fitX = Math.max(1, Math.min(spanX, visCols - visualCell[0]));
	const fitY = Math.max(1, Math.min(spanY, visRows - visualCell[1]));
	el.style.setProperty("--cell-span-x", String(fitX));
	el.style.setProperty("--cell-span-y", String(fitY));
	if (el.dataset.layer === "labels") el.removeAttribute("data-spanned");
	else el.toggleAttribute("data-spanned", fitX > 1 || fitY > 1);
	const widgetKind = getSpeedDialWidgetKind(item);
	if (widgetKind) el.setAttribute("data-widget", widgetKind);
	else el.removeAttribute("data-widget");
	if (el.dataset.layer === "labels") el.dataset.labelPlacement = "below";
	if (el.dataset.layer === "icons") {
		stampTileHostAttrs(el, item);
		ensureShapedUnderSibling(el, item);
	}
};
var scheduleLabelPlacementSync = (root) => {
	if (root.dataset.labelPlacementFrame === "pending") return;
	root.dataset.labelPlacementFrame = "pending";
	const sync = () => {
		delete root.dataset.labelPlacementFrame;
		const icons = /* @__PURE__ */ new Map();
		root.querySelectorAll("[data-speed-dial-item][data-layer=\"icons\"]").forEach((node) => {
			if (!isLiveSpeedDialNode(node) || !node.dataset.id) return;
			icons.set(node.dataset.id, node);
		});
		root.querySelectorAll("[data-speed-dial-item][data-layer=\"labels\"]").forEach((node) => {
			if (!isLiveSpeedDialNode(node) || !node.dataset.id) return;
			const item = findSpeedDialItem(node.dataset.id);
			if (item) applyVisualCell(node, item, root);
			const icon = icons.get(node.dataset.id);
			if (!icon) return;
			const col = usedGridLine(icon, "column");
			const row = usedGridLine(icon, "row");
			if (col) {
				node.style.setProperty("--cell-column", col);
				node.style.setProperty("grid-column", `${col} / span 1`, "important");
				node.dataset.cellColumn = col;
			}
			if (row) {
				node.style.setProperty("--cell-row", row);
				node.style.setProperty("grid-row", `${row} / span 1`, "important");
				node.dataset.cellRow = row;
			}
			ensureShapedUnderSibling(icon, item || { id: icon.dataset.id || "" });
		});
	};
	if (typeof globalThis.requestAnimationFrame === "function") globalThis.requestAnimationFrame(sync);
	else globalThis.setTimeout(sync, 0);
};
var syncGridLayout = (root) => {
	const logicalLayout = getGridLayout();
	const orient = getRootOrient(root);
	const [columns, rows] = visualLayout(logicalLayout, orient);
	root.dataset.orient = String(orient);
	root.style.setProperty("--orient", String(orient));
	root.style.setProperty("--layout-c", String(logicalLayout[0]));
	root.style.setProperty("--layout-r", String(logicalLayout[1]));
	root.querySelectorAll(".speed-dial-grid").forEach((grid) => {
		grid.style.setProperty("--layout-c", String(logicalLayout[0]));
		grid.style.setProperty("--layout-r", String(logicalLayout[1]));
		grid.style.setProperty("--grid-columns", String(columns));
		grid.style.setProperty("--grid-rows", String(rows));
		grid.dataset.gridColumns = String(logicalLayout[0]);
		grid.dataset.gridRows = String(logicalLayout[1]);
	});
	root.querySelectorAll("[data-speed-dial-item]").forEach((node) => {
		if (!isLiveSpeedDialNode(node)) return;
		const item = findSpeedDialItem(node.dataset.id);
		if (item) applyVisualCell(node, item, root);
	});
	scheduleLabelPlacementSync(root);
};
var SWIPE_APP_MENU_MAX_DX_RATIO = .75;
var SWIPE_WORKSPACE_MIN_DX = 72;
var isNativeCapacitorOrCoarse = () => {
	try {
		const c = globalThis.Capacitor;
		if (typeof c?.isNativePlatform === "function" && c.isNativePlatform()) return true;
	} catch {}
	return typeof matchMedia === "function" && matchMedia("(pointer: coarse)").matches;
};
var tryOpenLauncherAppMenu = () => {
	const api = globalThis.__CWSP_LAUNCHER_HOME__;
	if (typeof api?.openAppMenu === "function") {
		api.openAppMenu();
		return;
	}
	globalThis.__CWSP_LAUNCHER_HOME_HOOKS_V1__?.openAppMenu?.();
};
var isEmptySpeedDialSurface = (root, target) => {
	if (!(target instanceof Element)) return target === root;
	if (!root.contains(target)) return false;
	return !target.closest("[data-speed-dial-item], .ui-ws-item, dialog, .cw-context-menu-layer, .env-shell-app-menu, .speed-dial-editor");
};
var mountWorkspacePager = (root) => {
	if (root.querySelector(".speed-dial-workspace-pager")) return;
	const pager = document.createElement("nav");
	pager.className = "speed-dial-workspace-pager";
	pager.setAttribute("aria-label", "Workspaces");
	const paint = () => {
		const pages = listWorkspacePages();
		const active = getActiveWorkspaceId();
		pager.replaceChildren();
		for (const page of pages) {
			const dot = document.createElement("button");
			dot.type = "button";
			dot.className = "speed-dial-workspace-pager__dot";
			dot.title = page.label;
			dot.setAttribute("aria-label", page.label);
			dot.toggleAttribute("data-active", page.id === active);
			dot.addEventListener("click", (ev) => {
				ev.preventDefault();
				ev.stopPropagation();
				switchWorkspacePage(page.id);
			});
			pager.append(dot);
		}
	};
	paint();
	window.addEventListener(WORKSPACE_PAGE_EVENT, paint);
	root.append(pager);
};
var bindEmptySpaceSwipeOpenAppMenu = (root) => {
	if (root.dataset.swipeAppMenuBound === "1") return;
	if (!isNativeCapacitorOrCoarse()) return;
	root.dataset.swipeAppMenuBound = "1";
	let tracking = false;
	let pointerId = -1;
	let startX = 0;
	let startY = 0;
	root.addEventListener("pointerdown", (ev) => {
		if (ev.pointerType === "mouse") return;
		if (!isEmptySpeedDialSurface(root, ev.target)) return;
		if (document.querySelector(".env-shell-app-menu[data-open]")) return;
		tracking = true;
		pointerId = ev.pointerId;
		startX = ev.clientX;
		startY = ev.clientY;
	}, { passive: true });
	const endTrack = (ev) => {
		if (!tracking || ev.pointerId !== pointerId) return;
		tracking = false;
		pointerId = -1;
		const dx = ev.clientX - startX;
		const dy = ev.clientY - startY;
		if (Math.abs(dx) >= SWIPE_WORKSPACE_MIN_DX && Math.abs(dx) > Math.abs(dy) * 1.1) {
			switchWorkspaceByDelta(dx < 0 ? 1 : -1);
			return;
		}
		if (dy > -72) return;
		if (Math.abs(dx) > Math.abs(dy) * SWIPE_APP_MENU_MAX_DX_RATIO) return;
		tryOpenLauncherAppMenu();
	};
	root.addEventListener("pointerup", endTrack, { passive: true });
	root.addEventListener("pointercancel", (ev) => {
		if (ev.pointerId === pointerId) {
			tracking = false;
			pointerId = -1;
		}
	}, { passive: true });
};
var bindRootOrientation = (root) => {
	if (root.dataset.orientObserverBound === "true") {
		syncGridLayout(root);
		return;
	}
	root.dataset.orientObserverBound = "true";
	if (!root.hasAttribute("tabindex")) root.tabIndex = -1;
	if (root.dataset.focusOnPointerBound !== "1") {
		root.dataset.focusOnPointerBound = "1";
		root.addEventListener("pointerdown", () => {
			try {
				root.focus({ preventScroll: true });
			} catch {
				try {
					root.focus();
				} catch {}
			}
		}, { capture: true });
	}
	bindEmptySpaceSwipeOpenAppMenu(root);
	mountWorkspacePager(root);
	bindIconGridShadowJanitor(root);
	queueMicrotask(() => bindIconGridShadowJanitor(root));
	new MutationObserver((records) => {
		if (records.some((record) => record.attributeName === "orient")) syncGridLayout(root);
	}).observe(root, {
		attributes: true,
		attributeFilter: ["orient"]
	});
	const screenOrientation = globalThis.screen?.orientation;
	const onScreenOrientationChange = () => {
		if (!root.hasAttribute("orient")) syncGridLayout(root);
	};
	screenOrientation?.addEventListener?.("change", onScreenOrientationChange);
	affected(gridLayoutState, () => syncGridLayout(root));
	syncGridLayout(root);
	queueMicrotask(() => syncGridLayout(root));
	if (typeof globalThis.requestAnimationFrame === "function") globalThis.requestAnimationFrame(() => refreshRootCells(root));
};
var refreshRootCells = (root) => {
	pruneOrphanUnders(root);
	root.querySelectorAll("[data-speed-dial-item]").forEach((node) => {
		if (!isLiveSpeedDialNode(node)) return;
		const item = findSpeedDialItem(node.dataset.id);
		if (item) applyVisualCell(node, item, root);
	});
	scheduleLabelPlacementSync(root);
};
var scheduleRootCellRefresh = () => {
	const run = () => {
		const home = currentHomeRoot();
		if (home) refreshRootCells(home);
	};
	queueMicrotask(run);
	if (typeof globalThis.requestAnimationFrame === "function") globalThis.requestAnimationFrame(run);
};
var coordinateRefSingleton = null;
function getCoordinateRef() {
	if (!coordinateRefSingleton) coordinateRefSingleton = typeof document !== "undefined" ? pointerAnchorRef() : [numberRef(0), numberRef(0)];
	return coordinateRefSingleton;
}
var schedulePersistItems = () => {
	if (persistItemsTimer) clearTimeout(persistItemsTimer);
	persistItemsTimer = setTimeout(() => {
		persistItemsTimer = null;
		markSpeedDialUserEditBeforeHydrate();
		persistSpeedDialItems();
	}, 80);
};
var resolveItemAction = (item, override) => {
	if (override) return override;
	return getSpeedDialMeta(item.id)?.action || item?.action || "open-view";
};
var BASE_ACTION_OPTIONS = [
	{
		value: "open-view",
		label: "Open view"
	},
	{
		value: "open-link",
		label: "Open link"
	},
	{
		value: "open-path",
		label: "Open path"
	},
	{
		value: "copy-link",
		label: "Copy link"
	},
	{
		value: "copy-state-desc",
		label: "Copy state + desc"
	},
	{
		value: "widget",
		label: "Widget"
	}
];
/** Launcher SKU exposes Android app launch tiles via dynamic launcher-bridge import. */
var getActionOptions = () => {
	const options = [...BASE_ACTION_OPTIONS];
	if (isLauncherSku()) options.push({
		value: "launch-app",
		label: "Launch app"
	});
	return options;
};
var WALLPAPER_EXTENSIONS = /* @__PURE__ */ new Set([
	"png",
	"jpg",
	"jpeg",
	"webp",
	"gif",
	"bmp",
	"svg",
	"avif"
]);
var getRefValue = (ref, fallback = "") => {
	if (ref && typeof ref === "object" && "value" in ref) return ref.value ?? fallback;
	return ref ?? fallback;
};
/** blob: object URLs die across reloads — never treat them as durable Icon resource. */
var isDurableIconResourceUrl = (raw) => {
	const u = String(raw || "").trim();
	if (!u) return false;
	if (u.startsWith("blob:")) return false;
	return true;
};
var durableIconUrl = (raw) => {
	const u = String(raw || "").trim();
	return isDurableIconResourceUrl(u) ? u : "";
};
var readTileIconModel = (item) => {
	const launchApp = isLauncherAppSpeedDialItem(item);
	const shortcutRef = getLauncherShortcutRef(item);
	const cacheKey = launchApp ? getLauncherAppTileCacheKey(item) : "";
	const meta = getSpeedDialMeta(item.id) || {};
	const iconUrl = getRefValue(meta.iconUrl, "");
	const iconDisplay = getRefValue(meta.iconDisplay, "");
	const iconScale = getRefValue(meta.iconScale, "");
	const href = getRefValue(meta.href, "");
	const entityType = getRefValue(meta.entityType, "");
	const bookmarkId = getRefValue(meta.bookmarkId, "");
	if (String(iconUrl || "").startsWith("blob:") && meta && "iconUrl" in meta) meta.iconUrl = "";
	const fetchSize = tileIconFetchSize(iconScale);
	const cachedLauncherIcon = cacheKey ? getCachedLauncherIconObjectUrl(cacheKey, fetchSize) : "";
	const bookmarkIconUrl = resolveSpeedDialBookmarkIconUrl({
		iconUrl: String(iconUrl || "").startsWith("blob:") ? "" : iconUrl,
		href,
		entityType,
		bookmarkId
	});
	const customUrl = durableIconUrl(resolveSpeedDialIconUrl(item.id, String(iconUrl || "").startsWith("blob:") ? "" : iconUrl));
	const cachedAndroid = customUrl && isAndroidIconRef(customUrl) ? getCachedIconResourceObjectUrl(customUrl, fetchSize) : "";
	const resourceUrl = String(cachedAndroid || (isAndroidIconRef(customUrl) ? "" : customUrl) || cachedLauncherIcon || bookmarkIconUrl || "").trim();
	return {
		display: inferIconDisplay({
			iconDisplay,
			iconUrl: resourceUrl || customUrl,
			isLauncherApp: launchApp,
			isBookmarkFavicon: Boolean(bookmarkIconUrl)
		}),
		shape: normalizeTileShape(getRefValue(meta.shape, ""), getDefaultTileShape()),
		iconScale,
		fallbackIcon: String(getRefValue(item.icon, "link") || "link"),
		customUrl,
		resourceUrl,
		launchApp,
		shortcutRef,
		cacheKey,
		fetchSize,
		cachedAndroid
	};
};
/** INVARIANT: host attrs come from meta before the first paint / under-shadow. */
var stampTileHostAttrs = (el, item, model) => {
	const next = model || readTileIconModel(item);
	if (getSpeedDialWidgetKind(item)) {
		el.setAttribute("data-shape", "none");
		el.removeAttribute("data-icon-display");
		return next;
	}
	el.setAttribute("data-shape", next.shape);
	el.setAttribute("data-icon-display", next.display);
	applyItemIconScaleToElement(el, defaultIconScaleForDisplay(next.display, next.iconScale));
	return next;
};
var bindTileIconResource = (el, iconNode, item, model, onReady) => {
	const mode = model.display === "glyph" ? null : model.display;
	if (!mode) return;
	const apply = (url) => {
		if (!url || !iconNode.isConnected) return;
		if (el.getAttribute("data-icon-display") === "glyph") return;
		iconNode.setAttribute("resource", url);
		applyLauncherIconToUiIcon(iconNode, url, mode);
		onReady?.();
	};
	if (model.resourceUrl) {
		apply(model.resourceUrl);
		if (isAndroidIconRef(model.customUrl) && !model.cachedAndroid) resolveIconResourceUrl(model.customUrl, model.fetchSize).then(apply);
		return;
	}
	if (isAndroidIconRef(model.customUrl)) {
		resolveIconResourceUrl(model.customUrl, model.fetchSize).then(apply);
		return;
	}
	if (model.launchApp && model.cacheKey) {
		ensureLauncherIconObjectUrl(model.cacheKey, model.fetchSize).then(apply);
		return;
	}
	if (model.shortcutRef) hydrateLauncherAppTileIcon(el, {
		id: item.id,
		action: item.action,
		iconDisplay: mode
	}).then(() => onReady?.());
};
/**
* Rebuild icon host for a SpeedDial tile from current item + meta.
* WHY: ShortcutEditor saves iconDisplay/iconUrl/shape on meta in-place; M() does not
* recreate the icon child unless the list entry is replaced — so Save looked like a no-op.
*/
var paintSpeedDialTileIcon = (el, item) => {
	if (!el || el.dataset.layer === "labels") return;
	if (el.classList.contains("sd-widget-host") || el.dataset.widget || getSpeedDialWidgetKind(item)) {
		el.querySelectorAll("ui-icon, .ui-ws-item-icon-native, img[data-launcher-icon], .ui-ws-item-icon-img, .ui-ws-item-icon-mask").forEach((node) => node.remove());
		return;
	}
	const model = stampTileHostAttrs(el, item);
	el.querySelectorAll("ui-icon, .ui-ws-item-icon-native, img[data-launcher-icon], .ui-ws-item-icon-img, .ui-ws-item-icon-mask, .sd-icon-silhouette").forEach((node) => node.remove());
	const finishPaint = () => {
		applyIconScaleToPaintedNodes(el);
		syncShapelessIconShadow(el);
		requestAnimationFrame(() => syncPlateGlyphInk(el));
	};
	const pendingShortcut = model.display !== "glyph" && Boolean(model.shortcutRef) && !model.resourceUrl && !isAndroidIconRef(model.customUrl);
	const iconNode = createTileUiIconElement({
		display: pendingShortcut ? "glyph" : model.display,
		glyph: model.fallbackIcon,
		resourceUrl: pendingShortcut ? void 0 : model.resourceUrl || void 0,
		launcher: model.launchApp || Boolean(model.shortcutRef),
		className: "ui-ws-item-icon-native"
	});
	el.prepend(iconNode);
	finishPaint();
	bindTileIconResource(el, iconNode, item, model, () => {
		if (el.isConnected) finishPaint();
	});
};
var bindSpeedDialTileIconChrome = (el, item) => {
	if (el.classList.contains("sd-widget-host") || el.dataset.widget || getSpeedDialWidgetKind(item)) return;
	if (el.dataset.iconChromeBound === "1") return;
	el.dataset.iconChromeBound = "1";
	const meta = ensureSpeedDialMeta(item.id);
	const sync = () => {
		if (!el.isConnected) return;
		paintSpeedDialTileIcon(el, item);
	};
	affected(meta, "iconDisplay", sync);
	affected(meta, "iconUrl", sync);
	affected(meta, "shape", sync);
	affected(meta, "iconScale", sync);
	el.addEventListener("cwsp:icon-bitmap-refresh", sync);
	const iconRef = item.icon;
	if (iconRef && typeof iconRef === "object") affected(iconRef, "value", sync);
	else affected(item, "icon", sync);
};
var buildDescriptor = (item) => {
	const meta = getSpeedDialMeta(item.id);
	return {
		label: getRefValue(item?.label),
		type: meta?.view || "speed-dial",
		DIR: "/",
		href: meta?.href,
		view: meta?.view,
		packageName: meta?.packageName,
		action: resolveItemAction(item)
	};
};
var bindCell = (el, args) => {
	const item = args?.item;
	if (!item) return;
	const sync = () => {
		const mounted = el.closest(".speed-dial-root") || el.ownerDocument?.getElementById("home");
		applyVisualCell(el, item, mounted);
	};
	sync();
	queueMicrotask(sync);
	affected([item.cell, 0], sync);
	affected([item.cell, 1], sync);
	const meta = getSpeedDialMeta(item.id);
	if (meta) {
		affected([meta, "spanCols"], sync);
		affected([meta, "spanRows"], sync);
	}
};
var lastItemOpenKey = "";
var lastItemOpenAt = 0;
var lastFocusedSpeedDialId = "";
var runItemAction = (item, actionId, extras = {}, makeView) => {
	const resolvedAction = resolveItemAction(item, actionId);
	const openKey = `${item?.id || ""}::${resolvedAction}::${extras?.openLinkTarget || ""}`;
	const now = typeof performance !== "undefined" ? performance.now() : Date.now();
	if (openKey && openKey === lastItemOpenKey && now - lastItemOpenAt < 400) return;
	lastItemOpenKey = openKey;
	lastItemOpenAt = now;
	if (resolvedAction === "widget" || getSpeedDialWidgetKind(item)) return;
	const action = getSpeedDialActionRegistry().get(resolvedAction);
	if (!action) {
		showError("Action is unavailable");
		return;
	}
	const context = {
		id: item.id,
		items: speedDialItems,
		meta: speedDialMeta,
		action: resolvedAction,
		viewMaker: makeView,
		...extras?.openLinkTarget ? { openLinkTarget: extras.openLinkTarget } : {}
	};
	try {
		action(context, item, extras?.initiator);
	} catch (error) {
		console.warn(error);
		showError("Failed to run action");
	}
};
var attachItemNode = (item, el, interactive = true, makeView) => {
	if (!el) return;
	const args = {
		layout: getLayout(),
		items: speedDialItems,
		item,
		meta: speedDialMeta
	};
	const root = el.closest(".speed-dial-root") || el.ownerDocument?.getElementById("home");
	el.dataset.id = item.id;
	el.dataset.speedDialItem = "true";
	if (el.dataset.layer === "icons") stampTileHostAttrs(el, item);
	if (interactive) {
		el.addEventListener("pointerdown", () => {
			lastFocusedSpeedDialId = item.id;
		});
		el.addEventListener("dragstart", (ev) => ev.preventDefault());
		bindSpeedDialTileIconChrome(el, item);
		const isShortcut = Boolean(getLauncherShortcutRef(item));
		if (isShortcut || resolveItemAction(item) === "launch-app" || resolveItemAction(item) === "launch-shortcut") {
			const meta = getSpeedDialMeta(item.id);
			const display = String(getRefValue(meta?.iconDisplay, "") || el.getAttribute("data-icon-display") || "").trim().toLowerCase();
			const customUrl = durableIconUrl(resolveSpeedDialIconUrl(item.id, getRefValue(meta?.iconUrl, "")));
			if (display !== "glyph" && display !== "phosphor" && display !== "name" && !customUrl) hydrateLauncherAppTileIcon(el, {
				id: item.id,
				action: item.action,
				iconDisplay: isShortcut ? "colored" : display,
				iconUrl: customUrl
			});
		}
		if (!el.dataset.dragGuardBound) {
			el.dataset.dragGuardBound = "1";
			el.addEventListener("m-dragsettled", () => {
				schedulePersistItems();
			});
		}
		if (!el.dataset.itemActionBound) {
			el.dataset.itemActionBound = "1";
			el.addEventListener("click", (ev) => {
				ev?.preventDefault?.();
				ev?.stopPropagation?.();
				const interactionState = String(el?.dataset?.interactionState || "");
				if (!(interactionState === "onGrab" || interactionState === "onMoving" || interactionState === "onRelax") && !MOCElement(ev?.target, "[data-interaction-state=\"onMoving\"],[data-interaction-state=\"onGrab\"],[data-interaction-state=\"onRelax\"]")) runItemAction(item, void 0, {
					event: ev,
					initiator: el
				}, getSpeedDialViewOpener() || makeView);
			});
			el.addEventListener("dblclick", (ev) => {
				ev?.preventDefault?.();
				ev?.stopPropagation?.();
				openItemEditor(item);
			});
		}
	}
	if (!interactive || el.dataset.layer === "labels") {
		el.dataset.layer = "labels";
		el.style.pointerEvents = "none";
		if (el.dataset.cellBound !== "true") {
			el.dataset.cellBound = "true";
			bindCell(el, args);
		} else applyVisualCell(el, item, root);
	}
	if (el.dataset.layer === "icons") {
		const dragItem = {
			id: item.id,
			cell: getItemCell(item)
		};
		const bindDrag = (mountedRoot) => {
			if (!mountedRoot || el.dataset.pointerInteractionBound === "true") return;
			el.dataset.pointerInteractionBound = "true";
			bindPointerInteraction(el, {
				root: mountedRoot,
				item: dragItem,
				items: speedDialItems,
				getLayout: getGridLayout,
				getOrient: () => getRootOrient(mountedRoot),
				getSpan: (id) => getItemSpan(id),
				onCommitCell: (cell) => {
					dragItem.cell = [...cell];
					item.cell[0] = cell[0];
					item.cell[1] = cell[1];
					refreshRootCells(mountedRoot);
					markSpeedDialUserEditBeforeHydrate();
					persistSpeedDialItems();
					emitSpeedDialMutation("update", item.id);
				},
				onSettled: () => {
					requestAnimationFrame(() => syncAndroidWidgetHosts(mountedRoot));
				}
			});
		};
		bindDrag(root);
		if (!root || el.dataset.pointerInteractionBound !== "true") {
			const retryDrag = () => bindDrag(el.closest(".speed-dial-root") || el.ownerDocument?.getElementById("home"));
			queueMicrotask(retryDrag);
			if (typeof globalThis.requestAnimationFrame === "function") globalThis.requestAnimationFrame(retryDrag);
		}
		const widgetKind = getSpeedDialWidgetKind(item);
		if (widgetKind) {
			decorateWidgetHost(el, widgetKind);
			bindWidgetResize(el, item, { refresh: () => {
				const mounted = el.closest(".speed-dial-root") || el.ownerDocument?.getElementById("home") || root;
				if (mounted) refreshRootCells(mounted);
				requestAnimationFrame(() => syncAndroidWidgetHosts(mounted));
			} });
		}
		if (el.dataset.cellBound !== "true") {
			el.dataset.cellBound = "true";
			bindCell(el, args);
		} else applyVisualCell(el, item, root);
		ensureShapedUnderSibling(el, item);
		if (!shouldHideShapedUnder(el) && !findShapedUnder(el)) {
			queueMicrotask(() => ensureShapedUnderSibling(el, item));
			if (typeof globalThis.requestAnimationFrame === "function") globalThis.requestAnimationFrame(() => ensureShapedUnderSibling(el, item));
		}
	}
};
var resolveCellFromGrid = (grid, coordinate) => {
	if (!grid || !coordinate) return [0, 0];
	const rect = grid.getBoundingClientRect();
	const styles = getComputedStyle(grid);
	const paddingLeft = parseFloat(styles.paddingLeft) || 0;
	const paddingRight = parseFloat(styles.paddingRight) || 0;
	const paddingTop = parseFloat(styles.paddingTop) || 0;
	const paddingBottom = parseFloat(styles.paddingBottom) || 0;
	const size = [Math.max(1, rect.width - paddingLeft - paddingRight), Math.max(1, rect.height - paddingTop - paddingBottom)];
	const point = [coordinate[0] - rect.left - paddingLeft, coordinate[1] - rect.top - paddingTop];
	return pointToLogicalCell(point, size, getGridLayout(), getRootOrient(grid.closest(".speed-dial-root")));
};
var deriveCellFromEvent = (ev) => {
	return resolveCellFromGrid(document.querySelector("#home .speed-dial-grid[data-grid-layer=\"icons\"]") || document.querySelector("#home .speed-dial-grid:last-of-type") || document.querySelector("#home .speed-dial-grid"), ev ? [ev.clientX, ev.clientY] : null);
};
var deriveCellFromCoordinate = (coordinate) => {
	return resolveCellFromGrid(document.querySelector("#home .speed-dial-grid[data-grid-layer=\"icons\"]") || document.querySelector("#home .speed-dial-grid:last-of-type") || document.querySelector("#home .speed-dial-grid"), coordinate);
};
var deriveCellFromAnchor = () => {
	const ref = getCoordinateRef();
	return deriveCellFromCoordinate([ref[0].value, ref[1].value]);
};
var looksLikeImageFile = (file) => {
	if (!file) return false;
	if (String(file.type || "").toLowerCase().startsWith("image/")) return true;
	const name = String(file.name || "").trim().toLowerCase();
	const ext = name.includes(".") ? name.slice(name.lastIndexOf(".") + 1) : "";
	return WALLPAPER_EXTENSIONS.has(ext);
};
/** Prefer `files`, then DataTransferItemList (clipboard paste often only populates `items`). */
var extractImageFileFromTransfer = (dt) => {
	if (!dt) return null;
	for (const file of Array.from(dt.files || [])) if (looksLikeImageFile(file)) return file;
	const items = dt.items;
	if (!items?.length) return null;
	for (let i = 0; i < items.length; i++) {
		const item = items[i];
		if (!item || item.kind !== "file") continue;
		const type = String(item.type || "").toLowerCase();
		if (type && !type.startsWith("image/")) continue;
		const file = item.getAsFile?.();
		if (looksLikeImageFile(file)) return file;
	}
	return null;
};
var applyWallpaperFromImageFile = (file) => {
	setAppWallpaperFromBlob(file).then(() => {
		wallpaperState.src = getWallpaperStoragePointer() || "idb:rs-wallpaper";
		persistWallpaper();
		showSuccess("Wallpaper updated");
	}).catch((err) => {
		console.warn(err);
		showError("Failed to set wallpaper");
	});
};
/** Async Clipboard API fallback when paste event has empty `clipboardData` image slots. */
var readImageFileFromClipboardApi = async () => {
	try {
		const read = navigator.clipboard?.read;
		if (typeof read !== "function") return null;
		const items = await read.call(navigator.clipboard);
		for (const item of items || []) {
			const type = item.types?.find?.((t) => String(t).toLowerCase().startsWith("image/"));
			if (!type) continue;
			const blob = await item.getType(type);
			if (!blob) continue;
			const ext = type.includes("jpeg") || type.includes("jpg") ? "jpg" : type.includes("webp") ? "webp" : "png";
			return new File([blob], `wallpaper-${Date.now()}.${ext}`, { type: blob.type || type });
		}
	} catch (e) {
		console.warn("[speed-dial] clipboard.read image failed", e);
	}
	return null;
};
var parseUrlFromHtml = (html) => {
	const source = String(html || "").trim();
	if (!source) return null;
	const hrefMatch = source.match(/href\s*=\s*["']([^"']+)["']/i);
	const href = String(hrefMatch?.[1] || "").trim();
	if (!href) return null;
	if (!/^https?:\/\//i.test(href) && !href.startsWith("//")) return null;
	return href;
};
/** Bare host or host/path without scheme (github.com, www.youtube.com/watch?v=1). */
var BARE_HOST_PATTERN = /^(?:www\.)?(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}(?:[/:?#][^\s]*)?$/i;
/**
* Normalize a pasted/dropped URL candidate to an absolute http(s) URL.
* WHY: users paste bare domains from messengers ("github.com") without scheme;
* relative hrefs would resolve against the shell origin and produce junk tiles.
* Returns the canonical href string, or null when not a usable http(s) URL.
*/
var normalizePasteUrl = (text) => {
	let value = String(text || "").trim();
	if (!value) return null;
	if (value.startsWith("<") && value.endsWith(">")) value = value.slice(1, -1).trim();
	try {
		const parsed = new URL(value);
		if (/^https?:$/i.test(parsed.protocol)) return parsed.href;
		if (/^(tel|mailto|tg|telegram|content):$/i.test(parsed.protocol)) return parsed.href;
		return null;
	} catch {}
	if (!/\s/.test(value) && BARE_HOST_PATTERN.test(value)) try {
		const parsed = new URL(`https://${value.replace(/^\/+/, "")}`);
		if (/^https?:$/i.test(parsed.protocol)) return parsed.href;
	} catch {}
	return null;
};
/**
* Flatten transfer payloads into URL candidates.
* WHY: `text/uri-list` is often multiline with `#` comments (Mozilla / bookmark drags);
* treating the whole blob as one string makes normalizePasteUrl return null.
*/
var extractUrlCandidatesFromTransfer = (transfer) => {
	const out = [];
	const pushBlob = (raw) => {
		for (const line of String(raw || "").split(/\r?\n/)) {
			const trimmed = line.trim();
			if (!trimmed || trimmed.startsWith("#")) continue;
			out.push(trimmed);
		}
	};
	pushBlob(transfer.getData("text/uri-list") || "");
	const moz = String(transfer.getData("text/x-moz-url") || "").trim();
	if (moz) {
		const first = moz.split(/\r?\n/).find((l) => l.trim() && !l.trim().startsWith("#"));
		if (first) out.push(first.trim());
	}
	pushBlob(transfer.getData("text/plain") || "");
	return out;
};
var parseShortcutFromTransfer = (transfer, suggestedCell) => {
	if (!transfer) return null;
	const plain = String(transfer.getData("text/plain") || "").trim();
	const html = String(transfer.getData("text/html") || "").trim();
	const jsonMime = String(transfer.getData("application/json") || "").trim();
	if (looksLikeSpeedDialShortcutJson(plain)) {
		const item = parseSpeedDialItemFromJSON(plain, suggestedCell);
		if (item) return item;
	}
	if (looksLikeSpeedDialShortcutJson(jsonMime)) {
		const item = parseSpeedDialItemFromJSON(jsonMime, suggestedCell);
		if (item) return item;
	}
	if (jsonMime) {
		const item = parseSpeedDialItemFromJSON(jsonMime, suggestedCell);
		if (item) return item;
	}
	for (const candidate of extractUrlCandidatesFromTransfer(transfer)) {
		const normalized = normalizePasteUrl(candidate);
		if (normalized) {
			const item = parseSpeedDialItemFromURL(normalized, suggestedCell);
			if (item) return item;
			continue;
		}
		if (isSpeedDialVirtualPath(candidate)) {
			const item = parseSpeedDialItemFromVirtualPath(candidate, suggestedCell);
			if (item) return item;
		}
		if (looksLikeJsonObjectForDrop(candidate)) {
			const item = parseSpeedDialItemFromJSON(candidate, suggestedCell);
			if (item) return item;
		}
	}
	const href = parseUrlFromHtml(html);
	if (href) {
		const normalized = normalizePasteUrl(href);
		if (normalized) {
			const item = parseSpeedDialItemFromURL(normalized, suggestedCell);
			if (item) return item;
		}
	}
	if (plain) {
		const item = parseSpeedDialItemFromJSON(plain, suggestedCell);
		if (item) return item;
		if (isSpeedDialVirtualPath(plain)) return parseSpeedDialItemFromVirtualPath(plain, suggestedCell);
		const smart = parseSpeedDialItemFromSmartText(plain, suggestedCell);
		if (smart) return smart;
	}
	return null;
};
var looksLikeJsonObjectForDrop = (raw) => {
	const t = String(raw || "").trim();
	return t.startsWith("{") && t.endsWith("}") || t.startsWith("[") && t.endsWith("]");
};
/** True when the event is on the launcher desktop (not a nested window/editor). */
var isEditablePasteTarget = (el) => {
	if (!el) return false;
	if (el.isContentEditable) return true;
	const tag = String(el.tagName || "").toUpperCase();
	if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
	return !!el.closest?.("input, textarea, select, [contenteditable=\"true\"], [role=\"textbox\"], .speed-dial-editor, ui-modal, dialog");
};
var resolveDeepActiveElement = () => {
	let active = document.activeElement;
	while (active?.shadowRoot?.activeElement) active = active.shadowRoot.activeElement;
	return active;
};
var isHomeWorkspaceSurface = (event) => {
	const current = event.currentTarget;
	if (current?.id === "home" || current?.classList?.contains("speed-dial-root")) return true;
	const target = event.target;
	if (target?.closest?.("#home, .speed-dial-root")) return true;
	if (typeof event.composedPath === "function") for (const node of event.composedPath()) {
		if (!(node instanceof HTMLElement)) continue;
		if (node.id === "home" || node.classList.contains("speed-dial-root")) return true;
	}
	if (event instanceof ClipboardEvent) {
		const home = document.getElementById("home");
		if (!home?.isConnected) return false;
		try {
			if (home.checkVisibility && !home.checkVisibility({
				checkOpacity: false,
				checkVisibilityCSS: true
			})) return false;
		} catch {}
		const deep = resolveDeepActiveElement();
		if (isEditablePasteTarget(deep) && !home.contains(deep)) return false;
		if (home.matches(":hover") || home.contains(deep) || deep === home) return true;
		if (!deep || deep === document.body || deep === document.documentElement) return true;
		if (!isEditablePasteTarget(deep)) return true;
		return false;
	}
	return isInFocus(target, "#home") || isInFocus(target, "#home:is(:hover, :focus, :focus-visible), #home:has(:hover, :focus, :focus-visible)", "child");
};
var copySpeedDialItemAction = (item) => async () => {
	try {
		await copySpeedDialItemToClipboard(item);
		showSuccess("Shortcut copied");
	} catch (e) {
		console.warn(e);
		showError("Failed to copy shortcut");
	}
};
var pasteSpeedDialItemAction = (suggestedCell) => async () => {
	try {
		const speedDialItem = await createSpeedDialItemFromClipboard(suggestedCell);
		if (!speedDialItem) {
			showError("Clipboard does not contain a valid URL or shortcut JSON");
			return;
		}
		addSpeedDialItem(speedDialItem);
		persistSpeedDialItems();
		persistSpeedDialMeta();
		showSuccess("Shortcut created from clipboard");
	} catch (e) {
		console.warn(e);
		const msg = String(e?.message || e || "");
		if (/empty/i.test(msg)) showError("Clipboard is empty");
		else if (/unavailable|denied|failed|permission/i.test(msg)) showError("Could not read clipboard on this device");
		else showError("Failed to paste shortcut");
	}
};
var cloneToOtherSidesEntries = (item) => listWorkspacePages().filter((page) => page.id !== getActiveWorkspaceId()).map((page) => ({
	id: `clone-to-${page.id}`,
	label: page.label,
	icon: "copy",
	action: () => {
		if (cloneSpeedDialItemToWorkspace(item, page.id)) {
			showSuccess(`Copied to ${page.label}`);
			return;
		}
		showError(`Could not copy to ${page.label}`);
	}
}));
var createMenuEntryForAction = (actionId, item, fallbackLabel = "", makeView) => {
	const descriptor = buildDescriptor(item);
	return {
		id: actionId,
		label: getSpeedDialActionLabels().get(actionId)?.(descriptor) || fallbackLabel,
		icon: getSpeedDialActionIcons().get(actionId) || "command",
		action: (initiator, _menuItem, ev) => runItemAction(item, actionId, {
			event: ev,
			initiator
		}, makeView)
	};
};
var pickWallpaper = () => {
	const input = document.createElement("input");
	input.type = "file";
	input.accept = "image/*";
	input.onchange = async () => {
		const file = input.files?.[0];
		if (!file) return;
		try {
			await setAppWallpaperFromBlob(file);
			wallpaperState.src = getWallpaperStoragePointer() || "idb:rs-wallpaper";
			persistWallpaper();
			showSuccess("Wallpaper updated");
		} catch (e) {
			console.warn(e);
			showError("Failed to set wallpaper");
		}
	};
	input.click();
};
var handleSpeedDialPaste = async (event, suggestedCell) => {
	if (!isHomeWorkspaceSurface(event)) return false;
	event.preventDefault();
	event.stopPropagation();
	try {
		const targetCell = suggestedCell ?? deriveCellFromAnchor();
		const item = parseShortcutFromTransfer(event.clipboardData, targetCell) || await createSpeedDialItemFromClipboard(targetCell);
		if (!item) return false;
		addSpeedDialItem(item);
		persistSpeedDialItems();
		persistSpeedDialMeta();
		showSuccess("Shortcut created from clipboard");
		return true;
	} catch (e) {
		console.warn("Failed to paste speed dial item:", e);
		return false;
	}
};
var handleWallpaperDropOrPaste = (event) => {
	if (!isHomeWorkspaceSurface(event)) return;
	const isPaste = event instanceof ClipboardEvent;
	const droppedOnItem = !!event.target?.closest?.("[data-speed-dial-item]");
	const suggestedCell = !isPaste && event instanceof DragEvent ? deriveCellFromEvent(event) : deriveCellFromAnchor();
	const dataTransfer = isPaste ? event.clipboardData : event.dataTransfer;
	const imageFile = !droppedOnItem ? extractImageFileFromTransfer(dataTransfer) : null;
	if (imageFile) {
		event.preventDefault();
		event.stopPropagation();
		applyWallpaperFromImageFile(imageFile);
		queueMicrotask(() => {
			try {
				handleIncomingEntries(dataTransfer, "/images/wallpaper/", null, (file) => {
					if (!looksLikeImageFile(file)) return;
				});
			} catch (e) {
				console.warn(e);
			}
		});
		return;
	}
	const parsed = parseShortcutFromTransfer(dataTransfer, suggestedCell);
	if (parsed) {
		event.preventDefault();
		event.stopPropagation();
		const mirrorPath = getSpeedDialMirrorPath();
		if (mirrorPath && mirrorPath.startsWith("/bookmarks/")) {
			const backend = resolveFsBackend(mirrorPath);
			if (backend?.createUrl) {
				const meta = getSpeedDialMeta(parsed.id);
				const dropHref = String(meta?.href || "");
				if (/^https?:\/\//i.test(dropHref)) {
					const title = String(getRefValue(parsed.label, dropHref)) || dropHref;
					Promise.resolve(backend.createUrl(mirrorPath, title, dropHref)).then(() => refreshSpeedDialMirror()).then(() => showSuccess("Bookmark created from dropped link")).catch((e) => {
						console.warn(e);
						showError("Failed to create bookmark");
					});
					return;
				}
			}
		}
		addSpeedDialItem(parsed);
		persistSpeedDialItems();
		persistSpeedDialMeta();
		showSuccess(isPaste ? "Shortcut created from pasted link" : "Shortcut created from dropped link");
		return;
	}
	if (isPaste) {
		event.preventDefault();
		event.stopPropagation();
		(async () => {
			if (!droppedOnItem) {
				const apiImage = await readImageFileFromClipboardApi();
				if (apiImage) {
					applyWallpaperFromImageFile(apiImage);
					return;
				}
			}
			await handleSpeedDialPaste(event, suggestedCell);
		})();
	}
};
var acceptHomeLinkDragOver = (ev) => {
	if (!isHomeWorkspaceSurface(ev)) return;
	ev.preventDefault();
	if (ev.dataTransfer) ev.dataTransfer.dropEffect = "copy";
};
/** Install once: document paste/drop so Ctrl+V works without #home focus. */
var ensureHomeTransferListeners = () => {
	if (homeTransferListenersBound || typeof document === "undefined") return;
	homeTransferListenersBound = true;
	document.addEventListener("paste", (event) => {
		handleWallpaperDropOrPaste(event);
	}, true);
	document.addEventListener("keydown", (event) => {
		if (!(event.ctrlKey || event.metaKey) || event.altKey) return;
		if (event.key !== "c" && event.key !== "C") return;
		if (isEditablePasteTarget(resolveDeepActiveElement())) return;
		if (!document.getElementById("home")?.isConnected) return;
		const item = findSpeedDialItem(lastFocusedSpeedDialId);
		if (!item) return;
		event.preventDefault();
		copySpeedDialItemAction(item)();
	}, true);
	document.addEventListener("dragover", (event) => {
		const home = document.getElementById("home");
		if (!home) return;
		if (!(typeof event.composedPath === "function" ? event.composedPath() : []).includes(home) && !home.contains(event.target)) return;
		acceptHomeLinkDragOver(event);
	}, true);
	document.addEventListener("drop", (event) => {
		const home = document.getElementById("home");
		if (!home) return;
		if (!(typeof event.composedPath === "function" ? event.composedPath() : []).includes(home) && !home.contains(event.target)) return;
		handleWallpaperDropOrPaste(event);
	}, true);
};
var runMirrorItemAction = (item, makeView) => {
	if (!item) return;
	const actionId = String(item.action || "open-path");
	const handler = getSpeedDialActionRegistry().get(actionId);
	if (!handler) {
		showError("Action is unavailable");
		return;
	}
	const context = {
		id: item.id,
		items: mirrorSpeedDialItems,
		meta: speedDialMeta,
		action: actionId,
		viewMaker: makeView,
		path: item.path
	};
	try {
		handler(context, item);
	} catch (error) {
		console.warn(error);
		showError("Failed to run action");
	}
};
var resolveMirrorOpener = (makeView) => makeView || getSpeedDialViewOpener();
var attachMirrorItemNode = (item, el, makeView) => {
	if (!el) return;
	const root = el.closest(".speed-dial-root") || el.ownerDocument?.getElementById("home");
	el.dataset.id = item.id;
	el.dataset.speedDialItem = "true";
	el.dataset.mirrorItem = "true";
	const sync = () => {
		const orient = getRootOrient(root);
		const layout = getGridLayout();
		const logicalCell = [readCellAxis(item.cell?.[0]), readCellAxis(item.cell?.[1])];
		const visualCell = logicalToVisualCell(logicalCell, layout, orient);
		el.style.setProperty("--cell-x", String(logicalCell[0]));
		el.style.setProperty("--cell-y", String(logicalCell[1]));
		el.style.setProperty("--cell-column", String(visualCell[0] + 1));
		el.style.setProperty("--cell-row", String(visualCell[1] + 1));
		el.dataset.cellColumn = String(visualCell[0] + 1);
		el.dataset.cellRow = String(visualCell[1] + 1);
		if (el.dataset.layer === "labels") {
			el.style.setProperty("grid-column", `${visualCell[0] + 1} / span 1`, "important");
			el.style.setProperty("grid-row", `${visualCell[1] + 1} / span 1`, "important");
		}
	};
	sync();
	if (el.dataset.layer === "icons") ensureShapedUnderSibling(el, item);
	if (!el.dataset.mirrorActionBound) {
		el.dataset.mirrorActionBound = "1";
		el.addEventListener("click", (ev) => {
			ev?.preventDefault?.();
			ev?.stopPropagation?.();
			runMirrorItemAction(item, resolveMirrorOpener(makeView));
		});
	}
};
var renderMirrorIconItem = (item, makeView) => {
	const iconUrl = String(item?.iconUrl || "");
	const fallbackIcon = String(item?.icon || "link");
	const display = inferIconDisplay({
		iconDisplay: item?.iconDisplay,
		iconUrl,
		isBookmarkFavicon: Boolean(iconUrl)
	});
	const iconNode = display === "glyph" || !iconUrl ? H`<ui-icon icon=${fallbackIcon}></ui-icon>` : createTileUiIconElement({
		display,
		glyph: fallbackIcon,
		resourceUrl: iconUrl,
		className: "ui-ws-item-icon-native"
	});
	return H`<div data-shape="squircle" data-id=${item.id} class="ui-ws-item ui-ws-item-icon shaped" data-speed-dial-item data-layer="icons" data-mirror-item ref=${(el) => attachMirrorItemNode(item, el, makeView)}>
        ${iconNode}
    </div>`;
};
var renderMirrorLabelItem = (item, makeView) => {
	const labelRef = item?.label;
	return H`<div data-id=${item.id} class="ui-ws-item ui-ws-item-label" data-speed-dial-item data-layer="labels" data-mirror-item style=${labelLayerStyle(item)} ref=${(el) => attachMirrorItemNode(item, el, makeView)}>
        <span>${labelRef ?? ""}</span>
    </div>`;
};
function SpeedDial(makeView) {
	getLayout();
	getCoordinateRef();
	ensureVirtualKeyboardOverlay();
	updateVP();
	if (typeof makeView === "function") setSpeedDialViewOpener(makeView);
	ensureHomeTransferListeners();
	refreshSpeedDialMirror();
	stripStaleWidgetMetaFromShortcuts();
	bootWorkspacePages();
	installLauncherBackStack();
	bindWorkspacePageHotkeys();
	const hostEvents = globalThis;
	if (!hostEvents.__CWSP_SD_HOST_EVENTS_V1__) {
		hostEvents.__CWSP_SD_HOST_EVENTS_V1__ = true;
		queueMicrotask(() => syncWidgetsAfterGridChange());
		window.addEventListener(WORKSPACE_PAGE_EVENT, () => {
			hideAndroidWidgetHosts();
			scheduleRootCellRefresh();
			requestAnimationFrame(() => syncWidgetsAfterGridChange());
		});
		if (typeof ResizeObserver === "function") {
			const ro = new ResizeObserver(() => syncAndroidWidgetHosts());
			queueMicrotask(() => {
				const home = document.getElementById("home");
				if (home) ro.observe(home);
			});
		}
		window.addEventListener("resize", () => syncAndroidWidgetHosts());
		document.addEventListener("env-app-menu-open", () => hideAndroidWidgetHosts());
		document.addEventListener("env-app-menu-close", () => syncWidgetsAfterGridChange());
	}
	const columnsRef = propRef(gridLayoutState, "columns", 4);
	const rowsRef = propRef(gridLayoutState, "rows", 8);
	const shapeRef = propRef(gridLayoutState, "shape", "square");
	const tileShapeForItem = (item) => {
		return propRef(getSpeedDialMeta(item.id) || {}, "shape", getDefaultTileShape());
	};
	const renderIconItem = (item) => {
		const widgetKind = getSpeedDialWidgetKind(item);
		if (widgetKind) {
			const widget = createWidgetNode(widgetKind, item);
			return H`<div data-shape="none" data-id=${item.id} class="ui-ws-item ui-ws-item-icon sd-widget-host" data-speed-dial-item data-layer="icons" data-widget=${widgetKind} ref=${(el) => attachItemNode(item, el, true, makeView)}>
                ${widget}
            </div>`;
		}
		const model = readTileIconModel(item);
		const pendingShortcut = model.display !== "glyph" && Boolean(model.shortcutRef) && !model.resourceUrl && !isAndroidIconRef(model.customUrl);
		const iconNode = createTileUiIconElement({
			display: pendingShortcut ? "glyph" : model.display,
			glyph: model.fallbackIcon,
			resourceUrl: pendingShortcut ? void 0 : model.resourceUrl || void 0,
			launcher: model.launchApp || Boolean(model.shortcutRef),
			className: "ui-ws-item-icon-native"
		});
		return H`<div data-shape=${tileShapeForItem(item)} data-id=${item.id} class="ui-ws-item ui-ws-item-icon shaped" data-speed-dial-item data-layer="icons" data-icon-display=${model.display} ref=${(el) => {
			const host = el;
			stampTileHostAttrs(host, item, model);
			attachItemNode(item, host, true, makeView);
			if (iconNode instanceof HTMLElement) bindTileIconResource(host, iconNode, item, model);
		}}>
            ${iconNode}
        </div>`;
	};
	const renderLabelItem = (item) => {
		const labelRef = item?.label;
		const widgetKind = getSpeedDialWidgetKind(item);
		return H`<div data-id=${item.id} class="ui-ws-item ui-ws-item-label" data-speed-dial-item data-layer="labels" data-widget=${widgetKind || void 0} style=${labelLayerStyle(item)} ref=${(el) => attachItemNode(item, el, false, makeView)}>
            <span>${labelRef ?? ""}</span>
        </div>`;
	};
	const box = H`<div slot="underlay" style="pointer-events: auto; position: relative; contain: none; overflow: visible; display: grid;" id="home" class="speed-dial-root" tabindex="-1" ref=${(el) => {
		bindRootOrientation(el);
		mountCoreRail(el);
	}} on:dragover=${(ev) => acceptHomeLinkDragOver(ev)} on:drop=${(ev) => handleWallpaperDropOrPaste(ev)} on:paste=${(ev) => void handleWallpaperDropOrPaste(ev)} prop:onPaste=${async (ev) => await handleWallpaperDropOrPaste(ev)}>
        <div class="speed-dial-grid speed-dial-label-layer speed-dial-grid--labels ui-launcher-grid" data-layer="items" data-grid-layer="labels" data-grid-columns=${columnsRef} data-grid-rows=${rowsRef} data-grid-shape=${shapeRef}>
            ${M(speedDialItems, renderLabelItem)}
            ${M(mirrorSpeedDialItems, renderMirrorLabelItem)}
        </div>
        <div class="speed-dial-grid speed-dial-icon-layer speed-dial-grid--icons ui-launcher-grid" data-layer="items" data-grid-layer="icons" data-grid-columns=${columnsRef} data-grid-rows=${rowsRef} data-grid-shape=${shapeRef}>
            ${M(speedDialItems, renderIconItem)}
            ${M(mirrorSpeedDialItems, renderMirrorIconItem)}
        </div>
    </div>`;
	const itemsAffected = globalThis;
	if (!itemsAffected.__CWSP_SD_ITEMS_AFFECTED_V1__) {
		itemsAffected.__CWSP_SD_ITEMS_AFFECTED_V1__ = true;
		affected(speedDialItems, (_items, _index, prev, operation) => {
			if (operation === "remove" || operation === "delete") {
				const id = String(prev?.id || "").trim();
				if (id) document.querySelectorAll(`[data-id="${CSS.escape(id)}"]`).forEach((node) => {
					if (!(node instanceof HTMLElement)) return;
					if (node.classList.contains("ui-ws-item-icon-under") || node.dataset.layer === "shadows") {
						node.remove();
						return;
					}
					if (!findSpeedDialItem(id) && node.hasAttribute("data-speed-dial-item")) node.remove();
				});
				const home = currentHomeRoot();
				pruneOrphanUnders(home);
				requestAnimationFrame(() => syncWidgetsAfterGridChange(home));
			}
			scheduleRootCellRefresh();
		});
	}
	return box;
}
var openItemEditor = (item, opts) => {
	const workingItem = item ?? createEmptySpeedDialItem(opts?.suggestedCell ?? deriveCellFromAnchor());
	const isNew = !item;
	const workingMeta = ensureSpeedDialMeta(workingItem.id);
	const seed = opts?.seed || {};
	if (isNew && seed?.action) {
		workingItem.action = seed.action;
		workingMeta.action = seed.action;
	}
	if (isNew && seed?.label) workingItem.label.value = seed.label;
	if (isNew && seed?.icon) workingItem.icon.value = seed.icon;
	if (isNew && seed?.view) workingMeta.view = seed.view;
	if (isNew && seed?.href) workingMeta.href = seed.href;
	if (isNew && seed?.description) workingMeta.description = seed.description;
	const draft = {
		label: String(getRefValue(workingItem.label, "New shortcut") ?? "New shortcut"),
		icon: String(getRefValue(workingItem.icon, "sparkle") ?? "sparkle"),
		action: String(resolveItemAction(workingItem) || "open-view"),
		href: String(workingMeta?.href || ""),
		view: String(workingMeta?.view || ""),
		description: String(workingMeta?.description || ""),
		shape: String(workingMeta?.shape || getDefaultTileShape()),
		iconDisplay: String(normalizeIconDisplay(workingMeta?.iconDisplay) || inferIconDisplay({
			iconDisplay: workingMeta?.iconDisplay,
			iconUrl: workingMeta?.iconUrl,
			isLauncherApp: isLauncherAppSpeedDialItem(workingItem)
		})),
		iconUrl: durableIconUrl(resolveSpeedDialIconUrl(workingItem.id, workingMeta?.iconUrl)),
		iconScale: String(workingMeta?.iconScale || "auto"),
		openLinkTarget: resolveItemOpenLinkTarget(workingMeta),
		packageName: String(workingMeta?.packageName || workingMeta?.iconCacheKey || ""),
		widgetKind: String(workingMeta?.widgetKind || getSpeedDialWidgetKind(workingItem) || "clock"),
		spanCols: getItemSpan(workingItem.id)[0],
		spanRows: getItemSpan(workingItem.id)[1],
		clockFormat: String(workingMeta?.clockFormat || "24h"),
		searchUrl: String(workingMeta?.searchUrl || "")
	};
	openShortcutEditor({
		mode: isNew ? "create" : "edit",
		initial: {
			label: draft.label,
			icon: draft.icon,
			action: draft.action,
			href: draft.href,
			view: draft.view,
			description: draft.description,
			shape: draft.shape,
			iconDisplay: draft.iconDisplay,
			iconUrl: draft.iconUrl,
			iconScale: draft.iconScale,
			openLinkTarget: draft.openLinkTarget || defaultOpenLinkTargetForHref(draft.href),
			packageName: draft.packageName,
			widgetKind: draft.widgetKind,
			spanCols: draft.spanCols,
			spanRows: draft.spanRows,
			clockFormat: draft.clockFormat,
			searchUrl: draft.searchUrl
		},
		actionOptions: getActionOptions(),
		viewOptions: [...NAVIGATION_SHORTCUTS].map((shortcut) => ({
			value: String(shortcut.view || ""),
			label: String(shortcut.label || shortcut.view || "")
		})),
		registerForBackNavigation: true,
		isViewAction: (value) => value === "open-view",
		isHrefAction: (value) => value === "open-link" || value === "copy-link" || value === "open-view",
		isWidgetAction: (value) => value === "widget",
		onSave: (next) => {
			workingItem.label.value = next.label;
			workingItem.icon.value = next.icon || "sparkle";
			workingItem.action = next.action || "open-view";
			workingMeta.action = workingItem.action;
			workingMeta.view = next.view;
			workingMeta.href = next.href;
			workingMeta.description = next.description;
			workingMeta.shape = next.shape;
			workingMeta.iconDisplay = normalizeIconDisplay(next.iconDisplay) || "glyph";
			{
				const scale = String(next.iconScale || "auto").trim().toLowerCase();
				workingMeta.iconScale = !scale || scale === "auto" || scale === "default" || scale === "inherit" ? "auto" : scale;
			}
			{
				const rawUrl = String(next.iconUrl || "").trim();
				workingMeta.iconUrl = workingMeta.iconDisplay === "glyph" || !isDurableIconResourceUrl(rawUrl) ? "" : /^data:/i.test(rawUrl) ? persistSpeedDialIconBlob(workingItem.id, rawUrl) : rawUrl;
			}
			{
				const v = String(next.openLinkTarget || "").toLowerCase();
				workingMeta.openLinkTarget = v === "native-window" || v === "native" || v === "window" ? "native-window" : v === "new-tab" || v === "tab" || v === "browser" || v === "browser-tab" ? "new-tab" : v === "external-app" || v === "app" || v === "chooser" || v === "open-with" || v === "open-in-app" ? "external-app" : "inline";
			}
			if (workingItem.action === "widget") {
				const kind = String(next.widgetKind || "").toLowerCase();
				workingMeta.widgetKind = kind === "search" || kind === "android" || kind === "clock" ? kind : "clock";
				setItemSpan(workingItem.id, [Math.max(1, Math.min(8, Number(next.spanCols) || 1)), Math.max(1, Math.min(8, Number(next.spanRows) || 1))]);
				workingMeta.clockFormat = String(next.clockFormat || "24h").toLowerCase() === "12h" ? "12h" : "24h";
				workingMeta.searchUrl = String(next.searchUrl || "").trim();
				workingMeta.action = "widget";
			} else {
				delete workingMeta.widgetKind;
				workingMeta.spanCols = 1;
				workingMeta.spanRows = 1;
			}
			if (isNew) addSpeedDialItem(workingItem);
			else upsertSpeedDialItem(workingItem);
			persistSpeedDialItems();
			persistSpeedDialMeta();
			{
				const home = document.getElementById("home");
				if (home) refreshRootCells(home);
				requestAnimationFrame(() => syncAndroidWidgetHosts(home));
			}
			const idSel = CSS.escape(String(workingItem.id));
			document.querySelectorAll(`[data-speed-dial-item][data-id="${idSel}"][data-layer="icons"]`).forEach((tile) => paintSpeedDialTileIcon(tile, workingItem));
			const labelText = String(next.label || "").trim();
			document.querySelectorAll(`[data-speed-dial-item][data-id="${idSel}"][data-layer="labels"] span`).forEach((span) => {
				span.textContent = labelText;
			});
			showSuccess(isNew ? "Shortcut created" : "Shortcut updated");
		},
		onDelete: isNew ? void 0 : () => {
			releaseAndroidWidget(workingItem);
			removeSpeedDialItem(workingItem.id);
			persistSpeedDialItems();
			persistSpeedDialMeta();
			showSuccess("Shortcut removed");
		}
	});
};
function createCtxMenu(makeView) {
	getLayout();
	getCoordinateRef();
	if (typeof makeView === "function") setSpeedDialViewOpener(makeView);
	if (!ctxMenuBound) {
		ctxMenuBound = true;
		ensureHomeTransferListeners();
		document.addEventListener("contextmenu", (event) => {
			const target = event.target;
			if (!(target?.closest?.("#home, .speed-dial-root, .env-home-workspace, [data-view='home']") || null)) return;
			event.preventDefault();
			const targetEl = target?.closest?.("[data-speed-dial-item]");
			const itemId = targetEl?.getAttribute?.("data-id");
			const item = findSpeedDialItem(itemId);
			if (item?.id) lastFocusedSpeedDialId = item.id;
			const guessedCell = deriveCellFromEvent(event) ?? deriveCellFromAnchor();
			const otherSides = item ? cloneToOtherSidesEntries(item) : [];
			const toLeaf = (entry) => ({
				id: String(entry?.id || "menu-action"),
				label: String(entry?.label || "Action"),
				icon: String(entry?.icon || "command"),
				action: () => entry?.action?.(targetEl, entry, event)
			});
			const openViewTask = (view, params = {}) => {
				const opener = getSpeedDialViewOpener() || makeView;
				if (opener) {
					opener(view, {
						...params,
						newTask: "1"
					});
					return;
				}
				getSpeedDialActionRegistry().get(`open-view-${view}`)?.({
					id: "",
					items: speedDialItems,
					meta: speedDialMeta
				}, {});
			};
			const menuItems = item ? [
				{
					id: "open",
					label: "Open",
					icon: "play",
					action: () => runItemAction(item, void 0, {
						event,
						initiator: targetEl
					}, getSpeedDialViewOpener() || makeView)
				},
				{
					id: "copy-shortcut",
					label: "Copy shortcut",
					icon: "copy",
					action: copySpeedDialItemAction(item)
				},
				{
					id: "paste-shortcut",
					label: "Paste shortcut",
					icon: "clipboard",
					action: pasteSpeedDialItemAction(guessedCell)
				},
				{
					id: "actions",
					label: "Actions",
					icon: "dots-three",
					action: () => {},
					children: [
						toLeaf(createMenuEntryForAction(resolveItemAction(item) || "open-view", item, "Run action", getSpeedDialViewOpener() || makeView)),
						...getSpeedDialMeta(item.id)?.href ? [
							toLeaf(createMenuEntryForAction("open-link", item, "Open link", getSpeedDialViewOpener() || makeView)),
							{
								id: "open-in-app",
								label: "Open in app…",
								icon: "arrow-square-out",
								action: () => runItemAction(item, "open-link", {
									event,
									initiator: targetEl,
									openLinkTarget: "external-app"
								}, getSpeedDialViewOpener() || makeView)
							},
							toLeaf(createMenuEntryForAction("copy-link", item, "Copy link", getSpeedDialViewOpener() || makeView))
						] : [],
						toLeaf(createMenuEntryForAction("copy-state-desc", item, "Copy shortcut", getSpeedDialViewOpener() || makeView))
					]
				},
				{
					id: "open-in",
					label: "Open In New",
					icon: "app-window",
					action: () => {},
					children: [{
						id: "open-in-regular-window",
						label: "Regular window",
						icon: "app-window",
						action: () => {
							const targetView = String(getSpeedDialMeta(item.id)?.view || "viewer");
							openViewTask(targetView, { windowType: "regular" });
						}
					}, {
						id: "open-in-tabbed-window",
						label: "Tabbed window",
						icon: "rows-plus-bottom",
						action: () => {
							const targetView = String(getSpeedDialMeta(item.id)?.view || "viewer");
							openViewTask(targetView, { windowType: "tabbed" });
						}
					}]
				},
				{
					id: "manage",
					label: "Manage",
					icon: "wrench",
					action: () => {},
					children: [
						{
							id: "edit",
							label: "Edit Properties",
							icon: "pencil-simple-line",
							action: () => openItemEditor(item)
						},
						{
							id: "duplicate",
							label: "Duplicate here",
							icon: "copy",
							action: () => {
								if (addClonedSpeedDialItem(item)) {
									showSuccess("Shortcut duplicated");
									return;
								}
								showError("Could not duplicate shortcut");
							}
						},
						...otherSides.length ? [{
							id: "copy-to-side",
							label: "Copy to side",
							icon: "squares-four",
							action: () => {},
							children: otherSides
						}] : [],
						{
							id: "remove",
							label: "Remove",
							icon: "trash",
							danger: true,
							action: () => {
								releaseAndroidWidget(item);
								removeSpeedDialItem(item.id);
								persistSpeedDialItems();
								persistSpeedDialMeta();
								showSuccess("Shortcut removed");
							}
						}
					]
				}
			] : [
				{
					id: "new",
					label: "New",
					icon: "plus",
					action: () => {},
					children: [
						{
							id: "create-shortcut",
							label: "Create shortcut",
							icon: "plus",
							action: () => {
								openItemEditor(void 0, { suggestedCell: guessedCell });
							}
						},
						{
							id: "create-link-shortcut",
							label: "Create link shortcut",
							icon: "link",
							action: () => {
								openItemEditor(void 0, {
									suggestedCell: guessedCell,
									seed: {
										action: "open-link",
										icon: "link",
										label: "New link",
										href: "",
										description: ""
									}
								});
							}
						},
						{
							id: "add-widget",
							label: "Add widget",
							icon: "squares-four",
							action: async () => {
								const pick = await openWidgetPicker();
								if (!pick) return;
								if (pick.kind === "android") addSpeedDialItem(createWidgetSpeedDialItem("android", guessedCell, {
									widgetKind: "android",
									description: pick.bound.label,
									androidWidgetId: pick.bound.widgetId,
									androidProvider: pick.bound.provider,
									spanCols: pick.bound.spanCols,
									spanRows: pick.bound.spanRows,
									iconUrl: pick.bound.preview,
									iconDisplay: "colored"
								}));
								else addSpeedDialItem(createWidgetSpeedDialItem(pick.kind, guessedCell));
								persistSpeedDialItems();
								persistSpeedDialMeta();
								requestAnimationFrame(() => syncAndroidWidgetHosts());
								showSuccess("Widget added");
							}
						},
						{
							id: "paste-shortcut",
							label: "Paste shortcut",
							icon: "clipboard",
							action: pasteSpeedDialItemAction(guessedCell)
						}
					]
				},
				{
					id: "paste-shortcut-root",
					label: "Paste shortcut",
					icon: "clipboard",
					action: pasteSpeedDialItemAction(guessedCell)
				},
				{
					id: "open",
					label: "Open",
					icon: "squares-four",
					action: () => {},
					children: [
						{
							id: "open-explorer",
							label: "Explorer",
							icon: "books",
							action: () => {
								getSpeedDialActionRegistry().get("open-view-explorer")?.({
									id: "",
									items: speedDialItems,
									meta: speedDialMeta,
									viewMaker: getSpeedDialViewOpener() || makeView
								}, {});
							}
						},
						{
							id: "open-settings",
							label: "Settings",
							icon: "gear-six",
							action: () => {
								getSpeedDialActionRegistry().get("open-view-settings")?.({
									id: "",
									items: speedDialItems,
									meta: speedDialMeta,
									viewMaker: getSpeedDialViewOpener() || makeView
								}, {});
							}
						},
						{
							id: "open-window-type",
							label: "New Window",
							icon: "app-window",
							action: () => {},
							children: [{
								id: "open-viewer-regular",
								label: "Viewer (regular)",
								icon: "article",
								action: () => openViewTask("viewer", { windowType: "regular" })
							}, {
								id: "open-viewer-tabbed",
								label: "Viewer (tabbed)",
								icon: "rows-plus-bottom",
								action: () => openViewTask("viewer", { windowType: "tabbed" })
							}]
						}
					]
				},
				{
					id: "wallpaper",
					label: "Wallpaper",
					icon: "image",
					action: () => {},
					children: [{
						id: "change-wallpaper",
						label: "Change wallpaper",
						icon: "image",
						action: pickWallpaper
					}]
				},
				{
					id: "speed-dial-source",
					label: "Speed dial source",
					icon: "squares-four",
					action: () => {},
					children: [{
						id: "source-curated",
						label: "Curated",
						icon: "star",
						action: () => {
							if (isMirrorMode()) {
								setSpeedDialMirrorPath(null);
								showSuccess("Switched to curated speed dial");
							}
						}
					}, {
						id: "source-mirror",
						label: "Mirror path…",
						icon: "folders",
						action: () => {
							const roots = listVirtualRootEntriesFromRouter().map((e) => `/${e.name}/`);
							const current = getSpeedDialMirrorPath() || "";
							const quick = roots.length ? roots.map((r) => ({
								id: `mirror-root-${r}`,
								label: r,
								icon: "folder",
								action: () => {
									setSpeedDialMirrorPath(r);
									showSuccess(`Mirror source: ${r}`);
								}
							})) : [];
							openUnifiedContextMenu({
								x: event.clientX + 4,
								y: event.clientY + 4,
								items: [
									...current ? [{
										id: "mirror-current",
										label: `Current: ${current}`,
										icon: "info",
										action: () => {}
									}] : [],
									...quick,
									{
										id: "mirror-custom",
										label: "Custom path…",
										icon: "pencil-simple-line",
										action: () => {
											const entered = String(typeof globalThis !== "undefined" && typeof globalThis.prompt === "function" ? globalThis.prompt("Mirror speed dial path", current || "/user/") : current || "/user/").trim();
											if (!entered) return;
											setSpeedDialMirrorPath(entered);
											showSuccess(`Mirror source: ${entered}`);
										}
									},
									...current ? [{
										id: "mirror-clear",
										label: "Clear (back to curated)",
										icon: "x",
										danger: true,
										action: () => {
											setSpeedDialMirrorPath(null);
											showSuccess("Switched to curated speed dial");
										}
									}] : []
								],
								compact: true
							});
						}
					}]
				}
			];
			openUnifiedContextMenu({
				x: event.clientX,
				y: event.clientY,
				items: menuItems,
				compact: true
			});
		}, { capture: true });
	}
	return H`<div data-home-ctx-menu style="display:none;"></div>`;
}
//#endregion
//#region ../../modules/views/home-view/src/ts/SpeedDial.scss?inline
var SpeedDial_default = "@function --wavy-step(--step <number>){--angle:calc((var(--step, 0) * 2) * 1rad * pi);--variant:calc(cos(var(--clip-freq, 8) * var(--angle, 0deg)) * 0.5 + 0.5);--adjust:calc(var(--variant, 0) * var(--clip-amplitude, 0));--x:calc(50% + (cos(var(--angle, 0deg)) * (0.5 - var(--adjust, 0))) * var(--icon-size, 100%));--y:calc(50% + (sin(var(--angle, 0deg)) * (0.5 - var(--adjust, 0))) * var(--icon-size, 100%));result:var(--x) var(--y)}@layer ux-shapes{.shaped{aspect-ratio:1/1!important;border-radius:var(--border-radius,1.5rem);contain:strict;display:flex;overflow:hidden;padding:1.25rem;place-content:center;place-items:center;pointer-events:auto;transition:--background-tone-shift .2s ease-in-out,--icon-color .2s ease-in-out;transition-behavior:allow-discrete;user-select:none;z-index:1}.shaped,.shaped :is(span,ui-icon){block-size:fit-content;inline-size:stretch}.shaped ui-icon{aspect-ratio:1/1!important}[data-dragging]{z-index:calc(100 + var(--z-index, 0))!important}:not(.shaped) .shaped[data-shape],:not(.shaped)>[data-shape],:not(:has(.shaped))[data-shape]{aspect-ratio:1/1!important;contain:strict;overflow:hidden;pointer-events:auto;touch-action:none}:not(.shaped) .shaped[data-shape=square],:not(.shaped)>[data-shape=square],:not(:has(.shaped))[data-shape=square]{--border-radius:var(--radius-md);--clip-path:none}:not(.shaped) .shaped[data-shape=squircle],:not(.shaped)>[data-shape=squircle],:not(:has(.shaped))[data-shape=squircle]{--border-radius:28%;--clip-path:none}:not(.shaped) .shaped[data-shape=circle],:not(.shaped)>[data-shape=circle],:not(:has(.shaped))[data-shape=circle]{--border-radius:50%;--clip-path:none}:not(.shaped) .shaped[data-shape=rounded],:not(.shaped)>[data-shape=rounded],:not(:has(.shaped))[data-shape=rounded]{--border-radius:var(--radius-xl);--clip-path:none}:not(.shaped) .shaped[data-shape=blob],:not(.shaped)>[data-shape=blob],:not(:has(.shaped))[data-shape=blob]{--border-radius:60% 40% 30% 70%/60% 30% 70% 40%;--clip-path:none}:not(.shaped) .shaped[data-shape=hexagon],:not(.shaped)>[data-shape=hexagon],:not(:has(.shaped))[data-shape=hexagon]{--border-radius:0;--clip-path:polygon(round 0.375rem,50% 0%,93.3% 25%,93.3% 75%,50% 100%,6.7% 75%,6.7% 25%)}:not(.shaped) .shaped[data-shape=diamond],:not(.shaped)>[data-shape=diamond],:not(:has(.shaped))[data-shape=diamond]{--border-radius:0;--clip-path:polygon(round 0.5rem,50% 0%,100% 50%,50% 100%,0% 50%)}:not(.shaped) .shaped[data-shape=star],:not(.shaped)>[data-shape=star],:not(:has(.shaped))[data-shape=star]{--border-radius:0;--clip-path:polygon(round 0.25rem,50% 0%,61% 35%,98% 38%,68% 59%,79% 95%,50% 75%,21% 95%,32% 59%,2% 38%,39% 35%)}:not(.shaped) .shaped[data-shape=badge],:not(.shaped)>[data-shape=badge],:not(:has(.shaped))[data-shape=badge]{--border-radius:0;--clip-path:polygon(round 0.375rem,0% 0%,100% 0%,100% 70%,50% 100%,0% 70%)}:not(.shaped) .shaped[data-shape=heart],:not(.shaped)>[data-shape=heart],:not(:has(.shaped))[data-shape=heart]{--border-radius:0;--clip-path:polygon(round 0.25rem,50% 100%,10% 65%,0% 45%,0% 30%,5% 15%,18% 3%,35% 0%,50% 12%,65% 0%,82% 3%,95% 15%,100% 30%,100% 45%,90% 65%)}:not(.shaped) .shaped[data-shape=clover],:not(.shaped)>[data-shape=clover],:not(:has(.shaped))[data-shape=clover]{--border-radius:0;--clip-path:polygon(round 0.375rem,50% 0%,60% 30%,70% 30%,100% 50%,70% 70%,60% 70%,50% 100%,40% 70%,30% 70%,0% 50%,30% 30%,40% 30%)}:not(.shaped) .shaped[data-shape=flower],:not(.shaped)>[data-shape=flower],:not(:has(.shaped))[data-shape=flower]{--border-radius:0;--clip-path:polygon(round 0.25rem,50% 0%,58% 25%,85% 15%,68% 40%,100% 50%,68% 60%,85% 85%,58% 75%,50% 100%,42% 75%,15% 85%,32% 60%,0% 50%,32% 40%,15% 15%,42% 25%)}:not(.shaped) .shaped[data-shape=triangle],:not(.shaped)>[data-shape=triangle],:not(:has(.shaped))[data-shape=triangle]{--border-radius:0;--clip-path:polygon(round 0.5rem,50% 0%,100% 87%,0% 87%)}:not(.shaped) .shaped[data-shape=pentagon],:not(.shaped)>[data-shape=pentagon],:not(:has(.shaped))[data-shape=pentagon]{--border-radius:0;--clip-path:polygon(round 0.375rem,50% 0%,97.5% 35%,79.5% 95%,20.5% 95%,2.5% 35%)}:not(.shaped) .shaped[data-shape=octagon],:not(.shaped)>[data-shape=octagon],:not(:has(.shaped))[data-shape=octagon]{--border-radius:0;--clip-path:polygon(round 0.25rem,30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%)}:not(.shaped) .shaped[data-shape=cross],:not(.shaped)>[data-shape=cross],:not(:has(.shaped))[data-shape=cross]{--border-radius:0;--clip-path:polygon(round 0.375rem,35% 0%,65% 0%,65% 35%,100% 35%,100% 65%,65% 65%,65% 100%,35% 100%,35% 65%,0% 65%,0% 35%,35% 35%)}:not(.shaped) .shaped[data-shape=arrow],:not(.shaped)>[data-shape=arrow],:not(:has(.shaped))[data-shape=arrow]{--border-radius:0;--clip-path:polygon(round 0.375rem,0% 20%,60% 20%,60% 0%,100% 50%,60% 100%,60% 80%,0% 80%)}:not(.shaped) .shaped[data-shape=egg],:not(.shaped)>[data-shape=egg],:not(:has(.shaped))[data-shape=egg]{--border-radius:50% 50% 50% 50%/60% 60% 40% 40%;--clip-path:none}:not(.shaped) .shaped[data-shape=tear],:not(.shaped)>[data-shape=tear],:not(:has(.shaped))[data-shape=tear]{--border-radius:50cqmin 50cqmin 5rem 50cqmin;--clip-path:none;border-end-end-radius:5rem;border-end-start-radius:50cqmin;border-start-end-radius:50cqmin;border-start-start-radius:50cqmin}:not(.shaped) .shaped[data-shape=wavy],:not(.shaped)>[data-shape=wavy],:not(:has(.shaped))[data-shape=wavy]{--border-radius:calc(var(--icon-size, 100%) * 0.5)}}@layer launcher-icons{.ui-ws-item-icon-mask[data-launcher-icon]{background-color:var(--icon-color,var(--sd-figure-ink,currentColor));block-size:var(--launcher-icon-size,var(--icon-size,2.2rem));box-sizing:border-box;color:var(--icon-color,var(--sd-figure-ink,currentColor));display:block;filter:drop-shadow(0 1px 2px color-mix(in oklab,#000 14%,transparent));flex-shrink:0;inline-size:var(--launcher-icon-size,var(--icon-size,2.2rem));mask-image:var(--launcher-app-icon-url);mask-origin:center;mask-position:center;mask-repeat:no-repeat;mask-size:calc(100% * var(--launcher-icon-mask-scale, 1.1))}}@layer views{.speed-dial-root,.speed-dial-root.app-oriented-desktop{--home-font-sans:system-ui,-apple-system,\"Segoe UI\",Roboto,\"Noto Sans\",\"Helvetica Neue\",Arial,\"Apple Color Emoji\",\"Segoe UI Emoji\",sans-serif;--sd-cast-shadow:color-mix(in oklab,#000 38%,transparent);--sd-cast-shadow-deep:color-mix(in oklab,#000 40%,transparent);--sd-cast-ink:rgb(0 0 0/0.88);--sd-cast-glow:rgb(0 0 0/0.45);font-family:var(--home-font-sans);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-kerning:normal;font-variant-numeric:tabular-nums;text-rendering:optimizeLegibility}.speed-dial-core-rail{--sd-rail-ink:var(--wallpaper-contrast-color,var(--env-launcher-fg,CanvasText));align-items:stretch;border:0 transparent;color:var(--sd-rail-ink);display:flex;flex-direction:row;inset-block:12%;inset-inline-end:0;max-block-size:76%;outline:0 none transparent;padding:0;pointer-events:none;position:fixed;z-index:6}.speed-dial-core-rail__toggle{align-items:center;align-self:center;background:transparent;block-size:2.6rem;border:0 transparent;border-inline-end:none;border-radius:10px 0 0 10px;color:color-mix(in oklab,var(--sd-rail-ink) 78%,transparent);display:inline-flex;inline-size:1.65rem;justify-content:center;margin:0;padding:0;pointer-events:auto;--icon-color:color-mix(in oklab,var(--sd-rail-ink) 78%,transparent);cursor:pointer}.speed-dial-core-rail__toggle ui-icon{--icon-size:1.1rem;--icon-color:color-mix(in oklab,var(--sd-rail-ink) 78%,transparent);pointer-events:none}.speed-dial-core-rail__panel{backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);background:color-mix(in oklab,var(--wallpaper-underlying-color,Canvas) 82%,transparent);border:1px solid color-mix(in oklab,var(--sd-rail-ink) 16%,transparent);border-inline-end:none;border-radius:14px 0 0 14px;color:var(--sd-rail-ink);display:none;flex-direction:column;gap:.45rem;max-inline-size:5.2rem;min-inline-size:3.4rem;overflow:auto;padding:.55rem .45rem;pointer-events:auto}.speed-dial-core-rail[data-open] .speed-dial-core-rail__panel{display:flex}.speed-dial-core-rail__item{align-items:center;appearance:none;background:transparent;border:none;border-radius:var(--radius-lg);color:inherit;cursor:pointer;display:flex;flex-direction:column;gap:.2rem;margin:0;min-inline-size:0;padding:.35rem .2rem}.speed-dial-core-rail__item:focus-visible,.speed-dial-core-rail__item:hover{background:color-mix(in oklab,var(--sd-rail-ink) 10%,transparent);outline:none}.speed-dial-core-rail__item ui-icon{--icon-size:1.55rem;--icon-color:var(--sd-rail-ink);color:var(--sd-rail-ink);pointer-events:none}.speed-dial-workspace-pager{display:flex;gap:.4rem;inset-block-end:.55rem;inset-inline:0;justify-content:center;pointer-events:none;position:absolute;z-index:5}.speed-dial-workspace-pager__dot{background:color-mix(in oklab,var(--wallpaper-contrast-color,var(--env-launcher-fg,CanvasText)) 35%,transparent);block-size:.45rem;border:none;border-radius:var(--radius-full);cursor:pointer;inline-size:.45rem;padding:0;pointer-events:auto}.speed-dial-workspace-pager__dot[data-active]{background:var(--wallpaper-contrast-color,var(--env-launcher-fg,CanvasText));inline-size:.85rem}.sd-widget-host{aspect-ratio:auto;container-name:sd-widget;container-type:size;max-block-size:none;max-inline-size:none;overflow:visible;place-self:stretch;position:relative;--tile-size:100%;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;background:transparent!important;border-radius:0!important;box-shadow:none!important;clip-path:none!important;filter:none!important}.sd-widget-host>:is(ui-icon,.ui-ws-item-icon-native,img[data-launcher-icon],.ui-ws-item-icon-img,.ui-ws-item-icon-mask){display:none!important}.sd-widget{align-items:stretch;block-size:100%;box-sizing:border-box;display:flex;flex-direction:column;inline-size:100%;isolation:isolate;justify-content:center;min-block-size:0;min-inline-size:0;padding:clamp(.45rem,6cqi,.9rem);pointer-events:auto;z-index:1}.sd-widget,.sd-widget-host:not([data-widget=android]){touch-action:none;user-select:none;-webkit-user-select:none}.sd-widget-host:not([data-widget=android]){cursor:grab;pointer-events:auto!important}.sd-widget-host[data-interaction-state=onGrab],.sd-widget-host[data-interaction-state=onMoving]{cursor:grabbing}.sd-widget--clock,.sd-widget--search{--sd-widget-seed:var(--base-color,var(--color-primary,#5a9ec8));--sd-you-ink:color-mix(in oklab,var(--wallpaper-contrast-color,var(--env-launcher-fg)) 72%,var(--sd-widget-seed) 28%)}.sd-widget--clock{align-items:center;color:var(--sd-you-ink);font-variant-numeric:tabular-nums;gap:.12em;justify-content:center;overflow:hidden;padding-block-start:1.35rem;text-align:center}.sd-widget__time{color:color-mix(in oklab,var(--sd-you-ink) 78%,var(--sd-widget-seed) 22%);font-feature-settings:\"tnum\" 1;font-size:clamp(1.6rem,min(28cqi,38cqb),10rem);font-weight:650;letter-spacing:.01em;line-height:1;text-shadow:0 1px 2px var(--sd-cast-ink,rgba(0,0,0,.88)),0 0 12px var(--sd-cast-glow,rgba(0,0,0,.45))}.sd-widget__date,.sd-widget__time{font-variant-numeric:tabular-nums;max-inline-size:100%;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap}.sd-widget__date{color:color-mix(in oklab,var(--sd-you-ink) 88%,var(--wallpaper-contrast-color,var(--env-launcher-fg)) 12%);font-size:clamp(.75rem,min(10cqi,12cqb),2.75rem);opacity:.86;text-shadow:0 1px 2px var(--sd-cast-ink,rgba(0,0,0,.88)),0 0 8px var(--sd-cast-glow,rgba(0,0,0,.45))}.ui-ws-item[data-widget=android]{aspect-ratio:auto;max-block-size:none;max-inline-size:none;place-self:stretch;pointer-events:none}.sd-widget-chrome,.sd-widget-resize{pointer-events:auto;--sd-widget-ink:var(--wallpaper-contrast-color,var(--env-launcher-fg,CanvasText));--sd-widget-chip:color-mix(in oklab,Canvas 72%,var(--sd-widget-ink) 28%);--sd-widget-ring:color-mix(in oklab,var(--sd-widget-ink) 55%,Canvas 45%)}.sd-widget-chrome{background:transparent;block-size:1.45rem;cursor:grab;display:grid;inset-block-start:0;inset-inline:0;place-items:center;position:absolute;touch-action:none;z-index:4}.sd-widget-chrome:before{block-size:.32rem;border-radius:var(--radius-full);content:\"\";inline-size:2.4rem;opacity:.01}.sd-widget-chrome:before,.sd-widget-resize{background:var(--sd-widget-chip);box-shadow:0 0 0 1px var(--sd-widget-ring);transition:opacity .12s ease}.sd-widget-resize{block-size:1.35rem;border:none;border-radius:.35rem;cursor:nwse-resize;inline-size:1.35rem;inset-block-end:.15rem;inset-inline-end:.15rem;opacity:0;padding:0;position:absolute;touch-action:none;z-index:5}.sd-widget-resize:before{block-size:.5rem;border-block-end:2px solid var(--sd-widget-ink);border-inline-end:2px solid var(--sd-widget-ink);border-radius:0 0 .08rem 0;content:\"\";filter:drop-shadow(0 0 1px Canvas);inline-size:.5rem;inset-block-end:.22rem;inset-inline-end:.22rem;position:absolute}.sd-widget-resize:after{content:\"\";inset:-.45rem;position:absolute}.sd-widget-host:active .sd-widget-chrome:before,.sd-widget-host:active .sd-widget-resize,.sd-widget-host:focus-within .sd-widget-chrome:before,.sd-widget-host:focus-within .sd-widget-resize,.sd-widget-host:hover .sd-widget-chrome:before,.sd-widget-host:hover .sd-widget-resize,.sd-widget-host[data-interaction-state=onGrab] .sd-widget-chrome:before,.sd-widget-host[data-interaction-state=onGrab] .sd-widget-resize,.sd-widget-host[data-interaction-state=onMoving] .sd-widget-chrome:before,.sd-widget-host[data-interaction-state=onMoving] .sd-widget-resize,.sd-widget-host[data-resizing] .sd-widget-chrome:before,.sd-widget-host[data-resizing] .sd-widget-resize{opacity:1}@media (pointer:coarse){.sd-widget-chrome{block-size:2.1rem}.sd-widget-resize{block-size:2.05rem;inline-size:2.05rem}}.sd-widget--android{opacity:.08;pointer-events:none}.sd-widget__preview{block-size:100%;inline-size:100%;object-fit:contain}.sd-widget--search{justify-content:center;padding-block-end:2rem;padding-block-start:2.2rem;padding-inline:.7rem}.sd-widget__search{background:color-mix(in oklab,color-mix(in oklab,var(--wallpaper-underlying-color,Canvas) 78%,var(--sd-widget-seed,var(--base-color)) 22%) 70%,transparent);border:1px solid color-mix(in oklab,var(--sd-you-ink,var(--wallpaper-contrast-color)) 32%,transparent);border-radius:var(--radius-full);caret-color:var(--sd-you-ink,currentColor);color:var(--sd-you-ink,var(--wallpaper-contrast-color));cursor:text;font:inherit;font-size:clamp(.85rem,8cqi,1.2rem);inline-size:100%;min-block-size:clamp(2rem,28cqb,3.1rem);padding:.35rem .85rem;touch-action:manipulation;user-select:text;-webkit-user-select:text}.sd-widget__search::placeholder{color:color-mix(in oklab,var(--sd-you-ink,var(--wallpaper-contrast-color)) 62%,transparent)}.speed-dial-core-rail__label{font-size:.62rem;line-height:1.15;max-inline-size:100%;opacity:.88;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ui-grid-item,ui-modal,ui-window-frame{--opacity:1;--scale:1;--rotate:0deg;--translate-x:0%;--translate-y:0%;content-visibility:auto;isolation:isolate;opacity:var(--opacity,1);rotate:0deg;scale:1;transform-box:fill-box;transform-origin:50% 50%;transform-style:flat;translate:0 0 0}.speed-dial-root{background-color:initial;block-size:var(--lv-height,100lvb);border-radius:0;box-sizing:border-box;display:grid;grid-column:1/-1;grid-row:1/-1;grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr);inline-size:var(--lv-width,100lvi);inset:0 auto auto 0;max-block-size:var(--lv-height,100lvb);max-inline-size:var(--lv-width,100lvi);min-block-size:var(--lv-height,100lvb);min-inline-size:0;overflow:hidden;perspective:72rem;pointer-events:auto;position:fixed;transform-style:preserve-3d;user-select:none;user-drag:none;-webkit-user-drag:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;touch-action:none}.speed-dial-root>*{grid-column:1/-1;grid-row:1/-1}.speed-dial-root[data-ws-turning] .speed-dial-grid{backface-visibility:hidden;transform-origin:50% 50%;will-change:transform,opacity}.speed-dial-root .speed-dial-grid--turn-ghost{pointer-events:none;z-index:3}.speed-dial-root.ui-orientbox:focus,.speed-dial-root.ui-orientbox:focus-visible{box-shadow:none!important;outline:none!important}.speed-dial-root.app-oriented-desktop.ui-orientbox{pointer-events:auto}.speed-dial-grid{border-radius:0;display:grid;grid-column:1/-1;grid-row:1/-1;grid-template-columns:repeat(var(--grid-columns,var(--cs-layout-c,4)),minmax(0,1fr));grid-template-rows:repeat(var(--grid-rows,var(--cs-layout-r,8)),minmax(0,1fr));padding:var(--speed-dial-padding,1rem)}@media (orientation:portrait){.speed-dial-grid{padding-block:2.5rem;padding-inline:1.5rem}}@media (orientation:landscape){.speed-dial-grid{padding-block:1.5rem;padding-inline:2.5rem}}.speed-dial-grid[data-grid-layer=icons]{background:transparent!important;contain:style;isolation:isolate;overflow:visible;pointer-events:none;z-index:2}.speed-dial-grid[data-grid-layer=icons]:has([data-dragging]){z-index:3}.speed-dial-grid[data-grid-layer=labels]{animation:none!important;animation-duration:0s!important;background:transparent!important;contain:layout style;isolation:isolate;overflow:visible;pointer-events:none!important;transition:none!important;transition-duration:0s!important;z-index:1}.speed-dial-grid .sd-drop-ghost{background:color-mix(in oklab,CanvasText 12%,transparent);border-radius:1.15rem;box-shadow:inset 0 0 0 2px color-mix(in oklab,CanvasText 38%,transparent);min-block-size:0;min-inline-size:0;pointer-events:none;z-index:0}.speed-dial-grid .ui-ws-item{--drag-x:0px;--drag-y:0px;--tile-size:4rem}.speed-dial-grid .ui-ws-item:not([data-layer=labels]){grid-column:var(--cell-column,auto);grid-row:var(--cell-row,auto)}.speed-dial-grid .ui-ws-item{aspect-ratio:1/1;background-color:initial;block-size:100%;display:grid;grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr);inline-size:100%;max-block-size:var(--tile-size);max-inline-size:var(--tile-size);min-block-size:0;min-inline-size:0;place-content:center;place-items:center;place-self:center;pointer-events:auto;position:relative;text-align:center;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;contain:none;filter:none;overflow:visible;transform:translate3d(var(--drag-x,0),var(--drag-y,0),0);transform-origin:50% 50%;transition:transform .24s cubic-bezier(.22,.8,.3,1),scale .18s ease-out,filter .18s ease-out;z-index:1}.speed-dial-grid .ui-ws-item:hover{scale:1.06}.speed-dial-grid .ui-ws-item:hover .ui-ws-item-icon:not([data-shape=shapeless]){background:color-mix(in oklab,var(--color-surface-container-high,#1f2937) 72%,var(--wallpaper-underlying-color,#121214) 28%);box-shadow:0 10px 36px -10px var(--sd-cast-shadow-deep,color-mix(in oklab,#000 40%,transparent))}.speed-dial-grid :is(.ui-ws-item.sd-widget-host:hover,.ui-ws-item[data-spanned]:hover,.ui-ws-item[data-widget]:hover){scale:1}.speed-dial-grid .ui-ws-item:active{scale:.94}.speed-dial-grid :is(.ui-ws-item[data-dragging],.ui-ws-item[data-interaction-state=onGrab],.ui-ws-item[data-interaction-state=onMoving],.ui-ws-item[data-interaction-state=onPlace],.ui-ws-item[data-interaction-state=onRelax]){scale:1;transition:none!important}.speed-dial-grid .ui-ws-item.sd-widget-host,.speed-dial-grid .ui-ws-item[data-spanned]:not([data-layer=labels]),.speed-dial-grid .ui-ws-item[data-widget]:not([data-layer=labels]){grid-column:var(--cell-column,auto)/span var(--cell-span-x,1)!important;grid-row:var(--cell-row,auto)/span var(--cell-span-y,1)!important;place-self:stretch!important;align-self:stretch!important;aspect-ratio:auto!important;block-size:100%!important;inline-size:100%!important;justify-self:stretch!important;max-block-size:none!important;max-inline-size:none!important;--tile-size:100%}.speed-dial-grid .ui-ws-item.ui-ws-item-icon{display:grid;transition:background-color .2s ease,box-shadow .2s ease;--icon-size:2.2rem;--launcher-icon-mask-scale:1.12;aspect-ratio:1/1}.speed-dial-grid .ui-ws-item.ui-ws-item-icon.shaped:not(.sd-widget-host){aspect-ratio:1/1!important;block-size:min(100%,var(--tile-size,4rem))!important;contain:none!important;inline-size:min(100%,var(--tile-size,4rem))!important;padding:.35rem!important}.speed-dial-grid .ui-ws-item.ui-ws-item-icon{block-size:100%;contain:layout style;cursor:pointer;inline-size:100%;line-height:0;max-block-size:var(--tile-size);max-inline-size:var(--tile-size);min-block-size:0;min-inline-size:0;overflow:hidden;padding:.8rem;place-content:center;place-items:center;pointer-events:auto;position:relative;text-align:center}.speed-dial-grid :is(.ui-ws-item.ui-ws-item-icon.sd-widget-host,.ui-ws-item.ui-ws-item-icon[data-shape=none]){aspect-ratio:auto!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;background:transparent!important;block-size:100%!important;border-radius:0!important;box-shadow:none!important;clip-path:none!important;cursor:default;filter:none!important;inline-size:100%!important;line-height:normal;max-block-size:none!important;max-inline-size:none!important;overflow:visible;padding:0}@supports (corner-shape:squircle){.speed-dial-grid :is(.ui-ws-item.ui-ws-item-icon.sd-widget-host,.ui-ws-item.ui-ws-item-icon[data-shape=none]){corner-shape:unset}}.speed-dial-grid .ui-ws-item.ui-ws-item-icon{background:color-mix(in oklab,var(--color-surface-container,#1a1a1e) 78%,var(--wallpaper-underlying-color,#121214) 22%);--sd-figure-ink:var(--color-on-surface,light-dark(#1a1c1f,#e8eaed));backdrop-filter:blur(16px) saturate(1.2);-webkit-backdrop-filter:blur(16px) saturate(1.2);border:none;box-shadow:0 6px 24px -8px var(--sd-cast-shadow,color-mix(in oklab,#000 38%,transparent));filter:none}:where(html[data-cwsp-native-shell=capacitor]) .speed-dial-grid .ui-ws-item.ui-ws-item-icon{backdrop-filter:none;-webkit-backdrop-filter:none}.speed-dial-grid .ui-ws-item.ui-ws-item-icon:not([data-shape]){border-radius:1.5rem!important}@supports (corner-shape:round){.speed-dial-grid .ui-ws-item.ui-ws-item-icon:not([data-shape]){corner-shape:round}}.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=circle]{aspect-ratio:1/1!important;block-size:min(100%,var(--tile-size,4rem))!important;border-radius:50%!important;inline-size:min(100%,var(--tile-size,4rem))!important;max-block-size:var(--tile-size,4rem);max-inline-size:var(--tile-size,4rem)}@supports (corner-shape:round){.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=circle]{corner-shape:round}}.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=square]{border-radius:max(.55rem,14%)!important}@supports (corner-shape:square){.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=square]{corner-shape:square}}.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=squircle]{border-radius:1.5rem!important}@supports (corner-shape:squircle){.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=squircle]{corner-shape:unset}}@supports (corner-shape:round){.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=squircle]{corner-shape:round}}.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=wavy]{--clip-amplitude:0.05;--clip-freq:8;--clip-path:shape(evenodd from --wavy-step(0),line to --wavy-step(0.01),line to --wavy-step(0.02),line to --wavy-step(0.03),line to --wavy-step(0.04),line to --wavy-step(0.05),line to --wavy-step(0.06),line to --wavy-step(0.07),line to --wavy-step(0.08),line to --wavy-step(0.09),line to --wavy-step(0.1),line to --wavy-step(0.11),line to --wavy-step(0.12),line to --wavy-step(0.13),line to --wavy-step(0.14),line to --wavy-step(0.15),line to --wavy-step(0.16),line to --wavy-step(0.17),line to --wavy-step(0.18),line to --wavy-step(0.19),line to --wavy-step(0.2),line to --wavy-step(0.21),line to --wavy-step(0.22),line to --wavy-step(0.23),line to --wavy-step(0.24),line to --wavy-step(0.25),line to --wavy-step(0.26),line to --wavy-step(0.27),line to --wavy-step(0.28),line to --wavy-step(0.29),line to --wavy-step(0.3),line to --wavy-step(0.31),line to --wavy-step(0.32),line to --wavy-step(0.33),line to --wavy-step(0.34),line to --wavy-step(0.35),line to --wavy-step(0.36),line to --wavy-step(0.37),line to --wavy-step(0.38),line to --wavy-step(0.39),line to --wavy-step(0.4),line to --wavy-step(0.41),line to --wavy-step(0.42),line to --wavy-step(0.43),line to --wavy-step(0.44),line to --wavy-step(0.45),line to --wavy-step(0.46),line to --wavy-step(0.47),line to --wavy-step(0.48),line to --wavy-step(0.49),line to --wavy-step(0.5),line to --wavy-step(0.51),line to --wavy-step(0.52),line to --wavy-step(0.53),line to --wavy-step(0.54),line to --wavy-step(0.55),line to --wavy-step(0.56),line to --wavy-step(0.57),line to --wavy-step(0.58),line to --wavy-step(0.59),line to --wavy-step(0.6),line to --wavy-step(0.61),line to --wavy-step(0.62),line to --wavy-step(0.63),line to --wavy-step(0.64),line to --wavy-step(0.65),line to --wavy-step(0.66),line to --wavy-step(0.67),line to --wavy-step(0.68),line to --wavy-step(0.69),line to --wavy-step(0.7),line to --wavy-step(0.71),line to --wavy-step(0.72),line to --wavy-step(0.73),line to --wavy-step(0.74),line to --wavy-step(0.75),line to --wavy-step(0.76),line to --wavy-step(0.77),line to --wavy-step(0.78),line to --wavy-step(0.79),line to --wavy-step(0.8),line to --wavy-step(0.81),line to --wavy-step(0.82),line to --wavy-step(0.83),line to --wavy-step(0.84),line to --wavy-step(0.85),line to --wavy-step(0.86),line to --wavy-step(0.87),line to --wavy-step(0.88),line to --wavy-step(0.89),line to --wavy-step(0.9),line to --wavy-step(0.91),line to --wavy-step(0.92),line to --wavy-step(0.93),line to --wavy-step(0.94),line to --wavy-step(0.95),line to --wavy-step(0.96),line to --wavy-step(0.97),line to --wavy-step(0.98),line to --wavy-step(0.99),line to --wavy-step(1),close);--icon-size:100%;--corrector:1.1}@supports (border-shape:inset(0)){.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=wavy]{border-shape:var(--clip-path);overflow:hidden!important;corner-shape:superellipse(1);border-radius:50%!important}}.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=wavy]{clip-path:var(--clip-path)}.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=shapeless]{backdrop-filter:none!important;-webkit-backdrop-filter:none!important;background:transparent!important;border-radius:0!important;box-shadow:none!important;clip-path:none!important;contain:none;overflow:visible!important;padding:.12rem}@supports (corner-shape:squircle){.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=shapeless]{corner-shape:unset}}.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=shapeless] .ui-ws-item-icon-img,.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=shapeless] img[data-bookmark-favicon],.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=shapeless] img[data-launcher-icon],.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=shapeless] ui-icon{border-radius:0;object-fit:contain}.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=shapeless] :is(img.sd-icon-silhouette,ui-icon.sd-icon-silhouette){filter:brightness(0) blur(7px);inset:0;object-fit:contain;opacity:.4;pointer-events:none;position:absolute;transform:scale(var(--sd-item-icon-scale,var(--sd-launcher-icon-scale,1))) translateY(8%);z-index:1}.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=shapeless] .ui-ws-item-icon-img:not(.sd-icon-silhouette),.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=shapeless] img[data-bookmark-favicon]:not(.sd-icon-silhouette),.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=shapeless] img[data-launcher-icon]:not(.sd-icon-silhouette),.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=shapeless] ui-icon:not(.sd-icon-silhouette){filter:none;z-index:3}.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=shapeless]{--sd-figure-ink:var(--wallpaper-contrast-color,var(--env-launcher-fg,#f7f7f8))}.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=shapeless][data-icon-display=glyph] ui-icon:not(.sd-icon-silhouette){filter:drop-shadow(0 3px 6px rgba(0,0,0,.42))}.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-shape=shapeless][data-icon-display=glyph] .sd-icon-silhouette{display:none}.speed-dial-grid .ui-ws-item.ui-ws-item-icon[data-icon-display=glyph]{--sd-item-icon-scale:0.78}.speed-dial-grid .ui-ws-item.ui-ws-item-icon .ui-ws-item-icon-img,.speed-dial-grid .ui-ws-item.ui-ws-item-icon img[data-bookmark-favicon],.speed-dial-grid .ui-ws-item.ui-ws-item-icon img[data-launcher-icon]:not([data-bookmark-favicon]),.speed-dial-grid .ui-ws-item.ui-ws-item-icon ui-icon{transform:scale(var(--sd-item-icon-scale,var(--sd-launcher-icon-scale,1.28)));transform-origin:center center}.speed-dial-grid .ui-ws-item.ui-ws-item-icon img[data-icon-pending],.speed-dial-grid .ui-ws-item.ui-ws-item-icon img[data-launcher-icon]:not([src]),.speed-dial-grid .ui-ws-item.ui-ws-item-icon ui-icon[data-icon-pending]{opacity:0;visibility:hidden}.speed-dial-grid .ui-ws-item.ui-ws-item-icon img[data-launcher-icon]:not([data-bookmark-favicon]){block-size:100%;filter:drop-shadow(0 1px 3px rgba(0,0,0,.2));inline-size:100%;inset:0;object-fit:cover;object-position:center;pointer-events:none;position:absolute;z-index:3}.speed-dial-grid .ui-ws-item.ui-ws-item-icon .ui-ws-item-icon-img:not([data-launcher-icon]),.speed-dial-grid .ui-ws-item.ui-ws-item-icon .ui-ws-item-icon-img[data-bookmark-favicon],.speed-dial-grid .ui-ws-item.ui-ws-item-icon img[data-bookmark-favicon]{aspect-ratio:1/1;block-size:stretch;border-radius:0;filter:drop-shadow(0 1px 2px rgba(0,0,0,.1333333333));image-rendering:auto;inline-size:stretch;inset:0;object-fit:cover;object-position:center;pointer-events:none;position:absolute;z-index:3}.speed-dial-grid .ui-ws-item.ui-ws-item-icon .ui-ws-item-icon-mask[data-launcher-icon]{inset:0;margin:auto;pointer-events:none;position:absolute;z-index:3;--launcher-icon-size:var(--icon-size,2.2rem);--launcher-icon-mask-scale:var(--sd-item-icon-scale,var(--sd-launcher-icon-scale,1.28))}.speed-dial-grid .ui-ws-item.ui-ws-item-icon ui-icon{aspect-ratio:1/1;block-size:100%;filter:drop-shadow(0 1px 2px rgba(0,0,0,.1333333333));inline-size:100%;inset:0;line-height:0;max-block-size:none;max-inline-size:none;min-block-size:0;min-inline-size:0;pointer-events:none;position:absolute;z-index:3}.speed-dial-grid .ui-ws-item.ui-ws-item-icon ui-icon:not([data-launcher-icon]){--icon-padding:0.55rem;--icon-size:1.72rem;--icon-color:var(--sd-figure-ink,var(--color-on-surface,light-dark(#1a1c1f,#e8eaed)));background:transparent!important;color:var(--icon-color)}.speed-dial-grid .ui-ws-item.ui-ws-item-icon ui-icon[data-launcher-icon]{--icon-padding:0px;--icon-size:100%;color:inherit}.speed-dial-grid .ui-ws-item.ui-ws-item-label[data-widget]{visibility:hidden}.speed-dial-grid .ui-ws-item.ui-ws-item-label{align-items:flex-start;background:transparent;color:var(--wallpaper-contrast-color,var(--env-launcher-fg,#f7f7f8));display:flex;filter:none;inset-block-start:100%;inset-inline:0;justify-content:center;overflow:visible;padding-block-start:.35rem;position:absolute}.speed-dial-grid .ui-ws-item.ui-ws-item-label,.speed-dial-grid .ui-ws-item.ui-ws-item-label span{animation:none!important;animation-duration:0s!important;pointer-events:none;text-align:center;transition:none!important;transition-duration:0s!important;white-space:nowrap}.speed-dial-grid .ui-ws-item.ui-ws-item-label span{backdrop-filter:none;-webkit-backdrop-filter:none;background:transparent;border:none;border-radius:6px;box-shadow:none;color:var(--wallpaper-contrast-color,var(--env-launcher-fg,#f7f7f8));display:inline-flex;font-size:.72rem;font-weight:500;inline-size:max-content;letter-spacing:.01em;line-height:1.25;max-inline-size:min(100%,9rem);overflow:visible;overflow:hidden;padding-block:.15rem;padding-inline:.4rem;place-content:center;place-items:center;text-overflow:ellipsis;text-shadow:0 1px 2px var(--sd-cast-ink,rgba(0,0,0,.88)),0 0 12px var(--sd-cast-glow,rgba(0,0,0,.45))}.speed-dial-grid .ui-ws-item:not([data-layer=labels])[data-label-placement=above] .speed-dial-grid .ui-ws-item.ui-ws-item-label{inset-block-end:100%;inset-block-start:auto;padding-block-end:.35rem;padding-block-start:0}.speed-dial-grid .ui-ws-item:active{will-change:transform}.speed-dial-grid :is(.ui-ws-item[data-interaction-state=onGrab],.ui-ws-item[data-interaction-state=onMoving]){cursor:grabbing;transform:translate3d(var(--drag-x,0),var(--drag-y,0),0);transition:none!important;will-change:transform;z-index:9}.speed-dial-grid :is(.ui-ws-item[data-interaction-state=onGrab].ui-ws-item-label,.ui-ws-item[data-interaction-state=onMoving].ui-ws-item-label){opacity:1;pointer-events:none}.speed-dial-grid .ui-ws-item[data-interaction-state=onPlace],.speed-dial-grid .ui-ws-item[data-interaction-state=onRelax]{transform:translate3d(var(--drag-x,0),var(--drag-y,0),0);transition:none!important;will-change:transform;z-index:9}.speed-dial-grid .ui-ws-item[data-layer=labels]{background:transparent!important;filter:none;grid-column:var(--cell-column,clamp(1,1 + round(nearest,var(--cs-grid-c,0),1),16))/span 1!important;grid-row:var(--cell-row,clamp(1,1 + round(nearest,var(--cs-grid-r,0),1),16))/span 1!important;pointer-events:none!important;transition:transform .24s cubic-bezier(.22,.8,.3,1);z-index:0;--sd-label-gap:0.8rem;--sd-label-max:min(calc(var(--tile-size, 3.5rem) * 2.85),min(94vw,10.5rem));--sd-label-shift:calc((var(--tile-size, 4rem) * 0.5) + var(--sd-label-gap));align-items:start;aspect-ratio:auto;block-size:0;display:grid;inline-size:var(--sd-label-max);justify-items:center;max-block-size:none;max-inline-size:var(--sd-label-max);min-block-size:0;min-inline-size:var(--sd-label-max);overflow:visible;place-self:center;transform:translate3d(0,var(--sd-label-shift),0)}.speed-dial-grid .ui-ws-item[data-layer=labels].ui-ws-item-label{background:transparent!important;color:var(--wallpaper-contrast-color,var(--env-launcher-fg,#f7f7f8));display:grid;inline-size:var(--sd-label-max);inset:unset!important;justify-items:center;margin-inline:0;max-inline-size:var(--sd-label-max);min-inline-size:var(--sd-label-max);overflow:visible;padding-block-start:0;pointer-events:none!important;position:relative!important;text-align:center}.speed-dial-grid .ui-ws-item[data-layer=labels].ui-ws-item-label span{backdrop-filter:none;-webkit-backdrop-filter:none;background:transparent;border-radius:var(--radius-full);box-shadow:none;color:var(--wallpaper-contrast-color,var(--env-launcher-fg,#f7f7f8));display:block;font-family:inherit;font-size:clamp(.68rem,.09 * var(--tile-size,3.75rem),.82rem);font-weight:650;inline-size:auto;letter-spacing:.02em;line-height:1.15;margin-inline:auto;max-inline-size:100%;overflow:hidden;padding-block:.04rem .08rem;padding-inline:.22rem;pointer-events:none!important;text-align:center;text-overflow:ellipsis;text-shadow:0 1px 2px var(--sd-cast-ink,rgba(0,0,0,.88)),0 0 12px var(--sd-cast-glow,rgba(0,0,0,.45));white-space:nowrap!important}.speed-dial-grid .ui-ws-item[data-layer=labels][data-label-placement=above]{--sd-label-shift:calc((var(--tile-size, 4rem) * -0.5) - var(--sd-label-gap));align-items:end}.speed-dial-grid .ui-ws-item[data-layer=labels][data-label-placement=above].ui-ws-item-label span{transform:translateY(-100%)}.speed-dial-grid .ui-ws-item[data-layer=labels][data-interaction-state=onLabelDocked]{cursor:default;transform:translate3d(0,var(--sd-label-shift),0)!important;transition:none!important}.speed-dial-grid :is(.ui-ws-item[data-layer=labels][data-interaction-state=onGrab],.ui-ws-item[data-layer=labels][data-interaction-state=onMoving]){transition:none!important}.speed-dial-grid .ui-ws-item[data-layer=icons]{filter:none;touch-action:none;z-index:7}.speed-dial-grid :is(.ui-ws-item[data-layer=icons][data-interaction-state=onGrab],.ui-ws-item[data-layer=icons][data-interaction-state=onMoving],.ui-ws-item[data-layer=icons][data-interaction-state=onPlace],.ui-ws-item[data-layer=icons][data-interaction-state=onRelax]){z-index:9}.speed-dial-grid>.ui-ws-item-icon-under,.speed-dial-grid>.ui-ws-item-icon-under.underlying-shadow-container{background-color:initial!important;block-size:min(100%,var(--tile-size,4rem));contain:none!important;content-visibility:visible!important;filter:blur(12px)!important;grid-column:var(--cell-column)/span 1!important;grid-row:var(--cell-row)/span 1!important;inline-size:min(100%,var(--tile-size,4rem));inset:auto!important;opacity:1!important;overflow:visible!important;padding:0!important;place-self:center;pointer-events:none!important;position:relative!important;visibility:visible!important;z-index:0!important;--drag-x:0px;--drag-y:0px;transform:translate3d(var(--drag-x,0),var(--drag-y,0),0);transform-origin:50% 50%;transition:transform .24s cubic-bezier(.22,.8,.3,1)}.speed-dial-grid>.ui-ws-item-icon-under.underlying-shadow-container[data-dragging],.speed-dial-grid>.ui-ws-item-icon-under.underlying-shadow-container[data-interaction-state=onGrab],.speed-dial-grid>.ui-ws-item-icon-under.underlying-shadow-container[data-interaction-state=onMoving],.speed-dial-grid>.ui-ws-item-icon-under.underlying-shadow-container[data-interaction-state=onPlace],.speed-dial-grid>.ui-ws-item-icon-under.underlying-shadow-container[data-interaction-state=onRelax],.speed-dial-grid>.ui-ws-item-icon-under[data-dragging],.speed-dial-grid>.ui-ws-item-icon-under[data-interaction-state=onGrab],.speed-dial-grid>.ui-ws-item-icon-under[data-interaction-state=onMoving],.speed-dial-grid>.ui-ws-item-icon-under[data-interaction-state=onPlace],.speed-dial-grid>.ui-ws-item-icon-under[data-interaction-state=onRelax]{transition:none!important;z-index:8!important}.speed-dial-grid>.ui-ws-item-icon-under.underlying-shadow-container[data-interaction-state=onPlace],.speed-dial-grid>.ui-ws-item-icon-under.underlying-shadow-container[data-interaction-state=onRelax],.speed-dial-grid>.ui-ws-item-icon-under[data-interaction-state=onPlace],.speed-dial-grid>.ui-ws-item-icon-under[data-interaction-state=onRelax]{z-index:0!important}.speed-dial-grid>.ui-ws-item-icon-under .underlying-shadow-geometry{background:rgba(0,0,0,.6862745098)!important;block-size:100%;inline-size:100%;padding:0!important;transition:filter .2s ease,box-shadow .2s ease;visibility:visible!important}.speed-dial-grid>.ui-ws-item-icon-under .underlying-shadow-geometry[data-shape=circle]{border-radius:50%!important}.speed-dial-grid>.ui-ws-item-icon-under .underlying-shadow-geometry[data-shape=square]{border-radius:max(.55rem,14%)!important}.speed-dial-grid>.ui-ws-item-icon-under .underlying-shadow-geometry[data-shape=squircle]{border-radius:1.5rem!important}.speed-dial-grid>.ui-ws-item-icon-under .underlying-shadow-geometry[data-shape=wavy]{--clip-amplitude:0.05;--clip-freq:8;--clip-path:shape(evenodd from --wavy-step(0),line to --wavy-step(0.01),line to --wavy-step(0.02),line to --wavy-step(0.03),line to --wavy-step(0.04),line to --wavy-step(0.05),line to --wavy-step(0.06),line to --wavy-step(0.07),line to --wavy-step(0.08),line to --wavy-step(0.09),line to --wavy-step(0.1),line to --wavy-step(0.11),line to --wavy-step(0.12),line to --wavy-step(0.13),line to --wavy-step(0.14),line to --wavy-step(0.15),line to --wavy-step(0.16),line to --wavy-step(0.17),line to --wavy-step(0.18),line to --wavy-step(0.19),line to --wavy-step(0.2),line to --wavy-step(0.21),line to --wavy-step(0.22),line to --wavy-step(0.23),line to --wavy-step(0.24),line to --wavy-step(0.25),line to --wavy-step(0.26),line to --wavy-step(0.27),line to --wavy-step(0.28),line to --wavy-step(0.29),line to --wavy-step(0.3),line to --wavy-step(0.31),line to --wavy-step(0.32),line to --wavy-step(0.33),line to --wavy-step(0.34),line to --wavy-step(0.35),line to --wavy-step(0.36),line to --wavy-step(0.37),line to --wavy-step(0.38),line to --wavy-step(0.39),line to --wavy-step(0.4),line to --wavy-step(0.41),line to --wavy-step(0.42),line to --wavy-step(0.43),line to --wavy-step(0.44),line to --wavy-step(0.45),line to --wavy-step(0.46),line to --wavy-step(0.47),line to --wavy-step(0.48),line to --wavy-step(0.49),line to --wavy-step(0.5),line to --wavy-step(0.51),line to --wavy-step(0.52),line to --wavy-step(0.53),line to --wavy-step(0.54),line to --wavy-step(0.55),line to --wavy-step(0.56),line to --wavy-step(0.57),line to --wavy-step(0.58),line to --wavy-step(0.59),line to --wavy-step(0.6),line to --wavy-step(0.61),line to --wavy-step(0.62),line to --wavy-step(0.63),line to --wavy-step(0.64),line to --wavy-step(0.65),line to --wavy-step(0.66),line to --wavy-step(0.67),line to --wavy-step(0.68),line to --wavy-step(0.69),line to --wavy-step(0.7),line to --wavy-step(0.71),line to --wavy-step(0.72),line to --wavy-step(0.73),line to --wavy-step(0.74),line to --wavy-step(0.75),line to --wavy-step(0.76),line to --wavy-step(0.77),line to --wavy-step(0.78),line to --wavy-step(0.79),line to --wavy-step(0.8),line to --wavy-step(0.81),line to --wavy-step(0.82),line to --wavy-step(0.83),line to --wavy-step(0.84),line to --wavy-step(0.85),line to --wavy-step(0.86),line to --wavy-step(0.87),line to --wavy-step(0.88),line to --wavy-step(0.89),line to --wavy-step(0.9),line to --wavy-step(0.91),line to --wavy-step(0.92),line to --wavy-step(0.93),line to --wavy-step(0.94),line to --wavy-step(0.95),line to --wavy-step(0.96),line to --wavy-step(0.97),line to --wavy-step(0.98),line to --wavy-step(0.99),line to --wavy-step(1),close);--icon-size:100%;--corrector:1.1;clip-path:var(--clip-path)}.speed-dial-grid>.ui-ws-item-icon-under:has(+.ui-ws-item:hover) .underlying-shadow-geometry{padding:0!important;visibility:visible!important}.speed-dial-grid>.ui-ws-item-icon-under:has(+.ui-ws-item[data-shape=none]),.speed-dial-grid>.ui-ws-item-icon-under:has(+.ui-ws-item[data-shape=shapeless]),.speed-dial-grid>.ui-ws-item-icon-under[data-shape=none],.speed-dial-grid>.ui-ws-item-icon-under[data-shape=shapeless]{display:none!important}.speed-dial-label-layer{pointer-events:none!important}.speed-dial-label-layer .ui-ws-item{animation:none!important;animation-duration:0s!important;grid-column:var(--cell-column,clamp(1,1 + round(nearest,var(--cs-grid-c,0),1),16))/span 1!important;grid-row:var(--cell-row,clamp(1,1 + round(nearest,var(--cs-grid-r,0),1),16))/span 1!important;pointer-events:none;position:relative;scale:1;touch-action:auto;transition:none!important;transition-duration:0s!important;z-index:0}.speed-dial-label-layer :is(.ui-ws-item:active,.ui-ws-item:hover){scale:1}@container (max-width: 28rem){.speed-dial-root.app-oriented-desktop :is(.speed-dial-grid.app-oriented-desktop__grid--icons,.speed-dial-grid.app-oriented-desktop__grid--labels){padding-block:clamp(.35rem,2.8cqh,var(--padding-lg));padding-inline:clamp(.35rem,3.2cqw,var(--padding-lg))}}@container (max-height: 29rem){.speed-dial-root.app-oriented-desktop :is(.speed-dial-grid.app-oriented-desktop__grid--icons,.speed-dial-grid.app-oriented-desktop__grid--labels){padding-block:clamp(.3rem,2.2cqh,var(--padding-md))}}@container (max-width: 28rem){.speed-dial-root.app-oriented-desktop .ui-ws-item{--tile-size:clamp(4rem,12dvmin,6rem)}.speed-dial-root.app-oriented-desktop .ui-ws-item .ui-ws-item-icon{padding:.65rem}}.speed-dial-editor{--sd-editor-seed:var(--base-color,var(--color-primary,#5a7fff));background:transparent;block-size:100%;border:none;color:--u2-color-mod(var(--sd-editor-seed),100);contain:none;content-visibility:visible;display:grid;inline-size:100%;inset:0;margin:0;max-block-size:100%;max-inline-size:100%;overflow:auto;padding:1rem;place-items:center;pointer-events:auto;position:fixed}.speed-dial-editor::backdrop{backdrop-filter:blur(10px) saturate(1.08);-webkit-backdrop-filter:blur(10px) saturate(1.08);background:color-mix(in oklab,--u2-color-mod(var(--base-color,var(--color-primary,#5a7fff)),920) 58%,transparent)}.speed-dial-editor__form{--sd-editor-seed:var(--base-color,var(--color-primary,#5a7fff));--sd-editor-ink:--u2-color-mod(var(--sd-editor-seed),100);--sd-editor-muted:color-mix(in oklab,--u2-color-mod(var(--sd-editor-seed),100) 70%,transparent);--sd-editor-field-bg:--u2-color-mod(var(--sd-editor-seed),900);--sd-editor-field-ink:--u2-color-mod(var(--sd-editor-seed),100);--sd-editor-panel:--u2-color-mod(var(--sd-editor-seed),860);--sd-editor-border:color-mix(in oklab,--u2-color-mod(var(--sd-editor-seed),100) 16%,transparent);--sd-editor-accent:--u2-color-mod(var(--sd-editor-seed),520);--sd-editor-danger-bg:#7f1d1d;--sd-editor-danger-ink:#fff7f7;backdrop-filter:blur(14px) saturate(1.12);-webkit-backdrop-filter:blur(14px) saturate(1.12);background:color-mix(in oklab,var(--color-surface-container,var(--sd-editor-panel)) 88%,transparent);border:1px solid var(--sd-editor-border);border-radius:18px;box-shadow:0 24px 64px -28px color-mix(in oklab,#000 60%,transparent),0 0 0 1px color-mix(in oklab,--u2-color-mod(var(--sd-editor-seed),100) 10%,transparent);color:var(--sd-editor-ink);color-scheme:dark;contain:none!important;content-visibility:visible!important;display:grid;grid-template-rows:auto minmax(0,1fr) auto;inline-size:min(100%,560px);margin-inline:auto;max-block-size:min(86vh,760px);min-block-size:0;overflow:hidden;pointer-events:auto}.speed-dial-editor[data-theme=light] .speed-dial-editor__form,.speed-dial-editor__form[data-theme=light],html[data-theme=light] .speed-dial-editor__form{color-scheme:light only;--sd-editor-ink:--u2-color-mod(var(--sd-editor-seed),900);--sd-editor-muted:color-mix(in oklab,--u2-color-mod(var(--sd-editor-seed),900) 70%,transparent);--sd-editor-field-bg:--u2-color-mod(var(--sd-editor-seed),140);--sd-editor-field-ink:--u2-color-mod(var(--sd-editor-seed),900);--sd-editor-panel:--u2-color-mod(var(--sd-editor-seed),120);--sd-editor-border:color-mix(in oklab,--u2-color-mod(var(--sd-editor-seed),900) 14%,transparent);--sd-editor-accent:--u2-color-mod(var(--sd-editor-seed),480);--sd-editor-danger-bg:#9f1239;--sd-editor-danger-ink:#fff7f7;background:color-mix(in oklab,var(--color-surface-container,var(--sd-editor-panel)) 92%,transparent);box-shadow:0 18px 48px -24px color-mix(in oklab,#0f172a 26%,transparent),0 0 0 1px var(--sd-editor-border);color:var(--sd-editor-ink)}.speed-dial-editor[data-theme=dark] .speed-dial-editor__form,.speed-dial-editor__form[data-theme=dark],html[data-theme=dark] .speed-dial-editor__form{color-scheme:dark only;--sd-editor-ink:--u2-color-mod(var(--sd-editor-seed),100);--sd-editor-muted:color-mix(in oklab,--u2-color-mod(var(--sd-editor-seed),100) 70%,transparent);--sd-editor-field-bg:--u2-color-mod(var(--sd-editor-seed),900);--sd-editor-field-ink:--u2-color-mod(var(--sd-editor-seed),100);--sd-editor-panel:--u2-color-mod(var(--sd-editor-seed),860);--sd-editor-border:color-mix(in oklab,--u2-color-mod(var(--sd-editor-seed),100) 16%,transparent);--sd-editor-accent:--u2-color-mod(var(--sd-editor-seed),520);background:color-mix(in oklab,var(--color-surface-container,var(--sd-editor-panel)) 88%,transparent);color:var(--sd-editor-ink)}.speed-dial-editor__form .modal-header{border-block-end:none;box-shadow:0 1px 0 var(--sd-editor-border);display:grid;gap:.4rem;padding:1rem 1rem .75rem}.speed-dial-editor__form .modal-title{color:var(--sd-editor-ink);font-size:1.2rem;font-weight:650;line-height:1.25;margin:0}.speed-dial-editor__form .modal-description{color:var(--sd-editor-muted);font-size:.86rem;line-height:1.35;margin:0}.speed-dial-editor__form .modal-fields{align-content:start;display:grid;gap:.75rem;min-block-size:0;overflow:auto;padding:.9rem 1rem 1rem}.speed-dial-editor__form .modal-field{display:grid;gap:.35rem;pointer-events:auto}.speed-dial-editor__form [data-field=span] .sd-icon-resource-row{display:grid;gap:.45rem;grid-template-columns:1fr 1fr}.speed-dial-editor__form :is(input[name=spanCols],input[name=spanRows]){inline-size:100%;min-inline-size:0;pointer-events:auto}.speed-dial-editor__form .modal-field>:is(span,label){color:var(--sd-editor-muted);font-size:.84rem;font-weight:600;margin:0;pointer-events:none;user-select:none}.speed-dial-editor__form :is(input,select,textarea,button,.btn){pointer-events:auto!important;position:relative;z-index:1}.speed-dial-editor__form :is(input,select,textarea){appearance:none;background:var(--sd-editor-field-bg);border:1px solid var(--sd-editor-border);border-radius:var(--radius-md);caret-color:var(--sd-editor-field-ink);color:var(--sd-editor-field-ink);contain:none!important;content-visibility:visible!important;inline-size:100%;min-inline-size:0;outline:none;padding:.55rem .7rem}.speed-dial-editor__form :is(input,select,textarea)::placeholder{color:color-mix(in oklab,var(--sd-editor-field-ink) 45%,transparent)}.speed-dial-editor__form textarea{min-block-size:4.4rem;resize:vertical}.speed-dial-editor__form :is(input,select,textarea):focus{border-color:color-mix(in oklab,var(--sd-editor-accent) 64%,--u2-color-mod(var(--sd-editor-seed),100) 12%);box-shadow:0 0 0 2px color-mix(in oklab,var(--sd-editor-accent) 28%,transparent)}.speed-dial-editor__form .sd-icon-resource-row{align-items:center;display:grid;gap:.45rem;grid-template-columns:minmax(0,1fr) auto auto;min-inline-size:0}.speed-dial-editor__form .sd-icon-resource-row>input{inline-size:100%;min-inline-size:0}.speed-dial-editor__form .sd-icon-resource-pick{align-items:center;block-size:2.4rem;display:inline-flex;flex:0 0 auto;inline-size:2.4rem;justify-content:center;min-inline-size:2.4rem;padding:0}.speed-dial-editor__form .sd-icon-resource-pick ui-icon{--icon-size:1.25rem;--icon-padding:0;block-size:var(--icon-size);inline-size:var(--icon-size);min-block-size:var(--icon-size);min-inline-size:var(--icon-size);pointer-events:none}.speed-dial-editor__form .modal-actions{align-items:center;background:transparent;border-block-start:1px solid var(--sd-editor-border);border:0 transparent;color:var(--sd-editor-ink);display:grid;gap:.45rem;grid-template-columns:1fr auto auto;justify-items:stretch;min-inline-size:0;outline:0 none transparent;padding:.65rem .85rem}.speed-dial-editor__form .modal-actions .modal-actions-spacer{display:block;min-inline-size:0}.speed-dial-editor__form .modal-actions .btn{justify-self:start;min-inline-size:0;padding:.4rem .7rem;white-space:nowrap}.speed-dial-editor__form .modal-actions :is(.btn.save,.btn.secondary){justify-self:end}.speed-dial-editor__form .btn{background:color-mix(in oklab,var(--sd-editor-field-bg) 82%,transparent);border:1px solid var(--sd-editor-border);border-radius:var(--radius-md);color:var(--sd-editor-ink);cursor:pointer;font-size:.86rem;line-height:1.2;padding:.46rem .86rem}.speed-dial-editor__form .btn.secondary{background:color-mix(in oklab,var(--sd-editor-field-bg) 68%,transparent);color:var(--sd-editor-ink)}.speed-dial-editor__form .btn.save{background:color-mix(in oklab,var(--sd-editor-accent) 78%,--u2-color-mod(var(--sd-editor-seed),920) 22%);border-color:color-mix(in oklab,var(--sd-editor-accent) 55%,transparent);color:--u2-color-mod(var(--sd-editor-seed),100)}.speed-dial-editor[data-theme=light] .speed-dial-editor__form .btn.save,.speed-dial-editor__form[data-theme=light] .btn.save,html[data-theme=light] .speed-dial-editor__form .btn.save{background:color-mix(in oklab,var(--sd-editor-accent) 82%,--u2-color-mod(var(--sd-editor-seed),120) 18%);color:--u2-color-mod(var(--sd-editor-seed),980)}.speed-dial-editor__form .btn.danger{background:var(--sd-editor-danger-bg);border-color:color-mix(in oklab,var(--sd-editor-danger-bg) 70%,transparent);color:var(--sd-editor-danger-ink)}.speed-dial-editor__form .btn:hover{filter:brightness(1.08)}.speed-dial-editor__form [hidden]{display:none!important}@media (max-width:820px){.speed-dial-editor{place-items:center}.speed-dial-editor__form{inline-size:100%;max-block-size:94vh}}}@layer view.home{:root:has([data-view=home]),html:has([data-view=home]){--view-home-bg:linear-gradient(135deg,light-dark(#f8f9fa,#1b1f24),light-dark(#e9ecef,#0f1216));--view-fg:light-dark(#1a1a1a,#e9ecef);--view-border:light-dark(rgba(0,0,0,0.08),rgba(255,255,255,0.12));--view-card-bg:light-dark(#ffffff,#1a1f26);--view-primary:light-dark(#007acc,#66b7ff);--view-layout:\"flex\";--view-padding:var(--space-8);--view-content-max-width:1200px;--view-hero-padding:var(--space-16);--view-card-gap:var(--space-6)}.view-home{align-items:center;background:var(--view-home-bg);block-size:100%;color:var(--view-fg);display:flex;justify-content:center;overflow-y:auto;padding:2rem}.view-home__content{max-inline-size:800px;text-align:center}.view-home__header{margin-block-end:3rem}.view-home__title{background:linear-gradient(135deg,var(--view-primary) 0,light-dark(#0059a6,#3a8ad6) 100%);-webkit-background-clip:text;font-size:3rem;font-weight:800;margin:0;-webkit-text-fill-color:transparent;background-clip:text}.view-home__subtitle{color:var(--view-fg);font-size:1.125rem;margin:.5rem 0 0;opacity:.7}.view-home__actions{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.view-home__action{align-items:center;background-color:var(--view-card-bg);border:1px solid var(--view-border);border-radius:var(--radius-xl);color:var(--view-fg);cursor:pointer;display:flex;flex-direction:column;gap:.75rem;padding:1.5rem;text-align:center;transition:transform var(--transition-normal),box-shadow var(--transition-normal),border-color var(--transition-normal)}.view-home__action ui-icon{color:var(--view-primary);opacity:.8}.view-home__action:hover{border-color:var(--view-primary);box-shadow:0 8px 24px light-dark(rgba(0,0,0,.1),rgba(0,0,0,.4));transform:translateY(-4px)}.view-home__action:hover ui-icon{opacity:1}.view-home__action:focus-visible{outline:2px solid var(--view-primary);outline-offset:2px}.view-home__action-title{font-size:1rem;font-weight:600}.view-home__action-desc{font-size:.8125rem;opacity:.6}.view-home.env-home-workspace,.view-home.view-home--grid{align-items:stretch;background:transparent!important;display:grid;justify-items:stretch;overflow:hidden;padding:0;pointer-events:auto!important}.speed-dial-root.app-oriented-desktop,.view-home.env-home-workspace>.speed-dial-root{pointer-events:auto!important}.view-home--grid{align-items:stretch;background:transparent;block-size:100%;display:grid;grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr);inline-size:100%;justify-items:stretch;overflow:hidden;padding:0;position:relative}.view-home--grid .speed-dial-root{block-size:var(--lv-height,100lvb);inline-size:var(--lv-width,100lvi);inset:0 auto auto 0;max-block-size:var(--lv-height,100lvb);max-inline-size:var(--lv-width,100lvi);overflow:hidden;position:fixed}@container (max-width: 768px){.view-home{--view-hero-padding:var(--space-8);--view-card-gap:var(--space-4)}}@container (max-width: 480px){.view-home__actions{grid-template-columns:1fr}}}.speed-dial-editor,.speed-dial-editor__form,.speed-dial-editor__form .modal-field,.speed-dial-editor__form :is(input,select,textarea,button){pointer-events:auto!important}.speed-dial-editor__form{contain:none!important;content-visibility:visible!important;min-block-size:0!important}.speed-dial-editor__form .modal-field>label{pointer-events:none!important}.speed-dial-editor__form .modal-actions{align-items:center!important;display:grid!important;flex-direction:row!important;flex-wrap:nowrap!important;gap:.45rem!important;grid-template-columns:1fr auto auto!important}.speed-dial-editor__form .modal-actions .btn{max-inline-size:none!important;min-inline-size:0!important;white-space:nowrap!important}.speed-dial-editor__form .sd-icon-resource-row{align-items:stretch!important;display:grid!important;gap:.45rem!important;grid-template-columns:minmax(0,1fr) 2.5rem!important;inline-size:100%!important;min-inline-size:0!important}.speed-dial-editor__form .sd-icon-resource-row>input{inline-size:100%!important;max-inline-size:none!important;min-inline-size:0!important}.speed-dial-editor__form .sd-icon-resource-pick{align-items:center!important;block-size:auto!important;display:inline-flex!important;flex:0 0 auto!important;inline-size:2.5rem!important;justify-content:center!important;margin:0!important;max-inline-size:2.5rem!important;min-block-size:2.5rem!important;min-inline-size:2.5rem!important;padding:0!important}.speed-dial-editor__form .sd-icon-resource-pick ui-icon{--icon-size:1.25rem!important;--icon-padding:0!important;block-size:1.25rem!important;inline-size:1.25rem!important;pointer-events:none!important}.sd-icon-picker{--sd-editor-seed:var(--base-color,var(--color-primary,#5a9ec8));--sd-editor-ink:--u2-color-mod(var(--sd-editor-seed),100);--sd-editor-field-bg:--u2-color-mod(var(--sd-editor-seed),900);--sd-editor-panel:--u2-color-mod(var(--sd-editor-seed),860);--sd-editor-border:color-mix(in oklab,--u2-color-mod(var(--sd-editor-seed),100) 16%,transparent);--sd-editor-accent:--u2-color-mod(var(--sd-editor-seed),520);background:transparent;block-size:100%;border:none;border-radius:0;box-shadow:none;color:var(--sd-editor-ink);color-scheme:dark;display:grid;inline-size:100%;inset:0;margin:0;max-block-size:100%;max-inline-size:100%;overflow:auto;padding:1rem;place-content:center;place-items:center;position:fixed}.sd-icon-picker[data-theme=light],html[data-theme=light] .sd-icon-picker{color-scheme:light only;--sd-editor-ink:--u2-color-mod(var(--sd-editor-seed),900);--sd-editor-field-bg:--u2-color-mod(var(--sd-editor-seed),140);--sd-editor-panel:--u2-color-mod(var(--sd-editor-seed),120);--sd-editor-border:color-mix(in oklab,--u2-color-mod(var(--sd-editor-seed),900) 14%,transparent);--sd-editor-accent:--u2-color-mod(var(--sd-editor-seed),480);color:var(--sd-editor-ink)}.sd-icon-picker::backdrop{backdrop-filter:blur(10px) saturate(1.08);-webkit-backdrop-filter:blur(10px) saturate(1.08);background:color-mix(in oklab,--u2-color-mod(var(--base-color,var(--color-primary,#5a9ec8)),920) 58%,transparent)}.sd-icon-picker__form{align-self:center;backdrop-filter:blur(14px) saturate(1.12);-webkit-backdrop-filter:blur(14px) saturate(1.12);background:color-mix(in oklab,var(--color-surface-container,var(--sd-editor-panel)) 92%,transparent);border:1px solid var(--sd-editor-border);border-radius:18px;box-shadow:0 24px 64px -28px color-mix(in oklab,#000 60%,transparent);color:inherit;display:flex!important;flex-direction:column!important;inline-size:min(22rem,100%)!important;justify-self:center;margin:0!important;max-block-size:min(86dvh,36rem);max-inline-size:100%!important;overflow:hidden;padding:0!important}.sd-icon-picker__header{display:grid;gap:.55rem;padding:.9rem .95rem .55rem}.sd-icon-picker__title{font:650 1.15rem/1.25 ui-sans-serif,system-ui,sans-serif;margin:0;text-align:center}.sd-icon-picker__tabs{background:color-mix(in oklab,var(--sd-editor-field-bg) 42%,transparent);border-radius:999px;display:grid!important;gap:.28rem!important;grid-auto-columns:1fr!important;grid-auto-flow:column!important;inline-size:100%;padding:.22rem}.sd-icon-picker__tabs[hidden]{display:none!important}.sd-icon-picker__tab{align-items:center!important;appearance:none!important;background:transparent!important;block-size:auto!important;border:0!important;border-radius:999px!important;color:inherit!important;cursor:pointer;display:inline-flex!important;flex:1 1 0!important;font:600 .74rem/1.2 ui-sans-serif,system-ui,sans-serif!important;inline-size:100%!important;justify-content:center!important;margin:0!important;min-inline-size:0!important;padding:.38rem .4rem!important}.sd-icon-picker__tab[data-active]{background:color-mix(in oklab,var(--sd-editor-accent,currentColor) 28%,transparent)!important}.sd-icon-picker__search{border-radius:.65rem!important;box-sizing:border-box!important;font-size:.82rem!important;inline-size:100%!important;min-inline-size:0!important;padding:.4rem .65rem!important}.sd-icon-picker__search[hidden]{display:none!important}.sd-icon-picker__body{background:transparent!important;max-block-size:min(28rem,58dvh);min-block-size:0;overflow:auto;padding:.45rem .75rem .35rem}.sd-icon-picker__section{min-inline-size:0}.sd-icon-picker__section[hidden]{display:none!important}.sd-icon-picker__grid{align-content:start;display:grid!important;gap:.5rem .4rem!important;grid-template-columns:repeat(auto-fill,minmax(4.75rem,1fr))!important;min-inline-size:0!important}.sd-icon-picker__grid--browse{display:grid!important;gap:.35rem!important;grid-template-columns:minmax(0,1fr)!important;grid-template-rows:auto minmax(0,1fr)!important}.sd-icon-picker__pack-toolbar{align-items:center;display:grid;gap:.3rem .4rem;grid-template-columns:auto minmax(0,1fr)}.sd-icon-picker__pack-toolbar .sd-icon-picker__search{grid-column:1/-1}.sd-icon-picker__pack-back{appearance:none!important;background:color-mix(in oklab,var(--sd-editor-field-bg,currentColor) 55%,transparent)!important;border:0!important;border-radius:999px!important;color:inherit;cursor:pointer;font:600 .72rem/1.2 ui-sans-serif,system-ui,sans-serif;margin:0;padding:.2rem .5rem}.sd-icon-picker__pack-title{font-size:.74rem;min-inline-size:0;opacity:.78;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sd-icon-picker__pack-wrap{min-inline-size:0;position:relative}.sd-icon-picker__pack-browse{appearance:none!important;background:color-mix(in oklab,var(--sd-editor-panel,Canvas) 82%,transparent)!important;block-size:1.2rem!important;border:0!important;border-radius:999px!important;color:inherit;cursor:pointer;display:grid!important;inline-size:1.2rem!important;inset-block-start:0;inset-inline-end:0;margin:0!important;min-block-size:1.2rem!important;min-inline-size:1.2rem!important;padding:0!important;place-items:center;position:absolute;z-index:1}.sd-icon-picker__pack-browse ui-icon{--icon-size:0.72rem!important;--icon-padding:0!important;block-size:.72rem!important;inline-size:.72rem!important;pointer-events:none}.sd-icon-picker__card{align-content:start!important;align-items:start!important;appearance:none!important;-webkit-appearance:none!important;background:transparent!important;block-size:auto!important;border:0!important;border-radius:.7rem!important;box-shadow:none!important;color:inherit!important;cursor:pointer!important;display:grid!important;flex-direction:column!important;gap:.3rem!important;grid-template-columns:minmax(0,1fr)!important;grid-template-rows:auto max-content!important;inline-size:100%!important;justify-items:center!important;margin:0!important;max-inline-size:100%!important;min-block-size:0!important;min-inline-size:0!important;overflow:hidden!important;padding:.2rem .08rem .15rem!important;position:static!important;text-align:center!important;z-index:auto!important}.sd-icon-picker__card:focus-visible,.sd-icon-picker__card:hover{background:color-mix(in oklab,var(--sd-editor-accent,currentColor) 14%,transparent)!important;outline:none}.sd-icon-picker__card img{block-size:3rem!important;border-radius:50%!important;display:block!important;flex:0 0 auto!important;grid-row:1!important;inline-size:3rem!important;max-block-size:3rem!important;max-inline-size:3rem!important;object-fit:cover!important}.sd-icon-picker__card-label{display:block!important;font-size:.62rem!important;grid-row:2!important;inline-size:100%!important;line-height:1.2!important;max-inline-size:100%!important;opacity:.88;overflow:hidden!important;text-align:center!important;text-overflow:ellipsis!important;white-space:nowrap!important}.sd-icon-picker__card:disabled{cursor:not-allowed!important;opacity:.45!important}.sd-icon-picker__footer{align-items:center!important;border-block-start:1px solid var(--sd-editor-border);display:flex!important;gap:.45rem;justify-content:flex-end!important;padding:.55rem .85rem .75rem}.sd-icon-picker__cancel{align-items:center!important;appearance:none!important;background:color-mix(in oklab,var(--sd-editor-field-bg) 68%,transparent)!important;border:1px solid var(--sd-editor-border)!important;border-radius:.65rem!important;color:inherit!important;cursor:pointer;display:inline-flex!important;flex:0 0 auto!important;font:600 .82rem/1.2 ui-sans-serif,system-ui,sans-serif;inline-size:auto!important;justify-content:center!important;margin:0!important;max-inline-size:none!important;min-inline-size:0!important;padding:.42rem .86rem!important;width:auto!important}.sd-widget-picker{background:Canvas;border:none;border-radius:.85rem;color:initial;inline-size:min(90cqi,92vw);max-block-size:80vh;padding:.85rem}.sd-widget-picker__list{display:grid;gap:.4rem;margin-block:.6rem;max-block-size:60vh;overflow:auto}.sd-widget-picker__item{align-items:center;background:transparent;border:1px solid color-mix(in oklab,CanvasText 14%,transparent);border-radius:.55rem;color:inherit;cursor:pointer;display:flex;gap:.55rem;inline-size:100%;padding:.45rem .55rem;text-align:start}.sd-widget-picker__item img{block-size:2.2rem;inline-size:2.2rem;object-fit:contain}";
//#endregion
//#region ../../modules/views/home-view/src/ts/OrientBox.ts
var UIOrientBox = class extends DOMMixin {
	constructor(name) {
		super(name);
	}
	connect(ws) {
		const self = ws?.deref?.() ?? ws;
		self.classList.add("ui-orientbox");
		const zoom = numberRef(1), orient = numberRef(orientationNumberMap?.[getCorrectOrientation()] || 0);
		self.style.setProperty("--zoom", zoom.value);
		self.style.setProperty("--orient", orient.value);
		Object.defineProperty(self, "size", { get: () => size });
		Object.defineProperty(self, "zoom", {
			get: () => parseFloat(zoom.value) || 1,
			set: (value) => {
				zoom.value = value;
				self.style.setProperty("--zoom", value);
			}
		});
		Object.defineProperty(self, "orient", {
			get: () => parseInt(orient.value) || 0,
			set: (value) => {
				orient.value = value;
				self.style.setProperty("--orient", value);
			}
		});
		const size = vector2Ref(self.clientWidth, self.clientHeight);
		new ResizeObserver((entries) => {
			for (const entry of entries) if (entry?.contentBoxSize) {
				const contentBoxSize = entry?.contentBoxSize?.[0];
				size.x.value = contentBoxSize?.inlineSize || size.x.value || 0;
				size.y.value = contentBoxSize?.blockSize || size.y.value || 0;
			}
		}).observe(self, { box: "content-box" });
		elementPointerMap.set(self, {
			pointerMap: /* @__PURE__ */ new Map(),
			pointerCache: /* @__PURE__ */ new Map()
		});
		return this;
	}
};
new UIOrientBox("ui-orientbox");
//#endregion
//#region ../../modules/views/home-view/src/ts/OrientDesktop.ts
/** Orient-layer desktop shares SpeedDial styles; HomeView only adopts this sheet while home is visible, so load once here. */
var orientDesktopStyleSheet = null;
var homeHostStyleSheet = null;
var ensureOrientDesktopStyles = () => {
	if (!orientDesktopStyleSheet) orientDesktopStyleSheet = loadAsAdopted(SpeedDial_default);
	if (!homeHostStyleSheet) homeHostStyleSheet = loadAsAdopted(home_host_apply_default);
};
/**
* Compatibility entrypoint for shells that used the former manual desktop
* renderer. All rendering delegates to the canonical SpeedDial renderer
* (MutationObserver orient + `bindPointerInteraction`); no second desktop
* implementation lives here.
*
* INVARIANT: OrientDesktop stays an adapter — do not re-add a parallel
* desktop renderer here. Product behaviors (wallpaper IDB, paste/drop URL
* hygiene) belong in SpeedDial so both mount paths share them.
*/
var initializeOrientedDesktop = (host, makeView) => {
	if (!host || host.dataset.desktopMounted === "true") return;
	host.dataset.desktopMounted = "true";
	ensureOrientDesktopStyles();
	const root = SpeedDial(makeView);
	root.classList.add("app-oriented-desktop");
	host.appendChild(root);
	createCtxMenu(makeView);
};
//#endregion
//#region ../../modules/views/home-view/src/index.ts
var HomeView = class {
	id = "home";
	name = "Home";
	icon = "house";
	options;
	shellContext;
	element = null;
	lifecycle = { onUnmount: () => {
		setSpeedDialViewOpener(null);
		setHomeOverlayMountResolver(null);
		this.element = null;
	} };
	constructor(options = {}) {
		this.options = options;
		this.shellContext = options.shellContext;
	}
	/**
	* WHY: prefer `openView` when the host provides it — calling both navigate + openView
	* caused duplicate navigation and unreliable overlay open on environment shell.
	*/
	dispatchShellRoute(viewId, opts) {
		const id = resolveOpenViewTarget(viewId);
		if (!id) return;
		const shellContext = this.shellContext;
		if (!shellContext) {
			console.warn("[HomeView] No shellContext; cannot open:", id);
			return;
		}
		if (typeof shellContext.openView === "function") Promise.resolve(shellContext.openView(id, opts)).catch((e) => console.warn("[HomeView] shellContext.openView failed", id, e));
		else if (typeof shellContext.navigate === "function") Promise.resolve(shellContext.navigate(id, opts)).catch((e) => console.warn("[HomeView] shellContext.navigate failed", id, e));
		else console.warn("[HomeView] shellContext has no navigate/openView; cannot open:", id);
	}
	render(options) {
		if (options) {
			this.options = {
				...this.options,
				...options
			};
			this.shellContext = options.shellContext ?? this.shellContext;
		}
		const root = document.createElement("section");
		root.className = "view-home view-home--grid env-home-workspace";
		root.dataset.view = "home";
		root.id = "home-view";
		const openFromLauncher = (viewId, paramsOrOpts) => {
			const raw = paramsOrOpts || {};
			const p = { ...(raw.params && typeof raw.params === "object" && !Array.isArray(raw.params) ? raw.params : null) || {} };
			for (const [k, v] of Object.entries(raw)) {
				if (k === "params" || k === "shellContext" || k === "initialData") continue;
				if (v === void 0 || v === null) continue;
				if (typeof v === "string" || typeof v === "number" || typeof v === "boolean") p[k] = String(v);
			}
			const native = String(p.native || "");
			this.dispatchShellRoute(viewId, {
				...native === "1" || native === "true" ? { native: "1" } : {},
				params: p
			});
		};
		setSpeedDialViewOpener(openFromLauncher);
		setHomeOverlayMountResolver(typeof this.shellContext?.resolveOverlayMountPoint === "function" ? (anchor) => this.shellContext.resolveOverlayMountPoint(anchor) : null);
		initializeOrientedDesktop(root, openFromLauncher);
		this.element = root;
		return root;
	}
	invokeChannelApi(action, payload) {
		if (action !== HomeChannelAction.Navigate && action !== HomeChannelAction.OpenView) return void 0;
		const viewId = typeof payload === "string" ? payload : payload && typeof payload === "object" && "viewId" in payload ? String(payload.viewId) : "";
		if (!viewId.trim()) return false;
		this.dispatchShellRoute(viewId.trim());
		return true;
	}
};
function createView(options) {
	return new HomeView(options);
}
var createHomeView = createView;
//#endregion
export { HomeView, createHomeView, createView, createView as default, initializeOrientedDesktop };
