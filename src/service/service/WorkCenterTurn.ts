/**
 * Public Work Center turn entry point.
 *
 * FIND:workcenter-turn
 * WHY: Keep provider execution separate from the pure request builder so UI
 * contracts can be verified without loading application settings or workers.
 * INVARIANT: Process PWA posts to /api/process on process.u2re.space / ai.u2re.space first.
 */
import { loadSettings } from "com/config/Settings";
import {
    isProcessApiUnavailable,
    postProcessApi,
    processApiAuthFromSettings,
    readProcessApiResultText
} from "com/routing/api/process-api";
import { processDataWithInstruction } from "../processing/unified";
import type { ProcessDataWithInstructionResult } from "../shared/types";
import {
    WorkCenterTurnService,
    type WorkCenterTurnExecutor
} from "./WorkCenterTurnPolicy";
import type { WorkCenterTurnRequest } from "./WorkCenterTurnInput";

export * from "./WorkCenterTurnInput";
export * from "./WorkCenterTurnPolicy";

const flattenResponsesInput = (input: Array<Record<string, unknown>>): string => {
    const texts: string[] = [];
    for (const item of input) {
        if (typeof item === "string") {
            texts.push(item);
            continue;
        }
        const content = item?.content;
        if (typeof content === "string") texts.push(content);
        if (!Array.isArray(content)) continue;
        for (const part of content) {
            if (typeof part === "string") texts.push(part);
            else if (part && typeof part === "object" && typeof (part as { text?: unknown }).text === "string") {
                texts.push((part as { text: string }).text);
            }
        }
    }
    return texts.join("\n\n").trim();
};

const hasVisualInput = (input: Array<Record<string, unknown>>): boolean => {
    for (const item of input) {
        const content = item?.content;
        if (!Array.isArray(content)) continue;
        for (const part of content) {
            const type = String((part as { type?: unknown })?.type || "");
            if (type === "input_image" || type === "input_file" || type === "image_url" || type === "image") {
                return true;
            }
        }
    }
    return false;
};

const processApiTurnSignal = (signal?: AbortSignal): AbortSignal | undefined => {
    const timed = typeof AbortSignal !== "undefined" && typeof AbortSignal.timeout === "function"
        ? AbortSignal.timeout(12_000)
        : undefined;
    if (timed && signal && typeof AbortSignal.any === "function") return AbortSignal.any([signal, timed]);
    return timed || signal;
};

const tryProcessApiTurn = async (
    input: Array<Record<string, unknown>>,
    options: Parameters<WorkCenterTurnExecutor>[1]
): Promise<ProcessDataWithInstructionResult | null> => {
    // WHY: /api/process flatten drops images; a hung LAN POST would leave Thinking…
    // after the in-page GPT path already extracted the answer.
    if (hasVisualInput(input)) return null;
    const text = flattenResponsesInput(input);
    if (!text) return null;
    const settings = await loadSettings().catch(() => null);
    const auth = processApiAuthFromSettings(settings);
    const posted = await postProcessApi(
        "processing",
        {
            input: text,
            text,
            mode: "smartRecognize",
            customInstruction: options.instruction || options.customInstruction || undefined
        },
        auth,
        { signal: processApiTurnSignal(options.signal) }
    );
    if (isProcessApiUnavailable(posted) || !posted.json) return null;
    const json = posted.json as { ok?: boolean; error?: string };
    if (json.ok === false) {
        const error = String(json.error || "");
        if (/missing credentials|invalid credentials/i.test(error)) return null;
        return { ok: false, error: error || "Process API failed" };
    }
    const data = readProcessApiResultText(json);
    if (!data) return null;
    return { ok: true, data };
};

const defaultExecutor: WorkCenterTurnExecutor = async (input, options) => {
    const remote = await tryProcessApiTurn(input, options).catch(() => null);
    if (remote) return remote;
    return processDataWithInstruction(input, options);
};

const defaultService = new WorkCenterTurnService();

/** Execute one turn using the app's shared direct-file capability cache. */
export const runWorkCenterTurn = (
    request: WorkCenterTurnRequest
): Promise<ProcessDataWithInstructionResult> => defaultService.run(request, defaultExecutor);
