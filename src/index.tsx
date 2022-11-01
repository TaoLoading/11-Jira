import React from 'react'
import ReactDOM from 'react-dom/client'
import { loadDevTools } from 'jira-dev-tool'
// 在jira-dev-tool后引入，样式覆盖
import 'antd/dist/antd.less'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'
import { AppProviders } from './context/index'

loadDevTools(() => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  )
  root.render(
    <ConfigProvider locale={zhCN}>
      <React.StrictMode>
        <AppProviders>
          <App />
        </AppProviders>
      </React.StrictMode>
    </ConfigProvider>
  )
})

reportWebVitals()
