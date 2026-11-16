import type * as Darwin from '../../index.js';

/**
 * @example
 *     {
 *         actRequestId: "actRequestId"
 *     }
 */
export interface GetRunRequestRequest {
  actRequestId: string;
  /** Include authorized child session messages, actions and pending requests. */
  includeThreadState?: boolean;
  /** Read state for this child session only. Must belong to the Act request. */
  sessionId?: string;
  /** Read the next message page for sessionId. Requires includeThreadState=true. */
  cursor?: string;
  limit?: number;
  /** Presentation consumer. Agent returns Markdown and structured facts; human also receives DarwinUI. This does not change identity, permissions or approvals. */
  audience?: Darwin.GetRunRequestRequestAudience;
}
