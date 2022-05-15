import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import home from "./home"
import search from './search'
import detail from './detail'
import shopcart from './shopcart'
import user from './user'
import trade from './trade'
//vuex是一个对象，他有一个store方法，也是一个构造函数





// 对外暴露store的实例对象
export default new Vuex.Store({
    namespaced:true,
    modules:{
        home,
        search,
        detail,
        shopcart,
        user,
        trade
    }
})
