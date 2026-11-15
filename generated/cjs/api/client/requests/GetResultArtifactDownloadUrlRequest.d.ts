/**
 * @example
 *     {
 *         thread: "thread",
 *         ticket: "ticket"
 *     }
 */
export interface GetResultArtifactDownloadUrlRequest {
  thread: string;
  ticket: string;
  agent?: string;
}
