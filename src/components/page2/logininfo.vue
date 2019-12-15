<template>
        <div>
            
            <div class="inp">
                <h1>我要做楼主</h1>
                <div class="tex"><Input prefix="ios-contact" placeholder="账号" v-model="zhanghao" style="width: 300px"/></div>
                <div class="tex"><Input prefix="ios-unlock" placeholder="密码" v-model="password" style="width: 300px"/></div>
                <div class="tex"><Input prefix="ios-unlock" placeholder="确认密码" v-model="password2" style="width: 300px"/></div>
                <div class="tex"><Input prefix="ios-contact" placeholder="名称" v-model="namex" style="width: 300px"/></div>
                <div class="tex"><Input type="textarea" :rows="4" placeholder="自我介绍" style="width: 300px;" v-model="msg"/></div>
                <div class="tex"><Button type="success" style="width: 300px;" @click="gooo">完成注册</Button></div>
            </div>
        </div>
        </template>
        <script>
        
            export default {
                name: 'heading',
                components:{
            },
            data(){
                return{
                    zhanghao:"",
                    password:"",
                    password2:"",
                    namex:"",
                    msg:""
                }
                },
            methods:{
                gooo(){
                    if(this.zhanghao.length === 0 ||
                       this.password.length === 0 ||
                       this.password2.length === 0 ||
                       this.namex.length === 0 ||
                       this.msg.length === 0
                    ){
                        this.$Message.success('注册信息不能为空！');
                    }else if( this.password != this.password2){
                        this.$Message.success('两次密码不相匹配！');
                    }else{
                        this.$http.post('/api/setValueuser', {
                        name: this.zhanghao, 
                        password: this.password, 
                        namex: this.namex,
                        msg: this.msg
                        }).then( (res) => {
                        this.$Message.success('注册成功！');})
                        this.$router.replace('/myself')
                    }
                },
                
            },
            }
        </script>
        <style scoped>
        .inp{
            padding-top: 50px;
            width: 100%;
            height: 450px;
        }
        .tex{
            margin: 10px;
            margin-top:25px;
        }
        </style>