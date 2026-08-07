import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}

export default App