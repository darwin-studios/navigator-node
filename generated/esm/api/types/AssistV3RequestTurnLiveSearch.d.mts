import type * as Darwin from "../index.mjs";
export type AssistV3RequestTurnLiveSearch = Darwin.AssistV3RequestTurnLiveSearch.Start | Darwin.AssistV3RequestTurnLiveSearch.Revise | Darwin.AssistV3RequestTurnLiveSearch.Cancel;
export declare namespace AssistV3RequestTurnLiveSearch {
    interface Start {
        action: "start";
        shareableBrief: string;
        requirements: AssistV3RequestTurnLiveSearchStart.Requirements.Item[];
        desiredMatches?: number | undefined;
        consent: AssistV3RequestTurnLiveSearchStart.Consent;
        /** The indexed-choice turn whose agents the owner reviewed. */
        sourceTurnId: string;
        exactAgentIds: string[];
    }
    namespace AssistV3RequestTurnLiveSearchStart {
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
        requirements: AssistV3RequestTurnLiveSearchRevise.Requirements.Item[];
        desiredMatches?: number | undefined;
        consent: AssistV3RequestTurnLiveSearchRevise.Consent;
        /** The indexed-choice turn whose agents the owner reviewed. */
        sourceTurnId: string;
        exactAgentIds: string[];
        sessionId: string;
    }
    namespace AssistV3RequestTurnLiveSearchRevise {
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
