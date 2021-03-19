import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { YelpContext } from "../Context/yelpContext";
import "./RestaurantPage.css";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import Rating from 'react-rating';


const RestaurantPage = () => {
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
        {restaurant && <img src={`https://mini-yelp-api.herokuapp.com/static/img/${restaurant.image}`}/>}
        </div>
        <div className="restauHeader">
        {restaurant && restaurant.name}
        </div> 

        <div className="rating">
            <Rating
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly
                fractions={2}
                initialRating={restaurant && restaurant.reviews.map(review => {
              return <li> {review.ratings}</li>
            })}
            />
        </div>

    
        <div> <ul className="allTags">
            {restaurant && restaurant.tags.map(tag => {
              return <li className="tag w3-tag w3-round w3-green w3-border w3-border-white"> {tag.name}</li>
            })}
          </ul>
            </div> 
            <div className="description">
            {restaurant && restaurant.description}
              </div>  

      </Card>
    </div>
  );
};

export default RestaurantPage;
