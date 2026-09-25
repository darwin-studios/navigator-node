export interface SearchHistoryPage {
  searches: SearchHistoryPage.Searches.Item[];
  retentionDays: number;
  nextCursor: string | null;
}
export declare namespace SearchHistoryPage {
  type Searches = Searches.Item[];
  namespace Searches {
    interface Item {
      searchId: string;
      query: string;
      createdAt: string;
      expiresAt: string;
    }
  }
}
