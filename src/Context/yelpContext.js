import React, { createContext, useState, useEffect } from 'react';

export const YelpContext = createContext();

const YelpState = ({ children }) => {
  const [allCities, setAllCities] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [allRestau, setAllRestau] = useState([]);
  const [allReviews, setAllReviews] = useState([]);
  const [selectedRestau, setSelectedRestau] = useState();
  const [selectedRestauSearch, setSelectedRestauSearch] = useState([]);
  
  useEffect(() => {
    fetch('https://mini-yelp-api.herokuapp.com/api/v1/cities')
      .then(res => res.json())
      .then(data => setAllCities(data))
      .catch(err => console.log(`All Cities: ${err}`));
  }, []);

  useEffect(() => {
    fetch('https://mini-yelp-api.herokuapp.com/api/v1/tags')
      .then(res => res.json())
      .then(data => setAllTags(data))
      .catch(err => console.log(`All Tags: ${err}`));
  }, []);
  
//   ERROR: Don't understand m2m  
//   useEffect(() => {
//           fetch('https://mini-yelp-api.herokuapp.com/api/v1/tags/m2m')
//             .then(res => res.json())
//             .then(data => console.log(data))
//             .catch(err => console.log(`All Tags: ${err}`));
//         }, []);
      
    useEffect(() => {
        fetch('https://mini-yelp-api.herokuapp.com/api/v1/restaurants')
            .then(res => res.json())
            .then(data => setAllRestau(data))
            .catch(err => console.log(`All Restaurants: ${err}`));
    }, []);

    useEffect(() => {
        fetch('https://mini-yelp-api.herokuapp.com/api/v1/reviews')
            .then(res => res.json())
            .then(data => setAllReviews(data))
            .catch(err => console.log(`All Reviews: ${err}`));
    }, []);
      
  return (
    <YelpContext.Provider
        value={{ allCities, allTags, allRestau, allReviews, selectedRestau, setSelectedRestau, selectedRestauSearch, setSelectedRestauSearch }}
    >
      {children}
    </YelpContext.Provider>
  );
};

export default YelpState;
