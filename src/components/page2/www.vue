<template>
<div id="A" @click="ALL">
    <transition name="adc">
    <h4 v-show="flag2">点击点亮屏幕</h4>
    </transition>
    <transition name="adc">
    <div class="time_box" v-show="flag">
            <h1>{{time}}</h1>
            <h2>{{date}}</h2>
            <img src="../../../static/myschoolpic/moom.jpg">
            <h3>never say never</h3>
    </div> 
    </transition>
</div>
</template>
<script>
     var timeB = setInterval(function(){
                var date = new Date();
                var maohao = ":"
                var h = date.getHours();
                h = h < 10 ? ('0' + h) : h;
                var m = date.getMinutes();
                m = m < 10 ? ('0' + m) : m;
                var s = date.getSeconds();
                s = s < 10 ? ('0' + s) : s;
                var timeA = h + maohao + m + maohao + s;
                return timeA;
        },1000)
    export default {
        name: 'www',
        components:{
    },
    data(){
        return{
            date:"",
            time:"",
            flag:false,
            flag2:true
        }
    },
    created(){
        this.date = this.DateA();
        this.time = this.TimeA();
    },
    methods: {
    DateA() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + " " + "年" + " " + month + " " + "月" + " " + strDate + " " + "日"+ " " ;
        return currentdate;
    },
    TimeA() {
                var date = new Date();
                var maohao = ":"
                var h = date.getHours();
                h = h < 10 ? ('0' + h) : h;
                var m = date.getMinutes();
                m = m < 10 ? ('0' + m) : m;
                var timeA = h + maohao + m;
                return timeA;
    },
    ALL(){
        this.flag = !this.flag,
        this.flag2 = false
    }

    }
}
</script>
<style scoped>
#A{
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    height: 800px;
    background-color: rgb(0, 0, 0);
}
.time_box{
     width: 250px;
     margin: 100px auto;
}
h1{
    color:white;
    font-size: 50px;
    font-family: Georgia, 'Times New Roman', Times, serif
}
h2{
    color:white;
    font-size: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}
h3{
    color: rgb(218, 218, 218);
    font-size: 15px;
    font-family:'Courier New', Courier, monospace
}
h4{
    width: 10px;
    color: rgb(218, 218, 218);
    font-size: 15px;
    font-family:'Courier New', Courier, monospace;
    position: absolute;
    top:300px;
}
img{
    width: 90%;
    height: 100%;
    margin-top:100px;
}
.adc-enter-active, .adc-leave-active {
   transition: all 1s ease-out;
 }
.adc-enter, .adc-leave-to {
    opacity: 0;
}
</style>
