import type * as Darwin from "../../index.mjs";
/**
 * @example
 *     {}
 */
export interface ListActionsRequest {
    actingAiId?: string;
    targetAiId?: string;
    lifecycle?: Darwin.ListActionsRequestLifecycle;
    cursor?: string;
    limit?: number;
}
