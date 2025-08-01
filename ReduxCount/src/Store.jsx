import { configureStore } from "@reduxjs/toolkit";

import myreduce from "./CountSlice"

const store = configureStore({
      reducer:{
           mycount:myreduce
      }
})

export default store