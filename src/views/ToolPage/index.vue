<template>
  <div class="tool_container">
    <div class="toolsItem" v-for="(tools, index) in toolsList" :key="index">
      <div class="toolsItem_title">
        <van-icon :name="tools.iconName" :color="tools.iconColor"></van-icon>
        <span class="title">{{ tools.title }}</span>
      </div>
      <div class="tools">
        <div class="toolItem" v-for="(tool, index) in tools.tools" :key="index" @click="goRoute(tool.route as any)">
          <van-icon :name="tool.iconName" :color="tool.iconColor" />
          <div class="toolItem_right">
            <span class="title">{{ tool.title }}</span>
            <span class="describe">{{ tool.describe }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';
import { showFailToast } from 'vant';

// 工具箱列表
const toolsList = [
  {
    title: '热门功能',
    iconName: 'fire',
    iconColor: '#FF0000',
    tools: [
      {
        iconName: 'send-gift-o',
        iconColor: '#F6648C',
        title: '贴吧工具箱',
        describe: '贴吧用户搜索，贴吧关注',
        route:'tbTool'
      },
      {
        iconName: 'point-gift',
        iconColor: '#F6648C',
        title: '随机数',
        describe: '常用于抽签，抽奖',
        route:'random'
      },
      {
        iconName: 'medal',
        iconColor: '#F6648C',
        title: 'BS地图',
        describe: '用于荒野乱斗地图抽取',
        route:'bsmap'
      },
      {
        iconName: 'music',
        iconColor: '#F6648C',
        title: '抖音工具箱',
        describe: '搜索抖音历史发言，实名认证',
        // route:'dytool'
      },
      {
        iconName: 'gold-coin',
        iconColor: '#F6648C',
        title: '个税',
        describe: '计算个人所得税务',
        // route:'gsdetail'
        route : ''
      },
    ]
  }
]

//引入router
const router = useRouter()
//跳转到工具
const goRoute = ( route : string ) => {
  if(!route){
    showFailToast('当前功能已被禁用')
    return
  }
  router.push(route)
}
</script>

<style lang="less" scoped>
@import '../../styles/mixins.less';

.tool_container {
  box-sizing: border-box;
  padding: 0 15px 20px 15px;
  &::after {
    .bg-after();
    z-index: -1;
  }

  .toolsItem {
    margin-top: 20px;

    // 工具组标题
    .toolsItem_title {
      padding: 0 10px;
      font-size: 20px;

      .title {
        margin-left: 10px;
      }
    }

    // 工具组
    .tools {
      box-sizing: border-box;
      padding: 10px 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px 20px;

      .toolItem {
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        background-color: #E1F1F0;

        .van-icon {
          font-size: 40px;
        }

        .toolItem_right {
          margin-left: 10px;
          height: 50px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .title {
            padding: 5px 0;
            font-size: 14px;
            color: #333;
          }

          .describe {
            font-size: 10px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>
