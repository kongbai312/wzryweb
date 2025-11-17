<template>
    <!-- 标题 -->
    <div class="title">地图抽取工具</div>
    <!-- 模式 -->
    <div class="mode">
        <span class="modetext">模式：</span>
        <van-checkbox-group ref="checkboxGroup" class="modeGroup" v-model="modeChecked" direction="horizontal">
            <van-checkbox class="modeItem" name="bs">宝石</van-checkbox>
            <van-checkbox class="modeItem" name="jk">金库</van-checkbox>
            <van-checkbox class="modeItem" name="sj">赏金</van-checkbox>
            <van-checkbox class="modeItem" name="tt">淘汰</van-checkbox>
            <van-checkbox class="modeItem" name="rq">热区</van-checkbox>
            <van-checkbox class="modeItem" name="zq">足球</van-checkbox>
        </van-checkbox-group>
        <div class="buttonGroup">
            <van-button type="primary" @click="checkAll">全选</van-button>
            <van-button type="primary" @click="toggleAll">反选</van-button>
        </div>
        <div class="randomButton_container">
            数量：<van-stepper v-model="mapCount" min="1" max="7" integer />
            <van-button round type="success" class="randomButton" @click="mapRandomClick">抽取</van-button>
        </div>
        <div class="percentage_container">
            <van-progress :percentage="percentage" stroke-width="8" />
        </div>
    </div>
    <!-- 地图展示 -->
    <div class="mapShow" v-if="mapsPractical.length !== 0">
        <span class="mapItem" v-for="(map, index) in mapsPractical"
            :key="index">{{ modeChineseFun(map.mode) }}{{ map.value }}</span>
    </div>
</template>

<script setup lang='ts'>
import { useBsMapsStore } from '@/stores/modules/bsMaps';
import { message } from '@/utils/vantTool';
import type { CheckboxGroupInstance } from 'vant';

//选择了什么模式
const modeChecked = ref([])
//复选框实例
const checkboxGroup = ref<CheckboxGroupInstance>();
//全选
const checkAll = () => {
    checkboxGroup.value!.toggleAll(true);
}
//反选
const toggleAll = () => {
    checkboxGroup.value!.toggleAll();
}

//进度条百分比
let percentage = ref(0)

//地图抽取数量
let mapCount = ref(1)

//当前是否在抽取
let isRandomMap = ref(false)

//进度条百分百动画
const percentageFun = async () => {
    // 重置进度条
    percentage.value = 0;
    
    // 延迟 500 毫秒，模拟动画效果，让进度条从0开始 这段代码后面加的，添加时间：2025/1/21 18：44
    await new Promise(resolve => setTimeout(resolve, 500));

    // 模拟进度条更新的异步循环
    while (percentage.value < 100) {
        
        // 每次随机增加 1-10 之间的进度
        const randomIncrease = Math.floor(Math.random() * 10) + 1;
        percentage.value += randomIncrease;

        // 保证进度条最大为 100
        if (percentage.value >= 100) {
            percentage.value = 100;
        }

        // 延迟 50 毫秒，模拟动画效果
        await new Promise(resolve => setTimeout(resolve, 50));
    }

    // 达到 100% 后修改抽取状态
    isRandomMap.value = false;
}

//引入store
const bsMapsStore = useBsMapsStore()
//总抽取地图
let mapsChecked = computed(() => {
    return bsMapsStore.bsMaps
})

//实际抽取的地图
let mapsPractical = ref<{ mode: string, value: string }[]>([])

//从数组内随机抽取X个元素
function getRandomByArr<T>(count: number, arr: T[]): T[] {
    //返回结果
    const result: T[] = [];
    //set函数用于防止重复抽取
    const randomIndexSet = new Set<number>();

    while (randomIndexSet.size < count) {
        //随机抽取
        const randomIndex = Math.floor(Math.random() * arr.length);
        if (!randomIndexSet.has(randomIndex)) {
            randomIndexSet.add(randomIndex);
            result.push(arr[randomIndex]);
        }
    }
    return result
}

