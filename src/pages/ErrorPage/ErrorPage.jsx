import { Link } from 'react-router-dom';
import errorPageImage from '../../images/error.jpeg';

const ErrorPage = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <img src={errorPageImage} alt="Page not found" className="img-fluid mb-4" />
      <h1 className="mb-4">Page Not Found</h1>
      <p>The page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="btn btn-warning mt-4">Go back to homepage</Link>
    </div>
  );
};

export default ErrorPage;
