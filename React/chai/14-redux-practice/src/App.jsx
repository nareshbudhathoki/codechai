import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply } from './redux/counter/counterSlice'

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <>
      <div>
        count: {count}
        <br />
        <br />
        <button onClick={() =>dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() =>dispatch(multiply())}>multiply by 2</button>
      </div>
    </>
  )
}

export default App
