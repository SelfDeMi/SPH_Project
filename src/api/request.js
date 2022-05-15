import axios from 'axios'
//引入进度条
import store from '@/store'
import nprogress from 'nprogress'
import "nprogress/nprogress.css"


let requests = axios.create({
    baseURL:'/api',
    timeout:5000
})
requests.interceptors.request.use((config)=>{

    //进度条开始动
    nprogress.start()
        if (store.state.detail.uuid_token) {
            //如果有uuid则在请求头内加一个字段带过去
            config.headers.userTempId = store.state.detail.uuid_token

        }
        //携带token令牌到请求头内
        if (store.state.user.token) {
            config.headers.token = store.state.user.token
        }
    //config是一个配置对象，里面有header等重要信息
    return config
    
})
requests.interceptors.response.use((res)=>{
    //进度条结束
    nprogress.done()

    //成功的回调
    return res.data
},(err)=>{
    //失败的回调
    console.log("失败了!!!err");
})

export default requests