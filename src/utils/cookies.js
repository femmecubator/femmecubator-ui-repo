import Cookies from 'universal-cookie';

const cookies = new Cookies();

function isAuthCookiesExists() {
  return !!cookies.get('SESSIONID') || process.env.REACT_APP_TESTING;
}

export { isAuthCookiesExists };
