import Footer from "./Footer";

const Sidebar = ({ selectedTab, toggleSelectedTab }) => {
  const handleSelectedTab = (e) => {
    toggleSelectedTab(e.target.textContent);
  };
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">
          <strike>Facebook</strike> Notebook
        </span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={handleSelectedTab}>
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Home" && "active"
            }`}
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li onClick={handleSelectedTab}>
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Create Post" && "active"
            }`}
          >
            Create Post
          </a>
        </li>
      </ul>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Sidebar;
