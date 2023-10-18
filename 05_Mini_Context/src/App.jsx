import UserContextProvider from "./context/UserContextProvider"
import './App.css'
import Login from "./components/Login"
import Profile from "./components/profile"
function App() {

  return (
    <UserContextProvider>
      <h1>First project with Context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
