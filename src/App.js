import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar/Navbar';
import Map from './Map/Map';
import SearchBar from './SearchBar/SearchBar';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
        <SearchBar/>
       </header>
       <Map />
       <Footer />
    </div>
  );
}

export default App;
