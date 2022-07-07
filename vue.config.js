const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: 'error',
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://604540c7c0194f00170bcb53.mockapi.io',
        changeOrigin: true,
      },
    },
  },
});
