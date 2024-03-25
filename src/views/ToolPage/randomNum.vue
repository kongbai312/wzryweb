<template>
  <!-- 返回导航 -->
  <Narback></Narback>
  <!-- 随机数 -->
  <div class="randomNum_container">
    <div class="randomNum_title">随机数</div>
    <!-- 允许输入正整数，调起纯数字键盘 -->
    <van-field 
      v-model="maxDigit" 
      type="digit" 
      label="最大值" 
      class="numInput" 
      placeholder="请输入随机数的最大值"
      ref="inputRef"
      :disabled="isDisabled"
      @blur="blurClick"
      :maxlength="6"
    />
    <van-rolling-text 
      class="my-rolling-text" 
      ref="rollingTextRef" 
      :start-num="0" 
      :target-num="randomDigit"
      :auto-start="false"
    ></van-rolling-text>
    <div class="control_box">
      <div class="controlItem" @click="start">
        <van-icon class="controlItem_icon" name="play-circle-o" />
        <span class="controlItem_text">开始</span>
      </div>
      <div class="controlItem" @click="reset">
        <van-icon class="controlItem_icon" name="replay" />
        <span class="controlItem_text" >重置</span>
      </div>
      <div class="controlItem" @click="inputClick">
        <van-icon class="controlItem_icon" name="edit" />
        <span class="controlItem_text" >输入</span>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import type { RollingTextInstance , FieldInstance } from 'vant';
//rollingText实例
const rollingTextRef = ref<RollingTextInstance>()
//开始
const start = () => {
  rollingTextRef.value?.start();
}
//重置
const reset = () => {
  rollingTextRef.value?.reset();
  //重新生成随机数
  setRandomDigit()
}

//输入最大的数字
let maxDigit = ref(9)
//随机数
let randomDigit = ref()
//生成随机数 0~X
const setRandomDigit = () => {
  randomDigit.value = Math.round(Math.random() * maxDigit.value)
}
setRandomDigit()


//输入框实例
let inputRef = ref<FieldInstance>()
//是否禁用输入框
let isDisabled = ref(true)
//点击输入
const inputClick = () => {
  //启用
  isDisabled.value = false
  nextTick(() => {
    //获取输入框焦点
    inputRef.value?.focus()
    //重置输入 动画
    reset()
  })
}
//输入框失去焦点
const blurClick = () => {
  //禁用
  isDisabled.value = true
  //随机生成随机数
  setRandomDigit()
}
</script>

<style lang="scss" scoped>
.randomNum_container {
  height: calc(100vh - 46px);
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F7F8FA;
  .randomNum_title{
    font-size: 40px;
    padding: 20px 0;
  }
  .numInput{
    border-radius: 10px;
    margin: 30px 0 50px 0;
  }
  .control_box{
    margin-top: 40px;
    width: 70vw;
    display: flex;
    justify-content: space-around;
    .controlItem{
      display: flex;
      flex-direction: column;
      align-items: center;
      .controlItem_icon{
        font-size: 50px;
      }
      .controlItem_text{
        padding: 6px 0;
      }
    }
  }
  .my-rolling-text {
    --van-rolling-text-background: #1989fa;
    --van-rolling-text-color: white;
    --van-rolling-text-font-size: 24px;
    --van-rolling-text-gap: 6px;
    --van-rolling-text-item-border-radius: 5px;
    --van-rolling-text-item-width: 40px;
  }
}
</style>
