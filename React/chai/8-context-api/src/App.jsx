import { useState } from 'react'
import Navbar from './components/Navbar'
import Billion from './components/Billion'
import Button from './components/Button'
import { counterContext } from './contexts/context'

function App() {
  const [count, setCount] = useState(0)


  return (
    <counterContext.Provider value={{count, setCount}}>
      <button onClick={()=>setCount(prev=>prev+1)}>count-increase </button>
      <h1>counter:{count}</h1>
      <Navbar></Navbar>
    </counterContext.Provider>
  )
}

export default App
