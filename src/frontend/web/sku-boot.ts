/*
 * Filename: sku-boot.ts
 * FullPath: apps/CWSP-process/src/frontend/web/sku-boot.ts
 * FIND:sku
 * Change date: 17.58.00_31.08.2026
 * Reason: Process SKU always boots minimal-shell; default view is workcenter-view.
 */

import { applyCwspSku } from "com/config/ecosystem-skus";

export type ProcessHostKind = "capacitor" | "web" | "crx";
export type ProcessBootView = "workcenter" | "settings" | "history";

/** INVARIANT: process chrome is workcenter + settings + history. `minimal` is the shell, not a view. */
const ENABLED_VIEWS = "workcenter,settings,history";

const PROCESS_VIEW_ALIASES: Record<string, ProcessBootView> = {
    workcenter: "workcenter",
    process: "workcenter",
    settings: "settings",
    history: "history"
};

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

const readProcessViewAlias = (raw: string): ProcessBootView | null => {
    const key = String(raw || "").trim().toLowerCase();
    return PROCESS_VIEW_ALIASES[key] || null;
};

/** Query `?view=`, then path segment, then explicit/default `workcenter`. */
export const resolveProcessBootView = (explicit?: string): ProcessBootView => {
    try {
        const q = new URLSearchParams(String(globalThis.location?.search || "")).get("view");
        const fromQuery = readProcessViewAlias(q || "");
        if (fromQuery) return fromQuery;
    } catch {
        /* ignore */
    }
    try {
        const seg = String(globalThis.location?.pathname || "/")
            .split("/")
            .filter(Boolean)[0] || "";
        const fromPath = readProcessViewAlias(seg);
        if (fromPath) return fromPath;
    } catch {
        /* ignore */
    }
    return readProcessViewAlias(explicit || "") || "workcenter";
};

export const stampProcessSku = (kind?: ProcessHostKind): void => {
    const host = detectHostKind(kind);
    applyCwspSku("process");
    const root = document.documentElement;
    root.dataset.cwspSku = "process";
    root.dataset.cwspApp = "process";
    root.dataset.cwspSurface =
        host === "crx" ? "cw-process-crx" : host === "capacitor" ? "cw-process" : "cw-workcenter";
    root.dataset.cwspEnabledViews = ENABLED_VIEWS;
    root.dataset.cwspDefaultView = "workcenter";
    root.dataset.cwspDefaultShell = "minimal";
    if (host === "capacitor") root.dataset.cwspNativeShell = "capacitor";
    else if (host === "crx") root.dataset.cwspNativeShell = "crx";
    try {
        const hostname = String(location.hostname || "").toLowerCase();
        const dedicated =
            hostname === "process.u2re.space" ||
            hostname === "workcenter.u2re.space" ||
            hostname === "ai.u2re.space";
        if (!dedicated) {
            const m = String(location.pathname || "").match(/^(\/(?:process|workcenter|ai))(?:\/|$)/i);
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
    view: ProcessBootView | string = "workcenter"
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

    const resolved = resolveProcessBootView(view);
    const { bootMinimal } = await import("boot/BootLoader");
    // WHY: do not write `rs-boot-shell` — shared-origin hub (`/process`) must keep environment.
    await bootMinimal(container, resolved, { rememberChoice: false });
};
