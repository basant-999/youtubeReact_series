import { useState } from "react"

function App() {

  // const student = [
  //      {
  //        city:"bhopal",
  //        email:"basant123@gmail.com",
  //        password:1234
  //      },
  //       {
  //        city:"sihore",
  //        email:"kisan123@gmail.com",
  //        password:1234456
  //      },
  //       {
  //        city:"indore",
  //        email:"bipin123@gmail.com",
  //        password:1234567
  //      },
  // ]


  const [student,Setstudent] = useState([
           {
         city:"bhopal",
         email:"basant123@gmail.com",
         password:1234
       },
        {
         city:"sihore",
         email:"kisan123@gmail.com",
         password:1234456
       },
        {
         city:"indore",
         email:"bipin123@gmail.com",
         password:1234567
       },
         
  ])


     const handlesub=(city)=>{
          const update = student.filter(item=>item.city != city)

          console.log(update)
            Setstudent(update)
     }
  return (
    <>
       <h1>Map and Filter </h1>

       <table border="2px">
           <thead>
               <tr>
                   <th>sn</th>
                   <th>city</th>
                   <th>email</th>
                   <th>password</th>
                   <td>del</td>
               </tr>
           </thead>

           <tbody>
                 {
                   student.map((item,index)=>{
                       return(
                        <>
                          <tr>
                             <td>{index+1}</td>
                            <td>{item.city}</td>
                             <td>{item.email}</td>
                              <td>{item.password}</td>
                              <td><button onClick={()=>{handlesub(item.city)}}>delete</button></td>
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

export default App
