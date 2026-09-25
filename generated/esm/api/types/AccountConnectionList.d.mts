export interface AccountConnectionList {
    connections: AccountConnectionList.Connections.Item[];
    nextCursor: string | null;
}
export declare namespace AccountConnectionList {
    type Connections = Connections.Item[];
    namespace Connections {
        interface Item {
            id: string;
            provider: string;
            displayName: string;
            scopes: string[];
            status: Item.Status;
            createdAt: string;
        }
        namespace Item {
            const Status: {
                readonly Active: "active";
                readonly Expired: "expired";
                readonly Revoked: "revoked";
            };
            type Status = (typeof Status)[keyof typeof Status];
        }
    }
}
