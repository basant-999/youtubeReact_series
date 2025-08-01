import React, { children, useState } from 'react'
import Authcontext from './AuthContext'
const Authprovider = ({children}) => {
      const [user,Setuser] = useState({name:"",auth:false})

      const login=(username)=>{
         Setuser({name:username,auth:true})
      }

      const logout=()=>{
         Setuser({name:"",auth:false})
      }
  return (
    <>

     <Authcontext.Provider value={{user,login,logout}}>
          {children}
     </Authcontext.Provider>
       
    </>
  )
}

export default Authprovider