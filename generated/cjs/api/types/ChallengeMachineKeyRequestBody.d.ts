export type ChallengeMachineKeyRequestBody =
  | {
      purpose: 'token';
    }
  | {
      purpose: 'recover';
      publicKey: {
        kty: 'OKP';
        crv: 'Ed25519';
        x: string;
      };
      recoveryKey: {
        kty: 'OKP';
        crv: 'Ed25519';
        x: string;
      };
    };
