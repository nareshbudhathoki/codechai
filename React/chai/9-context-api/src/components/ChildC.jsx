import React from 'react'
import { useUser } from '../contexts/context'

function ChildC() {
  const {userName, password} = useUser();
  return (
    <div>
      This is child C innermost components
      <p>{userName}</p>
      <p>{password}</p>
    </div>
  )
}

export default ChildC
