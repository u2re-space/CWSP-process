/**
 * Public Work Center turn entry point.
 *
 * FIND:workcenter-turn
 * WHY: Keep provider execution separate from the pure request builder so UI
 * contracts can be verified without loading application settings or workers.
 */
import { processDataWithInstruction } from "../processing/unified";
import type { ProcessDataWithInstructionResult } from "../shared/types";
import {
    WorkCenterTurnService,
    type WorkCenterTurnExecutor
} from "./WorkCenterTurnPolicy";
import type { WorkCenterTurnRequest } from "./WorkCenterTurnInput";

export * from "./WorkCenterTurnInput";
export * from "./WorkCenterTurnPolicy";

const defaultExecutor: WorkCenterTurnExecutor = async (input, options) =>
    processDataWithInstruction(input, options);

const defaultService = new WorkCenterTurnService();

/** Execute one turn using the app's shared direct-file capability cache. */
export const runWorkCenterTurn = (
    request: WorkCenterTurnRequest
): Promise<ProcessDataWithInstructionResult> => defaultService.run(request, defaultExecutor);
