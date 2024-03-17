<template>
    <van-tabbar v-model="activeNarbar">
        <van-tabbar-item name="home" icon="wap-home-o">主页</van-tabbar-item>
        <van-tabbar-item name="search" icon="search">搜索</van-tabbar-item>
        <van-tabbar-item name="tool" icon="friends-o">工具</van-tabbar-item>
        <van-tabbar-item name="setting" icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>
</template>

<script setup lang='ts'>
let activeNarbar = ref('home')
</script>

<style lang="scss" scoped></style>
