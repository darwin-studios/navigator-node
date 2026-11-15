import type * as Darwin from '../index.js';

/**
 * Owner-reviewed provider-contact consent or a control for an existing durable session. Omit to review indexed choices without contacting providers.
 */
export type ThreadMessageRequestLiveSearch =
  | Darwin.ThreadMessageRequestLiveSearch.Start
  | Darwin.ThreadMessageRequestLiveSearch.Revise
  | Darwin.ThreadMessageRequestLiveSearch.Cancel;
export declare namespace ThreadMessageRequestLiveSearch {
  interface Start {
    action: 'start';
    shareableBrief: string;
    requirements: ThreadMessageRequestLiveSearchStart.Requirements.Item[];
    desiredMatches?: number | undefined;
    consent: ThreadMessageRequestLiveSearchStart.Consent;
    /** The indexed-choice turn whose agents the owner reviewed. */
    sourceTurnId: string;
    exactAgentIds: string[];
  }
  namespace ThreadMessageRequestLiveSearchStart {
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
    requirements: ThreadMessageRequestLiveSearchRevise.Requirements.Item[];
    desiredMatches?: number | undefined;
    consent: ThreadMessageRequestLiveSearchRevise.Consent;
    /** The indexed-choice turn whose agents the owner reviewed. */
    sourceTurnId: string;
    exactAgentIds: string[];
    sessionId: string;
  }
  namespace ThreadMessageRequestLiveSearchRevise {
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
