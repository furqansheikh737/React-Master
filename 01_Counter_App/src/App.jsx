import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <h1>Counter value: 5</h1>
      
      <button>Add value</button>
      <br/>
      <button>Delete value</button>
    </div>
  )
}

export default App
