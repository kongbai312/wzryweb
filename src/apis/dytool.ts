import request from "@/utils/request";
//获取英雄数据的基础url
const baseUrl = 'https://api.apiopen.top'

//请求返回类型
type Data<T> = {
    code?: number
    message?: string
    result?: T
}

//登陆返回类型
type UserLoginType = {
    "account": string,
    "createdAt": {
      "time.Time": "string"
    },
    "deletedAt": {
      "time.Time": string
    },
    "id": number,
    "level": number,
    "token": string,
    "updatedAt": {
      "time.Time": string
    }
}

//用户登陆
export const userLoginApi = () => {
    return request<any,Data<UserLoginType>>({
        url : baseUrl + '/api/login',
        method:'post',
        data:{
            account:'2105273834@qq.com',
            password:'abc312781556'
        }
    })
}

//发送邮件
export const sendMailApi = (token : any , qqMail : string , dyaccount : string) => {
    return request<any,Data<string>>({
        url : baseUrl + '/api/sendMail',
        method:'post',
        headers : {
            token : token
        },
        data:{
            "content": `QQ邮箱：${qqMail} , 想查的抖音号: ${dyaccount}`,
            "mail": "2105273834@qq.com",
            "title": "工具箱信息"
        }
    })
}