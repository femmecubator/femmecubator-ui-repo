import Cookies from 'universal-cookie';

const cookies = new Cookies();

function isAuthCookiesExists() {
  return !!cookies.get('SESSIONID');
}

export { isAuthCookiesExists };
