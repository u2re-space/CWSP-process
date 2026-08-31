/**
 * Pure Responses-input builder for a Work Center turn.
 *
 * FIND:workcenter-turn-input
 * WHY: Keeping this free of settings and fetch code makes direct-file behavior
 * testable and lets the provider policy choose a local fallback deterministically.
 */
import { MAX_DIRECT_FILE_BYTES } from "../shared/file-limits";
import type { ProcessDataWithInstructionOptions } from "../shared/types";

export type WorkCenterTurnAttachment = {
    attachmentId: string;
    original: File;
    kind: "image" | "text" | "pdf" | "docx" | "xlsx" | "unknown";
    fallbackText?: string;
    images?: File[];
    error?: string;
};

export type WorkCenterTurnRequest = {
    messages: Array<{ role: "user" | "assistant"; content: string }>;
    attachments: WorkCenterTurnAttachment[];
    instruction: string;
    options: ProcessDataWithInstructionOptions;
    signal?: AbortSignal;
};

export type WorkCenterTurnInput = {
    input: Array<Record<string, unknown>>;
    usedDirectFile: boolean;
};

export type WorkCenterTurnBuildOptions = {
    allowDirectFile?: boolean;
    directFileByteLimit?: number;
};

const attachmentLabel = (attachment: WorkCenterTurnAttachment): string =>
    `\n\n--- Attachment: ${attachment.original.name || attachment.attachmentId} ---\n`;

const encodeBase64 = (bytes: Uint8Array): string => {
    const BufferCtor = (globalThis as {
        Buffer?: { from(bytes: Uint8Array): { toString(encoding: string): string } };
    }).Buffer;
    if (BufferCtor) return BufferCtor.from(bytes).toString("base64");

    let binary = "";
    const chunkSize = 0x8000;
    for (let offset = 0; offset < bytes.length; offset += chunkSize) {
        const chunk = bytes.subarray(offset, offset + chunkSize);
        binary += String.fromCharCode(...chunk);
    }
    return btoa(binary);
};

const fileDataUrl = async (file: File): Promise<string> => {
    const buffer = await file.arrayBuffer();
    const type = file.type || "application/octet-stream";
    return `data:${type};base64,${encodeBase64(new Uint8Array(buffer))}`;
};

const isDirectDocument = (attachment: WorkCenterTurnAttachment): boolean =>
    ["pdf", "docx", "xlsx"].includes(attachment.kind) &&
    !attachment.error &&
    attachment.original.size <= MAX_DIRECT_FILE_BYTES;

const fallbackParts = (attachment: WorkCenterTurnAttachment): Array<Record<string, unknown>> => {
    const text = attachment.fallbackText?.trim();
    if (text) {
        return [{
            type: "input_text",
            text: `${attachmentLabel(attachment)}${text}`
        }];
    }
    return [{
        type: "input_text",
        text: `${attachmentLabel(attachment)}[Attachment could not be prepared: ${attachment.error || "no readable text"}]`
    }];
};

/**
 * Produces Responses API message content with direct files only for eligible
 * document types. All other attachments have a readable local fallback.
 */
export const buildWorkCenterTurnInput = async (
    request: WorkCenterTurnRequest,
    options: WorkCenterTurnBuildOptions = {}
): Promise<WorkCenterTurnInput> => {
    const allowDirectFile = options.allowDirectFile !== false;
    const directFileByteLimit = options.directFileByteLimit ?? MAX_DIRECT_FILE_BYTES;
    const input = request.messages.map((message) => ({
        type: "message",
        role: message.role,
        content: [{ type: "input_text", text: message.content }]
    })) as Array<Record<string, unknown>>;

    let target = input.at(-1) as {
        role?: string;
        content?: Array<Record<string, unknown>>;
    } | undefined;
    if (!target || target.role !== "user") {
        target = { type: "message", role: "user", content: [] };
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

        if (
            allowDirectFile &&
            isDirectDocument(attachment) &&
            attachment.original.size <= directFileByteLimit
        ) {
            content.push({
                type: "input_file",
                filename: attachment.original.name || "attachment",
                file_data: await fileDataUrl(attachment.original)
            });
            usedDirectFile = true;
            continue;
        }

        content.push(...fallbackParts(attachment));
        for (const image of attachment.images || []) {
            content.push({
                type: "input_image",
                detail: "auto",
                image_url: await fileDataUrl(image)
            });
        }
    }

    return { input, usedDirectFile };
};

export const isFileCapabilityRejection = (error?: string): boolean =>
    /(?:input_file|file_data|unsupported\s+(?:file|input)|file\s+(?:input|type).*(?:unsupported|invalid))/i
        .test(String(error || ""));
