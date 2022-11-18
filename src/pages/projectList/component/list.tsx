/**
 * 列表展示组件
 */

import { Table, TableProps } from 'antd'
import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import { Project } from '../../../interface/Project'
import { User } from '../../../interface/User'
import { Star } from '../../../components/Star'
import { useEditProject } from '../../../hooks/useEditProject'

interface ListProps extends TableProps<Project> {
  users: User[]
}

export const List = ({ users, ...props }: ListProps) => {
  // 排序
  const sorter = useCallback((a: Project, b: Project, key: 'name' | 'organization') => {
    return a[key].localeCompare(b[key])
  }, [])

  // 更改是否收藏
  const { change } = useEditProject()

  return (
    <Table {...props} rowKey="id" pagination={false} columns={[
      {
        title: <Star checked={true} disabled={true} />,
        render(value, project) {
          return <Star checked={project.pin} onCheckedChange={pin => {
            change({ id: project.id, pin })
          }} />
        }
      },
      {
        title: '名称',
        sorter: (a, b) => sorter(a, b, 'name'),
        render(value, project) {
          return <Link to={String(project.id)}>{project.name}</Link>
        }
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
    ]} />
  )
}
