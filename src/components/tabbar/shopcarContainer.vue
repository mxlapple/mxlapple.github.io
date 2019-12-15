<template>
    <div>   
        <h3 style="padding: 10px">{{msg}}</h3>
        <div class="shopcar_num" v-for="(item,i) in goodlist">
            <div class="check">
                    <i-switch size="small" v-model="item.selected" @change = "phonechange(item.id,item.selected)" />
            </div>
            <div class="imgbody">
                    <img :src=item.img_url>
            </div>
            <div class="centerbody">
            <p class="centertitle"> {{item.title}} </p>
            <hr>
                <div class="btn-numbox">
                    <p class="selbox">${{item.price}}</p>
                    <p class="selnum">购买数量：{{item.count}}</p>
                    <a href="#" @click.prevent = "remove(item.id , i)">删除</a>
                </div>
            </div>
        </div>
        <div class="shopcar_com">
            <div class="left">
                <p>总计(不包含运费)：</p>
                <P>已勾选 {{ $store.getters.getAllprice.count }} 件</P>
                <p>总价 ￥ {{ $store.getters.getAllprice.amount }}</P>
            </div> 
            <div class="right">
                <button class="button1"  @click="Allcheck">全选</button>
                <button class="button2"  @click="Nocheck">取消全选</button>
                <button class="button3" >结算</button>
            </div>
        </div>
    </div>
    </template>
    <script>
    
        export default {
            name: 'shopcarContainer',
            components:{
                
        },
        data(){
            return{
                msg:"",
                goodlist:[]
            }
            } ,
        created(){
            this.getgoodlist()
        },
        methods:{
            getgoodlist(){
                var idArr = [];
                this.$store.state.car.forEach(item => idArr.push(item.id));
                if(idArr.length <= 0){
                    this.msg = "当前购物车为空哦！"
                }else{
                    this.goodlist = this.$store.state.car;
                }  
            },
            remove(id,index){
                this.goodlist.splice(index,1);
                this.$store.commit("removeshopcar",id);
            },
            phonechange(id,val){
                this.$store.commit('shopselect',{id,selected:val})
            },
            Allcheck(){
                for(var i = 0;i < this.goodlist.length;i ++){
                     this.goodlist[i].selected = true;
                     this.phonechange()
                }
            },
            Nocheck(){
                for(var i = 0;i < this.goodlist.length;i ++){
                     this.goodlist[i].selected = false;
                     this.phonechange()
                }
            }
        }
        }
      
    </script>
    <style scoped>
            .shopcar_num{
                width: 96%;
                height: 130px;
                border: 1px solid #ccc;
                margin: 10px auto;
                box-shadow: 0 0 10px black;
            }
            .check{
                width: 20px;
                height: 80px;
                margin-top:20px;
                margin-left: 5px;
                float: left;
                padding-top:30px;
            }
            .imgbody{
                width: 20%;
                height: 80px;
                margin-top:20px;
                margin-left: 5px;
                margin-right: 20px;
                float: left;
            }
            img{
                width: 100px;
                height: 100%;
            }
            
            .centerbody{
                width: 60%;
                height: 100px;
                display: flex;
                margin-top:10px;
                padding: 10px;
                flex-direction: column;
                justify-content: space-between;
            }
            .centertitle{
                width: 100%;
                font-size: 15px;
                font-weight: bold;
            }
            .selbox{
                float: left;
                font-size: 16px; 
                font-weight: bold;
                color:red;
                
            }
        
            .btn-numbox{
                margin-left:10px;
                margin-top:5px;
                float: left;

            }
            .selnum{
                margin-left:10px;
                font-size: 16px;
                font-weight: bold;
                float: left;
            }
            .btn-numbox a{
                margin-left:10px;
                font-size: 15px;
                color: blue;
                font-weight: bold;
            }
            .shopcar_com{
                width: 96%;
                height: 130px;
                border: 1px solid #ccc;
                margin: 10px auto;
                box-shadow: 0 0 10px black;
                display: flex;
                justify-content: space-between;
            }
            .left{
                width: 45%;
                height: 80px;
                margin-top:20px;
                margin-left: 20px;
                margin-right: 5px;
                float: left;
                font-size: 18px;
                font-weight: bold;
                text-align: left;
            }
            .right{
                width: 50%;
                height: 80px;
                margin-top:0px;
                margin-left: 20px;
                margin-right: 5px;
                float: left;
            }
            .button1{
                width: 30%;
                height: 25px;
                margin-top: 50px;
                font-size: 10px;
                font-weight: bold;
                background-color: rgb(87, 132, 255);
                border: 2px solid rgb(0, 0, 0); 
                border-radius: 10px;
                color:rgb(0, 0, 0);
            }
            .button2{
                width: 50%;
                height: 25px;
                margin-top: 50px;
                font-size: 10px;
                font-weight: bold;
                background-color: rgb(87, 132, 255);
                border: 2px solid rgb(0, 0, 0); 
                border-radius: 10px;
                color:rgb(0, 0, 0);
            }
            .button3{
                width: 83%;
                height: 25px;
                margin-top: 10px;
                font-size: 15px;
                font-weight: bold;
                background-color: rgb(255, 62, 62);
                border: 2px solid rgb(0, 0, 0); 
                border-radius: 10px;
                color:rgb(0, 0, 0);
            }

            
          
            
            
          
    </style>    