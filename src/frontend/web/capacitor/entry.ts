/*
 * Filename: entry.ts
 * FullPath: apps/CWSP-process/src/frontend/web/capacitor/entry.ts
 * FIND:sku
 * Change date: 14.20.00_27.08.2026
 * Reason: Process Capacitor / PWA host — shared sku-boot (WorkCenter + settings + history).
 */

import { bootProcessSku, showProcessBootFailure } from "../sku-boot";

void bootProcessSku(document.body, "capacitor", "workcenter").catch((error) => {
    showProcessBootFailure(error, document.body);
});
