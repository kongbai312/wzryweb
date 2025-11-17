<template>
  <div class="gsapp_container">
    <img @click="inquireClick" v-show="isShowImg==='inquire'" class="gs_homeImg" src="../../../assets/image/gs_inquire.jpg" alt="">
    <img @click="homeClick" v-show="isShowImg==='home'" class="gs_homeImg" src="../../../assets/image/gs_home.jpg" alt="">
    <img @click="personalClick" v-show="isShowImg==='personal'" class="gs_homeImg" src="../../../assets/image/gs_personal.jpg" alt="">
  </div>
</template>

<script setup lang='ts'>
   //控制图片显示
   let isShowImg = ref('inquire')

    //个人中心点击
    const personalClick = () => {
        isShowImg.value = 'home'
    }

    //主页点击
    const homeClick = () => {
        isShowImg.value = 'personal'
    }

    //查询页面点击
    const inquireClick = () => {
        //跳转到主页
        isShowImg.value = 'home'
    }
</script>

<style lang="less" scoped>
.gsapp_container{
    height: 100vh;
    width: 100vw;
    .gs_homeImg{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
