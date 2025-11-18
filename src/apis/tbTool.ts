import request from "@/utils/request";
import type { ReplyType } from "@/types/tbTool.d.ts"
//获取贴吧数据的基础url
// const baseUrlTb = import.meta.env.MODE === 'development' ? '/tbapi' :'https://tb.anova.me'
const baseUrlTb = 'https://tb.anova.me'
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

//获取回复列表 用的是代理服务器
export const getReplyListApi = (params : {
    page : number,
    username : string,
    fname? : string
}) => {
    return request<any,Data<ReplyType[]>>({
        // url : baseUrlTb + '/getPostsNew',
        url : `https://api.allorigins.win/raw?url=${encodeURIComponent(baseUrlTb + `/getPostsNew?page=${params.page}&username=${params.username}&fname=${params.fname}`)}`,
        method:'get',
        // params,
    })
}
