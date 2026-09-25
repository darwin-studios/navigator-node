import type * as Darwin from '../index.js';

export interface ActListResponse {
  type: ActListResponse.Type;
  status: ActListResponse.Status;
  actions: ActListResponse.Actions.Item[];
  nextCursor: string | null;
}
export declare namespace ActListResponse {
  const Type: {
    readonly List: 'list';
  };
  type Type = (typeof Type)[keyof typeof Type];
  const Status: {
    readonly Completed: 'completed';
  };
  type Status = (typeof Status)[keyof typeof Status];
  type Actions = Actions.Item[];
  namespace Actions {
    interface Item {
      actionId: string;
      aiId: string | null;
      targetAiId: string | null;
      capabilityId: string | null;
      capabilityRevision: number | null;
      revision: number;
      lifecycle: Item.Lifecycle;
      outcome: Darwin.ActionOutcome | null;
      title: string;
      intent: string;
      mode: Item.Mode;
      lifecycleStatus: string;
      attentionState: Item.AttentionState;
      capabilityIds: string[];
      createdAt: string;
      updatedAt: string;
      availableActions: Item.AvailableActions.Item[];
    }
    namespace Item {
      const Lifecycle: {
        readonly Active: 'active';
        readonly Ending: 'ending';
        readonly Ended: 'ended';
      };
      type Lifecycle = (typeof Lifecycle)[keyof typeof Lifecycle];
      const Mode: {
        readonly Buy: 'buy';
        readonly Sell: 'sell';
        readonly Chat: 'chat';
        readonly Auto: 'auto';
      };
      type Mode = (typeof Mode)[keyof typeof Mode];
      const AttentionState: {
        readonly NeedsAttention: 'needs_attention';
        readonly Clear: 'clear';
      };
      type AttentionState = (typeof AttentionState)[keyof typeof AttentionState];
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
    }
  }
}
