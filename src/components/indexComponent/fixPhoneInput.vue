<template>
    <div>
        <div id="fixbottomBar" ref="fixBottom">
            <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="12">
                    <div class="grid-content input-box">
                        <el-row type="flex" class="row-bg" justify="center">
                            <el-col :span="8" :offset="8">
                                <div class="label-box">
                                    <span class="gray-icon"></span><span>房屋面积</span>
                                </div>
                                <div class="label-box2">
                                    <input type="text" class="input-left" placeholder="请在此输入面积" v-model="area">
                                    <span>平方米</span>
                                </div>
                                <div class="warning-text" v-show="wrongInput">* 您的输入有误，请重新输入</div>
                            </el-col>
                            <el-col :span="8">
                                <div class="grid-content">
                                    <div class="label-box">
                                        <span class="gray-icon"></span><span>手机号</span>
                                    </div>
                                    <div class="label-box2">
                                        <input type="text" class="input-left" placeholder="请在此输入您的手机号" v-model="phoneNum">
                                    </div>
                                </div>
                            </el-col>
                        </el-row>

                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content input-box2">
                        <button class="button-type1" @click="freeAppointment(1)">免费计算价格</button>
                        <button class="button-type2" @click="freeAppointment(2)">预约免费量尺寸</button>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="fixBottom" v-show="isboxFixed" id="fixBar" >
            <p>我家装修得花多少呢？</p>
            <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="12">
                    <div class="grid-content input-box">
                        <el-row type="flex" class="row-bg" justify="center">
                            <el-col :span="8" :offset="8">
                                <div class="label-box">
                                    <span class="gray-icon"></span><span>房屋面积</span>
                                </div>
                                <div class="label-box2">
                                    <input type="text" class="input-left" placeholder="请在此输入面积" v-model="area">
                                    <span>平方米</span>
                                </div>
                                <div class="warning-text2"  v-show="wrongInput">* 您的输入有误，请重新输入</div>
                            </el-col>
                            <el-col :span="8">
                                <div class="grid-content">
                                    <div class="label-box">
                                        <span class="gray-icon"></span><span>手机号</span>
                                    </div>
                                    <div class="label-box2">
                                        <input type="text" class="input-left" placeholder="请在此输入您的手机号" v-model="phoneNum">
                                    </div>
                                </div>
                            </el-col>
                        </el-row>

                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content input-box2">
                        <button class="button-type1" @click="freeAppointment(1)">免费计算价格</button>
                        <button class="button-type2" @click="freeAppointment(2)">预约免费量尺寸</button>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "fixPhoneInput",
        data() {
            return {
                isboxFixed:false,
                inputarea:'',
                phoneNum:'',
                area:'',
                wrongInput:false,
            }
        },
        methods:{
            handleScroll () {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                let offsetTop = this.$refs.fixBottom ? this.$refs.fixBottom.getBoundingClientRect().top : 0;
                this.isboxFixed = (offsetTop < -200 ) ? true : false;
            },
            freeAppointment(num){
                let string= (num===1)?'计算价格':'量尺寸';
                let phone=this.phoneNum;
                if(!phone ||!(/^1\d{10}$/.test(phone))){
                  this.$message.error('请输入正确的手机号');
                  this.wrongInput=true;
                  return ;
                }
                let param ={
                    phone:this.phoneNum,
                    originDetail:this.area+'平方：'+string,
                };
                this.$store.dispatch('APPOINTMENT',param)
            }
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
        },
        beforeDestroy() {
            window.removeEventListener('scroll',this.handleScroll, true)
        },
    }
</script>

<style scoped lang="less">
    #fixbottomBar{
        width:100%;
        min-width: 1080px;
        height:200px;
        padding:100px 0;
        position: relative;
        background:transparent url("http://cdn.ylnhome.com/static/bg1.png") no-repeat;
        background-size: cover;
    }
    .fixBottom{
        position:fixed;
        width: 100%;
        min-width: 1080px;
        height: 128px;
        background:rgba(0,0,0,.7) url("http://cdn.ylnhome.com/static/airplain.png") no-repeat;
        background-position: 40% 0%;
        background-size: 280px 160px;
        bottom:0;
        z-index:999;
        &>p{
            font-size: 16px;
            font-weight: 900;
            margin: 12px 0;
            color: #fff;
            text-align: center;
        }
    }
    .label-box{
        color:#C78F5A;
        font-size: 10px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-bottom:15px;
    }
    .label-box2{
        position: relative;
        span{
            position: absolute;
            top:3px;
            left:120px;
            color:#696969;
            font-size: 10px;
            height:26px;
            line-height: 26px;
        }
    }
    .gray-icon{
        background-color: #C78F5A;
        display:inline-block;
        width:18px;
        height:12px;
        margin-right:11px;
    }
    .input-left{
        width:160px;
        height:26px;
        line-height: 26px;
        border-radius: 13px;
        border: 1px solid #696969;
        outline: 0;
        font-size: 10px;
        padding:0 15px;
    }
    .input-box2{
        margin-top:35px;
    }
    .button-type1{
        width:130px;
        height:26px;
        border:1px solid #B6A6A0;
        border-radius: 13px;
        color:#CE5813;
        font-size: 12px;
        margin-right:46px;
        background-image: linear-gradient(0deg, #ececec 0%, #ffffff 100%);
    }
    .button-type2{
        width:130px;
        height:26px;
        border:0;
        border-radius: 13px;
        color:#ffffff;
        font-size: 12px;
        background-image: linear-gradient(0deg, #E44326 0%, #F2664A 50%, #E6472A 100%);
    }
    .warning-text{
        font-size: 8px;
        color:#000;
        margin-top:10px;
    }
    .warning-text2{
        font-size: 8px;
        color:#fff;
        margin-top:10px;
    }
</style>
