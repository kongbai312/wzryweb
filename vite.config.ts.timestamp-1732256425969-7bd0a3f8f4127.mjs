// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "file:///E:/Vuerelated/wzry_web/node_modules/.pnpm/vite@5.0.11_@types+node@20.11.10_sass@1.72.0/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/Vuerelated/wzry_web/node_modules/.pnpm/@vitejs+plugin-vue@5.0.3_vite@5.0.11_vue@3.4.15/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///E:/Vuerelated/wzry_web/node_modules/.pnpm/unplugin-auto-import@0.17.5_@vueuse+core@10.9.0/node_modules/unplugin-auto-import/dist/vite.js";
import ReactivityTransform from "file:///E:/Vuerelated/wzry_web/node_modules/.pnpm/@vue-macros+reactivity-transform@0.4.3_vue@3.4.15/node_modules/@vue-macros/reactivity-transform/dist/vite.mjs";
import Components from "file:///E:/Vuerelated/wzry_web/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.15/node_modules/unplugin-vue-components/dist/vite.js";
import { VantResolver } from "file:///E:/Vuerelated/wzry_web/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.15/node_modules/unplugin-vue-components/dist/resolvers.js";
import { createSvgIconsPlugin } from "file:///E:/Vuerelated/wzry_web/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.0.11/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import path from "path";
var __vite_injected_original_import_meta_url = "file:///E:/Vuerelated/wzry_web/vite.config.ts";
var vite_config_default = ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    plugins: [
      vue(),
      //允许解构
      ReactivityTransform(),
      //自动引入
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ["vue"],
        dts: "src/auto-import.d.ts"
      }),
      //项目下src/components下的组件也会被自动注册
      Components({
        dts: false,
        // 关闭自动生成类型声明文件  官网没写这个
        resolvers: [VantResolver()]
      }),
      createSvgIconsPlugin({
        // 指定图标文件夹，绝对路径（NODE代码）
        iconDirs: [path.resolve(process.cwd(), "src/icons")]
      })
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      }
    },
    server: {
      open: true,
      port: 8080
    },
    //github部署
    base: env.MODE === "production" ? "/wzryweb/" : "./",
    // 打包配置
    build: {
      outDir: "dist",
      assetsDir: "assets",
      sourcemap: false,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxWdWVyZWxhdGVkXFxcXHd6cnlfd2ViXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxWdWVyZWxhdGVkXFxcXHd6cnlfd2ViXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9WdWVyZWxhdGVkL3d6cnlfd2ViL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnO1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcblxuLy9cdTgxRUFcdTUyQThcdTVGMTVcdTUxNjVcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnO1xuLy9cdTUxNDFcdThCQjhcdTVCRjlcdTcyMzZcdTRGMjBcdTVCNTAgcHJvcHMgXHU4RkRCXHU4ODRDXHU4OUUzXHU2Nzg0XG5pbXBvcnQgUmVhY3Rpdml0eVRyYW5zZm9ybSBmcm9tICdAdnVlLW1hY3Jvcy9yZWFjdGl2aXR5LXRyYW5zZm9ybS92aXRlJztcblxuLy92YW50XHU4MUVBXHU1MkE4XHU1RjE1XHU1MTY1XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcbmltcG9ydCB7IFZhbnRSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycyc7XG5cbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgKHsgbW9kZSB9OiB7IG1vZGU6IHN0cmluZyB9KSA9PiB7XG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSlcbiAgcmV0dXJuIGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW1xuICAgICAgdnVlKCksXG4gICAgICAvL1x1NTE0MVx1OEJCOFx1ODlFM1x1Njc4NFxuICAgICAgUmVhY3Rpdml0eVRyYW5zZm9ybSgpLFxuICAgICAgLy9cdTgxRUFcdTUyQThcdTVGMTVcdTUxNjVcbiAgICAgIEF1dG9JbXBvcnQoe1xuICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjUgVnVlIFx1NzZGOFx1NTE3M1x1NTFGRFx1NjU3MFx1RkYwQ1x1NTk4Mlx1RkYxQXJlZiwgcmVhY3RpdmUsIHRvUmVmIFx1N0I0OVxuICAgICAgICBpbXBvcnRzOiBbJ3Z1ZSddLFxuICAgICAgICBkdHM6ICdzcmMvYXV0by1pbXBvcnQuZC50cydcbiAgICAgIH0pLFxuICAgICAgLy9cdTk4NzlcdTc2RUVcdTRFMEJzcmMvY29tcG9uZW50c1x1NEUwQlx1NzY4NFx1N0VDNFx1NEVGNlx1NEU1Rlx1NEYxQVx1ODhBQlx1ODFFQVx1NTJBOFx1NkNFOFx1NTE4Q1xuICAgICAgQ29tcG9uZW50cyh7XG4gICAgICAgIGR0czogZmFsc2UsIC8vIFx1NTE3M1x1OTVFRFx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1N0M3Qlx1NTc4Qlx1NThGMFx1NjYwRVx1NjU4N1x1NEVGNiAgXHU1Qjk4XHU3RjUxXHU2Q0ExXHU1MTk5XHU4RkQ5XHU0RTJBXG4gICAgICAgIHJlc29sdmVyczogW1ZhbnRSZXNvbHZlcigpXVxuICAgICAgfSksXG4gICAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICAgIC8vIFx1NjMwN1x1NUI5QVx1NTZGRVx1NjgwN1x1NjU4N1x1NEVGNlx1NTkzOVx1RkYwQ1x1N0VERFx1NUJGOVx1OERFRlx1NUY4NFx1RkYwOE5PREVcdTRFRTNcdTc4MDFcdUZGMDlcbiAgICAgICAgaWNvbkRpcnM6IFtwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9pY29ucycpXVxuICAgICAgfSlcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgICB9XG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIG9wZW46IHRydWUsXG4gICAgICBwb3J0OiA4MDgwXG4gICAgfSxcbiAgICAvL2dpdGh1Ylx1OTBFOFx1N0Y3MlxuICAgIGJhc2U6IGVudi5NT0RFID09PSAncHJvZHVjdGlvbicgPyAnL3d6cnl3ZWIvJyA6ICcuLycsXG4gICAgLy8gXHU2MjUzXHU1MzA1XHU5MTREXHU3RjZFXG4gICAgYnVpbGQ6IHtcbiAgICAgIG91dERpcjogJ2Rpc3QnLFxuICAgICAgYXNzZXRzRGlyOiAnYXNzZXRzJyxcbiAgICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLFxuICAgICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFAsU0FBUyxlQUFlLFdBQVc7QUFFN1IsU0FBUyxjQUFjLGVBQWU7QUFDdEMsT0FBTyxTQUFTO0FBR2hCLE9BQU8sZ0JBQWdCO0FBRXZCLE9BQU8seUJBQXlCO0FBR2hDLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsb0JBQW9CO0FBRTdCLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sVUFBVTtBQWZ3SSxJQUFNLDJDQUEyQztBQWtCMU0sSUFBTyxzQkFBUSxDQUFDLEVBQUUsS0FBSyxNQUF3QjtBQUM3QyxRQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSxDQUFDO0FBQ3ZDLFNBQU8sYUFBYTtBQUFBLElBQ2xCLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQTtBQUFBLE1BRUosb0JBQW9CO0FBQUE7QUFBQSxNQUVwQixXQUFXO0FBQUE7QUFBQSxRQUVULFNBQVMsQ0FBQyxLQUFLO0FBQUEsUUFDZixLQUFLO0FBQUEsTUFDUCxDQUFDO0FBQUE7QUFBQSxNQUVELFdBQVc7QUFBQSxRQUNULEtBQUs7QUFBQTtBQUFBLFFBQ0wsV0FBVyxDQUFDLGFBQWEsQ0FBQztBQUFBLE1BQzVCLENBQUM7QUFBQSxNQUNELHFCQUFxQjtBQUFBO0FBQUEsUUFFbkIsVUFBVSxDQUFDLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyxXQUFXLENBQUM7QUFBQSxNQUNyRCxDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxNQUN0RDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUE7QUFBQSxJQUVBLE1BQU0sSUFBSSxTQUFTLGVBQWUsY0FBYztBQUFBO0FBQUEsSUFFaEQsT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLE1BQ1gsV0FBVztBQUFBLE1BQ1gsZUFBZTtBQUFBLFFBQ2IsVUFBVTtBQUFBLFVBQ1IsY0FBYztBQUFBLFVBQ2QsZUFBZTtBQUFBLFFBQ2pCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFDSDsiLAogICJuYW1lcyI6IFtdCn0K
