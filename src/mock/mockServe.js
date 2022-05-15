import Mock from 'mockjs'
//在webpack中，json和图片数据是对外暴露的
import banner from './banner'
import floor from './floor'

//Mock是对象，mock是方法
Mock.mock('/mock/banner',{code:200, data:banner})
Mock.mock('/mock/floor',{code:200, data:floor})