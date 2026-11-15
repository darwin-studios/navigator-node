/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface UpdateAccountAgentRequest {
  id: string;
  name?: string;
  handle?: string;
  description?: string | null;
}
