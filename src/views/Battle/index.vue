<template>
  <!-- 返回导航 -->
  <Narback></Narback>
  <!-- 战力详情 -->
  <div class="battleContainer">
    <!-- 英雄详情 -->
    <div class="hero_detail">
      <van-image width="100px" height="100px" class="hero_img" fit="cover" :src="heroBattleInfo?.photo" />
      <div class="hero_info">
        <span>当前英雄：{{ heroInfo.heroName }}</span>
        <span>最低国标：{{ heroBattleInfo?.guobiao }}</span>
        <span>当前系统：{{ regionObj[heroInfo.region] }}</span>
      </div>
    </div>
    <!-- 统计时间 -->
    <div class="time">数据统计时间：&nbsp;&nbsp;{{ heroBattleInfo?.updatetime }}</div>
    <!-- 标签栏 -->
    <van-tabs v-model:active="activeTab" animated>
      <van-tab v-for="(item, index) in resultTabs" :key="index" :title="item" :name="index">
        <ResultBattle v-if="activeTab === 0" :loading="loading" :heroBattleInfo="heroBattleInfo!"></ResultBattle>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang='ts'>
import { useHeroStore } from '@/stores';
import type { HeroBattleType } from '@/types/hero';
import { getHeroBattleInfoApi } from '@/apis/search';
import { message } from '@/utils/vantTool';
import ResultBattle from './resultBattle.vue';
//当前激活标签
let activeTab = ref(0)

//标签栏
const resultTabs = ['结果预览', '省级/金标', '市级/银标', '县级/铜标']

//引入store
const heroStore = useHeroStore()

//当前选择的英雄和大区
let heroInfo = computed(() => {
  return {
    heroName: heroStore.heroName,
    region: heroStore.regionValue as "aqq" | "awx" | "iqq" | "iwx" | ""
  }
})

//大区信息对象
const regionObj: Record<string, string> = {
  aqq: '安卓-QQ区',
  awx: '安卓-微信区',
  iqq: '苹果-QQ区',
  iwx: '苹果-微信区'
}

//英雄战力信息
let heroBattleInfo = ref<HeroBattleType>()

//是否正在加载
let loading = ref(false)

//获取英雄战力信息
const getHeroBattleInfo = async () => {
  //改为正在加载状态
  loading.value = true
  //如果为空，说明没有选择英雄
  if (heroInfo.value.heroName === '' || heroInfo.value.region === '') {
    message.info('当前英雄数据丢失，请回到首页重新选择')
    return
  }
  //发送请求获取数据
  let result = await getHeroBattleInfoApi(
    heroInfo.value.heroName,
    heroInfo.value.region as "aqq" | "awx" | "iqq" | "iwx"
  )
  // 成功
  if (result.code === 200) {
    //存储
    heroBattleInfo.value = result.data
    //加载完成
    loading.value = false
  }
  else {
    message.info('当前网络不佳')
  }
}
onMounted(() => {
  getHeroBattleInfo()
})
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';

.battleContainer {
  box-sizing: border-box;
  padding: 10px;

  // 英雄详情
  .hero_detail {
    box-sizing: border-box;
    padding: 15px;
    border-radius: 10px;
    display: flex;
    background: var(--wzry-battle-bgc);
    position: relative;

    &::after {
      border-radius: 10px;
      @include bg-after;
    }

    .hero_img {
      border-radius: 10px;
      overflow: hidden;
    }

    .hero_info {
      box-sizing: border-box;
      padding: 10px 30px 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  // 统计时间
  .time {
    box-sizing: border-box;
    margin-top: 10px;
    padding: 10px 30px 10px;
    border-radius: 10px;
    background: var(--wzry-battle-bgc);
  }

}
</style>
