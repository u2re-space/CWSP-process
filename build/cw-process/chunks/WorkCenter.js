const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./WorkCenterState.js","./rolldown-runtime.js","./templates.js","./core.js","../shells/boot-index.js","../com/app.js","../fest/core.js","../shells/boot-history-base.js","../com/service.js","../fest/veela.js","../vendor/pdfjs-dist.js","../vendor/mammoth.js","../vendor/lop.js","../vendor/bluebird.js","../vendor/base64-js.js","../vendor/jszip.js","../vendor/@xmldom_xmldom.js","../vendor/dingbat-to-unicode.js","../vendor/xlsx.js"])))=>i.map(i=>d[i]);
import { o as __toESM, r as __exportAll } from "./rolldown-runtime.js";
import { $t as isBase64Like, An as writeText, Dr as __vitePreload, a as f, c as collectAttachmentCandidates, en as normalizeDataAsset, in as createContentAddressedStore, n as renderMathInElement, r as src_default, s as purify, t as renderSafeMarkdown, tn as parseDataUrl, zn as H } from "../com/app.js";
import { $n as sendMessage, Qn as registerComponent, Xn as initializeComponent, cr as postProcessApi, ir as ROUTE_HASHES, lr as processApiAuthFromSettings, ur as readProcessApiResultText, vt as loadSettings } from "../shells/boot-index.js";
import { _ as stashSkuHandoff, h as shouldHandoffViewToSibling } from "../shells/boot-history-base.js";
import { i as validateReadableFileForIngress } from "../com/service.js";
import { t as summarizeForLog } from "./LogSanitizer.js";
import { s as takeHeldIngressFiles } from "./sku-ingress.js";
import { i as buildInstructionPrompt } from "./utils.js";
import { a as getCustomInstructions, o as getInstructionRegistry, s as setActiveInstruction } from "./CustomInstructions.js";
import { o as extractJSONFromAIResponse } from "./entities.js";
import { t as processDataWithInstruction } from "./unified.js";
import { n as fetchCachedShareFiles, t as consumeCachedShareTargetPayload } from "./ShareTargetGateway.js";
import { t as WorkCenterStateManager } from "./WorkCenterState.js";
//#endregion
//#region ../../modules/views/workcenter-view/src/ts/WorkCenterUI.ts
var icon = (name, size = "18") => {
	const element = document.createElement("ui-icon");
	element.setAttribute("icon", name);
	element.setAttribute("icon-style", "duotone");
	element.setAttribute("size", size);
	element.setAttribute("aria-hidden", "true");
	return element;
};
var button = (action, label, iconName, className = "wc-icon-button") => {
	const element = document.createElement("button");
	element.type = "button";
	element.className = className;
	element.dataset.action = action;
	element.setAttribute("aria-label", label);
	element.title = label;
	element.append(icon(iconName));
	return element;
};
var formatFileSize = (bytes) => {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
	return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
};
var formatAttachCount = (count) => count === 1 ? "1 file" : `${count} files`;
var attachmentGlyph = (attachment) => {
	if (attachment.url) return "link";
	const type = attachment.type.toLowerCase();
	const name = attachment.name.toLowerCase();
	if (type.startsWith("image/")) return "image";
	if (type === "application/pdf" || name.endsWith(".pdf")) return "file-pdf";
	if (type.includes("wordprocessingml") || name.endsWith(".docx") || name.endsWith(".doc")) return "file-doc";
	if (type.includes("spreadsheetml") || name.endsWith(".xlsx") || name.endsWith(".xls")) return "file-xls";
	if (type.startsWith("text/") || name.endsWith(".md") || name.endsWith(".txt") || name.endsWith(".csv")) return "file-text";
	return "paperclip";
};
/** Grow the composer textarea with its text; a dragged min-height can still expand further. */
var syncWorkCenterComposerHeight = (root) => {
	if (!root?.querySelector(".prompt-input")) return;
};
/** After attachments land, grow the composer (and a floating window) so the rail is not clipped. */
var syncWorkCenterChatForAttachments = (root) => {
	syncWorkCenterComposerHeight(root);
	const composer = root?.querySelector("[data-workcenter-composer]");
	if (!composer) return;
	const rail = composer.querySelector("[data-draft-files]");
	const hasFiles = Boolean(rail && !rail.hidden);
	composer.classList.toggle("has-attachments", hasFiles);
	if (!hasFiles) {
		composer.style.removeProperty("--wc-composer-min");
		return;
	}
	const chat = root instanceof HTMLElement ? root : composer.closest(".workcenter-chat");
	const needed = Math.max(composer.scrollHeight, composer.offsetHeight, 200);
	const cap = chat ? Math.max(200, chat.clientHeight * .75 || 540) : 540;
	composer.style.setProperty("--wc-composer-min", `${Math.min(needed, cap)}px`);
	const extra = rail?.getBoundingClientRect().height || 0;
	const frame = chat?.closest("ui-window");
	if (!(frame instanceof HTMLElement) || extra <= 0) return;
	const rect = frame.getBoundingClientRect();
	const next = Math.min((globalThis.innerHeight || rect.height) * .92, rect.height + extra);
	if (next > rect.height + 4) frame.style.blockSize = `${Math.round(next)}px`;
};
var appendAttachmentCard = (target, attachment, presentation, removable = false) => {
	const card = document.createElement("article");
	card.className = `wc-attachment-chip${attachment.type.startsWith("image/") ? " is-image" : ""}`;
	card.dataset.attachmentHash = attachment.hash;
	const file = presentation?.fileFor(attachment) ?? null;
	const preview = file ? presentation?.getPreviewUrl(file) : null;
	const open = document.createElement("button");
	open.type = "button";
	open.className = "wc-attachment-chip__open";
	open.dataset.action = "view-attachment";
	open.dataset.attachmentHash = attachment.hash;
	open.setAttribute("aria-label", `View ${attachment.name}`);
	open.title = `View ${attachment.name}`;
	if (preview) {
		const image = document.createElement("img");
		image.className = "wc-attachment-chip__preview";
		image.src = preview;
		image.alt = "";
		image.decoding = "async";
		image.loading = "lazy";
		open.append(image);
	} else {
		const glyph = icon(attachmentGlyph(attachment), "20");
		glyph.classList.add("wc-attachment-chip__glyph");
		open.append(glyph);
	}
	const copy = document.createElement("span");
	copy.className = "wc-attachment-chip__copy";
	const label = document.createElement("span");
	label.className = "wc-attachment-chip__label";
	label.textContent = attachment.url || attachment.name;
	const meta = document.createElement("span");
	meta.className = "wc-attachment-chip__meta";
	meta.textContent = attachment.error || formatFileSize(attachment.size);
	copy.append(label, meta);
	open.append(copy);
	card.append(open);
	const actions = document.createElement("div");
	actions.className = "wc-attachment-chip__actions";
	const download = button("download-attachment", `Download ${attachment.name}`, "download", "wc-chip-remove");
	download.dataset.attachmentHash = attachment.hash;
	actions.append(download);
	if (removable) {
		const remove = button("remove-draft-attachment", `Remove ${attachment.name}`, "trash", "wc-chip-remove");
		remove.dataset.attachmentHash = attachment.hash;
		actions.append(remove);
	}
	card.append(actions);
	target.append(card);
};
var appendMessage = (transcript, message, presentation) => {
	const item = document.createElement("article");
	item.className = `workcenter-message workcenter-message--${message.role} is-${message.status}`;
	item.dataset.workcenterMessage = "";
	item.dataset.messageId = message.id;
	const header = document.createElement("div");
	header.className = "workcenter-message__header";
	const author = document.createElement("span");
	author.className = "workcenter-message__author";
	author.textContent = message.role === "user" ? "You" : "Work Center";
	header.append(author);
	item.append(header);
	const body = document.createElement("div");
	body.className = "workcenter-message__body";
	if (message.role === "assistant" && message.status === "complete") body.innerHTML = renderSafeMarkdown(message.content);
	else if (message.status === "pending") {
		body.textContent = "Thinking…";
		body.setAttribute("aria-busy", "true");
	} else if (message.status === "failed") body.textContent = message.error || "The response could not be completed.";
	else if (message.status === "cancelled") body.textContent = "Cancelled";
	else body.textContent = message.content;
	item.append(body);
	if (message.attachments.length) {
		const attachments = document.createElement("div");
		attachments.className = "workcenter-message__attachments";
		for (const attachment of message.attachments) appendAttachmentCard(attachments, attachment, presentation);
		item.append(attachments);
	}
	if (message.role === "assistant" && message.status === "pending") {
		const actions = document.createElement("div");
		actions.className = "workcenter-message__actions";
		const cancel = button("cancel-turn", "Cancel response", "stop-circle", "wc-quiet-button");
		cancel.dataset.turnId = message.id;
		actions.append(cancel);
		item.append(actions);
	}
	if (message.role === "assistant" && message.status === "failed") {
		const actions = document.createElement("div");
		actions.className = "workcenter-message__actions";
		const retry = button("retry-turn", "Retry response", "arrow-clockwise", "wc-quiet-button");
		retry.dataset.turnId = message.id;
		actions.append(retry);
		item.append(actions);
	}
	if (message.role === "assistant" && message.status === "complete") {
		const actions = document.createElement("div");
		actions.className = "workcenter-message__actions";
		const copy = button("copy-turn", "Copy response", "copy", "wc-quiet-button");
		copy.dataset.turnId = message.id;
		actions.append(copy);
		item.append(actions);
	}
	transcript.append(item);
};
var createRequestOptions = (state) => {
	const panel = document.createElement("section");
	panel.className = "workcenter-request-options";
	panel.dataset.workcenterRequestOptions = "";
	panel.hidden = true;
	panel.setAttribute("aria-label", "Response options");
	const instructionLabel = document.createElement("label");
	instructionLabel.textContent = "Instruction";
	const instructionSelect = document.createElement("select");
	instructionSelect.className = "instruction-select";
	instructionSelect.setAttribute("data-action", "select-instruction");
	const emptyInstruction = document.createElement("option");
	emptyInstruction.value = "";
	emptyInstruction.textContent = "None (default)";
	instructionSelect.append(emptyInstruction);
	instructionLabel.append(instructionSelect);
	panel.append(instructionLabel);
	const templateLabel = document.createElement("label");
	templateLabel.textContent = "Template";
	const templateSelect = document.createElement("select");
	templateSelect.className = "template-select";
	const emptyTemplate = document.createElement("option");
	emptyTemplate.value = "";
	emptyTemplate.textContent = "No template";
	templateSelect.append(emptyTemplate);
	for (const template of state.promptTemplates) {
		const option = document.createElement("option");
		option.value = template.prompt;
		option.textContent = template.name;
		option.selected = template.prompt === state.selectedTemplate;
		templateSelect.append(option);
	}
	templateLabel.append(templateSelect);
	panel.append(templateLabel);
	panel.append(button("edit-templates", "Edit templates", "gear", "wc-quiet-button"));
	const fields = [
		[
			"Output",
			"format-select",
			state.outputFormat,
			[
				["auto", "Auto"],
				["markdown", "Markdown"],
				["json", "JSON"],
				["code", "Code"],
				["raw", "Raw text"],
				["text", "Plain text"],
				["html", "HTML"]
			]
		],
		[
			"Language",
			"language-select",
			state.selectedLanguage,
			[
				["auto", "Auto"],
				["en", "English"],
				["ru", "Русский"]
			]
		],
		[
			"Recognition",
			"recognition-select",
			state.recognitionFormat,
			[
				["auto", "Auto"],
				["most-suitable", "Most suitable"],
				["most-optimized", "Most optimized"],
				["most-legibility", "Most legible"],
				["markdown", "Markdown"],
				["html", "HTML"],
				["text", "Plain text"],
				["json", "JSON"]
			]
		],
		[
			"Processing",
			"processing-select",
			state.processingFormat,
			[
				["markdown", "Markdown"],
				["html", "HTML"],
				["json", "JSON"],
				["text", "Plain text"],
				["typescript", "TypeScript"],
				["javascript", "JavaScript"],
				["python", "Python"],
				["java", "Java"],
				["cpp", "C++"],
				["csharp", "C#"],
				["php", "PHP"],
				["ruby", "Ruby"],
				["go", "Go"],
				["rust", "Rust"],
				["xml", "XML"],
				["yaml", "YAML"],
				["css", "CSS"],
				["scss", "SCSS"]
			]
		]
	];
	for (const [labelText, className, value, options] of fields) {
		const label = document.createElement("label");
		label.textContent = labelText;
		const select = document.createElement("select");
		select.className = className;
		for (const [optionValue, optionText] of options) {
			const option = document.createElement("option");
			option.value = optionValue;
			option.textContent = optionText;
			option.selected = optionValue === value;
			select.append(option);
		}
		label.append(select);
		panel.append(label);
	}
	return panel;
};
/** Build a stateless, accessible Work Center chat shell for rendering or tests. */
var createWorkCenterChatShell = (options) => {
	const root = document.createElement("div");
	root.className = "workcenter-view workcenter-chat";
	root.dataset.view = "workcenter";
	root.setAttribute("role", "main");
	root.setAttribute("aria-labelledby", "workcenter-title");
	const header = document.createElement("header");
	header.className = "workcenter-header";
	const title = document.createElement("h2");
	title.id = "workcenter-title";
	title.textContent = options.title;
	header.append(title);
	const headerActions = document.createElement("div");
	headerActions.className = "workcenter-header__actions";
	headerActions.append(button("new-chat", "New chat", "plus"), button("open-secondary", "Open activity", "clock-counter-clockwise"), button("open-request-options", "Response options", "sliders-horizontal"));
	header.append(headerActions);
	root.append(header);
	if (options.settings) root.append(createRequestOptions(options.settings));
	const transcript = document.createElement("section");
	transcript.className = "workcenter-transcript";
	transcript.dataset.workcenterTranscript = "";
	transcript.setAttribute("role", "log");
	transcript.setAttribute("aria-live", "polite");
	transcript.setAttribute("aria-relevant", "additions text");
	if (!options.messages.length) {
		const empty = document.createElement("p");
		empty.className = "workcenter-transcript__empty";
		empty.textContent = "Start with a question or attach something to review.";
		transcript.append(empty);
	} else for (const message of options.messages) appendMessage(transcript, message, options.attachments);
	root.append(transcript);
	const composer = document.createElement("form");
	composer.className = "workcenter-composer";
	composer.dataset.workcenterComposer = "";
	composer.setAttribute("aria-label", "Message composer");
	const resize = document.createElement("div");
	resize.className = "workcenter-composer__resize";
	resize.dataset.composerResize = "";
	resize.setAttribute("role", "separator");
	resize.setAttribute("aria-orientation", "horizontal");
	resize.setAttribute("aria-label", "Resize composer");
	resize.title = "Drag to stretch the composer";
	composer.append(resize);
	const fileRail = document.createElement("div");
	fileRail.className = "workcenter-composer__files";
	fileRail.dataset.draftFiles = "";
	fileRail.hidden = options.draft.attachments.length === 0;
	const fileHead = document.createElement("div");
	fileHead.className = "workcenter-composer__files-head";
	const fileLabel = document.createElement("span");
	fileLabel.dataset.attachLabel = "";
	fileLabel.textContent = formatAttachCount(options.draft.attachments.length);
	fileHead.append(fileLabel);
	const chips = document.createElement("div");
	chips.className = "workcenter-composer__attachments";
	chips.dataset.draftAttachments = "";
	for (const attachment of options.draft.attachments) appendAttachmentCard(chips, attachment, options.attachments, true);
	fileRail.append(fileHead, chips);
	composer.append(fileRail);
	const inputRow = document.createElement("div");
	inputRow.className = "workcenter-composer__input-row";
	const prompt = document.createElement("textarea");
	prompt.className = "prompt-input";
	prompt.name = "prompt";
	prompt.rows = 1;
	prompt.dataset.composerAutogrow = "";
	prompt.placeholder = "Message Work Center…";
	prompt.value = options.draft.content;
	prompt.setAttribute("aria-label", "Message Work Center");
	inputRow.append(prompt);
	const attach = document.createElement("label");
	attach.className = "wc-icon-button wc-attach-button";
	attach.dataset.action = "select-files";
	attach.setAttribute("aria-label", options.draft.attachments.length ? `Attach files, ${formatAttachCount(options.draft.attachments.length)} attached` : "Attach files");
	attach.title = "Attach files";
	const picker = document.createElement("input");
	picker.type = "file";
	picker.multiple = true;
	picker.className = "wc-file-picker";
	picker.dataset.workcenterFilePicker = "";
	const badge = document.createElement("span");
	badge.className = "wc-attach-count";
	badge.dataset.attachCount = "";
	badge.textContent = String(options.draft.attachments.length);
	badge.hidden = options.draft.attachments.length === 0;
	attach.append(picker, icon("paperclip"), badge);
	inputRow.append(attach);
	inputRow.append(button("voice-input", "Voice input", "microphone"));
	const send = button("execute", "Send message", "arrow-up", "wc-send-button");
	send.type = "submit";
	inputRow.append(send);
	composer.append(inputRow);
	root.append(composer);
	const secondary = document.createElement("aside");
	secondary.className = "workcenter-secondary-panel";
	secondary.dataset.workcenterSecondary = "";
	secondary.hidden = true;
	secondary.setAttribute("aria-label", "Work Center activity");
	secondary.append(button("view-action-history", "View technical activity", "clock-counter-clockwise", "wc-quiet-button"));
	root.append(secondary);
	return root;
};
/** Presentation facade that keeps legacy callers working while the view uses chat state. */
var WorkCenterUI = class {
	deps;
	attachments;
	prompts;
	results;
	history;
	presentation;
	container = null;
	constructor(deps, attachments, prompts, results, history, presentation) {
		this.deps = deps;
		this.attachments = attachments;
		this.prompts = prompts;
		this.results = results;
		this.history = history;
		this.presentation = presentation;
	}
	setContainer(container) {
		this.container = container;
		this.attachments.setContainer(container);
		this.prompts.setContainer(container);
		this.results.setContainer(container);
		this.history.setContainer(container);
	}
	getContainer() {
		return this.container;
	}
	renderWorkCenterView(state) {
		const container = createWorkCenterChatShell({
			title: "AI Work Center",
			draft: state.draft,
			messages: state.messages,
			attachments: this.presentation,
			settings: state
		});
		this.setContainer(container);
		return container;
	}
	/** Rebuild transcript + draft chips on an already-mounted chat root. */
	paintConversation(state, root = this.container, syncPrompt = "replace") {
		const transcript = root?.querySelector("[data-workcenter-transcript]");
		if (transcript) {
			transcript.replaceChildren();
			if (!state.messages.length) {
				const empty = document.createElement("p");
				empty.className = "workcenter-transcript__empty";
				empty.textContent = "Start with a question or attach something to review.";
				transcript.append(empty);
			} else for (const message of state.messages) appendMessage(transcript, message, this.presentation);
			transcript.scrollTop = transcript.scrollHeight;
		}
		this.updateFileCounter(state, root);
		const input = root?.querySelector(".prompt-input");
		if (input && (syncPrompt === "replace" || input !== document.activeElement)) input.value = state.draft.content;
		syncWorkCenterComposerHeight(root);
	}
	updateFileCounter(state, root = this.container) {
		const count = state.draft.attachments.length;
		const rail = root?.querySelector("[data-draft-files]");
		if (rail) rail.hidden = count === 0;
		const label = root?.querySelector("[data-attach-label]");
		if (label) label.textContent = formatAttachCount(count);
		const badge = root?.querySelector("[data-attach-count]");
		if (badge) {
			badge.textContent = String(count);
			badge.hidden = count === 0;
		}
		(root?.querySelector("[data-action='select-files']"))?.setAttribute("aria-label", count ? `Attach files, ${formatAttachCount(count)} attached` : "Attach files");
		const attachments = root?.querySelector("[data-draft-attachments]");
		if (!attachments) return;
		attachments.replaceChildren();
		for (const attachment of state.draft.attachments) appendAttachmentCard(attachments, attachment, this.presentation, true);
		syncWorkCenterChatForAttachments(root);
	}
	updateFileList(state) {
		this.updateFileCounter(state);
	}
	updatePromptInput(state) {
		const input = this.container?.querySelector(".prompt-input");
		if (input) input.value = state.draft.content;
		syncWorkCenterComposerHeight(this.container);
	}
	updateTemplateSelect(_state) {}
	updateVoiceButton(_state) {}
	updateDataPipeline(_state) {}
	updateDataCounters(_state) {}
	showProcessingMessage(_message) {}
	showResult(_state) {}
	showError(_error) {}
	clearResults() {}
	revokeAllPreviewUrls(_state) {
		this.attachments.revokeAllPreviewUrls(_state);
	}
};
//#endregion
//#region ../../modules/views/workcenter-view/src/ts/WorkCenterFileOps.ts
var WorkCenterFileOps = class {
	deps;
	constructor(dependencies) {
		this.deps = dependencies;
	}
	async handleDroppedContent(state, content, sourceType) {
		switch (this.getCurrentHash()) {
			case ROUTE_HASHES.SHARE_TARGET_TEXT: if (sourceType === "text" || sourceType === "html") return this.handlePastedContent(state, content, sourceType);
			else {
				this.deps.showMessage?.("This route only accepts text content. Please paste text or use the files route for file drops.");
				return;
			}
			case ROUTE_HASHES.SHARE_TARGET_IMAGE: if (this.isImageContent(content) || sourceType === "image") return this.handleImageContent(state, content, sourceType);
			else {
				this.deps.showMessage?.("This route only accepts image content. Please drop images or use other routes for different content types.");
				return;
			}
			case ROUTE_HASHES.SHARE_TARGET_FILES: return this.handlePastedContent(state, content, sourceType);
			case ROUTE_HASHES.SHARE_TARGET_URL: if (this.isValidUrl(content)) return this.handlePastedContent(state, content, sourceType);
			else {
				this.deps.showMessage?.("This route only accepts URLs. Please paste a valid URL.");
				return;
			}
			default: return this.handlePastedContent(state, content, sourceType);
		}
	}
	async handlePastedContent(state, content, sourceType) {
		const currentHash = this.getCurrentHash();
		try {
			switch (currentHash) {
				case ROUTE_HASHES.SHARE_TARGET_TEXT:
					if (sourceType === "text" || sourceType === "html") await this.handleTextContent(state, content, sourceType);
					else this.deps.showMessage?.("This route only accepts text content");
					break;
				case ROUTE_HASHES.SHARE_TARGET_URL:
					if (this.isValidUrl(content)) await this.handleUrlContent(state, content);
					else this.deps.showMessage?.("This route only accepts valid URLs");
					break;
				case ROUTE_HASHES.SHARE_TARGET_IMAGE:
					if (this.isImageContent(content) || this.isBase64Data(content)) await this.handleImageContent(state, content, sourceType);
					else this.deps.showMessage?.("This route only accepts image content");
					break;
				default: await this.handleDefaultPaste(state, content, sourceType);
			}
		} catch (error) {
			console.error("[WorkCenter] Failed to handle pasted content:", error);
			this.deps.showMessage?.("Failed to process pasted content");
		}
	}
	isValidUrl(string) {
		try {
			new URL(string);
			return true;
		} catch {
			return false;
		}
	}
	isBase64Data(content) {
		const raw = (content || "").trim();
		return !!parseDataUrl(raw) || isBase64Like(raw);
	}
	async handleBase64Content(state, content) {
		try {
			const asset = await normalizeDataAsset(content, {
				namePrefix: "pasted-data",
				uriComponent: true
			});
			state.files.push(asset.file);
			this.deps.showMessage?.("Encoded content decoded and added to work center");
		} catch (error) {
			console.error("[WorkCenter] Failed to decode base64 content:", error);
			const fallbackAsset = await normalizeDataAsset(content, {
				namePrefix: "pasted-text",
				mimeType: "text/plain;charset=utf-8"
			});
			state.files.push(fallbackAsset.file);
			this.deps.showMessage?.("Base64 content added as text to work center");
		}
	}
	addFilesFromInput(state, files) {
		const fileArray = Array.from(files);
		const currentHash = this.getCurrentHash();
		let filteredFiles = fileArray;
		switch (currentHash) {
			case ROUTE_HASHES.SHARE_TARGET_IMAGE:
				filteredFiles = fileArray.filter((file) => file.type.startsWith("image/"));
				if (filteredFiles.length === 0) {
					this.deps.showMessage?.("This route only accepts image files. Please drop images or use other routes for different file types.");
					return;
				}
				break;
			case ROUTE_HASHES.SHARE_TARGET_TEXT:
				filteredFiles = fileArray.filter((file) => file.type.startsWith("text/") || file.type === "application/json" || file.type === "application/xml" || file.name.toLowerCase().endsWith(".txt") || file.name.toLowerCase().endsWith(".md") || file.name.toLowerCase().endsWith(".json") || file.name.toLowerCase().endsWith(".xml"));
				if (filteredFiles.length === 0) {
					this.deps.showMessage?.("This route only accepts text files. Please drop text files or use the files route for other file types.");
					return;
				}
				break;
			case ROUTE_HASHES.SHARE_TARGET_FILES:
				filteredFiles = fileArray;
				break;
			case ROUTE_HASHES.SHARE_TARGET_URL:
				this.deps.showMessage?.("This route only accepts URLs. Please paste a URL instead of dropping files.");
				return;
			default: filteredFiles = fileArray;
		}
		state.files.push(...filteredFiles);
		if (filteredFiles.length > 0) {
			const fileCount = filteredFiles.length;
			const fileWord = fileCount === 1 ? "file" : "files";
			this.deps.showMessage?.(`${fileCount} ${fileWord} added to work center`);
		}
	}
	removeFile(state, index) {
		if (index >= 0 && index < state.files.length) return state.files.splice(index, 1)[0];
		return null;
	}
	clearAllFiles(state) {
		const files = [...state.files];
		state.files.length = 0;
		return files;
	}
	getFilesForProcessing(state) {
		return [...state.files];
	}
	hasFiles(state) {
		return state.files.length > 0;
	}
	hasTextFiles(state) {
		return state.files.some((f) => f.type.startsWith("text/") || f.type === "application/markdown" || f.name?.endsWith(".md") || f.name?.endsWith(".txt"));
	}
	determineRecognizedFormat(state) {
		if (!this.hasTextFiles(state)) return "markdown";
		else return "markdown";
	}
	validateFileForUpload(file) {
		if (file.size > 52428800) return {
			valid: false,
			reason: "File too large (max 50MB)"
		};
		if (![
			"image/",
			"text/",
			"application/pdf",
			"application/json",
			"application/markdown",
			"application/xml"
		].some((type) => file.type.startsWith(type) || file.name.toLowerCase().endsWith(type.replace("application/", ".")))) return {
			valid: false,
			reason: "File type not supported"
		};
		return { valid: true };
	}
	getCurrentHash() {
		return typeof globalThis !== "undefined" ? globalThis?.location?.hash : "";
	}
	async handleTextContent(state, content, sourceType) {
		const asset = await normalizeDataAsset(content, {
			namePrefix: sourceType === "html" ? "shared-html" : "shared-text",
			mimeType: sourceType === "html" ? "text/html" : "text/plain;charset=utf-8"
		});
		state.files.push(asset.file);
		this.deps.showMessage?.("Text content added to work center");
	}
	async handleUrlContent(state, content) {
		const asset = await normalizeDataAsset(content, {
			namePrefix: "shared-url",
			uriComponent: true
		});
		state.files.push(asset.file);
		this.deps.showMessage?.("URL added to work center");
	}
	async handleImageContent(state, content, sourceType) {
		if (this.isBase64Data(content)) await this.handleBase64Content(state, content);
		else {
			const asset = await normalizeDataAsset(content, {
				namePrefix: "shared-image",
				mimeType: sourceType === "image" ? "image/png" : "text/plain;charset=utf-8",
				uriComponent: true
			});
			state.files.push(asset.file);
			this.deps.showMessage?.("Image content added to work center");
		}
	}
	async handleDefaultPaste(state, content, sourceType) {
		if (this.isValidUrl(content)) {
			const asset = await normalizeDataAsset(content, {
				namePrefix: "pasted-url",
				uriComponent: true
			});
			state.files.push(asset.file);
			this.deps.showMessage?.("URL added to work center");
		} else if (this.isBase64Data(content)) await this.handleBase64Content(state, content);
		else {
			const asset = await normalizeDataAsset(content, {
				namePrefix: `pasted-${sourceType || "text"}`,
				mimeType: sourceType === "html" ? "text/html" : "text/plain;charset=utf-8"
			});
			state.files.push(asset.file);
			this.deps.showMessage?.(`${sourceType === "html" ? "HTML" : "Text"} content added to work center`);
		}
	}
	isImageContent(content) {
		return content.startsWith("data:image/") || /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i.test(content);
	}
};
//#endregion
//#region ../../modules/views/workcenter-view/src/ts/WorkCenterShareTarget.ts
var WorkCenterShareTarget = class {
	deps;
	_fileOps;
	ingestInput;
	constructor(dependencies, fileOps, ingestInput) {
		this.deps = dependencies;
		this._fileOps = fileOps;
		this.ingestInput = ingestInput;
		this._fileOps;
	}
	initShareTargetListener(_state) {
		console.log("[WorkCenter] Share target result listener initialized via unified messaging");
	}
	async processQueuedMessages(_state) {
		try {
			console.log("[WorkCenter] Queued message processing handled by unified messaging");
			const payload = await consumeCachedShareTargetPayload({ clear: true });
			if (payload) {
				const meta = payload.meta && typeof payload.meta === "object" ? payload.meta : {};
				await this.addShareTargetInput(_state, {
					files: payload.files,
					title: typeof meta.title === "string" ? meta.title : "",
					text: typeof meta.text === "string" ? meta.text : "",
					url: typeof meta.url === "string" ? meta.url : "",
					timestamp: typeof meta.timestamp === "number" ? meta.timestamp : Date.now(),
					source: "share-target-cache"
				});
			}
		} catch (error) {
			console.error("[WorkCenter] Failed to process queued messages:", error);
		}
	}
	handleShareTargetMessage(state, event) {
		const { type, data, pingId } = event.data || {};
		if (type === "ping" && pingId) return;
		else if (type === "share-target-result" && data) {
			console.log("[WorkCenter] Received share target result:", summarizeForLog(data));
			this.addShareTargetResult(state, data);
		} else if (type === "share-target-input" && data) {
			console.log("[WorkCenter] Received share target input:", summarizeForLog(data));
			this.addShareTargetInput(state, data);
		} else if (type === "ai-result" && data) {
			console.log("[WorkCenter] Received AI processing result:", summarizeForLog(data));
			this.handleAIResult(state, data);
		} else if (type === "content-cached" && data) {
			console.log("[WorkCenter] Received cached content from SW:", summarizeForLog(data));
			this.handleCachedContent(state, data);
		} else if (type === "content-received" && data) {
			console.log("[WorkCenter] Received content from SW:", summarizeForLog(data));
			this.handleReceivedContent(state, data);
		}
	}
	async addShareTargetResult(state, resultData) {
		const processedEntry = {
			content: resultData.content || "",
			timestamp: resultData.timestamp || Date.now(),
			action: resultData.action || "Share Target Processing",
			sourceData: resultData.rawData,
			metadata: {
				source: resultData.source || "share-target",
				...resultData.metadata
			}
		};
		const { WorkCenterStateManager } = await __vitePreload(async () => {
			const { WorkCenterStateManager } = await import("./WorkCenterState.js").then((n) => n.n);
			return { WorkCenterStateManager };
		}, __vite__mapDeps([0,1]), import.meta.url);
		WorkCenterStateManager.addProcessedStep(state, processedEntry);
		state.lastRawResult = resultData.rawData ?? resultData.content ?? null;
		WorkCenterStateManager.saveState(state);
		this.deps.showMessage?.(`Share target result added to work center`);
		this.deps.render?.();
	}
	async addShareTargetInput(state, inputData) {
		console.log("[WorkCenter] Adding share target input:", summarizeForLog(inputData));
		if (this.ingestInput) {
			await this.ingestInput(inputData);
			return;
		}
		try {
			let filesAdded = 0;
			let textAdded = false;
			const fileFingerprint = (file) => `${String(file.name || "").trim().toLowerCase()}::${Number(file.size || 0)}::${String(file.type || "").trim().toLowerCase()}`;
			const seenFingerprints = new Set((state.files || []).map(fileFingerprint));
			const pushUniqueFile = (file) => {
				const key = fileFingerprint(file);
				if (seenFingerprints.has(key)) return false;
				seenFingerprints.add(key);
				state.files.push(file);
				return true;
			};
			const normalizeIncomingFile = async (raw) => {
				if (!raw) return null;
				if (raw instanceof File) return raw;
				if (raw instanceof Blob) return new File([raw], `shared-${Date.now()}`, { type: raw.type || "application/octet-stream" });
				const candidate = raw;
				if (candidate?.blob instanceof Blob) {
					const blob = candidate.blob;
					const name = typeof candidate.name === "string" && candidate.name.trim() ? candidate.name : `shared-${Date.now()}`;
					const lastModified = Number(candidate.lastModified || Date.now());
					return new File([blob], name, {
						type: String(candidate.type || blob.type || "application/octet-stream"),
						lastModified: Number.isFinite(lastModified) ? lastModified : Date.now()
					});
				}
				return null;
			};
			const attachmentFiles = Array.isArray(inputData.attachments) ? inputData.attachments.map((entry) => entry?.data).filter((entry) => entry instanceof File || entry instanceof Blob) : [];
			const incomingFiles = [...Array.isArray(inputData.files) ? inputData.files : [], ...attachmentFiles];
			if (incomingFiles.length > 0) for (const raw of incomingFiles) {
				const normalized = await normalizeIncomingFile(raw);
				if (normalized && pushUniqueFile(normalized)) filesAdded++;
			}
			if (filesAdded === 0 && Number(inputData?.fileCount || 0) > 0) try {
				const cached = await consumeCachedShareTargetPayload({ clear: false });
				const cachedFiles = Array.isArray(cached?.files) ? cached.files : [];
				if (cachedFiles.length > 0) {
					for (const cachedFile of cachedFiles) if (cachedFile instanceof File && pushUniqueFile(cachedFile)) filesAdded++;
				}
			} catch (cacheError) {
				console.warn("[WorkCenter] Failed to hydrate cached share files:", cacheError);
			}
			if (inputData.text && typeof inputData.text === "string" && inputData.text.trim()) {
				const textBlob = new Blob([inputData.text], { type: "text/plain" });
				if (pushUniqueFile(new File([textBlob], "shared-text.txt", { type: "text/plain" }))) {
					filesAdded++;
					textAdded = true;
				}
			}
			if (inputData.url && typeof inputData.url === "string") {
				const urlBlob = new Blob([inputData.url], { type: "text/plain" });
				if (pushUniqueFile(new File([urlBlob], "shared-url.txt", { type: "text/plain" }))) filesAdded++;
			}
			if (inputData.base64Data && typeof inputData.base64Data === "string") try {
				if (pushUniqueFile((await normalizeDataAsset(inputData.base64Data, {
					namePrefix: "shared",
					uriComponent: true
				})).file)) filesAdded++;
			} catch (error) {
				console.warn("[WorkCenter] Failed to decode base64 data:", error);
			}
			const { WorkCenterStateManager: StateManager } = await __vitePreload(async () => {
				const { WorkCenterStateManager: StateManager } = await import("./WorkCenterState.js").then((n) => n.n);
				return { WorkCenterStateManager: StateManager };
			}, __vite__mapDeps([0,1]), import.meta.url);
			StateManager.clearRecognizedData(state);
			StateManager.saveState(state);
			if (filesAdded > 0 || textAdded) {
				state.activeInputTab = "attachments";
				this.deps.onFilesChanged?.();
			}
			let message = "";
			if (filesAdded > 0) message += `${filesAdded} file(s) added to work center`;
			if (textAdded) message += (message ? " and " : "") + "text content added";
			if (message) this.deps.showMessage?.(message);
			if (filesAdded > 0 || textAdded) this.deps.render?.();
		} catch (error) {
			console.error("[WorkCenter] Failed to add share target input:", error);
			this.deps.showMessage?.("Failed to add share target input");
		}
	}
	sendShareTargetResult(resultData) {
		sendMessage({
			type: "share-target-result",
			source: "workcenter",
			destination: "workcenter",
			data: resultData,
			metadata: { priority: "high" }
		}).catch((error) => {
			console.error("[WorkCenter] Failed to send share target result:", error);
		});
	}
	sendShareTargetInput(inputData) {
		sendMessage({
			type: "share-target-input",
			source: "workcenter",
			destination: "workcenter",
			data: inputData,
			metadata: { priority: "high" }
		}).catch((error) => {
			console.error("[WorkCenter] Failed to send share target input:", error);
		});
	}
	async handleCachedContent(state, data) {
		const { cacheKey, context, content } = data;
		if (context === "share-target" && content) {
			console.log("[WorkCenter] Processing cached share-target content:", summarizeForLog(content));
			await this.addShareTargetInput(state, content);
			await this.retrieveCachedFiles(state, cacheKey);
		}
	}
	async handleReceivedContent(state, data) {
		const { content, context } = data;
		if (context === "share-target" && content) {
			console.log("[WorkCenter] Processing received share-target content:", summarizeForLog(content));
			await this.addShareTargetInput(state, content);
		}
	}
	async handleAIResult(state, resultData) {
		const { success, data, error } = resultData;
		if (!success) {
			console.warn("[WorkCenter] AI processing failed:", error);
			this.deps.showMessage?.("AI processing failed: " + (error || "Unknown error"));
			return;
		}
		if (!data) {
			console.warn("[WorkCenter] No data in AI result");
			return;
		}
		console.log("[WorkCenter] Adding AI processing result to work center");
		try {
			const processedEntry = {
				content: typeof data === "string" ? data : JSON.stringify(data, null, 2),
				timestamp: Date.now(),
				action: "AI Processing (Share Target)",
				sourceData: {
					aiResult: data,
					source: "share-target"
				},
				metadata: {
					source: "share-target-ai",
					processingType: "ai",
					resultType: typeof data
				}
			};
			const { WorkCenterStateManager } = await __vitePreload(async () => {
				const { WorkCenterStateManager } = await import("./WorkCenterState.js").then((n) => n.n);
				return { WorkCenterStateManager };
			}, __vite__mapDeps([0,1]), import.meta.url);
			WorkCenterStateManager.addProcessedStep(state, processedEntry);
			state.lastRawResult = data;
			WorkCenterStateManager.saveState(state);
			this.deps.render?.();
			this.deps.showMessage?.("AI processing result added to work center");
			if (this.deps.render) this.deps.render();
		} catch (error) {
			console.error("[WorkCenter] Failed to add AI result:", error);
			this.deps.showMessage?.("Failed to add AI processing result");
		}
	}
	async retrieveCachedFiles(state, cacheKey) {
		try {
			const files = await fetchCachedShareFiles(cacheKey || "latest");
			if (files.length > 0) {
				const fileFingerprint = (file) => `${String(file.name || "").trim().toLowerCase()}::${Number(file.size || 0)}::${String(file.type || "").trim().toLowerCase()}`;
				const seenFingerprints = new Set((state.files || []).map(fileFingerprint));
				let added = 0;
				for (const file of files) {
					if (!(file instanceof File)) continue;
					const key = fileFingerprint(file);
					if (seenFingerprints.has(key)) continue;
					seenFingerprints.add(key);
					console.log("[WorkCenter] Adding cached file:", file.name);
					state.files.push(file);
					added++;
				}
				if (added > 0) {
					this.deps.onFilesChanged?.();
					this.deps.showMessage?.(`Added ${added} cached file(s) from share-target`);
				}
			}
		} catch (error) {
			console.warn("[WorkCenter] Failed to retrieve cached files:", error);
		}
	}
};
//#endregion
//#region ../../modules/views/workcenter-view/src/ts/WorkCenterTemplates.ts
var WorkCenterTemplates = class {
	deps;
	/** Cached custom instructions from settings */
	cachedInstructions = [];
	cachedActiveInstructionId = "";
	constructor(dependencies) {
		this.deps = dependencies;
	}
	/** Load custom instructions from app settings */
	async loadInstructions() {
		try {
			const snapshot = await getInstructionRegistry();
			this.cachedInstructions = snapshot.instructions;
			this.cachedActiveInstructionId = snapshot.activeId;
			return this.cachedInstructions;
		} catch (e) {
			console.warn("[WorkCenterTemplates] Failed to load custom instructions:", e);
			return [];
		}
	}
	/** Get cached instructions (sync, call loadInstructions first) */
	getInstructions() {
		return this.cachedInstructions;
	}
	/** Get cached active instruction id from settings */
	getActiveInstructionId() {
		return this.cachedActiveInstructionId;
	}
	/** Get the currently active instruction from settings */
	async getActiveInstruction() {
		if (this.cachedActiveInstructionId) {
			const cached = this.getInstructionById(this.cachedActiveInstructionId);
			if (cached) return cached;
		}
		const snapshot = await getInstructionRegistry();
		this.cachedInstructions = snapshot.instructions;
		this.cachedActiveInstructionId = snapshot.activeId;
		return snapshot.activeInstruction;
	}
	/** Set a specific instruction as active in settings */
	async setActiveInstruction(id) {
		await setActiveInstruction(id);
		this.cachedActiveInstructionId = id || "";
	}
	/** Build a combined prompt with the selected custom instruction */
	buildPromptWithInstruction(basePrompt, instruction) {
		if (!instruction?.instruction) return basePrompt;
		return buildInstructionPrompt(basePrompt, instruction.instruction);
	}
	/** Get a specific instruction by ID */
	getInstructionById(id) {
		return this.cachedInstructions.find((i) => i.id === id);
	}
	/** Resolve selected instruction, fallback to active settings instruction */
	resolveInstruction(selectedId) {
		if (selectedId) {
			const selected = this.getInstructionById(selectedId);
			if (selected) return selected;
		}
		if (!this.cachedActiveInstructionId) return null;
		return this.getInstructionById(this.cachedActiveInstructionId) || null;
	}
	/** Get default instruction templates (for seeding). Dynamic import avoids TDZ when workcenter loads before `com/app` finishes. */
	async getDefaultTemplates() {
		const { DEFAULT_INSTRUCTION_TEMPLATES } = await __vitePreload(async () => {
			const { DEFAULT_INSTRUCTION_TEMPLATES } = await import("./templates.js").then((n) => n.n);
			return { DEFAULT_INSTRUCTION_TEMPLATES };
		}, __vite__mapDeps([2,1,3]), import.meta.url);
		return DEFAULT_INSTRUCTION_TEMPLATES;
	}
	renderInstructionPanel(state) {
		return `
            <div class="instruction-panel">
              <div class="instruction-selector-row wide">
                <label class="instruction-label">
                  <ui-icon icon="clipboard-text" size="16" icon-style="duotone"></ui-icon>
                  <span>Instruction:</span>
                </label>
                <select class="instruction-select" data-action="select-instruction">
                  <option value="">None (default)</option>
                </select>
                <button class="btn btn-icon btn-sm" data-action="refresh-instructions" title="Refresh from Settings">
                  <ui-icon icon="arrows-clockwise" size="14" icon-style="duotone"></ui-icon>
                </button>
              </div>
              <div class="instruction-help">
                Active instruction from Settings is appended to your prompt.
              </div>
            </div>
        `;
	}
	async fillInstructionSelects(root, state) {
		if (!root) return;
		const instructions = await this.loadInstructions();
		const hasStored = Boolean(state.selectedInstruction) && instructions.some((item) => item.id === state.selectedInstruction);
		const selectedId = hasStored ? state.selectedInstruction : this.cachedActiveInstructionId;
		if ((!state.selectedInstruction || !hasStored) && selectedId) state.selectedInstruction = selectedId;
		root.querySelectorAll(".instruction-select").forEach((select) => {
			select.replaceChildren();
			const empty = document.createElement("option");
			empty.value = "";
			empty.textContent = "None (default)";
			select.append(empty);
			for (const item of instructions) {
				const option = document.createElement("option");
				option.value = item.id;
				option.textContent = item.label || item.id;
				option.selected = item.id === selectedId;
				select.append(option);
			}
			select.value = selectedId || "";
		});
	}
	async applyInstruction(state, instructionId) {
		state.selectedInstruction = instructionId;
		await this.setActiveInstruction(instructionId || null);
	}
	showTemplateEditor(state, container) {
		const modal = H`<div class="template-editor-modal">
      <div class="modal-content">
        <div class="modal-header">
            <h3>Prompt Templates</h3>
            <p class="modal-desc">Manage prompt templates used in Work Center. These define what action to perform on the content.</p>
        </div>
        ${this.renderInstructionPanel(state)}
        <div class="template-list">
          ${state.promptTemplates.map((template, index) => H`<div class="template-item" data-index="${index}">
              <div class="template-item-header">
                <input type="text" class="template-name" value="${template.name}" data-index="${index}" placeholder="Template name...">
                <button class="btn small" data-action="use-template" data-index="${index}" title="Use this template">Use</button>
                <button class="btn small btn-danger remove-template" data-index="${index}" title="Remove template">
                  <ui-icon icon="trash" size="14"></ui-icon>
                </button>
              </div>
              <textarea class="template-prompt" data-index="${index}" rows="3" placeholder="Enter prompt template...">${template.prompt}</textarea>
            </div>`)}
        </div>
        <div class="modal-actions">
          <div class="modal-actions-group modal-actions-group-start">
            <button class="btn" data-action="add-template">
              <ui-icon icon="plus" size="14"></ui-icon>
              <span>Add Template</span>
            </button>
            <button class="btn" data-action="import-instructions" title="Import from Custom Instructions (Settings)">
              <ui-icon icon="download" size="14"></ui-icon>
              <span>Import from Settings</span>
            </button>
          </div>
          <div class="modal-actions-group modal-actions-group-end">
            <button class="btn primary" data-action="save-templates">Save</button>
            <button class="btn" data-action="close-editor">Close</button>
          </div>
        </div>
      </div>
    </div>`;
		modal.addEventListener("click", async (e) => {
			const target = e.target;
			const action = target.closest("[data-action]")?.getAttribute("data-action");
			const index = target.closest("[data-index]")?.getAttribute("data-index");
			if (action === "refresh-instructions") await this.fillInstructionSelects(modal, state);
			else if (action === "use-template" && index) {
				const template = state.promptTemplates[Number(index)];
				if (template) {
					this.selectTemplate(state, template.prompt);
					modal.remove();
					this.deps.render?.();
				}
			} else if (action === "add-template") {
				this.addTemplate(state);
				modal.remove();
				this.showTemplateEditor(state, container);
			} else if (action === "save-templates") {
				await this.saveTemplates(state, modal);
				modal.remove();
				this.deps.render?.();
			} else if (action === "close-editor") modal.remove();
			else if (action === "import-instructions") {
				await this.importFromCustomInstructions(state);
				modal.remove();
				this.showTemplateEditor(state, container);
			} else if (target.classList.contains("remove-template") && index) {
				this.removeTemplate(state, parseInt(index));
				modal.remove();
				this.showTemplateEditor(state, container);
			}
		});
		modal.addEventListener("click", (e) => {
			if (e.target === modal) modal.remove();
		});
		container.append(modal);
		const instruction = modal.querySelector(".instruction-select");
		instruction?.addEventListener("change", () => {
			this.applyInstruction(state, instruction.value);
		});
		this.fillInstructionSelects(modal, state);
	}
	addTemplate(state) {
		state.promptTemplates.push({
			name: "New Template",
			prompt: "Enter your prompt here..."
		});
	}
	removeTemplate(state, index) {
		if (index >= 0 && index < state.promptTemplates.length) state.promptTemplates.splice(index, 1);
	}
	async saveTemplates(state, modal) {
		const nameInputs = modal.querySelectorAll(".template-name");
		const promptInputs = modal.querySelectorAll(".template-prompt");
		state.promptTemplates = Array.from(nameInputs).map((input, i) => ({
			name: input.value,
			prompt: promptInputs[i].value
		}));
		const { WorkCenterStateManager } = await __vitePreload(async () => {
			const { WorkCenterStateManager } = await import("./WorkCenterState.js").then((n) => n.n);
			return { WorkCenterStateManager };
		}, __vite__mapDeps([0,1]), import.meta.url);
		WorkCenterStateManager.savePromptTemplates(state.promptTemplates);
		this.deps.showMessage?.("Templates saved");
	}
	/**
	* Import custom instructions from app settings as prompt templates.
	* Maps each CustomInstruction into the WorkCenter template format.
	*/
	async importFromCustomInstructions(state) {
		try {
			const instructions = await getCustomInstructions();
			if (!instructions.length) {
				this.deps.showMessage?.("No custom instructions found in Settings");
				return;
			}
			const existingNames = new Set(state.promptTemplates.map((t) => t.name));
			let added = 0;
			for (const instr of instructions) if (!existingNames.has(instr.label)) {
				state.promptTemplates.push({
					name: instr.label,
					prompt: instr.instruction
				});
				added++;
			}
			const { WorkCenterStateManager } = await __vitePreload(async () => {
				const { WorkCenterStateManager } = await import("./WorkCenterState.js").then((n) => n.n);
				return { WorkCenterStateManager };
			}, __vite__mapDeps([0,1]), import.meta.url);
			WorkCenterStateManager.savePromptTemplates(state.promptTemplates);
			if (added > 0) this.deps.showMessage?.(`Imported ${added} instruction${added > 1 ? "s" : ""} as templates`);
			else this.deps.showMessage?.("All instructions already exist as templates");
		} catch (e) {
			console.warn("[WorkCenterTemplates] Failed to import instructions:", e);
			this.deps.showMessage?.("Failed to import instructions");
		}
	}
	selectTemplate(state, prompt) {
		state.selectedTemplate = prompt;
		if (prompt) state.currentPrompt = prompt;
	}
	getTemplateByPrompt(state, prompt) {
		return state.promptTemplates.find((t) => t.prompt === prompt);
	}
	hasTemplate(state, prompt) {
		return state.promptTemplates.some((t) => t.prompt === prompt);
	}
};
//#endregion
//#region ../../modules/views/workcenter-view/src/ts/WorkCenterVoice.ts
var WorkCenterVoice = class {
	deps;
	voiceTimeout = null;
	constructor(dependencies) {
		this.deps = dependencies;
	}
	async startVoiceRecording(state) {
		if (state.voiceRecording) return;
		state.voiceRecording = true;
		try {
			const prompt = await this.deps.getSpeechPrompt();
			if (prompt) state.currentPrompt = prompt;
		} catch (e) {
			console.warn("Voice recording failed:", e);
			this.deps.showMessage?.("Voice recording failed");
		} finally {
			state.voiceRecording = false;
		}
	}
	stopVoiceRecording(state) {
		state.voiceRecording = false;
		if (this.voiceTimeout) {
			globalThis?.clearTimeout?.(this.voiceTimeout);
			this.voiceTimeout = null;
		}
	}
	isRecording(state) {
		return state.voiceRecording;
	}
	setVoiceTimeout(callback, delay = 3e4) {
		if (this.voiceTimeout) globalThis?.clearTimeout?.(this.voiceTimeout);
		this.voiceTimeout = globalThis?.setTimeout?.(() => {
			callback();
			this.voiceTimeout = null;
		}, delay);
	}
	clearVoiceTimeout() {
		if (this.voiceTimeout) {
			globalThis?.clearTimeout?.(this.voiceTimeout);
			this.voiceTimeout = null;
		}
	}
};
//#endregion
//#region src/service/service/WorkCenterTurnInput.ts
/**
* Pure Responses-input builder for a Work Center turn.
*
* FIND:workcenter-turn-input
* WHY: Keeping this free of settings and fetch code makes direct-file behavior
* testable and lets the provider policy choose a local fallback deterministically.
*/
var attachmentLabel = (attachment) => `\n\n--- Attachment: ${attachment.original.name || attachment.attachmentId} ---\n`;
var encodeBase64 = (bytes) => {
	const BufferCtor = globalThis.Buffer;
	if (BufferCtor) return BufferCtor.from(bytes).toString("base64");
	let binary = "";
	const chunkSize = 32768;
	for (let offset = 0; offset < bytes.length; offset += chunkSize) {
		const chunk = bytes.subarray(offset, offset + chunkSize);
		binary += String.fromCharCode(...chunk);
	}
	return btoa(binary);
};
var fileDataUrl = async (file) => {
	const buffer = await file.arrayBuffer();
	return `data:${file.type || "application/octet-stream"};base64,${encodeBase64(new Uint8Array(buffer))}`;
};
var isDirectDocument = (attachment) => [
	"pdf",
	"docx",
	"xlsx"
].includes(attachment.kind) && !attachment.error && attachment.original.size <= 10485760;
var fallbackParts = (attachment) => {
	const text = attachment.fallbackText?.trim();
	if (text) return [{
		type: "input_text",
		text: `${attachmentLabel(attachment)}${text}`
	}];
	return [{
		type: "input_text",
		text: `${attachmentLabel(attachment)}[Attachment could not be prepared: ${attachment.error || "no readable text"}]`
	}];
};
/**
* Produces Responses API message content with direct files only for eligible
* document types. All other attachments have a readable local fallback.
*/
var buildWorkCenterTurnInput = async (request, options = {}) => {
	const allowDirectFile = options.allowDirectFile !== false;
	const directFileByteLimit = options.directFileByteLimit ?? 10485760;
	const input = request.messages.map((message) => ({
		type: "message",
		role: message.role,
		content: [{
			type: "input_text",
			text: message.content
		}]
	}));
	let target = input.at(-1);
	if (!target || target.role !== "user") {
		target = {
			type: "message",
			role: "user",
			content: []
		};
		input.push(target);
	}
	const content = target.content ?? (target.content = []);
	let usedDirectFile = false;
	for (const attachment of request.attachments) {
		if (attachment.kind === "image" && !attachment.error) {
			content.push({
				type: "input_image",
				detail: "auto",
				image_url: await fileDataUrl(attachment.original)
			});
			continue;
		}
		if (allowDirectFile && isDirectDocument(attachment) && attachment.original.size <= directFileByteLimit) {
			content.push({
				type: "input_file",
				filename: attachment.original.name || "attachment",
				file_data: await fileDataUrl(attachment.original)
			});
			usedDirectFile = true;
			continue;
		}
		content.push(...fallbackParts(attachment));
		for (const image of attachment.images || []) content.push({
			type: "input_image",
			detail: "auto",
			image_url: await fileDataUrl(image)
		});
	}
	return {
		input,
		usedDirectFile
	};
};
var isFileCapabilityRejection = (error) => /(?:input_file|file_data|unsupported\s+(?:file|input)|file\s+(?:input|type).*(?:unsupported|invalid))/i.test(String(error || ""));
//#endregion
//#region src/service/service/WorkCenterTurnPolicy.ts
var cancelledResult = () => ({
	ok: false,
	error: "Cancelled"
});
/** Stateful provider policy with a one-way direct-file incompatibility cache. */
var WorkCenterTurnService = class {
	directFileUnsupported = false;
	async run(request, execute) {
		if (request.signal?.aborted) return cancelledResult();
		const requestOptions = {
			...request.options,
			instruction: request.instruction,
			signal: request.signal
		};
		const direct = await buildWorkCenterTurnInput(request, { allowDirectFile: !this.directFileUnsupported });
		if (request.signal?.aborted) return cancelledResult();
		const result = await execute(direct.input, requestOptions, { usedDirectFile: direct.usedDirectFile });
		if (result.ok || !direct.usedDirectFile || request.signal?.aborted || !isFileCapabilityRejection(result.error)) return request.signal?.aborted ? cancelledResult() : result;
		this.directFileUnsupported = true;
		const fallback = await buildWorkCenterTurnInput(request, { allowDirectFile: false });
		if (request.signal?.aborted) return cancelledResult();
		return execute(fallback.input, requestOptions, { usedDirectFile: false });
	}
};
//#endregion
//#region src/service/service/WorkCenterTurn.ts
/**
* Public Work Center turn entry point.
*
* FIND:workcenter-turn
* WHY: Keep provider execution separate from the pure request builder so UI
* contracts can be verified without loading application settings or workers.
* INVARIANT: Process PWA posts to /api/process on process.u2re.space / ai.u2re.space first.
*/
var flattenResponsesInput = (input) => {
	const texts = [];
	for (const item of input) {
		if (typeof item === "string") {
			texts.push(item);
			continue;
		}
		const content = item?.content;
		if (typeof content === "string") texts.push(content);
		if (!Array.isArray(content)) continue;
		for (const part of content) if (typeof part === "string") texts.push(part);
		else if (part && typeof part === "object" && typeof part.text === "string") texts.push(part.text);
	}
	return texts.join("\n\n").trim();
};
var tryProcessApiTurn = async (input, options) => {
	const text = flattenResponsesInput(input);
	if (!text) return null;
	const settings = await loadSettings().catch(() => null);
	const auth = processApiAuthFromSettings(settings);
	const posted = await postProcessApi("processing", {
		input: text,
		text,
		mode: "smartRecognize",
		customInstruction: options.instruction || options.customInstruction || void 0
	}, auth, { signal: options.signal });
	if (!posted.json) return null;
	const json = posted.json;
	if (json.ok === false) {
		const error = String(json.error || "");
		if (/missing credentials|invalid credentials/i.test(error)) return null;
		return {
			ok: false,
			error: error || "Process API failed"
		};
	}
	const data = readProcessApiResultText(json);
	if (!data) return null;
	return {
		ok: true,
		data
	};
};
var defaultExecutor = async (input, options) => {
	const remote = await tryProcessApiTurn(input, options).catch(() => null);
	if (remote) return remote;
	return processDataWithInstruction(input, options);
};
var defaultService = new WorkCenterTurnService();
/** Execute one turn using the app's shared direct-file capability cache. */
var runWorkCenterTurn = (request) => defaultService.run(request, defaultExecutor);
//#endregion
//#region ../../modules/views/workcenter-view/src/ts/WorkCenterActions.ts
var WorkCenterActions = class {
	deps;
	ui;
	fileOps;
	dataProcessing;
	results;
	history;
	templates;
	conversation;
	activeTurns = /* @__PURE__ */ new Map();
	constructor(dependencies, ui, fileOps, dataProcessing, results, history, templates, conversation) {
		this.deps = dependencies;
		this.ui = ui;
		this.fileOps = fileOps;
		this.dataProcessing = dataProcessing;
		this.results = results;
		this.history = history;
		this.templates = templates;
		this.conversation = conversation;
	}
	async executeUnifiedAction(state) {
		if (this.conversation) {
			await this.executeConversationTurn(state);
			return;
		}
		if (this.fileOps.getFilesForProcessing(state).length === 0 && !state.currentPrompt.trim() && !state.recognizedData) {
			this.deps.showMessage("Please select files or enter a prompt first");
			return;
		}
		let processingMessage = "Processing...";
		if (state.recognizedData) processingMessage = `Processing ${state.recognizedData.source} content...`;
		else if (this.fileOps.hasFiles(state)) processingMessage = `Processing ${state.files.length} file${state.files.length > 1 ? "s" : ""}...`;
		this.results.showProcessingMessage(processingMessage);
		try {
			let basePrompt = state.currentPrompt.trim() || (state.autoAction ? this.getLastSuccessfulPrompt() : "Analyze and process the provided content intelligently");
			if (this.templates) {
				let instruction = this.templates.resolveInstruction(state.selectedInstruction);
				if (!instruction && !state.selectedInstruction) instruction = await this.templates.getActiveInstruction();
				if (instruction?.instruction) {
					if (!state.selectedInstruction) state.selectedInstruction = instruction.id;
					basePrompt = this.templates.buildPromptWithInstruction(basePrompt, instruction);
				}
			}
			const actionInput = {
				type: state.recognizedData ? "text" : this.fileOps.hasFiles(state) ? "files" : "text",
				files: this.fileOps.hasFiles(state) ? [...state.files] : void 0,
				text: basePrompt,
				recognizedData: state.recognizedData || void 0,
				recognizedContent: state.recognizedData?.content || void 0
			};
			if (state.selectedTemplate && state.selectedTemplate.includes("Translate the following content to the selected language") && state.selectedLanguage !== "auto") {
				const targetLanguage = state.selectedLanguage === "ru" ? "Russian" : "English";
				actionInput.text = `Translate the following content to ${targetLanguage}. Maintain the original formatting and structure where possible. If the content is already in ${targetLanguage}, provide a natural rephrasing or improvement instead.`;
			} else if (state.selectedLanguage !== "auto") actionInput.text = `${state.selectedLanguage === "ru" ? "Please respond in Russian language." : "Please respond in English language."} ${actionInput.text}`;
			const context = {
				source: "workcenter",
				sessionId: this.generateSessionId()
			};
			let forceAction;
			if (state.currentPrompt.trim() && state.currentPrompt.trim() !== "Analyze and process the provided content intelligently") forceAction = void 0;
			else if (state.recognizedData) forceAction = "analyze";
			else if (this.fileOps.hasFiles(state)) {
				if (this.fileOps.hasTextFiles(state)) forceAction = "source";
				else forceAction = "recognize";
			} else forceAction = "analyze";
			const result = await executionCore.execute(actionInput, context, {
				forceAction,
				recognitionFormat: state.recognitionFormat,
				processingFormat: state.processingFormat
			});
			const { WorkCenterStateManager } = await __vitePreload(async () => {
				const { WorkCenterStateManager } = await import("./WorkCenterState.js").then((n) => n.n);
				return { WorkCenterStateManager };
			}, __vite__mapDeps([0,1]), import.meta.url);
			WorkCenterStateManager.saveState(state);
			state.lastRawResult = result.rawData;
			const formattedResult = this.dataProcessing.formatResult(result.rawData || result, state.outputFormat);
			const outputContent = this.ui.getContainer()?.querySelector("[data-output]");
			if (outputContent) outputContent.innerHTML = `<div class="result-content">${formattedResult}</div>`;
			if (this.fileOps.hasFiles(state) && result.rawData?.ok && !state.recognizedData) {
				const isTextFile = this.fileOps.hasTextFiles(state);
				state.recognizedData = {
					content: result.content,
					timestamp: Date.now(),
					source: isTextFile ? "text" : "files",
					recognizedAs: this.fileOps.determineRecognizedFormat(state),
					metadata: { fileCount: state.files.length },
					responseId: result.responseId || "unknown"
				};
				this.results.updateDataPipeline(state);
				this.ui.updateDataCounters(state);
				if (state.selectedTemplate && state.selectedTemplate.trim()) {
					console.log("[WorkCenter] Auto-processing with template:", state.selectedTemplate);
					setTimeout(async () => {
						await this.executeUnifiedAction(state);
					}, 100);
				}
			} else if (state.recognizedData && result.rawData?.ok) {
				const processedEntry = {
					content: result.content,
					timestamp: Date.now(),
					action: state.currentPrompt.trim() || "additional processing",
					sourceData: state.recognizedData,
					metadata: { step: state.currentProcessingStep + 1 }
				};
				const { WorkCenterStateManager: StateManager } = await __vitePreload(async () => {
					const { WorkCenterStateManager: StateManager } = await import("./WorkCenterState.js").then((n) => n.n);
					return { WorkCenterStateManager: StateManager };
				}, __vite__mapDeps([0,1]), import.meta.url);
				StateManager.addProcessedStep(state, processedEntry);
			}
		} catch (error) {
			const errorMsg = error instanceof Error ? error.message : String(error);
			this.results.showError(errorMsg);
		}
		this.history.updateRecentHistory(state);
		this.ui.updateDataPipeline(state);
		this.ui.updateDataCounters(state);
	}
	async persistDraft(state) {
		const conversation = this.conversation;
		if (!conversation) return;
		state.currentPrompt = state.draft.content;
		conversation.session.setDraft(state.draft);
		await conversation.session.persistDraft();
	}
	requestOptions(state) {
		return {
			outputFormat: state.outputFormat,
			language: state.selectedLanguage,
			recognitionFormat: state.recognitionFormat,
			processingFormat: state.processingFormat
		};
	}
	async conversationInstruction(state) {
		const base = state.selectedTemplate.trim() || "Answer the newest user message using its attached content as context.";
		let instruction = this.templates.resolveInstruction(state.selectedInstruction);
		if (!instruction && !state.selectedInstruction) instruction = await this.templates.getActiveInstruction();
		return this.templates.buildPromptWithInstruction(base, instruction);
	}
	syncConversationState(state) {
		const conversation = this.conversation;
		if (!conversation) return;
		const snapshot = conversation.session.snapshot();
		state.messages = snapshot.messages;
		state.draft = snapshot.draft;
		state.currentPrompt = snapshot.draft.content;
		state.sessionEpoch = snapshot.epoch;
		conversation.syncFromSession();
	}
	async executeConversationTurn(state) {
		const conversation = this.conversation;
		if (!conversation) return;
		try {
			if (this.activeTurns.size > 0) {
				this.deps.showMessage("Wait for the current response before sending another message");
				return;
			}
			if (!state.draft.content.trim() && state.draft.attachments.length === 0) {
				this.deps.showMessage("Enter a prompt or attach a file first");
				return;
			}
			conversation.session.setDraft(state.draft);
			const submitted = conversation.session.commitDraft(this.requestOptions(state));
			state.files = [];
			this.syncConversationState(state);
			conversation.session.persistDraft().catch(() => {
				this.deps.showMessage("Unable to save this chat locally");
			});
			const controller = new AbortController();
			this.activeTurns.set(submitted.assistant.id, controller);
			await this.runConversationTurn(state, submitted.user, submitted.assistant, controller);
		} catch (error) {
			this.deps.showMessage(error instanceof Error ? error.message : "Unable to send the message");
		}
	}
	async retryConversationTurn(state, assistantId) {
		const conversation = this.conversation;
		if (!conversation || this.activeTurns.size > 0) return;
		try {
			const retry = await conversation.session.retry(assistantId);
			this.syncConversationState(state);
			const controller = new AbortController();
			this.activeTurns.set(retry.assistant.id, controller);
			await this.runConversationTurn(state, retry.user, retry.assistant, controller);
		} catch (error) {
			this.deps.showMessage(error instanceof Error ? error.message : "Unable to retry this message");
		}
	}
	async cancelConversationTurn(state, assistantId) {
		const conversation = this.conversation;
		if (!conversation) return;
		this.activeTurns.get(assistantId)?.abort();
		this.activeTurns.delete(assistantId);
		await conversation.session.cancel(assistantId);
		this.syncConversationState(state);
	}
	async startNewConversation(state) {
		const conversation = this.conversation;
		if (!conversation) return;
		for (const controller of this.activeTurns.values()) controller.abort();
		this.activeTurns.clear();
		conversation.attachments.revokeAllPreviews();
		await conversation.session.newChat();
		state.files = [];
		this.syncConversationState(state);
	}
	async runConversationTurn(state, user, assistant, controller) {
		const conversation = this.conversation;
		if (!conversation) return;
		const epoch = conversation.session.epoch();
		try {
			const prepared = [];
			for (const ref of user.attachments) {
				const file = await conversation.attachments.resolve(ref);
				if (!file) {
					await conversation.session.markAttachmentError(user.id, ref.hash, "Attachment data is unavailable");
					prepared.push({
						attachmentId: ref.hash,
						original: new File([], ref.name, { type: ref.type }),
						kind: "unknown",
						images: [],
						error: "Attachment data is unavailable"
					});
					continue;
				}
				const preparedAttachment = await conversation.documentPreparer.prepare(file);
				if (preparedAttachment.error) await conversation.session.markAttachmentError(user.id, ref.hash, preparedAttachment.error);
				prepared.push({
					attachmentId: ref.hash,
					...preparedAttachment
				});
			}
			const result = await runWorkCenterTurn({
				messages: conversation.session.snapshot().messages.filter((message) => message.status === "complete").map((message) => ({
					role: message.role,
					content: message.content
				})),
				attachments: prepared,
				instruction: await this.conversationInstruction(state),
				options: {
					outputFormat: state.processingFormat,
					outputLanguage: state.selectedLanguage,
					processingEffort: "medium",
					processingVerbosity: "medium"
				},
				signal: controller.signal
			});
			if (epoch !== conversation.session.epoch()) return;
			if (controller.signal.aborted || result.error === "Cancelled") await conversation.session.cancel(assistant.id);
			else if (result.ok) {
				const content = String(result.data || "");
				await conversation.session.completeAssistant(assistant.id, {
					status: "complete",
					content,
					rawResult: result
				});
				state.lastRawResult = result;
				state.recognizedData = {
					content,
					timestamp: Date.now(),
					source: user.attachments.length ? "files" : "text",
					recognizedAs: "markdown",
					responseId: result.responseId || void 0
				};
			} else await conversation.session.completeAssistant(assistant.id, {
				status: "failed",
				content: "",
				error: result.error || "The request did not return a response"
			});
		} catch (error) {
			if (epoch === conversation.session.epoch()) await conversation.session.completeAssistant(assistant.id, {
				status: controller.signal.aborted ? "cancelled" : "failed",
				content: "",
				error: controller.signal.aborted ? "Cancelled" : error instanceof Error ? error.message : "Failed to process message"
			});
		} finally {
			if (this.activeTurns.get(assistant.id) === controller) this.activeTurns.delete(assistant.id);
			if (epoch === conversation.session.epoch()) {
				this.syncConversationState(state);
				this.history.updateRecentHistory(state);
				this.ui.updateDataPipeline(state);
			}
		}
	}
	getLastSuccessfulPrompt() {
		return this.history.getLastSuccessfulPrompt();
	}
	generateSessionId() {
		return `wc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
	}
	async copyResults(state) {
		if (!state.lastRawResult) return;
		try {
			await this.dataProcessing.copyResultsToClipboard(state.lastRawResult, state.outputFormat);
			this.deps.showMessage("Results copied to clipboard");
		} catch (error) {
			console.error("Failed to copy results:", error);
			this.deps.showMessage("Failed to copy results");
		}
	}
	async copyConversationTurn(state, turnId) {
		const message = state.messages.find((candidate) => candidate.id === turnId && candidate.role === "assistant");
		if (!message) return;
		try {
			await this.dataProcessing.copyResultsToClipboard(message.rawResult ?? { content: message.content }, state.outputFormat);
			this.deps.showMessage("Response copied to clipboard");
		} catch {
			this.deps.showMessage("Failed to copy response");
		}
	}
	async viewResultsInViewer(state) {
		if (!state.lastRawResult) {
			this.deps.showMessage("No results to view");
			return;
		}
		try {
			const { unifiedMessaging } = await __vitePreload(async () => {
				const { unifiedMessaging } = await import("../shells/boot-index.js").then((n) => n.Kn);
				return { unifiedMessaging };
			}, __vite__mapDeps([4,1,5,6,7,8,9]), import.meta.url);
			let resultContent = typeof state.lastRawResult === "string" ? state.lastRawResult : JSON.stringify(state.lastRawResult, null, 2);
			try {
				resultContent = JSON.parse(resultContent)?.data || resultContent;
			} catch (error) {}
			const filename = `workcenter-output-${Date.now()}.${state.outputFormat === "markdown" ? "md" : state.outputFormat === "json" ? "json" : state.outputFormat === "html" ? "html" : state.outputFormat === "code" ? "ts" : "txt"}`;
			if (shouldHandoffViewToSibling("viewer")) {
				stashSkuHandoff({
					dest: "viewer",
					content: String(resultContent || ""),
					filename
				});
				await this.navigateToViewer();
				return;
			}
			await unifiedMessaging.sendMessage({
				id: crypto.randomUUID(),
				type: "content-view",
				source: "workcenter",
				destination: "viewer",
				contentType: state.outputFormat === "markdown" ? "markdown" : "text",
				data: {
					text: resultContent,
					filename
				},
				metadata: {
					title: "Work Center Output",
					timestamp: Date.now(),
					source: "workcenter",
					format: state.outputFormat
				}
			});
			await this.navigateToViewer();
		} catch (error) {
			console.error("Failed to open output in viewer:", error);
			this.deps.showMessage("Failed to open output in viewer");
		}
	}
	async navigateToViewer() {
		if (this.deps.navigate) {
			await this.deps.navigate("viewer");
			return;
		}
		if (this.deps?.state) {
			this.deps.state.view = "markdown-viewer";
			this.deps.render?.();
		}
	}
	clearResults(state) {
		state.lastRawResult = null;
		this.results.clearResults();
	}
	async saveResultsToExplorer(state) {
		if (!state.lastRawResult) {
			this.deps.showMessage("No results to save");
			return;
		}
		try {
			const { unifiedMessaging } = await __vitePreload(async () => {
				const { unifiedMessaging } = await import("../shells/boot-index.js").then((n) => n.Kn);
				return { unifiedMessaging };
			}, __vite__mapDeps([4,1,5,6,7,8,9]), import.meta.url);
			const resultContent = typeof state.lastRawResult === "string" ? state.lastRawResult : JSON.stringify(state.lastRawResult, null, 2);
			await unifiedMessaging.sendMessage({
				id: crypto.randomUUID(),
				type: "content-save",
				source: "workcenter",
				destination: "explorer",
				data: {
					action: "save",
					text: resultContent,
					filename: `workcenter-result-${Date.now()}.${state.outputFormat === "json" ? "json" : state.outputFormat === "html" ? "html" : state.outputFormat === "code" ? "ts" : "txt"}`,
					path: "/workcenter-results/"
				},
				metadata: {
					title: "Work Center Result",
					timestamp: Date.now(),
					source: "workcenter",
					format: state.outputFormat
				}
			});
			this.deps.showMessage("Results saved to Explorer");
		} catch (error) {
			console.error("Failed to save results to explorer:", error);
			this.deps.showMessage("Failed to save results to Explorer");
		}
	}
};
//#endregion
//#region ../../modules/views/workcenter-view/src/ts/WorkCenterDataProcessing.ts
var WorkCenterDataProcessing = class {
	formatResult(result, format, outputFormat) {
		if (format === "auto") {
			const rawData = result?.rawData || result;
			let data = extractJSONFromAIResponse(rawData)?.data || rawData;
			if (typeof data === "string") try {
				const parsed = JSON.parse(data);
				if (parsed && typeof parsed === "object") data = parsed;
			} catch {}
			if (data && typeof data === "object" && (data.recognized_data || data.verbose_data || data.keywords_and_tags || data.suggested_type)) {
				const content = [];
				if (data.recognized_data) {
					const recognized = Array.isArray(data.recognized_data) ? data.recognized_data : [data.recognized_data];
					content.push(...recognized.map((item) => String(item)));
				}
				if (data.verbose_data) content.push(String(data.verbose_data));
				if (data.keywords_and_tags && Array.isArray(data.keywords_and_tags) && data.keywords_and_tags.length > 0) content.push(`\n**Keywords:** ${data.keywords_and_tags.join(", ")}`);
				if (data.confidence || data.suggested_type) {
					const info = [];
					if (data.confidence) info.push(`Confidence: ${Math.round(data.confidence * 100)}%`);
					if (data.suggested_type) info.push(`Type: ${data.suggested_type}`);
					if (info.length > 0) content.push(`\n*${info.join(" • ")}*`);
				}
				if (content.length > 0) return `<div class="markdown-result structured-content">${content.join("\n\n")}</div>`;
			}
			if (data && typeof data === "object") return this.formatResult(result, "json");
			return this.formatResult(result, "markdown");
		}
		if (format === "json") {
			const rawData = result?.rawData || result;
			let data = extractJSONFromAIResponse(rawData)?.data || rawData;
			if (typeof data === "string") try {
				const parsed = JSON.parse(data);
				if (parsed && typeof parsed === "object") data = parsed;
			} catch {}
			return this.renderAsJSON(data);
		}
		if (format === "markdown") {
			const rawData = result?.rawData || result;
			let data = extractJSONFromAIResponse(rawData)?.data || rawData;
			if (typeof data === "string") try {
				const parsed = JSON.parse(data);
				if (parsed && typeof parsed === "object") data = parsed;
			} catch {}
			if (data && typeof data === "object" && (data.recognized_data || data.verbose_data || data.keywords_and_tags || data.suggested_type)) {
				const content = [];
				if (data.recognized_data) {
					const recognized = Array.isArray(data.recognized_data) ? data.recognized_data : [data.recognized_data];
					content.push(...recognized.map((item) => String(item)));
				}
				if (data.verbose_data) content.push(String(data.verbose_data));
				if (data.keywords_and_tags && Array.isArray(data.keywords_and_tags) && data.keywords_and_tags.length > 0) content.push(`\n**Keywords:** ${data.keywords_and_tags.join(", ")}`);
				if (data.confidence || data.suggested_type) {
					const info = [];
					if (data.confidence) info.push(`Confidence: ${Math.round(data.confidence * 100)}%`);
					if (data.suggested_type) info.push(`Type: ${data.suggested_type}`);
					if (info.length > 0) content.push(`\n*${info.join(" • ")}*`);
				}
				if (content.length > 0) return `<div class="markdown-result structured-content">${content.join("\n\n")}</div>`;
			}
		}
		const normalizedData = this.normalizeResultData(result);
		if (!normalizedData) return "<div class=\"no-result\">No result</div>";
		switch (format) {
			case "code": return this.renderAsCode(normalizedData);
			case "raw": return this.renderAsRaw(result?.rawData || result);
			case "html": return this.renderAsHTML(normalizedData);
			case "text": return this.renderAsText(normalizedData);
			default: return this.renderAsMarkdown(normalizedData);
		}
	}
	normalizeResultData(result) {
		if (!result) return null;
		let data = extractJSONFromAIResponse(result)?.data || result;
		if (data && typeof data === "object") {
			if (data.data !== void 0) data = data.data;
			if (typeof data === "string") try {
				const parsed = JSON.parse(data);
				if (parsed && typeof parsed === "object") data = parsed;
			} catch {}
		}
		if (typeof data !== "object" || data === null) data = { recognized_data: [String(data)] };
		return data;
	}
	renderAsJSON(data) {
		try {
			const createFormattedJSON = (obj, indent = 0) => {
				const spaces = "  ".repeat(indent);
				if (obj === null) return "null";
				if (typeof obj === "boolean") return obj ? "true" : "false";
				if (typeof obj === "number") return String(obj);
				if (typeof obj === "string") {
					if (obj.includes("<math") || obj.includes("class=\"katex\"") || obj.includes("<span>")) {
						const placeholder = `__HTML_CONTENT_${Math.random().toString(36).substr(2, 9)}__`;
						htmlPlaceholders[placeholder] = obj;
						return `"${placeholder}"`;
					}
					return JSON.stringify(obj);
				}
				if (Array.isArray(obj)) {
					if (obj.length === 0) return "[]";
					const items = obj.map((item) => createFormattedJSON(item, indent + 1));
					return `[\n${"  ".repeat(indent + 1)}${items.join(`,\n${"  ".repeat(indent + 1)}`)}\n${spaces}]`;
				}
				if (typeof obj === "object") {
					const keys = Object.keys(obj);
					if (keys.length === 0) return "{}";
					const items = keys.map((key) => {
						const formattedValue = createFormattedJSON(obj[key], indent + 1);
						return `${JSON.stringify(key)}: ${formattedValue}`;
					});
					return `{\n${"  ".repeat(indent + 1)}${items.join(`,\n${"  ".repeat(indent + 1)}`)}\n${spaces}}`;
				}
				return String(obj);
			};
			const htmlPlaceholders = {};
			let finalHTML = `<div class="json-result"><pre>${createFormattedJSON(data)}</pre></div>`;
			for (const [placeholder, htmlContent] of Object.entries(htmlPlaceholders)) {
				const tempDiv = document.createElement("div");
				tempDiv.innerHTML = htmlContent;
				const renderedHTML = tempDiv.innerHTML;
				finalHTML = finalHTML.replace(`"${placeholder}"`, `<span class="json-html-content">${renderedHTML}</span>`);
			}
			return finalHTML;
		} catch (error) {
			return `<div class="error">Failed to format JSON: ${error}</div>`;
		}
	}
	renderAsHTML(data) {
		const renderedContent = this.extractContentItems(data).map((item) => this.renderContentItem(item, "html")).join("");
		if (!renderedContent) return `<div class="html-result">${this.renderMathAsHTML(this.extractTextContent(data))}</div>`;
		return `<div class="html-result">${renderedContent}</div>`;
	}
	renderAsText(data) {
		const renderedContent = this.extractContentItems(data).map((item) => this.renderContentItem(item, "text")).join("\n\n");
		if (!renderedContent.trim()) return `<pre class="text-result">${this.escapeHtml(this.extractTextContent(data))}</pre>`;
		return `<pre class="text-result">${this.escapeHtml(renderedContent)}</pre>`;
	}
	renderAsRaw(data) {
		let rawText = "";
		if (typeof data === "string") rawText = data;
		else try {
			rawText = JSON.stringify(data, null, 2);
		} catch {
			rawText = String(data ?? "");
		}
		return `<pre class="raw-result">${this.escapeHtml(rawText)}</pre>`;
	}
	renderAsCode(data) {
		const content = this.extractContentItems(data).join("\n\n").trim() || this.extractTextContent(data);
		const code = this.extractLikelyCode(content);
		const language = this.detectCodeLanguage(content);
		return `<pre class="code-result"><code data-lang="${this.escapeHtml(language)}">${this.escapeHtml(code)}</code></pre>`;
	}
	renderAsMarkdown(data) {
		const renderedContent = this.extractContentItems(data).map((item) => this.renderContentItem(item, "markdown")).join("\n\n");
		if (!renderedContent.trim()) try {
			const textContent = this.extractTextContent(data);
			const html = f.parse(textContent);
			return purify.sanitize(html);
		} catch (error) {
			console.warn("Markdown parsing failed, falling back to simple rendering:", error);
			return this.renderMathAsHTML(renderedContent);
		}
		try {
			const html = f.parse(renderedContent);
			return purify.sanitize(html);
		} catch (error) {
			console.warn("Markdown parsing failed, falling back to simple rendering:", error);
			return this.renderMathAsHTML(renderedContent);
		}
	}
	extractContentItems(data) {
		const items = [];
		if (data.recognized_data) {
			const recognized = Array.isArray(data.recognized_data) ? data.recognized_data : [data.recognized_data];
			items.push(...recognized.map((item) => String(item)));
		}
		if (data.verbose_data) items.push(String(data.verbose_data));
		if (items.length === 0) {
			for (const field of [
				"content",
				"text",
				"message",
				"result",
				"response",
				"description"
			]) if (data[field]) {
				const content = Array.isArray(data[field]) ? data[field] : [data[field]];
				items.push(...content.map((item) => String(item)));
				break;
			}
		}
		if (items.length === 0) {
			const textContent = this.extractTextContent(data);
			if (textContent) items.push(textContent);
		}
		return items;
	}
	renderContentItem(item, format) {
		switch (format) {
			case "html": return `<div class="recognized-item">${this.renderMathAsHTML(item)}</div>`;
			case "text": return this.stripMarkdown(item);
			case "markdown": return item;
			default: return item;
		}
	}
	renderMathAsHTML(content) {
		let result = content;
		result = result.replace(/\$\$([^$]+)\$\$/g, (match, math) => {
			try {
				return f.parse(`$$${math}$$`).replace(/<p>|<\/p>/g, "").trim();
			} catch {
				return `<span class="math-display">${this.escapeHtml(`$$${math}$$`)}</span>`;
			}
		});
		result = result.replace(/\$([^$]+)\$/g, (match, math) => {
			try {
				return f.parse(`$${math}$`).replace(/<p>|<\/p>/g, "").trim();
			} catch {
				return `<span class="math-inline">${this.escapeHtml(`$${math}$`)}</span>`;
			}
		});
		result = result.replace(/\n/g, "<br>");
		return result;
	}
	stripMarkdown(content) {
		return content.replace(/#{1,6}\s*/g, "").replace(/\*\*(.*?)\*\*/g, "$1").replace(/\*(.*?)\*/g, "$1").replace(/`(.*?)`/g, "$1").replace(/^\s*[-*+]\s+/gm, "").replace(/^\s*\d+\.\s+/gm, "").replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1").replace(/!\[([^\]]+)\]\([^\)]+\)/g, "$1").trim();
	}
	extractLikelyCode(content) {
		const fenced = content.match(/```[\t ]*([a-zA-Z0-9_-]+)?\n([\s\S]*?)```/);
		if (fenced?.[2]) return fenced[2].trim();
		return content;
	}
	detectCodeLanguage(content) {
		const fencedLanguage = content.match(/```[\t ]*([a-zA-Z0-9_-]+)?\n/)?.[1];
		if (fencedLanguage) return fencedLanguage.toLowerCase();
		if (/\b(interface|type|const|let|=>|import\s+type)\b/.test(content)) return "typescript";
		if (/\b(function|const|let|var|import|export)\b/.test(content)) return "javascript";
		if (/\b(def |import |from |class )/.test(content)) return "python";
		if (/\b<[^>]+>/.test(content)) return "html";
		return "text";
	}
	extractTextContent(data) {
		if (data == null) return "";
		if (typeof data === "string") return data;
		if (typeof data === "number" || typeof data === "boolean") return String(data);
		if (Array.isArray(data)) return data.map((item) => this.extractTextContent(item)).join("\n");
		if (typeof data === "object") {
			for (const field of [
				"verbose_data",
				"recognized_data",
				"content",
				"text",
				"message",
				"result",
				"response",
				"data"
			]) if (data[field] != null) {
				const content = this.extractTextContent(data[field]);
				if (content) return content;
			}
			try {
				return JSON.stringify(data, null, 2);
			} catch {
				return "[Complex Object]";
			}
		}
		return String(data);
	}
	escapeHtml(text) {
		const div = document.createElement("div");
		div.textContent = text;
		return div.innerHTML;
	}
	copyResultsToClipboard(result, format) {
		let textToCopy = "";
		if (format === "auto" && result) {
			const rawData = result?.rawData || result;
			let data = extractJSONFromAIResponse(rawData)?.data || rawData;
			if (typeof data === "string") try {
				const parsed = JSON.parse(data);
				if (parsed && typeof parsed === "object") data = parsed;
			} catch {}
			if (data && typeof data === "object" && (data.recognized_data || data.verbose_data)) {
				const contentItems = [];
				if (data.recognized_data) {
					const recognized = Array.isArray(data.recognized_data) ? data.recognized_data : [data.recognized_data];
					contentItems.push(...recognized.map((item) => String(item)));
				}
				if (data.verbose_data) contentItems.push(String(data.verbose_data));
				textToCopy = contentItems.join("\n\n");
			} else {
				const normalizedData = this.normalizeResultData(result);
				textToCopy = this.extractContentItems(normalizedData).join("\n\n");
			}
		} else if ((format === "markdown" || format === "html") && result) {
			const normalizedData = this.normalizeResultData(result);
			textToCopy = this.extractContentItems(normalizedData).join("\n\n");
		} else if (format === "json" && result) {
			const normalizedData = this.normalizeResultData(result);
			textToCopy = this.extractContentItems(normalizedData).join("\n\n");
		} else if ((format === "raw" || format === "code") && result) {
			const rawData = result?.rawData || result;
			textToCopy = typeof rawData === "string" ? rawData : JSON.stringify(rawData, null, 2);
		} else textToCopy = result?.textContent || "";
		return writeText(textToCopy).then((result) => {
			if (!result.ok) throw new Error(result.error || "Clipboard write failed");
		});
	}
};
//#endregion
//#region ../../modules/views/workcenter-view/src/ts/WorkCenterAttachmentViewer.ts
var TEXT_TYPES = /* @__PURE__ */ new Set([
	"application/json",
	"application/xml",
	"application/javascript",
	"application/typescript",
	"application/x-javascript",
	"text/uri-list",
	"text/markdown"
]);
var isTextAttachment = (file, type) => {
	if (type.startsWith("text/")) return true;
	if (TEXT_TYPES.has(type)) return true;
	return /\.(txt|md|json|csv|xml|svg|ts|js|mjs|css|scss|html|yml|yaml)$/i.test(file.name);
};
var closeExistingViewer = (host) => {
	host.querySelector("[data-workcenter-attachment-viewer]")?.remove();
};
/** Download the stored blob, or open a remote URL when there is no local file. */
var downloadWorkCenterAttachment = (options) => {
	const href = options.objectUrl || options.remoteUrl;
	if (!href) return;
	const link = document.createElement("a");
	link.href = href;
	if (options.objectUrl) link.download = options.name;
	else link.target = "_blank";
	link.rel = "noreferrer";
	link.click();
};
/** Show the attachment in a modal, a new tab, or as readable text. */
var openWorkCenterAttachment = async (options) => {
	const { host, attachment, file, objectUrl } = options;
	if (attachment.url) {
		window.open(attachment.url, "_blank", "noopener,noreferrer");
		return;
	}
	if (!file && !objectUrl) return;
	closeExistingViewer(host);
	const type = (file?.type || attachment.type || "").toLowerCase();
	const dialog = document.createElement("dialog");
	dialog.className = "wc-attachment-viewer";
	dialog.dataset.workcenterAttachmentViewer = "";
	dialog.setAttribute("aria-label", attachment.name);
	const header = document.createElement("header");
	header.className = "wc-attachment-viewer__header";
	const title = document.createElement("h3");
	title.textContent = attachment.name;
	const close = document.createElement("button");
	close.type = "button";
	close.className = "wc-icon-button";
	close.setAttribute("aria-label", "Close attachment");
	close.dataset.action = "close-attachment-viewer";
	close.textContent = "×";
	header.append(title, close);
	dialog.append(header);
	const body = document.createElement("div");
	body.className = "wc-attachment-viewer__body";
	if (type.startsWith("image/") && objectUrl) {
		const image = document.createElement("img");
		image.className = "wc-attachment-viewer__frame";
		image.src = objectUrl;
		image.alt = attachment.name;
		body.append(image);
	} else if (file && isTextAttachment(file, type)) {
		const pre = document.createElement("pre");
		pre.className = "wc-attachment-viewer__text";
		pre.textContent = await file.text();
		body.append(pre);
	} else if (objectUrl) {
		const frame = document.createElement("iframe");
		frame.className = "wc-attachment-viewer__frame";
		frame.src = objectUrl;
		frame.title = attachment.name;
		body.append(frame);
	}
	dialog.append(body);
	dialog.addEventListener("close", () => dialog.remove());
	dialog.addEventListener("click", (event) => {
		if (event.target === dialog) dialog.close();
	});
	close.addEventListener("click", () => dialog.close());
	host.append(dialog);
	if (typeof dialog.showModal === "function") dialog.showModal();
	else dialog.setAttribute("open", "");
};
//#endregion
//#region ../../modules/views/workcenter-view/src/ts/WorkCenterEvents.ts
var isHttpUrl = (value) => {
	try {
		const url = new URL(value);
		return url.protocol === "http:" || url.protocol === "https:";
	} catch {
		return false;
	}
};
/** Binds the chat composer once per rendered Work Center root. */
var WorkCenterEvents = class {
	deps;
	actions;
	templates;
	voice;
	history;
	ingress;
	state;
	container = null;
	draftPersistTimer = null;
	constructor(deps, actions, templates, voice, history, ingress, state) {
		this.deps = deps;
		this.actions = actions;
		this.templates = templates;
		this.voice = voice;
		this.history = history;
		this.ingress = ingress;
		this.state = state;
	}
	setContainer(container) {
		this.container = container;
	}
	setupWorkCenterEvents() {
		this.bindLiveChats();
	}
	/** Bind Send/Enter/drop on every mounted chat, including a visible clone GLit left behind. */
	bindLiveChats() {
		for (const root of this.liveRoots()) this.bindRoot(root);
	}
	liveRoots() {
		const roots = /* @__PURE__ */ new Set();
		if (this.container) roots.add(this.container);
		if (typeof document !== "undefined") document.querySelectorAll(".workcenter-chat").forEach((node) => {
			if (node.isConnected || node === this.container) roots.add(node);
		});
		return [...roots];
	}
	bindRoot(root) {
		if (root.dataset.wcEventsBound === "1") return;
		root.dataset.wcEventsBound = "1";
		this.setupFilePicker(root);
		this.setupComposerInput(root);
		this.setupComposerResize(root);
		this.setupClipboardIngress(root);
		this.setupDropIngress(root);
		this.setupRequestOptions(root);
		this.setupVoiceInput(root);
		this.setupActions(root);
		syncWorkCenterComposerHeight(root);
	}
	sendComposer(root) {
		this.syncDraftFromComposer(root);
		this.actions.executeUnifiedAction(this.state);
	}
	syncDraftFromComposer(preferred) {
		const roots = preferred ? [preferred, ...this.liveRoots()] : this.liveRoots();
		for (const root of roots) {
			const input = root.querySelector(".prompt-input");
			if (!input) continue;
			if (!root.isConnected && root !== preferred && root !== this.container) continue;
			this.state.draft.content = input.value;
			this.state.currentPrompt = input.value;
			if (root.isConnected) break;
		}
	}
	setupFilePicker(root = this.container) {
		if (!root) return;
		let input = root.querySelector("[data-workcenter-file-picker]");
		if (!input) {
			input = document.createElement("input");
			input.type = "file";
			input.multiple = true;
			input.className = "wc-file-picker";
			input.dataset.workcenterFilePicker = "";
			root.append(input);
		}
		input.addEventListener("change", () => {
			const files = Array.from(input.files || []);
			input.value = "";
			if (!files.length) return;
			this.attachFiles(files);
		});
	}
	setupComposerInput(root) {
		const input = root.querySelector(".prompt-input");
		const composer = root.querySelector("[data-workcenter-composer]");
		if (!input || !composer) return;
		input.addEventListener("input", () => {
			this.state.draft.content = input.value;
			this.state.currentPrompt = input.value;
			syncWorkCenterComposerHeight(root);
			this.scheduleDraftPersistence();
		});
		input.addEventListener("keydown", (event) => {
			if (event.key === "Enter" && !event.shiftKey && !event.isComposing) {
				event.preventDefault();
				this.sendComposer(root);
			}
		});
		composer.addEventListener("submit", (event) => {
			event.preventDefault();
			this.sendComposer(root);
		});
	}
	setupClipboardIngress(root) {
		root.addEventListener("paste", (event) => {
			const data = event.clipboardData;
			if (!data) return;
			const target = event.target;
			const editable = this.isEditableTarget(target);
			const candidates = collectAttachmentCandidates(data, "paste");
			const files = candidates.filter((candidate) => candidate.kind === "file").map((candidate) => candidate.file);
			const urls = candidates.filter((candidate) => candidate.kind === "url").map((candidate) => candidate.url);
			if (files.length) {
				event.preventDefault();
				this.attachFiles(files);
				return;
			}
			if (!editable && urls.length) {
				event.preventDefault();
				Promise.all(urls.map((url) => this.attachUrl(url)));
				return;
			}
			if (editable) return;
			const text = data.getData("text/plain").trim();
			if (text) {
				event.preventDefault();
				this.appendDraftText(text);
			}
		});
	}
	setupDropIngress(root) {
		const composer = root.querySelector("[data-workcenter-composer]");
		const accept = (event) => {
			event.preventDefault();
			if (event.dataTransfer) event.dataTransfer.dropEffect = "copy";
			composer?.classList.add("is-dragging");
		};
		root.addEventListener("dragover", accept);
		root.addEventListener("dragenter", accept);
		root.addEventListener("dragleave", (event) => {
			if (event.relatedTarget instanceof Node && root.contains(event.relatedTarget)) return;
			composer?.classList.remove("is-dragging");
		});
		root.addEventListener("drop", (event) => {
			event.preventDefault();
			event.stopPropagation();
			composer?.classList.remove("is-dragging");
			const data = event.dataTransfer;
			if (!data) return;
			const candidates = collectAttachmentCandidates(data, "drop");
			const files = candidates.filter((candidate) => candidate.kind === "file").map((candidate) => candidate.file);
			const urls = candidates.filter((candidate) => candidate.kind === "url").map((candidate) => candidate.url);
			if (files.length) this.attachFiles(files);
			if (urls.length) Promise.all(urls.map((url) => this.attachUrl(url)));
			if (files.length || urls.length) return;
			const text = data.getData("text/plain").trim();
			if (!text) return;
			if (isHttpUrl(text)) {
				this.attachUrl(text);
				return;
			}
			this.appendDraftText(text);
		});
	}
	setupRequestOptions(root) {
		for (const [selector, property] of [
			[".format-select", "outputFormat"],
			[".language-select", "selectedLanguage"],
			[".recognition-select", "recognitionFormat"],
			[".processing-select", "processingFormat"]
		]) {
			const select = root.querySelector(selector);
			select?.addEventListener("change", () => {
				this.state[property] = select.value;
				WorkCenterStateManager.saveState(this.state);
			});
		}
		const template = root.querySelector(".template-select");
		template?.addEventListener("change", () => {
			this.state.selectedTemplate = template.value;
			if (template.value) {
				this.state.draft.content = template.value;
				this.state.currentPrompt = template.value;
			}
			WorkCenterStateManager.saveState(this.state);
			this.actions.persistDraft(this.state);
			this.deps.render?.();
		});
		const instruction = root.querySelector(".instruction-select");
		instruction?.addEventListener("change", () => {
			this.templates.applyInstruction(this.state, instruction.value);
			WorkCenterStateManager.saveState(this.state);
		});
	}
	setupVoiceInput(root) {
		const voice = root.querySelector("[data-action=\"voice-input\"]");
		if (!voice) return;
		voice.addEventListener("mousedown", () => this.voice.startVoiceRecording(this.state));
		const stop = () => this.voice.stopVoiceRecording(this.state);
		voice.addEventListener("mouseup", stop);
		voice.addEventListener("mouseleave", stop);
	}
	setupActions(root) {
		root.addEventListener("click", (event) => {
			const actionElement = event.target.closest("[data-action]");
			const action = actionElement?.dataset.action;
			if (!action || !actionElement) return;
			switch (action) {
				case "execute":
					event.preventDefault();
					this.sendComposer(root);
					break;
				case "select-files": break;
				case "new-chat":
					this.actions.startNewConversation(this.state);
					break;
				case "cancel-turn":
					this.actions.cancelConversationTurn(this.state, actionElement.dataset.turnId || "");
					break;
				case "retry-turn":
					this.actions.retryConversationTurn(this.state, actionElement.dataset.turnId || "");
					break;
				case "copy-turn":
					this.actions.copyConversationTurn(this.state, actionElement.dataset.turnId || "");
					break;
				case "view-attachment":
					event.preventDefault();
					this.viewAttachment(actionElement.dataset.attachmentHash || "");
					break;
				case "download-attachment":
					event.preventDefault();
					event.stopPropagation();
					this.downloadAttachment(actionElement.dataset.attachmentHash || "");
					break;
				case "remove-draft-attachment":
					event.preventDefault();
					event.stopPropagation();
					this.ingress.remove(actionElement.dataset.attachmentHash || "");
					break;
				case "close-attachment-viewer": {
					const viewer = root.querySelector("[data-workcenter-attachment-viewer]");
					if (typeof HTMLDialogElement !== "undefined" && viewer instanceof HTMLDialogElement && typeof viewer.close === "function") viewer.close();
					else viewer?.remove();
					break;
				}
				case "open-request-options":
					this.togglePanel("[data-workcenter-request-options]", actionElement);
					this.templates.fillInstructionSelects(root, this.state);
					break;
				case "refresh-instructions":
					this.templates.fillInstructionSelects(root, this.state);
					break;
				case "open-secondary":
					this.togglePanel("[data-workcenter-secondary]", actionElement);
					break;
				case "view-action-history":
					this.history.showActionHistory();
					break;
				case "edit-templates": this.templates.showTemplateEditor(this.state, root);
			}
		});
	}
	async attachFiles(files) {
		if (!(await this.ingress.addFiles(files)).length) this.deps.showMessage?.("Could not attach that file");
	}
	async attachUrl(url) {
		await this.ingress.addUrl(url);
	}
	setupComposerResize(root) {
		const handle = root.querySelector("[data-composer-resize]");
		const composer = root.querySelector("[data-workcenter-composer]");
		if (!handle || !composer) return;
		handle.addEventListener("pointerdown", (event) => {
			if (event.button !== 0) return;
			event.preventDefault();
			handle.setPointerCapture?.(event.pointerId);
			const startY = event.clientY;
			const startHeight = composer.getBoundingClientRect().height;
			const hostHeight = root.getBoundingClientRect().height || startHeight;
			const limit = Math.max(96, hostHeight * .75);
			const onMove = (move) => {
				const next = Math.min(limit, Math.max(72, startHeight + (startY - move.clientY)));
				composer.style.setProperty("--wc-composer-min", `${next}px`);
				syncWorkCenterComposerHeight(root);
			};
			const onUp = () => {
				handle.removeEventListener("pointermove", onMove);
				handle.removeEventListener("pointerup", onUp);
				handle.removeEventListener("pointercancel", onUp);
			};
			handle.addEventListener("pointermove", onMove);
			handle.addEventListener("pointerup", onUp);
			handle.addEventListener("pointercancel", onUp);
		});
	}
	findAttachment(hash) {
		if (!hash) return null;
		const draft = this.state.draft.attachments.find((attachment) => attachment.hash === hash);
		if (draft) return draft;
		for (const message of this.state.messages) {
			const found = message.attachments.find((attachment) => attachment.hash === hash);
			if (found) return found;
		}
		return null;
	}
	async viewAttachment(hash) {
		const attachment = this.findAttachment(hash);
		const host = this.liveRoots().find((node) => node.isConnected) ?? this.container;
		if (!attachment || !host) return;
		const file = attachment.url ? this.ingress.fileFor(attachment) : await this.ingress.resolve(attachment);
		if (!file && !attachment.url) {
			this.deps.showMessage?.("Attachment is no longer available");
			return;
		}
		await openWorkCenterAttachment({
			host,
			attachment,
			file,
			objectUrl: file ? this.ingress.objectUrlFor(file) : null
		});
	}
	async downloadAttachment(hash) {
		const attachment = this.findAttachment(hash);
		if (!attachment) return;
		if (attachment.url && !this.ingress.fileFor(attachment)) {
			downloadWorkCenterAttachment({
				name: attachment.name,
				remoteUrl: attachment.url,
				objectUrl: null
			});
			return;
		}
		const file = await this.ingress.resolve(attachment);
		if (!file) {
			this.deps.showMessage?.("Attachment is no longer available");
			return;
		}
		downloadWorkCenterAttachment({
			name: attachment.name,
			remoteUrl: attachment.url,
			objectUrl: this.ingress.objectUrlFor(file)
		});
	}
	appendDraftText(text) {
		const next = [this.state.draft.content, text].filter(Boolean).join(this.state.draft.content ? "\n" : "");
		this.state.draft.content = next;
		this.state.currentPrompt = next;
		this.actions.persistDraft(this.state);
		for (const root of this.liveRoots()) {
			const input = root.querySelector(".prompt-input");
			if (input) input.value = next;
		}
	}
	scheduleDraftPersistence() {
		if (this.draftPersistTimer) clearTimeout(this.draftPersistTimer);
		this.draftPersistTimer = setTimeout(() => {
			this.draftPersistTimer = null;
			this.actions.persistDraft(this.state);
		}, 180);
	}
	togglePanel(selector, trigger) {
		const panel = (trigger.closest(".workcenter-chat") ?? this.container)?.querySelector(selector);
		if (!panel) return;
		panel.hidden = !panel.hidden;
		trigger.setAttribute("aria-expanded", String(!panel.hidden));
	}
	isEditableTarget(target) {
		if (!target) return false;
		return target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target.isContentEditable || !!target.closest("[contenteditable='true']");
	}
};
//#endregion
//#region ../../modules/views/workcenter-view/src/ts/WorkCenterResults.ts
var WorkCenterResults = class {
	container = null;
	deps;
	dataProcessing;
	constructor(dependencies, dataProcessing) {
		this.deps = dependencies;
		this.dataProcessing = dataProcessing;
	}
	setContainer(container) {
		this.container = container;
	}
	showProcessingMessage(message) {
		if (!this.container) return;
		const outputContent = this.container.querySelector("[data-output]");
		if (outputContent) outputContent.innerHTML = `<div class="wc-loading">${message}</div>`;
	}
	showResult(state) {
		if (!this.container || !state.lastRawResult) return;
		const outputContent = this.container.querySelector("[data-output]");
		if (!outputContent) return;
		outputContent.innerHTML = `<div class="result-content">${this.dataProcessing.formatResult(state.lastRawResult, state.outputFormat)}</div>`;
	}
	showError(error) {
		if (!this.container) return;
		const outputContent = this.container.querySelector("[data-output]");
		if (outputContent) outputContent.innerHTML = `<div class="error">Error: ${error}</div>`;
	}
	clearResults() {
		if (!this.container) return;
		const outputContent = this.container.querySelector("[data-output]");
		if (outputContent) outputContent.innerHTML = "<div class=\"wc-results-empty\">Results cleared</div>";
	}
	renderDataPipeline(state) {
		if (!state.recognizedData && (!state.processedData || state.processedData.length === 0)) return "";
		return H`<div class="data-pipeline-section">
            <div class="pipeline-content">
              <div class="pipeline-header">
                <h3>Data Processing Pipeline</h3>
                <div class="pipeline-actions">
                  <button class="btn btn-icon" data-action="clear-pipeline" title="Clear all data">
                    <ui-icon icon="trash" size="18" icon-style="duotone"></ui-icon>
                  </button>
                </div>
              </div>
              <div class="pipeline-steps">
              ${state.recognizedData ? H`<div class="pipeline-step recognized-step">
                <div class="step-header">
                  <ui-icon icon="eye" size="16" icon-style="duotone"></ui-icon>
                  <span class="step-title">Recognized Data</span>
                  <span class="step-time">${new Date(state.recognizedData.timestamp).toLocaleTimeString()}</span>
                  <span class="step-source">${state.recognizedData.source}</span>
                  <span class="step-format">${state.recognizedData.recognizedAs}</span>
                </div>
                <div class="step-content">
                  <div class="step-preview">${state.recognizedData.content.substring(0, 100)}${state.recognizedData.content.length > 100 ? "..." : ""}</div>
                </div>
              </div>` : ""}

              ${state.processedData ? state.processedData.map((step, index) => {
			const isShareTarget = step.metadata?.source === "share-target";
			return H`<div class="${isShareTarget ? "pipeline-step share-target-step" : "pipeline-step processed-step"}">
                <div class="step-header">
                  <ui-icon icon="${isShareTarget ? "share" : "cogs"}" size="16" icon-style="duotone"></ui-icon>
                  <span class="step-title">Step ${index + 1}: ${step.action}</span>
                  <span class="step-time">${new Date(step.timestamp).toLocaleTimeString()}</span>
                  ${isShareTarget ? H`<span class="step-badge share-target-badge" title="Share Target Result">Share</span>` : ""}
                  <button class="btn small" data-restore-step="${index}">Use Result</button>
                </div>
                <div class="step-content">
                  <div class="step-preview">${step.content.substring(0, 100)}${step.content.length > 100 ? "..." : ""}</div>
                </div>
              </div>`;
		}) : ""}
              </div>
            </div>
          </div>`;
	}
	updateDataPipeline(state) {
		if (!this.container) return;
		const pipelinePanel = this.container.querySelector("[data-results-tab-panel=\"pipeline\"]");
		if (!pipelinePanel) return;
		const pipelineHTML = this.renderDataPipeline(state);
		if (typeof pipelineHTML === "string") pipelinePanel.innerHTML = `<div class="wc-results-empty">No data pipeline yet</div>`;
		else {
			pipelinePanel.innerHTML = "";
			pipelinePanel.appendChild(pipelineHTML);
		}
	}
	updateRecognizedStatus(state) {
		if (!this.container) return;
		const statusElement = this.container.querySelector(".wc-recognized-status");
		if (state.recognizedData) {
			if (!statusElement) {
				const fileInputArea = this.container.querySelector(".wc-file-drop-overlay");
				if (fileInputArea) {
					const newStatus = H`<div class="wc-recognized-status">
                        <ui-icon icon="check-circle" size="16" icon-style="duotone" class="status-icon"></ui-icon>
                        <span>Content recognized - ready for actions</span>
                        <button class="btn small clear-recognized" data-action="clear-recognized">Clear</button>
                    </div>`;
					fileInputArea.appendChild(newStatus);
				}
			}
		} else if (statusElement) statusElement.remove();
	}
	renderOutputHeader() {
		return `
            <div class="wc-output-header">
                <div class="wc-output-actions">
                    <button class="btn btn-icon" data-action="view-output" title="View output in Viewer">
                        <ui-icon icon="eye" size="16" icon-style="duotone"></ui-icon>
                        <span class="btn-text">View</span>
                    </button>
                    <button class="btn btn-icon" data-action="copy-results" title="Copy results">
                        <ui-icon icon="copy" size="16" icon-style="duotone"></ui-icon>
                        <span class="btn-text">Copy</span>
                    </button>
                    <button class="btn btn-icon" data-action="save-to-explorer" title="Save to Explorer">
                        <ui-icon icon="floppy-disk" size="16" icon-style="duotone"></ui-icon>
                        <span class="btn-text">Save</span>
                    </button>
                    <button class="btn btn-icon" data-action="clear-results" title="Clear results">
                        <ui-icon icon="trash" size="16" icon-style="duotone"></ui-icon>
                        <span class="btn-text">Clear</span>
                    </button>
                </div>
            </div>
        `;
	}
	renderOutputContent() {
		return `
            <div class="wc-output-content" data-output>
                <div class="wc-results-empty">No results yet</div>
            </div>
        `;
	}
	restorePipelineStep(state, stepIndex) {
		if (!this.container) return;
		if (state.processedData && state.processedData[stepIndex]) {
			const step = state.processedData[stepIndex];
			const outputContent = this.container.querySelector("[data-output]");
			if (outputContent) {
				outputContent.innerHTML = `<div class="result-content">${this.dataProcessing.formatResult({ content: step.content }, state.outputFormat)}</div>`;
				state.lastRawResult = { data: step.content };
			}
		}
	}
	updateAllResultsUI(state) {
		this.updateDataPipeline(state);
		this.updateRecognizedStatus(state);
	}
};
//#endregion
//#region ../../modules/views/workcenter-view/src/ts/WorkCenterAttachments.ts
var WorkCenterAttachments = class {
	container = null;
	deps;
	fileOps;
	previewUrlCache = /* @__PURE__ */ new WeakMap();
	constructor(dependencies, fileOps) {
		this.deps = dependencies;
		this.fileOps = fileOps;
	}
	setContainer(container) {
		this.container = container;
	}
	renderAttachmentsSection(state) {
		return `
            <div class="wc-attachments-section">
              <div class="file-attachment-area" data-file-drop-zone="" data-dropzone="">
                <div class="file-drop-zone" >
                  <div class="drop-zone-content">
                    <ui-icon icon="folder" size="4rem" icon-style="duotone" class="drop-icon"></ui-icon>
                    <div class="drop-text">Drop files here or click to select files</div>
                    <div class="drop-hint" data-drop-hint>Supports: Images, Documents, Text files, PDFs, URLs, Base64 data</div>
                  </div>
                </div>
                <div class="file-list" data-file-list></div>
                ${this.renderRecognizedStatus(state)}
              </div>
              <div class="wc-block-header wc-attachments-toolbar">
                <div class="file-stats">
                  <div class="file-counter" data-file-count>
                    <ui-icon icon="file" size="16" icon-style="duotone"></ui-icon>
                    <span class="count">${state.files.length}</span>
                    <span class="label">files attached</span>
                  </div>
                  ${state.recognizedData ? `
                    <div class="data-counter recognized">
                      <ui-icon icon="eye" size="16" icon-style="duotone"></ui-icon>
                      <span>Content recognized</span>
                    </div>
                  ` : ""}
                  ${state.processedData && state.processedData.length > 0 ? `
                    <div class="data-counter processed">
                      <ui-icon icon="cogs" size="16" icon-style="duotone"></ui-icon>
                      <span>${state.processedData.length} processing steps</span>
                    </div>
                  ` : ""}
                </div>
              </div>
            </div>
        `;
	}
	renderRecognizedStatus(state) {
		if (!state.recognizedData) return "";
		return `
            <div class="wc-recognized-status">
              <ui-icon icon="check-circle" size="16" icon-style="duotone" class="status-icon"></ui-icon>
              <span>Content recognized - ready for processing</span>
              <button class="btn small clear-recognized" data-action="clear-recognized">Clear</button>
            </div>
        `;
	}
	updateFileList(state) {
		if (!this.container) return;
		const fileList = this.container.querySelector("[data-file-list]");
		if (!fileList) return;
		fileList.innerHTML = "";
		if (state.files.length === 0) {
			fileList.innerHTML = "<div class=\"wc-attachments-empty\">No files attached</div>";
			return;
		}
		state.files.forEach((file, index) => {
			const fileItem = this.createFileItem(file, index, state);
			fileList.append(fileItem);
		});
	}
	createFileItem(file, index, state) {
		const isImage = this.isImageFile(file);
		const isMarkdown = this.isMarkdownFile(file);
		const previewUrl = isImage ? this.getOrCreatePreviewUrl(file) : null;
		const fileSize = this.formatFileSize(file.size);
		const fileItem = H`<div class="file-item" data-file-index="${index}">
      <div class="file-info">
        <span class="file-icon">${this.createFileIconElement(file.type)}</span>
        ${previewUrl ? H`<img class="file-preview" alt=${file.name || "image"} src=${previewUrl} loading="lazy" decoding="async" />` : ""}
        <div class="file-details">
          <span class="file-name">${file.name || "Unnamed file"}</span>
          <span class="file-size">(${fileSize})</span>
          <span class="file-type">${this.getReadableFileType(file.type)}</span>
        </div>
        ${isMarkdown ? H`<button class="btn small" data-open-md="${index}" title="Open in Markdown Viewer">Open</button>` : ""}
      </div>
      <button class="btn small remove-btn" data-remove="${index}" title="Remove file">✕</button>
    </div>`;
		const openBtn = fileItem.querySelector(`[data-open-md="${index}"]`);
		if (openBtn) openBtn.addEventListener("click", async (e) => {
			e.preventDefault();
			e.stopPropagation();
			await this.openMarkdownInViewer(file);
		});
		fileItem.querySelector(".remove-btn").addEventListener("click", (e) => {
			e.preventDefault();
			e.stopPropagation();
			this.removeFile(state, index);
		});
		return fileItem;
	}
	removeFile(state, index) {
		const removedFile = state.files[index];
		if (removedFile) {
			this.revokePreviewUrl(removedFile);
			state.files.splice(index, 1);
			this.updateFileList(state);
			this.updateFileCounter(state);
			this.deps.onFilesChanged?.();
		}
	}
	setupDropZone(state) {
		if (!this.container) return;
		const dropZone = this.container.querySelector("[data-file-drop-zone]");
		if (!dropZone) return;
		const fileInput = document.createElement("input");
		fileInput.type = "file";
		fileInput.multiple = true;
		fileInput.accept = "image/*,.pdf,.txt,.md,.json,.html,.css,.js,.ts";
		fileInput.style.display = "none";
		this.container.append(fileInput);
		this.updateDropHint();
		dropZone.addEventListener("click", (e) => {
			if (e.target?.closest("button, a, input, select, textarea, label, [data-remove], [data-open-md]")) return;
			fileInput.click();
		});
		dropZone.addEventListener("dragover", (e) => {
			e.preventDefault();
			dropZone.classList.add("drag-over");
		});
		dropZone.addEventListener("dragleave", (e) => {
			const rect = dropZone.getBoundingClientRect();
			const x = e.clientX;
			const y = e.clientY;
			if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) dropZone.classList.remove("drag-over");
		});
		dropZone.addEventListener("drop", async (e) => {
			e.preventDefault();
			dropZone.classList.remove("drag-over");
			const dataTransfer = e.dataTransfer;
			if (!dataTransfer) return;
			let contentAdded = false;
			const files = Array.from(dataTransfer.files || []);
			if (files.length > 0) {
				this.fileOps.addFilesFromInput(state, files);
				this.updateFileList(state);
				this.updateFileCounter(state);
				this.deps.onFilesChanged?.();
				contentAdded = true;
			}
			if (!contentAdded && dataTransfer.types.includes("text/plain")) try {
				const textContent = dataTransfer.getData("text/plain");
				if (textContent?.trim()) {
					await this.fileOps.handleDroppedContent(state, textContent.trim(), "text");
					contentAdded = true;
				}
			} catch (error) {
				console.warn("[WorkCenter] Failed to get dragged text:", error);
			}
			if (!contentAdded && dataTransfer.types.includes("text/uri-list")) try {
				const urls = dataTransfer.getData("text/uri-list").split("\n").filter((url) => url.trim() && !url.startsWith("#"));
				if (urls.length > 0) {
					for (const url of urls) if (this.isValidUrl(url.trim())) {
						await this.fileOps.handleDroppedContent(state, url.trim(), "url");
						break;
					}
					contentAdded = true;
				}
			} catch (error) {
				console.warn("[WorkCenter] Failed to get dragged URLs:", error);
			}
			if (!contentAdded && dataTransfer.types.includes("text/html")) try {
				const htmlContent = dataTransfer.getData("text/html");
				if (htmlContent) {
					const tempDiv = document.createElement("div");
					tempDiv.innerHTML = htmlContent;
					const extractedText = tempDiv.textContent || tempDiv.innerText || "";
					if (extractedText.trim()) {
						await this.fileOps.handleDroppedContent(state, extractedText.trim(), "html");
						contentAdded = true;
					}
				}
			} catch (error) {
				console.warn("[WorkCenter] Failed to get dragged HTML:", error);
			}
		});
		fileInput.addEventListener("change", async (e) => {
			const files = Array.from(e.target.files || []);
			this.fileOps.addFilesFromInput(state, files);
			this.updateFileList(state);
			this.updateFileCounter(state);
			this.deps.onFilesChanged?.();
			if (files.filter((f) => f.type.startsWith("text/") || f.type === "application/markdown" || f.name?.endsWith(".md") || f.name?.endsWith(".txt")).length > 0 && state.selectedTemplate && state.selectedTemplate.trim()) {
				console.log("[WorkCenter] Auto-processing text/markdown files with template:", state.selectedTemplate);
				setTimeout(async () => {
					this.deps.showMessage?.("Files attached and ready for processing");
				}, 100);
			}
		});
	}
	updateFileCounter(state) {
		if (!this.container) return;
		const counter = this.container.querySelector("[data-file-count] .count");
		if (counter) counter.textContent = state.files.length.toString();
	}
	updateDataCounters(state) {
		if (!this.container) return;
		const recognizedCounter = this.container.querySelector(".data-counter.recognized");
		if (state.recognizedData) {
			if (!recognizedCounter) {
				const statsContainer = this.container.querySelector(".file-stats");
				if (statsContainer) {
					const newCounter = H`<div class="data-counter recognized">
                        <ui-icon icon="eye" size="16" icon-style="duotone"></ui-icon>
                        <span>Content recognized</span>
                    </div>`;
					statsContainer.appendChild(newCounter);
				}
			}
		} else if (recognizedCounter) recognizedCounter.remove();
		const processedCounter = this.container.querySelector(".data-counter.processed");
		if (state.processedData && state.processedData.length > 0) {
			if (processedCounter) {
				const span = processedCounter.querySelector("span");
				if (span) span.textContent = `${state.processedData.length} processing steps`;
			} else {
				const statsContainer = this.container.querySelector(".file-stats");
				if (statsContainer) {
					const newCounter = H`<div class="data-counter processed">
                        <ui-icon icon="cogs" size="16" icon-style="duotone"></ui-icon>
                        <span>${state.processedData.length} processing steps</span>
                    </div>`;
					statsContainer.appendChild(newCounter);
				}
			}
		} else if (processedCounter) processedCounter.remove();
	}
	clearAllFiles(state) {
		this.revokeAllPreviewUrls(state);
		state.files.length = 0;
		this.updateFileList(state);
		this.updateFileCounter(state);
		this.updateDataCounters(state);
		this.deps.onFilesChanged?.();
	}
	isImageFile(file) {
		return (file?.type || "").toLowerCase().startsWith("image/");
	}
	isMarkdownFile(file) {
		const name = (file?.name || "").toLowerCase();
		return (file?.type || "").toLowerCase() === "text/markdown" || name.endsWith(".md") || name.endsWith(".markdown") || name.endsWith(".mdown") || name.endsWith(".mkd") || name.endsWith(".mkdn");
	}
	getOrCreatePreviewUrl(file) {
		if (!file) return null;
		if (!this.isImageFile(file)) return null;
		const cached = this.previewUrlCache.get(file);
		if (cached) return cached;
		try {
			const url = URL.createObjectURL(file);
			this.previewUrlCache.set(file, url);
			return url;
		} catch {
			return null;
		}
	}
	revokePreviewUrl(file) {
		const url = this.previewUrlCache.get(file);
		if (url) try {
			URL.revokeObjectURL(url);
		} catch {}
		this.previewUrlCache.delete(file);
	}
	async openMarkdownInViewer(file) {
		try {
			const md = await file.text();
			try {
				localStorage.setItem("rs-markdown", md);
			} catch {}
			try {
				if (this.deps?.state) {
					this.deps.state.markdown = md;
					this.deps.state.view = "markdown-viewer";
				}
			} catch {}
			this.deps.render?.();
			setTimeout(() => {
				this.deps.showMessage?.(`Opened ${file.name || "file"} in Markdown Viewer`);
			}, 0);
		} catch (e) {
			this.deps.showMessage?.(`Failed to open ${file.name || "file"}`);
			console.warn("[WorkCenter] Failed to open markdown file:", e);
		}
	}
	createFileIconElement(mimeType) {
		const iconName = this.getFileIconName(mimeType);
		return H`<ui-icon icon="${iconName}" size="20" icon-style="duotone" class="file-type-icon"></ui-icon>`;
	}
	getFileIconName(mimeType) {
		if (mimeType.startsWith("image/")) return "image";
		if (mimeType === "application/pdf") return "file-pdf";
		if (mimeType.includes("json")) return "file-text";
		if (mimeType.includes("text") || mimeType.includes("markdown")) return "file-text";
		return "file";
	}
	getReadableFileType(mimeType) {
		if (!mimeType) return "Unknown";
		const typeMap = {
			"image/jpeg": "JPEG Image",
			"image/png": "PNG Image",
			"image/gif": "GIF Image",
			"image/webp": "WebP Image",
			"image/svg+xml": "SVG Image",
			"application/pdf": "PDF Document",
			"text/plain": "Text File",
			"text/markdown": "Markdown",
			"application/json": "JSON",
			"text/html": "HTML",
			"text/css": "CSS",
			"application/javascript": "JavaScript",
			"application/typescript": "TypeScript"
		};
		if (typeMap[mimeType]) return typeMap[mimeType];
		if (mimeType.startsWith("image/")) return "Image";
		if (mimeType.startsWith("text/")) return "Text File";
		if (mimeType.startsWith("application/")) return "Document";
		return mimeType.split("/")[1]?.toUpperCase() || "File";
	}
	formatFileSize(bytes) {
		if (bytes < 1024) return `${bytes} B`;
		if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
		return `${(bytes / 1048576).toFixed(1)} MB`;
	}
	revokeAllPreviewUrls(state) {
		try {
			for (const f of state.files) this.revokePreviewUrl(f);
		} catch {}
	}
	isValidUrl(string) {
		try {
			new URL(string);
			return true;
		} catch {
			return false;
		}
	}
	updateDropHint() {
		if (!this.container) return;
		const hintElement = this.container.querySelector("[data-drop-hint]");
		if (!hintElement) return;
		switch (globalThis?.location?.hash) {
			case ROUTE_HASHES.SHARE_TARGET_TEXT:
				hintElement.textContent = "Drop text files or paste text content here";
				break;
			case ROUTE_HASHES.SHARE_TARGET_IMAGE:
				hintElement.textContent = "Drop image files here (PNG, JPG, GIF, WebP, etc.)";
				break;
			case ROUTE_HASHES.SHARE_TARGET_FILES:
				hintElement.textContent = "Drop any files here (images, documents, text files, PDFs, etc.)";
				break;
			case ROUTE_HASHES.SHARE_TARGET_URL:
				hintElement.textContent = "Paste URLs here (file drops not accepted on this route)";
				break;
			default: hintElement.textContent = "Supports: Images, Documents, Text files, PDFs, URLs, Base64 data";
		}
	}
};
//#endregion
//#region ../../modules/views/workcenter-view/src/ts/WorkCenterPrompts.ts
var WorkCenterPrompts = class {
	container = null;
	deps;
	templates;
	voice;
	constructor(dependencies, templates, voice) {
		this.deps = dependencies;
		this.templates = templates;
		this.voice = voice;
	}
	setContainer(container) {
		this.container = container;
	}
	renderPromptPanel(state) {
		return `
            <div class="prompt-panel">
              <div class="prompt-controls">
                <select class="template-select">
                  <option value="">Select Template...</option>
                  ${state.promptTemplates.map((t) => `<option value="${t.prompt.replace(/"/g, "&quot;")}" ${state.selectedTemplate === t.prompt ? "selected" : ""}>${t.name}</option>`).join("")}
                </select>
                <button class="btn btn-icon" data-action="edit-templates" title="Edit Templates">
                  <ui-icon icon="gear" size="18" icon-style="duotone"></ui-icon>
                  <span class="btn-text">Templates</span>
                </button>
                <button class="btn btn-icon prompt-attach-btn" data-action="select-files" title="Attach files">
                  <ui-icon icon="paperclip" size="18" icon-style="duotone"></ui-icon>
                  <span class="attach-count" data-prompt-file-count>${state.files.length}</span>
                </button>
              </div>

              <div class="prompt-input-group" data-prompt-dropzone data-dropzone="">
                <div class="prompt-input-overlay" data-prompt-drop-hint>
                  <ui-icon icon="paperclip" size="16" icon-style="duotone"></ui-icon>
                  <span>Drop files, links or text to attach</span>
                </div>
                <textarea
                  class="prompt-input"
                  placeholder="Describe what you want to do with the attached content... (or use voice input)"
                  rows="4"
                >${state.currentPrompt}</textarea>
              </div>

              <div class="prompt-actions">
                
                <button class="btn voice-btn ${state.voiceRecording ? "recording" : ""}" data-action="voice-input">
                  <ui-icon icon="microphone" size="20" icon-style="duotone"></ui-icon>
                  ${state.voiceRecording ? "Recording..." : "Hold for Voice"}
                </button>
                <label class="auto-action-label" title="Auto-action (use last successful)">
                  <input type="checkbox" class="auto-action-checkbox" ${state.autoAction ? "checked" : ""}>
                  <ui-icon icon="lightning-a" size="20" icon-style="duotone"></ui-icon>
                </label>
                <button class="btn primary action-btn" data-action="execute">
                  <ui-icon icon="brain" size="20" icon-style="duotone"></ui-icon>
                  <span class="btn-text">Process Content</span>
                </button>
                <button class="btn btn-icon clear-btn" data-action="clear-prompt" title="Clear Prompt">
                  <ui-icon icon="trash" size="18" icon-style="duotone"></ui-icon>
                </button>
              </div>
            </div>
        `;
	}
	renderPromptsSection(state) {
		return `
            <div class="prompts-section">
              ${this.renderPromptPanel(state)}
            </div>
        `;
	}
	/** Populate the instruction selector with custom instructions from settings */
	async populateInstructionSelect(state) {
		if (!this.container) return;
		const select = this.container.querySelector(".instruction-select");
		if (!select) return;
		const instructions = await this.templates.loadInstructions();
		const hasStoredSelection = Boolean(state.selectedInstruction) && instructions.some((i) => i.id === state.selectedInstruction);
		const selectedId = hasStoredSelection ? state.selectedInstruction : this.templates.getActiveInstructionId();
		select.innerHTML = "<option value=\"\">None (default)</option>";
		for (const instr of instructions) {
			const opt = document.createElement("option");
			opt.value = instr.id;
			opt.textContent = instr.label;
			if (instr.id === selectedId) opt.selected = true;
			select.append(opt);
		}
		if ((!state.selectedInstruction || !hasStoredSelection) && selectedId) state.selectedInstruction = selectedId;
	}
	/** Update the instruction selector options (sync, after loadInstructions) */
	updateInstructionSelect(state) {
		if (!this.container) return;
		const select = this.container.querySelector(".instruction-select");
		if (!select) return;
		const instructions = this.templates.getInstructions();
		const selectedId = Boolean(state.selectedInstruction) && instructions.some((i) => i.id === state.selectedInstruction) ? state.selectedInstruction : this.templates.getActiveInstructionId();
		select.innerHTML = "<option value=\"\">None (default)</option>";
		for (const instr of instructions) {
			const opt = document.createElement("option");
			opt.value = instr.id;
			opt.textContent = instr.label;
			if (instr.id === selectedId) opt.selected = true;
			select.append(opt);
		}
	}
	/** Get the currently selected instruction object */
	getSelectedInstruction(state) {
		if (!state.selectedInstruction) return null;
		return this.templates.getInstructionById(state.selectedInstruction) || null;
	}
	updatePromptInput(state) {
		if (!this.container) return;
		const promptInput = this.container.querySelector(".prompt-input");
		if (promptInput) promptInput.value = state.currentPrompt;
	}
	updateTemplateSelect(state) {
		if (!this.container) return;
		const templateSelect = this.container.querySelector(".template-select");
		if (templateSelect) {
			const currentValue = templateSelect.value;
			templateSelect.innerHTML = "<option value=\"\">Select Template...</option>" + state.promptTemplates.map((t) => `<option value="${t.prompt.replace(/"/g, "&quot;")}" ${state.selectedTemplate === t.prompt ? "selected" : ""}>${t.name}</option>`).join("");
			if (state.selectedTemplate && state.promptTemplates.some((t) => t.prompt === state.selectedTemplate)) templateSelect.value = state.selectedTemplate;
			else templateSelect.value = currentValue;
		}
	}
	updateVoiceButton(state) {
		if (!this.container) return;
		const voiceBtn = this.container.querySelector("[data-action=\"voice-input\"]");
		if (voiceBtn) {
			voiceBtn.innerHTML = state.voiceRecording ? "<ui-icon icon=\"microphone\" size=\"20\" icon-style=\"duotone\"></ui-icon> Recording..." : "<ui-icon icon=\"microphone\" size=\"20\" icon-style=\"duotone\"></ui-icon> Hold for Voice";
			voiceBtn.classList.toggle("recording", state.voiceRecording);
		}
	}
	updatePromptFileCount(state) {
		if (!this.container) return;
		const count = this.container.querySelector("[data-prompt-file-count]");
		if (count) count.textContent = String(state.files.length);
	}
	clearPrompt(state) {
		state.currentPrompt = "";
		this.updatePromptInput(state);
	}
	handleTemplateSelection(state, selectedPrompt) {
		state.selectedTemplate = selectedPrompt;
		if (selectedPrompt) {
			state.currentPrompt = selectedPrompt;
			this.updatePromptInput(state);
		}
	}
	handleInstructionSelection(state, instructionId) {
		state.selectedInstruction = instructionId;
	}
	handleAutoActionToggle(state, checked) {
		state.autoAction = checked;
	}
};
//#endregion
//#region src/service/misc/ActionHistory.ts
/** In-memory history store with optional browser persistence and lightweight filtering. */
var ActionHistoryStore = class {
	state;
	storageKey = "rs-action-history";
	constructor(maxEntries = 500, autoSave = true) {
		this.state = {
			entries: [],
			maxEntries,
			autoSave,
			filters: {}
		};
		this.loadHistory();
	}
	/** Insert a new entry at the front of the timeline and enforce the retention limit. */
	addEntry(entry) {
		const fullEntry = {
			...entry,
			id: this.generateId(),
			timestamp: Date.now()
		};
		this.state.entries.unshift(fullEntry);
		if (this.state.entries.length > this.state.maxEntries) this.state.entries = this.state.entries.slice(0, this.state.maxEntries);
		return fullEntry;
	}
	/**
	* Update an existing entry
	*/
	updateEntry(id, updates) {
		const index = this.state.entries.findIndex((entry) => entry.id === id);
		if (index === -1) return false;
		Object.assign(this.state.entries[index], updates);
		return true;
	}
	/**
	* Get entry by ID
	*/
	getEntry(id) {
		return this.state.entries.find((entry) => entry.id === id);
	}
	/** Return entries matching the supplied filters without mutating store state. */
	getEntries(filters) {
		let entries = [...this.state.entries];
		if (filters?.source) entries = entries.filter((entry) => entry.context.source === filters.source);
		if (filters?.action) entries = entries.filter((entry) => entry.action === filters.action);
		if (filters?.status) entries = entries.filter((entry) => entry.status === filters.status);
		if (filters?.dateRange) entries = entries.filter((entry) => entry.timestamp >= filters.dateRange.start && entry.timestamp <= filters.dateRange.end);
		return entries;
	}
	/**
	* Get recent entries
	*/
	getRecentEntries(limit = 50) {
		return this.state.entries.slice(0, limit);
	}
	/**
	* Remove entry
	*/
	removeEntry(id) {
		const index = this.state.entries.findIndex((entry) => entry.id === id);
		if (index === -1) return false;
		this.state.entries.splice(index, 1);
		return true;
	}
	/**
	* Clear all entries
	*/
	clearEntries() {
		this.state.entries = [];
	}
	/**
	* Set filters
	*/
	setFilters(filters) {
		Object.assign(this.state.filters, filters);
	}
	/** Summarize history health and distribution by source/action. */
	getStats() {
		const entries = this.state.entries;
		const total = entries.length;
		const completed = entries.filter((e) => e.status === "completed").length;
		const failed = entries.filter((e) => e.status === "failed").length;
		const pending = entries.filter((e) => e.status === "pending" || e.status === "processing").length;
		const bySource = entries.reduce((acc, entry) => {
			acc[entry.context.source] = (acc[entry.context.source] || 0) + 1;
			return acc;
		}, {});
		const byAction = entries.reduce((acc, entry) => {
			acc[entry.action] = (acc[entry.action] || 0) + 1;
			return acc;
		}, {});
		return {
			total,
			completed,
			failed,
			pending,
			successRate: total > 0 ? completed / total * 100 : 0,
			bySource,
			byAction
		};
	}
	/**
	* Export entries
	*/
	exportEntries(format = "json", filters) {
		const entries = this.getEntries(filters);
		if (format === "csv") return [[
			"ID",
			"Timestamp",
			"Source",
			"Action",
			"Status",
			"Input Type",
			"Result Type",
			"Processing Time"
		], ...entries.map((entry) => [
			entry.id,
			new Date(entry.timestamp).toISOString(),
			entry.context.source,
			entry.action,
			entry.status,
			entry.input.type,
			entry.result?.type || "",
			entry.result?.processingTime || ""
		])].map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n");
		return JSON.stringify(entries, null, 2);
	}
	/**
	* Import entries
	*/
	importEntries(data, format = "json") {
		let entries = [];
		if (format === "json") try {
			entries = JSON.parse(data);
		} catch (e) {
			throw new Error("Invalid JSON format");
		}
		else throw new Error("CSV import not implemented yet");
		const validEntries = entries.filter((entry) => entry.id && entry.timestamp && entry.context && entry.action);
		validEntries.forEach((entry) => {
			if (!this.getEntry(entry.id)) this.state.entries.push(entry);
		});
		this.state.entries.sort((a, b) => b.timestamp - a.timestamp);
		if (this.state.entries.length > this.state.maxEntries) this.state.entries = this.state.entries.slice(0, this.state.maxEntries);
		this.saveHistory();
		return validEntries.length;
	}
	generateId() {
		return `action_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
	}
	loadHistory() {
		try {
			if (typeof localStorage === "undefined") return;
			const stored = localStorage.getItem(this.storageKey);
			if (stored) {
				const data = JSON.parse(stored);
				if (Array.isArray(data)) this.state.entries = data.map((entry) => ({
					...entry,
					context: entry.context || { source: "unknown" },
					input: entry.input || { type: "unknown" },
					status: entry.status || "completed"
				}));
			}
		} catch (e) {
			console.warn("Failed to load action history:", e);
			this.state.entries = [];
		}
	}
	saveHistory() {
		if (!this.state.autoSave) return;
		try {
			if (typeof localStorage === "undefined") return;
			localStorage.setItem(this.storageKey, JSON.stringify(this.state.entries));
		} catch (e) {
			console.warn("Failed to save action history:", e);
		}
	}
};
var actionHistory = new ActionHistoryStore();
//#endregion
//#region ../../modules/views/workcenter-view/src/ts/WorkCenterHistory.ts
var WorkCenterHistory = class {
	container = null;
	deps;
	constructor(dependencies) {
		this.deps = dependencies;
	}
	setContainer(container) {
		this.container = container;
	}
	updateRecentHistory(state) {
		if (!this.container) return;
		const historyContainer = this.container.querySelector("[data-recent-history]");
		if (!historyContainer) return;
		historyContainer.innerHTML = "";
		const recentItems = actionHistory.getRecentEntries(10).filter((entry) => entry.context.source === "workcenter" && entry.status === "completed");
		if (recentItems.length === 0) {
			historyContainer.innerHTML = "<div class=\"wc-history-empty\">No recent activity</div>";
			return;
		}
		recentItems.slice(0, 3).forEach((item) => {
			const historyItem = H`<div class="history-item-compact">
        <div class="history-meta">
          <span class="history-status ${item.result?.type !== "error" ? "success" : "error"}">${item.result?.type !== "error" ? "✓" : "✗"}</span>
          <span class="history-prompt">${item.input.text?.substring(0, 50) || item.action}${item.input.text && item.input.text.length > 50 ? "..." : ""}</span>
          ${item.result?.processingTime ? H`<span class="history-time">${Math.round(item.result.processingTime / 1e3)}s</span>` : ""}
        </div>
        <button class="btn small" data-restore="${item.id}">Use</button>
      </div>`;
			historyItem.querySelector("button")?.addEventListener("click", () => {
				if (item.input.text) {
					state.currentPrompt = item.input.text;
					this.deps.showMessage?.("Restored prompt from history");
				}
			});
			historyContainer.append(historyItem);
		});
	}
	updateActionHistory() {
		if (!this.container) return;
		const statsContainer = this.container.querySelector("[data-action-stats]");
		if (statsContainer) {
			const stats = actionHistory.getStats();
			statsContainer.innerHTML = `
                <div class="stats-item">Total: ${stats.total}</div>
                <div class="stats-item">Success: ${stats.completed}</div>
                <div class="stats-item">Failed: ${stats.failed}</div>
            `;
		}
	}
	showActionHistory() {
		if (!this.container) return;
		const actionEntries = actionHistory.getRecentEntries(50).filter((entry) => entry.context.source === "workcenter");
		const modal = H`<div class="action-history-modal">
      <div class="modal-content">
        <div class="modal-header">
          <h3>Action History</h3>
          <div class="modal-actions">
            <button class="btn btn-icon" data-action="export-history" title="Export History">
              <ui-icon icon="download" size="18" icon-style="duotone"></ui-icon>
            </button>
            <button class="btn btn-icon" data-action="clear-history" title="Clear History">
              <ui-icon icon="trash" size="18" icon-style="duotone"></ui-icon>
            </button>
            <button class="btn" data-action="close-modal">Close</button>
          </div>
        </div>

        <div class="history-stats">
          ${(() => {
			const stats = actionHistory.getStats();
			return H`
              <div class="stat-card">
                <div class="stat-value">${stats.total}</div>
                <div class="stat-label">Total Actions</div>
              </div>
              <div class="stat-card">
                <div class="stat-value success">${stats.completed}</div>
                <div class="stat-label">Completed</div>
              </div>
              <div class="stat-card">
                <div class="stat-value error">${stats.failed}</div>
                <div class="stat-label">Failed</div>
              </div>
              <div class="stat-card">
                <div class="stat-value">${stats.byAction["recognize"] || 0}</div>
                <div class="stat-label">Recognitions</div>
              </div>
            `;
		})()}
        </div>

        <div class="history-filters">
          <select class="filter-select" data-filter="status">
            <option value="">All Status</option>
            <option value="completed">Completed</option>
            <option value="failed">Failed</option>
            <option value="processing">Processing</option>
          </select>
          <select class="filter-select" data-filter="action">
            <option value="">All Actions</option>
            <option value="recognize">Recognize</option>
            <option value="analyze">Analyze</option>
            <option value="process">Process</option>
          </select>
        </div>

        <div class="action-history-list">
          ${actionEntries.length === 0 ? H`<div class="wc-history-empty">No actions found</div>` : actionEntries.map((entry) => H`<div class="action-history-item ${entry.status}">
              <div class="action-header">
                <div class="action-meta">
                  <span class="action-status ${entry.status}">${this.getStatusIcon(entry.status)}</span>
                  <span class="action-type">${entry.action}</span>
                  <span class="action-time">${this.formatTimeAgo(entry.timestamp)}</span>
                  ${entry.result?.processingTime ? H`<span class="action-duration">${Math.round(entry.result.processingTime / 1e3)}s</span>` : ""}
                </div>
                <div class="action-actions">
                  ${entry.result ? H`<button class="btn small" data-restore-action="${entry.id}">Use Result</button>` : ""}
                  <button class="btn small" data-view-details="${entry.id}">Details</button>
                </div>
              </div>

              <div class="action-content">
                <div class="input-preview">
                  <strong>Input:</strong>
                  ${entry.input.files?.length ? `${entry.input.files.length} file(s): ${entry.input.files.map((f) => f.name).join(", ")}` : entry.input.text?.substring(0, 100) || "No input"}
                  ${entry.input.text && entry.input.text.length > 100 ? "..." : ""}
                </div>

                ${entry.result ? H`<div class="result-preview">
                  <strong>Result:</strong>
                  <div class="result-content">${entry.result.content.substring(0, 200)}${entry.result.content.length > 200 ? "..." : ""}</div>
                </div>` : ""}

                ${entry.error ? H`<div class="error-preview">
                  <strong>Error:</strong> ${entry.error}
                </div>` : ""}
              </div>
            </div>`)}
        </div>
      </div>
    </div>`;
		modal.addEventListener("click", (e) => {
			const target = e.target;
			const action = target.getAttribute("data-action") || target.closest("[data-action]")?.getAttribute("data-action");
			const entryId = target.getAttribute("data-restore-action") || target.getAttribute("data-view-details");
			if (action === "close-modal") modal.remove();
			else if (action === "export-history") this.exportActionHistory();
			else if (action === "clear-history") {
				if (confirm("Are you sure you want to clear all action history?")) {
					actionHistory.clearEntries();
					modal.remove();
					this.updateRecentHistory({});
				}
			} else if (entryId) {
				const entry = actionHistory.getEntry(entryId);
				if (entry) {
					if (target.hasAttribute("data-restore-action") && entry.result) {
						this.deps.showMessage?.("Result restored from history");
						modal.remove();
					} else if (target.hasAttribute("data-view-details")) this.showActionDetails(entry);
				}
			}
		});
		modal.querySelectorAll(".filter-select").forEach((select) => {
			select.addEventListener("change", () => this.applyHistoryFilters(modal));
		});
		this.container.append(modal);
	}
	showActionDetails(entry) {
		const modal = H`<div class="action-details-modal">
      <div class="modal-content">
        <div class="modal-header">
          <h3>Action Details</h3>
          <button class="btn" data-action="close-modal">Close</button>
        </div>

        <div class="details-grid">
          <div class="detail-item">
            <label>ID:</label>
            <span>${entry.id}</span>
          </div>
          <div class="detail-item">
            <label>Timestamp:</label>
            <span>${new Date(entry.timestamp).toLocaleString()}</span>
          </div>
          <div class="detail-item">
            <label>Source:</label>
            <span>${entry.context.source}</span>
          </div>
          <div class="detail-item">
            <label>Action:</label>
            <span>${entry.action}</span>
          </div>
          <div class="detail-item">
            <label>Status:</label>
            <span class="status-${entry.status}">${entry.status}</span>
          </div>
          ${entry.result?.processingTime ? H`<div class="detail-item">
            <label>Processing Time:</label>
            <span>${Math.round(entry.result.processingTime / 1e3)}s</span>
          </div>` : ""}
        </div>

        <div class="details-section">
          <h4>Input</h4>
          <div class="input-details">
            <div>Type: ${entry.input.type}</div>
            ${entry.input.files ? H`<div>Files: ${entry.input.files.map((f) => f.name).join(", ")}</div>` : ""}
            ${entry.input.text ? H`<div>Text: <pre>${entry.input.text}</pre></div>` : ""}
          </div>
        </div>

        ${entry.result ? H`<div class="details-section">
          <h4>Result</h4>
          <div class="result-details">
            <div>Type: ${entry.result.type}</div>
            <div>Auto Copied: ${entry.result.autoCopied ? "Yes" : "No"}</div>
            <div>Content: <pre>${entry.result.content}</pre></div>
          </div>
        </div>` : ""}

        ${entry.error ? H`<div class="details-section">
          <h4>Error</h4>
          <div class="error-details">${entry.error}</div>
        </div>` : ""}
      </div>
    </div>`;
		modal.addEventListener("click", (e) => {
			if (e.target.getAttribute("data-action") === "close-modal") modal.remove();
		});
		document.body.append(modal);
	}
	applyHistoryFilters(modal) {
		const statusFilter = modal.querySelector("[data-filter=\"status\"]").value;
		const actionFilter = modal.querySelector("[data-filter=\"action\"]").value;
		modal.querySelectorAll(".action-history-item").forEach((item) => {
			const status = item.classList[1];
			const action = item.querySelector(".action-type")?.textContent || "";
			const statusMatch = !statusFilter || status === statusFilter;
			const actionMatch = !actionFilter || action === actionFilter;
			item.style.display = statusMatch && actionMatch ? "block" : "none";
		});
	}
	exportActionHistory() {
		const data = actionHistory.exportEntries("json");
		const blob = new Blob([data], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `action-history-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`;
		document.body.append(link);
		link.click();
		link.remove();
		URL.revokeObjectURL(url);
		this.deps.showMessage?.("History exported successfully");
	}
	getStatusIcon(status) {
		switch (status) {
			case "completed": return "✓";
			case "failed": return "✗";
			case "processing": return "⟳";
			case "pending": return "⏳";
			case "cancelled": return "⊗";
			default: return "?";
		}
	}
	formatTimeAgo(timestamp) {
		const diff = Date.now() - timestamp;
		const minutes = Math.floor(diff / 6e4);
		const hours = Math.floor(diff / 36e5);
		const days = Math.floor(diff / 864e5);
		if (days > 0) return `${days}d ago`;
		if (hours > 0) return `${hours}h ago`;
		if (minutes > 0) return `${minutes}m ago`;
		return "Just now";
	}
	getLastSuccessfulPrompt() {
		return this.deps.history.find((h) => h.ok)?.prompt || "Process the provided content";
	}
};
//#endregion
//#region ../../modules/views/workcenter-view/src/ts/WorkCenterSession.ts
var emptySnapshot = () => ({
	version: 1,
	draft: {
		content: "",
		attachments: []
	},
	messages: [],
	epoch: 0
});
var createId = (prefix) => `${prefix}-${globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`}`;
var cloneRef = (attachment) => ({ ...attachment });
var cloneMessage = (message) => ({
	...message,
	attachments: message.attachments.map(cloneRef),
	request: message.request ? { ...message.request } : void 0
});
var cloneSnapshot = (snapshot) => ({
	version: 1,
	epoch: snapshot.epoch,
	draft: {
		content: snapshot.draft.content,
		attachments: snapshot.draft.attachments.map(cloneRef)
	},
	messages: snapshot.messages.map(cloneMessage)
});
var isSnapshot = (value) => {
	if (!value || typeof value !== "object") return false;
	const candidate = value;
	return candidate.version === 1 && Array.isArray(candidate.messages) && !!candidate.draft && typeof candidate.draft.content === "string" && Array.isArray(candidate.draft.attachments);
};
/** Conversation mutation facade that persists every durable transition. */
var WorkCenterSession = class {
	persistence;
	state = emptySnapshot();
	constructor(persistence) {
		this.persistence = persistence;
	}
	async hydrate() {
		const restored = await this.persistence.load();
		this.state = isSnapshot(restored) ? cloneSnapshot(restored) : emptySnapshot();
		return this.snapshot();
	}
	snapshot() {
		return cloneSnapshot(this.state);
	}
	epoch() {
		return this.state.epoch;
	}
	setDraft(draft) {
		this.state.draft = {
			content: String(draft.content || ""),
			attachments: (draft.attachments || []).map(cloneRef)
		};
	}
	async persistDraft() {
		await this.persist();
	}
	/**
	* Move the live draft into a user/assistant pair without waiting on OPFS.
	* WHY: A hung attachment `put` must not block the transcript from accepting Send/Enter.
	*/
	commitDraft(request) {
		const now = Date.now();
		const user = {
			id: createId("user"),
			role: "user",
			createdAt: now,
			content: this.state.draft.content,
			attachments: this.state.draft.attachments.map(cloneRef),
			status: "complete",
			request: { ...request }
		};
		const assistant = {
			id: createId("assistant"),
			role: "assistant",
			createdAt: now,
			content: "",
			attachments: [],
			status: "pending",
			request: { ...request },
			parentId: user.id
		};
		this.state.messages.push(user, assistant);
		this.state.draft = {
			content: "",
			attachments: []
		};
		return {
			user: cloneMessage(user),
			assistant: cloneMessage(assistant)
		};
	}
	async submitDraft(request) {
		const submitted = this.commitDraft(request);
		await this.persist();
		return submitted;
	}
	async completeAssistant(id, completion) {
		const message = this.state.messages.find((entry) => entry.id === id && entry.role === "assistant");
		if (!message) return null;
		message.status = completion.status;
		if (completion.content !== void 0) message.content = completion.content;
		if (completion.rawResult !== void 0) message.rawResult = completion.rawResult;
		if (completion.error !== void 0) message.error = completion.error;
		await this.persist();
		return cloneMessage(message);
	}
	async markAttachmentError(messageId, attachmentHash, error) {
		const attachment = this.state.messages.find((entry) => entry.id === messageId)?.attachments.find((entry) => entry.hash === attachmentHash);
		if (!attachment) return false;
		attachment.error = error;
		await this.persist();
		return true;
	}
	async retry(assistantId) {
		const original = this.state.messages.find((entry) => entry.id === assistantId && entry.role === "assistant");
		const user = original?.parentId ? this.state.messages.find((entry) => entry.id === original.parentId) : void 0;
		if (!original || !user) throw new Error("The original Work Center turn is unavailable");
		const assistant = {
			id: createId("assistant"),
			role: "assistant",
			createdAt: Date.now(),
			content: "",
			attachments: [],
			status: "pending",
			request: original.request ? { ...original.request } : void 0,
			parentId: user.id
		};
		this.state.messages.push(assistant);
		await this.persist();
		return {
			user: cloneMessage(user),
			assistant: cloneMessage(assistant)
		};
	}
	async cancel(assistantId) {
		return this.completeAssistant(assistantId, {
			status: "cancelled",
			content: "",
			error: "Cancelled"
		});
	}
	/** Visible note for share-target / AI results (legacy pipeline is not in the chat shell). */
	async appendAssistantNote(content) {
		const message = {
			id: createId("assistant"),
			role: "assistant",
			createdAt: Date.now(),
			content: String(content || "").trim(),
			attachments: [],
			status: "complete"
		};
		this.state.messages.push(message);
		await this.persist();
		return cloneMessage(message);
	}
	async newChat() {
		this.state = {
			...emptySnapshot(),
			epoch: this.state.epoch + 1
		};
		await this.persistence.clear();
	}
	async persist() {
		await this.persistence.save(this.snapshot());
	}
};
//#endregion
//#region ../../modules/views/workcenter-view/src/ts/WorkCenterAttachmentIngress.ts
/**
* Work Center's single attachment mutation path.
*
* FIND:workcenter-attachment-ingress
* INVARIANT: The live draft receives a file before OPFS persistence, so a hung
* worker cannot hide an attachment the user just picked or dropped.
*/
var toRef = (ref) => ({ ...ref });
var asFile = (value) => {
	if (typeof File !== "undefined" && value instanceof File) return value;
	const blob = value;
	return new File([blob], String(value?.name || "attachment"), {
		type: String(value?.type || blob.type || "application/octet-stream"),
		lastModified: Number(value?.lastModified) || Date.now()
	});
};
var toHex = (bytes) => [...new Uint8Array(bytes)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
var localHash = async (file) => {
	const bytes = await file.arrayBuffer();
	try {
		if (globalThis.crypto?.subtle) return toHex(await globalThis.crypto.subtle.digest("SHA-256", bytes));
	} catch {}
	let hash = 2166136261;
	for (const byte of new Uint8Array(bytes)) hash = Math.imul(hash ^ byte, 16777619);
	return `fnv-${(hash >>> 0).toString(16)}-${file.size}`;
};
var nameForUrl = (url) => {
	try {
		return new URL(url).hostname || "link";
	} catch {
		return "link";
	}
};
/** Owns draft attachment state, file identity, and preview URL lifecycle. */
var WorkCenterAttachmentIngress = class {
	options;
	previewUrls = /* @__PURE__ */ new WeakMap();
	filesByHash = /* @__PURE__ */ new Map();
	constructor(options) {
		this.options = options;
	}
	async addFiles(files) {
		const added = [];
		for (const incoming of files) {
			const file = asFile(incoming);
			const validation = validateReadableFileForIngress(file);
			if (!validation.ok) {
				this.options.onRejected?.(validation.reason || "Unsupported file");
				continue;
			}
			const hash = await localHash(file);
			if (this.filesByHash.has(hash) || this.options.state.draft.attachments.some((item) => item.hash === hash)) continue;
			const ref = {
				hash,
				path: "",
				name: file.name || "attachment",
				type: file.type || "application/octet-stream",
				size: file.size,
				lastModified: file.lastModified || Date.now()
			};
			this.options.state.draft.attachments.push(ref);
			this.options.state.files.push(file);
			this.filesByHash.set(ref.hash, file);
			added.push(ref);
			this.persistInBackground(file, ref);
		}
		if (added.length) this.options.onChanged?.();
		return added;
	}
	async persistInBackground(file, ref) {
		try {
			const stored = toRef(await this.options.store.put(file));
			const draftRef = this.options.state.draft.attachments.find((item) => item.hash === ref.hash);
			if (!draftRef) return;
			if (this.options.state.draft.attachments.find((item) => item !== draftRef && item.hash === stored.hash)) {
				this.remove(ref.hash);
				return;
			}
			this.filesByHash.set(stored.hash, file);
			Object.assign(draftRef, stored);
			this.options.onChanged?.();
		} catch {
			try {
				const hash = await localHash(file);
				const draftRef = this.options.state.draft.attachments.find((item) => item.hash === ref.hash);
				if (draftRef && !this.filesByHash.has(hash)) draftRef.hash = hash;
				this.filesByHash.set(hash, file);
			} catch {}
		}
	}
	/** Store a URL as a local text file while retaining link-card metadata. */
	async addUrl(url) {
		try {
			const parsed = new URL(url);
			if (!["http:", "https:"].includes(parsed.protocol)) return null;
			const file = new File([parsed.toString()], `${nameForUrl(parsed.toString())}.url`, { type: "text/uri-list" });
			const [ref] = await this.addFiles([file]);
			if (!ref) return null;
			ref.url = parsed.toString();
			const draftRef = this.options.state.draft.attachments.find((item) => item.hash === ref.hash);
			if (draftRef) draftRef.url = ref.url;
			this.options.onChanged?.();
			return ref;
		} catch {
			this.options.onRejected?.("Invalid URL attachment");
			return null;
		}
	}
	async hydrate(refs) {
		const files = [];
		for (const ref of refs) {
			const file = await this.resolve(ref);
			if (!file) continue;
			files.push(file);
		}
		return files;
	}
	async resolve(ref) {
		const cached = this.filesByHash.get(ref.hash);
		if (cached) return cached;
		const file = await this.options.store.get(ref);
		if (file) this.filesByHash.set(ref.hash, file);
		return file;
	}
	remove(hash) {
		if (!hash) return;
		const file = this.filesByHash.get(hash);
		if (file) this.revokePreview(file);
		this.filesByHash.delete(hash);
		this.options.state.draft.attachments = this.options.state.draft.attachments.filter((attachment) => attachment.hash !== hash);
		this.options.state.files = this.options.state.draft.attachments.map((attachment) => this.filesByHash.get(attachment.hash)).filter((candidate) => Boolean(candidate));
		this.options.onChanged?.();
	}
	/** Blob URL for any stored file so the viewer can open PDFs and downloads, not only image thumbs. */
	objectUrlFor(file) {
		const existing = this.previewUrls.get(file);
		if (existing) return existing;
		try {
			const url = URL.createObjectURL(file);
			this.previewUrls.set(file, url);
			return url;
		} catch {
			return null;
		}
	}
	getPreviewUrl(file) {
		if (!file.type.startsWith("image/")) return null;
		return this.objectUrlFor(file);
	}
	revokePreview(file) {
		const url = this.previewUrls.get(file);
		if (url) URL.revokeObjectURL(url);
		this.previewUrls.delete(file);
	}
	revokeAllPreviews() {
		for (const file of this.filesByHash.values()) this.revokePreview(file);
	}
	fileFor(ref) {
		return this.filesByHash.get(ref.hash) || null;
	}
};
//#endregion
//#region ../../modules/views/workcenter-view/src/ts/WorkCenterSessionPersistence.ts
/**
* OPFS adapter for the single persisted Work Center conversation.
*
* FIND:workcenter-session-persistence
* WHY: The state machine remains testable against memory while this adapter
* owns the physical OPFS namespace and never serializes File bytes to JSON.
*/
var WORKCENTER_OPFS_NAMESPACE = "/user/workcenter";
var MANIFEST_PATH = "session.json";
var createWorkCenterSessionPersistence = (store = createContentAddressedStore(WORKCENTER_OPFS_NAMESPACE)) => ({
	load: () => store.readJson(MANIFEST_PATH),
	save: (snapshot) => store.writeJson(MANIFEST_PATH, snapshot),
	clear: () => store.clear()
});
var createWorkCenterAttachmentStore = () => createContentAddressedStore(WORKCENTER_OPFS_NAMESPACE);
//#endregion
//#region ../../modules/views/workcenter-view/src/ts/WorkCenterDocumentPreparation.ts
var extensionOf = (file) => file.name.split(".").pop()?.trim().toLowerCase() || "";
var kindOf = (file) => {
	const type = file.type.toLowerCase();
	const extension = extensionOf(file);
	if (type.startsWith("image/")) return "image";
	if (type.startsWith("text/") || [
		"json",
		"xml",
		"yaml",
		"yml",
		"toml",
		"ini",
		"cfg",
		"conf",
		"js",
		"ts",
		"tsx",
		"jsx",
		"css",
		"scss",
		"html",
		"htm",
		"md"
	].includes(extension)) return "text";
	if (type === "application/pdf" || extension === "pdf") return "pdf";
	if (type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || extension === "docx") return "docx";
	if (type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || extension === "xlsx") return "xlsx";
	return "unknown";
};
var dataUrlToFile = async (url, name) => {
	try {
		const blob = await (await fetch(url)).blob();
		return new File([blob], name, { type: blob.type || "image/png" });
	} catch {
		return null;
	}
};
var extractPdf = async (file) => {
	const [{ getDocument, GlobalWorkerOptions }, worker] = await Promise.all([__vitePreload(() => import("../vendor/pdfjs-dist.js").then((n) => n.n), __vite__mapDeps([10,1,5]), import.meta.url), __vitePreload(() => import("../vendor/pdfjs-dist.js").then((n) => n.t), __vite__mapDeps([10,1,5]), import.meta.url)]);
	if (!GlobalWorkerOptions.workerSrc) GlobalWorkerOptions.workerSrc = worker.default;
	const document = await getDocument({ data: new Uint8Array(await file.arrayBuffer()) }).promise;
	const pages = [];
	for (let pageNumber = 1; pageNumber <= document.numPages; pageNumber += 1) {
		const text = (await (await document.getPage(pageNumber)).getTextContent()).items.map((item) => "str" in item ? item.str : "").join(" ").trim();
		if (text) pages.push(`## Page ${pageNumber}\n${text}`);
	}
	return { text: pages.join("\n\n") };
};
var extractDocx = async (file) => {
	const mammothModule = await __vitePreload(() => import("../vendor/mammoth.js").then((n) => /* @__PURE__ */ __toESM(n.t(), 1)), __vite__mapDeps([11,1,12,13,14,15,16,17]), import.meta.url);
	const html = (await (mammothModule.default ?? mammothModule).convertToHtml({ arrayBuffer: await file.arrayBuffer() })).value;
	const document = new DOMParser().parseFromString(html, "text/html");
	const images = await Promise.all([...document.querySelectorAll("img[src^='data:image/']")].map((image, index) => dataUrlToFile(image.getAttribute("src") || "", `${file.name.replace(/\.docx$/i, "")}-image-${index + 1}.png`)));
	return {
		text: document.body.textContent?.trim() || "",
		images: images.filter((image) => image instanceof File)
	};
};
var extractXlsx = async (file) => {
	const xlsxModule = await __vitePreload(() => import("../vendor/xlsx.js").then((n) => n.t), __vite__mapDeps([18,1]), import.meta.url);
	const xlsx = xlsxModule.default ?? xlsxModule;
	const workbook = xlsx.read(await file.arrayBuffer(), { type: "array" });
	return { text: workbook.SheetNames.map((name) => {
		const sheet = workbook.Sheets[name];
		return `## Sheet: ${name}\n${sheet ? xlsx.utils.sheet_to_csv(sheet) : ""}`.trim();
	}).filter(Boolean).join("\n\n") };
};
var defaultParsers = {
	pdf: extractPdf,
	docx: extractDocx,
	xlsx: extractXlsx
};
/** Local document preparation facade with injectable parsers for contract tests. */
var WorkCenterDocumentPreparer = class {
	parsers;
	constructor(parsers = {}) {
		this.parsers = {
			...defaultParsers,
			...parsers
		};
	}
	async prepare(original) {
		const kind = kindOf(original);
		try {
			if (kind === "image") return {
				original,
				kind,
				images: []
			};
			if (kind === "text") return {
				original,
				kind,
				fallbackText: await original.text(),
				images: []
			};
			if (kind === "unknown") return {
				original,
				kind,
				images: [],
				error: `Unsupported attachment type: ${original.type || original.name}`
			};
			const result = await this.parsers[kind](original);
			return {
				original,
				kind,
				fallbackText: result.text,
				images: result.images ?? []
			};
		} catch (error) {
			return {
				original,
				kind,
				images: [],
				error: error instanceof Error ? error.message : String(error)
			};
		}
	}
};
//#endregion
//#region ../../modules/views/workcenter-view/src/ts/WorkCenter.ts
var WorkCenter_exports = /* @__PURE__ */ __exportAll({ WorkCenterManager: () => WorkCenterManager });
var MATH_DELIMITER_PATTERN = /\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|(?<!\$)\$[^$\n]+\$|\\\([\s\S]*?\\\)/;
var FENCED_CODE_PATTERN = /(^|\n)(`{3,}|~{3,})[^\n]*\n[\s\S]*?\n\2(?=\n|$)/g;
var INLINE_CODE_PATTERN = /`[^`\n]+`/g;
function maskCodeSegments(markdown) {
	const maskedValues = [];
	const tokenPrefix = "__MD_MASK_";
	const tokenSuffix = "__";
	const mask = (value) => value.replace(FENCED_CODE_PATTERN, (segment) => {
		const token = `${tokenPrefix}${maskedValues.length}${tokenSuffix}`;
		maskedValues.push(segment);
		return token;
	});
	const maskInline = (value) => value.replace(INLINE_CODE_PATTERN, (segment) => {
		const token = `${tokenPrefix}${maskedValues.length}${tokenSuffix}`;
		maskedValues.push(segment);
		return token;
	});
	return {
		masked: maskInline(mask(markdown)),
		restore: (value) => value.replace(/__MD_MASK_(\d+)__/g, (_, index) => maskedValues[Number(index)] ?? "")
	};
}
f?.use?.(src_default({
	throwOnError: false,
	nonStandard: true,
	output: "mathml",
	strict: false
}), { hooks: { preprocess: (markdown) => {
	if (!MATH_DELIMITER_PATTERN.test(markdown)) return markdown;
	const { masked, restore } = maskCodeSegments(markdown);
	const katexNode = document.createElement("div");
	katexNode.textContent = masked;
	renderMathInElement(katexNode, {
		throwOnError: false,
		nonStandard: true,
		output: "mathml",
		strict: false,
		delimiters: [
			{
				left: "$$",
				right: "$$",
				display: true
			},
			{
				left: "\\[",
				right: "\\]",
				display: true
			},
			{
				left: "$",
				right: "$",
				display: false
			},
			{
				left: "\\(",
				right: "\\)",
				display: false
			}
		]
	});
	return restore(katexNode.innerHTML);
} } });
var WorkCenterManager = class {
	state;
	deps;
	ui;
	fileOps;
	shareTarget;
	templates;
	voice;
	actions;
	dataProcessing;
	attachments;
	prompts;
	results;
	history;
	events;
	session;
	attachmentIngress;
	documentPreparer;
	sessionReady;
	processedMessageIds = /* @__PURE__ */ new Set();
	constructor(dependencies) {
		this.deps = dependencies;
		this.state = WorkCenterStateManager.createDefaultState();
		this.session = new WorkCenterSession(createWorkCenterSessionPersistence());
		this.attachmentIngress = new WorkCenterAttachmentIngress({
			state: this.state,
			store: createWorkCenterAttachmentStore(),
			onChanged: () => {
				this.session.setDraft(this.state.draft);
				this.session.persistDraft().catch(() => {
					this.deps.showMessage("Unable to save the attachment draft");
				});
				this.deps.onFilesChanged?.();
				this.paintLiveConversation("if-idle");
			},
			onRejected: (reason) => this.deps.showMessage(reason)
		});
		this.documentPreparer = new WorkCenterDocumentPreparer();
		this.sessionReady = this.hydrateSession();
		this.dataProcessing = new WorkCenterDataProcessing();
		this.templates = new WorkCenterTemplates(dependencies);
		this.voice = new WorkCenterVoice(dependencies);
		this.fileOps = new WorkCenterFileOps(dependencies);
		this.history = new WorkCenterHistory(dependencies);
		this.attachments = new WorkCenterAttachments(dependencies, this.fileOps);
		this.prompts = new WorkCenterPrompts(dependencies, this.templates, this.voice);
		this.results = new WorkCenterResults(dependencies, this.dataProcessing);
		this.ui = new WorkCenterUI(dependencies, this.attachments, this.prompts, this.results, this.history, {
			fileFor: (ref) => this.attachmentIngress.fileFor(ref),
			getPreviewUrl: (file) => this.attachmentIngress.getPreviewUrl(file)
		});
		this.shareTarget = new WorkCenterShareTarget(dependencies, this.fileOps, async (input) => this.handleIncomingContent(input, "text"));
		this.actions = new WorkCenterActions(dependencies, this.ui, this.fileOps, this.dataProcessing, this.results, this.history, this.templates, {
			session: this.session,
			attachments: this.attachmentIngress,
			documentPreparer: this.documentPreparer,
			syncFromSession: () => this.syncStateFromSession()
		});
		this.events = new WorkCenterEvents(dependencies, this.actions, this.templates, this.voice, this.history, this.attachmentIngress, this.state);
		this.shareTarget.initShareTargetListener(this.state);
		registerComponent("workcenter-core", "workcenter");
		this.sessionReady.then(() => this.shareTarget.processQueuedMessages(this.state));
		const pendingMessages = initializeComponent("workcenter-core");
		for (const message of pendingMessages) {
			console.log(`[WorkCenter] Processing pending message:`, message);
			this.handleExternalMessage(message);
		}
		if (typeof globalThis !== "undefined") globalThis?.addEventListener?.("hashchange", () => {
			this.attachments.updateDropHint?.();
		});
	}
	async hydrateSession() {
		try {
			const snapshot = await this.session.hydrate();
			if (snapshot.messages.length > 0 || Boolean(snapshot.draft.content) || snapshot.draft.attachments.length > 0) {
				const refs = [...snapshot.draft.attachments, ...snapshot.messages.flatMap((message) => message.attachments)];
				await this.attachmentIngress.hydrate(refs);
				this.state.files = snapshot.draft.attachments.map((ref) => this.attachmentIngress.fileFor(ref)).filter((file) => file !== null);
			} else if (this.state.draft.content) {
				this.session.setDraft(this.state.draft);
				await this.session.persistDraft();
			}
			this.syncStateFromSession(false);
			this.session.setDraft(this.state.draft);
		} catch (error) {
			console.warn("[WorkCenter] Failed to hydrate local session:", error);
			this.state.sessionHydrated = true;
		} finally {
			this.paintLiveConversation();
		}
	}
	/** Prefer a connected chat root so GLit remounts do not steal the live composer. */
	adoptLiveRoot(root) {
		this.ui.setContainer(root);
		this.events.setContainer(root);
		this.events.bindLiveChats();
	}
	/** Paint transcript + draft on every live chat root and bind Send/Enter there. */
	paintLiveConversation(syncPrompt = "replace") {
		const hosts = this.liveChatHosts();
		let painted = false;
		for (const host of hosts) {
			if (!host.querySelector("[data-workcenter-transcript]")) continue;
			this.ui.paintConversation(this.state, host, syncPrompt);
			painted = true;
		}
		this.events.bindLiveChats();
		if (!painted) this.deps.render?.();
	}
	liveChatHosts() {
		const hosts = /* @__PURE__ */ new Set();
		const current = this.ui?.getContainer();
		if (current) hosts.add(current);
		if (typeof document !== "undefined") document.querySelectorAll(".workcenter-chat").forEach((node) => hosts.add(node));
		return hosts;
	}
	/** Paint chips on every live chat root — GLit/shell remounts can leave a detached SoT node. */
	paintDraftAttachments() {
		this.paintLiveConversation();
	}
	syncStateFromSession(render = true) {
		const snapshot = this.session.snapshot();
		const liveAttachments = this.state.draft?.attachments || [];
		this.state.messages = snapshot.messages;
		this.state.draft = snapshot.draft;
		for (const ref of liveAttachments) if (!this.state.draft.attachments.some((item) => item.hash === ref.hash)) this.state.draft.attachments.push(ref);
		this.state.currentPrompt = snapshot.draft.content;
		this.state.sessionEpoch = snapshot.epoch;
		this.state.sessionHydrated = true;
		this.deps.onFilesChanged?.();
		if (render) this.paintLiveConversation();
	}
	async addFiles(files) {
		await this.sessionReady;
		await this.attachmentIngress.addFiles(files);
	}
	async setPrompt(prompt) {
		await this.sessionReady;
		this.state.draft.content = String(prompt || "");
		this.state.currentPrompt = this.state.draft.content;
		this.session.setDraft(this.state.draft);
		await this.session.persistDraft();
		this.deps.render?.();
	}
	async handleDroppedContent(content, sourceType) {
		await this.sessionReady;
		if (sourceType === "url") {
			await this.attachmentIngress.addUrl(content);
			return;
		}
		await this.appendDraftText(content);
	}
	async handlePastedContent(content, sourceType) {
		return this.handleDroppedContent(content, sourceType);
	}
	async appendDraftText(content) {
		const text = String(content || "").trim();
		if (!text) return;
		this.state.draft.content = [this.state.draft.content, text].filter(Boolean).join(this.state.draft.content ? "\n" : "");
		this.state.currentPrompt = this.state.draft.content;
		this.session.setDraft(this.state.draft);
		await this.session.persistDraft();
		this.deps.render?.();
	}
	/** Normalize all channel/share payloads into the active conversation draft. */
	async handleIncomingContent(data, contentType) {
		await this.sessionReady;
		try {
			const files = [];
			if (Array.isArray(data?.files)) files.push(...data.files.filter((entry) => entry instanceof File));
			if (data?.file instanceof File) files.push(data.file);
			if (typeof Blob !== "undefined" && data?.blob instanceof Blob) files.push(new File([data.blob], String(data.filename || `attachment-${Date.now()}.${contentType === "markdown" ? "md" : "txt"}`), { type: data.blob.type || "application/octet-stream" }));
			if (Array.isArray(data?.attachments)) for (const attachment of data.attachments) {
				const candidate = attachment?.data;
				if (candidate instanceof File) files.push(candidate);
				else if (typeof Blob !== "undefined" && candidate instanceof Blob) files.push(new File([candidate], String(attachment?.name || `attachment-${Date.now()}`), { type: candidate.type || "application/octet-stream" }));
			}
			if (!files.length) files.push(...takeHeldIngressFiles());
			const rawText = data?.text ?? data?.content;
			const text = rawText === void 0 || rawText === null ? "" : typeof rawText === "string" ? rawText : JSON.stringify(rawText, null, 2);
			if (!files.length && (String(data?.filename || "").trim() || text.trim())) files.push(new File([text], String(data?.filename || data?.title || `shared-${Date.now()}.txt`), { type: contentType === "markdown" ? "text/markdown" : "text/plain" }));
			const attached = await this.attachmentIngress.addFiles(files);
			if (typeof data?.url === "string") await this.attachmentIngress.addUrl(data.url);
			if (text.trim() && attached.length === 0) await this.appendDraftText(text);
			if (attached.length) this.deps.showMessage(attached.length === 1 ? `Attached ${attached[0]?.name || "file"}` : `Attached ${attached.length} files`);
		} catch (error) {
			console.warn("[WorkCenter] Failed to attach incoming content:", error);
			this.deps.showMessage("Failed to attach content");
		}
	}
	/**
	* Public entry for Basic/Main unified-messaging handler and pending inbox replay.
	* Handles share-target inputs/results and general content-share attachment.
	*/
	async handleExternalMessage(message) {
		if (!message) return;
		await this.sessionReady;
		const messageId = typeof message?.id === "string" ? message.id : "";
		if (messageId) {
			if (this.processedMessageIds.has(messageId)) return;
			this.processedMessageIds.add(messageId);
			if (this.processedMessageIds.size > 256) {
				const iter = this.processedMessageIds.values().next();
				if (!iter.done) this.processedMessageIds.delete(iter.value);
			}
		}
		if (message.type === "share-target-input" && message.data) {
			await this.handleIncomingContent(message.data, message.contentType || "text");
			return;
		}
		if (message.type === "share-target-result" && message.data) {
			const note = String(message.data.content ?? message.data.rawData ?? "").trim();
			if (note) {
				await this.session.appendAssistantNote(note);
				this.syncStateFromSession(false);
			}
			await this.shareTarget.addShareTargetResult(this.state, message.data);
			this.ui.updateDataPipeline(this.state);
			return;
		}
		if (message.type === "ai-result" && message.data) {
			const note = String(message.data.data ?? message.data.content ?? message.data.text ?? "").trim();
			if (note && message.data.success !== false) {
				await this.session.appendAssistantNote(note);
				this.syncStateFromSession(false);
			}
			await this.shareTarget.handleAIResult(this.state, message.data);
			this.ui.updateDataPipeline(this.state);
			return;
		}
		if ((message.type === "content-share" || message.type === "content-attach" || message.type === "file-attach") && message.data) {
			await this.handleIncomingContent(message.data, message.contentType || "text");
			return;
		}
	}
	getState() {
		return this.state;
	}
	destroy() {
		this.ui.setContainer(null);
		this.attachments.setContainer(null);
		this.prompts.setContainer(null);
		this.results.setContainer(null);
		this.history.setContainer(null);
		this.attachmentIngress.revokeAllPreviews();
		console.log("[WorkCenter] WorkCenterManager destroyed");
	}
	renderWorkCenterView() {
		const container = this.ui.renderWorkCenterView(this.state);
		this.events.setContainer(container);
		this.events.setupWorkCenterEvents();
		this.ui.updateFileList(this.state);
		this.ui.updateFileCounter(this.state);
		this.history.updateRecentHistory(this.state);
		this.templates.fillInstructionSelects(container, this.state);
		return container;
	}
};
//#endregion
export { WorkCenter_exports as n, WorkCenterManager as t };
