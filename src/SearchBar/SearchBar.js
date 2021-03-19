import React from "react";
import { Link } from 'react-router-dom';
import SearchSuggestions from "../SearchSuggestions/SearchSuggestions";
import styles from "./SearchBar.module.css";
// Import context - fetched Data
import { useContext } from 'react';
import { YelpContext } from '../Context/yelpContext';

const SearchBar = () => {
  // Put all imported needed objects into variables
  const { searchInputRestau, setSearchInputRestau, searchInputLoc, setSearchInputLoc } = useContext(YelpContext);

  const updateRestau = ( {target} ) => {
    const value = target.value || '';
    console.log(() => value);
    setSearchInputRestau(value);
  }
  
  const updateLoc = ( {target} ) => {
    const value = target.value || '';
    console.log(value);
    setSearchInputLoc(() => value);
  }
  
  return (
    <div className={styles.searchBarImage}>
      <div className={styles.searchBar}>
        <h2>Find a Restaurant for Any Occasion</h2>

        <div className="field has-addons">
          <p className="control">
            <button className="button is-static is-medium">Search</button>
          </p>

          <p className="control">
            <input
              className={`input is-medium ${styles["input-central"]} inputfield`}
              type="text"
              value={searchInputRestau}
              onChange={e => updateRestau(e)}
              placeholder="Restaurant or Cousine"
            />
          </p>

          <p className="control">
            <button class="button is-static is-medium">Near</button>
          </p>

          <p className="control">
            <input
              className={`input is-medium ${styles["input-central"]} inputfield`}
              type="text"
              value={searchInputLoc}
              onChange={e => updateLoc(e)}
              placeholder="Location"
            />
          </p>
          <Link to="/search" >
            <button className={`button is-medium is-danger ${styles['search-icon']}`}>
              {" "}
              <i className="fas fa-search"></i>
            </button>
          </Link>
        </div>
      </div>
      <SearchSuggestions />
    </div>
  );
};

export default SearchBar;
