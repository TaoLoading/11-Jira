/**
 * 模拟实现登录注册相关认证
 */

import { message } from 'antd'
import { User } from './pages/projectList/component/searchPanel'

const localStorageKey = '__auth_provider_token__'
const apiUrl = process.env.REACT_APP_API_URL

export const getToken = () => window.localStorage.getItem(localStorageKey)

export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || '')
  return user
}

// 注册
export const register = (data: { username: string, password: string }) => {
  return fetch(`${apiUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(async res => {
    if (res.ok) {
      message.success('注册成功')
      // 种下token
      return handleUserResponse(await res.json())
    } else {
      message.error('注册失败')
      return Promise.reject(await res.json())
    }
  })
}

// 登录
export const login = (data: { username: string, password: string }) => {
  return fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(async res => {
    if (res.ok) {
      message.success('登录成功')
      // 种下token
      return handleUserResponse(await res.json())
    } else {
      message.error('登录失败')
      return Promise.reject(await res.json())
    }
  })
}

// 登出
export const logout = () => {
  window.localStorage.removeItem(localStorageKey)
  message.success('用户已登出')
  return Promise.resolve(null)
}
