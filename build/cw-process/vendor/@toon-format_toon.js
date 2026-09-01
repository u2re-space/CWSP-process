//#region ../../node_modules/@toon-format/toon/dist/index.mjs
var NULL_LITERAL = "null";
var DELIMITERS = {
	comma: ",",
	tab: "	",
	pipe: "|"
};
var DEFAULT_DELIMITER = DELIMITERS.comma;
/**
* Escapes special characters in a string for encoding.
*
* @remarks
* Control characters outside `\n`, `\r`, `\t`, `\\`, and `"` are emitted as `\uXXXX`.
*/
function escapeString(value) {
	return value.replace(/\\/g, `\\\\`).replace(/"/g, `\\"`).replace(/\n/g, `\\n`).replace(/\r/g, `\\r`).replace(/\t/g, `\\t`).replace(/[\u0000-\u001F]/g, (c) => `\\u${c.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function isBooleanOrNullLiteral(token) {
	return token === "true" || token === "false" || token === "null";
}
/**
* Assigns an own data property without invoking inherited accessors.
*
* @remarks
* Plain assignment of `__proto__` would hit the `Object.prototype` setter and
* corrupt the prototype chain; `defineProperty` avoids that but is markedly
* slower, so every other key takes plain assignment.
*/
function setOwnProperty(target, key, value) {
	if (key === "__proto__") {
		Object.defineProperty(target, key, {
			value,
			enumerable: true,
			writable: true,
			configurable: true
		});
		return;
	}
	target[key] = value;
}
var COMMENT_LINE_PATTERN = new RegExp(`(?:^﻿?|\\n) *#`);
/**
* Pre-formatted string that the encoder emits verbatim at a primitive value
* position, bypassing quoting, escaping, and number/keyword detection.
*
* Returned from a replacer for an object or array value, it is ignored and
* the container is encoded normally.
*/
var RawString = class {
	constructor(value) {
		if (COMMENT_LINE_PATTERN.test(value)) throw new TypeError(`Raw string must not contain a line starting with "#": ${JSON.stringify(value)}`);
		this.value = value;
	}
};
function isRawString(value) {
	return value instanceof RawString;
}
var SURROGATE_PATTERN = /[\uD800-\uDFFF]/;
function normalizeValue(value) {
	if (value === null) return null;
	if (isRawString(value)) return value;
	if (typeof value === "object" && value !== null && "toJSON" in value && typeof value.toJSON === "function") {
		const next = value.toJSON();
		if (next !== value) return normalizeValue(next);
	}
	if (typeof value === "string") {
		assertNoLoneSurrogate(value, "string value");
		return value;
	}
	if (typeof value === "boolean") return value;
	if (typeof value === "number") {
		if (Object.is(value, -0)) return 0;
		if (!Number.isFinite(value)) return null;
		return value;
	}
	if (typeof value === "bigint") {
		if (value >= Number.MIN_SAFE_INTEGER && value <= Number.MAX_SAFE_INTEGER) return Number(value);
		return value.toString();
	}
	if (value instanceof Date) return value.toISOString();
	if (Array.isArray(value)) return value.map(normalizeValue);
	if (value instanceof Set) return Array.from(value).map(normalizeValue);
	if (value instanceof Map) return Object.fromEntries(Array.from(value, ([k, v]) => [String(k), normalizeValue(v)]));
	if (isPlainObject(value)) {
		const encodedValues = {};
		for (const key in value) if (Object.hasOwn(value, key)) {
			assertNoLoneSurrogate(key, "object key");
			setOwnProperty(encodedValues, key, normalizeValue(value[key]));
		}
		return encodedValues;
	}
	return null;
}
function assertNoLoneSurrogate(value, context) {
	if (!SURROGATE_PATTERN.test(value)) return;
	for (let index = 0; index < value.length; index++) {
		const code = value.charCodeAt(index);
		if (code < 55296 || code > 57343) continue;
		const isHighSurrogate = code <= 56319;
		const next = value.charCodeAt(index + 1);
		if (isHighSurrogate && next >= 56320 && next <= 57343) {
			index++;
			continue;
		}
		throw new TypeError(`Cannot encode ${context} containing an unpaired surrogate U+${code.toString(16).toUpperCase()} at index ${index}`);
	}
}
function isJsonPrimitive(value) {
	return value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean";
}
function isEncodablePrimitive(value) {
	return isJsonPrimitive(value) || isRawString(value);
}
function isJsonArray(value) {
	return Array.isArray(value);
}
function isJsonObject(value) {
	return value !== null && typeof value === "object" && !Array.isArray(value) && !isRawString(value);
}
function isEmptyObject(value) {
	return Object.keys(value).length === 0;
}
function isPlainObject(value) {
	if (value === null || typeof value !== "object") return false;
	const prototype = Object.getPrototypeOf(value);
	return prototype === null || prototype === Object.prototype;
}
function isArrayOfPrimitives(value) {
	return value.length === 0 || value.every((item) => isEncodablePrimitive(item));
}
function isArrayOfArrays(value) {
	return value.length === 0 || value.every((item) => isJsonArray(item));
}
function isArrayOfObjects(value) {
	return value.length === 0 || value.every((item) => isJsonObject(item));
}
var NUMERIC_LIKE_PATTERN = /^[+-]?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/i;
/** Narrows an arbitrary delimiter option, shared by the library and the CLI so both report it alike. */
function assertValidDelimiter(delimiter) {
	if (!Object.values(DELIMITERS).includes(delimiter)) throw new TypeError(`Invalid delimiter ${JSON.stringify(delimiter)}. Valid delimiters are: comma (,), tab (\\t), pipe (|)`);
}
/**
* Checks if a key can be used without quotes.
*
* @remarks
* Valid unquoted keys must start with a letter or underscore,
* followed by letters, digits, underscores, or dots.
*/
function isValidUnquotedKey(key) {
	return /^[A-Z_][\w.]*$/i.test(key);
}
/**
* Determines if a string value can be safely encoded without quotes.
*
* @remarks
* A string needs quoting if it:
* - Is empty
* - Has leading or trailing whitespace
* - Could be confused with a literal (boolean, null, number)
* - Contains structural characters (colons, brackets, braces)
* - Contains quotes or backslashes (need escaping)
* - Contains control characters (newlines, tabs, etc.)
* - Contains the active delimiter
* - Starts with a list marker (hyphen)
* - Starts with a comment marker (#)
*/
function isSafeUnquoted(value, delimiter = DEFAULT_DELIMITER) {
	if (!value) return false;
	if (/^[ \t]|[ \t]$/.test(value)) return false;
	if (isBooleanOrNullLiteral(value) || isNumericLike(value)) return false;
	if (value.includes(":")) return false;
	if (value.includes("\"") || value.includes("\\")) return false;
	if (/[[\]{}]/.test(value)) return false;
	if (/[\u0000-\u001F]/.test(value)) return false;
	if (value.includes(delimiter)) return false;
	if (value.startsWith("-")) return false;
	if (value.startsWith("#")) return false;
	return true;
}
function isNumericLike(value) {
	return NUMERIC_LIKE_PATTERN.test(value);
}
function encodePrimitive(value, delimiter) {
	if (isRawString(value)) return value.value;
	if (value === null) return NULL_LITERAL;
	if (typeof value === "boolean") return String(value);
	if (typeof value === "number") return String(value);
	return encodeStringLiteral(value, delimiter);
}
function encodeStringLiteral(value, delimiter = DEFAULT_DELIMITER) {
	if (isSafeUnquoted(value, delimiter)) return value;
	return `"${escapeString(value)}"`;
}
function encodeKey(key) {
	if (isValidUnquotedKey(key)) return key;
	return `"${escapeString(key)}"`;
}
function encodeAndJoinPrimitives(values, delimiter = DEFAULT_DELIMITER) {
	return values.map((v) => encodePrimitive(v, delimiter)).join(delimiter);
}
function formatHeader(length, options) {
	const key = options?.key;
	const fields = options?.fields;
	const delimiter = options?.delimiter ?? ",";
	let header = "";
	if (key != null) header += encodeKey(key);
	header += `[${length}${options?.keyed ? ":" : ""}${delimiter !== DEFAULT_DELIMITER ? delimiter : ""}]`;
	if (fields) header += `{${formatFieldSegment(fields, delimiter)}}`;
	header += ":";
	return header;
}
function formatFieldSegment(fields, delimiter) {
	return fields.map((field) => encodeKey(field.name) + (field.children ? `{${formatFieldSegment(field.children, delimiter)}}` : "")).join(delimiter);
}
/** Classifies rows into a tabular field list, or undefined when they are not uniformly tabular. */
function extractTabularFields(rows) {
	if (rows.length === 0) return;
	const firstKeys = Object.keys(rows[0]);
	if (firstKeys.length === 0) return;
	for (const row of rows) {
		if (Object.keys(row).length !== firstKeys.length) return;
		for (const key of firstKeys) if (!Object.hasOwn(row, key)) return;
	}
	const fieldNodes = [];
	for (const key of firstKeys) {
		const fieldNode = classifyColumn(key, rows.map((row) => row[key]));
		if (!fieldNode) return;
		fieldNodes.push(fieldNode);
	}
	return fieldNodes;
}
/** Classifies an object's values as a keyed tabular field list (>=2 uniform non-empty object entries), or undefined. */
function extractKeyedTabularFields(value) {
	const entryValues = Object.values(value);
	if (entryValues.length < 2) return;
	if (!entryValues.every((entryValue) => isJsonObject(entryValue) && !isEmptyObject(entryValue))) return;
	return extractTabularFields(entryValues);
}
/** Reads one row's leaf cells in the field order `extractTabularFields` produced. */
function collectRowLeaves(row, fields) {
	const leaves = [];
	collectLeafValues(row, fields, leaves);
	return leaves;
}
function classifyColumn(name, values) {
	if (values.every((value) => isEncodablePrimitive(value))) return { name };
	if (!values.every((value) => isJsonObject(value) && !isEmptyObject(value))) return;
	const children = extractTabularFields(values);
	if (!children) return;
	return {
		name,
		children
	};
}
function collectLeafValues(row, fields, leaves) {
	for (const field of fields) {
		const value = row[field.name];
		if (field.children) collectLeafValues(value, field.children, leaves);
		else leaves.push(value);
	}
}
function* encodeJsonValue(value, options, depth) {
	if (isEncodablePrimitive(value)) {
		const encodedPrimitive = encodePrimitive(value, options.delimiter);
		if (encodedPrimitive !== "") yield encodedPrimitive;
		return;
	}
	if (isJsonArray(value)) yield* encodeArrayLines(void 0, value, depth, options);
	else if (isJsonObject(value)) {
		const keyedFields = extractKeyedTabularFields(value);
		if (keyedFields) {
			yield* encodeKeyedObjectLines(void 0, value, keyedFields, depth, options);
			return;
		}
		yield* encodeObjectLines(value, depth, options);
	}
}
function* encodeObjectLines(value, depth, options) {
	for (const [key, val] of Object.entries(value)) yield* encodeKeyValuePairLines(key, val, depth, options);
}
function* encodeKeyValuePairLines(key, value, depth, options) {
	const encodedKey = encodeKey(key);
	if (isEncodablePrimitive(value)) yield indentedLine(depth, `${encodedKey}: ${encodePrimitive(value, options.delimiter)}`, options.indentSize);
	else if (isJsonArray(value)) yield* encodeArrayLines(key, value, depth, options);
	else if (isJsonObject(value)) {
		const keyedFields = extractKeyedTabularFields(value);
		if (keyedFields) {
			yield* encodeKeyedObjectLines(key, value, keyedFields, depth, options);
			return;
		}
		yield indentedLine(depth, `${encodedKey}:`, options.indentSize);
		if (!isEmptyObject(value)) yield* encodeObjectLines(value, depth + 1, options);
	}
}
function* encodeKeyedObjectLines(key, value, fields, depth, options) {
	const entries = Object.entries(value);
	yield indentedLine(depth, formatHeader(entries.length, {
		key,
		fields,
		delimiter: options.delimiter,
		keyed: true
	}), options.indentSize);
	yield* encodeKeyedEntryRowsLines(entries, fields, depth + 1, options);
}
function* encodeKeyedEntryRowsLines(entries, fields, depth, options) {
	for (const [entryKey, entryValue] of entries) {
		const leaves = collectRowLeaves(entryValue, fields);
		yield indentedLine(depth, `${encodeKey(entryKey)}: ${encodeAndJoinPrimitives(leaves, options.delimiter)}`, options.indentSize);
	}
}
function* encodeArrayLines(key, value, depth, options) {
	if (value.length === 0) {
		yield indentedLine(depth, key != null ? `${encodeKey(key)}: []` : "[]", options.indentSize);
		return;
	}
	if (isArrayOfPrimitives(value)) {
		yield indentedLine(depth, encodeInlineArrayLine(value, options.delimiter, key), options.indentSize);
		return;
	}
	if (isArrayOfArrays(value)) {
		if (value.every((arr) => isArrayOfPrimitives(arr))) {
			yield* encodeArrayOfArraysAsListItemsLines(key, value, depth, options);
			return;
		}
	}
	if (isArrayOfObjects(value)) {
		const fields = extractTabularFields(value);
		if (fields) yield* encodeArrayOfObjectsAsTabularLines(key, value, fields, depth, options);
		else yield* encodeMixedArrayAsListItemsLines(key, value, depth, options);
		return;
	}
	yield* encodeMixedArrayAsListItemsLines(key, value, depth, options);
}
function* encodeArrayOfArraysAsListItemsLines(prefix, values, depth, options) {
	yield indentedLine(depth, formatHeader(values.length, {
		key: prefix,
		delimiter: options.delimiter
	}), options.indentSize);
	for (const arr of values) if (isArrayOfPrimitives(arr)) {
		const arrayLine = encodeInlineArrayLine(arr, options.delimiter);
		yield indentedListItem(depth + 1, arrayLine, options.indentSize);
	}
}
function encodeInlineArrayLine(values, delimiter, prefix) {
	const header = formatHeader(values.length, {
		key: prefix,
		delimiter
	});
	const joinedValue = encodeAndJoinPrimitives(values, delimiter);
	if (values.length === 0) return header;
	return `${header} ${joinedValue}`;
}
function* encodeArrayOfObjectsAsTabularLines(prefix, rows, fields, depth, options) {
	yield indentedLine(depth, formatHeader(rows.length, {
		key: prefix,
		fields,
		delimiter: options.delimiter
	}), options.indentSize);
	yield* writeTabularRowsLines(rows, fields, depth + 1, options);
}
function* writeTabularRowsLines(rows, fields, depth, options) {
	for (const row of rows) yield indentedLine(depth, encodeAndJoinPrimitives(collectRowLeaves(row, fields), options.delimiter), options.indentSize);
}
function* encodeMixedArrayAsListItemsLines(prefix, items, depth, options) {
	yield indentedLine(depth, formatHeader(items.length, {
		key: prefix,
		delimiter: options.delimiter
	}), options.indentSize);
	for (const item of items) yield* encodeListItemValueLines(item, depth + 1, options);
}
function* encodeObjectAsListItemLines(obj, depth, options) {
	if (isEmptyObject(obj)) {
		yield indentedLine(depth, "-", options.indentSize);
		return;
	}
	const entries = Object.entries(obj);
	const [firstKey, firstValue] = entries[0];
	const restEntries = entries.slice(1);
	if (isJsonArray(firstValue) && isArrayOfObjects(firstValue)) {
		const fields = extractTabularFields(firstValue);
		if (fields) {
			yield indentedListItem(depth, formatHeader(firstValue.length, {
				key: firstKey,
				fields,
				delimiter: options.delimiter
			}), options.indentSize);
			yield* writeTabularRowsLines(firstValue, fields, depth + 2, options);
			if (restEntries.length > 0) yield* encodeObjectLines(Object.fromEntries(restEntries), depth + 1, options);
			return;
		}
	}
	if (isJsonObject(firstValue)) {
		const keyedFields = extractKeyedTabularFields(firstValue);
		if (keyedFields) {
			const keyedEntries = Object.entries(firstValue);
			yield indentedListItem(depth, formatHeader(keyedEntries.length, {
				key: firstKey,
				fields: keyedFields,
				delimiter: options.delimiter,
				keyed: true
			}), options.indentSize);
			yield* encodeKeyedEntryRowsLines(keyedEntries, keyedFields, depth + 2, options);
			if (restEntries.length > 0) yield* encodeObjectLines(Object.fromEntries(restEntries), depth + 1, options);
			return;
		}
	}
	const encodedKey = encodeKey(firstKey);
	if (isEncodablePrimitive(firstValue)) yield indentedListItem(depth, `${encodedKey}: ${encodePrimitive(firstValue, options.delimiter)}`, options.indentSize);
	else if (isJsonArray(firstValue)) if (firstValue.length === 0) yield indentedListItem(depth, `${encodedKey}: []`, options.indentSize);
	else if (isArrayOfPrimitives(firstValue)) yield indentedListItem(depth, `${encodedKey}${encodeInlineArrayLine(firstValue, options.delimiter)}`, options.indentSize);
	else {
		yield indentedListItem(depth, `${encodedKey}${formatHeader(firstValue.length, { delimiter: options.delimiter })}`, options.indentSize);
		for (const item of firstValue) yield* encodeListItemValueLines(item, depth + 2, options);
	}
	else if (isJsonObject(firstValue)) {
		yield indentedListItem(depth, `${encodedKey}:`, options.indentSize);
		if (!isEmptyObject(firstValue)) yield* encodeObjectLines(firstValue, depth + 2, options);
	}
	if (restEntries.length > 0) yield* encodeObjectLines(Object.fromEntries(restEntries), depth + 1, options);
}
function* encodeListItemValueLines(value, depth, options) {
	if (isEncodablePrimitive(value)) yield indentedListItem(depth, encodePrimitive(value, options.delimiter), options.indentSize);
	else if (isJsonArray(value)) if (isArrayOfPrimitives(value)) yield indentedListItem(depth, encodeInlineArrayLine(value, options.delimiter), options.indentSize);
	else {
		yield indentedListItem(depth, formatHeader(value.length, { delimiter: options.delimiter }), options.indentSize);
		for (const item of value) yield* encodeListItemValueLines(item, depth + 1, options);
	}
	else if (isJsonObject(value)) yield* encodeObjectAsListItemLines(value, depth, options);
}
function indentedLine(depth, content, indentSize) {
	return " ".repeat(indentSize * depth) + content;
}
function indentedListItem(depth, content, indentSize) {
	return indentedLine(depth, "- " + content, indentSize);
}
/**
* Applies a replacer function to a `JsonValue` and all its descendants.
*
* The replacer is called for the root (key='', path=[]), every object property
* (key = property name), and every array element (key = string index).
*/
function applyReplacer(root, replacer) {
	const replacedRoot = replacer("", root, []);
	if (replacedRoot === void 0) return transformChildren(root, replacer, []);
	return transformReplaced(root, replacedRoot, replacer, []);
}
/**
* Resolves a replacer's (non-`undefined`) return value at a single position.
*
* A `RawString` only stands in for a primitive: returned for an object or
* array value, it is ignored and the original container is traversed normally.
*/
function transformReplaced(original, replaced, replacer, path) {
	if (isRawString(replaced) && !isEncodablePrimitive(original)) return transformChildren(original, replacer, path);
	return transformChildren(normalizeValue(replaced), replacer, path);
}
function transformChildren(value, replacer, path) {
	if (isJsonObject(value)) return transformObject(value, replacer, path);
	if (isJsonArray(value)) return transformArray(value, replacer, path);
	return value;
}
function transformObject(obj, replacer, path) {
	const result = {};
	for (const [key, value] of Object.entries(obj)) {
		const childPath = [...path, key];
		const replacedValue = replacer(key, value, childPath);
		if (replacedValue === void 0) continue;
		setOwnProperty(result, key, transformReplaced(value, replacedValue, replacer, childPath));
	}
	return result;
}
function transformArray(arr, replacer, path) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		const value = arr[i];
		const childPath = [...path, i];
		const replacedValue = replacer(String(i), value, childPath);
		if (replacedValue === void 0) continue;
		result.push(transformReplaced(value, replacedValue, replacer, childPath));
	}
	return result;
}
/**
* Encodes a JavaScript value into TOON format string.
*
* @param input Any JavaScript value (objects, arrays, primitives)
* @param options Optional encoding configuration
* @returns TOON formatted string
*
* @example
* ```ts
* encode({ name: 'Ada', age: 30 })
* // name: Ada
* // age: 30
*
* encode({ users: [{ id: 1 }, { id: 2 }] })
* // users[2]{id}:
* //   1
* //   2
*
* encode({ tags: [] })
* // tags: []
*
* encode(data, { indentSize: 4 })
* ```
*/
function encode(input, options) {
	return Array.from(encodeLines(input, options)).join("\n");
}
/**
* Encodes a JavaScript value into TOON format as a sequence of lines.
*
* This function yields TOON lines one at a time without building the full string,
* making it suitable for streaming large outputs to files, HTTP responses, or process stdout.
*
* @param input Any JavaScript value (objects, arrays, primitives)
* @param options Optional encoding configuration
* @returns Iterable of TOON lines (without trailing newlines)
*
* @example
* ```ts
* // Stream to stdout
* for (const line of encodeLines({ name: 'Ada', age: 30 })) {
*   console.log(line)
* }
*
* // Collect to array
* const lines = Array.from(encodeLines(data))
*
* // Equivalent to encode()
* const toonString = Array.from(encodeLines(data, options)).join('\n')
* ```
*/
function encodeLines(input, options) {
	const normalizedValue = normalizeValue(input);
	const resolvedOptions = resolveOptions(options);
	return encodeJsonValue(resolvedOptions.replacer ? applyReplacer(normalizedValue, resolvedOptions.replacer) : normalizedValue, resolvedOptions, 0);
}
function resolveOptions(options) {
	const delimiter = options?.delimiter ?? DEFAULT_DELIMITER;
	assertValidDelimiter(delimiter);
	return {
		indentSize: options?.indentSize ?? options?.indent ?? 2,
		delimiter,
		replacer: options?.replacer
	};
}
//#endregion
export { encode as t };
