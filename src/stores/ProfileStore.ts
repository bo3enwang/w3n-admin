import { observable } from "mobx";

export default class ProfileStore {
  @observable
  userInfo: any;
  @observable
  token: string;

  constructor() {
    console.log("just need init");
  }
}
