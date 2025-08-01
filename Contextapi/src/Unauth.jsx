import React, { useState } from 'react'
import { useContext } from 'react'
import Authcontext from './AuthContext'

const Unauth = () => {
    const [val,Setval] = useState("")
    const {login} = useContext(Authcontext)
  return (
   <>
       <input type="text"
         value={val}
         onChange={(e)=>{Setval(e.target.value)}}
        />
        <button onClick={()=>login(val)}>login</button>
   </>
  )
}

export default Unauth