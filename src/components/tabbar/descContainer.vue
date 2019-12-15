<template>
    <div id="A">
            <div style="background:rgb(255, 255, 255);padding: 20px">
                <img :src=list[index].img_url width="120px" height="120px">
                    <Card :bordered="false">
                        <p slot="title">{{list[index].title}}</p>
                        <p>CPU:&nbsp;&nbsp;<Rate disabled v-model="list[index].CPUpower" show-text/></p>
                        <p>摄像:&nbsp;&nbsp;<Rate disabled v-model="list[index].Shexiangtou" show-text/></p>
                        <p>价格:&nbsp;&nbsp;<Rate disabled v-model="list[index].Price" show-text/></p>
                        <p>屏幕:&nbsp;&nbsp;<Rate disabled v-model="list[index].Pingmu" show-text/></p>
                        <p>电池:&nbsp;&nbsp;<Rate disabled v-model="list[index].Dianchipower" show-text/></p>
                        <br>
                        <p style="font-size:20px;color:brown;font-weight:bold;">该手机星级总评分:&nbsp;&nbsp;{{ zong }}</p>
                        <p style="font-size: 10px;color:#bbb;">详细参数请进购物界面了解！</p>
                    </Card>
            </div>
        <br>
        <hr>
        <br>
        <Card style="width:33.3%;height:200px;float: left;" v-for="(item,index) in list" :key="item.id">
            <div style="text-align:center"  @click="choose(index)">
                <img :src=item.img_url width="80px" height="80px">
                <h5>{{item.title}}</h5>
            </div>
        </Card>
    </div>
    </template>
    <script>
    
        export default {
            name: 'newsContainer',
            components:{
        },
        data(){
            return{
                zong:'0',
                index:'0',
                list:[{}]
            }
        },
        created(){
            this.getValue()
        },
        methods: {
            getValue() {
                // axios.get('/', {params: ''})
                this.$http.get('/api/getValuedetail', {
                params: {all:true}
                }).then( (res) => {
                this.list = res.data;
                })
            },
            choose(index){
                this.index = index;
                this.zong=this.list[index].CPUpower + this.list[index].Shexiangtou + this.list[index].Price + this.list[index].Pingmu + this.list[index].Dianchipower
            }
        }
        }
    </script>
    <style scoped>
    #A{
        width: 100%;
        height: 700px;
    }
    </style>    