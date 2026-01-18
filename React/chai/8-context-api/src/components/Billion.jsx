import React, { useContext } from 'react'
import { counterContext } from '../contexts/context'

function Billion() {
  const value = useContext(counterContext)
  return (
    <>
    <h1>Increase the amount to billion: {value.count}</h1>
    </>
  )
}

export default Billion
