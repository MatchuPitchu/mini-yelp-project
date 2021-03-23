import React, { useState, useEffect, useContext } from "react";
import { YelpContext } from '../Context/yelpContext';
import Spinner from './Spinner';
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import Leaflet from "leaflet";
import ReactDOMServer from 'react-dom/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

const ChangeView = ( {center, zoom} ) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const Map = () => {
  // Insert icon of FontAwesome component
  const iconHTML = ReactDOMServer.renderToString(<FontAwesomeIcon className="iconMap" icon={["fa", "utensils"]}/>)
  const icon = new Leaflet.DivIcon({
    html: iconHTML,
  });
  
  const { selectedRestau, loading, error } = useContext(YelpContext);

  const [center, setCenter] = useState([]);

  useEffect(() => {
    if(selectedRestau.length) {
      const center = [selectedRestau[0].lat, selectedRestau[0].long];
      setCenter(center);
    }
  }, [selectedRestau]);

  if(loading)
    return <Spinner />;

  if(error)
    return <div>Sorry for the inconvenience, but there was an error retrieving the data: {error}</div>;

  return center.length && selectedRestau.length ? (
    <div className="map-container">
      <MapContainer
        center={center}
        zoom={11}
        scrollWheelZoom={false}
        style={{width: '100%', height: '300px'}}
      >
        <ChangeView center={center} zoom={11} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {selectedRestau.map((item, index) => (
            <Marker 
              key={index}
              position={[item.lat, item.long]}
              icon={icon}
            >
              <Popup>
                <h6>{item.description}</h6>
                <p>{item.address}</p>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  ) : <Spinner />;
};

export default Map;