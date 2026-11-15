export interface SendMessageResponse {
  thread: string;
  message: string;
  status: SendMessageResponse.Status;
  cursor: string;
  idempotencyKey: string;
}
export declare namespace SendMessageResponse {
  const Status: {
    readonly Accepted: 'accepted';
  };
  type Status = (typeof Status)[keyof typeof Status];
}
