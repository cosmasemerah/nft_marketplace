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
    <div className="flex flex-col">
      <Navbar />
      <main>
        <div className="mx-auto flex h-auto w-full flex-col items-center">
          <HeroSection />
          <Trending />
          <TopCreators />
          <Category />
          <Discover />
          <Highlight />
          <HowItWorks />
          <Subscribe />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
