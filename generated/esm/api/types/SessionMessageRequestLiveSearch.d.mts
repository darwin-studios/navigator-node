import type * as Darwin from "../index.mjs";
/**
 * Owner-reviewed provider-contact consent or a control for an existing durable session. Omit to review indexed choices without contacting providers.
 */
export type SessionMessageRequestLiveSearch = Darwin.SessionMessageRequestLiveSearch.Start | Darwin.SessionMessageRequestLiveSearch.Revise | Darwin.SessionMessageRequestLiveSearch.Cancel;
export declare namespace SessionMessageRequestLiveSearch {
    interface Start {
        action: "start";
        shareableBrief: string;
        requirements: SessionMessageRequestLiveSearchStart.Requirements.Item[];
        desiredMatches?: number | undefined;
        consent: SessionMessageRequestLiveSearchStart.Consent;
        /** The indexed-choice turn whose agents the owner reviewed. */
        sourceTurnId: string;
        exactAgentIds: string[];
    }
    namespace SessionMessageRequestLiveSearchStart {
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
        requirements: SessionMessageRequestLiveSearchRevise.Requirements.Item[];
        desiredMatches?: number | undefined;
        consent: SessionMessageRequestLiveSearchRevise.Consent;
        /** The indexed-choice turn whose agents the owner reviewed. */
        sourceTurnId: string;
        exactAgentIds: string[];
        sessionId: string;
    }
    namespace SessionMessageRequestLiveSearchRevise {
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
