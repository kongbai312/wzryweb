<template>
    <div class="gsDetail_container">
        <img @click="imgClick" class="gsDetail_header" src="../../../assets/image/gsDetail_header.jpg" alt="">
        <!-- 统计区 -->
        <div class="gsDetail_content">
            <van-cell-group class="detail_total">
                <!-- 总计 -->
                <van-cell>
                    <!-- 使用 title 插槽来自定义标题 -->
                    <template #title>
                        <div class="total_title_container">
                            <span class="total_title">收入合计</span>
                            <van-icon size="16" name="question-o" class="question_icon" color="#4587EF" />
                            <span class="maohao">:</span>
                        </div>
                    </template>
                    <template #value>
                        <span class="right_value">{{ taxData.totalInCome.toFixed(2) }}元</span>
                    </template>
                </van-cell>
                <van-cell>
                    <!-- 使用 title 插槽来自定义标题 -->
                    <template #title>
                        <span class="total_title">已申报税额合计</span>
                        <span class="maohao">:</span>
                    </template>
                    <template #value>
                        <span class="right_value">{{taxData.totalDeclaredTax.toFixed(2)}}元</span>
                    </template>
                </van-cell>
            </van-cell-group>
            <!-- 滚动区 -->
            <div class="gsdetail_scroll">
                <van-cell-group class="detail_scroll">
                    <van-cell v-for="(item , index) in taxData.details" :key="index">
                        <template #title>
                            <div class="scroll_title_container">
                                <span class="scroll_title">{{item.name.slice(2)}}</span>
                                <span class="scrollRight_value">{{taxData.year}}-{{item.month}}</span>
                            </div>
                        </template>
                        <template #label>
                            <div class="label_container">
                                <span class="label_text">所得项目小类：{{item.name}}</span>
                                <div class="label_iconContainer">
                                    <span class="label_text">扣缴义务人：{{item.company}}</span>
                                    <van-icon name="arrow" size="20" color="#CCCCCC" />
                                </div>
                                <span class="label_text">收入：{{item.inCome.toFixed(2)}}元</span>
                                <span class="label_text">已申报税额：{{item.declaredTax.toFixed(2)}}元</span>
                            </div>
                        </template>
                    </van-cell>
                </van-cell-group>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';
import { salaryDetailsData , remunerationDetailsData } from './taxData';

//已申报税额合计
let totalDeclaredTax = computed(() => {
    return salaryDetailsData.reduce(( prev,item ) => {
        prev += (item.declaredTax * 100)
        return prev
    },0) / 100
})

//各个项目
let detailsData = computed(() => {
    let arr = JSON.parse(JSON.stringify(salaryDetailsData))
    if(remunerationDetailsData.length > 0){
        remunerationDetailsData.forEach( ( remunerationDetailsItem ) => {
            //找到与工资数组相同的月份
            let targetIndex = arr.findIndex( (item : any) => item.month === remunerationDetailsItem.month)
            if(targetIndex !== -1){
                // 向前插入
                arr.splice(targetIndex, 0 , remunerationDetailsItem)
            }
        })
    }
    return arr
})

//税务数据
let taxData = {
    //收入合计
    totalInCome: 81200.00,
    //已申报税额合计 166.84
    totalDeclaredTax:totalDeclaredTax.value,
    //年份
    year:2024,
    //各个项目
    details: detailsData.value
}


//引入router
let router = useRouter()
//图片点击事件
const imgClick = () => {
    router.push('/gsapp')
}
</script>

<style lang="scss" scoped>
.gsDetail_container {
    height: 100vh;
    width: 100vw;
    overflow-y: hidden;

    // 头部
    .gsDetail_header {
        width: 100%;
        height: 70px;
        object-fit: cover;
        object-position: top;
    }

    // 统计区
    .gsDetail_content {
        height: calc(100vh - 70px);

        // 总计
        .detail_total {
            height: 100px;
            box-sizing: border-box;
            padding: 10px 0;
            background-color: #F6F5FA;

            .total_title_container {
                display: flex;
                align-items: center;
                .question_icon {
                    margin-left: 5px;
                }
            }

            .right_value {
                font-size: 13px;
                color: #363636;
            }

            .maohao {
                margin-left: 5px;
            }
        }

        //滚动
        .gsdetail_scroll {
            height: calc(100vh - 70px - 100px);
            overflow-y: scroll;

            .detail_scroll {
                .scroll_title_container {
                    display: flex;
                    justify-content: space-between;

                    .scroll_title {
                        font-size: 16px;
                    }

                    .scrollRight_value {
                        margin-right: 35px;
                        font-size: 16px;
                        color: black;
                    }
                }

                .label_container {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;

                    .label_iconContainer {
                        display: flex;
                        justify-content: space-between;
                    }

                    .label_text {
                        font-size: 13px;
                        color: #979CA3;
                        margin: 3px 0;
                    }
                }

            }
        }
    }
}
</style>
