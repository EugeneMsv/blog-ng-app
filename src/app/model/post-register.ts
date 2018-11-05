import {Identity} from "./identity";

export class PostRegister extends Identity {
  id: number;
  preview: string;
  likes: number;
  views: number;
  commentsNum: number;
  createdTime: Date;
  metaInfo: Date;
}
