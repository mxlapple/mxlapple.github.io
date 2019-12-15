<template>
<div id="B">
        <button class="button2" @click="v1">难度1</button>
        <button class="button2" @click="v2">难度2</button>
        <button class="button2" @click="v3">难度3</button>
        <div class="main">
                <div class="top">
                    <h2 style="color:red">当前难度(毫秒) ：{{v}}</h2><br>
                    <Button type="primary" @click="go">开始</Button>
                    <span style="font-size: 20px;margin-left: 10px;color: red">分数:{{conunta}}</span>
                </div>
        
                <div class="jiu">
                    <h3>第 {{tim}} 题</h3>
                   <p :class="bacolor[num]">{{hanzi[han]}}</p>
                </div>
                <div class="choose_box">
                    <div v-for="(item,index) in colors" >
                        <div class="choose" :class="colors[index]" @click="answer(index)">
                        </div>
                    </div>
                </div>
            </div>
</div>
</template>
<script>
    var timer
    export default {
        name: 'bottoming',
        components:{
    },
    data(){
        return{
            colors:["black11","yellow11","green11","blue11","red11"],
            bacolor:["black12","yellow12","green12","blue12","red12"],
            hanzi:["黑","黄","绿","蓝","红"],
            conunta:0,
            num:0,
            han:0,
            tim:0,
            v:1500,
        }
    },
    methods:{
        
        change(){
            this.num = Math.trunc((Math.random()*5));
            this.han = Math.trunc((Math.random()*5));  
            this.tim = this.tim + 1;
            console.log(this.tim);
            if(this.tim === 10){
                clearInterval(timer);
                this.$Message.warning("游戏结束您的分数是："+this.conunta);
            }
        },
        go(){
            this.tim = 0;
            this.conunta = 0;
            timer = setInterval(this.change,this.v);
        },
        answer(index){
            if(this.tim < 10){
                if(index === this.num){
                this.conunta = this.conunta + 1;
                }
            }else{
                this.$Message.warning("游戏已经结束，请重新开始");
            }
        },
        v1(){ this.v = 1500 },
        v2(){ this.v = 1000 },
        v3(){ this.v = 500 }
       
    }
    }
</script>
<style scoped>
    #B{
        width: 100%;
        height: 650px;
        margin: 0px;
    }
  .main {
    background: white;
    margin-top: 30px;
  }
  .top {
    margin: 10px;
  }
  .jiu {
    background: #ffffff;
    width: 300px;
    height: 300px;
    margin: auto;
    border: 1px solid rgb(200, 200, 200);
    /* top: 100px; */
    box-shadow: 0 0 10px #ccc;
    padding: 10px;
  }
  p{
      font-size: 150px;
  }
  .black12{color:black;}
  .yellow12{color:yellow;}
  .green12{color:green;}
  .blue12{color:blue;}
  .red12{color:red;}
 .choose{
     width: 50px;
     height: 50px;
     border-radius: 15%;
     margin-left: 22px;
     margin-top:30px;
 }
 .black11{
     background-color: black;
     float: left;
 }
 .yellow11{
    background-color: yellow;
    float: left;
 }
 .green11{
    background-color: green;
    float: left;
 }
 .blue11{
    background-color: blue;
    float: left;
 }
 .red11{
    background-color: red;
    float: left;
 }
 .choose_box{
    width: 380px;
     margin: auto;
 }
 .button2{
    width: 100px;
    height: 30px;
    font-size: 15px;
    background-color: rgb(255, 0, 0);
    border: 1px solid rgb(255, 255, 255); 
    border-radius: 10px;
    color:rgb(255, 255, 255);
}
</style>