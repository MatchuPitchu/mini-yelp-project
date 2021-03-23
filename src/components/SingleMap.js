import React, { useContext } from "react";
import { YelpContext } from '../Context/yelpContext';
import Spinner from './Spinner';
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

  const { myRestau: {lat, long, description, address}, loading, error } = useContext(YelpContext);

  if(loading)
    return <Spinner />;

  if(error)
    return <div>Sorry for the inconvenience, but there was an error retrieving the data: {error}</div>;

    return lat && long ? 
      ( <div className="card-header singleMap-container"> 
          <MapContainer
            center={[lat, long]}
            zoom={13}
            scrollWheelZoom={false}
            style={{width: '100%', height: '400px'}}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
              <Marker
                position={[lat, long]}
                icon={icon}
              >
                <Popup>
                  <h6>{description}</h6>
                  <p>{address}</p>
                </Popup>
              </Marker>
          </MapContainer>
        </div>
      ) : <Spinner />;
};

export default SingleMap;
