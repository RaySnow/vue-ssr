<template>
    <div class="productlist">
        <div class="grid-content productionIntr-title">空间定制家具</div>
        <div class="grid-content productionIntr-intro">定制完美的家</div>
        <div class="img-list">
            <div class="list-item item1">
                <div class="content">
                    <div class="item-title color-red">定制橱柜&nbsp更懂生活</div>
                    <div class="item-sub-title">轻松拥有梦想厨房</div>
                    <div class="item-text">根据您的厨房量身定制整套橱柜和收纳方案</div>
                    <div class="item-price"><b>6988</b> 元起</div>
                    <div class="item-yprice">市场价：<span>9688元 起</span></div>
                    <div class="item-button">
                        <button @click="gotoDetail">立即预约</button>
                    </div>
                </div>
                <div class="img_box"></div>
            </div>
            <div class="list-item item2">
                <div class="content">
                    <div class="item-title color-red">定制衣柜&nbsp贴心收纳</div>
                    <div class="item-sub-title">小户型也能做衣帽间</div>
                    <div class="item-text">整面墙的衣柜，根据主人身高和生活习惯量身定制衣柜布局</div>
                    <div class="item-price"><b>3688</b> 元起</div>
                    <div class="item-yprice">市场价：<span>6688元 起</span></div>
                    <div class="item-button">
                        <button @click="gotoDetail">立即预约</button>
                    </div>
                </div>
                <div class="img_box"></div>
            </div>
            <div class="list-item item3">
                <div class="content">
                    <div class="item-title color-red">客餐厅柜类定制</div>
                    <div class="item-sub-title">增加全屋收纳空间</div>
                    <div class="item-text">合理利用电视柜、墙面、转角等空间，定制收纳柜类，整屋风格统一</div>
                    <div class="item-price"><b>2888</b> 元起</div>
                    <div class="item-yprice">市场价：<span>4688元 起</span></div>
                    <div class="item-button">
                        <button @click="gotoDetail">立即预约</button>
                    </div>
                </div>
                <div class="img_box"></div>
            </div>
            <div class="list-item item5">
                <div class="content">
                    <div class="item-title color-red">定制书房、儿童房</div>
                    <div class="item-sub-title">柜类组合、榻榻米、儿童床</div>
                    <div class="item-text">跟进家庭成员需求、宝宝年龄变化，灵活定制</div>
                    <div class="item-price"><b>5888</b> 元起</div>
                    <div class="item-yprice">市场价：<span>8699元 起</span></div>
                    <div class="item-button">
                        <button @click="gotoDetail">立即预约</button>
                    </div>
                </div>
                <div class="img_box"></div>
            </div>
            <div class="list-item item4">
                <div class="content">
                    <div class="item-title color-red">其他柜类和家具定制</div>
                    <div class="item-sub-title">入户柜、阳台柜等</div>
                    <div class="item-text">零碎空间，自有妙用</div>
                    <div class="item-price"><b>1288</b> 元起</div>
                    <div class="item-yprice">市场价：<span>3699元 起</span></div>
                    <div class="item-button">
                        <button @click="gotoDetail">立即预约</button>
                    </div>
                </div>
                <div class="img_box"></div>
            </div>
        </div>
        <!--<div class="content-list">-->
            <!--<el-row :gutter="20" v-for="(item,index) in pageData" :key="index">-->
                <!--<el-col :span="16" :push="index%2 ? 8 : null" style="padding-left:0;padding-right:0">-->
                    <!--<div class="grid-content">-->
                        <!--<img :src="item.imgurl" alt="">-->
                    <!--</div>-->
                <!--</el-col>-->
                <!--<el-col :span="8" :pull="index%2 ? 16 : 0" style="padding-left:0;padding-right:0">-->
                    <!--<div class="grid-content text-box">-->
                        <!--<h4>{{item.title}}</h4>-->
                        <!--<p>{{item.detailtext}}</p>-->
                    <!--</div>-->
                <!--</el-col>-->
            <!--</el-row>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "spaceCustomAds",
        data() {
            return {
                pageData: [{
                    id: '1',
                    title: '空间定制1',
                    imgurl: 'https://assets.2dfire.com/frontend/f8b7d01af990559f571a7b9f06a417cd.png',
                    detailtext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet aperiam, consectetur debitis delectus deserunt dolores eligendi in ipsum nesciunt, odit quasi reiciendis saepe sit sunt totam unde veritatis vero.',
                },{
                    id: '2',
                    title: '空间定制2',
                    imgurl: 'https://assets.2dfire.com/frontend/90cda6e933b128c2d4ade4ab21011726.png',
                    detailtext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet aperiam, consectetur debitis delectus deserunt dolores eligendi in ipsum nesciunt, odit quasi reiciendis saepe sit sunt totam unde veritatis vero.'
                },{
                    id: '3',
                    title: '空间定制3',
                    imgurl: 'https://assets.2dfire.com/frontend/2ad0af93332e19cef17a12e7f22fd5e3.png',
                    detailtext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet aperiam, consectetur debitis delectus deserunt dolores eligendi in ipsum nesciunt, odit quasi reiciendis saepe sit sunt totam unde veritatis vero.',
                }],
                imgonshow:'https://assets.2dfire.com/frontend/f8b7d01af990559f571a7b9f06a417cd.png',
            }
        },
        methods: {
            changePackage(index) {
                this.imgonshow = this.pageData[index].imgurl
            },
            gotoDetail() {
                this.$router.push({path:'/2-22'})
            }
        }
    }
