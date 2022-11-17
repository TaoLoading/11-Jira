/**
 * 获取用户数据
 */

import { useQuery } from 'react-query'
import { cleanObject } from '../utils'
import { useHttp } from '../utils/http'
import { User } from '../pages/projectList/component/searchPanel'

export const useUser = (param?: Partial<User>) => {
  const client = useHttp()
  return useQuery<User[], Error>(
    ['users', cleanObject(param || {})],
    () => {
      return client('users', {
        data: param,
      })
    }
  )
}
