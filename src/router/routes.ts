//路由
export default [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:() => import('@/views/layout.vue'),
        children:[
            // 首页
            {
                path:'/home',
                component: () => import('@/views/Home/index.vue'),
                meta:{
                    title:'首页'
                }
            },
            //搜索
            {
                path:'/search',
                component: () => import('@/views/Search/index.vue'),
                meta:{
                    title:'搜索'
                }
            },
            //工具页
            {
                path:'/toolpage',
                component: () => import('@/views/ToolPage/index.vue'),
                meta:{
                    title:'工具'
                }
            },
            //设置页
            {
                path:'/settingpage',
                component: () => import('@/views/SettingPage/index.vue'),
                meta:{
                    title:'设置'
                }
            },
        ]
    },
    // 英雄战力详情页
    {
        path:'/battle',
        component: () => import('@/views/Battle/index.vue'),
        meta:{
            title:'战力查询'
        }
    },
    // 随机数
    {
        path:'/random',
        component: () => import('@/views/ToolPage/randomNum.vue'),
        meta:{
            title:'随机数'
        }
    },
    // 荒野乱斗地图
    {
        path:'/bsmap',
        component: () => import('@/views/ToolPage/bsMap/index.vue'),
        meta:{
            title:'荒野乱斗地图工具'
        }
    },
]