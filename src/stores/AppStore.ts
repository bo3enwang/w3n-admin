import { observable, action, computed } from "mobx";
import constant from "utils/constant";

export default class AppStore {
  @observable
  authToken: string | null;

  constructor() {
    this.authToken = localStorage.getItem(constant.AUTH_TOKEN);
  }

  @computed
  get isLogin() {
    // return !!this.authToken;
    return true;
  }

  @action
  login = (username, password) => {
    console.log(username, password);
    this.authToken = username + password;
  };

  @action
  logout = () => {
    this.authToken = null;
    localStorage.removeItem(constant.AUTH_TOKEN);
  };
}
