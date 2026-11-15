import type * as Darwin from '../index.js';

export interface ActPostFailure {
  code: ActPostFailure.Code;
  stage: ActPostFailure.Stage;
  retryable: boolean;
  message: string;
  receipt: Darwin.ActV3RequestResponse;
  blockers: ActPostFailure.Blockers.Item[];
}
export declare namespace ActPostFailure {
  const Code: {
    readonly ActAdmissionBlocked: 'ACT_ADMISSION_BLOCKED';
    readonly ActHandoffUnconfirmed: 'ACT_HANDOFF_UNCONFIRMED';
  };
  type Code = (typeof Code)[keyof typeof Code];
  const Stage: {
    readonly Admission: 'admission';
    readonly Handoff: 'handoff';
  };
  type Stage = (typeof Stage)[keyof typeof Stage];
  type Blockers = Blockers.Item[];
  namespace Blockers {
    interface Item {
      agentId: string;
      operationId?: string | undefined;
      operationRevision?: number | undefined;
      code: string;
      nextAction: Item.NextAction;
    }
    namespace Item {
      interface NextAction {
        type: NextAction.Type;
        method: NextAction.Method;
        path: string;
      }
      namespace NextAction {
        const Type: {
          readonly InspectOperation: 'inspect_operation';
          readonly ReconcileRequest: 'reconcile_request';
        };
        type Type = (typeof Type)[keyof typeof Type];
        const Method: {
          readonly Get: 'GET';
        };
        type Method = (typeof Method)[keyof typeof Method];
      }
    }
  }
}
