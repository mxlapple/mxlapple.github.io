<template>
    <div id="A">
            <Input v-model="child" placeholder="搜索..." style="width: 300px" /> 
            <Tabs value="name1">
                <TabPane label="默认" name="name1"><phonepaixu0 :child='child'/></TabPane>
                <TabPane label="销量" name="name2"><phonepaixu1 :child='child'/></TabPane>
                <TabPane label="价格" name="name3"><phonepaixu2 :child='child'/></TabPane>
                <TabPane label="品牌" name="name4"><phonepaixu3 :child='child'/></TabPane>
            </Tabs>

    </div>
    </template>
    <script>
         import phonepaixu0 from "../page2/phonepaixu0.vue";
         import phonepaixu1 from "../page2/phonepaixu1.vue";
         import phonepaixu2 from "../page2/phonepaixu2.vue";
         import phonepaixu3 from "../page2/phonepaixu3.vue";
        export default {
            name: 'paihangContainer',
            components:{
                phonepaixu0,phonepaixu1,phonepaixu2,phonepaixu3
        },
        data(){
            return{
                child:""
            }
        }
        
        
    }
    </script>
    <style scoped>
    #A{
        width: 100%;
    }
    

    </style>    