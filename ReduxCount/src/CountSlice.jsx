import { createSlice } from "@reduxjs/toolkit";


const countSlice = createSlice({
      name:"mycount",
      initialState:{
          count:0
      },
       reducers:{
             increment:(state)=>{
                //   state.count=state.count+1
                state.count++
             },

             decrement:(state)=>{
                //    state.count=state.count-1
                 if(state.count>0){
                       state.count--
                 }
               
             }
       }
})

 export const {increment,decrement} = countSlice.actions
export default countSlice.reducer