/**
 * 获取项目数据
 */

import { cleanObject } from '../utils'
import { useHttp } from '../utils/http'
import { Project } from '../pages/projectList/component/list'
import { useAsync } from './useAsync'
import { useEffect } from 'react'

export const useProject = (param?: Partial<Project>) => {
  const client = useHttp()
  const { run, ...result } = useAsync<Project[]>()

  useEffect(() => {
    run(client('projects', { data: cleanObject(param || {}) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param])

  return result
}
