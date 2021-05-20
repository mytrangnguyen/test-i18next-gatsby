import axios from 'axios';
import { getToken } from '.';

const TIME_OUT = 30000;
const request = axios.create({
  baseURL: `${process.env.GATSBY_API_URL}/api/v1`,
  timeout: TIME_OUT,
  withCredentials: true,
});

export const setInitHeader = (ctx) => {
  if (!ctx) {
    const token = getToken();
    if (token) {
      request.defaults.headers.common.authorization = token;
    }
  }
  request.interceptors.request.use(
    (config) => {
      const token = getToken(ctx);
      if (token) {
        // eslint-disable-next-line
        config.headers.authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => Promise.reject(error?.response || error.message),
  );
};

request.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      new Error(error?.response?.data?.messageCode || 'Some thing went wrong'),
    ),
);

export default request;
