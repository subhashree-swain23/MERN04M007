
import { Routes,Route } from 'react-router'
import './App.css'
import Home from './Component/Home'
import About from './Component/About'
import Service from './Component/Service'
import Nav from './Component/Nav'
import Profile from './Component/Profile'

function App() {
  

  return (
    <>
      <div>
        <Nav></Nav>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
          <Route path='/profile/' element={<Profile/>}></Route>
        
      </Routes>
      </div>
    </>
  )
}

export default App
