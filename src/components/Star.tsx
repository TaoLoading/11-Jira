/**
 * 收藏组件（小星星）
 */

import { Rate } from 'antd'
import React from 'react'

interface starPropsType extends React.ComponentProps<typeof Rate> {
  checked: boolean,
  onCheckedChange?: (checked: boolean) => void
}

export const Star = (props: starPropsType) => {
  const { checked, onCheckedChange, ...restProps } = props

  return (
    <Rate
      {...restProps}
      count={1}
      value={checked ? 1 : 0}
      onChange={(num) => onCheckedChange?.(Boolean(num))}
    />
  )
}

