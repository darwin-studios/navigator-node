import type * as Darwin from "../../index.mjs";
/**
 * @example
 *     {
 *         sessionId: "sessionId",
 *         operationId: "operationId"
 *     }
 */
export interface GetSessionOperationRequest {
    sessionId: string;
    operationId: string;
    cursor?: string;
    /** Presentation consumer. Agent returns Markdown and structured facts; human also receives DarwinUI. This does not change identity, permissions or approvals. */
    audience?: Darwin.GetSessionOperationRequestAudience;
}
