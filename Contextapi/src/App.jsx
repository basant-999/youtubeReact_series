import { useContext } from "react"
import Authcontext from "./AuthContext"
import Auth from "./Auth"
import Unauth from "./Unauth"

function App() {
    const {user} = useContext(Authcontext)
    //  console.log(basant)
  return (
    <>
     
     <h1> context api  </h1>
     <h1>my login app</h1>

    {user.auth ? <Auth/>:<Unauth/>}
   

      
    </>
  )
}

export default App
