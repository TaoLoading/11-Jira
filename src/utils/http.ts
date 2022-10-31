/**
 * 封装请求
 */
import qs from 'qs'
import * as auth from '../auth-provider'
import { useAuth } from '../context/auth-context'

const apiUrl = process.env.REACT_APP_API_URL

interface ParamsType extends RequestInit {
  data?: object,
  token?: string
}

export const http = async (endpoint: string, { data, token, headers, ...customConfig }: ParamsType = {}) => {
  // 处理请求配置
  const config = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : ''
    },
    ...customConfig
  }

  // 处理请求参数
  if (config.method.toUpperCase() === 'GET') {
    endpoint += `?${qs.stringify(data)}`
  } else {
    config.body = JSON.stringify(data || {})
  }

  return window.fetch(`${apiUrl}/${endpoint}`, config)
    .then(async res => {
      // 401为未登录或token失效时
      if (res.status === 401) {
        await auth.logout()
        window.location.reload()
        return Promise.reject({ msg: '请重新登录' })
      }

      const data = await res.json()
      if (res.ok) {
        return data
      } else {
        // 在此处抛出异常，而不是.catch()，原因是401或500等情况时fetch不会主动抛出异常
        return Promise.reject(data)
      }
    })
}

// 借助封装的http实现管理用户登录状态的hook，即自动传入token
export const useHttp = () => {
  const { user } = useAuth()
  // return (...[endpoint, config]: [string, ParamsType]) => http(endpoint, { ...config, token: user?.token })
  // 由于参数类型和封装的http一致，故还可写为如下形式
  return (...[endpoint, config]: Parameters<typeof http>) => http(endpoint, { ...config, token: user?.token })
}
