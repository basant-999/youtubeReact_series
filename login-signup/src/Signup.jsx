import axios from 'axios'
import React, { useState } from 'react'
import Login from './Login'

const Signup = () => {
    const [username,Setusername] = useState("")
    const [Password,Setpassword] = useState("")

    const [data,Setdata] = useState(false)

     const finalsubmit= async(e)=>{
              e.preventDefault()
           
          try {

               const res = await axios.get("http://localhost:3000/user")
            //    console.log(res.data)
            const users = res.data

           

               const exituser = users.find((item)=>item.username === username)

            //    console.log(exituser)

                  if(exituser){
                       alert("already exists")
                       return
                  }

              const respose = axios.post("http://localhost:3000/user",{username,Password})
               alert("sucessful signup")
               Setpassword("")
               Setusername("")
               Setdata(true)
                 
           } catch (error) {
            console.log(error)
            
          }
     }

     if(data){
          return <Login/>
     }
  return (
   <>
       <div>
             <form action="">

                  Enter userName<input type="text" value={username} onChange={(e)=>{Setusername(e.target.value)}} /> <br />
                  Enter Password <input type="text" value={Password} onChange={(e)=>{Setpassword(e.target.value)}} /> <br />
                  <button onClick={finalsubmit}>submit</button>
             </form>
       </div>
   </>
  )
}

export default Signup