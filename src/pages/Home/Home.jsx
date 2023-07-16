import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Category from './Category';
import Discover from './Discover';
import HeroSection from './Hero';
import Highlight from './Highlight';
import HowItWorks from './HowItWorks';
import Subscribe from './Subscribe';
import TopCreators from './TopCreators';
import Trending from './Trending';

const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main>
        <div className="max-w-9xl mx-auto w-full">
          <HeroSection />
          <Trending />
          <TopCreators />
          <Category />
          <Discover />
          <Highlight />
          <HowItWorks />
          <Subscribe />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
