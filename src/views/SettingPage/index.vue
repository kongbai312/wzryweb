<template>
  <div class="setting_container">
    <!-- 用户信息 -->
    <div class="userBox">
      
    </div>
    <!-- 单元格列表 -->
    <div class="cell_top cell">
      <van-cell title="意见反馈" icon="more-o" is-link></van-cell>
      <van-cell title="打赏" icon="balance-o" is-link></van-cell>
      <van-cell title="联系作者" icon="service-o" is-link></van-cell>
    </div>
    <div class="cell_bottom cell">
      <van-cell title="切换主题" :icon="theme === 'light' ? 'eye-o' : 'closed-eye'" is-link @click="changeTheme"></van-cell>
      <van-cell title="清除缓存" icon="stop-circle-o" is-link></van-cell>
      <van-cell title="关于我" icon="info-o" is-link></van-cell>
      <van-cell title="分享给朋友" icon="share-o" is-link @click="onShowShare(true)"></van-cell>
    </div>
  </div>

  <!-- 分享组件 -->
  <Showshare :showShare="showShare" @onShowShare="onShowShare"></Showshare>
</template>

<script setup lang='ts'>
import { useNormalStore } from '@/stores';
//引入store
let normalStore = useNormalStore()

//更改主题
const { changeTheme } = normalStore

//主题
let theme = computed(() => {
  return normalStore.theme
})

//是否显示分享组件
let showShare = ref(false)
//控制分享组件开启关闭
let onShowShare = ( boolean : boolean) => {
  showShare.value = boolean
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';
.setting_container {
  box-sizing: border-box;
  height: calc(100vh - 50px);
  padding: 20px 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 22%;
    background-color: var(--wzry-setting-top-bgc);
    z-index: -1;
    border-radius: 0 0 30px 30px;
  }
  // 用户信息
  .userBox {
    box-sizing: border-box;
    height: 180px;
    padding: 10px;
    border-radius: 30px;
    box-shadow: var(--wzry-box-shadow);
    background: url('https://pic.imgdb.cn/item/64c4bcd71ddac507cc35faa0.jpg') 0 0 no-repeat;
    background-size: cover;
    position: relative;
    &::after{
      border-radius: 30px;
      @include bg-after;
    }
  }
  .cell {
    padding: 5px 5px;
    overflow: hidden;
    border-radius: 30px;
    box-shadow: var(--wzry-box-shadow);
  }

}
</style>
