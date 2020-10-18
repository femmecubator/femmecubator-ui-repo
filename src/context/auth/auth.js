import { isAuthCookiesExists } from "../../utils/cookies";
import { API_PATH } from "../../utils/constants";

export default class Auth {
  constructor() {
    this.isAuthenticated = isAuthCookiesExists();
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }

  logoff() {
    this.location.replace(API_PATH.LOGOFF_ENDPOINT);
  }

  timedOut() {
    this.location.replace(API_PATH.location);
  }
}
