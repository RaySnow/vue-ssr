<template>
    <div class="cooperationListBox">
        <div class="content-box">
            <div class="productionIntr-title">合作伙伴</div>
            <!--<el-row type="flex" justify="space-around">-->
                <!--<el-col :span="4" v-for="(item,index) in cooperationList" :key="index">-->
                    <!--&lt;!&ndash;<div class="grid-content cooperationList">{{item}}</div>&ndash;&gt;-->
                    <!--<div class="grid-content cooperationList"><img src="http://cdn.ylnhome.com/static/cooperation1.png" alt=""></div>-->
                <!--</el-col>-->
            <!--</el-row>-->
            <el-row type="flex" justify="space-between">
                <el-col :span="4">
                    <div class="grid-content cooperationList"><img src="http://cdn.ylnhome.com/static/logo_2.png" alt=""></div>
                </el-col> <el-col :span="4">
                    <div class="grid-content cooperationList"><img src="http://cdn.ylnhome.com/static/logo_3.png" alt=""></div>
                </el-col> <el-col :span="4">
                    <div class="grid-content cooperationList"><img src="http://cdn.ylnhome.com/static/logo_4.png" alt=""></div>
                </el-col> <el-col :span="4">
                    <div class="grid-content cooperationList"><img src="http://cdn.ylnhome.com/static/logo_1.png" alt=""></div>
                </el-col> <el-col :span="4">
                    <div class="grid-content cooperationList"><img src="http://cdn.ylnhome.com/static/logo_5.png" alt=""></div>
                </el-col>
            </el-row>
            <!--<el-row type="flex" justify="space-between">-->
                <!--<el-col :span="4">-->
                    <!--<div class="grid-content cooperationList"><img src="http://cdn.ylnhome.com/static/cooperation1.png" alt=""></div>-->
                <!--</el-col> <el-col :span="4">-->
                    <!--<div class="grid-content cooperationList"><img src="http://cdn.ylnhome.com/static/cooperation1.png" alt=""></div>-->
                <!--</el-col> <el-col :span="4">-->
                    <!--<div class="grid-content cooperationList"><img src="http://cdn.ylnhome.com/static/cooperation1.png" alt=""></div>-->
                <!--</el-col> <el-col :span="4">-->
                    <!--<div class="grid-content cooperationList"><img src="http://cdn.ylnhome.com/static/cooperation1.png" alt=""></div>-->
                <!--</el-col> <el-col :span="4">-->
                    <!--<div class="grid-content cooperationList"><img src="http://cdn.ylnhome.com/static/cooperation1.png" alt=""></div>-->
                <!--</el-col>-->
            <!--</el-row>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "cooperationList",
        data() {
            return {
                cooperationList: ['北京','上海','杭州','广州','温州','东莞','金华','绍兴','北京','上海','杭州','广州','温州','东莞','金华','绍兴'],
            }
        },
    }
</script>
<style scoped lang="less">
    @media (max-width: 1220px) {
        .content-box{
            width:773px;
        }
        .cooperationListBox{
            width: 100%;
            background-color: #C78F5A;
            margin-top:16px;
            .content-box{
                margin:16px auto;
                padding:16px 0;
            }
            .productionIntr-title{
                text-align: center;
                color:#fff;
                font-size: 24px;
                margin-bottom:8px;
            }
            .cooperationList{
                margin-bottom:16px;
                padding: 10px;
                /*height: 70px;*/
                width: 100%;
                background-color: #ffffff;
            }
            .cooperationList img{
                width: 100%;
            }
        }
    }
    @media (min-width: 1220px) {
        .content-box{
            width:918px;
        }
        .cooperationListBox{
            width: 100%;
            background-color: #C78F5A;
            margin-top:20px;
            .content-box{
                margin:20px auto;
                padding:20px 0;
            }
            .productionIntr-title{
                text-align: center;
                color:#fff;
                font-size: 28px;
                margin-bottom:10px;
            }
            .cooperationList{
                margin-bottom:20px;
                padding: 10px;
                /*height: 70px;*/
                width: 100%;
                background-color: #ffffff;
            }
            .cooperationList img{
                width: 100%;
            }
        }
    }
</style>
