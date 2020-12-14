
module.exports = {
    lintOnSave: false,//去掉eslint
    devServer: {
      port:80,
      proxy: {
        '/developer': {
          target: 'http://172.16.12.179/',
          changeOrigin: true,
          pathRewrite: {
            '^/developer': '/'
          }
        }
      }
    }
  }