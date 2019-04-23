<template>
<!-- 标准化硬装介绍下面的三个小图 -->
<div class="product">
    <div class="left">
        <dl>
            <dd>
                <img src="http://cdn.ylnhome.com/static/standard-1.png" alt="">
            </dd>
            <dt class="firstline">硬装全包</dt>
            <dt class="secondline">799元/㎡起</dt>
        </dl>
    </div>
    <div class="center">
        <dl>
            <dd>
                <img src="http://cdn.ylnhome.com/static/standard-2.png" alt="">
            </dd>
            <dt class="firstline">硬装半包</dt>
            <dt class="secondline">599元/㎡起</dt>
        </dl>
    </div>
    <div class="right">
        <dl>
            <dd>
                <img src="http://cdn.ylnhome.com/static/standard-3.png" alt="">
            </dd>
            <dt class="firstline">严选主材</dt>
            <dt class="secondline">供应链严选环保主材，住的放心</dt>
        </dl>
    </div>
</div>
</template>

<script>
    export default {
        name: "product",
    }
</script>

<style scoped lang="less">
    @media (max-width: 1220px) {
        .product {
            width: 609px;
            margin: 0 auto;
        }

        .left,.right {
            width: 195px;
            float: left;
        }
        .center {
            width: 195px;
            margin: 0 12px;
            float: left;
        }
        dl {
            width: 195px;
            img {
                width: 195px;
                height: 167px;
            }
            text-align: center;
            .firstline {
                height: 10px;
                line-height: 10px;
                font-size: 10px;
                margin-top: 10px;
                color: #393835;
            }
            .secondline {
                height: 8px;
                line-height: 8px;
                font-size: 8px;
                margin-top: 8px;
                color: #8D8D8D;
            }
            margin-bottom: 55px;
        }
        .left {
            dl {
                float: right;
            }
        }
        .product::after {
            content: '';
            display: block;
            clear: both;
        }
    }
     @media (min-width: 1220px) {
        .product {
            width: 773px;
            margin: 0 auto;
        }
        .left,.right {
            width: 247px;
            float: left;
        }
        .center {
            width: 247px;
            margin: 0 14px;
            float: left;
        }
        dl {
            width: 247px;
            img {
                width: 247px;
                height: 212px;
            }
            text-align: center;
            .firstline {
                height: 12.5px;
                line-height: 12.5px;
                font-size: 12.5px;
                margin-top: 12.5px;
                color: #393835;
            }
            .secondline {
                height: 10px;
                line-height: 10px;
                font-size: 10px;
                margin-top: 10px;
                color: #8D8D8D;
            }
            margin-bottom: 70px;
        }
        .left {
            dl {
                float: right;
            }
        }
        .product::after {
            content: '';
            display: block;
            clear: both;
        }
    }
    
</style>