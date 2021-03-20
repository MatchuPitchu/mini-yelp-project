import React, { useContext, useEffect } from "react";
import { YelpContext } from '../../Context/yelpContext';
import Spinner from '../Spinner';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import markerCustom from "../../Assets/Img/MarkerIcon.png";
import "leaflet/dist/images/marker-shadow.png";
import "./Leaflet.css";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const icon = new Icon({
    iconUrl: markerCustom,
    iconSize: [25, 25],
  });

  const { 
    allRestau, 
    searchInputRestau,
    searchInputLoc, 
    selectedRestau, 
    setSelectedRestau,
    position,
    setPosition,
    loading,
    error
  } = useContext(YelpContext);

  // useEffect(() => {
  //   setPosition(() => [selectedRestau[0].lat, selectedRestau[0].long])
  //   console.log(selectedRestau);
  // }, [setSelectedRestau]);

  const pos = [52.520008, 13.404954];

  if(loading)
  return <Spinner />;

  if(error)
  return <div>Sorry for the inconvenience, but there was an error retrieving the data: {error}</div>;

  return (
    <div className="map-container">
      <MapContainer
        center={pos}
        zoom={10.5}
        scrollWheelZoom={false}
        style={{width: '100%', height: '300px'}}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {selectedRestau && selectedRestau.map((item, index) => (
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
  );
};

export default Map;
