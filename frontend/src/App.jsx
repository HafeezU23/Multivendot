import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import NewArrivals from './features/ProuductCatalog/components/NewArrivals'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screenbg-gray-50 flex flex-col justify-between">
      <Navbar />
      <HeroSection />
      <NewArrivals />
      <Footer />
    </div>
  )
}

export default App