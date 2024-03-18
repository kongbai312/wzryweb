//单个英雄信息
export type HeroType = {
    ename : number,
    cname : string,
    title : string,
    'hero_type' : number,
    'hero_type2'? : number,
    iconUrl : string
}

//单个英雄战力信息
export type HeroBattleType = {
    uid: string,
    name: string
    alias: string,
    platform: string,
    photo: string,
    area: string,
    areaPower: string,
    city: string,
    cityPower: string,
    province: string,
    provincePower: string,
    guobiao: string,
    stamp: string,
    updatetime: string
}