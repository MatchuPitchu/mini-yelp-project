import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import markerCustom from "../../Assets/Img/MarkerIcon.png";
import "leaflet/dist/images/marker-shadow.png";
import "./Leaflet.css";
import "leaflet/dist/leaflet.css";
import Card from "../Card/Card";

const SingleMap = ({values}) => {
  const icon = new Icon({
    iconUrl: markerCustom,
    iconSize: [35, 35],
  });



  // values && console.log(values);

  return (
    <div className="sideBarContainer">
    <Card>
        <MapContainer className="singleMap"
      center={[52.520008, 13.404954]}
      zoom={10.5}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {values && <Marker position={[values[0].lat, values[0].long]} icon={icon}>
        <Popup>
          {values[0].description} <br /> {values[0].address}
        </Popup>
      </Marker>}
    </MapContainer>
    </Card>
    </div> 
  );
};

export default SingleMap;
