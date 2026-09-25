export interface AccountSummary {
    account: AccountSummary.Account;
    ais: AccountSummary.Ais.Item[];
    activeAi: AccountSummary.ActiveAi | null;
}
export declare namespace AccountSummary {
    interface Account {
        name: string | null;
        avatarUrl: string | null;
        timeZone: Account.TimeZone;
        createdAt: string;
        updatedAt: string;
    }
    namespace Account {
        interface TimeZone {
            id: string;
            source: string;
            confirmed: boolean;
            confirmedAt: string | null;
            pending: string | null;
        }
    }
    type Ais = Ais.Item[];
    namespace Ais {
        interface Item {
            aiId: string;
            type: string;
            name: string;
            handle: string | null;
            avatarUrl: string | null;
            description: string | null;
            visibility: string;
            status: string;
            role: Item.Role;
            rolePermissions: Item.RolePermissions;
            isActive: boolean;
        }
        namespace Item {
            const Role: {
                readonly Owner: "owner";
                readonly Admin: "admin";
                readonly Member: "member";
            };
            type Role = (typeof Role)[keyof typeof Role];
            interface RolePermissions {
                canRead: boolean;
                canAct: boolean;
                canHost: boolean;
                canReadWallet: boolean;
            }
        }
    }
    interface ActiveAi {
        aiId: string;
        type: string;
        name: string;
        role: ActiveAi.Role;
        source: ActiveAi.Source;
    }
    namespace ActiveAi {
        const Role: {
            readonly Owner: "owner";
            readonly Admin: "admin";
            readonly Member: "member";
        };
        type Role = (typeof Role)[keyof typeof Role];
        const Source: {
            readonly Requested: "requested";
            readonly ActiveSelection: "active_selection";
            readonly Default: "default";
        };
        type Source = (typeof Source)[keyof typeof Source];
    }
}
