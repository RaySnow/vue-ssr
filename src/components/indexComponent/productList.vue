<template>
    <div class="productlist">
        <div class="productionIntr-title">我们提供的产品和服务</div>
        <div class="flex-box">
                <div class="flex-item" >
                    <div class="titleimg" >
                        <img src="http://cdn.ylnhome.com/static/product1.png" alt="" class="product" :class="{action:show[1]}">
                        <img src="http://cdn.ylnhome.com/static/mouseenter.png" alt="" class="mengceng" :class="{action:show[1]}">
                        <div class="mengcengContent" :class="{action:show[1]}" @mouseenter="enterAct(1)" @mouseleave="leaveAct(1)">
                            <img src="http://cdn.ylnhome.com/static/remarkb1.png" alt="">
                            <div class="title-show">{{pageData[0].title}}</div>
                            <div class="text-show">{{pageData[0].detail}}</div>
                        </div>
                        <div class="ball-icon" v-show="!show[1]">
                            <img src="http://cdn.ylnhome.com/static/remark1.png" alt="">
                        </div>
                    </div>
                    <div class="adstext">
                        <h5 class="adstitle">{{pageData[0].title}}</h5>
                        <h5 class="adsremark">{{pageData[0].remark}}</h5>
                    </div>
                </div>
                <div class="flex-item">
                    <div class="titleimg">
                        <img src="http://cdn.ylnhome.com/static/index_logo11.jpg" alt="" class="product" :class="{action:show[2]}">
                        <img src="http://cdn.ylnhome.com/static/mouseenter.png" alt="" class="mengceng" :class="{action:show[2]}">
                        <div class="mengcengContent" :class="{action:show[2]}" @mouseenter="enterAct(2)" @mouseleave="leaveAct(2)">
                            <img src="http://cdn.ylnhome.com/static/remarkb2.png" alt="">
                            <div class="title-show">{{pageData[1].title}}</div>
                            <div class="text-show">{{pageData[1].detail}}</div>
                        </div>
                        <div class="ball-icon" v-show="!show[2]">
                            <img src="http://cdn.ylnhome.com/static/remark2.png" alt="">
                        </div>
                    </div>
                    <div class="adstext">
                        <h5 class="adstitle">{{pageData[1].title}}</h5>
                        <h5 class="adsremark">{{pageData[1].remark}}</h5>
                    </div>
                </div>
                <div class="flex-item">
                    <div class="titleimg">
                        <img src="http://cdn.ylnhome.com/static/index_logo22.jpg?x-oss-process=image/resize,w_400,h_400" alt="" class="product" :class="{action:show[3]}">
                        <img src="http://cdn.ylnhome.com/static/mouseenter.png" alt="" class="mengceng" :class="{action:show[3]}">
                        <div class="mengcengContent" :class="{action:show[3]}" @mouseenter="enterAct(3)" @mouseleave="leaveAct(3)">
                            <img src="http://cdn.ylnhome.com/static/remarkb3.png" alt="">
                            <div class="title-show">{{pageData[2].title}}</div>
                            <div class="text-show">{{pageData[2].detail}}</div>
                        </div>
                        <div class="ball-icon" v-show="!show[3]">
                            <img src="http://cdn.ylnhome.com/static/remark3.png" alt="">
                        </div>
                    </div>
                    <div class="adstext">
                        <h5 class="adstitle">{{pageData[2].title}}</h5>
                        <h5 class="adsremark">{{pageData[2].remark}}</h5>
                    </div>
                </div>
                <div class="flex-item">
                    <div class="titleimg">
                        <img src="http://cdn.ylnhome.com/static/product4.png" alt="" class="product" :class="{action:show[4]}">
                        <img src="http://cdn.ylnhome.com/static/mouseenter.png" alt="" class="mengceng" :class="{action:show[4]}">
                        <div class="mengcengContent" :class="{action:show[4]}" @mouseenter="enterAct(4)" @mouseleave="leaveAct(4)">
                            <img src="http://cdn.ylnhome.com/static/remarkb4.png" alt="">
                            <div class="title-show">{{pageData[3].title}}</div>
                            <div class="text-show">{{pageData[3].detail}}</div>
                        </div>
                        <div class="ball-icon" v-show="!show[4]">
                            <img src="http://cdn.ylnhome.com/static/remark4.png" alt="">
                        </div>
                    </div>
                    <div class="adstext">
                        <h5 class="adstitle">{{pageData[3].title}}</h5>
                        <h5 class="adsremark">{{pageData[3].remark}}</h5>
                    </div>
                </div>
                <div class="flex-item">
                    <div class="titleimg">
                        <img src="http://cdn.ylnhome.com/static/product5.png" alt="" class="product" :class="{action:show[5]}">
                        <img src="http://cdn.ylnhome.com/static/mouseenter.png" alt="" class="mengceng" :class="{action:show[5]}">
                        <div class="mengcengContent" :class="{action:show[5]}" @mouseenter="enterAct(5)" @mouseleave="leaveAct(5)">
                            <img src="http://cdn.ylnhome.com/static/remarkb5.png" alt="">
                            <div class="title-show">{{pageData[4].title}}</div>
                            <div class="text-show">{{pageData[4].detail}}</div>
                        </div>
                        <div class="ball-icon" v-show="!show[5]">
                            <img src="http://cdn.ylnhome.com/static/remark5.png" alt="">
                        </div>
                    </div>
                    <div class="adstext">
                        <h5 class="adstitle">{{pageData[4].title}}</h5>
                        <h5 class="adsremark">{{pageData[4].remark}}</h5>
                    </div>
                </div>
        </div>
        <div class="productionIntr-remark"><span class="productionintr-tips">小贴士</span><span>您可以选择以上任何独立的产品和服务，更推荐您使用一站式集成家装</span></div>
    </div>
