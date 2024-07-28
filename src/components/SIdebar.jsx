import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "280px" }}
    >
      <NavLink
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">
          <strike>Facebook</strike> Notebook
        </span>
      </NavLink>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/" className="nav-link text-white" aria-current="page">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/create-post" className="nav-link text-white">
            Create Post
          </NavLink>
        </li>
      </ul>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Sidebar;
