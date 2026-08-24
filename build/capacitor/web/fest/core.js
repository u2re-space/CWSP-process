//#region ../../modules/projects/core.ts/src/utils/PromiseUtils.ts
/**
* Create a timeout promise that rejects after specified time
*/
function withTimeout(promise, timeoutMs, timeoutMessage = "Operation timed out") {
	const timeoutPromise = new Promise((_, reject) => {
		setTimeout(() => reject(new Error(timeoutMessage)), timeoutMs);
	});
	return Promise.race([promise, timeoutPromise]);
}
//#endregion
export { withTimeout as t };
