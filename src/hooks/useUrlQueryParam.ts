/**
 * 返回url中查询参数的值
 */

import { useMemo, useState } from 'react'
import { URLSearchParamsInit, useSearchParams } from 'react-router-dom'
import { cleanObject } from '../utils'

export const useUrlQueryParam = <T extends string>(keys: T[]) => {
  const [stateKeys] = useState(keys)
  const [searchParams, setSearchParams] = useSearchParams() // 用于读取和写入url中的query参数
  return [
    useMemo(
      () => stateKeys.reduce((prev, key) => {
        return { ...prev, [key]: searchParams.get(key) }
      }, {} as { [key in T]: string }),
      [searchParams, stateKeys]
    ),
    (params: Partial<{ [key in T]: unknown }>) => {
      const o = cleanObject({ ...Object.fromEntries(searchParams), ...params }) as URLSearchParamsInit
      return setSearchParams(o)
    }
  ] as const
}
