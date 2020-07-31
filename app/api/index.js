import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json, text/plain, */*',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
};


const defaultBody = {};

// Axios configuration
axios.defaults.baseURL = '';
axios.defaults.headers.common = { ...defaultHeaders };

// Add a request interceptor
axios.interceptors.request.use(config => config, error => error);

// Add a response interceptor
axios.interceptors.response.use((response) => {
  // Do something with response data
  response.statusText = 'ok';
  return response;
}, error => error);
export {
  defaultBody,
  mock,
  // @generator api: rest
};
