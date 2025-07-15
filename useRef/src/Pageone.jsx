import React, { useRef } from 'react'

const Pageone = () => {

    const myref = useRef("")
         console.log(myref)
     const first=()=>{
        console.log("first")

        myref.current.style.fontSize = "50px"

  }

   const second=()=>{
    myref.current.style.backgroundColor = "black"
    
  }

   const third=()=>{

    myref.current.style.fontSize = ""
    
  }
  return (
   <>

     <button onClick={first}>click me</button>
     <button onClick={second}>click me</button>
     <button onClick={(third)}>click me</button>

     <div ref={myref}>
         basant kushwaha
     </div>

   </>
  )
}

export default Pageone