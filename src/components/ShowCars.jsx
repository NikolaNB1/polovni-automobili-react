const ShowCars = ({ cars }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Max Speed</th>
            <th>Automatic</th>
            <th>Engine</th>
            <th>Doors</th>
          </tr>
        </thead>
        <tbody>
          {cars?.cars.map((car, index) => {
            <tr key={index}>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.maxSpeed}</td>
              <td>{car.isAutomatic}</td>
              <td>{car.engine}</td>
              <td>{car.numberOfDoors}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ShowCars;
