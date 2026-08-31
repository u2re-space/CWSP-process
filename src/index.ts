/*
 * Filename: index.ts
 * FullPath: apps/CWSP-process/src/index.ts
 * FIND:sku
 * Change date: 17.58.00_31.08.2026
 * Reason: Process PWA entry — stamp SKU then boot minimal-shell + workcenter-view.
 */

import { initPWA, checkForUpdates, forceRefreshAssets } from "core/pwa/pwa-handling";
import { initializeLayers } from "shared/routing/layer-manager";
import { loadAsAdopted } from "@fest-lib/dom";
import {
    ensureAppCss,
    initReceivers,
    handleShareTarget,
    setupLaunchQueueConsumer,
    checkPendingShareData
} from "core/pwa/sw-handling";
import {
    bootProcessSku,
    stampProcessSku,
    showProcessBootFailure
} from "./frontend/web/sku-boot";

// WHY: stamp before BootLoader/views so `isViewLocalToSurface` sees process SKU.
try {
    stampProcessSku();
} catch {
    /* non-DOM */
}

const withTimeout = async <T>(
    task: Promise<T>,
    label: string,
    timeoutMs: number,
    fallback: T
): Promise<T> => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    try {
        return await Promise.race<T>([
            task,
            new Promise<T>((resolve) => {
                timer = setTimeout(() => {
                    console.info(`[Index] ${label} timed out after ${timeoutMs}ms`);
                    resolve(fallback);
                }, timeoutMs);
            })
        ]);
    } finally {
        if (timer) clearTimeout(timer);
    }
};

export default async function index(mountElement: HTMLElement) {
    initializeLayers();

    try {
        const viewMod = await import("boot/ts/views.scss?inline");
        await loadAsAdopted(viewMod.default);
    } catch (error) {
        console.warn("[Index] view styles skipped:", error);
    }

    try {
        if (!document.documentElement.dataset.cwspNativeShell) {
            await ensureAppCss();
        }
        initReceivers();
        handleShareTarget();
        const PRE_SHELL_BUDGET_MS = 1200;
        const pwaPromise = initPWA();
        try {
            await Promise.race([
                Promise.all([
                    withTimeout(setupLaunchQueueConsumer(), "setupLaunchQueueConsumer", PRE_SHELL_BUDGET_MS, undefined),
                    withTimeout(checkPendingShareData(), "checkPendingShareData", PRE_SHELL_BUDGET_MS, null)
                ]),
                new Promise<void>((r) => globalThis.setTimeout(r, PRE_SHELL_BUDGET_MS))
            ]);
        } catch (error) {
            console.warn("[Index] Pre-boot share/launch queue failed:", error);
        }
        void withTimeout(pwaPromise, "initPWA", 5000, null);

        await bootProcessSku(mountElement);
    } catch (error) {
        showProcessBootFailure(error, mountElement);
    }
}

export { checkForUpdates, forceRefreshAssets, index };
