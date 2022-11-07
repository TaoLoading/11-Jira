import { Form, Input } from 'antd'
import { useAuth } from '../context/auth-context'
import { useAsync } from '../hooks/useAsync'
import { LongButton } from './index'

export const LoginPage = ({ onError }: { onError: (error: Error) => void }) => {
  const { login } = useAuth()
  const { run, isLoading } = useAsync()

  const handleSubmit = (formData: { username: string, password: string }) => {
    run(login(formData).catch(onError))
  }

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder="用户名" type="text" id="username" />
      </Form.Item>
      <Form.Item name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder="密码" type="password" id="password" />
      </Form.Item>
      <LongButton loading={isLoading} type="primary" htmlType="submit">登录</LongButton>
    </Form>
  )
}
