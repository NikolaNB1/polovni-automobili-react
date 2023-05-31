import { useContext, useState } from "react";
import CarsContext from "../storage/CarsContext";
import { addCar } from "../service/carService";

let years = [];

for (let i = 1990; i <= 2018; i++) {
  years.push(i);
}

const AddCar = () => {
  const [car, setCar] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCar((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const handleCheckChange = (event) => {
    const { name, checked } = event.target;

    setCar((prevState) => {
      return { ...prevState, [name]: checked };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(car);
    addCar(
      car.brand,
      car.model,
      car.year,
      car.maxSpeed,
      car.numberOfDoors,
      car.isAutomatic,
      car.engine
    );
    setCar({
      brand: "",
      model: "",
      year: 1990,
      maxSpeed: 0,
      numberOfDoors: 0,
      isAutomatic: false,
      engine: "",
    });
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={submitHandler}>
        <h1 className="h3 mb-3 fw-normal">Add A Car</h1>

        <div className="form-floating">
          <input
            onChange={(e) => handleInputChange(e)}
            name="brand"
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Enter Brand"
            value={car.brand}
          />
          <label for="floatingInput">Brand</label>
        </div>
        <div className="form-floating">
          <input
            name="model"
            value={car.model}
            onChange={(e) => handleInputChange(e)}
            type="text"
            className="form-control"
            id="floatingPassword"
            placeholder="Model"
          />
          <label for="floatingPassword">Model</label>
        </div>

        <div className="form-floating">
          <select
            name="year"
            value={car.year}
            onChange={(e) => handleInputChange(e)}
            className="form-control"
            id="floatingPassword"
            placeholder="Year"
          >
            {years.map((year, index) => {
              return (
                <option key={index} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
          <label for="floatingPassword">Year</label>
        </div>
        <div className="form-floating">
          <input
            name="maxSpeed"
            value={car.maxSpeed}
            onChange={(e) => handleInputChange(e)}
            type="number"
            className="form-control"
            id="floatingPassword"
            placeholder="Max Speed"
          />
          <label for="floatingPassword">Max Speed</label>
        </div>
        <div className="form-floating">
          <input
            name="isAutomatic"
            checked={car.isAutomatic}
            value={car.isAutomatic}
            onChange={(e) => handleCheckChange(e)}
            type="checkbox"
            id="floatingPassword"
            placeholder="Is Automatic"
            // checked={}
            // onChange={}
          />
          <label for="floatingPassword">Is Automatic</label>
        </div>
        <label>Engine</label>
        <div>
          <div>
            <input
              value="diesel"
              onChange={(e) => handleInputChange(e)}
              type="radio"
              className=""
              name="engine"
            />
            <label htmlFor="diesel">Diesel</label>
          </div>
          <div>
            <input
              type="radio"
              value="petrol"
              name="engine"
              onChange={(e) => handleInputChange(e)}
            />
            <label htmlFor="diesel">Petrol</label>
          </div>
          <div>
            <input
              type="radio"
              value="electric"
              name="engine"
              onChange={(e) => handleInputChange(e)}
            />
            <label htmlFor="diesel">Electric</label>
          </div>
        </div>
        <div className="form-floating">
          <input
            onChange={(e) => handleInputChange(e)}
            name="numberOfDoors"
            value={car.numberOfDoors}
            type="number"
            className="form-control"
            id="floatingPassword"
            placeholder="Number of Doors"
          />
          <label for="floatingPassword">Number of Doors</label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Add Car
        </button>
        <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
      </form>
    </div>
  );
};
export default AddCar;
