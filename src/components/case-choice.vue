<template>
<!-- 案例的搜索 -->
<div class="choice-product">
    <p class="line" v-for="list in all_tag" :key="list.id">
        <span class="type">{{list.name}}:</span>
        <span class="name" 
            v-for="item in list.subTags" 
            :class="{active: item.id==tagInfo[list.id]}"
            :key="item.name" 
            :ref="item.id" 
            @click="click_tag($event, item)">{{item.name}}</span>
    </p>  
</div>
</template>

<script>
    import { mapState } from 'vuex'
    import { QUERY_GOODS_TYPE, QUERY_ALL_TAG, CHANGE_SEARCH_INFO, GET_PRODUCT_LIST } from "../store/app/type";
    export default {
        name: "CaseChoice",
        data() {
            return {
                tagInfo: {},
            }
        },
        computed: mapState({
            all_tag (state) {
                state.all_tag.forEach(element => {
                    this.tagInfo[element.id] = '' 
                    element.subTags.unshift({id:"",name:"全部", parentId: element.id })
                });
                return  state.all_tag
            },
        }),
        methods: {
            click_tag(e, obj) {
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
            this.$store.commit(CHANGE_SEARCH_INFO, {key: 'type', value: 3});
            this.$store.commit(CHANGE_SEARCH_INFO, {key: 'current', value: 1})
            this.$store.commit(CHANGE_SEARCH_INFO, {key: 'tagIds', value: ''});
            this.$store.commit(CHANGE_SEARCH_INFO, {key: 'subType', value: ''});
            this.$store.dispatch(QUERY_ALL_TAG);
            this.$store.dispatch(QUERY_GOODS_TYPE);
            this.$store.dispatch(GET_PRODUCT_LIST);
        }
    }
</script>
