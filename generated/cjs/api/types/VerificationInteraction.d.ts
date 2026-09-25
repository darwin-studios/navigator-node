/**
 * A verifier-owned claim and success policy bound to the selected capability revision. The caller can choose only one advertised method and cannot supply the verdict.
 */
export interface VerificationInteraction {
  id: string;
  kind: VerificationInteraction.Kind;
  state: VerificationInteraction.State;
  claim?: string | undefined;
  revision: number;
  expiresAt: string;
  methods: VerificationInteraction.Methods.Item[];
}
export declare namespace VerificationInteraction {
  const Kind: {
    readonly Verification: 'verification';
  };
  type Kind = (typeof Kind)[keyof typeof Kind];
  const State: {
    readonly Required: 'required';
    readonly Pending: 'pending';
    readonly Succeeded: 'succeeded';
    readonly Failed: 'failed';
    readonly Inconclusive: 'inconclusive';
    readonly Expired: 'expired';
  };
  type State = (typeof State)[keyof typeof State];
  type Methods = Methods.Item[];
  namespace Methods {
    interface Item {
      id: string;
      label: string;
      webLinkRequired?: boolean | undefined;
    }
  }
}
