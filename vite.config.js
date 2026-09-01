/*
 * Filename: vite.config.js
 * FullPath: apps/CWSP-process/vite.config.js
 * FIND:sku
 * Change date and time: 14.45.00_24.08.2026
 * Reason for changes: Process Capacitor APK is this package — not CWSP-document.
 */

import { resolve } from "node:path";
import { readFile } from "node:fs/promises";
import { loadEnv } from "vite";

import { assetFileNames as distAssetFileNames, chunkFileNames as distChunkFileNames } from "./shared/vite-chunk-placement.mjs";

const importConfig = (url, ...args) => {
    return import(url)?.then?.((m) => m?.default?.(...args));
};

export const NAME = "crossword";
export const __dirname = resolve(import.meta.dirname, "./");

const baseConfig = await importConfig(
    resolve(__dirname, "./shared/vite.config.js"),
    NAME,
    JSON.parse(await readFile(resolve(__dirname, "./tsconfig.json"), { encoding: "utf8" })),
    __dirname
);

const ALL_VIEW_IDS = ["viewer", "editor", "workcenter", "explorer", "settings", "history", "home", "print", "airpad", "network"];
/** Process PWA / APK: WorkCenter + settings + history. Markdown lives on CWSP-document. */
const PROCESS_VIEWS = ["workcenter", "settings", "history"];
const DEFAULT_VIEWS_BY_MODE = {
    default: PROCESS_VIEWS
};

const parseViewsFromEnv = (rawValue) => {
    if (!rawValue || typeof rawValue !== "string") return null;
    const normalized = rawValue.trim().toLowerCase();
    if (!normalized || normalized === "all" || normalized === "*") {
        return [...ALL_VIEW_IDS];
    }

    const parsed = normalized
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean);

    if (!parsed.length) return null;
    const uniqueKnownViews = [...new Set(parsed)].filter((view) => ALL_VIEW_IDS.includes(view));
    return uniqueKnownViews.length ? uniqueKnownViews : null;
};

const resolveEnabledViews = (mode, env) => {
    const defaults = DEFAULT_VIEWS_BY_MODE.default;
    const explicit = parseViewsFromEnv(env?.VITE_ENABLED_VIEWS);
    const disabled = parseViewsFromEnv(env?.VITE_DISABLED_VIEWS);
    const start = explicit ?? defaults;

    if (!disabled?.length) {
        return [...start];
    }

    const disabledSet = new Set(disabled);
    const filtered = start.filter((view) => !disabledSet.has(view));
    return filtered.length ? filtered : ["workcenter"];
};

const toViewDefineEntries = (enabledViews) => {
    const enabledSet = new Set(enabledViews);
    return ALL_VIEW_IDS.reduce((acc, viewId) => {
        const key = `__RS_VIEW_${viewId.toUpperCase()}__`;
        acc[key] = enabledSet.has(viewId);
        return acc;
    }, {});
};

const createViewDefine = (mode) => {
    const env = loadEnv(mode || "production", __dirname, "");
    const enabledViews = resolveEnabledViews(mode, env);
    const defaultView = enabledViews.includes("workcenter")
        ? "workcenter"
        : enabledViews[0] || "workcenter";
    return {
        ...toViewDefineEntries(enabledViews),
        __RS_DEFAULT_VIEW__: JSON.stringify(defaultView),
    };
};

/**
 * VDS host SPA for md.u2re.space and LAN `/markdown/` — real index.html + base "./"
 * (endpoint lib build stays the default `build:pwa` path).
 */
