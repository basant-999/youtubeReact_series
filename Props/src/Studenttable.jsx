import React from 'react'

const Studenttable = ({data}) => {
   
  return (
    <>
       <table border={"2"}>
             <thead>
                  <tr>
                      <th>name</th>
                      <th>age</th>
                  </tr>
             </thead>
                     
              <tbody>
                 {
                      data.map((key)=>{
         return(
            <>
             <tr>
                  <td>{key.name}</td>
                  <td>{key.age}</td>
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

export default Studenttable