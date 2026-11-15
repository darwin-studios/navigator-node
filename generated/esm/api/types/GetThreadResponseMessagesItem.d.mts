import type * as Darwin from "../index.mjs";
export type GetThreadResponseMessagesItem = Darwin.GetThreadResponseMessagesItem.InputResponse | Darwin.GetThreadResponseMessagesItem.Message | Darwin.GetThreadResponseMessagesItem.Result;
export declare namespace GetThreadResponseMessagesItem {
    interface InputResponse {
        type: "input_response";
        message: string;
        from: GetThreadResponseMessagesItemInputResponse.From;
        content: Darwin.GetThreadResponseMessagesItemInputResponseContentItem[];
        status: GetThreadResponseMessagesItemInputResponse.Status;
        createdAt: string;
        request: string;
        arguments: Record<string, unknown>;
    }
    namespace GetThreadResponseMessagesItemInputResponse {
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
        from: GetThreadResponseMessagesItemMessage.From;
        content: Darwin.GetThreadResponseMessagesItemMessageContentItem[];
        status: GetThreadResponseMessagesItemMessage.Status;
        createdAt: string;
    }
    namespace GetThreadResponseMessagesItemMessage {
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
        from: GetThreadResponseMessagesItemResult.From;
        content: Darwin.GetThreadResponseMessagesItemResultContentItem[];
        status: GetThreadResponseMessagesItemResult.Status;
        createdAt: string;
        data?: unknown | undefined;
    }
    namespace GetThreadResponseMessagesItemResult {
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
