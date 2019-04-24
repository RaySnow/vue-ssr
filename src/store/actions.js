'use strict';

import * as Type from './type';
import Vue from 'vue';
import Vuex from 'vuex';
import request from '../framework/network/request';
// import { Message } from 'element-ui';
import router from '../router'

Vue.use(Vuex);

const Message = function () {
    console.log("message")
};

const actions = {
    //bannerlist
    [Type.GET_BANNER_LIST]: ({commit}, param) => {
        return request.get('/api/banners', {params: param}).then((data) => {
            console.log("data ")
            if (+data.code === 1) {
                commit(Type.GET_BANNER_LIST, {bannerList: data.data})
            } else {
                Message({
                    message: data.message,
                    type: 'error'
                });
            }
        }).catch(e => {
            console.log(e.message);
        });
    }
};

export default actions;
