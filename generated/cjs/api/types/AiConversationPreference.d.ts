import type * as Darwin from '../index.js';

export interface AiConversationPreference {
  aiId: string;
  mode: Darwin.ConversationRetentionMode;
  updatedAt: string;
}
