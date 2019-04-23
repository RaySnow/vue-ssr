<template>
    <div class="cityList">
        <div class="productionIntr-title">服务城市</div>
        <el-row :gutter="20">
            <el-col :xs="4" :sm="4" :lg="3" :xl="4" v-for="(item,index) in cityList.data" :key="index">
                <div class="grid-content content-item">{{item.content.city}}</div>
            </el-col>
        </el-row>
        <div class="text-center">
            <span>更多城市扩展中...</span>
            <span class="actionMore bg-color1" @click="gotoDetail">
            查看全国门店 >
            </span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "cityList",
        props:['cityList'],
        data() {
            return {
            }
        },
        methods: {
            gotoDetail() {
                this.$router.push({path:'/all-store'})
            }
        },
        computed: {
            // cityList() {
            //     return this.$store.state.cityList;
            // },
        },
    }
</script>

<style scoped lang="less">
    @media (max-width: 1220px) {
        .cityList{
            width:773px;
        }
        .cityList{
            margin:0 auto 16px;
            padding:16px 0;
            .productionIntr-title{
                text-align: center;
                color:#B6A6A0;
                font-size: 17px;
                margin-bottom:16px;
            }
            .content-item{
                width:48px;
                height:20px;
                font-size: 12px;
                line-height: 22px;
                color:#393835;
                margin-bottom:10px;
            }
        }
    }
    @media (min-width: 1220px) {
        .cityList{
            width:918px;
        }
        .cityList{
            margin:0 auto 20px;
            padding:20px 0;
            .productionIntr-title{
                text-align: center;
                color:#B6A6A0;
                font-size: 22px;
                margin-bottom:20px;
            }
            .content-item{
                width:56px;
                height:24px;
                font-size: 14px;
                line-height: 24px;
                color:#393835;
                margin-bottom:12px;
            }
        }
    }
    .actionMore{
        text-align: right;
        height:22px;
        line-height: 20px;
        padding:2px 12px;
        float:right;
        font-size: 10px;
        color:#fff;
        border-radius: 3px;
        cursor: pointer;
    }
    .bg-color1{
        background-color:#E24527;
    }
    .text-center{
        text-align: center;
        margin-top:20px;
        font-size: 10px;
    }
    .text-center::after {
        content: '';
        display: block;
        clear: both;
    }
    .el-col{
        text-align: center;
    }
</style>
