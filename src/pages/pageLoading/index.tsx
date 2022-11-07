import styled from '@emotion/styled'
import { Spin } from 'antd'

export const PageLoading = () => {
  return (
    <FullPage>
      <Spin size="large" />
    </FullPage>
  )
}

const FullPage = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