//抽取函数
const mapRandomFun = () => {
    //总地图
    let maps: Record<string, string[]> = {}
    //根据选择的模式，提取对应的地图
    modeChecked.value.forEach(mode => {
        maps[mode] = mapsChecked.value[mode].map
    })
    //抽取地图数量
    let mapCountValue = mapCount.value
    //当抽取地图数量 小于 模式的数量
    if (mapCountValue < modeChecked.value.length) {
        //先决定抽取哪些模式
        let modeArr: string[] = getRandomByArr<string>(mapCountValue, modeChecked.value)
        //再在每个模式抽取一个地图
        mapsPractical.value = modeArr.map(mode => {
            return {
                mode: mode,
                value: getRandomByArr(1, maps[mode])[0]
            }
        })
    }
    //当抽取地图数量 等于 模式的数量
    else if (mapCountValue === modeChecked.value.length) {
        //每个模式抽取一个地图
        mapsPractical.value = modeChecked.value.map(mode => {
            return {
                mode: mode,
                value: getRandomByArr(1, maps[mode])[0]
            }
        })
    }
    //当抽取地图数量 等于 模式的数量
    else if (mapCountValue > modeChecked.value.length) {
        //已选取模式的地图总数量
        let mapsTotal = modeChecked.value.reduce((prev, mode) => {
            prev = prev + mapsChecked.value[mode].map.length
            return prev
        }, 0)
        //先判断抽取的数量大不大于配置地图的数量，如宝石模式抽5张地图，但只配置了三张
        if (mapCountValue > mapsTotal) {
            message.fail('抽取错误，原因：配置地图的数量少于抽取数量')
            return
        }
        //除抽取了的地图以外的其他地图
        let otherMapsArr: { mode: string, value: string }[] = []
        //先抽取与模式数量相同的地图
        let modeMap = modeChecked.value.map(mode => {
            //抽取出的地图
            let finishMap = getRandomByArr(1, maps[mode])[0]
            //将该模式的其他地图添加到其他地图组
            maps[mode].forEach(map => {
                if (map !== finishMap) {
                    otherMapsArr.push({
                        mode: mode,
                        value: map
                    })
                }
            })
            return {
                mode: mode,
                value: finishMap
            }
        })
        //需要抽取的地图数量
        let needOtherMapCount = mapCountValue - modeChecked.value.length
        //再抽其他地图数组中抽取剩下的地图
        let otherMap = getRandomByArr<{ mode: string, value: string }>(needOtherMapCount, otherMapsArr)
        //再放入最终抽取结果
        mapsPractical.value = [...modeMap, ...otherMap]
    }
}

//地图抽取
const mapRandomClick = async () => {
    if (isRandomMap.value) {
        message.info('当前正在抽取')
        return
    }
    if (modeChecked.value.length === 0) {
        message.info('模式不能为空')
        return
    }
    //清空上一次抽取结果
    mapsPractical.value = []
    // 修改抽取状态
    isRandomMap.value = true
    //抽取动画
    await percentageFun()
    //抽取函数
    mapRandomFun()
}

//模式转中文函数
const modeChineseFun = (mode: string) => {
    const modeMap: Record<string, string> = {
        'bs': '宝石：',
        'jk': '金库：',
        'rq': '热区：',
        'sj': '赏金：',
        'tt': '淘汰：',
        'zq': '足球：'
    };
    return modeMap[mode] || ''; // 如果模式不存在，则返回空字符串
}
</script>

<style lang="less" scoped>
.title {
    font-size: 28px;
    margin: 15px 0;
    font-weight: 700;
}

.mode {
    display: flex;
    flex-direction: column;

    .modetext {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .modeGroup {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px 20px;

        .modeItem {
            font-size: 20px;

        }
    }

    .buttonGroup {
        margin: 20px 0;
        display: flex;
        justify-content: space-around;
    }

    .randomButton_container {
        display: flex;
        justify-content: space-around;
        align-items: center;

        .randomButton {
            width: 80px;
            height: 80px;
            font-size: 16px;
        }
    }

    .percentage_container {
        padding: 20px 0;
    }
}

.mapShow {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .mapItem {
        width: 100%;
        text-align: center;
        box-sizing: border-box;
        height: 40px;
        line-height: 40px;
        border: 1px solid #999;
        border-bottom: 0px;

        &:last-child {
            border-bottom: 1px solid #999;
        }
    }
}

/* 这里写大于 768px 屏幕时应用的样式 */
@media (min-width: 600px) {

    .mode {
        .modeGroup {
            .modeItem {
                height: 40px;

                ::v-deep() {
                    .van-checkbox__icon {
                        height: 40px;

                        .van-badge__wrapper {
                            height: 40px;
                            width: 40px;
                            line-height: 40px;

                            &::before {
                                height: 40px;
                                width: 40px;
                                line-height: 40px;
                                font-size: 20px
                            }
                        }
                    }

                    .van-checkbox__label {
                        height: 30px;
                        line-height: 30px;
                    }
                }
            }
        }
        .buttonGroup{
            height: 30px;
            .van-button {
                height: 100%;
                width: 100px;
                font-size: 22px;
            }
        }
        .randomButton_container{
            font-size: 18px;
            ::v-deep(){
                .van-stepper{
                    .van-stepper__minus, .van-stepper__plus{
                        width: 40px;
                        height: 40px;
                        line-height: 40px;
                    }
                    input{
                        width: 42px;
                        height: 38px;
                        line-height: 38px;
                        font-size: 20px;
                    }
                }
                
            }
            .randomButton{
                width: 70px;
                height: 70px;
                font-size: 16px;
            }
        }

        .percentage_container{
            .van-progress{
                height: 10px;
            }
        }
    }
}
</style>
