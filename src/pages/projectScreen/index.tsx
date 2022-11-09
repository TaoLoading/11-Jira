import { Routes, Route, Navigate } from 'react-router'
import { Link } from 'react-router-dom'
import { Dashboard } from '../dashboard'
import { TaskGroup } from '../taskGroup'

export const ProjectScreen = () => {
  return (
    <div>
      <h1>ProjectScreen</h1>
      <Link to={"dashboard"}>看板</Link>
      <Link to={"taskGroup"}>任务组</Link>
      <Routes>
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/taskGroup"} element={<TaskGroup />} />
        {/* 默认路由 */}
        <Route path="/*" element={<Navigate to="dashboard" replace={true} />} />
      </Routes>
    </div>
  )
}
