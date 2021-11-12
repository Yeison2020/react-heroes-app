import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import DashBoardRoutes from "../../src/routers/DashBoardRoutes";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginScreen />}></Route>
          <Route path="/" element={<DashBoardRoutes />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
