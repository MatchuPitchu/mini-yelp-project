import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from './components/SearchBar/SearchBar';
import RestaurantCards from "./components/RestaurantCards/RestaurantCards";
import RestaurantPage from "./RestaurantPage/RestaurantPage";
import Footer from "./components/Footer/Footer";
// Import context - fetched Data
import { useContext } from "react";
import { YelpContext } from "./Context/yelpContext";

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

  // console.log(allCities);

  useEffect(() => {
    fetch("https://mini-yelp-api.herokuapp.com/api/v1/restaurants")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setValues(data);
        // console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <Route path="/">
        <Navbar />
        <SearchBar/>
      </Route>
      <body className="container">
        <div className="row">
          <div className="col-8 mt-5 mb-4">
            <Switch>
              <Route exact path="/">
                <RestaurantCards />
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
