/**
 * @example
 *     {
 *         email: "email",
 *         password: "password",
 *         name: "name",
 *         type: "personal"
 *     }
 */
export interface CreateAccountRequest {
  email: string;
  password: string;
  name: string;
  type: CreateAccountRequest.Type;
  /** Required for business and software. */
  organizationName?: string;
  /** Required for business and software; not ownership proof. */
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
