<template>
    <!--家装攻略下面长列表-->
    <div class="decorat-product">
        <dl v-for="(item) in list"
            :key="item.id"
            @click="go(item)">
            <dd class="list-item">
                <div><img :src="item.headPhotoUrl" alt=""></div>
                <div class="introduction">
                    <div class="item-title">{{item.name}}</div>
                    <div class="item-date">{{item.createTime}}</div>
                    <div class="item-detail">{{item.description}}</div>
                </div>
            </dd>
        </dl>
    </div>

</template>

<script>
    export default {
        name: "decoratedetail-list-small",
        props:['list'],
        methods: {
            go({id}) {
                this.$router.push(`/article-detail/${id}`)
            }
        },
    }
</script>


<style scoped lang="less">
    @media (max-width: 1220px) {
        .decorat-product {
            width: 600px;
        }
        dl {
            width: 600px;
            padding: 12px;
            background: #fff;
            margin-bottom: 9px;
            border:1px solid rgba(233,233,233,1);
            cursor: pointer;
            img {
                width: 170px;
                height: 100px;
            }
            .list-item{
                display: flex;
                flex-direction: row;

            }
            .introduction{
                padding:0 12px;
            }
            .item-title{
                font-size: 12px;
                color:#393835;
                line-height: 32px;
            }
            .item-date{
                font-size: 8px;
                margin-bottom: 6px;
                color:#B6A6A0;
            }
            .item-detail{
                color:#2F2F2F;
                font-size: 10px;
                /*overflow: hidden;*/
                /*white-space:normal;*/
                /*text-overflow: ellipsis;*/
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
            width: 762px;
        }
        dl {
            width: 762px;
            padding: 15px;
            background: #fff;
            margin-bottom: 12px;
            border:1px solid rgba(233,233,233,1);
            cursor: pointer;
            img {
                width: 216px;
                height: 127px;
            }
            .list-item{
                display: flex;
                flex-direction: row;

            }
            .introduction{
                padding:0 15px;
            }
            .item-title{
                font-size: 15px;
                color:#393835;
                line-height: 41px;
            }
            .item-date{
                font-size: 12px;
                margin-bottom: 8px;
                color:#B6A6A0;
            }
            .item-detail{
                color:#2F2F2F;
                font-size: 14px;
                /*overflow: hidden;*/
                /*white-space:normal;*/
                /*text-overflow: ellipsis;*/
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
            }
        }
	}
</style>
