/**
 * @example
 *     {
 *         aiId: "aiId",
 *         targetAiId: "targetAiId",
 *         connectionId: "connectionId"
 *     }
 */
export interface RevokeTargetAccountRequest {
  aiId: string;
  targetAiId: string;
  connectionId: string;
}
