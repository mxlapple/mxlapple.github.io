<template>
<div id="homeContainerbody">
<!-- 上面有个swift的导航栏 -->
    <Carousel  loop>
        <CarouselItem>
            <div class="demo-carousel"><img src='../../../static/myschoolpic/CHD.jpg' width="300px" height="200px"></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src='../../../static/myschoolpic/444.jpg' width="300px" height="200px"></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src='../../../static/myschoolpic/222.jpg' width="300px" height="200px"></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src='../../../static/myschoolpic/333.jpg' width="300px" height="200px"></div>
        </CarouselItem>
    </Carousel>
<!-- 九宫格设计 -->
       <hr>
       <div class="AAA">
    	    <ul >
                <li><router-link to="/home/newslist"><Icon type="ios-map" size="40"/></br>新闻报道</router-link></li>
                <li><router-link to="/home/photolist"><Icon type="md-photos" size="40"/></br>美图展示</router-link></li>
                <li><router-link to="/home/paihang"><Icon type="ios-basket" size="40"/></br>商品购买</router-link></li>
                <li><router-link to="/home/desc"><Icon type="md-clipboard" size="40"/></br>参数评分</router-link></li>
                <li><router-link to="/home/spaceidea"><Icon type="md-contacts" size="40"/></br>交流社区</router-link></li>
                <li><router-link to="/home/videolist"><Icon type="md-phone-landscape" size="40"/></br>视频专区</router-link></li>
                <li><router-link to="/home/thegame1"><Icon type="ios-grid" size="40"/></br>数字游戏</router-link></li>
                <li><router-link to="/home/thegame2"><Icon type="md-color-palette" size="40"/></br>颜色游戏</router-link></li>
                <li><router-link to="/home/www"><Icon type="md-alarm" size="40"/></br>当前时间</router-link></li>
            </ul>
        </div>
</div>
</template>
<script>

    export default {
        name: 'homeContainer',
        components:{
    },
    data(){
        return{
        }
        }
    }
</script>
<style scoped>
#homeContainerbody{
    margin:0px;
	width:100%;
	background-color:#FFFFFF;
}
.AAA ul li{
	margin: 8%;
	float:left;
	list-style-type:none;
	font-size:10px;
	color:black;
}
.AAA{
    width: 288px;
    height: 350px;
    margin: 0px auto;
}
</style>    