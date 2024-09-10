import React from 'react'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

      </Route>
      <Home />
    </div>
  )
}

export default App