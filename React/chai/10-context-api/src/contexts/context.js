import { createContext, useContext } from "react";

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ThemeContext.Provider;

export const useTheme=()=>{
  const context = useContext(ThemeContext);
  if(!context){
    throw new Error("use context provider")
  }else{
    return context;
  }
}