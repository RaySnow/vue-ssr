<template>
<!--上面图 -->
<!--名称 价格 -->
<div class="case-product">
    <dl v-for="(item, index) in list" 
        :key="item.id" 
        :class="{right: index%4==3}" 
        @click="go(item)">
        <dd>
            <img :src="item.headPhotoUrl" alt="">
        </dd>
        <dt>
            {{item.name}}
        </dt>
    </dl>
</div>
</template>
<script>
    export default {
        name: "case-product",
        props:['list'],
         methods: {
            go({type, id}) {
                this.$router.push(`/product-detail/4/${id}`)
            }
        },
    }
</script>

<style scoped lang="less">
    @media (max-width: 1220px) {
        .case-product {
            width: 720px;
            margin: 0 auto;
        }
        dl {
            float: left;
            width: 172.5px;
            padding: 10px 10px 0;
            background: #fff;
            margin-right: 10px;
            border:1px solid rgba(233,233,233,1);
            cursor: pointer;
            &.right {
                margin-right: 0;
            }
            img {
                width: 152.5px;
                height: 90px;
            }
            dt {
                font-size: 12px;
                height: 25px;
                line-height: 25px;
                max-width: 152.5px;
                overflow: hidden;
                
            }
            margin-bottom: 0;
        }
        .case-product::after {
            content: '';
            display: block;
            clear: both;
        }
    }
     @media (min-width: 1220px) {
        .case-product {
            width: 915px;
            margin: 0 auto;
        }
        dl {
            float: left;
            width: 219px;
            padding: 12.5px 12.5px 0;
            background: #fff;
            margin-right: 12.5px;
            border:1px solid rgba(233,233,233,1);
            cursor: pointer;
            &.right {
                margin-right: 0;
            }
            img {
                width: 194px;
                height: 114px;
            }
            dt {
                font-size: 15px;
                height: 32px;
                line-height: 32px;
                max-width: 194px;
                overflow: hidden;
            }
            margin-bottom: 0;
        }
        .case-product::after {
            content: '';
            display: block;
            clear: both;
        }
    }
    
</style>