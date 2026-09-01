import { a as __toCommonJS, n as __esmMin, r as __exportAll, t as __commonJSMin } from "../chunks/rolldown-runtime.js";
//#region ../../node_modules/underscore/modules/_setup.js
var VERSION, root, ArrayProto, ObjProto, SymbolProto, push, slice, toString, hasOwnProperty, supportsArrayBuffer, supportsDataView, nativeIsArray, nativeKeys, nativeCreate, nativeIsView, _isNaN, _isFinite, hasEnumBug, nonEnumerableProps, MAX_ARRAY_INDEX;
var init__setup = __esmMin((() => {
	VERSION = "1.13.8";
	root = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || Function("return this")() || {};
	ArrayProto = Array.prototype;
	ObjProto = Object.prototype;
	SymbolProto = typeof Symbol !== "undefined" ? Symbol.prototype : null;
	push = ArrayProto.push;
	slice = ArrayProto.slice;
	toString = ObjProto.toString;
	hasOwnProperty = ObjProto.hasOwnProperty;
	supportsArrayBuffer = typeof ArrayBuffer !== "undefined";
	supportsDataView = typeof DataView !== "undefined";
	nativeIsArray = Array.isArray;
	nativeKeys = Object.keys;
	nativeCreate = Object.create;
	nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;
	_isNaN = isNaN;
	_isFinite = isFinite;
	hasEnumBug = !{ toString: null }.propertyIsEnumerable("toString");
	nonEnumerableProps = [
		"valueOf",
		"isPrototypeOf",
		"toString",
		"propertyIsEnumerable",
		"hasOwnProperty",
		"toLocaleString"
	];
	MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
}));
//#endregion
//#region ../../node_modules/underscore/modules/restArguments.js
function restArguments(func, startIndex) {
	startIndex = startIndex == null ? func.length - 1 : +startIndex;
	return function() {
		var length = Math.max(arguments.length - startIndex, 0), rest = Array(length), index = 0;
		for (; index < length; index++) rest[index] = arguments[index + startIndex];
		switch (startIndex) {
			case 0: return func.call(this, rest);
			case 1: return func.call(this, arguments[0], rest);
			case 2: return func.call(this, arguments[0], arguments[1], rest);
		}
		var args = Array(startIndex + 1);
		for (index = 0; index < startIndex; index++) args[index] = arguments[index];
		args[startIndex] = rest;
		return func.apply(this, args);
	};
}
var init_restArguments = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/isObject.js
function isObject(obj) {
	var type = typeof obj;
	return type === "function" || type === "object" && !!obj;
}
var init_isObject = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/isNull.js
function isNull(obj) {
	return obj === null;
}
var init_isNull = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/isUndefined.js
function isUndefined(obj) {
	return obj === void 0;
}
var init_isUndefined = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/isBoolean.js
function isBoolean(obj) {
	return obj === true || obj === false || toString.call(obj) === "[object Boolean]";
}
var init_isBoolean = __esmMin((() => {
	init__setup();
}));
//#endregion
//#region ../../node_modules/underscore/modules/isElement.js
function isElement(obj) {
	return !!(obj && obj.nodeType === 1);
}
var init_isElement = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/_tagTester.js
function tagTester(name) {
	var tag = "[object " + name + "]";
	return function(obj) {
		return toString.call(obj) === tag;
	};
}
var init__tagTester = __esmMin((() => {
	init__setup();
}));
//#endregion
//#region ../../node_modules/underscore/modules/isString.js
var isString_default;
var init_isString = __esmMin((() => {
	init__tagTester();
	isString_default = tagTester("String");
}));
//#endregion
//#region ../../node_modules/underscore/modules/isNumber.js
var isNumber_default;
var init_isNumber = __esmMin((() => {
	init__tagTester();
	isNumber_default = tagTester("Number");
}));
//#endregion
//#region ../../node_modules/underscore/modules/isDate.js
var isDate_default;
var init_isDate = __esmMin((() => {
	init__tagTester();
	isDate_default = tagTester("Date");
}));
//#endregion
//#region ../../node_modules/underscore/modules/isRegExp.js
var isRegExp_default;
var init_isRegExp = __esmMin((() => {
	init__tagTester();
	isRegExp_default = tagTester("RegExp");
}));
//#endregion
//#region ../../node_modules/underscore/modules/isError.js
var isError_default;
var init_isError = __esmMin((() => {
	init__tagTester();
	isError_default = tagTester("Error");
}));
//#endregion
//#region ../../node_modules/underscore/modules/isSymbol.js
var isSymbol_default;
var init_isSymbol = __esmMin((() => {
	init__tagTester();
	isSymbol_default = tagTester("Symbol");
}));
//#endregion
//#region ../../node_modules/underscore/modules/isArrayBuffer.js
var isArrayBuffer_default;
var init_isArrayBuffer = __esmMin((() => {
	init__tagTester();
	isArrayBuffer_default = tagTester("ArrayBuffer");
}));
//#endregion
//#region ../../node_modules/underscore/modules/isFunction.js
var isFunction, nodelist, isFunction_default;
var init_isFunction = __esmMin((() => {
	init__tagTester();
	init__setup();
	isFunction = tagTester("Function");
	nodelist = root.document && root.document.childNodes;
	if (typeof /./ != "function" && typeof Int8Array != "object" && typeof nodelist != "function") isFunction = function(obj) {
		return typeof obj == "function" || false;
	};
	isFunction_default = isFunction;
}));
//#endregion
//#region ../../node_modules/underscore/modules/_hasObjectTag.js
var _hasObjectTag_default;
var init__hasObjectTag = __esmMin((() => {
	init__tagTester();
	_hasObjectTag_default = tagTester("Object");
}));
//#endregion
//#region ../../node_modules/underscore/modules/_stringTagBug.js
var hasDataViewBug, isIE11;
var init__stringTagBug = __esmMin((() => {
	init__setup();
	init__hasObjectTag();
	hasDataViewBug = supportsDataView && (!/\[native code\]/.test(String(DataView)) || _hasObjectTag_default(/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8))));
	isIE11 = typeof Map !== "undefined" && _hasObjectTag_default(/* @__PURE__ */ new Map());
}));
//#endregion
//#region ../../node_modules/underscore/modules/isDataView.js
function alternateIsDataView(obj) {
	return obj != null && isFunction_default(obj.getInt8) && isArrayBuffer_default(obj.buffer);
}
var isDataView, isDataView_default;
var init_isDataView = __esmMin((() => {
	init__tagTester();
	init_isFunction();
	init_isArrayBuffer();
	init__stringTagBug();
	isDataView = tagTester("DataView");
	isDataView_default = hasDataViewBug ? alternateIsDataView : isDataView;
}));
//#endregion
//#region ../../node_modules/underscore/modules/isArray.js
var isArray_default;
var init_isArray = __esmMin((() => {
	init__setup();
	init__tagTester();
	isArray_default = nativeIsArray || tagTester("Array");
}));
//#endregion
//#region ../../node_modules/underscore/modules/_has.js
function has$1(obj, key) {
	return obj != null && hasOwnProperty.call(obj, key);
}
var init__has = __esmMin((() => {
	init__setup();
}));
//#endregion
//#region ../../node_modules/underscore/modules/isArguments.js
var isArguments, isArguments_default;
var init_isArguments = __esmMin((() => {
	init__tagTester();
	init__has();
	isArguments = tagTester("Arguments");
	(function() {
		if (!isArguments(arguments)) isArguments = function(obj) {
			return has$1(obj, "callee");
		};
	})();
	isArguments_default = isArguments;
}));
//#endregion
//#region ../../node_modules/underscore/modules/isFinite.js
function isFinite$1(obj) {
	return !isSymbol_default(obj) && _isFinite(obj) && !isNaN(parseFloat(obj));
}
var init_isFinite = __esmMin((() => {
	init__setup();
	init_isSymbol();
}));
//#endregion
//#region ../../node_modules/underscore/modules/isNaN.js
function isNaN$1(obj) {
	return isNumber_default(obj) && _isNaN(obj);
}
var init_isNaN = __esmMin((() => {
	init__setup();
	init_isNumber();
}));
//#endregion
//#region ../../node_modules/underscore/modules/constant.js
function constant(value) {
	return function() {
		return value;
	};
}
var init_constant = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/_createSizePropertyCheck.js
function createSizePropertyCheck(getSizeProperty) {
	return function(collection) {
		var sizeProperty = getSizeProperty(collection);
		return typeof sizeProperty == "number" && sizeProperty >= 0 && sizeProperty <= MAX_ARRAY_INDEX;
	};
}
var init__createSizePropertyCheck = __esmMin((() => {
	init__setup();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_shallowProperty.js
function shallowProperty(key) {
	return function(obj) {
		return obj == null ? void 0 : obj[key];
	};
}
var init__shallowProperty = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/_getByteLength.js
var _getByteLength_default;
var init__getByteLength = __esmMin((() => {
	init__shallowProperty();
	_getByteLength_default = shallowProperty("byteLength");
}));
//#endregion
//#region ../../node_modules/underscore/modules/_isBufferLike.js
var _isBufferLike_default;
var init__isBufferLike = __esmMin((() => {
	init__createSizePropertyCheck();
	init__getByteLength();
	_isBufferLike_default = createSizePropertyCheck(_getByteLength_default);
}));
//#endregion
//#region ../../node_modules/underscore/modules/isTypedArray.js
function isTypedArray(obj) {
	return nativeIsView ? nativeIsView(obj) && !isDataView_default(obj) : _isBufferLike_default(obj) && typedArrayPattern.test(toString.call(obj));
}
var typedArrayPattern, isTypedArray_default;
var init_isTypedArray = __esmMin((() => {
	init__setup();
	init_isDataView();
	init_constant();
	init__isBufferLike();
	typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
	isTypedArray_default = supportsArrayBuffer ? isTypedArray : constant(false);
}));
//#endregion
//#region ../../node_modules/underscore/modules/_getLength.js
var _getLength_default;
var init__getLength = __esmMin((() => {
	init__shallowProperty();
	_getLength_default = shallowProperty("length");
}));
//#endregion
//#region ../../node_modules/underscore/modules/_collectNonEnumProps.js
function emulatedSet(keys) {
	var hash = {};
	for (var l = keys.length, i = 0; i < l; ++i) hash[keys[i]] = true;
	return {
		contains: function(key) {
			return hash[key] === true;
		},
		push: function(key) {
			hash[key] = true;
			return keys.push(key);
		}
	};
}
function collectNonEnumProps(obj, keys) {
	keys = emulatedSet(keys);
	var nonEnumIdx = nonEnumerableProps.length;
	var constructor = obj.constructor;
	var proto = isFunction_default(constructor) && constructor.prototype || ObjProto;
	var prop = "constructor";
	if (has$1(obj, prop) && !keys.contains(prop)) keys.push(prop);
	while (nonEnumIdx--) {
		prop = nonEnumerableProps[nonEnumIdx];
		if (prop in obj && obj[prop] !== proto[prop] && !keys.contains(prop)) keys.push(prop);
	}
}
var init__collectNonEnumProps = __esmMin((() => {
	init__setup();
	init_isFunction();
	init__has();
}));
//#endregion
//#region ../../node_modules/underscore/modules/keys.js
function keys(obj) {
	if (!isObject(obj)) return [];
	if (nativeKeys) return nativeKeys(obj);
	var keys = [];
	for (var key in obj) if (has$1(obj, key)) keys.push(key);
	if (hasEnumBug) collectNonEnumProps(obj, keys);
	return keys;
}
var init_keys = __esmMin((() => {
	init_isObject();
	init__setup();
	init__has();
	init__collectNonEnumProps();
}));
//#endregion
//#region ../../node_modules/underscore/modules/isEmpty.js
function isEmpty(obj) {
	if (obj == null) return true;
	var length = _getLength_default(obj);
	if (typeof length == "number" && (isArray_default(obj) || isString_default(obj) || isArguments_default(obj))) return length === 0;
	return _getLength_default(keys(obj)) === 0;
}
var init_isEmpty = __esmMin((() => {
	init__getLength();
	init_isArray();
	init_isString();
	init_isArguments();
	init_keys();
}));
//#endregion
//#region ../../node_modules/underscore/modules/isMatch.js
function isMatch(object, attrs) {
	var _keys = keys(attrs), length = _keys.length;
	if (object == null) return !length;
	var obj = Object(object);
	for (var i = 0; i < length; i++) {
		var key = _keys[i];
		if (attrs[key] !== obj[key] || !(key in obj)) return false;
	}
	return true;
}
var init_isMatch = __esmMin((() => {
	init_keys();
}));
//#endregion
//#region ../../node_modules/underscore/modules/underscore.js
function _$1(obj) {
	if (obj instanceof _$1) return obj;
	if (!(this instanceof _$1)) return new _$1(obj);
	this._wrapped = obj;
}
var init_underscore = __esmMin((() => {
	init__setup();
	_$1.VERSION = VERSION;
	_$1.prototype.value = function() {
		return this._wrapped;
	};
	_$1.prototype.valueOf = _$1.prototype.toJSON = _$1.prototype.value;
	_$1.prototype.toString = function() {
		return String(this._wrapped);
	};
}));
//#endregion
//#region ../../node_modules/underscore/modules/_toBufferView.js
function toBufferView(bufferSource) {
	return new Uint8Array(bufferSource.buffer || bufferSource, bufferSource.byteOffset || 0, _getByteLength_default(bufferSource));
}
var init__toBufferView = __esmMin((() => {
	init__getByteLength();
}));
//#endregion
//#region ../../node_modules/underscore/modules/isEqual.js
function isEqual(a, b) {
	var todo = [{
		a,
		b
	}];
	var aStack = [], bStack = [];
	while (todo.length) {
		var frame = todo.pop();
		if (frame === true) {
			aStack.pop();
			bStack.pop();
			continue;
		}
		a = frame.a;
		b = frame.b;
		if (a === b) {
			if (a !== 0 || 1 / a === 1 / b) continue;
			return false;
		}
		if (a == null || b == null) return false;
		if (a !== a) {
			if (b !== b) continue;
			return false;
		}
		var type = typeof a;
		if (type !== "function" && type !== "object" && typeof b != "object") return false;
		if (a instanceof _$1) a = a._wrapped;
		if (b instanceof _$1) b = b._wrapped;
		var className = toString.call(a);
		if (className !== toString.call(b)) return false;
		if (hasDataViewBug && className == "[object Object]" && isDataView_default(a)) {
			if (!isDataView_default(b)) return false;
			className = tagDataView;
		}
		switch (className) {
			case "[object RegExp]":
			case "[object String]":
				if ("" + a === "" + b) continue;
				return false;
			case "[object Number]":
				todo.push({
					a: +a,
					b: +b
				});
				continue;
			case "[object Date]":
			case "[object Boolean]":
				if (+a === +b) continue;
				return false;
			case "[object Symbol]":
				if (SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b)) continue;
				return false;
			case "[object ArrayBuffer]":
			case tagDataView:
				todo.push({
					a: toBufferView(a),
					b: toBufferView(b)
				});
				continue;
		}
		var areArrays = className === "[object Array]";
		if (!areArrays && isTypedArray_default(a)) {
			if (_getByteLength_default(a) !== _getByteLength_default(b)) return false;
			if (a.buffer === b.buffer && a.byteOffset === b.byteOffset) continue;
			areArrays = true;
		}
		if (!areArrays) {
			if (typeof a != "object" || typeof b != "object") return false;
			var aCtor = a.constructor, bCtor = b.constructor;
			if (aCtor !== bCtor && !(isFunction_default(aCtor) && aCtor instanceof aCtor && isFunction_default(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) return false;
		}
		var length = aStack.length;
		while (length--) if (aStack[length] === a) {
			if (bStack[length] === b) break;
			return false;
		}
		if (length >= 0) continue;
		aStack.push(a);
		bStack.push(b);
		todo.push(true);
		if (areArrays) {
			length = a.length;
			if (length !== b.length) return false;
			while (length--) todo.push({
				a: a[length],
				b: b[length]
			});
		} else {
			var _keys = keys(a), key;
			length = _keys.length;
			if (keys(b).length !== length) return false;
			while (length--) {
				key = _keys[length];
				if (!has$1(b, key)) return false;
				todo.push({
					a: a[key],
					b: b[key]
				});
			}
		}
	}
	return true;
}
var tagDataView;
var init_isEqual = __esmMin((() => {
	init_underscore();
	init__setup();
	init__getByteLength();
	init_isTypedArray();
	init_isFunction();
	init__stringTagBug();
	init_isDataView();
	init_keys();
	init__has();
	init__toBufferView();
	tagDataView = "[object DataView]";
}));
//#endregion
//#region ../../node_modules/underscore/modules/allKeys.js
function allKeys(obj) {
	if (!isObject(obj)) return [];
	var keys = [];
	for (var key in obj) keys.push(key);
	if (hasEnumBug) collectNonEnumProps(obj, keys);
	return keys;
}
var init_allKeys = __esmMin((() => {
	init_isObject();
	init__setup();
	init__collectNonEnumProps();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_methodFingerprint.js
function ie11fingerprint(methods) {
	var length = _getLength_default(methods);
	return function(obj) {
		if (obj == null) return false;
		var keys = allKeys(obj);
		if (_getLength_default(keys)) return false;
		for (var i = 0; i < length; i++) if (!isFunction_default(obj[methods[i]])) return false;
		return methods !== weakMapMethods || !isFunction_default(obj[forEachName]);
	};
}
var forEachName, hasName, commonInit, mapTail, mapMethods, weakMapMethods, setMethods;
var init__methodFingerprint = __esmMin((() => {
	init__getLength();
	init_isFunction();
	init_allKeys();
	forEachName = "forEach";
	hasName = "has";
	commonInit = ["clear", "delete"];
	mapTail = [
		"get",
		hasName,
		"set"
	];
	mapMethods = commonInit.concat(forEachName, mapTail);
	weakMapMethods = commonInit.concat(mapTail);
	setMethods = ["add"].concat(commonInit, forEachName, hasName);
}));
//#endregion
//#region ../../node_modules/underscore/modules/isMap.js
var isMap_default;
var init_isMap = __esmMin((() => {
	init__tagTester();
	init__stringTagBug();
	init__methodFingerprint();
	isMap_default = isIE11 ? ie11fingerprint(mapMethods) : tagTester("Map");
}));
//#endregion
//#region ../../node_modules/underscore/modules/isWeakMap.js
var isWeakMap_default;
var init_isWeakMap = __esmMin((() => {
	init__tagTester();
	init__stringTagBug();
	init__methodFingerprint();
	isWeakMap_default = isIE11 ? ie11fingerprint(weakMapMethods) : tagTester("WeakMap");
}));
//#endregion
//#region ../../node_modules/underscore/modules/isSet.js
var isSet_default;
var init_isSet = __esmMin((() => {
	init__tagTester();
	init__stringTagBug();
	init__methodFingerprint();
	isSet_default = isIE11 ? ie11fingerprint(setMethods) : tagTester("Set");
}));
//#endregion
//#region ../../node_modules/underscore/modules/isWeakSet.js
var isWeakSet_default;
var init_isWeakSet = __esmMin((() => {
	init__tagTester();
	isWeakSet_default = tagTester("WeakSet");
}));
//#endregion
//#region ../../node_modules/underscore/modules/values.js
function values(obj) {
	var _keys = keys(obj);
	var length = _keys.length;
	var values = Array(length);
	for (var i = 0; i < length; i++) values[i] = obj[_keys[i]];
	return values;
}
var init_values = __esmMin((() => {
	init_keys();
}));
//#endregion
//#region ../../node_modules/underscore/modules/pairs.js
function pairs(obj) {
	var _keys = keys(obj);
	var length = _keys.length;
	var pairs = Array(length);
	for (var i = 0; i < length; i++) pairs[i] = [_keys[i], obj[_keys[i]]];
	return pairs;
}
var init_pairs = __esmMin((() => {
	init_keys();
}));
//#endregion
//#region ../../node_modules/underscore/modules/invert.js
function invert(obj) {
	var result = {};
	var _keys = keys(obj);
	for (var i = 0, length = _keys.length; i < length; i++) result[obj[_keys[i]]] = _keys[i];
	return result;
}
var init_invert = __esmMin((() => {
	init_keys();
}));
//#endregion
//#region ../../node_modules/underscore/modules/functions.js
function functions(obj) {
	var names = [];
	for (var key in obj) if (isFunction_default(obj[key])) names.push(key);
	return names.sort();
}
var init_functions = __esmMin((() => {
	init_isFunction();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_createAssigner.js
function createAssigner(keysFunc, defaults) {
	return function(obj) {
		var length = arguments.length;
		if (defaults) obj = Object(obj);
		if (length < 2 || obj == null) return obj;
		for (var index = 1; index < length; index++) {
			var source = arguments[index], keys = keysFunc(source), l = keys.length;
			for (var i = 0; i < l; i++) {
				var key = keys[i];
				if (!defaults || obj[key] === void 0) obj[key] = source[key];
			}
		}
		return obj;
	};
}
var init__createAssigner = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/extend.js
var extend_default;
var init_extend = __esmMin((() => {
	init__createAssigner();
	init_allKeys();
	extend_default = createAssigner(allKeys);
}));
//#endregion
//#region ../../node_modules/underscore/modules/extendOwn.js
var extendOwn_default;
var init_extendOwn = __esmMin((() => {
	init__createAssigner();
	init_keys();
	extendOwn_default = createAssigner(keys);
}));
//#endregion
//#region ../../node_modules/underscore/modules/defaults.js
var defaults_default;
var init_defaults = __esmMin((() => {
	init__createAssigner();
	init_allKeys();
	defaults_default = createAssigner(allKeys, true);
}));
//#endregion
//#region ../../node_modules/underscore/modules/_baseCreate.js
function ctor() {
	return function() {};
}
function baseCreate(prototype) {
	if (!isObject(prototype)) return {};
	if (nativeCreate) return nativeCreate(prototype);
	var Ctor = ctor();
	Ctor.prototype = prototype;
	var result = new Ctor();
	Ctor.prototype = null;
	return result;
}
var init__baseCreate = __esmMin((() => {
	init_isObject();
	init__setup();
}));
//#endregion
//#region ../../node_modules/underscore/modules/create.js
function create(prototype, props) {
	var result = baseCreate(prototype);
	if (props) extendOwn_default(result, props);
	return result;
}
var init_create = __esmMin((() => {
	init__baseCreate();
	init_extendOwn();
}));
//#endregion
//#region ../../node_modules/underscore/modules/clone.js
function clone(obj) {
	if (!isObject(obj)) return obj;
	return isArray_default(obj) ? obj.slice() : extend_default({}, obj);
}
var init_clone = __esmMin((() => {
	init_isObject();
	init_isArray();
	init_extend();
}));
//#endregion
//#region ../../node_modules/underscore/modules/tap.js
function tap(obj, interceptor) {
	interceptor(obj);
	return obj;
}
var init_tap = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/toPath.js
function toPath$1(path) {
	return isArray_default(path) ? path : [path];
}
var init_toPath = __esmMin((() => {
	init_underscore();
	init_isArray();
	_$1.toPath = toPath$1;
}));
//#endregion
//#region ../../node_modules/underscore/modules/_toPath.js
function toPath(path) {
	return _$1.toPath(path);
}
var init__toPath = __esmMin((() => {
	init_underscore();
	init_toPath();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_deepGet.js
function deepGet(obj, path) {
	var length = path.length;
	for (var i = 0; i < length; i++) {
		if (obj == null) return void 0;
		obj = obj[path[i]];
	}
	return length ? obj : void 0;
}
var init__deepGet = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/get.js
function get(object, path, defaultValue) {
	var value = deepGet(object, toPath(path));
	return isUndefined(value) ? defaultValue : value;
}
var init_get = __esmMin((() => {
	init__toPath();
	init__deepGet();
	init_isUndefined();
}));
//#endregion
//#region ../../node_modules/underscore/modules/has.js
function has(obj, path) {
	path = toPath(path);
	var length = path.length;
	for (var i = 0; i < length; i++) {
		var key = path[i];
		if (!has$1(obj, key)) return false;
		obj = obj[key];
	}
	return !!length;
}
var init_has = __esmMin((() => {
	init__has();
	init__toPath();
}));
//#endregion
//#region ../../node_modules/underscore/modules/identity.js
function identity(value) {
	return value;
}
var init_identity = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/matcher.js
function matcher(attrs) {
	attrs = extendOwn_default({}, attrs);
	return function(obj) {
		return isMatch(obj, attrs);
	};
}
var init_matcher = __esmMin((() => {
	init_extendOwn();
	init_isMatch();
}));
//#endregion
//#region ../../node_modules/underscore/modules/property.js
function property(path) {
	path = toPath(path);
	return function(obj) {
		return deepGet(obj, path);
	};
}
var init_property = __esmMin((() => {
	init__deepGet();
	init__toPath();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_optimizeCb.js
function optimizeCb(func, context, argCount) {
	if (context === void 0) return func;
	switch (argCount == null ? 3 : argCount) {
		case 1: return function(value) {
			return func.call(context, value);
		};
		case 3: return function(value, index, collection) {
			return func.call(context, value, index, collection);
		};
		case 4: return function(accumulator, value, index, collection) {
			return func.call(context, accumulator, value, index, collection);
		};
	}
	return function() {
		return func.apply(context, arguments);
	};
}
var init__optimizeCb = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/_baseIteratee.js
function baseIteratee(value, context, argCount) {
	if (value == null) return identity;
	if (isFunction_default(value)) return optimizeCb(value, context, argCount);
	if (isObject(value) && !isArray_default(value)) return matcher(value);
	return property(value);
}
var init__baseIteratee = __esmMin((() => {
	init_identity();
	init_isFunction();
	init_isObject();
	init_isArray();
	init_matcher();
	init_property();
	init__optimizeCb();
}));
//#endregion
//#region ../../node_modules/underscore/modules/iteratee.js
function iteratee(value, context) {
	return baseIteratee(value, context, Infinity);
}
var init_iteratee = __esmMin((() => {
	init_underscore();
	init__baseIteratee();
	_$1.iteratee = iteratee;
}));
//#endregion
//#region ../../node_modules/underscore/modules/_cb.js
function cb(value, context, argCount) {
	if (_$1.iteratee !== iteratee) return _$1.iteratee(value, context);
	return baseIteratee(value, context, argCount);
}
var init__cb = __esmMin((() => {
	init_underscore();
	init__baseIteratee();
	init_iteratee();
}));
//#endregion
//#region ../../node_modules/underscore/modules/mapObject.js
function mapObject(obj, iteratee, context) {
	iteratee = cb(iteratee, context);
	var _keys = keys(obj), length = _keys.length, results = {};
	for (var index = 0; index < length; index++) {
		var currentKey = _keys[index];
		results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	}
	return results;
}
var init_mapObject = __esmMin((() => {
	init__cb();
	init_keys();
}));
//#endregion
//#region ../../node_modules/underscore/modules/noop.js
function noop() {}
var init_noop = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/propertyOf.js
function propertyOf(obj) {
	if (obj == null) return noop;
	return function(path) {
		return get(obj, path);
	};
}
var init_propertyOf = __esmMin((() => {
	init_noop();
	init_get();
}));
//#endregion
//#region ../../node_modules/underscore/modules/times.js
function times(n, iteratee, context) {
	var accum = Array(Math.max(0, n));
	iteratee = optimizeCb(iteratee, context, 1);
	for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	return accum;
}
var init_times = __esmMin((() => {
	init__optimizeCb();
}));
//#endregion
//#region ../../node_modules/underscore/modules/random.js
function random(min, max) {
	if (max == null) {
		max = min;
		min = 0;
	}
	return min + Math.floor(Math.random() * (max - min + 1));
}
var init_random = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/now.js
var now_default;
var init_now = __esmMin((() => {
	now_default = Date.now || function() {
		return (/* @__PURE__ */ new Date()).getTime();
	};
}));
//#endregion
//#region ../../node_modules/underscore/modules/_createEscaper.js
function createEscaper(map) {
	var escaper = function(match) {
		return map[match];
	};
	var source = "(?:" + keys(map).join("|") + ")";
	var testRegexp = RegExp(source);
	var replaceRegexp = RegExp(source, "g");
	return function(string) {
		string = string == null ? "" : "" + string;
		return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	};
}
var init__createEscaper = __esmMin((() => {
	init_keys();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_escapeMap.js
var _escapeMap_default;
var init__escapeMap = __esmMin((() => {
	_escapeMap_default = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&#x27;",
		"`": "&#x60;"
	};
}));
//#endregion
//#region ../../node_modules/underscore/modules/escape.js
var escape_default;
var init_escape = __esmMin((() => {
	init__createEscaper();
	init__escapeMap();
	escape_default = createEscaper(_escapeMap_default);
}));
//#endregion
//#region ../../node_modules/underscore/modules/_unescapeMap.js
var _unescapeMap_default;
var init__unescapeMap = __esmMin((() => {
	init_invert();
	init__escapeMap();
	_unescapeMap_default = invert(_escapeMap_default);
}));
//#endregion
//#region ../../node_modules/underscore/modules/unescape.js
var unescape_default;
var init_unescape = __esmMin((() => {
	init__createEscaper();
	init__unescapeMap();
	unescape_default = createEscaper(_unescapeMap_default);
}));
//#endregion
//#region ../../node_modules/underscore/modules/templateSettings.js
var templateSettings_default;
var init_templateSettings = __esmMin((() => {
	init_underscore();
	templateSettings_default = _$1.templateSettings = {
		evaluate: /<%([\s\S]+?)%>/g,
		interpolate: /<%=([\s\S]+?)%>/g,
		escape: /<%-([\s\S]+?)%>/g
	};
}));
//#endregion
//#region ../../node_modules/underscore/modules/template.js
function escapeChar(match) {
	return "\\" + escapes[match];
}
function template(text, settings, oldSettings) {
	if (!settings && oldSettings) settings = oldSettings;
	settings = defaults_default({}, settings, _$1.templateSettings);
	var matcher = RegExp([
		(settings.escape || noMatch).source,
		(settings.interpolate || noMatch).source,
		(settings.evaluate || noMatch).source
	].join("|") + "|$", "g");
	var index = 0;
	var source = "__p+='";
	text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
		source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
		index = offset + match.length;
		if (escape) source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
		else if (interpolate) source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
		else if (evaluate) source += "';\n" + evaluate + "\n__p+='";
		return match;
	});
	source += "';\n";
	var argument = settings.variable;
	if (argument) {
		if (!bareIdentifier.test(argument)) throw new Error("variable is not a bare identifier: " + argument);
	} else {
		source = "with(obj||{}){\n" + source + "}\n";
		argument = "obj";
	}
	source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
	var render;
	try {
		render = new Function(argument, "_", source);
	} catch (e) {
		e.source = source;
		throw e;
	}
	var template = function(data) {
		return render.call(this, data, _$1);
	};
	template.source = "function(" + argument + "){\n" + source + "}";
	return template;
}
var noMatch, escapes, escapeRegExp, bareIdentifier;
var init_template = __esmMin((() => {
	init_defaults();
	init_underscore();
	init_templateSettings();
	noMatch = /(.)^/;
	escapes = {
		"'": "'",
		"\\": "\\",
		"\r": "r",
		"\n": "n",
		"\u2028": "u2028",
		"\u2029": "u2029"
	};
	escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
	bareIdentifier = /^\s*(\w|\$)+\s*$/;
}));
//#endregion
//#region ../../node_modules/underscore/modules/result.js
function result(obj, path, fallback) {
	path = toPath(path);
	var length = path.length;
	if (!length) return isFunction_default(fallback) ? fallback.call(obj) : fallback;
	for (var i = 0; i < length; i++) {
		var prop = obj == null ? void 0 : obj[path[i]];
		if (prop === void 0) {
			prop = fallback;
			i = length;
		}
		obj = isFunction_default(prop) ? prop.call(obj) : prop;
	}
	return obj;
}
var init_result = __esmMin((() => {
	init_isFunction();
	init__toPath();
}));
//#endregion
//#region ../../node_modules/underscore/modules/uniqueId.js
function uniqueId(prefix) {
	var id = ++idCounter + "";
	return prefix ? prefix + id : id;
}
var idCounter;
var init_uniqueId = __esmMin((() => {
	idCounter = 0;
}));
//#endregion
//#region ../../node_modules/underscore/modules/chain.js
function chain(obj) {
	var instance = _$1(obj);
	instance._chain = true;
	return instance;
}
var init_chain = __esmMin((() => {
	init_underscore();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_executeBound.js
function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
	if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	var self = baseCreate(sourceFunc.prototype);
	var result = sourceFunc.apply(self, args);
	if (isObject(result)) return result;
	return self;
}
var init__executeBound = __esmMin((() => {
	init__baseCreate();
	init_isObject();
}));
//#endregion
//#region ../../node_modules/underscore/modules/partial.js
var partial;
var init_partial = __esmMin((() => {
	init_restArguments();
	init__executeBound();
	init_underscore();
	partial = restArguments(function(func, boundArgs) {
		var placeholder = partial.placeholder;
		var bound = function() {
			var position = 0, length = boundArgs.length;
			var args = Array(length);
			for (var i = 0; i < length; i++) args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
			while (position < arguments.length) args.push(arguments[position++]);
			return executeBound(func, bound, this, this, args);
		};
		return bound;
	});
	partial.placeholder = _$1;
}));
//#endregion
//#region ../../node_modules/underscore/modules/bind.js
var bind_default;
var init_bind = __esmMin((() => {
	init_restArguments();
	init_isFunction();
	init__executeBound();
	bind_default = restArguments(function(func, context, args) {
		if (!isFunction_default(func)) throw new TypeError("Bind must be called on a function");
		var bound = restArguments(function(callArgs) {
			return executeBound(func, bound, context, this, args.concat(callArgs));
		});
		return bound;
	});
}));
//#endregion
//#region ../../node_modules/underscore/modules/_isArrayLike.js
var _isArrayLike_default;
var init__isArrayLike = __esmMin((() => {
	init__createSizePropertyCheck();
	init__getLength();
	_isArrayLike_default = createSizePropertyCheck(_getLength_default);
}));
//#endregion
//#region ../../node_modules/underscore/modules/_flatten.js
function flatten$1(input, depth, strict) {
	if (!depth && depth !== 0) depth = Infinity;
	var output = [], idx = 0, i = 0, length = _getLength_default(input) || 0, stack = [];
	while (true) {
		if (i >= length) {
			if (!stack.length) break;
			var frame = stack.pop();
			i = frame.i;
			input = frame.v;
			length = _getLength_default(input);
			continue;
		}
		var value = input[i++];
		if (stack.length >= depth) output[idx++] = value;
		else if (_isArrayLike_default(value) && (isArray_default(value) || isArguments_default(value))) {
			stack.push({
				i,
				v: input
			});
			i = 0;
			input = value;
			length = _getLength_default(input);
		} else if (!strict) output[idx++] = value;
	}
	return output;
}
var init__flatten = __esmMin((() => {
	init__getLength();
	init__isArrayLike();
	init_isArray();
	init_isArguments();
}));
//#endregion
//#region ../../node_modules/underscore/modules/bindAll.js
var bindAll_default;
var init_bindAll = __esmMin((() => {
	init_restArguments();
	init__flatten();
	init_bind();
	bindAll_default = restArguments(function(obj, keys) {
		keys = flatten$1(keys, false, false);
		var index = keys.length;
		if (index < 1) throw new Error("bindAll must be passed function names");
		while (index--) {
			var key = keys[index];
			obj[key] = bind_default(obj[key], obj);
		}
		return obj;
	});
}));
//#endregion
//#region ../../node_modules/underscore/modules/memoize.js
function memoize(func, hasher) {
	var memoize = function(key) {
		var cache = memoize.cache;
		var address = "" + (hasher ? hasher.apply(this, arguments) : key);
		if (!has$1(cache, address)) cache[address] = func.apply(this, arguments);
		return cache[address];
	};
	memoize.cache = {};
	return memoize;
}
var init_memoize = __esmMin((() => {
	init__has();
}));
//#endregion
//#region ../../node_modules/underscore/modules/delay.js
var delay_default;
var init_delay = __esmMin((() => {
	init_restArguments();
	delay_default = restArguments(function(func, wait, args) {
		return setTimeout(function() {
			return func.apply(null, args);
		}, wait);
	});
}));
//#endregion
//#region ../../node_modules/underscore/modules/defer.js
var defer_default;
var init_defer = __esmMin((() => {
	init_partial();
	init_delay();
	init_underscore();
	defer_default = partial(delay_default, _$1, 1);
}));
//#endregion
//#region ../../node_modules/underscore/modules/throttle.js
function throttle(func, wait, options) {
	var timeout, context, args, result;
	var previous = 0;
	if (!options) options = {};
	var later = function() {
		previous = options.leading === false ? 0 : now_default();
		timeout = null;
		result = func.apply(context, args);
		if (!timeout) context = args = null;
	};
	var throttled = function() {
		var _now = now_default();
		if (!previous && options.leading === false) previous = _now;
		var remaining = wait - (_now - previous);
		context = this;
		args = arguments;
		if (remaining <= 0 || remaining > wait) {
			if (timeout) {
				clearTimeout(timeout);
				timeout = null;
			}
			previous = _now;
			result = func.apply(context, args);
			if (!timeout) context = args = null;
		} else if (!timeout && options.trailing !== false) timeout = setTimeout(later, remaining);
		return result;
	};
	throttled.cancel = function() {
		clearTimeout(timeout);
		previous = 0;
		timeout = context = args = null;
	};
	return throttled;
}
var init_throttle = __esmMin((() => {
	init_now();
}));
//#endregion
//#region ../../node_modules/underscore/modules/debounce.js
function debounce(func, wait, immediate) {
	var timeout, previous, args, result, context;
	var later = function() {
		var passed = now_default() - previous;
		if (wait > passed) timeout = setTimeout(later, wait - passed);
		else {
			timeout = null;
			if (!immediate) result = func.apply(context, args);
			if (!timeout) args = context = null;
		}
	};
	var debounced = restArguments(function(_args) {
		context = this;
		args = _args;
		previous = now_default();
		if (!timeout) {
			timeout = setTimeout(later, wait);
			if (immediate) result = func.apply(context, args);
		}
		return result;
	});
	debounced.cancel = function() {
		clearTimeout(timeout);
		timeout = args = context = null;
	};
	return debounced;
}
var init_debounce = __esmMin((() => {
	init_restArguments();
	init_now();
}));
//#endregion
//#region ../../node_modules/underscore/modules/wrap.js
function wrap(func, wrapper) {
	return partial(wrapper, func);
}
var init_wrap = __esmMin((() => {
	init_partial();
}));
//#endregion
//#region ../../node_modules/underscore/modules/negate.js
function negate(predicate) {
	return function() {
		return !predicate.apply(this, arguments);
	};
}
var init_negate = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/compose.js
function compose() {
	var args = arguments;
	var start = args.length - 1;
	return function() {
		var i = start;
		var result = args[start].apply(this, arguments);
		while (i--) result = args[i].call(this, result);
		return result;
	};
}
var init_compose = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/after.js
function after(times, func) {
	return function() {
		if (--times < 1) return func.apply(this, arguments);
	};
}
var init_after = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/before.js
function before(times, func) {
	var memo;
	return function() {
		if (--times > 0) memo = func.apply(this, arguments);
		if (times <= 1) func = null;
		return memo;
	};
}
var init_before = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/once.js
var once_default;
var init_once = __esmMin((() => {
	init_partial();
	init_before();
	once_default = partial(before, 2);
}));
//#endregion
//#region ../../node_modules/underscore/modules/findKey.js
function findKey(obj, predicate, context) {
	predicate = cb(predicate, context);
	var _keys = keys(obj), key;
	for (var i = 0, length = _keys.length; i < length; i++) {
		key = _keys[i];
		if (predicate(obj[key], key, obj)) return key;
	}
}
var init_findKey = __esmMin((() => {
	init__cb();
	init_keys();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_createPredicateIndexFinder.js
function createPredicateIndexFinder(dir) {
	return function(array, predicate, context) {
		predicate = cb(predicate, context);
		var length = _getLength_default(array);
		var index = dir > 0 ? 0 : length - 1;
		for (; index >= 0 && index < length; index += dir) if (predicate(array[index], index, array)) return index;
		return -1;
	};
}
var init__createPredicateIndexFinder = __esmMin((() => {
	init__cb();
	init__getLength();
}));
//#endregion
//#region ../../node_modules/underscore/modules/findIndex.js
var findIndex_default;
var init_findIndex = __esmMin((() => {
	init__createPredicateIndexFinder();
	findIndex_default = createPredicateIndexFinder(1);
}));
//#endregion
//#region ../../node_modules/underscore/modules/findLastIndex.js
var findLastIndex_default;
var init_findLastIndex = __esmMin((() => {
	init__createPredicateIndexFinder();
	findLastIndex_default = createPredicateIndexFinder(-1);
}));
//#endregion
//#region ../../node_modules/underscore/modules/sortedIndex.js
function sortedIndex(array, obj, iteratee, context) {
	iteratee = cb(iteratee, context, 1);
	var value = iteratee(obj);
	var low = 0, high = _getLength_default(array);
	while (low < high) {
		var mid = Math.floor((low + high) / 2);
		if (iteratee(array[mid]) < value) low = mid + 1;
		else high = mid;
	}
	return low;
}
var init_sortedIndex = __esmMin((() => {
	init__cb();
	init__getLength();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_createIndexFinder.js
function createIndexFinder(dir, predicateFind, sortedIndex) {
	return function(array, item, idx) {
		var i = 0, length = _getLength_default(array);
		if (typeof idx == "number") {
			if (dir > 0) i = idx >= 0 ? idx : Math.max(idx + length, i);
			else length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
		} else if (sortedIndex && idx && length) {
			idx = sortedIndex(array, item);
			return array[idx] === item ? idx : -1;
		}
		if (item !== item) {
			idx = predicateFind(slice.call(array, i, length), isNaN$1);
			return idx >= 0 ? idx + i : -1;
		}
		for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) if (array[idx] === item) return idx;
		return -1;
	};
}
var init__createIndexFinder = __esmMin((() => {
	init__getLength();
	init__setup();
	init_isNaN();
}));
//#endregion
//#region ../../node_modules/underscore/modules/indexOf.js
var indexOf_default;
var init_indexOf = __esmMin((() => {
	init_sortedIndex();
	init_findIndex();
	init__createIndexFinder();
	indexOf_default = createIndexFinder(1, findIndex_default, sortedIndex);
}));
//#endregion
//#region ../../node_modules/underscore/modules/lastIndexOf.js
var lastIndexOf_default;
var init_lastIndexOf = __esmMin((() => {
	init_findLastIndex();
	init__createIndexFinder();
	lastIndexOf_default = createIndexFinder(-1, findLastIndex_default);
}));
//#endregion
//#region ../../node_modules/underscore/modules/find.js
function find(obj, predicate, context) {
	var key = (_isArrayLike_default(obj) ? findIndex_default : findKey)(obj, predicate, context);
	if (key !== void 0 && key !== -1) return obj[key];
}
var init_find = __esmMin((() => {
	init__isArrayLike();
	init_findIndex();
	init_findKey();
}));
//#endregion
//#region ../../node_modules/underscore/modules/findWhere.js
function findWhere(obj, attrs) {
	return find(obj, matcher(attrs));
}
var init_findWhere = __esmMin((() => {
	init_find();
	init_matcher();
}));
//#endregion
//#region ../../node_modules/underscore/modules/each.js
function each(obj, iteratee, context) {
	iteratee = optimizeCb(iteratee, context);
	var i, length;
	if (_isArrayLike_default(obj)) for (i = 0, length = obj.length; i < length; i++) iteratee(obj[i], i, obj);
	else {
		var _keys = keys(obj);
		for (i = 0, length = _keys.length; i < length; i++) iteratee(obj[_keys[i]], _keys[i], obj);
	}
	return obj;
}
var init_each = __esmMin((() => {
	init__optimizeCb();
	init__isArrayLike();
	init_keys();
}));
//#endregion
//#region ../../node_modules/underscore/modules/map.js
function map(obj, iteratee, context) {
	iteratee = cb(iteratee, context);
	var _keys = !_isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length, results = Array(length);
	for (var index = 0; index < length; index++) {
		var currentKey = _keys ? _keys[index] : index;
		results[index] = iteratee(obj[currentKey], currentKey, obj);
	}
	return results;
}
var init_map = __esmMin((() => {
	init__cb();
	init__isArrayLike();
	init_keys();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_createReduce.js
function createReduce(dir) {
	var reducer = function(obj, iteratee, memo, initial) {
		var _keys = !_isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length, index = dir > 0 ? 0 : length - 1;
		if (!initial) {
			memo = obj[_keys ? _keys[index] : index];
			index += dir;
		}
		for (; index >= 0 && index < length; index += dir) {
			var currentKey = _keys ? _keys[index] : index;
			memo = iteratee(memo, obj[currentKey], currentKey, obj);
		}
		return memo;
	};
	return function(obj, iteratee, memo, context) {
		var initial = arguments.length >= 3;
		return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
	};
}
var init__createReduce = __esmMin((() => {
	init__isArrayLike();
	init_keys();
	init__optimizeCb();
}));
//#endregion
//#region ../../node_modules/underscore/modules/reduce.js
var reduce_default;
var init_reduce = __esmMin((() => {
	init__createReduce();
	reduce_default = createReduce(1);
}));
//#endregion
//#region ../../node_modules/underscore/modules/reduceRight.js
var reduceRight_default;
var init_reduceRight = __esmMin((() => {
	init__createReduce();
	reduceRight_default = createReduce(-1);
}));
//#endregion
//#region ../../node_modules/underscore/modules/filter.js
function filter(obj, predicate, context) {
	var results = [];
	predicate = cb(predicate, context);
	each(obj, function(value, index, list) {
		if (predicate(value, index, list)) results.push(value);
	});
	return results;
}
var init_filter = __esmMin((() => {
	init__cb();
	init_each();
}));
//#endregion
//#region ../../node_modules/underscore/modules/reject.js
function reject(obj, predicate, context) {
	return filter(obj, negate(cb(predicate)), context);
}
var init_reject = __esmMin((() => {
	init_filter();
	init_negate();
	init__cb();
}));
//#endregion
//#region ../../node_modules/underscore/modules/every.js
function every(obj, predicate, context) {
	predicate = cb(predicate, context);
	var _keys = !_isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length;
	for (var index = 0; index < length; index++) {
		var currentKey = _keys ? _keys[index] : index;
		if (!predicate(obj[currentKey], currentKey, obj)) return false;
	}
	return true;
}
var init_every = __esmMin((() => {
	init__cb();
	init__isArrayLike();
	init_keys();
}));
//#endregion
//#region ../../node_modules/underscore/modules/some.js
function some(obj, predicate, context) {
	predicate = cb(predicate, context);
	var _keys = !_isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length;
	for (var index = 0; index < length; index++) {
		var currentKey = _keys ? _keys[index] : index;
		if (predicate(obj[currentKey], currentKey, obj)) return true;
	}
	return false;
}
var init_some = __esmMin((() => {
	init__cb();
	init__isArrayLike();
	init_keys();
}));
//#endregion
//#region ../../node_modules/underscore/modules/contains.js
function contains(obj, item, fromIndex, guard) {
	if (!_isArrayLike_default(obj)) obj = values(obj);
	if (typeof fromIndex != "number" || guard) fromIndex = 0;
	return indexOf_default(obj, item, fromIndex) >= 0;
}
var init_contains = __esmMin((() => {
	init__isArrayLike();
	init_values();
	init_indexOf();
}));
//#endregion
//#region ../../node_modules/underscore/modules/invoke.js
var invoke_default;
var init_invoke = __esmMin((() => {
	init_restArguments();
	init_isFunction();
	init_map();
	init__deepGet();
	init__toPath();
	invoke_default = restArguments(function(obj, path, args) {
		var contextPath, func;
		if (isFunction_default(path)) func = path;
		else {
			path = toPath(path);
			contextPath = path.slice(0, -1);
			path = path[path.length - 1];
		}
		return map(obj, function(context) {
			var method = func;
			if (!method) {
				if (contextPath && contextPath.length) context = deepGet(context, contextPath);
				if (context == null) return void 0;
				method = context[path];
			}
			return method == null ? method : method.apply(context, args);
		});
	});
}));
//#endregion
//#region ../../node_modules/underscore/modules/pluck.js
function pluck(obj, key) {
	return map(obj, property(key));
}
var init_pluck = __esmMin((() => {
	init_map();
	init_property();
}));
//#endregion
//#region ../../node_modules/underscore/modules/where.js
function where(obj, attrs) {
	return filter(obj, matcher(attrs));
}
var init_where = __esmMin((() => {
	init_filter();
	init_matcher();
}));
//#endregion
//#region ../../node_modules/underscore/modules/max.js
function max(obj, iteratee, context) {
	var result = -Infinity, lastComputed = -Infinity, value, computed;
	if (iteratee == null || typeof iteratee == "number" && typeof obj[0] != "object" && obj != null) {
		obj = _isArrayLike_default(obj) ? obj : values(obj);
		for (var i = 0, length = obj.length; i < length; i++) {
			value = obj[i];
			if (value != null && value > result) result = value;
		}
	} else {
		iteratee = cb(iteratee, context);
		each(obj, function(v, index, list) {
			computed = iteratee(v, index, list);
			if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
				result = v;
				lastComputed = computed;
			}
		});
	}
	return result;
}
var init_max = __esmMin((() => {
	init__isArrayLike();
	init_values();
	init__cb();
	init_each();
}));
//#endregion
//#region ../../node_modules/underscore/modules/min.js
function min(obj, iteratee, context) {
	var result = Infinity, lastComputed = Infinity, value, computed;
	if (iteratee == null || typeof iteratee == "number" && typeof obj[0] != "object" && obj != null) {
		obj = _isArrayLike_default(obj) ? obj : values(obj);
		for (var i = 0, length = obj.length; i < length; i++) {
			value = obj[i];
			if (value != null && value < result) result = value;
		}
	} else {
		iteratee = cb(iteratee, context);
		each(obj, function(v, index, list) {
			computed = iteratee(v, index, list);
			if (computed < lastComputed || computed === Infinity && result === Infinity) {
				result = v;
				lastComputed = computed;
			}
		});
	}
	return result;
}
var init_min = __esmMin((() => {
	init__isArrayLike();
	init_values();
	init__cb();
	init_each();
}));
//#endregion
//#region ../../node_modules/underscore/modules/toArray.js
function toArray(obj) {
	if (!obj) return [];
	if (isArray_default(obj)) return slice.call(obj);
	if (isString_default(obj)) return obj.match(reStrSymbol);
	if (_isArrayLike_default(obj)) return map(obj, identity);
	return values(obj);
}
var reStrSymbol;
var init_toArray = __esmMin((() => {
	init_isArray();
	init__setup();
	init_isString();
	init__isArrayLike();
	init_map();
	init_identity();
	init_values();
	reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
}));
//#endregion
//#region ../../node_modules/underscore/modules/sample.js
function sample(obj, n, guard) {
	if (n == null || guard) {
		if (!_isArrayLike_default(obj)) obj = values(obj);
		return obj[random(obj.length - 1)];
	}
	var sample = toArray(obj);
	var length = _getLength_default(sample);
	n = Math.max(Math.min(n, length), 0);
	var last = length - 1;
	for (var index = 0; index < n; index++) {
		var rand = random(index, last);
		var temp = sample[index];
		sample[index] = sample[rand];
		sample[rand] = temp;
	}
	return sample.slice(0, n);
}
var init_sample = __esmMin((() => {
	init__isArrayLike();
	init_values();
	init__getLength();
	init_random();
	init_toArray();
}));
//#endregion
//#region ../../node_modules/underscore/modules/shuffle.js
function shuffle(obj) {
	return sample(obj, Infinity);
}
var init_shuffle = __esmMin((() => {
	init_sample();
}));
//#endregion
//#region ../../node_modules/underscore/modules/sortBy.js
function sortBy(obj, iteratee, context) {
	var index = 0;
	iteratee = cb(iteratee, context);
	return pluck(map(obj, function(value, key, list) {
		return {
			value,
			index: index++,
			criteria: iteratee(value, key, list)
		};
	}).sort(function(left, right) {
		var a = left.criteria;
		var b = right.criteria;
		if (a !== b) {
			if (a > b || a === void 0) return 1;
			if (a < b || b === void 0) return -1;
		}
		return left.index - right.index;
	}), "value");
}
var init_sortBy = __esmMin((() => {
	init__cb();
	init_pluck();
	init_map();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_group.js
function group(behavior, partition) {
	return function(obj, iteratee, context) {
		var result = partition ? [[], []] : {};
		iteratee = cb(iteratee, context);
		each(obj, function(value, index) {
			behavior(result, value, iteratee(value, index, obj));
		});
		return result;
	};
}
var init__group = __esmMin((() => {
	init__cb();
	init_each();
}));
//#endregion
//#region ../../node_modules/underscore/modules/groupBy.js
var groupBy_default;
var init_groupBy = __esmMin((() => {
	init__group();
	init__has();
	groupBy_default = group(function(result, value, key) {
		if (has$1(result, key)) result[key].push(value);
		else result[key] = [value];
	});
}));
//#endregion
//#region ../../node_modules/underscore/modules/indexBy.js
var indexBy_default;
var init_indexBy = __esmMin((() => {
	init__group();
	indexBy_default = group(function(result, value, key) {
		result[key] = value;
	});
}));
//#endregion
//#region ../../node_modules/underscore/modules/countBy.js
var countBy_default;
var init_countBy = __esmMin((() => {
	init__group();
	init__has();
	countBy_default = group(function(result, value, key) {
		if (has$1(result, key)) result[key]++;
		else result[key] = 1;
	});
}));
//#endregion
//#region ../../node_modules/underscore/modules/partition.js
var partition_default;
var init_partition = __esmMin((() => {
	init__group();
	partition_default = group(function(result, value, pass) {
		result[pass ? 0 : 1].push(value);
	}, true);
}));
//#endregion
//#region ../../node_modules/underscore/modules/size.js
function size(obj) {
	if (obj == null) return 0;
	return _isArrayLike_default(obj) ? obj.length : keys(obj).length;
}
var init_size = __esmMin((() => {
	init__isArrayLike();
	init_keys();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_keyInObj.js
function keyInObj(value, key, obj) {
	return key in obj;
}
var init__keyInObj = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/pick.js
var pick_default;
var init_pick = __esmMin((() => {
	init_restArguments();
	init_isFunction();
	init__optimizeCb();
	init_allKeys();
	init__keyInObj();
	init__flatten();
	pick_default = restArguments(function(obj, keys) {
		var result = {}, iteratee = keys[0];
		if (obj == null) return result;
		if (isFunction_default(iteratee)) {
			if (keys.length > 1) iteratee = optimizeCb(iteratee, keys[1]);
			keys = allKeys(obj);
		} else {
			iteratee = keyInObj;
			keys = flatten$1(keys, false, false);
			obj = Object(obj);
		}
		for (var i = 0, length = keys.length; i < length; i++) {
			var key = keys[i];
			var value = obj[key];
			if (iteratee(value, key, obj)) result[key] = value;
		}
		return result;
	});
}));
//#endregion
//#region ../../node_modules/underscore/modules/omit.js
var omit_default;
var init_omit = __esmMin((() => {
	init_restArguments();
	init_isFunction();
	init_negate();
	init_map();
	init__flatten();
	init_contains();
	init_pick();
	omit_default = restArguments(function(obj, keys) {
		var iteratee = keys[0], context;
		if (isFunction_default(iteratee)) {
			iteratee = negate(iteratee);
			if (keys.length > 1) context = keys[1];
		} else {
			keys = map(flatten$1(keys, false, false), String);
			iteratee = function(value, key) {
				return !contains(keys, key);
			};
		}
		return pick_default(obj, iteratee, context);
	});
}));
//#endregion
//#region ../../node_modules/underscore/modules/initial.js
function initial(array, n, guard) {
	return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
}
var init_initial = __esmMin((() => {
	init__setup();
}));
//#endregion
//#region ../../node_modules/underscore/modules/first.js
function first(array, n, guard) {
	if (array == null || array.length < 1) return n == null || guard ? void 0 : [];
	if (n == null || guard) return array[0];
	return initial(array, array.length - n);
}
var init_first = __esmMin((() => {
	init_initial();
}));
//#endregion
//#region ../../node_modules/underscore/modules/rest.js
function rest(array, n, guard) {
	return slice.call(array, n == null || guard ? 1 : n);
}
var init_rest = __esmMin((() => {
	init__setup();
}));
//#endregion
//#region ../../node_modules/underscore/modules/last.js
function last(array, n, guard) {
	if (array == null || array.length < 1) return n == null || guard ? void 0 : [];
	if (n == null || guard) return array[array.length - 1];
	return rest(array, Math.max(0, array.length - n));
}
var init_last = __esmMin((() => {
	init_rest();
}));
//#endregion
//#region ../../node_modules/underscore/modules/compact.js
function compact(array) {
	return filter(array, Boolean);
}
var init_compact = __esmMin((() => {
	init_filter();
}));
//#endregion
//#region ../../node_modules/underscore/modules/flatten.js
function flatten(array, depth) {
	return flatten$1(array, depth, false);
}
var init_flatten = __esmMin((() => {
	init__flatten();
}));
//#endregion
//#region ../../node_modules/underscore/modules/difference.js
var difference_default;
var init_difference = __esmMin((() => {
	init_restArguments();
	init__flatten();
	init_filter();
	init_contains();
	difference_default = restArguments(function(array, rest) {
		rest = flatten$1(rest, true, true);
		return filter(array, function(value) {
			return !contains(rest, value);
		});
	});
}));
//#endregion
//#region ../../node_modules/underscore/modules/without.js
var without_default;
var init_without = __esmMin((() => {
	init_restArguments();
	init_difference();
	without_default = restArguments(function(array, otherArrays) {
		return difference_default(array, otherArrays);
	});
}));
//#endregion
//#region ../../node_modules/underscore/modules/uniq.js
function uniq(array, isSorted, iteratee, context) {
	if (!isBoolean(isSorted)) {
		context = iteratee;
		iteratee = isSorted;
		isSorted = false;
	}
	if (iteratee != null) iteratee = cb(iteratee, context);
	var result = [];
	var seen = [];
	for (var i = 0, length = _getLength_default(array); i < length; i++) {
		var value = array[i], computed = iteratee ? iteratee(value, i, array) : value;
		if (isSorted && !iteratee) {
			if (!i || seen !== computed) result.push(value);
			seen = computed;
		} else if (iteratee) {
			if (!contains(seen, computed)) {
				seen.push(computed);
				result.push(value);
			}
		} else if (!contains(result, value)) result.push(value);
	}
	return result;
}
var init_uniq = __esmMin((() => {
	init_isBoolean();
	init__cb();
	init__getLength();
	init_contains();
}));
//#endregion
//#region ../../node_modules/underscore/modules/union.js
var union_default;
var init_union = __esmMin((() => {
	init_restArguments();
	init_uniq();
	init__flatten();
	union_default = restArguments(function(arrays) {
		return uniq(flatten$1(arrays, true, true));
	});
}));
//#endregion
//#region ../../node_modules/underscore/modules/intersection.js
function intersection(array) {
	var result = [];
	var argsLength = arguments.length;
	for (var i = 0, length = _getLength_default(array); i < length; i++) {
		var item = array[i];
		if (contains(result, item)) continue;
		var j;
		for (j = 1; j < argsLength; j++) if (!contains(arguments[j], item)) break;
		if (j === argsLength) result.push(item);
	}
	return result;
}
var init_intersection = __esmMin((() => {
	init__getLength();
	init_contains();
}));
//#endregion
//#region ../../node_modules/underscore/modules/unzip.js
function unzip(array) {
	var length = array && max(array, _getLength_default).length || 0;
	var result = Array(length);
	for (var index = 0; index < length; index++) result[index] = pluck(array, index);
	return result;
}
var init_unzip = __esmMin((() => {
	init_max();
	init__getLength();
	init_pluck();
}));
//#endregion
//#region ../../node_modules/underscore/modules/zip.js
var zip_default;
var init_zip = __esmMin((() => {
	init_restArguments();
	init_unzip();
	zip_default = restArguments(unzip);
}));
//#endregion
//#region ../../node_modules/underscore/modules/object.js
function object(list, values) {
	var result = {};
	for (var i = 0, length = _getLength_default(list); i < length; i++) if (values) result[list[i]] = values[i];
	else result[list[i][0]] = list[i][1];
	return result;
}
var init_object = __esmMin((() => {
	init__getLength();
}));
//#endregion
//#region ../../node_modules/underscore/modules/range.js
function range(start, stop, step) {
	if (stop == null) {
		stop = start || 0;
		start = 0;
	}
	if (!step) step = stop < start ? -1 : 1;
	var length = Math.max(Math.ceil((stop - start) / step), 0);
	var range = Array(length);
	for (var idx = 0; idx < length; idx++, start += step) range[idx] = start;
	return range;
}
var init_range = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/chunk.js
function chunk(array, count) {
	if (count == null || count < 1) return [];
	var result = [];
	var i = 0, length = array.length;
	while (i < length) result.push(slice.call(array, i, i += count));
	return result;
}
var init_chunk = __esmMin((() => {
	init__setup();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_chainResult.js
function chainResult(instance, obj) {
	return instance._chain ? _$1(obj).chain() : obj;
}
var init__chainResult = __esmMin((() => {
	init_underscore();
}));
//#endregion
//#region ../../node_modules/underscore/modules/mixin.js
function mixin(obj) {
	each(functions(obj), function(name) {
		var func = _$1[name] = obj[name];
		_$1.prototype[name] = function() {
			var args = [this._wrapped];
			push.apply(args, arguments);
			return chainResult(this, func.apply(_$1, args));
		};
	});
	return _$1;
}
var init_mixin = __esmMin((() => {
	init_underscore();
	init_each();
	init_functions();
	init__setup();
	init__chainResult();
}));
//#endregion
//#region ../../node_modules/underscore/modules/underscore-array-methods.js
var underscore_array_methods_default;
var init_underscore_array_methods = __esmMin((() => {
	init_underscore();
	init_each();
	init__setup();
	init__chainResult();
	each([
		"pop",
		"push",
		"reverse",
		"shift",
		"sort",
		"splice",
		"unshift"
	], function(name) {
		var method = ArrayProto[name];
		_$1.prototype[name] = function() {
			var obj = this._wrapped;
			if (obj != null) {
				method.apply(obj, arguments);
				if ((name === "shift" || name === "splice") && obj.length === 0) delete obj[0];
			}
			return chainResult(this, obj);
		};
	});
	each([
		"concat",
		"join",
		"slice"
	], function(name) {
		var method = ArrayProto[name];
		_$1.prototype[name] = function() {
			var obj = this._wrapped;
			if (obj != null) obj = method.apply(obj, arguments);
			return chainResult(this, obj);
		};
	});
	underscore_array_methods_default = _$1;
}));
//#endregion
//#region ../../node_modules/underscore/modules/index.js
var modules_exports = /* @__PURE__ */ __exportAll({
	VERSION: () => VERSION,
	after: () => after,
	all: () => every,
	allKeys: () => allKeys,
	any: () => some,
	assign: () => extendOwn_default,
	before: () => before,
	bind: () => bind_default,
	bindAll: () => bindAll_default,
	chain: () => chain,
	chunk: () => chunk,
	clone: () => clone,
	collect: () => map,
	compact: () => compact,
	compose: () => compose,
	constant: () => constant,
	contains: () => contains,
	countBy: () => countBy_default,
	create: () => create,
	debounce: () => debounce,
	default: () => underscore_array_methods_default,
	defaults: () => defaults_default,
	defer: () => defer_default,
	delay: () => delay_default,
	detect: () => find,
	difference: () => difference_default,
	drop: () => rest,
	each: () => each,
	escape: () => escape_default,
	every: () => every,
	extend: () => extend_default,
	extendOwn: () => extendOwn_default,
	filter: () => filter,
	find: () => find,
	findIndex: () => findIndex_default,
	findKey: () => findKey,
	findLastIndex: () => findLastIndex_default,
	findWhere: () => findWhere,
	first: () => first,
	flatten: () => flatten,
	foldl: () => reduce_default,
	foldr: () => reduceRight_default,
	forEach: () => each,
	functions: () => functions,
	get: () => get,
	groupBy: () => groupBy_default,
	has: () => has,
	head: () => first,
	identity: () => identity,
	include: () => contains,
	includes: () => contains,
	indexBy: () => indexBy_default,
	indexOf: () => indexOf_default,
	initial: () => initial,
	inject: () => reduce_default,
	intersection: () => intersection,
	invert: () => invert,
	invoke: () => invoke_default,
	isArguments: () => isArguments_default,
	isArray: () => isArray_default,
	isArrayBuffer: () => isArrayBuffer_default,
	isBoolean: () => isBoolean,
	isDataView: () => isDataView_default,
	isDate: () => isDate_default,
	isElement: () => isElement,
	isEmpty: () => isEmpty,
	isEqual: () => isEqual,
	isError: () => isError_default,
	isFinite: () => isFinite$1,
	isFunction: () => isFunction_default,
	isMap: () => isMap_default,
	isMatch: () => isMatch,
	isNaN: () => isNaN$1,
	isNull: () => isNull,
	isNumber: () => isNumber_default,
	isObject: () => isObject,
	isRegExp: () => isRegExp_default,
	isSet: () => isSet_default,
	isString: () => isString_default,
	isSymbol: () => isSymbol_default,
	isTypedArray: () => isTypedArray_default,
	isUndefined: () => isUndefined,
	isWeakMap: () => isWeakMap_default,
	isWeakSet: () => isWeakSet_default,
	iteratee: () => iteratee,
	keys: () => keys,
	last: () => last,
	lastIndexOf: () => lastIndexOf_default,
	map: () => map,
	mapObject: () => mapObject,
	matcher: () => matcher,
	matches: () => matcher,
	max: () => max,
	memoize: () => memoize,
	methods: () => functions,
	min: () => min,
	mixin: () => mixin,
	negate: () => negate,
	noop: () => noop,
	now: () => now_default,
	object: () => object,
	omit: () => omit_default,
	once: () => once_default,
	pairs: () => pairs,
	partial: () => partial,
	partition: () => partition_default,
	pick: () => pick_default,
	pluck: () => pluck,
	property: () => property,
	propertyOf: () => propertyOf,
	random: () => random,
	range: () => range,
	reduce: () => reduce_default,
	reduceRight: () => reduceRight_default,
	reject: () => reject,
	rest: () => rest,
	restArguments: () => restArguments,
	result: () => result,
	sample: () => sample,
	select: () => filter,
	shuffle: () => shuffle,
	size: () => size,
	some: () => some,
	sortBy: () => sortBy,
	sortedIndex: () => sortedIndex,
	tail: () => rest,
	take: () => first,
	tap: () => tap,
	template: () => template,
	templateSettings: () => templateSettings_default,
	throttle: () => throttle,
	times: () => times,
	toArray: () => toArray,
	toPath: () => toPath$1,
	transpose: () => unzip,
	unescape: () => unescape_default,
	union: () => union_default,
	uniq: () => uniq,
	unique: () => uniq,
	uniqueId: () => uniqueId,
	unzip: () => unzip,
	values: () => values,
	where: () => where,
	without: () => without_default,
	wrap: () => wrap,
	zip: () => zip_default
});
var init_modules = __esmMin((() => {
	init__setup();
	init_restArguments();
	init_isObject();
	init_isNull();
	init_isUndefined();
	init_isBoolean();
	init_isElement();
	init_isString();
	init_isNumber();
	init_isDate();
	init_isRegExp();
	init_isError();
	init_isSymbol();
	init_isArrayBuffer();
	init_isDataView();
	init_isArray();
	init_isFunction();
	init_isArguments();
	init_isFinite();
	init_isNaN();
	init_isTypedArray();
	init_isEmpty();
	init_isMatch();
	init_isEqual();
	init_isMap();
	init_isWeakMap();
	init_isSet();
	init_isWeakSet();
	init_keys();
	init_allKeys();
	init_values();
	init_pairs();
	init_invert();
	init_functions();
	init_extend();
	init_extendOwn();
	init_defaults();
	init_create();
	init_clone();
	init_tap();
	init_get();
	init_has();
	init_mapObject();
	init_identity();
	init_constant();
	init_noop();
	init_toPath();
	init_property();
	init_propertyOf();
	init_matcher();
	init_times();
	init_random();
	init_now();
	init_escape();
	init_unescape();
	init_templateSettings();
	init_template();
	init_result();
	init_uniqueId();
	init_chain();
	init_iteratee();
	init_partial();
	init_bind();
	init_bindAll();
	init_memoize();
	init_delay();
	init_defer();
	init_throttle();
	init_debounce();
	init_wrap();
	init_negate();
	init_compose();
	init_after();
	init_before();
	init_once();
	init_findKey();
	init_findIndex();
	init_findLastIndex();
	init_sortedIndex();
	init_indexOf();
	init_lastIndexOf();
	init_find();
	init_findWhere();
	init_each();
	init_map();
	init_reduce();
	init_reduceRight();
	init_filter();
	init_reject();
	init_every();
	init_some();
	init_contains();
	init_invoke();
	init_pluck();
	init_where();
	init_max();
	init_min();
	init_shuffle();
	init_sample();
	init_sortBy();
	init_groupBy();
	init_indexBy();
	init_countBy();
	init_partition();
	init_toArray();
	init_size();
	init_pick();
	init_omit();
	init_first();
	init_initial();
	init_last();
	init_rest();
	init_compact();
	init_flatten();
	init_without();
	init_uniq();
	init_union();
	init_intersection();
	init_difference();
	init_unzip();
	init_zip();
	init_object();
	init_range();
	init_chunk();
	init_mixin();
	init_underscore_array_methods();
}));
//#endregion
//#region ../../node_modules/underscore/modules/index-default.js
var _;
var init_index_default = __esmMin((() => {
	init_modules();
	_ = mixin(modules_exports);
	_._ = _;
}));
//#endregion
//#region ../../node_modules/underscore/modules/index-all.js
var index_all_exports = /* @__PURE__ */ __exportAll({
	VERSION: () => VERSION,
	after: () => after,
	all: () => every,
	allKeys: () => allKeys,
	any: () => some,
	assign: () => extendOwn_default,
	before: () => before,
	bind: () => bind_default,
	bindAll: () => bindAll_default,
	chain: () => chain,
	chunk: () => chunk,
	clone: () => clone,
	collect: () => map,
	compact: () => compact,
	compose: () => compose,
	constant: () => constant,
	contains: () => contains,
	countBy: () => countBy_default,
	create: () => create,
	debounce: () => debounce,
	default: () => _,
	defaults: () => defaults_default,
	defer: () => defer_default,
	delay: () => delay_default,
	detect: () => find,
	difference: () => difference_default,
	drop: () => rest,
	each: () => each,
	escape: () => escape_default,
	every: () => every,
	extend: () => extend_default,
	extendOwn: () => extendOwn_default,
	filter: () => filter,
	find: () => find,
	findIndex: () => findIndex_default,
	findKey: () => findKey,
	findLastIndex: () => findLastIndex_default,
	findWhere: () => findWhere,
	first: () => first,
	flatten: () => flatten,
	foldl: () => reduce_default,
	foldr: () => reduceRight_default,
	forEach: () => each,
	functions: () => functions,
	get: () => get,
	groupBy: () => groupBy_default,
	has: () => has,
	head: () => first,
	identity: () => identity,
	include: () => contains,
	includes: () => contains,
	indexBy: () => indexBy_default,
	indexOf: () => indexOf_default,
	initial: () => initial,
	inject: () => reduce_default,
	intersection: () => intersection,
	invert: () => invert,
	invoke: () => invoke_default,
	isArguments: () => isArguments_default,
	isArray: () => isArray_default,
	isArrayBuffer: () => isArrayBuffer_default,
	isBoolean: () => isBoolean,
	isDataView: () => isDataView_default,
	isDate: () => isDate_default,
	isElement: () => isElement,
	isEmpty: () => isEmpty,
	isEqual: () => isEqual,
	isError: () => isError_default,
	isFinite: () => isFinite$1,
	isFunction: () => isFunction_default,
	isMap: () => isMap_default,
	isMatch: () => isMatch,
	isNaN: () => isNaN$1,
	isNull: () => isNull,
	isNumber: () => isNumber_default,
	isObject: () => isObject,
	isRegExp: () => isRegExp_default,
	isSet: () => isSet_default,
	isString: () => isString_default,
	isSymbol: () => isSymbol_default,
	isTypedArray: () => isTypedArray_default,
	isUndefined: () => isUndefined,
	isWeakMap: () => isWeakMap_default,
	isWeakSet: () => isWeakSet_default,
	iteratee: () => iteratee,
	keys: () => keys,
	last: () => last,
	lastIndexOf: () => lastIndexOf_default,
	map: () => map,
	mapObject: () => mapObject,
	matcher: () => matcher,
	matches: () => matcher,
	max: () => max,
	memoize: () => memoize,
	methods: () => functions,
	min: () => min,
	mixin: () => mixin,
	negate: () => negate,
	noop: () => noop,
	now: () => now_default,
	object: () => object,
	omit: () => omit_default,
	once: () => once_default,
	pairs: () => pairs,
	partial: () => partial,
	partition: () => partition_default,
	pick: () => pick_default,
	pluck: () => pluck,
	property: () => property,
	propertyOf: () => propertyOf,
	random: () => random,
	range: () => range,
	reduce: () => reduce_default,
	reduceRight: () => reduceRight_default,
	reject: () => reject,
	rest: () => rest,
	restArguments: () => restArguments,
	result: () => result,
	sample: () => sample,
	select: () => filter,
	shuffle: () => shuffle,
	size: () => size,
	some: () => some,
	sortBy: () => sortBy,
	sortedIndex: () => sortedIndex,
	tail: () => rest,
	take: () => first,
	tap: () => tap,
	template: () => template,
	templateSettings: () => templateSettings_default,
	throttle: () => throttle,
	times: () => times,
	toArray: () => toArray,
	toPath: () => toPath$1,
	transpose: () => unzip,
	unescape: () => unescape_default,
	union: () => union_default,
	uniq: () => uniq,
	unique: () => uniq,
	uniqueId: () => uniqueId,
	unzip: () => unzip,
	values: () => values,
	where: () => where,
	without: () => without_default,
	wrap: () => wrap,
	zip: () => zip_default
});
var init_index_all = __esmMin((() => {
	init_index_default();
	init_modules();
}));
//#endregion
//#region ../../node_modules/lop/lib/TokenIterator.js
var require_TokenIterator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var TokenIterator = module.exports = function(tokens, startIndex) {
		this._tokens = tokens;
		this._startIndex = startIndex || 0;
	};
	TokenIterator.prototype.head = function() {
		return this._tokens[this._startIndex];
	};
	TokenIterator.prototype.tail = function(startIndex) {
		return new TokenIterator(this._tokens, this._startIndex + 1);
	};
	TokenIterator.prototype.toArray = function() {
		return this._tokens.slice(this._startIndex);
	};
	TokenIterator.prototype.end = function() {
		return this._tokens[this._tokens.length - 1];
	};
	TokenIterator.prototype.to = function(end) {
		var start = this.head().source;
		var endToken = end.head() || end.end();
		return start.to(endToken.source);
	};
}));
//#endregion
//#region ../../node_modules/lop/lib/parser.js
var require_parser = /* @__PURE__ */ __commonJSMin(((exports) => {
	var TokenIterator = require_TokenIterator();
	exports.Parser = function(options) {
		var parseTokens = function(parser, tokens) {
			return parser(new TokenIterator(tokens));
		};
		return { parseTokens };
	};
}));
//#endregion
//#region ../../node_modules/option/index.js
var require_option = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.none = Object.create({
		value: function() {
			throw new Error("Called value on none");
		},
		isNone: function() {
			return true;
		},
		isSome: function() {
			return false;
		},
		map: function() {
			return exports.none;
		},
		flatMap: function() {
			return exports.none;
		},
		filter: function() {
			return exports.none;
		},
		toArray: function() {
			return [];
		},
		orElse: callOrReturn,
		valueOrElse: callOrReturn
	});
	function callOrReturn(value) {
		if (typeof value == "function") return value();
		else return value;
	}
	exports.some = function(value) {
		return new Some(value);
	};
	var Some = function(value) {
		this._value = value;
	};
	Some.prototype.value = function() {
		return this._value;
	};
	Some.prototype.isNone = function() {
		return false;
	};
	Some.prototype.isSome = function() {
		return true;
	};
	Some.prototype.map = function(func) {
		return new Some(func(this._value));
	};
	Some.prototype.flatMap = function(func) {
		return func(this._value);
	};
	Some.prototype.filter = function(predicate) {
		return predicate(this._value) ? this : exports.none;
	};
	Some.prototype.toArray = function() {
		return [this._value];
	};
	Some.prototype.orElse = function(value) {
		return this;
	};
	Some.prototype.valueOrElse = function(value) {
		return this._value;
	};
	exports.isOption = function(value) {
		return value === exports.none || value instanceof Some;
	};
	exports.fromNullable = function(value) {
		if (value == null) return exports.none;
		return new Some(value);
	};
}));
//#endregion
//#region ../../node_modules/lop/lib/parsing-results.js
var require_parsing_results = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		failure: function(errors, remaining) {
			if (errors.length < 1) throw new Error("Failure must have errors");
			return new Result({
				status: "failure",
				remaining,
				errors
			});
		},
		error: function(errors, remaining) {
			if (errors.length < 1) throw new Error("Failure must have errors");
			return new Result({
				status: "error",
				remaining,
				errors
			});
		},
		success: function(value, remaining, source) {
			return new Result({
				status: "success",
				value,
				source,
				remaining,
				errors: []
			});
		},
		cut: function(remaining) {
			return new Result({
				status: "cut",
				remaining,
				errors: []
			});
		}
	};
	var Result = function(options) {
		this._value = options.value;
		this._status = options.status;
		this._hasValue = options.value !== void 0;
		this._remaining = options.remaining;
		this._source = options.source;
		this._errors = options.errors;
	};
	Result.prototype.map = function(func) {
		if (this._hasValue) return new Result({
			value: func(this._value, this._source),
			status: this._status,
			remaining: this._remaining,
			source: this._source,
			errors: this._errors
		});
		else return this;
	};
	Result.prototype.changeRemaining = function(remaining) {
		return new Result({
			value: this._value,
			status: this._status,
			remaining,
			source: this._source,
			errors: this._errors
		});
	};
	Result.prototype.isSuccess = function() {
		return this._status === "success" || this._status === "cut";
	};
	Result.prototype.isFailure = function() {
		return this._status === "failure";
	};
	Result.prototype.isError = function() {
		return this._status === "error";
	};
	Result.prototype.isCut = function() {
		return this._status === "cut";
	};
	Result.prototype.value = function() {
		return this._value;
	};
	Result.prototype.remaining = function() {
		return this._remaining;
	};
	Result.prototype.source = function() {
		return this._source;
	};
	Result.prototype.errors = function() {
		return this._errors;
	};
}));
//#endregion
//#region ../../node_modules/lop/lib/errors.js
var require_errors = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.error = function(options) {
		return new Error(options);
	};
	var Error = function(options) {
		this.expected = options.expected;
		this.actual = options.actual;
		this._location = options.location;
	};
	Error.prototype.describe = function() {
		return (this._location ? this._location.describe() + ":\n" : "") + "Expected " + this.expected + "\nbut got " + this.actual;
	};
	Error.prototype.lineNumber = function() {
		return this._location.lineNumber();
	};
	Error.prototype.characterNumber = function() {
		return this._location.characterNumber();
	};
}));
//#endregion
//#region ../../node_modules/lop/lib/lazy-iterators.js
var require_lazy_iterators = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.fromArray = function(array) {
		var index = 0;
		var hasNext = function() {
			return index < array.length;
		};
		return new LazyIterator({
			hasNext,
			next: function() {
				if (!hasNext()) throw new Error("No more elements");
				else return array[index++];
			}
		});
	};
	var LazyIterator = function(iterator) {
		this._iterator = iterator;
	};
	LazyIterator.prototype.map = function(func) {
		var iterator = this._iterator;
		return new LazyIterator({
			hasNext: function() {
				return iterator.hasNext();
			},
			next: function() {
				return func(iterator.next());
			}
		});
	};
	LazyIterator.prototype.filter = function(condition) {
		var iterator = this._iterator;
		var moved = false;
		var hasNext = false;
		var next;
		var moveIfNecessary = function() {
			if (moved) return;
			moved = true;
			hasNext = false;
			while (iterator.hasNext() && !hasNext) {
				next = iterator.next();
				hasNext = condition(next);
			}
		};
		return new LazyIterator({
			hasNext: function() {
				moveIfNecessary();
				return hasNext;
			},
			next: function() {
				moveIfNecessary();
				var toReturn = next;
				moved = false;
				return toReturn;
			}
		});
	};
	LazyIterator.prototype.first = function() {
		var iterator = this._iterator;
		if (this._iterator.hasNext()) return iterator.next();
		else return null;
	};
	LazyIterator.prototype.toArray = function() {
		var result = [];
		while (this._iterator.hasNext()) result.push(this._iterator.next());
		return result;
	};
}));
//#endregion
//#region ../../node_modules/lop/lib/rules.js
var require_rules = /* @__PURE__ */ __commonJSMin(((exports) => {
	var _ = (init_index_all(), __toCommonJS(index_all_exports));
	var options = require_option();
	var results = require_parsing_results();
	var errors = require_errors();
	var lazyIterators = require_lazy_iterators();
	exports.token = function(tokenType, value) {
		var matchValue = value !== void 0;
		return function(input) {
			var token = input.head();
			if (token && token.name === tokenType && (!matchValue || token.value === value)) return results.success(token.value, input.tail(), token.source);
			else return describeTokenMismatch(input, describeToken({
				name: tokenType,
				value
			}));
		};
	};
	exports.tokenOfType = function(tokenType) {
		return exports.token(tokenType);
	};
	exports.firstOf = function(name, parsers) {
		if (!_.isArray(parsers)) parsers = Array.prototype.slice.call(arguments, 1);
		return function(input) {
			return lazyIterators.fromArray(parsers).map(function(parser) {
				return parser(input);
			}).filter(function(result) {
				return result.isSuccess() || result.isError();
			}).first() || describeTokenMismatch(input, name);
		};
	};
	exports.then = function(parser, func) {
		return function(input) {
			var result = parser(input);
			if (!result.map) console.log(result);
			return result.map(func);
		};
	};
	exports.sequence = function() {
		var parsers = Array.prototype.slice.call(arguments, 0);
		var rule = function(input) {
			var result = _.foldl(parsers, function(memo, parser) {
				var result = memo.result;
				var hasCut = memo.hasCut;
				if (!result.isSuccess()) return {
					result,
					hasCut
				};
				var subResult = parser(result.remaining());
				if (subResult.isCut()) return {
					result,
					hasCut: true
				};
				else if (subResult.isSuccess()) {
					var values;
					if (parser.isCaptured) values = result.value().withValue(parser, subResult.value());
					else values = result.value();
					var remaining = subResult.remaining();
					var source = input.to(remaining);
					return {
						result: results.success(values, remaining, source),
						hasCut
					};
				} else if (hasCut) return {
					result: results.error(subResult.errors(), subResult.remaining()),
					hasCut
				};
				else return {
					result: subResult,
					hasCut
				};
			}, {
				result: results.success(new SequenceValues(), input),
				hasCut: false
			}).result;
			var source = input.to(result.remaining());
			return result.map(function(values) {
				return values.withValue(exports.sequence.source, source);
			});
		};
		rule.head = function() {
			var firstCapture = _.find(parsers, isCapturedRule);
			return exports.then(rule, exports.sequence.extract(firstCapture));
		};
		rule.map = function(func) {
			return exports.then(rule, function(result) {
				return func.apply(this, result.toArray());
			});
		};
		function isCapturedRule(subRule) {
			return subRule.isCaptured;
		}
		return rule;
	};
	var SequenceValues = function(values, valuesArray) {
		this._values = values || {};
		this._valuesArray = valuesArray || [];
	};
	SequenceValues.prototype.withValue = function(rule, value) {
		if (rule.captureName && rule.captureName in this._values) throw new Error("Cannot add second value for capture \"" + rule.captureName + "\"");
		else {
			var newValues = _.clone(this._values);
			newValues[rule.captureName] = value;
			return new SequenceValues(newValues, this._valuesArray.concat([value]));
		}
	};
	SequenceValues.prototype.get = function(rule) {
		if (rule.captureName in this._values) return this._values[rule.captureName];
		else throw new Error("No value for capture \"" + rule.captureName + "\"");
	};
	SequenceValues.prototype.toArray = function() {
		return this._valuesArray;
	};
	exports.sequence.capture = function(rule, name) {
		var captureRule = function() {
			return rule.apply(this, arguments);
		};
		captureRule.captureName = name;
		captureRule.isCaptured = true;
		return captureRule;
	};
	exports.sequence.extract = function(rule) {
		return function(result) {
			return result.get(rule);
		};
	};
	exports.sequence.applyValues = function(func) {
		var rules = Array.prototype.slice.call(arguments, 1);
		return function(result) {
			var values = rules.map(function(rule) {
				return result.get(rule);
			});
			return func.apply(this, values);
		};
	};
	exports.sequence.source = { captureName: "☃source☃" };
	exports.sequence.cut = function() {
		return function(input) {
			return results.cut(input);
		};
	};
	exports.optional = function(rule) {
		return function(input) {
			var result = rule(input);
			if (result.isSuccess()) return result.map(options.some);
			else if (result.isFailure()) return results.success(options.none, input);
			else return result;
		};
	};
	exports.zeroOrMoreWithSeparator = function(rule, separator) {
		return repeatedWithSeparator(rule, separator, false);
	};
	exports.oneOrMoreWithSeparator = function(rule, separator) {
		return repeatedWithSeparator(rule, separator, true);
	};
	var zeroOrMore = exports.zeroOrMore = function(rule) {
		return function(input) {
			var values = [];
			var result;
			while ((result = rule(input)) && result.isSuccess()) {
				input = result.remaining();
				values.push(result.value());
			}
			if (result.isError()) return result;
			else return results.success(values, input);
		};
	};
	exports.oneOrMore = function(rule) {
		return exports.oneOrMoreWithSeparator(rule, noOpRule);
	};
	function noOpRule(input) {
		return results.success(null, input);
	}
	var repeatedWithSeparator = function(rule, separator, isOneOrMore) {
		return function(input) {
			var result = rule(input);
			if (result.isSuccess()) {
				var mainRule = exports.sequence.capture(rule, "main");
				var remainingResult = zeroOrMore(exports.then(exports.sequence(separator, mainRule), exports.sequence.extract(mainRule)))(result.remaining());
				return results.success([result.value()].concat(remainingResult.value()), remainingResult.remaining());
			} else if (isOneOrMore || result.isError()) return result;
			else return results.success([], input);
		};
	};
	exports.leftAssociative = function(leftRule, rightRule, func) {
		var rights;
		if (func) rights = [{
			func,
			rule: rightRule
		}];
		else rights = rightRule;
		rights = rights.map(function(right) {
			return exports.then(right.rule, function(rightValue) {
				return function(leftValue, source) {
					return right.func(leftValue, rightValue, source);
				};
			});
		});
		var repeatedRule = exports.firstOf.apply(null, ["rules"].concat(rights));
		return function(input) {
			var start = input;
			var leftResult = leftRule(input);
			if (!leftResult.isSuccess()) return leftResult;
			var repeatedResult = repeatedRule(leftResult.remaining());
			while (repeatedResult.isSuccess()) {
				var remaining = repeatedResult.remaining();
				var source = start.to(repeatedResult.remaining());
				var right = repeatedResult.value();
				leftResult = results.success(right(leftResult.value(), source), remaining, source);
				repeatedResult = repeatedRule(leftResult.remaining());
			}
			if (repeatedResult.isError()) return repeatedResult;
			return leftResult;
		};
	};
	exports.leftAssociative.firstOf = function() {
		return Array.prototype.slice.call(arguments, 0);
	};
	exports.nonConsuming = function(rule) {
		return function(input) {
			return rule(input).changeRemaining(input);
		};
	};
	var describeToken = function(token) {
		if (token.value) return token.name + " \"" + token.value + "\"";
		else return token.name;
	};
	function describeTokenMismatch(input, expected) {
		var error;
		var token = input.head();
		if (token) error = errors.error({
			expected,
			actual: describeToken(token),
			location: token.source
		});
		else error = errors.error({
			expected,
			actual: "end of tokens"
		});
		return results.failure([error], input);
	}
}));
//#endregion
//#region ../../node_modules/lop/lib/StringSource.js
var require_StringSource = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function(string, description) {
		return {
			asString: function() {
				return string;
			},
			range: function(startIndex, endIndex) {
				return new StringSourceRange(string, description, startIndex, endIndex);
			}
		};
	};
	var StringSourceRange = function(string, description, startIndex, endIndex) {
		this._string = string;
		this._description = description;
		this._startIndex = startIndex;
		this._endIndex = endIndex;
	};
	StringSourceRange.prototype.to = function(otherRange) {
		return new StringSourceRange(this._string, this._description, this._startIndex, otherRange._endIndex);
	};
	StringSourceRange.prototype.describe = function() {
		var position = this._position();
		return (this._description ? this._description + "\n" : "") + "Line number: " + position.lineNumber + "\nCharacter number: " + position.characterNumber;
	};
	StringSourceRange.prototype.lineNumber = function() {
		return this._position().lineNumber;
	};
	StringSourceRange.prototype.characterNumber = function() {
		return this._position().characterNumber;
	};
	StringSourceRange.prototype._position = function() {
		var self = this;
		var index = 0;
		var nextNewLine = function() {
			return self._string.indexOf("\n", index);
		};
		var lineNumber = 1;
		while (nextNewLine() !== -1 && nextNewLine() < this._startIndex) {
			index = nextNewLine() + 1;
			lineNumber += 1;
		}
		var characterNumber = this._startIndex - index + 1;
		return {
			lineNumber,
			characterNumber
		};
	};
}));
//#endregion
//#region ../../node_modules/lop/lib/Token.js
var require_Token = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function(name, value, source) {
		this.name = name;
		this.value = value;
		if (source) this.source = source;
	};
}));
//#endregion
//#region ../../node_modules/lop/lib/bottom-up.js
var require_bottom_up = /* @__PURE__ */ __commonJSMin(((exports) => {
	var rules = require_rules();
	var results = require_parsing_results();
	exports.parser = function(name, prefixRules, infixRuleBuilders) {
		var self = {
			rule,
			leftAssociative,
			rightAssociative
		};
		var infixRules = new InfixRules(infixRuleBuilders.map(createInfixRule));
		var prefixRule = rules.firstOf(name, prefixRules);
		function createInfixRule(infixRuleBuilder) {
			return {
				name: infixRuleBuilder.name,
				rule: lazyRule(infixRuleBuilder.ruleBuilder.bind(null, self))
			};
		}
		function rule() {
			return createRule(infixRules);
		}
		function leftAssociative(name) {
			return createRule(infixRules.untilExclusive(name));
		}
		function rightAssociative(name) {
			return createRule(infixRules.untilInclusive(name));
		}
		function createRule(infixRules) {
			return apply.bind(null, infixRules);
		}
		function apply(infixRules, tokens) {
			var leftResult = prefixRule(tokens);
			if (leftResult.isSuccess()) return infixRules.apply(leftResult);
			else return leftResult;
		}
		return self;
	};
	function InfixRules(infixRules) {
		function untilExclusive(name) {
			return new InfixRules(infixRules.slice(0, ruleNames().indexOf(name)));
		}
		function untilInclusive(name) {
			return new InfixRules(infixRules.slice(0, ruleNames().indexOf(name) + 1));
		}
		function ruleNames() {
			return infixRules.map(function(rule) {
				return rule.name;
			});
		}
		function apply(leftResult) {
			var currentResult;
			var source;
			while (true) {
				currentResult = applyToTokens(leftResult.remaining());
				if (currentResult.isSuccess()) {
					source = leftResult.source().to(currentResult.source());
					leftResult = results.success(currentResult.value()(leftResult.value(), source), currentResult.remaining(), source);
				} else if (currentResult.isFailure()) return leftResult;
				else return currentResult;
			}
		}
		function applyToTokens(tokens) {
			return rules.firstOf("infix", infixRules.map(function(infix) {
				return infix.rule;
			}))(tokens);
		}
		return {
			apply,
			untilExclusive,
			untilInclusive
		};
	}
	exports.infix = function(name, ruleBuilder) {
		function map(func) {
			return exports.infix(name, function(parser) {
				var rule = ruleBuilder(parser);
				return function(tokens) {
					return rule(tokens).map(function(right) {
						return function(left, source) {
							return func(left, right, source);
						};
					});
				};
			});
		}
		return {
			name,
			ruleBuilder,
			map
		};
	};
	var lazyRule = function(ruleBuilder) {
		var rule;
		return function(input) {
			if (!rule) rule = ruleBuilder();
			return rule(input);
		};
	};
}));
//#endregion
//#region ../../node_modules/lop/lib/regex-tokeniser.js
var require_regex_tokeniser = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Token = require_Token();
	var StringSource = require_StringSource();
	exports.RegexTokeniser = RegexTokeniser;
	function RegexTokeniser(rules) {
		rules = rules.map(function(rule) {
			return {
				name: rule.name,
				regex: new RegExp(rule.regex.source, "g")
			};
		});
		function tokenise(input, description) {
			var source = new StringSource(input, description);
			var index = 0;
			var tokens = [];
			while (index < input.length) {
				var result = readNextToken(input, index, source);
				index = result.endIndex;
				tokens.push(result.token);
			}
			tokens.push(endToken(input, source));
			return tokens;
		}
		function readNextToken(string, startIndex, source) {
			for (var i = 0; i < rules.length; i++) {
				var regex = rules[i].regex;
				regex.lastIndex = startIndex;
				var result = regex.exec(string);
				if (result) {
					var endIndex = startIndex + result[0].length;
					if (result.index === startIndex && endIndex > startIndex) {
						var value = result[1];
						var token = new Token(rules[i].name, value, source.range(startIndex, endIndex));
						return {
							token,
							endIndex
						};
					}
				}
			}
			var endIndex = startIndex + 1;
			var token = new Token("unrecognisedCharacter", string.substring(startIndex, endIndex), source.range(startIndex, endIndex));
			return {
				token,
				endIndex
			};
		}
		function endToken(input, source) {
			return new Token("end", null, source.range(input.length, input.length));
		}
		return { tokenise };
	}
}));
//#endregion
//#region ../../node_modules/lop/index.js
var require_lop = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.Parser = require_parser().Parser;
	exports.rules = require_rules();
	exports.errors = require_errors();
	exports.results = require_parsing_results();
	exports.StringSource = require_StringSource();
	exports.Token = require_Token();
	exports.bottomUp = require_bottom_up();
	exports.RegexTokeniser = require_regex_tokeniser().RegexTokeniser;
	exports.rule = function(ruleBuilder) {
		var rule;
		return function(input) {
			if (!rule) rule = ruleBuilder();
			return rule(input);
		};
	};
}));
//#endregion
export { index_all_exports as n, init_index_all as r, require_lop as t };
