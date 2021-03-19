import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Map from "./Map/Map";
import RestaurantCards from "./RestaurantCards/RestaurantCards";
import RestaurantCardsSearch from "./RestaurantCardsSearch/RestaurantCardsSearch";
import Footer from "./Footer/Footer";
import { dom } from "@fortawesome/fontawesome-svg-core";
// Import context - fetched Data
import { useContext } from "react";
import { YelpContext } from "./Context/yelpContext";
import RestaurantPage from "./RestaurantPage/RestaurantPage";

const App = () => {
  // Put all imported needed objects into variables
  const {
    allCities,
    allTags,
    allRestau,
    allReviews,
    selectedRestau,
    setSelectedRestau,
  } = useContext(YelpContext);
  const [values, setValues] = useState();

  console.log(allCities);

  useEffect(() => {
    fetch("https://mini-yelp-api.herokuapp.com/api/v1/restaurants")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setValues(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <header>
        <Route path="/" component={Navbar} />
      </header>
      <body className="container">
        <div className="row">
          <div className="col-8 mt-5 mb-4">
            <Switch>
              <Route exact path="/">
                <div className="row">
                  <div className="col-sm-8 col-md-9 mt-5">
                    <RestaurantCards />
                  </div>
                  <div className="col-sm-4 col-md-3 mt-5 mb-4">
                    <Map values={values} />
                  </div>
                </div>
              </Route>
              <Route path="/search">
              <div className="row">
                  <div className="col-sm-8 col-md-9 mt-5">
                    <RestaurantCardsSearch />
                  </div>
                  <div className="col-sm-4 col-md-3 mt-5 mb-4">
                    <Map values={selectedRestau} />
                  </div>
                </div>
              </Route>
              <Route path="/:id">
                <RestaurantPage values={values}/>
              </Route>
            </Switch>
          </div>
        </div>
      </body>
      <Footer />
    </div>
  );
};

export default App;
