import React, { useContext } from "react";
import { YelpContext } from '../../Context/yelpContext';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";
import ReactDOMServer from 'react-dom/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

const SingleMap = () => {
  // Insert icon of FontAwesome component
  const iconHTML = ReactDOMServer.renderToString(<FontAwesomeIcon className="iconMap" icon={["fa", "utensils"]}/>)
  const icon = new Leaflet.DivIcon({
    html: iconHTML,
  });

  const { 
    myRestau
  } = useContext(YelpContext);

  console.log(myRestau.lat, myRestau.long);

  const position = [52.520008, 13.404954];

  return (
    <div className="map-container">
      <MapContainer
        center={position}
        zoom={10.5}
        scrollWheelZoom={false}
        style={{width: '100%', height: '300px'}}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          <Marker 
            position={position}
            icon={icon}
          >
            <Popup>
              {/* <h6>{myRestau.description}</h6>
              <p>{myRestau.address}</p> */}
            </Popup>
          </Marker>
      </MapContainer>
    </div>
  );
};

export default SingleMap;
