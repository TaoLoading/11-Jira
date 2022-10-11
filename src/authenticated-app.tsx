/**
 * 登录后的应用
 */

import { useAuth } from './context/auth-context'
import { ProjectList } from './pages/projectList/index'

export const AuthenticatedApp = () => {
  const { logout } = useAuth()

  return (
    <div>
      <button onClick={logout}>登出</button>
      <ProjectList></ProjectList>
    </div>
  )
}
