module.exports = {
  transpileDependencies: [
    'vuetify',
    'VueScrollmagic'
  ],
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/styles/common/common.scss";'
      }
    }
  }
}