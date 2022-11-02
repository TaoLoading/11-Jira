/**
 * 此文件为craco的配置文件
 */

const CracoLessPlugin = require('craco-less')
const path = require('path')

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
  ],
  devServer: {
    port: 8080,
    open: true
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}