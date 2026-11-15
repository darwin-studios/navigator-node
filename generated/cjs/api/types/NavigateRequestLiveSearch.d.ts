import type * as Darwin from '../index.js';

/**
 * Owner-reviewed provider-contact consent or a control for an existing durable session. Omit to review indexed choices without contacting providers.
 */
export type NavigateRequestLiveSearch =
  | Darwin.NavigateRequestLiveSearch.Start
  | Darwin.NavigateRequestLiveSearch.Revise
  | Darwin.NavigateRequestLiveSearch.Cancel;
export declare namespace NavigateRequestLiveSearch {
  interface Start {
    action: 'start';
    shareableBrief: string;
    requirements: NavigateRequestLiveSearchStart.Requirements.Item[];
    desiredMatches?: number | undefined;
    consent: NavigateRequestLiveSearchStart.Consent;
    /** The indexed-choice turn whose agents the owner reviewed. */
    sourceTurnId: string;
    exactAgentIds: string[];
  }
  namespace NavigateRequestLiveSearchStart {
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
    requirements: NavigateRequestLiveSearchRevise.Requirements.Item[];
    desiredMatches?: number | undefined;
    consent: NavigateRequestLiveSearchRevise.Consent;
    /** The indexed-choice turn whose agents the owner reviewed. */
    sourceTurnId: string;
    exactAgentIds: string[];
    sessionId: string;
  }
  namespace NavigateRequestLiveSearchRevise {
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
