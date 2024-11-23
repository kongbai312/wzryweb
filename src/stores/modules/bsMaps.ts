import { defineStore } from 'pinia';
import type { MapsType } from '@/types/bsMaps.d.ts';
export const useBsMapsStore = defineStore('xx-bsMaps',() => {
    //总抽取地图
    let bsMaps = ref<Record<string, MapsType>>({
        'bs' :{
            text : '宝石',
            value:  'bs',
            map:['硬石矿井','十面埋伏','嗖嗖作响']
        },
        'jk' :{
            text : '金库',
            value:  'jk',
            map:['轰隆峡谷','安全区域','烫手山芋']
        },
        'sj' :{
            text : '赏金',
            value:  'sj',
            map:['蝮蛇草场','神秘流星','大运河']
        },
        'tt' :{
            text : '淘汰',
            value:  'tt',
            map:['摇滚贝尔','烈焰凤凰','空旷荒野']
        },
        'rq' :{
            text : '热区',
            value:  'rq',
            map:['开门营业','平行游戏','甲虫决斗']
        },
        'zq' :{
            text : '足球',
            value:  'zq',
            map:['后院球场','三重威胁','绿荫球场']
        }
    })

    return{
        bsMaps
    }
},
    { 
        persist:{
            key:'bs-maps',
            paths:['bsMaps']
        }
    }
)