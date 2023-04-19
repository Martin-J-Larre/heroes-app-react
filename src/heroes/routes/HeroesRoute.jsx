import React from "react";
import { Navbar } from "../../ui";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dc, Hero, Marvel, Search } from "../pages";

export const HeroesRoute = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/marvel" element={<Marvel />} />
          <Route path="/dc" element={<Dc />} />
          <Route path="/search" element={<Search />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
