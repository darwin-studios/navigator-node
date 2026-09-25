import type * as Darwin from '../index.js';

export interface AccountActionHistoryPage {
  actions: AccountActionHistoryPage.Actions.Item[];
  nextCursor: string | null;
}
export declare namespace AccountActionHistoryPage {
  type Actions = Actions.Item[];
  namespace Actions {
    interface Item {
      actionId: string;
      aiId: string;
      capabilityId: string;
      calledAt: string;
      completedAt: string | null;
      outcome: Darwin.ActionOutcome;
    }
  }
}
