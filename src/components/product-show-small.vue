<template>
<!--上面图 -->
<!--名称 价格 -->
<div class="product-show-small">
    <dl v-for="(item, index) in list" 
        :key="item.id" 
        :class="{right: index%4 == 3}"
        @click="go(item)">
        <dd>
            <img :src="item.headPhotoUrl" alt="">
        </dd>
        <dt>
            <span class="name">{{item.name}}</span>
            <span class="yuan">元</span>
            <span class="price">{{item.price}}</span>
        </dt>
    </dl>
</div>
</template>
<script>
    export default {
        name: "product-show",
        props:['list'],
         methods: {
            go({id}) {
                this.$router.push(`/product-detail/1/${id}`)
            }
        },
    }
</script>

<style scoped lang="less">
    @media (max-width: 1220px) {
        .product-show-small {
            width: 720px;
            margin: 0 auto;
        }
        dl {
            width: 167px;
            float: left;
            margin: 0 17px 19px 0;
            cursor: pointer;
            &.right {
                margin-right: 0;
            }
            img {
                width: 167px;
                height: 100px;
            }
            dt {
                border: 1px solid #e9e9e9;
                background: #fff;
                height: 25px;;
                line-height: 25px;
                padding: 0 2px;
                .name {
                    font-size: 12px;
                    color: #393835;
                    display: inline-block;
                    max-width: 95px;
                    height: 25px;
                    overflow: hidden;
                }
                .price {
                    font-size: 17px;
                    color: #e24527;
                    float: right;
                }
                .yuan {
                    float: right;
                    font-size: 12px;
                    color: #D82F1E;
                    padding-left: 2px;
                }
            }
        }
        
        .product-show-small::after {
            content: '';
            display: block;
            clear: both;
        }
    }
     @media (min-width: 1220px) {
        .product-show-small {
            width: 915px;
            margin: 0 auto;
        }
        dl {
            width: 212px;
            float: left;
            margin: 0 21.5px 24px 0;
            cursor: pointer;
            &.right {
                margin-right: 0;
            }
            img {
                width: 212px;
                height: 127px;
            }
            dt {
                border: 1px solid #e9e9e9;
                background: #fff;
                height: 32px;;
                line-height: 32px;
                padding: 0 3px;
                .name {
                    font-size: 14px;
                    color: #393835;
                    display: inline-block;
                    max-width: 120px;
                    height: 25px;
                    overflow: hidden;
                }
                .price {
                    font-size: 22px;
                    color: #e24527;
                    float: right;
                }
                .yuan {
                    float: right;
                    font-size: 14px;
                    color: #D82F1E;
                    padding-left: 3px;
                }
            }
        }
        
        .product-show-small::after {
            content: '';
            display: block;
            clear: both;
        }
    }
    
</style>