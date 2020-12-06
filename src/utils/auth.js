import { isAuthCookiesExists, clearSessionData } from './cookies';
import { API_PATH } from './constants';

export default class Auth {
  constructor() {
    this.isAuthenticated = isAuthCookiesExists();
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }

  checkCookie() {
    if (isAuthCookiesExists()) {
      this.isAuthenticated = isAuthCookiesExists();
      return true;
    } else {
      throw new Error('Invalid cookie!');
    }
  }

  logoff() {
    clearSessionData();
    window.location.replace(API_PATH.LOGIN_PAGE);
  }

  timedOut() {
    clearSessionData();
    window.location.replace(`${API_PATH.LOGIN_PAGE}?timedOut=yes`);
  }
}
