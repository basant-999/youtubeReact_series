import axios from "axios"
import { useEffect, useState } from "react"


function App() {

  const [input,Setinput] = useState({
    task:"",tasktype:""
      
  })

  const [mydata,Setmydata] = useState([])

    const handlesubmit=(e)=>{
          let name = e.target.name
          let value = e.target.value

          Setinput(val=>({...val,[name]:value}))
          console.log(input)
    }

    const finalsubmit=()=>{
            const duplicate = mydata.some((key)=>{
                 return(
                  key.task == input.task && key.tasktype ===input.tasktype
                 )
            })

            if(duplicate){
                alert("alredy added")
                return
            }
           axios.post("http://localhost:3000/student",input).then(()=>{
                alert("addtask sucess!!")
           })
         
           loaddata()
           Setinput({
             task:"",
             tasktype:""
           })
    }

      const loaddata=async()=>{
          const respo = await axios.get("http://localhost:3000/student")
          console.log(respo.data)
          Setmydata(respo.data)
      }

         const deletetask=(id)=>{
              //  console.log(id)
               axios.delete(`http://localhost:3000/student/${id}`)
               .then(()=>{
                  alert("deleted")
                  loaddata()
               })
         }

          const editdata=(id)=>{
                const toedit = mydata.find(key=>key.id===id)

                if(toedit){
                      Setinput({
                         task:toedit.task,
                         tasktype:toedit.tasktype
                      })
                }
          }



      useEffect(()=>{
          loaddata()
      },[])

       


      const ans = mydata.map((key)=>{
         return(
          <>
            <div style={{
               border:"1px solid gray",
               padding:"8px",
               borderRadius:"6px",
                display:"flex",
                justifyContent:"space-between",
                 alignItems:"center",
                 background:"#f5f5f5",
                width:"300px",
                margin:"8px"
            }}>

                <div style={{display:"flex",alignItems:"center"}}>

                   <p style={{fontSize:"16px", margin:"5px"}}>{key.task}</p>
                  <p style={{fontSize:"14px",color:"#555"}}>{key.tasktype}</p>

                </div>


                  <button style={{
                    background:"#e74c3c",  
                    border:"none",
                    padding:"5px 10px",
                    borderRadius:"5px"
                  }}  onClick={()=>deletetask(key.id)}>Delete</button>

                    <button onClick={()=>editdata(key.id)}>edit</button>

                  
               
            </div>
             
          </>
         )
      })

  return (
    <> 
         <h1>json-Todo-App</h1>
       Enter:  <input type="text" value={input.task}  name="task" onChange={handlesubmit} />
          <select name="tasktype" value={input.tasktype} id="" onChange={handlesubmit}>
               <option disabled>select your work</option>
               <option value="js">js</option>
               <option value="html">html</option>
               <option value="react">react</option>
          </select>

          <button onClick={finalsubmit}>add</button>

          {ans}
    </>
  )
}

export default App
