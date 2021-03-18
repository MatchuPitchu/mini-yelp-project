import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar.js'
import Map from './Components/Map.js'
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
