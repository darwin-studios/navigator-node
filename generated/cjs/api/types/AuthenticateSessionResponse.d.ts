import type * as Darwin from '../index.js';

/**
 * A reusable, revocable relationship between the calling AI and one destination AI. A pending response includes one first-party webLink for any required account setup, sign-in, and authorization; a connected response includes a durable connection identifier.
 */
export interface AuthenticateSessionResponse {
  targetAiId: string;
  actionId: string | null;
  state: AuthenticateSessionResponse.State;
  connectionId: string | null;
  interaction?: Darwin.AuthenticationInteraction | undefined;
  webLink?: string | undefined;
}
export declare namespace AuthenticateSessionResponse {
  const State: {
    readonly Required: 'required';
    readonly Connected: 'connected';
  };
  type State = (typeof State)[keyof typeof State];
}
