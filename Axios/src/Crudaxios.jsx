import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Crudaxios = () => {
    const [getmydat,Setgetmydata] = useState([])
    const [addform,Setaddform]  = useState({})
    const [editform,Seteditform] = useState({})

    const Addformdata=(e)=>{
          let {name,value} = e.target
          Setaddform({...addform, [name]:value})
    }

    const finaledit=(e)=>{
          let {name,value} = e.target
           Seteditform({...editform, [name]:value})
    }

    const mainfinaleditbutton=(e)=>{
           e.preventDefault()
          axios.put(`http://localhost:3000/student/${editform.id}`,editform)
          .then(()=>{
             alert("updated")
                 getdata()
          })
    }
    // console.log(editform)

    


     const addsummitformdata=(e)=>{
         e.preventDefault()
            
          axios.post("http://localhost:3000/student",addform)
          .then(()=>{
             alert("datat inserted")
          })
     }

     const getdata=()=>{
          axios.get("http://localhost:3000/student")
          .then(res=>{
            Setgetmydata(res.data)
              
          })
     }

    //  console.log(getmydat)

    const mydel=(id)=>{
        //   console.log(id)
        axios.delete(`http://localhost:3000/student/${id}`)
        .then(()=>{
            alert("deleted")
            getdata()
        })
    }


     useEffect(()=>{
          getdata()
     },[])
   
  return (
    <>

       <table style={{border:"2px"}}>
            <thead>
                  <tr>
                      <th>id</th>
                      <th>name</th>
                      <th>age</th>
                      <th>contact</th>
                      <th>city</th>
                  </tr>
            </thead>

            <tbody>
                  {
                      getmydat.map((key)=>(
                             <tr>
                              <td>{key.id}</td>
                              <td>{key.name}</td>
                              <td>{key.age}</td>
                              <td>{key.contact}</td>
                              <td>{key.city}</td>
                              <td> <button onClick={()=>{mydel(key.id)}}>delete</button></td>
                              <td><button onClick={()=>{Seteditform(key)}}>edit</button></td>
                             </tr>
                      )
                        
                         

                         
                      )
                  }
            </tbody>
       </table>
      <form action="">
             <label htmlFor="">name</label>
             <input type="text" name='name' onChange={Addformdata} /> <br />

              <label htmlFor="">age</label>
             <input type="text" name='age' onChange={Addformdata}  /> <br />

              <label htmlFor="">contact</label>
             <input type="text" name='contact'  onChange={Addformdata} /> <br />

              <label htmlFor=""> city</label>
             <input type="text"  name='city' onChange={Addformdata} /> <br />

             <button onClick={addsummitformdata}>add</button>
      </form>



       <form action="">
             <label htmlFor="">name</label>
             <input type="text" name='name' value={editform.name} onChange={finaledit} /> <br />

              <label htmlFor="">age</label>
             <input type="text" name='age' value={editform.age} onChange={finaledit}  /> <br />

              <label htmlFor="">contact</label>
             <input type="text" name='contact' value={editform.contact}  onChange={finaledit} /> <br />

              <label htmlFor=""> city</label>
             <input type="text"  name='city' value={editform.city} onChange={finaledit} /> <br />

             <button onClick={mainfinaleditbutton}>edit form</button>
      </form>
    </>
  )
}

export default Crudaxios