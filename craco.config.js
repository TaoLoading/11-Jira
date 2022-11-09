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
    host: 'localhost',
    port: 8080,
    open: false
  },
  webpack: {
    alias: {
      '@': path.resolve('src')
    }
  }
}