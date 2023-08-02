import Category from './Category'
import Discover from './Discover'
import HeroSection from './Hero'
import Highlight from './Highlight'
import HowItWorks from './HowItWorks'
import Subscribe from './Subscribe'
import TopCreators from './TopCreators'
import TrendingCollections from './Trending'

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TrendingCollections />
      <TopCreators />
      <Category />
      <Discover />
      <Highlight />
      <HowItWorks />
      <Subscribe />
    </div>
  )
}

export default HomePage
