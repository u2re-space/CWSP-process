import { r as __exportAll } from "../chunks/rolldown-runtime.js";
//#region ../../modules/projects/icon.ts/src/loader/OPFSCache.ts
var OPFSCache_exports = /* @__PURE__ */ __exportAll({
	cacheRasterIcon: () => cacheRasterIcon,
	cacheVectorIcon: () => cacheVectorIcon,
	clearAllCache: () => clearAllCache,
	getCacheStats: () => getCacheStats,
	getCachedRasterIcon: () => getCachedRasterIcon,
	getCachedVectorIcon: () => getCachedVectorIcon,
	hasRasterIcon: () => hasRasterIcon,
	hasVectorIcon: () => hasVectorIcon,
	initOPFSCache: () => initOPFSCache,
	isOPFSSupported: () => isOPFSSupported,
	removeRasterIcon: () => removeRasterIcon,
	removeVectorIcon: () => removeVectorIcon,
	validateAndCleanCache: () => validateAndCleanCache
});
/**
* OPFS (Origin Private File System) Icon Cache
*
* Provides persistent caching for:
* - Vector SVG icon files (reduces network fetches)
* - Rasterized mask images (reduces canvas operations)
*/
var CACHE_VERSION = 2;
var ROOT_DIR_NAME = "icon-cache";
var VECTOR_DIR = "vector";
var RASTER_DIR = "raster";
var META_FILE = ".cache-meta.json";
var MAX_CACHE_AGE_MS = 10080 * 60 * 1e3;
var MAX_CACHE_SIZE_BYTES = 50 * 1024 * 1024;
var rootHandle = null;
var vectorDirHandle = null;
var rasterDirHandle = null;
var isSupported = null;
var initPromise = null;
var isAllowedProtocolForOPFS = () => {
	try {
		const protocol = String(globalThis?.location?.protocol || "").toLowerCase();
		if (protocol === "file:" || protocol === "about:") return false;
		return protocol === "https:" || protocol === "http:" || protocol === "chrome-extension:";
	} catch {
		return false;
	}
};
/**
* Checks if OPFS is supported in current environment
*/
var isOPFSSupported = () => {
	if (isSupported !== null) return isSupported;
	try {
		isSupported = !!(typeof navigator !== "undefined" && "storage" in navigator && typeof navigator.storage?.getDirectory === "function" && typeof FileSystemFileHandle !== "undefined" && typeof FileSystemDirectoryHandle !== "undefined" && isAllowedProtocolForOPFS());
	} catch {
		isSupported = false;
	}
	return isSupported;
};
/**
* Sanitizes a cache key to be a valid filename
*/
var sanitizeKey = (key) => {
	if (!key || typeof key !== "string") return "_empty_";
	return key.replace(/[<>:"/\\|?*\x00-\x1F]/g, "_").replace(/\.{2,}/g, "_").replace(/^\./, "_").slice(0, 200);
};
/**
* Initializes the OPFS cache directories
*/
var initOPFSCache = async () => {
	if (initPromise) return initPromise;
	initPromise = (async () => {
		if (!isOPFSSupported()) return false;
		try {
			rootHandle = await (await navigator.storage.getDirectory()).getDirectoryHandle(ROOT_DIR_NAME, { create: true });
			const meta = await readCacheMeta();
			const now = Date.now();
			if (meta && meta.version !== CACHE_VERSION) {
				if (typeof console !== "undefined") console.log?.("[icon-cache] Cache version mismatch, clearing cache");
				await clearAllCache();
			} else if (meta && now - meta.lastAccess > MAX_CACHE_AGE_MS) {
				if (typeof console !== "undefined") console.log?.("[icon-cache] Cache expired, clearing cache");
				await clearAllCache();
			} else {
				const stats = await getCacheStats();
				if (stats && stats.totalSize > MAX_CACHE_SIZE_BYTES) {
					if (typeof console !== "undefined") console.log?.("[icon-cache] Cache size exceeded, clearing cache");
					await clearAllCache();
				}
			}
			vectorDirHandle = await rootHandle.getDirectoryHandle(VECTOR_DIR, { create: true });
			rasterDirHandle = await rootHandle.getDirectoryHandle(RASTER_DIR, { create: true });
			await writeCacheMeta();
			return true;
		} catch (error) {
			if (typeof console !== "undefined") console.warn?.("[icon-cache] OPFS init failed:", error);
			if (error instanceof DOMException && error.name === "SecurityError") isSupported = false;
			rootHandle = null;
			vectorDirHandle = null;
			rasterDirHandle = null;
			return false;
		}
	})();
	return initPromise;
};
/**
* Reads cache metadata
*/
var readCacheMeta = async () => {
	if (!rootHandle) return null;
	try {
		const text = await (await (await rootHandle.getFileHandle(META_FILE)).getFile()).text();
		return JSON.parse(text);
	} catch {
		return null;
	}
};
/**
* Writes cache metadata
*/
var writeCacheMeta = async () => {
	if (!rootHandle) return;
	try {
		const writable = await (await rootHandle.getFileHandle(META_FILE, { create: true })).createWritable();
		const meta = {
			version: CACHE_VERSION,
			created: Date.now(),
			lastAccess: Date.now()
		};
		await writable.write(JSON.stringify(meta));
		await writable.close();
	} catch {}
};
/**
* Stores a vector (SVG) icon in cache
*/
var cacheVectorIcon = async (key, svgContent) => {
	if (!vectorDirHandle) {
		if (!await initOPFSCache() || !vectorDirHandle) return false;
	}
	try {
		const filename = sanitizeKey(key) + ".svg";
		const writable = await (await vectorDirHandle.getFileHandle(filename, { create: true })).createWritable();
		if (svgContent instanceof Blob) await writable.write(svgContent);
		else await writable.write(new Blob([svgContent], { type: "image/svg+xml" }));
		await writable.close();
		return true;
	} catch (error) {
		if (typeof console !== "undefined") console.warn?.("[icon-cache] Failed to cache vector:", key, error);
		return false;
	}
};
/**
* Retrieves a vector (SVG) icon from cache
* Returns blob URL if found, null otherwise
*/
var getCachedVectorIcon = async (key) => {
	if (!vectorDirHandle) {
		if (!await initOPFSCache() || !vectorDirHandle) return null;
	}
	try {
		const filename = sanitizeKey(key) + ".svg";
		const file = await (await vectorDirHandle.getFileHandle(filename)).getFile();
		return URL.createObjectURL(file);
	} catch {
		return null;
	}
};
/**
* Checks if a vector icon exists in cache
*/
var hasVectorIcon = async (key) => {
	if (!vectorDirHandle) {
		if (!await initOPFSCache() || !vectorDirHandle) return false;
	}
	try {
		const filename = sanitizeKey(key) + ".svg";
		await vectorDirHandle.getFileHandle(filename);
		return true;
	} catch {
		return false;
	}
};
/**
* Stores a rasterized icon (PNG blob) in cache
*/
var cacheRasterIcon = async (key, bucket, blob) => {
	if (!rasterDirHandle) {
		if (!await initOPFSCache() || !rasterDirHandle) return false;
	}
	try {
		const filename = `${sanitizeKey(key)}@${bucket}.png`;
		const writable = await (await rasterDirHandle.getFileHandle(filename, { create: true })).createWritable();
		await writable.write(blob);
		await writable.close();
		return true;
	} catch (error) {
		if (typeof console !== "undefined") console.warn?.("[icon-cache] Failed to cache raster:", key, error);
		return false;
	}
};
/**
* Retrieves a rasterized icon from cache
* Returns blob URL if found, null otherwise
*/
var getCachedRasterIcon = async (key, bucket) => {
	if (!rasterDirHandle) {
		if (!await initOPFSCache() || !rasterDirHandle) return null;
	}
	try {
		const filename = `${sanitizeKey(key)}@${bucket}.png`;
		const file = await (await rasterDirHandle.getFileHandle(filename)).getFile();
		return URL.createObjectURL(file);
	} catch {
		return null;
	}
};
/**
* Checks if a raster icon exists in cache
*/
var hasRasterIcon = async (key, bucket) => {
	if (!rasterDirHandle) {
		if (!await initOPFSCache() || !rasterDirHandle) return false;
	}
	try {
		const filename = `${sanitizeKey(key)}@${bucket}.png`;
		await rasterDirHandle.getFileHandle(filename);
		return true;
	} catch {
		return false;
	}
};
/**
* Removes a specific vector icon from cache
*/
var removeVectorIcon = async (key) => {
	if (!vectorDirHandle) return false;
	try {
		const filename = sanitizeKey(key) + ".svg";
		await vectorDirHandle.removeEntry(filename);
		return true;
	} catch {
		return false;
	}
};
/**
* Removes a specific raster icon from cache
*/
var removeRasterIcon = async (key, bucket) => {
	if (!rasterDirHandle) return false;
	try {
		const filename = `${sanitizeKey(key)}@${bucket}.png`;
		await rasterDirHandle.removeEntry(filename);
		return true;
	} catch {
		return false;
	}
};
/**
* Clears all cached icons
*/
var clearAllCache = async () => {
	if (!rootHandle) {
		if (!await initOPFSCache() || !rootHandle) return;
	}
	try {
		for await (const [name] of rootHandle.entries()) if (name !== META_FILE) await rootHandle.removeEntry(name, { recursive: true });
		vectorDirHandle = null;
		rasterDirHandle = null;
		initPromise = null;
		await initOPFSCache();
	} catch (error) {
		if (typeof console !== "undefined") console.warn?.("[icon-cache] Failed to clear cache:", error);
	}
};
/**
* Gets cache statistics
*/
var getCacheStats = async () => {
	if (!vectorDirHandle || !rasterDirHandle) {
		if (!await initOPFSCache()) return null;
	}
	try {
		let vectorCount = 0;
		let rasterCount = 0;
		let totalSize = 0;
		for await (const [, handle] of vectorDirHandle.entries()) if (handle.kind === "file") {
			vectorCount++;
			const file = await handle.getFile();
			totalSize += file.size;
		}
		for await (const [, handle] of rasterDirHandle.entries()) if (handle.kind === "file") {
			rasterCount++;
			const file = await handle.getFile();
			totalSize += file.size;
		}
		return {
			vectorCount,
			rasterCount,
			totalSize
		};
	} catch {
		return null;
	}
};
/**
* Validates and cleans up corrupted cache entries
*/
var validateAndCleanCache = async () => {
	if (!vectorDirHandle || !rasterDirHandle) {
		if (!await initOPFSCache()) return;
	}
	const corruptedKeys = [];
	try {
		for await (const [name, handle] of vectorDirHandle.entries()) if (handle.kind === "file" && name.endsWith(".svg")) try {
			const file = await handle.getFile();
			if (file.size === 0) {
				corruptedKeys.push(`vector:${name}`);
				continue;
			}
			if (!(await file.text()).trim().startsWith("<svg")) corruptedKeys.push(`vector:${name}`);
		} catch {
			corruptedKeys.push(`vector:${name}`);
		}
		for await (const [name, handle] of rasterDirHandle.entries()) if (handle.kind === "file" && (name.endsWith(".png") || name.endsWith(".webp"))) try {
			if ((await handle.getFile()).size === 0) corruptedKeys.push(`raster:${name}`);
		} catch {
			corruptedKeys.push(`raster:${name}`);
		}
		for (const key of corruptedKeys) try {
			const [type, filename] = key.split(":");
			if (type === "vector" && vectorDirHandle) await vectorDirHandle.removeEntry(filename);
			else if (type === "raster" && rasterDirHandle) await rasterDirHandle.removeEntry(filename);
		} catch {}
		if (corruptedKeys.length > 0 && typeof console !== "undefined") console.log?.(`[icon-cache] Cleaned up ${corruptedKeys.length} corrupted cache entries`);
	} catch (error) {
		if (typeof console !== "undefined") console.warn?.("[icon-cache] Cache validation failed:", error);
	}
};
/**
* Pre-initializes cache on module load (non-blocking)
*/
if (isOPFSSupported()) initOPFSCache().then(() => {
	validateAndCleanCache().catch(() => {});
}).catch(() => {});
//#endregion
export { isOPFSSupported as a, getCachedVectorIcon as i, cacheVectorIcon as n, clearAllCache as r, OPFSCache_exports as t };
