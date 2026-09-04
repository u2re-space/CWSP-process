import { C as defaultByType, D as hasValue, H as potentiallyAsyncMap, N as isPrimitive, P as isPromise, V as potentiallyAsync, W as tryParseByHint, a as callByProp, d as isNotEqual, i as callByAllProp, l as isArrayInvalidKey, m as resolved$1, n as bindCtx, t as Promised, u as isKeyType, v as $triggerLock$1, z as makeTriggerLess } from "./core2.js";
//#region ../../modules/projects/object.ts/src/wrap/Symbol.ts
/**
* Shared symbol registry for the `object.ts` reactive runtime.
*
* These symbols form the hidden protocol used across wrappers, proxies,
* registries, and refs so internal bookkeeping does not collide with user keys.
*/
Symbol.observable ||= Symbol.for("observable");
Symbol.subscribe ||= Symbol.for("subscribe");
Symbol.unsubscribe ||= Symbol.for("unsubscribe");
var $value = Symbol.for("@value");
var $extractKey$ = Symbol.for("@extract");
var $originalKey$ = Symbol.for("@origin");
var $registryKey$ = Symbol.for("@registry");
var $behavior = Symbol.for("@behavior");
var $promise = Symbol.for("@promise");
var $resolved = Symbol.for("@resolved");
var $triggerLess = Symbol.for("@trigger-less");
var $triggerLock = Symbol.for("@trigger-lock");
var $triggerControl = Symbol.for("@trigger-control");
var $trigger = Symbol.for("@trigger");
var $affected = Symbol.for("@subscribe");
var $isNotEqual = Symbol.for("@isNotEqual");
var $realProp = Symbol.for("@realProp");
//#endregion
//#region ../../modules/projects/object.ts/src/wrap/Utils.ts
/**
* Shared type and utility layer for `object.ts`.
*
* This file defines the loose observable/subscription type contracts plus
* helper functions for unwrapping, dereferencing, safe serialization, dispose
* chaining, promise-aware flows, and the Set-as-array adapter.
*/
var $originalObjects$ = /* @__PURE__ */ new WeakMap();
/** Clone an observable-like structure into plain serializable data. */
var safe = (target) => {
	const unwrap = typeof target == "object" || typeof target == "function" ? target?.[$extractKey$] ?? target : target, mapped = (e) => safe(e);
	if (Array.isArray(unwrap)) return unwrap?.map?.(mapped) || Array.from(unwrap || [])?.map?.(mapped) || [];
	else if (unwrap instanceof Map || unwrap instanceof WeakMap) return new Map(Array.from(unwrap?.entries?.() || [])?.map?.(([K, V]) => [K, safe(V)]));
	else if (unwrap instanceof Set || unwrap instanceof WeakSet) return new Set(Array.from(unwrap?.values?.() || [])?.map?.(mapped));
	else if (unwrap != null && typeof unwrap == "function" || typeof unwrap == "object") return Object.fromEntries(Array.from(Object.entries(unwrap || {}) || [])?.filter?.(([K]) => K != $extractKey$ && K != $originalKey$ && K != $registryKey$)?.map?.(([K, V]) => [K, safe(V)]));
	return unwrap;
};
/** Return the raw target behind a proxy/wrapper when one exists. */
var unwrap = (arr) => {
	return arr?.[$extractKey$] ?? arr?.["@target"] ?? arr;
};
/** Dereference WeakRef-like wrappers and recursively unwrap observable containers. */
var deref = (target, discountValue = false) => {
	const original = target;
	if (isPrimitive(target) || typeof target == "symbol") return target;
	if (target != null && (target instanceof WeakRef || "deref" in target && typeof target?.deref == "function")) target = target?.deref?.();
	if (target != null && (typeof target == "object" || typeof target == "function")) {
		target = unwrap(target);
		const $val = discountValue && hasValue(target) && target?.value;
		if ($val != null && (typeof $val == "object" || typeof $val == "function")) target = $val;
		if (original != target) return deref(target, discountValue);
	}
	return target;
};
/** Promise-like guard used by subscription helpers that accept thenables. */
var isThenable = (val) => val != null && typeof val.then === "function";
/** Run a callback once the target or its embedded promise has resolved. */
var withPromise = (target, cb) => {
	if (isPrimitive(target) || typeof target == "function") return cb?.(target);
	if (isThenable(target)) return target.then(cb);
	if (typeof target?.resolved == "function") return Promise.resolve(target.resolved()).then(cb);
	if (target?.promise && isThenable(target.promise)) return target.promise.then(cb);
	if (target?.[$promise] && isThenable(target[$promise])) return target[$promise].then(cb);
	return cb?.(target);
};
var disposeMap = /* @__PURE__ */ new WeakMap();
var disposeRegistry = new FinalizationRegistry((callstack) => {
	callstack?.forEach?.((cb) => cb?.());
});
/**
* Append a callback to an object's disposal/call chain.
*
* AI-READ: `Symbol.dispose` is treated specially and kept in a side registry so
* multiple callbacks can be composed without overwriting each other.
*/
function addToCallChain(obj, methodKey, callback) {
	if (!callback || typeof callback != "function" || typeof obj != "object" && typeof obj != "function") return;
	if (methodKey == Symbol.dispose) {
		const chainTarget = obj?.[$extractKey$] ?? obj;
		disposeMap?.getOrInsertComputed?.(chainTarget, () => {
			const CallChain = /* @__PURE__ */ new Set();
			if (typeof chainTarget == "object" || typeof chainTarget == "function") {
				disposeRegistry.register(chainTarget, CallChain);
				disposeMap.set(chainTarget, CallChain);
				chainTarget[Symbol.dispose] ??= () => CallChain.forEach((cb) => {
					cb?.();
				});
			}
			return CallChain;
		})?.add?.(callback);
	} else obj[methodKey] = function(...args) {
		const original = obj?.[methodKey];
		if (typeof original == "function") original.apply(this, args);
		callback.apply(this, args);
	};
}
//#endregion
//#region ../../modules/projects/object.ts/src/core/Subscript.ts
/**
* Listener registry and proxy wrapper backbone for `object.ts`.
*
* The `Subscript` class stores callbacks, batches dispatches, exposes a
* minimal Observable-compatible surface, and helps observable wrappers share
* one registry per underlying target.
*
* INVARIANT: dispatch never awaits or aggregates listener Promises.
* Async returns are fire-and-forget (rejection → console.warn only).
*/
/** Track disposer rewrites for Observable-style subscribers so completion also unsubscribes. */
var withUnsubSymbol = Symbol.for("object.ts@withUnsub");
globalThis[withUnsubSymbol] ??= /* @__PURE__ */ new WeakMap();
var withUnsub = globalThis[withUnsubSymbol];
/** Complete with unsubscription helper. */
var completeWithUnsub = (subscriber, weak, handler) => {
	return withUnsub.getOrInsert(subscriber, () => {
		const registry = weak?.deref?.();
		registry?.affected?.(handler);
		const savComplete = subscriber?.complete?.bind?.(subscriber);
		const unaffected = () => {
			const r = savComplete?.();
			registry?.unaffected?.(handler);
			return r;
		};
		subscriber.complete = unaffected;
		return {
			unaffected,
			[Symbol.dispose]: unaffected,
			[Symbol.asyncDispose]: unaffected
		};
	});
};
/** Global registry that maps raw targets to their `Subscript` instance. */
var subscriptRegistrySymbol = Symbol.for("object.ts@subscriptRegistry");
globalThis[subscriptRegistrySymbol] ??= /* @__PURE__ */ new WeakMap();
var subscriptRegistry = globalThis[subscriptRegistrySymbol] ??= /* @__PURE__ */ new WeakMap();
/** Global registry that maps effect callbacks to their trigger filters. */
var globalEffectListenersSymbol = Symbol.for("object.ts@globalEffectListeners");
globalThis[globalEffectListenersSymbol] ??= /* @__PURE__ */ new Map();
var globalEffectListeners = globalThis[globalEffectListenersSymbol];
var effectGlobally = (cb, options = ["*"]) => {
	if (cb == null || typeof cb != "function") return;
	const normalized = normalizeEffectOptions(options);
	globalEffectListeners.set(cb, normalized.affectTypes);
	return () => globalEffectListeners.delete(cb);
};
/** Global registry that maps wrapped targets to their `Subscript` instance. */
var wrappedSymbol = Symbol.for("object.ts@wrapped");
globalThis[wrappedSymbol] ??= /* @__PURE__ */ new WeakMap();
var wrapped = globalThis[wrappedSymbol];
/** Ensure a target has a registry before reusing or returning a reactive handle. */
var register = (what, handle) => {
	const unwrap = what?.[$extractKey$] ?? what;
	let registry = subscriptRegistry.get(unwrap);
	if (!registry) {
		registry = new Subscript(unwrap);
		subscriptRegistry.set(unwrap, registry);
	} else registry.bindSource(unwrap);
	return handle;
};
/** Wrap a raw target in a proxy backed by the provided handler, memoized per original object. */
var wrapWith = (what, handle) => {
	what = deref(what?.[$extractKey$] ?? what);
	if (typeof what == "symbol" || !(typeof what == "object" || typeof what == "function") || what == null) return what;
	return wrapped.getOrInsertComputed(what, () => new Proxy(what, register(what, handle)));
};
var forAll = Symbol.for("@allProps");
var wildcardTriggers = /* @__PURE__ */ new Set(["*", "all"]);
var triggerAliases = /* @__PURE__ */ new Map([
	["set", ["setter", "@set"]],
	["add", ["@add"]],
	["delete", ["@delete"]],
	["invalidate", ["@invalidate"]],
	["manual", ["@manual"]],
	["custom", ["@custom"]],
	["resolved", ["@resolved"]],
	["setAll", ["@setAll"]],
	["addAll", ["@addAll"]],
	["deleteAll", ["@deleteAll", "@clear"]]
]);
/** Global registry that maps trigger aliases to their canonical names. */
var triggerCanonicalNamesSymbol = Symbol.for("object.ts@triggerCanonicalNames");
globalThis[triggerCanonicalNamesSymbol] ??= new Map(Array.from(triggerAliases.entries()).flatMap(([canonical, aliases]) => aliases.map((alias) => [alias, canonical])));
var triggerCanonicalNames = globalThis[triggerCanonicalNamesSymbol];
var normalizeTriggerName = (trigger = "set") => {
	if (trigger == null) return trigger;
	const name = String(trigger || "set");
	return triggerCanonicalNames.get(name) ?? name;
};
var triggerNamesOf = (trigger) => {
	const name = trigger == null ? "all" : String(normalizeTriggerName(trigger) ?? "all");
	return [name, ...triggerAliases.get(name) ?? []];
};
var expandTriggerFilter = (types = ["*"]) => {
	return new Set([...normalizeTriggerFilter(types)].flatMap((name) => [name, ...triggerAliases.get(name) ?? []]));
};
var normalizeTriggerFilter = (triggers = ["*"]) => {
	const list = typeof triggers == "string" ? [triggers] : Array.from(triggers ?? ["*"]);
	const normalized = new Set(list.map((item) => {
		const name = String(item || "*");
		return wildcardTriggers.has(name) ? name : String(normalizeTriggerName(name) ?? name);
	}));
	return normalized.size ? normalized : /* @__PURE__ */ new Set(["*"]);
};
var triggerFilterAllows = (triggers, trigger) => {
	const filter = triggers instanceof Set ? triggers : normalizeTriggerFilter(triggers);
	return [...wildcardTriggers].some((name) => filter.has(name)) || triggerNamesOf(trigger).some((name) => filter.has(name));
};
var isOptionsObject = (options) => {
	return !!options && typeof options == "object" && !Array.isArray(options) && ("affectTypes" in options || "triggers" in options || "triggerImmediately" in options);
};
var normalizeAffectedOptions = (options = ["*"]) => {
	if (isOptionsObject(options)) return {
		affectTypes: normalizeTriggerFilter(options.affectTypes ?? options.triggers ?? ["*"]),
		triggerImmediately: options.triggerImmediately !== false
	};
	const affectTypes = normalizeTriggerFilter(options);
	return {
		affectTypes,
		triggerImmediately: triggerFilterAllows(affectTypes, "initial")
	};
};
var normalizeEffectOptions = (options = ["*"]) => {
	if (isOptionsObject(options)) return {
		affectTypes: normalizeTriggerFilter(options.affectTypes ?? options.triggers ?? ["*"]),
		triggerImmediately: options.triggerImmediately === true
	};
	return {
		affectTypes: normalizeTriggerFilter(options),
		triggerImmediately: false
	};
};
var SubscriptSymbol = Symbol.for("object.ts@Subscript");
globalThis[SubscriptSymbol] ??= class Subscript {
	compatible;
	#source;
	#listeners;
	#flags = /* @__PURE__ */ new WeakSet();
	#native;
	#iterator;
	#inDispatch = /* @__PURE__ */ new Set();
	#disabledTriggers = /* @__PURE__ */ new Set();
	#triggerControl;
	#pending = /* @__PURE__ */ new Map();
	#pendingByProp = /* @__PURE__ */ new Map();
	#flushScheduled = false;
	constructor(source) {
		this.#source = source;
		this.#listeners = /* @__PURE__ */ new Map();
		this.#flags = /* @__PURE__ */ new WeakSet();
		this.#triggerControl = {
			enable: (types = ["*"], cb) => cb ? this.withTriggers(types, true, cb) : this.setTriggersEnabled(types, true),
			disable: (types = ["*"], cb) => cb ? this.withTriggers(types, false, cb) : this.setTriggersEnabled(types, false),
			set: (types, enabled) => this.setTriggersEnabled(types, enabled),
			with: (types, cb) => this.withTriggers(types, true, cb),
			without: (types, cb) => this.withTriggers(types, false, cb),
			isEnabled: (trigger) => this.isTriggerEnabled(trigger)
		};
		this.#iterator = { next: (args) => {
			if (args) Array.isArray(args) ? this.#dispatch(...args) : this.#dispatch(args);
		} };
		const weak = new WeakRef(this);
		const controller = function(subscriber) {
			const handler = subscriber?.next?.bind?.(subscriber);
			return completeWithUnsub(subscriber, weak, handler);
		};
		this.#native = typeof Observable != "undefined" ? new Observable(controller) : null;
		this.compatible = () => this.#native;
	}
	bindSource(source) {
		this.#source ??= source;
		return this;
	}
	/**
	* Run one listener with re-entrancy guard (recursive $safeExec on same cb skipped).
	*
	* WHY: never return/await listener Promises — a never-settling or
	* recursively awaiting Promise would stall callers that used to
	* Promise.allSettled the dispatch batch.
	*/
	$safeExec(cb, ...args) {
		if (!cb || this.#flags.has(cb)) return;
		this.#flags.add(cb);
		try {
			const res = cb(...args);
			if (res && typeof res.then === "function") {
				res.catch(console.warn);
				return;
			}
			return res;
		} catch (e) {
			console.warn(e);
		} finally {
			this.#flags.delete(cb);
		}
	}
	/**
	* Invoke matching listeners synchronously.
	*
	* INVARIANT: does not collect, await, or return Promise.all* over listener
	* results. Async listeners run detached; hangs must not block the pipeline.
	*/
	#dispatch(name, value = null, oldValue, trigger = "all", ...etc) {
		trigger = normalizeTriggerName(trigger) ?? trigger;
		const listeners = this.#listeners;
		if (listeners?.size) {
			for (const [cb, record] of listeners.entries()) if ((record.prop === name || record.prop === forAll || record.prop === null) && triggerFilterAllows(record.triggers, trigger)) this.$safeExec(cb, value, name, oldValue, trigger, ...etc);
		}
		if (globalEffectListeners.size) {
			const event = {
				source: this.#source,
				target: this.#source,
				value,
				prop: name,
				name,
				oldValue,
				trigger,
				args: etc
			};
			for (const [cb, triggers] of globalEffectListeners.entries()) if (triggerFilterAllows(triggers, trigger)) this.$safeExec(cb, event);
		}
	}
	wrap(nw) {
		if (Array.isArray(nw)) return wrapWith(nw, this);
		return nw;
	}
	get triggerControl() {
		return this.#triggerControl;
	}
	isTriggerEnabled(trigger) {
		return !triggerFilterAllows(this.#disabledTriggers, "all") && !triggerNamesOf(trigger).some((name) => this.#disabledTriggers.has(name));
	}
	setTriggersEnabled(types = ["*"], enabled = true) {
		const names = expandTriggerFilter(types);
		for (const name of names) if (enabled) this.#disabledTriggers.delete(name);
		else this.#disabledTriggers.add(name);
	}
	withTriggers(types, enabled, cb) {
		const names = [...expandTriggerFilter(types)];
		const previous = new Map(names.map((name) => [name, this.#disabledTriggers.has(name)]));
		const restore = () => {
			previous.forEach((wasDisabled, name) => {
				if (wasDisabled) this.#disabledTriggers.add(name);
				else this.#disabledTriggers.delete(name);
			});
		};
		this.setTriggersEnabled(names, enabled);
		try {
			const result = cb?.();
			if (result && typeof result.finally == "function") return result.finally(restore);
			restore();
			return result;
		} catch (e) {
			restore();
			throw e;
		}
	}
	affected(cb, prop, options = ["*"]) {
		if (cb == null || typeof cb != "function") return;
		const normalized = normalizeAffectedOptions(options);
		this.#listeners.set(cb, {
			prop: prop || forAll,
			triggers: normalized.affectTypes
		});
		return () => this.unaffected(cb, prop || forAll);
	}
	unaffected(cb, prop) {
		if (cb != null && typeof cb == "function") {
			const listeners = this.#listeners;
			const record = listeners?.get(cb);
			if (record && (record.prop == prop || prop == null || prop == forAll)) {
				listeners.delete(cb);
				return () => this.affected(cb, prop || forAll, record.triggers);
			}
		}
		return this.#listeners.clear();
	}
	/**
	* Коалесит триггеры:
	* - один dispatch на name за микро-тик
	* - повторные trigger(name) до flush не вызывают повторно dispatch, а лишь обновляют аргументы
	* - другие name не блокируются
	*/
	/**
	* Queue and coalesce trigger events by property and trigger type per microtask.
	*
	* WHY: hot mutation paths can emit many intermediate writes; batching keeps
	* subscribers deterministic and avoids recursive cascades on one property.
	*/
	trigger(name, value, oldValue, trigger = "set", ...etc) {
		if (typeof name === "symbol") return;
		if (trigger === void 0) trigger = "set";
		trigger = normalizeTriggerName(trigger) ?? trigger;
		if (!this.isTriggerEnabled(trigger)) return;
		const opKey = `${trigger ?? "all"}`;
		let byOp = this.#pendingByProp.get(name);
		if (!byOp) {
			byOp = /* @__PURE__ */ new Map();
			this.#pendingByProp.set(name, byOp);
		}
		byOp.set(opKey, [
			name,
			value,
			oldValue,
			trigger,
			etc
		]);
		if (this.#flushScheduled) return;
		this.#flushScheduled = true;
		queueMicrotask(() => {
			this.#flushScheduled = false;
			const batch = this.#pendingByProp;
			this.#pendingByProp = /* @__PURE__ */ new Map();
			for (const [prop, opMap] of batch) {
				if (prop != null && this.#inDispatch.has(prop)) continue;
				if (prop != null) this.#inDispatch.add(prop);
				try {
					for (const [, args] of opMap) {
						const [nm, v, ov, tg, rest] = args;
						try {
							this.#dispatch(nm, v, ov, tg, ...rest ?? []);
						} catch (e) {
							console.warn(e);
						}
					}
				} finally {
					if (prop != null) this.#inDispatch.delete(prop);
				}
			}
		});
	}
	get iterator() {
		return this.#iterator;
	}
};
var Subscript = globalThis[SubscriptSymbol];
//#endregion
//#region ../../modules/projects/object.ts/src/core/Resolved.ts
/**
* FIND:promise-keyed
* Reactive `resolved` operation: snapshot thenables via core combinators and emit `resolved`.
*/
var rawOf = (target) => {
	const unwrapped = deref(target);
	return unwrapped?.[$extractKey$] ?? unwrapped;
};
/** Snapshot a reactive target (or its raw source) with `all` / `allKeyed` / settled variants. */
function resolved(target, mode = "all") {
	const raw = rawOf(target);
	if (isPromise(raw)) return resolved$1(raw, mode);
	if (isPromise(raw?.[$promise])) return resolved$1(raw[$promise], mode);
	return resolved$1(raw ?? target, mode);
}
/** Build `obj.resolved` / `$trigger.resolved` without making the proxy thenable. */
function makeResolvedOp(target, emit = false) {
	const run = ((mode = "all") => {
		const pending = resolved(target, mode);
		if (!emit) return pending;
		return pending.then((value) => {
			const raw = rawOf(target);
			const key = raw?.realProp ?? (raw && "value" in raw ? "value" : null);
			subscriptRegistry.get(raw)?.trigger?.(key, value, void 0, "resolved");
			return value;
		});
	});
	run.all = () => run("all");
	run.allSettled = () => run("settled");
	run.allKeyed = () => run("all");
	run.allSettledKeyed = () => run("settled");
	run.try = (callbackOrValue, ...args) => Promise.try(callbackOrValue, ...args).then((value) => resolved(value ?? target, "all"));
	return run;
}
function emitResolved(target, key, value, oldValue) {
	const raw = rawOf(target) ?? target;
	subscriptRegistry.get(raw)?.trigger?.(key, value, oldValue, "resolved");
}
/** Re-assign thenable fields through the live proxy so set + `resolved` share one path. */
function bindExistingThenables(live, raw) {
	if (live == null || raw == null) return live;
	if (Array.isArray(raw)) {
		raw.forEach((value, index) => {
			if (isPromise(value)) live[index] = value;
		});
		return live;
	}
	if (raw instanceof Map) {
		for (const [key, value] of raw.entries()) if (isPromise(value)) live.set(key, value);
		return live;
	}
	if (raw instanceof Set) return live;
	for (const key of Reflect.ownKeys(raw)) {
		if (key == $extractKey$ || key == $promise || key == $resolved) continue;
		if (!Object.getOwnPropertyDescriptor(raw, key)?.enumerable) continue;
		const value = raw[key];
		if (isPromise(value)) live[key] = value;
	}
	return live;
}
//#endregion
//#region ../../modules/projects/object.ts/src/core/Specific.ts
/**
* Concrete proxy handlers for arrays, objects, maps, and sets.
*
* This is the low-level implementation layer that intercepts reads/writes,
* translates native collection operations into normalized trigger events, and
* exposes the observable protocol used by `observe()`.
*/
var __safeGetGuardSymbol = Symbol.for("object.ts@__safeGetGuard");
var __systemSkip = /* @__PURE__ */ new Set([
	Symbol.toStringTag,
	Symbol.iterator,
	Symbol.asyncIterator,
	Symbol.toPrimitive,
	"toString",
	"valueOf",
	"inspect",
	"constructor",
	"__proto__",
	"prototype",
	"then",
	"catch",
	"finally",
	"next"
]);
var systemSkipGet = (target, name) => {
	if (!__systemSkip.has(name)) return null;
	const got = safeGet(target, name);
	return typeof got === "function" ? bindCtx(target, got) : got;
};
var __safeGetGuard = globalThis[__safeGetGuardSymbol] ??= /* @__PURE__ */ new WeakMap();
function isGetter(obj, propName) {
	let got = true;
	try {
		__safeGetGuard?.getOrInsert?.(obj, /* @__PURE__ */ new Set())?.add?.(propName);
		if (__safeGetGuard?.get?.(obj)?.has?.(propName)) got = true;
		got = typeof Reflect.getOwnPropertyDescriptor(obj, propName)?.get == "function";
	} catch (e) {
		got = true;
	} finally {
		__safeGetGuard?.get?.(obj)?.delete?.(propName);
	}
	return got;
}
/** Follow `.value` chains when a wrapper stores the actual object one level deeper. */
var fallThrough = (obj, key) => {
	if (isPrimitive(obj)) return obj;
	const value = safeGet(obj, key);
	if (value == null && key != "value") {
		const tmp = safeGet(obj, "value");
		if (tmp != null && !isPrimitive(tmp)) return fallThrough(tmp, key);
		else return value;
	} else if (key == "value" && value != null && !isPrimitive(value) && typeof value != "function") return fallThrough(value, key) ?? value ?? obj;
	return value ?? obj;
};
/** Safe setter with re-entrancy protection to avoid recursive accessor loops. */
var safeSet = (obj, key, value) => {
	if (obj == null) return false;
	let active = __safeSetGuard?.getOrInsert?.(obj, /* @__PURE__ */ new Set());
	if (active?.has?.(key)) return false;
	active?.add?.(key);
	return Reflect.set(obj, key, value);
};
/** Safe getter with re-entrancy protection to avoid recursive accessor loops. */
var safeGet = (obj, key, rec) => {
	let result = void 0;
	if (obj == null) return obj;
	let active = __safeGetGuard?.getOrInsert?.(obj, /* @__PURE__ */ new Set());
	if (active?.has?.(key)) return null;
	if (!isGetter(obj, key)) result ??= Reflect.get(obj, key, rec != null ? rec : obj);
	else {
		active?.add?.(key);
		try {
			result = Reflect.get(obj, key, rec != null ? rec : obj);
		} catch (_e) {
			result = void 0;
		} finally {
			active.delete(key);
			if (active?.size === 0) __safeGetGuard?.delete?.(obj);
		}
	}
	return typeof result == "function" ? bindCtx(obj, result) : result;
};
var hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
var isTriggerEmitOptions = (value, allowValueOnly = false) => {
	return !!value && typeof value == "object" && !Array.isArray(value) && (hasOwn(value, "key") || hasOwn(value, "name") || hasOwn(value, "oldValue") || hasOwn(value, "old") || hasOwn(value, "op") || hasOwn(value, "trigger") || allowValueOnly && hasOwn(value, "value"));
};
var triggerOptionValue = (options, key, fallback) => {
	if (hasOwn(options, key)) return options[key];
	if (key == "oldValue" && hasOwn(options, "old")) return options.old;
	return fallback();
};
var triggerOptionTrigger = (options, fallback = "manual") => normalizeTriggerName(options.trigger ?? options.op ?? fallback);
var isRuntimeKey = (key) => typeof key == "string" || typeof key == "number" || typeof key == "symbol";
var realPropOf$1 = (target) => {
	const prop = safeGet(target, $realProp) ?? safeGet(target, "realProp");
	return isRuntimeKey(prop) ? prop : null;
};
var triggerKeyOf = (target, key) => key == "value" ? realPropOf$1(target) ?? key : key;
var triggerValueOf = (target, key) => {
	const realProp = realPropOf$1(target);
	if (realProp != null && key == realProp) return safeGet(target, "value") ?? safeGet(target, $value) ?? safeGet(target, key);
	return key == null ? void 0 : safeGet(target, key);
};
var createTriggerAPI = (registry, emit, target) => {
	const api = (key, opOrOptions, trigger) => {
		if (!isTriggerEmitOptions(opOrOptions)) trigger ??= opOrOptions;
		return emit(isTriggerEmitOptions(key) ? key : isTriggerEmitOptions(opOrOptions, true) ? {
			key,
			trigger,
			...opOrOptions
		} : {
			key,
			trigger: trigger ?? opOrOptions
		});
	};
	const control = registry?.triggerControl;
	if (control) Object.assign(api, control);
	api.custom = (trigger, key, value, oldValue) => api({
		key,
		trigger,
		value,
		oldValue
	});
	if (target != null) api.resolved = makeResolvedOp(target, true);
	return api;
};
var systemGet = (target, name, registry) => {
	if (target == null || isPrimitive(target)) return target;
	if (([
		"deref",
		"bind",
		"@target",
		$originalKey$,
		$extractKey$,
		$registryKey$
	].indexOf(name) < 0 ? safeGet(target, name)?.bind?.(target) : null) != null) return null;
	if ([$extractKey$, $originalKey$].indexOf(name) >= 0) return safeGet(target, name) ?? target;
	if (name == $value) return safeGet(target, name) ?? safeGet(target, "value");
	if (name == $registryKey$) return registry;
	if (name == $resolved || name == "resolved" && !Object.prototype.hasOwnProperty.call(target, "resolved")) return makeResolvedOp(target);
	if (name == $triggerControl) return registry?.triggerControl;
	if (name == Symbol.observable) return registry?.compatible;
	if (name == Symbol.subscribe) return (cb, prop, options) => affected(prop != null ? [target, prop] : target, cb, options);
	if (name == Symbol.iterator) return safeGet(target, name);
	if (name == Symbol.asyncIterator) return safeGet(target, name);
	if (name == Symbol.dispose) return (prop) => {
		safeGet(target, Symbol.dispose)?.(prop);
		unaffected(prop != null ? [target, prop] : target);
	};
	if (name == Symbol.asyncDispose) return (prop) => {
		safeGet(target, Symbol.asyncDispose)?.(prop);
		unaffected(prop != null ? [target, prop] : target);
	};
	if (name == Symbol.unsubscribe) return (prop) => unaffected(prop != null ? [target, prop] : target);
	if (typeof name == "symbol" && (name in target || safeGet(target, name) != null)) return safeGet(target, name);
};
var observableAPIMethods = (target, name, registry) => {
	if (name == "subscribe") return registry?.compatible?.[name] ?? ((handler) => {
		if (typeof handler == "function") return affected(target, handler);
		else if ("next" in handler && handler?.next != null) {
			const usub = affected(target, handler?.next), comp = handler?.["complete"];
			handler["complete"] = (...args) => {
				usub?.();
				return comp?.(...args);
			};
			return handler["complete"];
		}
	});
};
/** Wrap mutating array methods so they emit normalized add/set/delete events. */
var ObserveArrayMethod = class {
	#name;
	#self;
	#handle;
	constructor(name, self, handle) {
		this.#name = name;
		this.#self = self;
		this.#handle = handle;
	}
	get(target, name, rec) {
		const skip = systemSkipGet(target, name);
		if (skip != null) return skip;
		return Reflect.get(target, name, rec);
	}
	apply(target, ctx, args) {
		let added = [], removed = [];
		let setPairs = [];
		let oldState = [...this.#self];
		let idx = -1;
		const result = Reflect.apply(target, ctx || this.#self, args);
		if (this.#handle?.[$triggerLock]) {
			if (Array.isArray(result)) return observeArray(result);
			return result;
		}
		switch (this.#name) {
			case "push":
				idx = oldState?.length;
				added = args;
				break;
			case "unshift":
				idx = 0;
				added = args;
				break;
			case "pop":
				idx = oldState?.length - 1;
				if (oldState.length > 0) removed = [oldState[idx]];
				break;
			case "shift":
				idx = 0;
				if (oldState.length > 0) removed = [oldState[idx]];
				break;
			case "splice":
				idx = args[0];
				for (let i = 0; i < Math.max(oldState.length, this.#self.length); i++) {
					const oldValue = oldState[i];
					const newValue = this.#self[i];
					if (newValue === void 0 && i >= this.#self.length) removed.push(oldValue);
					else if (oldValue === void 0 && i >= oldState.length) setPairs.push([
						i,
						newValue,
						void 0,
						false
					]);
					else if (isNotEqual(oldValue, newValue)) setPairs.push([
						i,
						newValue,
						oldValue,
						true
					]);
				}
				break;
			case "sort":
			case "fill":
			case "reverse":
			case "copyWithin":
				idx = 0;
				for (let i = 0; i < oldState.length; i++) if (isNotEqual(oldState[i], this.#self[i])) setPairs.push([
					idx + i,
					this.#self[i],
					oldState[i],
					true
				]);
				break;
			case "set":
				idx = args[1];
				setPairs.push([
					idx,
					args[0],
					oldState?.[idx],
					idx in oldState
				]);
				break;
		}
		const reg = subscriptRegistry.get(this.#self);
		if (added?.length == 1) reg?.trigger?.(idx, added[0], null, "add");
		else if (added?.length > 1) {
			reg?.trigger?.(idx, added, null, "addAll");
			added.forEach((item, I) => reg?.trigger?.(idx + I, item, null, "add"));
		}
		if (setPairs?.length == 1) reg?.trigger?.(setPairs[0]?.[0] ?? idx, setPairs[0]?.[1], setPairs[0]?.[2], setPairs[0]?.[3] === false ? "add" : "set");
		else if (setPairs?.length > 1) {
			reg?.trigger?.(idx, setPairs, oldState, "setAll");
			setPairs.forEach((pair, I) => reg?.trigger?.(pair?.[0] ?? idx + I, pair?.[1], pair?.[2], pair?.[3] === false ? "add" : "set"));
		}
		if (removed?.length == 1) reg?.trigger?.(idx, null, removed[0], "delete");
		else if (removed?.length > 1) {
			reg?.trigger?.(idx, null, removed, "deleteAll");
			removed.forEach((item, I) => reg?.trigger?.(idx + I, null, item, "delete"));
		}
		if (result == target) return new Proxy(result, this.#handle);
		if (Array.isArray(result)) return observeArray(result);
		return result;
	}
};
var triggerWhenLengthChange = (self, target, oldLen, newLen) => {
	const removedItems = Number.isInteger(oldLen) && Number.isInteger(newLen) && newLen < oldLen ? target.slice(newLen, oldLen) : [];
	if (!self[$triggerLock] && oldLen !== newLen) {
		const registry = subscriptRegistry.get(target);
		if (removedItems.length === 1) registry?.trigger?.(newLen, null, removedItems[0], "delete");
		else if (removedItems.length > 1) {
			registry?.trigger?.(newLen, null, removedItems, "deleteAll");
			removedItems.forEach((item, I) => registry?.trigger?.(newLen + I, null, item, "delete"));
		}
		const addedCount = Number.isInteger(oldLen) && Number.isInteger(newLen) && newLen > oldLen ? newLen - oldLen : 0;
		if (addedCount === 1) registry?.trigger?.(oldLen, void 0, null, "add");
		else if (addedCount > 1) {
			const added = Array(addedCount).fill(void 0);
			registry?.trigger?.(oldLen, added, null, "addAll");
			added.forEach((_, I) => registry?.trigger?.(oldLen + I, void 0, null, "add"));
		}
	}
};
/** Proxy handler for observable arrays, including index writes and mutation methods. */
var ObserveArrayHandler = class {
	[$triggerLock];
	constructor() {}
	has(target, name) {
		return Reflect.has(target, name);
	}
	get(target, name, rec) {
		const skip = systemSkipGet(target, name);
		if (skip != null) return skip;
		if ([
			$extractKey$,
			$originalKey$,
			"@target",
			"deref"
		].indexOf(name) >= 0 && safeGet(target, name) != null && safeGet(target, name) != target) return typeof safeGet(target, name) == "function" ? safeGet(target, name)?.bind?.(target) : safeGet(target, name);
		const registry = subscriptRegistry?.get?.(target);
		const sys = systemGet(target, name, registry);
		if (sys != null) return sys;
		const obs = observableAPIMethods(target, name, registry);
		if (obs != null) return obs;
		if (name == $triggerLess) return makeTriggerLess.call(this, this);
		if (name == $trigger) return createTriggerAPI(registry, (options) => {
			const key = options.key ?? options.name ?? 0;
			const value = triggerOptionValue(options, "value", () => safeGet(target, key));
			const oldValue = triggerOptionValue(options, "oldValue", () => void 0);
			return registry?.trigger?.(key, value, oldValue, triggerOptionTrigger(options, "manual"));
		}, target);
		if (name == "@target" || name == $extractKey$) return target;
		if (name == "x") return () => {
			return target?.x ?? target?.[0];
		};
		if (name == "y") return () => {
			return target?.y ?? target?.[1];
		};
		if (name == "z") return () => {
			return target?.z ?? target?.[2];
		};
		if (name == "w") return () => {
			return target?.w ?? target?.[3];
		};
		if (name == "r") return () => {
			return target?.r ?? target?.[0];
		};
		if (name == "g") return () => {
			return target?.g ?? target?.[1];
		};
		if (name == "b") return () => {
			return target?.b ?? target?.[2];
		};
		if (name == "a") return () => {
			return target?.a ?? target?.[3];
		};
		const got = safeGet(target, name) ?? (name == "value" ? safeGet(target, $value) : null);
		if (typeof got == "function") return new Proxy(typeof got == "function" ? got?.bind?.(target) : got, new ObserveArrayMethod(name, target, this));
		return got;
	}
	set(target, name, value) {
		if (typeof name != "symbol") {
			if (Number.isInteger(parseInt(name))) name = parseInt(name) ?? name;
		}
		if (name == $triggerLock && value) {
			this[$triggerLock] = !!value;
			return true;
		}
		if (name == $triggerLock && !value) {
			delete this[$triggerLock];
			return true;
		}
		const pending = isPromise(value);
		return potentiallyAsync(value, (v) => {
			const old = safeGet(target, name);
			const xyzw = [
				"x",
				"y",
				"z",
				"w"
			];
			const rgba = [
				"r",
				"g",
				"b",
				"a"
			];
			const xyzw_idx = xyzw.indexOf(name);
			const rgba_idx = rgba.indexOf(name);
			let got = false;
			if (xyzw_idx >= 0) got = Reflect.set(target, xyzw_idx, v);
			else if (rgba_idx >= 0) got = Reflect.set(target, rgba_idx, v);
			else got = Reflect.set(target, name, v);
			if (name == "length") {
				if (isNotEqual(old, v)) triggerWhenLengthChange(this, target, old, v);
			}
			if (!this[$triggerLock] && typeof name != "symbol") {
				if (isNotEqual(old, v)) subscriptRegistry?.get?.(target)?.trigger?.(name, v, old, "set");
				if (pending) emitResolved(target, name, v, old);
			}
			return got;
		});
	}
	deleteProperty(target, name) {
		if (typeof name != "symbol") {
			if (Number.isInteger(parseInt(name))) name = parseInt(name) ?? name;
		}
		if (name == $triggerLock) {
			delete this[$triggerLock];
			return true;
		}
		const old = safeGet(target, name);
		const got = Reflect.deleteProperty(target, name);
		if (!this[$triggerLock] && name != "length" && name != $triggerLock && typeof name != "symbol") {
			if (old != null) subscriptRegistry.get(target)?.trigger?.(name, name, old, "delete");
		}
		return got;
	}
};
/** Proxy handler for observable objects and ref-like `{ value }` containers. */
var ObserveObjectHandler = class {
	[$triggerLock];
	constructor() {}
	get(target, name, ctx) {
		if ([
			$extractKey$,
			$originalKey$,
			"@target",
			"deref",
			"then",
			"catch",
			"finally"
		].indexOf(name) >= 0 && safeGet(target, name) != null && safeGet(target, name) != target) return typeof safeGet(target, name) == "function" ? bindCtx(target, safeGet(target, name)) : safeGet(target, name);
		const registry = subscriptRegistry.get(target) ?? subscriptRegistry.get(safeGet(target, "value") ?? target);
		const sys = systemGet(target, name, registry);
		if (sys != null) return sys;
		if (safeGet(target, name) == null && name != "value" && hasValue(target) && safeGet(target, "value") != null && (typeof safeGet(target, "value") == "object" || typeof safeGet(target, "value") == "function") && safeGet(safeGet(target, "value"), name) != null) target = safeGet(target, "value") ?? target;
		const obs = observableAPIMethods(target, name, registry);
		if (obs != null) return obs;
		if (name == $triggerLess) return makeTriggerLess.call(this, this);
		if (name == $trigger) return createTriggerAPI(registry, (options) => {
			const key = triggerKeyOf(target, options.key ?? options.name ?? realPropOf$1(target) ?? "value");
			const oldValue = triggerOptionValue(options, "oldValue", () => key == "value" || key == realPropOf$1(target) ? safeGet(target, $value) : void 0);
			const value = triggerOptionValue(options, "value", () => triggerValueOf(target, key));
			return registry?.trigger?.(key, value, oldValue, triggerOptionTrigger(options, "manual"));
		}, target);
		if (name == Symbol.toPrimitive) return (hint) => {
			const ft = fallThrough(target, name);
			if (safeGet(ft, name)) return safeGet(ft, name)?.(hint);
			if (isPrimitive(ft)) return tryParseByHint(ft, hint);
			if (isPrimitive(safeGet(ft, "value"))) return tryParseByHint(safeGet(ft, "value"), hint);
			return tryParseByHint(safeGet(ft, "value") ?? ft, hint);
		};
		if (name == Symbol.toStringTag) return () => {
			const ft = fallThrough(target, name);
			if (safeGet(ft, name)) return safeGet(ft, name)?.();
			if (isPrimitive(ft)) return String(ft ?? "") || "";
			if (isPrimitive(safeGet(ft, "value"))) return String(safeGet(ft, "value") ?? "") || "";
			return String(safeGet(ft, "value") ?? ft ?? "") || "";
		};
		if (name == "toString") return () => {
			const ft = fallThrough(target, name);
			if (safeGet(ft, name)) return safeGet(ft, name)?.();
			if (safeGet(ft, Symbol.toStringTag)) return safeGet(ft, Symbol.toStringTag)?.();
			if (isPrimitive(ft)) return String(ft ?? "") || "";
			if (isPrimitive(safeGet(ft, "value"))) return String(safeGet(ft, "value") ?? "") || "";
			return String(safeGet(ft, "value") ?? ft ?? "") || "";
		};
		if (name == "valueOf") return () => {
			const ft = fallThrough(target, name);
			if (safeGet(ft, name)) return safeGet(ft, name)?.();
			if (safeGet(ft, Symbol.toPrimitive)) return safeGet(ft, Symbol.toPrimitive)?.();
			if (isPrimitive(ft)) return ft;
			if (isPrimitive(safeGet(ft, "value"))) return safeGet(ft, "value");
			return safeGet(ft, "value") ?? ft;
		};
		if (typeof name == "symbol" && (name in target || safeGet(target, name) != null)) return safeGet(target, name);
		return fallThrough(target, name);
	}
	apply(target, ctx, args) {
		return Reflect.apply(target, ctx, args);
	}
	ownKeys(target) {
		return Reflect.ownKeys(target);
	}
	construct(target, args, newT) {
		return Reflect.construct(target, args, newT);
	}
	isExtensible(target) {
		return Reflect.isExtensible(target);
	}
	getOwnPropertyDescriptor(target, key) {
		let got = void 0;
		try {
			__safeGetGuard?.getOrInsert?.(target, /* @__PURE__ */ new Set())?.add?.(key);
			if (__safeGetGuard?.get?.(target)?.has?.(key)) got = void 0;
			got = Reflect.getOwnPropertyDescriptor(target, key);
		} catch (e) {
			got = void 0;
		} finally {
			__safeGetGuard?.get?.(target)?.delete?.(key);
		}
		return got;
	}
	has(target, prop) {
		return prop in target;
	}
	set(target, name, value) {
		const skip = systemSkipGet(target, name);
		if (skip != null) return skip;
		return potentiallyAsync(value, (v) => {
			const skip = systemSkipGet(v, name);
			if (skip != null) return skip;
			if (name == $triggerLock && value) {
				this[$triggerLock] = !!value;
				return true;
			}
			if (name == $triggerLock && !value) {
				delete this[$triggerLock];
				return true;
			}
			const $original = target;
			if (safeGet(target, name) == null && name != "value" && hasValue(target) && safeGet(target, "value") != null && (typeof safeGet(target, "value") == "object" || typeof safeGet(target, "value") == "function") && safeGet(safeGet(target, "value"), name) != null) target = safeGet(target, "value") ?? target;
			if (typeof name == "symbol" && !(safeGet(target, name) != null && name in target)) return;
			const triggerName = triggerKeyOf(target, name);
			const oldValue = name == "value" ? safeGet(target, $value) ?? safeGet(target, name) : safeGet(target, name);
			target[name] = v;
			const newValue = safeGet(target, name) ?? v;
			if (!this[$triggerLock] && typeof name != "symbol") {
				const subscript = subscriptRegistry.get(target) ?? subscriptRegistry.get($original);
				if ((safeGet(target, $isNotEqual) ?? isNotEqual)?.(oldValue, newValue)) subscript?.trigger?.(triggerName, v, oldValue);
				if (isPromise(value)) emitResolved($original, triggerName, v, oldValue);
			}
			return true;
		});
	}
	defineProperty(target, name, descriptor) {
		const skip = systemSkipGet(target, name);
		if (skip != null) return skip;
		if (name == $triggerLock && descriptor.value) {
			this[$triggerLock] = !!descriptor.value;
			return true;
		}
		if (name == $triggerLock && !descriptor.value) {
			delete this[$triggerLock];
			return true;
		}
		if (safeGet(target, name) == null && name != "value" && hasValue(target) && safeGet(target, "value") != null && (typeof safeGet(target, "value") == "object" || typeof safeGet(target, "value") == "function") && safeGet(safeGet(target, "value"), name) != null) target = safeGet(target, "value") ?? target;
		if (descriptor.get == void 0 && descriptor.set == void 0) return Reflect.defineProperty(target, name, descriptor);
		const oldValue = safeGet(target, name);
		const $result = Reflect.defineProperty(target, name, {
			get: descriptor.get,
			set: descriptor.set,
			enumerable: descriptor.enumerable ?? true,
			configurable: descriptor.configurable ?? true
		});
		safeSet(target, name, oldValue);
		return $result;
	}
	deleteProperty(target, name) {
		if (name == $triggerLock) {
			delete this[$triggerLock];
			return true;
		}
		if (safeGet(target, name) == null && name != "value" && hasValue(target) && safeGet(target, "value") != null && (typeof safeGet(target, "value") == "object" || typeof safeGet(target, "value") == "function") && safeGet(safeGet(target, "value"), name) != null) target = safeGet(target, "value") ?? target;
		const oldValue = safeGet(target, name);
		const result = Reflect.deleteProperty(target, name);
		if (!this[$triggerLock] && name != $triggerLock && typeof name != "symbol") subscriptRegistry.get(target)?.trigger?.(name, null, oldValue, "delete");
		return result;
	}
};
/** Proxy handler for observable maps, mapping native map operations to trigger events. */
var ObserveMapHandler = class {
	[$triggerLock];
	constructor() {}
	get(target, name, ctx) {
		if ([
			$extractKey$,
			$originalKey$,
			"@target",
			"deref"
		].indexOf(name) >= 0 && safeGet(target, name) != null && safeGet(target, name) != target) return typeof safeGet(target, name) == "function" ? bindCtx(target, safeGet(target, name)) : safeGet(target, name);
		const registry = subscriptRegistry.get(target);
		const sys = systemGet(target, name, registry);
		if (sys != null) return sys;
		const obs = observableAPIMethods(target, name, registry);
		if (obs != null) return obs;
		target = safeGet(target, $extractKey$) ?? safeGet(target, $originalKey$) ?? target;
		const valueOrFx = bindCtx(target, safeGet(target, name));
		if (typeof name == "symbol" && (name in target || safeGet(target, name) != null)) return valueOrFx;
		if (name == $triggerLess) return makeTriggerLess.call(this, this);
		if (name == $trigger) return createTriggerAPI(registry, (options) => {
			const key = options.key ?? options.name;
			if (key == null) return;
			const value = triggerOptionValue(options, "value", () => target.get(key));
			if (value == null && !hasOwn(options, "value")) return;
			const oldValue = triggerOptionValue(options, "oldValue", () => void 0);
			return registry?.trigger?.(key, value, oldValue, triggerOptionTrigger(options, "manual"));
		}, target);
		if (name == "clear") return () => {
			const oldValues = Array.from(target?.entries?.() || []), result = valueOrFx();
			oldValues.forEach(([prop, oldValue]) => {
				if (!this[$triggerLock]) subscriptRegistry.get(target)?.trigger?.(prop, null, oldValue, "delete");
			});
			return result;
		};
		if (name == "delete") return (prop, _ = null) => {
			const had = target.has(prop), oldValue = target.get(prop), result = valueOrFx(prop);
			if (!this[$triggerLock] && had) subscriptRegistry.get(target)?.trigger?.(prop, null, oldValue, "delete");
			return result;
		};
		if (name == "set") return (prop, value) => potentiallyAsyncMap(value, (v) => {
			const had = target.has(prop), oldValue = target.get(prop), result = valueOrFx(prop, v);
			if (!this[$triggerLock]) {
				if (!had || isNotEqual(oldValue, v)) subscriptRegistry.get(target)?.trigger?.(prop, v, had ? oldValue : null, had ? "set" : "add");
				if (isPromise(value)) emitResolved(target, prop, v, oldValue);
			}
			return result;
		});
		if (name == "getOrInsert" || name == "getOrInsertComputed") {
			const computed = name == "getOrInsertComputed";
			return (key, defaultOrCompute) => {
				if (target.has(key)) return target.get(key);
				const incoming = computed ? typeof defaultOrCompute == "function" ? defaultOrCompute(key) : defaultOrCompute : defaultOrCompute;
				return potentiallyAsyncMap(incoming, (v) => {
					const result = typeof target.getOrInsert == "function" ? target.getOrInsert(key, v) : (target.set(key, v), target.get(key));
					if (!this[$triggerLock]) {
						subscriptRegistry.get(target)?.trigger?.(key, v, null, "add");
						if (isPromise(incoming)) emitResolved(target, key, v, null);
					}
					return result;
				});
			};
		}
		return valueOrFx;
	}
	set(target, name, value) {
		if (name == $triggerLock) {
			this[$triggerLock] = !!value;
			return true;
		}
		if (name == $triggerLock && !value) {
			delete this[$triggerLock];
			return true;
		}
		return Reflect.set(target, name, value);
	}
	has(target, prop) {
		return Reflect.has(target, prop);
	}
	apply(target, ctx, args) {
		return Reflect.apply(target, ctx, args);
	}
	construct(target, args, newT) {
		return Reflect.construct(target, args, newT);
	}
	ownKeys(target) {
		return Reflect.ownKeys(target);
	}
	isExtensible(target) {
		return Reflect.isExtensible(target);
	}
	getOwnPropertyDescriptor(target, key) {
		let got = void 0;
		try {
			__safeGetGuard?.getOrInsert?.(target, /* @__PURE__ */ new Set())?.add?.(key);
			if (__safeGetGuard?.get?.(target)?.has?.(key)) got = void 0;
			got = Reflect.getOwnPropertyDescriptor(target, key);
		} catch (e) {
			got = void 0;
		} finally {
			__safeGetGuard?.get?.(target)?.delete?.(key);
		}
		return got;
	}
	deleteProperty(target, name) {
		if (name == $triggerLock) {
			delete this[$triggerLock];
			return true;
		}
		return Reflect.deleteProperty(target, name);
	}
};
/** Proxy handler for observable sets, emitting membership changes as reactive events. */
var ObserveSetHandler = class {
	[$triggerLock] = false;
	constructor() {}
	get(target, name, ctx) {
		if ([
			$extractKey$,
			$originalKey$,
			"@target",
			"deref"
		].indexOf(name) >= 0 && safeGet(target, name) != null && safeGet(target, name) != target) return typeof safeGet(target, name) == "function" ? bindCtx(target, safeGet(target, name)) : safeGet(target, name);
		const registry = subscriptRegistry.get(target);
		const sys = systemGet(target, name, registry);
		if (sys != null) return sys;
		const obs = observableAPIMethods(target, name, registry);
		if (obs != null) return obs;
		target = safeGet(target, $extractKey$) ?? safeGet(target, $originalKey$) ?? target;
		const valueOrFx = bindCtx(target, safeGet(target, name));
		if (typeof name == "symbol" && (name in target || safeGet(target, name) != null)) return valueOrFx;
		if (name == $triggerLess) return makeTriggerLess.call(this, this);
		if (name == $trigger) return createTriggerAPI(registry, (options) => {
			const key = options.key ?? options.name;
			if (key == null) return;
			const value = triggerOptionValue(options, "value", () => target.has(key));
			const oldValue = triggerOptionValue(options, "oldValue", () => void 0);
			return registry?.trigger?.(key, value, oldValue, triggerOptionTrigger(options, "manual"));
		}, target);
		if (name == "clear") return () => {
			const oldValues = Array.from(target?.values?.() || []), result = valueOrFx();
			oldValues.forEach((oldValue) => {
				if (!this[$triggerLock]) subscriptRegistry.get(target)?.trigger?.(null, null, oldValue, "delete");
			});
			return result;
		};
		if (name == "delete") return (value) => {
			const had = target.has(value), oldValue = had ? value : null, result = valueOrFx(value);
			if (!this[$triggerLock] && had) subscriptRegistry.get(target)?.trigger?.(value, null, oldValue, "delete");
			return result;
		};
		if (name == "add") return (value) => potentiallyAsync(value, (v) => {
			const had = target.has(v), oldValue = had ? v : null, result = valueOrFx(v);
			if (!this[$triggerLock]) {
				if (!had) subscriptRegistry.get(target)?.trigger?.(v, v, oldValue, "add");
				if (isPromise(value)) emitResolved(target, v, v, oldValue);
			}
			return result;
		});
		return valueOrFx;
	}
	set(target, name, value) {
		if (name == $triggerLock && value) {
			this[$triggerLock] = !!value;
			return true;
		}
		if (name == $triggerLock && !value) {
			delete this[$triggerLock];
			return true;
		}
		return Reflect.set(target, name, value);
	}
	has(target, prop) {
		return Reflect.has(target, prop);
	}
	apply(target, ctx, args) {
		return Reflect.apply(target, ctx, args);
	}
	construct(target, args, newT) {
		return Reflect.construct(target, args, newT);
	}
	ownKeys(target) {
		return Reflect.ownKeys(target);
	}
	isExtensible(target) {
		return Reflect.isExtensible(target);
	}
	getOwnPropertyDescriptor(target, key) {
		let got = void 0;
		try {
			__safeGetGuard?.getOrInsert?.(target, /* @__PURE__ */ new Set())?.add?.(key);
			if (__safeGetGuard?.get?.(target)?.has?.(key)) got = void 0;
			got = Reflect.getOwnPropertyDescriptor(target, key);
		} catch (e) {
			got = void 0;
		} finally {
			__safeGetGuard?.get?.(target)?.delete?.(key);
		}
		return got;
	}
	deleteProperty(target, name) {
		if (name == $triggerLock) {
			delete this[$triggerLock];
			return true;
		}
		return Reflect.deleteProperty(target, name);
	}
};
/** Lightweight internal check used before wrapping a target again. */
var $isObservable = (target) => {
	return !!((typeof target == "object" || typeof target == "function") && target != null && (target?.[$extractKey$] || target?.[$affected]));
};
/** Wrap an array with the array-specific observable proxy. */
var observeArray = (arr) => {
	if ($isObservable(arr)) return arr;
	return bindExistingThenables(wrapWith(arr, new ObserveArrayHandler()), arr);
};
/** Wrap an object with the object-specific observable proxy. */
var observeObject = (obj) => {
	if ($isObservable(obj)) return obj;
	return bindExistingThenables(wrapWith(obj, new ObserveObjectHandler()), obj);
};
/** Wrap a map with the map-specific observable proxy. */
var observeMap = (map) => {
	if ($isObservable(map)) return map;
	return bindExistingThenables(wrapWith(map, new ObserveMapHandler()), map);
};
/** Wrap a set with the set-specific observable proxy. */
var observeSet = (set) => {
	if ($isObservable(set)) return set;
	return wrapWith(set, new ObserveSetHandler());
};
//#endregion
//#region ../../modules/projects/object.ts/src/core/Primitives.ts
/**
* Reactive primitive/ref helpers plus the main `observe()` entrypoint.
*
* This module creates typed refs (`numberRef`, `stringRef`, `booleanRef`),
* property refs, delayed trigger behaviors, and the canonical dispatcher that
* chooses the correct observable wrapper for arrays, objects, maps, and sets.
*/
/** Numeric ref with coercion, primitive conversion hooks, and optional promise initialization. */
var numberRef = (initial, behavior) => {
	const isPromise = initial instanceof Promise || typeof initial?.then == "function";
	const $r = observe({
		[$promise]: isPromise ? initial : null,
		[$value]: isPromise ? 0 : Number(deref(initial) || 0) || 0,
		[$behavior]: behavior,
		[Symbol?.toStringTag]() {
			return String(this?.[$value] ?? "") || "";
		},
		[Symbol?.toPrimitive](hint) {
			return tryParseByHint((typeof this?.[$value] != "object" ? this?.[$value] : this?.[$value]?.value || 0) ?? 0, hint);
		},
		set value(v) {
			this[$value] = (v != null && !Number.isNaN(v) ? Number(v) : this[$value]) || 0;
		},
		get value() {
			return Number(this[$value] || 0) || 0;
		}
	});
	initial?.then?.((v) => {
		$r.value = v;
		$r[$trigger]?.({
			key: "value",
			value: v,
			trigger: "resolved"
		});
	});
	return $r;
};
/** String ref with coercion, primitive conversion hooks, and optional promise initialization. */
var stringRef = (initial, behavior) => {
	const isPromise = initial instanceof Promise || typeof initial?.then == "function";
	const $r = observe({
		[$promise]: isPromise ? initial : null,
		[$value]: (isPromise ? "" : String(deref(typeof initial == "number" ? String(initial) : initial || ""))) ?? "",
		[$behavior]: behavior,
		[Symbol?.toStringTag]() {
			return String(this?.[$value] ?? "") ?? "";
		},
		[Symbol?.toPrimitive](hint) {
			return tryParseByHint(this?.[$value] ?? "", hint);
		},
		set value(v) {
			this[$value] = String(typeof v == "number" ? String(v) : v || "") ?? "";
		},
		get value() {
			return String(this[$value] ?? "") ?? "";
		}
	});
	initial?.then?.((v) => {
		$r.value = v;
		$r[$trigger]?.({
			key: "value",
			value: v,
			trigger: "resolved"
		});
	});
	return $r;
};
/** Boolean ref with truthy/falsy coercion and optional promise initialization. */
var booleanRef = (initial, behavior) => {
	const isPromise = initial instanceof Promise || typeof initial?.then == "function";
	const $r = observe({
		[$promise]: isPromise ? initial : null,
		[$value]: (isPromise ? false : (deref(initial) != null ? typeof deref(initial) == "string" ? true : !!deref(initial) : false) || false) || false,
		[$behavior]: behavior,
		[Symbol?.toStringTag]() {
			return String(this?.[$value] ?? "") || "";
		},
		[Symbol?.toPrimitive](hint) {
			return tryParseByHint(!!this?.[$value] || false, hint);
		},
		set value(v) {
			this[$value] = (v != null ? typeof v == "string" ? true : !!v : this[$value]) || false;
		},
		get value() {
			return this[$value] || false;
		}
	});
	initial?.then?.((v) => {
		$r.value = v;
		$r[$trigger]?.({
			key: "value",
			value: v,
			trigger: "resolved"
		});
	});
	return $r;
};
/** Generic ref wrapper for values that do not need one of the specialized primitive ref shapes. */
var wrapRef = (initial, behavior) => {
	const isPromise = initial instanceof Promise || typeof initial?.then == "function";
	const $r = observe({
		[$promise]: isPromise ? initial : null,
		[$behavior]: behavior,
		[Symbol?.toStringTag]() {
			return String(this.value ?? "") || "";
		},
		[Symbol?.toPrimitive](hint) {
			return tryParseByHint(this.value, hint);
		},
		value: isPromise ? null : deref(initial)
	});
	initial?.then?.((v) => {
		$r.value = v;
		$r[$trigger]?.({
			key: "value",
			value: v,
			trigger: "resolved"
		});
	});
	affected(initial, (v) => {
		$r?.[$trigger]?.();
	});
	return $r;
};
var markRealProp = (target, realProp) => {
	if (target == null || typeof target != "object" && typeof target != "function") return target;
	try {
		Object.defineProperty(target, $realProp, {
			value: realProp,
			writable: true,
			configurable: true
		});
	} catch {
		try {
			target[$realProp] = realProp;
		} catch {}
	}
	try {
		Object.defineProperty(target, "realProp", {
			value: realProp,
			writable: true,
			configurable: true
		});
	} catch {
		try {
			target.realProp = realProp;
		} catch {}
	}
	return target;
};
/**
* Create a reactive reference to one property/slot of an observable source.
*
* WHY: this keeps duplex synchronization between the source slot and the
* returned ref-like object while still behaving like a regular `value` ref.
*
* Supported sources:
* - object / array: `src[srcProp]`
* - Map / WeakMap: `src.get(srcProp)` / `src.set(srcProp, v)`
* - Set / WeakSet: boolean membership of `srcProp` (`has` / `add` / `delete`)
*
* Also accepts `[map|set, key]` pair form (same shape as `affected()`).
*
* WHY (Set → boolean): observable object `fallThrough` maps `null`/`undefined`
* `.value` back to the wrapper itself, so absence must be a real primitive (`false`).
*/
var propRef = (src, srcProp = "value", initial, behavior) => {
	if (isPrimitive(src) || !src) return src;
	if (Array.isArray(src) && src.length == 2 && src[0] != null && (src[0] instanceof Map || src[0] instanceof WeakMap || src[0] instanceof Set || src[0] instanceof WeakSet)) {
		if (srcProp == null || srcProp === "value") srcProp = src[1];
		src = src[0];
	} else if (Array.isArray(src) && !isArrayInvalidKey(src?.[1], src) && (Array.isArray(src?.[0]) || typeof src?.[0] == "object" || typeof src?.[0] == "function")) src = src?.[0];
	const isMap = src instanceof Map || src instanceof WeakMap;
	const isSet = src instanceof Set || src instanceof WeakSet;
	if (isMap || isSet) {
		if (srcProp == null) return;
	} else if ((srcProp ??= Array.isArray(src) ? null : "value") == null || isArrayInvalidKey(srcProp, src)) return;
	const readSlot = () => {
		if (isMap) return src.get(srcProp);
		if (isSet) return src.has(srcProp);
		return src?.[srcProp];
	};
	const writeSlot = (v) => {
		if (isMap) {
			src.set(srcProp, v);
			return v;
		}
		if (isSet) {
			if (v) src.add(srcProp);
			else src.delete(srcProp);
			return src.has(srcProp);
		}
		return src[srcProp] = v;
	};
	if (isMap && initial !== void 0 && !src.has(srcProp)) src.set(srcProp, initial);
	else if (isSet && initial && !src.has(srcProp)) src.add(srcProp);
	const current = readSlot();
	if (!isSet && srcProp != null && hasValue(current) && isObservable(current)) return markRealProp(recoverReactive(current), srcProp);
	if (!isMap && !isSet && srcProp && typeof src?.getProperty == "function" && isObservable(src?.getProperty?.(srcProp))) return markRealProp(src?.getProperty?.(srcProp), srcProp);
	if (!isMap && !isSet) src[srcProp] ??= initial ?? src[srcProp];
	const r = observe({
		[$value]: isSet ? !!readSlot() : readSlot() ?? initial,
		[$behavior]: behavior,
		[Symbol?.toStringTag]() {
			return String(readSlot() ?? this[$value] ?? "") || "";
		},
		[Symbol?.toPrimitive](hint) {
			return tryParseByHint(readSlot(), hint);
		},
		set value(v) {
			r[$triggerLock$1] = true;
			if (isSet) this[$value] = writeSlot(v);
			else {
				const next = v ?? defaultByType(readSlot());
				this[$value] = writeSlot(next);
			}
			r[$triggerLock$1] = false;
		},
		get value() {
			const slot = readSlot();
			return this[$value] = isSet ? !!slot : slot ?? this[$value];
		}
	});
	markRealProp(r, srcProp);
	const usb = affected(src, (v, _prop, old, trigger) => {
		if (_prop === srcProp) {
			const value = isSet ? v != null : v;
			const oldValue = isSet ? old != null : old;
			r?.[$trigger]?.({
				key: srcProp,
				value,
				oldValue,
				trigger
			});
		}
	});
	addToCallChain(r, Symbol.dispose, usb);
	return r;
};
/** Pick the most suitable ref implementation for the provided value type. */
var $ref = (typed, behavior) => {
	switch (typeof typed) {
		case "boolean": return booleanRef(typed, behavior);
		case "number": return numberRef(typed, behavior);
		case "string": return stringRef(typed, behavior);
		case "object": if (typed != null) return wrapRef(observe(typed), behavior);
		default: return wrapRef(typed, behavior);
	}
};
/** Public ref helper that can either wrap a value or target one specific property. */
var ref = (typed, prop = "value", behavior) => {
	const $r = isObservable(typed) ? typed : $ref(typed, behavior);
	if (prop != null) return propRef($r, prop, behavior);
	else return $r;
};
/** `function` (not `const`) so circular Mainline ↔ Primitives/Assigned init cannot TDZ in bundled output. */
function observe(target, stateName) {
	if (target == null || typeof target == "symbol" || !(typeof target == "object" || typeof target == "function") || $isObservable(target)) return target;
	if ((target = deref?.(target)) == null || target instanceof Promise || target instanceof WeakRef || $isObservable(target)) return target;
	const unwrap = target;
	if (unwrap == null || typeof unwrap == "symbol" || !(typeof unwrap == "object" || typeof unwrap == "function") || unwrap instanceof Promise || unwrap instanceof WeakRef) return unwrap;
	let reactive = unwrap;
	if (Array.isArray(unwrap)) {
		reactive = observeArray(unwrap);
		return reactive;
	} else if (unwrap instanceof Map) {
		reactive = observeMap(unwrap);
		return reactive;
	} else if (unwrap instanceof Set) {
		reactive = observeSet(unwrap);
		return reactive;
	} else if (typeof unwrap == "function" || typeof unwrap == "object") {
		reactive = observeObject(unwrap);
		return reactive;
	}
	return reactive;
}
/** Detect whether a value is already wrapped in the `object.ts` observable protocol. */
var isObservable = (target) => {
	if (typeof HTMLInputElement != "undefined" && target instanceof HTMLInputElement) return true;
	return !!((typeof target == "object" || typeof target == "function") && target != null && (target?.[$extractKey$] || target?.[$affected] || subscriptRegistry?.has?.(target)));
};
/** Re-enter the observable pipeline only when the target already carries observable metadata. */
var recoverReactive = (target) => {
	return isObservable(target) ? observe(target) : null;
};
//#endregion
//#region ../../modules/projects/object.ts/src/core/Mainline.ts
/**
* Subscription and derivation pipeline for `object.ts`.
*
* This module resolves how callbacks subscribe to observable values, tuples,
* promises, DOM inputs, and iteration sources, then builds higher-level
* combinators like `assign`, `link`, `computed`, and `derivate`.
*/
var specializedSubscribe = /* @__PURE__ */ new WeakMap();
var checkValidObj = (obj) => {
	if (typeof obj == "symbol" || obj == null || !(typeof obj == "object" || typeof obj == "function")) return;
	return obj;
};
var initialTrigger = "initial";
var realPropOf = (target) => {
	const prop = target?.[$realProp] ?? target?.realProp;
	return isKeyType(prop) ? prop : null;
};
var normalizeAffectedProp = (target, prop) => {
	const realProp = realPropOf(target);
	if (realProp != null && (prop == null || prop == "value")) return realProp;
	return prop;
};
var propValueOf = (target, prop) => {
	if (prop != null && prop == realPropOf(target)) return target?.value;
	return target?.[prop];
};
var callByPropRefAware = (target, prop, cb, ctx) => {
	if (prop != null && prop == realPropOf(target)) {
		const value = propValueOf(target, prop);
		if (value != null) return cb?.(value, prop, null, "set");
	}
	return callByProp(target, prop, cb, ctx);
};
var withTrigger = (cb, options, trigger) => {
	const normalized = normalizeAffectedOptions(options);
	if (trigger == initialTrigger) {
		if (!normalized.triggerImmediately) return;
	} else if (!triggerFilterAllows(normalized.affectTypes, trigger)) return;
	return (value, name, oldValue, ...etc) => cb?.(value, name, oldValue, trigger, ...etc);
};
/** Default subscription strategy for already-observable targets. */
var subscribeDirectly = (target, prop, cb, options = ["*"]) => {
	if (!target) return;
	if (!checkValidObj(target)) return;
	const tProp = prop != Symbol.iterator ? normalizeAffectedProp(target, prop) : null;
	let registry = target?.[$registryKey$] ?? subscriptRegistry.get(target);
	target = target?.[$extractKey$] ?? target;
	queueMicrotask(() => {
		const initialCb = withTrigger(cb, options, initialTrigger);
		if (!initialCb) return;
		if (tProp != null && tProp != Symbol.iterator) callByPropRefAware(target, tProp, initialCb, null);
		else callByAllProp(target, initialCb, null);
	});
	let unSub = registry?.affected?.(cb, tProp, options);
	if (target?.[Symbol.dispose]) return unSub;
	addToCallChain(unSub, Symbol.dispose, unSub);
	addToCallChain(unSub, Symbol.asyncDispose, unSub);
	addToCallChain(target, Symbol.dispose, unSub);
	addToCallChain(target, Symbol.asyncDispose, unSub);
	return unSub;
};
/** Subscription adapter for DOM inputs, mapping `change` events onto reactive callbacks. */
var subscribeInput = (tg, _, cb, options = ["*"]) => {
	const affectTypes = normalizeAffectedOptions(options).affectTypes;
	const $opt = {};
	let oldValue = tg?.value;
	const $cb = (ev) => {
		const value = ev?.target?.value;
		if (triggerFilterAllows(affectTypes, "set")) cb?.(value, "value", oldValue, "set", ev);
		oldValue = value;
	};
	tg?.addEventListener?.("change", $cb, $opt);
	return () => tg?.removeEventListener?.("change", $cb, $opt);
};
var checkIsPaired = (tg) => {
	return Array.isArray(tg) && tg?.length == 2 && checkValidObj(tg?.[0]) && (isKeyType(tg?.[1]) || tg?.[1] == Symbol.iterator);
};
var isEffectOptionsArg = (value) => {
	return !!value && typeof value == "object" && !Array.isArray(value) && ("affectTypes" in value || "triggers" in value || "triggerImmediately" in value);
};
var normalizeEffectTargets = (targets) => {
	if (targets == null) return [];
	if (Array.isArray(targets) && !checkIsPaired(targets) && !isObservable(targets)) return targets;
	return [targets];
};
var effectTargetContext = (source) => {
	if (checkIsPaired(source)) {
		const target = source?.[0];
		return {
			source,
			target,
			prop: normalizeAffectedProp(target, source?.[1])
		};
	}
	return {
		source,
		target: source,
		prop: null
	};
};
var toEffectEvent = (source, target, value, prop, oldValue, trigger, args) => ({
	source,
	target,
	value,
	prop,
	name: prop,
	oldValue,
	trigger,
	args
});
/** Subscription adapter for `[target, prop]` tuples. */
var subscribePaired = (tg, _, cb, options = ["*"]) => {
	const prop = isKeyType(tg?.[1]) ? tg?.[1] : null;
	return affected(tg?.[0], prop, cb, options);
};
/** Defer subscription until a thenable source resolves. */
var subscribeThenable = (obj, prop, cb, options = ["*"]) => {
	return obj?.then?.((obj) => affected?.(obj, prop, cb, options))?.catch?.((e) => {
		console.warn(e);
		return null;
	});
};
/** `function` (not `const`) so circular imports from Assigned/Primitives cannot hit TDZ during bundle init. */
var affected = (obj, prop, cb = () => {}, options) => {
	if (typeof prop == "function") {
		options = cb;
		cb = prop;
		prop = null;
	} else prop = normalizeAffectedProp(obj, prop);
	if (typeof cb == "object" || Array.isArray(cb)) {
		options = cb;
		cb = () => {};
	}
	if (isPrimitive(obj) || typeof obj == "symbol") {
		if (normalizeAffectedOptions(options).triggerImmediately) return Promised(globalThis?.Promise?.try?.(() => {
			return cb?.(obj, null, null, null, initialTrigger);
		}));
	}
	if (typeof obj?.[$affected] == "function") return obj?.[$affected]?.(cb, prop, options);
	else if (checkValidObj(obj)) {
		const wrapped = obj;
		if (specializedSubscribe?.has?.(obj = obj?.[$extractKey$] ?? obj)) return specializedSubscribe?.get?.(obj)?.(wrapped, prop, cb, options);
		if (isObservable(wrapped) || checkIsPaired(obj) && isObservable(obj?.[0])) if (isThenable(obj)) return specializedSubscribe?.getOrInsert?.(obj, subscribeThenable)?.(obj, prop, cb, options);
		else if (checkIsPaired(obj)) return specializedSubscribe?.getOrInsert?.(obj, subscribePaired)?.(obj, prop, cb, options);
		else if (typeof HTMLInputElement != "undefined" && obj instanceof HTMLInputElement) return specializedSubscribe?.getOrInsert?.(obj, subscribeInput)?.(obj, prop, cb, options);
		else return specializedSubscribe?.getOrInsert?.(obj, subscribeDirectly)?.(wrapped, prop, cb, options);
		else {
			const initialCb = withTrigger(cb, options, initialTrigger);
			if (!initialCb) return;
			return Promised(globalThis?.Promise?.try?.(() => {
				if (checkIsPaired(obj)) return callByPropRefAware?.(obj?.[0], obj?.[1], initialCb, null);
				else if (prop != null && prop != Symbol.iterator) return callByPropRefAware?.(obj, prop, initialCb, null);
				else return callByAllProp?.(obj, initialCb, null);
			}));
		}
	}
};
/**
* Subscribe to one or many reactive triggers and receive a structured event.
*
* Unlike `affected()`, `effect()` is callback-first and reports the source that
* registered or emitted the event. It does not emit initial events by default.
*/
function effect(cb, targets, options) {
	if (cb == null || typeof cb != "function") return;
	if (isEffectOptionsArg(targets) && options === void 0) return effectGlobally(cb, targets);
	if (targets == null) return effectGlobally(cb, options);
	const normalized = normalizeEffectOptions(options);
	const affectedOptions = {
		affectTypes: normalized.affectTypes,
		triggerImmediately: normalized.triggerImmediately
	};
	const disposers = normalizeEffectTargets(targets).map((source) => {
		const ctx = effectTargetContext(source);
		return affected(ctx.target, ctx.prop, (value, prop, oldValue, trigger, ...args) => {
			return cb(toEffectEvent(ctx.source, ctx.target, value, prop, oldValue, trigger ?? null, args));
		}, affectedOptions);
	}).filter((dispose) => typeof dispose == "function");
	return () => disposers.forEach((dispose) => dispose?.());
}
/** Two-level WeakMap used to memoize subscriptions keyed by `[target, callback]` pairs. */
var DoubleWeakMap = class {
	#top = /* @__PURE__ */ new WeakMap();
	#ensureInner(key1) {
		if (key1 == null || typeof key1 !== "object" && typeof key1 !== "function") return null;
		let inner = this.#top.get(key1);
		if (!inner) {
			inner = /* @__PURE__ */ new WeakMap();
			this.#top.set(key1, inner);
		}
		return inner;
	}
	#splitPair(pair) {
		if (!Array.isArray(pair) || pair.length !== 2) return [null, null];
		return pair;
	}
	hasL1(key1) {
		return this.#top.has(key1);
	}
	set(pair, value) {
		const [key1, key2] = this.#splitPair(pair);
		const inner = this.#ensureInner(key1);
		if (!inner || key2 == null || typeof key2 !== "object" && typeof key2 !== "function") return this;
		inner.set(key2, value);
		return this;
	}
	get(pair) {
		const [key1, key2] = this.#splitPair(pair);
		if (key1 == null || typeof key1 !== "object" && typeof key1 !== "function") return void 0;
		return this.#top.get(key1)?.get(key2);
	}
	has(pair) {
		const [key1, key2] = this.#splitPair(pair);
		if (key1 == null || typeof key1 !== "object" && typeof key1 !== "function") return false;
		return this.#top.get(key1)?.has(key2) ?? false;
	}
	delete(pair) {
		const [key1, key2] = this.#splitPair(pair);
		if (key1 == null || typeof key1 !== "object" && typeof key1 !== "function") return false;
		const inner = this.#top.get(key1);
		return inner ? inner.delete(key2) : false;
	}
	deleteTop(key1) {
		if (key1 == null || typeof key1 !== "object" && typeof key1 !== "function") return false;
		return this.#top.delete(key1);
	}
	getOrCreate(pair, factory) {
		const [key1, key2] = this.#splitPair(pair);
		const inner = this.#ensureInner(key1);
		if (!inner || key2 == null || typeof key2 !== "object" && typeof key2 !== "function") return factory?.();
		if (inner.has(key2)) return inner.get(key2);
		const value = factory();
		inner.set(key2, value);
		return value;
	}
	getOrInsert(pair, value) {
		const [key1, key2] = this.#splitPair(pair);
		const inner = this.#ensureInner(key1);
		if (!inner || key2 == null || typeof key2 !== "object" && typeof key2 !== "function") return value;
		if (inner.has(key2)) return inner.get(key2);
		inner.set(key2, value);
		return value;
	}
	getOrInsertComputed(pair, compute) {
		const [key1, key2] = this.#splitPair(pair);
		const inner = this.#ensureInner(key1);
		if (!inner || key2 == null || typeof key2 !== "object" && typeof key2 !== "function") return compute?.([key1, key2]);
		if (inner.has(key2)) return inner.get(key2);
		const value = compute([key1, key2]);
		inner.set(key2, value);
		return value;
	}
};
var registeredIterated = new DoubleWeakMap();
/**
* Subscribe to iteration-level changes for arrays, sets, maps, and ref-like
* containers whose `value` should itself be treated as a collection.
*/
function iterated(tg, cb, options = ["*"]) {
	if (!tg) return;
	if (typeof tg !== "object" && typeof tg !== "function") return;
	if (registeredIterated.has([tg, cb])) return registeredIterated.get([tg, cb]);
	const $sub = (value, name, old, trigger) => {
		if (name == "value") {
			const entries = (old?.value ?? old)?.entries?.();
			const basis = tg?.value ?? value?.value ?? value;
			if (entries) for (const [idx, item] of entries) {
				const ofOld = item ?? (old?.value ?? old)?.[idx] ?? null;
				const ofNew = basis?.[idx];
				if (ofOld == null && ofNew != null) cb(ofNew, idx, null, "add");
				else if (ofOld != null && ofNew == null) cb(null, idx, ofOld, "delete");
				else if (isNotEqual(ofOld, ofNew)) cb(ofNew, idx, ofOld, "set");
			}
			return iterated(value ?? tg?.value, cb, options);
		}
		return name == null ? void 0 : tg[name];
	};
	return registeredIterated.getOrInsertComputed([tg, cb], () => {
		if (tg instanceof Set) return affected([observableBySet(tg), Symbol.iterator], cb, options);
		if (tg instanceof Map) return affected(tg, cb, options);
		if (hasValue(tg)) return affected(tg, $sub, options);
		if (Array.isArray(tg) && !(tg?.length == 2 && isKeyType(tg?.[1]) && isObservable(tg?.[0]))) return affected([tg, Symbol.iterator], cb, options);
		return affected(tg, cb, options);
	});
}
/** Remove a previously registered subscription. */
function unaffected(tg, cb) {
	return withPromise(tg, (target) => {
		const isPair = Array.isArray(target) && target?.length == 2 && ["object", "function"].indexOf(typeof target?.[0]) >= 0 && isKeyType(target?.[1]);
		const prop = isPair ? target?.[1] : null;
		target = isPair && prop != null ? target?.[0] ?? target : target;
		const unwrap = typeof target == "object" || typeof target == "function" ? target?.[$extractKey$] ?? target : target;
		(target?.[$registryKey$] ?? subscriptRegistry.get(unwrap))?.unaffected?.(cb, prop);
	});
}
//#endregion
//#region ../../modules/projects/object.ts/src/core/Assigned.ts
/**
* Higher-level composition helpers built on top of the primitive observer layer.
*
* This file provides conditional refs, collection-to-array adapters, duplex
* assignment/linking, and computed values that mirror changes back into refs.
*/
/** Switch reactively between two values based on a condition ref or value. */
var conditionalRef = (cond, ifTrue, ifFalse, behavior) => {
	if (isPrimitive(cond)) return cond ? ifTrue : ifFalse;
	const getTrue = () => {
		return ifTrue;
	};
	const getFalse = () => {
		return ifFalse;
	};
	const valueOf = (n) => {
		if (n != null) cond.value = hasValue(n) ? n?.value : n;
		return (hasValue(cond) ? cond?.value : cond) ? getTrue() : getFalse();
	};
	const r = observe({
		[$value]: valueOf(),
		[$behavior]: behavior,
		[Symbol?.toStringTag]() {
			return String(valueOf() ?? this[$value] ?? "") || "";
		},
		[Symbol?.toPrimitive](hint) {
			return tryParseByHint(valueOf() ?? this[$value], hint);
		},
		set value(v) {
			this[$value] = valueOf(v);
		},
		get value() {
			return this[$value] = valueOf() ?? this[$value];
		}
	});
	const usb = affected([cond, "value"], () => {
		const oldValue = r?.[$value];
		const value = valueOf();
		r[$value] = value;
		r?.[$trigger]?.({
			key: "value",
			value,
			oldValue,
			trigger: "manual"
		});
	});
	addToCallChain(r, Symbol.dispose, usb);
	return r;
};
/** Alias kept for the shorter public API name. */
var conditional = conditionalRef;
/** View a `Set` as a reactive array that stays synchronized with set membership. */
var observableBySet = (set) => {
	const obs = observe([]);
	obs.push(...Array.from(set?.values?.() || []));
	addToCallChain(obs, Symbol.dispose, affected(set, (value, _, old) => {
		if (isNotEqual(value, old)) if (old == null && value != null) obs.push(value);
		else if (old != null && value == null) {
			const idx = obs.indexOf(old);
			if (idx >= 0) obs.splice(idx, 1);
		} else {
			const idx = obs.indexOf(old);
			if (idx >= 0 && isNotEqual(obs[idx], value)) obs[idx] = value;
		}
	}));
	return obs;
};
/** Build a computed ref whose getter and optional setter are driven by a source subscription. */
var computed = (src, cb, behavior, prop = "value") => {
	const isACompute = typeof src?.[1] == "function" && src?.length == 2;
	const isAProp = (isKeyType(src?.[1]) || src?.[1] == Symbol.iterator) && src?.length == 2;
	let a_prop = isAProp && !isACompute ? src?.[1] : Array.isArray(src) ? null : prop;
	if (!isAProp && !isACompute) src = [isAProp ? src?.[0] : src, a_prop];
	if (isACompute) src[1] = a_prop;
	if (a_prop == null || isArrayInvalidKey(a_prop, src?.[0])) return;
	const cmp = (v) => {
		let oldValue = void 0;
		if (v != void 0) {
			oldValue = src[0][a_prop];
			src[0][a_prop] = v;
		}
		return cb?.(src?.[0]?.[a_prop], a_prop, oldValue);
	};
	const initial = cmp();
	const pendingInitial = isPromise(initial);
	const rf = observe({
		[$promise]: pendingInitial ? initial : void 0,
		[$value]: pendingInitial ? void 0 : initial,
		[$behavior]: behavior,
		[Symbol?.toStringTag]() {
			return String(cmp() ?? this[$value] ?? "") || "";
		},
		[Symbol?.toPrimitive](hint) {
			return tryParseByHint(cmp() ?? this[$value], hint);
		},
		set value(v) {
			this[$value] = cmp(v);
		},
		get value() {
			return this[$value] = cmp() ?? this[$value];
		}
	});
	const writeComputed = (value, trigger) => {
		if (isPromise(value)) return Promise.resolve(value).then((v) => {
			const oldValue = rf?.[$value];
			rf[$value] = v;
			rf?.[$trigger]?.({
				key: "value",
				value: v,
				oldValue,
				trigger: "resolved"
			});
			return v;
		});
		const oldValue = rf?.[$value];
		rf[$value] = value;
		rf?.[$trigger]?.({
			key: "value",
			value,
			oldValue,
			trigger
		});
		return value;
	};
	if (pendingInitial) writeComputed(initial, "resolved");
	const usb = affected([src?.[0] ?? src, a_prop ?? "value"], () => {
		writeComputed(cmp(), "manual");
	});
	addToCallChain(rf, Symbol.dispose, usb);
	return rf;
};
//#endregion
export { $triggerLess as C, $triggerControl as S, safe as _, effect as a, $originalKey$ as b, booleanRef as c, propRef as d, ref as f, deref as g, addToCallChain as h, affected as i, numberRef as l, $originalObjects$ as m, conditional as n, iterated as o, stringRef as p, DoubleWeakMap as r, unaffected as s, computed as t, observe as u, unwrap as v, $trigger as x, $affected as y };
