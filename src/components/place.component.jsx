import React, { useRef } from "react";
import { StandaloneSearchBox, useLoadScript } from "@react-google-maps/api";
const libraries = ["places"];


const PlaceComponent = () => {
  const inputRef = useRef();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAuGLzaNRFclsIfbMGBuZKTPSd7pjeI0xE",
    libraries,
  });

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      console.log(place.formatted_address);
      console.log(place.geometry.location.lat());
      console.log(place.geometry.location.lng());
    }
  };

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <StandaloneSearchBox
        onLoad={(ref) => (inputRef.current = ref)}
        onPlacesChanged={handlePlaceChanged}
      >
        <input
          type="text"
          className="input-field"
          placeholder="Enter Location"
        />
      </StandaloneSearchBox>
    </div>
  );
};

export default PlaceComponent;