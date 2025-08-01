
import './App.css'
 import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './CountSlice'
function App() {

     const myval = useSelector((state)=>state.mycount.count)
     const dispatch = useDispatch()
  return (
    <>
      <h1>Redux</h1> {myval}

      <button onClick={()=>{dispatch(increment())}}>increment</button>

           
      <button onClick={()=>{dispatch(decrement())}}>decrement</button>





     
      

    </>
  )
}

export default App
