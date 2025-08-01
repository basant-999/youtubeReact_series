import React from 'react'
import { useContext } from 'react'
import Authcontext from './AuthContext'

const Auth = () => {
    const {user,logout} = useContext(Authcontext)
  return (
   <>
    
    <h2>welcom {user.name} </h2>

    <button onClick={logout}>logout</button>
     
   </>
  )
}

export default Auth