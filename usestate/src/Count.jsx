

import React, { useState } from 'react'

const Count = () => {
    const [Count ,setCount]=useState(0);
    

  return (
    <>
        <div>
           <button 
            onClick={()=>{setCount(Count-1)}}
           >-</button>
           
            {Count}
           
           <button 
            onClick={()=>{setCount(Count+1)}}
           >+</button> 
        </div>
    </>
  )
}

export default Count