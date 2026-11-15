/**
 * @example
 *     {
 *         threadId: "threadId"
 *     }
 */
export interface GetThreadEventsRequest {
  threadId: string;
  'Last-Event-ID'?: string;
}
