import type * as Darwin from '../../index.js';

/**
 * @example
 *     {
 *         sessionId: "sessionId"
 *     }
 */
export interface ReadSessionRequest {
  sessionId: string;
  /** Navigate turn pagination cursor. */
  before?: string;
  /** Act event pagination cursor. */
  cursor?: string;
  /** Act page size. */
  limit?: number;
  /** Presentation consumer. Agent returns Markdown and structured facts; human also receives DarwinUI. This does not change identity, permissions or approvals. */
  audience?: Darwin.ReadSessionRequestAudience;
  /** Guest Navigate session token. */
  'X-Assist-Token'?: string;
}
