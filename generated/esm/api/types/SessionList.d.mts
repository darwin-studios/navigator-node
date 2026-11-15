export interface SessionList {
    sessions: SessionList.Sessions.Item[];
    nextBefore: string | null;
}
export declare namespace SessionList {
    type Sessions = Sessions.Item[];
    namespace Sessions {
        interface Item {
            title: string;
            archived: boolean;
            createdAt: string;
            updatedAt: string;
            role: Item.Role;
            preview?: string | undefined;
            agents?: Item.Agents.Item[] | undefined;
            sessionId: string;
        }
        namespace Item {
            const Role: {
                readonly Administrator: "administrator";
                readonly Viewer: "viewer";
                readonly Contributor: "contributor";
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
