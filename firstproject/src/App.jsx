
import React from 'react'
import bk from "./img/smartwatch.jpg"
import "./css/image.css"
import Home from './component/Home'
import About from './component/About'
const App = () => {
  return (
    <>

   <Home/>
   <About/>
     <div>
         <img src="botal.jpg" alt=""  style={{height:"400px",width:"300px"}}/>
     </div>
      <h1>this is my firstproject</h1>
     
    
    <div>
        <img src={bk} alt="" id='images' />
    </div>
     
    </>
  )
}

export default App