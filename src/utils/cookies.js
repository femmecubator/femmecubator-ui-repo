import jwtDecode from 'jwt-decode';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const COOKIES_LIST = {
  SESSIONID: 'SESSIONID',
  TOKEN: 'TOKEN',
};

function isAuthCookiesExists() {
  return !!cookies.get('SESSIONID');
}

function getTokenCookie() {
  return cookies.get('TOKEN');
}

export function getUserRole() {
  return jwtDecode(cookies.get('TOKEN')).role_id;
}

function clearSessionData() {
  const options = {
    domain: process.env.REACT_APP_DOMAIN || '.femmecubator.com',
    path: '/',
  };

  for (const cookie of Object.keys(COOKIES_LIST)) {
    cookies.remove(cookie, options);
  }
}

export { isAuthCookiesExists, getTokenCookie, clearSessionData };
