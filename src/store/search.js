
import {reqGetSearchInfo} from '@/api'
const state = {
    searchlist:{}
}
const mutations = {
    GETSEARCHLIST(state, data){
        state.searchlist = data
    }
}
const actions = {
    async getSeachList({commit}, params={}){
        //使用post 请求方式时，至少要传一个空对象否则会报错
        //params 是当用户派发第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params)
        // console.log(result);
        if(result.code == 200){
            commit('GETSEARCHLIST',result.data)
        }
    }
}
//简化数据，仓库内的数据获取更简单

const getters = {
    //getters内的函数的形参是当前模块仓库的state，非大仓库
    goodsList(state){
        return state.searchlist.goodsList || []
    },
    trademarkList(state){
        return state.searchlist.trademarkList || []
    },
    attrsList(state){
        return state.searchlist.attrsList || []
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}