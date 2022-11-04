import { useEffect, useState } from 'react'
import { List } from './component/list'
import { SearchPanel } from './component/searchPanel'
import { cleanObject, useDebounce } from '../../utils/index'
import { useHttp } from '../../utils/http'
import styled from '@emotion/styled'

export const ProjectList = () => {
  // 查询参数
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  // 防抖后的查询参数
  const debouncedParam = useDebounce(param, 500)
  // 封装的请求
  const client = useHttp()

  // 项目列表数据
  const [list, setList] = useState([])
  // 查询项目列表数据
  useEffect(() => {
    client('projects', { data: cleanObject(debouncedParam) }).then(setList)
  }, [debouncedParam])

  // 用户数据
  const [users, setUsers] = useState([])
  // 查询用户数据
  useEffect(() => {
    client('users').then(setUsers)
  }, [debouncedParam])

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
      <List users={users} list={list}></List>
    </Container>
  )
}

const Container = styled.div`
  padding: 3.2rem;
`
