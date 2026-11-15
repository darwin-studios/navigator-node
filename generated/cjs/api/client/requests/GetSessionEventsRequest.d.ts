/**
 * @example
 *     {
 *         sessionId: "sessionId"
 *     }
 */
export interface GetSessionEventsRequest {
  sessionId: string;
  'Last-Event-ID'?: string;
}
