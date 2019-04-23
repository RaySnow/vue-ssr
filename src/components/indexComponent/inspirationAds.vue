<template>
    <div class="productlist">
        <div class="adsimg-box">
            <div class="productionIntr-title">
                <div>寻找家装灵感</div>
                <div><strong>海量案例</strong></div>
            </div>
        </div>
        <div class="show">
            <img src="http://cdn.ylnhome.com/static/anli.png" alt="" class="ads-img" >
            <!--<img src="http://cdn.ylnhome.com/static/anli.png" alt="" class="ads-img"  v-show="imgonshowIndex == 1">-->
            <!--<img src="http://cdn.ylnhome.com/static/anli.png" alt="" class="ads-img"  v-show="imgonshowIndex == 2">-->
            <!--<img src="http://cdn.ylnhome.com/static/anli.png" alt="" class="ads-img"  v-show="imgonshowIndex == 3">-->
            <!--<img :src="imgonshow" alt="" class="ads-img">-->
            <div class="content-list">
                <div class="flex-box">
                    <div :span="6" v-for="(item,index) in pageData" :key="index" @click="gotoDetail"  @mouseenter="enterAct(index)" @mouseleave="leaveAct(index)">
                        <div class="content-item">
                            <img :src="item.imgurl" alt="">
                        </div>
                    <div class="item-name" v-show="!show[index]">{{pageData[index].name}}</div>
                    <div class="introduction" v-show="!show[index]">{{pageData[index].introdection}}</div>
                    <div class="mengcengContent" :class="{action:show[index]}" >
                        <div class="title-show">{{ pageData[index].name }}</div>
                        <div class="text-show">{{ pageData[index].introdection }}</div>
                    </div>
                    </div>
                </div>
                <span class="actionMore bg-color1" @click="gotoDetail">更多 ></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "inspirationAds",
        data() {
            return {
                pageData: [{
                    name: '新中式',
                    title: '新中式',
                    imgurl:'http://cdn.ylnhome.com/static/index_xzs3.jpg?x-oss-process=image/resize,m_fixed,w_400,h_300,limit_0',
                    introdection:'实景装修案例'
                },{
                    name: '北欧',
                    title: '北欧',
                    imgurl:'http://cdn.ylnhome.com/static/index_bo2.jpg?x-oss-process=image/resize,m_fixed,w_400,h_300,limit_0',
                    introdection:'实景装修案例'
                },{
                    name: '简美',
                    title: '简美',
                    imgurl:'http://cdn.ylnhome.com/static/index_jm3.jpg?x-oss-process=image/resize,m_fixed,w_400,h_300,limit_0',
                    introdection:'实景装修案例'
                },{
                    name: '极简',
                    title: '极简',
                    imgurl:'http://cdn.ylnhome.com/static/index_jj3.jpg?x-oss-process=image/resize,m_fixed,w_400,h_300,limit_0',
                    introdection:'实景装修案例'
                }],
                imgonshow:'https://assets.2dfire.com/frontend/f8b7d01af990559f571a7b9f06a417cd.png',
                show:[false,false,false,false,false,false,false,false],
                imgonshowIndex:0,
            }
        },
        methods: {
            changePackage(index) {
                this.imgonshow = this.pageData[index].imgurl;
                this.imgonshowIndex = index;
            },
            gotoDetail() {
                this.$router.push({path:'/case'})
            },
            enterAct(index) {
                this.$set(this.show,index,true);
            },
            leaveAct(index) {
                this.$set(this.show,index,false);
            },
        }
    }
</script>

<style scoped lang="less">
    @media (max-width: 1220px) {
        .show{
            position: relative;
            margin-bottom:150px;
        }
        .content-list{
            position: absolute;
            bottom:-100px;
            left:50%;
            transform: translateX(-50%);
            width:773px;
            margin:0 auto;
            color:#464652;
            text-align: center;
            font-size: 12px;
            .item-name{
                margin-top:6px;
            }
            .introduction{
                margin-top:6px;
                font-size: 10px;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
            }
            .flex-box{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
            .flex-box>div{
                width: 182px;
                height:212px;
                border:1px solid #B6A6A0;
                padding:8px;
                background-color: #fff;
                position: relative;
                cursor: pointer;
            }
        }
        .content-item{
            width: 100%;
            height:144px;
            cursor: pointer;
            position: relative;
            color:#464652;
            img{
                width:100%;
                height:144px;
            }
        }
        .mengcengContent{
            position: absolute;
            top:0;
            left:0;
            width: 182px;
            height:100%;
            opacity:0;
            background: url("http://cdn.ylnhome.com/static/mouseenter.png") no-repeat;
            background-size: cover;
            transition: all .5s ease;
            -webkit-transition: all .5s ease; /* Safari */
            z-index: 4;
            text-align: center;
            padding:20px;
            color:#ffffff;
            .title-show{
                margin-top:122px;
                font-size: 14px;
                font-weight: bold;
                text-align: left;
            }
            .text-show{
                margin-top:5px;
                font-size: 10px;
                text-align: left;
            }
        }
    }
    @media (min-width: 1220px) {
        .show{
            position: relative;
            margin-bottom:150px;
        }
        .content-list{
            position: absolute;
            bottom:-100px;
            left:50%;
            transform: translateX(-50%);
            width:960px;
            margin:0 auto;
            color:#464652;
            text-align: center;
            font-size: 14px;
            .item-name{
                margin-top:6px;
            }
            .introduction{
                margin-top:6px;
                font-size: 10px;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
            }
            .flex-box{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
            .flex-box>div{
                width: 228px;
                height:254px;
                border:1px solid #B6A6A0;
                padding:8px;
                background-color: #fff;
                position: relative;
                cursor: pointer;
            }
        }
        .content-item{
            width: 100%;
            height:180px;
            cursor: pointer;
            position: relative;
            color:#464652;
            img{
                width:100%;
                height:180px;
            }
        }
        .mengcengContent{
            position: absolute;
            top:0;
            left:0;
            width: 228px;
            height:100%;
            opacity:0;
            background: url("http://cdn.ylnhome.com/static/mouseenter.png") no-repeat;
            background-size: cover;
            transition: all .5s ease;
            -webkit-transition: all .5s ease; /* Safari */
            z-index: 4;
            text-align: center;
            padding:25px;
            color:#ffffff;
            .title-show{
                margin-top:152px;
                font-size: 14px;
                font-weight: bold;
                text-align: left;
            }
            .text-show{
                margin-top:6px;
                font-size: 10px;
                text-align: left;
            }
        }
    }
    .productlist{
        width:100%;
        margin:0 auto 20px;
        padding:22px 0 48px 0;
        .adsimg-box{
            margin-bottom: 30px;
        }
        .productionIntr-title{
            text-align: center;
            color:#393835;
            font-size: 28px;
            margin-bottom:12px;
            padding:12px 36px;
        }
        .ads-img{
            width: 100%;
            height:440px;
        }
        .action{
            opacity:1;
            transition: all .5s ease;
            -webkit-transition: all .5s ease; /* Safari */
        }
        .actionMore{
            text-align: right;
            height:22px;
            line-height: 20px;
            padding:2px 12px;
            float:right;
            color:#fff;
            border-radius: 3px;
            margin-top:12px;
            font-size: 10px;
            cursor: pointer;
        }
        .bg-color1{
            background-color:#E24527;
            color:#fff;
        }
    }
</style>
