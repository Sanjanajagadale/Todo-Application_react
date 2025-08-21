import { useState ,} from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import 'bootstrap/dist/css/bootstrap.min.css'
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
import ToDoForm from './component/ToDoForm'
import { ToDoProvider } from './context/ToDoContext'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <ToDoProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/createTask" element={<ToDoForm/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      </ToDoProvider>
      </BrowserRouter>
    </>
  )
}

export default App
