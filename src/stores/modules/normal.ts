import { defineStore } from 'pinia';

export const useNormalStore = defineStore('xx-normal',() => {
    //主题控制
    let theme = ref('light')
    
    //切换主题
    const changeTheme = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light'
    }

    return{
        theme,
        changeTheme
    }
})