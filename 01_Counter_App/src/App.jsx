import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    if (count >= 20) {
    } else {
      setCount(count + 1)
    }
  }

  const removeValue = () => {
    if (count <= 0) {
    } else {
      setCount(count - 1)
    }
  }

  return (
    <>
      <div className='rounded p-16 bg-black'>
        <h1 className='text-3xl text-white text-center font-bold'>Counter App: {count}</h1>
        <button onClick={addValue} className='mt-4 ml-11 p-4 rounded bg-gray-500 text-white'>Increment</button>
        <br />
        <button onClick={removeValue} className='mt-4 ml-11 p-4  rounded bg-gray-500 text-white'>decrement</button>
      </div>
    </>
  )
}

export default App
