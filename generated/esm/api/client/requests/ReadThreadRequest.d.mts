import type * as Darwin from "../../index.mjs";
/**
 * @example
 *     {
 *         threadId: "threadId"
 *     }
 */
export interface ReadThreadRequest {
    threadId: string;
    /** Navigate turn pagination cursor. */
    before?: string;
    /** Act event pagination cursor. */
    cursor?: string;
    /** Act page size. */
    limit?: number;
    /** Presentation consumer. Agent returns Markdown and structured facts; human also receives DarwinUI. This does not change identity, permissions or approvals. */
    audience?: Darwin.ReadThreadRequestAudience;
    /** Guest Navigate session token. */
    "X-Assist-Token"?: string;
}
