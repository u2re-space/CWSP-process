const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/launcher-bridge.js","./boot-index.js","../chunks/rolldown-runtime.js","./boot-history-base.js","../com/app.js","../fest/core.js","../com/service.js","../fest/veela.js"])))=>i.map(i=>d[i]);
import { Ar as __vitePreload, At as showError, C as writeAppMenuSort, Ct as syncShapelessIconShadow, D as getCachedIconResourceObjectUrl, Dt as normalizeLauncherLaunchSpec, E as ensureLauncherIconObjectUrl, Et as isLauncherLaunchSpecEmpty, O as getCachedLauncherIconObjectUrl, Ot as resolveAppLaunchSpec, S as sortLauncherApps, Sr as preloadStyle, St as normalizeTileShape, T as applyLauncherIconToUiIcon, Tt as getAppLaunchSpec, _ as APP_MENU_SORT_EVENT, _t as TILE_SHAPE_OPTIONS, at as applyIconScaleToPaintedNodes, b as hydrateAppColorKeys, bt as inferIconDisplay, ct as findNextFreeSpeedDialCell, dt as normalizeItemIconBitmapScale, ft as parseSpeedDialItemFromJSON, g as app_menu_default, gt as ICON_DISPLAY_OPTIONS, ht as tileIconFetchSize, it as addSpeedDialItem, j as isAndroidIconRef, jt as showSuccess, k as resolveIconResourceUrl, kt as setAppLaunchSpec, lt as isClientPointOverSpeedDial, mt as resolveSpeedDialCellFromClientPoint, ot as applyItemIconScaleToElement, pt as pinLauncherAppEntry, rt as ICON_BITMAP_SCALE_OPTIONS, st as buildLauncherAppDragEnvelope, tt as openUnifiedContextMenu, v as APP_MENU_SORT_OPTIONS, vt as createTileUiIconElement, w as attachIconResourcePickButton, wt as clearAppLaunchSpec, x as peekAppMenuSort, xt as normalizeIconDisplay, y as defaultDirForAppSort, yt as defaultIconScaleForDisplay } from "../com/app.js";
//#region src/frontend/shells/environment/components/app-menu/bookmarks-menu.ts
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
/** Chrome `_favicon`, Google S2, or generic favicon URL — not Android adaptive bitmaps. */
function isBookmarkFaviconResourceUrl(raw) {
	const u = String(raw || "").trim().toLowerCase();
	if (!u) return false;
	if (u.includes("/_favicon/")) return true;
	if (u.includes("s2/favicons")) return true;
	if (u.includes("favicon")) return true;
	if (u.startsWith("android-icon:")) return false;
	return false;
}
/** Accept http(s) and other schemes; bare hosts become `https://…`. */
function normalizeBookmarkHref(raw) {
	const text = String(raw || "").trim();
	if (!text) return "";
	if (/^[a-z][a-z0-9+.-]*:/i.test(text)) return text;
	return `https://${text}`;
}
var RECENT_KEY = "rs-app-menu-bookmark-recent";
var PINNED_KEY = "rs-app-menu-bookmark-pinned";
var MAX_RECENT = 12;
var MAX_PINNED = 16;
var registeredBookmarksApi = null;
function setBookmarksMenuApi(api) {
	registeredBookmarksApi = api;
}
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
		},
		async remove(entry) {
			const id = String(entry?.id || "").trim();
			if (!id) return false;
			try {
				if (entry.folder) {
					if (typeof api.removeTree !== "function") return false;
					await callChrome(api, "removeTree", id);
				} else {
					if (typeof api.remove !== "function") return false;
					await callChrome(api, "remove", id);
				}
				return true;
			} catch {
				return false;
			}
		},
		async update(id, patch) {
			const key = String(id || "").trim();
			if (!key || typeof api.update !== "function") return null;
			const body = {};
			if (patch.title != null) body.title = String(patch.title || "").trim();
			if (patch.url != null) {
				const href = normalizeBookmarkHref(patch.url);
				if (href) body.url = href;
			}
			try {
				const node = await callChrome(api, "update", key, body);
				return node ? nodeToEntry(node) : null;
			} catch {
				return null;
			}
		},
		async create(parentId, spec) {
			if (typeof api.create !== "function") return null;
			const title = String(spec.title || "").trim();
			if (!title) return null;
			const body = {
				parentId: String(parentId || "0"),
				title
			};
			if (spec.url != null) {
				const href = normalizeBookmarkHref(spec.url);
				if (!href) return null;
				body.url = href;
			}
			const attempt = async (pid) => {
				const node = await callChrome(api, "create", {
					...body,
					parentId: pid
				});
				return node ? nodeToEntry(node) : null;
			};
			try {
				return await attempt(body.parentId);
			} catch {
				if (body.parentId === "0") try {
					return await attempt("1");
				} catch {
					return null;
				}
				return null;
			}
		}
	};
}
function resolveBookmarksMenuApi() {
	if (registeredBookmarksApi) return registeredBookmarksApi;
	return createChromeBookmarksMenuApi();
}
function hasBookmarksMenuApi() {
	return Boolean(resolveBookmarksMenuApi());
}
function readRecentBookmarks() {
	try {
		const raw = localStorage.getItem(RECENT_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return [];
		return parsed.filter((e) => e && e.id && e.title).slice(0, MAX_RECENT);
	} catch {
		return [];
	}
}
function pushRecentBookmark(entry) {
	if (!entry?.id || entry.folder) return;
	const next = [entry, ...readRecentBookmarks().filter((e) => e.id !== entry.id)].slice(0, MAX_RECENT);
	try {
		localStorage.setItem(RECENT_KEY, JSON.stringify(next));
	} catch {}
}
var readBookmarkList = (key, max) => {
	try {
		const raw = localStorage.getItem(key);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return [];
		return parsed.filter((e) => e && e.id && e.title && !e.folder).slice(0, max);
	} catch {
		return [];
	}
};
function readPinnedBookmarks() {
	return readBookmarkList(PINNED_KEY, MAX_PINNED);
}
function isBookmarkPinnedToStart(id) {
	return readPinnedBookmarks().some((e) => e.id === id);
}
function pinBookmarkToStart(entry) {
	if (!entry?.id || entry.folder || !String(entry.url || "").trim()) return false;
	const next = [entry, ...readPinnedBookmarks().filter((e) => e.id !== entry.id)].slice(0, MAX_PINNED);
	try {
		localStorage.setItem(PINNED_KEY, JSON.stringify(next));
		return true;
	} catch {
		return false;
	}
}
function unpinBookmarkFromStart(id) {
	const key = String(id || "").trim();
	if (!key) return false;
	const next = readPinnedBookmarks().filter((e) => e.id !== key);
	try {
		localStorage.setItem(PINNED_KEY, JSON.stringify(next));
		return true;
	} catch {
		return false;
	}
}
var writeBookmarkList = (key, items, max) => {
	localStorage.setItem(key, JSON.stringify(items.slice(0, max)));
};
/** Keep Start pin/recent tiles in sync after a chrome.bookmarks update. */
function syncStoredBookmark(entry) {
	const id = String(entry?.id || "").trim();
	if (!id) return;
	const patch = (list) => list.map((item) => item.id === id ? {
		...item,
		title: entry.title || item.title,
		url: entry.url || item.url
	} : item);
	try {
		writeBookmarkList(PINNED_KEY, patch(readPinnedBookmarks()), MAX_PINNED);
		writeBookmarkList(RECENT_KEY, patch(readRecentBookmarks()), MAX_RECENT);
	} catch {}
}
/** Drop a deleted Chrome bookmark from Start pin/recent lists. */
function forgetBookmarkFromLists(id) {
	const key = String(id || "").trim();
	if (!key) return;
	unpinBookmarkFromStart(key);
	try {
		writeBookmarkList(RECENT_KEY, readRecentBookmarks().filter((item) => item.id !== key), MAX_RECENT);
	} catch {}
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
/** Best favicon URL for Start / desktop — Google S2 first, then Chrome `_favicon`. */
function resolveBookmarkDesktopIconUrl(entry, api) {
	const href = String(entry.url || "").trim();
	if (!href) return "";
	return faviconForHref(href, DESKTOP_FAVICON_SIZE) || faviconForHref(href, 128) || faviconForHref(href, 64) || api?.resolveIconUrl?.(href, DESKTOP_FAVICON_SIZE) || api?.resolveIconUrl?.(href, 128) || "";
}
/** Place bookmark on Speed Dial — same open-link tile path as Android launcher pins. */
function placeBookmarkOnDesktop(entry, cell, api, iconUrl = "") {
	return pinBookmarkEntry(entry, cell, String(iconUrl || "").trim() || bumpBookmarkIconUrlSize(resolveBookmarkDesktopIconUrl(entry, api), DESKTOP_FAVICON_SIZE));
}
/** JSON drag envelope for Bookmarks AppMenu → SpeedDial. */
function buildBookmarkPinEnvelope(entry, iconUrl = "") {
	const href = String(entry.url || "").trim();
	return JSON.stringify({
		state: {
			icon: entry.folder ? "folder" : "link",
			label: entry.title || href || "Bookmark",
			action: entry.folder ? "open-path" : "open-link"
		},
		desc: {
			action: entry.folder ? "open-path" : "open-link",
			href: entry.folder ? "" : href,
			path: entry.folder ? `/bookmarks/${entry.id}/` : `/bookmarks/${entry.id}`,
			meta: {
				entityType: "bookmark",
				bookmarkId: entry.id,
				...iconUrl ? { iconUrl } : {}
			}
		}
	});
}
function pinBookmarkEntry(entry, cell, iconUrl = "") {
	if (entry.folder || !String(entry.url || "").trim()) return null;
	const targetCell = cell ?? findNextFreeSpeedDialCell();
	const item = parseSpeedDialItemFromJSON(buildBookmarkPinEnvelope(entry, iconUrl), targetCell);
	if (!item) return null;
	addSpeedDialItem(item);
	return item;
}
var appendPhosphorGlyph = (plate, name) => {
	const icon = document.createElement("ui-icon");
	icon.setAttribute("icon", name);
	icon.setAttribute("icon-style", "duotone");
	icon.setAttribute("aria-hidden", "true");
	icon.style.setProperty("--icon-size", "1.75rem");
	icon.style.setProperty("--icon-padding", "0px");
	icon.style.setProperty("--icon-color", "currentColor");
	icon.style.color = "currentColor";
	plate.append(icon);
	customElements.whenDefined("ui-icon").then(() => {
		if (!icon.isConnected) return;
		if (!icon.getAttribute("icon")) icon.setAttribute("icon", name);
		icon.style.setProperty("--icon-size", "1.75rem");
		icon.style.setProperty("--icon-padding", "0px");
	});
};
/**
* Paint bookmark tile icon.
* WHY: list UI uses plain `<img>` (not ui-icon mask). Size probes used to clear the
* plate and reject typical 16–32px favicons (≥48px gate), leaving empty slots.
*/
async function applyBookmarkIconToPlate(plate, entry, api) {
	plate.replaceChildren();
	if (entry.folder) {
		appendPhosphorGlyph(plate, "folder");
		plate.toggleAttribute("data-bookmark-bitmap", false);
		return "";
	}
	const href = String(entry.url || "").trim();
	const candidates = [];
	const s2 = faviconForHref(href, DESKTOP_FAVICON_SIZE);
	if (s2) candidates.push(s2);
	const s2128 = faviconForHref(href, 128);
	if (s2128 && !candidates.includes(s2128)) candidates.push(s2128);
	const s264 = faviconForHref(href, 64);
	if (s264 && !candidates.includes(s264)) candidates.push(s264);
	const fromApi256 = api?.resolveIconUrl?.(href, DESKTOP_FAVICON_SIZE) || "";
	if (fromApi256 && !candidates.includes(fromApi256)) candidates.push(fromApi256);
	const fromApi128 = api?.resolveIconUrl?.(href, 128) || "";
	if (fromApi128 && !candidates.includes(fromApi128)) candidates.push(fromApi128);
	const fromApi64 = api?.resolveIconUrl?.(href, 64) || "";
	if (fromApi64 && !candidates.includes(fromApi64)) candidates.push(fromApi64);
	try {
		const chromeRt = globalThis.chrome?.runtime;
		if (typeof chromeRt?.getURL === "function" && href) {
			const u = new URL(chromeRt.getURL("/_favicon/"));
			u.searchParams.set("pageUrl", href);
			u.searchParams.set("size", String(DESKTOP_FAVICON_SIZE));
			const chromeFav = u.toString();
			if (chromeFav && !candidates.includes(chromeFav)) candidates.push(chromeFav);
		}
	} catch {}
	appendPhosphorGlyph(plate, "link");
	plate.toggleAttribute("data-bookmark-bitmap", false);
	if (!candidates.length) return "";
	return await new Promise((resolve) => {
		let index = 0;
		const tryNext = () => {
			if (index >= candidates.length) {
				resolve("");
				return;
			}
			const url = candidates[index++];
			const img = document.createElement("img");
			img.className = "env-shell-app-menu__tile-favicon";
			img.alt = "";
			img.decoding = "async";
			img.loading = "eager";
			img.referrerPolicy = "no-referrer";
			img.draggable = false;
			img.addEventListener("load", () => {
				plate.replaceChildren(img);
				plate.toggleAttribute("data-bookmark-bitmap", true);
				resolve(url);
			}, { once: true });
			img.addEventListener("error", () => {
				tryNext();
			}, { once: true });
			img.src = url;
		};
		tryNext();
	});
}
//#endregion
//#region src/frontend/shells/environment/components/app-menu/app-actions.ts
var FLAG_CHOICES = [
	"NEW_TASK",
	"CLEAR_TOP",
	"SINGLE_TOP",
	"CLEAR_TASK",
	"NO_HISTORY",
	"REORDER_TO_FRONT",
	"MULTIPLE_TASK"
];
var esc = (value) => String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
var fmtTime = (ms) => {
	const n = Number(ms);
	if (!Number.isFinite(n) || n <= 0) return "—";
	try {
		return new Date(n).toLocaleString();
	} catch {
		return String(n);
	}
};
var openEditorDialog = (inner) => {
	const modal = document.createElement("dialog");
	modal.className = "speed-dial-editor env-shell-app-menu__chrome-editor";
	modal.innerHTML = inner;
	const close = () => {
		try {
			if (modal.open) modal.close();
		} catch {}
		modal.remove();
	};
	modal.addEventListener("cancel", (ev) => {
		ev.preventDefault();
		close();
	});
	modal.__cwspClose = close;
	document.body.append(modal);
	try {
		modal.showModal();
	} catch {
		modal.setAttribute("open", "");
	}
	return modal;
};
var extrasToText = (extras) => {
	if (!extras || !Object.keys(extras).length) return "";
	try {
		return JSON.stringify(extras, null, 2);
	} catch {
		return "";
	}
};
var parseExtrasText = (raw) => {
	const text = String(raw || "").trim();
	if (!text) return {};
	if (text.startsWith("{")) try {
		const parsed = JSON.parse(text);
		return normalizeLauncherLaunchSpec({ extras: parsed }).extras || {};
	} catch {}
	const extras = {};
	for (const line of text.split(/\r?\n/)) {
		const eq = line.indexOf("=");
		if (eq < 1) continue;
		const key = line.slice(0, eq).trim();
		const value = line.slice(eq + 1).trim();
		if (!key) continue;
		if (value === "true" || value === "false") extras[key] = value === "true";
		else if (/^-?\d+(\.\d+)?$/.test(value)) extras[key] = Number(value);
		else extras[key] = value;
	}
	return extras;
};
function openAppInfoDialog(opts) {
	const info = opts.info || {};
	const pkg = String(info.packageName || opts.fallback.packageName || "").trim();
	const label = String(info.label || opts.fallback.label || opts.title || pkg).trim();
	const rows = [
		["Label", label],
		["Package", pkg],
		["Activity", String(info.componentName || opts.fallback.componentName || "—")],
		["Version", `${info.versionName || "—"} (${info.versionCode ?? "—"})`],
		["Installer", String(info.installer || "—")],
		["Enabled", info.enabled === false ? "no" : "yes"],
		["System", info.system ? info.updatedSystem ? "updated system" : "yes" : "no"],
		["Installed", fmtTime(info.firstInstallTime)],
		["Updated", fmtTime(info.lastUpdateTime)]
	];
	const modal = openEditorDialog(`
        <form class="speed-dial-editor__form" autocomplete="off">
            <header class="modal-header">
                <h2 class="modal-title">App info</h2>
                <p class="modal-description">${esc(label)}</p>
            </header>
            <div class="modal-fields">
                ${rows.map(([k, v]) => `
                    <div class="modal-field">
                        <label>${esc(k)}</label>
                        <input type="text" readonly value="${esc(v)}" />
                    </div>`).join("")}
            </div>
            <div class="modal-actions" role="group">
                ${opts.onOpenSystem ? `<button type="button" data-action="system" class="btn secondary">System details</button>` : `<span></span>`}
                <button type="button" data-action="close" class="btn save">Close</button>
            </div>
        </form>
    `);
	const close = modal.__cwspClose;
	modal.querySelector("form")?.addEventListener("click", (ev) => {
		const action = ev.target?.closest?.("[data-action]")?.getAttribute("data-action");
		if (action === "close") {
			ev.preventDefault();
			close?.();
		}
		if (action === "system") {
			ev.preventDefault();
			Promise.resolve(opts.onOpenSystem?.()).finally(() => close?.());
		}
	});
}
function openAppLaunchEditor(opts) {
	const initial = getAppLaunchSpec(opts.packageName);
	const selected = new Set((initial.flags || []).map((f) => f.toUpperCase()));
	const modal = openEditorDialog(`
        <form class="speed-dial-editor__form" autocomplete="off">
            <header class="modal-header">
                <h2 class="modal-title">Edit launch</h2>
                <p class="modal-description">${esc(opts.title)} — action, data URI, extras, flags</p>
            </header>
            <div class="modal-fields">
                <div class="modal-field">
                    <label for="am-launch-component">Activity</label>
                    <input id="am-launch-component" name="componentName" type="text" value="${esc(initial.componentName || opts.defaultComponent || "")}" placeholder="pkg/.MainActivity" />
                </div>
                <div class="modal-field">
                    <label for="am-launch-action">Intent action</label>
                    <input id="am-launch-action" name="action" type="text" value="${esc(initial.action || "")}" placeholder="android.intent.action.MAIN" />
                </div>
                <div class="modal-field">
                    <label for="am-launch-data">Data URI</label>
                    <input id="am-launch-data" name="data" type="text" value="${esc(initial.data || "")}" placeholder="https://…  content://…  app scheme" />
                </div>
                <div class="modal-field">
                    <label for="am-launch-mime">MIME</label>
                    <input id="am-launch-mime" name="mimeType" type="text" value="${esc(initial.mimeType || "")}" placeholder="text/plain" />
                </div>
                <div class="modal-field">
                    <label for="am-launch-categories">Categories (comma)</label>
                    <input id="am-launch-categories" name="categories" type="text" value="${esc((initial.categories || []).join(", "))}" placeholder="android.intent.category.LAUNCHER" />
                </div>
                <div class="modal-field">
                    <label>Flags</label>
                    <div>
                        ${FLAG_CHOICES.map((flag) => `
                        <label style="display:flex;gap:0.4rem;align-items:center;margin:0.2rem 0;">
                            <input type="checkbox" name="flag" value="${flag}"${selected.has(flag) ? " checked" : ""} />
                            <span>${flag}</span>
                        </label>`).join("")}
                    </div>
                </div>
                <div class="modal-field">
                    <label for="am-launch-extras">Extras (JSON or key=value)</label>
                    <textarea id="am-launch-extras" name="extras" rows="5" placeholder='{"debug": true}'>${esc(extrasToText(initial.extras))}</textarea>
                </div>
            </div>
            <div class="modal-actions" role="group">
                <button type="button" data-action="reset" class="btn secondary">Reset</button>
                <button type="button" data-action="cancel" class="btn secondary">Cancel</button>
                <button type="submit" class="btn save">Save</button>
            </div>
        </form>
    `);
	const close = modal.__cwspClose;
	const form = modal.querySelector("form");
	const readSpec = () => {
		const flags = [...modal.querySelectorAll("input[name=\"flag\"]:checked")].map((el) => el.value);
		const categories = String(modal.querySelector("[name=\"categories\"]")?.value || "").split(",").map((c) => c.trim()).filter(Boolean);
		return normalizeLauncherLaunchSpec({
			componentName: modal.querySelector("[name=\"componentName\"]")?.value,
			action: modal.querySelector("[name=\"action\"]")?.value,
			data: modal.querySelector("[name=\"data\"]")?.value,
			mimeType: modal.querySelector("[name=\"mimeType\"]")?.value,
			categories,
			flags,
			extras: parseExtrasText(modal.querySelector("[name=\"extras\"]")?.value || "")
		});
	};
	form?.addEventListener("click", (ev) => {
		const action = ev.target?.closest?.("[data-action]")?.getAttribute("data-action");
		if (action === "cancel") {
			ev.preventDefault();
			close?.();
		}
		if (action === "reset") {
			ev.preventDefault();
			clearAppLaunchSpec(opts.packageName);
			opts.onSave?.({});
			showSuccess("Launch reset to default");
			close?.();
		}
	});
	form?.addEventListener("submit", (ev) => {
		ev.preventDefault();
		const spec = readSpec();
		setAppLaunchSpec(opts.packageName, spec);
		opts.onSave?.(spec);
		showSuccess(isLauncherLaunchSpecEmpty(spec) ? "Launch reset to default" : "Launch saved");
		close?.();
	});
}
function confirmUninstall(label, verb = "Uninstall") {
	return globalThis.confirm?.(`${verb} “${label}”?`) === true;
}
function refreshWhenVisible(onRefresh) {
	const tick = () => {
		if (document.visibilityState !== "visible") return;
		document.removeEventListener("visibilitychange", tick);
		onRefresh();
	};
	document.addEventListener("visibilitychange", tick);
	globalThis.setTimeout?.(onRefresh, 1600);
}
function openBookmarkInfoDialog(entry) {
	const rows = [
		["Title", entry.title || "—"],
		["URL", entry.url || "—"],
		["Id", entry.id],
		["Type", entry.folder ? "Folder" : "Bookmark"]
	];
	const modal = openEditorDialog(`
        <form class="speed-dial-editor__form" autocomplete="off">
            <header class="modal-header">
                <h2 class="modal-title">${entry.folder ? "Folder info" : "Bookmark info"}</h2>
                <p class="modal-description">${esc(entry.title)}</p>
            </header>
            <div class="modal-fields">
                ${rows.map(([k, v]) => `
                    <div class="modal-field">
                        <label>${esc(k)}</label>
                        <input type="text" readonly value="${esc(v)}" />
                    </div>`).join("")}
            </div>
            <div class="modal-actions" role="group">
                <span></span>
                <button type="button" data-action="close" class="btn save">Close</button>
            </div>
        </form>
    `);
	const close = modal.__cwspClose;
	modal.querySelector("form")?.addEventListener("click", (ev) => {
		if (ev.target?.closest?.("[data-action]")?.getAttribute("data-action") === "close") {
			ev.preventDefault();
			close?.();
		}
	});
}
function openBookmarkFieldsDialog(opts) {
	const showUrl = opts.showUrl !== false;
	return new Promise((resolve) => {
		let settled = false;
		const modal = openEditorDialog(`
        <form class="speed-dial-editor__form" autocomplete="off">
            <header class="modal-header">
                <h2 class="modal-title">${esc(opts.heading)}</h2>
                ${opts.description ? `<p class="modal-description">${esc(opts.description)}</p>` : ""}
            </header>
            <div class="modal-fields">
                <div class="modal-field">
                    <label for="am-bm-title">Title</label>
                    <input id="am-bm-title" name="title" type="text" value="${esc(opts.initialTitle || "")}" />
                </div>
                ${showUrl ? `<div class="modal-field">
                    <label for="am-bm-url">URL</label>
                    <input id="am-bm-url" name="url" type="url" value="${esc(opts.initialUrl || "")}" placeholder="https://" />
                </div>` : ""}
            </div>
            <div class="modal-actions" role="group">
                <span></span>
                <button type="button" data-action="cancel" class="btn secondary">Cancel</button>
                <button type="submit" class="btn save">${esc(opts.submitLabel || "Save")}</button>
            </div>
        </form>
    `);
		const close = modal.__cwspClose;
		const finish = (value) => {
			if (settled) return;
			settled = true;
			close?.();
			resolve(value);
		};
		const form = modal.querySelector("form");
		form?.addEventListener("click", (ev) => {
			if (ev.target?.closest?.("[data-action]")?.getAttribute("data-action") === "cancel") {
				ev.preventDefault();
				finish(null);
			}
		});
		modal.addEventListener("cancel", () => finish(null));
		form?.addEventListener("submit", (ev) => {
			ev.preventDefault();
			const title = String(modal.querySelector("[name=\"title\"]")?.value || "").trim();
			if (!title) {
				showError("Title is required");
				return;
			}
			if (!showUrl) {
				finish({ title });
				return;
			}
			const href = normalizeBookmarkHref(modal.querySelector("[name=\"url\"]")?.value || "");
			if (!href) {
				showError("URL is required");
				return;
			}
			finish({
				title,
				url: href
			});
		});
	});
}
function openBookmarkLaunchEditor(opts) {
	const entry = opts.entry;
	(async () => {
		const fields = await openBookmarkFieldsDialog({
			heading: entry.folder ? "Rename folder" : "Edit bookmark",
			description: entry.folder ? entry.title : `${entry.title} — Chrome bookmark`,
			initialTitle: entry.title,
			initialUrl: entry.url || "",
			showUrl: !entry.folder,
			submitLabel: "Save"
		});
		if (!fields) return;
		if (!opts.api.update) {
			showError("Bookmark edit unavailable");
			return;
		}
		const next = await opts.api.update(entry.id, entry.folder ? { title: fields.title } : {
			title: fields.title,
			url: fields.url
		});
		if (!next) {
			showError(entry.folder ? "Could not rename folder" : "Could not update bookmark");
			return;
		}
		syncStoredBookmark(next);
		showSuccess(entry.folder ? "Folder renamed" : "Bookmark updated");
		opts.onSaved?.(next);
	})();
}
//#endregion
//#region src/frontend/shells/environment/components/app-menu/tile-chrome.ts
var STORAGE_KEY = "cwsp-app-menu-tile-chrome-v1";
var cache = null;
function readAll() {
	if (cache) return cache;
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) {
			cache = {};
			return cache;
		}
		const parsed = JSON.parse(raw);
		cache = parsed && typeof parsed === "object" ? parsed : {};
	} catch {
		cache = {};
	}
	return cache;
}
function writeAll(map) {
	cache = map;
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
	} catch {}
}
function appMenuChromeKeyForPackage(packageName) {
	return `app:${String(packageName || "").trim()}`;
}
function appMenuChromeKeyForBookmark(id) {
	return `bm:${String(id || "").trim()}`;
}
function getAppMenuTileChrome(key) {
	const k = String(key || "").trim();
	if (!k) return {};
	return { ...readAll()[k] || {} };
}
function setAppMenuTileChrome(key, patch) {
	const k = String(key || "").trim();
	if (!k) return {};
	const all = { ...readAll() };
	const next = {
		...all[k] || {},
		...patch
	};
	if (next.shape) next.shape = normalizeTileShape(next.shape, "circle");
	if (next.iconDisplay) next.iconDisplay = normalizeIconDisplay(next.iconDisplay) || "colored";
	if (next.iconScale != null) next.iconScale = normalizeItemIconBitmapScale(next.iconScale);
	all[k] = next;
	writeAll(all);
	return next;
}
function clearAppMenuTileChrome(key) {
	const k = String(key || "").trim();
	if (!k) return;
	const all = { ...readAll() };
	delete all[k];
	writeAll(all);
}
/** Compact dialog to tweak App Menu tile shape + icon display. */
function openAppMenuTileChromeEditor(opts) {
	const initial = {
		...opts.defaults || {},
		...opts.initial || {},
		...getAppMenuTileChrome(opts.key)
	};
	const storedUrl = String(initial.iconUrl || "").trim();
	const safeUrl = storedUrl.startsWith("blob:") ? "" : storedUrl;
	const modal = document.createElement("dialog");
	modal.className = "speed-dial-editor env-shell-app-menu__chrome-editor";
	modal.innerHTML = `
        <form class="speed-dial-editor__form" autocomplete="off">
            <header class="modal-header">
                <h2 class="modal-title">Icon design</h2>
                <p class="modal-description">${String(opts.title || "").replace(/[<>&]/g, "")}</p>
            </header>
            <div class="modal-fields">
                <div class="modal-field">
                    <label for="am-chrome-shape">Shape</label>
                    <select id="am-chrome-shape" name="shape">
                        ${TILE_SHAPE_OPTIONS.map((o) => `<option value="${o.value}"${normalizeTileShape(initial.shape, "circle") === o.value ? " selected" : ""}>${o.label}</option>`).join("")}
                    </select>
                </div>
                <div class="modal-field">
                    <label for="am-chrome-display">Icon display</label>
                    <select id="am-chrome-display" name="iconDisplay">
                        ${ICON_DISPLAY_OPTIONS.map((o) => `<option value="${o.value}"${(normalizeIconDisplay(initial.iconDisplay) || "colored") === o.value ? " selected" : ""}>${o.label}</option>`).join("")}
                    </select>
                </div>
                <div class="modal-field">
                    <label for="am-chrome-icon-scale">Icon scale (inside plate)</label>
                    <select id="am-chrome-icon-scale" name="iconScale">
                        ${ICON_BITMAP_SCALE_OPTIONS.map((o) => `<option value="${o.value}"${normalizeItemIconBitmapScale(initial.iconScale) === o.value ? " selected" : ""}>${o.label}</option>`).join("")}
                    </select>
                </div>
                <div class="modal-field" data-field="glyph">
                    <label for="am-chrome-icon">Icon (Phosphor)</label>
                    <input id="am-chrome-icon" name="icon" type="text" value="${String(initial.icon || "").replace(/"/g, "&quot;")}" placeholder="device-mobile" />
                </div>
                <div class="modal-field" data-field="url">
                    <label for="am-chrome-url">Icon resource</label>
                    <div class="sd-icon-resource-row">
                        <input id="am-chrome-url" name="iconUrl" type="text" value="${safeUrl.replace(/"/g, "&quot;")}" placeholder="URL / data: / android-icon:…" />
                        <button type="button" class="btn secondary sd-icon-resource-pick" data-action="pick-icon" title="Pick alternative icon" aria-label="Pick alternative icon">
                            <ui-icon icon="squares-four" icon-style="duotone" aria-hidden="true"></ui-icon>
                        </button>
                    </div>
                </div>
            </div>
            <div class="modal-actions" role="group" aria-label="Icon design actions">
                <button type="button" data-action="reset" class="btn secondary">Reset</button>
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
	}
	const shapeSelect = modal.querySelector("select[name=\"shape\"]");
	const displaySelect = modal.querySelector("select[name=\"iconDisplay\"]");
	const iconScaleSelect = modal.querySelector("select[name=\"iconScale\"]");
	const iconInput = modal.querySelector("input[name=\"icon\"]");
	const urlInput = modal.querySelector("input[name=\"iconUrl\"]");
	const glyphField = modal.querySelector("[data-field=\"glyph\"]");
	const urlField = modal.querySelector("[data-field=\"url\"]");
	const pkg = String(opts.packageName || "").trim() || (opts.key.startsWith("app:") ? opts.key.slice(4) : "");
	const pageUrl = String(opts.pageUrl || "").trim();
	if (urlField && urlInput) attachIconResourcePickButton(urlField, urlInput, {
		packageName: pkg,
		pageUrl
	});
	const sync = () => {
		const d = normalizeIconDisplay(displaySelect?.value) || "colored";
		if (glyphField) {
			if (d === "glyph") glyphField.removeAttribute("hidden");
			else glyphField.setAttribute("hidden", "");
		}
		if (urlField) {
			if (d === "glyph") urlField.setAttribute("hidden", "");
			else urlField.removeAttribute("hidden");
		}
	};
	displaySelect?.addEventListener("change", sync);
	sync();
	const close = () => {
		try {
			if (modal.open) modal.close();
		} catch {}
		modal.remove();
	};
	form?.addEventListener("click", (ev) => {
		const action = ev.target?.closest?.("[data-action]")?.getAttribute("data-action");
		if (action === "cancel") {
			ev.preventDefault();
			close();
		}
		if (action === "reset") {
			ev.preventDefault();
			clearAppMenuTileChrome(opts.key);
			opts.onSave({});
			close();
		}
	});
	form?.addEventListener("submit", (ev) => {
		ev.preventDefault();
		const rawUrl = String(urlInput?.value || "").trim();
		const chrome = {
			shape: normalizeTileShape(shapeSelect?.value, "circle"),
			iconDisplay: normalizeIconDisplay(displaySelect?.value) || "colored",
			iconScale: normalizeItemIconBitmapScale(iconScaleSelect?.value),
			icon: String(iconInput?.value || "").trim(),
			iconUrl: rawUrl.startsWith("blob:") ? "" : rawUrl
		};
		setAppMenuTileChrome(opts.key, chrome);
		opts.onSave(chrome);
		close();
	});
	modal.addEventListener("cancel", (ev) => {
		ev.preventDefault();
		close();
	});
	document.body.append(modal);
	try {
		modal.showModal();
	} catch {
		modal.setAttribute("open", "");
	}
}
//#endregion
//#region src/frontend/shells/environment/components/app-menu/AppMenu.ts
/**
* WHY: `.env-shell-app-menu` slide-over host for launcher SKU.
* Avoids a static import of subsystem `launcher-bridge` (fl.ui ↔ subsystem cycle) — hosts
* resolve `com/routing/native/launcher-bridge` at runtime, or register via {@link setLauncherBridgeForAppMenu}.
*/
var styled = preloadStyle(app_menu_default);
var documentStylesApplied = false;
var LONG_PRESS_MS = 420;
var PRE_DRAG_MOVE_PX = 10;
var registeredLauncherBridge = null;
/** Matches {@code BootLoader} + launcher design spec. */
function isLauncherSku() {
	return document.documentElement.dataset.cwspShellRole === "launcher" || globalThis.__RS_SHELL_ROLE__ === "launcher";
}
/** App Menu mounts for Android launcher SKU or CRX bookmarks Start. */
function isAppMenuEnabled() {
	return isLauncherSku() || hasBookmarksMenuApi();
}
function resolveAppMenuMode() {
	if (isLauncherSku()) return "launcher";
	if (hasBookmarksMenuApi()) return "bookmarks";
	return null;
}
async function resolveLauncherBridge() {
	if (registeredLauncherBridge) return registeredLauncherBridge;
	try {
		return await __vitePreload(() => import("../chunks/launcher-bridge.js"), __vite__mapDeps([0,1,2,3,4,5,6,7]), import.meta.url);
	} catch {
		return null;
	}
}
function ensureDocumentStyles() {
	if (documentStylesApplied) return;
	documentStylesApplied = true;
	try {
		document.adoptedStyleSheets = [...document.adoptedStyleSheets, styled];
	} catch {}
}
function resolveAppMenuHost() {
	return document.querySelector(".env-shell-root") || document.querySelector("env-shell-container") || document.querySelector(".env-shell-chrome")?.parentElement || document.body;
}
function createDragGhost(iconPlate, label) {
	const ghost = document.createElement("div");
	ghost.className = "env-shell-app-menu__drag-ghost";
	ghost.setAttribute("aria-hidden", "true");
	const ghostIcon = iconPlate.cloneNode(true);
	ghostIcon.className = "env-shell-app-menu__drag-ghost-icon ui-ws-item-icon shaped";
	ghostIcon.setAttribute("data-shape", normalizeTileShape(iconPlate.getAttribute("data-shape"), "circle"));
	const ghostLabel = document.createElement("span");
	ghostLabel.className = "env-shell-app-menu__drag-ghost-label";
	ghostLabel.textContent = label;
	ghost.append(ghostIcon, ghostLabel);
	return ghost;
}
var APP_MENU_DEFAULT_SHAPE = "circle";
function paintAppMenuIconPlate(iconPlate, opts) {
	const shape = normalizeTileShape(opts.chrome.shape, APP_MENU_DEFAULT_SHAPE);
	iconPlate.setAttribute("data-shape", shape);
	iconPlate.classList.add("ui-ws-item-icon", "shaped");
	const resourceRaw = String(opts.chrome.iconUrl || "").trim() || String(opts.resourceUrl || "").trim();
	const fetchSize = tileIconFetchSize(opts.chrome.iconScale);
	const cachedAndroid = isAndroidIconRef(resourceRaw) ? getCachedIconResourceObjectUrl(resourceRaw, fetchSize) : "";
	const resource = String(cachedAndroid || (isAndroidIconRef(resourceRaw) ? "" : resourceRaw) || "").trim();
	const display = normalizeIconDisplay(opts.chrome.iconDisplay) || inferIconDisplay({
		iconDisplay: opts.chrome.iconDisplay,
		iconUrl: resource || resourceRaw,
		isLauncherApp: Boolean(opts.launcher),
		isBookmarkFavicon: Boolean(resource || resourceRaw) && !opts.launcher
	});
	iconPlate.setAttribute("data-icon-display", display);
	applyItemIconScaleToElement(iconPlate, defaultIconScaleForDisplay(display, opts.chrome.iconScale));
	iconPlate.replaceChildren();
	const finishPaint = () => {
		applyIconScaleToPaintedNodes(iconPlate);
		syncShapelessIconShadow(iconPlate);
	};
	if (display === "glyph") {
		const glyph = String(opts.chrome.icon || opts.fallbackGlyph || "device-mobile").trim() || "device-mobile";
		const icon = document.createElement("ui-icon");
		icon.setAttribute("icon", glyph);
		icon.setAttribute("icon-style", "duotone");
		icon.setAttribute("aria-hidden", "true");
		iconPlate.append(icon);
		finishPaint();
		return;
	}
	if (display === "colored") {
		const img = document.createElement("img");
		img.className = opts.launcher ? "ui-ws-item-icon-img" : "ui-ws-item-icon-img env-shell-app-menu__tile-favicon";
		img.alt = "";
		img.decoding = "async";
		img.draggable = false;
		img.referrerPolicy = "no-referrer";
		if (!opts.launcher && (isBookmarkFaviconResourceUrl(resource) || isBookmarkFaviconResourceUrl(resourceRaw))) img.toggleAttribute("data-bookmark-favicon", true);
		else if (opts.launcher) img.toggleAttribute("data-launcher-icon", true);
		if (resource) img.src = resource;
		else img.toggleAttribute("data-icon-pending", true);
		iconPlate.append(img);
		finishPaint();
		if (isAndroidIconRef(resourceRaw)) resolveIconResourceUrl(resourceRaw, fetchSize).then((url) => {
			if (!url || !img.isConnected) return;
			img.src = url;
			img.removeAttribute("data-icon-pending");
			finishPaint();
		});
		return;
	}
	const host = createTileUiIconElement({
		display,
		glyph: String(opts.chrome.icon || opts.fallbackGlyph || "device-mobile"),
		resourceUrl: resource || void 0,
		launcher: opts.launcher,
		className: "ui-ws-item-icon-native"
	});
	iconPlate.append(host);
	finishPaint();
	if (opts.launcher && resource && display !== "glyph") {
		applyLauncherIconToUiIcon(host, resource, display);
		finishPaint();
	}
	if (isAndroidIconRef(resourceRaw)) resolveIconResourceUrl(resourceRaw, fetchSize).then((url) => {
		if (!url || !host.isConnected) return;
		applyLauncherIconToUiIcon(host, url, display);
		finishPaint();
	});
}
function bindLauncherAppTileDrag(tile, app, iconPlate, hooks) {
	const envelope = () => buildLauncherAppDragEnvelope(app);
	const coarse = typeof window !== "undefined" && (window.matchMedia?.("(pointer: coarse)")?.matches || "ontouchstart" in window);
	tile.draggable = !coarse;
	if (!coarse) {
		tile.addEventListener("dragstart", (ev) => {
			const json = envelope();
			ev.dataTransfer?.setData("text/plain", json);
			ev.dataTransfer?.setData("application/json", json);
			if (ev.dataTransfer) {
				ev.dataTransfer.effectAllowed = "copy";
				try {
					ev.dataTransfer.setDragImage(iconPlate, 24, 24);
				} catch {}
			}
			document.documentElement.toggleAttribute("data-app-menu-dragging", true);
		});
		tile.addEventListener("dragend", () => {
			document.documentElement.toggleAttribute("data-app-menu-dragging", false);
		});
	}
	let pressTimer;
	let pointerId = null;
	let startX = 0;
	let startY = 0;
	let dragArmed = false;
	let dragging = false;
	let suppressClick = false;
	let ghost = null;
	const clearPressTimer = () => {
		if (pressTimer) {
			clearTimeout(pressTimer);
			pressTimer = void 0;
		}
	};
	const cancelPointerDrag = () => {
		clearPressTimer();
		dragArmed = false;
		if (!dragging) return;
		dragging = false;
		tile.classList.remove("env-shell-app-menu__tile--dragging");
		document.documentElement.toggleAttribute("data-app-menu-dragging", false);
		ghost?.remove();
		ghost = null;
		if (pointerId != null) {
			try {
				tile.releasePointerCapture(pointerId);
			} catch {}
			pointerId = null;
		}
	};
	const beginPointerDrag = (clientX, clientY, id) => {
		if (dragging) return;
		dragArmed = false;
		dragging = true;
		suppressClick = true;
		tile.classList.add("env-shell-app-menu__tile--dragging");
		document.documentElement.toggleAttribute("data-app-menu-dragging", true);
		ghost = createDragGhost(iconPlate, app.label);
		document.body.appendChild(ghost);
		ghost.style.transform = `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)`;
		try {
			tile.setPointerCapture(id);
		} catch {}
	};
	const moveGhost = (clientX, clientY) => {
		if (!ghost) return;
		ghost.style.transform = `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)`;
	};
	const finishPointerDrag = (clientX, clientY) => {
		if (!isClientPointOverSpeedDial(clientX, clientY)) return;
		const cell = resolveSpeedDialCellFromClientPoint(clientX, clientY);
		if (pinLauncherAppEntry(app, cell ?? void 0)) {
			showSuccess(`Pinned ${app.label} to desktop`);
			hooks.onPinned?.();
		}
	};
	const endPointerDrag = (ev) => {
		if (!dragging) return;
		dragging = false;
		dragArmed = false;
		tile.classList.remove("env-shell-app-menu__tile--dragging");
		document.documentElement.toggleAttribute("data-app-menu-dragging", false);
		ghost?.remove();
		ghost = null;
		if (pointerId != null) {
			try {
				tile.releasePointerCapture(pointerId);
			} catch {}
			pointerId = null;
		}
		finishPointerDrag(ev.clientX, ev.clientY);
	};
	tile.addEventListener("pointerdown", (ev) => {
		if (ev.button !== 0) return;
		clearPressTimer();
		pointerId = ev.pointerId;
		startX = ev.clientX;
		startY = ev.clientY;
		suppressClick = false;
		dragging = false;
		dragArmed = false;
		pressTimer = setTimeout(() => {
			pressTimer = void 0;
			dragArmed = true;
			suppressClick = true;
		}, LONG_PRESS_MS);
	}, { passive: true });
	tile.addEventListener("pointermove", (ev) => {
		if (pressTimer && !dragging && !dragArmed) {
			const dx = ev.clientX - startX;
			const dy = ev.clientY - startY;
			if (Math.hypot(dx, dy) > PRE_DRAG_MOVE_PX) clearPressTimer();
			return;
		}
		if (dragArmed && !dragging) {
			const dx = ev.clientX - startX;
			const dy = ev.clientY - startY;
			if (Math.hypot(dx, dy) > PRE_DRAG_MOVE_PX) beginPointerDrag(ev.clientX, ev.clientY, ev.pointerId);
			return;
		}
		if (dragging) {
			moveGhost(ev.clientX, ev.clientY);
			ev.preventDefault();
		}
	}, { passive: false });
	tile.addEventListener("pointerup", (ev) => {
		clearPressTimer();
		dragArmed = false;
		if (dragging) {
			endPointerDrag(ev);
			return;
		}
	});
	tile.addEventListener("pointercancel", (ev) => {
		clearPressTimer();
		dragArmed = false;
		if (dragging) endPointerDrag(ev);
	});
	tile.addEventListener("contextmenu", () => {
		cancelPointerDrag();
	}, true);
	tile.addEventListener("click", (ev) => {
		if (suppressClick) {
			ev.preventDefault();
			ev.stopPropagation();
			suppressClick = false;
		}
	}, true);
}
async function launchListedApp(bridge, app) {
	const spec = resolveAppLaunchSpec(app.packageName);
	const component = spec.componentName || app.componentName;
	if (!await bridge.launcherLaunch(app.packageName, component, isLauncherLaunchSpecEmpty(spec) ? void 0 : spec)) showError(`Unable to open “${app.label}”`);
}
function renderAppTile(app, bridge, gen, refreshGen, hooks) {
	const tile = document.createElement("button");
	tile.type = "button";
	tile.className = "env-shell-app-menu__tile";
	tile.setAttribute("data-package", app.packageName);
	tile.title = `${app.label} — right-click: info / uninstall / launch; hold and drag`;
	const chromeKey = appMenuChromeKeyForPackage(app.packageName);
	const iconPlate = document.createElement("span");
	iconPlate.className = "env-shell-app-menu__tile-icon ui-ws-item-icon shaped";
	const label = document.createElement("span");
	label.className = "env-shell-app-menu__tile-label";
	label.textContent = app.label;
	tile.append(iconPlate, label);
	const cacheKey = app.iconCacheKey || app.packageName;
	const paint = (resourceUrl = "") => {
		paintAppMenuIconPlate(iconPlate, {
			chrome: getAppMenuTileChrome(chromeKey),
			fallbackGlyph: "device-mobile",
			resourceUrl,
			launcher: true
		});
	};
	const fetchSize = tileIconFetchSize(getAppMenuTileChrome(chromeKey).iconScale);
	paint(getCachedLauncherIconObjectUrl(cacheKey, fetchSize));
	ensureLauncherIconObjectUrl(cacheKey, fetchSize).then((objectUrl) => {
		if (gen !== refreshGen()) return;
		if (!objectUrl) return;
		paint(objectUrl);
	}).catch(() => {});
	bindLauncherAppTileDrag(tile, app, iconPlate, hooks);
	tile.addEventListener("contextmenu", (ev) => {
		ev.preventDefault();
		ev.stopPropagation();
		openUnifiedContextMenu({
			x: ev.clientX,
			y: ev.clientY,
			compact: true,
			items: [
				{
					id: "place-desktop",
					label: "Place on desktop",
					icon: "desktop",
					action: () => {
						if (pinLauncherAppEntry(app)) {
							showSuccess(`Placed “${app.label}” on desktop`);
							hooks.onPinned?.();
						}
					}
				},
				{
					id: "icon-design",
					label: "Icon design…",
					icon: "palette",
					action: () => {
						openAppMenuTileChromeEditor({
							title: app.label,
							key: chromeKey,
							packageName: app.packageName,
							defaults: {
								shape: APP_MENU_DEFAULT_SHAPE,
								iconDisplay: "colored"
							},
							onSave: (chrome) => {
								const merged = {
									...getAppMenuTileChrome(chromeKey),
									...chrome
								};
								const size = tileIconFetchSize(merged.iconScale);
								const paintChrome = (resourceUrl = "") => {
									paintAppMenuIconPlate(iconPlate, {
										chrome: merged,
										fallbackGlyph: "device-mobile",
										resourceUrl,
										launcher: true
									});
								};
								paintChrome(getCachedLauncherIconObjectUrl(cacheKey, size) || (isAndroidIconRef(String(merged.iconUrl || "")) ? "" : String(merged.iconUrl || "").trim()));
								if (isAndroidIconRef(String(merged.iconUrl || ""))) resolveIconResourceUrl(merged.iconUrl, size).then((url) => {
									if (url) paintChrome(url);
								});
								else ensureLauncherIconObjectUrl(cacheKey, size).then((url) => {
									if (url) paintChrome(url);
								});
							}
						});
					}
				},
				{
					id: "launch",
					label: "Open",
					icon: "arrow-square-out",
					action: async () => {
						try {
							await launchListedApp(bridge, app);
						} catch {}
					}
				},
				{
					id: "app-info",
					label: "App info",
					icon: "info",
					action: async () => {
						let info = null;
						try {
							info = await bridge.launcherAppInfo?.(app.packageName) || null;
						} catch {
							info = null;
						}
						openAppInfoDialog({
							title: app.label,
							fallback: {
								packageName: app.packageName,
								componentName: app.componentName,
								label: app.label
							},
							info,
							onOpenSystem: bridge.launcherOpenAppInfo ? () => bridge.launcherOpenAppInfo(app.packageName) : void 0
						});
					}
				},
				...bridge.launcherOpenAppInfo ? [{
					id: "android-settings",
					label: "Android settings",
					icon: "gear",
					action: async () => {
						try {
							if (!await bridge.launcherOpenAppInfo(app.packageName)) showError(`Cannot open Android settings for “${app.label}”`);
						} catch {
							showError(`Cannot open Android settings for “${app.label}”`);
						}
					}
				}] : [],
				{
					id: "edit-launch",
					label: "Edit launch…",
					icon: "sliders",
					action: () => {
						openAppLaunchEditor({
							title: app.label,
							packageName: app.packageName,
							defaultComponent: app.componentName
						});
					}
				},
				...bridge.launcherUninstall ? [{
					id: "uninstall",
					label: "Uninstall",
					icon: "trash",
					danger: true,
					action: async () => {
						if (!confirmUninstall(app.label, "Uninstall")) return;
						try {
							if (!await bridge.launcherUninstall(app.packageName)) {
								showError(`Cannot uninstall “${app.label}”`);
								return;
							}
							showSuccess(`Uninstall started for “${app.label}”`);
							refreshWhenVisible(() => hooks.onAppsChanged?.());
						} catch {
							showError(`Cannot uninstall “${app.label}”`);
						}
					}
				}] : []
			]
		});
	});
	tile.addEventListener("click", async (ev) => {
		ev.preventDefault();
		ev.stopPropagation();
		try {
			await launchListedApp(bridge, app);
		} catch {}
	});
	return tile;
}
function bindBookmarkTileDrag(tile, entry, iconPlate, iconUrl, hooks) {
	if (entry.folder || !String(entry.url || "").trim()) return;
	let pressTimer;
	let dragArmed = false;
	let dragging = false;
	let startX = 0;
	let startY = 0;
	let pointerId = -1;
	let ghost = null;
	const clearPress = () => {
		if (pressTimer != null) {
			clearTimeout(pressTimer);
			pressTimer = void 0;
		}
	};
	const cancelDrag = () => {
		clearPress();
		dragArmed = false;
		if (!dragging) return;
		dragging = false;
		tile.classList.remove("env-shell-app-menu__tile--dragging");
		document.documentElement.toggleAttribute("data-app-menu-dragging", false);
		ghost?.remove();
		ghost = null;
		try {
			tile.releasePointerCapture?.(pointerId);
		} catch {}
	};
	const beginDrag = (clientX, clientY) => {
		if (dragging) return;
		dragArmed = false;
		dragging = true;
		tile.classList.add("env-shell-app-menu__tile--dragging");
		document.documentElement.toggleAttribute("data-app-menu-dragging", true);
		ghost = createDragGhost(iconPlate, entry.title);
		document.body.appendChild(ghost);
		ghost.style.transform = `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)`;
		try {
			tile.setPointerCapture?.(pointerId);
		} catch {}
	};
	const endDrag = (clientX, clientY) => {
		clearPress();
		dragArmed = false;
		if (!dragging) return;
		dragging = false;
		tile.classList.remove("env-shell-app-menu__tile--dragging");
		document.documentElement.toggleAttribute("data-app-menu-dragging", false);
		ghost?.remove();
		ghost = null;
		try {
			tile.releasePointerCapture?.(pointerId);
		} catch {}
		if (isClientPointOverSpeedDial(clientX, clientY)) {
			const cell = resolveSpeedDialCellFromClientPoint(clientX, clientY) ?? void 0;
			const paint = String(iconUrl.current || "").trim() || resolveBookmarkDesktopIconUrl(entry, resolveBookmarksMenuApi());
			if (placeBookmarkOnDesktop(entry, cell, resolveBookmarksMenuApi(), paint)) {
				showSuccess(`Placed “${entry.title}” on desktop`);
				hooks.onPinned?.();
			}
		}
	};
	tile.addEventListener("pointerdown", (ev) => {
		if (ev.button != null && ev.button !== 0) return;
		startX = ev.clientX;
		startY = ev.clientY;
		pointerId = ev.pointerId;
		dragging = false;
		dragArmed = false;
		clearPress();
		pressTimer = setTimeout(() => {
			pressTimer = void 0;
			dragArmed = true;
		}, LONG_PRESS_MS);
	});
	tile.addEventListener("pointermove", (ev) => {
		if (!dragging && !dragArmed) {
			if (pressTimer == null) return;
			const dx = ev.clientX - startX;
			const dy = ev.clientY - startY;
			if (dx * dx + dy * dy > 100) clearPress();
			return;
		}
		if (dragArmed && !dragging) {
			const dx = ev.clientX - startX;
			const dy = ev.clientY - startY;
			if (dx * dx + dy * dy > 100) beginDrag(ev.clientX, ev.clientY);
			return;
		}
		if (ghost) {
			ghost.style.transform = `translate(${ev.clientX}px, ${ev.clientY}px) translate(-50%, -50%)`;
			ev.preventDefault();
		}
	}, { passive: false });
	tile.addEventListener("pointerup", (ev) => endDrag(ev.clientX, ev.clientY));
	tile.addEventListener("pointercancel", (ev) => endDrag(ev.clientX, ev.clientY));
	tile.addEventListener("contextmenu", () => cancelDrag(), true);
}
function bindBookmarkTileContextMenu(tile, entry, api, iconUrl, hooks) {
	tile.addEventListener("contextmenu", (ev) => {
		ev.preventDefault();
		ev.stopPropagation();
		if (entry.folder) {
			openUnifiedContextMenu({
				x: ev.clientX,
				y: ev.clientY,
				compact: true,
				items: [
					{
						id: "open-folder",
						label: "Open folder",
						icon: "folder-open",
						action: () => {
							tile.click();
						}
					},
					{
						id: "bm-info",
						label: "Info",
						icon: "info",
						action: () => {
							openBookmarkInfoDialog(entry);
						}
					},
					...api.update ? [{
						id: "bm-edit",
						label: "Rename folder…",
						icon: "pencil",
						action: () => {
							openBookmarkLaunchEditor({
								entry,
								api,
								onSaved: () => hooks.onAppsChanged?.()
							});
						}
					}] : [],
					...api.remove ? [{
						id: "bm-delete",
						label: "Delete folder",
						icon: "trash",
						danger: true,
						action: async () => {
							if (!confirmUninstall(entry.title, "Delete")) return;
							try {
								if (!await api.remove(entry)) {
									showError(`Could not delete “${entry.title}”`);
									return;
								}
								showSuccess(`Deleted “${entry.title}”`);
								forgetBookmarkFromLists(entry.id);
								hooks.onAppsChanged?.();
							} catch {
								showError(`Could not delete “${entry.title}”`);
							}
						}
					}] : []
				]
			});
			return;
		}
		const pinned = isBookmarkPinnedToStart(entry.id);
		openUnifiedContextMenu({
			x: ev.clientX,
			y: ev.clientY,
			compact: true,
			items: [
				{
					id: "place-desktop",
					label: "Place on desktop",
					icon: "desktop",
					action: () => {
						if (placeBookmarkOnDesktop(entry, void 0, api, String(iconUrl.current || "").trim() || resolveBookmarkDesktopIconUrl(entry, api))) {
							showSuccess(`Placed “${entry.title}” on desktop`);
							hooks.onPinned?.();
						}
					}
				},
				{
					id: "icon-design",
					label: "Icon design…",
					icon: "palette",
					action: () => {
						const key = appMenuChromeKeyForBookmark(entry.id);
						openAppMenuTileChromeEditor({
							title: entry.title,
							key,
							pageUrl: String(entry.url || "").trim(),
							defaults: {
								shape: APP_MENU_DEFAULT_SHAPE,
								iconDisplay: "colored"
							},
							onSave: (chrome) => {
								const plate = tile.querySelector(".env-shell-app-menu__tile-icon");
								if (!plate) return;
								const merged = {
									...getAppMenuTileChrome(key),
									...chrome
								};
								const resource = String(merged.iconUrl || "").trim() || String(iconUrl.current || "").trim() || resolveBookmarkDesktopIconUrl(entry, api);
								paintAppMenuIconPlate(plate, {
									chrome: merged,
									fallbackGlyph: entry.folder ? "folder" : "link",
									resourceUrl: resource
								});
								if (resource) iconUrl.current = resource;
							}
						});
					}
				},
				pinned ? {
					id: "unpin-start",
					label: "Unpin from Start",
					icon: "push-pin-slash",
					action: () => {
						if (unpinBookmarkFromStart(entry.id)) {
							showSuccess(`Unpinned “${entry.title}”`);
							hooks.onStartPinsChanged?.();
						}
					}
				} : {
					id: "pin-start",
					label: "Pin to Start",
					icon: "push-pin",
					action: () => {
						if (pinBookmarkToStart(entry)) {
							showSuccess(`Pinned “${entry.title}” to Start`);
							hooks.onStartPinsChanged?.();
						}
					}
				},
				{
					id: "open",
					label: "Open",
					icon: "arrow-square-out",
					action: async () => {
						pushRecentBookmark(entry);
						try {
							await api.open(entry);
						} catch {}
					}
				},
				{
					id: "bm-info",
					label: "Info",
					icon: "info",
					action: () => {
						openBookmarkInfoDialog(entry);
					}
				},
				...api.update && !entry.folder ? [{
					id: "bm-edit",
					label: "Edit bookmark…",
					icon: "pencil",
					action: () => {
						openBookmarkLaunchEditor({
							entry,
							api,
							onSaved: () => hooks.onAppsChanged?.()
						});
					}
				}] : [],
				...api.remove ? [{
					id: "bm-delete",
					label: entry.folder ? "Delete folder" : "Delete",
					icon: "trash",
					danger: true,
					action: async () => {
						if (!confirmUninstall(entry.title, "Delete")) return;
						try {
							if (!await api.remove(entry)) {
								showError(`Could not delete “${entry.title}”`);
								return;
							}
							showSuccess(`Deleted “${entry.title}”`);
							forgetBookmarkFromLists(entry.id);
							hooks.onAppsChanged?.();
						} catch {
							showError(`Could not delete “${entry.title}”`);
						}
					}
				}] : []
			]
		});
	});
}
function renderBookmarkTile(entry, api, hooks, onFolder) {
	const tile = document.createElement("button");
	tile.type = "button";
	tile.className = "env-shell-app-menu__tile";
	tile.setAttribute("data-bookmark-id", entry.id);
	if (entry.folder) tile.setAttribute("data-folder", "");
	tile.title = entry.folder ? `${entry.title} — open folder` : `${entry.title} — right-click: info / edit / delete; hold to drag`;
	const chromeKey = appMenuChromeKeyForBookmark(entry.id);
	const iconPlate = document.createElement("span");
	iconPlate.className = "env-shell-app-menu__tile-icon ui-ws-item-icon shaped";
	iconPlate.setAttribute("data-shape", APP_MENU_DEFAULT_SHAPE);
	const label = document.createElement("span");
	label.className = "env-shell-app-menu__tile-label";
	label.textContent = entry.title;
	tile.append(iconPlate, label);
	const iconUrl = { current: "" };
	const applyChromePaint = (url) => {
		const chrome = getAppMenuTileChrome(chromeKey);
		if (chrome.shape || chrome.iconDisplay || chrome.icon || chrome.iconUrl) {
			paintAppMenuIconPlate(iconPlate, {
				chrome,
				fallbackGlyph: entry.folder ? "folder" : "link",
				resourceUrl: String(chrome.iconUrl || url || "").trim()
			});
			return;
		}
		iconPlate.setAttribute("data-shape", APP_MENU_DEFAULT_SHAPE);
	};
	applyBookmarkIconToPlate(iconPlate, entry, api).then((url) => {
		iconUrl.current = url;
		applyChromePaint(url);
	});
	bindBookmarkTileDrag(tile, entry, iconPlate, iconUrl, hooks);
	bindBookmarkTileContextMenu(tile, entry, api, iconUrl, hooks);
	tile.addEventListener("click", async (ev) => {
		ev.preventDefault();
		ev.stopPropagation();
		if (document.documentElement.hasAttribute("data-app-menu-dragging")) return;
		if (entry.folder) {
			onFolder(entry.id, entry.title);
			return;
		}
		pushRecentBookmark(entry);
		try {
			await api.open(entry);
		} catch {}
	});
	return tile;
}
/**
* Mount `.env-shell-app-menu` beside the shell chrome.
* Launcher SKU → Android apps grid; CRX bookmarks API → Win7-style Start (recent | folders).
*/
function mountEnvironmentAppMenu() {
	ensureDocumentStyles();
	const mode = resolveAppMenuMode();
	const root = document.createElement("div");
	root.className = "env-shell-app-menu";
	root.hidden = true;
	root.setAttribute("role", "dialog");
	root.setAttribute("aria-modal", "false");
	root.setAttribute("aria-label", mode === "bookmarks" ? "Bookmarks" : "Apps");
	if (mode) root.setAttribute("data-menu-mode", mode);
	const syncAppMenuColorScheme = () => {
		try {
			const html = document.documentElement;
			const pinned = (html.getAttribute("data-theme") || "").toLowerCase();
			const inline = (html.style.colorScheme || "").trim().toLowerCase();
			const scheme = pinned === "light" || pinned === "dark" ? pinned : inline === "light" || inline === "dark" ? inline : "";
			if (scheme === "light" || scheme === "dark") {
				root.dataset.theme = scheme;
				root.style.colorScheme = scheme;
				return;
			}
			delete root.dataset.theme;
			root.style.colorScheme = "inherit";
		} catch {}
	};
	syncAppMenuColorScheme();
	const onThemeChange = () => syncAppMenuColorScheme();
	document.addEventListener("u2-theme-change", onThemeChange);
	const themeAttrObserver = new MutationObserver(onThemeChange);
	try {
		themeAttrObserver.observe(document.documentElement, {
			attributes: true,
			attributeFilter: [
				"data-theme",
				"data-scheme",
				"style"
			]
		});
	} catch {}
	const panel = document.createElement("div");
	panel.className = "env-shell-app-menu__panel";
	if (mode === "bookmarks") panel.setAttribute("data-layout", "start-split");
	const banner = document.createElement("div");
	banner.className = "env-shell-app-menu__banner";
	banner.hidden = true;
	const bannerText = document.createElement("p");
	bannerText.className = "env-shell-app-menu__banner-text";
	bannerText.textContent = "Set CWSP Launcher as Home";
	const bannerAction = document.createElement("button");
	bannerAction.type = "button";
	bannerAction.className = "env-shell-app-menu__banner-action btn";
	bannerAction.textContent = "Set as default";
	banner.append(bannerText, bannerAction);
	const search = document.createElement("input");
	search.type = "search";
	search.className = "env-shell-app-menu__search";
	search.placeholder = mode === "bookmarks" ? "Search bookmarks" : "Search apps";
	search.autocomplete = "off";
	search.setAttribute("aria-label", mode === "bookmarks" ? "Search bookmarks" : "Search apps");
	const tools = document.createElement("div");
	tools.className = "env-shell-app-menu__tools";
	const sortBySelect = document.createElement("select");
	sortBySelect.className = "env-shell-app-menu__sort";
	sortBySelect.setAttribute("aria-label", "Sort apps");
	for (const [value, label] of APP_MENU_SORT_OPTIONS) {
		const opt = document.createElement("option");
		opt.value = value;
		opt.textContent = label;
		sortBySelect.appendChild(opt);
	}
	const sortDirSelect = document.createElement("select");
	sortDirSelect.className = "env-shell-app-menu__sort-dir";
	sortDirSelect.setAttribute("aria-label", "Sort order");
	for (const [value, label] of [["asc", "A–Z / oldest"], ["desc", "Z–A / newest"]]) {
		const opt = document.createElement("option");
		opt.value = value;
		opt.textContent = label;
		sortDirSelect.appendChild(opt);
	}
	const syncSortControls = () => {
		const prefs = peekAppMenuSort();
		sortBySelect.value = prefs.sortBy;
		sortDirSelect.value = prefs.sortDir;
	};
	syncSortControls();
	tools.append(search, sortBySelect, sortDirSelect);
	const startBody = document.createElement("div");
	startBody.className = "env-shell-app-menu__start-body";
	startBody.hidden = mode !== "bookmarks";
	const leftCol = document.createElement("div");
	leftCol.className = "env-shell-app-menu__start-left";
	leftCol.setAttribute("aria-label", "Pinned and recent bookmarks");
	const pinnedHeading = document.createElement("div");
	pinnedHeading.className = "env-shell-app-menu__start-heading";
	pinnedHeading.textContent = "Pinned";
	const pinnedList = document.createElement("div");
	pinnedList.className = "env-shell-app-menu__start-recent env-shell-app-menu__start-pinned";
	const recentHeading = document.createElement("div");
	recentHeading.className = "env-shell-app-menu__start-heading";
	recentHeading.textContent = "Recent";
	const recentList = document.createElement("div");
	recentList.className = "env-shell-app-menu__start-recent";
	leftCol.append(pinnedHeading, pinnedList, recentHeading, recentList);
	const rightCol = document.createElement("div");
	rightCol.className = "env-shell-app-menu__start-right";
	const crumb = document.createElement("div");
	crumb.className = "env-shell-app-menu__crumb";
	const crumbNav = document.createElement("div");
	crumbNav.className = "env-shell-app-menu__crumb-nav";
	const crumbActions = document.createElement("div");
	crumbActions.className = "env-shell-app-menu__crumb-actions";
	crumb.append(crumbNav, crumbActions);
	const gridHost = document.createElement("div");
	gridHost.className = "env-shell-app-menu__grid";
	gridHost.setAttribute("data-part", "grid");
	gridHost.setAttribute("aria-label", mode === "bookmarks" ? "Bookmarks" : "Installed apps");
	rightCol.append(crumb, gridHost);
	startBody.append(leftCol, rightCol);
	if (mode === "bookmarks") panel.append(banner, tools, startBody);
	else panel.append(banner, tools, gridHost);
	root.appendChild(panel);
	resolveAppMenuHost().appendChild(root);
	let open = false;
	let refreshGen = 0;
	let searchQuery = "";
	let searchTimer;
	let folderStack = [];
	const syncVisibility = () => {
		if (!isAppMenuEnabled()) {
			root.hidden = true;
			root.toggleAttribute("data-open", false);
			return;
		}
		root.hidden = !open;
		root.toggleAttribute("data-open", open);
	};
	const close = () => {
		if (!open) return;
		open = false;
		root.toggleAttribute("data-page", false);
		syncVisibility();
		root.dispatchEvent(new CustomEvent("env-app-menu-close", { bubbles: true }));
	};
	root.addEventListener("env-app-menu-request-close", (ev) => {
		ev.stopPropagation();
		close();
	});
	const openMenu = () => {
		if (!isAppMenuEnabled()) return;
		syncAppMenuColorScheme();
		open = true;
		syncVisibility();
		refresh();
		root.dispatchEvent(new CustomEvent("env-app-menu-open", { bubbles: true }));
	};
	const openPage = () => {
		root.toggleAttribute("data-page", true);
		openMenu();
	};
	const toggle = () => {
		if (open) close();
		else openMenu();
	};
	const tileDragHooks = {
		onPinned: () => {
			close();
		},
		onStartPinsChanged: () => {
			refresh();
		},
		onAppsChanged: () => {
			refresh();
		}
	};
	const beginCreateBookmark = (kind) => {
		const api = resolveBookmarksMenuApi();
		if (!api?.create) {
			showError("Cannot create bookmark here");
			return;
		}
		const parent = folderStack.length ? folderStack[folderStack.length - 1] : null;
		const parentId = parent?.id || "0";
		const parentTitle = parent?.title || "Bookmarks";
		(async () => {
			const fields = await openBookmarkFieldsDialog({
				heading: kind === "folder" ? "New folder" : "New bookmark",
				description: `Add to “${parentTitle}” (Chrome bookmarks)`,
				showUrl: kind === "url",
				initialTitle: kind === "folder" ? "New folder" : "",
				initialUrl: kind === "url" ? "https://" : "",
				submitLabel: "Create"
			});
			if (!fields) return;
			const created = await api.create(parentId, {
				title: fields.title,
				url: kind === "url" ? fields.url : void 0
			});
			if (!created) {
				showError(kind === "folder" ? "Could not create folder" : "Could not create bookmark");
				return;
			}
			showSuccess(kind === "folder" ? `Created folder “${created.title}”` : `Created “${created.title}”`);
			refresh();
		})();
	};
	const makeCrumbAction = (label, onClick) => {
		const btn = document.createElement("button");
		btn.type = "button";
		btn.className = "env-shell-app-menu__crumb-action";
		btn.textContent = label;
		btn.addEventListener("click", (ev) => {
			ev.preventDefault();
			ev.stopPropagation();
			onClick();
		});
		return btn;
	};
	crumbActions.append(makeCrumbAction("New bookmark", () => beginCreateBookmark("url")), makeCrumbAction("New folder", () => beginCreateBookmark("folder")));
	gridHost.addEventListener("contextmenu", (ev) => {
		if (ev.target?.closest?.("[data-bookmark-id]")) return;
		if (resolveAppMenuMode() !== "bookmarks") return;
		if (!resolveBookmarksMenuApi()?.create) return;
		ev.preventDefault();
		ev.stopPropagation();
		openUnifiedContextMenu({
			x: ev.clientX,
			y: ev.clientY,
			compact: true,
			items: [{
				id: "new-bookmark",
				label: "New bookmark…",
				icon: "bookmark-simple",
				action: () => beginCreateBookmark("url")
			}, {
				id: "new-folder",
				label: "New folder…",
				icon: "folder-plus",
				action: () => beginCreateBookmark("folder")
			}]
		});
	});
	const paintCrumb = () => {
		crumbNav.replaceChildren();
		crumbActions.hidden = mode !== "bookmarks" || !resolveBookmarksMenuApi()?.create;
		if (mode !== "bookmarks") return;
		const rootBtn = document.createElement("button");
		rootBtn.type = "button";
		rootBtn.className = "env-shell-app-menu__crumb-item";
		rootBtn.textContent = "Bookmarks";
		rootBtn.addEventListener("click", () => {
			folderStack = [];
			refresh();
		});
		crumbNav.appendChild(rootBtn);
		folderStack.forEach((seg, idx) => {
			const sep = document.createElement("span");
			sep.className = "env-shell-app-menu__crumb-sep";
			sep.textContent = "›";
			const btn = document.createElement("button");
			btn.type = "button";
			btn.className = "env-shell-app-menu__crumb-item";
			btn.textContent = seg.title;
			btn.addEventListener("click", () => {
				folderStack = folderStack.slice(0, idx + 1);
				refresh();
			});
			crumbNav.append(sep, btn);
		});
	};
	const populateLauncherGrid = async (bridge, gen) => {
		let apps = [];
		try {
			apps = await bridge.launcherList(searchQuery || void 0);
		} catch {
			apps = [];
		}
		if (gen !== refreshGen) return;
		gridHost.replaceChildren();
		const prefs = peekAppMenuSort();
		if (prefs.sortBy === "color") {
			await hydrateAppColorKeys(apps, gridHost);
			if (gen !== refreshGen) return;
		}
		apps = sortLauncherApps(apps, prefs);
		if (apps.length === 0) {
			const empty = document.createElement("p");
			empty.className = "env-shell-app-menu__empty";
			empty.textContent = searchQuery ? "No matching apps" : "No apps found";
			gridHost.appendChild(empty);
			return;
		}
		const frag = document.createDocumentFragment();
		for (const app of apps) frag.appendChild(renderAppTile(app, bridge, gen, () => refreshGen, tileDragHooks));
		gridHost.appendChild(frag);
	};
	const enterFolder = (id, title) => {
		folderStack.push({
			id,
			title
		});
		searchQuery = "";
		search.value = "";
		refresh();
	};
	const populateBookmarks = async (api, gen) => {
		paintCrumb();
		const fillLeftSection = (host, entries, emptyLabel) => {
			host.replaceChildren();
			if (entries.length === 0) {
				const empty = document.createElement("p");
				empty.className = "env-shell-app-menu__empty env-shell-app-menu__empty--compact";
				empty.textContent = emptyLabel;
				host.appendChild(empty);
				return;
			}
			for (const entry of entries) host.appendChild(renderBookmarkTile(entry, api, tileDragHooks, enterFolder));
		};
		fillLeftSection(pinnedList, readPinnedBookmarks(), "No pinned bookmarks");
		fillLeftSection(recentList, readRecentBookmarks(), "No recent bookmarks");
		let entries = [];
		try {
			if (searchQuery) entries = await api.search(searchQuery);
			else {
				const folderId = folderStack.length ? folderStack[folderStack.length - 1].id : void 0;
				entries = await api.listChildren(folderId);
			}
		} catch {
			entries = [];
		}
		if (gen !== refreshGen) return;
		gridHost.replaceChildren();
		if (entries.length === 0) {
			const empty = document.createElement("p");
			empty.className = "env-shell-app-menu__empty";
			empty.textContent = searchQuery ? "No matching bookmarks" : "This folder is empty";
			gridHost.appendChild(empty);
			return;
		}
		const frag = document.createDocumentFragment();
		const dir = peekAppMenuSort().sortDir === "desc" ? -1 : 1;
		const folders = entries.filter((e) => e.folder);
		const links = entries.filter((e) => !e.folder);
		const byTitle = (a, b) => String(a.title || "").localeCompare(String(b.title || ""), void 0, {
			numeric: true,
			sensitivity: "base"
		}) * dir;
		for (const entry of [...folders.sort(byTitle), ...links.sort(byTitle)]) frag.appendChild(renderBookmarkTile(entry, api, tileDragHooks, enterFolder));
		gridHost.appendChild(frag);
	};
	const refresh = async () => {
		const gen = ++refreshGen;
		banner.hidden = true;
		tools.hidden = false;
		search.hidden = false;
		const activeMode = resolveAppMenuMode();
		if (!activeMode) {
			syncVisibility();
			return;
		}
		root.setAttribute("data-menu-mode", activeMode);
		if (activeMode === "bookmarks") {
			panel.setAttribute("data-layout", "start-split");
			startBody.hidden = false;
			if (!panel.contains(startBody)) {
				panel.append(banner, tools, startBody);
				if (gridHost.parentElement !== rightCol) rightCol.append(crumb, gridHost);
			}
			const api = resolveBookmarksMenuApi();
			if (!api) {
				banner.hidden = false;
				bannerText.textContent = "Bookmarks API unavailable in this context";
				bannerAction.hidden = true;
				search.hidden = true;
				tools.hidden = true;
				startBody.hidden = true;
				return;
			}
			bannerAction.hidden = true;
			await populateBookmarks(api, gen);
			return;
		}
		panel.removeAttribute("data-layout");
		startBody.hidden = true;
		if (gridHost.parentElement !== panel) panel.append(gridHost);
		const bridge = await resolveLauncherBridge();
		if (gen !== refreshGen) return;
		if (!bridge?.launcherList || !bridge?.launcherLaunch || !bridge?.launcherIcon) {
			banner.hidden = false;
			bannerText.textContent = "Launcher bridge unavailable — rebuild the Capacitor APK";
			bannerAction.hidden = true;
			search.hidden = true;
			tools.hidden = true;
			gridHost.hidden = true;
			return;
		}
		let isDefault = false;
		try {
			isDefault = await bridge.launcherIsDefault();
		} catch {
			isDefault = false;
		}
		if (gen !== refreshGen) return;
		if (!isDefault) {
			banner.hidden = false;
			bannerText.textContent = "Set CWSP Launcher as Home for full launcher integration";
			bannerAction.hidden = false;
		} else banner.hidden = true;
		search.hidden = false;
		tools.hidden = false;
		gridHost.hidden = false;
		await populateLauncherGrid(bridge, gen);
	};
	sortBySelect.addEventListener("change", () => {
		const sortBy = sortBySelect.value;
		writeAppMenuSort({
			sortBy,
			sortDir: defaultDirForAppSort(sortBy)
		});
		syncSortControls();
	});
	sortDirSelect.addEventListener("change", () => {
		writeAppMenuSort({ sortDir: sortDirSelect.value === "desc" ? "desc" : "asc" });
	});
	const onSortPrefs = () => {
		syncSortControls();
		if (open) refresh();
	};
	window.addEventListener(APP_MENU_SORT_EVENT, onSortPrefs);
	search.addEventListener("input", () => {
		searchQuery = search.value.trim();
		if (searchTimer) clearTimeout(searchTimer);
		searchTimer = setTimeout(() => {
			refresh();
		}, 180);
	});
	bannerAction.addEventListener("click", async (ev) => {
		ev.preventDefault();
		ev.stopPropagation();
		const bridge = await resolveLauncherBridge();
		if (!bridge) return;
		try {
			await bridge.launcherRequestDefault();
		} catch {}
		refresh();
	});
	const onDocPointer = (ev) => {
		if (!open) return;
		if (document.documentElement.hasAttribute("data-app-menu-dragging")) return;
		const path = typeof ev.composedPath === "function" ? ev.composedPath() : [];
		for (const n of path) {
			if (n === root || n === panel) return;
			if (n instanceof Element && root.contains(n)) return;
			if (n instanceof Element && n.closest?.(".cw-context-menu-layer")) return;
			if (n instanceof Element && n.closest?.(".env-shell-app-menu__chrome-editor")) return;
			if (n instanceof Element && n.closest?.("dialog.speed-dial-editor")) return;
		}
		close();
	};
	document.addEventListener("pointerdown", onDocPointer, { capture: true });
	const APP_MENU_KEEP_OPEN_SEL = [
		".env-shell-app-menu__tile",
		".env-shell-app-menu__search",
		".env-shell-app-menu__sort",
		".env-shell-app-menu__sort-dir",
		".env-shell-app-menu__tools",
		".env-shell-app-menu__banner",
		".env-shell-app-menu__pin-menu",
		".env-shell-app-menu__crumb-item",
		".env-shell-app-menu__start-heading",
		".env-shell-app-menu__chrome-editor",
		".env-shell-app-menu__drag-ghost",
		".cw-context-menu-layer",
		"dialog.speed-dial-editor"
	].join(", ");
	const TAP_DISMISS_SLOP_PX = 14;
	let dismissTap = null;
	const isKeepOpenTarget = (t) => t instanceof Element && Boolean(t.closest(APP_MENU_KEEP_OPEN_SEL));
	const onEmptySurfacePointerDown = (ev) => {
		if (!open) return;
		if (ev.button != null && ev.button !== 0) return;
		if (document.documentElement.hasAttribute("data-app-menu-dragging") || isKeepOpenTarget(ev.target)) {
			dismissTap = null;
			return;
		}
		dismissTap = {
			id: ev.pointerId,
			x: ev.clientX,
			y: ev.clientY
		};
	};
	const onEmptySurfacePointerUp = (ev) => {
		if (!dismissTap || dismissTap.id !== ev.pointerId) return;
		const dx = ev.clientX - dismissTap.x;
		const dy = ev.clientY - dismissTap.y;
		dismissTap = null;
		if (!open) return;
		if (document.documentElement.hasAttribute("data-app-menu-dragging")) return;
		if (isKeepOpenTarget(ev.target)) return;
		if (Math.hypot(dx, dy) > TAP_DISMISS_SLOP_PX) return;
		close();
	};
	const onEmptySurfacePointerCancel = (ev) => {
		if (dismissTap?.id === ev.pointerId) dismissTap = null;
	};
	root.addEventListener("pointerdown", onEmptySurfacePointerDown);
	root.addEventListener("pointerup", onEmptySurfacePointerUp);
	root.addEventListener("pointercancel", onEmptySurfacePointerCancel);
	syncVisibility();
	const dispose = () => {
		if (searchTimer) clearTimeout(searchTimer);
		document.documentElement.toggleAttribute("data-app-menu-dragging", false);
		document.removeEventListener("pointerdown", onDocPointer, { capture: true });
		root.removeEventListener("pointerdown", onEmptySurfacePointerDown);
		root.removeEventListener("pointerup", onEmptySurfacePointerUp);
		root.removeEventListener("pointercancel", onEmptySurfacePointerCancel);
		document.removeEventListener("u2-theme-change", onThemeChange);
		window.removeEventListener(APP_MENU_SORT_EVENT, onSortPrefs);
		try {
			themeAttrObserver.disconnect();
		} catch {}
		root.remove();
	};
	return {
		element: root,
		toggle,
		open: openMenu,
		openPage,
		close,
		isOpen: () => open,
		refresh,
		dispose
	};
}
//#endregion
export { setBookmarksMenuApi as i, mountEnvironmentAppMenu as n, createChromeBookmarksMenuApi as r, isAppMenuEnabled as t };
