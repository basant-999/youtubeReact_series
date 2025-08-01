import { createSlice } from "@reduxjs/toolkit";

const Todoslice = createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
          Addtodo:(state,actions)=>{
                //  console.log(actions.payload) 
                 state.task.push(actions.payload)
          },

          deleteTodo:(state,actions)=>{
            //   console.log(actions.payload)
            state.task = state.task.filter(item=>item.id !== actions.payload.id)
          },

          cmp:(state,actions)=>{
            // console.log(actions.payload)
            //   for(let i=0; i<state.task.length;i++){
            //       if(state.task[i].id == actions.payload.id){
            //           state.task[i].cmpstatus=true
            //       }
            //   }

            const task = state.task.find(t=>t.id === actions.payload.id)

            if(task){
                 task.cmpstatus = true
            }
          },

          inc:(state,actions)=>{
            //      console.log(actions.payload)
            //   for(let i=0; i<state.task.length;i++){
            //       if(state.task[i].id == actions.payload.id){
            //           state.task[i].cmpstatus=false
            //       }
            //     }

            
            const task = state.task.find(t=>t.id === actions.payload.id)

            if(task){
                 task.cmpstatus = false
            }
          },

          update:(state,actions)=>{
            //   console.log(actions.payload)
            const {id,work} = actions.payload

            const todo = state.task.find(item=>item.id===id)
            if(todo){
                 todo.work = work
            }

          }



    }
})

export const {Addtodo,deleteTodo,cmp,inc,update} = Todoslice.actions
export default Todoslice.reducer