import { Route, Routes } from 'react-router'
import './App.css'
import Foods from './Components/Foods'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Food from './components/Food'
import Login from './components/Login'
import Register from './components/Register'
import PrivateRout from './components/PrivateRout'


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/foods' element={<PrivateRout>
          <Foods/>
        </PrivateRout>}></Route>
        <Route path='/food/:id' element={<Food/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
 </>
  )
}

export default App