import React from "react";
import styles from "./SearchSuggestions.module.css";

const SearchSuggestions = () => {
  return (
    <div className={styles.suggestions}>
      <span className={styles.icon}>
        <i className="fas fa-pizza-slice"></i>
        <span className={styles.suggestion}> Italian </span>
      </span>

      <span className={styles.icon}>
      <i className="fas fa-carrot"></i>
        <span className={styles.suggestion}> Veggie </span>
      </span>

      <span className={styles.icon}>
        <i className="fas fa-seedling"></i>
        <span className={styles.suggestion}> Vegan </span>
      </span>

      <span className={styles.icon}>
        <i className="fas fa-fish"></i>
        <span className={styles.suggestion}> Healthy </span>
      </span>
    </div>
  );
};

export default SearchSuggestions;
