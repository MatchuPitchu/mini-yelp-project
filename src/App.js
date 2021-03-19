import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar/Navbar';
import Map from './Map/Map';
import SearchBar from './SearchBar/SearchBar';
import Footer from './Footer/Footer';

const App = () => {

  const [values, setValues] = useState();

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
        <Navbar />
        <SearchBar/>
       </header>
       <Map values={values}/>
       <Footer />
    </div>
  );
}

export default App;