const createMarkdownSpaConfig = async (mode) => {
    const { viteStaticCopy } = await import("vite-plugin-static-copy");
    const { VitePWA } = await import("vite-plugin-pwa");
    const outDir = resolve(__dirname, "./build/cw-markdown");
    const platformRoot = resolve(__dirname, "./src/frontend/web/cw-markdown");

    const isPwaPlugin = (plugin) => {
        const name = plugin?.name;
        return typeof name === "string" && (name === "vite-plugin-pwa" || name.startsWith("vite-plugin-pwa:"));
    };
    const isStaticCopyPlugin = (plugin) => {
        const name = plugin?.name;
        return typeof name === "string" && name.startsWith("vite-plugin-static-copy:");
    };
    const isMcpPlugin = (plugin) => {
        const name = plugin?.name;
        return typeof name === "string" && name.toLowerCase().includes("mcp");
    };

    const basePlugins =
        (baseConfig?.plugins || [])
            .flat?.(Infinity)
            ?.filter?.(
                (plugin) =>
                    plugin?.name !== "vite:singlefile" &&
                    !isPwaPlugin(plugin) &&
                    !isStaticCopyPlugin(plugin) &&
                    !isMcpPlugin(plugin)
            ) ?? [];

    const baseRollup = baseConfig?.build?.rollupOptions ?? {};
    const baseOutput = Array.isArray(baseRollup.output) ? baseRollup.output[0] : (baseRollup.output ?? {});

    return {
        ...baseConfig,
        root: platformRoot,
        base: "./",
        // Keep CrossWord cache + public resolve from the app package.
        cacheDir: resolve(__dirname, "node_modules/.vite-cw-markdown"),
        define: {
            ...(baseConfig?.define ?? {}),
            ...createViewDefine(mode),
            "import.meta.env.VITE_ENABLED_VIEWS": JSON.stringify(
                (DEFAULT_VIEWS_BY_MODE.markdown || []).join(",")
            ),
        },
        plugins: [
            ...basePlugins,
            viteStaticCopy({
                targets: [
                    { src: resolve(__dirname, "./src/pwa/manifest.json"), dest: "pwa" },
                    { src: resolve(__dirname, "./src/pwa/icons/*"), dest: "pwa/icons" },
                    { src: resolve(__dirname, "./src/pwa/screenshots/*"), dest: "pwa/screenshots" },
                    { src: resolve(__dirname, "./assets/wallpaper.jpg"), dest: "assets" },
                    { src: resolve(__dirname, "./assets/stock.jpg"), dest: "assets" },
                ],
            }),
            VitePWA({
                // Absolute sw source — Vite root is nested under frontend/web/cw-markdown.
                srcDir: resolve(__dirname, "./src/pwa"),
                filename: "sw.ts",
                outDir,
                registerType: "autoUpdate",
                strategies: "injectManifest",
                injectRegister: null,
                selfDestroying: false,
                injectManifest: {
                    rollupFormat: "iife",
                    injectionPoint: "self.__WB_MANIFEST",
                    maximumFileSizeToCacheInBytes: 1024 * 1024 * 16,
                    globPatterns: ["**/*.{js,css,html,png,svg,json,jpg,jpeg,webp}"],
                    globIgnores: ["**/node_modules/**/*", "**/*.map", "**/stats.html", "**/report.html"],
                },
                manifest: false,
                devOptions: { enabled: false },
            }),
        ],
        build: {
            ...(baseConfig?.build ?? {}),
            // CRITICAL: endpoint lib mode must not apply — Fastify apps need index.html SPA.
            lib: false,
            outDir,
            emptyOutDir: true,
            minify: false,
            cssMinify: false,
            terserOptions: undefined,
            cssCodeSplit: false,
            modulePreload: true,
            rollupOptions: {
                ...baseRollup,
                input: resolve(platformRoot, "index.html"),
                output: {
                    ...baseOutput,
                    dir: outDir,
                    entryFileNames: "assets/[name]-[hash].js",
                    chunkFileNames: distChunkFileNames,
                    assetFileNames: distAssetFileNames(NAME),
                },
            },
            rolldownOptions: {
                ...(baseConfig?.build?.rolldownOptions ?? {}),
                input: resolve(platformRoot, "index.html"),
                output: {
                    ...baseOutput,
                    dir: outDir,
                    entryFileNames: "assets/[name]-[hash].js",
                    chunkFileNames: distChunkFileNames,
                    assetFileNames: distAssetFileNames(NAME),
                },
            },
        },
    };
};

/**
 * VDS PWA for process.u2re.space / ai.u2re.space and hub `/process` `/workcenter` `/ai`.
 * WHY: Capacitor mode strips the PWA plugin; public hosts need installable index.html.
 */
