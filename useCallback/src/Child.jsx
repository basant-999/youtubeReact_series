import React from 'react'

const Child = ({task,addTask}) => {
    console.log("child re render")
    console.log(task)
  return (
   <>
     <h1>child Component</h1>

     {
        task.map((key)=>(
            <p> {key}</p>
        ))
     }
     
     <button onClick={addTask}>addtask</button>


   </>
  )
}

export default React.memo (Child)