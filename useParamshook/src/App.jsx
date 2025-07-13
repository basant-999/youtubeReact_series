import {Routes,BrowserRouter,Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Products from "./Products";
import DetailedProducts from "./DetailedProducts";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="Details/:id" element={<DetailedProducts/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
