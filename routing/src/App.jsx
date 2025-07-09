import { BrowserRouter ,Route,Routes } from "react-router-dom"
import Layout from "./Layout"
import HOme from "./pages/HOme"
import About from "./pages/About"
import Display from "./pages/Display"
import Contact from "./pages/Contact"
import Source from "./pages/Source"


function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
             <Route path="/" element={<Layout/>}>
              <Route index element={<HOme/>}/>
              <Route path="home" element={<HOme/>}/>
              <Route path="about" element={<About/>}>
                   <Route path="contact" element={<Contact/>}/>
                   <Route path="soucre" element={<Source/>}/>


               </Route>


              <Route path="display" element={<Display/>}/>
             </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
