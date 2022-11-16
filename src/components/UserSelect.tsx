import React from 'react'
import { useUser } from '../hooks/useUser'
import { IDSelect } from './IDSelect'

export const UserSelect = (props: React.ComponentProps<typeof IDSelect>) => {
  const { data } = useUser()

  return (
    <IDSelect options={data} {...props} />
  )
}
