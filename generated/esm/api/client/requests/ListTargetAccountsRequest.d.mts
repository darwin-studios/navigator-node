/**
 * @example
 *     {
 *         aiId: "aiId",
 *         targetAiId: "targetAiId"
 *     }
 */
export interface ListTargetAccountsRequest {
    aiId: string;
    targetAiId: string;
    includeUnavailable?: boolean;
    limit?: number;
    afterCursor?: string;
}
