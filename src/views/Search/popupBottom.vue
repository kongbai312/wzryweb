<template>
    <!-- 底部弹窗 -->
    <van-popup @click-overlay="close" :show="showBottom" round position="bottom" :style="{ height: '35%' }">
        <template #default>
            <div class="popupBottom">
                <div class="title">当前查询【{{heroName}}】，请选择系统</div>
                <div class="buttomBox">
                    <van-button round :type="item.type as any" class="buttomItem" 
                    v-for="(item, index) in buttomInfo" :key="index"
                    @click="goHeroBattleInfo(item.value)"
                    >{{ item.name }}</van-button>
                </div>
            </div>
        </template>
    </van-popup>
</template>

<script setup lang='ts'>
import { useHeroStore } from '@/stores';
import { useRouter } from 'vue-router';

//按钮数组
const buttomInfo = [
    {
        name: '安卓Q区',
        value: 'aqq',
        type: 'primary'
    },
    {
        name: '苹果Q区',
        value: 'iqq',
        type: 'success'
    },
    {
        name: '安卓V区',
        value: 'awx',
        type: 'warning'
    },
    {
        name: '苹果V区',
        value: 'iwx',
        type: 'danger'
    }
]

//引入store
const heroStore = useHeroStore()

//当前英雄名字
let heroName = computed(() => {
    return heroStore.heroName
})

//控制选择大区弹窗显示隐藏
let { showBottom = false } = defineProps<{
    showBottom: boolean,
}>()

const emit = defineEmits<{
    // 控制弹窗显示隐藏，主要用于关闭
    (eventName: 'showPopupFun', closeValue: boolean): void
}>()

//关闭弹窗
const close = () => {
    emit('showPopupFun', false)
}

//引入router
const router = useRouter()

//前往英雄战力详细页面
const goHeroBattleInfo = ( region : string ) => {
    //存储当前选择大区
    heroStore.setRegionValue(region)
    //前往详情页
    router.push('/battle')
}
</script>

<style lang="less" scoped>
// 底部弹窗
.popupBottom {
    box-sizing: border-box;
    padding: 20px;
    .title{
        text-align: center;
        margin-bottom: 20px;
    }
    .buttomBox{
        display: grid;
        grid-template-columns: 150px 150px;
        grid-row-gap: 20px;
        justify-content: space-between;
    }
    .buttomItem {
        height: 60px;
    }
}
</style>
