
import { useEffect, useRef, useState } from 'react'
import './App.css'
import Home from './assets/Home';

function App() {
 
let nameRef = useRef();

// useEffect(()=> {
// console.log(nameRef.current.innerText);
// }, []);

// const [input, setInput] = useState("");

let inputRef = useRef()

useEffect(()=>{
  console.log(inputRef.current.value)
},[])

function handleSubmit(e) {
  e.preventDefault()
  console.log(inputRef.current.value);

  localStorage.setItem("name",inputRef.current.value);
}

console.log("render")

  return (
   <div>
    {/* <p ref={nameRef}>Lorem ipsum dolor sit.</p> */}

    <form action="" onSubmit={handleSubmit}>
      {/* <input type="text" onChange={()=>setInput(e.target.value)} /> */}
      <input type="text" ref={inputRef}/>
      <button>submit</button>
    </form>
    <Home/>
   </div>
  )
}

export default App
