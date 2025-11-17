<template>
    <!-- 分享 -->
    <van-share-sheet 
        :show="showShare" 
        title="立即分享给好友" 
        :options="options" 
        @select="onSelect" 
        @click-overlay="close"
        @cancel="close"
    >
    </van-share-sheet>

    <!-- 二维码弹窗 -->
    <van-dialog v-model:show="showCode" title="二维码" show-cancel-button>
        <div class="codeBox">
            <VueQrcode :shareUrl="shareUrl" :options="{width:160}" tag="img"></VueQrcode>
        </div>
    </van-dialog>
</template>

<script setup lang='ts'>
import { useClickCopy , useUrlScheme, useWhichClient } from '@/hooks'; 
//分享选项类型
type optionType = {
    name : string,
    icon : string,
    value : string
}
// 分享选项
const options : optionType[] = [
    { name: 'QQ', icon: 'qq', value :'qq' },
    { name: '微信', icon: 'wechat', value : 'vx' },
    { name: '复制链接', icon: 'link', value : 'link' },
    { name: '二维码', icon: 'qrcode', value : 'code' }
]

//接收数据
let { shareUrl = import.meta.env.VITE_APP_SHAREURL, showShare = false } = defineProps<{
    //二维码的数据 分享链接
    shareUrl?: string,
    //是否显示分享弹窗
    showShare: boolean
}>()

//接收事件
let emit = defineEmits<{
    // 控制弹窗显示隐藏，主要用于关闭
    (eventName: 'onShowShare', closeValue: boolean): void
}>()

//引入复制功能
let { clickCopy } = useClickCopy()

//引入唤醒功能
let { appWakeUp } = useUrlScheme()

//引入微信客户端判断
let { isWeixin } = useWhichClient()

//控制二维码弹窗显示隐藏
let showCode = ref(false)

// 选择分享按钮
const onSelect = (option: optionType) => {
    switch (option.value) {
        case "qq":{
            // 唤醒QQ
            appWakeUp('mqq://')
            //直接复制分享链接
            clickCopy(shareUrl)
            //关闭分享弹窗
            close()
            break;
        }
            
        case "vx":{
            if(!isWeixin){//如果当前不是微信客户端
                // 唤醒微信
                appWakeUp('bilibili://')
            }
            //直接复制分享链接
            clickCopy(shareUrl)
            //关闭分享弹窗
            close()
            break;
        }
        
        case "link":{
            //复制分享链接
            clickCopy(shareUrl)
            //关闭分享弹窗
            close()
            break;
        }
            
        case "code" : {
            // 控制二维码弹窗
            showCode.value = true
            //关闭分享弹窗
            close()
            break;
        }
        default:{
            break;
        }
    }
}

//关闭弹窗
const close = () => {
    emit('onShowShare', false)
}

</script>

<style lang="less" scoped>
.codeBox{
    display: flex;
    justify-content: center;
}
</style>
