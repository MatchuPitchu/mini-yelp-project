import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { YelpContext } from "../Context/yelpContext";
import "./RestaurantPage.css";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import SingleMap from '../components/Map/SingleMap.js'
import Rating from 'react-rating';



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


  restaurant && console.log(restaurant.reviews)

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
                initialRating={restaurant && restaurant.reviews.map((review, index) => {
              return <li key={index}> {review.ratings}</li>
            })}
            />
        </div>

    
        <div>
          <ul className="allTags">
            {restaurant && restaurant.tags.map((tag, index) => {
              return <li key={index} className="tag w3-tag w3-round w3-green w3-border w3-border-white"> {tag.name}</li>
            })}
          </ul>
          </div> 

            <div className="description">
            {restaurant && restaurant.description}
              </div>  

            {restaurant && restaurant.reviews.map(review => {
              return (
              <div key={review.id}>
                <h6>{review.title}</h6>
                {/* <strong>{review.date}</strong> */}
                <small>{review.first_name} {review.last_name}</small>
                <p>{review.comment}</p>
                <p>rating : {review.rating}</p>
                <hr/>
              </div>)
              
            })}

      </Card>
      <SingleMap values={values}/>
    </div>
  );
};

export default RestaurantPage;
