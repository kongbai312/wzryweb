import { createPinia } from 'pinia'
//导入pinia数据持久化插件
import persist from 'pinia-plugin-persistedstate'
//创建pinia实例
const pinia = createPinia()
pinia.use(persist)
//导出pinia
export default pinia

//统一导出
export * from './modules/user';
export * from './modules/normal';
export * from './modules/hero';