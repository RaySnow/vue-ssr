<template>
    <!--上面图 -->
    <!--名称 价格 -->
    <div class="product-show-container">
        <el-row class="product-show" :gutter="10">
            <el-col class="prd-item" v-for="(item) in product_list"
                    :key="item.id"
                    @click="go(item)" :sm="8" :lg="6">
                <img class="item-avatar" @click="go(item)"
                     :src="item.headPhotoUrl + '?x-oss-process=image/resize,m_pad,w_400,h_400,limit_0'" alt="">
                <div class="prd-item-detail">
                    <span class="case-name">{{item.name}}</span>
                </div>
            </el-col>
        </el-row>
        <p v-if="!product_list.length" class="title">没有找到符合当前条件的结果～</p>
        <p ref="ddd" class="clear"></p>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import {GET_PRODUCT_LIST, CHANGE_SEARCH_INFO} from "../store/app/type";

    export default {
        name: "case-product",
        data() {
            return {
                i: 0,
            }
        },
        props: ['type'],
        computed: mapState({
            product_list: 'product_list',
            fetching: 'fetching',
        }),
        methods: {
            go({id}) {
                this.$router.push(`/product-detail/${this.type}/${id}`)
            },
            handleScroll() {
                // 页面滚动距顶部距离
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                let scroll = scrollTop - this.i;
                this.i = scrollTop;
                if (scroll > 0) {
                    if (this.$refs.ddd.getBoundingClientRect().top < window.innerHeight && this.fetching) {
                        this.$store.commit(
                            CHANGE_SEARCH_INFO,
                            {key: 'current', value: this.$store.state.product_search_info.current + 1}
                        )
                        this.$store.dispatch(GET_PRODUCT_LIST);
                    }
                }
            },
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll, true)
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll, true)
        },
    }
</script>

<style scoped lang="less">
    .case-name {
        font-size: 14px;
        height: 40px;
        color: #4b4a46;
        display: table-cell;
        vertical-align: middle;
        overflow: hidden;
        line-height: 1.4;
    }
</style>