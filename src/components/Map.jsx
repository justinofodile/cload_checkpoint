import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";
import LocationPin from "./LocationPin";

const Map = ({ location, zoomLevel }) => {
  return (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Clinic</h2>
      <div className="google-map">
        {/* Calling google map component from google-map-react */}
        <GoogleMapReact
          //Calling the google api key
          bootstrapURLKeys={{ key: "AIzaSyDwSui_zHOZqbvuInHXycfhGPTsY9BikN8" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          {/* Calling the Location pin component */}
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
