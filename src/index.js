import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import fontawesome library
import './fontawesome';
import App from './App';
import YelpState from './Context/yelpContext';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <YelpState>
        <App />
      </YelpState>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

