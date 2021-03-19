import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Map from "./Map/Map";
import Footer from "./Footer/Footer";
import {Switch, Route} from 'react-router-dom';
import Search from './Search/Search';
import { dom } from "@fortawesome/fontawesome-svg-core";
// Import context - fetched Data
import { useContext } from 'react';
import { YelpContext } from './Context/yelpContext';

const App = () => {
  // Put all imported needed objects into variables
  const { allCities, allTags, allRestau, allReviews, selectedRestau, setSelectedRestau } = useContext(YelpContext);

  console.log(allCities)

  return (
    <div>
      <header>
        <Switch>
          <Route path='/search' component={Search}/>
          <Route path='/' component={Navbar}/>
        </Switch>
      </header>
      <body>
        <Map />
        {allCities && allCities.map(item => {
          return <p>{item.name}</p>
        }) }
      </body>
      <Footer />
    </div>
  );
};

export default App;
