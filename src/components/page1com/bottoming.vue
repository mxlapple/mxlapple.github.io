<template>
    <div id="B">
            
            <dl id="position">
                    <dd class="A"><router-link to="/home"><Icon type="md-list-box" size="30"/><font>首页</font></router-link></dd>
                    <dd class="A"><router-link to="/thedetail"><Icon type="md-reorder" size="30"/><font>制作</font></router-link></dd>
                    <dd class="A"><router-link to="/mystyle"><Icon type="ios-paper" size="30"/><font>简历</font></router-link></dd>
                    <dd class="A"><router-link to="/shopcar"><Icon type="md-cart" size="30"/><div class="ball">{{ $store.getters.getAllCount }}</div><font> 购物车</font></router-link></dd>
                    <dd class="A"><router-link to="/myself"><Icon type="md-contact"  size="30"/><font>我</font></router-link></dd>
            </dl>
    </div>
    </template>
    <script>
    
        export default {
            name: 'bottoming',
            components:{
        },
        data(){
            return{}
            }
        }
    </script>
    <style scoped>
        #B{margin-top:65px;
        }
        .A{
        text-decoration:none;
        color:#666666;
        }
        .A:hover{
            text-decoration:underline;
            color:rgb(0, 0, 0);
            }
        #position{
            border-top:1px solid black;
            height:56px;
            background:#f0f0f0;
            padding-top:8px;
            position:fixed;
            bottom:0px;left:0px;
            width:100%;
            z-index:999;
            overflow:hidden;}
        #position dd{
            width:20%;
            text-align:center;
            float:left;
            overflow:hidden;}
        #position dd font{
            display:block;
            padding-top:0px;}
        #position dd A{
            color:rgb(133, 133, 133);
            text-decoration:none;
            }
        #blank{ height:64px;}
        img{width: 30%;}
        .ball{
            width: 20px;
            height: 20px;
            color:white;
            text-align: center;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            top:0%;
            left:70%;
            z-index: 99999;
        }
    </style>