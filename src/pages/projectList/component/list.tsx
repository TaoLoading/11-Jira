/**
 * 列表展示组件
 */

import { Table, TableProps } from 'antd'
import { useCallback } from 'react'
import dayjs from 'dayjs'
import { User } from './searchPanel'

export interface Project {
  id: string
  name: string,
  personId: string,
  pin: string,
  organization: string,
  created: number
}
interface ListProps extends TableProps<Project> {
  users: User[]
}

export const List = ({ users, ...props }: ListProps) => {
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
        title: '部门',
        dataIndex: 'organization'
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
      },
      {
        title: '创建时间',
        render(value, project) {
          return (
            <span>
              {project.created ? dayjs(project.created).format('YYYY-MM-DD') : '无'}
            </span>
          )
        }
      }
    ]}
      {...props}
    />
  )
}
