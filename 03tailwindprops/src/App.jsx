import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"miftah",
    age:23
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>
        
        \tailwind test</h1>
<Card username="chai or code" btnText="visit me"/>
      
    </>
  )
}

export default App
