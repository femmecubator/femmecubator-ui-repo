import { isAuthCookiesExists, clearSessionData } from './cookies';
import { API_PATH } from './constants';

export default class Auth {
  static isLoggedIn() {
    return isAuthCookiesExists();
  }

  static logoff() {
    clearSessionData();
    window.location.replace(API_PATH.LOGIN_PAGE);
  }

  static timedOut() {
    clearSessionData();
    window.location.replace(`${API_PATH.LOGIN_PAGE}?timedOut=yes`);
  }
}
