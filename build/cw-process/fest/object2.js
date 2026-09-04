import { p as objectAssign } from "./core2.js";
import { b as $originalKey$, m as $originalObjects$ } from "./object.js";
//#region ../../modules/projects/object.ts/src/wrap/AssignObject.ts
/**
* Proxy helper that forces property writes through `objectAssign`.
*
* WHY: some callers want an object that looks ordinary but still normalizes
* assignment semantics the same way the rest of the reactive stack does.
*/
/** Proxy handler that redirects `set` operations to the Fest assignment helper. */
var AssignObjectHandler = class {
	constructor() {}
	deleteProperty(target, name) {
		return Reflect.deleteProperty(target, name);
	}
	construct(target, args, newT) {
		return Reflect.construct(target, args, newT);
	}
	apply(target, ctx, args) {
		return Reflect.apply(target, ctx, args);
	}
	has(target, prop) {
		return Reflect.has(target, prop);
	}
	set(target, name, value) {
		objectAssign(target, value, name);
		return true;
	}
	get(target, name, ctx) {
		if (typeof name == "symbol") return target?.[name] ?? target;
		return Reflect.get(target, name, ctx);
	}
};
/** Wrap an object in an assignment-aware proxy once, preserving the original-object lookup table. */
var makeObjectAssignable = (obj) => {
	if (obj?.[$originalKey$] || $originalObjects$.has(obj)) return obj;
	const px = new Proxy(obj, new AssignObjectHandler());
	$originalObjects$.set(px, obj);
	return px;
};
//#endregion
export { makeObjectAssignable as t };
