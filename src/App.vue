<template>
  <van-config-provider :theme="theme as ConfigProviderTheme">
    <!-- 路由挂载点 -->
    <RouterView></RouterView>
  </van-config-provider>
  
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useNormalStore } from '@/stores';
import type { ConfigProviderTheme } from 'vant';
//引入store
const store = useNormalStore()
//light dark主题
let theme = computed(() => {
  return store.theme
})
</script>