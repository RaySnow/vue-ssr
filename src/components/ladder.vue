<template>
<!-- 一左一右的图片 -->
<div>
    <div class="row-bg right-img" v-if="position=='right'">
        <div class='item img'>
            <img :src="item.img" alt="">
        </div>
        <div class='item arr'></div>
        <div class='item info'>
            <p class='title'>{{item.title}}</p>
            <p class='text'>{{item.info}}</p>
        </div>
    </div>
    <div class="row-bg left-img" v-if="position=='left'">
        <div class='item img'>
            <img :src="item.img" alt="">
        </div>
        <div class='item arr'></div>
        <div class='item info'>
            <p class='title'>{{item.title}}</p>
            <p class='text'>{{item.info}}</p>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "ladder",
        props: ['position', 'item'],
        data() {
            return {
            }
        },
    }
</script>

<style scoped lang="less">
    .row-bg {
        width: 100vw;
        height: 21vw;
        background: #fff;
        .item {
            float: left;
        }
        .img {
            width: 44vw;
            height: 21vw;
            img {
                width: 44vw;
                height: 21vw;   
            }
        }
        .arr {
            width: .75vw;
            height: 21vw;
            margin-left: 5.55vw;
            background: url(http://cdn.ylnhome.com/static/integrate-right-arr.png) no-repeat;
            background-size: cover;
        }
        .info {
            margin-left: 2vw;
            max-width: 47vw;
            .title {
                margin-top: 8vw;
                height: 2.4vw;
                color: #e24527;
                line-height: 2.4vw;
                font-size: 2.4vw;
            }
            .text {
                margin-top: 2vw;
                height: 1.8vw;
                color: #2f2f2f;
                line-height: 1.8vw;
                font-size: 1.6vw;
            }
        }
    }
    .left-img {
        .item {
            float: right;
        }
        .arr {
            margin-right: 5.55vw;
            margin-left: 2vw;
            background: url( http://cdn.ylnhome.com/static/integrate-left-arr.png) no-repeat;
            background-size: cover;
        }
        .info {
            max-width: 47vw;
            margin-left: 0;
            text-align: right;
            .title {
                color: #c78f5a;
            }
        }
    }
</style>