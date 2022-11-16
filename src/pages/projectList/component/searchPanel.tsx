/**
 * 列表查询组件
 */

import { Form, Input } from 'antd'
import { UserSelect } from '../../../components/UserSelect'
import { Project } from './list'

export interface User {
  id: number,
  name: string,
  email: string,
  title: string,
  organization: string,
  token: string
}

interface SearchPanelProps {
  users: User[],
  param: Partial<Pick<Project, 'name' | 'personId'>>,
  setParam: (param: SearchPanelProps['param']) => void
}

export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  return (
    <Form layout={"inline"} style={{ marginBottom: "2rem" }}>
      <Form.Item>
        <Input type="text" value={param.name} placeholder="请输入项目名称" onChange={e => setParam({
          ...param,
          name: e.target.value
        })} />
      </Form.Item>
      <Form.Item>
        <UserSelect
          defaultOptionName={"负责人"}
          value={param.personId}
          options={users || []}
          onChange={(personId) => {
            setParam({
              ...param,
              personId: personId
            })
          }}
        />
      </Form.Item>
    </Form>
  )
}
