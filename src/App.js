import React, { useState, useEffect, useContext } from "react";
import { YelpContext } from "./Context/yelpContext";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from './components/Searchbar';
import RestaurantCards from "./components/RestaurantCards";
import Map from "./components/Map/Map";
import RestaurantPage from "./components/RestaurantPage";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";

const App = () => {
  // Put all imported needed objects into variables
  const {
    loading,
    error
  } = useContext(YelpContext);

  if(loading)
    return <Spinner />;

  if(error)
    return <div>Sorry for the inconvenience, but there was an error retrieving the data: {error}</div>;

  return (
    <div>
      <Navbar />
      <Searchbar/>
      <Switch>
          <Route exact path="/">
            <Map />
            <RestaurantCards />
          </Route>
          <Route path="/restaurant/:id">
            <RestaurantPage />
          </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
