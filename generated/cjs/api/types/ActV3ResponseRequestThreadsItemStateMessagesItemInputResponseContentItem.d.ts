import type * as Darwin from '../index.js';

export type ActV3ResponseRequestThreadsItemStateMessagesItemInputResponseContentItem =
  | Darwin.ActV3ResponseRequestThreadsItemStateMessagesItemInputResponseContentItem.Text
  | Darwin.ActV3ResponseRequestThreadsItemStateMessagesItemInputResponseContentItem.Image
  | Darwin.ActV3ResponseRequestThreadsItemStateMessagesItemInputResponseContentItem.Audio
  | Darwin.ActV3ResponseRequestThreadsItemStateMessagesItemInputResponseContentItem.Video
  | Darwin.ActV3ResponseRequestThreadsItemStateMessagesItemInputResponseContentItem.File;
export declare namespace ActV3ResponseRequestThreadsItemStateMessagesItemInputResponseContentItem {
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
}
