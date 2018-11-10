import {Identity} from './base/identity';

export class PostRegister extends Identity {

  private _preview: string;

  private _likes: number;

  private _views: number;

  private _commentsNum: number;

  private _createdTime: Date;

  private _metaInfo: string;


  get preview(): string {
    return this._preview;
  }

  set preview(value: string) {
    this._preview = value;
  }

  get likes(): number {
    return this._likes;
  }

  set likes(value: number) {
    this._likes = value;
  }

  get views(): number {
    return this._views;
  }

  set views(value: number) {
    this._views = value;
  }

  get commentsNum(): number {
    return this._commentsNum;
  }

  set commentsNum(value: number) {
    this._commentsNum = value;
  }

  get createdTime(): Date {
    return this._createdTime;
  }

  set createdTime(value: Date) {
    this._createdTime = value;
  }

  get metaInfo(): string {
    return this._metaInfo;
  }

  set metaInfo(value: string) {
    this._metaInfo = value;
  }
}
