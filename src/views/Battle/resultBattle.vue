<template>
    <!-- 战力结果 -->
    <!-- 骨架屏 -->
    <van-skeleton :loading="loading">
        <template #template>
            <ul class="battleList">
                <van-skeleton-paragraph class="battleItem" v-for="(index) in 18" :key="index"></van-skeleton-paragraph>
            </ul>
        </template>
        <template #default>
            <ul class="battleList">
                <li class="battleItem header">荣誉</li>
                <li class="battleItem header">行政区（可复制）</li>
                <li class="battleItem header">最低战力</li>
                <li class="battleItem">大国标</li>
                <li class="battleItem">第10名</li>
                <li class="battleItem">{{ heroBattleInfo?.guobiao }}</li>
                <li class="battleItem">小国标</li>
                <li class="battleItem">第100名</li>
                <li class="battleItem">暂无数据</li>
                <li class="battleItem">省标</li>
                <li class="battleItem" @click="clickCopy(heroBattleInfo?.province)">{{ heroBattleInfo?.province }}</li>
                <li class="battleItem">{{ heroBattleInfo?.provincePower }}</li>
                <li class="battleItem">市标</li>
                <li class="battleItem" @click="clickCopy(heroBattleInfo?.city)">{{ heroBattleInfo?.city }}</li>
                <li class="battleItem">{{ heroBattleInfo?.cityPower }}</li>
                <li class="battleItem">县标</li>
                <li class="battleItem" @click="clickCopy(heroBattleInfo?.area)">{{ heroBattleInfo?.area }}</li>
                <li class="battleItem">{{ heroBattleInfo?.areaPower }}</li>
            </ul>
            <!-- 提示 -->
            <div class="prompt">
                <van-notice-bar class="prompt_notice_bar" left-icon="warning-o" text="提示：以上为3个不同地区，请选择一个需要的进行定位" />
            </div>
        </template>
    </van-skeleton>
</template>

<script setup lang='ts'>
import { useClickCopy } from '@/hooks';
import type { HeroBattleType } from '@/types/hero';
//使用复制功能函数
const { clickCopy } = useClickCopy()

//英雄数据函数
const { heroBattleInfo , loading = false} = defineProps<{
    heroBattleInfo: HeroBattleType,
    loading : boolean
}>()

</script>

<style lang="less" scoped>
//骨架屏
.van-skeleton {
    padding: 0;

    .battleList {
        width: 100vw;

        .battleItem {
            border-radius: 10px;
            margin-top: 0;
            height: 42px;
        }
    }
}

// 标签栏
.battleList {
    box-sizing: border-box;
    padding: 10px;
    display: grid;
    grid-template-columns: 70px 150px 80px;
    grid-row-gap: 10px;
    justify-content: space-between;

    .battleItem {
        display: inline-block;
        box-sizing: border-box;
        padding: 12px 5px;
        background-color: var(--wzry-battle-item-bgc);
        text-align: center;
        border-radius: 5px;
    }

    .header {
        background-color: var(--wzry-battle-item-header-bgc);
    }
}

//提示
.prompt {
    box-sizing: border-box;
    padding: 0 10px;
    border-radius: 5px;
    .prompt_notice_bar {
        border-radius: 5px;
        background-color: var(--wzry-battle-item-bgc);
    }
}
</style>
