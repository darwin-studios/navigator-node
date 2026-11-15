/**
 * @example
 *     {
 *         sessionId: "sessionId"
 *     }
 */
export interface UpdateSessionRequest {
    sessionId: string;
    title?: string;
    archived?: boolean;
    brief?: string;
}
