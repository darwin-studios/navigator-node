import type * as Darwin from '../index.js';

export type ActV3GetThreadResponseMessagesItem =
  | Darwin.ActV3GetThreadResponseMessagesItem.InputResponse
  | Darwin.ActV3GetThreadResponseMessagesItem.Message
  | Darwin.ActV3GetThreadResponseMessagesItem.Result;
export declare namespace ActV3GetThreadResponseMessagesItem {
  interface InputResponse {
    type: 'input_response';
    message: string;
    from: ActV3GetThreadResponseMessagesItemInputResponse.From;
    content: Darwin.ActV3GetThreadResponseMessagesItemInputResponseContentItem[];
    status: ActV3GetThreadResponseMessagesItemInputResponse.Status;
    createdAt: string;
    request: string;
    arguments: Record<string, unknown>;
  }
  namespace ActV3GetThreadResponseMessagesItemInputResponse {
    const From: {
      readonly You: 'you';
      readonly Agent: 'agent';
      readonly Darwin: 'darwin';
    };
    type From = (typeof From)[keyof typeof From];
    const Status: {
      readonly Accepted: 'accepted';
      readonly Delivered: 'delivered';
      readonly Failed: 'failed';
      readonly Unknown: 'unknown';
    };
    type Status = (typeof Status)[keyof typeof Status];
  }
  interface Message {
    type: 'message';
    message: string;
    from: ActV3GetThreadResponseMessagesItemMessage.From;
    content: Darwin.ActV3GetThreadResponseMessagesItemMessageContentItem[];
    status: ActV3GetThreadResponseMessagesItemMessage.Status;
    createdAt: string;
  }
  namespace ActV3GetThreadResponseMessagesItemMessage {
    const From: {
      readonly You: 'you';
      readonly Agent: 'agent';
      readonly Darwin: 'darwin';
    };
    type From = (typeof From)[keyof typeof From];
    const Status: {
      readonly Accepted: 'accepted';
      readonly Delivered: 'delivered';
      readonly Failed: 'failed';
      readonly Unknown: 'unknown';
    };
    type Status = (typeof Status)[keyof typeof Status];
  }
  interface Result {
    type: 'result';
    message: string;
    from: ActV3GetThreadResponseMessagesItemResult.From;
    content: Darwin.ActV3GetThreadResponseMessagesItemResultContentItem[];
    status: ActV3GetThreadResponseMessagesItemResult.Status;
    createdAt: string;
    data?: unknown | undefined;
  }
  namespace ActV3GetThreadResponseMessagesItemResult {
    const From: {
      readonly You: 'you';
      readonly Agent: 'agent';
      readonly Darwin: 'darwin';
    };
    type From = (typeof From)[keyof typeof From];
    const Status: {
      readonly Accepted: 'accepted';
      readonly Delivered: 'delivered';
      readonly Failed: 'failed';
      readonly Unknown: 'unknown';
    };
    type Status = (typeof Status)[keyof typeof Status];
  }
}
