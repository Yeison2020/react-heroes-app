import React from "react";
import reactDom from "react-dom";
import { Navbar } from "../components/ui/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const DashBoardRoutes = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <div>
          <Routes></Routes>
        </div>
      </Router>
    </React.Fragment>
  );
};

export default DashBoardRoutes;
