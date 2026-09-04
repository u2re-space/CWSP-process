import { m as resolved } from "./core2.js";
//#region ../../modules/projects/core.ts/src/utils/PromiseUtils.ts
var isThenable = (value) => value instanceof Promise || typeof value?.then == "function";
function withTimeout(promise, timeoutMs, timeoutMessage = "Operation timed out") {
	const pending = isThenable(promise) ? promise : resolved(promise);
	const timeoutPromise = new Promise((_, reject) => {
		setTimeout(() => reject(new Error(timeoutMessage)), timeoutMs);
	});
	return Promise.race([pending, timeoutPromise]);
}
//#endregion
export { withTimeout as t };
