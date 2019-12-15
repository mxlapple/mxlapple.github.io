<template>
        <div >
            <div  v-for="item in list" :key="item.id">
                
                <router-link :to="'/home/spaceidea/com/'+item.id">
                <div class="box">
                    <div class="head">
                    <Avatar icon="ios-person" size="large" style="float: left;margin-top:8px"/>
                    <h5 style="float: left;margin-left: 10px;margin-top: 20px" >{{ item.name }}</h5>
                    </div>
                    <div class=center><h1>{{ item.title }}</h1>
                    <p style="text-align: left;font-size: 10px;margin-left: 10px;margin-top: 10px">{{ item.msg }}</p></div>
                </div>
                </router-link>
                    <div class="but"><Button type="text"  @click="del(item.id)" >不感兴趣</Button></div>
                
            </div>
        </div>
    </template>
    <script>
    
        export default {
            name: 'all',
            components:{
        },
        data(){
            return{
                list:[]
            }
        }, 
        created(){
            this.getValue();
        },
        methods:{
            getValue() {
                this.$http.get('/api/getValueapple', {
                  params: {all:true}
                }).then( (res) => {
                  this.list = res.data;
                })
            },
            del(id){
                this.$http.get('/api/delValuespace', {
                params: {id:id}
                }).then( (res) => {
                this.$Message.success('移除成功！');
                this.getValue();
                })
            } 
        }
        
    }
    
    </script>
    <style scoped>
        .box{
            width: 350px;
            height: 180px;
            margin: 0px auto;
            margin-top:28px;
            border: 1px solid #ffffff;
            box-shadow: 0 0 10px #ccc;
            background-color: rgb(243, 243, 243);
        }
        .head{
            width: 98%;
            margin-left: 1%;
            box-shadow: 0 0 10px #ccc;
            background-color: #ffffff;
        }
        .center{
            width: 98%;
            height: 115px;
            margin-left: 1%;
            background-color: #ffffff;
        }
        h1{
            font-size: 18px;
        }
        .but{
            float: right
        }
    </style>