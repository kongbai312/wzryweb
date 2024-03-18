import { defineStore } from 'pinia';

export const useHeroStore = defineStore('xx-hero',() => {
    //当前点击英雄
    let heroName = ref('')
    //当前选择大区
    let regionValue = ref('')
    
    //设置当前英雄
    const setHeroName = ( name : string ) => {
        heroName.value = name
    }

    //设置当前大区
    const setRegionValue = ( region : string ) => {
        regionValue.value = region
    }

    return{
        heroName,
        regionValue,
        setHeroName,
        setRegionValue
    }
},
    { 
        persist:{
            key:'wzry-hero',
            paths:['heroName','regionValue']
        }
    }
)