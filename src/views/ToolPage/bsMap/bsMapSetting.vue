<template>
    <div class="bsMapSetting_container">
        <!-- 下拉菜单 -->
        <div class="dropdown_container">
            <van-dropdown-menu>
                <van-dropdown-item v-model="mode" :options="modeOption" />
            </van-dropdown-menu>
            <van-button class="save_button" type="success" @click="saveButtonFun">保存</van-button>
        </div>
        <!-- 地图组 -->
        <van-checkbox-group class="mapGroup" v-model="mapChecked">
            <van-swipe-cell class="mapsItem" v-for="(map, index) in currentModeMaps" :key="index">
                <van-checkbox class="mapItem" :name="map">{{ map }}</van-checkbox>
                <template #right>
                    <van-button square text="删除" type="danger" class="delete-button" />
                </template>
            </van-swipe-cell>
        </van-checkbox-group>
    </div>
</template>

<script setup lang='ts'>
import { useBsMapsStore } from '@/stores/modules/bsMaps';
import type { MapsJsonType } from '@/types/bsMaps.d.ts';
import { message } from '@/utils/vantTool';
//模式总类
let modeOption = ref([
    { text: '宝石', value: 'bs' },
    { text: '金库', value: 'jk' },
    { text: '赏金', value: 'sj' },
    { text: '淘汰', value: 'tt' },
    { text: '热区', value: 'rq' },
    { text: '足球', value: 'zq' },
])
//当前选择模式
let mode = ref<string>('bs')

//地图数据
const mapsJson: Record<string, MapsJsonType> = {
    'bs': {
        name: 'bs',
        value: ['硬石矿井', '水晶街机厅', '戈壁陷阱', '宝石要塞', '十面埋伏', '嗖嗖作响', '矿车飞驰', '乡趣游乐场', '开阔地带', '终点站', '清理森林', '更酷的硬石矿井']
        //'锋利锐角','隐秘潜行','菠萝广场','螺旋开瓶'
    },
    'jk': {
        name: 'jk',
        value: ['轰隆峡谷', '安全区域', '烫手山芋', '遥远的桥', '超大湖泊', '重制废屋']
        //'神秘领域','电子风暴'
    },
    'sj': {
        name: 'sj',
        value: ['蝮蛇草场', '神秘流星', '草丛迷踪', '大运河', '夹心蛋糕', '责任自负']
        //'格格不入','酷热地带'
    },
    'tt': {
        name: 'tt',
        value: ['金臂峡谷', '摇滚贝尔', '烈焰凤凰', '空旷荒野', '新地平线', '四重关卡', '中心字母', '两河并行', '森林深处', '袖珍岛屿', '咆哮神庙', '青翠废墟']
        //'川流不息''暮光通道','强硬路线','跳跃岛屿','黄昏搏斗','深切感激'
    },
    'rq': {
        name: 'rq',
        value: ['开门营业', '平行游戏', '灼热火圈', '甲虫决斗', '水上运动', '吵闹领居']
        //'全力冲刺','日出日落'
    },
    'zq': {
        name: 'zq',
        value: ['后院球场', '三重威胁', '精准射门', '绿荫球场', '超级海滩', '梦幻弹珠', '中心舞台', '沙滩足球', '阳光球场', '点球大战', '二次进攻', '十字球场']
        //'裤子后袋','乏力双脚','炫酷花招'
    }
}

//当前选择模式的全部地图
let currentModeMaps = computed(() => {
    return mapsJson[mode.value].value
})

//引入store
const bsMapsStore = useBsMapsStore()
//总抽取地图
let mapsChecked = computed(() => {
    return bsMapsStore.bsMaps
})

//当前模式选择地图
let mapChecked = ref<string[]>([])
//初始赋值
mapChecked.value = mapsChecked.value[mode.value].map

//监听模式发生变化
watch(() => mode.value, (newVal, oldVal) => {
    //将上一个模式选择的地图保存
    mapsChecked.value[oldVal].map = mapChecked.value
    //赋值新模式保存的地图
    mapChecked.value = mapsChecked.value[newVal].map
})

//单模式最小地图选择数量
const minModeMap = 1

//监听选择地图数量
watch(() => mapChecked.value, (newVal, oldVal) => {
    if (newVal.length < minModeMap) {
        message.info('地图最小选择数量为1')
        //并且恢复刚刚的修改
        mapChecked.value = oldVal
    }
})

//保存按钮
const saveButtonFun = () => {
    //将当前模式地图进行保存，其余的切换模式会自动保存
    mapsChecked.value[mode.value].map = mapChecked.value
    //保存提示
    message.success('保存成功')
}

</script>

<style lang="less" scoped>
.bsMapSetting_container {
    margin-top: -10px;
    width: 100vw;

    .dropdown_container {
        box-sizing: border-box;
        padding: 2px 10px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .van-dropdown-menu {
            width: 80%;
            height: 100%;

            :deep(.van-dropdown-menu__bar) {
                height: 100%;
            }
        }

        .save_button {
            padding: 5px;
            width: 15%;
            margin-left: 10px;
            height: 100%;
        }
    }

    .mapGroup {
        box-sizing: border-box;
        padding: 0 10px;

        .mapsItem {
            height: 50px;

            .mapItem {
                height: 50px;
            }

            // 删除按钮
            :deep(.van-swipe-cell__wrapper) {
                .delete-button {
                    height: 100%;
                }
            }
        }
    }
}

/* 这里写大于 768px 屏幕时应用的样式 */
@media (min-width: 600px) {
    .dropdown_container {
        :deep(.van-dropdown-menu__item) {
            .van-dropdown-menu__title {
                &::after {
                    border-width: 6px;
                    right: -12px;
                    margin-top: -10px;
                }

                .van-ellipsis {
                    height: 40px;
                    line-height: 40px;
                    font-size: 26px;
                }
            }
        }

        :deep(.save_button) {


            border-radius: 6px;
            font-size: 10px;
        }
    }

    .mapGroup {

        .mapsItem {

            .mapItem {
                font-size: 12px;

                :deep(.van-checkbox__icon--checked) {
                    height: 30px;
                    line-height: 30px;
                    width: 30px;

                    .van-icon-success {
                        height: 30px;
                        width: 30px;

                        &::before {
                            font-size: 18px;
                            line-height: 30px;
                        }
                    }
                }

                :deep(.van-checkbox__label) {

                    height: 30px;
                    line-height: 30px;
                }
            }

            // 删除按钮
            :deep(.van-swipe-cell__right) {
                right: -1px;
            }
        }
    }
}
</style>
