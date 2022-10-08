import { useEffect, useState } from 'react'
import qs from 'qs'
import { List } from './component/list'
import { SearchPanel } from './component/searchPanel'
import { cleanObject, useDebounce } from '../../utils/index'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectList = () => {
  // 查询参数
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  // 防抖后的查询参数
  const debouncedParam = useDebounce(param, 500)

  // 项目列表数据
  const [list, setList] = useState([])
  // 查询项目列表数据
  useEffect(() => {
    // qs.stringify(debouncedParam)是将debouncedParam中的属性展开，即等同于name=debouncedParam.name&personId=debouncedParam.personId
    // cleanObject()是清除参数中的空值
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async res => {
      if (res.ok) {
        setList(await res.json())
      }
    })
  }, [debouncedParam])

  // 用户数据
  const [users, setUsers] = useState([])
  // 查询用户数据
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async res => {
      if (res.ok) {
        setUsers(await res.json())
      }
    })
  }, [debouncedParam])

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
      <List users={users} list={list}></List>
    </div>
  )
}
