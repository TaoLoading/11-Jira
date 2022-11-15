/**
 * 自定义hook，实现组件通信
 */

import { createContext, useContext, ReactNode, useEffect } from 'react'
import * as auth from '../auth-provider'
import { useAsync } from '../hooks/useAsync'
import { User } from '../pages/projectList/component/searchPanel'
import { http } from '../utils/http'
import { PageLoading } from '../pages/PageLoading'
import { PageError } from '../pages/PageError'

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
  const { data: user, run, error, isLoading, isIdle, isError, setData: setUser } = useAsync<User | null>()

  const login = (form: FormType) => auth.login(form).then(user => setUser(user))
  const register = (form: FormType) => auth.register(form).then(user => setUser(user))
  const logout = () => auth.logout().then(() => setUser(null))

  useEffect(() => {
    // 加载程序前先初始化一次user，实现登录持久化
    run(initUser())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 当等待执行或加载时展示loading
  if (isIdle || isLoading) {
    return <PageLoading />
  }

  // 初始失败时展示错误页
  if (isError) {
    return <PageError error={error} />
  }

  return <AuthContext.Provider value={{ user, login, register, logout }} children={children} />
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth必须在Provider中使用')
  }
  return context
}
