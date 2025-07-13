
import React from 'react'
import Pageone from './Pageone'
import Pagetwo from './Pagetwo'
import Student from './Array'
import Studenttable from './Studenttable'

const App = () => {
  const Page=({bname,fess})=>{
    return(
      <>
         <h2>name: {bname}</h2>
         <h2>fess {fess}</h2>
      </>
    )
  }
  return (
   <>

  <h1>props</h1>
  <Page  bname="basant" fess="400"/>
  <Pageone brand="nike" price="3000"/>


  <Pagetwo/>

 
  <Studenttable  data={Student} />
   </>
  )
}

export default App