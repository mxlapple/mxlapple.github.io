<template>
<div id="phonedescbody">
      <div class="titlebody"><h1>{{phonedetail.title}}</h1></div>
      <hr>
      <div class="picbody"><img :src=phonedetail.img_url></div>
      <div class="excle">
          <table class="excle2">
            <tr class="color1">
                <th>机身长度</th>
                <th>机身宽度</th>
                <th>机身厚度</th>
                <th>机身重量</th>
            </tr>
            <tr>
                    <td>{{phonedetail.changdu}}</td>
                    <td>{{phonedetail.kuandu}}</td>
                    <td>{{phonedetail.houdu}}</td>
                    <td>{{phonedetail.zhongliang}}</td>
            </tr>
            <tr class="color1">
                <th>CPU品牌</th>
                <th>CPU频率</th>
                <th>CPU核心数</th>
                <th>CPU型号</th>
            </tr>
            <tr>
                    <td>{{phonedetail.CPUpinpai}}</td>
                    <td>{{phonedetail.CPUpinlv}}</td>
                    <td>{{phonedetail.CPUhexinshu}}</td>
                    <td>{{phonedetail.CPUxinghao}}</td>
            </tr>
            <tr class="color1">
                <th>RAM</th>
                <th>ROM</th>
                <th>屏幕分辨率</th>
                <th>屏幕材质</th>
            </tr>
            <tr>
                    <td>{{phonedetail.RAM}}</td>
                    <td>{{phonedetail.ROM}}</td>
                    <td>{{phonedetail.fenbianlv}}</td>
                    <td>{{phonedetail.caizhi}}</td>
            </tr>
            <tr class="color1">
                <th>前置摄像头</th>
                <th>后置摄像头</th>
                <th>光圈大小</th>
                <th>电池容量</th>
            </tr>
            <tr>
                    <td>{{phonedetail.qianzhi}}</td>
                    <td>{{phonedetail.houzhi}}</td>
                    <td>{{phonedetail.guangquan}}</td>
                    <td>{{phonedetail.dianchi}}</td>
            </tr>
          </table>
      </div>
</div>
</template>
<script>

    export default {
        name: 'phonedesc',
        components:{
    },
    data(){
        return{
            phonedetail:[]
        }
    },
    created(){
        this.getValue()
    },
    methods: {
          getValue() {
            // axios.get('/', {params: ''})
            this.$http.get('/api/getValuedetail', {
              params: {id: this.$route.params.id}
            }).then( (res) => {
              this.phonedetail = res.data[0];
            })
          }
    }
    }
</script>
<style scoped>
    #phonedescbody{
        width: 100%;
        height: 100%;
    }
.titlebody{
    width: 100%;
    height: 40px;
    font-size: 8px;
    color:red; 
    font-weight: bold;
    padding-top:10px;
}
.picbody{
    margin: 20px auto;
    width: 90%;
    height: 250px;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px #ccc;
    background-color: white;
}
img{
    padding-top:2%;
    width: 220px;
    height: 90%;
}
.excle2{
    width: 100%
}
.excle{
	margin:20px auto;
	padding-top:5px;
	width:90%;
    text-align: center;
    box-shadow: 0 0 10px black;
}

.excle td,.excle th{
    width: 25%;
	padding:10px;
	font-size:12px;
}
.color1{
	background-color:rgb(194, 194, 194);
}
</style>