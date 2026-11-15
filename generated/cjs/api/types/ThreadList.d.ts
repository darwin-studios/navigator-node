export interface ThreadList {
  threads: ThreadList.Threads.Item[];
  nextBefore: string | null;
}
export declare namespace ThreadList {
  type Threads = Threads.Item[];
  namespace Threads {
    interface Item {
      threadId: string;
      title: string;
      archived: boolean;
      createdAt: string;
      updatedAt: string;
      role: Item.Role;
      preview?: string | undefined;
      agents?: Item.Agents.Item[] | undefined;
    }
    namespace Item {
      const Role: {
        readonly Administrator: 'administrator';
        readonly Viewer: 'viewer';
        readonly Contributor: 'contributor';
      };
      type Role = (typeof Role)[keyof typeof Role];
      type Agents = Agents.Item[];
      namespace Agents {
        interface Item {
          agentId: string;
          name: string;
          imageUrl?: (string | null) | undefined;
        }
      }
    }
  }
}
