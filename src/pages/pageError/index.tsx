import styled from '@emotion/styled'
import { Typography } from 'antd'

export const PageError = ({ error }: { error: Error | null }) => {
  return (
    <FullPage>
      <Typography.Text type="danger">{error?.message}</Typography.Text>
    </FullPage>
  )
}

const FullPage = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
