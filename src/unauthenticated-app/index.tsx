/**
 * 未登录时的应用
 */

import { useState } from 'react'
import { LoginPage } from './login'
import { RegisterPage } from './register'

export const UnauthenticatedApp = () => {
  // 用于判断注册还是登录
  const [isRegister, setRegister] = useState(false)

  return (
    <div>
      {
        isRegister ? <RegisterPage /> : <LoginPage />
      }
      <button onClick={() => setRegister(!isRegister)}>切换到 {isRegister ? '登录' : '注册'}</button>
    </div>
  )
}
