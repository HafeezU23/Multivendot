import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './components/Home'
import Login from './features/Authentication/components/Login'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App;