/**
 * @example
 *     {
 *         searchId: "searchId"
 *     }
 */
export interface GetSearchRequest {
    searchId: string;
    cursor?: number;
    limit?: number;
}
