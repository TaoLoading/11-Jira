import { useEffect, useState } from 'react'
import { List } from './list'
import { SearchPanel } from './searchPanel'

const apiUrl = process.env.REACT_APP_API_URL
export const ProjectList = () => {
  const [users, setUsers] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(`${apiUrl}/projects`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [param])
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  }, [param])

  return <div>
    <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
    <List users={users} list={list}></List>
  </div>
}