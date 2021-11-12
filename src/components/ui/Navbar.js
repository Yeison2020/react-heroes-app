import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className="active"
            className="nav-item nav-link"
            exact="true"
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <NavLink to="/login" className="nav-item nav-link">
            Logout
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};