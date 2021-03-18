import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import fontawesome library
https://github.com/MatchuPitchu/mini-yelp-project/pull/2/conflict?name=src%252FApp.js&ancestor_oid=37845757234ccb68531c10cf7a2ffc589c47e342&base_oid=27aed7e3c03a33dca5f339ab4365cd3c3e0bda44&head_oid=0d8b1d0835e67b9ec2ea64034457e79a7be93d39import './fontawesome';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

