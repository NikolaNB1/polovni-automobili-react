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
            <a href="/cars" className="nav-link" aria-current="page">
              Cars
            </a>
          </li>
          <li className="nav-item">
            <a href="/signin" className="nav-link">
              Sign in
            </a>
          </li>
          <li className="nav-item">
            <a href="/signup" className="nav-link">
              Sign up
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};
export default Heading;
