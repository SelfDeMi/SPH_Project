//对api进行统一管理
import requests from './request'
import mockRequst from './mockAjax'
//三级连动接口   get 无参数


//对外暴露一个函数，在函数内发Ajax请求，
//外界调用这个函数发送请求
export const reqCategoryList = ()=>{
    //返回一个promise   因为axios的返回值就是promise
    return requests({
        url:'/product/getBaseCategoryList',
        methods: 'get'
    })
}
export const reqFloorList = ()=>  mockRequst.get('/floor')


export const reqgetBannerList = ()=>{
    //返回一个promise   因为axios的返回值就是promise
    return mockRequst.get('/banner')
}

export const reqGetSearchInfo = (params)=> requests({
    url:'/list',
    method: "post",
    data:params
})

//获取商品详情的接口
export const reqGoodsInfo = (skuId)=> requests({
    url:`/item/${skuId}`,
    method:'get'
})

//将产品添加到购物车
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({
    url:`/cart/addToCart/${skuId}/${skuNum}`,
    method:'post'
})

// 获取购物车列表数据接口
export const reqCartList = () => requests({
    url:'/cart/cartList',
    method:'get'
})

// 删除购物车数据接口
export const reqDeletCartById = (skuId) => requests({
    url:`/cart/deleteCart/${skuId}`,
    method:'delete'
}) 

//修改商品选中状态
export const reqUpdateCheckedByid = (skuId, isChecked) => requests({
    url:`/cart/checkCart/${skuId}/${isChecked}`,
    method:'get'
}) 

//获取验证码
export const reqGetCode = (phone) => requests({
    url:`/user/passport/sendCode/${phone}`,
    method:'get'
}) 
//注册接口
export const reqUserRegister = (data) => requests({
    url:`/user/passport/register`,
    data,
    method:'post'
}) 
//登录接口
export const reqUserLogin = (data) => requests({
    url:`/user/passport/login`,
    data,
    method:'post'
}) 
//获取信息，在请求头内带token
export const reqUserInfo = () => requests({
    url:`/user/passport/auth/getUserInfo`,
    method:'get'
}) 
//退出登录
export const reqLogout = () => requests({
    url:`/user/passport/logout`,
    method:'get'
}) 
//获取结算页面信息
export const reqAddressInfo = () => requests({
    url:`/user/userAddress/auth/findUserAddressList`,
    method:'get'
}) 
//获取商品
export const reqOrderInfo = () => requests({
    url:`/order/auth/trade`,
    method:'get'
}) 
//提交订单
export const reqSubmitOrder = (tradeNo,data) => requests({
    url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data,
    method:'post'
}) 
//获取支付信息
export const reqPayInfo = (orderId) => requests({
    url:`/payment/weixin/createNative/${orderId}`,
    method:'get'
}) 
//获取支付订单状态
export const reqPayStatus = (orderId) => requests({
    url:`/payment/weixin/queryPayStatus/${orderId}`,
    method:'get'
}) 
//获取个人中心
export const reqMyOrderList = (page,limit) => requests({
    url:`/order/auth/${page}/${limit}`,
    method:'get'
}) 