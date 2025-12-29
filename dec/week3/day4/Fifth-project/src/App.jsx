
import { createContext } from 'react'
import './App.css'
import Child from './Child';

let nameContext = createContext(); // content object creation
let themeContext = createContext();
function App() {


  return (
    <>
      Today we are going to the const context 
    
      {
        /* 
        
        The steps to create the context object
  
        => use the createContext method to create the context object
        => use the context provider in the component
        => export the context object

        How to access the context in the other component

        => use the useContext() hook and pass the context object to the get the context data
         */
        
      }
      <nameContext.Provider value={"Sony"}>
        <themeContext.Provider value={"red"}> 
        <Child />
        </themeContext.Provider>
      </nameContext.Provider>

    </>
  )
}

export {nameContext,themeContext}
export default App
