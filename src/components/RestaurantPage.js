import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { YelpContext } from '../Context/yelpContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from './Spinner';
import SingleMap from './SingleMap';
import Rating from 'react-rating';

const RestaurantPage = () => {
  const {
    loading,
    setLoading,
    error,
    setError,
    myRestau,
    setMyRestau
  } = useContext(YelpContext);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://mini-yelp-api.herokuapp.com/api/v1/restaurants/${id}`)
      .then(res => res.json())
      .then(data => setMyRestau(() => data))
      .catch(err => {
        console.log(`Selected restaurant: ${err}`);
        setError(() => err);
      });
      console.log(myRestau);
    setLoading(false);
  }, [id])

  if(loading)
    return <Spinner />;

  if(error)
    return <div>Sorry for the inconvenience, but there was an error retrieving the data: {error}</div>;

  return myRestau ? (
  <>
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header container-RestauImg row">
            <div className="col">
              <img src={`https://mini-yelp-api.herokuapp.com/static/img/${myRestau.image}`} class="card-img-top" alt={`Restaurant ${myRestau.name}`} />
              <div className="overlay">
                <h3 class="card-title">{myRestau.name}</h3>
                <div className="rating">
                  <Rating
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    readonly
                    fractions={2}
                    initialRating={myRestau.review && myRestau.reviews.map((review, index) => {
                      return <li key={index}> {review.ratings}</li>
                    })}
                  />
                </div>
                <div className="card-text mt-3">
                  {myRestau.description}
                </div>
                <div className="d-flex justify-content-center tags mt-3">
                  {myRestau.tags && myRestau.tags.map((tag, index) => (
                    <div key={index} className="container-tags">{tag.name}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <SingleMap />
      </div>
    </div>
    <div class="card-body"></div>
      <div class="card-footer text-muted">
        <div className="row">
          {myRestau.reviews && myRestau.reviews.map(review => {
            return (
              <div className="col-md-6" key={review.id}>
              <h6 className="hReview">{review.title}</h6>
              <h6 className="blockquote-footer">{review.date.substring(0, 10)}</h6>
              <h6 className="blockquote-footer">Author: {review.first_name} {review.last_name}</h6>
              <div className="card-text">
                Rating: {review.rating} <FontAwesomeIcon color={"#5E2828"} icon={["fa", "star"]}/>
              </div>
              <hr/>
            </div>) 
          })}
      </div>
    </div>
  </>
  ) : <Spinner />;
};

export default RestaurantPage;
