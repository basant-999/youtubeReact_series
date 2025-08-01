import { createContext, useContext, useState } from "react";

const usercontext = createContext()

export const CardProvider = ({children})=>{
    const [cart ,Setcart] = useState([])

    const addtocart =(product)=>{
         Setcart(pre=>[...pre,product])
    }

    return(
         <usercontext.Provider value={{cart,addtocart}}>
            {children}

         </usercontext.Provider>
    )
}

export const usecart =()=>useContext(usercontext)

export default useContext