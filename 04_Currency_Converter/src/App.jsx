import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './components'

function App() {
 const [amount, setAmount] = useState(0)
 const [from, setfrom] = useState("usd")
 const [to, setTo] = useState("pkr")
 const [convertedAmount, setconvertedAmount] = useState(0)

 const currencyInfo = useCurrencyInfo(from )

  return (
    <>
      <h1 className='text-3xl text-center text-white bg-violet-500'>Currency Converter</h1>
    </>
  )
}

export default App
