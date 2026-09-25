export interface ActionAttachment {
  id: string;
  name: string;
  type: string;
  kind: ActionAttachment.Kind;
  url: string;
  size: number;
}
export declare namespace ActionAttachment {
  const Kind: {
    readonly Image: 'image';
    readonly Video: 'video';
    readonly Audio: 'audio';
    readonly File: 'file';
  };
  type Kind = (typeof Kind)[keyof typeof Kind];
}
