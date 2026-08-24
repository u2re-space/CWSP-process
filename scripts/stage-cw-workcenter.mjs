#!/usr/bin/env node
/*
 * Filename: stage-cw-workcenter.mjs
 * FullPath: apps/CWSP-process/scripts/stage-cw-workcenter.mjs
 * FIND:process
 * Change date and time: 14.32.00_24.08.2026
 * Reason for changes: Stage Work Center UI to runtime/fastify/apps/workcenter.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const repoRoot = path.dirname(path.dirname(root));
const src = path.join(root, "build/capacitor/web");
const dest = path.join(repoRoot, "runtime/fastify/apps/workcenter");

if (!fs.existsSync(path.join(src, "index.html"))) {
    console.error(`[stage-cw-workcenter] missing ${src}/index.html — run build:capacitor:web first`);
    process.exit(1);
}

fs.mkdirSync(path.dirname(dest), { recursive: true });
if (fs.existsSync(dest)) {
    for (const name of fs.readdirSync(dest)) {
        if (name === "README.md") continue;
        fs.rmSync(path.join(dest, name), { recursive: true, force: true });
    }
} else {
    fs.mkdirSync(dest, { recursive: true });
}

for (const name of fs.readdirSync(src)) {
    fs.cpSync(path.join(src, name), path.join(dest, name), { recursive: true });
}

fs.writeFileSync(
    path.join(dest, ".sync-meta.json"),
    JSON.stringify(
        {
            syncedAt: new Date().toISOString(),
            source: "apps/CWSP-process/build/capacitor/web",
            host: "workcenter.u2re.space",
            debugPath: "/workcenter",
            api: "process.u2re.space"
        },
        null,
        2
    ) + "\n"
);

console.log(`[stage-cw-workcenter] ${src} → ${dest}`);
