import { useState } from "react"
import './index.css'
import './App.css'

function App() {
  const [color,setColor]=useState("olive")

  return (
   <div className="w-full h-screen duration-200" 
   style={{backgroundColor:color}}>

<div className="justify-center fixed flex flex-wrap px-2 bottom-12 inset-x-0"></div>
<div className="flex flex-wrap justify-center bg-white gap-3 shadow-lg px-3 py-2 round-3xl">

  <button
  onClick={()=>{
    setColor("red")
  }}
  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor:"red"}}
  >Red</button>
   <button
   onClick={()=>{
    setColor("green")
  }}
   className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor:"green"}}
  >Green</button>
   <button
   onClick={()=>{
    setColor("blue")
  }}
   className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor:"blue"}}
  >Blue</button>
   <button
   onClick={()=>{
    setColor("brown")
  }}
   className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor:"brown"}}
  >Brown</button>

 <button
   onClick={()=>{
    setColor("purple")
  }}
   className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor:"purple"}}
  >Purple</button>
  <button
   onClick={()=>{
    setColor("pink")
  }}
   className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor:"pink"}}
  >Pink</button>
</div>
   </div>
  
  )
}

export default App
