import type * as Darwin from '../../index.js';

/**
 * @example
 *     {
 *         id: "id",
 *         body: {
 *             purpose: "token"
 *         }
 *     }
 */
export interface ChallengeMachineKeyRequest {
  id: string;
  body: Darwin.ChallengeMachineKeyRequestBody;
}
