import React from 'react'
import {Link, Outlet} from "react-router-dom"
const Layout = () => {
  return (
    <>
      <div style={{margin:"auto", justifyContent:"center",alignItems:"center", display:"flex"}}>
               <Link to={"home"}>home</Link>||
                <Link to={"about"}>about</Link>||
                <Link to={"display"}>display</Link>
      </div>
      
      <Outlet/>

    </>
  )
}

export default Layout