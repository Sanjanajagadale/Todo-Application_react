import React, { createContext,useEffect,useReducer } from 'react'
import{initialState,reducer,} from './reducer'
import ToDoForm from '../component/ToDoForm'
const ToDoContext =createContext()

const ToDoProvider = ({children}) => {
    const [state,dispatch]=useReducer(reducer,initialState,(init)=>{
        try{

        
ToDoFormLoacl=JSON.parse(  localStorage.setItem('todoBatch1'))
return ToDoFormLoacl?.todos
        }catch{
return init
        }
})


useEffect(()=>{
    localStorage.setItem("todoBatch1",JSON.stringify(state))
})


  return (
   <ToDoContext.Provider value={{state,dispatch}}>
{children}
   </ToDoContext.Provider>
  )
}

export {ToDoContext,ToDoProvider}