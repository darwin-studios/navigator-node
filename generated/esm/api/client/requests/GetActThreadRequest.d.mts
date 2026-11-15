import type * as Darwin from "../../index.mjs";
/**
 * @example
 *     {
 *         threadId: "threadId"
 *     }
 */
export interface GetActThreadRequest {
    threadId: string;
    cursor?: string;
    limit?: number;
    /** Presentation consumer. Agent returns Markdown and structured facts; human also receives DarwinUI. This does not change identity, permissions or approvals. */
    audience?: Darwin.GetActThreadRequestAudience;
}
