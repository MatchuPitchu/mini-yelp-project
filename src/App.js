import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Map from "./Map/Map";
import Footer from "./Footer/Footer";
import {Switch, Route} from 'react-router-dom';
import Search from './Search/Search';
import { dom } from "@fortawesome/fontawesome-svg-core";

const App = () => {
  return (
    <div>
      <header>
        <Switch>
          <Route path='/search' component={Search}/>
          <Route path='/' component={Navbar}/>
        </Switch>
      </header>
      <Map />
      <Footer />
    </div>
  );
};

export default App;
