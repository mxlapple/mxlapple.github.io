import Vue from 'vue'
import Router from 'vue-router'
import homeContainer from '../components/tabbar/homeContainer'
import descContainer from '../components/tabbar/descContainer'
import myselfContainer from '../components/tabbar/myselfContainer'
import shopcarContainer from '../components/tabbar/shopcarContainer'
import paihangContainer from '../components/tabbar/paihangContainer'
import newslist from '../components/news/newslist'
import newsinfo from '../components/news/newsinfo'
import photolist from '../components/photos/photolist'
import shoplist from '../components/shop/shoplist'
import shopinfo from '../components/shop/shopinfo'
import phonedesc from '../components/shop/phonedesc'
import videolist from '../components/video/videolist'
import videoinfo from '../components/video/videoinfo'
import mystyle from '../components/page2/mystyle'
import thedetail from '../components/page2/thedetail'
import thegame1 from '../components/game/thegame1'
import thegame2 from '../components/game/thegame2'
import www from '../components/page2/www'
import spaceidea from '../components/space/spaceidea'
import logininfo from '../components/page2/logininfo'
import personinfo from '../components/page2/personinfo'
import idea from '../components/space/idea'
import spacecom from '../components/space/spacecom'



Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },{
            path: '/home',
            component: homeContainer
        }, {
            path: '/home/desc',
            component: descContainer
        }, {
            path: '/myself',
            component: myselfContainer
        }, {
            path: '/shopcar',
            component: shopcarContainer
        }, {
            path: '/home/paihang',
            component: paihangContainer
        }, {
            path: '/home/newslist',
            component: newslist
        },{
            path: '/home/newsinfo/:id',
            component: newsinfo
        },{
            path: '/home/photolist',
            component: photolist
        },{
            path: '/home/shoplist',
            component: shoplist
        },{
            path: '/home/shopinfo/:id',
            component: shopinfo
        },{
            path: '/home/phonedesc/:id',
            component: phonedesc
        },{
            path: '/home/videolist',
            component: videolist
        },{
            path: '/home/videoinfo/:id',
            component: videoinfo
        },{
            path: '/mystyle',
            component: mystyle
        },{
            path: '/thedetail',
            component: thedetail
        },{
            path: '/home/thegame1',
            component: thegame1
        },{
            path: '/home/thegame2',
            component: thegame2
        },{
            path: '/home/www',
            component: www
        },{
            path: '/home/spaceidea',
            component: spaceidea
        },{
            path:'/home/ideainfo',
            component:idea
        },{
            path:'/home/spaceidea/com/:id',
            component:spacecom
        },{
            path:'/home/logininfo',
            component:logininfo
        },{
            path:'/home/personinfo/:id',
            component:personinfo
        }
        
    ]
})
