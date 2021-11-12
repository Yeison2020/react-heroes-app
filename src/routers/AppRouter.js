import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import MarvelScreen from "../components/marvel/MarvelScreen";
import LoginScreen from "../components/login/LoginScreen";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MarvelScreen />}></Route>
          <Route path="/login" element={<LoginScreen />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
