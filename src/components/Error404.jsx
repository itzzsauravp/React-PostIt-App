import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div class="error-container text-center">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" class="btn btn-primary">
        Go Back to Home
      </Link>
    </div>
  );
};

export default Error404;
