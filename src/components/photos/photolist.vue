<template>
    <div>
            
        <div id="top">
        <ul id="ul">
            <li v-for="item1 in photos" :key="item1.id" :class="{active:active == item1.id}" 
            @click=" bgclight(item1.id) ">
               <a @click="photochoose(item1.id)" style="color:black;">{{item1.title}}</a>
            </li>
        </ul> 
        </div>
        <hr>
        <div id="C">
                <div class="item2box" v-for="item2 in msg"  @mouseover="getpic(item2.img_url)">
                <img :src=item2.img_url>
                </div>
                
        </div>
        <hr>
        <div class="bigpicbox" >
            <img :src=bigpic alt="点击显示图片" >
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'photolist',
    components:{
        
    },
    data(){
        return{
            bigpic:'',
            active:'',
            pic:[],
            msg:[],
            photos:[
                {
                    id:"0",title:"全部"
                },{
                    id:"1",title:"卡通"
                },{
                    id:"2",title:"豪车"
                },{
                    id:"3",title:"别墅"
                },{
                    id:"4",title:"风景"
                },{
                    id:"5",title:"城市"
                }
            ]
        }
        },
       created(){
            this.$http.get('/api/getValuepic', {
              params: {all:true}
            }).then( (res) => {
              this.msg = res.data;
			  console.log(this.msg);
            })
            
       },
        methods: {
            DateA() {
                    var date = new Date();
                    var seperator1 = "-";
                    var year = date.getFullYear();
                    var month = date.getMonth() + 1;
                    var strDate = date.getDate();
                    if (month >= 1 && month <= 9) {
                        month = "0" + month;
                    }
                    if (strDate >= 0 && strDate <= 9) {
                        strDate = "0" + strDate;
                    }
                    var currentdate = year + seperator1 + month + seperator1 + strDate;
                    return currentdate;
                    },
          
          photochoose(id){
              if(id == 0){
                this.$http.get('/api/getValuepic', {
              params: {all:true}
            }).then( (res) => {
              this.msg = res.data;
            })
              }else{
             this.$http.get('/api/getValuepic', {
              params: {type:id}
            }).then( (res) => {
              this.msg = res.data;
              for(var i = 0;i < res.data.length;i ++){ 
                this.pic[i] = res.data[i];
               
            }}
            )
            }
          },
          getpic(url){
            this.bigpic = url;
          },
          bgclight(id){
            this.active = id;
          }
          
    }
    }
   
  
  </script>
  
  <style scoped>

#top ul{
    width: 100%;
	margin:10px auto;
	list-style-type:none;
}	
#top ul li{
    text-align:center;
	padding-left:5%;
    padding-right:5%;
	display:inline;
	font-family:Microsoft YaHei;
	font-size:10px;
	color:rgb(170, 170, 170);
}	
img{
    width: 100%;
    height: 100%;
}
.item2box{
    width: 90px;
    height: 60px;
    margin:30px auto;
    margin-left:6%;
    float: left;
    border: 1px solid #ccc;
    box-shadow: 0 0 5px black;
}

#bigpic{
    width: 90%;
    height: 90%;
    margin: 5% auto;
    box-shadow: 0 0 10 rgb(255, 255, 255);
}
.active{
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
    background-color: #ccc;
}
.bigpicbox{
    position: fixed;
    right: 10%;
    left: 10%;
    top:300px;
    width: 80%;
    background-color: #fff;
    box-shadow: 0 0 10px rgb(0, 0, 0);
}
  </style>