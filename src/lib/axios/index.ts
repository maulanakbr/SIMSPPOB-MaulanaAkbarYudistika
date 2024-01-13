import axios from 'axios';

import {store} from '@/app/store';

import {ENDPOINT_BASE_URL} from '../constants';

const instance = axios.create({
  baseURL: ENDPOINT_BASE_URL,
  timeout: 60000,
});

instance.interceptors.request.use(
  config => {
    const {token} = store.getState().membership;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export default instance;
