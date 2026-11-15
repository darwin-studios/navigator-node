/**
 * @example
 *     {
 *         aiId: "aiId"
 *     }
 */
export interface ListAuthCredentialsRequest {
    aiId: string;
    /** Maximum saved credentials to return, up to 100. */
    limit?: number;
    /** Continue after the previous response nextCursor. */
    afterCursor?: string;
}
