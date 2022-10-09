import { useEffect, useState } from 'react'

// 清除对象中的空值
export const cleanObject = (object: object) => {
  // 注意此处不直接改变原对象
  const result = { ...object }
  Object.keys(result).forEach(key => {
    // @ts-ignore
    const value = result[key]
    if (!value && value !== 0) {
      // @ts-ignore
      delete result[key]
    }
  })
  return result
}

// 防抖函数
export const useDebounce = <T>(value: T, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => clearTimeout(timeout)
  }, [value, delay])
  return debouncedValue

}

// 数组中元素的增、移除特定元素、清空数组
export const useArray = <T>(initArr: T[]) => {
  const [value, setValue] = useState(initArr)
  return {
    value,
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copyArr = [...value]
      copyArr.splice(index, 1)
      setValue(copyArr)
    },
    add: (item: T) => { setValue([...value, item]) }
  }
}
