//#region ../../modules/projects/subsystem/runtime/log-sanitizer.ts
function summarizeForLog(value) {
	if (typeof value === "string") return value.slice(0, 240);
	try {
		return JSON.stringify(value)?.slice(0, 240) ?? "";
	} catch {
		return String(value);
	}
}
//#endregion
export { summarizeForLog as t };
