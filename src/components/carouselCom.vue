<template>
    <div class="banner-carousel">
        <div class="arrow left" @click="changeImg(-1)"></div>
        <el-carousel trigger="click" :height="bannerH+'px'" arrow="never" ref="carousel">
            <el-carousel-item v-for="(item,index) in bannerList" :key="index">
                <img :src="item.thumb" alt="" class="banner-img" @click="go(item.redirectUrl)">
            </el-carousel-item>
        </el-carousel>
        <div class="arrow right" @click="changeImg(1)"></div>
        <div class="clear"></div>
    </div>
</template>

<script>
    export default {
        name: "carouselCom",
        props: ['bannerList'],
        data() {
            return {
                bannerH: 540,
                screenWidth: 1220,
            }
        },
        methods: {
            changeImg(flag) {
                if (~flag) {
                    this.$refs.carousel.next()
                } else {
                    this.$refs.carousel.prev()
                }
            },
            go(url) {
                if (url) {
                    window.location.href = url;
                }
            },
            setBannerH() {
                // if (typeof window !== "undefined") {
                //     this.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                //     let widthB = this.screenWidth > 1200 ? this.screenWidth : 1200;
                //     this.bannerH = 848 / 1920 * widthB - 50;
                //     this.$nextTick(() => {
                //         this.bannerH = document.getElementsByClassName('banner-img')[0] && document.getElementsByClassName('banner-img')[0].height;
                //     })
                // }
            },
        },
        mounted() {
            this.setBannerH();
            window.addEventListener('resize', () => {
                this.setBannerH();
            }, false)
        },
        watch: {
            bannerList(val) {
                if (val.length) {
                    this.setBannerH();
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .banner-carousel {
        position: relative;

        .el-carousel {
            overflow-x: inherit;
        }

        .banner-img {
            cursor: pointer;
            width: 100%;
            height: auto;
        }

        .arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            height: 50px;
            width: 50px;
            border-radius: 50%;
            z-index: 100;
        }

        .left {
            left: 82px;
            background: url('http://cdn.ylnhome.com/static/arrow-left.png') no-repeat;
            background-size: cover;
            z-index: 1000;
        }

        .right {
            right: 82px;
            background: url('http://cdn.ylnhome.com/static/arrow-right.png') no-repeat;
            background-size: cover;
            z-index: 1000;
        }

        /*.clear{*/
        /*display: table;*/
        /*clear: both;*/
        /*}*/

        &::after {
            content: '';
            display: block;
            clear: both;
        }
    }
</style>
