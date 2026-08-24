//#region ../../modules/subsystem/src/other/config/ecosystem-skus.ts
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
var siblingSkuForView = (view) => {
	return VIEW_TO_SIBLING_SKU[String(view || "").trim().toLowerCase()] || null;
};
var androidPackageForSku = (sku) => ECOSYSTEM_SKUS[sku]?.androidPackage ?? null;
//#endregion
export { androidPackageForSku, isCwspSku, readCwspSku, siblingSkuForView };
