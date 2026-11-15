/**
 * @example
 *     {
 *         threadId: "threadId"
 *     }
 */
export interface UpdateThreadRequest {
    threadId: string;
    title?: string;
    archived?: boolean;
    brief?: string;
}
