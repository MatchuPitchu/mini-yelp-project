import React, { useState } from 'react';
// import spinner
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClockLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 50px auto 50px;
`;

const Spinner = () => {
    let [color] = useState("#5E2828");
  
    return (
      <div style={{padding: '100px'}}>
        <ClipLoader color={color} css={override} size={200} />
        <h3 style={{fontSize: '2em', textAlign: 'center'}} className="display-3">Loading ...</h3>
      </div>
    );
  }
  
  export default Spinner;