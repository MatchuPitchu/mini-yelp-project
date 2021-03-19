import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import markerCustom from "../Assets/Img/MarkerIcon.png";
import "leaflet/dist/images/marker-shadow.png";

import "./Leaflet.css";
import "leaflet/dist/leaflet.css";

const Map = ({values}) => {
  const icon = new Icon({
    iconUrl: markerCustom,
    iconSize: [35, 35],
  });

  // const [values, setValues] = useState();
  //
  // useEffect(() => {
  //   fetch("https://mini-yelp-api.herokuapp.com/api/v1/restaurants")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setValues(data);
  //       console.log(data);
  //     })
  //     .catch(console.error);
  // }, []);

  // values && console.log(values);

  return (
    <MapContainer
      center={[52.520008, 13.404954]}
      zoom={10.5}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      //this maps all locationpins on the leafletmap
      {values &&
        values.map((markerlocation, index) => (
          <Marker key={index}
            position={[markerlocation.lat, markerlocation.long]}
            icon={icon}
          >
            <Popup>
              <h6>{markerlocation.description}</h6> <br /> {markerlocation.address}
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};

export default Map;
