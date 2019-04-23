<template>
    <div class="orderDialogBg">
        <div class="orderDialog">
            <div class="title">
                <span>免费预约设计师</span>
                <i class="el-icon-close" @click.stop="close"></i>
            </div>
            <div class="form-box">
                <el-input type="text" v-model.number="phonenum"  placeholder="请输入手机号" autocomplete="off"  prefix-icon="el-icon-mobile-phone" size="small" class="phone-input"></el-input>
                <el-button size="small" class="freeOrder" @click="freeAppointment(3)">立即免费预约设计师</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "orderDialog",
        data() {
            return{
                phonenum:''
            }
        },
        methods: {
            close() {
                this.$emit('close');
            },
          freeAppointment(num){
            let phone=this.phonenum;
            if(!phone ||!(/^1\d{10}$/.test(phone))){
              this.$message.error('请输入正确的手机号');
              return ;
            }
            let param ={
              phone:this.phonenum,
              originDetail:'预约设计师',
            };
            this.$store.dispatch('APPOINTMENT',param);
            this.close();
          }
        }
    }
</script>

<style scoped lang="less">
    .orderDialogBg{
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        height:100%;
        background-color: rgba(0,0,0,.6);
    }
    .orderDialog{
        position: fixed;
        top:50%;
        left: 50%;
        width:245px;
        height:192px;
        background-color: #fff;
        z-index: 1500;
        transform:translate(-50%,-50%);
        -ms-transform:translate(-50%,-50%); 	/* IE 9 */
        -moz-transform:translate(-50%,-50%); 	/* Firefox */
        -webkit-transform:translate(-50%,-50%); /* Safari 和 Chrome */
        -o-transform:translate(-50%,-50%);
        box-shadow:0px 2px 4px 0px rgba(0,0,0,0.2);
        border:1px solid rgba(233,233,233,1);
        .title{
            color: #505050;
            font-size: 12px;
            text-align: center;
            height:50px;
            line-height: 50px;
            span{
                margin-left:50px;
            }

        }
        .el-icon-close{
            float:right;
            color:#B6A6A0;
            font-size: 24px;
            padding:12px;
            cursor: pointer;
        }
        .form-box{
            padding: 18px 25px;
            font-size: 12px;
            color:#B6A6A0;
        }
        .phone-input{
            width: 200px;
            height:24px;
            font-size: 12px;
        }
        .orderDialog .el-input__inner{
            color: #B6A6A0 !important;
            border-color: #B6A6A0 !important;
        }
        .freeOrder{
            width: 200px;
            height:32px;
            margin-top:38px;
            background-color: #A67546;
            color:#fff;
            font-size: 12px;
            border-radius: 4px;
        }
    }

</style>
