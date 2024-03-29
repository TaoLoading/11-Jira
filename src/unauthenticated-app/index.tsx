/**
 * 未登录时的应用
 */

import { Card, Button, Divider, Typography } from 'antd'
import { useState } from 'react'
import styled from '@emotion/styled'
import { LoginPage } from './login'
import { RegisterPage } from './register'
import logo from '@/assets/logo.svg'
import left from '@/assets/left.svg'
import right from '@/assets/right.svg'

export const UnauthenticatedApp = () => {
  // 用于判断注册还是登录
  const [isRegister, setRegister] = useState(false)
  // 错误信息
  const [errMsg, setErrMsg] = useState<Error | null>(null)

  return (
    <Container>
      <Header />
      <Background />
      <ShadowCard>
        <Title>{isRegister ? "注册" : "登录"}</Title>
        {
          errMsg ?
            <Typography.Text type="danger">
              {errMsg.message}
            </Typography.Text> : null
        }
        {
          isRegister ? <RegisterPage onError={setErrMsg} /> : <LoginPage onError={setErrMsg} />
        }
        <Divider />
        <LongButton type="link" onClick={() => setRegister(!isRegister)}>切换到 {isRegister ? "已经有账号了？直接登录" : "没有账号？注册新账号"}</LongButton>
      </ShadowCard>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding:  5rem 0;
  background-size: 8rem;
  width: 100%;
`

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0,0,0,0.1) 0 0 10px;
  text-align: center;
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
    calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-image: url(${left}), url(${right});
`

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`

export const LongButton = styled(Button)`
width: 100%;
`
