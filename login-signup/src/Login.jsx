import axios from 'axios'
import React, { useState } from 'react'
import Dashboard from './Dashboard'


const Login = () => {
     const [username,Setusername] = useState("")
        const [Password,Setpassword] = useState("")
        const [data,Setdata] = useState(false)

          const finalsubmit=async(e)=>{
              e.preventDefault()
              try {
                 const res= await axios.get("http://localhost:3000/user")
                   const users = res.data 
                    // console.log(users)
                  const founduser = users.find((u)=>u.username === username)
                  console.log(founduser)

                  if(!founduser){
                     alert("user not fund")
                     return
                  }

                  if(founduser.Password !== Password){
                        alert("incorrect passwpod")
                        return
                  }

                  alert("successful login")
                  Setdata(true)
              
              } catch (error) {
                 console.log(error)
              }
          }

          if(data){
             return <Dashboard/>
          }

           
  return (
      <>
            <h1>login</h1>
         <div>
              <form action="">
                    
                   Enter username <input type="text"  value={username} onChange={(e)=>{Setusername(e.target.value)}}  /> <br />
                    Enter password <input type="text" value={Password} onChange={(e)=>{Setpassword(e.target.value)}}  /> <br />
                    <button onClick={finalsubmit}>login</button>
              </form>
         </div>
      </>
  )
}

export default Login