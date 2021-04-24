// 打包时会将此配置文件与脚手架3自动创建的配置文件合并
module.exports = {
  configureWebpack:{
    resolve:{
      //路径别名配置
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
