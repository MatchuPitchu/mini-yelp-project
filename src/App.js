import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Switch, Route} from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import Map from "./Map/Map";
import RestaurantCards from './RestaurantCards/RestaurantCards';
import RestaurantCardsSearch from './RestaurantCardsSearch/RestaurantCardsSearch';
import Footer from "./Footer/Footer";
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
        <Route path='/' component={Navbar}/>
      </header>
      <body className="container">
        <div className="row">
          <div className="col-8 mt-5 mb-4">
            <Switch>
              <Route exact path="/">
                <RestaurantCards />
              </Route>
              <Route path="/search">
                <RestaurantCardsSearch />
              </Route>
            </Switch>
          </div>
          <div className="col-4 mt-5 mb-4">
            <Map />
          </div>
        </div>
      </body>
      <Footer />
    </div>
  );
};

export default App;
