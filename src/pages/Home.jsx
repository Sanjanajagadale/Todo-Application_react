import React from 'react'
import ToDoList from '../component/TodoList'

const home = () => {
  return (
     <div>
        <h1 className='text-center text-success '><b>To Do Application</b></h1>
        <ToDoList />
    </div>
    
  )
}

export default home