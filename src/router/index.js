import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './routers'
import store from '@/store'
Vue.use(VueRouter)
let router =  new VueRouter({
    routes,
    //路由跳转，滚轮重新回到顶部
    scrollBehavior(to,from,save){
        return {x:0 , y:0}
    }
})
//路由前置守卫
router.beforeEach(async (to,from,next)=>{
    //next（）放行函数 
    //放行到指定路由 next('/home')
    // console.log(store);
    let name = store.state.user.userInfo.name
    let token = store.state.user.token
    if (token) {
        if (to.path == '/login') {
            next('/home')
        }else{
            if (name) {
                next()
            }else{
               try {
                //    console.log("aaassss");
                await store.dispatch('user/getUserInfo')
                next()
               } catch (error) {
                //    alert('token失效了')
                await store.dispatch('user/userlogout')
                next('/login')
               }
            }
        }
    }else{
        //未登录不可以去购物车，个人中心等
        let toPath = to.path
        //toPath路径包含/trade时
        if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
            alert("请登录")
            next('/login?redirect='+toPath)
        }else{
            next()
        }
        
    }
})
export default router