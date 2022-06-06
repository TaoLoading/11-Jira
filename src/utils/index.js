import { useEffect, useState } from 'react'

// 清除对象中的空值
export const cleanObject = (object) => {
  const result = { ...object }
  Object.keys(result).forEach(key => {
    const value = result[key]
    if (value === '') {
      delete result[key]
    }
  })
  return result
}

// 自定义hook，防抖函数
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    // 每次value变化后设置一个定时器
    const timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    // 清理上一个定时器
    return () => clearTimeout(timeout)
  }, [value, delay])
  return debouncedValue
}
