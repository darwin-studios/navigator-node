import type * as Darwin from '../index.js';

export type ActV3GetThreadResponseMessagesItemMessageContentItem =
  | Darwin.ActV3GetThreadResponseMessagesItemMessageContentItem.Text
  | Darwin.ActV3GetThreadResponseMessagesItemMessageContentItem.Image
  | Darwin.ActV3GetThreadResponseMessagesItemMessageContentItem.Audio
  | Darwin.ActV3GetThreadResponseMessagesItemMessageContentItem.Video
  | Darwin.ActV3GetThreadResponseMessagesItemMessageContentItem.File
  | Darwin.ActV3GetThreadResponseMessagesItemMessageContentItem.OwnerFile;
export declare namespace ActV3GetThreadResponseMessagesItemMessageContentItem {
  interface Text {
    type: 'text';
    text: string;
  }
  interface Image {
    type: 'image';
    assetId: string;
  }
  interface Audio {
    type: 'audio';
    assetId: string;
  }
  interface Video {
    type: 'video';
    assetId: string;
  }
  interface File {
    type: 'file';
    assetId: string;
  }
  interface OwnerFile {
    type: 'owner_file';
    inputRef: string;
  }
}
