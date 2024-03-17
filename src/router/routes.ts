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
            {
                path:'/home',
                component: () => import('@/views/Home/index.vue')
            }
        ]
    }
]