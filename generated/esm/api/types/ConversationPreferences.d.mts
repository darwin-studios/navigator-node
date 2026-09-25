import type * as Darwin from "../index.mjs";
export interface ConversationPreferences {
    /** Null means Darwin asks before the first message to each AI. */
    defaultMode: Darwin.ConversationRetentionMode | null;
    promptOnFirstAi: boolean;
    overrides: Darwin.AiConversationPreference[];
}
