<template>
  <div class="cfy_new">
    <!-- 返回导航 -->
    <Narback></Narback>
    <div class="cfy_new_container">
        <div class="header">
            <van-field label-width="50" center v-model="params.username" label="用户名" placeholder="请输入用户名（注：非昵称）">
                <template #button>
                    <van-button style="width: 70px;" size="small" plain  type="primary" @click="handleSearch">查询</van-button>
                </template>
            </van-field>
        </div>
        <div class="content">
            <div class="user_container">
                <van-image round class="user_img" :src="userData.user?.avatar" alt=""></van-image>
                <div class="user_name">{{ userData.user?.nickname || '用户名' }}</div>
            </div>
            
            <div class="chatList">
                <div v-if="loading" class="empty-or-loading-container">
                    <van-loading size="24px" vertical>加载中...</van-loading>
                </div>
                <!-- 无数据状态 -->
                <div v-else-if="!loading && userData.posts?.length === 0" class="empty-or-loading-container">
                    <van-empty description="暂无数据" />
                </div>
                <van-list v-else>
                    <van-cell v-for="(item , index) in userData.posts" :key="index" :title="formatTitle(item.title)">
                        <template #title>
                          <div class="content_title" @click="goTbDetail(item.href , item.title)">
                            <span class="titleText">标题：</span>
                            {{ item.title }}
                          </div>
                        </template>
                        <template #label>
                          <div class="content_reply">
                            {{ item.content }}
                          </div>
                        </template>
                    </van-cell>
                </van-list>
            </div>
        </div>
    </div>
    <div class="footer">
        <van-button :disabled="params.page == 1" class="footerItem" plain type="primary" @click="handlePrevPage">上一页</van-button>
        <van-button class="footerItem" plain type="primary" @click="handleNextPage">下一页</van-button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { getReplyListApi } from '@/apis/tbTool'
import { useAsyncState } from '@vueuse/core';
import { showSuccessToast, showFailToast, showConfirmDialog, showToast } from 'vant';
import { useRestRef } from 'mmjs-core/hooks/vue.ref';

// 多个免费代理服务器
const corsProxies = [
  'https://corsproxy.io/?',  // 电脑端可以用 移动端好像不行
  'https://api.codetabs.com/v1/proxy?quest=', // 不能用
  'https://thingproxy.freeboard.io/fetch/',     // 不能用
  'https://api.allorigins.win/raw?url=', 
  'https://proxy.cors.sh/?'
]

let currentCorsProxy = corsProxies[3]

// 请求参数 resetState 用来重置参数
const { state: params, resetState } = useRestRef({
    page: 1,
    username: '',
    fname : undefined,
    // baseProxy : corsProxies[2]
});

// 搜索
const { state: useDataOld, execute } = useAsyncState(
    () => {
        const { page, username, fname } = params.value;
        return getReplyListApi({
            page,
            username,
            fname,
            baseProxy : currentCorsProxy  // 使用了代理服务
        })
    },
    {
        msg: '',
        posts: []
    },
    {
        resetOnExecute: false,
        immediate : false,
         // 添加异常处理配置 
        throwError: true
    }
);

// 当前搜索的用户名（用于判断是否为同一用户）
const currentSearchUser = ref('')

// 当前用户数据
let userData = ref<any>({
    user:{
        nickname: '',
        avatar: ''
    },
    posts: []
})


// 是否正在加载
let loading = ref(false);

// 搜索
const handleSearch = async() => {
  if (!params.value.username.trim()) {
    showFailToast('用户名不能为空');
    return;
  }
  if (params.value.username.trim() === '回忆竟成空白') {
    showFailToast('该用户禁止搜索');
    return;
  }
  try {
    loading.value = true

    let res = await execute();
    if(!res.msg.includes('Success')){
        showFailToast(res.msg)
        // 如果是同一用户
        if(currentSearchUser.value === params.value.username && params.value.page > 1){
            params.value.page--;
            return 
        }
        // // 并且请求回上页的数据
        // handlePrevPage()
        return 
    }
    userData.value = useDataOld.value
  } catch (error) {
    if(params.value.page > 1){
        params.value.page--;
    }
    showToast({
        message: '代理服务器不稳定，请重试,当前代理: ' + currentCorsProxy,
        wordBreak: 'break-word',
    });
    // showToast('代理服务器不稳定，请重试,当前代理: ' + currentCorsProxy)
  } finally {
    loading.value = false
    currentSearchUser.value = params.value.username
  }
};

// 上一页
const handlePrevPage = () => {
    params.value.page--;
    handleSearch();
};

// 下一页
const handleNextPage = () => {
  params.value.page++;
  handleSearch();
};

// 跳转帖子详情
const goTbDetail = (url: string , title: string) => {
    showConfirmDialog({
        title: '是否要跳转到以下详情',
        message: title,
    })
    .then(() => {
        window.open(url, '_blank');
    })
    .catch(() => {
        // on cancel
    });
};

// 添加文字截取函数
const formatTitle = (title: string) => {
  if (!title) return '';
  return title.length > 16 ? title.substring(0, 12) + '...' : title;
}
</script>

<style lang="less" scoped>
.cfy_new{
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.cfy_new_container{
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.content{
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 10px 10px;
    gap: 10px;
    overflow: hidden;
}
.user_container{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 8px 10px;
    border: 1px solid #eaeaea;
    .user_img{
        width: 70px;
        height: 70px;
    }
    .user_name{
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        font-weight: 700;
    }
}

.chatList{
    flex: 1;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 10px;
    border: 1px solid #eaeaea;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    
    :deep(.van-list) {
        flex: 1;
        overflow-y: auto;
    }
    
    :deep(.van-cell) {
        margin-bottom: 8px;
        border-radius: 6px;
        border: 1px solid #f0f0f0;
        
        &:last-child {
            margin-bottom: 0;
        }
    }
    .content_title{
        .titleText{
            font-size: 14px;
            font-weight: 700;
        }
    }
    .content_reply{
        color: #666;
    }
    .empty-or-loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 20px;
    }
}
.footer{
    position: sticky;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    border-radius: 8px 8px 0 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid #eaeaea;
    .footerItem{ 
        width: 45%;
    }
}
</style>