/**
 * 用于渲染id相关的选择框
 * 
 * 原因：原始组件和数据中的id类型不一致，导致渲染出错，此组件将id全转为number
 */

import React from 'react'
import { Select } from 'antd'

// 拿到Select组件的全部属性及其类型
type SelectPropsType = React.ConsumerProps<typeof Select>

interface IDSelectType extends SelectPropsType {
  value: number | string | null | undefined,
  onChange: (value?: number) => void,
  defaultOptionsName?: string,
  options?: { name: string, id: number }[]
}

const toNumber = (value: unknown) => isNaN(Number(value)) ? 0 : Number(value)

/**
 * 当 isNaN(Number(value)) 为true时，代表value不是个有效的id，即为默认的选项
 * 当 isNaN(Number(value)) 为false时，代表value是传入的有效id，即为获取到的每个选项
 */
export const IDSelect = (props: IDSelectType) => {
  const { value, onChange, defaultOptionsName, options, ...restProps } = props

  return (
    <Select value={toNumber(value)} onChange={value => onChange(toNumber(value) || undefined)} {...restProps}>
      {
        defaultOptionsName ? (<Select.Option value={0}>{defaultOptionsName}</Select.Option>) : null
      }
      {
        options?.map(options => <Select.Option key={options.id} value={options.id}>{options.name}</Select.Option>)
      }
    </Select>
  )
}
