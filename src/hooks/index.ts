//工具函数集
import useClipboard from 'vue-clipboard3'
import { message } from '@/utils/vantTool'

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
