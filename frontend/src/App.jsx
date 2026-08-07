import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Category from './components/Category'
import NewArrivals from './features/ProuductCatalog/components/NewArrivals'
// import Login from './features/Authentication/components/Login'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between  ">
      <Navbar />
      <HeroSection />
      <NewArrivals />
      <Category />
      <Footer />


    </div>
  )
}

export default App;