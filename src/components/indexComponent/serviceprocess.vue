<template>
    <div class="productlist">
        <div class="productionIntr-title">服务流程</div>
        <div class="productionIntr-remark" @click="gotoDetail"><u>查看详细流程</u> ></div>
        <el-row>
            <el-col :span="6">
                <div class="grid-content">
                    <div class="stream-item">
                        <div class="item-left">
                            <img src="http://cdn.ylnhome.com/static/stream1.png" alt="" class="stream-img">
                        </div>
                        <div class="item-right">
                            <div class="item-title">在线预约设计师</div>
                            <div class="item-content">一对一服务，确定需求和风格</div>
                        </div>
                        <img src="http://cdn.ylnhome.com/static/parentheses.png" alt="">
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content">
                    <div class="stream-item">
                        <div class="item-left">
                            <img src="http://cdn.ylnhome.com/static/stream2.png" alt="" class="stream-img">
                        </div>
                        <div class="item-right">
                            <div class="item-title">免费精准量房</div>
                            <div class="item-content">现场勘察，需求交流空间设计</div>
                        </div>
                        <img src="http://cdn.ylnhome.com/static/parentheses.png" alt="">
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content">
                    <div class="stream-item">
                        <div class="item-left">
                            <img src="http://cdn.ylnhome.com/static/stream3.png" alt="" class="stream-img">
                        </div>
                        <div class="item-right">
                            <div class="item-title">线下体验</div>
                            <div class="item-content">展厅体验，了解工艺沟通方案</div>
                        </div>
                        <img src="http://cdn.ylnhome.com/static/parentheses.png" alt="">
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content">
                    <div class="stream-item">
                        <div class="item-left">
                            <img src="http://cdn.ylnhome.com/static/stream4.png" alt="" class="stream-img">
                        </div>
                        <div class="item-right">
                            <div class="item-title">签订合同</div>
                            <div class="item-content">下定无忧，按节点验收付款</div>
                        </div>
                        <img src="http://cdn.ylnhome.com/static/parentheses.png" alt="">
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6" :offset="3">
                <div class="grid-content">
                    <div class="stream-item">
                        <img src="http://cdn.ylnhome.com/static/parentheses.png" alt="">
                        <div class="item-left">
                            <img src="http://cdn.ylnhome.com/static/stream5.png" alt="" class="stream-img">
                        </div>
                        <div class="item-right">
                            <div class="item-title">集装施工</div>
                            <div class="item-content">硬装施工软装投产，手机 实时查看进度</div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content">
                    <div class="stream-item">
                        <img src="http://cdn.ylnhome.com/static/parentheses.png" alt="">
                        <div class="item-left">
                            <img src="http://cdn.ylnhome.com/static/stream6.png" alt="" class="stream-img">
                        </div>
                        <div class="item-right">
                            <div class="item-title">竣工验收</div>
                            <div class="item-content">380项严苛的标准，全程监理</div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content">
                    <div class="stream-item">
                        <img src="http://cdn.ylnhome.com/static/parentheses.png" alt="">
                        <div class="item-left">
                            <img src="http://cdn.ylnhome.com/static/stream7.png" alt="" class="stream-img">
                        </div>
                        <div class="item-right">
                            <div class="item-title">售后保障</div>
                            <div class="item-content">国标保证，终身售后</div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "serviceprocess",
        data() {
            return {
                pageData:[
                    {
                        imgurl:'https://assets.2dfire.com/frontend/43f8c7271dd4c80b7c1ca5fcf395205c.jpg',
                        title:'免费精准量房',
                        detail: '现成勘察，需求访谈空间设计'
                    },
                    {
                        imgurl:'https://assets.2dfire.com/frontend/43f8c7271dd4c80b7c1ca5fcf395205c.jpg',
                        title:'体验服务',
                        detail: '到展厅现场体验 服务，了解工艺， 沟通方案'
                    },
                    {
                        imgurl:'https://assets.2dfire.com/frontend/43f8c7271dd4c80b7c1ca5fcf395205c.jpg',
                        title:'签订合同',
                        detail: '无忧下定，按装修 节点验收付款'
                    },
                    {
                        imgurl:'https://assets.2dfire.com/frontend/43f8c7271dd4c80b7c1ca5fcf395205c.jpg',
                        title:'集装施工',
                        detail: '硬装施工，软装 投产，手机实时查 看装修进度'
                    },
                    {
                        imgurl:'https://assets.2dfire.com/frontend/43f8c7271dd4c80b7c1ca5fcf395205c.jpg',
                        title:'竣工验收',
                        detail: '行业严苛的380项 验收标准，监理 团队全程跟踪'
                    },
                    {
                        imgurl:'https://assets.2dfire.com/frontend/43f8c7271dd4c80b7c1ca5fcf395205c.jpg',
                        title:'售后保障',
                        detail: '国标保证 终身售后'
                    },
                ]
            }
        },
        methods: {
            gotoDetail() {
                this.$router.push({path:'/stream'});
            }
        }
    }
</script>

<style scoped lang="less">
    @media (max-width: 1220px) {
        .productlist{
            width:960px;
            margin: 0 auto 62px;
            padding:16px 0;
            .productionIntr-title{
                text-align: center;
                font-weight: bold;
                margin-bottom:8px;
                color:#393835;
                font-size: 24px;
            }
            .productionIntr-remark{
                text-align: center;
                font-size: 10px;
                color:#C78F5A;
                margin: 4px 0 16px 0;
                cursor: pointer;
            }
            .stream-item {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                color:#2F2F2F;
                height:60px;
                .item-left{
                    width: 30%;
                }
                .stream-img{
                    width: 90%;
                    margin-left:4px;
                }
                .item-right{
                    width: 70%;
                }
                .item-title{
                    font-size: 12px;
                    margin-top:6px;
                }
                .item-content{
                    color:#474747;
                    font-size: 9px;
                }
                &>img{
                    height:78%;
                }
            }
        }
    }
    @media (min-width: 1220px) {
        .productlist{
            width:1220px;
            margin: 0 auto 62px;
            padding:20px 0;
            .productionIntr-title{
                text-align: center;
                font-weight: bold;
                margin-bottom:10px;
                color:#393835;
                font-size: 30px;
            }
            .productionIntr-remark{
                text-align: center;
                font-size: 12px;
                color:#C78F5A;
                margin: 5px 0 20px 0;
                cursor: pointer;
            }
            .stream-item {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                color:#2F2F2F;
                height:76px;
                .item-left{
                    width: 30%;
                }
                .stream-img{
                    width: 90%;
                    margin-left:6px;
                }
                .item-right{
                    width: 70%;
                }
                .item-title{
                    font-size: 14px;
                    margin-top:8px;
                }
                .item-content{
                    color:#474747;
                    font-size: 9px;
                }
                &>img{
                    height:78%;
                }
            }
        }
    }

</style>
