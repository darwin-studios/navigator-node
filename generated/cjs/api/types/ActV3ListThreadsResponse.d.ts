export interface ActV3ListThreadsResponse {
  threads: ActV3ListThreadsResponse.Threads.Item[];
  cursor: string | null;
}
export declare namespace ActV3ListThreadsResponse {
  type Threads = Threads.Item[];
  namespace Threads {
    interface Item {
      thread: string;
      targetAgent: string;
      archived: boolean;
      needsAttention: boolean;
      createdAt: string;
    }
  }
}
