import type * as Darwin from '../../index.js';

/**
 * @example
 *     {
 *         "Idempotency-Key": "Idempotency-Key",
 *         body: {
 *             action: "list_drafts"
 *         }
 *     }
 */
export interface BuildRequest {
  /** Stable key for this exact mutation. Reusing it with different input returns 409. */
  'Idempotency-Key': string;
  body: Darwin.BuildRequestBody;
}
