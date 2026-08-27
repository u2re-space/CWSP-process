/*
 * Filename: sku-boot.ts
 * FullPath: apps/CWSP-process/src/frontend/web/sku-boot.ts
 * FIND:sku
 * Change date: 14.20.00_27.08.2026
 * Reason: One process SKU stamp for PWA, Capacitor, and CRX (WorkCenter + settings + history).
 */

import { applyCwspSku } from "com/config/ecosystem-skus";

export type ProcessHostKind = "capacitor" | "web" | "crx";

const ENABLED_VIEWS = "minimal,workcenter,settings,history";

const detectHostKind = (explicit?: ProcessHostKind): ProcessHostKind => {
    if (explicit) return explicit;
    try {
        const proto = String(globalThis.location?.protocol || "").toLowerCase();
        if (proto === "chrome-extension:" || proto === "moz-extension:") return "crx";
        const g = globalThis as { Capacitor?: { isNativePlatform?: () => boolean } };
        if (typeof g.Capacitor?.isNativePlatform === "function" && g.Capacitor.isNativePlatform()) {
            return "capacitor";
        }
    } catch {
        /* fall through */
    }
    return "web";
};

export const stampProcessSku = (kind: ProcessHostKind): void => {
    applyCwspSku("process");
    const root = document.documentElement;
    root.dataset.cwspSku = "process";
    root.dataset.cwspApp = "process";
    root.dataset.cwspSurface =
        kind === "crx" ? "cw-process-crx" : kind === "capacitor" ? "cw-process" : "cw-workcenter";
    root.dataset.cwspEnabledViews = ENABLED_VIEWS;
    root.dataset.cwspDefaultView = "workcenter";
    if (kind === "capacitor") root.dataset.cwspNativeShell = "capacitor";
    else if (kind === "crx") root.dataset.cwspNativeShell = "crx";
    try {
        const host = String(location.hostname || "").toLowerCase();
        const dedicated = host === "process.u2re.space" || host === "workcenter.u2re.space";
        if (!dedicated) {
            const m = String(location.pathname || "").match(/^(\/(?:process|workcenter))(?:\/|$)/i);
            if (m) root.dataset.cwspRouterBase = m[1].toLowerCase();
        }
    } catch {
        /* ignore */
    }
};

export const showProcessBootFailure = (error: unknown, mount: HTMLElement = document.body): void => {
    const message = error instanceof Error ? error.stack || error.message : String(error);
    console.error("[CWSP-process] boot failed", error);
    mount.replaceChildren();
    mount.style.cssText =
        "margin:0;padding:16px;font:14px/1.4 ui-monospace,monospace;background:#111;color:#f66;white-space:pre-wrap;";
    mount.textContent = `[CWSP-process] boot failed\n\n${message}`;
};

/**
 * WHY: Capacitor `cws:shareIntent` is ingested by `installCapacitorShareIntentBridge`
 * (SKU pipeline: AI or Work Center attach). This stamp-only hook stays for callers.
 */
export const installProcessShareIngress = (): void => {
    /* share pipeline lives in capacitor-share-intent + initIngressPWA */
};

export const bootProcessSku = async (
    container: HTMLElement,
    kind?: ProcessHostKind,
    view: "workcenter" | "settings" | "history" = "workcenter"
): Promise<void> => {
    const host = detectHostKind(kind);
    stampProcessSku(host);
    installProcessShareIngress();

    if (host === "capacitor") {
        try {
            const { SystemBarType, SystemBars } = await import("@capacitor/core");
            await SystemBars.hide({ bar: SystemBarType.NavigationBar });
        } catch {
            /* web preview */
        }
    }

    const { bootMinimal } = await import("boot/BootLoader");
    await bootMinimal(container, view);
};
