import React, { useCallback, useState } from 'react'
import Child from './Child'

const Parent = () => {
      const [count,Setcout] = useState(0)
      const [task,SetTask] = useState([])

      const addTask = useCallback(()=>{
            SetTask(item=>[...item,"new task"])
      },[])
  return (
    <>
        <h1>parent component</h1>

      <p>Count:{count}</p>
      <button onClick={()=>{Setcout(count+1)}}> re-render</button>


      <Child task={task} addTask={addTask}/>
    </>
  )
}

export default Parent