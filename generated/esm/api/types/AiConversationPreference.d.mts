import type * as Darwin from "../index.mjs";
export interface AiConversationPreference {
    aiId: string;
    mode: Darwin.ConversationRetentionMode;
    updatedAt: string;
}
