import { useQuery } from 'react-query'
import { cleanObject } from '../utils'
import { useHttp } from '../utils/http'
import { User } from '../pages/projectList/component/searchPanel'

const URL_PREFIX = 'users'

export const useUser = (param?: Partial<User>) => {
  const client = useHttp()
  return useQuery<User[], Error>(
    [URL_PREFIX, cleanObject(param || {})],
    () => {
      return client(URL_PREFIX, {
        data: param,
      })
    })
}
