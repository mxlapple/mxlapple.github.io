<template>
<div>
        <Icon type="md-person" size="80" style="background-color: #CCC;border-radius: 50%;margin-top: 150px"/>
        <h1 style="margin-top: 50px"> {{ msgx.namex }} </h1>
        <h3 style="margin-top: 20px"> {{ msgx.msg }} </h3>

        <Button type="info" style="width: 100px;margin-top: 30px" @click="remove(msgx.id)">切换账户</Button>
</div>
</template>
<script>

    export default {
        name: 'heading',
        components:{
    },
    data(){
        return{
            msgx:[]
        }
    },
    created(){
        this.getValue();
    },
    methods:{
    getValue() {
        this.$http.get('/api/getValueuserrr', {
            params: {id:this.$route.params.id}
        }).then( (res) => {
            this.msgx = res.data[0];
        }) 
    },
    remove(id){
            this.$store.commit("removeperson",id);
            this.$router.push({path:'/myself'});
            },
    },
    }
    
</script>
<style scoped>
</style>