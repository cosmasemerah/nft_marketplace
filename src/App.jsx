import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SignUpPage from './pages/CreateAccount/SignUpPage';
// import HomePage from './pages/Home/Home';

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <SignUpPage />
      <Footer />
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
