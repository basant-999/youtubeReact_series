import {configureStore} from "@reduxjs/toolkit"
import mytodo from "./Todoslice"
const Store = configureStore({

    reducer:{
        todo:mytodo
    }

})

export default Store