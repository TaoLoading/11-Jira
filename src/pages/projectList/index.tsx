import { useEffect, useMemo, useState } from 'react'
import styled from '@emotion/styled'
import { Typography } from 'antd'
import { List, Project } from './component/list'
import { SearchPanel } from './component/searchPanel'
import { cleanObject, toNumber } from '../../utils/index'
import { useHttp } from '../../utils/http'
import { useDebounce } from '../../hooks/useDebounce'
import { useAsync } from '../../hooks/useAsync'
import { useUrlQueryParam } from '../../hooks/useUrlQueryParam'
import { useUser } from '../../hooks/useUser'

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
  // 封装的请求
  const client = useHttp()
  const { isLoading, error, data: list, run } = useAsync<Project[]>()

  // 查询项目列表数据
  useEffect(() => {
    run(client('projects', { data: cleanObject(debouncedParam) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedParam])

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
