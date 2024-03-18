<template>
    <van-tabbar v-model="activeNarbar" active-color="#2196f3" inactive-color="#8896b8" placeholder>
        <van-tabbar-item  to="/home" name="home" icon="wap-home-o">主页</van-tabbar-item>
        <van-tabbar-item  to="/search" name="search" icon="search">搜索</van-tabbar-item>
        <van-tabbar-item  to="/toolpage" name="toolpage" icon="friends-o">工具</van-tabbar-item>
        <van-tabbar-item  to="/settingpage" name="settingpage" icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>
</template>

<script setup lang='ts'>
import { useRoute } from 'vue-router';
//引入route
const route = useRoute()

//当前激活导航
let activeNarbar = ref('home')

//监听路由修改当前激活导航
watch(() => route.path,() => {
    activeNarbar.value = route.path.slice(1)
},{
    immediate:true
})
</script>

<style lang="scss" scoped></style>
