import {reqCategoryList, reqFloorList, reqgetBannerList} from '@/api/index'

const state = {
    categoryList:[],
    bannerList:[],
    floorList:[]

}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, data){
        state.bannerList = data
    },
    GETFLOORLIAT(state, data){
        state.floorList = data
    }

}
const actions = {
    //ajax请求
    async categoryList({commit}){
        let result = await reqCategoryList()
        if (result.code == 200) {
            // console.log(result);
            this.commit("home/CATEGORYLIST", result.data)
        }
    },

    async getBannerList({commit}){
        let result = await reqgetBannerList()
        // console.log(result);
        if (result.code == 200 ) {
            commit("GETBANNERLIST",result.data)
        }
    },

    async getFloorList({commit}){
        let result = await reqFloorList()
        // console.log(result);
        if(result.code == 200){
            commit("GETFLOORLIAT",result.data)
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