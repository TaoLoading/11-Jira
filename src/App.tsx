import './App.css'
import { AuthenticatedApp } from './authenticated-app'
import { useAuth } from './context/auth-context'
import { UnauthenticatedApp } from './unauthenticated-app'
import { ErrorBoundary } from './components/errorBoundary'
import { PageError } from './pages/PageError'

function App() {
  const { user } = useAuth()

  return (
    <div className="App">
      <ErrorBoundary fullbackRender={PageError}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  )
}

export default App
