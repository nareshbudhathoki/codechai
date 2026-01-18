import { useState } from 'react'
import { ThemeContextProvider } from './contexts/context'
import ChildA from './components/ChildA'

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeContextProvider value={{theme, setTheme}}>
      <div id='container' style={{backgroundColor: theme==="light"?"beige":theme}}>      
        <ChildA/>
      </div>
    </ThemeContextProvider>
  )
}

export default App
