import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import {reqCategoryList} from '@/api'
import store from '@/store/index'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import mockServe from '@/mock/mockServe'
import Pagination from '@/components/pagination'
import "swiper/css/swiper.css"
import atm from '@/assets/atm.gif'
//包含api文件中所有的api请求
import * as API from '@/api'
import {MessageBox} from 'element-ui'
//图片懒加载插件
import VueLazyLoad from 'vue-lazyload'
import '@/plugins/validate';
Vue.use(VueLazyLoad,{
  //loading就是加载中那张默认的图
  loading:atm
})
//Vue.use()实际调用的就是插件内的install方法，所以每一个vue插件都有install方法
Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
//element-ui第一种写法，全局组件
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
//element-ui的第二种写法，挂载在Vue原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,
  store
}).$mount('#app')
