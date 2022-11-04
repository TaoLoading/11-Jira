import styled from '@emotion/styled'
import { HTMLAttributes } from 'react'

interface propsType extends HTMLAttributes<any> {
  gap?: number | boolean | undefined,
  between?: boolean,
  marginBottom?: number
}

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props: propsType) => props.between ? 'space-between' : undefined};
  margin-bottom: ${(props: propsType) => typeof props.marginBottom === 'number' ? props.marginBottom + 'rem' : props.marginBottom ? '2rem' : undefined};
  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    /* 通过传入props来自定义右边距 */
    margin-right: ${(props: propsType) => typeof props.gap === 'number' ? props.gap + 'rem' : props.gap ? '2rem' : undefined};
  }
`
