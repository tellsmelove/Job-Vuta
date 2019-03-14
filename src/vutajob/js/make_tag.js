import Vue from 'vue';

var app = new Vue({
    data: {
        tagList: [],
        InputTags: null,
    },
    methods:{
        makeTags(){
            if (this.InputTags){
                this.tagList.push(this.InputTags.replace(',', ''))
                this.InputTags = null;
            }
        },
        removeTag(key){
            this.$delete(this.tagList, key)
        }
    }
}).$mount('#app')
