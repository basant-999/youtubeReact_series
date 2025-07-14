import React, { useMemo, useState } from 'react'

const Pageone = () => {
      const [mudata,Setmydata] = useState(0)
      const [sub,Setsub] = useState(10)

      const multi=()=>{
         console.log("calculation multipication")
      }

      const result = useMemo(multi,[mudata])
  return (
    <>
      
         <h1>multi result {result}</h1>
        <h2>my data :{mudata}</h2>
       <button onClick={()=>{Setmydata(mudata+1)}} > increment</button>
       <h2>sub value:{sub}</h2>
       <button onClick={()=>{Setsub(sub-1)}}>decrement</button>
    </>
  )
}

export default Pageone