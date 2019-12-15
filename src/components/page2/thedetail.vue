<template>
<div id="A">
    <div class="car"> 
        <h3> 开始设计： </h3>
        <p> 首先我的APP中导入的是 Vuex，iview和router，几乎所有的元素设计的CSS都是自己设计包括构图，padding，margin，
            border都是自己进行慢慢设计。其次这里组件比较多，App.vue导入头部组件，中部组件和底部组件。底部组件的
            图标来自阿里云图标库，头部底部都使用了绝对布局，固定住，在切换属性上设置动画进出切换，
            在顶部的返回键用 路由（-1）进行进出，watch路由状态如果到/home，那么就隐藏，这是一开始的组件布局。 </p>
    </div>
        <hr>
        <div class="car"> 
        <h3> 新闻设置： </h3>
        <p> 首先我链接的数据库是Mysql数据库，用的显示软件是Navicat for Mysql,在新闻上放入title，click等信息，图片
            的地址用img_url存储，之后我使用node.js引进数据库，在根目录下创建文件夹Sever 里头放入 路由文件，api文件，
            MapSql以及入口监听Index文件，在导入数据库时this.$http.get('/api/getValuepho', {params: {all:true}
            }).then( (res) => {this.phoneslist = res.data;})即可，在api的文件中放置函数getValuepho即可使用数据库。
            路由之间的传值：在路由文件中路径后接入/：id ，在头部跳转时候加入 + item.id，在跳转后直接使用id，再次连接
            数据库，即可用id对应出相应的行内容。 </p></div>
        <hr>
        <div class="car"> 
        <h3> 美图设置： </h3>
        <p> 在美图组件中的顶部设置6个ul li，在该组件的data之下放入id 0 - 5对应分别为“全部，美女，城市，汽车..”，之后
            在click函数上传递item.id给输出图片的api函数，如果判断为0，则输出全部图片，如果是1 - 5则输出对应的type文件
            （数据库中 美女type都为1，当id=1，把type=id，sql是select...type = ？）之后进行遍历输出，其中创建created
            函数在开头调用，点击后刷新页面就可以看到图片加载，在底部放置大图设置，用mouseenter函数将地址值放入data中，
            鼠标经过小图时，地址值函数生效，赋值给大图地址，即可输出大图。
        </p></div>
        <hr>
        <div class="car"> 
        <h3> 商品设置： </h3>
        <p> 商品设计首先显示商品的列表首页，参数都是来自上面的方法从数据库中调用，难处在于购物车的方法，如何加入购物车，
            如何在购物车中修改数据，计算统计等。这时候用到Vuex 把数据传入store中，前面的数据传入store，再把store的值
            放入本地的localstorage(目的是为了刷新后数据消失),刷新页面后，把localstorage的值放入store，在购物车页面设
            置getters函数接受store中的值，然后进行显示到box中，前面的打钩勾选是store中的setected值，在结果总计中把
            setected为1的商品价格乘上数量再累加即可。删除操作是删除购物车组件的data值和store中的值，相应的store值和
            localstorage一起对应，这样连锁完成购物车页面布置。
        </p></div>
        <hr>
        <div class="car"> 
        <h3> 社区设置： </h3>
        <p> 首先用卡片布置布局，其中我要发帖跳转到发帖页面，然后把数据写入数据库，和评论区的一样操作，这时候点击路由后，
            跳转到详情页面。有个不感兴趣就是sql对数据库的删除操作，跳转到内容后，评论也是数据库的读取操作，我要评论也是
            对数据库操作。其中加入一些动画效果，让页面更好看..
        </p></div>
        <hr>
        <div class="car"> 
        <h3> 视频设置： </h3>
        <p> 先把想要使用的视频放入static中，然后地址放入数据库，对应有id，title以及视频地址url等，这时候调用html5的
            Video属性进行播放，视频来自我大二时候自学Pr AE的作品，对剪辑有基础。
        </p></div>
        <hr>
        <div class="car"> 
        <h3> 评论设置： </h3>
        <p> 这里我说一下由于如果每个页面都有评论信息就会导致数据库中表太多，重复工作。这时候我让新闻，美图，商品，视频的
            评论都使用 comment组件，id对应数据库中的type，这样第一个商品出现的评论是type为1的评论，可以对商品进行添加，
            inset...（sql）函数搞定。分类评论的话就每个组件对应一个评论组件进行表选择遍历。所以我在这里只设置一个组件。
        </p></div>
        <hr>
        <div class="car"> 
        <h3> 个人设置： </h3>
        <p> 首先设置好登陆界面，然后在登陆界面选择两个按钮，一个是登陆一个注册，其中注册就是把数据写入数据库即可。登陆中
            首先吧数据写入Vuex在从Vuex写入localstorage中，这时候就有数据在里头了，在这个登陆界面created（）地方判断，
            首先是否有账户在vuex中，有的话直接跳转到个人页面，没有就直接在登录界面。在个人界面有切换用户，其实就是删除
            vuex中的数据再跳转到登录界面，简单制作了个人设置。
        </p></div>
        <hr>
        <div class="car"> 
        <h3> 游戏设置： </h3>
        <p> 跟着游戏教程进行学习制作，只试用于网页端。原理是随机生成，按键后位移累加或者跳跃，总分遍历相加。随机生成通过函数，
            先清空所有a[i][j]，对有值等于‘’空的格子进行随机赋值，随机函数*0.6在四舍五入得到data中的第一或第二的值，循环这个函数
            直到第二个格子有值后结束。总分相加是用所有格子遍历相加，遇到‘’空赋值0。重点在跳跃位移阶段，设置flag是否有空位置，
            遍历4个行和4个列，在对每个前面的坐标进行判断是否有值，有值是否相等，相等则相加，不相等则位移到他前面一格，空位移
            跳跃。四个函数分别对应键盘的“上下左右”，设置flag判断游戏是否结束，结束后输出总分。CSS样式略。
        </p></div>
        <hr>
        <div class="car"> 
        <h3> 排行与参数对比设置： </h3>
        <p> 排行是对表中的参数进行排行，在这里我用了四个组件，一个是没有计算直接从数据库导入data输出的原本的排序，其他三个是用计算
            属性对价格，品牌，销量进行排序，计算属性用array.sort函数 "var x = a[key];var y = b[key];return((x>y)?-1:((x< y)?1:0))"
            其中的key是属性，再用三元表达式进行分析对数组从新排序。参数对比是在表中有相应的参数等级，把参数等级投影到iview的星级等级上
            就可以了，总分是所有星级相加。
        </p></div>
</div>
</template>
<script>

    export default {
        name: 'heading',
        components:{
    },
    data(){
        return{
            flag:false
        }
        }
    }

    
</script>
<style scoped>
.car{
    width: 90%;
    height: 240px;
    margin: 20px auto;
    padding: 10px;
    text-align: left;
    box-shadow: 0 0 10px #ccc;

}
h3{
    font-size: 15px;
    color: red;
    font-weight: bold;
}
p{
    font-size: 12px;
    font-weight: bold;
}
</style>