<template>
    <div class="wrapper">
        <mt-swipe class="banner" :auto="4000">
            <mt-swipe-item v-for="banner in bannerList">
                <img :src="banner.thumb" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <div v-if="isClient">
            <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
        </div>
        <div v-else>
        </div>
    </div>
</template>

<script>

    import {mapState} from 'vuex'
    import { Toast, MessageBox } from 'mint-ui';
    export default {
        name: 'user-view',
        data() {
            return {
                slots: [
                    {
                        flex: 1,
                        values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                        className: 'slot1',
                        textAlign: 'right'
                    }, {
                        divider: true,
                        content: '-',
                        className: 'slot2'
                    }, {
                        flex: 1,
                        values: ['1', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                        className: 'slot3',
                        textAlign: 'left'
                    }
                ],
                isClient: process.env.VUE_ENV === 'client'
            };
        },
        asyncData({store}) {
            let param = {
                province: '',
                city: '',
            };
            return store.dispatch('GET_BANNER_LIST', param),
            // 多项数据预取
            // return Promise.all([
            //     store.dispatch('GET_BANNER_LIST', param),
            // ]);
        },

        title() {
            return "首页"
        },

        // components: {
        //     Carousel,
        // },
        methods: {
            onValuesChange(picker, values) {
                console.log("hahahahah")
                if (values[0] > values[1]) {
                    picker.setSlotValue(1, values[0]);
                }
            }
        },

        computed: mapState({
            cityName: 'cityName',
            bannerList: 'bannerList',
            cityList: 'cityList',
            province: 'province',
        }),

        mounted() {
            Toast({
                message: 'Upload Complete',
                position: 'bottom',
                duration: 5000
            });
            MessageBox({
                title: 'Notice',
                message: 'Are you sure?',
                showCancelButton: true
            });
        }
    }
</script>

<style lang="less">
    .wrapper {
        width: 100%;

        .banner {
            width: 750rpx;
            .mint-swipe-items-wrap {
                width: 750rpx;
                height: 300rpx;
                img {
                    width: 750rpx;
                }
            }
        }
    }
</style>
