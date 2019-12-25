const path = require('path') //引入path模块
function resolve(dir) {
  return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}

// 作为配置文件，直接导出配置对象即可
module.exports = {
  devServer: {
    open: true,
    // 设置代理
    proxy: {
      '/api': {
        // 目标 API 地址
        target: 'http://123.207.32.32:8000', //真实的后台api地址
        // 如果要代理 websockets
        ws: true,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        // 重写
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'))
      //set第一个参数：设置的别名，第二个参数：设置的路径
      .set('api', resolve('./src/api'))
      .set('views', resolve('./src/views'))
  }
}
