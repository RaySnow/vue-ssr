<template>
<div class='choice-product'>
    <!-- <p class="line" v-if="type=='21'">
        <span class="type">全屋成品:</span>
        <span class="name" 
              :class="{active: item.key==selectInfo.spacePackage}"
              v-for="item in goods_type.spacePackage" 
              :key="item.val" 
              @click="click('spacePackage', item.key)">{{item.val}}</span>
    </p>
    <p class="line" v-if="type=='22'">
        <span class="type">全屋定制:</span>
        <span class="name" 
              :class="{active: item.key==selectInfo.spacePackage}"
              v-for="item in goods_type.spacePackage" 
              :key="item.val" 
              @click="click('spacePackage', item.key)">{{item.val}}</span>
    </p> -->
    <p class="line" v-if="type=='23'">
        <span class="type">空间定制:</span>
        <span class="name" 
              :class="{active: item.key==selectInfo.spacePackage}"
              v-for="item in goods_type.spacePackage" 
              :key="item.val" 
              @click="click('spacePackage', item.key)">{{item.val}}</span>
    </p>
     <p class="line" v-if="type=='24'">
        <span class="type">厨房定制:</span>
        <span class="name" 
              :class="{active: item.key==selectInfo.kitchenPackage}"
              v-for="item in goods_type.kitchenPackage" 
              :key="item.val" 
              @click="click('kitchenPackage', item.key)">{{item.val}}</span>
    </p>
    <p class="line" v-if="type=='12'">
        <span class="type">家具单品:</span>
        <span class="name" 
              :class="{active: item.key==selectInfo.furniture}"
              v-for="item in goods_type.furniture" 
              :key="item.val" 
              @click="click('furniture', item.key)">{{item.val}}</span>
    </p>
    <p class="line" v-if="type=='11'">
        <span class="type">护墙系统:</span>
        <span class="name" 
              :class="{active: item.key==selectInfo.protectWall}"
              v-for="item in goods_type.protectWall" 
              :key="item.val" 
              @click="click('protectWall', item.key)">{{item.val}}</span>
    </p>
    <p class="line" v-if="type=='13'">
        <span class="type">软陪装饰:</span>
        <span class="name" 
              :class="{active: item.key==selectInfo.soft}"
              v-for="item in goods_type.soft" 
              :key="item.val" 
              @click="click('soft', item.key)">{{item.val}}</span>
    </p>
    <p class="line" v-for="list in all_tag" :key="list.id">
        <span class="type">{{list.name}}:</span>
        <span class="name" 
            v-for="item in list.subTags" 
            :class="{active: item.id==tagInfo[list.id]}"
            :ref="item.id" 
            @click="click_tag(item)">{{item.name}}</span>
    </p>  
</div>
</template>

<script>
    import { mapState } from 'vuex'
    import { QUERY_GOODS_TYPE, QUERY_ALL_TAG, CHANGE_SEARCH_INFO, GET_PRODUCT_LIST } from "../store/app/type";
    let selectInfo = {
                    protectWall: '',
                    furniture: '',
                    soft: '',
                    spacePackage: '',
                    kitchenPackage: '',
                }
    export default {
        name: "ChoiceProduct",
        props: ['type'],
        data() {
            return {
                selectInfo,
                tagInfo: {},
            }
        },
        computed: mapState({
            goods_type (state) {
                for(let key in state.goods_type) {
                    state.goods_type[key].unshift({key:"",val:"全部"})
                }
                return  state.goods_type
            },
            all_tag (state) {
                state.all_tag.forEach(element => {
                    this.tagInfo[element.id] = ''
                    element.subTags.unshift({id:"",name:"全部", parentId: element.id })
                });
                return  state.all_tag
            },
        }),
        methods: {
            click(name, key) {
                this.selectInfo = {...selectInfo, [name]: key};
                this.$store.commit(CHANGE_SEARCH_INFO, {key: 'current', value: 1})
                this.$store.commit(CHANGE_SEARCH_INFO, {key: 'subType', value: key ? key : this.type})
                this.$store.dispatch(GET_PRODUCT_LIST);
            },
            click_tag(obj) {
                this.tagInfo[obj.parentId] = obj.id
                this.$forceUpdate();
                let arr = [];
                for (let i in this.tagInfo) {
                    this.tagInfo[i] ? arr.push(this.tagInfo[i]) : ''
                }
                this.$store.commit(CHANGE_SEARCH_INFO, {key: 'current', value: 1})
                this.$store.commit(CHANGE_SEARCH_INFO, {key: 'tagIds', value: arr.join(',')})
                this.$store.dispatch(GET_PRODUCT_LIST);
            },
        },
        created() {
            this.$store.commit(CHANGE_SEARCH_INFO, {key: 'type', value: this.type.substr(0, 1)})
            this.$store.commit(CHANGE_SEARCH_INFO, {key: 'current', value: 1})
            this.$store.commit(CHANGE_SEARCH_INFO, {key: 'tagIds', value: ''});
            this.$store.commit(CHANGE_SEARCH_INFO, {key: 'subType', value: this.type});
            this.$store.dispatch(QUERY_GOODS_TYPE);
            this.$store.dispatch(QUERY_ALL_TAG);
            this.$store.dispatch(GET_PRODUCT_LIST);
        }
    }
</script>
