/**
 * 数组中元素的增、移除特定元素、清空数组
 */

import { useState } from 'react'

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