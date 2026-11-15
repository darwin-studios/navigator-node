import type * as Darwin from "../../index.mjs";
/**
 * @example
 *     {
 *         threadId: "threadId",
 *         operationId: "operationId"
 *     }
 */
export interface GetThreadOperationRequest {
    threadId: string;
    operationId: string;
    cursor?: string;
    /** Presentation consumer. Agent returns Markdown and structured facts; human also receives DarwinUI. This does not change identity, permissions or approvals. */
    audience?: Darwin.GetThreadOperationRequestAudience;
}
