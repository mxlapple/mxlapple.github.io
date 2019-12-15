<template>
<div class="newsinfobody"> 
     <h3 class="newsinfotitle">{{newsinfolist.title}}</h3>
     <p class="subtitle">
         <span>发表时间：{{newsinfolist.add_time}}</span>
         <span>点击：{{newsinfolist.click}}</span>
     </p>

     <hr>

     <div class="content">
         <img class="newspic" :src=newsinfolist.img_url>
         <h1>{{newsinfolist.center}}</h1></div>
     <comment/>
</div>
</template>
<script>
import comment from '../subcom/comment.vue'
export default {
            name: 'bottoming',
            components:{
                comment
        },
        data(){
            return{
                newsinfolist:[]
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
            this.$http.get('/api/getValuenews', {
              params: {id: this.$route.params.id}
            }).then( (res) => {
              this.newsinfolist = res.data[0];
            })
          }
    }
        }

</script>
<style scoped>
.newsinfobody{
    padding: 4px;
}
.newsinfotitle{
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
h1{
    font-size: 15px;
    text-align: left;
    text-indent: 30px;
}
.newspic{
    width: 94%;
    height: 300px;
    margin: 10px;
    float: left;

}
</style>