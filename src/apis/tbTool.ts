import request from "@/utils/request";
import type { ReplyType } from "@/types/tbTool.d.ts"
//获取贴吧数据的基础url
const baseUrlTb = import.meta.env.MODE === 'development' ? '/tbapi' :'https://tb.anova.me'
// const baseUrlTb = '/tbapi'

//请求返回类型
type Data<T> = {
    hasNext?: number
    msg: string
    posts?: T,
    user ?: {
        avatar : string,
        nickname : string
    }
}

//获取英雄列表
export const getReplyListApi = (params : {
    page : number,
    username : string,
    fname? : string
}) => {
    return request<any,Data<ReplyType[]>>({
        url : baseUrlTb + '/getPostsNew',
        method:'get',
        params
    })
}
