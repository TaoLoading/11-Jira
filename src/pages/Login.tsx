import { FormEvent } from 'react'
import { useAuth } from '../context/auth-context'

export const LoginPage = () => {
  const { login, user } = useAuth()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value
    login({ username, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      {
        user ? (
          <div>登录成功，用户名为：{user.name}</div>
        ) : null
      }
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" />
        <label htmlFor="password">密码</label>
        <input type="password" id="password" />
      </div>
      <button type={"submit"}>登录</button>
    </form>
  )
}
