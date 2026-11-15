export interface StartThreadResponse {
    thread: string;
    message: string;
    status: StartThreadResponse.Status;
    cursor: string;
    idempotencyKey: string;
}
export declare namespace StartThreadResponse {
    const Status: {
        readonly Accepted: "accepted";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
