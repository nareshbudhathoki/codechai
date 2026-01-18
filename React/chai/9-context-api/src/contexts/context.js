import { use } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = UserContext.Provider;

export const useUser = ()=>{
  const context = useContext(UserContext)
  if(context === null || context === undefined){
    throw new Error("useUser must be used within a UserProvider")
  }
  else{
    return context;
  }
}