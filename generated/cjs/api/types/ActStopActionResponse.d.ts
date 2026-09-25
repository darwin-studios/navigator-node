import type * as Darwin from '../index.js';

export interface ActStopActionResponse {
  type: ActStopActionResponse.Type;
  actionId: string;
  targetAiId: string | null;
  capabilityId: string | null;
  capabilityRevision: number | null;
  revision: number;
  lifecycle: ActStopActionResponse.Lifecycle;
  outcome: Darwin.ActionOutcome | null;
  status: ActStopActionResponse.Status;
  result: Record<string, unknown>;
  actionRequired: string | null;
  availableActions: ActStopActionResponse.AvailableActions.Item[];
  interaction?: ActStopActionResponse.Interaction | undefined;
  feedbackRequest?: ActStopActionResponse.FeedbackRequest | undefined;
  policyState?: ActStopActionResponse.PolicyState | undefined;
  webLink?: string | undefined;
}
export declare namespace ActStopActionResponse {
  const Type: {
    readonly Stop: 'stop';
  };
  type Type = (typeof Type)[keyof typeof Type];
  const Lifecycle: {
    readonly Active: 'active';
    readonly Ending: 'ending';
    readonly Ended: 'ended';
  };
  type Lifecycle = (typeof Lifecycle)[keyof typeof Lifecycle];
  const Status: {
    readonly Completed: 'completed';
    readonly Running: 'running';
    readonly AwaitingUser: 'awaiting_user';
    readonly ApprovalRequired: 'approval_required';
    readonly AuthenticationRequired: 'authentication_required';
    readonly ConnectionRequired: 'connection_required';
    readonly PaymentRequired: 'payment_required';
    readonly VerificationRequired: 'verification_required';
    readonly InsufficientAuthority: 'insufficient_authority';
    readonly ProviderUnavailable: 'provider_unavailable';
    readonly Stopped: 'stopped';
  };
  type Status = (typeof Status)[keyof typeof Status];
  type AvailableActions = AvailableActions.Item[];
  namespace AvailableActions {
    const Item: {
      readonly Status: 'status';
      readonly Update: 'update';
      readonly Authenticate: 'authenticate';
      readonly Approve: 'approve';
      readonly Pay: 'pay';
      readonly Stop: 'stop';
      readonly End: 'end';
    };
    type Item = (typeof Item)[keyof typeof Item];
  }
  type Interaction =
    | Darwin.AuthenticationInteraction
    | Darwin.PaymentInteraction
    | Darwin.ApprovalInteraction
    | Darwin.VerificationInteraction;
  interface FeedbackRequest {
    interactionId: string;
    state: FeedbackRequest.State;
    role: FeedbackRequest.Role;
    closesAt?: string | undefined;
    revision: number;
    webLink?: string | undefined;
  }
  namespace FeedbackRequest {
    const State: {
      readonly Open: 'OPEN';
      readonly Submitted: 'SUBMITTED';
      readonly Expired: 'EXPIRED';
      readonly Unavailable: 'UNAVAILABLE';
    };
    type State = (typeof State)[keyof typeof State];
    const Role: {
      readonly Requester: 'REQUESTER';
      readonly Fulfiller: 'FULFILLER';
    };
    type Role = (typeof Role)[keyof typeof Role];
  }
  interface PolicyState {
    state: PolicyState.State;
    code: PolicyState.Code;
    scope: PolicyState.Scope;
    expiresAt?: string | undefined;
    webLink?: string | undefined;
  }
  namespace PolicyState {
    const State: {
      readonly ReviewRequired: 'REVIEW_REQUIRED';
      readonly Restricted: 'RESTRICTED';
      readonly Blocked: 'BLOCKED';
    };
    type State = (typeof State)[keyof typeof State];
    const Code: {
      readonly SafetyReviewRequired: 'safety_review_required';
      readonly AuthorizationRestricted: 'authorization_restricted';
      readonly ActionBlocked: 'action_blocked';
    };
    type Code = (typeof Code)[keyof typeof Code];
    const Scope: {
      readonly Action: 'ACTION';
      readonly Capability: 'CAPABILITY';
      readonly Listing: 'LISTING';
      readonly Ai: 'AI';
      readonly Account: 'ACCOUNT';
    };
    type Scope = (typeof Scope)[keyof typeof Scope];
  }
}
