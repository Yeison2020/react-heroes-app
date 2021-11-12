import React from "react";
import { Navbar } from "../components/ui/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MarvelScreen from "../components/marvel/MarvelScreen";
import HeroScreen from "../components/heroes/HeroScreen";
import DcScreen from "../components/dc/DcScreen";
import LoginScreen from "../components/login/LoginScreen";
const DashBoardRoutes = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route exact="true" path="marvel" element={<MarvelScreen />} />
            <Route
              exact="true"
              path="heroe/:heroeId"
              element={<HeroScreen />}
            />
            <Route exact="true" path="/dc" element={<DcScreen />} />
            <Route exact="true" path="login" element={<LoginScreen />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
};

export default DashBoardRoutes;
