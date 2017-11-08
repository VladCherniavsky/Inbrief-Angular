import {UserModel} from './user.model';

export class LinkModel {
  _id: string = null;
  clicks: number = 0;
  shortLink: string = null;
  link: string = null;
  userId: UserModel = null;
  tags: string [] = [];

  constructor(obj: any) {
    this._id = obj._id;
    this.clicks = obj.clicks;
    this.shortLink = obj.shortLink;
    this.link = obj.link;
    this.userId = new UserModel(obj);
    this.tags = obj.tags;
  }
}
