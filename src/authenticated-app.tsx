/**
 * 登录后的应用
 */

import styled from '@emotion/styled'
import { Row } from './components/lib'
import { useAuth } from './context/auth-context'
import { ProjectList } from './pages/projectList/index'
// 此种方式渲染svg，可以修改样式
import { ReactComponent as SoftwareLogo } from './assets/softwareLogo.svg'
import { Button, Dropdown, Menu } from 'antd'

export const AuthenticatedApp = () => {
  const { logout, user } = useAuth()

  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <SoftwareLogo width={"18rem"} color={"rgb(38, 132, 255)"} />
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown overlay={
            <Menu items={[
              {
                label: (
                  <Button type="link" onClick={logout}>
                    登出
                  </Button>
                ),
                key: 'logout'
              }
            ]} />
          }>
            <Button type="link">
              你好, {user?.name}
            </Button>
          </Dropdown>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectList></ProjectList>
      </Main>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`

const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`

const HeaderLeft = styled(Row)`
`

const HeaderRight = styled.div`
`

const Main = styled.main`
`
