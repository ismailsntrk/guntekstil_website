import React from "react";
import { GoogleMap, LoadScript  , Marker} from "@react-google-maps/api";
const CustomGoogleMapWithMarker = () => {
  
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    
    lat: 38.645228,
    lng: 29.448978,
  };
  
  return (
    <LoadScript googleMapsApiKey="AIzaSyD75l2_BAXj7yaC7EwpGdrvJACErroNtSA">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
         { <Marker  position={center} />}
      </GoogleMap>
    </LoadScript>
  );
};


export default CustomGoogleMapWithMarker;
