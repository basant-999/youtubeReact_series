import React from 'react'
import ProductData from './data'
import { useNavigate } from 'react-router-dom';
const Products = () => {
    console.log(ProductData);
    const navigate = useNavigate()
  return (
    <>
        <h3>Products</h3>
        {
            ProductData.map((key)=>{
                return(
                    <>
                        NAME : {key.Name}
                        <br />
                        Price : {key.Price}
                        
                        <button onClick={()=>{navigate(`/Details/${key.id}`)}}>Show Data</button>
                        <br />
                        <br />
                    </>
                )
            })
        }
    </>
  )
}

export default Products