import { isAuthCookiesExists, clearSessionData } from './cookies';
import { API_PATH } from './constants';

export default class Auth {
  constructor() {
    this.isAuthenticated = isAuthCookiesExists();
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }

  logoff() {
    clearSessionData();
    this.location.replace(API_PATH.LOGIN_PAGE);
  }

  timedOut() {
    clearSessionData();
    this.location.replace(`${API_PATH.LOGIN_PAGE}?timedOut=yes`);
  }
}
