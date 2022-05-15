import axios from 'axios'
//引入进度条
import "nprogress/nprogress.css"
import store from '@/store'
import nprogress from 'nprogress'



let requests = axios.create({
    baseURL:'/mock',
    timeout:5000
})
requests.interceptors.request.use((config)=>{

    //进度条开始动
    nprogress.start()
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