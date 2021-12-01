import React from "react";
import AppRouter from "../routers/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

const HeroesApp = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default HeroesApp;
