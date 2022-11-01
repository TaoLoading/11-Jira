/**
 * 自定义hook，实现组件通信
 */

import { useState, createContext, useContext, ReactNode, useEffect } from 'react'
import * as auth from '../auth-provider'
import { User } from '../pages/projectList/component/searchPanel'
import { http } from '../utils/http'

interface FormType {
  username: string,
  password: string
}

// 初始化user
const initUser = async () => {
  let user = null
  const token = auth.getToken()
  if (token) {
    const data = await http('me', { token })
    user = data.user
  }
  return user
}

// 创建共享对象
const AuthContext = createContext<{
  user: User | null,
  register: (form: FormType) => Promise<void>,
  login: (form: FormType) => Promise<void>,
  logout: () => Promise<void>
} | undefined>(undefined)
AuthContext.displayName = 'AuthContext'

// 创建可以进行通信的组件
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = (form: FormType) => auth.login(form).then(user => setUser(user))
  const register = (form: FormType) => auth.register(form).then(user => setUser(user))
  const logout = () => auth.logout().then(() => setUser(null))

  useEffect(() => {
    console.log('xxxxxxxx')
    // 加载程序前先初始化一次user，实现登录持久化
    initUser().then(setUser)
  }, [])

  return <AuthContext.Provider value={{ user, login, register, logout }} children={children} />
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth必须在Provider中使用')
  }
  return context
}
