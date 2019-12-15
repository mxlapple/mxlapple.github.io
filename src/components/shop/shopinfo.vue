<template>
<div id="shopinfobody" >
   <!-- <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
    <div class="ball" v-show="ballflag" ref="ball"></div>
    </transition>-->
    <div class="phonebox">
        <img :src=msgx.img_url> 
        
    </div>
    <div class="selbox">
        <div><h1 style="padding-left: 10px">{{msgx.title}}</h1></div>
        <hr>
        <div class="xbox">
            <p class="price">
                <span class="nowprice">市场价：￥{{msgx.now_price}}</span>
                <span class="oldprice">销售价：￥{{msgx.old_price}}</span>
            </p>
          
            <div>
                <p class="selbox1">购买数量:</p>
                <div class="btn-numbox">
                            <ul class="count">
                                <li><button  class="num" @click="cut">-</button></li>
                                <li><input type="text"  class="num" ref="numbox" value="1"></li>
                                <li><button  class="num" @click="add">+</button></li>
                            </ul>
                 </div>
            </div>
             <div class="buttonbox">
             <button class="button1" >立即购买</button>
             <button class="button2" @click="toshopcar">加入购物车</button>
             </div>
        </div>
    </div>
    <div class="selbox">
        <div><h1 style="text-align: center">商品信息</h1></div>
        <hr>
        <div style="height:100px;">
        <p style="font-size: 16px;font-weight: bold;padding-top:6px;padding-left:5px;text-align: left;">
        商品货号：  2016-240-203-34
        </p>
        <p style="font-size: 16px;font-weight: bold;padding-top:6px;padding-left:5px;text-align: left;">
        库存信息：  3502
        </p>
        <p style="font-size: 16px;font-weight: bold;padding-top:6px;padding-left:5px;text-align: left;">
        上架时间：  2018-08-08
        </p>
        </div>
        <div class="shop_count">
             <router-link :to="'/home/phonedesc/' + msgx.id"><button class="button1">详细参数</button></router-link>
             <button class="button2" @click="goComment">商品评论</button>
        </div>
        <comment v-show="flag" />
    </div>
</div>
</template>
<script>

    import comment from "../subcom/comment";     
    import bottoming from "../page1com/bottoming"   
    export default {
        name: 'shopinfo',
        components:{
            comment,bottoming
    },
    data(){
        return{
         //   ballflag:false,
            msg:1,
            msgx:[],
            flag:false
        }
        },
         methods:{

    },
    created(){
            this.getValue();
     },
    methods:{
        goComment(id){
            //跳转 商品评论 组件
            this.flag = !this.flag
        },
        
        /*
        beforeEnter(el){
            el.style.transform = "translate(0,0)";
        },
        enter(el,done){
            el.offsetWidth;
            var x1=document.body.clientWidth*0.4; 
            var y1=document.body.clientHeight*0.4;
            el.style.webkitTransform=`translate3d(${x1}px,${y1}px,0)`;
            el.style.transition="all 0.5s cubic-bezier(.4,-0.3,1,.68)";
            done()
        },
        afterEnter(el){
            this.ballflag=!this.ballflag; 
        },*/
        cut(){
                if(this.$refs.numbox.value == 1){
                    this.$Message.success('商品数量为 0');
                }
                else{
                    this.$refs.numbox.value--;
                }
            },
            add(){
                this.$refs.numbox.value ++;
            },
            toshopcar(){
            //保存到store中的数据
            var num = Number(this.$refs.numbox.value);

            var shopinfo = {
                title:this.msgx.title,
                id:this.msgx.id,
                count:num,
                price:this.msgx.now_price,
                selected:true,
                img_url:this.msgx.img_url
            };
            this.$store.commit("addtocar",shopinfo)
            this.$Message.success('加入购物车成功！');
        },
        getValue() {
            // axios.get('/', {params: ''})
            this.$http.get('/api/getValuepho', {
              params: {id:this.$route.params.id}
            }).then( (res) => {
              this.msgx = res.data[0];
            })
          },

      
    }
    }
   
</script>
<style scoped>
/*.ball{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top:430px;
    left:40%;
    z-index: 999999;
}*/
.phonebox{
    margin: 20px auto;
    width: 90%;
    height: 250px;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px #ccc;
    background-color: white;
}
img{
    width: 220px;
    height: 90%;
    margin: 5px;
}
.selbox{
    margin: 20px auto;
    width: 90%;
    height: 200px;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px #ccc;
    background-color: white;
}
.commentbox{
    margin: 20px auto;
    width: 90%;
}
h1{
    font-size: 16px;
    text-align: left;
    margin:10px auto;
}
.price{
    display: flex;
    justify-content:space-between;
    font-size: 12px;
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
.xbox{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content:space-between;
}

.button1{
    width: 30%;
    height: 30px;
    font-size: 15px;
    background-color: rgb(142, 142, 253);
    border: 2px solid rgb(156, 156, 156); 
    border-radius: 10px;
    color:white;
}
.button2{
    width: 30%;
    height: 30px;
    margin-bottom: 10px;
    font-size: 15px;
    background-color: rgb(255, 0, 0);
    border: 2px solid rgb(158, 158, 158); 
    border-radius: 10px;
    color:rgb(255, 255, 255);
}
.selllbox{
    float: left;
    font-size: 16px; 
    font-weight: bold;
    margin-left: 5%;
    margin-top:5px;
}

.btn-numbox{
    margin-left: 10%;
    margin-top:5px;
    float: left;

}

.btn-numbox li {
    height: 30px;
    display: inline-block;
    font-size: 12px;
    color: #808080;
    text-align: center;
    list-style: none;
}


.btn-numbox .count {
    overflow: hidden;
    margin: 0 16px 0 -20px;
}

.btn-numbox .count
.num
{
    display: inline-block;
    width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    font-size: 18px;
    color: #999;
    background-color: white;
    cursor: pointer;
    border: 1px solid #e6e6e6;
}
.selbox1{
    float: left;
    font-size: 16px; 
    font-weight: bold;
    margin-left: 5%;
    margin-top:5px;
}

</style>