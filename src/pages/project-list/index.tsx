import { useEffect, useState } from 'react'
import qs from 'qs'
import { List } from './list'
import { SearchPanel } from './searchPanel'
import { cleanObject, useDebounce } from '../../utils/index'

const apiUrl = process.env.REACT_APP_API_URL
export const ProjectList = () => {
  // 用户数据
  const [users, setUsers] = useState([])
  // 查询参数
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  // 防抖后的查询参数
  const debouncedParam = useDebounce(param, 500)
  // 列表数据
  const [list, setList] = useState([])

  useEffect(() => {
    // qs.stringify(debouncedParam)是将debouncedParam中的属性展开，即等同于name=debouncedParam.name&personId=debouncedParam.personId
    // cleanObject()是清除参数中的空值
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [debouncedParam])
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  }, [debouncedParam])

  return <div>
    <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
    <List users={users} list={list}></List>
  </div>
}