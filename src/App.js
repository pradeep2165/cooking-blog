import React from 'react'
import Navbar from './components/Navbar'
import { CssBaseline } from "@mui/material"
import Home from './components/Home'
const App = () => {
  return (
    <div>
        <CssBaseline/>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
