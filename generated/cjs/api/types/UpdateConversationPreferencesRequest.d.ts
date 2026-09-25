import type * as Darwin from '../index.js';

export interface UpdateConversationPreferencesRequest {
  defaultMode: Darwin.ConversationRetentionMode | null;
  promptOnFirstAi: boolean;
}
