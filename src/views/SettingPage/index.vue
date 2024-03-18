<template>
  <div>设置页</div>
  <button @click="changeTheme">切换</button>
</template>

<script setup lang='ts'>
  import { useNormalStore } from '@/stores';
  //引入store
  let store = useNormalStore()

  const { changeTheme } = store

</script>

<style lang="scss" scoped>

</style>
