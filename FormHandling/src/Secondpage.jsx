import React, { useState } from 'react'

const Secondpage = () => {
    const [email ,Setemail] = useState("")
    const [password,Setpassword] = useState("")

    const final=(e)=>{
         e.preventDefault()
          console.log(email,password)
    }
  return (
   <>
      <input type="email" placeholder='enter your email' onChange={(e)=>{Setemail(e.target.value)}} /> <br />
      <input type="number" placeholder='enter your password' onChange={(e)=>{Setpassword(e.target.value)}}  /> <br />

      <button onClick={final} type='submit'>submit</button> 

   </>
  )
}

export default Secondpage