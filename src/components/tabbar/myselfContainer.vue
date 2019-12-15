<template>
    <div id="A">
            <form class="form" >
                <h1>APP登陆界面</h1><a @click="mywecat">{{way}}</a>
                <div v-show="flag">
                    <div class="shuru">
                    <p>

                        <input type="text"  name="name" placeholder="username" v-model="name" >
                    </p>
                    <p>

                        <input type="password"  name="keyword" placeholder="password" v-model="password"  > 
                    </p>
                    </div>
                    <p class="but">
                        <Button type="info" style="width: 100px" @click="login">登陆</Button>
                        <router-link :to="'/home/logininfo'"><Button type="success" style="width: 100px">注册</Button></router-link>
                    </p> 
                </div>   
                <div v-show="!flag">
                        <div class="mywecat">
                            <img src="../../../static/mywecat.png">
                        </div>
                </div>         
            </form>​

    </div>
    </template>
    <script>
        export default {
            name: 'myselfContainer',
            components:{
        },
        data(){
            return{
                name:"",
                password:"",
                way:"二维码登陆",
                flag:true,
                list:[]
            }
        },
        created(){
            if(this.$store.state.person.length === 0){ this.$router.push({path:'/myself'}); }
            else{ this.$router.push({path:'/home/personinfo/'+this.$store.state.person[0].id}); }
        },
        methods:{
            login(){
                if( this.name.length === 0 ||  this.password.length === 0)
                {
                    this.$Message.success('账号密码不能为空！');
                }else{
                    this.$http.get('/api/getValueuser', {
                    params: {name:this.name}
                    }).then( (res) => {
                    this.list = res.data[0];
                    this.ok(this.list.password)})
                }    
            },
            ok(A)
            {
                if(this.password != A)
                {
                    this.$Message.success('密码错误！');
                }else{   
                    var personinfo = {
                    id:this.list.id,
                    namex:this.list.namex,
                    msg:this.list.msg
                    };
                    this.$store.commit("addtoperson",personinfo)
                    this.$router.push({path:'/home/personinfo/'+this.list.id});
            }},
            mywecat(){
                if(this.way === "账号密码登陆"){
                this.flag = !this.flag
                this.way = "二维码登陆"}else{
                this.flag = !this.flag
                this.way = "账号密码登陆"
                }

            },
            
        }
        }
    </script>
    <style scoped>
    #A{
        width: 100%;
        height: 300px;
    }
    .form{
        margin:100px auto;
        width: 300px;
        box-shadow: 0 0 10px #ccc;
    padding: 30px;
    position: relative;
    /* Font styles */
    font-family: 'Raleway', 'Lato', Arial, sans-serif;
    color: rgb(53, 53, 53);
    text-shadow: 0 2px 1px rgba(0,0,0,0.3);
    }
    .shuru{
        margin: 50px auto;
    }
    .form input[type=text],
.form input[type=password] {
    /* Size and position */
    width: 100%;
    padding: 8px 4px 8px 10px;
    margin-top: 15px;
    border: 1px solid #4e3043; /* Fallback */
    border: 1px solid rgba(78,48,67, 0.8);
    background: rgba(0,0,0,0.15);
    border-radius: 2px;
    box-shadow: 
        0 1px 0 rgba(255,255,255,0.2), 
        inset 0 1px 1px rgba(0,0,0,0.1);
    font-family: 'Raleway', 'Lato', Arial, sans-serif;
    color: #fff;
    font-size: 13px;
}
.but{
    display: flex;
    justify-content: space-between;
}

.mywecat{
    width: 90%;
    margin: 10px auto;
}
.mywecat img{
    width: 100%;

}

    </style>    