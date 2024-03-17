import { createPinia } from 'pinia'

//创建pinia实例
const pinia = createPinia()

//导出pinia
export default pinia

//统一导出
export * from './modules/user'