import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Marketplace from './pages/Marketplace/Marketplace';

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Marketplace />
      <Footer />
    </div>
  );
}

export default App;
