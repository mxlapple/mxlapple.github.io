<template>
        <div id="A">
            
                <form class="form">
                        <h1>APP登陆界面</h1>
                        <div class="shuru">
                        <p>
    
                            <input type="text"  name="name" placeholder="username" v-model="name" >
                        </p>
                    
                        <p>
    
                            <input type="password"  name="keyword" placeholder="password" v-model="password"  > 
                        </p>
                        </div>
                        <p class="but">
                            <input type="button"value="登陆" @click="login"><br><br>
                            <input type="button" value="注册"  >
                        </p>       
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
                    password:""
                }
            },
            methods:{
                login(){
                    if( this.name.length === 0 ||  this.password.length === 0)
                    {
                        alert("账号密码不能为空！")
                    }else{
                        
                    }
                }
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
    
    .form input[type=button]{
        
        float: left;
        width: 40%;
        padding: 5px 3px;
        background: #946dff;
        border-radius: 5px;
        border: 1px solid #35304e;
        box-shadow: inset 0 1px rgba(255,255,255,0.4), 0 2px 1px rgba(0,0,0,0.1);
        color: white;
        text-shadow: 0 1px 0 rgba(0,0,0,0.3);
        font-size: 16px;
        font-weight: bold;
        font-family: 'Raleway', 'Lato', Arial, sans-serif;
        
    }
    
    
        </style>    