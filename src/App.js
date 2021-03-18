import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar/Navbar';
import Map from './Map/Map';
import SearchBar from './SearchBar/SearchBar';

function App() {
  return (
    <div>
      <header>
        <Navbar />
        <SearchBar/>
       </header>
       <Map />
    </div>
  );
}

export default App;
