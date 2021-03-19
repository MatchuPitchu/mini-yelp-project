import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RestaurantCards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { YelpContext } from '../../Context/yelpContext';
import Map from '../Map/Map';

const RestaurantCards = () => {
    const { allRestau, searchInputRestau, searchInputLoc, selectedRestau, setSelectedRestau } = useContext(YelpContext);

    useEffect(() => {
        if(!searchInputLoc || !searchInputRestau) {
            setSelectedRestau(allRestau);
        }        

        if(searchInputLoc || searchInputRestau) {
            const newArr = allRestau.filter((item) => item.city.match(searchInputLoc) && item.name.match(searchInputRestau));
            console.log(newArr);
            setSelectedRestau(() => newArr);
        }
    }, [searchInputLoc, searchInputRestau])

    return (
    <div className="row">
        <div className="col-sm-8 col-md-9 mt-5">
            <div className="row">
            {selectedRestau && selectedRestau.map(item => {
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
        </div>
        <div className="col-sm-4 col-md-3 mt-5 mb-4">
            <Map values={allRestau} />
        </div>
    </div>
    )
};

export default RestaurantCards;