// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import Mint from 'mint-ui';
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(iView)
Vue.use(ElementUI)
Vue.use(Mint)
Vue.prototype.$http = axios;


localStorage.removeItem('person');
//每次进入网站时，直接调用这个函数 调用的时候从本地存储中读取购物车
var car = JSON.parse(localStorage.getItem('car') || '[]' )
var person = JSON.parse(localStorage.getItem('person') || '[]' )
var store = new Vuex.Store({
    state:{
            count:0,
            car:car,  //商品数据 id  count price 开关  状态保存 select
            person:person
    },
    mutations:{
      addtocar(state,shopinfo){
        //点击加入购物车 保存到购物车
        state.car.push(shopinfo)
        localStorage.setItem('car',JSON.stringify(state.car))
      },
      addtoperson(state,personinfo){
        //登陆后存储数据到vuex
        state.person.push(personinfo)
        localStorage.setItem('person',JSON.stringify(state.person))
        console.log(state.person)
      },
      removeperson(state,id){
        state.person.some((item,i) =>{
            state.person.splice(0,1)
            return true;
        })
        localStorage.setItem('person',JSON.stringify(state.person))
        console.log(state.person)
      },
      removeshopcar(state,id){
        state.car.some((item,i) =>{
          if(item == id){
            state.car.splice(i,1)
            return true;
          }
        })
        localStorage.setItem('car',JSON.stringify(state.car))
      },
      shopselect(state,info){
        state.car.some(item =>{
          if(item == info.id){
            item.selected = info.selected
          }
        })
        localStorage.setItem('car',JSON.stringify(state.car))
      }
    },
    getters:{
      //计算属性
      getAllCount(state){
        var c = 0;
        state.car.forEach(item =>{
          c+=item.count
        })
        return c
      },
      getAllprice(state){
        var o = {
          count:0,
          amount:0
        }
        state.car.forEach(item =>{
          if(item.selected){
            o.count +=item.count
            o.amount +=item.price*item.count
          }
        })
        return o
      }


    }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