</template>

<script>
    export default {
        name: "productList",
        data() {
            return {
                pageData:[
                    {
                        imgurl:'http://cdn.ylnhome.com/static/index_xzs2.jpg?x-oss-process=image/resize,m_pad,w_400,h_300,limit_0',
                        title:'一站式集成家装',
                        remark:'整屋家装一站搞定，从毛呸到领包入住',
                        detail: '标准化的硬装+定制化软装，大师操刀，实景设计，一站落地，全称跟踪。集非凡的设计与实用主义于一体，毛胚到领包入住，只需1299元/㎡起'
                    },
                    {
                        imgurl:'http://cdn.ylnhome.com/static/index_xzs2.jpg?x-oss-process=image/resize,m_pad,w_400,h_300,limit_0',
                        title:'标准化硬装',
                        remark:'全包、半包、主材',
                        detail: '通过覆盖全国的一百多家门店，自有施工人员，为您提供始终如一的标准化硬装体验，可以半包、全包等方案自由选择'
                    },
                    {
                        imgurl:'http://cdn.ylnhome.com/static/index_xzs2.jpg?x-oss-process=image/resize,m_pad,w_400,h_300,limit_0',
                        title:'全屋定制',
                        remark:'收纳系统，全屋家具，灯饰布艺，挂画软体，安装配送，终身售后。',
                        detail: '全屋定制家具，根据您的生活习惯量身定制，顶级设计师一对一服务，整屋空间利用率提升20%，3d实景渲染效果图，所见即所得。'
                    },
                    {
                        imgurl:'http://cdn.ylnhome.com/static/index_xzs2.jpg?x-oss-process=image/resize,m_pad,w_400,h_300,limit_0',
                        title:'空间定制',
                        remark:'量身定制生活空间，更多收纳',
                        detail: '定制衣柜、橱柜、入户柜、阳台柜，电视柜、书房、多功能房。。。。。。。。'
                    },
                    {
                        imgurl:'http://cdn.ylnhome.com/static/index_xzs2.jpg?x-oss-process=image/resize,m_pad,w_400,h_300,limit_0',
                        title:'严选家具和软配',
                        remark:'严选国际一流供应商家具单品',
                        detail: '严选国际一流供应商家具单品、软装配饰、灯具、窗帘、厨具，护墙系统，一站式选购。自由搭配组合。'
                    },
                ],
                show:[false,false,false,false,false,false,false,false]
            }
        },
        methods: {
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
        .productlist{
            min-width: 774px;
        }
        .titleimg .mengcengContent{
            position: absolute;
            top:0;
            left:0;
            height:100%;
            opacity:0;
            transition: all .5s ease;
            -webkit-transition: all .5s ease; /* Safari */
            z-index: 4;
            text-align: center;
            padding:10px;
            color:#ffffff;
            img{
                margin-top:16px;
                width:25px;
                height:25px;
            }
            .title-show{
                margin-top:19px;
                font-size: 10px;
                font-weight: bold;
                text-align: left;
            }
            .text-show{
                margin-top:4px;
                font-size: 10px;
                text-align: left;
            }
        }
    }
    @media (min-width: 1220px) {
        .productlist{
            min-width: 918px;
        }
        .titleimg .mengcengContent{
            position: absolute;
            top:0;
            left:0;
            height:100%;
            opacity:0;
            transition: all .5s ease;
            -webkit-transition: all .5s ease; /* Safari */
            z-index: 4;
            text-align: center;
            padding:20px;
            color:#ffffff;
            img{
                margin-top:40px;
                width:38px;
                height:38px;
            }
            .title-show{
                margin-top:38px;
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
        margin-bottom: 15px;
        padding:60px 0 20px 0;
        .flex-box{
            display: flex;
            flex-direction: row;
            justify-content: center;
            /*align-items: center;*/
        }
        .flex-item{
            width: 20%;
            min-height:200px;
        }
        .titleimg{
            position: relative;
            margin-bottom:20%;
            .mengceng{
                position: absolute;
                top:0;
                left:0;
                height:100%;
                opacity:0;
                transition: all .5s ease;
                -webkit-transition: all .5s ease; /* Safari */
                z-index: 3;
            }
            .action{
                opacity:1;
                transform: scale(1.1);
                -ms-transform:scale(1.1);     /* IE 9 */
                -moz-transform:scale(1.1);     /* Firefox */
                -webkit-transform:scale(1.1); /* Safari 和 Chrome */
                -o-transform:scale(1.1);
                transition: all .5s ease;
                -webkit-transition: all .5s ease; /* Safari */
            }
        }
        .titleimg > img{
            width:100%;
            height:100%;
        }
        .titleimg .product{
            transition: all .5s ease;
            -webkit-transition: all .5s ease; /* Safari */
        }
        .ball-icon{
           position:absolute;
            width:38%;
            height:38%;
            text-align: center;
            line-height: 100%;
            left:31%;
            bottom:-14%;
            img{
                width:100%;
                height:100%;
                margin-top:20%;
            }
        }
        .adstext{
            padding:15px;
            text-align: center;
        }
        .adstitle{
            font-size: 14px;
            color:#393835;
        }
        .adsremark{
            font-size: 10px;
            color:#8D8D8D;
        }
        .productionIntr-title{
            text-align: center;
            color:#393835;
            font-size: 28px;
            margin-bottom:15px;
        }
        .productionIntr-remark{
            text-align: center;
            font-size: 12px;
            margin: 80px 0 0 15px;
            color:#393835;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        .productionintr-tips{
            width:38px;
            height:15px;
            line-height: 15px;
            text-align: center;
            background-color: #F8BC59;
            color:#AB4929;
            font-size: 8px;
            margin-right:6px;
        }
        .fade-enter-active, .fade-leave-active{
            transition: opacity 2s;
        }

        .fade-enter, .fade-leave-to {
            opacity: 0
        }

        .fade-enter-to, .fade-leave {
            opacity: 1;
        }
    }
</style>
