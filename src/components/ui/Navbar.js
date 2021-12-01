import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  // This give more control over the navigation

  const handleLogOut = () => {
    navigate("/login", {
      replace: true,
    });
    console.log("Need Log out");
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? " active" : "")
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            exact="true"
            to="/marvel"
            end={true}
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? " active" : "")
            }
          >
            Marvel
          </NavLink>
          ;
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? " active" : "")
            }
            end={true}
            exact="true"
            to="/dc"
          >
            DC
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="na-item nav-link text-info">Yeison</span>
          <button className="nav-item nav-link btn" onClick={handleLogOut}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
