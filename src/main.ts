import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import pinia from '@/stores/index';

//重置样式
import 'normalize.css';

//主题样式
import '@/styles/index.scss';
import '@/styles/dark.scss';

// Toast
import 'vant/es/toast/style';        
//Dialog
import 'vant/es/dialog/style';

//导入自己封装的组件库
import WzryUI from '@/components/library/index';

// 注册图标
import 'virtual:svg-icons-register';

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(WzryUI)

app.mount('#app')