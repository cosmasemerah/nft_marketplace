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
    </div>
  );
};

export default HomePage;
