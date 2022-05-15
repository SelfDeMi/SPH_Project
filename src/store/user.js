import {reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLogout} from '@/api/index'
import {setToken,getToken,removeToken} from '@/utils/token'
const state = {
    code:'',
    // token:getToken(),
    token:localStorage.getItem("TOKEN"),
    userInfo:{}

}
const mutations = {
    GETCODE(state,code){
        state.code = code
    },
    USERLOGIN(state,token){
        state.token = token
    },
    GETUSERINFO(state,info){
        state.userInfo = info
    },
    CLEARUSERINFO(state){
        state.code='',
        state.userInfo={},
        removeToken()
    }

}
const actions = {
   async getCode({commit},phone){
    let result = await reqGetCode(phone)
    // console.log("asssaa");
    // console.log(result);
    if (result.code == 200 ) {
        commit('GETCODE',result.data)
        return 'ok'
    }else{
        alert('faile')
    }
   },
   //注册
   async userRegister({commit},user){
    let result = await reqUserRegister(user)
    if (result.code == 200) {
        return 'ok'
    }else{
        return Promise.reject(new Error('faile'))
    }
   },
   //登录
   async userLogin({commit},data){
    let result = await reqUserLogin(data)
    if (result.code == 200) {
        // console.log(result);
        //本地持久化存储token
        // localStorage.setItem('TOKEN',result.data.token)
        setToken(result.data.token)
        commit('USERLOGIN',result.data.token)
        return 'ok'
    }else{
        return Promise.reject(new Error('faile'))
    }
   },
   //获取用户信息
   async getUserInfo({commit}){
    let result = await reqUserInfo()
    if (result.code == 200) {
        commit("GETUSERINFO",result.data)
        return 'ok'
    }else{
        return Promise.reject(new Error('faile'))
    }
   },
   //退出登录
   async userlogout({commit}){
      let result = await reqLogout()
      if (result.code == 200) {
          commit('CLEARUSERINFO')
        return 'ok'
      }else{
        return Promise.reject(new Error('faile'))
    }
   }
}
const getters = {

}
export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}