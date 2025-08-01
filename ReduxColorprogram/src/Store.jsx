import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./ColorSlice"

const store = configureStore({
     reducer:{
         rung:myreducer 
     }
})

export default store