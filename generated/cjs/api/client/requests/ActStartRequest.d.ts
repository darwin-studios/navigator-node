import type * as Darwin from '../../index.js';

/**
 * @example
 *     {
 *         capabilityId: "capabilityId",
 *         capabilityRevision: 1,
 *         requestId: "requestId"
 *     }
 */
export interface ActStartRequest {
  capabilityId: string;
  capabilityRevision: number;
  inputs?: Record<string, unknown>;
  attachments?: Darwin.ActionAttachment[];
  intent?: string;
  actingAiId?: string;
  targetAiId?: string;
  searchAttributionId?: string;
  requestId: string;
}
