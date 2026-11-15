import type * as Darwin from '../index.js';

export interface SearchAgent {
  /** Pass this exact ID as start_thread.targetAgent. */
  agent: string;
  name: string;
  description: string | null;
  category: string | null;
  handle: string | null;
  avatar: string | null;
  verified: boolean;
  readiness: SearchAgent.Readiness;
  canStartThread: boolean;
  canAttemptThread?: boolean | undefined;
  capabilities: Darwin.SearchActCapability[];
}
export declare namespace SearchAgent {
  const Readiness: {
    readonly Ready: 'ready';
    readonly AuthenticationRequired: 'authentication_required';
    readonly RecheckAvailable: 'recheck_available';
    readonly Unavailable: 'unavailable';
  };
  type Readiness = (typeof Readiness)[keyof typeof Readiness];
}
