<template>
  <!-- 返回导航 -->
  <Narback></Narback>
  <!-- 随机地图 -->
  <div class="bs_container bs_container_size">
    <BsMap v-if="activePage === 'home'"></BsMap>
    <BsMapSetting v-else></BsMapSetting>
  </div>
  <!-- 底部导航 -->
  <van-tabbar v-model="activePage">
    <van-tabbar-item icon="home-o" name="home">主页</van-tabbar-item>
    <van-tabbar-item icon="setting-o" name="setting">配置</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang='ts'>
import BsMap from './bsMap.vue';
//@ts-ignore
import BsMapSetting from './bsMapSetting.vue';
//当前页面 home主页 setting设置页面
let activePage = ref('home')
</script>

<style lang="scss" scoped>
.bs_container_size{
  height: calc(100vh - 46px - 50px);
}
.bs_container {
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
}

</style>
