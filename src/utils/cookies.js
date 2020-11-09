import Cookies from 'universal-cookie';

const cookies = new Cookies();

function isAuthCookiesExists() {
  return !!cookies.get('SESSIONID') || process.env.REACT_APP_MOCK_API_TRUE;
}

export { isAuthCookiesExists };
