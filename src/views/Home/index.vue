<template>
  <div class="homeBox">
    <!-- 通知栏 -->
    <van-notice-bar class="home_noticeBar" left-icon="volume-o" :text="announcement" />
    <!-- 天气栏 -->
    <div class="weather_container">
      <div class="weather_img">
        <svg aria-hidden="true">
          <!-- #icon-文件夹名称-图片名称 -->
          <use href="#icon-weather-cloudy" />
        </svg>
      </div>
      <div class="weather_Item">
        <span class="title">空气质量</span>
        <span class="text">{{ air?.aqi_name }}</span>
      </div>
      <div class="weather_Item">
        <span class="title">最低气温</span>
        <span class="text">{{ weather?.low }}</span>
      </div>
      <div class="weather_Item">
        <span class="title">最高气温</span>
        <span class="text">{{ weather?.high }}</span>
      </div>
    </div>
    <!-- 热搜 -->
    <div class="hot_container">
      <div class="top">
        <!-- 下拉菜单 -->
        <van-dropdown-menu>
          <van-dropdown-item 
            v-model="menuActive" 
            :options="option" 
            @open="menuOpenClose" 
            @close="menuOpenClose"
            @change="changeMenuActive"
          >
            <template #title>
              <div class="top_title">
                <div class="title">{{ option[menuActive].text }}</div>
                <van-icon :name="isOpen ? 'arrow-down' : 'arrow'" />
              </div>
            </template>
          </van-dropdown-item>
        </van-dropdown-menu>
        <!-- 右侧换一换 -->
        <div class="top_right">
          <van-icon name="replay" class="right_icon" :class="{'right_icon_rotate' : isRotate}" />
          <span @click="changeCurrentHotData">换一批</span>
        </div>
      </div>
      <!-- 热搜数据 -->
      <van-cell-group>
        <van-cell v-for="(item) in showHotData" :key="item.index" :title="item.title"
          title-class="cellItem_titleBox"  @click="goClick(item)"> 
          <template #title>
            <span 
              class="cellItem_index" 
              :class=" (item.index <= 3) ? `hot_class_${item.index}` :'' "
            >{{ item.index }}</span>
            <span class="cellItem_title">{{ item.title }}</span>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { getWeatherApi, getHotApi } from '@/apis/home';
import type { WeatherType, AirType, HotType } from '@/types/home';
//公告栏
let announcement = ref('O.o？')

//天气
let weather = ref<WeatherType>()
//空气
let air = ref<AirType>()
//获取当前天气
const getWeather = async () => {
  let result = await getWeatherApi()
  if (result.success === true) {
    weather.value = result.data
    air.value = result.air
    // announcement.value = result.tip as string
    announcement.value = `当前位于：${result.city}`
  }
}
onMounted(() => {
  getWeather()
})

//当前选中的热搜
const menuActive = ref(0);
const option = [
  { text: '微博热搜', value: 0 , name : 'wbHot' },
  { text: '抖音热点', value: 1 , name : 'douyinHot' },
  { text: '百度热搜', value: 2 , name : 'baiduRD'},
  { text: '知乎热点', value: 3 , name : 'zhihuHot'},
  { text: '今日头条', value: 4 , name : 'toutiao'},
  { text: '知乎日报', value: 5 , name : 'zhihuDay'},
  { text: 'B站日榜', value: 6 , name : 'bili'}
];
//切换当前栏目
const changeMenuActive = ( value : number) => {
  getHot(option[value].name)
}

//当前是否打开菜单
let isOpen = ref(false)
//打开菜单栏
const menuOpenClose = () => {
  isOpen.value = !isOpen.value
}
//热搜数据
let hotData = ref<HotType[]>()
//获取数据热搜
const getHot = async (type : string) => {
  let result = await getHotApi(type)
  hotData.value = result.data?.map(item => ({
    index : item.index,
    hot : item.hot,
    mobileUrl : item.mobilUrl,
    url : item.url,
    title : item.title
  })) as any
}
onMounted(() => {
  getHot(option[menuActive.value].name)
})

//当前热搜索引 0:1~10 , 1:11~20 , 2:21~30
let hotDataIndex = ref(0)
//当前展示的热搜数据
let showHotData = computed(() => {
  let startIndex = hotDataIndex.value * 10
  let endIndex = startIndex + 10
  return hotData.value?.slice(startIndex , endIndex)
})
//是否旋转
let isRotate = ref(false)
let timer : any = null
//切换当前热搜数据
const changeCurrentHotData = () => {
  isRotate.value = true
  hotDataIndex.value ++ 
  //回到第一个
  if(hotDataIndex.value === 3) hotDataIndex.value = 0
  //旋转动画
  // 清除旧的定时器
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    isRotate.value = false
    timer = null
  },300)
}

//跳转到目标页面
const goClick = ( hotItem : HotType ) => {
  window.open(hotItem.url!, '_blank')
}

</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';
@keyframes rotateAnimation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(30deg);
  }
}
.homeBox {
  box-sizing: border-box;
  padding: 10px;

  // 通知
  .home_noticeBar {
    color: #1989fa;
    background-color: #ecf9ff;
    border-radius: 5px;
    position: relative;
    &::after {
      @include bg-after;
    }
  }

  // 天气
  .weather_container {
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    padding: 10px 0;
    background-color: #4169E1;
    border-radius: 5px;
    position: relative;
    &::after {
      @include bg-after;
    }
    .weather_img {
      width: 100px;
      height: 100px;

      svg {
        height: 100%;
        width: 100%;
      }
    }

    .weather_Item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      span {
        color: #fff;
        padding: 10px 0;
      }

      .title {
        font-size: 16px;
        font-weight: 300;
      }

      .text {
        font-size: 20px;
      }
    }
  }

  //热搜
  .hot_container {
    box-sizing: border-box;
    margin-top: 10px;

    .top {
      // 小图标
      ::v-deep() {
        .van-dropdown-menu__bar {
          border-radius: 10px;
          box-shadow: none;
        }

        .van-dropdown-menu__title {
          &::after {
            display: none;
          }
        }
      }

      display: flex;
      align-items: center;
      justify-content: space-between;

      .top_title {
        display: flex;
        align-items: center;
        border-radius: 5px;
        font-weight: 700;
        font-size: 16px;

        .title {
          margin-right: 5px;
        }
      }

      //右侧换一换
      .top_right {
        color: #626675;
        display: flex;
        align-items: center;

        .right_icon {
          font-size: 18px;
          transition: transform 0.3s;
        }
        .right_icon_rotate {
          animation: rotateAnimation 0.3s ease 0s;
        }
        span {
          margin-left: 5px;
        }
      }
    }

    //单元格
    ::v-deep(){
      .van-cell-group{
        border-radius: 10px;
      }
      .van-cell{
        padding-left: 10px;
        padding-right: 10px;
        &:first-of-type{
          border-radius: 10px 10px 0 0;
        }
        &:last-of-type{
          border-radius: 0 0 10px 10px;
        }
      }
    }
    //单元格标题
    .cellItem_titleBox{
      padding-left: 0;
      .cellItem_index{
        margin-right: 10px;
        color: #9195A3;
      }
      .hot_class_1{
        color: #FE2D46;
      }
      .hot_class_2{
        color: #F60;
      }
      .hot_class_3{
        color: #FAA90E;
      }
    }
  }
}
</style>
