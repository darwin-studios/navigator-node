import type * as Darwin from "../index.mjs";
export type ActV3RequestResponseThreadsItemStateMessagesItem = Darwin.ActV3RequestResponseThreadsItemStateMessagesItem.InputResponse | Darwin.ActV3RequestResponseThreadsItemStateMessagesItem.Message | Darwin.ActV3RequestResponseThreadsItemStateMessagesItem.Result;
export declare namespace ActV3RequestResponseThreadsItemStateMessagesItem {
    interface InputResponse {
        type: "input_response";
        message: string;
        from: ActV3RequestResponseThreadsItemStateMessagesItemInputResponse.From;
        content: Darwin.ActV3RequestResponseThreadsItemStateMessagesItemInputResponseContentItem[];
        status: ActV3RequestResponseThreadsItemStateMessagesItemInputResponse.Status;
        createdAt: string;
        request: string;
        arguments: Record<string, unknown>;
    }
    namespace ActV3RequestResponseThreadsItemStateMessagesItemInputResponse {
        const From: {
            readonly You: "you";
            readonly Agent: "agent";
            readonly Darwin: "darwin";
        };
        type From = (typeof From)[keyof typeof From];
        const Status: {
            readonly Accepted: "accepted";
            readonly Delivered: "delivered";
            readonly Failed: "failed";
            readonly Unknown: "unknown";
        };
        type Status = (typeof Status)[keyof typeof Status];
    }
    interface Message {
        type: "message";
        message: string;
        from: ActV3RequestResponseThreadsItemStateMessagesItemMessage.From;
        content: Darwin.ActV3RequestResponseThreadsItemStateMessagesItemMessageContentItem[];
        status: ActV3RequestResponseThreadsItemStateMessagesItemMessage.Status;
        createdAt: string;
    }
    namespace ActV3RequestResponseThreadsItemStateMessagesItemMessage {
        const From: {
            readonly You: "you";
            readonly Agent: "agent";
            readonly Darwin: "darwin";
        };
        type From = (typeof From)[keyof typeof From];
        const Status: {
            readonly Accepted: "accepted";
            readonly Delivered: "delivered";
            readonly Failed: "failed";
            readonly Unknown: "unknown";
        };
        type Status = (typeof Status)[keyof typeof Status];
    }
    interface Result {
        type: "result";
        message: string;
        from: ActV3RequestResponseThreadsItemStateMessagesItemResult.From;
        content: Darwin.ActV3RequestResponseThreadsItemStateMessagesItemResultContentItem[];
        status: ActV3RequestResponseThreadsItemStateMessagesItemResult.Status;
        createdAt: string;
        data?: unknown | undefined;
    }
    namespace ActV3RequestResponseThreadsItemStateMessagesItemResult {
        const From: {
            readonly You: "you";
            readonly Agent: "agent";
            readonly Darwin: "darwin";
        };
        type From = (typeof From)[keyof typeof From];
        const Status: {
            readonly Accepted: "accepted";
            readonly Delivered: "delivered";
            readonly Failed: "failed";
            readonly Unknown: "unknown";
        };
        type Status = (typeof Status)[keyof typeof Status];
    }
}
