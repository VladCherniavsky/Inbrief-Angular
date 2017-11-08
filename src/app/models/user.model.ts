export class UserModel {
  _id: string;
  isAdmin: boolean = false;
  email: string;

  constructor(obj: any) {
    this._id = obj._id;
    this.isAdmin = obj.isAdmin;
    this.email = obj.email;
  }
}
