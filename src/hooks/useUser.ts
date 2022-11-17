/**
 * 获取用户数据
 */

import { useQuery } from 'react-query'
import { User } from '../interface/User'
import { cleanObject } from '../utils'
import { useHttp } from '../utils/http'

export const useUser = (param?: Partial<User>) => {
  const client = useHttp()

  return useQuery<User[], Error>(
    ['users', cleanObject(param || {})],
    () => {
      return client('users', {
        data: param
      })
    }
  )
}
