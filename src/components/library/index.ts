//注册全局组件，全局自定义指令，挂载原型方法，注意vue3没有全局过滤器
import { Lazyload } from 'vant';
export default{
    install(app : any){
        //组测使用vant中的懒加载
        app.use(Lazyload)
    }
}