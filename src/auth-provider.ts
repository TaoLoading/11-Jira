/**
 * 模拟登录注册相关认证
 */

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
      return handleUserResponse(await res.json())
    } else {
      return Promise.reject(data)
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
      return handleUserResponse(await res.json())
    } else {
      return Promise.reject(data)
    }
  })
}

// 登出
export const logout = () => {
  window.localStorage.removeItem(localStorageKey)
  return Promise.resolve(null)
}
