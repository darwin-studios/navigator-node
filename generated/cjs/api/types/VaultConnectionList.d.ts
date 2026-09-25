export interface VaultConnectionList {
  connections: VaultConnectionList.Connections.Item[];
  nextCursor: string | null;
}
export declare namespace VaultConnectionList {
  type Connections = Connections.Item[];
  namespace Connections {
    interface Item {
      id: string;
      provider: Item.Provider;
      displayName: string;
      resolutionMode: Item.ResolutionMode;
      status: Item.Status;
      createdAt: string;
    }
    namespace Item {
      const Provider: {
        readonly OnePasswordServiceAccount: '1password_service_account';
        readonly OnePasswordConnect: '1password_connect';
        readonly Other: 'other';
      };
      type Provider = (typeof Provider)[keyof typeof Provider];
      const ResolutionMode: {
        readonly JustInTime: 'just_in_time';
      };
      type ResolutionMode = (typeof ResolutionMode)[keyof typeof ResolutionMode];
      const Status: {
        readonly Active: 'active';
        readonly Unavailable: 'unavailable';
        readonly Revoked: 'revoked';
      };
      type Status = (typeof Status)[keyof typeof Status];
    }
  }
}
