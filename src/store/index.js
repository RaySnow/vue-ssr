import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      articleTotal: 0,
      articleList: [],
      article: {},
      num: 0,
      //商品分类
      goods_type: {},
      // 标签
      all_tag: [],
      // 搜索条件, 页数, 每页条数, 点击的style
      product_search_info: { tagIds: '', type: '', subType: '', current: 1, pageSize: 12 },
      // 展示内容
      product_list: [],
      // 是否继续搜索, (在搜索中或者返回length<6时为false)
      fetching: true,
      // 我的收藏
      my_mark_list: {example: [], goods: [], article: []},
      // 文章详情
      article_detail: {},
      phoneNum:'',
      cityList:[],
      province:'',
      cityName:'',
      bannerList:[],
      storeList:[],
      sendCode:false,
    },
    actions,
    mutations,
    getters
  })
}
