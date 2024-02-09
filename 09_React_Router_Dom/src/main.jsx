import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Layout, Home, About, Contact } from './components/index.jsx'
import {Route, RouterProvider, createBrowserRouter} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />
//       }, 
//       {
//         path: "/about",
//         element: <About />
//       },
//     ]
//   },
// ]);

const router = createBrowserRouter([
  createRoutesFromElements(
    <Route path="/" element= {<Layout />}>
        <Route path="" element= {<Home />} />
        <Route path="/about" element= {<About />} />
        <Route path="/contact" element= {<Contact />} />
    </Route>
  )
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider route={router} />
  </React.StrictMode>,
)
