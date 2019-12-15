<template>
    <div id="A">
        <div class="but">
                <Icon type="md-contacts" size="40"/>
                <router-link :to="'/home/ideainfo'"><Button type="success">我要发帖</Button></router-link>
        </div>
        <div class="center">
        <Tabs value="name1">
            <TabPane label="默认" name="name1"><all/></TabPane>
            <TabPane label="华为" name="name2"><huawei/></TabPane>
            <TabPane label="小米" name="name3"><xiaomi/></TabPane>
            <TabPane label="苹果" name="name4"><apple/></TabPane>
        </Tabs>
        </div>
    </div>
</template>
<script>
    import all from "../space/all.vue"
    import huawei from "../space/huawei.vue";     
    import xiaomi from "../space/xiaomi.vue";     
    import apple from "../space/apple.vue";       
export default {
    name: 'spaceidea',
    components:{
        huawei,xiaomi,apple,all
},
data(){
    return{
    }
}
}
</script>
<style scoped>
.but{
width: 90%;
margin-left: 5%;
display: flex;
justify-content: space-between;
}
#A{
        width: 100%;
}
</style>