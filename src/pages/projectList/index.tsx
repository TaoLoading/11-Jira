import { useMemo } from 'react'
import styled from '@emotion/styled'
import { Typography } from 'antd'
import { List } from './component/list'
import { SearchPanel } from './component/searchPanel'
import { toNumber } from '../../utils/index'
import { useDebounce } from '../../hooks/useDebounce'
import { useUrlQueryParam } from '../../hooks/useUrlQueryParam'
import { useUser } from '../../hooks/useUser'
import { useProject } from '../../hooks/useProject'

const useProjectSearchParams = () => {
  const [param, setParam] = useUrlQueryParam(['name', 'personId'])
  return [
    // 关键，否则会因为重新定义对象，导致组件无限重渲染
    useMemo(() => (
      { ...param, personId: toNumber(param.personId) || undefined }
    ), [param]),
    setParam
  ] as const
}

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
