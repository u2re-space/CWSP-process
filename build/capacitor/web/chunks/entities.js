import { n as __exportAll } from "./rolldown-runtime.js";
import { B as canParseURL, Cn as CORE_ENTITY_EXTRACTION_INSTRUCTION, G as loadSettings } from "../shells/boot-index.js";
import { fn as JSOX } from "../com/app.js";
import { n as extractJSONFromAIResponse, t as STRICT_JSON_INSTRUCTIONS } from "./AIResponseParser.js";
import { t as encode } from "../vendor/@toon-format_toon.js";
//#region src/shared/service/model/GPT-Config.ts
var typesForKind = {
	"math": "input_text",
	"url": "input_image",
	"text": "input_text",
	"input_text": "input_text",
	"output_text": "input_text",
	"image_url": "input_image",
	"image": "input_image",
	"input_image": "input_image",
	"input_url": "input_image",
	"json": "input_text",
	"markdown": "input_text",
	"code": "input_text",
	"entity": "input_text",
	"structured": "input_text",
	"unknown": "input_text",
	"svg": "input_text",
	"xml": "input_text"
};
var getDataKindByMIMEType = (mime) => {
	if (!mime) return "input_text";
	const lower = mime.toLowerCase();
	if (lower.includes("image")) return "input_image";
	if (lower.includes("json")) return "json";
	if (lower.includes("javascript") || lower.includes("typescript")) return "code";
	if (lower.includes("markdown") || lower.includes("md")) return "markdown";
	if (lower.includes("url")) return "input_url";
	if (lower.includes("text/html")) return "markdown";
	if (lower.includes("text/plain")) return "input_text";
	return "input_text";
};
var detectDataKindFromContent = (content) => {
	if (!content || typeof content !== "string") return "input_text";
	const trimmed = content.trim();
	if (trimmed.startsWith("{") && trimmed.endsWith("}") || trimmed.startsWith("[") && trimmed.endsWith("]")) try {
		JSON.parse(trimmed);
		return "json";
	} catch {}
	if (canParseURL(trimmed)) return "url";
	if (trimmed.includes("<svg") && trimmed.includes("</svg>")) return "xml";
	if (trimmed.startsWith("data:image/") && trimmed.includes(";base64,") && !trimmed.includes("\n") && trimmed.length < 1e5) try {
		const url = new URL(trimmed);
		if (url.protocol === "data:" && url.pathname.startsWith("image/")) return "input_image";
	} catch {}
	if (/\$\$[\s\S]+\$\$|\$[^$]+\$|\\begin\{equation\}/.test(trimmed)) return "math";
	if (/```[\s\S]+```|^(function|const|let|var|class|import|export)\s/m.test(trimmed)) return "code";
	if (/^#{1,6}\s|^\*\*|^-\s|\[.+\]\(.+\)|^>\s/m.test(trimmed)) return "markdown";
	return "input_text";
};
var actionWithDataType = (data) => {
	const context = data?.context;
	const kindType = typesForKind?.[data?.dataKind || "input_text"];
	const contextPrompt = buildContextPrompt(context);
	switch (kindType) {
		case "input_image": return `${contextPrompt}

Recognize data from image, also preferred to orient by fonts in image.

After recognition, do not include or remember image itself.

---

In (\`recognized_data\` key), can be written phone numbers, emails, URLs, dates, times, codes, etc. Additional formatting rules:

In recognized from image data (what you seen in image), do:
- If textual content, format as Markdown string (multiline).
- If phone number, format as as correct phone number (in normalized format).
  - Also, if phone numbers (for example starts with +7, format as 8), replace to correct regional code.
  - Remove brackets, parentheses, spaces or other symbols from phone number.
  - Trim spaces from phone number.
- If email, format as as correct email (in normalized format), and trim spaces from email.
- If URL, format as as correct URL (in normalized format), and unicode codes to human readable, and trim spaces from URL.
- If date, format as as correct date (in normalized format).
- If time, format as as correct time (in normalized format).
- If math (expression, equation, formula), format as $KaTeX$
- If table (or looks alike table), format as | table |
- If image, format as [$image$]($image$)
- If code, format as \`\`\`$code$\`\`\` (multiline) or \`$code$\` (single-line)
- If JSON, format as correct JSON string, and trim spaces from JSON string.
- If other, format as $text$.
- If seen alike list, format as list (in markdown format).

---

Some additional actions:
- Collect some special data tags and keywords (if has any).
- Also, can you provide in markdown pre-formatted free-form analyzed or recognized verbose data (in \`verbose_data\` key).

---

CRITICAL OUTPUT FORMAT: Return ONLY valid JSON. No markdown code blocks, no explanations, no prose.
Your response must start with { or [ and end with } or ].

Expected output structure:
{
    "keywords_and_tags": ["string array"],
    "recognized_data": ["any array"],
    "verbose_data": "markdown string",
    "using_ready": true,
    "confidence": 0.95,
    "suggested_type": "document_type"
}
`;
		case "input_text": return `${contextPrompt}

Analyze text and extract specific or special data from it, also normalize data by those rules...

---

In (\`recognized_data\` key), can be written phone numbers, emails, URLs, dates, times, codes, etc. Additional formatting rules:

Normalize phone numbers, emails, URLs, dates, times, codes, etc for best efforts and by those rules.
- If phone number, format as as correct phone number (in normalized format).
  - If phone numbers (for example starts with +7, format as 8), replace to correct regional code.
  - Trim spaces from phone numbers, emails, URLs, dates, times, codes, etc.
  - Remove brackets, parentheses, spaces or other symbols from phone numbers.
- If email, format as as correct email (in normalized format), and trim spaces from email.
- If URL, format as as correct URL (in normalized format), and unicode codes to human readable, and trim spaces from URL.
- If date, format as as correct date (in normalized format).
- If time, format as as correct time (in normalized format).
- If math, format as $KaTeX$
- If table, format as | table |
- If image, format as [$image$]($image$)
- If code, format as \`\`\`$code$\`\`\` (multiline) or \`$code$\` (single-line)
- If JSON, format as correct JSON string, and trim spaces from JSON string.
- If other, format as $text$.
- If seen alike list, format as list (in markdown format).

---

Some additional actions:
- Collect some special data tags and keywords (if has any).
- Also, can you provide in markdown pre-formatted free-form analyzed or recognized verbose data (in \`verbose_data\` key).
- Detect entity type if applicable (task, event, person, place, service, item, etc.)

---

CRITICAL OUTPUT FORMAT: Return ONLY valid JSON. No markdown code blocks, no explanations, no prose.
Your response must start with { or [ and end with } or ].

Expected output structure:
{
    "keywords_and_tags": ["string array"],
    "recognized_data": ["any array"],
    "verbose_data": "markdown string",
    "using_ready": true,
    "confidence": 0.95,
    "suggested_type": "entity_type",
    "suggested_modifications": []
}
`;
	}
	return contextPrompt || "";
};
var buildContextPrompt = (context) => {
	if (!context) return "";
	const parts = [];
	if (context.operation) parts.push(`Operation: ${{
		create: "Create new data entries based on provided information.",
		modify: "Modify existing data with provided changes while preserving structure.",
		merge: "Intelligently merge new data with existing data, avoiding duplicates.",
		analyze: "Analyze and extract structured information from the data.",
		extract: "Extract specific data points matching the criteria."
	}[context.operation] || context.operation}`);
	if (context.entityType) parts.push(`Target entity type: ${context.entityType}`);
	if (context.existingData) parts.push(`Existing data context provided - consider for merge/update operations.`);
	if (context.filters?.length) {
		const filterDesc = context.filters.map((f) => `${f.field} ${f.operator} ${JSON.stringify(f.value)}`).join(", ");
		parts.push(`Apply filters: ${filterDesc}`);
	}
	if (context.searchTerms?.length) parts.push(`Search terms: ${context.searchTerms.join(", ")}`);
	if (context.priority) parts.push(`Priority level: ${context.priority}`);
	return parts.length ? `Context:\n${parts.join("\n")}\n\n---\n` : "";
};
var buildModificationPrompt = (instructions) => {
	if (!instructions?.length) return "";
	const parts = instructions.map((inst, i) => {
		const condStr = inst.conditions?.length ? ` when ${inst.conditions.map((c) => `${c.field} ${c.operator} ${JSON.stringify(c.value)}`).join(" AND ")}` : "";
		switch (inst.action) {
			case "update": return `${i + 1}. UPDATE field "${inst.target}" to ${JSON.stringify(inst.value)}${condStr}`;
			case "delete": return `${i + 1}. DELETE field "${inst.target}"${condStr}`;
			case "merge": return `${i + 1}. MERGE into "${inst.target}" with ${JSON.stringify(inst.value)}${condStr}`;
			case "append": return `${i + 1}. APPEND ${JSON.stringify(inst.value)} to "${inst.target}"${condStr}`;
			case "replace": return `${i + 1}. REPLACE "${inst.target}" with ${JSON.stringify(inst.value)}${condStr}`;
			case "transform": return `${i + 1}. TRANSFORM "${inst.target}" using: ${inst.transformFn}${condStr}`;
			default: return "";
		}
	}).filter(Boolean);
	return parts.length ? `\nModification instructions:\n${parts.join("\n")}\n` : "";
};
var DATA_MODIFICATION_PROMPT = `
You are a data modification assistant. Your task is to modify existing data based on the provided instructions.

Rules for modification:
1. Preserve the original data structure unless explicitly asked to change it.
2. Apply modifications in order, one by one.
3. Validate data types match the schema.
4. Return the complete modified entity, not just the changes.
5. If a modification cannot be applied, include it in the "errors" array with explanation.

CRITICAL: Output ONLY valid JSON. No markdown code blocks, no explanations, no prose.
Your response must start with { and end with }.

Expected output structure:
{
    "modified_entity": { /* complete modified entity */ },
    "changes_made": [ /* list of applied changes */ ],
    "errors": [ /* list of failed modifications with reasons */ ],
    "warnings": [ /* non-critical issues */ ]
}
`;
var DATA_SELECTION_PROMPT = `
You are a data selection and filtering assistant. Your task is to find and select data matching the criteria.

Selection rules:
1. Apply all filters in order (AND logic by default).
2. Rank results by relevance to search terms.
3. Include confidence scores for fuzzy matches.
4. Group similar results to avoid duplicates.

CRITICAL: Output ONLY valid JSON. No markdown code blocks, no explanations, no prose.
Your response must start with { and end with }.

Expected output structure:
{
    "selected_items": [ /* items matching criteria */ ],
    "total_matches": number,
    "filter_stats": { /* breakdown by filter */ },
    "suggestions": [ /* related items that might be relevant */ ]
}
`;
var ENTITY_MERGE_PROMPT = `
You are an entity merging assistant. Your task is to intelligently merge multiple entities or data sources.

Merge rules:
1. Prefer newer/more complete data when conflicts arise.
2. Combine arrays without duplicates.
3. Merge nested objects recursively.
4. Preserve IDs and relationships.
5. Track the source of each merged field.

CRITICAL: Output ONLY valid JSON. No markdown code blocks, no explanations, no prose.
Your response must start with { and end with }.

Expected output structure:
{
    "merged_entity": { /* result of merge */ },
    "conflicts_resolved": [ /* list of conflicts and how they were resolved */ ],
    "sources_used": [ /* which source contributed what */ ],
    "merge_confidence": number
}
`;
//#endregion
//#region src/shared/service/model/GPT-Responses.ts
var hasFile = () => typeof globalThis.File !== "undefined";
var hasBlob = () => typeof globalThis.Blob !== "undefined";
var DEFAULT_REQUEST_TIMEOUTS = {
	low: 6e4,
	medium: 3e5,
	high: 9e5
};
var RETRY_DELAY = 2e3;
var getRuntimeAiSettings = () => {
	return globalThis.runtimeSettings?.ai || {};
};
var normalizeDurationMs = (value, fallback) => {
	if (typeof value !== "number" || !Number.isFinite(value) || value <= 0) return fallback;
	if (value < 1e3) return value * 1e3;
	return value;
};
/**
* Get timeout configuration from settings or use defaults
*/
function getTimeoutConfig(effort) {
	const settings = getRuntimeAiSettings();
	const timeoutSettings = settings?.requestTimeout;
	const maxRetries = typeof settings?.maxRetries === "number" ? Math.max(0, Math.floor(settings.maxRetries)) : 2;
	return {
		timeout: normalizeDurationMs(timeoutSettings?.[effort], DEFAULT_REQUEST_TIMEOUTS[effort]),
		maxRetries
	};
}
var toBase64 = (bytes) => {
	if (typeof globalThis.Buffer !== "undefined") return globalThis.Buffer.from(bytes).toString("base64");
	const CHUNK_SIZE = 1048576;
	if (bytes.length > CHUNK_SIZE) {
		let result = "";
		for (let i = 0; i < bytes.length; i += CHUNK_SIZE) {
			const chunk = bytes.slice(i, i + CHUNK_SIZE);
			let binary = "";
			for (let j = 0; j < chunk.length; j++) binary += String.fromCharCode(chunk[j]);
			result += typeof btoa === "function" ? btoa(binary) : "";
		}
		return result;
	}
	let binary = "";
	for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
	return typeof btoa === "function" ? btoa(binary) : "";
};
var getUsableData = async (data) => {
	const FileCtor = hasFile() ? globalThis.File : void 0;
	const BlobCtor = hasBlob() ? globalThis.Blob : void 0;
	if (BlobCtor && data?.dataSource instanceof BlobCtor || FileCtor && data?.dataSource instanceof FileCtor) {
		const fileSize = data?.dataSource?.size || 0;
		const MAX_FILE_SIZE = 10485760;
		if (fileSize > MAX_FILE_SIZE) {
			console.warn(`[GPT-Responses] File too large: ${fileSize} bytes > ${MAX_FILE_SIZE} bytes`);
			return {
				"type": "input_text",
				"text": `[File too large: ${(fileSize / 1024 / 1024).toFixed(1)}MB. Maximum allowed: ${(MAX_FILE_SIZE / 1024 / 1024).toFixed(1)}MB]`
			};
		}
		if (typesForKind?.[data?.dataKind || "input_text"] === "input_image" || data?.dataSource?.type?.startsWith?.("image/")) try {
			const BASE64URL = `data:${data?.dataSource?.type};base64,`;
			const arrayBuffer = await data?.dataSource?.arrayBuffer();
			if (!arrayBuffer) throw new Error("Failed to read file as ArrayBuffer");
			return {
				"type": "input_image",
				"detail": "auto",
				"image_url": BASE64URL + toBase64(new Uint8Array(arrayBuffer))
			};
		} catch (error) {
			console.error("[GPT-Responses] Failed to process image file:", error);
			return {
				"type": "input_text",
				"text": `[Failed to process image file: ${error}]`
			};
		}
		try {
			const text = await data?.dataSource?.text?.();
			if (text) return {
				"type": "input_text",
				"text": text
			};
		} catch (error) {
			console.error("[GPT-Responses] Failed to read text file:", error);
			return {
				"type": "input_text",
				"text": `[Failed to read text file: ${error}]`
			};
		}
	} else if (typeof data?.dataSource == "string") {
		const effectiveKind = data?.dataKind || detectDataKindFromContent(data.dataSource);
		if (typesForKind?.[effectiveKind] == "input_image") {
			const content = data?.dataSource?.trim?.() || "";
			if (content.startsWith("data:image/") && content.includes(";base64,")) try {
				const url = new URL(content);
				if (url.protocol === "data:" && url.pathname.startsWith("image/")) return {
					"type": "input_image",
					"image_url": content,
					"detail": "auto"
				};
			} catch {}
			else if (canParseURL(content)) return {
				"type": "input_image",
				"image_url": content,
				"detail": "auto"
			};
		}
		return {
			"type": "input_text",
			"text": data?.dataSource
		};
	}
	let result = data?.dataSource;
	try {
		result = typeof data?.dataSource != "object" ? data?.dataSource : encode(data?.dataSource);
	} catch (e) {
		console.warn(e);
	}
	return {
		"type": typesForKind?.[data?.dataKind || "input_text"] || "text",
		"text": result
	};
};
var GPTResponses = class {
	apiKey;
	apiSecret;
	apiUrl = "https://api.proxyapi.ru/openai/v1";
	model = "gpt-5.6-luna";
	responseId = null;
	pending = [];
	messages = [];
	tools = /* @__PURE__ */ new Map();
	context = null;
	responseMap = /* @__PURE__ */ new Map();
	constructor(apiKey, apiUrl, apiSecret, model) {
		this.apiKey = apiKey || "";
		this.apiUrl = apiUrl || this.apiUrl;
		this.apiSecret = apiSecret || "";
		this.model = model || this.model;
	}
	setContext(context) {
		this.context = context;
		return this;
	}
	async useMCP(serverLabel, origin, clientKey, secretKey) {
		this.tools.set(origin?.trim?.(), {
			"type": "mcp",
			"server_label": serverLabel,
			"server_url": origin,
			"headers": { "authorization": `Bearer ${clientKey}:${secretKey}` },
			"require_approval": "never"
		});
		return this.tools.get(origin?.trim?.());
	}
	async convertPlainToInput(dataSource, dataKind = null, additionalAction = null) {
		dataKind ??= getDataKindByMIMEType(dataSource?.type) || "input_text";
		const dataInput = {
			dataSource,
			dataKind,
			context: this.context
		};
		const usableData = await getUsableData(dataInput);
		return {
			type: "message",
			role: "user",
			content: [
				{
					type: "input_text",
					text: "What to do: " + actionWithDataType(dataInput)
				},
				additionalAction ? {
					type: "text",
					text: "Additional request data: " + additionalAction
				} : null,
				{
					type: "input_text",
					text: "\n === BEGIN:ATTACHED_DATA === \n"
				},
				{ ...usableData },
				{
					type: "input_text",
					text: "\n === END:ATTACHED_DATA === \n"
				}
			].filter?.((item) => item !== null)
		};
	}
	async attachToRequest(dataSource, dataKind = null, firstAction = null) {
		this.pending.push(await this.convertPlainToInput(dataSource, dataKind ??= getDataKindByMIMEType(dataSource?.type) || "input_text"));
		if (firstAction) this.pending.push(await this.askToDoAction(firstAction));
		return this.pending[this.pending.length - 1];
	}
	async attachExistingData(existingData, entityType) {
		this.context = {
			...this.context,
			existingData,
			entityType: entityType || this.context?.entityType
		};
		await this.giveForRequest(`existing_data: \`${encode(existingData)}\`\n`);
		return this;
	}
	async giveForRequest(whatIsIt) {
		if (typeof whatIsIt !== "string") try {
			const dataKind = getDataKindByMIMEType(whatIsIt?.type) || "input_text";
			const usable = await getUsableData({
				dataSource: whatIsIt,
				dataKind,
				context: this.context
			});
			this?.pending?.push?.({
				type: "message",
				role: "user",
				content: [
					{
						type: "input_text",
						text: "Additional data for request:"
					},
					{
						type: "input_text",
						text: "\n === BEGIN:ATTACHED_DATA === \n"
					},
					{ ...usable },
					{
						type: "input_text",
						text: "\n === END:ATTACHED_DATA === \n"
					}
				]
			});
			return this?.pending?.[this?.pending?.length - 1];
		} catch (e) {
			whatIsIt = String(whatIsIt);
		}
		this?.pending?.push?.({
			type: "message",
			role: "user",
			content: [{
				type: "input_text",
				text: "Additional data for request:"
			}, {
				type: "input_text",
				text: String(whatIsIt)
			}]
		});
		return this?.pending?.[this?.pending?.length - 1];
	}
	async askToDoAction(action) {
		this?.pending?.push?.({
			type: "message",
			role: "user",
			content: [{
				type: "input_text",
				text: action
			}]
		});
		return this?.pending?.[this?.pending?.length - 1];
	}
	beginFromResponseId(responseId = null) {
		this.responseId = this.responseId = responseId || this.responseId;
		return this;
	}
	async sendRequest(effort = "low", verbosity = "low", prevResponseId = null, options = {}) {
		effort ??= "low";
		verbosity ??= "low";
		const uniquePending = /* @__PURE__ */ new Map();
		for (const item of this.pending) {
			if (!item) continue;
			try {
				const key = typeof item === "object" ? JSOX.stringify(item) : String(item);
				if (!uniquePending.has(key)) uniquePending.set(key, item);
			} catch (e) {
				uniquePending.set(Math.random().toString(), item);
			}
		}
		const filteredInput = Array.from(uniquePending.values());
		const jsonInstructions = options?.responseFormat === "json" ? STRICT_JSON_INSTRUCTIONS : void 0;
		const runtimeAi = getRuntimeAiSettings();
		const configuredMaxTokens = typeof runtimeAi?.maxOutputTokens === "number" && Number.isFinite(runtimeAi.maxOutputTokens) ? Math.max(1, Math.floor(runtimeAi.maxOutputTokens)) : void 0;
		const requestBody = {
			model: this.model,
			tools: Array.from(this?.tools?.values?.() || [])?.filter?.((tool) => !!tool),
			input: filteredInput,
			reasoning: { "effort": effort },
			text: { verbosity },
			max_output_tokens: options?.maxTokens || configuredMaxTokens || 4e5,
			previous_response_id: this.responseId = prevResponseId || this?.responseId,
			instructions: jsonInstructions
		};
		if (runtimeAi?.contextTruncation === "auto" || runtimeAi?.contextTruncation === "disabled") requestBody.truncation = runtimeAi.contextTruncation;
		if (runtimeAi?.promptCacheRetention === "in-memory" || runtimeAi?.promptCacheRetention === "24h") requestBody.prompt_cache_retention = runtimeAi.promptCacheRetention;
		if (typeof runtimeAi?.maxToolCalls === "number" && Number.isFinite(runtimeAi.maxToolCalls)) requestBody.max_tool_calls = Math.max(1, Math.floor(runtimeAi.maxToolCalls));
		if (typeof runtimeAi?.parallelToolCalls === "boolean") requestBody.parallel_tool_calls = runtimeAi.parallelToolCalls;
		const { timeout: timeoutMs, maxRetries } = getTimeoutConfig(effort);
		console.log("[GPT] Making request to:", `${this?.apiUrl}/responses`);
		console.log("[GPT] API key present:", !!this?.apiKey);
		console.log("[GPT] Request timeout:", `${timeoutMs}ms (${timeoutMs / 1e3}s) (${effort} effort)`);
		console.log("[GPT] Max retries:", maxRetries);
		console.log("[GPT] Request body size:", JSON.stringify(requestBody).length, "characters");
		console.log("[GPT] Request input count:", filteredInput.length, "items");
		let lastError = null;
		for (let attempt = 0; attempt <= maxRetries; attempt++) {
			if (attempt > 0) {
				console.log(`[GPT] Retry attempt ${attempt}/${maxRetries} after ${RETRY_DELAY}ms delay`);
				await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
			}
			try {
				const controller = new AbortController();
				const timeoutId = setTimeout(() => {
					console.warn(`[GPT] Request timeout after ${timeoutMs}ms (attempt ${attempt + 1}) - aborting request`);
					controller.abort("timeout");
				}, timeoutMs);
				console.log(`[GPT] Sending request (attempt ${attempt + 1})...`);
				const response = await fetch(`${this?.apiUrl}/responses`, {
					method: "POST",
					priority: "auto",
					signal: controller.signal,
					headers: {
						"Content-Type": "application/json",
						...this?.apiKey ? { "Authorization": `Bearer ${this?.apiKey}` } : {}
					},
					body: JSON.stringify(requestBody)
				});
				console.log(`[GPT] Request sent successfully (attempt ${attempt + 1})`);
				clearTimeout(timeoutId);
				console.log("[GPT] Response status:", response.status, `(attempt ${attempt + 1})`);
				if (response.status !== 200) {
					const error = await response?.json?.()?.catch?.((e) => {
						console.error("[GPT] Failed to parse error response:", e);
						return null;
					});
					const errorMessage = error?.error?.message || error?.message || `HTTP ${response.status}`;
					lastError = /* @__PURE__ */ new Error(`API error (${response.status}): ${errorMessage}`);
					console.error("[GPT] API error:", errorMessage);
					if (response.status >= 400 && response.status < 500) throw lastError;
					continue;
				}
				return await this.processSuccessfulResponse(response);
			} catch (e) {
				lastError = e instanceof Error ? e : new Error(String(e));
				console.error(`[GPT] Request failed (attempt ${attempt + 1}):`, lastError.message);
				if (lastError.name === "AbortError" || lastError.message.includes("HTTP 4")) break;
			}
		}
		const errorMessage = lastError ? lastError.message : "Unknown error after all retries";
		console.error("[GPT] All retry attempts failed:", errorMessage);
		throw new Error(`Request failed after ${maxRetries + 1} attempts: ${errorMessage}`);
	}
	/**
	* Process a successful response from the API
	*/
	async processSuccessfulResponse(response) {
		const resp = await response?.json?.()?.catch?.((e) => {
			console.warn("[GPT] Failed to parse successful response:", e);
			return null;
		});
		if (!resp) return null;
		console.log("[GPT] Raw API response structure:", {
			type: typeof resp,
			isArray: Array.isArray(resp),
			keys: Object.keys(resp).slice(0, 10),
			keysLength: Object.keys(resp).length,
			sample: JSON.stringify(resp).substring(0, 300)
		});
		this.responseMap.set(this.responseId = resp?.id || resp?.response_id || this.responseId, resp);
		this?.messages?.push?.(...this?.pending || []);
		this?.pending?.splice?.(0, this?.pending?.length);
		this.messages.push(...resp?.output || []);
		const extractText = (r) => {
			try {
				if (!r) return null;
				if (typeof r === "string") {
					if (r.startsWith("\"") && r.endsWith("\"") && r.includes("\\n")) try {
						const parsed = JSON.parse(r);
						console.log("[GPT] Parsed JSON string response:", typeof parsed, parsed?.substring?.(0, 100) || "object");
						if (typeof parsed === "string") return parsed;
						else if (typeof parsed === "object") return extractText(parsed);
					} catch (e) {
						console.log("[GPT] Failed to parse JSON string, treating as plain text");
					}
					return r;
				}
				if (Array.isArray(r)) {
					console.log("[GPT] Response is array with", r.length, "items");
					console.log("[GPT] First few array items:", r.slice(0, 3).map((item) => ({
						type: typeof item,
						keys: typeof item === "object" ? Object.keys(item || {}) : "N/A",
						sample: typeof item === "string" ? item.substring(0, 50) : JSON.stringify(item).substring(0, 100)
					})));
					const texts = [];
					for (const item of r) if (typeof item === "string") texts.push(item);
					else if (item?.text) texts.push(item.text);
					else if (item?.content) texts.push(item.content);
					else if (item?.message?.content) texts.push(item.message.content);
					if (texts.length) return texts.join("\n\n");
				}
				if (typeof r === "object" && Object.keys(r).every((key) => !isNaN(Number(key)))) {
					console.log("[GPT] Response looks like array with", Object.keys(r).length, "numeric keys");
					const texts = [];
					for (const key of Object.keys(r).sort((a, b) => Number(a) - Number(b))) {
						const item = r[key];
						if (typeof item === "string") texts.push(item);
						else if (item?.text) texts.push(item.text);
						else if (item?.content) texts.push(item.content);
						else if (item?.message?.content) texts.push(item.message.content);
					}
					if (texts.length) return texts.join("\n\n");
				}
				if (r.output_text && Array.isArray(r.output_text) && r.output_text.length) return r.output_text.join("\n\n");
				const outputs = r.output || r.choices || [];
				const texts = [];
				for (const msg of outputs) {
					const content = msg?.content || msg?.message?.content || [];
					if (!content) continue;
					if (typeof content === "string") texts.push(content);
					else if (Array.isArray(content)) {
						for (const part of content) if (typeof part?.text === "string") texts.push(part.text);
						else if (part?.text?.value) texts.push(part.text.value);
					}
				}
				if (texts.length) return texts.join("\n\n");
			} catch (e) {
				console.warn("[GPT] Error extracting text:", e);
			}
			return null;
		};
		const text = extractText(resp);
		console.log("[GPT] Extracted text result:", text ? `"${text.substring(0, 100)}..."` : "null");
		if (text != null) return JSON.stringify({
			choices: [{ message: { content: text } }],
			usage: resp?.usage || {},
			id: this.responseId,
			object: "chat.completion"
		});
		try {
			const fallbackText = JSOX.parse(resp?.output ?? resp);
			if (fallbackText) return JSON.stringify({
				choices: [{ message: { content: typeof fallbackText === "string" ? fallbackText : JSON.stringify(fallbackText) } }],
				usage: resp?.usage || {},
				id: this.responseId,
				object: "chat.completion"
			});
		} catch {}
		return JSON.stringify({
			choices: [{ message: { content: "No text content available" } }],
			usage: {},
			id: this.responseId,
			object: "chat.completion"
		});
	}
	async modifyExistingData(existingData, modificationPrompt, instructions = []) {
		try {
			this.setContext({
				operation: "modify",
				existingData
			});
			await this.giveForRequest(DATA_MODIFICATION_PROMPT);
			await this.giveForRequest(`existing_entity: \`${encode(existingData)}\`\n`);
			if (instructions.length) await this.giveForRequest(buildModificationPrompt(instructions));
			await this.askToDoAction(modificationPrompt);
			const raw = await this.sendRequest("high", "medium", null, {
				responseFormat: "json",
				temperature: .2
			});
			const parseResult = extractJSONFromAIResponse(raw);
			if (!parseResult.ok) {
				console.warn("JSON extraction failed:", parseResult.error, "Raw:", parseResult.raw);
				return {
					ok: false,
					error: parseResult.error || "Failed to parse AI response"
				};
			}
			return {
				ok: true,
				data: parseResult.data?.modified_entity || parseResult.data,
				responseId: this.responseId
			};
		} catch (e) {
			console.error("Error in modifyExistingData:", e);
			return {
				ok: false,
				error: String(e)
			};
		}
	}
	async selectAndFilterData(dataSet, filters, searchTerms = []) {
		try {
			this.setContext({
				operation: "extract",
				filters,
				searchTerms
			});
			await this.giveForRequest(DATA_SELECTION_PROMPT);
			await this.giveForRequest(`data_set: \`${encode(dataSet)}\`\n`);
			const filterDesc = filters.map((f) => `Filter: ${f.field} ${f.operator} ${JSON.stringify(f.value)}`).join("\n");
			await this.askToDoAction(`
Select items from the provided data set matching these criteria:
${filterDesc}
${searchTerms.length ? `\nSearch terms: ${searchTerms.join(", ")}` : ""}

Return matching items with relevance scores.
            `);
			const raw = await this.sendRequest("medium", "low", null, {
				responseFormat: "json",
				temperature: .1
			});
			const parseResult = extractJSONFromAIResponse(raw);
			if (!parseResult.ok) {
				console.warn("JSON extraction failed:", parseResult.error, "Raw:", parseResult.raw);
				return {
					ok: false,
					error: parseResult.error || "Failed to parse AI response"
				};
			}
			return {
				ok: true,
				data: parseResult.data?.selected_items || parseResult.data,
				responseId: this.responseId
			};
		} catch (e) {
			console.error("Error in selectAndFilterData:", e);
			return {
				ok: false,
				error: String(e)
			};
		}
	}
	async mergeEntities(primary, secondary, mergeStrategy = "prefer_primary") {
		try {
			this.setContext({
				operation: "merge",
				existingData: primary
			});
			await this.giveForRequest(ENTITY_MERGE_PROMPT);
			await this.giveForRequest(`primary_entity: \`${encode(primary)}\`\n`);
			await this.giveForRequest(`secondary_data: \`${encode(secondary)}\`\n`);
			await this.askToDoAction(`
Merge the secondary data into the primary entity using "${mergeStrategy}" strategy:
- prefer_primary: Keep primary values when conflicts occur
- prefer_secondary: Use secondary values when conflicts occur
- prefer_newer: Compare timestamps and use newer values
- merge_all: Combine all unique values (arrays concatenated, objects deeply merged)

Return the merged entity with conflict resolution details.
            `);
			const raw = await this.sendRequest("high", "medium", null, {
				responseFormat: "json",
				temperature: .2
			});
			const parseResult = extractJSONFromAIResponse(raw);
			if (!parseResult.ok) {
				console.warn("JSON extraction failed:", parseResult.error, "Raw:", parseResult.raw);
				return {
					ok: false,
					error: parseResult.error || "Failed to parse AI response"
				};
			}
			return {
				ok: true,
				data: parseResult.data?.merged_entity || parseResult.data,
				responseId: this.responseId
			};
		} catch (e) {
			console.error("Error in mergeEntities:", e);
			return {
				ok: false,
				error: String(e)
			};
		}
	}
	async searchSimilar(referenceEntity, candidateSet, similarityThreshold = .7) {
		try {
			this.setContext({ operation: "analyze" });
			await this.giveForRequest(`reference_entity: \`${encode(referenceEntity)}\`\n`);
			await this.giveForRequest(`candidate_set: \`${encode(candidateSet)}\`\n`);
			await this.askToDoAction(`
Find items in the candidate set that are similar to the reference entity.
Consider semantic similarity, not just exact matches.
Compare:
- Names/titles (fuzzy match)
- Types/kinds
- Properties overlap
- Relationships

Return items with similarity score >= ${similarityThreshold}

Expected output structure:
{
    "similar_items": [
        { "item": {...}, "similarity": 0.85, "match_reasons": [...] }
    ],
    "potential_duplicates": [...],
    "related_but_different": [...]
}
            `);
			const raw = await this.sendRequest("medium", "medium", null, {
				responseFormat: "json",
				temperature: .3
			});
			const parseResult = extractJSONFromAIResponse(raw);
			if (!parseResult.ok) {
				console.warn("JSON extraction failed:", parseResult.error, "Raw:", parseResult.raw);
				return {
					ok: false,
					error: parseResult.error || "Failed to parse AI response"
				};
			}
			return {
				ok: true,
				data: parseResult.data?.similar_items || [],
				responseId: this.responseId
			};
		} catch (e) {
			console.error("Error in searchSimilar:", e);
			return {
				ok: false,
				error: String(e)
			};
		}
	}
	async batchProcess(items, operation, batchSize = 10) {
		const results = [];
		const errors = [];
		for (let i = 0; i < items.length; i += batchSize) {
			const batch = items.slice(i, i + batchSize);
			await this.giveForRequest(`batch_items: \`${encode(batch)}\`\n`);
			await this.askToDoAction(`
Process this batch of ${batch.length} items:
${operation}

Return processed items in same order.
Expected output: { "processed": [...], "failed": [...] }
            `);
			const raw = await this.sendRequest("medium", "low", null, { responseFormat: "json" });
			if (raw) {
				const parseResult = extractJSONFromAIResponse(raw);
				if (parseResult.ok && parseResult.data) {
					results.push(...parseResult.data?.processed || []);
					if (parseResult.data?.failed?.length) errors.push(...parseResult.data.failed.map((f) => f?.error || "Unknown error"));
				} else console.warn("Batch parsing failed:", parseResult.error);
			}
		}
		return {
			ok: errors.length === 0,
			data: results,
			error: errors.length ? errors.join("; ") : void 0,
			responseId: this.responseId
		};
	}
	clearPending() {
		this.pending.splice(0, this.pending.length);
		return this;
	}
	getResponseId() {
		return this?.responseId;
	}
	getMessages() {
		return this?.messages;
	}
	getPending() {
		return this?.pending;
	}
	getContext() {
		return this?.context;
	}
	getResponse(responseId) {
		return this?.responseMap?.get?.(responseId);
	}
};
var createGPTInstance = (apiKey, apiUrl, model) => {
	return new GPTResponses(apiKey, apiUrl || "https://api.proxyapi.ru/openai/v1", "", model || "gpt-5.6-luna");
};
var normalizeMcpConfigList = (mcp) => {
	if (!Array.isArray(mcp)) return [];
	const parsed = [];
	for (const item of mcp) {
		const raw = item;
		if (!raw || typeof raw !== "object") continue;
		const origin = String(raw?.origin || "").trim();
		const clientKey = String(raw?.clientKey || "").trim();
		const secretKey = String(raw?.secretKey || "").trim();
		if (!origin || !clientKey || !secretKey) continue;
		const serverLabel = String(raw?.serverLabel || raw?.label || origin).trim() || origin;
		parsed.push({
			id: String(raw?.id || origin),
			serverLabel,
			origin,
			clientKey,
			secretKey
		});
	}
	return parsed;
};
var configureMcpTools = async (gpt, mcpConfigs) => {
	const normalized = normalizeMcpConfigList(mcpConfigs);
	if (!normalized.length) return;
	for (const item of normalized) await gpt.useMCP(item.serverLabel, item.origin, item.clientKey, item.secretKey);
};
var resolveConfiguredModel = (model, customModel) => {
	const selected = String(model || "").trim();
	const custom = String(customModel || "").trim();
	if (selected === "custom") return custom || "gpt-5.6-luna";
	return selected || custom || "gpt-5.6-luna";
};
var getGPTInstance = async (config) => {
	const settings = await loadSettings();
	const apiKey = config?.apiKey || settings?.ai?.apiKey;
	if (!apiKey) return null;
	const gpt = createGPTInstance(apiKey, config?.baseUrl || settings?.ai?.baseUrl || "https://api.proxyapi.ru/openai/v1", resolveConfiguredModel(config?.model || settings?.ai?.model, config?.customModel || settings?.ai?.customModel));
	await configureMcpTools(gpt, config?.mcp ?? settings?.ai?.mcp);
	return gpt;
};
function unwrapUnwantedCodeBlocks(content) {
	if (!content) return content;
	const match = content.trim().match(/^```(?:katex|md|markdown|html|xml|json|text)?\n([\s\S]*?)\n```$/);
	if (match) {
		const unwrapped = match[1].trim();
		const lines = unwrapped.split("\n");
		if (lines.length === 1 || unwrapped.includes("<math") || unwrapped.includes("<span class=\"katex") || unwrapped.includes("<content") || unwrapped.startsWith("<") && unwrapped.endsWith(">") || /^\s*<[^>]+>/.test(unwrapped)) return unwrapped;
		if (lines.length > 3 || lines.some((line) => line.match(/^\s{4,}/) || line.includes("function") || line.includes("const ") || line.includes("let "))) return content;
		return unwrapped;
	}
	return content;
}
function isImageData(data) {
	return data instanceof File && data.type.startsWith("image/") || data instanceof Blob && data.type?.startsWith("image/") || typeof data === "string" && (data.startsWith("data:image/") || data.startsWith("http") || data.startsWith("https://"));
}
function getResponseFormat(format) {
	return [
		"json",
		"xml",
		"yaml"
	].includes(format) ? "json" : "text";
}
//#endregion
//#region src/shared/service/processing/entities.ts
var entities_exports = /* @__PURE__ */ __exportAll({ extractEntities: () => extractEntities });
var extractEntities = async (data, config) => {
	try {
		const gpt = await getGPTInstance(config);
		if (!gpt) return {
			ok: false,
			error: "No GPT instance"
		};
		const dataKind = typeof data === "string" ? detectDataKindFromContent(data) : (data instanceof File || data instanceof Blob) && data.type.startsWith("image/") ? "input_image" : "input_text";
		if (Array.isArray(data) && (data?.[0]?.type === "message" || data?.[0]?.["role"])) await gpt?.getPending?.()?.push?.(...data);
		else await gpt?.attachToRequest?.(data, dataKind);
		await gpt.askToDoAction(CORE_ENTITY_EXTRACTION_INSTRUCTION);
		const raw = await gpt.sendRequest("high", "medium", null, {
			responseFormat: "json",
			temperature: .2
		});
		if (!raw) return {
			ok: false,
			error: "No response"
		};
		const parseResult = extractJSONFromAIResponse(raw);
		if (!parseResult.ok) return {
			ok: false,
			error: parseResult.error || "Failed to parse AI response"
		};
		return {
			ok: true,
			data: parseResult.data?.entities || [],
			responseId: gpt.getResponseId()
		};
	} catch (e) {
		return {
			ok: false,
			error: String(e)
		};
	}
};
//#endregion
export { unwrapUnwantedCodeBlocks as a, isImageData as i, getGPTInstance as n, toBase64 as o, getResponseFormat as r, entities_exports as t };
