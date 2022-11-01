/**
 * 列表展示组件
 */

import { Table } from 'antd'
import { useCallback } from 'react'
import { User } from './searchPanel'

interface Project {
  id: string
  name: string,
  personId: string,
  pin: string,
  organization: string
}
interface ListProps {
  users: User[],
  list: Project[]
}

export const List = ({ users, list }: ListProps) => {
  const sorter = useCallback((a: Project, b: Project, key: 'name' | 'organization') => {
    return a[key].localeCompare(b[key])
  }, [])

  return (
    <Table rowKey="id" pagination={false} columns={[
      {
        title: '名称',
        dataIndex: 'name',
        sorter: (a, b) => sorter(a, b, 'name')
      },
      {
        title: '负责人',
        render(value, project) {
          return (
            <span>
              {users.find(user => user.id === project.personId)?.name || '未知'}
            </span>
          )
        }
      }
    ]} dataSource={list} />
  )
}
