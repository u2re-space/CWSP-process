const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../vendor/jsox2.js","./rolldown-runtime.js","../assets/index-C9QTqpCS.js","./open-policy.js","./ecosystem-skus.js","./SettingsTypes.js","./process-ingress.js","./airpad-cwsp-client-parity.js","./multi-value-list.js","./cws-bridge.js","../fest/core3.js","../fest/core2.js","../fest/uniform.js","../vendor/@capacitor_core.js","./UniformInterop2.js","./names.js","./remote-connection-runtime.js"])))=>i.map(i=>d[i]);
import { r as __exportAll } from "./rolldown-runtime.js";
import { t as __vitePreload } from "../assets/index-C9QTqpCS.js";
import { n as DEFAULT_SETTINGS } from "./SettingsTypes.js";
//#region src/shared/other/config/RuntimeSettings.ts
var RuntimeSettings_exports = /* @__PURE__ */ __exportAll({ getRuntimeSettings: () => getRuntimeSettings });
var provider;
/** Lazily resolved so we never read `loadSettings` at module init (avoids TDZ when Rollup splits com-app ↔ boot chunks). */
var defaultProvider = null;
async function getDefaultProvider() {
	if (defaultProvider) return defaultProvider;
	const { loadSettings } = await __vitePreload(async () => {
		const { loadSettings } = await import("../vendor/jsox2.js").then((n) => n.t);
		return { loadSettings };
	}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]), import.meta.url);
	defaultProvider = loadSettings;
	return defaultProvider;
}
var getRuntimeSettings = async () => {
	try {
		return await (provider ?? await getDefaultProvider())() || DEFAULT_SETTINGS;
	} catch {
		return DEFAULT_SETTINGS;
	}
};
//#endregion
export { getRuntimeSettings as n, RuntimeSettings_exports as t };
