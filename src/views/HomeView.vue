<template>
    <div class="wrapper">
        <div class="banner" v-for="banner in bannerList">
            <img :src="banner.thumb" alt="">
        </div>
    </div>
</template>

<script>
    // import Carousel from "../components/indexComponent/carouselCom.vue";
    import {mapState} from 'vuex'

    export default {
        name: 'user-view',

        asyncData({store}) {
            let param = {
                province: '',
                city: '',
            };
            return store.dispatch('GET_BANNER_LIST', param);
        },

        title() {
            return "首页"
        },

        // components: {
        //     Carousel,
        // },

        computed: mapState({
            cityName: 'cityName',
            bannerList: 'bannerList',
            cityList: 'cityList',
            province: 'province',
        })
    }
</script>

<style scoped lang="less">
    .wrapper {
        width: 100%;

        .banner {
            width: 700rpx;
            img {
                width: 600rpx;
            }
        }
    }
</style>
