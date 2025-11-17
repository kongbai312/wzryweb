<template>
  <div class="tbTool">
    <!-- 返回导航 -->
    <Narback></Narback>
    <div class="tbTool_container">
        <div class="tbTool_item" v-for="menus in menusList" @click="goRoute(menus.path)">
            <div class="item_left" :style="`background-color: ${menus.color};`">
                <van-icon class="vanIconClass" :name="menus.icon" />
            </div>
            <div class="item_right">
                <div class="title">{{menus.title}}</div>
                <div class="info">{{menus.info}}</div>
            </div>
            <div class="new-badge" :style="`background-color: ${menus.color};`" v-if="menus.isNewBadge">新版本</div>
        </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';
import { showFailToast } from 'vant';

const router = useRouter()
// 菜单列表
const menusList = [
    {
        title: '查发言',
        info : '用户的近期发言，可查部分隐藏',
        path:  '/tbTool-cfy-new',
        isNewBadge: true,
        icon : 'search',
        color : '#009e01'
    },
    {
        title: '查发言',
        info : '用户的近期发言',
        path:  '',
        isNewBadge: false,
        icon : 'search',
        color : '#ff4d4f'
    },
    {
        title: '查等级',
        info : '查指定用户的指定吧等级，结果准确度最高',
        path:  '',
        isNewBadge: true,
        icon : 'user-o',
        color : '#00d7cf'
    },
    {
        title: '查等级',
        info : '旧版查询贴吧等级方法，针对某些用户无效',
        path:  '',
        isNewBadge: false,
        icon : 'user-o',
        color : '#004dfd'
    },
]

// 菜单点击
const goRoute = (path: string) => {
    if(path === ''){
        showFailToast('当前功能未开发')
        return 
    }
    router.push(path)
}
</script>

<style lang="less" scoped>
.tbTool{
    .tbTool_container{
        height: calc(100vh - 46px - 50px);
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .tbTool_item{
            display: flex;
            align-items: center;
            position: relative;
            gap: 20px;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            padding: 16px;
            border: 1px solid #eaeaea;
            .item_left{
                padding: 10px;
                border-radius: 50%;
                .vanIconClass{
                    font-size: 40px;
                    color: #ffffff;
                }
            }
            .item_right{
                display: flex;
                flex-direction: column;
                gap: 10px;
                .title{
                    font-size: 20px;
                    font-weight: 700;
                }
                .info{
                    font-size: 14px;
                    color: #666;
                }
            }
            // 新版本标识样式
            .new-badge {
                position: absolute;
                width: 50px;
                text-align: center;
                top: 0px;
                right: 0px;
                color: #fff;
                font-size: 12px;
                font-weight: bold;
                padding: 5px 5px;
                border-radius: 0px 0px 0px 10px;
            }
        }
    }
}
</style>
