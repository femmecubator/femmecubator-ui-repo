import Cookies from 'universal-cookie';

const cookies = new Cookies();

const COOKIES_LIST = {
  SESSIONID: 'SESSIONID',
  TOKEN: 'TOKEN',
};

function isAuthCookiesExists() {
  return !!cookies.get('SESSIONID') || process.env.REACT_APP_TESTING;
}

function clearSessionData() {
  const options = {
    domain:
      window.location.hostname === 'localhost'
        ? 'localhost'
        : 'femmecubator.com',
    path: '/',
  };

  for (const cookie of Object.keys(COOKIES_LIST)) {
    cookies.remove(cookie, options);
  }
}

export { isAuthCookiesExists, clearSessionData };
