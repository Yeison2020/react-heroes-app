import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink
        to="/"
        className={({ isActive }) =>
          "navbar-brand" + (isActive ? " active" : "")
        }
      >
        Asociaciones
      </NavLink>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            to="/marvel"
            end={true}
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? " active" : "")
            }
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? " active" : "")
            }
            exact="true"
            to="/dc"
            end={true}
          >
            DC
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? " active" : "")
            }
            end={true}
          >
            Logout
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
