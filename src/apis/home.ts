import request from '@/utils/request';
import type { WeatherType , AirType , HotType } from '@/types/home';
//天气相关基础Url
const baseUrlNormal = 'https://api.vvhan.com'

//请求返回类型
type DataWeather<T> = {
  success?: boolean
  city?: string
  tip?: string
  air?: AirType
  data?: T
}
type DataHot<T> = {
    success?: boolean
    name?: string,
    subtitle?: string,
    update_time?: string
    data? : T
}

//获取当前天气相关信息
export const getWeatherApi = () => {
  return request<any, DataWeather<WeatherType>>({
    url: baseUrlNormal + '/api/weather',
    method: 'get'
  })
}

//获取热搜数据
//微博热搜  wbHot
//抖音热点  douyinHot
//百度热点  baiduRD
//知乎热点  zhihuHot
//今日头条  toutiao
//知乎日报  zhihuDay
//B站日榜   bili
export const getHotApi = ( type : string ) => {
    return request<any , DataHot<HotType[]>>({
        url: baseUrlNormal + '/api/hotlist/' + type,
        method: 'get'
    })
}

