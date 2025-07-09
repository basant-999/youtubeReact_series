import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
const Display = () => {
      const navigate = useNavigate()
  return (
    <>
    <div>Display</div>
       <button onClick={()=>{navigate("/about")}}>navigate</button>

        <Outlet/>
    </>
  )
}

export default Display