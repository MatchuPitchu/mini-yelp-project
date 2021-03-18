import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div class="field has-addons">
        <p class="control">
          <input class="input" type="text" placeholder="Your email" />
        </p>
        <p class="control">
          <a class="button is-static">Search</a>
        </p>

        <p class="control">
          <input class="input" type="text" placeholder="Your email" />
        </p>

        <p class="control">
          <a class="button is-static">Near</a>
        </p>
      </div>
    </div>
  );
};

export default SearchBar;
