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
    baseProxy? : string
}) => {
    // 关键：解构时给每个属性设默认值（包括 baseProxy）
    const {
        page = 1,          // 默认第一页
        username = '',     // 默认空用户名
        fname = '',        // 默认空 fname（避免 URL 出现 undefined）
        baseProxy = 'https://api.allorigins.win/raw?url=' // 默认代理
    } = params;
    return request<any,Data<ReplyType[]>>({
        // url : baseUrlTb + '/getPostsNew',
        method:'get',
        // params,
        url : `${baseProxy}${encodeURIComponent(baseUrlTb + `/getPostsNew?page=${page}&username=${username}&fname=${fname}`)}`,
    })
}
