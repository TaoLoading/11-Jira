/**
 * 获取查询项目的参数
 */

import { useMemo } from 'react'
import { toNumber } from '../utils'
import { useUrlQueryParam } from './useUrlQueryParam'

export const useProjectSearchParams = () => {
  const [param, setParam] = useUrlQueryParam(['name', 'personId'])
  return [
    // 关键，否则会因为重新定义对象，导致组件无限重渲染
    useMemo(() => (
      { ...param, personId: toNumber(param.personId) || undefined }
    ), [param]),
    setParam
  ] as const
}