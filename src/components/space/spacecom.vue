<template>
<div>
        <div class="head">
            <div><Icon type="md-person" size="50"/>
            <h5> {{ msgx.name }} </h5></div>
            <Button type="success" style="height:30px;margin-top:30px" @click="flag=!flag">我要评论</Button>
        </div>
        <transition name="adc">
            <div class="inp" v-show="flag">
                    <h1>我有话要说</h1>
                    <div class="tex"><Input prefix="ios-contact" placeholder="评论人"  style="width: 300px" v-model="name"/></div>
                    <div class="tex"><Input type="textarea" :rows="4" placeholder="评论内容" style="width: 300px;" v-model="msg"/></div>
                    <div class="tex"><Button type="success" style="width: 300px;" @click="setValue">确定</Button></div>
            </div>
        </transition>
        <div class="center">
            <h1 style="margin: 20px">
                {{ msgx.title }}
            </h1>
            <div style="display: flex;justify-content: space-between;"> 
            <div><Button type="text" @click="goodyes">赞</Button><h5> {{ msgx.good }} </h5></div>
            <div><Button type="text" @click="badyes">踩</Button><h5> {{ msgx.bad }} </h5></div>
            </div>
            <hr>
            <h5 style="margin: 20px;text-align: left">
                {{ msgx.msg }}
            </h5>
        </div>
        <div style="
        width: 350px;
        margin: 10px auto;
        border: 1px solid rgb(212, 212, 212);
        box-shadow: 0 0 10px #ccc;" >
                <Card :bordered="false" v-for="(item,index) in commentlist" :key="item.id">
                    <div style="display: flex;justify-content: space-between;">
                        <div>
                            <Icon type="md-person" size="40" style="float: left;" />
                            <h5 style="font-size: 10px;float: left;margin-top:20px" > {{item.name}} </h5>
                        </div>
                        <div> {{ index+1 }} 楼  </div>
                    </div>
                    <hr>
                    <p style="text-align: left;margin-top: 20px">{{ item.comment }}</p>
                </Card>
        </div>
</div>
</template>
<script>

    export default {
        components:{
    },
    data(){
        return{
            flag:false,
            commentlist:[],
            msgx:[],
            name:"",
            msg:""

        }
    },
    created(){
        this.getValue();
        this.getValue2();
    },
    methods:{
        getValue() {
            // axios.get('/', {params: ''})
            this.$http.get('/api/getValuecomment', {
            params: {type:this.$route.params.id}
            }).then( (res) => {
                if(res.data == 0){ this.msg2="还没人评论，赶紧抢沙发！" }else
            {
            this.commentlist = res.data;
            }
            })
        },
        getValue2() {
            // axios.get('/', {params: ''})
            this.$http.get('/api/getValuespacecom', {
              params: {id:this.$route.params.id}
            }).then( (res) => {
              this.msgx = res.data[0];
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
            this.flag=!this.flag
            })}
        },
        goodyes(){
            this.$http.get('/api/getValuegood', {
              params: {id:this.$route.params.id}
            }).then( (res) => {
              this.getValue2()
            })
        },
        badyes(){
            this.$http.get('/api/getValuebad', {
              params: {id:this.$route.params.id}
            }).then( (res) => {
              this.getValue2()
            })
        }
    }
    }
    
</script>
<style scoped>
.head{
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
}
.center{
    width: 350px;
    margin: 20px auto;
    border: 1px solid rgb(212, 212, 212);
    box-shadow: 0 0 10px #ccc;
}
.inp{
    background-color:rgb(235, 235, 235);
    border-radius: 5%;
    position: fixed;
    z-index: 999;
    top:200px;
    padding-top: 50px;
    margin-left:5%;
    width: 90%;
    height: 400px;
}
.tex{
    margin: 10px;
    margin-top:25px;
}
.adc-enter-active, .adc-leave-active {
   transition: all 1s ease-out;
 }
.adc-enter, .adc-leave-to {
    opacity: 0;
}
</style>