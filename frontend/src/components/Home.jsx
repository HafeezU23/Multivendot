import HeroSection from './HeroSection'
import NewArrivals from '../features/ProuductCatalog/components/NewArrivals'
import Category from '../features/ProuductCatalog/components/Category'

const Home = () => {
  return (
    <div>
        <HeroSection />
      <NewArrivals />
      <Category />
    </div>
  )
}

export default Home