import { useEffect, useState } from "react"
import products from "./Products"
import { usecart } from "./Cart"

function App() {

    console.log(usecart)
    const {cart,addtocart} = usecart()
       const [Product ,Setproduct] = useState([])
       const [Search,Setsearch] = useState("")
       const [filter, Setfilter] = useState("")
       const [Color,Setcolor] = useState("")
       const [brand,Setbrand] = useState("")
       const [page,Setpage] = useState(1)
    //  useEffect(()=>{
    //      fetch('https://dummyjson.com/products')
    //      .then(res=>res.json())
    //      .then(data=>{
    //          Setproduct(data)
    //      })
    //      .catch(err=>console.log(err))
    //  },[])

    useEffect(()=>{
        Setproduct(products)  
    },[])

    // console.log(Product)

    let result = [...Product]


    if(Search){
       result = result.filter(item=>(
           item.productName.toLowerCase().includes(Search.toLowerCase()) || 
          item.brandName.toLowerCase().includes(Search.toLowerCase())
       ))
    }

    // filter ======================================================
         console.log(filter)
        if(filter=="asc"){
            result.sort((a,b)=>a.price-b.price)
        }

        if(filter=="desc"){
            result.sort((a,b)=>b.price-a.price)
        }

    // colors type search ==========================================

      const allcolors =  [...new Set(result.map(item=>item.color))]
       console.log(allcolors)
       console.log(Color)

       if(Color){
            result = result.filter(item=>item.color==Color)

       }

       //===========brand ===============================================


       const allbrands =  [...new Set(result.map(item=>item.brandName))]
      

       if(brand){
            result = result.filter(item=>item.brandName==brand)

       }
     

       

        


   

        const changepage = 2
        // console.log(result.length)

        const totatpage = Math.ceil(result.length/changepage)
        console.log(totatpage)

        const lastpage = changepage*page
        console.log(lastpage)
        const forstpage = lastpage-changepage
        console.log(forstpage)

        const pagestore = result.slice(forstpage,lastpage)
        console.log(pagestore)


         const ans  = pagestore.map((key)=>{
               return(
                <>
                   <h3>{key.productName}</h3>
                   <p>{key.brandName}</p>
                   <p>{key.price}</p>
                   <p>{key.color}</p>
                   <button onClick={()=>{addtocart(key)}}> addtocart </button>
              </>
               )
    })

      

     
  return (
    <>
            <h1>Filter-Search-project</h1>

            Search data :<input type="text" onChange={(e)=>{Setsearch(e.target.value)}} />

            filter : <select onChange={(e)=>{Setfilter(e.target.value)}} >
                       <option value="">select</option>
                       <option value="asc">asc</option>
                       <option value="desc">desc</option>

                     </select>

            allcolors : <select name="" id="" onChange={(e)=>{Setcolor(e.target.value)}}>
                          {
                             allcolors.map((key)=>{
                                 return(
                                  <>
                                     <option value={key}>{key}</option>
                                  </>
                                 )
                             })
                          }
                         </select>


             allbrand : <select name="" id="" onChange={(e)=>{Setbrand(e.target.value)}}>
                          {
                             allbrands.map((key)=>{
                                 return(
                                  <>
                                     <option value={key}>{key}</option>
                                  </>
                                 )
                             })
                          }
                         </select>

            {ans}
            
             

            

              {
                page<totatpage?(
                      <button onClick={()=>{Setpage(page+1)}}>next</button>
                ):(null)
              }

              {
                page>1 ?(
                     <button onClick={()=>{Setpage(page-1)}} >pre</button>
                ):(null)
              }

          
          {
              cart.map((item, i)=>(
                <li key={i}>{item.productName}</li>
              ))
          }
           

            
            
    </>
  )
}

export default App
