import { useState ,ro} from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDoForm from './component/ToDoForm'


import { ToDoProvider } from './contex/ToDoContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <ToDoProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="ToDoForm" >{<ToDoForm/>}</Route>
        <Route path="/About" element={<About/>}></Route>
      </Routes>
      </ToDoProvider>
      </BrowserRouter>
    </>
  )
}

export default App
