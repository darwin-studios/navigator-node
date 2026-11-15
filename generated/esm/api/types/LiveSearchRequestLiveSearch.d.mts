import type * as Darwin from "../index.mjs";
/**
 * Owner-reviewed provider-contact consent or a control for an existing durable session. Omit to review indexed choices without contacting providers.
 */
export type LiveSearchRequestLiveSearch = Darwin.LiveSearchRequestLiveSearch.Start | Darwin.LiveSearchRequestLiveSearch.Revise | Darwin.LiveSearchRequestLiveSearch.Cancel;
export declare namespace LiveSearchRequestLiveSearch {
    interface Start {
        action: "start";
        shareableBrief: string;
        requirements: LiveSearchRequestLiveSearchStart.Requirements.Item[];
        desiredMatches?: number | undefined;
        consent: LiveSearchRequestLiveSearchStart.Consent;
        /** The indexed-choice turn whose agents the owner reviewed. */
        sourceTurnId: string;
        exactAgentIds: string[];
    }
    namespace LiveSearchRequestLiveSearchStart {
        type Requirements = Requirements.Item[];
        namespace Requirements {
            interface Item {
                requirementId: string;
                statement: string;
                hard: boolean;
            }
        }
        const Consent: {
            readonly ShareOnlyThisBriefWithReadOnlyFreeOperations: "share_only_this_brief_with_read_only_free_operations";
        };
        type Consent = (typeof Consent)[keyof typeof Consent];
    }
    interface Revise {
        action: "revise";
        shareableBrief: string;
        requirements: LiveSearchRequestLiveSearchRevise.Requirements.Item[];
        desiredMatches?: number | undefined;
        consent: LiveSearchRequestLiveSearchRevise.Consent;
        /** The indexed-choice turn whose agents the owner reviewed. */
        sourceTurnId: string;
        exactAgentIds: string[];
        sessionId: string;
    }
    namespace LiveSearchRequestLiveSearchRevise {
        type Requirements = Requirements.Item[];
        namespace Requirements {
            interface Item {
                requirementId: string;
                statement: string;
                hard: boolean;
            }
        }
        const Consent: {
            readonly ShareOnlyThisBriefWithReadOnlyFreeOperations: "share_only_this_brief_with_read_only_free_operations";
        };
        type Consent = (typeof Consent)[keyof typeof Consent];
    }
    interface Cancel {
        action: "cancel";
        sessionId: string;
    }
}
