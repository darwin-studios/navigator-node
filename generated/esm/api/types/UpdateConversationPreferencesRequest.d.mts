import type * as Darwin from "../index.mjs";
export interface UpdateConversationPreferencesRequest {
    defaultMode: Darwin.ConversationRetentionMode | null;
    promptOnFirstAi: boolean;
}
