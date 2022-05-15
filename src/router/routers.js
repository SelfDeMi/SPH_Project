import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import ShopCart from '@/pages/ShopCart'
import AddCartSuccess from '@/pages/AddCartSuccess'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
//引入二级路由‘
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'
export default
    [
        //重定向，即用户输入没有的路由时，展示的
        {
            path: '*',
            redirect: Home
        },

        {
            path: '/',
            component: Home,
            meta: {
                show: true
            }
        },
        {
            path: '/home',
            component: Home,
            meta: {
                show: true
            }

        },
        {
            path: '/center',
            component: Center,
            meta: {
                show: true
            },
            //子路由
            children: [
                {
                    path: 'myorder',
                    component: MyOrder
                },
                {
                    path: 'grouporder',
                    component: GroupOrder
                },
                {
                    path: '/center',
                    redirect: '/center/myorder'
                }
            ]

        },
        {
            path: '/paysuccess',
            component: PaySuccess,
            meta: {
                show: true
            },

        },
        {
            path: '/shopcart',
            component: ShopCart,
            meta: {
                show: true
            }

        },
        {
            path: '/pay',
            component: Pay,
            meta: {
                show: true
            },
            beforeEnter: (to, from, next) => {
                if (from.path == '/trade') {
                    next()
                } else {
                    //不跳转，回到from的路由
                    next(false)
                }
            }

        },
        {
            path: '/detail/:skuid',
            component: Detail,
            meta: {
                show: true
            }

        },
        {
            path: '/login',
            component: Login,
            meta: {
                show: false
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                show: true
            }
        },
        {
            path: '/addcartsuccess',
            name: 'addcartsuccess',
            component: AddCartSuccess,
            meta: {
                show: true
            }
        },
        {
            path: '/trade',
            name: 'trade',
            component: Trade,
            meta: {
                show: true
            },
            //路由独享守卫
            beforeEnter: (to, from, next) => {
                if (from.path == '/shopcart') {
                    next()
                } else {
                    //不跳转，回到from的路由
                    next(false)
                }
            }
        },
        {
            name: 'search',
            //keyword后面这个问号，代表这个params参数可传可不传
            path: '/search/:keyword?',
            //path:'/search/:keyword',这样表示一定需要不然路径会出问题
            component: Search,
            meta: {
                show: true
            },
            //表示接受props传参,这种方式只能传递params参数
            // 写法一：props:true
            //对象写法
            // props:{
            //     a:1,
            //     b:2
            // }
            //函数写法
            props: ($route) => {
                return {
                    keyword: $route.params.keyword,
                    k: $route.query.k
                }
            }

        }

    ]