const createProcessSpaConfig = async (_mode) => {
    const { viteStaticCopy } = await import("vite-plugin-static-copy");
    const { VitePWA } = await import("vite-plugin-pwa");
    const outDir = resolve(__dirname, "./build/cw-process");
    const platformRoot = __dirname;
    const enabledViews = PROCESS_VIEWS;

    const isPwaPlugin = (plugin) => {
        const name = plugin?.name;
        return typeof name === "string" && (name === "vite-plugin-pwa" || name.startsWith("vite-plugin-pwa:"));
    };
    const isStaticCopyPlugin = (plugin) => {
        const name = plugin?.name;
        return typeof name === "string" && name.startsWith("vite-plugin-static-copy:");
    };
    const isMcpPlugin = (plugin) => {
        const name = plugin?.name;
        return typeof name === "string" && name.toLowerCase().includes("mcp");
    };

    const basePlugins =
        (baseConfig?.plugins || [])
            .flat?.(Infinity)
            ?.filter?.(
                (plugin) =>
                    plugin?.name !== "vite:singlefile" &&
                    !isPwaPlugin(plugin) &&
                    !isStaticCopyPlugin(plugin) &&
                    !isMcpPlugin(plugin)
            ) ?? [];

    const baseRollup = baseConfig?.build?.rollupOptions ?? {};
    const baseOutput = Array.isArray(baseRollup.output) ? baseRollup.output[0] : (baseRollup.output ?? {});

    return {
        ...baseConfig,
        root: platformRoot,
        base: "./",
        cacheDir: resolve(__dirname, "node_modules/.vite-cw-process"),
        define: {
            ...(baseConfig?.define ?? {}),
            ...toViewDefineEntries(enabledViews),
            __RS_DEFAULT_VIEW__: JSON.stringify("workcenter"),
            "import.meta.env.VITE_ENABLED_VIEWS": JSON.stringify(enabledViews.join(","))
        },
        plugins: [
            ...basePlugins,
            viteStaticCopy({
                targets: [
                    { src: resolve(__dirname, "./src/pwa/manifest.json"), dest: "pwa" },
                    { src: resolve(__dirname, "./src/pwa/icons/*"), dest: "pwa/icons" },
                    { src: resolve(__dirname, "./src/pwa/screenshots/*"), dest: "pwa/screenshots" }
                ]
            }),
            VitePWA({
                srcDir: resolve(__dirname, "./src/pwa"),
                filename: "sw.ts",
                outDir,
                registerType: "autoUpdate",
                strategies: "injectManifest",
                injectRegister: null,
                selfDestroying: false,
                injectManifest: {
                    rollupFormat: "iife",
                    injectionPoint: "self.__WB_MANIFEST",
                    maximumFileSizeToCacheInBytes: 1024 * 1024 * 16,
                    globPatterns: ["**/*.{js,css,html,png,svg,json,jpg,jpeg,webp}"],
                    globIgnores: ["**/node_modules/**/*", "**/*.map", "**/stats.html", "**/report.html"]
                },
                manifest: false,
                devOptions: {
                    enabled: process.env.VITE_PWA_DEV_DISABLE !== "1",
                    type: "module",
                    navigateFallback: "index.html"
                }
            })
        ],
        build: {
            ...(baseConfig?.build ?? {}),
            lib: false,
            outDir,
            emptyOutDir: true,
            minify: false,
            cssMinify: false,
            terserOptions: undefined,
            cssCodeSplit: false,
            modulePreload: true,
            rollupOptions: {
                ...baseRollup,
                input: resolve(platformRoot, "index.html"),
                output: {
                    ...baseOutput,
                    dir: outDir,
                    entryFileNames: "assets/[name]-[hash].js",
                    chunkFileNames: distChunkFileNames,
                    assetFileNames: distAssetFileNames(NAME)
                }
            },
            rolldownOptions: {
                ...(baseConfig?.build?.rolldownOptions ?? {}),
                input: resolve(platformRoot, "index.html"),
                output: {
                    ...baseOutput,
                    dir: outDir,
                    entryFileNames: "assets/[name]-[hash].js",
                    chunkFileNames: distChunkFileNames,
                    assetFileNames: distAssetFileNames(NAME)
                }
            }
        }
    };
};

const PROCESS_CAPACITOR_VIEWS = ["workcenter", "settings", "history"];

/**
 * Process Capacitor host — WorkCenter + AI settings only.
 * INVARIANT: markdown/print stay in CWSP-document; this package never emits that SKU.
 */
