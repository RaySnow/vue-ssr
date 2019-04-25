'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import { Message } from 'element-ui';
import getBanners from '../api/getBanners'

Vue.use(Vuex);

const actions = {
    //bannerlist
    [GET_BANNER_LIST]: ({commit}, params) => {
        return getBanners(params).then((res) => {
            if(res.data) {
                console.log("data: ", res.data)
                commit(Type.GET_BANNER_LIST, {bannerList: res.data})
            }
            if(res.error) {
                if(process.env.VUE_ENV === 'client') {
                    Message({
                        message: data.message,
                        type: 'error'
                    });
                } else {
                    console.log(`Request Error: /api/banners: ${data.message}`)
                }
            }
        })
    }
};

export default actions;
