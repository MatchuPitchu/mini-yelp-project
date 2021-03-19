import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { YelpContext } from "../Context/yelpContext";
import "./RestaurantPage.css";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";

const RestaurantPage = () => {
  const {
    allRestau,
    allReviews,
    selectedRestau,
    setSelectedRestau
  } = useContext(YelpContext);
  const {id} = useParams();

  return (
    <div className="restauContainer">
      <Card>
        <div className="restauImage">
          <img src=" https://mini-yelp-api.herokuapp.com/static/images/10.jpg" />
        </div>
        <div className="restauHeader">
        </div>
      </Card>
    </div>
  );
};

export default RestaurantPage;
