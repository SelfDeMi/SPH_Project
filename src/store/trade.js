import {reqAddressInfo,reqOrderInfo} from '@/api/index'
const state = {
    address:[],
    orderInfo:[]
}
const mutations = {
    GETUSERADDRESS(state,data){
        state.address = data
    },
    GETORDERINFO(state,data){
        state.orderInfo = data
    }


}
const actions = {
    //获取用户地址信息
    async getUserAddress({commit}){
        let result = await reqAddressInfo()
        if(result.code == 200 ){
            // console.log(result);
            commit('GETUSERADDRESS',result.data)
        }
    },
    //获取商品清单
    async getOrderInfo({commit}){
        let result = await reqOrderInfo()
        if(result.code == 200 ){
            commit('GETORDERINFO',result.data)
        }
    }
}
const getters = {
    addressInfo(state){
        return state.address||[]
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}