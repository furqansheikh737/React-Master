import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const {setUser} = useContext(UserContext)

    const submitHandler = (e) =>{
      e.preventDefault();
      setUser({username, password})
    }
  return (
    <div className='flex flex-col mt-10'>
        <h2 className='font-bold text-3xl mb-4'>LogIn</h2>
        <input className='px-4 py-3 m-4 rounded' type='text' placeholder='username' value={username} onChange={(e) => setusername(e.target.value)}></input>
        { " "}
        <input className='px-4 py-3 m-4 rounded' type='password' placeholder='username' value={password} onChange={(e) => setpassword(e.target.value)}></input>
        { " "}
        <button className='px-4 py-3 m-4 rounded' onClick={submitHandler}>Log In</button>
    </div>
  )
}

export default Login