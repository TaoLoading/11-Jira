import { useArray } from '../../utils'

interface PersonType {
  name: string,
  age: number
}

export const HookTest = () => {
  const person: PersonType[] = [
    { name: 'xiaoming', age: 22 },
    { name: 'xiaohong', age: 22 },
  ]
  const { value, clear, removeIndex, add } = useArray(person)

  return (
    <div>
      {/* 点击后添加John */}
      <button onClick={() => add({ name: 'John', age: 20 })}>add John</button>
      {/* 点击后移除第一项 */}
      <button onClick={() => removeIndex(0)}>remove 0</button>
      {/* 点击后清空列表 */}
      <button onClick={() => clear()}>clear</button>
      {/* 列表展示 */}
      {value.map((person: PersonType, index: number) => (
        <div style={{ marginBottom: '30px' }}>
          <span style={{ color: 'red' }}>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  )
}
