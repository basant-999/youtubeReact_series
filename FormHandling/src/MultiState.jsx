import React, { useState } from 'react'

const MultiState = () => {
       const [mydata,Setmydata] = useState({
          name:"",
          address:"",
          email:"",
          password:""
       })

       const handlesubmit=(e)=>{
              let name = e.target.name
              let value = e.target.value

              Setmydata((item)=>({...item,[name]:value}))
            //   console.log(mydata)
       }

       const finalsubmit=()=>{
             console.log(mydata)
             alert("form submmeted")
             Setmydata({
                        name:"baant",
                address:"",
                email:"",
                password:""

             })
       }
  return (
    <>
      <input type="text" placeholder='enter your name' name='name' value={mydata.name} onChange={handlesubmit} /> <br />
      <input type="text" placeholder='enter your address' name='address' value={mydata.address} onChange={handlesubmit} /> <br />
      <input type="email" placeholder='enter your email' name='email' value={mydata.email} onChange={handlesubmit} /> <br />
      <input type="number" placeholder='enter your password' name='password' value={mydata.password}  onChange={handlesubmit}/> <br />

      <button onClick={finalsubmit}>submit</button>

    </>
  )
}

export default MultiState