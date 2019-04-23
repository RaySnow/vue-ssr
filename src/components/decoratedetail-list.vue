<template>
    <!--家装攻略下面长列表-->
    <div class="decorat-product">
        <dl v-for="(item, index) in list"
            :key="index"
            @click="go(item.id)">
            <dd class="list-item">
                <div class="img_box"><img :src=item.headPhotoUrl alt=""></div>
                <div class="introduction">
                    <div class="item-title nowrap">{{item.price}}{{item.name}}</div>
                    <div class="item-date nowrap">{{item.createTime}}</div>
                    <div class="item-detail">{{item.description}}</div>
                </div>
            </dd>
        </dl>
    </div>

</template>

<script>
  import { mapState } from 'vuex';
    export default {
        name: "decoratedetail-list",
      props:['list'],
        methods: {
            go(id) {
                this.$router.push('/article-detail/'+id)
            }
        },
      // computed: mapState({
      //   articlelist: 'articlelist',
      // }),
    }
</script>


<style scoped lang="less">
    @media (max-width: 1220px) {
        .decorat-product {
            width: 918px;
            margin: 20px auto;
        }
        dl {
            width: 918px;
            padding: 18px;
            background: #fff;
            margin-bottom: 20px;
            cursor: pointer;
            img ,.img_box{
                width: 216px;
                height: 128px;
                /*margin-bottom: .9vw*/
            }
            .list-item{
                display: flex;
                flex-direction: row;

            }
            .introduction{
                padding:0 16px;
                width:684px;
            }
            .item-title{
                font-size: 14px;
                color:#393835;
                line-height: 40px;
            }
            .item-date{
                font-size: 10px;
                margin-bottom: 10px;
                color:#B6A6A0;
            }
            .item-detail{
                color:#2F2F2F;
                font-size: 14px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
            }
        }
    }
    @media (min-width: 1220px) {
        .decorat-product {
            width: 918px;
            margin: 20px auto;
        }
        dl {
            width: 918px;
            padding: 18px;
            background: #fff;
            margin-bottom: 20px;
            cursor: pointer;
            img ,.img_box{
                width: 216px;
                height: 128px;
                /*margin-bottom: .9vw*/
            }
            .list-item{
                display: flex;
                flex-direction: row;

            }
            .introduction{
                padding:0 16px;
                width:684px;
            }
            .item-title{
                font-size: 14px;
                color:#393835;
                line-height: 40px;
            }
            .item-date{
                font-size: 10px;
                margin-bottom: 10px;
                color:#B6A6A0;
            }
            .item-detail{
                color:#2F2F2F;
                font-size: 14px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
            }
        }
    }

    .nowrap{
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
</style>
