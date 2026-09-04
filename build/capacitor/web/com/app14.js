import { t as __vitePreload } from "../assets/index-CU5eF_0S.js";
//#region ../../modules/projects/fl.ui/src/styles/font-registry.ts
/**
* Font Registry
* FIND:font-registry
*
* WHY: Dynamic shards keep each CRX chunk under the 2048 kB minify warning.
* INVARIANT: do not statically import shard files from this barrel.
*/
var loadShard = (loader) => loader();
var loadFontRegistryShards = async () => {
	const parts = await Promise.all([
		loadShard(() => __vitePreload(() => import("./app13.js"), [], import.meta.url)),
		loadShard(() => __vitePreload(() => import("./app12.js"), [], import.meta.url)),
		loadShard(() => __vitePreload(() => import("./app11.js"), [], import.meta.url)),
		loadShard(() => __vitePreload(() => import("./app10.js"), [], import.meta.url)),
		loadShard(() => __vitePreload(() => import("./app9.js"), [], import.meta.url))
	]);
	return Object.assign({}, ...parts.map((part) => part.fontRegistry));
};
//#endregion
export { loadFontRegistryShards };
