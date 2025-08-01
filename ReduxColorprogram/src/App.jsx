
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useState } from 'react'
import { changecolor } from './ColorSlice'

function App() {
    const [col,Setcol] = useState("")

  const ans = useSelector((state)=> state.rung.color)
  const dispatch = useDispatch()

  return (
    <>
     <h1>Color program reduxToolkit</h1>
     {ans}

     Enter color: <input type='text' onChange={(e)=>{Setcol(e.target.value)}} />
     <button onClick={()=>{dispatch(changecolor(col))}}>click</button>

     <div style={{height:"200px",width:"300px", backgroundColor:ans}}>
        
     </div>
    </>
  )
}

export default App
