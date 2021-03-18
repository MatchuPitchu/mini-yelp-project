
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar'
import Map from './components/Map.js'

function App() {
  return (
    <div>
      <header>
        <Navbar />
       </header>
       <Map />
    </div>
  );
}

export default App;
