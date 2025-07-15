import React, { useRef, useState } from 'react'

const Render = () => {
    const [count ,Setcount] = useState(0)

    const myref = useRef(1)
    console.log(myref)
    myref.current ++
  return (
  <>

  <h2>count:{count}</h2>


    <h3>render count:{myref.current}</h3>

  <button onClick={()=>{Setcount(count+1)}}>+1</button>
      
  </>
  )
}

export default Render