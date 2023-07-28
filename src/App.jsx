import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NftPage from './pages/Nft/NftPage';

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <NftPage />
      <Footer />
    </div>
  );
}

export default App;
