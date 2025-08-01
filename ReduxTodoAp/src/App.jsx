import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Addtodo, deleteTodo,cmp,inc,update } from "./Todoslice"
function App() {
      const mytask = useSelector((state)=>state.todo.task)
      console.log(mytask)
      const [val,Setval] =useState("")
      const [Edit,Setedit] = useState(null)
      const dispatch = useDispatch()

      const myEdit =(id,work)=>{
          console.log(id,work)
           Setval(work)
           Setedit(id)
          
      }

      const ans = mytask.map((key)=>{
          console.log(key)
            return(
              <>
                  <tr>
                       <td>{(key.cmpstatus)?(<>
                             <div style={{textDecoration:"line-through",color:"red"}}>  {key.work}</div>
                       </>):(
                           <>
                              {key.work}
                           </>
                      )}</td>

                      
                      


                      <td><button onClick={()=>{dispatch(deleteTodo({id:key.id}))}} >Delete</button></td>

                      <td> <button onClick={()=>{dispatch(cmp({id:key.id}))}}>complate</button></td>

                      <td><button onClick={()=>{dispatch(inc({id:key.id}))}}>incomplate</button></td>

                      <td>
                           <button onClick={()=>{myEdit(key.id,key.work)}}>Edit</button>
                      </td>
                  </tr>
              </>
            )
      })
  return (
    <>
          <h1> Redux Todo App </h1>

          Enter todo : <input value={val} onChange={(e)=>{Setval(e.target.value)}}/>
            <button  onClick={()=>{dispatch(Addtodo({work:val,id:Date.now(),cmpstatus:false}),Setval(""))}} >Add</button>

            <button onClick={()=>{dispatch(update({work:val, id:Edit}),
            Setval(""),
                Setedit(null)  
              )}}>
                  Save
            </button>

            

            <table>
                <thead>
                    <tr>
                       
                    </tr>
                </thead>

                <tbody>
                     {ans}
                </tbody>
            </table>
    </>
  )
}

export default App
