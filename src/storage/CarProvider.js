import { useState } from "react";
import CarsContext from "./CarsContext";
const CarProvider = ({ children }) => {
  const [carState, setCarState] = useState([]);

  const carContext = { cars: carState, updateCar: setCarState };
  return (
    <CarsContext.Provider value={carContext}>{children}</CarsContext.Provider>
  );
};

export default CarProvider;
