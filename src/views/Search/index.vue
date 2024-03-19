<template>
  <div class="search_container">
    <!-- 轮播 -->
    <van-swipe class="search_swipe" :autoplay="6000" indicator-color="white">
      <van-swipe-item>
        <div class="textbox">
          <span class="title">王者荣耀战力查询</span>
          <span class="text">助您更好的拿下国标</span>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="textbox">
          <span class="title">如有什么问题</span>
          <span class="text">前往设置联系作者</span>
        </div>
      </van-swipe-item>
    </van-swipe>
    <!-- 搜索 -->
    <van-search @update:model-value="searchChange" v-model="searchValue" placeholder="请输入搜索英雄" />
    <!-- 标签栏 -->
    <van-tabs v-model:active="activeTab" animated @change="changeTab">
      <van-tab v-for="(item, index) in heroType" :key="index" :title="item" :name="index">
        <!-- 骨架屏 -->
        <van-skeleton :loading="loading">
          <template #template>
            <div class="heroList">
              <van-skeleton-paragraph class="heroItem" v-for="index in 20" :key="index" />
            </div>
          </template>
          <template #default>
            <div class="heroList">
              <div class="heroItem" v-for="hero in heroListTab" :key="hero.ename" @click="heroClick(hero.cname)">
                <img class="heroImg" v-lazy="hero.iconUrl">
                <span class="heroText">{{ hero.cname }}</span>
              </div>
            </div>
          </template>
        </van-skeleton>
      </van-tab>
    </van-tabs>
  </div>

  <!-- 弹出层 -->
  <!-- 圆角弹窗（底部） -->
  <PopupBottom :showBottom="showBottom" @showPopupFun="showPopupFun"></PopupBottom>
</template>

<script setup lang='ts'>
import type { HeroType } from '@/types/hero';
import { getHeroListApi , getHeroBattleInfoApi } from '@/apis/search';
import { message } from '@/utils/vantTool';
import PopupBottom from './popupBottom.vue'
import { useHeroStore } from '@/stores';
// 搜索框文本
let searchValue = ref('')

//英雄类型
const heroType = ['全部', '战士', '法师', '坦克', '刺客', '射手', '辅助']

// 标签栏
let activeTab = ref(0)

//英雄列表
let heroList = ref<HeroType[]>()

//筛选英雄列表
let heroListTab = ref<HeroType[]>()

//是否正在加载
let loading = ref(false)

//获取英雄列表数据
const getHeroList = async () => {
  // 显示正在加载
  loading.value = true
  //发送请求
  let result = await getHeroListApi()
  // 成功
  if (result.code === 200) {
    //存储
    heroList.value = result.data
    //赋值给筛选列表
    heroListTab.value = result.data
    loading.value = false
  }
  else {
    message.info('当前网络不佳')
  }
}
onMounted(() => {
  getHeroList()
})


//切换标签页
const changeTab = ( number : number ) => {
  if(number === 0){
    heroListTab.value = heroList.value
    return
  }
  //每个英雄最多两种类型，最少一个类型
  heroListTab.value = heroList.value?.filter((hero : HeroType) => {
    return hero.hero_type === number || hero.hero_type2 === number
  })
}

//搜索框内容变化触发
const searchChange = ( value : string ) => {
  //去除输入的前后空格
  let searchText = value.trim()
  if(searchText === '' && activeTab.value !== 0){
    activeTab.value = 0
  }
  //从英雄列表找到符合输入内容的英雄
  heroListTab.value = heroList.value?.filter( hero => {
    return hero.cname.includes(searchText)
  })
}

//控制选择大区弹窗显示隐藏
let showBottom = ref(false)
//引入store
const heroStore = useHeroStore()

//控制弹窗显示隐藏
const showPopupFun = ( value : boolean) => {
  showBottom.value = value
}

//点击英雄按钮
const heroClick = ( name : string ) => {
  //显示弹窗
  showPopupFun(true)
  //存储当前选择英雄
  heroStore.setHeroName(name)
}

//获取英雄战力
const getHeroBattleInfo = async() => {
  let result = await getHeroBattleInfoApi('元歌','aqq')
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';
// 边框动画
@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.search_container {

  // 轮播
  .search_swipe {
    padding: 10px;

    .van-swipe-item {
      .textbox {
        height: 150px;
        width: calc(100% - 20px);
        background-color: var(--wzry-search-swipe-bgc);
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: var(--wzry-block-shadow);

        span {
          padding: 10px 0;
        }

        .title {
          color: var(--wzry-title-color);
          font-size: 24px;
        }

        .text {
          color: var(--wzry-text-color);
        }
      }

      // 边框
      .textbox:after {
        content: '';
        position: absolute;
        height: 160px;
        width: calc(100% - 10px);
        background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
        border-radius: 15px;
        z-index: -1;
        animation: animatedgradient 3s ease alternate infinite;
        background-size: 300% 300%;
      }
    }
  }

  //骨架屏
  .van-skeleton {
    padding: 0;
    .heroList {
      width: 100vw;
      .heroItem {
        border-radius: 10px;
        margin-top: 0;
      }
    }
  }

  //标签栏
  .heroList {
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 60px);
    grid-gap: 20px 30px; //行列间距
    justify-content: space-between;

    .heroItem {
      position: relative;
      width: 60px;
      height: 60px;
      &::after{
        border-radius: 10px;
        @include bg-after;
      }

      .heroImg {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }

      .heroText {
        display: inline-block;
        position: absolute;
        text-align: center;
        font-size: 14px;
        width: 100%;
        left: 0;
        bottom: 0;
        background-color: rgb(158, 158, 158, 0.8);
        color: var(--wzry-title-color);
        border-radius: 0 0 10px 10px;
      }
    }
  }
}


</style>
