//天气类型
export type WeatherType = {
  date: string
  week: string
  type: string
  low: string
  high: string
  fengxiang: string
  fengli: string
  night: {
    type: string
    fengxiang: string
    fengli: string
  }
}

//空气类型
export type AirType = {
  aqi: number
  aqi_level: number
  aqi_name: string
  co: string
  no2: string
  o3: string
  pm10: string
  'pm2.5': string
  so2: string
}

//热搜类型
export type HotType = {
    index : number
    title : string
    hot : string
    url : string 
    mobileUrl : string
    mobilUrl? : string
}