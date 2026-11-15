import type * as Darwin from '../index.js';

export type ActV3ResponseRequestThreadsItemStateMessagesItem =
  | Darwin.ActV3ResponseRequestThreadsItemStateMessagesItem.InputResponse
  | Darwin.ActV3ResponseRequestThreadsItemStateMessagesItem.Message
  | Darwin.ActV3ResponseRequestThreadsItemStateMessagesItem.Result;
export declare namespace ActV3ResponseRequestThreadsItemStateMessagesItem {
  interface InputResponse {
    type: 'input_response';
    message: string;
    from: ActV3ResponseRequestThreadsItemStateMessagesItemInputResponse.From;
    content: Darwin.ActV3ResponseRequestThreadsItemStateMessagesItemInputResponseContentItem[];
    status: ActV3ResponseRequestThreadsItemStateMessagesItemInputResponse.Status;
    createdAt: string;
    request: string;
    arguments: Record<string, unknown>;
  }
  namespace ActV3ResponseRequestThreadsItemStateMessagesItemInputResponse {
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
    from: ActV3ResponseRequestThreadsItemStateMessagesItemMessage.From;
    content: Darwin.ActV3ResponseRequestThreadsItemStateMessagesItemMessageContentItem[];
    status: ActV3ResponseRequestThreadsItemStateMessagesItemMessage.Status;
    createdAt: string;
  }
  namespace ActV3ResponseRequestThreadsItemStateMessagesItemMessage {
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
    from: ActV3ResponseRequestThreadsItemStateMessagesItemResult.From;
    content: Darwin.ActV3ResponseRequestThreadsItemStateMessagesItemResultContentItem[];
    status: ActV3ResponseRequestThreadsItemStateMessagesItemResult.Status;
    createdAt: string;
    data?: unknown | undefined;
  }
  namespace ActV3ResponseRequestThreadsItemStateMessagesItemResult {
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
