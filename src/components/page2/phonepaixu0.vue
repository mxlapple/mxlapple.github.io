<template>
        <div>
            <!-- <el-button type="primary" @click="getfathermsg">获取数据</el-button>   -->
            <div style="background:#eee;padding: 10px" v-for="item in list" :key="item.id">
                    <router-link :to="'/home/shopinfo/'+item.id">
                    <Card :bordered="false">
                        <p slot="title">{{item.title}}</p>
                        <div class="box">
                            <div class="left"> <img :src=item.img_url> </div>
                            <div class="right">
                                <p style="font-size: 20px;color:black">品牌 ：{{item.pinpai}}</p><hr>
                                <p class="price">价格 ：{{item.now_price}}</p>
                                <p>销量 ：{{item.xiaoliang}}</p>
                            </div>
                        </div>
                    </Card>
                    </router-link>
            </div>
        </div>
    </template>
    <script>
    
        export default {
            props:['child'],
            name: 'phonepaixu',
            components:{
        },
        data(){
            return{
                list:[],
            }
        },
        created(){
                this.getValue();
            },
        methods:{
              getValue(value) {
                // axios.get('/', {params: ''})
                this.$http.get('/api/getValuepho', {
                  params: {all:true}
                }).then( (res) => {
                  if(!value){
                      this.list = res.data;
                  }else{
                      this.list = [];
                      for(var i = 0 ; i < res.data.length ; i ++){
                          res.data[i].title.indexOf(value) 
                          if(res.data[i].title.indexOf(value) == -1){
                              console.log("can not find")
                          }else{
                              this.list.unshift(  res.data[i] )
                          }
                      }
                  }
                  
                })
              }
            //   getfathermsg(){
            //     this.fatherlist = this.child;
            //     console.log(this.fatherlist + "111")
            //   }
        },
        watch: {
            child(newValue, oldValue) {
                console.log(newValue)
                this.getValue(newValue)
            }
        }
    }
    
    </script>
    <style scoped>
        .left{
            width: 40%;
            height: 130px;
            float: left;
        }
        .left img{
            width: 130px;
            height: 100%;
        }
        .right{
            margin-top:0px;
            width: 55%;
            height: 130px;
            display:inline-block;
            font-size: 15px;
            color:red;
            text-align: left;
        }
        .price{
            margin-top:30px;
        }
    </style>