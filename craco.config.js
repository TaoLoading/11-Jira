/**
 * 此文件为craco的配置文件
 * 
 * 通过自定义create-react-app来实现对antd的自定义
 */

const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': 'rgb(0, 82, 204)',
              '@font-size-base': '16px'
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}