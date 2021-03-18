import React from "react";
import styles from "./SearchBar.module.css";


const SearchBar = () => {
  return (
    <div className={styles.searchBarImage}>
        <div className={styles.searchBar}>
      <h2> Find a Restaurant for Any Occasion </h2>
      
        <div className="field has-addons">
          <p className="control">
            <button className="button is-static is-medium">Search</button>
          </p>

          <p className="control">
            <input
              className={`input is-medium ${styles["input-central"]}`}
              type="text"
              placeholder="Restaurant or Cousine"
            />
          </p>

          <p className="control">
            <button class="button is-static is-medium">Near</button>
          </p>

          <p className="control">
            <input
              className={`input is-medium ${styles["input-central"]}`}
              type="text"
              placeholder="Location"
            />
          </p>
          <div className={`button is-medium ${styles['search-button']}`} >
            <span className={`icon is-small ${styles['search-icon']}`}>
                <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
