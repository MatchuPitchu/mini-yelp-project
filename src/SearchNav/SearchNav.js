import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './SearchNav.module.css'

const SearchNav = () => {
  return (
    <div className={styles.searchNav}>
      <b className={styles.brand}> Mini <FontAwesomeIcon className="brandlogo"icon={["fa", "utensils"]}/>Yelp</b>
      <div className="field has-addons">
          <p className="control">
            <button className="button is-static is-small">Search</button>
          </p>
          <p className="control">
            <input
              className={`input is-small ${styles["input-central"]}`}
              type="text"
              placeholder="Restaurant or Cousine"
            />
          </p>

          <p className="control">
            <button class="button is-static is-small">Near</button>
          </p>

          <p className="control">
            <input
              className={`input is-small ${styles["input-central"]}`}
              type="text"
              placeholder="Location"
            />
          </p>
          <button className={`button is-small is-danger ${styles['search-icon']}`}>
            {" "}
            <i className="fas fa-search"></i>
          </button>
        </div>
    </div>
  );
};

export default SearchNav;
