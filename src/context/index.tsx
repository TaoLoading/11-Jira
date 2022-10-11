import { ReactNode } from 'react'
import { AuthProvider } from './auth-context'

export const AppProviders = ({ children }: { children: ReactNode }) => { // children是子节点
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}