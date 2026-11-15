/**
 * @example
 *     {
 *         "Idempotency-Key": "Idempotency-Key",
 *         type: "personal",
 *         name: "name",
 *         handle: "handle"
 *     }
 */
export interface CreateAccountAgentRequest {
  'Idempotency-Key': string;
  applicationId?: string;
  type: CreateAccountAgentRequest.Type;
  name: string;
  handle: string;
  description?: string;
}
export declare namespace CreateAccountAgentRequest {
  const Type: {
    readonly Personal: 'personal';
    readonly Business: 'business';
  };
  type Type = (typeof Type)[keyof typeof Type];
}
