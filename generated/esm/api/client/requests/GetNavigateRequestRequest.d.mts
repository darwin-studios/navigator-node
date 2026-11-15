import type * as Darwin from "../../index.mjs";
/**
 * @example
 *     {
 *         conversationId: "conversationId"
 *     }
 */
export interface GetNavigateRequestRequest {
    conversationId: string;
    /** Use conversation.nextBefore to read earlier turns. */
    before?: string;
    /** Presentation consumer. Agent returns Markdown and structured facts; human also receives DarwinUI. This does not change identity, permissions or approvals. */
    audience?: Darwin.GetNavigateRequestRequestAudience;
    /** Guest conversationToken returned by Navigate. */
    "X-Assist-Token"?: string;
}
