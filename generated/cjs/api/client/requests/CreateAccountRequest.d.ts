/**
 * @example
 *     {
 *         email: "email",
 *         password: "password"
 *     }
 */
export interface CreateAccountRequest {
  email: string;
  password: string;
  name?: string;
  type?: CreateAccountRequest.Type;
  /** Optional legacy account metadata; agent type is chosen when creating an agent. */
  organizationName?: string;
  /** Optional legacy metadata; not ownership proof. */
  organizationDomain?: string;
}
export declare namespace CreateAccountRequest {
  const Type: {
    readonly Personal: 'personal';
    readonly Business: 'business';
    readonly Software: 'software';
  };
  type Type = (typeof Type)[keyof typeof Type];
}
