import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Polovni automobili</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/cars" className="nav-link" aria-current="page">
              Cars
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link">
              Add Car
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-link">
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              Sign up
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
export default Heading;
