import { createSlice } from "@reduxjs/toolkit";
import { ssrExportAllKey } from "vite/module-runner";

const ColorSlice = createSlice({
      name:"rung",
      initialState:{
         color:"red"
      },

      reducers:{
             changecolor:(state,actions)=>{
                  console.log(actions.payload)
                  state.color = actions.payload
             }
      }
})

export const {changecolor} = ColorSlice.actions

export default ColorSlice.reducer