import React, { createContext, useState, useEffect } from 'react';

export const YelpContext = createContext();

const YelpState = ({ children }) => {
  const [allCities, setAllCities] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [allRestau, setAllRestau] = useState([]);
  const [allReviews, setAllReviews] = useState([]);
  const [selectedRestau, setSelectedRestau] = useState([]);
  const [searchInputRestau, setSearchInputRestau] = useState();
  const [searchInputLoc, setSearchInputLoc] = useState();
  const [myRestau, setMyRestau] = useState({});
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState('');
  
  useEffect(() => {
    setLoading(true);
    fetch('https://mini-yelp-api.herokuapp.com/api/v1/cities')
      .then(res => res.json())
      .then(data => setAllCities(data))
      .catch(err => {
        console.log(`All Cities: ${err}`)
        setError(() => err);
      });
    setLoading(false)
  }, []);


  useEffect(() => {
    setLoading(true);
    fetch('https://mini-yelp-api.herokuapp.com/api/v1/tags')
      .then(res => res.json())
      .then(data => setAllTags(data))
      .catch(err => {
        console.log(`All Tags: ${err}`);
        setError(() => err);
      });
      setLoading(false);
      }, []);
  
//   ERROR: Don't understand m2m  
//   useEffect(() => {
//           fetch('https://mini-yelp-api.herokuapp.com/api/v1/tags/m2m')
//             .then(res => res.json())
//             .then(data => console.log(data))
//             .catch(err => console.log(`All Tags: ${err}`));
//         }, []);
      
    useEffect(() => {
      setLoading(true);
      fetch('https://mini-yelp-api.herokuapp.com/api/v1/restaurants')
        .then(res => res.json())
        .then(data => {
          setAllRestau(() => data);
          setSelectedRestau(() => data);
        })
        .catch(err => {
          console.log(`All Restaurants: ${err}`);
          setError(() => err);
        });
      setLoading(false);
    }, []);
    
    useEffect(() => {
      setLoading(true);
      fetch('https://mini-yelp-api.herokuapp.com/api/v1/reviews')
        .then(res => res.json())
        .then(data => setAllReviews(data))
        .catch(err => {
          console.log(`All Reviews: ${err}`);
          setError(() => err);
        });
      setLoading(false);
    }, []);

  return (
    <YelpContext.Provider
        value={{  
          allCities, 
          allTags, 
          allRestau,
          allReviews,
          selectedRestau, 
          setSelectedRestau, 
          searchInputRestau, 
          setSearchInputRestau, 
          searchInputLoc, 
          setSearchInputLoc,
          myRestau,
          setMyRestau,
          loading,
          setLoading,
          error,
          setError
        }}
    >
      {children}
    </YelpContext.Provider>
  );
};

export default YelpState;
