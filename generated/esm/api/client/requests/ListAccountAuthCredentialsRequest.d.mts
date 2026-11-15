/**
 * @example
 *     {}
 */
export interface ListAccountAuthCredentialsRequest {
    /** Maximum saved credentials to return, up to 100. */
    limit?: number;
    /** Continue after the previous response nextCursor. */
    afterCursor?: string;
}
