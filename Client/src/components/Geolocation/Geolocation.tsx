import { useState } from "react";
const Geolocation = () => {
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
  });
  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function success(position: { coords: { latitude: any; longitude: any } }) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
  }
  function error() {
    console.log("Unable to retrieve your location");
  }
};

export default Geolocation;
