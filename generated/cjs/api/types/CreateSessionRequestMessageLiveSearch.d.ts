import type * as Darwin from '../index.js';

/**
 * Owner-reviewed provider-contact consent or a control for an existing durable session. Omit to review indexed choices without contacting providers.
 */
export type CreateSessionRequestMessageLiveSearch =
  | Darwin.CreateSessionRequestMessageLiveSearch.Start
  | Darwin.CreateSessionRequestMessageLiveSearch.Revise
  | Darwin.CreateSessionRequestMessageLiveSearch.Cancel;
export declare namespace CreateSessionRequestMessageLiveSearch {
  interface Start {
    action: 'start';
    shareableBrief: string;
    requirements: CreateSessionRequestMessageLiveSearchStart.Requirements.Item[];
    desiredMatches?: number | undefined;
    consent: CreateSessionRequestMessageLiveSearchStart.Consent;
    /** The indexed-choice turn whose agents the owner reviewed. */
    sourceTurnId: string;
    exactAgentIds: string[];
  }
  namespace CreateSessionRequestMessageLiveSearchStart {
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
    requirements: CreateSessionRequestMessageLiveSearchRevise.Requirements.Item[];
    desiredMatches?: number | undefined;
    consent: CreateSessionRequestMessageLiveSearchRevise.Consent;
    /** The indexed-choice turn whose agents the owner reviewed. */
    sourceTurnId: string;
    exactAgentIds: string[];
    sessionId: string;
  }
  namespace CreateSessionRequestMessageLiveSearchRevise {
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
