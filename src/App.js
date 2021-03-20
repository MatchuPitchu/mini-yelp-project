import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from './components/Searchbar';
import RestaurantCards from "./components/RestaurantCards";
import RestaurantPage from "./components/RestaurantPage";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";
// Import context - fetched Data
import { useContext } from "react";
import { YelpContext } from "./Context/yelpContext";

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
          <body className="container">
            <div className="row">
              <div className="col-8 mt-5 mb-4">
                <RestaurantCards />
              </div>
            </div>
          </body>
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
