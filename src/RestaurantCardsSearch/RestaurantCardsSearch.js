import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RestaurantCardsSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { YelpContext } from '../Context/yelpContext';

const RestaurantCards = () => {
    const { allRestau, searchInputRestau, searchInputLoc, selectedRestau, setSelectedRestau } = useContext(YelpContext);

    const newArr = allRestau.filter((restau) => {
        if(restau.city.match(searchInputLoc) && searchInputLoc && !searchInputRestau) {
            return restau;
        } 

        if(restau.city.match(searchInputRestau) && searchInputRestau && !searchInputLoc) {
            return restau;
        }
    });

   useEffect(() => {
    setSelectedRestau(newArr);
   }, [newArr])
    

    return (
    <div className="row">
        {newArr && newArr.map(item => {
            return (
                <div key={item.id} className="col-md-6 mb-4">
                    <div className="card">
                    {item && <img src={`https://mini-yelp-api.herokuapp.com/static/img/${item.image}`}  className="card-img-top" alt="article header"/>}
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <h6 className="blockquote-footer">City: {item.city}</h6>
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