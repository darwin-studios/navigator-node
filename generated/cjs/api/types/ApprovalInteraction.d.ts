/**
 * An exact reviewed consequential decision. The approval ID, payload digest, revision, and expiry must all still match when the user decides.
 */
export interface ApprovalInteraction {
  id: string;
  kind: ApprovalInteraction.Kind;
  state: ApprovalInteraction.State;
  displayName: string;
  hostname: string;
  expiresAt: string;
  approvalId: string;
  expectedRevision: string;
  reviewedPayloadDigest: string;
  preview: Record<string, unknown>;
}
export declare namespace ApprovalInteraction {
  const Kind: {
    readonly Approval: 'approval';
  };
  type Kind = (typeof Kind)[keyof typeof Kind];
  const State: {
    readonly Required: 'required';
    readonly Pending: 'pending';
    readonly Complete: 'complete';
    readonly Declined: 'declined';
    readonly Expired: 'expired';
    readonly Failed: 'failed';
  };
  type State = (typeof State)[keyof typeof State];
}
