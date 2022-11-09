/**
 * 登录后的应用
 */

import styled from '@emotion/styled'
import { Routes, Route, Navigate } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { ProjectList } from './pages/projectList/index'
import { ProjectScreen } from './pages/projectScreen'
import { Header } from './components/Header'

export const AuthenticatedApp = () => {
  return (
    <Container>
      <Header />
      <Main>
        <BrowserRouter>
          <Routes>
            <Route path={"/projects"} element={<ProjectList />} />
            <Route path={"/projects/:projectID/*"} element={<ProjectScreen />} />
            {/* 默认路由 */}
            <Route path="/*" element={<Navigate to="projects" replace={true} />} />
          </Routes>
        </BrowserRouter>
      </Main>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`

const Main = styled.main`
`
