import React from "react";
import { Routes, Route } from "react-router-dom";
import DcScreen from "../components/dc/DcScreen";
import LoginScreen from "../components/login/LoginScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import { BrowserRouter as Router } from "react-router-dom";
import SearchScreen from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MarvelScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/marvel" element={<MarvelScreen />} />
        <Route path="/dc" element={<DcScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
