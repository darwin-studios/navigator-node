import type * as Darwin from '../index.js';

export type ActV3ResponseRequestThreadsItemStateMessagesItemMessageContentItem =
  | Darwin.ActV3ResponseRequestThreadsItemStateMessagesItemMessageContentItem.Text
  | Darwin.ActV3ResponseRequestThreadsItemStateMessagesItemMessageContentItem.Image
  | Darwin.ActV3ResponseRequestThreadsItemStateMessagesItemMessageContentItem.Audio
  | Darwin.ActV3ResponseRequestThreadsItemStateMessagesItemMessageContentItem.Video
  | Darwin.ActV3ResponseRequestThreadsItemStateMessagesItemMessageContentItem.File
  | Darwin.ActV3ResponseRequestThreadsItemStateMessagesItemMessageContentItem.OwnerFile;
export declare namespace ActV3ResponseRequestThreadsItemStateMessagesItemMessageContentItem {
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
