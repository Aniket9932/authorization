import React from 'react'
import Header from './components/Header'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Logout from './components/Logout'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>

    </Router>
  )
}

export default App