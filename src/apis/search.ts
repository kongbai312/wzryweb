import request from "@/utils/request";
import type { HeroType , HeroBattleType} from '@/types/hero'
//获取英雄数据的基础url
const baseUrlHero = 'https://www.sapi.run'

//请求返回类型
type Data<T> = {
    code?: number
    message?: string
    data?: T
}

//获取英雄列表
export const getHeroListApi = () => {
    return request<any,Data<HeroType[]>>({
        url : baseUrlHero + '/hero/getHeroList.php',
        method:'get'
    })
}

//英雄战力查询
export const getHeroBattleInfoApi = ( hero : string , type : 'aqq' | 'awx' | 'iqq' | 'iwx' ) => {
    return request<any,Data<HeroBattleType[]>>({
        url : baseUrlHero + '/hero/select.php',
        method:'get',
        params:{
            hero,
            type
        }
    })
}