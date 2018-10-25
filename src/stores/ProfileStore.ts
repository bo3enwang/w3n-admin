import { observable } from "mobx";

export default class ProfileStore {
  @observable
  userInfo: any;
  @observable
  token: string;

  constructor() {
    this.userInfo = {}
  }
}
