import { useState } from "react"

export const SearchPanel = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [users, setUsers] = useState([])

  return <form>
    <div>
      <input type="text" value={parm.name} onChange={e => setParam({
        ...param,
        name: e.target.value
      })} />
      <select value={param.personId} onChange={e => setParam({
        ...param,
        personId: e.target.value
      })}>
        <option value={""}>负责人</option>
        {
          users.map(user => {
            return <option value={""}>{{ user }}</option>
          })
        }
      </select>
    </div>
  </form>
}