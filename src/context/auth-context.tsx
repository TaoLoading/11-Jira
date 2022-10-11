import { useState, createContext, useContext, ReactNode } from 'react'
import * as auth from '../auth-provider'
import { User } from '../pages/projectList/component/searchPanel'

interface FormType {
  username: string,
  password: string
}

const AuthContext = createContext<{
  user: User | null,
  register: (form: FormType) => Promise<void>,
  login: (form: FormType) => Promise<void>,
  logout: () => Promise<void>
} | undefined>(undefined)
AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = (form: FormType) => auth.login(form).then(user => setUser(user))
  const register = (form: FormType) => auth.register(form).then(user => setUser(user))
  const logout = () => auth.logout().then(() => setUser(null))

  return <AuthContext.Provider value={{ user, login, register, logout }} children={children} />
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('context必须在Provider中使用')
  }
  return context
}
