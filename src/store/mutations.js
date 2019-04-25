'use strict';

import {
  GET_BANNER_LIST,
} from './type';

const mutations = {
  // bannerList
  [GET_BANNER_LIST](state, {bannerList}) {
    state.bannerList = bannerList;
  },
};
export default mutations;
