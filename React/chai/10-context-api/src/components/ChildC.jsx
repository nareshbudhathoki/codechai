import React from 'react'
import { useTheme } from '../contexts/context'

function ChildC() {
  const {theme, setTheme} = useTheme();

  const changeTheme =()=>{
    if(theme === "light"){
      setTheme("black")
    }else{
      setTheme("light")
    }
  }
  return (
    <>
    <div>
      <button onClick={changeTheme}>Change Theme</button>
      <p>{theme}</p>
    </div>
    </>
  )
}

export default ChildC
