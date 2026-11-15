/**
 * @example
 *     {
 *         name: "name",
 *         publicKey: {
 *             kty: "OKP",
 *             crv: "Ed25519",
 *             x: "x"
 *         },
 *         recoveryKey: {
 *             kty: "OKP",
 *             crv: "Ed25519",
 *             x: "x"
 *         },
 *         scopes: ["account:read"]
 *     }
 */
export interface EnrollMachineKeyRequest {
  name: string;
  publicKey: EnrollMachineKeyRequest.PublicKey;
  recoveryKey: EnrollMachineKeyRequest.RecoveryKey;
  scopes: EnrollMachineKeyRequest.Scopes.Item[];
}
export declare namespace EnrollMachineKeyRequest {
  interface PublicKey {
    kty: PublicKey.Kty;
    crv: PublicKey.Crv;
    x: string;
  }
  namespace PublicKey {
    const Kty: {
      readonly Okp: 'OKP';
    };
    type Kty = (typeof Kty)[keyof typeof Kty];
    const Crv: {
      readonly Ed25519: 'Ed25519';
    };
    type Crv = (typeof Crv)[keyof typeof Crv];
  }
  interface RecoveryKey {
    kty: RecoveryKey.Kty;
    crv: RecoveryKey.Crv;
    x: string;
  }
  namespace RecoveryKey {
    const Kty: {
      readonly Okp: 'OKP';
    };
    type Kty = (typeof Kty)[keyof typeof Kty];
    const Crv: {
      readonly Ed25519: 'Ed25519';
    };
    type Crv = (typeof Crv)[keyof typeof Crv];
  }
  type Scopes = Scopes.Item[];
  namespace Scopes {
    const Item: {
      readonly AccountRead: 'account:read';
      readonly ApplicationsRead: 'applications:read';
      readonly ApplicationsWrite: 'applications:write';
      readonly AgentsRead: 'agents:read';
      readonly AgentsWrite: 'agents:write';
      readonly SessionsRead: 'sessions:read';
      readonly SessionsWrite: 'sessions:write';
      readonly DirectoryRead: 'directory:read';
      readonly AgentRead: 'agent:read';
      readonly AgentWrite: 'agent:write';
      readonly BuilderRead: 'builder:read';
      readonly BuilderWrite: 'builder:write';
      readonly OperationsRead: 'operations:read';
      readonly OperationsWrite: 'operations:write';
    };
    type Item = (typeof Item)[keyof typeof Item];
  }
}
