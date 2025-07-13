import React from 'react'
import { useParams } from 'react-router-dom'
import ProductData from './data';

const DetailedProducts = () => {
    const {id}= useParams();
    console.log(id);
    const pro = ProductData.find(item=>item.id == id);
    console.log(pro);
  return (
    <>
        <h3> Products Detail</h3>
        <h4>NAME : {pro.Name}</h4>
        <h5>PRICE : {pro.Price}</h5>
        <h5>ID : {pro.id}</h5>
    </>
  )
}

export default DetailedProducts