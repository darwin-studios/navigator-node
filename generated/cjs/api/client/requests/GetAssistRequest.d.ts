import type * as Darwin from '../../index.js';

/**
 * @example
 *     {
 *         assistId: "assistId"
 *     }
 */
export interface GetAssistRequest {
  assistId: string;
  /** Presentation consumer. Agent returns Markdown and structured facts; human also receives DarwinUI. This does not change identity, permissions or approvals. */
  audience?: Darwin.GetAssistRequestAudience;
  'X-Assist-Token'?: string;
}
