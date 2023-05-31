import { createContext } from "react";

const CarsContext = createContext({ cars: [], updateCar: () => {} });

export default CarsContext;
