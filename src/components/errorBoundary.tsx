/**
 * 渲染阶段出错时的错误页（错误边界）
 * 
 * 错误边界组件只能是class组件，其中传参的类型是固定的
 * 
 * 参考react-error-boundary
 */

import React, { Component } from 'react'

type FullBackRenderType = (props: { error: Error | null }) => React.ReactElement

export class ErrorBoundary extends Component<{ children: React.ReactNode, fullbackRender: FullBackRenderType }, { error: Error | null }> {
  state = { error: null }

  // 当子组件抛出异常时会调用该方法，给error赋值
  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  render() {
    const { error } = this.state
    const { children, fullbackRender } = this.props

    if (error) {
      return fullbackRender({ error })
    } else {
      return children
    }
  }
}

export default ErrorBoundary