export const createCapacitorSkuConfig = async () => {
    const platformRoot = resolve(__dirname, "./src/frontend/web/capacitor");
    const outDir = resolve(__dirname, "./build/capacitor/web");
    const enabledViews = PROCESS_CAPACITOR_VIEWS;

    const isPwaPlugin = (plugin) => {
        const name = plugin?.name;
        return typeof name === "string" && (name === "vite-plugin-pwa" || name.startsWith("vite-plugin-pwa:"));
    };
    const isStaticCopyPlugin = (plugin) => {
        const name = plugin?.name;
        return typeof name === "string" && name.startsWith("vite-plugin-static-copy:");
    };
    const isMcpPlugin = (plugin) => {
        const name = plugin?.name;
        return typeof name === "string" && name.toLowerCase().includes("mcp");
    };
    const basePlugins =
        (baseConfig?.plugins || [])
            .flat?.(Infinity)
            ?.filter?.(
                (plugin) =>
                    plugin?.name !== "vite:singlefile" &&
                    !isPwaPlugin(plugin) &&
                    !isStaticCopyPlugin(plugin) &&
                    !isMcpPlugin(plugin)
            ) ?? [];
    const baseRollup = baseConfig?.build?.rollupOptions ?? {};
    const baseOutput = Array.isArray(baseRollup.output) ? baseRollup.output[0] : (baseRollup.output ?? {});

    return {
        ...baseConfig,
        root: platformRoot,
        base: "./",
        cacheDir: resolve(__dirname, "node_modules/.vite-capacitor-process"),
        define: {
            ...(baseConfig?.define ?? {}),
            ...toViewDefineEntries(enabledViews),
            __RS_DEFAULT_VIEW__: JSON.stringify("workcenter"),
            "import.meta.env.VITE_ENABLED_VIEWS": JSON.stringify(enabledViews.join(","))
        },
        plugins: basePlugins,
        build: {
            ...(baseConfig?.build ?? {}),
            lib: false,
            outDir,
            emptyOutDir: true,
            minify: false,
            cssMinify: false,
            modulePreload: true,
            rollupOptions: {
                ...baseRollup,
                input: resolve(platformRoot, "index.html"),
                output: {
                    ...baseOutput,
                    dir: outDir,
                    entryFileNames: "assets/[name]-[hash].js",
                    chunkFileNames: distChunkFileNames,
                    assetFileNames: distAssetFileNames(NAME)
                }
            },
            rolldownOptions: {
                ...(baseConfig?.build?.rolldownOptions ?? {}),
                input: resolve(platformRoot, "index.html"),
                output: {
                    ...baseOutput,
                    dir: outDir,
                    entryFileNames: "assets/[name]-[hash].js",
                    chunkFileNames: distChunkFileNames,
                    assetFileNames: distAssetFileNames(NAME)
                }
            }
        }
    };
};

export default async ({ mode } = {}) => {
    if (mode === "crx") {
        throw new Error("[CWSP-process] CRX builds live in apps/CWSP-crx.");
    }
    if (mode === "markdown" || mode === "cw-markdown" || mode === "capacitor-document") {
        throw new Error("[CWSP-process] Markdown/document APKs live in apps/CWSP-document.");
    }
    if (mode === "capacitor-explorer") {
        throw new Error("[CWSP-process] Explorer APK lives in apps/CWSP-explorer.");
    }
    if (mode === "cw-process" || mode === "process" || mode === "workcenter") {
        return createProcessSpaConfig(mode);
    }
    if (mode === "capacitor" || mode === "capacitor-process") {
        return createCapacitorSkuConfig();
    }

    const config = {
        ...baseConfig,
        define: {
            ...(baseConfig?.define ?? {}),
            ...createViewDefine(mode),
        },
        build: {
            ...baseConfig.build,
            // Keep PWA/regular build symbols stable (Fastify runtime print route issue).
            minify: false,
            cssMinify: false,
            terserOptions: undefined,
            // NOTE: Fastify imports `/apps/cw/index.js` directly; keep library-style JS output
            // but override the emitted filename from `crossword.js` to `index.js`.
            lib: {
                ...(baseConfig.build?.lib ?? {}),
                entry: resolve(__dirname, "./src/index.ts"),
                fileName: "index",
            },
            rollupOptions: {
                ...baseConfig.build?.rollupOptions,
                input: {
                    index: resolve(__dirname, "./src/index.ts"),
                },
                output: baseConfig.build?.rollupOptions?.output,
            },
        },
    };

    return config;
};
