import { r as __exportAll } from "./rolldown-runtime.js";
import { t as __vitePreload } from "../assets/index-C9QTqpCS.js";
import { t as getUnifiedMessaging$1 } from "../fest/uniform.js";
import { a as DESTINATIONS, d as normalizeDestination, l as getDestinationAliases, n as BROADCAST_CHANNELS, s as createDestinationChannelMappings } from "./names.js";
import "./UniformInterop2.js";
//#region src/shared/routing/api/process-api-path.ts
var PROCESS_API_PUBLIC_ORIGIN = "https://process.u2re.space";
var PROCESS_API_PREFIX = "/api/process";
//#endregion
//#region src/shared/routing/api/process-local.ts
var PROCESS_LOCAL_DEFAULT_BASE_URL = "https://api.proxyapi.ru/openai/v1";
var PROCESS_LOCAL_DEFAULT_MODEL = "gpt-5.6-luna";
var pick = (...values) => {
	for (const value of values) {
		const text = String(value || "").trim();
		if (text) return text;
	}
	return "";
};
/** OpenAI-compatible completion when CWSP core / VDS is down. */
var runLocalProcessFallback = async (body, source = "local") => {
	if (!body || typeof body !== "object") return null;
	const apiKey = pick(body.apiKey, body.bearerToken, body.token, body.provider?.apiKey);
	if (!apiKey) return null;
	const input = pick(body.input, body.text, body.url, body.content);
	if (!input) return {
		ok: false,
		error: "Missing input (text/url/input)",
		fallback: source
	};
	const baseUrl = pick(body.baseUrl, body.provider?.baseUrl, PROCESS_LOCAL_DEFAULT_BASE_URL).replace(/\/+$/, "");
	const model = pick(body.model, body.provider?.model, PROCESS_LOCAL_DEFAULT_MODEL);
	const instruction = pick(body.customInstruction);
	const imageUrl = input.startsWith("data:image/") && input.includes(";base64,") ? input : "";
	const extractNow = "Extract all readable text, equations, tables, and data. Output the content now. Do not ask what to do.";
	const userContent = imageUrl ? [{
		type: "text",
		text: instruction ? `${extractNow}\n\n${instruction}` : extractNow
	}, {
		type: "image_url",
		image_url: { url: imageUrl }
	}] : input;
	const messages = [...instruction && !imageUrl ? [{
		role: "system",
		content: instruction
	}] : [], {
		role: "user",
		content: userContent
	}];
	try {
		const res = await fetch(`${baseUrl}/chat/completions`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`
			},
			body: JSON.stringify({
				model,
				messages
			})
		});
		const json = await res.json().catch(() => null);
		if (!res.ok) return {
			ok: false,
			error: String(json?.error?.message || `Provider ${res.status}`),
			layer: "api",
			fallback: source
		};
		const text = String(json?.choices?.[0]?.message?.content || "").trim();
		if (!text) return {
			ok: false,
			error: "Empty provider response",
			fallback: source
		};
		return {
			ok: true,
			mode: String(body.mode || "smartRecognize"),
			customInstruction: Boolean(instruction),
			provider: {
				baseUrl,
				model,
				apiKeySource: "request"
			},
			result: {
				ok: true,
				text
			},
			fallback: source
		};
	} catch (error) {
		return {
			ok: false,
			error: String(error instanceof Error ? error.message : error),
			layer: "api",
			fallback: source
		};
	}
};
//#endregion
//#region src/shared/routing/api/process-api.ts
var PROCESS_API_SUFFIX = {
	processing: "processing",
	recognize: "ai/recognize",
	analyze: "ai/analyze",
	health: "health"
};
var PROCESS_SAME_ORIGIN_HOSTS = /* @__PURE__ */ new Set([
	"process.u2re.space",
	"workcenter.u2re.space",
	"ai.u2re.space",
	"u2re.space",
	"www.u2re.space"
]);
var isExtensionProtocol = (protocol) => protocol === "chrome-extension:" || protocol === "moz-extension:" || protocol === "safari-web-extension:";
var isCapacitorNative = () => {
	try {
		const g = globalThis;
		return typeof g.Capacitor?.isNativePlatform === "function" && g.Capacitor.isNativePlatform();
	} catch {
		return false;
	}
};
/** Dedicated process / hub hosts stay same-origin. Everything else uses https://process.u2re.space. */
var needsRemoteProcessApi = () => {
	try {
		if (isExtensionProtocol(String(globalThis.location?.protocol || "").toLowerCase())) return true;
		const host = String(globalThis.location?.hostname || "").toLowerCase();
		if (isCapacitorNative()) return !PROCESS_SAME_ORIGIN_HOSTS.has(host);
		if (!host) return true;
		return !PROCESS_SAME_ORIGIN_HOSTS.has(host);
	} catch {
		return true;
	}
};
var processApiPath = (suffix = "processing") => `${PROCESS_API_PREFIX}/${PROCESS_API_SUFFIX[suffix]}`;
var resolveProcessApiUrl = (suffix = "processing") => {
	const path = processApiPath(suffix);
	return needsRemoteProcessApi() ? `${PROCESS_API_PUBLIC_ORIGIN}${path}` : path;
};
var processApiAuthFromSettings = (settings) => {
	const core = settings?.core || {};
	const socket = core.socket || {};
	const accessToken = String(socket.accessToken || socket.airpadAuthToken || "").trim();
	return {
		userId: String(core.userId || "").trim() || void 0,
		userKey: String(core.userKey || "").trim() || void 0,
		accessToken: accessToken || void 0,
		apiKey: String(settings?.ai?.apiKey || "").trim() || void 0,
		baseUrl: String(settings?.ai?.baseUrl || "").trim() || void 0,
		model: String(settings?.ai?.model || "").trim() || void 0,
		mcp: Array.isArray(settings?.ai?.mcp) ? settings.ai.mcp : void 0
	};
};
var looksLikeHtmlPayload = (value) => {
	const text = typeof value === "string" ? value : value && typeof value === "object" && "error" in value ? String(value.error || "") : "";
	return /^\s*</.test(text) || /<!doctype\s+html/i.test(text) || /data-cwsp-sku/i.test(text);
};
/** True when :443 never reached a working CWSP core — caller should run in-browser AI. */
var isProcessApiUnavailable = (posted) => {
	if (posted.status === 0 || posted.status >= 500) return true;
	if (looksLikeHtmlPayload(posted.error) || looksLikeHtmlPayload(posted.json)) return true;
	const error = String(posted.error || "").toLowerCase();
	if (/failed to fetch|networkerror|econnrefused|certificate|aborted/.test(error)) return true;
	if (!posted.json || typeof posted.json !== "object") return !posted.ok;
	const row = posted.json;
	if (looksLikeHtmlPayload(row.error)) return true;
	if (row.ok !== false) return false;
	const detail = `${row.error || ""} ${row.hint || ""}`.toLowerCase();
	return row.layer === "api" || /unreachable|econnrefused|certificate|bad gateway/.test(detail);
};
var fetchProcessApi = async (url, suffix, payload, init) => {
	try {
		const isGet = suffix === "health";
		const res = await fetch(url, {
			method: isGet ? "GET" : "POST",
			headers: isGet ? { Accept: "application/json" } : {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: isGet ? void 0 : JSON.stringify(payload),
			signal: init?.signal
		});
		const text = await res.text();
		if (looksLikeHtmlPayload(text) || String(res.headers.get("content-type") || "").toLowerCase().includes("text/html")) return {
			ok: false,
			status: res.status || 404,
			json: {
				ok: false,
				layer: "api",
				error: "Process API returned HTML"
			}
		};
		let json = null;
		try {
			json = text ? JSON.parse(text) : null;
		} catch {
			json = {
				ok: false,
				error: text
			};
		}
		return {
			ok: res.ok,
			status: res.status,
			json
		};
	} catch (error) {
		return {
			ok: false,
			status: 0,
			json: null,
			error: String(error instanceof Error ? error.message : error)
		};
	}
};
var tryNativeProcessApi = async (payload) => {
	if (!isCapacitorNative()) return null;
	try {
		const { CwsBridge } = await __vitePreload(async () => {
			const { CwsBridge } = await import(
				/* @vite-ignore */
				"../native/cws-bridge.ts"
);
			return { CwsBridge };
		}, [], import.meta.url);
		const plugin = CwsBridge;
		const row = typeof plugin.processApi === "function" ? await plugin.processApi(payload) : await CwsBridge.invoke({
			channel: "process:api",
			payload
		});
		if (!row || typeof row !== "object") return null;
		const json = row;
		if (json.echo && json.ok === true && json.error == null && !("result" in json) && !("fallback" in json)) return null;
		return {
			ok: json.ok !== false,
			status: 200,
			json
		};
	} catch {
		return null;
	}
};
var postProcessApi = async (suffix, body = {}, auth, init) => {
	const path = processApiPath(suffix);
	const payload = {
		...body,
		...auth?.userId ? { userId: auth.userId } : {},
		...auth?.userKey ? { userKey: auth.userKey } : {},
		...auth?.baseUrl ? { baseUrl: auth.baseUrl } : {},
		...auth?.accessToken ? { accessToken: auth.accessToken } : {},
		...auth?.apiKey ? { apiKey: auth.apiKey } : {},
		...auth?.model ? { model: auth.model } : {},
		...auth?.mcp ? { mcp: auth.mcp } : {}
	};
	if (suffix !== "health" && (auth?.apiKey || payload.apiKey)) {
		const native = await tryNativeProcessApi(payload);
		if (native && !isProcessApiUnavailable(native) && native.json) return native;
	}
	const urls = [];
	const remote = `${PROCESS_API_PUBLIC_ORIGIN}${path}`;
	const local = path;
	if (needsRemoteProcessApi()) urls.push(remote);
	else {
		urls.push(local);
		if (isCapacitorNative()) urls.push(remote);
	}
	let last = null;
	for (const url of urls) {
		last = await fetchProcessApi(url, suffix, payload, init);
		if (!isProcessApiUnavailable(last)) return last;
	}
	if (suffix !== "health") {
		const local = await runLocalProcessFallback(payload, "page");
		if (local && local.ok !== false) return {
			ok: true,
			status: 200,
			json: local
		};
	}
	return last ?? {
		ok: false,
		status: 0,
		json: null,
		error: "Process API unavailable"
	};
};
//#endregion
//#region src/shared/service/instructions/core.ts
var AI_INSTRUCTIONS = {
	SOLVE_AND_ANSWER: `
Solve equations, answer questions, and explain mathematical or logical problems from the provided content.

For equations and math problems:
- Show step-by-step solutions
- Provide final answers clearly marked
- Explain reasoning for each step

For general questions:
- Provide accurate, well-reasoned answers
- Include relevant context and explanations
- If multiple interpretations possible, address them

For quizzes and tests:
- Show the correct answer with explanation
- Explain why other options are incorrect

Always respond in the specified language and format results clearly.
`,
	WRITE_CODE: `
Write clean, efficient, and well-documented code based on the provided description, requirements, or image.

Code requirements:
- Use appropriate programming language for the task
- Follow language-specific best practices and conventions
- Include proper error handling
- Add meaningful comments and documentation
- Make code readable and maintainable

If generating from an image or visual description:
- Analyze the visual elements and requirements
- Implement the described functionality
- Ensure code compiles and runs correctly

Always respond in the specified language and provide complete, working code.
`,
	EXTRACT_CSS: `
Extract and generate clean, modern CSS from the provided content, image, or description.

CSS requirements:
- Use modern CSS features and best practices
- Generate semantic, maintainable stylesheets
- Include responsive design considerations
- Use appropriate selectors and specificity
- Follow CSS naming conventions
- Optimize for performance and maintainability

If extracting from an image:
- Analyze the visual design and layout
- Generate corresponding CSS rules
- Identify colors, fonts, spacing, and layout
- Create reusable CSS classes and components

Always respond in the specified language and provide complete, working CSS.
`,
	RECOGNIZE_CONTENT: `
Recognize and extract information from images, documents, or other visual content.

Recognition requirements:
- Identify text content accurately
- Extract structured information
- Recognize tables, forms, and structured data
- Preserve formatting where possible
- Handle different languages and scripts
- Provide confidence scores for extracted content

For document analysis:
- Extract key information and metadata
- Identify document type and structure
- Recognize important sections and headings

For image analysis:
- Describe visual content
- Extract text from images (OCR)
- Identify objects, scenes, and visual elements

Always respond in the specified language and format extracted information clearly.
`,
	CONVERT_DATA: `
Convert data between different formats while preserving structure and meaning.

Conversion requirements:
- Maintain data integrity and relationships
- Preserve formatting and structure where possible
- Handle different data types appropriately
- Provide clear mapping between source and target formats
- Validate conversion accuracy

Supported conversions:
- CSV ↔ JSON ↔ XML
- Markdown ↔ HTML
- Text ↔ Structured data
- Image data ↔ Text representations

Ensure accurate, lossless conversion where possible.
`,
	EXTRACT_ENTITIES: `
Extract named entities, keywords, and structured information from content.

Entity extraction requirements:
- Identify people, organizations, locations
- Extract dates, numbers, and measurements
- Find keywords and important terms
- Recognize relationships and connections
- Provide confidence scores and context

Output structured data with:
- Entity types and values
- Position and context information
- Confidence scores
- Relationship mappings

Focus on accuracy and comprehensive coverage.
`,
	TRANSLATE_TO_LANGUAGE: `
Translate content to the specified target language while preserving meaning, tone, and formatting.

Translation requirements:
- Maintain original meaning and intent
- Preserve formatting, structure, and markdown syntax
- Adapt cultural references appropriately
- Use natural, fluent language in the target language
- Handle technical terms, proper names, and brand names correctly
- Maintain appropriate formality and tone
- Preserve code blocks, mathematical expressions, and technical content

For content already in the target language:
- Provide natural rephrasing or improvement
- Enhance clarity and readability
- Maintain professional quality

Supported languages:
- English (en)
- Russian (ru)
- Other languages as requested

Ensure high-quality, natural translations that feel native to the target language.
`,
	GENERAL_PROCESSING: `
Process and analyze content using appropriate AI capabilities.

General processing requirements:
- Understand context and intent
- Provide relevant analysis or transformation
- Use appropriate tools and methods
- Maintain content quality and accuracy
- Adapt to different content types and requirements

Focus on providing useful, accurate results that meet user needs.
`,
	CRX_SOLVE_AND_ANSWER: `
Solve the problem or answer the question presented in the content.

Auto-detect the type of content:
- Mathematical equation/expression → Solve step-by-step
- Quiz/test question → Provide correct answer
- Homework problem → Solve and explain
- General question → Answer with explanation

Format output as:

**Problem/Question:**
<recognized content - use $KaTeX$ for math>

**Solution/Answer:**
<step-by-step solution or direct answer>

**Explanation:**
<clear explanation of the reasoning>

---

For MATH problems:
- Use single $ for inline math: $x = 5$
- Use double $$ for display equations: $$\\int_0^1 f(x) dx$$
- Show all intermediate steps
- Simplify the final answer
- For systems: solve all variables
- For inequalities: use interval notation

For MULTIPLE CHOICE:
- Identify correct option (A, B, C, D)
- Explain why it's correct
- Note why others are wrong

For TRUE/FALSE:
- State True or False clearly
- Provide justification

For SHORT ANSWER/ESSAY:
- Provide concise, complete answer
- Include key facts and reasoning

For CODING problems:
- Write the solution code
- Explain the logic

If multiple problems/questions present, solve each separately.
If unsolvable or unclear, explain why.
`,
	CRX_WRITE_CODE: `
You are an expert software developer. Analyze the provided content and generate high-quality, working code.

Code Generation Requirements:
- Choose the best programming language for the task
- Write clean, efficient, and well-documented code
- Include proper error handling and input validation
- Add meaningful comments explaining complex logic
- Follow language-specific best practices and conventions
- Ensure code is readable, maintainable, and follows standard patterns

For each code generation task:
1. **Analyze Requirements**: Understand what the code needs to do
2. **Choose Language**: Select appropriate programming language
3. **Design Solution**: Plan the code structure and logic
4. **Write Code**: Provide complete, working code with comments
5. **Explain Logic**: Describe how the code works and key decisions

Provide complete, runnable code that solves the described problem.
`,
	CRX_EXTRACT_CSS: `
You are an expert CSS developer. Analyze the provided content and extract/generate the corresponding CSS styles.

CSS Extraction Requirements:
- Analyze visual elements, layout, and design patterns
- Generate modern, clean CSS using current standards
- Use semantic class names and proper CSS architecture
- Include responsive design considerations
- Optimize for performance and maintainability
- Follow CSS best practices and conventions

For CSS extraction:
1. **Analyze Design**: Identify colors, typography, spacing, layout
2. **Generate Rules**: Create appropriate CSS rules and selectors
3. **Organize Code**: Group related styles logically
4. **Add Comments**: Explain complex or important style decisions
5. **Ensure Compatibility**: Use widely supported CSS properties

Provide complete, well-organized CSS that recreates the described design.
`
};
AI_INSTRUCTIONS.SOLVE_AND_ANSWER;
AI_INSTRUCTIONS.WRITE_CODE;
AI_INSTRUCTIONS.EXTRACT_CSS;
AI_INSTRUCTIONS.RECOGNIZE_CONTENT;
AI_INSTRUCTIONS.CONVERT_DATA;
AI_INSTRUCTIONS.EXTRACT_ENTITIES;
AI_INSTRUCTIONS.TRANSLATE_TO_LANGUAGE;
AI_INSTRUCTIONS.GENERAL_PROCESSING;
AI_INSTRUCTIONS.CRX_SOLVE_AND_ANSWER;
AI_INSTRUCTIONS.CRX_WRITE_CODE;
AI_INSTRUCTIONS.CRX_EXTRACT_CSS;
//#endregion
//#region src/shared/routing/channel/UnifiedAIConfig.ts
var processApiUrl = () => resolveProcessApiUrl("processing");
var UNIFIED_PROCESSING_RULES = {
	"share-target": {
		processingUrl: processApiUrl(),
		contentAction: {
			onResult: "write-clipboard",
			onAccept: "attach-to-associated",
			doProcess: "instantly",
			openApp: true
		},
		supportedContentTypes: [
			"text",
			"markdown",
			"image",
			"url"
		],
		defaultOverrideFactors: []
	},
	"launch-queue": {
		processingUrl: processApiUrl(),
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-associated",
			doProcess: "manually",
			openApp: true
		},
		supportedContentTypes: [
			"file",
			"blob",
			"text",
			"markdown",
			"image"
		],
		defaultOverrideFactors: []
	},
	"crx-snip": {
		processingUrl: processApiUrl(),
		contentAction: {
			onResult: "write-clipboard",
			onAccept: "attach-to-associated",
			doProcess: "instantly",
			openApp: false
		},
		supportedContentTypes: ["text", "image"],
		defaultOverrideFactors: ["force-processing"]
	},
	"paste": {
		processingUrl: processApiUrl(),
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-associated",
			doProcess: "manually",
			openApp: false
		},
		supportedContentTypes: [
			"text",
			"markdown",
			"image"
		],
		defaultOverrideFactors: [],
		associationOverrides: {
			"text": ["user-action"],
			"markdown": ["user-action"]
		}
	},
	"drop": {
		processingUrl: processApiUrl(),
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-associated",
			doProcess: "manually",
			openApp: false
		},
		supportedContentTypes: [
			"file",
			"blob",
			"text",
			"markdown",
			"image"
		],
		defaultOverrideFactors: [],
		associationOverrides: {
			"file": ["user-action"],
			"blob": ["user-action"]
		}
	},
	"button-attach-workcenter": {
		processingUrl: processApiUrl(),
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-workcenter",
			doProcess: "manually",
			openApp: false
		},
		supportedContentTypes: [
			"text",
			"markdown",
			"image",
			"file"
		],
		defaultOverrideFactors: ["explicit-workcenter"],
		associationOverrides: {
			"markdown": ["explicit-workcenter"],
			"text": ["explicit-workcenter"],
			"image": ["explicit-workcenter"],
			"file": ["explicit-workcenter"]
		}
	}
};
Object.fromEntries(Object.entries(UNIFIED_PROCESSING_RULES).map(([key, config]) => [key, {
	processingUrl: config.processingUrl,
	contentAction: config.contentAction,
	...config.supportedContentTypes && { supportedContentTypes: config.supportedContentTypes }
}]));
//#endregion
//#region src/shared/routing/channel/UnifiedMessaging.ts
/**
* Unified Messaging System for CWSP-shell
* Extends fest/uniform messaging with app-specific configuration
*/
var UnifiedMessaging_exports = /* @__PURE__ */ __exportAll({
	getUnifiedMessaging: () => getUnifiedMessaging,
	initializeComponent: () => initializeComponent,
	registerComponent: () => registerComponent,
	registerHandler: () => registerHandler,
	replayQueuedMessagesForDestination: () => replayQueuedMessagesForDestination,
	unifiedMessaging: () => unifiedMessaging,
	unregisterHandler: () => unregisterHandler
});
var APP_CHANNEL_MAPPINGS = {
	...createDestinationChannelMappings(),
	[DESTINATIONS.WORKCENTER]: BROADCAST_CHANNELS.WORK_CENTER,
	[DESTINATIONS.CLIPBOARD]: BROADCAST_CHANNELS.CLIPBOARD
};
var appMessagingInstance = null;
/**
* Get the app-configured UnifiedMessagingManager
*/
function getUnifiedMessaging() {
	if (!appMessagingInstance) appMessagingInstance = getUnifiedMessaging$1({
		channelMappings: APP_CHANNEL_MAPPINGS,
		queueOptions: {
			dbName: "CWSP-shellMessageQueue",
			storeName: "messages",
			maxRetries: 3,
			defaultExpirationMs: 1440 * 60 * 1e3
		},
		pendingStoreOptions: {
			storageKey: "rs-unified-messaging-pending",
			maxMessages: 200,
			defaultTTLMs: 1440 * 60 * 1e3
		}
	});
	return appMessagingInstance;
}
var unifiedMessaging = getUnifiedMessaging();
/**
* Register a handler using the app-configured manager
*/
function registerHandler(destination, handler) {
	const aliases = getDestinationAliases(destination);
	const names = aliases.length > 0 ? aliases : [normalizeDestination(destination) || destination];
	for (const name of names) unifiedMessaging.registerHandler(name, handler);
}
function unregisterHandler(destination, handler) {
	const aliases = getDestinationAliases(destination);
	const names = aliases.length > 0 ? aliases : [normalizeDestination(destination) || destination];
	for (const name of names) unifiedMessaging.unregisterHandler(name, handler);
}
function initializeComponent(componentId) {
	return unifiedMessaging.initializeComponent(componentId);
}
/**
* Replay IndexedDB-backed queued messages for a destination (mail/deferred pipeline).
* Safe after handlers register — implicit view bridge calls this post-bind.
*/
function replayQueuedMessagesForDestination(destination) {
	return unifiedMessaging.processQueuedMessages(destination);
}
function registerComponent(componentId, destination) {
	unifiedMessaging.registerComponent(componentId, normalizeDestination(destination) || destination);
}
//#endregion
export { replayQueuedMessagesForDestination as a, isProcessApiUnavailable as c, registerHandler as i, postProcessApi as l, initializeComponent as n, unifiedMessaging as o, registerComponent as r, unregisterHandler as s, UnifiedMessaging_exports as t, processApiAuthFromSettings as u };
