import styled from '@emotion/styled'
import { Button, Dropdown, Menu } from 'antd'
import { useAuth } from '../context/auth-context'
import { Row } from './Lib'
// 此种方式渲染svg，可以修改样式
import { ReactComponent as SoftwareLogo } from '../assets/softwareLogo.svg'

export const Header = () => {
  const { logout, user } = useAuth()
  const backHome = () => {
    window.location.href = window.location.origin
  }

  return (
    <PageHeader between={true}>
      <HeaderLeft gap={true}>
        <Button type="link" onClick={backHome}>
          <SoftwareLogo width={"18rem"} color={"rgb(38, 132, 255)"} />
        </Button>
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
    </PageHeader>
  )
}

const PageHeader = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`

const HeaderLeft = styled(Row)`
`

const HeaderRight = styled.div`
`
