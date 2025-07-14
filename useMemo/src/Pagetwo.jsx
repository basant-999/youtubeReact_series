import React, { useMemo, useState } from 'react'

const Pagetwo = () => {
      const [num,Setnum] = useState(0)
      const [city,Setcity] = useState("")

      function res(){
          console.log("###############")
          for(let i=0; i<100000;i++){
            return num *3
          }
      }

    //   const result = useMemo(res,[num])
    const result = useMemo(()=>{
          return res ()
    },[num])
  return (
  <>

      Enter number: <input type="number" onChange={(e)=>{Setnum(e.target.value)}} /> <br />
      Enter city: <input type="text"  onChange={(e)=>{Setcity(e.target.value)}} /> <br />

      {result}
  </>
  )
}

export default Pagetwo