import Navbar from '../../components/Navbar';
import HeroSection from './Hero';

const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main>
        <div className="max-w-9xl mx-auto w-full px-7 py-10">
          <HeroSection />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
