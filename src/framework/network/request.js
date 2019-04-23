'use strict';
import axios from 'axios';
import qs from 'qs';
import Promise from 'promise-polyfill';
import querystring from 'querystring';
// import {getCookie} from './cookie';

if(typeof(window) !== 'undefined') {
    if (!window.Promise) {
        window.Promise = Promise;
    }
}

const BASE_URL = "http://m.ylnhome.com"

// axios.defaults.baseURL = 'http://127.0.0.1:7001';
axios.defaults.timeout = 15000;
axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = 'x-csrf-token';
axios.defaults.xsrfCookieName = 'csrfToken';

axios.defaults.paramsSerializer = params => qs.stringify(params, { arrayFormat: 'brackets' });
// http请求拦截器method
axios.interceptors.request.use((config) => {
    if (config.withoutXToken) {
        return config;
    }
    return {
        ...config,
        params: {
            ...config.params,
            token: "", // todo 可以在这里带上前端持有的token
            // token: getCookie('token'), // todo 可以在这里带上前端持有的token
        },
    };
}, error => Promise.reject(error));
//
// // http响应拦截器
axios.interceptors.response.use((response) => {
    if (response.status !== 200) {
        throw new Error('接口请求异常');
    }
    // if (response.data.code === 0) {
    //     throw new Error('请求失败');
    // }
    return response.data;
}, error => Promise.reject(error));

export default {
  post(url, json, store = {}) {
    const { state = { origin: '' } } = store;
    const headers = {};
    if (typeof(window) === 'undefined') {
      headers['x-csrf-token'] = state.csrf;
      // headers.Cookie = `csrfToken=${state.csrf}`;
      headers.Cookie = `token=${state.csrf}`;
    }
    return axios.post(`${BASE_URL}${url}`, json, { headers });
  },
  get(url, {params}={}) {
      console.log("URL: ", `${BASE_URL}${url}`);
    return axios.get(`${BASE_URL}${url}`, querystring.stringify({params: params }));
  }
};
