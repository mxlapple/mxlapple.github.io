<template>
    <div class="videoinfobody"> 
         <h3 class="videoinfotitle">{{videoinfolist.title}}</h3>
         <p class="subtitle">
             <span>发表时间：{{videoinfolist.add_time}}</span>
             <span>点击：{{videoinfolist.click}}</span>
         </p>
    
         <hr>
    
         <div class="content">
             <video class="videopic" :src=videoinfolist.video  controls :poster=videoinfolist.img_url></video>
             <h1>{{videoinfolist.jieshao}}</h1>
        </div>
         <comment/>
    </div>
    </template>
    <script>
    import comment from '../subcom/comment.vue'
    export default {
                name: 'videoinfo',
                components:{
                    comment
            },
            data(){
                return{
                    videoinfolist:[]
                }
                },
                
            created(){
                this.getValue();
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
              getValue() {
                // axios.get('/', {params: ''})
                this.$http.get('/api/getValuevideo', {
                  params: {id: this.$route.params.id}
                }).then( (res) => {
                  this.videoinfolist = res.data[0];
                })
              }
        }
            }
    
    </script>
    <style scoped>
    .videoinfobody{
        padding: 4px;
    }
    .videoinfotitle{
        font-size: 16px;
        margin: 15px auto;
        color:red;
    }
    .subtitle{
        font-size: 13px;
        color: #555555;
        display: flex;
        justify-content: space-between;
    }
    .content{
        width: 96%;
        margin: 10px auto;
        height: 600px;
        background-color: #ffffff;
        border: 1px solid #ccc;
        box-shadow: 0 0 5px black;
        font-size: 13px;
    }
    video{
        font-size: 15px;
        text-align: left;
        text-indent: 30px;
    }
    .videopic{
        width: 94%;
        height: 300px;
        margin: 10px;
        float: left;
    
    }
    h1{
        font-size: 15px;
        color:#ccc;
        
    }
    </style>