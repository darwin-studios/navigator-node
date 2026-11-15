/**
 * @example
 *     {
 *         id: "id",
 *         challengeId: "challengeId",
 *         signature: "signature"
 *     }
 */
export interface VerifyMachineKeyRequest {
  id: string;
  challengeId: string;
  signature: string;
  recoverySignature?: string;
  newSignature?: string;
}
