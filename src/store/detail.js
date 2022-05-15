
import {reqGoodsInfo,reqAddOrUpdateShopCart} from '@/api'
//生成游客id
import {getUUID} from '@/utils/uuid_token'
const state = {
    goodInfo : {},
    uuid_token:getUUID()
}
const mutations = {
    GETGOODINFO(state, goodinfo){
        state.goodInfo = goodinfo
    }
}
const actions = {
    async getGoodInfo({commit}, skuId){
        let result = await reqGoodsInfo(skuId)
        if (result.code == 200) {
            commit("GETGOODINFO", result.data)
        }else{
            console.log("获取失败");
        }
    },
    async addOrUpdateShopCart({commit}, {skuId, skuNum}){
        let result = await reqAddOrUpdateShopCart(skuId, skuNum)
        // console.log(result);
        // return result
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
    
}

const getters = {
    categoryView(state){
        return state.goodInfo.categoryView||{}
    },
    skuInfo(state){
        return state.goodInfo.skuInfo||{}
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList||[]
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}