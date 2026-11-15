import type * as Darwin from '../index.js';

export type AssistV3Request =
  | Darwin.AssistV3Request.Create
  | Darwin.AssistV3Request.Revise
  | Darwin.AssistV3Request.Update
  | Darwin.AssistV3Request.Turn
  | Darwin.AssistV3Request.AdvanceTurn
  | Darwin.AssistV3Request.DecideTransfer
  | Darwin.AssistV3Request.Resume
  | Darwin.AssistV3Request.Claim
  | Darwin.AssistV3Request.Quote
  | Darwin.AssistV3Request.AuthorizeBudget
  | Darwin.AssistV3Request.Execute
  | Darwin.AssistV3Request.Refresh
  | Darwin.AssistV3Request.AcceptStep
  | Darwin.AssistV3Request.ReleaseBudget
  | Darwin.AssistV3Request.Stop
  | Darwin.AssistV3Request.Pause
  | Darwin.AssistV3Request.Message;
export declare namespace AssistV3Request {
  interface Create {
    type: 'create';
    message: AssistV3RequestCreate.Message;
    context?: string[] | undefined;
  }
  namespace AssistV3RequestCreate {
    interface Message {
      type: Message.Type;
      text: string;
    }
    namespace Message {
      const Type: {
        readonly Text: 'text';
      };
      type Type = (typeof Type)[keyof typeof Type];
    }
  }
  interface Revise {
    type: 'revise';
    assistId: string;
    expectedRevisionId: string;
    message: AssistV3RequestRevise.Message;
  }
  namespace AssistV3RequestRevise {
    interface Message {
      type: Message.Type;
      text: string;
    }
    namespace Message {
      const Type: {
        readonly Text: 'text';
      };
      type Type = (typeof Type)[keyof typeof Type];
    }
  }
  interface Update {
    type: 'update';
    assistId: string;
    expectedRevisionId: string;
    message: AssistV3RequestUpdate.Message;
  }
  namespace AssistV3RequestUpdate {
    interface Message {
      type: Message.Type;
      text: string;
    }
    namespace Message {
      const Type: {
        readonly Text: 'text';
      };
      type Type = (typeof Type)[keyof typeof Type];
    }
  }
  interface Turn {
    type: 'turn';
    presentation?: AssistV3RequestTurn.Presentation | undefined;
    /** Who consumes this response. Controls presentation only; never identity, permissions, or approval. */
    audience?: AssistV3RequestTurn.Audience | undefined;
    assistId?: string | undefined;
    target?: AssistV3RequestTurn.Target | undefined;
    clientMessageId: string;
    message: AssistV3RequestTurn.Message;
    /** Modes: search, live_search, execute, route, chat. Omit for Auto. Execute coordinates work; Route hands over direct threads. Approvals remain required. */
    mode?: AssistV3RequestTurn.Mode | undefined;
    /** When true, propose work without starting agents. Use with coordinate or automatic routing. A later turn may approve the saved plan; payment and operation approvals remain separate. */
    planOnly?: boolean | undefined;
    context?: Darwin.AssistV3RequestTurnContextItem[] | undefined;
    attachments?: AssistV3RequestTurn.Attachments.Item[] | undefined;
    externalUserId?: string | undefined;
    userId?: string | undefined;
    memoryAgentId?: string | undefined;
    userMemory?: string | undefined;
    liveSearch?: Darwin.AssistV3RequestTurnLiveSearch | undefined;
  }
  namespace AssistV3RequestTurn {
    const Presentation: {
      readonly Chat: 'chat';
      readonly Operation: 'operation';
    };
    type Presentation = (typeof Presentation)[keyof typeof Presentation];
    /** Who consumes this response. Controls presentation only; never identity, permissions, or approval. */
    const Audience: {
      readonly Human: 'human';
      readonly Agent: 'agent';
    };
    type Audience = (typeof Audience)[keyof typeof Audience];
    interface Target {
      agentId: string;
      operationId?: string | undefined;
    }
    interface Message {
      type: Message.Type;
      text: string;
    }
    namespace Message {
      const Type: {
        readonly Text: 'text';
      };
      type Type = (typeof Type)[keyof typeof Type];
    }
    /**
     * Modes: search, live_search, execute, route, chat. Omit for Auto. Execute coordinates work; Route hands over direct threads. Approvals remain required.
     */
    type Mode =
      | ('search' | 'live_search' | 'execute' | 'route' | 'chat')
      /**
       * Compatibility inputs only. Omit mode for automatic routing; use execute for coordinated work. */
      | ('auto' | 'discover' | 'coordinate' | 'plan');
    type Attachments = Attachments.Item[];
    namespace Attachments {
      interface Item {
        name: string;
        mimeType: string;
      }
    }
  }
  interface AdvanceTurn {
    type: 'advance_turn';
    assistId: string;
  }
  interface DecideTransfer {
    type: 'decide_transfer';
    assistId: string;
    transferId: string;
    digest: string;
    decision: AssistV3RequestDecideTransfer.Decision;
  }
  namespace AssistV3RequestDecideTransfer {
    const Decision: {
      readonly Allow: 'allow';
      readonly Deny: 'deny';
    };
    type Decision = (typeof Decision)[keyof typeof Decision];
  }
  interface Resume {
    type: 'resume';
    assistId: string;
    threadId: string;
  }
  interface Claim {
    type: 'claim';
    assistId: string;
  }
  interface Quote {
    type: 'quote';
    revisionId: string;
    totalBudgetMinor: number;
    currency: AssistV3RequestQuote.Currency;
    assistId: string;
  }
  namespace AssistV3RequestQuote {
    const Currency: {
      readonly Usd: 'USD';
    };
    type Currency = (typeof Currency)[keyof typeof Currency];
  }
  interface AuthorizeBudget {
    type: 'authorize_budget';
    revisionId: string;
    quoteId: string;
    approval: AssistV3RequestAuthorizeBudget.Approval;
    assistId: string;
  }
  namespace AssistV3RequestAuthorizeBudget {
    interface Approval {
      type: Approval.Type;
      text: Approval.Text;
    }
    namespace Approval {
      const Type: {
        readonly Typed: 'typed';
      };
      type Type = (typeof Type)[keyof typeof Type];
      const Text: {
        readonly IAuthorizeThisAssistBudget: 'I authorize this Assist budget';
      };
      type Text = (typeof Text)[keyof typeof Text];
    }
  }
  interface Execute {
    type: 'execute';
    revisionId: string;
    quoteId: string;
    fundingAuthorizationId: string;
    approval: AssistV3RequestExecute.Approval;
    assistId: string;
  }
  namespace AssistV3RequestExecute {
    interface Approval {
      type: Approval.Type;
      text: Approval.Text;
    }
    namespace Approval {
      const Type: {
        readonly Typed: 'typed';
      };
      type Type = (typeof Type)[keyof typeof Type];
      const Text: {
        readonly IApproveThisAssistPlanAndQuote: 'I approve this Assist plan and quote';
      };
      type Text = (typeof Text)[keyof typeof Text];
    }
  }
  interface Refresh {
    type: 'refresh';
    assistId: string;
  }
  interface AcceptStep {
    type: 'accept_step';
    runId: string;
    messageId: string;
    approval: AssistV3RequestAcceptStep.Approval;
    assistId: string;
    stepId: string;
  }
  namespace AssistV3RequestAcceptStep {
    interface Approval {
      type: Approval.Type;
      text: Approval.Text;
    }
    namespace Approval {
      const Type: {
        readonly Typed: 'typed';
      };
      type Type = (typeof Type)[keyof typeof Type];
      const Text: {
        readonly IAcceptThisAssistStepResult: 'I accept this Assist step result';
      };
      type Text = (typeof Text)[keyof typeof Text];
    }
  }
  interface ReleaseBudget {
    type: 'release_budget';
    assistId: string;
    fundingAuthorizationId: string;
  }
  interface Stop {
    type: 'stop';
    assistId: string;
  }
  interface Pause {
    type: 'pause';
    assistId: string;
  }
  interface Message {
    type: 'message';
    assistId: string;
    runId: string;
    stepId: string;
    message: Darwin.AssistV3RequestMessageMessage;
  }
}
