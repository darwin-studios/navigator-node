import type * as Darwin from '../index.js';

export type ActV3RequestResponseThreadsItemStateMessagesItemInputResponseContentItem =
  | Darwin.ActV3RequestResponseThreadsItemStateMessagesItemInputResponseContentItem.Text
  | Darwin.ActV3RequestResponseThreadsItemStateMessagesItemInputResponseContentItem.Image
  | Darwin.ActV3RequestResponseThreadsItemStateMessagesItemInputResponseContentItem.Audio
  | Darwin.ActV3RequestResponseThreadsItemStateMessagesItemInputResponseContentItem.Video
  | Darwin.ActV3RequestResponseThreadsItemStateMessagesItemInputResponseContentItem.File;
export declare namespace ActV3RequestResponseThreadsItemStateMessagesItemInputResponseContentItem {
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
