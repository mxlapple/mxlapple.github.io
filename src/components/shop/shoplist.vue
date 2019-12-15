<template>
<div id="shoplistbody">
    <router-link :to="'/home/shopinfo/'+item.id" class="phoneslist" v-for="item in phoneslist" :key="item.id">
        <img :src=item.img_url>
        <h1>{{item.title}}</h1>
        <div class="phoneinfo">
            <p class="price">
                <span class="nowprice">￥{{item.now_price}}</span>
                <span class="oldprice">￥{{item.old_price}}</span>
            </p>
            <p class="sell">
                <span>热卖中</span>
                <span>剩余{{item.shengyu}}件</span>
            </p>
        </div>
    </router-link>
   
</div>
</template>
<script>

    export default {
        name: 'shoplist',
        components:{
    },
    data(){
        return{
            phoneslist:[
            ]
        }
    },
    created(){
            this.getValue();
        },
        methods: {
          getValue() {
            // axios.get('/', {params: ''})
            this.$http.get('/api/getValuepho', {
              params: {all:true}
            }).then( (res) => {
              this.phoneslist = res.data;
            })
          }
    }
}
</script>
<style scoped>
.phoneslist{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content:space-between;
    width: 180px;
    float: left;
    margin:10px auto;
    margin-left: 2%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    min-height: 326px;
}
img{
    width: 96%;
    height: 200px;
    padding-top:5px;
}
h1{
    font-size: 12px;
    width: 96%;
}
.phoneinfo{
    width: 100%;
    background-color: #eee; 
    text-align: left;
}
p{
    padding: 10px;
}
.nowprice{
    font-size: 16px;
    color:red;
    font-weight: bold;
}
.oldprice{
    text-decoration: line-through;
    font-size: 12px;
    margin-left: 10px;
}
.sell{
    display: flex;
    justify-content:space-between;
    font-size: 12px;
}
</style>