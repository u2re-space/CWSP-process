import { Kn as SystemBarType, qn as SystemBars } from "../shells/boot-index.js";
import { n as bootMinimal } from "../chunks/BootLoader.js";
//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region src/shared/other/config/ecosystem-skus.ts
var ECOSYSTEM_SKUS = {
	launcher: {
		sku: "launcher",
		androidPackage: "space.u2re.cw",
		scheme: "space.u2re.cw",
		phosphorIcon: "cross",
		defaultView: "home",
		shell: "environment",
		apkManifest: "latest-launcher.json",
		apkName: "cwsp-launcher.apk"
	},
	transfer: {
		sku: "transfer",
		androidPackage: "space.u2re.cwsp",
		scheme: "space.u2re.cwsp",
		phosphorIcon: "drone",
		defaultView: "network",
		shell: "minimal",
		apkManifest: "latest.json",
		apkName: "cwsp.apk"
	},
	explorer: {
		sku: "explorer",
		androidPackage: "space.u2re.explorer",
		scheme: "space.u2re.explorer",
		phosphorIcon: "folder",
		defaultView: "explorer",
		shell: "minimal",
		apkManifest: "latest-explorer.json",
		apkName: "cwsp-explorer.apk"
	},
	document: {
		sku: "document",
		androidPackage: "space.u2re.document",
		scheme: "space.u2re.document",
		phosphorIcon: "books",
		defaultView: "viewer",
		shell: "minimal",
		apkManifest: "latest-document.json",
		apkName: "cwsp-document.apk"
	},
	process: {
		sku: "process",
		androidPackage: "space.u2re.process",
		scheme: "space.u2re.process",
		phosphorIcon: "magic-wand",
		defaultView: "workcenter",
		shell: "minimal",
		apkManifest: "latest-process.json",
		apkName: "cwsp-process.apk"
	},
	crx: {
		sku: "crx",
		androidPackage: null,
		scheme: "chrome-extension",
		phosphorIcon: "cross",
		defaultView: "home",
		shell: "environment",
		apkManifest: "",
		apkName: ""
	}
};
var SKU_SET = new Set(Object.keys(ECOSYSTEM_SKUS));
/** Views that leave the launcher APK and open a sibling SKU. */
var VIEW_TO_SIBLING_SKU = {
	explorer: "explorer",
	viewer: "document",
	editor: "document",
	markdown: "document",
	print: "document",
	workcenter: "process",
	network: "transfer"
};
var isCwspSku = (value) => typeof value === "string" && SKU_SET.has(value);
var readCwspSku = () => {
	try {
		const raw = String(document.documentElement?.dataset?.cwspSku || "").trim().toLowerCase();
		return isCwspSku(raw) ? raw : "";
	} catch {
		return "";
	}
};
/** Stamp `data-cwsp-sku` so Settings / openView / APK update resolve the same host. */
var applyCwspSku = (sku) => {
	try {
		document.documentElement.dataset.cwspSku = sku;
		const rec = ECOSYSTEM_SKUS[sku];
		if (rec.defaultView && !document.documentElement.dataset.cwspDefaultView) document.documentElement.dataset.cwspDefaultView = rec.defaultView;
	} catch {}
};
var siblingSkuForView = (view) => {
	return VIEW_TO_SIBLING_SKU[String(view || "").trim().toLowerCase()] || null;
};
var androidPackageForSku = (sku) => ECOSYSTEM_SKUS[sku]?.androidPackage ?? null;
var apkManifestForSku = (sku) => ECOSYSTEM_SKUS[sku]?.apkManifest || "";
//#endregion
//#region src/frontend/web/capacitor/entry.ts
var enabledViews = [
	"minimal",
	"workcenter",
	"settings"
];
applyCwspSku("process");
document.documentElement.dataset.cwspSurface = "cw-process";
document.documentElement.dataset.cwspNativeShell = "capacitor";
document.documentElement.dataset.cwspEnabledViews = enabledViews.join(",");
document.documentElement.dataset.cwspDefaultView = "workcenter";
SystemBars.hide({ bar: SystemBarType.NavigationBar }).catch(() => {});
function showBootFailure(error) {
	const message = error instanceof Error ? error.stack || error.message : String(error);
	console.error("[CWSP-process] boot failed", error);
	const root = document.body;
	root.replaceChildren();
	root.style.cssText = "margin:0;padding:16px;font:14px/1.4 ui-monospace,monospace;background:#111;color:#f66;white-space:pre-wrap;";
	root.textContent = `[CWSP-process] boot failed\n\n${message}`;
}
bootMinimal(document.body, "workcenter").catch(showBootFailure);
//#endregion
export { siblingSkuForView as a, readCwspSku as i, androidPackageForSku as n, apkManifestForSku as r, ECOSYSTEM_SKUS as t };
