import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to={"/"}>
        Blockchain Webshop App
      </NavLink>
      <button
        to={"/"}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to={"/home"}>
              Home
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to={"/shop"}>
              Shop
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to={"/login"}>
              Login
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to={"/signup"}>
              Signup
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
