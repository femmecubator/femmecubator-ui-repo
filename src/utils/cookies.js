import Cookies from 'universal-cookie';

const cookies = new Cookies();

const COOKIES_LIST = {
  SESSIONID: 'SESSIONID',
  TOKEN: 'TOKEN',
};

function isAuthCookiesExists() {
  return !!cookies.get('SESSIONID');
}

function clearSessionData() {
  const options = {
    domain: '.femmecubator.com' || '.ondigitalocean.app',
    path: '/',
  };

  for (const cookie of Object.keys(COOKIES_LIST)) {
    cookies.remove(cookie, options);
  }
}

export { isAuthCookiesExists, clearSessionData };
