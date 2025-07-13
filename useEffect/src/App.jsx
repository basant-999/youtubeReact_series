import { useEffect, useState } from "react"


const App = () => {
      const [Count ,setCount] = useState(0);
      const [Count2,setCount2] =useState(0);
      const [Count3,setCount3] =useState(0);
      const [Count4,setCount4] =useState(0);
      const [Count5,setCount5] =useState(0);
  useEffect(()=>{
    console.log("side effect")
  })
  return (
    <>
       <div>Count : {Count}</div>
       <div>Count2 : {Count2}</div>
       <div>Count3 : {Count3}</div>
       <div>Count4 : {Count4}</div>
       <div>Count5 : {Count5}</div>


       <button onClick={()=>{setCount(Count+1)}}>Add</button>
       <button onClick={()=>{setCount2(Count2+1)}}>Add2</button>
       <button onClick={()=>{setCount3(Count3+1)}}>Add3</button>
       <button onClick={()=>{setCount4(Count4+1)}}>Add4</button>
       <button onClick={()=>{setCount5(Count5+1)}}>Add5</button>
       
    </>
  )
}

export default App