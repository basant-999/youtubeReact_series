import { useReducer } from "react"


function App() {

  const bgcolor=(state,action)=>{
      switch(action){
          case"redcolor":
          return state="red"

          case "yellowcolor":
            return state="yellow"

            case "pinkcolor":
              return state="pink"

              case "blackcolor":
              return state="black"

           default:
           return state
      }

     

  }

   const [color,myredis] = useReducer(bgcolor,"green")
   console.log(color)
  return (
    <>
    <h1>useReducer hook</h1>

    <button onClick={()=>{myredis("redcolor")}}> red</button>
    <button onClick={()=>{myredis("yellowcolor")}}> yellow</button>
    <button onClick={()=>{myredis("pinkcolor")}}>pink</button>
    <button onClick={()=>{myredis("blackcolor")}}>black</button>
    <button onClick={()=>myredis("bluecolor")} >blue</button>


    <div style={{height:"400px", backgroundColor:color}}>

    </div>
    </>
  )
}

export default App
