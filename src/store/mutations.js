'use strict';

import {setCookie} from '../framework/network/cookie';
import {
  TEST_TYPE,
  GET_CODE,
  REGISTER,
  GET_CITY_LIST,
  MY_MARK_LIST,
  QUERY_ARTICLE_DETAIL,
  SET_FETCH,
  GET_PRODUCT_LIST,
  GET_BANNER_LIST,
  GET_STORE_LIST,
  GET_ARTICLE_LIST,
  QUERY_GOODS_TYPE,
  QUERY_ALL_TAG,
  CHANGE_SEARCH_INFO
} from './type';

const mutations = {
  [TEST_TYPE](state, {numDelta}) {
    state.num += numDelta;
  },
  [QUERY_GOODS_TYPE](state, {obj}) {
    state.goods_type = obj;
  },
  [QUERY_ALL_TAG](state, {obj}) {
    state.all_tag = obj;
  },
  [GET_PRODUCT_LIST](state, {list}) {
    // 页码是 1 表示重新开始
    if(state.product_search_info.current==1) {
      state.product_list = list;
    }else {
      state.product_list = [...state.product_list, ...list];
    }
  },
  [CHANGE_SEARCH_INFO](state, {key, value}) {
    state.product_search_info = {...state.product_search_info, [key]: value}
  },
//获取验证码
  [GET_CODE](state, {numDelta}) {
    state.sendCode=true;
  },
  sendCodeAgain(state,status){
    state.sendCode=status;
  },
  //登陆
  [REGISTER](state, {param}) {
    localStorage.setItem('phoneNum',param.mobile);
    setCookie('token',param.token);
    state.token = param.token;
    state.phoneNum = param.mobile;
    state.csrf = param.token;
  },
  logout(state){
    localStorage.removeItem("phoneNum")
    state.token = '';
    state.phoneNum = '';
    state.csrf = '';
  },
  // 是否继续获取
  [SET_FETCH](state, {flag}) {
    state.fetching = flag;
  },
  // 城市列表
  [GET_CITY_LIST](state, {cityList}) {
    state.cityList = cityList;
  },
  // 定位城市
  getCity(state,{cityName,province}){
    state.cityName = cityName;
    state.province = province;
  },
  // 我的收藏
  [MY_MARK_LIST](state, {list}) {
    state.my_mark_list = list;
  },
  // 文章详情
  [QUERY_ARTICLE_DETAIL](state, {article}) {
    state.article_detail = article;
  },
  // bannerList
  [GET_BANNER_LIST](state, {bannerList}) {
    state.bannerList = bannerList;
  },
  // 全国门店列表
  [GET_STORE_LIST](state, {storeList}) {
    state.storeList.push(...storeList);
    // state.fetching = true;
  },
  clearStore(state){
    state.storeList=[];
  },
  // 文章攻略列表
  [GET_ARTICLE_LIST](state, {list}) {
    state.articleList.push(...list);
  },
  clearArticle(state){
    state.articleList=[];
  },
};
export default mutations;
