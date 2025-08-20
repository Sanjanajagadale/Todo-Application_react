import React, { useState } from 'react'


const ToDoForm = () => {
    const [name ,setName]= useState()
    const[Description, setDescription]=useState()
    const[state,dispatch]=useReducer(reducer,initialState)



    function handleSubmit(event){
        event.preventdefault

    }
  return (
    <>
    <div>
        <h1 clasName="text-center text-success">
            <b>To Do Application</b>
        </h1>
        <form>
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">task</label>
    <input type="text" class="form-control" id="exampleInputEmail1" />
    <div id="task" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" classNameclass="form-label">Password</label>
    <input type="description" class="form-control" id="description"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
    </>
  )
}


export default ToDoForm