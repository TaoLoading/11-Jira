import { useEffect, useState } from 'react'

// 清除对象中的空值
export const cleanObject = (object: object) => {
  const result = { ...object }
  Object.keys(result).forEach(key => {
    // @ts-ignore
    const value = result[key]
    if (value === '') {
      // @ts-ignore
      delete result[key]
    }
  })
  return result
}

// 自定义hook，防抖函数
export const useDebounce = <T>(value: T, delay: number) => {
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

export const useArray = <T>(initArr: T[]) => {
  const [value, setValue] = useState(initArr)
  return {
    value,
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value]
      copy.splice(index, 1)
      setValue(copy)
    },
    add: (item: T) => { setValue([...value, item]) }
  }
}
