import { useState } from 'react'
import ChildA from './components/ChildA'

import { UserContextProvider } from './contexts/context'
import { useUser } from './contexts/context'

function App() {

  const [userName,  setUserName] = useState("Jenith");
  const [password, setPassword] = useState("pass12345");
  return (
    <UserContextProvider value={{userName, password}}>
      <ChildA/>
    </UserContextProvider>
  )
}

export default App
