/**
 * 编辑项目
 */

import { Project } from '../interface/Project'
import { useHttp } from '../utils/http'
import { useAsync } from './useAsync'

export const useEditProject = () => {
  const { run, ...asyncResult } = useAsync()
  const client = useHttp()
  const change = (params: Partial<Project>) => {
    return run(client(`projects/${params.id}`, {
      data: params,
      method: 'PATCH'
    }))
  }

  return {
    change,
    ...asyncResult
  }
}
