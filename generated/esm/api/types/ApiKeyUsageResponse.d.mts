export interface ApiKeyUsageResponse {
    usage: ApiKeyUsageResponse.Usage;
}
export declare namespace ApiKeyUsageResponse {
    interface Usage {
        period: Usage.Period;
        requests: Usage.Requests;
        apiKeys: Usage.ApiKeys;
        byKey: Usage.ByKey.Item[];
    }
    namespace Usage {
        const Period: {
            readonly Lifetime: "lifetime";
        };
        type Period = (typeof Period)[keyof typeof Period];
        interface Requests {
            total: number;
        }
        interface ApiKeys {
            total: number;
            active: number;
            expired: number;
            revoked: number;
        }
        type ByKey = ByKey.Item[];
        namespace ByKey {
            interface Item {
                id: string;
                name: string;
                prefix: string;
                status: Item.Status;
                requestCount: number;
                lastUsedAt: string | null;
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
}
