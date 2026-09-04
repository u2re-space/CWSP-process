//#region ../../modules/projects/core.ts/src/utils/Primitive.ts
var $fxy = Symbol.for("@fix");
var isObservable = (observable) => {
	return Array.isArray(observable) || observable instanceof Set || observable instanceof Map;
};
/**
* Check if a value is a primitive type (null, string, number, boolean, bigint, or undefined).
* @param obj - The value to check
* @returns True if the value is a primitive type, false otherwise
*/
var isPrimitive = (obj) => {
	return typeof obj == "string" || typeof obj == "number" || typeof obj == "boolean" || typeof obj == "bigint" || typeof obj == "undefined" || obj == null;
};
var tryParseByHint = (value, hint) => {
	if (!isPrimitive(value)) return null;
	if (hint == "number") return Number(value) || 0;
	if (hint == "string") return String(value) || "";
	if (hint == "boolean") return !!value;
	return value;
};
var hasProperty = (v, prop = "value") => {
	return (typeof v == "object" || typeof v == "function") && v != null && (prop in v || v?.[prop] != null);
};
var hasValue = (v) => {
	return hasProperty(v, "value");
};
var $getValue = ($objOrPlain) => {
	if (isPrimitive($objOrPlain)) return $objOrPlain;
	return hasValue($objOrPlain) ? $objOrPlain?.value : $objOrPlain;
};
var unwrap = (obj, fallback) => {
	return obj?.[$fxy] ?? (obj != null ? obj : fallback) ?? fallback;
};
var deref = (obj) => {
	if (obj != null && (typeof obj == "object" || typeof obj == "function") && (obj instanceof WeakRef || typeof obj?.deref == "function")) return deref(obj?.deref?.());
	return obj;
};
var fixFx = (obj) => {
	if (typeof obj == "function" || obj == null) return obj;
	const fx = function() {};
	fx[$fxy] = obj;
	return fx;
};
var $set = (rv, key, val) => {
	rv = deref(rv);
	if (rv != null && (typeof rv == "object" || typeof rv == "function")) return rv[key] = $getValue(val = deref(val));
	return rv;
};
var getRandomValues = (array) => {
	return crypto?.getRandomValues ? crypto?.getRandomValues?.(array) : (() => {
		const values = new Uint8Array(array.length);
		for (let i = 0; i < array.length; i++) values[i] = Math.floor(Math.random() * 256);
		return values;
	})();
};
var clamp = (min, val, max) => Math.max(min, Math.min(val, max));
var withCtx = (target, got) => {
	if (typeof got == "function") return got?.bind?.(target) ?? got;
	return got;
};
var UUIDv4 = () => crypto?.randomUUID ? crypto?.randomUUID?.() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) => (+c ^ getRandomValues?.(/* @__PURE__ */ new Uint8Array(1))?.[0] & 15 >> +c / 4).toString(16));
var camelToKebab = (str) => {
	if (!str) return str;
	return str?.replace?.(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};
var kebabToCamel = (str) => {
	if (!str) return str;
	return str?.replace?.(/-([a-z])/g, (_, char) => char.toUpperCase());
};
var isValueUnit = (val) => typeof CSSStyleValue !== "undefined" && val instanceof CSSStyleValue;
var isVal = (v) => v != null && (typeof v == "boolean" ? v !== false : true) && typeof v != "object" && typeof v != "function";
var normalizePrimitive = (val) => {
	return typeof val == "boolean" ? val ? "" : null : typeof val == "number" ? String(val) : val;
};
var $triggerLock = Symbol.for("@trigger-lock");
var $avoidTrigger = (ref, cb, $prop = "value") => {
	if (hasProperty(ref, $prop)) ref[$triggerLock] = true;
	let result;
	try {
		result = cb?.();
	} finally {
		if (hasProperty(ref, $prop)) delete ref[$triggerLock];
	}
	return result;
};
var tryStringAsNumber = (val) => {
	if (typeof val != "string") return null;
	const matches = [...val?.matchAll?.(/^\d+(\.\d+)?$/g)];
	if (matches?.length != 1) return null;
	const triedToParse = parseFloat(matches[0][0]);
	if (!Number.isNaN(triedToParse) && Number.isFinite(triedToParse)) return triedToParse;
	return null;
};
var INTEGER_REGEXP = /^\d+$/g;
var tryStringAsInteger = (val) => {
	if (typeof val != "string") return null;
	val = val?.trim?.();
	if (val == "" || val == null) return null;
	const matches = [...val?.matchAll?.(INTEGER_REGEXP)];
	if (matches?.length != 1) return null;
	const triedToParse = parseInt(matches[0][0]);
	if (!Number.isNaN(triedToParse) && Number.isInteger(triedToParse)) return triedToParse;
	return null;
};
var canBeInteger = (value) => {
	if (typeof value == "string") return tryStringAsInteger(value) != null;
	else return typeof value == "number" && Number.isInteger(value) && value >= 0;
};
var handleListeners = (root, fn, handlers) => {
	root = root instanceof WeakRef ? root.deref() : root;
	const usubs = [...Object.entries(handlers)].map?.(([name, cb]) => root?.[fn]?.call?.(root, name, cb));
	return () => {
		usubs?.forEach?.((unsub) => unsub?.());
	};
};
var isRef = (ref) => {
	return ref instanceof WeakRef || typeof ref?.deref == "function";
};
var unref = (ref) => {
	return isRef(ref) ? deref(ref) : ref;
};
var toRef = (ref) => {
	return ref != null ? isRef(ref) ? ref : typeof ref == "function" || typeof ref == "object" ? new WeakRef(ref) : ref : ref;
};
var isValueRef = (exists) => {
	return (typeof exists == "object" || typeof exists == "function") && (exists?.value != null || exists != null && "value" in exists);
};
var isObject = (exists) => {
	return exists != null && (typeof exists == "object" || typeof exists == "function");
};
/**
* Get the value from a value reference or return the value itself.
* @param val - The value or value reference to extract from
* @returns The extracted value
*/
var getValue = (val) => {
	return hasValue(val) ? val?.value : val;
};
var potentiallyAsync = (promise, cb) => {
	if (promise instanceof Promise || typeof promise?.then == "function") return promise?.then?.(cb);
	else return cb?.(promise);
	return promise;
};
var potentiallyAsyncMap = (promise, cb) => {
	if (promise instanceof Promise || typeof promise?.then == "function") return promise?.then?.(cb);
	else return cb?.(promise);
	return promise;
};
var makeTriggerLess = function(self) {
	return (cb) => {
		self[$triggerLock] = true;
		let result;
		try {
			result = cb?.();
		} finally {
			self[$triggerLock] = false;
		}
		return result;
	};
};
var unwrapArray = (arr) => {
	if (Array.isArray(arr)) return arr?.flatMap?.((el) => {
		if (Array.isArray(el)) return unwrapArray(el);
		return el;
	});
	else return arr;
};
var isNotComplexArray = (arr) => {
	return unwrapArray(arr)?.every?.(isCanJustReturn);
};
var isCanJustReturn = (obj) => {
	return isPrimitive(obj) || typeof SharedArrayBuffer == "function" && obj instanceof SharedArrayBuffer || isTypedArray(obj) || Array.isArray(obj) && isNotComplexArray(obj);
};
var isTypedArray = (value) => {
	return ArrayBuffer.isView(value) && !(value instanceof DataView);
};
var isPromise = (target) => {
	return target instanceof Promise || typeof target?.then == "function";
};
var isCanTransfer = (obj) => {
	return isPrimitive(obj) || typeof ArrayBuffer == "function" && obj instanceof ArrayBuffer || typeof MessagePort == "function" && obj instanceof MessagePort || typeof ReadableStream == "function" && obj instanceof ReadableStream || typeof WritableStream == "function" && obj instanceof WritableStream || typeof TransformStream == "function" && obj instanceof TransformStream || typeof ImageBitmap == "function" && obj instanceof ImageBitmap || typeof VideoFrame == "function" && obj instanceof VideoFrame || typeof OffscreenCanvas == "function" && obj instanceof OffscreenCanvas || typeof RTCDataChannel == "function" && obj instanceof RTCDataChannel || typeof AudioData == "function" && obj instanceof AudioData || typeof WebTransportReceiveStream == "function" && obj instanceof WebTransportReceiveStream || typeof WebTransportSendStream == "function" && obj instanceof WebTransportSendStream || typeof WebTransportReceiveStream == "function" && obj instanceof WebTransportReceiveStream;
};
var defaultByType = (a) => {
	switch (typeof a) {
		case "number": return 0;
		case "string": return "";
		case "boolean": return false;
		case "object": return null;
		case "function": return null;
		case "symbol": return null;
		case "bigint": return 0n;
	}
};
//#endregion
//#region ../../modules/projects/core.ts/src/utils/Resolved.ts
var $promise = Symbol.for("@promise");
var SKIP_KEYS = /* @__PURE__ */ new Set([
	Symbol.for("@extract"),
	Symbol.for("@origin"),
	Symbol.for("@registry"),
	Symbol.for("@value"),
	Symbol.for("@promise"),
	Symbol.for("@behavior"),
	Symbol.for("@trigger"),
	Symbol.for("@subscribe"),
	Symbol.for("@realProp"),
	Symbol.for("@trigger-lock"),
	Symbol.for("@trigger-less"),
	Symbol.for("@trigger-control"),
	Symbol.for("@isNotEqual"),
	Symbol.for("@fix"),
	Symbol.for("@target"),
	Symbol.for("@resolved")
]);
var isThenable$1 = (value) => value instanceof Promise || typeof value?.then == "function";
var settleOne = (value) => Promise.resolve(value).then((v) => ({
	status: "fulfilled",
	value: v
}), (reason) => ({
	status: "rejected",
	reason
}));
var ownEnumerableKeys = (obj) => Reflect.ownKeys(obj).filter((key) => {
	if (SKIP_KEYS.has(key)) return false;
	const desc = Object.getOwnPropertyDescriptor(obj, key);
	return desc !== void 0 && desc.enumerable;
});
/** True when a value (or a nested enumerable field) still needs a Promise combinator. */
var hasPendingPromises = (value, seen) => {
	if (value == null || isPrimitive(value)) return false;
	if (isThenable$1(value) || isThenable$1(value?.[$promise])) return true;
	if (typeof value != "object" && typeof value != "function") return false;
	const seenSet = seen ?? /* @__PURE__ */ new WeakSet();
	if (seenSet.has(value)) return false;
	seenSet.add(value);
	if (Array.isArray(value)) return value.some((item) => hasPendingPromises(item, seenSet));
	if (value instanceof Map) return [...value.values()].some((item) => hasPendingPromises(item, seenSet));
	if (value instanceof Set) return [...value.values()].some((item) => hasPendingPromises(item, seenSet));
	return ownEnumerableKeys(value).some((key) => hasPendingPromises(value[key], seenSet));
};
function resolvedDeep(value, mode, seen) {
	if (value == null || isPrimitive(value) || typeof value == "symbol") return value;
	if (isThenable$1(value)) return value;
	const slot = value?.[$promise];
	if (isThenable$1(slot)) return slot;
	if (typeof value != "object" && typeof value != "function") return value;
	if (seen.has(value)) return value;
	seen.add(value);
	if (Array.isArray(value)) {
		const items = value.map((item) => resolvedDeep(item, mode, seen));
		return mode == "settled" ? Promise.allSettled(items) : Promise.all(items);
	}
	if (value instanceof Set) {
		const items = [...value.values()].map((item) => resolvedDeep(item, mode, seen));
		return mode == "settled" ? Promise.allSettled(items) : Promise.all(items);
	}
	const record = {};
	if (value instanceof Map) for (const [key, item] of value.entries()) record[key] = resolvedDeep(item, mode, seen);
	else for (const key of ownEnumerableKeys(value)) record[key] = resolvedDeep(value[key], mode, seen);
	return mode == "settled" ? Promise.allSettledKeyed(record) : Promise.allKeyed(record);
}
/**
* Await a value with the matching Promise combinator (`all` / `allKeyed` / settled variants).
* Nested records, arrays, maps, sets, and `@promise` slots are walked once.
*/
function resolved(value, mode = "all") {
	if (isThenable$1(value)) return mode == "settled" ? settleOne(value) : Promise.resolve(value);
	const slot = value?.[$promise];
	if (isThenable$1(slot)) return mode == "settled" ? settleOne(slot) : Promise.resolve(slot);
	return Promise.resolve(resolvedDeep(value, mode, /* @__PURE__ */ new WeakSet()));
}
resolved.all = (value) => resolved(value, "all");
resolved.allSettled = (value) => resolved(value, "settled");
resolved.allKeyed = (value) => Promise.allKeyed(value);
resolved.allSettledKeyed = (value) => Promise.allSettledKeyed(value);
resolved.try = (callbackOrValue, ...args) => Promise.try(callbackOrValue, ...args).then((value) => resolved(value, "all"));
//#endregion
//#region ../../modules/projects/core.ts/src/utils/Object.ts
var isIterable = (obj) => typeof obj?.[Symbol.iterator] == "function";
var isKeyType = (prop) => [
	"symbol",
	"string",
	"number"
].indexOf(typeof prop) >= 0;
var isValidObj = (obj) => {
	return obj != null && (typeof obj == "function" || typeof obj == "object") && !(obj instanceof WeakRef);
};
var removeExtra = (target, value, name = null) => {
	const exists = name != null && (typeof target == "object" || typeof target == "function") ? target?.[name] ?? target : target;
	let entries = [];
	if (value instanceof Set || value instanceof Map || Array.isArray(value) || isIterable(value)) entries = (exists instanceof Set || exists instanceof WeakSet ? value?.values?.() : value?.entries?.()) || (Array.isArray(value) || isIterable(value) ? value : []);
	else if (typeof value == "object" || typeof value == "function") entries = exists instanceof Set || exists instanceof WeakSet ? Object.values(value) : Object.entries(value);
	let exEntries = [];
	if (Array.isArray(exists)) exEntries = exists.entries();
	else if (exists instanceof Map || exists instanceof WeakMap) exEntries = exists?.entries?.();
	else if (exists instanceof Set || exists instanceof WeakSet) exEntries = exists?.values?.();
	else if (typeof exists == "object" || typeof exists == "function") exEntries = Object.entries(exists);
	const keys = new Set(Array.from(entries).map((e) => e?.[0]));
	const exe = new Set(Array.from(exEntries).map((e) => e?.[0]));
	const exclude = keys?.difference?.(exe);
	if (Array.isArray(exists)) {
		const nw = exists.filter((_, I) => !exclude.has(I));
		exists.splice(0, exists.length);
		exists.push(...nw);
	} else if (exists instanceof Map || exists instanceof Set || exists instanceof WeakMap || exists instanceof WeakSet) for (const k of exclude) exists.delete(k);
	else if (typeof exists == "function" || typeof exists == "object") for (const k of exclude) delete exists[k];
	return exists;
};
var objectAssign = (target, value, name = null, removeNotExists = true, mergeKey = "id") => {
	const exists = name != null && (typeof target == "object" || typeof target == "function") ? target?.[name] ?? target : target;
	let entries = null;
	if (removeNotExists) removeExtra(exists, value);
	if (value instanceof Set || value instanceof Map || Array.isArray(value) || isIterable(value)) entries = (exists instanceof Set || exists instanceof WeakSet ? value?.values?.() : value?.entries?.()) || (Array.isArray(value) || isIterable(value) ? value : []);
	else if (typeof value == "object" || typeof value == "function") entries = exists instanceof Set || exists instanceof WeakSet ? Object.values(value) : Object.entries(value);
	if (exists && entries && (typeof entries == "object" || typeof entries == "function")) {
		if (exists instanceof Map || exists instanceof WeakMap) {
			for (const E of entries) exists.set(...E);
			return exists;
		}
		if (exists instanceof Set || exists instanceof WeakSet) {
			for (const E of entries) {
				const mergeObj = E?.[mergeKey] ? Array.from(exists?.values?.() || []).find((I) => !isNotEqual?.(I?.[mergeKey], E?.[mergeKey])) : null;
				if (mergeObj != null) objectAssign(mergeObj, E, null, removeNotExists, mergeKey);
				else exists.add(E);
			}
			return exists;
		}
		if (typeof exists == "object" || typeof exists == "function") {
			if (Array.isArray(exists) || isIterable(exists)) {
				let I = 0;
				for (const E of entries) if (I < exists.length) exists[I++] = E?.[1];
				else exists?.push?.(E?.[1]);
				return exists;
			}
			return Object.assign(exists, Object.fromEntries([...entries || []].filter((K) => typeof K != "symbol")));
		}
	}
	if (name != null) {
		Reflect.set(target, name, value);
		return target;
	} else if (typeof value == "object" || typeof value == "function") return Object.assign(target, value);
	return value;
};
var bindFx = (target, fx) => {
	return boundCtx.getOrInsert(target, /* @__PURE__ */ new WeakMap()).getOrInsert(fx, fx?.bind?.(target));
};
var bindCtx = (target, fx) => (typeof fx == "function" ? bindFx(target, fx) : fx) ?? fx;
var callByProp = (unwrap, prop, cb, ctx) => {
	if (prop == Symbol.iterator) return callByAllProp(unwrap, cb, ctx);
	if (prop == null || typeof prop == "symbol" || typeof prop == "object" || typeof prop == "function") return;
	const callIfNotNull = (v, ...args) => {
		if (v != null) return cb?.(v, ...args);
	};
	if (unwrap instanceof Map || unwrap instanceof WeakMap) {
		if (unwrap.has(prop)) return callIfNotNull?.(unwrap.get(prop), prop, null, "@set");
	} else if (unwrap instanceof Set || unwrap instanceof WeakSet) {
		if (unwrap.has(prop)) return callIfNotNull?.(prop, prop, null, "@add");
	} else if (Array.isArray(unwrap) && typeof prop == "string" && [...prop?.matchAll?.(/^\d+$/g)].length == 1 && Number.isInteger(typeof prop == "string" ? parseInt(prop) : prop)) {
		const index = typeof prop == "string" ? parseInt(prop) : prop;
		return callIfNotNull?.(unwrap?.[index], index, null, "@add");
	} else if (typeof unwrap == "function" || typeof unwrap == "object") return callIfNotNull?.(unwrap?.[prop], prop, null, "@set");
};
var callByAllProp = (unwrap, cb, ctx) => {
	if (unwrap == null) return;
	let keys = [];
	if (unwrap instanceof Set || unwrap instanceof Map || typeof unwrap?.keys == "function") return [...unwrap?.keys?.() || keys].forEach?.((prop) => callByProp(unwrap, prop, cb, ctx));
	if (Array.isArray(unwrap) || isIterable(unwrap)) return [...unwrap].forEach?.((v, I) => callByProp(unwrap, I, cb, ctx));
	if (typeof unwrap == "object" || typeof unwrap == "function") return [...Object.keys(unwrap) || keys].forEach?.((prop) => callByProp(unwrap, prop, cb, ctx));
};
var isNotEqual = (a, b) => {
	if (a == null && b == null) return false;
	if (a == null || b == null) return true;
	if (typeof a == "boolean" && typeof b == "boolean") return a != b;
	if (typeof a == "number" && typeof b == "number") return !(a == b || Math.abs(a - b) < 1e-9);
	if (typeof a == "string" && typeof b == "string") return a != "" && b != "" && a != b || a !== b;
	if (typeof a != typeof b) return a !== b;
	return a && b && a != b || a !== b;
};
var boundCtxSymbol = Symbol.for("object.boundCtx");
globalThis[boundCtxSymbol] ??= /* @__PURE__ */ new WeakMap();
var boundCtx = globalThis[boundCtxSymbol];
var isArrayInvalidKey = (key, src) => {
	const invalidForArray = key == null || key < 0 || typeof key != "number" || key == Symbol.iterator || (src != null ? key >= (src?.length || 0) : false);
	return src != null ? Array.isArray(src) && invalidForArray : false;
};
var inProxy = /* @__PURE__ */ new WeakMap();
var contextify = (pc, name) => {
	return typeof pc?.[name] == "function" ? pc?.[name]?.bind?.(pc) : pc?.[name];
};
var deepOperateAndClone = (obj, operation, $prev) => {
	if (Array.isArray(obj)) {
		if (obj.every(isCanJustReturn)) return obj.map(operation);
		return obj.map((value, index) => deepOperateAndClone(value, operation, [obj, index]));
	}
	if (obj instanceof Map) {
		const entries = Array.from(obj.entries());
		if (entries.map(([key, value]) => value).every(isCanJustReturn)) return new Map(entries.map(([key, value]) => [key, operation(value, key, obj)]));
		return new Map(entries.map(([key, value]) => [key, deepOperateAndClone(value, operation, [obj, key])]));
	}
	if (obj instanceof Set) {
		const entries = Array.from(obj.entries());
		const values = entries.map(([key, value]) => value);
		if (entries.every(isCanJustReturn)) return new Set(values.map(operation));
		return new Set(values.map((value) => deepOperateAndClone(value, operation, [obj, value])));
	}
	if (typeof obj == "object" && obj?.constructor == Object && Object.prototype.toString.call(obj) == "[object Object]") {
		const entries = Array.from(Object.entries(obj));
		if (entries.map(([key, value]) => value).every(isCanJustReturn)) return Object.fromEntries(entries.map(([key, value]) => [key, operation(value, key, obj)]));
		return Object.fromEntries(entries.map(([key, value]) => [key, deepOperateAndClone(value, operation, [obj, key])]));
	}
	return operation(obj, $prev?.[1] ?? "", $prev?.[0] ?? null);
};
var bindEvent = (on, key, value) => {
	if (on?.[key] != null) {
		const exists = on[key];
		if (Array.isArray(value)) exists.add(...value);
		else if (typeof value == "function") exists.add(value);
		return on;
	}
	on[key] ??= Array.isArray(value) ? new Set(value) : typeof value == "function" ? /* @__PURE__ */ new Set([value]) : value;
	return on;
};
//#endregion
//#region ../../modules/projects/core.ts/src/utils/Promised.ts
var resolvedSymbol = Symbol.for("@resolved-promise");
var handledSymbol = Symbol.for("@handled-promise");
globalThis[resolvedSymbol] ??= /* @__PURE__ */ new WeakMap();
globalThis[handledSymbol] ??= /* @__PURE__ */ new WeakMap();
var resolvedMap = globalThis[resolvedSymbol];
var handledMap = globalThis[handledSymbol];
var $extractKey$ = Symbol.for("@extract");
var isThenable = (value) => value instanceof Promise || typeof value?.then == "function";
var actWith = (promiseOrPlain, cb) => {
	if (isThenable(promiseOrPlain)) {
		if (resolvedMap?.has?.(promiseOrPlain)) return cb(resolvedMap?.get?.(promiseOrPlain));
		return Promise.try?.(async () => {
			const item = await promiseOrPlain;
			resolvedMap?.set?.(promiseOrPlain, item);
			return item;
		})?.then?.(cb);
	}
	return cb(promiseOrPlain);
};
var PromiseHandler = class {
	#resolve;
	#reject;
	constructor(resolve, reject) {
		this.#resolve = resolve;
		this.#reject = reject;
	}
	defineProperty(target, prop, descriptor) {
		if (unwrap(target) instanceof Promise) return Reflect.defineProperty(target, prop, descriptor);
		return actWith(unwrap(target), (obj) => Reflect.defineProperty(obj, prop, descriptor));
	}
	deleteProperty(target, prop) {
		if (unwrap(target) instanceof Promise) return Reflect.deleteProperty(target, prop);
		return actWith(unwrap(target), (obj) => Reflect.deleteProperty(obj, prop));
	}
	getPrototypeOf(target) {
		if (unwrap(target) instanceof Promise) return Reflect.getPrototypeOf(target);
		return actWith(unwrap(target), (obj) => Reflect.getPrototypeOf(obj));
	}
	setPrototypeOf(target, proto) {
		if (unwrap(target) instanceof Promise) return Reflect.setPrototypeOf(target, proto);
		return actWith(unwrap(target), (obj) => Reflect.setPrototypeOf(obj, proto));
	}
	isExtensible(target) {
		if (unwrap(target) instanceof Promise) return Reflect.isExtensible(target);
		return actWith(unwrap(target), (obj) => Reflect.isExtensible(obj));
	}
	preventExtensions(target) {
		if (unwrap(target) instanceof Promise) return Reflect.ownKeys(target);
		return actWith(unwrap(target), (obj) => Reflect.preventExtensions(obj));
	}
	ownKeys(target) {
		const uwp = unwrap(target);
		if (uwp instanceof Promise) return Object.keys(uwp);
		return actWith(uwp, (obj) => {
			return (typeof obj == "object" || typeof obj == "function") && obj != null ? Object.keys(obj) : [];
		}) ?? [];
	}
	getOwnPropertyDescriptor(target, prop) {
		if (unwrap(target) instanceof Promise) return Reflect.getOwnPropertyDescriptor(target, prop);
		return actWith(unwrap(target), (obj) => Reflect.getOwnPropertyDescriptor(obj, prop));
	}
	construct(target, args, newTarget) {
		return actWith(unwrap(target), (ct) => Reflect.construct(ct, args, newTarget));
	}
	has(target, prop) {
		if (unwrap(target) instanceof Promise) return Reflect.has(target, prop);
		return actWith(unwrap(target), (obj) => Reflect.has(obj, prop));
	}
	get(target, prop, receiver) {
		target = unwrap(target);
		if (prop == "promise") return target;
		if (prop == "resolve" && this.#resolve) return (...args) => {
			const result = this.#resolve?.(...args);
			this.#resolve = null;
			return result;
		};
		if (prop == "reject" && this.#reject) return (...args) => {
			const result = this.#reject?.(...args);
			this.#reject = null;
			return result;
		};
		if (prop == "then" || prop == "catch" || prop == "finally") if (target instanceof Promise) return target?.[prop]?.bind?.(target);
		else {
			const $tmp = Promise.try(() => target);
			return $tmp?.[prop]?.bind?.($tmp);
		}
		let result = void 0;
		if (resolvedMap?.has?.(target) && (result = resolvedMap?.get?.(target))?.[prop] != null) result = resolvedMap?.get?.(target)?.[prop];
		else result = Promised(actWith(target, async (obj) => {
			if (unwrap(obj) instanceof Promise) return Reflect.get(obj, prop, receiver);
			if (isPrimitive(obj)) return prop == Symbol.toPrimitive || prop == Symbol.toStringTag ? obj : void 0;
			let value = void 0;
			try {
				value = Reflect.get(obj, prop, receiver);
			} catch (e) {
				value = target?.[prop];
			}
			if (typeof value == "function") return value?.bind?.(obj);
			return value;
		}));
		if (prop == Symbol.toStringTag) {
			if (isPrimitive(result)) return String(result ?? "") || "";
			return result?.[Symbol.toStringTag]?.() || String(result ?? "") || "";
		}
		if (prop == Symbol.toPrimitive) return (hint) => {
			if (isPrimitive(result)) return tryParseByHint(result, hint);
		};
		return result;
	}
	set(target, prop, value) {
		return actWith(unwrap(target), (obj) => Reflect.set(obj, prop, value));
	}
	apply(target, thisArg, args) {
		if (this.#resolve) {
			const result = this.#resolve?.(...args);
			this.#resolve = null;
			return result;
		}
		return actWith(unwrap(target, this.#resolve), (obj) => {
			if (typeof obj == "function") {
				if (unwrap(obj) instanceof Promise) return Reflect.apply(obj, thisArg, args);
				return Reflect.apply(obj, thisArg, args);
			}
		});
	}
};
function Promised(promise, resolve, reject) {
	if (promise != null && typeof promise?.resolved == "function" && promise[$extractKey$] != null && hasPendingPromises(promise)) return Promised(promise.resolved(), resolve, reject);
	if (!isThenable(promise) && hasPendingPromises(promise)) return Promised(resolved(promise), resolve, reject);
	if (!isThenable(promise)) return promise;
	if (resolvedMap?.has?.(promise)) return resolvedMap?.get?.(promise);
	if (!handledMap?.has?.(promise)) promise?.then?.((item) => resolvedMap?.set?.(promise, item));
	return handledMap.getOrInsertComputed(promise, () => new Proxy(fixFx(promise), new PromiseHandler(resolve, reject)));
}
Promised.allKeyed = function(promises, resolve, reject) {
	return Promised(Promise.allKeyed(promises), resolve, reject);
};
Promised.allSettledKeyed = function(promises, resolve, reject) {
	return Promised(Promise.allSettledKeyed(promises), resolve, reject);
};
//#endregion
export { isNotComplexArray as A, normalizePrimitive as B, defaultByType as C, hasValue as D, handleListeners as E, isVal as F, tryStringAsNumber as G, potentiallyAsyncMap as H, isValueRef as I, unref as K, isValueUnit as L, isObservable as M, isPrimitive as N, isCanJustReturn as O, isPromise as P, kebabToCamel as R, clamp as S, getValue as T, toRef as U, potentiallyAsync as V, tryParseByHint as W, $set as _, callByProp as a, camelToKebab as b, inProxy as c, isNotEqual as d, isValidObj as f, $getValue as g, $avoidTrigger as h, callByAllProp as i, isObject as j, isCanTransfer as k, isArrayInvalidKey as l, resolved as m, bindCtx as n, contextify as o, objectAssign as p, withCtx as q, bindEvent as r, deepOperateAndClone as s, Promised as t, isKeyType as u, $triggerLock as v, deref as w, canBeInteger as x, UUIDv4 as y, makeTriggerLess as z };
