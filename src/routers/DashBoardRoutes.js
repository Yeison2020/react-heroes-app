import React from "react";
import { Navbar } from "../components/ui/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MarvelScreen from "../components/marvel/MarvelScreen";
import HeroScreen from "../components/heroes/HeroScreen";
import DcScreen from "../components/dc/DcScreen";
const DashBoardRoutes = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <div>
          <Routes>
            <Route exact path="marvel" element={<MarvelScreen />} />
            <Route exact path="heroe/:heroeId" element={<HeroScreen />} />
            <Route exact path="/dc" element={<DcScreen />} />
            <Route element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
};

export default DashBoardRoutes;
