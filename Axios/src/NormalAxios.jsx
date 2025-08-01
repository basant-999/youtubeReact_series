import React, { useEffect, useState } from 'react'
import axios from 'axios'
const NormalAxios = () => {
    const[mydata,Setmydata] = useState([])
    useEffect(()=>{
          axios.get( 'https://jsonplaceholder.typicode.com/todos')
          .then(res=>{
            // console.log(res.data)
            Setmydata(res.data)
          })
          .catch(err=>console.log("server error bk",err.message))
    },[])

    console.log(mydata)
  return (
   <>

   <table style={{border:"2px"}}>
      <thead>
         <tr>
              <th>id</th>
              <th>title</th>
              <th>userid</th>
         </tr>
      </thead>

      <tbody>
          {
             mydata.map((key)=>{
                return(
                    <>
                      <tr>
                          <td>{key.id}</td>
                          <td>{key.title}</td>
                          <td>{key.userId}</td>
                      </tr>
                    </>
                )
             })
          }
      </tbody>
   </table>
     
   </>
  )
}

export default NormalAxios