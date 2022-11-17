import styled from '@emotion/styled'
import { Typography } from 'antd'
import { List } from './component/list'
import { SearchPanel } from './component/searchPanel'
import { useDebounce } from '../../hooks/useDebounce'
import { useUser } from '../../hooks/useUser'
import { useProject } from '../../hooks/useProject'
import { useProjectSearchParams } from '../../hooks/useProjectSearchParams'

export const ProjectList = () => {
  // 查询参数
  const [param, setParam] = useProjectSearchParams()
  // 防抖后的查询参数
  const debouncedParam = useDebounce(param, 200)
  // 查询项目列表数据
  const { isLoading, error, data: list } = useProject(debouncedParam)
  // 查询用户数据
  const { data: users } = useUser()

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel users={users || []} param={param} setParam={setParam}></SearchPanel>
      {error ? <Typography.Text type={"danger"}>{error.message}</Typography.Text> : null}
      <List users={users || []} dataSource={list || []} loading={isLoading}></List>
    </Container>
  )
}

const Container = styled.div`
  padding: 3.2rem;
`
