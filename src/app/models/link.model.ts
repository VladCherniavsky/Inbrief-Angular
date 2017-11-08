import {UserModel} from './user.model';

export class LinkModel {
  _id: string;
  clicks: number;
  shortLink: string;
  link: string;
  userId: UserModel;
  tags: string [];

  constructor(obj: any) {
    this._id = obj._id;
    this.clicks = obj.clicks;
    this.shortLink = obj.shortLink;
    this.link = obj.link;
    this.userId = new UserModel(obj);
    this.tags = obj.tags;
  }
}
