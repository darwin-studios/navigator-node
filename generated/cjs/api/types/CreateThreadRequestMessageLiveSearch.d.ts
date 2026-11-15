import type * as Darwin from '../index.js';

/**
 * Owner-reviewed provider-contact consent or a control for an existing durable session. Omit to review indexed choices without contacting providers.
 */
export type CreateThreadRequestMessageLiveSearch =
  | Darwin.CreateThreadRequestMessageLiveSearch.Start
  | Darwin.CreateThreadRequestMessageLiveSearch.Revise
  | Darwin.CreateThreadRequestMessageLiveSearch.Cancel;
export declare namespace CreateThreadRequestMessageLiveSearch {
  interface Start {
    action: 'start';
    shareableBrief: string;
    requirements: CreateThreadRequestMessageLiveSearchStart.Requirements.Item[];
    desiredMatches?: number | undefined;
    consent: CreateThreadRequestMessageLiveSearchStart.Consent;
    /** The indexed-choice turn whose agents the owner reviewed. */
    sourceTurnId: string;
    exactAgentIds: string[];
  }
  namespace CreateThreadRequestMessageLiveSearchStart {
    type Requirements = Requirements.Item[];
    namespace Requirements {
      interface Item {
        requirementId: string;
        statement: string;
        hard: boolean;
      }
    }
    const Consent: {
      readonly ShareOnlyThisBriefWithReadOnlyFreeOperations: 'share_only_this_brief_with_read_only_free_operations';
    };
    type Consent = (typeof Consent)[keyof typeof Consent];
  }
  interface Revise {
    action: 'revise';
    shareableBrief: string;
    requirements: CreateThreadRequestMessageLiveSearchRevise.Requirements.Item[];
    desiredMatches?: number | undefined;
    consent: CreateThreadRequestMessageLiveSearchRevise.Consent;
    /** The indexed-choice turn whose agents the owner reviewed. */
    sourceTurnId: string;
    exactAgentIds: string[];
    sessionId: string;
  }
  namespace CreateThreadRequestMessageLiveSearchRevise {
    type Requirements = Requirements.Item[];
    namespace Requirements {
      interface Item {
        requirementId: string;
        statement: string;
        hard: boolean;
      }
    }
    const Consent: {
      readonly ShareOnlyThisBriefWithReadOnlyFreeOperations: 'share_only_this_brief_with_read_only_free_operations';
    };
    type Consent = (typeof Consent)[keyof typeof Consent];
  }
  interface Cancel {
    action: 'cancel';
    sessionId: string;
  }
}
