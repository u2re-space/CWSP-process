import { cn as H } from "../com/app.js";
import { t as quill_default } from "../vendor/quill.js";
//#region ../../modules/views/editor-view/src/ts/QuillEditor.ts
var QuillEditor = class {
	options;
	quill = null;
	container = null;
	autoSaveTimeout = null;
	content = "";
	constructor(options = {}) {
		this.options = {
			initialContent: "",
			placeholder: "Start writing...",
			theme: "snow",
			toolbar: [
				[{ "header": [
					1,
					2,
					3,
					4,
					5,
					6,
					false
				] }],
				[
					"bold",
					"italic",
					"underline",
					"strike"
				],
				[{ "color": [] }, { "background": [] }],
				[{ "list": "ordered" }, { "list": "bullet" }],
				[{ "script": "sub" }, { "script": "super" }],
				[{ "indent": "-1" }, { "indent": "+1" }],
				[{ "align": [] }],
				["blockquote", "code-block"],
				[
					"link",
					"image",
					"video"
				],
				["clean"]
			],
			autoSave: true,
			autoSaveDelay: 2e3,
			...options
		};
		this.content = this.options.initialContent || "";
	}
	/**
	* Render the Quill editor
	*/
	render() {
		const container = H`<div class="quill-editor-container">
      <div class="editor-header">
        <h3>Rich Text Editor</h3>
        <div class="editor-actions">
          <button class="btn btn-icon" data-action="clear" title="Clear content" aria-label="Clear content">
            <ui-icon icon="trash" size="18" icon-style="duotone"></ui-icon>
            <span class="btn-text">Clear</span>
          </button>
          <button class="btn btn-icon primary" data-action="save" title="Save content" aria-label="Save content">
            <ui-icon icon="floppy-disk" size="18" icon-style="duotone"></ui-icon>
            <span class="btn-text">Save</span>
          </button>
          <button class="btn btn-icon" data-action="export-html" title="Export as HTML" aria-label="Export as HTML">
            <ui-icon icon="code" size="18" icon-style="duotone"></ui-icon>
            <span class="btn-text">HTML</span>
          </button>
          <button class="btn btn-icon" data-action="export-text" title="Export as text" aria-label="Export as text">
            <ui-icon icon="file-text" size="18" icon-style="duotone"></ui-icon>
            <span class="btn-text">Text</span>
          </button>
        </div>
      </div>

      <div class="quill-wrapper">
        <div class="quill-editor" data-editor></div>
      </div>

      <div class="editor-footer">
        <div class="editor-stats">
          <span class="word-count">0 words</span>
          <span class="char-count">0 characters</span>
        </div>
        <div class="editor-info">
          <span class="format-indicator">Rich Text</span>
        </div>
      </div>
    </div>`;
		this.initializeQuill(container);
		return container;
	}
	/**
	* Get current content as HTML
	*/
	getContent() {
		if (!this.quill) return this.content;
		return this.quill.root.innerHTML;
	}
	/**
	* Get current content as plain text
	*/
	getText() {
		if (!this.quill) return "";
		return this.quill.getText();
	}
	/**
	* Get current content as Delta format (Quill's internal format)
	*/
	getContents() {
		if (!this.quill) return null;
		return this.quill.getContents();
	}
	/**
	* Set content from HTML
	*/
	setContent(content) {
		this.content = content;
		if (this.quill) {
			this.quill.root.innerHTML = content;
			this.updateStats();
		}
	}
	/**
	* Set content from Delta format
	*/
	setContents(delta) {
		if (this.quill) {
			this.quill.setContents(delta);
			this.updateStats();
		}
	}
	/**
	* Focus the editor
	*/
	focus() {
		if (this.quill) this.quill.focus();
	}
	/**
	* Clear the editor
	*/
	clear() {
		if (this.quill) {
			this.quill.setContents([]);
			this.content = "";
			this.updateStats();
			this.options.onContentChange?.("");
		}
	}
	/**
	* Save the content
	*/
	save() {
		const content = this.getContent();
		this.content = content;
		this.options.onSave?.(content);
	}
	/**
	* Export as HTML
	*/
	exportHTML() {
		const content = this.getContent();
		this.downloadContent(content, "rich-text-content.html", "text/html");
	}
	/**
	* Export as plain text
	*/
	exportText() {
		const content = this.getText();
		this.downloadContent(content, "rich-text-content.txt", "text/plain");
	}
	initializeQuill(container) {
		const editorElement = container.querySelector("[data-editor]");
		if (!editorElement) {
			console.error("Quill editor element not found");
			return;
		}
		this.quill = new quill_default(editorElement, {
			theme: this.options.theme,
			placeholder: this.options.placeholder,
			modules: { toolbar: this.options.toolbar }
		});
		if (this.content) this.quill.root.innerHTML = this.content;
		this.setupEventListeners(container);
		this.updateStats();
	}
	setupEventListeners(container) {
		if (!this.quill) return;
		this.quill.on("text-change", () => {
			this.handleContentChange();
		});
		container.addEventListener("click", (e) => {
			const action = e.target.getAttribute("data-action");
			if (action) {
				e.preventDefault();
				this.handleAction(action);
			}
		});
		this.quill.on("selection-change", () => {
			this.updateStats();
		});
	}
	handleContentChange() {
		const content = this.getContent();
		this.content = content;
		this.updateStats();
		this.options.onContentChange?.(content);
		if (this.options.autoSave) this.scheduleAutoSave();
	}
	handleAction(action) {
		switch (action) {
			case "clear":
				this.clear();
				break;
			case "save":
				this.save();
				break;
			case "export-html":
				this.exportHTML();
				break;
			case "export-text": this.exportText();
		}
	}
	updateStats() {
		if (!this.quill || !this.container) return;
		const text = this.quill.getText();
		const words = text.trim() ? text.trim().split(/\s+/).length : 0;
		const chars = text.length;
		const wordCountEl = this.container.querySelector(".word-count");
		const charCountEl = this.container.querySelector(".char-count");
		if (wordCountEl) wordCountEl.textContent = `${words} words`;
		if (charCountEl) charCountEl.textContent = `${chars} characters`;
	}
	scheduleAutoSave() {
		if (this.autoSaveTimeout) clearTimeout(this.autoSaveTimeout);
		this.autoSaveTimeout = globalThis?.setTimeout?.(() => {
			this.save();
		}, this.options.autoSaveDelay);
	}
	downloadContent(content, filename, mimeType) {
		const blob = new Blob([content], { type: mimeType });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = filename;
		document.body.append(link);
		link.click();
		link.remove();
		URL.revokeObjectURL(url);
	}
	/**
	* Clean up resources
	*/
	destroy() {
		if (this.autoSaveTimeout) globalThis?.clearTimeout?.(this.autoSaveTimeout);
		if (this.quill) this.quill = null;
	}
};
/**
* Create a Quill editor instance
*/
function createQuillEditor(options) {
	return new QuillEditor(options);
}
/**
* Convert Quill Delta to HTML
*/
function deltaToHtml(delta) {
	if (!delta || !delta.ops) return "";
	let html = "";
	let inList = false;
	let listType = "";
	for (const op of delta.ops) if (typeof op.insert === "string") {
		let text = op.insert;
		let attributes = op.attributes || {};
		if (text.includes("\n")) {
			const lines = text.split("\n");
			for (let i = 0; i < lines.length; i++) {
				let line = lines[i];
				if (attributes.bold) line = `<strong>${line}</strong>`;
				if (attributes.italic) line = `<em>${line}</em>`;
				if (attributes.underline) line = `<u>${line}</u>`;
				if (attributes.strike) line = `<s>${line}</s>`;
				if (attributes.color) line = `<span style="color: ${attributes.color}">${line}</span>`;
				if (attributes.background) line = `<span style="background-color: ${attributes.background}">${line}</span>`;
				if (attributes.list) {
					if (!inList || listType !== attributes.list) {
						if (inList) html += "</ul>";
						html += attributes.list === "ordered" ? "<ol>" : "<ul>";
						inList = true;
						listType = attributes.list;
					}
					html += `<li>${line}</li>`;
				} else {
					if (inList) {
						html += "</ul>";
						inList = false;
					}
					if (attributes.header) html += `<h${attributes.header}>${line}</h${attributes.header}>`;
					else if (attributes.blockquote) html += `<blockquote>${line}</blockquote>`;
					else if (attributes["code-block"]) html += `<pre><code>${line}</code></pre>`;
					else html += `<p>${line}</p>`;
				}
				if (i < lines.length - 1) {}
			}
		} else {
			if (attributes.bold) text = `<strong>${text}</strong>`;
			if (attributes.italic) text = `<em>${text}</em>`;
			if (attributes.underline) text = `<u>${text}</u>`;
			if (attributes.strike) text = `<s>${text}</s>`;
			if (attributes.color) text = `<span style="color: ${attributes.color}">${text}</span>`;
			if (attributes.background) text = `<span style="background-color: ${attributes.background}">${text}</span>`;
			html += text;
		}
	}
	if (inList) html += "</ul>";
	return html;
}
//#endregion
export { QuillEditor, createQuillEditor, deltaToHtml };
