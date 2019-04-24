'use strict';
import axios from 'axios';
import qs from 'qs';
import Promise from 'promise-polyfill';
import querystring from 'querystring';
// import {getCookie} from './cookie';

import createUrl from '../utils/createUrl';

if (process.env.VUE_ENV === 'client') {
    if (!window.Promise) {
        window.Promise = Promise;
    }
}

const BASE_URL = "http://m.ylnhome.com"

axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 15000;
axios.defaults.withCredentials = true;
axios.defaults.paramsSerializer = params => {
    process.env.VUE_ENV === 'server' ? querystring.stringify(params, {arrayFormat: 'brackets'}) : qs.stringify(params, {arrayFormat: 'brackets'});
}
// http请求拦截器method
// axios.interceptors.request.use((config) => {
//     console.log("======= request : ", {
//         ...config,
//         params: {
//             ...config.params,
//             token: "", // todo 可以在这里带上前端持有的token
//             // token: getCookie('token'), // todo 可以在这里带上前端持有的token
//         },
//     })
//     return {
//         ...config,
//         params: {
//             ...config.params,
//             token: "", // todo 可以在这里带上前端持有的token
//             // token: getCookie('token'), // todo 可以在这里带上前端持有的token
//         },
//     };
// }, error => Promise.reject(error));
//
const newAxios = function () {
    const instance = axios.create();
    // // http响应拦截器
    instance.interceptors.response.use((response) => {
        if (response.status !== 200) {
            throw new Error('接口请求异常');
        }
        return response.data;
    }, error => Promise.reject(error));

    return instance
}

export default {
    post(url, {params, data}) {
        const instance = newAxios();
        const options = {
            method: 'POST',
            headers: {'content-type': "application/json"},
            data: process.env.VUE_ENV === 'server' ? querystring.stringify({params: params}) : qs.stringify(data),
            url: createUrl(url, params),
        };
        console.log(options);
        return instance(options)
    },
    get(url, {params}) {
        const instance = newAxios();
        const options = {
            method: 'GET',
            headers: {'content-type': 'application/x-www-form-urlencoded'},
            url: createUrl(url, params)
        };
        console.log("in get");
        return instance(options)
    }
};
