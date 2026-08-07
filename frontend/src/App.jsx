import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Category from './components/Category'
import NewArrivals from './features/ProuductCatalog/components/NewArrivals'

const App = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <NewArrivals />
      <Category />
      <Footer />

    </div>
  )
}

export default App;