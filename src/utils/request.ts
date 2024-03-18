import axios from 'axios';

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
        return Promise.reject(error)
    }
)

export default request