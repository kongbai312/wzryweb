import { fileURLToPath, URL } from 'node:url'

import { defineConfig , loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

//自动引入
import AutoImport from 'unplugin-auto-import/vite'
//允许对父传子 props 进行解构
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'

//vant自动引入
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ mode } : { mode: string }) => {
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [
      vue(),
      //允许解构
      ReactivityTransform(),
      //自动引入
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ['vue'],
        dts: 'src/auto-import.d.ts'
      }),
      //项目下src/components下的组件也会被自动注册
      Components({
        dts: false, // 关闭自动生成类型声明文件  官网没写这个
        resolvers: [VantResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      open: true,
      port: 8080
    },
    //github部署
    base: env.MODE === 'production' ? '/wzryweb/' : './',
    // 打包配置
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  })
}
