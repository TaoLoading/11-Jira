// 清除对象中的空值
export const cleanObject = (object: { [key: string]: unknown }) => {
  // 注意此处不直接改变原对象
  const result = { ...object }
  Object.keys(result).forEach(key => {
    const value = result[key]
    if (!value && value !== 0) {
      delete result[key]
    }
  })
  return result
}
