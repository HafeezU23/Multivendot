import React from 'react'
import Navbar from './components/Navbar'
import NewArrivals from './features/ProuductCatalog/components/NewArrivals'

const App = () => {
  return (
    <div className='mx-20'>
      <Navbar/>
      <NewArrivals />
    </div>
  )
}

export default App