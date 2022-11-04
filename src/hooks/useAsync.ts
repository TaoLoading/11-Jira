/**
 * 处理异步
 */

import { useState } from 'react'

interface State<T> {
  status: 'idle' | 'loading' | 'success' | 'error',
  data: T | null,
  error: Error | null
}

const defaultStatus: State<null> = {
  status: 'idle',
  data: null,
  error: null
}

export const useAsync = <T>(initialState?: State<T>) => {
  const [state, setState] = useState<State<T>>({
    ...defaultStatus,
    ...initialState
  })

  // 成功时
  const reqSuccess = (data: T) => setState({
    status: 'success',
    data: data,
    error: null
  })

  // 失败时
  const reqError = (error: Error) => setState({
    status: 'error',
    data: null,
    error
  })

  // 正在执行时，用来触发异步请求
  const run = (promise: Promise<T>) => {
    if (!promise || !promise.then) {
      throw new Error('请传入一个Promise')
    }
    setState({
      ...state,
      status: 'loading'
    })
    return promise.then(data => {
      reqSuccess(data)
      return data
    }).catch(err => {
      reqError(err)
      return err
    })
  }

  return {
    isIdle: state.status === 'idle',
    isLoading: state.status === 'loading',
    isSuccess: state.status === 'success',
    isError: state.status === 'error',
    reqSuccess,
    reqError,
    run,
    ...state
  }
}