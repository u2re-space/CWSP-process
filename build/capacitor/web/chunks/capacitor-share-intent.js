const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../shells/boot-index.js","./rolldown-runtime.js","../com/app.js","../fest/core.js","../com/service.js","../fest/veela.js"])))=>i.map(i=>d[i]);
import { Nt as isCapacitorCwsNativeShell, cn as splitMultiValueList } from "../shells/boot-index.js";
import { vn as __vitePreload } from "../com/app.js";
import { n as isCapacitorNative } from "./capacitor-permissions.js";
//#region src/frontend/boot/capacitor-share-intent.ts
/**
* Capacitor share / process-text bridge (Android → WebView → CWSP clipboard fan-out).
*
* Primary path: {@code ShareActivity} fans out via native /ws without opening MainActivity.
* This module is a secondary path when WebView is already alive and receives
* {@code cws:shareIntent} / asset handoff events.
*/
var parseSharePayload = (detail) => {
	if (detail == null) return {
		text: "",
		asset: null
	};
	if (typeof detail === "string") {
		const trimmed = detail.trim();
		if (!trimmed) return {
			text: "",
			asset: null
		};
		try {
			const parsed = JSON.parse(trimmed);
			return {
				text: String(parsed?.text || "").trim() || (parsed?.asset ? "" : trimmed),
				asset: parsed?.asset && typeof parsed.asset === "object" ? parsed.asset : null
			};
		} catch {
			return {
				text: trimmed,
				asset: null
			};
		}
	}
	return {
		text: String(detail.text || "").trim(),
		asset: detail.asset && typeof detail.asset === "object" ? detail.asset : null
	};
};
var readDestinationNodes = (settings) => {
	const cwsp = settings.cwsp && typeof settings.cwsp === "object" ? settings.cwsp : {};
	const raw = String(cwsp.shareIntentDestinationIds || cwsp.destinationNodeIds || "*").trim() || "*";
	if (raw === "*" || raw.toLowerCase() === "any") return ["*"];
	return splitMultiValueList(raw);
};
var installed = false;
var installCapacitorShareIntentBridge = () => {
	if (!isCapacitorNative() || installed) return;
	if (isCapacitorCwsNativeShell()) return;
	installed = true;
	const handler = (ev) => {
		(async () => {
			const { text, asset } = parseSharePayload(ev.detail);
			if (!text && !asset) return;
			const [{ loadSettings }, ws] = await Promise.all([__vitePreload(() => import("../shells/boot-index.js").then((n) => n.V), __vite__mapDeps([0,1,2,3,4,5]), import.meta.url), __vitePreload(() => import("../shells/boot-index.js").then((n) => n.c), __vite__mapDeps([0,1,2,3,4,5]), import.meta.url)]);
			const nodes = readDestinationNodes(loadSettings());
			ws.connectWS();
			if (asset) ws.sendCoordinatorAct("clipboard:update", {
				asset,
				source: "android-share"
			}, nodes);
			if (text) ws.sendCoordinatorAct("clipboard:update", {
				text,
				source: "android-share"
			}, nodes);
		})().catch(() => {});
	};
	window.addEventListener("cws:shareIntent", handler);
};
//#endregion
export { installCapacitorShareIntentBridge };
