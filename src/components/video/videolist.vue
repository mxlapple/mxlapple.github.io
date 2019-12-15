<template>
    <div>
      <ul>
          <li>
          <div class="videobody" v-for="item in videolist" :key="item.id">
            <router-link :to="'/home/videoinfo/' + item.id">
                <img class="videopic" :src=item.video_img>
                <div class="videotitle">
                        <h3>{{ item.title }}</h3>
                        <h5>{{ item.center }}</h5></div>
                        <p class="timeclick">
                          <span>发表时间：{{ item.time}}</span>
                          <span>点击：{{item.click}}次</span>
                        </p>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
    export default {
        name: 'videolist',
        components:{
    },
    data(){
        return{
            videolist:[]  
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
              params: {all:true}
            }).then( (res) => {
              this.videolist = res.data;
            })
          }
    }
    }
</script>
<style scoped>
.videobody{
    width: 96%;
    height: 100px;
    background-color: rgb(255, 255, 255);
    margin:10px auto;
    border: 1px solid rgb(185, 185, 185);
    box-shadow: 0 0 10px #ccc;
}
.videopic{
    width: 18%;
    height: 80%;
    margin: 10px;
    float: left;

}
.videotitle{
    width: 100%;
    height: 75px;
    text-align: left;
}
h3{
    color:black;
    font-size: 15px;
    font-weight: bold;
}
h5{
    color:rgb(185, 185, 185);
    font-size: 12px;
    
}
.timeclick{
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
}
</style>