import React, { createContext, useEffect, useState } from "react";
import { getStorageValueParsedToNumber } from '../utils';

export const LocationContext = createContext({
  latitude: 0,
  longitude: 0,
});

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [position, setPosition] = useState({ latitude: getStorageValueParsedToNumber("latitude") , longitude: getStorageValueParsedToNumber("longitude") });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          localStorage.setItem("latitude", position.coords.latitude.toString());
          localStorage.setItem(
            "longitude",
            position.coords.longitude.toString()
          );
        }
      );
    }
  }, []);


  

  return (
    <LocationContext.Provider
      value={{
        latitude: position.latitude,
        longitude: position.longitude,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}
