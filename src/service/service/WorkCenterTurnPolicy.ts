/**
 * Direct-file capability fallback policy for a Work Center turn.
 *
 * FIND:workcenter-turn-policy
 * COMPAT: OpenAI-compatible gateways may support image input while rejecting
 * `input_file`; cache that fact for the lifetime of this app runtime.
 */
import type { ProcessDataWithInstructionOptions, ProcessDataWithInstructionResult } from "../shared/types";
import {
    buildWorkCenterTurnInput,
    isFileCapabilityRejection,
    type WorkCenterTurnInput,
    type WorkCenterTurnRequest
} from "./WorkCenterTurnInput";

export type WorkCenterTurnExecutor = (
    input: Array<Record<string, unknown>>,
    options: ProcessDataWithInstructionOptions,
    metadata: Pick<WorkCenterTurnInput, "usedDirectFile">
) => Promise<ProcessDataWithInstructionResult>;

const cancelledResult = (): ProcessDataWithInstructionResult => ({
    ok: false,
    error: "Cancelled"
});

/** Stateful provider policy with a one-way direct-file incompatibility cache. */
export class WorkCenterTurnService {
    private directFileUnsupported = false;

    async run(
        request: WorkCenterTurnRequest,
        execute: WorkCenterTurnExecutor
    ): Promise<ProcessDataWithInstructionResult> {
        if (request.signal?.aborted) return cancelledResult();

        const requestOptions: ProcessDataWithInstructionOptions = {
            ...request.options,
            instruction: request.instruction,
            signal: request.signal
        };
        const direct = await buildWorkCenterTurnInput(request, {
            allowDirectFile: !this.directFileUnsupported
        });
        if (request.signal?.aborted) return cancelledResult();

        const result = await execute(direct.input, requestOptions, {
            usedDirectFile: direct.usedDirectFile
        });
        if (
            result.ok ||
            !direct.usedDirectFile ||
            request.signal?.aborted ||
            !isFileCapabilityRejection(result.error)
        ) {
            return request.signal?.aborted ? cancelledResult() : result;
        }

        this.directFileUnsupported = true;
        const fallback = await buildWorkCenterTurnInput(request, { allowDirectFile: false });
        if (request.signal?.aborted) return cancelledResult();
        return execute(fallback.input, requestOptions, { usedDirectFile: false });
    }
}
