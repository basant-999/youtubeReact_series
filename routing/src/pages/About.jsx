import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
   
    <>
        <div>About</div>
        <Link to={"contact"}>contact</Link> <br />
        <Link to={"soucre"}>source</Link>
   

     <Outlet/>
    </>
  )
}

export default About