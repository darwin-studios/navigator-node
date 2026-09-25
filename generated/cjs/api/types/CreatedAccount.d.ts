export interface CreatedAccount {
  id: string;
  type: CreatedAccount.Type;
  name: string;
  status: CreatedAccount.Status;
  createdAt: string;
  nextStep: string;
}
export declare namespace CreatedAccount {
  const Type: {
    readonly Personal: 'personal';
    readonly Business: 'business';
    readonly Software: 'software';
  };
  type Type = (typeof Type)[keyof typeof Type];
  const Status: {
    readonly Unverified: 'unverified';
  };
  type Status = (typeof Status)[keyof typeof Status];
}
