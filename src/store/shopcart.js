import { reqCartList,reqDeletCartById,reqUpdateCheckedByid} from '@/api'
const state = {
    cartlist:[]
}
const mutations = {
    GETCARTLIST(state,cartlist){
        state.cartlist = cartlist
    }
}
const actions = {
    async getCartList({ commit }) {
        let result = await reqCartList()
        //  console.log(result);
        if (result.code == 200) {
            commit("GETCARTLIST",result.data)
        }
    },
    async deletCartListBySkuId({ commit },skuId) {
        let result = await reqDeletCartById(skuId)
        //  console.log(result);
        if (result.code == 200) {
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    async updateCheckedById({commit},{skuId,isChecked}){
        let result = await reqUpdateCheckedByid(skuId,isChecked)
        if(result.code == 200 ){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    deleteAllCheckedCart({dispatch,getters}){
        
        // console.log(getters.cartlist.cartInfoList);
        getters.cartlist.cartInfoList.forEach(element => {
            let PromiseAll = []
            if (element.isChecked == 1) {
                // console.log('aaaaaaaaaa');
                let promise = dispatch('deletCartListBySkuId',element.skuId)
                PromiseAll.push(promise)
            }
            return Promise.all(PromiseAll)
        });
    },
    updateAllCartIsChecked({dispatch,getters},isChecked){
        let PromiseAll = []
        // console.log(getters.cartlist.cartInfoList);
        getters.cartlist.cartInfoList.forEach(item => {
            let promise = dispatch('updateCheckedById',{skuId:item.skuId,isChecked})
            PromiseAll.push(promise)
        })
        return Promise.all(PromiseAll)
    }

}
//简化数据，仓库内的数据获取更简单

const getters = {
    cartlist(state){
        return state.cartlist[0]||{}
    },
    // cartInfoList(state){
    //     return state.cartlist.
    // }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}