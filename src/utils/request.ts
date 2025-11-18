import axios from 'axios';
import { showSuccessToast, showFailToast } from 'vant';

//初始化
const request = axios.create({
    timeout: 10000
})

//请求拦截器
request.interceptors.request.use(
    config => {
        return config
    },
    error => {

    }
)

// 响应拦截器
request.interceptors.response.use(
    response => {
        //取出data后的数据
        return response.data
    },
    error => {
        // 统一处理错误 
        if (error.response?.status  === 500) {
            showFailToast('服务器不稳定，请重试');
            throw new Error('服务器500');
        }
        return Promise.reject(error)
    }
)

export default request