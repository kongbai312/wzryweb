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
            <VueQrcode :value="value" :options="{width:160}"></VueQrcode>
        </div>
    </van-dialog>
</template>

<script setup lang='ts'>
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
let { value = import.meta.env.VITE_APP_SHAREURL, showShare = false } = defineProps<{
    //二维码的数据
    value?: string,
    //是否显示分享弹窗
    showShare: boolean
}>()

//接收事件
let emit = defineEmits<{
    // 控制弹窗显示隐藏，主要用于关闭
    (eventName: 'onShowShare', closeValue: boolean): void
}>()


//控制二维码弹窗显示隐藏
let showCode = ref(false)

// 选择分享按钮
const onSelect = (option: optionType) => {
    switch (option.value) {
        case "qq":{
            break;
        }
            
        case "vx":{
            break;
        }
            
        
        case "link":{
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

<style lang="scss" scoped>
.codeBox{
    display: flex;
    justify-content: center;
}
</style>
