import HeroSection from './HeroSection'
import NewArrivals from '../features/ProuductCatalog/components/NewArrivals'
import TopSelling from '../features/ProuductCatalog/components/TopSelling'
import Category from '../features/ProuductCatalog/components/Category'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <NewArrivals />
      <TopSelling />
      <Category />
      <Footer />
    </div>
  )
}

export default Home