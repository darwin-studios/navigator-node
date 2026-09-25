import type * as Darwin from '../../index.js';

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
