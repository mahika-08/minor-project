import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container text-center py-5">
      <div className="row justify-content-center py-5">
        <div className="col-md-6">
          <h1 className="display-1 fw-bold text-primary">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="lead mb-4 text-muted">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link to="/" className="btn btn-primary px-4">Return Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
