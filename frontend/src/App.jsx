import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Category from './features/ProuductCatalog/components/Category'
import NewArrivals from './features/ProuductCatalog/components/NewArrivals'
import Home from './components/Home'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between overflow-x-hidden">
      <Navbar />
      <Home />
      <Footer />


    </div>
  )
}

export default App;