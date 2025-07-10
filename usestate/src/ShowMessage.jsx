

import React, { useState } from 'react'

const ShowMessage = () => {
    const [message ,setMessage] = useState("Hello Basant");
    const handleMessage=()=>{
        setMessage("Welcome to Kishan")
    }
  return (
    <>
    <div>{message}</div>
    <button onClick={handleMessage}>Change</button>
    </>
  )
}

export default ShowMessage