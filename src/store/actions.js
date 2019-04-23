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

  [Type.TEST_TYPE]: (store, json) => {
    const {state, commit} = store
    // 1. 调用node层接口 post
    // return request.post('/test/api/testApi', json, store).then(response => {
    // });
    // 调用node层接口 get
    return request.get('/test/api/abc/abc?a=4', store).then((data) => {
      commit(Type.TEST_TYPE, {numDelta: 1})
    });
  },
  //获取验证码
  [Type.GET_CODE]: (store, json) => {
    const {state, commit} = store;
    let {phone, timestamp} = json;
    return request.get('/api/customers/getVerificationCode?phone='+phone+'&timestamp='+timestamp, store).then((data) => {
      if(+data.code===1){
        Message({
          message: '验证码发送成功',
          type: 'success'
        });
        commit(Type.GET_CODE, {data: data.data})
      }
    }).catch(e=>{
      console.log(e.message);
    });
  },
  //验证码登陆
  [Type.REGISTER]: (store, json) => {
    const {state, commit} = store;
    return request.post('/api/customers/register',json,store).then((data) => {
      if(+data.code===1){
        Message({
          message: '登陆成功',
          type: 'success'
        });
        let param={
          token:data.data.token,
          mobile:data.data.mobile,
        }
        commit(Type.REGISTER, {param:param})
        router.push({path:'/indexView'})
      }else{
        Message({
          message: data.message,
          type: 'error'
        });
      }
    }).catch(e=>{
      console.log(e)
      console.log(e.message);
    });
  },
  //bannerlist
  [Type.GET_BANNER_LIST]: (store, json) => {
    const {state, commit} = store;
    let{city,province}=json;
    return request.get('/api/banners?city='+city+'&province='+province,store).then((data) => {
      if(+data.code===1){
        commit(Type.GET_BANNER_LIST, {bannerList:data.data})
      }else{
        Message({
          message: data.message,
          type: 'error'
        });
      }
    }).catch(e=>{
      console.log(e)
      console.log(e.message);
    });
  },
  //全国门店列表
  [Type.GET_STORE_LIST]: (store, json) => {
    const {state, commit} = store;
    let{pageSize,current}=json;
    commit(Type.SET_FETCH, {flag: false});
    return request.get('/api/common/query_all_store?pageSize='+pageSize+'&current='+current,store).then((data) => {
      if(+data.code===1){
        if(data.data.dataList) {
          commit(Type.GET_STORE_LIST, {storeList:data.data.dataList})
        }
        if(data.data.dataList.length>=pageSize) {
          commit(Type.SET_FETCH, {flag: true})
        }
      }else{
        Message({
          message: data.message,
          type: 'error'
        });
      }
    }).catch(e=>{
      console.log(e)
      console.log(e.message);
    });
  },
  // 商品分类
  [Type.QUERY_GOODS_TYPE]: (store) =>{
    const {commit} = store
    return request.get('/api/article/queryGoodsType', store).then((data) => {
      if(+data.code===1){
        commit(Type.QUERY_GOODS_TYPE, {obj: data.data})
      }else{
        Message({
          message: data.message,
          type: 'error'
        });
      }
    }).catch(e=>{
      console.log(e.message);
    });
  },
  // 标签
  [Type.QUERY_ALL_TAG]: (store) =>{
    const {commit} = store
    return request.get('/api/article/query_all_tag', store).then((data) => {
      if(+data.code===1){
        commit(Type.QUERY_ALL_TAG, {obj: data.data})
      }else{
        Message({
          message: data.message,
          type: 'error'
        });
      }
    }).catch(e=>{
      console.log(e.message);
    });
  },
  // 获取列表
  [Type.GET_PRODUCT_LIST]: (store) =>{
    const {state, commit} = store
    const {product_search_info} = state
    const {pageSize} = product_search_info
    commit(Type.SET_FETCH, {flag: false})
    return request.get(`/api/article/query_list`,store, {params: product_search_info}).then((data) => {
      if(+data.code===1){
        commit(Type.GET_PRODUCT_LIST, {list: data.data.dataList})
        if(data.data.dataList.length>=pageSize) {
          commit(Type.SET_FETCH, {flag: true})
        }
      }else{
        Message({
          message: data.message,
          type: 'error'
        });
      }
    }).catch(e=>{
      console.log(e.message);
    });
  },
  [Type.GET_CITY_LIST]: (store, json) => {
    const {state, commit} = store;
    return request.get('/api/website_configs?type=1',store).then((data) => {
      if(+data.code===1){
        commit(Type.GET_CITY_LIST, {cityList:data})
      }else{
        Message({
          message: data.message,
          type: 'error'
        });
      }
    }).catch(e=>{
      console.log(e)
      console.log(e.message);
    });
  },
  // 我的收藏列表
  [Type.MY_MARK_LIST]: (store) => {
    const {commit} = store;
    return request.get(`/api/customers/query_favorites`, store).then((data) => {
      if(+data.code===1){
        commit(Type.MY_MARK_LIST, {list: data.data})
      }else{
        Message({
          message: data.message,
          type: 'error'
        });
      }
    }).catch(e=>{
      console.log(e)
      console.log(e.message);
    });
  },
  // 加入收藏
  [Type.ADD_TO_MARK]: (store, {id}) => {
    return request.get(`/api/customers/add_favorite?id=${id}`, store).then((data) => {
      if(+data.code===1){
        Message({
          message: '收藏成功',
          type: 'success'
        });
      }else if(data.errorCode==='1201'){
        Message({
          message: '请重新登陆',
          type: 'error'
        });
      }else{
        Message({
          message: data.message,
          type: 'error'
        });
      }
    }).catch(e=>{
      console.log(e)
      console.log(e.message);
    });
  },
  // 商品、文章、案例详情
  [Type.QUERY_ARTICLE_DETAIL]: (store, {id}) => {
    const {commit} = store
    return request.get(`/api/article/query_detail?id=${id}`, store).then((data) => {
      if(+data.code===1){
        commit(Type.QUERY_ARTICLE_DETAIL, {article: data.data})
      }else{
        Message({
          message: data.message,
          type: 'error'
        });
      }
    }).catch(e=>{
      console.log(e)
      console.log(e.message);
    });
  },
  // 预约
  [Type.APPOINTMENT]: (store, param) => {
    const {commit} = store
    return request.post(`/api/customers/appointment`,param,store).then((data) => {
      if(+data.code===1){
        Message({
          message: '预约成功,稍后会有意罗尼客服人员与您联系，请耐心等候',
          type: 'success',
          duration:3000
        });
      }else{
        Message({
          message: data.message,
          type: 'error'
        });
      }
    }).catch(e=>{
      console.log(e.message);
    });
  },
  // 获取列表
  [Type.GET_ARTICLE_LIST]: (store,param) =>{
    const {state, commit} = store;
    const {current, pageSize, type} = param;
    commit(Type.SET_FETCH, {flag: false})
    return request.get(`/api/article/query_list?type=${type}&current=${current}&pageSize=${pageSize}`,store).then((data) => {
      if(+data.code===1){
        commit(Type.GET_ARTICLE_LIST, {list: data.data.dataList})
        if(data.data.dataList.length>=pageSize) {
          commit(Type.SET_FETCH, {flag: true})
        }
      }else{
        Message({
          message: data.message,
          type: 'error'
        });
      }
    }).catch(e=>{
      console.log(e.message);
    });
  },
};

export default actions;
