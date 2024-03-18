<template>
  <van-config-provider :theme="theme">
    <RouterView></RouterView>
    <!-- 导航 -->
    <Narbar></Narbar>
  </van-config-provider>
</template>

<script setup lang='ts'>
import { useNormalStore } from '@/stores';
//引入store
const store = useNormalStore()
//light dark主题
let theme = computed(() => {
  return store.theme
})
</script>

<style lang="scss" scoped></style>
