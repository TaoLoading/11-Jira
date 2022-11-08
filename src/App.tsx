import './App.css'
import { AuthenticatedApp } from './authenticated-app'
import { useAuth } from './context/auth-context'
import { UnauthenticatedApp } from './unauthenticated-app'
import { ErrorBoundaries } from './components/errorBoundary'
import { PageError } from './pages/pageError'

function App() {
  const { user } = useAuth()

  return (
    <div className="App">
      <ErrorBoundaries fullbackRender={PageError}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundaries>
    </div>
  )
}

export default App
