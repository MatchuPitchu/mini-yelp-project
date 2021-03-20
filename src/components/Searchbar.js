import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { YelpContext } from '../Context/yelpContext';

const Searchbar = () => {
  const { searchInputRestau, setSearchInputRestau, searchInputLoc, setSearchInputLoc } = useContext(YelpContext);

  const updateRestau = ( {target} ) => {
    const value = target.value || '';
    setSearchInputRestau(() => value);
  }
  
  console.log(searchInputRestau);

  const updateLoc = ( {target} ) => {
    const value = target.value || '';
    // console.log(value);
    setSearchInputLoc(() => value);
  }
  
  return (
    <div className="searchbarImage">
      <div className="container searchbar">
        <h2>Find a Restaurant for Any Occasion</h2>
        <div className="input-group mb-3 searchbar">
          <span className="input-group-text search-first">Search</span>
          <input 
            className="form-control inputfield"
            type="text" 
            placeholder="Restaurant" 
            value={searchInputRestau}
            onChange={e => updateRestau(e)}
          />
          <span className="input-group-text search-middle">Near</span>
          <input
            className="form-control inputfield"
            type="text"
            placeholder="City"
            value={searchInputLoc}
            onChange={e => updateLoc(e)}
              />
          <Link to="/" >
            <button className="btn search-last" type="button">
              <FontAwesomeIcon icon={["fas", "search"]} />
            </button>
          </Link>
        </div>
        <div className="d-flex justify-content-around tags">
          <div className="container-tags">
            <FontAwesomeIcon className="tagIcon" icon={["fas", "carrot"]} />
            <span>Veggie</span>
          </div>
          <div className="container-tags">
            <FontAwesomeIcon className="tagIcon" icon={["fas", "seedling"]} />
            <span>Vegan</span>
          </div>
          <div className="container-tags">
            <FontAwesomeIcon className="tagIcon" icon={["fas", "fish"]} />
            <span>Healthy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