</script>

<style scoped lang="less">
    .productlist{
        width:100%;
        background-color: #F4F0EA;
        margin:0 auto 20px;
        padding:20px;
        .productionIntr-title{
            text-align: center;
            color:#393835;
            font-size: 28px;
            margin-bottom:10px;
        }
        .productionIntr-intro{
            text-align: center;
            color:#393835;
            font-size: 12px;
            margin-bottom:20px;
        }
        .img-list{
            width:826px;
            margin:0 auto;
        }
        .item1 .img_box{
            background:url("http://cdn.ylnhome.com/static/index_cg1.jpg") 0 0 no-repeat;
        }
        .item2 .img_box{
            background:url("http://cdn.ylnhome.com/static/index_ymj2.jpg") 0 0 no-repeat;
        }
        .item3 .img_box{
            background:url("http://cdn.ylnhome.com/static/index_kct3.jpg") no-repeat;
        }
        .item5 .img_box{
            background:url("http://cdn.ylnhome.com/static/index_dgnf.jpg") no-repeat;
        }
        .item4 .img_box{
            background:url("http://cdn.ylnhome.com/static/index_rhg.jpg") no-repeat;
        }
        .list-item{
            height:342px;
            margin-bottom:20px;
            background-size: 100% 100%;
            box-sizing: border-box;
            text-align: center;
            &>.content{
                float:left;
                width: 35%;
                height:100%;
                color:#393835;
                background-color: #fff;
                padding:28px 12px;
                /*background-color:rgba(255,255,255,0.9);*/
            }

            & .img_box{
                float:left;
                width: 65%;
                height:100%;
                background-size: cover;
            }
        }
        .item-title{
            font-size: 28px;
            font-weight:300;
            b{
                font-weight:500;
            }
        }
        .item-sub-title{
            font-size: 22px;
            font-weight:400;
        }
        .item-text{
            font-size: 15px;
            height: 50px;
            margin:5px 0 10px 0;
        }
        .item-price{
            font-size: 14px;
            height:62px;
            color:#D82F1E;
            padding:0 42px;
            text-align: right;
            b{
                font-size: 46px;
                font-style:italic ;
                font-weight: 900;
            }
        }
        .item-yprice{
            text-align: right;
            font-size: 12px;
            padding:0 42px 12px;
            & span{
                text-decoration:line-through;
            }
        }
        .item-button{
            padding:0 42px;
            & button{
                width: 178px;
                height:42px;
                line-height: 42px;
                background-color: #E24527;
                text-align: center;
                font-size: 22px;
                color:#fff;
                outline:0;
                border:0;
            }
        }
        .color-red{
            color:#E24527;
        }
    }
</style>
