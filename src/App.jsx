

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/blog/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import AddBlog from './pages/blog/AddBlog'
import EditBlog from './pages/blog/EditBlog'
import Single from './pages/blog/single/Single'



function App() {


  return (
   <BrowserRouter>
   <Routes>

    <Route  path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/add" element={<AddBlog />} />
    <Route path="/edit/:id" element={<EditBlog/>} />
    <Route path="/blog/:id" element={<Single/>} />
    
    

   </Routes>
   </BrowserRouter>
   
   
  )
}

export default App
