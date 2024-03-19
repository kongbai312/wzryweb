<template>
    <van-nav-bar 
    :title="title" 
    :left-text="leftText" 
    :right-text="rightText" 
    left-arrow 
    @click-left="onClickLeft" 
    @click-right="onClickRight"
    />
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';

    //标题
    let { title , leftText , rightText = '返回首页'} = defineProps<{
        title? : string,
        leftText? : string,
        rightText? : string
    }>()

    //引入router
    const router = useRouter()

    // 左侧返回按钮函数
    const onClickLeft = () => {
        router.back()
    }

    //右侧返回按钮函数
    const onClickRight = () => {
        router.push('/home')
    }

</script>

<style lang="scss" scoped></style>
