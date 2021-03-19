import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { YelpContext } from "../Context/yelpContext";
import "./RestaurantPage.css";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import SingleMap from '../Map/SingleMap.js'

const RestaurantPage = ({values}) => {
  const {
    allRestau,
    allReviews,
    selectedRestau,
    setSelectedRestau
  } = useContext(YelpContext);
  const {id} = useParams();

  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    fetch(`https://mini-yelp-api.herokuapp.com/api/v1/restaurants/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRestaurant(data);

      })
      .catch(console.error);
  }, []);

  return (
    <div className="restauContainer">
      <Card>
        <div className="restauImage">
          <img src=" https://mini-yelp-api.herokuapp.com/static/images/10.jpg" />
        </div>
        <div className="restauHeader">
        {restaurant && restaurant.name}
          <ul>
            {restaurant && restaurant.tags.map(tag => {
              return <li>{tag.name}</li>
            })}
          </ul>
        </div>
      </Card>
      <SingleMap values={values}/>
    </div>
  );
};

export default RestaurantPage;
