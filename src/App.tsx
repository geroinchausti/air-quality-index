import React from "react";
import "./App.css";
import { LocationProvider } from "./context/location.context";
import { Landing } from "./scenes/Landing";

function App() {
  return (
    <LocationProvider>
      <Landing />
    </LocationProvider>
  );
}

export default App;
