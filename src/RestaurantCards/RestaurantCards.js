import React from 'react';
import { Link } from 'react-router-dom';
import './RestaurantCards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { YelpContext } from '../Context/yelpContext';

const RestaurantCards = () => {
    const { allRestau } = useContext(YelpContext);
    
    return (
    <div className="row">
        {allRestau && allRestau.map(item => {
            return (
                <div key={item.id} className="col-md-6 mb-4">
                    <div className="card image">
                    {item && <img src={`https://mini-yelp-api.herokuapp.com/static/img/${item.image}`}  className="card-img-top" alt="article header"/>}

                    <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <h6 className="blockquote-footer">City: {item.name}</h6>
                            <h6 className="blockquote-footer">Adress: {item.address}</h6>
                            <p className="card-text">{item.description}</p>
                            <div className="text-center linkToRestau">
                                <Link to={`/${item.id}`} className="btn-restauTeaser">
                                    <FontAwesomeIcon className="infoIcon" icon={["fas", "info-circle"]}/>
                                    Look in detail
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )})
        }
    </div>
    )
}

export default RestaurantCards;