import type * as Darwin from "../../index.mjs";
/**
 * @example
 *     {}
 */
export interface ListNavigatorThreadsRequest {
    /** nextBefore from the previous page. */
    before?: string;
    /** Presentation consumer. Agent returns Markdown and structured facts; human also receives DarwinUI. This does not change identity, permissions or approvals. */
    audience?: Darwin.ListNavigatorThreadsRequestAudience;
}
