<template>
    <div class="dy_container">
        <div class="title">某音符工具箱</div>
        <div class="text_content">
            <div class="content_left">使用须知：</div>
            <div class="content_right">
                <p>1.请勿用于违法犯罪行为,QQ邮箱仅用于接受查询信息。</p>
                <p>2.本软件提供查询某音注册的手机号，实名，用户发言等，以上信息均来源第三方数据库。</p>
                <p>3.因数据源更新延迟、网络传输错误，部分结果可能存在24-72小时的时间差。</p>
                <p>4.用户通过本软件获取的敏感信息，需严格遵守《网络安全法》《个人信息保护法》等法规。擅自将数据用于商业爬虫、骚扰营销等非法行为，责任由用户自行承担。</p>
            </div>
            <van-checkbox v-model="checked" shape="square">我已阅读完使用声明，并且将严格遵守。</van-checkbox>
        </div>
        <div class="inquire_box">
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="qqMail" name="qqMail" label="QQ邮箱" placeholder="QQ邮箱"
                        :rules="formRules.qqMail.rules as FieldRule[]" />
                    <van-field v-model="dyAccount" name="dyAccount" label="抖音号" placeholder="抖音号"
                        :rules="formRules.dyAccount.rules as FieldRule[]" />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                        查询
                    </van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { showLoadingToast , showFailToast , showSuccessToast} from 'vant';
import { userLoginApi , sendMailApi } from '@/apis/dytool'
import type { FieldRule } from 'vant'
//阅读协议
let checked = ref(false)

//qq邮箱
const qqMail = ref('')
//抖音号
const dyAccount = ref('')
//qq邮箱表单校验
const qqMailValidator = (val: string) => {
    const isValid = /^[1-9]\d{4,10}@qq\.com$/i.test(val)
    if (!isValid) {
        return 'QQ邮箱格式不正确'
    }
    return { valid: true }
}
//抖音表单校验规则
const dyAccountValidator = (val: string) => {
    // 规则1：禁止连续特殊符号 
    if (/([_\.]{2})/.test(val)) {
        // return { valid: false, message: '禁止连续出现特殊符号' }
        return '禁止连续出现特殊符号'
    }

    // 规则2：首尾字符限制 
    if (/^[_.]|[_\.]$/.test(val)) {
        // return { valid: false, message: '不能以特殊符号开始/结尾' }
        return '不能以特殊符号开始/结尾'
    }

    // 规则3：保留字过滤 
    const bannedList = ['admin', 'official', 'douyin', 'system'];
    if (bannedList.some(word => val.toLowerCase().includes(word))) {
        // return { valid: false, message: '包含平台禁用词汇' }
        return '包含平台禁用词汇'
    }

    return { valid: true }
}

//抖音号正则规则
const DOUYIN_REGEX = /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9_.]{4,20}$/;

//校验规则
const formRules = {
    qqMail: {
        rules: [
            { required: true, message: '请填写QQ邮箱' },
            { validator: qqMailValidator }
        ]
    },
    dyAccount: {
        rules: [
            { required: true, message: '对方抖音账号不能为空' },
            {
                pattern: DOUYIN_REGEX,
                message: '格式错误：4-20位字母/数字/下划线/点号组合',
                validateTrigger: 'onBlur'
            },
            { validator: dyAccountValidator }
        ]
    }
}

//查询
const onSubmit = async (val: Record<string, string>) => {
    if(!checked.value){
        showFailToast('请先勾选用户须知！')
        return
    }
    //调用登陆获取token
    let result = await userLoginApi()
    //获取token
    let token = result.result?.token
    //发送邮件
    let sendResult = await sendMailApi(token , val.qqMail , val.dyAccount)
    // let sendResult = { code : 200}
    //成功判断
    if(sendResult.code === 200){
        showLoadingToast('查询中,请稍后')
        let timer = setTimeout(() => {
            showSuccessToast('查询成功，请在邮箱查收')
            //清空输入框
            qqMail.value = ''
            dyAccount.value = ''
            clearTimeout(timer)
        },2000)
    }
}

</script>

<style lang="less" scoped>
.dy_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px 10px;

    .title {
        font-weight: 700;
        font-size: 22px;
        text-align: center;
    }

    .text_content {
        padding: 10px;

        .content_right {
            flex: 1;

            p {
                margin-left: 10px;
                line-height: 26px;
            }
        }

    }
}
</style>
