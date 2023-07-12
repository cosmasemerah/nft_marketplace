import Navbar from '../../components/Navbar';
import HeroSection from './Hero';
import Trending from './Trending';

const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main>
        <div className="max-w-9xl mx-auto w-full">
          <HeroSection />
          <Trending />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
