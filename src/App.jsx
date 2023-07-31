import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Artist from './pages/Artist/ArtistPage';

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Artist />
      <Footer />
    </div>
  );
}

export default App;
