import type * as Darwin from '../index.js';

export type ManageRequestBody =
  | Darwin.ManageRequestBody.ListAgents
  | Darwin.ManageRequestBody.GetAgent
  | Darwin.ManageRequestBody.CreateUpdate
  | Darwin.ManageRequestBody.DeploymentStatus
  | Darwin.ManageRequestBody.Rollback;
export declare namespace ManageRequestBody {
  interface ListAgents {
    action: 'list_agents';
    offset?: number | undefined;
  }
  interface GetAgent {
    action: 'get_agent';
    draftId: string;
  }
  interface CreateUpdate {
    action: 'create_update';
    draftId: string;
    revision: number;
    expectedRevision: number;
  }
  interface DeploymentStatus {
    action: 'deployment_status';
    draftId: string;
    releaseId: string;
  }
  interface Rollback {
    action: 'rollback';
    draftId: string;
    releaseId: string;
  }
}
