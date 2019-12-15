<template>
<div id="A">
        <Icon type="ios-arrow-dropleft-circle"  class="remove" @click="goback" v-show="flag" size="35"/>
       
       <P>我的APP</P>
</div>
</template>
<script>

    export default {
        name: 'heading',
        components:{
    },
    data(){
        return{
            flag:false
        }
        },
    created(){
        this.flag = this.$route.path ==="/home" ? false : true;
    },
    methods:{
        goback(){
            this.$router.go(-1);
        }
    },
    watch:{
        "$route.path":function(newval){
            if(newval === "/home"){
                this.flag = false;
            }else{
                this.flag = true;
            }
        }
    }
    }
   
</script>
<style scoped>
#A{
    width: 100%;
    height: 50px;
    background-color: rgb(98, 98, 255);
    font-size: 20px;
    padding: 8px;
    color:white;
    position: fixed;
    z-index:999;
}
p{
     font-weight: bold;  
}
.remove{
    position: absolute;
    left: 1%;
}

</style>