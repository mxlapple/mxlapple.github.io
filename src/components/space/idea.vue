<template>
<div>
    
    <div class="inp">
        <h1>我要做楼主</h1>
        <div class="tex"><Input prefix="ios-contact" placeholder="发帖人" v-model="name" style="width: 300px"/></div>
        <div class="tex"><Input placeholder="标题" style="width: 300px" v-model="title"/></div>
        <div class="tex"><Input type="textarea" :rows="4" placeholder="内容" style="width: 300px;" v-model="msg"/></div>
        <div class="tex"><Select style="width:300px" v-model="space">
                <Option v-for="item in cityList" :value="item.value" :key="item.value" >{{ item.label }}</Option>
        </Select></div>
        <div class="tex"><Button type="success" style="width: 300px;" @click="gooo">我要发帖</Button></div>
    </div>
</div>
</template>
<script>

    export default {
        name: 'heading',
        components:{
    },
    data(){
        return{
            name:"",
            msg:"",
            title:"",
            space:"",
            cityList: [
                    {
                        value: 'huawei',
                        label: 'huawei'
                    },
                    {
                        value: 'xiaomi',
                        label: 'xiaomi'
                    },
                    {
                        value: 'apple',
                        label: 'apple'
                    }
                ]
        }
        },
    methods:{
        gooo(){
            
            if(this.msg.length === 0 || this.name.length === 0 || this.title.length === 0 || this.space.length === 0)
            { this.$Message.success('请将帖子资料填写完！'); }else{
            this.$http.post('/api/setValuespace', {
            name: this.name,
            title: this.title,
            msg: this.msg,
            space: this.space
            }).then( (res) => {
            this.$Message.success('发帖成功！');
            })
            }
            this.$router.replace('/home/spaceidea')
        },
        
    },
    }
</script>
<style scoped>
.inp{
    padding-top: 50px;
    width: 100%;
    height: 400px;
}
.tex{
    margin: 10px;
    margin-top:25px;
}
</style>