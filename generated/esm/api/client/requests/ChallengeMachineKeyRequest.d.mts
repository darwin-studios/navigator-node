import type * as Darwin from "../../index.mjs";
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
