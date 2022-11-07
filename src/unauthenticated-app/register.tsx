import { Form, Input } from 'antd'
import { useAuth } from '../context/auth-context'
import { useAsync } from '../hooks/useAsync'
import { LongButton } from './index'

export const RegisterPage = ({ onError }: { onError: (error: Error) => void }) => {
  const { register } = useAuth()
  const { run, isLoading } = useAsync()

  const handleSubmit = ({ cPassword, ...formData }: { username: string, password: string, cPassword: string }) => {
    if (cPassword !== formData.password) {
      return onError(new Error('两次输入的密码不一致'))
    }
    run(register(formData).catch(onError))
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
      <Form.Item name={"cPassword"}
        rules={[{ required: true, message: "请确认密码" }]}
      >
        <Input placeholder="确认密码" type="password" id="cPassword" />
      </Form.Item>
      <LongButton loading={isLoading} type="primary" htmlType="submit">注册</LongButton>
    </Form>
  )
}
