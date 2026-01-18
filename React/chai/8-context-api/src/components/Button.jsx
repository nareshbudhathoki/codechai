import React from 'react'
import Billion from './Billion'
import { useContext } from 'react'
import { counterContext } from '../contexts/context'

function Button() {
  const value = useContext(counterContext)
  return (
    <div>
      <button onClick={()=>value.setCount(prev=>prev+1)}>
        <span><Billion/></span>
        click me!  
      </button>
    </div>
  )
}

export default Button
