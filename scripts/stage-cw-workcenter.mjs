#!/usr/bin/env node
/*
 * Filename: stage-cw-workcenter.mjs
 * FullPath: apps/CWSP-process/scripts/stage-cw-workcenter.mjs
 * FIND:process
 * Change date: 18.05.00_31.08.2026
 * Reason: Stage process PWA to runtime/fastify/apps/workcenter (process.u2re.space + ai.u2re.space).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { rewriteVitePreloadBinding } from "../shared/vite-chunk-placement.mjs";
import { hoistSharedSlices } from "../../../runtime/fastify/apps/hoist-shared-slices.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const repoRoot = path.dirname(path.dirname(root));
const src = path.join(root, "build/cw-process");
const dest = path.join(repoRoot, "runtime/fastify/apps/workcenter");

if (!fs.existsSync(path.join(src, "index.html"))) {
    console.error(`[stage-cw-workcenter] missing ${src}/index.html — run build:cw-workcenter first`);
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

{
    const n = rewriteVitePreloadBinding(dest);
    if (n) console.log(`[stage-cw-workcenter] rewrote ${n} vite-preload binding(s)`);
}

{
    const htmlPath = path.join(dest, "index.html");
    if (fs.existsSync(htmlPath)) {
        let html = fs.readFileSync(htmlPath, "utf8");
        html = html.replace(
            /<link[^>]*rel=["']modulepreload["'][^>]*href=["']data:video\/mp2t[^"']*["'][^>]*>\s*/gi,
            ""
        );
        html = html.replace(
            /<link[^>]*href=["']data:video\/mp2t[^"']*["'][^>]*rel=["']modulepreload["'][^>]*>\s*/gi,
            ""
        );
        html = html.replace(
            /<link[^>]*rel=["']modulepreload["'][^>]*href=["'][^"']*\.ts["'][^>]*>\s*/gi,
            ""
        );
        if (html.includes("data:video/mp2t") || html.includes("/src/index.ts")) {
            console.log("[stage-cw-workcenter] stripped .ts / video/mp2t modulepreload from index.html");
        }
        if (!html.includes("pwa/icons/icon.svg")) {
            html = html.replace(
                "</head>",
                `    <link rel="icon" type="image/svg+xml" href="./pwa/icons/icon.svg" />
    <link rel="icon" type="image/png" sizes="512x512" href="./pwa/icons/icon.png" />
    <link rel="apple-touch-icon" href="./pwa/icons/apple-touch-icon.png" />
    <link rel="manifest" href="./pwa/manifest.json" />
  </head>`
            );
            fs.writeFileSync(htmlPath, html);
            console.log("[stage-cw-workcenter] injected SKU favicons into index.html");
        }
    }
}

// INVARIANT: SKU src/pwa/icons wins over Vite-nested leftovers (old shared cross).
{
    const srcIcons = path.join(root, "src", "pwa", "icons");
    const destIcons = path.join(dest, "pwa", "icons");
    if (fs.existsSync(srcIcons)) {
        fs.mkdirSync(destIcons, { recursive: true });
        fs.cpSync(srcIcons, destIcons, { recursive: true });
    }
    const srcManifest = path.join(root, "src", "pwa", "manifest.json");
    const destManifest = path.join(dest, "pwa", "manifest.json");
    if (fs.existsSync(srcManifest)) {
        fs.mkdirSync(path.dirname(destManifest), { recursive: true });
        fs.cpSync(srcManifest, destManifest);
    }
    const copyFav = (fromName, toName) => {
        const from = path.join(destIcons, fromName);
        if (!fs.existsSync(from)) return;
        fs.cpSync(from, path.join(dest, toName));
    };
    copyFav("icon.svg", "favicon.svg");
    copyFav("icon.png", "favicon.png");
    copyFav("favicon.ico", "favicon.ico");
    const destAlias = path.join(dest, "icons");
    if (fs.existsSync(destIcons)) {
        fs.mkdirSync(destAlias, { recursive: true });
        fs.cpSync(destIcons, destAlias, { recursive: true });
    }
}

fs.writeFileSync(
    path.join(dest, ".sync-meta.json"),
    JSON.stringify(
        {
            syncedAt: new Date().toISOString(),
            source: "apps/CWSP-process/build/cw-process",
            hosts: ["process.u2re.space", "workcenter.u2re.space", "ai.u2re.space"],
            debugPath: "/workcenter",
            pathAliases: ["/process", "/ai"],
            api: "/api/process"
        },
        null,
        2
    ) + "\n"
);

hoistSharedSlices(dest, "stage-cw-workcenter");
console.log(`[stage-cw-workcenter] ${src} → ${dest}`);
