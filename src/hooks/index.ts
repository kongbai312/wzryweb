//工具函数集
import useClipboard from 'vue-clipboard3';
import { message } from '@/utils/vantTool';
import { showConfirmDialog } from 'vant';

//点击复制
export const useClickCopy = () => {
  const clickCopy = async (info: string) => {
    const { toClipboard } = useClipboard()
    try {
      await toClipboard(info)
      message.success('复制成功')
    } catch (e: any) {
      message.fail('您的浏览器不支持复制：', e)
    }
  }
  return{
    clickCopy
  }
}

//app唤醒
export const useUrlScheme = () => {
  const appWakeUp = ( url : string , downloadUrl : string = '' ) => {  
    //定时器
    let timer : any = null
    //设置定时器，如果delay秒后提示如果还未打开app，跳转下载页
    const goDownLoad = ( delay : number) => {
      // 开启定时器
      timer = setTimeout(async () => {
        try {
          // 弹窗提示
          await showConfirmDialog({
            title: '如果App没有打开，请点击下载前往安装',
            confirmButtonText:'下载'
          })
          //跳转至下载页
          downloadUrl === '' || (window.location.href = downloadUrl as string)
        } catch (error) {
          //取消
          message.fail('取消成功')
        }finally{
          // 销毁定时器
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }
        }
      }, delay)
    }

    //app唤醒
    window.location.href = url
    //3s后提示前往下载页
    goDownLoad(2000)
  }

  return{
    appWakeUp
  }
}

//判断当前所在是否为微信客户端
export const useWhichClient = () => {
  let userAgent = navigator.userAgent
  let isWeixin = userAgent.toLowerCase().includes('micromessenger')
  return{
    isWeixin
  }
}