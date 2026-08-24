/*
 * Filename: entry.ts
 * FullPath: apps/CWSP-process/src/frontend/web/capacitor/entry.ts
 * FIND:sku
 * Change date and time: 14.25.00_24.08.2026
 * Reason for changes: Process SKU — WorkCenter + AI/MCP settings; CRX keeps this in-process.
 */

import { SystemBarType, SystemBars } from "@capacitor/core";
import { bootMinimal } from "boot/BootLoader";
import { applyCwspSku } from "com/config/ecosystem-skus";

const enabledViews = ["minimal", "workcenter", "settings"] as const;

applyCwspSku("process");
document.documentElement.dataset.cwspSurface = "cw-process";
document.documentElement.dataset.cwspNativeShell = "capacitor";
document.documentElement.dataset.cwspEnabledViews = enabledViews.join(",");
document.documentElement.dataset.cwspDefaultView = "workcenter";

void SystemBars.hide({ bar: SystemBarType.NavigationBar }).catch(() => {
    /* native-only; web preview ignores */
});

function showBootFailure(error: unknown): void {
    const message = error instanceof Error ? error.stack || error.message : String(error);
    console.error("[CWSP-process] boot failed", error);
    const root = document.body;
    root.replaceChildren();
    root.style.cssText =
        "margin:0;padding:16px;font:14px/1.4 ui-monospace,monospace;background:#111;color:#f66;white-space:pre-wrap;";
    root.textContent = `[CWSP-process] boot failed\n\n${message}`;
}

void bootMinimal(document.body, "workcenter").catch(showBootFailure);
