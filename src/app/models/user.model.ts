export class UserModel {
  _id: string = null;
  isAdmin: boolean = false;
  email: string = null;

  constructor(obj: any) {
    this._id = obj._id;
    this.isAdmin = obj.isAdmin;
    this.email = obj.email;
  }
}
