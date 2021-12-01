import React from "react";
import { Routes, Route } from "react-router-dom";
import DcScreen from "../components/dc/DcScreen";
import LoginScreen from "../components/login/LoginScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import SearchScreen from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";
import HeroScreen from "../components/heros/HeroScreen";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<MarvelScreen />} />
          <Route path="/hero/:slug" element={<HeroScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/marvel" element={<MarvelScreen />} />
          <Route path="/dc" element={<DcScreen />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </div>
    </>
  );
};

export default AppRouter;
