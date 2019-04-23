<template>
    <div class="productlist">
        <div>
            <div class="grid-content productionIntr-title">装修攻略</div>
            <el-row type="flex" justify="space-between">
                <el-col :span="5" v-for="(item,index) in pageData" :key="index" >
                    <div class="grid-content content-item" @click="gotoItem(index)">
                        <div>
                            <img :src="item.image" alt="" class="img-icon">
                        </div>
                        <div>
                            <div>{{item.name}}</div>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <div class="actionMore bg-color1" @click="gotoDetail">
                更多 >
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
                    name: '小空间也有大度量',
                    image: 'http://cdn.ylnhome.com/shangcheng/155487350741942.jpg',
                    url: 'https://www.ylnhome.com/app/article-detail/136',
                },{
                    name: '玄关的装修建议',
                    image: 'http://cdn.ylnhome.com/shangcheng/155487363461257.jpg',
                    url: 'https://www.ylnhome.com/app/article-detail/137',
                },{
                    name: '教你如何装修舒适卫浴',
                    image: 'http://cdn.ylnhome.com/static/index_wy.jpg',
                    url: 'https://www.ylnhome.com/app/article-detail/138',
                },{
                    name: '装修到底需要多长时间？',
                    image: 'http://cdn.ylnhome.com/static/index_ms.jpg',
                    url: 'https://www.ylnhome.com/app/article-detail/169',
                }],
                imgonshow:'https://assets.2dfire.com/frontend/f8b7d01af990559f571a7b9f06a417cd.png',
                onshowData:{
                    name: '新中式',
                    title: '新中式',
                    introdection:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at doloremque enim error eum impedit inventore laboriosam nam, quidem quo, soluta sunt tenetur voluptas! Nulla obcaecati omnis perspiciatis quos recusandae.'
                }
            }
        },
        methods: {
            changePackage(index) {
                this.onshowData = this.pageData[index];
            },
            gotoDetail() {
                this.$router.push({path:'/decorate-strategy'})
            },
            gotoItem(index) {
                console.log("this.pageData[index].url", this.pageData[index].url)
                window.location.href = this.pageData[index].url
            }
        }
    }
</script>

<style scoped lang="less">
    @media (max-width: 1220px) {
        .productlist>div{
            width:773px;
        }
        .productlist {
            width: 100%;
            background-color: #F7F7F7;
            margin: 0 auto 16px;
            padding: 16px;

            & > div {
                margin: 0 auto 16px;
            }

            .productionIntr-title {
                text-align: center;
                color: #B6A6A0;
                font-size: 18px;
                margin-bottom: 16px;
            }

            .content-item {
                width: 100%;
                text-align: center;
                display: flex;
                flex-direction: column;
                color: #393835;
                font-size: 10px;

                & > div > div {
                    margin-top: 10px;
                }
            }

            .img-icon {
                width: 100%;
                height: 102px;
            }
        }
    }
    @media (min-width: 1220px) {
        .productlist>div{
            width:918px;
        }
        .productlist {
            width: 100%;
            background-color: #F7F7F7;
            margin: 0 auto 20px;
            padding: 20px;

            & > div {
                margin: 0 auto 20px;
            }

            .productionIntr-title {
                text-align: center;
                color: #B6A6A0;
                font-size: 22px;
                margin-bottom: 20px;
            }

            .content-item {
                width: 100%;
                text-align: center;
                display: flex;
                flex-direction: column;
                color: #393835;
                font-size: 12px;
                cursor: pointer;

                & > div > div {
                    margin-top: 12px;
                }
            }

            .img-icon {
                width: 100%;
                height: 120px;
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
        margin-top:12px;
        cursor: pointer;
    }
    .bg-color1{
        background-color:#E24527;
    }
    .productlist::after {
        content: '';
        display: block;
        clear: both;
    }
</style>
