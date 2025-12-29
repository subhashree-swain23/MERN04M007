
import './App.css'
import Home from './Home'
import Home2 from './Home2'
import Card from './component/Card'

function App() {

  let obj={
    name:"xyz",
    age:30,
    phone:23456
  }
  let handleFun=()=>{
    console.log("Hii this is handle function")
  }

  return (
    <>

   <h1>Hello</h1>
   <Home a={20} str={"hii"} isTrue={true} arr={[1,2,3,4]}
   obj={obj} func={handleFun}/>

   <Home2 b={40} obj={obj}>
   <button>button</button>
   <p>this is a paragraph</p>
   <p>this is bold</p>
   </Home2>

   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
    </>
  )
}

export default App
