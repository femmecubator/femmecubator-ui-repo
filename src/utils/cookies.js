import Cookies from 'universal-cookie';

const cookies = new Cookies();

function isAuthCookiesExists() {
  return !!(
    cookies.get('FemmecubatorSession') || process.env.NODE_ENV !== 'production'
  );
}

export { isAuthCookiesExists };
