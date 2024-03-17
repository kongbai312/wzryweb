module.exports = {
  plugins: {
    'postcss-px-to-viewport-8-plugin': {
      viewportWidth: 375, // 设计稿的视口宽度
      viewportUnit: 'vw', // 希望使用的视口单位
      exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件
      selectorBlackList: ['van'] // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
    }
  }
}
