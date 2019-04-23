<template>
    <!--上面图 -->
    <!--名称 价格 -->
    <div class="decorat-product">
        <dl v-for="(item,index) in list"
            :key="index"
            :class="{left: index%4==0, center1: index%4==1,center2: index%4==2, right: index%4==3 ,}"
            @click="go(item.id)">
            <dd>
                <img :src=item.headPhotoUrl alt="">
            </dd>
            <dt class="nowrap">
                {{item.name}}
            </dt>
        </dl>
    </div>
    <!--:class="{left: index%3==0, center: index%3==1, right: index%3==2}"-->
</template>
<script>
    export default {
        name: "decorat-list",
        props:['list'],
        methods: {
          go(id) {
            this.$router.push('/article-detail/'+id)
          }
        },
    }
</script>

<style scoped lang="less">
    @media (max-width: 1220px) {
        .decorat-product {
            width: 918px;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: left;
            align-items: center;
        }
        dl {
            width: 215px;
            padding: 10px;
            background: #fff;
            margin:0 10px;
            cursor: pointer;
            img,dd {
                width: 190px;
                height: 170px;
                margin-bottom: 10px
            }
            dt {
                font-size: 10px;
                /*margin-bottom:.5vw;*/

            }
        }
    }
    @media (min-width: 1220px) {
        .decorat-product {
            width: 918px;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: left;
            align-items: center;
        }
        dl {
            width: 215px;
            padding: 10px;
            background: #fff;
            margin:0 10px;
            cursor: pointer;
            img,dd {
                width: 190px;
                height: 170px;
                margin-bottom: 10px
            }
            dt {
                font-size: 10px;
                /*margin-bottom:.5vw;*/

            }
        }
    }
    .left{
        margin-left:0;
    }
    .right{
        margin-right:0;
    }
    .center1,.center2{
        margin:0 10px;
    }
    .decorat-product::after {
        content: '';
        display: block;
        clear: both;
    }
    .decorat-product::before {
        content: '';
        display: block;
        clear: both;
    }
</style>
