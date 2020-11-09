import axios from 'axios';
import get from 'lodash/get';

axios.defaults.timeout = 200000;

axios.interceptors.request.use(
  config => {
    config.baseURL =
      get(window, 'blocklet.prefix') ||
      get(window, 'env.apiPrefix') ||
      process.env.GATSBY_NF_API_PREFIX ||
      process.env.GATSBY_API_PREFIX ||
      '';
    const token = window.localStorage.getItem('login_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default axios;
