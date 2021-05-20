import cookie from 'js-cookie';

export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value);
  }
};

export const removeCookie = (key) => {
  cookie.remove(key);
};

const getCookieFromBrowser = (key) => cookie.get(key);

const getCookieFromServer = (key, req) => {
  if (!req?.headers?.cookie) {
    return undefined;
  }
  const rawCookie =
    req &&
    req.headers &&
    req.headers.cookie.split(';').find((c) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split('=')[1];
};

export const getCookie = (key, req) =>
  process.browser ? getCookieFromBrowser(key) : getCookieFromServer(key, req);

// TODO: Token
export const getToken = (ctx = {}) => getCookie('authToken', ctx.req);
export const setToken = (value) => setCookie('authToken', value);
export const removeToken = () => removeCookie('authToken');
/**
 * Get authenticated status
 * @param {*} ctx optional
 */
export const isAuthenticated = (ctx) => !!getToken(ctx);
