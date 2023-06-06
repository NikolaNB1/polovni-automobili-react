import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CarsContext from "../storage/CarsContext";
import { deleteCarById, getCars } from "../service/carService";

const ShowCars = () => {
  const { cars, updateCar } = useContext(CarsContext);

  useEffect(() => {
    getCars().then(({ data }) => updateCar(data));
  }, []);

  const handleDelete = (id) => {
    const shouldDelete = window.confirm(
      "Da li ste sigurni da želite obrisati automobil?"
    );
    if (shouldDelete) {
      deleteCarById(id);
      getCars().then(({ data }) => updateCar(data));
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table
          className="table table-striped table-hover"
          style={{ width: "300px", textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>Model</th>
              <th>Brand</th>
              <th>Year</th>
              <th>Max speed</th>
              <th>Automatic</th>
              <th>Engine</th>
              <th>No of doors</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(cars)
              ? cars.map((car, id) => (
                  <tr key={id}>
                    <td>{car.model}</td>
                    <td>{car.brand}</td>
                    <td>{car.year}</td>
                    <td>{car.maxSpeed}</td>
                    <td>{car.isAutomatic ? "Yes" : "No"}</td>
                    <td>{car.engine}</td>
                    <td>{car.numberOfDoors}</td>
                    <td>
                      <Link
                        className="btn btn-outline-warning"
                        to={`edit/${car.id}`}
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-danger"
                        type="delete"
                        onClick={() => handleDelete(car.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ShowCars;
