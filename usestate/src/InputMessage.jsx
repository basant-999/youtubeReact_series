

import React, { useState } from 'react'

const InputMessage = () => {
    const [Name,SetName] = useState("")
  return (
    <>
        <input type="text" value={Name} onChange={(e)=>{SetName(e.target.value)}}/>
        <span>
            Your Name is : {Name}
        </span>
    </>
  )
}

export default InputMessage