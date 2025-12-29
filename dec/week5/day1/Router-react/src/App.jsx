import { Routes,Route } from 'react-router'
import './App.css'
import About from './Component/About'
import Dashboard from './Component/Dashboard'
import Home from './Component/Home'
import Login from './Component/Login'
import Service from './Component/Service'
import Profile from './Component/Profile'
import Cart from './Component/Cart'



function App() {
  

  return (
  <div>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/dashboard'element={<Dashboard/>}>
      <Route path='profile/:id' element={<Profile/>}></Route>
      <Route index element={<Cart/>}></Route>
    </Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Service' element={<Service/>}></Route>
    
   </Routes>
  </div>
  )
}

export default App
