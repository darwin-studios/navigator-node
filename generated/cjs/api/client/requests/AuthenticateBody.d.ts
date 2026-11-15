/**
 * @example
 *     {
 *         request: "authentication-request-id"
 *     }
 */
export interface AuthenticateBody {
  /** The authentication request returned by the thread. */
  request: string;
  /** A stable key for this connection attempt. Reuse it after a timeout. */
  idempotencyKey?: string;
}
