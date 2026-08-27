/*
 * Filename: sku-boot.ts
 * FullPath: apps/CWSP-process/src/frontend/web/sku-boot.ts
 * FIND:sku
 * Change date: 14.20.00_27.08.2026
 * Reason: One process SKU stamp for PWA, Capacitor, and CRX (WorkCenter + settings + history).
 */

import { applyCwspSku, stashSkuHandoff } from "com/config/ecosystem-skus";

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
 * WHY: Capacitor share / PROCESS_TEXT should land in WorkCenter on this SKU,
 * not only fan out to the clipboard bus.
 */
export const installProcessShareIngress = (): void => {
    const g = globalThis as { __CWSP_PROCESS_SHARE__?: boolean };
    if (g.__CWSP_PROCESS_SHARE__) return;
    g.__CWSP_PROCESS_SHARE__ = true;
    window.addEventListener("cws:shareIntent", (ev: Event) => {
        const detail = (ev as CustomEvent<{ text?: string; asset?: { name?: string; data?: string } } | string>)
            .detail;
        let text = "";
        let filename = "";
        if (typeof detail === "string") text = detail;
        else if (detail && typeof detail === "object") {
            text = String(detail.text || detail.asset?.data || "");
            filename = String(detail.asset?.name || "");
        }
        text = text.trim();
        if (!text) return;
        stashSkuHandoff({ dest: "workcenter", content: text, filename: filename || undefined });
        window.dispatchEvent(
            new CustomEvent("cwsp:process-open", { detail: { content: text, filename } })
        );
    });
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
