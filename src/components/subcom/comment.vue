<template>
<div class="commentbody"> 
    <h3>发表评论</h3>
    <hr>
    <Input prefix="ios-contact" placeholder="评论人" style="margin: 10px auto" v-model="name"/>
    <Input type="textarea" :rows="4" placeholder="评论内容"  style="margin: 10px auto"  v-model="msg"/>
    <button class="button1" type="primary" size="large" @click="setValue">发表评论</button>

    <div>
        <ul>
            <li v-for="(item,index) in commentlist">
            <div>
                    <div class="personnews">第 {{index+1}} 楼&nbsp;&nbsp;用户：{{ item.name }}&nbsp;&nbsp;发表时间：{{commentlist.time}}</div>
                    <div class="personidea">{{item.comment}}</div>
            </div> 
            </li> 
        </ul>   
    </div>
    <Page :total="50" size="small" show-elevator/>
   <!-- <button class="button2" type="danger" size="large">加载更多</button>-->
</div>
</template>
<script>
 export default {
            components:{},
            data(){
                      
                        return{ 
                            name:"",
                            msg:"",
                            msg2:"",
                            commentlist:[]
                        }
                     },
            created(){
                this.getValue() ;
            },
            methods:{
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
                IDmed(){
                    return this.commentlist.length + 1;
                },
               
                getValue() {
                    // axios.get('/', {params: ''})
                    this.$http.get('/api/getValuecomment', {
                    params: {type:this.$route.params.id}
                    }).then( (res) => {
                        if(res.data == 0){ this.msg2="还没人评论，赶紧抢沙发！" }else
                    {
                    this.msg2="评论内容最长不能超过120字";
                    this.commentlist = res.data;
                    this.commentlist.time=this. DateA();
                    }
                    })
                },
                setValue(){
                    if(this.msg.length === 0)
                    { this.$Message.success('评论不能为空！'); }else{
                    // axios.post('/', {})
                    this.$http.post('/api/setValue', {
                    type: this.$route.params.id, comment: this.msg, name: this.name
                    }).then( (res) => {
                    this.$Message.success('评论成功！');
                    this.getValue();
                    })}
                }
            }
        }
    
</script>
<style scoped>
.commentbody{
    margin: 50px auto;
}
h3{
    font-size: 18px;
    margin-top: 15px;
}
textarea{
    margin: 10px auto;
    font-size: 14px;
    width: 96%;
    height: 80px;
}
.button1{
    width: 96%;
    height: 40px;
    font-size: 15px;
    background-color: rgb(142, 142, 253);
    border: 1px solid rgb(82, 82, 82); 
    border-radius: 10px;
    color:white;
}
.button2{
    width: 96%;
    height: 40px;
    margin-bottom: 10px;
    font-size: 15px;
    background-color: rgb(255, 255, 255);
    border: 3px solid rgb(255, 98, 98); 
    border-radius: 10px;
    color:rgb(255, 43, 43);
}
.personnews{
    background-color: #ccc;
    line-height: 30px;
    margin-top: 5px;
    text-align: left;
    padding-left:5px;
}
.personidea{
    height: 60px;
    line-height: 35px;
    text-align: left;
    padding-left:20px;
}
li{list-style-type:none;}
</style>